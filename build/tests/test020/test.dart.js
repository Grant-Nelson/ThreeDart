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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dN(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dP=function(){}
var dart=[["","",,H,{"^":"",oq:{"^":"b;a"}}],["","",,J,{"^":"",
O:function(a){return void 0},
dT:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cS:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dR==null){H.nz()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cg("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$da()]
if(v!=null)return v
v=H.nE(a)
if(v!=null)return v
if(typeof a=="function")return C.W
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$da(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
t:{"^":"b;",
v:function(a,b){return a===b},
gV:function(a){return H.bQ(a)},
i:["eQ",function(a){return"Instance of '"+H.bl(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iE:{"^":"t;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isU:1},
eC:{"^":"t;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isL:1},
db:{"^":"t;",
gV:function(a){return 0},
i:["eS",function(a){return String(a)}]},
jn:{"^":"db;"},
ch:{"^":"db;"},
cc:{"^":"db;",
i:function(a){var z=a[$.$get$ek()]
if(z==null)return this.eS(a)
return"JavaScript function for "+H.j(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc9:1},
bh:{"^":"t;$ti",
h:function(a,b){H.A(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.E("add"))
a.push(b)},
O:function(a,b){var z
if(!!a.fixed$length)H.r(P.E("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aO(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.j(a[y]))
return z.join(b)},
ik:function(a){return this.n(a,"")},
i9:function(a,b,c,d){var z,y,x
H.A(b,d)
H.l(c,{func:1,ret:d,args:[d,H.z(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aO(a))}return y},
i7:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.U,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aO(a))}throw H.a(H.d8())},
i6:function(a,b){return this.i7(a,b,null)},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
bT:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a4(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a4(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gav:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.d8())},
aG:function(a,b,c,d){var z
H.A(d,H.z(a,0))
if(!!a.immutable$list)H.r(P.E("fill range"))
P.aT(b,c,a.length,null,null,null)
for(z=b;z.S(0,c);z=z.D(0,1))a[z]=d},
dJ:function(a,b){var z,y
H.l(b,{func:1,ret:P.U,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aO(a))}return!1},
X:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.d7(a,"[","]")},
gZ:function(a){return new J.aE(a,a.length,0,[H.z(a,0)])},
gV:function(a){return H.bQ(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.E("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cq(b,"newLength",null))
if(b<0)throw H.a(P.a4(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
return a[b]},
p:function(a,b,c){H.F(b)
H.A(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.E("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
a[b]=c},
$isi:1,
$isd:1,
t:{
iD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cq(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a4(a,0,4294967295,"length",null))
return J.eA(new Array(a),b)},
eA:function(a,b){return J.bK(H.c(a,[b]))},
bK:function(a){H.c5(a)
a.fixed$length=Array
return a}}},
op:{"^":"bh;$ti"},
aE:{"^":"b;a,b,c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ca:{"^":"t;",
gij:function(a){return a===0?1/a<0:a<0},
e9:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.E(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.E(""+a+".round()"))},
eC:function(a,b){var z
if(b>20)throw H.a(P.a4(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gij(a))return"-"+z
return z},
bi:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a4(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Y(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.E("Unexpected toString result: "+z))
x=J.aM(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.al(b))
return a*b},
bm:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dB(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dB(a,b)},
dB:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.E("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aQ:function(a,b){var z
if(a>0)z=this.dz(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hh:function(a,b){if(b<0)throw H.a(H.al(b))
return this.dz(a,b)},
dz:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.a(H.al(b))
return a<b},
$isq:1,
$isa5:1},
eB:{"^":"ca;",$isn:1},
iF:{"^":"ca;"},
cb:{"^":"t;",
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b<0)throw H.a(H.aL(a,b))
if(b>=a.length)H.r(H.aL(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aL(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.H(b)
if(typeof b!=="string")throw H.a(P.cq(b,null,null))
return a+b},
b_:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.al(b))
c=P.aT(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.al(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a8:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.al(c))
if(typeof c!=="number")return c.S()
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a3:function(a,b){return this.a8(a,b,0)},
u:function(a,b,c){H.F(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.al(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.a(P.cF(b,null,null))
if(b>c)throw H.a(P.cF(b,null,null))
if(c>a.length)throw H.a(P.cF(c,null,null))
return a.substring(b,c)},
ao:function(a,b){return this.u(a,b,null)},
iY:function(a){return a.toLowerCase()},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iy:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ab:function(a,b){return this.iy(a,b," ")},
eh:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eg:function(a,b){return this.eh(a,b,0)},
hW:function(a,b,c){if(c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
return H.hz(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseS:1,
$ish:1}}],["","",,H,{"^":"",
cT:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
d8:function(){return new P.dr("No element")},
iC:function(){return new P.dr("Too many elements")},
w:{"^":"ky;a",
gm:function(a){return this.a.length},
k:function(a,b){return C.b.Y(this.a,b)},
$ascJ:function(){return[P.n]},
$asy:function(){return[P.n]},
$asi:function(){return[P.n]},
$asd:function(){return[P.n]}},
er:{"^":"i;"},
cB:{"^":"er;$ti",
gZ:function(a){return new H.df(this,this.gm(this),0,[H.am(this,"cB",0)])},
cY:function(a,b){return this.eR(0,H.l(b,{func:1,ret:P.U,args:[H.am(this,"cB",0)]}))}},
df:{"^":"b;a,b,c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.aM(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aO(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
j_:{"^":"i;a,b,$ti",
gZ:function(a){return new H.j0(J.b2(this.a),this.b,this.$ti)},
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.co(this.a,b))},
$asi:function(a,b){return[b]}},
j0:{"^":"d9;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$asd9:function(a,b){return[b]}},
j1:{"^":"cB;a,b,$ti",
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.co(this.a,b))},
$ascB:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dC:{"^":"i;a,b,$ti",
gZ:function(a){return new H.l4(J.b2(this.a),this.b,this.$ti)}},
l4:{"^":"d9;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
cw:{"^":"b;$ti"},
cJ:{"^":"b;$ti",
p:function(a,b,c){H.F(b)
H.A(c,H.am(this,"cJ",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))},
aG:function(a,b,c,d){H.A(d,H.am(this,"cJ",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))}},
ky:{"^":"cA+cJ;"}}],["","",,H,{"^":"",
i3:function(){throw H.a(P.E("Cannot modify unmodifiable Map"))},
ns:function(a){return init.types[H.F(a)]},
hs:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isJ},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.al(a))
return z},
bQ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jy:function(a,b){var z,y,x,w,v,u
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
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bl:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.O(a).$isch){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.ao(w,1)
r=H.dS(H.c5(H.b9(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jq:function(){if(!!self.location)return self.location.href
return},
eU:function(a){var z,y,x,w,v
H.c5(a)
z=J.ao(a)
if(typeof z!=="number")return z.eL()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jz:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.al(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aQ(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.al(w))}return H.eU(z)},
eV:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.al(x))
if(x<0)throw H.a(H.al(x))
if(x>65535)return H.jz(a)}return H.eU(a)},
jA:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eL()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bR:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aQ(z,10))>>>0,56320|z&1023)}}throw H.a(P.a4(a,0,1114111,null,null))},
aj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jx:function(a){return a.b?H.aj(a).getUTCFullYear()+0:H.aj(a).getFullYear()+0},
jv:function(a){return a.b?H.aj(a).getUTCMonth()+1:H.aj(a).getMonth()+1},
jr:function(a){return a.b?H.aj(a).getUTCDate()+0:H.aj(a).getDate()+0},
js:function(a){return a.b?H.aj(a).getUTCHours()+0:H.aj(a).getHours()+0},
ju:function(a){return a.b?H.aj(a).getUTCMinutes()+0:H.aj(a).getMinutes()+0},
jw:function(a){return a.b?H.aj(a).getUTCSeconds()+0:H.aj(a).getSeconds()+0},
jt:function(a){return a.b?H.aj(a).getUTCMilliseconds()+0:H.aj(a).getMilliseconds()+0},
p:function(a){throw H.a(H.al(a))},
f:function(a,b){if(a==null)J.ao(a)
throw H.a(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
z=H.F(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.W(b,a,"index",null,z)
return P.cF(b,"index",null)},
nm:function(a,b,c){if(a>c)return new P.cE(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cE(a,c,!0,b,"end","Invalid value")
return new P.aD(!0,b,"end",null)},
al:function(a){return new P.aD(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.eR()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hA})
z.name=""}else z.toString=H.hA
return z},
hA:function(){return J.ac(this.dartException)},
r:function(a){throw H.a(a)},
B:function(a){throw H.a(P.aO(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aQ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dc(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eQ(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fi()
u=$.$get$fj()
t=$.$get$fk()
s=$.$get$fl()
r=$.$get$fp()
q=$.$get$fq()
p=$.$get$fn()
$.$get$fm()
o=$.$get$fs()
n=$.$get$fr()
m=v.aa(y)
if(m!=null)return z.$1(H.dc(H.H(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.dc(H.H(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eQ(H.H(y),m))}}return z.$1(new H.kx(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f2()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aD(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f2()
return a},
bD:function(a){var z
if(a==null)return new H.fY(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fY(a)},
np:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nB:function(a,b,c,d,e,f){H.e(a,"$isc9")
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
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nB)
a.$identity=z
return z},
i_:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.O(d).$isd){z.$reflectionInfo=d
x=H.jG(z).r}else x=d
w=e?Object.create(new H.k3().constructor.prototype):Object.create(new H.d0(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aF
if(typeof u!=="number")return u.D()
$.aF=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ef(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ns,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.e8:H.d1
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ef(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hX:function(a,b,c,d){var z=H.d1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ef:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hX(y,!w,z,b)
if(y===0){w=$.aF
if(typeof w!=="number")return w.D()
$.aF=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bG
if(v==null){v=H.cs("self")
$.bG=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aF
if(typeof w!=="number")return w.D()
$.aF=w+1
t+=w
w="return function("+t+"){return this."
v=$.bG
if(v==null){v=H.cs("self")
$.bG=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
hY:function(a,b,c,d){var z,y
z=H.d1
y=H.e8
switch(b?-1:a){case 0:throw H.a(H.jQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hZ:function(a,b){var z,y,x,w,v,u,t,s
z=$.bG
if(z==null){z=H.cs("self")
$.bG=z}y=$.e7
if(y==null){y=H.cs("receiver")
$.e7=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aF
if(typeof y!=="number")return y.D()
$.aF=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aF
if(typeof y!=="number")return y.D()
$.aF=y+1
return new Function(z+y+"}")()},
dN:function(a,b,c,d,e,f,g){var z,y
z=J.bK(H.c5(b))
H.F(c)
y=!!J.O(d).$isd?J.bK(d):d
return H.i_(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aB(a,"String"))},
nn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"double"))},
nO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"num"))},
dL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aB(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aB(a,"int"))},
hx:function(a,b){throw H.a(H.aB(a,H.H(b).substring(3)))},
nQ:function(a,b){var z=J.aM(b)
throw H.a(H.hW(a,z.u(b,3,z.gm(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.hx(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.nQ(a,b)},
c5:function(a){if(a==null)return a
if(!!J.O(a).$isd)return a
throw H.a(H.aB(a,"List"))},
hu:function(a,b){if(a==null)return a
if(!!J.O(a).$isd)return a
if(J.O(a)[b])return a
H.hx(a,b)},
ho:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.F(z)]
else return a.$S()}return},
cl:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.ho(J.O(a))
if(z==null)return!1
y=H.hr(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dI)return a
$.dI=!0
try{if(H.cl(a,b))return a
z=H.cn(b)
y=H.aB(a,z)
throw H.a(y)}finally{$.dI=!1}},
dQ:function(a,b){if(a!=null&&!H.dM(a,b))H.r(H.aB(a,H.cn(b)))
return a},
hg:function(a){var z
if(a instanceof H.m){z=H.ho(J.O(a))
if(z!=null)return H.cn(z)
return"Closure"}return H.bl(a)},
nX:function(a){throw H.a(new P.i7(H.H(a)))},
hp:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b9:function(a){if(a==null)return
return a.$ti},
pu:function(a,b,c){return H.bE(a["$as"+H.j(c)],H.b9(b))},
b8:function(a,b,c,d){var z
H.H(c)
H.F(d)
z=H.bE(a["$as"+H.j(c)],H.b9(b))
return z==null?null:z[d]},
am:function(a,b,c){var z
H.H(b)
H.F(c)
z=H.bE(a["$as"+H.j(b)],H.b9(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.F(b)
z=H.b9(a)
return z==null?null:z[b]},
cn:function(a){var z=H.ba(a,null)
return z},
ba:function(a,b){var z,y
H.u(b,"$isd",[P.h],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dS(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.n4(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.b.D(t,b[r])
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
for(z=H.no(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.ba(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dS:function(a,b,c){var z,y,x,w,v,u
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
c2:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b9(a)
y=J.O(a)
if(y[b]==null)return!1
return H.hj(H.bE(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.H(b)
H.c5(c)
H.H(d)
if(a==null)return a
z=H.c2(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dS(c,0,null)
throw H.a(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hj:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aw(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aw(a[y],b,c[y],d))return!1
return!0},
ps:function(a,b,c){return a.apply(b,H.bE(J.O(b)["$as"+H.j(c)],H.b9(b)))},
ht:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="L"||a===-1||a===-2||H.ht(z)}return!1},
dM:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="L"||b===-1||b===-2||H.ht(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dM(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cl(a,b)}y=J.O(a).constructor
x=H.b9(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aw(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dM(a,b))throw H.a(H.aB(a,H.cn(b)))
return a},
aw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="L")return!0
if('func' in c)return H.hr(a,b,c,d)
if('func' in a)return c.builtin$cls==="c9"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aw("type" in a?a.type:null,b,x,d)
else if(H.aw(a,b,x,d))return!0
else{if(!('$is'+"bJ" in y.prototype))return!1
w=y.prototype["$as"+"bJ"]
v=H.bE(w,z?a.slice(1):null)
return H.aw(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cn(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hj(H.bE(r,z),b,u,d)},
hr:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aw(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aw(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aw(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aw(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nN(m,b,l,d)},
nN:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aw(c[w],d,a[w],b))return!1}return!0},
pt:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nE:function(a){var z,y,x,w,v,u
z=H.H($.hq.$1(a))
y=$.cR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cU[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.hi.$2(a,z))
if(z!=null){y=$.cR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cU[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cV(x)
$.cR[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cU[z]=x
return x}if(v==="-"){u=H.cV(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hw(a,x)
if(v==="*")throw H.a(P.cg(z))
if(init.leafTags[z]===true){u=H.cV(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hw(a,x)},
hw:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dT(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cV:function(a){return J.dT(a,!1,null,!!a.$isJ)},
nM:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cV(z)
else return J.dT(z,c,null,null)},
nz:function(){if(!0===$.dR)return
$.dR=!0
H.nA()},
nA:function(){var z,y,x,w,v,u,t,s
$.cR=Object.create(null)
$.cU=Object.create(null)
H.nv()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hy.$1(v)
if(u!=null){t=H.nM(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nv:function(){var z,y,x,w,v,u,t
z=C.T()
z=H.bA(C.Q,H.bA(C.V,H.bA(C.x,H.bA(C.x,H.bA(C.U,H.bA(C.R,H.bA(C.S(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hq=new H.nw(v)
$.hi=new H.nx(u)
$.hy=new H.ny(t)},
bA:function(a,b){return a(b)||b},
hz:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dV:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i2:{"^":"b;$ti",
i:function(a){return P.dg(this)},
p:function(a,b,c){H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
return H.i3()},
$isK:1},
i4:{"^":"i2;a,b,c,$ti",
gm:function(a){return this.a},
bw:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bw(0,b))return
return this.dm(b)},
dm:function(a){return this.b[H.H(a)]},
K:function(a,b){var z,y,x,w,v
z=H.z(this,1)
H.l(b,{func:1,ret:-1,args:[H.z(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.dm(v),z))}}},
jF:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jG:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bK(z)
y=z[0]
x=z[1]
return new H.jF(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kk:{"^":"b;a,b,c,d,e,f",
aa:function(a){var z,y,x
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
aJ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kk(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fo:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jk:{"^":"a9;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eQ:function(a,b){return new H.jk(a,b==null?null:b.method)}}},
iI:{"^":"a9;a,b,c",
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
return new H.iI(a,y,z?null:b.receiver)}}},
kx:{"^":"a9;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nZ:{"^":"m:19;a",
$1:function(a){if(!!J.O(a).$isa9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fY:{"^":"b;a,0b",
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
geI:function(){return this},
$isc9:1,
geI:function(){return this}},
f8:{"^":"m;"},
k3:{"^":"f8;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d0:{"^":"f8;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d0))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bQ(this.a)
else y=typeof z!=="object"?J.c6(z):H.bQ(z)
return(y^H.bQ(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bl(z)+"'")},
t:{
d1:function(a){return a.a},
e8:function(a){return a.c},
cs:function(a){var z,y,x,w,v
z=new H.d0("self","target","receiver","name")
y=J.bK(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kl:{"^":"a9;a",
i:function(a){return this.a},
t:{
aB:function(a,b){return new H.kl("TypeError: "+H.j(P.cv(a))+": type '"+H.hg(a)+"' is not a subtype of type '"+b+"'")}}},
hV:{"^":"a9;a",
i:function(a){return this.a},
t:{
hW:function(a,b){return new H.hV("CastError: "+H.j(P.cv(a))+": type '"+H.hg(a)+"' is not a subtype of type '"+b+"'")}}},
jP:{"^":"a9;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
jQ:function(a){return new H.jP(a)}}},
b6:{"^":"eI;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gii:function(a){return this.a===0},
ga6:function(a){return new H.iO(this,[H.z(this,0)])},
bw:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.di(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.di(y,b)}else return this.ie(b)},
ie:function(a){var z=this.d
if(z==null)return!1
return this.cI(this.c3(z,this.cH(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bp(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bp(w,b)
x=y==null?null:y.b
return x}else return this.ig(b)},
ig:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c3(z,this.cH(a))
x=this.cI(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c8()
this.b=z}this.da(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c8()
this.c=y}this.da(y,b,c)}else this.ih(b,c)},
ih:function(a,b){var z,y,x,w
H.A(a,H.z(this,0))
H.A(b,H.z(this,1))
z=this.d
if(z==null){z=this.c8()
this.d=z}y=this.cH(a)
x=this.c3(z,y)
if(x==null)this.cf(z,y,[this.c9(a,b)])
else{w=this.cI(x,a)
if(w>=0)x[w].b=b
else x.push(this.c9(a,b))}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aO(this))
z=z.c}},
da:function(a,b,c){var z
H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
z=this.bp(a,b)
if(z==null)this.cf(a,b,this.c9(b,c))
else z.b=c},
fu:function(){this.r=this.r+1&67108863},
c9:function(a,b){var z,y
z=new H.iN(H.A(a,H.z(this,0)),H.A(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fu()
return z},
cH:function(a){return J.c6(a)&0x3ffffff},
cI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.dg(this)},
bp:function(a,b){return a[b]},
c3:function(a,b){return a[b]},
cf:function(a,b,c){a[b]=c},
fn:function(a,b){delete a[b]},
di:function(a,b){return this.bp(a,b)!=null},
c8:function(){var z=Object.create(null)
this.cf(z,"<non-identifier-key>",z)
this.fn(z,"<non-identifier-key>")
return z},
$iseF:1},
iN:{"^":"b;a,b,0c,0d"},
iO:{"^":"er;a,$ti",
gm:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.iP(z,z.r,this.$ti)
y.c=z.e
return y}},
iP:{"^":"b;a,b,0c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aO(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nw:{"^":"m:19;a",
$1:function(a){return this.a(a)}},
nx:{"^":"m:56;a",
$2:function(a,b){return this.a(a,b)}},
ny:{"^":"m:55;a",
$1:function(a){return this.a(H.H(a))}},
iG:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseS:1,
$isjH:1,
t:{
iH:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a1("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
no:function(a){return J.eA(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
by:function(a){return a},
je:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aL(b,a))},
mZ:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nm(a,b,c))
return b},
eO:{"^":"t;",$iseO:1,"%":"ArrayBuffer"},
dl:{"^":"t;",$isdl:1,"%":"DataView;ArrayBufferView;dk|fS|fT|jf|fU|fV|b7"},
dk:{"^":"dl;",
gm:function(a){return a.length},
$isJ:1,
$asJ:I.dP},
jf:{"^":"fT;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
p:function(a,b,c){H.F(b)
H.nn(c)
H.aK(b,a,a.length)
a[b]=c},
$ascw:function(){return[P.q]},
$asy:function(){return[P.q]},
$isi:1,
$asi:function(){return[P.q]},
$isd:1,
$asd:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
b7:{"^":"fV;",
p:function(a,b,c){H.F(b)
H.F(c)
H.aK(b,a,a.length)
a[b]=c},
$ascw:function(){return[P.n]},
$asy:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}},
oz:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oA:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oB:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oC:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oD:{"^":"b7;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oE:{"^":"b7;",
gm:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dm:{"^":"b7;",
gm:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
bT:function(a,b,c){return new Uint8Array(a.subarray(b,H.mZ(b,c,a.length)))},
$isdm:1,
$isT:1,
"%":";Uint8Array"},
fS:{"^":"dk+y;"},
fT:{"^":"fS+cw;"},
fU:{"^":"dk+y;"},
fV:{"^":"fU+cw;"}}],["","",,P,{"^":"",
l6:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nb()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bB(new P.l8(z),1)).observe(y,{childList:true})
return new P.l7(z,y,x)}else if(self.setImmediate!=null)return P.nc()
return P.nd()},
pf:[function(a){self.scheduleImmediate(H.bB(new P.l9(H.l(a,{func:1,ret:-1})),0))},"$1","nb",4,0,12],
pg:[function(a){self.setImmediate(H.bB(new P.la(H.l(a,{func:1,ret:-1})),0))},"$1","nc",4,0,12],
ph:[function(a){P.dv(C.q,H.l(a,{func:1,ret:-1}))},"$1","nd",4,0,12],
dv:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.e.a5(a.a,1000)
return P.mh(z<0?0:z,b)},
fd:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bs]})
z=C.e.a5(a.a,1000)
return P.mi(z<0?0:z,b)},
n7:function(a,b){if(H.cl(a,{func:1,args:[P.b,P.aA]}))return b.iI(a,null,P.b,P.aA)
if(H.cl(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cq(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n6:function(){var z,y
for(;z=$.bz,z!=null;){$.c0=null
y=z.b
$.bz=y
if(y==null)$.c_=null
z.a.$0()}},
pr:[function(){$.dJ=!0
try{P.n6()}finally{$.c0=null
$.dJ=!1
if($.bz!=null)$.$get$dD().$1(P.hk())}},"$0","hk",0,0,3],
hf:function(a){var z=new P.fJ(H.l(a,{func:1,ret:-1}))
if($.bz==null){$.c_=z
$.bz=z
if(!$.dJ)$.$get$dD().$1(P.hk())}else{$.c_.b=z
$.c_=z}},
na:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bz
if(z==null){P.hf(a)
$.c0=$.c_
return}y=new P.fJ(a)
x=$.c0
if(x==null){y.b=z
$.c0=y
$.bz=y}else{y.b=x.b
x.b=y
$.c0=y
if(y.b==null)$.c_=y}},
nR:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.Y
if(C.j===y){P.cQ(null,null,C.j,a)
return}y.toString
P.cQ(null,null,y,H.l(y.co(a),z))},
fc:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.dv(a,b)}return P.dv(a,H.l(y.co(b),z))},
kh:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bs]}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.fd(a,b)}x=y.dL(b,P.bs)
$.Y.toString
return P.fd(a,H.l(x,z))},
cP:function(a,b,c,d,e){var z={}
z.a=d
P.na(new P.n8(z,e))},
hb:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.Y
if(y===c)return d.$0()
$.Y=c
z=y
try{y=d.$0()
return y}finally{$.Y=z}},
hc:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.Y
if(y===c)return d.$1(e)
$.Y=c
z=y
try{y=d.$1(e)
return y}finally{$.Y=z}},
n9:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.Y
if(y===c)return d.$2(e,f)
$.Y=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Y=z}},
cQ:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.co(d):c.hS(d,-1)
P.hf(d)},
l8:{"^":"m:25;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
l7:{"^":"m:53;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
l9:{"^":"m:0;a",
$0:function(){this.a.$0()}},
la:{"^":"m:0;a",
$0:function(){this.a.$0()}},
h1:{"^":"b;a,0b,c",
f9:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bB(new P.mk(this,b),0),a)
else throw H.a(P.E("`setTimeout()` not found."))},
fa:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bB(new P.mj(this,a,Date.now(),b),0),a)
else throw H.a(P.E("Periodic timer."))},
$isbs:1,
t:{
mh:function(a,b){var z=new P.h1(!0,0)
z.f9(a,b)
return z},
mi:function(a,b){var z=new P.h1(!1,0)
z.fa(a,b)
return z}}},
mk:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mj:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.eW(w,x)}z.c=y
this.d.$1(z)}},
bx:{"^":"b;0a,b,c,d,e,$ti",
ip:function(a){if(this.c!==6)return!0
return this.b.b.cV(H.l(this.d,{func:1,ret:P.U,args:[P.b]}),a.a,P.U,P.b)},
ic:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.cl(z,{func:1,args:[P.b,P.aA]}))return H.dQ(w.iR(z,a.a,a.b,null,y,P.aA),x)
else return H.dQ(w.cV(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b0:{"^":"b;dA:a<,b,0h9:c<,$ti",
eB:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Y
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.n7(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b0(0,$.Y,[c])
w=b==null?1:3
this.dc(new P.bx(x,w,a,b,[z,c]))
return x},
iV:function(a,b){return this.eB(a,null,b)},
dc:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbx")
this.c=a}else{if(z===2){y=H.e(this.c,"$isb0")
z=y.a
if(z<4){y.dc(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cQ(null,null,z,H.l(new P.lq(this,a),{func:1,ret:-1}))}},
dt:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbx")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isb0")
y=u.a
if(y<4){u.dt(a)
return}this.a=y
this.c=u.c}z.a=this.bs(a)
y=this.b
y.toString
P.cQ(null,null,y,H.l(new P.lv(z,this),{func:1,ret:-1}))}},
cb:function(){var z=H.e(this.c,"$isbx")
this.c=null
return this.bs(z)},
bs:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
df:function(a){var z,y,x,w
z=H.z(this,0)
H.dQ(a,{futureOr:1,type:z})
y=this.$ti
x=H.c2(a,"$isbJ",y,"$asbJ")
if(x){z=H.c2(a,"$isb0",y,null)
if(z)P.fN(a,this)
else P.lr(a,this)}else{w=this.cb()
H.A(a,z)
this.a=4
this.c=a
P.bW(this,w)}},
bZ:[function(a,b){var z
H.e(b,"$isaA")
z=this.cb()
this.a=8
this.c=new P.ap(a,b)
P.bW(this,z)},function(a){return this.bZ(a,null)},"j2","$2","$1","gfi",4,2,51],
$isbJ:1,
t:{
lr:function(a,b){var z,y,x
b.a=1
try{a.eB(new P.ls(b),new P.lt(b),null)}catch(x){z=H.ab(x)
y=H.bD(x)
P.nR(new P.lu(b,z,y))}},
fN:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isb0")
if(z>=4){y=b.cb()
b.a=a.a
b.c=a.c
P.bW(b,y)}else{y=H.e(b.c,"$isbx")
b.a=2
b.c=a
a.dt(y)}},
bW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isap")
y=y.b
u=v.a
t=v.b
y.toString
P.cP(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bW(z.a,b)}y=z.a
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
P.cP(null,null,y,u,t)
return}o=$.Y
if(o==null?q!=null:o!==q)$.Y=q
else o=null
y=b.c
if(y===8)new P.ly(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lx(x,b,r).$0()}else if((y&2)!==0)new P.lw(z,x,b).$0()
if(o!=null)$.Y=o
y=x.b
if(!!J.O(y).$isbJ){if(y.a>=4){n=H.e(t.c,"$isbx")
t.c=null
b=t.bs(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fN(y,t)
return}}m=b.b
n=H.e(m.c,"$isbx")
m.c=null
b=m.bs(n)
y=x.a
u=x.b
if(!y){H.A(u,H.z(m,0))
m.a=4
m.c=u}else{H.e(u,"$isap")
m.a=8
m.c=u}z.a=m
y=m}}}},
lq:{"^":"m:0;a,b",
$0:function(){P.bW(this.a,this.b)}},
lv:{"^":"m:0;a,b",
$0:function(){P.bW(this.b,this.a.a)}},
ls:{"^":"m:25;a",
$1:function(a){var z=this.a
z.a=0
z.df(a)}},
lt:{"^":"m:50;a",
$2:function(a,b){this.a.bZ(a,H.e(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
lu:{"^":"m:0;a,b,c",
$0:function(){this.a.bZ(this.b,this.c)}},
ly:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ey(H.l(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bD(v)
if(this.d){w=H.e(this.a.a.c,"$isap").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isap")
else u.b=new P.ap(y,x)
u.a=!0
return}if(!!J.O(z).$isbJ){if(z instanceof P.b0&&z.gdA()>=4){if(z.gdA()===8){w=this.b
w.b=H.e(z.gh9(),"$isap")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iV(new P.lz(t),null)
w.a=!1}}},
lz:{"^":"m:48;a",
$1:function(a){return this.a}},
lx:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.A(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cV(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bD(t)
x=this.a
x.b=new P.ap(z,y)
x.a=!0}}},
lw:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isap")
w=this.c
if(w.ip(z)&&w.e!=null){v=this.b
v.b=w.ic(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bD(u)
w=H.e(this.a.a.c,"$isap")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ap(y,x)
s.a=!0}}},
fJ:{"^":"b;a,0b"},
ds:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b0(0,$.Y,[P.n])
z.a=0
this.io(new P.k6(z,this),!0,new P.k7(z,y),y.gfi())
return y}},
k6:{"^":"m;a,b",
$1:function(a){H.A(a,H.am(this.b,"ds",0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.am(this.b,"ds",0)]}}},
k7:{"^":"m:0;a,b",
$0:function(){this.b.df(this.a.a)}},
f5:{"^":"b;$ti"},
k5:{"^":"b;"},
bs:{"^":"b;"},
ap:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isa9:1},
mN:{"^":"b;",$ispe:1},
n8:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eR()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lT:{"^":"mN;",
iS:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.Y){a.$0()
return}P.hb(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cP(null,null,this,z,H.e(y,"$isaA"))}},
iT:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.Y){a.$1(b)
return}P.hc(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cP(null,null,this,z,H.e(y,"$isaA"))}},
hS:function(a,b){return new P.lV(this,H.l(a,{func:1,ret:b}),b)},
co:function(a){return new P.lU(this,H.l(a,{func:1,ret:-1}))},
dL:function(a,b){return new P.lW(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
ey:function(a,b){H.l(a,{func:1,ret:b})
if($.Y===C.j)return a.$0()
return P.hb(null,null,this,a,b)},
cV:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Y===C.j)return a.$1(b)
return P.hc(null,null,this,a,b,c,d)},
iR:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Y===C.j)return a.$2(b,c)
return P.n9(null,null,this,a,b,c,d,e,f)},
iI:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
lV:{"^":"m;a,b,c",
$0:function(){return this.a.ey(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lU:{"^":"m:3;a,b",
$0:function(){return this.a.iS(this.b)}},
lW:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.iT(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iQ:function(a,b,c,d,e){return new H.b6(0,0,[d,e])},
iR:function(a,b,c){H.c5(a)
return H.u(H.np(a,new H.b6(0,0,[b,c])),"$iseF",[b,c],"$aseF")},
de:function(a,b){return new H.b6(0,0,[a,b])},
cd:function(a,b,c,d){return new P.lG(0,0,[d])},
iB:function(a,b,c){var z,y
if(P.dK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c1()
C.a.h(y,a)
try{P.n5(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f6(b,H.hu(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d7:function(a,b,c){var z,y,x
if(P.dK(a))return b+"..."+c
z=new P.an(b)
y=$.$get$c1()
C.a.h(y,a)
try{x=z
x.a=P.f6(x.gaN(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaN()+c
y=z.gaN()
return y.charCodeAt(0)==0?y:y},
dK:function(a){var z,y
for(z=0;y=$.$get$c1(),z<y.length;++z)if(a===y[z])return!0
return!1},
n5:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.j(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.E();t=s,s=r){r=z.gN(z);++x
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
iS:function(a,b,c){var z=P.iQ(null,null,null,b,c)
a.K(0,new P.iT(z,b,c))
return z},
eG:function(a,b){var z,y
z=P.cd(null,null,null,b)
for(y=J.b2(a);y.E();)z.h(0,H.A(y.gN(y),b))
return z},
dg:function(a){var z,y,x
z={}
if(P.dK(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$c1(),a)
x=y
x.a=x.gaN()+"{"
z.a=!0
J.dZ(a,new P.iY(z,y))
z=y
z.a=z.gaN()+"}"}finally{z=$.$get$c1()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaN()
return z.charCodeAt(0)==0?z:z},
lG:{"^":"lA;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){var z=new P.fR(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
X:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscM")!=null}else{y=this.fj(b)
return y}},
fj:function(a){var z=this.d
if(z==null)return!1
return this.c1(this.dn(z,a),a)>=0},
h:function(a,b){var z,y
H.A(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dF()
this.b=z}return this.dd(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dF()
this.c=y}return this.dd(y,b)}else return this.fb(0,b)},
fb:function(a,b){var z,y,x
H.A(b,H.z(this,0))
z=this.d
if(z==null){z=P.dF()
this.d=z}y=this.dg(b)
x=z[y]
if(x==null)z[y]=[this.bY(b)]
else{if(this.c1(x,b)>=0)return!1
x.push(this.bY(b))}return!0},
O:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.du(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.du(this.c,b)
else return this.h2(0,b)},
h2:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dn(z,b)
x=this.c1(y,b)
if(x<0)return!1
this.dC(y.splice(x,1)[0])
return!0},
dd:function(a,b){H.A(b,H.z(this,0))
if(H.e(a[b],"$iscM")!=null)return!1
a[b]=this.bY(b)
return!0},
du:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscM")
if(z==null)return!1
this.dC(z)
delete a[b]
return!0},
de:function(){this.r=this.r+1&67108863},
bY:function(a){var z,y
z=new P.cM(H.A(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.de()
return z},
dC:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.de()},
dg:function(a){return J.c6(a)&0x3ffffff},
dn:function(a,b){return a[this.dg(b)]},
c1:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
t:{
dF:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cM:{"^":"b;a,0b,0c"},
fR:{"^":"b;a,b,0c,0d,$ti",
gN:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aO(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.z(this,0))
this.c=z.b
return!0}}}},
lA:{"^":"jR;"},
iT:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.p(0,H.A(a,this.b),H.A(b,this.c))}},
cA:{"^":"lH;",$isi:1,$isd:1},
y:{"^":"b;$ti",
gZ:function(a){return new H.df(a,this.gm(a),0,[H.b8(this,a,"y",0)])},
I:function(a,b){return this.k(a,b)},
iX:function(a,b){var z,y,x
z=H.c([],[H.b8(this,a,"y",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.p(z,y,this.k(a,y));++y}return z},
iW:function(a){return this.iX(a,!0)},
aG:function(a,b,c,d){var z
H.A(d,H.b8(this,a,"y",0))
P.aT(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.d7(a,"[","]")}},
eI:{"^":"ai;"},
iY:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ai:{"^":"b;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b8(this,a,"ai",0),H.b8(this,a,"ai",1)]})
for(z=J.b2(this.ga6(a));z.E();){y=z.gN(z)
b.$2(y,this.k(a,y))}},
gm:function(a){return J.ao(this.ga6(a))},
i:function(a){return P.dg(a)},
$isK:1},
mp:{"^":"b;$ti",
p:function(a,b,c){H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
throw H.a(P.E("Cannot modify unmodifiable map"))}},
iZ:{"^":"b;$ti",
k:function(a,b){return J.dY(this.a,b)},
p:function(a,b,c){J.cX(this.a,H.A(b,H.z(this,0)),H.A(c,H.z(this,1)))},
K:function(a,b){J.dZ(this.a,H.l(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]}))},
gm:function(a){return J.ao(this.a)},
i:function(a){return J.ac(this.a)},
$isK:1},
fz:{"^":"mq;a,$ti"},
jT:{"^":"b;$ti",
ar:function(a,b){var z
for(z=J.b2(H.u(b,"$isi",this.$ti,"$asi"));z.E();)this.h(0,z.gN(z))},
i:function(a){return P.d7(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e2("index"))
if(b<0)H.r(P.a4(b,0,null,"index",null))
for(z=new P.fR(this,this.r,this.$ti),z.c=this.e,y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
$isi:1},
jR:{"^":"jT;"},
lH:{"^":"b+y;"},
mq:{"^":"iZ+mp;$ti"}}],["","",,P,{"^":"",hS:{"^":"c7;a",
is:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aT(c,d,b.length,null,null,null)
z=$.$get$fL()
if(typeof d!=="number")return H.p(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cT(C.b.H(b,s))
o=H.cT(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.u(b,x,y)
w.a+=H.bR(r)
x=s
continue}}throw H.a(P.a1("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.e5(b,u,d,v,t,k)
else{j=C.e.bm(k-1,4)+1
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b_(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.e5(b,u,d,v,t,i)
else{j=C.e.bm(i,4)
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b_(b,d,d,j===2?"==":"=")}return b},
$asc7:function(){return[[P.d,P.n],P.h]},
t:{
e5:function(a,b,c,d,e,f){if(C.e.bm(f,4)!==0)throw H.a(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a1("Invalid base64 padding, more than two '=' characters",a,b))}}},hT:{"^":"b4;a",
$asb4:function(){return[[P.d,P.n],P.h]}},c7:{"^":"b;$ti"},b4:{"^":"k5;$ti"},ij:{"^":"c7;",
$asc7:function(){return[P.h,[P.d,P.n]]}},iy:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},ix:{"^":"b4;a",
fk:function(a,b,c){var z,y,x,w,v,u
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
if(c>b)v.a+=J.hN(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb4:function(){return[P.h,P.h]}},kL:{"^":"ij;a",
gi4:function(){return C.L}},kS:{"^":"b4;",
b5:function(a,b,c){var z,y,x,w
z=a.length
P.aT(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mL(0,0,x)
if(w.fp(a,b,z)!==z)w.dE(J.hG(a,z-1),0)
return C.a1.bT(x,0,w.b)},
cu:function(a){return this.b5(a,0,null)},
$asb4:function(){return[P.h,[P.d,P.n]]}},mL:{"^":"b;a,b,c",
dE:function(a,b){var z,y,x,w,v
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
fp:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dE(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kM:{"^":"b4;a",
b5:function(a,b,c){var z,y,x,w,v
H.u(a,"$isd",[P.n],"$asd")
z=P.kN(!1,a,b,c)
if(z!=null)return z
y=J.ao(a)
P.aT(b,c,y,null,null,null)
x=new P.an("")
w=new P.mI(!1,x,!0,0,0,0)
w.b5(a,b,y)
w.i8(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cu:function(a){return this.b5(a,0,null)},
$asb4:function(){return[[P.d,P.n],P.h]},
t:{
kN:function(a,b,c,d){H.u(b,"$isd",[P.n],"$asd")
if(b instanceof Uint8Array)return P.kO(!1,b,c,d)
return},
kO:function(a,b,c,d){var z,y,x
z=$.$get$fE()
if(z==null)return
y=0===c
if(y&&!0)return P.dA(z,b)
x=b.length
d=P.aT(c,d,x,null,null,null)
if(y&&d===x)return P.dA(z,b)
return P.dA(z,b.subarray(c,d))},
dA:function(a,b){if(P.kQ(b))return
return P.kR(a,b)},
kR:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
kQ:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kP:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},mI:{"^":"b;a,b,c,d,e,f",
i8:function(a,b,c){var z
H.u(b,"$isd",[P.n],"$asd")
if(this.e>0){z=P.a1("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(a,"$isd",[P.n],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mK(c)
v=new P.mJ(this,b,c,a)
$label0$0:for(u=J.aM(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bR()
if((r&192)!==128){q=P.a1("Bad UTF-8 encoding 0x"+C.e.bi(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.z,q)
if(z<=C.z[q]){q=P.a1("Overlong encoding of 0x"+C.e.bi(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a1("Character outside valid Unicode range: 0x"+C.e.bi(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bR(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d3()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.a1("Negative UTF-8 code unit: -0x"+C.e.bi(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a1("Bad UTF-8 encoding 0x"+C.e.bi(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mK:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
H.u(a,"$isd",[P.n],"$asd")
z=this.a
for(y=J.aM(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bR()
if((w&127)!==w)return x-b}return z-b}},mJ:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cf(this.d,a,b)}}}],["","",,P,{"^":"",
cm:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jy(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a1(a,null,null))},
il:function(a){var z=J.O(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bl(a)+"'"},
iU:function(a,b,c,d){var z,y
H.A(b,d)
z=J.iD(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.u(z,"$isd",[d],"$asd")},
iV:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gZ(a);x.E();)C.a.h(y,H.A(x.gN(x),c))
if(b)return y
return H.u(J.bK(y),"$isd",z,"$asd")},
cf:function(a,b,c){var z,y
z=P.n
H.u(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.u(a,"$isbh",[z],"$asbh")
y=a.length
c=P.aT(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.S()
z=c<y}else z=!0
return H.eV(z?C.a.bT(a,b,c):a)}if(!!J.O(a).$isdm)return H.jA(a,b,P.aT(b,c,a.length,null,null,null))
return P.k8(a,b,c)},
k8:function(a,b,c){var z,y,x,w
H.u(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a4(b,0,J.ao(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a4(c,b,J.ao(a),null,null))
y=J.b2(a)
for(x=0;x<b;++x)if(!y.E())throw H.a(P.a4(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gN(y))
else for(x=b;x<c;++x){if(!y.E())throw H.a(P.a4(c,b,x,null,null))
w.push(y.gN(y))}return H.eV(w)},
jI:function(a,b,c){return new H.iG(a,H.iH(a,!1,!0,!1))},
fB:function(){var z=H.jq()
if(z!=null)return P.kD(z,0,null)
throw H.a(P.E("'Uri.base' is not supported"))},
cv:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.il(a)},
v:function(a){return new P.fM(a)},
iW:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
dU:function(a){H.nP(a)},
kD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.fA(b>0||c<c?C.b.u(a,b,c):a,5,null).geF()
else if(y===32)return P.fA(C.b.u(a,z,c),0,null).geF()}x=new Array(8)
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
if(P.hd(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.iZ()
if(v>=b)if(P.hd(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.S()
if(typeof r!=="number")return H.p(r)
if(q<r)r=q
if(typeof s!=="number")return s.S()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.S()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.S()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a8(a,"..",s)))n=r>s+2&&C.b.a8(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a8(a,"file",b)){if(u<=b){if(!C.b.a8(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b_(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a8(a,"http",b)){if(x&&t+3===s&&C.b.a8(a,"80",t+1))if(b===0&&!0){a=C.b.b_(a,t,s,"")
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
else if(v===z&&C.b.a8(a,"https",b)){if(x&&t+4===s&&C.b.a8(a,"443",t+1))if(b===0&&!0){a=C.b.b_(a,t,s,"")
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
q-=b}return new P.m1(a,v,u,t,s,r,q,o)}return P.mr(a,b,c,v,u,t,s,r,q,o)},
fD:function(a,b){var z=P.h
return C.a.i9(H.c(a.split("&"),[z]),P.de(z,z),new P.kG(b),[P.K,P.h,P.h])},
kB:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kC(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Y(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cm(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.d3()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cm(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.d3()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kE(a)
y=new P.kF(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Y(a,w)
if(s===58){if(w===b){++w
if(C.b.Y(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gav(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kB(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.e.aQ(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
n_:function(){var z,y,x,w,v
z=P.iW(22,new P.n1(),!0,P.T)
y=new P.n0(z)
x=new P.n2()
w=new P.n3()
v=H.e(y.$2(0,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isT")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isT")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isT"),"]",5)
v=H.e(y.$2(9,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isT")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isT"),"az",21)
v=H.e(y.$2(21,245),"$isT")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hd:function(a,b,c,d,e){var z,y,x,w,v
H.u(e,"$isd",[P.n],"$asd")
z=$.$get$he()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
U:{"^":"b;"},
"+bool":0,
aq:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aq))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.e.aQ(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.i9(H.jx(this))
y=P.c8(H.jv(this))
x=P.c8(H.jr(this))
w=P.c8(H.js(this))
v=P.c8(H.ju(this))
u=P.c8(H.jw(this))
t=P.ia(H.jt(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
i9:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ia:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c8:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"a5;"},
"+double":0,
be:{"^":"b;a",
j:function(a,b){return new P.be(C.e.ad(this.a*b))},
S:function(a,b){return C.e.S(this.a,H.e(b,"$isbe").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ie()
y=this.a
if(y<0)return"-"+new P.be(0-y).i(0)
x=z.$1(C.e.a5(y,6e7)%60)
w=z.$1(C.e.a5(y,1e6)%60)
v=new P.id().$1(y%1e6)
return""+C.e.a5(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
eq:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
id:{"^":"m:31;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ie:{"^":"m:31;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a9:{"^":"b;"},
eR:{"^":"a9;",
i:function(a){return"Throw of null."}},
aD:{"^":"a9;a,b,c,d",
gc0:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc_:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gc0()+y+x
if(!this.a)return w
v=this.gc_()
u=P.cv(this.b)
return w+v+": "+H.j(u)},
t:{
cp:function(a){return new P.aD(!1,null,null,a)},
cq:function(a,b,c){return new P.aD(!0,a,b,c)},
e2:function(a){return new P.aD(!1,null,a,"Must not be null")}}},
cE:{"^":"aD;e,f,a,b,c,d",
gc0:function(){return"RangeError"},
gc_:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
cF:function(a,b,c){return new P.cE(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.cE(b,c,!0,a,d,"Invalid value")},
aT:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.a(P.a4(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.a(P.a4(b,a,c,"end",f))
return b}return c}}},
iz:{"^":"aD;e,m:f>,a,b,c,d",
gc0:function(){return"RangeError"},
gc_:function(){if(J.hC(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
W:function(a,b,c,d,e){var z=H.F(e!=null?e:J.ao(b))
return new P.iz(b,z,!0,a,c,"Index out of range")}}},
kz:{"^":"a9;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
E:function(a){return new P.kz(a)}}},
kw:{"^":"a9;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
cg:function(a){return new P.kw(a)}}},
dr:{"^":"a9;a",
i:function(a){return"Bad state: "+this.a},
t:{
f4:function(a){return new P.dr(a)}}},
i1:{"^":"a9;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cv(z))+"."},
t:{
aO:function(a){return new P.i1(a)}}},
jl:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa9:1},
f2:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa9:1},
i7:{"^":"a9;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fM:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
it:{"^":"b;a,b,c",
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
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
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
m=""}l=C.b.u(w,o,p)
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
t:{
a1:function(a,b,c){return new P.it(a,b,c)}}},
c9:{"^":"b;"},
n:{"^":"a5;"},
"+int":0,
i:{"^":"b;$ti",
cY:["eR",function(a,b){var z=H.am(this,"i",0)
return new H.dC(this,H.l(b,{func:1,ret:P.U,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gZ(this)
for(y=0;z.E();)++y
return y},
gaI:function(a){var z,y
z=this.gZ(this)
if(!z.E())throw H.a(H.d8())
y=z.gN(z)
if(z.E())throw H.a(H.iC())
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e2("index"))
if(b<0)H.r(P.a4(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.E();){x=z.gN(z)
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
i:function(a){return P.iB(this,"(",")")}},
d9:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
K:{"^":"b;$ti"},
L:{"^":"b;",
gV:function(a){return P.b.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a5:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gV:function(a){return H.bQ(this)},
i:function(a){return"Instance of '"+H.bl(this)+"'"},
toString:function(){return this.i(this)}},
aA:{"^":"b;"},
h:{"^":"b;",$iseS:1},
"+String":0,
an:{"^":"b;aN:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoZ:1,
t:{
f6:function(a,b,c){var z=J.b2(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gN(z))
while(z.E())}else{a+=H.j(z.gN(z))
for(;z.E();)a=a+c+H.j(z.gN(z))}return a}}},
kG:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.u(a,"$isK",[z,z],"$asK")
H.H(b)
y=J.aM(b).eg(b,"=")
if(y===-1){if(b!=="")J.cX(a,P.dH(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.ao(b,y+1)
z=this.a
J.cX(a,P.dH(x,0,x.length,z,!0),P.dH(w,0,w.length,z,!0))}return a}},
kC:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv4 address, "+a,this.a,b))}},
kE:{"^":"m:44;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kF:{"^":"m:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cm(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.S()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cN:{"^":"b;bS:a<,b,c,d,eq:e>,f,r,0x,0y,0z,0Q,0ch",
geG:function(){return this.b},
gcG:function(a){var z=this.c
if(z==null)return""
if(C.b.a3(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbN:function(a){var z=this.d
if(z==null)return P.h2(this.a)
return z},
gcQ:function(a){var z=this.f
return z==null?"":z},
geb:function(){var z=this.r
return z==null?"":z},
cU:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
g=P.dG(g,0,0,h)
return new P.cN(i,j,c,f,d,g,this.r)},
ew:function(a,b){return this.cU(a,null,null,null,null,null,null,b,null,null)},
gcR:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fz(P.fD(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gec:function(){return this.c!=null},
gef:function(){return this.f!=null},
ged:function(){return this.r!=null},
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
z=J.O(b)
if(!!z.$isdz){y=this.a
x=b.gbS()
if(y==null?x==null:y===x)if(this.c!=null===b.gec()){y=this.b
x=b.geG()
if(y==null?x==null:y===x){y=this.gcG(this)
x=z.gcG(b)
if(y==null?x==null:y===x){y=this.gbN(this)
x=z.gbN(b)
if(y==null?x==null:y===x)if(this.e===z.geq(b)){y=this.f
x=y==null
if(!x===b.gef()){if(x)y=""
if(y===z.gcQ(b)){z=this.r
y=z==null
if(!y===b.ged()){if(y)z=""
z=z===b.geb()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gV:function(a){var z=this.z
if(z==null){z=C.b.gV(this.i(0))
this.z=z}return z},
$isdz:1,
t:{
ck:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$isd",[P.n],"$asd")
if(c===C.k){z=$.$get$h7().b
if(typeof b!=="string")H.r(H.al(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.am(c,"c7",0))
y=c.gi4().cu(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bR(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mr:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mC(a,b,d)
else{if(d===b)P.bX(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mD(a,z,e-1):""
x=P.mw(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.mz(P.cm(C.b.u(a,w,g),new P.ms(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mx(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.S()
t=h<i?P.dG(a,h+1,i,null):null
return new P.cN(j,y,x,v,u,t,i<c?P.mv(a,i+1,c):null)},
h2:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bX:function(a,b,c){throw H.a(P.a1(c,a,b))},
mz:function(a,b){if(a!=null&&a===P.h2(b))return
return a},
mw:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.Y(a,z)!==93)P.bX(a,b,"Missing end `]` to match `[` in host")
P.fC(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.Y(a,y)===58){P.fC(a,b,c)
return"["+a+"]"}return P.mF(a,b,c)},
mF:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Y(a,z)
if(v===37){u=P.h9(a,z,!0)
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
if(t)P.bX(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Y(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h3(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mC:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h5(C.b.H(a,b)))P.bX(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bX(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.mt(y?a.toLowerCase():a)},
mt:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mD:function(a,b,c){return P.bY(a,b,c,C.Z)},
mx:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bY(a,b,c,C.D):C.w.jD(d,new P.my(),P.h).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a3(w,"/"))w="/"+w
return P.mE(w,e,f)},
mE:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a3(a,"/"))return P.mG(a,!z||c)
return P.mH(a)},
dG:function(a,b,c,d){var z,y
z={}
H.u(d,"$isK",[P.h,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.cp("Both query and queryParameters specified"))
return P.bY(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.K(0,new P.mA(new P.mB(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mv:function(a,b,c){return P.bY(a,b,c,C.n)},
h9:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Y(a,b+1)
x=C.b.Y(a,z)
w=H.cT(y)
v=H.cT(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aQ(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bR(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
h3:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.p(y,0,37)
C.a.p(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.e.hh(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.cf(y,0,null)},
bY:function(a,b,c,d){var z=P.h8(a,b,c,H.u(d,"$isd",[P.n],"$asd"),!1)
return z==null?C.b.u(a,b,c):z},
h8:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$isd",[P.n],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.S()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.Y(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.h9(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bX(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Y(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h3(v)}}if(w==null)w=new P.an("")
w.a+=C.b.u(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.S()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h6:function(a){if(C.b.a3(a,"."))return!0
return C.b.eg(a,"/.")!==-1},
mH:function(a){var z,y,x,w,v,u,t
if(!P.h6(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.S(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
mG:function(a,b){var z,y,x,w,v,u
if(!P.h6(a))return!b?P.h4(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gav(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gav(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.p(z,0,P.h4(z[0]))}return C.a.n(z,"/")},
h4:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h5(J.hD(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.ao(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mu:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cp("Invalid URL encoding"))}}return z},
dH:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c4(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.u(a,b,c)
else u=new H.w(y.u(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.cp("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cp("Truncated URI"))
C.a.h(u,P.mu(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.u(u,"$isd",[P.n],"$asd")
return new P.kM(!1).cu(u)},
h5:function(a){var z=a|32
return 97<=z&&z<=122}}},
ms:{"^":"m:42;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.a1("Invalid port",this.a,z+1))}},
my:{"^":"m:28;",
$1:function(a){return P.ck(C.a_,a,C.k,!1)}},
mB:{"^":"m:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.ck(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.ck(C.p,b,C.k,!0))}}},
mA:{"^":"m:40;a",
$2:function(a,b){var z,y
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(z=J.b2(H.hu(b,"$isi")),y=this.a;z.E();)y.$2(a,H.H(z.gN(z)))}},
kA:{"^":"b;a,b,c",
geF:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.eh(y,"?",z)
w=y.length
if(x>=0){v=P.bY(y,x+1,w,C.n)
w=x}else v=null
z=new P.lf(this,"data",null,null,null,P.bY(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fA:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a1("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a1("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gav(z)
if(v!==44||x!==t+7||!C.b.a8(a,"base64",t+1))throw H.a(P.a1("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.is(0,a,s,y)
else{r=P.h8(a,s,y,C.n,!0)
if(r!=null)a=C.b.b_(a,s,y,r)}return new P.kA(a,z,c)}}},
n1:{"^":"m:38;",
$1:function(a){return new Uint8Array(96)}},
n0:{"^":"m:36;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hH(z,0,96,b)
return z}},
n2:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
n3:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m1:{"^":"b;a,b,c,d,e,f,r,x,0y",
gec:function(){return this.c>0},
gee:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gef:function(){var z=this.f
if(typeof z!=="number")return z.S()
return z<this.r},
ged:function(){return this.r<this.a.length},
gdq:function(){return this.b===4&&C.b.a3(this.a,"http")},
gdr:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbS:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdq()){this.x="http"
z="http"}else if(this.gdr()){this.x="https"
z="https"}else if(z===4&&C.b.a3(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a3(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
geG:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcG:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbN:function(a){var z
if(this.gee()){z=this.d
if(typeof z!=="number")return z.D()
return P.cm(C.b.u(this.a,z+1,this.e),null,null)}if(this.gdq())return 80
if(this.gdr())return 443
return 0},
geq:function(a){return C.b.u(this.a,this.e,this.f)},
gcQ:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.S()
return z<y?C.b.u(this.a,z+1,y):""},
geb:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ao(y,z+1):""},
gcR:function(){var z=this.f
if(typeof z!=="number")return z.S()
if(z>=this.r)return C.a0
z=P.h
return new P.fz(P.fD(this.gcQ(this),C.k),[z,z])},
cU:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isK",[P.h,null],"$asK")
i=this.gbS()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.gee()?this.gbN(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a3(d,"/"))d="/"+d
g=P.dG(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ao(y,x+1)
return new P.cN(i,j,c,f,d,g,b)},
ew:function(a,b){return this.cU(a,null,null,null,null,null,null,b,null,null)},
gV:function(a){var z=this.y
if(z==null){z=C.b.gV(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.O(b)
if(!!z.$isdz)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdz:1},
lf:{"^":"cN;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e1:function(a){var z=document.createElement("a")
return z},
ed:function(a,b){var z=document.createElement("canvas")
return z},
ig:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).ak(z,a,b,c)
y.toString
z=W.G
z=new H.dC(new W.av(y),H.l(new W.ih(),{func:1,ret:P.U,args:[z]}),[z])
return H.e(z.gaI(z),"$isV")},
ii:function(a){H.e(a,"$isaf")
return"wheel"},
bH:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hK(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
iA:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isez")
try{J.hM(z,a)}catch(x){H.ab(x)}return z},
cK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fQ:function(a,b,c,d){var z,y
z=W.cK(W.cK(W.cK(W.cK(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hh:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.Y
if(z===C.j)return a
return z.dL(a,b)},
a0:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
o_:{"^":"t;0m:length=","%":"AccessibleNodeList"},
o0:{"^":"a0;0a2:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
o1:{"^":"a0;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e6:{"^":"a0;",$ise6:1,"%":"HTMLBaseElement"},
d_:{"^":"t;",$isd_:1,"%":";Blob"},
cr:{"^":"a0;",$iscr:1,"%":"HTMLBodyElement"},
o7:{"^":"a0;0a2:type}","%":"HTMLButtonElement"},
d2:{"^":"a0;",
d2:function(a,b,c){var z=a.getContext(b,P.ne(c,null))
return z},
$isd2:1,
"%":"HTMLCanvasElement"},
o9:{"^":"G;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ob:{"^":"i6;0m:length=","%":"CSSPerspective"},
bc:{"^":"t;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oc:{"^":"le;0m:length=",
eK:function(a,b){var z=a.getPropertyValue(this.ff(a,b))
return z==null?"":z},
ff:function(a,b){var z,y
z=$.$get$ei()
y=z[b]
if(typeof y==="string")return y
y=this.hi(a,b)
z[b]=y
return y},
hi:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ib()+b
if(z in a)return z
return b},
gcp:function(a){return a.bottom},
gau:function(a){return a.height},
gaX:function(a){return a.left},
gbg:function(a){return a.right},
gbj:function(a){return a.top},
gay:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i5:{"^":"b;",
gaX:function(a){return this.eK(a,"left")}},
ej:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
i6:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
od:{"^":"ej;0m:length=","%":"CSSTransformValue"},
oe:{"^":"ej;0m:length=","%":"CSSUnparsedValue"},
of:{"^":"t;0m:length=","%":"DataTransferItemList"},
bd:{"^":"a0;",$isbd:1,"%":"HTMLDivElement"},
og:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
oh:{"^":"lh;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.u(c,"$isae",[P.a5],"$asae")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[[P.ae,P.a5]]},
$asy:function(){return[[P.ae,P.a5]]},
$isi:1,
$asi:function(){return[[P.ae,P.a5]]},
$isd:1,
$asd:function(){return[[P.ae,P.a5]]},
$asD:function(){return[[P.ae,P.a5]]},
"%":"ClientRectList|DOMRectList"},
ic:{"^":"t;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gay(a))+" x "+H.j(this.gau(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.c2(b,"$isae",[P.a5],"$asae")
if(!z)return!1
z=J.aC(b)
return a.left===z.gaX(b)&&a.top===z.gbj(b)&&this.gay(a)===z.gay(b)&&this.gau(a)===z.gau(b)},
gV:function(a){return W.fQ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gay(a)&0x1FFFFFFF,this.gau(a)&0x1FFFFFFF)},
gcp:function(a){return a.bottom},
gau:function(a){return a.height},
gaX:function(a){return a.left},
gbg:function(a){return a.right},
gbj:function(a){return a.top},
gay:function(a){return a.width},
$isae:1,
$asae:function(){return[P.a5]},
"%":";DOMRectReadOnly"},
oi:{"^":"lj;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[P.h]},
$asy:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asD:function(){return[P.h]},
"%":"DOMStringList"},
oj:{"^":"t;0m:length=","%":"DOMTokenList"},
ld:{"^":"cA;dl:a<,b",
gm:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isV")},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isV")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.iW(this)
return new J.aE(z,z.length,0,[H.z(z,0)])},
aG:function(a,b,c,d){throw H.a(P.cg(null))},
$asy:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
V:{"^":"G;0iU:tagName=",
ghR:function(a){return new W.lk(a)},
gct:function(a){return new W.ld(a,a.children)},
gdM:function(a){return P.jE(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a5)},
i:function(a){return a.localName},
ak:["bU",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.et
if(z==null){z=H.c([],[W.aI])
y=new W.eP(z)
C.a.h(z,W.fO(null))
C.a.h(z,W.fZ())
$.et=y
d=y}else d=z
z=$.es
if(z==null){z=new W.ha(d)
$.es=z
c=z}else{z.a=d
c=z}}if($.aP==null){z=document
y=z.implementation.createHTMLDocument("")
$.aP=y
$.d6=y.createRange()
y=$.aP
y.toString
y=y.createElement("base")
H.e(y,"$ise6")
y.href=z.baseURI
$.aP.head.appendChild(y)}z=$.aP
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscr")}z=$.aP
if(!!this.$iscr)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aP.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.Y,a.tagName)){$.d6.selectNodeContents(x)
w=$.d6.createContextualFragment(b)}else{x.innerHTML=b
w=$.aP.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aP.body
if(x==null?z!=null:x!==z)J.e0(x)
c.d4(w)
document.adoptNode(w)
return w},function(a,b,c){return this.ak(a,b,c,null)},"hZ",null,null,"gjB",5,5,null],
eO:function(a,b,c,d){a.textContent=null
a.appendChild(this.ak(a,b,c,d))},
eN:function(a,b){return this.eO(a,b,null,null)},
$isV:1,
"%":";Element"},
ih:{"^":"m:24;",
$1:function(a){return!!J.O(H.e(a,"$isG")).$isV}},
ok:{"^":"a0;0a2:type}","%":"HTMLEmbedElement"},
ah:{"^":"t;",$isah:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
af:{"^":"t;",
dH:["eP",function(a,b,c,d){H.l(c,{func:1,args:[W.ah]})
if(c!=null)this.fc(a,b,c,!1)}],
fc:function(a,b,c,d){return a.addEventListener(b,H.bB(H.l(c,{func:1,args:[W.ah]}),1),!1)},
$isaf:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fW|fX|h_|h0"},
b5:{"^":"d_;",$isb5:1,"%":"File"},
ev:{"^":"lp;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isb5")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.b5]},
$asy:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$isd:1,
$asd:function(){return[W.b5]},
$isev:1,
$asD:function(){return[W.b5]},
"%":"FileList"},
ol:{"^":"af;0m:length=","%":"FileWriter"},
om:{"^":"a0;0m:length=","%":"HTMLFormElement"},
bg:{"^":"t;",$isbg:1,"%":"Gamepad"},
on:{"^":"t;0m:length=","%":"History"},
oo:{"^":"lC;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asy:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asD:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ey:{"^":"t;",$isey:1,"%":"ImageData"},
ez:{"^":"a0;0a2:type}",$isez:1,"%":"HTMLInputElement"},
bL:{"^":"dw;",$isbL:1,"%":"KeyboardEvent"},
os:{"^":"a0;0a2:type}","%":"HTMLLinkElement"},
ot:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
ou:{"^":"t;0m:length=","%":"MediaList"},
ov:{"^":"af;",
dH:function(a,b,c,d){H.l(c,{func:1,args:[W.ah]})
if(b==="message")a.start()
this.eP(a,b,c,!1)},
"%":"MessagePort"},
ow:{"^":"lI;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.jb(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.h,null]},
$isK:1,
$asK:function(){return[P.h,null]},
"%":"MIDIInputMap"},
jb:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ox:{"^":"lJ;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.jc(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.h,null]},
$isK:1,
$asK:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
jc:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"t;",$isbj:1,"%":"MimeType"},
oy:{"^":"lL;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbj")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bj]},
$asy:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asD:function(){return[W.bj]},
"%":"MimeTypeArray"},
ay:{"^":"dw;",$isay:1,"%":"PointerEvent;DragEvent|MouseEvent"},
av:{"^":"cA;a",
gaI:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.f4("No elements"))
if(y>1)throw H.a(P.f4("More than one element"))
return z.firstChild},
ar:function(a,b){var z,y,x,w
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
gZ:function(a){var z=this.a.childNodes
return new W.ew(z,z.length,-1,[H.b8(C.a2,z,"D",0)])},
aG:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asy:function(){return[W.G]},
$asi:function(){return[W.G]},
$asd:function(){return[W.G]}},
G:{"^":"af;0cP:previousSibling=",
iJ:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iN:function(a,b){var z,y
try{z=a.parentNode
J.hE(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eQ(a):z},
h5:function(a,b,c){return a.replaceChild(b,c)},
$isG:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
oF:{"^":"t;",
iG:[function(a){return a.previousNode()},"$0","gcP",1,0,26],
"%":"NodeIterator"},
jg:{"^":"lN;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asy:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asD:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
oI:{"^":"a0;0a2:type}","%":"HTMLOListElement"},
oJ:{"^":"a0;0a2:type}","%":"HTMLObjectElement"},
bk:{"^":"t;0m:length=",$isbk:1,"%":"Plugin"},
oM:{"^":"lR;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbk")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bk]},
$asy:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asD:function(){return[W.bk]},
"%":"PluginArray"},
oO:{"^":"t;0a2:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oP:{"^":"lX;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.jO(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.h,null]},
$isK:1,
$asK:function(){return[P.h,null]},
"%":"RTCStatsReport"},
jO:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oR:{"^":"a0;0a2:type}","%":"HTMLScriptElement"},
oS:{"^":"a0;0m:length=","%":"HTMLSelectElement"},
bm:{"^":"af;",$isbm:1,"%":"SourceBuffer"},
oT:{"^":"fX;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbm")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bm]},
$asy:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asD:function(){return[W.bm]},
"%":"SourceBufferList"},
oU:{"^":"a0;0a2:type}","%":"HTMLSourceElement"},
bn:{"^":"t;",$isbn:1,"%":"SpeechGrammar"},
oV:{"^":"m3;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbn")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bn]},
$asy:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asD:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"t;0m:length=",$isbo:1,"%":"SpeechRecognitionResult"},
oX:{"^":"m6;",
k:function(a,b){return a.getItem(H.H(b))},
p:function(a,b,c){a.setItem(b,H.H(c))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new W.k4(z))
return z},
gm:function(a){return a.length},
$asai:function(){return[P.h,P.h]},
$isK:1,
$asK:function(){return[P.h,P.h]},
"%":"Storage"},
k4:{"^":"m:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p_:{"^":"a0;0a2:type}","%":"HTMLStyleElement"},
bp:{"^":"t;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
dt:{"^":"a0;",$isdt:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
k9:{"^":"a0;",
ak:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
z=W.ig("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.av(y).ar(0,new W.av(z))
return y},
"%":"HTMLTableElement"},
p1:{"^":"a0;",
ak:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.ak(z.createElement("table"),b,c,d)
z.toString
z=new W.av(z)
x=z.gaI(z)
x.toString
z=new W.av(x)
w=z.gaI(z)
y.toString
w.toString
new W.av(y).ar(0,new W.av(w))
return y},
"%":"HTMLTableRowElement"},
p2:{"^":"a0;",
ak:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.ak(z.createElement("table"),b,c,d)
z.toString
z=new W.av(z)
x=z.gaI(z)
y.toString
x.toString
new W.av(y).ar(0,new W.av(x))
return y},
"%":"HTMLTableSectionElement"},
f9:{"^":"a0;",$isf9:1,"%":"HTMLTemplateElement"},
bq:{"^":"af;",$isbq:1,"%":"TextTrack"},
br:{"^":"af;",$isbr:1,"%":"TextTrackCue|VTTCue"},
p4:{"^":"mg;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbr")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.br]},
$asy:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asD:function(){return[W.br]},
"%":"TextTrackCueList"},
p5:{"^":"h0;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbq")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bq]},
$asy:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asD:function(){return[W.bq]},
"%":"TextTrackList"},
p6:{"^":"t;0m:length=","%":"TimeRanges"},
bt:{"^":"t;",$isbt:1,"%":"Touch"},
bu:{"^":"dw;",$isbu:1,"%":"TouchEvent"},
p7:{"^":"mm;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbt")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bt]},
$asy:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asD:function(){return[W.bt]},
"%":"TouchList"},
p8:{"^":"t;0m:length=","%":"TrackDefaultList"},
pa:{"^":"t;",
iG:[function(a){return a.previousNode()},"$0","gcP",1,0,26],
"%":"TreeWalker"},
dw:{"^":"ah;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pc:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
pd:{"^":"af;0m:length=","%":"VideoTrackList"},
bV:{"^":"ay;",
gi1:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.E("deltaY is not supported"))},
gi0:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.E("deltaX is not supported"))},
$isbV:1,
"%":"WheelEvent"},
l5:{"^":"af;",
h6:function(a,b){return a.requestAnimationFrame(H.bB(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
fo:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fK:{"^":"G;",$isfK:1,"%":"Attr"},
pi:{"^":"mP;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbc")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bc]},
$asy:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asD:function(){return[W.bc]},
"%":"CSSRuleList"},
pj:{"^":"ic;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.c2(b,"$isae",[P.a5],"$asae")
if(!z)return!1
z=J.aC(b)
return a.left===z.gaX(b)&&a.top===z.gbj(b)&&a.width===z.gay(b)&&a.height===z.gau(b)},
gV:function(a){return W.fQ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gau:function(a){return a.height},
gay:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pl:{"^":"mR;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbg")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bg]},
$asy:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asD:function(){return[W.bg]},
"%":"GamepadList"},
po:{"^":"mT;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asy:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asD:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pp:{"^":"mV;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbo")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bo]},
$asy:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asD:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
pq:{"^":"mX;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbp")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bp]},
$asy:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asD:function(){return[W.bp]},
"%":"StyleSheetList"},
lb:{"^":"eI;dl:a<",
K:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.ga6(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga6:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfK")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asai:function(){return[P.h,P.h]},
$asK:function(){return[P.h,P.h]}},
lk:{"^":"lb;a",
k:function(a,b){return this.a.getAttribute(H.H(b))},
p:function(a,b,c){this.a.setAttribute(b,H.H(c))},
gm:function(a){return this.ga6(this).length}},
ll:{"^":"ds;a,b,c,$ti",
io:function(a,b,c,d){var z=H.z(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a8(this.a,this.b,a,!1,z)}},
pk:{"^":"ll;a,b,c,$ti"},
lm:{"^":"f5;a,b,c,d,e,$ti",
hm:function(){var z=this.d
if(z!=null&&this.a<=0)J.hF(this.b,this.c,z,!1)},
t:{
a8:function(a,b,c,d,e){var z=c==null?null:W.hh(new W.ln(c),W.ah)
z=new W.lm(0,a,b,z,!1,[e])
z.hm()
return z}}},
ln:{"^":"m:9;a",
$1:function(a){return this.a.$1(H.e(a,"$isah"))}},
cj:{"^":"b;a",
f5:function(a){var z,y
z=$.$get$dE()
if(z.gii(z)){for(y=0;y<262;++y)z.p(0,C.X[y],W.nt())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nu())}},
aR:function(a){return $.$get$fP().X(0,W.bH(a))},
aD:function(a,b,c){var z,y,x
z=W.bH(a)
y=$.$get$dE()
x=y.k(0,H.j(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dL(x.$4(a,b,c,this))},
$isaI:1,
t:{
fO:function(a){var z,y
z=W.e1(null)
y=window.location
z=new W.cj(new W.lY(z,y))
z.f5(a)
return z},
pm:[function(a,b,c,d){H.e(a,"$isV")
H.H(b)
H.H(c)
H.e(d,"$iscj")
return!0},"$4","nt",16,0,21],
pn:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isV")
H.H(b)
H.H(c)
z=H.e(d,"$iscj").a
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
return z},"$4","nu",16,0,21]}},
D:{"^":"b;$ti",
gZ:function(a){return new W.ew(a,this.gm(a),-1,[H.b8(this,a,"D",0)])},
aG:function(a,b,c,d){H.A(d,H.b8(this,a,"D",0))
throw H.a(P.E("Cannot modify an immutable List."))}},
eP:{"^":"b;a",
aR:function(a){return C.a.dJ(this.a,new W.ji(a))},
aD:function(a,b,c){return C.a.dJ(this.a,new W.jh(a,b,c))},
$isaI:1},
ji:{"^":"m:14;a",
$1:function(a){return H.e(a,"$isaI").aR(this.a)}},
jh:{"^":"m:14;a,b,c",
$1:function(a){return H.e(a,"$isaI").aD(this.a,this.b,this.c)}},
lZ:{"^":"b;",
f8:function(a,b,c,d){var z,y,x
this.a.ar(0,c)
z=b.cY(0,new W.m_())
y=b.cY(0,new W.m0())
this.b.ar(0,z)
x=this.c
x.ar(0,C.A)
x.ar(0,y)},
aR:function(a){return this.a.X(0,W.bH(a))},
aD:["eV",function(a,b,c){var z,y
z=W.bH(a)
y=this.c
if(y.X(0,H.j(z)+"::"+b))return this.d.hP(c)
else if(y.X(0,"*::"+b))return this.d.hP(c)
else{y=this.b
if(y.X(0,H.j(z)+"::"+b))return!0
else if(y.X(0,"*::"+b))return!0
else if(y.X(0,H.j(z)+"::*"))return!0
else if(y.X(0,"*::*"))return!0}return!1}],
$isaI:1},
m_:{"^":"m:29;",
$1:function(a){return!C.a.X(C.t,H.H(a))}},
m0:{"^":"m:29;",
$1:function(a){return C.a.X(C.t,H.H(a))}},
md:{"^":"lZ;e,a,b,c,d",
aD:function(a,b,c){if(this.eV(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.X(0,b)
return!1},
t:{
fZ:function(){var z,y,x,w,v
z=P.h
y=P.eG(C.r,z)
x=H.z(C.r,0)
w=H.l(new W.me(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.md(y,P.cd(null,null,null,z),P.cd(null,null,null,z),P.cd(null,null,null,z),null)
y.f8(null,new H.j1(C.r,w,[x,z]),v,null)
return y}}},
me:{"^":"m:28;",
$1:function(a){return"TEMPLATE::"+H.j(H.H(a))}},
mc:{"^":"b;",
aR:function(a){var z=J.O(a)
if(!!z.$isf_)return!1
z=!!z.$iscG
if(z&&W.bH(a)==="foreignObject")return!1
if(z)return!0
return!1},
aD:function(a,b,c){if(b==="is"||C.b.a3(b,"on"))return!1
return this.aR(a)},
$isaI:1},
ew:{"^":"b;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dY(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
aI:{"^":"b;"},
lY:{"^":"b;a,b",$ispb:1},
ha:{"^":"b;a",
d4:function(a){new W.mM(this).$2(a,null)},
b2:function(a,b){if(b==null)J.e0(a)
else b.removeChild(a)},
hb:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hI(a)
x=y.gdl().getAttribute("is")
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
this.ha(H.e(a,"$isV"),b,z,v,u,H.e(y,"$isK"),H.H(x))}catch(t){if(H.ab(t) instanceof P.aD)throw t
else{this.b2(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ha:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b2(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aR(a)){this.b2(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aD(a,"is",g)){this.b2(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga6(f)
y=H.c(z.slice(0),[H.z(z,0)])
for(x=f.ga6(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aD(a,J.hO(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.O(a).$isf9)this.d4(a.content)},
$isoG:1},
mM:{"^":"m:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hb(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b2(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hJ(z)}catch(w){H.ab(w)
v=H.e(z,"$isG")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isG")}}},
le:{"^":"t+i5;"},
lg:{"^":"t+y;"},
lh:{"^":"lg+D;"},
li:{"^":"t+y;"},
lj:{"^":"li+D;"},
lo:{"^":"t+y;"},
lp:{"^":"lo+D;"},
lB:{"^":"t+y;"},
lC:{"^":"lB+D;"},
lI:{"^":"t+ai;"},
lJ:{"^":"t+ai;"},
lK:{"^":"t+y;"},
lL:{"^":"lK+D;"},
lM:{"^":"t+y;"},
lN:{"^":"lM+D;"},
lQ:{"^":"t+y;"},
lR:{"^":"lQ+D;"},
lX:{"^":"t+ai;"},
fW:{"^":"af+y;"},
fX:{"^":"fW+D;"},
m2:{"^":"t+y;"},
m3:{"^":"m2+D;"},
m6:{"^":"t+ai;"},
mf:{"^":"t+y;"},
mg:{"^":"mf+D;"},
h_:{"^":"af+y;"},
h0:{"^":"h_+D;"},
ml:{"^":"t+y;"},
mm:{"^":"ml+D;"},
mO:{"^":"t+y;"},
mP:{"^":"mO+D;"},
mQ:{"^":"t+y;"},
mR:{"^":"mQ+D;"},
mS:{"^":"t+y;"},
mT:{"^":"mS+D;"},
mU:{"^":"t+y;"},
mV:{"^":"mU+D;"},
mW:{"^":"t+y;"},
mX:{"^":"mW+D;"}}],["","",,P,{"^":"",
b1:function(a){var z,y,x,w,v
if(a==null)return
z=P.de(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.H(y[w])
z.p(0,v,a[v])}return z},
ne:function(a,b){var z={}
a.K(0,new P.nf(z))
return z},
ep:function(){var z=$.eo
if(z==null){z=J.cY(window.navigator.userAgent,"Opera",0)
$.eo=z}return z},
ib:function(){var z,y
z=$.el
if(z!=null)return z
y=$.em
if(y==null){y=J.cY(window.navigator.userAgent,"Firefox",0)
$.em=y}if(y)z="-moz-"
else{y=$.en
if(y==null){y=!P.ep()&&J.cY(window.navigator.userAgent,"Trident/",0)
$.en=y}if(y)z="-ms-"
else z=P.ep()?"-o-":"-webkit-"}$.el=z
return z},
m9:{"^":"b;",
e8:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cX:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.O(a)
if(!!y.$isaq)return new Date(a.a)
if(!!y.$isjH)throw H.a(P.cg("structured clone of RegExp"))
if(!!y.$isb5)return a
if(!!y.$isd_)return a
if(!!y.$isev)return a
if(!!y.$isey)return a
if(!!y.$iseO||!!y.$isdl)return a
if(!!y.$isK){x=this.e8(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.K(a,new P.mb(z,this))
return z.a}if(!!y.$isd){x=this.e8(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.hY(a,x)}throw H.a(P.cg("structured clone of other type"))},
hY:function(a,b){var z,y,x,w
z=J.aM(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.p(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.cX(z.k(a,w)))
return x}},
mb:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cX(b)}},
nf:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
ma:{"^":"m9;a,b"},
iq:{"^":"cA;a,b",
gbq:function(){var z,y,x
z=this.b
y=H.am(z,"y",0)
x=W.V
return new H.j_(new H.dC(z,H.l(new P.ir(),{func:1,ret:P.U,args:[y]}),[y]),H.l(new P.is(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isV")
z=this.gbq()
J.hL(z.b.$1(J.co(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aG:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on filtered list"))},
gm:function(a){return J.ao(this.gbq().a)},
k:function(a,b){var z=this.gbq()
return z.b.$1(J.co(z.a,b))},
gZ:function(a){var z=P.iV(this.gbq(),!1,W.V)
return new J.aE(z,z.length,0,[H.z(z,0)])},
$asy:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
ir:{"^":"m:24;",
$1:function(a){return!!J.O(H.e(a,"$isG")).$isV}},
is:{"^":"m:57;",
$1:function(a){return H.k(H.e(a,"$isG"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lS:{"^":"b;$ti",
gbg:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.A(z+this.c,H.z(this,0))},
gcp:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.A(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c2(b,"$isae",[P.a5],"$asae")
if(!z)return!1
z=this.a
y=J.aC(b)
x=y.gaX(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbj(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.z(this,0)
if(H.A(z+this.c,w)===y.gbg(b)){if(typeof x!=="number")return x.D()
z=H.A(x+this.d,w)===y.gcp(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.c6(z)
x=this.b
w=J.c6(x)
if(typeof z!=="number")return z.D()
v=H.z(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.A(x+this.d,v)
return P.lD(P.cL(P.cL(P.cL(P.cL(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ae:{"^":"lS;aX:a>,bj:b>,ay:c>,au:d>,$ti",t:{
jE:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.S()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.S()
if(d<0)y=-d*0
else y=d
return new P.ae(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bM:{"^":"t;",$isbM:1,"%":"SVGLength"},or:{"^":"lF;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbM")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asD:function(){return[P.bM]},
"%":"SVGLengthList"},bO:{"^":"t;",$isbO:1,"%":"SVGNumber"},oH:{"^":"lP;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbO")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.bO]},
$isi:1,
$asi:function(){return[P.bO]},
$isd:1,
$asd:function(){return[P.bO]},
$asD:function(){return[P.bO]},
"%":"SVGNumberList"},oN:{"^":"t;0m:length=","%":"SVGPointList"},f_:{"^":"cG;0a2:type}",$isf_:1,"%":"SVGScriptElement"},oY:{"^":"m8;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asD:function(){return[P.h]},
"%":"SVGStringList"},p0:{"^":"cG;0a2:type}","%":"SVGStyleElement"},cG:{"^":"V;",
gct:function(a){return new P.iq(a,new W.av(a))},
ak:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aI])
C.a.h(z,W.fO(null))
C.a.h(z,W.fZ())
C.a.h(z,new W.mc())
c=new W.ha(new W.eP(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).hZ(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.av(w)
u=z.gaI(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscG:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bS:{"^":"t;",$isbS:1,"%":"SVGTransform"},p9:{"^":"mo;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbS")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[P.bS]},
$isi:1,
$asi:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
$asD:function(){return[P.bS]},
"%":"SVGTransformList"},lE:{"^":"t+y;"},lF:{"^":"lE+D;"},lO:{"^":"t+y;"},lP:{"^":"lO+D;"},m7:{"^":"t+y;"},m8:{"^":"m7+D;"},mn:{"^":"t+y;"},mo:{"^":"mn+D;"}}],["","",,P,{"^":"",T:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}}}],["","",,P,{"^":"",o2:{"^":"t;0m:length=","%":"AudioBuffer"},e4:{"^":"af;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},o3:{"^":"lc;",
k:function(a,b){return P.b1(a.get(H.H(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b1(y.value[1]))}},
ga6:function(a){var z=H.c([],[P.h])
this.K(a,new P.hQ(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asai:function(){return[P.h,null]},
$isK:1,
$asK:function(){return[P.h,null]},
"%":"AudioParamMap"},hQ:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},hR:{"^":"e4;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},o4:{"^":"af;0m:length=","%":"AudioTrackList"},hU:{"^":"af;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},o5:{"^":"e4;0a2:type}","%":"BiquadFilterNode"},oK:{"^":"hU;0m:length=","%":"OfflineAudioContext"},oL:{"^":"hR;0a2:type}","%":"Oscillator|OscillatorNode"},lc:{"^":"t+ai;"}}],["","",,P,{"^":"",eY:{"^":"t;",$iseY:1,"%":"WebGLRenderingContext"},ku:{"^":"t;",$isku:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oW:{"^":"m5;",
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return P.b1(a.item(b))},
p:function(a,b,c){H.F(b)
H.e(c,"$isK")
throw H.a(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$asy:function(){return[[P.K,,,]]},
$isi:1,
$asi:function(){return[[P.K,,,]]},
$isd:1,
$asd:function(){return[[P.K,,,]]},
$asD:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},m4:{"^":"t+y;"},m5:{"^":"m4+D;"}}],["","",,O,{"^":"",aN:{"^":"b;0a,0b,0c,0d,$ti",
bW:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
d5:function(a,b,c){var z=H.am(this,"aN",0)
H.l(b,{func:1,ret:P.U,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bn:function(a,b){return this.d5(a,null,b)},
fW:function(a){var z
H.u(a,"$isi",[H.am(this,"aN",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
f1:function(a,b){var z
H.u(b,"$isi",[H.am(this,"aN",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.aE(z,z.length,0,[H.z(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.am(this,"aN",0)
H.A(b,z)
z=[z]
if(this.fW(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.f1(x,H.c([b],z))}},
$isi:1,
t:{
d3:function(a){var z=new O.aN([a])
z.bW(a)
return z}}},di:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
f2:function(a){var z=this.b
if(!(z==null))z.G(a)},
aJ:function(){return this.f2(null)},
ga0:function(a){var z=this.a
if(z.length>0)return C.a.gav(z)
else return V.ce()},
eu:function(a){var z=this.a
if(a==null)C.a.h(z,V.ce())
else C.a.h(z,a)
this.aJ()},
cO:function(){var z=this.a
if(z.length>0){z.pop()
this.aJ()}}}}],["","",,E,{"^":"",cZ:{"^":"b;"},aQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a4:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
saf:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().O(0,this.geo())
y=this.c
if(y!=null)y.gB().h(0,this.geo())
x=new D.M("shape",z,this.c,this,[F.f1])
x.b=!0
this.am(x)}},
sbc:function(a){var z,y
if(!J.S(this.r,a)){z=this.r
if(z!=null)z.gB().O(0,this.gen())
if(a!=null)a.gB().h(0,this.gen())
this.r=a
y=new D.M("mover",z,a,this,[U.ad])
y.b=!0
this.am(y)}},
aw:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.S(y,this.x)){x=this.x
this.x=y
w=new D.M("matrix",x,y,this,[V.ax])
w.b=!0
this.am(w)}for(z=this.y.a,z=new J.aE(z,z.length,0,[H.z(z,0)]);z.E();)z.d.aw(0,b)},
aZ:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga0(z))
else C.a.h(z.a,y.j(0,z.ga0(z)))
z.aJ()
a.ev(this.f)
z=a.dy
x=(z&&C.a).gav(z)
if(x!=null&&this.d!=null)x.iM(a,this)
for(z=this.y.a,z=new J.aE(z,z.length,0,[H.z(z,0)]);z.E();)z.d.aZ(a)
a.es()
a.dx.cO()},
gB:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
am:function(a){var z=this.z
if(!(z==null))z.G(a)},
a_:function(){return this.am(null)},
ix:[function(a){H.e(a,"$isC")
this.e=null
this.am(a)},function(){return this.ix(null)},"jJ","$1","$0","geo",0,2,1],
iw:[function(a){this.am(H.e(a,"$isC"))},function(){return this.iw(null)},"jI","$1","$0","gen",0,2,1],
iu:[function(a){this.am(H.e(a,"$isC"))},function(){return this.iu(null)},"jG","$1","$0","gem",0,2,1],
jF:[function(a,b){var z,y,x,w,v,u,t,s
H.u(b,"$isi",[E.aQ],"$asi")
for(z=b.length,y=this.gem(),x={func:1,ret:-1,args:[D.C]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga4()==null){t=new D.bf()
t.d=0
u.sa4(t)}t=u.ga4()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a_()},"$2","git",8,0,11],
jH:[function(a,b){var z,y,x,w,v
H.u(b,"$isi",[E.aQ],"$asi")
for(z=b.length,y=this.gem(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.ga4()==null){v=new D.bf()
v.d=0
w.sa4(v)}w.ga4().O(0,y)}}this.a_()},"$2","giv",8,0,11],
$isaS:1,
t:{
eu:function(a,b,c,d,e,f){var z,y
z=new E.aQ()
z.a=d
z.b=!0
y=O.d3(E.aQ)
z.y=y
y.bn(z.git(),z.giv())
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
z.saf(0,e)
z.sbc(c)
return z}}},jJ:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eY:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aq(Date.now(),!1)
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
z.gB().h(0,new E.jL(this))
this.cy=z
z=new O.di()
z.a=H.c([],y)
z.gB().h(0,new E.jM(this))
this.db=z
z=new O.di()
z.a=H.c([],y)
z.gB().h(0,new E.jN(this))
this.dx=z
z=H.c([],[O.du])
this.dy=z
C.a.h(z,null)
this.fr=new H.b6(0,0,[P.h,A.f0])},
giH:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga0(z)
y=this.db
y=z.j(0,y.ga0(y))
this.z=y
z=y}return z},
ev:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gav(z):a;(z&&C.a).h(z,y)},
es:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
jK:function(a,b){var z=new E.jJ(a,b)
z.eY(a,b)
return z}}},jL:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.z=null
z.ch=null}},jM:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jN:{"^":"m:10;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.ch=null
z.cx=null}},ke:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a4:x@,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
f4:[function(a){var z
H.e(a,"$isC")
z=this.x
if(!(z==null))z.G(a)
this.iP()},function(){return this.f4(null)},"f3","$1","$0","gd8",0,2,1],
gib:function(){var z,y,x
z=Date.now()
y=C.e.a5(P.eq(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aq(z,!1)
return x/y},
dv:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.p(z)
x=C.d.e9(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.d.e9(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.fc(C.q,this.giO())},
iP:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kg(this),{func:1,ret:-1,args:[P.a5]})
C.H.fo(z)
C.H.h6(z,W.hh(y,P.a5))}},"$0","giO",0,0,3],
iL:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dv()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aq(w,!1)
x.y=P.eq(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aJ()
w=x.db
C.a.sm(w.a,0)
w.aJ()
w=x.dx
C.a.sm(w.a,0)
w.aJ()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aZ(this.e)}x=this.z
if(!(x==null))x.G(null)}catch(v){z=H.ab(v)
y=H.bD(v)
P.dU("Error: "+H.j(z))
P.dU("Stack: "+H.j(y))
throw H.a(z)}},
t:{
kf:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$isd2)return E.fb(a,!0,!0,!0,!1)
y=W.ed(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gct(a).h(0,y)
w=E.fb(y,!0,!0,!0,!1)
w.a=a
return w},
fb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ke()
y=P.iR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.d2(a,"webgl",y)
x=H.e(x==null?C.l.d2(a,"experimental-webgl",y):x,"$iseY")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jK(x,a)
w=new T.ka(x)
w.b=H.F(x.getParameter(3379))
w.c=H.F(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kH(a)
v=new X.iJ()
v.c=new X.aH(!1,!1,!1)
v.d=P.cd(null,null,null,P.n)
w.b=v
v=new X.jd(w)
v.f=0
v.r=new V.Z(0,0)
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iX(w)
v.r=0
v.x=new V.Z(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kj(w)
v.e=0
v.f=new V.Z(0,0)
v.r=new V.Z(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.f5,P.b]])
w.z=v
u=document
t=W.ay
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a8(u,"contextmenu",H.l(w.gfJ(),s),!1,t))
v=w.z
r=W.ah
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a8(a,"focus",H.l(w.gfM(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a8(a,"blur",H.l(w.gfF(),q),!1,r))
v=w.z
p=W.bL
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a8(u,"keyup",H.l(w.gfO(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a8(u,"keydown",H.l(w.gfN(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a8(a,"mousedown",H.l(w.gfR(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a8(a,"mouseup",H.l(w.gfT(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a8(a,"mousemove",H.l(w.gfS(),s),!1,t))
p=w.z
o=W.bV;(p&&C.a).h(p,W.a8(a,H.H(W.ii(a)),H.l(w.gfU(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a8(u,"mousemove",H.l(w.gfK(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a8(u,"mouseup",H.l(w.gfL(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a8(u,"pointerlockchange",H.l(w.gfV(),q),!1,r))
r=w.z
q=W.bu
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a8(a,"touchstart",H.l(w.gh1(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a8(a,"touchend",H.l(w.gh_(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a8(a,"touchmove",H.l(w.gh0(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aq(Date.now(),!1)
z.cy=0
z.dv()
return z}}},kg:{"^":"m:35;a",
$1:function(a){var z
H.nO(a)
z=this.a
if(z.ch){z.ch=!1
z.iL()}}}}],["","",,Z,{"^":"",fI:{"^":"b;a,b",t:{
dB:function(a,b,c){var z
H.u(c,"$isd",[P.n],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.by(c)),35044)
a.bindBuffer(b,null)
return new Z.fI(b,z)}}},e9:{"^":"cZ;a,b,c,d,e",
bu:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.v('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.j(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},l3:{"^":"b;a",$iso6:1},ea:{"^":"b;a,0b,c,d",
aW:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bu:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bu(a)},
eE:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aZ:function(a){var z,y,x,w,v
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
$isp3:1},cx:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bl(this.c)+"'")+"]"}},bv:{"^":"b;a",
gd6:function(a){var z,y
z=this.a
y=(z&$.$get$aY().a)!==0?3:0
if((z&$.$get$aX().a)!==0)y+=3
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$aZ().a)!==0)y+=2
if((z&$.$get$b_().a)!==0)y+=3
if((z&$.$get$bT().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=4
if((z&$.$get$bw().a)!==0)++y
return(z&$.$get$aV().a)!==0?y+4:y},
hQ:function(a){var z,y,x
z=$.$get$aY()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fH()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bv))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aY().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b_().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bT().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
t:{
au:function(a){return new Z.bv(a)}}}}],["","",,D,{"^":"",ee:{"^":"b;"},bf:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.C]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
O:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.C]})
z=this.a
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).O(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).O(z,b)||y}return y},
G:function(a){var z,y,x,w
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
return!0}if(!x)C.a.K(y,new D.im(z))
y=this.b
if(!(y==null))C.a.K(y,new D.io(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
iQ:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.G(y)}}},
ac:function(a){return this.iQ(a,!0,!1)},
t:{
Q:function(){var z=new D.bf()
z.d=0
return z}}},im:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},io:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},C:{"^":"b;a,0b"},cy:{"^":"C;c,d,a,0b,$ti"},cz:{"^":"C;c,d,a,0b,$ti"},M:{"^":"C;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",eb:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eb))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
t:{"^":"o8<"}},eD:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eD))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eE:{"^":"C;c,a,0b"},iJ:{"^":"b;0a,0b,0c,0d",
iD:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eE(a,this)
y.b=!0
return z.G(y)},
iz:function(a){var z,y
this.c=a.b
this.d.O(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eE(a,this)
y.b=!0
return z.G(y)}},eH:{"^":"cD;x,y,c,d,e,a,0b"},iX:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aB:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aq(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.Z(y.a+x*w,y.b+v*u)
u=this.a.gaS()
s=new X.bN(a,new V.Z(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cN:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.G(this.aB(a,b))
return!0},
be:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eM()
if(typeof z!=="number")return z.bR()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.aB(a,b))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.aB(a,b))
return!0},
iE:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaS()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.dj(new V.a_(v*u,t*s),y,x,new P.aq(w,!1),this)
w.b=!0
z.G(w)
return!0},
fQ:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aq(Date.now(),!1)
y=this.f
x=new X.eH(c,a,this.a.gaS(),b,z,this)
x.b=!0
y.G(x)
this.y=z
this.x=new V.Z(0,0)}},aH:{"^":"b;a,b,c",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aH))return!1
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
return z+(this.c?"Shift+":"")}},bN:{"^":"cD;x,y,z,Q,ch,c,d,e,a,0b"},jd:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c2:function(a,b,c){var z,y,x
z=new P.aq(Date.now(),!1)
y=this.a.gaS()
x=new X.bN(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cN:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.G(this.c2(a,b,!0))
return!0},
be:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eM()
if(typeof z!=="number")return z.bR()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.c2(a,b,!0))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.c2(a,b,!1))
return!0},
iF:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaS()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.dj(new V.a_(w*v,u*t),y,b,new P.aq(x,!1),this)
x.b=!0
z.G(x)
return!0},
gdN:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
gbQ:function(){var z=this.c
if(z==null){z=D.Q()
this.c=z}return z},
gek:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z}},dj:{"^":"cD;x,c,d,e,a,0b"},cD:{"^":"C;"},fg:{"^":"cD;x,y,z,Q,ch,c,d,e,a,0b"},kj:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aB:function(a,b){var z,y,x,w
H.u(a,"$isd",[V.Z],"$asd")
z=new P.aq(Date.now(),!1)
y=a.length>0?a[0]:new V.Z(0,0)
x=this.a.gaS()
w=new X.fg(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iC:function(a){var z
H.u(a,"$isd",[V.Z],"$asd")
z=this.b
if(z==null)return!1
z.G(this.aB(a,!0))
return!0},
iA:function(a){var z
H.u(a,"$isd",[V.Z],"$asd")
z=this.c
if(z==null)return!1
z.G(this.aB(a,!0))
return!0},
iB:function(a){var z
H.u(a,"$isd",[V.Z],"$asd")
z=this.d
if(z==null)return!1
z.G(this.aB(a,!1))
return!0}},kH:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaS:function(){var z=this.a
return V.eX(0,0,(z&&C.l).gdM(z).c,C.l.gdM(z).d)},
dj:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eD(z,new X.aH(y,a.altKey,a.shiftKey))},
aP:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
cg:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aH(y,a.altKey,a.shiftKey)},
aC:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.Z(y-w,x-v)},
b1:function(a){return new V.a_(a.movementX,a.movementY)},
ca:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.Z])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.ad(u.pageX)
C.d.ad(u.pageY)
s=z.left
C.d.ad(u.pageX)
C.a.h(y,new V.Z(t-s,C.d.ad(u.pageY)-z.top))}return y},
az:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.eb(z,new X.aH(y,a.altKey,a.shiftKey))},
c4:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.L()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jh:[function(a){this.f=!0},"$1","gfM",4,0,9],
ja:[function(a){this.f=!1},"$1","gfF",4,0,9],
je:[function(a){H.e(a,"$isay")
if(this.f&&this.c4(a))a.preventDefault()},"$1","gfJ",4,0,4],
jj:[function(a){var z
H.e(a,"$isbL")
if(!this.f)return
z=this.dj(a)
if(this.b.iD(z))a.preventDefault()},"$1","gfO",4,0,22],
ji:[function(a){var z
H.e(a,"$isbL")
if(!this.f)return
z=this.dj(a)
if(this.b.iz(z))a.preventDefault()},"$1","gfN",4,0,22],
jl:[function(a){var z,y,x,w
H.e(a,"$isay")
z=this.a
z.focus()
this.f=!0
this.aP(a)
if(this.x){y=this.az(a)
x=this.b1(a)
if(this.d.cN(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.az(a)
w=this.aC(a)
if(this.c.cN(y,w))a.preventDefault()},"$1","gfR",4,0,4],
jn:[function(a){var z,y,x
H.e(a,"$isay")
this.aP(a)
z=this.az(a)
if(this.x){y=this.b1(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.be(z,x))a.preventDefault()},"$1","gfT",4,0,4],
jg:[function(a){var z,y,x
H.e(a,"$isay")
if(!this.c4(a)){this.aP(a)
z=this.az(a)
if(this.x){y=this.b1(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.be(z,x))a.preventDefault()}},"$1","gfL",4,0,4],
jm:[function(a){var z,y,x
H.e(a,"$isay")
this.aP(a)
z=this.az(a)
if(this.x){y=this.b1(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.bd(z,x))a.preventDefault()},"$1","gfS",4,0,4],
jf:[function(a){var z,y,x
H.e(a,"$isay")
if(!this.c4(a)){this.aP(a)
z=this.az(a)
if(this.x){y=this.b1(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.bd(z,x))a.preventDefault()}},"$1","gfK",4,0,4],
jo:[function(a){var z,y
H.e(a,"$isbV")
this.aP(a)
z=new V.a_((a&&C.G).gi0(a),C.G.gi1(a)).w(0,180)
if(this.x){if(this.d.iE(z))a.preventDefault()
return}if(this.r)return
y=this.aC(a)
if(this.c.iF(z,y))a.preventDefault()},"$1","gfU",4,0,39],
jp:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.az(this.y)
v=this.aC(this.y)
this.d.fQ(w,v,x)}},"$1","gfV",4,0,9],
jv:[function(a){var z
H.e(a,"$isbu")
this.a.focus()
this.f=!0
this.cg(a)
z=this.ca(a)
if(this.e.iC(z))a.preventDefault()},"$1","gh1",4,0,13],
jt:[function(a){var z
H.e(a,"$isbu")
this.cg(a)
z=this.ca(a)
if(this.e.iA(z))a.preventDefault()},"$1","gh_",4,0,13],
ju:[function(a){var z
H.e(a,"$isbu")
this.cg(a)
z=this.ca(a)
if(this.e.iB(z))a.preventDefault()},"$1","gh0",4,0,13]}}],["","",,D,{"^":"",cu:{"^":"b;0a,0b,0c,0d",
gB:function(){var z=this.d
if(z==null){z=D.Q()
this.d=z}return z},
aK:[function(a){var z
H.e(a,"$isC")
z=this.d
if(!(z==null))z.G(a)},function(){return this.aK(null)},"j_","$1","$0","gf7",0,2,1],
$isa6:1,
$isaS:1,
t:{
d5:function(a,b){var z,y,x
z=new D.cu()
z.c=new V.a2(1,1,1)
z.a=new V.I(0,0,1)
y=z.b
z.b=b
b.gB().h(0,z.gf7())
x=new D.M("mover",y,z.b,z,[U.ad])
x.b=!0
z.aK(x)
if(!z.c.v(0,a)){y=z.c
z.c=a
x=new D.M("color",y,a,z,[V.a2])
x.b=!0
z.aK(x)}return z}}},a6:{"^":"b;",$isaS:1},iK:{"^":"aN;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
aK:function(a){var z=this.Q
if(!(z==null))z.G(a)},
fP:[function(a){var z
H.e(a,"$isC")
z=this.ch
if(!(z==null))z.G(a)},function(){return this.fP(null)},"jk","$1","$0","gds",0,2,1],
jq:[function(a){var z,y,x
H.u(a,"$isi",[D.a6],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.f6(x))return!1}return!0},"$1","gfX",4,0,41],
j7:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a6
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gds(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.e(b[u],"$isa6")
if(t instanceof D.cu)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bf()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cy(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfC",8,0,18],
js:[function(a,b){var z,y,x,w,v,u
z=D.a6
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gds(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.e(b[w],"$isa6")
if(v instanceof D.cu)C.a.O(this.e,v)
u=v.d
if(u==null){u=new D.bf()
u.d=0
v.d=u}u.O(0,x)}z=new D.cz(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfZ",8,0,18],
f6:function(a){var z=C.a.X(this.e,a)
return z},
$asi:function(){return[D.a6]},
$asaN:function(){return[D.a6]}},jp:{"^":"b;",$isa6:1,$isaS:1},k2:{"^":"b;",$isa6:1,$isaS:1},kb:{"^":"b;",$isa6:1,$isaS:1},kc:{"^":"b;",$isa6:1,$isaS:1},kd:{"^":"b;",$isa6:1,$isaS:1}}],["","",,V,{"^":"",
oa:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","ja",8,0,37],
cW:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bm(a-b,z)
return(a<0?a+z:a)+b},
N:function(a,b,c){if(a==null)return C.b.ab("null",c)
return C.b.ab(C.d.eC($.o.$2(a,0)?0:a,b),c+b+1)},
bC:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$isd",[P.q],"$asd")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.N(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.b.ab(z[u],x))}return z},
a2:{"^":"b;a,b,c",
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
return new V.a2(z,y,x)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bb:{"^":"b;a,b,c,d",
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
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
cC:{"^":"b;a,b,c,d,e,f,r,x,y",
ae:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscC")
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
return new V.cC(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.j(a3,s),C.d.j(a1,q)+C.d.j(a2,o)+C.d.j(a3,m),C.d.j(a1,k)+C.d.j(a2,j)+C.d.j(a3,i))},
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
ae:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
ei:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.ce()
a3=1/a2
a4=-w
a5=-i
return V.aG((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isax")
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
return V.aG(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.I(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bk:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.a7(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
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
i:function(a){return this.P()},
ea:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
P:function(){return this.ea("",3,0)},
C:function(a){return this.ea(a,3,0)},
t:{
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ce:function(){return V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eN:function(a,b,c,d){return V.aG(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eK:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eL:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eM:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
Z:{"^":"b;a,b",
L:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.Z(this.a*b,this.b*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
a7:{"^":"b;a,b,c",
D:function(a,b){return new V.a7(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.a7(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.a7(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}},
bP:{"^":"b;a,b,c,d",
j:function(a,b){return new V.bP(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bP))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}},
eW:{"^":"b;a,b,c,d",
ga7:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eW))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"},
t:{
eX:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eW(a,b,c,d)}}},
a_:{"^":"b;a,b",
il:[function(a){return Math.sqrt(this.F(this))},"$0","gm",1,0,17],
F:function(a){var z,y,x,w
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
return new V.a_(z*b,y*b)},
w:function(a,b){var z,y
if($.o.$2(b,0))return new V.a_(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.a_(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}},
I:{"^":"b;a,b,c",
il:[function(a){return Math.sqrt(this.F(this))},"$0","gm",1,0,17],
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cJ:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.I(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aE:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.I(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.I(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.I(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if($.o.$2(b,0))return new V.I(0,0,0)
return new V.I(this.a/b,this.b/b,this.c/b)},
ej:function(){if(!$.o.$2(0,this.a))return!1
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
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}}],["","",,U,{"^":"",i0:{"^":"ee;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bX:function(a){var z=V.cW(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.G(a)},
scZ:function(a,b){},
scK:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bX(z)}z=new D.M("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.J(z)}},
scM:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bX(z)}z=new D.M("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.J(z)}},
sa1:function(a,b){var z,y
b=this.bX(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.M("location",y,b,this,[P.q])
z.b=!0
this.J(z)}},
scL:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.M("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.J(z)}},
sU:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.M("velocity",x,a,this,[P.q])
z.b=!0
this.J(z)}},
scw:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.M("dampening",y,a,this,[P.q])
z.b=!0
this.J(z)}},
aw:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
t:{
d4:function(){var z=new U.i0()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},eg:{"^":"ad;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
ax:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eg))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
t:{
eh:function(a){var z=new U.eg()
z.a=a
return z}}},ex:{"^":"aN;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
J:[function(a){var z
H.e(a,"$isC")
z=this.e
if(!(z==null))z.G(a)},function(){return this.J(null)},"ag","$1","$0","gaL",0,2,1],
j6:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ad
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gB()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cy(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gfB",8,0,16],
jr:[function(a,b){var z,y,x,w,v
z=U.ad
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaL(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gB().O(0,x)}z=new D.cz(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gfY",8,0,16],
ax:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aE(z,z.length,0,[H.z(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.ax(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.ce():x
z=this.e
if(!(z==null))z.ac(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ex))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.S(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.ad]},
$asaN:function(){return[U.ad]},
$isad:1},ad:{"^":"ee;"},eZ:{"^":"ad;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.G(a)},
seH:function(a){var z,y
a=V.cW(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.M("yaw",y,a,this,[P.q])
z.b=!0
this.J(z)}},
ser:function(a,b){var z,y
b=V.cW(b,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,b)){y=this.b
this.b=b
z=new D.M("pitch",y,b,this,[P.q])
z.b=!0
this.J(z)}},
sex:function(a){var z,y
a=V.cW(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.M("roll",y,a,this,[P.q])
z.b=!0
this.J(z)}},
ax:function(a,b,c){var z,y
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.seH(this.a+this.d*b.y)
this.ser(0,this.b+this.e*b.y)
this.sex(this.c+this.f*b.y)
this.x=V.eM(this.c).j(0,V.eL(this.b)).j(0,V.eK(this.a))
z=this.y
if(!(z==null))z.ac(0)}return this.x},
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eZ))return!1
z=this.a
y=b.a
if(!$.o.$2(z,y))return!1
z=this.b
y=b.b
if(!$.o.$2(z,y))return!1
z=this.c
y=b.c
if(!$.o.$2(z,y))return!1
z=this.d
y=b.d
if(!$.o.$2(z,y))return!1
z=this.e
y=b.e
if(!$.o.$2(z,y))return!1
z=this.f
y=b.f
if(!$.o.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"], ["+V.N(this.d,3,0)+", "+V.N(this.e,3,0)+", "+V.N(this.f,3,0)+"]"},
t:{
dp:function(a,b,c,d,e,f){var z,y,x
z=new U.eZ()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.seH(f)
z.ser(0,d)
z.sex(e)
y=z.d
if(!$.o.$2(y,c)){x=z.d
z.d=c
y=new D.M("deltaYaw",x,c,z,[P.q])
y.b=!0
z.J(y)}y=z.e
if(!$.o.$2(y,a)){x=z.e
z.e=a
y=new D.M("deltaPitch",x,a,z,[P.q])
y.b=!0
z.J(y)}y=z.f
if(!$.o.$2(y,b)){x=z.f
z.f=b
y=new D.M("deltaRoll",x,b,z,[P.q])
y.b=!0
z.J(y)}return z}}},kI:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.cy
if(z==null){z=D.Q()
this.cy=z}return z},
J:[function(a){var z
H.e(a,"$isC")
z=this.cy
if(!(z==null))z.G(a)},function(){return this.J(null)},"ag","$1","$0","gaL",0,2,1],
b4:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdN().h(0,this.gc5())
this.a.c.gek().h(0,this.gc6())
this.a.c.gbQ().h(0,this.gc7())
return!0},
fv:[function(a){H.e(a,"$isC")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc5",4,0,2],
fw:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isbN")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.a_(z.a,z.b)
z=z.F(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.a_(y.a,y.b).j(0,2).w(0,z.ga7())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sU(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.a_(x.a,x.b).j(0,2).w(0,z.ga7())
x=this.b
v=w.a
if(typeof v!=="number")return v.T()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
this.b.sU(0)
y=y.L(0,a.z)
this.Q=new V.a_(y.a,y.b).j(0,2).w(0,z.ga7())}this.ag()},"$1","gc6",4,0,2],
fz:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.F(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sU(y*10*x)
this.ag()}},"$1","gc7",4,0,2],
ax:function(a,b,c){var z,y,x
z=this.ch
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.ch=y
x=b.y
this.b.aw(0,x)
this.cx=V.eM(this.b.d)}return this.cx},
$isad:1},kJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
J:[function(a){var z
H.e(a,"$isC")
z=this.fx
if(!(z==null))z.G(a)},function(){return this.J(null)},"ag","$1","$0","gaL",0,2,1],
b4:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdN().h(0,this.gc5())
this.a.c.gek().h(0,this.gc6())
this.a.c.gbQ().h(0,this.gc7())
z=this.a.d
y=z.f
if(y==null){y=D.Q()
z.f=y
z=y}else z=y
z.h(0,this.gfs())
z=this.a.d
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.gft())
z=this.a.e
y=z.b
if(y==null){y=D.Q()
z.b=y
z=y}else z=y
z.h(0,this.ghl())
z=this.a.e
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.ghk())
z=this.a.e
y=z.c
if(y==null){y=D.Q()
z.c=y
z=y}else z=y
z.h(0,this.ghj())
return!0},
aq:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.T()
z=-z}if(this.r){if(typeof y!=="number")return y.T()
y=-y}return new V.a_(z,y)},
fv:[function(a){a=H.k(H.e(a,"$isC"),"$isbN")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc5",4,0,2],
fw:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isbN")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a_(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.aq(new V.a_(y.a,y.b).j(0,2).w(0,z.ga7()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.T()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.T()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aq(new V.a_(x.a,x.b).j(0,2).w(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.L(0,a.z)
this.dx=this.aq(new V.a_(y.a,y.b).j(0,2).w(0,z.ga7()))}this.ag()},"$1","gc6",4,0,2],
fz:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.T()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.T()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sU(-y*10*z)
this.ag()}},"$1","gc7",4,0,2],
j3:[function(a){if(H.k(H.e(a,"$isC"),"$iseH").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfs",4,0,2],
j4:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isbN")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aq(new V.a_(x.a,x.b).j(0,2).w(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.L(0,a.z)
this.dx=this.aq(new V.a_(y.a,y.b).j(0,2).w(0,z.ga7()))
this.ag()},"$1","gft",4,0,2],
jz:[function(a){H.e(a,"$isC")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghl",4,0,2],
jy:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isfg")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a_(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.aq(new V.a_(y.a,y.b).j(0,2).w(0,z.ga7()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.T()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.T()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aq(new V.a_(x.a,x.b).j(0,2).w(0,z.ga7()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.L(0,a.z)
this.dx=this.aq(new V.a_(y.a,y.b).j(0,2).w(0,z.ga7()))}this.ag()},"$1","ghk",4,0,2],
jx:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.T()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.T()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sU(-y*10*z)
this.ag()}},"$1","ghj",4,0,2],
ax:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.dy=y
x=b.y
this.c.aw(0,x)
this.b.aw(0,x)
this.fr=V.eK(this.b.d).j(0,V.eL(this.c.d))}return this.fr},
$isad:1},kK:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.Q()
this.r=z}return z},
J:function(a){var z=this.r
if(!(z==null))z.G(a)},
b4:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.Q()
z.e=y
z=y}else z=y
y=this.gfA()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.Q()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
j5:[function(a){var z,y,x,w
H.e(a,"$isC")
if(!J.S(this.b,this.a.b.c))return
H.k(a,"$isdj")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.M("zoom",z,w,this,[P.q])
z.b=!0
this.J(z)}},"$1","gfA",4,0,2],
ax:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.eN(x,x,x,1)}return this.f},
$isad:1}}],["","",,M,{"^":"",ik:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aM:[function(a){var z
H.e(a,"$isC")
z=this.x
if(!(z==null))z.G(a)},function(){return this.aM(null)},"j0","$1","$0","gap",0,2,1],
jc:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aQ
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
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
this.aM(z)},"$2","gfH",8,0,11],
jd:[function(a,b){var z,y,x,w,v,u
z=E.aQ
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gap(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.ga4()==null){u=new D.bf()
u.d=0
v.sa4(u)}v.ga4().O(0,x)}}z=new D.cz(a,b,this,[z])
z.b=!0
this.aM(z)},"$2","gfI",8,0,11],
sez:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().O(0,this.gap())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gap())
z=new D.M("technique",y,this.c,this,[O.du])
z.b=!0
this.aM(z)}},
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
aZ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.ev(this.c)
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
u=C.d.ad(v.a*x)
if(typeof w!=="number")return H.p(w)
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
s=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aG(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.eu(n)
y=$.eT
if(y==null){y=new V.I(0,0,-1)
m=y.w(0,Math.sqrt(y.F(y)))
y=new V.I(0,1,0).aE(m)
l=y.w(0,Math.sqrt(y.F(y)))
k=m.aE(l)
j=new V.I(0,0,0)
y=V.aG(l.a,k.a,m.a,l.T(0).F(j),l.b,k.b,m.b,k.T(0).F(j),l.c,k.c,m.c,m.T(0).F(j),0,0,0,1)
$.eT=y
i=y}else i=y
y=z.b
if(y!=null){h=y.ax(0,a,z)
if(h!=null)i=h.j(0,i)}a.db.eu(i)
z=this.c
if(z!=null)z.aw(0,a)
for(z=this.d.a,z=new J.aE(z,z.length,0,[H.z(z,0)]);z.E();)z.d.aw(0,a)
for(z=this.d.a,z=new J.aE(z,z.length,0,[H.z(z,0)]);z.E();)z.d.aZ(a)
this.a.toString
a.cy.cO()
a.db.cO()
this.b.toString
a.es()},
$isoQ:1}}],["","",,A,{"^":"",e3:{"^":"b;a,b,c"},hP:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
i3:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
i2:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},j4:{"^":"f0;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0at,0al,0by,0dO,0bz,0bA,0dP,0dQ,0bB,0bC,0dR,0dS,0bD,0bE,0dT,0dU,0bF,0dV,0dW,0bG,0dX,0dY,0bH,0bI,0bJ,0dZ,0e_,0bK,0bL,0e0,0e1,0bM,0e2,0cA,0e3,0cB,0e4,0cC,0e5,0cD,0e6,0cE,0e7,0cF,a,b,0c,0d,0e,0f,0r,0x,0y",
eX:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.ho(z)
a2.hv(z)
a2.hp(z)
a2.hD(z)
a2.hE(z)
a2.hx(z)
a2.hI(z)
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
x.hs(z)
x.hn(z)
x.hq(z)
x.ht(z)
x.hB(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hz(z)
x.hA(z)}x.hw(z)
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
x.hr(z)
x.hy(z)
x.hC(z)
x.hF(z)
x.hG(z)
x.hH(z)
x.hu(z)}r=z.a+="// === Main ===\n"
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
this.e=this.dk(s,35633)
this.f=this.dk(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dL(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.r(P.v("Failed to link shader: "+H.j(m)))}this.he()
this.hg()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$isaU")
if(y)this.dy=H.k(this.y.q(0,"objMat"),"$isaU")
if(w)this.fr=H.k(this.y.q(0,"viewObjMat"),"$isaU")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$isaU")
if(a2.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$isdy")
if(a2.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$isaU")
if(a2.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$isaU")
this.r1=H.c([],[A.aU])
y=a2.at
if(y>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$isR")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaU"))}}y=a2.a
if(y!==C.c){this.r2=H.k(this.y.q(0,"emissionClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.rx=H.k(this.y.q(0,"emissionTxt"),"$isas")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break
case C.h:this.ry=H.k(this.y.q(0,"emissionTxt"),"$isat")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break}}y=a2.b
if(y!==C.c){this.x2=H.k(this.y.q(0,"ambientClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.y1=H.k(this.y.q(0,"ambientTxt"),"$isas")
this.at=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break
case C.h:this.y2=H.k(this.y.q(0,"ambientTxt"),"$isat")
this.at=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break}}y=a2.c
if(y!==C.c){this.al=H.k(this.y.q(0,"diffuseClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.by=H.k(this.y.q(0,"diffuseTxt"),"$isas")
this.bz=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break
case C.h:this.dO=H.k(this.y.q(0,"diffuseTxt"),"$isat")
this.bz=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break}}y=a2.d
if(y!==C.c){this.bA=H.k(this.y.q(0,"invDiffuseClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.dP=H.k(this.y.q(0,"invDiffuseTxt"),"$isas")
this.bB=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break
case C.h:this.dQ=H.k(this.y.q(0,"invDiffuseTxt"),"$isat")
this.bB=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a2.e
if(y!==C.c){this.bE=H.k(this.y.q(0,"shininess"),"$isa3")
this.bC=H.k(this.y.q(0,"specularClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.dR=H.k(this.y.q(0,"specularTxt"),"$isas")
this.bD=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break
case C.h:this.dS=H.k(this.y.q(0,"specularTxt"),"$isat")
this.bD=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dT=H.k(this.y.q(0,"bumpTxt"),"$isas")
this.bF=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break
case C.h:this.dU=H.k(this.y.q(0,"bumpTxt"),"$isat")
this.bF=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break}if(a2.dy){this.dV=H.k(this.y.q(0,"envSampler"),"$isat")
this.dW=H.k(this.y.q(0,"nullEnvTxt"),"$isR")
y=a2.r
if(y!==C.c){this.bG=H.k(this.y.q(0,"reflectClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.dX=H.k(this.y.q(0,"reflectTxt"),"$isas")
this.bH=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break
case C.h:this.dY=H.k(this.y.q(0,"reflectTxt"),"$isat")
this.bH=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break}}y=a2.x
if(y!==C.c){this.bI=H.k(this.y.q(0,"refraction"),"$isa3")
this.bJ=H.k(this.y.q(0,"refractClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.dZ=H.k(this.y.q(0,"refractTxt"),"$isas")
this.bK=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break
case C.h:this.e_=H.k(this.y.q(0,"refractTxt"),"$isat")
this.bK=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break}}}y=a2.y
if(y!==C.c){this.bL=H.k(this.y.q(0,"alpha"),"$isa3")
switch(y){case C.c:break
case C.i:break
case C.f:this.e0=H.k(this.y.q(0,"alphaTxt"),"$isas")
this.bM=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break
case C.h:this.e1=H.k(this.y.q(0,"alphaTxt"),"$isat")
this.bM=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break}}this.cA=H.c([],[A.ft])
this.cB=H.c([],[A.fu])
this.cC=H.c([],[A.fv])
this.cD=H.c([],[A.fw])
this.cE=H.c([],[A.fx])
this.cF=H.c([],[A.fy])
if(a2.k2){y=a2.z
if(y>0){this.e2=H.e(this.y.q(0,"dirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.cA;(x&&C.a).h(x,new A.ft(l,k,j))}}y=a2.Q
if(y>0){this.e3=H.e(this.y.q(0,"pntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa3")
x=this.y
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa3")
x=this.y
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa3")
x=this.cB;(x&&C.a).h(x,new A.fu(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.e4=H.e(this.y.q(0,"spotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa3")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa3")
x=this.y
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa3")
x=this.y
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa3")
x=this.y
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa3")
x=this.cC;(x&&C.a).h(x,new A.fv(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e5=H.e(this.y.q(0,"txtDirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isas")
x=this.cD;(x&&C.a).h(x,new A.fw(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.e6=H.e(this.y.q(0,"txtPntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdy")
x=this.y
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isR")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa3")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa3")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa3")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isat")
x=this.cE;(x&&C.a).h(x,new A.fx(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.e7=H.e(this.y.q(0,"txtSpotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isP")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa3")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa3")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa3")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa3")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isa3")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isas")
x=this.cF;(x&&C.a).h(x,new A.fy(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ai:function(a,b,c){b.a.uniform1i(b.d,1)},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
j3:function(a,b){var z,y
z=a.al
y=new A.j4(b,z)
y.f_(b,z)
y.eX(a,b)
return y}}},j7:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,at,al,by",
ho:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.at+"];\n"
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
hv:function(a){var z
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
hp:function(a){var z
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
hD:function(a){var z,y
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
hE:function(a){var z,y
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
hx:function(a){var z
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
hI:function(a){var z
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
aA:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.ao(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hs:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aA(a,z,"emission")
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
hn:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aA(a,z,"ambient")
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
hq:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aA(a,z,"diffuse")
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
ht:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aA(a,z,"invDiffuse")
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
hB:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aA(a,z,"specular")
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
hw:function(a){var z,y
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
hz:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aA(a,z,"reflect")
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
hA:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aA(a,z,"refract")
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
hr:function(a){var z,y
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
hy:function(a){var z,y
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
hC:function(a){var z,y
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
hF:function(a){var z,y,x
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
hG:function(a){var z,y,x
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
hH:function(a){var z,y,x
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
hu:function(a){var z
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
i:function(a){return this.al}},ft:{"^":"b;a,b,c"},fw:{"^":"b;a,b,c,d,e,f,r,x"},fu:{"^":"b;a,b,c,d,e,f,r"},fx:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fv:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fy:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},f0:{"^":"cZ;",
f_:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dk:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dL(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
he:function(){var z,y,x,w,v,u
z=H.c([],[A.e3])
y=this.a
x=H.F(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.e3(y,v.name,u))}this.x=new A.hP(z)},
hg:function(){var z,y,x,w,v,u
z=H.c([],[A.ag])
y=this.a
x=H.F(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.i_(v.type,v.size,v.name,u))}this.y=new A.kt(z)},
aO:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.R(z,y,b,c)
else return A.dx(z,y,b,a,c)},
fl:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.as(z,y,b,c)
else return A.dx(z,y,b,a,c)},
fm:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.at(z,y,b,c)
else return A.dx(z,y,b,a,c)},
bt:function(a,b){return new P.fM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
i_:function(a,b,c,d){switch(a){case 5120:return this.aO(b,c,d)
case 5121:return this.aO(b,c,d)
case 5122:return this.aO(b,c,d)
case 5123:return this.aO(b,c,d)
case 5124:return this.aO(b,c,d)
case 5125:return this.aO(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.ko(this.a,this.r,c,d)
case 35665:return new A.P(this.a,this.r,c,d)
case 35666:return new A.kr(this.a,this.r,c,d)
case 35667:return new A.kp(this.a,this.r,c,d)
case 35668:return new A.kq(this.a,this.r,c,d)
case 35669:return new A.ks(this.a,this.r,c,d)
case 35674:return new A.kv(this.a,this.r,c,d)
case 35675:return new A.dy(this.a,this.r,c,d)
case 35676:return new A.aU(this.a,this.r,c,d)
case 35678:return this.fl(b,c,d)
case 35680:return this.fm(b,c,d)
case 35670:throw H.a(this.bt("BOOL",c))
case 35671:throw H.a(this.bt("BOOL_VEC2",c))
case 35672:throw H.a(this.bt("BOOL_VEC3",c))
case 35673:throw H.a(this.bt("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},ct:{"^":"b;a,b",
i:function(a){return this.b}},ag:{"^":"b;"},kt:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
ia:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.ia("\n")}},R:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},kp:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kq:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},ks:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},kn:{"^":"ag;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
dx:function(a,b,c,d,e){var z=new A.kn(a,b,c,e)
z.f=d
z.e=P.iU(d,0,!1,P.n)
return z}}},a3:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},ko:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},P:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},kr:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},kv:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dy:{"^":"ag;a,b,c,d",
an:function(a){var z=new Float32Array(H.by(H.u(a,"$isd",[P.q],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aU:{"^":"ag;a,b,c,d",
an:function(a){var z=new Float32Array(H.by(H.u(a,"$isd",[P.q],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},as:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},at:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
dO:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ak,P.q,P.q]})
z=F.dq()
F.bZ(z,b,c,d,a,1,0,0,1)
F.bZ(z,b,c,d,a,0,1,0,3)
F.bZ(z,b,c,d,a,0,0,1,2)
F.bZ(z,b,c,d,a,-1,0,0,0)
F.bZ(z,b,c,d,a,0,-1,0,0)
F.bZ(z,b,c,d,a,0,0,-1,3)
z.as()
return z},
cO:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bZ:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ak,P.q,P.q]})
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
z.d=y}l=F.cO(y)
k=F.cO(z.b)
j=F.dW(d,e,new F.mY(z,F.cO(z.c),F.cO(z.d),k,l,c),b)
if(j!=null)a.bb(j)},
hn:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.dq()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ak])
v=z.a
u=new V.I(0,0,y)
u=u.w(0,Math.sqrt(u.F(u)))
C.a.h(w,v.hM(new V.bP(a,-1,-1,-1),new V.bb(1,1,1,1),new V.a7(0,0,d),new V.I(0,0,y),new V.Z(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.I(r,q,y).w(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.ci(new V.bP(a,-1,-1,-1),null,new V.bb(n,l,m,1),new V.a7(r*p,q*p,d),new V.I(0,0,y),new V.Z(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hK(w)
return z},
hl:function(a,b,c,d,e,f){return F.nh(!0,c,d,new F.ng(a,f),e)},
nh:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dW(c,e,new F.nj(d),null)
if(z==null)return
z.as()
z.ck()
if(b)z.bb(F.hn(3,!1,!1,1,new F.nk(d),e))
z.bb(F.hn(1,!0,!1,-1,new F.nl(d),e))
return z},
nU:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.nV()
y=F.dO(a,null,new F.nW(z),c)
y.ck()
return y},
hB:function(a,b,c,d){return F.hm(c,a,d,b,new F.nY())},
nC:function(a,b,c,d,e,f){return F.hm(d,a,e,b,new F.nD(f,c))},
hm:function(a,b,c,d,e){var z=F.dW(a,b,new F.ni(H.l(e,{func:1,ret:V.a7,args:[P.q]}),d,b,c),null)
if(z==null)return
z.as()
z.ck()
return z},
dW:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ak,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.dq()
y=H.c([],[F.ak])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ci(null,null,new V.bb(u,0,0,1),null,null,new V.Z(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cv(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ci(null,null,new V.bb(o,n,m,1),null,null,new V.Z(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cv(d))}}z.d.hL(a+1,b+1,y)
return z},
mY:{"^":"m:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cJ(z.b,b).cJ(z.d.cJ(z.c,b),c)
a.sa1(0,new V.a7(y.a,y.b,y.c))
a.seA(y.w(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
a.sdK(new V.bP(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
ng:{"^":"m:30;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
nj:{"^":"m:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sa1(0,new V.a7(y,u,w))
u=new V.I(y,u,w)
a.seA(u.w(0,Math.sqrt(u.F(u))))
a.sdK(new V.bP(1-c,2+c,-1,-1))}},
nk:{"^":"m:33;a",
$1:function(a){return this.a.$2(a,1)}},
nl:{"^":"m:33;a",
$1:function(a){return this.a.$2(1-a,0)}},
nV:{"^":"m:30;",
$2:function(a,b){return 0}},
nW:{"^":"m:7;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.I(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.F(x))).j(0,1+z)
a.sa1(0,new V.a7(z.a,z.b,z.c))}},
nY:{"^":"m:27;",
$1:function(a){return new V.a7(Math.cos(a),Math.sin(a),0)}},
nD:{"^":"m:27;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a7(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
ni:{"^":"m:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dX(y.$1(z),x)
x=J.dX(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.I(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.F(x)))
u=new V.I(1,0,0)
y=v.aE(!v.v(0,u)?new V.I(0,0,1):u)
t=y.w(0,Math.sqrt(y.F(y)))
y=t.aE(v)
u=y.w(0,Math.sqrt(y.F(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
a.sa1(0,w.D(0,new V.a7(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ar:{"^":"b;0a,0b,0c,0d,0e",
aF:function(){if(!this.gb6()){C.a.O(this.a.a.d.b,this)
this.a.a.a_()}this.cc()
this.cd()
this.h4()},
ci:function(a){this.a=a
C.a.h(a.d.b,this)},
cj:function(a){this.b=a
C.a.h(a.d.c,this)},
hd:function(a){this.c=a
C.a.h(a.d.d,this)},
cc:function(){var z=this.a
if(z!=null){C.a.O(z.d.b,this)
this.a=null}},
cd:function(){var z=this.b
if(z!=null){C.a.O(z.d.c,this)
this.b=null}},
h4:function(){var z=this.c
if(z!=null){C.a.O(z.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
fe:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.I(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.ej())return
return v.w(0,Math.sqrt(v.F(v)))},
fh:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.I(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.F(z)))
z=w.L(0,y)
z=new V.I(z.a,z.b,z.c)
z=v.aE(z.w(0,Math.sqrt(z.F(z))))
return z.w(0,Math.sqrt(z.F(z)))},
cs:function(){if(this.d!=null)return!0
var z=this.fe()
if(z==null){z=this.fh()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
fd:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.I(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.ej())return
return v.w(0,Math.sqrt(v.F(v)))},
fg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.L(0,u)
z=new V.I(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.T(0)}else{l=(z-q.b)/n
z=r.L(0,u).j(0,l).D(0,u).L(0,x)
z=new V.I(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.T(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.F(z)))
z=k.aE(m)
z=z.w(0,Math.sqrt(z.F(z))).aE(k)
m=z.w(0,Math.sqrt(z.F(z)))}return m},
cq:function(){if(this.e!=null)return!0
var z=this.fd()
if(z==null){z=this.fg()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
b7:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.T(0)
y=this.e
if(y!=null)this.e=y.T(0)
this.a.a.a_()},
ghV:function(a){if(J.S(this.a,this.b))return!0
if(J.S(this.b,this.c))return!0
if(J.S(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z,y
if(this.gb6())return a+"disposed"
z=a+C.b.ab(J.ac(this.a.e),0)+", "+C.b.ab(J.ac(this.b.e),0)+", "+C.b.ab(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.C("")},
t:{
bI:function(a,b,c){var z,y,x
z=new F.ar()
y=a.a
if(y==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.v("May not create a face with vertices attached to different shapes."))
z.ci(a)
z.cj(b)
z.hd(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a_()
return z}}},
ip:{"^":"b;"},
k1:{"^":"ip;",
ba:function(a,b,c){var z,y
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
dd:{"^":"b;0a,0b",
aF:function(){if(!this.gb6()){C.a.O(this.a.a.c.b,this)
this.a.a.a_()}this.cc()
this.cd()},
ci:function(a){this.a=a
C.a.h(a.c.b,this)},
cj:function(a){this.b=a
C.a.h(a.c.c,this)},
cc:function(){var z=this.a
if(z!=null){C.a.O(z.c.b,this)
this.a=null}},
cd:function(){var z=this.b
if(z!=null){C.a.O(z.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){if(this.gb6())return a+"disposed"
return a+C.b.ab(J.ac(this.a.e),0)+", "+C.b.ab(J.ac(this.b.e),0)},
P:function(){return this.C("")},
t:{
iL:function(a,b){var z,y,x
z=new F.dd()
y=a.a
if(y==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.v("May not create a line with vertices attached to different shapes."))
z.ci(a)
z.cj(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a_()
return z}}},
iM:{"^":"b;"},
km:{"^":"iM;",
ba:function(a,b,c){var z,y
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
dn:{"^":"b;0a",
aF:function(){var z=this.a
if(z!=null){C.a.O(z.a.b.b,this)
this.a.a.a_()}this.h3()},
h3:function(){var z=this.a
if(z!=null){C.a.O(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ab(J.ac(z.e),0)},
P:function(){return this.C("")}},
f1:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
bb:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hX())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dn()
if(r.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.G(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iL(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bI(p,o,m)}z=this.e
if(!(z==null))z.ac(0)},
as:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.as()||!1
if(!this.a.as())y=!1
z=this.e
if(!(z==null))z.ac(0)
return y},
fq:function(a,b,c,d,e){var z,y,x
H.u(d,"$isd",[F.ak],"$asd")
H.u(e,"$isd",[P.n],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
if(a.ba(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
iq:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.ak],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.f(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.fq(a,v,y,u,t))b.bb(u)}this.a.A()
this.c.cS()
this.d.cS()
this.b.iK()
this.c.cT(new F.km())
this.d.cT(new F.k1())
z=this.e
if(!(z==null))z.ac(0)},
hO:function(a){this.iq(new F.kY(),new F.jj())},
ck:function(){return this.hO(null)},
b7:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.b7()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.sel(new V.I(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.I(w,v,z).w(0,Math.sqrt(w*w+v*v+z*z))
if(!J.S(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.G(null)}}}}z=this.e
if(!(z==null))z.ac(0)},
hT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aY()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$bT().a)!==0)++w
if((x&$.$get$bU().a)!==0)++w
if((x&$.$get$bw().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
v=b.gd6(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.e9])
for(r=0,q=0;q<w;++q){p=b.hQ(q)
o=p.gd6(p)
C.a.p(s,q,new Z.e9(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].im(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.u(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.by(t)),35044)
y.bindBuffer(34962,null)
i=new Z.ea(new Z.fI(34962,j),s,b)
i.b=H.c([],[Z.cx])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dB(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cx(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dB(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cx(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dB(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cx(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.n(z,"\n")},
am:function(a){var z=this.e
if(!(z==null))z.G(a)},
a_:function(){return this.am(null)},
t:{
dq:function(){var z,y
z=new F.f1()
y=new F.kT(z)
y.b=!1
y.c=H.c([],[F.ak])
z.a=y
y=new F.jW(z)
y.b=H.c([],[F.dn])
z.b=y
y=new F.jV(z)
y.b=H.c([],[F.dd])
z.c=y
y=new F.jU(z)
y.b=H.c([],[F.ar])
z.d=y
z.e=null
return z}}},
jU:{"^":"b;a,0b",
hK:function(a){var z,y,x,w,v,u
H.u(a,"$isd",[F.ak],"$asd")
z=H.c([],[F.ar])
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
hL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$isd",[F.ak],"$asd")
z=H.c([],[F.ar])
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
cT:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.ba(0,v,t)){v.aF()
break}}}}},
cS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.ghV(x)
if(y)x.aF()}},
as:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cs())x=!1
return x},
cr:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cq())x=!1
return x},
b7:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].b7()},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
jV:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cT:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.ba(0,v,t)){v.aF()
break}}}}},
cS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.S(x.a,x.b)
if(y)x.aF()}},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.n(z,"\n")},
P:function(){return this.C("")}},
jW:{"^":"b;a,0b",
gm:function(a){return this.b.length},
iK:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aF()}},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
ak:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cv:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ci(this.cx,x,u,z,y,w,v,a,t)},
hX:function(){return this.cv(null)},
sa1:function(a,b){var z
if(!J.S(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a_()}},
sel:function(a){var z
a=a.w(0,Math.sqrt(a.F(a)))
if(!J.S(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a_()}},
seA:function(a){var z
if(!J.S(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
sdK:function(a){var z
if(!J.S(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a_()}},
im:function(a){var z,y
z=J.O(a)
if(z.v(a,$.$get$aY())){z=this.f
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aX())){z=this.r
y=[P.q]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aW())){z=this.x
y=[P.q]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aZ())){z=this.y
y=[P.q]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.v(a,$.$get$b_())){z=this.z
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bT())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bU())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$bw()))return H.c([this.ch],[P.q])
else if(z.v(a,$.$get$aV())){z=this.cx
y=[P.q]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.q])},
cs:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.K(0,new F.l2(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
cq:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.K(0,new F.l1(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.ab(J.ac(this.e),0))
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
x=C.a.n(z,", ")
return a+"{"+x+"}"},
P:function(){return this.C("")},
t:{
ci:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ak()
y=new F.l0(z)
y.b=H.c([],[F.dn])
z.b=y
y=new F.kX(z)
x=[F.dd]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.kU(z)
x=[F.ar]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fF()
z.e=0
y=$.$get$aY()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aX().a)!==0?e:null
z.x=(x&$.$get$aW().a)!==0?b:null
z.y=(x&$.$get$aZ().a)!==0?f:null
z.z=(x&$.$get$b_().a)!==0?g:null
z.Q=(x&$.$get$fG().a)!==0?c:null
z.ch=(x&$.$get$bw().a)!==0?i:0
z.cx=(x&$.$get$aV().a)!==0?a:null
return z}}},
l2:{"^":"m:5;a",
$1:function(a){var z,y
H.e(a,"$isar")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
l1:{"^":"m:5;a",
$1:function(a){var z,y
H.e(a,"$isar")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kT:{"^":"b;a,0b,0c",
A:function(){var z,y,x,w
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
this.a.a_()
return!0},
hN:function(a,b,c,d,e,f,g,h,i){var z=F.ci(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hM:function(a,b,c,d,e,f){return this.hN(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
as:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cs()
return!0},
cr:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cq()
return!0},
hU:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.S(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
this.A()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
kU:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
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
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ar]})
C.a.K(this.b,b)
C.a.K(this.c,new F.kV(this,b))
C.a.K(this.d,new F.kW(this,b))},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
kV:{"^":"m:5;a,b",
$1:function(a){H.e(a,"$isar")
if(!J.S(a.a,this.a))this.b.$1(a)}},
kW:{"^":"m:5;a,b",
$1:function(a){var z
H.e(a,"$isar")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
kX:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}},
kZ:{"^":"b;"},
kY:{"^":"kZ;",
ba:function(a,b,c){return J.S(b.f,c.f)}},
l_:{"^":"b;"},
jj:{"^":"l_;",
bb:function(a){var z,y,x,w
H.u(a,"$isd",[F.ak],"$asd")
z=new V.I(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.I(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.F(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].sel(z)
return}},
l0:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
P:function(){return this.C("")}}}],["","",,O,{"^":"",j2:{"^":"du;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
ah:[function(a){var z
H.e(a,"$isC")
z=this.dy
if(!(z==null))z.G(a)},function(){return this.ah(null)},"jb","$1","$0","gfG",0,2,1],
h8:[function(a){H.e(a,"$isC")
this.a=null
this.ah(a)},function(){return this.h8(null)},"jw","$1","$0","gh7",0,2,1],
j8:[function(a,b){var z=V.ax
z=new D.cy(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.ah(z)},"$2","gfD",8,0,32],
j9:[function(a,b){var z=V.ax
z=new D.cz(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.ah(z)},"$2","gfE",8,0,32],
dh:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a6=$.$get$aY()
if(c){z=$.$get$aX()
a6=new Z.bv(a6.a|z.a)}if(b){z=$.$get$aW()
a6=new Z.bv(a6.a|z.a)}if(a){z=$.$get$aZ()
a6=new Z.bv(a6.a|z.a)}if(a0){z=$.$get$b_()
a6=new Z.bv(a6.a|z.a)}if(a2){z=$.$get$aV()
a6=new Z.bv(a6.a|z.a)}return new A.j7(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
W:function(a,b){H.u(a,"$isd",[T.fa],"$asd")},
aw:function(a,b){var z,y,x,w
for(z=this.dx.a,z=new J.aE(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
y.a=new V.I(0,0,1)
x=y.b
if(x!=null){w=x.ax(0,b,y)
if(w!=null)y.a=w.cW(y.a)}}},
iM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.dh()
y=a.fr.k(0,z.al)
if(y==null){y=A.j3(z,a.a)
x=y.b
if(x.length===0)H.r(P.v("May not cache a shader with no name."))
if(a.fr.bw(0,x))H.r(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.by
z=b.e
if(!(z instanceof Z.ea)){b.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)b.d.as()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cr()
t.a.cr()
t=t.e
if(!(t==null))t.ac(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.hU()
s=s.e
if(!(s==null))s.ac(0)}q=b.d.hT(new Z.l3(a.a),v)
q.aW($.$get$aY()).e=this.a.Q.c
if(z)q.aW($.$get$aX()).e=this.a.cx.c
if(u)q.aW($.$get$aW()).e=this.a.ch.c
if(w.rx)q.aW($.$get$aZ()).e=this.a.cy.c
if(t)q.aW($.$get$b_()).e=this.a.db.c
if(w.x1)q.aW($.$get$aV()).e=this.a.dx.c
b.e=q}z=T.fa
p=H.c([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.i3()
if(w.fx){u=this.a
t=a.dx
t=t.ga0(t)
u=u.dy
u.toString
u.an(t.ae(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga0(t)
s=a.dx
s=t.j(0,s.ga0(s))
a.cx=s
t=s}u=u.fr
u.toString
u.an(t.ae(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giH()
s=a.dx
s=t.j(0,s.ga0(s))
a.ch=s
t=s}u=u.fy
u.toString
u.an(t.ae(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.an(t.ae(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.an(t.ae(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.an(C.w.ae(t,!0))}if(w.at>0){o=this.e.a.length
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
m=new Float32Array(H.by(H.u(s.ae(0,!0),"$isd",u,"$asd")))
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
case C.f:this.W(p,this.f.d)
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
case C.h:this.W(p,this.f.e)
u=this.a
t=this.f.e
u.a9(u.ry,u.x1,t)
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
case C.f:this.W(p,this.r.d)
u=this.a
t=this.r.d
u.ai(u.y1,u.at,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.r.e)
u=this.a
t=this.r.e
u.a9(u.y2,u.at,t)
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
u=u.al
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.W(p,this.x.d)
u=this.a
t=this.x.d
u.ai(u.by,u.bz,t)
t=this.a
u=this.x.f
t=t.al
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.x.e)
u=this.a
t=this.x.e
u.a9(u.dO,u.bz,t)
t=this.a
u=this.x.f
t=t.al
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bA
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.W(p,this.y.d)
u=this.a
t=this.y.d
u.ai(u.dP,u.bB,t)
t=this.a
u=this.y.f
t=t.bA
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.y.e)
u=this.a
t=this.y.e
u.a9(u.dQ,u.bB,t)
t=this.a
u=this.y.f
t=t.bA
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bC
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bE
t.a.uniform1f(t.d,r)
break
case C.f:this.W(p,this.z.d)
u=this.a
t=this.z.d
u.ai(u.dR,u.bD,t)
t=this.a
u=this.z.f
t=t.bC
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bE
u.a.uniform1f(u.d,r)
break
case C.h:this.W(p,this.z.e)
u=this.a
t=this.z.e
u.a9(u.dS,u.bD,t)
t=this.a
u=this.z.f
t=t.bC
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bE
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.e2
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cA
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.cW(i.a)
r=s.a
g=s.b
f=s.c
f=s.w(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.e3
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cB
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbf(i)
r=h.b
g=s.gd_(s)
f=s.gd0(s)
s=s.gd1(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bk(i.gbf(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gaj(i)
f=h.d
g=s.gbP()
r=s.gbl()
s=s.gbv()
f.a.uniform3f(f.d,g,r,s)
s=i.gcl()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gcm()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gcn()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.e4
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cC
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbf(i)
r=h.b
g=s.gd_(s)
f=s.gd0(s)
s=s.gd1(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcz(i).jE()
f=h.c
g=s.gaT(s)
r=s.gaU(s)
s=s.gaV()
f.a.uniform3f(f.d,g,r,s)
s=l.bk(i.gbf(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaj(i)
r=h.e
g=s.gbP()
f=s.gbl()
s=s.gbv()
r.a.uniform3f(r.d,g,f,s)
s=i.gjC()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gjA()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gcl()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gcm()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gcn()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.e5
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.cD
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gbh()
H.u(p,"$isd",s,"$asd")
if(!C.a.X(p,r)){r.sb8(0,p.length)
C.a.h(p,r)}r=i.gcz(i)
g=h.d
f=r.gaT(r)
e=r.gaU(r)
r=r.gaV()
g.a.uniform3f(g.d,f,e,r)
r=i.gbQ()
e=h.b
f=r.gaT(r)
g=r.gaU(r)
r=r.gaV()
e.a.uniform3f(e.d,f,g,r)
r=i.gbg(i)
g=h.c
f=r.gaT(r)
e=r.gaU(r)
r=r.gaV()
g.a.uniform3f(g.d,f,e,r)
r=l.cW(i.gcz(i))
e=r.a
f=r.b
g=r.c
g=r.w(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gaj(i)
f=h.f
e=g.gbP()
r=g.gbl()
g=g.gbv()
f.a.uniform3f(f.d,e,r,g)
g=i.gbh()
r=g.gb9(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gb9(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb8(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.e6
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.y,t=u.length,s=[P.q],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.cE
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gbh()
H.u(p,"$isd",r,"$asd")
if(!C.a.X(p,g)){g.sb8(0,p.length)
C.a.h(p,g)}d=l.j(0,i.ga0(i))
g=i.ga0(i).bk(new V.a7(0,0,0))
f=h.b
e=g.gd_(g)
c=g.gd0(g)
g=g.gd1(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bk(new V.a7(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.ei(0)
c=h.d
m=new Float32Array(H.by(H.u(new V.cC(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ae(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gaj(i)
g=h.e
e=c.gbP()
f=c.gbl()
c=c.gbv()
g.a.uniform3f(g.d,e,f,c)
c=i.gbh()
g=c.gb9(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gb9(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gb8(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcl()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcm()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gcn()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.e7
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga0(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cF
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbh()
H.u(p,"$isd",z,"$asd")
if(!C.a.X(p,s)){s.sb8(0,p.length)
C.a.h(p,s)}s=i.gbf(i)
r=h.b
g=s.gd_(s)
f=s.gd0(s)
s=s.gd1(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcz(i)
f=h.c
g=s.gaT(s)
r=s.gaU(s)
s=s.gaV()
f.a.uniform3f(f.d,g,r,s)
s=i.gbQ()
r=h.d
g=s.gaT(s)
f=s.gaU(s)
s=s.gaV()
r.a.uniform3f(r.d,g,f,s)
s=i.gbg(i)
f=h.e
g=s.gaT(s)
r=s.gaU(s)
s=s.gaV()
f.a.uniform3f(f.d,g,r,s)
s=l.bk(i.gbf(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbh()
r=s.gb9(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gb9(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb8(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gaj(i)
r=h.y
g=s.gbP()
f=s.gbl()
s=s.gbv()
r.a.uniform3f(r.d,g,f,s)
s=i.gjK()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjL()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gcl()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gcm()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gcn()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.W(p,this.Q.d)
z=this.a
u=this.Q.d
z.ai(z.dT,z.bF,u)
break
case C.h:this.W(p,this.Q.e)
z=this.a
u=this.Q.e
z.a9(z.dU,z.bF,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga0(u).ei(0)
a.Q=u}z=z.id
z.toString
z.an(u.ae(0,!0))}if(w.dy){this.W(p,this.ch)
z=this.a
u=this.ch
z.a9(z.dV,z.dW,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bG
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.W(p,this.cx.d)
z=this.a
u=this.cx.d
z.ai(z.dX,z.bH,u)
u=this.a
z=this.cx.f
u=u.bG
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.W(p,this.cx.e)
z=this.a
u=this.cx.e
z.a9(z.dY,z.bH,u)
u=this.a
z=this.cx.f
u=u.bG
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bJ
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bI
u.a.uniform1f(u.d,s)
break
case C.f:this.W(p,this.cy.d)
z=this.a
u=this.cy.d
z.ai(z.dZ,z.bK,u)
u=this.a
z=this.cy.f
u=u.bJ
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bI
z.a.uniform1f(z.d,s)
break
case C.h:this.W(p,this.cy.e)
z=this.a
u=this.cy.e
z.a9(z.e_,z.bK,u)
u=this.a
z=this.cy.f
u=u.bJ
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bI
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bL
z.a.uniform1f(z.d,t)
break
case C.f:this.W(p,this.db.d)
z=this.a
t=this.db.d
z.ai(z.e0,z.bM,t)
t=this.a
z=this.db.f
t=t.bL
t.a.uniform1f(t.d,z)
break
case C.h:this.W(p,this.db.e)
z=this.a
t=this.db.e
z.a9(z.e1,z.bM,t)
t=this.a
z=this.db.f
t=t.bL
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bu(a)
z=b.e
z.bu(a)
z.aZ(a)
z.eE(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].eE(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.i2()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dh().al}},j5:{"^":"dh;0f,a,b,0c,0d,0e"},dh:{"^":"b;",
br:["eU",function(){}]},j6:{"^":"dh;a,b,0c,0d,0e"},bi:{"^":"dh;0f,a,b,0c,0d,0e",
dw:function(a){var z,y
if(!J.S(this.f,a)){z=this.f
this.f=a
y=new D.M(this.b+".color",z,a,this,[V.a2])
y.b=!0
this.a.ah(y)}},
br:["bV",function(){this.eU()
this.dw(new V.a2(1,1,1))}],
saj:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.br()
z=this.a
z.a=null
z.ah(null)}this.dw(b)}},j8:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
hc:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.ah(z)}},
br:function(){this.bV()
this.hc(1)}},j9:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
ce:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.ah(z)}},
br:function(){this.bV()
this.ce(100)}},du:{"^":"b;"}}],["","",,T,{"^":"",fa:{"^":"cZ;"},ka:{"^":"b;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",bF:{"^":"b;",
aY:function(a,b){return!0},
i:function(a){return"all"},
$isaR:1},aR:{"^":"b;"},eJ:{"^":"b;",
aY:["eT",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].aY(0,b))return!0
return!1}],
i:["d7",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaR:1},az:{"^":"eJ;0a",
aY:function(a,b){return!this.eT(0,b)},
i:function(a){return"!["+this.d7(0)+"]"}},jD:{"^":"b;0a,0b",
aY:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bR(this.a)
y=H.bR(this.b)
return z+".."+y},
$isaR:1,
t:{
X:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.H(a,0)
y=C.b.H(b,0)
x=new V.jD()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jS:{"^":"b;0a",
eZ:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.b6(0,0,[P.n,P.U])
for(y=new H.df(a,a.gm(a),0,[H.am(a,"y",0)]);y.E();)z.p(0,y.d,!0)
this.a=z},
aY:function(a,b){return this.a.bw(0,b)},
i:function(a){var z=this.a
return P.cf(z.ga6(z),0,null)},
$isaR:1,
t:{
x:function(a){var z=new V.jS()
z.eZ(a)
return z}}},f3:{"^":"b;a,b,0c,0d",
gir:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fh(this.a.l(0,b))
w.a=H.c([],[V.aR])
w.c=!1
C.a.h(this.c,w)
return w},
i5:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.aY(0,a))return w}return},
i:function(a){return this.b}},fe:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.dV(this.b,"\n","\\n")
y=H.dV(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ff:{"^":"b;a,b,0c",
aH:function(a,b,c){var z,y,x
H.u(c,"$isd",[P.h],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.B)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},ki:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.f3(this,b)
z.c=H.c([],[V.fh])
this.a.p(0,b,z)}return z},
R:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.ff(this,a)
y=P.h
z.c=new H.b6(0,0,[y,y])
this.b.p(0,a,z)}return z},
eD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fe])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.i5(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cf(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.gir(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cf(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.fe(o==null?p.b:o,q,t)}++t}}},
t:{
cH:function(){var z,y
z=new V.ki()
y=P.h
z.a=new H.b6(0,0,[y,V.f3])
z.b=new H.b6(0,0,[y,V.ff])
return z}}},fh:{"^":"eJ;b,0c,0a",
i:function(a){return this.b.b+": "+this.d7(0)}}}],["","",,X,{"^":"",ec:{"^":"b;",$isaS:1},iu:{"^":"f7;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z}},jm:{"^":"b;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.Q()
this.f=z}return z},
b0:[function(a){var z
H.e(a,"$isC")
z=this.f
if(!(z==null))z.G(a)},function(){return this.b0(null)},"j1","$1","$0","gd9",0,2,1],
sbc:function(a){var z,y
if(!J.S(this.b,a)){z=this.b
if(z!=null)z.gB().O(0,this.gd9())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd9())
z=new D.M("mover",y,this.b,this,[U.ad])
z.b=!0
this.b0(z)}},
$isaS:1,
$isec:1},f7:{"^":"b;"}}],["","",,V,{"^":"",
nS:function(a){P.kh(C.N,new V.nT(a))},
b3:{"^":"b;",
bo:function(a){this.b=new P.ix(C.O)
this.c=null
this.d=H.c([],[[P.d,W.bd]])},
M:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bd]))
y=a.split("\n")
for(z=y.length,x=[W.bd],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.H(u)
s=this.b.fk(u,0,u.length)
r=s==null?u:s
C.M.eN(t,H.dV(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gav(this.d),t)}},
ep:function(a,b){var z,y,x,w
H.u(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bd]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bx()
this.c=y}for(y=y.eD(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)this.bO(y[w])}},
nT:{"^":"m:52;a",
$1:function(a){H.e(a,"$isbs")
P.dU(C.d.eC(this.a.gib(),2)+" fps")}},
i8:{"^":"b3;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Class":this.M(a.b,"#551")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break
case"Type":this.M(a.b,"#B11")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bx:function(){var z,y,x,w
z=V.cH()
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
w=[V.aR]
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
x.d=x.a.R("Num")
x=z.l(0,"Float")
x.d=x.a.R("Num")
x=z.l(0,"Sym")
x.d=x.a.R("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.R("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.R("String")
x=z.l(0,"EndComment")
x.d=x.a.R("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.R("Whitespace")
x=z.l(0,"Id")
y=x.a.R("Id")
x.d=y
x=[P.h]
y.aH(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aH(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aH(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iv:{"^":"b3;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Builtin":this.M(a.b,"#411")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Preprocess":this.M(a.b,"#737")
break
case"Reserved":this.M(a.b,"#119")
break
case"Symbol":this.M(a.b,"#611")
break
case"Type":this.M(a.b,"#171")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bx:function(){var z,y,x,w
z=V.cH()
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
w=[V.aR]
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
y.d=y.a.R("Num")
y=z.l(0,"Float")
y.d=y.a.R("Num")
y=z.l(0,"Sym")
y.d=y.a.R("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.R("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.R("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.R("Whitespace")
y=z.l(0,"Id")
x=y.a.R("Id")
y.d=x
y=[P.h]
x.aH(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aH(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aH(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iw:{"^":"b3;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Attr":this.M(a.b,"#911")
this.M("=","#111")
break
case"Id":this.M(a.b,"#111")
break
case"Other":this.M(a.b,"#111")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break}},
bx:function(){var z,y,x
z=V.cH()
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
x.a=H.c([],[V.aR])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.X("a","z")
C.a.h(x.a,y)
y=V.X("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.R("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.R("String")
y=z.l(0,"Id")
x=y.a.R("Id")
y.d=x
x.aH(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.l(0,"Attr")
x.d=x.a.R("Attr")
x=z.l(0,"Other")
x.d=x.a.R("Other")
return z}},
jo:{"^":"b3;a,0b,0c,0d",
ep:function(a,b){H.u(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bd]])
this.M(C.a.n(b,"\n"),"#111")},
bO:function(a){},
bx:function(){return}},
jB:{"^":"b;a,b,0c",
dF:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fB().gcR().k(0,H.j(z))
if(y==null)if(d){c.$0()
this.dD(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e_(this.c).h(0,v)
t=W.iA("radio")
t.checked=x
t.name=z
z=W.ah
W.a8(t,"change",H.l(new V.jC(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.e_(this.c).h(0,w.createElement("br"))},
b3:function(a,b,c){return this.dF(a,b,c,!1)},
dD:function(a){var z,y,x,w,v
z=P.fB()
y=P.h
x=P.iS(z.gcR(),y,y)
x.p(0,this.a,a)
w=z.ew(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.ma([],[]).cX(""),"",v)}},
jC:{"^":"m:15;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dD(this.d)}}},
jX:{"^":"b;0a,0b",
f0:function(a,b){var z,y,x,w,v,u,t
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
W.a8(z,"scroll",H.l(new V.k_(x),{func:1,ret:-1,args:[t]}),!1,t)},
dI:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$isd",[P.h],"$asd")
this.hf()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eD(C.a.ik(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hz(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.ck(C.B,s,C.k,!1)
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
eJ:function(a){var z,y,x,w
z=new V.i8("dart")
z.bo("dart")
y=new V.iv("glsl")
y.bo("glsl")
x=new V.iw("html")
x.bo("html")
w=C.a.i6(H.c([z,y,x],[V.b3]),new V.k0(a))
if(w!=null)return w
z=new V.jo("plain")
z.bo("plain")
return z},
dG:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.u(a2,"$isd",[P.h],"$asd")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c4(w).a3(w,"+")){C.a.p(a2,x,C.b.ao(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a3(w,"-")){C.a.p(a2,x,C.b.ao(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eJ(a0)
v.ep(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.ck(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e1(null)
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
for(b=C.a.gZ(w);b.E();)h.appendChild(b.gN(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hJ:function(a){var z,y,x,w,v,u,t
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
x=H.e(w.insertCell(-1),"$isdt").style
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
t=H.e(w.insertCell(-1),"$isdt")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hf:function(){var z,y,x,w
if(this.b!=null)return
z=V.cH()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.az()
w=[V.aR]
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
x.d=x.a.R("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.R("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.R("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.R("Link")
x=z.l(0,"Other")
x.d=x.a.R("Other")
this.b=z},
t:{
jY:function(a,b){var z=new V.jX()
z.f0(a,!0)
return z}}},
k_:{"^":"m:15;a",
$1:function(a){P.fc(C.q,new V.jZ(this.a))}},
jZ:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.d.ad(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
k0:{"^":"m:54;a",
$1:function(a){return H.e(a,"$isb3").a===this.a}}}],["","",,U,{"^":"",
hv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=V.jY("Test 020",!0)
y=W.ed(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.dI(H.c(["Test of the Matrial Lighting shader with multiple moving directional lights."],x))
z.hJ(H.c(["shapes"],x))
z.dI(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.kf(w,!0,!0,!0,!1)
u=U.dp(0,0,0.3,0,0,0)
t=D.d5(new V.a2(1,0,0),u)
u=U.dp(0.4,0,0,0,0,0)
s=D.d5(new V.a2(0,1,0),u)
u=U.dp(0.5,0,0.5,0,0,0)
r=D.d5(new V.a2(0,0,1),u)
q=new O.j2()
u=O.d3(V.ax)
q.e=u
u.bn(q.gfD(),q.gfE())
u=new O.bi(q,"emission")
u.c=C.c
u.f=new V.a2(0,0,0)
q.f=u
u=new O.bi(q,"ambient")
u.c=C.c
u.f=new V.a2(0,0,0)
q.r=u
u=new O.bi(q,"diffuse")
u.c=C.c
u.f=new V.a2(0,0,0)
q.x=u
u=new O.bi(q,"invDiffuse")
u.c=C.c
u.f=new V.a2(0,0,0)
q.y=u
u=new O.j9(q,"specular")
u.c=C.c
u.f=new V.a2(0,0,0)
u.ch=100
q.z=u
u=new O.j6(q,"bump")
u.c=C.c
q.Q=u
q.ch=null
u=new O.bi(q,"reflect")
u.c=C.c
u.f=new V.a2(0,0,0)
q.cx=u
u=new O.j8(q,"refract")
u.c=C.c
u.f=new V.a2(0,0,0)
u.ch=1
q.cy=u
u=new O.j5(q,"alpha")
u.c=C.c
u.f=1
q.db=u
u=new D.iK()
u.bW(D.a6)
u.e=H.c([],[D.cu])
u.f=H.c([],[D.jp])
u.r=H.c([],[D.k2])
u.x=H.c([],[D.kb])
u.y=H.c([],[D.kc])
u.z=H.c([],[D.kd])
u.Q=null
u.ch=null
u.d5(u.gfC(),u.gfX(),u.gfZ())
q.dx=u
p=u.Q
if(p==null){p=D.Q()
u.Q=p
u=p}else u=p
u.h(0,q.gh7())
u=q.dx
p=u.ch
if(p==null){p=D.Q()
u.ch=p
u=p}else u=p
u.h(0,q.gfG())
q.dy=null
q.dx.h(0,t)
q.dx.h(0,s)
q.dx.h(0,r)
q.f.saj(0,new V.a2(0,0,0))
u=q.r
u.saj(0,new V.a2(0.1,0.1,0.1))
u=q.x
u.saj(0,new V.a2(0.7,0.7,0.7))
u=q.z
u.saj(0,new V.a2(0.3,0.3,0.3))
u=q.z
if(u.c===C.c){u.c=C.i
u.bV()
u.ce(100)
p=u.a
p.a=null
p.ah(null)}u.ce(100)
o=E.eu(null,!0,null,"",null,null)
o.saf(0,F.hB(30,1,15,0.5))
n=E.eu(null,!0,null,"",null,null)
n.sbc(U.eh(V.eN(3,3,3,1)))
u=F.dO(1,null,null,1)
u.b7()
n.saf(0,u)
m=new U.ex()
m.bW(U.ad)
m.bn(m.gfB(),m.gfY())
m.e=null
m.f=V.ce()
m.r=0
u=v.r
p=new U.kJ()
l=U.d4()
l.scZ(0,!0)
l.scK(6.283185307179586)
l.scM(0)
l.sa1(0,0)
l.scL(100)
l.sU(0)
l.scw(0.5)
p.b=l
k=p.gaL()
l.gB().h(0,k)
l=U.d4()
l.scZ(0,!0)
l.scK(6.283185307179586)
l.scM(0)
l.sa1(0,0)
l.scL(100)
l.sU(0)
l.scw(0.5)
p.c=l
l.gB().h(0,k)
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
j=new X.aH(!1,!1,!1)
i=p.d
p.d=j
l=[X.aH]
k=new D.M("modifiers",i,j,p,l)
k.b=!0
p.J(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.M("invertX",k,!1,p,[P.U])
k.b=!0
p.J(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.M("invertY",k,!1,p,[P.U])
k.b=!0
p.J(k)}p.b4(u)
m.h(0,p)
u=v.r
p=new U.kI()
k=U.d4()
k.scZ(0,!0)
k.scK(6.283185307179586)
k.scM(0)
k.sa1(0,0)
k.scL(100)
k.sU(0)
k.scw(0.2)
p.b=k
k.gB().h(0,p.gaL())
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
j=new X.aH(!0,!1,!1)
i=p.c
p.c=j
k=new D.M("modifiers",i,j,p,l)
k.b=!0
p.J(k)
p.b4(u)
m.h(0,p)
u=v.r
p=new U.kK()
p.c=0.01
p.d=0
p.e=0
j=new X.aH(!1,!1,!1)
p.b=j
l=new D.M("modifiers",null,j,p,l)
l.b=!0
p.J(l)
p.b4(u)
m.h(0,p)
m.h(0,U.eh(V.aG(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=new M.ik()
p=O.d3(E.aQ)
u.d=p
p.bn(u.gfH(),u.gfI())
u.e=null
u.f=null
u.r=null
u.x=null
h=new X.jm()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.sbc(null)
p=h.c
if(!$.o.$2(p,1.0471975511965976)){i=h.c
h.c=1.0471975511965976
p=new D.M("fov",i,1.0471975511965976,h,[P.q])
p.b=!0
h.b0(p)}p=h.d
if(!$.o.$2(p,0.1)){i=h.d
h.d=0.1
p=new D.M("near",i,0.1,h,[P.q])
p.b=!0
h.b0(p)}p=h.e
if(!$.o.$2(p,2000)){i=h.e
h.e=2000
p=new D.M("far",i,2000,h,[P.q])
p.b=!0
h.b0(p)}p=u.a
if(p!==h){if(p!=null)p.gB().O(0,u.gap())
i=u.a
u.a=h
h.gB().h(0,u.gap())
p=new D.M("camera",i,u.a,u,[X.ec])
p.b=!0
u.aM(p)}g=new X.iu()
p=new V.bb(0,0,0,1)
g.a=p
g.b=!0
g.c=2000
g.d=!0
g.e=0
g.f=!1
p=V.eX(0,0,1,1)
g.r=p
p=u.b
if(p!==g){if(p!=null)p.gB().O(0,u.gap())
i=u.b
u.b=g
g.gB().h(0,u.gap())
p=new D.M("target",i,u.b,u,[X.f7])
p.b=!0
u.aM(p)}u.sez(null)
u.sez(q)
u.d.h(0,o)
u.d.h(0,n)
u.a.sbc(m)
p=v.d
if(p!==u){if(p!=null)p.gB().O(0,v.gd8())
v.d=u
u.gB().h(0,v.gd8())
v.f3()}u=new V.jB("shapes",!0)
x=x.getElementById("shapes")
u.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
u.b3(0,"Cube",new U.nF(o))
u.b3(0,"Cylinder",new U.nG(o))
u.b3(0,"Cone",new U.nH(o))
u.b3(0,"Sphere",new U.nI(o))
u.dF(0,"Toroid",new U.nJ(o),!0)
u.b3(0,"Knot",new U.nK(o))
x=v.z
if(x==null){x=D.Q()
v.z=x}u={func:1,ret:-1,args:[D.C]}
p=H.l(new U.nL(z,q),u)
l=x.b
if(l==null){u=H.c([],[u])
x.b=u
x=u}else x=l
C.a.h(x,p)
V.nS(v)},
nF:{"^":"m:0;a",
$0:function(){this.a.saf(0,F.dO(1,null,null,1))}},
nG:{"^":"m:0;a",
$0:function(){this.a.saf(0,F.hl(1,!0,!0,1,40,1))}},
nH:{"^":"m:0;a",
$0:function(){this.a.saf(0,F.hl(1,!0,!1,1,40,0))}},
nI:{"^":"m:0;a",
$0:function(){this.a.saf(0,F.nU(6,null,6))}},
nJ:{"^":"m:0;a",
$0:function(){this.a.saf(0,F.hB(30,1,15,0.5))}},
nK:{"^":"m:0;a",
$0:function(){this.a.saf(0,F.nC(120,1,2,12,0.3,3))}},
nL:{"^":"m:10;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isC")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dG("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dG("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eB.prototype
return J.iF.prototype}if(typeof a=="string")return J.cb.prototype
if(a==null)return J.eC.prototype
if(typeof a=="boolean")return J.iE.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cS(a)}
J.aM=function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cS(a)}
J.c3=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cS(a)}
J.nq=function(a){if(typeof a=="number")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ch.prototype
return a}
J.nr=function(a){if(typeof a=="number")return J.ca.prototype
if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ch.prototype
return a}
J.c4=function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ch.prototype
return a}
J.aC=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cS(a)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).v(a,b)}
J.hC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nq(a).S(a,b)}
J.dX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nr(a).j(a,b)}
J.dY=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hs(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aM(a).k(a,b)}
J.cX=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hs(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c3(a).p(a,b,c)}
J.hD=function(a,b){return J.c4(a).H(a,b)}
J.hE=function(a,b,c){return J.aC(a).h5(a,b,c)}
J.hF=function(a,b,c,d){return J.aC(a).dH(a,b,c,d)}
J.hG=function(a,b){return J.c4(a).Y(a,b)}
J.cY=function(a,b,c){return J.aM(a).hW(a,b,c)}
J.co=function(a,b){return J.c3(a).I(a,b)}
J.hH=function(a,b,c,d){return J.c3(a).aG(a,b,c,d)}
J.dZ=function(a,b){return J.c3(a).K(a,b)}
J.hI=function(a){return J.aC(a).ghR(a)}
J.e_=function(a){return J.aC(a).gct(a)}
J.c6=function(a){return J.O(a).gV(a)}
J.b2=function(a){return J.c3(a).gZ(a)}
J.ao=function(a){return J.aM(a).gm(a)}
J.hJ=function(a){return J.aC(a).gcP(a)}
J.hK=function(a){return J.aC(a).giU(a)}
J.e0=function(a){return J.c3(a).iJ(a)}
J.hL=function(a,b){return J.aC(a).iN(a,b)}
J.hM=function(a,b){return J.aC(a).sa2(a,b)}
J.hN=function(a,b,c){return J.c4(a).u(a,b,c)}
J.hO=function(a){return J.c4(a).iY(a)}
J.ac=function(a){return J.O(a).i(a)}
I.aa=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cr.prototype
C.l=W.d2.prototype
C.M=W.bd.prototype
C.P=J.t.prototype
C.a=J.bh.prototype
C.e=J.eB.prototype
C.w=J.eC.prototype
C.d=J.ca.prototype
C.b=J.cb.prototype
C.W=J.cc.prototype
C.a1=H.dm.prototype
C.a2=W.jg.prototype
C.E=J.jn.prototype
C.F=W.k9.prototype
C.u=J.ch.prototype
C.G=W.bV.prototype
C.H=W.l5.prototype
C.J=new P.hT(!1)
C.I=new P.hS(C.J)
C.K=new P.jl()
C.L=new P.kS()
C.j=new P.lT()
C.c=new A.ct(0,"ColorSourceType.None")
C.i=new A.ct(1,"ColorSourceType.Solid")
C.f=new A.ct(2,"ColorSourceType.Texture2D")
C.h=new A.ct(3,"ColorSourceType.TextureCube")
C.q=new P.be(0)
C.N=new P.be(5e6)
C.O=new P.iy("element",!0,!1,!1,!1)
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
C.a0=new H.i4(0,{},C.A,[P.h,P.h])
C.k=new P.kL(!1)
$.aF=0
$.bG=null
$.e7=null
$.dI=!1
$.hq=null
$.hi=null
$.hy=null
$.cR=null
$.cU=null
$.dR=null
$.bz=null
$.c_=null
$.c0=null
$.dJ=!1
$.Y=C.j
$.aP=null
$.d6=null
$.et=null
$.es=null
$.eo=null
$.en=null
$.em=null
$.el=null
$.o=V.ja()
$.eT=null
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
I.$lazy(y,x,w)}})(["ek","$get$ek",function(){return H.hp("_$dart_dartClosure")},"da","$get$da",function(){return H.hp("_$dart_js")},"fi","$get$fi",function(){return H.aJ(H.cI({
toString:function(){return"$receiver$"}}))},"fj","$get$fj",function(){return H.aJ(H.cI({$method$:null,
toString:function(){return"$receiver$"}}))},"fk","$get$fk",function(){return H.aJ(H.cI(null))},"fl","$get$fl",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fp","$get$fp",function(){return H.aJ(H.cI(void 0))},"fq","$get$fq",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fn","$get$fn",function(){return H.aJ(H.fo(null))},"fm","$get$fm",function(){return H.aJ(function(){try{null.$method$}catch(z){return z.message}}())},"fs","$get$fs",function(){return H.aJ(H.fo(void 0))},"fr","$get$fr",function(){return H.aJ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dD","$get$dD",function(){return P.l6()},"c1","$get$c1",function(){return[]},"fE","$get$fE",function(){return P.kP()},"fL","$get$fL",function(){return H.je(H.by(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"h7","$get$h7",function(){return P.jI("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"he","$get$he",function(){return P.n_()},"ei","$get$ei",function(){return{}},"fP","$get$fP",function(){return P.eG(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dE","$get$dE",function(){return P.de(P.h,P.c9)},"fH","$get$fH",function(){return Z.au(0)},"fF","$get$fF",function(){return Z.au(511)},"aY","$get$aY",function(){return Z.au(1)},"aX","$get$aX",function(){return Z.au(2)},"aW","$get$aW",function(){return Z.au(4)},"aZ","$get$aZ",function(){return Z.au(8)},"b_","$get$b_",function(){return Z.au(16)},"bT","$get$bT",function(){return Z.au(32)},"bU","$get$bU",function(){return Z.au(64)},"fG","$get$fG",function(){return Z.au(96)},"bw","$get$bw",function(){return Z.au(128)},"aV","$get$aV",function(){return Z.au(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.L,args:[F.ar]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[F.ak,P.q,P.q]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.L,args:[D.C]},{func:1,ret:-1,args:[P.n,[P.i,E.aQ]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.U,args:[W.aI]},{func:1,ret:P.L,args:[W.ah]},{func:1,ret:-1,args:[P.n,[P.i,U.ad]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.n,[P.i,D.a6]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.U,args:[W.V,P.h,P.h,W.cj]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:P.U,args:[W.G]},{func:1,ret:P.L,args:[,]},{func:1,ret:W.G},{func:1,ret:V.a7,args:[P.q]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.U,args:[P.h]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:-1,args:[P.n,[P.i,V.ax]]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.L,args:[P.a5]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.U,args:[P.q,P.q]},{func:1,ret:P.T,args:[P.n]},{func:1,ret:-1,args:[W.bV]},{func:1,ret:P.L,args:[P.h,,]},{func:1,ret:P.U,args:[[P.i,D.a6]]},{func:1,ret:P.L,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.K,P.h,P.h],args:[[P.K,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.b0,,],args:[,]},{func:1,ret:P.n,args:[[P.d,P.n],P.n]},{func:1,ret:P.L,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aA]},{func:1,ret:P.L,args:[P.bs]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.U,args:[V.b3]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.V,args:[W.G]}]
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
if(x==y)H.nX(d||a)
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
Isolate.dP=a.dP
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
if(typeof dartMainRunner==="function")dartMainRunner(U.hv,[])
else U.hv([])})})()
//# sourceMappingURL=test.dart.js.map
