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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dD(this,d,e,f,true,[],a1).prototype
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
var dart=[["","",,H,{"^":"",oc:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cH:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dI==null){H.mV()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c9("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d2()]
if(v!=null)return v
v=H.n_(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d2(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
r:{"^":"b;",
u:function(a,b){return a===b},
gU:function(a){return H.bN(a)},
i:["eu",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
i6:{"^":"r;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isai:1},
el:{"^":"r;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isH:1},
d3:{"^":"r;",
gU:function(a){return 0},
i:["ev",function(a){return String(a)}]},
iP:{"^":"d3;"},
ca:{"^":"d3;"},
c6:{"^":"d3;",
i:function(a){var z=a[$.$get$e6()]
if(z==null)return this.ev(a)
return"JavaScript function for "+H.l(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscZ:1},
b9:{"^":"r;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.u(P.A("add"))
a.push(b)},
M:function(a,b){var z
if(!!a.fixed$length)H.u(P.A("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b4(a))}},
F:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hS:function(a){return this.F(a,"")},
hJ:function(a,b,c,d){var z,y,x
H.z(b,d)
H.f(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b4(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
bM:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a_(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gaE:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.i4())},
aD:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.u(P.A("fill range"))
P.aM(b,c,a.length,null,null,null)
for(z=b;z.P(0,c);z=z.D(0,1))a[z]=d},
b1:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
i:function(a){return P.d0(a,"[","]")},
ga_:function(a){return new J.aw(a,a.length,0,[H.y(a,0)])},
gU:function(a){return H.bN(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cg(b,"newLength",null))
if(b<0)throw H.a(P.a_(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aG(a,b))
if(b>=a.length||b<0)throw H.a(H.aG(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.u(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aG(a,b))
if(b>=a.length||b<0)throw H.a(H.aG(a,b))
a[b]=c},
$isk:1,
$isc:1,
p:{
i5:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cg(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a_(a,0,4294967295,"length",null))
return J.ei(new Array(a),b)},
ei:function(a,b){return J.bE(H.e(a,[b]))},
bE:function(a){H.c_(a)
a.fixed$length=Array
return a}}},
ob:{"^":"b9;$ti"},
aw:{"^":"b;a,b,c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c4:{"^":"r;",
ghR:function(a){return a===0?1/a<0:a<0},
iu:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cp:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
eg:function(a,b){var z
if(b>20)throw H.a(P.a_(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghR(a))return"-"+z
return z},
bd:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a_(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.u(P.A("Unexpected toString result: "+z))
x=J.aH(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.af(b))
return a*b},
bi:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ey:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.de(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.de(a,b)},
de:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aN:function(a,b){var z
if(a>0)z=this.dc(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fU:function(a,b){if(b<0)throw H.a(H.af(b))
return this.dc(a,b)},
dc:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.a(H.af(b))
return a<b},
$isq:1,
$isX:1},
ek:{"^":"c4;",$ism:1},
ej:{"^":"c4;"},
c5:{"^":"r;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aG(a,b))
if(b<0)throw H.a(H.aG(a,b))
if(b>=a.length)H.u(H.aG(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aG(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.N(b)
if(typeof b!=="string")throw H.a(P.cg(b,null,null))
return a+b},
aV:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.af(b))
c=P.aM(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.u(H.af(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a9:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.u(H.af(c))
if(typeof c!=="number")return c.P()
if(c<0||c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a8:function(a,b){return this.a9(a,b,0)},
v:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.af(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.a(P.cv(b,null,null))
if(b>c)throw H.a(P.cv(b,null,null))
if(c>a.length)throw H.a(P.cv(c,null,null))
return a.substring(b,c)},
aF:function(a,b){return this.v(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
i5:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ad:function(a,b){return this.i5(a,b," ")},
dY:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dX:function(a,b){return this.dY(a,b,0)},
hx:function(a,b,c){if(c>a.length)throw H.a(P.a_(c,0,a.length,null,null))
return H.hb(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseB:1,
$isi:1}}],["","",,H,{"^":"",
cI:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
i4:function(){return new P.js("No element")},
a4:{"^":"k0;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.X(this.a,b)},
$ascz:function(){return[P.m]},
$asx:function(){return[P.m]},
$ask:function(){return[P.m]},
$asc:function(){return[P.m]}},
hP:{"^":"k;"},
eq:{"^":"b;a,b,c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.aH(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b4(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
iu:{"^":"k;a,b,$ti",
ga_:function(a){return new H.iv(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.av(this.a)},
J:function(a,b){return this.b.$1(J.cO(this.a,b))},
$ask:function(a,b){return[b]}},
iv:{"^":"d1;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gT(z))
return!0}this.a=null
return!1},
gT:function(a){return this.a},
$asd1:function(a,b){return[b]}},
kx:{"^":"k;a,b,$ti",
ga_:function(a){return new H.ky(J.by(this.a),this.b,this.$ti)}},
ky:{"^":"d1;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gT(z)))return!0
return!1},
gT:function(a){var z=this.a
return z.gT(z)}},
cm:{"^":"b;$ti"},
cz:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.az(this,"cz",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aD:function(a,b,c,d){H.z(d,H.az(this,"cz",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
k0:{"^":"cq+cz;"}}],["","",,H,{"^":"",
hD:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mQ:function(a){return init.types[H.D(a)]},
h3:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.af(a))
return z},
bN:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iZ:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.N(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a_(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.K(a).$isca){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.aF(w,1)
r=H.dJ(H.c_(H.b0(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iR:function(){if(!!self.location)return self.location.href
return},
eD:function(a){var z,y,x,w,v
H.c_(a)
z=J.av(a)
if(typeof z!=="number")return z.ep()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
j_:function(a){var z,y,x,w
z=H.e([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.af(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aN(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.af(w))}return H.eD(z)},
eE:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.af(x))
if(x<0)throw H.a(H.af(x))
if(x>65535)return H.j_(a)}return H.eD(a)},
j0:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ep()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
ct:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aN(z,10))>>>0,56320|z&1023)}}throw H.a(P.a_(a,0,1114111,null,null))},
ag:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iY:function(a){return a.b?H.ag(a).getUTCFullYear()+0:H.ag(a).getFullYear()+0},
iW:function(a){return a.b?H.ag(a).getUTCMonth()+1:H.ag(a).getMonth()+1},
iS:function(a){return a.b?H.ag(a).getUTCDate()+0:H.ag(a).getDate()+0},
iT:function(a){return a.b?H.ag(a).getUTCHours()+0:H.ag(a).getHours()+0},
iV:function(a){return a.b?H.ag(a).getUTCMinutes()+0:H.ag(a).getMinutes()+0},
iX:function(a){return a.b?H.ag(a).getUTCSeconds()+0:H.ag(a).getSeconds()+0},
iU:function(a){return a.b?H.ag(a).getUTCMilliseconds()+0:H.ag(a).getMilliseconds()+0},
p:function(a){throw H.a(H.af(a))},
d:function(a,b){if(a==null)J.av(a)
throw H.a(H.aG(a,b))},
aG:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.D(J.av(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cv(b,"index",null)},
mK:function(a,b,c){if(a>c)return new P.cu(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cu(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
af:function(a){return new P.aI(!0,a,null,null)},
mz:function(a){if(typeof a!=="number")throw H.a(H.af(a))
return a},
a:function(a){var z
if(a==null)a=new P.eA()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hd})
z.name=""}else z.toString=H.hd
return z},
hd:function(){return J.ac(this.dartException)},
u:function(a){throw H.a(a)},
B:function(a){throw H.a(P.b4(a))},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ni(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aN(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d4(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ez(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eW()
u=$.$get$eX()
t=$.$get$eY()
s=$.$get$eZ()
r=$.$get$f2()
q=$.$get$f3()
p=$.$get$f0()
$.$get$f_()
o=$.$get$f5()
n=$.$get$f4()
m=v.ac(y)
if(m!=null)return z.$1(H.d4(H.N(y),m))
else{m=u.ac(y)
if(m!=null){m.method="call"
return z.$1(H.d4(H.N(y),m))}else{m=t.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=r.ac(y)
if(m==null){m=q.ac(y)
if(m==null){m=p.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=o.ac(y)
if(m==null){m=n.ac(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ez(H.N(y),m))}}return z.$1(new H.k_(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eK()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eK()
return a},
bw:function(a){var z
if(a==null)return new H.fz(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fz(a)},
mN:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mX:function(a,b,c,d,e,f){H.h(a,"$iscZ")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mX)
a.$identity=z
return z},
hz:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isc){z.$reflectionInfo=d
x=H.j5(z).r}else x=d
w=e?Object.create(new H.jt().constructor.prototype):Object.create(new H.cR(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aA
if(typeof u!=="number")return u.D()
$.aA=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e3(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mQ,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dX:H.cS
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e3(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hw:function(a,b,c,d){var z=H.cS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e3:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hy(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hw(y,!w,z,b)
if(y===0){w=$.aA
if(typeof w!=="number")return w.D()
$.aA=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bz
if(v==null){v=H.ch("self")
$.bz=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aA
if(typeof w!=="number")return w.D()
$.aA=w+1
t+=w
w="return function("+t+"){return this."
v=$.bz
if(v==null){v=H.ch("self")
$.bz=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hx:function(a,b,c,d){var z,y
z=H.cS
y=H.dX
switch(b?-1:a){case 0:throw H.a(H.jf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hy:function(a,b){var z,y,x,w,v,u,t,s
z=$.bz
if(z==null){z=H.ch("self")
$.bz=z}y=$.dW
if(y==null){y=H.ch("receiver")
$.dW=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hx(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aA
if(typeof y!=="number")return y.D()
$.aA=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aA
if(typeof y!=="number")return y.D()
$.aA=y+1
return new Function(z+y+"}")()},
dD:function(a,b,c,d,e,f,g){var z,y
z=J.bE(H.c_(b))
H.D(c)
y=!!J.K(d).$isc?J.bE(d):d
return H.hz(a,z,c,y,!!e,f,g)},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ay(a,"String"))},
mL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"double"))},
n8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"num"))},
fW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ay(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ay(a,"int"))},
h8:function(a,b){throw H.a(H.ay(a,H.N(b).substring(3)))},
na:function(a,b){var z=J.aH(b)
throw H.a(H.hv(a,z.v(b,3,z.gl(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.h8(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.na(a,b)},
c_:function(a){if(a==null)return a
if(!!J.K(a).$isc)return a
throw H.a(H.ay(a,"List"))},
h5:function(a,b){if(a==null)return a
if(!!J.K(a).$isc)return a
if(J.K(a)[b])return a
H.h8(a,b)},
h_:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
cc:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.h_(J.K(a))
if(z==null)return!1
y=H.h2(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dz)return a
$.dz=!0
try{if(H.cc(a,b))return a
z=H.cf(b)
y=H.ay(a,z)
throw H.a(y)}finally{$.dz=!1}},
dG:function(a,b){if(a!=null&&!H.dC(a,b))H.u(H.ay(a,H.cf(b)))
return a},
fR:function(a){var z
if(a instanceof H.o){z=H.h_(J.K(a))
if(z!=null)return H.cf(z)
return"Closure"}return H.bd(a)},
ng:function(a){throw H.a(new P.hG(H.N(a)))},
h0:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
pj:function(a,b,c){return H.bx(a["$as"+H.l(c)],H.b0(b))},
b_:function(a,b,c,d){var z
H.N(c)
H.D(d)
z=H.bx(a["$as"+H.l(c)],H.b0(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.N(b)
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
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dJ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.l(b[y])}if('func' in a)return H.mp(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.b.D(t,b[r])
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
for(z=H.mM(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.N(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dJ:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.ap("")
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
y=J.K(a)
if(y[b]==null)return!1
return H.fU(H.bx(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.N(b)
H.c_(c)
H.N(d)
if(a==null)return a
z=H.bt(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dJ(c,0,null)
throw H.a(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fU:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.at(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.at(a[y],b,c[y],d))return!1
return!0},
ph:function(a,b,c){return a.apply(b,H.bx(J.K(b)["$as"+H.l(c)],H.b0(b)))},
h4:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="H"||a===-1||a===-2||H.h4(z)}return!1},
dC:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="H"||b===-1||b===-2||H.h4(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dC(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cc(a,b)}y=J.K(a).constructor
x=H.b0(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.at(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dC(a,b))throw H.a(H.ay(a,H.cf(b)))
return a},
at:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.h2(a,b,c,d)
if('func' in a)return c.builtin$cls==="cZ"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,x,d)
else if(H.at(a,b,x,d))return!0
else{if(!('$is'+"bC" in y.prototype))return!1
w=y.prototype["$as"+"bC"]
v=H.bx(w,z?a.slice(1):null)
return H.at(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cf(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fU(H.bx(r,z),b,u,d)},
h2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.at(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.at(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.at(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.at(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.n7(m,b,l,d)},
n7:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.at(c[w],d,a[w],b))return!1}return!0},
pi:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
n_:function(a){var z,y,x,w,v,u
z=H.N($.h1.$1(a))
y=$.cG[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.N($.fT.$2(a,z))
if(z!=null){y=$.cG[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cJ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cK(x)
$.cG[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cJ[z]=x
return x}if(v==="-"){u=H.cK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h7(a,x)
if(v==="*")throw H.a(P.c9(z))
if(init.leafTags[z]===true){u=H.cK(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h7(a,x)},
h7:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dK(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cK:function(a){return J.dK(a,!1,null,!!a.$isF)},
n6:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cK(z)
else return J.dK(z,c,null,null)},
mV:function(){if(!0===$.dI)return
$.dI=!0
H.mW()},
mW:function(){var z,y,x,w,v,u,t,s
$.cG=Object.create(null)
$.cJ=Object.create(null)
H.mR()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h9.$1(v)
if(u!=null){t=H.n6(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mR:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bs(C.J,H.bs(C.O,H.bs(C.u,H.bs(C.u,H.bs(C.N,H.bs(C.K,H.bs(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h1=new H.mS(v)
$.fT=new H.mT(u)
$.h9=new H.mU(t)},
bs:function(a,b){return a(b)||b},
hb:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hc:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hC:{"^":"b;$ti",
i:function(a){return P.d6(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hD()},
$isJ:1},
hE:{"^":"hC;a,b,c,$ti",
gl:function(a){return this.a},
br:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.br(0,b))return
return this.d2(b)},
d2:function(a){return this.b[H.N(a)]},
L:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.f(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.d2(v),z))}}},
j4:{"^":"b;a,b,c,d,e,f,r,0x",p:{
j5:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bE(z)
y=z[0]
x=z[1]
return new H.j4(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jM:{"^":"b;a,b,c,d,e,f",
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
aE:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f1:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iM:{"^":"a6;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
ez:function(a,b){return new H.iM(a,b==null?null:b.method)}}},
i9:{"^":"a6;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
d4:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i9(a,y,z?null:b.receiver)}}},
k_:{"^":"a6;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ni:{"^":"o:17;a",
$1:function(a){if(!!J.K(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fz:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isax:1},
o:{"^":"b;",
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
gem:function(){return this},
$iscZ:1,
gem:function(){return this}},
eP:{"^":"o;"},
jt:{"^":"eP;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cR:{"^":"eP;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bN(this.a)
else y=typeof z!=="object"?J.b2(z):H.bN(z)
return(y^H.bN(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
p:{
cS:function(a){return a.a},
dX:function(a){return a.c},
ch:function(a){var z,y,x,w,v
z=new H.cR("self","target","receiver","name")
y=J.bE(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jN:{"^":"a6;a",
i:function(a){return this.a},
p:{
ay:function(a,b){return new H.jN("TypeError: "+H.l(P.cl(a))+": type '"+H.fR(a)+"' is not a subtype of type '"+b+"'")}}},
hu:{"^":"a6;a",
i:function(a){return this.a},
p:{
hv:function(a,b){return new H.hu("CastError: "+H.l(P.cl(a))+": type '"+H.fR(a)+"' is not a subtype of type '"+b+"'")}}},
je:{"^":"a6;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
jf:function(a){return new H.je(a)}}},
aY:{"^":"ir;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gau:function(a){return new H.ie(this,[H.y(this,0)])},
br:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d_(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d_(y,b)}else return this.hO(b)},
hO:function(a){var z=this.d
if(z==null)return!1
return this.cs(this.bW(z,this.cr(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bl(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bl(w,b)
x=y==null?null:y.b
return x}else return this.hP(b)},
hP:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bW(z,this.cr(a))
x=this.cs(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c_()
this.b=z}this.cS(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c_()
this.c=y}this.cS(y,b,c)}else this.hQ(b,c)},
hQ:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.c_()
this.d=z}y=this.cr(a)
x=this.bW(z,y)
if(x==null)this.c6(z,y,[this.c0(a,b)])
else{w=this.cs(x,a)
if(w>=0)x[w].b=b
else x.push(this.c0(a,b))}},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b4(this))
z=z.c}},
cS:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bl(a,b)
if(z==null)this.c6(a,b,this.c0(b,c))
else z.b=c},
f3:function(){this.r=this.r+1&67108863},
c0:function(a,b){var z,y
z=new H.id(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f3()
return z},
cr:function(a){return J.b2(a)&0x3ffffff},
cs:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
i:function(a){return P.d6(this)},
bl:function(a,b){return a[b]},
bW:function(a,b){return a[b]},
c6:function(a,b,c){a[b]=c},
eW:function(a,b){delete a[b]},
d_:function(a,b){return this.bl(a,b)!=null},
c_:function(){var z=Object.create(null)
this.c6(z,"<non-identifier-key>",z)
this.eW(z,"<non-identifier-key>")
return z},
$iseo:1},
id:{"^":"b;a,b,0c,0d"},
ie:{"^":"hP;a,$ti",
gl:function(a){return this.a.a},
ga_:function(a){var z,y
z=this.a
y=new H.ig(z,z.r,this.$ti)
y.c=z.e
return y}},
ig:{"^":"b;a,b,0c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mS:{"^":"o:17;a",
$1:function(a){return this.a(a)}},
mT:{"^":"o:39;a",
$2:function(a,b){return this.a(a,b)}},
mU:{"^":"o:45;a",
$1:function(a){return this.a(H.N(a))}},
i7:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseB:1,
$isj6:1,
p:{
i8:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mM:function(a){return J.ei(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
n9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bq:function(a){return a},
iI:function(a){return new Int8Array(a)},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aG(b,a))},
mj:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mK(a,b,c))
return b},
ey:{"^":"r;",$isey:1,"%":"ArrayBuffer"},
dc:{"^":"r;",$isdc:1,$isjO:1,"%":"DataView;ArrayBufferView;db|ft|fu|iJ|fv|fw|aZ"},
db:{"^":"dc;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dF},
iJ:{"^":"fu;",
k:function(a,b){H.aF(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mL(c)
H.aF(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.q]},
$asx:function(){return[P.q]},
$isk:1,
$ask:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
aZ:{"^":"fw;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aF(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.m]},
$asx:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
on:{"^":"aZ;",
k:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oo:{"^":"aZ;",
k:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"Int32Array"},
op:{"^":"aZ;",
k:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oq:{"^":"aZ;",
k:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
or:{"^":"aZ;",
k:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
os:{"^":"aZ;",
gl:function(a){return a.length},
k:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dd:{"^":"aZ;",
gl:function(a){return a.length},
k:function(a,b){H.aF(b,a,a.length)
return a[b]},
bM:function(a,b,c){return new Uint8Array(a.subarray(b,H.mj(b,c,a.length)))},
$isdd:1,
$isR:1,
"%":";Uint8Array"},
ft:{"^":"db+x;"},
fu:{"^":"ft+cm;"},
fv:{"^":"db+x;"},
fw:{"^":"fv+cm;"}}],["","",,P,{"^":"",
kA:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mw()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bu(new P.kC(z),1)).observe(y,{childList:true})
return new P.kB(z,y,x)}else if(self.setImmediate!=null)return P.mx()
return P.my()},
p6:[function(a){self.scheduleImmediate(H.bu(new P.kD(H.f(a,{func:1,ret:-1})),0))},"$1","mw",4,0,11],
p7:[function(a){self.setImmediate(H.bu(new P.kE(H.f(a,{func:1,ret:-1})),0))},"$1","mx",4,0,11],
p8:[function(a){P.dm(C.r,H.f(a,{func:1,ret:-1}))},"$1","my",4,0,11],
dm:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.e.a4(a.a,1000)
return P.lD(z<0?0:z,b)},
eR:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bk]})
z=C.e.a4(a.a,1000)
return P.lE(z<0?0:z,b)},
ms:function(a,b){if(H.cc(a,{func:1,args:[P.b,P.ax]}))return b.ig(a,null,P.b,P.ax)
if(H.cc(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cg(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mr:function(){var z,y
for(;z=$.br,z!=null;){$.bY=null
y=z.b
$.br=y
if(y==null)$.bX=null
z.a.$0()}},
pg:[function(){$.dA=!0
try{P.mr()}finally{$.bY=null
$.dA=!1
if($.br!=null)$.$get$du().$1(P.fV())}},"$0","fV",0,0,3],
fQ:function(a){var z=new P.fm(H.f(a,{func:1,ret:-1}))
if($.br==null){$.bX=z
$.br=z
if(!$.dA)$.$get$du().$1(P.fV())}else{$.bX.b=z
$.bX=z}},
mv:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.br
if(z==null){P.fQ(a)
$.bY=$.bX
return}y=new P.fm(a)
x=$.bY
if(x==null){y.b=z
$.bY=y
$.br=y}else{y.b=x.b
x.b=y
$.bY=y
if(y.b==null)$.bX=y}},
nb:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.T
if(C.j===y){P.cF(null,null,C.j,a)
return}y.toString
P.cF(null,null,y,H.f(y.c9(a),z))},
jI:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.dm(a,b)}return P.dm(a,H.f(y.c9(b),z))},
jJ:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bk]}
H.f(b,z)
y=$.T
if(y===C.j){y.toString
return P.eR(a,b)}x=y.dq(b,P.bk)
$.T.toString
return P.eR(a,H.f(x,z))},
cE:function(a,b,c,d,e){var z={}
z.a=d
P.mv(new P.mt(z,e))},
fM:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fN:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mu:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cF:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c9(d):c.ht(d,-1)
P.fQ(d)},
kC:{"^":"o:26;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kB:{"^":"o:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kD:{"^":"o:0;a",
$0:function(){this.a.$0()}},
kE:{"^":"o:0;a",
$0:function(){this.a.$0()}},
fC:{"^":"b;a,0b,c",
eJ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bu(new P.lG(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
eK:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bu(new P.lF(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbk:1,
p:{
lD:function(a,b){var z=new P.fC(!0,0)
z.eJ(a,b)
return z},
lE:function(a,b){var z=new P.fC(!1,0)
z.eK(a,b)
return z}}},
lG:{"^":"o:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lF:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.ey(w,x)}z.c=y
this.d.$1(z)}},
bp:{"^":"b;0a,b,c,d,e,$ti",
hW:function(a){if(this.c!==6)return!0
return this.b.b.cH(H.f(this.d,{func:1,ret:P.ai,args:[P.b]}),a.a,P.ai,P.b)},
hM:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cc(z,{func:1,args:[P.b,P.ax]}))return H.dG(w.io(z,a.a,a.b,null,y,P.ax),x)
else return H.dG(w.cH(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aU:{"^":"b;dd:a<,b,0fK:c<,$ti",
ef:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ms(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aU(0,$.T,[c])
w=b==null?1:3
this.cT(new P.bp(x,w,a,b,[z,c]))
return x},
it:function(a,b){return this.ef(a,null,b)},
cT:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbp")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaU")
z=y.a
if(z<4){y.cT(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cF(null,null,z,H.f(new P.kT(this,a),{func:1,ret:-1}))}},
d7:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbp")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaU")
y=u.a
if(y<4){u.d7(a)
return}this.a=y
this.c=u.c}z.a=this.bn(a)
y=this.b
y.toString
P.cF(null,null,y,H.f(new P.kY(z,this),{func:1,ret:-1}))}},
c2:function(){var z=H.h(this.c,"$isbp")
this.c=null
return this.bn(z)},
bn:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cX:function(a){var z,y,x,w
z=H.y(this,0)
H.dG(a,{futureOr:1,type:z})
y=this.$ti
x=H.bt(a,"$isbC",y,"$asbC")
if(x){z=H.bt(a,"$isaU",y,null)
if(z)P.fp(a,this)
else P.kU(a,this)}else{w=this.c2()
H.z(a,z)
this.a=4
this.c=a
P.bS(this,w)}},
bS:[function(a,b){var z
H.h(b,"$isax")
z=this.c2()
this.a=8
this.c=new P.al(a,b)
P.bS(this,z)},function(a){return this.bS(a,null)},"iD","$2","$1","geS",4,2,29],
$isbC:1,
p:{
kU:function(a,b){var z,y,x
b.a=1
try{a.ef(new P.kV(b),new P.kW(b),null)}catch(x){z=H.au(x)
y=H.bw(x)
P.nb(new P.kX(b,z,y))}},
fp:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaU")
if(z>=4){y=b.c2()
b.a=a.a
b.c=a.c
P.bS(b,y)}else{y=H.h(b.c,"$isbp")
b.a=2
b.c=a
a.d7(y)}},
bS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cE(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bS(z.a,b)}y=z.a
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
if(p){H.h(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cE(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.l0(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.l_(x,b,r).$0()}else if((y&2)!==0)new P.kZ(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.K(y).$isbC){if(y.a>=4){n=H.h(t.c,"$isbp")
t.c=null
b=t.bn(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fp(y,t)
return}}m=b.b
n=H.h(m.c,"$isbp")
m.c=null
b=m.bn(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.h(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kT:{"^":"o:0;a,b",
$0:function(){P.bS(this.a,this.b)}},
kY:{"^":"o:0;a,b",
$0:function(){P.bS(this.b,this.a.a)}},
kV:{"^":"o:26;a",
$1:function(a){var z=this.a
z.a=0
z.cX(a)}},
kW:{"^":"o:51;a",
$2:function(a,b){this.a.bS(a,H.h(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
kX:{"^":"o:0;a,b,c",
$0:function(){this.a.bS(this.b,this.c)}},
l0:{"^":"o:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ed(H.f(w.d,{func:1}),null)}catch(v){y=H.au(v)
x=H.bw(v)
if(this.d){w=H.h(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.K(z).$isbC){if(z instanceof P.aU&&z.gdd()>=4){if(z.gdd()===8){w=this.b
w.b=H.h(z.gfK(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.it(new P.l1(t),null)
w.a=!1}}},
l1:{"^":"o:34;a",
$1:function(a){return this.a}},
l_:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cH(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.au(t)
y=H.bw(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kZ:{"^":"o:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isal")
w=this.c
if(w.hW(z)&&w.e!=null){v=this.b
v.b=w.hM(z)
v.a=!1}}catch(u){y=H.au(u)
x=H.bw(u)
w=H.h(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fm:{"^":"b;a,0b"},
di:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aU(0,$.T,[P.m])
z.a=0
this.hV(new P.jw(z,this),!0,new P.jx(z,y),y.geS())
return y}},
jw:{"^":"o;a,b",
$1:function(a){H.z(a,H.az(this.b,"di",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.az(this.b,"di",0)]}}},
jx:{"^":"o:0;a,b",
$0:function(){this.b.cX(this.a.a)}},
eM:{"^":"b;$ti"},
jv:{"^":"b;"},
bk:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa6:1},
m7:{"^":"b;",$isp5:1},
mt:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eA()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
ll:{"^":"m7;",
ip:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fM(null,null,this,a,-1)}catch(x){z=H.au(x)
y=H.bw(x)
P.cE(null,null,this,z,H.h(y,"$isax"))}},
iq:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fN(null,null,this,a,b,-1,c)}catch(x){z=H.au(x)
y=H.bw(x)
P.cE(null,null,this,z,H.h(y,"$isax"))}},
ht:function(a,b){return new P.ln(this,H.f(a,{func:1,ret:b}),b)},
c9:function(a){return new P.lm(this,H.f(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.lo(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
ed:function(a,b){H.f(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fM(null,null,this,a,b)},
cH:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fN(null,null,this,a,b,c,d)},
io:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mu(null,null,this,a,b,c,d,e,f)},
ig:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
ln:{"^":"o;a,b,c",
$0:function(){return this.a.ed(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lm:{"^":"o:3;a,b",
$0:function(){return this.a.ip(this.b)}},
lo:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.iq(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ih:function(a,b,c,d,e){return new H.aY(0,0,[d,e])},
ii:function(a,b,c){H.c_(a)
return H.w(H.mN(a,new H.aY(0,0,[b,c])),"$iseo",[b,c],"$aseo")},
ep:function(a,b){return new H.aY(0,0,[a,b])},
il:function(a,b,c,d){return new P.l7(0,0,[d])},
i3:function(a,b,c){var z,y
if(P.dB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bZ()
C.a.h(y,a)
try{P.mq(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eN(b,H.h5(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
d0:function(a,b,c){var z,y,x
if(P.dB(a))return b+"..."+c
z=new P.ap(b)
y=$.$get$bZ()
C.a.h(y,a)
try{x=z
x.a=P.eN(x.gaI(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaI()+c
y=z.gaI()
return y.charCodeAt(0)==0?y:y},
dB:function(a){var z,y
for(z=0;y=$.$get$bZ(),z<y.length;++z)if(a===y[z])return!0
return!1},
mq:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga_(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.l(z.gT(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gT(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gT(z);++x
for(;z.H();t=s,s=r){r=z.gT(z);++x
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
ij:function(a,b,c){var z=P.ih(null,null,null,b,c)
a.L(0,new P.ik(z,b,c))
return z},
d6:function(a){var z,y,x
z={}
if(P.dB(a))return"{...}"
y=new P.ap("")
try{C.a.h($.$get$bZ(),a)
x=y
x.a=x.gaI()+"{"
z.a=!0
J.dQ(a,new P.is(z,y))
z=y
z.a=z.gaI()+"}"}finally{z=$.$get$bZ()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaI()
return z.charCodeAt(0)==0?z:z},
l7:{"^":"l2;a,0b,0c,0d,0e,0f,r,$ti",
ga_:function(a){return P.fs(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dw()
this.b=z}return this.cV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dw()
this.c=y}return this.cV(y,b)}else return this.eL(0,b)},
eL:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dw()
this.d=z}y=this.cY(b)
x=z[y]
if(x==null)z[y]=[this.bR(b)]
else{if(this.d3(x,b)>=0)return!1
x.push(this.bR(b))}return!0},
M:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d8(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d8(this.c,b)
else return this.fC(0,b)},
fC:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.f_(z,b)
x=this.d3(y,b)
if(x<0)return!1
this.df(y.splice(x,1)[0])
return!0},
cV:function(a,b){H.z(b,H.y(this,0))
if(H.h(a[b],"$isdv")!=null)return!1
a[b]=this.bR(b)
return!0},
d8:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isdv")
if(z==null)return!1
this.df(z)
delete a[b]
return!0},
cW:function(){this.r=this.r+1&67108863},
bR:function(a){var z,y
z=new P.dv(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cW()
return z},
df:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cW()},
cY:function(a){return J.b2(a)&0x3ffffff},
f_:function(a,b){return a[this.cY(b)]},
d3:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
p:{
dw:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dv:{"^":"b;a,0b,0c"},
l8:{"^":"b;a,b,0c,0d,$ti",
gT:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b4(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fs:function(a,b,c){var z=new P.l8(a,b,[c])
z.c=a.e
return z}}},
l2:{"^":"jg;"},
ik:{"^":"o:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cq:{"^":"l9;",$isk:1,$isc:1},
x:{"^":"b;$ti",
ga_:function(a){return new H.eq(a,this.gl(a),0,[H.b_(this,a,"x",0)])},
J:function(a,b){return this.k(a,b)},
iw:function(a,b){var z,y,x
z=H.e([],[H.b_(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
iv:function(a){return this.iw(a,!0)},
aD:function(a,b,c,d){var z
H.z(d,H.b_(this,a,"x",0))
P.aM(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.d0(a,"[","]")}},
ir:{"^":"aj;"},
is:{"^":"o:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
aj:{"^":"b;$ti",
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.b_(this,a,"aj",0),H.b_(this,a,"aj",1)]})
for(z=J.by(this.gau(a));z.H();){y=z.gT(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.av(this.gau(a))},
i:function(a){return P.d6(a)},
$isJ:1},
lL:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
it:{"^":"b;$ti",
k:function(a,b){return J.dP(this.a,b)},
m:function(a,b,c){J.cM(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
L:function(a,b){J.dQ(this.a,H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.av(this.a)},
i:function(a){return J.ac(this.a)},
$isJ:1},
fc:{"^":"lM;a,$ti"},
ji:{"^":"b;$ti",
i:function(a){return P.d0(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dS("index"))
if(b<0)H.u(P.a_(b,0,null,"index",null))
for(z=P.fs(this,this.r,H.y(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isk:1},
jg:{"^":"ji;"},
l9:{"^":"b+x;"},
lM:{"^":"it+lL;$ti"}}],["","",,P,{"^":"",hr:{"^":"c1;a",
hZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aM(c,d,b.length,null,null,null)
z=$.$get$fn()
if(typeof d!=="number")return H.p(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.I(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cI(C.b.I(b,s))
o=H.cI(C.b.I(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.b.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ap("")
w.a+=C.b.v(b,x,y)
w.a+=H.ct(r)
x=s
continue}}throw H.a(P.Y("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.dV(b,u,d,v,t,k)
else{j=C.e.bi(k-1,4)+1
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aV(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dV(b,u,d,v,t,i)
else{j=C.e.bi(i,4)
if(j===1)throw H.a(P.Y("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aV(b,d,d,j===2?"==":"=")}return b},
$asc1:function(){return[[P.c,P.m],P.i]},
p:{
dV:function(a,b,c,d,e,f){if(C.e.bi(f,4)!==0)throw H.a(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},hs:{"^":"bA;a",
$asbA:function(){return[[P.c,P.m],P.i]}},c1:{"^":"b;$ti"},bA:{"^":"jv;$ti"},hR:{"^":"c1;",
$asc1:function(){return[P.i,[P.c,P.m]]}},kd:{"^":"hR;a",
ghG:function(){return C.F}},kk:{"^":"bA;",
b2:function(a,b,c){var z,y,x,w
z=a.length
P.aM(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m6(0,0,x)
if(w.eY(a,b,z)!==z)w.dh(J.hj(a,z-1),0)
return C.V.bM(x,0,w.b)},
cf:function(a){return this.b2(a,0,null)},
$asbA:function(){return[P.i,[P.c,P.m]]}},m6:{"^":"b;a,b,c",
dh:function(a,b){var z,y,x,w,v
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
eY:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dh(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},ke:{"^":"bA;a",
b2:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.kf(!1,a,b,c)
if(z!=null)return z
y=J.av(a)
P.aM(b,c,y,null,null,null)
x=new P.ap("")
w=new P.m3(!1,x,!0,0,0,0)
w.b2(a,b,y)
w.hI(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cf:function(a){return this.b2(a,0,null)},
$asbA:function(){return[[P.c,P.m],P.i]},
p:{
kf:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.kg(!1,b,c,d)
return},
kg:function(a,b,c,d){var z,y,x
z=$.$get$fh()
if(z==null)return
y=0===c
if(y&&!0)return P.ds(z,b)
x=b.length
d=P.aM(c,d,x,null,null,null)
if(y&&d===x)return P.ds(z,b)
return P.ds(z,b.subarray(c,d))},
ds:function(a,b){if(P.ki(b))return
return P.kj(a,b)},
kj:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.au(y)}return},
ki:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kh:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.au(y)}return}}},m3:{"^":"b;a,b,c,d,e,f",
hI:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.Y("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m5(c)
v=new P.m4(this,b,c,a)
$label0$0:for(u=J.aH(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bJ()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.e.bd(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.w,q)
if(z<=C.w[q]){q=P.Y("Overlong encoding of 0x"+C.e.bd(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.e.bd(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.ct(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cM()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.e.bd(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.e.bd(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m5:{"^":"o:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aH(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bJ()
if((w&127)!==w)return x-b}return z-b}},m4:{"^":"o:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c8(this.d,a,b)}}}],["","",,P,{"^":"",
ce:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.i]})
z=H.iZ(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Y(a,null,null))},
hT:function(a){var z=J.K(a)
if(!!z.$iso)return z.i(a)
return"Instance of '"+H.bd(a)+"'"},
im:function(a,b,c,d){var z,y
H.z(b,d)
z=J.i5(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
io:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.ga_(a);x.H();)C.a.h(y,H.z(x.gT(x),c))
if(b)return y
return H.w(J.bE(y),"$isc",z,"$asc")},
c8:function(a,b,c){var z,y
z=P.m
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb9",[z],"$asb9")
y=a.length
c=P.aM(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.P()
z=c<y}else z=!0
return H.eE(z?C.a.bM(a,b,c):a)}if(!!J.K(a).$isdd)return H.j0(a,b,P.aM(b,c,a.length,null,null,null))
return P.jy(a,b,c)},
jy:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.a_(b,0,J.av(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a_(c,b,J.av(a),null,null))
y=J.by(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.a_(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gT(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.a_(c,b,x,null,null))
w.push(y.gT(y))}return H.eE(w)},
j7:function(a,b,c){return new H.i7(a,H.i8(a,!1,!0,!1))},
fe:function(){var z=H.iR()
if(z!=null)return P.k5(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hT(a)},
v:function(a){return new P.fo(a)},
ip:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.e([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dM:function(a){H.n9(a)},
k5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.fd(b>0||c<c?C.b.v(a,b,c):a,5,null).gei()
else if(y===32)return P.fd(C.b.v(a,z,c),0,null).gei()}x=new Array(8)
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
if(P.fO(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cL()
if(v>=b)if(P.fO(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.P()
if(typeof r!=="number")return H.p(r)
if(q<r)r=q
if(typeof s!=="number")return s.P()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.P()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.P()
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aV(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a9(a,"http",b)){if(x&&t+3===s&&C.b.a9(a,"80",t+1))if(b===0&&!0){a=C.b.aV(a,t,s,"")
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
else if(v===z&&C.b.a9(a,"https",b)){if(x&&t+4===s&&C.b.a9(a,"443",t+1))if(b===0&&!0){a=C.b.aV(a,t,s,"")
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
q-=b}return new P.lq(a,v,u,t,s,r,q,o)}return P.lN(a,b,c,v,u,t,s,r,q,o)},
fg:function(a,b){var z=P.i
return C.a.hJ(H.e(a.split("&"),[z]),P.ep(z,z),new P.k8(b),[P.J,P.i,P.i])},
k3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k4(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ce(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.cM()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ce(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.cM()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
ff:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k6(a)
y=new P.k7(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.X(a,w)
if(s===58){if(w===b){++w
if(C.b.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaE(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k3(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.e.aN(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
mk:function(){var z,y,x,w,v
z=P.ip(22,new P.mm(),!0,P.R)
y=new P.ml(z)
x=new P.mn()
w=new P.mo()
v=H.h(y.$2(0,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(14,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(15,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(1,225),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(2,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(3,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(4,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(5,229),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(6,231),"$isR")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(7,231),"$isR")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.h(y.$2(8,8),"$isR"),"]",5)
v=H.h(y.$2(9,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(16,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(17,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(10,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(18,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(19,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(11,235),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(12,236),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.h(y.$2(13,237),"$isR")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.h(y.$2(20,245),"$isR"),"az",21)
v=H.h(y.$2(21,245),"$isR")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fO:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fP()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
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
return(z^C.e.aN(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hH(H.iY(this))
y=P.c2(H.iW(this))
x=P.c2(H.iS(this))
w=P.c2(H.iT(this))
v=P.c2(H.iV(this))
u=P.c2(H.iX(this))
t=P.hI(H.iU(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hH:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hI:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c2:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"X;"},
"+double":0,
b6:{"^":"b;a",
j:function(a,b){return new P.b6(C.e.af(this.a*b))},
P:function(a,b){return C.e.P(this.a,H.h(b,"$isb6").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.b6))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hO()
y=this.a
if(y<0)return"-"+new P.b6(0-y).i(0)
x=z.$1(C.e.a4(y,6e7)%60)
w=z.$1(C.e.a4(y,1e6)%60)
v=new P.hN().$1(y%1e6)
return""+C.e.a4(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
ec:function(a,b,c,d,e,f){return new P.b6(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hN:{"^":"o:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hO:{"^":"o:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"b;"},
eA:{"^":"a6;",
i:function(a){return"Throw of null."}},
aI:{"^":"a6;a,b,c,d",
gbU:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbT:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbU()+y+x
if(!this.a)return w
v=this.gbT()
u=P.cl(this.b)
return w+v+": "+H.l(u)},
p:{
c0:function(a){return new P.aI(!1,null,null,a)},
cg:function(a,b,c){return new P.aI(!0,a,b,c)},
dS:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
cu:{"^":"aI;e,f,a,b,c,d",
gbU:function(){return"RangeError"},
gbT:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cv:function(a,b,c){return new P.cu(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.cu(b,c,!0,a,d,"Invalid value")},
aM:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.a_(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.a_(b,a,c,"end",f))
return b}return c}}},
i1:{"^":"aI;e,l:f>,a,b,c,d",
gbU:function(){return"RangeError"},
gbT:function(){if(J.hf(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.D(e!=null?e:J.av(b))
return new P.i1(b,z,!0,a,c,"Index out of range")}}},
k1:{"^":"a6;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.k1(a)}}},
jZ:{"^":"a6;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c9:function(a){return new P.jZ(a)}}},
js:{"^":"a6;a",
i:function(a){return"Bad state: "+this.a}},
hB:{"^":"a6;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cl(z))+"."},
p:{
b4:function(a){return new P.hB(a)}}},
iN:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa6:1},
eK:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa6:1},
hG:{"^":"a6;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fo:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hZ:{"^":"b;a,b,c",
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
Y:function(a,b,c){return new P.hZ(a,b,c)}}},
m:{"^":"X;"},
"+int":0,
k:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga_(this)
for(y=0;z.H();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dS("index"))
if(b<0)H.u(P.a_(b,0,null,"index",null))
for(z=this.ga_(this),y=0;z.H();){x=z.gT(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.i3(this,"(",")")}},
d1:{"^":"b;$ti"},
c:{"^":"b;$ti",$isk:1},
"+List":0,
J:{"^":"b;$ti"},
H:{"^":"b;",
gU:function(a){return P.b.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
X:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gU:function(a){return H.bN(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"b;"},
i:{"^":"b;",$iseB:1},
"+String":0,
ap:{"^":"b;aI:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoQ:1,
p:{
eN:function(a,b,c){var z=J.by(b)
if(!z.H())return a
if(c.length===0){do a+=H.l(z.gT(z))
while(z.H())}else{a+=H.l(z.gT(z))
for(;z.H();)a=a+c+H.l(z.gT(z))}return a}}},
k8:{"^":"o:48;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isJ",[z,z],"$asJ")
H.N(b)
y=J.aH(b).dX(b,"=")
if(y===-1){if(b!=="")J.cM(a,P.dy(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.aF(b,y+1)
z=this.a
J.cM(a,P.dy(x,0,x.length,z,!0),P.dy(w,0,w.length,z,!0))}return a}},
k4:{"^":"o:38;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
k6:{"^":"o:28;a",
$2:function(a,b){throw H.a(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k7:{"^":"o:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ce(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.P()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cB:{"^":"b;bL:a<,b,c,d,e6:e>,f,r,0x,0y,0z,0Q,0ch",
gej:function(){return this.b},
gcq:function(a){var z=this.c
if(z==null)return""
if(C.b.a8(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbG:function(a){var z=this.d
if(z==null)return P.fE(this.a)
return z},
gcC:function(a){var z=this.f
return z==null?"":z},
gdS:function(){var z=this.r
return z==null?"":z},
cG:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
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
g=P.dx(g,0,0,h)
return new P.cB(i,j,c,f,d,g,this.r)},
eb:function(a,b){return this.cG(a,null,null,null,null,null,null,b,null,null)},
gcD:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.fc(P.fg(z==null?"":z,C.k),[y,y])
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
z=J.K(b)
if(!!z.$isdr){y=this.a
x=b.gbL()
if(y==null?x==null:y===x)if(this.c!=null===b.gdT()){y=this.b
x=b.gej()
if(y==null?x==null:y===x){y=this.gcq(this)
x=z.gcq(b)
if(y==null?x==null:y===x){y=this.gbG(this)
x=z.gbG(b)
if(y==null?x==null:y===x)if(this.e===z.ge6(b)){y=this.f
x=y==null
if(!x===b.gdW()){if(x)y=""
if(y===z.gcC(b)){z=this.r
y=z==null
if(!y===b.gdU()){if(y)z=""
z=z===b.gdS()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.i(0))
this.z=z}return z},
$isdr:1,
p:{
cC:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fJ().b
if(typeof b!=="string")H.u(H.af(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.az(c,"c1",0))
y=c.ghG().cf(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ct(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lN:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lY(a,b,d)
else{if(d===b)P.bU(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lZ(a,z,e-1):""
x=P.lS(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.lV(P.ce(C.b.v(a,w,g),new P.lO(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lT(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.P()
t=h<i?P.dx(a,h+1,i,null):null
return new P.cB(j,y,x,v,u,t,i<c?P.lR(a,i+1,c):null)},
fE:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bU:function(a,b,c){throw H.a(P.Y(c,a,b))},
lV:function(a,b){if(a!=null&&a===P.fE(b))return
return a},
lS:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.N()
z=c-1
if(C.b.X(a,z)!==93)P.bU(a,b,"Missing end `]` to match `[` in host")
P.ff(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.ff(a,b,c)
return"["+a+"]"}return P.m0(a,b,c)},
m0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.fL(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ap("")
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
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ap("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bU(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ap("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fF(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lY:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fH(C.b.I(a,b)))P.bU(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bU(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.lP(y?a.toLowerCase():a)},
lP:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lZ:function(a,b,c){return P.bV(a,b,c,C.R)},
lT:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bV(a,b,c,C.y):C.t.ja(d,new P.lU(),P.i).F(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a8(w,"/"))w="/"+w
return P.m_(w,e,f)},
m_:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a8(a,"/"))return P.m1(a,!z||c)
return P.m2(a)},
dx:function(a,b,c,d){var z,y
z={}
H.w(d,"$isJ",[P.i,null],"$asJ")
if(a!=null){if(d!=null)throw H.a(P.c0("Both query and queryParameters specified"))
return P.bV(a,b,c,C.n)}if(d==null)return
y=new P.ap("")
z.a=""
d.L(0,new P.lW(new P.lX(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lR:function(a,b,c){return P.bV(a,b,c,C.n)},
fL:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.cI(y)
v=H.cI(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aN(u,4)
if(z>=8)return H.d(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.ct(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
fF:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.e.fU(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.c8(y,0,null)},
bV:function(a,b,c,d){var z=P.fK(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.v(a,b,c):z},
fK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.P()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fL(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bU(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fF(v)}}if(w==null)w=new P.ap("")
w.a+=C.b.v(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.P()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fI:function(a){if(C.b.a8(a,"."))return!0
return C.b.dX(a,"/.")!==-1},
m2:function(a){var z,y,x,w,v,u,t
if(!P.fI(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.Q(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.F(z,"/")},
m1:function(a,b){var z,y,x,w,v,u
if(!P.fI(a))return!b?P.fG(a):a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaE(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaE(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.m(z,0,P.fG(z[0]))}return C.a.F(z,"/")},
fG:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fH(J.hg(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.aF(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lQ:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c0("Invalid URL encoding"))}}return z},
dy:function(a,b,c,d,e){var z,y,x,w,v,u
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
else u=new H.a4(y.v(a,b,c))}else{u=H.e([],[P.m])
for(x=b;x<c;++x){w=y.I(a,x)
if(w>127)throw H.a(P.c0("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c0("Truncated URI"))
C.a.h(u,P.lQ(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.ke(!1).cf(u)},
fH:function(a){var z=a|32
return 97<=z&&z<=122}}},
lO:{"^":"o:47;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.Y("Invalid port",this.a,z+1))}},
lU:{"^":"o:46;",
$1:function(a){return P.cC(C.T,a,C.k,!1)}},
lX:{"^":"o:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cC(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cC(C.p,b,C.k,!0))}}},
lW:{"^":"o:50;a",
$2:function(a,b){var z,y
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(z=J.by(H.h5(b,"$isk")),y=this.a;z.H();)y.$2(a,H.N(z.gT(z)))}},
k2:{"^":"b;a,b,c",
gei:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.b.dY(y,"?",z)
w=y.length
if(x>=0){v=P.bV(y,x+1,w,C.n)
w=x}else v=null
z=new P.kJ(this,"data",null,null,null,P.bV(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fd:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaE(z)
if(v!==44||x!==t+7||!C.b.a9(a,"base64",t+1))throw H.a(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hZ(0,a,s,y)
else{r=P.fK(a,s,y,C.n,!0)
if(r!=null)a=C.b.aV(a,s,y,r)}return new P.k2(a,z,c)}}},
mm:{"^":"o:44;",
$1:function(a){return new Uint8Array(96)}},
ml:{"^":"o:40;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hk(z,0,96,b)
return z}},
mn:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
mo:{"^":"o;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lq:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdT:function(){return this.c>0},
gdV:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gdW:function(){var z=this.f
if(typeof z!=="number")return z.P()
return z<this.r},
gdU:function(){return this.r<this.a.length},
gd4:function(){return this.b===4&&C.b.a8(this.a,"http")},
gd5:function(){return this.b===5&&C.b.a8(this.a,"https")},
gbL:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd4()){this.x="http"
z="http"}else if(this.gd5()){this.x="https"
z="https"}else if(z===4&&C.b.a8(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a8(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
gej:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcq:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbG:function(a){var z
if(this.gdV()){z=this.d
if(typeof z!=="number")return z.D()
return P.ce(C.b.v(this.a,z+1,this.e),null,null)}if(this.gd4())return 80
if(this.gd5())return 443
return 0},
ge6:function(a){return C.b.v(this.a,this.e,this.f)},
gcC:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.P()
return z<y?C.b.v(this.a,z+1,y):""},
gdS:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aF(y,z+1):""},
gcD:function(){var z=this.f
if(typeof z!=="number")return z.P()
if(z>=this.r)return C.U
z=P.i
return new P.fc(P.fg(this.gcC(this),C.k),[z,z])},
cG:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isJ",[P.i,null],"$asJ")
i=this.gbL()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.gdV()?this.gbG(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a8(d,"/"))d="/"+d
g=P.dx(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aF(y,x+1)
return new P.cB(i,j,c,f,d,g,b)},
eb:function(a,b){return this.cG(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdr)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdr:1},
kJ:{"^":"cB;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cU:function(a,b){var z=document.createElement("canvas")
return z},
hQ:function(a){H.h(a,"$isa7")
return"wheel"},
i2:function(a){var z,y,x
y=document.createElement("input")
z=H.h(y,"$iseh")
try{J.hm(z,a)}catch(x){H.au(x)}return z},
cA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fr:function(a,b,c,d){var z,y
z=W.cA(W.cA(W.cA(W.cA(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fS:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dq(a,b)},
a8:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nj:{"^":"dg;0q:x=,0t:y=","%":"Accelerometer|LinearAccelerationSensor"},
nk:{"^":"r;0l:length=","%":"AccessibleNodeList"},
nl:{"^":"a8;0a1:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nm:{"^":"a8;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cQ:{"^":"r;",$iscQ:1,"%":";Blob"},
ns:{"^":"a8;0a1:type}","%":"HTMLButtonElement"},
cT:{"^":"a8;",
bK:function(a,b,c){if(c!=null)return a.getContext(b,P.mA(c,null))
return a.getContext(b)},
en:function(a,b){return this.bK(a,b,null)},
$iscT:1,
"%":"HTMLCanvasElement"},
e1:{"^":"r;",$ise1:1,"%":"CanvasRenderingContext2D"},
nu:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nw:{"^":"ck;0l:length=","%":"CSSPerspective"},
nx:{"^":"cX;0q:x=,0t:y=","%":"CSSPositionValue"},
ny:{"^":"ck;0q:x=,0t:y=","%":"CSSRotation"},
b5:{"^":"r;",$isb5:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nz:{"^":"ck;0q:x=,0t:y=","%":"CSSScale"},
nA:{"^":"kI;0l:length=",
eo:function(a,b){var z=a.getPropertyValue(this.eP(a,b))
return z==null?"":z},
eP:function(a,b){var z,y
z=$.$get$e5()
y=z[b]
if(typeof y==="string")return y
y=this.fV(a,b)
z[b]=y
return y},
fV:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hJ()+b
if(z in a)return z
return b},
gca:function(a){return a.bottom},
gat:function(a){return a.height},
gaS:function(a){return a.left},
gbb:function(a){return a.right},
gbf:function(a){return a.top},
gav:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hF:{"^":"b;",
gaS:function(a){return this.eo(a,"left")}},
cX:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ck:{"^":"r;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nB:{"^":"cX;0l:length=","%":"CSSTransformValue"},
nC:{"^":"ck;0q:x=,0t:y=","%":"CSSTranslation"},
nD:{"^":"cX;0l:length=","%":"CSSUnparsedValue"},
nE:{"^":"r;0l:length=","%":"DataTransferItemList"},
nF:{"^":"r;0q:x=,0t:y=","%":"DeviceAcceleration"},
nG:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
nH:{"^":"hL;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"DOMPoint"},
hL:{"^":"r;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
nI:{"^":"kL;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isaa",[P.X],"$asaa")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.aa,P.X]]},
$asx:function(){return[[P.aa,P.X]]},
$isk:1,
$ask:function(){return[[P.aa,P.X]]},
$isc:1,
$asc:function(){return[[P.aa,P.X]]},
$asC:function(){return[[P.aa,P.X]]},
"%":"ClientRectList|DOMRectList"},
hM:{"^":"r;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gav(a))+" x "+H.l(this.gat(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.bt(b,"$isaa",[P.X],"$asaa")
if(!z)return!1
z=J.aW(b)
return a.left===z.gaS(b)&&a.top===z.gbf(b)&&this.gav(a)===z.gav(b)&&this.gat(a)===z.gat(b)},
gU:function(a){return W.fr(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gav(a)&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF)},
gca:function(a){return a.bottom},
gat:function(a){return a.height},
gaS:function(a){return a.left},
gbb:function(a){return a.right},
gbf:function(a){return a.top},
gav:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isaa:1,
$asaa:function(){return[P.X]},
"%":";DOMRectReadOnly"},
nJ:{"^":"kN;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.N(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"DOMStringList"},
nK:{"^":"r;0l:length=","%":"DOMTokenList"},
kH:{"^":"cq;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return H.h(z[b],"$isa1")},
m:function(a,b,c){var z
H.D(b)
H.h(c,"$isa1")
z=this.b
if(b>>>0!==b||b>=z.length)return H.d(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var z=this.iv(this)
return new J.aw(z,z.length,0,[H.y(z,0)])},
aD:function(a,b,c,d){throw H.a(P.c9(null))},
$asx:function(){return[W.a1]},
$ask:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
a1:{"^":"L;",
gce:function(a){return new W.kH(a,a.children)},
gbq:function(a){return P.j3(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
nL:{"^":"a8;0a1:type}","%":"HTMLEmbedElement"},
ad:{"^":"r;",$isad:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"r;",
dj:["es",function(a,b,c,d){H.f(c,{func:1,args:[W.ad]})
if(c!=null)this.eM(a,b,c,!1)}],
eM:function(a,b,c,d){return a.addEventListener(b,H.bu(H.f(c,{func:1,args:[W.ad]}),1),!1)},
$isa7:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fx|fy|fA|fB"},
aX:{"^":"cQ;",$isaX:1,"%":"File"},
ed:{"^":"kS;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isaX")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aX]},
$asx:function(){return[W.aX]},
$isk:1,
$ask:function(){return[W.aX]},
$isc:1,
$asc:function(){return[W.aX]},
$ised:1,
$asC:function(){return[W.aX]},
"%":"FileList"},
o3:{"^":"a7;0l:length=","%":"FileWriter"},
o6:{"^":"a8;0l:length=","%":"HTMLFormElement"},
b8:{"^":"r;",$isb8:1,"%":"Gamepad"},
o7:{"^":"dg;0q:x=,0t:y=","%":"Gyroscope"},
o8:{"^":"r;0l:length=","%":"History"},
o9:{"^":"l4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c3:{"^":"r;0ds:data=",$isc3:1,"%":"ImageData"},
eg:{"^":"a8;",$iseg:1,"%":"HTMLImageElement"},
eh:{"^":"a8;0a1:type}",$iseh:1,"%":"HTMLInputElement"},
bF:{"^":"dn;",$isbF:1,"%":"KeyboardEvent"},
oe:{"^":"a8;0a1:type}","%":"HTMLLinkElement"},
of:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
og:{"^":"dg;0q:x=,0t:y=","%":"Magnetometer"},
oi:{"^":"r;0l:length=","%":"MediaList"},
oj:{"^":"a7;",
dj:function(a,b,c,d){H.f(c,{func:1,args:[W.ad]})
if(b==="message")a.start()
this.es(a,b,c,!1)},
"%":"MessagePort"},
ok:{"^":"la;",
k:function(a,b){return P.aV(a.get(H.N(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gau:function(a){var z=H.e([],[P.i])
this.L(a,new W.iF(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iF:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ol:{"^":"lb;",
k:function(a,b){return P.aV(a.get(H.N(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gau:function(a){var z=H.e([],[P.i])
this.L(a,new W.iG(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iG:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bb:{"^":"r;",$isbb:1,"%":"MimeType"},
om:{"^":"ld;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbb")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asx:function(){return[W.bb]},
$isk:1,
$ask:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asC:function(){return[W.bb]},
"%":"MimeTypeArray"},
aD:{"^":"dn;",$isaD:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kG:{"^":"cq;a",
m:function(a,b,c){var z,y
H.D(b)
H.h(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.d(y,b)
z.replaceChild(c,y[b])},
ga_:function(a){var z=this.a.childNodes
return new W.ee(z,z.length,-1,[H.b_(C.W,z,"C",0)])},
aD:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
$asx:function(){return[W.L]},
$ask:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"a7;",
ik:function(a,b){var z,y
try{z=a.parentNode
J.hh(z,b,a)}catch(y){H.au(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eu(a):z},
fF:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iK:{"^":"lf;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
ou:{"^":"a8;0a1:type}","%":"HTMLOListElement"},
ov:{"^":"a8;0a1:type}","%":"HTMLObjectElement"},
bc:{"^":"r;0l:length=",$isbc:1,"%":"Plugin"},
oz:{"^":"lj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isk:1,
$ask:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asC:function(){return[W.bc]},
"%":"PluginArray"},
oE:{"^":"r;0a1:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oF:{"^":"lp;",
k:function(a,b){return P.aV(a.get(H.N(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gau:function(a){var z=H.e([],[P.i])
this.L(a,new W.jd(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"RTCStatsReport"},
jd:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oH:{"^":"a8;0a1:type}","%":"HTMLScriptElement"},
oJ:{"^":"a8;0l:length=","%":"HTMLSelectElement"},
dg:{"^":"a7;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
be:{"^":"a7;",$isbe:1,"%":"SourceBuffer"},
oK:{"^":"fy;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"SourceBufferList"},
oL:{"^":"a8;0a1:type}","%":"HTMLSourceElement"},
bf:{"^":"r;",$isbf:1,"%":"SpeechGrammar"},
oM:{"^":"ls;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"SpeechGrammarList"},
bg:{"^":"r;0l:length=",$isbg:1,"%":"SpeechRecognitionResult"},
oO:{"^":"lv;",
k:function(a,b){return a.getItem(H.N(b))},
m:function(a,b,c){a.setItem(b,H.N(c))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gau:function(a){var z=H.e([],[P.i])
this.L(a,new W.ju(z))
return z},
gl:function(a){return a.length},
$asaj:function(){return[P.i,P.i]},
$isJ:1,
$asJ:function(){return[P.i,P.i]},
"%":"Storage"},
ju:{"^":"o:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oR:{"^":"a8;0a1:type}","%":"HTMLStyleElement"},
bh:{"^":"r;",$isbh:1,"%":"CSSStyleSheet|StyleSheet"},
dj:{"^":"a8;",$isdj:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bi:{"^":"a7;",$isbi:1,"%":"TextTrack"},
bj:{"^":"a7;",$isbj:1,"%":"TextTrackCue|VTTCue"},
oW:{"^":"lC;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isk:1,
$ask:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asC:function(){return[W.bj]},
"%":"TextTrackCueList"},
oX:{"^":"fB;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asx:function(){return[W.bi]},
$isk:1,
$ask:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asC:function(){return[W.bi]},
"%":"TextTrackList"},
oY:{"^":"r;0l:length=","%":"TimeRanges"},
bl:{"^":"r;",$isbl:1,"%":"Touch"},
bm:{"^":"dn;",$isbm:1,"%":"TouchEvent"},
oZ:{"^":"lI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbl")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bl]},
$asx:function(){return[W.bl]},
$isk:1,
$ask:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asC:function(){return[W.bl]},
"%":"TouchList"},
p_:{"^":"r;0l:length=","%":"TrackDefaultList"},
dn:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
p1:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
p3:{"^":"r;0q:x=","%":"VRStageBoundsPoint"},
p4:{"^":"a7;0l:length=","%":"VideoTrackList"},
bR:{"^":"aD;",
ghC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbR:1,
"%":"WheelEvent"},
kz:{"^":"a7;",
fG:function(a,b){return a.requestAnimationFrame(H.bu(H.f(b,{func:1,ret:-1,args:[P.X]}),1))},
eX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
p9:{"^":"m9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isb5")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b5]},
$asx:function(){return[W.b5]},
$isk:1,
$ask:function(){return[W.b5]},
$isc:1,
$asc:function(){return[W.b5]},
$asC:function(){return[W.b5]},
"%":"CSSRuleList"},
pa:{"^":"hM;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.bt(b,"$isaa",[P.X],"$asaa")
if(!z)return!1
z=J.aW(b)
return a.left===z.gaS(b)&&a.top===z.gbf(b)&&a.width===z.gav(b)&&a.height===z.gat(b)},
gU:function(a){return W.fr(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gat:function(a){return a.height},
gav:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":"ClientRect|DOMRect"},
pc:{"^":"mb;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isb8")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asx:function(){return[W.b8]},
$isk:1,
$ask:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asC:function(){return[W.b8]},
"%":"GamepadList"},
pd:{"^":"md;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isL")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asx:function(){return[W.L]},
$isk:1,
$ask:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pe:{"^":"mf;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isk:1,
$ask:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"SpeechRecognitionResultList"},
pf:{"^":"mh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.h(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.d(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"StyleSheetList"},
kO:{"^":"di;a,b,c,$ti",
hV:function(a,b,c,d){var z=H.y(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
pb:{"^":"kO;a,b,c,$ti"},
kP:{"^":"eM;a,b,c,d,e,$ti",
fZ:function(){var z=this.d
if(z!=null&&this.a<=0)J.hi(this.b,this.c,z,!1)},
p:{
a0:function(a,b,c,d,e){var z=c==null?null:W.fS(new W.kQ(c),W.ad)
z=new W.kP(0,a,b,z,!1,[e])
z.fZ()
return z}}},
kQ:{"^":"o:4;a",
$1:function(a){return this.a.$1(H.h(a,"$isad"))}},
C:{"^":"b;$ti",
ga_:function(a){return new W.ee(a,this.gl(a),-1,[H.b_(this,a,"C",0)])},
aD:function(a,b,c,d){H.z(d,H.b_(this,a,"C",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
ee:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dP(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gT:function(a){return this.d}},
kI:{"^":"r+hF;"},
kK:{"^":"r+x;"},
kL:{"^":"kK+C;"},
kM:{"^":"r+x;"},
kN:{"^":"kM+C;"},
kR:{"^":"r+x;"},
kS:{"^":"kR+C;"},
l3:{"^":"r+x;"},
l4:{"^":"l3+C;"},
la:{"^":"r+aj;"},
lb:{"^":"r+aj;"},
lc:{"^":"r+x;"},
ld:{"^":"lc+C;"},
le:{"^":"r+x;"},
lf:{"^":"le+C;"},
li:{"^":"r+x;"},
lj:{"^":"li+C;"},
lp:{"^":"r+aj;"},
fx:{"^":"a7+x;"},
fy:{"^":"fx+C;"},
lr:{"^":"r+x;"},
ls:{"^":"lr+C;"},
lv:{"^":"r+aj;"},
lB:{"^":"r+x;"},
lC:{"^":"lB+C;"},
fA:{"^":"a7+x;"},
fB:{"^":"fA+C;"},
lH:{"^":"r+x;"},
lI:{"^":"lH+C;"},
m8:{"^":"r+x;"},
m9:{"^":"m8+C;"},
ma:{"^":"r+x;"},
mb:{"^":"ma+C;"},
mc:{"^":"r+x;"},
md:{"^":"mc+C;"},
me:{"^":"r+x;"},
mf:{"^":"me+C;"},
mg:{"^":"r+x;"},
mh:{"^":"mg+C;"}}],["","",,P,{"^":"",
mD:function(a){var z,y
z=J.K(a)
if(!!z.$isc3){y=z.gds(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fD(a.data,a.height,a.width)},
mC:function(a){if(a instanceof P.fD)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var z,y,x,w,v
if(a==null)return
z=P.ep(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.N(y[w])
z.m(0,v,a[v])}return z},
mA:function(a,b){var z={}
a.L(0,new P.mB(z))
return z},
eb:function(){var z=$.ea
if(z==null){z=J.cN(window.navigator.userAgent,"Opera",0)
$.ea=z}return z},
hJ:function(){var z,y
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
ly:{"^":"b;",
dQ:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cJ:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isam)return new Date(a.a)
if(!!y.$isj6)throw H.a(P.c9("structured clone of RegExp"))
if(!!y.$isaX)return a
if(!!y.$iscQ)return a
if(!!y.$ised)return a
if(!!y.$isc3)return a
if(!!y.$isey||!!y.$isdc)return a
if(!!y.$isJ){x=this.dQ(a)
w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.L(a,new P.lA(z,this))
return z.a}if(!!y.$isc){x=this.dQ(a)
z=this.b
if(x>=z.length)return H.d(z,x)
v=z[x]
if(v!=null)return v
return this.hz(a,x)}throw H.a(P.c9("structured clone of other type"))},
hz:function(a,b){var z,y,x,w
z=J.aH(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cJ(z.k(a,w)))
return x}},
lA:{"^":"o:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cJ(b)}},
fD:{"^":"b;ds:a>,b,c",$isc3:1},
mB:{"^":"o:6;a",
$2:function(a,b){this.a[a]=b}},
lz:{"^":"ly;a,b"},
hW:{"^":"cq;a,b",
gbm:function(){var z,y,x
z=this.b
y=H.az(z,"x",0)
x=W.a1
return new H.iu(new H.kx(z,H.f(new P.hX(),{func:1,ret:P.ai,args:[y]}),[y]),H.f(new P.hY(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.h(c,"$isa1")
z=this.gbm()
J.hl(z.b.$1(J.cO(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aD:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.av(this.gbm().a)},
k:function(a,b){var z=this.gbm()
return z.b.$1(J.cO(z.a,b))},
ga_:function(a){var z=P.io(this.gbm(),!1,W.a1)
return new J.aw(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a1]},
$ask:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
hX:{"^":"o:30;",
$1:function(a){return!!J.K(H.h(a,"$isL")).$isa1}},
hY:{"^":"o:27;",
$1:function(a){return H.j(H.h(a,"$isL"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fq:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bL:{"^":"b;q:a>,t:b>,$ti",
i:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.bt(b,"$isbL",[P.X],null)
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
z=J.b2(this.a)
y=J.b2(this.b)
return P.fq(P.bT(P.bT(0,z),y))},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=H.y(this,0)
z=H.z(z*b,y)
x=this.b
if(typeof x!=="number")return x.j()
return new P.bL(z,H.z(x*b,y),this.$ti)}},
lk:{"^":"b;$ti",
gbb:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.z(z+this.c,H.y(this,0))},
gca:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bt(b,"$isaa",[P.X],"$asaa")
if(!z)return!1
z=this.a
y=J.aW(b)
x=y.gaS(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbf(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gbb(b)){if(typeof x!=="number")return x.D()
z=H.z(x+this.d,w)===y.gca(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.b2(z)
x=this.b
w=J.b2(x)
if(typeof z!=="number")return z.D()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.z(x+this.d,v)
return P.fq(P.bT(P.bT(P.bT(P.bT(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dr:function(a,b){var z,y
H.w(b,"$isbL",[P.X],"$asbL")
z=b.a
y=this.a
if(typeof z!=="number")return z.cL()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cL()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
aa:{"^":"lk;aS:a>,bf:b>,av:c>,at:d>,$ti",p:{
j3:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.P()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.P()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",nM:{"^":"U;0q:x=,0t:y=","%":"SVGFEBlendElement"},nN:{"^":"U;0q:x=,0t:y=","%":"SVGFEColorMatrixElement"},nO:{"^":"U;0q:x=,0t:y=","%":"SVGFEComponentTransferElement"},nP:{"^":"U;0q:x=,0t:y=","%":"SVGFECompositeElement"},nQ:{"^":"U;0q:x=,0t:y=","%":"SVGFEConvolveMatrixElement"},nR:{"^":"U;0q:x=,0t:y=","%":"SVGFEDiffuseLightingElement"},nS:{"^":"U;0q:x=,0t:y=","%":"SVGFEDisplacementMapElement"},nT:{"^":"U;0q:x=,0t:y=","%":"SVGFEFloodElement"},nU:{"^":"U;0q:x=,0t:y=","%":"SVGFEGaussianBlurElement"},nV:{"^":"U;0q:x=,0t:y=","%":"SVGFEImageElement"},nW:{"^":"U;0q:x=,0t:y=","%":"SVGFEMergeElement"},nX:{"^":"U;0q:x=,0t:y=","%":"SVGFEMorphologyElement"},nY:{"^":"U;0q:x=,0t:y=","%":"SVGFEOffsetElement"},nZ:{"^":"U;0q:x=,0t:y=","%":"SVGFEPointLightElement"},o_:{"^":"U;0q:x=,0t:y=","%":"SVGFESpecularLightingElement"},o0:{"^":"U;0q:x=,0t:y=","%":"SVGFESpotLightElement"},o1:{"^":"U;0q:x=,0t:y=","%":"SVGFETileElement"},o2:{"^":"U;0q:x=,0t:y=","%":"SVGFETurbulenceElement"},o4:{"^":"U;0q:x=,0t:y=","%":"SVGFilterElement"},o5:{"^":"bD;0q:x=,0t:y=","%":"SVGForeignObjectElement"},i0:{"^":"bD;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bD:{"^":"U;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},oa:{"^":"bD;0q:x=,0t:y=","%":"SVGImageElement"},bG:{"^":"r;",$isbG:1,"%":"SVGLength"},od:{"^":"l6;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.h(c,"$isbG")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bG]},
$isk:1,
$ask:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asC:function(){return[P.bG]},
"%":"SVGLengthList"},oh:{"^":"U;0q:x=,0t:y=","%":"SVGMaskElement"},bK:{"^":"r;",$isbK:1,"%":"SVGNumber"},ot:{"^":"lh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.h(c,"$isbK")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bK]},
$isk:1,
$ask:function(){return[P.bK]},
$isc:1,
$asc:function(){return[P.bK]},
$asC:function(){return[P.bK]},
"%":"SVGNumberList"},oy:{"^":"U;0q:x=,0t:y=","%":"SVGPatternElement"},oA:{"^":"r;0q:x=,0t:y=","%":"SVGPoint"},oB:{"^":"r;0l:length=","%":"SVGPointList"},oC:{"^":"r;0q:x=,0t:y=","%":"SVGRect"},oD:{"^":"i0;0q:x=,0t:y=","%":"SVGRectElement"},oI:{"^":"U;0a1:type}","%":"SVGScriptElement"},oP:{"^":"lx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.N(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"SVGStringList"},oS:{"^":"U;0a1:type}","%":"SVGStyleElement"},U:{"^":"a1;",
gce:function(a){return new P.hW(a,new W.kG(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oT:{"^":"bD;0q:x=,0t:y=","%":"SVGSVGElement"},jz:{"^":"bD;","%":"SVGTextPathElement;SVGTextContentElement"},oV:{"^":"jz;0q:x=,0t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bO:{"^":"r;",$isbO:1,"%":"SVGTransform"},p0:{"^":"lK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.h(c,"$isbO")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bO]},
$isk:1,
$ask:function(){return[P.bO]},
$isc:1,
$asc:function(){return[P.bO]},
$asC:function(){return[P.bO]},
"%":"SVGTransformList"},p2:{"^":"bD;0q:x=,0t:y=","%":"SVGUseElement"},l5:{"^":"r+x;"},l6:{"^":"l5+C;"},lg:{"^":"r+x;"},lh:{"^":"lg+C;"},lw:{"^":"r+x;"},lx:{"^":"lw+C;"},lJ:{"^":"r+x;"},lK:{"^":"lJ+C;"}}],["","",,P,{"^":"",R:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjO:1}}],["","",,P,{"^":"",nn:{"^":"r;0l:length=","%":"AudioBuffer"},dU:{"^":"a7;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},no:{"^":"kF;",
k:function(a,b){return P.aV(a.get(H.N(b)))},
L:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gau:function(a){var z=H.e([],[P.i])
this.L(a,new P.hp(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asaj:function(){return[P.i,null]},
$isJ:1,
$asJ:function(){return[P.i,null]},
"%":"AudioParamMap"},hp:{"^":"o:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hq:{"^":"dU;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},np:{"^":"a7;0l:length=","%":"AudioTrackList"},ht:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nq:{"^":"dU;0a1:type}","%":"BiquadFilterNode"},ow:{"^":"ht;0l:length=","%":"OfflineAudioContext"},ox:{"^":"hq;0a1:type}","%":"Oscillator|OscillatorNode"},kF:{"^":"r+aj;"}}],["","",,P,{"^":"",df:{"^":"r;",
is:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isc3)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mC(g))
return}if(!!z.$iseg)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c0("Incorrect number or type of arguments"))},
ir:function(a,b,c,d,e,f,g){return this.is(a,b,c,d,e,f,g,null,null,null)},
$isdf:1,
"%":"WebGLRenderingContext"},jA:{"^":"r;",$isjA:1,"%":"WebGLTexture"},jX:{"^":"r;",$isjX:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oN:{"^":"lu;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){H.D(b)
H.h(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asx:function(){return[[P.J,,,]]},
$isk:1,
$ask:function(){return[[P.J,,,]]},
$isc:1,
$asc:function(){return[[P.J,,,]]},
$asC:function(){return[[P.J,,,]]},
"%":"SQLResultSetRowList"},lt:{"^":"r+x;"},lu:{"^":"lt+C;"}}],["","",,O,{"^":"",aJ:{"^":"b;0a,0b,0c,0d,$ti",
bO:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cN:function(a,b,c){var z=H.az(this,"aJ",0)
H.f(b,{func:1,ret:P.ai,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.m,[P.k,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bj:function(a,b){return this.cN(a,null,b)},
ft:function(a){var z
H.w(a,"$isk",[H.az(this,"aJ",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
f8:function(a,b){var z
H.w(b,"$isk",[H.az(this,"aJ",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga_:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"aJ",0)
H.z(b,z)
z=[z]
if(this.ft(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.f8(x,H.e([b],z))}},
$isk:1,
p:{
cV:function(a){var z=new O.aJ([a])
z.bO(a)
return z}}},d8:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
eE:function(a){var z=this.b
if(!(z==null))z.E(a)},
aG:function(){return this.eE(null)},
ga0:function(a){var z=this.a
if(z.length>0)return C.a.gaE(z)
else return V.bH()},
e9:function(a){var z=this.a
if(a==null)C.a.h(z,V.bH())
else C.a.h(z,a)
this.aG()},
cB:function(){var z=this.a
if(z.length>0){z.pop()
this.aG()}}}}],["","",,E,{"^":"",cP:{"^":"b;"},aK:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a3:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cU:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.H();){y=z.d
if(y.f==null)y.cU()}},
sa7:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gB()
y.toString
x=H.f(this.ge4(),{func:1,ret:-1,args:[D.t]})
C.a.M(y.a,x)}y=this.c
if(y!=null){y=y.gB()
y.toString
x=H.f(this.ge4(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.E("shape",z,this.c,this,[F.eJ])
w.b=!0
this.a6(w)}},
sbc:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.f(this.ge5(),{func:1,ret:-1,args:[D.t]})
C.a.M(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.ge5(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}this.cU()
w=new D.E("technique",x,this.f,this,[O.cw])
w.b=!0
this.a6(w)}},
saT:function(a){var z,y,x,w
if(!J.Q(this.r,a)){z=this.r
if(z!=null){y=z.gB()
y.toString
x=H.f(this.ge3(),{func:1,ret:-1,args:[D.t]})
C.a.M(y.a,x)}if(a!=null){y=a.gB()
y.toString
x=H.f(this.ge3(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.E("mover",z,a,this,[U.a9])
w.b=!0
this.a6(w)}},
am:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.an(0,b,this):null
if(!J.Q(y,this.x)){x=this.x
this.x=y
w=new D.E("matrix",x,y,this,[V.ao])
w.b=!0
this.a6(w)}z=this.f
if(z!=null)z.am(0,b)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.H();)z.d.am(0,b)},
aU:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga0(z))
else C.a.h(z.a,y.j(0,z.ga0(z)))
z.aG()
a.ea(this.f)
z=a.dy
x=(z&&C.a).gaE(z)
if(x!=null&&this.d!=null)x.ij(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.H();)z.d.aU(a)
a.e8()
a.dx.cB()},
gB:function(){var z=this.z
if(z==null){z=D.O()
this.z=z}return z},
a6:function(a){var z=this.z
if(!(z==null))z.E(a)},
Y:function(){return this.a6(null)},
i3:[function(a){H.h(a,"$ist")
this.e=null
this.a6(a)},function(){return this.i3(null)},"jg","$1","$0","ge4",0,2,1],
i4:[function(a){this.a6(H.h(a,"$ist"))},function(){return this.i4(null)},"jh","$1","$0","ge5",0,2,1],
i2:[function(a){this.a6(H.h(a,"$ist"))},function(){return this.i2(null)},"jf","$1","$0","ge3",0,2,1],
i0:[function(a){this.a6(H.h(a,"$ist"))},function(){return this.i0(null)},"jd","$1","$0","ge2",0,2,1],
jc:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aK],"$ask")
for(z=b.length,y=this.ge2(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.b7()
t.a=H.e([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.Y()},"$2","gi_",8,0,8],
je:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aK],"$ask")
for(z=b.length,y=this.ge2(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.b7()
t.a=H.e([],w)
t.c=0
u.sa3(t)}t=u.ga3()
t.toString
H.f(y,x)
C.a.M(t.a,y)}}this.Y()},"$2","gi1",8,0,8],
$isaL:1,
p:{
cY:function(a,b,c,d,e,f){var z,y
z=new E.aK()
z.a=d
z.b=!0
y=O.cV(E.aK)
z.y=y
y.bj(z.gi_(),z.gi1())
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
z.sa7(0,e)
z.sbc(f)
z.saT(c)
return z}}},j8:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eA:function(a,b){var z,y,x,w,v
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
z=new O.d8()
y=[V.ao]
z.a=H.e([],y)
x=z.gB()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.f(new E.ja(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d8()
z.a=H.e([],y)
v=z.gB()
v.toString
x=H.f(new E.jb(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d8()
z.a=H.e([],y)
y=z.gB()
y.toString
w=H.f(new E.jc(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.cw])
this.dy=z
C.a.h(z,null)
this.fr=new H.aY(0,0,[P.i,A.eI])},
gie:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga0(z)
y=this.db
y=z.j(0,y.ga0(y))
this.z=y
z=y}return z},
ea:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaE(z):a;(z&&C.a).h(z,y)},
e8:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
j9:function(a,b){var z=new E.j8(a,b)
z.eA(a,b)
return z}}},ja:{"^":"o:12;a",
$1:function(a){var z
H.h(a,"$ist")
z=this.a
z.z=null
z.ch=null}},jb:{"^":"o:12;a",
$1:function(a){var z
H.h(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jc:{"^":"o:12;a",
$1:function(a){var z
H.h(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},jF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a3:x@,0y,0z,0Q,0ch",
gB:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z},
eG:[function(a){var z
H.h(a,"$ist")
z=this.x
if(!(z==null))z.E(a)
this.il()},function(){return this.eG(null)},"eF","$1","$0","gcQ",0,2,1],
ghL:function(){var z,y,x
z=Date.now()
y=C.e.a4(P.ec(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.am(z,!1)
return x/y},
d9:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.p(z)
x=C.d.cp(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.d.cp(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
il:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jH(this),{func:1,ret:-1,args:[P.X]})
C.B.eX(z)
C.B.fG(z,W.fS(y,P.X))}},
ii:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.d9()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.ec(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aG()
w=x.db
C.a.sl(w.a,0)
w.aG()
w=x.dx
C.a.sl(w.a,0)
w.aG()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aU(this.e)}}catch(v){z=H.au(v)
y=H.bw(v)
P.dM("Error: "+H.l(z))
P.dM("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jG:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscT)return E.eQ(a,!0,!0,!0,!1)
y=W.cU(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gce(a).h(0,y)
w=E.eQ(y,!0,!0,!0,!1)
w.a=a
return w},
eQ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jF()
y=P.ii(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bK(a,"webgl",y)
x=H.h(x==null?C.l.bK(a,"experimental-webgl",y):x,"$isdf")
if(x==null)H.u(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j9(x,a)
w=new T.jB(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k9(a)
v=new X.ia()
v.c=new X.aC(!1,!1,!1)
v.d=P.il(null,null,null,P.m)
w.b=v
v=new X.iH(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iq(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jL(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eM,P.b]])
w.z=v
u=document
t=W.aD
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.f(w.gff(),s),!1,t))
v=w.z
r=W.ad
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.f(w.gfi(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.f(w.gfc(),q),!1,r))
v=w.z
p=W.bF
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.f(w.gfk(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.f(w.gfj(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.f(w.gfn(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.f(w.gfp(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.f(w.gfo(),s),!1,t))
p=w.z
o=W.bR;(p&&C.a).h(p,W.a0(a,H.N(W.hQ(a)),H.f(w.gfq(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.f(w.gfg(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.f(w.gfh(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.f(w.gfs(),q),!1,r))
r=w.z
q=W.bm
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.f(w.gfB(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.f(w.gfz(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.f(w.gfA(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.am(Date.now(),!1)
z.ch=0
z.d9()
return z}}},jH:{"^":"o:31;a",
$1:function(a){var z
H.n8(a)
z=this.a
if(z.z){z.z=!1
z.ii()}}}}],["","",,Z,{"^":"",fl:{"^":"b;a,b",p:{
dt:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bq(c)),35044)
a.bindBuffer(b,null)
return new Z.fl(b,z)}}},dY:{"^":"cP;a,b,c,d,e",
b0:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.au(y)
x=P.v('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kw:{"^":"b;a",$isnr:1},dZ:{"^":"b;a,0b,c,d",
aR:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b0:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b0(a)},
iy:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aU:function(a){var z,y,x,w,v
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
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.F(y,", ")+"\nAttrs:   "+C.a.F(u,", ")},
$isoU:1},cn:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},bn:{"^":"b;a",
gcO:function(a){var z,y
z=this.a
y=(z&$.$get$aR().a)!==0?3:0
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aS().a)!==0)y+=2
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$bP().a)!==0)y+=3
if((z&$.$get$bQ().a)!==0)y+=4
if((z&$.$get$bo().a)!==0)++y
return(z&$.$get$aO().a)!==0?y+4:y},
hs:function(a){var z,y,x
z=$.$get$aR()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bo()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fk()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bn))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.i])
y=this.a
if((y&$.$get$aR().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aT().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bP().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bQ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.F(z,"|")},
p:{
as:function(a){return new Z.bn(a)}}}}],["","",,D,{"^":"",e2:{"^":"b;"},b7:{"^":"b;0a,0b,0c",
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.hU(z))
return x!==0},
hE:function(){return this.E(null)},
im:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.E(y)}}},
ae:function(a){return this.im(a,!0,!1)},
p:{
O:function(){var z=new D.b7()
z.a=H.e([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hU:{"^":"o:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},co:{"^":"t;c,d,a,0b,$ti"},cp:{"^":"t;c,d,a,0b,$ti"},E:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",e_:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e_))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nt<"}},em:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.em))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},en:{"^":"t;c,a,0b"},ia:{"^":"b;0a,0b,0c,0d",
ia:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.en(a,this)
y.b=!0
return z.E(y)},
i6:function(a){var z,y
this.c=a.b
this.d.M(0,a.a)
z=this.b
if(z==null)return!1
y=new X.en(a,this)
y.b=!0
return z.E(y)}},er:{"^":"cs;x,y,c,d,e,a,0b"},iq:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ay:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gaO()
s=new X.bI(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cA:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.ay(a,b))
return!0},
b9:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eq()
if(typeof z!=="number")return z.bJ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.ay(a,b))
return!0},
b8:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.ay(a,b))
return!0},
ib:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaO()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.da(new V.W(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.E(w)
return!0},
fm:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.er(c,a,this.a.gaO(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.V(0,0)}},aC:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aC))return!1
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
return z+(this.c?"Shift+":"")}},bI:{"^":"cs;x,y,z,Q,ch,c,d,e,a,0b"},iH:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bV:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaO()
x=new X.bI(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cA:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bV(a,b,!0))
return!0},
b9:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eq()
if(typeof z!=="number")return z.bJ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bV(a,b,!0))
return!0},
b8:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bV(a,b,!1))
return!0},
ic:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaO()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.da(new V.W(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdt:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
gbI:function(){var z=this.c
if(z==null){z=D.O()
this.c=z}return z},
ge0:function(){var z=this.d
if(z==null){z=D.O()
this.d=z}return z}},da:{"^":"cs;x,c,d,e,a,0b"},cs:{"^":"t;"},eU:{"^":"cs;x,y,z,Q,ch,c,d,e,a,0b"},jL:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ay:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.V],"$asc")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gaO()
w=new X.eU(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
i9:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.b
if(z==null)return!1
z.E(this.ay(a,!0))
return!0},
i7:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.c
if(z==null)return!1
z.E(this.ay(a,!0))
return!0},
i8:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.d
if(z==null)return!1
z.E(this.ay(a,!1))
return!0}},k9:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaO:function(){var z=this.a
return V.eG(0,0,(z&&C.l).gbq(z).c,C.l.gbq(z).d)},
d0:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.em(z,new X.aC(y,a.altKey,a.shiftKey))},
aM:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aC(y,a.altKey,a.shiftKey)},
c7:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aC(y,a.altKey,a.shiftKey)},
az:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=z.top
if(typeof x!=="number")return x.N()
return new V.V(y-w,x-v)},
aY:function(a){return new V.W(a.movementX,a.movementY)},
c1:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.af(u.pageX)
C.d.af(u.pageY)
s=z.left
C.d.af(u.pageX)
C.a.h(y,new V.V(t-s,C.d.af(u.pageY)-z.top))}return y},
aw:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e_(z,new X.aC(y,a.altKey,a.shiftKey))},
iQ:[function(a){this.f=!0},"$1","gfi",4,0,4],
iK:[function(a){this.f=!1},"$1","gfc",4,0,4],
iN:[function(a){if(this.f)a.preventDefault()},"$1","gff",4,0,4],
iS:[function(a){var z
H.h(a,"$isbF")
if(!this.f)return
z=this.d0(a)
if(this.b.ia(z))a.preventDefault()},"$1","gfk",4,0,20],
iR:[function(a){var z
H.h(a,"$isbF")
if(!this.f)return
z=this.d0(a)
if(this.b.i6(z))a.preventDefault()},"$1","gfj",4,0,20],
iU:[function(a){var z,y,x,w
H.h(a,"$isaD")
z=this.a
z.focus()
this.f=!0
this.aM(a)
if(this.x){y=this.aw(a)
x=this.aY(a)
if(this.d.cA(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aw(a)
w=this.az(a)
if(this.c.cA(y,w))a.preventDefault()},"$1","gfn",4,0,5],
iW:[function(a){var z,y,x
H.h(a,"$isaD")
this.aM(a)
z=this.aw(a)
if(this.x){y=this.aY(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.az(a)
if(this.c.b9(z,x))a.preventDefault()},"$1","gfp",4,0,5],
iP:[function(a){var z,y,x,w
H.h(a,"$isaD")
z=this.a
if(!(z&&C.l).gbq(z).dr(0,new P.bL(a.clientX,a.clientY,[P.X]))){this.aM(a)
y=this.aw(a)
if(this.x){x=this.aY(a)
if(this.d.b9(y,x))a.preventDefault()
return}if(this.r)return
w=this.az(a)
if(this.c.b9(y,w))a.preventDefault()}},"$1","gfh",4,0,5],
iV:[function(a){var z,y,x
H.h(a,"$isaD")
this.aM(a)
z=this.aw(a)
if(this.x){y=this.aY(a)
if(this.d.b8(z,y))a.preventDefault()
return}if(this.r)return
x=this.az(a)
if(this.c.b8(z,x))a.preventDefault()},"$1","gfo",4,0,5],
iO:[function(a){var z,y,x,w
H.h(a,"$isaD")
z=this.a
if(!(z&&C.l).gbq(z).dr(0,new P.bL(a.clientX,a.clientY,[P.X]))){this.aM(a)
y=this.aw(a)
if(this.x){x=this.aY(a)
if(this.d.b8(y,x))a.preventDefault()
return}if(this.r)return
w=this.az(a)
if(this.c.b8(y,w))a.preventDefault()}},"$1","gfg",4,0,5],
iX:[function(a){var z,y
H.h(a,"$isbR")
this.aM(a)
z=new V.W((a&&C.A).ghB(a),C.A.ghC(a)).w(0,180)
if(this.x){if(this.d.ib(z))a.preventDefault()
return}if(this.r)return
y=this.az(a)
if(this.c.ic(z,y))a.preventDefault()},"$1","gfq",4,0,35],
iY:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aw(this.y)
v=this.az(this.y)
this.d.fm(w,v,x)}},"$1","gfs",4,0,4],
j3:[function(a){var z
H.h(a,"$isbm")
this.a.focus()
this.f=!0
this.c7(a)
z=this.c1(a)
if(this.e.i9(z))a.preventDefault()},"$1","gfB",4,0,13],
j1:[function(a){var z
H.h(a,"$isbm")
this.c7(a)
z=this.c1(a)
if(this.e.i7(z))a.preventDefault()},"$1","gfz",4,0,13],
j2:[function(a){var z
H.h(a,"$isbm")
this.c7(a)
z=this.c1(a)
if(this.e.i8(z))a.preventDefault()},"$1","gfA",4,0,13]}}],["","",,D,{"^":"",hK:{"^":"b;",$isa2:1,$isaL:1},a2:{"^":"b;",$isaL:1},ib:{"^":"aJ;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.O()
this.Q=z}return z},
aa:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fl:[function(a){var z
H.h(a,"$ist")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fl(null)},"iT","$1","$0","gd6",0,2,1],
iZ:[function(a){var z,y,x
H.w(a,"$isk",[D.a2],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.eT(x))return!1}return!0},"$1","gfu",4,0,37],
iH:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd6(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.h(b[u],"$isa2")
if(t instanceof D.cx)C.a.h(this.y,t)
s=t.x
if(s==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.x=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gf9",8,0,19],
j0:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd6(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.h(b[u],"$isa2")
if(t instanceof D.cx)C.a.M(this.y,t)
s=t.x
if(s==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.x=s}H.f(x,w)
C.a.M(s.a,x)}z=new D.cp(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gfw",8,0,19],
eT:function(a){var z=C.a.b1(this.y,a)
return z},
$ask:function(){return[D.a2]},
$asaJ:function(){return[D.a2]}},iQ:{"^":"b;",$isa2:1,$isaL:1},jr:{"^":"b;",$isa2:1,$isaL:1},jD:{"^":"b;",$isa2:1,$isaL:1},cx:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z},
aa:[function(a){var z
H.h(a,"$ist")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aa(null)},"iz","$1","$0","gbP",0,2,1],
$isa2:1,
$isaL:1},jE:{"^":"b;",$isa2:1,$isaL:1}}],["","",,V,{"^":"",
nv:[function(a,b){if(typeof b!=="number")return b.N()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","iE",8,0,33],
cL:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bi(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.d.eg($.n.$2(a,0)?0:a,b),c+b+1)},
bv:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.q],"$asc")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.m(z,u,C.b.ad(z[u],x))}return z},
dL:function(a,b){return C.d.iu(Math.pow(b,C.I.cp(Math.log(H.mz(a))/Math.log(b))))},
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
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
b3:{"^":"b;a,b,c,d",
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
return new V.b3(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
cr:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a5,"$iscr")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.d.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.d.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.d.j(t,s)
q=a5.b
p=C.d.j(z,q)
o=a5.e
n=C.d.j(w,o)
m=a5.x
l=C.d.j(t,m)
k=a5.c
z=C.d.j(z,k)
j=a5.f
w=C.d.j(w,j)
i=a5.y
t=C.d.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.d.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.d.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.d.j(d,s)
b=C.d.j(h,q)
a=C.d.j(f,o)
a0=C.d.j(d,m)
h=C.d.j(h,k)
f=C.d.j(f,j)
d=C.d.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.d.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.d.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.cr(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.j(a3,s),C.d.j(a1,q)+C.d.j(a2,o)+C.d.j(a3,m),C.d.j(a1,k)+C.d.j(a2,j)+C.d.j(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cr))return!1
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
i:function(a){var z,y,x,w,v,u,t,s
z=[P.q]
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
ao:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ag:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
dZ:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.bH()
a3=1/a2
a4=-w
a5=-i
return V.aB((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isao")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.p(s)
r=a7.b
if(typeof r!=="number")return H.p(r)
q=a7.f
if(typeof q!=="number")return H.p(q)
p=a7.z
if(typeof p!=="number")return H.p(p)
o=a7.cy
if(typeof o!=="number")return H.p(o)
n=a7.c
if(typeof n!=="number")return H.p(n)
m=a7.r
if(typeof m!=="number")return H.p(m)
l=a7.Q
if(typeof l!=="number")return H.p(l)
k=a7.db
if(typeof k!=="number")return H.p(k)
j=a7.d
if(typeof j!=="number")return H.p(j)
i=a7.x
if(typeof i!=="number")return H.p(i)
h=a7.ch
if(typeof h!=="number")return H.p(h)
g=a7.dx
if(typeof g!=="number")return H.p(g)
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
return V.aB(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
eh:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gaj(a)
if(typeof z!=="number")return z.j()
y=C.d.j(z,y)
z=this.b
x=a.gak(a)
if(typeof z!=="number")return z.j()
x=C.d.j(z,x)
z=this.c
w=a.gal()
if(typeof z!=="number")return z.j()
w=C.d.j(z,w)
z=this.e
v=a.gaj(a)
if(typeof z!=="number")return z.j()
v=C.d.j(z,v)
z=this.f
u=a.gak(a)
if(typeof z!=="number")return z.j()
u=C.d.j(z,u)
z=this.r
t=a.gal()
if(typeof z!=="number")return z.j()
t=C.d.j(z,t)
z=this.y
s=a.gaj(a)
if(typeof z!=="number")return z.j()
s=C.d.j(z,s)
z=this.z
r=a.gak(a)
if(typeof z!=="number")return z.j()
r=C.d.j(z,r)
z=this.Q
q=a.gal()
if(typeof z!=="number")return z.j()
return new V.G(y+x+w,v+u+t,s+r+C.d.j(z,q))},
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
t=this.d
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.a3(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
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
i:function(a){return this.O()},
dR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
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
O:function(){return this.dR("",3,0)},
C:function(a){return this.dR(a,3,0)},
p:{
aB:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bH:function(){return V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ex:function(a,b,c){return V.aB(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
d9:function(a,b,c,d){return V.aB(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eu:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
ev:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
ew:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aB(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
V:{"^":"b;q:a>,t:b>",
N:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.V(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
a3:{"^":"b;q:a>,t:b>,c",
D:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
bM:{"^":"b;q:a>,t:b>,c,d",
j:function(a,b){return new V.bM(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bM))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
eF:{"^":"b;q:a>,t:b>,c,d",
ga5:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eF))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"},
p:{
eG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eF(a,b,c,d)}}},
W:{"^":"b;a,b",
hT:[function(a){return Math.sqrt(this.G(this))},"$0","gl",1,0,24],
G:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.W(z*b,y*b)},
w:function(a,b){var z,y
if($.n.$2(b,0))return new V.W(0,0)
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
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
hT:[function(a){return Math.sqrt(this.G(this))},"$0","gl",1,0,24],
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ct:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aA:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.G(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if($.n.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
e_:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hA:{"^":"e2;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bQ:function(a){var z=V.cL(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.O()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.E(a)},
scK:function(a,b){},
scv:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bQ(z)}z=new D.E("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.K(z)}},
scz:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bQ(z)}z=new D.E("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.K(z)}},
sZ:function(a,b){var z,y
b=this.bQ(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.E("location",y,b,this,[P.q])
z.b=!0
this.K(z)}},
scw:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.E("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.K(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.E("velocity",x,a,this,[P.q])
z.b=!0
this.K(z)}},
sci:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.E("dampening",y,a,this,[P.q])
z.b=!0
this.K(z)}},
am:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sZ(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
p:{
cW:function(){var z=new U.hA()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e4:{"^":"a9;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.O()
this.b=z}return z},
an:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e4))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
p:{
cj:function(a){var z=new U.e4()
z.a=a
return z}}},ef:{"^":"aJ;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
K:[function(a){var z
H.h(a,"$ist")
z=this.e
if(!(z==null))z.E(a)},function(){return this.K(null)},"ah","$1","$0","gaL",0,2,1],
iA:[function(a,b){var z,y,x,w,v,u,t
z=U.a9
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geH",8,0,23],
j_:[function(a,b){var z,y,x,w,v,u,t
z=U.a9
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gB()
t.toString
H.f(x,w)
C.a.M(t.a,x)}}z=new D.cp(a,b,this,[z])
z.b=!0
this.K(z)},"$2","gfv",8,0,23],
an:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aw(z,z.length,0,[H.y(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.an(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.bH():x
z=this.e
if(!(z==null))z.ae(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ef))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.Q(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.a9]},
$asaJ:function(){return[U.a9]},
$isa9:1,
p:{
d_:function(a){var z=new U.ef()
z.bO(U.a9)
z.bj(z.geH(),z.gfv())
z.e=null
z.f=V.bH()
z.r=0
return z}}},a9:{"^":"e2;"},eH:{"^":"a9;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.O()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.E(a)},
sek:function(a){var z,y
a=V.cL(a,0,6.283185307179586)
z=this.a
if(!$.n.$2(z,a)){y=this.a
this.a=a
z=new D.E("yaw",y,a,this,[P.q])
z.b=!0
this.K(z)}},
se7:function(a,b){var z,y
b=V.cL(b,0,6.283185307179586)
z=this.b
if(!$.n.$2(z,b)){y=this.b
this.b=b
z=new D.E("pitch",y,b,this,[P.q])
z.b=!0
this.K(z)}},
sec:function(a){var z,y
a=V.cL(a,0,6.283185307179586)
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
z=new D.E("roll",y,a,this,[P.q])
z.b=!0
this.K(z)}},
an:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sek(this.a+this.d*b.y)
this.se7(0,this.b+this.e*b.y)
this.sec(this.c+this.f*b.y)
this.x=V.ew(this.c).j(0,V.ev(this.b)).j(0,V.eu(this.a))
z=this.y
if(!(z==null))z.ae(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eH))return!1
z=this.a
y=b.a
if(!$.n.$2(z,y))return!1
z=this.b
y=b.b
if(!$.n.$2(z,y))return!1
z=this.c
y=b.c
if(!$.n.$2(z,y))return!1
z=this.d
y=b.d
if(!$.n.$2(z,y))return!1
z=this.e
y=b.e
if(!$.n.$2(z,y))return!1
z=this.f
y=b.f
if(!$.n.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"], ["+V.I(this.d,3,0)+", "+V.I(this.e,3,0)+", "+V.I(this.f,3,0)+"]"}},ka:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.cy
if(z==null){z=D.O()
this.cy=z}return z},
K:[function(a){var z
H.h(a,"$ist")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.K(null)},"ah","$1","$0","gaL",0,2,1],
b_:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdt()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.f(this.gbX(),y)
C.a.h(z.a,x)
x=this.a.c.ge0()
x.toString
z=H.f(this.gbY(),y)
C.a.h(x.a,z)
z=this.a.c.gbI()
z.toString
y=H.f(this.gbZ(),y)
C.a.h(z.a,y)
return!0},
f4:[function(a){H.h(a,"$ist")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbX",4,0,2],
f5:[function(a){var z,y,x,w,v,u,t
a=H.j(H.h(a,"$ist"),"$isbI")
if(!this.y)return
if(this.x){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.N(0,a.y)
z=new V.W(y.a,y.b).j(0,2).w(0,z.ga5())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=new V.W(x.a,x.b).j(0,2).w(0,z.ga5())
x=this.b
v=w.a
if(typeof v!=="number")return v.R()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
this.b.sV(0)
y=y.N(0,a.z)
this.Q=new V.W(y.a,y.b).j(0,2).w(0,z.ga5())}this.ah()},"$1","gbY",4,0,2],
f6:[function(a){var z,y,x
H.h(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.G(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sV(y*10*x)
this.ah()}},"$1","gbZ",4,0,2],
an:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.ch=y
x=b.y
this.b.am(0,x)
this.cx=V.ew(this.b.d)}return this.cx},
$isa9:1},kb:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.O()
this.fx=z}return z},
K:[function(a){var z
H.h(a,"$ist")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.K(null)},"ah","$1","$0","gaL",0,2,1],
b_:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdt()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.f(this.gbX(),y)
C.a.h(z.a,x)
x=this.a.c.ge0()
x.toString
z=H.f(this.gbY(),y)
C.a.h(x.a,z)
z=this.a.c.gbI()
z.toString
x=H.f(this.gbZ(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.O()
x.f=z}x=H.f(this.gf1(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.O()
x.d=z}x=H.f(this.gf2(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.O()
x.b=z}x=H.f(this.gfY(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.O()
x.d=z}x=H.f(this.gfX(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.O()
x.c=z}y=H.f(this.gfW(),y)
C.a.h(z.a,y)
return!0},
aq:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.R()
z=-z}if(this.r){if(typeof y!=="number")return y.R()
y=-y}return new V.W(z,y)},
f4:[function(a){a=H.j(H.h(a,"$ist"),"$isbI")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbX",4,0,2],
f5:[function(a){var z,y,x,w,v,u,t
a=H.j(H.h(a,"$ist"),"$isbI")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aq(new V.W(y.a,y.b).j(0,2).w(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aq(new V.W(x.a,x.b).j(0,2).w(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.N(0,a.z)
this.dx=this.aq(new V.W(y.a,y.b).j(0,2).w(0,z.ga5()))}this.ah()},"$1","gbY",4,0,2],
f6:[function(a){var z,y,x
H.h(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sV(-y*10*z)
this.ah()}},"$1","gbZ",4,0,2],
iE:[function(a){if(H.j(H.h(a,"$ist"),"$iser").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gf1",4,0,2],
iF:[function(a){var z,y,x,w,v,u,t
a=H.j(H.h(a,"$ist"),"$isbI")
if(!J.Q(this.d,a.x.b))return
z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aq(new V.W(x.a,x.b).j(0,2).w(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.N(0,a.z)
this.dx=this.aq(new V.W(y.a,y.b).j(0,2).w(0,z.ga5()))
this.ah()},"$1","gf2",4,0,2],
j7:[function(a){H.h(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfY",4,0,2],
j6:[function(a){var z,y,x,w,v,u,t
a=H.j(H.h(a,"$ist"),"$iseU")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.W(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aq(new V.W(y.a,y.b).j(0,2).w(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aq(new V.W(x.a,x.b).j(0,2).w(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sZ(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sZ(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.N(0,a.z)
this.dx=this.aq(new V.W(y.a,y.b).j(0,2).w(0,z.ga5()))}this.ah()},"$1","gfX",4,0,2],
j5:[function(a){var z,y,x
H.h(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sV(-y*10*z)
this.ah()}},"$1","gfW",4,0,2],
an:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.dy=y
x=b.y
this.c.am(0,x)
this.b.am(0,x)
this.fr=V.eu(this.b.d).j(0,V.ev(this.c.d))}return this.fr},
$isa9:1},kc:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.O()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.E(a)},
b_:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.O()
z.e=y
z=y}else z=y
y=H.f(this.gf7(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.O()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iG:[function(a){var z,y,x,w
H.h(a,"$ist")
if(!J.Q(this.b,this.a.b.c))return
H.j(a,"$isda")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.E("zoom",z,w,this,[P.q])
z.b=!0
this.K(z)}},"$1","gf7",4,0,2],
an:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.d9(x,x,x,1)}return this.f},
$isa9:1}}],["","",,M,{"^":"",hS:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aH:[function(a){var z
H.h(a,"$ist")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aH(null)},"iB","$1","$0","gap",0,2,1],
iL:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aK
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","gfd",8,0,8],
iM:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aK
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga3()==null){s=new D.b7()
s.a=H.e([],v)
s.c=0
t.sa3(s)}s=t.ga3()
s.toString
H.f(x,w)
C.a.M(s.a,x)}}z=new D.cp(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","gfe",8,0,8],
sbc:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gB()
z.toString
y=H.f(this.gap(),{func:1,ret:-1,args:[D.t]})
C.a.M(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.gap(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.cw])
z.b=!0
this.aH(z)}},
gB:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.ea(this.c)
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
if(typeof x!=="number")return H.p(x)
u=C.e.af(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.e.af(v.b*w)
s=C.e.af(v.c*x)
a.c=s
v=C.e.af(v.d*w)
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
s.e9(V.aB(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.eC
if(y==null){y=new V.G(0,0,-1)
m=y.w(0,Math.sqrt(y.G(y)))
y=new V.G(0,1,0).aA(m)
l=y.w(0,Math.sqrt(y.G(y)))
k=m.aA(l)
j=new V.G(0,0,0)
y=V.aB(l.a,k.a,m.a,l.R(0).G(j),l.b,k.b,m.b,k.R(0).G(j),l.c,k.c,m.c,m.R(0).G(j),0,0,0,1)
$.eC=y
i=y}else i=y
y=z.a
if(y!=null){h=y.an(0,a,z)
if(h!=null)i=h.j(0,i)}a.db.e9(i)
z=this.c
if(z!=null)z.am(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.H();)z.d.am(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.H();)z.d.aU(a)
this.a.toString
a.cy.cB()
a.db.cB()
this.b.toString
a.e8()},
$isoG:1}}],["","",,A,{"^":"",dT:{"^":"b;a,b,c"},ho:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hF:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hD:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},iw:{"^":"eI;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aP,0aC,0aQ,0bt,0du,0dv,0bu,0bv,0dw,0dz,0bw,0bx,0dA,0dB,0by,0dC,0dD,0bz,0dE,0dF,0bA,0bB,0bC,0dG,0dH,0bD,0bE,0dI,0dJ,0bF,0dK,0cj,0dL,0ck,0dM,0cl,0dN,0cm,0dO,0cn,0dP,0co,a,b,0c,0d,0e,0f,0r",
ez:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.ap("")
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
a2.h0(z)
a2.h7(z)
a2.h1(z)
a2.hf(z)
a2.hg(z)
a2.h9(z)
a2.hk(z)
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
z=new P.ap("")
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
v.h4(z)
v.h_(z)
v.h2(z)
v.h5(z)
v.hd(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hb(z)
v.hc(z)}v.h8(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.h){r+="uniform sampler2D alphaTxt;\n"
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
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
r=z.a+="   return litClr*("+C.a.F(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.h3(z)
v.ha(z)
v.he(z)
v.hh(z)
v.hi(z)
v.hj(z)
v.h6(z)}r=z.a+="// === Main ===\n"
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
this.c=this.d1(x.charCodeAt(0)==0?x:x,35633)
this.d=this.d1(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fW(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.u(P.v("Failed to link shader: "+H.l(m)))}this.fR()
this.fT()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaN")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaN")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaN")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaN")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdq")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaN")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaN")
this.k3=H.e([],[A.aN])
y=a2.aP
if(y>0){this.k2=H.h(this.r.n(0,"bendMatCount"),"$isP")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.u(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaN"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isaq")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isP")
break
case C.f:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isar")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isP")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isaq")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isP")
break
case C.f:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isar")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isP")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.aP=H.j(this.r.n(0,"diffuseTxt"),"$isaq")
this.aQ=H.j(this.r.n(0,"nullDiffuseTxt"),"$isP")
break
case C.f:this.aC=H.j(this.r.n(0,"diffuseTxt"),"$isar")
this.aQ=H.j(this.r.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a2.d
if(y!==C.c){this.bt=H.j(this.r.n(0,"invDiffuseClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.du=H.j(this.r.n(0,"invDiffuseTxt"),"$isaq")
this.bu=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.f:this.dv=H.j(this.r.n(0,"invDiffuseTxt"),"$isar")
this.bu=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a2.e
if(y!==C.c){this.bx=H.j(this.r.n(0,"shininess"),"$isZ")
this.bv=H.j(this.r.n(0,"specularClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.dw=H.j(this.r.n(0,"specularTxt"),"$isaq")
this.bw=H.j(this.r.n(0,"nullSpecularTxt"),"$isP")
break
case C.f:this.dz=H.j(this.r.n(0,"specularTxt"),"$isar")
this.bw=H.j(this.r.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.h:this.dA=H.j(this.r.n(0,"bumpTxt"),"$isaq")
this.by=H.j(this.r.n(0,"nullBumpTxt"),"$isP")
break
case C.f:this.dB=H.j(this.r.n(0,"bumpTxt"),"$isar")
this.by=H.j(this.r.n(0,"nullBumpTxt"),"$isP")
break}if(a2.dy){this.dC=H.j(this.r.n(0,"envSampler"),"$isar")
this.dD=H.j(this.r.n(0,"nullEnvTxt"),"$isP")
y=a2.r
if(y!==C.c){this.bz=H.j(this.r.n(0,"reflectClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.dE=H.j(this.r.n(0,"reflectTxt"),"$isaq")
this.bA=H.j(this.r.n(0,"nullReflectTxt"),"$isP")
break
case C.f:this.dF=H.j(this.r.n(0,"reflectTxt"),"$isar")
this.bA=H.j(this.r.n(0,"nullReflectTxt"),"$isP")
break}}y=a2.x
if(y!==C.c){this.bB=H.j(this.r.n(0,"refraction"),"$isZ")
this.bC=H.j(this.r.n(0,"refractClr"),"$isM")
switch(y){case C.c:break
case C.i:break
case C.h:this.dG=H.j(this.r.n(0,"refractTxt"),"$isaq")
this.bD=H.j(this.r.n(0,"nullRefractTxt"),"$isP")
break
case C.f:this.dH=H.j(this.r.n(0,"refractTxt"),"$isar")
this.bD=H.j(this.r.n(0,"nullRefractTxt"),"$isP")
break}}}y=a2.y
if(y!==C.c){this.bE=H.j(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.i:break
case C.h:this.dI=H.j(this.r.n(0,"alphaTxt"),"$isaq")
this.bF=H.j(this.r.n(0,"nullAlphaTxt"),"$isP")
break
case C.f:this.dJ=H.j(this.r.n(0,"alphaTxt"),"$isar")
this.bF=H.j(this.r.n(0,"nullAlphaTxt"),"$isP")
break}}this.cj=H.e([],[A.f6])
this.ck=H.e([],[A.f7])
this.cl=H.e([],[A.f8])
this.cm=H.e([],[A.f9])
this.cn=H.e([],[A.fa])
this.co=H.e([],[A.fb])
if(a2.k2){y=a2.z
if(y>0){this.dK=H.h(this.r.n(0,"dirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.cj;(x&&C.a).h(x,new A.f6(l,k,j))}}y=a2.Q
if(y>0){this.dL=H.h(this.r.n(0,"pntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isZ")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.ck;(x&&C.a).h(x,new A.f7(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dM=H.h(this.r.n(0,"spotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isZ")
x=this.cl;(x&&C.a).h(x,new A.f8(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dN=H.h(this.r.n(0,"txtDirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isP")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isaq")
x=this.cm;(x&&C.a).h(x,new A.f9(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dO=H.h(this.r.n(0,"txtPntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdq")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isP")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isar")
x=this.cn;(x&&C.a).h(x,new A.fa(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dP=H.h(this.r.n(0,"txtSpotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isP")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isM")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isZ")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.u(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isaq")
x=this.co;(x&&C.a).h(x,new A.fb(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ai:function(a,b,c){b.a.uniform1i(b.d,1)},
ab:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.er(c)
b.a.uniform1i(b.d,0)}},
p:{
ix:function(a,b){var z,y
z=a.aC
y=new A.iw(b,z)
y.eC(b,z)
y.ez(a,b)
return y}}},iB:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aP,aC,aQ",
h0:function(a){var z,y,x
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
h7:function(a){var z
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
h1:function(a){var z
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
hf:function(a){var z,y
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
hg:function(a){var z,y
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
h9:function(a){var z
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
hk:function(a){var z
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
ax:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aF(c,1))+"Txt;\n"
a.a=z
if(b===C.h)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h4:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ax(a,z,"emission")
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
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
h_:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ax(a,z,"ambient")
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
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
h2:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ax(a,z,"diffuse")
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
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
h5:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ax(a,z,"invDiffuse")
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
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hd:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ax(a,z,"specular")
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
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
h8:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.i:break
case C.h:z+="uniform sampler2D bumpTxt;\n"
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
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hb:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ax(a,z,"reflect")
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
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hc:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ax(a,z,"refract")
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
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
h3:function(a){var z,y
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
ha:function(a){var z,y
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
he:function(a){var z,y
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
hh:function(a){var z,y,x
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
hi:function(a){var z,y,x
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
hj:function(a){var z,y,x
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
h6:function(a){var z
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
i:function(a){return this.aC}},f6:{"^":"b;a,b,c"},f9:{"^":"b;a,b,c,d,e,f,r,x"},f7:{"^":"b;a,b,c,d,e,f,r"},fa:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f8:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fb:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eI:{"^":"cP;",
eC:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
d1:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fW(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fR:function(){var z,y,x,w,v,u
z=H.e([],[A.dT])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dT(y,v.name,u))}this.f=new A.ho(z)},
fT:function(){var z,y,x,w,v,u
z=H.e([],[A.ae])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hA(v.type,v.size,v.name,u))}this.r=new A.jW(z)},
aJ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.P(z,y,b,c)
else return A.dp(z,y,b,a,c)},
eU:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aq(z,y,b,c)
else return A.dp(z,y,b,a,c)},
eV:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ar(z,y,b,c)
else return A.dp(z,y,b,a,c)},
bo:function(a,b){return new P.fo(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hA:function(a,b,c,d){switch(a){case 5120:return this.aJ(b,c,d)
case 5121:return this.aJ(b,c,d)
case 5122:return this.aJ(b,c,d)
case 5123:return this.aJ(b,c,d)
case 5124:return this.aJ(b,c,d)
case 5125:return this.aJ(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jR(this.a,this.e,c,d)
case 35665:return new A.M(this.a,this.e,c,d)
case 35666:return new A.jU(this.a,this.e,c,d)
case 35667:return new A.jS(this.a,this.e,c,d)
case 35668:return new A.jT(this.a,this.e,c,d)
case 35669:return new A.jV(this.a,this.e,c,d)
case 35674:return new A.jY(this.a,this.e,c,d)
case 35675:return new A.dq(this.a,this.e,c,d)
case 35676:return new A.aN(this.a,this.e,c,d)
case 35678:return this.eU(b,c,d)
case 35680:return this.eV(b,c,d)
case 35670:throw H.a(this.bo("BOOL",c))
case 35671:throw H.a(this.bo("BOOL_VEC2",c))
case 35672:throw H.a(this.bo("BOOL_VEC3",c))
case 35673:throw H.a(this.bo("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},ci:{"^":"b;a,b",
i:function(a){return this.b}},ae:{"^":"b;"},jW:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.O()},
hK:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.hK("\n")}},P:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jS:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jT:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jV:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jQ:{"^":"ae;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dp:function(a,b,c,d,e){var z=new A.jQ(a,b,c,e)
z.f=d
z.e=P.im(d,0,!1,P.m)
return z}}},Z:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jR:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},M:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jU:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jY:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dq:{"^":"ae;a,b,c,d",
ao:function(a){var z=new Float32Array(H.bq(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aN:{"^":"ae;a,b,c,d",
ao:function(a){var z=new Float32Array(H.bq(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},aq:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ar:{"^":"ae;a,b,c,d",
er:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dE:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
z=F.dh()
F.bW(z,b,c,d,a,1,0,0,1)
F.bW(z,b,c,d,a,0,1,0,3)
F.bW(z,b,c,d,a,0,0,1,2)
F.bW(z,b,c,d,a,-1,0,0,0)
F.bW(z,b,c,d,a,0,-1,0,0)
F.bW(z,b,c,d,a,0,0,-1,3)
z.ar()
return z},
cD:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bW:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
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
z.d=y}l=F.cD(y)
k=F.cD(z.b)
j=F.dN(d,e,new F.mi(z,F.cD(z.c),F.cD(z.d),k,l,c),b)
if(j!=null)a.b7(j)},
fZ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.f(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
z=F.dh()
y=b?-1:1
x=-6.283185307179586/e
w=H.e([],[F.ah])
v=z.a
u=new V.G(0,0,y)
u=u.w(0,Math.sqrt(u.G(u)))
C.a.h(w,v.ho(new V.bM(a,-1,-1,-1),new V.b3(1,1,1,1),new V.a3(0,0,c),new V.G(0,0,y),new V.V(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.G(r,q,y).w(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cb(new V.bM(a,-1,-1,-1),null,new V.b3(n,l,m,1),new V.a3(r*p,q*p,c),new V.G(0,0,y),new V.V(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hm(w)
return z},
fX:function(a,b,c,d,e,f){return F.mF(!0,c,d,new F.mE(a,f),e)},
mF:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dN(c,e,new F.mH(d),null)
if(z==null)return
z.ar()
z.c8()
if(b)z.b7(F.fZ(3,!1,1,new F.mI(d),e))
z.b7(F.fZ(1,!0,-1,new F.mJ(d),e))
return z},
ha:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.ne()
y=F.dE(a,null,new F.nf(z),c)
y.c8()
return y},
he:function(a,b,c,d){return F.fY(c,a,d,b,new F.nh())},
mY:function(a,b,c,d,e,f){return F.fY(d,a,e,b,new F.mZ(f,c))},
fY:function(a,b,c,d,e){var z=F.dN(a,b,new F.mG(H.f(e,{func:1,ret:V.a3,args:[P.q]}),d,b,c),null)
if(z==null)return
z.ar()
z.c8()
return z},
dN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.dh()
y=H.e([],[F.ah])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cb(null,null,new V.b3(u,0,0,1),null,null,new V.V(w,1),null,null,0)
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
t=F.cb(null,null,new V.b3(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cg(d))}}z.d.hn(a+1,b+1,y)
return z},
mi:{"^":"o:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ct(z.b,b).ct(z.d.ct(z.c,b),c)
a.sZ(0,new V.a3(y.a,y.b,y.c))
a.see(y.w(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
a.sdn(new V.bM(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mE:{"^":"o:15;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mH:{"^":"o:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sZ(0,new V.a3(y,u,w))
u=new V.G(y,u,w)
a.see(u.w(0,Math.sqrt(u.G(u))))
a.sdn(new V.bM(1-c,2+c,-1,-1))}},
mI:{"^":"o:22;a",
$1:function(a){return this.a.$2(a,1)}},
mJ:{"^":"o:22;a",
$1:function(a){return this.a.$2(1-a,0)}},
ne:{"^":"o:15;",
$2:function(a,b){return 0}},
nf:{"^":"o:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.G(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.G(x))).j(0,1+z)
a.sZ(0,new V.a3(z.a,z.b,z.c))}},
nh:{"^":"o:16;",
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)}},
mZ:{"^":"o:16;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a3(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mG:{"^":"o:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dO(y.$1(z),x)
x=J.dO(y.$1(z+3.141592653589793/this.c),x).N(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.G(x)))
u=new V.G(1,0,0)
y=v.aA(!v.u(0,u)?new V.G(0,0,1):u)
t=y.w(0,Math.sqrt(y.G(y)))
y=t.aA(v)
u=y.w(0,Math.sqrt(y.G(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sZ(0,w.D(0,new V.a3(y.a-x.a,y.b-x.b,y.c-x.c)))}},
an:{"^":"b;0a,0b,0c,0d,0e",
aB:function(){if(!this.gb3()){C.a.M(this.a.a.d.b,this)
this.a.a.Y()}this.c3()
this.c4()
this.fE()},
fO:function(a){this.a=a
C.a.h(a.d.b,this)},
fP:function(a){this.b=a
C.a.h(a.d.c,this)},
fQ:function(a){this.c=a
C.a.h(a.d.d,this)},
c3:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
c4:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
fE:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gb3:function(){return this.a==null||this.b==null||this.c==null},
eO:function(){var z,y,x,w,v
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
if(v.e_())return
return v.w(0,Math.sqrt(v.G(v)))},
eR:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.N(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.G(z)))
z=w.N(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aA(z.w(0,Math.sqrt(z.G(z))))
return z.w(0,Math.sqrt(z.G(z)))},
cd:function(){if(this.d!=null)return!0
var z=this.eO()
if(z==null){z=this.eR()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
eN:function(){var z,y,x,w,v
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
if(v.e_())return
return v.w(0,Math.sqrt(v.G(v)))},
eQ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.R(0)}else{l=(z-q.b)/n
z=r.N(0,u).j(0,l).D(0,u).N(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.R(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.G(z)))
z=k.aA(m)
z=z.w(0,Math.sqrt(z.G(z))).aA(k)
m=z.w(0,Math.sqrt(z.G(z)))}return m},
cb:function(){if(this.e!=null)return!0
var z=this.eN()
if(z==null){z=this.eQ()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
b4:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.R(0)
y=this.e
if(y!=null)this.e=y.R(0)
this.a.a.Y()},
ghw:function(a){if(J.Q(this.a,this.b))return!0
if(J.Q(this.b,this.c))return!0
if(J.Q(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
C:function(a){var z,y
if(this.gb3())return a+"disposed"
z=a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)+", "+C.b.ad(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.C("")},
p:{
bB:function(a,b,c){var z,y,x
z=new F.an()
y=a.a
if(y==null)H.u(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.u(P.v("May not create a face with vertices attached to different shapes."))
z.fO(a)
z.fP(b)
z.fQ(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
hV:{"^":"b;"},
jq:{"^":"hV;",
b6:function(a,b,c){var z,y
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
d5:{"^":"b;0a,0b",
aB:function(){if(!this.gb3()){C.a.M(this.a.a.c.b,this)
this.a.a.Y()}this.c3()
this.c4()},
c3:function(){var z=this.a
if(z!=null){C.a.M(z.c.b,this)
this.a=null}},
c4:function(){var z=this.b
if(z!=null){C.a.M(z.c.c,this)
this.b=null}},
gb3:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
C:function(a){if(this.gb3())return a+"disposed"
return a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)},
O:function(){return this.C("")}},
ic:{"^":"b;"},
jP:{"^":"ic;",
b6:function(a,b,c){var z,y
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
de:{"^":"b;0a",
aB:function(){var z=this.a
if(z!=null){C.a.M(z.a.b.b,this)
this.a.a.Y()}this.fD()},
fD:function(){var z=this.a
if(z!=null){C.a.M(z.b.b,this)
this.a=null}},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ad(J.ac(z.e),0)},
O:function(){return this.C("")}},
eJ:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
b7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hy())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.de()
if(r.a==null)H.u(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d5()
s=p.a
if(s==null)H.u(P.v("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.u(P.v("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.E(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bB(p,o,l)}z=this.e
if(!(z==null))z.ae(0)},
ar:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ar()||!1
if(!this.a.ar())y=!1
z=this.e
if(!(z==null))z.ae(0)
return y},
eZ:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ah],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
if(a.b6(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hX:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ah],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.d(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.eZ(a,v,y,u,t))b.b7(u)}this.a.A()
this.c.cE()
this.d.cE()
this.b.ih()
this.c.cF(new F.jP())
this.d.cF(new F.jq())
z=this.e
if(!(z==null))z.ae(0)},
hr:function(a){this.hX(new F.kq(),new F.iL())},
c8:function(){return this.hr(null)},
b4:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.b4()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.d(z,y)
x=z[y]
z=x.r
if(z!=null)x.se1(new V.G(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.G(w,v,z).w(0,Math.sqrt(w*w+v*v+z*z))
if(!J.Q(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.E(null)}}}}z=this.e
if(!(z==null))z.ae(0)},
hu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aR()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$bP().a)!==0)++w
if((x&$.$get$bQ().a)!==0)++w
if((x&$.$get$bo().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
v=b.gcO(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dY])
for(r=0,q=0;q<w;++q){p=b.hs(q)
o=p.gcO(p)
C.a.m(s,q,new Z.dY(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].hU(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bq(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dZ(new Z.fl(34962,j),s,b)
i.b=H.e([],[Z.cn])
if(this.b.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dt(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dt(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(1,h.length,f))}if(this.d.b.length!==0){x=P.m
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
C.a.h(h,g.e)}f=Z.dt(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cn(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.F(z,"\n")},
a6:function(a){var z=this.e
if(!(z==null))z.E(a)},
Y:function(){return this.a6(null)},
p:{
dh:function(){var z,y
z=new F.eJ()
y=new F.kl(z)
y.b=!1
y.c=H.e([],[F.ah])
z.a=y
y=new F.jl(z)
y.b=H.e([],[F.de])
z.b=y
y=new F.jk(z)
y.b=H.e([],[F.d5])
z.c=y
y=new F.jj(z)
y.b=H.e([],[F.an])
z.d=y
z.e=null
return z}}},
jj:{"^":"b;a,0b",
hm:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ah],"$asc")
z=H.e([],[F.an])
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
hn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ah],"$asc")
z=H.e([],[F.an])
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
cF:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b6(0,v,t)){v.aB()
break}}}}},
cE:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.ghw(x)
if(y)x.aB()}},
ar:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cd())x=!1
return x},
cc:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cb())x=!1
return x},
b4:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].b4()},
i:function(a){return this.O()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
O:function(){return this.C("")}},
jk:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cF:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.d(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b6(0,v,t)){v.aB()
break}}}}},
cE:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.Q(x.a,x.b)
if(y)x.aB()}},
i:function(a){return this.O()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.F(z,"\n")},
O:function(){return this.C("")}},
jl:{"^":"b;a,0b",
gl:function(a){return this.b.length},
ih:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aB()}},
i:function(a){return this.O()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
O:function(){return this.C("")}},
ah:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cg:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cb(this.cx,x,u,z,y,w,v,a,t)},
hy:function(){return this.cg(null)},
sZ:function(a,b){var z
if(!J.Q(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Y()}},
se1:function(a){var z
a=a.w(0,Math.sqrt(a.G(a)))
if(!J.Q(this.r,a)){this.r=a
z=this.a
if(z!=null)z.Y()}},
see:function(a){var z
if(!J.Q(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Y()}},
sdn:function(a){var z
if(!J.Q(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.Y()}},
hU:function(a){var z,y
z=J.K(a)
if(z.u(a,$.$get$aR())){z=this.f
y=[P.q]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aQ())){z=this.r
y=[P.q]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aP())){z=this.x
y=[P.q]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aS())){z=this.y
y=[P.q]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.u(a,$.$get$aT())){z=this.z
y=[P.q]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bP())){z=this.Q
y=[P.q]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bQ())){z=this.Q
y=[P.q]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bo()))return H.e([this.ch],[P.q])
else if(z.u(a,$.$get$aO())){z=this.cx
y=[P.q]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.q])},
cd:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.L(0,new F.kv(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
cb:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.L(0,new F.ku(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
C:function(a){var z,y,x
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
C.a.h(z,V.I(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.F(z,", ")
return a+"{"+x+"}"},
O:function(){return this.C("")},
p:{
cb:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ah()
y=new F.kt(z)
y.b=H.e([],[F.de])
z.b=y
y=new F.kp(z)
x=[F.d5]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.km(z)
x=[F.an]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$fi()
z.e=0
y=$.$get$aR()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aQ().a)!==0?e:null
z.x=(x&$.$get$aP().a)!==0?b:null
z.y=(x&$.$get$aS().a)!==0?f:null
z.z=(x&$.$get$aT().a)!==0?g:null
z.Q=(x&$.$get$fj().a)!==0?c:null
z.ch=(x&$.$get$bo().a)!==0?i:0
z.cx=(x&$.$get$aO().a)!==0?a:null
return z}}},
kv:{"^":"o:10;a",
$1:function(a){var z,y
H.h(a,"$isan")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
ku:{"^":"o:10;a",
$1:function(a){var z,y
H.h(a,"$isan")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kl:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Y()
return!0},
hp:function(a,b,c,d,e,f,g,h,i){var z=F.cb(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
ho:function(a,b,c,d,e,f){return this.hp(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ar:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cd()
return!0},
cc:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cb()
return!0},
hv:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.O()},
C:function(a){var z,y,x,w
this.A()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
O:function(){return this.C("")}},
km:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
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
L:function(a,b){H.f(b,{func:1,ret:-1,args:[F.an]})
C.a.L(this.b,b)
C.a.L(this.c,new F.kn(this,b))
C.a.L(this.d,new F.ko(this,b))},
i:function(a){return this.O()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
O:function(){return this.C("")}},
kn:{"^":"o:10;a,b",
$1:function(a){H.h(a,"$isan")
if(!J.Q(a.a,this.a))this.b.$1(a)}},
ko:{"^":"o:10;a,b",
$1:function(a){var z
H.h(a,"$isan")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},
kp:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.O()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
O:function(){return this.C("")}},
kr:{"^":"b;"},
kq:{"^":"kr;",
b6:function(a,b,c){return J.Q(b.f,c.f)}},
ks:{"^":"b;"},
iL:{"^":"ks;",
b7:function(a){var z,y,x,w
H.w(a,"$isc",[F.ah],"$asc")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.G(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].se1(z)
return}},
kt:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.O()},
C:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.F(z,"\n")},
O:function(){return this.C("")}}}],["","",,O,{"^":"",iy:{"^":"cw;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.O()
this.dy=z}return z},
a2:[function(a){var z
H.h(a,"$ist")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.a2(null)},"eI","$1","$0","gbk",0,2,1],
fI:[function(a){H.h(a,"$ist")
this.a=null
this.a2(a)},function(){return this.fI(null)},"j4","$1","$0","gfH",0,2,1],
iI:[function(a,b){var z=V.ao
z=new D.co(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.a2(z)},"$2","gfa",8,0,25],
iJ:[function(a,b){var z=V.ao
z=new D.cp(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.a2(z)},"$2","gfb",8,0,25],
cZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a4(z.e.length+3,4)*4
x=C.e.a4(z.f.length+3,4)*4
w=C.e.a4(z.r.length+3,4)*4
v=C.e.a4(z.x.length+3,4)*4
u=C.e.a4(z.y.length+3,4)*4
t=C.e.a4(z.z.length+3,4)*4
s=C.e.a4(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.e.i(q.a)+C.e.i(p.a)+C.e.i(o.a)+C.e.i(n.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)+C.e.i(j.a)+C.e.i(i.a)+"_"
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
a=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a0=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aR()
if(c){z=$.$get$aQ()
a6=new Z.bn(a6.a|z.a)}if(b){z=$.$get$aP()
a6=new Z.bn(a6.a|z.a)}if(a){z=$.$get$aS()
a6=new Z.bn(a6.a|z.a)}if(a0){z=$.$get$aT()
a6=new Z.bn(a6.a|z.a)}if(a2){z=$.$get$aO()
a6=new Z.bn(a6.a|z.a)}return new A.iB(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
W:function(a,b){H.w(a,"$isc",[T.dk],"$asc")
if(b!=null)if(!C.a.b1(a,b)){b.a=a.length
C.a.h(a,b)}},
am:function(a,b){var z,y,x
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.H();){y=z.d
y.a=new V.ao(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
x=y.b
if(x!=null)y.a=x.an(0,b,y)}},
ij:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cZ()
y=a.fr.k(0,z.aC)
if(y==null){y=A.ix(z,a.a)
x=y.b
if(x.length===0)H.u(P.v("May not cache a shader with no name."))
if(a.fr.br(0,x))H.u(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aQ
z=b.e
if(!(z instanceof Z.dZ)){b.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)b.d.ar()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.cc()
t.a.cc()
t=t.e
if(!(t==null))t.ae(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hv()
s=s.e
if(!(s==null))s.ae(0)}q=b.d.hu(new Z.kw(a.a),v)
q.aR($.$get$aR()).e=this.a.y.c
if(z)q.aR($.$get$aQ()).e=this.a.Q.c
if(u)q.aR($.$get$aP()).e=this.a.z.c
if(w.rx)q.aR($.$get$aS()).e=this.a.ch.c
if(t)q.aR($.$get$aT()).e=this.a.cx.c
if(w.x1)q.aR($.$get$aO()).e=this.a.cy.c
b.e=q}z=T.dk
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hF()
if(w.fx){u=this.a
t=a.dx
t=t.ga0(t)
u=u.db
u.toString
u.ao(t.ag(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga0(t)
s=a.dx
s=t.j(0,s.ga0(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ao(t.ag(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gie()
s=a.dx
s=t.j(0,s.ga0(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ao(t.ag(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ao(t.ag(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ao(t.ag(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ao(C.t.ag(t,!0))}if(w.aP>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.q],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.d(s,n)
s=s[n]
t.toString
H.h(s,"$isao")
t=t.k3
if(n>=t.length)return H.d(t,n)
t=t[n]
m=new Float32Array(H.bq(H.w(s.ag(0,!0),"$isc",u,"$asc")))
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
case C.h:this.W(p,this.f.d)
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
case C.f:this.W(p,this.f.e)
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
case C.h:this.W(p,this.r.d)
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
case C.f:this.W(p,this.r.e)
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
case C.h:this.W(p,this.x.d)
u=this.a
t=this.x.d
u.ai(u.aP,u.aQ,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.f:this.W(p,this.x.e)
u=this.a
t=this.x.e
u.ab(u.aC,u.aQ,t)
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
case C.h:this.W(p,this.y.d)
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
case C.f:this.W(p,this.y.e)
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
case C.h:this.W(p,this.z.d)
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
case C.f:this.W(p,this.z.e)
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
l=u.ga0(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cj
if(k>=s.length)return H.d(s,k)
h=s[k]
s=l.eh(i.gbs(i))
r=s.a
g=s.b
f=s.c
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gas(i)
g=h.c
r=f.gbH()
s=f.gbh()
f=f.gbp()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dL
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.ck
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gba(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gel(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bg(i.gba(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gas(i)
f=h.d
g=s.gbH()
r=s.gbh()
s=s.gbp()
f.a.uniform3f(f.d,g,r,s)
s=i.gdk()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gdl()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gdm()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dM
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cl
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gba(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gel(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbs(i).jb()
f=h.c
g=s.gaj(s)
r=s.gak(s)
s=s.gal()
f.a.uniform3f(f.d,g,r,s)
s=l.bg(i.gba(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gas(i)
r=h.e
g=s.gbH()
f=s.gbh()
s=s.gbp()
r.a.uniform3f(r.d,g,f,s)
s=i.gj9()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gj8()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gdk()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gdl()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gdm()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dN
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.cm
if(k>=r.length)return H.d(r,k)
h=r[k]
r=i.gcI()
H.w(p,"$isc",s,"$asc")
if(!C.a.b1(p,r)){r.sf0(p.length)
C.a.h(p,r)}r=i.gbs(i)
g=h.d
f=r.gaj(r)
e=r.gak(r)
r=r.gal()
g.a.uniform3f(g.d,f,e,r)
r=i.gbI()
e=h.b
f=r.gaj(r)
g=r.gak(r)
r=r.gal()
e.a.uniform3f(e.d,f,g,r)
r=i.gbb(i)
g=h.c
f=r.gaj(r)
e=r.gak(r)
r=r.gal()
g.a.uniform3f(g.d,f,e,r)
r=l.eh(i.gbs(i))
e=r.a
f=r.b
g=r.c
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gas(i)
f=h.f
e=g.gbH()
r=g.gbh()
g=g.gbp()
f.a.uniform3f(f.d,e,r,g)
g=i.gcI()
r=g.gcu(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gcu(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.ghN(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dO
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.y,t=u.length,s=[P.q],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.cn
if(k>=g.length)return H.d(g,k)
h=g[k]
g=i.d
H.w(p,"$isc",r,"$asc")
if(g!=null)if(!C.a.b1(p,g)){g.a=p.length
C.a.h(p,g)}d=l.j(0,i.a)
g=i.a.bg(new V.a3(0,0,0))
f=h.b
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=d.bg(new V.a3(0,0,0))
f=h.c
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=d.dZ(0)
f=h.d
m=new Float32Array(H.bq(H.w(new V.cr(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ag(0,!0),"$isc",s,"$asc")))
f.a.uniformMatrix3fv(f.d,!1,m)
f=i.c
g=h.e
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.d
g=f!=null
if(!g||f.d<6){g=h.r
g.a.uniform1i(g.d,1)}else{e=h.f
g=!g||f.d<6
c=e.a
e=e.d
if(g)c.uniform1i(e,0)
else c.uniform1i(e,f.a)
g=h.r
g.a.uniform1i(g.d,0)}g=i.e
f=h.x
f.a.uniform1f(f.d,g)
g=i.f
f=h.y
f.a.uniform1f(f.d,g)
g=i.r
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dP
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.co
if(k>=s.length)return H.d(s,k)
h=s[k]
s=i.gcI()
H.w(p,"$isc",z,"$asc")
if(!C.a.b1(p,s)){s.sf0(p.length)
C.a.h(p,s)}s=i.gba(i)
r=h.b
g=s.gq(s)
f=s.gt(s)
s=s.gel(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbs(i)
f=h.c
g=s.gaj(s)
r=s.gak(s)
s=s.gal()
f.a.uniform3f(f.d,g,r,s)
s=i.gbI()
r=h.d
g=s.gaj(s)
f=s.gak(s)
s=s.gal()
r.a.uniform3f(r.d,g,f,s)
s=i.gbb(i)
f=h.e
g=s.gaj(s)
r=s.gak(s)
s=s.gal()
f.a.uniform3f(f.d,g,r,s)
s=l.bg(i.gba(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gcI()
r=s.gcu(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gcu(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.ghN(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gas(i)
r=h.y
g=s.gbH()
f=s.gbh()
s=s.gbp()
r.a.uniform3f(r.d,g,f,s)
s=i.gji()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjj()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gdk()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gdl()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gdm()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.h:this.W(p,this.Q.d)
z=this.a
u=this.Q.d
z.ai(z.dA,z.by,u)
break
case C.f:this.W(p,this.Q.e)
z=this.a
u=this.Q.e
z.ab(z.dB,z.by,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga0(u).dZ(0)
a.Q=u}z=z.fy
z.toString
z.ao(u.ag(0,!0))}if(w.dy){this.W(p,this.ch)
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
case C.h:this.W(p,this.cx.d)
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
case C.f:this.W(p,this.cx.e)
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
case C.h:this.W(p,this.cy.d)
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
case C.f:this.W(p,this.cy.e)
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
case C.h:this.W(p,this.db.d)
z=this.a
t=this.db.d
z.ai(z.dI,z.bF,t)
t=this.a
z=this.db.f
t=t.bE
t.a.uniform1f(t.d,z)
break
case C.f:this.W(p,this.db.e)
z=this.a
t=this.db.e
z.ab(z.dJ,z.bF,t)
t=this.a
z=this.db.f
t=t.bE
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].b0(a)
z=b.e
z.b0(a)
z.aU(a)
z.iy(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hD()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cZ().aC},
p:{
et:function(){var z,y,x,w
z=new O.iy()
y=O.cV(V.ao)
z.e=y
y.bj(z.gfa(),z.gfb())
y=new O.ba(z,"emission")
y.c=C.c
y.f=new V.a5(0,0,0)
z.f=y
y=new O.ba(z,"ambient")
y.c=C.c
y.f=new V.a5(0,0,0)
z.r=y
y=new O.ba(z,"diffuse")
y.c=C.c
y.f=new V.a5(0,0,0)
z.x=y
y=new O.ba(z,"invDiffuse")
y.c=C.c
y.f=new V.a5(0,0,0)
z.y=y
y=new O.iD(z,"specular")
y.c=C.c
y.f=new V.a5(0,0,0)
y.ch=100
z.z=y
y=new O.iA(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.ba(z,"reflect")
y.c=C.c
y.f=new V.a5(0,0,0)
z.cx=y
y=new O.iC(z,"refract")
y.c=C.c
y.f=new V.a5(0,0,0)
y.ch=1
z.cy=y
y=new O.iz(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.ib()
y.bO(D.a2)
y.e=H.e([],[D.hK])
y.f=H.e([],[D.iQ])
y.r=H.e([],[D.jr])
y.x=H.e([],[D.jD])
y.y=H.e([],[D.cx])
y.z=H.e([],[D.jE])
y.Q=null
y.ch=null
y.cN(y.gf9(),y.gfu(),y.gfw())
z.dx=y
x=y.Q
if(x==null){x=D.O()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.t]}
w=H.f(z.gfH(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.O()
w.ch=y}x=H.f(z.gbk(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},iz:{"^":"d7;0f,a,b,0c,0d,0e"},d7:{"^":"b;",
a2:[function(a){this.a.a2(H.h(a,"$ist"))},function(){return this.a2(null)},"eI","$1","$0","gbk",0,2,1],
aX:["ex",function(){}],
fM:function(a){},
fN:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.f(this.gbk(),{func:1,ret:-1,args:[D.t]})
C.a.M(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.f(this.gbk(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.E(this.b+".textureCube",x,this.e,this,[T.dl])
z.b=!0
this.a.a2(z)}}},iA:{"^":"d7;a,b,0c,0d,0e"},ba:{"^":"d7;0f,a,b,0c,0d,0e",
da:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.E(this.b+".color",z,a,this,[V.a5])
y.b=!0
this.a.a2(y)}},
aX:["bN",function(){this.ex()
this.da(new V.a5(1,1,1))}],
sas:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aX()
z=this.a
z.a=null
z.a2(null)}this.da(b)}},iC:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
fL:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.a2(z)}},
aX:function(){this.bN()
this.fL(1)}},iD:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
c5:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.a2(z)}},
aX:function(){this.bN()
this.c5(100)}},cw:{"^":"b;"}}],["","",,T,{"^":"",dk:{"^":"cP;"},dl:{"^":"dk;0b,0c,0d,0e,a",
b0:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}}},jB:{"^":"b;a,0b,0c,0d,0e",
aK:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ad
W.a0(z,"load",H.f(new T.jC(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fJ:function(a,b,c){var z,y,x,w
b=V.dL(b,2)
z=V.dL(a.width,2)
y=V.dL(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cU(null,null)
x.width=z
x.height=y
w=H.h(C.l.en(x,"2d"),"$ise1")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mD(w.getImageData(0,0,x.width,x.height))}}},jC:{"^":"o:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fJ(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.X.ir(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.hE();++z.e}}}],["","",,V,{"^":"",hn:{"^":"b;",
b5:function(a,b){return!0},
i:function(a){return"all"},
$isc7:1},c7:{"^":"b;"},es:{"^":"b;",
b5:["ew",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].b5(0,b))return!0
return!1}],
i:["cP",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc7:1},bJ:{"^":"es;0a",
b5:function(a,b){return!this.ew(0,b)},
i:function(a){return"!["+this.cP(0)+"]"}},jh:{"^":"b;0a",
eB:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aY(0,0,[P.m,P.ai])
for(y=new H.eq(a,a.gl(a),0,[H.az(a,"x",0)]);y.H();)z.m(0,y.d,!0)
this.a=z},
b5:function(a,b){return this.a.br(0,b)},
i:function(a){var z=this.a
return P.c8(z.gau(z),0,null)},
$isc7:1,
p:{
ab:function(a){var z=new V.jh()
z.eB(a)
return z}}},eL:{"^":"b;a,b,0c,0d",
ghY:function(a){return this.b},
F:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eV(this.a.S(0,b))
w.a=H.e([],[V.c7])
w.c=!1
C.a.h(this.c,w)
return w},
hH:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.b5(0,a))return w}return},
i:function(a){return this.b}},eS:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.hc(this.b,"\n","\\n")
y=H.hc(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eT:{"^":"b;a,b,0c",
i:function(a){return this.b}},jK:{"^":"b;0a,0b,0c",
S:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.eL(this,b)
z.c=H.e([],[V.eV])
this.a.m(0,b,z)}return z},
be:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.eT(this,a)
y=P.i
z.c=new H.aY(0,0,[y,y])
this.b.m(0,a,z)}return z},
ix:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eS])
y=this.c
x=[P.m]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.hH(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c8(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghY(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c8(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eS(o==null?p.b:o,q,t)}++t}}}},eV:{"^":"es;b,0c,0a",
i:function(a){return this.b.b+": "+this.cP(0)}}}],["","",,X,{"^":"",e0:{"^":"b;",$isaL:1},i_:{"^":"eO;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.O()
this.x=z}return z}},iO:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.O()
this.e=z}return z},
aW:[function(a){var z
H.h(a,"$ist")
z=this.e
if(!(z==null))z.E(a)},function(){return this.aW(null)},"iC","$1","$0","gcR",0,2,1],
saT:function(a){var z,y,x
if(!J.Q(this.a,a)){z=this.a
if(z!=null){z=z.gB()
z.toString
y=H.f(this.gcR(),{func:1,ret:-1,args:[D.t]})
C.a.M(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gB()
z.toString
y=H.f(this.gcR(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.E("mover",x,this.a,this,[U.a9])
z.b=!0
this.aW(z)}},
$isaL:1,
$ise0:1},eO:{"^":"b;"}}],["","",,V,{"^":"",
nc:function(a){P.jJ(C.G,new V.nd(a))},
nd:{"^":"o:49;a",
$1:function(a){H.h(a,"$isbk")
P.dM(C.d.eg(this.a.ghL(),2)+" fps")}},
j1:{"^":"b;a,b,0c",
di:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.f(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fe().gcD().k(0,H.l(z))
if(y==null)if(d){c.$0()
this.dg(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dR(this.c).h(0,v)
t=W.i2("radio")
t.checked=x
t.name=z
z=W.ad
W.a0(t,"change",H.f(new V.j2(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dR(this.c).h(0,w.createElement("br"))},
aZ:function(a,b,c){return this.di(a,b,c,!1)},
dg:function(a){var z,y,x,w,v
z=P.fe()
y=P.i
x=P.ij(z.gcD(),y,y)
x.m(0,this.a,a)
w=z.eb(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lz([],[]).cJ(""),"",v)}},
j2:{"^":"o:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dg(this.d)}}},
jm:{"^":"b;0a,0b",
eD:function(a,b){var z,y,x,w,v,u,t
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
W.a0(z,"scroll",H.f(new V.jp(x),{func:1,ret:-1,args:[t]}),!1,t)},
hq:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fS()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ix(C.a.hS(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hb(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cC(C.S,s,C.k,!1)
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
hl:function(a){var z,y,x,w,v,u,t
H.w(a,"$isc",[P.i],"$asc")
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
x=H.h(w.insertCell(-1),"$isdj").style
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
t=H.h(w.insertCell(-1),"$isdj")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fS:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jK()
y=P.i
z.a=new H.aY(0,0,[y,V.eL])
z.b=new H.aY(0,0,[y,V.eT])
z.c=z.S(0,"Start")
y=z.S(0,"Start").F(0,"Bold")
x=V.ab(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.S(0,"Bold").F(0,"Bold")
x=new V.bJ()
w=[V.c7]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.ab(new H.a4("*"))
C.a.h(x.a,y)
y=z.S(0,"Bold").F(0,"BoldEnd")
x=V.ab(new H.a4("*"))
C.a.h(y.a,x)
y.c=!0
y=z.S(0,"Start").F(0,"Italic")
x=V.ab(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.S(0,"Italic").F(0,"Italic")
x=new V.bJ()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.ab(new H.a4("_"))
C.a.h(x.a,y)
y=z.S(0,"Italic").F(0,"ItalicEnd")
x=V.ab(new H.a4("_"))
C.a.h(y.a,x)
y.c=!0
y=z.S(0,"Start").F(0,"Code")
x=V.ab(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.S(0,"Code").F(0,"Code")
x=new V.bJ()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.ab(new H.a4("`"))
C.a.h(x.a,y)
y=z.S(0,"Code").F(0,"CodeEnd")
x=V.ab(new H.a4("`"))
C.a.h(y.a,x)
y.c=!0
y=z.S(0,"Start").F(0,"LinkHead")
x=V.ab(new H.a4("["))
C.a.h(y.a,x)
y.c=!0
y=z.S(0,"LinkHead").F(0,"LinkTail")
x=V.ab(new H.a4("|"))
C.a.h(y.a,x)
x=z.S(0,"LinkHead").F(0,"LinkEnd")
y=V.ab(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.S(0,"LinkHead").F(0,"LinkHead")
y=new V.bJ()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.ab(new H.a4("|]"))
C.a.h(y.a,x)
x=z.S(0,"LinkTail").F(0,"LinkEnd")
y=V.ab(new H.a4("]"))
C.a.h(x.a,y)
x.c=!0
x=z.S(0,"LinkTail").F(0,"LinkTail")
y=new V.bJ()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.ab(new H.a4("|]"))
C.a.h(y.a,x)
C.a.h(z.S(0,"Start").F(0,"Other").a,new V.hn())
x=z.S(0,"Other").F(0,"Other")
y=new V.bJ()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.ab(new H.a4("*_`["))
C.a.h(y.a,x)
x=z.S(0,"BoldEnd")
x.d=x.a.be("Bold")
x=z.S(0,"ItalicEnd")
x.d=x.a.be("Italic")
x=z.S(0,"CodeEnd")
x.d=x.a.be("Code")
x=z.S(0,"LinkEnd")
x.d=x.a.be("Link")
x=z.S(0,"Other")
x.d=x.a.be("Other")
this.b=z},
p:{
jn:function(a,b){var z=new V.jm()
z.eD(a,!0)
return z}}},
jp:{"^":"o:14;a",
$1:function(a){P.jI(C.r,new V.jo(this.a))}},
jo:{"^":"o:0;a",
$0:function(){var z,y,x
z=C.d.af(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,T,{"^":"",
h6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=V.jn("Test 022",!0)
y=W.cU(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.hq(H.e(["Test of the Material Lighting shader with a textured point light."],x))
z.hl(H.e(["shapes"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.u(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.jG(w,!0,!0,!0,!1)
z=v.f
u=z.a
t=u.createTexture()
u.bindTexture(34067,t)
u.texParameteri(34067,10242,10497)
u.texParameteri(34067,10243,10497)
u.texParameteri(34067,10241,9729)
u.texParameteri(34067,10240,9729)
u.bindTexture(34067,null)
s=new T.dl(0)
s.b=t
s.c=!1
s.d=0
s.e=D.O()
z.aK(s,t,"../resources/earthColor/posx.png",34069,!1,!1)
z.aK(s,t,"../resources/earthColor/negx.png",34070,!1,!1)
z.aK(s,t,"../resources/earthColor/posy.png",34071,!1,!1)
z.aK(s,t,"../resources/earthColor/negy.png",34072,!1,!1)
z.aK(s,t,"../resources/earthColor/posz.png",34073,!1,!1)
z.aK(s,t,"../resources/earthColor/negz.png",34074,!1,!1)
r=U.d_(null)
r.h(0,U.cj(V.ex(0,0,2)))
z=new U.eH()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sek(0)
z.se7(0,0)
z.sec(0)
u=z.d
if(!$.n.$2(u,0.5)){q=z.d
z.d=0.5
u=new D.E("deltaYaw",q,0.5,z,[P.q])
u.b=!0
z.K(u)}u=z.e
if(!$.n.$2(u,0.5)){q=z.e
z.e=0.5
u=new D.E("deltaPitch",q,0.5,z,[P.q])
u.b=!0
z.K(u)}u=z.f
if(!$.n.$2(u,0)){q=z.f
z.f=0
u=new D.E("deltaRoll",q,0,z,[P.q])
u.b=!0
z.K(u)}r.h(0,z)
p=E.cY(null,!0,null,"",null,null)
z=U.d_(null)
z.h(0,U.cj(V.d9(0.2,0.2,0.2,1)))
z.h(0,r)
p.saT(z)
p.sa7(0,F.ha(8,null,8))
z=O.et()
u=z.f
o=u.c
if(o!==C.f){if(o===C.c)u.aX()
u.c=C.f
u.fM(null)
o=u.a
o.a=null
o.a2(null)}u.fN(s)
p.sbc(z)
n=new D.cx()
n.c=new V.a5(1,1,1)
n.e=1
n.f=0
n.r=0
n.a=V.bH()
q=n.b
n.b=r
z=r.gB()
z.toString
u=H.f(n.gbP(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,u)
z=new D.E("mover",q,n.b,n,[U.a9])
z.b=!0
n.aa(z)
m=new V.a5(1,1,1)
if(!n.c.u(0,m)){q=n.c
n.c=m
z=new D.E("color",q,m,n,[V.a5])
z.b=!0
n.aa(z)}z=n.d
if(z!==s){if(z!=null){z=z.e
u=H.f(n.gbP(),{func:1,ret:-1,args:[D.t]})
C.a.M(z.a,u)}q=n.d
n.d=s
z=s.e
u=H.f(n.gbP(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,u)
z=new D.E("texture",q,n.d,n,[T.dl])
z.b=!0
n.aa(z)}z=n.e
if(!$.n.$2(z,1)){q=n.e
n.e=1
z=new D.E("attenuation0",q,1,n,[P.q])
z.b=!0
n.aa(z)}z=n.f
if(!$.n.$2(z,0.15)){q=n.f
n.f=0.15
z=new D.E("attenuation1",q,0.15,n,[P.q])
z.b=!0
n.aa(z)}z=n.r
if(!$.n.$2(z,0.05)){q=n.r
n.r=0.05
z=new D.E("attenuation2",q,0.05,n,[P.q])
z.b=!0
n.aa(z)}l=O.et()
l.dx.h(0,n)
z=l.r
z.sas(0,new V.a5(0.2,0.2,0.2))
z=l.x
z.sas(0,new V.a5(1,1,1))
z=l.z
z.sas(0,new V.a5(1,1,1))
z=l.z
if(z.c===C.c){z.c=C.i
z.bN()
z.c5(100)
u=z.a
u.a=null
u.a2(null)}z.c5(100)
k=E.cY(null,!0,null,"",null,null)
k.saT(U.cj(V.d9(3,3,3,1)))
z=F.dE(1,null,null,1)
z.b4()
k.sa7(0,z)
j=E.cY(null,!0,null,"",null,null)
j.sa7(0,F.he(30,1,15,0.5))
i=U.d_(null)
z=v.r
u=new U.kb()
o=U.cW()
o.scK(0,!0)
o.scv(6.283185307179586)
o.scz(0)
o.sZ(0,0)
o.scw(100)
o.sV(0)
o.sci(0.5)
u.b=o
o=o.gB()
o.toString
h={func:1,ret:-1,args:[D.t]}
g=H.f(u.gaL(),h)
C.a.h(o.a,g)
o=U.cW()
o.scK(0,!0)
o.scv(6.283185307179586)
o.scz(0)
o.sZ(0,0)
o.scw(100)
o.sV(0)
o.sci(0.5)
u.c=o
C.a.h(o.gB().a,g)
u.d=null
u.e=!1
u.f=!1
u.r=!1
u.x=2.5
u.y=2.5
u.z=2
u.Q=4
u.cx=!1
u.ch=!1
u.cy=0
u.db=0
u.dx=null
u.dy=0
u.fr=null
u.fx=null
f=new X.aC(!1,!1,!1)
q=u.d
u.d=f
o=[X.aC]
g=new D.E("modifiers",q,f,u,o)
g.b=!0
u.K(g)
g=u.f
if(g!==!1){u.f=!1
g=new D.E("invertX",g,!1,u,[P.ai])
g.b=!0
u.K(g)}g=u.r
if(g!==!1){u.r=!1
g=new D.E("invertY",g,!1,u,[P.ai])
g.b=!0
u.K(g)}u.b_(z)
i.h(0,u)
z=v.r
u=new U.ka()
g=U.cW()
g.scK(0,!0)
g.scv(6.283185307179586)
g.scz(0)
g.sZ(0,0)
g.scw(100)
g.sV(0)
g.sci(0.2)
u.b=g
g=g.gB()
g.toString
e=H.f(u.gaL(),h)
C.a.h(g.a,e)
u.c=null
u.d=!1
u.e=2.5
u.f=2
u.r=4
u.y=!1
u.x=!1
u.z=0
u.Q=null
u.ch=0
u.cx=null
u.cy=null
f=new X.aC(!0,!1,!1)
q=u.c
u.c=f
g=new D.E("modifiers",q,f,u,o)
g.b=!0
u.K(g)
u.b_(z)
i.h(0,u)
z=v.r
u=new U.kc()
u.c=0.01
u.d=0
u.e=0
f=new X.aC(!1,!1,!1)
u.b=f
o=new D.E("modifiers",null,f,u,o)
o.b=!0
u.K(o)
u.b_(z)
i.h(0,u)
i.h(0,U.cj(V.ex(0,0,5)))
d=new M.hS()
z=O.cV(E.aK)
d.d=z
z.bj(d.gfd(),d.gfe())
d.e=null
d.f=null
d.r=null
d.x=null
c=new X.iO()
c.b=1.0471975511965976
c.c=0.1
c.d=2000
c.saT(null)
z=c.b
if(!$.n.$2(z,1.0471975511965976)){q=c.b
c.b=1.0471975511965976
z=new D.E("fov",q,1.0471975511965976,c,[P.q])
z.b=!0
c.aW(z)}z=c.c
if(!$.n.$2(z,0.1)){q=c.c
c.c=0.1
z=new D.E("near",q,0.1,c,[P.q])
z.b=!0
c.aW(z)}z=c.d
if(!$.n.$2(z,2000)){q=c.d
c.d=2000
z=new D.E("far",q,2000,c,[P.q])
z.b=!0
c.aW(z)}z=d.a
if(z!==c){if(z!=null){z=z.gB()
z.toString
u=H.f(d.gap(),h)
C.a.M(z.a,u)}q=d.a
d.a=c
z=c.gB()
z.toString
u=H.f(d.gap(),h)
C.a.h(z.a,u)
z=new D.E("camera",q,d.a,d,[X.e0])
z.b=!0
d.aH(z)}b=new X.i_()
z=new V.b3(0,0,0,1)
b.a=z
b.b=!0
b.c=2000
b.d=!0
b.e=0
b.f=!1
z=V.eG(0,0,1,1)
b.r=z
z=d.b
if(z!==b){if(z!=null){z=z.gB()
z.toString
u=H.f(d.gap(),h)
C.a.M(z.a,u)}q=d.b
d.b=b
z=b.gB()
z.toString
u=H.f(d.gap(),h)
C.a.h(z.a,u)
z=new D.E("target",q,d.b,d,[X.eO])
z.b=!0
d.aH(z)}d.sbc(null)
d.sbc(l)
d.d.h(0,k)
d.d.h(0,j)
d.d.h(0,p)
d.a.saT(i)
z=v.d
if(z!==d){if(z!=null){z=z.gB()
z.toString
u=H.f(v.gcQ(),h)
C.a.M(z.a,u)}v.d=d
z=d.gB()
z.toString
h=H.f(v.gcQ(),h)
C.a.h(z.a,h)
v.eF()}z=new V.j1("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.u("Failed to find shapes for RadioGroup")
z.aZ(0,"Cube",new T.n0(j))
z.aZ(0,"Cylinder",new T.n1(j))
z.aZ(0,"Cone",new T.n2(j))
z.aZ(0,"Sphere",new T.n3(j))
z.di(0,"Toroid",new T.n4(j),!0)
z.aZ(0,"Knot",new T.n5(j))
V.nc(v)},
n0:{"^":"o:0;a",
$0:function(){this.a.sa7(0,F.dE(1,null,null,1))}},
n1:{"^":"o:0;a",
$0:function(){this.a.sa7(0,F.fX(1,!0,!0,1,40,1))}},
n2:{"^":"o:0;a",
$0:function(){this.a.sa7(0,F.fX(1,!0,!1,1,40,0))}},
n3:{"^":"o:0;a",
$0:function(){this.a.sa7(0,F.ha(6,null,6))}},
n4:{"^":"o:0;a",
$0:function(){this.a.sa7(0,F.he(30,1,15,0.5))}},
n5:{"^":"o:0;a",
$0:function(){this.a.sa7(0,F.mY(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ek.prototype
return J.ej.prototype}if(typeof a=="string")return J.c5.prototype
if(a==null)return J.el.prototype
if(typeof a=="boolean")return J.i6.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cH(a)}
J.aH=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cH(a)}
J.cd=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cH(a)}
J.mO=function(a){if(typeof a=="number")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ca.prototype
return a}
J.mP=function(a){if(typeof a=="number")return J.c4.prototype
if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ca.prototype
return a}
J.dH=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ca.prototype
return a}
J.aW=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.b)return a
return J.cH(a)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).u(a,b)}
J.hf=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mO(a).P(a,b)}
J.dO=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mP(a).j(a,b)}
J.dP=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h3(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aH(a).k(a,b)}
J.cM=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h3(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cd(a).m(a,b,c)}
J.hg=function(a,b){return J.dH(a).I(a,b)}
J.hh=function(a,b,c){return J.aW(a).fF(a,b,c)}
J.hi=function(a,b,c,d){return J.aW(a).dj(a,b,c,d)}
J.hj=function(a,b){return J.dH(a).X(a,b)}
J.cN=function(a,b,c){return J.aH(a).hx(a,b,c)}
J.cO=function(a,b){return J.cd(a).J(a,b)}
J.hk=function(a,b,c,d){return J.cd(a).aD(a,b,c,d)}
J.dQ=function(a,b){return J.cd(a).L(a,b)}
J.dR=function(a){return J.aW(a).gce(a)}
J.b2=function(a){return J.K(a).gU(a)}
J.by=function(a){return J.cd(a).ga_(a)}
J.av=function(a){return J.aH(a).gl(a)}
J.hl=function(a,b){return J.aW(a).ik(a,b)}
J.hm=function(a,b){return J.aW(a).sa1(a,b)}
J.ac=function(a){return J.K(a).i(a)}
I.ak=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cT.prototype
C.H=J.r.prototype
C.a=J.b9.prototype
C.I=J.ej.prototype
C.e=J.ek.prototype
C.t=J.el.prototype
C.d=J.c4.prototype
C.b=J.c5.prototype
C.P=J.c6.prototype
C.V=H.dd.prototype
C.W=W.iK.prototype
C.z=J.iP.prototype
C.X=P.df.prototype
C.q=J.ca.prototype
C.A=W.bR.prototype
C.B=W.kz.prototype
C.D=new P.hs(!1)
C.C=new P.hr(C.D)
C.E=new P.iN()
C.F=new P.kk()
C.j=new P.ll()
C.c=new A.ci(0,"ColorSourceType.None")
C.i=new A.ci(1,"ColorSourceType.Solid")
C.h=new A.ci(2,"ColorSourceType.Texture2D")
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
C.U=new H.hE(0,{},C.Q,[P.i,P.i])
C.k=new P.kd(!1)
$.aA=0
$.bz=null
$.dW=null
$.dz=!1
$.h1=null
$.fT=null
$.h9=null
$.cG=null
$.cJ=null
$.dI=null
$.br=null
$.bX=null
$.bY=null
$.dA=!1
$.T=C.j
$.ea=null
$.e9=null
$.e8=null
$.e7=null
$.n=V.iE()
$.eC=null
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
I.$lazy(y,x,w)}})(["e6","$get$e6",function(){return H.h0("_$dart_dartClosure")},"d2","$get$d2",function(){return H.h0("_$dart_js")},"eW","$get$eW",function(){return H.aE(H.cy({
toString:function(){return"$receiver$"}}))},"eX","$get$eX",function(){return H.aE(H.cy({$method$:null,
toString:function(){return"$receiver$"}}))},"eY","$get$eY",function(){return H.aE(H.cy(null))},"eZ","$get$eZ",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f2","$get$f2",function(){return H.aE(H.cy(void 0))},"f3","$get$f3",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f0","$get$f0",function(){return H.aE(H.f1(null))},"f_","$get$f_",function(){return H.aE(function(){try{null.$method$}catch(z){return z.message}}())},"f5","$get$f5",function(){return H.aE(H.f1(void 0))},"f4","$get$f4",function(){return H.aE(function(){try{(void 0).$method$}catch(z){return z.message}}())},"du","$get$du",function(){return P.kA()},"bZ","$get$bZ",function(){return[]},"fh","$get$fh",function(){return P.kh()},"fn","$get$fn",function(){return H.iI(H.bq(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fJ","$get$fJ",function(){return P.j7("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fP","$get$fP",function(){return P.mk()},"e5","$get$e5",function(){return{}},"fk","$get$fk",function(){return Z.as(0)},"fi","$get$fi",function(){return Z.as(511)},"aR","$get$aR",function(){return Z.as(1)},"aQ","$get$aQ",function(){return Z.as(2)},"aP","$get$aP",function(){return Z.as(4)},"aS","$get$aS",function(){return Z.as(8)},"aT","$get$aT",function(){return Z.as(16)},"bP","$get$bP",function(){return Z.as(32)},"bQ","$get$bQ",function(){return Z.as(64)},"fj","$get$fj",function(){return Z.as(96)},"bo","$get$bo",function(){return Z.as(128)},"aO","$get$aO",function(){return Z.as(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[W.aD]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.m,[P.k,E.aK]]},{func:1,ret:P.H,args:[F.ah,P.q,P.q]},{func:1,ret:P.H,args:[F.an]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[D.t]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.H,args:[W.ad]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:V.a3,args:[P.q]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.m,[P.k,D.a2]]},{func:1,ret:-1,args:[W.bF]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.m,[P.k,U.a9]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.k,V.ao]]},{func:1,ret:P.H,args:[,]},{func:1,ret:W.a1,args:[W.L]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.ax]},{func:1,ret:P.ai,args:[W.L]},{func:1,ret:P.H,args:[P.X]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.ai,args:[P.q,P.q]},{func:1,ret:[P.aU,,],args:[,]},{func:1,ret:-1,args:[W.bR]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.ai,args:[[P.k,D.a2]]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,args:[,P.i]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.R,args:[P.m]},{func:1,args:[P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.H,args:[P.i]},{func:1,ret:[P.J,P.i,P.i],args:[[P.J,P.i,P.i],P.i]},{func:1,ret:P.H,args:[P.bk]},{func:1,ret:P.H,args:[P.i,,]},{func:1,ret:P.H,args:[,],opt:[,]}]
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
if(x==y)H.ng(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(T.h6,[])
else T.h6([])})})()
//# sourceMappingURL=test.dart.js.map
