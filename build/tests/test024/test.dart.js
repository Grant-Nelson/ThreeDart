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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ist)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dL(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dO=function(){}
var dart=[["","",,H,{"^":"",om:{"^":"b;a"}}],["","",,J,{"^":"",
M:function(a){return void 0},
dS:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cT:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dQ==null){H.nu()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ch("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$da()]
if(v!=null)return v
v=H.nz(a)
if(v!=null)return v
if(typeof a=="function")return C.W
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$da(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
t:{"^":"b;",
v:function(a,b){return a===b},
gT:function(a){return H.bP(a)},
i:["eI",function(a){return"Instance of '"+H.bl(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iC:{"^":"t;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isS:1},
eA:{"^":"t;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isL:1},
db:{"^":"t;",
gT:function(a){return 0},
i:["eK",function(a){return String(a)}]},
jl:{"^":"db;"},
ci:{"^":"db;"},
cc:{"^":"db;",
i:function(a){var z=a[$.$get$ej()]
if(z==null)return this.eK(a)
return"JavaScript function for "+H.j(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc9:1},
bh:{"^":"t;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.E("add"))
a.push(b)},
K:function(a,b){var z
if(!!a.fixed$length)H.r(P.E("remove"))
for(z=0;z<a.length;++z)if(J.R(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aM(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.j(a[y]))
return z.join(b)},
ia:function(a){return this.n(a,"")},
i1:function(a,b,c,d){var z,y,x
H.A(b,d)
H.l(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aM(a))}return y},
i_:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.S,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aM(a))}throw H.a(H.d8())},
hZ:function(a,b){return this.i_(a,b,null)},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
bR:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a4(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a4(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gau:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.d8())},
aF:function(a,b,c,d){var z
H.A(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.E("fill range"))
P.aS(b,c,a.length,null,null,null)
for(z=b;z.P(0,c);z=z.E(0,1))a[z]=d},
dt:function(a,b){var z,y
H.l(b,{func:1,ret:P.S,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aM(a))}return!1},
V:function(a,b){var z
for(z=0;z<a.length;++z)if(J.R(a[z],b))return!0
return!1},
i:function(a){return P.d7(a,"[","]")},
gX:function(a){return new J.aw(a,a.length,0,[H.y(a,0)])},
gT:function(a){return H.bP(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.E("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cr(b,"newLength",null))
if(b<0)throw H.a(P.a4(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b>=a.length||b<0)throw H.a(H.aJ(a,b))
return a[b]},
p:function(a,b,c){H.F(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.E("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b>=a.length||b<0)throw H.a(H.aJ(a,b))
a[b]=c},
$isi:1,
$isd:1,
t:{
iB:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cr(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a4(a,0,4294967295,"length",null))
return J.ey(new Array(a),b)},
ey:function(a,b){return J.bK(H.c(a,[b]))},
bK:function(a){H.c4(a)
a.fixed$length=Array
return a}}},
ol:{"^":"bh;$ti"},
aw:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ca:{"^":"t;",
gi9:function(a){return a===0?1/a<0:a<0},
dZ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.E(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.E(""+a+".round()"))},
eq:function(a,b){var z
if(b>20)throw H.a(P.a4(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gi9(a))return"-"+z
return z},
bg:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a4(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.W(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.E("Unexpected toString result: "+z))
x=J.aK(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ak(b))
return a*b},
bj:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eO:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dj(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dj(a,b)},
dj:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.E("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aO:function(a,b){var z
if(a>0)z=this.dh(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h8:function(a,b){if(b<0)throw H.a(H.ak(b))
return this.dh(a,b)},
dh:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.a(H.ak(b))
return a<b},
$isq:1,
$isa5:1},
ez:{"^":"ca;",$isn:1},
iD:{"^":"ca;"},
cb:{"^":"t;",
W:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aJ(a,b))
if(b<0)throw H.a(H.aJ(a,b))
if(b>=a.length)H.r(H.aJ(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aJ(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.H(b)
if(typeof b!=="string")throw H.a(P.cr(b,null,null))
return a+b},
aV:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ak(b))
c=P.aS(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ak(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a9:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ak(c))
if(typeof c!=="number")return c.P()
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a3:function(a,b){return this.a9(a,b,0)},
u:function(a,b,c){H.F(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ak(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.a(P.cE(b,null,null))
if(b>c)throw H.a(P.cE(b,null,null))
if(c>a.length)throw H.a(P.cE(c,null,null))
return a.substring(b,c)},
an:function(a,b){return this.u(a,b,null)},
iR:function(a){return a.toLowerCase()},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ir:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ae:function(a,b){return this.ir(a,b," ")},
e6:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
e5:function(a,b){return this.e6(a,b,0)},
hO:function(a,b,c){if(c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
return H.hw(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseQ:1,
$ish:1}}],["","",,H,{"^":"",
cU:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
d8:function(){return new P.dq("No element")},
iA:function(){return new P.dq("Too many elements")},
w:{"^":"kv;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$ascK:function(){return[P.n]},
$asz:function(){return[P.n]},
$asi:function(){return[P.n]},
$asd:function(){return[P.n]}},
eq:{"^":"i;"},
cB:{"^":"eq;$ti",
gX:function(a){return new H.df(this,this.gm(this),0,[H.al(this,"cB",0)])},
cN:function(a,b){return this.eJ(0,H.l(b,{func:1,ret:P.S,args:[H.al(this,"cB",0)]}))}},
df:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.aK(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aM(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
iY:{"^":"i;a,b,$ti",
gX:function(a){return new H.iZ(J.b1(this.a),this.b,this.$ti)},
gm:function(a){return J.ao(this.a)},
H:function(a,b){return this.b.$1(J.cp(this.a,b))},
$asi:function(a,b){return[b]}},
iZ:{"^":"d9;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$asd9:function(a,b){return[b]}},
j_:{"^":"cB;a,b,$ti",
gm:function(a){return J.ao(this.a)},
H:function(a,b){return this.b.$1(J.cp(this.a,b))},
$ascB:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dA:{"^":"i;a,b,$ti",
gX:function(a){return new H.l_(J.b1(this.a),this.b,this.$ti)}},
l_:{"^":"d9;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
cw:{"^":"b;$ti"},
cK:{"^":"b;$ti",
p:function(a,b,c){H.F(b)
H.A(c,H.al(this,"cK",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))},
aF:function(a,b,c,d){H.A(d,H.al(this,"cK",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))}},
kv:{"^":"cA+cK;"}}],["","",,H,{"^":"",
i0:function(){throw H.a(P.E("Cannot modify unmodifiable Map"))},
nn:function(a){return init.types[H.F(a)]},
hp:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isJ},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.ak(a))
return z},
bP:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jw:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.H(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a4(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
bl:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.M(a).$isci){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.an(w,1)
r=H.dR(H.c4(H.b9(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jo:function(){if(!!self.location)return self.location.href
return},
eS:function(a){var z,y,x,w,v
H.c4(a)
z=J.ao(a)
if(typeof z!=="number")return z.eD()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jx:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ak(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aO(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ak(w))}return H.eS(z)},
eT:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ak(x))
if(x<0)throw H.a(H.ak(x))
if(x>65535)return H.jx(a)}return H.eS(a)},
jy:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eD()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bQ:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aO(z,10))>>>0,56320|z&1023)}}throw H.a(P.a4(a,0,1114111,null,null))},
ai:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jv:function(a){return a.b?H.ai(a).getUTCFullYear()+0:H.ai(a).getFullYear()+0},
jt:function(a){return a.b?H.ai(a).getUTCMonth()+1:H.ai(a).getMonth()+1},
jp:function(a){return a.b?H.ai(a).getUTCDate()+0:H.ai(a).getDate()+0},
jq:function(a){return a.b?H.ai(a).getUTCHours()+0:H.ai(a).getHours()+0},
js:function(a){return a.b?H.ai(a).getUTCMinutes()+0:H.ai(a).getMinutes()+0},
ju:function(a){return a.b?H.ai(a).getUTCSeconds()+0:H.ai(a).getSeconds()+0},
jr:function(a){return a.b?H.ai(a).getUTCMilliseconds()+0:H.ai(a).getMilliseconds()+0},
p:function(a){throw H.a(H.ak(a))},
f:function(a,b){if(a==null)J.ao(a)
throw H.a(H.aJ(a,b))},
aJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
z=H.F(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.W(b,a,"index",null,z)
return P.cE(b,"index",null)},
nh:function(a,b,c){if(a>c)return new P.cD(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cD(a,c,!0,b,"end","Invalid value")
return new P.aD(!0,b,"end",null)},
ak:function(a){return new P.aD(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.eP()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hx})
z.name=""}else z.toString=H.hx
return z},
hx:function(){return J.ac(this.dartException)},
r:function(a){throw H.a(a)},
B:function(a){throw H.a(P.aM(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aO(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dc(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eO(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ff()
u=$.$get$fg()
t=$.$get$fh()
s=$.$get$fi()
r=$.$get$fm()
q=$.$get$fn()
p=$.$get$fk()
$.$get$fj()
o=$.$get$fp()
n=$.$get$fo()
m=v.ad(y)
if(m!=null)return z.$1(H.dc(H.H(y),m))
else{m=u.ad(y)
if(m!=null){m.method="call"
return z.$1(H.dc(H.H(y),m))}else{m=t.ad(y)
if(m==null){m=s.ad(y)
if(m==null){m=r.ad(y)
if(m==null){m=q.ad(y)
if(m==null){m=p.ad(y)
if(m==null){m=s.ad(y)
if(m==null){m=o.ad(y)
if(m==null){m=n.ad(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eO(H.H(y),m))}}return z.$1(new H.ku(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f_()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aD(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f_()
return a},
bD:function(a){var z
if(a==null)return new H.fW(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fW(a)},
nk:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nw:function(a,b,c,d,e,f){H.e(a,"$isc9")
switch(H.F(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var z
H.F(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nw)
a.$identity=z
return z},
hX:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.M(d).$isd){z.$reflectionInfo=d
x=H.jE(z).r}else x=d
w=e?Object.create(new H.k0().constructor.prototype):Object.create(new H.d0(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aE
if(typeof u!=="number")return u.E()
$.aE=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ee(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nn,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.e7:H.d1
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ee(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hU:function(a,b,c,d){var z=H.d1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ee:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hW(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hU(y,!w,z,b)
if(y===0){w=$.aE
if(typeof w!=="number")return w.E()
$.aE=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bG
if(v==null){v=H.ct("self")
$.bG=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aE
if(typeof w!=="number")return w.E()
$.aE=w+1
t+=w
w="return function("+t+"){return this."
v=$.bG
if(v==null){v=H.ct("self")
$.bG=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
hV:function(a,b,c,d){var z,y
z=H.d1
y=H.e7
switch(b?-1:a){case 0:throw H.a(H.jO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hW:function(a,b){var z,y,x,w,v,u,t,s
z=$.bG
if(z==null){z=H.ct("self")
$.bG=z}y=$.e6
if(y==null){y=H.ct("receiver")
$.e6=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hV(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aE
if(typeof y!=="number")return y.E()
$.aE=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aE
if(typeof y!=="number")return y.E()
$.aE=y+1
return new Function(z+y+"}")()},
dL:function(a,b,c,d,e,f,g){var z,y
z=J.bK(H.c4(b))
H.F(c)
y=!!J.M(d).$isd?J.bK(d):d
return H.hX(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aB(a,"String"))},
ni:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"double"))},
nJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"num"))},
dJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aB(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aB(a,"int"))},
hu:function(a,b){throw H.a(H.aB(a,H.H(b).substring(3)))},
nL:function(a,b){var z=J.aK(b)
throw H.a(H.hT(a,z.u(b,3,z.gm(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.hu(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.nL(a,b)},
c4:function(a){if(a==null)return a
if(!!J.M(a).$isd)return a
throw H.a(H.aB(a,"List"))},
hr:function(a,b){if(a==null)return a
if(!!J.M(a).$isd)return a
if(J.M(a)[b])return a
H.hu(a,b)},
hl:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.F(z)]
else return a.$S()}return},
cm:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hl(J.M(a))
if(z==null)return!1
y=H.ho(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dG)return a
$.dG=!0
try{if(H.cm(a,b))return a
z=H.co(b)
y=H.aB(a,z)
throw H.a(y)}finally{$.dG=!1}},
dP:function(a,b){if(a!=null&&!H.dK(a,b))H.r(H.aB(a,H.co(b)))
return a},
he:function(a){var z
if(a instanceof H.m){z=H.hl(J.M(a))
if(z!=null)return H.co(z)
return"Closure"}return H.bl(a)},
nS:function(a){throw H.a(new P.i4(H.H(a)))},
hm:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b9:function(a){if(a==null)return
return a.$ti},
pq:function(a,b,c){return H.bE(a["$as"+H.j(c)],H.b9(b))},
b8:function(a,b,c,d){var z
H.H(c)
H.F(d)
z=H.bE(a["$as"+H.j(c)],H.b9(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.H(b)
H.F(c)
z=H.bE(a["$as"+H.j(b)],H.b9(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.F(b)
z=H.b9(a)
return z==null?null:z[b]},
co:function(a){var z=H.ba(a,null)
return z},
ba:function(a,b){var z,y
H.u(b,"$isd",[P.h],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dR(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.n_(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.u(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.b.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.ba(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.ba(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.ba(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.ba(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nj(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.ba(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dR:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isd",[P.h],"$asd")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.ba(u,c)}v="<"+z.i(0)+">"
return v},
bE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c1:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b9(a)
y=J.M(a)
if(y[b]==null)return!1
return H.hh(H.bE(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.H(b)
H.c4(c)
H.H(d)
if(a==null)return a
z=H.c1(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dR(c,0,null)
throw H.a(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hh:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.av(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.av(a[y],b,c[y],d))return!1
return!0},
po:function(a,b,c){return a.apply(b,H.bE(J.M(b)["$as"+H.j(c)],H.b9(b)))},
hq:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="L"||a===-1||a===-2||H.hq(z)}return!1},
dK:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="L"||b===-1||b===-2||H.hq(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dK(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cm(a,b)}y=J.M(a).constructor
x=H.b9(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.av(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dK(a,b))throw H.a(H.aB(a,H.co(b)))
return a},
av:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.av(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="L")return!0
if('func' in c)return H.ho(a,b,c,d)
if('func' in a)return c.builtin$cls==="c9"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.av("type" in a?a.type:null,b,x,d)
else if(H.av(a,b,x,d))return!0
else{if(!('$is'+"bJ" in y.prototype))return!1
w=y.prototype["$as"+"bJ"]
v=H.bE(w,z?a.slice(1):null)
return H.av(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.co(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hh(H.bE(r,z),b,u,d)},
ho:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.av(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.av(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.av(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.av(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nI(m,b,l,d)},
nI:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.av(c[w],d,a[w],b))return!1}return!0},
pp:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nz:function(a){var z,y,x,w,v,u
z=H.H($.hn.$1(a))
y=$.cS[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cV[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.hg.$2(a,z))
if(z!=null){y=$.cS[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cV[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cW(x)
$.cS[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cV[z]=x
return x}if(v==="-"){u=H.cW(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ht(a,x)
if(v==="*")throw H.a(P.ch(z))
if(init.leafTags[z]===true){u=H.cW(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ht(a,x)},
ht:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dS(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cW:function(a){return J.dS(a,!1,null,!!a.$isJ)},
nH:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cW(z)
else return J.dS(z,c,null,null)},
nu:function(){if(!0===$.dQ)return
$.dQ=!0
H.nv()},
nv:function(){var z,y,x,w,v,u,t,s
$.cS=Object.create(null)
$.cV=Object.create(null)
H.nq()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hv.$1(v)
if(u!=null){t=H.nH(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nq:function(){var z,y,x,w,v,u,t
z=C.T()
z=H.bA(C.Q,H.bA(C.V,H.bA(C.x,H.bA(C.x,H.bA(C.U,H.bA(C.R,H.bA(C.S(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hn=new H.nr(v)
$.hg=new H.ns(u)
$.hv=new H.nt(t)},
bA:function(a,b){return a(b)||b},
hw:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dU:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i_:{"^":"b;$ti",
i:function(a){return P.dg(this)},
p:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
return H.i0()},
$isK:1},
i1:{"^":"i_;a,b,c,$ti",
gm:function(a){return this.a},
bv:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bv(0,b))return
return this.d7(b)},
d7:function(a){return this.b[H.H(a)]},
J:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.l(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.d7(v),z))}}},
jD:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jE:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bK(z)
y=z[0]
x=z[1]
return new H.jD(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kh:{"^":"b;a,b,c,d,e,f",
ad:function(a){var z,y,x
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
t:{
aH:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kh(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cJ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fl:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ji:{"^":"a8;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eO:function(a,b){return new H.ji(a,b==null?null:b.method)}}},
iG:{"^":"a8;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
dc:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iG(a,y,z?null:b.receiver)}}},
ku:{"^":"a8;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nU:{"^":"m:19;a",
$1:function(a){if(!!J.M(a).$isa8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fW:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaA:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bl(this).trim()+"'"},
geA:function(){return this},
$isc9:1,
geA:function(){return this}},
f5:{"^":"m;"},
k0:{"^":"f5;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d0:{"^":"f5;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d0))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bP(this.a)
else y=typeof z!=="object"?J.c5(z):H.bP(z)
return(y^H.bP(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bl(z)+"'")},
t:{
d1:function(a){return a.a},
e7:function(a){return a.c},
ct:function(a){var z,y,x,w,v
z=new H.d0("self","target","receiver","name")
y=J.bK(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ki:{"^":"a8;a",
i:function(a){return this.a},
t:{
aB:function(a,b){return new H.ki("TypeError: "+H.j(P.cv(a))+": type '"+H.he(a)+"' is not a subtype of type '"+b+"'")}}},
hS:{"^":"a8;a",
i:function(a){return this.a},
t:{
hT:function(a,b){return new H.hS("CastError: "+H.j(P.cv(a))+": type '"+H.he(a)+"' is not a subtype of type '"+b+"'")}}},
jN:{"^":"a8;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
jO:function(a){return new H.jN(a)}}},
b5:{"^":"eG;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gi8:function(a){return this.a===0},
ga6:function(a){return new H.iM(this,[H.y(this,0)])},
bv:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d3(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d3(y,b)}else return this.i5(b)},
i5:function(a){var z=this.d
if(z==null)return!1
return this.cz(this.c1(z,this.cw(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bn(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bn(w,b)
x=y==null?null:y.b
return x}else return this.i6(b)},
i6:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c1(z,this.cw(a))
x=this.cz(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c3()
this.b=z}this.cW(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c3()
this.c=y}this.cW(y,b,c)}else this.i7(b,c)},
i7:function(a,b){var z,y,x,w
H.A(a,H.y(this,0))
H.A(b,H.y(this,1))
z=this.d
if(z==null){z=this.c3()
this.d=z}y=this.cw(a)
x=this.c1(z,y)
if(x==null)this.ca(z,y,[this.c4(a,b)])
else{w=this.cz(x,a)
if(w>=0)x[w].b=b
else x.push(this.c4(a,b))}},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aM(this))
z=z.c}},
cW:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.bn(a,b)
if(z==null)this.ca(a,b,this.c4(b,c))
else z.b=c},
fl:function(){this.r=this.r+1&67108863},
c4:function(a,b){var z,y
z=new H.iL(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fl()
return z},
cw:function(a){return J.c5(a)&0x3ffffff},
cz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
i:function(a){return P.dg(this)},
bn:function(a,b){return a[b]},
c1:function(a,b){return a[b]},
ca:function(a,b,c){a[b]=c},
ff:function(a,b){delete a[b]},
d3:function(a,b){return this.bn(a,b)!=null},
c3:function(){var z=Object.create(null)
this.ca(z,"<non-identifier-key>",z)
this.ff(z,"<non-identifier-key>")
return z},
$iseD:1},
iL:{"^":"b;a,b,0c,0d"},
iM:{"^":"eq;a,$ti",
gm:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.iN(z,z.r,this.$ti)
y.c=z.e
return y}},
iN:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aM(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nr:{"^":"m:19;a",
$1:function(a){return this.a(a)}},
ns:{"^":"m:56;a",
$2:function(a,b){return this.a(a,b)}},
nt:{"^":"m:55;a",
$1:function(a){return this.a(H.H(a))}},
iE:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseQ:1,
$isjF:1,
t:{
iF:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nj:function(a){return J.ey(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
by:function(a){return a},
jc:function(a){return new Int8Array(a)},
aI:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aJ(b,a))},
mU:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nh(a,b,c))
return b},
eM:{"^":"t;",$iseM:1,"%":"ArrayBuffer"},
dk:{"^":"t;",$isdk:1,"%":"DataView;ArrayBufferView;dj|fQ|fR|jd|fS|fT|b7"},
dj:{"^":"dk;",
gm:function(a){return a.length},
$isJ:1,
$asJ:I.dO},
jd:{"^":"fR;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
p:function(a,b,c){H.F(b)
H.ni(c)
H.aI(b,a,a.length)
a[b]=c},
$ascw:function(){return[P.q]},
$asz:function(){return[P.q]},
$isi:1,
$asi:function(){return[P.q]},
$isd:1,
$asd:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
b7:{"^":"fT;",
p:function(a,b,c){H.F(b)
H.F(c)
H.aI(b,a,a.length)
a[b]=c},
$ascw:function(){return[P.n]},
$asz:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}},
ov:{"^":"b7;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ow:{"^":"b7;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ox:{"^":"b7;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oy:{"^":"b7;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oz:{"^":"b7;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oA:{"^":"b7;",
gm:function(a){return a.length},
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dl:{"^":"b7;",
gm:function(a){return a.length},
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
bR:function(a,b,c){return new Uint8Array(a.subarray(b,H.mU(b,c,a.length)))},
$isdl:1,
$isQ:1,
"%":";Uint8Array"},
fQ:{"^":"dj+z;"},
fR:{"^":"fQ+cw;"},
fS:{"^":"dj+z;"},
fT:{"^":"fS+cw;"}}],["","",,P,{"^":"",
l1:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.n6()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bB(new P.l3(z),1)).observe(y,{childList:true})
return new P.l2(z,y,x)}else if(self.setImmediate!=null)return P.n7()
return P.n8()},
pb:[function(a){self.scheduleImmediate(H.bB(new P.l4(H.l(a,{func:1,ret:-1})),0))},"$1","n6",4,0,12],
pc:[function(a){self.setImmediate(H.bB(new P.l5(H.l(a,{func:1,ret:-1})),0))},"$1","n7",4,0,12],
pd:[function(a){P.dt(C.q,H.l(a,{func:1,ret:-1}))},"$1","n8",4,0,12],
dt:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.e.a5(a.a,1000)
return P.mc(z<0?0:z,b)},
fa:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bs]})
z=C.e.a5(a.a,1000)
return P.md(z<0?0:z,b)},
n2:function(a,b){if(H.cm(a,{func:1,args:[P.b,P.aA]}))return b.iB(a,null,P.b,P.aA)
if(H.cm(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cr(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n1:function(){var z,y
for(;z=$.bz,z!=null;){$.c_=null
y=z.b
$.bz=y
if(y==null)$.bZ=null
z.a.$0()}},
pn:[function(){$.dH=!0
try{P.n1()}finally{$.c_=null
$.dH=!1
if($.bz!=null)$.$get$dB().$1(P.hi())}},"$0","hi",0,0,3],
hd:function(a){var z=new P.fH(H.l(a,{func:1,ret:-1}))
if($.bz==null){$.bZ=z
$.bz=z
if(!$.dH)$.$get$dB().$1(P.hi())}else{$.bZ.b=z
$.bZ=z}},
n5:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bz
if(z==null){P.hd(a)
$.c_=$.bZ
return}y=new P.fH(a)
x=$.c_
if(x==null){y.b=z
$.c_=y
$.bz=y}else{y.b=x.b
x.b=y
$.c_=y
if(y.b==null)$.bZ=y}},
nM:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.Y
if(C.j===y){P.cR(null,null,C.j,a)
return}y.toString
P.cR(null,null,y,H.l(y.cf(a),z))},
f9:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.dt(a,b)}return P.dt(a,H.l(y.cf(b),z))},
ke:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bs]}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.fa(a,b)}x=y.dA(b,P.bs)
$.Y.toString
return P.fa(a,H.l(x,z))},
cQ:function(a,b,c,d,e){var z={}
z.a=d
P.n5(new P.n3(z,e))},
h9:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.Y
if(y===c)return d.$0()
$.Y=c
z=y
try{y=d.$0()
return y}finally{$.Y=z}},
ha:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.Y
if(y===c)return d.$1(e)
$.Y=c
z=y
try{y=d.$1(e)
return y}finally{$.Y=z}},
n4:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.Y
if(y===c)return d.$2(e,f)
$.Y=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Y=z}},
cR:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cf(d):c.hK(d,-1)
P.hd(d)},
l3:{"^":"m:25;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
l2:{"^":"m:53;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
l4:{"^":"m:0;a",
$0:function(){this.a.$0()}},
l5:{"^":"m:0;a",
$0:function(){this.a.$0()}},
h_:{"^":"b;a,0b,c",
f1:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bB(new P.mf(this,b),0),a)
else throw H.a(P.E("`setTimeout()` not found."))},
f2:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bB(new P.me(this,a,Date.now(),b),0),a)
else throw H.a(P.E("Periodic timer."))},
$isbs:1,
t:{
mc:function(a,b){var z=new P.h_(!0,0)
z.f1(a,b)
return z},
md:function(a,b){var z=new P.h_(!1,0)
z.f2(a,b)
return z}}},
mf:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
me:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.eO(w,x)}z.c=y
this.d.$1(z)}},
bx:{"^":"b;0a,b,c,d,e,$ti",
ig:function(a){if(this.c!==6)return!0
return this.b.b.cK(H.l(this.d,{func:1,ret:P.S,args:[P.b]}),a.a,P.S,P.b)},
i4:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cm(z,{func:1,args:[P.b,P.aA]}))return H.dP(w.iK(z,a.a,a.b,null,y,P.aA),x)
else return H.dP(w.cK(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b_:{"^":"b;di:a<,b,0h0:c<,$ti",
ep:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Y
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.n2(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b_(0,$.Y,[c])
w=b==null?1:3
this.cX(new P.bx(x,w,a,b,[z,c]))
return x},
iO:function(a,b){return this.ep(a,null,b)},
cX:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbx")
this.c=a}else{if(z===2){y=H.e(this.c,"$isb_")
z=y.a
if(z<4){y.cX(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cR(null,null,z,H.l(new P.ll(this,a),{func:1,ret:-1}))}},
dd:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbx")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isb_")
y=u.a
if(y<4){u.dd(a)
return}this.a=y
this.c=u.c}z.a=this.bq(a)
y=this.b
y.toString
P.cR(null,null,y,H.l(new P.lq(z,this),{func:1,ret:-1}))}},
c6:function(){var z=H.e(this.c,"$isbx")
this.c=null
return this.bq(z)},
bq:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d0:function(a){var z,y,x,w
z=H.y(this,0)
H.dP(a,{futureOr:1,type:z})
y=this.$ti
x=H.c1(a,"$isbJ",y,"$asbJ")
if(x){z=H.c1(a,"$isb_",y,null)
if(z)P.fL(a,this)
else P.lm(a,this)}else{w=this.c6()
H.A(a,z)
this.a=4
this.c=a
P.bV(this,w)}},
bX:[function(a,b){var z
H.e(b,"$isaA")
z=this.c6()
this.a=8
this.c=new P.ap(a,b)
P.bV(this,z)},function(a){return this.bX(a,null)},"iY","$2","$1","gfa",4,2,51],
$isbJ:1,
t:{
lm:function(a,b){var z,y,x
b.a=1
try{a.ep(new P.ln(b),new P.lo(b),null)}catch(x){z=H.ab(x)
y=H.bD(x)
P.nM(new P.lp(b,z,y))}},
fL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isb_")
if(z>=4){y=b.c6()
b.a=a.a
b.c=a.c
P.bV(b,y)}else{y=H.e(b.c,"$isbx")
b.a=2
b.c=a
a.dd(y)}},
bV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isap")
y=y.b
u=v.a
t=v.b
y.toString
P.cQ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bV(z.a,b)}y=z.a
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
if(p){H.e(r,"$isap")
y=y.b
u=r.a
t=r.b
y.toString
P.cQ(null,null,y,u,t)
return}o=$.Y
if(o==null?q!=null:o!==q)$.Y=q
else o=null
y=b.c
if(y===8)new P.lt(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ls(x,b,r).$0()}else if((y&2)!==0)new P.lr(z,x,b).$0()
if(o!=null)$.Y=o
y=x.b
if(!!J.M(y).$isbJ){if(y.a>=4){n=H.e(t.c,"$isbx")
t.c=null
b=t.bq(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fL(y,t)
return}}m=b.b
n=H.e(m.c,"$isbx")
m.c=null
b=m.bq(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.e(u,"$isap")
m.a=8
m.c=u}z.a=m
y=m}}}},
ll:{"^":"m:0;a,b",
$0:function(){P.bV(this.a,this.b)}},
lq:{"^":"m:0;a,b",
$0:function(){P.bV(this.b,this.a.a)}},
ln:{"^":"m:25;a",
$1:function(a){var z=this.a
z.a=0
z.d0(a)}},
lo:{"^":"m:50;a",
$2:function(a,b){this.a.bX(a,H.e(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
lp:{"^":"m:0;a,b,c",
$0:function(){this.a.bX(this.b,this.c)}},
lt:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.en(H.l(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bD(v)
if(this.d){w=H.e(this.a.a.c,"$isap").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isap")
else u.b=new P.ap(y,x)
u.a=!0
return}if(!!J.M(z).$isbJ){if(z instanceof P.b_&&z.gdi()>=4){if(z.gdi()===8){w=this.b
w.b=H.e(z.gh0(),"$isap")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iO(new P.lu(t),null)
w.a=!1}}},
lu:{"^":"m:48;a",
$1:function(a){return this.a}},
ls:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cK(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bD(t)
x=this.a
x.b=new P.ap(z,y)
x.a=!0}}},
lr:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isap")
w=this.c
if(w.ig(z)&&w.e!=null){v=this.b
v.b=w.i4(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bD(u)
w=H.e(this.a.a.c,"$isap")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ap(y,x)
s.a=!0}}},
fH:{"^":"b;a,0b"},
dr:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b_(0,$.Y,[P.n])
z.a=0
this.ie(new P.k3(z,this),!0,new P.k4(z,y),y.gfa())
return y}},
k3:{"^":"m;a,b",
$1:function(a){H.A(a,H.al(this.b,"dr",0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.al(this.b,"dr",0)]}}},
k4:{"^":"m:0;a,b",
$0:function(){this.b.d0(this.a.a)}},
f2:{"^":"b;$ti"},
k2:{"^":"b;"},
bs:{"^":"b;"},
ap:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isa8:1},
mI:{"^":"b;",$ispa:1},
n3:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eP()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lO:{"^":"mI;",
iL:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.Y){a.$0()
return}P.h9(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cQ(null,null,this,z,H.e(y,"$isaA"))}},
iM:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.Y){a.$1(b)
return}P.ha(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cQ(null,null,this,z,H.e(y,"$isaA"))}},
hK:function(a,b){return new P.lQ(this,H.l(a,{func:1,ret:b}),b)},
cf:function(a){return new P.lP(this,H.l(a,{func:1,ret:-1}))},
dA:function(a,b){return new P.lR(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
en:function(a,b){H.l(a,{func:1,ret:b})
if($.Y===C.j)return a.$0()
return P.h9(null,null,this,a,b)},
cK:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Y===C.j)return a.$1(b)
return P.ha(null,null,this,a,b,c,d)},
iK:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Y===C.j)return a.$2(b,c)
return P.n4(null,null,this,a,b,c,d,e,f)},
iB:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
lQ:{"^":"m;a,b,c",
$0:function(){return this.a.en(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lP:{"^":"m:3;a,b",
$0:function(){return this.a.iL(this.b)}},
lR:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.iM(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iO:function(a,b,c,d,e){return new H.b5(0,0,[d,e])},
iP:function(a,b,c){H.c4(a)
return H.u(H.nk(a,new H.b5(0,0,[b,c])),"$iseD",[b,c],"$aseD")},
de:function(a,b){return new H.b5(0,0,[a,b])},
cd:function(a,b,c,d){return new P.lB(0,0,[d])},
iz:function(a,b,c){var z,y
if(P.dI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c0()
C.a.h(y,a)
try{P.n0(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f3(b,H.hr(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d7:function(a,b,c){var z,y,x
if(P.dI(a))return b+"..."+c
z=new P.an(b)
y=$.$get$c0()
C.a.h(y,a)
try{x=z
x.a=P.f3(x.gaL(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaL()+c
y=z.gaL()
return y.charCodeAt(0)==0?y:y},
dI:function(a){var z,y
for(z=0;y=$.$get$c0(),z<y.length;++z)if(a===y[z])return!0
return!1},
n0:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.D();t=s,s=r){r=z.gM(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
iQ:function(a,b,c){var z=P.iO(null,null,null,b,c)
a.J(0,new P.iR(z,b,c))
return z},
eE:function(a,b){var z,y
z=P.cd(null,null,null,b)
for(y=J.b1(a);y.D();)z.h(0,H.A(y.gM(y),b))
return z},
dg:function(a){var z,y,x
z={}
if(P.dI(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$c0(),a)
x=y
x.a=x.gaL()+"{"
z.a=!0
J.dY(a,new P.iW(z,y))
z=y
z.a=z.gaL()+"}"}finally{z=$.$get$c0()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaL()
return z.charCodeAt(0)==0?z:z},
lB:{"^":"lv;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){var z=new P.fP(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
V:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscN")!=null}else{y=this.fb(b)
return y}},
fb:function(a){var z=this.d
if(z==null)return!1
return this.c_(this.d8(z,a),a)>=0},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dD()
this.b=z}return this.cZ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dD()
this.c=y}return this.cZ(y,b)}else return this.f3(0,b)},
f3:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.dD()
this.d=z}y=this.d1(b)
x=z[y]
if(x==null)z[y]=[this.bW(b)]
else{if(this.c_(x,b)>=0)return!1
x.push(this.bW(b))}return!0},
K:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.de(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.de(this.c,b)
else return this.fU(0,b)},
fU:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.d8(z,b)
x=this.c_(y,b)
if(x<0)return!1
this.dk(y.splice(x,1)[0])
return!0},
cZ:function(a,b){H.A(b,H.y(this,0))
if(H.e(a[b],"$iscN")!=null)return!1
a[b]=this.bW(b)
return!0},
de:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscN")
if(z==null)return!1
this.dk(z)
delete a[b]
return!0},
d_:function(){this.r=this.r+1&67108863},
bW:function(a){var z,y
z=new P.cN(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d_()
return z},
dk:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d_()},
d1:function(a){return J.c5(a)&0x3ffffff},
d8:function(a,b){return a[this.d1(b)]},
c_:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.R(a[y].a,b))return y
return-1},
t:{
dD:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cN:{"^":"b;a,0b,0c"},
fP:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aM(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
lv:{"^":"jP;"},
iR:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.p(0,H.A(a,this.b),H.A(b,this.c))}},
cA:{"^":"lC;",$isi:1,$isd:1},
z:{"^":"b;$ti",
gX:function(a){return new H.df(a,this.gm(a),0,[H.b8(this,a,"z",0)])},
H:function(a,b){return this.j(a,b)},
iQ:function(a,b){var z,y,x
z=H.c([],[H.b8(this,a,"z",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.p(z,y,this.j(a,y));++y}return z},
iP:function(a){return this.iQ(a,!0)},
aF:function(a,b,c,d){var z
H.A(d,H.b8(this,a,"z",0))
P.aS(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.d7(a,"[","]")}},
eG:{"^":"ah;"},
iW:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ah:{"^":"b;$ti",
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b8(this,a,"ah",0),H.b8(this,a,"ah",1)]})
for(z=J.b1(this.ga6(a));z.D();){y=z.gM(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.ao(this.ga6(a))},
i:function(a){return P.dg(a)},
$isK:1},
mk:{"^":"b;$ti",
p:function(a,b,c){H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
throw H.a(P.E("Cannot modify unmodifiable map"))}},
iX:{"^":"b;$ti",
j:function(a,b){return J.dX(this.a,b)},
p:function(a,b,c){J.cX(this.a,H.A(b,H.y(this,0)),H.A(c,H.y(this,1)))},
J:function(a,b){J.dY(this.a,H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.ao(this.a)},
i:function(a){return J.ac(this.a)},
$isK:1},
fw:{"^":"ml;a,$ti"},
jR:{"^":"b;$ti",
aq:function(a,b){var z
for(z=J.b1(H.u(b,"$isi",this.$ti,"$asi"));z.D();)this.h(0,z.gM(z))},
i:function(a){return P.d7(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e1("index"))
if(b<0)H.r(P.a4(b,0,null,"index",null))
for(z=new P.fP(this,this.r,this.$ti),z.c=this.e,y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
$isi:1},
jP:{"^":"jR;"},
lC:{"^":"b+z;"},
ml:{"^":"iX+mk;$ti"}}],["","",,P,{"^":"",hP:{"^":"c6;a",
ij:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aS(c,d,b.length,null,null,null)
z=$.$get$fJ()
if(typeof d!=="number")return H.p(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.F(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cU(C.b.F(b,s))
o=H.cU(C.b.F(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.u(b,x,y)
w.a+=H.bQ(r)
x=s
continue}}throw H.a(P.a0("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.e4(b,u,d,v,t,k)
else{j=C.e.bj(k-1,4)+1
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aV(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.e4(b,u,d,v,t,i)
else{j=C.e.bj(i,4)
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aV(b,d,d,j===2?"==":"=")}return b},
$asc6:function(){return[[P.d,P.n],P.h]},
t:{
e4:function(a,b,c,d,e,f){if(C.e.bj(f,4)!==0)throw H.a(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a0("Invalid base64 padding, more than two '=' characters",a,b))}}},hQ:{"^":"b3;a",
$asb3:function(){return[[P.d,P.n],P.h]}},c6:{"^":"b;$ti"},b3:{"^":"k2;$ti"},ih:{"^":"c6;",
$asc6:function(){return[P.h,[P.d,P.n]]}},iw:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iv:{"^":"b3;a",
fc:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.f(a,w)
switch(a[w]){case"&":u="&amp;"
break
case'"':u=z?"&quot;":null
break
case"'":u=x?"&#39;":null
break
case"<":u="&lt;"
break
case">":u="&gt;"
break
case"/":u=y?"&#47;":null
break
default:u=null}if(u!=null){if(v==null)v=new P.an("")
if(w>b)v.a+=C.b.u(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hK(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb3:function(){return[P.h,P.h]}},kG:{"^":"ih;a",
ghX:function(){return C.L}},kN:{"^":"b3;",
b1:function(a,b,c){var z,y,x,w
z=a.length
P.aS(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mG(0,0,x)
if(w.fh(a,b,z)!==z)w.dm(J.hD(a,z-1),0)
return C.a1.bR(x,0,w.b)},
cm:function(a){return this.b1(a,0,null)},
$asb3:function(){return[P.h,[P.d,P.n]]}},mG:{"^":"b;a,b,c",
dm:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.f(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.f(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.f(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.f(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.f(z,y)
z[y]=128|a&63
return!1}},
fh:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dm(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.f(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.f(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.f(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.f(z,v)
z[v]=128|w&63}}return x}},kH:{"^":"b3;a",
b1:function(a,b,c){var z,y,x,w,v
H.u(a,"$isd",[P.n],"$asd")
z=P.kI(!1,a,b,c)
if(z!=null)return z
y=J.ao(a)
P.aS(b,c,y,null,null,null)
x=new P.an("")
w=new P.mD(!1,x,!0,0,0,0)
w.b1(a,b,y)
w.i0(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cm:function(a){return this.b1(a,0,null)},
$asb3:function(){return[[P.d,P.n],P.h]},
t:{
kI:function(a,b,c,d){H.u(b,"$isd",[P.n],"$asd")
if(b instanceof Uint8Array)return P.kJ(!1,b,c,d)
return},
kJ:function(a,b,c,d){var z,y,x
z=$.$get$fC()
if(z==null)return
y=0===c
if(y&&!0)return P.dy(z,b)
x=b.length
d=P.aS(c,d,x,null,null,null)
if(y&&d===x)return P.dy(z,b)
return P.dy(z,b.subarray(c,d))},
dy:function(a,b){if(P.kL(b))return
return P.kM(a,b)},
kM:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
kL:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kK:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},mD:{"^":"b;a,b,c,d,e,f",
i0:function(a,b,c){var z
H.u(b,"$isd",[P.n],"$asd")
if(this.e>0){z=P.a0("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(a,"$isd",[P.n],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mF(c)
v=new P.mE(this,b,c,a)
$label0$0:for(u=J.aK(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bP()
if((r&192)!==128){q=P.a0("Bad UTF-8 encoding 0x"+C.e.bg(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.z,q)
if(z<=C.z[q]){q=P.a0("Overlong encoding of 0x"+C.e.bg(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a0("Character outside valid Unicode range: 0x"+C.e.bg(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bQ(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cP()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.a0("Negative UTF-8 code unit: -0x"+C.e.bg(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a0("Bad UTF-8 encoding 0x"+C.e.bg(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mF:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
H.u(a,"$isd",[P.n],"$asd")
z=this.a
for(y=J.aK(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bP()
if((w&127)!==w)return x-b}return z-b}},mE:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cg(this.d,a,b)}}}],["","",,P,{"^":"",
cn:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jw(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a0(a,null,null))},
ij:function(a){var z=J.M(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bl(a)+"'"},
iS:function(a,b,c,d){var z,y
H.A(b,d)
z=J.iB(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.u(z,"$isd",[d],"$asd")},
iT:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gX(a);x.D();)C.a.h(y,H.A(x.gM(x),c))
if(b)return y
return H.u(J.bK(y),"$isd",z,"$asd")},
cg:function(a,b,c){var z,y
z=P.n
H.u(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.u(a,"$isbh",[z],"$asbh")
y=a.length
c=P.aS(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.P()
z=c<y}else z=!0
return H.eT(z?C.a.bR(a,b,c):a)}if(!!J.M(a).$isdl)return H.jy(a,b,P.aS(b,c,a.length,null,null,null))
return P.k5(a,b,c)},
k5:function(a,b,c){var z,y,x,w
H.u(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a4(b,0,J.ao(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a4(c,b,J.ao(a),null,null))
y=J.b1(a)
for(x=0;x<b;++x)if(!y.D())throw H.a(P.a4(b,0,x,null,null))
w=[]
if(z)for(;y.D();)w.push(y.gM(y))
else for(x=b;x<c;++x){if(!y.D())throw H.a(P.a4(c,b,x,null,null))
w.push(y.gM(y))}return H.eT(w)},
jG:function(a,b,c){return new H.iE(a,H.iF(a,!1,!0,!1))},
fy:function(){var z=H.jo()
if(z!=null)return P.kA(z,0,null)
throw H.a(P.E("'Uri.base' is not supported"))},
cv:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ij(a)},
v:function(a){return new P.fK(a)},
iU:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
dT:function(a){H.nK(a)},
kA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.fx(b>0||c<c?C.b.u(a,b,c):a,5,null).geu()
else if(y===32)return P.fx(C.b.u(a,z,c),0,null).geu()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.p(w,0,0)
x=b-1
C.a.p(w,1,x)
C.a.p(w,2,x)
C.a.p(w,7,x)
C.a.p(w,3,b)
C.a.p(w,4,b)
C.a.p(w,5,c)
C.a.p(w,6,c)
if(P.hb(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.iT()
if(v>=b)if(P.hb(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.E()
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
y=2}a=m+C.b.u(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aV(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
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
else if(v===z&&C.b.a9(a,"https",b)){if(x&&t+4===s&&C.b.a9(a,"443",t+1))if(b===0&&!0){a=C.b.aV(a,t,s,"")
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
q-=b}return new P.lX(a,v,u,t,s,r,q,o)}return P.mm(a,b,c,v,u,t,s,r,q,o)},
fA:function(a,b){var z=P.h
return C.a.i1(H.c(a.split("&"),[z]),P.de(z,z),new P.kD(b),[P.K,P.h,P.h])},
ky:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kz(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.W(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cn(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.cP()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cn(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.cP()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fz:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kB(a)
y=new P.kC(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.W(a,w)
if(s===58){if(w===b){++w
if(C.b.W(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gau(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.ky(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.e.aO(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mV:function(){var z,y,x,w,v
z=P.iU(22,new P.mX(),!0,P.Q)
y=new P.mW(z)
x=new P.mY()
w=new P.mZ()
v=H.e(y.$2(0,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isQ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isQ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isQ"),"]",5)
v=H.e(y.$2(9,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isQ"),"az",21)
v=H.e(y.$2(21,245),"$isQ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hb:function(a,b,c,d,e){var z,y,x,w,v
H.u(e,"$isd",[P.n],"$asd")
z=$.$get$hc()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
S:{"^":"b;"},
"+bool":0,
aF:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.e.aO(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.i6(H.jv(this))
y=P.c8(H.jt(this))
x=P.c8(H.jp(this))
w=P.c8(H.jq(this))
v=P.c8(H.js(this))
u=P.c8(H.ju(this))
t=P.i7(H.jr(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
i6:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
i7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c8:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"a5;"},
"+double":0,
be:{"^":"b;a",
k:function(a,b){return new P.be(C.e.af(this.a*b))},
P:function(a,b){return C.e.P(this.a,H.e(b,"$isbe").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ic()
y=this.a
if(y<0)return"-"+new P.be(0-y).i(0)
x=z.$1(C.e.a5(y,6e7)%60)
w=z.$1(C.e.a5(y,1e6)%60)
v=new P.ib().$1(y%1e6)
return""+C.e.a5(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
ep:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ib:{"^":"m:31;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ic:{"^":"m:31;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a8:{"^":"b;"},
eP:{"^":"a8;",
i:function(a){return"Throw of null."}},
aD:{"^":"a8;a,b,c,d",
gbZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbY:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbZ()+y+x
if(!this.a)return w
v=this.gbY()
u=P.cv(this.b)
return w+v+": "+H.j(u)},
t:{
cq:function(a){return new P.aD(!1,null,null,a)},
cr:function(a,b,c){return new P.aD(!0,a,b,c)},
e1:function(a){return new P.aD(!1,null,a,"Must not be null")}}},
cD:{"^":"aD;e,f,a,b,c,d",
gbZ:function(){return"RangeError"},
gbY:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
cE:function(a,b,c){return new P.cD(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.cD(b,c,!0,a,d,"Invalid value")},
aS:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.a4(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.a4(b,a,c,"end",f))
return b}return c}}},
ix:{"^":"aD;e,m:f>,a,b,c,d",
gbZ:function(){return"RangeError"},
gbY:function(){if(J.hz(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
W:function(a,b,c,d,e){var z=H.F(e!=null?e:J.ao(b))
return new P.ix(b,z,!0,a,c,"Index out of range")}}},
kw:{"^":"a8;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
E:function(a){return new P.kw(a)}}},
kt:{"^":"a8;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ch:function(a){return new P.kt(a)}}},
dq:{"^":"a8;a",
i:function(a){return"Bad state: "+this.a},
t:{
f1:function(a){return new P.dq(a)}}},
hZ:{"^":"a8;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cv(z))+"."},
t:{
aM:function(a){return new P.hZ(a)}}},
jj:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa8:1},
f_:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa8:1},
i4:{"^":"a8;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fK:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
ir:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.u(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.F(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.W(w,s)
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
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
t:{
a0:function(a,b,c){return new P.ir(a,b,c)}}},
c9:{"^":"b;"},
n:{"^":"a5;"},
"+int":0,
i:{"^":"b;$ti",
cN:["eJ",function(a,b){var z=H.al(this,"i",0)
return new H.dA(this,H.l(b,{func:1,ret:P.S,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gX(this)
for(y=0;z.D();)++y
return y},
gaH:function(a){var z,y
z=this.gX(this)
if(!z.D())throw H.a(H.d8())
y=z.gM(z)
if(z.D())throw H.a(H.iA())
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e1("index"))
if(b<0)H.r(P.a4(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.D();){x=z.gM(z)
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
i:function(a){return P.iz(this,"(",")")}},
d9:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
K:{"^":"b;$ti"},
L:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a5:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gT:function(a){return H.bP(this)},
i:function(a){return"Instance of '"+H.bl(this)+"'"},
toString:function(){return this.i(this)}},
aA:{"^":"b;"},
h:{"^":"b;",$iseQ:1},
"+String":0,
an:{"^":"b;aL:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoV:1,
t:{
f3:function(a,b,c){var z=J.b1(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gM(z))
while(z.D())}else{a+=H.j(z.gM(z))
for(;z.D();)a=a+c+H.j(z.gM(z))}return a}}},
kD:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.u(a,"$isK",[z,z],"$asK")
H.H(b)
y=J.aK(b).e5(b,"=")
if(y===-1){if(b!=="")J.cX(a,P.dF(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.an(b,y+1)
z=this.a
J.cX(a,P.dF(x,0,x.length,z,!0),P.dF(w,0,w.length,z,!0))}return a}},
kz:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv4 address, "+a,this.a,b))}},
kB:{"^":"m:44;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kC:{"^":"m:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cn(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.P()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cO:{"^":"b;bQ:a<,b,c,d,ei:e>,f,r,0x,0y,0z,0Q,0ch",
gev:function(){return this.b},
gcv:function(a){var z=this.c
if(z==null)return""
if(C.b.a3(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbM:function(a){var z=this.d
if(z==null)return P.h0(this.a)
return z},
gcF:function(a){var z=this.f
return z==null?"":z},
ge0:function(){var z=this.r
return z==null?"":z},
cJ:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isK",[P.h,null],"$asK")
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
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dE(g,0,0,h)
return new P.cO(i,j,c,f,d,g,this.r)},
em:function(a,b){return this.cJ(a,null,null,null,null,null,null,b,null,null)},
gcG:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fw(P.fA(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
ge1:function(){return this.c!=null},
ge4:function(){return this.f!=null},
ge2:function(){return this.r!=null},
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
v:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdx){y=this.a
x=b.gbQ()
if(y==null?x==null:y===x)if(this.c!=null===b.ge1()){y=this.b
x=b.gev()
if(y==null?x==null:y===x){y=this.gcv(this)
x=z.gcv(b)
if(y==null?x==null:y===x){y=this.gbM(this)
x=z.gbM(b)
if(y==null?x==null:y===x)if(this.e===z.gei(b)){y=this.f
x=y==null
if(!x===b.ge4()){if(x)y=""
if(y===z.gcF(b)){z=this.r
y=z==null
if(!y===b.ge2()){if(y)z=""
z=z===b.ge0()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdx:1,
t:{
cl:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$isd",[P.n],"$asd")
if(c===C.k){z=$.$get$h5().b
if(typeof b!=="string")H.r(H.ak(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.al(c,"c6",0))
y=c.ghX().cm(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bQ(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mm:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mx(a,b,d)
else{if(d===b)P.bW(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.my(a,z,e-1):""
x=P.mr(a,e,f,!1)
if(typeof f!=="number")return f.E()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.mu(P.cn(C.b.u(a,w,g),new P.mn(a,f),null),j):null}else{y=""
x=null
v=null}u=P.ms(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.P()
t=h<i?P.dE(a,h+1,i,null):null
return new P.cO(j,y,x,v,u,t,i<c?P.mq(a,i+1,c):null)},
h0:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bW:function(a,b,c){throw H.a(P.a0(c,a,b))},
mu:function(a,b){if(a!=null&&a===P.h0(b))return
return a},
mr:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.S()
z=c-1
if(C.b.W(a,z)!==93)P.bW(a,b,"Missing end `]` to match `[` in host")
P.fz(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.W(a,y)===58){P.fz(a,b,c)
return"["+a+"]"}return P.mA(a,b,c)},
mA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.W(a,z)
if(v===37){u=P.h7(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
s=C.b.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bW(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.W(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h1(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mx:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h3(C.b.F(a,b)))P.bW(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bW(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.mo(y?a.toLowerCase():a)},
mo:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
my:function(a,b,c){return P.bX(a,b,c,C.Z)},
ms:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bX(a,b,c,C.D):C.w.jx(d,new P.mt(),P.h).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a3(w,"/"))w="/"+w
return P.mz(w,e,f)},
mz:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a3(a,"/"))return P.mB(a,!z||c)
return P.mC(a)},
dE:function(a,b,c,d){var z,y
z={}
H.u(d,"$isK",[P.h,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.cq("Both query and queryParameters specified"))
return P.bX(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.J(0,new P.mv(new P.mw(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mq:function(a,b,c){return P.bX(a,b,c,C.n)},
h7:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.W(a,b+1)
x=C.b.W(a,z)
w=H.cU(y)
v=H.cU(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aO(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bQ(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
h1:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.p(y,0,37)
C.a.p(y,1,C.b.F("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.b.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.e.h8(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.cg(y,0,null)},
bX:function(a,b,c,d){var z=P.h6(a,b,c,H.u(d,"$isd",[P.n],"$asd"),!1)
return z==null?C.b.u(a,b,c):z},
h6:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$isd",[P.n],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.P()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.W(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.h7(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bW(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.W(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h1(v)}}if(w==null)w=new P.an("")
w.a+=C.b.u(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.P()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h4:function(a){if(C.b.a3(a,"."))return!0
return C.b.e5(a,"/.")!==-1},
mC:function(a){var z,y,x,w,v,u,t
if(!P.h4(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.R(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
mB:function(a,b){var z,y,x,w,v,u
if(!P.h4(a))return!b?P.h2(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gau(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gau(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.p(z,0,P.h2(z[0]))}return C.a.n(z,"/")},
h2:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h3(J.hA(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.an(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mp:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cq("Invalid URL encoding"))}}return z},
dF:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c3(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.F(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.u(a,b,c)
else u=new H.w(y.u(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.cq("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cq("Truncated URI"))
C.a.h(u,P.mp(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.u(u,"$isd",[P.n],"$asd")
return new P.kH(!1).cm(u)},
h3:function(a){var z=a|32
return 97<=z&&z<=122}}},
mn:{"^":"m:42;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.E()
throw H.a(P.a0("Invalid port",this.a,z+1))}},
mt:{"^":"m:28;",
$1:function(a){return P.cl(C.a_,a,C.k,!1)}},
mw:{"^":"m:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.cl(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.cl(C.p,b,C.k,!0))}}},
mv:{"^":"m:40;a",
$2:function(a,b){var z,y
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(z=J.b1(H.hr(b,"$isi")),y=this.a;z.D();)y.$2(a,H.H(z.gM(z)))}},
kx:{"^":"b;a,b,c",
geu:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.e6(y,"?",z)
w=y.length
if(x>=0){v=P.bX(y,x+1,w,C.n)
w=x}else v=null
z=new P.la(this,"data",null,null,null,P.bX(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fx:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a0("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a0("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gau(z)
if(v!==44||x!==t+7||!C.b.a9(a,"base64",t+1))throw H.a(P.a0("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.ij(0,a,s,y)
else{r=P.h6(a,s,y,C.n,!0)
if(r!=null)a=C.b.aV(a,s,y,r)}return new P.kx(a,z,c)}}},
mX:{"^":"m:38;",
$1:function(a){return new Uint8Array(96)}},
mW:{"^":"m:36;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hE(z,0,96,b)
return z}},
mY:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mZ:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lX:{"^":"b;a,b,c,d,e,f,r,x,0y",
ge1:function(){return this.c>0},
ge3:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.E()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
ge4:function(){var z=this.f
if(typeof z!=="number")return z.P()
return z<this.r},
ge2:function(){return this.r<this.a.length},
gd9:function(){return this.b===4&&C.b.a3(this.a,"http")},
gda:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbQ:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd9()){this.x="http"
z="http"}else if(this.gda()){this.x="https"
z="https"}else if(z===4&&C.b.a3(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a3(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
gev:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcv:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbM:function(a){var z
if(this.ge3()){z=this.d
if(typeof z!=="number")return z.E()
return P.cn(C.b.u(this.a,z+1,this.e),null,null)}if(this.gd9())return 80
if(this.gda())return 443
return 0},
gei:function(a){return C.b.u(this.a,this.e,this.f)},
gcF:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.P()
return z<y?C.b.u(this.a,z+1,y):""},
ge0:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.an(y,z+1):""},
gcG:function(){var z=this.f
if(typeof z!=="number")return z.P()
if(z>=this.r)return C.a0
z=P.h
return new P.fw(P.fA(this.gcF(this),C.k),[z,z])},
cJ:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isK",[P.h,null],"$asK")
i=this.gbQ()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.ge3()?this.gbM(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dE(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.an(y,x+1)
return new P.cO(i,j,c,f,d,g,b)},
em:function(a,b){return this.cJ(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.M(b)
if(!!z.$isdx)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdx:1},
la:{"^":"cO;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e0:function(a){var z=document.createElement("a")
return z},
ec:function(a,b){var z=document.createElement("canvas")
return z},
id:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).aj(z,a,b,c)
y.toString
z=W.G
z=new H.dA(new W.au(y),H.l(new W.ie(),{func:1,ret:P.S,args:[z]}),[z])
return H.e(z.gaH(z),"$isU")},
ig:function(a){H.e(a,"$isae")
return"wheel"},
bH:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hH(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
iy:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isex")
try{J.hJ(z,a)}catch(x){H.ab(x)}return z},
cL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fO:function(a,b,c,d){var z,y
z=W.cL(W.cL(W.cL(W.cL(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hf:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.Y
if(z===C.j)return a
return z.dA(a,b)},
a_:{"^":"U;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nW:{"^":"t;0m:length=","%":"AccessibleNodeList"},
nX:{"^":"a_;0a1:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nY:{"^":"a_;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e5:{"^":"a_;",$ise5:1,"%":"HTMLBaseElement"},
d_:{"^":"t;",$isd_:1,"%":";Blob"},
cs:{"^":"a_;",$iscs:1,"%":"HTMLBodyElement"},
o3:{"^":"a_;0a1:type}","%":"HTMLButtonElement"},
d2:{"^":"a_;",
cO:function(a,b,c){var z=a.getContext(b,P.n9(c,null))
return z},
$isd2:1,
"%":"HTMLCanvasElement"},
o5:{"^":"G;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
o7:{"^":"i3;0m:length=","%":"CSSPerspective"},
bc:{"^":"t;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
o8:{"^":"l9;0m:length=",
eC:function(a,b){var z=a.getPropertyValue(this.f7(a,b))
return z==null?"":z},
f7:function(a,b){var z,y
z=$.$get$eh()
y=z[b]
if(typeof y==="string")return y
y=this.h9(a,b)
z[b]=y
return y},
h9:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.i8()+b
if(z in a)return z
return b},
gcg:function(a){return a.bottom},
gat:function(a){return a.height},
gaR:function(a){return a.left},
gbd:function(a){return a.right},
gbh:function(a){return a.top},
gax:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i2:{"^":"b;",
gaR:function(a){return this.eC(a,"left")}},
ei:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
i3:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
o9:{"^":"ei;0m:length=","%":"CSSTransformValue"},
oa:{"^":"ei;0m:length=","%":"CSSUnparsedValue"},
ob:{"^":"t;0m:length=","%":"DataTransferItemList"},
bd:{"^":"a_;",$isbd:1,"%":"HTMLDivElement"},
oc:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
od:{"^":"lc;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.u(c,"$isad",[P.a5],"$asad")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[[P.ad,P.a5]]},
$asz:function(){return[[P.ad,P.a5]]},
$isi:1,
$asi:function(){return[[P.ad,P.a5]]},
$isd:1,
$asd:function(){return[[P.ad,P.a5]]},
$asD:function(){return[[P.ad,P.a5]]},
"%":"ClientRectList|DOMRectList"},
ia:{"^":"t;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gax(a))+" x "+H.j(this.gat(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.c1(b,"$isad",[P.a5],"$asad")
if(!z)return!1
z=J.aC(b)
return a.left===z.gaR(b)&&a.top===z.gbh(b)&&this.gax(a)===z.gax(b)&&this.gat(a)===z.gat(b)},
gT:function(a){return W.fO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gax(a)&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF)},
gcg:function(a){return a.bottom},
gat:function(a){return a.height},
gaR:function(a){return a.left},
gbd:function(a){return a.right},
gbh:function(a){return a.top},
gax:function(a){return a.width},
$isad:1,
$asad:function(){return[P.a5]},
"%":";DOMRectReadOnly"},
oe:{"^":"le;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[P.h]},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asD:function(){return[P.h]},
"%":"DOMStringList"},
of:{"^":"t;0m:length=","%":"DOMTokenList"},
l8:{"^":"cA;d6:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isU")},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isU")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.iP(this)
return new J.aw(z,z.length,0,[H.y(z,0)])},
aF:function(a,b,c,d){throw H.a(P.ch(null))},
$asz:function(){return[W.U]},
$asi:function(){return[W.U]},
$asd:function(){return[W.U]}},
U:{"^":"G;0iN:tagName=",
ghJ:function(a){return new W.lf(a)},
gcl:function(a){return new W.l8(a,a.children)},
gdB:function(a){return P.jC(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a5)},
i:function(a){return a.localName},
aj:["bS",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.es
if(z==null){z=H.c([],[W.aG])
y=new W.eN(z)
C.a.h(z,W.fM(null))
C.a.h(z,W.fX())
$.es=y
d=y}else d=z
z=$.er
if(z==null){z=new W.h8(d)
$.er=z
c=z}else{z.a=d
c=z}}if($.aN==null){z=document
y=z.implementation.createHTMLDocument("")
$.aN=y
$.d4=y.createRange()
y=$.aN
y.toString
y=y.createElement("base")
H.e(y,"$ise5")
y.href=z.baseURI
$.aN.head.appendChild(y)}z=$.aN
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscs")}z=$.aN
if(!!this.$iscs)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aN.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.Y,a.tagName)){$.d4.selectNodeContents(x)
w=$.d4.createContextualFragment(b)}else{x.innerHTML=b
w=$.aN.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aN.body
if(x==null?z!=null:x!==z)J.e_(x)
c.cQ(w)
document.adoptNode(w)
return w},function(a,b,c){return this.aj(a,b,c,null)},"hR",null,null,"gjw",5,5,null],
eG:function(a,b,c,d){a.textContent=null
a.appendChild(this.aj(a,b,c,d))},
eF:function(a,b){return this.eG(a,b,null,null)},
$isU:1,
"%":";Element"},
ie:{"^":"m:24;",
$1:function(a){return!!J.M(H.e(a,"$isG")).$isU}},
og:{"^":"a_;0a1:type}","%":"HTMLEmbedElement"},
ag:{"^":"t;",$isag:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ae:{"^":"t;",
dr:["eH",function(a,b,c,d){H.l(c,{func:1,args:[W.ag]})
if(c!=null)this.f4(a,b,c,!1)}],
f4:function(a,b,c,d){return a.addEventListener(b,H.bB(H.l(c,{func:1,args:[W.ag]}),1),!1)},
$isae:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fU|fV|fY|fZ"},
b4:{"^":"d_;",$isb4:1,"%":"File"},
et:{"^":"lk;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isb4")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.b4]},
$asz:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$isd:1,
$asd:function(){return[W.b4]},
$iset:1,
$asD:function(){return[W.b4]},
"%":"FileList"},
oh:{"^":"ae;0m:length=","%":"FileWriter"},
oi:{"^":"a_;0m:length=","%":"HTMLFormElement"},
bg:{"^":"t;",$isbg:1,"%":"Gamepad"},
oj:{"^":"t;0m:length=","%":"History"},
ok:{"^":"lx;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asD:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ew:{"^":"t;",$isew:1,"%":"ImageData"},
ex:{"^":"a_;0a1:type}",$isex:1,"%":"HTMLInputElement"},
bL:{"^":"du;",$isbL:1,"%":"KeyboardEvent"},
oo:{"^":"a_;0a1:type}","%":"HTMLLinkElement"},
op:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
oq:{"^":"t;0m:length=","%":"MediaList"},
or:{"^":"ae;",
dr:function(a,b,c,d){H.l(c,{func:1,args:[W.ag]})
if(b==="message")a.start()
this.eH(a,b,c,!1)},
"%":"MessagePort"},
os:{"^":"lD;",
j:function(a,b){return P.b0(a.get(H.H(b)))},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.J(a,new W.j9(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asah:function(){return[P.h,null]},
$isK:1,
$asK:function(){return[P.h,null]},
"%":"MIDIInputMap"},
j9:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ot:{"^":"lE;",
j:function(a,b){return P.b0(a.get(H.H(b)))},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.J(a,new W.ja(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asah:function(){return[P.h,null]},
$isK:1,
$asK:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
ja:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"t;",$isbj:1,"%":"MimeType"},
ou:{"^":"lG;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbj")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bj]},
$asz:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asD:function(){return[W.bj]},
"%":"MimeTypeArray"},
ay:{"^":"du;",$isay:1,"%":"PointerEvent;DragEvent|MouseEvent"},
au:{"^":"cA;a",
gaH:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.f1("No elements"))
if(y>1)throw H.a(P.f1("More than one element"))
return z.firstChild},
aq:function(a,b){var z,y,x,w
H.u(b,"$isi",[W.G],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
p:function(a,b,c){var z,y
H.F(b)
H.e(c,"$isG")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
gX:function(a){var z=this.a.childNodes
return new W.eu(z,z.length,-1,[H.b8(C.a2,z,"D",0)])},
aF:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asz:function(){return[W.G]},
$asi:function(){return[W.G]},
$asd:function(){return[W.G]}},
G:{"^":"ae;0cE:previousSibling=",
iC:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iG:function(a,b){var z,y
try{z=a.parentNode
J.hB(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eI(a):z},
fX:function(a,b,c){return a.replaceChild(b,c)},
$isG:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
oB:{"^":"t;",
iz:[function(a){return a.previousNode()},"$0","gcE",1,0,26],
"%":"NodeIterator"},
je:{"^":"lI;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asD:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
oE:{"^":"a_;0a1:type}","%":"HTMLOListElement"},
oF:{"^":"a_;0a1:type}","%":"HTMLObjectElement"},
bk:{"^":"t;0m:length=",$isbk:1,"%":"Plugin"},
oI:{"^":"lM;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbk")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bk]},
$asz:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"PluginArray"},
oK:{"^":"t;0a1:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oL:{"^":"lS;",
j:function(a,b){return P.b0(a.get(H.H(b)))},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.J(a,new W.jM(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asah:function(){return[P.h,null]},
$isK:1,
$asK:function(){return[P.h,null]},
"%":"RTCStatsReport"},
jM:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oN:{"^":"a_;0a1:type}","%":"HTMLScriptElement"},
oO:{"^":"a_;0m:length=","%":"HTMLSelectElement"},
bm:{"^":"ae;",$isbm:1,"%":"SourceBuffer"},
oP:{"^":"fV;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbm")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bm]},
$asz:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asD:function(){return[W.bm]},
"%":"SourceBufferList"},
oQ:{"^":"a_;0a1:type}","%":"HTMLSourceElement"},
bn:{"^":"t;",$isbn:1,"%":"SpeechGrammar"},
oR:{"^":"lZ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbn")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bn]},
$asz:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asD:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"t;0m:length=",$isbo:1,"%":"SpeechRecognitionResult"},
oT:{"^":"m1;",
j:function(a,b){return a.getItem(H.H(b))},
p:function(a,b,c){a.setItem(b,H.H(c))},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga6:function(a){var z=H.c([],[P.h])
this.J(a,new W.k1(z))
return z},
gm:function(a){return a.length},
$asah:function(){return[P.h,P.h]},
$isK:1,
$asK:function(){return[P.h,P.h]},
"%":"Storage"},
k1:{"^":"m:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oW:{"^":"a_;0a1:type}","%":"HTMLStyleElement"},
bp:{"^":"t;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
ds:{"^":"a_;",$isds:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
k6:{"^":"a_;",
aj:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
z=W.id("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.au(y).aq(0,new W.au(z))
return y},
"%":"HTMLTableElement"},
oY:{"^":"a_;",
aj:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.au(z)
x=z.gaH(z)
x.toString
z=new W.au(x)
w=z.gaH(z)
y.toString
w.toString
new W.au(y).aq(0,new W.au(w))
return y},
"%":"HTMLTableRowElement"},
oZ:{"^":"a_;",
aj:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.au(z)
x=z.gaH(z)
y.toString
x.toString
new W.au(y).aq(0,new W.au(x))
return y},
"%":"HTMLTableSectionElement"},
f6:{"^":"a_;",$isf6:1,"%":"HTMLTemplateElement"},
bq:{"^":"ae;",$isbq:1,"%":"TextTrack"},
br:{"^":"ae;",$isbr:1,"%":"TextTrackCue|VTTCue"},
p0:{"^":"mb;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbr")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.br]},
$asz:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asD:function(){return[W.br]},
"%":"TextTrackCueList"},
p1:{"^":"fZ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbq")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bq]},
$asz:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asD:function(){return[W.bq]},
"%":"TextTrackList"},
p2:{"^":"t;0m:length=","%":"TimeRanges"},
bt:{"^":"t;",$isbt:1,"%":"Touch"},
bu:{"^":"du;",$isbu:1,"%":"TouchEvent"},
p3:{"^":"mh;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbt")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bt]},
$asz:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asD:function(){return[W.bt]},
"%":"TouchList"},
p4:{"^":"t;0m:length=","%":"TrackDefaultList"},
p6:{"^":"t;",
iz:[function(a){return a.previousNode()},"$0","gcE",1,0,26],
"%":"TreeWalker"},
du:{"^":"ag;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
p8:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
p9:{"^":"ae;0m:length=","%":"VideoTrackList"},
bU:{"^":"ay;",
ghU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.E("deltaY is not supported"))},
ghT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.E("deltaX is not supported"))},
$isbU:1,
"%":"WheelEvent"},
l0:{"^":"ae;",
fY:function(a,b){return a.requestAnimationFrame(H.bB(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
fg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fI:{"^":"G;",$isfI:1,"%":"Attr"},
pe:{"^":"mK;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbc")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bc]},
$asz:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asD:function(){return[W.bc]},
"%":"CSSRuleList"},
pf:{"^":"ia;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.c1(b,"$isad",[P.a5],"$asad")
if(!z)return!1
z=J.aC(b)
return a.left===z.gaR(b)&&a.top===z.gbh(b)&&a.width===z.gax(b)&&a.height===z.gat(b)},
gT:function(a){return W.fO(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gat:function(a){return a.height},
gax:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ph:{"^":"mM;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbg")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bg]},
$asz:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asD:function(){return[W.bg]},
"%":"GamepadList"},
pk:{"^":"mO;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asz:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asD:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pl:{"^":"mQ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbo")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bo]},
$asz:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asD:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
pm:{"^":"mS;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbp")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bp]},
$asz:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asD:function(){return[W.bp]},
"%":"StyleSheetList"},
l6:{"^":"eG;d6:a<",
J:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.ga6(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga6:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfI")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asah:function(){return[P.h,P.h]},
$asK:function(){return[P.h,P.h]}},
lf:{"^":"l6;a",
j:function(a,b){return this.a.getAttribute(H.H(b))},
p:function(a,b,c){this.a.setAttribute(b,H.H(c))},
gm:function(a){return this.ga6(this).length}},
lg:{"^":"dr;a,b,c,$ti",
ie:function(a,b,c,d){var z=H.y(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a7(this.a,this.b,a,!1,z)}},
pg:{"^":"lg;a,b,c,$ti"},
lh:{"^":"f2;a,b,c,d,e,$ti",
hd:function(){var z=this.d
if(z!=null&&this.a<=0)J.hC(this.b,this.c,z,!1)},
t:{
a7:function(a,b,c,d,e){var z=c==null?null:W.hf(new W.li(c),W.ag)
z=new W.lh(0,a,b,z,!1,[e])
z.hd()
return z}}},
li:{"^":"m:9;a",
$1:function(a){return this.a.$1(H.e(a,"$isag"))}},
ck:{"^":"b;a",
eX:function(a){var z,y
z=$.$get$dC()
if(z.gi8(z)){for(y=0;y<262;++y)z.p(0,C.X[y],W.no())
for(y=0;y<12;++y)z.p(0,C.t[y],W.np())}},
aP:function(a){return $.$get$fN().V(0,W.bH(a))},
aC:function(a,b,c){var z,y,x
z=W.bH(a)
y=$.$get$dC()
x=y.j(0,H.j(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dJ(x.$4(a,b,c,this))},
$isaG:1,
t:{
fM:function(a){var z,y
z=W.e0(null)
y=window.location
z=new W.ck(new W.lT(z,y))
z.eX(a)
return z},
pi:[function(a,b,c,d){H.e(a,"$isU")
H.H(b)
H.H(c)
H.e(d,"$isck")
return!0},"$4","no",16,0,21],
pj:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isU")
H.H(b)
H.H(c)
z=H.e(d,"$isck").a
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","np",16,0,21]}},
D:{"^":"b;$ti",
gX:function(a){return new W.eu(a,this.gm(a),-1,[H.b8(this,a,"D",0)])},
aF:function(a,b,c,d){H.A(d,H.b8(this,a,"D",0))
throw H.a(P.E("Cannot modify an immutable List."))}},
eN:{"^":"b;a",
aP:function(a){return C.a.dt(this.a,new W.jg(a))},
aC:function(a,b,c){return C.a.dt(this.a,new W.jf(a,b,c))},
$isaG:1},
jg:{"^":"m:14;a",
$1:function(a){return H.e(a,"$isaG").aP(this.a)}},
jf:{"^":"m:14;a,b,c",
$1:function(a){return H.e(a,"$isaG").aC(this.a,this.b,this.c)}},
lU:{"^":"b;",
f_:function(a,b,c,d){var z,y,x
this.a.aq(0,c)
z=b.cN(0,new W.lV())
y=b.cN(0,new W.lW())
this.b.aq(0,z)
x=this.c
x.aq(0,C.A)
x.aq(0,y)},
aP:function(a){return this.a.V(0,W.bH(a))},
aC:["eN",function(a,b,c){var z,y
z=W.bH(a)
y=this.c
if(y.V(0,H.j(z)+"::"+b))return this.d.hG(c)
else if(y.V(0,"*::"+b))return this.d.hG(c)
else{y=this.b
if(y.V(0,H.j(z)+"::"+b))return!0
else if(y.V(0,"*::"+b))return!0
else if(y.V(0,H.j(z)+"::*"))return!0
else if(y.V(0,"*::*"))return!0}return!1}],
$isaG:1},
lV:{"^":"m:29;",
$1:function(a){return!C.a.V(C.t,H.H(a))}},
lW:{"^":"m:29;",
$1:function(a){return C.a.V(C.t,H.H(a))}},
m8:{"^":"lU;e,a,b,c,d",
aC:function(a,b,c){if(this.eN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1},
t:{
fX:function(){var z,y,x,w,v
z=P.h
y=P.eE(C.r,z)
x=H.y(C.r,0)
w=H.l(new W.m9(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.m8(y,P.cd(null,null,null,z),P.cd(null,null,null,z),P.cd(null,null,null,z),null)
y.f_(null,new H.j_(C.r,w,[x,z]),v,null)
return y}}},
m9:{"^":"m:28;",
$1:function(a){return"TEMPLATE::"+H.j(H.H(a))}},
m7:{"^":"b;",
aP:function(a){var z=J.M(a)
if(!!z.$iseX)return!1
z=!!z.$iscG
if(z&&W.bH(a)==="foreignObject")return!1
if(z)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.b.a3(b,"on"))return!1
return this.aP(a)},
$isaG:1},
eu:{"^":"b;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dX(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
aG:{"^":"b;"},
lT:{"^":"b;a,b",$isp7:1},
h8:{"^":"b;a",
cQ:function(a){new W.mH(this).$2(a,null)},
b_:function(a,b){if(b==null)J.e_(a)
else b.removeChild(a)},
h2:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hF(a)
x=y.gd6().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ab(t)}v="element unprintable"
try{v=J.ac(a)}catch(t){H.ab(t)}try{u=W.bH(a)
this.h1(H.e(a,"$isU"),b,z,v,u,H.e(y,"$isK"),H.H(x))}catch(t){if(H.ab(t) instanceof P.aD)throw t
else{this.b_(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
h1:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b_(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aP(a)){this.b_(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aC(a,"is",g)){this.b_(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga6(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.ga6(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aC(a,J.hL(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.M(a).$isf6)this.cQ(a.content)},
$isoC:1},
mH:{"^":"m:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.h2(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b_(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hG(z)}catch(w){H.ab(w)
v=H.e(z,"$isG")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isG")}}},
l9:{"^":"t+i2;"},
lb:{"^":"t+z;"},
lc:{"^":"lb+D;"},
ld:{"^":"t+z;"},
le:{"^":"ld+D;"},
lj:{"^":"t+z;"},
lk:{"^":"lj+D;"},
lw:{"^":"t+z;"},
lx:{"^":"lw+D;"},
lD:{"^":"t+ah;"},
lE:{"^":"t+ah;"},
lF:{"^":"t+z;"},
lG:{"^":"lF+D;"},
lH:{"^":"t+z;"},
lI:{"^":"lH+D;"},
lL:{"^":"t+z;"},
lM:{"^":"lL+D;"},
lS:{"^":"t+ah;"},
fU:{"^":"ae+z;"},
fV:{"^":"fU+D;"},
lY:{"^":"t+z;"},
lZ:{"^":"lY+D;"},
m1:{"^":"t+ah;"},
ma:{"^":"t+z;"},
mb:{"^":"ma+D;"},
fY:{"^":"ae+z;"},
fZ:{"^":"fY+D;"},
mg:{"^":"t+z;"},
mh:{"^":"mg+D;"},
mJ:{"^":"t+z;"},
mK:{"^":"mJ+D;"},
mL:{"^":"t+z;"},
mM:{"^":"mL+D;"},
mN:{"^":"t+z;"},
mO:{"^":"mN+D;"},
mP:{"^":"t+z;"},
mQ:{"^":"mP+D;"},
mR:{"^":"t+z;"},
mS:{"^":"mR+D;"}}],["","",,P,{"^":"",
b0:function(a){var z,y,x,w,v
if(a==null)return
z=P.de(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.H(y[w])
z.p(0,v,a[v])}return z},
n9:function(a,b){var z={}
a.J(0,new P.na(z))
return z},
eo:function(){var z=$.en
if(z==null){z=J.cY(window.navigator.userAgent,"Opera",0)
$.en=z}return z},
i8:function(){var z,y
z=$.ek
if(z!=null)return z
y=$.el
if(y==null){y=J.cY(window.navigator.userAgent,"Firefox",0)
$.el=y}if(y)z="-moz-"
else{y=$.em
if(y==null){y=!P.eo()&&J.cY(window.navigator.userAgent,"Trident/",0)
$.em=y}if(y)z="-ms-"
else z=P.eo()?"-o-":"-webkit-"}$.ek=z
return z},
m4:{"^":"b;",
dY:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cM:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.M(a)
if(!!y.$isaF)return new Date(a.a)
if(!!y.$isjF)throw H.a(P.ch("structured clone of RegExp"))
if(!!y.$isb4)return a
if(!!y.$isd_)return a
if(!!y.$iset)return a
if(!!y.$isew)return a
if(!!y.$iseM||!!y.$isdk)return a
if(!!y.$isK){x=this.dY(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.J(a,new P.m6(z,this))
return z.a}if(!!y.$isd){x=this.dY(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.hQ(a,x)}throw H.a(P.ch("structured clone of other type"))},
hQ:function(a,b){var z,y,x,w
z=J.aK(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.cM(z.j(a,w)))
return x}},
m6:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cM(b)}},
na:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
m5:{"^":"m4;a,b"},
io:{"^":"cA;a,b",
gbo:function(){var z,y,x
z=this.b
y=H.al(z,"z",0)
x=W.U
return new H.iY(new H.dA(z,H.l(new P.ip(),{func:1,ret:P.S,args:[y]}),[y]),H.l(new P.iq(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isU")
z=this.gbo()
J.hI(z.b.$1(J.cp(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aF:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on filtered list"))},
gm:function(a){return J.ao(this.gbo().a)},
j:function(a,b){var z=this.gbo()
return z.b.$1(J.cp(z.a,b))},
gX:function(a){var z=P.iT(this.gbo(),!1,W.U)
return new J.aw(z,z.length,0,[H.y(z,0)])},
$asz:function(){return[W.U]},
$asi:function(){return[W.U]},
$asd:function(){return[W.U]}},
ip:{"^":"m:24;",
$1:function(a){return!!J.M(H.e(a,"$isG")).$isU}},
iq:{"^":"m:57;",
$1:function(a){return H.k(H.e(a,"$isG"),"$isU")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ly:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lN:{"^":"b;$ti",
gbd:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.A(z+this.c,H.y(this,0))},
gcg:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c1(b,"$isad",[P.a5],"$asad")
if(!z)return!1
z=this.a
y=J.aC(b)
x=y.gaR(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbh(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gbd(b)){if(typeof x!=="number")return x.E()
z=H.A(x+this.d,w)===y.gcg(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.c5(z)
x=this.b
w=J.c5(x)
if(typeof z!=="number")return z.E()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.A(x+this.d,v)
return P.ly(P.cM(P.cM(P.cM(P.cM(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ad:{"^":"lN;aR:a>,bh:b>,ax:c>,at:d>,$ti",t:{
jC:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.P()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.P()
if(d<0)y=-d*0
else y=d
return new P.ad(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bM:{"^":"t;",$isbM:1,"%":"SVGLength"},on:{"^":"lA;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbM")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asD:function(){return[P.bM]},
"%":"SVGLengthList"},bN:{"^":"t;",$isbN:1,"%":"SVGNumber"},oD:{"^":"lK;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbN")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bN]},
$isi:1,
$asi:function(){return[P.bN]},
$isd:1,
$asd:function(){return[P.bN]},
$asD:function(){return[P.bN]},
"%":"SVGNumberList"},oJ:{"^":"t;0m:length=","%":"SVGPointList"},eX:{"^":"cG;0a1:type}",$iseX:1,"%":"SVGScriptElement"},oU:{"^":"m3;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asz:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asD:function(){return[P.h]},
"%":"SVGStringList"},oX:{"^":"cG;0a1:type}","%":"SVGStyleElement"},cG:{"^":"U;",
gcl:function(a){return new P.io(a,new W.au(a))},
aj:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aG])
C.a.h(z,W.fM(null))
C.a.h(z,W.fX())
C.a.h(z,new W.m7())
c=new W.h8(new W.eN(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).hR(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.au(w)
u=z.gaH(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscG:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bR:{"^":"t;",$isbR:1,"%":"SVGTransform"},p5:{"^":"mj;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbR")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asz:function(){return[P.bR]},
$isi:1,
$asi:function(){return[P.bR]},
$isd:1,
$asd:function(){return[P.bR]},
$asD:function(){return[P.bR]},
"%":"SVGTransformList"},lz:{"^":"t+z;"},lA:{"^":"lz+D;"},lJ:{"^":"t+z;"},lK:{"^":"lJ+D;"},m2:{"^":"t+z;"},m3:{"^":"m2+D;"},mi:{"^":"t+z;"},mj:{"^":"mi+D;"}}],["","",,P,{"^":"",Q:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}}}],["","",,P,{"^":"",nZ:{"^":"t;0m:length=","%":"AudioBuffer"},e3:{"^":"ae;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},o_:{"^":"l7;",
j:function(a,b){return P.b0(a.get(H.H(b)))},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.J(a,new P.hN(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asah:function(){return[P.h,null]},
$isK:1,
$asK:function(){return[P.h,null]},
"%":"AudioParamMap"},hN:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},hO:{"^":"e3;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},o0:{"^":"ae;0m:length=","%":"AudioTrackList"},hR:{"^":"ae;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},o1:{"^":"e3;0a1:type}","%":"BiquadFilterNode"},oG:{"^":"hR;0m:length=","%":"OfflineAudioContext"},oH:{"^":"hO;0a1:type}","%":"Oscillator|OscillatorNode"},l7:{"^":"t+ah;"}}],["","",,P,{"^":"",eW:{"^":"t;",$iseW:1,"%":"WebGLRenderingContext"},kr:{"^":"t;",$iskr:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oS:{"^":"m0;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return P.b0(a.item(b))},
p:function(a,b,c){H.F(b)
H.e(c,"$isK")
throw H.a(P.E("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asz:function(){return[[P.K,,,]]},
$isi:1,
$asi:function(){return[[P.K,,,]]},
$isd:1,
$asd:function(){return[[P.K,,,]]},
$asD:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},m_:{"^":"t+z;"},m0:{"^":"m_+D;"}}],["","",,O,{"^":"",aL:{"^":"b;0a,0b,0c,0d,$ti",
bU:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cR:function(a,b,c){var z=H.al(this,"aL",0)
H.l(b,{func:1,ret:P.S,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bk:function(a,b){return this.cR(a,null,b)},
fN:function(a){var z
H.u(a,"$isi",[H.al(this,"aL",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fp:function(a,b){var z
H.u(b,"$isi",[H.al(this,"aL",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.y(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.al(this,"aL",0)
H.A(b,z)
z=[z]
if(this.fN(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fp(x,H.c([b],z))}},
$isi:1,
t:{
d3:function(a){var z=new O.aL([a])
z.bU(a)
return z}}},di:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.V()
this.b=z}return z},
eU:function(a){var z=this.b
if(!(z==null))z.I(a)},
aI:function(){return this.eU(null)},
gZ:function(a){var z=this.a
if(z.length>0)return C.a.gau(z)
else return V.ce()},
ek:function(a){var z=this.a
if(a==null)C.a.h(z,V.ce())
else C.a.h(z,a)
this.aI()},
cC:function(){var z=this.a
if(z.length>0){z.pop()
this.aI()}}}}],["","",,E,{"^":"",cZ:{"^":"b;"},aO:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cY:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
if(y.f==null)y.cY()}},
sa8:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().K(0,this.gef())
y=this.c
if(y!=null)y.gB().h(0,this.gef())
x=new D.P("shape",z,this.c,this,[F.eZ])
x.b=!0
this.a7(x)}},
sbe:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gB().K(0,this.geg())
y=this.f
this.f=a
if(a!=null)a.gB().h(0,this.geg())
this.cY()
x=new D.P("technique",y,this.f,this,[O.cH])
x.b=!0
this.a7(x)}},
saT:function(a){var z,y
if(!J.R(this.r,a)){z=this.r
if(z!=null)z.gB().K(0,this.gee())
if(a!=null)a.gB().h(0,this.gee())
this.r=a
y=new D.P("mover",z,a,this,[U.am])
y.b=!0
this.a7(y)}},
aw:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aX(0,b,this):null
if(!J.R(y,this.x)){x=this.x
this.x=y
w=new D.P("matrix",x,y,this,[V.ax])
w.b=!0
this.a7(w)}z=this.f
if(z!=null)z.aw(0,b)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aw(0,b)},
aU:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gZ(z))
else C.a.h(z.a,y.k(0,z.gZ(z)))
z.aI()
a.el(this.f)
z=a.dy
x=(z&&C.a).gau(z)
if(x!=null&&this.d!=null)x.iF(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aU(a)
a.ej()
a.dx.cC()},
gB:function(){var z=this.z
if(z==null){z=D.V()
this.z=z}return z},
a7:function(a){var z=this.z
if(!(z==null))z.I(a)},
Y:function(){return this.a7(null)},
ip:[function(a){H.e(a,"$isC")
this.e=null
this.a7(a)},function(){return this.ip(null)},"jC","$1","$0","gef",0,2,1],
iq:[function(a){this.a7(H.e(a,"$isC"))},function(){return this.iq(null)},"jD","$1","$0","geg",0,2,1],
io:[function(a){this.a7(H.e(a,"$isC"))},function(){return this.io(null)},"jB","$1","$0","gee",0,2,1],
il:[function(a){this.a7(H.e(a,"$isC"))},function(){return this.il(null)},"jz","$1","$0","ged",0,2,1],
jy:[function(a,b){var z,y,x,w,v,u,t,s
H.u(b,"$isi",[E.aO],"$asi")
for(z=b.length,y=this.ged(),x={func:1,ret:-1,args:[D.C]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bf()
t.d=0
u.sa4(t)}t=u.ga4()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.Y()},"$2","gik",8,0,11],
jA:[function(a,b){var z,y,x,w,v
H.u(b,"$isi",[E.aO],"$asi")
for(z=b.length,y=this.ged(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.ga4()==null){v=new D.bf()
v.d=0
w.sa4(v)}w.ga4().K(0,y)}}this.Y()},"$2","gim",8,0,11],
$isaR:1,
t:{
d5:function(a,b,c,d,e,f){var z,y
z=new E.aO()
z.a=d
z.b=!0
y=O.d3(E.aO)
z.y=y
y.bk(z.gik(),z.gim())
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
z.sbe(f)
z.saT(c)
return z}}},jH:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eQ:function(a,b){var z,y
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
z=new O.di()
y=[V.ax]
z.a=H.c([],y)
z.gB().h(0,new E.jJ(this))
this.cy=z
z=new O.di()
z.a=H.c([],y)
z.gB().h(0,new E.jK(this))
this.db=z
z=new O.di()
z.a=H.c([],y)
z.gB().h(0,new E.jL(this))
this.dx=z
z=H.c([],[O.cH])
this.dy=z
C.a.h(z,null)
this.fr=new H.b5(0,0,[P.h,A.eY])},
giA:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gZ(z)
y=this.db
y=z.k(0,y.gZ(y))
this.z=y
z=y}return z},
el:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gau(z):a;(z&&C.a).h(z,y)},
ej:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
jI:function(a,b){var z=new E.jH(a,b)
z.eQ(a,b)
return z}}},jJ:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.z=null
z.ch=null}},jK:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jL:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.ch=null
z.cx=null}},kb:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.x
if(z==null){z=D.V()
this.x=z}return z},
eW:[function(a){var z
H.e(a,"$isC")
z=this.x
if(!(z==null))z.I(a)
this.iI()},function(){return this.eW(null)},"eV","$1","$0","gcU",0,2,1],
gi3:function(){var z,y,x
z=Date.now()
y=C.e.a5(P.ep(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aF(z,!1)
return x/y},
df:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.p(z)
x=C.d.dZ(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.dZ(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.f9(C.q,this.giH())},
iI:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kd(this),{func:1,ret:-1,args:[P.a5]})
C.H.fg(z)
C.H.fY(z,W.hf(y,P.a5))}},"$0","giH",0,0,3],
iE:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.df()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aF(w,!1)
x.y=P.ep(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aI()
w=x.db
C.a.sm(w.a,0)
w.aI()
w=x.dx
C.a.sm(w.a,0)
w.aI()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aU(this.e)}x=this.z
if(!(x==null))x.I(null)}catch(v){z=H.ab(v)
y=H.bD(v)
P.dT("Error: "+H.j(z))
P.dT("Stack: "+H.j(y))
throw H.a(z)}},
t:{
kc:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$isd2)return E.f8(a,!0,!0,!0,!1)
y=W.ec(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcl(a).h(0,y)
w=E.f8(y,!0,!0,!0,!1)
w.a=a
return w},
f8:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kb()
y=P.iP(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.cO(a,"webgl",y)
x=H.e(x==null?C.l.cO(a,"experimental-webgl",y):x,"$iseW")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jI(x,a)
w=new T.k7(x)
w.b=H.F(x.getParameter(3379))
w.c=H.F(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kE(a)
v=new X.iH()
v.c=new X.b6(!1,!1,!1)
v.d=P.cd(null,null,null,P.n)
w.b=v
v=new X.jb(w)
v.f=0
v.r=new V.Z(0,0)
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iV(w)
v.r=0
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kg(w)
v.e=0
v.f=new V.Z(0,0)
v.r=new V.Z(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.f2,P.b]])
w.z=v
u=document
t=W.ay
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a7(u,"contextmenu",H.l(w.gfA(),s),!1,t))
v=w.z
r=W.ag
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a7(a,"focus",H.l(w.gfD(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a7(a,"blur",H.l(w.gfu(),q),!1,r))
v=w.z
p=W.bL
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a7(u,"keyup",H.l(w.gfF(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a7(u,"keydown",H.l(w.gfE(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a7(a,"mousedown",H.l(w.gfI(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a7(a,"mouseup",H.l(w.gfK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a7(a,"mousemove",H.l(w.gfJ(),s),!1,t))
p=w.z
o=W.bU;(p&&C.a).h(p,W.a7(a,H.H(W.ig(a)),H.l(w.gfL(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a7(u,"mousemove",H.l(w.gfB(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a7(u,"mouseup",H.l(w.gfC(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a7(u,"pointerlockchange",H.l(w.gfM(),q),!1,r))
r=w.z
q=W.bu
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a7(a,"touchstart",H.l(w.gfT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a7(a,"touchend",H.l(w.gfR(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a7(a,"touchmove",H.l(w.gfS(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aF(Date.now(),!1)
z.cy=0
z.df()
return z}}},kd:{"^":"m:35;a",
$1:function(a){var z
H.nJ(a)
z=this.a
if(z.ch){z.ch=!1
z.iE()}}}}],["","",,Z,{"^":"",fG:{"^":"b;a,b",t:{
dz:function(a,b,c){var z
H.u(c,"$isd",[P.n],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.by(c)),35044)
a.bindBuffer(b,null)
return new Z.fG(b,z)}}},e8:{"^":"cZ;a,b,c,d,e",
bs:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.v('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.j(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},kZ:{"^":"b;a",$iso2:1},e9:{"^":"b;a,0b,c,d",
aQ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bs:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bs(a)},
es:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aU:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.f(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.n(y,", ")+"\nAttrs:   "+C.a.n(u,", ")},
$isp_:1},cx:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bl(this.c)+"'")+"]"}},bv:{"^":"b;a",
gcS:function(a){var z,y
z=this.a
y=(z&$.$get$aX().a)!==0?3:0
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$aY().a)!==0)y+=2
if((z&$.$get$aZ().a)!==0)y+=3
if((z&$.$get$bS().a)!==0)y+=3
if((z&$.$get$bT().a)!==0)y+=4
if((z&$.$get$bw().a)!==0)++y
return(z&$.$get$aU().a)!==0?y+4:y},
hH:function(a){var z,y,x
z=$.$get$aX()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fF()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bv))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aX().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bS().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bT().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
t:{
at:function(a){return new Z.bv(a)}}}}],["","",,D,{"^":"",ed:{"^":"b;"},bf:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.C]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.C]})
z=this.a
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).K(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).K(z,b)||y}return y},
I:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.C(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.J(y,new D.ik(z))
y=this.b
if(!(y==null))C.a.J(y,new D.il(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
iJ:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.I(y)}}},
al:function(a){return this.iJ(a,!0,!1)},
t:{
V:function(){var z=new D.bf()
z.d=0
return z}}},ik:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},il:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},C:{"^":"b;a,0b"},cy:{"^":"C;c,d,a,0b,$ti"},cz:{"^":"C;c,d,a,0b,$ti"},P:{"^":"C;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ea:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ea))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
t:{"^":"o4<"}},eB:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eB))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eC:{"^":"C;c,a,0b"},iH:{"^":"b;0a,0b,0c,0d",
iw:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eC(a,this)
y.b=!0
return z.I(y)},
is:function(a){var z,y
this.c=a.b
this.d.K(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eC(a,this)
y.b=!0
return z.I(y)}},eF:{"^":"dn;x,y,c,d,e,a,0b"},iV:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aA:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aF(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.Z(y.a+x*w,y.b+v*u)
u=this.a.gbu()
s=new X.cf(a,new V.Z(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cB:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.I(this.aA(a,b))
return!0},
bc:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eE()
if(typeof z!=="number")return z.bP()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.aA(a,b))
return!0},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.aA(a,b))
return!0},
ix:function(a){return!1},
fH:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aF(Date.now(),!1)
y=this.f
x=new X.eF(c,a,this.a.gbu(),b,z,this)
x.b=!0
y.I(x)
this.y=z
this.x=new V.Z(0,0)}},b6:{"^":"b;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b6))return!1
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
return z+(this.c?"Shift+":"")}},cf:{"^":"dn;x,y,z,Q,ch,c,d,e,a,0b"},jb:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c0:function(a,b,c){var z,y,x
z=new P.aF(Date.now(),!1)
y=this.a.gbu()
x=new X.cf(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cB:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.I(this.c0(a,b,!0))
return!0},
bc:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eE()
if(typeof z!=="number")return z.bP()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.c0(a,b,!0))
return!0},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.c0(a,b,!1))
return!0},
iy:function(a,b){return!1}},dn:{"^":"C;"},fd:{"^":"dn;x,y,z,Q,ch,c,d,e,a,0b"},kg:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aA:function(a,b){var z,y,x,w
H.u(a,"$isd",[V.Z],"$asd")
z=new P.aF(Date.now(),!1)
y=a.length>0?a[0]:new V.Z(0,0)
x=this.a.gbu()
w=new X.fd(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iv:function(a){var z
H.u(a,"$isd",[V.Z],"$asd")
z=this.b
if(z==null)return!1
z.I(this.aA(a,!0))
return!0},
it:function(a){var z
H.u(a,"$isd",[V.Z],"$asd")
z=this.c
if(z==null)return!1
z.I(this.aA(a,!0))
return!0},
iu:function(a){var z
H.u(a,"$isd",[V.Z],"$asd")
z=this.d
if(z==null)return!1
z.I(this.aA(a,!1))
return!0}},kE:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbu:function(){var z=this.a
return V.eV(0,0,(z&&C.l).gdB(z).c,C.l.gdB(z).d)},
d4:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eB(z,new X.b6(y,a.altKey,a.shiftKey))},
aN:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b6(y,a.altKey,a.shiftKey)},
cb:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b6(y,a.altKey,a.shiftKey)},
aB:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=z.top
if(typeof x!=="number")return x.S()
return new V.Z(y-w,x-v)},
aZ:function(a){return new V.a9(a.movementX,a.movementY)},
c5:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.Z])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.af(u.pageX)
C.d.af(u.pageY)
s=z.left
C.d.af(u.pageX)
C.a.h(y,new V.Z(t-s,C.d.af(u.pageY)-z.top))}return y},
ay:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ea(z,new X.b6(y,a.altKey,a.shiftKey))},
c2:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.S()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.S()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jd:[function(a){this.f=!0},"$1","gfD",4,0,9],
j6:[function(a){this.f=!1},"$1","gfu",4,0,9],
ja:[function(a){H.e(a,"$isay")
if(this.f&&this.c2(a))a.preventDefault()},"$1","gfA",4,0,4],
jf:[function(a){var z
H.e(a,"$isbL")
if(!this.f)return
z=this.d4(a)
if(this.b.iw(z))a.preventDefault()},"$1","gfF",4,0,22],
je:[function(a){var z
H.e(a,"$isbL")
if(!this.f)return
z=this.d4(a)
if(this.b.is(z))a.preventDefault()},"$1","gfE",4,0,22],
jh:[function(a){var z,y,x,w
H.e(a,"$isay")
z=this.a
z.focus()
this.f=!0
this.aN(a)
if(this.x){y=this.ay(a)
x=this.aZ(a)
if(this.d.cB(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ay(a)
w=this.aB(a)
if(this.c.cB(y,w))a.preventDefault()},"$1","gfI",4,0,4],
jj:[function(a){var z,y,x
H.e(a,"$isay")
this.aN(a)
z=this.ay(a)
if(this.x){y=this.aZ(a)
if(this.d.bc(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.bc(z,x))a.preventDefault()},"$1","gfK",4,0,4],
jc:[function(a){var z,y,x
H.e(a,"$isay")
if(!this.c2(a)){this.aN(a)
z=this.ay(a)
if(this.x){y=this.aZ(a)
if(this.d.bc(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.bc(z,x))a.preventDefault()}},"$1","gfC",4,0,4],
ji:[function(a){var z,y,x
H.e(a,"$isay")
this.aN(a)
z=this.ay(a)
if(this.x){y=this.aZ(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.bb(z,x))a.preventDefault()},"$1","gfJ",4,0,4],
jb:[function(a){var z,y,x
H.e(a,"$isay")
if(!this.c2(a)){this.aN(a)
z=this.ay(a)
if(this.x){y=this.aZ(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.bb(z,x))a.preventDefault()}},"$1","gfB",4,0,4],
jk:[function(a){var z,y
H.e(a,"$isbU")
this.aN(a)
z=new V.a9((a&&C.G).ghT(a),C.G.ghU(a)).A(0,180)
if(this.x){if(this.d.ix(z))a.preventDefault()
return}if(this.r)return
y=this.aB(a)
if(this.c.iy(z,y))a.preventDefault()},"$1","gfL",4,0,39],
jl:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ay(this.y)
v=this.aB(this.y)
this.d.fH(w,v,x)}},"$1","gfM",4,0,9],
jr:[function(a){var z
H.e(a,"$isbu")
this.a.focus()
this.f=!0
this.cb(a)
z=this.c5(a)
if(this.e.iv(z))a.preventDefault()},"$1","gfT",4,0,13],
jp:[function(a){var z
H.e(a,"$isbu")
this.cb(a)
z=this.c5(a)
if(this.e.it(z))a.preventDefault()},"$1","gfR",4,0,13],
jq:[function(a){var z
H.e(a,"$isbu")
this.cb(a)
z=this.c5(a)
if(this.e.iu(z))a.preventDefault()},"$1","gfS",4,0,13]}}],["","",,D,{"^":"",i9:{"^":"b;",$isa6:1,$isaR:1},a6:{"^":"b;",$isaR:1},iI:{"^":"aL;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.V()
this.Q=z}return z},
aa:function(a){var z=this.Q
if(!(z==null))z.I(a)},
fG:[function(a){var z
H.e(a,"$isC")
z=this.ch
if(!(z==null))z.I(a)},function(){return this.fG(null)},"jg","$1","$0","gdc",0,2,1],
jm:[function(a){var z,y,x
H.u(a,"$isi",[D.a6],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.eY(x))return!1}return!0},"$1","gfO",4,0,41],
j3:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a6
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdc(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.e(b[u],"$isa6")
if(t instanceof D.cF)C.a.h(this.r,t)
s=t.z
if(s==null){s=new D.bf()
s.d=0
t.z=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cy(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gfq",8,0,18],
jo:[function(a,b){var z,y,x,w,v,u
z=D.a6
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdc(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.e(b[w],"$isa6")
if(v instanceof D.cF)C.a.K(this.r,v)
u=v.z
if(u==null){u=new D.bf()
u.d=0
v.z=u}u.K(0,x)}z=new D.cz(a,b,this,[z])
z.b=!0
this.aa(z)},"$2","gfQ",8,0,18],
eY:function(a){var z=C.a.V(this.r,a)
return z},
$asi:function(){return[D.a6]},
$asaL:function(){return[D.a6]}},jn:{"^":"b;",$isa6:1,$isaR:1},cF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gB:function(){var z=this.z
if(z==null){z=D.V()
this.z=z}return z},
aa:[function(a){var z
H.e(a,"$isC")
z=this.z
if(!(z==null))z.I(a)},function(){return this.aa(null)},"j7","$1","$0","gfv",0,2,1],
$isa6:1,
$isaR:1},k8:{"^":"b;",$isa6:1,$isaR:1},k9:{"^":"b;",$isa6:1,$isaR:1},ka:{"^":"b;",$isa6:1,$isaR:1}}],["","",,V,{"^":"",
o6:[function(a,b){if(typeof b!=="number")return b.S()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","j8",8,0,37],
nV:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bj(a-b,z)
return(a<0?a+z:a)+b},
T:function(a,b,c){if(a==null)return C.b.ae("null",c)
return C.b.ae(C.d.eq($.o.$2(a,0)?0:a,b),c+b+1)},
bC:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$isd",[P.q],"$asd")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.T(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.b.ae(z[u],x))}return z},
a3:{"^":"b;a,b,c",
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
return new V.a3(z,y,x)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}},
bb:{"^":"b;a,b,c,d",
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
return new V.bb(z,y,x,w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bb))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}},
cC:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscC")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.d.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.d.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.d.k(t,s)
q=a5.b
p=C.d.k(z,q)
o=a5.e
n=C.d.k(w,o)
m=a5.x
l=C.d.k(t,m)
k=a5.c
z=C.d.k(z,k)
j=a5.f
w=C.d.k(w,j)
i=a5.y
t=C.d.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.d.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.d.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.d.k(d,s)
b=C.d.k(h,q)
a=C.d.k(f,o)
a0=C.d.k(d,m)
h=C.d.k(h,k)
f=C.d.k(f,j)
d=C.d.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.d.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.d.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cC(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cC))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.q]
y=V.bC(H.c([this.a,this.d,this.r],z),3,0)
x=V.bC(H.c([this.b,this.e,this.x],z),3,0)
w=V.bC(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.f(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.f(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.f(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.f(y,1)
s=" "+y[1]+", "
if(1>=u)return H.f(x,1)
s=s+x[1]+", "
if(1>=t)return H.f(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.f(y,2)
z=" "+y[2]+", "
if(2>=u)return H.f(x,2)
z=z+x[2]+", "
if(2>=t)return H.f(w,2)
return s+(z+w[2]+"]")}},
ax:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ag:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
e7:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.o.$2(a2,0))return V.ce()
a3=1/a2
a4=-w
a5=-i
return V.aQ((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isax")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
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
return V.aQ(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.I(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.a1(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ax))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
z=b.z
if(!$.o.$2(z,this.z))return!1
z=b.Q
if(!$.o.$2(z,this.Q))return!1
z=b.ch
if(!$.o.$2(z,this.ch))return!1
z=b.cx
if(!$.o.$2(z,this.cx))return!1
z=b.cy
if(!$.o.$2(z,this.cy))return!1
z=b.db
if(!$.o.$2(z,this.db))return!1
z=b.dx
if(!$.o.$2(z,this.dx))return!1
return!0},
i:function(a){return this.N()},
e_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bC(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bC(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bC(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bC(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.f(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.f(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.f(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.f(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.f(y,1)
q=q+y[1]+", "
if(1>=t)return H.f(x,1)
q=q+x[1]+", "
if(1>=s)return H.f(w,1)
q=q+w[1]+", "
if(1>=r)return H.f(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.f(y,2)
u=u+y[2]+", "
if(2>=t)return H.f(x,2)
u=u+x[2]+", "
if(2>=s)return H.f(w,2)
u=u+w[2]+", "
if(2>=r)return H.f(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.f(y,3)
q=q+y[3]+", "
if(3>=t)return H.f(x,3)
q=q+x[3]+", "
if(3>=s)return H.f(w,3)
q=q+w[3]+", "
if(3>=r)return H.f(v,3)
return u+(q+v[3]+"]")},
N:function(){return this.e_("",3,0)},
C:function(a){return this.e_(a,3,0)},
t:{
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ce:function(){return V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eL:function(a,b,c){return V.aQ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eK:function(a,b,c,d){return V.aQ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eJ:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aQ(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
Z:{"^":"b;a,b",
S:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.Z(this.a*b,this.b*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}},
a1:{"^":"b;a,b,c",
E:function(a,b){return new V.a1(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a1(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}},
bO:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bO(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}},
eU:{"^":"b;a,b,c,d",
gav:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eU))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"},
t:{
eV:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eU(a,b,c,d)}}},
a9:{"^":"b;a,b",
ib:[function(a){return Math.sqrt(this.G(this))},"$0","gm",1,0,17],
G:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.a9(z*b,y*b)},
A:function(a,b){var z,y
if($.o.$2(b,0))return new V.a9(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.a9(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}},
I:{"^":"b;a,b,c",
ib:[function(a){return Math.sqrt(this.G(this))},"$0","gm",1,0,17],
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cA:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.I(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aD:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.I(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.I(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.I(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.o.$2(b,0))return new V.I(0,0,0)
return new V.I(this.a/b,this.b/b,this.c/b)},
e8:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hY:{"^":"ed;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bV:function(a){var z=V.nV(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.V()
this.y=z}return z},
a0:function(a){var z=this.y
if(!(z==null))z.I(a)},
sew:function(a,b){},
se9:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bV(z)}z=new D.P("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.a0(z)}},
seb:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bV(z)}z=new D.P("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.a0(z)}},
sa2:function(a,b){var z,y
b=this.bV(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.P("location",y,b,this,[P.q])
z.b=!0
this.a0(z)}},
sea:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.P("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.a0(z)}},
sa_:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.P("velocity",x,a,this,[P.q])
z.b=!0
this.a0(z)}},
sdC:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.P("dampening",y,a,this,[P.q])
z.b=!0
this.a0(z)}},
aw:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sa_(y)}},
t:{
ef:function(){var z=new U.hY()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},eg:{"^":"am;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.V()
this.b=z}return z},
aX:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eg))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
t:{
c7:function(a){var z=new U.eg()
z.a=a
return z}}},ev:{"^":"aL;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.V()
this.e=z}return z},
a0:[function(a){var z
H.e(a,"$isC")
z=this.e
if(!(z==null))z.I(a)},function(){return this.a0(null)},"aJ","$1","$0","gbm",0,2,1],
iU:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.am
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gbm(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gB()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cy(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","geZ",8,0,16],
jn:[function(a,b){var z,y,x,w,v
z=U.am
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gbm(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gB().K(0,x)}z=new D.cz(a,b,this,[z])
z.b=!0
this.a0(z)},"$2","gfP",8,0,16],
aX:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aw(z,z.length,0,[H.y(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aX(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.ce():x
z=this.e
if(!(z==null))z.al(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ev))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.R(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.am]},
$asaL:function(){return[U.am]},
$isam:1,
t:{
d6:function(a){var z=new U.ev()
z.bU(U.am)
z.bk(z.geZ(),z.gfP())
z.e=null
z.f=V.ce()
z.r=0
return z}}},am:{"^":"ed;"},kF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.V()
this.fx=z}return z},
a0:[function(a){var z
H.e(a,"$isC")
z=this.fx
if(!(z==null))z.I(a)},function(){return this.a0(null)},"aJ","$1","$0","gbm",0,2,1],
hI:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.V()
z.b=y
z=y}else z=y
z.h(0,this.gfm())
z=this.a.c
y=z.d
if(y==null){y=D.V()
z.d=y
z=y}else z=y
z.h(0,this.gfn())
z=this.a.c
y=z.c
if(y==null){y=D.V()
z.c=y
z=y}else z=y
z.h(0,this.gfo())
z=this.a.d
y=z.f
if(y==null){y=D.V()
z.f=y
z=y}else z=y
z.h(0,this.gfj())
z=this.a.d
y=z.d
if(y==null){y=D.V()
z.d=y
z=y}else z=y
z.h(0,this.gfk())
z=this.a.e
y=z.b
if(y==null){y=D.V()
z.b=y
z=y}else z=y
z.h(0,this.ghc())
z=this.a.e
y=z.d
if(y==null){y=D.V()
z.d=y
z=y}else z=y
z.h(0,this.ghb())
z=this.a.e
y=z.c
if(y==null){y=D.V()
z.c=y
z=y}else z=y
z.h(0,this.gha())
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.R()
z=-z}if(this.r){if(typeof y!=="number")return y.R()
y=-y}return new V.a9(z,y)},
j0:[function(a){a=H.k(H.e(a,"$isC"),"$iscf")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfm",4,0,2],
j1:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$iscf")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a9(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.ap(new V.a9(y.a,y.b).k(0,2).A(0,z.gav()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sa_(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sa_(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ap(new V.a9(x.a,x.b).k(0,2).A(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sa_(0)
this.c.sa_(0)
y=y.S(0,a.z)
this.dx=this.ap(new V.a9(y.a,y.b).k(0,2).A(0,z.gav()))}this.aJ()},"$1","gfn",4,0,2],
j2:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sa_(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sa_(-y*10*z)
this.aJ()}},"$1","gfo",4,0,2],
iZ:[function(a){if(H.k(H.e(a,"$isC"),"$iseF").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfj",4,0,2],
j_:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$iscf")
if(!J.R(this.d,a.x.b))return
z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ap(new V.a9(x.a,x.b).k(0,2).A(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sa_(0)
this.c.sa_(0)
y=y.S(0,a.z)
this.dx=this.ap(new V.a9(y.a,y.b).k(0,2).A(0,z.gav()))
this.aJ()},"$1","gfk",4,0,2],
jv:[function(a){H.e(a,"$isC")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghc",4,0,2],
ju:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isfd")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a9(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.ap(new V.a9(y.a,y.b).k(0,2).A(0,z.gav()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sa_(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sa_(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ap(new V.a9(x.a,x.b).k(0,2).A(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sa_(0)
this.c.sa_(0)
y=y.S(0,a.z)
this.dx=this.ap(new V.a9(y.a,y.b).k(0,2).A(0,z.gav()))}this.aJ()},"$1","ghb",4,0,2],
jt:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sa_(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sa_(-y*10*z)
this.aJ()}},"$1","gha",4,0,2],
aX:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.dy=y
x=b.y
this.c.aw(0,x)
this.b.aw(0,x)
z=V.eJ(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aQ(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isam:1,
t:{
fB:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.kF()
y=U.ef()
y.sew(0,!0)
y.se9(6.283185307179586)
y.seb(0)
y.sa2(0,0)
y.sea(100)
y.sa_(0)
y.sdC(0.5)
z.b=y
x=z.gbm()
y.gB().h(0,x)
y=U.ef()
y.sew(0,!0)
y.se9(6.283185307179586)
y.seb(0)
y.sa2(0,0)
y.sea(100)
y.sa_(0)
y.sdC(0.5)
z.c=y
y.gB().h(0,x)
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
w=new X.b6(b,!1,!1)
v=z.d
z.d=w
y=new D.P("modifiers",v,w,z,[X.b6])
y.b=!0
z.a0(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.P("invertX",y,!1,z,[P.S])
y.b=!0
z.a0(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.P("invertY",y,!1,z,[P.S])
y.b=!0
z.a0(y)}z.hI(c)
return z}}}}],["","",,M,{"^":"",ii:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aK:[function(a){var z
H.e(a,"$isC")
z=this.x
if(!(z==null))z.I(a)},function(){return this.aK(null)},"iV","$1","$0","gao",0,2,1],
j8:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aO
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gao(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga4()==null){s=new D.bf()
s.d=0
t.sa4(s)}s=t.ga4()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cy(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfw",8,0,11],
j9:[function(a,b){var z,y,x,w,v,u
z=E.aO
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gao(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.ga4()==null){u=new D.bf()
u.d=0
v.sa4(u)}v.ga4().K(0,x)}}z=new D.cz(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfz",8,0,11],
sbe:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().K(0,this.gao())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gao())
z=new D.P("technique",y,this.c,this,[O.cH])
z.b=!0
this.aK(z)}},
gB:function(){var z=this.x
if(z==null){z=D.V()
this.x=z}return z},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.el(this.c)
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
u=C.d.af(v.a*x)
if(typeof w!=="number")return H.p(w)
t=C.d.af(v.b*w)
s=C.d.af(v.c*x)
a.c=s
v=C.d.af(v.d*w)
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
n=V.aQ(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.ek(n)
y=$.eR
if(y==null){y=new V.I(0,0,-1)
m=y.A(0,Math.sqrt(y.G(y)))
y=new V.I(0,1,0).aD(m)
l=y.A(0,Math.sqrt(y.G(y)))
k=m.aD(l)
j=new V.I(0,0,0)
y=V.aQ(l.a,k.a,m.a,l.R(0).G(j),l.b,k.b,m.b,k.R(0).G(j),l.c,k.c,m.c,m.R(0).G(j),0,0,0,1)
$.eR=y
i=y}else i=y
y=z.b
if(y!=null){h=y.aX(0,a,z)
if(h!=null)i=h.k(0,i)}a.db.ek(i)
z=this.c
if(z!=null)z.aw(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aw(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aU(a)
this.a.toString
a.cy.cC()
a.db.cC()
this.b.toString
a.ej()},
$isoM:1}}],["","",,A,{"^":"",e2:{"^":"b;a,b,c"},hM:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hW:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hV:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},j0:{"^":"eY;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0as,0ak,0bx,0dD,0by,0bz,0dE,0dF,0bA,0bB,0dG,0dH,0bC,0bD,0dI,0dJ,0bE,0dK,0dL,0bF,0dM,0dN,0bG,0bH,0bI,0dO,0dP,0bJ,0bK,0dQ,0dR,0bL,0dS,0cp,0dT,0cq,0dU,0cr,0dV,0cs,0dW,0ct,0dX,0cu,a,b,0c,0d,0e,0f,0r,0x,0y",
eP:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
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
a2.hf(z)
a2.hm(z)
a2.hg(z)
a2.hu(z)
a2.hv(z)
a2.ho(z)
a2.hz(z)
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
z=new P.an("")
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
x.hj(z)
x.he(z)
x.hh(z)
x.hk(z)
x.hs(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hq(z)
x.hr(z)}x.hn(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
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
p=H.c([],[P.h])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.n(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.hi(z)
x.hp(z)
x.ht(z)
x.hw(z)
x.hx(z)
x.hy(z)
x.hl(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.h])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.c)z.a+="   setDiffuseColor();\n"
if(x.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.c)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.c)C.a.h(o,"emission()")
if(x.r!==C.c)C.a.h(o,"reflect(refl)")
if(x.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.n(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.d5(s,35633)
this.f=this.d5(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dJ(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.r(P.v("Failed to link shader: "+H.j(m)))}this.h5()
this.h7()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$isaT")
if(y)this.dy=H.k(this.y.q(0,"objMat"),"$isaT")
if(w)this.fr=H.k(this.y.q(0,"viewObjMat"),"$isaT")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$isaT")
if(a2.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$isdw")
if(a2.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$isaT")
if(a2.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$isaT")
this.r1=H.c([],[A.aT])
y=a2.as
if(y>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$isO")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaT"))}}y=a2.a
if(y!==C.c){this.r2=H.k(this.y.q(0,"emissionClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.rx=H.k(this.y.q(0,"emissionTxt"),"$isar")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isO")
break
case C.h:this.ry=H.k(this.y.q(0,"emissionTxt"),"$isas")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isO")
break}}y=a2.b
if(y!==C.c){this.x2=H.k(this.y.q(0,"ambientClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.y1=H.k(this.y.q(0,"ambientTxt"),"$isar")
this.as=H.k(this.y.q(0,"nullAmbientTxt"),"$isO")
break
case C.h:this.y2=H.k(this.y.q(0,"ambientTxt"),"$isas")
this.as=H.k(this.y.q(0,"nullAmbientTxt"),"$isO")
break}}y=a2.c
if(y!==C.c){this.ak=H.k(this.y.q(0,"diffuseClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.bx=H.k(this.y.q(0,"diffuseTxt"),"$isar")
this.by=H.k(this.y.q(0,"nullDiffuseTxt"),"$isO")
break
case C.h:this.dD=H.k(this.y.q(0,"diffuseTxt"),"$isas")
this.by=H.k(this.y.q(0,"nullDiffuseTxt"),"$isO")
break}}y=a2.d
if(y!==C.c){this.bz=H.k(this.y.q(0,"invDiffuseClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dE=H.k(this.y.q(0,"invDiffuseTxt"),"$isar")
this.bA=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isO")
break
case C.h:this.dF=H.k(this.y.q(0,"invDiffuseTxt"),"$isas")
this.bA=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a2.e
if(y!==C.c){this.bD=H.k(this.y.q(0,"shininess"),"$isa2")
this.bB=H.k(this.y.q(0,"specularClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dG=H.k(this.y.q(0,"specularTxt"),"$isar")
this.bC=H.k(this.y.q(0,"nullSpecularTxt"),"$isO")
break
case C.h:this.dH=H.k(this.y.q(0,"specularTxt"),"$isas")
this.bC=H.k(this.y.q(0,"nullSpecularTxt"),"$isO")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dI=H.k(this.y.q(0,"bumpTxt"),"$isar")
this.bE=H.k(this.y.q(0,"nullBumpTxt"),"$isO")
break
case C.h:this.dJ=H.k(this.y.q(0,"bumpTxt"),"$isas")
this.bE=H.k(this.y.q(0,"nullBumpTxt"),"$isO")
break}if(a2.dy){this.dK=H.k(this.y.q(0,"envSampler"),"$isas")
this.dL=H.k(this.y.q(0,"nullEnvTxt"),"$isO")
y=a2.r
if(y!==C.c){this.bF=H.k(this.y.q(0,"reflectClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dM=H.k(this.y.q(0,"reflectTxt"),"$isar")
this.bG=H.k(this.y.q(0,"nullReflectTxt"),"$isO")
break
case C.h:this.dN=H.k(this.y.q(0,"reflectTxt"),"$isas")
this.bG=H.k(this.y.q(0,"nullReflectTxt"),"$isO")
break}}y=a2.x
if(y!==C.c){this.bH=H.k(this.y.q(0,"refraction"),"$isa2")
this.bI=H.k(this.y.q(0,"refractClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dO=H.k(this.y.q(0,"refractTxt"),"$isar")
this.bJ=H.k(this.y.q(0,"nullRefractTxt"),"$isO")
break
case C.h:this.dP=H.k(this.y.q(0,"refractTxt"),"$isas")
this.bJ=H.k(this.y.q(0,"nullRefractTxt"),"$isO")
break}}}y=a2.y
if(y!==C.c){this.bK=H.k(this.y.q(0,"alpha"),"$isa2")
switch(y){case C.c:break
case C.i:break
case C.f:this.dQ=H.k(this.y.q(0,"alphaTxt"),"$isar")
this.bL=H.k(this.y.q(0,"nullAlphaTxt"),"$isO")
break
case C.h:this.dR=H.k(this.y.q(0,"alphaTxt"),"$isas")
this.bL=H.k(this.y.q(0,"nullAlphaTxt"),"$isO")
break}}this.cp=H.c([],[A.fq])
this.cq=H.c([],[A.fr])
this.cr=H.c([],[A.fs])
this.cs=H.c([],[A.ft])
this.ct=H.c([],[A.fu])
this.cu=H.c([],[A.fv])
if(a2.k2){y=a2.z
if(y>0){this.dS=H.e(this.y.q(0,"dirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.cp;(x&&C.a).h(x,new A.fq(l,k,j))}}y=a2.Q
if(y>0){this.dT=H.e(this.y.q(0,"pntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa2")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa2")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa2")
x=this.cq;(x&&C.a).h(x,new A.fr(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dU=H.e(this.y.q(0,"spotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa2")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa2")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa2")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa2")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa2")
x=this.cr;(x&&C.a).h(x,new A.fs(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dV=H.e(this.y.q(0,"txtDirLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isN")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isO")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isar")
x=this.cs;(x&&C.a).h(x,new A.ft(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dW=H.e(this.y.q(0,"txtPntLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdw")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isO")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa2")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa2")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa2")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isas")
x=this.ct;(x&&C.a).h(x,new A.fu(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dX=H.e(this.y.q(0,"txtSpotLightCount"),"$isO")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isN")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isN")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isN")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isN")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isN")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isO")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isN")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa2")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa2")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa2")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa2")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isa2")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isar")
x=this.cu;(x&&C.a).h(x,new A.fv(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ai:function(a,b,c){b.a.uniform1i(b.d,1)},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
j1:function(a,b){var z,y
z=a.ak
y=new A.j0(b,z)
y.eS(b,z)
y.eP(a,b)
return y}}},j5:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,as,ak,bx",
hf:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.as+"];\n"
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
hm:function(a){var z
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
hg:function(a){var z
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
hu:function(a){var z,y
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
hv:function(a){var z,y
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
ho:function(a){var z
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
hz:function(a){var z
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
az:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.an(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hj:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.az(a,z,"emission")
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
he:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.az(a,z,"ambient")
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
hh:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.az(a,z,"diffuse")
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
hk:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.az(a,z,"invDiffuse")
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
hs:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.az(a,z,"specular")
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
hn:function(a){var z,y
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
hq:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.az(a,z,"reflect")
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
hr:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.az(a,z,"refract")
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
hi:function(a){var z,y
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
hp:function(a){var z,y
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
ht:function(a){var z,y
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
hw:function(a){var z,y,x
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
hx:function(a){var z,y,x
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
hy:function(a){var z,y,x
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
hl:function(a){var z
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
i:function(a){return this.ak}},fq:{"^":"b;a,b,c"},ft:{"^":"b;a,b,c,d,e,f,r,x"},fr:{"^":"b;a,b,c,d,e,f,r"},fu:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fs:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fv:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eY:{"^":"cZ;",
eS:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d5:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dJ(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
h5:function(){var z,y,x,w,v,u
z=H.c([],[A.e2])
y=this.a
x=H.F(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.e2(y,v.name,u))}this.x=new A.hM(z)},
h7:function(){var z,y,x,w,v,u
z=H.c([],[A.af])
y=this.a
x=H.F(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hS(v.type,v.size,v.name,u))}this.y=new A.kq(z)},
aM:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.O(z,y,b,c)
else return A.dv(z,y,b,a,c)},
fd:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ar(z,y,b,c)
else return A.dv(z,y,b,a,c)},
fe:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.as(z,y,b,c)
else return A.dv(z,y,b,a,c)},
br:function(a,b){return new P.fK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hS:function(a,b,c,d){switch(a){case 5120:return this.aM(b,c,d)
case 5121:return this.aM(b,c,d)
case 5122:return this.aM(b,c,d)
case 5123:return this.aM(b,c,d)
case 5124:return this.aM(b,c,d)
case 5125:return this.aM(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.kl(this.a,this.r,c,d)
case 35665:return new A.N(this.a,this.r,c,d)
case 35666:return new A.ko(this.a,this.r,c,d)
case 35667:return new A.km(this.a,this.r,c,d)
case 35668:return new A.kn(this.a,this.r,c,d)
case 35669:return new A.kp(this.a,this.r,c,d)
case 35674:return new A.ks(this.a,this.r,c,d)
case 35675:return new A.dw(this.a,this.r,c,d)
case 35676:return new A.aT(this.a,this.r,c,d)
case 35678:return this.fd(b,c,d)
case 35680:return this.fe(b,c,d)
case 35670:throw H.a(this.br("BOOL",c))
case 35671:throw H.a(this.br("BOOL_VEC2",c))
case 35672:throw H.a(this.br("BOOL_VEC3",c))
case 35673:throw H.a(this.br("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cu:{"^":"b;a,b",
i:function(a){return this.b}},af:{"^":"b;"},kq:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
i2:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.i2("\n")}},O:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},km:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kn:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kp:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},kk:{"^":"af;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
dv:function(a,b,c,d,e){var z=new A.kk(a,b,c,e)
z.f=d
z.e=P.iS(d,0,!1,P.n)
return z}}},a2:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},kl:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},N:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},ko:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},ks:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dw:{"^":"af;a,b,c,d",
am:function(a){var z=new Float32Array(H.by(H.u(a,"$isd",[P.q],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aT:{"^":"af;a,b,c,d",
am:function(a){var z=new Float32Array(H.by(H.u(a,"$isd",[P.q],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ar:{"^":"af;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},as:{"^":"af;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
dM:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.aj,P.q,P.q]})
z=F.dp()
F.bY(z,b,c,d,a,1,0,0,1)
F.bY(z,b,c,d,a,0,1,0,3)
F.bY(z,b,c,d,a,0,0,1,2)
F.bY(z,b,c,d,a,-1,0,0,0)
F.bY(z,b,c,d,a,0,-1,0,0)
F.bY(z,b,c,d,a,0,0,-1,3)
z.ar()
return z},
cP:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bY:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.aj,P.q,P.q]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.I(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.I(t+h,s+f,r+g)
z.b=q
p=new V.I(t-h,s-f,r-g)
z.c=p
o=new V.I(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cP(y)
k=F.cP(z.b)
j=F.dV(d,e,new F.mT(z,F.cP(z.c),F.cP(z.d),k,l,c),b)
if(j!=null)a.ba(j)},
hk:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.dp()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.aj])
v=z.a
u=new V.I(0,0,y)
u=u.A(0,Math.sqrt(u.G(u)))
C.a.h(w,v.hD(new V.bO(a,-1,-1,-1),new V.bb(1,1,1,1),new V.a1(0,0,d),new V.I(0,0,y),new V.Z(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.I(r,q,y).A(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cj(new V.bO(a,-1,-1,-1),null,new V.bb(n,l,m,1),new V.a1(r*p,q*p,d),new V.I(0,0,y),new V.Z(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hB(w)
return z},
dN:function(a,b,c,d,e,f){return F.nc(b,c,d,new F.nb(a,f),e)},
nc:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dV(c,e,new F.ne(d),null)
if(z==null)return
z.ar()
z.ce()
if(b)z.ba(F.hk(3,!1,!1,1,new F.nf(d),e))
if(a)z.ba(F.hk(1,!0,!1,-1,new F.ng(d),e))
return z},
nP:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.nQ()
y=F.dM(a,null,new F.nR(z,c),d)
y.ce()
return y},
hy:function(a,b,c,d){return F.hj(c,a,d,b,new F.nT())},
nx:function(a,b,c,d,e,f){return F.hj(d,a,e,b,new F.ny(f,c))},
hj:function(a,b,c,d,e){var z=F.dV(a,b,new F.nd(H.l(e,{func:1,ret:V.a1,args:[P.q]}),d,b,c),null)
if(z==null)return
z.ar()
z.ce()
return z},
dV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.aj,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.dp()
y=H.c([],[F.aj])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cj(null,null,new V.bb(u,0,0,1),null,null,new V.Z(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cn(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cj(null,null,new V.bb(o,n,m,1),null,null,new V.Z(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cn(d))}}z.d.hC(a+1,b+1,y)
return z},
mT:{"^":"m:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cA(z.b,b).cA(z.d.cA(z.c,b),c)
a.sa2(0,new V.a1(y.a,y.b,y.c))
a.seo(y.A(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
a.sdz(new V.bO(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nb:{"^":"m:30;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
ne:{"^":"m:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sa2(0,new V.a1(y,u,w))
u=new V.I(y,u,w)
a.seo(u.A(0,Math.sqrt(u.G(u))))
a.sdz(new V.bO(1-c,2+c,-1,-1))}},
nf:{"^":"m:33;a",
$1:function(a){return this.a.$2(a,1)}},
ng:{"^":"m:33;a",
$1:function(a){return this.a.$2(1-a,0)}},
nQ:{"^":"m:30;",
$2:function(a,b){return 0}},
nR:{"^":"m:7;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.I(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.G(x))).k(0,this.b+z)
a.sa2(0,new V.a1(z.a,z.b,z.c))}},
nT:{"^":"m:27;",
$1:function(a){return new V.a1(Math.cos(a),Math.sin(a),0)}},
ny:{"^":"m:27;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a1(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
nd:{"^":"m:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dW(y.$1(z),x)
x=J.dW(y.$1(z+3.141592653589793/this.c),x).S(0,w)
x=new V.I(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.G(x)))
u=new V.I(1,0,0)
y=v.aD(!v.v(0,u)?new V.I(0,0,1):u)
t=y.A(0,Math.sqrt(y.G(y)))
y=t.aD(v)
u=y.A(0,Math.sqrt(y.G(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa2(0,w.E(0,new V.a1(y.a-x.a,y.b-x.b,y.c-x.c)))}},
aq:{"^":"b;0a,0b,0c,0d,0e",
aE:function(){if(!this.gb2()){C.a.K(this.a.a.d.b,this)
this.a.a.Y()}this.c7()
this.c8()
this.fW()},
cc:function(a){this.a=a
C.a.h(a.d.b,this)},
cd:function(a){this.b=a
C.a.h(a.d.c,this)},
h4:function(a){this.c=a
C.a.h(a.d.d,this)},
c7:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
c8:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
fW:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gb2:function(){return this.a==null||this.b==null||this.c==null},
f6:function(){var z,y,x,w,v
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
if(v.e8())return
return v.A(0,Math.sqrt(v.G(v)))},
f9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.S(0,y)
z=new V.I(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.G(z)))
z=w.S(0,y)
z=new V.I(z.a,z.b,z.c)
z=v.aD(z.A(0,Math.sqrt(z.G(z))))
return z.A(0,Math.sqrt(z.G(z)))},
ck:function(){if(this.d!=null)return!0
var z=this.f6()
if(z==null){z=this.f9()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
f5:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.I(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.e8())return
return v.A(0,Math.sqrt(v.G(v)))},
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
n=z-o.b
if($.o.$2(n,0)){z=r.S(0,u)
z=new V.I(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.R(0)}else{l=(z-q.b)/n
z=r.S(0,u).k(0,l).E(0,u).S(0,x)
z=new V.I(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.R(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.G(z)))
z=k.aD(m)
z=z.A(0,Math.sqrt(z.G(z))).aD(k)
m=z.A(0,Math.sqrt(z.G(z)))}return m},
ci:function(){if(this.e!=null)return!0
var z=this.f5()
if(z==null){z=this.f8()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
b6:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.R(0)
y=this.e
if(y!=null)this.e=y.R(0)
this.a.a.Y()},
ghN:function(a){if(J.R(this.a,this.b))return!0
if(J.R(this.b,this.c))return!0
if(J.R(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y
if(this.gb2())return a+"disposed"
z=a+C.b.ae(J.ac(this.a.e),0)+", "+C.b.ae(J.ac(this.b.e),0)+", "+C.b.ae(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.C("")},
t:{
bI:function(a,b,c){var z,y,x
z=new F.aq()
y=a.a
if(y==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.v("May not create a face with vertices attached to different shapes."))
z.cc(a)
z.cd(b)
z.h4(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
im:{"^":"b;"},
k_:{"^":"im;",
b9:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dd:{"^":"b;0a,0b",
aE:function(){if(!this.gb2()){C.a.K(this.a.a.c.b,this)
this.a.a.Y()}this.c7()
this.c8()},
cc:function(a){this.a=a
C.a.h(a.c.b,this)},
cd:function(a){this.b=a
C.a.h(a.c.c,this)},
c7:function(){var z=this.a
if(z!=null){C.a.K(z.c.b,this)
this.a=null}},
c8:function(){var z=this.b
if(z!=null){C.a.K(z.c.c,this)
this.b=null}},
gb2:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){if(this.gb2())return a+"disposed"
return a+C.b.ae(J.ac(this.a.e),0)+", "+C.b.ae(J.ac(this.b.e),0)},
N:function(){return this.C("")},
t:{
iJ:function(a,b){var z,y,x
z=new F.dd()
y=a.a
if(y==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.v("May not create a line with vertices attached to different shapes."))
z.cc(a)
z.cd(b)
C.a.h(z.a.a.c.b,z)
z.a.a.Y()
return z}}},
iK:{"^":"b;"},
kj:{"^":"iK;",
b9:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dm:{"^":"b;0a",
aE:function(){var z=this.a
if(z!=null){C.a.K(z.a.b.b,this)
this.a.a.Y()}this.fV()},
fV:function(){var z=this.a
if(z!=null){C.a.K(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ae(J.ac(z.e),0)},
N:function(){return this.C("")}},
eZ:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.V()
this.e=z}return z},
ba:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hP())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dm()
if(r.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.I(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iJ(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bI(p,o,m)}z=this.e
if(!(z==null))z.al(0)},
ar:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ar()||!1
if(!this.a.ar())y=!1
z=this.e
if(!(z==null))z.al(0)
return y},
fi:function(a,b,c,d,e){var z,y,x
H.u(d,"$isd",[F.aj],"$asd")
H.u(e,"$isd",[P.n],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
if(a.b9(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
ih:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.aj],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.f(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.fi(a,v,y,u,t))b.ba(u)}this.a.w()
this.c.cH()
this.d.cH()
this.b.iD()
this.c.cI(new F.kj())
this.d.cI(new F.k_())
z=this.e
if(!(z==null))z.al(0)},
hF:function(a){this.ih(new F.kT(),new F.jh())},
ce:function(){return this.hF(null)},
b6:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.b6()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.sec(new V.I(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.I(w,v,z).A(0,Math.sqrt(w*w+v*v+z*z))
if(!J.R(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.I(null)}}}}z=this.e
if(!(z==null))z.al(0)},
hL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aX()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$bS().a)!==0)++w
if((x&$.$get$bT().a)!==0)++w
if((x&$.$get$bw().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
v=b.gcS(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.e8])
for(r=0,q=0;q<w;++q){p=b.hH(q)
o=p.gcS(p)
C.a.p(s,q,new Z.e8(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].ic(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.u(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.by(t)),35044)
y.bindBuffer(34962,null)
i=new Z.e9(new Z.fG(34962,j),s,b)
i.b=H.c([],[Z.cx])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dz(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cx(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dz(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cx(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.dz(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cx(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.n(z,"\n")},
a7:function(a){var z=this.e
if(!(z==null))z.I(a)},
Y:function(){return this.a7(null)},
t:{
dp:function(){var z,y
z=new F.eZ()
y=new F.kO(z)
y.b=!1
y.c=H.c([],[F.aj])
z.a=y
y=new F.jU(z)
y.b=H.c([],[F.dm])
z.b=y
y=new F.jT(z)
y.b=H.c([],[F.dd])
z.c=y
y=new F.jS(z)
y.b=H.c([],[F.aq])
z.d=y
z.e=null
return z}}},
jS:{"^":"b;a,0b",
hB:function(a){var z,y,x,w,v,u
H.u(a,"$isd",[F.aj],"$asd")
z=H.c([],[F.aq])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.f(a,v)
v=a[v]
if(w>=u)return H.f(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.bI(x,v,u))}}return z},
hC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$isd",[F.aj],"$asd")
z=H.c([],[F.aq])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.f(c,x)
r=c[x];++x
if(x>=s)return H.f(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.f(c,p)
o=c[p]
if(y<0||y>=s)return H.f(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bI(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bI(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bI(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bI(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cI:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b9(0,v,t)){v.aE()
break}}}}},
cH:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.ghN(x)
if(y)x.aE()}},
ar:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].ck())x=!1
return x},
cj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].ci())x=!1
return x},
b6:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].b6()},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
jT:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cI:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b9(0,v,t)){v.aE()
break}}}}},
cH:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.R(x.a,x.b)
if(y)x.aE()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.n(z,"\n")},
N:function(){return this.C("")}},
jU:{"^":"b;a,0b",
gm:function(a){return this.b.length},
iD:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aE()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
aj:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cn:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cj(this.cx,x,u,z,y,w,v,a,t)},
hP:function(){return this.cn(null)},
sa2:function(a,b){var z
if(!J.R(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Y()}},
sec:function(a){var z
a=a.A(0,Math.sqrt(a.G(a)))
if(!J.R(this.r,a)){this.r=a
z=this.a
if(z!=null)z.Y()}},
seo:function(a){var z
if(!J.R(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Y()}},
sdz:function(a){var z
if(!J.R(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.Y()}},
ic:function(a){var z,y
z=J.M(a)
if(z.v(a,$.$get$aX())){z=this.f
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aW())){z=this.r
y=[P.q]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aV())){z=this.x
y=[P.q]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aY())){z=this.y
y=[P.q]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.v(a,$.$get$aZ())){z=this.z
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bS())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bT())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$bw()))return H.c([this.ch],[P.q])
else if(z.v(a,$.$get$aU())){z=this.cx
y=[P.q]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.q])},
ck:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.J(0,new F.kY(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.al(0)}return!0},
ci:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.J(0,new F.kX(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.al(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.ae(J.ac(this.e),0))
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
C.a.h(z,V.T(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.n(z,", ")
return a+"{"+x+"}"},
N:function(){return this.C("")},
t:{
cj:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aj()
y=new F.kW(z)
y.b=H.c([],[F.dm])
z.b=y
y=new F.kS(z)
x=[F.dd]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.kP(z)
x=[F.aq]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fD()
z.e=0
y=$.$get$aX()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aW().a)!==0?e:null
z.x=(x&$.$get$aV().a)!==0?b:null
z.y=(x&$.$get$aY().a)!==0?f:null
z.z=(x&$.$get$aZ().a)!==0?g:null
z.Q=(x&$.$get$fE().a)!==0?c:null
z.ch=(x&$.$get$bw().a)!==0?i:0
z.cx=(x&$.$get$aU().a)!==0?a:null
return z}}},
kY:{"^":"m:5;a",
$1:function(a){var z,y
H.e(a,"$isaq")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
kX:{"^":"m:5;a",
$1:function(a){var z,y
H.e(a,"$isaq")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
kO:{"^":"b;a,0b,0c",
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Y()
return!0},
hE:function(a,b,c,d,e,f,g,h,i){var z=F.cj(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hD:function(a,b,c,d,e,f){return this.hE(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ar:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].ck()
return!0},
cj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].ci()
return!0},
hM:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.R(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.I(null)}}}}return!0},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
this.w()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
kP:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.f(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.f(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
J:function(a,b){H.l(b,{func:1,ret:-1,args:[F.aq]})
C.a.J(this.b,b)
C.a.J(this.c,new F.kQ(this,b))
C.a.J(this.d,new F.kR(this,b))},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
kQ:{"^":"m:5;a,b",
$1:function(a){H.e(a,"$isaq")
if(!J.R(a.a,this.a))this.b.$1(a)}},
kR:{"^":"m:5;a,b",
$1:function(a){var z
H.e(a,"$isaq")
z=this.a
if(!J.R(a.a,z)&&!J.R(a.b,z))this.b.$1(a)}},
kS:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
kU:{"^":"b;"},
kT:{"^":"kU;",
b9:function(a,b,c){return J.R(b.f,c.f)}},
kV:{"^":"b;"},
jh:{"^":"kV;",
ba:function(a){var z,y,x,w
H.u(a,"$isd",[F.aj],"$asd")
z=new V.I(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.I(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.G(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].sec(z)
return}},
kW:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}}}],["","",,O,{"^":"",j2:{"^":"cH;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.V()
this.dy=z}return z},
ah:[function(a){var z
H.e(a,"$isC")
z=this.dy
if(!(z==null))z.I(a)},function(){return this.ah(null)},"iW","$1","$0","gf0",0,2,1],
h_:[function(a){H.e(a,"$isC")
this.a=null
this.ah(a)},function(){return this.h_(null)},"js","$1","$0","gfZ",0,2,1],
j4:[function(a,b){var z=V.ax
z=new D.cy(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.ah(z)},"$2","gfs",8,0,32],
j5:[function(a,b){var z=V.ax
z=new D.cz(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.ah(z)},"$2","gft",8,0,32],
d2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a5(z.e.length+3,4)*4
x=C.e.a5(z.f.length+3,4)*4
w=C.e.a5(z.r.length+3,4)*4
v=C.e.a5(z.x.length+3,4)*4
u=C.e.a5(z.y.length+3,4)*4
t=C.e.a5(z.z.length+3,4)*4
s=C.e.a5(this.e.a.length+3,4)*4
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
a=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a0=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aX()
if(c){z=$.$get$aW()
a6=new Z.bv(a6.a|z.a)}if(b){z=$.$get$aV()
a6=new Z.bv(a6.a|z.a)}if(a){z=$.$get$aY()
a6=new Z.bv(a6.a|z.a)}if(a0){z=$.$get$aZ()
a6=new Z.bv(a6.a|z.a)}if(a2){z=$.$get$aU()
a6=new Z.bv(a6.a|z.a)}return new A.j5(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.u(a,"$isd",[T.f7],"$asd")},
aw:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
y.a=new V.a1(0,0,0)
y.b=new V.I(0,0,1)
x=y.c
if(x!=null){w=x.aX(0,b,y)
if(w!=null){y.a=w.aW(y.a)
y.b=w.cL(y.b)}}}},
iF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.d2()
y=a.fr.j(0,z.ak)
if(y==null){y=A.j1(z,a.a)
x=y.b
if(x.length===0)H.r(P.v("May not cache a shader with no name."))
if(a.fr.bv(0,x))H.r(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bx
z=b.e
if(!(z instanceof Z.e9)){b.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)b.d.ar()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cj()
t.a.cj()
t=t.e
if(!(t==null))t.al(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.hM()
s=s.e
if(!(s==null))s.al(0)}q=b.d.hL(new Z.kZ(a.a),v)
q.aQ($.$get$aX()).e=this.a.Q.c
if(z)q.aQ($.$get$aW()).e=this.a.cx.c
if(u)q.aQ($.$get$aV()).e=this.a.ch.c
if(w.rx)q.aQ($.$get$aY()).e=this.a.cy.c
if(t)q.aQ($.$get$aZ()).e=this.a.db.c
if(w.x1)q.aQ($.$get$aU()).e=this.a.dx.c
b.e=q}z=T.f7
p=H.c([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.hW()
if(w.fx){u=this.a
t=a.dx
t=t.gZ(t)
u=u.dy
u.toString
u.am(t.ag(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gZ(t)
s=a.dx
s=t.k(0,s.gZ(s))
a.cx=s
t=s}u=u.fr
u.toString
u.am(t.ag(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giA()
s=a.dx
s=t.k(0,s.gZ(s))
a.ch=s
t=s}u=u.fy
u.toString
u.am(t.ag(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.am(t.ag(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.am(t.ag(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.am(C.w.ag(t,!0))}if(w.as>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.q],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.f(s,n)
s=s[n]
t.toString
H.e(s,"$isax")
t=t.r1
if(n>=t.length)return H.f(t,n)
t=t[n]
m=new Float32Array(H.by(H.u(s.ag(0,!0),"$isd",u,"$asd")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.ai(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.f.e)
u=this.a
t=this.f.e
u.ab(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.ai(u.y1,u.as,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.r.e)
u=this.a
t=this.r.e
u.ab(u.y2,u.as,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.ak
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.ai(u.bx,u.by,t)
t=this.a
u=this.x.f
t=t.ak
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.x.e)
u=this.a
t=this.x.e
u.ab(u.dD,u.by,t)
t=this.a
u=this.x.f
t=t.ak
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bz
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.ai(u.dE,u.bA,t)
t=this.a
u=this.y.f
t=t.bz
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.ab(u.dF,u.bA,t)
t=this.a
u=this.y.f
t=t.bz
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bB
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bD
t.a.uniform1f(t.d,r)
break
case C.f:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.ai(u.dG,u.bC,t)
t=this.a
u=this.z.f
t=t.bB
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bD
u.a.uniform1f(u.d,r)
break
case C.h:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.ab(u.dH,u.bC,t)
t=this.a
u=this.z.f
t=t.bB
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bD
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dS
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cp
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.cL(i.gco(i))
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gac(i)
g=h.c
r=f.gbO()
s=f.gbi()
f=f.gbt()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dT
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cq
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gcD(i)
r=h.b
g=s.gex(s)
f=s.gey(s)
s=s.gez(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aW(i.gcD(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gac(i)
f=h.d
g=s.gbO()
r=s.gbi()
s=s.gbt()
f.a.uniform3f(f.d,g,r,s)
s=i.gdu()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gdv()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gdw()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dU
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cr
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.a
r=h.b
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.b
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=l.aW(i.a)
g=h.d
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.d
g=h.e
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.e
g=h.f
g.a.uniform1f(g.d,f)
f=i.f
g=h.r
g.a.uniform1f(g.d,f)
f=i.r
g=h.x
g.a.uniform1f(g.d,f)
f=i.x
g=h.y
g.a.uniform1f(g.d,f)
f=i.y
g=h.z
g.a.uniform1f(g.d,f);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dV
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.cs
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gbf()
H.u(p,"$isd",s,"$asd")
if(!C.a.V(p,r)){r.sb7(0,p.length)
C.a.h(p,r)}r=i.gco(i)
g=h.d
f=r.gb3(r)
e=r.gb4(r)
r=r.gb5()
g.a.uniform3f(g.d,f,e,r)
r=i.giS()
e=h.b
f=r.gb3(r)
g=r.gb4(r)
r=r.gb5()
e.a.uniform3f(e.d,f,g,r)
r=i.gbd(i)
g=h.c
f=r.gb3(r)
e=r.gb4(r)
r=r.gb5()
g.a.uniform3f(g.d,f,e,r)
r=l.cL(i.gco(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gac(i)
f=h.f
e=g.gbO()
r=g.gbi()
g=g.gbt()
f.a.uniform3f(f.d,e,r,g)
g=i.gbf()
r=g.gb8(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gb8(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb7(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dW
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.y,t=u.length,s=[P.q],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.ct
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gbf()
H.u(p,"$isd",r,"$asd")
if(!C.a.V(p,g)){g.sb7(0,p.length)
C.a.h(p,g)}d=l.k(0,i.gZ(i))
g=i.gZ(i).aW(new V.a1(0,0,0))
f=h.b
e=g.gex(g)
c=g.gey(g)
g=g.gez(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aW(new V.a1(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.e7(0)
c=h.d
m=new Float32Array(H.by(H.u(new V.cC(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ag(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gac(i)
g=h.e
e=c.gbO()
f=c.gbi()
c=c.gbt()
g.a.uniform3f(g.d,e,f,c)
c=i.gbf()
g=c.gb8(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gb8(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gb7(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gdu()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gdv()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gdw()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dX
u.a.uniform1i(u.d,o)
u=a.db
l=u.gZ(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cu
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbf()
H.u(p,"$isd",z,"$asd")
if(!C.a.V(p,s)){s.sb7(0,p.length)
C.a.h(p,s)}s=i.gcD(i)
r=h.b
g=s.gex(s)
f=s.gey(s)
s=s.gez(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gco(i)
f=h.c
g=s.gb3(s)
r=s.gb4(s)
s=s.gb5()
f.a.uniform3f(f.d,g,r,s)
s=i.giS()
r=h.d
g=s.gb3(s)
f=s.gb4(s)
s=s.gb5()
r.a.uniform3f(r.d,g,f,s)
s=i.gbd(i)
f=h.e
g=s.gb3(s)
r=s.gb4(s)
s=s.gb5()
f.a.uniform3f(f.d,g,r,s)
s=l.aW(i.gcD(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbf()
r=s.gb8(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gb8(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb7(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gac(i)
r=h.y
g=s.gbO()
f=s.gbi()
s=s.gbt()
r.a.uniform3f(r.d,g,f,s)
s=i.gjE()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjF()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gdu()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gdv()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gdw()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ai(z.dI,z.bE,u)
break
case C.h:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.ab(z.dJ,z.bE,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gZ(u).e7(0)
a.Q=u}z=z.id
z.toString
z.am(u.ag(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.ab(z.dK,z.dL,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bF
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ai(z.dM,z.bG,u)
u=this.a
z=this.cx.f
u=u.bF
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.ab(z.dN,z.bG,u)
u=this.a
z=this.cx.f
u=u.bF
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bI
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bH
u.a.uniform1f(u.d,s)
break
case C.f:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ai(z.dO,z.bJ,u)
u=this.a
z=this.cy.f
u=u.bI
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bH
z.a.uniform1f(z.d,s)
break
case C.h:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.ab(z.dP,z.bJ,u)
u=this.a
z=this.cy.f
u=u.bI
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bH
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bK
z.a.uniform1f(z.d,t)
break
case C.f:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.ai(z.dQ,z.bL,t)
t=this.a
z=this.db.f
t=t.bK
t.a.uniform1f(t.d,z)
break
case C.h:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.ab(z.dR,z.bL,t)
t=this.a
z=this.db.f
t=t.bK
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bs(a)
z=b.e
z.bs(a)
z.aU(a)
z.es(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].es(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.hV()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d2().ak},
t:{
eI:function(){var z,y,x
z=new O.j2()
y=O.d3(V.ax)
z.e=y
y.bk(z.gfs(),z.gft())
y=new O.bi(z,"emission")
y.c=C.c
y.f=new V.a3(0,0,0)
z.f=y
y=new O.bi(z,"ambient")
y.c=C.c
y.f=new V.a3(0,0,0)
z.r=y
y=new O.bi(z,"diffuse")
y.c=C.c
y.f=new V.a3(0,0,0)
z.x=y
y=new O.bi(z,"invDiffuse")
y.c=C.c
y.f=new V.a3(0,0,0)
z.y=y
y=new O.j7(z,"specular")
y.c=C.c
y.f=new V.a3(0,0,0)
y.ch=100
z.z=y
y=new O.j4(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.bi(z,"reflect")
y.c=C.c
y.f=new V.a3(0,0,0)
z.cx=y
y=new O.j6(z,"refract")
y.c=C.c
y.f=new V.a3(0,0,0)
y.ch=1
z.cy=y
y=new O.j3(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.iI()
y.bU(D.a6)
y.e=H.c([],[D.i9])
y.f=H.c([],[D.jn])
y.r=H.c([],[D.cF])
y.x=H.c([],[D.k8])
y.y=H.c([],[D.k9])
y.z=H.c([],[D.ka])
y.Q=null
y.ch=null
y.cR(y.gfq(),y.gfO(),y.gfQ())
z.dx=y
x=y.Q
if(x==null){x=D.V()
y.Q=x
y=x}else y=x
y.h(0,z.gfZ())
y=z.dx
x=y.ch
if(x==null){x=D.V()
y.ch=x
y=x}else y=x
y.h(0,z.gf0())
z.dy=null
return z}}},j3:{"^":"dh;0f,a,b,0c,0d,0e"},dh:{"^":"b;",
bp:["eM",function(){}]},j4:{"^":"dh;a,b,0c,0d,0e"},bi:{"^":"dh;0f,a,b,0c,0d,0e",
dg:function(a){var z,y
if(!J.R(this.f,a)){z=this.f
this.f=a
y=new D.P(this.b+".color",z,a,this,[V.a3])
y.b=!0
this.a.ah(y)}},
bp:["bT",function(){this.eM()
this.dg(new V.a3(1,1,1))}],
sac:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bp()
z=this.a
z.a=null
z.ah(null)}this.dg(b)}},j6:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
h3:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.P(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.ah(z)}},
bp:function(){this.bT()
this.h3(1)}},j7:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
c9:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.P(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.ah(z)}},
bp:function(){this.bT()
this.c9(100)}},cH:{"^":"b;"}}],["","",,T,{"^":"",f7:{"^":"cZ;"},k7:{"^":"b;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",bF:{"^":"b;",
aS:function(a,b){return!0},
i:function(a){return"all"},
$isaP:1},aP:{"^":"b;"},eH:{"^":"b;",
aS:["eL",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].aS(0,b))return!0
return!1}],
i:["cT",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaP:1},az:{"^":"eH;0a",
aS:function(a,b){return!this.eL(0,b)},
i:function(a){return"!["+this.cT(0)+"]"}},jB:{"^":"b;0a,0b",
aS:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bQ(this.a)
y=H.bQ(this.b)
return z+".."+y},
$isaP:1,
t:{
X:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.F(a,0)
y=C.b.F(b,0)
x=new V.jB()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jQ:{"^":"b;0a",
eR:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.b5(0,0,[P.n,P.S])
for(y=new H.df(a,a.gm(a),0,[H.al(a,"z",0)]);y.D();)z.p(0,y.d,!0)
this.a=z},
aS:function(a,b){return this.a.bv(0,b)},
i:function(a){var z=this.a
return P.cg(z.ga6(z),0,null)},
$isaP:1,
t:{
x:function(a){var z=new V.jQ()
z.eR(a)
return z}}},f0:{"^":"b;a,b,0c,0d",
gii:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fe(this.a.l(0,b))
w.a=H.c([],[V.aP])
w.c=!1
C.a.h(this.c,w)
return w},
hY:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.aS(0,a))return w}return},
i:function(a){return this.b}},fb:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.dU(this.b,"\n","\\n")
y=H.dU(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fc:{"^":"b;a,b,0c",
aG:function(a,b,c){var z,y,x
H.u(c,"$isd",[P.h],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.B)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},kf:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.f0(this,b)
z.c=H.c([],[V.fe])
this.a.p(0,b,z)}return z},
O:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.fc(this,a)
y=P.h
z.c=new H.b5(0,0,[y,y])
this.b.p(0,a,z)}return z},
er:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fb])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.hY(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cg(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.gii(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cg(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fb(o==null?p.b:o,q,t)}++t}}},
t:{
cI:function(){var z,y
z=new V.kf()
y=P.h
z.a=new H.b5(0,0,[y,V.f0])
z.b=new H.b5(0,0,[y,V.fc])
return z}}},fe:{"^":"eH;b,0c,0a",
i:function(a){return this.b.b+": "+this.cT(0)}}}],["","",,X,{"^":"",eb:{"^":"b;",$isaR:1},is:{"^":"f4;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.V()
this.x=z}return z}},jk:{"^":"b;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.V()
this.f=z}return z},
aY:[function(a){var z
H.e(a,"$isC")
z=this.f
if(!(z==null))z.I(a)},function(){return this.aY(null)},"iX","$1","$0","gcV",0,2,1],
saT:function(a){var z,y
if(!J.R(this.b,a)){z=this.b
if(z!=null)z.gB().K(0,this.gcV())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gcV())
z=new D.P("mover",y,this.b,this,[U.am])
z.b=!0
this.aY(z)}},
$isaR:1,
$iseb:1},f4:{"^":"b;"}}],["","",,V,{"^":"",
nN:function(a){P.ke(C.N,new V.nO(a))},
b2:{"^":"b;",
bl:function(a){this.b=new P.iv(C.O)
this.c=null
this.d=H.c([],[[P.d,W.bd]])},
L:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bd]))
y=a.split("\n")
for(z=y.length,x=[W.bd],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.H(u)
s=this.b.fc(u,0,u.length)
r=s==null?u:s
C.M.eF(t,H.dU(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gau(this.d),t)}},
eh:function(a,b){var z,y,x,w
H.u(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bd]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bw()
this.c=y}for(y=y.er(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)this.bN(y[w])}},
nO:{"^":"m:52;a",
$1:function(a){H.e(a,"$isbs")
P.dT(C.d.eq(this.a.gi3(),2)+" fps")}},
i5:{"^":"b2;a,0b,0c,0d",
bN:function(a){switch(a.a){case"Class":this.L(a.b,"#551")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break
case"Type":this.L(a.b,"#B11")
break
case"Whitespace":this.L(a.b,"#111")
break}},
bw:function(){var z,y,x,w
z=V.cI()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"OpenDoubleStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenDoubleStr").n(0,"CloseDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenDoubleStr").n(0,"EscDoubleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscDoubleStr").n(0,"OpenDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenDoubleStr").n(0,"OpenDoubleStr").a,new V.bF())
x=z.l(0,"Start").n(0,"OpenSingleStr")
y=V.x(new H.w("'"))
C.a.h(x.a,y)
y=z.l(0,"OpenSingleStr").n(0,"CloseSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
x=z.l(0,"OpenSingleStr").n(0,"EscSingleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscSingleStr").n(0,"OpenSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenSingleStr").n(0,"OpenSingleStr").a,new V.bF())
x=z.l(0,"Start").n(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.az()
w=[V.aP]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"MLComment")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
x=z.l(0,"MLComment").n(0,"MLCStar")
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"MLComment")
x=new V.az()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"EndComment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Whitespace").n(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Int")
x.d=x.a.O("Num")
x=z.l(0,"Float")
x.d=x.a.O("Num")
x=z.l(0,"Sym")
x.d=x.a.O("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.O("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.O("String")
x=z.l(0,"EndComment")
x.d=x.a.O("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.O("Whitespace")
x=z.l(0,"Id")
y=x.a.O("Id")
x.d=y
x=[P.h]
y.aG(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aG(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aG(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
it:{"^":"b2;a,0b,0c,0d",
bN:function(a){switch(a.a){case"Builtin":this.L(a.b,"#411")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Preprocess":this.L(a.b,"#737")
break
case"Reserved":this.L(a.b,"#119")
break
case"Symbol":this.L(a.b,"#611")
break
case"Type":this.L(a.b,"#171")
break
case"Whitespace":this.L(a.b,"#111")
break}},
bw:function(){var z,y,x,w
z=V.cI()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.X("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.X("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Slash").n(0,"Sym").a,new V.bF())
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.az()
w=[V.aP]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"Preprocess")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("\n"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"EndPreprocess")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Whitespace").n(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Int")
y.d=y.a.O("Num")
y=z.l(0,"Float")
y.d=y.a.O("Num")
y=z.l(0,"Sym")
y.d=y.a.O("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.O("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.O("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.O("Whitespace")
y=z.l(0,"Id")
x=y.a.O("Id")
y.d=x
y=[P.h]
x.aG(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aG(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aG(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iu:{"^":"b2;a,0b,0c,0d",
bN:function(a){switch(a.a){case"Attr":this.L(a.b,"#911")
this.L("=","#111")
break
case"Id":this.L(a.b,"#111")
break
case"Other":this.L(a.b,"#111")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break}},
bw:function(){var z,y,x
z=V.cI()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.X("a","z")
C.a.h(y.a,x)
x=V.X("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.X("0","9")
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Id").n(0,"Attr")
x=V.x(new H.w("="))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Sym")
x=V.x(new H.w("</\\-!>="))
C.a.h(y.a,x)
x=z.l(0,"Sym").n(0,"Sym")
y=V.x(new H.w("</\\-!>="))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"OpenStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenStr").n(0,"CloseStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenStr").n(0,"EscStr")
x=V.x(new H.w("\\"))
C.a.h(y.a,x)
x=z.l(0,"EscStr").n(0,"OpenStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
C.a.h(z.l(0,"OpenStr").n(0,"OpenStr").a,new V.bF())
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bF())
y=z.l(0,"Other").n(0,"Other")
x=new V.az()
x.a=H.c([],[V.aP])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.O("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.O("String")
y=z.l(0,"Id")
x=y.a.O("Id")
y.d=x
x.aG(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.l(0,"Attr")
x.d=x.a.O("Attr")
x=z.l(0,"Other")
x.d=x.a.O("Other")
return z}},
jm:{"^":"b2;a,0b,0c,0d",
eh:function(a,b){H.u(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bd]])
this.L(C.a.n(b,"\n"),"#111")},
bN:function(a){},
bw:function(){return}},
jz:{"^":"b;a,b,0c",
dn:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fy().gcG().j(0,H.j(z))
if(y==null)if(d){c.$0()
this.dl(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dZ(this.c).h(0,v)
t=W.iy("radio")
t.checked=x
t.name=z
z=W.ag
W.a7(t,"change",H.l(new V.jA(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dZ(this.c).h(0,w.createElement("br"))},
b0:function(a,b,c){return this.dn(a,b,c,!1)},
dl:function(a){var z,y,x,w,v
z=P.fy()
y=P.h
x=P.iQ(z.gcG(),y,y)
x.p(0,this.a,a)
w=z.em(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.m5([],[]).cM(""),"",v)}},
jA:{"^":"m:15;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dl(this.d)}}},
jV:{"^":"b;0a,0b",
eT:function(a,b){var z,y,x,w,v,u,t
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
t=W.ag
W.a7(z,"scroll",H.l(new V.jY(x),{func:1,ret:-1,args:[t]}),!1,t)},
ds:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$isd",[P.h],"$asd")
this.h6()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.er(C.a.ia(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hw(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cl(C.B,s,C.k,!1)
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
eB:function(a){var z,y,x,w
z=new V.i5("dart")
z.bl("dart")
y=new V.it("glsl")
y.bl("glsl")
x=new V.iu("html")
x.bl("html")
w=C.a.hZ(H.c([z,y,x],[V.b2]),new V.jZ(a))
if(w!=null)return w
z=new V.jm("plain")
z.bl("plain")
return z},
dq:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.u(a2,"$isd",[P.h],"$asd")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c3(w).a3(w,"+")){C.a.p(a2,x,C.b.an(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a3(w,"-")){C.a.p(a2,x,C.b.an(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eB(a0)
v.eh(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cl(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e0(null)
n.href="#"+H.j(r)
n.textContent=a
o.appendChild(n)
p.appendChild(o)
q.appendChild(p)
s.appendChild(q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.f(z,x)
g=z[x]
if(g===0){++l;++m
i.textContent=""+l
h.textContent=""+m}else if(g>0){j.className="codeTableRow codeLineLightGreen"
i.className="codeLineNums codeLineGreen codeLineCenter"
h.className="codeLineNums codeLineGreen";++m
i.textContent="+"
h.textContent=""+m}else if(g<0){j.className="codeTableRow codeLineLightRed"
i.className="codeLineNums codeLineRed"
h.className="codeLineNums codeLineRed codeLineCenter";++l
i.textContent=""+l
h.textContent="-"}f=u.createElement("td")
f.className="codeLineText"
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.B)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.B)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gX(w);b.D();)h.appendChild(b.gM(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hA:function(a){var z,y,x,w,v,u,t
H.u(a,"$isd",[P.h],"$asd")
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
x=H.e(w.insertCell(-1),"$isds").style
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
t=H.e(w.insertCell(-1),"$isds")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
h6:function(){var z,y,x,w
if(this.b!=null)return
z=V.cI()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.az()
w=[V.aP]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"Bold").n(0,"BoldEnd")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Italic")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Italic").n(0,"Italic")
x=new V.az()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=z.l(0,"Italic").n(0,"ItalicEnd")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Code")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Code").n(0,"Code")
x=new V.az()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("`"))
C.a.h(x.a,y)
y=z.l(0,"Code").n(0,"CodeEnd")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"LinkHead")
x=V.x(new H.w("["))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"LinkHead").n(0,"LinkTail")
x=V.x(new H.w("|"))
C.a.h(y.a,x)
x=z.l(0,"LinkHead").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkHead").n(0,"LinkHead")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").n(0,"LinkTail")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bF())
x=z.l(0,"Other").n(0,"Other")
y=new V.az()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("*_`["))
C.a.h(y.a,x)
x=z.l(0,"BoldEnd")
x.d=x.a.O("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.O("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.O("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.O("Link")
x=z.l(0,"Other")
x.d=x.a.O("Other")
this.b=z},
t:{
jW:function(a,b){var z=new V.jV()
z.eT(a,!0)
return z}}},
jY:{"^":"m:15;a",
$1:function(a){P.f9(C.q,new V.jX(this.a))}},
jX:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.d.af(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
jZ:{"^":"m:54;a",
$1:function(a){return H.e(a,"$isb2").a===this.a}}}],["","",,N,{"^":"",
hs:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.jW("Test 024",!0)
y=W.ec(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.ds(H.c(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],x))
z.hA(H.c(["shapes"],x))
z.ds(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.kc(w,!0,!0,!0,!1)
u=U.d6(null)
u.h(0,U.c7(V.eL(0,0,-2.5)))
u.h(0,U.fB(!1,!0,v.r,!1,!1,!1,null,!1))
t=new V.a3(1,1,1)
s=new D.cF()
s.d=new V.a3(1,1,1)
s.e=3.141592653589793
s.f=3.141592653589793
s.r=1
s.x=0
s.y=0
s.a=new V.a1(0,0,0)
s.b=new V.I(0,0,1)
r=s.c
s.c=u
u.gB().h(0,s.gfv())
q=new D.P("mover",r,s.c,s,[U.am])
q.b=!0
s.aa(q)
if(!s.d.v(0,t)){r=s.d
s.d=t
q=new D.P("color",r,t,s,[V.a3])
q.b=!0
s.aa(q)}q=s.e
if(!$.o.$2(q,0.6)){r=s.e
s.e=0.6
q=new D.P("cutoff",r,0.6,s,[P.q])
q.b=!0
s.aa(q)}q=s.f
if(!$.o.$2(q,0.5)){r=s.f
s.f=0.5
q=new D.P("coneAngle",r,0.5,s,[P.q])
q.b=!0
s.aa(q)}q=s.r
if(!$.o.$2(q,0.5)){r=s.r
s.r=0.5
q=new D.P("attenuation0",r,0.5,s,[P.q])
q.b=!0
s.aa(q)}q=s.x
if(!$.o.$2(q,0.05)){r=s.x
s.x=0.05
q=new D.P("attenuation1",r,0.05,s,[P.q])
q.b=!0
s.aa(q)}p=O.eI()
p.dx.h(0,s)
p.f.sac(0,new V.a3(0,0,0))
q=p.r
q.sac(0,new V.a3(0,0,0))
q=p.x
q.sac(0,new V.a3(0.7,0.7,0.7))
q=p.z
q.sac(0,new V.a3(0.3,0.3,0.3))
q=p.z
if(q.c===C.c){q.c=C.i
q.bT()
q.c9(100)
o=q.a
o.a=null
o.ah(null)}q.c9(100)
n=E.d5(null,!0,null,"",null,null)
n.sa8(0,F.hy(30,1,15,0.5))
m=E.d5(null,!0,null,"",null,null)
m.saT(U.c7(V.eK(3,3,3,1)))
q=F.dM(1,null,null,1)
q.b6()
m.sa8(0,q)
l=U.d6(null)
l.h(0,U.fB(!1,!1,v.r,!1,!1,!1,null,!1))
l.h(0,U.c7(V.eJ(3.141592653589793)))
l.h(0,U.c7(V.eL(0,0,5)))
k=E.d5(null,!0,null,"",null,null)
q=U.d6(null)
q.h(0,U.c7(V.eK(0.1,0.1,0.1,1)))
q.h(0,u)
k.saT(q)
k.sa8(0,F.dN(0,!1,!0,1,40,1))
q=O.eI()
q.f.sac(0,new V.a3(1,1,1))
k.sbe(q)
q=new M.ii()
o=O.d3(E.aO)
q.d=o
o.bk(q.gfw(),q.gfz())
q.e=null
q.f=null
q.r=null
q.x=null
j=new X.jk()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saT(null)
o=j.c
if(!$.o.$2(o,1.0471975511965976)){r=j.c
j.c=1.0471975511965976
o=new D.P("fov",r,1.0471975511965976,j,[P.q])
o.b=!0
j.aY(o)}o=j.d
if(!$.o.$2(o,0.1)){r=j.d
j.d=0.1
o=new D.P("near",r,0.1,j,[P.q])
o.b=!0
j.aY(o)}o=j.e
if(!$.o.$2(o,2000)){r=j.e
j.e=2000
o=new D.P("far",r,2000,j,[P.q])
o.b=!0
j.aY(o)}o=q.a
if(o!==j){if(o!=null)o.gB().K(0,q.gao())
r=q.a
q.a=j
j.gB().h(0,q.gao())
o=new D.P("camera",r,q.a,q,[X.eb])
o.b=!0
q.aK(o)}i=new X.is()
o=new V.bb(0,0,0,1)
i.a=o
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
o=V.eV(0,0,1,1)
i.r=o
o=q.b
if(o!==i){if(o!=null)o.gB().K(0,q.gao())
r=q.b
q.b=i
i.gB().h(0,q.gao())
o=new D.P("target",r,q.b,q,[X.f4])
o.b=!0
q.aK(o)}q.sbe(null)
q.sbe(p)
q.d.h(0,n)
q.d.h(0,m)
q.d.h(0,k)
q.a.saT(l)
o=v.d
if(o!==q){if(o!=null)o.gB().K(0,v.gcU())
v.d=q
q.gB().h(0,v.gcU())
v.eV()}q=new V.jz("shapes",!0)
x=x.getElementById("shapes")
q.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
q.b0(0,"Cube",new N.nA(n))
q.b0(0,"Cylinder",new N.nB(n))
q.b0(0,"Cone",new N.nC(n))
q.b0(0,"Sphere",new N.nD(n))
q.dn(0,"Toroid",new N.nE(n),!0)
q.b0(0,"Knot",new N.nF(n))
x=v.z
if(x==null){x=D.V()
v.z=x}q={func:1,ret:-1,args:[D.C]}
o=H.l(new N.nG(z,p),q)
h=x.b
if(h==null){q=H.c([],[q])
x.b=q
x=q}else x=h
C.a.h(x,o)
V.nN(v)},
nA:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dM(1,null,null,1))}},
nB:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dN(1,!0,!0,1,40,1))}},
nC:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.dN(1,!0,!1,1,40,0))}},
nD:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.nP(6,null,1,6))}},
nE:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.hy(30,1,15,0.5))}},
nF:{"^":"m:0;a",
$0:function(){this.a.sa8(0,F.nx(120,1,2,12,0.3,3))}},
nG:{"^":"m:10;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isC")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dq("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dq("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ez.prototype
return J.iD.prototype}if(typeof a=="string")return J.cb.prototype
if(a==null)return J.eA.prototype
if(typeof a=="boolean")return J.iC.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.aK=function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.c2=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.nl=function(a){if(typeof a=="number")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.nm=function(a){if(typeof a=="number")return J.ca.prototype
if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.c3=function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.aC=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.R=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).v(a,b)}
J.hz=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nl(a).P(a,b)}
J.dW=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nm(a).k(a,b)}
J.dX=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hp(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aK(a).j(a,b)}
J.cX=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hp(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c2(a).p(a,b,c)}
J.hA=function(a,b){return J.c3(a).F(a,b)}
J.hB=function(a,b,c){return J.aC(a).fX(a,b,c)}
J.hC=function(a,b,c,d){return J.aC(a).dr(a,b,c,d)}
J.hD=function(a,b){return J.c3(a).W(a,b)}
J.cY=function(a,b,c){return J.aK(a).hO(a,b,c)}
J.cp=function(a,b){return J.c2(a).H(a,b)}
J.hE=function(a,b,c,d){return J.c2(a).aF(a,b,c,d)}
J.dY=function(a,b){return J.c2(a).J(a,b)}
J.hF=function(a){return J.aC(a).ghJ(a)}
J.dZ=function(a){return J.aC(a).gcl(a)}
J.c5=function(a){return J.M(a).gT(a)}
J.b1=function(a){return J.c2(a).gX(a)}
J.ao=function(a){return J.aK(a).gm(a)}
J.hG=function(a){return J.aC(a).gcE(a)}
J.hH=function(a){return J.aC(a).giN(a)}
J.e_=function(a){return J.c2(a).iC(a)}
J.hI=function(a,b){return J.aC(a).iG(a,b)}
J.hJ=function(a,b){return J.aC(a).sa1(a,b)}
J.hK=function(a,b,c){return J.c3(a).u(a,b,c)}
J.hL=function(a){return J.c3(a).iR(a)}
J.ac=function(a){return J.M(a).i(a)}
I.aa=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cs.prototype
C.l=W.d2.prototype
C.M=W.bd.prototype
C.P=J.t.prototype
C.a=J.bh.prototype
C.e=J.ez.prototype
C.w=J.eA.prototype
C.d=J.ca.prototype
C.b=J.cb.prototype
C.W=J.cc.prototype
C.a1=H.dl.prototype
C.a2=W.je.prototype
C.E=J.jl.prototype
C.F=W.k6.prototype
C.u=J.ci.prototype
C.G=W.bU.prototype
C.H=W.l0.prototype
C.J=new P.hQ(!1)
C.I=new P.hP(C.J)
C.K=new P.jj()
C.L=new P.kN()
C.j=new P.lO()
C.c=new A.cu(0,"ColorSourceType.None")
C.i=new A.cu(1,"ColorSourceType.Solid")
C.f=new A.cu(2,"ColorSourceType.Texture2D")
C.h=new A.cu(3,"ColorSourceType.TextureCube")
C.q=new P.be(0)
C.N=new P.be(5e6)
C.O=new P.iw("element",!0,!1,!1,!1)
C.Q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.R=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.S=function(getTagFallback) {
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
C.T=function() {
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
C.U=function(hooks) {
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
C.V=function(hooks) {
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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=H.c(I.aa([127,2047,65535,1114111]),[P.n])
C.m=H.c(I.aa([0,0,32776,33792,1,10240,0,0]),[P.n])
C.X=H.c(I.aa(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.n=H.c(I.aa([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.aa([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Y=H.c(I.aa(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.A=H.c(I.aa([]),[P.h])
C.Z=H.c(I.aa([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.aa([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.aa([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.aa([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a_=H.c(I.aa([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.aa([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.aa(["bind","if","ref","repeat","syntax"]),[P.h])
C.t=H.c(I.aa(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a0=new H.i1(0,{},C.A,[P.h,P.h])
C.k=new P.kG(!1)
$.aE=0
$.bG=null
$.e6=null
$.dG=!1
$.hn=null
$.hg=null
$.hv=null
$.cS=null
$.cV=null
$.dQ=null
$.bz=null
$.bZ=null
$.c_=null
$.dH=!1
$.Y=C.j
$.aN=null
$.d4=null
$.es=null
$.er=null
$.en=null
$.em=null
$.el=null
$.ek=null
$.o=V.j8()
$.eR=null
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
I.$lazy(y,x,w)}})(["ej","$get$ej",function(){return H.hm("_$dart_dartClosure")},"da","$get$da",function(){return H.hm("_$dart_js")},"ff","$get$ff",function(){return H.aH(H.cJ({
toString:function(){return"$receiver$"}}))},"fg","$get$fg",function(){return H.aH(H.cJ({$method$:null,
toString:function(){return"$receiver$"}}))},"fh","$get$fh",function(){return H.aH(H.cJ(null))},"fi","$get$fi",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fm","$get$fm",function(){return H.aH(H.cJ(void 0))},"fn","$get$fn",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fk","$get$fk",function(){return H.aH(H.fl(null))},"fj","$get$fj",function(){return H.aH(function(){try{null.$method$}catch(z){return z.message}}())},"fp","$get$fp",function(){return H.aH(H.fl(void 0))},"fo","$get$fo",function(){return H.aH(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dB","$get$dB",function(){return P.l1()},"c0","$get$c0",function(){return[]},"fC","$get$fC",function(){return P.kK()},"fJ","$get$fJ",function(){return H.jc(H.by(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"h5","$get$h5",function(){return P.jG("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hc","$get$hc",function(){return P.mV()},"eh","$get$eh",function(){return{}},"fN","$get$fN",function(){return P.eE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dC","$get$dC",function(){return P.de(P.h,P.c9)},"fF","$get$fF",function(){return Z.at(0)},"fD","$get$fD",function(){return Z.at(511)},"aX","$get$aX",function(){return Z.at(1)},"aW","$get$aW",function(){return Z.at(2)},"aV","$get$aV",function(){return Z.at(4)},"aY","$get$aY",function(){return Z.at(8)},"aZ","$get$aZ",function(){return Z.at(16)},"bS","$get$bS",function(){return Z.at(32)},"bT","$get$bT",function(){return Z.at(64)},"fE","$get$fE",function(){return Z.at(96)},"bw","$get$bw",function(){return Z.at(128)},"aU","$get$aU",function(){return Z.at(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.L,args:[F.aq]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[F.aj,P.q,P.q]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.L,args:[D.C]},{func:1,ret:-1,args:[P.n,[P.i,E.aO]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.S,args:[W.aG]},{func:1,ret:P.L,args:[W.ag]},{func:1,ret:-1,args:[P.n,[P.i,U.am]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.n,[P.i,D.a6]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.S,args:[W.U,P.h,P.h,W.ck]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:P.S,args:[W.G]},{func:1,ret:P.L,args:[,]},{func:1,ret:W.G},{func:1,ret:V.a1,args:[P.q]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.S,args:[P.h]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:-1,args:[P.n,[P.i,V.ax]]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.L,args:[P.a5]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.S,args:[P.q,P.q]},{func:1,ret:P.Q,args:[P.n]},{func:1,ret:-1,args:[W.bU]},{func:1,ret:P.L,args:[P.h,,]},{func:1,ret:P.S,args:[[P.i,D.a6]]},{func:1,ret:P.L,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.K,P.h,P.h],args:[[P.K,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.b_,,],args:[,]},{func:1,ret:P.n,args:[[P.d,P.n],P.n]},{func:1,ret:P.L,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aA]},{func:1,ret:P.L,args:[P.bs]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.S,args:[V.b2]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.U,args:[W.G]}]
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
if(x==y)H.nS(d||a)
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
Isolate.aa=a.aa
Isolate.dO=a.dO
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
if(typeof dartMainRunner==="function")dartMainRunner(N.hs,[])
else N.hs([])})})()
//# sourceMappingURL=test.dart.js.map
