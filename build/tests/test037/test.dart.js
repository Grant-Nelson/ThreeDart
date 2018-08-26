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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dy(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dz=function(){}
var dart=[["","",,H,{"^":"",o8:{"^":"b;a"}}],["","",,J,{"^":"",
H:function(a){return void 0},
dF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cC:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dD==null){H.my()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c5("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cW()]
if(v!=null)return v
v=H.mD(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cW(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
p:{"^":"b;",
u:function(a,b){return a===b},
gS:function(a){return H.bF(a)},
j:["ei",function(a){return"Instance of '"+H.ba(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hK:{"^":"p;",
j:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isah:1},
eg:{"^":"p;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gS:function(a){return 0},
$isE:1},
cX:{"^":"p;",
gS:function(a){return 0},
j:["ej",function(a){return String(a)}]},
is:{"^":"cX;"},
c6:{"^":"cX;"},
c2:{"^":"cX;",
j:function(a){var z=a[$.$get$e0()]
if(z==null)return this.ej(a)
return"JavaScript function for "+H.l(J.aa(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscS:1},
b6:{"^":"p;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.A("add"))
a.push(b)},
O:function(a,b){var z
if(!!a.fixed$length)H.q(P.A("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
I:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aW(a))}},
X:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
ho:function(a,b,c,d){var z,y,x
H.z(b,d)
H.f(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aW(a))}return y},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
bK:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a2(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.y(a,0)])
return H.h(a.slice(b,c),[H.y(a,0)])},
gay:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hI())},
aw:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.q(P.A("fill range"))
P.aQ(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.B(0,1))a[z]=d},
bm:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
j:function(a){return P.cU(a,"[","]")},
ga_:function(a){return new J.at(a,a.length,0,[H.y(a,0)])},
gS:function(a){return H.bF(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cc(b,"newLength",null))
if(b<0)throw H.a(P.a2(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b>=a.length||b<0)throw H.a(H.aJ(a,b))
return a[b]},
m:function(a,b,c){H.C(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b>=a.length||b<0)throw H.a(H.aJ(a,b))
a[b]=c},
$isk:1,
$isd:1,
q:{
hJ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a2(a,0,4294967295,"length",null))
return J.ed(new Array(a),b)},
ed:function(a,b){return J.bz(H.h(a,[b]))},
bz:function(a){H.bT(a)
a.fixed$length=Array
return a}}},
o7:{"^":"b6;$ti"},
at:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c0:{"^":"p;",
ghu:function(a){return a===0?1/a<0:a<0},
i4:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
b_:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
e7:function(a,b){var z
if(b>20)throw H.a(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghu(a))return"-"+z
return z},
b9:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.A("Unexpected toString result: "+z))
x=J.aK(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.i("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
i:function(a,b){if(typeof b!=="number")throw H.a(H.a9(b))
return a*b},
ai:function(a,b){var z
if(typeof b!=="number")throw H.a(H.a9(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
el:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.da(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.da(a,b)},
da:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aH:function(a,b){var z
if(a>0)z=this.d8(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fE:function(a,b){if(b<0)throw H.a(H.a9(b))
return this.d8(a,b)},
d8:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.a9(b))
return a<b},
$isu:1,
$isX:1},
ef:{"^":"c0;",$iso:1},
ee:{"^":"c0;"},
c1:{"^":"p;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b<0)throw H.a(H.aJ(a,b))
if(b>=a.length)H.q(H.aJ(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aJ(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.L(b)
if(typeof b!=="string")throw H.a(P.cc(b,null,null))
return a+b},
aR:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.a9(b))
c=P.aQ(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.a9(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a9:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.a9(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a8:function(a,b){return this.a9(a,b,0)},
v:function(a,b,c){H.C(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.a9(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.cs(b,null,null))
if(b>c)throw H.a(P.cs(b,null,null))
if(c>a.length)throw H.a(P.cs(c,null,null))
return a.substring(b,c)},
az:function(a,b){return this.v(a,b,null)},
i:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hJ:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.i(c,z)+a},
ac:function(a,b){return this.hJ(a,b," ")},
dQ:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dP:function(a,b){return this.dQ(a,b,0)},
hd:function(a,b,c){if(c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
return H.na(a,b,c)},
j:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iser:1,
$isi:1}}],["","",,H,{"^":"",
cD:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hI:function(){return new P.j0("No element")},
hc:{"^":"jC;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.V(this.a,b)},
$ascv:function(){return[P.o]},
$asx:function(){return[P.o]},
$ask:function(){return[P.o]},
$asd:function(){return[P.o]}},
hs:{"^":"k;"},
hZ:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aK(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aW(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
i5:{"^":"k;a,b,$ti",
ga_:function(a){return new H.i6(J.bt(this.a),this.b,this.$ti)},
gl:function(a){return J.as(this.a)},
K:function(a,b){return this.b.$1(J.cI(this.a,b))},
$ask:function(a,b){return[b]}},
i6:{"^":"cV;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascV:function(a,b){return[b]}},
k8:{"^":"k;a,b,$ti",
ga_:function(a){return new H.k9(J.bt(this.a),this.b,this.$ti)}},
k9:{"^":"cV;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
ci:{"^":"b;$ti"},
cv:{"^":"b;$ti",
m:function(a,b,c){H.C(b)
H.z(c,H.aL(this,"cv",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){H.z(d,H.aL(this,"cv",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jC:{"^":"cn+cv;"}}],["","",,H,{"^":"",
hg:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mr:function(a){return init.types[H.C(a)]},
fL:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.H(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aa(a)
if(typeof z!=="string")throw H.a(H.a9(a))
return z},
bF:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iC:function(a,b){var z,y,x,w,v,u
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
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
ba:function(a){var z,y,x,w,v,u,t,s,r
z=J.H(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.H(a).$isc6){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.az(w,1)
r=H.dE(H.bT(H.b0(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iu:function(){if(!!self.location)return self.location.href
return},
et:function(a){var z,y,x,w,v
H.bT(a)
z=J.as(a)
if(typeof z!=="number")return z.ef()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iD:function(a){var z,y,x,w
z=H.h([],[P.o])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a9(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aH(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a9(w))}return H.et(z)},
eu:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a9(x))
if(x<0)throw H.a(H.a9(x))
if(x>65535)return H.iD(a)}return H.et(a)},
iE:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ef()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cq:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aH(z,10))>>>0,56320|z&1023)}}throw H.a(P.a2(a,0,1114111,null,null))},
af:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iB:function(a){return a.b?H.af(a).getUTCFullYear()+0:H.af(a).getFullYear()+0},
iz:function(a){return a.b?H.af(a).getUTCMonth()+1:H.af(a).getMonth()+1},
iv:function(a){return a.b?H.af(a).getUTCDate()+0:H.af(a).getDate()+0},
iw:function(a){return a.b?H.af(a).getUTCHours()+0:H.af(a).getHours()+0},
iy:function(a){return a.b?H.af(a).getUTCMinutes()+0:H.af(a).getMinutes()+0},
iA:function(a){return a.b?H.af(a).getUTCSeconds()+0:H.af(a).getSeconds()+0},
ix:function(a){return a.b?H.af(a).getUTCMilliseconds()+0:H.af(a).getMilliseconds()+0},
n:function(a){throw H.a(H.a9(a))},
c:function(a,b){if(a==null)J.as(a)
throw H.a(H.aJ(a,b))},
aJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
z=H.C(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cs(b,"index",null)},
ml:function(a,b,c){if(a>c)return new P.cr(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cr(a,c,!0,b,"end","Invalid value")
return new P.aM(!0,b,"end",null)},
a9:function(a){return new P.aM(!0,a,null,null)},
ma:function(a){if(typeof a!=="number")throw H.a(H.a9(a))
return a},
a:function(a){var z
if(a==null)a=new P.eq()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fS})
z.name=""}else z.toString=H.fS
return z},
fS:function(){return J.aa(this.dartException)},
q:function(a){throw H.a(a)},
D:function(a){throw H.a(P.aW(a))},
ar:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ne(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aH(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cY(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ep(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eI()
u=$.$get$eJ()
t=$.$get$eK()
s=$.$get$eL()
r=$.$get$eP()
q=$.$get$eQ()
p=$.$get$eN()
$.$get$eM()
o=$.$get$eS()
n=$.$get$eR()
m=v.ab(y)
if(m!=null)return z.$1(H.cY(H.L(y),m))
else{m=u.ab(y)
if(m!=null){m.method="call"
return z.$1(H.cY(H.L(y),m))}else{m=t.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=r.ab(y)
if(m==null){m=q.ab(y)
if(m==null){m=p.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=o.ab(y)
if(m==null){m=n.ab(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ep(H.L(y),m))}}return z.$1(new H.jB(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ez()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aM(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ez()
return a},
br:function(a){var z
if(a==null)return new H.fi(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fi(a)},
mo:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mA:function(a,b,c,d,e,f){H.e(a,"$iscS")
switch(H.C(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bp:function(a,b){var z
H.C(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mA)
a.$identity=z
return z},
hb:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.H(d).$isd){z.$reflectionInfo=d
x=H.iJ(z).r}else x=d
w=e?Object.create(new H.j1().constructor.prototype):Object.create(new H.cL(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.B()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dX(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mr,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dQ:H.cM
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
h8:function(a,b,c,d){var z=H.cM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dX:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ha(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h8(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.B()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bu
if(v==null){v=H.cd("self")
$.bu=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.B()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bu
if(v==null){v=H.cd("self")
$.bu=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
h9:function(a,b,c,d){var z,y
z=H.cM
y=H.dQ
switch(b?-1:a){case 0:throw H.a(H.iT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ha:function(a,b){var z,y,x,w,v,u,t,s
z=$.bu
if(z==null){z=H.cd("self")
$.bu=z}y=$.dP
if(y==null){y=H.cd("receiver")
$.dP=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h9(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.az
if(typeof y!=="number")return y.B()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.B()
$.az=y+1
return new Function(z+y+"}")()},
dy:function(a,b,c,d,e,f,g){var z,y
z=J.bz(H.bT(b))
H.C(c)
y=!!J.H(d).$isd?J.bz(d):d
return H.hb(a,z,c,y,!!e,f,g)},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ax(a,"String"))},
mm:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"double"))},
mZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"num"))},
fF:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ax(a,"bool"))},
C:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ax(a,"int"))},
fQ:function(a,b){throw H.a(H.ax(a,H.L(b).substring(3)))},
n0:function(a,b){var z=J.aK(b)
throw H.a(H.h7(a,z.v(b,3,z.gl(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.fQ(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else z=!0
if(z)return a
H.n0(a,b)},
bT:function(a){if(a==null)return a
if(!!J.H(a).$isd)return a
throw H.a(H.ax(a,"List"))},
fN:function(a,b){if(a==null)return a
if(!!J.H(a).$isd)return a
if(J.H(a)[b])return a
H.fQ(a,b)},
fH:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.C(z)]
else return a.$S()}return},
c7:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fH(J.H(a))
if(z==null)return!1
y=H.fK(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.du)return a
$.du=!0
try{if(H.c7(a,b))return a
z=H.ca(b)
y=H.ax(a,z)
throw H.a(y)}finally{$.du=!1}},
dA:function(a,b){if(a!=null&&!H.dx(a,b))H.q(H.ax(a,H.ca(b)))
return a},
fA:function(a){var z
if(a instanceof H.m){z=H.fH(J.H(a))
if(z!=null)return H.ca(z)
return"Closure"}return H.ba(a)},
nb:function(a){throw H.a(new P.hk(H.L(a)))},
fI:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
pf:function(a,b,c){return H.bs(a["$as"+H.l(c)],H.b0(b))},
aV:function(a,b,c,d){var z
H.L(c)
H.C(d)
z=H.bs(a["$as"+H.l(c)],H.b0(b))
return z==null?null:z[d]},
aL:function(a,b,c){var z
H.L(b)
H.C(c)
z=H.bs(a["$as"+H.l(b)],H.b0(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.C(b)
z=H.b0(a)
return z==null?null:z[b]},
ca:function(a){var z=H.b1(a,null)
return z},
b1:function(a,b){var z,y
H.w(b,"$isd",[P.i],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dE(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.C(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.c(b,y)
return H.l(b[y])}if('func' in a)return H.m0(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.c(b,r)
t=C.b.B(t,b[r])
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
for(z=H.mn(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.L(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dE:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.i],"$asd")
if(a==null)return""
z=new P.ak("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b1(u,c)}v="<"+z.j(0)+">"
return v},
bs:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bo:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b0(a)
y=J.H(a)
if(y[b]==null)return!1
return H.fD(H.bs(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.L(b)
H.bT(c)
H.L(d)
if(a==null)return a
z=H.bo(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dE(c,0,null)
throw H.a(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fD:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ap(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ap(a[y],b,c[y],d))return!1
return!0},
pd:function(a,b,c){return a.apply(b,H.bs(J.H(b)["$as"+H.l(c)],H.b0(b)))},
fM:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="E"||a===-1||a===-2||H.fM(z)}return!1},
dx:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="E"||b===-1||b===-2||H.fM(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c7(a,b)}y=J.H(a).constructor
x=H.b0(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ap(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dx(a,b))throw H.a(H.ax(a,H.ca(b)))
return a},
ap:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ap(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.fK(a,b,c,d)
if('func' in a)return c.builtin$cls==="cS"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ap("type" in a?a.type:null,b,x,d)
else if(H.ap(a,b,x,d))return!0
else{if(!('$is'+"bx" in y.prototype))return!1
w=y.prototype["$as"+"bx"]
v=H.bs(w,z?a.slice(1):null)
return H.ap(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.ca(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fD(H.bs(r,z),b,u,d)},
fK:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.mY(m,b,l,d)},
mY:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ap(c[w],d,a[w],b))return!1}return!0},
pe:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
mD:function(a){var z,y,x,w,v,u
z=H.L($.fJ.$1(a))
y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.L($.fC.$2(a,z))
if(z!=null){y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cF(x)
$.cB[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cE[z]=x
return x}if(v==="-"){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fP(a,x)
if(v==="*")throw H.a(P.c5(z))
if(init.leafTags[z]===true){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fP(a,x)},
fP:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dF(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cF:function(a){return J.dF(a,!1,null,!!a.$isF)},
mX:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cF(z)
else return J.dF(z,c,null,null)},
my:function(){if(!0===$.dD)return
$.dD=!0
H.mz()},
mz:function(){var z,y,x,w,v,u,t,s
$.cB=Object.create(null)
$.cE=Object.create(null)
H.mu()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fR.$1(v)
if(u!=null){t=H.mX(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mu:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bn(C.J,H.bn(C.O,H.bn(C.u,H.bn(C.u,H.bn(C.N,H.bn(C.K,H.bn(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fJ=new H.mv(v)
$.fC=new H.mw(u)
$.fR=new H.mx(t)},
bn:function(a,b){return a(b)||b},
na:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hf:{"^":"b;$ti",
j:function(a){return P.d_(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hg()},
$isI:1},
hh:{"^":"hf;a,b,c,$ti",
gl:function(a){return this.a},
ce:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.ce(0,b))return
return this.cZ(b)},
cZ:function(a){return this.b[H.L(a)]},
I:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.f(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cZ(v),z))}}},
iI:{"^":"b;a,b,c,d,e,f,r,0x",q:{
iJ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bz(z)
y=z[0]
x=z[1]
return new H.iI(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jn:{"^":"b;a,b,c,d,e,f",
ab:function(a){var z,y,x
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
aC:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eO:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ip:{"^":"a5;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
ep:function(a,b){return new H.ip(a,b==null?null:b.method)}}},
hN:{"^":"a5;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
q:{
cY:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hN(a,y,z?null:b.receiver)}}},
jB:{"^":"a5;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ne:{"^":"m:18;a",
$1:function(a){if(!!J.H(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fi:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaw:1},
m:{"^":"b;",
j:function(a){return"Closure '"+H.ba(this).trim()+"'"},
gec:function(){return this},
$iscS:1,
gec:function(){return this}},
eE:{"^":"m;"},
j1:{"^":"eE;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cL:{"^":"eE;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cL))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bF(this.a)
else y=typeof z!=="object"?J.b2(z):H.bF(z)
return(y^H.bF(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.ba(z)+"'")},
q:{
cM:function(a){return a.a},
dQ:function(a){return a.c},
cd:function(a){var z,y,x,w,v
z=new H.cL("self","target","receiver","name")
y=J.bz(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jo:{"^":"a5;a",
j:function(a){return this.a},
q:{
ax:function(a,b){return new H.jo("TypeError: "+H.l(P.ch(a))+": type '"+H.fA(a)+"' is not a subtype of type '"+b+"'")}}},
h6:{"^":"a5;a",
j:function(a){return this.a},
q:{
h7:function(a,b){return new H.h6("CastError: "+H.l(P.ch(a))+": type '"+H.fA(a)+"' is not a subtype of type '"+b+"'")}}},
iS:{"^":"a5;a",
j:function(a){return"RuntimeError: "+H.l(this.a)},
q:{
iT:function(a){return new H.iS(a)}}},
cm:{"^":"i2;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gax:function(a){return new H.hS(this,[H.y(this,0)])},
ce:function(a,b){var z=this.b
if(z==null)return!1
return this.eF(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.be(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.be(w,b)
x=y==null?null:y.b
return x}else return this.hs(b)},
hs:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.d0(z,this.dR(a))
x=this.dS(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bW()
this.b=z}this.cO(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bW()
this.c=y}this.cO(y,b,c)}else this.ht(b,c)},
ht:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bW()
this.d=z}y=this.dR(a)
x=this.d0(z,y)
if(x==null)this.c2(z,y,[this.bX(a,b)])
else{w=this.dS(x,a)
if(w>=0)x[w].b=b
else x.push(this.bX(a,b))}},
I:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aW(this))
z=z.c}},
cO:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.be(a,b)
if(z==null)this.c2(a,b,this.bX(b,c))
else z.b=c},
eP:function(){this.r=this.r+1&67108863},
bX:function(a,b){var z,y
z=new H.hR(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eP()
return z},
dR:function(a){return J.b2(a)&0x3ffffff},
dS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
j:function(a){return P.d_(this)},
be:function(a,b){return a[b]},
d0:function(a,b){return a[b]},
c2:function(a,b,c){a[b]=c},
eI:function(a,b){delete a[b]},
eF:function(a,b){return this.be(a,b)!=null},
bW:function(){var z=Object.create(null)
this.c2(z,"<non-identifier-key>",z)
this.eI(z,"<non-identifier-key>")
return z},
$isej:1},
hR:{"^":"b;a,b,0c,0d"},
hS:{"^":"hs;a,$ti",
gl:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.hT(z,z.r,this.$ti)
y.c=z.e
return y}},
hT:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aW(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mv:{"^":"m:18;a",
$1:function(a){return this.a(a)}},
mw:{"^":"m:27;a",
$2:function(a,b){return this.a(a,b)}},
mx:{"^":"m:53;a",
$1:function(a){return this.a(H.L(a))}},
hL:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iser:1,
$isiK:1,
q:{
hM:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mn:function(a){return J.ed(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
n_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bl:function(a){return a},
ik:function(a){return new Int8Array(a)},
aI:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aJ(b,a))},
lV:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.ml(a,b,c))
return b},
eo:{"^":"p;",$iseo:1,"%":"ArrayBuffer"},
d4:{"^":"p;",$isd4:1,$isjp:1,"%":"DataView;ArrayBufferView;d3|fc|fd|il|fe|ff|aY"},
d3:{"^":"d4;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dz},
il:{"^":"fd;",
k:function(a,b){H.aI(b,a,a.length)
return a[b]},
m:function(a,b,c){H.C(b)
H.mm(c)
H.aI(b,a,a.length)
a[b]=c},
$asci:function(){return[P.u]},
$asx:function(){return[P.u]},
$isk:1,
$ask:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
aY:{"^":"ff;",
m:function(a,b,c){H.C(b)
H.C(c)
H.aI(b,a,a.length)
a[b]=c},
$asci:function(){return[P.o]},
$asx:function(){return[P.o]},
$isk:1,
$ask:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]}},
oj:{"^":"aY;",
k:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ok:{"^":"aY;",
k:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ol:{"^":"aY;",
k:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int8Array"},
om:{"^":"aY;",
k:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
on:{"^":"aY;",
k:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oo:{"^":"aY;",
gl:function(a){return a.length},
k:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d5:{"^":"aY;",
gl:function(a){return a.length},
k:function(a,b){H.aI(b,a,a.length)
return a[b]},
bK:function(a,b,c){return new Uint8Array(a.subarray(b,H.lV(b,c,a.length)))},
$isd5:1,
$isP:1,
"%":";Uint8Array"},
fc:{"^":"d3+x;"},
fd:{"^":"fc+ci;"},
fe:{"^":"d3+x;"},
ff:{"^":"fe+ci;"}}],["","",,P,{"^":"",
kb:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.m7()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bp(new P.kd(z),1)).observe(y,{childList:true})
return new P.kc(z,y,x)}else if(self.setImmediate!=null)return P.m8()
return P.m9()},
p2:[function(a){self.scheduleImmediate(H.bp(new P.ke(H.f(a,{func:1,ret:-1})),0))},"$1","m7",4,0,15],
p3:[function(a){self.setImmediate(H.bp(new P.kf(H.f(a,{func:1,ret:-1})),0))},"$1","m8",4,0,15],
p4:[function(a){H.f(a,{func:1,ret:-1})
P.le(0,a)},"$1","m9",4,0,15],
eG:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bh]})
z=C.d.a3(a.a,1000)
return P.lf(z<0?0:z,b)},
m3:function(a,b){if(H.c7(a,{func:1,args:[P.b,P.aw]}))return b.hS(a,null,P.b,P.aw)
if(H.c7(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m2:function(){var z,y
for(;z=$.bm,z!=null;){$.bR=null
y=z.b
$.bm=y
if(y==null)$.bQ=null
z.a.$0()}},
pc:[function(){$.dv=!0
try{P.m2()}finally{$.bR=null
$.dv=!1
if($.bm!=null)$.$get$dn().$1(P.fE())}},"$0","fE",0,0,4],
fz:function(a){var z=new P.f5(H.f(a,{func:1,ret:-1}))
if($.bm==null){$.bQ=z
$.bm=z
if(!$.dv)$.$get$dn().$1(P.fE())}else{$.bQ.b=z
$.bQ=z}},
m6:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bm
if(z==null){P.fz(a)
$.bR=$.bQ
return}y=new P.f5(a)
x=$.bR
if(x==null){y.b=z
$.bR=y
$.bm=y}else{y.b=x.b
x.b=y
$.bR=y
if(y.b==null)$.bQ=y}},
n1:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.U
if(C.j===y){P.cA(null,null,C.j,a)
return}y.toString
P.cA(null,null,y,H.f(y.df(a),z))},
jl:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bh]}
H.f(b,z)
y=$.U
if(y===C.j){y.toString
return P.eG(a,b)}x=y.dg(b,P.bh)
$.U.toString
return P.eG(a,H.f(x,z))},
cz:function(a,b,c,d,e){var z={}
z.a=d
P.m6(new P.m4(z,e))},
fv:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.U
if(y===c)return d.$0()
$.U=c
z=y
try{y=d.$0()
return y}finally{$.U=z}},
fw:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.U
if(y===c)return d.$1(e)
$.U=c
z=y
try{y=d.$1(e)
return y}finally{$.U=z}},
m5:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.U
if(y===c)return d.$2(e,f)
$.U=c
z=y
try{y=d.$2(e,f)
return y}finally{$.U=z}},
cA:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.df(d):c.h9(d,-1)
P.fz(d)},
kd:{"^":"m:23;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kc:{"^":"m:34;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ke:{"^":"m:0;a",
$0:function(){this.a.$0()}},
kf:{"^":"m:0;a",
$0:function(){this.a.$0()}},
fl:{"^":"b;a,0b,c",
ev:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bp(new P.lh(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
ew:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bp(new P.lg(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbh:1,
q:{
le:function(a,b){var z=new P.fl(!0,0)
z.ev(a,b)
return z},
lf:function(a,b){var z=new P.fl(!1,0)
z.ew(a,b)
return z}}},
lh:{"^":"m:4;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lg:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.el(w,x)}z.c=y
this.d.$1(z)}},
bk:{"^":"b;0a,b,c,d,e,$ti",
hA:function(a){if(this.c!==6)return!0
return this.b.b.cC(H.f(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hr:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.c7(z,{func:1,args:[P.b,P.aw]}))return H.dA(w.hZ(z,a.a,a.b,null,y,P.aw),x)
else return H.dA(w.cC(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;d9:a<,b,0fu:c<,$ti",
e6:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.U
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.m3(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.U,[c])
w=b==null?1:3
this.cP(new P.bk(x,w,a,b,[z,c]))
return x},
i3:function(a,b){return this.e6(a,null,b)},
cP:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbk")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaS")
z=y.a
if(z<4){y.cP(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cA(null,null,z,H.f(new P.ku(this,a),{func:1,ret:-1}))}},
d4:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbk")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaS")
y=u.a
if(y<4){u.d4(a)
return}this.a=y
this.c=u.c}z.a=this.bg(a)
y=this.b
y.toString
P.cA(null,null,y,H.f(new P.kz(z,this),{func:1,ret:-1}))}},
bZ:function(){var z=H.e(this.c,"$isbk")
this.c=null
return this.bg(z)},
bg:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cU:function(a){var z,y,x,w
z=H.y(this,0)
H.dA(a,{futureOr:1,type:z})
y=this.$ti
x=H.bo(a,"$isbx",y,"$asbx")
if(x){z=H.bo(a,"$isaS",y,null)
if(z)P.f8(a,this)
else P.kv(a,this)}else{w=this.bZ()
H.z(a,z)
this.a=4
this.c=a
P.bL(this,w)}},
bP:[function(a,b){var z
H.e(b,"$isaw")
z=this.bZ()
this.a=8
this.c=new P.ai(a,b)
P.bL(this,z)},function(a){return this.bP(a,null)},"ie","$2","$1","geD",4,2,28],
$isbx:1,
q:{
kv:function(a,b){var z,y,x
b.a=1
try{a.e6(new P.kw(b),new P.kx(b),null)}catch(x){z=H.ar(x)
y=H.br(x)
P.n1(new P.ky(b,z,y))}},
f8:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaS")
if(z>=4){y=b.bZ()
b.a=a.a
b.c=a.c
P.bL(b,y)}else{y=H.e(b.c,"$isbk")
b.a=2
b.c=a
a.d4(y)}},
bL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isai")
y=y.b
u=v.a
t=v.b
y.toString
P.cz(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.e(r,"$isai")
y=y.b
u=r.a
t=r.b
y.toString
P.cz(null,null,y,u,t)
return}o=$.U
if(o==null?q!=null:o!==q)$.U=q
else o=null
y=b.c
if(y===8)new P.kC(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kB(x,b,r).$0()}else if((y&2)!==0)new P.kA(z,x,b).$0()
if(o!=null)$.U=o
y=x.b
if(!!J.H(y).$isbx){if(y.a>=4){n=H.e(t.c,"$isbk")
t.c=null
b=t.bg(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f8(y,t)
return}}m=b.b
n=H.e(m.c,"$isbk")
m.c=null
b=m.bg(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.e(u,"$isai")
m.a=8
m.c=u}z.a=m
y=m}}}},
ku:{"^":"m:0;a,b",
$0:function(){P.bL(this.a,this.b)}},
kz:{"^":"m:0;a,b",
$0:function(){P.bL(this.b,this.a.a)}},
kw:{"^":"m:23;a",
$1:function(a){var z=this.a
z.a=0
z.cU(a)}},
kx:{"^":"m:29;a",
$2:function(a,b){this.a.bP(a,H.e(b,"$isaw"))},
$1:function(a){return this.$2(a,null)}},
ky:{"^":"m:0;a,b,c",
$0:function(){this.a.bP(this.b,this.c)}},
kC:{"^":"m:4;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e4(H.f(w.d,{func:1}),null)}catch(v){y=H.ar(v)
x=H.br(v)
if(this.d){w=H.e(this.a.a.c,"$isai").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isai")
else u.b=new P.ai(y,x)
u.a=!0
return}if(!!J.H(z).$isbx){if(z instanceof P.aS&&z.gd9()>=4){if(z.gd9()===8){w=this.b
w.b=H.e(z.gfu(),"$isai")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i3(new P.kD(t),null)
w.a=!1}}},
kD:{"^":"m:45;a",
$1:function(a){return this.a}},
kB:{"^":"m:4;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cC(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ar(t)
y=H.br(t)
x=this.a
x.b=new P.ai(z,y)
x.a=!0}}},
kA:{"^":"m:4;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isai")
w=this.c
if(w.hA(z)&&w.e!=null){v=this.b
v.b=w.hr(z)
v.a=!1}}catch(u){y=H.ar(u)
x=H.br(u)
w=H.e(this.a.a.c,"$isai")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ai(y,x)
s.a=!0}}},
f5:{"^":"b;a,0b"},
da:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aS(0,$.U,[P.o])
z.a=0
this.hx(new P.j4(z,this),!0,new P.j5(z,y),y.geD())
return y}},
j4:{"^":"m;a,b",
$1:function(a){H.z(a,H.aL(this.b,"da",0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.aL(this.b,"da",0)]}}},
j5:{"^":"m:0;a,b",
$0:function(){this.b.cU(this.a.a)}},
eA:{"^":"b;$ti"},
j3:{"^":"b;"},
bh:{"^":"b;"},
ai:{"^":"b;a,b",
j:function(a){return H.l(this.a)},
$isa5:1},
lJ:{"^":"b;",$isp1:1},
m4:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eq()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
kX:{"^":"lJ;",
i_:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.U){a.$0()
return}P.fv(null,null,this,a,-1)}catch(x){z=H.ar(x)
y=H.br(x)
P.cz(null,null,this,z,H.e(y,"$isaw"))}},
i0:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.U){a.$1(b)
return}P.fw(null,null,this,a,b,-1,c)}catch(x){z=H.ar(x)
y=H.br(x)
P.cz(null,null,this,z,H.e(y,"$isaw"))}},
h9:function(a,b){return new P.kZ(this,H.f(a,{func:1,ret:b}),b)},
df:function(a){return new P.kY(this,H.f(a,{func:1,ret:-1}))},
dg:function(a,b){return new P.l_(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
e4:function(a,b){H.f(a,{func:1,ret:b})
if($.U===C.j)return a.$0()
return P.fv(null,null,this,a,b)},
cC:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.U===C.j)return a.$1(b)
return P.fw(null,null,this,a,b,c,d)},
hZ:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.U===C.j)return a.$2(b,c)
return P.m5(null,null,this,a,b,c,d,e,f)},
hS:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
kZ:{"^":"m;a,b,c",
$0:function(){return this.a.e4(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kY:{"^":"m:4;a,b",
$0:function(){return this.a.i_(this.b)}},
l_:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.i0(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hU:function(a,b,c,d,e){return new H.cm(0,0,[d,e])},
hV:function(a,b,c){H.bT(a)
return H.w(H.mo(a,new H.cm(0,0,[b,c])),"$isej",[b,c],"$asej")},
ek:function(a,b){return new H.cm(0,0,[a,b])},
hY:function(a,b,c,d){return new P.kJ(0,0,[d])},
hH:function(a,b,c){var z,y
if(P.dw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bS()
C.a.h(y,a)
try{P.m1(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.eB(b,H.fN(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cU:function(a,b,c){var z,y,x
if(P.dw(a))return b+"..."+c
z=new P.ak(b)
y=$.$get$bS()
C.a.h(y,a)
try{x=z
x.a=P.eB(x.gaE(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
dw:function(a){var z,y
for(z=0;y=$.$get$bS(),z<y.length;++z)if(a===y[z])return!0
return!1},
m1:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.G();t=s,s=r){r=z.gP(z);++x
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
hW:function(a,b,c){var z=P.hU(null,null,null,b,c)
a.I(0,new P.hX(z,b,c))
return z},
d_:function(a){var z,y,x
z={}
if(P.dw(a))return"{...}"
y=new P.ak("")
try{C.a.h($.$get$bS(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
J.dK(a,new P.i3(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bS()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
kJ:{"^":"kE;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fb(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dq()
this.b=z}return this.cS(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dq()
this.c=y}return this.cS(y,b)}else return this.ex(0,b)},
ex:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dq()
this.d=z}y=this.cV(b)
x=z[y]
if(x==null)z[y]=[this.bO(b)]
else{if(this.d_(x,b)>=0)return!1
x.push(this.bO(b))}return!0},
O:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d5(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d5(this.c,b)
else return this.fl(0,b)},
fl:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eM(z,b)
x=this.d_(y,b)
if(x<0)return!1
this.dc(y.splice(x,1)[0])
return!0},
cS:function(a,b){H.z(b,H.y(this,0))
if(H.e(a[b],"$isdp")!=null)return!1
a[b]=this.bO(b)
return!0},
d5:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isdp")
if(z==null)return!1
this.dc(z)
delete a[b]
return!0},
cT:function(){this.r=this.r+1&67108863},
bO:function(a){var z,y
z=new P.dp(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cT()
return z},
dc:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cT()},
cV:function(a){return J.b2(a)&0x3ffffff},
eM:function(a,b){return a[this.cV(b)]},
d_:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
q:{
dq:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dp:{"^":"b;a,0b,0c"},
kK:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aW(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
q:{
fb:function(a,b,c){var z=new P.kK(a,b,[c])
z.c=a.e
return z}}},
kE:{"^":"iU;"},
hX:{"^":"m:8;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cn:{"^":"kL;",$isk:1,$isd:1},
x:{"^":"b;$ti",
ga_:function(a){return new H.hZ(a,this.gl(a),0,[H.aV(this,a,"x",0)])},
K:function(a,b){return this.k(a,b)},
I:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aV(this,a,"x",0)]})
z=this.gl(a)
if(typeof z!=="number")return H.n(z)
y=0
for(;y<z;++y){b.$1(this.k(a,y))
if(z!==this.gl(a))throw H.a(P.aW(a))}},
i6:function(a,b){var z,y,x
z=H.h([],[H.aV(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
i5:function(a){return this.i6(a,!0)},
aw:function(a,b,c,d){var z
H.z(d,H.aV(this,a,"x",0))
P.aQ(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
j:function(a){return P.cU(a,"[","]")}},
i2:{"^":"ag;"},
i3:{"^":"m:8;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ag:{"^":"b;$ti",
I:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.aV(this,a,"ag",0),H.aV(this,a,"ag",1)]})
for(z=J.bt(this.gax(a));z.G();){y=z.gP(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.as(this.gax(a))},
j:function(a){return P.d_(a)},
$isI:1},
lm:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
i4:{"^":"b;$ti",
k:function(a,b){return J.dJ(this.a,b)},
m:function(a,b,c){J.cG(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
I:function(a,b){J.dK(this.a,H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.as(this.a)},
j:function(a){return J.aa(this.a)},
$isI:1},
eZ:{"^":"ln;a,$ti"},
iV:{"^":"b;$ti",
j:function(a){return P.cU(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dL("index"))
if(b<0)H.q(P.a2(b,0,null,"index",null))
for(z=P.fb(this,this.r,H.y(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isk:1},
iU:{"^":"iV;"},
kL:{"^":"b+x;"},
ln:{"^":"i4+lm;$ti"}}],["","",,P,{"^":"",h3:{"^":"bW;a",
hC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aQ(c,d,b.length,null,null,null)
z=$.$get$f6()
if(typeof d!=="number")return H.n(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cD(C.b.H(b,s))
o=H.cD(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.c(z,n)
m=z[n]
if(m>=0){n=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ak("")
w.a+=C.b.v(b,x,y)
w.a+=H.cq(r)
x=s
continue}}throw H.a(P.Y("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dO(b,u,d,v,t,k)
else{j=C.d.ai(k-1,4)+1
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aR(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dO(b,u,d,v,t,i)
else{j=C.d.ai(i,4)
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aR(b,d,d,j===2?"==":"=")}return b},
$asbW:function(){return[[P.d,P.o],P.i]},
q:{
dO:function(a,b,c,d,e,f){if(C.d.ai(f,4)!==0)throw H.a(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},h4:{"^":"bv;a",
$asbv:function(){return[[P.d,P.o],P.i]}},bW:{"^":"b;$ti"},bv:{"^":"j3;$ti"},hu:{"^":"bW;",
$asbW:function(){return[P.i,[P.d,P.o]]}},jP:{"^":"hu;a",
ghm:function(){return C.F}},jW:{"^":"bv;",
aY:function(a,b,c){var z,y,x,w
z=a.length
P.aQ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lI(0,0,x)
if(w.eK(a,b,z)!==z)w.dd(J.fX(a,z-1),0)
return C.U.bK(x,0,w.b)},
cf:function(a){return this.aY(a,0,null)},
$asbv:function(){return[P.i,[P.d,P.o]]}},lI:{"^":"b;a,b,c",
dd:function(a,b){var z,y,x,w,v
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
eK:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dd(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},jQ:{"^":"bv;a",
aY:function(a,b,c){var z,y,x,w,v
H.w(a,"$isd",[P.o],"$asd")
z=P.jR(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.aQ(b,c,y,null,null,null)
x=new P.ak("")
w=new P.lF(!1,x,!0,0,0,0)
w.aY(a,b,y)
w.hn(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cf:function(a){return this.aY(a,0,null)},
$asbv:function(){return[[P.d,P.o],P.i]},
q:{
jR:function(a,b,c,d){H.w(b,"$isd",[P.o],"$asd")
if(b instanceof Uint8Array)return P.jS(!1,b,c,d)
return},
jS:function(a,b,c,d){var z,y,x
z=$.$get$f2()
if(z==null)return
y=0===c
if(y&&!0)return P.di(z,b)
x=b.length
d=P.aQ(c,d,x,null,null,null)
if(y&&d===x)return P.di(z,b)
return P.di(z,b.subarray(c,d))},
di:function(a,b){if(P.jU(b))return
return P.jV(a,b)},
jV:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ar(y)}return},
jU:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
jT:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ar(y)}return}}},lF:{"^":"b;a,b,c,d,e,f",
hn:function(a,b,c){var z
H.w(b,"$isd",[P.o],"$asd")
if(this.e>0){z=P.Y("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isd",[P.o],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lH(c)
v=new P.lG(this,b,c,a)
$label0$0:for(u=J.aK(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bG()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.d.b9(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.c(C.w,q)
if(z<=C.w[q]){q=P.Y("Overlong encoding of 0x"+C.d.b9(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.d.b9(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cq(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bI()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.d.b9(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.d.b9(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lH:{"^":"m:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isd",[P.o],"$asd")
z=this.a
for(y=J.aK(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bG()
if((w&127)!==w)return x-b}return z-b}},lG:{"^":"m:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.eC(this.d,a,b)}}}],["","",,P,{"^":"",
c9:function(a,b,c){var z
H.f(b,{func:1,ret:P.o,args:[P.i]})
z=H.iC(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Y(a,null,null))},
hw:function(a){var z=J.H(a)
if(!!z.$ism)return z.j(a)
return"Instance of '"+H.ba(a)+"'"},
i_:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hJ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
el:function(a,b,c){var z,y,x
z=[c]
y=H.h([],z)
for(x=a.ga_(a);x.G();)C.a.h(y,H.z(x.gP(x),c))
if(b)return y
return H.w(J.bz(y),"$isd",z,"$asd")},
eC:function(a,b,c){var z,y
z=P.o
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb6",[z],"$asb6")
y=a.length
c=P.aQ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.eu(z?C.a.bK(a,b,c):a)}if(!!J.H(a).$isd5)return H.iE(a,b,P.aQ(b,c,a.length,null,null,null))
return P.j6(a,b,c)},
j6:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.o],"$ask")
if(b<0)throw H.a(P.a2(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a2(c,b,J.as(a),null,null))
y=J.bt(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a2(c,b,x,null,null))
w.push(y.gP(y))}return H.eu(w)},
iL:function(a,b,c){return new H.hL(a,H.hM(a,!1,!0,!1))},
dh:function(){var z=H.iu()
if(z!=null)return P.jH(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
ch:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hw(a)},
v:function(a){return new P.f7(a)},
i0:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.o]})
z=H.h([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dH:function(a){H.n_(a)},
jH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.f_(b>0||c<c?C.b.v(a,b,c):a,5,null).gea()
else if(y===32)return P.f_(C.b.v(a,z,c),0,null).gea()}x=new Array(8)
x.fixed$length=Array
w=H.h(x,[P.o])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fx(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cI()
if(v>=b)if(P.fx(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.n(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.a9(a,"..",s)))n=r>s+2&&C.b.a9(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a9(a,"file",b)){if(u<=b){if(!C.b.a9(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aR(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a9(a,"http",b)){if(x&&t+3===s&&C.b.a9(a,"80",t+1))if(b===0&&!0){a=C.b.aR(a,t,s,"")
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
else if(v===z&&C.b.a9(a,"https",b)){if(x&&t+4===s&&C.b.a9(a,"443",t+1))if(b===0&&!0){a=C.b.aR(a,t,s,"")
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
q-=b}return new P.l1(a,v,u,t,s,r,q,o)}return P.lo(a,b,c,v,u,t,s,r,q,o)},
f1:function(a,b){var z=P.i
return C.a.ho(H.h(a.split("&"),[z]),P.ek(z,z),new P.jK(b),[P.I,P.i,P.i])},
jF:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jG(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c9(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.bI()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.c(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c9(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.bI()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.c(y,u)
y[u]=s
return y},
f0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jI(a)
y=new P.jJ(z,a)
if(a.length<2)z.$1("address is too short")
x=H.h([],[P.o])
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
else{p=P.jF(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.c(o,l)
o[l]=0
i=l+1
if(i>=n)return H.c(o,i)
o[i]=0
l+=2}else{i=C.d.aH(k,8)
if(l<0||l>=n)return H.c(o,l)
o[l]=i
i=l+1
if(i>=n)return H.c(o,i)
o[i]=k&255
l+=2}}return o},
lW:function(){var z,y,x,w,v
z=P.i0(22,new P.lY(),!0,P.P)
y=new P.lX(z)
x=new P.lZ()
w=new P.m_()
v=H.e(y.$2(0,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isP")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isP")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isP"),"]",5)
v=H.e(y.$2(9,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isP"),"az",21)
v=H.e(y.$2(21,245),"$isP")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fx:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isd",[P.o],"$asd")
z=$.$get$fy()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.c(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.c(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ah:{"^":"b;"},
"+bool":0,
aj:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aj))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.d.aH(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hl(H.iB(this))
y=P.bY(H.iz(this))
x=P.bY(H.iv(this))
w=P.bY(H.iw(this))
v=P.bY(H.iy(this))
u=P.bY(H.iA(this))
t=P.hm(H.ix(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hl:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"X;"},
"+double":0,
bw:{"^":"b;a",
i:function(a,b){return new P.bw(C.d.ad(this.a*b))},
M:function(a,b){return C.d.M(this.a,H.e(b,"$isbw").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bw))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.hr()
y=this.a
if(y<0)return"-"+new P.bw(0-y).j(0)
x=z.$1(C.d.a3(y,6e7)%60)
w=z.$1(C.d.a3(y,1e6)%60)
v=new P.hq().$1(y%1e6)
return""+C.d.a3(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
q:{
e6:function(a,b,c,d,e,f){return new P.bw(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hq:{"^":"m:25;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hr:{"^":"m:25;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
eq:{"^":"a5;",
j:function(a){return"Throw of null."}},
aM:{"^":"a5;a,b,c,d",
gbR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbQ:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbR()+y+x
if(!this.a)return w
v=this.gbQ()
u=P.ch(this.b)
return w+v+": "+H.l(u)},
q:{
bV:function(a){return new P.aM(!1,null,null,a)},
cc:function(a,b,c){return new P.aM(!0,a,b,c)},
dL:function(a){return new P.aM(!1,null,a,"Must not be null")}}},
cr:{"^":"aM;e,f,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
q:{
cs:function(a,b,c){return new P.cr(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cr(b,c,!0,a,d,"Invalid value")},
aQ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.a(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.a(P.a2(b,a,c,"end",f))
return b}return c}}},
hF:{"^":"aM;e,l:f>,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){if(J.fT(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
q:{
S:function(a,b,c,d,e){var z=H.C(e!=null?e:J.as(b))
return new P.hF(b,z,!0,a,c,"Index out of range")}}},
jD:{"^":"a5;a",
j:function(a){return"Unsupported operation: "+this.a},
q:{
A:function(a){return new P.jD(a)}}},
jA:{"^":"a5;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
c5:function(a){return new P.jA(a)}}},
j0:{"^":"a5;a",
j:function(a){return"Bad state: "+this.a}},
he:{"^":"a5;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.ch(z))+"."},
q:{
aW:function(a){return new P.he(a)}}},
iq:{"^":"b;",
j:function(a){return"Out of Memory"},
$isa5:1},
ez:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isa5:1},
hk:{"^":"a5;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f7:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
hC:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
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
return y+n+l+m+"\n"+C.b.i(" ",x-o+n.length)+"^\n"},
q:{
Y:function(a,b,c){return new P.hC(a,b,c)}}},
o:{"^":"X;"},
"+int":0,
k:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga_(this)
for(y=0;z.G();)++y
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dL("index"))
if(b<0)H.q(P.a2(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.G();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
j:function(a){return P.hH(this,"(",")")}},
cV:{"^":"b;$ti"},
d:{"^":"b;$ti",$isk:1},
"+List":0,
I:{"^":"b;$ti"},
E:{"^":"b;",
gS:function(a){return P.b.prototype.gS.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
X:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gS:function(a){return H.bF(this)},
j:function(a){return"Instance of '"+H.ba(this)+"'"},
toString:function(){return this.j(this)}},
aw:{"^":"b;"},
i:{"^":"b;",$iser:1},
"+String":0,
ak:{"^":"b;aE:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoM:1,
q:{
eB:function(a,b,c){var z=J.bt(b)
if(!z.G())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.G())}else{a+=H.l(z.gP(z))
for(;z.G();)a=a+c+H.l(z.gP(z))}return a}}},
jK:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isI",[z,z],"$asI")
H.L(b)
y=J.aK(b).dP(b,"=")
if(y===-1){if(b!=="")J.cG(a,P.ds(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.az(b,y+1)
z=this.a
J.cG(a,P.ds(x,0,x.length,z,!0),P.ds(w,0,w.length,z,!0))}return a}},
jG:{"^":"m:43;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
jI:{"^":"m:40;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jJ:{"^":"m:39;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c9(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cx:{"^":"b;bJ:a<,b,c,d,e_:e>,f,r,0x,0y,0z,0Q,0ch",
geb:function(){return this.b},
gcq:function(a){var z=this.c
if(z==null)return""
if(C.b.a8(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbB:function(a){var z=this.d
if(z==null)return P.fn(this.a)
return z},
gcz:function(a){var z=this.f
return z==null?"":z},
gdK:function(){var z=this.r
return z==null?"":z},
cB:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
if(x&&!C.b.a8(d,"/"))d="/"+d
g=P.dr(g,0,0,h)
return new P.cx(i,j,c,f,d,g,this.r)},
e3:function(a,b){return this.cB(a,null,null,null,null,null,null,b,null,null)},
gbC:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.eZ(P.f1(z==null?"":z,C.l),[y,y])
this.Q=y
z=y}return z},
gdL:function(){return this.c!=null},
gdO:function(){return this.f!=null},
gdM:function(){return this.r!=null},
j:function(a){var z,y,x,w
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
if(!!z.$isdg){y=this.a
x=b.gbJ()
if(y==null?x==null:y===x)if(this.c!=null===b.gdL()){y=this.b
x=b.geb()
if(y==null?x==null:y===x){y=this.gcq(this)
x=z.gcq(b)
if(y==null?x==null:y===x){y=this.gbB(this)
x=z.gbB(b)
if(y==null?x==null:y===x)if(this.e===z.ge_(b)){y=this.f
x=y==null
if(!x===b.gdO()){if(x)y=""
if(y===z.gcz(b)){z=this.r
y=z==null
if(!y===b.gdM()){if(y)z=""
z=z===b.gdK()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gS:function(a){var z=this.z
if(z==null){z=C.b.gS(this.j(0))
this.z=z}return z},
$isdg:1,
q:{
dt:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.o],"$asd")
if(c===C.l){z=$.$get$fs().b
if(typeof b!=="string")H.q(H.a9(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.aL(c,"bW",0))
y=c.ghm().cf(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.c(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cq(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lo:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lz(a,b,d)
else{if(d===b)P.bN(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lA(a,z,e-1):""
x=P.lt(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.lw(P.c9(C.b.v(a,w,g),new P.lp(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lu(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dr(a,h+1,i,null):null
return new P.cx(j,y,x,v,u,t,i<c?P.ls(a,i+1,c):null)},
fn:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bN:function(a,b,c){throw H.a(P.Y(c,a,b))},
lw:function(a,b){if(a!=null&&a===P.fn(b))return
return a},
lt:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.J()
z=c-1
if(C.b.V(a,z)!==93)P.bN(a,b,"Missing end `]` to match `[` in host")
P.f0(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f0(a,b,c)
return"["+a+"]"}return P.lC(a,b,c)},
lC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fu(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ak("")
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
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ak("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.c(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bN(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ak("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fo(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lz:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fq(C.b.H(a,b)))P.bN(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.c(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bN(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lq(y?a.toLowerCase():a)},
lq:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lA:function(a,b,c){return P.bO(a,b,c,C.R)},
lu:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bO(a,b,c,C.y):C.t.iQ(d,new P.lv(),P.i).X(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a8(w,"/"))w="/"+w
return P.lB(w,e,f)},
lB:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a8(a,"/"))return P.lD(a,!z||c)
return P.lE(a)},
dr:function(a,b,c,d){var z,y
z={}
H.w(d,"$isI",[P.i,null],"$asI")
if(a!=null){if(d!=null)throw H.a(P.bV("Both query and queryParameters specified"))
return P.bO(a,b,c,C.n)}if(d==null)return
y=new P.ak("")
z.a=""
d.I(0,new P.lx(new P.ly(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
ls:function(a,b,c){return P.bO(a,b,c,C.n)},
fu:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cD(y)
v=H.cD(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aH(u,4)
if(z>=8)return H.c(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cq(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fo:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.h(z,[P.o])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.h(z,[P.o])
for(v=0;--w,w>=0;x=128){u=C.d.fE(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.eC(y,0,null)},
bO:function(a,b,c,d){var z=P.ft(a,b,c,H.w(d,"$isd",[P.o],"$asd"),!1)
return z==null?C.b.v(a,b,c):z},
ft:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isd",[P.o],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.b.V(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.c(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fu(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.c(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bN(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fo(v)}}if(w==null)w=new P.ak("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fr:function(a){if(C.b.a8(a,"."))return!0
return C.b.dP(a,"/.")!==-1},
lE:function(a){var z,y,x,w,v,u,t
if(!P.fr(a))return a
z=H.h([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.N(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.c(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.X(z,"/")},
lD:function(a,b){var z,y,x,w,v,u
if(!P.fr(a))return!b?P.fp(a):a
z=H.h([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gay(z)!==".."){if(0>=z.length)return H.c(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.c(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gay(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.c(z,0)
C.a.m(z,0,P.fp(z[0]))}return C.a.X(z,"/")},
fp:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fq(J.fU(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.az(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.c(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lr:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bV("Invalid URL encoding"))}}return z},
ds:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dB(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.l!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.hc(y.v(a,b,c))}else{u=H.h([],[P.o])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.bV("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bV("Truncated URI"))
C.a.h(u,P.lr(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isd",[P.o],"$asd")
return new P.jQ(!1).cf(u)},
fq:function(a){var z=a|32
return 97<=z&&z<=122}}},
lp:{"^":"m:22;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.Y("Invalid port",this.a,z+1))}},
lv:{"^":"m:47;",
$1:function(a){return P.dt(C.S,a,C.l,!1)}},
ly:{"^":"m:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.dt(C.p,a,C.l,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.dt(C.p,b,C.l,!0))}}},
lx:{"^":"m:38;a",
$2:function(a,b){var z,y
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(z=J.bt(H.fN(b,"$isk")),y=this.a;z.G();)y.$2(a,H.L(z.gP(z)))}},
jE:{"^":"b;a,b,c",
gea:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.c(z,0)
y=this.a
z=z[0]+1
x=C.b.dQ(y,"?",z)
w=y.length
if(x>=0){v=P.bO(y,x+1,w,C.n)
w=x}else v=null
z=new P.kk(this,"data",null,null,null,P.bO(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.c(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
f_:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.h([b-1],[P.o])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gay(z)
if(v!==44||x!==t+7||!C.b.a9(a,"base64",t+1))throw H.a(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hC(0,a,s,y)
else{r=P.ft(a,s,y,C.n,!0)
if(r!=null)a=C.b.aR(a,s,y,r)}return new P.jE(a,z,c)}}},
lY:{"^":"m:33;",
$1:function(a){return new Uint8Array(96)}},
lX:{"^":"m:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.c(z,a)
z=z[a]
J.fY(z,0,96,b)
return z}},
lZ:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.c(a,x)
a[x]=c}}},
m_:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.c(a,x)
a[x]=c}}},
l1:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdL:function(){return this.c>0},
gdN:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gdO:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gdM:function(){return this.r<this.a.length},
gd1:function(){return this.b===4&&C.b.a8(this.a,"http")},
gd2:function(){return this.b===5&&C.b.a8(this.a,"https")},
gbJ:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd1()){this.x="http"
z="http"}else if(this.gd2()){this.x="https"
z="https"}else if(z===4&&C.b.a8(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a8(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
geb:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcq:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbB:function(a){var z
if(this.gdN()){z=this.d
if(typeof z!=="number")return z.B()
return P.c9(C.b.v(this.a,z+1,this.e),null,null)}if(this.gd1())return 80
if(this.gd2())return 443
return 0},
ge_:function(a){return C.b.v(this.a,this.e,this.f)},
gcz:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.v(this.a,z+1,y):""},
gdK:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.az(y,z+1):""},
gbC:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.T
z=P.i
return new P.eZ(P.f1(this.gcz(this),C.l),[z,z])},
cB:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isI",[P.i,null],"$asI")
i=this.gbJ()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdN()?this.gbB(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a8(d,"/"))d="/"+d
g=P.dr(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.az(y,x+1)
return new P.cx(i,j,c,f,d,g,b)},
e3:function(a,b){return this.cB(a,null,null,null,null,null,null,b,null,null)},
gS:function(a){var z=this.y
if(z==null){z=C.b.gS(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.H(b)
if(!!z.$isdg)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdg:1},
kk:{"^":"cx;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cO:function(a,b){var z=document.createElement("canvas")
return z},
ht:function(a){H.e(a,"$isa6")
return"wheel"},
eb:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
hG:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isec")
try{J.h_(z,a)}catch(x){H.ar(x)}return z},
cw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fa:function(a,b,c,d){var z,y
z=W.cw(W.cw(W.cw(W.cw(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fB:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.U
if(z===C.j)return a
return z.dg(a,b)},
a7:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ng:{"^":"d8;0p:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
nh:{"^":"p;0l:length=","%":"AccessibleNodeList"},
ni:{"^":"a7;0a1:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nj:{"^":"a7;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cK:{"^":"p;",$iscK:1,"%":";Blob"},
np:{"^":"a7;0a1:type}","%":"HTMLButtonElement"},
cN:{"^":"a7;",
bH:function(a,b,c){if(c!=null)return a.getContext(b,P.mb(c,null))
return a.getContext(b)},
ed:function(a,b){return this.bH(a,b,null)},
$iscN:1,
"%":"HTMLCanvasElement"},
dV:{"^":"p;",$isdV:1,"%":"CanvasRenderingContext2D"},
nr:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nt:{"^":"cf;0l:length=","%":"CSSPerspective"},
nu:{"^":"cR;0p:x=,0t:y=","%":"CSSPositionValue"},
nv:{"^":"cf;0p:x=,0t:y=","%":"CSSRotation"},
b3:{"^":"p;",$isb3:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nw:{"^":"cf;0p:x=,0t:y=","%":"CSSScale"},
hi:{"^":"kj;0l:length=",
ee:function(a,b){var z=a.getPropertyValue(this.cQ(a,b))
return z==null?"":z},
cQ:function(a,b){var z,y
z=$.$get$e_()
y=z[b]
if(typeof y==="string")return y
y=this.fF(a,b)
z[b]=y
return y},
fF:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hn()+b
if(z in a)return z
return b},
fv:function(a,b,c,d){a.setProperty(b,c,d)},
gc9:function(a){return a.bottom},
gam:function(a){return a.height},
gaP:function(a){return a.left},
gb7:function(a){return a.right},
gba:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hj:{"^":"b;",
gaP:function(a){return this.ee(a,"left")}},
cR:{"^":"p;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cf:{"^":"p;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nx:{"^":"cR;0l:length=","%":"CSSTransformValue"},
ny:{"^":"cf;0p:x=,0t:y=","%":"CSSTranslation"},
nz:{"^":"cR;0l:length=","%":"CSSUnparsedValue"},
nA:{"^":"p;0l:length=","%":"DataTransferItemList"},
nB:{"^":"p;0p:x=,0t:y=","%":"DeviceAcceleration"},
nC:{"^":"p;",
j:function(a){return String(a)},
"%":"DOMException"},
nD:{"^":"ho;",
gp:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
ho:{"^":"p;",
gp:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nE:{"^":"km;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.w(c,"$isa8",[P.X],"$asa8")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a8,P.X]]},
$asx:function(){return[[P.a8,P.X]]},
$isk:1,
$ask:function(){return[[P.a8,P.X]]},
$isd:1,
$asd:function(){return[[P.a8,P.X]]},
$asB:function(){return[[P.a8,P.X]]},
"%":"ClientRectList|DOMRectList"},
hp:{"^":"p;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gao(a))+" x "+H.l(this.gam(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bo(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=J.aU(b)
return a.left===z.gaP(b)&&a.top===z.gba(b)&&this.gao(a)===z.gao(b)&&this.gam(a)===z.gam(b)},
gS:function(a){return W.fa(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF)},
gc9:function(a){return a.bottom},
gam:function(a){return a.height},
gaP:function(a){return a.left},
gb7:function(a){return a.right},
gba:function(a){return a.top},
gao:function(a){return a.width},
gp:function(a){return a.x},
gt:function(a){return a.y},
$isa8:1,
$asa8:function(){return[P.X]},
"%":";DOMRectReadOnly"},
nF:{"^":"ko;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
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
nG:{"^":"p;0l:length=","%":"DOMTokenList"},
ki:{"^":"cn;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return H.e(z[b],"$isV")},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isV")
z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.i5(this)
return new J.at(z,z.length,0,[H.y(z,0)])},
aw:function(a,b,c,d){throw H.a(P.c5(null))},
$asx:function(){return[W.V]},
$ask:function(){return[W.V]},
$asd:function(){return[W.V]}},
V:{"^":"J;",
gcd:function(a){return new W.ki(a,a.children)},
gbl:function(a){return P.iH(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
j:function(a){return a.localName},
$isV:1,
"%":";Element"},
nH:{"^":"a7;0a1:type}","%":"HTMLEmbedElement"},
ab:{"^":"p;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"p;",
de:["eh",function(a,b,c,d){H.f(c,{func:1,args:[W.ab]})
if(c!=null)this.ey(a,b,c,!1)}],
ey:function(a,b,c,d){return a.addEventListener(b,H.bp(H.f(c,{func:1,args:[W.ab]}),1),!1)},
$isa6:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fg|fh|fj|fk"},
aX:{"^":"cK;",$isaX:1,"%":"File"},
e8:{"^":"kt;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isaX")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aX]},
$asx:function(){return[W.aX]},
$isk:1,
$ask:function(){return[W.aX]},
$isd:1,
$asd:function(){return[W.aX]},
$ise8:1,
$asB:function(){return[W.aX]},
"%":"FileList"},
o_:{"^":"a6;0l:length=","%":"FileWriter"},
o2:{"^":"a7;0l:length=","%":"HTMLFormElement"},
b5:{"^":"p;",$isb5:1,"%":"Gamepad"},
o3:{"^":"d8;0p:x=,0t:y=","%":"Gyroscope"},
o4:{"^":"p;0l:length=","%":"History"},
o5:{"^":"kG;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
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
c_:{"^":"p;0di:data=",$isc_:1,"%":"ImageData"},
cT:{"^":"a7;",$iscT:1,"%":"HTMLImageElement"},
ec:{"^":"a7;0a1:type}",$isec:1,"%":"HTMLInputElement"},
bA:{"^":"dd;",$isbA:1,"%":"KeyboardEvent"},
oa:{"^":"a7;0a1:type}","%":"HTMLLinkElement"},
ob:{"^":"p;",
j:function(a){return String(a)},
"%":"Location"},
oc:{"^":"d8;0p:x=,0t:y=","%":"Magnetometer"},
oe:{"^":"p;0l:length=","%":"MediaList"},
of:{"^":"a6;",
de:function(a,b,c,d){H.f(c,{func:1,args:[W.ab]})
if(b==="message")a.start()
this.eh(a,b,c,!1)},
"%":"MessagePort"},
og:{"^":"kM;",
k:function(a,b){return P.aT(a.get(H.L(b)))},
I:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gax:function(a){var z=H.h([],[P.i])
this.I(a,new W.ih(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"MIDIInputMap"},
ih:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oh:{"^":"kN;",
k:function(a,b){return P.aT(a.get(H.L(b)))},
I:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gax:function(a){var z=H.h([],[P.i])
this.I(a,new W.ii(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
ii:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b8:{"^":"p;",$isb8:1,"%":"MimeType"},
oi:{"^":"kP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb8")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asx:function(){return[W.b8]},
$isk:1,
$ask:function(){return[W.b8]},
$isd:1,
$asd:function(){return[W.b8]},
$asB:function(){return[W.b8]},
"%":"MimeTypeArray"},
ae:{"^":"dd;",$isae:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kh:{"^":"cn;a",
m:function(a,b,c){var z,y
H.C(b)
H.e(c,"$isJ")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.c(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.e9(z,z.length,-1,[H.aV(C.V,z,"B",0)])},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
$asx:function(){return[W.J]},
$ask:function(){return[W.J]},
$asd:function(){return[W.J]}},
J:{"^":"a6;",
hW:function(a,b){var z,y
try{z=a.parentNode
J.fV(z,b,a)}catch(y){H.ar(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.ei(a):z},
fo:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
im:{"^":"kR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
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
oq:{"^":"a7;0a1:type}","%":"HTMLOListElement"},
or:{"^":"a7;0a1:type}","%":"HTMLObjectElement"},
b9:{"^":"p;0l:length=",$isb9:1,"%":"Plugin"},
ov:{"^":"kV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb9")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$asx:function(){return[W.b9]},
$isk:1,
$ask:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$asB:function(){return[W.b9]},
"%":"PluginArray"},
oA:{"^":"p;0a1:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oB:{"^":"l0;",
k:function(a,b){return P.aT(a.get(H.L(b)))},
I:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gax:function(a){var z=H.h([],[P.i])
this.I(a,new W.iR(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"RTCStatsReport"},
iR:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oD:{"^":"a7;0a1:type}","%":"HTMLScriptElement"},
oF:{"^":"a7;0l:length=","%":"HTMLSelectElement"},
d8:{"^":"a6;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bb:{"^":"a6;",$isbb:1,"%":"SourceBuffer"},
oG:{"^":"fh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbb")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asx:function(){return[W.bb]},
$isk:1,
$ask:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asB:function(){return[W.bb]},
"%":"SourceBufferList"},
oH:{"^":"a7;0a1:type}","%":"HTMLSourceElement"},
bc:{"^":"p;",$isbc:1,"%":"SpeechGrammar"},
oI:{"^":"l3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asB:function(){return[W.bc]},
"%":"SpeechGrammarList"},
bd:{"^":"p;0l:length=",$isbd:1,"%":"SpeechRecognitionResult"},
oK:{"^":"l6;",
k:function(a,b){return a.getItem(H.L(b))},
m:function(a,b,c){a.setItem(b,H.L(c))},
I:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gax:function(a){var z=H.h([],[P.i])
this.I(a,new W.j2(z))
return z},
gl:function(a){return a.length},
$asag:function(){return[P.i,P.i]},
$isI:1,
$asI:function(){return[P.i,P.i]},
"%":"Storage"},
j2:{"^":"m:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oN:{"^":"a7;0a1:type}","%":"HTMLStyleElement"},
be:{"^":"p;",$isbe:1,"%":"CSSStyleSheet|StyleSheet"},
bG:{"^":"a7;",$isbG:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bf:{"^":"a6;",$isbf:1,"%":"TextTrack"},
bg:{"^":"a6;",$isbg:1,"%":"TextTrackCue|VTTCue"},
oS:{"^":"ld;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isk:1,
$ask:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asB:function(){return[W.bg]},
"%":"TextTrackCueList"},
oT:{"^":"fk;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"TextTrackList"},
oU:{"^":"p;0l:length=","%":"TimeRanges"},
bi:{"^":"p;",$isbi:1,"%":"Touch"},
bj:{"^":"dd;",$isbj:1,"%":"TouchEvent"},
oV:{"^":"lj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asx:function(){return[W.bi]},
$isk:1,
$ask:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asB:function(){return[W.bi]},
"%":"TouchList"},
oW:{"^":"p;0l:length=","%":"TrackDefaultList"},
dd:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oY:{"^":"p;",
j:function(a){return String(a)},
"%":"URL"},
p_:{"^":"p;0p:x=","%":"VRStageBoundsPoint"},
p0:{"^":"a6;0l:length=","%":"VideoTrackList"},
bK:{"^":"ae;",
ghi:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghh:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbK:1,
"%":"WheelEvent"},
ka:{"^":"a6;",
fp:function(a,b){return a.requestAnimationFrame(H.bp(H.f(b,{func:1,ret:-1,args:[P.X]}),1))},
eJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
p5:{"^":"lL;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb3")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b3]},
$asx:function(){return[W.b3]},
$isk:1,
$ask:function(){return[W.b3]},
$isd:1,
$asd:function(){return[W.b3]},
$asB:function(){return[W.b3]},
"%":"CSSRuleList"},
p6:{"^":"hp;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bo(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=J.aU(b)
return a.left===z.gaP(b)&&a.top===z.gba(b)&&a.width===z.gao(b)&&a.height===z.gam(b)},
gS:function(a){return W.fa(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gam:function(a){return a.height},
gao:function(a){return a.width},
gp:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
p8:{"^":"lN;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isb5")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b5]},
$asx:function(){return[W.b5]},
$isk:1,
$ask:function(){return[W.b5]},
$isd:1,
$asd:function(){return[W.b5]},
$asB:function(){return[W.b5]},
"%":"GamepadList"},
p9:{"^":"lP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
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
pa:{"^":"lR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbd")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isk:1,
$ask:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asB:function(){return[W.bd]},
"%":"SpeechRecognitionResultList"},
pb:{"^":"lT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.C(b)
H.e(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"StyleSheetList"},
kp:{"^":"da;a,b,c,$ti",
hx:function(a,b,c,d){var z=H.y(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a1(this.a,this.b,a,!1,z)}},
p7:{"^":"kp;a,b,c,$ti"},
kq:{"^":"eA;a,b,c,d,e,$ti",
fJ:function(){var z=this.d
if(z!=null&&this.a<=0)J.fW(this.b,this.c,z,!1)},
q:{
a1:function(a,b,c,d,e){var z=c==null?null:W.fB(new W.kr(c),W.ab)
z=new W.kq(0,a,b,z,!1,[e])
z.fJ()
return z}}},
kr:{"^":"m:5;a",
$1:function(a){return this.a.$1(H.e(a,"$isab"))}},
B:{"^":"b;$ti",
ga_:function(a){return new W.e9(a,this.gl(a),-1,[H.aV(this,a,"B",0)])},
aw:function(a,b,c,d){H.z(d,H.aV(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e9:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dJ(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
kj:{"^":"p+hj;"},
kl:{"^":"p+x;"},
km:{"^":"kl+B;"},
kn:{"^":"p+x;"},
ko:{"^":"kn+B;"},
ks:{"^":"p+x;"},
kt:{"^":"ks+B;"},
kF:{"^":"p+x;"},
kG:{"^":"kF+B;"},
kM:{"^":"p+ag;"},
kN:{"^":"p+ag;"},
kO:{"^":"p+x;"},
kP:{"^":"kO+B;"},
kQ:{"^":"p+x;"},
kR:{"^":"kQ+B;"},
kU:{"^":"p+x;"},
kV:{"^":"kU+B;"},
l0:{"^":"p+ag;"},
fg:{"^":"a6+x;"},
fh:{"^":"fg+B;"},
l2:{"^":"p+x;"},
l3:{"^":"l2+B;"},
l6:{"^":"p+ag;"},
lc:{"^":"p+x;"},
ld:{"^":"lc+B;"},
fj:{"^":"a6+x;"},
fk:{"^":"fj+B;"},
li:{"^":"p+x;"},
lj:{"^":"li+B;"},
lK:{"^":"p+x;"},
lL:{"^":"lK+B;"},
lM:{"^":"p+x;"},
lN:{"^":"lM+B;"},
lO:{"^":"p+x;"},
lP:{"^":"lO+B;"},
lQ:{"^":"p+x;"},
lR:{"^":"lQ+B;"},
lS:{"^":"p+x;"},
lT:{"^":"lS+B;"}}],["","",,P,{"^":"",
me:function(a){var z,y
z=J.H(a)
if(!!z.$isc_){y=z.gdi(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fm(a.data,a.height,a.width)},
md:function(a){if(a instanceof P.fm)return{data:a.a,height:a.b,width:a.c}
return a},
aT:function(a){var z,y,x,w,v
if(a==null)return
z=P.ek(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.L(y[w])
z.m(0,v,a[v])}return z},
mb:function(a,b){var z={}
a.I(0,new P.mc(z))
return z},
e5:function(){var z=$.e4
if(z==null){z=J.cH(window.navigator.userAgent,"Opera",0)
$.e4=z}return z},
hn:function(){var z,y
z=$.e1
if(z!=null)return z
y=$.e2
if(y==null){y=J.cH(window.navigator.userAgent,"Firefox",0)
$.e2=y}if(y)z="-moz-"
else{y=$.e3
if(y==null){y=!P.e5()&&J.cH(window.navigator.userAgent,"Trident/",0)
$.e3=y}if(y)z="-ms-"
else z=P.e5()?"-o-":"-webkit-"}$.e1=z
return z},
l9:{"^":"b;",
dI:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cF:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.H(a)
if(!!y.$isaj)return new Date(a.a)
if(!!y.$isiK)throw H.a(P.c5("structured clone of RegExp"))
if(!!y.$isaX)return a
if(!!y.$iscK)return a
if(!!y.$ise8)return a
if(!!y.$isc_)return a
if(!!y.$iseo||!!y.$isd4)return a
if(!!y.$isI){x=this.dI(a)
w=this.b
if(x>=w.length)return H.c(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.I(a,new P.lb(z,this))
return z.a}if(!!y.$isd){x=this.dI(a)
z=this.b
if(x>=z.length)return H.c(z,x)
v=z[x]
if(v!=null)return v
return this.hf(a,x)}throw H.a(P.c5("structured clone of other type"))},
hf:function(a,b){var z,y,x,w
z=J.aK(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.n(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cF(z.k(a,w)))
return x}},
lb:{"^":"m:8;a,b",
$2:function(a,b){this.a.a[a]=this.b.cF(b)}},
fm:{"^":"b;di:a>,b,c",$isc_:1},
mc:{"^":"m:8;a",
$2:function(a,b){this.a[a]=b}},
la:{"^":"l9;a,b"},
hz:{"^":"cn;a,b",
gaV:function(){var z,y,x
z=this.b
y=H.aL(z,"x",0)
x=W.V
return new H.i5(new H.k8(z,H.f(new P.hA(),{func:1,ret:P.ah,args:[y]}),[y]),H.f(new P.hB(),{func:1,ret:x,args:[y]}),[y,x])},
I:function(a,b){H.f(b,{func:1,ret:-1,args:[W.V]})
C.a.I(P.el(this.gaV(),!1,W.V),b)},
m:function(a,b,c){var z
H.C(b)
H.e(c,"$isV")
z=this.gaV()
J.fZ(z.b.$1(J.cI(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.as(this.gaV().a)},
k:function(a,b){var z=this.gaV()
return z.b.$1(J.cI(z.a,b))},
ga_:function(a){var z=P.el(this.gaV(),!1,W.V)
return new J.at(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.V]},
$ask:function(){return[W.V]},
$asd:function(){return[W.V]}},
hA:{"^":"m:26;",
$1:function(a){return!!J.H(H.e(a,"$isJ")).$isV}},
hB:{"^":"m:54;",
$1:function(a){return H.j(H.e(a,"$isJ"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bE:{"^":"b;p:a>,t:b>,$ti",
j:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bo(b,"$isbE",[P.X],null)
if(!z)return!1
z=this.a
y=J.aU(b)
x=y.gp(b)
if(z==null?x==null:z===x){z=this.b
y=y.gt(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.b2(this.a)
y=J.b2(this.b)
return P.f9(P.bM(P.bM(0,z),y))},
i:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.i()
y=H.y(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.i()
return new P.bE(z,H.z(x*b,y),this.$ti)}},
kW:{"^":"b;$ti",
gb7:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.z(z+this.c,H.y(this,0))},
gc9:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.z(z+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bo(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=this.a
y=J.aU(b)
x=y.gaP(b)
if(z==null?x==null:z===x){x=this.b
w=y.gba(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gb7(b)){if(typeof x!=="number")return x.B()
z=H.z(x+this.d,w)===y.gc9(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.b2(z)
x=this.b
w=J.b2(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.z(x+this.d,v)
return P.f9(P.bM(P.bM(P.bM(P.bM(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dh:function(a,b){var z,y
H.w(b,"$isbE",[P.X],"$asbE")
z=b.a
y=this.a
if(typeof z!=="number")return z.cI()
if(typeof y!=="number")return H.n(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cI()
if(typeof y!=="number")return H.n(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a8:{"^":"kW;aP:a>,ba:b>,ao:c>,am:d>,$ti",q:{
iH:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nI:{"^":"T;0p:x=,0t:y=","%":"SVGFEBlendElement"},nJ:{"^":"T;0p:x=,0t:y=","%":"SVGFEColorMatrixElement"},nK:{"^":"T;0p:x=,0t:y=","%":"SVGFEComponentTransferElement"},nL:{"^":"T;0p:x=,0t:y=","%":"SVGFECompositeElement"},nM:{"^":"T;0p:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nN:{"^":"T;0p:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nO:{"^":"T;0p:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nP:{"^":"T;0p:x=,0t:y=","%":"SVGFEFloodElement"},nQ:{"^":"T;0p:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nR:{"^":"T;0p:x=,0t:y=","%":"SVGFEImageElement"},nS:{"^":"T;0p:x=,0t:y=","%":"SVGFEMergeElement"},nT:{"^":"T;0p:x=,0t:y=","%":"SVGFEMorphologyElement"},nU:{"^":"T;0p:x=,0t:y=","%":"SVGFEOffsetElement"},nV:{"^":"T;0p:x=,0t:y=","%":"SVGFEPointLightElement"},nW:{"^":"T;0p:x=,0t:y=","%":"SVGFESpecularLightingElement"},nX:{"^":"T;0p:x=,0t:y=","%":"SVGFESpotLightElement"},nY:{"^":"T;0p:x=,0t:y=","%":"SVGFETileElement"},nZ:{"^":"T;0p:x=,0t:y=","%":"SVGFETurbulenceElement"},o0:{"^":"T;0p:x=,0t:y=","%":"SVGFilterElement"},o1:{"^":"by;0p:x=,0t:y=","%":"SVGForeignObjectElement"},hE:{"^":"by;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},by:{"^":"T;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},o6:{"^":"by;0p:x=,0t:y=","%":"SVGImageElement"},bB:{"^":"p;",$isbB:1,"%":"SVGLength"},o9:{"^":"kI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbB")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bB]},
$isk:1,
$ask:function(){return[P.bB]},
$isd:1,
$asd:function(){return[P.bB]},
$asB:function(){return[P.bB]},
"%":"SVGLengthList"},od:{"^":"T;0p:x=,0t:y=","%":"SVGMaskElement"},bD:{"^":"p;",$isbD:1,"%":"SVGNumber"},op:{"^":"kT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbD")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bD]},
$isk:1,
$ask:function(){return[P.bD]},
$isd:1,
$asd:function(){return[P.bD]},
$asB:function(){return[P.bD]},
"%":"SVGNumberList"},ou:{"^":"T;0p:x=,0t:y=","%":"SVGPatternElement"},ow:{"^":"p;0p:x=,0t:y=","%":"SVGPoint"},ox:{"^":"p;0l:length=","%":"SVGPointList"},oy:{"^":"p;0p:x=,0t:y=","%":"SVGRect"},oz:{"^":"hE;0p:x=,0t:y=","%":"SVGRectElement"},oE:{"^":"T;0a1:type}","%":"SVGScriptElement"},oL:{"^":"l8;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isd:1,
$asd:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},oO:{"^":"T;0a1:type}","%":"SVGStyleElement"},T:{"^":"V;",
gcd:function(a){return new P.hz(a,new W.kh(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oP:{"^":"by;0p:x=,0t:y=","%":"SVGSVGElement"},j7:{"^":"by;","%":"SVGTextPathElement;SVGTextContentElement"},oR:{"^":"j7;0p:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bH:{"^":"p;",$isbH:1,"%":"SVGTransform"},oX:{"^":"ll;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.C(b)
H.e(c,"$isbH")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bH]},
$isk:1,
$ask:function(){return[P.bH]},
$isd:1,
$asd:function(){return[P.bH]},
$asB:function(){return[P.bH]},
"%":"SVGTransformList"},oZ:{"^":"by;0p:x=,0t:y=","%":"SVGUseElement"},kH:{"^":"p+x;"},kI:{"^":"kH+B;"},kS:{"^":"p+x;"},kT:{"^":"kS+B;"},l7:{"^":"p+x;"},l8:{"^":"l7+B;"},lk:{"^":"p+x;"},ll:{"^":"lk+B;"}}],["","",,P,{"^":"",P:{"^":"b;",$isk:1,
$ask:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$isjp:1}}],["","",,P,{"^":"",nk:{"^":"p;0l:length=","%":"AudioBuffer"},dN:{"^":"a6;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nl:{"^":"kg;",
k:function(a,b){return P.aT(a.get(H.L(b)))},
I:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gax:function(a){var z=H.h([],[P.i])
this.I(a,new P.h1(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asag:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"AudioParamMap"},h1:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},h2:{"^":"dN;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nm:{"^":"a6;0l:length=","%":"AudioTrackList"},h5:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nn:{"^":"dN;0a1:type}","%":"BiquadFilterNode"},os:{"^":"h5;0l:length=","%":"OfflineAudioContext"},ot:{"^":"h2;0a1:type}","%":"Oscillator|OscillatorNode"},kg:{"^":"p+ag;"}}],["","",,P,{"^":"",d7:{"^":"p;",
i2:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.H(g)
if(!!z.$isc_)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.md(g))
return}if(!!z.$iscT)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bV("Incorrect number or type of arguments"))},
i1:function(a,b,c,d,e,f,g){return this.i2(a,b,c,d,e,f,g,null,null,null)},
$isd7:1,
"%":"WebGLRenderingContext"},jy:{"^":"p;",$isjy:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oJ:{"^":"l5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aT(a.item(b))},
m:function(a,b,c){H.C(b)
H.e(c,"$isI")
throw H.a(P.A("Cannot assign element of immutable List."))},
K:function(a,b){return this.k(a,b)},
$asx:function(){return[[P.I,,,]]},
$isk:1,
$ask:function(){return[[P.I,,,]]},
$isd:1,
$asd:function(){return[[P.I,,,]]},
$asB:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},l4:{"^":"p+x;"},l5:{"^":"l4+B;"}}],["","",,O,{"^":"",aN:{"^":"b;0a,0b,0c,0d,$ti",
bM:function(a){this.a=H.h([],[a])
this.b=null
this.c=null
this.d=null},
cJ:function(a,b,c){var z=H.aL(this,"aN",0)
H.f(b,{func:1,ret:P.ah,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.o,[P.k,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bd:function(a,b){return this.cJ(a,null,b)},
fe:function(a){var z
H.w(a,"$isk",[H.aL(this,"aN",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ep:function(a,b){var z
H.w(b,"$isk",[H.aL(this,"aN",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.at(z,z.length,0,[H.y(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aL(this,"aN",0)
H.z(b,z)
z=[z]
if(this.fe(H.h([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ep(x,H.h([b],z))}},
$isk:1,
q:{
cP:function(a){var z=new O.aN([a])
z.bM(a)
return z}}},d1:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gC:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
eq:function(a){var z=this.b
if(!(z==null))z.E(a)},
aA:function(){return this.eq(null)},
gY:function(a){var z=this.a
if(z.length>0)return C.a.gay(z)
else return V.c3()},
e1:function(a){var z=this.a
if(a==null)C.a.h(z,V.c3())
else C.a.h(z,a)
this.aA()},
cw:function(){var z=this.a
if(z.length>0){z.pop()
this.aA()}}}}],["","",,E,{"^":"",cJ:{"^":"b;"},aO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cR:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
if(y.f==null)y.cR()}},
scK:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gC()
y.toString
x=H.f(this.gdY(),{func:1,ret:-1,args:[D.t]})
C.a.O(y.a,x)}y=this.c
if(y!=null){y=y.gC()
y.toString
x=H.f(this.gdY(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.Q("shape",z,this.c,this,[F.ct])
w.b=!0
this.a6(w)}},
se5:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gC()
z.toString
y=H.f(this.gdZ(),{func:1,ret:-1,args:[D.t]})
C.a.O(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gC()
z.toString
y=H.f(this.gdZ(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}this.cR()
w=new D.Q("technique",x,this.f,this,[O.db])
w.b=!0
this.a6(w)}},
sb3:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gC()
y.toString
x=H.f(this.gdX(),{func:1,ret:-1,args:[D.t]})
C.a.O(y.a,x)}if(a!=null){y=a.gC()
y.toString
x=H.f(this.gdX(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.Q("mover",z,a,this,[U.ac])
w.b=!0
this.a6(w)}},
an:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aS(0,b,this):null
if(!J.N(y,this.x)){x=this.x
this.x=y
w=new D.Q("matrix",x,y,this,[V.av])
w.b=!0
this.a6(w)}z=this.f
if(z!=null)z.an(0,b)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.G();)z.d.an(0,b)},
aQ:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gY(z))
else C.a.h(z.a,y.i(0,z.gY(z)))
z.aA()
a.e2(this.f)
z=a.dy
x=(z&&C.a).gay(z)
if(x!=null&&this.d!=null)x.hV(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aQ(a)
a.e0()
a.dx.cw()},
gC:function(){var z=this.z
if(z==null){z=D.O()
this.z=z}return z},
a6:function(a){var z=this.z
if(!(z==null))z.E(a)},
a0:function(){return this.a6(null)},
hH:[function(a){H.e(a,"$ist")
this.e=null
this.a6(a)},function(){return this.hH(null)},"iW","$1","$0","gdY",0,2,1],
hI:[function(a){this.a6(H.e(a,"$ist"))},function(){return this.hI(null)},"iX","$1","$0","gdZ",0,2,1],
hG:[function(a){this.a6(H.e(a,"$ist"))},function(){return this.hG(null)},"iV","$1","$0","gdX",0,2,1],
hE:[function(a){this.a6(H.e(a,"$ist"))},function(){return this.hE(null)},"iT","$1","$0","gdW",0,2,1],
iS:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aO],"$ask")
for(z=b.length,y=this.gdW(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b4()
t.a=H.h([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.a0()},"$2","ghD",8,0,10],
iU:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aO],"$ask")
for(z=b.length,y=this.gdW(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.b4()
t.a=H.h([],w)
t.c=0
u.sa2(t)}t=u.ga2()
t.toString
H.f(y,x)
C.a.O(t.a,y)}}this.a0()},"$2","ghF",8,0,10],
$isaP:1,
q:{
e7:function(a,b,c,d,e,f){var z,y
z=new E.aO()
z.a=d
z.b=!0
y=O.cP(E.aO)
z.y=y
y.bd(z.ghD(),z.ghF())
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
z.scK(0,e)
z.se5(f)
z.sb3(c)
return z}}},iM:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
en:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aj(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d1()
y=[V.av]
z.a=H.h([],y)
x=z.gC()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.f(new E.iO(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d1()
z.a=H.h([],y)
v=z.gC()
v.toString
x=H.f(new E.iP(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d1()
z.a=H.h([],y)
y=z.gC()
y.toString
w=H.f(new E.iQ(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.h([],[O.db])
this.dy=z
C.a.h(z,null)
this.fr=new H.cm(0,0,[P.i,A.ey])},
ghR:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gY(z)
y=this.db
y=z.i(0,y.gY(y))
this.z=y
z=y}return z},
e2:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gay(z):a;(z&&C.a).h(z,y)},
e0:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
iN:function(a,b){var z=new E.iM(a,b)
z.en(a,b)
return z}}},iO:{"^":"m:11;a",
$1:function(a){var z
H.e(a,"$ist")
z=this.a
z.z=null
z.ch=null}},iP:{"^":"m:11;a",
$1:function(a){var z
H.e(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iQ:{"^":"m:11;a",
$1:function(a){var z
H.e(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},ji:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch",
gC:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z},
es:[function(a){var z
H.e(a,"$ist")
z=this.x
if(!(z==null))z.E(a)
this.hX()},function(){return this.es(null)},"er","$1","$0","gcM",0,2,1],
ghq:function(){var z,y,x
z=Date.now()
y=C.d.a3(P.e6(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aj(z,!1)
return x/y},
d6:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.i()
if(typeof z!=="number")return H.n(z)
x=C.e.b_(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.i()
w=C.e.b_(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hX:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jk(this),{func:1,ret:-1,args:[P.X]})
C.B.eJ(z)
C.B.fp(z,W.fB(y,P.X))}},
hU:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d6()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aj(w,!1)
x.y=P.e6(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aA()
w=x.db
C.a.sl(w.a,0)
w.aA()
w=x.dx
C.a.sl(w.a,0)
w.aA()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aQ(this.e)}}catch(v){z=H.ar(v)
y=H.br(v)
P.dH("Error: "+H.l(z))
P.dH("Stack: "+H.l(y))
throw H.a(z)}},
q:{
jj:function(a,b,c,d,e){var z,y,x,w
z=J.H(a)
if(!!z.$iscN)return E.eF(a,!0,!0,!0,!1)
y=W.cO(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcd(a).h(0,y)
w=E.eF(y,!0,!0,!0,!1)
w.a=a
return w},
eF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ji()
y=P.hV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.k.bH(a,"webgl",y)
x=H.e(x==null?C.k.bH(a,"experimental-webgl",y):x,"$isd7")
if(x==null)H.q(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iN(x,a)
w=new T.jc(x)
w.b=H.C(x.getParameter(3379))
w.c=H.C(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jL(a)
v=new X.hO()
v.c=new X.aB(!1,!1,!1)
v.d=P.hY(null,null,null,P.o)
w.b=v
v=new X.ij(w)
v.f=0
v.r=new V.Z(0,0)
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.i1(w)
v.r=0
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jm(w)
v.e=0
v.f=new V.Z(0,0)
v.r=new V.Z(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.h([],[[P.eA,P.b]])
w.z=v
u=document
t=W.ae
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a1(u,"contextmenu",H.f(w.gf1(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.f(w.gf4(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.f(w.geY(),q),!1,r))
v=w.z
p=W.bA
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.f(w.gf6(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.f(w.gf5(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.f(w.gf9(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.f(w.gfb(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.f(w.gfa(),s),!1,t))
p=w.z
o=W.bK;(p&&C.a).h(p,W.a1(a,H.L(W.ht(a)),H.f(w.gfc(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.f(w.gf2(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.f(w.gf3(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.f(w.gfd(),q),!1,r))
r=w.z
q=W.bj
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.f(w.gfk(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.f(w.gfi(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.f(w.gfj(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aj(Date.now(),!1)
z.ch=0
z.d6()
return z}}},jk:{"^":"m:31;a",
$1:function(a){var z
H.mZ(a)
z=this.a
if(z.z){z.z=!1
z.hU()}}}}],["","",,Z,{"^":"",f4:{"^":"b;a,b",q:{
dm:function(a,b,c){var z
H.w(c,"$isd",[P.o],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bl(c)),35044)
a.bindBuffer(b,null)
return new Z.f4(b,z)}}},dR:{"^":"cJ;a,b,c,d,e",
bj:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ar(y)
x=P.v('Failed to bind buffer attribute "'+J.aa(this.a)+'": '+H.l(z))
throw H.a(x)}},
j:function(a){return"["+J.aa(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},k7:{"^":"b;a",$isno:1},dS:{"^":"b;a,0b,c,d",
aO:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bj:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bj(a)},
e8:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aQ:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.c(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.h([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].j(0))
u=H.h([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aa(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.X(y,", ")+"\nAttrs:   "+C.a.X(u,", ")},
$isoQ:1},cj:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ba(this.c)+"'")+"]"}},aZ:{"^":"b;a",
gcL:function(a){var z,y
z=this.a
y=(z&$.$get$aF().a)!==0?3:0
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=2
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=4
if((z&$.$get$b_().a)!==0)++y
return(z&$.$get$aD().a)!==0?y+4:y},
h8:function(a){var z,y,x
z=$.$get$aF()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f3()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aZ))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.h([],[P.i])
y=this.a
if((y&$.$get$aF().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aH().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.X(z,"|")},
q:{
ao:function(a){return new Z.aZ(a)}}}}],["","",,D,{"^":"",dW:{"^":"b;"},b4:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.I(y,new D.hx(z))
return x!==0},
hk:function(){return this.E(null)},
hY:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.E(y)}}},
a7:function(a){return this.hY(a,!0,!1)},
q:{
O:function(){var z=new D.b4()
z.a=H.h([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hx:{"^":"m:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},ck:{"^":"t;c,d,a,0b,$ti"},cl:{"^":"t;c,d,a,0b,$ti"},Q:{"^":"t;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dT:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)},
q:{"^":"nq<"}},eh:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)}},ei:{"^":"t;c,a,0b"},hO:{"^":"b;0a,0b,0c,0d",
hO:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ei(a,this)
y.b=!0
return z.E(y)},
hK:function(a){var z,y
this.c=a.b
this.d.O(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ei(a,this)
y.b=!0
return z.E(y)}},em:{"^":"cp;x,y,c,d,e,a,0b"},i1:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ar:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aj(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.i()
v=b.b
u=this.ch
if(typeof v!=="number")return v.i()
t=new V.Z(y.a+x*w,y.b+v*u)
u=this.a.gaI()
s=new X.bC(a,new V.Z(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cv:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.ar(a,b))
return!0},
b5:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eg()
if(typeof z!=="number")return z.bG()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.ar(a,b))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.ar(a,b))
return!0},
hP:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaI()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.i()
t=a.b
s=this.cy
if(typeof t!=="number")return t.i()
w=new X.d2(new V.W(v*u,t*s),y,x,new P.aj(w,!1),this)
w.b=!0
z.E(w)
return!0},
f8:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aj(Date.now(),!1)
y=this.f
x=new X.em(c,a,this.a.gaI(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.Z(0,0)}},aB:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aB))return!1
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
return z+(this.c?"Shift+":"")}},bC:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},ij:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bS:function(a,b,c){var z,y,x
z=new P.aj(Date.now(),!1)
y=this.a.gaI()
x=new X.bC(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cv:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bS(a,b,!0))
return!0},
b5:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eg()
if(typeof z!=="number")return z.bG()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bS(a,b,!0))
return!0},
b4:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bS(a,b,!1))
return!0},
hQ:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaI()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.i()
u=a.b
t=this.ch
if(typeof u!=="number")return u.i()
x=new X.d2(new V.W(w*v,u*t),y,b,new P.aj(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdj:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
gbF:function(){var z=this.c
if(z==null){z=D.O()
this.c=z}return z},
gdV:function(){var z=this.d
if(z==null){z=D.O()
this.d=z}return z}},d2:{"^":"cp;x,c,d,e,a,0b"},cp:{"^":"t;"},eH:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},jm:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ar:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.Z],"$asd")
z=new P.aj(Date.now(),!1)
y=a.length>0?a[0]:new V.Z(0,0)
x=this.a.gaI()
w=new X.eH(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hN:function(a){var z
H.w(a,"$isd",[V.Z],"$asd")
z=this.b
if(z==null)return!1
z.E(this.ar(a,!0))
return!0},
hL:function(a){var z
H.w(a,"$isd",[V.Z],"$asd")
z=this.c
if(z==null)return!1
z.E(this.ar(a,!0))
return!0},
hM:function(a){var z
H.w(a,"$isd",[V.Z],"$asd")
z=this.d
if(z==null)return!1
z.E(this.ar(a,!1))
return!0}},jL:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaI:function(){var z=this.a
return V.ex(0,0,(z&&C.k).gbl(z).c,C.k.gbl(z).d)},
cX:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eh(z,new X.aB(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
c3:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
as:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.J()
v=z.top
if(typeof x!=="number")return x.J()
return new V.Z(y-w,x-v)},
aW:function(a){return new V.W(a.movementX,a.movementY)},
bY:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.h([],[V.Z])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.e.ad(u.pageX)
C.e.ad(u.pageY)
s=z.left
C.e.ad(u.pageX)
C.a.h(y,new V.Z(t-s,C.e.ad(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dT(z,new X.aB(y,a.altKey,a.shiftKey))},
iv:[function(a){this.f=!0},"$1","gf4",4,0,5],
io:[function(a){this.f=!1},"$1","geY",4,0,5],
is:[function(a){if(this.f)a.preventDefault()},"$1","gf1",4,0,5],
ix:[function(a){var z
H.e(a,"$isbA")
if(!this.f)return
z=this.cX(a)
if(this.b.hO(z))a.preventDefault()},"$1","gf6",4,0,16],
iw:[function(a){var z
H.e(a,"$isbA")
if(!this.f)return
z=this.cX(a)
if(this.b.hK(z))a.preventDefault()},"$1","gf5",4,0,16],
iz:[function(a){var z,y,x,w
H.e(a,"$isae")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.ap(a)
x=this.aW(a)
if(this.d.cv(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.as(a)
if(this.c.cv(y,w))a.preventDefault()},"$1","gf9",4,0,6],
iB:[function(a){var z,y,x
H.e(a,"$isae")
this.aG(a)
z=this.ap(a)
if(this.x){y=this.aW(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gfb",4,0,6],
iu:[function(a){var z,y,x,w
H.e(a,"$isae")
z=this.a
if(!(z&&C.k).gbl(z).dh(0,new P.bE(a.clientX,a.clientY,[P.X]))){this.aG(a)
y=this.ap(a)
if(this.x){x=this.aW(a)
if(this.d.b5(y,x))a.preventDefault()
return}if(this.r)return
w=this.as(a)
if(this.c.b5(y,w))a.preventDefault()}},"$1","gf3",4,0,6],
iA:[function(a){var z,y,x
H.e(a,"$isae")
this.aG(a)
z=this.ap(a)
if(this.x){y=this.aW(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b4(z,x))a.preventDefault()},"$1","gfa",4,0,6],
it:[function(a){var z,y,x,w
H.e(a,"$isae")
z=this.a
if(!(z&&C.k).gbl(z).dh(0,new P.bE(a.clientX,a.clientY,[P.X]))){this.aG(a)
y=this.ap(a)
if(this.x){x=this.aW(a)
if(this.d.b4(y,x))a.preventDefault()
return}if(this.r)return
w=this.as(a)
if(this.c.b4(y,w))a.preventDefault()}},"$1","gf2",4,0,6],
iC:[function(a){var z,y
H.e(a,"$isbK")
this.aG(a)
z=new V.W((a&&C.A).ghh(a),C.A.ghi(a)).w(0,180)
if(this.x){if(this.d.hP(z))a.preventDefault()
return}if(this.r)return
y=this.as(a)
if(this.c.hQ(z,y))a.preventDefault()},"$1","gfc",4,0,35],
iD:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.as(this.y)
this.d.f8(w,v,x)}},"$1","gfd",4,0,5],
iJ:[function(a){var z
H.e(a,"$isbj")
this.a.focus()
this.f=!0
this.c3(a)
z=this.bY(a)
if(this.e.hN(z))a.preventDefault()},"$1","gfk",4,0,12],
iH:[function(a){var z
H.e(a,"$isbj")
this.c3(a)
z=this.bY(a)
if(this.e.hL(z))a.preventDefault()},"$1","gfi",4,0,12],
iI:[function(a){var z
H.e(a,"$isbj")
this.c3(a)
z=this.bY(a)
if(this.e.hM(z))a.preventDefault()},"$1","gfj",4,0,12]}}],["","",,D,{"^":"",cg:{"^":"b;0a,0b,0c,0d",
gC:function(){var z=this.d
if(z==null){z=D.O()
this.d=z}return z},
aB:[function(a){var z
H.e(a,"$ist")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aB(null)},"ia","$1","$0","geu",0,2,1],
$isa3:1,
$isaP:1},a3:{"^":"b;",$isaP:1},hP:{"^":"aN;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gC:function(){var z=this.Q
if(z==null){z=D.O()
this.Q=z}return z},
aB:function(a){var z=this.Q
if(!(z==null))z.E(a)},
f7:[function(a){var z
H.e(a,"$ist")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.f7(null)},"iy","$1","$0","gd3",0,2,1],
iE:[function(a){var z,y,x
H.w(a,"$isk",[D.a3],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.eE(x))return!1}return!0},"$1","gff",4,0,37],
ik:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd3(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa3")
if(t instanceof D.cg)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b4()
s.a=H.h([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","geV",8,0,21],
iG:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd3(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa3")
if(t instanceof D.cg)C.a.O(this.e,t)
s=t.d
if(s==null){s=new D.b4()
s.a=H.h([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.O(s.a,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gfh",8,0,21],
eE:function(a){var z=C.a.bm(this.e,a)
return z},
$ask:function(){return[D.a3]},
$asaN:function(){return[D.a3]}},it:{"^":"b;",$isa3:1,$isaP:1},j_:{"^":"b;",$isa3:1,$isaP:1},jf:{"^":"b;",$isa3:1,$isaP:1},jg:{"^":"b;",$isa3:1,$isaP:1},jh:{"^":"b;",$isa3:1,$isaP:1}}],["","",,V,{"^":"",
ns:[function(a,b){if(typeof b!=="number")return b.J()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","ig",8,0,36],
nf:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.ai(a-b,z)
return(a<0?a+z:a)+b},
R:function(a,b,c){if(a==null)return C.b.ac("null",c)
return C.b.ac(C.e.e7($.r.$2(a,0)?0:a,b),c+b+1)},
bq:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isd",[P.u],"$asd")
z=H.h([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.R(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.c(z,u)
C.a.m(z,u,C.b.ac(z[u],x))}return z},
dG:function(a,b){return C.e.i4(Math.pow(b,C.I.b_(Math.log(H.ma(a))/Math.log(b))))},
a4:{"^":"b;a,b,c",
i:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.a4(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
bX:{"^":"b;a,b,c,d",
i:function(a,b){var z,y,x,w
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
return new V.bX(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bX))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
co:{"^":"b;a,b,c,d,e,f,r,x,y",
ae:function(a,b){var z=H.h([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
i:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$isco")
z=this.a
y=a5.a
if(typeof z!=="number")return z.i()
x=C.e.i(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.i()
u=C.e.i(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.i()
r=C.e.i(t,s)
q=a5.b
p=C.e.i(z,q)
o=a5.e
n=C.e.i(w,o)
m=a5.x
l=C.e.i(t,m)
k=a5.c
z=C.e.i(z,k)
j=a5.f
w=C.e.i(w,j)
i=a5.y
t=C.e.i(t,i)
h=this.d
if(typeof h!=="number")return h.i()
g=C.e.i(h,y)
f=this.e
if(typeof f!=="number")return f.i()
e=C.e.i(f,v)
d=this.f
if(typeof d!=="number")return d.i()
c=C.e.i(d,s)
b=C.e.i(h,q)
a=C.e.i(f,o)
a0=C.e.i(d,m)
h=C.e.i(h,k)
f=C.e.i(f,j)
d=C.e.i(d,i)
a1=this.r
if(typeof a1!=="number")return a1.i()
y=C.e.i(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.i()
v=C.e.i(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.i()
return new V.co(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.i(a3,s),C.e.i(a1,q)+C.e.i(a2,o)+C.e.i(a3,m),C.e.i(a1,k)+C.e.i(a2,j)+C.e.i(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.co))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.u]
y=V.bq(H.h([this.a,this.d,this.r],z),3,0)
x=V.bq(H.h([this.b,this.e,this.x],z),3,0)
w=V.bq(H.h([this.c,this.f,this.y],z),3,0)
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
av:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ae:function(a,b){var z=H.h([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
dT:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.n(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.n(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.n(u)
t=this.c
if(typeof t!=="number")return t.i()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.n(r)
q=this.d
if(typeof q!=="number")return q.i()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.i()
if(typeof k!=="number")return H.n(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.n(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.n(g)
f=this.Q
if(typeof f!=="number")return f.i()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.n(d)
c=this.ch
if(typeof c!=="number")return c.i()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.r.$2(a2,0))return V.c3()
a3=1/a2
a4=-w
a5=-i
return V.aA((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
i:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isav")
z=this.a
y=a7.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.n(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.i()
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
if(typeof f!=="number")return f.i()
e=this.f
if(typeof e!=="number")return e.i()
d=this.r
if(typeof d!=="number")return d.i()
c=this.x
if(typeof c!=="number")return c.i()
b=this.y
if(typeof b!=="number")return b.i()
a=this.z
if(typeof a!=="number")return a.i()
a0=this.Q
if(typeof a0!=="number")return a0.i()
a1=this.ch
if(typeof a1!=="number")return a1.i()
a2=this.cx
if(typeof a2!=="number")return a2.i()
a3=this.cy
if(typeof a3!=="number")return a3.i()
a4=this.db
if(typeof a4!=="number")return a4.i()
a5=this.dx
if(typeof a5!=="number")return a5.i()
return V.aA(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.n(u)
t=this.e
if(typeof t!=="number")return t.i()
s=this.f
if(typeof s!=="number")return s.i()
r=this.r
if(typeof r!=="number")return r.i()
q=this.y
if(typeof q!=="number")return q.i()
p=this.z
if(typeof p!=="number")return p.i()
o=this.Q
if(typeof o!=="number")return o.i()
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bb:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.n(u)
t=this.d
if(typeof t!=="number")return H.n(t)
s=this.e
if(typeof s!=="number")return s.i()
r=this.f
if(typeof r!=="number")return r.i()
q=this.r
if(typeof q!=="number")return q.i()
p=this.x
if(typeof p!=="number")return H.n(p)
o=this.y
if(typeof o!=="number")return o.i()
n=this.z
if(typeof n!=="number")return n.i()
m=this.Q
if(typeof m!=="number")return m.i()
l=this.ch
if(typeof l!=="number")return H.n(l)
return new V.a_(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
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
j:function(a){return this.L()},
dJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.bq(H.h([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bq(H.h([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bq(H.h([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bq(H.h([this.d,this.x,this.ch,this.dx],z),b,c)
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
L:function(){return this.dJ("",3,0)},
D:function(a){return this.dJ(a,3,0)},
q:{
aA:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c3:function(){return V.aA(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
en:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.F(c)))
y=b.at(z)
x=y.w(0,Math.sqrt(y.F(y)))
w=z.at(x)
v=new V.G(a.a,a.b,a.c)
return V.aA(x.a,w.a,z.a,x.N(0).F(v),x.b,w.b,z.b,w.N(0).F(v),x.c,w.c,z.c,z.N(0).F(v),0,0,0,1)}}},
Z:{"^":"b;p:a>,t:b>",
J:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
i:function(a,b){return new V.Z(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
a_:{"^":"b;p:a>,t:b>,c",
B:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.n(w)
return new V.a_(this.a+z,this.b+y,x+w)},
J:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.J()
if(typeof w!=="number")return H.n(w)
return new V.a_(this.a-z,this.b-y,x-w)},
i:function(a,b){var z=this.c
if(typeof z!=="number")return z.i()
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
j:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
c4:{"^":"b;p:a>,t:b>,c,d",
i:function(a,b){return new V.c4(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c4))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
ew:{"^":"b;p:a>,t:b>,c,d",
ga5:function(){var z,y
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
j:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"},
q:{
ex:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ew(a,b,c,d)}}},
W:{"^":"b;a,b",
hv:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
i:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.i()
y=this.b
if(typeof y!=="number")return y.i()
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
j:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
hv:[function(a){return Math.sqrt(this.F(this))},"$0","gl",1,0,24],
F:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.n(y)
return this.a*a.a+this.b*a.b+z*y},
cr:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.J()
if(typeof x!=="number")return H.n(x)
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
at:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.n(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.i()
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
N:function(a){var z=this.c
if(typeof z!=="number")return z.N()
return new V.G(-this.a,-this.b,-z)},
i:function(a,b){var z=this.c
if(typeof z!=="number")return z.i()
return new V.G(this.a*b,this.b*b,z*b)},
w:function(a,b){var z
if($.r.$2(b,0))return new V.G(0,0,0)
z=this.c
if(typeof z!=="number")return z.w()
return new V.G(this.a/b,this.b/b,z/b)},
dU:function(){if(!$.r.$2(0,this.a))return!1
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
j:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hd:{"^":"dW;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bN:function(a){var z=V.nf(a,this.c,this.b)
return z},
gC:function(){var z=this.y
if(z==null){z=D.O()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.E(a)},
scG:function(a,b){},
scs:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bN(z)}z=new D.Q("maximumLocation",y,this.b,this,[P.u])
z.b=!0
this.R(z)}},
scu:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bN(z)}z=new D.Q("minimumLocation",y,this.c,this,[P.u])
z.b=!0
this.R(z)}},
sW:function(a,b){var z,y
b=this.bN(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.Q("location",y,b,this,[P.u])
z.b=!0
this.R(z)}},
sct:function(a){var z,y,x
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
this.R(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.Q("velocity",x,a,this,[P.u])
z.b=!0
this.R(z)}},
sci:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.Q("dampening",y,a,this,[P.u])
z.b=!0
this.R(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sW(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
q:{
cQ:function(){var z=new U.hd()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dY:{"^":"ac;0a,0b",
gC:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
aS:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dY))return!1
return J.N(this.a,b.a)},
j:function(a){return"Constant: "+this.a.D("          ")},
q:{
dZ:function(a){var z=new U.dY()
z.a=a
return z}}},ea:{"^":"aN;0e,0f,0r,0a,0b,0c,0d",
gC:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
R:[function(a){var z
H.e(a,"$ist")
z=this.e
if(!(z==null))z.E(a)},function(){return this.R(null)},"af","$1","$0","gaC",0,2,1],
ij:[function(a,b){var z,y,x,w,v,u,t
z=U.ac
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gC()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.R(z)},"$2","geU",8,0,19],
iF:[function(a,b){var z,y,x,w,v,u,t
z=U.ac
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.D)(b),++v){u=b[v]
if(u!=null){t=u.gC()
t.toString
H.f(x,w)
C.a.O(t.a,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfg",8,0,19],
aS:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.at(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aS(0,b,c)
if(w!=null)x=x==null?w:w.i(0,x)}}this.f=x==null?V.c3():x
z=this.e
if(!(z==null))z.a7(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ea))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.c(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.c(w,y)
if(!J.N(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ask:function(){return[U.ac]},
$asaN:function(){return[U.ac]},
$isac:1},ac:{"^":"dW;"},jM:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gC:function(){var z=this.cy
if(z==null){z=D.O()
this.cy=z}return z},
R:[function(a){var z
H.e(a,"$ist")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.R(null)},"af","$1","$0","gaC",0,2,1],
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdj()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.f(this.gbT(),y)
C.a.h(z.a,x)
x=this.a.c.gdV()
x.toString
z=H.f(this.gbU(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
y=H.f(this.gbV(),y)
C.a.h(z.a,y)
return!0},
eQ:[function(a){H.e(a,"$ist")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbT",4,0,2],
eR:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$ist"),"$isbC")
if(!this.y)return
if(this.x){z=a.d.J(0,a.y)
z=new V.W(z.a,z.b)
z=z.F(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.J(0,a.y)
z=new V.W(y.a,y.b).i(0,2).w(0,z.ga5())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.i()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=new V.W(x.a,x.b).i(0,2).w(0,z.ga5())
x=this.b
v=w.a
if(typeof v!=="number")return v.N()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
this.b.sT(0)
y=y.J(0,a.z)
this.Q=new V.W(y.a,y.b).i(0,2).w(0,z.ga5())}this.af()},"$1","gbU",4,0,2],
eS:[function(a){var z,y,x
H.e(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.F(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.i()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sT(y*10*x)
this.af()}},"$1","gbV",4,0,2],
aS:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.ch=y
x=b.y
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aA(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isac:1},jN:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gC:function(){var z=this.fx
if(z==null){z=D.O()
this.fx=z}return z},
R:[function(a){var z
H.e(a,"$ist")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.R(null)},"af","$1","$0","gaC",0,2,1],
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdj()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.f(this.gbT(),y)
C.a.h(z.a,x)
x=this.a.c.gdV()
x.toString
z=H.f(this.gbU(),y)
C.a.h(x.a,z)
z=this.a.c.gbF()
z.toString
x=H.f(this.gbV(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.O()
x.f=z}x=H.f(this.geN(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.O()
x.d=z}x=H.f(this.geO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.O()
x.b=z}x=H.f(this.gfI(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.O()
x.d=z}x=H.f(this.gfH(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.O()
x.c=z}y=H.f(this.gfG(),y)
C.a.h(z.a,y)
return!0},
ak:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.W(z,y)},
eQ:[function(a){a=H.j(H.e(a,"$ist"),"$isbC")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbT",4,0,2],
eR:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$ist"),"$isbC")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.W(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ak(new V.W(y.a,y.b).i(0,2).w(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ak(new V.W(x.a,x.b).i(0,2).w(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.J(0,a.z)
this.dx=this.ak(new V.W(y.a,y.b).i(0,2).w(0,z.ga5()))}this.af()},"$1","gbU",4,0,2],
eS:[function(a){var z,y,x
H.e(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sT(-y*10*z)
this.af()}},"$1","gbV",4,0,2],
ig:[function(a){if(H.j(H.e(a,"$ist"),"$isem").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geN",4,0,2],
ih:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$ist"),"$isbC")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ak(new V.W(x.a,x.b).i(0,2).w(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.J(0,a.z)
this.dx=this.ak(new V.W(y.a,y.b).i(0,2).w(0,z.ga5()))
this.af()},"$1","geO",4,0,2],
iN:[function(a){H.e(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfI",4,0,2],
iM:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$ist"),"$iseH")
if(!this.cx)return
if(this.ch){z=a.d.J(0,a.y)
z=new V.W(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.J(0,a.y)
z=this.ak(new V.W(y.a,y.b).i(0,2).w(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.J(0,a.y)
w=this.ak(new V.W(x.a,x.b).i(0,2).w(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.J(0,a.z)
this.dx=this.ak(new V.W(y.a,y.b).i(0,2).w(0,z.ga5()))}this.af()},"$1","gfH",4,0,2],
iL:[function(a){var z,y,x
H.e(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sT(-y*10*z)
this.af()}},"$1","gfG",4,0,2],
aS:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aA(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.i(0,V.aA(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isac:1},jO:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gC:function(){var z=this.r
if(z==null){z=D.O()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.E(a)},
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.O()
z.e=y
z=y}else z=y
y=H.f(this.geT(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.O()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
ii:[function(a){var z,y,x,w
H.e(a,"$ist")
if(!J.N(this.b,this.a.b.c))return
H.j(a,"$isd2")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.i()
w=z+y*x
if(z!==w){this.d=w
z=new D.Q("zoom",z,w,this,[P.u])
z.b=!0
this.R(z)}},"$1","geT",4,0,2],
aS:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aA(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isac:1}}],["","",,M,{"^":"",hv:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aT:[function(a){var z
H.e(a,"$ist")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aT(null)},"ib","$1","$0","gaD",0,2,1],
iq:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aO
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b4()
s.a=H.h([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.aT(z)},"$2","gf_",8,0,10],
ir:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aO
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.b4()
s.a=H.h([],v)
s.c=0
t.sa2(s)}s=t.ga2()
s.toString
H.f(x,w)
C.a.O(s.a,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.aT(z)},"$2","gf0",8,0,10],
gC:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.e2(this.c)
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
u=C.d.ad(v.a*x)
if(typeof w!=="number")return H.n(w)
t=C.d.ad(v.b*w)
s=C.d.ad(v.c*x)
a.c=s
v=C.d.ad(v.d*w)
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
s.e1(V.aA(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.es
if(y==null){y=V.en(new V.a_(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.es=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.i(0,m)}a.db.e1(m)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.G();)z.d.an(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.G();)z.d.aQ(a)
this.a.toString
a.cy.cw()
a.db.cw()
this.b.toString
a.e0()},
$isoC:1}}],["","",,A,{"^":"",dM:{"^":"b;a,b,c"},h0:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hl:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hj:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},i9:{"^":"ey;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aM,0av,0aN,0bn,0dk,0dl,0bo,0bp,0dm,0dn,0bq,0br,0dq,0dr,0bs,0ds,0dt,0bt,0du,0dv,0bu,0bv,0bw,0dw,0dz,0bx,0by,0dA,0dB,0bz,0dC,0ck,0dD,0cl,0dE,0cm,0dF,0cn,0dG,0co,0dH,0cp,a,b,0c,0d,0e,0f,0r",
em:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.ak("")
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
a2.fL(z)
a2.fS(z)
a2.fM(z)
a2.h_(z)
a2.h0(z)
a2.fU(z)
a2.h4(z)
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
z=new P.ak("")
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
v.fP(z)
v.fK(z)
v.fN(z)
v.fQ(z)
v.fY(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fW(z)
v.fX(z)}v.fT(z)
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
p=H.h([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.X(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fO(z)
v.fV(z)
v.fZ(z)
v.h1(z)
v.h2(z)
v.h3(z)
v.fR(z)}r=z.a+="// === Main ===\n"
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
o=H.h([],[P.i])
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
n="vec4("+C.a.X(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cY(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cY(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fF(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.q(P.v("Failed to link shader: "+H.l(m)))}this.fC()
this.fD()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaR")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaR")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaR")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaR")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdf")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaR")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaR")
this.k3=H.h([],[A.aR])
y=a2.aM
if(y>0){this.k2=H.e(this.r.n(0,"bendMatCount"),"$isM")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.q(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaR"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isal")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isM")
break
case C.h:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isam")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isM")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isal")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isM")
break
case C.h:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isam")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isM")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.aM=H.j(this.r.n(0,"diffuseTxt"),"$isal")
this.aN=H.j(this.r.n(0,"nullDiffuseTxt"),"$isM")
break
case C.h:this.av=H.j(this.r.n(0,"diffuseTxt"),"$isam")
this.aN=H.j(this.r.n(0,"nullDiffuseTxt"),"$isM")
break}}y=a2.d
if(y!==C.c){this.bn=H.j(this.r.n(0,"invDiffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dk=H.j(this.r.n(0,"invDiffuseTxt"),"$isal")
this.bo=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isM")
break
case C.h:this.dl=H.j(this.r.n(0,"invDiffuseTxt"),"$isam")
this.bo=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isM")
break}}y=a2.e
if(y!==C.c){this.br=H.j(this.r.n(0,"shininess"),"$isa0")
this.bp=H.j(this.r.n(0,"specularClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dm=H.j(this.r.n(0,"specularTxt"),"$isal")
this.bq=H.j(this.r.n(0,"nullSpecularTxt"),"$isM")
break
case C.h:this.dn=H.j(this.r.n(0,"specularTxt"),"$isam")
this.bq=H.j(this.r.n(0,"nullSpecularTxt"),"$isM")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dq=H.j(this.r.n(0,"bumpTxt"),"$isal")
this.bs=H.j(this.r.n(0,"nullBumpTxt"),"$isM")
break
case C.h:this.dr=H.j(this.r.n(0,"bumpTxt"),"$isam")
this.bs=H.j(this.r.n(0,"nullBumpTxt"),"$isM")
break}if(a2.dy){this.ds=H.j(this.r.n(0,"envSampler"),"$isam")
this.dt=H.j(this.r.n(0,"nullEnvTxt"),"$isM")
y=a2.r
if(y!==C.c){this.bt=H.j(this.r.n(0,"reflectClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.du=H.j(this.r.n(0,"reflectTxt"),"$isal")
this.bu=H.j(this.r.n(0,"nullReflectTxt"),"$isM")
break
case C.h:this.dv=H.j(this.r.n(0,"reflectTxt"),"$isam")
this.bu=H.j(this.r.n(0,"nullReflectTxt"),"$isM")
break}}y=a2.x
if(y!==C.c){this.bv=H.j(this.r.n(0,"refraction"),"$isa0")
this.bw=H.j(this.r.n(0,"refractClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dw=H.j(this.r.n(0,"refractTxt"),"$isal")
this.bx=H.j(this.r.n(0,"nullRefractTxt"),"$isM")
break
case C.h:this.dz=H.j(this.r.n(0,"refractTxt"),"$isam")
this.bx=H.j(this.r.n(0,"nullRefractTxt"),"$isM")
break}}}y=a2.y
if(y!==C.c){this.by=H.j(this.r.n(0,"alpha"),"$isa0")
switch(y){case C.c:break
case C.i:break
case C.f:this.dA=H.j(this.r.n(0,"alphaTxt"),"$isal")
this.bz=H.j(this.r.n(0,"nullAlphaTxt"),"$isM")
break
case C.h:this.dB=H.j(this.r.n(0,"alphaTxt"),"$isam")
this.bz=H.j(this.r.n(0,"nullAlphaTxt"),"$isM")
break}}this.ck=H.h([],[A.eT])
this.cl=H.h([],[A.eU])
this.cm=H.h([],[A.eV])
this.cn=H.h([],[A.eW])
this.co=H.h([],[A.eX])
this.cp=H.h([],[A.eY])
if(a2.k2){y=a2.z
if(y>0){this.dC=H.e(this.r.n(0,"dirLightCount"),"$isM")
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
x=this.ck;(x&&C.a).h(x,new A.eT(l,k,j))}}y=a2.Q
if(y>0){this.dD=H.e(this.r.n(0,"pntLightCount"),"$isM")
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
x=this.cl;(x&&C.a).h(x,new A.eU(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dE=H.e(this.r.n(0,"spotLightCount"),"$isM")
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
x=this.cm;(x&&C.a).h(x,new A.eV(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dF=H.e(this.r.n(0,"txtDirLightCount"),"$isM")
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
H.j(e,"$isal")
x=this.cn;(x&&C.a).h(x,new A.eW(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dG=H.e(this.r.n(0,"txtPntLightCount"),"$isM")
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
H.j(i,"$isdf")
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
H.j(c,"$isam")
x=this.co;(x&&C.a).h(x,new A.eX(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dH=H.e(this.r.n(0,"txtSpotLightCount"),"$isM")
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
H.j(a1,"$isal")
x=this.cp;(x&&C.a).h(x,new A.eY(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ah:function(a,b,c){b.a.uniform1i(b.d,1)},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
i8:function(a,b){var z,y
z=a.av
y=new A.i9(b,z)
y.eo(b,z)
y.em(a,b)
return y}}},ic:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aM,av,aN",
fL:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aM+"];\n"
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
fS:function(a){var z
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
fM:function(a){var z
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
h_:function(a){var z,y
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
h0:function(a){var z,y
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
fU:function(a){var z
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
h4:function(a){var z
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
if(0>=c.length)return H.c(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.az(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fP:function(a){var z,y
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
fK:function(a){var z,y
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
fN:function(a){var z,y
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
fQ:function(a){var z,y
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
fY:function(a){var z,y
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
fT:function(a){var z,y
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
fW:function(a){var z,y
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
fX:function(a){var z,y
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
fO:function(a){var z,y
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
fV:function(a){var z,y
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
fZ:function(a){var z,y
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
h1:function(a){var z,y,x
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
h2:function(a){var z,y,x
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
h3:function(a){var z,y,x
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
fR:function(a){var z
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
j:function(a){return this.av}},eT:{"^":"b;a,b,c"},eW:{"^":"b;a,b,c,d,e,f,r,x"},eU:{"^":"b;a,b,c,d,e,f,r"},eX:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eV:{"^":"b;a,b,c,d,e,f,r,x,y,z"},eY:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ey:{"^":"cJ;",
eo:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cY:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fF(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fC:function(){var z,y,x,w,v,u
z=H.h([],[A.dM])
y=this.a
x=H.C(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dM(y,v.name,u))}this.f=new A.h0(z)},
fD:function(){var z,y,x,w,v,u
z=H.h([],[A.ad])
y=this.a
x=H.C(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hg(v.type,v.size,v.name,u))}this.r=new A.jx(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.M(z,y,b,c)
else return A.de(z,y,b,a,c)},
eG:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.al(z,y,b,c)
else return A.de(z,y,b,a,c)},
eH:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.am(z,y,b,c)
else return A.de(z,y,b,a,c)},
bh:function(a,b){return new P.f7(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hg:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.a0(this.a,this.e,c,d)
case 35664:return new A.js(this.a,this.e,c,d)
case 35665:return new A.K(this.a,this.e,c,d)
case 35666:return new A.jv(this.a,this.e,c,d)
case 35667:return new A.jt(this.a,this.e,c,d)
case 35668:return new A.ju(this.a,this.e,c,d)
case 35669:return new A.jw(this.a,this.e,c,d)
case 35674:return new A.jz(this.a,this.e,c,d)
case 35675:return new A.df(this.a,this.e,c,d)
case 35676:return new A.aR(this.a,this.e,c,d)
case 35678:return this.eG(b,c,d)
case 35680:return this.eH(b,c,d)
case 35670:throw H.a(this.bh("BOOL",c))
case 35671:throw H.a(this.bh("BOOL_VEC2",c))
case 35672:throw H.a(this.bh("BOOL_VEC3",c))
case 35673:throw H.a(this.bh("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ce:{"^":"b;a,b",
j:function(a){return this.b}},ad:{"^":"b;"},jx:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.L()},
hp:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].j(0)+a
return x},
L:function(){return this.hp("\n")}},M:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform1i: "+H.l(this.c)}},jt:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform2i: "+H.l(this.c)}},ju:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform3i: "+H.l(this.c)}},jw:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform4i: "+H.l(this.c)}},jr:{"^":"ad;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.l(this.c)},
q:{
de:function(a,b,c,d,e){var z=new A.jr(a,b,c,e)
z.f=d
z.e=P.i_(d,0,!1,P.o)
return z}}},a0:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform1f: "+H.l(this.c)}},js:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform2f: "+H.l(this.c)}},K:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform3f: "+H.l(this.c)}},jv:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform4f: "+H.l(this.c)}},jz:{"^":"ad;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.l(this.c)}},df:{"^":"ad;a,b,c,d",
aj:function(a){var z=new Float32Array(H.bl(H.w(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.l(this.c)}},aR:{"^":"ad;a,b,c,d",
aj:function(a){var z=new Float32Array(H.bl(H.w(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.l(this.c)}},al:{"^":"ad;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.l(this.c)}},am:{"^":"ad;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
fG:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.an,P.u,P.u]})
z=F.d9()
F.bP(z,b,c,d,a,1,0,0,1)
F.bP(z,b,c,d,a,0,1,0,3)
F.bP(z,b,c,d,a,0,0,1,2)
F.bP(z,b,c,d,a,-1,0,0,0)
F.bP(z,b,c,d,a,0,-1,0,0)
F.bP(z,b,c,d,a,0,0,-1,3)
z.a4()
return z},
cy:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.bI()
return(y>0?z+4:z)*2},
bP:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.an,P.u,P.u]})
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
z.d=y}l=F.cy(y)
k=F.cy(z.b)
j=F.cb(d,e,new F.lU(z,F.cy(z.c),F.cy(z.d),k,l,c),b)
if(j!=null)a.bA(j)},
mf:function(a,b,c,d,e,f){return F.mh(!1,!1,d,new F.mg(a,f),e)},
mh:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
z=F.cb(c,e,new F.mk(d),null)
if(z==null)return
z.a4()
z.bi()
return z},
mB:function(a,b){var z=F.cb(a,b,new F.mC(),null)
z.d.bE()
z.a4()
z.bi()
return z},
n7:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.n8()
y=F.fG(a,null,new F.n9(z),c)
y.bi()
return y},
nc:function(a,b,c,d){return F.mi(c,a,d,b,new F.nd())},
mi:function(a,b,c,d,e){var z=F.cb(a,b,new F.mj(H.f(e,{func:1,ret:V.a_,args:[P.u]}),d,b,c),null)
if(z==null)return
z.a4()
z.bi()
return z},
dC:function(a,b,c){var z={}
z.a=b
z.a=new F.ms()
return F.cb(c,a,new F.mt(z),null)},
cb:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.an,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.d9()
y=H.h([],[F.an])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.dj(null,null,new V.bX(u,0,0,1),null,null,new V.Z(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cg(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.dj(null,null,new V.bX(o,n,m,1),null,null,new V.Z(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cg(d))}}z.d.h5(a+1,b+1,y)
return z},
lU:{"^":"m:3;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cr(z.b,b).cr(z.d.cr(z.c,b),c)
a.sW(0,new V.a_(y.a,y.b,y.c))
a.scD(y.w(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
a.sc8(new V.c4(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mg:{"^":"m:14;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mk:{"^":"m:3;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.n(v)
y=-y*v
u=x*v
a.sW(0,new V.a_(y,u,w))
u=new V.G(y,u,w)
a.scD(u.w(0,Math.sqrt(u.F(u))))
a.sc8(new V.c4(1-c,2+c,-1,-1))}},
mC:{"^":"m:3;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.G(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.w(0,Math.sqrt(w.F(w)))
a.sW(0,new V.a_(x.a,x.b,x.c))}},
n8:{"^":"m:14;",
$2:function(a,b){return 0}},
n9:{"^":"m:3;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.n(z)
y=a.f
x=new V.G(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.F(x))).i(0,1+z)
a.sW(0,new V.a_(z.a,z.b,z.c))}},
nd:{"^":"m:44;",
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)}},
mj:{"^":"m:3;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dI(y.$1(z),x)
x=J.dI(y.$1(z+3.141592653589793/this.c),x).J(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.F(x)))
u=new V.G(1,0,0)
y=v.at(!v.u(0,u)?new V.G(0,0,1):u)
t=y.w(0,Math.sqrt(y.F(y)))
y=t.at(v)
u=y.w(0,Math.sqrt(y.F(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.i(0,y*x)
x=t.i(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.J()
if(typeof q!=="number")return H.n(q)
a.sW(0,w.B(0,new V.a_(y.a-x.a,y.b-x.b,r-q)))}},
ms:{"^":"m:14;",
$2:function(a,b){return 0}},
mt:{"^":"m:3;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sW(0,new V.a_(z,y,this.a.a.$2(b,c)))
x=new V.G(z,y,1)
a.scD(x.w(0,Math.sqrt(x.F(x))))
x=1-b
w=1-c
a.sc8(new V.c4(b*c,2+x*c,4+b*w,6+x*w))}},
au:{"^":"b;0a,0b,0c,0d,0e",
au:function(){if(!this.gaZ()){C.a.O(this.a.a.d.b,this)
this.a.a.a0()}this.c_()
this.c0()
this.fn()},
fz:function(a){this.a=a
C.a.h(a.d.b,this)},
fA:function(a){this.b=a
C.a.h(a.d.c,this)},
fB:function(a){this.c=a
C.a.h(a.d.d,this)},
c_:function(){var z=this.a
if(z!=null){C.a.O(z.d.b,this)
this.a=null}},
c0:function(){var z=this.b
if(z!=null){C.a.O(z.d.c,this)
this.b=null}},
fn:function(){var z=this.c
if(z!=null){C.a.O(z.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
eA:function(){var z,y,x,w,v
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
if(v.dU())return
return v.w(0,Math.sqrt(v.F(v)))},
eC:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.J(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.F(z)))
z=w.J(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.at(z.w(0,Math.sqrt(z.F(z))))
return z.w(0,Math.sqrt(z.F(z)))},
cc:function(){if(this.d!=null)return!0
var z=this.eA()
if(z==null){z=this.eC()
if(z==null)return!1}this.d=z
this.a.a.a0()
return!0},
ez:function(){var z,y,x,w,v
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
if(v.dU())return
return v.w(0,Math.sqrt(v.F(v)))},
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
if($.r.$2(n,0)){z=r.J(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.J(0,u).i(0,l).B(0,u).J(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.F(z)))
z=k.at(m)
z=z.w(0,Math.sqrt(z.F(z))).at(k)
m=z.w(0,Math.sqrt(z.F(z)))}return m},
ca:function(){if(this.e!=null)return!0
var z=this.ez()
if(z==null){z=this.eB()
if(z==null)return!1}this.e=z
this.a.a.a0()
return!0},
ghc:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.L()},
D:function(a){var z,y
if(this.gaZ())return a+"disposed"
z=a+C.b.ac(J.aa(this.a.e),0)+", "+C.b.ac(J.aa(this.b.e),0)+", "+C.b.ac(J.aa(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
L:function(){return this.D("")},
q:{
bZ:function(a,b,c){var z,y,x
z=new F.au()
y=a.a
if(y==null)H.q(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.v("May not create a face with vertices attached to different shapes."))
z.fz(a)
z.fA(b)
z.fB(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a0()
return z}}},
hy:{"^":"b;"},
iZ:{"^":"hy;",
b2:function(a,b,c){var z,y
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
cZ:{"^":"b;0a,0b",
au:function(){if(!this.gaZ()){C.a.O(this.a.a.c.b,this)
this.a.a.a0()}this.c_()
this.c0()},
c_:function(){var z=this.a
if(z!=null){C.a.O(z.c.b,this)
this.a=null}},
c0:function(){var z=this.b
if(z!=null){C.a.O(z.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.L()},
D:function(a){if(this.gaZ())return a+"disposed"
return a+C.b.ac(J.aa(this.a.e),0)+", "+C.b.ac(J.aa(this.b.e),0)},
L:function(){return this.D("")}},
hQ:{"^":"b;"},
jq:{"^":"hQ;",
b2:function(a,b,c){var z,y
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
au:function(){var z=this.a
if(z!=null){C.a.O(z.a.b.b,this)
this.a.a.a0()}this.fm()},
fm:function(){var z=this.a
if(z!=null){C.a.O(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.L()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ac(J.aa(z.e),0)},
L:function(){return this.D("")}},
ct:{"^":"b;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
bA:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.he())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
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
s=new F.d6()
if(r.a==null)H.q(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
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
t=new F.cZ()
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
if(!(t==null))t.E(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){m=z[w]
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
F.bZ(p,o,l)}z=this.e
if(!(z==null))z.a7(0)},
a4:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.a4()||!1
if(!this.a.a4())y=!1
z=this.e
if(!(z==null))z.a7(0)
return y},
h7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=a.a,x=z.length;y>=0;--y){w=this.a.c
if(y>=w.length)return H.c(w,y)
v=w[y]
w=v.y
u=C.e.b_(w.a*(a.b-1))
w=w.b
t=a.c
if(typeof t!=="number")return t.J()
s=C.e.b_(w*(t-1))
w=a.b
u=u>=0?C.d.ai(u,w):w+C.d.ai(u,w)
t=a.c
if(s>=0){if(typeof t!=="number")return H.n(t)
s=C.d.ai(s,t)}else{if(typeof t!=="number")return H.n(t)
s=t+C.d.ai(s,t)}r=(u+s*w)*4
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
if(typeof t!=="number")return t.i()
n=w.a
m=w.b
l=w.c
if(typeof l!=="number")return l.B()
t=new V.a_(n+q*o,m+p*o,l+t*o)
if(!J.N(w,t)){v.f=t
w=v.a
if(w!=null){w=w.e
if(!(w==null))w.E(null)}}}z=this.e
if(!(z==null))z.a7(0)},
i9:function(a){var z,y,x,w,v
z=this.e
if(!(z==null))++z.c
for(z=this.a,y=z.c.length-1,x=a.a;y>=0;--y){w=z.c
if(y>=w.length)return H.c(w,y)
v=w[y]
if((x&$.$get$aF().a)===0)v.f=null
if((x&$.$get$ay().a)===0)v.r=null
if((x&$.$get$aE().a)===0)v.x=null
if((x&$.$get$aG().a)===0)v.y=null
if((x&$.$get$aH().a)===0)v.z=null
if((x&$.$get$dl().a)===0)v.Q=null
if((x&$.$get$b_().a)===0)v.ch=0
if((x&$.$get$aD().a)===0)v.cx=null}z=this.e
if(!(z==null))z.a7(0)},
i8:function(a,b){var z,y,x,w
z=this.e
if(!(z==null))++z.c
for(z=this.d,y=z.b.length-1;y>=0;--y){x=z.b
if(y>=x.length)return H.c(x,y)
w=x[y]
w.d=null}z=this.e
if(!(z==null))z.a7(0)},
i7:function(a){return this.i8(!0,a)},
eL:function(a,b,c,d,e){var z,y,x
H.w(d,"$isd",[F.an],"$asd")
H.w(e,"$isd",[P.o],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
if(a.b2(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hB:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.an],x=[P.o];y>=0;--y){w=this.a.c
if(y>=w.length)return H.c(w,y)
v=w[y]
u=H.h([],z)
t=H.h([],x)
if(this.eL(a,v,y,u,t))b.bA(u)}this.a.A()
this.c.bE()
this.d.bE()
this.b.hT()
this.c.cA(new F.jq())
this.d.cA(new F.iZ())
z=this.e
if(!(z==null))z.a7(0)},
h6:function(a){this.hB(new F.k1(),new F.io())},
bi:function(){return this.h6(null)},
ha:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aF()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
v=b.gcL(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.h(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.h(y,[Z.dR])
for(r=0,q=0;q<w;++q){p=b.h8(q)
o=p.gcL(p)
C.a.m(s,q,new Z.dR(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.c(y,n)
m=y[n].hw(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bl(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dS(new Z.f4(34962,j),s,b)
i.b=H.h([],[Z.cj])
if(this.b.b.length!==0){x=P.o
h=H.h([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(0,h.length,f))}if(this.c.b.length!==0){x=P.o
h=H.h([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dm(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(1,h.length,f))}if(this.d.b.length!==0){x=P.o
h=H.h([],[x])
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
C.a.h(h,g.e)}f=Z.dm(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(4,h.length,f))}return i},
j:function(a){var z=H.h([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.X(z,"\n")},
a6:function(a){var z=this.e
if(!(z==null))z.E(a)},
a0:function(){return this.a6(null)},
q:{
d9:function(){var z,y
z=new F.ct()
y=new F.jX(z)
y.b=!1
y.c=H.h([],[F.an])
z.a=y
y=new F.iY(z)
y.b=H.h([],[F.d6])
z.b=y
y=new F.iX(z)
y.b=H.h([],[F.cZ])
z.c=y
y=new F.iW(z)
y.b=H.h([],[F.au])
z.d=y
z.e=null
return z}}},
iW:{"^":"b;a,0b",
h5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isd",[F.an],"$asd")
z=H.h([],[F.au])
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
C.a.h(z,F.bZ(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bZ(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bZ(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bZ(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cA:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b2(0,v,t)){v.au()
break}}}}},
bE:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
x=y[z]
y=x.ghc(x)
if(y)x.au()}},
a4:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cc())x=!1
return x},
cb:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].ca())x=!1
return x},
j:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.X(z,"\n")},
L:function(){return this.D("")}},
iX:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cA:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b2(0,v,t)){v.au()
break}}}}},
bE:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.au()}},
j:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.h([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.c(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.X(z,"\n")},
L:function(){return this.D("")}},
iY:{"^":"b;a,0b",
gl:function(a){return this.b.length},
hT:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
y=y[z]
if(y.a.b.b.length>1)y.au()}},
j:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.X(z,"\n")},
L:function(){return this.D("")}},
an:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cg:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.dj(this.cx,x,u,z,y,w,v,a,t)},
he:function(){return this.cg(null)},
sW:function(a,b){var z
if(!J.N(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a0()}},
scD:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a0()}},
sc8:function(a){var z
if(!J.N(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a0()}},
hw:function(a){var z,y
z=J.H(a)
if(z.u(a,$.$get$aF())){z=this.f
y=[P.u]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$ay())){z=this.r
y=[P.u]
if(z==null)return H.h([0,1,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aE())){z=this.x
y=[P.u]
if(z==null)return H.h([0,0,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aG())){z=this.y
y=[P.u]
if(z==null)return H.h([0,0],y)
else return H.h([z.a,z.b],y)}else if(z.u(a,$.$get$aH())){z=this.z
y=[P.u]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bI())){z=this.Q
y=[P.u]
if(z==null)return H.h([1,1,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bJ())){z=this.Q
y=[P.u]
if(z==null)return H.h([1,1,1,1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b_()))return H.h([this.ch],[P.u])
else if(z.u(a,$.$get$aD())){z=this.cx
y=[P.u]
if(z==null)return H.h([-1,-1,-1,-1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else return H.h([],[P.u])},
cc:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.I(0,new F.k6(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.a7(0)}return!0},
ca:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.I(0,new F.k5(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.a7(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.L()},
D:function(a){var z,y,x
z=H.h([],[P.i])
C.a.h(z,C.b.ac(J.aa(this.e),0))
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
C.a.h(z,V.R(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.X(z,", ")
return a+"{"+x+"}"},
L:function(){return this.D("")},
q:{
dj:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.an()
y=new F.k4(z)
y.b=H.h([],[F.d6])
z.b=y
y=new F.k0(z)
x=[F.cZ]
y.b=H.h([],x)
y.c=H.h([],x)
z.c=y
y=new F.jY(z)
x=[F.au]
y.b=H.h([],x)
y.c=H.h([],x)
y.d=H.h([],x)
z.d=y
h=$.$get$dk()
z.e=0
y=$.$get$aF()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ay().a)!==0?e:null
z.x=(x&$.$get$aE().a)!==0?b:null
z.y=(x&$.$get$aG().a)!==0?f:null
z.z=(x&$.$get$aH().a)!==0?g:null
z.Q=(x&$.$get$dl().a)!==0?c:null
z.ch=(x&$.$get$b_().a)!==0?i:0
z.cx=(x&$.$get$aD().a)!==0?a:null
return z}}},
k6:{"^":"m:7;a",
$1:function(a){var z,y
H.e(a,"$isau")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
k5:{"^":"m:7;a",
$1:function(a){var z,y
H.e(a,"$isau")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
jX:{"^":"b;a,0b,0c",
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
this.a.a0()
return!0},
gl:function(a){return this.c.length},
a4:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cc()
return!0},
cb:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].ca()
return!0},
hb:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.i()
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
j:function(a){return this.L()},
D:function(a){var z,y,x,w
this.A()
z=H.h([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.X(z,"\n")},
L:function(){return this.D("")}},
jY:{"^":"b;a,0b,0c,0d",
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
I:function(a,b){H.f(b,{func:1,ret:-1,args:[F.au]})
C.a.I(this.b,b)
C.a.I(this.c,new F.jZ(this,b))
C.a.I(this.d,new F.k_(this,b))},
j:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.X(z,"\n")},
L:function(){return this.D("")}},
jZ:{"^":"m:7;a,b",
$1:function(a){H.e(a,"$isau")
if(!J.N(a.a,this.a))this.b.$1(a)}},
k_:{"^":"m:7;a,b",
$1:function(a){var z
H.e(a,"$isau")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
k0:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.c(z,x)
return z[x]}else{if(b<0)return H.c(z,b)
return z[b]}},
j:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.X(z,"\n")},
L:function(){return this.D("")}},
k2:{"^":"b;"},
k1:{"^":"k2;",
b2:function(a,b,c){return J.N(b.f,c.f)}},
k3:{"^":"b;"},
io:{"^":"k3;",
bA:function(a){var z,y,x,w,v,u,t,s,r
H.w(a,"$isd",[F.an],"$asd")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.B()
if(typeof w!=="number")return H.n(w)
z=new V.G(z.a+v,z.b+u,t+w)}}z=z.w(0,Math.sqrt(z.F(z)))
for(y=a.length,w=z.a,v=z.b,v=w*w+v*v,w=z.c,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){s=a[x]
if(typeof w!=="number")return w.i()
r=z.w(0,Math.sqrt(v+w*w))
if(!J.N(s.r,r)){s.r=r
u=s.a
if(u!=null){u=u.e
if(!(u==null))u.E(null)}}}return}},
k4:{"^":"b;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.L()},
D:function(a){var z,y,x,w
z=H.h([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].D(a))
return C.a.X(z,"\n")},
L:function(){return this.D("")}}}],["","",,O,{"^":"",i7:{"^":"db;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gC:function(){var z=this.dy
if(z==null){z=D.O()
this.dy=z}return z},
ag:[function(a){var z
H.e(a,"$ist")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.ag(null)},"ip","$1","$0","geZ",0,2,1],
fs:[function(a){H.e(a,"$ist")
this.a=null
this.ag(a)},function(){return this.fs(null)},"iK","$1","$0","gfq",0,2,1],
il:[function(a,b){var z=V.av
z=new D.ck(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.ag(z)},"$2","geW",8,0,17],
im:[function(a,b){var z=V.av
z=new D.cl(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.ag(z)},"$2","geX",8,0,17],
cW:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
h="MaterialLight_"+C.d.j(q.a)+C.d.j(p.a)+C.d.j(o.a)+C.d.j(n.a)+C.d.j(m.a)+C.d.j(l.a)+C.d.j(k.a)+C.d.j(j.a)+C.d.j(i.a)+"_"
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
a6=$.$get$aF()
if(c){z=$.$get$ay()
a6=new Z.aZ(a6.a|z.a)}if(b){z=$.$get$aE()
a6=new Z.aZ(a6.a|z.a)}if(a){z=$.$get$aG()
a6=new Z.aZ(a6.a|z.a)}if(a0){z=$.$get$aH()
a6=new Z.aZ(a6.a|z.a)}if(a2){z=$.$get$aD()
a6=new Z.aZ(a6.a|z.a)}return new A.ic(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.w(a,"$isd",[T.dc],"$asd")},
an:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cE(x)}}},
hV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cW()
y=a.fr.k(0,z.av)
if(y==null){y=A.i8(z,a.a)
x=y.b
if(x.length===0)H.q(P.v("May not cache a shader with no name."))
if(a.fr.ce(0,x))H.q(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aN
z=b.e
if(!(z instanceof Z.dS)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.a4()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.cb()
t.a.cb()
t=t.e
if(!(t==null))t.a7(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hb()
s=s.e
if(!(s==null))s.a7(0)}q=b.d.ha(new Z.k7(a.a),v)
q.aO($.$get$aF()).e=this.a.y.c
if(z)q.aO($.$get$ay()).e=this.a.Q.c
if(u)q.aO($.$get$aE()).e=this.a.z.c
if(w.rx)q.aO($.$get$aG()).e=this.a.ch.c
if(t)q.aO($.$get$aH()).e=this.a.cx.c
if(w.x1)q.aO($.$get$aD()).e=this.a.cy.c
b.e=q}z=T.dc
p=H.h([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hl()
if(w.fx){u=this.a
t=a.dx
t=t.gY(t)
u=u.db
u.toString
u.aj(t.ae(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gY(t)
s=a.dx
s=t.i(0,s.gY(s))
a.cx=s
t=s}u=u.dx
u.toString
u.aj(t.ae(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghR()
s=a.dx
s=t.i(0,s.gY(s))
a.ch=s
t=s}u=u.fr
u.toString
u.aj(t.ae(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.aj(t.ae(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.aj(t.ae(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.aj(C.t.ae(t,!0))}if(w.aM>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.u],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.c(s,n)
s=s[n]
t.toString
H.e(s,"$isav")
t=t.k3
if(n>=t.length)return H.c(t,n)
t=t[n]
m=new Float32Array(H.bl(H.w(s.ae(0,!0),"$isd",u,"$asd")))
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
case C.f:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.ah(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.f.e)
u=this.a
t=this.f.e
u.aa(u.r2,u.rx,t)
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
case C.f:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.ah(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.r.e)
u=this.a
t=this.r.e
u.aa(u.x2,u.y1,t)
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
case C.f:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.ah(u.aM,u.aN,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.x.e)
u=this.a
t=this.x.e
u.aa(u.av,u.aN,t)
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
u=u.bn
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.ah(u.dk,u.bo,t)
t=this.a
u=this.y.f
t=t.bn
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.aa(u.dl,u.bo,t)
t=this.a
u=this.y.f
t=t.bn
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bp
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.br
t.a.uniform1f(t.d,r)
break
case C.f:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.ah(u.dm,u.bq,t)
t=this.a
u=this.z.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.br
u.a.uniform1f(u.d,r)
break
case C.h:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.aa(u.dn,u.bq,t)
t=this.a
u=this.z.f
t=t.bp
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.br
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dC
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.ck
if(k>=s.length)return H.c(s,k)
h=s[k]
s=l.cE(i.a)
r=s.a
g=s.b
f=s.c
if(typeof f!=="number")return f.i()
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dD
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cl
if(k>=s.length)return H.c(s,k)
h=s[k]
s=i.gb6(i)
r=h.b
g=s.gp(s)
f=s.gt(s)
s=s.gcH(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bb(i.gb6(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gal(i)
f=h.d
g=s.gbD()
r=s.gbc()
s=s.gbk()
f.a.uniform3f(f.d,g,r,s)
s=i.gc5()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gc6()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gc7()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dE
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cm
if(k>=s.length)return H.c(s,k)
h=s[k]
s=i.gb6(i)
r=h.b
g=s.gp(s)
f=s.gt(s)
s=s.gcH(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcj(i).iR()
f=h.c
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=l.bb(i.gb6(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gal(i)
r=h.e
g=s.gbD()
f=s.gbc()
s=s.gbk()
r.a.uniform3f(r.d,g,f,s)
s=i.giP()
f=h.f
f.a.uniform1f(f.d,s)
s=i.giO()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gc5()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gc6()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gc7()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dF
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
r=this.a.cn
if(k>=r.length)return H.c(r,k)
h=r[k]
r=i.gb8()
H.w(p,"$isd",s,"$asd")
if(!C.a.bm(p,r)){r.sb0(0,p.length)
C.a.h(p,r)}r=i.gcj(i)
g=h.d
f=r.gaJ(r)
e=r.gaK(r)
r=r.gaL()
g.a.uniform3f(g.d,f,e,r)
r=i.gbF()
e=h.b
f=r.gaJ(r)
g=r.gaK(r)
r=r.gaL()
e.a.uniform3f(e.d,f,g,r)
r=i.gb7(i)
g=h.c
f=r.gaJ(r)
e=r.gaK(r)
r=r.gaL()
g.a.uniform3f(g.d,f,e,r)
r=l.cE(i.gcj(i))
e=r.a
f=r.b
g=r.c
if(typeof g!=="number")return g.i()
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gal(i)
f=h.f
e=g.gbD()
r=g.gbc()
g=g.gbk()
f.a.uniform3f(f.d,e,r,g)
g=i.gb8()
r=g.gb1(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gb1(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb0(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dG
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.y,t=u.length,s=[P.u],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
g=this.a.co
if(k>=g.length)return H.c(g,k)
h=g[k]
g=i.gb8()
H.w(p,"$isd",r,"$asd")
if(!C.a.bm(p,g)){g.sb0(0,p.length)
C.a.h(p,g)}d=l.i(0,i.gY(i))
g=i.gY(i).bb(new V.a_(0,0,0))
f=h.b
e=g.gp(g)
c=g.gt(g)
g=g.gcH(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bb(new V.a_(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dT(0)
c=h.d
m=new Float32Array(H.bl(H.w(new V.co(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ae(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gal(i)
g=h.e
e=c.gbD()
f=c.gbc()
c=c.gbk()
g.a.uniform3f(g.d,e,f,c)
c=i.gb8()
g=c.gb1(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gb1(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gb0(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gc5()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gc6()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gc7()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dH
u.a.uniform1i(u.d,o)
u=a.db
l=u.gY(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.D)(u),++j){i=u[j]
s=this.a.cp
if(k>=s.length)return H.c(s,k)
h=s[k]
s=i.gb8()
H.w(p,"$isd",z,"$asd")
if(!C.a.bm(p,s)){s.sb0(0,p.length)
C.a.h(p,s)}s=i.gb6(i)
r=h.b
g=s.gp(s)
f=s.gt(s)
s=s.gcH(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcj(i)
f=h.c
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=i.gbF()
r=h.d
g=s.gaJ(s)
f=s.gaK(s)
s=s.gaL()
r.a.uniform3f(r.d,g,f,s)
s=i.gb7(i)
f=h.e
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=l.bb(i.gb6(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb8()
r=s.gb1(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gb1(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb0(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gal(i)
r=h.y
g=s.gbD()
f=s.gbc()
s=s.gbk()
r.a.uniform3f(r.d,g,f,s)
s=i.giY()
f=h.z
f.a.uniform1f(f.d,s)
s=i.giZ()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gc5()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gc6()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gc7()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ah(z.dq,z.bs,u)
break
case C.h:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.aa(z.dr,z.bs,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gY(u).dT(0)
a.Q=u}z=z.fy
z.toString
z.aj(u.ae(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.aa(z.ds,z.dt,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bt
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ah(z.du,z.bu,u)
u=this.a
z=this.cx.f
u=u.bt
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.aa(z.dv,z.bu,u)
u=this.a
z=this.cx.f
u=u.bt
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bw
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bv
u.a.uniform1f(u.d,s)
break
case C.f:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ah(z.dw,z.bx,u)
u=this.a
z=this.cy.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bv
z.a.uniform1f(z.d,s)
break
case C.h:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.aa(z.dz,z.bx,u)
u=this.a
z=this.cy.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bv
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.by
z.a.uniform1f(z.d,t)
break
case C.f:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.ah(z.dA,z.bz,t)
t=this.a
z=this.db.f
t=t.by
t.a.uniform1f(t.d,z)
break
case C.h:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.aa(z.dB,z.bz,t)
t=this.a
z=this.db.f
t=t.by
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bj(a)
z=b.e
z.bj(a)
z.aQ(a)
z.e8(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].e8(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.hj()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cW().av}},ia:{"^":"d0;0f,a,b,0c,0d,0e"},d0:{"^":"b;",
bf:["ek",function(){}]},ib:{"^":"d0;a,b,0c,0d,0e"},b7:{"^":"d0;0f,a,b,0c,0d,0e",
d7:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.Q(this.b+".color",z,a,this,[V.a4])
y.b=!0
this.a.ag(y)}},
bf:["bL",function(){this.ek()
this.d7(new V.a4(1,1,1))}],
sal:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bf()
z=this.a
z.a=null
z.ag(null)}this.d7(b)}},id:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
fw:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.ag(z)}},
bf:function(){this.bL()
this.fw(1)}},ie:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
c1:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.ag(z)}},
bf:function(){this.bL()
this.c1(100)}},db:{"^":"b;"}}],["","",,T,{"^":"",dc:{"^":"cJ;"},j8:{"^":"dc;0b,0c,0d,0e,0f,0r,0x,0y,a"},jc:{"^":"b;a,0b,0c,0d,0e",
hz:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.eb(null,a,null)
w=new T.j8(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.O()
z=W.ab
W.a1(x,"load",H.f(new T.jd(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hy:function(a){return this.hz(a,!1,!1,!1,!1)},
ft:function(a,b,c){var z,y,x,w
b=V.dG(b,2)
z=V.dG(a.width,2)
y=V.dG(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cO(null,null)
x.width=z
x.height=y
w=H.e(C.k.ed(x,"2d"),"$isdV")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.me(w.getImageData(0,0,x.width,x.height))}}},jd:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.ft(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.W.i1(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.hk()}++x.e}},je:{"^":"b;a,b,c"}}],["","",,X,{"^":"",dU:{"^":"b;",$isaP:1},hD:{"^":"eD;0a,0b,0c,0d,0e,0f,0r,0x",
gC:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z}},ir:{"^":"b;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
aU:[function(a){var z
H.e(a,"$ist")
z=this.e
if(!(z==null))z.E(a)},function(){return this.aU(null)},"ic","$1","$0","gcN",0,2,1],
sb3:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
if(z!=null){z=z.gC()
z.toString
y=H.f(this.gcN(),{func:1,ret:-1,args:[D.t]})
C.a.O(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gC()
z.toString
y=H.f(this.gcN(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.Q("mover",x,this.a,this,[U.ac])
z.b=!0
this.aU(z)}},
$isaP:1,
$isdU:1},eD:{"^":"b;"}}],["","",,B,{"^":"",
n2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.r.fv(x,(x&&C.r).cQ(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.ab
W.a1(z,"scroll",H.f(new B.n3(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
n4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isd",[P.i],"$asd")
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
u=W.cO(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.e(v.insertCell(-1),"$isbG")
x=c.length>0
s=x?6:5
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.e(q.insertCell(-1),"$isbG").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;p<3;++p){o=z.createElement("div")
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.e(q.insertCell(-1),"$isbG")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.e(q.insertCell(-1),"$isbG")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.e(q.insertCell(-1),"$isbG").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.n2(a,y,!1,"../resources/SnowTop.png")},
n5:function(a){P.jl(C.G,new B.n6(a))},
iF:{"^":"b;a,0b",
c4:function(a,b,c,d){var z,y,x,w,v,u,t
H.f(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.dh().gbC().k(0,z)==null)if(d){c.$0()
this.e9(b)
y=!0}else y=!1
else if(P.dh().gbC().k(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.bU(this.b).h(0,w)
u=W.hG("radio")
u.checked=y
u.name=z
z=W.ab
W.a1(u,"change",H.f(new B.iG(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.bU(this.b).h(0,x.createElement("br"))},
Z:function(a,b,c){return this.c4(a,b,c,!1)},
e9:function(a){var z,y,x,w,v
z=P.dh()
y=P.i
x=P.hW(z.gbC(),y,y)
x.m(0,this.a,a)
w=z.e3(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.la([],[]).cF(""),"",v)},
q:{
ev:function(a){var z,y
z=new B.iF(a)
y=document.getElementById(a)
z.b=y
if(y==null)H.q("Failed to find "+z.j(0)+"._elemId for RadioGroup")
return z}}},
iG:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.e9(this.c)
this.d.$0()}}},
n3:{"^":"m:13;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.l(-0.05*C.e.ad(this.b.scrollTop))+"px"
z.top=y}},
n6:{"^":"m:48;a",
$1:function(a){H.e(a,"$isbh")
P.dH(C.e.e7(this.a.ghq(),2)+" fps")}},
j9:{"^":"b;0a,b",
Z:function(a,b,c){var z,y
z=W.eb(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=W.ae
W.a1(z,"click",H.f(new B.jb(this,z,b),{func:1,ret:-1,args:[y]}),!1,y)
J.bU(this.a).h(0,z)
J.bU(this.a).h(0,document.createElement("br"))
if(c)z.click()},
h:function(a,b){return this.Z(a,b,!1)}},
jb:{"^":"m:49;a,b,c",
$1:function(a){var z,y
H.e(a,"$isae")
z=this.a
y=J.bU(z.a)
y.I(y,new B.ja())
y=this.b.style
y.border="solid 2px black"
z.b.$1(this.c)}},
ja:{"^":"m:50;",
$1:function(a){var z
H.e(a,"$isV")
if(!!J.H(a).$iscT){z=a.style
z.border="solid 2px white"}}}}],["","",,K,{"^":"",
fO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z={}
B.n4("Test 037",H.h(["heightMaps","shapes","scalars"],[P.i]),"A test of applying a height map to an image. Some shapes will take a bit to calculate depending on quality of mapping.")
y=document
x=y.getElementById("threeDart")
if(x==null)H.q(P.v("Failed to find an element with the identifier, threeDart."))
w=E.jj(x,!0,!0,!0,!1)
v=new O.i7()
u=O.cP(V.av)
v.e=u
u.bd(v.geW(),v.geX())
u=new O.b7(v,"emission")
u.c=C.c
u.f=new V.a4(0,0,0)
v.f=u
u=new O.b7(v,"ambient")
u.c=C.c
u.f=new V.a4(0,0,0)
v.r=u
u=new O.b7(v,"diffuse")
u.c=C.c
u.f=new V.a4(0,0,0)
v.x=u
u=new O.b7(v,"invDiffuse")
u.c=C.c
u.f=new V.a4(0,0,0)
v.y=u
u=new O.ie(v,"specular")
u.c=C.c
u.f=new V.a4(0,0,0)
u.ch=100
v.z=u
u=new O.ib(v,"bump")
u.c=C.c
v.Q=u
v.ch=null
u=new O.b7(v,"reflect")
u.c=C.c
u.f=new V.a4(0,0,0)
v.cx=u
u=new O.id(v,"refract")
u.c=C.c
u.f=new V.a4(0,0,0)
u.ch=1
v.cy=u
u=new O.ia(v,"alpha")
u.c=C.c
u.f=1
v.db=u
u=new D.hP()
u.bM(D.a3)
u.e=H.h([],[D.cg])
u.f=H.h([],[D.it])
u.r=H.h([],[D.j_])
u.x=H.h([],[D.jf])
u.y=H.h([],[D.jg])
u.z=H.h([],[D.jh])
u.Q=null
u.ch=null
u.cJ(u.geV(),u.gff(),u.gfh())
v.dx=u
t=u.Q
if(t==null){t=D.O()
u.Q=t
u=t}else u=t
t={func:1,ret:-1,args:[D.t]}
s=H.f(v.gfq(),t)
C.a.h(u.a,s)
s=v.dx
u=s.ch
if(u==null){u=D.O()
s.ch=u}s=H.f(v.geZ(),t)
C.a.h(u.a,s)
v.dy=null
s=v.dx
u=U.dZ(V.en(new V.a_(0,0,0),new V.G(0,1,0),new V.G(1,1,-3)))
r=new V.a4(1,1,1)
q=new D.cg()
q.c=new V.a4(1,1,1)
q.a=new V.G(0,0,1)
p=q.b
q.b=u
u=u.gC()
u.toString
o=H.f(q.geu(),t)
C.a.h(u.a,o)
u=new D.Q("mover",p,q.b,q,[U.ac])
u.b=!0
q.aB(u)
if(!q.c.u(0,r)){p=q.c
q.c=r
u=new D.Q("color",p,r,q,[V.a4])
u.b=!0
q.aB(u)}s.h(0,q)
u=v.r
u.sal(0,new V.a4(0,0,1))
u=v.x
u.sal(0,new V.a4(0,1,0))
u=v.z
u.sal(0,new V.a4(1,0,0))
u=v.z
if(u.c===C.c){u.c=C.i
u.bL()
u.c1(100)
s=u.a
s.a=null
s.ag(null)}u.c1(10)
n=E.e7(null,!0,null,"",null,null)
n.se5(v)
m=E.e7(null,!0,null,"",null,null)
m.y.h(0,n)
u=new U.ea()
u.bM(U.ac)
u.bd(u.geU(),u.gfg())
u.e=null
u.f=V.c3()
u.r=0
s=w.r
q=new U.jN()
o=U.cQ()
o.scG(0,!0)
o.scs(6.283185307179586)
o.scu(0)
o.sW(0,0)
o.sct(100)
o.sT(0)
o.sci(0.5)
q.b=o
o=o.gC()
o.toString
l=H.f(q.gaC(),t)
C.a.h(o.a,l)
o=U.cQ()
o.scG(0,!0)
o.scs(6.283185307179586)
o.scu(0)
o.sW(0,0)
o.sct(100)
o.sT(0)
o.sci(0.5)
q.c=o
C.a.h(o.gC().a,l)
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
k=new X.aB(!1,!1,!1)
p=q.d
q.d=k
o=[X.aB]
l=new D.Q("modifiers",p,k,q,o)
l.b=!0
q.R(l)
l=q.f
if(l!==!1){q.f=!1
l=new D.Q("invertX",l,!1,q,[P.ah])
l.b=!0
q.R(l)}l=q.r
if(l!==!1){q.r=!1
l=new D.Q("invertY",l,!1,q,[P.ah])
l.b=!0
q.R(l)}q.aX(s)
u.h(0,q)
s=w.r
q=new U.jM()
l=U.cQ()
l.scG(0,!0)
l.scs(6.283185307179586)
l.scu(0)
l.sW(0,0)
l.sct(100)
l.sT(0)
l.sci(0.2)
q.b=l
l=l.gC()
l.toString
j=H.f(q.gaC(),t)
C.a.h(l.a,j)
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
k=new X.aB(!0,!1,!1)
p=q.c
q.c=k
l=new D.Q("modifiers",p,k,q,o)
l.b=!0
q.R(l)
q.aX(s)
u.h(0,q)
s=w.r
q=new U.jO()
q.c=0.01
q.d=0
q.e=0
k=new X.aB(!1,!1,!1)
q.b=k
o=new D.Q("modifiers",null,k,q,o)
o.b=!0
q.R(o)
q.aX(s)
u.h(0,q)
m.sb3(u)
u=new M.hv()
s=O.cP(E.aO)
u.d=s
s.bd(u.gf_(),u.gf0())
u.e=null
u.f=null
u.r=null
u.x=null
i=new X.ir()
i.b=1.0471975511965976
i.c=0.1
i.d=2000
i.sb3(null)
s=i.b
if(!$.r.$2(s,1.0471975511965976)){p=i.b
i.b=1.0471975511965976
s=new D.Q("fov",p,1.0471975511965976,i,[P.u])
s.b=!0
i.aU(s)}s=i.c
if(!$.r.$2(s,0.1)){p=i.c
i.c=0.1
s=new D.Q("near",p,0.1,i,[P.u])
s.b=!0
i.aU(s)}s=i.d
if(!$.r.$2(s,2000)){p=i.d
i.d=2000
s=new D.Q("far",p,2000,i,[P.u])
s.b=!0
i.aU(s)}s=u.a
if(s!==i){if(s!=null){s=s.gC()
s.toString
q=H.f(u.gaD(),t)
C.a.O(s.a,q)}p=u.a
u.a=i
s=i.gC()
s.toString
q=H.f(u.gaD(),t)
C.a.h(s.a,q)
s=new D.Q("camera",p,u.a,u,[X.dU])
s.b=!0
u.aT(s)}h=new X.hD()
s=new V.bX(0,0,0,1)
h.a=s
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
s=V.ex(0,0,1,1)
h.r=s
s=u.b
if(s!==h){if(s!=null){s=s.gC()
s.toString
q=H.f(u.gaD(),t)
C.a.O(s.a,q)}p=u.b
u.b=h
s=h.gC()
s.toString
q=H.f(u.gaD(),t)
C.a.h(s.a,q)
s=new D.Q("target",p,u.b,u,[X.eD])
s.b=!0
u.aT(s)}u.d.h(0,m)
u.a.sb3(U.dZ(V.aA(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
s=w.d
if(s!==u){if(s!=null){s=s.gC()
s.toString
q=H.f(w.gcM(),t)
C.a.O(s.a,q)}w.d=u
u=u.gC()
u.toString
t=H.f(w.gcM(),t)
C.a.h(u.a,t)
w.er()}z.a=null
z.b=""
z.c=1
g=new K.mF(z,w,n)
u=new B.j9(new K.mG(z,g))
u.a=y.getElementById("heightMaps")
u.Z(0,"../resources/HeightMap1.png",!0)
u.h(0,"../resources/HeightMap2.png")
u.h(0,"../resources/HeightMap3.png")
u.h(0,"../resources/ScrewHeightMap.png")
f=new K.mH(z,g)
u=B.ev("shapes")
u.Z(0,"Cuboid",new K.mP(f))
u.Z(0,"Cylinder",new K.mQ(f))
u.Z(0,"LatLonSphere",new K.mR(f))
u.Z(0,"Sphere",new K.mS(f))
u.Z(0,"Toroid",new K.mT(f))
u.Z(0,"Grid Small",new K.mU(f))
u.c4(0,"Grid Medium",new K.mV(f),!0)
u.Z(0,"Grid Large",new K.mW(f))
e=new K.mI(z,g)
z=B.ev("scalars")
z.Z(0,"0.1",new K.mJ(e))
z.Z(0,"0.2",new K.mK(e))
z.Z(0,"0.4",new K.mL(e))
z.c4(0,"0.6",new K.mM(e),!0)
z.Z(0,"0.8",new K.mN(e))
z.Z(0,"1.0",new K.mO(e))
B.n5(w)},
mF:{"^":"m:0;a,b,c",
$0:function(){var z,y,x,w
z=this.a
if(z.a!=null&&z.b.length!==0){y=this.b
x=y.f.hy(z.b)
w=x.y
y=H.f(new K.mE(z,y,x,this.c),{func:1,ret:-1,args:[D.t]})
C.a.h(w.a,y)}}},
mE:{"^":"m:11;a,b,c,d",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$ist")
z=this.b.f
y=this.c
x=y.r
w=y.x
z=z.a
z.bindFramebuffer(36160,z.createFramebuffer())
z.framebufferTexture2D(36160,36064,3553,y.b,0)
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.n(w)
v=new Uint8Array(x*w*4)
z.readPixels(0,0,x,w,6408,5121,v)
z.bindFramebuffer(36160,null)
z=this.a
y=z.a
u=F.d9()
u.bA(y)
u.a4()
u.h7(new T.je(v,x,w),z.c)
z=$.$get$ay()
z.toString
u.i9(new Z.aZ($.$get$dk().a&~z.a))
u.i7(!1)
u.a4()
this.d.scK(0,u)}},
mG:{"^":"m:22;a,b",
$1:function(a){this.a.b=a
this.b.$0()}},
mH:{"^":"m:51;a,b",
$1:function(a){this.a.a=a
this.b.$0()}},
mP:{"^":"m:0;a",
$0:function(){this.a.$1(F.fG(50,null,null,50))}},
mQ:{"^":"m:0;a",
$0:function(){this.a.$1(F.mf(1,!1,!1,80,80,1))}},
mR:{"^":"m:0;a",
$0:function(){this.a.$1(F.mB(80,80))}},
mS:{"^":"m:0;a",
$0:function(){this.a.$1(F.n7(50,null,50))}},
mT:{"^":"m:0;a",
$0:function(){this.a.$1(F.nc(50,1,50,0.5))}},
mU:{"^":"m:0;a",
$0:function(){this.a.$1(F.dC(50,null,50))}},
mV:{"^":"m:0;a",
$0:function(){this.a.$1(F.dC(100,null,100))}},
mW:{"^":"m:0;a",
$0:function(){this.a.$1(F.dC(150,null,150))}},
mI:{"^":"m:52;a,b",
$1:function(a){this.a.c=a
this.b.$0()}},
mJ:{"^":"m:0;a",
$0:function(){this.a.$1(0.1)}},
mK:{"^":"m:0;a",
$0:function(){this.a.$1(0.2)}},
mL:{"^":"m:0;a",
$0:function(){this.a.$1(0.4)}},
mM:{"^":"m:0;a",
$0:function(){this.a.$1(0.6)}},
mN:{"^":"m:0;a",
$0:function(){this.a.$1(0.8)}},
mO:{"^":"m:0;a",
$0:function(){this.a.$1(1)}}},1]]
setupProgram(dart,0,0)
J.H=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ef.prototype
return J.ee.prototype}if(typeof a=="string")return J.c1.prototype
if(a==null)return J.eg.prototype
if(typeof a=="boolean")return J.hK.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.aK=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.c8=function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.mp=function(a){if(typeof a=="number")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.mq=function(a){if(typeof a=="number")return J.c0.prototype
if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.dB=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.aU=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).u(a,b)}
J.fT=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mp(a).M(a,b)}
J.dI=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mq(a).i(a,b)}
J.dJ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fL(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aK(a).k(a,b)}
J.cG=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fL(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c8(a).m(a,b,c)}
J.fU=function(a,b){return J.dB(a).H(a,b)}
J.fV=function(a,b,c){return J.aU(a).fo(a,b,c)}
J.fW=function(a,b,c,d){return J.aU(a).de(a,b,c,d)}
J.fX=function(a,b){return J.dB(a).V(a,b)}
J.cH=function(a,b,c){return J.aK(a).hd(a,b,c)}
J.cI=function(a,b){return J.c8(a).K(a,b)}
J.fY=function(a,b,c,d){return J.c8(a).aw(a,b,c,d)}
J.dK=function(a,b){return J.c8(a).I(a,b)}
J.bU=function(a){return J.aU(a).gcd(a)}
J.b2=function(a){return J.H(a).gS(a)}
J.bt=function(a){return J.c8(a).ga_(a)}
J.as=function(a){return J.aK(a).gl(a)}
J.fZ=function(a,b){return J.aU(a).hW(a,b)}
J.h_=function(a,b){return J.aU(a).sa1(a,b)}
J.aa=function(a){return J.H(a).j(a)}
I.aq=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cN.prototype
C.r=W.hi.prototype
C.H=J.p.prototype
C.a=J.b6.prototype
C.I=J.ee.prototype
C.d=J.ef.prototype
C.t=J.eg.prototype
C.e=J.c0.prototype
C.b=J.c1.prototype
C.P=J.c2.prototype
C.U=H.d5.prototype
C.V=W.im.prototype
C.z=J.is.prototype
C.W=P.d7.prototype
C.q=J.c6.prototype
C.A=W.bK.prototype
C.B=W.ka.prototype
C.D=new P.h4(!1)
C.C=new P.h3(C.D)
C.E=new P.iq()
C.F=new P.jW()
C.j=new P.kX()
C.c=new A.ce(0,"ColorSourceType.None")
C.i=new A.ce(1,"ColorSourceType.Solid")
C.f=new A.ce(2,"ColorSourceType.Texture2D")
C.h=new A.ce(3,"ColorSourceType.TextureCube")
C.G=new P.bw(5e6)
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
C.w=H.h(I.aq([127,2047,65535,1114111]),[P.o])
C.m=H.h(I.aq([0,0,32776,33792,1,10240,0,0]),[P.o])
C.n=H.h(I.aq([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.o=H.h(I.aq([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.R=H.h(I.aq([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.p=H.h(I.aq([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.x=H.h(I.aq([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.S=H.h(I.aq([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.y=H.h(I.aq([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.Q=H.h(I.aq([]),[P.i])
C.T=new H.hh(0,{},C.Q,[P.i,P.i])
C.l=new P.jP(!1)
$.az=0
$.bu=null
$.dP=null
$.du=!1
$.fJ=null
$.fC=null
$.fR=null
$.cB=null
$.cE=null
$.dD=null
$.bm=null
$.bQ=null
$.bR=null
$.dv=!1
$.U=C.j
$.e4=null
$.e3=null
$.e2=null
$.e1=null
$.r=V.ig()
$.es=null
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
I.$lazy(y,x,w)}})(["e0","$get$e0",function(){return H.fI("_$dart_dartClosure")},"cW","$get$cW",function(){return H.fI("_$dart_js")},"eI","$get$eI",function(){return H.aC(H.cu({
toString:function(){return"$receiver$"}}))},"eJ","$get$eJ",function(){return H.aC(H.cu({$method$:null,
toString:function(){return"$receiver$"}}))},"eK","$get$eK",function(){return H.aC(H.cu(null))},"eL","$get$eL",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eP","$get$eP",function(){return H.aC(H.cu(void 0))},"eQ","$get$eQ",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eN","$get$eN",function(){return H.aC(H.eO(null))},"eM","$get$eM",function(){return H.aC(function(){try{null.$method$}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.aC(H.eO(void 0))},"eR","$get$eR",function(){return H.aC(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dn","$get$dn",function(){return P.kb()},"bS","$get$bS",function(){return[]},"f2","$get$f2",function(){return P.jT()},"f6","$get$f6",function(){return H.ik(H.bl(H.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))},"fs","$get$fs",function(){return P.iL("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fy","$get$fy",function(){return P.lW()},"e_","$get$e_",function(){return{}},"f3","$get$f3",function(){return Z.ao(0)},"dk","$get$dk",function(){return Z.ao(511)},"aF","$get$aF",function(){return Z.ao(1)},"ay","$get$ay",function(){return Z.ao(2)},"aE","$get$aE",function(){return Z.ao(4)},"aG","$get$aG",function(){return Z.ao(8)},"aH","$get$aH",function(){return Z.ao(16)},"bI","$get$bI",function(){return Z.ao(32)},"bJ","$get$bJ",function(){return Z.ao(64)},"dl","$get$dl",function(){return Z.ao(96)},"b_","$get$b_",function(){return Z.ao(128)},"aD","$get$aD",function(){return Z.ao(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:P.E,args:[F.an,P.u,P.u]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.E,args:[F.au]},{func:1,ret:P.E,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.o,[P.k,E.aO]]},{func:1,ret:P.E,args:[D.t]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:P.E,args:[W.ab]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:-1,args:[P.o,[P.k,V.av]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.k,U.ac]]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.o,[P.k,D.a3]]},{func:1,ret:P.E,args:[P.i]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.u},{func:1,ret:P.i,args:[P.o]},{func:1,ret:P.ah,args:[W.J]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[P.b],opt:[P.aw]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.E,args:[P.X]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.P,args:[P.o]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:P.ah,args:[P.u,P.u]},{func:1,ret:P.ah,args:[[P.k,D.a3]]},{func:1,ret:P.E,args:[P.i,,]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.o,args:[[P.d,P.o],P.o]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:-1,args:[P.i,P.o]},{func:1,ret:V.a_,args:[P.u]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:[P.I,P.i,P.i],args:[[P.I,P.i,P.i],P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.E,args:[P.bh]},{func:1,ret:P.E,args:[W.ae]},{func:1,ret:P.E,args:[W.V]},{func:1,ret:P.E,args:[F.ct]},{func:1,ret:P.E,args:[P.u]},{func:1,args:[P.i]},{func:1,ret:W.V,args:[W.J]}]
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
if(x==y)H.nb(d||a)
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
Isolate.aq=a.aq
Isolate.dz=a.dz
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
if(typeof dartMainRunner==="function")dartMainRunner(K.fO,[])
else K.fO([])})})()
//# sourceMappingURL=test.dart.js.map
