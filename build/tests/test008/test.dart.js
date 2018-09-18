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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isn)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="m"){processStatics(init.statics[b2]=b3.m,b4)
delete b3.m}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d5(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d6=function(){}
var dart=[["","",,H,{"^":"",mP:{"^":"b;a"}}],["","",,J,{"^":"",
C:function(a){return void 0},
db:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cj:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d9==null){H.lY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.bM("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cC()]
if(v!=null)return v
v=H.m0(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.$get$cC(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
n:{"^":"b;",
q:function(a,b){return a===b},
gP:function(a){return H.bp(a)},
i:["cV",function(a){return"Instance of '"+H.aV(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hv:{"^":"n;",
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$isam:1},
dQ:{"^":"n;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0},
$isB:1},
cD:{"^":"n;",
gP:function(a){return 0},
i:["cW",function(a){return String(a)}]},
hZ:{"^":"cD;"},
c7:{"^":"cD;"},
bJ:{"^":"cD;",
i:function(a){var z=a[$.$get$dy()]
if(z==null)return this.cW(a)
return"JavaScript function for "+H.j(J.a6(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscx:1},
aS:{"^":"n;$ti",
h:function(a,b){H.u(b,H.t(a,0))
if(!!a.fixed$length)H.L(P.w("add"))
a.push(b)},
S:function(a,b){var z
if(!!a.fixed$length)H.L(P.w("remove"))
for(z=0;z<a.length;++z)if(J.T(a[z],b)){a.splice(z,1)
return!0}return!1},
D:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aI(a))}},
v:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.j(a[y]))
return z.join(b)},
ex:function(a){return this.v(a,"")},
ep:function(a,b,c,d){var z,y,x
H.u(b,d)
H.c(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aI(a))}return y},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
b2:function(a,b,c){if(b<0||b>a.length)throw H.a(P.U(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.U(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.t(a,0)])
return H.f(a.slice(b,c),[H.t(a,0)])},
gaf:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.ht())},
ae:function(a,b,c,d){var z
H.u(d,H.t(a,0))
if(!!a.immutable$list)H.L(P.w("fill range"))
P.az(b,c,a.length,null,null,null)
for(z=b;z.I(0,c);z=z.F(0,1))a[z]=d},
i:function(a){return P.cA(a,"[","]")},
gT:function(a){return new J.ao(a,a.length,0,[H.t(a,0)])},
gP:function(a){return H.bp(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.L(P.w("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.bQ(b,"newLength",null))
if(b<0)throw H.a(P.U(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.au(a,b))
if(b>=a.length||b<0)throw H.a(H.au(a,b))
return a[b]},
l:function(a,b,c){H.y(b)
H.u(c,H.t(a,0))
if(!!a.immutable$list)H.L(P.w("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.au(a,b))
if(b>=a.length||b<0)throw H.a(H.au(a,b))
a[b]=c},
$isk:1,
$isd:1,
m:{
hu:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.bQ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.U(a,0,4294967295,"length",null))
return J.dN(new Array(a),b)},
dN:function(a,b){return J.bj(H.f(a,[b]))},
bj:function(a){H.bb(a)
a.fixed$length=Array
return a}}},
mO:{"^":"aS;$ti"},
ao:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.G(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bW:{"^":"n;",
f6:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.w(""+a+".toInt()"))},
bw:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.w(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.w(""+a+".round()"))},
cK:function(a,b){var z,y
if(b>20)throw H.a(P.U(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
aN:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.U(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.R(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.L(P.w("Unexpected toString result: "+z))
x=J.av(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.p("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){return a&0x1FFFFFFF},
aQ:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cb(a,b)},
an:function(a,b){return(a|0)===a?a/b|0:this.cb(a,b)},
cb:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.w("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
am:function(a,b){var z
if(a>0)z=this.c9(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
e0:function(a,b){if(b<0)throw H.a(H.a9(b))
return this.c9(a,b)},
c9:function(a,b){return b>31?0:a>>>b},
I:function(a,b){if(typeof b!=="number")throw H.a(H.a9(b))
return a<b},
$isv:1,
$isV:1},
dP:{"^":"bW;",$ism:1},
dO:{"^":"bW;"},
bX:{"^":"n;",
R:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.au(a,b))
if(b<0)throw H.a(H.au(a,b))
if(b>=a.length)H.L(H.au(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(b>=a.length)throw H.a(H.au(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.F(b)
if(typeof b!=="string")throw H.a(P.bQ(b,null,null))
return a+b},
as:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.L(H.a9(b))
c=P.az(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.L(H.a9(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a2:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.L(H.a9(c))
if(typeof c!=="number")return c.I()
if(c<0||c>a.length)throw H.a(P.U(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a1:function(a,b){return this.a2(a,b,0)},
n:function(a,b,c){H.y(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.L(H.a9(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.I()
if(b<0)throw H.a(P.c4(b,null,null))
if(b>c)throw H.a(P.c4(b,null,null))
if(c>a.length)throw H.a(P.c4(c,null,null))
return a.substring(b,c)},
aw:function(a,b){return this.n(a,b,null)},
p:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
eM:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.p(c,z)+a},
a5:function(a,b){return this.eM(a,b," ")},
cu:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.U(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ct:function(a,b){return this.cu(a,b,0)},
ec:function(a,b,c){if(c>a.length)throw H.a(P.U(c,0,a.length,null,null))
return H.fA(a,b,c)},
i:function(a){return a},
gP:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$ise3:1,
$ish:1}}],["","",,H,{"^":"",
ck:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
ht:function(){return new P.iB("No element")},
X:{"^":"jb;a",
gj:function(a){return this.a.length},
k:function(a,b){return C.b.R(this.a,b)},
$asc8:function(){return[P.m]},
$asp:function(){return[P.m]},
$ask:function(){return[P.m]},
$asd:function(){return[P.m]}},
hf:{"^":"k;"},
dW:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.av(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aI(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
hN:{"^":"k;a,b,$ti",
gT:function(a){return new H.hO(J.be(this.a),this.b,this.$ti)},
gj:function(a){return J.ai(this.a)},
E:function(a,b){return this.b.$1(J.cp(this.a,b))},
$ask:function(a,b){return[b]}},
hO:{"^":"cB;0a,b,c,$ti",
C:function(){var z=this.b
if(z.C()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$ascB:function(a,b){return[b]}},
jF:{"^":"k;a,b,$ti",
gT:function(a){return new H.jG(J.be(this.a),this.b,this.$ti)}},
jG:{"^":"cB;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
bV:{"^":"b;$ti"},
c8:{"^":"b;$ti",
l:function(a,b,c){H.y(b)
H.u(c,H.an(this,"c8",0))
throw H.a(P.w("Cannot modify an unmodifiable list"))},
ae:function(a,b,c,d){H.u(d,H.an(this,"c8",0))
throw H.a(P.w("Cannot modify an unmodifiable list"))}},
jb:{"^":"bY+c8;"}}],["","",,H,{"^":"",
h4:function(){throw H.a(P.w("Cannot modify unmodifiable Map"))},
lQ:function(a){return init.types[H.y(a)]},
ft:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.C(a).$isA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a6(a)
if(typeof z!=="string")throw H.a(H.a9(a))
return z},
bp:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
i7:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.i(z,3)
y=H.F(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.U(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.A(w,u)|32)>x)return}return parseInt(a,b)},
aV:function(a){var z,y,x,w,v,u,t,s,r
z=J.C(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.C||!!J.C(a).$isc7){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.A(w,0)===36)w=C.b.aw(w,1)
r=H.da(H.bb(H.aN(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
i_:function(){if(!!self.location)return self.location.href
return},
e7:function(a){var z,y,x,w,v
H.bb(a)
z=J.ai(a)
if(typeof z!=="number")return z.cR()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
i8:function(a){var z,y,x,w
z=H.f([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.G)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a9(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.c.am(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a9(w))}return H.e7(z)},
e8:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a9(x))
if(x<0)throw H.a(H.a9(x))
if(x>65535)return H.i8(a)}return H.e7(a)},
i9:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.cR()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
c2:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.am(z,10))>>>0,56320|z&1023)}}throw H.a(P.U(a,0,1114111,null,null))},
a8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i6:function(a){return a.b?H.a8(a).getUTCFullYear()+0:H.a8(a).getFullYear()+0},
i4:function(a){return a.b?H.a8(a).getUTCMonth()+1:H.a8(a).getMonth()+1},
i0:function(a){return a.b?H.a8(a).getUTCDate()+0:H.a8(a).getDate()+0},
i1:function(a){return a.b?H.a8(a).getUTCHours()+0:H.a8(a).getHours()+0},
i3:function(a){return a.b?H.a8(a).getUTCMinutes()+0:H.a8(a).getMinutes()+0},
i5:function(a){return a.b?H.a8(a).getUTCSeconds()+0:H.a8(a).getSeconds()+0},
i2:function(a){return a.b?H.a8(a).getUTCMilliseconds()+0:H.a8(a).getMilliseconds()+0},
q:function(a){throw H.a(H.a9(a))},
i:function(a,b){if(a==null)J.ai(a)
throw H.a(H.au(a,b))},
au:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aw(!0,b,"index",null)
z=H.y(J.ai(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.J(b,a,"index",null,z)
return P.c4(b,"index",null)},
lL:function(a,b,c){if(a>c)return new P.c3(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c3(a,c,!0,b,"end","Invalid value")
return new P.aw(!0,b,"end",null)},
a9:function(a){return new P.aw(!0,a,null,null)},
lG:function(a){if(typeof a!=="number")throw H.a(H.a9(a))
return a},
a:function(a){var z
if(a==null)a=new P.e2()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fC})
z.name=""}else z.toString=H.fC
return z},
fC:function(){return J.a6(this.dartException)},
L:function(a){throw H.a(a)},
G:function(a){throw H.a(P.aI(a))},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mm(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.am(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cE(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e1(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$es()
u=$.$get$et()
t=$.$get$eu()
s=$.$get$ev()
r=$.$get$ez()
q=$.$get$eA()
p=$.$get$ex()
$.$get$ew()
o=$.$get$eC()
n=$.$get$eB()
m=v.a3(y)
if(m!=null)return z.$1(H.cE(H.F(y),m))
else{m=u.a3(y)
if(m!=null){m.method="call"
return z.$1(H.cE(H.F(y),m))}else{m=t.a3(y)
if(m==null){m=s.a3(y)
if(m==null){m=r.a3(y)
if(m==null){m=q.a3(y)
if(m==null){m=p.a3(y)
if(m==null){m=s.a3(y)
if(m==null){m=o.a3(y)
if(m==null){m=n.a3(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e1(H.F(y),m))}}return z.$1(new H.ja(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ed()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aw(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ed()
return a},
ba:function(a){var z
if(a==null)return new H.f0(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f0(a)},
lO:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
m_:function(a,b,c,d,e,f){H.e(a,"$iscx")
switch(H.y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.a3("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var z
H.y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m_)
a.$identity=z
return z},
h0:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.C(d).$isd){z.$reflectionInfo=d
x=H.ie(z).r}else x=d
w=e?Object.create(new H.iC().constructor.prototype):Object.create(new H.cs(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ap
if(typeof u!=="number")return u.F()
$.ap=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dt(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lQ,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dl:H.ct
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dt(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fY:function(a,b,c,d){var z=H.ct
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dt:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h_(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fY(y,!w,z,b)
if(y===0){w=$.ap
if(typeof w!=="number")return w.F()
$.ap=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bf
if(v==null){v=H.bR("self")
$.bf=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ap
if(typeof w!=="number")return w.F()
$.ap=w+1
t+=w
w="return function("+t+"){return this."
v=$.bf
if(v==null){v=H.bR("self")
$.bf=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fZ:function(a,b,c,d){var z,y
z=H.ct
y=H.dl
switch(b?-1:a){case 0:throw H.a(H.iq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h_:function(a,b){var z,y,x,w,v,u,t,s
z=$.bf
if(z==null){z=H.bR("self")
$.bf=z}y=$.dk
if(y==null){y=H.bR("receiver")
$.dk=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fZ(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ap
if(typeof y!=="number")return y.F()
$.ap=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ap
if(typeof y!=="number")return y.F()
$.ap=y+1
return new Function(z+y+"}")()},
d5:function(a,b,c,d,e,f,g){var z,y
z=J.bj(H.bb(b))
H.y(c)
y=!!J.C(d).$isd?J.bj(d):d
return H.h0(a,z,c,y,!!e,f,g)},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.al(a,"String"))},
lM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.al(a,"double"))},
me:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.al(a,"num"))},
fo:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.al(a,"bool"))},
y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.al(a,"int"))},
fy:function(a,b){throw H.a(H.al(a,H.F(b).substring(3)))},
mg:function(a,b){var z=J.av(b)
throw H.a(H.fX(a,z.n(b,3,z.gj(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.C(a)[b])return a
H.fy(a,b)},
ab:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.C(a)[b]
else z=!0
if(z)return a
H.mg(a,b)},
bb:function(a){if(a==null)return a
if(!!J.C(a).$isd)return a
throw H.a(H.al(a,"List"))},
fv:function(a,b){if(a==null)return a
if(!!J.C(a).$isd)return a
if(J.C(a)[b])return a
H.fy(a,b)},
fp:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.y(z)]
else return a.$S()}return},
bN:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fp(J.C(a))
if(z==null)return!1
y=H.fs(z,null,b,null)
return y},
c:function(a,b){var z,y
if(a==null)return a
if($.d1)return a
$.d1=!0
try{if(H.bN(a,b))return a
z=H.bP(b)
y=H.al(a,z)
throw H.a(y)}finally{$.d1=!1}},
d7:function(a,b){if(a!=null&&!H.d4(a,b))H.L(H.al(a,H.bP(b)))
return a},
fj:function(a){var z
if(a instanceof H.l){z=H.fp(J.C(a))
if(z!=null)return H.bP(z)
return"Closure"}return H.aV(a)},
ml:function(a){throw H.a(new P.h8(H.F(a)))},
fq:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aN:function(a){if(a==null)return
return a.$ti},
nM:function(a,b,c){return H.bc(a["$as"+H.j(c)],H.aN(b))},
aH:function(a,b,c,d){var z
H.F(c)
H.y(d)
z=H.bc(a["$as"+H.j(c)],H.aN(b))
return z==null?null:z[d]},
an:function(a,b,c){var z
H.F(b)
H.y(c)
z=H.bc(a["$as"+H.j(b)],H.aN(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.y(b)
z=H.aN(a)
return z==null?null:z[b]},
bP:function(a){var z=H.aO(a,null)
return z},
aO:function(a,b){var z,y
H.z(b,"$isd",[P.h],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.da(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.lw(a,b)
if('futureOr' in a)return"FutureOr<"+H.aO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lw:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.z(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.b.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aO(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aO(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aO(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lN(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.F(z[l])
n=n+m+H.aO(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
da:function(a,b,c){var z,y,x,w,v,u
H.z(c,"$isd",[P.h],"$asd")
if(a==null)return""
z=new P.ar("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aO(u,c)}v="<"+z.i(0)+">"
return v},
bc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bB:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aN(a)
y=J.C(a)
if(y[b]==null)return!1
return H.fm(H.bc(y[d],z),null,c,null)},
z:function(a,b,c,d){var z,y
H.F(b)
H.bb(c)
H.F(d)
if(a==null)return a
z=H.bB(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.da(c,0,null)
throw H.a(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fm:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ag(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ag(a[y],b,c[y],d))return!1
return!0},
nK:function(a,b,c){return a.apply(b,H.bc(J.C(b)["$as"+H.j(c)],H.aN(b)))},
fu:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="B"||a===-1||a===-2||H.fu(z)}return!1},
d4:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="B"||b===-1||b===-2||H.fu(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d4(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bN(a,b)}y=J.C(a).constructor
x=H.aN(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ag(y,null,b,null)
return z},
u:function(a,b){if(a!=null&&!H.d4(a,b))throw H.a(H.al(a,H.bP(b)))
return a},
ag:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ag(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="B")return!0
if('func' in c)return H.fs(a,b,c,d)
if('func' in a)return c.builtin$cls==="cx"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ag("type" in a?a.type:null,b,x,d)
else if(H.ag(a,b,x,d))return!0
else{if(!('$is'+"bi" in y.prototype))return!1
w=y.prototype["$as"+"bi"]
v=H.bc(w,z?a.slice(1):null)
return H.ag(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bP(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fm(H.bc(r,z),b,u,d)},
fs:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ag(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ag(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ag(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ag(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.md(m,b,l,d)},
md:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ag(c[w],d,a[w],b))return!1}return!0},
nL:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
m0:function(a){var z,y,x,w,v,u
z=H.F($.fr.$1(a))
y=$.ch[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cl[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.F($.fl.$2(a,z))
if(z!=null){y=$.ch[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cl[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cm(x)
$.ch[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cl[z]=x
return x}if(v==="-"){u=H.cm(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fx(a,x)
if(v==="*")throw H.a(P.bM(z))
if(init.leafTags[z]===true){u=H.cm(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fx(a,x)},
fx:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.db(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cm:function(a){return J.db(a,!1,null,!!a.$isA)},
mc:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cm(z)
else return J.db(z,c,null,null)},
lY:function(){if(!0===$.d9)return
$.d9=!0
H.lZ()},
lZ:function(){var z,y,x,w,v,u,t,s
$.ch=Object.create(null)
$.cl=Object.create(null)
H.lU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fz.$1(v)
if(u!=null){t=H.mc(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lU:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.b8(C.F,H.b8(C.K,H.b8(C.o,H.b8(C.o,H.b8(C.J,H.b8(C.G,H.b8(C.H(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fr=new H.lV(v)
$.fl=new H.lW(u)
$.fz=new H.lX(t)},
b8:function(a,b){return a(b)||b},
fA:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fB:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
h3:{"^":"b;$ti",
i:function(a){return P.cG(this)},
l:function(a,b,c){H.u(b,H.t(this,0))
H.u(c,H.t(this,1))
return H.h4()},
$isD:1},
h5:{"^":"h3;a,b,c,$ti",
gj:function(a){return this.a},
aU:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.aU(0,b))return
return this.c2(b)},
c2:function(a){return this.b[H.F(a)]},
D:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.c(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.u(this.c2(v),z))}}},
id:{"^":"b;a,b,c,d,e,f,r,0x",m:{
ie:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bj(z)
y=z[0]
x=z[1]
return new H.id(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iU:{"^":"b;a,b,c,d,e,f",
a3:function(a){var z,y,x
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
m:{
as:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ey:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hW:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
m:{
e1:function(a,b){return new H.hW(a,b==null?null:b.method)}}},
hy:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
m:{
cE:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hy(a,y,z?null:b.receiver)}}},
ja:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mm:{"^":"l:16;a",
$1:function(a){if(!!J.C(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f0:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isak:1},
l:{"^":"b;",
i:function(a){return"Closure '"+H.aV(this).trim()+"'"},
gcO:function(){return this},
$iscx:1,
gcO:function(){return this}},
ej:{"^":"l;"},
iC:{"^":"ej;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cs:{"^":"ej;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cs))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gP:function(a){var z,y
z=this.c
if(z==null)y=H.bp(this.a)
else y=typeof z!=="object"?J.bD(z):H.bp(z)
return(y^H.bp(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aV(z)+"'")},
m:{
ct:function(a){return a.a},
dl:function(a){return a.c},
bR:function(a){var z,y,x,w,v
z=new H.cs("self","target","receiver","name")
y=J.bj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iV:{"^":"Y;a",
i:function(a){return this.a},
m:{
al:function(a,b){return new H.iV("TypeError: "+H.j(P.bT(a))+": type '"+H.fj(a)+"' is not a subtype of type '"+b+"'")}}},
fW:{"^":"Y;a",
i:function(a){return this.a},
m:{
fX:function(a,b){return new H.fW("CastError: "+H.j(P.bT(a))+": type '"+H.fj(a)+"' is not a subtype of type '"+b+"'")}}},
ip:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
m:{
iq:function(a){return new H.ip(a)}}},
aK:{"^":"hK;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
ga9:function(a){return new H.hB(this,[H.t(this,0)])},
aU:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c_(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.c_(y,b)}else return this.eu(b)},
eu:function(a){var z=this.d
if(z==null)return!1
return this.bz(this.b9(z,this.by(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aR(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aR(w,b)
x=y==null?null:y.b
return x}else return this.ev(b)},
ev:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.b9(z,this.by(a))
x=this.bz(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y
H.u(b,H.t(this,0))
H.u(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.be()
this.b=z}this.bT(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.be()
this.c=y}this.bT(y,b,c)}else this.ew(b,c)},
ew:function(a,b){var z,y,x,w
H.u(a,H.t(this,0))
H.u(b,H.t(this,1))
z=this.d
if(z==null){z=this.be()
this.d=z}y=this.by(a)
x=this.b9(z,y)
if(x==null)this.bi(z,y,[this.bf(a,b)])
else{w=this.bz(x,a)
if(w>=0)x[w].b=b
else x.push(this.bf(a,b))}},
D:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aI(this))
z=z.c}},
bT:function(a,b,c){var z
H.u(b,H.t(this,0))
H.u(c,H.t(this,1))
z=this.aR(a,b)
if(z==null)this.bi(a,b,this.bf(b,c))
else z.b=c},
dr:function(){this.r=this.r+1&67108863},
bf:function(a,b){var z,y
z=new H.hA(H.u(a,H.t(this,0)),H.u(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dr()
return z},
by:function(a){return J.bD(a)&0x3ffffff},
bz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
i:function(a){return P.cG(this)},
aR:function(a,b){return a[b]},
b9:function(a,b){return a[b]},
bi:function(a,b,c){a[b]=c},
dj:function(a,b){delete a[b]},
c_:function(a,b){return this.aR(a,b)!=null},
be:function(){var z=Object.create(null)
this.bi(z,"<non-identifier-key>",z)
this.dj(z,"<non-identifier-key>")
return z},
$isdT:1},
hA:{"^":"b;a,b,0c,0d"},
hB:{"^":"hf;a,$ti",
gj:function(a){return this.a.a},
gT:function(a){var z,y
z=this.a
y=new H.hC(z,z.r,this.$ti)
y.c=z.e
return y}},
hC:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aI(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lV:{"^":"l:16;a",
$1:function(a){return this.a(a)}},
lW:{"^":"l:30;a",
$2:function(a,b){return this.a(a,b)}},
lX:{"^":"l:25;a",
$1:function(a){return this.a(H.F(a))}},
hw:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise3:1,
$isig:1,
m:{
hx:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.Q("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lN:function(a){return J.dN(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mf:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
ce:function(a){return a},
hT:function(a){return new Int8Array(a)},
at:function(a,b,c){H.bb(b)
if(a>>>0!==a||a>=c)throw H.a(H.au(b,a))},
lq:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.lL(a,b,c))
return b},
e0:{"^":"n;",$ise0:1,"%":"ArrayBuffer"},
cK:{"^":"n;",$iscK:1,$isiW:1,"%":"DataView;ArrayBufferView;cJ|eV|eW|hU|eX|eY|aL"},
cJ:{"^":"cK;",
gj:function(a){return a.length},
$isA:1,
$asA:I.d6},
hU:{"^":"eW;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
l:function(a,b,c){H.y(b)
H.lM(c)
H.at(b,a,a.length)
a[b]=c},
$asbV:function(){return[P.v]},
$asp:function(){return[P.v]},
$isk:1,
$ask:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aL:{"^":"eY;",
l:function(a,b,c){H.y(b)
H.y(c)
H.at(b,a,a.length)
a[b]=c},
$asbV:function(){return[P.m]},
$asp:function(){return[P.m]},
$isk:1,
$ask:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]}},
mY:{"^":"aL;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mZ:{"^":"aL;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"Int32Array"},
n_:{"^":"aL;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"Int8Array"},
n0:{"^":"aL;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
n1:{"^":"aL;",
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
n2:{"^":"aL;",
gj:function(a){return a.length},
k:function(a,b){H.at(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
cL:{"^":"aL;",
gj:function(a){return a.length},
k:function(a,b){H.at(b,a,a.length)
return a[b]},
b2:function(a,b,c){return new Uint8Array(a.subarray(b,H.lq(b,c,a.length)))},
$iscL:1,
$isH:1,
"%":";Uint8Array"},
eV:{"^":"cJ+p;"},
eW:{"^":"eV+bV;"},
eX:{"^":"cJ+p;"},
eY:{"^":"eX+bV;"}}],["","",,P,{"^":"",
jI:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lD()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b9(new P.jK(z),1)).observe(y,{childList:true})
return new P.jJ(z,y,x)}else if(self.setImmediate!=null)return P.lE()
return P.lF()},
nz:[function(a){self.scheduleImmediate(H.b9(new P.jL(H.c(a,{func:1,ret:-1})),0))},"$1","lD",4,0,10],
nA:[function(a){self.setImmediate(H.b9(new P.jM(H.c(a,{func:1,ret:-1})),0))},"$1","lE",4,0,10],
nB:[function(a){P.cQ(C.m,H.c(a,{func:1,ret:-1}))},"$1","lF",4,0,10],
cQ:function(a,b){var z
H.c(b,{func:1,ret:-1})
z=C.c.an(a.a,1000)
return P.kL(z<0?0:z,b)},
en:function(a,b){var z
H.c(b,{func:1,ret:-1,args:[P.b1]})
z=C.c.an(a.a,1000)
return P.kM(z<0?0:z,b)},
lz:function(a,b){if(H.bN(a,{func:1,args:[P.b,P.ak]}))return b.eU(a,null,P.b,P.ak)
if(H.bN(a,{func:1,args:[P.b]}))return H.c(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.bQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ly:function(){var z,y
for(;z=$.b7,z!=null;){$.bz=null
y=z.b
$.b7=y
if(y==null)$.by=null
z.a.$0()}},
nJ:[function(){$.d2=!0
try{P.ly()}finally{$.bz=null
$.d2=!1
if($.b7!=null)$.$get$cX().$1(P.fn())}},"$0","fn",0,0,3],
fi:function(a){var z=new P.eP(H.c(a,{func:1,ret:-1}))
if($.b7==null){$.by=z
$.b7=z
if(!$.d2)$.$get$cX().$1(P.fn())}else{$.by.b=z
$.by=z}},
lC:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
z=$.b7
if(z==null){P.fi(a)
$.bz=$.by
return}y=new P.eP(a)
x=$.bz
if(x==null){y.b=z
$.bz=y
$.b7=y}else{y.b=x.b
x.b=y
$.bz=y
if(y.b==null)$.by=y}},
mh:function(a){var z,y
z={func:1,ret:-1}
H.c(a,z)
y=$.K
if(C.e===y){P.cg(null,null,C.e,a)
return}y.toString
P.cg(null,null,y,H.c(y.bm(a),z))},
em:function(a,b){var z,y
z={func:1,ret:-1}
H.c(b,z)
y=$.K
if(y===C.e){y.toString
return P.cQ(a,b)}return P.cQ(a,H.c(y.bm(b),z))},
iR:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b1]}
H.c(b,z)
y=$.K
if(y===C.e){y.toString
return P.en(a,b)}x=y.ci(b,P.b1)
$.K.toString
return P.en(a,H.c(x,z))},
cf:function(a,b,c,d,e){var z={}
z.a=d
P.lC(new P.lA(z,e))},
fe:function(a,b,c,d,e){var z,y
H.c(d,{func:1,ret:e})
y=$.K
if(y===c)return d.$0()
$.K=c
z=y
try{y=d.$0()
return y}finally{$.K=z}},
ff:function(a,b,c,d,e,f,g){var z,y
H.c(d,{func:1,ret:f,args:[g]})
H.u(e,g)
y=$.K
if(y===c)return d.$1(e)
$.K=c
z=y
try{y=d.$1(e)
return y}finally{$.K=z}},
lB:function(a,b,c,d,e,f,g,h,i){var z,y
H.c(d,{func:1,ret:g,args:[h,i]})
H.u(e,h)
H.u(f,i)
y=$.K
if(y===c)return d.$2(e,f)
$.K=c
z=y
try{y=d.$2(e,f)
return y}finally{$.K=z}},
cg:function(a,b,c,d){var z
H.c(d,{func:1,ret:-1})
z=C.e!==c
if(z)d=!(!z||!1)?c.bm(d):c.ea(d,-1)
P.fi(d)},
jK:{"^":"l:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jJ:{"^":"l:38;a,b,c",
$1:function(a){var z,y
this.a.a=H.c(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jL:{"^":"l:0;a",
$0:function(){this.a.$0()}},
jM:{"^":"l:0;a",
$0:function(){this.a.$0()}},
f4:{"^":"b;a,0b,c",
d6:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b9(new P.kO(this,b),0),a)
else throw H.a(P.w("`setTimeout()` not found."))},
d7:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b9(new P.kN(this,a,Date.now(),b),0),a)
else throw H.a(P.w("Periodic timer."))},
$isb1:1,
m:{
kL:function(a,b){var z=new P.f4(!0,0)
z.d6(a,b)
return z},
kM:function(a,b){var z=new P.f4(!1,0)
z.d7(a,b)
return z}}},
kO:{"^":"l:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kN:{"^":"l:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.cY(w,x)}z.c=y
this.d.$1(z)}},
b6:{"^":"b;0a,b,c,d,e,$ti",
eD:function(a){if(this.c!==6)return!0
return this.b.b.bJ(H.c(this.d,{func:1,ret:P.am,args:[P.b]}),a.a,P.am,P.b)},
es:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.bN(z,{func:1,args:[P.b,P.ak]}))return H.d7(w.f0(z,a.a,a.b,null,y,P.ak),x)
else return H.d7(w.bJ(H.c(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aF:{"^":"b;ca:a<,b,0dX:c<,$ti",
cJ:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.K
if(y!==C.e){y.toString
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lz(b,y)}H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aF(0,$.K,[c])
w=b==null?1:3
this.bU(new P.b6(x,w,a,b,[z,c]))
return x},
f5:function(a,b){return this.cJ(a,null,b)},
bU:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isb6")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaF")
z=y.a
if(z<4){y.bU(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cg(null,null,z,H.c(new P.k0(this,a),{func:1,ret:-1}))}},
c6:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isb6")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaF")
y=u.a
if(y<4){u.c6(a)
return}this.a=y
this.c=u.c}z.a=this.aS(a)
y=this.b
y.toString
P.cg(null,null,y,H.c(new P.k5(z,this),{func:1,ret:-1}))}},
bh:function(){var z=H.e(this.c,"$isb6")
this.c=null
return this.aS(z)},
aS:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bY:function(a){var z,y,x,w
z=H.t(this,0)
H.d7(a,{futureOr:1,type:z})
y=this.$ti
x=H.bB(a,"$isbi",y,"$asbi")
if(x){z=H.bB(a,"$isaF",y,null)
if(z)P.eS(a,this)
else P.k1(a,this)}else{w=this.bh()
H.u(a,z)
this.a=4
this.c=a
P.bv(this,w)}},
b5:[function(a,b){var z
H.e(b,"$isak")
z=this.bh()
this.a=8
this.c=new P.ad(a,b)
P.bv(this,z)},function(a){return this.b5(a,null)},"fe","$2","$1","gdg",4,2,36],
$isbi:1,
m:{
k1:function(a,b){var z,y,x
b.a=1
try{a.cJ(new P.k2(b),new P.k3(b),null)}catch(x){z=H.ah(x)
y=H.ba(x)
P.mh(new P.k4(b,z,y))}},
eS:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaF")
if(z>=4){y=b.bh()
b.a=a.a
b.c=a.c
P.bv(b,y)}else{y=H.e(b.c,"$isb6")
b.a=2
b.c=a
a.c6(y)}},
bv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isad")
y=y.b
u=v.a
t=v.b
y.toString
P.cf(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bv(z.a,b)}y=z.a
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
if(p){H.e(r,"$isad")
y=y.b
u=r.a
t=r.b
y.toString
P.cf(null,null,y,u,t)
return}o=$.K
if(o==null?q!=null:o!==q)$.K=q
else o=null
y=b.c
if(y===8)new P.k8(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.k7(x,b,r).$0()}else if((y&2)!==0)new P.k6(z,x,b).$0()
if(o!=null)$.K=o
y=x.b
if(!!J.C(y).$isbi){if(y.a>=4){n=H.e(t.c,"$isb6")
t.c=null
b=t.aS(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eS(y,t)
return}}m=b.b
n=H.e(m.c,"$isb6")
m.c=null
b=m.aS(n)
y=x.a
u=x.b
if(!y){H.u(u,H.t(m,0))
m.a=4
m.c=u}else{H.e(u,"$isad")
m.a=8
m.c=u}z.a=m
y=m}}}},
k0:{"^":"l:0;a,b",
$0:function(){P.bv(this.a,this.b)}},
k5:{"^":"l:0;a,b",
$0:function(){P.bv(this.b,this.a.a)}},
k2:{"^":"l:14;a",
$1:function(a){var z=this.a
z.a=0
z.bY(a)}},
k3:{"^":"l:24;a",
$2:function(a,b){this.a.b5(a,H.e(b,"$isak"))},
$1:function(a){return this.$2(a,null)}},
k4:{"^":"l:0;a,b,c",
$0:function(){this.a.b5(this.b,this.c)}},
k8:{"^":"l:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cH(H.c(w.d,{func:1}),null)}catch(v){y=H.ah(v)
x=H.ba(v)
if(this.d){w=H.e(this.a.a.c,"$isad").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isad")
else u.b=new P.ad(y,x)
u.a=!0
return}if(!!J.C(z).$isbi){if(z instanceof P.aF&&z.gca()>=4){if(z.gca()===8){w=this.b
w.b=H.e(z.gdX(),"$isad")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.f5(new P.k9(t),null)
w.a=!1}}},
k9:{"^":"l:42;a",
$1:function(a){return this.a}},
k7:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.u(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.bJ(H.c(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ah(t)
y=H.ba(t)
x=this.a
x.b=new P.ad(z,y)
x.a=!0}}},
k6:{"^":"l:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isad")
w=this.c
if(w.eD(z)&&w.e!=null){v=this.b
v.b=w.es(z)
v.a=!1}}catch(u){y=H.ah(u)
x=H.ba(u)
w=H.e(this.a.a.c,"$isad")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ad(y,x)
s.a=!0}}},
eP:{"^":"b;a,0b"},
cN:{"^":"b;$ti",
gj:function(a){var z,y
z={}
y=new P.aF(0,$.K,[P.m])
z.a=0
this.eA(new P.iF(z,this),!0,new P.iG(z,y),y.gdg())
return y}},
iF:{"^":"l;a,b",
$1:function(a){H.u(a,H.an(this.b,"cN",0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.an(this.b,"cN",0)]}}},
iG:{"^":"l:0;a,b",
$0:function(){this.b.bY(this.a.a)}},
ef:{"^":"b;$ti"},
iE:{"^":"b;"},
b1:{"^":"b;"},
ad:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isY:1},
lf:{"^":"b;",$isny:1},
lA:{"^":"l:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e2()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
ku:{"^":"lf;",
f1:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
try{if(C.e===$.K){a.$0()
return}P.fe(null,null,this,a,-1)}catch(x){z=H.ah(x)
y=H.ba(x)
P.cf(null,null,this,z,H.e(y,"$isak"))}},
f2:function(a,b,c){var z,y,x
H.c(a,{func:1,ret:-1,args:[c]})
H.u(b,c)
try{if(C.e===$.K){a.$1(b)
return}P.ff(null,null,this,a,b,-1,c)}catch(x){z=H.ah(x)
y=H.ba(x)
P.cf(null,null,this,z,H.e(y,"$isak"))}},
ea:function(a,b){return new P.kw(this,H.c(a,{func:1,ret:b}),b)},
bm:function(a){return new P.kv(this,H.c(a,{func:1,ret:-1}))},
ci:function(a,b){return new P.kx(this,H.c(a,{func:1,ret:-1,args:[b]}),b)},
cH:function(a,b){H.c(a,{func:1,ret:b})
if($.K===C.e)return a.$0()
return P.fe(null,null,this,a,b)},
bJ:function(a,b,c,d){H.c(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.K===C.e)return a.$1(b)
return P.ff(null,null,this,a,b,c,d)},
f0:function(a,b,c,d,e,f){H.c(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.K===C.e)return a.$2(b,c)
return P.lB(null,null,this,a,b,c,d,e,f)},
eU:function(a,b,c,d){return H.c(a,{func:1,ret:b,args:[c,d]})}},
kw:{"^":"l;a,b,c",
$0:function(){return this.a.cH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kv:{"^":"l:3;a,b",
$0:function(){return this.a.f1(this.b)}},
kx:{"^":"l;a,b,c",
$1:function(a){var z=this.c
return this.a.f2(this.b,H.u(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hD:function(a,b,c,d,e){return new H.aK(0,0,[d,e])},
hE:function(a,b,c){H.bb(a)
return H.z(H.lO(a,new H.aK(0,0,[b,c])),"$isdT",[b,c],"$asdT")},
dU:function(a,b){return new H.aK(0,0,[a,b])},
hG:function(a,b,c,d){return new P.kg(0,0,[d])},
hs:function(a,b,c){var z,y
if(P.d3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bA()
C.a.h(y,a)
try{P.lx(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.eg(b,H.fv(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.d3(a))return b+"..."+c
z=new P.ar(b)
y=$.$get$bA()
C.a.h(y,a)
try{x=z
x.a=P.eg(x.gai(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gai()+c
y=z.gai()
return y.charCodeAt(0)==0?y:y},
d3:function(a){var z,y
for(z=0;y=$.$get$bA(),z<y.length;++z)if(a===y[z])return!0
return!1},
lx:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gT(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.j(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.C()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.C();t=s,s=r){r=z.gM(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dV:function(a,b,c){var z=P.hD(null,null,null,b,c)
a.D(0,new P.hF(z,b,c))
return z},
cG:function(a){var z,y,x
z={}
if(P.d3(a))return"{...}"
y=new P.ar("")
try{C.a.h($.$get$bA(),a)
x=y
x.a=x.gai()+"{"
z.a=!0
J.df(a,new P.hL(z,y))
z=y
z.a=z.gai()+"}"}finally{z=$.$get$bA()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gai()
return z.charCodeAt(0)==0?z:z},
kg:{"^":"ka;a,0b,0c,0d,0e,0f,r,$ti",
gT:function(a){return P.eU(this,this.r,H.t(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.u(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cZ()
this.b=z}return this.bW(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cZ()
this.c=y}return this.bW(y,b)}else return this.d8(0,b)},
d8:function(a,b){var z,y,x
H.u(b,H.t(this,0))
z=this.d
if(z==null){z=P.cZ()
this.d=z}y=this.bZ(b)
x=z[y]
if(x==null)z[y]=[this.b4(b)]
else{if(this.c3(x,b)>=0)return!1
x.push(this.b4(b))}return!0},
S:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.c7(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c7(this.c,b)
else return this.dT(0,b)},
dT:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dm(z,b)
x=this.c3(y,b)
if(x<0)return!1
this.cd(y.splice(x,1)[0])
return!0},
bW:function(a,b){H.u(b,H.t(this,0))
if(H.e(a[b],"$iscY")!=null)return!1
a[b]=this.b4(b)
return!0},
c7:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscY")
if(z==null)return!1
this.cd(z)
delete a[b]
return!0},
bX:function(){this.r=this.r+1&67108863},
b4:function(a){var z,y
z=new P.cY(H.u(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bX()
return z},
cd:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bX()},
bZ:function(a){return J.bD(a)&0x3ffffff},
dm:function(a,b){return a[this.bZ(b)]},
c3:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
m:{
cZ:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cY:{"^":"b;a,0b,0c"},
kh:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aI(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.u(z.a,H.t(this,0))
this.c=z.b
return!0}}},
m:{
eU:function(a,b,c){var z=new P.kh(a,b,[c])
z.c=a.e
return z}}},
ka:{"^":"ir;"},
hF:{"^":"l:6;a,b,c",
$2:function(a,b){this.a.l(0,H.u(a,this.b),H.u(b,this.c))}},
bY:{"^":"ki;",$isk:1,$isd:1},
p:{"^":"b;$ti",
gT:function(a){return new H.dW(a,this.gj(a),0,[H.aH(this,a,"p",0)])},
E:function(a,b){return this.k(a,b)},
D:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.aH(this,a,"p",0)]})
z=this.gj(a)
if(typeof z!=="number")return H.q(z)
y=0
for(;y<z;++y){b.$1(this.k(a,y))
if(z!==this.gj(a))throw H.a(P.aI(a))}},
f8:function(a,b){var z,y,x
z=H.f([],[H.aH(this,a,"p",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.l(z,y,this.k(a,y));++y}return z},
f7:function(a){return this.f8(a,!0)},
ae:function(a,b,c,d){var z
H.u(d,H.aH(this,a,"p",0))
P.az(b,c,this.gj(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
i:function(a){return P.cA(a,"[","]")}},
hK:{"^":"aa;"},
hL:{"^":"l:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
aa:{"^":"b;$ti",
D:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.aH(this,a,"aa",0),H.aH(this,a,"aa",1)]})
for(z=J.be(this.ga9(a));z.C();){y=z.gM(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.ai(this.ga9(a))},
i:function(a){return P.cG(a)},
$isD:1},
kT:{"^":"b;$ti",
l:function(a,b,c){H.u(b,H.t(this,0))
H.u(c,H.t(this,1))
throw H.a(P.w("Cannot modify unmodifiable map"))}},
hM:{"^":"b;$ti",
k:function(a,b){return J.de(this.a,b)},
l:function(a,b,c){J.cn(this.a,H.u(b,H.t(this,0)),H.u(c,H.t(this,1)))},
D:function(a,b){J.df(this.a,H.c(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gj:function(a){return J.ai(this.a)},
i:function(a){return J.a6(this.a)},
$isD:1},
eF:{"^":"kU;a,$ti"},
it:{"^":"b;$ti",
i:function(a){return P.cA(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dg("index"))
if(b<0)H.L(P.U(b,0,null,"index",null))
for(z=P.eU(this,this.r,H.t(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.a(P.J(b,this,"index",null,y))},
$isk:1},
ir:{"^":"it;"},
ki:{"^":"b+p;"},
kU:{"^":"hM+kT;$ti"}}],["","",,P,{"^":"",fP:{"^":"bF;a",
eF:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.az(c,d,b.length,null,null,null)
z=$.$get$eQ()
if(typeof d!=="number")return H.q(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.A(b,y)
if(r===37){q=s+2
if(q<=d){p=H.ck(C.b.A(b,s))
o=H.ck(C.b.A(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.i(z,n)
m=z[n]
if(m>=0){n=C.b.R("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ar("")
l=w.a+=C.b.n(b,x,y)
w.a=l+H.c2(r)
x=s
continue}}throw H.a(P.Q("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.n(b,x,d)
k=l.length
if(v>=0)P.dj(b,u,d,v,t,k)
else{j=C.c.aQ(k-1,4)+1
if(j===1)throw H.a(P.Q("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.as(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dj(b,u,d,v,t,i)
else{j=C.c.aQ(i,4)
if(j===1)throw H.a(P.Q("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.as(b,d,d,j===2?"==":"=")}return b},
$asbF:function(){return[[P.d,P.m],P.h]},
m:{
dj:function(a,b,c,d,e,f){if(C.c.aQ(f,4)!==0)throw H.a(P.Q("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.Q("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.Q("Invalid base64 padding, more than two '=' characters",a,b))}}},fQ:{"^":"bg;a",
$asbg:function(){return[[P.d,P.m],P.h]}},bF:{"^":"b;$ti"},bg:{"^":"iE;$ti"},hh:{"^":"bF;",
$asbF:function(){return[P.h,[P.d,P.m]]}},jo:{"^":"hh;a",
gem:function(){return C.A}},jv:{"^":"bg;",
aD:function(a,b,c){var z,y,x,w
z=a.length
P.az(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.le(0,0,x)
if(w.dl(a,b,z)!==z)w.ce(J.fH(a,z-1),0)
return C.R.b2(x,0,w.b)},
bt:function(a){return this.aD(a,0,null)},
$asbg:function(){return[P.h,[P.d,P.m]]}},le:{"^":"b;a,b,c",
ce:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.i(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.i(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.i(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.i(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.i(z,y)
z[y]=128|a&63
return!1}},
dl:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.R(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.A(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.ce(w,C.b.A(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.i(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.i(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.i(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.i(z,v)
z[v]=128|w&63}}return x}},jp:{"^":"bg;a",
aD:function(a,b,c){var z,y,x,w,v
H.z(a,"$isd",[P.m],"$asd")
z=P.jq(!1,a,b,c)
if(z!=null)return z
y=J.ai(a)
P.az(b,c,y,null,null,null)
x=new P.ar("")
w=new P.lb(!1,x,!0,0,0,0)
w.aD(a,b,y)
w.eo(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
bt:function(a){return this.aD(a,0,null)},
$asbg:function(){return[[P.d,P.m],P.h]},
m:{
jq:function(a,b,c,d){H.z(b,"$isd",[P.m],"$asd")
if(b instanceof Uint8Array)return P.jr(!1,b,c,d)
return},
jr:function(a,b,c,d){var z,y,x
z=$.$get$eJ()
if(z==null)return
y=0===c
if(y&&!0)return P.cU(z,b)
x=b.length
d=P.az(c,d,x,null,null,null)
if(y&&d===x)return P.cU(z,b)
return P.cU(z,b.subarray(c,d))},
cU:function(a,b){if(P.jt(b))return
return P.ju(a,b)},
ju:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ah(y)}return},
jt:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
js:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ah(y)}return}}},lb:{"^":"b;a,b,c,d,e,f",
eo:function(a,b,c){var z
H.z(b,"$isd",[P.m],"$asd")
if(this.e>0){z=P.Q("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.z(a,"$isd",[P.m],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.ld(c)
v=new P.lc(this,b,c,a)
$label0$0:for(u=J.av(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.aY()
if((r&192)!==128){q=P.Q("Bad UTF-8 encoding 0x"+C.c.aN(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.i(C.q,q)
if(z<=C.q[q]){q=P.Q("Overlong encoding of 0x"+C.c.aN(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.Q("Character outside valid Unicode range: 0x"+C.c.aN(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.c2(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bM()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.I()
if(r<0){m=P.Q("Negative UTF-8 code unit: -0x"+C.c.aN(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Q("Bad UTF-8 encoding 0x"+C.c.aN(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},ld:{"^":"l:28;a",
$2:function(a,b){var z,y,x,w
H.z(a,"$isd",[P.m],"$asd")
z=this.a
for(y=J.av(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.aY()
if((w&127)!==w)return x-b}return z-b}},lc:{"^":"l:29;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.bL(this.d,a,b)}}}],["","",,P,{"^":"",
bC:function(a,b,c){var z
H.c(b,{func:1,ret:P.m,args:[P.h]})
z=H.i7(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.Q(a,null,null))},
hj:function(a){var z=J.C(a)
if(!!z.$isl)return z.i(a)
return"Instance of '"+H.aV(a)+"'"},
hH:function(a,b,c,d){var z,y
H.u(b,d)
z=J.hu(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.z(z,"$isd",[d],"$asd")},
dX:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gT(a);x.C();)C.a.h(y,H.u(x.gM(x),c))
if(b)return y
return H.z(J.bj(y),"$isd",z,"$asd")},
bL:function(a,b,c){var z,y
z=P.m
H.z(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.z(a,"$isaS",[z],"$asaS")
y=a.length
c=P.az(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.I()
z=c<y}else z=!0
return H.e8(z?C.a.b2(a,b,c):a)}if(!!J.C(a).$iscL)return H.i9(a,b,P.az(b,c,a.length,null,null,null))
return P.iH(a,b,c)},
iH:function(a,b,c){var z,y,x,w
H.z(a,"$isk",[P.m],"$ask")
if(b<0)throw H.a(P.U(b,0,J.ai(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.U(c,b,J.ai(a),null,null))
y=J.be(a)
for(x=0;x<b;++x)if(!y.C())throw H.a(P.U(b,0,x,null,null))
w=[]
if(z)for(;y.C();)w.push(y.gM(y))
else for(x=b;x<c;++x){if(!y.C())throw H.a(P.U(c,b,x,null,null))
w.push(y.gM(y))}return H.e8(w)},
ih:function(a,b,c){return new H.hw(a,H.hx(a,!1,!0,!1))},
c9:function(){var z=H.i_()
if(z!=null)return P.jg(z,0,null)
throw H.a(P.w("'Uri.base' is not supported"))},
bT:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hj(a)},
a3:function(a){return new P.eR(a)},
hI:function(a,b,c,d){var z,y
H.c(b,{func:1,ret:d,args:[P.m]})
z=H.f([],[d])
C.a.sj(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
dd:function(a){H.mf(a)},
jg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.A(a,b+4)^58)*3|C.b.A(a,b)^100|C.b.A(a,b+1)^97|C.b.A(a,b+2)^116|C.b.A(a,b+3)^97)>>>0
if(y===0)return P.eG(b>0||c<c?C.b.n(a,b,c):a,5,null).gcM()
else if(y===32)return P.eG(C.b.n(a,z,c),0,null).gcM()}x=new Array(8)
x.fixed$length=Array
w=H.f(x,[P.m])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.fg(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.fb()
if(v>=b)if(P.fg(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.F()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.I()
if(typeof r!=="number")return H.q(r)
if(q<r)r=q
if(typeof s!=="number")return s.I()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.I()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.I()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a2(a,"..",s)))n=r>s+2&&C.b.a2(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a2(a,"file",b)){if(u<=b){if(!C.b.a2(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.n(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.as(a,s,r,"/");++r;++q;++c}else{a=C.b.n(a,b,s)+"/"+C.b.n(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a2(a,"http",b)){if(x&&t+3===s&&C.b.a2(a,"80",t+1))if(b===0&&!0){a=C.b.as(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.n(a,b,t)+C.b.n(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a2(a,"https",b)){if(x&&t+4===s&&C.b.a2(a,"443",t+1))if(b===0&&!0){a=C.b.as(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.n(a,b,t)+C.b.n(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.n(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.kz(a,v,u,t,s,r,q,o)}return P.kV(a,b,c,v,u,t,s,r,q,o)},
eI:function(a,b){var z=P.h
return C.a.ep(H.f(a.split("&"),[z]),P.dU(z,z),new P.jj(b),[P.D,P.h,P.h])},
je:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jf(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.R(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bC(C.b.n(a,v,w),null,null)
if(typeof s!=="number")return s.bM()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.i(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bC(C.b.n(a,v,c),null,null)
if(typeof s!=="number")return s.bM()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.i(y,u)
y[u]=s
return y},
eH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jh(a)
y=new P.ji(z,a)
if(a.length<2)z.$1("address is too short")
x=H.f([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.R(a,w)
if(s===58){if(w===b){++w
if(C.b.R(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaf(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.je(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.i(o,l)
o[l]=0
i=l+1
if(i>=n)return H.i(o,i)
o[i]=0
l+=2}else{i=C.c.am(k,8)
if(l<0||l>=n)return H.i(o,l)
o[l]=i
i=l+1
if(i>=n)return H.i(o,i)
o[i]=k&255
l+=2}}return o},
lr:function(){var z,y,x,w,v
z=P.hI(22,new P.lt(),!0,P.H)
y=new P.ls(z)
x=new P.lu()
w=new P.lv()
v=H.e(y.$2(0,225),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isH")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isH")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isH"),"]",5)
v=H.e(y.$2(9,235),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isH")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isH"),"az",21)
v=H.e(y.$2(21,245),"$isH")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fg:function(a,b,c,d,e){var z,y,x,w,v
H.z(e,"$isd",[P.m],"$asd")
z=$.$get$fh()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.i(z,d)
x=z[d]
w=C.b.A(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.i(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
am:{"^":"b;"},
"+bool":0,
ae:{"^":"b;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ae))return!1
return this.a===b.a&&this.b===b.b},
gP:function(a){var z=this.a
return(z^C.c.am(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.h9(H.i6(this))
y=P.bG(H.i4(this))
x=P.bG(H.i0(this))
w=P.bG(H.i1(this))
v=P.bG(H.i3(this))
u=P.bG(H.i5(this))
t=P.ha(H.i2(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
m:{
h9:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ha:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bG:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"V;"},
"+double":0,
bh:{"^":"b;a",
I:function(a,b){return C.c.I(this.a,H.e(b,"$isbh").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bh))return!1
return this.a===b.a},
gP:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.he()
y=this.a
if(y<0)return"-"+new P.bh(0-y).i(0)
x=z.$1(C.c.an(y,6e7)%60)
w=z.$1(C.c.an(y,1e6)%60)
v=new P.hd().$1(y%1e6)
return""+C.c.an(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
m:{
dE:function(a,b,c,d,e,f){return new P.bh(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hd:{"^":"l:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
he:{"^":"l:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"b;"},
e2:{"^":"Y;",
i:function(a){return"Throw of null."}},
aw:{"^":"Y;a,b,c,d",
gb7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb6:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gb7()+y+x
if(!this.a)return w
v=this.gb6()
u=P.bT(this.b)
return w+v+": "+H.j(u)},
m:{
bE:function(a){return new P.aw(!1,null,null,a)},
bQ:function(a,b,c){return new P.aw(!0,a,b,c)},
dg:function(a){return new P.aw(!1,null,a,"Must not be null")}}},
c3:{"^":"aw;e,f,a,b,c,d",
gb7:function(){return"RangeError"},
gb6:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
m:{
c4:function(a,b,c){return new P.c3(null,null,!0,a,b,"Value not in range")},
U:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
az:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.a(P.U(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.a(P.U(b,a,c,"end",f))
return b}return c}}},
hq:{"^":"aw;e,j:f>,a,b,c,d",
gb7:function(){return"RangeError"},
gb6:function(){if(J.fD(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
m:{
J:function(a,b,c,d,e){var z=H.y(e!=null?e:J.ai(b))
return new P.hq(b,z,!0,a,c,"Index out of range")}}},
jc:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
w:function(a){return new P.jc(a)}}},
j9:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
bM:function(a){return new P.j9(a)}}},
iB:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a}},
h2:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.bT(z))+"."},
m:{
aI:function(a){return new P.h2(a)}}},
hX:{"^":"b;",
i:function(a){return"Out of Memory"},
$isY:1},
ed:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isY:1},
h8:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eR:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
ho:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.n(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.A(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.R(w,s)
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
m=""}l=C.b.n(w,o,p)
return y+n+l+m+"\n"+C.b.p(" ",x-o+n.length)+"^\n"},
m:{
Q:function(a,b,c){return new P.ho(a,b,c)}}},
m:{"^":"V;"},
"+int":0,
k:{"^":"b;$ti",
gj:function(a){var z,y
z=this.gT(this)
for(y=0;z.C();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dg("index"))
if(b<0)H.L(P.U(b,0,null,"index",null))
for(z=this.gT(this),y=0;z.C();){x=z.gM(z)
if(b===y)return x;++y}throw H.a(P.J(b,this,"index",null,y))},
i:function(a){return P.hs(this,"(",")")}},
cB:{"^":"b;$ti"},
d:{"^":"b;$ti",$isk:1},
"+List":0,
D:{"^":"b;$ti"},
B:{"^":"b;",
gP:function(a){return P.b.prototype.gP.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
V:{"^":"b;"},
"+num":0,
b:{"^":";",
q:function(a,b){return this===b},
gP:function(a){return H.bp(this)},
i:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.i(this)}},
ak:{"^":"b;"},
h:{"^":"b;",$ise3:1},
"+String":0,
ar:{"^":"b;ai:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnm:1,
m:{
eg:function(a,b,c){var z=J.be(b)
if(!z.C())return a
if(c.length===0){do a+=H.j(z.gM(z))
while(z.C())}else{a+=H.j(z.gM(z))
for(;z.C();)a=a+c+H.j(z.gM(z))}return a}}},
jj:{"^":"l:33;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.z(a,"$isD",[z,z],"$asD")
H.F(b)
y=J.av(b).ct(b,"=")
if(y===-1){if(b!=="")J.cn(a,P.d0(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.n(b,0,y)
w=C.b.aw(b,y+1)
z=this.a
J.cn(a,P.d0(x,0,x.length,z,!0),P.d0(w,0,w.length,z,!0))}return a}},
jf:{"^":"l:34;a",
$2:function(a,b){throw H.a(P.Q("Illegal IPv4 address, "+a,this.a,b))}},
jh:{"^":"l:22;a",
$2:function(a,b){throw H.a(P.Q("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
ji:{"^":"l:37;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bC(C.b.n(this.b,a,b),null,16)
if(typeof z!=="number")return z.I()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cc:{"^":"b;b_:a<,b,c,d,cD:e>,f,r,0x,0y,0z,0Q,0ch",
gcN:function(){return this.b},
gbx:function(a){var z=this.c
if(z==null)return""
if(C.b.a1(z,"["))return C.b.n(z,1,z.length-1)
return z},
gaW:function(a){var z=this.d
if(z==null)return P.f6(this.a)
return z},
gbF:function(a){var z=this.f
return z==null?"":z},
gco:function(){var z=this.r
return z==null?"":z},
bH:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.z(h,"$isD",[P.h,null],"$asD")
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
if(x&&!C.b.a1(d,"/"))d="/"+d
g=P.d_(g,0,0,h)
return new P.cc(i,j,c,f,d,g,this.r)},
bG:function(a,b){return this.bH(a,null,null,null,null,null,null,b,null,null)},
gaL:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.eF(P.eI(z==null?"":z,C.f),[y,y])
this.Q=y
z=y}return z},
gcp:function(){return this.c!=null},
gcs:function(){return this.f!=null},
gcq:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.j(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.j(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.j(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
q:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.C(b)
if(!!z.$iscT){y=this.a
x=b.gb_()
if(y==null?x==null:y===x)if(this.c!=null===b.gcp()){y=this.b
x=b.gcN()
if(y==null?x==null:y===x){y=this.gbx(this)
x=z.gbx(b)
if(y==null?x==null:y===x){y=this.gaW(this)
x=z.gaW(b)
if(y==null?x==null:y===x)if(this.e===z.gcD(b)){y=this.f
x=y==null
if(!x===b.gcs()){if(x)y=""
if(y===z.gbF(b)){z=this.r
y=z==null
if(!y===b.gcq()){if(y)z=""
z=z===b.gco()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gP:function(a){var z=this.z
if(z==null){z=C.b.gP(this.i(0))
this.z=z}return z},
$iscT:1,
m:{
cd:function(a,b,c,d){var z,y,x,w,v,u
H.z(a,"$isd",[P.m],"$asd")
if(c===C.f){z=$.$get$fb().b
if(typeof b!=="string")H.L(H.a9(b))
z=z.test(b)}else z=!1
if(z)return b
H.u(b,H.an(c,"bF",0))
y=c.gem().bt(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.c2(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
kV:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.l5(a,b,d)
else{if(d===b)P.bw(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.l6(a,z,e-1):""
x=P.l_(a,e,f,!1)
if(typeof f!=="number")return f.F()
w=f+1
if(typeof g!=="number")return H.q(g)
v=w<g?P.l2(P.bC(C.b.n(a,w,g),new P.kW(a,f),null),j):null}else{y=""
x=null
v=null}u=P.l0(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.I()
t=h<i?P.d_(a,h+1,i,null):null
return new P.cc(j,y,x,v,u,t,i<c?P.kZ(a,i+1,c):null)},
f6:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bw:function(a,b,c){throw H.a(P.Q(c,a,b))},
l2:function(a,b){if(a!=null&&a===P.f6(b))return
return a},
l_:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.R(a,b)===91){if(typeof c!=="number")return c.G()
z=c-1
if(C.b.R(a,z)!==93)P.bw(a,b,"Missing end `]` to match `[` in host")
P.eH(a,b+1,z)
return C.b.n(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
y=b
for(;y<c;++y)if(C.b.R(a,y)===58){P.eH(a,b,c)
return"["+a+"]"}return P.l8(a,b,c)},
l8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.q(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.R(a,z)
if(v===37){u=P.fd(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ar("")
s=C.b.n(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.n(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.i(C.r,t)
t=(C.r[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ar("")
if(y<z){x.a+=C.b.n(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.i(C.i,t)
t=(C.i[t]&1<<(v&15))!==0}else t=!1
if(t)P.bw(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.R(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ar("")
s=C.b.n(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.f7(v)
z+=q
y=z}}}}if(x==null)return C.b.n(a,b,c)
if(y<c){s=C.b.n(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
l5:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.f9(C.b.A(a,b)))P.bw(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.A(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.i(C.k,w)
w=(C.k[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bw(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.n(a,b,c)
return P.kX(y?a.toLowerCase():a)},
kX:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
l6:function(a,b,c){return P.bx(a,b,c,C.N)},
l0:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bx(a,b,c,C.t):C.E.fI(d,new P.l1(),P.h).v(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a1(w,"/"))w="/"+w
return P.l7(w,e,f)},
l7:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a1(a,"/"))return P.l9(a,!z||c)
return P.la(a)},
d_:function(a,b,c,d){var z,y
z={}
H.z(d,"$isD",[P.h,null],"$asD")
if(a!=null){if(d!=null)throw H.a(P.bE("Both query and queryParameters specified"))
return P.bx(a,b,c,C.j)}if(d==null)return
y=new P.ar("")
z.a=""
d.D(0,new P.l3(new P.l4(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
kZ:function(a,b,c){return P.bx(a,b,c,C.j)},
fd:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.R(a,b+1)
x=C.b.R(a,z)
w=H.ck(y)
v=H.ck(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.c.am(u,4)
if(z>=8)return H.i(C.l,z)
z=(C.l[z]&1<<(u&15))!==0}else z=!1
if(z)return H.c2(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.n(a,b,b+3).toUpperCase()
return},
f7:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.f(z,[P.m])
C.a.l(y,0,37)
C.a.l(y,1,C.b.A("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.A("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.f(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.c.e0(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.A("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.A("0123456789ABCDEF",u&15))
v+=3}}return P.bL(y,0,null)},
bx:function(a,b,c,d){var z=P.fc(a,b,c,H.z(d,"$isd",[P.m],"$asd"),!1)
return z==null?C.b.n(a,b,c):z},
fc:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.z(d,"$isd",[P.m],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.I()
if(typeof c!=="number")return H.q(c)
if(!(y<c))break
c$0:{v=C.b.R(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.i(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fd(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.i(C.i,u)
u=(C.i[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bw(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.R(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.f7(v)}}if(w==null)w=new P.ar("")
w.a+=C.b.n(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.q(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.I()
if(x<c)w.a+=C.b.n(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fa:function(a){if(C.b.a1(a,"."))return!0
return C.b.ct(a,"/.")!==-1},
la:function(a){var z,y,x,w,v,u,t
if(!P.fa(a))return a
z=H.f([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.T(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.i(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.v(z,"/")},
l9:function(a,b){var z,y,x,w,v,u
if(!P.fa(a))return!b?P.f8(a):a
z=H.f([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaf(z)!==".."){if(0>=z.length)return H.i(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.i(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaf(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.i(z,0)
C.a.l(z,0,P.f8(z[0]))}return C.a.v(z,"/")},
f8:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.f9(J.fE(a,0)))for(y=1;y<z;++y){x=C.b.A(a,y)
if(x===58)return C.b.n(a,0,y)+"%3A"+C.b.aw(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.i(C.k,w)
w=(C.k[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
kY:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.A(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bE("Invalid URL encoding"))}}return z},
d0:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.d8(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.A(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.f!==d)v=!1
else v=!0
if(v)return y.n(a,b,c)
else u=new H.X(y.n(a,b,c))}else{u=H.f([],[P.m])
for(x=b;x<c;++x){w=y.A(a,x)
if(w>127)throw H.a(P.bE("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bE("Truncated URI"))
C.a.h(u,P.kY(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.z(u,"$isd",[P.m],"$asd")
return new P.jp(!1).bt(u)},
f9:function(a){var z=a|32
return 97<=z&&z<=122}}},
kW:{"^":"l:17;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.F()
throw H.a(P.Q("Invalid port",this.a,z+1))}},
l1:{"^":"l:39;",
$1:function(a){return P.cd(C.P,a,C.f,!1)}},
l4:{"^":"l:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.cd(C.l,a,C.f,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.cd(C.l,b,C.f,!0))}}},
l3:{"^":"l:43;a",
$2:function(a,b){var z,y
H.F(a)
if(b==null||typeof b==="string")this.a.$2(a,H.F(b))
else for(z=J.be(H.fv(b,"$isk")),y=this.a;z.C();)y.$2(a,H.F(z.gM(z)))}},
jd:{"^":"b;a,b,c",
gcM:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.i(z,0)
y=this.a
z=z[0]+1
x=C.b.cu(y,"?",z)
w=y.length
if(x>=0){v=P.bx(y,x+1,w,C.j)
w=x}else v=null
z=new P.jR(this,"data",null,null,null,P.bx(y,z,w,C.t),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.i(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
m:{
eG:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.f([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.A(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.Q("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.Q("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.A(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaf(z)
if(v!==44||x!==t+7||!C.b.a2(a,"base64",t+1))throw H.a(P.Q("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.x.eF(0,a,s,y)
else{r=P.fc(a,s,y,C.j,!0)
if(r!=null)a=C.b.as(a,s,y,r)}return new P.jd(a,z,c)}}},
lt:{"^":"l:47;",
$1:function(a){return new Uint8Array(96)}},
ls:{"^":"l:23;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.i(z,a)
z=z[a]
J.fI(z,0,96,b)
return z}},
lu:{"^":"l;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.A(b,y)^96
if(x>=a.length)return H.i(a,x)
a[x]=c}}},
lv:{"^":"l;",
$3:function(a,b,c){var z,y,x
for(z=C.b.A(b,0),y=C.b.A(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.i(a,x)
a[x]=c}}},
kz:{"^":"b;a,b,c,d,e,f,r,x,0y",
gcp:function(){return this.c>0},
gcr:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.F()
y=this.e
if(typeof y!=="number")return H.q(y)
y=z+1<y
z=y}else z=!1
return z},
gcs:function(){var z=this.f
if(typeof z!=="number")return z.I()
return z<this.r},
gcq:function(){return this.r<this.a.length},
gc4:function(){return this.b===4&&C.b.a1(this.a,"http")},
gc5:function(){return this.b===5&&C.b.a1(this.a,"https")},
gb_:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gc4()){this.x="http"
z="http"}else if(this.gc5()){this.x="https"
z="https"}else if(z===4&&C.b.a1(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a1(this.a,"package")){this.x="package"
z="package"}else{z=C.b.n(this.a,0,z)
this.x=z}return z},
gcN:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.n(this.a,y,z-1):""},
gbx:function(a){var z=this.c
return z>0?C.b.n(this.a,z,this.d):""},
gaW:function(a){var z
if(this.gcr()){z=this.d
if(typeof z!=="number")return z.F()
return P.bC(C.b.n(this.a,z+1,this.e),null,null)}if(this.gc4())return 80
if(this.gc5())return 443
return 0},
gcD:function(a){return C.b.n(this.a,this.e,this.f)},
gbF:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.I()
return z<y?C.b.n(this.a,z+1,y):""},
gco:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aw(y,z+1):""},
gaL:function(){var z=this.f
if(typeof z!=="number")return z.I()
if(z>=this.r)return C.Q
z=P.h
return new P.eF(P.eI(this.gbF(this),C.f),[z,z])},
bH:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.z(h,"$isD",[P.h,null],"$asD")
i=this.gb_()
z=i==="file"
y=this.c
j=y>0?C.b.n(this.a,this.b+3,y):""
f=this.gcr()?this.gaW(this):null
y=this.c
if(y>0)c=C.b.n(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.n(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a1(d,"/"))d="/"+d
g=P.d_(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aw(y,x+1)
return new P.cc(i,j,c,f,d,g,b)},
bG:function(a,b){return this.bH(a,null,null,null,null,null,null,b,null,null)},
gP:function(a){var z=this.y
if(z==null){z=C.b.gP(this.a)
this.y=z}return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.C(b)
if(!!z.$iscT)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$iscT:1},
jR:{"^":"cc;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cv:function(a,b){var z=document.createElement("canvas")
return z},
hg:function(a){H.e(a,"$isa2")
return"wheel"},
dJ:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
hr:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isdK")
try{J.fK(z,a)}catch(x){H.ah(x)}return z},
ca:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eT:function(a,b,c,d){var z,y
z=W.ca(W.ca(W.ca(W.ca(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fk:function(a,b){var z
H.c(a,{func:1,ret:-1,args:[b]})
z=$.K
if(z===C.e)return a
return z.ci(a,b)},
Z:{"^":"O;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mo:{"^":"n;0j:length=","%":"AccessibleNodeList"},
mp:{"^":"Z;0U:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mq:{"^":"Z;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cr:{"^":"n;",$iscr:1,"%":";Blob"},
mw:{"^":"Z;0U:type}","%":"HTMLButtonElement"},
cu:{"^":"Z;",
aZ:function(a,b,c){if(c!=null)return a.getContext(b,P.lH(c,null))
return a.getContext(b)},
cP:function(a,b){return this.aZ(a,b,null)},
$iscu:1,
"%":"HTMLCanvasElement"},
dr:{"^":"n;",$isdr:1,"%":"CanvasRenderingContext2D"},
my:{"^":"E;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mA:{"^":"h7;0j:length=","%":"CSSPerspective"},
aQ:{"^":"n;",$isaQ:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mB:{"^":"jQ;0j:length=",
cQ:function(a,b){var z=a.getPropertyValue(this.dd(a,b))
return z==null?"":z},
dd:function(a,b){var z,y
z=$.$get$dw()
y=z[b]
if(typeof y==="string")return y
y=this.e1(a,b)
z[b]=y
return y},
e1:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hb()+b
if(z in a)return z
return b},
gbn:function(a){return a.bottom},
ga8:function(a){return a.height},
gaq:function(a){return a.left},
gbI:function(a){return a.right},
gaP:function(a){return a.top},
gaa:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h6:{"^":"b;",
gaq:function(a){return this.cQ(a,"left")}},
dx:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
h7:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mC:{"^":"dx;0j:length=","%":"CSSTransformValue"},
mD:{"^":"dx;0j:length=","%":"CSSUnparsedValue"},
mE:{"^":"n;0j:length=","%":"DataTransferItemList"},
mF:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
mG:{"^":"jT;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.z(c,"$isa_",[P.V],"$asa_")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a_,P.V]]},
$asp:function(){return[[P.a_,P.V]]},
$isk:1,
$ask:function(){return[[P.a_,P.V]]},
$isd:1,
$asd:function(){return[[P.a_,P.V]]},
$asx:function(){return[[P.a_,P.V]]},
"%":"ClientRectList|DOMRectList"},
hc:{"^":"n;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaa(a))+" x "+H.j(this.ga8(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bB(b,"$isa_",[P.V],"$asa_")
if(!z)return!1
z=J.aM(b)
return a.left===z.gaq(b)&&a.top===z.gaP(b)&&this.gaa(a)===z.gaa(b)&&this.ga8(a)===z.ga8(b)},
gP:function(a){return W.eT(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaa(a)&0x1FFFFFFF,this.ga8(a)&0x1FFFFFFF)},
gbn:function(a){return a.bottom},
ga8:function(a){return a.height},
gaq:function(a){return a.left},
gbI:function(a){return a.right},
gaP:function(a){return a.top},
gaa:function(a){return a.width},
$isa_:1,
$asa_:function(){return[P.V]},
"%":";DOMRectReadOnly"},
mH:{"^":"jV;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.F(c)
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.h]},
$asp:function(){return[P.h]},
$isk:1,
$ask:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asx:function(){return[P.h]},
"%":"DOMStringList"},
mI:{"^":"n;0j:length=","%":"DOMTokenList"},
jP:{"^":"bY;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.e(z[b],"$isO")},
l:function(a,b,c){var z
H.y(b)
H.e(c,"$isO")
z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var z=this.f7(this)
return new J.ao(z,z.length,0,[H.t(z,0)])},
ae:function(a,b,c,d){throw H.a(P.bM(null))},
$asp:function(){return[W.O]},
$ask:function(){return[W.O]},
$asd:function(){return[W.O]}},
O:{"^":"E;",
gbs:function(a){return new W.jP(a,a.children)},
gcj:function(a){return P.ic(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.V)},
i:function(a){return a.localName},
$isO:1,
"%":";Element"},
mJ:{"^":"Z;0U:type}","%":"HTMLEmbedElement"},
a1:{"^":"n;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a2:{"^":"n;",
cg:["cU",function(a,b,c,d){H.c(c,{func:1,args:[W.a1]})
if(c!=null)this.d9(a,b,c,!1)}],
d9:function(a,b,c,d){return a.addEventListener(b,H.b9(H.c(c,{func:1,args:[W.a1]}),1),!1)},
$isa2:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;eZ|f_|f2|f3"},
aJ:{"^":"cr;",$isaJ:1,"%":"File"},
dG:{"^":"k_;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isaJ")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aJ]},
$asp:function(){return[W.aJ]},
$isk:1,
$ask:function(){return[W.aJ]},
$isd:1,
$asd:function(){return[W.aJ]},
$isdG:1,
$asx:function(){return[W.aJ]},
"%":"FileList"},
mK:{"^":"a2;0j:length=","%":"FileWriter"},
mL:{"^":"Z;0j:length=","%":"HTMLFormElement"},
aR:{"^":"n;",$isaR:1,"%":"Gamepad"},
mM:{"^":"n;0j:length=","%":"History"},
mN:{"^":"kc;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isE")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.E]},
$asp:function(){return[W.E]},
$isk:1,
$ask:function(){return[W.E]},
$isd:1,
$asd:function(){return[W.E]},
$asx:function(){return[W.E]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bI:{"^":"n;0ck:data=",$isbI:1,"%":"ImageData"},
cy:{"^":"Z;",$iscy:1,"%":"HTMLImageElement"},
dK:{"^":"Z;0U:type}",$isdK:1,"%":"HTMLInputElement"},
bk:{"^":"cR;",$isbk:1,"%":"KeyboardEvent"},
mR:{"^":"Z;0U:type}","%":"HTMLLinkElement"},
mS:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
mT:{"^":"n;0j:length=","%":"MediaList"},
mU:{"^":"a2;",
cg:function(a,b,c,d){H.c(c,{func:1,args:[W.a1]})
if(b==="message")a.start()
this.cU(a,b,c,!1)},
"%":"MessagePort"},
mV:{"^":"kj;",
k:function(a,b){return P.aG(a.get(H.F(b)))},
D:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
ga9:function(a){var z=H.f([],[P.h])
this.D(a,new W.hQ(z))
return z},
gj:function(a){return a.size},
l:function(a,b,c){throw H.a(P.w("Not supported"))},
$asaa:function(){return[P.h,null]},
$isD:1,
$asD:function(){return[P.h,null]},
"%":"MIDIInputMap"},
hQ:{"^":"l:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mW:{"^":"kk;",
k:function(a,b){return P.aG(a.get(H.F(b)))},
D:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
ga9:function(a){var z=H.f([],[P.h])
this.D(a,new W.hR(z))
return z},
gj:function(a){return a.size},
l:function(a,b,c){throw H.a(P.w("Not supported"))},
$asaa:function(){return[P.h,null]},
$isD:1,
$asD:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
hR:{"^":"l:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
aT:{"^":"n;",$isaT:1,"%":"MimeType"},
mX:{"^":"km;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isaT")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aT]},
$asp:function(){return[W.aT]},
$isk:1,
$ask:function(){return[W.aT]},
$isd:1,
$asd:function(){return[W.aT]},
$asx:function(){return[W.aT]},
"%":"MimeTypeArray"},
a4:{"^":"cR;",$isa4:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jO:{"^":"bY;a",
l:function(a,b,c){var z,y
H.y(b)
H.e(c,"$isE")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.i(y,b)
z.replaceChild(c,y[b])},
gT:function(a){var z=this.a.childNodes
return new W.dH(z,z.length,-1,[H.aH(C.S,z,"x",0)])},
ae:function(a,b,c,d){throw H.a(P.w("Cannot fillRange on Node list"))},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asp:function(){return[W.E]},
$ask:function(){return[W.E]},
$asd:function(){return[W.E]}},
E:{"^":"a2;",
eX:function(a,b){var z,y
try{z=a.parentNode
J.fF(z,b,a)}catch(y){H.ah(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.cV(a):z},
dU:function(a,b,c){return a.replaceChild(b,c)},
$isE:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hV:{"^":"ko;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isE")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.E]},
$asp:function(){return[W.E]},
$isk:1,
$ask:function(){return[W.E]},
$isd:1,
$asd:function(){return[W.E]},
$asx:function(){return[W.E]},
"%":"NodeList|RadioNodeList"},
n4:{"^":"Z;0U:type}","%":"HTMLOListElement"},
n5:{"^":"Z;0U:type}","%":"HTMLObjectElement"},
aU:{"^":"n;0j:length=",$isaU:1,"%":"Plugin"},
n8:{"^":"ks;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isaU")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aU]},
$asp:function(){return[W.aU]},
$isk:1,
$ask:function(){return[W.aU]},
$isd:1,
$asd:function(){return[W.aU]},
$asx:function(){return[W.aU]},
"%":"PluginArray"},
na:{"^":"n;0U:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
nb:{"^":"ky;",
k:function(a,b){return P.aG(a.get(H.F(b)))},
D:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
ga9:function(a){var z=H.f([],[P.h])
this.D(a,new W.io(z))
return z},
gj:function(a){return a.size},
l:function(a,b,c){throw H.a(P.w("Not supported"))},
$asaa:function(){return[P.h,null]},
$isD:1,
$asD:function(){return[P.h,null]},
"%":"RTCStatsReport"},
io:{"^":"l:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nd:{"^":"Z;0U:type}","%":"HTMLScriptElement"},
nf:{"^":"Z;0j:length=","%":"HTMLSelectElement"},
aW:{"^":"a2;",$isaW:1,"%":"SourceBuffer"},
ng:{"^":"f_;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isaW")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aW]},
$asp:function(){return[W.aW]},
$isk:1,
$ask:function(){return[W.aW]},
$isd:1,
$asd:function(){return[W.aW]},
$asx:function(){return[W.aW]},
"%":"SourceBufferList"},
nh:{"^":"Z;0U:type}","%":"HTMLSourceElement"},
aX:{"^":"n;",$isaX:1,"%":"SpeechGrammar"},
ni:{"^":"kB;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isaX")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aX]},
$asp:function(){return[W.aX]},
$isk:1,
$ask:function(){return[W.aX]},
$isd:1,
$asd:function(){return[W.aX]},
$asx:function(){return[W.aX]},
"%":"SpeechGrammarList"},
aY:{"^":"n;0j:length=",$isaY:1,"%":"SpeechRecognitionResult"},
nk:{"^":"kE;",
k:function(a,b){return a.getItem(H.F(b))},
l:function(a,b,c){a.setItem(b,H.F(c))},
D:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga9:function(a){var z=H.f([],[P.h])
this.D(a,new W.iD(z))
return z},
gj:function(a){return a.length},
$asaa:function(){return[P.h,P.h]},
$isD:1,
$asD:function(){return[P.h,P.h]},
"%":"Storage"},
iD:{"^":"l:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nn:{"^":"Z;0U:type}","%":"HTMLStyleElement"},
aZ:{"^":"n;",$isaZ:1,"%":"CSSStyleSheet|StyleSheet"},
cO:{"^":"Z;",$iscO:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
b_:{"^":"a2;",$isb_:1,"%":"TextTrack"},
b0:{"^":"a2;",$isb0:1,"%":"TextTrackCue|VTTCue"},
nq:{"^":"kK;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isb0")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b0]},
$asp:function(){return[W.b0]},
$isk:1,
$ask:function(){return[W.b0]},
$isd:1,
$asd:function(){return[W.b0]},
$asx:function(){return[W.b0]},
"%":"TextTrackCueList"},
nr:{"^":"f3;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isb_")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b_]},
$asp:function(){return[W.b_]},
$isk:1,
$ask:function(){return[W.b_]},
$isd:1,
$asd:function(){return[W.b_]},
$asx:function(){return[W.b_]},
"%":"TextTrackList"},
ns:{"^":"n;0j:length=","%":"TimeRanges"},
b2:{"^":"n;",$isb2:1,"%":"Touch"},
b3:{"^":"cR;",$isb3:1,"%":"TouchEvent"},
nt:{"^":"kQ;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isb2")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b2]},
$asp:function(){return[W.b2]},
$isk:1,
$ask:function(){return[W.b2]},
$isd:1,
$asd:function(){return[W.b2]},
$asx:function(){return[W.b2]},
"%":"TouchList"},
nu:{"^":"n;0j:length=","%":"TrackDefaultList"},
cR:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nw:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
nx:{"^":"a2;0j:length=","%":"VideoTrackList"},
bu:{"^":"a4;",
geh:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.w("deltaY is not supported"))},
geg:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.w("deltaX is not supported"))},
$isbu:1,
"%":"WheelEvent"},
jH:{"^":"a2;",
dV:function(a,b){return a.requestAnimationFrame(H.b9(H.c(b,{func:1,ret:-1,args:[P.V]}),1))},
dk:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nC:{"^":"lh;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isaQ")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aQ]},
$asp:function(){return[W.aQ]},
$isk:1,
$ask:function(){return[W.aQ]},
$isd:1,
$asd:function(){return[W.aQ]},
$asx:function(){return[W.aQ]},
"%":"CSSRuleList"},
nD:{"^":"hc;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bB(b,"$isa_",[P.V],"$asa_")
if(!z)return!1
z=J.aM(b)
return a.left===z.gaq(b)&&a.top===z.gaP(b)&&a.width===z.gaa(b)&&a.height===z.ga8(b)},
gP:function(a){return W.eT(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga8:function(a){return a.height},
gaa:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nF:{"^":"lj;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isaR")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aR]},
$asp:function(){return[W.aR]},
$isk:1,
$ask:function(){return[W.aR]},
$isd:1,
$asd:function(){return[W.aR]},
$asx:function(){return[W.aR]},
"%":"GamepadList"},
nG:{"^":"ll;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isE")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.E]},
$asp:function(){return[W.E]},
$isk:1,
$ask:function(){return[W.E]},
$isd:1,
$asd:function(){return[W.E]},
$asx:function(){return[W.E]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nH:{"^":"ln;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isaY")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aY]},
$asp:function(){return[W.aY]},
$isk:1,
$ask:function(){return[W.aY]},
$isd:1,
$asd:function(){return[W.aY]},
$asx:function(){return[W.aY]},
"%":"SpeechRecognitionResultList"},
nI:{"^":"lp;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.y(b)
H.e(c,"$isaZ")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.aZ]},
$asp:function(){return[W.aZ]},
$isk:1,
$ask:function(){return[W.aZ]},
$isd:1,
$asd:function(){return[W.aZ]},
$asx:function(){return[W.aZ]},
"%":"StyleSheetList"},
jW:{"^":"cN;a,b,c,$ti",
eA:function(a,b,c,d){var z=H.t(this,0)
H.c(a,{func:1,ret:-1,args:[z]})
H.c(c,{func:1,ret:-1})
return W.S(this.a,this.b,a,!1,z)}},
nE:{"^":"jW;a,b,c,$ti"},
jX:{"^":"ef;a,b,c,d,e,$ti",
e5:function(){var z=this.d
if(z!=null&&this.a<=0)J.fG(this.b,this.c,z,!1)},
m:{
S:function(a,b,c,d,e){var z=c==null?null:W.fk(new W.jY(c),W.a1)
z=new W.jX(0,a,b,z,!1,[e])
z.e5()
return z}}},
jY:{"^":"l:7;a",
$1:function(a){return this.a.$1(H.e(a,"$isa1"))}},
x:{"^":"b;$ti",
gT:function(a){return new W.dH(a,this.gj(a),-1,[H.aH(this,a,"x",0)])},
ae:function(a,b,c,d){H.u(d,H.aH(this,a,"x",0))
throw H.a(P.w("Cannot modify an immutable List."))}},
dH:{"^":"b;a,b,c,0d,$ti",
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.de(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
jQ:{"^":"n+h6;"},
jS:{"^":"n+p;"},
jT:{"^":"jS+x;"},
jU:{"^":"n+p;"},
jV:{"^":"jU+x;"},
jZ:{"^":"n+p;"},
k_:{"^":"jZ+x;"},
kb:{"^":"n+p;"},
kc:{"^":"kb+x;"},
kj:{"^":"n+aa;"},
kk:{"^":"n+aa;"},
kl:{"^":"n+p;"},
km:{"^":"kl+x;"},
kn:{"^":"n+p;"},
ko:{"^":"kn+x;"},
kr:{"^":"n+p;"},
ks:{"^":"kr+x;"},
ky:{"^":"n+aa;"},
eZ:{"^":"a2+p;"},
f_:{"^":"eZ+x;"},
kA:{"^":"n+p;"},
kB:{"^":"kA+x;"},
kE:{"^":"n+aa;"},
kJ:{"^":"n+p;"},
kK:{"^":"kJ+x;"},
f2:{"^":"a2+p;"},
f3:{"^":"f2+x;"},
kP:{"^":"n+p;"},
kQ:{"^":"kP+x;"},
lg:{"^":"n+p;"},
lh:{"^":"lg+x;"},
li:{"^":"n+p;"},
lj:{"^":"li+x;"},
lk:{"^":"n+p;"},
ll:{"^":"lk+x;"},
lm:{"^":"n+p;"},
ln:{"^":"lm+x;"},
lo:{"^":"n+p;"},
lp:{"^":"lo+x;"}}],["","",,P,{"^":"",
lK:function(a){var z,y
z=J.C(a)
if(!!z.$isbI){y=z.gck(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.f5(a.data,a.height,a.width)},
lJ:function(a){if(a instanceof P.f5)return{data:a.a,height:a.b,width:a.c}
return a},
aG:function(a){var z,y,x,w,v
if(a==null)return
z=P.dU(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w){v=H.F(y[w])
z.l(0,v,a[v])}return z},
lH:function(a,b){var z={}
a.D(0,new P.lI(z))
return z},
dD:function(){var z=$.dC
if(z==null){z=J.co(window.navigator.userAgent,"Opera",0)
$.dC=z}return z},
hb:function(){var z,y
z=$.dz
if(z!=null)return z
y=$.dA
if(y==null){y=J.co(window.navigator.userAgent,"Firefox",0)
$.dA=y}if(y)z="-moz-"
else{y=$.dB
if(y==null){y=!P.dD()&&J.co(window.navigator.userAgent,"Trident/",0)
$.dB=y}if(y)z="-ms-"
else z=P.dD()?"-o-":"-webkit-"}$.dz=z
return z},
kH:{"^":"b;",
cm:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
aX:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.C(a)
if(!!y.$isae)return new Date(a.a)
if(!!y.$isig)throw H.a(P.bM("structured clone of RegExp"))
if(!!y.$isaJ)return a
if(!!y.$iscr)return a
if(!!y.$isdG)return a
if(!!y.$isbI)return a
if(!!y.$ise0||!!y.$iscK)return a
if(!!y.$isD){x=this.cm(a)
w=this.b
if(x>=w.length)return H.i(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.D(a,new P.kI(z,this))
return z.a}if(!!y.$isd){x=this.cm(a)
z=this.b
if(x>=z.length)return H.i(z,x)
v=z[x]
if(v!=null)return v
return this.ee(a,x)}throw H.a(P.bM("structured clone of other type"))},
ee:function(a,b){var z,y,x,w
z=J.av(a)
y=z.gj(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.q(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.aX(z.k(a,w)))
return x}},
kI:{"^":"l:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.aX(b)}},
f5:{"^":"b;ck:a>,b,c",$isbI:1},
lI:{"^":"l:6;a",
$2:function(a,b){this.a[a]=b}},
f1:{"^":"kH;a,b"},
hl:{"^":"bY;a,b",
gaz:function(){var z,y,x
z=this.b
y=H.an(z,"p",0)
x=W.O
return new H.hN(new H.jF(z,H.c(new P.hm(),{func:1,ret:P.am,args:[y]}),[y]),H.c(new P.hn(),{func:1,ret:x,args:[y]}),[y,x])},
D:function(a,b){H.c(b,{func:1,ret:-1,args:[W.O]})
C.a.D(P.dX(this.gaz(),!1,W.O),b)},
l:function(a,b,c){var z
H.y(b)
H.e(c,"$isO")
z=this.gaz()
J.fJ(z.b.$1(J.cp(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
ae:function(a,b,c,d){throw H.a(P.w("Cannot fillRange on filtered list"))},
gj:function(a){return J.ai(this.gaz().a)},
k:function(a,b){var z=this.gaz()
return z.b.$1(J.cp(z.a,b))},
gT:function(a){var z=P.dX(this.gaz(),!1,W.O)
return new J.ao(z,z.length,0,[H.t(z,0)])},
$asp:function(){return[W.O]},
$ask:function(){return[W.O]},
$asd:function(){return[W.O]}},
hm:{"^":"l:26;",
$1:function(a){return!!J.C(H.e(a,"$isE")).$isO}},
hn:{"^":"l:27;",
$1:function(a){return H.ab(H.e(a,"$isE"),"$isO")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kd:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kt:{"^":"b;$ti",
gbI:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.u(z+this.c,H.t(this,0))},
gbn:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.u(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bB(b,"$isa_",[P.V],"$asa_")
if(!z)return!1
z=this.a
y=J.aM(b)
x=y.gaq(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaP(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.t(this,0)
if(H.u(z+this.c,w)===y.gbI(b)){if(typeof x!=="number")return x.F()
z=H.u(x+this.d,w)===y.gbn(b)}else z=!1}else z=!1}else z=!1
return z},
gP:function(a){var z,y,x,w,v
z=this.a
y=J.bD(z)
x=this.b
w=J.bD(x)
if(typeof z!=="number")return z.F()
v=H.t(this,0)
z=H.u(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.u(x+this.d,v)
return P.kd(P.cb(P.cb(P.cb(P.cb(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a_:{"^":"kt;aq:a>,aP:b>,aa:c>,a8:d>,$ti",m:{
ic:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.I()
if(c<0)z=-c*0
else z=c
H.u(z,e)
if(typeof d!=="number")return d.I()
if(d<0)y=-d*0
else y=d
return new P.a_(a,b,z,H.u(y,e),[e])}}}}],["","",,P,{"^":"",bl:{"^":"n;",$isbl:1,"%":"SVGLength"},mQ:{"^":"kf;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.y(b)
H.e(c,"$isbl")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){return this.k(a,b)},
$asp:function(){return[P.bl]},
$isk:1,
$ask:function(){return[P.bl]},
$isd:1,
$asd:function(){return[P.bl]},
$asx:function(){return[P.bl]},
"%":"SVGLengthList"},bo:{"^":"n;",$isbo:1,"%":"SVGNumber"},n3:{"^":"kq;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.y(b)
H.e(c,"$isbo")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){return this.k(a,b)},
$asp:function(){return[P.bo]},
$isk:1,
$ask:function(){return[P.bo]},
$isd:1,
$asd:function(){return[P.bo]},
$asx:function(){return[P.bo]},
"%":"SVGNumberList"},n9:{"^":"n;0j:length=","%":"SVGPointList"},ne:{"^":"eh;0U:type}","%":"SVGScriptElement"},nl:{"^":"kG;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.y(b)
H.F(c)
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){return this.k(a,b)},
$asp:function(){return[P.h]},
$isk:1,
$ask:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asx:function(){return[P.h]},
"%":"SVGStringList"},no:{"^":"eh;0U:type}","%":"SVGStyleElement"},eh:{"^":"O;",
gbs:function(a){return new P.hl(a,new W.jO(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bq:{"^":"n;",$isbq:1,"%":"SVGTransform"},nv:{"^":"kS;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.y(b)
H.e(c,"$isbq")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){return this.k(a,b)},
$asp:function(){return[P.bq]},
$isk:1,
$ask:function(){return[P.bq]},
$isd:1,
$asd:function(){return[P.bq]},
$asx:function(){return[P.bq]},
"%":"SVGTransformList"},ke:{"^":"n+p;"},kf:{"^":"ke+x;"},kp:{"^":"n+p;"},kq:{"^":"kp+x;"},kF:{"^":"n+p;"},kG:{"^":"kF+x;"},kR:{"^":"n+p;"},kS:{"^":"kR+x;"}}],["","",,P,{"^":"",H:{"^":"b;",$isk:1,
$ask:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$isiW:1}}],["","",,P,{"^":"",mr:{"^":"n;0j:length=","%":"AudioBuffer"},di:{"^":"a2;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},ms:{"^":"jN;",
k:function(a,b){return P.aG(a.get(H.F(b)))},
D:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
ga9:function(a){var z=H.f([],[P.h])
this.D(a,new P.fN(z))
return z},
gj:function(a){return a.size},
l:function(a,b,c){throw H.a(P.w("Not supported"))},
$asaa:function(){return[P.h,null]},
$isD:1,
$asD:function(){return[P.h,null]},
"%":"AudioParamMap"},fN:{"^":"l:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},fO:{"^":"di;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},mt:{"^":"a2;0j:length=","%":"AudioTrackList"},fR:{"^":"a2;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mu:{"^":"di;0U:type}","%":"BiquadFilterNode"},n6:{"^":"fR;0j:length=","%":"OfflineAudioContext"},n7:{"^":"fO;0U:type}","%":"Oscillator|OscillatorNode"},jN:{"^":"n+aa;"}}],["","",,P,{"^":"",cM:{"^":"n;",
f4:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.C(g)
if(!!z.$isbI)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.lJ(g))
return}if(!!z.$iscy)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bE("Incorrect number or type of arguments"))},
f3:function(a,b,c,d,e,f,g){return this.f4(a,b,c,d,e,f,g,null,null,null)},
$iscM:1,
"%":"WebGLRenderingContext"},j5:{"^":"n;",$isj5:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",nj:{"^":"kD;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.J(b,a,null,null,null))
return P.aG(a.item(b))},
l:function(a,b,c){H.y(b)
H.e(c,"$isD")
throw H.a(P.w("Cannot assign element of immutable List."))},
E:function(a,b){return this.k(a,b)},
$asp:function(){return[[P.D,,,]]},
$isk:1,
$ask:function(){return[[P.D,,,]]},
$isd:1,
$asd:function(){return[[P.D,,,]]},
$asx:function(){return[[P.D,,,]]},
"%":"SQLResultSetRowList"},kC:{"^":"n+p;"},kD:{"^":"kC+x;"}}],["","",,O,{"^":"",aP:{"^":"b;0a,0b,0c,0d,$ti",
bQ:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cT:function(a,b,c){var z={func:1,ret:-1,args:[P.m,[P.k,H.an(this,"aP",0)]]}
H.c(a,z)
H.c(c,z)
this.b=b
this.c=a
this.d=c},
b0:function(a,b){return this.cT(a,null,b)},
dO:function(a){H.z(a,"$isk",[H.an(this,"aP",0)],"$ask")
return!0},
d2:function(a,b){var z
H.z(b,"$isk",[H.an(this,"aP",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
gT:function(a){var z=this.a
return new J.ao(z,z.length,0,[H.t(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.an(this,"aP",0)
H.u(b,z)
z=[z]
if(this.dO(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d2(x,H.f([b],z))}},
$isk:1,
m:{
du:function(a){var z=new O.aP([a])
z.bQ(a)
return z}}},cH:{"^":"b;0a,0b",
gj:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
d3:function(a){var z=this.b
if(!(z==null))z.B(a)},
ag:function(){return this.d3(null)},
gaH:function(a){var z=this.a
if(z.length>0)return C.a.gaf(z)
else return V.c_()},
cF:function(a){var z=this.a
if(a==null)C.a.h(z,V.c_())
else C.a.h(z,a)
this.ag()},
bE:function(){var z=this.a
if(z.length>0){z.pop()
this.ag()}}}}],["","",,E,{"^":"",cq:{"^":"b;"},ax:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0V:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
bV:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ao(z,z.length,0,[H.t(z,0)]);z.C();){y=z.d
if(y.f==null)y.bV()}},
sbN:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.c(this.gcB(),{func:1,ret:-1,args:[D.o]})
C.a.S(y.a,x)}y=this.c
if(y!=null){y=y.gt()
y.toString
x=H.c(this.gcB(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}w=new D.M("shape",z,this.c,this,[F.ec])
w.b=!0
this.a0(w)}},
scI:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.c(this.gcC(),{func:1,ret:-1,args:[D.o]})
C.a.S(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gt()
z.toString
y=H.c(this.gcC(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}this.bV()
w=new D.M("technique",x,this.f,this,[O.cP])
w.b=!0
this.a0(w)}},
saI:function(a){var z,y,x,w
if(!J.T(this.r,a)){z=this.r
if(z!=null){y=z.gt()
y.toString
x=H.c(this.gcA(),{func:1,ret:-1,args:[D.o]})
C.a.S(y.a,x)}if(a!=null){y=a.gt()
y.toString
x=H.c(this.gcA(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)}this.r=a
w=new D.M("mover",z,a,this,[U.a7])
w.b=!0
this.a0(w)}},
at:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.au(0,b,this):null
if(!J.T(y,this.x)){x=this.x
this.x=y
w=new D.M("matrix",x,y,this,[V.bZ])
w.b=!0
this.a0(w)}for(z=this.y.a,z=new J.ao(z,z.length,0,[H.t(z,0)]);z.C();)z.d.at(0,b)},
ar:function(a){var z,y,x,w,v,u,t
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaH(z))
else C.a.h(z.a,y.p(0,z.gaH(z)))
z.ag()
a.cG(this.f)
z=a.dy
x=(z&&C.a).gaf(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.k(0,"Bumpy Debugging Shader")
if(w==null){z=a.a
w=new T.fS(z,"Bumpy Debugging Shader")
w.d0(z,"Bumpy Debugging Shader")
y=$.fU
v=$.fT
w.c=w.c1(y,35633)
w.d=w.c1(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.fo(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.L(P.a3("Failed to link shader: "+H.j(u)))}w.dY()
w.e_()
w.x=w.f.k(0,"posAttr")
w.y=w.f.k(0,"normAttr")
w.z=w.f.k(0,"binmAttr")
w.Q=w.f.k(0,"txtAttr")
w.ch=w.f.k(0,"weightAttr")
w.cx=H.ab(w.r.k(0,"bumpTxt"),"$iseE")
w.cy=H.ab(w.r.k(0,"objMat"),"$isc6")
w.db=H.ab(w.r.k(0,"viewMat"),"$isc6")
w.dx=H.ab(w.r.k(0,"projMat"),"$isc6")
w.dy=H.ab(w.r.k(0,"offsetScalar"),"$iseD")
if(a.fr.aU(0,"Bumpy Debugging Shader"))H.L(P.a3('Shader cache already contains a shader by the name "Bumpy Debugging Shader".'))
a.fr.l(0,"Bumpy Debugging Shader",w)}x.a=w
z=w}if(this.e==null){z=this.c
y=a.a
v=$.$get$aC()
t=$.$get$aB()
t=z.eb(new Z.jE(y),new Z.cW(v.a|t.a|$.$get$aA().a|$.$get$aD().a|$.$get$aE().a))
t.aF($.$get$aC()).e=x.a.x.c
t.aF($.$get$aB()).e=x.a.y.c
t.aF($.$get$aA()).e=x.a.z.c
t.aF($.$get$aD()).e=x.a.Q.c
v=t.aF($.$get$aE())
y=x.a
v.e=y.ch.c
this.e=t
z=y}y=x.b
if(y!=null){y.a=0
a.a.useProgram(z.e)
z.f.el()
y=x.b
if(y!=null){v=z.cx
v.toString
t=y.d
if(!t)v.a.uniform1i(v.d,0)
else{y=y.a
v.a.uniform1i(v.d,y)}}y=a.cy
y=y.gaH(y)
v=z.dx
v.toString
v.b1(y.bK(0,!0))
y=a.db
y=y.gaH(y)
v=z.db
v.toString
v.b1(y.bK(0,!0))
y=a.dx
y=y.gaH(y)
v=z.cy
v.toString
v.b1(y.bK(0,!0))
y=x.c
z=z.dy
z.a.uniform1f(z.d,y)
y=x.b
if(!y.c&&y.d){y.c=!0
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,y.b)}z=this.e
if(z instanceof Z.dn){z.bl(a)
z.ar(a)
z.fa(a)}else this.e=null
z=x.a
z.toString
a.a.useProgram(null)
z.f.ei()
z=x.b
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}}for(z=this.y.a,z=new J.ao(z,z.length,0,[H.t(z,0)]);z.C();)z.d.ar(a)
a.cE()
a.dx.bE()},
gt:function(){var z=this.z
if(z==null){z=D.I()
this.z=z}return z},
a0:function(a){var z=this.z
if(!(z==null))z.B(a)},
W:function(){return this.a0(null)},
eK:[function(a){H.e(a,"$iso")
this.e=null
this.a0(a)},function(){return this.eK(null)},"fN","$1","$0","gcB",0,2,2],
eL:[function(a){this.a0(H.e(a,"$iso"))},function(){return this.eL(null)},"fO","$1","$0","gcC",0,2,2],
eJ:[function(a){this.a0(H.e(a,"$iso"))},function(){return this.eJ(null)},"fM","$1","$0","gcA",0,2,2],
eH:[function(a){this.a0(H.e(a,"$iso"))},function(){return this.eH(null)},"fK","$1","$0","gcz",0,2,2],
fJ:[function(a,b){var z,y,x,w,v,u,t
H.z(b,"$isk",[E.ax],"$ask")
for(z=b.length,y=this.gcz(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.G)(b),++v){u=b[v]
if(u!=null){if(u.gV()==null){t=new D.bH()
t.a=H.f([],w)
t.c=0
u.sV(t)}t=u.gV()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.W()},"$2","geG",8,0,8],
fL:[function(a,b){var z,y,x,w,v,u,t
H.z(b,"$isk",[E.ax],"$ask")
for(z=b.length,y=this.gcz(),x={func:1,ret:-1,args:[D.o]},w=[x],v=0;v<b.length;b.length===z||(0,H.G)(b),++v){u=b[v]
if(u!=null){if(u.gV()==null){t=new D.bH()
t.a=H.f([],w)
t.c=0
u.sV(t)}t=u.gV()
t.toString
H.c(y,x)
C.a.S(t.a,y)}}this.W()},"$2","geI",8,0,8],
$ise_:1,
m:{
dF:function(a,b,c,d,e,f){var z,y
z=new E.ax()
z.a=d
z.b=!0
y=O.du(E.ax)
z.y=y
y.b0(z.geG(),z.geI())
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
z.sbN(0,e)
z.scI(f)
z.saI(c)
return z}}},ii:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
cZ:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ae(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cH()
y=[V.bZ]
z.a=H.f([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.o]}
v=H.c(new E.ik(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cH()
z.a=H.f([],y)
v=z.gt()
v.toString
x=H.c(new E.il(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cH()
z.a=H.f([],y)
y=z.gt()
y.toString
w=H.c(new E.im(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.cP])
this.dy=z
C.a.h(z,null)
this.fr=new H.aK(0,0,[P.h,A.eb])},
gav:function(){return this.a},
cG:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaf(z):a;(z&&C.a).h(z,y)},
cE:function(){var z=this.dy
if(z.length>1)z.pop()},
m:{
ij:function(a,b){var z=new E.ii(a,b)
z.cZ(a,b)
return z}}},ik:{"^":"l:11;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.z=null
z.ch=null}},il:{"^":"l:11;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},im:{"^":"l:11;a",
$1:function(a){var z
H.e(a,"$iso")
z=this.a
z.ch=null
z.cx=null}},iO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0V:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
d5:[function(a){var z
H.e(a,"$iso")
z=this.x
if(!(z==null))z.B(a)
this.eZ()},function(){return this.d5(null)},"d4","$1","$0","gbR",0,2,2],
ger:function(){var z,y,x
z=Date.now()
y=C.c.an(P.dE(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ae(z,!1)
return x/y},
c8:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return H.q(z)
x=C.d.bw(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.p()
w=C.d.bw(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.em(C.m,this.geY())},
eZ:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.c(new E.iQ(this),{func:1,ret:-1,args:[P.V]})
C.w.dk(z)
C.w.dV(z,W.fk(y,P.V))}},"$0","geY",0,0,3],
eW:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.c8()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ae(w,!1)
x.y=P.dE(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.ag()
w=x.db
C.a.sj(w.a,0)
w.ag()
w=x.dx
C.a.sj(w.a,0)
w.ag()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ar(this.e)}}catch(v){z=H.ah(v)
y=H.ba(v)
P.dd("Error: "+H.j(z))
P.dd("Stack: "+H.j(y))
throw H.a(z)}},
m:{
iP:function(a,b,c,d,e){var z,y,x,w
z=J.C(a)
if(!!z.$iscu)return E.el(a,!0,!0,!0,!1)
y=W.cv(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbs(a).h(0,y)
w=E.el(y,!0,!0,!0,!1)
w.a=a
return w},
el:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iO()
y=P.hE(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.h.aZ(a,"webgl",y)
x=H.e(x==null?C.h.aZ(a,"experimental-webgl",y):x,"$iscM")
if(x==null)H.L(P.a3("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ij(x,a)
w=new T.iM(x)
w.b=H.y(x.getParameter(3379))
w.c=H.y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jk(a)
v=new X.hz()
v.c=new X.aq(!1,!1,!1)
v.d=P.hG(null,null,null,P.m)
w.b=v
v=new X.hS(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hJ(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iT(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.ef,P.b]])
w.z=v
u=document
t=W.a4
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.S(u,"contextmenu",H.c(w.gdC(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.S(a,"focus",H.c(w.gdF(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.S(a,"blur",H.c(w.gdz(),q),!1,r))
v=w.z
p=W.bk
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.S(u,"keyup",H.c(w.gdH(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.S(u,"keydown",H.c(w.gdG(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.S(a,"mousedown",H.c(w.gdJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.S(a,"mouseup",H.c(w.gdL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.S(a,"mousemove",H.c(w.gdK(),s),!1,t))
p=w.z
o=W.bu;(p&&C.a).h(p,W.S(a,H.F(W.hg(a)),H.c(w.gdM(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.S(u,"mousemove",H.c(w.gdD(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.S(u,"mouseup",H.c(w.gdE(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.S(u,"pointerlockchange",H.c(w.gdN(),q),!1,r))
r=w.z
q=W.b3
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.S(a,"touchstart",H.c(w.gdS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.S(a,"touchend",H.c(w.gdQ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.S(a,"touchmove",H.c(w.gdR(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ae(Date.now(),!1)
z.ch=0
z.c8()
return z}}},iQ:{"^":"l:31;a",
$1:function(a){var z
H.me(a)
z=this.a
if(z.z){z.z=!1
z.eW()}}}}],["","",,Z,{"^":"",eN:{"^":"b;a,b",m:{
eO:function(a,b,c){var z
H.z(c,"$isd",[P.m],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.ce(c)),35044)
a.bindBuffer(b,null)
return new Z.eN(b,z)}}},dm:{"^":"cq;a,b,c,d,e",
bl:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ah(y)
x=P.a3('Failed to bind buffer attribute "'+J.a6(this.a)+'": '+H.j(z))
throw H.a(x)}},
i:function(a){return"["+J.a6(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},jE:{"^":"b;a",$ismv:1},dn:{"^":"b;a,0b,c,d",
aF:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bl:function(a){var z,y
z=this.a
a.gav().bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bl(a)},
fa:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.gav().bindBuffer(this.a.a,null)},
ar:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
a.gav().bindBuffer(v,x.b)
a.gav().drawElements(w.a,w.b,5123,0)
a.gav().bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.G)(x),++v)C.a.h(y,x[v].i(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a6(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.v(y,", ")+"\nAttrs:   "+C.a.v(u,", ")},
$isnp:1},cz:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aV(this.c)+"'")+"]"}},cW:{"^":"b;a",
gbO:function(a){var z,y
z=this.a
y=(z&$.$get$aC().a)!==0?3:0
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$aD().a)!==0)y+=2
if((z&$.$get$b5().a)!==0)y+=3
if((z&$.$get$bs().a)!==0)y+=3
if((z&$.$get$bt().a)!==0)y+=4
if((z&$.$get$aE().a)!==0)++y
return(z&$.$get$b4().a)!==0?y+4:y},
e9:function(a){var z,y,x
z=$.$get$aC()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b5()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bs()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bt()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b4()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eM()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cW))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.f([],[P.h])
y=this.a
if((y&$.$get$aC().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b5().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bs().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bt().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b4().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.v(z,"|")},
m:{
af:function(a){return new Z.cW(a)}}}}],["","",,D,{"^":"",ds:{"^":"b;"},bH:{"^":"b;0a,0b,0c",
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.o(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.D(y,new D.hk(z))
return x!==0},
ek:function(){return this.B(null)},
f_:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.B(y)}}},
aM:function(a){return this.f_(a,!0,!1)},
m:{
I:function(){var z=new D.bH()
z.a=H.f([],[{func:1,ret:-1,args:[D.o]}])
z.c=0
return z}}},hk:{"^":"l:48;a",
$1:function(a){var z
H.c(a,{func:1,ret:-1,args:[D.o]})
z=this.a.a
z.b
a.$1(z)}},o:{"^":"b;a,0b"},dL:{"^":"o;c,d,a,0b,$ti"},dM:{"^":"o;c,d,a,0b,$ti"},M:{"^":"o;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dp:{"^":"b;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
m:{"^":"mx<"}},dR:{"^":"b;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dR))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dS:{"^":"o;c,a,0b"},hz:{"^":"b;0a,0b,0c,0d",
eR:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dS(a,this)
y.b=!0
return z.B(y)},
eN:function(a){var z,y
this.c=a.b
this.d.S(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dS(a,this)
y.b=!0
return z.B(y)}},dY:{"^":"c1;x,y,c,d,e,a,0b"},hJ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ac:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ae(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.p()
v=b.b
u=this.ch
if(typeof v!=="number")return v.p()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gap()
s=new X.bm(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bD:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.B(this.ac(a,b))
return!0},
aK:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.cS()
if(typeof z!=="number")return z.aY()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.ac(a,b))
return!0},
aJ:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.ac(a,b))
return!0},
eS:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gap()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.p()
t=a.b
s=this.cy
if(typeof t!=="number")return t.p()
w=new X.cI(new V.P(v*u,t*s),y,x,new P.ae(w,!1),this)
w.b=!0
z.B(w)
return!0},
dI:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ae(Date.now(),!1)
y=this.f
x=new X.dY(c,a,this.a.gap(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=new V.R(0,0)}},aq:{"^":"b;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aq))return!1
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
return z+(this.c?"Shift+":"")}},bm:{"^":"c1;x,y,z,Q,ch,c,d,e,a,0b"},hS:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
b8:function(a,b,c){var z,y,x
z=new P.ae(Date.now(),!1)
y=this.a.gap()
x=new X.bm(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bD:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.b8(a,b,!0))
return!0},
aK:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.cS()
if(typeof z!=="number")return z.aY()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.b8(a,b,!0))
return!0},
aJ:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.b8(a,b,!1))
return!0},
eT:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gap()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.p()
u=a.b
t=this.ch
if(typeof u!=="number")return u.p()
x=new X.cI(new V.P(w*v,u*t),y,b,new P.ae(x,!1),this)
x.b=!0
z.B(x)
return!0},
gcl:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
gcL:function(){var z=this.c
if(z==null){z=D.I()
this.c=z}return z},
gcw:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z}},cI:{"^":"c1;x,c,d,e,a,0b"},c1:{"^":"o;"},eq:{"^":"c1;x,y,z,Q,ch,c,d,e,a,0b"},iT:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ac:function(a,b){var z,y,x,w
H.z(a,"$isd",[V.R],"$asd")
z=new P.ae(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gap()
w=new X.eq(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
eQ:function(a){var z
H.z(a,"$isd",[V.R],"$asd")
z=this.b
if(z==null)return!1
z.B(this.ac(a,!0))
return!0},
eO:function(a){var z
H.z(a,"$isd",[V.R],"$asd")
z=this.c
if(z==null)return!1
z.B(this.ac(a,!0))
return!0},
eP:function(a){var z
H.z(a,"$isd",[V.R],"$asd")
z=this.d
if(z==null)return!1
z.B(this.ac(a,!1))
return!0}},jk:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gap:function(){var z=this.a
return V.ea(0,0,(z&&C.h).gcj(z).c,C.h.gcj(z).d)},
c0:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dR(z,new X.aq(y,a.altKey,a.shiftKey))},
al:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aq(y,a.altKey,a.shiftKey)},
bj:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aq(y,a.altKey,a.shiftKey)},
ad:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.R(y-w,x-v)},
aA:function(a){return new V.P(a.movementX,a.movementY)},
bg:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.G)(x),++v){u=x[v]
t=C.d.a6(u.pageX)
C.d.a6(u.pageY)
s=z.left
C.d.a6(u.pageX)
C.a.h(y,new V.R(t-s,C.d.a6(u.pageY)-z.top))}return y},
ab:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dp(z,new X.aq(y,a.altKey,a.shiftKey))},
ba:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.G()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
fp:[function(a){this.f=!0},"$1","gdF",4,0,7],
fj:[function(a){this.f=!1},"$1","gdz",4,0,7],
fm:[function(a){H.e(a,"$isa4")
if(this.f&&this.ba(a))a.preventDefault()},"$1","gdC",4,0,4],
fs:[function(a){var z
H.e(a,"$isbk")
if(!this.f)return
z=this.c0(a)
if(this.b.eR(z))a.preventDefault()},"$1","gdH",4,0,19],
fq:[function(a){var z
H.e(a,"$isbk")
if(!this.f)return
z=this.c0(a)
if(this.b.eN(z))a.preventDefault()},"$1","gdG",4,0,19],
ft:[function(a){var z,y,x,w
H.e(a,"$isa4")
z=this.a
z.focus()
this.f=!0
this.al(a)
if(this.x){y=this.ab(a)
x=this.aA(a)
if(this.d.bD(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ab(a)
w=this.ad(a)
if(this.c.bD(y,w))a.preventDefault()},"$1","gdJ",4,0,4],
fv:[function(a){var z,y,x
H.e(a,"$isa4")
this.al(a)
z=this.ab(a)
if(this.x){y=this.aA(a)
if(this.d.aK(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aK(z,x))a.preventDefault()},"$1","gdL",4,0,4],
fo:[function(a){var z,y,x
H.e(a,"$isa4")
if(!this.ba(a)){this.al(a)
z=this.ab(a)
if(this.x){y=this.aA(a)
if(this.d.aK(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aK(z,x))a.preventDefault()}},"$1","gdE",4,0,4],
fu:[function(a){var z,y,x
H.e(a,"$isa4")
this.al(a)
z=this.ab(a)
if(this.x){y=this.aA(a)
if(this.d.aJ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aJ(z,x))a.preventDefault()},"$1","gdK",4,0,4],
fn:[function(a){var z,y,x
H.e(a,"$isa4")
if(!this.ba(a)){this.al(a)
z=this.ab(a)
if(this.x){y=this.aA(a)
if(this.d.aJ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aJ(z,x))a.preventDefault()}},"$1","gdD",4,0,4],
fw:[function(a){var z,y
H.e(a,"$isbu")
this.al(a)
z=new V.P((a&&C.v).geg(a),C.v.geh(a)).w(0,180)
if(this.x){if(this.d.eS(z))a.preventDefault()
return}if(this.r)return
y=this.ad(a)
if(this.c.eT(z,y))a.preventDefault()},"$1","gdM",4,0,35],
fz:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ab(this.y)
v=this.ad(this.y)
this.d.dI(w,v,x)}},"$1","gdN",4,0,7],
fD:[function(a){var z
H.e(a,"$isb3")
this.a.focus()
this.f=!0
this.bj(a)
z=this.bg(a)
if(this.e.eQ(z))a.preventDefault()},"$1","gdS",4,0,12],
fB:[function(a){var z
H.e(a,"$isb3")
this.bj(a)
z=this.bg(a)
if(this.e.eO(z))a.preventDefault()},"$1","gdQ",4,0,12],
fC:[function(a){var z
H.e(a,"$isb3")
this.bj(a)
z=this.bg(a)
if(this.e.eP(z))a.preventDefault()},"$1","gdR",4,0,12]}}],["","",,V,{"^":"",
mz:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","hP",8,0,32],
mn:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.aQ(a-b,z)
return(a<0?a+z:a)+b},
N:function(a,b,c){if(a==null)return C.b.a5("null",c)
return C.b.a5(C.d.cK($.r.$2(a,0)?0:a,b),c+b+1)},
ci:function(a,b,c){var z,y,x,w,v
H.z(a,"$isd",[P.v],"$asd")
z=H.f([],[P.h])
for(y=0,x=0;x<4;++x){w=V.N(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.i(z,v)
C.a.l(z,v,C.b.a5(z[v],y))}return z},
dc:function(a,b){return C.d.f6(Math.pow(b,C.D.bw(Math.log(H.lG(a))/Math.log(b))))},
bS:{"^":"b;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bS))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
bZ:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
bK:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
p:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
if(typeof u!=="number")return H.q(u)
t=this.d
s=a7.cx
r=a7.b
q=a7.f
p=a7.z
if(typeof p!=="number")return H.q(p)
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
if(typeof l!=="number")return H.q(l)
k=a7.db
j=a7.d
i=a7.x
h=a7.ch
g=a7.dx
f=this.e
e=this.f
d=this.r
c=this.x
b=this.y
if(typeof b!=="number")return b.p()
a=this.z
if(typeof a!=="number")return a.p()
a0=this.Q
if(typeof a0!=="number")return a0.p()
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.ay(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bZ))return!1
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
cn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.ci(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.ci(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.ci(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.ci(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
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
u:function(a){return this.cn(a,3,0)},
L:function(){return this.cn("",3,0)},
m:{
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c_:function(){return V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
R:{"^":"b;a,b",
G:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
c0:{"^":"b;a,b,c",
G:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.G()
if(typeof w!=="number")return H.q(w)
return new V.c0(this.a-z,this.b-y,x-w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c0))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
e6:{"^":"b;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e6))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
e9:{"^":"b;a,b,c,d",
gZ:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e9))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"},
m:{
ea:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e9(a,b,c,d)}}},
P:{"^":"b;a,b",
ey:[function(a){return Math.sqrt(this.H(this))},"$0","gj",1,0,20],
H:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.q(w)
return z*y+x*w},
p:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.P(z*b,y*b)},
w:function(a,b){var z,y
if($.r.$2(b,0))return new V.P(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.P(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
W:{"^":"b;a,b,c",
ey:[function(a){return Math.sqrt(this.H(this))},"$0","gj",1,0,20],
H:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.q(y)
return this.a*a.a+this.b*a.b+z*y},
aE:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.q(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.p()
v=a.a
u=this.a
return new V.W(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){var z,y
z=this.c
y=b.c
if(typeof z!=="number")return z.F()
if(typeof y!=="number")return H.q(y)
return new V.W(this.a+b.a,this.b+b.b,z+y)},
K:function(a){var z=this.c
if(typeof z!=="number")return z.K()
return new V.W(-this.a,-this.b,-z)},
w:function(a,b){var z
if($.r.$2(b,0))return new V.W(0,0,0)
z=this.c
if(typeof z!=="number")return z.w()
return new V.W(this.a/b,this.b/b,z/b)},
cv:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}}],["","",,U,{"^":"",h1:{"^":"ds;0a,0b,0c,0d,0e,0f,0r,0x,0y",
b3:function(a){var z=V.mn(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.I()
this.y=z}return z},
N:function(a){var z=this.y
if(!(z==null))z.B(a)},
sbL:function(a,b){},
sbA:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.b3(z)}z=new D.M("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.N(z)}},
sbC:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.b3(z)}z=new D.M("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.N(z)}},
sY:function(a,b){var z,y
b=this.b3(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.M("location",y,b,this,[P.v])
z.b=!0
this.N(z)}},
sbB:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.M("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.N(z)}},
sO:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.M("velocity",x,a,this,[P.v])
z.b=!0
this.N(z)}},
sbv:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.M("dampening",y,a,this,[P.v])
z.b=!0
this.N(z)}},
at:function(a,b){var z,y,x,w
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
y=w}this.sO(y)}},
m:{
cw:function(){var z=new U.h1()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dv:{"^":"a7;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
au:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dv))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}},dI:{"^":"aP;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
N:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.B(a)},function(){return this.N(null)},"a4","$1","$0","gak",0,2,2],
fi:[function(a,b){var z,y,x,w,v,u,t
z=U.a7
H.z(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gak(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.G)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.dL(a,b,this,[z])
z.b=!0
this.N(z)},"$2","gdw",8,0,21],
fA:[function(a,b){var z,y,x,w,v,u,t
z=U.a7
H.z(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gak(),w={func:1,ret:-1,args:[D.o]},v=0;v<b.length;b.length===y||(0,H.G)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.c(x,w)
C.a.S(t.a,x)}}z=new D.dM(a,b,this,[z])
z.b=!0
this.N(z)},"$2","gdP",8,0,21],
au:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.I()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ao(z,z.length,0,[H.t(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.au(0,b,c)
if(w!=null)x=x==null?w:w.p(0,x)}}this.f=x==null?V.c_():x
z=this.e
if(!(z==null))z.aM(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dI))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.T(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.a7]},
$asaP:function(){return[U.a7]},
$isa7:1},a7:{"^":"ds;"},jl:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.I()
this.cy=z}return z},
N:[function(a){var z
H.e(a,"$iso")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.N(null)},"a4","$1","$0","gak",0,2,2],
aC:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcl()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.c(this.gbb(),y)
C.a.h(z.a,x)
x=this.a.c.gcw()
x.toString
z=H.c(this.gbc(),y)
C.a.h(x.a,z)
z=this.a.c.gcL()
z.toString
y=H.c(this.gbd(),y)
C.a.h(z.a,y)
return!0},
ds:[function(a){H.e(a,"$iso")
if(!J.T(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbb",4,0,1],
dt:[function(a){var z,y,x,w,v,u,t
a=H.ab(H.e(a,"$iso"),"$isbm")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.H(z)
y=this.r
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.P(y.a,y.b).p(0,2).w(0,z.gZ())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.p()
x=this.e
if(typeof x!=="number")return H.q(x)
y.sO(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.P(x.a,x.b).p(0,2).w(0,z.gZ())
x=this.b
v=w.a
if(typeof v!=="number")return v.K()
u=this.e
if(typeof u!=="number")return H.q(u)
t=this.z
if(typeof t!=="number")return H.q(t)
x.sY(0,-v*u+t)
this.b.sO(0)
y=y.G(0,a.z)
this.Q=new V.P(y.a,y.b).p(0,2).w(0,z.gZ())}this.a4()},"$1","gbc",4,0,1],
du:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.H(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.p()
x=this.e
if(typeof x!=="number")return H.q(x)
z.sO(y*10*x)
this.a4()}},"$1","gbd",4,0,1],
au:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.I()
if(z<y){this.ch=y
x=b.y
this.b.at(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ay(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa7:1},jm:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.I()
this.fx=z}return z},
N:[function(a){var z
H.e(a,"$iso")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.N(null)},"a4","$1","$0","gak",0,2,2],
aC:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcl()
z.toString
y={func:1,ret:-1,args:[D.o]}
x=H.c(this.gbb(),y)
C.a.h(z.a,x)
x=this.a.c.gcw()
x.toString
z=H.c(this.gbc(),y)
C.a.h(x.a,z)
z=this.a.c.gcL()
z.toString
x=H.c(this.gbd(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.I()
x.f=z}x=H.c(this.gdn(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.I()
x.d=z}x=H.c(this.gdq(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.I()
x.b=z}x=H.c(this.ge4(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.I()
x.d=z}x=H.c(this.ge3(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.I()
x.c=z}y=H.c(this.ge2(),y)
C.a.h(z.a,y)
return!0},
a7:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.P(z,y)},
ds:[function(a){a=H.ab(H.e(a,"$iso"),"$isbm")
if(!J.T(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbb",4,0,1],
dt:[function(a){var z,y,x,w,v,u,t
a=H.ab(H.e(a,"$iso"),"$isbm")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.a7(new V.P(y.a,y.b).p(0,2).w(0,z.gZ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.a7(new V.P(x.a,x.b).p(0,2).w(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sY(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.G(0,a.z)
this.dx=this.a7(new V.P(y.a,y.b).p(0,2).w(0,z.gZ()))}this.a4()},"$1","gbc",4,0,1],
du:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sO(-y*10*z)
this.a4()}},"$1","gbd",4,0,1],
ff:[function(a){if(H.ab(H.e(a,"$iso"),"$isdY").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gdn",4,0,1],
fg:[function(a){var z,y,x,w,v,u,t
a=H.ab(H.e(a,"$iso"),"$isbm")
if(!J.T(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.a7(new V.P(x.a,x.b).p(0,2).w(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sY(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.G(0,a.z)
this.dx=this.a7(new V.P(y.a,y.b).p(0,2).w(0,z.gZ()))
this.a4()},"$1","gdq",4,0,1],
fH:[function(a){H.e(a,"$iso")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ge4",4,0,1],
fG:[function(a){var z,y,x,w,v,u,t
a=H.ab(H.e(a,"$iso"),"$iseq")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.P(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.a7(new V.P(y.a,y.b).p(0,2).w(0,z.gZ()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sO(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sO(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.a7(new V.P(x.a,x.b).p(0,2).w(0,z.gZ()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sY(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sY(0,-u*v+x)
this.b.sO(0)
this.c.sO(0)
y=y.G(0,a.z)
this.dx=this.a7(new V.P(y.a,y.b).p(0,2).w(0,z.gZ()))}this.a4()},"$1","ge3",4,0,1],
fF:[function(a){var z,y,x
H.e(a,"$iso")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sO(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sO(-y*10*z)
this.a4()}},"$1","ge2",4,0,1],
au:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.I()
if(z<y){this.dy=y
x=b.y
this.c.at(0,x)
this.b.at(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ay(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.p(0,V.ay(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa7:1},jn:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.I()
this.r=z}return z},
N:function(a){var z=this.r
if(!(z==null))z.B(a)},
aC:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.I()
z.e=y
z=y}else z=y
y=H.c(this.gdv(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.I()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
fh:[function(a){var z,y,x,w
H.e(a,"$iso")
if(!J.T(this.b,this.a.b.c))return
H.ab(a,"$iscI")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.p()
w=z+y*x
if(z!==w){this.d=w
z=new D.M("zoom",z,w,this,[P.v])
z.b=!0
this.N(z)}},"$1","gdv",4,0,1],
au:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ay(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa7:1}}],["","",,M,{"^":"",hi:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
ax:[function(a){var z
H.e(a,"$iso")
z=this.x
if(!(z==null))z.B(a)},function(){return this.ax(null)},"fc","$1","$0","gah",0,2,2],
fk:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ax
H.z(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.G)(b),++u){t=b[u]
if(t!=null){if(t.gV()==null){s=new D.bH()
s.a=H.f([],v)
s.c=0
t.sV(s)}s=t.gV()
s.toString
H.c(x,w)
C.a.h(s.a,x)}}z=new D.dL(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gdA",8,0,8],
fl:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ax
H.z(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.o]},v=[w],u=0;u<b.length;b.length===y||(0,H.G)(b),++u){t=b[u]
if(t!=null){if(t.gV()==null){s=new D.bH()
s.a=H.f([],v)
s.c=0
t.sV(s)}s=t.gV()
s.toString
H.c(x,w)
C.a.S(s.a,x)}}z=new D.dM(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gdB",8,0,8],
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
ar:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.cG(this.c)
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
if(typeof x!=="number")return H.q(x)
u=C.d.a6(v.a*x)
if(typeof w!=="number")return H.q(w)
t=C.d.a6(v.b*w)
s=C.d.a6(v.c*x)
a.c=s
v=C.d.a6(v.d*w)
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
s.cF(V.ay(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.e4
if(y==null){y=new V.W(0,0,-1)
m=y.w(0,Math.sqrt(y.H(y)))
y=new V.W(0,1,0).aE(m)
l=y.w(0,Math.sqrt(y.H(y)))
k=m.aE(l)
j=new V.W(0,0,0)
y=V.ay(l.a,k.a,m.a,l.K(0).H(j),l.b,k.b,m.b,k.K(0).H(j),l.c,k.c,m.c,m.K(0).H(j),0,0,0,1)
$.e4=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.p(0,i)}a.db.cF(i)
for(z=this.d.a,z=new J.ao(z,z.length,0,[H.t(z,0)]);z.C();)z.d.at(0,a)
for(z=this.d.a,z=new J.ao(z,z.length,0,[H.t(z,0)]);z.C();)z.d.ar(a)
this.a.toString
a.cy.bE()
a.db.bE()
this.b.toString
a.cE()},
$isnc:1}}],["","",,A,{"^":"",dh:{"^":"b;a,b,c"},fM:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
el:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ei:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eb:{"^":"cq;",
d0:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
c1:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fo(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.a3("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
dY:function(){var z,y,x,w,v,u
z=H.f([],[A.dh])
y=this.a
x=H.y(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dh(y,v.name,u))}this.f=new A.fM(z)},
e_:function(){var z,y,x,w,v,u
z=H.f([],[A.a5])
y=this.a
x=H.y(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.ef(v.type,v.size,v.name,u))}this.r=new A.j4(z)},
aj:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.iX(z,y,b,c)
else return A.cS(z,y,b,a,c)},
dh:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.eE(z,y,b,c)
else return A.cS(z,y,b,a,c)},
di:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.j8(z,y,b,c)
else return A.cS(z,y,b,a,c)},
aT:function(a,b){return new P.eR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
ef:function(a,b,c,d){switch(a){case 5120:return this.aj(b,c,d)
case 5121:return this.aj(b,c,d)
case 5122:return this.aj(b,c,d)
case 5123:return this.aj(b,c,d)
case 5124:return this.aj(b,c,d)
case 5125:return this.aj(b,c,d)
case 5126:return new A.eD(this.a,this.e,c,d)
case 35664:return new A.iZ(this.a,this.e,c,d)
case 35665:return new A.j0(this.a,this.e,c,d)
case 35666:return new A.j2(this.a,this.e,c,d)
case 35667:return new A.j_(this.a,this.e,c,d)
case 35668:return new A.j1(this.a,this.e,c,d)
case 35669:return new A.j3(this.a,this.e,c,d)
case 35674:return new A.j6(this.a,this.e,c,d)
case 35675:return new A.j7(this.a,this.e,c,d)
case 35676:return new A.c6(this.a,this.e,c,d)
case 35678:return this.dh(b,c,d)
case 35680:return this.di(b,c,d)
case 35670:throw H.a(this.aT("BOOL",c))
case 35671:throw H.a(this.aT("BOOL_VEC2",c))
case 35672:throw H.a(this.aT("BOOL_VEC3",c))
case 35673:throw H.a(this.aT("BOOL_VEC4",c))
default:throw H.a(P.a3("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},a5:{"^":"b;"},j4:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.L()},
eq:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.G)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.eq("\n")}},iX:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},j_:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},j1:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},j3:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iY:{"^":"a5;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
m:{
cS:function(a,b,c,d,e){var z=new A.iY(a,b,c,e)
z.f=d
z.e=P.hH(d,0,!1,P.m)
return z}}},eD:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iZ:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},j0:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},j2:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},j6:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},j7:{"^":"a5;a,b,c,d",
i:function(a){return"UniformMat3: "+H.j(this.c)}},c6:{"^":"a5;a,b,c,d",
b1:function(a){var z=new Float32Array(H.ce(H.z(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},eE:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},j8:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
lR:function(a,b,c){var z={}
z.a=b
z.a=new F.lS()
return F.mk(c,a,new F.lT(z),null)},
mk:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.c(c,{func:1,ret:-1,args:[F.br,P.v,P.v]})
if(a<1)return
if(b<1)return
z=new F.ec()
y=new F.jw(z)
y.b=!1
x=[F.br]
y.c=H.f([],x)
z.a=y
y=new F.iw(z)
y.b=H.f([],[F.e5])
z.b=y
y=new F.iv(z)
y.b=H.f([],[F.cF])
z.c=y
y=new F.iu(z)
y.b=H.f([],[F.aj])
z.d=y
z.e=null
w=H.f([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cV(null,null,new V.bS(x,0,0,1),null,null,new V.R(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.bu(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cV(null,null,new V.bS(o,n,m,1),null,null,new V.R(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.bu(d))}}z.d.e7(a+1,b+1,w)
return z},
lS:{"^":"l:40;",
$2:function(a,b){return 0}},
lT:{"^":"l:41;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
x=new V.c0(z,y,this.a.a.$2(b,c))
if(!J.T(a.f,x)){a.f=x
x=a.a
if(x!=null)x.W()}x=new V.W(z,y,1)
x=x.w(0,Math.sqrt(x.H(x)))
if(!J.T(a.z,x)){a.z=x
x=a.a
if(x!=null)x.W()}x=1-b
w=1-c
w=new V.e6(b*c,2+x*c,4+b*w,6+x*w)
if(!J.T(a.cx,w)){a.cx=w
x=a.a
if(x!=null)x.W()}}},
aj:{"^":"b;0a,0b,0c,0d,0e",
ej:function(){if(!this.gaV()){C.a.S(this.a.a.d.b,this)
this.a.a.W()}var z=this.a
if(z!=null){C.a.S(z.d.b,this)
this.a=null}z=this.b
if(z!=null){C.a.S(z.d.c,this)
this.b=null}z=this.c
if(z!=null){C.a.S(z.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
dc:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.W(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.cv())return
return v.w(0,Math.sqrt(v.H(v)))},
df:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.W(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.H(z)))
z=w.G(0,y)
z=new V.W(z.a,z.b,z.c)
z=v.aE(z.w(0,Math.sqrt(z.H(z))))
return z.w(0,Math.sqrt(z.H(z)))},
bq:function(){if(this.d!=null)return!0
var z=this.dc()
if(z==null){z=this.df()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
da:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.W(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.cv())return
return v.w(0,Math.sqrt(v.H(v)))},
de:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.r.$2(n,0)){z=r.G(0,u)
z=new V.W(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.H(z)))
if(o.a-p.a<0)m=m.K(0)}else{l=(z-q.b)/n
z=r.G(0,u)
y=z.c
if(typeof y!=="number")return y.p()
w=u.a
v=u.b
t=u.c
if(typeof t!=="number")return H.q(t)
t=new V.c0(z.a*l+w,z.b*l+v,y*l+t).G(0,x)
t=new V.W(t.a,t.b,t.c)
m=t.w(0,Math.sqrt(t.H(t)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.K(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.H(z)))
z=k.aE(m)
z=z.w(0,Math.sqrt(z.H(z))).aE(k)
m=z.w(0,Math.sqrt(z.H(z)))}return m},
bo:function(){if(this.e!=null)return!0
var z=this.da()
if(z==null){z=this.de()
if(z==null)return!1}this.e=z
this.a.a.W()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
u:function(a){var z,y
if(this.gaV())return a+"disposed"
z=a+C.b.a5(J.a6(this.a.e),0)+", "+C.b.a5(J.a6(this.b.e),0)+", "+C.b.a5(J.a6(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.u("")},
m:{
bU:function(a,b,c){var z,y,x
z=new F.aj()
y=a.a
if(y==null)H.L(P.a3("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.L(P.a3("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
cF:{"^":"b;0a,0b",
gaV:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
u:function(a){if(this.gaV())return a+"disposed"
return a+C.b.a5(J.a6(this.a.e),0)+", "+C.b.a5(J.a6(this.b.e),0)},
L:function(){return this.u("")}},
e5:{"^":"b;"},
ec:{"^":"b;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
eb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aC().a)!==0?1:0
if((y&$.$get$aB().a)!==0)++x
if((y&$.$get$aA().a)!==0)++x
if((y&$.$get$aD().a)!==0)++x
if((y&$.$get$b5().a)!==0)++x
if((y&$.$get$bs().a)!==0)++x
if((y&$.$get$bt().a)!==0)++x
if((y&$.$get$aE().a)!==0)++x
if((y&$.$get$b4().a)!==0)++x
w=b.gbO(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.v
t=H.f(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.f(y,[Z.dm])
for(r=0,q=0;q<x;++q){p=b.e9(q)
o=p.gbO(p)
C.a.l(s,q,new Z.dm(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].ez(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}H.z(t,"$isd",[u],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.ce(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dn(new Z.eN(34962,j),s,b)
i.b=H.f([],[Z.cz])
this.b.b
if(this.c.b.length!==0){u=P.m
h=H.f([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.ao()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.ao()
C.a.h(h,g.e)}f=Z.eO(y,34963,H.z(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.cz(1,h.length,f))}if(this.d.b.length!==0){u=P.m
h=H.f([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.ao()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.ao()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.ao()
C.a.h(h,g.e)}f=Z.eO(y,34963,H.z(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.cz(4,h.length,f))}return i},
i:function(a){var z=H.f([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.v(z,"\n")},
a0:function(a){var z=this.e
if(!(z==null))z.B(a)},
W:function(){return this.a0(null)}},
iu:{"^":"b;a,0b",
e7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.z(c,"$isd",[F.br],"$asd")
z=H.f([],[F.aj])
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
C.a.h(z,F.bU(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bU(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bU(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bU(q,n,r))}u=!u}w=!w}return z},
gj:function(a){return this.b.length},
eV:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y[z].ej()}C.a.sj(this.b,0)},
br:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.G)(z),++w)if(!z[w].bq())x=!1
return x},
bp:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.G)(z),++w)if(!z[w].bo())x=!1
return x},
i:function(a){return this.L()},
u:function(a){var z,y,x,w
z=H.f([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].u(a))
return C.a.v(z,"\n")},
L:function(){return this.u("")}},
iv:{"^":"b;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.L()},
u:function(a){var z,y,x,w
z=H.f([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].u(a+(""+x+". ")))}return C.a.v(z,"\n")},
L:function(){return this.u("")}},
iw:{"^":"b;a,0b",
gj:function(a){return 0},
i:function(a){return this.L()},
u:function(a){var z,y,x
z=H.f([],[P.h])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].u(a))}return C.a.v(z,"\n")},
L:function(){return this.u("")}},
br:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bu:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cV(this.cx,x,u,z,y,w,v,a,t)},
ed:function(){return this.bu(null)},
ez:function(a){var z,y
z=J.C(a)
if(z.q(a,$.$get$aC())){z=this.f
y=[P.v]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aB())){z=this.r
y=[P.v]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aA())){z=this.x
y=[P.v]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aD())){z=this.y
y=[P.v]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.q(a,$.$get$b5())){z=this.z
y=[P.v]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bs())){z=this.Q
y=[P.v]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bt())){z=this.Q
y=[P.v]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aE()))return H.f([this.ch],[P.v])
else if(z.q(a,$.$get$b4())){z=this.cx
y=[P.v]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.v])},
bq:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.W(0,0,0)
this.d.D(0,new F.jD(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.aM(0)}return!0},
bo:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.W(0,0,0)
this.d.D(0,new F.jC(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.aM(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
u:function(a){var z,y,x
z=H.f([],[P.h])
C.a.h(z,C.b.a5(J.a6(this.e),0))
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
C.a.h(z,V.N(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.v(z,", ")
return a+"{"+x+"}"},
L:function(){return this.u("")},
m:{
cV:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.br()
y=new F.jB(z)
y.b=H.f([],[F.e5])
z.b=y
y=new F.jA(z)
x=[F.cF]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.jx(z)
x=[F.aj]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$eK()
z.e=0
y=$.$get$aC()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aB().a)!==0?e:null
z.x=(x&$.$get$aA().a)!==0?b:null
z.y=(x&$.$get$aD().a)!==0?f:null
z.z=(x&$.$get$b5().a)!==0?g:null
z.Q=(x&$.$get$eL().a)!==0?c:null
z.ch=(x&$.$get$aE().a)!==0?i:0
z.cx=(x&$.$get$b4().a)!==0?a:null
return z}}},
jD:{"^":"l:9;a",
$1:function(a){var z,y
H.e(a,"$isaj")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
jC:{"^":"l:9;a",
$1:function(a){var z,y
H.e(a,"$isaj")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
jw:{"^":"b;a,0b,0c",
ao:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.a3("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.W()
return!0},
gj:function(a){return this.c.length},
br:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x)z[x].bq()
return!0},
bp:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x)z[x].bo()
return!0},
i:function(a){return this.L()},
u:function(a){var z,y,x,w
this.ao()
z=H.f([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].u(a))
return C.a.v(z,"\n")},
L:function(){return this.u("")}},
jx:{"^":"b;a,0b,0c,0d",
gj:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){H.c(b,{func:1,ret:-1,args:[F.aj]})
C.a.D(this.b,b)
C.a.D(this.c,new F.jy(this,b))
C.a.D(this.d,new F.jz(this,b))},
i:function(a){return this.L()},
u:function(a){var z,y,x,w
z=H.f([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].u(a))
return C.a.v(z,"\n")},
L:function(){return this.u("")}},
jy:{"^":"l:9;a,b",
$1:function(a){H.e(a,"$isaj")
if(!J.T(a.a,this.a))this.b.$1(a)}},
jz:{"^":"l:9;a,b",
$1:function(a){var z
H.e(a,"$isaj")
z=this.a
if(!J.T(a.a,z)&&!J.T(a.b,z))this.b.$1(a)}},
jA:{"^":"b;a,0b,0c",
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
u:function(a){var z,y,x,w
z=H.f([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.G)(y),++w)C.a.h(z,y[w].u(a))
return C.a.v(z,"\n")},
L:function(){return this.u("")}},
jB:{"^":"b;a,0b",
gj:function(a){return 0},
i:function(a){return this.L()},
u:function(a){var z,y,x
z=H.f([],[P.h])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].u(a))}return C.a.v(z,"\n")},
L:function(){return this.u("")}}}],["","",,O,{"^":"",cP:{"^":"b;"}}],["","",,T,{"^":"",iI:{"^":"cq;"},ek:{"^":"iI;0b,0c,0d,0e,0f,0r,0x,0y,a"},iM:{"^":"b;a,0b,0c,0d,0e",
eC:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.dJ(null,a,null)
w=new T.ek(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.I()
z=W.a1
W.S(x,"load",H.c(new T.iN(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
eB:function(a){return this.eC(a,!1,!1,!1,!1)},
dW:function(a,b,c){var z,y,x,w
b=V.dc(b,2)
z=V.dc(a.width,2)
y=V.dc(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cv(null,null)
x.width=z
x.height=y
w=H.e(C.h.cP(x,"2d"),"$isdr")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.lK(w.getImageData(0,0,x.width,x.height))}}},iN:{"^":"l:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.dW(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.T.f3(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.ek()}++x.e}}}],["","",,V,{"^":"",fL:{"^":"b;",
aG:function(a,b){return!0},
i:function(a){return"all"},
$isbK:1},bK:{"^":"b;"},dZ:{"^":"b;",
aG:["cX",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x)if(z[x].aG(0,b))return!0
return!1}],
i:["bP",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.G)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbK:1},bn:{"^":"dZ;0a",
aG:function(a,b){return!this.cX(0,b)},
i:function(a){return"!["+this.bP(0)+"]"}},is:{"^":"b;0a",
d_:function(a){var z,y
if(a.a.length<=0)throw H.a(P.a3("May not create a SetMatcher with zero characters."))
z=new H.aK(0,0,[P.m,P.am])
for(y=new H.dW(a,a.gj(a),0,[H.an(a,"p",0)]);y.C();)z.l(0,y.d,!0)
this.a=z},
aG:function(a,b){return this.a.aU(0,b)},
i:function(a){var z=this.a
return P.bL(z.ga9(z),0,null)},
$isbK:1,
m:{
a0:function(a){var z=new V.is()
z.d_(a)
return z}}},ee:{"^":"b;a,b,0c,0d",
geE:function(a){return this.b},
v:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.er(this.a.J(0,b))
w.a=H.f([],[V.bK])
w.c=!1
C.a.h(this.c,w)
return w},
en:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.G)(z),++x){w=z[x]
if(w.aG(0,a))return w}return},
i:function(a){return this.b}},eo:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.fB(this.b,"\n","\\n")
y=H.fB(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ep:{"^":"b;a,b,0c",
i:function(a){return this.b}},iS:{"^":"b;0a,0b,0c",
J:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.ee(this,b)
z.c=H.f([],[V.er])
this.a.l(0,b,z)}return z},
aO:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.ep(this,a)
y=P.h
z.c=new H.aK(0,0,[y,y])
this.b.l(0,a,z)}return z},
f9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.f([],[V.eo])
y=this.c
x=[P.m]
w=H.f([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.A(a,t)
r=y.en(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.bL(w,0,null)
throw H.a(P.a3("Untokenizable string [state: "+y.geE(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.f([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.bL(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eo(o==null?p.b:o,q,t)}++t}}}},er:{"^":"dZ;b,0c,0a",
i:function(a){return this.b.b+": "+this.bP(0)}}}],["","",,X,{"^":"",dq:{"^":"b;",$ise_:1},hp:{"^":"ei;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z}},hY:{"^":"b;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
ay:[function(a){var z
H.e(a,"$iso")
z=this.e
if(!(z==null))z.B(a)},function(){return this.ay(null)},"fd","$1","$0","gbS",0,2,2],
saI:function(a){var z,y,x
if(!J.T(this.a,a)){z=this.a
if(z!=null){z=z.gt()
z.toString
y=H.c(this.gbS(),{func:1,ret:-1,args:[D.o]})
C.a.S(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gt()
z.toString
y=H.c(this.gbS(),{func:1,ret:-1,args:[D.o]})
C.a.h(z.a,y)}z=new D.M("mover",x,this.a,this,[U.a7])
z.b=!0
this.ay(z)}},
$ise_:1,
$isdq:1},ei:{"^":"b;"}}],["","",,V,{"^":"",
mi:function(a){P.iR(C.B,new V.mj(a))},
mj:{"^":"l:44;a",
$1:function(a){H.e(a,"$isb1")
P.dd(C.d.cK(this.a.ger(),2)+" fps")}},
ia:{"^":"b;a,b,0c",
cf:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.c(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.c9().gaL().k(0,H.j(z))
if(y==null)if(d){c.$0()
this.aB(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bd(this.c).h(0,v)
t=W.hr("radio")
t.checked=x
t.name=z
z=W.a1
W.S(t,"change",H.c(new V.ib(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.bd(this.c).h(0,w.createElement("br"))},
X:function(a,b,c){return this.cf(a,b,c,!1)},
aB:function(a){var z,y,x,w,v
z=P.c9()
y=P.h
x=P.dV(z.gaL(),y,y)
x.l(0,this.a,a)
w=z.bG(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.f1([],[]).aX(""),"",v)}},
ib:{"^":"l:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.aB(this.d)}}},
ix:{"^":"b;0a,0b",
d1:function(a,b){var z,y,x,w,v,u,t
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
W.S(z,"scroll",H.c(new V.iA(x),{func:1,ret:-1,args:[t]}),!1,t)},
e8:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.z(a,"$isd",[P.h],"$asd")
this.dZ()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.f9(C.a.ex(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.G)(x),++v){u=x[v]
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
if(H.fA(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cd(C.O,s,C.f,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
e6:function(a){var z,y,x,w,v,u,t
H.z(a,"$isd",[P.h],"$asd")
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
x=H.e(w.insertCell(-1),"$iscO").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<2;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.e(w.insertCell(-1),"$iscO")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
dZ:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iS()
y=P.h
z.a=new H.aK(0,0,[y,V.ee])
z.b=new H.aK(0,0,[y,V.ep])
z.c=z.J(0,"Start")
y=z.J(0,"Start").v(0,"Bold")
x=V.a0(new H.X("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Bold").v(0,"Bold")
x=new V.bn()
w=[V.bK]
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.a0(new H.X("*"))
C.a.h(x.a,y)
y=z.J(0,"Bold").v(0,"BoldEnd")
x=V.a0(new H.X("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").v(0,"Italic")
x=V.a0(new H.X("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Italic").v(0,"Italic")
x=new V.bn()
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.a0(new H.X("_"))
C.a.h(x.a,y)
y=z.J(0,"Italic").v(0,"ItalicEnd")
x=V.a0(new H.X("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").v(0,"Code")
x=V.a0(new H.X("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Code").v(0,"Code")
x=new V.bn()
x.a=H.f([],w)
C.a.h(y.a,x)
y=V.a0(new H.X("`"))
C.a.h(x.a,y)
y=z.J(0,"Code").v(0,"CodeEnd")
x=V.a0(new H.X("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").v(0,"LinkHead")
x=V.a0(new H.X("["))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"LinkHead").v(0,"LinkTail")
x=V.a0(new H.X("|"))
C.a.h(y.a,x)
x=z.J(0,"LinkHead").v(0,"LinkEnd")
y=V.a0(new H.X("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkHead").v(0,"LinkHead")
y=new V.bn()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.a0(new H.X("|]"))
C.a.h(y.a,x)
x=z.J(0,"LinkTail").v(0,"LinkEnd")
y=V.a0(new H.X("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkTail").v(0,"LinkTail")
y=new V.bn()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.a0(new H.X("|]"))
C.a.h(y.a,x)
C.a.h(z.J(0,"Start").v(0,"Other").a,new V.fL())
x=z.J(0,"Other").v(0,"Other")
y=new V.bn()
y.a=H.f([],w)
C.a.h(x.a,y)
x=V.a0(new H.X("*_`["))
C.a.h(y.a,x)
x=z.J(0,"BoldEnd")
x.d=x.a.aO("Bold")
x=z.J(0,"ItalicEnd")
x.d=x.a.aO("Italic")
x=z.J(0,"CodeEnd")
x.d=x.a.aO("Code")
x=z.J(0,"LinkEnd")
x.d=x.a.aO("Link")
x=z.J(0,"Other")
x.d=x.a.aO("Other")
this.b=z},
m:{
iy:function(a,b){var z=new V.ix()
z.d1(a,!0)
return z}}},
iA:{"^":"l:13;a",
$1:function(a){P.em(C.m,new V.iz(this.a))}},
iz:{"^":"l:0;a",
$0:function(){var z,y,x
z=C.d.a6(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
iJ:{"^":"b;a,b,0c,d",
X:function(a,b,c){var z,y,x,w,v,u
z=W.dJ(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bd(this.c)
x=y.gj(y)
y=W.a4
W.S(z,"click",H.c(new V.iL(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bd(this.c).h(0,z)
J.bd(this.c).h(0,document.createElement("br"))
w=P.c9().gaL().k(0,H.j(this.a))
if(w==null){this.aB(x)
v=c}else{u=P.bC(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.X(a,b,!1)},
aB:function(a){var z,y,x,w,v
z=P.c9()
y=P.h
x=P.dV(z.gaL(),y,y)
x.l(0,this.a,H.j(a))
w=z.bG(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.f1([],[]).aX(""),"",v)}},
iL:{"^":"l:45;a,b,c,d",
$1:function(a){var z,y
H.e(a,"$isa4")
z=this.a
y=J.bd(z.c)
y.D(y,new V.iK())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.aB(this.d)}},
iK:{"^":"l:46;",
$1:function(a){var z
H.e(a,"$isO")
if(!!J.C(a).$iscy){z=a.style
z.border="solid 2px white"}}}}],["","",,T,{"^":"",
fw:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=V.iy("Test 008",!0)
y=W.cv(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.e8(H.f(["A custom shader for testing and fixing the normal distortion ","equation used for bump maps. This displays the normal vectors ","across a surface."],x))
z.e6(H.f(["bumpMaps","scalars"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.L(P.a3("Failed to find an element with the identifier, testCanvas."))
v=E.iP(w,!0,!0,!0,!1)
u=F.lR(50,null,50)
z=u.e
if(!(z==null))++z.c
u.d.br()
u.a.br()
z=u.e
if(!(z==null))z.aM(0)
z=u.e
if(!(z==null))++z.c
u.d.bp()
u.a.bp()
z=u.e
if(!(z==null))z.aM(0)
u.d.eV()
for(t=u.a.c.length-1;t>=0;--t){z=u.a.c
if(t>=z.length)return H.i(z,t)
s=z[t]
if(s.ch!==0){s.ch=0
z=s.a
if(z!=null){z=z.e
if(!(z==null))z.B(null)}}r=s.ed()
if(r.ch!==1){r.ch=1
z=r.a
if(z!=null){z=z.e
if(!(z==null))z.B(null)}}u.a.h(0,r)
z=u.c
z.a.a.h(0,s)
z.a.a.h(0,r)
z=new F.cF()
q=s.a
if(q==null)H.L(P.a3("May not create a line with a start vertex which is not attached to a shape."))
p=r.a
if(q==null?p!=null:q!==p)H.L(P.a3("May not create a line with vertices attached to different shapes."))
z.a=s
C.a.h(s.c.b,z)
z.b=r
C.a.h(r.c.c,z)
C.a.h(z.a.a.c.b,z)
z=z.a.a.e
if(!(z==null))z.B(null)}o=new T.fV()
o.c=1
o.sa_(0.5)
n=E.dF(null,!0,null,"",null,null)
n.sbN(0,u)
n.scI(o)
m=E.dF(null,!0,null,"",null,null)
m.y.h(0,n)
z=new U.dI()
z.bQ(U.a7)
z.b0(z.gdw(),z.gdP())
z.e=null
z.f=V.c_()
z.r=0
q=v.r
p=new U.jm()
l=U.cw()
l.sbL(0,!0)
l.sbA(6.283185307179586)
l.sbC(0)
l.sY(0,0)
l.sbB(100)
l.sO(0)
l.sbv(0.5)
p.b=l
l=l.gt()
l.toString
k={func:1,ret:-1,args:[D.o]}
j=H.c(p.gak(),k)
C.a.h(l.a,j)
l=U.cw()
l.sbL(0,!0)
l.sbA(6.283185307179586)
l.sbC(0)
l.sY(0,0)
l.sbB(100)
l.sO(0)
l.sbv(0.5)
p.c=l
C.a.h(l.gt().a,j)
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
i=new X.aq(!1,!1,!1)
h=p.d
p.d=i
l=[X.aq]
j=new D.M("modifiers",h,i,p,l)
j.b=!0
p.N(j)
j=p.f
if(j!==!1){p.f=!1
j=new D.M("invertX",j,!1,p,[P.am])
j.b=!0
p.N(j)}j=p.r
if(j!==!0){p.r=!0
j=new D.M("invertY",j,!0,p,[P.am])
j.b=!0
p.N(j)}p.aC(q)
z.h(0,p)
q=v.r
p=new U.jl()
j=U.cw()
j.sbL(0,!0)
j.sbA(6.283185307179586)
j.sbC(0)
j.sY(0,0)
j.sbB(100)
j.sO(0)
j.sbv(0.2)
p.b=j
j=j.gt()
j.toString
g=H.c(p.gak(),k)
C.a.h(j.a,g)
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
i=new X.aq(!0,!1,!1)
h=p.c
p.c=i
j=new D.M("modifiers",h,i,p,l)
j.b=!0
p.N(j)
p.aC(q)
z.h(0,p)
q=v.r
p=new U.jn()
p.c=0.01
p.d=0
p.e=0
i=new X.aq(!1,!1,!1)
p.b=i
l=new D.M("modifiers",null,i,p,l)
l.b=!0
p.N(l)
p.aC(q)
z.h(0,p)
m.saI(z)
z=new M.hi()
q=O.du(E.ax)
z.d=q
q.b0(z.gdA(),z.gdB())
z.e=null
z.f=null
z.r=null
z.x=null
f=new X.hY()
f.b=1.0471975511965976
f.c=0.1
f.d=2000
f.saI(null)
q=f.b
if(!$.r.$2(q,1.0471975511965976)){h=f.b
f.b=1.0471975511965976
q=new D.M("fov",h,1.0471975511965976,f,[P.v])
q.b=!0
f.ay(q)}q=f.c
if(!$.r.$2(q,0.1)){h=f.c
f.c=0.1
q=new D.M("near",h,0.1,f,[P.v])
q.b=!0
f.ay(q)}q=f.d
if(!$.r.$2(q,2000)){h=f.d
f.d=2000
q=new D.M("far",h,2000,f,[P.v])
q.b=!0
f.ay(q)}q=z.a
if(q!==f){if(q!=null){q=q.gt()
q.toString
p=H.c(z.gah(),k)
C.a.S(q.a,p)}h=z.a
z.a=f
q=f.gt()
q.toString
p=H.c(z.gah(),k)
C.a.h(q.a,p)
q=new D.M("camera",h,z.a,z,[X.dq])
q.b=!0
z.ax(q)}e=new X.hp()
q=new V.bS(0,0,0,1)
e.a=q
e.b=!0
e.c=2000
e.d=!0
e.e=0
e.f=!1
q=V.ea(0,0,1,1)
e.r=q
q=z.b
if(q!==e){if(q!=null){q=q.gt()
q.toString
p=H.c(z.gah(),k)
C.a.S(q.a,p)}h=z.b
z.b=e
q=e.gt()
q.toString
p=H.c(z.gah(),k)
C.a.h(q.a,p)
q=new D.M("target",h,z.b,z,[X.ei])
q.b=!0
z.ax(q)}z.d.h(0,m)
q=z.a
d=V.ay(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
p=new U.dv()
p.a=d
q.saI(p)
q=v.d
if(q!==z){if(q!=null){q=q.gt()
q.toString
p=H.c(v.gbR(),k)
C.a.S(q.a,p)}v.d=z
z=z.gt()
z.toString
k=H.c(v.gbR(),k)
C.a.h(z.a,k)
v.d4()}z=new V.iJ("bumpMaps",!0,new T.m1(o,v))
q=x.getElementById("bumpMaps")
z.c=q
if(q==null)H.L("Failed to find bumpMaps for Texture2DGroup")
z.X(0,"../resources/BumpMap1.png",!0)
z.h(0,"../resources/BumpMap2.png")
z.h(0,"../resources/BumpMap3.png")
z.h(0,"../resources/BumpMap4.png")
z.h(0,"../resources/BumpMap5.png")
z.h(0,"../resources/ScrewBumpMap.png")
z.h(0,"../resources/CtrlPnlBumpMap.png")
z=new V.ia("scalars",!0)
x=x.getElementById("scalars")
z.c=x
if(x==null)H.L("Failed to find scalars for RadioGroup")
z.X(0,"0.1",new T.m2(o))
z.X(0,"0.2",new T.m3(o))
z.X(0,"0.3",new T.m4(o))
z.X(0,"0.4",new T.m5(o))
z.cf(0,"0.5",new T.m6(o),!0)
z.X(0,"0.6",new T.m7(o))
z.X(0,"0.7",new T.m8(o))
z.X(0,"0.8",new T.m9(o))
z.X(0,"0.9",new T.ma(o))
z.X(0,"1.0",new T.mb(o))
V.mi(v)},
fS:{"^":"eb;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r"},
fV:{"^":"cP;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z},
bk:[function(a){var z
H.e(a,"$iso")
z=this.d
if(!(z==null))z.B(a)},function(){return this.bk(null)},"fE","$1","$0","gcc",0,2,2],
sa_:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
z=new D.M("offsetScalar",y,a,this,[P.v])
z.b=!0
this.bk(z)}}},
m1:{"^":"l:17;a,b",
$1:function(a){var z,y,x,w,v
z=this.a
y=this.b.f.eB(a)
x=z.b
if(x!==y){if(x!=null){x=x.y
w=H.c(z.gcc(),{func:1,ret:-1,args:[D.o]})
C.a.S(x.a,w)}v=z.b
z.b=y
y=y.y
x=H.c(z.gcc(),{func:1,ret:-1,args:[D.o]})
C.a.h(y.a,x)
y=new D.M("bumpyTexture",v,z.b,z,[T.ek])
y.b=!0
z.bk(y)}}},
m2:{"^":"l:0;a",
$0:function(){this.a.sa_(0.1)}},
m3:{"^":"l:0;a",
$0:function(){this.a.sa_(0.2)}},
m4:{"^":"l:0;a",
$0:function(){this.a.sa_(0.3)}},
m5:{"^":"l:0;a",
$0:function(){this.a.sa_(0.4)}},
m6:{"^":"l:0;a",
$0:function(){this.a.sa_(0.5)}},
m7:{"^":"l:0;a",
$0:function(){this.a.sa_(0.6)}},
m8:{"^":"l:0;a",
$0:function(){this.a.sa_(0.7)}},
m9:{"^":"l:0;a",
$0:function(){this.a.sa_(0.8)}},
ma:{"^":"l:0;a",
$0:function(){this.a.sa_(0.9)}},
mb:{"^":"l:0;a",
$0:function(){this.a.sa_(1)}}},1]]
setupProgram(dart,0,0)
J.C=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dP.prototype
return J.dO.prototype}if(typeof a=="string")return J.bX.prototype
if(a==null)return J.dQ.prototype
if(typeof a=="boolean")return J.hv.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.b)return a
return J.cj(a)}
J.av=function(a){if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.b)return a
return J.cj(a)}
J.bO=function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.b)return a
return J.cj(a)}
J.lP=function(a){if(typeof a=="number")return J.bW.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.d8=function(a){if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.aM=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.b)return a
return J.cj(a)}
J.T=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.C(a).q(a,b)}
J.fD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lP(a).I(a,b)}
J.de=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ft(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.av(a).k(a,b)}
J.cn=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ft(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.bO(a).l(a,b,c)}
J.fE=function(a,b){return J.d8(a).A(a,b)}
J.fF=function(a,b,c){return J.aM(a).dU(a,b,c)}
J.fG=function(a,b,c,d){return J.aM(a).cg(a,b,c,d)}
J.fH=function(a,b){return J.d8(a).R(a,b)}
J.co=function(a,b,c){return J.av(a).ec(a,b,c)}
J.cp=function(a,b){return J.bO(a).E(a,b)}
J.fI=function(a,b,c,d){return J.bO(a).ae(a,b,c,d)}
J.df=function(a,b){return J.bO(a).D(a,b)}
J.bd=function(a){return J.aM(a).gbs(a)}
J.bD=function(a){return J.C(a).gP(a)}
J.be=function(a){return J.bO(a).gT(a)}
J.ai=function(a){return J.av(a).gj(a)}
J.fJ=function(a,b){return J.aM(a).eX(a,b)}
J.fK=function(a,b){return J.aM(a).sU(a,b)}
J.a6=function(a){return J.C(a).i(a)}
I.ac=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.h=W.cu.prototype
C.C=J.n.prototype
C.a=J.aS.prototype
C.D=J.dO.prototype
C.c=J.dP.prototype
C.E=J.dQ.prototype
C.d=J.bW.prototype
C.b=J.bX.prototype
C.L=J.bJ.prototype
C.R=H.cL.prototype
C.S=W.hV.prototype
C.u=J.hZ.prototype
C.T=P.cM.prototype
C.n=J.c7.prototype
C.v=W.bu.prototype
C.w=W.jH.prototype
C.y=new P.fQ(!1)
C.x=new P.fP(C.y)
C.z=new P.hX()
C.A=new P.jv()
C.e=new P.ku()
C.m=new P.bh(0)
C.B=new P.bh(5e6)
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=H.f(I.ac([127,2047,65535,1114111]),[P.m])
C.i=H.f(I.ac([0,0,32776,33792,1,10240,0,0]),[P.m])
C.j=H.f(I.ac([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.k=H.f(I.ac([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.N=H.f(I.ac([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.O=H.f(I.ac([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.l=H.f(I.ac([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.r=H.f(I.ac([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.P=H.f(I.ac([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.t=H.f(I.ac([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.M=H.f(I.ac([]),[P.h])
C.Q=new H.h5(0,{},C.M,[P.h,P.h])
C.f=new P.jo(!1)
$.ap=0
$.bf=null
$.dk=null
$.d1=!1
$.fr=null
$.fl=null
$.fz=null
$.ch=null
$.cl=null
$.d9=null
$.b7=null
$.by=null
$.bz=null
$.d2=!1
$.K=C.e
$.dC=null
$.dB=null
$.dA=null
$.dz=null
$.r=V.hP()
$.e4=null
$.fU="uniform mat4 objMat;                                     \nuniform mat4 viewMat;                                    \nuniform mat4 projMat;                                    \nuniform sampler2D bumpTxt;                               \nuniform float offsetScalar;                              \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec3 normAttr;                                 \nattribute vec3 binmAttr;                                 \nattribute vec2 txtAttr;                                  \nattribute float weightAttr;                              \n                                                         \nvarying vec3 color;                                      \n                                                         \nvec3 bumpyNormal(vec3 color)                             \n{                                                        \n   vec3 n = normalize(objMat*vec4(normAttr, 0.0)).xyz;   \n   vec3 b = normalize(objMat*vec4(binmAttr, 0.0)).xyz;   \n   vec3 c = cross(b, n);                                 \n   b = cross(n, c);                                      \n   mat3 mat = mat3( b.x,  b.y,  b.z,                     \n                   -c.x, -c.y, -c.z,                     \n                    n.x,  n.y,  n.z);                    \n   return mat * normalize(2.0*color - 1.0);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   color = texture2D(bumpTxt, txtAttr).rgb;              \n   vec4 pnt = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n   if (weightAttr > 0.5)                                 \n   {                                                     \n     pnt += vec4(bumpyNormal(color)*offsetScalar, 0.0);  \n   }                                                     \n   gl_Position = pnt;                                    \n}                                                        \n"
$.fT="precision mediump float;            \n                                    \nvarying vec3 color;                 \n                                    \nvoid main()                         \n{                                   \n   gl_FragColor = vec4(color, 1.0); \n}                                   \n"
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
I.$lazy(y,x,w)}})(["dy","$get$dy",function(){return H.fq("_$dart_dartClosure")},"cC","$get$cC",function(){return H.fq("_$dart_js")},"es","$get$es",function(){return H.as(H.c5({
toString:function(){return"$receiver$"}}))},"et","$get$et",function(){return H.as(H.c5({$method$:null,
toString:function(){return"$receiver$"}}))},"eu","$get$eu",function(){return H.as(H.c5(null))},"ev","$get$ev",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ez","$get$ez",function(){return H.as(H.c5(void 0))},"eA","$get$eA",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ex","$get$ex",function(){return H.as(H.ey(null))},"ew","$get$ew",function(){return H.as(function(){try{null.$method$}catch(z){return z.message}}())},"eC","$get$eC",function(){return H.as(H.ey(void 0))},"eB","$get$eB",function(){return H.as(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cX","$get$cX",function(){return P.jI()},"bA","$get$bA",function(){return[]},"eJ","$get$eJ",function(){return P.js()},"eQ","$get$eQ",function(){return H.hT(H.ce(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fb","$get$fb",function(){return P.ih("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fh","$get$fh",function(){return P.lr()},"dw","$get$dw",function(){return{}},"eM","$get$eM",function(){return Z.af(0)},"eK","$get$eK",function(){return Z.af(511)},"aC","$get$aC",function(){return Z.af(1)},"aB","$get$aB",function(){return Z.af(2)},"aA","$get$aA",function(){return Z.af(4)},"aD","$get$aD",function(){return Z.af(8)},"b5","$get$b5",function(){return Z.af(16)},"bs","$get$bs",function(){return Z.af(32)},"bt","$get$bt",function(){return Z.af(64)},"eL","$get$eL",function(){return Z.af(96)},"aE","$get$aE",function(){return Z.af(128)},"b4","$get$b4",function(){return Z.af(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.B},{func:1,ret:-1,args:[D.o]},{func:1,ret:-1,opt:[D.o]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.B,args:[,,]},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[P.m,[P.k,E.ax]]},{func:1,ret:P.B,args:[F.aj]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[D.o]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.B,args:[W.a1]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.h,args:[P.m]},{func:1,args:[,]},{func:1,ret:P.B,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.m,[P.k,U.a7]]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.B,args:[,],opt:[,]},{func:1,args:[P.h]},{func:1,ret:P.am,args:[W.E]},{func:1,ret:W.O,args:[W.E]},{func:1,ret:P.m,args:[[P.d,P.m],P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[,P.h]},{func:1,ret:P.B,args:[P.V]},{func:1,ret:P.am,args:[P.v,P.v]},{func:1,ret:[P.D,P.h,P.h],args:[[P.D,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:-1,args:[P.b],opt:[P.ak]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.v,args:[P.v,P.v]},{func:1,ret:P.B,args:[F.br,P.v,P.v]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.B,args:[P.h,,]},{func:1,ret:P.B,args:[P.b1]},{func:1,ret:P.B,args:[W.a4]},{func:1,ret:P.B,args:[W.O]},{func:1,ret:P.H,args:[P.m]},{func:1,ret:P.B,args:[{func:1,ret:-1,args:[D.o]}]}]
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
if(x==y)H.ml(d||a)
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
Isolate.ac=a.ac
Isolate.d6=a.d6
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
if(typeof dartMainRunner==="function")dartMainRunner(T.fw,[])
else T.fw([])})})()
//# sourceMappingURL=test.dart.js.map
