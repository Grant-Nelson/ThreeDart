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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dS(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.c5=function(){}
var dart=[["","",,H,{"^":"",mC:{"^":"b;a"}}],["","",,J,{"^":"",
P:function(a){return void 0},
dY:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cV:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dV==null){H.lY()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.ft("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dl()]
if(v!=null)return v
v=H.m2(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.$get$dl(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
p:{"^":"b;",
u:function(a,b){return a===b},
gZ:function(a){return H.bT(a)},
i:["ew",function(a){return"Instance of '"+H.bq(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
i3:{"^":"p;",
i:function(a){return String(a)},
gZ:function(a){return a?519018:218159},
$isa8:1},
ex:{"^":"p;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gZ:function(a){return 0},
$isR:1},
dm:{"^":"p;",
gZ:function(a){return 0},
i:["ex",function(a){return String(a)}]},
iJ:{"^":"dm;"},
dJ:{"^":"dm;"},
cl:{"^":"dm;",
i:function(a){var z=a[$.$get$ed()]
if(z==null)return this.ex(a)
return"JavaScript function for "+H.k(J.at(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isde:1},
bn:{"^":"p;$ti",
h:function(a,b){H.E(b,H.A(a,0))
if(!!a.fixed$length)H.t(P.K("add"))
a.push(b)},
S:function(a,b){var z
if(!!a.fixed$length)H.t(P.K("remove"))
for(z=0;z<a.length;++z)if(J.Z(a[z],b)){a.splice(z,1)
return!0}return!1},
aH:function(a,b){var z,y
H.o(b,"$isf",[H.A(a,0)],"$asf")
if(!!a.fixed$length)H.t(P.K("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
N:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.A(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.bF(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.k(a[y]))
return z.join(b)},
ia:function(a){return this.B(a,"")},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bY:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.ao(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.ao(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.A(a,0)])
return H.a(a.slice(b,c),[H.A(a,0)])},
gcI:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.i1())},
al:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Z(a[z],b))return!0
return!1},
i:function(a){return P.di(a,"[","]")},
ga1:function(a){return new J.au(a,a.length,0,[H.A(a,0)])},
gZ:function(a){return H.bT(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.K("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.cw(b,"newLength",null))
if(b<0)throw H.d(P.ao(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b>=a.length||b<0)throw H.d(H.aJ(a,b))
return a[b]},
m:function(a,b,c){H.z(b)
H.E(c,H.A(a,0))
if(!!a.immutable$list)H.t(P.K("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b>=a.length||b<0)throw H.d(H.aJ(a,b))
a[b]=c},
$isF:1,
$asF:I.c5,
$isf:1,
$isc:1,
q:{
i2:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.cw(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ao(a,0,4294967295,"length",null))
return J.eu(new Array(a),b)},
eu:function(a,b){return J.bM(H.a(a,[b]))},
bM:function(a){H.ct(a)
a.fixed$length=Array
return a}}},
mB:{"^":"bn;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cI:{"^":"p;",
cv:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.e.gbT(b)
if(this.gbT(a)===z)return 0
if(this.gbT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbT:function(a){return a===0?1/a<0:a<0},
aa:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.K(""+a+".toInt()"))},
b5:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.K(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.K(""+a+".round()"))},
hU:function(a,b,c){if(C.e.cv(b,c)>0)throw H.d(H.aI(b))
if(this.cv(a,b)<0)return b
if(this.cv(a,c)>0)return c
return a},
em:function(a,b){var z
if(b>20)throw H.d(P.ao(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbT(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gZ:function(a){return a&0x1FFFFFFF},
cW:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ez:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dz(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.dz(a,b)},
dz:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.K("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
eu:function(a,b){if(b<0)throw H.d(H.aI(b))
return b>31?0:a<<b>>>0},
by:function(a,b){var z
if(a>0)z=this.hf(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hf:function(a,b){return b>31?0:a>>>b},
U:function(a,b){if(typeof b!=="number")throw H.d(H.aI(b))
return a<b},
$isy:1,
$isY:1},
ew:{"^":"cI;",
cO:function(a,b){var z=this.eu(1,b-1)
return((a&z-1)>>>0)-((a&z)>>>0)},
$isx:1},
ev:{"^":"cI;"},
dk:{"^":"p;",
cu:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b<0)throw H.d(H.aJ(a,b))
if(b>=a.length)H.t(H.aJ(a,b))
return a.charCodeAt(b)},
bu:function(a,b){if(b>=a.length)throw H.d(H.aJ(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.U(b)
if(typeof b!=="string")throw H.d(P.cw(b,null,null))
return a+b},
bZ:function(a,b,c){H.z(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.cM(b,null,null))
if(b>c)throw H.d(P.cM(b,null,null))
if(c>a.length)throw H.d(P.cM(c,null,null))
return a.substring(b,c)},
cY:function(a,b){return this.bZ(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.x)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iq:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
aN:function(a,b){return this.iq(a,b," ")},
hV:function(a,b,c){if(c>a.length)throw H.d(P.ao(c,0,a.length,null,null))
return H.h8(a,b,c)},
i:function(a){return a},
gZ:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isF:1,
$asF:I.c5,
$iseO:1,
$isn:1}}],["","",,H,{"^":"",
i1:function(){return new P.jp("No element")},
a9:{"^":"jW;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.cu(this.a,b)},
$asdK:function(){return[P.x]},
$asw:function(){return[P.x]},
$asf:function(){return[P.x]},
$asc:function(){return[P.x]}},
hJ:{"^":"f;"},
eB:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.bg(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.bF(z))
w=this.c
if(typeof x!=="number")return H.e(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
ik:{"^":"f;a,b,$ti",
ga1:function(a){return new H.il(J.bC(this.a),this.b,this.$ti)},
gl:function(a){return J.bD(this.a)},
J:function(a,b){return this.b.$1(J.d_(this.a,b))},
$asf:function(a,b){return[b]}},
il:{"^":"dj;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$asdj:function(a,b){return[b]}},
kb:{"^":"f;a,b,$ti",
ga1:function(a){return new H.kc(J.bC(this.a),this.b,this.$ti)}},
kc:{"^":"dj;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cE:{"^":"b;$ti"},
dK:{"^":"b;$ti",
m:function(a,b,c){H.z(b)
H.E(c,H.aA(this,"dK",0))
throw H.d(P.K("Cannot modify an unmodifiable list"))}},
jW:{"^":"cJ+dK;"}}],["","",,H,{"^":"",
lT:function(a){return init.types[H.z(a)]},
m0:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.P(a).$isI},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.at(a)
if(typeof z!=="string")throw H.d(H.aI(a))
return z},
bT:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iV:function(a,b){var z,y
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.i(z,3)
y=H.U(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
bq:function(a){var z,y,x,w,v,u,t,s,r
z=J.P(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.D||!!J.P(a).$isdJ){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.bu(w,0)===36)w=C.i.cY(w,1)
r=H.dW(H.ct(H.bh(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
eR:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iX:function(a){var z,y,x,w
z=H.a([],[P.x])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aI(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.by(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aI(w))}return H.eR(z)},
eS:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aI(x))
if(x<0)throw H.d(H.aI(x))
if(x>65535)return H.iX(a)}return H.eR(a)},
iW:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.by(z,10))>>>0,56320|z&1023)}throw H.d(P.ao(a,0,1114111,null,null))},
aj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iU:function(a){return a.b?H.aj(a).getUTCFullYear()+0:H.aj(a).getFullYear()+0},
iS:function(a){return a.b?H.aj(a).getUTCMonth()+1:H.aj(a).getMonth()+1},
iO:function(a){return a.b?H.aj(a).getUTCDate()+0:H.aj(a).getDate()+0},
iP:function(a){return a.b?H.aj(a).getUTCHours()+0:H.aj(a).getHours()+0},
iR:function(a){return a.b?H.aj(a).getUTCMinutes()+0:H.aj(a).getMinutes()+0},
iT:function(a){return a.b?H.aj(a).getUTCSeconds()+0:H.aj(a).getSeconds()+0},
iQ:function(a){return a.b?H.aj(a).getUTCMilliseconds()+0:H.aj(a).getMilliseconds()+0},
e:function(a){throw H.d(H.aI(a))},
i:function(a,b){if(a==null)J.bD(a)
throw H.d(H.aJ(a,b))},
aJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,"index",null)
z=H.z(J.bD(a))
if(!(b<0)){if(typeof z!=="number")return H.e(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cM(b,"index",null)},
lP:function(a,b,c){if(a>c)return new P.cL(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cL(a,c,!0,b,"end","Invalid value")
return new P.aK(!0,b,"end",null)},
aI:function(a){return new P.aK(!0,a,null,null)},
lK:function(a){if(typeof a!=="number")throw H.d(H.aI(a))
return a},
d:function(a){var z
if(a==null)a=new P.eN()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ha})
z.name=""}else z.toString=H.ha
return z},
ha:function(){return J.at(this.dartException)},
t:function(a){throw H.d(a)},
B:function(a){throw H.d(P.bF(a))},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.by(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dn(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eM(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fc()
u=$.$get$fd()
t=$.$get$fe()
s=$.$get$ff()
r=$.$get$fj()
q=$.$get$fk()
p=$.$get$fh()
$.$get$fg()
o=$.$get$fm()
n=$.$get$fl()
m=v.ai(y)
if(m!=null)return z.$1(H.dn(H.U(y),m))
else{m=u.ai(y)
if(m!=null){m.method="call"
return z.$1(H.dn(H.U(y),m))}else{m=t.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=r.ai(y)
if(m==null){m=q.ai(y)
if(m==null){m=p.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=o.ai(y)
if(m==null){m=n.ai(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eM(H.U(y),m))}}return z.$1(new H.jV(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f0()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aK(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f0()
return a},
bA:function(a){var z
if(a==null)return new H.fJ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fJ(a)},
lS:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
m_:function(a,b,c,d,e,f){H.h(a,"$isde")
switch(H.z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.r("Unsupported number of arguments for wrapped closure"))},
bx:function(a,b){var z
H.z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m_)
a.$identity=z
return z},
hx:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.P(d).$isc){z.$reflectionInfo=d
x=H.j_(z).r}else x=d
w=e?Object.create(new H.jr().constructor.prototype):Object.create(new H.d2(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aB
if(typeof u!=="number")return u.n()
$.aB=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e8(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lT,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.e3:H.d3
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e8(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hu:function(a,b,c,d){var z=H.d3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e8:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hw(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hu(y,!w,z,b)
if(y===0){w=$.aB
if(typeof w!=="number")return w.n()
$.aB=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bE
if(v==null){v=H.cy("self")
$.bE=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aB
if(typeof w!=="number")return w.n()
$.aB=w+1
t+=w
w="return function("+t+"){return this."
v=$.bE
if(v==null){v=H.cy("self")
$.bE=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
hv:function(a,b,c,d){var z,y
z=H.d3
y=H.e3
switch(b?-1:a){case 0:throw H.d(H.j8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hw:function(a,b){var z,y,x,w,v,u,t,s
z=$.bE
if(z==null){z=H.cy("self")
$.bE=z}y=$.e2
if(y==null){y=H.cy("receiver")
$.e2=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hv(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aB
if(typeof y!=="number")return y.n()
$.aB=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aB
if(typeof y!=="number")return y.n()
$.aB=y+1
return new Function(z+y+"}")()},
dS:function(a,b,c,d,e,f,g){var z,y
z=J.bM(H.ct(b))
H.z(c)
y=!!J.P(d).$isc?J.bM(d):d
return H.hx(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ay(a,"String"))},
lQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ay(a,"double"))},
m6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ay(a,"num"))},
fY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ay(a,"bool"))},
z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ay(a,"int"))},
h6:function(a,b){throw H.d(H.ay(a,H.U(b).substring(3)))},
m8:function(a,b){var z=J.bg(b)
throw H.d(H.hs(a,z.bZ(b,3,z.gl(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.h6(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else z=!0
if(z)return a
H.m8(a,b)},
ct:function(a){if(a==null)return a
if(!!J.P(a).$isc)return a
throw H.d(H.ay(a,"List"))},
m1:function(a,b){if(a==null)return a
if(!!J.P(a).$isc)return a
if(J.P(a)[b])return a
H.h6(a,b)},
fZ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.z(z)]
else return a.$S()}return},
cr:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fZ(J.P(a))
if(z==null)return!1
y=H.h2(z,null,b,null)
return y},
m:function(a,b){var z,y
if(a==null)return a
if($.dO)return a
$.dO=!0
try{if(H.cr(a,b))return a
z=H.cu(b)
y=H.ay(a,z)
throw H.d(y)}finally{$.dO=!1}},
dT:function(a,b){if(a!=null&&!H.dR(a,b))H.t(H.ay(a,H.cu(b)))
return a},
fT:function(a){var z
if(a instanceof H.u){z=H.fZ(J.P(a))
if(z!=null)return H.cu(z)
return"Closure"}return H.bq(a)},
mb:function(a){throw H.d(new P.hC(H.U(a)))},
h_:function(a){return init.getIsolateTag(a)},
a:function(a,b){a.$ti=b
return a},
bh:function(a){if(a==null)return
return a.$ti},
nq:function(a,b,c){return H.bB(a["$as"+H.k(c)],H.bh(b))},
bz:function(a,b,c,d){var z
H.U(c)
H.z(d)
z=H.bB(a["$as"+H.k(c)],H.bh(b))
return z==null?null:z[d]},
aA:function(a,b,c){var z
H.U(b)
H.z(c)
z=H.bB(a["$as"+H.k(b)],H.bh(a))
return z==null?null:z[c]},
A:function(a,b){var z
H.z(b)
z=H.bh(a)
return z==null?null:z[b]},
cu:function(a){var z=H.bi(a,null)
return z},
bi:function(a,b){var z,y
H.o(b,"$isc",[P.n],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dW(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.k(b[y])}if('func' in a)return H.lA(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.o(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.a([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.n(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bi(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bi(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bi(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bi(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lR(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.U(z[l])
n=n+m+H.bi(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dW:function(a,b,c){var z,y,x,w,v,u
H.o(c,"$isc",[P.n],"$asc")
if(a==null)return""
z=new P.cp("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bi(u,c)}v="<"+z.i(0)+">"
return v},
bB:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c4:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bh(a)
y=J.P(a)
if(y[b]==null)return!1
return H.fW(H.bB(y[d],z),null,c,null)},
o:function(a,b,c,d){var z,y
H.U(b)
H.ct(c)
H.U(d)
if(a==null)return a
z=H.c4(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dW(c,0,null)
throw H.d(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fW:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.as(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.as(a[y],b,c[y],d))return!1
return!0},
no:function(a,b,c){return a.apply(b,H.bB(J.P(b)["$as"+H.k(c)],H.bh(b)))},
h3:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="R"||a===-1||a===-2||H.h3(z)}return!1},
dR:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="R"||b===-1||b===-2||H.h3(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dR(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cr(a,b)}y=J.P(a).constructor
x=H.bh(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.as(y,null,b,null)
return z},
E:function(a,b){if(a!=null&&!H.dR(a,b))throw H.d(H.ay(a,H.cu(b)))
return a},
as:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.as(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="R")return!0
if('func' in c)return H.h2(a,b,c,d)
if('func' in a)return c.builtin$cls==="de"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.as("type" in a?a.type:null,b,x,d)
else if(H.as(a,b,x,d))return!0
else{if(!('$is'+"bG" in y.prototype))return!1
w=y.prototype["$as"+"bG"]
v=H.bB(w,z?a.slice(1):null)
return H.as(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cu(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fW(H.bB(r,z),b,u,d)},
h2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.m5(m,b,l,d)},
m5:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.as(c[w],d,a[w],b))return!1}return!0},
np:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
m2:function(a){var z,y,x,w,v,u
z=H.U($.h0.$1(a))
y=$.cU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.fV.$2(a,z))
if(z!=null){y=$.cU[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cW[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cX(x)
$.cU[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cW[z]=x
return x}if(v==="-"){u=H.cX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h5(a,x)
if(v==="*")throw H.d(P.ft(z))
if(init.leafTags[z]===true){u=H.cX(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h5(a,x)},
h5:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dY(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cX:function(a){return J.dY(a,!1,null,!!a.$isI)},
m4:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cX(z)
else return J.dY(z,c,null,null)},
lY:function(){if(!0===$.dV)return
$.dV=!0
H.lZ()},
lZ:function(){var z,y,x,w,v,u,t,s
$.cU=Object.create(null)
$.cW=Object.create(null)
H.lU()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h7.$1(v)
if(u!=null){t=H.m4(v,z[v],u)
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
z=H.bw(C.F,H.bw(C.K,H.bw(C.p,H.bw(C.p,H.bw(C.J,H.bw(C.G,H.bw(C.H(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h0=new H.lV(v)
$.fV=new H.lW(u)
$.h7=new H.lX(t)},
bw:function(a,b){return a(b)||b},
h8:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h9:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
iZ:{"^":"b;a,b,c,d,e,f,r,0x",q:{
j_:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bM(z)
y=z[0]
x=z[1]
return new H.iZ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jJ:{"^":"b;a,b,c,d,e,f",
ai:function(a){var z,y,x
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
aG:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.a([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cP:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fi:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iE:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
eM:function(a,b){return new H.iE(a,b==null?null:b.method)}}},
i6:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
q:{
dn:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i6(a,y,z?null:b.receiver)}}},
jV:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mc:{"^":"u:18;a",
$1:function(a){if(!!J.P(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fJ:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isax:1},
u:{"^":"b;",
i:function(a){return"Closure '"+H.bq(this).trim()+"'"},
geo:function(){return this},
$isde:1,
geo:function(){return this}},
f5:{"^":"u;"},
jr:{"^":"f5;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d2:{"^":"f5;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d2))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gZ:function(a){var z,y
z=this.c
if(z==null)y=H.bT(this.a)
else y=typeof z!=="object"?J.bj(z):H.bT(z)
return(y^H.bT(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bq(z)+"'")},
q:{
d3:function(a){return a.a},
e3:function(a){return a.c},
cy:function(a){var z,y,x,w,v
z=new H.d2("self","target","receiver","name")
y=J.bM(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jK:{"^":"a5;a",
i:function(a){return this.a},
q:{
ay:function(a,b){return new H.jK("TypeError: "+H.k(P.cD(a))+": type '"+H.fT(a)+"' is not a subtype of type '"+b+"'")}}},
hr:{"^":"a5;a",
i:function(a){return this.a},
q:{
hs:function(a,b){return new H.hr("CastError: "+H.k(P.cD(a))+": type '"+H.fT(a)+"' is not a subtype of type '"+b+"'")}}},
j7:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
q:{
j8:function(a){return new H.j7(a)}}},
aN:{"^":"ii;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaM:function(a){return new H.eA(this,[H.A(this,0)])},
dI:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dh(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dh(y,b)}else return this.i8(b)},
i8:function(a){var z=this.d
if(z==null)return!1
return this.cH(this.c7(z,J.bj(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bv(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bv(w,b)
x=y==null?null:y.b
return x}else return this.i9(b)},
i9:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c7(z,J.bj(a)&0x3ffffff)
x=this.cH(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y,x,w,v,u
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c9()
this.b=z}this.d6(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c9()
this.c=y}this.d6(y,b,c)}else{x=this.d
if(x==null){x=this.c9()
this.d=x}w=J.bj(b)&0x3ffffff
v=this.c7(x,w)
if(v==null)this.cf(x,w,[this.ca(b,c)])
else{u=this.cH(v,b)
if(u>=0)v[u].b=c
else v.push(this.ca(b,c))}}},
N:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.A(this,0),H.A(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.bF(this))
z=z.c}},
d6:function(a,b,c){var z
H.E(b,H.A(this,0))
H.E(c,H.A(this,1))
z=this.bv(a,b)
if(z==null)this.cf(a,b,this.ca(b,c))
else z.b=c},
fn:function(){this.r=this.r+1&67108863},
ca:function(a,b){var z,y
z=new H.ia(H.E(a,H.A(this,0)),H.E(b,H.A(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fn()
return z},
cH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Z(a[y].a,b))return y
return-1},
i:function(a){return P.eE(this)},
bv:function(a,b){return a[b]},
c7:function(a,b){return a[b]},
cf:function(a,b,c){a[b]=c},
fe:function(a,b){delete a[b]},
dh:function(a,b){return this.bv(a,b)!=null},
c9:function(){var z=Object.create(null)
this.cf(z,"<non-identifier-key>",z)
this.fe(z,"<non-identifier-key>")
return z},
$isez:1},
ia:{"^":"b;a,b,0c,0d"},
eA:{"^":"hJ;a,$ti",
gl:function(a){return this.a.a},
ga1:function(a){var z,y
z=this.a
y=new H.ib(z,z.r,this.$ti)
y.c=z.e
return y}},
ib:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.bF(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lV:{"^":"u:18;a",
$1:function(a){return this.a(a)}},
lW:{"^":"u:30;a",
$2:function(a,b){return this.a(a,b)}},
lX:{"^":"u:28;a",
$1:function(a){return this.a(H.U(a))}},
i4:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseO:1,
q:{
i5:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.en("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lR:function(a){return J.eu(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
m7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
c0:function(a){var z,y,x,w
z=J.P(a)
if(!!z.$isF)return a
y=z.gl(a)
if(typeof y!=="number")return H.e(y)
x=new Array(y)
x.fixed$length=Array
w=0
while(!0){y=z.gl(a)
if(typeof y!=="number")return H.e(y)
if(!(w<y))break
C.a.m(x,w,z.k(a,w));++w}return x},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aJ(b,a))},
lz:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.lP(a,b,c))
return b},
iA:{"^":"p;",$isn9:1,"%":"DataView;ArrayBufferView;ds|fD|fE|iz|fF|fG|b5"},
ds:{"^":"iA;",
gl:function(a){return a.length},
$isF:1,
$asF:I.c5,
$isI:1,
$asI:I.c5},
iz:{"^":"fE;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
m:function(a,b,c){H.z(b)
H.lQ(c)
H.aH(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.y]},
$asw:function(){return[P.y]},
$isf:1,
$asf:function(){return[P.y]},
$isc:1,
$asc:function(){return[P.y]},
"%":"Float32Array|Float64Array"},
b5:{"^":"fG;",
m:function(a,b,c){H.z(b)
H.z(c)
H.aH(b,a,a.length)
a[b]=c},
$ascE:function(){return[P.x]},
$asw:function(){return[P.x]},
$isf:1,
$asf:function(){return[P.x]},
$isc:1,
$asc:function(){return[P.x]}},
mK:{"^":"b5;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mL:{"^":"b5;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mM:{"^":"b5;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mN:{"^":"b5;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mO:{"^":"b5;",
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mP:{"^":"b5;",
gl:function(a){return a.length},
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
iB:{"^":"b5;",
gl:function(a){return a.length},
k:function(a,b){H.aH(b,a,a.length)
return a[b]},
bY:function(a,b,c){return new Uint8Array(a.subarray(b,H.lz(b,c,a.length)))},
"%":";Uint8Array"},
fD:{"^":"ds+w;"},
fE:{"^":"fD+cE;"},
fF:{"^":"ds+w;"},
fG:{"^":"fF+cE;"}}],["","",,P,{"^":"",
kg:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lH()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bx(new P.ki(z),1)).observe(y,{childList:true})
return new P.kh(z,y,x)}else if(self.setImmediate!=null)return P.lI()
return P.lJ()},
nd:[function(a){self.scheduleImmediate(H.bx(new P.kj(H.m(a,{func:1,ret:-1})),0))},"$1","lH",4,0,11],
ne:[function(a){self.setImmediate(H.bx(new P.kk(H.m(a,{func:1,ret:-1})),0))},"$1","lI",4,0,11],
nf:[function(a){P.dF(C.m,H.m(a,{func:1,ret:-1}))},"$1","lJ",4,0,11],
dF:function(a,b){var z
H.m(b,{func:1,ret:-1})
z=C.e.a_(a.a,1000)
return P.lf(z<0?0:z,b)},
f7:function(a,b){var z
H.m(b,{func:1,ret:-1,args:[P.ap]})
z=C.e.a_(a.a,1000)
return P.lg(z<0?0:z,b)},
lD:function(a,b){if(H.cr(a,{func:1,args:[P.b,P.ax]}))return b.iA(a,null,P.b,P.ax)
if(H.cr(a,{func:1,args:[P.b]}))return H.m(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.cw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lC:function(){var z,y
for(;z=$.bv,z!=null;){$.c2=null
y=z.b
$.bv=y
if(y==null)$.c1=null
z.a.$0()}},
nn:[function(){$.dP=!0
try{P.lC()}finally{$.c2=null
$.dP=!1
if($.bv!=null)$.$get$dL().$1(P.fX())}},"$0","fX",0,0,3],
fS:function(a){var z=new P.fy(H.m(a,{func:1,ret:-1}))
if($.bv==null){$.c1=z
$.bv=z
if(!$.dP)$.$get$dL().$1(P.fX())}else{$.c1.b=z
$.c1=z}},
lG:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.bv
if(z==null){P.fS(a)
$.c2=$.c1
return}y=new P.fy(a)
x=$.c2
if(x==null){y.b=z
$.c2=y
$.bv=y}else{y.b=x.b
x.b=y
$.c2=y
if(y.b==null)$.c1=y}},
m9:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.T
if(C.j===y){P.cT(null,null,C.j,a)
return}y.toString
P.cT(null,null,y,H.m(y.cq(a),z))},
dE:function(a,b){var z,y
z={func:1,ret:-1}
H.m(b,z)
y=$.T
if(y===C.j){y.toString
return P.dF(a,b)}return P.dF(a,H.m(y.cq(b),z))},
cO:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.ap]}
H.m(b,z)
y=$.T
if(y===C.j){y.toString
return P.f7(a,b)}x=y.dE(b,P.ap)
$.T.toString
return P.f7(a,H.m(x,z))},
cS:function(a,b,c,d,e){var z={}
z.a=d
P.lG(new P.lE(z,e))},
fQ:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fR:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.E(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
lF:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cT:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cq(d):c.hS(d,-1)
P.fS(d)},
ki:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kh:{"^":"u:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kj:{"^":"u:2;a",
$0:function(){this.a.$0()}},
kk:{"^":"u:2;a",
$0:function(){this.a.$0()}},
fM:{"^":"b;a,0b,c",
eR:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bx(new P.li(this,b),0),a)
else throw H.d(P.K("`setTimeout()` not found."))},
eS:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bx(new P.lh(this,a,Date.now(),b),0),a)
else throw H.d(P.K("Periodic timer."))},
$isap:1,
q:{
lf:function(a,b){var z=new P.fM(!0,0)
z.eR(a,b)
return z},
lg:function(a,b){var z=new P.fM(!1,0)
z.eS(a,b)
return z}}},
li:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lh:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.ez(w,x)}z.c=y
this.d.$1(z)}},
bu:{"^":"b;0a,b,c,d,e,$ti",
ih:function(a){if(this.c!==6)return!0
return this.b.b.cN(H.m(this.d,{func:1,ret:P.a8,args:[P.b]}),a.a,P.a8,P.b)},
i7:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.A(this,1)}
w=this.b.b
if(H.cr(z,{func:1,args:[P.b,P.ax]}))return H.dT(w.iH(z,a.a,a.b,null,y,P.ax),x)
else return H.dT(w.cN(H.m(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aU:{"^":"b;dw:a<,b,0h7:c<,$ti",
el:function(a,b,c){var z,y,x,w
z=H.A(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lD(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aU(0,$.T,[c])
w=b==null?1:3
this.d7(new P.bu(x,w,a,b,[z,c]))
return x},
iM:function(a,b){return this.el(a,null,b)},
d7:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbu")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaU")
z=y.a
if(z<4){y.d7(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cT(null,null,z,H.m(new P.ky(this,a),{func:1,ret:-1}))}},
ds:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbu")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaU")
y=u.a
if(y<4){u.ds(a)
return}this.a=y
this.c=u.c}z.a=this.bx(a)
y=this.b
y.toString
P.cT(null,null,y,H.m(new P.kD(z,this),{func:1,ret:-1}))}},
cd:function(){var z=H.h(this.c,"$isbu")
this.c=null
return this.bx(z)},
bx:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
de:function(a){var z,y,x,w
z=H.A(this,0)
H.dT(a,{futureOr:1,type:z})
y=this.$ti
x=H.c4(a,"$isbG",y,"$asbG")
if(x){z=H.c4(a,"$isaU",y,null)
if(z)P.fA(a,this)
else P.kz(a,this)}else{w=this.cd()
H.E(a,z)
this.a=4
this.c=a
P.c_(this,w)}},
c3:[function(a,b){var z
H.h(b,"$isax")
z=this.cd()
this.a=8
this.c=new P.al(a,b)
P.c_(this,z)},function(a){return this.c3(a,null)},"j2","$2","$1","gfa",4,2,41],
$isbG:1,
q:{
kz:function(a,b){var z,y,x
b.a=1
try{a.el(new P.kA(b),new P.kB(b),null)}catch(x){z=H.aW(x)
y=H.bA(x)
P.m9(new P.kC(b,z,y))}},
fA:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaU")
if(z>=4){y=b.cd()
b.a=a.a
b.c=a.c
P.c_(b,y)}else{y=H.h(b.c,"$isbu")
b.a=2
b.c=a
a.ds(y)}},
c_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cS(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.c_(z.a,b)}y=z.a
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
P.cS(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kG(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kF(x,b,r).$0()}else if((y&2)!==0)new P.kE(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.P(y).$isbG){if(y.a>=4){n=H.h(t.c,"$isbu")
t.c=null
b=t.bx(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fA(y,t)
return}}m=b.b
n=H.h(m.c,"$isbu")
m.c=null
b=m.bx(n)
y=x.a
u=x.b
if(!y){H.E(u,H.A(m,0))
m.a=4
m.c=u}else{H.h(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
ky:{"^":"u:2;a,b",
$0:function(){P.c_(this.a,this.b)}},
kD:{"^":"u:2;a,b",
$0:function(){P.c_(this.b,this.a.a)}},
kA:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.de(a)}},
kB:{"^":"u:38;a",
$2:function(a,b){this.a.c3(a,H.h(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
kC:{"^":"u:2;a,b,c",
$0:function(){this.a.c3(this.b,this.c)}},
kG:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ek(H.m(w.d,{func:1}),null)}catch(v){y=H.aW(v)
x=H.bA(v)
if(this.d){w=H.h(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.P(z).$isbG){if(z instanceof P.aU&&z.gdw()>=4){if(z.gdw()===8){w=this.b
w.b=H.h(z.gh7(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iM(new P.kH(t),null)
w.a=!1}}},
kH:{"^":"u:39;a",
$1:function(a){return this.a}},
kF:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.A(x,0)
v=H.E(this.c,w)
u=H.A(x,1)
this.a.b=x.b.b.cN(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aW(t)
y=H.bA(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kE:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isal")
w=this.c
if(w.ih(z)&&w.e!=null){v=this.b
v.b=w.i7(z)
v.a=!1}}catch(u){y=H.aW(u)
x=H.bA(u)
w=H.h(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fy:{"^":"b;a,0b"},
dA:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aU(0,$.T,[P.x])
z.a=0
this.ic(new P.ju(z,this),!0,new P.jv(z,y),y.gfa())
return y}},
ju:{"^":"u;a,b",
$1:function(a){H.E(a,H.aA(this.b,"dA",0));++this.a.a},
$S:function(){return{func:1,ret:P.R,args:[H.aA(this.b,"dA",0)]}}},
jv:{"^":"u:2;a,b",
$0:function(){this.b.de(this.a.a)}},
f2:{"^":"b;$ti"},
jt:{"^":"b;"},
ap:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.k(this.a)},
$isa5:1},
lo:{"^":"b;",$isnc:1},
lE:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eN()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
l1:{"^":"lo;",
iI:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fQ(null,null,this,a,-1)}catch(x){z=H.aW(x)
y=H.bA(x)
P.cS(null,null,this,z,H.h(y,"$isax"))}},
iJ:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fR(null,null,this,a,b,-1,c)}catch(x){z=H.aW(x)
y=H.bA(x)
P.cS(null,null,this,z,H.h(y,"$isax"))}},
hS:function(a,b){return new P.l3(this,H.m(a,{func:1,ret:b}),b)},
cq:function(a){return new P.l2(this,H.m(a,{func:1,ret:-1}))},
dE:function(a,b){return new P.l4(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
ek:function(a,b){H.m(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fQ(null,null,this,a,b)},
cN:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.T===C.j)return a.$1(b)
return P.fR(null,null,this,a,b,c,d)},
iH:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.T===C.j)return a.$2(b,c)
return P.lF(null,null,this,a,b,c,d,e,f)},
iA:function(a,b,c,d){return H.m(a,{func:1,ret:b,args:[c,d]})}},
l3:{"^":"u;a,b,c",
$0:function(){return this.a.ek(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l2:{"^":"u:3;a,b",
$0:function(){return this.a.iI(this.b)}},
l4:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.iJ(this.b,H.E(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
id:function(a,b,c){H.ct(a)
return H.o(H.lS(a,new H.aN(0,0,[b,c])),"$isez",[b,c],"$asez")},
ic:function(a,b){return new H.aN(0,0,[a,b])},
ie:function(a,b,c,d){return new P.kO(0,0,[d])},
i0:function(a,b,c){var z,y
if(P.dQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c3()
C.a.h(y,a)
try{P.lB(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.f3(b,H.m1(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
di:function(a,b,c){var z,y,x
if(P.dQ(a))return b+"..."+c
z=new P.cp(b)
y=$.$get$c3()
C.a.h(y,a)
try{x=z
x.a=P.f3(x.gaU(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaU()+c
y=z.gaU()
return y.charCodeAt(0)==0?y:y},
dQ:function(a){var z,y
for(z=0;y=$.$get$c3(),z<y.length;++z)if(a===y[z])return!0
return!1},
lB:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga1(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.k(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.H();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
eE:function(a){var z,y,x
z={}
if(P.dQ(a))return"{...}"
y=new P.cp("")
try{C.a.h($.$get$c3(),a)
x=y
x.a=x.gaU()+"{"
z.a=!0
J.hf(a,new P.ij(z,y))
z=y
z.a=z.gaU()+"}"}finally{z=$.$get$c3()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaU()
return z.charCodeAt(0)==0?z:z},
kO:{"^":"kI;a,0b,0c,0d,0e,0f,r,$ti",
ga1:function(a){return P.fC(this,this.r,H.A(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.E(b,H.A(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dN()
this.b=z}return this.dc(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dN()
this.c=y}return this.dc(y,b)}else return this.eT(0,b)},
eT:function(a,b){var z,y,x
H.E(b,H.A(this,0))
z=this.d
if(z==null){z=P.dN()
this.d=z}y=this.df(b)
x=z[y]
if(x==null)z[y]=[this.c2(b)]
else{if(this.dk(x,b)>=0)return!1
x.push(this.c2(b))}return!0},
S:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dt(this.c,b)
else return this.h1(0,b)},
h1:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fj(z,b)
x=this.dk(y,b)
if(x<0)return!1
this.dA(y.splice(x,1)[0])
return!0},
dc:function(a,b){H.E(b,H.A(this,0))
if(H.h(a[b],"$isdM")!=null)return!1
a[b]=this.c2(b)
return!0},
dt:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isdM")
if(z==null)return!1
this.dA(z)
delete a[b]
return!0},
dd:function(){this.r=this.r+1&67108863},
c2:function(a){var z,y
z=new P.dM(H.E(a,H.A(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dd()
return z},
dA:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dd()},
df:function(a){return J.bj(a)&0x3ffffff},
fj:function(a,b){return a[this.df(b)]},
dk:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Z(a[y].a,b))return y
return-1},
q:{
dN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dM:{"^":"b;a,0b,0c"},
kP:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.bF(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.E(z.a,H.A(this,0))
this.c=z.b
return!0}}},
q:{
fC:function(a,b,c){var z=new P.kP(a,b,[c])
z.c=a.e
return z}}},
kI:{"^":"j9;"},
cJ:{"^":"kQ;",$isf:1,$isc:1},
w:{"^":"b;$ti",
ga1:function(a){return new H.eB(a,this.gl(a),0,[H.bz(this,a,"w",0)])},
J:function(a,b){return this.k(a,b)},
iO:function(a,b){var z,y,x
z=H.a([],[H.bz(this,a,"w",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.e(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
iN:function(a){return this.iO(a,!0)},
i3:function(a,b,c,d){var z
H.E(d,H.bz(this,a,"w",0))
P.du(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.di(a,"[","]")}},
ii:{"^":"ak;"},
ij:{"^":"u:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
ak:{"^":"b;$ti",
N:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.bz(this,a,"ak",0),H.bz(this,a,"ak",1)]})
for(z=J.bC(this.gaM(a));z.H();){y=z.gP(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.bD(this.gaM(a))},
i:function(a){return P.eE(a)},
$isab:1},
jb:{"^":"b;$ti",
i:function(a){return P.di(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.e0("index"))
if(b<0)H.t(P.ao(b,0,null,"index",null))
for(z=P.fC(this,this.r,H.A(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.d(P.S(b,this,"index",null,y))},
$isf:1},
j9:{"^":"jb;"},
kQ:{"^":"b+w;"}}],["","",,P,{"^":"",d8:{"^":"b;$ti"},ea:{"^":"jt;$ti"},hL:{"^":"d8;",
$asd8:function(){return[P.n,[P.c,P.x]]}},k0:{"^":"hL;a"},k1:{"^":"ea;",
hX:function(a,b,c){var z,y,x,w
z=a.length
P.du(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ln(0,0,x)
if(w.fg(a,b,z)!==z)w.dC(C.i.cu(a,z-1),0)
return C.t.bY(x,0,w.b)},
hW:function(a){return this.hX(a,0,null)},
$asea:function(){return[P.n,[P.c,P.x]]}},ln:{"^":"b;a,b,c",
dC:function(a,b){var z,y,x,w,v
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
fg:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cu(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bu(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dC(w,C.i.bu(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
h1:function(a,b,c){var z=H.iV(a,c)
if(z!=null)return z
throw H.d(P.en(a,null,null))},
hN:function(a){var z=J.P(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.bq(a)+"'"},
ig:function(a,b,c,d){var z,y
H.E(b,d)
z=J.i2(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.o(z,"$isc",[d],"$asc")},
eC:function(a,b,c){var z,y,x
z=[c]
y=H.a([],z)
for(x=J.bC(a);x.H();)C.a.h(y,H.E(x.gP(x),c))
if(b)return y
return H.o(J.bM(y),"$isc",z,"$asc")},
dB:function(a,b,c){var z,y
z=P.x
H.o(a,"$isf",[z],"$asf")
if(a.constructor===Array){H.o(a,"$isbn",[z],"$asbn")
y=a.length
c=P.du(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.U()
z=c<y}else z=!0
return H.eS(z?C.a.bY(a,b,c):a)}return P.jw(a,b,c)},
jw:function(a,b,c){var z,y,x
H.o(a,"$isf",[P.x],"$asf")
z=J.bC(a)
for(y=0;y<b;++y)if(!z.H())throw H.d(P.ao(b,0,y,null,null))
x=[]
for(;z.H();)x.push(z.gP(z))
return H.eS(x)},
j0:function(a,b,c){return new H.i4(a,H.i5(a,!1,!0,!1))},
fP:function(a,b,c,d){var z,y,x,w,v,u
H.o(a,"$isc",[P.x],"$asc")
if(c===C.o){z=$.$get$fO().b
z=z.test(b)}else z=!1
if(z)return b
y=C.y.hW(H.E(b,H.aA(c,"d8",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.iW(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hN(a)},
r:function(a){return new P.fz(a)},
cK:function(a,b,c,d){var z,y
H.m(b,{func:1,ret:d,args:[P.x]})
z=H.a([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
e_:function(a){H.m7(a)},
a8:{"^":"b;"},
"+bool":0,
aL:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aL))return!1
return this.a===b.a&&this.b===b.b},
gZ:function(a){var z=this.a
return(z^C.e.by(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hD(H.iU(this))
y=P.ci(H.iS(this))
x=P.ci(H.iO(this))
w=P.ci(H.iP(this))
v=P.ci(H.iR(this))
u=P.ci(H.iT(this))
t=P.hE(H.iQ(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
hD:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ci:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"Y;"},
"+double":0,
aM:{"^":"b;a",
U:function(a,b){return C.e.U(this.a,H.h(b,"$isaM").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aM))return!1
return this.a===b.a},
gZ:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hI()
y=this.a
if(y<0)return"-"+new P.aM(0-y).i(0)
x=z.$1(C.e.a_(y,6e7)%60)
w=z.$1(C.e.a_(y,1e6)%60)
v=new P.hH().$1(y%1e6)
return""+C.e.a_(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
q:{
ej:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hH:{"^":"u:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hI:{"^":"u:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
eN:{"^":"a5;",
i:function(a){return"Throw of null."}},
aK:{"^":"a5;a,b,c,d",
gc5:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc4:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gc5()+y+x
if(!this.a)return w
v=this.gc4()
u=P.cD(this.b)
return w+v+": "+H.k(u)},
q:{
hj:function(a){return new P.aK(!1,null,null,a)},
cw:function(a,b,c){return new P.aK(!0,a,b,c)},
e0:function(a){return new P.aK(!1,null,a,"Must not be null")}}},
cL:{"^":"aK;e,f,a,b,c,d",
gc5:function(){return"RangeError"},
gc4:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
q:{
cM:function(a,b,c){return new P.cL(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.cL(b,c,!0,a,d,"Invalid value")},
du:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.e(a)
if(0<=a){if(typeof c!=="number")return H.e(c)
z=a>c}else z=!0
if(z)throw H.d(P.ao(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.e(c)
z=b>c}else z=!0
if(z)throw H.d(P.ao(b,a,c,"end",f))
return b}return c}}},
i_:{"^":"aK;e,l:f>,a,b,c,d",
gc5:function(){return"RangeError"},
gc4:function(){if(J.hb(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
q:{
S:function(a,b,c,d,e){var z=H.z(e!=null?e:J.bD(b))
return new P.i_(b,z,!0,a,c,"Index out of range")}}},
jX:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
K:function(a){return new P.jX(a)}}},
jU:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
ft:function(a){return new P.jU(a)}}},
jp:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hz:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cD(z))+"."},
q:{
bF:function(a){return new P.hz(a)}}},
iH:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
f0:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hC:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fz:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hU:{"^":"b;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.bZ(x,0,75)+"..."
return y+"\n"+x},
q:{
en:function(a,b,c){return new P.hU(a,b,c)}}},
x:{"^":"Y;"},
"+int":0,
f:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga1(this)
for(y=0;z.H();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.e0("index"))
if(b<0)H.t(P.ao(b,0,null,"index",null))
for(z=this.ga1(this),y=0;z.H();){x=z.gP(z)
if(b===y)return x;++y}throw H.d(P.S(b,this,"index",null,y))},
i:function(a){return P.i0(this,"(",")")}},
dj:{"^":"b;$ti"},
c:{"^":"b;$ti",$isf:1},
"+List":0,
ab:{"^":"b;$ti"},
R:{"^":"b;",
gZ:function(a){return P.b.prototype.gZ.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Y:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gZ:function(a){return H.bT(this)},
i:function(a){return"Instance of '"+H.bq(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"b;"},
n:{"^":"b;",$iseO:1},
"+String":0,
cp:{"^":"b;aU:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
f3:function(a,b,c){var z=J.bC(b)
if(!z.H())return a
if(c.length===0){do a+=H.k(z.gP(z))
while(z.H())}else{a+=H.k(z.gP(z))
for(;z.H();)a=a+c+H.k(z.gP(z))}return a}}}}],["","",,W,{"^":"",
hi:function(a){var z=document.createElement("a")
return z},
d6:function(a,b){var z=document.createElement("canvas")
return z},
hK:function(a){H.h(a,"$isai")
return"wheel"},
cQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fB:function(a,b,c,d){var z,y
z=W.cQ(W.cQ(W.cQ(W.cQ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fU:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dE(a,b)},
bL:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
md:{"^":"p;0l:length=","%":"AccessibleNodeList"},
me:{"^":"bL;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mf:{"^":"bL;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
hn:{"^":"p;","%":";Blob"},
d5:{"^":"bL;",
bW:function(a,b,c){if(c!=null)return a.getContext(b,P.lL(c,null))
return a.getContext(b)},
ep:function(a,b){return this.bW(a,b,null)},
$isd5:1,
"%":"HTMLCanvasElement"},
e6:{"^":"p;",$ise6:1,"%":"CanvasRenderingContext2D"},
ml:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mn:{"^":"hB;0l:length=","%":"CSSPerspective"},
aZ:{"^":"p;",$isaZ:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mo:{"^":"ko;0l:length=",
eq:function(a,b){var z=a.getPropertyValue(this.f7(a,b))
return z==null?"":z},
f7:function(a,b){var z,y
z=$.$get$eb()
y=z[b]
if(typeof y==="string")return y
y=this.hg(a,b)
z[b]=y
return y},
hg:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hF()+b
if(z in a)return z
return b},
gcr:function(a){return a.bottom},
gax:function(a){return a.height},
gah:function(a){return a.left},
gan:function(a){return a.right},
gbn:function(a){return a.top},
gaB:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hA:{"^":"b;",
gah:function(a){return this.eq(a,"left")}},
ec:{"^":"p;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hB:{"^":"p;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mp:{"^":"ec;0l:length=","%":"CSSTransformValue"},
mq:{"^":"ec;0l:length=","%":"CSSUnparsedValue"},
mr:{"^":"p;0l:length=","%":"DataTransferItemList"},
ms:{"^":"p;",
i:function(a){return String(a)},
"%":"DOMException"},
mt:{"^":"kq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.o(c,"$isa7",[P.Y],"$asa7")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.Y]]},
$isI:1,
$asI:function(){return[[P.a7,P.Y]]},
$asw:function(){return[[P.a7,P.Y]]},
$isf:1,
$asf:function(){return[[P.a7,P.Y]]},
$isc:1,
$asc:function(){return[[P.a7,P.Y]]},
$asC:function(){return[[P.a7,P.Y]]},
"%":"ClientRectList|DOMRectList"},
hG:{"^":"p;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaB(a))+" x "+H.k(this.gax(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.c4(b,"$isa7",[P.Y],"$asa7")
if(!z)return!1
z=J.c6(b)
return a.left===z.gah(b)&&a.top===z.gbn(b)&&this.gaB(a)===z.gaB(b)&&this.gax(a)===z.gax(b)},
gZ:function(a){return W.fB(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaB(a)&0x1FFFFFFF,this.gax(a)&0x1FFFFFFF)},
gcr:function(a){return a.bottom},
gax:function(a){return a.height},
gah:function(a){return a.left},
gan:function(a){return a.right},
gbn:function(a){return a.top},
gaB:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.Y]},
"%":";DOMRectReadOnly"},
mu:{"^":"ks;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.U(c)
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.n]},
$isI:1,
$asI:function(){return[P.n]},
$asw:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$asC:function(){return[P.n]},
"%":"DOMStringList"},
mv:{"^":"p;0l:length=","%":"DOMTokenList"},
kn:{"^":"cJ;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.h(z[b],"$isa1")},
m:function(a,b,c){var z
H.z(b)
H.h(c,"$isa1")
z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga1:function(a){var z=this.iN(this)
return new J.au(z,z.length,0,[H.A(z,0)])},
$asw:function(){return[W.a1]},
$asf:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
a1:{"^":"L;",
gdG:function(a){return new W.kn(a,a.children)},
gdH:function(a){return P.iY(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Y)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
ah:{"^":"p;",$isah:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ai:{"^":"p;",
dD:["ev",function(a,b,c,d){H.m(c,{func:1,args:[W.ah]})
if(c!=null)this.eV(a,b,c,!1)}],
eV:function(a,b,c,d){return a.addEventListener(b,H.bx(H.m(c,{func:1,args:[W.ah]}),1),!1)},
$isai:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fH|fI|fK|fL"},
b_:{"^":"hn;",$isb_:1,"%":"File"},
mw:{"^":"kx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isb_")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b_]},
$isI:1,
$asI:function(){return[W.b_]},
$asw:function(){return[W.b_]},
$isf:1,
$asf:function(){return[W.b_]},
$isc:1,
$asc:function(){return[W.b_]},
$asC:function(){return[W.b_]},
"%":"FileList"},
mx:{"^":"ai;0l:length=","%":"FileWriter"},
my:{"^":"bL;0l:length=","%":"HTMLFormElement"},
b0:{"^":"p;",$isb0:1,"%":"Gamepad"},
mz:{"^":"p;0l:length=","%":"History"},
mA:{"^":"kK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isL")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$isI:1,
$asI:function(){return[W.L]},
$asw:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cG:{"^":"p;0dK:data=",$iscG:1,"%":"ImageData"},
es:{"^":"bL;",$ises:1,"%":"HTMLImageElement"},
bO:{"^":"dG;",$isbO:1,"%":"KeyboardEvent"},
mE:{"^":"p;",
i:function(a){return String(a)},
"%":"Location"},
mF:{"^":"p;0l:length=","%":"MediaList"},
mG:{"^":"ai;",
dD:function(a,b,c,d){H.m(c,{func:1,args:[W.ah]})
if(b==="message")a.start()
this.ev(a,b,c,!1)},
"%":"MessagePort"},
mH:{"^":"kR;",
k:function(a,b){return P.aV(a.get(H.U(b)))},
N:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaM:function(a){var z=H.a([],[P.n])
this.N(a,new W.iw(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.n,null]},
$isab:1,
$asab:function(){return[P.n,null]},
"%":"MIDIInputMap"},
iw:{"^":"u:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mI:{"^":"kS;",
k:function(a,b){return P.aV(a.get(H.U(b)))},
N:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaM:function(a){var z=H.a([],[P.n])
this.N(a,new W.ix(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.n,null]},
$isab:1,
$asab:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
ix:{"^":"u:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b4:{"^":"p;",$isb4:1,"%":"MimeType"},
mJ:{"^":"kU;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isb4")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b4]},
$isI:1,
$asI:function(){return[W.b4]},
$asw:function(){return[W.b4]},
$isf:1,
$asf:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asC:function(){return[W.b4]},
"%":"MimeTypeArray"},
aw:{"^":"dG;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
km:{"^":"cJ;a",
m:function(a,b,c){var z,y
H.z(b)
H.h(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.i(y,b)
z.replaceChild(c,y[b])},
ga1:function(a){var z=this.a.childNodes
return new W.em(z,z.length,-1,[H.bz(C.M,z,"C",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asw:function(){return[W.L]},
$asf:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"ai;",
iD:function(a,b){var z,y
try{z=a.parentNode
J.hd(z,b,a)}catch(y){H.aW(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ew(a):z},
h2:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iD:{"^":"kW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isL")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$isI:1,
$asI:function(){return[W.L]},
$asw:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
b6:{"^":"p;0l:length=",$isb6:1,"%":"Plugin"},
mS:{"^":"l_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isb6")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$isI:1,
$asI:function(){return[W.b6]},
$asw:function(){return[W.b6]},
$isf:1,
$asf:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asC:function(){return[W.b6]},
"%":"PluginArray"},
mU:{"^":"l5;",
k:function(a,b){return P.aV(a.get(H.U(b)))},
N:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaM:function(a){var z=H.a([],[P.n])
this.N(a,new W.j6(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.n,null]},
$isab:1,
$asab:function(){return[P.n,null]},
"%":"RTCStatsReport"},
j6:{"^":"u:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mW:{"^":"bL;0l:length=","%":"HTMLSelectElement"},
b9:{"^":"ai;",$isb9:1,"%":"SourceBuffer"},
mX:{"^":"fI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isb9")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$isI:1,
$asI:function(){return[W.b9]},
$asw:function(){return[W.b9]},
$isf:1,
$asf:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asC:function(){return[W.b9]},
"%":"SourceBufferList"},
ba:{"^":"p;",$isba:1,"%":"SpeechGrammar"},
mY:{"^":"l7;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isba")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$isI:1,
$asI:function(){return[W.ba]},
$asw:function(){return[W.ba]},
$isf:1,
$asf:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asC:function(){return[W.ba]},
"%":"SpeechGrammarList"},
bb:{"^":"p;0l:length=",$isbb:1,"%":"SpeechRecognitionResult"},
n_:{"^":"la;",
k:function(a,b){return a.getItem(H.U(b))},
N:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaM:function(a){var z=H.a([],[P.n])
this.N(a,new W.js(z))
return z},
gl:function(a){return a.length},
$asak:function(){return[P.n,P.n]},
$isab:1,
$asab:function(){return[P.n,P.n]},
"%":"Storage"},
js:{"^":"u:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bc:{"^":"p;",$isbc:1,"%":"CSSStyleSheet|StyleSheet"},
bd:{"^":"ai;",$isbd:1,"%":"TextTrack"},
be:{"^":"ai;",$isbe:1,"%":"TextTrackCue|VTTCue"},
n3:{"^":"le;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isbe")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$isI:1,
$asI:function(){return[W.be]},
$asw:function(){return[W.be]},
$isf:1,
$asf:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"TextTrackCueList"},
n4:{"^":"fL;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isbd")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$isI:1,
$asI:function(){return[W.bd]},
$asw:function(){return[W.bd]},
$isf:1,
$asf:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asC:function(){return[W.bd]},
"%":"TextTrackList"},
n5:{"^":"p;0l:length=","%":"TimeRanges"},
bf:{"^":"p;",$isbf:1,"%":"Touch"},
br:{"^":"dG;",$isbr:1,"%":"TouchEvent"},
n6:{"^":"lk;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isbf")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$isI:1,
$asI:function(){return[W.bf]},
$asw:function(){return[W.bf]},
$isf:1,
$asf:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"TouchList"},
n7:{"^":"p;0l:length=","%":"TrackDefaultList"},
dG:{"^":"ah;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
na:{"^":"p;",
i:function(a){return String(a)},
"%":"URL"},
nb:{"^":"ai;0l:length=","%":"VideoTrackList"},
bZ:{"^":"aw;",
gi_:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.K("deltaY is not supported"))},
ghZ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.K("deltaX is not supported"))},
$isbZ:1,
"%":"WheelEvent"},
kd:{"^":"ai;",
h3:function(a,b){return a.requestAnimationFrame(H.bx(H.m(b,{func:1,ret:-1,args:[P.Y]}),1))},
ff:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ng:{"^":"lq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isaZ")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aZ]},
$isI:1,
$asI:function(){return[W.aZ]},
$asw:function(){return[W.aZ]},
$isf:1,
$asf:function(){return[W.aZ]},
$isc:1,
$asc:function(){return[W.aZ]},
$asC:function(){return[W.aZ]},
"%":"CSSRuleList"},
nh:{"^":"hG;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.c4(b,"$isa7",[P.Y],"$asa7")
if(!z)return!1
z=J.c6(b)
return a.left===z.gah(b)&&a.top===z.gbn(b)&&a.width===z.gaB(b)&&a.height===z.gax(b)},
gZ:function(a){return W.fB(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gax:function(a){return a.height},
gaB:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nj:{"^":"ls;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isb0")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b0]},
$isI:1,
$asI:function(){return[W.b0]},
$asw:function(){return[W.b0]},
$isf:1,
$asf:function(){return[W.b0]},
$isc:1,
$asc:function(){return[W.b0]},
$asC:function(){return[W.b0]},
"%":"GamepadList"},
nk:{"^":"lu;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isL")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$isI:1,
$asI:function(){return[W.L]},
$asw:function(){return[W.L]},
$isf:1,
$asf:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asC:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nl:{"^":"lw;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isbb")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$isI:1,
$asI:function(){return[W.bb]},
$asw:function(){return[W.bb]},
$isf:1,
$asf:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asC:function(){return[W.bb]},
"%":"SpeechRecognitionResultList"},
nm:{"^":"ly;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.z(b)
H.h(c,"$isbc")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$isI:1,
$asI:function(){return[W.bc]},
$asw:function(){return[W.bc]},
$isf:1,
$asf:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asC:function(){return[W.bc]},
"%":"StyleSheetList"},
kt:{"^":"dA;a,b,c,$ti",
ic:function(a,b,c,d){var z=H.A(this,0)
H.m(a,{func:1,ret:-1,args:[z]})
H.m(c,{func:1,ret:-1})
return W.a4(this.a,this.b,a,!1,z)}},
ni:{"^":"kt;a,b,c,$ti"},
ku:{"^":"f2;a,b,c,d,e,$ti",
hm:function(){var z=this.d
if(z!=null&&this.a<=0)J.he(this.b,this.c,z,!1)},
q:{
a4:function(a,b,c,d,e){var z=c==null?null:W.fU(new W.kv(c),W.ah)
z=new W.ku(0,a,b,z,!1,[e])
z.hm()
return z}}},
kv:{"^":"u:6;a",
$1:function(a){return this.a.$1(H.h(a,"$isah"))}},
C:{"^":"b;$ti",
ga1:function(a){return new W.em(a,this.gl(a),-1,[H.bz(this,a,"C",0)])}},
em:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.hc(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
ko:{"^":"p+hA;"},
kp:{"^":"p+w;"},
kq:{"^":"kp+C;"},
kr:{"^":"p+w;"},
ks:{"^":"kr+C;"},
kw:{"^":"p+w;"},
kx:{"^":"kw+C;"},
kJ:{"^":"p+w;"},
kK:{"^":"kJ+C;"},
kR:{"^":"p+ak;"},
kS:{"^":"p+ak;"},
kT:{"^":"p+w;"},
kU:{"^":"kT+C;"},
kV:{"^":"p+w;"},
kW:{"^":"kV+C;"},
kZ:{"^":"p+w;"},
l_:{"^":"kZ+C;"},
l5:{"^":"p+ak;"},
fH:{"^":"ai+w;"},
fI:{"^":"fH+C;"},
l6:{"^":"p+w;"},
l7:{"^":"l6+C;"},
la:{"^":"p+ak;"},
ld:{"^":"p+w;"},
le:{"^":"ld+C;"},
fK:{"^":"ai+w;"},
fL:{"^":"fK+C;"},
lj:{"^":"p+w;"},
lk:{"^":"lj+C;"},
lp:{"^":"p+w;"},
lq:{"^":"lp+C;"},
lr:{"^":"p+w;"},
ls:{"^":"lr+C;"},
lt:{"^":"p+w;"},
lu:{"^":"lt+C;"},
lv:{"^":"p+w;"},
lw:{"^":"lv+C;"},
lx:{"^":"p+w;"},
ly:{"^":"lx+C;"}}],["","",,P,{"^":"",
lO:function(a){var z,y
z=J.P(a)
if(!!z.$iscG){y=z.gdK(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fN(a.data,a.height,a.width)},
lN:function(a){if(a instanceof P.fN)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var z,y,x,w,v
if(a==null)return
z=P.ic(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.U(y[w])
z.m(0,v,a[v])}return z},
lL:function(a,b){var z={}
a.N(0,new P.lM(z))
return z},
ei:function(){var z=$.eh
if(z==null){z=J.cZ(window.navigator.userAgent,"Opera",0)
$.eh=z}return z},
hF:function(){var z,y
z=$.ee
if(z!=null)return z
y=$.ef
if(y==null){y=J.cZ(window.navigator.userAgent,"Firefox",0)
$.ef=y}if(y)z="-moz-"
else{y=$.eg
if(y==null){y=!P.ei()&&J.cZ(window.navigator.userAgent,"Trident/",0)
$.eg=y}if(y)z="-ms-"
else z=P.ei()?"-o-":"-webkit-"}$.ee=z
return z},
fN:{"^":"b;dK:a>,b,c",$iscG:1},
lM:{"^":"u:16;a",
$2:function(a,b){this.a[a]=b}},
hR:{"^":"cJ;a,b",
gbw:function(){var z,y,x
z=this.b
y=H.aA(z,"w",0)
x=W.a1
return new H.ik(new H.kb(z,H.m(new P.hS(),{func:1,ret:P.a8,args:[y]}),[y]),H.m(new P.hT(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.z(b)
H.h(c,"$isa1")
z=this.gbw()
J.hg(z.b.$1(J.d_(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bD(this.gbw().a)},
k:function(a,b){var z=this.gbw()
return z.b.$1(J.d_(z.a,b))},
ga1:function(a){var z=P.eC(this.gbw(),!1,W.a1)
return new J.au(z,z.length,0,[H.A(z,0)])},
$asw:function(){return[W.a1]},
$asf:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
hS:{"^":"u:40;",
$1:function(a){return!!J.P(H.h(a,"$isL")).$isa1}},
hT:{"^":"u:26;",
$1:function(a){return H.j(H.h(a,"$isL"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l0:{"^":"b;$ti",
gan:function(a){var z=this.a
if(typeof z!=="number")return z.n()
return H.E(z+this.c,H.A(this,0))},
gcr:function(a){var z=this.b
if(typeof z!=="number")return z.n()
return H.E(z+this.d,H.A(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c4(b,"$isa7",[P.Y],"$asa7")
if(!z)return!1
z=this.a
y=J.c6(b)
x=y.gah(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbn(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.n()
w=H.A(this,0)
if(H.E(z+this.c,w)===y.gan(b)){if(typeof x!=="number")return x.n()
z=H.E(x+this.d,w)===y.gcr(b)}else z=!1}else z=!1}else z=!1
return z},
gZ:function(a){var z,y,x,w,v
z=this.a
y=J.bj(z)
x=this.b
w=J.bj(x)
if(typeof z!=="number")return z.n()
v=H.A(this,0)
z=H.E(z+this.c,v)
if(typeof x!=="number")return x.n()
v=H.E(x+this.d,v)
return P.kL(P.cR(P.cR(P.cR(P.cR(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"l0;ah:a>,bn:b>,aB:c>,ax:d>,$ti",q:{
iY:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.U()
if(c<0)z=-c*0
else z=c
H.E(z,e)
if(typeof d!=="number")return d.U()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.E(y,e),[e])}}}}],["","",,P,{"^":"",bP:{"^":"p;",$isbP:1,"%":"SVGLength"},mD:{"^":"kN;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.h(c,"$isbP")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bP]},
$isf:1,
$asf:function(){return[P.bP]},
$isc:1,
$asc:function(){return[P.bP]},
$asC:function(){return[P.bP]},
"%":"SVGLengthList"},bS:{"^":"p;",$isbS:1,"%":"SVGNumber"},mQ:{"^":"kY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.h(c,"$isbS")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bS]},
$isf:1,
$asf:function(){return[P.bS]},
$isc:1,
$asc:function(){return[P.bS]},
$asC:function(){return[P.bS]},
"%":"SVGNumberList"},mT:{"^":"p;0l:length=","%":"SVGPointList"},n0:{"^":"lc;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.U(c)
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$asC:function(){return[P.n]},
"%":"SVGStringList"},n1:{"^":"a1;",
gdG:function(a){return new P.hR(a,new W.km(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bU:{"^":"p;",$isbU:1,"%":"SVGTransform"},n8:{"^":"lm;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.z(b)
H.h(c,"$isbU")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[P.bU]},
$isf:1,
$asf:function(){return[P.bU]},
$isc:1,
$asc:function(){return[P.bU]},
$asC:function(){return[P.bU]},
"%":"SVGTransformList"},kM:{"^":"p+w;"},kN:{"^":"kM+C;"},kX:{"^":"p+w;"},kY:{"^":"kX+C;"},lb:{"^":"p+w;"},lc:{"^":"lb+C;"},ll:{"^":"p+w;"},lm:{"^":"ll+C;"}}],["","",,P,{"^":"",mg:{"^":"p;0l:length=","%":"AudioBuffer"},mh:{"^":"kl;",
k:function(a,b){return P.aV(a.get(H.U(b)))},
N:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aV(y.value[1]))}},
gaM:function(a){var z=H.a([],[P.n])
this.N(a,new P.hl(z))
return z},
gl:function(a){return a.size},
$asak:function(){return[P.n,null]},
$isab:1,
$asab:function(){return[P.n,null]},
"%":"AudioParamMap"},hl:{"^":"u:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},mi:{"^":"ai;0l:length=","%":"AudioTrackList"},hm:{"^":"ai;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mR:{"^":"hm;0l:length=","%":"OfflineAudioContext"},kl:{"^":"p+ak;"}}],["","",,P,{"^":"",dx:{"^":"p;",
iL:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.P(g)
if(!!z.$iscG)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.lN(g))
return}if(!!z.$ises)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.hj("Incorrect number or type of arguments"))},
iK:function(a,b,c,d,e,f,g){return this.iL(a,b,c,d,e,f,g,null,null,null)},
$isdx:1,
"%":"WebGLRenderingContext"},jS:{"^":"p;",$isjS:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mZ:{"^":"l9;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.S(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){H.z(b)
H.h(c,"$isab")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asw:function(){return[[P.ab,,,]]},
$isf:1,
$asf:function(){return[[P.ab,,,]]},
$isc:1,
$asc:function(){return[[P.ab,,,]]},
$asC:function(){return[[P.ab,,,]]},
"%":"SQLResultSetRowList"},l8:{"^":"p+w;"},l9:{"^":"l8+C;"}}],["","",,L,{"^":"",iF:{"^":"b;a",q:{
iG:function(a){var z,y,x,w,v,u,t,s
z=new Array(256)
z.fixed$length=Array
y=[P.x]
x=H.a(z,y)
z=new Array(256)
z.fixed$length=Array
w=H.a(z,y)
for(v=0;v<256;++v)C.a.m(w,v,v)
u=P.h1("6364136223846793005",null,null)
t=P.h1("1442695040888963407",null,null)
if(typeof u!=="number")return H.e(u)
if(typeof t!=="number")return H.e(t)
a=C.e.cO(C.e.cO(C.e.cO(a*u+t,64)*u+t,64)*u+t,64)
for(v=255;v>=0;--v){z=a*u+t
a=((z&-1)>>>0)-(z&0)
s=C.e.cW(a+31,v+1)
if(s>=256)return H.i(w,s)
C.a.m(x,v,w[s])
w[s]=w[v]}return new L.iF(x)}}}}],["","",,B,{"^":"",hO:{"^":"b;a,b,c,d,0e",
ac:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=new B.b7(a,b)
y=this.c.v(0,z).v(0,$.$get$dd().j(0,a+b))
x=y.a
w=y.b
v=2-x*x-w*w
if(v>0){u=v*v
t=this.e
s=this.b.n(0,z)
r=this.a
q=r[C.h.aa(s.a)&255]
s=C.h.aa(s.b)
if(typeof q!=="number")return q.n()
s=r[q+s&255]
if(typeof s!=="number")return s.cU()
p=(s&14)>>>1
s=$.$get$ek()
if(p>=8)return H.i(s,p)
o=s[p]
this.e=t+u*u*(o.a*x+o.b*w)}}},b7:{"^":"b;a,b",
n:function(a,b){return new B.b7(this.a+b.a,this.b+b.b)},
v:function(a,b){return new B.b7(this.a-b.a,this.b-b.b)},
j:function(a,b){return new B.b7(this.a*b,this.b*b)},
i:function(a){return H.k(this.a)+", "+H.k(this.b)},
q:{
aF:function(a,b){return new B.b7(a,b)}}}}],["","",,O,{"^":"",am:{"^":"b;0a,0b,0c,0d,$ti",
br:function(a){this.a=H.a([],[a])
this.b=null
this.c=null
this.d=null},
bX:function(a,b,c){var z=H.aA(this,"am",0)
H.m(b,{func:1,ret:P.a8,args:[[P.f,z]]})
z={func:1,ret:-1,args:[P.x,[P.f,z]]}
H.m(a,z)
H.m(c,z)
this.b=b
this.c=a
this.d=c},
bq:function(a,b){return this.bX(a,null,b)},
ba:function(a){var z
H.o(a,"$isf",[H.aA(this,"am",0)],"$asf")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dm:function(a,b){var z
H.o(b,"$isf",[H.aA(this,"am",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga1:function(a){var z=this.a
return new J.au(z,z.length,0,[H.A(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aA(this,"am",0)
H.E(b,z)
z=[z]
if(this.ba(H.a([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dm(x,H.a([b],z))}},
aH:function(a,b){var z,y
H.o(b,"$isf",[H.aA(this,"am",0)],"$asf")
if(this.ba(b)){z=this.a
y=z.length
C.a.aH(z,b)
this.dm(y,b)}},
$isf:1,
q:{
d9:function(a){var z=new O.am([a])
z.br(a)
return z}}},dq:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
eI:function(a){var z=this.b
if(!(z==null))z.A(a)},
aQ:function(){return this.eI(null)},
gW:function(a){var z=this.a
if(z.length>0)return C.a.gcI(z)
else return V.bp()},
eh:function(a){var z=this.a
if(a==null)C.a.h(z,V.bp())
else C.a.h(z,a)
this.aQ()},
cM:function(){var z=this.a
if(z.length>0){z.pop()
this.aQ()}}}}],["","",,E,{"^":"",d1:{"^":"b;"},ag:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
d9:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.A(z,0)]);z.H();){y=z.d
if(y.f==null)y.d9()}},
scX:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){this.c=null
this.d=a
this.e=null
if(z!=null)z.gt().S(0,this.gbU())
y=this.d
if(y!=null)y.gt().h(0,this.gbU())
x=new D.G("shapeBuilder",z,this.d,this,[F.dy])
x.b=!0
this.a2(x)}},
ab:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aq(0,b,this):null
if(!J.Z(y,this.x)){x=this.x
this.x=y
w=new D.G("matrix",x,y,this,[V.aD])
w.b=!0
this.a2(w)}z=this.f
if(z!=null)z.ab(0,b)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.A(z,0)]);z.H();)z.d.ab(0,b)},
b6:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gW(z))
else C.a.h(z.a,y.j(0,z.gW(z)))
z.aQ()
a.ei(this.f)
z=a.dy
x=(z&&C.a).gcI(z)
if(x!=null&&this.d!=null)x.iC(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.A(z,0)]);z.H();)z.d.b6(a)
a.eg()
a.dx.cM()},
gt:function(){var z=this.z
if(z==null){z=D.J()
this.z=z}return z},
a2:function(a){var z=this.z
if(!(z==null))z.A(a)},
a5:function(){return this.a2(null)},
io:[function(a){H.h(a,"$isv")
this.e=null
this.a2(a)},function(){return this.io(null)},"jQ","$1","$0","gbU",0,2,1],
ip:[function(a){this.a2(H.h(a,"$isv"))},function(){return this.ip(null)},"jR","$1","$0","gee",0,2,1],
im:[function(a){this.a2(H.h(a,"$isv"))},function(){return this.im(null)},"jP","$1","$0","ged",0,2,1],
ik:[function(a){this.a2(H.h(a,"$isv"))},function(){return this.ik(null)},"jN","$1","$0","gec",0,2,1],
jM:[function(a,b){var z,y,x,w,v,u,t,s
H.o(b,"$isf",[E.ag],"$asf")
for(z=b.length,y=this.gec(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bl()
t.d=0
u.sa4(t)}t=u.ga4()
t.toString
H.m(y,x)
s=t.a
if(s==null){s=H.a([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a5()},"$2","gij",8,0,7],
jO:[function(a,b){var z,y,x,w,v
H.o(b,"$isf",[E.ag],"$asf")
for(z=b.length,y=this.gec(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.ga4()==null){v=new D.bl()
v.d=0
w.sa4(v)}w.ga4().S(0,y)}}this.a5()},"$2","gil",8,0,7],
$isaP:1,
q:{
bk:function(a,b,c,d,e,f){var z,y,x,w,v,u
z=new E.ag()
z.a=d
z.b=!0
y=O.d9(E.ag)
z.y=y
y.bq(z.gij(),z.gil())
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
y=z.c
if(y==null?e!=null:y!==e){z.c=e
z.d=e
z.e=null
if(y!=null)y.gt().S(0,z.gbU())
x=z.c
if(x!=null)x.gt().h(0,z.gbU())
w=new D.G("shape",y,z.c,z,[F.f_])
w.b=!0
z.a2(w)}y=z.f
if(y==null?f!=null:y!==f){if(y!=null)y.gt().S(0,z.gee())
v=z.f
z.f=f
if(f!=null)f.gt().h(0,z.gee())
z.d9()
w=new D.G("technique",v,z.f,z,[O.dC])
w.b=!0
z.a2(w)}if(!J.Z(z.r,c)){u=z.r
if(u!=null)u.gt().S(0,z.ged())
if(c!=null)c.gt().h(0,z.ged())
z.r=c
w=new D.G("mover",u,c,z,[U.a6])
w.b=!0
z.a2(w)}if(a!=null)z.y.aH(0,a)
return z}}},j1:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eD:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aL(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dq()
y=[V.aD]
z.a=H.a([],y)
z.gt().h(0,new E.j3(this))
this.cy=z
z=new O.dq()
z.a=H.a([],y)
z.gt().h(0,new E.j4(this))
this.db=z
z=new O.dq()
z.a=H.a([],y)
z.gt().h(0,new E.j5(this))
this.dx=z
z=H.a([],[O.dC])
this.dy=z
C.a.h(z,null)
this.fr=new H.aN(0,0,[P.n,A.eZ])},
giy:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gW(z)
y=this.db
y=z.j(0,y.gW(y))
this.z=y
z=y}return z},
ei:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcI(z):a;(z&&C.a).h(z,y)},
eg:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
j2:function(a,b){var z=new E.j1(a,b)
z.eD(a,b)
return z}}},j3:{"^":"u:8;a",
$1:function(a){var z
H.h(a,"$isv")
z=this.a
z.z=null
z.ch=null}},j4:{"^":"u:8;a",
$1:function(a){var z
H.h(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j5:{"^":"u:8;a",
$1:function(a){var z
H.h(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},jq:{"^":"v;c,a,0b"},jE:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z},
eK:[function(a){var z
H.h(a,"$isv")
z=this.x
if(!(z==null))z.A(a)
this.iF()},function(){return this.eK(null)},"eJ","$1","$0","gd0",0,2,1],
gi6:function(){var z,y,x
z=Date.now()
y=C.e.a_(P.ej(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aL(z,!1)
return x/y},
du:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.e(z)
x=C.h.b5(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.h.b5(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.dE(C.m,this.giE())},
iF:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.m(new E.jG(this),{func:1,ret:-1,args:[P.Y]})
C.w.ff(z)
C.w.h3(z,W.fU(y,P.Y))}},"$0","giE",0,0,3],
iB:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.du()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aL(w,!1)
x.y=P.ej(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aQ()
w=x.db
C.a.sl(w.a,0)
w.aQ()
w=x.dx
C.a.sl(w.a,0)
w.aQ()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b6(this.e)}}catch(v){z=H.aW(v)
y=H.bA(v)
P.e_("Error: "+H.k(z))
P.e_("Stack: "+H.k(y))
throw H.d(z)}},
q:{
jF:function(a,b,c,d,e){var z,y,x,w
z=J.P(a)
if(!!z.$isd5)return E.f6(a,!0,!0,!0,!1)
y=W.d6(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdG(a).h(0,y)
w=E.f6(y,!0,!0,!0,!1)
w.a=a
return w},
f6:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jE()
y=P.id(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.bW(a,"webgl",y)
x=H.h(x==null?C.k.bW(a,"experimental-webgl",y):x,"$isdx")
if(x==null)H.t(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j2(x,a)
w=new T.jz(x)
w.b=H.z(x.getParameter(3379))
w.c=H.z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jY(a)
v=new X.i8()
v.c=new X.V(!1,!1,!1)
v.d=P.ie(null,null,null,P.x)
w.b=v
v=new X.iy(w)
v.f=0
v.r=new V.M(0,0)
v.x=new V.M(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ih(w)
v.r=0
v.x=new V.M(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jI(w)
v.e=0
v.f=new V.M(0,0)
v.r=new V.M(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.a([],[[P.f2,P.b]])
w.z=v
u=document
t=W.aw
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a4(u,"contextmenu",H.m(w.gfE(),s),!1,t))
v=w.z
r=W.ah
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a4(a,"focus",H.m(w.gfH(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a4(a,"blur",H.m(w.gfz(),q),!1,r))
v=w.z
p=W.bO
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a4(u,"keyup",H.m(w.gcb(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a4(u,"keydown",H.m(w.gc0(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousedown",H.m(w.gfN(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mouseup",H.m(w.gfP(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousemove",H.m(w.gfO(),s),!1,t))
p=w.z
o=W.bZ;(p&&C.a).h(p,W.a4(a,H.U(W.hK(a)),H.m(w.gfQ(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a4(u,"mousemove",H.m(w.gfF(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a4(u,"mouseup",H.m(w.gfG(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a4(u,"pointerlockchange",H.m(w.gfR(),q),!1,r))
r=w.z
q=W.br
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a4(a,"touchstart",H.m(w.gfY(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchend",H.m(w.gfW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchmove",H.m(w.gfX(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aL(Date.now(),!1)
z.cy=0
z.du()
return z}}},jG:{"^":"u:32;a",
$1:function(a){var z
H.m6(a)
z=this.a
if(z.ch){z.ch=!1
z.iB()}}}}],["","",,Z,{"^":"",fw:{"^":"b;a,b",q:{
fx:function(a,b,c){var z
H.o(c,"$isc",[P.y],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Float32Array(H.c0(c)),35044)
a.bindBuffer(b,null)
return new Z.fw(b,z)},
cq:function(a,b,c){var z
H.o(c,"$isc",[P.x],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.c0(c)),35044)
a.bindBuffer(b,null)
return new Z.fw(b,z)}}},cz:{"^":"d1;a,b,c,d,e",
aI:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aW(y)
x=P.r('Failed to bind buffer attribute "'+J.at(this.a)+'": '+H.k(z))
throw H.d(x)}},
i:function(a){return"["+J.at(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},ka:{"^":"b;a",$ismj:1},d4:{"^":"b;a,0b,c,d",
b4:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aI:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aI(a)},
bo:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
b6:function(a){var z,y,x,w,v
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
y=H.a([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.a([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.at(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$isn2:1},bm:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bq(this.c)+"'")+"]"}},ad:{"^":"b;a",
gdJ:function(a){var z,y
z=this.a
y=(z&$.$get$a0().a)!==0?1:0
if((z&$.$get$ae().a)!==0)++y
if((z&$.$get$aS().a)!==0)++y
if((z&$.$get$a3().a)!==0)++y
if((z&$.$get$aT().a)!==0)++y
if((z&$.$get$bX().a)!==0)++y
if((z&$.$get$bY().a)!==0)++y
if((z&$.$get$bt().a)!==0)++y
return(z&$.$get$aR().a)!==0?y+1:y},
gb7:function(a){var z,y
z=this.a
y=(z&$.$get$a0().a)!==0?3:0
if((z&$.$get$ae().a)!==0)y+=3
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$a3().a)!==0)y+=2
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$bX().a)!==0)y+=3
if((z&$.$get$bY().a)!==0)y+=4
if((z&$.$get$bt().a)!==0)++y
return(z&$.$get$aR().a)!==0?y+4:y},
cl:function(a){var z,y,x
z=$.$get$a0()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ae()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$a3()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bt()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fv()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ad))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.a([],[P.n])
y=this.a
if((y&$.$get$a0().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ae().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$a3().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aT().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bX().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bY().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bt().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
az:function(a){return new Z.ad(a)}}}}],["","",,D,{"^":"",d7:{"^":"b;"},bl:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.v]}
H.m(b,z)
y=this.a
if(y==null){z=H.a([],[z])
this.a=z}else z=y
C.a.h(z,b)},
S:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[D.v]})
z=this.a
z=z==null?null:C.a.al(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).S(z,b)||!1}else y=!1
return y},
A:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.v(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.N(y,new D.hP(z))
return!0},
dL:function(){return this.A(null)},
iG:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.A(y)}}},
aA:function(a){return this.iG(a,!0,!1)},
q:{
J:function(){var z=new D.bl()
z.d=0
return z}}},hP:{"^":"u:33;a",
$1:function(a){var z
H.m(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"b;a,0b"},cj:{"^":"v;c,d,a,0b,$ti"},ck:{"^":"v;c,d,a,0b,$ti"},G:{"^":"v;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",e4:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e4))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
q:{"^":"mk<"}},Q:{"^":"b;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.Q))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},bN:{"^":"v;c,a,0b"},i7:{"^":"am;0e,0f,0r,0x,0y,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z},
gag:function(){var z=this.y
if(z==null){z=D.J()
this.y=z}return z},
d1:function(a){var z=this.e
if(!(z==null))z.A(a)},
iX:[function(a){var z,y,x
H.o(a,"$isf",[X.Q],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(C.a.al(this.a,x))return!1}return!0},"$1","geN",4,0,35],
iW:[function(a,b){var z=X.Q
z=new D.cj(a,H.o(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.d1(z)},"$2","geL",8,0,19],
iY:[function(a,b){var z=X.Q
z=new D.ck(a,H.o(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.d1(z)},"$2","geO",8,0,19],
eM:[function(a){var z
H.h(a,"$isv")
if(!this.r&&a instanceof X.bN){z=a.c
if(C.a.al(this.a,z)){this.r=!0
z=this.y
if(!(z==null))z.A(a)}}},"$1","gc0",4,0,0],
fK:[function(a){var z
H.h(a,"$isv")
if(this.r&&a instanceof X.bN){z=a.c
if(C.a.al(this.a,z))this.r=!1}},"$1","gcb",4,0,0],
a6:function(a){var z,y
if(this.f!=null)return!1
this.f=a
z=a.b
y=z.b
if(y==null){y=D.J()
z.b=y}y.h(0,this.gc0())
y=z.a
if(y==null){y=D.J()
z.a=y
z=y}else z=y
z.h(0,this.gcb())
return!0},
$asf:function(){return[X.Q]},
$asam:function(){return[X.Q]},
q:{
aC:function(){var z=new X.i7()
z.br(X.Q)
z.e=null
z.f=null
z.r=!1
z.x=null
z.y=null
z.bX(z.geL(),z.geN(),z.geO())
return z}}},i8:{"^":"b;0a,0b,0c,0d",
iv:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.bN(a,this)
y.b=!0
return z.A(y)},
ir:function(a){var z,y
this.c=a.b
this.d.S(0,a.a)
z=this.b
if(z==null)return!1
y=new X.bN(a,this)
y.b=!0
return z.A(y)}},eD:{"^":"dt;x,y,c,d,e,a,0b"},ih:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aF:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.aL(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=y.a
if(typeof t!=="number")return t.n()
y=y.b
if(typeof y!=="number")return y.n()
s=new V.M(t+x*w,y+v*u)
u=this.a.gbD()
r=new X.bQ(a,new V.M(0,0),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
cL:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.A(this.aF(a,b))
return!0},
bi:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.cU()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.aF(a,b))
return!0},
bh:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.aF(a,b))
return!0},
iw:function(a){return!1},
fM:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aL(Date.now(),!1)
y=this.f
x=new X.eD(c,a,this.a.gbD(),b,z,this)
x.b=!0
y.A(x)
this.y=z
this.x=new V.M(0,0)}},V:{"^":"b;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.V))return!1
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
return z+(this.c?"Shift+":"")}},bQ:{"^":"dt;x,y,z,Q,ch,c,d,e,a,0b"},iy:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c6:function(a,b,c){var z,y,x
z=new P.aL(Date.now(),!1)
y=this.a.gbD()
x=new X.bQ(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cL:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.A(this.c6(a,b,!0))
return!0},
bi:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.cU()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.c6(a,b,!0))
return!0},
bh:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.c6(a,b,!1))
return!0},
ix:function(a,b){return!1}},dt:{"^":"v;"},fa:{"^":"dt;x,y,z,Q,ch,c,d,e,a,0b"},jI:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aF:function(a,b){var z,y,x,w
H.o(a,"$isc",[V.M],"$asc")
z=new P.aL(Date.now(),!1)
y=a.length>0?a[0]:new V.M(0,0)
x=this.a.gbD()
w=new X.fa(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iu:function(a){var z
H.o(a,"$isc",[V.M],"$asc")
z=this.b
if(z==null)return!1
z.A(this.aF(a,!0))
return!0},
is:function(a){var z
H.o(a,"$isc",[V.M],"$asc")
z=this.c
if(z==null)return!1
z.A(this.aF(a,!0))
return!0},
it:function(a){var z
H.o(a,"$isc",[V.M],"$asc")
z=this.d
if(z==null)return!1
z.A(this.aF(a,!1))
return!0}},jY:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbD:function(){var z=this.a
return V.dv(0,0,(z&&C.k).gdH(z).c,C.k.gdH(z).d)},
di:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.Q(z,new X.V(y,a.altKey,a.shiftKey))},
aZ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.V(y,a.altKey,a.shiftKey)},
cg:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.V(y,a.altKey,a.shiftKey)},
aG:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.v()
v=z.top
if(typeof x!=="number")return x.v()
return new V.M(y-w,x-v)},
bb:function(a){return new V.a_(a.movementX,a.movementY)},
cc:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.a([],[V.M])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.h.ao(u.pageX)
C.h.ao(u.pageY)
s=z.left
C.h.ao(u.pageX)
C.a.h(y,new V.M(t-s,C.h.ao(u.pageY)-z.top))}return y},
aC:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e4(z,new X.V(y,a.altKey,a.shiftKey))},
c8:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.v()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.v()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jn:[function(a){this.f=!0},"$1","gfH",4,0,6],
jf:[function(a){this.f=!1},"$1","gfz",4,0,6],
jk:[function(a){H.h(a,"$isaw")
if(this.f&&this.c8(a))a.preventDefault()},"$1","gfE",4,0,4],
fK:[function(a){var z
H.h(a,"$isbO")
if(!this.f)return
z=this.di(a)
if(this.b.iv(z))a.preventDefault()},"$1","gcb",4,0,20],
eM:[function(a){var z
H.h(a,"$isbO")
if(!this.f)return
z=this.di(a)
if(this.b.ir(z))a.preventDefault()},"$1","gc0",4,0,20],
jr:[function(a){var z,y,x,w
H.h(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aZ(a)
if(this.x){y=this.aC(a)
x=this.bb(a)
if(this.d.cL(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aC(a)
w=this.aG(a)
if(this.c.cL(y,w))a.preventDefault()},"$1","gfN",4,0,4],
jt:[function(a){var z,y,x
H.h(a,"$isaw")
this.aZ(a)
z=this.aC(a)
if(this.x){y=this.bb(a)
if(this.d.bi(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bi(z,x))a.preventDefault()},"$1","gfP",4,0,4],
jm:[function(a){var z,y,x
H.h(a,"$isaw")
if(!this.c8(a)){this.aZ(a)
z=this.aC(a)
if(this.x){y=this.bb(a)
if(this.d.bi(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bi(z,x))a.preventDefault()}},"$1","gfG",4,0,4],
js:[function(a){var z,y,x
H.h(a,"$isaw")
this.aZ(a)
z=this.aC(a)
if(this.x){y=this.bb(a)
if(this.d.bh(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bh(z,x))a.preventDefault()},"$1","gfO",4,0,4],
jl:[function(a){var z,y,x
H.h(a,"$isaw")
if(!this.c8(a)){this.aZ(a)
z=this.aC(a)
if(this.x){y=this.bb(a)
if(this.d.bh(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bh(z,x))a.preventDefault()}},"$1","gfF",4,0,4],
ju:[function(a){var z,y
H.h(a,"$isbZ")
this.aZ(a)
z=new V.a_((a&&C.v).ghZ(a),C.v.gi_(a)).w(0,180)
if(this.x){if(this.d.iw(z))a.preventDefault()
return}if(this.r)return
y=this.aG(a)
if(this.c.ix(z,y))a.preventDefault()},"$1","gfQ",4,0,34],
jv:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aC(this.y)
v=this.aG(this.y)
this.d.fM(w,v,x)}},"$1","gfR",4,0,6],
jC:[function(a){var z
H.h(a,"$isbr")
this.a.focus()
this.f=!0
this.cg(a)
z=this.cc(a)
if(this.e.iu(z))a.preventDefault()},"$1","gfY",4,0,12],
jA:[function(a){var z
H.h(a,"$isbr")
this.cg(a)
z=this.cc(a)
if(this.e.is(z))a.preventDefault()},"$1","gfW",4,0,12],
jB:[function(a){var z
H.h(a,"$isbr")
this.cg(a)
z=this.cc(a)
if(this.e.it(z))a.preventDefault()},"$1","gfX",4,0,12]}}],["","",,D,{"^":"",cC:{"^":"b;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.J()
this.d=z}return z},
aX:[function(a){var z
H.h(a,"$isv")
z=this.d
if(!(z==null))z.A(a)},function(){return this.aX(null)},"jg","$1","$0","gfA",0,2,1],
$isa2:1,
$isaP:1},a2:{"^":"b;",$isaP:1},i9:{"^":"am;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.J()
this.Q=z}return z},
aX:function(a){var z=this.Q
if(!(z==null))z.A(a)},
fL:[function(a){var z
H.h(a,"$isv")
z=this.ch
if(!(z==null))z.A(a)},function(){return this.fL(null)},"jq","$1","$0","gdn",0,2,1],
jw:[function(a){var z,y,x
H.o(a,"$isf",[D.a2],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.fb(x))return!1}return!0},"$1","gfS",4,0,29],
ja:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a2
H.o(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gdn(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.h(b[u],"$isa2")
if(t instanceof D.cC)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bl()
s.d=0
t.d=s}H.m(x,w)
r=s.a
if(r==null){r=H.a([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.aX(z)},"$2","gfs",8,0,21],
jy:[function(a,b){var z,y,x,w,v,u
z=D.a2
H.o(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gdn(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.h(b[w],"$isa2")
if(v instanceof D.cC)C.a.S(this.e,v)
u=v.d
if(u==null){u=new D.bl()
u.d=0
v.d=u}u.S(0,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.aX(z)},"$2","gfU",8,0,21],
fb:function(a){var z=C.a.al(this.e,a)
return z},
$asf:function(){return[D.a2]},
$asam:function(){return[D.a2]}},iN:{"^":"b;",$isa2:1,$isaP:1},jo:{"^":"b;",$isa2:1,$isaP:1},jB:{"^":"b;",$isa2:1,$isaP:1},jC:{"^":"b;",$isa2:1,$isaP:1},jD:{"^":"b;",$isa2:1,$isaP:1}}],["","",,V,{"^":"",
mm:[function(a,b){if(typeof b!=="number")return b.v()
if(typeof a!=="number")return H.e(a)
return Math.abs(b-a)<=1e-9},"$2","iv",8,0,27],
cY:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.cW(a-b,z)
return(a<0?a+z:a)+b},
D:function(a,b,c){if(a==null)return C.i.aN("null",c)
return C.i.aN(C.h.em($.l.$2(a,0)?0:a,b),c+b+1)},
by:function(a,b,c){var z,y,x,w,v,u
H.o(a,"$isc",[P.y],"$asc")
z=H.a([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.D(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.m(z,u,C.i.aN(z[u],x))}return z},
dZ:function(a,b){return C.h.aa(Math.pow(b,C.l.b5(Math.log(H.lK(a))/Math.log(b))))},
aa:{"^":"b;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
aX:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aX))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
b1:{"^":"b;a",
u:function(a,b){if(b==null)return!1
if(!(b instanceof V.b1))return!1
return this.a===b.a},
i:function(a){var z,y,x
$.$get$ep()
$.$get$df()
z=H.a([],[P.n])
y=this.a
x=$.$get$b3().a
if((y&x)===x)C.a.h(z,"XPos")
x=$.$get$dg().a
if((y&x)===x)C.a.h(z,"XCenter")
x=$.$get$b2().a
if((y&x)===x)C.a.h(z,"XNeg")
x=$.$get$bI().a
if((y&x)===x)C.a.h(z,"YPos")
x=$.$get$dh().a
if((y&x)===x)C.a.h(z,"YCenter")
x=$.$get$bH().a
if((y&x)===x)C.a.h(z,"YNeg")
x=$.$get$bK().a
if((y&x)===x)C.a.h(z,"ZPos")
x=$.$get$er().a
if((y&x)===x)C.a.h(z,"ZCenter")
x=$.$get$bJ().a
if((y&x)===x)C.a.h(z,"ZNeg")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
an:function(a){return new V.b1(a)}}},
cH:{"^":"b;a,b,c,d",
i:function(a){return this.a.i(0)+" <"+this.b.i(0)+"> "+H.k(this.c)+" "+H.k(this.d)}},
aO:{"^":"b;a,b,c,d,e,f,r,x,y",
aj:function(a,b){var z=H.a([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return z},
bf:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=this.e
x=this.y
if(typeof y!=="number")return y.j()
if(typeof x!=="number")return H.e(x)
w=y*x
v=this.f
u=this.x
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
if(typeof z!=="number")return z.j()
t=this.d
s=this.b
if(typeof s!=="number")return s.j()
r=s*x
q=this.c
if(typeof q!=="number")return H.e(q)
p=u*q
if(typeof t!=="number")return t.j()
o=this.r
n=s*v-y*q
if(typeof o!=="number")return o.j()
m=z*(w-v*u)-t*(r-p)+o*n
if($.l.$2(m,0))return new V.aO(1,0,0,0,1,0,0,0,1)
l=1/m
return new V.aO((w-u*v)*l,(p-r)*l,n*l,(o*v-t*x)*l,(z*x-o*q)*l,(t*q-z*v)*l,(t*u-o*y)*l,(o*s-z*u)*l,(z*y-t*s)*l)},
ap:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
t=this.d
if(typeof t!=="number")return t.j()
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return p.j()
o=this.y
if(typeof o!=="number")return o.j()
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
M:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
t=this.d
if(typeof t!=="number")return t.j()
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return p.j()
o=this.y
if(typeof o!=="number")return o.j()
return new V.q(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aO))return!1
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
z=[P.y]
y=V.by(H.a([this.a,this.d,this.r],z),3,0)
x=V.by(H.a([this.b,this.e,this.x],z),3,0)
w=V.by(H.a([this.c,this.f,this.y],z),3,0)
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
return s+(z+w[2]+"]")},
q:{
eI:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return new V.aO(z,0,-y,0,1,0,y,0,z)}}},
aD:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aj:function(a,b){var z=H.a([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return z},
bf:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.e(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.e(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.e(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.e(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.e(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.e(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.l.$2(a2,0))return V.bp()
a3=1/a2
a4=-w
a5=-i
return V.aE((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.e(s)
r=a7.b
if(typeof r!=="number")return H.e(r)
q=a7.f
if(typeof q!=="number")return H.e(q)
p=a7.z
if(typeof p!=="number")return H.e(p)
o=a7.cy
if(typeof o!=="number")return H.e(o)
n=a7.c
if(typeof n!=="number")return H.e(n)
m=a7.r
if(typeof m!=="number")return H.e(m)
l=a7.Q
if(typeof l!=="number")return H.e(l)
k=a7.db
if(typeof k!=="number")return H.e(k)
j=a7.d
if(typeof j!=="number")return H.e(j)
i=a7.x
if(typeof i!=="number")return H.e(i)
h=a7.ch
if(typeof h!=="number")return H.e(h)
g=a7.dx
if(typeof g!=="number")return H.e(g)
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
return V.aE(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ap:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
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
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
M:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
t=this.d
if(typeof t!=="number")return H.e(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.e(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.e(l)
return new V.q(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
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
i:function(a){return this.O()},
e7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.y]
y=V.by(H.a([this.a,this.e,this.y,this.cx],z),b,c)
x=V.by(H.a([this.b,this.f,this.z,this.cy],z),b,c)
w=V.by(H.a([this.c,this.r,this.Q,this.db],z),b,c)
v=V.by(H.a([this.d,this.x,this.ch,this.dx],z),b,c)
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
O:function(){return this.e7("",3,0)},
E:function(a){return this.e7(a,3,0)},
q:{
aE:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bp:function(){return V.aE(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
cn:function(a,b,c){return V.aE(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dr:function(a,b,c,d){return V.aE(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eK:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aE(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eL:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aE(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eJ:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.D(c)))
y=b.be(z)
x=y.w(0,Math.sqrt(y.D(y)))
w=z.be(x)
v=new V.H(a.a,a.b,a.c)
return V.aE(x.a,w.a,z.a,x.K(0).D(v),x.b,w.b,z.b,w.K(0).D(v),x.c,w.c,z.c,z.K(0).D(v),0,0,0,1)}}},
M:{"^":"b;a,b",
v:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.e(w)
return new V.M(z-y,x-w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
q:{"^":"b;a,b,c",
n:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.e(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.e(u)
return new V.q(z+y,x+w,v+u)},
v:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.e(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.v()
if(typeof u!=="number")return H.e(u)
return new V.q(z-y,x-w,v-u)},
j:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
x=this.c
if(typeof x!=="number")return x.j()
return new V.q(z*b,y*b,x*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.q))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"},
q:{
b8:function(a,b,c){return new V.q(a,b,c)}}},
co:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.co))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
eT:{"^":"b;a,b,c,d,e,f",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eT))return!1
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
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"},
q:{
eU:function(a,b){return new V.eT(a.a,a.b,a.c,b.a,b.b,b.c)}}},
eW:{"^":"b;a,b,c,d",
gaz:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
eb:function(a){var z,y,x,w,v,u,t
z=$.$get$eq()
y=a.a
x=this.a
if(typeof y!=="number")return y.U()
if(y<x){w=$.$get$b2()
z=new V.b1(z.a|w.a)}else if(y>=x+this.c){w=$.$get$b3()
z=new V.b1(z.a|w.a)}else{w=$.$get$dg()
z=new V.b1(z.a|w.a)}w=a.b
v=this.b
if(typeof w!=="number")return w.U()
if(w<v)z=new V.b1(z.a|$.$get$bH().a)
else{u=z.a
z=w>=v+this.d?new V.b1(u|$.$get$bI().a):new V.b1(u|$.$get$dh().a)}u=z.a
t=$.$get$b2().a
if(!((u&t)===t)){t=$.$get$b3().a
if((u&t)===t){y=x+this.c
x=y}else x=y}y=$.$get$bH().a
if(!((u&y)===y)){y=$.$get$bI().a
if((u&y)===y){y=v+this.d
v=y}else v=w}return new V.M(x,v)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eW))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"},
q:{
dv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eW(a,b,c,d)}}},
dw:{"^":"b;a,b,c,d,e,f",
iz:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=this.a
if(typeof z!=="number")return z.n()
y=z+this.d
x=this.b
if(typeof x!=="number")return x.n()
w=x+this.e
v=this.c
if(typeof v!=="number")return v.n()
u=v+this.f
t=a1.a
if(typeof t!=="number")return t.U()
if(t<z){s=z-t
r=a1.d
if(typeof r!=="number")return H.e(r)
if(s>r)return
s/=r
q=$.$get$b2()
p=z
o=!1
n=-1}else if(t>y){s=y-t
r=a1.d
if(typeof r!=="number")return H.e(r)
if(s<r)return
s/=r
q=$.$get$b3()
p=y
o=!1
n=1}else{o=!0
s=-1
n=null
p=null
q=null}r=a1.b
if(typeof r!=="number")return r.U()
if(r<x){m=x-r
l=a1.e
if(typeof l!=="number")return H.e(l)
if(m>l)return
m/=l
k=$.$get$bH()
j=x
o=!1
i=-1}else if(r>w){m=w-r
l=a1.e
if(typeof l!=="number")return H.e(l)
if(m<l)return
m/=l
k=$.$get$bI()
j=w
o=!1
i=1}else{m=-1
i=null
j=null
k=null}l=a1.c
if(typeof l!=="number")return l.U()
if(l<v){h=v-l
g=a1.f
if(typeof g!=="number")return H.e(g)
if(h>g)return
h/=g
f=$.$get$bJ()
e=v
o=!1
d=-1}else if(l>u){h=u-l
g=a1.f
if(typeof g!=="number")return H.e(g)
if(h<g)return
h/=g
f=$.$get$bK()
e=u
o=!1
d=1}else{h=-1
d=null
e=null
f=null}if(o){z=new V.H(a1.d,a1.e,a1.f)
return new V.cH(new V.q(t,r,l),z.w(0,Math.sqrt(z.D(z))).K(0),0,$.$get$df())}if(m>s)c=h>m?2:1
else c=h>s?2:0
switch(c){case 0:z=a1.e
if(typeof z!=="number")return z.j()
b=r+z*s
if(b<x||b>w)return
z=a1.f
if(typeof z!=="number")return z.j()
a=l+z*s
if(a<v||a>u)return
return new V.cH(new V.q(p,b,a),new V.H(n,0,0),s,q)
case 1:x=a1.d
if(typeof x!=="number")return x.j()
a0=t+x*m
if(a0<z||a0>y)return
z=a1.f
if(typeof z!=="number")return z.j()
a=l+z*m
if(a<v||a>u)return
return new V.cH(new V.q(a0,j,a),new V.H(0,i,0),m,k)
default:v=a1.d
if(typeof v!=="number")return v.j()
a0=t+v*h
if(a0<z||a0>y)return
z=a1.e
if(typeof z!=="number")return z.j()
b=r+z*h
if(b<x||b>w)return
return new V.cH(new V.q(a0,b,e),new V.H(0,0,d),h,f)}},
u:function(a,b){var z
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
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"},
q:{
eX:function(a,b,c,d,e,f){return new V.dw(a,b,c,d,e,f)}}},
a_:{"^":"b;a,b",
ib:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,22],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.a_(z*b,y*b)},
w:function(a,b){var z,y
if($.l.$2(b,0))return new V.a_(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.a_(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
H:{"^":"b;a,b,c",
ib:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,22],
D:function(a){var z,y,x,w,v,u
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.e(u)
return z*y+x*w+v*u},
be:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.e(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.e(w)
v=a.a
if(typeof v!=="number")return H.e(v)
u=this.a
if(typeof u!=="number")return u.j()
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
n:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.e(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.e(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.e(u)
return new V.H(z+y,x+w,v+u)},
K:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.K()
y=this.b
if(typeof y!=="number")return y.K()
x=this.c
if(typeof x!=="number")return x.K()
return new V.H(-z,-y,-x)},
w:function(a,b){var z,y,x
if($.l.$2(b,0))return new V.H(0,0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
x=this.c
if(typeof x!=="number")return x.w()
return new V.H(z/b,y/b,x/b)},
e8:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"},
q:{
bV:function(a,b,c){return new V.H(a,b,c)}}}}],["","",,U,{"^":"",hy:{"^":"d7;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c1:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.cY(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gt:function(){var z=this.y
if(z==null){z=D.J()
this.y=z}return z},
F:function(a){var z=this.y
if(!(z==null))z.A(a)},
scQ:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.G("warp",z,b,this,[P.a8])
z.b=!0
this.F(z)}},
scJ:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c1(z)}z=new D.G("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.F(z)}},
scK:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c1(z)}z=new D.G("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.F(z)}},
sT:function(a,b){var z,y
b=this.c1(b==null?0:b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.y])
z.b=!0
this.F(z)}},
say:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.G("maximumVelocity",y,a,this,[P.y])
z.b=!0
this.F(z)}},
sG:function(a){var z,y,x
z=a==null?0:a
y=this.e
a=-y
if(!(z<a))a=z>y?y:z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.G("velocity",x,a,this,[P.y])
z.b=!0
this.F(z)}},
saK:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.y])
z.b=!0
this.F(z)}},
ab:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sT(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sG(y)}},
q:{
c7:function(){var z=new U.hy()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e9:{"^":"a6;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
aq:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e9))return!1
return J.Z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")},
q:{
aY:function(a){var z=new U.e9()
z.a=a
return z}}},eo:{"^":"am;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z},
F:[function(a){var z
H.h(a,"$isv")
z=this.e
if(!(z==null))z.A(a)},function(){return this.F(null)},"at","$1","$0","gas",0,2,1],
iZ:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a6
H.o(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gas(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.m(x,w)
r=s.a
if(r==null){r=H.a([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.F(z)},"$2","geP",8,0,23],
jx:[function(a,b){var z,y,x,w,v
z=U.a6
H.o(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gas(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gt().S(0,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.F(z)},"$2","gfT",8,0,23],
aq:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.U()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.au(z,z.length,0,[H.A(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.aq(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.bp():x
z=this.e
if(!(z==null))z.aA(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eo))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.Z(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asf:function(){return[U.a6]},
$asam:function(){return[U.a6]},
$isa6:1,
q:{
cF:function(a){var z=new U.eo()
z.br(U.a6)
z.bq(z.geP(),z.gfT())
z.aH(0,a)
z.e=null
z.f=V.bp()
z.r=0
return z}}},et:{"^":"b;0a,0b,0c,0d",
gt:function(){var z=this.b
if(z==null){z=D.J()
this.b=z}return z},
F:[function(a){var z
H.h(a,"$isv")
z=this.b
if(!(z==null))z.A(a)},function(){return this.F(null)},"at","$1","$0","gas",0,2,1],
aq:function(a,b,c){var z,y,x
z=this.d
y=b.e
if(z<y){this.d=y
z=this.b
if(!(z==null))++z.d
z=this.a
z=z==null?null:z.aq(0,b,c)
x=z==null?null:z.bf(0)
this.c=x==null?V.bp():x
z=this.b
if(!(z==null))z.aA(0)}return this.c},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.et))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
return!0},
i:function(a){return"Invert"},
$isa6:1},a6:{"^":"d7;"},eY:{"^":"a6;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gt:function(){var z=this.y
if(z==null){z=D.J()
this.y=z}return z},
F:function(a){var z=this.y
if(!(z==null))z.A(a)},
sen:function(a){var z,y
a=V.cY(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.G("yaw",y,a,this,[P.y])
z.b=!0
this.F(z)}},
sef:function(a,b){var z,y
b=V.cY(b,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,b)){y=this.b
this.b=b
z=new D.G("pitch",y,b,this,[P.y])
z.b=!0
this.F(z)}},
sej:function(a){var z,y
a=V.cY(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.G("roll",y,a,this,[P.y])
z.b=!0
this.F(z)}},
aq:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.sen(this.a+this.d*b.y)
this.sef(0,this.b+this.e*b.y)
this.sej(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aE(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).j(0,V.eL(this.b)).j(0,V.eK(this.a))
z=this.y
if(!(z==null))z.aA(0)}return this.x},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eY))return!1
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
i:function(a){return"Rotater: ["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"], ["+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"}},jZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.J()
this.fx=z}return z},
F:[function(a){var z
H.h(a,"$isv")
z=this.fx
if(!(z==null))z.A(a)},function(){return this.F(null)},"at","$1","$0","gas",0,2,1],
a6:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.J()
z.b=y
z=y}else z=y
z.h(0,this.gfo())
z=this.a.c
y=z.d
if(y==null){y=D.J()
z.d=y
z=y}else z=y
z.h(0,this.gfp())
z=this.a.c
y=z.c
if(y==null){y=D.J()
z.c=y
z=y}else z=y
z.h(0,this.gfq())
z=this.a.d
y=z.f
if(y==null){y=D.J()
z.f=y
z=y}else z=y
z.h(0,this.gfl())
z=this.a.d
y=z.d
if(y==null){y=D.J()
z.d=y
z=y}else z=y
z.h(0,this.gfm())
z=this.a.e
y=z.b
if(y==null){y=D.J()
z.b=y
z=y}else z=y
z.h(0,this.ghj())
z=this.a.e
y=z.d
if(y==null){y=D.J()
z.d=y
z=y}else z=y
z.h(0,this.ghi())
z=this.a.e
y=z.c
if(y==null){y=D.J()
z.c=y
z=y}else z=y
z.h(0,this.ghh())
return!0},
au:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.a_(z,y)},
j7:[function(a){a=H.j(H.h(a,"$isv"),"$isbQ")
if(!J.Z(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfo",4,0,0],
j8:[function(a){var z,y,x,w,v,u,t
a=H.j(H.h(a,"$isv"),"$isbQ")
if(!this.cx)return
if(this.ch){z=a.d.v(0,a.y)
z=new V.a_(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.e(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.v(0,a.y)
z=this.au(new V.a_(y.a,y.b).j(0,2).w(0,z.gaz()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.e(x)
y.sG(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.e(y)
x.sG(-z*10*y)}else{z=a.c
y=a.d
x=y.v(0,a.y)
w=this.au(new V.a_(x.a,x.b).j(0,2).w(0,z.gaz()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sT(0,-u*v+x)
this.b.sG(0)
this.c.sG(0)
y=y.v(0,a.z)
this.dx=this.au(new V.a_(y.a,y.b).j(0,2).w(0,z.gaz()))}this.at()},"$1","gfp",4,0,0],
j9:[function(a){var z,y,x
H.h(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.e(x)
z.sG(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.e(z)
x.sG(-y*10*z)
this.at()}},"$1","gfq",4,0,0],
j5:[function(a){if(H.j(H.h(a,"$isv"),"$iseD").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfl",4,0,0],
j6:[function(a){var z,y,x,w,v,u,t
a=H.j(H.h(a,"$isv"),"$isbQ")
if(!J.Z(this.d,a.x.b))return
z=a.c
y=a.d
x=y.v(0,a.y)
w=this.au(new V.a_(x.a,x.b).j(0,2).w(0,z.gaz()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sT(0,-u*v+x)
this.b.sG(0)
this.c.sG(0)
y=y.v(0,a.z)
this.dx=this.au(new V.a_(y.a,y.b).j(0,2).w(0,z.gaz()))
this.at()},"$1","gfm",4,0,0],
jG:[function(a){H.h(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghj",4,0,0],
jF:[function(a){var z,y,x,w,v,u,t
a=H.j(H.h(a,"$isv"),"$isfa")
if(!this.cx)return
if(this.ch){z=a.d.v(0,a.y)
z=new V.a_(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.e(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.v(0,a.y)
z=this.au(new V.a_(y.a,y.b).j(0,2).w(0,z.gaz()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.e(x)
y.sG(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.e(y)
x.sG(-z*10*y)}else{z=a.c
y=a.d
x=y.v(0,a.y)
w=this.au(new V.a_(x.a,x.b).j(0,2).w(0,z.gaz()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.e(u)
t=this.cy
if(typeof t!=="number")return H.e(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.e(v)
x=this.db
if(typeof x!=="number")return H.e(x)
t.sT(0,-u*v+x)
this.b.sG(0)
this.c.sG(0)
y=y.v(0,a.z)
this.dx=this.au(new V.a_(y.a,y.b).j(0,2).w(0,z.gaz()))}this.at()},"$1","ghi",4,0,0],
jE:[function(a){var z,y,x
H.h(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.e(x)
z.sG(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.e(z)
x.sG(-y*10*z)
this.at()}},"$1","ghh",4,0,0],
aq:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.U()
if(z<y){this.dy=y
x=b.y
this.c.ab(0,x)
this.b.ab(0,x)
this.fr=V.eK(this.b.d).j(0,V.eL(this.c.d))}return this.fr},
$isa6:1},k_:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dx
if(z==null){z=D.J()
this.dx=z}return z},
F:[function(a){var z
H.h(a,"$isv")
z=this.dx
if(!(z==null))z.A(a)},function(){return this.F(null)},"at","$1","$0","gas",0,2,1],
sG:function(a){this.r.sG(a.a)
this.x.sG(a.b)
this.y.sG(a.c)},
gT:function(a){return new V.q(this.r.d,this.x.d,this.y.d)},
sT:function(a,b){H.h(b,"$isq")
this.r.sT(0,b.a)
this.x.sT(0,b.b)
this.y.sT(0,b.c)},
jp:[function(a){this.F(H.h(a,"$isv"))},"$1","gfJ",4,0,0],
cj:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.n()
e+=d}else if(b.r){if(typeof e!=="number")return e.v()
e-=d}else{if(typeof e!=="number")return e.iV()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aq:function(a,b,c){var z,y,x,w,v,u,t
z=this.cy
y=b.e
if(typeof z!=="number")return z.U()
if(z<y){this.cy=y
x=this.gT(this)
w=b.y
if(w>0.1)w=0.1
z=this.ch
if(typeof z!=="number")return z.j()
v=z*w
z=this.cx
if(typeof z!=="number")return z.j()
u=z*w
t=new V.H(this.r.f,this.x.f,this.y.f)
z=this.Q
if(z!=null)t=z.ap(t)
t=new V.H(this.cj(this.a,this.b,v,u,t.a),this.cj(this.c,this.d,v,u,t.b),this.cj(this.e,this.f,v,u,t.c))
z=this.z
this.sG(z!=null?z.ap(t):t)
this.r.ab(0,w)
this.x.ab(0,w)
this.y.ab(0,w)
if(this.dy!=null){z=this.gT(this)
this.sT(0,this.dy.$2(x,z))}this.db=V.cn(this.r.d,-this.x.d,this.y.d)}return this.db},
$isa6:1}}],["","",,M,{"^":"",hM:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
b8:[function(a){var z
H.h(a,"$isv")
z=this.x
if(!(z==null))z.A(a)},function(){return this.b8(null)},"j_","$1","$0","gaR",0,2,1],
jh:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.ag
H.o(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gaR(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bl()
s.d=0
t.sa4(s)}s=t.ga4()
s.toString
H.m(x,w)
r=s.a
if(r==null){r=H.a([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.b8(z)},"$2","gfB",8,0,7],
ji:[function(a,b){var z,y,x,w,v,u
z=E.ag
H.o(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gaR(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.ga4()==null){u=new D.bl()
u.d=0
v.sa4(u)}v.ga4().S(0,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.b8(z)},"$2","gfC",8,0,7],
gt:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z},
b6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.jq(a,this)
z.b=!0
y=this.e
if(!(y==null))y.A(z)
a.ei(this.c)
y=this.b
y.toString
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
x=a.a
w=x.drawingBufferWidth
v=x.drawingBufferHeight
u=y.r
if(typeof w!=="number")return H.e(w)
t=C.h.ao(u.a*w)
if(typeof v!=="number")return H.e(v)
s=C.h.ao(u.b*v)
r=C.h.ao(u.c*w)
a.c=r
u=C.h.ao(u.d*v)
a.d=u
x.viewport(t,s,r,u)
a.a.clearDepth(y.c)
x=a.a
y=y.a
x.clearColor(y.a,y.b,y.c,y.d)
a.a.clear(16640)
y=this.a
x=a.c
u=a.d
r=y.c
q=y.d
p=y.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aE(-n/(x/u),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y.a
a.cy.eh(m)
x=$.eP
if(x==null){x=V.eJ(new V.q(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.eP=x
l=x}else l=x
x=y.b
if(x!=null){k=x.aq(0,a,y)
if(k!=null)l=k.j(0,l)}a.db.eh(l)
for(y=this.d.a,y=new J.au(y,y.length,0,[H.A(y,0)]);y.H();)y.d.ab(0,a)
for(y=this.d.a,y=new J.au(y,y.length,0,[H.A(y,0)]);y.H();)y.d.b6(a)
this.a.toString
a.cy.cM()
a.db.cM()
this.b.toString
a.eg()},
$ismV:1}}],["","",,A,{"^":"",e1:{"^":"b;a,b,c"},hk:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
i2:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
i0:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},io:{"^":"eZ;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aw,0am,0bE,0dM,0bF,0bG,0dN,0dO,0bH,0bI,0dP,0dQ,0bJ,0bK,0dR,0dS,0bL,0dT,0dU,0bM,0dV,0dW,0bN,0bO,0bP,0dX,0dY,0bQ,0bR,0dZ,0e_,0bS,0e0,0cz,0e1,0cA,0e2,0cB,0e3,0cC,0e4,0cD,0e5,0cE,a,b,0c,0d,0e,0f,0r,0x,0y",
eB:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.cp("")
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
a2.ht(z)
a2.hA(z)
a2.hu(z)
a2.hI(z)
a2.hJ(z)
a2.hC(z)
a2.hN(z)
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
s=x.charCodeAt(0)==0?x:x
x=this.z
z=new P.cp("")
z.a="precision mediump float;\n"
z.a="precision mediump float;\n\n"
v=x.r1
if(v){z.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
u="precision mediump float;\n\nvarying vec3 normalVec;\n"}else u="precision mediump float;\n\n"
if(x.r2){u+="varying vec3 binormalVec;\n"
z.a=u}if(x.rx){u+="varying vec2 txt2D;\n"
z.a=u}if(x.ry){u+="varying vec3 txtCube;\n"
z.a=u}if(x.k3){u+="varying vec3 objPos;\n"
z.a=u}if(x.k4){u+="varying vec3 viewPos;\n"
z.a=u}u+="\n"
z.a=u
t=x.y2
if(t){u+="uniform mat4 colorMat;\n"
z.a=u}if(x.fr){u+="uniform mat4 invViewMat;\n"
z.a=u}z.a=u+"\n"
x.hx(z)
x.hs(z)
x.hv(z)
x.hy(z)
x.hG(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hE(z)
x.hF(z)}x.hB(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
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
q=x.k2
if(q){r+="// === Lighting ===\n"
z.a=r
r+="\n"
z.a=r
r+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
z.a=r
r+="{\n"
z.a=r
z.a=r+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
p=H.a([],[P.n])
if(x.b!==C.b)C.a.h(p,"ambient()")
if(x.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.hw(z)
x.hD(z)
x.hH(z)
x.hK(z)
x.hL(z)
x.hM(z)
x.hz(z)}r=z.a+="// === Main ===\n"
r+="\n"
z.a=r
r+="void main()\n"
z.a=r
r+="{\n"
z.a=r
r+="   float alpha = alphaValue();\n"
z.a=r
if(v){v=r+"   vec3 norm = normal();\n"
z.a=v}else v=r
if(u)z.a=v+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
o=H.a([],[P.n])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.b)z.a+="   setDiffuseColor();\n"
if(x.d!==C.b)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.b)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.b)C.a.h(o,"emission()")
if(x.r!==C.b)C.a.h(o,"reflect(refl)")
if(x.x!==C.b)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.B(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.dj(s,35633)
this.f=this.dj(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.fY(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.t(P.r("Failed to link shader: "+H.k(m)))}this.hc()
this.he()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a2.fr)this.id=H.j(this.y.p(0,"invViewMat"),"$isaQ")
if(y)this.dy=H.j(this.y.p(0,"objMat"),"$isaQ")
if(w)this.fr=H.j(this.y.p(0,"viewObjMat"),"$isaQ")
this.fy=H.j(this.y.p(0,"projViewObjMat"),"$isaQ")
if(a2.x2)this.k1=H.j(this.y.p(0,"txt2DMat"),"$isdI")
if(a2.y1)this.k2=H.j(this.y.p(0,"txtCubeMat"),"$isaQ")
if(a2.y2)this.k3=H.j(this.y.p(0,"colorMat"),"$isaQ")
this.r1=H.a([],[A.aQ])
y=a2.aw
if(y>0){this.k4=H.h(this.y.p(0,"bendMatCount"),"$isO")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.t(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaQ"))}}y=a2.a
if(y!==C.b){this.r2=H.j(this.y.p(0,"emissionClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.rx=H.j(this.y.p(0,"emissionTxt"),"$isaq")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$isO")
break
case C.d:this.ry=H.j(this.y.p(0,"emissionTxt"),"$isar")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$isO")
break}}y=a2.b
if(y!==C.b){this.x2=H.j(this.y.p(0,"ambientClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.y1=H.j(this.y.p(0,"ambientTxt"),"$isaq")
this.aw=H.j(this.y.p(0,"nullAmbientTxt"),"$isO")
break
case C.d:this.y2=H.j(this.y.p(0,"ambientTxt"),"$isar")
this.aw=H.j(this.y.p(0,"nullAmbientTxt"),"$isO")
break}}y=a2.c
if(y!==C.b){this.am=H.j(this.y.p(0,"diffuseClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.bE=H.j(this.y.p(0,"diffuseTxt"),"$isaq")
this.bF=H.j(this.y.p(0,"nullDiffuseTxt"),"$isO")
break
case C.d:this.dM=H.j(this.y.p(0,"diffuseTxt"),"$isar")
this.bF=H.j(this.y.p(0,"nullDiffuseTxt"),"$isO")
break}}y=a2.d
if(y!==C.b){this.bG=H.j(this.y.p(0,"invDiffuseClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dN=H.j(this.y.p(0,"invDiffuseTxt"),"$isaq")
this.bH=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$isO")
break
case C.d:this.dO=H.j(this.y.p(0,"invDiffuseTxt"),"$isar")
this.bH=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a2.e
if(y!==C.b){this.bK=H.j(this.y.p(0,"shininess"),"$isX")
this.bI=H.j(this.y.p(0,"specularClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dP=H.j(this.y.p(0,"specularTxt"),"$isaq")
this.bJ=H.j(this.y.p(0,"nullSpecularTxt"),"$isO")
break
case C.d:this.dQ=H.j(this.y.p(0,"specularTxt"),"$isar")
this.bJ=H.j(this.y.p(0,"nullSpecularTxt"),"$isO")
break}}switch(a2.f){case C.b:break
case C.f:break
case C.c:this.dR=H.j(this.y.p(0,"bumpTxt"),"$isaq")
this.bL=H.j(this.y.p(0,"nullBumpTxt"),"$isO")
break
case C.d:this.dS=H.j(this.y.p(0,"bumpTxt"),"$isar")
this.bL=H.j(this.y.p(0,"nullBumpTxt"),"$isO")
break}if(a2.dy){this.dT=H.j(this.y.p(0,"envSampler"),"$isar")
this.dU=H.j(this.y.p(0,"nullEnvTxt"),"$isO")
y=a2.r
if(y!==C.b){this.bM=H.j(this.y.p(0,"reflectClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dV=H.j(this.y.p(0,"reflectTxt"),"$isaq")
this.bN=H.j(this.y.p(0,"nullReflectTxt"),"$isO")
break
case C.d:this.dW=H.j(this.y.p(0,"reflectTxt"),"$isar")
this.bN=H.j(this.y.p(0,"nullReflectTxt"),"$isO")
break}}y=a2.x
if(y!==C.b){this.bO=H.j(this.y.p(0,"refraction"),"$isX")
this.bP=H.j(this.y.p(0,"refractClr"),"$isN")
switch(y){case C.b:break
case C.f:break
case C.c:this.dX=H.j(this.y.p(0,"refractTxt"),"$isaq")
this.bQ=H.j(this.y.p(0,"nullRefractTxt"),"$isO")
break
case C.d:this.dY=H.j(this.y.p(0,"refractTxt"),"$isar")
this.bQ=H.j(this.y.p(0,"nullRefractTxt"),"$isO")
break}}}y=a2.y
if(y!==C.b){this.bR=H.j(this.y.p(0,"alpha"),"$isX")
switch(y){case C.b:break
case C.f:break
case C.c:this.dZ=H.j(this.y.p(0,"alphaTxt"),"$isaq")
this.bS=H.j(this.y.p(0,"nullAlphaTxt"),"$isO")
break
case C.d:this.e_=H.j(this.y.p(0,"alphaTxt"),"$isar")
this.bS=H.j(this.y.p(0,"nullAlphaTxt"),"$isO")
break}}this.cz=H.a([],[A.fn])
this.cA=H.a([],[A.fo])
this.cB=H.a([],[A.fp])
this.cC=H.a([],[A.fq])
this.cD=H.a([],[A.fr])
this.cE=H.a([],[A.fs])
if(a2.k2){y=a2.z
if(y>0){this.e0=H.h(this.y.p(0,"dirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.y
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isN")
x=this.cz;(x&&C.a).h(x,new A.fn(l,k,j))}}y=a2.Q
if(y>0){this.e1=H.h(this.y.p(0,"pntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isN")
x=this.y
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isN")
x=this.y
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isX")
x=this.y
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isX")
x=this.y
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isX")
x=this.cA;(x&&C.a).h(x,new A.fo(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.e2=H.h(this.y.p(0,"spotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.y
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isN")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isN")
x=this.y
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isN")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isX")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isX")
x=this.y
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isX")
x=this.y
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isX")
x=this.y
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isX")
x=this.cB;(x&&C.a).h(x,new A.fp(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e3=H.h(this.y.p(0,"txtDirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isN")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isN")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isN")
x=this.y
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isN")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isO")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isaq")
x=this.cC;(x&&C.a).h(x,new A.fq(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.e4=H.h(this.y.p(0,"txtPntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isN")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdI")
x=this.y
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isN")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isO")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isX")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isX")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isX")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isar")
x=this.cD;(x&&C.a).h(x,new A.fr(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.e5=H.h(this.y.p(0,"txtSpotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isN")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isN")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isN")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isN")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isO")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isN")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isX")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isX")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isX")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isX")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isX")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.t(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isaq")
x=this.cE;(x&&C.a).h(x,new A.fs(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ak:function(a,b,c){if(c==null||!c.ga9(c))b.a.uniform1i(b.d,1)
else{a.es(c)
b.a.uniform1i(b.d,0)}},
af:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
im:function(a,b){var z,y
z=a.am
y=new A.io(b,z)
y.eF(b,z)
y.eB(a,b)
return y}}},ir:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aw,am,bE",
ht:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aw+"];\n"
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
hA:function(a){var z
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
hu:function(a){var z
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
hI:function(a){var z,y
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
hJ:function(a){var z,y
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
hC:function(a){var z
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
hN:function(a){var z
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
aE:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cY(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hx:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aE(a,z,"emission")
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
hs:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aE(a,z,"ambient")
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
hv:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"diffuse")
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
hy:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"invDiffuse")
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
hG:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aE(a,z,"specular")
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
hB:function(a){var z,y
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
hE:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aE(a,z,"reflect")
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
hF:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aE(a,z,"refract")
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
hw:function(a){var z,y
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
hD:function(a){var z,y
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
hH:function(a){var z,y
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
hK:function(a){var z,y,x
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
hL:function(a){var z,y,x
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
hM:function(a){var z,y,x
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
hz:function(a){var z
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
i:function(a){return this.am}},fn:{"^":"b;a,b,c"},fq:{"^":"b;a,b,c,d,e,f,r,x"},fo:{"^":"b;a,b,c,d,e,f,r"},fr:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fp:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fs:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eZ:{"^":"d1;",
eF:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dj:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fY(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.r("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
hc:function(){var z,y,x,w,v,u
z=H.a([],[A.e1])
y=this.a
x=H.z(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.e(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.e1(y,v.name,u))}this.x=new A.hk(z)},
he:function(){var z,y,x,w,v,u
z=H.a([],[A.af])
y=this.a
x=H.z(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.e(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hY(v.type,v.size,v.name,u))}this.y=new A.jR(z)},
aV:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.O(z,y,b,c)
else return A.dH(z,y,b,a,c)},
fc:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aq(z,y,b,c)
else return A.dH(z,y,b,a,c)},
fd:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ar(z,y,b,c)
else return A.dH(z,y,b,a,c)},
bz:function(a,b){return new P.fz(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hY:function(a,b,c,d){switch(a){case 5120:return this.aV(b,c,d)
case 5121:return this.aV(b,c,d)
case 5122:return this.aV(b,c,d)
case 5123:return this.aV(b,c,d)
case 5124:return this.aV(b,c,d)
case 5125:return this.aV(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.jM(this.a,this.r,c,d)
case 35665:return new A.N(this.a,this.r,c,d)
case 35666:return new A.jP(this.a,this.r,c,d)
case 35667:return new A.jN(this.a,this.r,c,d)
case 35668:return new A.jO(this.a,this.r,c,d)
case 35669:return new A.jQ(this.a,this.r,c,d)
case 35674:return new A.jT(this.a,this.r,c,d)
case 35675:return new A.dI(this.a,this.r,c,d)
case 35676:return new A.aQ(this.a,this.r,c,d)
case 35678:return this.fc(b,c,d)
case 35680:return this.fd(b,c,d)
case 35670:throw H.d(this.bz("BOOL",c))
case 35671:throw H.d(this.bz("BOOL_VEC2",c))
case 35672:throw H.d(this.bz("BOOL_VEC3",c))
case 35673:throw H.d(this.bz("BOOL_VEC4",c))
default:throw H.d(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cA:{"^":"b;a,b",
i:function(a){return this.b}},af:{"^":"b;"},jR:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.k(0,b)
if(z==null)throw H.d(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.O()},
i5:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.i5("\n")}},O:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},jN:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},jO:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},jQ:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},jL:{"^":"af;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
q:{
dH:function(a,b,c,d,e){var z=new A.jL(a,b,c,e)
z.f=d
z.e=P.ig(d,0,!1,P.x)
return z}}},X:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},jM:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},N:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},jP:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},jT:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},dI:{"^":"af;a,b,c,d",
ar:function(a){var z=new Float32Array(H.c0(H.o(a,"$isc",[P.y],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},aQ:{"^":"af;a,b,c,d",
ar:function(a){var z=new Float32Array(H.c0(H.o(a,"$isc",[P.y],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},aq:{"^":"af;a,b,c,d",
es:function(a){var z,y,x
z=a==null||!a.ga9(a)
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.ga8(a))},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},ar:{"^":"af;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",av:{"^":"b;0a,0b,0c,0d,0e",
gi1:function(){return this.a==null||this.b==null||this.c==null},
f6:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.e8())return
return v.w(0,Math.sqrt(v.D(v)))},
f9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.v(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.D(z)))
z=w.v(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.be(z.w(0,Math.sqrt(z.D(z))))
return z.w(0,Math.sqrt(z.D(z)))},
ct:function(){if(this.d!=null)return!0
var z=this.f6()
if(z==null){z=this.f9()
if(z==null)return!1}this.d=z
this.a.a.a5()
return!0},
f5:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.e8())return
return v.w(0,Math.sqrt(v.D(v)))},
f8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.e(y)
n=z-y
if($.l.$2(n,0)){z=r.v(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.D(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.v()
if(typeof p!=="number")return H.e(p)
if(z-p<0)m=m.K(0)}else{y=q.b
if(typeof y!=="number")return H.e(y)
l=(z-y)/n
y=r.v(0,u).j(0,l).n(0,u).v(0,x)
y=new V.H(y.a,y.b,y.c)
m=y.w(0,Math.sqrt(y.D(y)))
o=o.a
p=p.a
if(typeof o!=="number")return o.v()
if(typeof p!=="number")return H.e(p)
q=q.a
if(typeof q!=="number")return H.e(q)
if((o-p)*l+p-q<0)m=m.K(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.D(z)))
z=k.be(m)
z=z.w(0,Math.sqrt(z.D(z))).be(k)
m=z.w(0,Math.sqrt(z.D(z)))}return m},
cs:function(){if(this.e!=null)return!0
var z=this.f5()
if(z==null){z=this.f8()
if(z==null)return!1}this.e=z
this.a.a.a5()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var z,y
if(this.gi1())return a+"disposed"
z=a+C.i.aN(J.at(this.a.e),0)+", "+C.i.aN(J.at(this.b.e),0)+", "+C.i.aN(J.at(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.E("")},
q:{
hQ:function(a,b,c){var z,y,x
z=new F.av()
y=a.a
if(y==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.r("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a5()
return z}}},ey:{"^":"b;"},eQ:{"^":"b;"},eV:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q",
gt:function(){var z=this.Q
if(z==null){z=D.J()
this.Q=z}return z},
bd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
H.o(a,"$isc",[F.bW],"$asc")
z=a.length
y=new Array(z*this.c)
y.fixed$length=Array
x=H.a(y,[P.y])
for(y=this.a,w=0,v=0;v<this.b;++v){u=y.cl(v)
for(t=0;t<z;++t){if(t>=a.length)return H.i(a,t)
s=a[t].e9(u)
r=w+t*this.c
for(q=0;q<s.length;++q){C.a.m(x,r,s[q]);++r}}w+=u.gb7(u)}p=$.$get$a0()
if((y.a&p.a)!==0){y=this.z
if(y==null){if(0>=a.length)return H.i(a,0)
y=a[0].f
y=V.eX(y.a,y.b,y.c,0,0,0)
this.z=y}for(v=z-1;v>=0;--v){if(v>=a.length)return H.i(a,v)
p=a[v].f
o=p.a
n=p.b
p=p.c
m=y.d
l=y.a
if(typeof o!=="number")return o.U()
if(typeof l!=="number")return H.e(l)
if(o<l){m+=l-o
k=o}else{if(o>l+m)m=o-l
k=l}j=y.e
o=y.b
if(typeof n!=="number")return n.U()
if(typeof o!=="number")return H.e(o)
if(n<o){j+=o-n
i=n}else{if(n>o+j)j=n-o
i=o}h=y.f
y=y.c
if(typeof p!=="number")return p.U()
if(typeof y!=="number")return H.e(y)
if(p<y){h+=y-p
g=p}else{if(p>y+h)h=p-y
g=y}y=new V.dw(k,i,g,m,j,h)
this.z=y}}r=this.d
this.d=r+z
C.a.aH(this.f,x)
this.a5()
return r},
bc:function(a){var z,y,x,w,v,u,t
z=P.x
H.o(a,"$isc",[z],"$asc")
y=a.length
if(y>=3){x=new Array((y-2)*3)
x.fixed$length=Array
w=H.a(x,[z])
if(0>=a.length)return H.i(a,0)
v=a[0]
for(u=2,t=0;u<y;++u,t+=3){C.a.m(w,t,v)
z=u-1
if(z>=a.length)return H.i(a,z)
C.a.m(w,t+1,a[z])
if(u>=a.length)return H.i(a,u)
C.a.m(w,t+2,a[u])}C.a.aH(this.y,w)
this.a5()}},
hR:function(a){var z,y,x,w,v,u,t,s,r,q
z=P.x
H.o(a,"$isc",[z],"$asc")
y=a.length
if(y>=3){x=new Array((y-2)*3)
x.fixed$length=Array
w=H.a(x,[z])
for(v=!1,u=2,t=0;u<y;++u,t+=3){z=a.length
x=u-2
s=t+1
r=t+2
q=u-1
if(v){if(x>=z)return H.i(a,x)
C.a.m(w,t,a[x])
if(q>=a.length)return H.i(a,q)
C.a.m(w,s,a[q])
if(u>=a.length)return H.i(a,u)
C.a.m(w,r,a[u])
v=!1}else{if(q>=z)return H.i(a,q)
C.a.m(w,t,a[q])
if(x>=a.length)return H.i(a,x)
C.a.m(w,s,a[x])
if(u>=a.length)return H.i(a,u)
C.a.m(w,r,a[u])
v=!0}}C.a.aH(this.y,w)
this.a5()}},
a2:function(a){var z=this.Q
if(!(z==null))z.A(a)},
a5:function(){return this.a2(null)},
aJ:function(){return!1},
b0:function(){return!1},
bC:function(){return!1},
dF:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=this.a
if(!J.Z(b,z))throw H.d(P.r("Shape was reduced to "+H.k(z)+" so can not build for "+H.k(b)+"."))
if(this.e==null){y=this.c*4
x=new Array(this.b)
x.fixed$length=Array
this.e=H.a(x,[Z.cz])
for(w=0,v=0;v<this.b;++v){u=z.cl(v)
t=u.gb7(u)
x=this.e;(x&&C.a).m(x,v,new Z.cz(u,t,w*4,y,0))
w+=t}}x=a.a
s=new Z.d4(Z.fx(x,34962,H.o(this.f,"$isc",[P.y],"$asc")),this.e,z)
z=H.a([],[Z.bm])
s.b=z
r=this.r
if(r.length!==0){q=Z.cq(x,34963,H.o(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bm(0,this.r.length,q))}r=this.x
if(r.length!==0){q=Z.cq(x,34963,H.o(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bm(1,this.x.length,q))}r=this.y
if(r.length!==0){q=Z.cq(x,34963,H.o(r,"$isc",[P.x],"$asc"))
C.a.h(z,new Z.bm(4,this.y.length,q))}return s},
$isdy:1},f_:{"^":"b;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.J()
this.e=z}return z},
aJ:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aJ()||!1
if(!this.a.aJ())y=!1
z=this.e
if(!(z==null))z.aA(0)
return y},
b0:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.b0()||!1
if(!this.a.b0())y=!1
z=this.e
if(!(z==null))z.aA(0)
return y},
bC:function(){var z=this.e
if(!(z==null))++z.d
this.a.bC()
z=this.e
if(!(z==null))z.aA(0)
return!0},
dF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=this.a.c.length
y=b.gdJ(b)
x=b.gb7(b)
w=x*4
v=new Array(z*x)
v.fixed$length=Array
u=P.y
t=H.a(v,[u])
v=new Array(y)
v.fixed$length=Array
s=H.a(v,[Z.cz])
for(r=0,q=0;q<y;++q){p=b.cl(q)
o=p.gb7(p)
C.a.m(s,q,new Z.cz(p,o,r*4,w,0))
for(n=0;n<z;++n){v=this.a.c
if(n>=v.length)return H.i(v,n)
m=v[n].e9(p)
l=r+n*x
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}v=a.a
j=new Z.d4(Z.fx(v,34962,H.o(t,"$isc",[u],"$asc")),s,b)
j.b=H.a([],[Z.bm])
this.b.b
if(this.c.b.length!==0){u=P.x
i=H.a([],[u])
for(q=0;h=this.c.b,q<h.length;++q){h=h[q].a
h.a.a.b_()
C.a.h(i,h.e)
h=this.c.b
if(q>=h.length)return H.i(h,q)
h=h[q].b
h.a.a.b_()
C.a.h(i,h.e)}g=Z.cq(v,34963,H.o(i,"$isc",[u],"$asc"))
C.a.h(j.b,new Z.bm(1,i.length,g))}if(this.d.b.length!==0){u=P.x
i=H.a([],[u])
for(q=0;h=this.d.b,q<h.length;++q){h=h[q].a
h.a.a.b_()
C.a.h(i,h.e)
h=this.d.b
if(q>=h.length)return H.i(h,q)
h=h[q].b
h.a.a.b_()
C.a.h(i,h.e)
h=this.d.b
if(q>=h.length)return H.i(h,q)
h=h[q].c
h.a.a.b_()
C.a.h(i,h.e)}g=Z.cq(v,34963,H.o(i,"$isc",[u],"$asc"))
C.a.h(j.b,new Z.bm(4,i.length,g))}return j},
i:function(a){var z=H.a([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.E("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.E("   "))}return C.a.B(z,"\n")},
a2:function(a){var z=this.e
if(!(z==null))z.A(a)},
a5:function(){return this.a2(null)},
$isdy:1},dy:{"^":"d7;"},jc:{"^":"b;a,0b",
hO:function(a){var z,y,x,w,v
H.o(a,"$isc",[F.bW],"$asc")
z=H.a([],[F.av])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.hQ(y,w,v))}return z},
gl:function(a){return this.b.length},
aJ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].ct())x=!1
return x},
b0:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cs())x=!1
return x},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.a([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
O:function(){return this.E("")}},jd:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.a([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].E(a+(""+x+". ")))}return C.a.B(z,"\n")},
O:function(){return this.E("")}},je:{"^":"b;a,0b",
gl:function(a){return 0},
i:function(a){return this.O()},
E:function(a){var z,y,x
z=H.a([],[P.n])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].E(a))}return C.a.B(z,"\n")},
O:function(){return this.E("")}},bW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
e9:function(a){var z,y
z=J.P(a)
if(z.u(a,$.$get$a0())){z=this.f
y=[P.y]
if(z==null)return H.a([0,0,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$ae())){z=this.r
y=[P.y]
if(z==null)return H.a([0,1,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aS())){z=this.x
y=[P.y]
if(z==null)return H.a([0,0,1],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$a3())){z=this.y
y=[P.y]
if(z==null)return H.a([0,0],y)
else return H.a([z.a,z.b],y)}else if(z.u(a,$.$get$aT())){z=this.z
y=[P.y]
if(z==null)return H.a([0,0,0],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bX())){z=this.Q
y=[P.y]
if(z==null)return H.a([1,1,1],y)
else return H.a([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bY())){z=this.Q
y=[P.y]
if(z==null)return H.a([1,1,1,1],y)
else return H.a([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$bt()))return H.a([this.ch],[P.y])
else if(z.u(a,$.$get$aR())){z=this.cx
y=[P.y]
if(z==null)return H.a([-1,-1,-1,-1],y)
else return H.a([z.a,z.b,z.c,z.d],y)}else return H.a([],[P.y])},
ct:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.H(0,0,0)
this.d.N(0,new F.k9(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.aA(0)}return!0},
cs:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.H(0,0,0)
this.d.N(0,new F.k8(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.aA(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var z,y,x
z=H.a([],[P.n])
C.a.h(z,C.i.aN(J.at(this.e),0))
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
C.a.h(z,V.D(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.B(z,", ")
return a+"{"+x+"}"},
O:function(){return this.E("")},
q:{
bs:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.bW()
y=new F.k7(z)
y.b=H.a([],[F.eQ])
z.b=y
y=new F.k6(z)
x=[F.ey]
y.b=H.a([],x)
y.c=H.a([],x)
z.c=y
y=new F.k3(z)
x=[F.av]
y.b=H.a([],x)
y.c=H.a([],x)
y.d=H.a([],x)
z.d=y
z.e=0
y=h.a
z.f=(y&$.$get$a0().a)!==0?d:null
z.r=(y&$.$get$ae().a)!==0?e:null
z.x=(y&$.$get$aS().a)!==0?b:null
z.y=(y&$.$get$a3().a)!==0?f:null
z.z=(y&$.$get$aT().a)!==0?g:null
z.Q=(y&$.$get$fu().a)!==0?c:null
z.ch=(y&$.$get$bt().a)!==0?i:0
z.cx=(y&$.$get$aR().a)!==0?a:null
return z}}},k9:{"^":"u:9;a",
$1:function(a){var z,y
H.h(a,"$isav")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},k8:{"^":"u:9;a",
$1:function(a){var z,y
H.h(a,"$isav")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},k2:{"^":"b;a,0b,0c",
b_:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a5()
return!0},
hQ:function(a,b,c,d,e,f,g,h,i){var z=F.bs(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bA:function(a,b,c,d,e,f){return this.hQ(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aJ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].ct()
return!0},
b0:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cs()
return!0},
bC:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.j()
t=v.b
if(typeof t!=="number")return t.j()
s=v.c
if(typeof s!=="number")return s.j()
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Z(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.A(null)}}}}return!0},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
this.b_()
z=H.a([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
O:function(){return this.E("")}},k3:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){H.m(b,{func:1,ret:-1,args:[F.av]})
C.a.N(this.b,b)
C.a.N(this.c,new F.k4(this,b))
C.a.N(this.d,new F.k5(this,b))},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.a([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
O:function(){return this.E("")}},k4:{"^":"u:9;a,b",
$1:function(a){H.h(a,"$isav")
if(!J.Z(a.a,this.a))this.b.$1(a)}},k5:{"^":"u:9;a,b",
$1:function(a){var z
H.h(a,"$isav")
z=this.a
if(!J.Z(a.a,z)&&!J.Z(a.b,z))this.b.$1(a)}},k6:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.a([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].E(a))
return C.a.B(z,"\n")},
O:function(){return this.E("")}},k7:{"^":"b;a,0b",
gl:function(a){return 0},
i:function(a){return this.O()},
E:function(a){var z,y,x
z=H.a([],[P.n])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].E(a))}return C.a.B(z,"\n")},
O:function(){return this.E("")}}}],["","",,O,{"^":"",eG:{"^":"dC;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.J()
this.dy=z}return z},
X:[function(a){var z
H.h(a,"$isv")
z=this.dy
if(!(z==null))z.A(a)},function(){return this.X(null)},"eQ","$1","$0","gbs",0,2,1],
h5:[function(a){H.h(a,"$isv")
this.a=null
this.X(a)},function(){return this.h5(null)},"jD","$1","$0","gh4",0,2,1],
jb:[function(a,b){var z=V.aD
z=new D.cj(a,H.o(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.X(z)},"$2","gft",8,0,15],
jc:[function(a,b){var z=V.aD
z=new D.ck(a,H.o(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.X(z)},"$2","gfu",8,0,15],
dg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a_(z.e.length+3,4)*4
x=C.e.a_(z.f.length+3,4)*4
w=C.e.a_(z.r.length+3,4)*4
v=C.e.a_(z.x.length+3,4)*4
u=C.e.a_(z.y.length+3,4)*4
t=C.e.a_(z.z.length+3,4)*4
s=C.e.a_(this.e.a.length+3,4)*4
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
a6=$.$get$a0()
if(c){z=$.$get$ae()
a6=new Z.ad(a6.a|z.a)}if(b){z=$.$get$aS()
a6=new Z.ad(a6.a|z.a)}if(a){z=$.$get$a3()
a6=new Z.ad(a6.a|z.a)}if(a0){z=$.$get$aT()
a6=new Z.ad(a6.a|z.a)}if(a2){z=$.$get$aR()
a6=new Z.ad(a6.a|z.a)}return new A.ir(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
R:function(a,b){H.o(a,"$isc",[T.dD],"$asc")
if(b!=null)if(!C.a.al(a,b)){b.sa8(0,a.length)
C.a.h(a,b)}},
ab:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.A(z,0)]);z.H();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ap(x)}}},
iC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.dg()
y=a.fr.k(0,z.am)
if(y==null){y=A.im(z,a.a)
x=y.b
if(x.length===0)H.t(P.r("May not cache a shader with no name."))
if(a.fr.dI(0,x))H.t(P.r('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bE
z=b.e
if(!(z instanceof Z.d4)){b.e=null
z=null}if(z==null||!J.Z(z.d,v)){z=w.r1
if(z)b.d.aJ()
u=w.r2
if(u)b.d.b0()
t=w.ry
if(t)b.d.bC()
s=b.d.dF(new Z.ka(a.a),v)
s.b4($.$get$a0()).e=this.a.Q.c
if(z)s.b4($.$get$ae()).e=this.a.cx.c
if(u)s.b4($.$get$aS()).e=this.a.ch.c
if(w.rx)s.b4($.$get$a3()).e=this.a.cy.c
if(t)s.b4($.$get$aT()).e=this.a.db.c
if(w.x1)s.b4($.$get$aR()).e=this.a.dx.c
b.e=s}z=T.dD
r=H.a([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.i2()
if(w.fx){u=this.a
t=a.dx
t=t.gW(t)
u=u.dy
u.toString
u.ar(t.aj(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gW(t)
q=a.dx
q=t.j(0,q.gW(q))
a.cx=q
t=q}u=u.fr
u.toString
u.ar(t.aj(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giy()
q=a.dx
q=t.j(0,q.gW(q))
a.ch=q
t=q}u=u.fy
u.toString
u.ar(t.aj(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.ar(t.aj(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.ar(t.aj(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.ar(C.E.aj(t,!0))}if(w.aw>0){p=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,p)
for(u=[P.y],o=0;o<p;++o){t=this.a
q=this.e.a
if(o>=q.length)return H.i(q,o)
q=q[o]
t.toString
H.h(q,"$isaD")
t=t.r1
if(o>=t.length)return H.i(t,o)
t=t[o]
n=new Float32Array(H.c0(H.o(q.aj(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,n)}}switch(w.a){case C.b:break
case C.f:u=this.a
t=this.f.f
u=u.r2
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.c:this.R(r,this.f.d)
u=this.a
t=this.f.d
u.ak(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.R(r,this.f.e)
u=this.a
t=this.f.e
u.af(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.f:u=this.a
t=this.r.f
u=u.x2
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.c:this.R(r,this.r.d)
u=this.a
t=this.r.d
u.ak(u.y1,u.aw,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.R(r,this.r.e)
u=this.a
t=this.r.e
u.af(u.y2,u.aw,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}switch(w.c){case C.b:break
case C.f:u=this.a
t=this.x.f
u=u.am
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.c:this.R(r,this.x.d)
u=this.a
t=this.x.d
u.ak(u.bE,u.bF,t)
t=this.a
u=this.x.f
t=t.am
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.R(r,this.x.e)
u=this.a
t=this.x.e
u.af(u.dM,u.bF,t)
t=this.a
u=this.x.f
t=t.am
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}switch(w.d){case C.b:break
case C.f:u=this.a
t=this.y.f
u=u.bG
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
break
case C.c:this.R(r,this.y.d)
u=this.a
t=this.y.d
u.ak(u.dN,u.bH,t)
t=this.a
u=this.y.f
t=t.bG
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break
case C.d:this.R(r,this.y.e)
u=this.a
t=this.y.e
u.af(u.dO,u.bH,t)
t=this.a
u=this.y.f
t=t.bG
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
break}switch(w.e){case C.b:break
case C.f:u=this.a
t=this.z.f
u=u.bI
u.toString
q=t.a
m=t.b
t=t.c
u.a.uniform3f(u.d,q,m,t)
t=this.a
m=this.z.ch
t=t.bK
t.a.uniform1f(t.d,m)
break
case C.c:this.R(r,this.z.d)
u=this.a
t=this.z.d
u.ak(u.dP,u.bJ,t)
t=this.a
u=this.z.f
t=t.bI
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
u=this.a
m=this.z.ch
u=u.bK
u.a.uniform1f(u.d,m)
break
case C.d:this.R(r,this.z.e)
u=this.a
t=this.z.e
u.af(u.dQ,u.bJ,t)
t=this.a
u=this.z.f
t=t.bI
t.toString
q=u.a
m=u.b
u=u.c
t.a.uniform3f(t.d,q,m,u)
u=this.a
m=this.z.ch
u=u.bK
u.a.uniform1f(u.d,m)
break}if(w.z>0){p=this.dx.e.length
u=this.a.e0
u.a.uniform1i(u.d,p)
u=a.db
l=u.gW(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
q=this.a.cz
if(k>=q.length)return H.i(q,k)
h=q[k]
q=l.ap(i.a)
m=q.a
if(typeof m!=="number")return m.j()
g=q.b
if(typeof g!=="number")return g.j()
f=q.c
if(typeof f!=="number")return f.j()
f=q.w(0,Math.sqrt(m*m+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){p=this.dx.f.length
u=this.a.e1
u.a.uniform1i(u.d,p)
u=a.db
l=u.gW(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
q=this.a.cA
if(k>=q.length)return H.i(q,k)
h=q[k]
q=i.gbj(i)
m=h.b
g=q.gcR(q)
f=q.gcS(q)
q=q.gcT(q)
m.a.uniform3f(m.d,g,f,q)
q=l.M(i.gbj(i))
f=h.c
f.a.uniform3f(f.d,q.a,q.b,q.c)
q=i.gav(i)
f=h.d
g=q.gbV()
m=q.gbp()
q=q.gbB()
f.a.uniform3f(f.d,g,m,q)
q=i.gcm()
m=h.e
m.a.uniform1f(m.d,q)
q=i.gcn()
m=h.f
m.a.uniform1f(m.d,q)
q=i.gco()
m=h.r
m.a.uniform1f(m.d,q);++k}}if(w.ch>0){p=this.dx.r.length
u=this.a.e2
u.a.uniform1i(u.d,p)
u=a.db
l=u.gW(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
q=this.a.cB
if(k>=q.length)return H.i(q,k)
h=q[k]
q=i.gbj(i)
m=h.b
g=q.gcR(q)
f=q.gcS(q)
q=q.gcT(q)
m.a.uniform3f(m.d,g,f,q)
q=i.gcw(i).jL()
f=h.c
g=q.gb1(q)
m=q.gb2(q)
q=q.gb3()
f.a.uniform3f(f.d,g,m,q)
q=l.M(i.gbj(i))
m=h.d
m.a.uniform3f(m.d,q.a,q.b,q.c)
q=i.gav(i)
m=h.e
g=q.gbV()
f=q.gbp()
q=q.gbB()
m.a.uniform3f(m.d,g,f,q)
q=i.gjK()
f=h.f
f.a.uniform1f(f.d,q)
q=i.gjJ()
f=h.r
f.a.uniform1f(f.d,q)
q=i.gcm()
f=h.x
f.a.uniform1f(f.d,q)
q=i.gcn()
f=h.y
f.a.uniform1f(f.d,q)
q=i.gco()
f=h.z
f.a.uniform1f(f.d,q);++k}}if(w.cx>0){p=this.dx.x.length
u=this.a.e3
u.a.uniform1i(u.d,p)
u=a.db
l=u.gW(u)
for(u=this.dx.x,t=u.length,q=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
m=this.a.cC
if(k>=m.length)return H.i(m,k)
h=m[k]
m=i.gbk()
H.o(r,"$isc",q,"$asc")
if(!C.a.al(r,m)){m.sa8(0,r.length)
C.a.h(r,m)}m=i.gcw(i)
g=h.d
f=m.gb1(m)
e=m.gb2(m)
m=m.gb3()
g.a.uniform3f(g.d,f,e,m)
m=i.giR()
e=h.b
f=m.gb1(m)
g=m.gb2(m)
m=m.gb3()
e.a.uniform3f(e.d,f,g,m)
m=i.gan(i)
g=h.c
f=m.gb1(m)
e=m.gb2(m)
m=m.gb3()
g.a.uniform3f(g.d,f,e,m)
m=l.ap(i.gcw(i))
e=m.a
if(typeof e!=="number")return e.j()
f=m.b
if(typeof f!=="number")return f.j()
g=m.c
if(typeof g!=="number")return g.j()
g=m.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gav(i)
f=h.f
e=g.gbV()
m=g.gbp()
g=g.gbB()
f.a.uniform3f(f.d,e,m,g)
g=i.gbk()
m=g.ga9(g)
if(!m){m=h.x
m.a.uniform1i(m.d,1)}else{m=h.r
f=g.ga9(g)
e=m.a
m=m.d
if(!f)e.uniform1i(m,0)
else e.uniform1i(m,g.ga8(g))
m=h.x
m.a.uniform1i(m.d,0)}++k}}if(w.cy>0){p=this.dx.y.length
u=this.a.e4
u.a.uniform1i(u.d,p)
u=a.db
l=u.gW(u)
for(u=this.dx.y,t=u.length,q=[P.y],m=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.cD
if(k>=g.length)return H.i(g,k)
h=g[k]
g=i.gbk()
H.o(r,"$isc",m,"$asc")
if(!C.a.al(r,g)){g.sa8(0,r.length)
C.a.h(r,g)}d=l.j(0,i.gW(i))
g=i.gW(i).M(new V.q(0,0,0))
f=h.b
e=g.gcR(g)
c=g.gcS(g)
g=g.gcT(g)
f.a.uniform3f(f.d,e,c,g)
g=d.M(new V.q(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.bf(0)
c=h.d
n=new Float32Array(H.c0(H.o(new V.aO(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).aj(0,!0),"$isc",q,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,n)
c=i.gav(i)
g=h.e
e=c.gbV()
f=c.gbp()
c=c.gbB()
g.a.uniform3f(g.d,e,f,c)
c=i.gbk()
g=c.ga9(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.ga9(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.ga8(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcm()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcn()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gco()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){p=this.dx.z.length
u=this.a.e5
u.a.uniform1i(u.d,p)
u=a.db
l=u.gW(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
q=this.a.cE
if(k>=q.length)return H.i(q,k)
h=q[k]
q=i.gbk()
H.o(r,"$isc",z,"$asc")
if(!C.a.al(r,q)){q.sa8(0,r.length)
C.a.h(r,q)}q=i.gbj(i)
m=h.b
g=q.gcR(q)
f=q.gcS(q)
q=q.gcT(q)
m.a.uniform3f(m.d,g,f,q)
q=i.gcw(i)
f=h.c
g=q.gb1(q)
m=q.gb2(q)
q=q.gb3()
f.a.uniform3f(f.d,g,m,q)
q=i.giR()
m=h.d
g=q.gb1(q)
f=q.gb2(q)
q=q.gb3()
m.a.uniform3f(m.d,g,f,q)
q=i.gan(i)
f=h.e
g=q.gb1(q)
m=q.gb2(q)
q=q.gb3()
f.a.uniform3f(f.d,g,m,q)
q=l.M(i.gbj(i))
m=h.f
m.a.uniform3f(m.d,q.a,q.b,q.c)
q=i.gbk()
m=q.ga9(q)
if(!m){q=h.x
q.a.uniform1i(q.d,1)}else{m=h.r
g=q.ga9(q)
f=m.a
m=m.d
if(!g)f.uniform1i(m,0)
else f.uniform1i(m,q.ga8(q))
q=h.x
q.a.uniform1i(q.d,0)}q=i.gav(i)
m=h.y
g=q.gbV()
f=q.gbp()
q=q.gbB()
m.a.uniform3f(m.d,g,f,q)
q=i.gjS()
f=h.z
f.a.uniform1f(f.d,q)
q=i.gjT()
f=h.Q
f.a.uniform1f(f.d,q)
q=i.gcm()
f=h.ch
f.a.uniform1f(f.d,q)
q=i.gcn()
f=h.cx
f.a.uniform1f(f.d,q)
q=i.gco()
f=h.cy
f.a.uniform1f(f.d,q);++k}}}switch(w.f){case C.b:break
case C.f:break
case C.c:this.R(r,this.Q.d)
z=this.a
u=this.Q.d
z.ak(z.dR,z.bL,u)
break
case C.d:this.R(r,this.Q.e)
z=this.a
u=this.Q.e
z.af(z.dS,z.bL,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gW(u).bf(0)
a.Q=u}z=z.id
z.toString
z.ar(u.aj(0,!0))}if(w.dy){this.R(r,this.ch)
z=this.a
u=this.ch
z.af(z.dT,z.dU,u)
switch(w.r){case C.b:break
case C.f:z=this.a
u=this.cx.f
z=z.bM
z.toString
t=u.a
q=u.b
u=u.c
z.a.uniform3f(z.d,t,q,u)
break
case C.c:this.R(r,this.cx.d)
z=this.a
u=this.cx.d
z.ak(z.dV,z.bN,u)
u=this.a
z=this.cx.f
u=u.bM
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
break
case C.d:this.R(r,this.cx.e)
z=this.a
u=this.cx.e
z.af(z.dW,z.bN,u)
u=this.a
z=this.cx.f
u=u.bM
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
break}switch(w.x){case C.b:break
case C.f:z=this.a
u=this.cy.f
z=z.bP
z.toString
t=u.a
q=u.b
u=u.c
z.a.uniform3f(z.d,t,q,u)
u=this.a
q=this.cy.ch
u=u.bO
u.a.uniform1f(u.d,q)
break
case C.c:this.R(r,this.cy.d)
z=this.a
u=this.cy.d
z.ak(z.dX,z.bQ,u)
u=this.a
z=this.cy.f
u=u.bP
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
z=this.a
q=this.cy.ch
z=z.bO
z.a.uniform1f(z.d,q)
break
case C.d:this.R(r,this.cy.e)
z=this.a
u=this.cy.e
z.af(z.dY,z.bQ,u)
u=this.a
z=this.cy.f
u=u.bP
u.toString
t=z.a
q=z.b
z=z.c
u.a.uniform3f(u.d,t,q,z)
z=this.a
q=this.cy.ch
z=z.bO
z.a.uniform1f(z.d,q)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.f:z=this.a
t=this.db.f
z=z.bR
z.a.uniform1f(z.d,t)
break
case C.c:this.R(r,this.db.d)
z=this.a
t=this.db.d
z.ak(z.dZ,z.bS,t)
t=this.a
z=this.db.f
t=t.bR
t.a.uniform1f(t.d,z)
break
case C.d:this.R(r,this.db.e)
z=this.a
t=this.db.e
z.af(z.e_,z.bS,t)
t=this.a
z=this.db.f
t=t.bR
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<r.length;++o)r[o].aI(a)
z=b.e
z.aI(a)
z.b6(a)
z.bo(a)
if(u)a.a.disable(3042)
for(o=0;o<r.length;++o)r[o].bo(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.i0()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dg().am},
q:{
eH:function(){var z,y,x
z=new O.eG()
y=O.d9(V.aD)
z.e=y
y.bq(z.gft(),z.gfu())
y=new O.bo(z,"emission")
y.c=C.b
y.f=new V.aa(0,0,0)
z.f=y
y=new O.bo(z,"ambient")
y.c=C.b
y.f=new V.aa(0,0,0)
z.r=y
y=new O.bo(z,"diffuse")
y.c=C.b
y.f=new V.aa(0,0,0)
z.x=y
y=new O.bo(z,"invDiffuse")
y.c=C.b
y.f=new V.aa(0,0,0)
z.y=y
y=new O.it(z,"specular")
y.c=C.b
y.f=new V.aa(0,0,0)
y.ch=100
z.z=y
y=new O.iq(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.bo(z,"reflect")
y.c=C.b
y.f=new V.aa(0,0,0)
z.cx=y
y=new O.is(z,"refract")
y.c=C.b
y.f=new V.aa(0,0,0)
y.ch=1
z.cy=y
y=new O.ip(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.i9()
y.br(D.a2)
y.e=H.a([],[D.cC])
y.f=H.a([],[D.iN])
y.r=H.a([],[D.jo])
y.x=H.a([],[D.jB])
y.y=H.a([],[D.jC])
y.z=H.a([],[D.jD])
y.Q=null
y.ch=null
y.bX(y.gfs(),y.gfS(),y.gfU())
z.dx=y
x=y.Q
if(x==null){x=D.J()
y.Q=x
y=x}else y=x
y.h(0,z.gh4())
y=z.dx
x=y.ch
if(x==null){x=D.J()
y.ch=x
y=x}else y=x
y.h(0,z.gbs())
z.dy=null
return z}}},ip:{"^":"dp;0f,a,b,0c,0d,0e",
h8:function(a){var z,y
z=this.f
if(!$.l.$2(z,a)){y=this.f
this.f=a
z=new D.G(this.b,y,a,this,[P.y])
z.b=!0
this.a.X(z)}},
aY:function(){this.d_()
this.h8(1)}},dp:{"^":"b;",
X:[function(a){this.a.X(H.h(a,"$isv"))},function(){return this.X(null)},"eQ","$1","$0","gbs",0,2,1],
aY:["d_",function(){}],
ha:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gt().S(0,this.gbs())
y=this.d
this.d=a
if(a!=null)a.gt().h(0,this.gbs())
z=new D.G(this.b+".texture2D",y,this.d,this,[T.cN])
z.b=!0
this.a.X(z)}},
hb:function(a){},
sbl:function(a){var z
if(a==null){if(this.c===C.c){this.c=C.f
z=this.a
z.a=null
z.X(null)}}else{z=this.c
if(z!==C.c){if(z===C.b)this.aY()
this.c=C.c
this.hb(null)
z=this.a
z.a=null
z.X(null)}}this.ha(a)}},iq:{"^":"dp;a,b,0c,0d,0e"},bo:{"^":"dp;0f,a,b,0c,0d,0e",
dv:function(a){var z,y
if(!J.Z(this.f,a)){z=this.f
this.f=a
y=new D.G(this.b+".color",z,a,this,[V.aa])
y.b=!0
this.a.X(y)}},
aY:["c_",function(){this.d_()
this.dv(new V.aa(1,1,1))}],
sav:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.aY()
z=this.a
z.a=null
z.X(null)}this.dv(b)}},is:{"^":"bo;0ch,0f,a,b,0c,0d,0e",
h9:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".refraction",y,a,this,[P.y])
z.b=!0
this.a.X(z)}},
aY:function(){this.c_()
this.h9(1)}},it:{"^":"bo;0ch,0f,a,b,0c,0d,0e",
ce:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".shininess",y,a,this,[P.y])
z.b=!0
this.a.X(z)}},
aY:function(){this.c_()
this.ce(100)}},dC:{"^":"b;"}}],["","",,T,{"^":"",dD:{"^":"d1;"},cN:{"^":"dD;"},jx:{"^":"cN;0a,0b,0c,0d,0e,0f",
ga8:function(a){return this.a},
sa8:function(a,b){this.a=b
return b},
ga9:function(a){var z=this.d
z=z==null?null:z.ga9(z)
if(z==null){z=this.c
z=z==null?null:z.ga9(z)}return z==null?!1:z},
gt:function(){var z=this.f
if(z==null){z=D.J()
this.f=z}return z},
aI:function(a){var z
if(this.d==null){z=this.c
this.d=z
if(!(z==null))z.aI(a)}},
bo:function(a){var z=this.d
if(z!=null){z.bo(a)
this.d=null}}},jy:{"^":"cN;0a,0b,0c,0d,0e,0f,0r,0x,0y",
ga8:function(a){return this.a},
sa8:function(a,b){this.a=b
return b},
ga9:function(a){return this.d},
gt:function(){var z=this.y
if(z==null){z=D.J()
this.y=z}return z},
aI:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
bo:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,null)}}},jz:{"^":"b;a,0b,0c,0d,0e",
ig:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9987)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.jy()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ah
W.a4(x,"load",H.m(new T.jA(this,w,x,!1,y,!1,!0),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ie:function(a,b,c,d){return this.ig(a,!1,b,c,d)},
h6:function(a,b,c){var z,y,x,w
b=V.dZ(b,2)
z=V.dZ(a.width,2)
y=V.dZ(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d6(null,null)
x.width=z
x.height=y
w=H.h(C.k.ep(x,"2d"),"$ise6")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.lO(w.getImageData(0,0,x.width,x.height))}}},jA:{"^":"u:24;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.h6(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.N.iK(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.dL()}++x.e}}}],["","",,V,{"^":"",hh:{"^":"b;",
bg:function(a,b){return!0},
i:function(a){return"all"},
$iscm:1},cm:{"^":"b;"},eF:{"^":"b;",
bg:["ey",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].bg(0,b))return!0
return!1}],
i:["cZ",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$iscm:1},bR:{"^":"eF;0a",
bg:function(a,b){return!this.ey(0,b)},
i:function(a){return"!["+this.cZ(0)+"]"}},ja:{"^":"b;0a",
eE:function(a){var z,y
if(a.a.length<=0)throw H.d(P.r("May not create a SetMatcher with zero characters."))
z=new H.aN(0,0,[P.x,P.a8])
for(y=new H.eB(a,a.gl(a),0,[H.aA(a,"w",0)]);y.H();)z.m(0,y.d,!0)
this.a=z},
bg:function(a,b){return this.a.dI(0,b)},
i:function(a){var z=this.a
return P.dB(new H.eA(z,[H.A(z,0)]),0,null)},
$iscm:1,
q:{
ac:function(a){var z=new V.ja()
z.eE(a)
return z}}},f1:{"^":"b;a,b,0c,0d",
gii:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fb(this.a.L(0,b))
w.a=H.a([],[V.cm])
w.c=!1
C.a.h(this.c,w)
return w},
i4:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.bg(0,a))return w}return},
i:function(a){return this.b}},f8:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h9(this.b,"\n","\\n")
y=H.h9(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},f9:{"^":"b;a,b,0c",
i:function(a){return this.b}},jH:{"^":"b;0a,0b,0c",
L:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.f1(this,b)
z.c=H.a([],[V.fb])
this.a.m(0,b,z)}return z},
bm:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.f9(this,a)
y=P.n
z.c=new H.aN(0,0,[y,y])
this.b.m(0,a,z)}return z},
iP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.a([],[V.f8])
y=this.c
x=[P.x]
w=H.a([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bu(a,t)
r=y.i4(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.dB(w,0,null)
throw H.d(P.r("Untokenizable string [state: "+y.gii(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.a([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.dB(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.f8(o==null?p.b:o,q,t)}++t}}}},fb:{"^":"eF;b,0c,0a",
i:function(a){return this.b.b+": "+this.cZ(0)}}}],["","",,X,{"^":"",e5:{"^":"b;",$isaP:1},hV:{"^":"f4;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.J()
this.x=z}return z}},iI:{"^":"b;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.J()
this.f=z}return z},
b9:[function(a){var z
H.h(a,"$isv")
z=this.f
if(!(z==null))z.A(a)},function(){return this.b9(null)},"j0","$1","$0","gd2",0,2,1],
sea:function(a){var z,y
if(!J.Z(this.b,a)){z=this.b
if(z!=null)z.gt().S(0,this.gd2())
y=this.b
this.b=a
if(a!=null)a.gt().h(0,this.gd2())
z=new D.G("mover",y,this.b,this,[U.a6])
z.b=!0
this.b9(z)}},
$isaP:1,
$ise5:1},f4:{"^":"b;"}}],["","",,V,{"^":"",jk:{"^":"b;0a,0b",
eG:function(a,b){var z,y,x,w,v,u,t
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
t=W.ah
W.a4(z,"scroll",H.m(new V.jn(x),{func:1,ret:-1,args:[t]}),!1,t)},
hP:function(a,b,c){var z,y,x,w
a=H.z(C.e.hU(a,0,4))
if(c.length===0)c=P.fP(C.r,b,C.o,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.hi(null)
w.href="#"+c
w.textContent=b
z.appendChild(w)
this.a.appendChild(z)},
ck:function(a,b){return this.hP(a,b,"")},
V:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.o(a,"$isc",[P.n],"$asc")
this.hd()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iP(C.a.ia(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.h8(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.fP(C.r,s,C.o,!1)
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
hd:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jH()
y=P.n
z.a=new H.aN(0,0,[y,V.f1])
z.b=new H.aN(0,0,[y,V.f9])
z.c=z.L(0,"Start")
y=z.L(0,"Start").B(0,"Bold")
x=V.ac(new H.a9("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").B(0,"Bold")
x=new V.bR()
w=[V.cm]
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a9("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").B(0,"BoldEnd")
x=V.ac(new H.a9("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").B(0,"Italic")
x=V.ac(new H.a9("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").B(0,"Italic")
x=new V.bR()
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a9("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").B(0,"ItalicEnd")
x=V.ac(new H.a9("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").B(0,"Code")
x=V.ac(new H.a9("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").B(0,"Code")
x=new V.bR()
x.a=H.a([],w)
C.a.h(y.a,x)
y=V.ac(new H.a9("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").B(0,"CodeEnd")
x=V.ac(new H.a9("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").B(0,"LinkHead")
x=V.ac(new H.a9("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").B(0,"LinkTail")
x=V.ac(new H.a9("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").B(0,"LinkEnd")
y=V.ac(new H.a9("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").B(0,"LinkHead")
y=new V.bR()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a9("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").B(0,"LinkEnd")
y=V.ac(new H.a9("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").B(0,"LinkTail")
y=new V.bR()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a9("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").B(0,"Other").a,new V.hh())
x=z.L(0,"Other").B(0,"Other")
y=new V.bR()
y.a=H.a([],w)
C.a.h(x.a,y)
x=V.ac(new H.a9("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.bm("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.bm("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.bm("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.bm("Link")
x=z.L(0,"Other")
x.d=x.a.bm("Other")
this.b=z},
q:{
jl:function(a,b){var z=new V.jk()
z.eG(a,!0)
return z}}},jn:{"^":"u:24;a",
$1:function(a){P.dE(C.m,new V.jm(this.a))}},jm:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.h.ao(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,B,{"^":"",
hq:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
hp:function(a,b){var z
if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(!(a>=200&&a<=205))if(b!==1)z=b>=200&&b<=205
else z=!0
else z=!1
return z},
h4:function(){var z,y,x
z=V.jl("3Dart Craft",!0)
y=[P.n]
z.V(H.a(["This example is in development and may still have a few issues and glitches."],y))
x=W.d6(null,null)
x.className="pageLargeCanvas"
x.id="targetCanvas"
z.a.appendChild(x)
z.ck(1,"About")
z.V(H.a(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],y))
z.V(H.a(["\xab[Back to Examples List|../../]"],y))
z.ck(1,"Controls")
z.V(H.a(["\u2022 _Currently there are no controls for mobile browsers_"],y))
z.V(H.a(["\u2022 *Esc* to release the mouse capture"],y))
z.V(H.a(["\u2022 *W* or *Up arrow* to move forward"],y))
z.V(H.a(["\u2022 *S* or *Down arrow* to move backward"],y))
z.V(H.a(["\u2022 *A* or *Left arrow* to strife left"],y))
z.V(H.a(["\u2022 *D* or *Right arror* to strife right"],y))
z.V(H.a(["\u2022 *Space bar* to jump"],y))
z.V(H.a(["\u2022 *Tab* cycles the block selected which can be placed"],y))
z.V(H.a(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],y))
z.V(H.a(["\u2022 *Left click* or *Q* removes the currently highlighted block"],y))
z.V(H.a(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],y))
z.V(H.a(["\u2022 *O* to return the starting location"],y))
z.ck(1,"Help wanted")
z.V(H.a(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],y))
z.V(H.a(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],y))
P.dE(C.m,B.m3())},
nr:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
z=document.getElementById("targetCanvas")
if(z==null)H.t(P.r("Failed to find an element with the identifier, targetCanvas."))
y=E.jF(z,!0,!0,!0,!1)
x=new B.iu(y)
w=P.x
x.b=new H.aN(0,0,[w,B.W])
x.c=new H.aN(0,0,[w,[P.c,P.x]])
x.d=H.a([],[O.eG])
v=new V.aa(1,1,1)
u=new V.q(0,0,0)
t=new V.q(0.5,-1,0.2).v(0,u)
t=U.aY(V.eJ(u,new V.H(0,0,1),new V.H(t.a,t.b,t.c)))
u=new D.cC()
u.c=new V.aa(1,1,1)
u.a=new V.H(0,0,1)
s=u.b
u.b=t
t.gt().h(0,u.gfA())
t=new D.G("mover",s,u.b,u,[U.a6])
t.b=!0
u.aX(t)
if(!u.c.u(0,v)){s=u.c
u.c=v
t=new D.G("color",s,v,u,[V.aa])
t.b=!0
u.aX(t)}x.e=u
r=x.I(x.C("boundary"),!1)
q=x.I(x.C("brick"),!1)
p=x.I(x.C("dirt"),!1)
o=x.I(x.C("dryLeavesSide"),!1)
n=x.I(x.C("dryLeavesTop"),!1)
m=x.I(x.C("leaves"),!1)
l=x.I(x.C("rock"),!1)
k=x.I(x.C("sand"),!1)
j=x.I(x.C("trunkEnd"),!1)
i=x.I(x.C("trunkSide"),!1)
h=x.I(x.C("trunkTilted"),!1)
g=x.I(x.C("turfSide"),!1)
f=x.I(x.C("turfTop"),!1)
e=x.I(x.C("woodEnd"),!1)
d=x.I(x.C("woodSide"),!1)
c=x.I(x.C("woodTilted"),!1)
b=x.I(x.C("blackShine"),!0)
a=x.I(x.C("redShine"),!0)
a0=x.I(x.C("yellowShine"),!0)
a1=x.I(x.C("whiteShine"),!0)
a2=x.I(x.C("mushroomBottom"),!1)
a3=x.I(x.C("mushroomSide"),!1)
a4=x.I(x.C("mushroomTop"),!1)
a5=x.I(x.C("grass"),!1)
a6=x.I(x.C("fern"),!1)
a7=x.I(x.C("blueFlowers"),!1)
a8=x.I(x.C("redFlowers"),!1)
a9=x.I(x.C("whiteFlowers"),!1)
u=T.cN
t=P.eC([x.C("water1"),x.C("water2"),x.C("water3")],!0,u)
b0=new T.jx()
b0.a=0
b0.b=0
b0.e=H.o(t,"$isc",[u],"$asc")
x.x=b0
b1=x.I(b0,!0)
x.b.m(0,100,new B.W(r,r,r,r,r,r))
x.b.m(0,101,new B.W(p,p,p,p,p,p))
x.b.m(0,102,new B.W(f,p,g,g,g,g))
x.b.m(0,103,new B.W(l,l,l,l,l,l))
x.b.m(0,104,new B.W(k,k,k,k,k,k))
x.b.m(0,105,new B.W(n,p,o,o,o,o))
x.b.m(0,106,new B.W(j,j,i,i,i,i))
x.b.m(0,107,new B.W(i,i,h,h,j,j))
x.b.m(0,108,new B.W(h,h,j,j,h,h))
x.b.m(0,109,new B.W(q,q,q,q,q,q))
x.b.m(0,110,new B.W(a,a,a,a,a,a))
x.b.m(0,111,new B.W(a1,a1,a1,a1,a1,a1))
x.b.m(0,112,new B.W(a0,a0,a0,a0,a0,a0))
x.b.m(0,113,new B.W(b,b,b,b,b,b))
x.b.m(0,114,new B.W(m,m,m,m,m,m))
x.b.m(0,115,new B.W(e,e,d,d,d,d))
x.b.m(0,116,new B.W(d,d,c,c,e,e))
x.b.m(0,117,new B.W(c,c,e,e,c,c))
x.b.m(0,1,new B.W(b1,b1,b1,b1,b1,b1))
w=[w]
u=H.o(H.a([a5],w),"$isc",w,"$asc")
x.c.m(0,200,u)
u=H.o(H.a([a6],w),"$isc",w,"$asc")
x.c.m(0,201,u)
u=H.o(H.a([a9],w),"$isc",w,"$asc")
x.c.m(0,202,u)
u=H.o(H.a([a7],w),"$isc",w,"$asc")
x.c.m(0,203,u)
u=H.o(H.a([a8],w),"$isc",w,"$asc")
x.c.m(0,204,u)
w=H.o(H.a([a4,a2,a3],w),"$isc",w,"$asc")
x.c.m(0,205,w)
x.f=x.d5("selection")
x.r=x.d5("crosshair")
b2=B.kf(x)
b3=B.iL(y,b2)
b4=new M.hM()
w=O.d9(E.ag)
b4.d=w
w.bq(b4.gfB(),b4.gfC())
b4.e=null
b4.f=null
b4.r=null
b4.x=null
b5=new X.iI()
b5.c=1.0471975511965976
b5.d=0.1
b5.e=2000
b5.sea(null)
w=b5.c
if(!$.l.$2(w,1.0471975511965976)){s=b5.c
b5.c=1.0471975511965976
w=new D.G("fov",s,1.0471975511965976,b5,[P.y])
w.b=!0
b5.b9(w)}w=b5.d
if(!$.l.$2(w,0.1)){s=b5.d
b5.d=0.1
w=new D.G("near",s,0.1,b5,[P.y])
w.b=!0
b5.b9(w)}w=b5.e
if(!$.l.$2(w,2000)){s=b5.e
b5.e=2000
w=new D.G("far",s,2000,b5,[P.y])
w.b=!0
b5.b9(w)}w=b4.a
if(w!==b5){if(w!=null)w.gt().S(0,b4.gaR())
s=b4.a
b4.a=b5
b5.gt().h(0,b4.gaR())
w=new D.G("camera",s,b4.a,b4,[X.e5])
w.b=!0
b4.b8(w)}b6=new X.hV()
w=new V.aX(0,0,0,1)
b6.a=w
b6.b=!0
b6.c=2000
b6.d=!0
b6.e=0
b6.f=!1
w=V.dv(0,0,1,1)
b6.r=w
w=b4.b
if(w!==b6){if(w!=null)w.gt().S(0,b4.gaR())
s=b4.b
b4.b=b6
b6.gt().h(0,b4.gaR())
w=new D.G("target",s,b4.b,b4,[X.f4])
w.b=!0
b4.b8(w)}w=b4.e
if(w==null){w=D.J()
b4.e=w}w.h(0,b2.giS(b2))
b4.a.sea(b3.r)
for(w=b2.e,u=w.length,b7=0;b7<w.length;w.length===u||(0,H.B)(w),++b7){b8=w[b7]
t=b4.d
b0=H.A(t,0)
H.E(b8,b0)
b9=[b0]
if(t.ba(H.a([b8],b9))){c0=t.a
c1=c0.length
C.a.h(c0,b8)
b0=H.o(H.a([b8],b9),"$isf",[b0],"$asf")
t=t.c
if(t!=null)t.$2(c1,b0)}}b4.d.h(0,b3.cy)
b2.f=b3
w=y.d
if(w!==b4){if(w!=null)w.gt().S(0,y.gd0())
y.d=b4
b4.gt().h(0,y.gd0())
y.eJ()}b3.cV()
w=b4.b
v=new V.aX(0.576,0.784,0.929,1)
if(!w.a.u(0,v)){s=w.a
w.a=v
u=new D.G("color",s,v,w,[V.aX])
u.b=!0
w=w.x
if(!(w==null))w.A(u)}P.cO(C.A,new B.ma(y,b2))},"$0","m3",0,0,3],
ho:{"^":"b;a,b,c,d,e,f",
i:function(a){return H.k(this.f)+".block("+this.a+", "+this.b+", "+this.c+", ("+this.d+", "+this.e+"), "+B.hq(this.gaO(this))+")"},
gaO:function(a){var z=this.f
z=z==null?null:z.a3(this.a,this.b,this.c)
if(z==null)z=this.b<0?100:0
return z}},
iC:{"^":"b;a,b"},
e7:{"^":"b;0a,0b,c,0d,0e,0f,0r,0x",
eA:function(a){var z,y,x,w,v,u,t,s,r,q
this.d=new Uint8Array(12288)
this.e=H.a([],[E.ag])
for(z=this.c.e,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
v=E.bk(null,!0,null,"",null,null)
u=w.y
t=H.A(u,0)
H.E(v,t)
s=[t]
if(u.ba(H.a([v],s))){r=u.a
q=r.length
C.a.h(r,v)
t=H.o(H.a([v],s),"$isf",[t],"$asf")
u=u.c
if(u!=null)u.$2(q,t)}u=this.e;(u&&C.a).h(u,v)}this.a=0
this.b=0
this.f=!1
this.r=!0
this.x=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
a3:function(a,b,c){var z,y
if(b<0)return 100
if(b>=48||a<0||a>=16||c<0||c>=16)return 0
z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.i(z,y)
return z[y]},
aP:function(a,b,c){var z,y
if(b<0)return 100
if(b>=48)return 0
if(a<0){z=this.gah(this)
z=z==null?null:z.aP(a+16,b,c)
return z==null?0:z}if(a>=16){z=this.gan(this)
z=z==null?null:z.aP(a-16,b,c)
return z==null?0:z}if(c<0){z=this.gcp(this)
z=z==null?null:z.aP(a,b,c+16)
return z==null?0:z}if(c>=16){z=this.gcG()
z=z==null?null:z.aP(a,b,c-16)
return z==null?0:z}z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.i(z,y)
return z[y]},
a7:function(a,b,c,d){var z,y
H.z(a)
H.z(b)
if(b<0||b>=48||a<0||a>=16||c<0||c>=16)return!1
z=this.d
y=(a*48+b)*16+c
if(y<0||y>=12288)return H.i(z,y)
z[y]=d
return!0},
gah:function(a){return this.c.aL(this.a-16,this.b)},
gcG:function(){return this.c.aL(this.a,this.b+16)},
gan:function(a){return this.c.aL(this.a+16,this.b)},
gcp:function(a){return this.c.aL(this.a,this.b-16)},
cP:function(a,b,c){var z,y
for(z=47;z>=0;--z){y=this.a3(a,z,b)
if(y>=100&&y<=117)return z}return c},
iQ:function(a,b){return this.cP(a,b,48)},
iT:function(){if(this.x||!this.r)return
this.r=!1
this.f=!1
var z=B.dz(this.c.a,null)
z.hT(this)
z.cF(0,this.e)},
saD:function(a){var z,y,x
for(z=this.e,y=z.length,x=0;x<y;++x)z[x].b=a},
iU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
if(this.x||this.r){this.saD(!1)
return}z=V.dv(this.a,this.b,16,16)
y=z.eb(a)
x=y.a
w=a.a
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.e(w)
v=x-w
x=y.b
u=a.b
if(typeof x!=="number")return x.v()
if(typeof u!=="number")return H.e(u)
t=x-u
if(v*v+t*t<100){this.saD(!0)
return}s=z.eb(b)
x=b.a
if(typeof x!=="number")return x.v()
r=b.b
if(typeof r!=="number")return r.v()
r=new V.a_(x-w,r-u)
q=r.w(0,Math.sqrt(r.D(r)))
r=s.a
if(typeof r!=="number")return r.v()
x=s.b
if(typeof x!=="number")return x.v()
p=new V.a_(r-w,x-u)
o=p.D(p)
if(o>6400){this.saD(!1)
return}this.saD(q.D(p.w(0,o))>0)},
q:{
ht:function(a){var z=new B.e7(a)
z.eA(a)
return z}}},
hW:{"^":"b;0a,0b,0c",
e6:function(a){var z
this.c=a
this.h_()
C.t.i3(this.c.d,0,12288,0)
this.hn()
this.f3()
this.f1()
this.hl()
this.eX()
this.fZ()
this.eU()
this.hk()
a.x=!1
a.f=!0
a.saD(!1)
z=a.gah(a)
if(!(z==null))z.f=!0
z=a.gan(a)
if(!(z==null))z.f=!0
z=a.gcG()
if(!(z==null))z.f=!0
z=a.gcp(a)
if(!(z==null))z.f=!0},
ae:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=this.c
x=(a+y.a)*c
y=(b+y.b)*c
w=new B.b7(x,y)
v=w.n(0,$.$get$el().j(0,x+y))
y=Math.floor(v.a)
x=Math.floor(v.b)
u=new B.b7(y,x)
t=u.n(0,$.$get$dd().j(0,y+x))
s=v.v(0,u)
w=new B.hO(z.a,u,w.v(0,t),s)
w.e=0
w.ac(1,0)
w.ac(0,1)
z=s.a
x=s.b
r=z+x
if(r<=1){q=1-r
if(q>z||q>x)if(z>x)w.ac(1,-1)
else w.ac(-1,1)
else w.ac(1,1)
w.ac(0,0)}else{q=2-r
if(q<z||q<x)if(z>x)w.ac(2,0)
else w.ac(0,2)
else w.ac(0,0)
w.ac(1,1)}return w.e/47*0.5+0.5},
ci:function(a,b){var z,y
z=this.b
y=(a+3)*22+(b+3)
if(y<0||y>=484)return H.i(z,y)
return z[y]},
h_:function(){var z,y,x,w,v
for(z=0,y=-3;y<19;++y)for(x=-3;x<19;++x){w=C.h.aa(Math.pow(0.6*this.ae(y,x,0.001)+0.3*this.ae(y,x,0.01)+0.1*this.ae(y,x,0.1),2)*48)
if(w>=48)w=47
v=this.b
if(z<0||z>=484)return H.i(v,z)
v[z]=w;++z}},
hn:function(){var z,y
for(z=0;z<16;++z)for(y=0;y<16;++y)this.ho(z,y)},
ho:function(a,b){var z,y,x,w,v
z=this.ci(a,b)
for(y=z-2,x=z<8,w=0;w<=z;++w){if(x)v=y<=w?104:103
else if(z===w)v=102
else v=y<=w?101:103
this.c.a7(a,w,b,v)}},
f3:function(){var z,y
for(z=0;z<16;++z)for(y=0;y<16;++y)this.f4(z,y)},
f4:function(a,b){var z,y
z=this.c.cP(a,b,0)
if(z<8)for(y=8;y>z;--y)this.c.a7(a,y,b,1)},
f1:function(){var z,y
for(z=-1;z<=16;++z)for(y=-1;y<=16;++y)this.f2(z,y)},
f2:function(a,b){var z,y,x,w,v,u
if(this.ci(a,b)<8)for(z=10;z>6;--z)for(y=-1;y<=1;++y)for(x=a+y,w=-1;w<=1;++w){v=b+w
u=this.c.a3(x,z,v)
if(u===102||u===105)this.c.a7(x,z,v,104)}},
hl:function(){var z,y
for(z=-3;z<19;++z)for(y=-3;y<19;++y)if(this.ae(z,y,1.5)<0.1)this.eY(z,y)},
eY:function(a,b){var z,y,x,w
z=this.c
y=a+z.a
if(y>=-30)if(y<30){z=b+z.b
z=z>=-30&&z<30}else z=!1
else z=!1
if(z)return
x=this.ci(a,b)
if(x<10)return
for(w=1;w<8;++w)this.c.a7(a,x+w,b,106)
this.eZ(a,b)
this.f_(a,x+8,b)},
eZ:function(a,b){var z,y,x,w,v,u
for(z=-3;z<=3;++z)for(y=z*z,x=a+z,w=-3;w<=3;++w)if(y+w*w<=10)for(v=b+w,u=47;u>=0;--u)if(this.c.a3(x,u,v)===102){this.c.a7(x,u,v,105)
break}},
f_:function(a,b,c){var z,y,x,w,v,u,t,s
for(z=-3;z<=3;++z)for(y=z*z,x=a+z,w=-3;w<=3;++w)for(v=y+w*w,u=b+w,t=-3;t<=3;++t)if(v+t*t<=12){s=c+t
if(this.c.a3(x,u,s)===0)this.c.a7(x,u,s,114)}},
fZ:function(){var z,y,x,w,v
for(z=0;z<16;++z)for(y=z-400,x=z+400,w=0;w<16;++w)if(this.ae(z,w,12.5)<0.1)this.aT(z,w,204)
else if(this.ae(x,w,12.5)<0.1)this.aT(z,w,203)
else{v=w+400
if(this.ae(z,v,12.5)<0.1)this.aT(z,w,202)
else if(this.ae(x,v,12.5)<0.15)this.aT(z,w,200)
else if(this.ae(y,w,12.5)<0.1)this.aT(z,w,201)
else if(this.ae(z,w-400,12.5)<0.08)this.aT(z,w,205)}},
aT:function(a,b,c){var z,y
z=this.c.cP(a,b,0)
y=this.c.a3(a,z,b)
if(y!==102&&y!==105)return
this.c.a7(a,z+1,b,c)},
eX:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.c
y=z.a
if(y+16>=-30)if(y<=30){z=z.b
z=z+16<-30||z>30}else z=!0
else z=!0
if(z)return
x=new B.hY(this)
for(w=30;w>=0;w-=2){v=30-w+3
for(u=-v,z=w-1,t=u;t<=v;++t)for(s=u;s<=v;++s){x.$4(t,w,s,111)
x.$4(t,z,s,111)}for(y=u-1,r=u-2,q=v+1,p=v+2,o=-2;o<=2;++o){x.$4(y,w,o,109)
x.$4(y,z,o,109)
x.$4(r,z,o,109)
x.$4(q,w,o,109)
x.$4(q,z,o,109)
x.$4(p,z,o,109)
x.$4(o,w,y,109)
x.$4(o,z,y,109)
x.$4(o,z,r,109)
x.$4(o,w,q,109)
x.$4(o,z,q,109)
x.$4(o,z,p,109)}z=w+1
x.$4(y,z,2,109)
x.$4(r,w,2,109)
x.$4(y,z,-2,109)
x.$4(r,w,-2,109)
x.$4(q,z,2,109)
x.$4(p,w,2,109)
x.$4(q,z,-2,109)
x.$4(p,w,-2,109)
x.$4(2,z,y,109)
x.$4(2,w,r,109)
x.$4(-2,z,y,109)
x.$4(-2,w,r,109)
x.$4(2,z,q,109)
x.$4(2,w,p,109)
x.$4(-2,z,q,109)
x.$4(-2,w,p,109)}},
eU:function(){var z,y,x
z=this.c
y=z.a
if(y+16>=-36)if(y<=12){z=z.b
z=z+16<-28||z>-22}else z=!0
else z=!0
if(z)return
x=new B.hX(this,-12,40,-25)
z=[P.x]
x.$5(110,0,0,H.a([0,1,2,3,4,4,3,2,4,4,3,2,1,0],z),H.a([1,0,0,0,1,2,3,3,4,5,6,6,6,5],z))
x.$5(110,6,0,H.a([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],z),H.a([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],z))
x.$5(113,12,0,H.a([0,0,0,0,0,1,2,1,2,3,3,3,3,3],z),H.a([2,3,4,5,6,1,1,4,4,2,3,4,5,6],z))
x.$5(113,17,0,H.a([0,0,0,0,0,0,1,2,1,2,3,3,3,3],z),H.a([1,2,3,4,5,6,1,1,4,4,2,3,5,6],z))
x.$5(113,22,0,H.a([0,2,1,1,1,1,1,1],z),H.a([1,1,1,2,3,4,5,6],z))},
hk:function(){var z,y,x,w,v,u
z=this.c
y=z.a
if(y+16>=-3)if(y<=3){z=z.b
z=z+16<-3||z>3}else z=!0
else z=!0
if(z)return
x=new B.hZ(this)
for(w=-3;w<=3;++w)for(v=0;v<=7;++v)for(z=2+v,u=-3;u<=3;++u)x.$4(w,z,u,0)
x.$4(0,2,0,113)
x.$4(0,3,0,112)
x.$4(0,4,0,112)
x.$4(0,5,0,112)
x.$4(0,6,0,112)}},
hY:{"^":"u;a",
$4:function(a,b,c,d){var z=this.a.c
z.a7(a-z.a,b,c-z.b,d)}},
hX:{"^":"u;a,b,c,d",
$5:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
z=[P.x]
H.o(d,"$isc",z,"$asc")
H.o(e,"$isc",z,"$asc")
for(y=d.length-1,z=this.a,x=this.b+b,w=this.c+c,v=this.d;y>=0;--y){u=z.c
if(y>=d.length)return H.i(d,y)
t=d[y]
if(typeof t!=="number")return H.e(t)
s=u.a
if(y>=e.length)return H.i(e,y)
r=e[y]
if(typeof r!=="number")return H.e(r)
u.a7(x+t-s,w-r,v-u.b,a)}}},
hZ:{"^":"u;a",
$4:function(a,b,c,d){var z=this.a.c
z.a7(a-z.a,b,c-z.b,d)}},
ma:{"^":"u:36;a,b",
$1:function(a){var z
H.h(a,"$isap")
z=this.b
P.e_(C.h.em(this.a.gi6(),2)+" fps, "+("chunks: "+z.d.length+", graveyard: "+z.c.length+", player: "+z.f.x.f.M(new V.q(0,0,0)).i(0)))}},
W:{"^":"b;a,b,c,d,e,f"},
iu:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x",
C:function(a){var z="./textures/"+a+".png"
return this.a.f.ie(z,!0,!1,!1)},
I:function(a,b){var z,y,x
z=O.eH()
z.dx.h(0,this.e)
y=z.r
y.sav(0,new V.aa(0.8,0.8,0.8))
y=z.x
y.sav(0,new V.aa(0.4,0.4,0.4))
z.r.sbl(a)
z.x.sbl(a)
z.db.sbl(a)
if(b){y=z.z
y.sav(0,new V.aa(0.5,0.5,0.5))
if(y.c===C.b){y.c=C.f
y.c_()
y.ce(100)
x=y.a
x.a=null
x.X(null)}y.ce(3)}C.a.h(this.d,z)
return this.d.length-1},
d5:function(a){var z,y
z=this.C(a)
y=O.eH()
y.f.sbl(z)
y.db.sbl(z)
return y}},
iK:{"^":"b;0a,0b,c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
eC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=a.r
z.r=!0
y=z.d
y.Q=0.4
y.ch=0.4
y=new U.k_()
x=X.aC()
x.h(0,new X.Q(39,new X.V(!1,!1,!1)))
x.h(0,new X.Q(68,new X.V(!1,!1,!1)))
w=y.gfJ()
x.gag().h(0,w)
y.a=x
x=X.aC()
x.h(0,new X.Q(37,new X.V(!1,!1,!1)))
x.h(0,new X.Q(65,new X.V(!1,!1,!1)))
x.gag().h(0,w)
y.b=x
x=X.aC()
x.h(0,new X.Q(81,new X.V(!1,!1,!1)))
x.gag().h(0,w)
y.c=x
x=X.aC()
x.h(0,new X.Q(69,new X.V(!1,!1,!1)))
x.gag().h(0,w)
y.d=x
x=X.aC()
x.h(0,new X.Q(40,new X.V(!1,!1,!1)))
x.h(0,new X.Q(83,new X.V(!1,!1,!1)))
x.gag().h(0,w)
y.e=x
x=X.aC()
x.h(0,new X.Q(38,new X.V(!1,!1,!1)))
x.h(0,new X.Q(87,new X.V(!1,!1,!1)))
x.gag().h(0,w)
y.f=x
x=U.c7()
x.say(30)
x.saK(0)
w=y.gas()
x.gt().h(0,w)
y.r=x
x=U.c7()
x.say(30)
x.saK(0)
x.gt().h(0,w)
y.x=x
x=U.c7()
x.say(30)
x.saK(0)
x.gt().h(0,w)
y.y=x
y.z=null
y.Q=null
y.ch=60
y.cx=15
y.cy=0
y.db=null
y.dx=null
y.dy=null
y.a.a6(z)
y.b.a6(z)
y.c.a6(z)
y.d.a6(z)
y.e.a6(z)
y.f.a6(z)
y.r.say(6)
y.x.say(60)
z=y.x
x=z.r
if(!$.l.$2(x,-100)){v=z.r
z.r=-100
x=new D.G("acceleration",v,-100,z,[P.y])
x.b=!0
z.F(x)}y.y.say(6)
y.dy=H.m(this.gfk(),{func:1,ret:V.q,args:[V.q,V.q]})
this.a=y
z=a.r
y=new U.jZ()
x=U.c7()
x.scQ(0,!0)
x.scJ(6.283185307179586)
x.scK(0)
x.sT(0,0)
x.say(100)
x.sG(0)
x.saK(0.5)
y.b=x
w=y.gas()
x.gt().h(0,w)
x=U.c7()
x.scQ(0,!0)
x.scJ(6.283185307179586)
x.scK(0)
x.sT(0,0)
x.say(100)
x.sG(0)
x.saK(0.5)
y.c=x
x.gt().h(0,w)
y.d=null
y.e=!1
y.f=!1
y.r=!1
y.x=2.5
y.y=2.5
y.z=2
y.Q=4
y.cx=!1
y.ch=!1
y.cy=0
y.db=0
y.dx=null
y.dy=0
y.fr=null
y.fx=null
u=new X.V(!1,!1,!1)
v=y.d
y.d=u
x=new D.G("modifiers",v,u,y,[X.V])
x.b=!0
y.F(x)
x=y.f
if(x!==!1){y.f=!1
x=new D.G("invertX",x,!1,y,[P.a8])
x.b=!0
y.F(x)}x=y.r
if(x!==!1){y.r=!1
x=new D.G("invertY",x,!1,y,[P.a8])
x.b=!0
y.F(x)}y.a6(z)
y.b.scJ(1.5707963267948966)
y.b.scK(-1.5707963267948966)
y.b.saK(1)
y.c.saK(1)
y.b.scQ(0,!1)
this.b=y
y.gt().h(0,new B.iM(this))
z=U.a6
y=[z]
x=U.cF(H.a([this.a,this.b],y))
x.gt().h(0,this.ghp())
this.r=x
x=this.b
w=new U.et()
w.c=V.bp()
w.d=0
if(null!=x){w.a=x
x.gt().h(0,w.gas())
z=new D.G("mover",null,w.a,w,[z])
z.b=!0
w.F(z)}this.x=U.cF(H.a([w,this.a,U.aY(V.dr(1,-1,1,1))],y))
z=U.aY(V.cn(-0.5,-0.5,-0.5))
x=new U.eY()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sen(-0.1)
x.sef(0,0)
x.sej(0)
w=x.d
if(!$.l.$2(w,0)){v=x.d
x.d=0
w=new D.G("deltaYaw",v,0,x,[P.y])
w.b=!0
x.F(w)}w=x.e
if(!$.l.$2(w,0.1)){v=x.e
x.e=0.1
w=new D.G("deltaPitch",v,0.1,x,[P.y])
w.b=!0
x.F(w)}w=x.f
if(!$.l.$2(w,0)){v=x.f
x.f=0
w=new D.G("deltaRoll",v,0,x,[P.y])
w.b=!0
x.F(w)}this.y=U.cF(H.a([z,x,U.aY(V.cn(0.5,0.5,0.5)),U.aY(V.dr(0.04,-0.04,0.04,1)),U.aY(V.cn(-0.15,0.06,-0.2)),this.x],y))
this.z=U.cF(H.a([U.aY(V.dr(0.005,-0.005,0.005,1)),U.aY(V.cn(0,0,-0.2)),this.x],y))
z=X.aC()
z.h(0,new X.Q(32,new X.V(!1,!1,!1)))
z.a6(a.r)
z.gag().h(0,this.gfI())
this.d=!0
z=X.aC()
z.h(0,new X.Q(9,new X.V(!1,!1,!1)))
z.h(0,new X.Q(9,new X.V(!1,!1,!0)))
z.a6(a.r)
z.gag().h(0,this.gfw())
z=X.aC()
z.h(0,new X.Q(69,new X.V(!1,!1,!1)))
z.h(0,new X.Q(81,new X.V(!1,!1,!1)))
z.a6(a.r)
z.gag().h(0,this.gfv())
z=a.r.d
y=z.b
if(y==null){y=D.J()
z.b=y
z=y}else z=y
z.h(0,this.gfD())
z=X.aC()
z.h(0,new X.Q(79,new X.V(!1,!1,!1)))
z.a6(a.r)
z.gag().h(0,this.gfV())
z=this.z
y=$.$get$a0()
x=$.$get$a3()
x=new Z.ad(y.a|x.a)
t=new F.f_()
y=new F.k2(t)
y.b=!1
w=F.bW
y.c=H.a([],[w])
t.a=y
y=new F.je(t)
y.b=H.a([],[F.eQ])
t.b=y
y=new F.jd(t)
y.b=H.a([],[F.ey])
t.c=y
y=new F.jc(t)
y.b=H.a([],[F.av])
t.d=y
t.e=null
y=t.a
s=new V.H(-1,-1,1)
s=s.w(0,Math.sqrt(s.D(s)))
r=y.bA(new V.co(1,2,4,6),new V.aX(1,0,0,1),new V.q(-1,-1,0),new V.M(0,1),s,x)
y=t.a
s=new V.H(1,-1,1)
s=s.w(0,Math.sqrt(s.D(s)))
q=y.bA(new V.co(0,3,4,6),new V.aX(0,0,1,1),new V.q(1,-1,0),new V.M(1,1),s,x)
y=t.a
s=new V.H(1,1,1)
s=s.w(0,Math.sqrt(s.D(s)))
p=y.bA(new V.co(0,2,5,6),new V.aX(0,1,0,1),new V.q(1,1,0),new V.M(1,0),s,x)
y=t.a
s=new V.H(-1,1,1)
s=s.w(0,Math.sqrt(s.D(s)))
o=y.bA(new V.co(0,2,4,7),new V.aX(1,1,0,1),new V.q(-1,1,0),new V.M(0,0),s,x)
t.d.hO(H.a([r,q,p,o],[w]))
t.aJ()
y=this.c
this.Q=E.bk(null,!0,z,"",t,y.a.r)
this.ch=E.bk(null,!0,this.y,"",null,null)
z=E.ag
this.db=H.a([],[z])
for(x=y.a.d,w=x.length,n=0;n<x.length;x.length===w||(0,H.B)(x),++n){m=E.bk(null,!0,null,"",null,x[n])
s=this.ch.y
l=H.A(s,0)
H.E(m,l)
k=[l]
if(s.ba(H.a([m],k))){j=s.a
i=j.length
C.a.h(j,m)
l=H.o(H.a([m],k),"$isf",[l],"$asf")
s=s.c
if(s!=null)s.$2(i,l)}s=this.db;(s&&C.a).h(s,m)}this.e=0
y=E.bk(null,!0,null,"",null,y.a.f)
this.cx=y
this.f=null
this.cy=E.bk(H.a([this.Q,this.ch,y],[z]),!0,null,"",null,null)
this.dB()},
cV:function(){var z,y
z=this.c.aL(C.l.aa(0.5),C.l.aa(0.5))
y=z==null?null:z.iQ(C.l.aa(0.5),C.l.aa(0.5))
if(y==null)y=0
this.a.sT(0,new V.q(0.5,y+60,0.5))
this.a.sG(new V.H(0,0,0))},
jz:[function(a){H.h(a,"$isv")
this.cV()},"$1","gfV",4,0,0],
ad:function(a,b,c){var z,y
z=this.c.a3(a,b,c)
y=z.gaO(z)
return y>=100&&y<=117},
jo:[function(a){H.h(a,"$isv")
if(this.d)this.a.x.sG(30)},"$1","gfI",4,0,0],
je:[function(a){var z,y
a=H.j(H.h(a,"$isv"),"$isbN")
$.$get$cx()
z=a.c
y=this.e
if(z.b.c){if(typeof y!=="number")return y.v()
z=y-1
this.e=z
if(z<0)this.e=19}else{if(typeof y!=="number")return y.n()
z=y+1
this.e=z
if(z>=20)this.e=0}this.dB()},"$1","gfw",4,0,0],
jd:[function(a){this.da(H.j(H.h(a,"$isv"),"$isbN").c.a===69)},"$1","gfv",4,0,0],
jj:[function(a){this.da(H.j(H.h(a,"$isv"),"$isbQ").x.a===2)},"$1","gfD",4,0,0],
da:function(a){var z,y,x,w,v,u,t
z=this.f
if(z==null)return
if(a){y=this.dl(z,this.dq())
z=y.a
this.f=z
x=$.$get$cx()
w=this.e
if(w>>>0!==w||w>=20)return H.i(x,w)
v=x[w]
if(v===106){x=y.b
w=$.$get$b3()
u=$.$get$b2()
w=w.a
u=u.a
x=x.a
if((x&(w|u))!==0)v=108
else{w=$.$get$bK()
u=$.$get$bJ()
if((x&(w.a|u.a))!==0)v=107}}else if(v===115){x=y.b
w=$.$get$b3()
u=$.$get$b2()
w=w.a
u=u.a
x=x.a
if((x&(w|u))!==0)v=117
else{w=$.$get$bK()
u=$.$get$bJ()
if((x&(w.a|u.a))!==0)v=116}}}else v=0
t=z.f
if(t!=null){t.a7(z.a,z.b,z.c,v)
t.r=!0
if(this.f.a<=0){z=t.gah(t)
if(!(z==null))z.r=!0}if(this.f.c<=0){z=t.gcp(t)
if(!(z==null))z.r=!0}if(this.f.a>=15){z=t.gan(t)
if(!(z==null))z.r=!0}if(this.f.c>=15){z=t.gcG()
if(!(z==null))z.r=!0}}},
j4:[function(a,b){var z,y,x,w,v,u,t,s,r,q
z=b.a
y=b.b
x=b.c
w=J.cv(a.a)+0.5
v=J.cv(a.b)+0.5
u=J.cv(a.c)+0.5
this.d=!1
if(typeof y!=="number")return y.v()
if(this.ad(z,y-0.25,x)){y=v-0.25
this.a.x.sG(0)}if(this.ad(z,y-2+0.25,x)){y=v+0.25
this.a.x.sG(0)
this.d=!0}if(typeof z!=="number")return z.v()
t=z-0.25
s=y-0.5
if(this.ad(t,s,x)||this.ad(t,y-1.5,x)){z=w-0.25
this.a.r.sG(0)}else{t=z+0.25
if(this.ad(t,s,x)||this.ad(t,y-1.5,x)){z=w+0.25
this.a.r.sG(0)}}if(typeof x!=="number")return x.v()
t=x-0.25
if(this.ad(z,s,t)||this.ad(z,y-1.5,t)){x=u-0.25
this.a.y.sG(0)}else{t=x+0.25
if(this.ad(z,s,t)||this.ad(z,y-1.5,t)){x=u+0.25
this.a.y.sG(0)}}t=this.c
while(!0){r=t.a3(z,y-2+0.25,x)
s=r.gaO(r)
if(!(s>=100&&s<=117)){r=t.a3(z,y,x)
s=r.gaO(r)
q=s>=100&&s<=117
s=q}else s=!0
if(!s)break
y=v+0.25;++v
this.a.x.sG(0)
this.d=!0}return new V.q(z,y,x)},"$2","gfk",8,0,37],
dq:function(){var z=this.x.f
return V.eU(z.M(new V.q(0,0,0)),z.ap(new V.H(0,0,-6)))},
dl:function(a,b){var z,y,x,w,v,u
z=a.a+a.d
y=a.b
x=a.c+a.e
w=V.eX(z,y,x,1,1,1).iz(b)
if(w==null)return
else{v=w.d
u=J.P(v)
if(u.u(v,$.$get$b2()))z-=0.9
else if(u.u(v,$.$get$b3()))z+=1.1
else if(u.u(v,$.$get$bH()))y-=0.9
else if(u.u(v,$.$get$bI()))y+=1.1
else if(u.u(v,$.$get$bJ()))x-=0.9
else if(u.u(v,$.$get$bK()))x+=1.1
else return}return new B.iC(this.c.a3(z,y,x),v)},
jH:[function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
H.h(a,"$isv")
z=this.dq()
y=z.a
x=z.d
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.e(x)
w=z.b
v=z.e
if(typeof w!=="number")return w.n()
if(typeof v!=="number")return H.e(v)
u=z.c
t=z.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=V.eU(new V.q(y+x,w+v,u+t),new V.H(x,v,t).K(0))
r=this.c.a3(y,w,u)
q=0
while(!0){y=r!=null
if(!(y&&r.gaO(r)===0))break
y=this.dl(r,s)
r=y==null?null:y.a;++q}if(y)y=q<1||r.gaO(r)===0||r.gaO(r)===100
else y=!1
if(y)r=null
this.f=r
if(r==null)this.cx.b=!1
else{y=$.$get$a0()
x=$.$get$a3()
p=B.dz(null,new Z.ad(y.a|x.a))
x=this.f
o=new V.q(x.d+x.a+0.5,x.b+0.5,x.e+x.c+0.5)
n=p.Y(0)
x=$.$get$ca()
y=$.$get$cf()
w=$.$get$cg()
v=$.$get$cb()
p.a0(n,o,x,y,w,v,$.$get$ch(),!0,1.1)
u=$.$get$cd()
t=$.$get$c8()
m=$.$get$c9()
l=$.$get$ce()
p.a0(n,o,u,t,m,l,$.$get$cc(),!0,1.1)
p.a0(n,o,x,t,u,y,$.$get$db(),!0,1.1)
p.a0(n,o,w,l,m,v,$.$get$dc(),!0,1.1)
p.a0(n,o,y,u,l,w,$.$get$cB(),!0,1.1)
p.a0(n,o,v,m,t,x,$.$get$da(),!0,1.1)
p.cF(0,H.a([this.cx],[E.ag]))
this.cx.b=!0}},"$1","ghp",4,0,0],
dB:function(){var z,y,x
z=B.dz(this.c.a,null)
y=$.$get$cx()
x=this.e
if(x>>>0!==x||x>=20)return H.i(y,x)
z.d3(null,0,0,0,y[x],!1,1)
z.cF(0,this.db)},
q:{
iL:function(a,b){var z=new B.iK(b)
z.eC(a,b)
return z}}},
iM:{"^":"u:8;a",
$1:function(a){var z,y,x
H.h(a,"$isv")
z=this.a
y=z.a
z=V.eI(-z.b.c.d)
if(!J.Z(y.z,z)){x=y.z
y.z=z
y.Q=z.bf(0)
z=new D.G("velocityRotation",x,y.z,y,[V.aO])
z.b=!0
y.F(z)}}},
jf:{"^":"b;a,b,0c",
hT:function(a){var z,y,x
for(z=15;z>=0;--z)for(y=47;y>=-1;--y)for(x=15;x>=0;--x)this.d3(a,z,y,x,a.aP(z,y,x),!1,1)},
cF:function(a,b){var z,y,x,w
H.o(b,"$isc",[E.ag],"$asc")
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.i(b,z)
y=b[z]
x=this.c
if(z>=x.length)return H.i(x,z)
w=x[z]
if(w!=null){y.scX(w)
y.b=w.f.length!==0}else{y.scX(null)
y.b=!1}}this.c=null},
Y:function(a){var z,y
H.z(a)
z=this.c
if(a>>>0!==a||a>=z.length)return H.i(z,a)
y=z[a]
if(y==null){z=this.b
y=new F.eV(z)
y.b=z.gdJ(z)
y.c=z.gb7(z)
y.d=0
y.f=H.a([],[P.y])
z=[P.x]
y.r=H.a([],z)
y.x=H.a([],z)
y.y=H.a([],z)
z=this.c;(z&&C.a).m(z,a,y)}return y},
d3:function(a,b,c,d,e,f,g){var z,y,x,w
z=new V.q(b,c,d)
if(a!=null){b+=a.a
d+=a.b}y=new V.q(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)this.d4(a,y,z,e,!1,g)
else if(e>=200&&e<=205)if(e===201){x=this.a.c.k(0,201)
w=J.bg(x)
this.bt(this.Y(w.k(x,0)),y,0.3141592653589793)
this.bt(this.Y(w.k(x,0)),y,1.7278759594743864)
this.bt(this.Y(w.k(x,0)),y,3.6128315516282616)
this.bt(this.Y(w.k(x,0)),y,5.026548245743669)}else if(e===205)this.eW(y)
else{x=this.a.c.k(0,e)
w=J.bg(x)
this.d8(this.Y(w.k(x,0)),y,0.39269908169872414,!0)
this.d8(this.Y(w.k(x,0)),y,1.9634954084936207,!0)}else if(e>=100&&e<=117)this.d4(a,y,z,e,!1,g)},
aW:function(a,b,c,d){var z,y
z=$.$get$a0()
y=$.$get$a3()
return F.bs(null,null,null,a,b,new V.M(c,d),null,new Z.ad(z.a|y.a|$.$get$ae().a),0)},
a0:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v
z=a.bd(H.a([this.aW(b.n(0,c.j(0,i)),g,0,0),this.aW(b.n(0,d.j(0,i)),g,0,1),this.aW(b.n(0,e.j(0,i)),g,1,1),this.aW(b.n(0,f.j(0,i)),g,1,0)],[F.bW]))
y=z+1
x=z+2
w=z+3
v=[P.x]
a.bc(H.a([z,y,x,w],v))
if(h)a.bc(H.a([x,y,z,w],v))},
d4:function(a,b,c,d,e,f){var z=this.a.b.k(0,d)
if(this.aS(a,d,c,0,1,0))this.a0(this.Y(z.a),b,$.$get$ca(),$.$get$cf(),$.$get$cg(),$.$get$cb(),$.$get$ch(),!1,f)
if(this.aS(a,d,c,0,-1,0))this.a0(this.Y(z.b),b,$.$get$cd(),$.$get$c8(),$.$get$c9(),$.$get$ce(),$.$get$cc(),!1,f)
if(this.aS(a,d,c,-1,0,0))this.a0(this.Y(z.c),b,$.$get$ca(),$.$get$c8(),$.$get$cd(),$.$get$cf(),$.$get$db(),!1,f)
if(this.aS(a,d,c,1,0,0))this.a0(this.Y(z.d),b,$.$get$cg(),$.$get$ce(),$.$get$c9(),$.$get$cb(),$.$get$dc(),!1,f)
if(this.aS(a,d,c,0,0,1))this.a0(this.Y(z.e),b,$.$get$cf(),$.$get$cd(),$.$get$ce(),$.$get$cg(),$.$get$cB(),!1,f)
if(this.aS(a,d,c,0,0,-1))this.a0(this.Y(z.f),b,$.$get$cb(),$.$get$c9(),$.$get$c8(),$.$get$ca(),$.$get$da(),!1,f)},
aS:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.d0(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.hp(b,a.aP(d+J.d0(c.a),e,f+J.d0(c.c)))},
d8:function(a,b,c,d){var z,y,x,w
z=Math.cos(c)*0.5
y=Math.sin(c)*0.5
x=-y
w=-z
this.a0(a,b,new V.q(z,0,x),new V.q(z,-0.5,x),new V.q(w,-0.5,y),new V.q(w,0,y),new V.H(y,0,z),!0,1)},
bt:function(a,b,c){var z=V.eI(c)
this.a0(a,b,z.M(new V.q(0.4,-0.1,-0.4)),z.M(new V.q(0,-0.5,0)),z.M(new V.q(0.4,-0.1,0.4)),z.M(new V.q(0.8,0,0)),$.$get$ch(),!0,1)},
eW:function(a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.a.c.k(0,205)
y=J.bg(z)
x=this.Y(y.k(z,0))
w=this.Y(y.k(z,1))
v=this.Y(y.k(z,2))
z=[F.bW]
u=H.a([],z)
t=H.a([],z)
for(y=a7.a,s=a7.b,r=a7.c,q=0;q<=2;q+=0.25){p=3.141592653589793*q
o=Math.cos(p)
n=Math.sin(p)
m=new V.aO(o,0,-n,0,1,0,n,0,o)
p=m.M(new V.q(0.07,-0.1,0))
l=p.a
if(typeof y!=="number")return y.n()
if(typeof l!=="number")return H.e(l)
k=p.b
if(typeof s!=="number")return s.n()
if(typeof k!=="number")return H.e(k)
p=p.c
if(typeof r!=="number")return r.n()
if(typeof p!=="number")return H.e(p)
j=$.$get$cB()
i=m.ap(j)
h=Math.abs(q-1)
g=$.$get$a0()
f=$.$get$a3()
C.a.h(u,F.bs(null,null,null,new V.q(y+l,s+k,r+p),i,new V.M(h,0),null,new Z.ad(g.a|f.a|$.$get$ae().a),0))
f=m.M(new V.q(0.1,-0.5,0))
g=f.a
if(typeof g!=="number")return H.e(g)
i=f.b
if(typeof i!=="number")return H.e(i)
f=f.c
if(typeof f!=="number")return H.e(f)
j=m.ap(j)
p=$.$get$a0()
k=$.$get$a3()
C.a.h(u,F.bs(null,null,null,new V.q(y+g,s+i,r+f),j,new V.M(h,1),null,new Z.ad(p.a|k.a|$.$get$ae().a),0))
e=m.M(new V.q(0.1,-0.5,0))
d=m.M(new V.q(0.1,0,0))
k=e.a
if(typeof k!=="number")return H.e(k)
p=e.b
if(typeof p!=="number")return H.e(p)
h=e.c
if(typeof h!=="number")return H.e(h)
j=$.$get$cc()
f=d.a
if(typeof f!=="number")return f.n()
i=d.c
if(typeof i!=="number")return i.n()
g=$.$get$a0()
l=$.$get$a3()
C.a.h(t,F.bs(null,null,null,new V.q(y+k,s+p,r+h),j,new V.M(f+0.5,i+0.5),null,new Z.ad(g.a|l.a|$.$get$ae().a),0))}c=v.bd(u)
b=w.bd(t)
p=P.x
v.hR(P.cK(u.length,new B.jg(c),!0,p))
w.bc(P.cK(t.length,new B.jh(b),!0,p))
a=H.a([],z)
a0=H.a([],z)
C.a.h(a,this.aW(a7.n(0,new V.q(0,0.05,0)),$.$get$ch(),0.5,0.5))
C.a.h(a0,this.aW(a7.n(0,new V.q(0,-0.1,0)),$.$get$cc(),0.5,0.5))
for(q=0;q<=1;q+=0.1){z=-6.283185307179586*q
o=Math.cos(z)
n=Math.sin(z)
a1=new V.aO(o,0,-n,0,1,0,n,0,o)
e=a1.M(new V.q(0.4,-0.15,0))
d=a1.M(new V.q(0.5,0,0))
z=e.a
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.e(z)
l=e.b
if(typeof s!=="number")return s.n()
if(typeof l!=="number")return H.e(l)
k=e.c
if(typeof r!=="number")return r.n()
if(typeof k!=="number")return H.e(k)
j=d.a
if(typeof j!=="number")return j.n()
i=d.c
if(typeof i!=="number")return i.n()
h=$.$get$a0()
g=$.$get$a3()
C.a.h(a,F.bs(null,null,null,new V.q(y+z,s+l,r+k),null,new V.M(j+0.5,i+0.5),null,new Z.ad(h.a|g.a|$.$get$ae().a),0))
g=6.283185307179586*q
o=Math.cos(g)
n=Math.sin(g)
a2=new V.aO(o,0,-n,0,1,0,n,0,o)
a3=a2.M(new V.q(0.4,-0.15,0))
a4=a2.M(new V.q(0.5,0,0))
g=a3.a
if(typeof g!=="number")return H.e(g)
h=a3.b
if(typeof h!=="number")return H.e(h)
i=a3.c
if(typeof i!=="number")return H.e(i)
j=a4.a
if(typeof j!=="number")return j.n()
k=a4.c
if(typeof k!=="number")return k.n()
l=$.$get$a0()
z=$.$get$a3()
C.a.h(a0,F.bs(null,null,null,new V.q(y+g,s+h,r+i),null,new V.M(j+0.5,k+0.5),null,new Z.ad(l.a|z.a|$.$get$ae().a),0))}a5=x.bd(a)
a6=w.bd(a0)
x.bc(P.cK(a.length,new B.ji(a5),!0,p))
w.bc(P.cK(a0.length,new B.jj(a6),!0,p))},
q:{
dz:function(a,b){var z,y,x
z=new B.jf(a,b)
if(b==null){y=$.$get$a0()
x=$.$get$a3()
z.b=new Z.ad(y.a|x.a|$.$get$ae().a)}y=a==null?null:a.d
y=y==null?null:y.length
if(y==null)y=1
y=new Array(y)
y.fixed$length=Array
z.c=H.a(y,[F.eV])
return z}}},
jg:{"^":"u:10;a",
$1:function(a){return this.a+a}},
jh:{"^":"u:10;a",
$1:function(a){return this.a+a}},
ji:{"^":"u:10;a",
$1:function(a){return this.a+a}},
jj:{"^":"u:10;a",
$1:function(a){return this.a+a}},
ke:{"^":"b;a,0b,0c,0d,0e,0f,0r",
eH:function(a){var z,y,x,w,v,u,t
z=new B.hW()
z.a=L.iG(0)
z.b=new Uint8Array(484)
this.b=z
z=[B.e7]
this.c=H.a([],z)
this.d=H.a([],z)
this.e=H.a([],[E.ag])
this.r=null
for(z=this.a.d,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
C.a.h(this.e,E.bk(null,!0,null,"",null,w))}for(v=0;v<140;++v){z=this.c;(z&&C.a).h(z,B.ht(this))}for(u=-32;u<32;u+=16)for(t=-32;t<32;t+=16)this.b.e6(this.dr(u,t))
P.cO(C.C,this.ghr())
P.cO(C.B,this.gfi())
P.cO(C.z,this.gf0())},
aL:function(a,b){var z,y,x,w
for(z=this.d,y=z.length,x=0;x<y;++x){w=z[x]
if(w.a===a&&w.b===b)return w}return},
a3:function(a,b,c){var z,y,x,w,v,u
z=C.e.a_(J.cs(a).aa(a),16)*16
y=C.e.a_(J.cs(c).aa(c),16)*16
if(a<0)z-=16
if(c<0)y-=16
x=this.aL(z,y)
w=C.h.b5(a)-z
v=J.cv(b)
u=C.h.b5(c)-y
if(w<0)w+=16
return new B.ho(w,v,u<0?u+16:u,z,y,x)},
jI:[function(a){H.h(a,"$isap")
this.hq(this.f.x.f.M(new V.q(0,0,0)))},"$1","ghr",4,0,13],
j3:[function(a){var z
H.h(a,"$isap")
z=this.f.x.f.M(new V.q(0,0,0))
this.fh(z)
this.h0(z)},"$1","gfi",4,0,13],
j1:[function(a){var z,y,x,w
H.h(a,"$isap")
z=this.a.x
y=z.b
x=z.e
w=x.length
y=(y+1)%w
if(y<w){z.b=y
z.c=x[y]
z=z.f
if(!(z==null))z.dL()}},"$1","gf0",4,0,13],
dr:function(a,b){var z,y
z=this.c
if(0>=z.length)return H.i(z,-1)
y=z.pop()
y.a=a
y.b=b
y.f=!0
y.x=!0
y.saD(!1)
C.a.h(this.d,y)
return y},
hq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=this.a3(a.a,a.b,a.c)
y=this.r
x=z.f
if(y==null?x!=null:y!==x){this.r=x
y=z.d
w=y-128
v=y+128
x=z.e
u=x-128
t=x+128
for(s=this.d.length-1;s>=0;--s){r=this.d
if(s>=r.length)return H.i(r,s)
q=r[s]
r=q.a
if(w<=r)if(v>r){r=q.b
r=u>r||t<=r}else r=!0
else r=!0
if(r){q.f=!1
q.saD(!1)
q.x=!0
q.r=!1
C.a.S(this.d,q)
r=this.c;(r&&C.a).h(r,q)}}p=y-64
o=y+64
n=x-64
m=x+64
for(l=p;l<o;l+=16)for(k=n;k<m;k+=16)if(this.aL(l,k)==null)this.dr(l,k)}},
fh:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=a.a
if(typeof z!=="number")return z.v()
y=z-8
z=a.c
if(typeof z!=="number")return z.v()
x=z-8
for(z=this.d,w=z.length,v=null,u=1e-9,t=0;t<w;++t){s=z[t]
if(s.x){r=s.a-y
q=s.b-x
p=r*r+q*q
if(v==null||u>p){u=p
v=s}}}if(v!=null)this.b.e6(v)},
h0:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=a.a
if(typeof z!=="number")return z.v()
y=z-8
z=a.c
if(typeof z!=="number")return z.v()
x=z-8
for(z=this.d,w=z.length,v=null,u=1e-9,t=0;t<w;++t){s=z[t]
if(s.f&&!s.x){r=s.a-y
q=s.b-x
p=r*r+q*q
if(v==null||u>p){u=p
v=s}}}if(v!=null){v.f=!1
v.r=!0}},
ab:[function(a,b){var z,y,x,w,v,u,t,s,r
H.h(b,"$isv")
z=this.f.x.f
y=z.M(new V.q(0,0,0))
x=z.M(new V.q(0,0,-16))
w=new V.M(y.a,y.c)
v=new V.M(x.a,x.c)
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
r.iT()
r.iU(w,v)}},"$1","giS",5,0,0],
q:{
kf:function(a){var z=new B.ke(a)
z.eH(a)
return z}}}},1]]
setupProgram(dart,0,0)
J.P=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ew.prototype
return J.ev.prototype}if(typeof a=="string")return J.dk.prototype
if(a==null)return J.ex.prototype
if(typeof a=="boolean")return J.i3.prototype
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cl.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.bg=function(a){if(typeof a=="string")return J.dk.prototype
if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cl.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.dU=function(a){if(a==null)return a
if(a.constructor==Array)return J.bn.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cl.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.cs=function(a){if(typeof a=="number")return J.cI.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.dJ.prototype
return a}
J.c6=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cl.prototype
return a}if(a instanceof P.b)return a
return J.cV(a)}
J.Z=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).u(a,b)}
J.hb=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cs(a).U(a,b)}
J.hc=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m0(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bg(a).k(a,b)}
J.hd=function(a,b,c){return J.c6(a).h2(a,b,c)}
J.he=function(a,b,c,d){return J.c6(a).dD(a,b,c,d)}
J.cZ=function(a,b,c){return J.bg(a).hV(a,b,c)}
J.d_=function(a,b){return J.dU(a).J(a,b)}
J.cv=function(a){return J.cs(a).b5(a)}
J.hf=function(a,b){return J.dU(a).N(a,b)}
J.bj=function(a){return J.P(a).gZ(a)}
J.bC=function(a){return J.dU(a).ga1(a)}
J.bD=function(a){return J.bg(a).gl(a)}
J.hg=function(a,b){return J.c6(a).iD(a,b)}
J.d0=function(a){return J.cs(a).aa(a)}
J.at=function(a){return J.P(a).i(a)}
I.dX=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.d5.prototype
C.D=J.p.prototype
C.a=J.bn.prototype
C.l=J.ev.prototype
C.e=J.ew.prototype
C.E=J.ex.prototype
C.h=J.cI.prototype
C.i=J.dk.prototype
C.L=J.cl.prototype
C.t=H.iB.prototype
C.M=W.iD.prototype
C.u=J.iJ.prototype
C.N=P.dx.prototype
C.n=J.dJ.prototype
C.v=W.bZ.prototype
C.w=W.kd.prototype
C.x=new P.iH()
C.y=new P.k1()
C.j=new P.l1()
C.b=new A.cA(0,"ColorSourceType.None")
C.f=new A.cA(1,"ColorSourceType.Solid")
C.c=new A.cA(2,"ColorSourceType.Texture2D")
C.d=new A.cA(3,"ColorSourceType.TextureCube")
C.m=new P.aM(0)
C.z=new P.aM(25e4)
C.A=new P.aM(5e6)
C.B=new P.aM(7e4)
C.C=new P.aM(75e4)
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
C.p=function(hooks) { return hooks; }

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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.r=H.a(I.dX([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.o=new P.k0(!1)
$.aB=0
$.bE=null
$.e2=null
$.dO=!1
$.h0=null
$.fV=null
$.h7=null
$.cU=null
$.cW=null
$.dV=null
$.bv=null
$.c1=null
$.c2=null
$.dP=!1
$.T=C.j
$.eh=null
$.eg=null
$.ef=null
$.ee=null
$.l=V.iv()
$.eP=null
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
I.$lazy(y,x,w)}})(["ed","$get$ed",function(){return H.h_("_$dart_dartClosure")},"dl","$get$dl",function(){return H.h_("_$dart_js")},"fc","$get$fc",function(){return H.aG(H.cP({
toString:function(){return"$receiver$"}}))},"fd","$get$fd",function(){return H.aG(H.cP({$method$:null,
toString:function(){return"$receiver$"}}))},"fe","$get$fe",function(){return H.aG(H.cP(null))},"ff","$get$ff",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fj","$get$fj",function(){return H.aG(H.cP(void 0))},"fk","$get$fk",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fh","$get$fh",function(){return H.aG(H.fi(null))},"fg","$get$fg",function(){return H.aG(function(){try{null.$method$}catch(z){return z.message}}())},"fm","$get$fm",function(){return H.aG(H.fi(void 0))},"fl","$get$fl",function(){return H.aG(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dL","$get$dL",function(){return P.kg()},"c3","$get$c3",function(){return[]},"fO","$get$fO",function(){return P.j0("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"eb","$get$eb",function(){return{}},"ek","$get$ek",function(){return H.a([B.aF(5,2),B.aF(2,5),B.aF(-5,2),B.aF(-2,5),B.aF(5,-2),B.aF(2,-5),B.aF(-5,-2),B.aF(-2,-5)],[B.b7])},"el","$get$el",function(){return B.aF(-0.211324865405187,-0.211324865405187)},"dd","$get$dd",function(){return B.aF(0.366025403784439,0.366025403784439)},"fv","$get$fv",function(){return Z.az(0)},"a0","$get$a0",function(){return Z.az(1)},"ae","$get$ae",function(){return Z.az(2)},"aS","$get$aS",function(){return Z.az(4)},"a3","$get$a3",function(){return Z.az(8)},"aT","$get$aT",function(){return Z.az(16)},"bX","$get$bX",function(){return Z.az(32)},"bY","$get$bY",function(){return Z.az(64)},"fu","$get$fu",function(){return Z.az(96)},"bt","$get$bt",function(){return Z.az(128)},"aR","$get$aR",function(){return Z.az(256)},"eq","$get$eq",function(){return V.an(0)},"ep","$get$ep",function(){return V.an(511)},"b3","$get$b3",function(){return V.an(1)},"dg","$get$dg",function(){return V.an(2)},"b2","$get$b2",function(){return V.an(4)},"bI","$get$bI",function(){return V.an(8)},"dh","$get$dh",function(){return V.an(16)},"bH","$get$bH",function(){return V.an(32)},"bK","$get$bK",function(){return V.an(64)},"er","$get$er",function(){return V.an(128)},"bJ","$get$bJ",function(){return V.an(256)},"df","$get$df",function(){return V.an(146)},"cx","$get$cx",function(){return H.a([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.x])},"ch","$get$ch",function(){return V.bV(0,1,0)},"cc","$get$cc",function(){return V.bV(0,-1,0)},"db","$get$db",function(){return V.bV(1,0,0)},"dc","$get$dc",function(){return V.bV(-1,0,0)},"cB","$get$cB",function(){return V.bV(0,0,1)},"da","$get$da",function(){return V.bV(0,0,-1)},"cf","$get$cf",function(){return V.b8(-0.5,0.5,0.5)},"cg","$get$cg",function(){return V.b8(0.5,0.5,0.5)},"cd","$get$cd",function(){return V.b8(-0.5,-0.5,0.5)},"ce","$get$ce",function(){return V.b8(0.5,-0.5,0.5)},"ca","$get$ca",function(){return V.b8(-0.5,0.5,-0.5)},"cb","$get$cb",function(){return V.b8(0.5,0.5,-0.5)},"c8","$get$c8",function(){return V.b8(-0.5,-0.5,-0.5)},"c9","$get$c9",function(){return V.b8(0.5,-0.5,-0.5)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.v]},{func:1,ret:-1,opt:[D.v]},{func:1,ret:P.R},{func:1,ret:-1},{func:1,ret:-1,args:[W.aw]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.x,[P.f,E.ag]]},{func:1,ret:P.R,args:[D.v]},{func:1,ret:P.R,args:[F.av]},{func:1,ret:P.x,args:[P.x]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.br]},{func:1,ret:-1,args:[P.ap]},{func:1,ret:P.R,args:[,]},{func:1,ret:-1,args:[P.x,[P.f,V.aD]]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.n,args:[P.x]},{func:1,args:[,]},{func:1,ret:-1,args:[P.x,[P.f,X.Q]]},{func:1,ret:-1,args:[W.bO]},{func:1,ret:-1,args:[P.x,[P.f,D.a2]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.x,[P.f,U.a6]]},{func:1,ret:P.R,args:[W.ah]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:W.a1,args:[W.L]},{func:1,ret:P.a8,args:[P.y,P.y]},{func:1,args:[P.n]},{func:1,ret:P.a8,args:[[P.f,D.a2]]},{func:1,args:[,P.n]},{func:1,ret:P.R,args:[{func:1,ret:-1}]},{func:1,ret:P.R,args:[P.Y]},{func:1,ret:P.R,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.bZ]},{func:1,ret:P.a8,args:[[P.f,X.Q]]},{func:1,ret:P.R,args:[P.ap]},{func:1,ret:V.q,args:[V.q,V.q]},{func:1,ret:P.R,args:[,],opt:[,]},{func:1,ret:[P.aU,,],args:[,]},{func:1,ret:P.a8,args:[W.L]},{func:1,ret:-1,args:[P.b],opt:[P.ax]}]
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
if(x==y)H.mb(d||a)
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
Isolate.dX=a.dX
Isolate.c5=a.c5
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
if(typeof dartMainRunner==="function")dartMainRunner(B.h4,[])
else B.h4([])})})()
//# sourceMappingURL=main.dart.js.map
