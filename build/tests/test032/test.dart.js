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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isu)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.e_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.e_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.e_(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.e0=function(){}
var dart=[["","",,H,{"^":"",p6:{"^":"b;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
e3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ct:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e1==null){H.nT()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.co("Return interceptor for "+H.m(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dq()]
if(v!=null)return v
v=H.nW(a)
if(v!=null)return v
if(typeof a=="function")return C.Q
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$dq(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
u:{"^":"b;",
B:function(a,b){return a===b},
gY:function(a){return H.c_(a)},
j:["fc",function(a){return"Instance of '"+H.bs(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
j9:{"^":"u;",
j:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isL:1},
eI:{"^":"u;",
B:function(a,b){return null==b},
j:function(a){return"null"},
gY:function(a){return 0},
$isy:1},
dr:{"^":"u;",
gY:function(a){return 0},
j:["fd",function(a){return String(a)}]},
jP:{"^":"dr;"},
cS:{"^":"dr;"},
bU:{"^":"dr;",
j:function(a){var z=a[$.$get$ep()]
if(z==null)return this.fd(a)
return"JavaScript function for "+H.m(J.as(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isdm:1},
bc:{"^":"u;$ti",
h:function(a,b){H.x(b,H.t(a,0))
if(!!a.fixed$length)H.p(P.z("add"))
a.push(b)},
a1:function(a,b){var z
if(!!a.fixed$length)H.p(P.z("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
v:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.bl(a))}},
G:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.n(z,y,H.m(a[y]))
return z.join(b)},
iR:function(a){return this.G(a,"")},
iK:function(a,b,c,d){var z,y,x
H.x(b,d)
H.j(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.bl(a))}return y},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
cd:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a5(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a5(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.t(a,0)])
return H.f(a.slice(b,c),[H.t(a,0)])},
gaM:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.j6())},
f9:function(a,b,c,d,e){var z,y,x,w
z=H.t(a,0)
H.v(d,"$isn",[z],"$asn")
if(!!a.immutable$list)H.p(P.z("setRange"))
P.aY(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.C()
if(typeof b!=="number")return H.l(b)
y=c-b
if(y===0)return
H.v(d,"$ise",[z],"$ase")
z=J.aB(d)
x=z.gk(d)
if(typeof x!=="number")return H.l(x)
if(e+y>x)throw H.a(H.j7())
if(e<b)for(w=y-1;w>=0;--w)a[b+w]=z.i(d,e+w)
else for(w=0;w<y;++w)a[b+w]=z.i(d,e+w)},
by:function(a,b,c,d){return this.f9(a,b,c,d,0)},
aL:function(a,b,c,d){var z
H.x(d,H.t(a,0))
if(!!a.immutable$list)H.p(P.z("fill range"))
P.aY(b,c,a.length,null,null,null)
for(z=b;z.D(0,c);z=z.m(0,1))a[z]=d},
aq:function(a,b,c){var z
if(c>=a.length)return-1
for(z=c;z<a.length;++z)if(J.R(a[z],b))return z
return-1},
O:function(a,b){return this.aq(a,b,0)},
b1:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
j:function(a){return P.dn(a,"[","]")},
ga4:function(a){return new J.ay(a,a.length,0,[H.t(a,0)])},
gY:function(a){return H.c_(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cy(b,"newLength",null))
if(b<0)throw H.a(P.a5(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aT(a,b))
if(b>=a.length||b<0)throw H.a(H.aT(a,b))
return a[b]},
n:function(a,b,c){H.D(b)
H.x(c,H.t(a,0))
if(!!a.immutable$list)H.p(P.z("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aT(a,b))
if(b>=a.length||b<0)throw H.a(H.aT(a,b))
a[b]=c},
m:function(a,b){var z,y
z=[H.t(a,0)]
H.v(b,"$ise",z,"$ase")
y=C.d.m(a.length,b.gk(b))
z=H.f([],z)
this.sk(z,y)
this.by(z,0,a.length,a)
this.by(z,a.length,y,b)
return z},
$isn:1,
$ise:1,
q:{
j8:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cy(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a5(a,0,4294967295,"length",null))
return J.eF(new Array(a),b)},
eF:function(a,b){return J.bT(H.f(a,[b]))},
bT:function(a){H.c7(a)
a.fixed$length=Array
return a}}},
p5:{"^":"bc;$ti"},
ay:{"^":"b;a,b,c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.F(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ce:{"^":"u;",
jx:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.z(""+a+".toInt()"))},
c3:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.z(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.z(""+a+".round()"))},
eZ:function(a,b){var z,y
if(b>20)throw H.a(P.a5(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bs:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.z("Unexpected toString result: "+z))
x=J.aB(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.l("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
m:function(a,b){if(typeof b!=="number")throw H.a(H.ag(b))
return a+b},
bv:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ff:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dY(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.dY(a,b)},
dY:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.z("Result of truncating division is "+H.m(z)+": "+H.m(a)+" ~/ "+b))},
aX:function(a,b){var z
if(a>0)z=this.dW(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hL:function(a,b){if(b<0)throw H.a(H.ag(b))
return this.dW(a,b)},
dW:function(a,b){return b>31?0:a>>>b},
D:function(a,b){if(typeof b!=="number")throw H.a(H.ag(b))
return a<b},
aO:function(a,b){if(typeof b!=="number")throw H.a(H.ag(b))
return a>=b},
$isC:1,
$isab:1},
eH:{"^":"ce;",$iso:1},
eG:{"^":"ce;"},
cf:{"^":"u;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aT(a,b))
if(b<0)throw H.a(H.aT(a,b))
if(b>=a.length)H.p(H.aT(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aT(a,b))
return a.charCodeAt(b)},
m:function(a,b){H.K(b)
if(typeof b!=="string")throw H.a(P.cy(b,null,null))
return a+b},
b6:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ag(b))
c=P.aY(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ag(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ah:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ag(c))
if(typeof c!=="number")return c.D()
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ag:function(a,b){return this.ah(a,b,0)},
u:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ag(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.D()
if(b<0)throw H.a(P.cO(b,null,null))
if(b>c)throw H.a(P.cO(b,null,null))
if(c>a.length)throw H.a(P.cO(c,null,null))
return a.substring(b,c)},
au:function(a,b){return this.u(a,b,null)},
dd:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.I(z,0)===133){x=J.ja(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.X(z,w)===133?J.jb(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
j7:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
al:function(a,b){return this.j7(a,b," ")},
j8:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.l(c,z)},
aq:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
O:function(a,b){return this.aq(a,b,0)},
iT:function(a,b,c){var z
c=a.length
z=b.length
if(c+z>c)c-=z
return a.lastIndexOf(b,c)},
iS:function(a,b){return this.iT(a,b,null)},
iw:function(a,b,c){if(c>a.length)throw H.a(P.a5(c,0,a.length,null,null))
return H.hI(a,b,c)},
j:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.a(H.aT(a,b))
return a[b]},
$isf0:1,
$isi:1,
q:{
eJ:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ja:function(a,b){var z,y
for(z=a.length;b<z;){y=C.b.I(a,b)
if(y!==32&&y!==13&&!J.eJ(y))break;++b}return b},
jb:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.b.X(a,z)
if(y!==32&&y!==13&&!J.eJ(y))break}return b}}}}],["","",,H,{"^":"",
d1:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
j6:function(){return new P.dF("No element")},
j7:function(){return new P.dF("Too few elements")},
ah:{"^":"kX;a",
gk:function(a){return this.a.length},
i:function(a,b){return C.b.X(this.a,b)},
$ascT:function(){return[P.o]},
$asw:function(){return[P.o]},
$asn:function(){return[P.o]},
$ase:function(){return[P.o]}},
ip:{"^":"n;"},
eR:{"^":"b;a,b,c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.aB(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.bl(z))
w=this.c
if(typeof x!=="number")return H.l(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
jv:{"^":"n;a,b,$ti",
ga4:function(a){return new H.jw(J.bP(this.a),this.b,this.$ti)},
gk:function(a){return J.ar(this.a)},
K:function(a,b){return this.b.$1(J.d7(this.a,b))},
$asn:function(a,b){return[b]}},
jw:{"^":"dp;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gT(z))
return!0}this.a=null
return!1},
gT:function(a){return this.a},
$asdp:function(a,b){return[b]}},
lp:{"^":"n;a,b,$ti",
ga4:function(a){return new H.lq(J.bP(this.a),this.b,this.$ti)}},
lq:{"^":"dp;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gT(z)))return!0
return!1},
gT:function(a){var z=this.a
return z.gT(z)}},
cE:{"^":"b;$ti"},
cT:{"^":"b;$ti",
n:function(a,b,c){H.D(b)
H.x(c,H.aC(this,"cT",0))
throw H.a(P.z("Cannot modify an unmodifiable list"))},
aL:function(a,b,c,d){H.x(d,H.aC(this,"cT",0))
throw H.a(P.z("Cannot modify an unmodifiable list"))}},
kX:{"^":"cI+cT;"}}],["","",,H,{"^":"",
ib:function(){throw H.a(P.z("Cannot modify unmodifiable Map"))},
nO:function(a){return init.types[H.D(a)]},
hB:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isH},
m:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.as(a)
if(typeof z!=="string")throw H.a(H.ag(a))
return z},
c_:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
k_:function(a,b){var z,y,x,w,v,u
if(typeof a!=="string")H.p(H.ag(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.c(z,3)
y=H.K(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a5(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
jZ:function(a){var z,y
if(typeof a!=="string")H.p(H.ag(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.d9(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bs:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.I||!!J.M(a).$iscS){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.au(w,1)
r=H.e2(H.c7(H.bh(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jR:function(){if(!!self.location)return self.location.href
return},
f2:function(a){var z,y,x,w,v
H.c7(a)
z=J.ar(a)
if(typeof z!=="number")return z.f7()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
k0:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.F)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ag(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aX(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ag(w))}return H.f2(z)},
f3:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ag(x))
if(x<0)throw H.a(H.ag(x))
if(x>65535)return H.k0(a)}return H.f2(a)},
k1:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.f7()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cM:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aX(z,10))>>>0,56320|z&1023)}}throw H.a(P.a5(a,0,1114111,null,null))},
aw:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jY:function(a){return a.b?H.aw(a).getUTCFullYear()+0:H.aw(a).getFullYear()+0},
jW:function(a){return a.b?H.aw(a).getUTCMonth()+1:H.aw(a).getMonth()+1},
jS:function(a){return a.b?H.aw(a).getUTCDate()+0:H.aw(a).getDate()+0},
jT:function(a){return a.b?H.aw(a).getUTCHours()+0:H.aw(a).getHours()+0},
jV:function(a){return a.b?H.aw(a).getUTCMinutes()+0:H.aw(a).getMinutes()+0},
jX:function(a){return a.b?H.aw(a).getUTCSeconds()+0:H.aw(a).getSeconds()+0},
jU:function(a){return a.b?H.aw(a).getUTCMilliseconds()+0:H.aw(a).getMilliseconds()+0},
l:function(a){throw H.a(H.ag(a))},
c:function(a,b){if(a==null)J.ar(a)
throw H.a(H.aT(a,b))},
aT:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b3(!0,b,"index",null)
z=H.D(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.l(z)
y=b>=z}else y=!0
if(y)return P.Y(b,a,"index",null,z)
return P.cO(b,"index",null)},
nI:function(a,b,c){if(a>c)return new P.cN(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cN(a,c,!0,b,"end","Invalid value")
return new P.b3(!0,b,"end",null)},
ag:function(a){return new P.b3(!0,a,null,null)},
bK:function(a){if(typeof a!=="number")throw H.a(H.ag(a))
return a},
a:function(a){var z
if(a==null)a=new P.dA()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hK})
z.name=""}else z.toString=H.hK
return z},
hK:function(){return J.as(this.dartException)},
p:function(a){throw H.a(a)},
F:function(a){throw H.a(P.bl(a))},
ac:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.oD(a)
if(a==null)return
if(a instanceof H.dl)return z.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aX(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ds(H.m(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.f_(H.m(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fo()
u=$.$get$fp()
t=$.$get$fq()
s=$.$get$fr()
r=$.$get$fv()
q=$.$get$fw()
p=$.$get$ft()
$.$get$fs()
o=$.$get$fy()
n=$.$get$fx()
m=v.ak(y)
if(m!=null)return z.$1(H.ds(H.K(y),m))
else{m=u.ak(y)
if(m!=null){m.method="call"
return z.$1(H.ds(H.K(y),m))}else{m=t.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=r.ak(y)
if(m==null){m=q.ak(y)
if(m==null){m=p.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=o.ak(y)
if(m==null){m=n.ak(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.f_(H.K(y),m))}}return z.$1(new H.kW(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f9()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.b3(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f9()
return a},
bi:function(a){var z
if(a instanceof H.dl)return a.b
if(a==null)return new H.h3(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h3(a)},
nM:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.n(0,a[y],a[x])}return b},
nV:function(a,b,c,d,e,f){H.d(a,"$isdm")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.q("Unsupported number of arguments for wrapped closure"))},
bL:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nV)
a.$identity=z
return z},
i6:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$ise){z.$reflectionInfo=d
x=H.k6(z).r}else x=d
w=e?Object.create(new H.kr().constructor.prototype):Object.create(new H.dc(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aU
if(typeof u!=="number")return u.m()
$.aU=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.el(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nO,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ee:H.dd
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.el(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i3:function(a,b,c,d){var z=H.dd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
el:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i5(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i3(y,!w,z,b)
if(y===0){w=$.aU
if(typeof w!=="number")return w.m()
$.aU=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bQ
if(v==null){v=H.cz("self")
$.bQ=v}return new Function(w+H.m(v)+";return "+u+"."+H.m(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aU
if(typeof w!=="number")return w.m()
$.aU=w+1
t+=w
w="return function("+t+"){return this."
v=$.bQ
if(v==null){v=H.cz("self")
$.bQ=v}return new Function(w+H.m(v)+"."+H.m(z)+"("+t+");}")()},
i4:function(a,b,c,d){var z,y
z=H.dd
y=H.ee
switch(b?-1:a){case 0:throw H.a(H.kf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i5:function(a,b){var z,y,x,w,v,u,t,s
z=$.bQ
if(z==null){z=H.cz("self")
$.bQ=z}y=$.ed
if(y==null){y=H.cz("receiver")
$.ed=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i4(w,!u,x,b)
if(w===1){z="return function(){return this."+H.m(z)+"."+H.m(x)+"(this."+H.m(y)+");"
y=$.aU
if(typeof y!=="number")return y.m()
$.aU=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.m(z)+"."+H.m(x)+"(this."+H.m(y)+", "+s+");"
y=$.aU
if(typeof y!=="number")return y.m()
$.aU=y+1
return new Function(z+y+"}")()},
e_:function(a,b,c,d,e,f,g){var z,y
z=J.bT(H.c7(b))
H.D(c)
y=!!J.M(d).$ise?J.bT(d):d
return H.i6(a,z,c,y,!!e,f,g)},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aS(a,"String"))},
nJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aS(a,"double"))},
ox:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aS(a,"num"))},
hu:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aS(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aS(a,"int"))},
hG:function(a,b){throw H.a(H.aS(a,H.K(b).substring(3)))},
oz:function(a,b){var z=J.aB(b)
throw H.a(H.i0(a,z.u(b,3,z.gk(b))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.hG(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.oz(a,b)},
c7:function(a){if(a==null)return a
if(!!J.M(a).$ise)return a
throw H.a(H.aS(a,"List"))},
hD:function(a,b){if(a==null)return a
if(!!J.M(a).$ise)return a
if(J.M(a)[b])return a
H.hG(a,b)},
hv:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
cq:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hv(J.M(a))
if(z==null)return!1
y=H.hA(z,null,b,null)
return y},
j:function(a,b){var z,y
if(a==null)return a
if($.dW)return a
$.dW=!0
try{if(H.cq(a,b))return a
z=H.cv(b)
y=H.aS(a,z)
throw H.a(y)}finally{$.dW=!1}},
bN:function(a,b){if(a!=null&&!H.dZ(a,b))H.p(H.aS(a,H.cv(b)))
return a},
hp:function(a){var z
if(a instanceof H.h){z=H.hv(J.M(a))
if(z!=null)return H.cv(z)
return"Closure"}return H.bs(a)},
oC:function(a){throw H.a(new P.ig(H.K(a)))},
hx:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
bh:function(a){if(a==null)return
return a.$ti},
q4:function(a,b,c){return H.bO(a["$as"+H.m(c)],H.bh(b))},
ba:function(a,b,c,d){var z
H.K(c)
H.D(d)
z=H.bO(a["$as"+H.m(c)],H.bh(b))
return z==null?null:z[d]},
aC:function(a,b,c){var z
H.K(b)
H.D(c)
z=H.bO(a["$as"+H.m(b)],H.bh(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.D(b)
z=H.bh(a)
return z==null?null:z[b]},
cv:function(a){var z=H.bk(a,null)
return z},
bk:function(a,b){var z,y
H.v(b,"$ise",[P.i],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.e2(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.c(b,y)
return H.m(b[y])}if('func' in a)return H.nr(a,b)
if('futureOr' in a)return"FutureOr<"+H.bk("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.v(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.c(b,r)
t=C.b.m(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bk(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bk(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bk(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bk(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nL(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.K(z[l])
n=n+m+H.bk(i[h],b)+(" "+H.m(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
e2:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$ise",[P.i],"$ase")
if(a==null)return""
z=new P.aG("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bk(u,c)}v="<"+z.j(0)+">"
return v},
bO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b7:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bh(a)
y=J.M(a)
if(y[b]==null)return!1
return H.hs(H.bO(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.K(b)
H.c7(c)
H.K(d)
if(a==null)return a
z=H.b7(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.e2(c,0,null)
throw H.a(H.aS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hs:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aO(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aO(a[y],b,c[y],d))return!1
return!0},
q2:function(a,b,c){return a.apply(b,H.bO(J.M(b)["$as"+H.m(c)],H.bh(b)))},
hC:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="y"||a===-1||a===-2||H.hC(z)}return!1},
dZ:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="y"||b===-1||b===-2||H.hC(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dZ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cq(a,b)}y=J.M(a).constructor
x=H.bh(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aO(y,null,b,null)
return z},
x:function(a,b){if(a!=null&&!H.dZ(a,b))throw H.a(H.aS(a,H.cv(b)))
return a},
aO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="y")return!0
if('func' in c)return H.hA(a,b,c,d)
if('func' in a)return c.builtin$cls==="dm"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aO("type" in a?a.type:null,b,x,d)
else if(H.aO(a,b,x,d))return!0
else{if(!('$is'+"ae" in y.prototype))return!1
w=y.prototype["$as"+"ae"]
v=H.bO(w,z?a.slice(1):null)
return H.aO(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cv(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hs(H.bO(r,z),b,u,d)},
hA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aO(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aO(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aO(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aO(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ow(m,b,l,d)},
ow:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aO(c[w],d,a[w],b))return!1}return!0},
q3:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
nW:function(a){var z,y,x,w,v,u
z=H.K($.hz.$1(a))
y=$.d0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.K($.hr.$2(a,z))
if(z!=null){y=$.d0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d2[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d3(x)
$.d0[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d2[z]=x
return x}if(v==="-"){u=H.d3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hF(a,x)
if(v==="*")throw H.a(P.co(z))
if(init.leafTags[z]===true){u=H.d3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hF(a,x)},
hF:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e3(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d3:function(a){return J.e3(a,!1,null,!!a.$isH)},
ov:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d3(z)
else return J.e3(z,c,null,null)},
nT:function(){if(!0===$.e1)return
$.e1=!0
H.nU()},
nU:function(){var z,y,x,w,v,u,t,s
$.d0=Object.create(null)
$.d2=Object.create(null)
H.nP()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hH.$1(v)
if(u!=null){t=H.ov(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nP:function(){var z,y,x,w,v,u,t
z=C.N()
z=H.bJ(C.K,H.bJ(C.P,H.bJ(C.u,H.bJ(C.u,H.bJ(C.O,H.bJ(C.L,H.bJ(C.M(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hz=new H.nQ(v)
$.hr=new H.nR(u)
$.hH=new H.nS(t)},
bJ:function(a,b){return a(b)||b},
hI:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hJ:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ia:{"^":"b;$ti",
j:function(a){return P.dt(this)},
n:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
return H.ib()},
$isJ:1},
ic:{"^":"ia;a,b,c,$ti",
gk:function(a){return this.a},
bN:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bN(0,b))return
return this.dJ(b)},
dJ:function(a){return this.b[H.K(a)]},
v:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.j(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dJ(v),z))}}},
k5:{"^":"b;a,b,c,d,e,f,r,0x",q:{
k6:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bT(z)
y=z[0]
x=z[1]
return new H.k5(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kK:{"^":"b;a,b,c,d,e,f",
ak:function(a){var z,y,x
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
aZ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fu:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jL:{"^":"aj;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.m(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
f_:function(a,b){return new H.jL(a,b==null?null:b.method)}}},
je:{"^":"aj;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.m(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.m(this.a)+")"},
q:{
ds:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.je(a,y,z?null:b.receiver)}}},
kW:{"^":"aj;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
dl:{"^":"b;a,b"},
oD:{"^":"h:20;a",
$1:function(a){if(!!J.M(a).$isaj)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h3:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isat:1},
h:{"^":"b;",
j:function(a){return"Closure '"+H.bs(this).trim()+"'"},
gf4:function(){return this},
$isdm:1,
gf4:function(){return this}},
ff:{"^":"h;"},
kr:{"^":"ff;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
dc:{"^":"ff;a,b,c,d",
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.c_(this.a)
else y=typeof z!=="object"?J.c8(z):H.c_(z)
return(y^H.c_(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.bs(z)+"'")},
q:{
dd:function(a){return a.a},
ee:function(a){return a.c},
cz:function(a){var z,y,x,w,v
z=new H.dc("self","target","receiver","name")
y=J.bT(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kL:{"^":"aj;a",
j:function(a){return this.a},
q:{
aS:function(a,b){return new H.kL("TypeError: "+H.m(P.cD(a))+": type '"+H.hp(a)+"' is not a subtype of type '"+b+"'")}}},
i_:{"^":"aj;a",
j:function(a){return this.a},
q:{
i0:function(a,b){return new H.i_("CastError: "+H.m(P.cD(a))+": type '"+H.hp(a)+"' is not a subtype of type '"+b+"'")}}},
ke:{"^":"aj;a",
j:function(a){return"RuntimeError: "+H.m(this.a)},
q:{
kf:function(a){return new H.ke(a)}}},
aQ:{"^":"js;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gaA:function(a){return new H.ji(this,[H.t(this,0)])},
bN:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dG(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dG(y,b)}else return this.iO(b)},
iO:function(a){var z=this.d
if(z==null)return!1
return this.d1(this.cp(z,this.d0(a)),a)>=0},
il:function(a,b){J.d8(H.v(b,"$isJ",this.$ti,"$asJ"),new H.jd(this))},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bA(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bA(w,b)
x=y==null?null:y.b
return x}else return this.iP(b)},
iP:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cp(z,this.d0(a))
x=this.d1(y,a)
if(x<0)return
return y[x].b},
n:function(a,b,c){var z,y
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cu()
this.b=z}this.dv(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cu()
this.c=y}this.dv(y,b,c)}else this.iQ(b,c)},
iQ:function(a,b){var z,y,x,w
H.x(a,H.t(this,0))
H.x(b,H.t(this,1))
z=this.d
if(z==null){z=this.cu()
this.d=z}y=this.d0(a)
x=this.cp(z,y)
if(x==null)this.cE(z,y,[this.cv(a,b)])
else{w=this.d1(x,a)
if(w>=0)x[w].b=b
else x.push(this.cv(a,b))}},
v:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.bl(this))
z=z.c}},
dv:function(a,b,c){var z
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
z=this.bA(a,b)
if(z==null)this.cE(a,b,this.cv(b,c))
else z.b=c},
h_:function(){this.r=this.r+1&67108863},
cv:function(a,b){var z,y
z=new H.jh(H.x(a,H.t(this,0)),H.x(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.h_()
return z},
d0:function(a){return J.c8(a)&0x3ffffff},
d1:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
j:function(a){return P.dt(this)},
bA:function(a,b){return a[b]},
cp:function(a,b){return a[b]},
cE:function(a,b,c){a[b]=c},
fN:function(a,b){delete a[b]},
dG:function(a,b){return this.bA(a,b)!=null},
cu:function(){var z=Object.create(null)
this.cE(z,"<non-identifier-key>",z)
this.fN(z,"<non-identifier-key>")
return z},
$iseO:1},
jd:{"^":"h;a",
$2:function(a,b){var z=this.a
z.n(0,H.x(a,H.t(z,0)),H.x(b,H.t(z,1)))},
$S:function(){var z=this.a
return{func:1,ret:P.y,args:[H.t(z,0),H.t(z,1)]}}},
jh:{"^":"b;a,b,0c,0d"},
ji:{"^":"ip;a,$ti",
gk:function(a){return this.a.a},
ga4:function(a){var z,y
z=this.a
y=new H.jj(z,z.r,this.$ti)
y.c=z.e
return y}},
jj:{"^":"b;a,b,0c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.bl(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nQ:{"^":"h:20;a",
$1:function(a){return this.a(a)}},
nR:{"^":"h:30;a",
$2:function(a,b){return this.a(a,b)}},
nS:{"^":"h:34;a",
$1:function(a){return this.a(H.K(a))}},
jc:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
gh4:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.eK(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
iI:function(a){var z=this.b.exec(a)
if(z==null)return
return new H.fX(this,z)},
fQ:function(a,b){var z,y
z=this.gh4()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.fX(this,y)},
$isf0:1,
$isk7:1,
q:{
eK:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a_("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
fX:{"^":"b;a,b",
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]}},
ls:{"^":"b;a,b,c,0d",
gT:function(a){return this.d},
H:function(){var z,y,x,w
z=this.b
if(z==null)return!1
y=this.c
if(y<=z.length){x=this.a.fQ(z,y)
if(x!=null){this.d=x
z=x.b
y=z.index
w=y+z[0].length
this.c=y===w?w+1:w
return!0}}this.d=null
this.b=null
return!1}}}],["","",,H,{"^":"",
nL:function(a){return J.eF(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
oy:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bG:function(a){return a},
jI:function(a){return new Int8Array(a)},
b2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aT(b,a))},
nl:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nI(a,b,c))
return b},
eZ:{"^":"u;",$iseZ:1,"%":"ArrayBuffer"},
dy:{"^":"u;",$isdy:1,$iskM:1,"%":"DataView;ArrayBufferView;dx|fY|fZ|jJ|h_|h0|be"},
dx:{"^":"dy;",
gk:function(a){return a.length},
$isH:1,
$asH:I.e0},
jJ:{"^":"fZ;",
i:function(a,b){H.b2(b,a,a.length)
return a[b]},
n:function(a,b,c){H.D(b)
H.nJ(c)
H.b2(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.C]},
$asw:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]},
$ise:1,
$ase:function(){return[P.C]},
"%":"Float32Array|Float64Array"},
be:{"^":"h0;",
n:function(a,b,c){H.D(b)
H.D(c)
H.b2(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.o]},
$asw:function(){return[P.o]},
$isn:1,
$asn:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]}},
pg:{"^":"be;",
i:function(a,b){H.b2(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ph:{"^":"be;",
i:function(a,b){H.b2(b,a,a.length)
return a[b]},
"%":"Int32Array"},
pi:{"^":"be;",
i:function(a,b){H.b2(b,a,a.length)
return a[b]},
"%":"Int8Array"},
pj:{"^":"be;",
i:function(a,b){H.b2(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
pk:{"^":"be;",
i:function(a,b){H.b2(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
pl:{"^":"be;",
gk:function(a){return a.length},
i:function(a,b){H.b2(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dz:{"^":"be;",
gk:function(a){return a.length},
i:function(a,b){H.b2(b,a,a.length)
return a[b]},
cd:function(a,b,c){return new Uint8Array(a.subarray(b,H.nl(b,c,a.length)))},
$isdz:1,
$isV:1,
"%":";Uint8Array"},
fY:{"^":"dx+w;"},
fZ:{"^":"fY+cE;"},
h_:{"^":"dx+w;"},
h0:{"^":"h_+cE;"}}],["","",,P,{"^":"",
lw:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nB()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bL(new P.ly(z),1)).observe(y,{childList:true})
return new P.lx(z,y,x)}else if(self.setImmediate!=null)return P.nC()
return P.nD()},
pS:[function(a){self.scheduleImmediate(H.bL(new P.lz(H.j(a,{func:1,ret:-1})),0))},"$1","nB",4,0,15],
pT:[function(a){self.setImmediate(H.bL(new P.lA(H.j(a,{func:1,ret:-1})),0))},"$1","nC",4,0,15],
pU:[function(a){P.dJ(C.q,H.j(a,{func:1,ret:-1}))},"$1","nD",4,0,15],
dJ:function(a,b){var z
H.j(b,{func:1,ret:-1})
z=C.d.a8(a.a,1000)
return P.mD(z<0?0:z,b)},
fj:function(a,b){var z
H.j(b,{func:1,ret:-1,args:[P.bz]})
z=C.d.a8(a.a,1000)
return P.mE(z<0?0:z,b)},
a9:function(a){return new P.fP(new P.mA(new P.ax(0,$.Q,[a]),[a]),!1,[a])},
a8:function(a,b){H.j(a,{func:1,ret:-1,args:[P.o,,]})
H.d(b,"$isfP")
a.$2(0,null)
b.b=!0
return b.a.a},
am:function(a,b){P.ni(a,H.j(b,{func:1,ret:-1,args:[P.o,,]}))},
a7:function(a,b){H.d(b,"$isdj").aH(0,a)},
a6:function(a,b){H.d(b,"$isdj").bg(H.ac(a),H.bi(a))},
ni:function(a,b){var z,y,x,w,v
H.j(b,{func:1,ret:-1,args:[P.o,,]})
z=new P.nj(b)
y=new P.nk(b)
x=J.M(a)
if(!!x.$isax)a.cG(H.j(z,{func:1,ret:{futureOr:1},args:[,]}),y,null)
else{w={func:1,ret:{futureOr:1},args:[,]}
if(!!x.$isae)a.c5(H.j(z,w),y,null)
else{v=new P.ax(0,$.Q,[null])
H.x(a,null)
v.a=4
v.c=a
v.cG(H.j(z,w),null,null)}}},
aa:function(a){var z=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(y){e=y
d=c}}}(a,1)
return $.Q.eV(new P.nA(z),P.y,P.o,null)},
nw:function(a,b){if(H.cq(a,{func:1,args:[P.b,P.at]}))return b.eV(a,null,P.b,P.at)
if(H.cq(a,{func:1,args:[P.b]}))return H.j(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cy(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nt:function(){var z,y
for(;z=$.bH,z!=null;){$.c5=null
y=z.b
$.bH=y
if(y==null)$.c4=null
z.a.$0()}},
q1:[function(){$.dX=!0
try{P.nt()}finally{$.c5=null
$.dX=!1
if($.bH!=null)$.$get$dR().$1(P.ht())}},"$0","ht",0,0,7],
hm:function(a){var z=new P.fQ(H.j(a,{func:1,ret:-1}))
if($.bH==null){$.c4=z
$.bH=z
if(!$.dX)$.$get$dR().$1(P.ht())}else{$.c4.b=z
$.c4=z}},
nz:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.bH
if(z==null){P.hm(a)
$.c5=$.c4
return}y=new P.fQ(a)
x=$.c5
if(x==null){y.b=z
$.c5=y
$.bH=y}else{y.b=x.b
x.b=y
$.c5=y
if(y.b==null)$.c4=y}},
e5:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.Q
if(C.j===y){P.bI(null,null,C.j,a)
return}y.toString
P.bI(null,null,y,H.j(y.cL(a),z))},
pE:function(a,b){return new P.mv(H.v(a,"$iscl",[b],"$ascl"),!1,[b])},
fi:function(a,b){var z,y
z={func:1,ret:-1}
H.j(b,z)
y=$.Q
if(y===C.j){y.toString
return P.dJ(a,b)}return P.dJ(a,H.j(y.cL(b),z))},
kH:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bz]}
H.j(b,z)
y=$.Q
if(y===C.j){y.toString
return P.fj(a,b)}x=y.e5(b,P.bz)
$.Q.toString
return P.fj(a,H.j(x,z))},
cZ:function(a,b,c,d,e){var z={}
z.a=d
P.nz(new P.nx(z,e))},
hi:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.Q
if(y===c)return d.$0()
$.Q=c
z=y
try{y=d.$0()
return y}finally{$.Q=z}},
hj:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.Q
if(y===c)return d.$1(e)
$.Q=c
z=y
try{y=d.$1(e)
return y}finally{$.Q=z}},
ny:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.Q
if(y===c)return d.$2(e,f)
$.Q=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Q=z}},
bI:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cL(d):c.is(d,-1)
P.hm(d)},
ly:{"^":"h:23;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lx:{"^":"h:51;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lz:{"^":"h:0;a",
$0:function(){this.a.$0()}},
lA:{"^":"h:0;a",
$0:function(){this.a.$0()}},
h7:{"^":"b;a,0b,c",
fq:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bL(new P.mG(this,b),0),a)
else throw H.a(P.z("`setTimeout()` not found."))},
fs:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bL(new P.mF(this,a,Date.now(),b),0),a)
else throw H.a(P.z("Periodic timer."))},
$isbz:1,
q:{
mD:function(a,b){var z=new P.h7(!0,0)
z.fq(a,b)
return z},
mE:function(a,b){var z=new P.h7(!1,0)
z.fs(a,b)
return z}}},
mG:{"^":"h:7;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mF:{"^":"h:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.ff(w,x)}z.c=y
this.d.$1(z)}},
fP:{"^":"b;a,b,$ti",
aH:function(a,b){var z
H.bN(b,{futureOr:1,type:H.t(this,0)})
if(this.b)this.a.aH(0,b)
else{z=H.b7(b,"$isae",this.$ti,"$asae")
if(z){z=this.a
b.c5(z.giu(z),z.ge9(),-1)}else P.e5(new P.lu(this,b))}},
bg:function(a,b){if(this.b)this.a.bg(a,b)
else P.e5(new P.lt(this,a,b))},
$isdj:1},
lu:{"^":"h:0;a,b",
$0:function(){this.a.a.aH(0,this.b)}},
lt:{"^":"h:0;a,b,c",
$0:function(){this.a.a.bg(this.b,this.c)}},
nj:{"^":"h:35;a",
$1:function(a){return this.a.$2(0,a)}},
nk:{"^":"h:36;a",
$2:function(a,b){this.a.$2(1,new H.dl(a,H.d(b,"$isat")))}},
nA:{"^":"h:39;a",
$2:function(a,b){this.a(H.D(a),b)}},
ae:{"^":"b;$ti"},
fS:{"^":"b;$ti",
bg:[function(a,b){H.d(b,"$isat")
if(a==null)a=new P.dA()
if(this.a.a!==0)throw H.a(P.dG("Future already completed"))
$.Q.toString
this.aw(a,b)},function(a){return this.bg(a,null)},"iv","$2","$1","ge9",4,2,18],
$isdj:1},
lv:{"^":"fS;a,$ti",
aH:function(a,b){var z
H.bN(b,{futureOr:1,type:H.t(this,0)})
z=this.a
if(z.a!==0)throw H.a(P.dG("Future already completed"))
z.fw(b)},
aw:function(a,b){this.a.fz(a,b)}},
mA:{"^":"fS;a,$ti",
aH:[function(a,b){var z
H.bN(b,{futureOr:1,type:H.t(this,0)})
z=this.a
if(z.a!==0)throw H.a(P.dG("Future already completed"))
z.cl(b)},function(a){return this.aH(a,null)},"kv","$1","$0","giu",1,2,62],
aw:function(a,b){this.a.aw(a,b)}},
bE:{"^":"b;0a,b,c,d,e,$ti",
iY:function(a){if(this.c!==6)return!0
return this.b.b.dc(H.j(this.d,{func:1,ret:P.L,args:[P.b]}),a.a,P.L,P.b)},
iN:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.cq(z,{func:1,args:[P.b,P.at]}))return H.bN(w.js(z,a.a,a.b,null,y,P.at),x)
else return H.bN(w.dc(H.j(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
ax:{"^":"b;dX:a<,b,0hG:c<,$ti",
c5:function(a,b,c){var z,y
z=H.t(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Q
if(y!==C.j){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.nw(b,y)}return this.cG(a,b,c)},
eY:function(a,b){return this.c5(a,null,b)},
cG:function(a,b,c){var z,y,x
z=H.t(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=new P.ax(0,$.Q,[c])
x=b==null?1:3
this.dw(new P.bE(y,x,a,b,[z,c]))
return y},
dw:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbE")
this.c=a}else{if(z===2){y=H.d(this.c,"$isax")
z=y.a
if(z<4){y.dw(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bI(null,null,z,H.j(new P.lP(this,a),{func:1,ret:-1}))}},
dP:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbE")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isax")
y=u.a
if(y<4){u.dP(a)
return}this.a=y
this.c=u.c}z.a=this.bG(a)
y=this.b
y.toString
P.bI(null,null,y,H.j(new P.lW(z,this),{func:1,ret:-1}))}},
bF:function(){var z=H.d(this.c,"$isbE")
this.c=null
return this.bG(z)},
bG:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cl:function(a){var z,y,x,w
z=H.t(this,0)
H.bN(a,{futureOr:1,type:z})
y=this.$ti
x=H.b7(a,"$isae",y,"$asae")
if(x){z=H.b7(a,"$isax",y,null)
if(z)P.cU(a,this)
else P.fU(a,this)}else{w=this.bF()
H.x(a,z)
this.a=4
this.c=a
P.bF(this,w)}},
aw:[function(a,b){var z
H.d(b,"$isat")
z=this.bF()
this.a=8
this.c=new P.aE(a,b)
P.bF(this,z)},function(a){return this.aw(a,null)},"jI","$2","$1","gfJ",4,2,18],
fw:function(a){var z
H.bN(a,{futureOr:1,type:H.t(this,0)})
z=H.b7(a,"$isae",this.$ti,"$asae")
if(z){this.fH(a)
return}this.a=1
z=this.b
z.toString
P.bI(null,null,z,H.j(new P.lR(this,a),{func:1,ret:-1}))},
fH:function(a){var z=this.$ti
H.v(a,"$isae",z,"$asae")
z=H.b7(a,"$isax",z,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.bI(null,null,z,H.j(new P.lV(this,a),{func:1,ret:-1}))}else P.cU(a,this)
return}P.fU(a,this)},
fz:function(a,b){var z
this.a=1
z=this.b
z.toString
P.bI(null,null,z,H.j(new P.lQ(this,a,b),{func:1,ret:-1}))},
$isae:1,
q:{
fU:function(a,b){var z,y,x
b.a=1
try{a.c5(new P.lS(b),new P.lT(b),null)}catch(x){z=H.ac(x)
y=H.bi(x)
P.e5(new P.lU(b,z,y))}},
cU:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isax")
if(z>=4){y=b.bF()
b.a=a.a
b.c=a.c
P.bF(b,y)}else{y=H.d(b.c,"$isbE")
b.a=2
b.c=a
a.dP(y)}},
bF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isaE")
y=y.b
u=v.a
t=v.b
y.toString
P.cZ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bF(z.a,b)}y=z.a
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
if(p){H.d(r,"$isaE")
y=y.b
u=r.a
t=r.b
y.toString
P.cZ(null,null,y,u,t)
return}o=$.Q
if(o==null?q!=null:o!==q)$.Q=q
else o=null
y=b.c
if(y===8)new P.lZ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lY(x,b,r).$0()}else if((y&2)!==0)new P.lX(z,x,b).$0()
if(o!=null)$.Q=o
y=x.b
if(!!J.M(y).$isae){if(y.a>=4){n=H.d(t.c,"$isbE")
t.c=null
b=t.bG(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.cU(y,t)
return}}m=b.b
n=H.d(m.c,"$isbE")
m.c=null
b=m.bG(n)
y=x.a
u=x.b
if(!y){H.x(u,H.t(m,0))
m.a=4
m.c=u}else{H.d(u,"$isaE")
m.a=8
m.c=u}z.a=m
y=m}}}},
lP:{"^":"h:0;a,b",
$0:function(){P.bF(this.a,this.b)}},
lW:{"^":"h:0;a,b",
$0:function(){P.bF(this.b,this.a.a)}},
lS:{"^":"h:23;a",
$1:function(a){var z=this.a
z.a=0
z.cl(a)}},
lT:{"^":"h:48;a",
$2:function(a,b){this.a.aw(a,H.d(b,"$isat"))},
$1:function(a){return this.$2(a,null)}},
lU:{"^":"h:0;a,b,c",
$0:function(){this.a.aw(this.b,this.c)}},
lR:{"^":"h:0;a,b",
$0:function(){var z,y,x
z=this.a
y=H.x(this.b,H.t(z,0))
x=z.bF()
z.a=4
z.c=y
P.bF(z,x)}},
lV:{"^":"h:0;a,b",
$0:function(){P.cU(this.b,this.a)}},
lQ:{"^":"h:0;a,b,c",
$0:function(){this.a.aw(this.b,this.c)}},
lZ:{"^":"h:7;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eX(H.j(w.d,{func:1}),null)}catch(v){y=H.ac(v)
x=H.bi(v)
if(this.d){w=H.d(this.a.a.c,"$isaE").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isaE")
else u.b=new P.aE(y,x)
u.a=!0
return}if(!!J.M(z).$isae){if(z instanceof P.ax&&z.gdX()>=4){if(z.gdX()===8){w=this.b
w.b=H.d(z.ghG(),"$isaE")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.eY(new P.m_(t),null)
w.a=!1}}},
m_:{"^":"h:49;a",
$1:function(a){return this.a}},
lY:{"^":"h:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.x(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.dc(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ac(t)
y=H.bi(t)
x=this.a
x.b=new P.aE(z,y)
x.a=!0}}},
lX:{"^":"h:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isaE")
w=this.c
if(w.iY(z)&&w.e!=null){v=this.b
v.b=w.iN(z)
v.a=!1}}catch(u){y=H.ac(u)
x=H.bi(u)
w=H.d(this.a.a.c,"$isaE")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aE(y,x)
s.a=!0}}},
fQ:{"^":"b;a,0b"},
cl:{"^":"b;$ti",
gk:function(a){var z,y
z={}
y=new P.ax(0,$.Q,[P.o])
z.a=0
this.iW(new P.ku(z,this),!0,new P.kv(z,y),y.gfJ())
return y}},
ku:{"^":"h;a,b",
$1:function(a){H.x(a,H.aC(this.b,"cl",0));++this.a.a},
$S:function(){return{func:1,ret:P.y,args:[H.aC(this.b,"cl",0)]}}},
kv:{"^":"h:0;a,b",
$0:function(){this.b.cl(this.a.a)}},
fb:{"^":"b;$ti"},
kt:{"^":"b;"},
mv:{"^":"b;0a,b,c,$ti"},
bz:{"^":"b;"},
aE:{"^":"b;a,b",
j:function(a){return H.m(this.a)},
$isaj:1},
n7:{"^":"b;",$ispR:1},
nx:{"^":"h:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dA()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
mk:{"^":"n7;",
jt:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.j===$.Q){a.$0()
return}P.hi(null,null,this,a,-1)}catch(x){z=H.ac(x)
y=H.bi(x)
P.cZ(null,null,this,z,H.d(y,"$isat"))}},
ju:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.j===$.Q){a.$1(b)
return}P.hj(null,null,this,a,b,-1,c)}catch(x){z=H.ac(x)
y=H.bi(x)
P.cZ(null,null,this,z,H.d(y,"$isat"))}},
is:function(a,b){return new P.mm(this,H.j(a,{func:1,ret:b}),b)},
cL:function(a){return new P.ml(this,H.j(a,{func:1,ret:-1}))},
e5:function(a,b){return new P.mn(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
eX:function(a,b){H.j(a,{func:1,ret:b})
if($.Q===C.j)return a.$0()
return P.hi(null,null,this,a,b)},
dc:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.Q===C.j)return a.$1(b)
return P.hj(null,null,this,a,b,c,d)},
js:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.Q===C.j)return a.$2(b,c)
return P.ny(null,null,this,a,b,c,d,e,f)},
eV:function(a,b,c,d){return H.j(a,{func:1,ret:b,args:[c,d]})}},
mm:{"^":"h;a,b,c",
$0:function(){return this.a.eX(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ml:{"^":"h:7;a,b",
$0:function(){return this.a.jt(this.b)}},
mn:{"^":"h;a,b,c",
$1:function(a){var z=this.c
return this.a.ju(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
jk:function(a,b,c,d,e){return new H.aQ(0,0,[d,e])},
jl:function(a,b,c){H.c7(a)
return H.v(H.nM(a,new H.aQ(0,0,[b,c])),"$iseO",[b,c],"$aseO")},
eP:function(a,b){return new H.aQ(0,0,[a,b])},
jn:function(a,b,c,d){return new P.m6(0,0,[d])},
j5:function(a,b,c){var z,y
if(P.dY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c6()
C.a.h(y,a)
try{P.ns(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.fc(b,H.hD(z,"$isn"),", ")+c
return y.charCodeAt(0)==0?y:y},
dn:function(a,b,c){var z,y,x
if(P.dY(a))return b+"..."+c
z=new P.aG(b)
y=$.$get$c6()
C.a.h(y,a)
try{x=z
x.a=P.fc(x.gaS(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.gaS()+c
y=z.gaS()
return y.charCodeAt(0)==0?y:y},
dY:function(a){var z,y
for(z=0;y=$.$get$c6(),z<y.length;++z)if(a===y[z])return!0
return!1},
ns:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga4(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.m(z.gT(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gT(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.m(t))
return}v=H.m(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gT(z);++x
for(;z.H();t=s,s=r){r=z.gT(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.m(t)
v=H.m(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
eQ:function(a,b,c){var z=P.jk(null,null,null,b,c)
a.v(0,new P.jm(z,b,c))
return z},
dt:function(a){var z,y,x
z={}
if(P.dY(a))return"{...}"
y=new P.aG("")
try{C.a.h($.$get$c6(),a)
x=y
x.a=x.gaS()+"{"
z.a=!0
J.d8(a,new P.jt(z,y))
z=y
z.a=z.gaS()+"}"}finally{z=$.$get$c6()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gaS()
return z.charCodeAt(0)==0?z:z},
m6:{"^":"m0;a,0b,0c,0d,0e,0f,r,$ti",
ga4:function(a){return P.fW(this,this.r,H.t(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.x(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dT()
this.b=z}return this.dC(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dT()
this.c=y}return this.dC(y,b)}else return this.fu(0,b)},
fu:function(a,b){var z,y,x
H.x(b,H.t(this,0))
z=this.d
if(z==null){z=P.dT()
this.d=z}y=this.dE(b)
x=z[y]
if(x==null)z[y]=[this.ck(b)]
else{if(this.dK(x,b)>=0)return!1
x.push(this.ck(b))}return!0},
a1:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dQ(this.c,b)
else return this.hA(0,b)},
hA:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fW(z,b)
x=this.dK(y,b)
if(x<0)return!1
this.dZ(y.splice(x,1)[0])
return!0},
dC:function(a,b){H.x(b,H.t(this,0))
if(H.d(a[b],"$isdS")!=null)return!1
a[b]=this.ck(b)
return!0},
dQ:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$isdS")
if(z==null)return!1
this.dZ(z)
delete a[b]
return!0},
dD:function(){this.r=this.r+1&67108863},
ck:function(a){var z,y
z=new P.dS(H.x(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dD()
return z},
dZ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dD()},
dE:function(a){return J.c8(a)&0x3ffffff},
fW:function(a,b){return a[this.dE(b)]},
dK:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
q:{
dT:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dS:{"^":"b;a,0b,0c"},
m7:{"^":"b;a,b,0c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.bl(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.x(z.a,H.t(this,0))
this.c=z.b
return!0}}},
q:{
fW:function(a,b,c){var z=new P.m7(a,b,[c])
z.c=a.e
return z}}},
m0:{"^":"kg;"},
jm:{"^":"h:10;a,b,c",
$2:function(a,b){this.a.n(0,H.x(a,this.b),H.x(b,this.c))}},
cI:{"^":"m8;",$isn:1,$ise:1},
w:{"^":"b;$ti",
ga4:function(a){return new H.eR(a,this.gk(a),0,[H.ba(this,a,"w",0)])},
K:function(a,b){return this.i(a,b)},
jz:function(a,b){var z,y,x
z=H.f([],[H.ba(this,a,"w",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.l(x)
if(!(y<x))break
C.a.n(z,y,this.i(a,y));++y}return z},
jy:function(a){return this.jz(a,!0)},
m:function(a,b){var z,y,x
z=[H.ba(this,a,"w",0)]
H.v(b,"$ise",z,"$ase")
y=H.f([],z)
z=this.gk(a)
x=b.gk(b)
if(typeof z!=="number")return z.m()
C.a.sk(y,C.d.m(z,x))
C.a.by(y,0,this.gk(a),a)
C.a.by(y,this.gk(a),y.length,b)
return y},
aL:function(a,b,c,d){var z
H.x(d,H.ba(this,a,"w",0))
P.aY(b,c,this.gk(a),null,null,null)
for(z=b;z<c;++z)this.n(a,z,d)},
aq:function(a,b,c){var z,y
if(c.D(0,0))c=0
z=c
while(!0){y=this.gk(a)
if(typeof y!=="number")return H.l(y)
if(!(z<y))break
if(J.R(this.i(a,z),b))return z;++z}return-1},
O:function(a,b){return this.aq(a,b,0)},
j:function(a){return P.dn(a,"[","]")}},
js:{"^":"az;"},
jt:{"^":"h:10;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.m(a)
z.a=y+": "
z.a+=H.m(b)}},
az:{"^":"b;$ti",
v:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.ba(this,a,"az",0),H.ba(this,a,"az",1)]})
for(z=J.bP(this.gaA(a));z.H();){y=z.gT(z)
b.$2(y,this.i(a,y))}},
gk:function(a){return J.ar(this.gaA(a))},
j:function(a){return P.dt(a)},
$isJ:1},
mL:{"^":"b;$ti",
n:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
throw H.a(P.z("Cannot modify unmodifiable map"))}},
ju:{"^":"b;$ti",
i:function(a,b){return J.W(this.a,b)},
n:function(a,b,c){J.d5(this.a,H.x(b,H.t(this,0)),H.x(c,H.t(this,1)))},
v:function(a,b){J.d8(this.a,H.j(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gk:function(a){return J.ar(this.a)},
j:function(a){return J.as(this.a)},
$isJ:1},
fF:{"^":"mM;a,$ti"},
ki:{"^":"b;$ti",
j:function(a){return P.dn(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e9("index"))
if(b<0)H.p(P.a5(b,0,null,"index",null))
for(z=P.fW(this,this.r,H.t(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
$isn:1},
kg:{"^":"ki;"},
m8:{"^":"b+w;"},
mM:{"^":"ju+mL;$ti"}}],["","",,P,{"^":"",hX:{"^":"ca;a",
j_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aY(c,d,b.length,null,null,null)
z=$.$get$fR()
if(typeof d!=="number")return H.l(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.I(b,y)
if(r===37){q=s+2
if(q<=d){p=H.d1(C.b.I(b,s))
o=H.d1(C.b.I(b,s+1))
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
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aG("")
w.a+=C.b.u(b,x,y)
w.a+=H.cM(r)
x=s
continue}}throw H.a(P.a_("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.ec(b,u,d,v,t,k)
else{j=C.d.bv(k-1,4)+1
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b6(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.ec(b,u,d,v,t,i)
else{j=C.d.bv(i,4)
if(j===1)throw H.a(P.a_("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b6(b,d,d,j===2?"==":"=")}return b},
$asca:function(){return[[P.e,P.o],P.i]},
q:{
ec:function(a,b,c,d,e,f){if(C.d.bv(f,4)!==0)throw H.a(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a_("Invalid base64 padding, more than two '=' characters",a,b))}}},hY:{"^":"bR;a",
$asbR:function(){return[[P.e,P.o],P.i]}},ca:{"^":"b;$ti"},bR:{"^":"kt;$ti"},ir:{"^":"ca;",
$asca:function(){return[P.i,[P.e,P.o]]}},l9:{"^":"ir;a",
giE:function(){return C.F}},lg:{"^":"bR;",
bh:function(a,b,c){var z,y,x,w
z=a.length
P.aY(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.n6(0,0,x)
if(w.fV(a,b,z)!==z)w.e1(J.hO(a,z-1),0)
return C.W.cd(x,0,w.b)},
cQ:function(a){return this.bh(a,0,null)},
$asbR:function(){return[P.i,[P.e,P.o]]}},n6:{"^":"b;a,b,c",
e1:function(a,b){var z,y,x,w,v
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
fV:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.e1(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},la:{"^":"bR;a",
bh:function(a,b,c){var z,y,x,w,v
H.v(a,"$ise",[P.o],"$ase")
z=P.lb(!1,a,b,c)
if(z!=null)return z
y=J.ar(a)
P.aY(b,c,y,null,null,null)
x=new P.aG("")
w=new P.n3(!1,x,!0,0,0,0)
w.bh(a,b,y)
w.iJ(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cQ:function(a){return this.bh(a,0,null)},
$asbR:function(){return[[P.e,P.o],P.i]},
q:{
lb:function(a,b,c,d){H.v(b,"$ise",[P.o],"$ase")
if(b instanceof Uint8Array)return P.lc(!1,b,c,d)
return},
lc:function(a,b,c,d){var z,y,x
z=$.$get$fJ()
if(z==null)return
y=0===c
if(y&&!0)return P.dP(z,b)
x=b.length
d=P.aY(c,d,x,null,null,null)
if(y&&d===x)return P.dP(z,b)
return P.dP(z,b.subarray(c,d))},
dP:function(a,b){if(P.le(b))return
return P.lf(a,b)},
lf:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ac(y)}return},
le:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
ld:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ac(y)}return}}},n3:{"^":"b;a,b,c,d,e,f",
iJ:function(a,b,c){var z
H.v(b,"$ise",[P.o],"$ase")
if(this.e>0){z=P.a_("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
bh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$ise",[P.o],"$ase")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.n5(c)
v=new P.n4(this,b,c,a)
$label0$0:for(u=J.aB(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.c9()
if((r&192)!==128){q=P.a_("Bad UTF-8 encoding 0x"+C.d.bs(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.c(C.w,q)
if(z<=C.w[q]){q=P.a_("Overlong encoding of 0x"+C.d.bs(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a_("Character outside valid Unicode range: 0x"+C.d.bs(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cM(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cb()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.D()
if(r<0){m=P.a_("Negative UTF-8 code unit: -0x"+C.d.bs(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a_("Bad UTF-8 encoding 0x"+C.d.bs(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},n5:{"^":"h:55;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$ise",[P.o],"$ase")
z=this.a
for(y=J.aB(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.c9()
if((w&127)!==w)return x-b}return z-b}},n4:{"^":"h:57;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cm(this.d,a,b)}}}],["","",,P,{"^":"",
bj:function(a,b,c){var z
H.K(a)
H.j(b,{func:1,ret:P.o,args:[P.i]})
z=H.k_(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a_(a,null,null))},
nK:function(a,b){var z=H.jZ(a)
if(z!=null)return z
throw H.a(P.a_("Invalid double",a,null))},
it:function(a){var z=J.M(a)
if(!!z.$ish)return z.j(a)
return"Instance of '"+H.bs(a)+"'"},
jo:function(a,b,c,d){var z,y
H.x(b,d)
z=J.j8(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.n(z,y,b)
return H.v(z,"$ise",[d],"$ase")},
jp:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.ga4(a);x.H();)C.a.h(y,H.x(x.gT(x),c))
if(b)return y
return H.v(J.bT(y),"$ise",z,"$ase")},
cm:function(a,b,c){var z,y
z=P.o
H.v(a,"$isn",[z],"$asn")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbc",[z],"$asbc")
y=a.length
c=P.aY(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.D()
z=c<y}else z=!0
return H.f3(z?C.a.cd(a,b,c):a)}if(!!J.M(a).$isdz)return H.k1(a,b,P.aY(b,c,a.length,null,null,null))
return P.kw(a,b,c)},
kw:function(a,b,c){var z,y,x,w
H.v(a,"$isn",[P.o],"$asn")
if(b<0)throw H.a(P.a5(b,0,J.ar(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a5(c,b,J.ar(a),null,null))
y=J.bP(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.a5(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gT(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.a5(c,b,x,null,null))
w.push(y.gT(y))}return H.f3(w)},
dC:function(a,b,c){return new H.jc(a,H.eK(a,!1,!0,!1))},
cp:function(){var z=H.jR()
if(z!=null)return P.l1(z,0,null)
throw H.a(P.z("'Uri.base' is not supported"))},
cD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.it(a)},
q:function(a){return new P.fT(a)},
jq:function(a,b,c,d){var z,y
H.j(b,{func:1,ret:d,args:[P.o]})
z=H.f([],[d])
C.a.sk(z,a)
for(y=0;y<a;++y)C.a.n(z,y,b.$1(y))
return z},
cu:function(a){H.oy(a)},
l1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.fG(b>0||c<c?C.b.u(a,b,c):a,5,null).gf0()
else if(y===32)return P.fG(C.b.u(a,z,c),0,null).gf0()}x=new Array(8)
x.fixed$length=Array
w=H.f(x,[P.o])
C.a.n(w,0,0)
x=b-1
C.a.n(w,1,x)
C.a.n(w,2,x)
C.a.n(w,7,x)
C.a.n(w,3,b)
C.a.n(w,4,b)
C.a.n(w,5,c)
C.a.n(w,6,c)
if(P.hk(a,b,c,0,w)>=14)C.a.n(w,7,c)
v=w[1]
if(typeof v!=="number")return v.aO()
if(v>=b)if(P.hk(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.m()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.D()
if(typeof r!=="number")return H.l(r)
if(q<r)r=q
if(typeof s!=="number")return s.D()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.D()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.D()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ah(a,"..",s)))n=r>s+2&&C.b.ah(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ah(a,"file",b)){if(u<=b){if(!C.b.ah(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b6(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ah(a,"http",b)){if(x&&t+3===s&&C.b.ah(a,"80",t+1))if(b===0&&!0){a=C.b.b6(a,t,s,"")
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
else if(v===z&&C.b.ah(a,"https",b)){if(x&&t+4===s&&C.b.ah(a,"443",t+1))if(b===0&&!0){a=C.b.b6(a,t,s,"")
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
q-=b}return new P.mp(a,v,u,t,s,r,q,o)}return P.mN(a,b,c,v,u,t,s,r,q,o)},
fI:function(a,b){var z=P.i
return C.a.iK(H.f(a.split("&"),[z]),P.eP(z,z),new P.l4(b),[P.J,P.i,P.i])},
l_:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.l0(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bj(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.cb()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.c(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bj(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.cb()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.c(y,u)
y[u]=s
return y},
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.l2(a)
y=new P.l3(z,a)
if(a.length<2)z.$1("address is too short")
x=H.f([],[P.o])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.X(a,w)
if(s===58){if(w===b){++w
if(C.b.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaM(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.l_(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.c(o,l)
o[l]=0
i=l+1
if(i>=n)return H.c(o,i)
o[i]=0
l+=2}else{i=C.d.aX(k,8)
if(l<0||l>=n)return H.c(o,l)
o[l]=i
i=l+1
if(i>=n)return H.c(o,i)
o[i]=k&255
l+=2}}return o},
nm:function(){var z,y,x,w,v
z=P.jq(22,new P.no(),!0,P.V)
y=new P.nn(z)
x=new P.np()
w=new P.nq()
v=H.d(y.$2(0,225),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isV")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isV")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isV"),"]",5)
v=H.d(y.$2(9,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isV"),"az",21)
v=H.d(y.$2(21,245),"$isV")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hk:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$ise",[P.o],"$ase")
z=$.$get$hl()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.c(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.c(x,w)
v=x[w]
d=v&31
C.a.n(e,v>>>5,y)}return d},
L:{"^":"b;"},
"+bool":0,
aF:{"^":"b;a,b",
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a&&this.b===b.b},
gY:function(a){var z=this.a
return(z^C.d.aX(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.ih(H.jY(this))
y=P.cb(H.jW(this))
x=P.cb(H.jS(this))
w=P.cb(H.jT(this))
v=P.cb(H.jV(this))
u=P.cb(H.jX(this))
t=P.ii(H.jU(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
ih:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ii:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cb:function(a){if(a>=10)return""+a
return"0"+a}}},
C:{"^":"ab;"},
"+double":0,
bn:{"^":"b;a",
m:function(a,b){return new P.bn(C.d.m(this.a,b.gfO()))},
D:function(a,b){return C.d.D(this.a,H.d(b,"$isbn").a)},
aO:function(a,b){return C.d.aO(this.a,b.gfO())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bn))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.io()
y=this.a
if(y<0)return"-"+new P.bn(0-y).j(0)
x=z.$1(C.d.a8(y,6e7)%60)
w=z.$1(C.d.a8(y,1e6)%60)
v=new P.im().$1(y%1e6)
return""+C.d.a8(y,36e8)+":"+H.m(x)+":"+H.m(w)+"."+H.m(v)},
q:{
ev:function(a,b,c,d,e,f){return new P.bn(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
im:{"^":"h:19;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
io:{"^":"h:19;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
aj:{"^":"b;"},
dA:{"^":"aj;",
j:function(a){return"Throw of null."}},
b3:{"^":"aj;a,b,c,d",
gcn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcm:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.m(z)
w=this.gcn()+y+x
if(!this.a)return w
v=this.gcm()
u=P.cD(this.b)
return w+v+": "+H.m(u)},
q:{
c9:function(a){return new P.b3(!1,null,null,a)},
cy:function(a,b,c){return new P.b3(!0,a,b,c)},
e9:function(a){return new P.b3(!1,null,a,"Must not be null")}}},
cN:{"^":"b3;e,f,a,b,c,d",
gcn:function(){return"RangeError"},
gcm:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.m(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.m(z)
else if(x>z)y=": Not in range "+H.m(z)+".."+H.m(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.m(z)}return y},
q:{
cO:function(a,b,c){return new P.cN(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.cN(b,c,!0,a,d,"Invalid value")},
aY:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.l(a)
if(0<=a){if(typeof c!=="number")return H.l(c)
z=a>c}else z=!0
if(z)throw H.a(P.a5(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.l(c)
z=b>c}else z=!0
if(z)throw H.a(P.a5(b,a,c,"end",f))
return b}return c}}},
iE:{"^":"b3;e,k:f>,a,b,c,d",
gcn:function(){return"RangeError"},
gcm:function(){if(J.d4(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.m(z)},
q:{
Y:function(a,b,c,d,e){var z=H.D(e!=null?e:J.ar(b))
return new P.iE(b,z,!0,a,c,"Index out of range")}}},
kY:{"^":"aj;a",
j:function(a){return"Unsupported operation: "+this.a},
q:{
z:function(a){return new P.kY(a)}}},
kV:{"^":"aj;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
co:function(a){return new P.kV(a)}}},
dF:{"^":"aj;a",
j:function(a){return"Bad state: "+this.a},
q:{
dG:function(a){return new P.dF(a)}}},
i9:{"^":"aj;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.m(P.cD(z))+"."},
q:{
bl:function(a){return new P.i9(a)}}},
jN:{"^":"b;",
j:function(a){return"Out of Memory"},
$isaj:1},
f9:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isaj:1},
ig:{"^":"aj;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fT:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
iy:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.m(z):"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.m(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.u(w,0,75)+"..."
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
m=""}l=C.b.u(w,o,p)
return y+n+l+m+"\n"+C.b.l(" ",x-o+n.length)+"^\n"},
q:{
a_:function(a,b,c){return new P.iy(a,b,c)}}},
o:{"^":"ab;"},
"+int":0,
n:{"^":"b;$ti",
gk:function(a){var z,y
z=this.ga4(this)
for(y=0;z.H();)++y
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e9("index"))
if(b<0)H.p(P.a5(b,0,null,"index",null))
for(z=this.ga4(this),y=0;z.H();){x=z.gT(z)
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
j:function(a){return P.j5(this,"(",")")}},
dp:{"^":"b;$ti"},
e:{"^":"b;$ti",$isn:1},
"+List":0,
J:{"^":"b;$ti"},
y:{"^":"b;",
gY:function(a){return P.b.prototype.gY.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
ab:{"^":"b;"},
"+num":0,
b:{"^":";",
B:function(a,b){return this===b},
gY:function(a){return H.c_(this)},
j:function(a){return"Instance of '"+H.bs(this)+"'"},
toString:function(){return this.j(this)}},
at:{"^":"b;"},
i:{"^":"b;",$isf0:1},
"+String":0,
aG:{"^":"b;aS:a<",
gk:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispG:1,
q:{
fc:function(a,b,c){var z=J.bP(b)
if(!z.H())return a
if(c.length===0){do a+=H.m(z.gT(z))
while(z.H())}else{a+=H.m(z.gT(z))
for(;z.H();)a=a+c+H.m(z.gT(z))}return a}}},
l4:{"^":"h:47;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.v(a,"$isJ",[z,z],"$asJ")
H.K(b)
y=J.aB(b).O(b,"=")
if(y===-1){if(b!=="")J.d5(a,P.dV(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.au(b,y+1)
z=this.a
J.d5(a,P.dV(x,0,x.length,z,!0),P.dV(w,0,w.length,z,!0))}return a}},
l0:{"^":"h:33;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv4 address, "+a,this.a,b))}},
l2:{"^":"h:44;a",
$2:function(a,b){throw H.a(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
l3:{"^":"h:31;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bj(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.D()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cX:{"^":"b;cc:a<,b,c,d,eQ:e>,f,r,0x,0y,0z,0Q,0ch",
gf1:function(){return this.b},
gd_:function(a){var z=this.c
if(z==null)return""
if(C.b.ag(z,"["))return C.b.u(z,1,z.length-1)
return z},
gc4:function(a){var z=this.d
if(z==null)return P.h9(this.a)
return z},
gd8:function(a){var z=this.f
return z==null?"":z},
geC:function(){var z=this.r
return z==null?"":z},
da:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isJ",[P.i,null],"$asJ")
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
if(x&&!C.b.ag(d,"/"))d="/"+d
g=P.dU(g,0,0,h)
return new P.cX(i,j,c,f,d,g,this.r)},
d9:function(a,b){return this.da(a,null,null,null,null,null,null,b,null,null)},
gb4:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.fF(P.fI(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
geD:function(){return this.c!=null},
geG:function(){return this.f!=null},
geE:function(){return this.r!=null},
j:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.m(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.m(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.m(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
B:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdO){y=this.a
x=b.gcc()
if(y==null?x==null:y===x)if(this.c!=null===b.geD()){y=this.b
x=b.gf1()
if(y==null?x==null:y===x){y=this.gd_(this)
x=z.gd_(b)
if(y==null?x==null:y===x){y=this.gc4(this)
x=z.gc4(b)
if(y==null?x==null:y===x)if(this.e===z.geQ(b)){y=this.f
x=y==null
if(!x===b.geG()){if(x)y=""
if(y===z.gd8(b)){z=this.r
y=z==null
if(!y===b.geE()){if(y)z=""
z=z===b.geC()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gY:function(a){var z=this.z
if(z==null){z=C.b.gY(this.j(0))
this.z=z}return z},
$isdO:1,
q:{
cY:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$ise",[P.o],"$ase")
if(c===C.k){z=$.$get$he().b
if(typeof b!=="string")H.p(H.ag(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.aC(c,"ca",0))
y=c.giE().cQ(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.c(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cM(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mY(a,b,d)
else{if(d===b)P.c2(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mZ(a,z,e-1):""
x=P.mS(a,e,f,!1)
if(typeof f!=="number")return f.m()
w=f+1
if(typeof g!=="number")return H.l(g)
v=w<g?P.mV(P.bj(C.b.u(a,w,g),new P.mO(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mT(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.D()
t=h<i?P.dU(a,h+1,i,null):null
return new P.cX(j,y,x,v,u,t,i<c?P.mR(a,i+1,c):null)},
h9:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c2:function(a,b,c){throw H.a(P.a_(c,a,b))},
mV:function(a,b){if(a!=null&&a===P.h9(b))return
return a},
mS:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.C()
z=c-1
if(C.b.X(a,z)!==93)P.c2(a,b,"Missing end `]` to match `[` in host")
P.fH(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.l(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.fH(a,b,c)
return"["+a+"]"}return P.n0(a,b,c)},
n0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.l(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.hg(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aG("")
s=C.b.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.c(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aG("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.c(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.c2(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aG("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.ha(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mY:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hc(C.b.I(a,b)))P.c2(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.c(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c2(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.mP(y?a.toLowerCase():a)},
mP:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mZ:function(a,b,c){return P.c3(a,b,c,C.S)},
mT:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c3(a,b,c,C.y):C.r.kz(d,new P.mU(),P.i).G(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ag(w,"/"))w="/"+w
return P.n_(w,e,f)},
n_:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ag(a,"/"))return P.n1(a,!z||c)
return P.n2(a)},
dU:function(a,b,c,d){var z,y
z={}
H.v(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.c9("Both query and queryParameters specified"))
return P.c3(a,b,c,C.n)}if(d==null)return
y=new P.aG("")
z.a=""
d.v(0,new P.mW(new P.mX(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mR:function(a,b,c){return P.c3(a,b,c,C.n)},
hg:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.d1(y)
v=H.d1(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aX(u,4)
if(z>=8)return H.c(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cM(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
ha:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.f(z,[P.o])
C.a.n(y,0,37)
C.a.n(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.n(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.f(z,[P.o])
for(v=0;--w,w>=0;x=128){u=C.d.hL(a,6*w)&63|x
C.a.n(y,v,37)
C.a.n(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.n(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.cm(y,0,null)},
c3:function(a,b,c,d){var z=P.hf(a,b,c,H.v(d,"$ise",[P.o],"$ase"),!1)
return z==null?C.b.u(a,b,c):z},
hf:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$ise",[P.o],"$ase")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.D()
if(typeof c!=="number")return H.l(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.c(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hg(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.c(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c2(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.ha(v)}}if(w==null)w=new P.aG("")
w.a+=C.b.u(a,x,y)
w.a+=H.m(t)
if(typeof s!=="number")return H.l(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.D()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hd:function(a){if(C.b.ag(a,"."))return!0
return C.b.O(a,"/.")!==-1},
n2:function(a){var z,y,x,w,v,u,t
if(!P.hd(a))return a
z=H.f([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.R(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.c(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.G(z,"/")},
n1:function(a,b){var z,y,x,w,v,u
if(!P.hd(a))return!b?P.hb(a):a
z=H.f([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaM(z)!==".."){if(0>=z.length)return H.c(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.c(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaM(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.c(z,0)
C.a.n(z,0,P.hb(z[0]))}return C.a.G(z,"/")},
hb:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hc(J.hL(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.au(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.c(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mQ:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c9("Invalid URL encoding"))}}return z},
dV:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.cs(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.I(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.u(a,b,c)
else u=new H.ah(y.u(a,b,c))}else{u=H.f([],[P.o])
for(x=b;x<c;++x){w=y.I(a,x)
if(w>127)throw H.a(P.c9("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c9("Truncated URI"))
C.a.h(u,P.mQ(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$ise",[P.o],"$ase")
return new P.la(!1).cQ(u)},
hc:function(a){var z=a|32
return 97<=z&&z<=122}}},
mO:{"^":"h:46;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.m()
throw H.a(P.a_("Invalid port",this.a,z+1))}},
mU:{"^":"h:42;",
$1:function(a){return P.cY(C.U,a,C.k,!1)}},
mX:{"^":"h:21;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.m(P.cY(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.m(P.cY(C.p,b,C.k,!0))}}},
mW:{"^":"h:45;a",
$2:function(a,b){var z,y
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(z=J.bP(H.hD(b,"$isn")),y=this.a;z.H();)y.$2(a,H.K(z.gT(z)))}},
kZ:{"^":"b;a,b,c",
gf0:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.c(z,0)
y=this.a
z=z[0]+1
x=C.b.aq(y,"?",z)
w=y.length
if(x>=0){v=P.c3(y,x+1,w,C.n)
w=x}else v=null
z=new P.lF(this,"data",null,null,null,P.c3(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.c(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
fG:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.f([b-1],[P.o])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a_("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a_("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaM(z)
if(v!==44||x!==t+7||!C.b.ah(a,"base64",t+1))throw H.a(P.a_("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.j_(0,a,s,y)
else{r=P.hf(a,s,y,C.n,!0)
if(r!=null)a=C.b.b6(a,s,y,r)}return new P.kZ(a,z,c)}}},
no:{"^":"h:40;",
$1:function(a){return new Uint8Array(96)}},
nn:{"^":"h:54;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.c(z,a)
z=z[a]
J.hP(z,0,96,b)
return z}},
np:{"^":"h;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.c(a,x)
a[x]=c}}},
nq:{"^":"h;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.c(a,x)
a[x]=c}}},
mp:{"^":"b;a,b,c,d,e,f,r,x,0y",
geD:function(){return this.c>0},
geF:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.m()
y=this.e
if(typeof y!=="number")return H.l(y)
y=z+1<y
z=y}else z=!1
return z},
geG:function(){var z=this.f
if(typeof z!=="number")return z.D()
return z<this.r},
geE:function(){return this.r<this.a.length},
gdL:function(){return this.b===4&&C.b.ag(this.a,"http")},
gdM:function(){return this.b===5&&C.b.ag(this.a,"https")},
gcc:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdL()){this.x="http"
z="http"}else if(this.gdM()){this.x="https"
z="https"}else if(z===4&&C.b.ag(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ag(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
gf1:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gd_:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gc4:function(a){var z
if(this.geF()){z=this.d
if(typeof z!=="number")return z.m()
return P.bj(C.b.u(this.a,z+1,this.e),null,null)}if(this.gdL())return 80
if(this.gdM())return 443
return 0},
geQ:function(a){return C.b.u(this.a,this.e,this.f)},
gd8:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.D()
return z<y?C.b.u(this.a,z+1,y):""},
geC:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.au(y,z+1):""},
gb4:function(){var z=this.f
if(typeof z!=="number")return z.D()
if(z>=this.r)return C.V
z=P.i
return new P.fF(P.fI(this.gd8(this),C.k),[z,z])},
da:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isJ",[P.i,null],"$asJ")
i=this.gcc()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.geF()?this.gc4(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ag(d,"/"))d="/"+d
g=P.dU(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.au(y,x+1)
return new P.cX(i,j,c,f,d,g,b)},
d9:function(a,b){return this.da(a,null,null,null,null,null,null,b,null,null)},
gY:function(a){var z=this.y
if(z==null){z=C.b.gY(this.a)
this.y=z}return z},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdO)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdO:1},
lF:{"^":"cX;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
df:function(a,b){var z=document.createElement("canvas")
return z},
iq:function(a){H.d(a,"$isad")
return"wheel"},
eA:function(a,b,c){return W.iC(a,null,null,b,null,null,null,c).eY(new W.iB(),P.i)},
iC:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=W.bS
y=new P.ax(0,$.Q,[z])
x=new P.lv(y,[z])
w=new XMLHttpRequest()
C.H.j6(w,"GET",a,!0)
z=W.ck
v={func:1,ret:-1,args:[z]}
W.a0(w,"load",H.j(new W.iD(w,x),v),!1,z)
W.a0(w,"error",H.j(x.ge9(),v),!1,z)
w.send()
return y},
eD:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$iseC")
try{J.hS(z,a)}catch(x){H.ac(x)}return z},
cV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fV:function(a,b,c,d){var z,y
z=W.cV(W.cV(W.cV(W.cV(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hq:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.Q
if(z===C.j)return a
return z.e5(a,b)},
an:{"^":"a4;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
oF:{"^":"u;0k:length=","%":"AccessibleNodeList"},
oG:{"^":"an;0a5:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
oH:{"^":"an;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
db:{"^":"u;",$isdb:1,"%":";Blob"},
oO:{"^":"an;0a5:type}","%":"HTMLButtonElement"},
de:{"^":"an;",
ca:function(a,b,c){if(c!=null)return a.getContext(b,P.nE(c,null))
return a.getContext(b)},
f5:function(a,b){return this.ca(a,b,null)},
$isde:1,
"%":"HTMLCanvasElement"},
ej:{"^":"u;",$isej:1,"%":"CanvasRenderingContext2D"},
oQ:{"^":"N;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oS:{"^":"ie;0k:length=","%":"CSSPerspective"},
bm:{"^":"u;",$isbm:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oT:{"^":"lE;0k:length=",
f6:function(a,b){var z=a.getPropertyValue(this.fE(a,b))
return z==null?"":z},
fE:function(a,b){var z,y
z=$.$get$en()
y=z[b]
if(typeof y==="string")return y
y=this.hM(a,b)
z[b]=y
return y},
hM:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ij()+b
if(z in a)return z
return b},
gcM:function(a){return a.bottom},
gaz:function(a){return a.height},
gb3:function(a){return a.left},
gbp:function(a){return a.right},
gbu:function(a){return a.top},
gaB:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
id:{"^":"b;",
gb3:function(a){return this.f6(a,"left")}},
eo:{"^":"u;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ie:{"^":"u;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
oU:{"^":"eo;0k:length=","%":"CSSTransformValue"},
oV:{"^":"eo;0k:length=","%":"CSSUnparsedValue"},
oW:{"^":"u;0k:length=",
i:function(a,b){return a[b]},
"%":"DataTransferItemList"},
oX:{"^":"u;",
j:function(a){return String(a)},
"%":"DOMException"},
oY:{"^":"lH;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.v(c,"$isao",[P.ab],"$asao")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[[P.ao,P.ab]]},
$asw:function(){return[[P.ao,P.ab]]},
$isn:1,
$asn:function(){return[[P.ao,P.ab]]},
$ise:1,
$ase:function(){return[[P.ao,P.ab]]},
$asB:function(){return[[P.ao,P.ab]]},
"%":"ClientRectList|DOMRectList"},
il:{"^":"u;",
j:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaB(a))+" x "+H.m(this.gaz(a))},
B:function(a,b){var z
if(b==null)return!1
z=H.b7(b,"$isao",[P.ab],"$asao")
if(!z)return!1
z=J.b9(b)
return a.left===z.gb3(b)&&a.top===z.gbu(b)&&this.gaB(a)===z.gaB(b)&&this.gaz(a)===z.gaz(b)},
gY:function(a){return W.fV(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaB(a)&0x1FFFFFFF,this.gaz(a)&0x1FFFFFFF)},
gcM:function(a){return a.bottom},
gaz:function(a){return a.height},
gb3:function(a){return a.left},
gbp:function(a){return a.right},
gbu:function(a){return a.top},
gaB:function(a){return a.width},
$isao:1,
$asao:function(){return[P.ab]},
"%":";DOMRectReadOnly"},
oZ:{"^":"lJ;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.K(c)
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[P.i]},
$asw:function(){return[P.i]},
$isn:1,
$asn:function(){return[P.i]},
$ise:1,
$ase:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"DOMStringList"},
p_:{"^":"u;0k:length=","%":"DOMTokenList"},
lD:{"^":"cI;a,b",
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return H.d(z[b],"$isa4")},
n:function(a,b,c){var z
H.D(b)
H.d(c,"$isa4")
z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga4:function(a){var z=this.jy(this)
return new J.ay(z,z.length,0,[H.t(z,0)])},
aL:function(a,b,c,d){throw H.a(P.co(null))},
$asw:function(){return[W.a4]},
$asn:function(){return[W.a4]},
$ase:function(){return[W.a4]}},
a4:{"^":"N;",
gcP:function(a){return new W.lD(a,a.children)},
ge8:function(a){return P.k4(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.ab)},
j:function(a){return a.localName},
$isa4:1,
"%":";Element"},
p0:{"^":"an;0a5:type}","%":"HTMLEmbedElement"},
ak:{"^":"u;",$isak:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ad:{"^":"u;",
e2:["fb",function(a,b,c,d){H.j(c,{func:1,args:[W.ak]})
if(c!=null)this.fv(a,b,c,!1)}],
fv:function(a,b,c,d){return a.addEventListener(b,H.bL(H.j(c,{func:1,args:[W.ak]}),1),!1)},
$isad:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;h1|h2|h5|h6"},
bb:{"^":"db;",$isbb:1,"%":"File"},
ex:{"^":"lO;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbb")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bb]},
$asw:function(){return[W.bb]},
$isn:1,
$asn:function(){return[W.bb]},
$ise:1,
$ase:function(){return[W.bb]},
$isex:1,
$asB:function(){return[W.bb]},
"%":"FileList"},
p1:{"^":"ad;0k:length=","%":"FileWriter"},
p2:{"^":"an;0k:length=","%":"HTMLFormElement"},
bo:{"^":"u;",$isbo:1,"%":"Gamepad"},
p3:{"^":"u;0k:length=","%":"History"},
p4:{"^":"m2;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isN")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.N]},
$asw:function(){return[W.N]},
$isn:1,
$asn:function(){return[W.N]},
$ise:1,
$ase:function(){return[W.N]},
$asB:function(){return[W.N]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bS:{"^":"iA;",
kH:function(a,b,c,d,e,f){return a.open(b,c)},
j6:function(a,b,c,d){return a.open(b,c,d)},
$isbS:1,
"%":"XMLHttpRequest"},
iB:{"^":"h:61;",
$1:function(a){return H.d(a,"$isbS").responseText}},
iD:{"^":"h:29;a,b",
$1:function(a){var z,y,x,w,v
H.d(a,"$isck")
z=this.a
y=z.status
if(typeof y!=="number")return y.aO()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.b
if(y)v.aH(0,z)
else v.iv(a)}},
iA:{"^":"ad;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
cd:{"^":"u;0ea:data=",$iscd:1,"%":"ImageData"},
eB:{"^":"an;",$iseB:1,"%":"HTMLImageElement"},
eC:{"^":"an;0a5:type}",$iseC:1,$isek:1,"%":"HTMLInputElement"},
ek:{"^":"b;",$isa4:1,$isad:1,$isN:1},
bV:{"^":"dK;",$isbV:1,"%":"KeyboardEvent"},
p8:{"^":"an;0a5:type}","%":"HTMLLinkElement"},
p9:{"^":"u;",
j:function(a){return String(a)},
"%":"Location"},
pa:{"^":"u;0k:length=","%":"MediaList"},
pb:{"^":"ad;0cT:enabled}","%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
pc:{"^":"ad;",
e2:function(a,b,c,d){H.j(c,{func:1,args:[W.ak]})
if(b==="message")a.start()
this.fb(a,b,c,!1)},
"%":"MessagePort"},
pd:{"^":"m9;",
i:function(a,b){return P.b8(a.get(H.K(b)))},
v:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b8(y.value[1]))}},
gaA:function(a){var z=H.f([],[P.i])
this.v(a,new W.jE(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.z("Not supported"))},
$asaz:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
jE:{"^":"h:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pe:{"^":"ma;",
i:function(a,b){return P.b8(a.get(H.K(b)))},
v:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b8(y.value[1]))}},
gaA:function(a){var z=H.f([],[P.i])
this.v(a,new W.jF(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.z("Not supported"))},
$asaz:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
jF:{"^":"h:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bq:{"^":"u;",$isbq:1,"%":"MimeType"},
pf:{"^":"mc;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbq")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bq]},
$asw:function(){return[W.bq]},
$isn:1,
$asn:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asB:function(){return[W.bq]},
"%":"MimeTypeArray"},
aR:{"^":"dK;",$isaR:1,"%":"PointerEvent;DragEvent|MouseEvent"},
lC:{"^":"cI;a",
n:function(a,b,c){var z,y
H.D(b)
H.d(c,"$isN")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.c(y,b)
z.replaceChild(c,y[b])},
ga4:function(a){var z=this.a.childNodes
return new W.ey(z,z.length,-1,[H.ba(C.X,z,"B",0)])},
aL:function(a,b,c,d){throw H.a(P.z("Cannot fillRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
$asw:function(){return[W.N]},
$asn:function(){return[W.N]},
$ase:function(){return[W.N]}},
N:{"^":"ad;",
jm:function(a,b){var z,y
try{z=a.parentNode
J.hM(z,b,a)}catch(y){H.ac(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.fc(a):z},
hB:function(a,b,c){return a.replaceChild(b,c)},
$isN:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
jK:{"^":"me;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isN")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.N]},
$asw:function(){return[W.N]},
$isn:1,
$asn:function(){return[W.N]},
$ise:1,
$ase:function(){return[W.N]},
$asB:function(){return[W.N]},
"%":"NodeList|RadioNodeList"},
pn:{"^":"an;0a5:type}","%":"HTMLOListElement"},
po:{"^":"an;0a5:type}","%":"HTMLObjectElement"},
br:{"^":"u;0k:length=",$isbr:1,"%":"Plugin"},
pr:{"^":"mi;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbr")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.br]},
$asw:function(){return[W.br]},
$isn:1,
$asn:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asB:function(){return[W.br]},
"%":"PluginArray"},
ck:{"^":"ak;",$isck:1,"%":"ProgressEvent|ResourceProgressEvent"},
pt:{"^":"u;0a5:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
pu:{"^":"mo;",
i:function(a,b){return P.b8(a.get(H.K(b)))},
v:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b8(y.value[1]))}},
gaA:function(a){var z=H.f([],[P.i])
this.v(a,new W.kd(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.z("Not supported"))},
$asaz:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
kd:{"^":"h:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pw:{"^":"an;0a5:type}","%":"HTMLScriptElement"},
py:{"^":"an;0k:length=","%":"HTMLSelectElement"},
bt:{"^":"ad;",$isbt:1,"%":"SourceBuffer"},
pz:{"^":"h2;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbt")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bt]},
$asw:function(){return[W.bt]},
$isn:1,
$asn:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$asB:function(){return[W.bt]},
"%":"SourceBufferList"},
pA:{"^":"an;0a5:type}","%":"HTMLSourceElement"},
bu:{"^":"u;",$isbu:1,"%":"SpeechGrammar"},
pB:{"^":"mr;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbu")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bu]},
$asw:function(){return[W.bu]},
$isn:1,
$asn:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$asB:function(){return[W.bu]},
"%":"SpeechGrammarList"},
bv:{"^":"u;0k:length=",$isbv:1,"%":"SpeechRecognitionResult"},
pD:{"^":"mu;",
i:function(a,b){return a.getItem(H.K(b))},
n:function(a,b,c){a.setItem(b,H.K(c))},
v:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaA:function(a){var z=H.f([],[P.i])
this.v(a,new W.ks(z))
return z},
gk:function(a){return a.length},
$asaz:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
ks:{"^":"h:21;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pH:{"^":"an;0a5:type}","%":"HTMLStyleElement"},
bw:{"^":"u;",$isbw:1,"%":"CSSStyleSheet|StyleSheet"},
dH:{"^":"an;",$isdH:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bx:{"^":"ad;",$isbx:1,"%":"TextTrack"},
by:{"^":"ad;",$isby:1,"%":"TextTrackCue|VTTCue"},
pJ:{"^":"mC;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isby")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.by]},
$asw:function(){return[W.by]},
$isn:1,
$asn:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$asB:function(){return[W.by]},
"%":"TextTrackCueList"},
pK:{"^":"h6;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbx")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bx]},
$asw:function(){return[W.bx]},
$isn:1,
$asn:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$asB:function(){return[W.bx]},
"%":"TextTrackList"},
pL:{"^":"u;0k:length=","%":"TimeRanges"},
bA:{"^":"u;",$isbA:1,"%":"Touch"},
bB:{"^":"dK;",$isbB:1,"%":"TouchEvent"},
pM:{"^":"mI;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbA")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bA]},
$asw:function(){return[W.bA]},
$isn:1,
$asn:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$asB:function(){return[W.bA]},
"%":"TouchList"},
pN:{"^":"u;0k:length=","%":"TrackDefaultList"},
dK:{"^":"ak;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pP:{"^":"u;",
j:function(a){return String(a)},
"%":"URL"},
pQ:{"^":"ad;0k:length=","%":"VideoTrackList"},
c1:{"^":"aR;",
giB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.z("deltaY is not supported"))},
giA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.z("deltaX is not supported"))},
$isc1:1,
"%":"WheelEvent"},
lr:{"^":"ad;",
hC:function(a,b){return a.requestAnimationFrame(H.bL(H.j(b,{func:1,ret:-1,args:[P.ab]}),1))},
fP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
pV:{"^":"n9;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbm")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bm]},
$asw:function(){return[W.bm]},
$isn:1,
$asn:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$asB:function(){return[W.bm]},
"%":"CSSRuleList"},
pW:{"^":"il;",
j:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
B:function(a,b){var z
if(b==null)return!1
z=H.b7(b,"$isao",[P.ab],"$asao")
if(!z)return!1
z=J.b9(b)
return a.left===z.gb3(b)&&a.top===z.gbu(b)&&a.width===z.gaB(b)&&a.height===z.gaz(b)},
gY:function(a){return W.fV(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaz:function(a){return a.height},
gaB:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pY:{"^":"nb;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbo")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bo]},
$asw:function(){return[W.bo]},
$isn:1,
$asn:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$asB:function(){return[W.bo]},
"%":"GamepadList"},
pZ:{"^":"nd;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isN")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.N]},
$asw:function(){return[W.N]},
$isn:1,
$asn:function(){return[W.N]},
$ise:1,
$ase:function(){return[W.N]},
$asB:function(){return[W.N]},
"%":"MozNamedAttrMap|NamedNodeMap"},
q_:{"^":"nf;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbv")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bv]},
$asw:function(){return[W.bv]},
$isn:1,
$asn:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$asB:function(){return[W.bv]},
"%":"SpeechRecognitionResultList"},
q0:{"^":"nh;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.D(b)
H.d(c,"$isbw")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isH:1,
$asH:function(){return[W.bw]},
$asw:function(){return[W.bw]},
$isn:1,
$asn:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$asB:function(){return[W.bw]},
"%":"StyleSheetList"},
lK:{"^":"cl;a,b,c,$ti",
iW:function(a,b,c,d){var z=H.t(this,0)
H.j(a,{func:1,ret:-1,args:[z]})
H.j(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
pX:{"^":"lK;a,b,c,$ti"},
lL:{"^":"fb;a,b,c,d,e,$ti",
hR:function(){var z=this.d
if(z!=null&&this.a<=0)J.hN(this.b,this.c,z,!1)},
q:{
a0:function(a,b,c,d,e){var z=c==null?null:W.hq(new W.lM(c),W.ak)
z=new W.lL(0,a,b,z,!1,[e])
z.hR()
return z}}},
lM:{"^":"h:9;a",
$1:function(a){return this.a.$1(H.d(a,"$isak"))}},
B:{"^":"b;$ti",
ga4:function(a){return new W.ey(a,this.gk(a),-1,[H.ba(this,a,"B",0)])},
aL:function(a,b,c,d){H.x(d,H.ba(this,a,"B",0))
throw H.a(P.z("Cannot modify an immutable List."))}},
ey:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.W(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gT:function(a){return this.d}},
lE:{"^":"u+id;"},
lG:{"^":"u+w;"},
lH:{"^":"lG+B;"},
lI:{"^":"u+w;"},
lJ:{"^":"lI+B;"},
lN:{"^":"u+w;"},
lO:{"^":"lN+B;"},
m1:{"^":"u+w;"},
m2:{"^":"m1+B;"},
m9:{"^":"u+az;"},
ma:{"^":"u+az;"},
mb:{"^":"u+w;"},
mc:{"^":"mb+B;"},
md:{"^":"u+w;"},
me:{"^":"md+B;"},
mh:{"^":"u+w;"},
mi:{"^":"mh+B;"},
mo:{"^":"u+az;"},
h1:{"^":"ad+w;"},
h2:{"^":"h1+B;"},
mq:{"^":"u+w;"},
mr:{"^":"mq+B;"},
mu:{"^":"u+az;"},
mB:{"^":"u+w;"},
mC:{"^":"mB+B;"},
h5:{"^":"ad+w;"},
h6:{"^":"h5+B;"},
mH:{"^":"u+w;"},
mI:{"^":"mH+B;"},
n8:{"^":"u+w;"},
n9:{"^":"n8+B;"},
na:{"^":"u+w;"},
nb:{"^":"na+B;"},
nc:{"^":"u+w;"},
nd:{"^":"nc+B;"},
ne:{"^":"u+w;"},
nf:{"^":"ne+B;"},
ng:{"^":"u+w;"},
nh:{"^":"ng+B;"}}],["","",,P,{"^":"",
nH:function(a){var z,y
z=J.M(a)
if(!!z.$iscd){y=z.gea(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h8(a.data,a.height,a.width)},
nG:function(a){if(a instanceof P.h8)return{data:a.a,height:a.b,width:a.c}
return a},
b8:function(a){var z,y,x,w,v
if(a==null)return
z=P.eP(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w){v=H.K(y[w])
z.n(0,v,a[v])}return z},
nE:function(a,b){var z={}
a.v(0,new P.nF(z))
return z},
eu:function(){var z=$.et
if(z==null){z=J.d6(window.navigator.userAgent,"Opera",0)
$.et=z}return z},
ij:function(){var z,y
z=$.eq
if(z!=null)return z
y=$.er
if(y==null){y=J.d6(window.navigator.userAgent,"Firefox",0)
$.er=y}if(y)z="-moz-"
else{y=$.es
if(y==null){y=!P.eu()&&J.d6(window.navigator.userAgent,"Trident/",0)
$.es=y}if(y)z="-ms-"
else z=P.eu()?"-o-":"-webkit-"}$.eq=z
return z},
my:{"^":"b;",
ez:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
c8:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isaF)return new Date(a.a)
if(!!y.$isk7)throw H.a(P.co("structured clone of RegExp"))
if(!!y.$isbb)return a
if(!!y.$isdb)return a
if(!!y.$isex)return a
if(!!y.$iscd)return a
if(!!y.$iseZ||!!y.$isdy)return a
if(!!y.$isJ){x=this.ez(a)
w=this.b
if(x>=w.length)return H.c(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.n(w,x,v)
y.v(a,new P.mz(z,this))
return z.a}if(!!y.$ise){x=this.ez(a)
z=this.b
if(x>=z.length)return H.c(z,x)
v=z[x]
if(v!=null)return v
return this.iy(a,x)}throw H.a(P.co("structured clone of other type"))},
iy:function(a,b){var z,y,x,w
z=J.aB(a)
y=z.gk(a)
x=new Array(y)
C.a.n(this.b,b,x)
if(typeof y!=="number")return H.l(y)
w=0
for(;w<y;++w)C.a.n(x,w,this.c8(z.i(a,w)))
return x}},
mz:{"^":"h:10;a,b",
$2:function(a,b){this.a.a[a]=this.b.c8(b)}},
h8:{"^":"b;ea:a>,b,c",$iscd:1},
nF:{"^":"h:10;a",
$2:function(a,b){this.a[a]=b}},
h4:{"^":"my;a,b"},
iv:{"^":"cI;a,b",
gbC:function(){var z,y,x
z=this.b
y=H.aC(z,"w",0)
x=W.a4
return new H.jv(new H.lp(z,H.j(new P.iw(),{func:1,ret:P.L,args:[y]}),[y]),H.j(new P.ix(),{func:1,ret:x,args:[y]}),[y,x])},
n:function(a,b,c){var z
H.D(b)
H.d(c,"$isa4")
z=this.gbC()
J.hQ(z.b.$1(J.d7(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aL:function(a,b,c,d){throw H.a(P.z("Cannot fillRange on filtered list"))},
gk:function(a){return J.ar(this.gbC().a)},
i:function(a,b){var z=this.gbC()
return z.b.$1(J.d7(z.a,b))},
ga4:function(a){var z=P.jp(this.gbC(),!1,W.a4)
return new J.ay(z,z.length,0,[H.t(z,0)])},
$asw:function(){return[W.a4]},
$asn:function(){return[W.a4]},
$ase:function(){return[W.a4]}},
iw:{"^":"h:32;",
$1:function(a){return!!J.M(H.d(a,"$isN")).$isa4}},
ix:{"^":"h:28;",
$1:function(a){return H.k(H.d(a,"$isN"),"$isa4")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
mj:{"^":"b;$ti",
gbp:function(a){var z=this.a
if(typeof z!=="number")return z.m()
return H.x(z+this.c,H.t(this,0))},
gcM:function(a){var z=this.b
if(typeof z!=="number")return z.m()
return H.x(z+this.d,H.t(this,0))},
j:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b7(b,"$isao",[P.ab],"$asao")
if(!z)return!1
z=this.a
y=J.b9(b)
x=y.gb3(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbu(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.m()
w=H.t(this,0)
if(H.x(z+this.c,w)===y.gbp(b)){if(typeof x!=="number")return x.m()
z=H.x(x+this.d,w)===y.gcM(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.c8(z)
x=this.b
w=J.c8(x)
if(typeof z!=="number")return z.m()
v=H.t(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.m()
v=H.x(x+this.d,v)
return P.m3(P.cW(P.cW(P.cW(P.cW(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ao:{"^":"mj;b3:a>,bu:b>,aB:c>,az:d>,$ti",q:{
k4:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.D()
if(c<0)z=-c*0
else z=c
H.x(z,e)
if(typeof d!=="number")return d.D()
if(d<0)y=-d*0
else y=d
return new P.ao(a,b,z,H.x(y,e),[e])}}}}],["","",,P,{"^":"",bW:{"^":"u;",$isbW:1,"%":"SVGLength"},p7:{"^":"m5;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.d(c,"$isbW")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asw:function(){return[P.bW]},
$isn:1,
$asn:function(){return[P.bW]},
$ise:1,
$ase:function(){return[P.bW]},
$asB:function(){return[P.bW]},
"%":"SVGLengthList"},bZ:{"^":"u;",$isbZ:1,"%":"SVGNumber"},pm:{"^":"mg;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.d(c,"$isbZ")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asw:function(){return[P.bZ]},
$isn:1,
$asn:function(){return[P.bZ]},
$ise:1,
$ase:function(){return[P.bZ]},
$asB:function(){return[P.bZ]},
"%":"SVGNumberList"},ps:{"^":"u;0k:length=","%":"SVGPointList"},px:{"^":"fd;0a5:type}","%":"SVGScriptElement"},pF:{"^":"mx;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.K(c)
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asw:function(){return[P.i]},
$isn:1,
$asn:function(){return[P.i]},
$ise:1,
$ase:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},pI:{"^":"fd;0a5:type}","%":"SVGStyleElement"},fd:{"^":"a4;",
gcP:function(a){return new P.iv(a,new W.lC(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},c0:{"^":"u;",$isc0:1,"%":"SVGTransform"},pO:{"^":"mK;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.D(b)
H.d(c,"$isc0")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asw:function(){return[P.c0]},
$isn:1,
$asn:function(){return[P.c0]},
$ise:1,
$ase:function(){return[P.c0]},
$asB:function(){return[P.c0]},
"%":"SVGTransformList"},m4:{"^":"u+w;"},m5:{"^":"m4+B;"},mf:{"^":"u+w;"},mg:{"^":"mf+B;"},mw:{"^":"u+w;"},mx:{"^":"mw+B;"},mJ:{"^":"u+w;"},mK:{"^":"mJ+B;"}}],["","",,P,{"^":"",V:{"^":"b;",$isn:1,
$asn:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$iskM:1}}],["","",,P,{"^":"",oI:{"^":"u;0k:length=","%":"AudioBuffer"},eb:{"^":"ad;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},oJ:{"^":"lB;",
i:function(a,b){return P.b8(a.get(H.K(b)))},
v:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b8(y.value[1]))}},
gaA:function(a){var z=H.f([],[P.i])
this.v(a,new P.hV(z))
return z},
gk:function(a){return a.size},
n:function(a,b,c){throw H.a(P.z("Not supported"))},
$asaz:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},hV:{"^":"h:11;a",
$2:function(a,b){return C.a.h(this.a,a)}},hW:{"^":"eb;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},oK:{"^":"u;0cT:enabled}","%":"AudioTrack"},oL:{"^":"ad;0k:length=","%":"AudioTrackList"},hZ:{"^":"ad;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oM:{"^":"eb;0a5:type}","%":"BiquadFilterNode"},pp:{"^":"hZ;0k:length=","%":"OfflineAudioContext"},pq:{"^":"hW;0a5:type}","%":"Oscillator|OscillatorNode"},lB:{"^":"u+az;"}}],["","",,P,{"^":"",dD:{"^":"u;",
jw:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.M(g)
if(!!z.$iscd)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nG(g))
return}if(!!z.$iseB)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c9("Incorrect number or type of arguments"))},
jv:function(a,b,c,d,e,f,g){return this.jw(a,b,c,d,e,f,g,null,null,null)},
$isdD:1,
"%":"WebGLRenderingContext"},kT:{"^":"u;",$iskT:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",pC:{"^":"mt;",
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return P.b8(a.item(b))},
n:function(a,b,c){H.D(b)
H.d(c,"$isJ")
throw H.a(P.z("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$asw:function(){return[[P.J,,,]]},
$isn:1,
$asn:function(){return[[P.J,,,]]},
$ise:1,
$ase:function(){return[[P.J,,,]]},
$asB:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},ms:{"^":"u+w;"},mt:{"^":"ms+B;"}}],["","",,O,{"^":"",aP:{"^":"b;0a,0b,0c,0d,$ti",
cg:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
di:function(a,b,c){var z=H.aC(this,"aP",0)
H.j(b,{func:1,ret:P.L,args:[[P.n,z]]})
z={func:1,ret:-1,args:[P.o,[P.n,z]]}
H.j(a,z)
H.j(c,z)
this.b=b
this.c=a
this.d=c},
bx:function(a,b){return this.di(a,null,b)},
hq:function(a){var z
H.v(a,"$isn",[H.aC(this,"aP",0)],"$asn")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fk:function(a,b){var z
H.v(b,"$isn",[H.aC(this,"aP",0)],"$asn")
z=this.c
if(z!=null)z.$2(a,b)},
fm:function(a,b){var z
H.v(b,"$isn",[H.aC(this,"aP",0)],"$asn")
z=this.d
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
ga4:function(a){var z=this.a
return new J.ay(z,z.length,0,[H.t(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
aq:function(a,b,c){H.x(b,H.aC(this,"aP",0))
return C.a.aq(this.a,b,c)},
O:function(a,b){return this.aq(a,b,0)},
h:function(a,b){var z,y,x
z=H.aC(this,"aP",0)
H.x(b,z)
z=[z]
if(this.hq(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fk(x,H.f([b],z))}},
i:function(a,b){var z=this.a
if(b>=z.length)return H.c(z,b)
return z[b]},
$isn:1,
q:{
dh:function(a){var z=new O.aP([a])
z.cg(a)
return z}}},dv:{"^":"b;0a,0b",
gk:function(a){return this.a.length},
gA:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
fl:function(a){var z=this.b
if(!(z==null))z.J(a)},
aQ:function(){return this.fl(null)},
ga_:function(a){var z=this.a
if(z.length>0)return C.a.gaM(z)
else return V.ch()},
eT:function(a){var z=this.a
if(a==null)C.a.h(z,V.ch())
else C.a.h(z,a)
this.aQ()},
d7:function(){var z=this.a
if(z.length>0){z.pop()
this.aQ()}}}}],["","",,E,{"^":"",da:{"^":"b;"},ai:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a7:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scT:function(a,b){this.b=b},
dB:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.H();){y=z.d
if(y.f==null)y.dB()}},
sdj:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gA().a1(0,this.geN())
y=this.c
if(y!=null)y.gA().h(0,this.geN())
x=new D.E("shape",z,this.c,this,[F.aq])
x.b=!0
this.af(x)}},
sb8:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gA().a1(0,this.geO())
y=this.f
this.f=a
if(a!=null)a.gA().h(0,this.geO())
this.dB()
x=new D.E("technique",y,this.f,this,[O.cn])
x.b=!0
this.af(x)}},
sbk:function(a){var z,y
if(!J.R(this.r,a)){z=this.r
if(z!=null)z.gA().a1(0,this.geM())
if(a!=null)a.gA().h(0,this.geM())
this.r=a
y=new D.E("mover",z,a,this,[U.av])
y.b=!0
this.af(y)}},
bf:function(){var z,y
z=this.d
y=z!=null?V.f8(null,z.bf()):null
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.H();)y=V.f8(y,z.d.bf())
return y},
jq:function(a,b){var z,y,x,w
z=this.bf()
b=new V.aA(0,0,0).C(0,z.git())
y=z.d
x=z.e
if(x>y)y=x
x=z.f
if(x>y)y=x
if(y===0)return
w=a/y
this.bL(V.eX(w,w,w,1).l(0,V.eY(b.a,b.b,b.c)))},
jp:function(a){return this.jq(a,null)},
bL:function(a){var z=this.c
if(z!=null)z.bL(a)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.H();)z.d.bL(a)},
am:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ba(0,b,this):null
if(!J.R(y,this.x)){x=this.x
this.x=y
w=new D.E("matrix",x,y,this,[V.aV])
w.b=!0
this.af(w)}z=this.f
if(z!=null)z.am(0,b)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.H();)z.d.am(0,b)},
aN:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga_(z))
else C.a.h(z.a,y.l(0,z.ga_(z)))
z.aQ()
a.eU(this.f)
z=a.dy
x=(z&&C.a).gaM(z)
if(x!=null&&this.d!=null)x.eW(a,this)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.H();)z.d.aN(a)
a.eR()
a.dx.d7()},
gA:function(){var z=this.z
if(z==null){z=D.S()
this.z=z}return z},
af:function(a){var z=this.z
if(!(z==null))z.J(a)},
a3:function(){return this.af(null)},
j4:[function(a){H.d(a,"$isA")
this.e=null
this.af(a)},function(){return this.j4(null)},"kF","$1","$0","geN",0,2,3],
j5:[function(a){this.af(H.d(a,"$isA"))},function(){return this.j5(null)},"kG","$1","$0","geO",0,2,3],
j3:[function(a){this.af(H.d(a,"$isA"))},function(){return this.j3(null)},"kE","$1","$0","geM",0,2,3],
j1:[function(a){this.af(H.d(a,"$isA"))},function(){return this.j1(null)},"kC","$1","$0","geL",0,2,3],
kB:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isn",[E.ai],"$asn")
for(z=b.length,y=this.geL(),x={func:1,ret:-1,args:[D.A]},w=[x],v=0;v<b.length;b.length===z||(0,H.F)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.cc()
t.d=0
u.sa7(t)}t=u.ga7()
t.toString
H.j(y,x)
s=t.a
if(s==null){s=H.f([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a3()},"$2","gj0",8,0,12],
kD:[function(a,b){var z,y,x,w,v
H.v(b,"$isn",[E.ai],"$asn")
for(z=b.length,y=this.geL(),x=0;x<b.length;b.length===z||(0,H.F)(b),++x){w=b[x]
if(w!=null){if(w.ga7()==null){v=new D.cc()
v.d=0
w.sa7(v)}w.ga7().a1(0,y)}}this.a3()},"$2","gj2",8,0,12],
j:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isb4:1,
q:{
cC:function(a,b,c,d,e,f){var z,y
z=new E.ai()
z.a=d
z.b=!0
y=O.dh(E.ai)
z.y=y
y.bx(z.gj0(),z.gj2())
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
z.sdj(0,e)
z.sb8(f)
z.sbk(c)
return z}}},k8:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
fh:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aF(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dv()
y=[V.aV]
z.a=H.f([],y)
z.gA().h(0,new E.ka(this))
this.cy=z
z=new O.dv()
z.a=H.f([],y)
z.gA().h(0,new E.kb(this))
this.db=z
z=new O.dv()
z.a=H.f([],y)
z.gA().h(0,new E.kc(this))
this.dx=z
z=H.f([],[O.cn])
this.dy=z
C.a.h(z,null)
this.fr=new H.aQ(0,0,[P.i,A.dE])},
gjk:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga_(z)
y=this.db
y=z.l(0,y.ga_(y))
this.z=y
z=y}return z},
geS:function(){var z,y
z=this.ch
if(z==null){z=this.gjk()
y=this.dx
y=z.l(0,y.ga_(y))
this.ch=y
z=y}return z},
gf3:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.ga_(z)
y=this.dx
y=z.l(0,y.ga_(y))
this.cx=y
z=y}return z},
eU:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaM(z):a;(z&&C.a).h(z,y)},
eR:function(){var z=this.dy
if(z.length>1)z.pop()},
e4:function(a){var z=a.b
if(z.length===0)throw H.a(P.q("May not cache a shader with no name."))
if(this.fr.bN(0,z))throw H.a(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.n(0,z,a)},
q:{
k9:function(a,b){var z=new E.k8(a,b)
z.fh(a,b)
return z}}},ka:{"^":"h:16;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.z=null
z.ch=null}},kb:{"^":"h:16;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},kc:{"^":"h:16;a",
$1:function(a){var z
H.d(a,"$isA")
z=this.a
z.ch=null
z.cx=null}},kE:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a7:x@,0y,0z,0Q,0ch,0cx,0cy",
gA:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z},
fo:[function(a){var z
H.d(a,"$isA")
z=this.x
if(!(z==null))z.J(a)
this.jo()},function(){return this.fo(null)},"fn","$1","$0","gdr",0,2,3],
giM:function(){var z,y,x
z=Date.now()
y=C.d.a8(P.ev(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aF(z,!1)
return x/y},
dS:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.l(z)
x=C.i.c3(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.c3(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fi(C.q,this.gjn())}},
jo:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.j(new E.kG(this),{func:1,ret:-1,args:[P.ab]})
C.B.fP(z)
C.B.hC(z,W.hq(y,P.ab))}},"$0","gjn",0,0,7],
jl:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dS()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aF(w,!1)
x.y=P.ev(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aQ()
w=x.db
C.a.sk(w.a,0)
w.aQ()
w=x.dx
C.a.sk(w.a,0)
w.aQ()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aN(this.e)}}catch(v){z=H.ac(v)
y=H.bi(v)
P.cu("Error: "+H.m(z))
P.cu("Stack: "+H.m(y))
throw H.a(z)}},
q:{
kF:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$isde)return E.fh(a,!0,!0,!0,!1)
y=W.df(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcP(a).h(0,y)
w=E.fh(y,!0,!0,!0,!1)
w.a=a
return w},
fh:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kE()
y=P.jl(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.ca(a,"webgl",y)
x=H.d(x==null?C.l.ca(a,"experimental-webgl",y):x,"$isdD")
if(x==null)H.p(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.k9(x,a)
w=new T.kz(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.l5(a)
v=new X.jf()
v.c=new X.aX(!1,!1,!1)
v.d=P.jn(null,null,null,P.o)
w.b=v
v=new X.jG(w)
v.f=0
v.r=new V.a2(0,0)
v.x=new V.a2(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.jr(w)
v.r=0
v.x=new V.a2(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kJ(w)
v.e=0
v.f=new V.a2(0,0)
v.r=new V.a2(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.fb,P.b]])
w.z=v
u=document
t=W.aR
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.j(w.ghd(),s),!1,t))
v=w.z
r=W.ak
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.j(w.ghg(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.j(w.gha(),q),!1,r))
v=w.z
p=W.bV
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.j(w.ghi(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.j(w.ghh(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.j(w.ghl(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.j(w.ghn(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.j(w.ghm(),s),!1,t))
p=w.z
o=W.c1;(p&&C.a).h(p,W.a0(a,H.K(W.iq(a)),H.j(w.gho(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.j(w.ghe(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.j(w.ghf(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.j(w.ghp(),q),!1,r))
r=w.z
q=W.bB
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.j(w.ghw(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.j(w.ghu(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.j(w.ghv(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aF(Date.now(),!1)
z.cy=0
z.dS()
return z}}},kG:{"^":"h:37;a",
$1:function(a){var z
H.ox(a)
z=this.a
if(z.ch){z.ch=!1
z.jl()}}}}],["","",,Z,{"^":"",fN:{"^":"b;a,b",q:{
dQ:function(a,b,c){var z
H.v(c,"$ise",[P.o],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bG(c)),35044)
a.bindBuffer(b,null)
return new Z.fN(b,z)}}},ef:{"^":"da;a,b,c,d,e",
aG:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ac(y)
x=P.q('Failed to bind buffer attribute "'+J.as(this.a)+'": '+H.m(z))
throw H.a(x)}},
j:function(a){return"["+J.as(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}},fO:{"^":"b;a",$isoN:1},cA:{"^":"b;a,0b,c,d",
aj:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aG:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aG(a)},
f_:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aN:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.c(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
eP:function(a){this.aG(a)
this.aN(a)
this.f_(a)},
j:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.F)(x),++v)C.a.h(y,x[v].j(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.as(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.G(y,", ")+"\nAttrs:   "+C.a.G(u,", ")},
$iskx:1},eg:{"^":"b;0a",$iskx:1},cF:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bs(this.c)+"'")+"]"}},bf:{"^":"b;a",
gdk:function(a){var z,y
z=this.a
y=(z&$.$get$aN().a)!==0?3:0
if((z&$.$get$aM().a)!==0)y+=3
if((z&$.$get$aL().a)!==0)y+=3
if((z&$.$get$b0().a)!==0)y+=2
if((z&$.$get$b1().a)!==0)y+=3
if((z&$.$get$b5().a)!==0)y+=3
if((z&$.$get$bD().a)!==0)y+=4
if((z&$.$get$bg().a)!==0)++y
return(z&$.$get$b_().a)!==0?y+4:y},
ir:function(a){var z,y,x
z=$.$get$aN()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b5()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bg()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fM()},
O:function(a,b){var z,y
z=this.a
if((z&$.$get$aN().a)!==0)y=1
else y=0
if((z&$.$get$aM().a)!==0)++y
if((z&$.$get$aL().a)!==0)++y
if((z&$.$get$b0().a)!==0)++y
if((z&$.$get$b1().a)!==0)++y
if((z&$.$get$b5().a)!==0)++y
if((z&$.$get$bD().a)!==0)++y
if((z&$.$get$bg().a)!==0)++y;(z&$.$get$b_().a)!==0
return-1},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.f([],[P.i])
y=this.a
if((y&$.$get$aN().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b1().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b5().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bD().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bg().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.G(z,"|")},
q:{
aK:function(a){return new Z.bf(a)}}}}],["","",,D,{"^":"",dg:{"^":"b;"},cc:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.A]}
H.j(b,z)
y=this.a
if(y==null){z=H.f([],[z])
this.a=z}else z=y
C.a.h(z,b)},
a1:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[D.A]})
z=this.a
z=z==null?null:C.a.b1(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).a1(z,b)||!1}else y=!1
return y},
J:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.A(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.v(y,new D.iu(z))
return!0},
iC:function(){return this.J(null)},
jr:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.J(y)}}},
b7:function(a){return this.jr(a,!0,!1)},
q:{
S:function(){var z=new D.cc()
z.d=0
return z}}},iu:{"^":"h:38;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},A:{"^":"b;a,0b"},cG:{"^":"A;c,d,a,0b,$ti"},cH:{"^":"A;c,d,a,0b,$ti"},E:{"^":"A;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}}],["","",,O,{"^":"",
hy:function(a){var z=C.b.iS(a,"/")
if(z<=0)return a
return C.b.u(a,0,z)},
ho:function(a){var z,y,x
z=P.dC("([^\\s]+)",!0,!1)
$.hn=z
y=z.iI(a)
if(y==null)return H.f([],[P.i])
z=y.b
if(1>=z.length)return H.c(z,1)
x=z[1]
return H.f([x,C.b.dd(C.b.au(a,x.length))],[P.i])},
d_:function(a){var z,y,x
z=H.f([],[P.i])
y=P.dC("([^\\s]+)",!0,!1)
$.hn=y
y=new H.ls(y,a,0)
for(;y.H();){x=y.d.b
if(1>=x.length)return H.c(x,1)
C.a.h(z,x[1])}return z},
b6:function(a){var z,y,x,w
z=O.d_(a)
y=H.f([],[P.C])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,P.nK(z[w],null))}return y},
ci:function(a,b,c){return O.jH(a,b,!1)},
jH:function(a,b,c){var z=0,y=P.a9([P.J,P.i,O.cJ]),x,w=2,v,u=[],t,s,r,q,p,o,n,m
var $async$ci=P.aa(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
t=O.hy(a)
p=new O.nu(b)
p.b=new H.aQ(0,0,[P.i,O.cJ])
s=p
z=7
return P.am(W.eA(a,null,null),$async$ci)
case 7:r=e
z=8
return P.am(s.as(r,t,!1),$async$ci)
case 8:o=s.gdN()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
m=v
q=H.ac(m)
P.cu(a+": "+H.m(q))
o=P.q(a+": "+H.m(q))
throw H.a(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a7(x,y)
case 2:return P.a6(v,y)}})
return P.a8($async$ci,y)},
cj:function(a,b,c,d,e){return O.jM(a,b,c,d,!1)},
jM:function(a,b,c,d,e){var z=0,y=P.a9(E.ai),x,w=2,v,u=[],t,s,r,q,p,o,n,m,l
var $async$cj=P.aa(function(f,g){if(f===1){v=g
z=w}while(true)switch(z){case 0:w=4
t=O.hy(a)
p=new O.nv(b)
p.b=H.f([],[O.hh])
p.c=H.f([],[V.a2])
p.d=H.f([],[V.G])
p.e=new H.aQ(0,0,[P.i,O.cJ])
p.f=d
p.r=""
o=O.eU()
n=o.r
n.sS(0,new V.a1(0.35,0.35,0.35))
n=o.x
n.sS(0,new V.a1(0.65,0.65,0.65))
p.x=o
p.Q=E.cC(null,!0,null,"",null,null)
p.bJ()
s=p
z=7
return P.am(W.eA(a,null,null),$async$cj)
case 7:r=g
z=8
return P.am(s.as(r,t,!1),$async$cj)
case 8:o=s.giF()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
l=v
q=H.ac(l)
P.cu(a+": "+H.m(q))
o=P.q(a+": "+H.m(q))
throw H.a(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a7(x,y)
case 2:return P.a6(v,y)}})
return P.a8($async$cj,y)},
nu:{"^":"b;a,0dN:b<,0c",
as:function(a,b,c){var z=0,y=P.a9(null),x=this
var $async$as=P.aa(function(d,e){if(d===1)return P.a6(e,y)
while(true)switch(z){case 0:z=2
return P.am(x.ar(H.f(a.split("\n"),[P.i]),b,!1),$async$as)
case 2:return P.a7(null,y)}})
return P.a8($async$as,y)},
ar:function(a,b,c){H.v(a,"$ise",[P.i],"$ase")
return this.ji(a,b,!1)},
ji:function(a,b,c){var z=0,y=P.a9(null),x,w=2,v,u=[],t=this,s,r,q,p,o
var $async$ar=P.aa(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:s=0
case 3:if(!J.d4(s,a.length)){z=5
break}w=7
q=s
if(q>>>0!==q||q>=a.length){x=H.c(a,q)
z=1
break}z=10
return P.am(t.a6(a[q],b,!1),$async$ar)
case 10:w=2
z=9
break
case 7:w=6
o=v
r=H.ac(o)
q=P.q("Line "+H.m(J.cw(s,1))+": "+H.m(r))
throw H.a(q)
z=9
break
case 6:z=2
break
case 9:case 4:s=J.cw(s,1)
z=3
break
case 5:case 1:return P.a7(x,y)
case 2:return P.a6(v,y)}})
return P.a8($async$ar,y)},
a6:function(a,b,c){H.K(a)
return this.jg(a,b,!1)},
jg:function(a,b,c){var z=0,y=P.a9(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$a6=P.aa(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.e7(a,"#")
if(J.e6(s,0))a=J.e8(a,0,s)
a=J.d9(a)
if(J.ar(a)<=0){z=1
break}r=O.ho(a)
if(J.ar(r)<1){z=1
break}case 7:switch(J.W(r,0)){case"newmtl":z=9
break
case"Ka":z=10
break
case"Kd":z=11
break
case"Ks":z=12
break
case"Ns":z=13
break
case"d":z=14
break
case"Tr":z=15
break
case"map_Ka":z=16
break
case"map_Kd":z=17
break
case"map_Ks":z=18
break
case"map_d":z=19
break
case"map_bump":z=20
break
case"bump":z=21
break
default:z=22
break}break
case 9:p=J.W(r,1)
o=O.eU()
t.c=o
t.b.n(0,p,o)
z=1
break
case 10:n=O.b6(J.W(r,1))
t.c.r.sS(0,V.di(n))
z=1
break
case 11:n=O.b6(J.W(r,1))
t.c.x.sS(0,V.di(n))
z=1
break
case 12:n=O.b6(J.W(r,1))
t.c.z.sS(0,V.di(n))
z=1
break
case 13:n=O.b6(J.W(r,1))
p=n.length
if(p!==1)H.p(P.q("Shininess may only have 1 number."))
o=t.c.z
if(0>=p){x=H.c(n,0)
z=1
break}m=n[0]
o.toString
if(m==null)m=100
if(m<=0)o.e7(0)
else if(o.c===C.c){o.c=C.h
o.cf()
o.bI(100)
p=o.a
p.a=null
p.F(null)}o.bI(m)
z=1
break
case 14:n=O.b6(J.W(r,1))
p=n.length
if(p!==1)H.p(P.q("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.c(n,0)
z=1
break}o.sf2(0,n[0])
z=1
break
case 15:n=O.b6(J.W(r,1))
p=n.length
if(p!==1)H.p(P.q("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.c(n,0)
z=1
break}p=n[0]
if(typeof p!=="number"){x=H.l(p)
z=1
break}o.sf2(0,1-p)
z=1
break
case 16:z=23
return P.am(t.cz(J.W(r,1),b),$async$a6)
case 23:z=1
break
case 17:z=24
return P.am(t.cA(J.W(r,1),b),$async$a6)
case 24:z=1
break
case 18:z=25
return P.am(t.cB(J.W(r,1),b),$async$a6)
case 25:z=1
break
case 19:z=26
return P.am(t.cw(J.W(r,1),b),$async$a6)
case 26:z=1
break
case 20:z=27
return P.am(t.bD(J.W(r,1),b),$async$a6)
case 27:z=1
break
case 21:z=28
return P.am(t.bD(J.W(r,1),b),$async$a6)
case 28:z=1
break
case 22:z=1
break
case 8:w=2
z=6
break
case 4:w=3
k=v
q=H.ac(k)
p=P.q('Line: "'+H.m(a)+'": '+H.m(q))
throw H.a(p)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a7(x,y)
case 2:return P.a6(v,y)}})
return P.a8($async$a6,y)},
cz:function(a,b){var z=0,y=P.a9(null),x=this,w
var $async$cz=P.aa(function(c,d){if(c===1)return P.a6(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.r.sbr(x.a.bi(w))
return P.a7(null,y)}})
return P.a8($async$cz,y)},
cA:function(a,b){var z=0,y=P.a9(null),x=this,w
var $async$cA=P.aa(function(c,d){if(c===1)return P.a6(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.x.sbr(x.a.bi(w))
return P.a7(null,y)}})
return P.a8($async$cA,y)},
cB:function(a,b){var z=0,y=P.a9(null),x=this,w
var $async$cB=P.aa(function(c,d){if(c===1)return P.a6(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.z.sbr(x.a.bi(w))
return P.a7(null,y)}})
return P.a8($async$cB,y)},
cw:function(a,b){var z=0,y=P.a9(null),x=this,w
var $async$cw=P.aa(function(c,d){if(c===1)return P.a6(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.db.sbr(x.a.bi(w))
return P.a7(null,y)}})
return P.a8($async$cw,y)},
bD:function(a,b){var z=0,y=P.a9(null),x=this,w
var $async$bD=P.aa(function(c,d){if(c===1)return P.a6(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.Q.sbr(x.a.bi(w))
return P.a7(null,y)}})
return P.a8($async$bD,y)}},
hh:{"^":"b;a,0b"},
nv:{"^":"b;a,0b,0c,0d,0dN:e<,0f,0r,0x,0y,0z,0Q",
giF:function(){var z,y,x
z=this.Q
y=z.y.a
x=y.length
if(x===1){if(0>=x)return H.c(y,0)
return y[0]}return z},
as:function(a,b,c){var z=0,y=P.a9(null),x=this
var $async$as=P.aa(function(d,e){if(d===1)return P.a6(e,y)
while(true)switch(z){case 0:z=2
return P.am(x.ar(H.f(a.split("\n"),[P.i]),b,!1),$async$as)
case 2:return P.a7(null,y)}})
return P.a8($async$as,y)},
ar:function(a,b,c){H.v(a,"$ise",[P.i],"$ase")
return this.jj(a,b,!1)},
jj:function(a,b,c){var z=0,y=P.a9(null),x,w=2,v,u=[],t=this,s,r,q,p,o
var $async$ar=P.aa(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:s=0
case 3:if(!J.d4(s,a.length)){z=5
break}w=7
q=s
if(q>>>0!==q||q>=a.length){x=H.c(a,q)
z=1
break}z=10
return P.am(t.a6(a[q],b,!1),$async$ar)
case 10:w=2
z=9
break
case 7:w=6
o=v
r=H.ac(o)
q=P.q("Line "+H.m(J.cw(s,1))+": "+H.m(r))
throw H.a(q)
z=9
break
case 6:z=2
break
case 9:case 4:s=J.cw(s,1)
z=3
break
case 5:case 1:return P.a7(x,y)
case 2:return P.a6(v,y)}})
return P.a8($async$ar,y)},
a6:function(a,b,c){H.K(a)
return this.jh(a,b,!1)},
jh:function(a,b,c){var z=0,y=P.a9(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$a6=P.aa(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.e7(a,"#")
if(J.e6(s,0))a=J.e8(a,0,s)
a=J.d9(a)
if(J.ar(a)<=0){z=1
break}r=O.ho(a)
if(J.ar(r)<1){z=1
break}case 7:switch(J.W(r,0)){case"v":z=9
break
case"vt":z=10
break
case"vn":z=11
break
case"p":z=12
break
case"l":z=13
break
case"f":z=14
break
case"mtllib":z=15
break
case"usemtl":z=16
break
case"g":z=17
break
case"o":z=18
break
default:z=19
break}break
case 9:p=O.b6(J.W(r,1))
o=p.length
if(o<3)H.p(P.q("Positions must have at least 3 numbers."))
if(o>4)H.p(P.q("Positions must have at most than 4 numbers."))
if(o===4){if(3>=o){x=H.c(p,3)
z=1
break}o=p[3]
if(!$.r.$2(o,1))H.p(P.q("Currently, non-one w values in positions are not supported."))}o=t.b
n=p.length
if(0>=n){x=H.c(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.c(p,1)
z=1
break}l=p[1]
if(2>=n){x=H.c(p,2)
z=1
break}l=[m,l,p[2]]
l=new O.hh(new V.aA(l[0],l[1],l[2]))
l.b=H.f([],[F.I])
C.a.h(o,l)
z=1
break
case 10:p=O.b6(J.W(r,1))
o=p.length
if(o<2)H.p(P.q("Textures must have at least 2 numbers."))
if(o>3)H.p(P.q("Textures must have at most than 3 numbers."))
if(o===3){if(2>=o){x=H.c(p,2)
z=1
break}o=p[2]
if(!$.r.$2(o,0))H.p(P.q("Currently, non-zero z values in textures are not supported."))}o=t.c
n=p.length
if(0>=n){x=H.c(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.c(p,1)
z=1
break}m=[m,p[1]]
C.a.h(o,new V.a2(m[0],m[1]))
z=1
break
case 11:p=O.b6(J.W(r,1))
o=p.length
if(o!==3)H.p(P.q("Normals must have exactly 3 numbers."))
n=t.d
if(0>=o){x=H.c(p,0)
z=1
break}m=p[0]
if(1>=o){x=H.c(p,1)
z=1
break}l=p[1]
if(2>=o){x=H.c(p,2)
z=1
break}C.a.h(n,new V.G(m,l,p[2]))
z=1
break
case 12:t.hz(J.W(r,1))
z=1
break
case 13:t.hy(J.W(r,1))
z=1
break
case 14:t.hx(J.W(r,1))
z=1
break
case 15:z=20
return P.am(t.bE(J.W(r,1),b,!1),$async$a6)
case 20:z=1
break
case 16:o=J.W(r,1)
t.x=t.e.i(0,o)
t.bJ()
z=1
break
case 17:t.r=J.W(r,1)
t.bJ()
z=1
break
case 18:t.r=J.W(r,1)
t.bJ()
z=1
break
case 19:z=1
break
case 8:w=2
z=6
break
case 4:w=3
j=v
q=H.ac(j)
o=P.q('Line: "'+H.m(a)+'": '+H.m(q))
throw H.a(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.a7(x,y)
case 2:return P.a6(v,y)}})
return P.a8($async$a6,y)},
bJ:function(){var z,y,x
if(this.z==null||this.y.a.c.length!==0){z=F.al()
this.y=z
z=E.cC(null,!0,null,"",z,null)
this.z=z
this.Q.y.h(0,z)
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x)C.a.sk(z[x].b,0)}this.z.sb8(this.x)
this.z.a=this.r},
ci:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.split("/")
y=z.length
if(0>=y)return H.c(z,0)
x=P.bj(z[0],null,null)
w=this.b.length
if(typeof x!=="number")return x.D()
if(x<-w||x>w||x===0)throw H.a(P.q("The position index, "+x+", was out of range [-"+w+".."+w+"] or 0."))
if(x<0)x=w+x+1;--x
if(y>1){v=z[1]
if(v!=null&&v.length>0){u=P.bj(v,null,null)
t=this.c
w=t.length
if(typeof u!=="number")return u.D()
if(u<-w||u>w||u===0)throw H.a(P.q("The texture index, "+u+", was out of range [-"+w+".."+w+"] or 0."))
if(u<0)u=w+u+1
s=u-1
if(s<0||s>=w)return H.c(t,s)
r=t[s]}else r=null}else r=null
if(y>2){v=z[2]
if(v!=null&&v.length>0){q=P.bj(v,null,null)
y=this.d
w=y.length
if(typeof q!=="number")return q.D()
if(q<-w||q>w||q===0)throw H.a(P.q("The normal index, "+q+", was out of range [-"+w+".."+w+"] or 0."))
if(q<0)q=w+q+1
t=q-1
if(t<0||t>=w)return H.c(y,t)
p=y[t]}else p=null}else p=null
y=this.b
if(x<0||x>=y.length)return H.c(y,x)
o=y[x]
for(y=o.b,t=y.length,n=0;n<y.length;y.length===t||(0,H.F)(y),++n){m=y[n]
if(J.R(m.y,r)&&J.R(m.r,p))return m}m=F.bC(null,null,null,null,null,null,null,null,0)
m.saa(0,o.a)
if(!J.R(m.y,r)){m.y=r
y=m.a
if(y!=null)y.a3()}m.sbl(p)
this.y.a.h(0,m)
C.a.h(o.b,m)
return m},
hz:function(a){var z,y,x,w
z=O.d_(a)
y=H.f([],[F.I])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,this.ci(z[w]))}this.y.b.iq(y)},
hy:function(a){var z,y,x,w
z=O.d_(a)
y=H.f([],[F.I])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,this.ci(z[w]))}this.y.c.ip(y)},
hx:function(a){var z,y,x,w
z=O.d_(a)
y=H.f([],[F.I])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,this.ci(z[w]))}this.y.d.io(y)},
bE:function(a,b,c){var z=0,y=P.a9(null),x=this,w
var $async$bE=P.aa(function(d,e){if(d===1)return P.a6(e,y)
while(true)switch(z){case 0:z=2
return P.am(O.ci(b+"/"+a,x.a,!1),$async$bE)
case 2:w=e
x.e.il(0,w)
return P.a7(null,y)}})
return P.a8($async$bE,y)}}}],["","",,X,{"^":"",eh:{"^":"b;a,b",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.B(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.m(this.a)},
q:{"^":"oP<"}},eL:{"^":"b;a,b",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eL))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.B(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.m(this.a)}},eM:{"^":"A;c,a,0b"},jf:{"^":"b;0a,0b,0c,0d",
jd:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eM(a,this)
y.b=!0
return z.J(y)},
j9:function(a){var z,y
this.c=a.b
this.d.a1(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eM(a,this)
y.b=!0
return z.J(y)}},eS:{"^":"cL;x,y,c,d,e,a,0b"},jr:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aE:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.aF(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=y.a
if(typeof t!=="number")return t.m()
y=y.b
if(typeof y!=="number")return y.m()
s=new V.a2(t+x*w,y+v*u)
u=this.a.gb0()
r=new X.bX(a,new V.a2(0,0),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
d6:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.J(this.aE(a,b))
return!0},
bn:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.f8()
if(typeof z!=="number")return z.c9()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.aE(a,b))
return!0},
bm:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.aE(a,b))
return!0},
je:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb0()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.dw(new V.Z(v*u,t*s),y,x,new P.aF(w,!1),this)
w.b=!0
z.J(w)
return!0},
hk:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aF(Date.now(),!1)
y=this.f
x=new X.eS(c,a,this.a.gb0(),b,z,this)
x.b=!0
y.J(x)
this.y=z
this.x=new V.a2(0,0)}},aX:{"^":"b;a,b,c",
B:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aX))return!1
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
return z+(this.c?"Shift+":"")}},bX:{"^":"cL;x,y,z,Q,ch,c,d,e,a,0b"},jG:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
co:function(a,b,c){var z,y,x
z=new P.aF(Date.now(),!1)
y=this.a.gb0()
x=new X.bX(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d6:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.J(this.co(a,b,!0))
return!0},
bn:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.f8()
if(typeof z!=="number")return z.c9()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.co(a,b,!0))
return!0},
bm:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.co(a,b,!1))
return!0},
jf:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb0()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.dw(new V.Z(w*v,u*t),y,b,new P.aF(x,!1),this)
x.b=!0
z.J(x)
return!0},
gec:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
gc7:function(){var z=this.c
if(z==null){z=D.S()
this.c=z}return z},
geK:function(){var z=this.d
if(z==null){z=D.S()
this.d=z}return z}},dw:{"^":"cL;x,c,d,e,a,0b"},cL:{"^":"A;"},fm:{"^":"cL;x,y,z,Q,ch,c,d,e,a,0b"},kJ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aE:function(a,b){var z,y,x,w
H.v(a,"$ise",[V.a2],"$ase")
z=new P.aF(Date.now(),!1)
y=a.length>0?a[0]:new V.a2(0,0)
x=this.a.gb0()
w=new X.fm(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
jc:function(a){var z
H.v(a,"$ise",[V.a2],"$ase")
z=this.b
if(z==null)return!1
z.J(this.aE(a,!0))
return!0},
ja:function(a){var z
H.v(a,"$ise",[V.a2],"$ase")
z=this.c
if(z==null)return!1
z.J(this.aE(a,!0))
return!0},
jb:function(a){var z
H.v(a,"$ise",[V.a2],"$ase")
z=this.d
if(z==null)return!1
z.J(this.aE(a,!1))
return!0}},l5:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gb0:function(){var z=this.a
return V.f6(0,0,(z&&C.l).ge8(z).c,C.l.ge8(z).d)},
dH:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eL(z,new X.aX(y,a.altKey,a.shiftKey))},
aW:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aX(y,a.altKey,a.shiftKey)},
cF:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aX(y,a.altKey,a.shiftKey)},
aF:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.C()
v=z.top
if(typeof x!=="number")return x.C()
return new V.a2(y-w,x-v)},
bd:function(a){return new V.Z(a.movementX,a.movementY)},
cC:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.a2])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.F)(x),++v){u=x[v]
t=C.i.at(u.pageX)
C.i.at(u.pageY)
s=z.left
C.i.at(u.pageX)
C.a.h(y,new V.a2(t-s,C.i.at(u.pageY)-z.top))}return y},
aC:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.eh(z,new X.aX(y,a.altKey,a.shiftKey))},
cq:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.C()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.C()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
k0:[function(a){this.f=!0},"$1","ghg",4,0,9],
jV:[function(a){this.f=!1},"$1","gha",4,0,9],
jY:[function(a){H.d(a,"$isaR")
if(this.f&&this.cq(a))a.preventDefault()},"$1","ghd",4,0,8],
k6:[function(a){var z
H.d(a,"$isbV")
if(!this.f)return
z=this.dH(a)
if(this.b.jd(z))a.preventDefault()},"$1","ghi",4,0,22],
k5:[function(a){var z
H.d(a,"$isbV")
if(!this.f)return
z=this.dH(a)
if(this.b.j9(z))a.preventDefault()},"$1","ghh",4,0,22],
k8:[function(a){var z,y,x,w
H.d(a,"$isaR")
z=this.a
z.focus()
this.f=!0
this.aW(a)
if(this.x){y=this.aC(a)
x=this.bd(a)
if(this.d.d6(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aC(a)
w=this.aF(a)
if(this.c.d6(y,w))a.preventDefault()},"$1","ghl",4,0,8],
ka:[function(a){var z,y,x
H.d(a,"$isaR")
this.aW(a)
z=this.aC(a)
if(this.x){y=this.bd(a)
if(this.d.bn(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bn(z,x))a.preventDefault()},"$1","ghn",4,0,8],
k_:[function(a){var z,y,x
H.d(a,"$isaR")
if(!this.cq(a)){this.aW(a)
z=this.aC(a)
if(this.x){y=this.bd(a)
if(this.d.bn(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bn(z,x))a.preventDefault()}},"$1","ghf",4,0,8],
k9:[function(a){var z,y,x
H.d(a,"$isaR")
this.aW(a)
z=this.aC(a)
if(this.x){y=this.bd(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bm(z,x))a.preventDefault()},"$1","ghm",4,0,8],
jZ:[function(a){var z,y,x
H.d(a,"$isaR")
if(!this.cq(a)){this.aW(a)
z=this.aC(a)
if(this.x){y=this.bd(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bm(z,x))a.preventDefault()}},"$1","ghe",4,0,8],
kb:[function(a){var z,y
H.d(a,"$isc1")
this.aW(a)
z=new V.Z((a&&C.A).giA(a),C.A.giB(a)).w(0,180)
if(this.x){if(this.d.je(z))a.preventDefault()
return}if(this.r)return
y=this.aF(a)
if(this.c.jf(z,y))a.preventDefault()},"$1","gho",4,0,63],
kc:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aC(this.y)
v=this.aF(this.y)
this.d.hk(w,v,x)}},"$1","ghp",4,0,9],
ki:[function(a){var z
H.d(a,"$isbB")
this.a.focus()
this.f=!0
this.cF(a)
z=this.cC(a)
if(this.e.jc(z))a.preventDefault()},"$1","ghw",4,0,17],
kg:[function(a){var z
H.d(a,"$isbB")
this.cF(a)
z=this.cC(a)
if(this.e.ja(z))a.preventDefault()},"$1","ghu",4,0,17],
kh:[function(a){var z
H.d(a,"$isbB")
this.cF(a)
z=this.cC(a)
if(this.e.jb(z))a.preventDefault()},"$1","ghv",4,0,17]}}],["","",,D,{"^":"",ik:{"^":"b;",$isaf:1,$isb4:1},af:{"^":"b;",$isb4:1},jg:{"^":"aP;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gA:function(){var z=this.Q
if(z==null){z=D.S()
this.Q=z}return z},
ds:function(a){var z=this.Q
if(!(z==null))z.J(a)},
hj:[function(a){var z=this.ch
if(!(z==null))z.J(a)},function(){return this.hj(null)},"k7","$1","$0","gdO",0,2,3],
kd:[function(a){var z,y,x
H.v(a,"$isn",[D.af],"$asn")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.F)(a),++y){x=a[y]
if(x==null||this.fK(x))return!1}return!0},"$1","ghr",4,0,43],
jS:[function(a,b){var z,y,x,w,v
z=D.af
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gdO(),w=0;w<b.length;b.length===y||(0,H.F)(b),++w){v=H.d(b[w],"$isaf")
v.gA().h(0,x)}z=new D.cG(a,b,this,[z])
z.b=!0
this.ds(z)},"$2","gh7",8,0,24],
kf:[function(a,b){var z,y,x,w,v
z=D.af
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gdO(),w=0;w<b.length;b.length===y||(0,H.F)(b),++w){v=H.d(b[w],"$isaf")
v.gA().a1(0,x)}z=new D.cH(a,b,this,[z])
z.b=!0
this.ds(z)},"$2","ght",8,0,24],
fK:function(a){var z=C.a.b1(this.e,a)
return z},
$asn:function(){return[D.af]},
$asaP:function(){return[D.af]}},jQ:{"^":"b;",$isaf:1,$isb4:1},kq:{"^":"b;",$isaf:1,$isb4:1},kB:{"^":"b;",$isaf:1,$isb4:1},kC:{"^":"b;",$isaf:1,$isb4:1},kD:{"^":"b;",$isaf:1,$isb4:1}}],["","",,V,{"^":"",
oR:[function(a,b){if(typeof b!=="number")return b.C()
if(typeof a!=="number")return H.l(a)
return Math.abs(b-a)<=1e-9},"$2","jD",8,0,41],
oE:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.bv(a-b,z)
return(a<0?a+z:a)+b},
U:function(a,b,c){if(a==null)return C.b.al("null",c)
return C.b.al(C.i.eZ($.r.$2(a,0)?0:a,b),c+b+1)},
bM:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$ise",[P.C],"$ase")
z=H.f([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.F)(a),++w){v=V.U(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.c(z,u)
C.a.n(z,u,C.b.al(z[u],x))}return z},
e4:function(a,b){return C.i.jx(Math.pow(b,C.J.c3(Math.log(H.bK(a))/Math.log(b))))},
a1:{"^":"b;a,b,c",
m:function(a,b){var z,y,x
z=this.a+b.a
y=this.b+b.b
x=this.c+b.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.a1(z,y,x)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"},
q:{
di:function(a){var z,y,x
H.v(a,"$ise",[P.C],"$ase")
z=J.aB(a)
y=z.i(a,0)
x=z.i(a,1)
z=z.i(a,2)
if(typeof y!=="number")return y.D()
if(y<0)y=0
else if(y>1)y=1
if(typeof x!=="number")return x.D()
if(x<0)x=0
else if(x>1)x=1
if(typeof z!=="number")return z.D()
if(z<0)z=0
else if(z>1)z=1
return new V.a1(y,x,z)},
i7:function(a,b,c){var z,y,x,w,v,u,t,s
a*=6
z=C.i.c3(a)
y=a-z
x=b*(1-c)
w=b*(1-c*y)
v=b*(1-c*(1-y))
switch(z){case 0:if(b<0)u=0
else u=b>1?1:b
if(v<0)t=0
else t=v>1?1:v
if(x<0)s=0
else s=x>1?1:x
return new V.a1(u,t,s)
case 1:if(w<0)u=0
else u=w>1?1:w
if(b<0)t=0
else t=b>1?1:b
if(x<0)s=0
else s=x>1?1:x
return new V.a1(u,t,s)
case 2:if(x<0)u=0
else u=x>1?1:x
if(b<0)t=0
else t=b>1?1:b
if(v<0)s=0
else s=v>1?1:v
return new V.a1(u,t,s)
case 3:if(x<0)u=0
else u=x>1?1:x
if(w<0)t=0
else t=w>1?1:w
if(b<0)s=0
else s=b>1?1:b
return new V.a1(u,t,s)
case 4:if(v<0)u=0
else u=v>1?1:v
if(x<0)t=0
else t=x>1?1:x
if(b<0)s=0
else s=b>1?1:b
return new V.a1(u,t,s)
default:if(b<0)u=0
else u=b>1?1:b
if(x<0)t=0
else t=x>1?1:x
if(w<0)s=0
else s=w>1?1:w
return new V.a1(u,t,s)}}}},
X:{"^":"b;a,b,c,d",
m:function(a,b){var z,y,x,w
z=C.i.m(this.a,b.gb5())
y=C.i.m(this.b,b.gaP())
x=C.i.m(this.c,b.gaY())
w=C.i.m(this.d,b.gku(b))
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
if(w<0)w=0
else if(w>1)w=1
return new V.X(z,y,x,w)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}},
eW:{"^":"b;a,b,c,d,e,f,r,x,y",
ab:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.C])
return z},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eW))return!1
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
z=[P.C]
y=V.bM(H.f([this.a,this.d,this.r],z),3,0)
x=V.bM(H.f([this.b,this.e,this.x],z),3,0)
w=V.bM(H.f([this.c,this.f,this.y],z),3,0)
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
aV:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ab:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.C])
return z},
eI:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.l(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.l(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.l(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.l(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.l(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.l(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.l(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.l(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.r.$2(a2,0))return V.ch()
a3=1/a2
a4=-w
a5=-i
return V.aW((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.l(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.l(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.l(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
if(typeof s!=="number")return H.l(s)
r=a7.b
if(typeof r!=="number")return H.l(r)
q=a7.f
if(typeof q!=="number")return H.l(q)
p=a7.z
if(typeof p!=="number")return H.l(p)
o=a7.cy
if(typeof o!=="number")return H.l(o)
n=a7.c
if(typeof n!=="number")return H.l(n)
m=a7.r
if(typeof m!=="number")return H.l(m)
l=a7.Q
if(typeof l!=="number")return H.l(l)
k=a7.db
if(typeof k!=="number")return H.l(k)
j=a7.d
if(typeof j!=="number")return H.l(j)
i=a7.x
if(typeof i!=="number")return H.l(i)
h=a7.ch
if(typeof h!=="number")return H.l(h)
g=a7.dx
if(typeof g!=="number")return H.l(g)
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
return V.aW(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.l(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.l(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.l(u)
t=this.e
if(typeof t!=="number")return t.l()
s=this.f
if(typeof s!=="number")return s.l()
r=this.r
if(typeof r!=="number")return r.l()
q=this.y
if(typeof q!=="number")return q.l()
p=this.z
if(typeof p!=="number")return p.l()
o=this.Q
if(typeof o!=="number")return o.l()
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.l(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.l(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.l(u)
t=this.d
if(typeof t!=="number")return H.l(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.l(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.l(l)
return new V.aA(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aV))return!1
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
j:function(a){return this.P()},
eB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.C]
y=V.bM(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bM(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bM(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bM(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
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
E:function(a){return this.eB(a,3,0)},
P:function(){return this.eB("",3,0)},
q:{
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ch:function(){return V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eY:function(a,b,c){return V.aW(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eX:function(a,b,c,d){return V.aW(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)}}},
a2:{"^":"b;a,b",
m:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.l(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.l(w)
return new V.a2(z+y,x+w)},
C:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.C()
if(typeof y!=="number")return H.l(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.C()
if(typeof w!=="number")return H.l(w)
return new V.a2(z-y,x-w)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}},
aA:{"^":"b;a,b,c",
m:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.l(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.l(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.l(u)
return new V.aA(z+y,x+w,v+u)},
C:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.C()
if(typeof y!=="number")return H.l(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.C()
if(typeof w!=="number")return H.l(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.C()
if(typeof u!=="number")return H.l(u)
return new V.aA(z-y,x-w,v-u)},
w:function(a,b){var z,y,x
if($.r.$2(b,0))return new V.aA(0,0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
x=this.c
if(typeof x!=="number")return x.w()
return new V.aA(z/b,y/b,x/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aA))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}},
f5:{"^":"b;a,b,c,d",
gae:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f5))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"},
q:{
f6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f5(a,b,c,d)}}},
cP:{"^":"b;a,b,c,d,e,f",
git:function(){var z,y,x
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
x=this.c
if(typeof x!=="number")return x.m()
return new V.aA(z+this.d/2,y+this.e/2,x+this.f/2)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cP))return!1
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
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+", "+V.U(this.e,3,0)+", "+V.U(this.f,3,0)+"]"},
q:{
f7:function(a,b,c,d,e,f){return new V.cP(a,b,c,d,e,f)},
f8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
if(a==null)return b
if(b==null)return a
z=a.a
y=b.a
x=Math.min(H.bK(z),H.bK(y))
w=a.b
v=b.b
u=Math.min(H.bK(w),H.bK(v))
t=a.c
s=b.c
r=Math.min(H.bK(t),H.bK(s))
q=a.d
if(typeof z!=="number")return z.m()
p=b.d
if(typeof y!=="number")return y.m()
o=Math.max(z+q,y+p)
p=a.e
if(typeof w!=="number")return w.m()
y=b.e
if(typeof v!=="number")return v.m()
n=Math.max(w+p,v+y)
y=a.f
if(typeof t!=="number")return t.m()
v=b.f
if(typeof s!=="number")return s.m()
return new V.cP(x,u,r,o-x,n-u,Math.max(t+y,s+v)-r)}}},
Z:{"^":"b;a,b",
iU:[function(a){return Math.sqrt(this.L(this))},"$0","gk",1,0,25],
L:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.l(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.l(w)
return z*y+x*w},
m:function(a,b){var z,y,x
z=this.a
y=b.gaJ(b)
if(typeof z!=="number")return z.m()
y=C.i.m(z,y)
z=this.b
x=b.gaK(b)
if(typeof z!=="number")return z.m()
return new V.Z(y,C.i.m(z,x))},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.Z(z*b,y*b)},
w:function(a,b){var z,y
if($.r.$2(b,0))return new V.Z(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.Z(z/b,y/b)},
B:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
iU:[function(a){return Math.sqrt(this.L(this))},"$0","gk",1,0,25],
L:function(a){var z,y,x,w,v,u
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.l(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.l(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.l(u)
return z*y+x*w+v*u},
aI:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.l(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.l(w)
v=a.a
if(typeof v!=="number")return H.l(v)
u=this.a
if(typeof u!=="number")return u.l()
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
m:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.l(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.l(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.l(u)
return new V.G(z+y,x+w,v+u)},
M:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.M()
y=this.b
if(typeof y!=="number")return y.M()
x=this.c
if(typeof x!=="number")return x.M()
return new V.G(-z,-y,-x)},
w:function(a,b){var z,y,x
if($.r.$2(b,0))return new V.G(0,0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
x=this.c
if(typeof x!=="number")return x.w()
return new V.G(z/b,y/b,x/b)},
eJ:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
B:function(a,b){var z
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
j:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}}],["","",,U,{"^":"",i8:{"^":"dg;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cj:function(a){var z=V.oE(a,this.c,this.b)
return z},
gA:function(){var z=this.y
if(z==null){z=D.S()
this.y=z}return z},
U:function(a){var z=this.y
if(!(z==null))z.J(a)},
sde:function(a,b){},
sd3:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cj(z)}z=new D.E("maximumLocation",y,this.b,this,[P.C])
z.b=!0
this.U(z)}},
sd5:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cj(z)}z=new D.E("minimumLocation",y,this.c,this,[P.C])
z.b=!0
this.U(z)}},
saa:function(a,b){var z,y
b=this.cj(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.E("location",y,b,this,[P.C])
z.b=!0
this.U(z)}},
sd4:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.E("maximumVelocity",y,a,this,[P.C])
z.b=!0
this.U(z)}},
sW:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.E("velocity",x,a,this,[P.C])
z.b=!0
this.U(z)}},
scR:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.E("dampening",y,a,this,[P.C])
z.b=!0
this.U(z)}},
am:function(a,b){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.saa(0,this.d+y*b)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sW(y)}},
q:{
dk:function(){var z=new U.i8()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},em:{"^":"av;0a,0b",
gA:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
ba:function(a,b,c){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.em))return!1
return J.R(this.a,b.a)},
j:function(a){return"Constant: "+this.a.E("          ")}},ez:{"^":"aP;0e,0f,0r,0a,0b,0c,0d",
gA:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
U:[function(a){var z
H.d(a,"$isA")
z=this.e
if(!(z==null))z.J(a)},function(){return this.U(null)},"an","$1","$0","gaU",0,2,3],
jR:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.av
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gaU(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.F)(b),++u){t=b[u]
if(t!=null){s=t.gA()
s.toString
H.j(x,w)
r=s.a
if(r==null){r=H.f([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cG(a,b,this,[z])
z.b=!0
this.U(z)},"$2","gh6",8,0,26],
ke:[function(a,b){var z,y,x,w,v
z=U.av
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gaU(),w=0;w<b.length;b.length===y||(0,H.F)(b),++w){v=b[w]
if(v!=null)v.gA().a1(0,x)}z=new D.cH(a,b,this,[z])
z.b=!0
this.U(z)},"$2","ghs",8,0,26],
ba:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.D()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ay(z,z.length,0,[H.t(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.ba(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.ch():x
z=this.e
if(!(z==null))z.b7(0)}return this.f},
B:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ez))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.c(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.c(w,y)
if(!J.R(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asn:function(){return[U.av]},
$asaP:function(){return[U.av]},
$isav:1},av:{"^":"dg;"},l6:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gA:function(){var z=this.cy
if(z==null){z=D.S()
this.cy=z}return z},
U:[function(a){var z
H.d(a,"$isA")
z=this.cy
if(!(z==null))z.J(a)},function(){return this.U(null)},"an","$1","$0","gaU",0,2,3],
be:function(a){if(this.a!=null)return!1
this.a=a
a.c.gec().h(0,this.gcr())
this.a.c.geK().h(0,this.gcs())
this.a.c.gc7().h(0,this.gct())
return!0},
h0:[function(a){H.d(a,"$isA")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcr",4,0,5],
h1:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isA"),"$isbX")
if(!this.y)return
if(this.x){z=a.d.C(0,a.y)
z=new V.Z(z.a,z.b)
z=z.L(z)
y=this.r
if(typeof y!=="number")return H.l(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.C(0,a.y)
z=new V.Z(y.a,y.b).l(0,2).w(0,z.gae())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.l(x)
y.sW(z*10*x)}else{z=a.c
y=a.d
x=y.C(0,a.y)
w=new V.Z(x.a,x.b).l(0,2).w(0,z.gae())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.l(u)
t=this.z
if(typeof t!=="number")return H.l(t)
x.saa(0,-v*u+t)
this.b.sW(0)
y=y.C(0,a.z)
this.Q=new V.Z(y.a,y.b).l(0,2).w(0,z.gae())}this.an()},"$1","gcs",4,0,5],
h2:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.L(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.l(x)
z.sW(y*10*x)
this.an()}},"$1","gct",4,0,5],
ba:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.D()
if(z<y){this.ch=y
x=b.y
this.b.am(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aW(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isav:1},l7:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gA:function(){var z=this.fx
if(z==null){z=D.S()
this.fx=z}return z},
U:[function(a){var z
H.d(a,"$isA")
z=this.fx
if(!(z==null))z.J(a)},function(){return this.U(null)},"an","$1","$0","gaU",0,2,3],
be:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gec().h(0,this.gcr())
this.a.c.geK().h(0,this.gcs())
this.a.c.gc7().h(0,this.gct())
z=this.a.d
y=z.f
if(y==null){y=D.S()
z.f=y
z=y}else z=y
z.h(0,this.gfY())
z=this.a.d
y=z.d
if(y==null){y=D.S()
z.d=y
z=y}else z=y
z.h(0,this.gfZ())
z=this.a.e
y=z.b
if(y==null){y=D.S()
z.b=y
z=y}else z=y
z.h(0,this.ghQ())
z=this.a.e
y=z.d
if(y==null){y=D.S()
z.d=y
z=y}else z=y
z.h(0,this.ghP())
z=this.a.e
y=z.c
if(y==null){y=D.S()
z.c=y
z=y}else z=y
z.h(0,this.ghO())
return!0},
ax:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.Z(z,y)},
h0:[function(a){a=H.k(H.d(a,"$isA"),"$isbX")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcr",4,0,5],
h1:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isA"),"$isbX")
if(!this.cx)return
if(this.ch){z=a.d.C(0,a.y)
z=new V.Z(z.a,z.b)
z=z.L(z)
y=this.Q
if(typeof y!=="number")return H.l(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.C(0,a.y)
z=this.ax(new V.Z(y.a,y.b).l(0,2).w(0,z.gae()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.l(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.l(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.C(0,a.y)
w=this.ax(new V.Z(x.a,x.b).l(0,2).w(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.l(u)
t=this.cy
if(typeof t!=="number")return H.l(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.l(v)
x=this.db
if(typeof x!=="number")return H.l(x)
t.saa(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.C(0,a.z)
this.dx=this.ax(new V.Z(y.a,y.b).l(0,2).w(0,z.gae()))}this.an()},"$1","gcs",4,0,5],
h2:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.L(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.l(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.l(z)
x.sW(-y*10*z)
this.an()}},"$1","gct",4,0,5],
jN:[function(a){if(H.k(H.d(a,"$isA"),"$iseS").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfY",4,0,5],
jO:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isA"),"$isbX")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.C(0,a.y)
w=this.ax(new V.Z(x.a,x.b).l(0,2).w(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.l(u)
t=this.cy
if(typeof t!=="number")return H.l(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.l(v)
x=this.db
if(typeof x!=="number")return H.l(x)
t.saa(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.C(0,a.z)
this.dx=this.ax(new V.Z(y.a,y.b).l(0,2).w(0,z.gae()))
this.an()},"$1","gfZ",4,0,5],
ko:[function(a){H.d(a,"$isA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghQ",4,0,5],
kn:[function(a){var z,y,x,w,v,u,t
a=H.k(H.d(a,"$isA"),"$isfm")
if(!this.cx)return
if(this.ch){z=a.d.C(0,a.y)
z=new V.Z(z.a,z.b)
z=z.L(z)
y=this.Q
if(typeof y!=="number")return H.l(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.C(0,a.y)
z=this.ax(new V.Z(y.a,y.b).l(0,2).w(0,z.gae()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.l(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.l(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.C(0,a.y)
w=this.ax(new V.Z(x.a,x.b).l(0,2).w(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.l(u)
t=this.cy
if(typeof t!=="number")return H.l(t)
x.saa(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.l(v)
x=this.db
if(typeof x!=="number")return H.l(x)
t.saa(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.C(0,a.z)
this.dx=this.ax(new V.Z(y.a,y.b).l(0,2).w(0,z.gae()))}this.an()},"$1","ghP",4,0,5],
km:[function(a){var z,y,x
H.d(a,"$isA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.L(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.l(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.l(z)
x.sW(-y*10*z)
this.an()}},"$1","ghO",4,0,5],
ba:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.D()
if(z<y){this.dy=y
x=b.y
this.c.am(0,x)
this.b.am(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aW(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.aW(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isav:1},l8:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gA:function(){var z=this.r
if(z==null){z=D.S()
this.r=z}return z},
U:function(a){var z=this.r
if(!(z==null))z.J(a)},
be:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.S()
z.e=y
z=y}else z=y
y=this.gh3()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.S()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jP:[function(a){var z,y,x,w
H.d(a,"$isA")
if(!J.R(this.b,this.a.b.c))return
H.k(a,"$isdw")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.E("zoom",z,w,this,[P.C])
z.b=!0
this.U(z)}},"$1","gh3",4,0,5],
ba:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.eX(x,x,x,1)}return this.f},
$isav:1}}],["","",,M,{"^":"",is:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aR:[function(a){var z
H.d(a,"$isA")
z=this.x
if(!(z==null))z.J(a)},function(){return this.aR(null)},"jC","$1","$0","gav",0,2,3],
jW:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.ai
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gav(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.F)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.cc()
s.d=0
t.sa7(s)}s=t.ga7()
s.toString
H.j(x,w)
r=s.a
if(r==null){r=H.f([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cG(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","ghb",8,0,12],
jX:[function(a,b){var z,y,x,w,v,u
z=E.ai
H.v(b,"$isn",[z],"$asn")
for(y=b.length,x=this.gav(),w=0;w<b.length;b.length===y||(0,H.F)(b),++w){v=b[w]
if(v!=null){if(v.ga7()==null){u=new D.cc()
u.d=0
v.sa7(u)}v.ga7().a1(0,x)}}z=new D.cH(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","ghc",8,0,12],
sb8:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gA().a1(0,this.gav())
y=this.c
this.c=a
if(a!=null)a.gA().h(0,this.gav())
z=new D.E("technique",y,this.c,this,[O.cn])
z.b=!0
this.aR(z)}},
gA:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.eU(this.c)
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
if(typeof x!=="number")return H.l(x)
u=C.i.at(v.a*x)
if(typeof w!=="number")return H.l(w)
t=C.i.at(v.b*w)
s=C.i.at(v.c*x)
a.c=s
v=C.i.at(v.d*w)
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
n=V.aW(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.eT(n)
y=$.f1
if(y==null){y=new V.G(0,0,-1)
m=y.w(0,Math.sqrt(y.L(y)))
y=new V.G(0,1,0).aI(m)
l=y.w(0,Math.sqrt(y.L(y)))
k=m.aI(l)
j=new V.G(0,0,0)
y=V.aW(l.a,k.a,m.a,l.M(0).L(j),l.b,k.b,m.b,k.M(0).L(j),l.c,k.c,m.c,m.M(0).L(j),0,0,0,1)
$.f1=y
i=y}else i=y
z=z.b
if(z!=null){h=z.a
if(h!=null)i=h.l(0,i)}a.db.eT(i)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.H();)z.d.am(0,a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.H();)z.d.aN(a)
this.a.toString
a.cy.d7()
a.db.d7()
this.b.toString
a.eR()},
$ispv:1}}],["","",,A,{"^":"",ea:{"^":"b;a,b,c"},hU:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
O:function(a,b){var z
for(z=this.a.length-1;z>=0;--z);return-1},
iD:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
eb:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eE:{"^":"dE;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r,0x,0y"},eV:{"^":"dE;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ay,0ap,0bP,0ed,0bQ,0bR,0ee,0ef,0bS,0bT,0eg,0eh,0bU,0bV,0ei,0ej,0bW,0ek,0el,0bX,0em,0en,0bY,0bZ,0c_,0eo,0ep,0c0,0c1,0eq,0er,0c2,0es,0cU,0eu,0cV,0ev,0cW,0ew,0cX,0ex,0cY,0ey,0cZ,a,b,0c,0d,0e,0f,0r,0x,0y",
fg:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.aG("")
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
a1.hZ(z)
a1.i5(z)
a1.i_(z)
a1.ie(z)
a1.ig(z)
a1.i7(z)
a1.ik(z)
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
z=new P.aG("")
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
v.i2(z)
v.hY(z)
v.i0(z)
v.i3(z)
v.ib(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.i9(z)
v.ia(z)}v.i6(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
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
case C.h:r+="   return alpha;\n"
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
p=H.f([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.G(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.i1(z)
v.i8(z)
v.ic(z)
v.ih(z)
v.ii(z)
v.ij(z)
v.i4(z)}r=z.a+="// === Main ===\n"
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
o=H.f([],[P.i])
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
n="vec4("+C.a.G(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.eH(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a1.fr)this.id=H.k(this.y.p(0,"invViewMat"),"$isaH")
if(y)this.dy=H.k(this.y.p(0,"objMat"),"$isaH")
if(w)this.fr=H.k(this.y.p(0,"viewObjMat"),"$isaH")
this.fy=H.k(this.y.p(0,"projViewObjMat"),"$isaH")
if(a1.x2)this.k1=H.k(this.y.p(0,"txt2DMat"),"$isdN")
if(a1.y1)this.k2=H.k(this.y.p(0,"txtCubeMat"),"$isaH")
if(a1.y2)this.k3=H.k(this.y.p(0,"colorMat"),"$isaH")
this.r1=H.f([],[A.aH])
y=a1.ay
if(y>0){this.k4=H.d(this.y.p(0,"bendMatCount"),"$isP")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.p(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(l,"$isaH"))}}y=a1.a
if(y!==C.c){this.r2=H.k(this.y.p(0,"emissionClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.e:this.rx=H.k(this.y.p(0,"emissionTxt"),"$isaI")
this.x1=H.k(this.y.p(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.ry=H.k(this.y.p(0,"emissionTxt"),"$isaJ")
this.x1=H.k(this.y.p(0,"nullEmissionTxt"),"$isP")
break}}y=a1.b
if(y!==C.c){this.x2=H.k(this.y.p(0,"ambientClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.e:this.y1=H.k(this.y.p(0,"ambientTxt"),"$isaI")
this.ay=H.k(this.y.p(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.y2=H.k(this.y.p(0,"ambientTxt"),"$isaJ")
this.ay=H.k(this.y.p(0,"nullAmbientTxt"),"$isP")
break}}y=a1.c
if(y!==C.c){this.ap=H.k(this.y.p(0,"diffuseClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.e:this.bP=H.k(this.y.p(0,"diffuseTxt"),"$isaI")
this.bQ=H.k(this.y.p(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.ed=H.k(this.y.p(0,"diffuseTxt"),"$isaJ")
this.bQ=H.k(this.y.p(0,"nullDiffuseTxt"),"$isP")
break}}y=a1.d
if(y!==C.c){this.bR=H.k(this.y.p(0,"invDiffuseClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.e:this.ee=H.k(this.y.p(0,"invDiffuseTxt"),"$isaI")
this.bS=H.k(this.y.p(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.ef=H.k(this.y.p(0,"invDiffuseTxt"),"$isaJ")
this.bS=H.k(this.y.p(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a1.e
if(y!==C.c){this.bV=H.k(this.y.p(0,"shininess"),"$isa3")
this.bT=H.k(this.y.p(0,"specularClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.e:this.eg=H.k(this.y.p(0,"specularTxt"),"$isaI")
this.bU=H.k(this.y.p(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.eh=H.k(this.y.p(0,"specularTxt"),"$isaJ")
this.bU=H.k(this.y.p(0,"nullSpecularTxt"),"$isP")
break}}switch(a1.f){case C.c:break
case C.h:break
case C.e:this.ei=H.k(this.y.p(0,"bumpTxt"),"$isaI")
this.bW=H.k(this.y.p(0,"nullBumpTxt"),"$isP")
break
case C.f:this.ej=H.k(this.y.p(0,"bumpTxt"),"$isaJ")
this.bW=H.k(this.y.p(0,"nullBumpTxt"),"$isP")
break}if(a1.dy){this.ek=H.k(this.y.p(0,"envSampler"),"$isaJ")
this.el=H.k(this.y.p(0,"nullEnvTxt"),"$isP")
y=a1.r
if(y!==C.c){this.bX=H.k(this.y.p(0,"reflectClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.e:this.em=H.k(this.y.p(0,"reflectTxt"),"$isaI")
this.bY=H.k(this.y.p(0,"nullReflectTxt"),"$isP")
break
case C.f:this.en=H.k(this.y.p(0,"reflectTxt"),"$isaJ")
this.bY=H.k(this.y.p(0,"nullReflectTxt"),"$isP")
break}}y=a1.x
if(y!==C.c){this.bZ=H.k(this.y.p(0,"refraction"),"$isa3")
this.c_=H.k(this.y.p(0,"refractClr"),"$isO")
switch(y){case C.c:break
case C.h:break
case C.e:this.eo=H.k(this.y.p(0,"refractTxt"),"$isaI")
this.c0=H.k(this.y.p(0,"nullRefractTxt"),"$isP")
break
case C.f:this.ep=H.k(this.y.p(0,"refractTxt"),"$isaJ")
this.c0=H.k(this.y.p(0,"nullRefractTxt"),"$isP")
break}}}y=a1.y
if(y!==C.c){this.c1=H.k(this.y.p(0,"alpha"),"$isa3")
switch(y){case C.c:break
case C.h:break
case C.e:this.eq=H.k(this.y.p(0,"alphaTxt"),"$isaI")
this.c2=H.k(this.y.p(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.er=H.k(this.y.p(0,"alphaTxt"),"$isaJ")
this.c2=H.k(this.y.p(0,"nullAlphaTxt"),"$isP")
break}}this.cU=H.f([],[A.fz])
this.cV=H.f([],[A.fA])
this.cW=H.f([],[A.fB])
this.cX=H.f([],[A.fC])
this.cY=H.f([],[A.fD])
this.cZ=H.f([],[A.fE])
if(a1.k2){y=a1.z
if(y>0){this.es=H.d(this.y.p(0,"dirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isO")
x=this.y
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.cU;(x&&C.a).h(x,new A.fz(m,l,k))}}y=a1.Q
if(y>0){this.eu=H.d(this.y.p(0,"pntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isO")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isa3")
x=this.y
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa3")
x=this.y
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa3")
x=this.cV;(x&&C.a).h(x,new A.fA(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ev=H.d(this.y.p(0,"spotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isO")
x=this.y
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa3")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa3")
x=this.y
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa3")
x=this.y
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa3")
x=this.y
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa3")
x=this.cW;(x&&C.a).h(x,new A.fB(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ew=H.d(this.y.p(0,"txtDirLightCount"),"$isP")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isO")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isO")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isaI")
x=this.cX;(x&&C.a).h(x,new A.fC(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ex=H.d(this.y.p(0,"txtPntLightCount"),"$isP")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isO")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isdN")
x=this.y
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa3")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa3")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa3")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isaJ")
x=this.cY;(x&&C.a).h(x,new A.fD(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ey=H.d(this.y.p(0,"txtSpotLightCount"),"$isP")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(l,"$isO")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isO")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isO")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isO")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isO")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isO")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa3")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa3")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.p(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isaI")
x=this.cZ;(x&&C.a).h(x,new A.fE(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ao:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.fa(c)
b.a.uniform1i(b.d,0)}},
ai:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
jx:function(a,b){var z,y
z=a.ap
y=new A.eV(b,z)
y.dq(b,z)
y.fg(a,b)
return y}}},jA:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ay,ap,bP",
hZ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ay+"];\n"
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
i5:function(a){var z
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
i_:function(a){var z
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
ie:function(a){var z,y
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
ig:function(a){var z,y
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
i7:function(a){var z
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
ik:function(a){var z
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
aD:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.c(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.au(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
i2:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aD(a,z,"emission")
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
hY:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aD(a,z,"ambient")
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
i0:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aD(a,z,"diffuse")
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
i3:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aD(a,z,"invDiffuse")
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
ib:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aD(a,z,"specular")
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
i6:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.h:break
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
case C.h:z+="   return normalize(normalVec);\n"
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
i9:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aD(a,z,"reflect")
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
ia:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aD(a,z,"refract")
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
i1:function(a){var z,y
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
i8:function(a){var z,y
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
ic:function(a){var z,y
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
ih:function(a){var z,y,x
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
ii:function(a){var z,y,x
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
ij:function(a){var z,y,x
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
i4:function(a){var z
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
j:function(a){return this.ap}},fz:{"^":"b;a,b,c"},fC:{"^":"b;a,b,c,d,e,f,r,x"},fA:{"^":"b;a,b,c,d,e,f,r"},fD:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fB:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fE:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dE:{"^":"da;",
dq:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eH:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.dI(b,35633)
this.f=this.dI(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.hu(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.p(P.q("Failed to link shader: "+H.m(x)))}this.hH()
this.hJ()},
aG:function(a){a.a.useProgram(this.r)
this.x.iD()},
dI:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.hu(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.q("Error compiling shader '"+H.m(y)+"': "+H.m(x)))}return y},
hH:function(){var z,y,x,w,v,u
z=H.f([],[A.ea])
y=this.a
x=H.D(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.l(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.ea(y,v.name,u))}this.x=new A.hU(z)},
hJ:function(){var z,y,x,w,v,u
z=H.f([],[A.au])
y=this.a
x=H.D(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.l(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.iz(v.type,v.size,v.name,u))}this.y=new A.kS(z)},
aT:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.P(z,y,b,c)
else return A.dL(z,y,b,a,c)},
fL:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aI(z,y,b,c)
else return A.dL(z,y,b,a,c)},
fM:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aJ(z,y,b,c)
else return A.dL(z,y,b,a,c)},
bK:function(a,b){return new P.fT(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
iz:function(a,b,c,d){switch(a){case 5120:return this.aT(b,c,d)
case 5121:return this.aT(b,c,d)
case 5122:return this.aT(b,c,d)
case 5123:return this.aT(b,c,d)
case 5124:return this.aT(b,c,d)
case 5125:return this.aT(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.kO(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.dM(this.a,this.r,c,d)
case 35667:return new A.kP(this.a,this.r,c,d)
case 35668:return new A.kQ(this.a,this.r,c,d)
case 35669:return new A.kR(this.a,this.r,c,d)
case 35674:return new A.kU(this.a,this.r,c,d)
case 35675:return new A.dN(this.a,this.r,c,d)
case 35676:return new A.aH(this.a,this.r,c,d)
case 35678:return this.fL(b,c,d)
case 35680:return this.fM(b,c,d)
case 35670:throw H.a(this.bK("BOOL",c))
case 35671:throw H.a(this.bK("BOOL_VEC2",c))
case 35672:throw H.a(this.bK("BOOL_VEC3",c))
case 35673:throw H.a(this.bK("BOOL_VEC4",c))
default:throw H.a(P.q("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}},cB:{"^":"b;a,b",
j:function(a){return this.b}},au:{"^":"b;"},kS:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
O:function(a,b){var z
for(z=this.a.length-1;z>=0;--z);return-1},
j:function(a){return this.P()},
iL:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.F)(z),++w)x+=z[w].j(0)+a
return x},
P:function(){return this.iL("\n")}},P:{"^":"au;a,b,c,d",
j:function(a){return"Uniform1i: "+H.m(this.c)}},kP:{"^":"au;a,b,c,d",
j:function(a){return"Uniform2i: "+H.m(this.c)}},kQ:{"^":"au;a,b,c,d",
j:function(a){return"Uniform3i: "+H.m(this.c)}},kR:{"^":"au;a,b,c,d",
j:function(a){return"Uniform4i: "+H.m(this.c)}},kN:{"^":"au;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.m(this.c)},
q:{
dL:function(a,b,c,d,e){var z=new A.kN(a,b,c,e)
z.f=d
z.e=P.jo(d,0,!1,P.o)
return z}}},a3:{"^":"au;a,b,c,d",
j:function(a){return"Uniform1f: "+H.m(this.c)}},kO:{"^":"au;a,b,c,d",
j:function(a){return"Uniform2f: "+H.m(this.c)}},O:{"^":"au;a,b,c,d",
j:function(a){return"Uniform3f: "+H.m(this.c)}},dM:{"^":"au;a,b,c,d",
bw:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
j:function(a){return"Uniform4f: "+H.m(this.c)}},kU:{"^":"au;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.m(this.c)}},dN:{"^":"au;a,b,c,d",
ad:function(a){var z=new Float32Array(H.bG(H.v(a,"$ise",[P.C],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.m(this.c)}},aH:{"^":"au;a,b,c,d",
ad:function(a){var z=new Float32Array(H.bG(H.v(a,"$ise",[P.C],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.m(this.c)}},aI:{"^":"au;a,b,c,d",
fa:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.m(this.c)}},aJ:{"^":"au;a,b,c,d",
j:function(a){return"UniformSamplerCube: "+H.m(this.c)}}}],["","",,F,{"^":"",T:{"^":"b;0a,0b,0c,0d,0e",
jB:function(a,b,c){if(!c)this.d=null
if(!b)this.e=null},
dd:function(a){return this.jB(a,!0,!0)},
gcS:function(){return this.a==null||this.b==null||this.c==null},
fB:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.m(0,y)
if(x!=null)v=v.m(0,x)
if(w!=null)v=v.m(0,w)
if(v.eJ())return
return v.w(0,Math.sqrt(v.L(v)))},
fG:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.C(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.L(z)))
z=w.C(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aI(z.w(0,Math.sqrt(z.L(z))))
return z.w(0,Math.sqrt(z.L(z)))},
cO:function(){if(this.d!=null)return!0
var z=this.fB()
if(z==null){z=this.fG()
if(z==null)return!1}this.d=z
this.a.a.a3()
return!0},
fA:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.m(0,y)
if(x!=null)v=v.m(0,x)
if(w!=null)v=v.m(0,w)
if(v.eJ())return
return v.w(0,Math.sqrt(v.L(v)))},
fF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
y=o.b
if(typeof z!=="number")return z.C()
if(typeof y!=="number")return H.l(y)
n=z-y
if($.r.$2(n,0)){z=r.C(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.L(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.C()
if(typeof p!=="number")return H.l(p)
if(z-p<0)m=m.M(0)}else{y=q.b
if(typeof y!=="number")return H.l(y)
l=(z-y)/n
y=r.C(0,u)
z=y.a
if(typeof z!=="number")return z.l()
w=y.b
if(typeof w!=="number")return w.l()
y=y.c
if(typeof y!=="number")return y.l()
y=new V.aA(z*l,w*l,y*l).m(0,u).C(0,x)
y=new V.G(y.a,y.b,y.c)
m=y.w(0,Math.sqrt(y.L(y)))
o=o.a
p=p.a
if(typeof o!=="number")return o.C()
if(typeof p!=="number")return H.l(p)
q=q.a
if(typeof q!=="number")return H.l(q)
if((o-p)*l+p-q<0)m=m.M(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.L(z)))
z=k.aI(m)
z=z.w(0,Math.sqrt(z.L(z))).aI(k)
m=z.w(0,Math.sqrt(z.L(z)))}return m},
cN:function(){if(this.e!=null)return!0
var z=this.fA()
if(z==null){z=this.fF()
if(z==null)return!1}this.e=z
this.a.a.a3()
return!0},
B:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
E:function(a){var z,y
if(this.gcS())return a+"disposed"
z=a+C.b.al(J.as(this.a.e),0)+", "+C.b.al(J.as(this.b.e),0)+", "+C.b.al(J.as(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
P:function(){return this.E("")},
q:{
ew:function(a,b,c){var z,y,x
z=new F.T()
y=a.a
if(y==null)H.p(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.q("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a3()
return z}}},bd:{"^":"b;0a,0b",
gcS:function(){return this.a==null||this.b==null},
B:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
E:function(a){if(this.gcS())return a+"disposed"
return a+C.b.al(J.as(this.a.e),0)+", "+C.b.al(J.as(this.b.e),0)},
P:function(){return this.E("")},
q:{
eN:function(a,b){var z,y,x
z=new F.bd()
if(a==null)H.p(P.q("May not create a line with a null start vertex."))
if(b==null)H.p(P.q("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.p(P.q("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.q("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a3()
return z}}},cK:{"^":"b;0a",
B:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
E:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.al(J.as(z.e),0)},
P:function(){return this.E("")},
q:{
dB:function(a){var z=new F.cK()
if(a.a==null)H.p(P.q("May not create a point with a vertex which is not attached to a shape."))
z.a=a
C.a.h(a.b.b,z)
C.a.h(z.a.a.b.b,z)
z.a.a.a3()
return z}}},aq:{"^":"b;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
b_:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.b_()||!1
if(!this.a.b_())y=!1
z=this.e
if(!(z==null))z.b7(0)
return y},
aZ:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aZ()||!1
if(!this.a.aZ())y=!1
z=this.e
if(!(z==null))z.b7(0)
return y},
bM:function(){var z=this.e
if(!(z==null))++z.d
this.a.bM()
z=this.e
if(!(z==null))z.b7(0)
return!0},
bf:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.c
y=z.length
if(y<=0)return V.f7(0,0,0,0,0,0)
z=z[0].f
x=V.f7(z.a,z.b,z.c,0,0,0)
for(w=y-1,z=this.a;w>=1;--w){v=z.c
if(w>=v.length)return H.c(v,w)
v=v[w].f
u=v.a
t=v.b
v=v.c
s=x.d
r=x.a
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.l(r)
if(u<r){s+=r-u
q=u}else{if(u>r+s)s=u-r
q=r}p=x.e
u=x.b
if(typeof t!=="number")return t.D()
if(typeof u!=="number")return H.l(u)
if(t<u){p+=u-t
o=t}else{if(t>u+p)p=t-u
o=u}n=x.f
u=x.c
if(typeof v!=="number")return v.D()
if(typeof u!=="number")return H.l(u)
if(v<u){n+=u-v
m=v}else{if(v>u+n)n=v-u
m=u}x=new V.cP(q,o,m,s,p,n)}return x},
bL:function(a){var z,y,x
for(z=this.a.c.length-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
y=x.f
if(y!=null){y=a.b9(y)
if(!J.R(x.f,y)){x.f=y
y=x.a
if(y!=null){y=y.e
if(!(y==null))y.J(null)}}}y=x.r
if(y!=null)x.sbl(a.c6(y))
y=x.x
if(y!=null)x.sV(a.c6(y))}},
e6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aN()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$b5().a)!==0)++w
if((x&$.$get$bD().a)!==0)++w
if((x&$.$get$bg().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
v=b.gdk(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.C
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.ef])
for(r=0,q=0;q<w;++q){p=b.ir(q)
o=p.gdk(p)
C.a.n(s,q,new Z.ef(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.c(y,n)
m=y[n].iV(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.n(t,l,m[k]);++l}}r+=o}H.v(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bG(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cA(new Z.fN(34962,j),s,b)
i.b=H.f([],[Z.cF])
if(this.b.b.length!==0){x=P.o
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.N()
C.a.h(h,g.e)}f=Z.dQ(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cF(0,h.length,f))}if(this.c.b.length!==0){x=P.o
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.N()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.N()
C.a.h(h,g.e)}f=Z.dQ(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cF(1,h.length,f))}if(this.d.b.length!==0){x=P.o
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.N()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.N()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].c
g.a.a.N()
C.a.h(h,g.e)}f=Z.dQ(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.cF(4,h.length,f))}return i},
j:function(a){var z=H.f([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.E("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.E("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.E("   "))}return C.a.G(z,"\n")},
af:function(a){var z=this.e
if(!(z==null))z.J(a)},
a3:function(){return this.af(null)},
$iscQ:1,
q:{
al:function(){var z,y
z=new F.aq()
y=new F.lh(z)
y.b=!1
y.c=H.f([],[F.I])
z.a=y
y=new F.kl(z)
y.b=H.f([],[F.cK])
z.b=y
y=new F.kk(z)
y.b=H.f([],[F.bd])
z.c=y
y=new F.kj(z)
y.b=H.f([],[F.T])
z.d=y
z.e=null
return z}}},cQ:{"^":"dg;"},kj:{"^":"b;a,0b",
a9:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.ew(b,c,d)},
io:function(a){var z,y,x,w,v,u
H.v(a,"$ise",[F.I],"$ase")
z=H.f([],[F.T])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.c(a,v)
v=a[v]
if(w>=u)return H.c(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.ew(x,v,u))}}return z},
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.c(z,b)
return z[b]},
O:function(a,b){return C.a.O(this.b,b)},
b_:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.F)(z),++w)if(!z[w].cO())x=!1
return x},
aZ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.F)(z),++w)if(!z[w].cN())x=!1
return x},
j:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}},kk:{"^":"b;a,0b",
t:function(a,b,c){this.a.a.h(0,b)
this.a.a.h(0,c)
return F.eN(b,c)},
ip:function(a){var z,y,x,w,v
H.v(a,"$ise",[F.I],"$ase")
z=H.f([],[F.bd])
y=a.length
for(x=1;x<y;x+=2){w=x-1
v=a.length
if(w>=v)return H.c(a,w)
w=a[w]
if(x>=v)return H.c(a,x)
v=a[x]
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.eN(w,v))}return z},
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.c(z,b)
return z[b]},
O:function(a,b){return C.a.O(this.b,b)},
j:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.f([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.c(w,x)
C.a.h(z,w[x].E(a+(""+x+". ")))}return C.a.G(z,"\n")},
P:function(){return this.E("")}},kl:{"^":"b;a,0b",
iq:function(a){var z,y,x,w
H.v(a,"$ise",[F.I],"$ase")
z=H.f([],[F.cK])
y=a.length
for(x=0;x<y;++x){if(x>=a.length)return H.c(a,x)
w=a[x]
this.a.a.h(0,w)
C.a.h(z,F.dB(w))}return z},
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>=z.length)return H.c(z,b)
return z[b]},
O:function(a,b){return C.a.O(this.b,b)},
j:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}},I:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ix:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bC(this.cx,x,u,z,y,w,v,a,t)},
a0:function(){return this.ix(null)},
saa:function(a,b){var z
if(!J.R(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a3()}},
sbl:function(a){var z
a=a==null?null:a.w(0,Math.sqrt(a.L(a)))
if(!J.R(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a3()}},
sV:function(a){var z
a=a==null?null:a.w(0,Math.sqrt(a.L(a)))
if(!J.R(this.x,a)){this.x=a
z=this.a
if(z!=null)z.a3()}},
sS:function(a,b){var z
if(!J.R(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.a3()}},
iV:function(a){var z,y
z=J.M(a)
if(z.B(a,$.$get$aN())){z=this.f
y=[P.C]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$aM())){z=this.r
y=[P.C]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$aL())){z=this.x
y=[P.C]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$b0())){z=this.y
y=[P.C]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.B(a,$.$get$b1())){z=this.z
y=[P.C]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$b5())){z=this.Q
y=[P.C]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.B(a,$.$get$bD())){z=this.Q
y=[P.C]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.B(a,$.$get$bg()))return H.f([this.ch],[P.C])
else if(z.B(a,$.$get$b_())){z=H.f([-1,-1,-1,-1],[P.C])
return z}else return H.f([],[P.C])},
cO:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.G(0,0,0)
this.d.v(0,new F.lo(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.L(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.b7(0)}return!0},
cN:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.G(0,0,0)
this.d.v(0,new F.ln(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.L(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.b7(0)}return!0},
eA:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.c(x,y)
w=x[y]
x=w.b
x.a.a.N()
x=x.e
a.a.a.N()
v=a.e
if(x==null?v==null:x===v)return w}return},
iH:function(a){var z=this.eA(a)
if(z!=null)return z
return a.eA(this)},
B:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
E:function(a){var z,y,x
z=H.f([],[P.i])
C.a.h(z,C.b.al(J.as(this.e),0))
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
C.a.h(z,V.U(this.ch,3,0))
C.a.h(z,"-")
x=C.a.G(z,", ")
return a+"{"+x+"}"},
P:function(){return this.E("")},
q:{
bC:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.I()
y=new F.lm(z)
y.b=H.f([],[F.cK])
z.b=y
y=new F.ll(z)
x=[F.bd]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.li(z)
x=[F.T]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$fK()
z.e=0
y=$.$get$aN()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aM().a)!==0?e:null
z.x=(x&$.$get$aL().a)!==0?b:null
z.y=(x&$.$get$b0().a)!==0?f:null
z.z=(x&$.$get$b1().a)!==0?g:null
z.Q=(x&$.$get$fL().a)!==0?c:null
z.ch=(x&$.$get$bg().a)!==0?i:0
z.cx=(x&$.$get$b_().a)!==0?a:null
return z}}},lo:{"^":"h:4;a",
$1:function(a){var z,y
H.d(a,"$isT")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.m(0,z)}}},ln:{"^":"h:4;a",
$1:function(a){var z,y
H.d(a,"$isT")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.m(0,z)}}},lh:{"^":"b;a,0b,0c",
N:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.c(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a3()
return!0},
cH:function(a,b,c){var z=F.bC(null,null,null,new V.aA(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gk:function(a){return this.c.length},
i:function(a,b){var z=this.c
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
O:function(a,b){return C.a.O(this.c,b)},
b_:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x)z[x].cO()
return!0},
aZ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x)z[x].cN()
return!0},
bM:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.l()
t=v.b
if(typeof t!=="number")return t.l()
s=v.c
if(typeof s!=="number")return s.l()
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
j:function(a){return this.P()},
E:function(a){var z,y,x,w
this.N()
z=H.f([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}},li:{"^":"b;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
z=this.b.length
if(b.D(0,z)){y=this.b
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]}b=b.C(0,z)
x=this.c.length
if(b.D(0,x)){y=this.c
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]}b=b.C(0,x)
y=this.d
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]},
O:function(a,b){var z=C.a.O(this.b,b)
if(z>=0)return z
z=C.a.O(this.c,b)
if(z>=0)return z+this.b.length
z=C.a.O(this.d,b)
if(z>=0)return z+this.b.length+this.c.length
return-1},
v:function(a,b){H.j(b,{func:1,ret:-1,args:[F.T]})
C.a.v(this.b,b)
C.a.v(this.c,new F.lj(this,b))
C.a.v(this.d,new F.lk(this,b))},
j:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}},lj:{"^":"h:4;a,b",
$1:function(a){H.d(a,"$isT")
if(!J.R(a.a,this.a))this.b.$1(a)}},lk:{"^":"h:4;a,b",
$1:function(a){var z
H.d(a,"$isT")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},ll:{"^":"b;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b.length
if(b.aO(0,z)){y=this.c
x=b.C(0,z)
if(x>>>0!==x||x>=y.length)return H.c(y,x)
return y[x]}else{y=this.b
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]}},
O:function(a,b){var z=C.a.O(this.b,b)
if(z>=0)return z
z=C.a.O(this.c,b)
if(z>=0)return z+this.b.length
return-1},
j:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}},lm:{"^":"b;a,0b",
gk:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
O:function(a,b){return C.a.O(this.b,b)},
j:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.f([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.F)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}}}],["","",,O,{"^":"",iF:{"^":"cn;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gA:function(){var z=this.rx
if(z==null){z=D.S()
this.rx=z}return z},
F:function(a){var z=this.rx
if(!(z==null))z.J(a)},
sac:function(a){var z,y
z=this.r2
if(!$.r.$2(z,a)){y=this.r2
this.r2=a
z=new D.E("vectorScale",y,a,this,[P.C])
z.b=!0
this.F(z)}},
am:function(a,b){},
eW:function(a,b){var z,y,x,w
if(this.a==null){z=H.d(a.fr.i(0,"Inspection"),"$iseE")
if(z==null){y=a.a
z=new A.eE(y,"Inspection")
z.dq(y,"Inspection")
z.eH(0,$.iX,$.iP)
z.z=z.x.i(0,"posAttr")
z.Q=z.x.i(0,"normAttr")
z.ch=z.x.i(0,"clrAttr")
z.cx=z.x.i(0,"binmAttr")
z.cy=H.k(z.y.i(0,"lightVec"),"$isO")
z.db=H.k(z.y.i(0,"ambientClr"),"$isdM")
z.dx=H.k(z.y.i(0,"diffuseClr"),"$isdM")
z.dy=H.k(z.y.i(0,"weightScalar"),"$isa3")
z.fr=H.k(z.y.i(0,"viewMat"),"$isaH")
z.fx=H.k(z.y.i(0,"viewObjMatrix"),"$isaH")
z.fy=H.k(z.y.i(0,"projViewObjMatrix"),"$isaH")
a.e4(z)}this.a=z}if(b.e==null){b.d.b_()
b.d.aZ()
b.d.bM()
y=new Z.eg()
y.a=new H.aQ(0,0,[P.i,Z.cA])
b.e=y}y=this.a
y.aG(a)
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
w.ad(x.ab(0,!0))
x=a.gf3()
w=y.fx
w.toString
w.ad(x.ab(0,!0))
x=a.geS()
y=y.fy
y.toString
y.ad(x.ab(0,!0))
y=b.e
if(y instanceof Z.eg){a.a.blendFunc(1,1)
x=b.c
w=a.a
if(x==null){w.disable(2929)
a.a.enable(3042)
a.a.blendFunc(1,1)
if(this.k3)this.dR(a,y,b.d,"Axis",H.j(this.gdz(),{func:1,ret:F.aq,args:[F.cQ]}),this.z,this.y)
if(this.k4)this.dR(a,y,b.d,"AABB",H.j(this.gdu(),{func:1,ret:F.aq,args:[F.cQ]}),this.z,this.y)
a.a.enable(2929)
a.a.blendFunc(770,771)}else{w.enable(2929)
a.a.enable(3042)
a.a.blendFunc(770,771)
if(this.cx)this.a2(a,y,b.c,"vertices",this.ghU(),this.f,this.e)
if(this.fr)this.a2(a,y,b.c,"faceCenters",this.gfS(),this.f,this.e)
if(this.Q)this.a2(a,y,b.c,"shapeFill",this.ghK(),this.d,this.c)
if(this.id)this.a2(a,y,b.c,"colorFill",this.gfI(),this.x,this.r)
if(this.k1)this.a2(a,y,b.c,"txt2DColor",this.ghS(),this.x,this.r)
if(this.k2)this.a2(a,y,b.c,"weight",this.ghV(),this.x,this.r)
a.a.disable(2929)
a.a.blendFunc(1,1)
if(this.ch)this.a2(a,y,b.c,"wireFrame",this.ghW(),this.f,this.e)
if(this.cy)this.a2(a,y,b.c,"normals",this.gh5(),this.f,this.e)
if(this.db)this.a2(a,y,b.c,"binormals",this.gfD(),this.f,this.e)
if(this.dx)this.a2(a,y,b.c,"tangentals",this.ghN(),this.f,this.e)
if(this.dy)this.a2(a,y,b.c,"textureCube",this.ghT(),this.f,this.e)
if(this.fx)this.a2(a,y,b.c,"faceNormals",this.gfT(),this.f,this.e)
if(this.fy)this.a2(a,y,b.c,"faceBinormals",this.gfR(),this.x,this.r)
if(this.go)this.a2(a,y,b.c,"faceTangentals",this.gfU(),this.x,this.r)
if(this.k3)this.a2(a,y,b.c,"Axis",this.gdz(),this.z,this.y)
if(this.k4)this.a2(a,y,b.c,"AABB",this.gdu(),this.z,this.y)
a.a.enable(2929)
a.a.blendFunc(770,771)}}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.eb()},
a2:function(a,b,c,d,e,f,g){var z,y
H.j(e,{func:1,ret:F.aq,args:[F.aq]})
z=b.a.i(0,d)
if(z==null){z=this.dA(a,e.$1(c))
b.a.n(0,d,z)}y=this.a
y.db.bw(f)
y.dx.bw(g)
z.eP(a)},
dR:function(a,b,c,d,e,f,g){var z,y
H.j(e,{func:1,ret:F.aq,args:[F.cQ]})
z=b.a.i(0,d)
if(z==null){z=this.dA(a,e.$1(c))
b.a.n(0,d,z)}y=this.a
y.db.bw(f)
y.dx.bw(g)
z.eP(a)},
dA:function(a,b){var z,y,x,w
H.d(b,"$isaq")
z=a.a
y=$.$get$aN()
x=$.$get$aM()
w=b.e6(new Z.fO(z),new Z.bf(y.a|x.a|$.$get$aL().a|$.$get$b5().a))
w.aj($.$get$aN()).e=this.a.z.c
w.aj($.$get$aM()).e=this.a.Q.c
w.aj($.$get$b5()).e=this.a.ch.c
w.aj($.$get$aL()).e=this.a.cx.c
return w},
kk:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.j(new O.iR(z,new V.X(1,1,1,1)),{func:1,ret:-1,args:[F.I]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.j(new O.iS(z),{func:1,ret:-1,args:[F.T]})
C.a.v(x.b,y)
return z},"$1","ghK",4,0,2],
hX:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.al()
z.a=new V.X(0,0.7,1,1)
x=a.a
x.toString
z=H.j(new O.j2(z,y),{func:1,ret:-1,args:[F.I]})
C.a.v(x.c,z)
z=new O.j1(y)
x=a.c
x.toString
w=H.j(new O.j3(y,z),{func:1,ret:-1,args:[F.bd]})
C.a.v(x.b,w)
w=a.d
w.toString
z=H.j(new O.j4(y,z),{func:1,ret:-1,args:[F.T]})
C.a.v(w.b,z)
return y},function(a){return this.hX(a,null)},"kt","$2$color","$1","ghW",4,3,50],
kr:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.j(new O.iY(new V.X(1,1,1,1),z),{func:1,ret:-1,args:[F.I]})
C.a.v(y.c,x)
return z},"$1","ghU",4,0,2],
jQ:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.j(new O.iQ(new V.X(1,1,0.3,1),z),{func:1,ret:-1,args:[F.I]})
C.a.v(y.c,x)
return z},"$1","gh5",4,0,2],
jG:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.j(new O.iI(new V.X(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.I]})
C.a.v(y.c,x)
return z},"$1","gfD",4,0,2],
kl:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.j(new O.iT(new V.X(1,0.3,1,1),z),{func:1,ret:-1,args:[F.I]})
C.a.v(y.c,x)
return z},"$1","ghN",4,0,2],
kq:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.j(new O.iW(new V.X(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.I]})
C.a.v(y.c,x)
return z},"$1","ghT",4,0,2],
jK:[function(a){var z,y,x
z=F.al()
y=a.d
y.toString
x=H.j(new O.iM(new V.X(1,1,0.3,1),z),{func:1,ret:-1,args:[F.T]})
C.a.v(y.b,x)
return z},"$1","gfS",4,0,2],
jL:[function(a){var z,y,x
z=F.al()
y=a.d
y.toString
x=H.j(new O.iN(new V.X(1,1,0.3,1),z),{func:1,ret:-1,args:[F.T]})
C.a.v(y.b,x)
return z},"$1","gfT",4,0,2],
jJ:[function(a){var z,y,x
z=F.al()
y=a.d
y.toString
x=H.j(new O.iL(new V.X(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.T]})
C.a.v(y.b,x)
return z},"$1","gfR",4,0,2],
jM:[function(a){var z,y,x
z=F.al()
y=a.d
y.toString
x=H.j(new O.iO(new V.X(1,0.3,1,1),z),{func:1,ret:-1,args:[F.T]})
C.a.v(y.b,x)
return z},"$1","gfU",4,0,2],
jH:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.j(new O.iJ(z),{func:1,ret:-1,args:[F.I]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.j(new O.iK(z),{func:1,ret:-1,args:[F.T]})
C.a.v(x.b,y)
return z},"$1","gfI",4,0,2],
kp:[function(a){var z,y,x
z=F.al()
y=a.a
y.toString
x=H.j(new O.iU(z),{func:1,ret:-1,args:[F.I]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.j(new O.iV(z),{func:1,ret:-1,args:[F.T]})
C.a.v(x.b,y)
return z},"$1","ghS",4,0,2],
ks:[function(a){var z,y,x,w,v,u,t
z={}
y=F.al()
x=a.a
w=x.c
if(w.length<1)return y
v=w[0].ch
z.a=v
z.b=v
x.toString
x={func:1,ret:-1,args:[F.I]}
C.a.v(w,H.j(new O.iZ(z),x))
w=z.b
u=z.a
if(typeof w!=="number")return w.C()
if(typeof u!=="number")return H.l(u)
t=w-u
z.c=t
if(t<=0)z.c=1
w=a.a
w.toString
x=H.j(new O.j_(z,y),x)
C.a.v(w.c,x)
x=a.d
x.toString
w=H.j(new O.j0(y),{func:1,ret:-1,args:[F.T]})
C.a.v(x.b,w)
return y},"$1","ghV",4,0,2],
jF:[function(a){return this.fC(a)},"$1","gdz",4,0,2],
fC:function(a){var z,y
z=F.al()
y=new O.iH(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z},
jE:[function(a){return this.ft(a)},"$1","gdu",4,0,2],
ft:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.bf()
y=F.al()
x=new O.iG(y)
w=z.a
v=z.b
u=z.c
t=x.$3(w,v,u)
if(typeof w!=="number")return w.m()
s=w+z.d
r=x.$3(s,v,u)
if(typeof v!=="number")return v.m()
q=v+z.e
p=x.$3(s,q,u)
o=x.$3(w,q,u)
if(typeof u!=="number")return u.m()
u+=z.f
n=x.$3(w,v,u)
m=x.$3(s,v,u)
l=x.$3(s,q,u)
k=x.$3(w,q,u)
y.c.t(0,t,r)
y.c.t(0,r,p)
y.c.t(0,p,o)
y.c.t(0,o,t)
y.c.t(0,n,m)
y.c.t(0,m,l)
y.c.t(0,l,k)
y.c.t(0,k,n)
y.c.t(0,t,n)
y.c.t(0,r,m)
y.c.t(0,p,l)
y.c.t(0,o,k)
return y}},iR:{"^":"h:6;a,b",
$1:function(a){var z,y
H.d(a,"$isI")
z=this.a.a
y=a.a0()
y.sS(0,this.b)
y.sV(new V.G(0,0,0))
z.h(0,y)}},iS:{"^":"h:4;a",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.N()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
u=y[x]
z.d.a9(0,w,v,u)}},j2:{"^":"h:6;a,b",
$1:function(a){var z,y
H.d(a,"$isI")
z=this.b.a
y=a.a0()
y.sS(0,this.a.a)
y.sV(new V.G(0,0,0))
z.h(0,y)}},j1:{"^":"h:52;a",
$2:function(a,b){if(a.iH(b)==null)this.a.c.t(0,a,b)}},j3:{"^":"h:53;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isbd")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.N()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.c(z,x)
this.b.$2(w,z[x])}},j4:{"^":"h:4;a,b",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.N()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.N()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.c(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},iY:{"^":"h:6;a,b",
$1:function(a){var z,y
z=H.d(a,"$isI").a0()
z.sS(0,this.a)
z.sV(new V.G(0,0,0))
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.dB(z)}},iQ:{"^":"h:6;a,b",
$1:function(a){var z,y,x
z=H.d(a,"$isI").a0()
z.sS(0,this.a)
z.sV(new V.G(0,0,0))
y=z.a0()
y.sV(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iI:{"^":"h:6;a,b",
$1:function(a){var z,y,x
H.d(a,"$isI")
z=a.a0()
z.sS(0,this.a)
z.sV(new V.G(0,0,0))
y=z.a0()
y.sV(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iT:{"^":"h:6;a,b",
$1:function(a){var z,y,x
H.d(a,"$isI")
z=a.a0()
z.sS(0,this.a)
z.sV(new V.G(0,0,0))
y=z.a0()
y.sV(a.x.aI(a.r).M(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iW:{"^":"h:6;a,b",
$1:function(a){var z,y,x
H.d(a,"$isI")
z=a.a0()
z.sS(0,this.a)
z.sV(new V.G(0,0,0))
y=z.a0()
y.sV(a.z)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iM:{"^":"h:4;a,b",
$1:function(a){var z,y
H.d(a,"$isT")
z=F.bC(null,new V.G(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).w(0,3),a.d,null,null,null,0)
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.dB(z)}},iN:{"^":"h:4;a,b",
$1:function(a){var z,y,x
H.d(a,"$isT")
z=F.bC(null,new V.G(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).w(0,3),a.d,null,null,null,0)
y=z.a0()
y.sV(a.d)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iL:{"^":"h:4;a,b",
$1:function(a){var z,y,x
H.d(a,"$isT")
z=F.bC(null,new V.G(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).w(0,3),a.d,null,null,null,0)
y=z.a0()
y.sV(a.e)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iO:{"^":"h:4;a,b",
$1:function(a){var z,y,x
H.d(a,"$isT")
z=F.bC(null,new V.G(0,0,0),this.a,a.a.f.m(0,a.b.f).m(0,a.c.f).w(0,3),a.d,null,null,null,0)
y=z.a0()
y.sV(a.e.aI(a.d).M(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.t(0,z,y)}},iJ:{"^":"h:6;a",
$1:function(a){var z,y
H.d(a,"$isI")
z=this.a.a
y=a.a0()
y.sV(new V.G(0,0,0))
z.h(0,y)}},iK:{"^":"h:4;a",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.N()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
u=y[x]
z.d.a9(0,w,v,u)}},iU:{"^":"h:6;a",
$1:function(a){var z,y,x,w,v,u,t
H.d(a,"$isI")
z=a.y
y=this.a.a
x=a.a0()
w=z.a
v=z.b
if(typeof w!=="number")return w.D()
if(w<0)w=0
else if(w>1)w=1
if(typeof v!=="number")return v.D()
u=v<0
if(u)t=0
else if(v>1)t=1
else t=v
if(u)v=0
else if(v>1)v=1
x.sS(0,new V.X(w,t,v,1))
x.sV(new V.G(0,0,0))
y.h(0,x)}},iV:{"^":"h:4;a",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.N()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
u=y[x]
z.d.a9(0,w,v,u)}},iZ:{"^":"h:6;a",
$1:function(a){var z,y,x
H.d(a,"$isI")
z=this.a
y=z.a
x=a.ch
if(typeof y!=="number")return y.cb()
if(typeof x!=="number")return H.l(x)
if(y>x)z.a=x
y=z.b
if(typeof y!=="number")return y.D()
if(y<x)z.b=x}},j_:{"^":"h:6;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isI")
z=a.ch
y=this.a
x=y.a
if(typeof z!=="number")return z.C()
if(typeof x!=="number")return H.l(x)
w=V.i7((z-x)/y.c*5/6,1,1)
y=this.b.a
x=a.a0()
x.sV(new V.G(0,0,0))
x.sS(0,new V.X(w.a,w.b,w.c,1))
y.h(0,x)}},j0:{"^":"h:4;a",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isT")
z=this.a
y=z.a
x=a.a
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.N()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.c(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.N()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.c(y,x)
u=y[x]
z.d.a9(0,w,v,u)}},iH:{"^":"h;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.X(z,y,x,1)
z=this.a
v=z.a.cH(0,0,0)
v.sV(new V.G(0,0,0))
v.sbl(new V.G(1,0,0))
v.sS(0,w)
u=z.a.cH(a,b,c)
u.sV(new V.G(0,0,0))
u.sbl(new V.G(1,0,0))
u.sS(0,w)
z.c.t(0,v,u)}},iG:{"^":"h;a",
$3:function(a,b,c){var z=this.a.a.cH(a,b,c)
z.sV(new V.G(0,0,0))
z.sbl(new V.G(a,b,c))
return z}},cJ:{"^":"cn;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gA:function(){var z=this.dy
if(z==null){z=D.S()
this.dy=z}return z},
F:[function(a){var z
H.d(a,"$isA")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.F(null)},"fp","$1","$0","gbz",0,2,3],
hE:[function(a){H.d(a,"$isA")
this.a=null
this.F(a)},function(){return this.hE(null)},"kj","$1","$0","ghD",0,2,3],
jT:[function(a,b){var z=V.aV
z=new D.cG(a,H.v(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.F(z)},"$2","gh8",8,0,27],
jU:[function(a,b){var z=V.aV
z=new D.cH(a,H.v(b,"$isn",[z],"$asn"),this,[z])
z.b=!0
this.F(z)},"$2","gh9",8,0,27],
dF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a8(z.e.length+3,4)*4
x=C.d.a8(z.f.length+3,4)*4
w=C.d.a8(z.r.length+3,4)*4
v=C.d.a8(z.x.length+3,4)*4
u=C.d.a8(z.y.length+3,4)*4
t=C.d.a8(z.z.length+3,4)*4
s=C.d.a8(this.e.a.length+3,4)*4
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
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a0=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aN()
if(c){z=$.$get$aM()
a6=new Z.bf(a6.a|z.a)}if(b){z=$.$get$aL()
a6=new Z.bf(a6.a|z.a)}if(a){z=$.$get$b0()
a6=new Z.bf(a6.a|z.a)}if(a0){z=$.$get$b1()
a6=new Z.bf(a6.a|z.a)}if(a2){z=$.$get$b_()
a6=new Z.bf(a6.a|z.a)}return new A.jA(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
Z:function(a,b){H.v(a,"$ise",[T.dI],"$ase")
if(b!=null)if(!C.a.b1(a,b)){b.a=a.length
C.a.h(a,b)}},
am:function(a,b){var z
for(z=this.dx.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.H();)C.r.am(z.d,b)},
eW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dF()
y=H.d(a.fr.i(0,z.ap),"$iseV")
if(y==null){y=A.jx(z,a.a)
a.e4(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bP
z=b.e
if(!(z instanceof Z.cA)){b.e=null
z=null}if(z==null||!z.d.B(0,w)){z=x.r1
if(z)b.d.b_()
v=x.r2
if(v)b.d.aZ()
u=x.ry
if(u)b.d.bM()
t=b.d.e6(new Z.fO(a.a),w)
t.aj($.$get$aN()).e=this.a.Q.c
if(z)t.aj($.$get$aM()).e=this.a.cx.c
if(v)t.aj($.$get$aL()).e=this.a.ch.c
if(x.rx)t.aj($.$get$b0()).e=this.a.cy.c
if(u)t.aj($.$get$b1()).e=this.a.db.c
if(x.x1)t.aj($.$get$b_()).e=this.a.dx.c
b.e=t}z=T.dI
s=H.f([],[z])
this.a.aG(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga_(u)
v=v.dy
v.toString
v.ad(u.ab(0,!0))}if(x.fy){v=this.a
u=a.gf3()
v=v.fr
v.toString
v.ad(u.ab(0,!0))}v=this.a
u=a.geS()
v=v.fy
v.toString
v.ad(u.ab(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ad(u.ab(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ad(u.ab(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ad(C.r.ab(u,!0))}if(x.ay>0){r=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,r)
for(v=[P.C],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.c(p,q)
p=p[q]
u.toString
H.d(p,"$isaV")
u=u.r1
if(q>=u.length)return H.c(u,q)
u=u[q]
o=new Float32Array(H.bG(H.v(p.ab(0,!0),"$ise",v,"$ase")))
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
case C.e:this.Z(s,this.f.d)
v=this.a
u=this.f.d
v.ao(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.Z(s,this.f.e)
v=this.a
u=this.f.e
v.ai(v.ry,v.x1,u)
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
case C.e:this.Z(s,this.r.d)
v=this.a
u=this.r.d
v.ao(v.y1,v.ay,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.Z(s,this.r.e)
v=this.a
u=this.r.e
v.ai(v.y2,v.ay,u)
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
v=v.ap
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.Z(s,this.x.d)
v=this.a
u=this.x.d
v.ao(v.bP,v.bQ,u)
u=this.a
v=this.x.f
u=u.ap
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.Z(s,this.x.e)
v=this.a
u=this.x.e
v.ai(v.ed,v.bQ,u)
u=this.a
v=this.x.f
u=u.ap
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.c:break
case C.h:v=this.a
u=this.y.f
v=v.bR
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.Z(s,this.y.d)
v=this.a
u=this.y.d
v.ao(v.ee,v.bS,u)
u=this.a
v=this.y.f
u=u.bR
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.f:this.Z(s,this.y.e)
v=this.a
u=this.y.e
v.ai(v.ef,v.bS,u)
u=this.a
v=this.y.f
u=u.bR
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.c:break
case C.h:v=this.a
u=this.z.f
v=v.bT
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bV
u.a.uniform1f(u.d,n)
break
case C.e:this.Z(s,this.z.d)
v=this.a
u=this.z.d
v.ao(v.eg,v.bU,u)
u=this.a
v=this.z.f
u=u.bT
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bV
v.a.uniform1f(v.d,n)
break
case C.f:this.Z(s,this.z.e)
v=this.a
u=this.z.e
v.ai(v.eh,v.bU,u)
u=this.a
v=this.z.f
u=u.bT
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bV
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.es
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
p=this.a.cU
if(l>=p.length)return H.c(p,l)
i=p[l]
p=m.c6(j.gbO(j))
n=p.a
if(typeof n!=="number")return n.l()
h=p.b
if(typeof h!=="number")return h.l()
g=p.c
if(typeof g!=="number")return g.l()
g=p.w(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.gS(j)
h=i.c
n=g.gb5()
p=g.gaP()
g=g.gaY()
h.a.uniform3f(h.d,n,p,g);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.eu
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
p=this.a.cV
if(l>=p.length)return H.c(p,l)
i=p[l]
p=j.gbo(j)
n=i.b
h=p.gdf(p)
g=p.gdg(p)
p=p.gdh(p)
n.a.uniform3f(n.d,h,g,p)
p=m.b9(j.gbo(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.gS(j)
g=i.d
h=p.gb5()
n=p.gaP()
p=p.gaY()
g.a.uniform3f(g.d,h,n,p)
p=j.gcI()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gcJ()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gcK()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.ev
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
p=this.a.cW
if(l>=p.length)return H.c(p,l)
i=p[l]
p=j.gbo(j)
n=i.b
h=p.gdf(p)
g=p.gdg(p)
p=p.gdh(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbO(j).kA()
g=i.c
h=p.gaJ(p)
n=p.gaK(p)
p=p.gb2()
g.a.uniform3f(g.d,h,n,p)
p=m.b9(j.gbo(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gS(j)
n=i.e
h=p.gb5()
g=p.gaP()
p=p.gaY()
n.a.uniform3f(n.d,h,g,p)
p=j.gkx()
g=i.f
g.a.uniform1f(g.d,p)
p=j.gkw()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gcI()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gcJ()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gcK()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.ew
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
n=this.a.cX
if(l>=n.length)return H.c(n,l)
i=n[l]
n=j.gbq()
H.v(s,"$ise",p,"$ase")
if(!C.a.b1(s,n)){n.sbB(s.length)
C.a.h(s,n)}n=j.gbO(j)
h=i.d
g=n.gaJ(n)
f=n.gaK(n)
n=n.gb2()
h.a.uniform3f(h.d,g,f,n)
n=j.gc7()
f=i.b
g=n.gaJ(n)
h=n.gaK(n)
n=n.gb2()
f.a.uniform3f(f.d,g,h,n)
n=j.gbp(j)
h=i.c
g=n.gaJ(n)
f=n.gaK(n)
n=n.gb2()
h.a.uniform3f(h.d,g,f,n)
n=m.c6(j.gbO(j))
f=n.a
if(typeof f!=="number")return f.l()
g=n.b
if(typeof g!=="number")return g.l()
h=n.c
if(typeof h!=="number")return h.l()
h=n.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gS(j)
g=i.f
f=h.gb5()
n=h.gaP()
h=h.gaY()
g.a.uniform3f(g.d,f,n,h)
h=j.gbq()
n=h.gd2(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gfX()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gbB())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.ex
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.y,u=v.length,p=[P.C],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
h=this.a.cY
if(l>=h.length)return H.c(h,l)
i=h[l]
h=j.gbq()
H.v(s,"$ise",n,"$ase")
if(!C.a.b1(s,h)){h.sbB(s.length)
C.a.h(s,h)}e=m.l(0,j.ga_(j))
h=j.ga_(j).b9(new V.aA(0,0,0))
g=i.b
f=h.gdf(h)
d=h.gdg(h)
h=h.gdh(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b9(new V.aA(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.eI(0)
d=i.d
o=new Float32Array(H.bG(H.v(new V.eW(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ab(0,!0),"$ise",p,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.gS(j)
h=i.e
f=d.gb5()
g=d.gaP()
d=d.gaY()
h.a.uniform3f(h.d,f,g,d)
d=j.gbq()
h=d.gd2(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gd2(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gky(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcI()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcJ()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcK()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.ey
v.a.uniform1i(v.d,r)
v=a.db
m=v.ga_(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.F)(v),++k){j=v[k]
p=this.a.cZ
if(l>=p.length)return H.c(p,l)
i=p[l]
p=j.gbq()
H.v(s,"$ise",z,"$ase")
if(!C.a.b1(s,p)){p.sbB(s.length)
C.a.h(s,p)}p=j.gbo(j)
n=i.b
h=p.gdf(p)
g=p.gdg(p)
p=p.gdh(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gbO(j)
g=i.c
h=p.gaJ(p)
n=p.gaK(p)
p=p.gb2()
g.a.uniform3f(g.d,h,n,p)
p=j.gc7()
n=i.d
h=p.gaJ(p)
g=p.gaK(p)
p=p.gb2()
n.a.uniform3f(n.d,h,g,p)
p=j.gbp(j)
g=i.e
h=p.gaJ(p)
n=p.gaK(p)
p=p.gb2()
g.a.uniform3f(g.d,h,n,p)
p=m.b9(j.gbo(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gbq()
n=p.gd2(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gfX()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gbB())
p=i.x
p.a.uniform1i(p.d,0)}p=j.gS(j)
n=i.y
h=p.gb5()
g=p.gaP()
p=p.gaY()
n.a.uniform3f(n.d,h,g,p)
p=j.gkI()
g=i.z
g.a.uniform1f(g.d,p)
p=j.gkJ()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gcI()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gcJ()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gcK()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.c:break
case C.h:break
case C.e:this.Z(s,this.Q.d)
z=this.a
v=this.Q.d
z.ao(z.ei,z.bW,v)
break
case C.f:this.Z(s,this.Q.e)
z=this.a
v=this.Q.e
z.ai(z.ej,z.bW,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga_(v).eI(0)
a.Q=v}z=z.id
z.toString
z.ad(v.ab(0,!0))}if(x.dy){this.Z(s,this.ch)
z=this.a
v=this.ch
z.ai(z.ek,z.el,v)
switch(x.r){case C.c:break
case C.h:z=this.a
v=this.cx.f
z=z.bX
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.e:this.Z(s,this.cx.d)
z=this.a
v=this.cx.d
z.ao(z.em,z.bY,v)
v=this.a
z=this.cx.f
v=v.bX
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.f:this.Z(s,this.cx.e)
z=this.a
v=this.cx.e
z.ai(z.en,z.bY,v)
v=this.a
z=this.cx.f
v=v.bX
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.c:break
case C.h:z=this.a
v=this.cy.f
z=z.c_
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bZ
v.a.uniform1f(v.d,p)
break
case C.e:this.Z(s,this.cy.d)
z=this.a
v=this.cy.d
z.ao(z.eo,z.c0,v)
v=this.a
z=this.cy.f
v=v.c_
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bZ
z.a.uniform1f(z.d,p)
break
case C.f:this.Z(s,this.cy.e)
z=this.a
v=this.cy.e
z.ai(z.ep,z.c0,v)
v=this.a
z=this.cy.f
v=v.c_
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bZ
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.h:z=this.a
u=this.db.f
z=z.c1
z.a.uniform1f(z.d,u)
break
case C.e:this.Z(s,this.db.d)
z=this.a
u=this.db.d
z.ao(z.eq,z.c2,u)
u=this.a
z=this.db.f
u=u.c1
u.a.uniform1f(u.d,z)
break
case C.f:this.Z(s,this.db.e)
z=this.a
u=this.db.e
z.ai(z.er,z.c2,u)
u=this.a
z=this.db.f
u=u.c1
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q){z=s[q]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=H.k(b.e,"$iscA")
z.aG(a)
z.aN(a)
z.f_(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q){z=s[q]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.eb()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.dF().ap},
q:{
eU:function(){var z,y,x
z=new O.cJ()
y=O.dh(V.aV)
z.e=y
y.bx(z.gh8(),z.gh9())
y=new O.bp(z,"emission")
y.c=C.c
y.f=new V.a1(0,0,0)
z.f=y
y=new O.bp(z,"ambient")
y.c=C.c
y.f=new V.a1(0,0,0)
z.r=y
y=new O.bp(z,"diffuse")
y.c=C.c
y.f=new V.a1(0,0,0)
z.x=y
y=new O.bp(z,"invDiffuse")
y.c=C.c
y.f=new V.a1(0,0,0)
z.y=y
y=new O.jC(z,"specular")
y.c=C.c
y.f=new V.a1(0,0,0)
y.ch=100
z.z=y
y=new O.jz(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.bp(z,"reflect")
y.c=C.c
y.f=new V.a1(0,0,0)
z.cx=y
y=new O.jB(z,"refract")
y.c=C.c
y.f=new V.a1(0,0,0)
y.ch=1
z.cy=y
y=new O.jy(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.jg()
y.cg(D.af)
y.e=H.f([],[D.ik])
y.f=H.f([],[D.jQ])
y.r=H.f([],[D.kq])
y.x=H.f([],[D.kB])
y.y=H.f([],[D.kC])
y.z=H.f([],[D.kD])
y.Q=null
y.ch=null
y.di(y.gh7(),y.ghr(),y.ght())
z.dx=y
x=y.Q
if(x==null){x=D.S()
y.Q=x
y=x}else y=x
y.h(0,z.ghD())
y=z.dx
x=y.ch
if(x==null){x=D.S()
y.ch=x
y=x}else y=x
y.h(0,z.gbz())
z.dy=null
return z}}},jy:{"^":"du;0f,a,b,0c,0d,0e",
bH:function(a){var z,y
z=this.f
if(!$.r.$2(z,a)){y=this.f
this.f=a
z=new D.E(this.b,y,a,this,[P.C])
z.b=!0
this.a.F(z)}},
bc:function(){this.dm()
this.bH(1)},
aV:function(){this.ce()
this.bH(1)},
sf2:function(a,b){var z
if(b==null)b=1
if(b<=0)this.e7(0)
else if(this.c===C.c){this.c=C.h
this.ce()
this.bH(1)
z=this.a
z.a=null
z.F(null)}this.bH(b)}},du:{"^":"b;",
F:[function(a){this.a.F(H.d(a,"$isA"))},function(){return this.F(null)},"fp","$1","$0","gbz",0,2,3],
bc:["dm",function(){}],
aV:["ce",function(){}],
dU:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gA().a1(0,this.gbz())
y=this.d
this.d=a
if(a!=null)a.gA().h(0,this.gbz())
z=new D.E(this.b+".texture2D",y,this.d,this,[T.fg])
z.b=!0
this.a.F(z)}},
dV:function(a){},
e7:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.F(null)}this.bc()
this.dU(null)
this.dV(null)
this.a.F(null)},
sbr:function(a){var z=this.c
if(z!==C.e){if(z===C.c)this.aV()
this.c=C.e
this.dV(null)
z=this.a
z.a=null
z.F(null)}this.dU(a)}},jz:{"^":"du;a,b,0c,0d,0e"},bp:{"^":"du;0f,a,b,0c,0d,0e",
cD:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.E(this.b+".color",z,a,this,[V.a1])
y.b=!0
this.a.F(y)}},
bc:["dn",function(){this.dm()
this.cD(new V.a1(0,0,0))}],
aV:["cf",function(){this.ce()
this.cD(new V.a1(1,1,1))}],
sS:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.aV()
z=this.a
z.a=null
z.F(null)}this.cD(b)}},jB:{"^":"bp;0ch,0f,a,b,0c,0d,0e",
dT:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".refraction",y,a,this,[P.C])
z.b=!0
this.a.F(z)}},
bc:function(){this.dn()
this.dT(1)},
aV:function(){this.cf()
this.dT(1)}},jC:{"^":"bp;0ch,0f,a,b,0c,0d,0e",
bI:function(a){var z,y
z=this.ch
if(!$.r.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".shininess",y,a,this,[P.C])
z.b=!0
this.a.F(z)}},
bc:function(){this.dn()
this.bI(100)},
aV:function(){this.cf()
this.bI(100)}},cn:{"^":"b;"}}],["","",,T,{"^":"",dI:{"^":"da;"},fg:{"^":"dI;"},ky:{"^":"fg;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gA:function(){var z=this.y
if(z==null){z=D.S()
this.y=z}return z}},kz:{"^":"b;a,0b,0c,0d,0e",
iX:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.ky()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ak
W.a0(x,"load",H.j(new T.kA(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bi:function(a){return this.iX(a,!1,!1,!1,!1)},
hF:function(a,b,c){var z,y,x,w
b=V.e4(b,2)
z=V.e4(a.width,2)
y=V.e4(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.df(null,null)
x.width=z
x.height=y
w=H.d(C.l.f5(x,"2d"),"$isej")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nH(w.getImageData(0,0,x.width,x.height))}}},kA:{"^":"h:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.hF(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.Y.jv(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.iC()}++x.e}}}],["","",,V,{"^":"",hT:{"^":"b;",
bj:function(a,b){return!0},
j:function(a){return"all"},
$iscg:1},cg:{"^":"b;"},eT:{"^":"b;",
bj:["fe",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x)if(z[x].bj(0,b))return!0
return!1}],
j:["dl",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.F)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$iscg:1},bY:{"^":"eT;0a",
bj:function(a,b){return!this.fe(0,b)},
j:function(a){return"!["+this.dl(0)+"]"}},kh:{"^":"b;0a",
fi:function(a){var z,y
if(a.a.length<=0)throw H.a(P.q("May not create a SetMatcher with zero characters."))
z=new H.aQ(0,0,[P.o,P.L])
for(y=new H.eR(a,a.gk(a),0,[H.aC(a,"w",0)]);y.H();)z.n(0,y.d,!0)
this.a=z},
bj:function(a,b){return this.a.bN(0,b)},
j:function(a){var z=this.a
return P.cm(z.gaA(z),0,null)},
$iscg:1,
q:{
ap:function(a){var z=new V.kh()
z.fi(a)
return z}}},fa:{"^":"b;a,b,0c,0d",
giZ:function(a){return this.b},
G:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fn(this.a.R(0,b))
w.a=H.f([],[V.cg])
w.c=!1
C.a.h(this.c,w)
return w},
iG:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.F)(z),++x){w=z[x]
if(w.bj(0,a))return w}return},
j:function(a){return this.b}},fk:{"^":"b;a,b,c",
j:function(a){var z,y
z=H.hJ(this.b,"\n","\\n")
y=H.hJ(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fl:{"^":"b;a,b,0c",
j:function(a){return this.b}},kI:{"^":"b;0a,0b,0c",
R:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.fa(this,b)
z.c=H.f([],[V.fn])
this.a.n(0,b,z)}return z},
bt:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.fl(this,a)
y=P.i
z.c=new H.aQ(0,0,[y,y])
this.b.n(0,a,z)}return z},
jA:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.f([],[V.fk])
y=this.c
x=[P.o]
w=H.f([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.iG(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cm(w,0,null)
throw H.a(P.q("Untokenizable string [state: "+y.giZ(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.f([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cm(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.fk(o==null?p.b:o,q,t)}++t}}}},fn:{"^":"eT;b,0c,0a",
j:function(a){return this.b.b+": "+this.dl(0)}}}],["","",,X,{"^":"",ei:{"^":"b;",$isb4:1},iz:{"^":"fe;0a,0b,0c,0d,0e,0f,0r,0x",
gA:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z}},jO:{"^":"b;0a,0b,0c,0d,0e,0f",
gA:function(){var z=this.f
if(z==null){z=D.S()
this.f=z}return z},
bb:[function(a){var z
H.d(a,"$isA")
z=this.f
if(!(z==null))z.J(a)},function(){return this.bb(null)},"jD","$1","$0","gdt",0,2,3],
sbk:function(a){var z,y
if(!J.R(this.b,a)){z=this.b
if(z!=null)z.gA().a1(0,this.gdt())
y=this.b
this.b=a
if(a!=null)a.gA().h(0,this.gdt())
z=new D.E("mover",y,this.b,this,[U.av])
z.b=!0
this.bb(z)}},
$isb4:1,
$isei:1},fe:{"^":"b;"}}],["","",,V,{"^":"",
oA:function(a){P.kH(C.G,new V.oB(a))},
i1:{"^":"b;a,b,0c,0d",
a9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.j(c,{func:1,ret:-1,args:[P.L]})
if(this.c==null)return
z=this.d.length
y=P.cp().gb4().i(0,this.a)
if(y==null||y.length<=z){x=d
w=!0}else{if(z>=y.length)return H.c(y,z)
x=y[z]==="1"
w=!1}c.$1(x)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.cx(this.c).h(0,u)
s=W.eD("checkbox")
s.checked=x
t=W.ak
W.a0(s,"change",H.j(new V.i2(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
u.appendChild(s)
r=v.createElement("span")
r.textContent=b
u.appendChild(r)
J.cx(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(w)this.e0(z,x)},
t:function(a,b,c){return this.a9(a,b,c,!1)},
e0:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.cp().gb4().i(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.b.j8(y,a-x+1,"0")
w=a>0?C.b.u(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.b.au(y,x)
v=P.cp()
x=P.i
u=P.eQ(v.gb4(),x,x)
u.n(0,z,w)
t=v.d9(0,u)
z=window.history
x=t.j(0)
z.toString
z.replaceState(new P.h4([],[]).c8(""),"",x)}},
i2:{"^":"h:13;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.e0(this.d,z.checked)}},
oB:{"^":"h:56;a",
$1:function(a){H.d(a,"$isbz")
P.cu(C.i.eZ(this.a.giM(),2)+" fps")}},
k2:{"^":"b;a,b,0c",
a9:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.j(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cp().gb4().i(0,H.m(z))
if(y==null)if(d){c.$0()
this.e_(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.cx(this.c).h(0,v)
t=W.eD("radio")
t.checked=x
t.name=z
z=W.ak
W.a0(t,"change",H.j(new V.k3(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.cx(this.c).h(0,w.createElement("br"))},
t:function(a,b,c){return this.a9(a,b,c,!1)},
e_:function(a){var z,y,x,w,v
z=P.cp()
y=P.i
x=P.eQ(z.gb4(),y,y)
x.n(0,this.a,a)
w=z.d9(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.h4([],[]).c8(""),"",v)},
q:{
f4:function(a,b){var z,y
z=new V.k2(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.p("Failed to find "+a+" for RadioGroup")
return z}}},
k3:{"^":"h:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.e_(this.d)}}},
km:{"^":"b;0a,0b",
fj:function(a,b){var z,y,x,w,v,u,t
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
t=W.ak
W.a0(z,"scroll",H.j(new V.kp(x),{func:1,ret:-1,args:[t]}),!1,t)},
e3:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$ise",[P.i],"$ase")
this.hI()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.jA(C.a.iR(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.F)(x),++v){u=x[v]
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
if(H.hI(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.c(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cY(C.T,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.m(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
im:function(a){var z,y,x,w,v,u,t
H.v(a,"$ise",[P.i],"$ase")
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
x=H.d(w.insertCell(-1),"$isdH").style
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
t=H.d(w.insertCell(-1),"$isdH")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hI:function(){var z,y,x,w
if(this.b!=null)return
z=new V.kI()
y=P.i
z.a=new H.aQ(0,0,[y,V.fa])
z.b=new H.aQ(0,0,[y,V.fl])
z.c=z.R(0,"Start")
y=z.R(0,"Start").G(0,"Bold")
x=V.ap(new H.ah("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Bold").G(0,"Bold")
x=new V.bY()
w=[V.cg]
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.ap(new H.ah("*"))
C.a.h(x.a,y)
y=z.R(0,"Bold").G(0,"BoldEnd")
x=V.ap(new H.ah("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").G(0,"Italic")
x=V.ap(new H.ah("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Italic").G(0,"Italic")
x=new V.bY()
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.ap(new H.ah("_"))
C.a.h(x.a,y)
y=z.R(0,"Italic").G(0,"ItalicEnd")
x=V.ap(new H.ah("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").G(0,"Code")
x=V.ap(new H.ah("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Code").G(0,"Code")
x=new V.bY()
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.ap(new H.ah("`"))
C.a.h(x.a,y)
y=z.R(0,"Code").G(0,"CodeEnd")
x=V.ap(new H.ah("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").G(0,"LinkHead")
x=V.ap(new H.ah("["))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"LinkHead").G(0,"LinkTail")
x=V.ap(new H.ah("|"))
C.a.h(y.a,x)
x=z.R(0,"LinkHead").G(0,"LinkEnd")
y=V.ap(new H.ah("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkHead").G(0,"LinkHead")
y=new V.bY()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.ap(new H.ah("|]"))
C.a.h(y.a,x)
x=z.R(0,"LinkTail").G(0,"LinkEnd")
y=V.ap(new H.ah("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkTail").G(0,"LinkTail")
y=new V.bY()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.ap(new H.ah("|]"))
C.a.h(y.a,x)
C.a.h(z.R(0,"Start").G(0,"Other").a,new V.hT())
x=z.R(0,"Other").G(0,"Other")
y=new V.bY()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.ap(new H.ah("*_`["))
C.a.h(y.a,x)
x=z.R(0,"BoldEnd")
x.d=x.a.bt("Bold")
x=z.R(0,"ItalicEnd")
x.d=x.a.bt("Italic")
x=z.R(0,"CodeEnd")
x.d=x.a.bt("Code")
x=z.R(0,"LinkEnd")
x.d=x.a.bt("Link")
x=z.R(0,"Other")
x.d=x.a.bt("Other")
this.b=z},
q:{
kn:function(a,b){var z=new V.km()
z.fj(a,!0)
return z}}},
kp:{"^":"h:13;a",
$1:function(a){P.fi(C.q,new V.ko(this.a))}},
ko:{"^":"h:0;a",
$0:function(){var z,y,x
z=C.i.at(document.documentElement.scrollTop)
y=this.a.style
x=H.m(-0.01*z)+"px"
y.top=x}}}],["","",,G,{"^":"",
hE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=V.kn("Test 032",!0)
x=W.df(null,null)
x.className="pageLargeCanvas"
x.id="testCanvas"
y.a.appendChild(x)
w=[P.i]
y.e3(H.f(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],w))
y.im(H.f(["controls","shapes","scalars"],w))
y.e3(H.f(["\xab[Back to Tests|../]"],w))
w=document
v=w.getElementById("testCanvas")
if(v==null)H.p(P.q("Failed to find an element with the identifier, testCanvas."))
u=E.kF(v,!0,!0,!0,!1)
z.a=!0
t=E.cC(null,!0,null,"",null,null)
y=new U.ez()
y.cg(U.av)
y.bx(y.gh6(),y.ghs())
y.e=null
y.f=V.ch()
y.r=0
s=u.r
r=new U.l7()
q=U.dk()
q.sde(0,!0)
q.sd3(6.283185307179586)
q.sd5(0)
q.saa(0,0)
q.sd4(100)
q.sW(0)
q.scR(0.5)
r.b=q
p=r.gaU()
q.gA().h(0,p)
q=U.dk()
q.sde(0,!0)
q.sd3(6.283185307179586)
q.sd5(0)
q.saa(0,0)
q.sd4(100)
q.sW(0)
q.scR(0.5)
r.c=q
q.gA().h(0,p)
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
o=new X.aX(!1,!1,!1)
n=r.d
r.d=o
q=[X.aX]
p=new D.E("modifiers",n,o,r,q)
p.b=!0
r.U(p)
p=r.f
if(p!==!1){r.f=!1
p=new D.E("invertX",p,!1,r,[P.L])
p.b=!0
r.U(p)}p=r.r
if(p!==!0){r.r=!0
p=new D.E("invertY",p,!0,r,[P.L])
p.b=!0
r.U(p)}r.be(s)
y.h(0,r)
s=u.r
r=new U.l6()
p=U.dk()
p.sde(0,!0)
p.sd3(6.283185307179586)
p.sd5(0)
p.saa(0,0)
p.sd4(100)
p.sW(0)
p.scR(0.2)
r.b=p
p.gA().h(0,r.gaU())
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
o=new X.aX(!0,!1,!1)
n=r.c
r.c=o
p=new D.E("modifiers",n,o,r,q)
p.b=!0
r.U(p)
r.be(s)
y.h(0,r)
s=u.r
r=new U.l8()
r.c=0.01
r.d=0
r.e=0
o=new X.aX(!1,!1,!1)
r.b=o
q=new D.E("modifiers",null,o,r,q)
q.b=!0
r.U(q)
r.be(s)
y.h(0,r)
t.sbk(y)
m=new O.iF()
m.b=new V.G(0,0,-1)
m.c=new V.X(0.2,0.3,0.4,1)
m.d=new V.X(0.1,0.2,0.3,1)
m.e=new V.X(0.7,0.7,0.7,1)
m.f=new V.X(0.3,0.3,0.3,1)
m.r=new V.X(0.5,0.5,0.5,1)
m.x=new V.X(0.5,0.5,0.5,1)
m.y=new V.X(1,1,1,1)
m.z=new V.X(0.8,0.8,0.8,1)
m.Q=!1
m.ch=!1
m.cx=!1
m.cy=!1
m.db=!1
m.dx=!1
m.dy=!1
m.fr=!1
m.fx=!1
m.fy=!1
m.go=!1
m.id=!1
m.k1=!1
m.k2=!1
m.k3=!1
m.k4=!1
m.r1=!1
m.r2=1
m.sac(0.4)
y=new M.is()
s=O.dh(E.ai)
y.d=s
s.bx(y.ghb(),y.ghc())
y.e=null
y.f=null
y.r=null
y.x=null
l=new X.jO()
l.c=1.0471975511965976
l.d=0.1
l.e=2000
l.sbk(null)
s=l.c
if(!$.r.$2(s,1.0471975511965976)){n=l.c
l.c=1.0471975511965976
s=new D.E("fov",n,1.0471975511965976,l,[P.C])
s.b=!0
l.bb(s)}s=l.d
if(!$.r.$2(s,0.1)){n=l.d
l.d=0.1
s=new D.E("near",n,0.1,l,[P.C])
s.b=!0
l.bb(s)}s=l.e
if(!$.r.$2(s,2000)){n=l.e
l.e=2000
s=new D.E("far",n,2000,l,[P.C])
s.b=!0
l.bb(s)}s=y.a
if(s!==l){if(s!=null)s.gA().a1(0,y.gav())
n=y.a
y.a=l
l.gA().h(0,y.gav())
s=new D.E("camera",n,y.a,y,[X.ei])
s.b=!0
y.aR(s)}k=new X.iz()
s=new V.X(0,0,0,1)
k.a=s
k.b=!0
k.c=2000
k.d=!0
k.e=0
k.f=!1
s=V.f6(0,0,1,1)
k.r=s
s=y.b
if(s!==k){if(s!=null)s.gA().a1(0,y.gav())
n=y.b
y.b=k
k.gA().h(0,y.gav())
s=new D.E("target",n,y.b,y,[X.fe])
s.b=!0
y.aR(s)}y.sb8(null)
y.sb8(m)
y.d.h(0,t)
s=y.a
j=V.eY(0,0,5)
r=new U.em()
r.a=j
s.sbk(r)
s=u.d
if(s!==y){if(s!=null)s.gA().a1(0,u.gdr())
u.d=y
y.gA().h(0,u.gdr())
u.fn()}y=new V.i1("controls",!0)
w=w.getElementById("controls")
y.c=w
if(w==null)H.p("Failed to find controls for CheckGroup")
y.d=H.f([],[W.ek])
y.a9(0,"Material",new G.nX(z,t),!0)
y.t(0,"Filled",new G.nY(m))
y.a9(0,"Wire Frame",new G.nZ(m),!0)
y.t(0,"Vertices",new G.o9(m))
y.t(0,"Normals",new G.ok(m))
y.t(0,"Binormals",new G.om(m))
y.t(0,"Tangentals",new G.on(m))
y.t(0,"Face Centers",new G.oo(m))
y.t(0,"Face Normals",new G.op(m))
y.t(0,"Face Binormals",new G.oq(m))
y.t(0,"Face Tangentals",new G.or(m))
y.t(0,"Colors",new G.o_(m))
y.t(0,"Textures2D",new G.o0(m))
y.t(0,"TexturesCube",new G.o1(m))
y.t(0,"Weight",new G.o2(m))
y.a9(0,"Axis",new G.o3(m),!0)
y.t(0,"AABB",new G.o4(m))
z=new G.ou(z,u,t,new G.os(),m)
y=V.f4("shapes",!0)
y.a9(0,"Cube",new G.o5(z),!0)
y.t(0,"Low Poly Tree",new G.o6(z))
y.t(0,"Low Poly Wolf",new G.o7(z))
y.t(0,"Plant",new G.o8(z))
z=V.f4("scalars",!0)
z.t(0,"0.01",new G.oa(m))
z.t(0,"0.02",new G.ob(m))
z.t(0,"0.04",new G.oc(m))
z.t(0,"0.06",new G.od(m))
z.t(0,"0.08",new G.oe(m))
z.t(0,"0.1",new G.of(m))
z.t(0,"0.2",new G.og(m))
z.a9(0,"0.4",new G.oh(m),!0)
z.t(0,"0.6",new G.oi(m))
z.t(0,"0.8",new G.oj(m))
z.t(0,"1.0",new G.ol(m))
V.oA(u)},
nX:{"^":"h:1;a,b",
$1:function(a){var z
this.a.a=a
z=this.b.y.a
if(z.length>1)J.hR(z[0],a)}},
nY:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.Q!==a){z.Q=a
y=new D.E("showFilled",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
nZ:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.ch!==a){z.ch=a
y=new D.E("showWireFrame",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
o9:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cx!==a){z.cx=a
y=new D.E("showVertices",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
ok:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cy!==a){z.cy=a
y=new D.E("showNormals",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
om:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.db!==a){z.db=a
y=new D.E("showBinormals",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
on:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dx!==a){z.dx=a
y=new D.E("showTangentals",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
oo:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fr!==a){z.fr=a
y=new D.E("showFaceCenters",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
op:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fx!==a){z.fx=a
y=new D.E("showFaceNormals",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
oq:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fy!==a){z.fy=a
y=new D.E("showFaceBinormals",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
or:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.go!==a){z.go=a
y=new D.E("showFaceTangentals",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
o_:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.id!==a){z.id=a
y=new D.E("showColorFill",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
o0:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k1!==a){z.k1=a
y=new D.E("showTxt2DColor",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
o1:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dy!==a){z.dy=a
y=new D.E("showTxtCube",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
o2:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k2!==a){z.k2=a
y=new D.E("showWeight",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
o3:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k3!==a){z.k3=a
y=new D.E("showAxis",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
o4:{"^":"h:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k4!==a){z.k4=a
y=new D.E("showAABB",!a,a,z,[P.L])
y.b=!0
z.F(y)}}},
os:{"^":"h:58;",
$1:function(a){var z,y,x
z=E.cC(null,!0,null,"",null,null)
z.sdj(0,a.c)
y=a.y
x=H.j(new G.ot(z,this),{func:1,ret:-1,args:[H.t(y,0)]})
C.a.v(y.a,x)
return z}},
ot:{"^":"h:59;a,b",
$1:function(a){H.d(a,"$isai")
this.a.y.h(0,this.b.$1(a))}},
ou:{"^":"h:60;a,b,c,d,e",
$1:function(a){var z=0,y=P.a9(null),x=this,w,v,u,t,s
var $async$$1=P.aa(function(b,c){if(b===1)return P.a6(c,y)
while(true)switch(z){case 0:z=2
return P.am(O.cj(a,x.b.f,null,null,!1),$async$$1)
case 2:w=c
w.jp(3.5)
v=x.c
u=v.y
t=u.a
if(t.length>0){u.a=H.f([],[H.t(u,0)])
u.fm(0,t)}v.y.h(0,w)
w.b=x.a.a
s=x.d.$1(w)
s.sb8(x.e)
v.y.h(0,s)
return P.a7(null,y)}})
return P.a8($async$$1,y)}},
o5:{"^":"h:14;a",
$0:function(){var z=0,y=P.a9(P.y),x=this
var $async$$0=P.aa(function(a,b){if(a===1)return P.a6(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/Cube.obj")
return P.a7(null,y)}})
return P.a8($async$$0,y)}},
o6:{"^":"h:14;a",
$0:function(){var z=0,y=P.a9(P.y),x=this
var $async$$0=P.aa(function(a,b){if(a===1)return P.a6(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/tree/tree.obj")
return P.a7(null,y)}})
return P.a8($async$$0,y)}},
o7:{"^":"h:14;a",
$0:function(){var z=0,y=P.a9(P.y),x=this
var $async$$0=P.aa(function(a,b){if(a===1)return P.a6(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/Wolf.obj")
return P.a7(null,y)}})
return P.a8($async$$0,y)}},
o8:{"^":"h:14;a",
$0:function(){var z=0,y=P.a9(P.y),x=this
var $async$$0=P.aa(function(a,b){if(a===1)return P.a6(b,y)
while(true)switch(z){case 0:x.a.$1("../resources/plant/plant.obj")
return P.a7(null,y)}})
return P.a8($async$$0,y)}},
oa:{"^":"h:0;a",
$0:function(){this.a.sac(0.01)}},
ob:{"^":"h:0;a",
$0:function(){this.a.sac(0.02)}},
oc:{"^":"h:0;a",
$0:function(){this.a.sac(0.04)}},
od:{"^":"h:0;a",
$0:function(){this.a.sac(0.06)}},
oe:{"^":"h:0;a",
$0:function(){this.a.sac(0.08)}},
of:{"^":"h:0;a",
$0:function(){this.a.sac(0.1)}},
og:{"^":"h:0;a",
$0:function(){this.a.sac(0.2)}},
oh:{"^":"h:0;a",
$0:function(){this.a.sac(0.4)}},
oi:{"^":"h:0;a",
$0:function(){this.a.sac(0.6)}},
oj:{"^":"h:0;a",
$0:function(){this.a.sac(0.8)}},
ol:{"^":"h:0;a",
$0:function(){this.a.sac(1)}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eH.prototype
return J.eG.prototype}if(typeof a=="string")return J.cf.prototype
if(a==null)return J.eI.prototype
if(typeof a=="boolean")return J.j9.prototype
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.b)return a
return J.ct(a)}
J.nN=function(a){if(typeof a=="number")return J.ce.prototype
if(typeof a=="string")return J.cf.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.b)return a
return J.ct(a)}
J.aB=function(a){if(typeof a=="string")return J.cf.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.b)return a
return J.ct(a)}
J.cr=function(a){if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.b)return a
return J.ct(a)}
J.hw=function(a){if(typeof a=="number")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cS.prototype
return a}
J.cs=function(a){if(typeof a=="string")return J.cf.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cS.prototype
return a}
J.b9=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bU.prototype
return a}if(a instanceof P.b)return a
return J.ct(a)}
J.cw=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nN(a).m(a,b)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).B(a,b)}
J.e6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.hw(a).aO(a,b)}
J.d4=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.hw(a).D(a,b)}
J.W=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hB(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aB(a).i(a,b)}
J.d5=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hB(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cr(a).n(a,b,c)}
J.hL=function(a,b){return J.cs(a).I(a,b)}
J.hM=function(a,b,c){return J.b9(a).hB(a,b,c)}
J.hN=function(a,b,c,d){return J.b9(a).e2(a,b,c,d)}
J.hO=function(a,b){return J.cs(a).X(a,b)}
J.d6=function(a,b,c){return J.aB(a).iw(a,b,c)}
J.d7=function(a,b){return J.cr(a).K(a,b)}
J.hP=function(a,b,c,d){return J.cr(a).aL(a,b,c,d)}
J.d8=function(a,b){return J.cr(a).v(a,b)}
J.cx=function(a){return J.b9(a).gcP(a)}
J.c8=function(a){return J.M(a).gY(a)}
J.bP=function(a){return J.cr(a).ga4(a)}
J.ar=function(a){return J.aB(a).gk(a)}
J.e7=function(a,b){return J.aB(a).O(a,b)}
J.hQ=function(a,b){return J.b9(a).jm(a,b)}
J.hR=function(a,b){return J.b9(a).scT(a,b)}
J.hS=function(a,b){return J.b9(a).sa5(a,b)}
J.e8=function(a,b,c){return J.cs(a).u(a,b,c)}
J.as=function(a){return J.M(a).j(a)}
J.d9=function(a){return J.cs(a).dd(a)}
I.aD=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.de.prototype
C.H=W.bS.prototype
C.I=J.u.prototype
C.a=J.bc.prototype
C.J=J.eG.prototype
C.d=J.eH.prototype
C.r=J.eI.prototype
C.i=J.ce.prototype
C.b=J.cf.prototype
C.Q=J.bU.prototype
C.W=H.dz.prototype
C.X=W.jK.prototype
C.z=J.jP.prototype
C.Y=P.dD.prototype
C.t=J.cS.prototype
C.A=W.c1.prototype
C.B=W.lr.prototype
C.D=new P.hY(!1)
C.C=new P.hX(C.D)
C.E=new P.jN()
C.F=new P.lg()
C.j=new P.mk()
C.c=new A.cB(0,"ColorSourceType.None")
C.h=new A.cB(1,"ColorSourceType.Solid")
C.e=new A.cB(2,"ColorSourceType.Texture2D")
C.f=new A.cB(3,"ColorSourceType.TextureCube")
C.q=new P.bn(0)
C.G=new P.bn(5e6)
C.K=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.L=function(hooks) {
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

C.M=function(getTagFallback) {
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
C.N=function() {
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
C.O=function(hooks) {
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
C.P=function(hooks) {
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
C.w=H.f(I.aD([127,2047,65535,1114111]),[P.o])
C.m=H.f(I.aD([0,0,32776,33792,1,10240,0,0]),[P.o])
C.n=H.f(I.aD([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.o=H.f(I.aD([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.S=H.f(I.aD([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.T=H.f(I.aD([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.p=H.f(I.aD([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.x=H.f(I.aD([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.U=H.f(I.aD([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.y=H.f(I.aD([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.R=H.f(I.aD([]),[P.i])
C.V=new H.ic(0,{},C.R,[P.i,P.i])
C.k=new P.l9(!1)
$.aU=0
$.bQ=null
$.ed=null
$.dW=!1
$.hz=null
$.hr=null
$.hH=null
$.d0=null
$.d2=null
$.e1=null
$.bH=null
$.c4=null
$.c5=null
$.dX=!1
$.Q=C.j
$.et=null
$.es=null
$.er=null
$.eq=null
$.hn=null
$.r=V.jD()
$.iX="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.iP="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.f1=null
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
I.$lazy(y,x,w)}})(["ep","$get$ep",function(){return H.hx("_$dart_dartClosure")},"dq","$get$dq",function(){return H.hx("_$dart_js")},"fo","$get$fo",function(){return H.aZ(H.cR({
toString:function(){return"$receiver$"}}))},"fp","$get$fp",function(){return H.aZ(H.cR({$method$:null,
toString:function(){return"$receiver$"}}))},"fq","$get$fq",function(){return H.aZ(H.cR(null))},"fr","$get$fr",function(){return H.aZ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fv","$get$fv",function(){return H.aZ(H.cR(void 0))},"fw","$get$fw",function(){return H.aZ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aZ(H.fu(null))},"fs","$get$fs",function(){return H.aZ(function(){try{null.$method$}catch(z){return z.message}}())},"fy","$get$fy",function(){return H.aZ(H.fu(void 0))},"fx","$get$fx",function(){return H.aZ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dR","$get$dR",function(){return P.lw()},"c6","$get$c6",function(){return[]},"fJ","$get$fJ",function(){return P.ld()},"fR","$get$fR",function(){return H.jI(H.bG(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))},"he","$get$he",function(){return P.dC("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hl","$get$hl",function(){return P.nm()},"en","$get$en",function(){return{}},"fM","$get$fM",function(){return Z.aK(0)},"fK","$get$fK",function(){return Z.aK(511)},"aN","$get$aN",function(){return Z.aK(1)},"aM","$get$aM",function(){return Z.aK(2)},"aL","$get$aL",function(){return Z.aK(4)},"b0","$get$b0",function(){return Z.aK(8)},"b1","$get$b1",function(){return Z.aK(16)},"b5","$get$b5",function(){return Z.aK(32)},"bD","$get$bD",function(){return Z.aK(64)},"fL","$get$fL",function(){return Z.aK(96)},"bg","$get$bg",function(){return Z.aK(128)},"b_","$get$b_",function(){return Z.aK(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.y},{func:1,ret:P.y,args:[P.L]},{func:1,ret:F.aq,args:[F.aq]},{func:1,ret:-1,opt:[D.A]},{func:1,ret:P.y,args:[F.T]},{func:1,ret:-1,args:[D.A]},{func:1,ret:P.y,args:[F.I]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aR]},{func:1,ret:-1,args:[W.ak]},{func:1,ret:P.y,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.o,[P.n,E.ai]]},{func:1,ret:P.y,args:[W.ak]},{func:1,ret:[P.ae,P.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.y,args:[D.A]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:-1,args:[P.b],opt:[P.at]},{func:1,ret:P.i,args:[P.o]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.bV]},{func:1,ret:P.y,args:[,]},{func:1,ret:-1,args:[P.o,[P.n,D.af]]},{func:1,ret:P.C},{func:1,ret:-1,args:[P.o,[P.n,U.av]]},{func:1,ret:-1,args:[P.o,[P.n,V.aV]]},{func:1,ret:W.a4,args:[W.N]},{func:1,ret:P.y,args:[W.ck]},{func:1,args:[,P.i]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.L,args:[W.N]},{func:1,ret:-1,args:[P.i,P.o]},{func:1,args:[P.i]},{func:1,ret:-1,args:[,]},{func:1,ret:P.y,args:[,P.at]},{func:1,ret:P.y,args:[P.ab]},{func:1,ret:P.y,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.y,args:[P.o,,]},{func:1,ret:P.V,args:[P.o]},{func:1,ret:P.L,args:[P.C,P.C]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.L,args:[[P.n,D.af]]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.y,args:[P.i,,]},{func:1,ret:P.y,args:[P.i]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:P.y,args:[,],opt:[,]},{func:1,ret:[P.ax,,],args:[,]},{func:1,ret:F.aq,args:[F.aq],named:{color:V.X}},{func:1,ret:P.y,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[F.I,F.I]},{func:1,ret:P.y,args:[F.bd]},{func:1,ret:P.V,args:[,,]},{func:1,ret:P.o,args:[[P.e,P.o],P.o]},{func:1,ret:P.y,args:[P.bz]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:E.ai,args:[E.ai]},{func:1,ret:P.y,args:[E.ai]},{func:1,ret:[P.ae,,],args:[P.i]},{func:1,ret:P.i,args:[W.bS]},{func:1,ret:-1,opt:[P.b]},{func:1,ret:-1,args:[W.c1]}]
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
if(x==y)H.oC(d||a)
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
Isolate.aD=a.aD
Isolate.e0=a.e0
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
if(typeof dartMainRunner==="function")dartMainRunner(G.hE,[])
else G.hE([])})})()
//# sourceMappingURL=test.dart.js.map
