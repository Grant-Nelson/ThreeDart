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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dP(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dR=function(){}
var dart=[["","",,H,{"^":"",oC:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cT:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dT==null){H.nK()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ck("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$da()]
if(v!=null)return v
v=H.nP(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.$get$da(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
t:{"^":"b;",
v:function(a,b){return a===b},
gV:function(a){return H.bQ(a)},
i:["eN",function(a){return"Instance of '"+H.bl(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iL:{"^":"t;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isU:1},
eH:{"^":"t;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isM:1},
db:{"^":"t;",
gV:function(a){return 0},
i:["eP",function(a){return String(a)}]},
ju:{"^":"db;"},
cl:{"^":"db;"},
cf:{"^":"db;",
i:function(a){var z=a[$.$get$en()]
if(z==null)return this.eP(a)
return"JavaScript function for "+H.j(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscb:1},
bh:{"^":"t;$ti",
h:function(a,b){H.A(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.D("add"))
a.push(b)},
K:function(a,b){var z
if(!!a.fixed$length)H.r(P.D("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aN(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.j(a[y]))
return z.join(b)},
il:function(a){return this.n(a,"")},
ia:function(a,b,c,d){var z,y,x
H.A(b,d)
H.l(c,{func:1,ret:d,args:[d,H.z(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aN(a))}return y},
i8:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.U,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aN(a))}throw H.a(H.d8())},
i7:function(a,b){return this.i8(a,b,null)},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
bR:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a4(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a4(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gau:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.d8())},
aF:function(a,b,c,d){var z
H.A(d,H.z(a,0))
if(!!a.immutable$list)H.r(P.D("fill range"))
P.aS(b,c,a.length,null,null,null)
for(z=b;z.P(0,c);z=z.D(0,1))a[z]=d},
dC:function(a,b){var z,y
H.l(b,{func:1,ret:P.U,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aN(a))}return!1},
U:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
i:function(a){return P.d7(a,"[","]")},
gY:function(a){return new J.aD(a,a.length,0,[H.z(a,0)])},
gV:function(a){return H.bQ(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.D("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ct(b,"newLength",null))
if(b<0)throw H.a(P.a4(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aK(a,b))
if(b>=a.length||b<0)throw H.a(H.aK(a,b))
return a[b]},
p:function(a,b,c){H.F(b)
H.A(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.D("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aK(a,b))
if(b>=a.length||b<0)throw H.a(H.aK(a,b))
a[b]=c},
$isi:1,
$isd:1,
t:{
iK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ct(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a4(a,0,4294967295,"length",null))
return J.eE(new Array(a),b)},
eE:function(a,b){return J.bK(H.c(a,[b]))},
bK:function(a){H.c5(a)
a.fixed$length=Array
return a}}},
oB:{"^":"bh;$ti"},
aD:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cd:{"^":"t;",
gik:function(a){return a===0?1/a<0:a<0},
j0:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.D(""+a+".toInt()"))},
cB:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.D(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.D(""+a+".round()"))},
ex:function(a,b){var z
if(b>20)throw H.a(P.a4(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gik(a))return"-"+z
return z},
be:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a4(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.X(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.D("Unexpected toString result: "+z))
x=J.aL(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a*b},
bi:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eT:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ds(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.ds(a,b)},
ds:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.D("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aQ:function(a,b){var z
if(a>0)z=this.dq(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hg:function(a,b){if(b<0)throw H.a(H.ah(b))
return this.dq(a,b)},
dq:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a<b},
$isp:1,
$isa6:1},
eG:{"^":"cd;",$isn:1},
eF:{"^":"cd;"},
ce:{"^":"t;",
X:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aK(a,b))
if(b<0)throw H.a(H.aK(a,b))
if(b>=a.length)H.r(H.aK(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aK(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.H(b)
if(typeof b!=="string")throw H.a(P.ct(b,null,null))
return a+b},
aZ:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
c=P.aS(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ah(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a9:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ah(c))
if(typeof c!=="number")return c.P()
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a4:function(a,b){return this.a9(a,b,0)},
u:function(a,b,c){H.F(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.a(P.cG(b,null,null))
if(b>c)throw H.a(P.cG(b,null,null))
if(c>a.length)throw H.a(P.cG(c,null,null))
return a.substring(b,c)},
an:function(a,b){return this.u(a,b,null)},
j3:function(a){return a.toLowerCase()},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.J)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iB:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ad:function(a,b){return this.iB(a,b," ")},
ea:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
e9:function(a,b){return this.ea(a,b,0)},
hW:function(a,b,c){if(c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
return H.hG(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseW:1,
$ish:1}}],["","",,H,{"^":"",
cU:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
d8:function(){return new P.ds("No element")},
iJ:function(){return new P.ds("Too many elements")},
w:{"^":"kI;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.b.X(this.a,b)},
$ascK:function(){return[P.n]},
$asy:function(){return[P.n]},
$asi:function(){return[P.n]},
$asd:function(){return[P.n]}},
ev:{"^":"i;"},
cE:{"^":"ev;$ti",
gY:function(a){return new H.df(this,this.gm(this),0,[H.am(this,"cE",0)])},
cS:function(a,b){return this.eO(0,H.l(b,{func:1,ret:P.U,args:[H.am(this,"cE",0)]}))}},
df:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.aL(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aN(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.I(z,w);++this.c
return!0}},
j5:{"^":"i;a,b,$ti",
gY:function(a){return new H.j6(J.b1(this.a),this.b,this.$ti)},
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.cs(this.a,b))},
$asi:function(a,b){return[b]}},
j6:{"^":"d9;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$asd9:function(a,b){return[b]}},
j7:{"^":"cE;a,b,$ti",
gm:function(a){return J.ao(this.a)},
I:function(a,b){return this.b.$1(J.cs(this.a,b))},
$ascE:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dE:{"^":"i;a,b,$ti",
gY:function(a){return new H.lc(J.b1(this.a),this.b,this.$ti)}},
lc:{"^":"d9;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
cz:{"^":"b;$ti"},
cK:{"^":"b;$ti",
p:function(a,b,c){H.F(b)
H.A(c,H.am(this,"cK",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))},
aF:function(a,b,c,d){H.A(d,H.am(this,"cK",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))}},
kI:{"^":"cD+cK;"}}],["","",,H,{"^":"",
ia:function(){throw H.a(P.D("Cannot modify unmodifiable Map"))},
nD:function(a){return init.types[H.F(a)]},
hz:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isJ},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.ah(a))
return z},
bQ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jF:function(a,b){var z,y,x,w,v,u
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
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.O||!!J.K(a).$iscl){v=C.x(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.an(w,1)
r=H.dU(H.c5(H.b9(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jx:function(){if(!!self.location)return self.location.href
return},
eY:function(a){var z,y,x,w,v
H.c5(a)
z=J.ao(a)
if(typeof z!=="number")return z.eH()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jG:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aQ(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ah(w))}return H.eY(z)},
eZ:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ah(x))
if(x<0)throw H.a(H.ah(x))
if(x>65535)return H.jG(a)}return H.eY(a)},
jH:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eH()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bR:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aQ(z,10))>>>0,56320|z&1023)}}throw H.a(P.a4(a,0,1114111,null,null))},
ak:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jE:function(a){return a.b?H.ak(a).getUTCFullYear()+0:H.ak(a).getFullYear()+0},
jC:function(a){return a.b?H.ak(a).getUTCMonth()+1:H.ak(a).getMonth()+1},
jy:function(a){return a.b?H.ak(a).getUTCDate()+0:H.ak(a).getDate()+0},
jz:function(a){return a.b?H.ak(a).getUTCHours()+0:H.ak(a).getHours()+0},
jB:function(a){return a.b?H.ak(a).getUTCMinutes()+0:H.ak(a).getMinutes()+0},
jD:function(a){return a.b?H.ak(a).getUTCSeconds()+0:H.ak(a).getSeconds()+0},
jA:function(a){return a.b?H.ak(a).getUTCMilliseconds()+0:H.ak(a).getMilliseconds()+0},
q:function(a){throw H.a(H.ah(a))},
f:function(a,b){if(a==null)J.ao(a)
throw H.a(H.aK(a,b))},
aK:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
z=H.F(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.W(b,a,"index",null,z)
return P.cG(b,"index",null)},
nx:function(a,b,c){if(a>c)return new P.cF(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cF(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
ah:function(a){return new P.aC(!0,a,null,null)},
nm:function(a){if(typeof a!=="number")throw H.a(H.ah(a))
return a},
a:function(a){var z
if(a==null)a=new P.eV()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hH})
z.name=""}else z.toString=H.hH
return z},
hH:function(){return J.ac(this.dartException)},
r:function(a){throw H.a(a)},
B:function(a){throw H.a(P.aN(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.oa(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aQ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dc(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eU(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fn()
u=$.$get$fo()
t=$.$get$fp()
s=$.$get$fq()
r=$.$get$fu()
q=$.$get$fv()
p=$.$get$fs()
$.$get$fr()
o=$.$get$fx()
n=$.$get$fw()
m=v.ab(y)
if(m!=null)return z.$1(H.dc(H.H(y),m))
else{m=u.ab(y)
if(m!=null){m.method="call"
return z.$1(H.dc(H.H(y),m))}else{m=t.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=r.ab(y)
if(m==null){m=q.ab(y)
if(m==null){m=p.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=o.ab(y)
if(m==null){m=n.ab(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eU(H.H(y),m))}}return z.$1(new H.kH(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f6()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aC(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f6()
return a},
bD:function(a){var z
if(a==null)return new H.h3(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h3(a)},
nA:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nM:function(a,b,c,d,e,f){H.e(a,"$iscb")
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
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nM)
a.$identity=z
return z},
i6:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isd){z.$reflectionInfo=d
x=H.jN(z).r}else x=d
w=e?Object.create(new H.ka().constructor.prototype):Object.create(new H.d1(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aE
if(typeof u!=="number")return u.D()
$.aE=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.ei(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nD,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.eb:H.d2
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ei(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i3:function(a,b,c,d){var z=H.d2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ei:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i5(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i3(y,!w,z,b)
if(y===0){w=$.aE
if(typeof w!=="number")return w.D()
$.aE=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bG
if(v==null){v=H.cv("self")
$.bG=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aE
if(typeof w!=="number")return w.D()
$.aE=w+1
t+=w
w="return function("+t+"){return this."
v=$.bG
if(v==null){v=H.cv("self")
$.bG=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
i4:function(a,b,c,d){var z,y
z=H.d2
y=H.eb
switch(b?-1:a){case 0:throw H.a(H.jX("Intercepted function with no arguments."))
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
z=$.bG
if(z==null){z=H.cv("self")
$.bG=z}y=$.ea
if(y==null){y=H.cv("receiver")
$.ea=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i4(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aE
if(typeof y!=="number")return y.D()
$.aE=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aE
if(typeof y!=="number")return y.D()
$.aE=y+1
return new Function(z+y+"}")()},
dP:function(a,b,c,d,e,f,g){var z,y
z=J.bK(H.c5(b))
H.F(c)
y=!!J.K(d).$isd?J.bK(d):d
return H.i6(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aA(a,"String"))},
ny:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"double"))},
o_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"num"))},
dN:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aA(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aA(a,"int"))},
hE:function(a,b){throw H.a(H.aA(a,H.H(b).substring(3)))},
o1:function(a,b){var z=J.aL(b)
throw H.a(H.i2(a,z.u(b,3,z.gm(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.hE(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.o1(a,b)},
c5:function(a){if(a==null)return a
if(!!J.K(a).$isd)return a
throw H.a(H.aA(a,"List"))},
hB:function(a,b){if(a==null)return a
if(!!J.K(a).$isd)return a
if(J.K(a)[b])return a
H.hE(a,b)},
hv:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.F(z)]
else return a.$S()}return},
cp:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hv(J.K(a))
if(z==null)return!1
y=H.hy(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dK)return a
$.dK=!0
try{if(H.cp(a,b))return a
z=H.cr(b)
y=H.aA(a,z)
throw H.a(y)}finally{$.dK=!1}},
dS:function(a,b){if(a!=null&&!H.dO(a,b))H.r(H.aA(a,H.cr(b)))
return a},
hn:function(a){var z
if(a instanceof H.m){z=H.hv(J.K(a))
if(z!=null)return H.cr(z)
return"Closure"}return H.bl(a)},
o8:function(a){throw H.a(new P.ie(H.H(a)))},
hw:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b9:function(a){if(a==null)return
return a.$ti},
pG:function(a,b,c){return H.bE(a["$as"+H.j(c)],H.b9(b))},
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
cr:function(a){var z=H.ba(a,null)
return z},
ba:function(a,b){var z,y
H.u(b,"$isd",[P.h],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dU(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.nc(a,b)
if('futureOr' in a)return"FutureOr<"+H.ba("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
for(z=H.nz(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.ba(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dU:function(a,b,c){var z,y,x,w,v,u
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
y=J.K(a)
if(y[b]==null)return!1
return H.hq(H.bE(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.H(b)
H.c5(c)
H.H(d)
if(a==null)return a
z=H.c2(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dU(c,0,null)
throw H.a(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hq:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aw(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aw(a[y],b,c[y],d))return!1
return!0},
pE:function(a,b,c){return a.apply(b,H.bE(J.K(b)["$as"+H.j(c)],H.b9(b)))},
hA:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="M"||a===-1||a===-2||H.hA(z)}return!1},
dO:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="M"||b===-1||b===-2||H.hA(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dO(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cp(a,b)}y=J.K(a).constructor
x=H.b9(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aw(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dO(a,b))throw H.a(H.aA(a,H.cr(b)))
return a},
aw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="M")return!0
if('func' in c)return H.hy(a,b,c,d)
if('func' in a)return c.builtin$cls==="cb"
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
if(t!==y){s=H.cr(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hq(H.bE(r,z),b,u,d)},
hy:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.nZ(m,b,l,d)},
nZ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aw(c[w],d,a[w],b))return!1}return!0},
pF:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nP:function(a){var z,y,x,w,v,u
z=H.H($.hx.$1(a))
y=$.cS[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cV[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.hp.$2(a,z))
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
return u.i}if(v==="+")return H.hD(a,x)
if(v==="*")throw H.a(P.ck(z))
if(init.leafTags[z]===true){u=H.cW(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hD(a,x)},
hD:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dV(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cW:function(a){return J.dV(a,!1,null,!!a.$isJ)},
nY:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cW(z)
else return J.dV(z,c,null,null)},
nK:function(){if(!0===$.dT)return
$.dT=!0
H.nL()},
nL:function(){var z,y,x,w,v,u,t,s
$.cS=Object.create(null)
$.cV=Object.create(null)
H.nG()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hF.$1(v)
if(u!=null){t=H.nY(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nG:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bA(C.R,H.bA(C.W,H.bA(C.w,H.bA(C.w,H.bA(C.V,H.bA(C.S,H.bA(C.T(C.x),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hx=new H.nH(v)
$.hp=new H.nI(u)
$.hF=new H.nJ(t)},
bA:function(a,b){return a(b)||b},
hG:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dY:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i9:{"^":"b;$ti",
i:function(a){return P.dg(this)},
p:function(a,b,c){H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
return H.ia()},
$isL:1},
ib:{"^":"i9;a,b,c,$ti",
gm:function(a){return this.a},
bu:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bu(0,b))return
return this.df(b)},
df:function(a){return this.b[H.H(a)]},
J:function(a,b){var z,y,x,w,v
z=H.z(this,1)
H.l(b,{func:1,ret:-1,args:[H.z(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.df(v),z))}}},
jM:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jN:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bK(z)
y=z[0]
x=z[1]
return new H.jM(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kt:{"^":"b;a,b,c,d,e,f",
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
t:{
aI:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kt(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cJ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ft:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jr:{"^":"a8;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eU:function(a,b){return new H.jr(a,b==null?null:b.method)}}},
iO:{"^":"a8;a,b,c",
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
return new H.iO(a,y,z?null:b.receiver)}}},
kH:{"^":"a8;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
oa:{"^":"m:19;a",
$1:function(a){if(!!J.K(a).$isa8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h3:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaz:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bl(this).trim()+"'"},
geD:function(){return this},
$iscb:1,
geD:function(){return this}},
fd:{"^":"m;"},
ka:{"^":"fd;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d1:{"^":"fd;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d1))return!1
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
d2:function(a){return a.a},
eb:function(a){return a.c},
cv:function(a){var z,y,x,w,v
z=new H.d1("self","target","receiver","name")
y=J.bK(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ku:{"^":"a8;a",
i:function(a){return this.a},
t:{
aA:function(a,b){return new H.ku("TypeError: "+H.j(P.cy(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
i1:{"^":"a8;a",
i:function(a){return this.a},
t:{
i2:function(a,b){return new H.i1("CastError: "+H.j(P.cy(a))+": type '"+H.hn(a)+"' is not a subtype of type '"+b+"'")}}},
jW:{"^":"a8;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
jX:function(a){return new H.jW(a)}}},
b5:{"^":"eN;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gij:function(a){return this.a===0},
ga7:function(a){return new H.iU(this,[H.z(this,0)])},
bu:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.da(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.da(y,b)}else return this.ig(b)},
ig:function(a){var z=this.d
if(z==null)return!1
return this.cE(this.c1(z,this.cD(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bm(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bm(w,b)
x=y==null?null:y.b
return x}else return this.ih(b)},
ih:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c1(z,this.cD(a))
x=this.cE(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c3()
this.b=z}this.d3(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c3()
this.c=y}this.d3(y,b,c)}else this.ii(b,c)},
ii:function(a,b){var z,y,x,w
H.A(a,H.z(this,0))
H.A(b,H.z(this,1))
z=this.d
if(z==null){z=this.c3()
this.d=z}y=this.cD(a)
x=this.c1(z,y)
if(x==null)this.ca(z,y,[this.c4(a,b)])
else{w=this.cE(x,a)
if(w>=0)x[w].b=b
else x.push(this.c4(a,b))}},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aN(this))
z=z.c}},
d3:function(a,b,c){var z
H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
z=this.bm(a,b)
if(z==null)this.ca(a,b,this.c4(b,c))
else z.b=c},
fq:function(){this.r=this.r+1&67108863},
c4:function(a,b){var z,y
z=new H.iT(H.A(a,H.z(this,0)),H.A(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fq()
return z},
cD:function(a){return J.c6(a)&0x3ffffff},
cE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
i:function(a){return P.dg(this)},
bm:function(a,b){return a[b]},
c1:function(a,b){return a[b]},
ca:function(a,b,c){a[b]=c},
fj:function(a,b){delete a[b]},
da:function(a,b){return this.bm(a,b)!=null},
c3:function(){var z=Object.create(null)
this.ca(z,"<non-identifier-key>",z)
this.fj(z,"<non-identifier-key>")
return z},
$iseK:1},
iT:{"^":"b;a,b,0c,0d"},
iU:{"^":"ev;a,$ti",
gm:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.iV(z,z.r,this.$ti)
y.c=z.e
return y}},
iV:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aN(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nH:{"^":"m:19;a",
$1:function(a){return this.a(a)}},
nI:{"^":"m:56;a",
$2:function(a,b){return this.a(a,b)}},
nJ:{"^":"m:55;a",
$1:function(a){return this.a(H.H(a))}},
iM:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseW:1,
$isjO:1,
t:{
iN:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nz:function(a){return J.eE(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
o0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
by:function(a){return a},
jl:function(a){return new Int8Array(a)},
aJ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aK(b,a))},
n6:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nx(a,b,c))
return b},
eS:{"^":"t;",$iseS:1,"%":"ArrayBuffer"},
dl:{"^":"t;",$isdl:1,$iskv:1,"%":"DataView;ArrayBufferView;dk|fY|fZ|jm|h_|h0|b7"},
dk:{"^":"dl;",
gm:function(a){return a.length},
$isJ:1,
$asJ:I.dR},
jm:{"^":"fZ;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
p:function(a,b,c){H.F(b)
H.ny(c)
H.aJ(b,a,a.length)
a[b]=c},
$ascz:function(){return[P.p]},
$asy:function(){return[P.p]},
$isi:1,
$asi:function(){return[P.p]},
$isd:1,
$asd:function(){return[P.p]},
"%":"Float32Array|Float64Array"},
b7:{"^":"h0;",
p:function(a,b,c){H.F(b)
H.F(c)
H.aJ(b,a,a.length)
a[b]=c},
$ascz:function(){return[P.n]},
$asy:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}},
oL:{"^":"b7;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oM:{"^":"b7;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oN:{"^":"b7;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oO:{"^":"b7;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oP:{"^":"b7;",
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oQ:{"^":"b7;",
gm:function(a){return a.length},
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dm:{"^":"b7;",
gm:function(a){return a.length},
j:function(a,b){H.aJ(b,a,a.length)
return a[b]},
bR:function(a,b,c){return new Uint8Array(a.subarray(b,H.n6(b,c,a.length)))},
$isdm:1,
$isT:1,
"%":";Uint8Array"},
fY:{"^":"dk+y;"},
fZ:{"^":"fY+cz;"},
h_:{"^":"dk+y;"},
h0:{"^":"h_+cz;"}}],["","",,P,{"^":"",
le:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nj()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bB(new P.lg(z),1)).observe(y,{childList:true})
return new P.lf(z,y,x)}else if(self.setImmediate!=null)return P.nk()
return P.nl()},
pr:[function(a){self.scheduleImmediate(H.bB(new P.lh(H.l(a,{func:1,ret:-1})),0))},"$1","nj",4,0,12],
ps:[function(a){self.setImmediate(H.bB(new P.li(H.l(a,{func:1,ret:-1})),0))},"$1","nk",4,0,12],
pt:[function(a){P.dx(C.q,H.l(a,{func:1,ret:-1}))},"$1","nl",4,0,12],
dx:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a6(a.a,1000)
return P.mp(z<0?0:z,b)},
fi:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bs]})
z=C.f.a6(a.a,1000)
return P.mq(z<0?0:z,b)},
nf:function(a,b){if(H.cp(a,{func:1,args:[P.b,P.az]}))return b.iL(a,null,P.b,P.az)
if(H.cp(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.ct(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ne:function(){var z,y
for(;z=$.bz,z!=null;){$.c0=null
y=z.b
$.bz=y
if(y==null)$.c_=null
z.a.$0()}},
pD:[function(){$.dL=!0
try{P.ne()}finally{$.c0=null
$.dL=!1
if($.bz!=null)$.$get$dF().$1(P.hr())}},"$0","hr",0,0,3],
hm:function(a){var z=new P.fP(H.l(a,{func:1,ret:-1}))
if($.bz==null){$.c_=z
$.bz=z
if(!$.dL)$.$get$dF().$1(P.hr())}else{$.c_.b=z
$.c_=z}},
ni:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bz
if(z==null){P.hm(a)
$.c0=$.c_
return}y=new P.fP(a)
x=$.c0
if(x==null){y.b=z
$.c0=y
$.bz=y}else{y.b=x.b
x.b=y
$.c0=y
if(y.b==null)$.c_=y}},
o2:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.Y
if(C.j===y){P.cR(null,null,C.j,a)
return}y.toString
P.cR(null,null,y,H.l(y.ck(a),z))},
fh:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.dx(a,b)}return P.dx(a,H.l(y.ck(b),z))},
kq:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bs]}
H.l(b,z)
y=$.Y
if(y===C.j){y.toString
return P.fi(a,b)}x=y.dE(b,P.bs)
$.Y.toString
return P.fi(a,H.l(x,z))},
cQ:function(a,b,c,d,e){var z={}
z.a=d
P.ni(new P.ng(z,e))},
hi:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.Y
if(y===c)return d.$0()
$.Y=c
z=y
try{y=d.$0()
return y}finally{$.Y=z}},
hj:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.Y
if(y===c)return d.$1(e)
$.Y=c
z=y
try{y=d.$1(e)
return y}finally{$.Y=z}},
nh:function(a,b,c,d,e,f,g,h,i){var z,y
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
if(z)d=!(!z||!1)?c.ck(d):c.hS(d,-1)
P.hm(d)},
lg:{"^":"m:31;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lf:{"^":"m:52;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lh:{"^":"m:0;a",
$0:function(){this.a.$0()}},
li:{"^":"m:0;a",
$0:function(){this.a.$0()}},
h7:{"^":"b;a,0b,c",
f5:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bB(new P.ms(this,b),0),a)
else throw H.a(P.D("`setTimeout()` not found."))},
f6:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bB(new P.mr(this,a,Date.now(),b),0),a)
else throw H.a(P.D("Periodic timer."))},
$isbs:1,
t:{
mp:function(a,b){var z=new P.h7(!0,0)
z.f5(a,b)
return z},
mq:function(a,b){var z=new P.h7(!1,0)
z.f6(a,b)
return z}}},
ms:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mr:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.eT(w,x)}z.c=y
this.d.$1(z)}},
bx:{"^":"b;0a,b,c,d,e,$ti",
is:function(a){if(this.c!==6)return!0
return this.b.b.cP(H.l(this.d,{func:1,ret:P.U,args:[P.b]}),a.a,P.U,P.b)},
ie:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.cp(z,{func:1,args:[P.b,P.az]}))return H.dS(w.iU(z,a.a,a.b,null,y,P.az),x)
else return H.dS(w.cP(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b_:{"^":"b;dr:a<,b,0h6:c<,$ti",
ew:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Y
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.nf(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b_(0,$.Y,[c])
w=b==null?1:3
this.d4(new P.bx(x,w,a,b,[z,c]))
return x},
j_:function(a,b){return this.ew(a,null,b)},
d4:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbx")
this.c=a}else{if(z===2){y=H.e(this.c,"$isb_")
z=y.a
if(z<4){y.d4(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cR(null,null,z,H.l(new P.ly(this,a),{func:1,ret:-1}))}},
dk:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbx")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isb_")
y=u.a
if(y<4){u.dk(a)
return}this.a=y
this.c=u.c}z.a=this.bq(a)
y=this.b
y.toString
P.cR(null,null,y,H.l(new P.lD(z,this),{func:1,ret:-1}))}},
c6:function(){var z=H.e(this.c,"$isbx")
this.c=null
return this.bq(z)},
bq:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d7:function(a){var z,y,x,w
z=H.z(this,0)
H.dS(a,{futureOr:1,type:z})
y=this.$ti
x=H.c2(a,"$isbJ",y,"$asbJ")
if(x){z=H.c2(a,"$isb_",y,null)
if(z)P.fT(a,this)
else P.lz(a,this)}else{w=this.c6()
H.A(a,z)
this.a=4
this.c=a
P.bW(this,w)}},
bX:[function(a,b){var z
H.e(b,"$isaz")
z=this.c6()
this.a=8
this.c=new P.ap(a,b)
P.bW(this,z)},function(a){return this.bX(a,null)},"ja","$2","$1","gfe",4,2,51],
$isbJ:1,
t:{
lz:function(a,b){var z,y,x
b.a=1
try{a.ew(new P.lA(b),new P.lB(b),null)}catch(x){z=H.ab(x)
y=H.bD(x)
P.o2(new P.lC(b,z,y))}},
fT:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isb_")
if(z>=4){y=b.c6()
b.a=a.a
b.c=a.c
P.bW(b,y)}else{y=H.e(b.c,"$isbx")
b.a=2
b.c=a
a.dk(y)}},
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
P.cQ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
P.cQ(null,null,y,u,t)
return}o=$.Y
if(o==null?q!=null:o!==q)$.Y=q
else o=null
y=b.c
if(y===8)new P.lG(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lF(x,b,r).$0()}else if((y&2)!==0)new P.lE(z,x,b).$0()
if(o!=null)$.Y=o
y=x.b
if(!!J.K(y).$isbJ){if(y.a>=4){n=H.e(t.c,"$isbx")
t.c=null
b=t.bq(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fT(y,t)
return}}m=b.b
n=H.e(m.c,"$isbx")
m.c=null
b=m.bq(n)
y=x.a
u=x.b
if(!y){H.A(u,H.z(m,0))
m.a=4
m.c=u}else{H.e(u,"$isap")
m.a=8
m.c=u}z.a=m
y=m}}}},
ly:{"^":"m:0;a,b",
$0:function(){P.bW(this.a,this.b)}},
lD:{"^":"m:0;a,b",
$0:function(){P.bW(this.b,this.a.a)}},
lA:{"^":"m:31;a",
$1:function(a){var z=this.a
z.a=0
z.d7(a)}},
lB:{"^":"m:50;a",
$2:function(a,b){this.a.bX(a,H.e(b,"$isaz"))},
$1:function(a){return this.$2(a,null)}},
lC:{"^":"m:0;a,b,c",
$0:function(){this.a.bX(this.b,this.c)}},
lG:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.es(H.l(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bD(v)
if(this.d){w=H.e(this.a.a.c,"$isap").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isap")
else u.b=new P.ap(y,x)
u.a=!0
return}if(!!J.K(z).$isbJ){if(z instanceof P.b_&&z.gdr()>=4){if(z.gdr()===8){w=this.b
w.b=H.e(z.gh6(),"$isap")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.j_(new P.lH(t),null)
w.a=!1}}},
lH:{"^":"m:48;a",
$1:function(a){return this.a}},
lF:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.A(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cP(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bD(t)
x=this.a
x.b=new P.ap(z,y)
x.a=!0}}},
lE:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isap")
w=this.c
if(w.is(z)&&w.e!=null){v=this.b
v.b=w.ie(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bD(u)
w=H.e(this.a.a.c,"$isap")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ap(y,x)
s.a=!0}}},
fP:{"^":"b;a,0b"},
dt:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b_(0,$.Y,[P.n])
z.a=0
this.ip(new P.kd(z,this),!0,new P.ke(z,y),y.gfe())
return y}},
kd:{"^":"m;a,b",
$1:function(a){H.A(a,H.am(this.b,"dt",0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.am(this.b,"dt",0)]}}},
ke:{"^":"m:0;a,b",
$0:function(){this.b.d7(this.a.a)}},
fa:{"^":"b;$ti"},
kc:{"^":"b;"},
bs:{"^":"b;"},
ap:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isa8:1},
mV:{"^":"b;",$ispq:1},
ng:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eV()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
m0:{"^":"mV;",
iV:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.Y){a.$0()
return}P.hi(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cQ(null,null,this,z,H.e(y,"$isaz"))}},
iW:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.Y){a.$1(b)
return}P.hj(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bD(x)
P.cQ(null,null,this,z,H.e(y,"$isaz"))}},
hS:function(a,b){return new P.m2(this,H.l(a,{func:1,ret:b}),b)},
ck:function(a){return new P.m1(this,H.l(a,{func:1,ret:-1}))},
dE:function(a,b){return new P.m3(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
es:function(a,b){H.l(a,{func:1,ret:b})
if($.Y===C.j)return a.$0()
return P.hi(null,null,this,a,b)},
cP:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Y===C.j)return a.$1(b)
return P.hj(null,null,this,a,b,c,d)},
iU:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Y===C.j)return a.$2(b,c)
return P.nh(null,null,this,a,b,c,d,e,f)},
iL:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
m2:{"^":"m;a,b,c",
$0:function(){return this.a.es(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
m1:{"^":"m:3;a,b",
$0:function(){return this.a.iV(this.b)}},
m3:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.iW(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iW:function(a,b,c,d,e){return new H.b5(0,0,[d,e])},
iX:function(a,b,c){H.c5(a)
return H.u(H.nA(a,new H.b5(0,0,[b,c])),"$iseK",[b,c],"$aseK")},
de:function(a,b){return new H.b5(0,0,[a,b])},
cg:function(a,b,c,d){return new P.lO(0,0,[d])},
iI:function(a,b,c){var z,y
if(P.dM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c1()
C.a.h(y,a)
try{P.nd(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fb(b,H.hB(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d7:function(a,b,c){var z,y,x
if(P.dM(a))return b+"..."+c
z=new P.an(b)
y=$.$get$c1()
C.a.h(y,a)
try{x=z
x.a=P.fb(x.gaN(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaN()+c
y=z.gaN()
return y.charCodeAt(0)==0?y:y},
dM:function(a){var z,y
for(z=0;y=$.$get$c1(),z<y.length;++z)if(a===y[z])return!0
return!1},
nd:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.j(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.E();t=s,s=r){r=z.gM(z);++x
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
iY:function(a,b,c){var z=P.iW(null,null,null,b,c)
a.J(0,new P.iZ(z,b,c))
return z},
eL:function(a,b){var z,y
z=P.cg(null,null,null,b)
for(y=J.b1(a);y.E();)z.h(0,H.A(y.gM(y),b))
return z},
dg:function(a){var z,y,x
z={}
if(P.dM(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$c1(),a)
x=y
x.a=x.gaN()+"{"
z.a=!0
J.e1(a,new P.j3(z,y))
z=y
z.a=z.gaN()+"}"}finally{z=$.$get$c1()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaN()
return z.charCodeAt(0)==0?z:z},
lO:{"^":"lI;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){var z=new P.fX(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
U:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscN")!=null}else{y=this.ff(b)
return y}},
ff:function(a){var z=this.d
if(z==null)return!1
return this.c_(this.dg(z,a),a)>=0},
h:function(a,b){var z,y
H.A(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dH()
this.b=z}return this.d5(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dH()
this.c=y}return this.d5(y,b)}else return this.f7(0,b)},
f7:function(a,b){var z,y,x
H.A(b,H.z(this,0))
z=this.d
if(z==null){z=P.dH()
this.d=z}y=this.d8(b)
x=z[y]
if(x==null)z[y]=[this.bW(b)]
else{if(this.c_(x,b)>=0)return!1
x.push(this.bW(b))}return!0},
K:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dl(this.c,b)
else return this.fZ(0,b)},
fZ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dg(z,b)
x=this.c_(y,b)
if(x<0)return!1
this.dt(y.splice(x,1)[0])
return!0},
d5:function(a,b){H.A(b,H.z(this,0))
if(H.e(a[b],"$iscN")!=null)return!1
a[b]=this.bW(b)
return!0},
dl:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscN")
if(z==null)return!1
this.dt(z)
delete a[b]
return!0},
d6:function(){this.r=this.r+1&67108863},
bW:function(a){var z,y
z=new P.cN(H.A(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d6()
return z},
dt:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d6()},
d8:function(a){return J.c6(a)&0x3ffffff},
dg:function(a,b){return a[this.d8(b)]},
c_:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
t:{
dH:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cN:{"^":"b;a,0b,0c"},
fX:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aN(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.z(this,0))
this.c=z.b
return!0}}}},
lI:{"^":"jY;"},
iZ:{"^":"m:7;a,b,c",
$2:function(a,b){this.a.p(0,H.A(a,this.b),H.A(b,this.c))}},
cD:{"^":"lP;",$isi:1,$isd:1},
y:{"^":"b;$ti",
gY:function(a){return new H.df(a,this.gm(a),0,[H.b8(this,a,"y",0)])},
I:function(a,b){return this.j(a,b)},
j2:function(a,b){var z,y,x
z=H.c([],[H.b8(this,a,"y",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.p(z,y,this.j(a,y));++y}return z},
j1:function(a){return this.j2(a,!0)},
aF:function(a,b,c,d){var z
H.A(d,H.b8(this,a,"y",0))
P.aS(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.d7(a,"[","]")}},
eN:{"^":"ai;"},
j3:{"^":"m:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ai:{"^":"b;$ti",
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b8(this,a,"ai",0),H.b8(this,a,"ai",1)]})
for(z=J.b1(this.ga7(a));z.E();){y=z.gM(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.ao(this.ga7(a))},
i:function(a){return P.dg(a)},
$isL:1},
mx:{"^":"b;$ti",
p:function(a,b,c){H.A(b,H.z(this,0))
H.A(c,H.z(this,1))
throw H.a(P.D("Cannot modify unmodifiable map"))}},
j4:{"^":"b;$ti",
j:function(a,b){return J.e0(this.a,b)},
p:function(a,b,c){J.cY(this.a,H.A(b,H.z(this,0)),H.A(c,H.z(this,1)))},
J:function(a,b){J.e1(this.a,H.l(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]}))},
gm:function(a){return J.ao(this.a)},
i:function(a){return J.ac(this.a)},
$isL:1},
fE:{"^":"my;a,$ti"},
k_:{"^":"b;$ti",
aq:function(a,b){var z
for(z=J.b1(H.u(b,"$isi",this.$ti,"$asi"));z.E();)this.h(0,z.gM(z))},
i:function(a){return P.d7(this,"{","}")},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e5("index"))
if(b<0)H.r(P.a4(b,0,null,"index",null))
for(z=new P.fX(this,this.r,this.$ti),z.c=this.e,y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
$isi:1},
jY:{"^":"k_;"},
lP:{"^":"b+y;"},
my:{"^":"j4+mx;$ti"}}],["","",,P,{"^":"",hZ:{"^":"c8;a",
iv:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aS(c,d,b.length,null,null,null)
z=$.$get$fR()
if(typeof d!=="number")return H.q(d)
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
if(m>=0){n=C.b.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.u(b,x,y)
w.a+=H.bR(r)
x=s
continue}}throw H.a(P.a0("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.u(b,x,d)
k=l.length
if(v>=0)P.e8(b,u,d,v,t,k)
else{j=C.f.bi(k-1,4)+1
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aZ(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.e8(b,u,d,v,t,i)
else{j=C.f.bi(i,4)
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aZ(b,d,d,j===2?"==":"=")}return b},
$asc8:function(){return[[P.d,P.n],P.h]},
t:{
e8:function(a,b,c,d,e,f){if(C.f.bi(f,4)!==0)throw H.a(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a0("Invalid base64 padding, more than two '=' characters",a,b))}}},i_:{"^":"b3;a",
$asb3:function(){return[[P.d,P.n],P.h]}},c8:{"^":"b;$ti"},b3:{"^":"kc;$ti"},ir:{"^":"c8;",
$asc8:function(){return[P.h,[P.d,P.n]]}},iF:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iE:{"^":"b3;a",
fg:function(a,b,c){var z,y,x,w,v,u
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
if(c>b)v.a+=J.hU(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb3:function(){return[P.h,P.h]}},kT:{"^":"ir;a",
gi5:function(){return C.K}},l_:{"^":"b3;",
b4:function(a,b,c){var z,y,x,w
z=a.length
P.aS(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mT(0,0,x)
if(w.fl(a,b,z)!==z)w.dv(J.hN(a,z-1),0)
return C.a2.bR(x,0,w.b)},
cq:function(a){return this.b4(a,0,null)},
$asb3:function(){return[P.h,[P.d,P.n]]}},mT:{"^":"b;a,b,c",
dv:function(a,b){var z,y,x,w,v
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
fl:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dv(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kU:{"^":"b3;a",
b4:function(a,b,c){var z,y,x,w,v
H.u(a,"$isd",[P.n],"$asd")
z=P.kV(!1,a,b,c)
if(z!=null)return z
y=J.ao(a)
P.aS(b,c,y,null,null,null)
x=new P.an("")
w=new P.mQ(!1,x,!0,0,0,0)
w.b4(a,b,y)
w.i9(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cq:function(a){return this.b4(a,0,null)},
$asb3:function(){return[[P.d,P.n],P.h]},
t:{
kV:function(a,b,c,d){H.u(b,"$isd",[P.n],"$asd")
if(b instanceof Uint8Array)return P.kW(!1,b,c,d)
return},
kW:function(a,b,c,d){var z,y,x
z=$.$get$fK()
if(z==null)return
y=0===c
if(y&&!0)return P.dC(z,b)
x=b.length
d=P.aS(c,d,x,null,null,null)
if(y&&d===x)return P.dC(z,b)
return P.dC(z,b.subarray(c,d))},
dC:function(a,b){if(P.kY(b))return
return P.kZ(a,b)},
kZ:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
kY:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kX:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},mQ:{"^":"b;a,b,c,d,e,f",
i9:function(a,b,c){var z
H.u(b,"$isd",[P.n],"$asd")
if(this.e>0){z=P.a0("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
b4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(a,"$isd",[P.n],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mS(c)
v=new P.mR(this,b,c,a)
$label0$0:for(u=J.aL(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bO()
if((r&192)!==128){q=P.a0("Bad UTF-8 encoding 0x"+C.f.be(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.y,q)
if(z<=C.y[q]){q=P.a0("Overlong encoding of 0x"+C.f.be(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a0("Character outside valid Unicode range: 0x"+C.f.be(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bR(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cW()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.a0("Negative UTF-8 code unit: -0x"+C.f.be(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a0("Bad UTF-8 encoding 0x"+C.f.be(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mS:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
H.u(a,"$isd",[P.n],"$asd")
z=this.a
for(y=J.aL(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bO()
if((w&127)!==w)return x-b}return z-b}},mR:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cj(this.d,a,b)}}}],["","",,P,{"^":"",
cq:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jF(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a0(a,null,null))},
it:function(a){var z=J.K(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bl(a)+"'"},
j_:function(a,b,c,d){var z,y
H.A(b,d)
z=J.iK(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.u(z,"$isd",[d],"$asd")},
j0:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gY(a);x.E();)C.a.h(y,H.A(x.gM(x),c))
if(b)return y
return H.u(J.bK(y),"$isd",z,"$asd")},
cj:function(a,b,c){var z,y
z=P.n
H.u(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.u(a,"$isbh",[z],"$asbh")
y=a.length
c=P.aS(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.P()
z=c<y}else z=!0
return H.eZ(z?C.a.bR(a,b,c):a)}if(!!J.K(a).$isdm)return H.jH(a,b,P.aS(b,c,a.length,null,null,null))
return P.kf(a,b,c)},
kf:function(a,b,c){var z,y,x,w
H.u(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a4(b,0,J.ao(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a4(c,b,J.ao(a),null,null))
y=J.b1(a)
for(x=0;x<b;++x)if(!y.E())throw H.a(P.a4(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gM(y))
else for(x=b;x<c;++x){if(!y.E())throw H.a(P.a4(c,b,x,null,null))
w.push(y.gM(y))}return H.eZ(w)},
jP:function(a,b,c){return new H.iM(a,H.iN(a,!1,!0,!1))},
fG:function(){var z=H.jx()
if(z!=null)return P.kN(z,0,null)
throw H.a(P.D("'Uri.base' is not supported"))},
cy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.it(a)},
v:function(a){return new P.fS(a)},
j1:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
dX:function(a){H.o0(a)},
kN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.fF(b>0||c<c?C.b.u(a,b,c):a,5,null).gez()
else if(y===32)return P.fF(C.b.u(a,z,c),0,null).gez()}x=new Array(8)
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
if(P.hk(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.j6()
if(v>=b)if(P.hk(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.P()
if(typeof r!=="number")return H.q(r)
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aZ(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a9(a,"http",b)){if(x&&t+3===s&&C.b.a9(a,"80",t+1))if(b===0&&!0){a=C.b.aZ(a,t,s,"")
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
else if(v===z&&C.b.a9(a,"https",b)){if(x&&t+4===s&&C.b.a9(a,"443",t+1))if(b===0&&!0){a=C.b.aZ(a,t,s,"")
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
q-=b}return new P.m9(a,v,u,t,s,r,q,o)}return P.mz(a,b,c,v,u,t,s,r,q,o)},
fI:function(a,b){var z=P.h
return C.a.ia(H.c(a.split("&"),[z]),P.de(z,z),new P.kQ(b),[P.L,P.h,P.h])},
kL:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kM(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.X(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cq(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.cW()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cq(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.cW()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kO(a)
y=new P.kP(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.X(a,w)
if(s===58){if(w===b){++w
if(C.b.X(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gau(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kL(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.f.aQ(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
n7:function(){var z,y,x,w,v
z=P.j1(22,new P.n9(),!0,P.T)
y=new P.n8(z)
x=new P.na()
w=new P.nb()
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
hk:function(a,b,c,d,e){var z,y,x,w,v
H.u(e,"$isd",[P.n],"$asd")
z=$.$get$hl()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
U:{"^":"b;"},
"+bool":0,
aF:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.f.aQ(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ih(H.jE(this))
y=P.ca(H.jC(this))
x=P.ca(H.jy(this))
w=P.ca(H.jz(this))
v=P.ca(H.jB(this))
u=P.ca(H.jD(this))
t=P.ii(H.jA(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
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
ca:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"a6;"},
"+double":0,
be:{"^":"b;a",
k:function(a,b){return new P.be(C.f.af(this.a*b))},
P:function(a,b){return C.f.P(this.a,H.e(b,"$isbe").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.im()
y=this.a
if(y<0)return"-"+new P.be(0-y).i(0)
x=z.$1(C.f.a6(y,6e7)%60)
w=z.$1(C.f.a6(y,1e6)%60)
v=new P.il().$1(y%1e6)
return""+C.f.a6(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
eu:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
il:{"^":"m:30;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
im:{"^":"m:30;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a8:{"^":"b;"},
eV:{"^":"a8;",
i:function(a){return"Throw of null."}},
aC:{"^":"a8;a,b,c,d",
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
u=P.cy(this.b)
return w+v+": "+H.j(u)},
t:{
c7:function(a){return new P.aC(!1,null,null,a)},
ct:function(a,b,c){return new P.aC(!0,a,b,c)},
e5:function(a){return new P.aC(!1,null,a,"Must not be null")}}},
cF:{"^":"aC;e,f,a,b,c,d",
gbZ:function(){return"RangeError"},
gbY:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
cG:function(a,b,c){return new P.cF(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.cF(b,c,!0,a,d,"Invalid value")},
aS:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.a(P.a4(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.a(P.a4(b,a,c,"end",f))
return b}return c}}},
iG:{"^":"aC;e,m:f>,a,b,c,d",
gbZ:function(){return"RangeError"},
gbY:function(){if(J.hJ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
W:function(a,b,c,d,e){var z=H.F(e!=null?e:J.ao(b))
return new P.iG(b,z,!0,a,c,"Index out of range")}}},
kJ:{"^":"a8;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
D:function(a){return new P.kJ(a)}}},
kG:{"^":"a8;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ck:function(a){return new P.kG(a)}}},
ds:{"^":"a8;a",
i:function(a){return"Bad state: "+this.a},
t:{
f8:function(a){return new P.ds(a)}}},
i8:{"^":"a8;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cy(z))+"."},
t:{
aN:function(a){return new P.i8(a)}}},
js:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa8:1},
f6:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa8:1},
ie:{"^":"a8;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fS:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
iA:{"^":"b;a,b,c",
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
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
t:{
a0:function(a,b,c){return new P.iA(a,b,c)}}},
cb:{"^":"b;"},
n:{"^":"a6;"},
"+int":0,
i:{"^":"b;$ti",
cS:["eO",function(a,b){var z=H.am(this,"i",0)
return new H.dE(this,H.l(b,{func:1,ret:P.U,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gY(this)
for(y=0;z.E();)++y
return y},
gaI:function(a){var z,y
z=this.gY(this)
if(!z.E())throw H.a(H.d8())
y=z.gM(z)
if(z.E())throw H.a(H.iJ())
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e5("index"))
if(b<0)H.r(P.a4(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.E();){x=z.gM(z)
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
i:function(a){return P.iI(this,"(",")")}},
d9:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
L:{"^":"b;$ti"},
M:{"^":"b;",
gV:function(a){return P.b.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a6:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gV:function(a){return H.bQ(this)},
i:function(a){return"Instance of '"+H.bl(this)+"'"},
toString:function(){return this.i(this)}},
az:{"^":"b;"},
h:{"^":"b;",$iseW:1},
"+String":0,
an:{"^":"b;aN:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispa:1,
t:{
fb:function(a,b,c){var z=J.b1(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gM(z))
while(z.E())}else{a+=H.j(z.gM(z))
for(;z.E();)a=a+c+H.j(z.gM(z))}return a}}},
kQ:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.u(a,"$isL",[z,z],"$asL")
H.H(b)
y=J.aL(b).e9(b,"=")
if(y===-1){if(b!=="")J.cY(a,P.dJ(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.an(b,y+1)
z=this.a
J.cY(a,P.dJ(x,0,x.length,z,!0),P.dJ(w,0,w.length,z,!0))}return a}},
kM:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv4 address, "+a,this.a,b))}},
kO:{"^":"m:44;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kP:{"^":"m:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cq(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.P()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cO:{"^":"b;bQ:a<,b,c,d,el:e>,f,r,0x,0y,0z,0Q,0ch",
geA:function(){return this.b},
gcC:function(a){var z=this.c
if(z==null)return""
if(C.b.a4(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbL:function(a){var z=this.d
if(z==null)return P.h9(this.a)
return z},
gcK:function(a){var z=this.f
return z==null?"":z},
ge4:function(){var z=this.r
return z==null?"":z},
cO:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isL",[P.h,null],"$asL")
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
g=P.dI(g,0,0,h)
return new P.cO(i,j,c,f,d,g,this.r)},
eq:function(a,b){return this.cO(a,null,null,null,null,null,null,b,null,null)},
gcL:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fE(P.fI(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
ge5:function(){return this.c!=null},
ge8:function(){return this.f!=null},
ge6:function(){return this.r!=null},
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
z=J.K(b)
if(!!z.$isdB){y=this.a
x=b.gbQ()
if(y==null?x==null:y===x)if(this.c!=null===b.ge5()){y=this.b
x=b.geA()
if(y==null?x==null:y===x){y=this.gcC(this)
x=z.gcC(b)
if(y==null?x==null:y===x){y=this.gbL(this)
x=z.gbL(b)
if(y==null?x==null:y===x)if(this.e===z.gel(b)){y=this.f
x=y==null
if(!x===b.ge8()){if(x)y=""
if(y===z.gcK(b)){z=this.r
y=z==null
if(!y===b.ge6()){if(y)z=""
z=z===b.ge4()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gV:function(a){var z=this.z
if(z==null){z=C.b.gV(this.i(0))
this.z=z}return z},
$isdB:1,
t:{
co:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$isd",[P.n],"$asd")
if(c===C.k){z=$.$get$he().b
if(typeof b!=="string")H.r(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.am(c,"c8",0))
y=c.gi5().cq(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bR(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mz:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mK(a,b,d)
else{if(d===b)P.bX(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mL(a,z,e-1):""
x=P.mE(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.q(g)
v=w<g?P.mH(P.cq(C.b.u(a,w,g),new P.mA(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mF(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.P()
t=h<i?P.dI(a,h+1,i,null):null
return new P.cO(j,y,x,v,u,t,i<c?P.mD(a,i+1,c):null)},
h9:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bX:function(a,b,c){throw H.a(P.a0(c,a,b))},
mH:function(a,b){if(a!=null&&a===P.h9(b))return
return a},
mE:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.S()
z=c-1
if(C.b.X(a,z)!==93)P.bX(a,b,"Missing end `]` to match `[` in host")
P.fH(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
y=b
for(;y<c;++y)if(C.b.X(a,y)===58){P.fH(a,b,c)
return"["+a+"]"}return P.mN(a,b,c)},
mN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.q(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.X(a,z)
if(v===37){u=P.hg(a,z,!0)
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
if(t>=8)return H.f(C.B,t)
t=(C.B[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bX(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.X(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.ha(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mK:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hc(C.b.F(a,b)))P.bX(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bX(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.mB(y?a.toLowerCase():a)},
mB:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mL:function(a,b,c){return P.bY(a,b,c,C.a_)},
mF:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bY(a,b,c,C.C):C.Q.jN(d,new P.mG(),P.h).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a4(w,"/"))w="/"+w
return P.mM(w,e,f)},
mM:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a4(a,"/"))return P.mO(a,!z||c)
return P.mP(a)},
dI:function(a,b,c,d){var z,y
z={}
H.u(d,"$isL",[P.h,null],"$asL")
if(a!=null){if(d!=null)throw H.a(P.c7("Both query and queryParameters specified"))
return P.bY(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.J(0,new P.mI(new P.mJ(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mD:function(a,b,c){return P.bY(a,b,c,C.n)},
hg:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.X(a,b+1)
x=C.b.X(a,z)
w=H.cU(y)
v=H.cU(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.f.aQ(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bR(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
ha:function(a){var z,y,x,w,v,u
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
for(v=0;--w,w>=0;x=128){u=C.f.hg(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.cj(y,0,null)},
bY:function(a,b,c,d){var z=P.hf(a,b,c,H.u(d,"$isd",[P.n],"$asd"),!1)
return z==null?C.b.u(a,b,c):z},
hf:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$isd",[P.n],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.P()
if(typeof c!=="number")return H.q(c)
if(!(y<c))break
c$0:{v=C.b.X(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hg(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bX(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.X(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.ha(v)}}if(w==null)w=new P.an("")
w.a+=C.b.u(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.q(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.P()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hd:function(a){if(C.b.a4(a,"."))return!0
return C.b.e9(a,"/.")!==-1},
mP:function(a){var z,y,x,w,v,u,t
if(!P.hd(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.Q(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
mO:function(a,b){var z,y,x,w,v,u
if(!P.hd(a))return!b?P.hb(a):a
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
C.a.p(z,0,P.hb(z[0]))}return C.a.n(z,"/")},
hb:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hc(J.hK(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.an(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mC:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c7("Invalid URL encoding"))}}return z},
dJ:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c4(a)
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
if(w>127)throw H.a(P.c7("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c7("Truncated URI"))
C.a.h(u,P.mC(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.u(u,"$isd",[P.n],"$asd")
return new P.kU(!1).cq(u)},
hc:function(a){var z=a|32
return 97<=z&&z<=122}}},
mA:{"^":"m:42;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.a0("Invalid port",this.a,z+1))}},
mG:{"^":"m:28;",
$1:function(a){return P.co(C.a0,a,C.k,!1)}},
mJ:{"^":"m:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.co(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.co(C.p,b,C.k,!0))}}},
mI:{"^":"m:40;a",
$2:function(a,b){var z,y
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(z=J.b1(H.hB(b,"$isi")),y=this.a;z.E();)y.$2(a,H.H(z.gM(z)))}},
kK:{"^":"b;a,b,c",
gez:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.ea(y,"?",z)
w=y.length
if(x>=0){v=P.bY(y,x+1,w,C.n)
w=x}else v=null
z=new P.ln(this,"data",null,null,null,P.bY(y,z,w,C.C),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fF:function(a,b,c){var z,y,x,w,v,u,t,s,r
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
if((z.length&1)===1)a=C.H.iv(0,a,s,y)
else{r=P.hf(a,s,y,C.n,!0)
if(r!=null)a=C.b.aZ(a,s,y,r)}return new P.kK(a,z,c)}}},
n9:{"^":"m:38;",
$1:function(a){return new Uint8Array(96)}},
n8:{"^":"m:36;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hO(z,0,96,b)
return z}},
na:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
nb:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m9:{"^":"b;a,b,c,d,e,f,r,x,0y",
ge5:function(){return this.c>0},
ge7:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.q(y)
y=z+1<y
z=y}else z=!1
return z},
ge8:function(){var z=this.f
if(typeof z!=="number")return z.P()
return z<this.r},
ge6:function(){return this.r<this.a.length},
gdh:function(){return this.b===4&&C.b.a4(this.a,"http")},
gdi:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbQ:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdh()){this.x="http"
z="http"}else if(this.gdi()){this.x="https"
z="https"}else if(z===4&&C.b.a4(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a4(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
geA:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcC:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbL:function(a){var z
if(this.ge7()){z=this.d
if(typeof z!=="number")return z.D()
return P.cq(C.b.u(this.a,z+1,this.e),null,null)}if(this.gdh())return 80
if(this.gdi())return 443
return 0},
gel:function(a){return C.b.u(this.a,this.e,this.f)},
gcK:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.P()
return z<y?C.b.u(this.a,z+1,y):""},
ge4:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.an(y,z+1):""},
gcL:function(){var z=this.f
if(typeof z!=="number")return z.P()
if(z>=this.r)return C.a1
z=P.h
return new P.fE(P.fI(this.gcK(this),C.k),[z,z])},
cO:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isL",[P.h,null],"$asL")
i=this.gbQ()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.ge7()?this.gbL(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.dI(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.an(y,x+1)
return new P.cO(i,j,c,f,d,g,b)},
eq:function(a,b){return this.cO(a,null,null,null,null,null,null,b,null,null)},
gV:function(a){var z=this.y
if(z==null){z=C.b.gV(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdB)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdB:1},
ln:{"^":"cO;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e4:function(a){var z=document.createElement("a")
return z},
d4:function(a,b){var z=document.createElement("canvas")
return z},
io:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).aj(z,a,b,c)
y.toString
z=W.G
z=new H.dE(new W.av(y),H.l(new W.ip(),{func:1,ret:P.U,args:[z]}),[z])
return H.e(z.gaI(z),"$isV")},
iq:function(a){H.e(a,"$isaf")
return"wheel"},
bH:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hR(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
iH:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseD")
try{J.hT(z,a)}catch(x){H.ab(x)}return z},
cL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fW:function(a,b,c,d){var z,y
z=W.cL(W.cL(W.cL(W.cL(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
ho:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.Y
if(z===C.j)return a
return z.dE(a,b)},
Z:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ob:{"^":"t;0m:length=","%":"AccessibleNodeList"},
oc:{"^":"Z;0a2:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
od:{"^":"Z;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e9:{"^":"Z;",$ise9:1,"%":"HTMLBaseElement"},
d0:{"^":"t;",$isd0:1,"%":";Blob"},
cu:{"^":"Z;",$iscu:1,"%":"HTMLBodyElement"},
oj:{"^":"Z;0a2:type}","%":"HTMLButtonElement"},
d3:{"^":"Z;",
bP:function(a,b,c){if(c!=null)return a.getContext(b,P.nn(c,null))
return a.getContext(b)},
eF:function(a,b){return this.bP(a,b,null)},
$isd3:1,
"%":"HTMLCanvasElement"},
eg:{"^":"t;",$iseg:1,"%":"CanvasRenderingContext2D"},
ol:{"^":"G;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
on:{"^":"id;0m:length=","%":"CSSPerspective"},
bc:{"^":"t;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oo:{"^":"lm;0m:length=",
eG:function(a,b){var z=a.getPropertyValue(this.fb(a,b))
return z==null?"":z},
fb:function(a,b){var z,y
z=$.$get$el()
y=z[b]
if(typeof y==="string")return y
y=this.hh(a,b)
z[b]=y
return y},
hh:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ij()+b
if(z in a)return z
return b},
gcl:function(a){return a.bottom},
gat:function(a){return a.height},
gaW:function(a){return a.left},
gbc:function(a){return a.right},
gbf:function(a){return a.top},
gax:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ic:{"^":"b;",
gaW:function(a){return this.eG(a,"left")}},
em:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
id:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
op:{"^":"em;0m:length=","%":"CSSTransformValue"},
oq:{"^":"em;0m:length=","%":"CSSUnparsedValue"},
or:{"^":"t;0m:length=","%":"DataTransferItemList"},
bd:{"^":"Z;",$isbd:1,"%":"HTMLDivElement"},
os:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
ot:{"^":"lp;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.u(c,"$isad",[P.a6],"$asad")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[[P.ad,P.a6]]},
$asy:function(){return[[P.ad,P.a6]]},
$isi:1,
$asi:function(){return[[P.ad,P.a6]]},
$isd:1,
$asd:function(){return[[P.ad,P.a6]]},
$asE:function(){return[[P.ad,P.a6]]},
"%":"ClientRectList|DOMRectList"},
ik:{"^":"t;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gax(a))+" x "+H.j(this.gat(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.c2(b,"$isad",[P.a6],"$asad")
if(!z)return!1
z=J.aB(b)
return a.left===z.gaW(b)&&a.top===z.gbf(b)&&this.gax(a)===z.gax(b)&&this.gat(a)===z.gat(b)},
gV:function(a){return W.fW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gax(a)&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF)},
gcl:function(a){return a.bottom},
gat:function(a){return a.height},
gaW:function(a){return a.left},
gbc:function(a){return a.right},
gbf:function(a){return a.top},
gax:function(a){return a.width},
$isad:1,
$asad:function(){return[P.a6]},
"%":";DOMRectReadOnly"},
ou:{"^":"lr;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[P.h]},
$asy:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asE:function(){return[P.h]},
"%":"DOMStringList"},
ov:{"^":"t;0m:length=","%":"DOMTokenList"},
ll:{"^":"cD;de:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
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
gY:function(a){var z=this.j1(this)
return new J.aD(z,z.length,0,[H.z(z,0)])},
aF:function(a,b,c,d){throw H.a(P.ck(null))},
$asy:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
V:{"^":"G;0iX:tagName=",
ghR:function(a){return new W.ls(a)},
gcp:function(a){return new W.ll(a,a.children)},
gdF:function(a){return P.jL(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a6)},
i:function(a){return a.localName},
aj:["bS",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ex
if(z==null){z=H.c([],[W.aH])
y=new W.eT(z)
C.a.h(z,W.fU(null))
C.a.h(z,W.h4())
$.ex=y
d=y}else d=z
z=$.ew
if(z==null){z=new W.hh(d)
$.ew=z
c=z}else{z.a=d
c=z}}if($.aO==null){z=document
y=z.implementation.createHTMLDocument("")
$.aO=y
$.d6=y.createRange()
y=$.aO
y.toString
y=y.createElement("base")
H.e(y,"$ise9")
y.href=z.baseURI
$.aO.head.appendChild(y)}z=$.aO
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscu")}z=$.aO
if(!!this.$iscu)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aO.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.Z,a.tagName)){$.d6.selectNodeContents(x)
w=$.d6.createContextualFragment(b)}else{x.innerHTML=b
w=$.aO.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aO.body
if(x==null?z!=null:x!==z)J.e3(x)
c.cX(w)
document.adoptNode(w)
return w},function(a,b,c){return this.aj(a,b,c,null)},"hZ",null,null,"gjK",5,5,null],
eK:function(a,b,c,d){a.textContent=null
a.appendChild(this.aj(a,b,c,d))},
eJ:function(a,b){return this.eK(a,b,null,null)},
$isV:1,
"%":";Element"},
ip:{"^":"m:24;",
$1:function(a){return!!J.K(H.e(a,"$isG")).$isV}},
ow:{"^":"Z;0a2:type}","%":"HTMLEmbedElement"},
ae:{"^":"t;",$isae:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
af:{"^":"t;",
dA:["eM",function(a,b,c,d){H.l(c,{func:1,args:[W.ae]})
if(c!=null)this.f8(a,b,c,!1)}],
f8:function(a,b,c,d){return a.addEventListener(b,H.bB(H.l(c,{func:1,args:[W.ae]}),1),!1)},
$isaf:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;h1|h2|h5|h6"},
b4:{"^":"d0;",$isb4:1,"%":"File"},
ez:{"^":"lx;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isb4")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.b4]},
$asy:function(){return[W.b4]},
$isi:1,
$asi:function(){return[W.b4]},
$isd:1,
$asd:function(){return[W.b4]},
$isez:1,
$asE:function(){return[W.b4]},
"%":"FileList"},
ox:{"^":"af;0m:length=","%":"FileWriter"},
oy:{"^":"Z;0m:length=","%":"HTMLFormElement"},
bg:{"^":"t;",$isbg:1,"%":"Gamepad"},
oz:{"^":"t;0m:length=","%":"History"},
oA:{"^":"lK;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asy:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cc:{"^":"t;0dH:data=",$iscc:1,"%":"ImageData"},
eC:{"^":"Z;",$iseC:1,"%":"HTMLImageElement"},
eD:{"^":"Z;0a2:type}",$iseD:1,"%":"HTMLInputElement"},
bL:{"^":"dy;",$isbL:1,"%":"KeyboardEvent"},
oE:{"^":"Z;0a2:type}","%":"HTMLLinkElement"},
oF:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
oG:{"^":"t;0m:length=","%":"MediaList"},
oH:{"^":"af;",
dA:function(a,b,c,d){H.l(c,{func:1,args:[W.ae]})
if(b==="message")a.start()
this.eM(a,b,c,!1)},
"%":"MessagePort"},
oI:{"^":"lQ;",
j:function(a,b){return P.b0(a.get(H.H(b)))},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.J(a,new W.ji(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"MIDIInputMap"},
ji:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oJ:{"^":"lR;",
j:function(a,b){return P.b0(a.get(H.H(b)))},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.J(a,new W.jj(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
jj:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bj:{"^":"t;",$isbj:1,"%":"MimeType"},
oK:{"^":"lT;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbj")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bj]},
$asy:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asE:function(){return[W.bj]},
"%":"MimeTypeArray"},
ax:{"^":"dy;",$isax:1,"%":"PointerEvent;DragEvent|MouseEvent"},
av:{"^":"cD;a",
gaI:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.f8("No elements"))
if(y>1)throw H.a(P.f8("More than one element"))
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
gY:function(a){var z=this.a.childNodes
return new W.eA(z,z.length,-1,[H.b8(C.a3,z,"E",0)])},
aF:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asy:function(){return[W.G]},
$asi:function(){return[W.G]},
$asd:function(){return[W.G]}},
G:{"^":"af;0cJ:previousSibling=",
iM:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iQ:function(a,b){var z,y
try{z=a.parentNode
J.hL(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eN(a):z},
h1:function(a,b,c){return a.replaceChild(b,c)},
$isG:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
oR:{"^":"t;",
iJ:[function(a){return a.previousNode()},"$0","gcJ",1,0,26],
"%":"NodeIterator"},
jn:{"^":"lV;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asy:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
oU:{"^":"Z;0a2:type}","%":"HTMLOListElement"},
oV:{"^":"Z;0a2:type}","%":"HTMLObjectElement"},
bk:{"^":"t;0m:length=",$isbk:1,"%":"Plugin"},
oY:{"^":"lZ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbk")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bk]},
$asy:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asE:function(){return[W.bk]},
"%":"PluginArray"},
p_:{"^":"t;0a2:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
p0:{"^":"m4;",
j:function(a,b){return P.b0(a.get(H.H(b)))},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.J(a,new W.jV(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"RTCStatsReport"},
jV:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p2:{"^":"Z;0a2:type}","%":"HTMLScriptElement"},
p3:{"^":"Z;0m:length=","%":"HTMLSelectElement"},
bm:{"^":"af;",$isbm:1,"%":"SourceBuffer"},
p4:{"^":"h2;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbm")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bm]},
$asy:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asE:function(){return[W.bm]},
"%":"SourceBufferList"},
p5:{"^":"Z;0a2:type}","%":"HTMLSourceElement"},
bn:{"^":"t;",$isbn:1,"%":"SpeechGrammar"},
p6:{"^":"mb;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbn")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bn]},
$asy:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asE:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"t;0m:length=",$isbo:1,"%":"SpeechRecognitionResult"},
p8:{"^":"me;",
j:function(a,b){return a.getItem(H.H(b))},
p:function(a,b,c){a.setItem(b,H.H(c))},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga7:function(a){var z=H.c([],[P.h])
this.J(a,new W.kb(z))
return z},
gm:function(a){return a.length},
$asai:function(){return[P.h,P.h]},
$isL:1,
$asL:function(){return[P.h,P.h]},
"%":"Storage"},
kb:{"^":"m:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pb:{"^":"Z;0a2:type}","%":"HTMLStyleElement"},
bp:{"^":"t;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
du:{"^":"Z;",$isdu:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kg:{"^":"Z;",
aj:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
z=W.io("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.av(y).aq(0,new W.av(z))
return y},
"%":"HTMLTableElement"},
pd:{"^":"Z;",
aj:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.E.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.av(z)
x=z.gaI(z)
x.toString
z=new W.av(x)
w=z.gaI(z)
y.toString
w.toString
new W.av(y).aq(0,new W.av(w))
return y},
"%":"HTMLTableRowElement"},
pe:{"^":"Z;",
aj:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.E.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.av(z)
x=z.gaI(z)
y.toString
x.toString
new W.av(y).aq(0,new W.av(x))
return y},
"%":"HTMLTableSectionElement"},
fe:{"^":"Z;",$isfe:1,"%":"HTMLTemplateElement"},
bq:{"^":"af;",$isbq:1,"%":"TextTrack"},
br:{"^":"af;",$isbr:1,"%":"TextTrackCue|VTTCue"},
pg:{"^":"mo;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbr")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.br]},
$asy:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asE:function(){return[W.br]},
"%":"TextTrackCueList"},
ph:{"^":"h6;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbq")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bq]},
$asy:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asE:function(){return[W.bq]},
"%":"TextTrackList"},
pi:{"^":"t;0m:length=","%":"TimeRanges"},
bt:{"^":"t;",$isbt:1,"%":"Touch"},
bu:{"^":"dy;",$isbu:1,"%":"TouchEvent"},
pj:{"^":"mu;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbt")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bt]},
$asy:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asE:function(){return[W.bt]},
"%":"TouchList"},
pk:{"^":"t;0m:length=","%":"TrackDefaultList"},
pm:{"^":"t;",
iJ:[function(a){return a.previousNode()},"$0","gcJ",1,0,26],
"%":"TreeWalker"},
dy:{"^":"ae;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
po:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
pp:{"^":"af;0m:length=","%":"VideoTrackList"},
bV:{"^":"ax;",
gi1:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.D("deltaY is not supported"))},
gi0:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.D("deltaX is not supported"))},
$isbV:1,
"%":"WheelEvent"},
ld:{"^":"af;",
h2:function(a,b){return a.requestAnimationFrame(H.bB(H.l(b,{func:1,ret:-1,args:[P.a6]}),1))},
fk:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fQ:{"^":"G;",$isfQ:1,"%":"Attr"},
pu:{"^":"mX;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbc")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bc]},
$asy:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asE:function(){return[W.bc]},
"%":"CSSRuleList"},
pv:{"^":"ik;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.c2(b,"$isad",[P.a6],"$asad")
if(!z)return!1
z=J.aB(b)
return a.left===z.gaW(b)&&a.top===z.gbf(b)&&a.width===z.gax(b)&&a.height===z.gat(b)},
gV:function(a){return W.fW(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gat:function(a){return a.height},
gax:function(a){return a.width},
"%":"ClientRect|DOMRect"},
px:{"^":"mZ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbg")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bg]},
$asy:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asE:function(){return[W.bg]},
"%":"GamepadList"},
pA:{"^":"n0;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asy:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pB:{"^":"n2;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbo")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bo]},
$asy:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asE:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
pC:{"^":"n4;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbp")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bp]},
$asy:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asE:function(){return[W.bp]},
"%":"StyleSheetList"},
lj:{"^":"eN;de:a<",
J:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.ga7(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
ga7:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfQ")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asai:function(){return[P.h,P.h]},
$asL:function(){return[P.h,P.h]}},
ls:{"^":"lj;a",
j:function(a,b){return this.a.getAttribute(H.H(b))},
p:function(a,b,c){this.a.setAttribute(b,H.H(c))},
gm:function(a){return this.ga7(this).length}},
lt:{"^":"dt;a,b,c,$ti",
ip:function(a,b,c,d){var z=H.z(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a5(this.a,this.b,a,!1,z)}},
pw:{"^":"lt;a,b,c,$ti"},
lu:{"^":"fa;a,b,c,d,e,$ti",
hl:function(){var z=this.d
if(z!=null&&this.a<=0)J.hM(this.b,this.c,z,!1)},
t:{
a5:function(a,b,c,d,e){var z=c==null?null:W.ho(new W.lv(c),W.ae)
z=new W.lu(0,a,b,z,!1,[e])
z.hl()
return z}}},
lv:{"^":"m:10;a",
$1:function(a){return this.a.$1(H.e(a,"$isae"))}},
cn:{"^":"b;a",
f2:function(a){var z,y
z=$.$get$dG()
if(z.gij(z)){for(y=0;y<262;++y)z.p(0,C.Y[y],W.nE())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nF())}},
aR:function(a){return $.$get$fV().U(0,W.bH(a))},
aC:function(a,b,c){var z,y,x
z=W.bH(a)
y=$.$get$dG()
x=y.j(0,H.j(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dN(x.$4(a,b,c,this))},
$isaH:1,
t:{
fU:function(a){var z,y
z=W.e4(null)
y=window.location
z=new W.cn(new W.m5(z,y))
z.f2(a)
return z},
py:[function(a,b,c,d){H.e(a,"$isV")
H.H(b)
H.H(c)
H.e(d,"$iscn")
return!0},"$4","nE",16,0,32],
pz:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isV")
H.H(b)
H.H(c)
z=H.e(d,"$iscn").a
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
return z},"$4","nF",16,0,32]}},
E:{"^":"b;$ti",
gY:function(a){return new W.eA(a,this.gm(a),-1,[H.b8(this,a,"E",0)])},
aF:function(a,b,c,d){H.A(d,H.b8(this,a,"E",0))
throw H.a(P.D("Cannot modify an immutable List."))}},
eT:{"^":"b;a",
aR:function(a){return C.a.dC(this.a,new W.jp(a))},
aC:function(a,b,c){return C.a.dC(this.a,new W.jo(a,b,c))},
$isaH:1},
jp:{"^":"m:15;a",
$1:function(a){return H.e(a,"$isaH").aR(this.a)}},
jo:{"^":"m:15;a,b,c",
$1:function(a){return H.e(a,"$isaH").aC(this.a,this.b,this.c)}},
m6:{"^":"b;",
f4:function(a,b,c,d){var z,y,x
this.a.aq(0,c)
z=b.cS(0,new W.m7())
y=b.cS(0,new W.m8())
this.b.aq(0,z)
x=this.c
x.aq(0,C.z)
x.aq(0,y)},
aR:function(a){return this.a.U(0,W.bH(a))},
aC:["eS",function(a,b,c){var z,y
z=W.bH(a)
y=this.c
if(y.U(0,H.j(z)+"::"+b))return this.d.hO(c)
else if(y.U(0,"*::"+b))return this.d.hO(c)
else{y=this.b
if(y.U(0,H.j(z)+"::"+b))return!0
else if(y.U(0,"*::"+b))return!0
else if(y.U(0,H.j(z)+"::*"))return!0
else if(y.U(0,"*::*"))return!0}return!1}],
$isaH:1},
m7:{"^":"m:29;",
$1:function(a){return!C.a.U(C.t,H.H(a))}},
m8:{"^":"m:29;",
$1:function(a){return C.a.U(C.t,H.H(a))}},
ml:{"^":"m6;e,a,b,c,d",
aC:function(a,b,c){if(this.eS(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1},
t:{
h4:function(){var z,y,x,w,v
z=P.h
y=P.eL(C.r,z)
x=H.z(C.r,0)
w=H.l(new W.mm(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.ml(y,P.cg(null,null,null,z),P.cg(null,null,null,z),P.cg(null,null,null,z),null)
y.f4(null,new H.j7(C.r,w,[x,z]),v,null)
return y}}},
mm:{"^":"m:28;",
$1:function(a){return"TEMPLATE::"+H.j(H.H(a))}},
mk:{"^":"b;",
aR:function(a){var z=J.K(a)
if(!!z.$isf3)return!1
z=!!z.$iscH
if(z&&W.bH(a)==="foreignObject")return!1
if(z)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.b.a4(b,"on"))return!1
return this.aR(a)},
$isaH:1},
eA:{"^":"b;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e0(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
aH:{"^":"b;"},
m5:{"^":"b;a,b",$ispn:1},
hh:{"^":"b;a",
cX:function(a){new W.mU(this).$2(a,null)},
b2:function(a,b){if(b==null)J.e3(a)
else b.removeChild(a)},
h8:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hP(a)
x=y.gde().getAttribute("is")
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
this.h7(H.e(a,"$isV"),b,z,v,u,H.e(y,"$isL"),H.H(x))}catch(t){if(H.ab(t) instanceof P.aC)throw t
else{this.b2(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
h7:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b2(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aR(a)){this.b2(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aC(a,"is",g)){this.b2(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga7(f)
y=H.c(z.slice(0),[H.z(z,0)])
for(x=f.ga7(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aC(a,J.hV(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.j(e)+" "+w+'="'+H.j(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.K(a).$isfe)this.cX(a.content)},
$isoS:1},
mU:{"^":"m:34;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.h8(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b2(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hQ(z)}catch(w){H.ab(w)
v=H.e(z,"$isG")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isG")}}},
lm:{"^":"t+ic;"},
lo:{"^":"t+y;"},
lp:{"^":"lo+E;"},
lq:{"^":"t+y;"},
lr:{"^":"lq+E;"},
lw:{"^":"t+y;"},
lx:{"^":"lw+E;"},
lJ:{"^":"t+y;"},
lK:{"^":"lJ+E;"},
lQ:{"^":"t+ai;"},
lR:{"^":"t+ai;"},
lS:{"^":"t+y;"},
lT:{"^":"lS+E;"},
lU:{"^":"t+y;"},
lV:{"^":"lU+E;"},
lY:{"^":"t+y;"},
lZ:{"^":"lY+E;"},
m4:{"^":"t+ai;"},
h1:{"^":"af+y;"},
h2:{"^":"h1+E;"},
ma:{"^":"t+y;"},
mb:{"^":"ma+E;"},
me:{"^":"t+ai;"},
mn:{"^":"t+y;"},
mo:{"^":"mn+E;"},
h5:{"^":"af+y;"},
h6:{"^":"h5+E;"},
mt:{"^":"t+y;"},
mu:{"^":"mt+E;"},
mW:{"^":"t+y;"},
mX:{"^":"mW+E;"},
mY:{"^":"t+y;"},
mZ:{"^":"mY+E;"},
n_:{"^":"t+y;"},
n0:{"^":"n_+E;"},
n1:{"^":"t+y;"},
n2:{"^":"n1+E;"},
n3:{"^":"t+y;"},
n4:{"^":"n3+E;"}}],["","",,P,{"^":"",
nq:function(a){var z,y
z=J.K(a)
if(!!z.$iscc){y=z.gdH(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h8(a.data,a.height,a.width)},
np:function(a){if(a instanceof P.h8)return{data:a.a,height:a.b,width:a.c}
return a},
b0:function(a){var z,y,x,w,v
if(a==null)return
z=P.de(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.H(y[w])
z.p(0,v,a[v])}return z},
nn:function(a,b){var z={}
a.J(0,new P.no(z))
return z},
es:function(){var z=$.er
if(z==null){z=J.cZ(window.navigator.userAgent,"Opera",0)
$.er=z}return z},
ij:function(){var z,y
z=$.eo
if(z!=null)return z
y=$.ep
if(y==null){y=J.cZ(window.navigator.userAgent,"Firefox",0)
$.ep=y}if(y)z="-moz-"
else{y=$.eq
if(y==null){y=!P.es()&&J.cZ(window.navigator.userAgent,"Trident/",0)
$.eq=y}if(y)z="-ms-"
else z=P.es()?"-o-":"-webkit-"}$.eo=z
return z},
mh:{"^":"b;",
e2:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cR:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isaF)return new Date(a.a)
if(!!y.$isjO)throw H.a(P.ck("structured clone of RegExp"))
if(!!y.$isb4)return a
if(!!y.$isd0)return a
if(!!y.$isez)return a
if(!!y.$iscc)return a
if(!!y.$iseS||!!y.$isdl)return a
if(!!y.$isL){x=this.e2(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.J(a,new P.mj(z,this))
return z.a}if(!!y.$isd){x=this.e2(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.hY(a,x)}throw H.a(P.ck("structured clone of other type"))},
hY:function(a,b){var z,y,x,w
z=J.aL(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.q(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.cR(z.j(a,w)))
return x}},
mj:{"^":"m:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.cR(b)}},
h8:{"^":"b;dH:a>,b,c",$iscc:1},
no:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}},
mi:{"^":"mh;a,b"},
ix:{"^":"cD;a,b",
gbo:function(){var z,y,x
z=this.b
y=H.am(z,"y",0)
x=W.V
return new H.j5(new H.dE(z,H.l(new P.iy(),{func:1,ret:P.U,args:[y]}),[y]),H.l(new P.iz(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isV")
z=this.gbo()
J.hS(z.b.$1(J.cs(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aF:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on filtered list"))},
gm:function(a){return J.ao(this.gbo().a)},
j:function(a,b){var z=this.gbo()
return z.b.$1(J.cs(z.a,b))},
gY:function(a){var z=P.j0(this.gbo(),!1,W.V)
return new J.aD(z,z.length,0,[H.z(z,0)])},
$asy:function(){return[W.V]},
$asi:function(){return[W.V]},
$asd:function(){return[W.V]}},
iy:{"^":"m:24;",
$1:function(a){return!!J.K(H.e(a,"$isG")).$isV}},
iz:{"^":"m:57;",
$1:function(a){return H.k(H.e(a,"$isG"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
m_:{"^":"b;$ti",
gbc:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.A(z+this.c,H.z(this,0))},
gcl:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.A(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c2(b,"$isad",[P.a6],"$asad")
if(!z)return!1
z=this.a
y=J.aB(b)
x=y.gaW(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbf(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.z(this,0)
if(H.A(z+this.c,w)===y.gbc(b)){if(typeof x!=="number")return x.D()
z=H.A(x+this.d,w)===y.gcl(b)}else z=!1}else z=!1}else z=!1
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
return P.lL(P.cM(P.cM(P.cM(P.cM(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ad:{"^":"m_;aW:a>,bf:b>,ax:c>,at:d>,$ti",t:{
jL:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.P()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.P()
if(d<0)y=-d*0
else y=d
return new P.ad(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bM:{"^":"t;",$isbM:1,"%":"SVGLength"},oD:{"^":"lN;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbM")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asE:function(){return[P.bM]},
"%":"SVGLengthList"},bO:{"^":"t;",$isbO:1,"%":"SVGNumber"},oT:{"^":"lX;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbO")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bO]},
$isi:1,
$asi:function(){return[P.bO]},
$isd:1,
$asd:function(){return[P.bO]},
$asE:function(){return[P.bO]},
"%":"SVGNumberList"},oZ:{"^":"t;0m:length=","%":"SVGPointList"},f3:{"^":"cH;0a2:type}",$isf3:1,"%":"SVGScriptElement"},p9:{"^":"mg;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asE:function(){return[P.h]},
"%":"SVGStringList"},pc:{"^":"cH;0a2:type}","%":"SVGStyleElement"},cH:{"^":"V;",
gcp:function(a){return new P.ix(a,new W.av(a))},
aj:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aH])
C.a.h(z,W.fU(null))
C.a.h(z,W.h4())
C.a.h(z,new W.mk())
c=new W.hh(new W.eT(z))
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
$iscH:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bS:{"^":"t;",$isbS:1,"%":"SVGTransform"},pl:{"^":"mw;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbS")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bS]},
$isi:1,
$asi:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
$asE:function(){return[P.bS]},
"%":"SVGTransformList"},lM:{"^":"t+y;"},lN:{"^":"lM+E;"},lW:{"^":"t+y;"},lX:{"^":"lW+E;"},mf:{"^":"t+y;"},mg:{"^":"mf+E;"},mv:{"^":"t+y;"},mw:{"^":"mv+E;"}}],["","",,P,{"^":"",T:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$iskv:1}}],["","",,P,{"^":"",oe:{"^":"t;0m:length=","%":"AudioBuffer"},e7:{"^":"af;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},of:{"^":"lk;",
j:function(a,b){return P.b0(a.get(H.H(b)))},
J:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
ga7:function(a){var z=H.c([],[P.h])
this.J(a,new P.hX(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asai:function(){return[P.h,null]},
$isL:1,
$asL:function(){return[P.h,null]},
"%":"AudioParamMap"},hX:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},hY:{"^":"e7;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},og:{"^":"af;0m:length=","%":"AudioTrackList"},i0:{"^":"af;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oh:{"^":"e7;0a2:type}","%":"BiquadFilterNode"},oW:{"^":"i0;0m:length=","%":"OfflineAudioContext"},oX:{"^":"hY;0a2:type}","%":"Oscillator|OscillatorNode"},lk:{"^":"t+ai;"}}],["","",,P,{"^":"",dq:{"^":"t;",
iZ:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$iscc)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.np(g))
return}if(!!z.$iseC)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c7("Incorrect number or type of arguments"))},
iY:function(a,b,c,d,e,f,g){return this.iZ(a,b,c,d,e,f,g,null,null,null)},
$isdq:1,
"%":"WebGLRenderingContext"},kE:{"^":"t;",$iskE:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",p7:{"^":"md;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return P.b0(a.item(b))},
p:function(a,b,c){H.F(b)
H.e(c,"$isL")
throw H.a(P.D("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$asy:function(){return[[P.L,,,]]},
$isi:1,
$asi:function(){return[[P.L,,,]]},
$isd:1,
$asd:function(){return[[P.L,,,]]},
$asE:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},mc:{"^":"t+y;"},md:{"^":"mc+E;"}}],["","",,O,{"^":"",aM:{"^":"b;0a,0b,0c,0d,$ti",
bU:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cY:function(a,b,c){var z=H.am(this,"aM",0)
H.l(b,{func:1,ret:P.U,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bj:function(a,b){return this.cY(a,null,b)},
fS:function(a){var z
H.u(a,"$isi",[H.am(this,"aM",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eZ:function(a,b){var z
H.u(b,"$isi",[H.am(this,"aM",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.aD(z,z.length,0,[H.z(z,0)])},
I:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.am(this,"aM",0)
H.A(b,z)
z=[z]
if(this.fS(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eZ(x,H.c([b],z))}},
$isi:1,
t:{
d5:function(a){var z=new O.aM([a])
z.bU(a)
return z}}},di:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
f_:function(a){var z=this.b
if(!(z==null))z.H(a)},
aJ:function(){return this.f_(null)},
ga_:function(a){var z=this.a
if(z.length>0)return C.a.gau(z)
else return V.ch()},
eo:function(a){var z=this.a
if(a==null)C.a.h(z,V.ch())
else C.a.h(z,a)
this.aJ()},
cI:function(){var z=this.a
if(z.length>0){z.pop()
this.aJ()}}}}],["","",,E,{"^":"",d_:{"^":"b;"},aP:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sah:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().K(0,this.gej())
y=this.c
if(y!=null)y.gB().h(0,this.gej())
x=new D.N("shape",z,this.c,this,[F.f5])
x.b=!0
this.al(x)}},
sac:function(a){var z,y
if(!J.Q(this.r,a)){z=this.r
if(z!=null)z.gB().K(0,this.gei())
if(a!=null)a.gB().h(0,this.gei())
this.r=a
y=new D.N("mover",z,a,this,[U.aj])
y.b=!0
this.al(y)}},
aH:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aw(0,b,this):null
if(!J.Q(y,this.x)){x=this.x
this.x=y
w=new D.N("matrix",x,y,this,[V.ar])
w.b=!0
this.al(w)}for(z=this.y.a,z=new J.aD(z,z.length,0,[H.z(z,0)]);z.E();)z.d.aH(0,b)},
aY:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga_(z))
else C.a.h(z.a,y.k(0,z.ga_(z)))
z.aJ()
a.ep(this.f)
z=a.dy
x=(z&&C.a).gau(z)
if(x!=null&&this.d!=null)x.iP(a,this)
for(z=this.y.a,z=new J.aD(z,z.length,0,[H.z(z,0)]);z.E();)z.d.aY(a)
a.en()
a.dx.cI()},
gB:function(){var z=this.z
if(z==null){z=D.S()
this.z=z}return z},
al:function(a){var z=this.z
if(!(z==null))z.H(a)},
Z:function(){return this.al(null)},
iA:[function(a){H.e(a,"$isC")
this.e=null
this.al(a)},function(){return this.iA(null)},"jT","$1","$0","gej",0,2,1],
iz:[function(a){this.al(H.e(a,"$isC"))},function(){return this.iz(null)},"jS","$1","$0","gei",0,2,1],
ix:[function(a){this.al(H.e(a,"$isC"))},function(){return this.ix(null)},"jQ","$1","$0","geh",0,2,1],
jP:[function(a,b){var z,y,x,w,v,u,t,s
H.u(b,"$isi",[E.aP],"$asi")
for(z=b.length,y=this.geh(),x={func:1,ret:-1,args:[D.C]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.bf()
t.d=0
u.sa5(t)}t=u.ga5()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.Z()},"$2","giw",8,0,11],
jR:[function(a,b){var z,y,x,w,v
H.u(b,"$isi",[E.aP],"$asi")
for(z=b.length,y=this.geh(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.ga5()==null){v=new D.bf()
v.d=0
w.sa5(v)}w.ga5().K(0,y)}}this.Z()},"$2","giy",8,0,11],
$isaR:1,
t:{
ey:function(a,b,c,d,e,f){var z,y
z=new E.aP()
z.a=d
z.b=!0
y=O.d5(E.aP)
z.y=y
y.bj(z.giw(),z.giy())
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
z.sah(0,e)
z.sac(c)
return z}}},jQ:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eV:function(a,b){var z,y
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
y=[V.ar]
z.a=H.c([],y)
z.gB().h(0,new E.jS(this))
this.cy=z
z=new O.di()
z.a=H.c([],y)
z.gB().h(0,new E.jT(this))
this.db=z
z=new O.di()
z.a=H.c([],y)
z.gB().h(0,new E.jU(this))
this.dx=z
z=H.c([],[O.dv])
this.dy=z
C.a.h(z,null)
this.fr=new H.b5(0,0,[P.h,A.f4])},
giK:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga_(z)
y=this.db
y=z.k(0,y.ga_(y))
this.z=y
z=y}return z},
ep:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gau(z):a;(z&&C.a).h(z,y)},
en:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
jR:function(a,b){var z=new E.jQ(a,b)
z.eV(a,b)
return z}}},jS:{"^":"m:5;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.z=null
z.ch=null}},jT:{"^":"m:5;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jU:{"^":"m:5;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.ch=null
z.cx=null}},f9:{"^":"C;c,a,0b"},kn:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a5:x@,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z},
f1:[function(a){var z
H.e(a,"$isC")
z=this.x
if(!(z==null))z.H(a)
this.iS()},function(){return this.f1(null)},"f0","$1","$0","gd0",0,2,1],
gic:function(){var z,y,x
z=Date.now()
y=C.f.a6(P.eu(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aF(z,!1)
return x/y},
dm:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.q(z)
x=C.d.cB(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.cB(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.fh(C.q,this.giR())},
iS:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kp(this),{func:1,ret:-1,args:[P.a6]})
C.G.fk(z)
C.G.h2(z,W.ho(y,P.a6))}},"$0","giR",0,0,3],
iO:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dm()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aF(w,!1)
x.y=P.eu(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.aY(this.e)}x=this.z
if(!(x==null))x.H(null)}catch(v){z=H.ab(v)
y=H.bD(v)
P.dX("Error: "+H.j(z))
P.dX("Stack: "+H.j(y))
throw H.a(z)}},
t:{
ko:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$isd3)return E.fg(a,!0,!0,!0,!1)
y=W.d4(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcp(a).h(0,y)
w=E.fg(y,!0,!0,!0,!1)
w.a=a
return w},
fg:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kn()
y=P.iX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.bP(a,"webgl",y)
x=H.e(x==null?C.l.bP(a,"experimental-webgl",y):x,"$isdq")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jR(x,a)
w=new T.ki(x)
w.b=H.F(x.getParameter(3379))
w.c=H.F(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kR(a)
v=new X.iP()
v.c=new X.b6(!1,!1,!1)
v.d=P.cg(null,null,null,P.n)
w.b=v
v=new X.jk(w)
v.f=0
v.r=new V.a_(0,0)
v.x=new V.a_(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.j2(w)
v.r=0
v.x=new V.a_(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ks(w)
v.e=0
v.f=new V.a_(0,0)
v.r=new V.a_(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.fa,P.b]])
w.z=v
u=document
t=W.ax
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a5(u,"contextmenu",H.l(w.gfF(),s),!1,t))
v=w.z
r=W.ae
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a5(a,"focus",H.l(w.gfI(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a5(a,"blur",H.l(w.gfB(),q),!1,r))
v=w.z
p=W.bL
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a5(u,"keyup",H.l(w.gfK(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a5(u,"keydown",H.l(w.gfJ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a5(a,"mousedown",H.l(w.gfN(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a5(a,"mouseup",H.l(w.gfP(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a5(a,"mousemove",H.l(w.gfO(),s),!1,t))
p=w.z
o=W.bV;(p&&C.a).h(p,W.a5(a,H.H(W.iq(a)),H.l(w.gfQ(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a5(u,"mousemove",H.l(w.gfG(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a5(u,"mouseup",H.l(w.gfH(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a5(u,"pointerlockchange",H.l(w.gfR(),q),!1,r))
r=w.z
q=W.bu
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a5(a,"touchstart",H.l(w.gfY(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a5(a,"touchend",H.l(w.gfW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a5(a,"touchmove",H.l(w.gfX(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aF(Date.now(),!1)
z.cy=0
z.dm()
return z}}},kp:{"^":"m:35;a",
$1:function(a){var z
H.o_(a)
z=this.a
if(z.ch){z.ch=!1
z.iO()}}}}],["","",,Z,{"^":"",fO:{"^":"b;a,b",t:{
dD:function(a,b,c){var z
H.u(c,"$isd",[P.n],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.by(c)),35044)
a.bindBuffer(b,null)
return new Z.fO(b,z)}}},ec:{"^":"d_;a,b,c,d,e",
cj:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.v('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.j(z))
throw H.a(x)}},
i:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},lb:{"^":"b;a",$isoi:1},ed:{"^":"b;a,0b,c,d",
aV:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
cj:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].cj(a)},
j4:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aY:function(a){var z,y,x,w,v
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
$ispf:1},cA:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bl(this.c)+"'")+"]"}},bv:{"^":"b;a",
gcZ:function(a){var z,y
z=this.a
y=(z&$.$get$aX().a)!==0?3:0
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$aY().a)!==0)y+=2
if((z&$.$get$aZ().a)!==0)y+=3
if((z&$.$get$bT().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=4
if((z&$.$get$bw().a)!==0)++y
return(z&$.$get$aU().a)!==0?y+4:y},
hP:function(a){var z,y,x
z=$.$get$aX()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fN()},
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
if((y&$.$get$bT().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
t:{
au:function(a){return new Z.bv(a)}}}}],["","",,D,{"^":"",eh:{"^":"b;"},bf:{"^":"b;0a,0b,0c,0d",
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
z=z==null?null:C.a.U(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).K(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.U(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).K(z,b)||y}return y},
H:function(a){var z,y,x,w
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
return!0}if(!x)C.a.J(y,new D.iu(z))
y=this.b
if(!(y==null))C.a.J(y,new D.iv(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
i3:function(){return this.H(null)},
iT:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.H(y)}}},
ae:function(a){return this.iT(a,!0,!1)},
t:{
S:function(){var z=new D.bf()
z.d=0
return z}}},iu:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},iv:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},C:{"^":"b;a,0b"},cB:{"^":"C;c,d,a,0b,$ti"},cC:{"^":"C;c,d,a,0b,$ti"},N:{"^":"C;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ee:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
t:{"^":"ok<"}},eI:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eI))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eJ:{"^":"C;c,a,0b"},iP:{"^":"b;0a,0b,0c,0d",
iG:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eJ(a,this)
y.b=!0
return z.H(y)},
iC:function(a){var z,y
this.c=a.b
this.d.K(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eJ(a,this)
y.b=!0
return z.H(y)}},eM:{"^":"dp;x,y,c,d,e,a,0b"},j2:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aA:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aF(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.a_(y.a+x*w,y.b+v*u)
u=this.a.gbt()
s=new X.ci(a,new V.a_(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cH:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.H(this.aA(a,b))
return!0},
ba:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eI()
if(typeof z!=="number")return z.bO()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.aA(a,b))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.aA(a,b))
return!0},
iH:function(a){return!1},
fM:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aF(Date.now(),!1)
y=this.f
x=new X.eM(c,a,this.a.gbt(),b,z,this)
x.b=!0
y.H(x)
this.y=z
this.x=new V.a_(0,0)}},b6:{"^":"b;a,b,c",
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
return z+(this.c?"Shift+":"")}},ci:{"^":"dp;x,y,z,Q,ch,c,d,e,a,0b"},jk:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c0:function(a,b,c){var z,y,x
z=new P.aF(Date.now(),!1)
y=this.a.gbt()
x=new X.ci(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cH:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.H(this.c0(a,b,!0))
return!0},
ba:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eI()
if(typeof z!=="number")return z.bO()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.c0(a,b,!0))
return!0},
b9:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.c0(a,b,!1))
return!0},
iI:function(a,b){return!1}},dp:{"^":"C;"},fl:{"^":"dp;x,y,z,Q,ch,c,d,e,a,0b"},ks:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aA:function(a,b){var z,y,x,w
H.u(a,"$isd",[V.a_],"$asd")
z=new P.aF(Date.now(),!1)
y=a.length>0?a[0]:new V.a_(0,0)
x=this.a.gbt()
w=new X.fl(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iF:function(a){var z
H.u(a,"$isd",[V.a_],"$asd")
z=this.b
if(z==null)return!1
z.H(this.aA(a,!0))
return!0},
iD:function(a){var z
H.u(a,"$isd",[V.a_],"$asd")
z=this.c
if(z==null)return!1
z.H(this.aA(a,!0))
return!0},
iE:function(a){var z
H.u(a,"$isd",[V.a_],"$asd")
z=this.d
if(z==null)return!1
z.H(this.aA(a,!1))
return!0}},kR:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbt:function(){var z=this.a
return V.f0(0,0,(z&&C.l).gdF(z).c,C.l.gdF(z).d)},
dc:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eI(z,new X.b6(y,a.altKey,a.shiftKey))},
aP:function(a){var z,y
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
return new V.a_(y-w,x-v)},
b1:function(a){return new V.a9(a.movementX,a.movementY)},
c5:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a_])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.af(u.pageX)
C.d.af(u.pageY)
s=z.left
C.d.af(u.pageX)
C.a.h(y,new V.a_(t-s,C.d.af(u.pageY)-z.top))}return y},
ay:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.b6(y,a.altKey,a.shiftKey))},
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
jq:[function(a){this.f=!0},"$1","gfI",4,0,10],
jk:[function(a){this.f=!1},"$1","gfB",4,0,10],
jn:[function(a){H.e(a,"$isax")
if(this.f&&this.c2(a))a.preventDefault()},"$1","gfF",4,0,4],
js:[function(a){var z
H.e(a,"$isbL")
if(!this.f)return
z=this.dc(a)
if(this.b.iG(z))a.preventDefault()},"$1","gfK",4,0,22],
jr:[function(a){var z
H.e(a,"$isbL")
if(!this.f)return
z=this.dc(a)
if(this.b.iC(z))a.preventDefault()},"$1","gfJ",4,0,22],
ju:[function(a){var z,y,x,w
H.e(a,"$isax")
z=this.a
z.focus()
this.f=!0
this.aP(a)
if(this.x){y=this.ay(a)
x=this.b1(a)
if(this.d.cH(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ay(a)
w=this.aB(a)
if(this.c.cH(y,w))a.preventDefault()},"$1","gfN",4,0,4],
jw:[function(a){var z,y,x
H.e(a,"$isax")
this.aP(a)
z=this.ay(a)
if(this.x){y=this.b1(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.ba(z,x))a.preventDefault()},"$1","gfP",4,0,4],
jp:[function(a){var z,y,x
H.e(a,"$isax")
if(!this.c2(a)){this.aP(a)
z=this.ay(a)
if(this.x){y=this.b1(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.ba(z,x))a.preventDefault()}},"$1","gfH",4,0,4],
jv:[function(a){var z,y,x
H.e(a,"$isax")
this.aP(a)
z=this.ay(a)
if(this.x){y=this.b1(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.b9(z,x))a.preventDefault()},"$1","gfO",4,0,4],
jo:[function(a){var z,y,x
H.e(a,"$isax")
if(!this.c2(a)){this.aP(a)
z=this.ay(a)
if(this.x){y=this.b1(a)
if(this.d.b9(z,y))a.preventDefault()
return}if(this.r)return
x=this.aB(a)
if(this.c.b9(z,x))a.preventDefault()}},"$1","gfG",4,0,4],
jx:[function(a){var z,y
H.e(a,"$isbV")
this.aP(a)
z=new V.a9((a&&C.F).gi0(a),C.F.gi1(a)).A(0,180)
if(this.x){if(this.d.iH(z))a.preventDefault()
return}if(this.r)return
y=this.aB(a)
if(this.c.iI(z,y))a.preventDefault()},"$1","gfQ",4,0,39],
jy:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ay(this.y)
v=this.aB(this.y)
this.d.fM(w,v,x)}},"$1","gfR",4,0,10],
jE:[function(a){var z
H.e(a,"$isbu")
this.a.focus()
this.f=!0
this.cb(a)
z=this.c5(a)
if(this.e.iF(z))a.preventDefault()},"$1","gfY",4,0,14],
jC:[function(a){var z
H.e(a,"$isbu")
this.cb(a)
z=this.c5(a)
if(this.e.iD(z))a.preventDefault()},"$1","gfW",4,0,14],
jD:[function(a){var z
H.e(a,"$isbu")
this.cb(a)
z=this.c5(a)
if(this.e.iE(z))a.preventDefault()},"$1","gfX",4,0,14]}}],["","",,D,{"^":"",cx:{"^":"b;0a,0b,0c,0d",
gB:function(){var z=this.d
if(z==null){z=D.S()
this.d=z}return z},
aK:[function(a){var z
H.e(a,"$isC")
z=this.d
if(!(z==null))z.H(a)},function(){return this.aK(null)},"j7","$1","$0","gd1",0,2,1],
sac:function(a){var z,y
if(!J.Q(this.b,a)){z=this.b
if(z!=null)z.gB().K(0,this.gd1())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd1())
z=new D.N("mover",y,this.b,this,[U.aj])
z.b=!0
this.aK(z)}},
sa8:function(a,b){var z,y
if(b==null)b=new V.a3(1,1,1)
if(!this.c.v(0,b)){z=this.c
this.c=b
y=new D.N("color",z,b,this,[V.a3])
y.b=!0
this.aK(y)}},
$isa7:1,
$isaR:1,
t:{
et:function(a,b){var z=new D.cx()
z.c=new V.a3(1,1,1)
z.a=new V.I(0,0,1)
z.sac(b)
z.sa8(0,a)
return z}}},a7:{"^":"b;",$isaR:1},iQ:{"^":"aM;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gB:function(){var z=this.Q
if(z==null){z=D.S()
this.Q=z}return z},
aK:function(a){var z=this.Q
if(!(z==null))z.H(a)},
fL:[function(a){var z
H.e(a,"$isC")
z=this.ch
if(!(z==null))z.H(a)},function(){return this.fL(null)},"jt","$1","$0","gdj",0,2,1],
jz:[function(a){var z,y,x
H.u(a,"$isi",[D.a7],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.f3(x))return!1}return!0},"$1","gfT",4,0,41],
jh:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a7
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdj(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.e(b[u],"$isa7")
if(t instanceof D.cx)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bf()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cB(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfw",8,0,18],
jB:[function(a,b){var z,y,x,w,v,u
z=D.a7
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdj(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.e(b[w],"$isa7")
if(v instanceof D.cx)C.a.K(this.e,v)
u=v.d
if(u==null){u=new D.bf()
u.d=0
v.d=u}u.K(0,x)}z=new D.cC(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfV",8,0,18],
f3:function(a){var z=C.a.U(this.e,a)
return z},
$asi:function(){return[D.a7]},
$asaM:function(){return[D.a7]}},jw:{"^":"b;",$isa7:1,$isaR:1},k9:{"^":"b;",$isa7:1,$isaR:1},kk:{"^":"b;",$isa7:1,$isaR:1},kl:{"^":"b;",$isa7:1,$isaR:1},km:{"^":"b;",$isa7:1,$isaR:1}}],["","",,V,{"^":"",
om:[function(a,b){if(typeof b!=="number")return b.S()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","jg",8,0,37],
cX:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bi(a-b,z)
return(a<0?a+z:a)+b},
O:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.d.ex($.o.$2(a,0)?0:a,b),c+b+1)},
bC:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$isd",[P.p],"$asd")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.O(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.b.ad(z[u],x))}return z},
dW:function(a,b){return C.d.j0(Math.pow(b,C.P.cB(Math.log(H.nm(a))/Math.log(b))))},
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
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}},
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
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}},
bN:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$isbN")
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
return new V.bN(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bN))return!1
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
z=[P.p]
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
return s+(z+w[2]+"]")},
t:{
jh:function(a){return new V.bN(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)}}},
ar:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ag:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
eb:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.q(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.q(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.q(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.q(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.q(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.q(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.o.$2(a2,0))return V.ch()
a3=1/a2
a4=-w
a5=-i
return V.aG((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isar")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.q(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.q(s)
r=a7.b
if(typeof r!=="number")return H.q(r)
q=a7.f
if(typeof q!=="number")return H.q(q)
p=a7.z
if(typeof p!=="number")return H.q(p)
o=a7.cy
if(typeof o!=="number")return H.q(o)
n=a7.c
if(typeof n!=="number")return H.q(n)
m=a7.r
if(typeof m!=="number")return H.q(m)
l=a7.Q
if(typeof l!=="number")return H.q(l)
k=a7.db
if(typeof k!=="number")return H.q(k)
j=a7.d
if(typeof j!=="number")return H.q(j)
i=a7.x
if(typeof i!=="number")return H.q(i)
h=a7.ch
if(typeof h!=="number")return H.q(h)
g=a7.dx
if(typeof g!=="number")return H.q(g)
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
return V.aG(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
bg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.q(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.q(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.q(l)
return new V.a1(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ar))return!1
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
e3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
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
N:function(){return this.e3("",3,0)},
C:function(a){return this.e3(a,3,0)},
t:{
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ar(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ch:function(){return V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dj:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eQ:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aG(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eR:function(a,b,c,d){return V.eP(new V.a1(0,0,0),new V.I(0,1,0),new V.I(a,b,c))},
eP:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.G(c)))
y=b.aD(z)
x=y.A(0,Math.sqrt(y.G(y)))
w=z.aD(x)
v=new V.I(a.a,a.b,a.c)
return V.aG(x.a,w.a,z.a,x.R(0).G(v),x.b,w.b,z.b,w.R(0).G(v),x.c,w.c,z.c,z.R(0).G(v),0,0,0,1)}}},
a_:{"^":"b;a,b",
S:function(a,b){return new V.a_(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.a_(this.a*b,this.b*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}},
a1:{"^":"b;a,b,c",
D:function(a,b){return new V.a1(this.a+b.a,this.b+b.b,this.c+b.c)},
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
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}},
bP:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bP(this.a*b,this.b*b,this.c*b,this.d*b)},
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
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}},
f_:{"^":"b;a,b,c,d",
gav:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"},
t:{
f0:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f_(a,b,c,d)}}},
a9:{"^":"b;a,b",
im:[function(a){return Math.sqrt(this.G(this))},"$0","gm",1,0,17],
G:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.q(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.q(w)
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
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}},
I:{"^":"b;a,b,c",
im:[function(a){return Math.sqrt(this.G(this))},"$0","gm",1,0,17],
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cF:function(a,b){var z,y,x
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
D:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.I(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.I(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.o.$2(b,0))return new V.I(0,0,0)
return new V.I(this.a/b,this.b/b,this.c/b)},
ec:function(){if(!$.o.$2(0,this.a))return!1
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
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}}],["","",,U,{"^":"",i7:{"^":"eh;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bV:function(a){var z=V.cX(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.S()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.H(a)},
seB:function(a,b){},
sed:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bV(z)}z=new D.N("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.T(z)}},
sef:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bV(z)}z=new D.N("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.T(z)}},
sa3:function(a,b){var z,y
b=this.bV(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.N("location",y,b,this,[P.p])
z.b=!0
this.T(z)}},
see:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.N("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.T(z)}},
sa0:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.N("velocity",x,a,this,[P.p])
z.b=!0
this.T(z)}},
sdG:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.N("dampening",y,a,this,[P.p])
z.b=!0
this.T(z)}},
aH:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa3(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sa0(y)}},
t:{
ej:function(){var z=new U.i7()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ek:{"^":"aj;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.S()
this.b=z}return z},
aw:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ek))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
t:{
c9:function(a){var z=new U.ek()
z.a=a
return z}}},eB:{"^":"aM;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
T:[function(a){var z
H.e(a,"$isC")
z=this.e
if(!(z==null))z.H(a)},function(){return this.T(null)},"aL","$1","$0","gbl",0,2,1],
jg:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.aj
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gbl(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gB()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cB(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfv",8,0,16],
jA:[function(a,b){var z,y,x,w,v
z=U.aj
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gbl(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gB().K(0,x)}z=new D.cC(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfU",8,0,16],
aw:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aD(z,z.length,0,[H.z(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aw(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.ch():x
z=this.e
if(!(z==null))z.ae(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eB))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.Q(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.aj]},
$asaM:function(){return[U.aj]},
$isaj:1},aj:{"^":"eh;"},f1:{"^":"aj;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.S()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.H(a)},
seC:function(a){var z,y
a=V.cX(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.N("yaw",y,a,this,[P.p])
z.b=!0
this.T(z)}},
sem:function(a,b){var z,y
b=V.cX(b,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,b)){y=this.b
this.b=b
z=new D.N("pitch",y,b,this,[P.p])
z.b=!0
this.T(z)}},
ser:function(a){var z,y
a=V.cX(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.N("roll",y,a,this,[P.p])
z.b=!0
this.T(z)}},
aw:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.seC(this.a+this.d*b.y)
this.sem(0,this.b+this.e*b.y)
this.ser(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aG(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).k(0,V.eQ(this.b)).k(0,V.dj(this.a))
z=this.y
if(!(z==null))z.ae(0)}return this.x},
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.f1))return!1
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
i:function(a){return"Rotater: ["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"], ["+V.O(this.d,3,0)+", "+V.O(this.e,3,0)+", "+V.O(this.f,3,0)+"]"},
t:{
f2:function(a,b,c,d,e,f){var z,y,x
z=new U.f1()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.seC(f)
z.sem(0,d)
z.ser(e)
y=z.d
if(!$.o.$2(y,c)){x=z.d
z.d=c
y=new D.N("deltaYaw",x,c,z,[P.p])
y.b=!0
z.T(y)}y=z.e
if(!$.o.$2(y,a)){x=z.e
z.e=a
y=new D.N("deltaPitch",x,a,z,[P.p])
y.b=!0
z.T(y)}y=z.f
if(!$.o.$2(y,b)){x=z.f
z.f=b
y=new D.N("deltaRoll",x,b,z,[P.p])
y.b=!0
z.T(y)}return z}}},kS:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.S()
this.fx=z}return z},
T:[function(a){var z
H.e(a,"$isC")
z=this.fx
if(!(z==null))z.H(a)},function(){return this.T(null)},"aL","$1","$0","gbl",0,2,1],
hQ:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.S()
z.b=y
z=y}else z=y
z.h(0,this.gfs())
z=this.a.c
y=z.d
if(y==null){y=D.S()
z.d=y
z=y}else z=y
z.h(0,this.gft())
z=this.a.c
y=z.c
if(y==null){y=D.S()
z.c=y
z=y}else z=y
z.h(0,this.gfu())
z=this.a.d
y=z.f
if(y==null){y=D.S()
z.f=y
z=y}else z=y
z.h(0,this.gfo())
z=this.a.d
y=z.d
if(y==null){y=D.S()
z.d=y
z=y}else z=y
z.h(0,this.gfp())
z=this.a.e
y=z.b
if(y==null){y=D.S()
z.b=y
z=y}else z=y
z.h(0,this.ghk())
z=this.a.e
y=z.d
if(y==null){y=D.S()
z.d=y
z=y}else z=y
z.h(0,this.ghj())
z=this.a.e
y=z.c
if(y==null){y=D.S()
z.c=y
z=y}else z=y
z.h(0,this.ghi())
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.R()
z=-z}if(this.r){if(typeof y!=="number")return y.R()
y=-y}return new V.a9(z,y)},
jd:[function(a){a=H.k(H.e(a,"$isC"),"$isci")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfs",4,0,2],
je:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isci")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a9(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.ap(new V.a9(y.a,y.b).k(0,2).A(0,z.gav()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sa0(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sa0(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ap(new V.a9(x.a,x.b).k(0,2).A(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa3(0,-u*v+x)
this.b.sa0(0)
this.c.sa0(0)
y=y.S(0,a.z)
this.dx=this.ap(new V.a9(y.a,y.b).k(0,2).A(0,z.gav()))}this.aL()},"$1","gft",4,0,2],
jf:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sa0(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sa0(-y*10*z)
this.aL()}},"$1","gfu",4,0,2],
jb:[function(a){if(H.k(H.e(a,"$isC"),"$iseM").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfo",4,0,2],
jc:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isci")
if(!J.Q(this.d,a.x.b))return
z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ap(new V.a9(x.a,x.b).k(0,2).A(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa3(0,-u*v+x)
this.b.sa0(0)
this.c.sa0(0)
y=y.S(0,a.z)
this.dx=this.ap(new V.a9(y.a,y.b).k(0,2).A(0,z.gav()))
this.aL()},"$1","gfp",4,0,2],
jI:[function(a){H.e(a,"$isC")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghk",4,0,2],
jH:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isC"),"$isfl")
if(!this.cx)return
if(this.ch){z=a.d.S(0,a.y)
z=new V.a9(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.S(0,a.y)
z=this.ap(new V.a9(y.a,y.b).k(0,2).A(0,z.gav()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sa0(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sa0(-z*10*y)}else{z=a.c
y=a.d
x=y.S(0,a.y)
w=this.ap(new V.a9(x.a,x.b).k(0,2).A(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa3(0,-u*v+x)
this.b.sa0(0)
this.c.sa0(0)
y=y.S(0,a.z)
this.dx=this.ap(new V.a9(y.a,y.b).k(0,2).A(0,z.gav()))}this.aL()},"$1","ghj",4,0,2],
jG:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sa0(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sa0(-y*10*z)
this.aL()}},"$1","ghi",4,0,2],
aw:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.P()
if(z<y){this.dy=y
x=b.y
this.c.aH(0,x)
this.b.aH(0,x)
this.fr=V.dj(this.b.d).k(0,V.eQ(this.c.d))}return this.fr},
$isaj:1,
t:{
fJ:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.kS()
y=U.ej()
y.seB(0,!0)
y.sed(6.283185307179586)
y.sef(0)
y.sa3(0,0)
y.see(100)
y.sa0(0)
y.sdG(0.5)
z.b=y
x=z.gbl()
y.gB().h(0,x)
y=U.ej()
y.seB(0,!0)
y.sed(6.283185307179586)
y.sef(0)
y.sa3(0,0)
y.see(100)
y.sa0(0)
y.sdG(0.5)
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
y=new D.N("modifiers",v,w,z,[X.b6])
y.b=!0
z.T(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.N("invertX",y,!1,z,[P.U])
y.b=!0
z.T(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.N("invertY",y,!1,z,[P.U])
y.b=!0
z.T(y)}z.hQ(c)
return z}}}}],["","",,M,{"^":"",is:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aM:[function(a){var z
H.e(a,"$isC")
z=this.x
if(!(z==null))z.H(a)},function(){return this.aM(null)},"j8","$1","$0","gao",0,2,1],
jl:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aP
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gao(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.bf()
s.d=0
t.sa5(s)}s=t.ga5()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cB(a,b,this,[z])
z.b=!0
this.aM(z)},"$2","gfD",8,0,11],
jm:[function(a,b){var z,y,x,w,v,u
z=E.aP
H.u(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gao(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.ga5()==null){u=new D.bf()
u.d=0
v.sa5(u)}v.ga5().K(0,x)}}z=new D.cC(a,b,this,[z])
z.b=!0
this.aM(z)},"$2","gfE",8,0,11],
seu:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().K(0,this.gao())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gao())
z=new D.N("technique",y,this.c,this,[O.dv])
z.b=!0
this.aM(z)}},
gB:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z},
aY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=new E.f9(a,this)
z.b=!0
y=this.e
if(!(y==null))y.H(z)
a.ep(this.c)
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
if(typeof w!=="number")return H.q(w)
t=C.d.af(u.a*w)
if(typeof v!=="number")return H.q(v)
s=C.d.af(u.b*v)
r=C.d.af(u.c*w)
a.c=r
u=C.d.af(u.d*v)
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
m=V.aG(-n/(x/u),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y.a
a.cy.eo(m)
x=$.eX
if(x==null){x=V.eP(new V.a1(0,0,0),new V.I(0,1,0),new V.I(0,0,-1))
$.eX=x
l=x}else l=x
x=y.b
if(x!=null){k=x.aw(0,a,y)
if(k!=null)l=k.k(0,l)}a.db.eo(l)
y=this.c
if(y!=null)y.aH(0,a)
for(y=this.d.a,y=new J.aD(y,y.length,0,[H.z(y,0)]);y.E();)y.d.aH(0,a)
for(y=this.d.a,y=new J.aD(y,y.length,0,[H.z(y,0)]);y.E();)y.d.aY(a)
this.a.toString
a.cy.cI()
a.db.cI()
this.b.toString
a.en()},
$isp1:1}}],["","",,A,{"^":"",e6:{"^":"b;a,b,c"},hW:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
i4:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
i2:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ja:{"^":"f4;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0as,0ak,0bw,0dI,0bx,0by,0dJ,0dK,0bz,0bA,0dL,0dM,0bB,0bC,0dN,0dO,0bD,0dP,0dQ,0bE,0dR,0dS,0bF,0bG,0bH,0dT,0dU,0bI,0bJ,0dV,0dW,0bK,0dX,0ct,0dY,0cu,0dZ,0cv,0e_,0cw,0e0,0cz,0e1,0cA,a,b,0c,0d,0e,0f,0r,0x,0y",
eU:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.hn(z)
a2.hu(z)
a2.ho(z)
a2.hC(z)
a2.hD(z)
a2.hw(z)
a2.hH(z)
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
x.hr(z)
x.hm(z)
x.hp(z)
x.hs(z)
x.hA(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hy(z)
x.hz(z)}x.hv(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
x.hq(z)
x.hx(z)
x.hB(z)
x.hE(z)
x.hF(z)
x.hG(z)
x.ht(z)}r=z.a+="// === Main ===\n"
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
this.e=this.dd(s,35633)
this.f=this.dd(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dN(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.r(P.v("Failed to link shader: "+H.j(m)))}this.hd()
this.hf()
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
if(a2.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$isdA")
if(a2.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$isaT")
if(a2.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$isaT")
this.r1=H.c([],[A.aT])
y=a2.as
if(y>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$isR")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaT"))}}y=a2.a
if(y!==C.c){this.r2=H.k(this.y.q(0,"emissionClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.e:this.rx=H.k(this.y.q(0,"emissionTxt"),"$isas")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break
case C.h:this.ry=H.k(this.y.q(0,"emissionTxt"),"$isat")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$isR")
break}}y=a2.b
if(y!==C.c){this.x2=H.k(this.y.q(0,"ambientClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.e:this.y1=H.k(this.y.q(0,"ambientTxt"),"$isas")
this.as=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break
case C.h:this.y2=H.k(this.y.q(0,"ambientTxt"),"$isat")
this.as=H.k(this.y.q(0,"nullAmbientTxt"),"$isR")
break}}y=a2.c
if(y!==C.c){this.ak=H.k(this.y.q(0,"diffuseClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.e:this.bw=H.k(this.y.q(0,"diffuseTxt"),"$isas")
this.bx=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break
case C.h:this.dI=H.k(this.y.q(0,"diffuseTxt"),"$isat")
this.bx=H.k(this.y.q(0,"nullDiffuseTxt"),"$isR")
break}}y=a2.d
if(y!==C.c){this.by=H.k(this.y.q(0,"invDiffuseClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.e:this.dJ=H.k(this.y.q(0,"invDiffuseTxt"),"$isas")
this.bz=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break
case C.h:this.dK=H.k(this.y.q(0,"invDiffuseTxt"),"$isat")
this.bz=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a2.e
if(y!==C.c){this.bC=H.k(this.y.q(0,"shininess"),"$isa2")
this.bA=H.k(this.y.q(0,"specularClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.e:this.dL=H.k(this.y.q(0,"specularTxt"),"$isas")
this.bB=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break
case C.h:this.dM=H.k(this.y.q(0,"specularTxt"),"$isat")
this.bB=H.k(this.y.q(0,"nullSpecularTxt"),"$isR")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.e:this.dN=H.k(this.y.q(0,"bumpTxt"),"$isas")
this.bD=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break
case C.h:this.dO=H.k(this.y.q(0,"bumpTxt"),"$isat")
this.bD=H.k(this.y.q(0,"nullBumpTxt"),"$isR")
break}if(a2.dy){this.dP=H.k(this.y.q(0,"envSampler"),"$isat")
this.dQ=H.k(this.y.q(0,"nullEnvTxt"),"$isR")
y=a2.r
if(y!==C.c){this.bE=H.k(this.y.q(0,"reflectClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.e:this.dR=H.k(this.y.q(0,"reflectTxt"),"$isas")
this.bF=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break
case C.h:this.dS=H.k(this.y.q(0,"reflectTxt"),"$isat")
this.bF=H.k(this.y.q(0,"nullReflectTxt"),"$isR")
break}}y=a2.x
if(y!==C.c){this.bG=H.k(this.y.q(0,"refraction"),"$isa2")
this.bH=H.k(this.y.q(0,"refractClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.e:this.dT=H.k(this.y.q(0,"refractTxt"),"$isas")
this.bI=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break
case C.h:this.dU=H.k(this.y.q(0,"refractTxt"),"$isat")
this.bI=H.k(this.y.q(0,"nullRefractTxt"),"$isR")
break}}}y=a2.y
if(y!==C.c){this.bJ=H.k(this.y.q(0,"alpha"),"$isa2")
switch(y){case C.c:break
case C.i:break
case C.e:this.dV=H.k(this.y.q(0,"alphaTxt"),"$isas")
this.bK=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break
case C.h:this.dW=H.k(this.y.q(0,"alphaTxt"),"$isat")
this.bK=H.k(this.y.q(0,"nullAlphaTxt"),"$isR")
break}}this.ct=H.c([],[A.fy])
this.cu=H.c([],[A.fz])
this.cv=H.c([],[A.fA])
this.cw=H.c([],[A.fB])
this.cz=H.c([],[A.fC])
this.cA=H.c([],[A.fD])
if(a2.k2){y=a2.z
if(y>0){this.dX=H.e(this.y.q(0,"dirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.ct;(x&&C.a).h(x,new A.fy(l,k,j))}}y=a2.Q
if(y>0){this.dY=H.e(this.y.q(0,"pntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
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
x=this.cu;(x&&C.a).h(x,new A.fz(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dZ=H.e(this.y.q(0,"spotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
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
x=this.cv;(x&&C.a).h(x,new A.fA(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.e_=H.e(this.y.q(0,"txtDirLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isas")
x=this.cw;(x&&C.a).h(x,new A.fB(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.e0=H.e(this.y.q(0,"txtPntLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdA")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isR")
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
H.k(c,"$isat")
x=this.cz;(x&&C.a).h(x,new A.fC(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.e1=H.e(this.y.q(0,"txtSpotLightCount"),"$isR")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isP")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isP")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isP")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isP")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isP")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isR")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isP")
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
H.k(a1,"$isas")
x=this.cA;(x&&C.a).h(x,new A.fD(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ai:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eL(c)
b.a.uniform1i(b.d,0)}},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
j9:function(a,b){var z,y
z=a.ak
y=new A.ja(b,z)
y.eX(b,z)
y.eU(a,b)
return y}}},jd:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,as,ak,bw",
hn:function(a){var z,y,x
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
hu:function(a){var z
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
ho:function(a){var z
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
hC:function(a){var z,y
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
hD:function(a){var z,y
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
hw:function(a){var z
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
hH:function(a){var z
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
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hr:function(a){var z,y
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
hm:function(a){var z,y
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
hp:function(a){var z,y
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hs:function(a){var z,y
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hA:function(a){var z,y
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hv:function(a){var z,y
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
hy:function(a){var z,y
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hz:function(a){var z,y
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hq:function(a){var z,y
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
hx:function(a){var z,y
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
hB:function(a){var z,y
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
hE:function(a){var z,y,x
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
hF:function(a){var z,y,x
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
hG:function(a){var z,y,x
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
ht:function(a){var z
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
i:function(a){return this.ak}},fy:{"^":"b;a,b,c"},fB:{"^":"b;a,b,c,d,e,f,r,x"},fz:{"^":"b;a,b,c,d,e,f,r"},fC:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fA:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fD:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},f4:{"^":"d_;",
eX:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dd:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dN(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
hd:function(){var z,y,x,w,v,u
z=H.c([],[A.e6])
y=this.a
x=H.F(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.e6(y,v.name,u))}this.x=new A.hW(z)},
hf:function(){var z,y,x,w,v,u
z=H.c([],[A.ag])
y=this.a
x=H.F(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.i_(v.type,v.size,v.name,u))}this.y=new A.kD(z)},
aO:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.R(z,y,b,c)
else return A.dz(z,y,b,a,c)},
fh:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.as(z,y,b,c)
else return A.dz(z,y,b,a,c)},
fi:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.at(z,y,b,c)
else return A.dz(z,y,b,a,c)},
br:function(a,b){return new P.fS(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
i_:function(a,b,c,d){switch(a){case 5120:return this.aO(b,c,d)
case 5121:return this.aO(b,c,d)
case 5122:return this.aO(b,c,d)
case 5123:return this.aO(b,c,d)
case 5124:return this.aO(b,c,d)
case 5125:return this.aO(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.ky(this.a,this.r,c,d)
case 35665:return new A.P(this.a,this.r,c,d)
case 35666:return new A.kB(this.a,this.r,c,d)
case 35667:return new A.kz(this.a,this.r,c,d)
case 35668:return new A.kA(this.a,this.r,c,d)
case 35669:return new A.kC(this.a,this.r,c,d)
case 35674:return new A.kF(this.a,this.r,c,d)
case 35675:return new A.dA(this.a,this.r,c,d)
case 35676:return new A.aT(this.a,this.r,c,d)
case 35678:return this.fh(b,c,d)
case 35680:return this.fi(b,c,d)
case 35670:throw H.a(this.br("BOOL",c))
case 35671:throw H.a(this.br("BOOL_VEC2",c))
case 35672:throw H.a(this.br("BOOL_VEC3",c))
case 35673:throw H.a(this.br("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cw:{"^":"b;a,b",
i:function(a){return this.b}},ag:{"^":"b;"},kD:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
ib:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.ib("\n")}},R:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},kz:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kA:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kC:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},kx:{"^":"ag;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
dz:function(a,b,c,d,e){var z=new A.kx(a,b,c,e)
z.f=d
z.e=P.j_(d,0,!1,P.n)
return z}}},a2:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},ky:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},P:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},kB:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},kF:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dA:{"^":"ag;a,b,c,d",
am:function(a){var z=new Float32Array(H.by(H.u(a,"$isd",[P.p],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aT:{"^":"ag;a,b,c,d",
am:function(a){var z=new Float32Array(H.by(H.u(a,"$isd",[P.p],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},as:{"^":"ag;a,b,c,d",
eL:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},at:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
dQ:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.al,P.p,P.p]})
z=F.dr()
F.bZ(z,b,c,d,a,1,0,0,1)
F.bZ(z,b,c,d,a,0,1,0,3)
F.bZ(z,b,c,d,a,0,0,1,2)
F.bZ(z,b,c,d,a,-1,0,0,0)
F.bZ(z,b,c,d,a,0,-1,0,0)
F.bZ(z,b,c,d,a,0,0,-1,3)
z.ar()
return z},
cP:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bZ:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.al,P.p,P.p]})
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
j=F.dZ(d,e,new F.n5(z,F.cP(z.c),F.cP(z.d),k,l,c),b)
if(j!=null)a.b8(j)},
hu:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.p,args:[P.p]})
if(f<3)return
z=F.dr()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.al])
v=z.a
u=new V.I(0,0,y)
u=u.A(0,Math.sqrt(u.G(u)))
C.a.h(w,v.hL(new V.bP(a,-1,-1,-1),new V.bb(1,1,1,1),new V.a1(0,0,d),new V.I(0,0,y),new V.a_(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.q(p)
o=new V.I(r,q,y).A(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cm(new V.bP(a,-1,-1,-1),null,new V.bb(n,l,m,1),new V.a1(r*p,q*p,d),new V.I(0,0,y),new V.a_(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.hJ(w)
return z},
hs:function(a,b,c,d,e,f){return F.ns(!0,c,d,new F.nr(a,f),e)},
ns:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.dZ(c,e,new F.nu(d),null)
if(z==null)return
z.ar()
z.ce()
if(b)z.b8(F.hu(3,!1,!1,1,new F.nv(d),e))
z.b8(F.hu(1,!0,!1,-1,new F.nw(d),e))
return z},
o5:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.o6()
y=F.dQ(a,null,new F.o7(z,c),d)
y.ce()
return y},
hI:function(a,b,c,d){return F.ht(c,a,d,b,new F.o9())},
nN:function(a,b,c,d,e,f){return F.ht(d,a,e,b,new F.nO(f,c))},
ht:function(a,b,c,d,e){var z=F.dZ(a,b,new F.nt(H.l(e,{func:1,ret:V.a1,args:[P.p]}),d,b,c),null)
if(z==null)return
z.ar()
z.ce()
return z},
dZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.al,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.dr()
y=H.c([],[F.al])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cm(null,null,new V.bb(u,0,0,1),null,null,new V.a_(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cr(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cm(null,null,new V.bb(o,n,m,1),null,null,new V.a_(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cr(d))}}z.d.hK(a+1,b+1,y)
return z},
n5:{"^":"m:8;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cF(z.b,b).cF(z.d.cF(z.c,b),c)
a.sa3(0,new V.a1(y.a,y.b,y.c))
a.sev(y.A(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
a.sdD(new V.bP(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nr:{"^":"m:27;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
nu:{"^":"m:8;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.q(v)
y=-y*v
u=x*v
a.sa3(0,new V.a1(y,u,w))
u=new V.I(y,u,w)
a.sev(u.A(0,Math.sqrt(u.G(u))))
a.sdD(new V.bP(1-c,2+c,-1,-1))}},
nv:{"^":"m:33;a",
$1:function(a){return this.a.$2(a,1)}},
nw:{"^":"m:33;a",
$1:function(a){return this.a.$2(1-a,0)}},
o6:{"^":"m:27;",
$2:function(a,b){return 0}},
o7:{"^":"m:8;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.q(z)
y=a.f
x=new V.I(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.G(x))).k(0,this.b+z)
a.sa3(0,new V.a1(z.a,z.b,z.c))}},
o9:{"^":"m:25;",
$1:function(a){return new V.a1(Math.cos(a),Math.sin(a),0)}},
nO:{"^":"m:25;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a1(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
nt:{"^":"m:8;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e_(y.$1(z),x)
x=J.e_(y.$1(z+3.141592653589793/this.c),x).S(0,w)
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
a.sa3(0,w.D(0,new V.a1(y.a-x.a,y.b-x.b,y.c-x.c)))}},
aq:{"^":"b;0a,0b,0c,0d,0e",
aE:function(){if(!this.gb5()){C.a.K(this.a.a.d.b,this)
this.a.a.Z()}this.c7()
this.c8()
this.h0()},
cc:function(a){this.a=a
C.a.h(a.d.b,this)},
cd:function(a){this.b=a
C.a.h(a.d.c,this)},
hc:function(a){this.c=a
C.a.h(a.d.d,this)},
c7:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
c8:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
h0:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
fa:function(){var z,y,x,w,v
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
if(v.ec())return
return v.A(0,Math.sqrt(v.G(v)))},
fd:function(){var z,y,x,w,v
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
co:function(){if(this.d!=null)return!0
var z=this.fa()
if(z==null){z=this.fd()
if(z==null)return!1}this.d=z
this.a.a.Z()
return!0},
f9:function(){var z,y,x,w,v
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
if(v.ec())return
return v.A(0,Math.sqrt(v.G(v)))},
fc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=r.S(0,u).k(0,l).D(0,u).S(0,x)
z=new V.I(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.R(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.G(z)))
z=k.aD(m)
z=z.A(0,Math.sqrt(z.G(z))).aD(k)
m=z.A(0,Math.sqrt(z.G(z)))}return m},
cm:function(){if(this.e!=null)return!0
var z=this.f9()
if(z==null){z=this.fc()
if(z==null)return!1}this.e=z
this.a.a.Z()
return!0},
b6:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.R(0)
y=this.e
if(y!=null)this.e=y.R(0)
this.a.a.Z()},
ghV:function(a){if(J.Q(this.a,this.b))return!0
if(J.Q(this.b,this.c))return!0
if(J.Q(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y
if(this.gb5())return a+"disposed"
z=a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)+", "+C.b.ad(J.ac(this.c.e),0)+" {"
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
z.hc(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Z()
return z}}},
iw:{"^":"b;"},
k8:{"^":"iw;",
b7:function(a,b,c){var z,y
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
aE:function(){if(!this.gb5()){C.a.K(this.a.a.c.b,this)
this.a.a.Z()}this.c7()
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
gb5:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){if(this.gb5())return a+"disposed"
return a+C.b.ad(J.ac(this.a.e),0)+", "+C.b.ad(J.ac(this.b.e),0)},
N:function(){return this.C("")},
t:{
iR:function(a,b){var z,y,x
z=new F.dd()
y=a.a
if(y==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.v("May not create a line with vertices attached to different shapes."))
z.cc(a)
z.cd(b)
C.a.h(z.a.a.c.b,z)
z.a.a.Z()
return z}}},
iS:{"^":"b;"},
kw:{"^":"iS;",
b7:function(a,b,c){var z,y
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
dn:{"^":"b;0a",
aE:function(){var z=this.a
if(z!=null){C.a.K(z.a.b.b,this)
this.a.a.Z()}this.h_()},
h_:function(){var z=this.a
if(z!=null){C.a.K(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ad(J.ac(z.e),0)},
N:function(){return this.C("")}},
f5:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.S()
this.e=z}return z},
b8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hX())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.w()
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
if(!(t==null))t.H(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iR(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.w()
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
if(!(z==null))z.ae(0)},
ar:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ar()||!1
if(!this.a.ar())y=!1
z=this.e
if(!(z==null))z.ae(0)
return y},
fm:function(a,b,c,d,e){var z,y,x
H.u(d,"$isd",[F.al],"$asd")
H.u(e,"$isd",[P.n],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
if(a.b7(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
it:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.al],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.f(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.fm(a,v,y,u,t))b.b8(u)}this.a.w()
this.c.cM()
this.d.cM()
this.b.iN()
this.c.cN(new F.kw())
this.d.cN(new F.k8())
z=this.e
if(!(z==null))z.ae(0)},
hN:function(a){this.it(new F.l5(),new F.jq())},
ce:function(){return this.hN(null)},
b6:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.b6()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.seg(new V.I(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.I(w,v,z).A(0,Math.sqrt(w*w+v*v+z*z))
if(!J.Q(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.H(null)}}}}z=this.e
if(!(z==null))z.ae(0)},
hT:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aX()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$bT().a)!==0)++w
if((x&$.$get$bU().a)!==0)++w
if((x&$.$get$bw().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
v=b.gcZ(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ec])
for(r=0,q=0;q<w;++q){p=b.hP(q)
o=p.gcZ(p)
C.a.p(s,q,new Z.ec(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].io(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.u(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.by(t)),35044)
y.bindBuffer(34962,null)
i=new Z.ed(new Z.fO(34962,j),s,b)
i.b=H.c([],[Z.cA])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cA(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cA(1,h.length,f))}if(this.d.b.length!==0){x=P.n
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
C.a.h(h,g.e)}f=Z.dD(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cA(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.n(z,"\n")},
al:function(a){var z=this.e
if(!(z==null))z.H(a)},
Z:function(){return this.al(null)},
t:{
dr:function(){var z,y
z=new F.f5()
y=new F.l0(z)
y.b=!1
y.c=H.c([],[F.al])
z.a=y
y=new F.k2(z)
y.b=H.c([],[F.dn])
z.b=y
y=new F.k1(z)
y.b=H.c([],[F.dd])
z.c=y
y=new F.k0(z)
y.b=H.c([],[F.aq])
z.d=y
z.e=null
return z}}},
k0:{"^":"b;a,0b",
hJ:function(a){var z,y,x,w,v,u
H.u(a,"$isd",[F.al],"$asd")
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
hK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$isd",[F.al],"$asd")
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
cN:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b7(0,v,t)){v.aE()
break}}}}},
cM:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.ghV(x)
if(y)x.aE()}},
ar:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].co())x=!1
return x},
cn:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cm())x=!1
return x},
b6:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].b6()},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
k1:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cN:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b7(0,v,t)){v.aE()
break}}}}},
cM:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.Q(x.a,x.b)
if(y)x.aE()}},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.n(z,"\n")},
N:function(){return this.C("")}},
k2:{"^":"b;a,0b",
gm:function(a){return this.b.length},
iN:function(){var z,y
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
al:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cr:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cm(this.cx,x,u,z,y,w,v,a,t)},
hX:function(){return this.cr(null)},
sa3:function(a,b){var z
if(!J.Q(this.f,b)){this.f=b
z=this.a
if(z!=null)z.Z()}},
seg:function(a){var z
a=a.A(0,Math.sqrt(a.G(a)))
if(!J.Q(this.r,a)){this.r=a
z=this.a
if(z!=null)z.Z()}},
sev:function(a){var z
if(!J.Q(this.z,a)){this.z=a
z=this.a
if(z!=null)z.Z()}},
sdD:function(a){var z
if(!J.Q(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.Z()}},
io:function(a){var z,y
z=J.K(a)
if(z.v(a,$.$get$aX())){z=this.f
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aW())){z=this.r
y=[P.p]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aV())){z=this.x
y=[P.p]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aY())){z=this.y
y=[P.p]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.v(a,$.$get$aZ())){z=this.z
y=[P.p]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bT())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bU())){z=this.Q
y=[P.p]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.v(a,$.$get$bw()))return H.c([this.ch],[P.p])
else if(z.v(a,$.$get$aU())){z=this.cx
y=[P.p]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.p])},
co:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.J(0,new F.la(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
cm:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.I(0,0,0)
this.d.J(0,new F.l9(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.Z()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var z,y,x
z=H.c([],[P.h])
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
C.a.h(z,V.O(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.n(z,", ")
return a+"{"+x+"}"},
N:function(){return this.C("")},
t:{
cm:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.al()
y=new F.l8(z)
y.b=H.c([],[F.dn])
z.b=y
y=new F.l4(z)
x=[F.dd]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.l1(z)
x=[F.aq]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fL()
z.e=0
y=$.$get$aX()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aW().a)!==0?e:null
z.x=(x&$.$get$aV().a)!==0?b:null
z.y=(x&$.$get$aY().a)!==0?f:null
z.z=(x&$.$get$aZ().a)!==0?g:null
z.Q=(x&$.$get$fM().a)!==0?c:null
z.ch=(x&$.$get$bw().a)!==0?i:0
z.cx=(x&$.$get$aU().a)!==0?a:null
return z}}},
la:{"^":"m:6;a",
$1:function(a){var z,y
H.e(a,"$isaq")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
l9:{"^":"m:6;a",
$1:function(a){var z,y
H.e(a,"$isaq")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
l0:{"^":"b;a,0b,0c",
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
this.a.Z()
return!0},
hM:function(a,b,c,d,e,f,g,h,i){var z=F.cm(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
hL:function(a,b,c,d,e,f){return this.hM(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
ar:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].co()
return!0},
cn:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cm()
return!0},
hU:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.H(null)}}}}return!0},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
this.w()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
l1:{"^":"b;a,0b,0c,0d",
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
C.a.J(this.c,new F.l2(this,b))
C.a.J(this.d,new F.l3(this,b))},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}},
l2:{"^":"m:6;a,b",
$1:function(a){H.e(a,"$isaq")
if(!J.Q(a.a,this.a))this.b.$1(a)}},
l3:{"^":"m:6;a,b",
$1:function(a){var z
H.e(a,"$isaq")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},
l4:{"^":"b;a,0b,0c",
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
l6:{"^":"b;"},
l5:{"^":"l6;",
b7:function(a,b,c){return J.Q(b.f,c.f)}},
l7:{"^":"b;"},
jq:{"^":"l7;",
b8:function(a){var z,y,x,w
H.u(a,"$isd",[F.al],"$asd")
z=new V.I(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.I(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.G(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].seg(z)
return}},
l8:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].C(a))
return C.a.n(z,"\n")},
N:function(){return this.C("")}}}],["","",,O,{"^":"",j8:{"^":"dv;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.S()
this.dy=z}return z},
a1:[function(a){var z
H.e(a,"$isC")
z=this.dy
if(!(z==null))z.H(a)},function(){return this.a1(null)},"fC","$1","$0","gbp",0,2,1],
h4:[function(a){H.e(a,"$isC")
this.a=null
this.a1(a)},function(){return this.h4(null)},"jF","$1","$0","gh3",0,2,1],
ji:[function(a,b){var z=V.ar
z=new D.cB(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a1(z)},"$2","gfz",8,0,21],
jj:[function(a,b){var z=V.ar
z=new D.cC(a,H.u(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a1(z)},"$2","gfA",8,0,21],
d9:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
z=this.dx
y=C.f.a6(z.e.length+3,4)*4
x=C.f.a6(z.f.length+3,4)*4
w=C.f.a6(z.r.length+3,4)*4
v=C.f.a6(z.x.length+3,4)*4
u=C.f.a6(z.y.length+3,4)*4
t=C.f.a6(z.z.length+3,4)*4
s=C.f.a6(this.e.a.length+3,4)*4
z=this.b!=null
r=this.c!=null
q=this.d!=null
p=this.f.c
o=this.r.c
n=this.x.c
m=this.y.c
l=this.z.c
k=this.Q.c
j=this.cx.c
i=this.cy.c
h=this.db.c
g="MaterialLight_"+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+"_"
g+=z?"1":"0"
g+=r?"1":"0"
g=g+(q?"1":"0")+"_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
f=j!==C.c||i!==C.c
e=o!==C.c||n!==C.c||m!==C.c||l!==C.c
d=l===C.c
c=!d||f
b=n!==C.c||m!==C.c||!d||k!==C.c||f
d=k===C.c
a=!d
a0=p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e
a1=p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h
a2=x+u+v+w+t>0
a3=s>0
a4=b||!d||c
a5=z&&a0
a6=r&&a1
a7=$.$get$aX()
if(b){z=$.$get$aW()
a7=new Z.bv(a7.a|z.a)}if(a){z=$.$get$aV()
a7=new Z.bv(a7.a|z.a)}if(a0){z=$.$get$aY()
a7=new Z.bv(a7.a|z.a)}if(a1){z=$.$get$aZ()
a7=new Z.bv(a7.a|z.a)}if(a3){z=$.$get$aU()
a7=new Z.bv(a7.a|z.a)}return new A.jd(p,o,n,m,l,k,j,i,h,y,x,w,v,u,t,y+x+w+v+u+t,f,f,a2,a4,!0,!1,!1,e,a2,c,b,a,a0,a1,a3,a5,a6,q,s,g.charCodeAt(0)==0?g:g,a7)},
W:function(a,b){H.u(a,"$isd",[T.dw],"$asd")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
aH:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aD(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
x=new V.I(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cQ(x)}}},
iP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.d9()
y=a.fr.j(0,z.ak)
if(y==null){y=A.j9(z,a.a)
x=y.b
if(x.length===0)H.r(P.v("May not cache a shader with no name."))
if(a.fr.bu(0,x))H.r(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bw
z=b.e
if(!(z instanceof Z.ed)){b.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)b.d.ar()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cn()
t.a.cn()
t=t.e
if(!(t==null))t.ae(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.hU()
s=s.e
if(!(s==null))s.ae(0)}q=b.d.hT(new Z.lb(a.a),v)
q.aV($.$get$aX()).e=this.a.Q.c
if(z)q.aV($.$get$aW()).e=this.a.cx.c
if(u)q.aV($.$get$aV()).e=this.a.ch.c
if(w.rx)q.aV($.$get$aY()).e=this.a.cy.c
if(t)q.aV($.$get$aZ()).e=this.a.db.c
if(w.x1)q.aV($.$get$aU()).e=this.a.dx.c
b.e=q}z=T.dw
p=H.c([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.i4()
if(w.fx){u=this.a
t=a.dx
t=t.ga_(t)
u=u.dy
u.toString
u.am(t.ag(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.ga_(t)
s=a.dx
s=t.k(0,s.ga_(s))
a.cx=s
t=s}u=u.fr
u.toString
u.am(t.ag(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.giK()
s=a.dx
s=t.k(0,s.ga_(s))
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
u.am(t.ag(0,!0))}if(w.as>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.p],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.f(s,n)
s=s[n]
t.toString
H.e(s,"$isar")
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
case C.e:this.W(p,this.f.d)
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
u.aa(u.ry,u.x1,t)
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
case C.e:this.W(p,this.r.d)
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
case C.h:this.W(p,this.r.e)
u=this.a
t=this.r.e
u.aa(u.y2,u.as,t)
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
case C.e:this.W(p,this.x.d)
u=this.a
t=this.x.d
u.ai(u.bw,u.bx,t)
t=this.a
u=this.x.f
t=t.ak
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.x.e)
u=this.a
t=this.x.e
u.aa(u.dI,u.bx,t)
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
u=u.by
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.e:this.W(p,this.y.d)
u=this.a
t=this.y.d
u.ai(u.dJ,u.bz,t)
t=this.a
u=this.y.f
t=t.by
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.W(p,this.y.e)
u=this.a
t=this.y.e
u.aa(u.dK,u.bz,t)
t=this.a
u=this.y.f
t=t.by
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bA
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bC
t.a.uniform1f(t.d,r)
break
case C.e:this.W(p,this.z.d)
u=this.a
t=this.z.d
u.ai(u.dL,u.bB,t)
t=this.a
u=this.z.f
t=t.bA
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bC
u.a.uniform1f(u.d,r)
break
case C.h:this.W(p,this.z.e)
u=this.a
t=this.z.e
u.aa(u.dM,u.bB,t)
t=this.a
u=this.z.f
t=t.bA
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bC
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dX
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.ct
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.cQ(i.a)
r=s.a
g=s.b
f=s.c
f=s.A(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dY
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cu
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbb(i)
r=h.b
g=s.gcT(s)
f=s.gcU(s)
s=s.gcV(s)
r.a.uniform3f(r.d,g,f,s)
s=l.bg(i.gbb(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga8(i)
f=h.d
g=s.gbN()
r=s.gbh()
s=s.gbs()
f.a.uniform3f(f.d,g,r,s)
s=i.gcf()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gcg()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gci()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dZ
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cv
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbb(i)
r=h.b
g=s.gcT(s)
f=s.gcU(s)
s=s.gcV(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcs(i).jO()
f=h.c
g=s.gaS(s)
r=s.gaT(s)
s=s.gaU()
f.a.uniform3f(f.d,g,r,s)
s=l.bg(i.gbb(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga8(i)
r=h.e
g=s.gbN()
f=s.gbh()
s=s.gbs()
r.a.uniform3f(r.d,g,f,s)
s=i.gjL()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gjJ()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gcf()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gcg()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gci()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.e_
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.cw
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gbd()
H.u(p,"$isd",s,"$asd")
if(!C.a.U(p,r)){r.sbn(p.length)
C.a.h(p,r)}r=i.gcs(i)
g=h.d
f=r.gaS(r)
e=r.gaT(r)
r=r.gaU()
g.a.uniform3f(g.d,f,e,r)
r=i.gj5()
e=h.b
f=r.gaS(r)
g=r.gaT(r)
r=r.gaU()
e.a.uniform3f(e.d,f,g,r)
r=i.gbc(i)
g=h.c
f=r.gaS(r)
e=r.gaT(r)
r=r.gaU()
g.a.uniform3f(g.d,f,e,r)
r=l.cQ(i.gcs(i))
e=r.a
f=r.b
g=r.c
g=r.A(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga8(i)
f=h.f
e=g.gbN()
r=g.gbh()
g=g.gbs()
f.a.uniform3f(f.d,e,r,g)
g=i.gbd()
r=g.gcG(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gfn()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gbn())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.e0
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.y,t=u.length,s=[P.p],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.cz
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gbd()
H.u(p,"$isd",r,"$asd")
if(!C.a.U(p,g)){g.sbn(p.length)
C.a.h(p,g)}d=l.k(0,i.ga_(i))
g=i.ga_(i).bg(new V.a1(0,0,0))
f=h.b
e=g.gcT(g)
c=g.gcU(g)
g=g.gcV(g)
f.a.uniform3f(f.d,e,c,g)
g=d.bg(new V.a1(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.eb(0)
c=h.d
m=new Float32Array(H.by(H.u(new V.bN(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ag(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga8(i)
g=h.e
e=c.gbN()
f=c.gbh()
c=c.gbs()
g.a.uniform3f(g.d,e,f,c)
c=i.gbd()
g=c.gcG(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gcG(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gjM(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gcf()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcg()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gci()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.e1
u.a.uniform1i(u.d,o)
u=a.db
l=u.ga_(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cA
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gbd()
H.u(p,"$isd",z,"$asd")
if(!C.a.U(p,s)){s.sbn(p.length)
C.a.h(p,s)}s=i.gbb(i)
r=h.b
g=s.gcT(s)
f=s.gcU(s)
s=s.gcV(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gcs(i)
f=h.c
g=s.gaS(s)
r=s.gaT(s)
s=s.gaU()
f.a.uniform3f(f.d,g,r,s)
s=i.gj5()
r=h.d
g=s.gaS(s)
f=s.gaT(s)
s=s.gaU()
r.a.uniform3f(r.d,g,f,s)
s=i.gbc(i)
f=h.e
g=s.gaS(s)
r=s.gaT(s)
s=s.gaU()
f.a.uniform3f(f.d,g,r,s)
s=l.bg(i.gbb(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gbd()
r=s.gcG(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gfn()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gbn())
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga8(i)
r=h.y
g=s.gbN()
f=s.gbh()
s=s.gbs()
r.a.uniform3f(r.d,g,f,s)
s=i.gjU()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjV()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gcf()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gcg()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gci()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.e:this.W(p,this.Q.d)
z=this.a
u=this.Q.d
z.ai(z.dN,z.bD,u)
break
case C.h:this.W(p,this.Q.e)
z=this.a
u=this.Q.e
z.aa(z.dO,z.bD,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.ga_(u).eb(0)
a.Q=u}z=z.id
z.toString
z.am(u.ag(0,!0))}if(w.dy){this.W(p,this.ch)
z=this.a
u=this.ch
z.aa(z.dP,z.dQ,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bE
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.e:this.W(p,this.cx.d)
z=this.a
u=this.cx.d
z.ai(z.dR,z.bF,u)
u=this.a
z=this.cx.f
u=u.bE
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.W(p,this.cx.e)
z=this.a
u=this.cx.e
z.aa(z.dS,z.bF,u)
u=this.a
z=this.cx.f
u=u.bE
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bH
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bG
u.a.uniform1f(u.d,s)
break
case C.e:this.W(p,this.cy.d)
z=this.a
u=this.cy.d
z.ai(z.dT,z.bI,u)
u=this.a
z=this.cy.f
u=u.bH
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bG
z.a.uniform1f(z.d,s)
break
case C.h:this.W(p,this.cy.e)
z=this.a
u=this.cy.e
z.aa(z.dU,z.bI,u)
u=this.a
z=this.cy.f
u=u.bH
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bG
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bJ
z.a.uniform1f(z.d,t)
break
case C.e:this.W(p,this.db.d)
z=this.a
t=this.db.d
z.ai(z.dV,z.bK,t)
t=this.a
z=this.db.f
t=t.bJ
t.a.uniform1f(t.d,z)
break
case C.h:this.W(p,this.db.e)
z=this.a
t=this.db.e
z.aa(z.dW,z.bK,t)
t=this.a
z=this.db.f
t=t.bJ
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.cj(a)
z.aY(a)
z.j4(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.i2()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d9().ak}},jb:{"^":"dh;0f,a,b,0c,0d,0e"},dh:{"^":"b;",
a1:[function(a){this.a.a1(H.e(a,"$isC"))},function(){return this.a1(null)},"fC","$1","$0","gbp",0,2,1],
b0:["eR",function(){}],
ha:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gB().K(0,this.gbp())
y=this.d
this.d=a
if(a!=null)a.gB().h(0,this.gbp())
z=new D.N(this.b+".texture2D",y,this.d,this,[T.ff])
z.b=!0
this.a.a1(z)}},
hb:function(a){}},jc:{"^":"dh;a,b,0c,0d,0e"},bi:{"^":"dh;0f,a,b,0c,0d,0e",
dn:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.N(this.b+".color",z,a,this,[V.a3])
y.b=!0
this.a.a1(y)}},
b0:["bT",function(){this.eR()
this.dn(new V.a3(1,1,1))}],
sa8:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.b0()
z=this.a
z.a=null
z.a1(null)}this.dn(b)}},je:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
h9:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.a1(z)}},
b0:function(){this.bT()
this.h9(1)}},jf:{"^":"bi;0ch,0f,a,b,0c,0d,0e",
c9:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.a1(z)}},
b0:function(){this.bT()
this.c9(100)}},dv:{"^":"b;"}}],["","",,T,{"^":"",dw:{"^":"d_;"},ff:{"^":"dw;"},kh:{"^":"ff;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.S()
this.y=z}return z}},ki:{"^":"b;a,0b,0c,0d,0e",
ir:function(a,b,c,d,e){var z,y,x,w
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
w=new T.kh()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ae
W.a5(x,"load",H.l(new T.kj(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
iq:function(a,b){return this.ir(a,!1,!1,!1,b)},
h5:function(a,b,c){var z,y,x,w
b=V.dW(b,2)
z=V.dW(a.width,2)
y=V.dW(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d4(null,null)
x.width=z
x.height=y
w=H.e(C.l.eF(x,"2d"),"$iseg")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nq(w.getImageData(0,0,x.width,x.height))}}},kj:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.h5(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.a4.iY(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.i3()}++x.e}}}],["","",,V,{"^":"",bF:{"^":"b;",
aX:function(a,b){return!0},
i:function(a){return"all"},
$isaQ:1},aQ:{"^":"b;"},eO:{"^":"b;",
aX:["eQ",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].aX(0,b))return!0
return!1}],
i:["d_",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaQ:1},ay:{"^":"eO;0a",
aX:function(a,b){return!this.eQ(0,b)},
i:function(a){return"!["+this.d_(0)+"]"}},jK:{"^":"b;0a,0b",
aX:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bR(this.a)
y=H.bR(this.b)
return z+".."+y},
$isaQ:1,
t:{
X:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.F(a,0)
y=C.b.F(b,0)
x=new V.jK()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jZ:{"^":"b;0a",
eW:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.b5(0,0,[P.n,P.U])
for(y=new H.df(a,a.gm(a),0,[H.am(a,"y",0)]);y.E();)z.p(0,y.d,!0)
this.a=z},
aX:function(a,b){return this.a.bu(0,b)},
i:function(a){var z=this.a
return P.cj(z.ga7(z),0,null)},
$isaQ:1,
t:{
x:function(a){var z=new V.jZ()
z.eW(a)
return z}}},f7:{"^":"b;a,b,0c,0d",
giu:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fm(this.a.l(0,b))
w.a=H.c([],[V.aQ])
w.c=!1
C.a.h(this.c,w)
return w},
i6:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.aX(0,a))return w}return},
i:function(a){return this.b}},fj:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.dY(this.b,"\n","\\n")
y=H.dY(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fk:{"^":"b;a,b,0c",
aG:function(a,b,c){var z,y,x
H.u(c,"$isd",[P.h],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.B)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},kr:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.f7(this,b)
z.c=H.c([],[V.fm])
this.a.p(0,b,z)}return z},
O:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.fk(this,a)
y=P.h
z.c=new H.b5(0,0,[y,y])
this.b.p(0,a,z)}return z},
ey:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fj])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.i6(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cj(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.giu(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cj(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fj(o==null?p.b:o,q,t)}++t}}},
t:{
cI:function(){var z,y
z=new V.kr()
y=P.h
z.a=new H.b5(0,0,[y,V.f7])
z.b=new H.b5(0,0,[y,V.fk])
return z}}},fm:{"^":"eO;b,0c,0a",
i:function(a){return this.b.b+": "+this.d_(0)}}}],["","",,X,{"^":"",ef:{"^":"b;",$isaR:1},iB:{"^":"fc;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.S()
this.x=z}return z}},jt:{"^":"b;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.S()
this.f=z}return z},
b_:[function(a){var z
H.e(a,"$isC")
z=this.f
if(!(z==null))z.H(a)},function(){return this.b_(null)},"j9","$1","$0","gd2",0,2,1],
sac:function(a){var z,y
if(!J.Q(this.b,a)){z=this.b
if(z!=null)z.gB().K(0,this.gd2())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd2())
z=new D.N("mover",y,this.b,this,[U.aj])
z.b=!0
this.b_(z)}},
$isaR:1,
$isef:1},fc:{"^":"b;"}}],["","",,V,{"^":"",
o3:function(a){P.kq(C.M,new V.o4(a))},
b2:{"^":"b;",
bk:function(a){this.b=new P.iE(C.N)
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
s=this.b.fg(u,0,u.length)
r=s==null?u:s
C.L.eJ(t,H.dY(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gau(this.d),t)}},
ek:function(a,b){var z,y,x,w
H.u(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bd]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bv()
this.c=y}for(y=y.ey(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)this.bM(y[w])}},
o4:{"^":"m:53;a",
$1:function(a){H.e(a,"$isbs")
P.dX(C.d.ex(this.a.gic(),2)+" fps")}},
ig:{"^":"b2;a,0b,0c,0d",
bM:function(a){switch(a.a){case"Class":this.L(a.b,"#551")
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
bv:function(){var z,y,x,w
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
x=new V.ay()
w=[V.aQ]
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
x=new V.ay()
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
iC:{"^":"b2;a,0b,0c,0d",
bM:function(a){switch(a.a){case"Builtin":this.L(a.b,"#411")
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
bv:function(){var z,y,x,w
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
x=new V.ay()
w=[V.aQ]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"Preprocess")
y=new V.ay()
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
iD:{"^":"b2;a,0b,0c,0d",
bM:function(a){switch(a.a){case"Attr":this.L(a.b,"#911")
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
bv:function(){var z,y,x
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
x=new V.ay()
x.a=H.c([],[V.aQ])
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
jv:{"^":"b2;a,0b,0c,0d",
ek:function(a,b){H.u(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bd]])
this.L(C.a.n(b,"\n"),"#111")},
bM:function(a){},
bv:function(){return}},
jI:{"^":"b;a,b,0c",
dw:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fG().gcL().j(0,H.j(z))
if(y==null)if(d){c.$0()
this.du(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e2(this.c).h(0,v)
t=W.iH("radio")
t.checked=x
t.name=z
z=W.ae
W.a5(t,"change",H.l(new V.jJ(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.e2(this.c).h(0,w.createElement("br"))},
b3:function(a,b,c){return this.dw(a,b,c,!1)},
du:function(a){var z,y,x,w,v
z=P.fG()
y=P.h
x=P.iY(z.gcL(),y,y)
x.p(0,this.a,a)
w=z.eq(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.mi([],[]).cR(""),"",v)}},
jJ:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.du(this.d)}}},
k3:{"^":"b;0a,0b",
eY:function(a,b){var z,y,x,w,v,u,t
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
t=W.ae
W.a5(z,"scroll",H.l(new V.k6(x),{func:1,ret:-1,args:[t]}),!1,t)},
dB:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$isd",[P.h],"$asd")
this.he()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ey(C.a.il(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hG(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.co(C.A,s,C.k,!1)
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
eE:function(a){var z,y,x,w
z=new V.ig("dart")
z.bk("dart")
y=new V.iC("glsl")
y.bk("glsl")
x=new V.iD("html")
x.bk("html")
w=C.a.i7(H.c([z,y,x],[V.b2]),new V.k7(a))
if(w!=null)return w
z=new V.jv("plain")
z.bk("plain")
return z},
dz:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.u(a2,"$isd",[P.h],"$asd")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c4(w).a4(w,"+")){C.a.p(a2,x,C.b.an(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a4(w,"-")){C.a.p(a2,x,C.b.an(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eE(a0)
v.ek(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.co(C.A,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e4(null)
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
for(b=C.a.gY(w);b.E();)h.appendChild(b.gM(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hI:function(a){var z,y,x,w,v,u,t
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
x=H.e(w.insertCell(-1),"$isdu").style
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
t=H.e(w.insertCell(-1),"$isdu")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
he:function(){var z,y,x,w
if(this.b!=null)return
z=V.cI()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.ay()
w=[V.aQ]
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
x=new V.ay()
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
x=new V.ay()
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
y=new V.ay()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").n(0,"LinkTail")
y=new V.ay()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bF())
x=z.l(0,"Other").n(0,"Other")
y=new V.ay()
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
k4:function(a,b){var z=new V.k3()
z.eY(a,!0)
return z}}},
k6:{"^":"m:13;a",
$1:function(a){P.fh(C.q,new V.k5(this.a))}},
k5:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.d.af(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
k7:{"^":"m:54;a",
$1:function(a){return H.e(a,"$isb2").a===this.a}}}],["","",,K,{"^":"",
hC:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.k4("Test 026",!0)
y=W.d4(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.dB(H.c(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture metrix is updated using the pre-update mathods. ","Use Ctrl plus the mouse to move the center object."],x))
z.hI(H.c(["shapes"],x))
z.dB(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.ko(w,!0,!0,!0,!1)
u=D.et(null,null)
u.sac(U.c9(V.eR(0.3,0.4,1,null)))
t=D.et(null,null)
t.sac(U.c9(V.eR(-0.3,-0.4,-1,null)))
t.sa8(0,new V.a3(0.125,0.125,0.125))
s=new O.j8()
r=O.d5(V.ar)
s.e=r
r.bj(s.gfz(),s.gfA())
r=new O.bi(s,"emission")
r.c=C.c
r.f=new V.a3(0,0,0)
s.f=r
r=new O.bi(s,"ambient")
r.c=C.c
r.f=new V.a3(0,0,0)
s.r=r
r=new O.bi(s,"diffuse")
r.c=C.c
r.f=new V.a3(0,0,0)
s.x=r
r=new O.bi(s,"invDiffuse")
r.c=C.c
r.f=new V.a3(0,0,0)
s.y=r
r=new O.jf(s,"specular")
r.c=C.c
r.f=new V.a3(0,0,0)
r.ch=100
s.z=r
r=new O.jc(s,"bump")
r.c=C.c
s.Q=r
s.ch=null
r=new O.bi(s,"reflect")
r.c=C.c
r.f=new V.a3(0,0,0)
s.cx=r
r=new O.je(s,"refract")
r.c=C.c
r.f=new V.a3(0,0,0)
r.ch=1
s.cy=r
r=new O.jb(s,"alpha")
r.c=C.c
r.f=1
s.db=r
r=new D.iQ()
r.bU(D.a7)
r.e=H.c([],[D.cx])
r.f=H.c([],[D.jw])
r.r=H.c([],[D.k9])
r.x=H.c([],[D.kk])
r.y=H.c([],[D.kl])
r.z=H.c([],[D.km])
r.Q=null
r.ch=null
r.cY(r.gfw(),r.gfT(),r.gfV())
s.dx=r
q=r.Q
if(q==null){q=D.S()
r.Q=q
r=q}else r=q
r.h(0,s.gh3())
r=s.dx
q=r.ch
if(q==null){q=D.S()
r.ch=q
r=q}else r=q
r.h(0,s.gbp())
s.dy=null
s.dx.h(0,u)
s.dx.h(0,t)
s.f.sa8(0,new V.a3(0,0,0))
r=s.r
r.sa8(0,new V.a3(0.1,0.1,0.1))
r=s.x
r.sa8(0,new V.a3(0.8,0.8,0.8))
r=s.z
r.sa8(0,new V.a3(0.2,0.2,0.2))
r=s.z
if(r.c===C.c){r.c=C.i
r.bT()
r.c9(100)
q=r.a
q.a=null
q.a1(null)}r.c9(100)
r=s.x
q=v.f.iq("../resources/Test.png",!0)
p=r.c
if(p!==C.e){if(p===C.c)r.b0()
r.c=C.e
r.hb(null)
p=r.a
p.a=null
p.a1(null)}r.ha(q)
o=E.ey(null,!0,null,"",null,null)
o.sac(U.fJ(!1,!0,v.r,!1,!1,!1,null,!1))
o.sah(0,F.hI(30,1,15,0.5))
n=E.ey(null,!0,null,"",null,null)
n.sac(U.c9(V.aG(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
r=F.dQ(1,null,null,1)
r.b6()
n.sah(0,r)
m=new U.eB()
m.bU(U.aj)
m.bj(m.gfv(),m.gfU())
m.e=null
m.f=V.ch()
m.r=0
m.h(0,U.fJ(!1,!1,v.r,!1,!1,!1,null,!1))
m.h(0,U.c9(V.dj(3.141592653589793)))
m.h(0,U.c9(V.aG(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=U.f2(0.5,0.7,0.3,0,0,0)
k=U.f2(0,0.1,0,0,0,0)
r=new M.is()
q=O.d5(E.aP)
r.d=q
q.bj(r.gfD(),r.gfE())
r.e=null
r.f=null
r.r=null
r.x=null
j=new X.jt()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.sac(null)
q=j.c
if(!$.o.$2(q,1.0471975511965976)){i=j.c
j.c=1.0471975511965976
q=new D.N("fov",i,1.0471975511965976,j,[P.p])
q.b=!0
j.b_(q)}q=j.d
if(!$.o.$2(q,0.1)){i=j.d
j.d=0.1
q=new D.N("near",i,0.1,j,[P.p])
q.b=!0
j.b_(q)}q=j.e
if(!$.o.$2(q,2000)){i=j.e
j.e=2000
q=new D.N("far",i,2000,j,[P.p])
q.b=!0
j.b_(q)}q=r.a
if(q!==j){if(q!=null)q.gB().K(0,r.gao())
i=r.a
r.a=j
j.gB().h(0,r.gao())
q=new D.N("camera",i,r.a,r,[X.ef])
q.b=!0
r.aM(q)}h=new X.iB()
q=new V.bb(0,0,0,1)
h.a=q
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
q=V.f0(0,0,1,1)
h.r=q
q=r.b
if(q!==h){if(q!=null)q.gB().K(0,r.gao())
i=r.b
r.b=h
h.gB().h(0,r.gao())
q=new D.N("target",i,r.b,r,[X.fc])
q.b=!0
r.aM(q)}r.seu(null)
r.seu(s)
r.d.h(0,o)
r.d.h(0,n)
r.a.sac(m)
q=r.e
if(q==null){q=D.S()
r.e=q}q.h(0,new K.nQ(s,l,k))
q=v.d
if(q!==r){if(q!=null)q.gB().K(0,v.gd0())
v.d=r
r.gB().h(0,v.gd0())
v.f0()}r=new V.jI("shapes",!0)
x=x.getElementById("shapes")
r.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
r.b3(0,"Cube",new K.nR(o))
r.b3(0,"Cylinder",new K.nS(o))
r.b3(0,"Cone",new K.nT(o))
r.b3(0,"Sphere",new K.nU(o))
r.dw(0,"Toroid",new K.nV(o),!0)
r.b3(0,"Knot",new K.nW(o))
x=v.z
if(x==null){x=D.S()
v.z=x}r={func:1,ret:-1,args:[D.C]}
q=H.l(new K.nX(z,s),r)
p=x.b
if(p==null){r=H.c([],[r])
x.b=r
x=r}else x=p
C.a.h(x,q)
V.o3(v)},
nQ:{"^":"m:5;a,b,c",
$1:function(a){var z,y,x,w,v,u,t
z=H.k(H.e(a,"$isC"),"$isf9").c
y=this.a
x=this.b.aw(0,z,null)
if(!J.Q(y.d,x)){w=y.d
v=w==null
u=x==null
if(!(!v&&u))v=v&&!u
else v=!0
if(v)y.a=null
y.d=x
x=new D.N("colorMatrix",w,x,y,[V.ar])
x.b=!0
y.a1(x)}t=V.jh(this.c.aw(0,z,null))
if(!J.Q(y.b,t)){x=y.b
w=x==null&&!0
if(w)y.a=null
y.b=t
x=new D.N("texture2DMatrix",x,t,y,[V.bN])
x.b=!0
y.a1(x)}}},
nR:{"^":"m:0;a",
$0:function(){this.a.sah(0,F.dQ(1,null,null,1))}},
nS:{"^":"m:0;a",
$0:function(){this.a.sah(0,F.hs(1,!0,!0,1,40,1))}},
nT:{"^":"m:0;a",
$0:function(){this.a.sah(0,F.hs(1,!0,!1,1,40,0))}},
nU:{"^":"m:0;a",
$0:function(){this.a.sah(0,F.o5(6,null,1,6))}},
nV:{"^":"m:0;a",
$0:function(){this.a.sah(0,F.hI(30,1,15,0.5))}},
nW:{"^":"m:0;a",
$0:function(){this.a.sah(0,F.nN(120,1,2,12,0.3,3))}},
nX:{"^":"m:5;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isC")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dz("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dz("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eG.prototype
return J.eF.prototype}if(typeof a=="string")return J.ce.prototype
if(a==null)return J.eH.prototype
if(typeof a=="boolean")return J.iL.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.aL=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.c3=function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.nB=function(a){if(typeof a=="number")return J.cd.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cl.prototype
return a}
J.nC=function(a){if(typeof a=="number")return J.cd.prototype
if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cl.prototype
return a}
J.c4=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cl.prototype
return a}
J.aB=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
return a}if(a instanceof P.b)return a
return J.cT(a)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).v(a,b)}
J.hJ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nB(a).P(a,b)}
J.e_=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nC(a).k(a,b)}
J.e0=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hz(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aL(a).j(a,b)}
J.cY=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hz(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c3(a).p(a,b,c)}
J.hK=function(a,b){return J.c4(a).F(a,b)}
J.hL=function(a,b,c){return J.aB(a).h1(a,b,c)}
J.hM=function(a,b,c,d){return J.aB(a).dA(a,b,c,d)}
J.hN=function(a,b){return J.c4(a).X(a,b)}
J.cZ=function(a,b,c){return J.aL(a).hW(a,b,c)}
J.cs=function(a,b){return J.c3(a).I(a,b)}
J.hO=function(a,b,c,d){return J.c3(a).aF(a,b,c,d)}
J.e1=function(a,b){return J.c3(a).J(a,b)}
J.hP=function(a){return J.aB(a).ghR(a)}
J.e2=function(a){return J.aB(a).gcp(a)}
J.c6=function(a){return J.K(a).gV(a)}
J.b1=function(a){return J.c3(a).gY(a)}
J.ao=function(a){return J.aL(a).gm(a)}
J.hQ=function(a){return J.aB(a).gcJ(a)}
J.hR=function(a){return J.aB(a).giX(a)}
J.e3=function(a){return J.c3(a).iM(a)}
J.hS=function(a,b){return J.aB(a).iQ(a,b)}
J.hT=function(a,b){return J.aB(a).sa2(a,b)}
J.hU=function(a,b,c){return J.c4(a).u(a,b,c)}
J.hV=function(a){return J.c4(a).j3(a)}
J.ac=function(a){return J.K(a).i(a)}
I.aa=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cu.prototype
C.l=W.d3.prototype
C.L=W.bd.prototype
C.O=J.t.prototype
C.a=J.bh.prototype
C.P=J.eF.prototype
C.f=J.eG.prototype
C.Q=J.eH.prototype
C.d=J.cd.prototype
C.b=J.ce.prototype
C.X=J.cf.prototype
C.a2=H.dm.prototype
C.a3=W.jn.prototype
C.D=J.ju.prototype
C.a4=P.dq.prototype
C.E=W.kg.prototype
C.u=J.cl.prototype
C.F=W.bV.prototype
C.G=W.ld.prototype
C.I=new P.i_(!1)
C.H=new P.hZ(C.I)
C.J=new P.js()
C.K=new P.l_()
C.j=new P.m0()
C.c=new A.cw(0,"ColorSourceType.None")
C.i=new A.cw(1,"ColorSourceType.Solid")
C.e=new A.cw(2,"ColorSourceType.Texture2D")
C.h=new A.cw(3,"ColorSourceType.TextureCube")
C.q=new P.be(0)
C.M=new P.be(5e6)
C.N=new P.iF("element",!0,!1,!1,!1)
C.R=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.S=function(hooks) {
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
C.w=function(hooks) { return hooks; }

C.T=function(getTagFallback) {
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
C.U=function() {
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
C.V=function(hooks) {
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
C.W=function(hooks) {
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
C.x=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=H.c(I.aa([127,2047,65535,1114111]),[P.n])
C.m=H.c(I.aa([0,0,32776,33792,1,10240,0,0]),[P.n])
C.Y=H.c(I.aa(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.n=H.c(I.aa([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.aa([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Z=H.c(I.aa(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.z=H.c(I.aa([]),[P.h])
C.a_=H.c(I.aa([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.A=H.c(I.aa([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.aa([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.aa([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a0=H.c(I.aa([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.C=H.c(I.aa([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.aa(["bind","if","ref","repeat","syntax"]),[P.h])
C.t=H.c(I.aa(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.ib(0,{},C.z,[P.h,P.h])
C.k=new P.kT(!1)
$.aE=0
$.bG=null
$.ea=null
$.dK=!1
$.hx=null
$.hp=null
$.hF=null
$.cS=null
$.cV=null
$.dT=null
$.bz=null
$.c_=null
$.c0=null
$.dL=!1
$.Y=C.j
$.aO=null
$.d6=null
$.ex=null
$.ew=null
$.er=null
$.eq=null
$.ep=null
$.eo=null
$.o=V.jg()
$.eX=null
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
I.$lazy(y,x,w)}})(["en","$get$en",function(){return H.hw("_$dart_dartClosure")},"da","$get$da",function(){return H.hw("_$dart_js")},"fn","$get$fn",function(){return H.aI(H.cJ({
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aI(H.cJ({$method$:null,
toString:function(){return"$receiver$"}}))},"fp","$get$fp",function(){return H.aI(H.cJ(null))},"fq","$get$fq",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fu","$get$fu",function(){return H.aI(H.cJ(void 0))},"fv","$get$fv",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fs","$get$fs",function(){return H.aI(H.ft(null))},"fr","$get$fr",function(){return H.aI(function(){try{null.$method$}catch(z){return z.message}}())},"fx","$get$fx",function(){return H.aI(H.ft(void 0))},"fw","$get$fw",function(){return H.aI(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dF","$get$dF",function(){return P.le()},"c1","$get$c1",function(){return[]},"fK","$get$fK",function(){return P.kX()},"fR","$get$fR",function(){return H.jl(H.by(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"he","$get$he",function(){return P.jP("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hl","$get$hl",function(){return P.n7()},"el","$get$el",function(){return{}},"fV","$get$fV",function(){return P.eL(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dG","$get$dG",function(){return P.de(P.h,P.cb)},"fN","$get$fN",function(){return Z.au(0)},"fL","$get$fL",function(){return Z.au(511)},"aX","$get$aX",function(){return Z.au(1)},"aW","$get$aW",function(){return Z.au(2)},"aV","$get$aV",function(){return Z.au(4)},"aY","$get$aY",function(){return Z.au(8)},"aZ","$get$aZ",function(){return Z.au(16)},"bT","$get$bT",function(){return Z.au(32)},"bU","$get$bU",function(){return Z.au(64)},"fM","$get$fM",function(){return Z.au(96)},"bw","$get$bw",function(){return Z.au(128)},"aU","$get$aU",function(){return Z.au(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.M,args:[D.C]},{func:1,ret:P.M,args:[F.aq]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[F.al,P.p,P.p]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:-1,args:[P.n,[P.i,E.aP]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.M,args:[W.ae]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.U,args:[W.aH]},{func:1,ret:-1,args:[P.n,[P.i,U.aj]]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.n,[P.i,D.a7]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.n,[P.i,V.ar]]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:P.U,args:[W.G]},{func:1,ret:V.a1,args:[P.p]},{func:1,ret:W.G},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.U,args:[P.h]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:P.M,args:[,]},{func:1,ret:P.U,args:[W.V,P.h,P.h,W.cn]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.M,args:[P.a6]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.U,args:[P.p,P.p]},{func:1,ret:P.T,args:[P.n]},{func:1,ret:-1,args:[W.bV]},{func:1,ret:P.M,args:[P.h,,]},{func:1,ret:P.U,args:[[P.i,D.a7]]},{func:1,ret:P.M,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.L,P.h,P.h],args:[[P.L,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.b_,,],args:[,]},{func:1,ret:P.n,args:[[P.d,P.n],P.n]},{func:1,ret:P.M,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.az]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:P.M,args:[P.bs]},{func:1,ret:P.U,args:[V.b2]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.V,args:[W.G]}]
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
if(x==y)H.o8(d||a)
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
Isolate.dR=a.dR
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
if(typeof dartMainRunner==="function")dartMainRunner(K.hC,[])
else K.hC([])})})()
//# sourceMappingURL=test.dart.js.map
