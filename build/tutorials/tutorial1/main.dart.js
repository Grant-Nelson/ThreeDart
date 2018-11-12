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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isl)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="n"){processStatics(init.statics[b2]=b3.n,b4)
delete b3.n}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cZ(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d_=function(){}
var dart=[["","",,H,{"^":"",ll:{"^":"a;a"}}],["","",,J,{"^":"",
D:function(a){return void 0},
d3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cd:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d1==null){H.kI()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.eo("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cr()]
if(v!=null)return v
v=H.kN(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.q
if(y===Object.prototype)return C.q
if(typeof w=="function"){Object.defineProperty(w,$.$get$cr(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
l:{"^":"a;",
p:function(a,b){return a===b},
gI:function(a){return H.ba(a)},
i:["ci",function(a){return"Instance of '"+H.aJ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h5:{"^":"l;",
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$isL:1},
h7:{"^":"l;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$isF:1},
cs:{"^":"l;",
gI:function(a){return 0},
i:["ck",function(a){return String(a)}]},
hz:{"^":"cs;"},
c3:{"^":"cs;"},
bA:{"^":"cs;",
i:function(a){var z=a[$.$get$dn()]
if(z==null)return this.ck(a)
return"JavaScript function for "+H.e(J.X(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbz:1},
aH:{"^":"l;$ti",
h:function(a,b){H.w(b,H.r(a,0))
if(!!a.fixed$length)H.U(P.ai("add"))
a.push(b)},
N:function(a,b){var z
if(!!a.fixed$length)H.U(P.ai("remove"))
for(z=0;z<a.length;++z)if(J.W(a[z],b)){a.splice(z,1)
return!0}return!1},
F:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.ar(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.G(z,y,H.e(a[y]))
return z.join(b)},
dQ:function(a){return this.l(a,"")},
dK:function(a,b,c){var z,y,x
H.i(b,{func:1,ret:P.L,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.c(P.ar(a))}throw H.c(H.cp())},
dJ:function(a,b){return this.dK(a,b,null)},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
aI:function(a,b,c){var z=a.length
if(b>z)throw H.c(P.a3(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a3(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gaD:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.cp())},
bK:function(a,b){var z,y
H.i(b,{func:1,ret:P.L,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.ar(a))}return!1},
K:function(a,b){var z
for(z=0;z<a.length;++z)if(J.W(a[z],b))return!0
return!1},
i:function(a){return P.co(a,"[","]")},
gH:function(a){return new J.ak(a,a.length,0,[H.r(a,0)])},
gI:function(a){return H.ba(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.U(P.ai("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.bK(b,"newLength",null))
if(b<0)throw H.c(P.a3(b,0,null,"newLength",null))
a.length=b},
G:function(a,b,c){H.O(b)
H.w(c,H.r(a,0))
if(!!a.immutable$list)H.U(P.ai("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ay(a,b))
if(b>=a.length||b<0)throw H.c(H.ay(a,b))
a[b]=c},
$ish:1,
$isd:1,
n:{
h4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.bK(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a3(a,0,4294967295,"length",null))
return J.dy(new Array(a),b)},
dy:function(a,b){return J.b5(H.b(a,[b]))},
b5:function(a){H.bt(a)
a.fixed$length=Array
return a}}},
lk:{"^":"aH;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
gD:function(a){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bT:{"^":"l;",
b4:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.e.gaC(b)
if(this.gaC(a)===z)return 0
if(this.gaC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaC:function(a){return a===0?1/a<0:a<0},
bO:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.ai(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.ai(""+a+".round()"))},
dt:function(a,b,c){if(C.e.b4(b,c)>0)throw H.c(H.ax(b))
if(this.b4(a,b)<0)return b
if(this.b4(a,c)>0)return c
return a},
ep:function(a,b){var z
if(b>20)throw H.c(P.a3(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaC(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){return a&0x1FFFFFFF},
ca:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
az:function(a,b){return(a|0)===a?a/b|0:this.dh(a,b)},
dh:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.ai("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
ay:function(a,b){var z
if(a>0)z=this.df(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
df:function(a,b){return b>31?0:a>>>b},
a6:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a<b},
$isu:1,
$isP:1},
dz:{"^":"bT;",$isC:1},
h6:{"^":"bT;"},
bU:{"^":"l;",
b3:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ay(a,b))
if(b<0)throw H.c(H.ay(a,b))
if(b>=a.length)H.U(H.ay(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.c(H.ay(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.B(b)
if(typeof b!=="string")throw H.c(P.bK(b,null,null))
return a+b},
cf:function(a,b,c){var z
if(c>a.length)throw H.c(P.a3(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aH:function(a,b){return this.cf(a,b,0)},
aj:function(a,b,c){H.O(c)
if(c==null)c=a.length
if(b<0)throw H.c(P.c_(b,null,null))
if(b>c)throw H.c(P.c_(b,null,null))
if(c>a.length)throw H.c(P.c_(c,null,null))
return a.substring(b,c)},
aJ:function(a,b){return this.aj(a,b,null)},
eo:function(a){return a.toLowerCase()},
v:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
e2:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.v(c,z)+a},
W:function(a,b){return this.e2(a,b," ")},
dv:function(a,b,c){if(c>a.length)throw H.c(P.a3(c,0,a.length,null,null))
return H.f7(a,b,c)},
i:function(a){return a},
gI:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdN:1,
$isf:1}}],["","",,H,{"^":"",
cp:function(){return new P.cB("No element")},
h3:function(){return new P.cB("Too many elements")},
n:{"^":"iE;a",
gk:function(a){return this.a.length},
m:function(a,b){return C.b.b3(this.a,b)},
$asep:function(){return[P.C]},
$asq:function(){return[P.C]},
$ash:function(){return[P.C]},
$asd:function(){return[P.C]}},
du:{"^":"h;"},
bW:{"^":"du;$ti",
gH:function(a){return new H.cv(this,this.gk(this),0,[H.az(this,"bW",0)])},
bf:function(a,b){return this.cj(0,H.i(b,{func:1,ret:P.L,args:[H.az(this,"bW",0)]}))}},
cv:{"^":"a;a,b,c,0d,$ti",
gD:function(a){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.bI(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.ar(z))
w=this.c
if(typeof x!=="number")return H.E(x)
if(w>=x){this.d=null
return!1}this.d=y.u(z,w);++this.c
return!0}},
hj:{"^":"h;a,b,$ti",
gH:function(a){return new H.hk(J.aE(this.a),this.b,this.$ti)},
gk:function(a){return J.aF(this.a)},
u:function(a,b){return this.b.$1(J.ch(this.a,b))},
$ash:function(a,b){return[b]}},
hk:{"^":"cq;0a,b,c,$ti",
t:function(){var z=this.b
if(z.t()){this.a=this.c.$1(z.gD(z))
return!0}this.a=null
return!1},
gD:function(a){return this.a},
$ascq:function(a,b){return[b]}},
hl:{"^":"bW;a,b,$ti",
gk:function(a){return J.aF(this.a)},
u:function(a,b){return this.b.$1(J.ch(this.a,b))},
$asbW:function(a,b){return[b]},
$ash:function(a,b){return[b]}},
cO:{"^":"h;a,b,$ti",
gH:function(a){return new H.iR(J.aE(this.a),this.b,this.$ti)}},
iR:{"^":"cq;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gD(z)))return!0
return!1},
gD:function(a){var z=this.a
return z.gD(z)}},
bR:{"^":"a;$ti"},
ep:{"^":"a;$ti"},
iE:{"^":"bV+ep;"}}],["","",,H,{"^":"",
kB:function(a){return init.types[H.O(a)]},
kL:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.D(a).$isx},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.X(a)
if(typeof z!=="string")throw H.c(H.ax(a))
return z},
ba:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aJ:function(a){var z,y,x,w,v,u,t,s,r
z=J.D(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.z||!!J.D(a).$isc3){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.aa(w,0)===36)w=C.b.aJ(w,1)
r=H.d2(H.bt(H.aA(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dQ:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hJ:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.c(H.ax(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.ay(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.c(H.ax(w))}return H.dQ(z)},
dR:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.c(H.ax(x))
if(x<0)throw H.c(H.ax(x))
if(x>65535)return H.hJ(a)}return H.dQ(a)},
cA:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.ay(z,10))>>>0,56320|z&1023)}throw H.c(P.a3(a,0,1114111,null,null))},
a0:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hI:function(a){return a.b?H.a0(a).getUTCFullYear()+0:H.a0(a).getFullYear()+0},
hG:function(a){return a.b?H.a0(a).getUTCMonth()+1:H.a0(a).getMonth()+1},
hC:function(a){return a.b?H.a0(a).getUTCDate()+0:H.a0(a).getDate()+0},
hD:function(a){return a.b?H.a0(a).getUTCHours()+0:H.a0(a).getHours()+0},
hF:function(a){return a.b?H.a0(a).getUTCMinutes()+0:H.a0(a).getMinutes()+0},
hH:function(a){return a.b?H.a0(a).getUTCSeconds()+0:H.a0(a).getSeconds()+0},
hE:function(a){return a.b?H.a0(a).getUTCMilliseconds()+0:H.a0(a).getMilliseconds()+0},
E:function(a){throw H.c(H.ax(a))},
j:function(a,b){if(a==null)J.aF(a)
throw H.c(H.ay(a,b))},
ay:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,"index",null)
z=H.O(J.aF(a))
if(!(b<0)){if(typeof z!=="number")return H.E(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.c_(b,"index",null)},
kx:function(a,b,c){if(a>c)return new P.bZ(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bZ(a,c,!0,b,"end","Invalid value")
return new P.aj(!0,b,"end",null)},
ax:function(a){return new P.aj(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dM()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f8})
z.name=""}else z.toString=H.f8
return z},
f8:function(){return J.X(this.dartException)},
U:function(a){throw H.c(a)},
y:function(a){throw H.c(P.ar(a))},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.ay(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ct(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dL(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ed()
u=$.$get$ee()
t=$.$get$ef()
s=$.$get$eg()
r=$.$get$ek()
q=$.$get$el()
p=$.$get$ei()
$.$get$eh()
o=$.$get$en()
n=$.$get$em()
m=v.U(y)
if(m!=null)return z.$1(H.ct(H.B(y),m))
else{m=u.U(y)
if(m!=null){m.method="call"
return z.$1(H.ct(H.B(y),m))}else{m=t.U(y)
if(m==null){m=s.U(y)
if(m==null){m=r.U(y)
if(m==null){m=q.U(y)
if(m==null){m=p.U(y)
if(m==null){m=s.U(y)
if(m==null){m=o.U(y)
if(m==null){m=n.U(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dL(H.B(y),m))}}return z.$1(new H.iD(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e0()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aj(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e0()
return a},
aW:function(a){var z
if(a==null)return new H.eJ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eJ(a)},
kz:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.G(0,a[y],a[x])}return b},
kK:function(a,b,c,d,e,f){H.k(a,"$isbz")
switch(H.O(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.R("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var z
H.O(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kK)
a.$identity=z
return z},
fs:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.D(d).$isd){z.$reflectionInfo=d
x=H.hN(z).r}else x=d
w=e?Object.create(new H.i7().constructor.prototype):Object.create(new H.cj(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ad
if(typeof u!=="number")return u.E()
$.ad=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.di(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kB,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dc:H.ck
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.di(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fp:function(a,b,c,d){var z=H.ck
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
di:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fr(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fp(y,!w,z,b)
if(y===0){w=$.ad
if(typeof w!=="number")return w.E()
$.ad=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b_
if(v==null){v=H.bM("self")
$.b_=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ad
if(typeof w!=="number")return w.E()
$.ad=w+1
t+=w
w="return function("+t+"){return this."
v=$.b_
if(v==null){v=H.bM("self")
$.b_=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fq:function(a,b,c,d){var z,y
z=H.ck
y=H.dc
switch(b?-1:a){case 0:throw H.c(H.hW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fr:function(a,b){var z,y,x,w,v,u,t,s
z=$.b_
if(z==null){z=H.bM("self")
$.b_=z}y=$.db
if(y==null){y=H.bM("receiver")
$.db=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fq(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.ad
if(typeof y!=="number")return y.E()
$.ad=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.ad
if(typeof y!=="number")return y.E()
$.ad=y+1
return new Function(z+y+"}")()},
cZ:function(a,b,c,d,e,f,g){var z,y
z=J.b5(H.bt(b))
H.O(c)
y=!!J.D(d).$isd?J.b5(d):d
return H.fs(a,z,c,y,!!e,f,g)},
B:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ah(a,"String"))},
kQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ah(a,"num"))},
cX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ah(a,"bool"))},
O:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ah(a,"int"))},
f5:function(a,b){throw H.c(H.ah(a,H.B(b).substring(3)))},
kS:function(a,b){var z=J.bI(b)
throw H.c(H.fn(a,z.aj(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.D(a)[b])return a
H.f5(a,b)},
aX:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.D(a)[b]
else z=!0
if(z)return a
H.kS(a,b)},
bt:function(a){if(a==null)return a
if(!!J.D(a).$isd)return a
throw H.c(H.ah(a,"List"))},
kM:function(a,b){if(a==null)return a
if(!!J.D(a).$isd)return a
if(J.D(a)[b])return a
H.f5(a,b)},
eX:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.O(z)]
else return a.$S()}return},
bH:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eX(J.D(a))
if(z==null)return!1
y=H.f0(z,null,b,null)
return y},
i:function(a,b){var z,y
if(a==null)return a
if($.cU)return a
$.cU=!0
try{if(H.bH(a,b))return a
z=H.bJ(b)
y=H.ah(a,z)
throw H.c(y)}finally{$.cU=!1}},
d0:function(a,b){if(a!=null&&!H.cY(a,b))H.U(H.ah(a,H.bJ(b)))
return a},
eS:function(a){var z
if(a instanceof H.p){z=H.eX(J.D(a))
if(z!=null)return H.bJ(z)
return"Closure"}return H.aJ(a)},
kV:function(a){throw H.c(new P.fx(H.B(a)))},
eZ:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aA:function(a){if(a==null)return
return a.$ti},
mf:function(a,b,c){return H.aY(a["$as"+H.e(c)],H.aA(b))},
bs:function(a,b,c,d){var z
H.B(c)
H.O(d)
z=H.aY(a["$as"+H.e(c)],H.aA(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.B(b)
H.O(c)
z=H.aY(a["$as"+H.e(b)],H.aA(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.O(b)
z=H.aA(a)
return z==null?null:z[b]},
bJ:function(a){var z=H.aC(a,null)
return z},
aC:function(a,b){var z,y
H.z(b,"$isd",[P.f],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d2(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.O(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.e(b[y])}if('func' in a)return H.kl(a,b)
if('futureOr' in a)return"FutureOr<"+H.aC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.z(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.b.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aC(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aC(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aC(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aC(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.ky(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.B(z[l])
n=n+m+H.aC(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d2:function(a,b,c){var z,y,x,w,v,u
H.z(c,"$isd",[P.f],"$asd")
if(a==null)return""
z=new P.c0("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aC(u,c)}v="<"+z.i(0)+">"
return v},
aY:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bq:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aA(a)
y=J.D(a)
if(y[b]==null)return!1
return H.eV(H.aY(y[d],z),null,c,null)},
z:function(a,b,c,d){var z,y
H.B(b)
H.bt(c)
H.B(d)
if(a==null)return a
z=H.bq(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d2(c,0,null)
throw H.c(H.ah(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eV:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a9(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a9(a[y],b,c[y],d))return!1
return!0},
md:function(a,b,c){return a.apply(b,H.aY(J.D(b)["$as"+H.e(c)],H.aA(b)))},
f1:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.f1(z)}return!1},
cY:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.f1(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cY(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bH(a,b)}y=J.D(a).constructor
x=H.aA(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.a9(y,null,b,null)
return z},
w:function(a,b){if(a!=null&&!H.cY(a,b))throw H.c(H.ah(a,H.bJ(b)))
return a},
a9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a9(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.f0(a,b,c,d)
if('func' in a)return c.builtin$cls==="bz"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a9("type" in a?a.type:null,b,x,d)
else if(H.a9(a,b,x,d))return!0
else{if(!('$is'+"b3" in y.prototype))return!1
w=y.prototype["$as"+"b3"]
v=H.aY(w,z?a.slice(1):null)
return H.a9(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bJ(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eV(H.aY(r,z),b,u,d)},
f0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a9(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a9(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a9(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a9(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kP(m,b,l,d)},
kP:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a9(c[w],d,a[w],b))return!1}return!0},
me:function(a,b,c){Object.defineProperty(a,H.B(b),{value:c,enumerable:false,writable:true,configurable:true})},
kN:function(a){var z,y,x,w,v,u
z=H.B($.f_.$1(a))
y=$.ca[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ce[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.B($.eU.$2(a,z))
if(z!=null){y=$.ca[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ce[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cf(x)
$.ca[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ce[z]=x
return x}if(v==="-"){u=H.cf(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f3(a,x)
if(v==="*")throw H.c(P.eo(z))
if(init.leafTags[z]===true){u=H.cf(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f3(a,x)},
f3:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d3(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cf:function(a){return J.d3(a,!1,null,!!a.$isx)},
kO:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cf(z)
else return J.d3(z,c,null,null)},
kI:function(){if(!0===$.d1)return
$.d1=!0
H.kJ()},
kJ:function(){var z,y,x,w,v,u,t,s
$.ca=Object.create(null)
$.ce=Object.create(null)
H.kE()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f6.$1(v)
if(u!=null){t=H.kO(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kE:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.aU(C.A,H.aU(C.F,H.aU(C.o,H.aU(C.o,H.aU(C.E,H.aU(C.B,H.aU(C.C(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f_=new H.kF(v)
$.eU=new H.kG(u)
$.f6=new H.kH(t)},
aU:function(a,b){return a(b)||b},
f7:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
d4:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hM:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hN:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.b5(z)
y=z[0]
x=z[1]
return new H.hM(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
im:{"^":"a;a,b,c,d,e,f",
U:function(a){var z,y,x
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
n:{
ag:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.im(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ej:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hw:{"^":"Q;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dL:function(a,b){return new H.hw(a,b==null?null:b.method)}}},
ha:{"^":"Q;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
n:{
ct:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ha(a,y,z?null:b.receiver)}}},
iD:{"^":"Q;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kW:{"^":"p:15;a",
$1:function(a){if(!!J.D(a).$isQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eJ:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isac:1},
p:{"^":"a;",
i:function(a){return"Closure '"+H.aJ(this).trim()+"'"},
gc7:function(){return this},
$isbz:1,
gc7:function(){return this}},
e6:{"^":"p;"},
i7:{"^":"e6;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cj:{"^":"e6;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var z,y
z=this.c
if(z==null)y=H.ba(this.a)
else y=typeof z!=="object"?J.aD(z):H.ba(z)
return(y^H.ba(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aJ(z)+"'")},
n:{
ck:function(a){return a.a},
dc:function(a){return a.c},
bM:function(a){var z,y,x,w,v
z=new H.cj("self","target","receiver","name")
y=J.b5(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
io:{"^":"Q;a",
i:function(a){return this.a},
n:{
ah:function(a,b){return new H.io("TypeError: "+H.e(P.bQ(a))+": type '"+H.eS(a)+"' is not a subtype of type '"+b+"'")}}},
fm:{"^":"Q;a",
i:function(a){return this.a},
n:{
fn:function(a,b){return new H.fm("CastError: "+H.e(P.bQ(a))+": type '"+H.eS(a)+"' is not a subtype of type '"+b+"'")}}},
hV:{"^":"Q;a",
i:function(a){return"RuntimeError: "+H.e(this.a)},
n:{
hW:function(a){return new H.hV(a)}}},
aI:{"^":"dF;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gS:function(a){return new H.dC(this,[H.r(this,0)])},
bN:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bw(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bw(y,b)}else return this.dN(b)},
dN:function(a){var z=this.d
if(z==null)return!1
return this.b8(this.aQ(z,J.aD(a)&0x3ffffff),a)>=0},
m:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aw(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aw(w,b)
x=y==null?null:y.b
return x}else return this.dO(b)},
dO:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aQ(z,J.aD(a)&0x3ffffff)
x=this.b8(y,a)
if(x<0)return
return y[x].b},
G:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aT()
this.b=z}this.bp(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aT()
this.c=y}this.bp(y,b,c)}else{x=this.d
if(x==null){x=this.aT()
this.d=x}w=J.aD(b)&0x3ffffff
v=this.aQ(x,w)
if(v==null)this.aX(x,w,[this.aU(b,c)])
else{u=this.b8(v,b)
if(u>=0)v[u].b=c
else v.push(this.aU(b,c))}}},
F:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.ar(this))
z=z.c}},
bp:function(a,b,c){var z
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
z=this.aw(a,b)
if(z==null)this.aX(a,b,this.aU(b,c))
else z.b=c},
cM:function(){this.r=this.r+1&67108863},
aU:function(a,b){var z,y
z=new H.hc(H.w(a,H.r(this,0)),H.w(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cM()
return z},
b8:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.W(a[y].a,b))return y
return-1},
i:function(a){return P.dG(this)},
aw:function(a,b){return a[b]},
aQ:function(a,b){return a[b]},
aX:function(a,b,c){a[b]=c},
cJ:function(a,b){delete a[b]},
bw:function(a,b){return this.aw(a,b)!=null},
aT:function(){var z=Object.create(null)
this.aX(z,"<non-identifier-key>",z)
this.cJ(z,"<non-identifier-key>")
return z},
$isdB:1},
hc:{"^":"a;a,b,0c,0d"},
dC:{"^":"du;a,$ti",
gk:function(a){return this.a.a},
gH:function(a){var z,y
z=this.a
y=new H.hd(z,z.r,this.$ti)
y.c=z.e
return y}},
hd:{"^":"a;a,b,0c,0d,$ti",
gD:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.ar(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kF:{"^":"p:15;a",
$1:function(a){return this.a(a)}},
kG:{"^":"p:37;a",
$2:function(a,b){return this.a(a,b)}},
kH:{"^":"p:36;a",
$1:function(a){return this.a(H.B(a))}},
h8:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdN:1,
n:{
h9:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(new P.fU("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
ky:function(a){return J.dy(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cT:function(a){return a},
aw:function(a,b,c){H.bt(b)
if(a>>>0!==a||a>=c)throw H.c(H.ay(b,a))},
kk:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.c(H.kx(a,b,c))
return b},
hr:{"^":"l;","%":"DataView;ArrayBufferView;cx|eD|eE|hq|eF|eG|av"},
cx:{"^":"hr;",
gk:function(a){return a.length},
$isx:1,
$asx:I.d_},
hq:{"^":"eE;",
m:function(a,b){H.aw(b,a,a.length)
return a[b]},
$asbR:function(){return[P.u]},
$asq:function(){return[P.u]},
$ish:1,
$ash:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
av:{"^":"eG;",
$asbR:function(){return[P.C]},
$asq:function(){return[P.C]},
$ish:1,
$ash:function(){return[P.C]},
$isd:1,
$asd:function(){return[P.C]}},
lt:{"^":"av;",
m:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lu:{"^":"av;",
m:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lv:{"^":"av;",
m:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lw:{"^":"av;",
m:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lx:{"^":"av;",
m:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ly:{"^":"av;",
gk:function(a){return a.length},
m:function(a,b){H.aw(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hs:{"^":"av;",
gk:function(a){return a.length},
m:function(a,b){H.aw(b,a,a.length)
return a[b]},
aI:function(a,b,c){return new Uint8Array(a.subarray(b,H.kk(b,c,a.length)))},
"%":";Uint8Array"},
eD:{"^":"cx+q;"},
eE:{"^":"eD+bR;"},
eF:{"^":"cx+q;"},
eG:{"^":"eF+bR;"}}],["","",,P,{"^":"",
iT:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ks()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.br(new P.iV(z),1)).observe(y,{childList:true})
return new P.iU(z,y,x)}else if(self.setImmediate!=null)return P.kt()
return P.ku()},
m0:[function(a){self.scheduleImmediate(H.br(new P.iW(H.i(a,{func:1,ret:-1})),0))},"$1","ks",4,0,7],
m1:[function(a){self.setImmediate(H.br(new P.iX(H.i(a,{func:1,ret:-1})),0))},"$1","kt",4,0,7],
m2:[function(a){P.cG(C.i,H.i(a,{func:1,ret:-1}))},"$1","ku",4,0,7],
cG:function(a,b){var z
H.i(b,{func:1,ret:-1})
z=C.e.az(a.a,1000)
return P.k0(z<0?0:z,b)},
ko:function(a,b){if(H.bH(a,{func:1,args:[P.a,P.ac]}))return b.eb(a,null,P.a,P.ac)
if(H.bH(a,{func:1,args:[P.a]}))return H.i(a,{func:1,ret:null,args:[P.a]})
throw H.c(P.bK(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kn:function(){var z,y
for(;z=$.aT,z!=null;){$.bo=null
y=z.b
$.aT=y
if(y==null)$.bn=null
z.a.$0()}},
mc:[function(){$.cV=!0
try{P.kn()}finally{$.bo=null
$.cV=!1
if($.aT!=null)$.$get$cP().$1(P.eW())}},"$0","eW",0,0,1],
eR:function(a){var z=new P.ev(H.i(a,{func:1,ret:-1}))
if($.aT==null){$.bn=z
$.aT=z
if(!$.cV)$.$get$cP().$1(P.eW())}else{$.bn.b=z
$.bn=z}},
kr:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
z=$.aT
if(z==null){P.eR(a)
$.bo=$.bn
return}y=new P.ev(a)
x=$.bo
if(x==null){y.b=z
$.bo=y
$.aT=y}else{y.b=x.b
x.b=y
$.bo=y
if(y.b==null)$.bn=y}},
kT:function(a){var z,y
z={func:1,ret:-1}
H.i(a,z)
y=$.K
if(C.d===y){P.c9(null,null,C.d,a)
return}y.toString
P.c9(null,null,y,H.i(y.b_(a),z))},
e9:function(a,b){var z,y
z={func:1,ret:-1}
H.i(b,z)
y=$.K
if(y===C.d){y.toString
return P.cG(a,b)}return P.cG(a,H.i(y.b_(b),z))},
c8:function(a,b,c,d,e){var z={}
z.a=d
P.kr(new P.kp(z,e))},
eP:function(a,b,c,d,e){var z,y
H.i(d,{func:1,ret:e})
y=$.K
if(y===c)return d.$0()
$.K=c
z=y
try{y=d.$0()
return y}finally{$.K=z}},
eQ:function(a,b,c,d,e,f,g){var z,y
H.i(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.K
if(y===c)return d.$1(e)
$.K=c
z=y
try{y=d.$1(e)
return y}finally{$.K=z}},
kq:function(a,b,c,d,e,f,g,h,i){var z,y
H.i(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.K
if(y===c)return d.$2(e,f)
$.K=c
z=y
try{y=d.$2(e,f)
return y}finally{$.K=z}},
c9:function(a,b,c,d){var z
H.i(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.b_(d):c.dq(d,-1)
P.eR(d)},
iV:{"^":"p:21;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iU:{"^":"p:27;a,b,c",
$1:function(a){var z,y
this.a.a=H.i(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iW:{"^":"p:0;a",
$0:function(){this.a.$0()}},
iX:{"^":"p:0;a",
$0:function(){this.a.$0()}},
k_:{"^":"a;a,0b,c",
cw:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.br(new P.k1(this,b),0),a)
else throw H.c(P.ai("`setTimeout()` not found."))},
n:{
k0:function(a,b){var z=new P.k_(!0,0)
z.cw(a,b)
return z}}},
k1:{"^":"p:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
aS:{"^":"a;0a,b,c,d,e,$ti",
dU:function(a){if(this.c!==6)return!0
return this.b.b.be(H.i(this.d,{func:1,ret:P.L,args:[P.a]}),a.a,P.L,P.a)},
dM:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bH(z,{func:1,args:[P.a,P.ac]}))return H.d0(w.eh(z,a.a,a.b,null,y,P.ac),x)
else return H.d0(w.be(H.i(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ao:{"^":"a;bF:a<,b,0d8:c<,$ti",
c1:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.K
if(y!==C.d){y.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ko(b,y)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ao(0,$.K,[c])
w=b==null?1:3
this.bq(new P.aS(x,w,a,b,[z,c]))
return x},
el:function(a,b){return this.c1(a,null,b)},
bq:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isaS")
this.c=a}else{if(z===2){y=H.k(this.c,"$isao")
z=y.a
if(z<4){y.bq(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c9(null,null,z,H.i(new P.jb(this,a),{func:1,ret:-1}))}},
bC:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isaS")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isao")
y=u.a
if(y<4){u.bC(a)
return}this.a=y
this.c=u.c}z.a=this.ax(a)
y=this.b
y.toString
P.c9(null,null,y,H.i(new P.jg(z,this),{func:1,ret:-1}))}},
aW:function(){var z=H.k(this.c,"$isaS")
this.c=null
return this.ax(z)},
ax:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bu:function(a){var z,y,x,w
z=H.r(this,0)
H.d0(a,{futureOr:1,type:z})
y=this.$ti
x=H.bq(a,"$isb3",y,"$asb3")
if(x){z=H.bq(a,"$isao",y,null)
if(z)P.ey(a,this)
else P.jc(a,this)}else{w=this.aW()
H.w(a,z)
this.a=4
this.c=a
P.bl(this,w)}},
aM:[function(a,b){var z
H.k(b,"$isac")
z=this.aW()
this.a=8
this.c=new P.a5(a,b)
P.bl(this,z)},function(a){return this.aM(a,null)},"eu","$2","$1","gcE",4,2,33],
$isb3:1,
n:{
jc:function(a,b){var z,y,x
b.a=1
try{a.c1(new P.jd(b),new P.je(b),null)}catch(x){z=H.a4(x)
y=H.aW(x)
P.kT(new P.jf(b,z,y))}},
ey:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isao")
if(z>=4){y=b.aW()
b.a=a.a
b.c=a.c
P.bl(b,y)}else{y=H.k(b.c,"$isaS")
b.a=2
b.c=a
a.bC(y)}},
bl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isa5")
y=y.b
u=v.a
t=v.b
y.toString
P.c8(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bl(z.a,b)}y=z.a
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
if(p){H.k(r,"$isa5")
y=y.b
u=r.a
t=r.b
y.toString
P.c8(null,null,y,u,t)
return}o=$.K
if(o==null?q!=null:o!==q)$.K=q
else o=null
y=b.c
if(y===8)new P.jj(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ji(x,b,r).$0()}else if((y&2)!==0)new P.jh(z,x,b).$0()
if(o!=null)$.K=o
y=x.b
if(!!J.D(y).$isb3){if(y.a>=4){n=H.k(t.c,"$isaS")
t.c=null
b=t.ax(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ey(y,t)
return}}m=b.b
n=H.k(m.c,"$isaS")
m.c=null
b=m.ax(n)
y=x.a
u=x.b
if(!y){H.w(u,H.r(m,0))
m.a=4
m.c=u}else{H.k(u,"$isa5")
m.a=8
m.c=u}z.a=m
y=m}}}},
jb:{"^":"p:0;a,b",
$0:function(){P.bl(this.a,this.b)}},
jg:{"^":"p:0;a,b",
$0:function(){P.bl(this.b,this.a.a)}},
jd:{"^":"p:21;a",
$1:function(a){var z=this.a
z.a=0
z.bu(a)}},
je:{"^":"p:31;a",
$2:function(a,b){this.a.aM(a,H.k(b,"$isac"))},
$1:function(a){return this.$2(a,null)}},
jf:{"^":"p:0;a,b,c",
$0:function(){this.a.aM(this.b,this.c)}},
jj:{"^":"p:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c_(H.i(w.d,{func:1}),null)}catch(v){y=H.a4(v)
x=H.aW(v)
if(this.d){w=H.k(this.a.a.c,"$isa5").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isa5")
else u.b=new P.a5(y,x)
u.a=!0
return}if(!!J.D(z).$isb3){if(z instanceof P.ao&&z.gbF()>=4){if(z.gbF()===8){w=this.b
w.b=H.k(z.gd8(),"$isa5")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.el(new P.jk(t),null)
w.a=!1}}},
jk:{"^":"p:30;a",
$1:function(a){return this.a}},
ji:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.w(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.be(H.i(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a4(t)
y=H.aW(t)
x=this.a
x.b=new P.a5(z,y)
x.a=!0}}},
jh:{"^":"p:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isa5")
w=this.c
if(w.dU(z)&&w.e!=null){v=this.b
v.b=w.dM(z)
v.a=!1}}catch(u){y=H.a4(u)
x=H.aW(u)
w=H.k(this.a.a.c,"$isa5")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a5(y,x)
s.a=!0}}},
ev:{"^":"a;a,0b"},
cC:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.ao(0,$.K,[P.C])
z.a=0
this.dT(new P.ia(z,this),!0,new P.ib(z,y),y.gcE())
return y}},
ia:{"^":"p;a,b",
$1:function(a){H.w(a,H.az(this.b,"cC",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.az(this.b,"cC",0)]}}},
ib:{"^":"p:0;a,b",
$0:function(){this.b.bu(this.a.a)}},
e3:{"^":"a;$ti"},
i9:{"^":"a;"},
a5:{"^":"a;a,b",
i:function(a){return H.e(this.a)},
$isQ:1},
k8:{"^":"a;",$ism_:1},
kp:{"^":"p:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dM()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.i(0)
throw x}},
jF:{"^":"k8;",
ei:function(a){var z,y,x
H.i(a,{func:1,ret:-1})
try{if(C.d===$.K){a.$0()
return}P.eP(null,null,this,a,-1)}catch(x){z=H.a4(x)
y=H.aW(x)
P.c8(null,null,this,z,H.k(y,"$isac"))}},
ej:function(a,b,c){var z,y,x
H.i(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.d===$.K){a.$1(b)
return}P.eQ(null,null,this,a,b,-1,c)}catch(x){z=H.a4(x)
y=H.aW(x)
P.c8(null,null,this,z,H.k(y,"$isac"))}},
dq:function(a,b){return new P.jH(this,H.i(a,{func:1,ret:b}),b)},
b_:function(a){return new P.jG(this,H.i(a,{func:1,ret:-1}))},
dr:function(a,b){return new P.jI(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
c_:function(a,b){H.i(a,{func:1,ret:b})
if($.K===C.d)return a.$0()
return P.eP(null,null,this,a,b)},
be:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.K===C.d)return a.$1(b)
return P.eQ(null,null,this,a,b,c,d)},
eh:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.K===C.d)return a.$2(b,c)
return P.kq(null,null,this,a,b,c,d,e,f)},
eb:function(a,b,c,d){return H.i(a,{func:1,ret:b,args:[c,d]})}},
jH:{"^":"p;a,b,c",
$0:function(){return this.a.c_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jG:{"^":"p:1;a,b",
$0:function(){return this.a.ei(this.b)}},
jI:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.ej(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
he:function(a,b,c){H.bt(a)
return H.z(H.kz(a,new H.aI(0,0,[b,c])),"$isdB",[b,c],"$asdB")},
dD:function(a,b){return new H.aI(0,0,[a,b])},
bC:function(a,b,c,d){return new P.jr(0,0,[d])},
h2:function(a,b,c){var z,y
if(P.cW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bp()
C.a.h(y,a)
try{P.km(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.e4(b,H.kM(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
co:function(a,b,c){var z,y,x
if(P.cW(a))return b+"..."+c
z=new P.c0(b)
y=$.$get$bp()
C.a.h(y,a)
try{x=z
x.a=P.e4(x.gab(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gab()+c
y=z.gab()
return y.charCodeAt(0)==0?y:y},
cW:function(a){var z,y
for(z=0;y=$.$get$bp(),z<y.length;++z)if(a===y[z])return!0
return!1},
km:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gH(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.e(z.gD(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gD(z);++x
if(!z.t()){if(x<=4){C.a.h(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gD(z);++x
for(;z.t();t=s,s=r){r=z.gD(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dE:function(a,b){var z,y
z=P.bC(null,null,null,b)
for(y=J.aE(a);y.t();)z.h(0,H.w(y.gD(y),b))
return z},
dG:function(a){var z,y,x
z={}
if(P.cW(a))return"{...}"
y=new P.c0("")
try{C.a.h($.$get$bp(),a)
x=y
x.a=x.gab()+"{"
z.a=!0
J.fc(a,new P.hi(z,y))
z=y
z.a=z.gab()+"}"}finally{z=$.$get$bp()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gab()
return z.charCodeAt(0)==0?z:z},
jr:{"^":"jl;a,0b,0c,0d,0e,0f,r,$ti",
gH:function(a){return P.eC(this,this.r,H.r(this,0))},
gk:function(a){return this.a},
K:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.k(z[b],"$isc6")!=null}else{y=this.cF(b)
return y}},
cF:function(a){var z=this.d
if(z==null)return!1
return this.aP(this.bA(z,a),a)>=0},
h:function(a,b){var z,y
H.w(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cR()
this.b=z}return this.bs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cR()
this.c=y}return this.bs(y,b)}else return this.cz(0,b)},
cz:function(a,b){var z,y,x
H.w(b,H.r(this,0))
z=this.d
if(z==null){z=P.cR()
this.d=z}y=this.bv(b)
x=z[y]
if(x==null)z[y]=[this.aL(b)]
else{if(this.aP(x,b)>=0)return!1
x.push(this.aL(b))}return!0},
N:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bD(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bD(this.c,b)
else return this.d6(0,b)},
d6:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bA(z,b)
x=this.aP(y,b)
if(x<0)return!1
this.bG(y.splice(x,1)[0])
return!0},
bs:function(a,b){H.w(b,H.r(this,0))
if(H.k(a[b],"$isc6")!=null)return!1
a[b]=this.aL(b)
return!0},
bD:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isc6")
if(z==null)return!1
this.bG(z)
delete a[b]
return!0},
bt:function(){this.r=this.r+1&67108863},
aL:function(a){var z,y
z=new P.c6(H.w(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bt()
return z},
bG:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bt()},
bv:function(a){return J.aD(a)&0x3ffffff},
bA:function(a,b){return a[this.bv(b)]},
aP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.W(a[y].a,b))return y
return-1},
n:{
cR:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
c6:{"^":"a;a,0b,0c"},
js:{"^":"a;a,b,0c,0d,$ti",
gD:function(a){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.ar(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.w(z.a,H.r(this,0))
this.c=z.b
return!0}}},
n:{
eC:function(a,b,c){var z=new P.js(a,b,[c])
z.c=a.e
return z}}},
jl:{"^":"hX;"},
bV:{"^":"jt;",$ish:1,$isd:1},
q:{"^":"a;$ti",
gH:function(a){return new H.cv(a,this.gk(a),0,[H.bs(this,a,"q",0)])},
u:function(a,b){return this.m(a,b)},
en:function(a,b){var z,y,x
z=H.b([],[H.bs(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.E(x)
if(!(y<x))break
C.a.G(z,y,this.m(a,y));++y}return z},
em:function(a){return this.en(a,!0)},
i:function(a){return P.co(a,"[","]")}},
dF:{"^":"a_;"},
hi:{"^":"p:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
a_:{"^":"a;$ti",
F:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[H.bs(this,a,"a_",0),H.bs(this,a,"a_",1)]})
for(z=J.aE(this.gS(a));z.t();){y=z.gD(z)
b.$2(y,this.m(a,y))}},
gk:function(a){return J.aF(this.gS(a))},
i:function(a){return P.dG(a)},
$isS:1},
hZ:{"^":"a;$ti",
Z:function(a,b){var z
for(z=J.aE(H.z(b,"$ish",this.$ti,"$ash"));z.t();)this.h(0,z.gD(z))},
i:function(a){return P.co(this,"{","}")},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.d7("index"))
if(b<0)H.U(P.a3(b,0,null,"index",null))
for(z=P.eC(this,this.r,H.r(this,0)),y=0;z.t();){x=z.d
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
$ish:1},
hX:{"^":"hZ;"},
jt:{"^":"a+q;"}}],["","",,P,{"^":"",cm:{"^":"a;$ti"},bP:{"^":"i9;$ti"},fN:{"^":"cm;",
$ascm:function(){return[P.f,[P.d,P.C]]}},fZ:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},fY:{"^":"bP;a",
cG:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.j(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.c0("")
if(w>b)v.a+=C.b.aj(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fg(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbP:function(){return[P.f,P.f]}},iH:{"^":"fN;a"},iI:{"^":"bP;",
dz:function(a,b,c){var z,y,x,w
z=a.length
P.dS(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k6(0,0,x)
if(w.cL(a,b,z)!==z)w.bH(C.b.b3(a,z-1),0)
return C.K.aI(x,0,w.b)},
dw:function(a){return this.dz(a,0,null)},
$asbP:function(){return[P.f,[P.d,P.C]]}},k6:{"^":"a;a,b,c",
bH:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.j(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.j(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.j(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.j(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.j(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.j(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.j(z,y)
z[y]=128|a&63
return!1}},
cL:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.b3(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.aa(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bH(w,C.b.aa(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.j(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.j(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.j(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.j(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fP:function(a){var z=J.D(a)
if(!!z.$isp)return z.i(a)
return"Instance of '"+H.aJ(a)+"'"},
hf:function(a,b,c,d){var z,y
H.w(b,d)
z=J.h4(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.G(z,y,b)
return H.z(z,"$isd",[d],"$asd")},
hg:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gH(a);x.t();)C.a.h(y,H.w(x.gD(x),c))
if(b)return y
return H.z(J.b5(y),"$isd",z,"$asd")},
cD:function(a,b,c){var z,y
z=P.C
H.z(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.z(a,"$isaH",[z],"$asaH")
y=a.length
c=P.dS(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a6()
z=c<y}else z=!0
return H.dR(z?C.a.aI(a,b,c):a)}return P.ic(a,b,c)},
ic:function(a,b,c){var z,y,x
H.z(a,"$ish",[P.C],"$ash")
z=J.aE(a)
for(y=0;y<b;++y)if(!z.t())throw H.c(P.a3(b,0,y,null,null))
x=[]
for(;z.t();)x.push(z.gD(z))
return H.dR(x)},
hO:function(a,b,c){return new H.h8(a,H.h9(a,!1,!0,!1))},
cS:function(a,b,c,d){var z,y,x,w,v,u
H.z(a,"$isd",[P.C],"$asd")
if(c===C.h){z=$.$get$eN().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.dw(H.w(b,H.az(c,"cm",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.j(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cA(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.X(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fP(a)},
R:function(a){return new P.ex(a)},
f4:function(a){H.kR(a)},
L:{"^":"a;"},
"+bool":0,
bu:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.bu))return!1
return this.a===b.a&&this.b===b.b},
gI:function(a){var z=this.a
return(z^C.e.ay(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fz(H.hI(this))
y=P.bv(H.hG(this))
x=P.bv(H.hC(this))
w=P.bv(H.hD(this))
v=P.bv(H.hF(this))
u=P.bv(H.hH(this))
t=P.fA(H.hE(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fz:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bv:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"P;"},
"+double":0,
bw:{"^":"a;a",
a6:function(a,b){return C.e.a6(this.a,H.k(b,"$isbw").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.bw))return!1
return this.a===b.a},
gI:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fJ()
y=this.a
if(y<0)return"-"+new P.bw(0-y).i(0)
x=z.$1(C.e.az(y,6e7)%60)
w=z.$1(C.e.az(y,1e6)%60)
v=new P.fI().$1(y%1e6)
return""+C.e.az(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
n:{
fH:function(a,b,c,d,e,f){return new P.bw(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fI:{"^":"p:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fJ:{"^":"p:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Q:{"^":"a;"},
dM:{"^":"Q;",
i:function(a){return"Throw of null."}},
aj:{"^":"Q;a,b,c,d",
gaO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaN:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gaO()+y+x
if(!this.a)return w
v=this.gaN()
u=P.bQ(this.b)
return w+v+": "+H.e(u)},
n:{
bK:function(a,b,c){return new P.aj(!0,a,b,c)},
d7:function(a){return new P.aj(!1,null,a,"Must not be null")}}},
bZ:{"^":"aj;e,f,a,b,c,d",
gaO:function(){return"RangeError"},
gaN:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
n:{
c_:function(a,b,c){return new P.bZ(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.bZ(b,c,!0,a,d,"Invalid value")},
dS:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.E(a)
if(0<=a){if(typeof c!=="number")return H.E(c)
z=a>c}else z=!0
if(z)throw H.c(P.a3(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.E(c)
z=b>c}else z=!0
if(z)throw H.c(P.a3(b,a,c,"end",f))
return b}return c}}},
h_:{"^":"aj;e,k:f>,a,b,c,d",
gaO:function(){return"RangeError"},
gaN:function(){if(J.f9(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.e(z)},
n:{
H:function(a,b,c,d,e){var z=H.O(e!=null?e:J.aF(b))
return new P.h_(b,z,!0,a,c,"Index out of range")}}},
iF:{"^":"Q;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
ai:function(a){return new P.iF(a)}}},
iC:{"^":"Q;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eo:function(a){return new P.iC(a)}}},
cB:{"^":"Q;a",
i:function(a){return"Bad state: "+this.a},
n:{
e2:function(a){return new P.cB(a)}}},
fu:{"^":"Q;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bQ(z))+"."},
n:{
ar:function(a){return new P.fu(a)}}},
hx:{"^":"a;",
i:function(a){return"Out of Memory"},
$isQ:1},
e0:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isQ:1},
fx:{"^":"Q;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ex:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fU:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.b.aj(x,0,75)+"..."
return y+"\n"+x}},
bz:{"^":"a;"},
C:{"^":"P;"},
"+int":0,
h:{"^":"a;$ti",
bf:["cj",function(a,b){var z=H.az(this,"h",0)
return new H.cO(this,H.i(b,{func:1,ret:P.L,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gH(this)
for(y=0;z.t();)++y
return y},
ga7:function(a){var z,y
z=this.gH(this)
if(!z.t())throw H.c(H.cp())
y=z.gD(z)
if(z.t())throw H.c(H.h3())
return y},
u:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.d7("index"))
if(b<0)H.U(P.a3(b,0,null,"index",null))
for(z=this.gH(this),y=0;z.t();){x=z.gD(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
i:function(a){return P.h2(this,"(",")")}},
cq:{"^":"a;$ti"},
d:{"^":"a;$ti",$ish:1},
"+List":0,
S:{"^":"a;$ti"},
F:{"^":"a;",
gI:function(a){return P.a.prototype.gI.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
P:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gI:function(a){return H.ba(this)},
i:function(a){return"Instance of '"+H.aJ(this)+"'"},
toString:function(){return this.i(this)}},
ac:{"^":"a;"},
f:{"^":"a;",$isdN:1},
"+String":0,
c0:{"^":"a;ab:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
e4:function(a,b,c){var z=J.aE(b)
if(!z.t())return a
if(c.length===0){do a+=H.e(z.gD(z))
while(z.t())}else{a+=H.e(z.gD(z))
for(;z.t();)a=a+c+H.e(z.gD(z))}return a}}}}],["","",,W,{"^":"",
ci:function(a){var z=document.createElement("a")
return z},
dh:function(a,b){var z=document.createElement("canvas")
return z},
fK:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).X(z,a,b,c)
y.toString
z=W.v
z=new H.cO(new W.a8(y),H.i(new W.fL(),{func:1,ret:P.L,args:[z]}),[z])
return H.k(z.ga7(z),"$isJ")},
fM:function(a){H.k(a,"$isZ")
return"wheel"},
b1:function(a){var z,y,x
z="element tag unavailable"
try{y=J.ff(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a4(x)}return z},
c4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eB:function(a,b,c,d){var z,y
z=W.c4(W.c4(W.c4(W.c4(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eT:function(a,b){var z
H.i(a,{func:1,ret:-1,args:[b]})
z=$.K
if(z===C.d)return a
return z.dr(a,b)},
a6:{"^":"J;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kX:{"^":"l;0k:length=","%":"AccessibleNodeList"},
kY:{"^":"a6;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kZ:{"^":"a6;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
d9:{"^":"a6;",$isd9:1,"%":"HTMLBaseElement"},
fl:{"^":"l;","%":";Blob"},
bL:{"^":"a6;",$isbL:1,"%":"HTMLBodyElement"},
cl:{"^":"a6;",
bg:function(a,b,c){var z=a.getContext(b,P.kv(c,null))
return z},
$iscl:1,
"%":"HTMLCanvasElement"},
l4:{"^":"v;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l6:{"^":"fw;0k:length=","%":"CSSPerspective"},
b0:{"^":"l;",$isb0:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l7:{"^":"j0;0k:length=",
c9:function(a,b){var z=a.getPropertyValue(this.cC(a,b))
return z==null?"":z},
cC:function(a,b){var z,y
z=$.$get$dl()
y=z[b]
if(typeof y==="string")return y
y=this.dg(a,b)
z[b]=y
return y},
dg:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fF()+b
if(z in a)return z
return b},
gb0:function(a){return a.bottom},
ga_:function(a){return a.height},
gag:function(a){return a.left},
gbd:function(a){return a.right},
gat:function(a){return a.top},
ga0:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fv:{"^":"a;",
gag:function(a){return this.c9(a,"left")}},
dm:{"^":"l;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fw:{"^":"l;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l8:{"^":"dm;0k:length=","%":"CSSTransformValue"},
l9:{"^":"dm;0k:length=","%":"CSSUnparsedValue"},
la:{"^":"l;0k:length=","%":"DataTransferItemList"},
aG:{"^":"a6;",$isaG:1,"%":"HTMLDivElement"},
lb:{"^":"l;",
i:function(a){return String(a)},
"%":"DOMException"},
lc:{"^":"j2;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[[P.a1,P.P]]},
$asq:function(){return[[P.a1,P.P]]},
$ish:1,
$ash:function(){return[[P.a1,P.P]]},
$isd:1,
$asd:function(){return[[P.a1,P.P]]},
$ast:function(){return[[P.a1,P.P]]},
"%":"ClientRectList|DOMRectList"},
fG:{"^":"l;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga0(a))+" x "+H.e(this.ga_(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.bq(b,"$isa1",[P.P],"$asa1")
if(!z)return!1
z=J.aV(b)
return a.left===z.gag(b)&&a.top===z.gat(b)&&this.ga0(a)===z.ga0(b)&&this.ga_(a)===z.ga_(b)},
gI:function(a){return W.eB(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga0(a)&0x1FFFFFFF,this.ga_(a)&0x1FFFFFFF)},
gb0:function(a){return a.bottom},
ga_:function(a){return a.height},
gag:function(a){return a.left},
gbd:function(a){return a.right},
gat:function(a){return a.top},
ga0:function(a){return a.width},
$isa1:1,
$asa1:function(){return[P.P]},
"%":";DOMRectReadOnly"},
ld:{"^":"j4;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[P.f]},
$asq:function(){return[P.f]},
$ish:1,
$ash:function(){return[P.f]},
$isd:1,
$asd:function(){return[P.f]},
$ast:function(){return[P.f]},
"%":"DOMStringList"},
le:{"^":"l;0k:length=","%":"DOMTokenList"},
j_:{"^":"bV;bz:a<,b",
gk:function(a){return this.b.length},
m:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return H.k(z[b],"$isJ")},
h:function(a,b){this.a.appendChild(b)
return b},
gH:function(a){var z=this.em(this)
return new J.ak(z,z.length,0,[H.r(z,0)])},
$asq:function(){return[W.J]},
$ash:function(){return[W.J]},
$asd:function(){return[W.J]}},
J:{"^":"v;0ek:tagName=",
gdn:function(a){return new W.j5(a)},
gbL:function(a){return new W.j_(a,a.children)},
gbM:function(a){return P.hL(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.P)},
i:function(a){return a.localName},
X:["aK",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dw
if(z==null){z=H.b([],[W.af])
y=new W.dK(z)
C.a.h(z,W.ez(null))
C.a.h(z,W.eK())
$.dw=y
d=y}else d=z
z=$.dv
if(z==null){z=new W.eO(d)
$.dv=z
c=z}else{z.a=d
c=z}}if($.al==null){z=document
y=z.implementation.createHTMLDocument("")
$.al=y
$.cn=y.createRange()
y=$.al
y.toString
y=y.createElement("base")
H.k(y,"$isd9")
y.href=z.baseURI
$.al.head.appendChild(y)}z=$.al
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.k(y,"$isbL")}z=$.al
if(!!this.$isbL)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.al.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.I,a.tagName)){$.cn.selectNodeContents(x)
w=$.cn.createContextualFragment(b)}else{x.innerHTML=b
w=$.al.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.al.body
if(x==null?z!=null:x!==z)J.d6(x)
c.bh(w)
document.adoptNode(w)
return w},function(a,b,c){return this.X(a,b,c,null)},"dB",null,null,"geM",5,5,null],
ce:function(a,b,c,d){a.textContent=null
a.appendChild(this.X(a,b,c,d))},
cd:function(a,b){return this.ce(a,b,null,null)},
$isJ:1,
"%":";Element"},
fL:{"^":"p:14;",
$1:function(a){return!!J.D(H.k(a,"$isv")).$isJ}},
a2:{"^":"l;",$isa2:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
Z:{"^":"l;",
bJ:["cg",function(a,b,c,d){H.i(c,{func:1,args:[W.a2]})
if(c!=null)this.cA(a,b,c,!1)}],
cA:function(a,b,c,d){return a.addEventListener(b,H.br(H.i(c,{func:1,args:[W.a2]}),1),!1)},
$isZ:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eH|eI|eL|eM"},
b2:{"^":"fl;",$isb2:1,"%":"File"},
lf:{"^":"ja;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.b2]},
$asq:function(){return[W.b2]},
$ish:1,
$ash:function(){return[W.b2]},
$isd:1,
$asd:function(){return[W.b2]},
$ast:function(){return[W.b2]},
"%":"FileList"},
lg:{"^":"Z;0k:length=","%":"FileWriter"},
lh:{"^":"a6;0k:length=","%":"HTMLFormElement"},
b4:{"^":"l;",$isb4:1,"%":"Gamepad"},
li:{"^":"l;0k:length=","%":"History"},
lj:{"^":"jn;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$ish:1,
$ash:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
b6:{"^":"cH;",$isb6:1,"%":"KeyboardEvent"},
ln:{"^":"l;",
i:function(a){return String(a)},
"%":"Location"},
lo:{"^":"l;0k:length=","%":"MediaList"},
lp:{"^":"Z;",
bJ:function(a,b,c,d){H.i(c,{func:1,args:[W.a2]})
if(b==="message")a.start()
this.cg(a,b,c,!1)},
"%":"MessagePort"},
lq:{"^":"ju;",
m:function(a,b){return P.ap(a.get(H.B(b)))},
F:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
gS:function(a){var z=H.b([],[P.f])
this.F(a,new W.hn(z))
return z},
gk:function(a){return a.size},
$asa_:function(){return[P.f,null]},
$isS:1,
$asS:function(){return[P.f,null]},
"%":"MIDIInputMap"},
hn:{"^":"p:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lr:{"^":"jv;",
m:function(a,b){return P.ap(a.get(H.B(b)))},
F:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
gS:function(a){var z=H.b([],[P.f])
this.F(a,new W.ho(z))
return z},
gk:function(a){return a.size},
$asa_:function(){return[P.f,null]},
$isS:1,
$asS:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
ho:{"^":"p:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b7:{"^":"l;",$isb7:1,"%":"MimeType"},
ls:{"^":"jx;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.b7]},
$asq:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$isd:1,
$asd:function(){return[W.b7]},
$ast:function(){return[W.b7]},
"%":"MimeTypeArray"},
aa:{"^":"cH;",$isaa:1,"%":"PointerEvent;DragEvent|MouseEvent"},
a8:{"^":"bV;a",
ga7:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.e2("No elements"))
if(y>1)throw H.c(P.e2("More than one element"))
return z.firstChild},
Z:function(a,b){var z,y,x,w
H.z(b,"$ish",[W.v],"$ash")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gH:function(a){var z=this.a.childNodes
return new W.dx(z,z.length,-1,[H.bs(C.L,z,"t",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$asq:function(){return[W.v]},
$ash:function(){return[W.v]},
$asd:function(){return[W.v]}},
v:{"^":"Z;0bc:previousSibling=",
ec:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.ci(a):z},
$isv:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
lz:{"^":"l;",
ea:[function(a){return a.previousNode()},"$0","gbc",1,0,16],
"%":"NodeIterator"},
ht:{"^":"jz;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$ish:1,
$ash:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
b9:{"^":"l;0k:length=",$isb9:1,"%":"Plugin"},
lD:{"^":"jD;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.b9]},
$asq:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$ast:function(){return[W.b9]},
"%":"PluginArray"},
lF:{"^":"jJ;",
m:function(a,b){return P.ap(a.get(H.B(b)))},
F:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
gS:function(a){var z=H.b([],[P.f])
this.F(a,new W.hU(z))
return z},
gk:function(a){return a.size},
$asa_:function(){return[P.f,null]},
$isS:1,
$asS:function(){return[P.f,null]},
"%":"RTCStatsReport"},
hU:{"^":"p:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lH:{"^":"a6;0k:length=","%":"HTMLSelectElement"},
bb:{"^":"Z;",$isbb:1,"%":"SourceBuffer"},
lI:{"^":"eI;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bb]},
$asq:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$ast:function(){return[W.bb]},
"%":"SourceBufferList"},
bc:{"^":"l;",$isbc:1,"%":"SpeechGrammar"},
lJ:{"^":"jP;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bc]},
$asq:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$ast:function(){return[W.bc]},
"%":"SpeechGrammarList"},
bd:{"^":"l;0k:length=",$isbd:1,"%":"SpeechRecognitionResult"},
lL:{"^":"jS;",
m:function(a,b){return a.getItem(H.B(b))},
F:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gS:function(a){var z=H.b([],[P.f])
this.F(a,new W.i8(z))
return z},
gk:function(a){return a.length},
$asa_:function(){return[P.f,P.f]},
$isS:1,
$asS:function(){return[P.f,P.f]},
"%":"Storage"},
i8:{"^":"p:28;a",
$2:function(a,b){return C.a.h(this.a,a)}},
be:{"^":"l;",$isbe:1,"%":"CSSStyleSheet|StyleSheet"},
id:{"^":"a6;",
X:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
z=W.fK("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a8(y).Z(0,new W.a8(z))
return y},
"%":"HTMLTableElement"},
lN:{"^":"a6;",
X:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.r.X(z.createElement("table"),b,c,d)
z.toString
z=new W.a8(z)
x=z.ga7(z)
x.toString
z=new W.a8(x)
w=z.ga7(z)
y.toString
w.toString
new W.a8(y).Z(0,new W.a8(w))
return y},
"%":"HTMLTableRowElement"},
lO:{"^":"a6;",
X:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.r.X(z.createElement("table"),b,c,d)
z.toString
z=new W.a8(z)
x=z.ga7(z)
y.toString
x.toString
new W.a8(y).Z(0,new W.a8(x))
return y},
"%":"HTMLTableSectionElement"},
e7:{"^":"a6;",$ise7:1,"%":"HTMLTemplateElement"},
bf:{"^":"Z;",$isbf:1,"%":"TextTrack"},
bg:{"^":"Z;",$isbg:1,"%":"TextTrackCue|VTTCue"},
lQ:{"^":"jZ;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bg]},
$asq:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$ast:function(){return[W.bg]},
"%":"TextTrackCueList"},
lR:{"^":"eM;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bf]},
$asq:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$ast:function(){return[W.bf]},
"%":"TextTrackList"},
lS:{"^":"l;0k:length=","%":"TimeRanges"},
bh:{"^":"l;",$isbh:1,"%":"Touch"},
aK:{"^":"cH;",$isaK:1,"%":"TouchEvent"},
lT:{"^":"k3;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bh]},
$asq:function(){return[W.bh]},
$ish:1,
$ash:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$ast:function(){return[W.bh]},
"%":"TouchList"},
lU:{"^":"l;0k:length=","%":"TrackDefaultList"},
lW:{"^":"l;",
ea:[function(a){return a.previousNode()},"$0","gbc",1,0,16],
"%":"TreeWalker"},
cH:{"^":"a2;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lY:{"^":"l;",
i:function(a){return String(a)},
"%":"URL"},
lZ:{"^":"Z;0k:length=","%":"VideoTrackList"},
bk:{"^":"aa;",
gdE:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.ai("deltaY is not supported"))},
gdD:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.ai("deltaX is not supported"))},
$isbk:1,
"%":"WheelEvent"},
iS:{"^":"Z;",
d7:function(a,b){return a.requestAnimationFrame(H.br(H.i(b,{func:1,ret:-1,args:[P.P]}),1))},
cK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ew:{"^":"v;",$isew:1,"%":"Attr"},
m3:{"^":"ka;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.b0]},
$asq:function(){return[W.b0]},
$ish:1,
$ash:function(){return[W.b0]},
$isd:1,
$asd:function(){return[W.b0]},
$ast:function(){return[W.b0]},
"%":"CSSRuleList"},
m4:{"^":"fG;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.bq(b,"$isa1",[P.P],"$asa1")
if(!z)return!1
z=J.aV(b)
return a.left===z.gag(b)&&a.top===z.gat(b)&&a.width===z.ga0(b)&&a.height===z.ga_(b)},
gI:function(a){return W.eB(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga_:function(a){return a.height},
ga0:function(a){return a.width},
"%":"ClientRect|DOMRect"},
m6:{"^":"kc;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.b4]},
$asq:function(){return[W.b4]},
$ish:1,
$ash:function(){return[W.b4]},
$isd:1,
$asd:function(){return[W.b4]},
$ast:function(){return[W.b4]},
"%":"GamepadList"},
m9:{"^":"ke;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.v]},
$asq:function(){return[W.v]},
$ish:1,
$ash:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$ast:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ma:{"^":"kg;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.bd]},
$asq:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$ast:function(){return[W.bd]},
"%":"SpeechRecognitionResultList"},
mb:{"^":"ki;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isx:1,
$asx:function(){return[W.be]},
$asq:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$ast:function(){return[W.be]},
"%":"StyleSheetList"},
iY:{"^":"dF;bz:a<",
F:function(a,b){var z,y,x,w,v
H.i(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=this.gS(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gS:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.f])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.k(z[w],"$isew")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asa_:function(){return[P.f,P.f]},
$asS:function(){return[P.f,P.f]}},
j5:{"^":"iY;a",
m:function(a,b){return this.a.getAttribute(H.B(b))},
gk:function(a){return this.gS(this).length}},
j6:{"^":"cC;a,b,c,$ti",
dT:function(a,b,c,d){var z=H.r(this,0)
H.i(a,{func:1,ret:-1,args:[z]})
H.i(c,{func:1,ret:-1})
return W.T(this.a,this.b,a,!1,z)}},
m5:{"^":"j6;a,b,c,$ti"},
j7:{"^":"e3;a,b,c,d,e,$ti",
di:function(){var z=this.d
if(z!=null&&this.a<=0)J.fb(this.b,this.c,z,!1)},
n:{
T:function(a,b,c,d,e){var z=c==null?null:W.eT(new W.j8(c),W.a2)
z=new W.j7(0,a,b,z,!1,[e])
z.di()
return z}}},
j8:{"^":"p:5;a",
$1:function(a){return this.a.$1(H.k(a,"$isa2"))}},
bG:{"^":"a;a",
cu:function(a){var z,y
z=$.$get$cQ()
if(z.a===0){for(y=0;y<262;++y)z.G(0,C.H[y],W.kC())
for(y=0;y<12;++y)z.G(0,C.l[y],W.kD())}},
af:function(a){return $.$get$eA().K(0,W.b1(a))},
a4:function(a,b,c){var z,y,x
z=W.b1(a)
y=$.$get$cQ()
x=y.m(0,H.e(z)+"::"+b)
if(x==null)x=y.m(0,"*::"+b)
if(x==null)return!1
return H.cX(x.$4(a,b,c,this))},
$isaf:1,
n:{
ez:function(a){var z,y
z=W.ci(null)
y=window.location
z=new W.bG(new W.jK(z,y))
z.cu(a)
return z},
m7:[function(a,b,c,d){H.k(a,"$isJ")
H.B(b)
H.B(c)
H.k(d,"$isbG")
return!0},"$4","kC",16,0,18],
m8:[function(a,b,c,d){var z,y,x,w,v
H.k(a,"$isJ")
H.B(b)
H.B(c)
z=H.k(d,"$isbG").a
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
return z},"$4","kD",16,0,18]}},
t:{"^":"a;$ti",
gH:function(a){return new W.dx(a,this.gk(a),-1,[H.bs(this,a,"t",0)])}},
dK:{"^":"a;a",
af:function(a){return C.a.bK(this.a,new W.hv(a))},
a4:function(a,b,c){return C.a.bK(this.a,new W.hu(a,b,c))},
$isaf:1},
hv:{"^":"p:19;a",
$1:function(a){return H.k(a,"$isaf").af(this.a)}},
hu:{"^":"p:19;a,b,c",
$1:function(a){return H.k(a,"$isaf").a4(this.a,this.b,this.c)}},
jL:{"^":"a;",
cv:function(a,b,c,d){var z,y,x
this.a.Z(0,c)
z=b.bf(0,new W.jM())
y=b.bf(0,new W.jN())
this.b.Z(0,z)
x=this.c
x.Z(0,C.J)
x.Z(0,y)},
af:function(a){return this.a.K(0,W.b1(a))},
a4:["cm",function(a,b,c){var z,y
z=W.b1(a)
y=this.c
if(y.K(0,H.e(z)+"::"+b))return this.d.dl(c)
else if(y.K(0,"*::"+b))return this.d.dl(c)
else{y=this.b
if(y.K(0,H.e(z)+"::"+b))return!0
else if(y.K(0,"*::"+b))return!0
else if(y.K(0,H.e(z)+"::*"))return!0
else if(y.K(0,"*::*"))return!0}return!1}],
$isaf:1},
jM:{"^":"p:20;",
$1:function(a){return!C.a.K(C.l,H.B(a))}},
jN:{"^":"p:20;",
$1:function(a){return C.a.K(C.l,H.B(a))}},
jW:{"^":"jL;e,a,b,c,d",
a4:function(a,b,c){if(this.cm(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.K(0,b)
return!1},
n:{
eK:function(){var z,y,x,w,v
z=P.f
y=P.dE(C.k,z)
x=H.r(C.k,0)
w=H.i(new W.jX(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.jW(y,P.bC(null,null,null,z),P.bC(null,null,null,z),P.bC(null,null,null,z),null)
y.cv(null,new H.hl(C.k,w,[x,z]),v,null)
return y}}},
jX:{"^":"p:24;",
$1:function(a){return"TEMPLATE::"+H.e(H.B(a))}},
jV:{"^":"a;",
af:function(a){var z=J.D(a)
if(!!z.$isdX)return!1
z=!!z.$iscE
if(z&&W.b1(a)==="foreignObject")return!1
if(z)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.b.aH(b,"on"))return!1
return this.af(a)},
$isaf:1},
dx:{"^":"a;a,b,c,0d,$ti",
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fa(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gD:function(a){return this.d}},
af:{"^":"a;"},
jK:{"^":"a;a,b",$islX:1},
eO:{"^":"a;a",
bh:function(a){new W.k7(this).$2(a,null)},
an:function(a,b){if(b==null)J.d6(a)
else b.removeChild(a)},
da:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fd(a)
x=y.gbz().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a4(t)}v="element unprintable"
try{v=J.X(a)}catch(t){H.a4(t)}try{u=W.b1(a)
this.d9(H.k(a,"$isJ"),b,z,v,u,H.k(y,"$isS"),H.B(x))}catch(t){if(H.a4(t) instanceof P.aj)throw t
else{this.an(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
d9:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.an(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.af(a)){this.an(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a4(a,"is",g)){this.an(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gS(f)
y=H.b(z.slice(0),[H.r(z,0)])
for(x=f.gS(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.j(y,x)
w=y[x]
if(!this.a.a4(a,J.fh(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.e(e)+" "+w+'="'+H.e(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.D(a).$ise7)this.bh(a.content)},
$islA:1},
k7:{"^":"p:23;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.da(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.an(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fe(z)}catch(w){H.a4(w)
v=H.k(z,"$isv")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.k(y,"$isv")}}},
j0:{"^":"l+fv;"},
j1:{"^":"l+q;"},
j2:{"^":"j1+t;"},
j3:{"^":"l+q;"},
j4:{"^":"j3+t;"},
j9:{"^":"l+q;"},
ja:{"^":"j9+t;"},
jm:{"^":"l+q;"},
jn:{"^":"jm+t;"},
ju:{"^":"l+a_;"},
jv:{"^":"l+a_;"},
jw:{"^":"l+q;"},
jx:{"^":"jw+t;"},
jy:{"^":"l+q;"},
jz:{"^":"jy+t;"},
jC:{"^":"l+q;"},
jD:{"^":"jC+t;"},
jJ:{"^":"l+a_;"},
eH:{"^":"Z+q;"},
eI:{"^":"eH+t;"},
jO:{"^":"l+q;"},
jP:{"^":"jO+t;"},
jS:{"^":"l+a_;"},
jY:{"^":"l+q;"},
jZ:{"^":"jY+t;"},
eL:{"^":"Z+q;"},
eM:{"^":"eL+t;"},
k2:{"^":"l+q;"},
k3:{"^":"k2+t;"},
k9:{"^":"l+q;"},
ka:{"^":"k9+t;"},
kb:{"^":"l+q;"},
kc:{"^":"kb+t;"},
kd:{"^":"l+q;"},
ke:{"^":"kd+t;"},
kf:{"^":"l+q;"},
kg:{"^":"kf+t;"},
kh:{"^":"l+q;"},
ki:{"^":"kh+t;"}}],["","",,P,{"^":"",
ap:function(a){var z,y,x,w,v
if(a==null)return
z=P.dD(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.B(y[w])
z.G(0,v,a[v])}return z},
kv:function(a,b){var z={}
a.F(0,new P.kw(z))
return z},
dt:function(){var z=$.ds
if(z==null){z=J.cg(window.navigator.userAgent,"Opera",0)
$.ds=z}return z},
fF:function(){var z,y
z=$.dp
if(z!=null)return z
y=$.dq
if(y==null){y=J.cg(window.navigator.userAgent,"Firefox",0)
$.dq=y}if(y)z="-moz-"
else{y=$.dr
if(y==null){y=!P.dt()&&J.cg(window.navigator.userAgent,"Trident/",0)
$.dr=y}if(y)z="-ms-"
else z=P.dt()?"-o-":"-webkit-"}$.dp=z
return z},
kw:{"^":"p:12;a",
$2:function(a,b){this.a[a]=b}},
fR:{"^":"bV;a,b",
gaR:function(){var z,y,x
z=this.b
y=H.az(z,"q",0)
x=W.J
return new H.hj(new H.cO(z,H.i(new P.fS(),{func:1,ret:P.L,args:[y]}),[y]),H.i(new P.fT(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aF(this.gaR().a)},
m:function(a,b){var z=this.gaR()
return z.b.$1(J.ch(z.a,b))},
gH:function(a){var z=P.hg(this.gaR(),!1,W.J)
return new J.ak(z,z.length,0,[H.r(z,0)])},
$asq:function(){return[W.J]},
$ash:function(){return[W.J]},
$asd:function(){return[W.J]}},
fS:{"^":"p:14;",
$1:function(a){return!!J.D(H.k(a,"$isv")).$isJ}},
fT:{"^":"p:22;",
$1:function(a){return H.aX(H.k(a,"$isv"),"$isJ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jo:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jE:{"^":"a;$ti",
gbd:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.w(z+this.c,H.r(this,0))},
gb0:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.w(z+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.e(this.a)+", "+H.e(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bq(b,"$isa1",[P.P],"$asa1")
if(!z)return!1
z=this.a
y=J.aV(b)
x=y.gag(b)
if(z==null?x==null:z===x){x=this.b
w=y.gat(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.r(this,0)
if(H.w(z+this.c,w)===y.gbd(b)){if(typeof x!=="number")return x.E()
z=H.w(x+this.d,w)===y.gb0(b)}else z=!1}else z=!1}else z=!1
return z},
gI:function(a){var z,y,x,w,v
z=this.a
y=J.aD(z)
x=this.b
w=J.aD(x)
if(typeof z!=="number")return z.E()
v=H.r(this,0)
z=H.w(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.w(x+this.d,v)
return P.jo(P.c5(P.c5(P.c5(P.c5(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a1:{"^":"jE;ag:a>,at:b>,a0:c>,a_:d>,$ti",n:{
hL:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a6()
if(c<0)z=-c*0
else z=c
H.w(z,e)
if(typeof d!=="number")return d.a6()
if(d<0)y=-d*0
else y=d
return new P.a1(a,b,z,H.w(y,e),[e])}}}}],["","",,P,{"^":"",bB:{"^":"l;",$isbB:1,"%":"SVGLength"},lm:{"^":"jq;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bB]},
$ish:1,
$ash:function(){return[P.bB]},
$isd:1,
$asd:function(){return[P.bB]},
$ast:function(){return[P.bB]},
"%":"SVGLengthList"},bD:{"^":"l;",$isbD:1,"%":"SVGNumber"},lB:{"^":"jB;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bD]},
$ish:1,
$ash:function(){return[P.bD]},
$isd:1,
$asd:function(){return[P.bD]},
$ast:function(){return[P.bD]},
"%":"SVGNumberList"},lE:{"^":"l;0k:length=","%":"SVGPointList"},dX:{"^":"cE;",$isdX:1,"%":"SVGScriptElement"},lM:{"^":"jU;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.m(a,b)},
$asq:function(){return[P.f]},
$ish:1,
$ash:function(){return[P.f]},
$isd:1,
$asd:function(){return[P.f]},
$ast:function(){return[P.f]},
"%":"SVGStringList"},cE:{"^":"J;",
gbL:function(a){return new P.fR(a,new W.a8(a))},
X:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.af])
C.a.h(z,W.ez(null))
C.a.h(z,W.eK())
C.a.h(z,new W.jV())
c=new W.eO(new W.dK(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.n).dB(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a8(w)
u=z.ga7(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscE:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bE:{"^":"l;",$isbE:1,"%":"SVGTransform"},lV:{"^":"k5;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bE]},
$ish:1,
$ash:function(){return[P.bE]},
$isd:1,
$asd:function(){return[P.bE]},
$ast:function(){return[P.bE]},
"%":"SVGTransformList"},jp:{"^":"l+q;"},jq:{"^":"jp+t;"},jA:{"^":"l+q;"},jB:{"^":"jA+t;"},jT:{"^":"l+q;"},jU:{"^":"jT+t;"},k4:{"^":"l+q;"},k5:{"^":"k4+t;"}}],["","",,P,{"^":"",l_:{"^":"l;0k:length=","%":"AudioBuffer"},l0:{"^":"iZ;",
m:function(a,b){return P.ap(a.get(H.B(b)))},
F:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ap(y.value[1]))}},
gS:function(a){var z=H.b([],[P.f])
this.F(a,new P.fj(z))
return z},
gk:function(a){return a.size},
$asa_:function(){return[P.f,null]},
$isS:1,
$asS:function(){return[P.f,null]},
"%":"AudioParamMap"},fj:{"^":"p:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},l1:{"^":"Z;0k:length=","%":"AudioTrackList"},fk:{"^":"Z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lC:{"^":"fk;0k:length=","%":"OfflineAudioContext"},iZ:{"^":"l+a_;"}}],["","",,P,{"^":"",dV:{"^":"l;",$isdV:1,"%":"WebGLRenderingContext"},ix:{"^":"l;",$isix:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lK:{"^":"jR;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.ap(a.item(b))},
u:function(a,b){return this.m(a,b)},
$asq:function(){return[[P.S,,,]]},
$ish:1,
$ash:function(){return[[P.S,,,]]},
$isd:1,
$asd:function(){return[[P.S,,,]]},
$ast:function(){return[[P.S,,,]]},
"%":"SQLResultSetRowList"},jQ:{"^":"l+q;"},jR:{"^":"jQ+t;"}}],["","",,O,{"^":"",ft:{"^":"a;0a,0b,0c,0d,$ti",
cc:function(a,b,c){var z={func:1,ret:-1,args:[P.C,[P.h,H.r(this,0)]]}
H.i(a,z)
H.i(c,z)
this.b=b
this.c=a
this.d=c},
bi:function(a,b){return this.cc(a,null,b)},
d2:function(a){H.z(a,"$ish",this.$ti,"$ash")
return!0},
cN:function(a,b){var z
H.z(b,"$ish",this.$ti,"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gH:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.r(z,0)])},
u:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$ish:1,
n:{
dj:function(a){var z=new O.ft([a])
z.a=H.b([],[a])
return z}}},cw:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gC:function(){var z=this.b
if(z==null){z=D.at()
this.b=z}return z},
cr:function(a){var z=this.b
if(!(z==null))z.M(a)},
a8:function(){return this.cr(null)},
gap:function(a){var z=this.a
if(z.length>0)return C.a.gaD(z)
else return V.dI()},
bX:function(a){var z=this.a
if(a==null)C.a.h(z,V.dI())
else C.a.h(z,a)
this.a8()},
bb:function(){var z=this.a
if(z.length>0){z.pop()
this.a8()}}}}],["","",,E,{"^":"",da:{"^":"a;"},as:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0L:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
br:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.r(z,0)]);z.t();){y=z.d
if(y.f==null)y.br()}},
sbk:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gC().N(0,this.gbS())
y=this.c
if(y!=null)y.gC().h(0,this.gbS())
x=new D.M("shape",z,this.c,this,[F.dZ])
x.b=!0
this.T(x)}},
sc0:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gC().N(0,this.gbT())
y=this.f
this.f=a
if(a!=null)a.gC().h(0,this.gbT())
this.br()
x=new D.M("technique",y,this.f,this,[O.cF])
x.b=!0
this.T(x)}},
saq:function(a){var z,y
if(!J.W(this.r,a)){z=this.r
if(z!=null)z.gC().N(0,this.gbR())
if(a!=null)a.gC().h(0,this.gbR())
this.r=a
y=new D.M("mover",z,a,this,[U.bY])
y.b=!0
this.T(y)}},
c4:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.d
z.sc5(z.a+z.d*b.y)
z.sbV(0,z.b+z.e*b.y)
z.sbZ(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.au(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.v(0,V.au(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.v(0,V.au(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.aF(0)}u=z.x}else u=null
if(!J.W(u,this.x)){t=this.x
this.x=u
s=new D.M("matrix",t,u,this,[V.bX])
s.b=!0
this.T(s)}for(z=this.y.a,z=new J.ak(z,z.length,0,[H.r(z,0)]);z.t();)z.d.c4(0,b)},
ai:function(a){var z,y,x,w,v,u,t,s
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gap(z))
else C.a.h(z.a,y.v(0,z.gap(z)))
z.a8()
a.bY(this.f)
z=a.dy
x=(z&&C.a).gaD(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.m(0,"Depth")
if(w==null){z=a.a
w=new A.fC(z,"Depth")
w.cp(z,"Depth")
y=$.fE
v=$.fD
w.c=y
w.d=v
w.e=w.by(y,35633)
w.f=w.by(w.d,35632)
y=z.createProgram()
w.r=y
z.attachShader(y,w.e)
z.attachShader(w.r,w.f)
z.linkProgram(w.r)
if(!H.cX(z.getProgramParameter(w.r,35714))){u=z.getProgramInfoLog(w.r)
z.deleteProgram(w.r)
H.U(P.R("Failed to link shader: "+H.e(u)))}w.dc()
w.de()
w.z=w.x.m(0,"posAttr")
w.Q=H.aX(w.y.m(0,"objClr"),"$iscK")
w.ch=H.aX(w.y.m(0,"fogClr"),"$iscK")
w.cx=H.aX(w.y.m(0,"fogStart"),"$iscI")
w.cy=H.aX(w.y.m(0,"fogStop"),"$iscI")
w.db=H.aX(w.y.m(0,"viewObjMat"),"$iscL")
w.dx=H.aX(w.y.m(0,"projMat"),"$iscL")
if(a.fr.bN(0,"Depth"))H.U(P.R('Shader cache already contains a shader by the name "Depth".'))
a.fr.G(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.de)){this.e=null
y=null}if(y==null){z=this.d.ds(new Z.iQ(a.a),$.$get$an())
y=z.dH($.$get$an())
v=x.a
y.e=v.z.c
this.e=z
z=v}a.a.useProgram(z.r)
z.x.dG()
y=x.b
v=z.Q
v.toString
t=y.a
s=y.b
y=y.c
v.a.uniform3f(v.d,t,s,y)
y=x.c
s=z.ch
s.toString
t=y.a
v=y.b
y=y.c
s.a.uniform3f(s.d,t,v,y)
y=x.d
v=z.cx
v.a.uniform1f(v.d,y)
y=x.e
v=z.cy
v.a.uniform1f(v.d,y)
y=a.cy
y=y.gap(y)
v=z.dx
v.toString
v.bj(y.c2(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gap(y)
v=a.dx
v=y.v(0,v.gap(v))
a.cx=v
y=v}z=z.db
z.toString
z.bj(y.c2(0,!0))
y=this.e
y.aZ(a)
y.ai(a)
y.eq(a)
y=x.a
y.toString
a.a.useProgram(null)
y.x.dF()}for(z=this.y.a,z=new J.ak(z,z.length,0,[H.r(z,0)]);z.t();)z.d.ai(a)
a.bW()
a.dx.bb()},
T:function(a){var z=this.z
if(!(z==null))z.M(a)},
V:function(){return this.T(null)},
e0:[function(a){H.k(a,"$isG")
this.e=null
this.T(a)},function(){return this.e0(null)},"eR","$1","$0","gbS",0,2,2],
e1:[function(a){this.T(H.k(a,"$isG"))},function(){return this.e1(null)},"eS","$1","$0","gbT",0,2,2],
e_:[function(a){this.T(H.k(a,"$isG"))},function(){return this.e_(null)},"eQ","$1","$0","gbR",0,2,2],
dY:[function(a){this.T(H.k(a,"$isG"))},function(){return this.dY(null)},"eO","$1","$0","gbQ",0,2,2],
eN:[function(a,b){var z,y,x,w,v,u,t,s
H.z(b,"$ish",[E.as],"$ash")
for(z=b.length,y=this.gbQ(),x={func:1,ret:-1,args:[D.G]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gL()==null){t=new D.bx()
t.d=0
u.sL(t)}t=u.gL()
t.toString
H.i(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.V()},"$2","gdX",8,0,6],
eP:[function(a,b){var z,y,x,w,v
H.z(b,"$ish",[E.as],"$ash")
for(z=b.length,y=this.gbQ(),x=0;x<b.length;b.length===z||(0,H.y)(b),++x){w=b[x]
if(w!=null){if(w.gL()==null){v=new D.bx()
v.d=0
w.sL(v)}w.gL().N(0,y)}}this.V()},"$2","gdZ",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isdJ:1},hP:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
cn:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.bu(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cw()
y=[V.bX]
z.a=H.b([],y)
z.gC().h(0,new E.hR(this))
this.cy=z
z=new O.cw()
z.a=H.b([],y)
z.gC().h(0,new E.hS(this))
this.db=z
z=new O.cw()
z.a=H.b([],y)
z.gC().h(0,new E.hT(this))
this.dx=z
z=H.b([],[O.cF])
this.dy=z
C.a.h(z,null)
this.fr=new H.aI(0,0,[P.f,A.dY])},
bY:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaD(z):a;(z&&C.a).h(z,y)},
bW:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hQ:function(a,b){var z=new E.hP(a,b)
z.cn(a,b)
return z}}},hR:{"^":"p:10;a",
$1:function(a){var z
H.k(a,"$isG")
z=this.a
z.z=null
z.ch=null}},hS:{"^":"p:10;a",
$1:function(a){var z
H.k(a,"$isG")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hT:{"^":"p:10;a",
$1:function(a){var z
H.k(a,"$isG")
z=this.a
z.ch=null
z.cx=null}},ig:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0L:x@,0y,0z,0Q,0ch,0cx,0cy",
ct:[function(a){var z
H.k(a,"$isG")
z=this.x
if(!(z==null))z.M(a)
this.ef()},function(){return this.ct(null)},"cs","$1","$0","gbn",0,2,2],
bE:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.v()
if(typeof z!=="number")return H.E(z)
x=C.c.bO(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.v()
w=C.c.bO(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.e9(C.i,this.gee())}},
ef:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.i(new E.ii(this),{func:1,ret:-1,args:[P.P]})
C.u.cK(z)
C.u.d7(z,W.eT(y,P.P))}},"$0","gee",0,0,1],
ed:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.bE()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.bu(w,!1)
x.y=P.fH(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.a8()
w=x.db
C.a.sk(w.a,0)
w.a8()
w=x.dx
C.a.sk(w.a,0)
w.a8()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ai(this.e)}}catch(v){z=H.a4(v)
y=H.aW(v)
P.f4("Error: "+H.e(z))
P.f4("Stack: "+H.e(y))
throw H.c(z)}},
n:{
ih:function(a,b,c,d,e){var z,y,x,w
z=J.D(a)
if(!!z.$iscl)return E.e8(a,!0,!0,!0,!1)
y=W.dh(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbL(a).h(0,y)
w=E.e8(y,!0,!0,!0,!1)
w.a=a
return w},
e8:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ig()
y=P.he(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
x=C.f.bg(a,"webgl",y)
x=H.k(x==null?C.f.bg(a,"experimental-webgl",y):x,"$isdV")
if(x==null)H.U(P.R("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hQ(x,a)
w=new T.ie(x)
w.b=H.O(x.getParameter(3379))
w.c=H.O(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iG(a)
v=new X.hb()
v.c=new X.b8(!1,!1,!1)
v.d=P.bC(null,null,null,P.C)
w.b=v
v=new X.hp(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hh(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.il(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.e3,P.a]])
w.z=v
u=document
t=W.aa
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.T(u,"contextmenu",H.i(w.gcR(),s),!1,t))
v=w.z
r=W.a2
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.T(a,"focus",H.i(w.gcU(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.T(a,"blur",H.i(w.gcO(),q),!1,r))
v=w.z
p=W.b6
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.T(u,"keyup",H.i(w.gcW(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.T(u,"keydown",H.i(w.gcV(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.T(a,"mousedown",H.i(w.gcY(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mouseup",H.i(w.gd_(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mousemove",H.i(w.gcZ(),s),!1,t))
p=w.z
o=W.bk;(p&&C.a).h(p,W.T(a,H.B(W.fM(a)),H.i(w.gd0(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.T(u,"mousemove",H.i(w.gcS(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.T(u,"mouseup",H.i(w.gcT(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.T(u,"pointerlockchange",H.i(w.gd1(),q),!1,r))
r=w.z
q=W.aK
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.T(a,"touchstart",H.i(w.gd5(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchend",H.i(w.gd3(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchmove",H.i(w.gd4(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.bu(Date.now(),!1)
z.cy=0
z.bE()
return z}}},ii:{"^":"p:38;a",
$1:function(a){var z
H.kQ(a)
z=this.a
if(z.ch){z.ch=!1
z.ed()}}}}],["","",,Z,{"^":"",eu:{"^":"a;a,b",n:{
cN:function(a,b,c){var z
H.z(c,"$isd",[P.C],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cT(c)),35044)
a.bindBuffer(b,null)
return new Z.eu(b,z)}}},dd:{"^":"da;a,b,c,d,e",
aZ:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.a4(y)
x=P.R('Failed to bind buffer attribute "'+J.X(this.a)+'": '+H.e(z))
throw H.c(x)}},
i:function(a){return"["+J.X(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.e(this.e)+"]"}},iQ:{"^":"a;a",$isl2:1},de:{"^":"a;a,0b,c,d",
dH:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aZ:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aZ(a)},
eq:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ai:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.j(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.f]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.X(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$islP:1},bS:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aJ(this.c)+"'")+"]"}},eq:{"^":"a;a",
gbl:function(a){var z,y
z=this.a
y=(z&$.$get$an().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aP().a)!==0)y+=2
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$bi().a)!==0)y+=3
if((z&$.$get$bj().a)!==0)y+=4
if((z&$.$get$aR().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
dm:function(a){var z,y,x
z=$.$get$an()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bi()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$et()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.eq))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.f])
y=this.a
if((y&$.$get$an().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bi().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bj().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
n:{
a7:function(a){return new Z.eq(a)}}}}],["","",,D,{"^":"",fo:{"^":"a;"},bx:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.G]}
H.i(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
N:function(a,b){var z,y
H.i(b,{func:1,ret:-1,args:[D.G]})
z=this.a
z=z==null?null:C.a.K(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).N(z,b)||!1}else y=!1
return y},
M:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.G(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.F(y,new D.fQ(z))
return!0},
eg:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.M(y)}}},
aF:function(a){return this.eg(a,!0,!1)},
n:{
at:function(){var z=new D.bx()
z.d=0
return z}}},fQ:{"^":"p:26;a",
$1:function(a){var z
H.i(a,{func:1,ret:-1,args:[D.G]})
z=this.a.a
z.b
a.$1(z)}},G:{"^":"a;a,0b"},h0:{"^":"G;c,d,a,0b,$ti"},h1:{"^":"G;c,d,a,0b,$ti"},M:{"^":"G;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}}],["","",,X,{"^":"",df:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.df))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)},
n:{"^":"l3<"}},dA:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}},hb:{"^":"a;0a,0b,0c,0d",
e7:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
e3:function(a){this.c=a.b
this.d.N(0,a.a)
return!1}},hh:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ba:function(a,b){this.r=a.a
return!1},
as:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.cb()
if(typeof z!=="number")return z.c6()
this.r=(z&~y)>>>0
return!1},
ar:function(a,b){return!1},
e8:function(a){return!1},
cX:function(a,b,c){return}},b8:{"^":"a;a,b,c",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b8))return!1
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
return z+(this.c?"Shift+":"")}},hp:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
ba:function(a,b){this.f=a.a
return!1},
as:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.cb()
if(typeof z!=="number")return z.c6()
this.f=(z&~y)>>>0
return!1},
ar:function(a,b){return!1},
e9:function(a,b){return!1}},hB:{"^":"G;"},ik:{"^":"hB;x,y,z,Q,ch,c,d,e,a,0b"},il:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bB:function(a,b){var z,y,x,w
H.z(a,"$isd",[V.V],"$asd")
z=new P.bu(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gdu()
w=new X.ik(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
e6:function(a){var z
H.z(a,"$isd",[V.V],"$asd")
z=this.b
if(z==null)return!1
z.M(this.bB(a,!0))
return!0},
e4:function(a){var z
H.z(a,"$isd",[V.V],"$asd")
z=this.c
if(z==null)return!1
z.M(this.bB(a,!0))
return!0},
e5:function(a){H.z(a,"$isd",[V.V],"$asd")
return!1}},iG:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gdu:function(){var z=this.a
return V.dU(0,0,(z&&C.f).gbM(z).c,C.f.gbM(z).d)},
bx:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dA(z,new X.b8(y,a.altKey,a.shiftKey))},
ae:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b8(y,a.altKey,a.shiftKey)},
aY:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b8(y,a.altKey,a.shiftKey)},
a3:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a1()
v=z.top
if(typeof x!=="number")return x.a1()
return new V.V(y-w,x-v)},
am:function(a){return new V.bF(a.movementX,a.movementY)},
aV:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.c.Y(u.pageX)
C.c.Y(u.pageY)
s=z.left
C.c.Y(u.pageX)
C.a.h(y,new V.V(t-s,C.c.Y(u.pageY)-z.top))}return y},
a2:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.df(z,new X.b8(y,a.altKey,a.shiftKey))},
aS:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a1()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.a1()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
eB:[function(a){this.f=!0},"$1","gcU",4,0,5],
ev:[function(a){this.f=!1},"$1","gcO",4,0,5],
ey:[function(a){H.k(a,"$isaa")
if(this.f&&this.aS(a))a.preventDefault()},"$1","gcR",4,0,3],
eD:[function(a){var z
H.k(a,"$isb6")
if(!this.f)return
z=this.bx(a)
this.b.e7(z)},"$1","gcW",4,0,17],
eC:[function(a){var z
H.k(a,"$isb6")
if(!this.f)return
z=this.bx(a)
this.b.e3(z)},"$1","gcV",4,0,17],
eE:[function(a){var z,y,x,w
H.k(a,"$isaa")
z=this.a
z.focus()
this.f=!0
this.ae(a)
if(this.x){y=this.a2(a)
x=this.am(a)
if(this.d.ba(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a2(a)
w=this.a3(a)
if(this.c.ba(y,w))a.preventDefault()},"$1","gcY",4,0,3],
eG:[function(a){var z,y,x
H.k(a,"$isaa")
this.ae(a)
z=this.a2(a)
if(this.x){y=this.am(a)
if(this.d.as(z,y))a.preventDefault()
return}if(this.r)return
x=this.a3(a)
if(this.c.as(z,x))a.preventDefault()},"$1","gd_",4,0,3],
eA:[function(a){var z,y,x
H.k(a,"$isaa")
if(!this.aS(a)){this.ae(a)
z=this.a2(a)
if(this.x){y=this.am(a)
if(this.d.as(z,y))a.preventDefault()
return}if(this.r)return
x=this.a3(a)
if(this.c.as(z,x))a.preventDefault()}},"$1","gcT",4,0,3],
eF:[function(a){var z,y,x
H.k(a,"$isaa")
this.ae(a)
z=this.a2(a)
if(this.x){y=this.am(a)
if(this.d.ar(z,y))a.preventDefault()
return}if(this.r)return
x=this.a3(a)
if(this.c.ar(z,x))a.preventDefault()},"$1","gcZ",4,0,3],
ez:[function(a){var z,y,x
H.k(a,"$isaa")
if(!this.aS(a)){this.ae(a)
z=this.a2(a)
if(this.x){y=this.am(a)
if(this.d.ar(z,y))a.preventDefault()
return}if(this.r)return
x=this.a3(a)
if(this.c.ar(z,x))a.preventDefault()}},"$1","gcS",4,0,3],
eH:[function(a){var z,y
H.k(a,"$isbk")
this.ae(a)
z=new V.bF((a&&C.t).gdD(a),C.t.gdE(a)).O(0,180)
if(this.x){if(this.d.e8(z))a.preventDefault()
return}if(this.r)return
y=this.a3(a)
if(this.c.e9(z,y))a.preventDefault()},"$1","gd0",4,0,29],
eI:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a2(this.y)
v=this.a3(this.y)
this.d.cX(w,v,x)}},"$1","gd1",4,0,5],
eL:[function(a){var z
H.k(a,"$isaK")
this.a.focus()
this.f=!0
this.aY(a)
z=this.aV(a)
if(this.e.e6(z))a.preventDefault()},"$1","gd5",4,0,9],
eJ:[function(a){var z
H.k(a,"$isaK")
this.aY(a)
z=this.aV(a)
if(this.e.e4(z))a.preventDefault()},"$1","gd3",4,0,9],
eK:[function(a){var z
H.k(a,"$isaK")
this.aY(a)
z=this.aV(a)
if(this.e.e5(z))a.preventDefault()},"$1","gd4",4,0,9]}}],["","",,V,{"^":"",
l5:[function(a,b){if(typeof b!=="number")return b.a1()
if(typeof a!=="number")return H.E(a)
return Math.abs(b-a)<=1e-9},"$2","hm",8,0,25],
d5:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.ca(a-b,z)
return(a<0?a+z:a)+b},
A:function(a,b,c){if(a==null)return C.b.W("null",c)
return C.b.W(C.c.ep($.m.$2(a,0)?0:a,b),c+b+1)},
cb:function(a,b,c){var z,y,x,w,v
H.z(a,"$isd",[P.u],"$asd")
z=H.b([],[P.f])
for(y=0,x=0;x<4;++x){w=V.A(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.j(z,v)
C.a.G(z,v,C.b.W(z[v],y))}return z},
bN:{"^":"a;a,b,c",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bN))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}},
bO:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}},
bX:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
c2:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
v:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.E(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.E(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.v()
if(typeof u!=="number")return H.E(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.E(s)
r=a7.b
if(typeof r!=="number")return H.E(r)
q=a7.f
if(typeof q!=="number")return H.E(q)
p=a7.z
if(typeof p!=="number")return H.E(p)
o=a7.cy
if(typeof o!=="number")return H.E(o)
n=a7.c
if(typeof n!=="number")return H.E(n)
m=a7.r
if(typeof m!=="number")return H.E(m)
l=a7.Q
if(typeof l!=="number")return H.E(l)
k=a7.db
if(typeof k!=="number")return H.E(k)
j=a7.d
if(typeof j!=="number")return H.E(j)
i=a7.x
if(typeof i!=="number")return H.E(i)
h=a7.ch
if(typeof h!=="number")return H.E(h)
g=a7.dx
if(typeof g!=="number")return H.E(g)
f=this.e
if(typeof f!=="number")return f.v()
e=this.f
if(typeof e!=="number")return e.v()
d=this.r
if(typeof d!=="number")return d.v()
c=this.x
if(typeof c!=="number")return c.v()
b=this.y
if(typeof b!=="number")return b.v()
a=this.z
if(typeof a!=="number")return a.v()
a0=this.Q
if(typeof a0!=="number")return a0.v()
a1=this.ch
if(typeof a1!=="number")return a1.v()
a2=this.cx
if(typeof a2!=="number")return a2.v()
a3=this.cy
if(typeof a3!=="number")return a3.v()
a4=this.db
if(typeof a4!=="number")return a4.v()
a5=this.dx
if(typeof a5!=="number")return a5.v()
return V.au(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bX))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
z=b.e
if(!$.m.$2(z,this.e))return!1
z=b.f
if(!$.m.$2(z,this.f))return!1
z=b.r
if(!$.m.$2(z,this.r))return!1
z=b.x
if(!$.m.$2(z,this.x))return!1
z=b.y
if(!$.m.$2(z,this.y))return!1
z=b.z
if(!$.m.$2(z,this.z))return!1
z=b.Q
if(!$.m.$2(z,this.Q))return!1
z=b.ch
if(!$.m.$2(z,this.ch))return!1
z=b.cx
if(!$.m.$2(z,this.cx))return!1
z=b.cy
if(!$.m.$2(z,this.cy))return!1
z=b.db
if(!$.m.$2(z,this.db))return!1
z=b.dx
if(!$.m.$2(z,this.dx))return!1
return!0},
i:function(a){return this.A()},
bP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.cb(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cb(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cb(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cb(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.j(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.j(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.j(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.j(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.j(y,1)
q=q+y[1]+", "
if(1>=t)return H.j(x,1)
q=q+x[1]+", "
if(1>=s)return H.j(w,1)
q=q+w[1]+", "
if(1>=r)return H.j(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.j(y,2)
u=u+y[2]+", "
if(2>=t)return H.j(x,2)
u=u+x[2]+", "
if(2>=s)return H.j(w,2)
u=u+w[2]+", "
if(2>=r)return H.j(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.j(y,3)
q=q+y[3]+", "
if(3>=t)return H.j(x,3)
q=q+x[3]+", "
if(3>=s)return H.j(w,3)
q=q+w[3]+", "
if(3>=r)return H.j(v,3)
return u+(q+v[3]+"]")},
A:function(){return this.bP("",3,0)},
q:function(a){return this.bP(a,3,0)},
n:{
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dI:function(){return V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
V:{"^":"a;a,b",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}},
cz:{"^":"a;a,b,c",
a1:function(a,b){return new V.cz(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cz))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}},
dP:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dP))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}},
dT:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dT))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"},
n:{
dU:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dT(a,b,c,d)}}},
bF:{"^":"a;a,b",
dR:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return Math.sqrt(z*z+y*y)},"$0","gk",1,0,11],
O:function(a,b){var z,y
if($.m.$2(b,0))return new V.bF(0,0)
z=this.a
if(typeof z!=="number")return z.O()
y=this.b
if(typeof y!=="number")return y.O()
return new V.bF(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bF))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}},
N:{"^":"a;a,b,c",
dR:[function(a){return Math.sqrt(this.R(this))},"$0","gk",1,0,11],
R:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b9:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.N(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b6:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.N(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
aG:function(a){return new V.N(-this.a,-this.b,-this.c)},
O:function(a,b){if($.m.$2(b,0))return new V.N(0,0,0)
return new V.N(this.a/b,this.b/b,this.c/b)},
dP:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dk:{"^":"bY;0a,0b",
gC:function(){var z=this.b
if(z==null){z=D.at()
this.b=z}return z},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dk))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}},bY:{"^":"fo;"},dW:{"^":"bY;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gC:function(){var z=this.y
if(z==null){z=D.at()
this.y=z}return z},
ad:function(a){var z=this.y
if(!(z==null))z.M(a)},
sc5:function(a){var z,y
a=V.d5(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.M("yaw",y,a,this,[P.u])
z.b=!0
this.ad(z)}},
sbV:function(a,b){var z,y
b=V.d5(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.M("pitch",y,b,this,[P.u])
z.b=!0
this.ad(z)}},
sbZ:function(a){var z,y
a=V.d5(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.M("roll",y,a,this,[P.u])
z.b=!0
this.ad(z)}},
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dW))return!1
z=this.a
y=b.a
if(!$.m.$2(z,y))return!1
z=this.b
y=b.b
if(!$.m.$2(z,y))return!1
z=this.c
y=b.c
if(!$.m.$2(z,y))return!1
z=this.d
y=b.d
if(!$.m.$2(z,y))return!1
z=this.e
y=b.e
if(!$.m.$2(z,y))return!1
z=this.f
y=b.f
if(!$.m.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"], ["+V.A(this.d,3,0)+", "+V.A(this.e,3,0)+", "+V.A(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fO:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ak:[function(a){var z
H.k(a,"$isG")
z=this.x
if(!(z==null))z.M(a)},function(){return this.ak(null)},"er","$1","$0","ga9",0,2,2],
ew:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.as
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga9(),w={func:1,ret:-1,args:[D.G]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gL()==null){s=new D.bx()
s.d=0
t.sL(s)}s=t.gL()
s.toString
H.i(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.h0(a,b,this,[z])
z.b=!0
this.ak(z)},"$2","gcP",8,0,6],
ex:[function(a,b){var z,y,x,w,v,u
z=E.as
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga9(),w=0;w<b.length;b.length===y||(0,H.y)(b),++w){v=b[w]
if(v!=null){if(v.gL()==null){u=new D.bx()
u.d=0
v.sL(u)}v.gL().N(0,x)}}z=new D.h1(a,b,this,[z])
z.b=!0
this.ak(z)},"$2","gcQ",8,0,6],
gC:function(){var z=this.x
if(z==null){z=D.at()
this.x=z}return z},
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.bY(this.c)
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
if(typeof x!=="number")return H.E(x)
u=C.c.Y(v.a*x)
if(typeof w!=="number")return H.E(w)
t=C.c.Y(v.b*w)
s=C.c.Y(v.c*x)
a.c=s
v=C.c.Y(v.d*w)
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
n=V.au(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.bX(n)
y=$.dO
if(y==null){y=new V.N(0,0,-1)
m=y.O(0,Math.sqrt(y.R(y)))
y=new V.N(0,1,0).b6(m)
l=y.O(0,Math.sqrt(y.R(y)))
k=m.b6(l)
j=new V.N(0,0,0)
y=V.au(l.a,k.a,m.a,l.aG(0).R(j),l.b,k.b,m.b,k.aG(0).R(j),l.c,k.c,m.c,m.aG(0).R(j),0,0,0,1)
$.dO=y
i=y}else i=y
z=z.b
if(z!=null){h=z.a
if(h!=null)i=h.v(0,i)}a.db.bX(i)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.r(z,0)]);z.t();)z.d.c4(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.r(z,0)]);z.t();)z.d.ai(a)
this.a.toString
a.cy.bb()
a.db.bb()
this.b.toString
a.bW()},
$islG:1}}],["","",,A,{"^":"",d8:{"^":"a;a,b,c"},fi:{"^":"a;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
dG:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dF:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fC:{"^":"dY;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},dY:{"^":"da;",
cp:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
by:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.cX(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.c(P.R("Error compiling shader '"+H.e(y)+"': "+H.e(x)))}return y},
dc:function(){var z,y,x,w,v,u
z=H.b([],[A.d8])
y=this.a
x=H.O(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.E(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.d8(y,v.name,u))}this.x=new A.fi(z)},
de:function(){var z,y,x,w,v,u
z=H.b([],[A.Y])
y=this.a
x=H.O(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.E(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.dC(v.type,v.size,v.name,u))}this.y=new A.iw(z)},
ac:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ip(z,y,b,c)
else return A.cJ(z,y,b,a,c)},
cH:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iA(z,y,b,c)
else return A.cJ(z,y,b,a,c)},
cI:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iB(z,y,b,c)
else return A.cJ(z,y,b,a,c)},
aA:function(a,b){return new P.ex(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
dC:function(a,b,c,d){switch(a){case 5120:return this.ac(b,c,d)
case 5121:return this.ac(b,c,d)
case 5122:return this.ac(b,c,d)
case 5123:return this.ac(b,c,d)
case 5124:return this.ac(b,c,d)
case 5125:return this.ac(b,c,d)
case 5126:return new A.cI(this.a,this.r,c,d)
case 35664:return new A.ir(this.a,this.r,c,d)
case 35665:return new A.cK(this.a,this.r,c,d)
case 35666:return new A.iu(this.a,this.r,c,d)
case 35667:return new A.is(this.a,this.r,c,d)
case 35668:return new A.it(this.a,this.r,c,d)
case 35669:return new A.iv(this.a,this.r,c,d)
case 35674:return new A.iy(this.a,this.r,c,d)
case 35675:return new A.iz(this.a,this.r,c,d)
case 35676:return new A.cL(this.a,this.r,c,d)
case 35678:return this.cH(b,c,d)
case 35680:return this.cI(b,c,d)
case 35670:throw H.c(this.aA("BOOL",c))
case 35671:throw H.c(this.aA("BOOL_VEC2",c))
case 35672:throw H.c(this.aA("BOOL_VEC3",c))
case 35673:throw H.c(this.aA("BOOL_VEC4",c))
default:throw H.c(P.R("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}},Y:{"^":"a;"},iw:{"^":"a;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.A()},
dL:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
A:function(){return this.dL("\n")}},ip:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1i: "+H.e(this.c)}},is:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform2i: "+H.e(this.c)}},it:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform3i: "+H.e(this.c)}},iv:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform4i: "+H.e(this.c)}},iq:{"^":"Y;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.e(this.c)},
n:{
cJ:function(a,b,c,d,e){var z=new A.iq(a,b,c,e)
z.f=d
z.e=P.hf(d,0,!1,P.C)
return z}}},cI:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1f: "+H.e(this.c)}},ir:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform2f: "+H.e(this.c)}},cK:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform3f: "+H.e(this.c)}},iu:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform4f: "+H.e(this.c)}},iy:{"^":"Y;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}},iz:{"^":"Y;a,b,c,d",
i:function(a){return"UniformMat3: "+H.e(this.c)}},cL:{"^":"Y;a,b,c,d",
bj:function(a){var z=new Float32Array(H.cT(H.z(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.e(this.c)}},iA:{"^":"Y;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.e(this.c)}},iB:{"^":"Y;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}}],["","",,F,{"^":"",
c7:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bm:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.N(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.N(t+h,s+f,r+g)
z.b=q
p=new V.N(t-h,s-f,r-g)
z.c=p
o=new V.N(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.c7(y)
k=F.c7(z.b)
j=F.kU(d,e,new F.kj(z,F.c7(z.c),F.c7(z.d),k,l,c),b)
if(j!=null)a.dV(j)},
kU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(c,{func:1,ret:-1,args:[F.aL,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.e_()
y=H.b([],[F.aL])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cM(null,null,new V.bO(u,0,0,1),null,null,new V.V(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.b5(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cM(null,null,new V.bO(o,n,m,1),null,null,new V.V(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.b5(d))}}z.d.dj(a+1,b+1,y)
return z},
kj:{"^":"p:32;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.b9(z.b,b).b9(z.d.b9(z.c,b),c)
z=new V.cz(y.a,y.b,y.c)
if(!J.W(a.f,z)){a.f=z
z=a.a
if(z!=null)z.V()}z=y.O(0,Math.sqrt(y.R(y)))
if(!J.W(a.z,z)){a.z=z
z=a.a
if(z!=null)z.V()}z=1-b
x=1-c
x=new V.dP(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.W(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.V()}}},
ae:{"^":"a;0a,0b,0c,0d,0e",
gb7:function(){return this.a==null||this.b==null||this.c==null},
cB:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.N(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dP())return
return v.O(0,Math.sqrt(v.R(v)))},
cD:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.a1(0,y)
z=new V.N(z.a,z.b,z.c)
v=z.O(0,Math.sqrt(z.R(z)))
z=w.a1(0,y)
z=new V.N(z.a,z.b,z.c)
z=v.b6(z.O(0,Math.sqrt(z.R(z))))
return z.O(0,Math.sqrt(z.R(z)))},
b1:function(){if(this.d!=null)return!0
var z=this.cB()
if(z==null){z=this.cD()
if(z==null)return!1}this.d=z
this.a.a.V()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var z,y
if(this.gb7())return a+"disposed"
z=a+C.b.W(J.X(this.a.e),0)+", "+C.b.W(J.X(this.b.e),0)+", "+C.b.W(J.X(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
A:function(){return this.q("")},
n:{
by:function(a,b,c){var z,y,x
z=new F.ae()
y=a.a
if(y==null)H.U(P.R("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.U(P.R("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.V()
return z}}},
cu:{"^":"a;0a,0b",
gb7:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){if(this.gb7())return a+"disposed"
return a+C.b.W(J.X(this.a.e),0)+", "+C.b.W(J.X(this.b.e),0)},
A:function(){return this.q("")}},
cy:{"^":"a;0a",
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.W(J.X(z.e),0)},
A:function(){return this.q("")}},
dZ:{"^":"a;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.at()
this.e=z}return z},
dV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.J()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.dA())}this.a.J()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.J()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cy()
if(r.a==null)H.U(P.R("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.M(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.J()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.J()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.j(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cu()
s=p.a
if(s==null)H.U(P.R("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.U(P.R("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.M(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.J()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.J()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.j(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.J()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.by(p,o,l)}z=this.e
if(!(z==null))z.aF(0)},
ds:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$an()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$bi().a)!==0)++w
if((x&$.$get$bj().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gbl(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dd])
for(r=0,q=0;q<w;++q){p=b.dm(q)
o=p.gbl(p)
C.a.G(s,q,new Z.dd(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.j(y,n)
m=y[n].dS(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.G(t,l,m[k]);++l}}r+=o}H.z(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cT(t)),35044)
y.bindBuffer(34962,null)
i=new Z.de(new Z.eu(34962,j),s,b)
i.b=H.b([],[Z.bS])
if(this.b.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.J()
C.a.h(h,g.e)}f=Z.cN(y,34963,H.z(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.bS(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.J()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.J()
C.a.h(h,g.e)}f=Z.cN(y,34963,H.z(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.bS(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.J()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.J()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].c
g.a.a.J()
C.a.h(h,g.e)}f=Z.cN(y,34963,H.z(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.bS(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.q("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.q("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.q("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.q("   "))}return C.a.l(z,"\n")},
T:function(a){var z=this.e
if(!(z==null))z.M(a)},
V:function(){return this.T(null)},
n:{
e_:function(){var z,y
z=new F.dZ()
y=new F.iJ(z)
y.b=!1
y.c=H.b([],[F.aL])
z.a=y
y=new F.i1(z)
y.b=H.b([],[F.cy])
z.b=y
y=new F.i0(z)
y.b=H.b([],[F.cu])
z.c=y
y=new F.i_(z)
y.b=H.b([],[F.ae])
z.d=y
z.e=null
return z}}},
i_:{"^":"a;a,0b",
dj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.z(c,"$isd",[F.aL],"$asd")
z=H.b([],[F.ae])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.j(c,x)
r=c[x];++x
if(x>=s)return H.j(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.j(c,p)
o=c[p]
if(y<0||y>=s)return H.j(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.by(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.by(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.by(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.by(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
b2:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].b1())x=!1
return x},
i:function(a){return this.A()},
q:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.l(z,"\n")},
A:function(){return this.q("")}},
i0:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.A()},
q:function(a){var z,y,x,w
z=H.b([],[P.f])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.j(w,x)
C.a.h(z,w[x].q(a+(""+x+". ")))}return C.a.l(z,"\n")},
A:function(){return this.q("")}},
i1:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.A()},
q:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.l(z,"\n")},
A:function(){return this.q("")}},
aL:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
b5:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cM(this.cx,x,u,z,y,w,v,a,t)},
dA:function(){return this.b5(null)},
dS:function(a){var z,y
z=J.D(a)
if(z.p(a,$.$get$an())){z=this.f
y=[P.u]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$aO())){z=this.r
y=[P.u]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$aN())){z=H.b([0,0,1],[P.u])
return z}else if(z.p(a,$.$get$aP())){z=this.y
y=[P.u]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.p(a,$.$get$aQ())){z=this.z
y=[P.u]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bi())){z=this.Q
y=[P.u]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bj())){z=this.Q
y=[P.u]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.p(a,$.$get$aR()))return H.b([this.ch],[P.u])
else if(z.p(a,$.$get$aM())){z=this.cx
y=[P.u]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.u])},
b1:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.N(0,0,0)
this.d.F(0,new F.iP(z))
z=z.a
this.r=z.O(0,Math.sqrt(z.R(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.aF(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var z,y,x
z=H.b([],[P.f])
C.a.h(z,C.b.W(J.X(this.e),0))
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
y=this.z
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,V.A(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.l(z,", ")
return a+"{"+x+"}"},
A:function(){return this.q("")},
n:{
cM:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aL()
y=new F.iO(z)
y.b=H.b([],[F.cy])
z.b=y
y=new F.iN(z)
x=[F.cu]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iK(z)
x=[F.ae]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$er()
z.e=0
y=$.$get$an()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aP().a)!==0?f:null
z.z=(x&$.$get$aQ().a)!==0?g:null
z.Q=(x&$.$get$es().a)!==0?c:null
z.ch=(x&$.$get$aR().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
iP:{"^":"p:8;a",
$1:function(a){var z,y
H.k(a,"$isae")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
iJ:{"^":"a;a,0b,0c",
J:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.j(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.c(P.R("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.V()
return!0},
gk:function(a){return this.c.length},
b2:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].b1()
return!0},
i:function(a){return this.A()},
q:function(a){var z,y,x,w
this.J()
z=H.b([],[P.f])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.l(z,"\n")},
A:function(){return this.q("")}},
iK:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){H.i(b,{func:1,ret:-1,args:[F.ae]})
C.a.F(this.b,b)
C.a.F(this.c,new F.iL(this,b))
C.a.F(this.d,new F.iM(this,b))},
i:function(a){return this.A()},
q:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.l(z,"\n")},
A:function(){return this.q("")}},
iL:{"^":"p:8;a,b",
$1:function(a){H.k(a,"$isae")
if(!J.W(a.a,this.a))this.b.$1(a)}},
iM:{"^":"p:8;a,b",
$1:function(a){var z
H.k(a,"$isae")
z=this.a
if(!J.W(a.a,z)&&!J.W(a.b,z))this.b.$1(a)}},
iN:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.A()},
q:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.l(z,"\n")},
A:function(){return this.q("")}},
iO:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.A()},
q:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.l(z,"\n")},
A:function(){return this.q("")}}}],["","",,O,{"^":"",fB:{"^":"cF;0a,0b,0c,0d,0e,0f",
gC:function(){var z=this.f
if(z==null){z=D.at()
this.f=z}return z},
av:function(a){var z=this.f
if(!(z==null))z.M(a)}},cF:{"^":"a;"}}],["","",,T,{"^":"",ie:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",aZ:{"^":"a;",
ah:function(a,b){return!0},
i:function(a){return"all"},
$isam:1},am:{"^":"a;"},dH:{"^":"a;",
ah:["cl",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].ah(0,b))return!0
return!1}],
i:["bm",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isam:1},ab:{"^":"dH;0a",
ah:function(a,b){return!this.cl(0,b)},
i:function(a){return"!["+this.bm(0)+"]"}},hK:{"^":"a;0a,0b",
ah:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.cA(this.a)
y=H.cA(this.b)
return z+".."+y},
$isam:1,
n:{
I:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.c(P.R("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.aa(a,0)
y=C.b.aa(b,0)
x=new V.hK()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},hY:{"^":"a;0a",
co:function(a){var z,y
if(a.a.length<=0)throw H.c(P.R("May not create a SetMatcher with zero characters."))
z=new H.aI(0,0,[P.C,P.L])
for(y=new H.cv(a,a.gk(a),0,[H.az(a,"q",0)]);y.t();)z.G(0,y.d,!0)
this.a=z},
ah:function(a,b){return this.a.bN(0,b)},
i:function(a){var z=this.a
return P.cD(new H.dC(z,[H.r(z,0)]),0,null)},
$isam:1,
n:{
o:function(a){var z=new V.hY()
z.co(a)
return z}}},e1:{"^":"a;a,b,0c,0d",
gdW:function(a){return this.b},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ec(this.a.j(0,b))
w.a=H.b([],[V.am])
w.c=!1
C.a.h(this.c,w)
return w},
dI:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.ah(0,a))return w}return},
i:function(a){return this.b}},ea:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.d4(this.b,"\n","\\n")
y=H.d4(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eb:{"^":"a;a,b,0c",
a5:function(a,b,c){var z,y,x
H.z(c,"$isd",[P.f],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.y)(c),++y){x=c[y]
this.c.G(0,x,b)}},
i:function(a){return this.b}},ij:{"^":"a;0a,0b,0c",
j:function(a,b){var z=this.a.m(0,b)
if(z==null){z=new V.e1(this,b)
z.c=H.b([],[V.ec])
this.a.G(0,b,z)}return z},
B:function(a){var z,y
z=this.b.m(0,a)
if(z==null){z=new V.eb(this,a)
y=P.f
z.c=new H.aI(0,0,[y,y])
this.b.G(0,a,z)}return z},
c3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.ea])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.aa(a,t)
r=y.dI(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cD(w,0,null)
throw H.c(P.R("Untokenizable string [state: "+y.gdW(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cD(w,0,null)
p=y.d
o=p.c.m(0,q)
u=new V.ea(o==null?p.b:o,q,t)}++t}}},
n:{
c1:function(){var z,y
z=new V.ij()
y=P.f
z.a=new H.aI(0,0,[y,V.e1])
z.b=new H.aI(0,0,[y,V.eb])
return z}}},ec:{"^":"dH;b,0c,0a",
i:function(a){return this.b.b+": "+this.bm(0)}}}],["","",,X,{"^":"",dg:{"^":"a;",$isdJ:1},fV:{"^":"e5;0a,0b,0c,0d,0e,0f,0r,0x",
gC:function(){var z=this.x
if(z==null){z=D.at()
this.x=z}return z}},hy:{"^":"a;0a,0b,0c,0d,0e,0f",
gC:function(){var z=this.f
if(z==null){z=D.at()
this.f=z}return z},
al:[function(a){var z
H.k(a,"$isG")
z=this.f
if(!(z==null))z.M(a)},function(){return this.al(null)},"es","$1","$0","gbo",0,2,2],
saq:function(a){var z,y
if(!J.W(this.b,a)){z=this.b
if(z!=null)z.gC().N(0,this.gbo())
y=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gbo())
z=new D.M("mover",y,this.b,this,[U.bY])
z.b=!0
this.al(z)}},
$isdJ:1,
$isdg:1},e5:{"^":"a;"}}],["","",,V,{"^":"",aq:{"^":"a;",
au:function(a){this.b=new P.fY(C.y)
this.c=null
this.d=H.b([],[[P.d,W.aG]])},
w:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.aG]))
y=a.split("\n")
for(z=y.length,x=[W.aG],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.B(u)
s=this.b.cG(u,0,u.length)
r=s==null?u:s
C.x.cd(t,H.d4(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaD(this.d),t)}},
bU:function(a,b){var z,y,x,w
H.z(b,"$isd",[P.f],"$asd")
this.d=H.b([],[[P.d,W.aG]])
z=C.a.l(b,"\n")
y=this.c
if(y==null){y=this.aB()
this.c=y}for(y=y.c3(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)this.aE(y[w])}},fy:{"^":"aq;a,0b,0c,0d",
aE:function(a){switch(a.a){case"Class":this.w(a.b,"#551")
break
case"Comment":this.w(a.b,"#777")
break
case"Id":this.w(a.b,"#111")
break
case"Num":this.w(a.b,"#191")
break
case"Reserved":this.w(a.b,"#119")
break
case"String":this.w(a.b,"#171")
break
case"Symbol":this.w(a.b,"#616")
break
case"Type":this.w(a.b,"#B11")
break
case"Whitespace":this.w(a.b,"#111")
break}},
aB:function(){var z,y,x,w
z=V.c1()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.o(new H.n("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.o(new H.n("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.o(new H.n("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.o(new H.n("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.o(new H.n("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"OpenDoubleStr")
y=V.o(new H.n('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.o(new H.n('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.o(new H.n("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.o(new H.n('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aZ())
x=z.j(0,"Start").l(0,"OpenSingleStr")
y=V.o(new H.n("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.o(new H.n("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.o(new H.n("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.o(new H.n("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aZ())
x=z.j(0,"Start").l(0,"Slash")
y=V.o(new H.n("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.o(new H.n("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").l(0,"EndComment")
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ab()
w=[V.am]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"MLComment")
x=V.o(new H.n("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").l(0,"MLCStar")
y=V.o(new H.n("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"MLComment")
x=new V.ab()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"EndComment")
x=V.o(new H.n("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Whitespace")
y=V.o(new H.n(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").l(0,"Whitespace")
x=V.o(new H.n(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.B("Num")
x=z.j(0,"Float")
x.d=x.a.B("Num")
x=z.j(0,"Sym")
x.d=x.a.B("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.B("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.B("String")
x=z.j(0,"EndComment")
x.d=x.a.B("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.B("Whitespace")
x=z.j(0,"Id")
y=x.a.B("Id")
x.d=y
x=[P.f]
y.a5(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.a5(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.a5(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},fW:{"^":"aq;a,0b,0c,0d",
aE:function(a){switch(a.a){case"Builtin":this.w(a.b,"#411")
break
case"Comment":this.w(a.b,"#777")
break
case"Id":this.w(a.b,"#111")
break
case"Num":this.w(a.b,"#191")
break
case"Preprocess":this.w(a.b,"#737")
break
case"Reserved":this.w(a.b,"#119")
break
case"Symbol":this.w(a.b,"#611")
break
case"Type":this.w(a.b,"#171")
break
case"Whitespace":this.w(a.b,"#111")
break}},
aB:function(){var z,y,x,w
z=V.c1()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.o(new H.n("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.o(new H.n("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.o(new H.n("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.o(new H.n("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.o(new H.n("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Slash")
y=V.o(new H.n("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.o(new H.n("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").l(0,"Sym").a,new V.aZ())
x=z.j(0,"Comment").l(0,"EndComment")
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ab()
w=[V.am]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Preprocess")
x=V.o(new H.n("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"Preprocess")
y=new V.ab()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"EndPreprocess")
y=V.o(new H.n("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Whitespace")
x=V.o(new H.n(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").l(0,"Whitespace")
y=V.o(new H.n(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.B("Num")
y=z.j(0,"Float")
y.d=y.a.B("Num")
y=z.j(0,"Sym")
y.d=y.a.B("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.B("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.B("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.B("Whitespace")
y=z.j(0,"Id")
x=y.a.B("Id")
y.d=x
y=[P.f]
x.a5(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.a5(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.a5(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},fX:{"^":"aq;a,0b,0c,0d",
aE:function(a){switch(a.a){case"Attr":this.w(a.b,"#911")
this.w("=","#111")
break
case"Id":this.w(a.b,"#111")
break
case"Other":this.w(a.b,"#111")
break
case"Reserved":this.w(a.b,"#119")
break
case"String":this.w(a.b,"#171")
break
case"Symbol":this.w(a.b,"#616")
break}},
aB:function(){var z,y,x
z=V.c1()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.o(new H.n("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.o(new H.n("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").l(0,"Attr")
x=V.o(new H.n("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Sym")
x=V.o(new H.n("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").l(0,"Sym")
y=V.o(new H.n("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"OpenStr")
x=V.o(new H.n('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").l(0,"CloseStr")
y=V.o(new H.n('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").l(0,"EscStr")
x=V.o(new H.n("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").l(0,"OpenStr")
y=V.o(new H.n('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.aZ())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.aZ())
y=z.j(0,"Other").l(0,"Other")
x=new V.ab()
x.a=H.b([],[V.am])
C.a.h(y.a,x)
y=V.o(new H.n('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.B("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.B("String")
y=z.j(0,"Id")
x=y.a.B("Id")
y.d=x
x.a5(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
x=z.j(0,"Attr")
x.d=x.a.B("Attr")
x=z.j(0,"Other")
x.d=x.a.B("Other")
return z}},hA:{"^":"aq;a,0b,0c,0d",
bU:function(a,b){H.z(b,"$isd",[P.f],"$asd")
this.d=H.b([],[[P.d,W.aG]])
this.w(C.a.l(b,"\n"),"#111")},
aE:function(a){},
aB:function(){return}},i2:{"^":"a;0a,0b",
cq:function(a,b){var z,y,x,w,v,u,t
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
t=W.a2
W.T(z,"scroll",H.i(new V.i5(x),{func:1,ret:-1,args:[t]}),!1,t)},
dk:function(a,b,c){var z,y,x,w
a=H.O(C.e.dt(a,0,4))
if(c.length===0)c=P.cS(C.j,b,C.h,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.ci(null)
w.href="#"+c
w.textContent=b
z.appendChild(w)
this.a.appendChild(z)},
ao:function(a,b){return this.dk(a,b,"")},
P:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.z(a,"$isd",[P.f],"$asd")
this.dd()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.c3(C.a.dQ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.f7(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.j(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cS(C.j,s,C.h,!1)
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
c8:function(a){var z,y,x,w
z=new V.fy("dart")
z.au("dart")
y=new V.fW("glsl")
y.au("glsl")
x=new V.fX("html")
x.au("html")
w=C.a.dJ(H.b([z,y,x],[V.aq]),new V.i6(a))
if(w!=null)return w
z=new V.hA("plain")
z.au("plain")
return z},
bI:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.z(a2,"$isd",[P.f],"$asd")
z=H.b([],[P.C])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(C.b.aH(w,"+")){C.a.G(a2,x,C.b.aJ(w,1))
C.a.h(z,1)
y=!0}else if(C.b.aH(w,"-")){C.a.G(a2,x,C.b.aJ(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.c8(a0)
v.bU(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cS(C.j,a,C.h,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.ci(null)
n.href="#"+r
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
if(x>=z.length)return H.j(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.y)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.y)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gH(w);b.t();)h.appendChild(b.gD(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
dd:function(){var z,y,x,w
if(this.b!=null)return
z=V.c1()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.o(new H.n("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.ab()
w=[V.am]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").l(0,"BoldEnd")
x=V.o(new H.n("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Italic")
x=V.o(new H.n("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").l(0,"Italic")
x=new V.ab()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").l(0,"ItalicEnd")
x=V.o(new H.n("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Code")
x=V.o(new H.n("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").l(0,"Code")
x=new V.ab()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.o(new H.n("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").l(0,"CodeEnd")
x=V.o(new H.n("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"LinkHead")
x=V.o(new H.n("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").l(0,"LinkTail")
x=V.o(new H.n("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").l(0,"LinkEnd")
y=V.o(new H.n("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").l(0,"LinkHead")
y=new V.ab()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").l(0,"LinkEnd")
y=V.o(new H.n("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").l(0,"LinkTail")
y=new V.ab()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.aZ())
x=z.j(0,"Other").l(0,"Other")
y=new V.ab()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.B("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.B("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.B("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.B("Link")
x=z.j(0,"Other")
x.d=x.a.B("Other")
this.b=z},
n:{
i3:function(a,b){var z=new V.i2()
z.cq(a,!0)
return z}}},i5:{"^":"p:34;a",
$1:function(a){P.e9(C.i,new V.i4(this.a))}},i4:{"^":"p:0;a",
$0:function(){var z,y,x
z=C.c.Y(document.documentElement.scrollTop)
y=this.a.style
x=H.e(-0.01*z)+"px"
y.top=x}},i6:{"^":"p:35;a",
$1:function(a){return H.k(a,"$isaq").a===this.a}}}],["","",,F,{"^":"",
f2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=V.i3("Tutorial 1",!0)
y=[P.f]
z.P(H.b(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."],y))
x=W.dh(null,null)
x.className="pageCanvas"
x.id="tutorial1"
z.a.appendChild(x)
z.ao(0,"Getting Started")
z.P(H.b(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."],y))
z.bI("index.html","html",0,H.b(["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script defer src="main.dart.js"></script>',"  </body>","</html>"],y))
z.bI("main.dart","dart",0,H.b(["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotater()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"],y))
z.ao(4,"ThreeDart")
z.P(H.b(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."],y))
z.ao(4,"Scene")
z.P(H.b(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "],y))
z.P(H.b(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."],y))
z.P(H.b(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."],y))
z.ao(4,"Entity")
z.P(H.b(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."],y))
z.P(H.b(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, torois, and knot. ","The shape can be loaded from a file or created mathmatically or procedually."],y))
z.P(H.b(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotater` to cause it to rotate. Movers can be grouped ","to multiply matrices togrether thus compounding the movements."],y))
z.P(H.b(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearence of fog or merky water."],y))
z.ao(4,"Summary")
z.P(H.b(["Play around with the Rotater, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."],y))
z.P(H.b(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."],y))
w=new E.as()
w.a=""
w.b=!0
y=E.as
z=O.dj(y)
w.y=z
z.bi(w.gdX(),w.gdZ())
w.z=null
w.Q=null
w.ch=null
w.cx=null
w.cy=null
w.db=null
w.dx=null
w.dy=null
w.fr=null
w.fx=null
w.sbk(0,null)
w.sc0(null)
w.saq(null)
v=F.e_()
F.bm(v,null,null,1,1,1,0,0,1)
F.bm(v,null,null,1,1,0,1,0,3)
F.bm(v,null,null,1,1,0,0,1,2)
F.bm(v,null,null,1,1,-1,0,0,0)
F.bm(v,null,null,1,1,0,-1,0,0)
F.bm(v,null,null,1,1,0,0,-1,3)
z=v.e
if(!(z==null))++z.d
v.d.b2()
v.a.b2()
z=v.e
if(!(z==null))z.aF(0)
w.sbk(0,v)
z=new U.dW()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sc5(0)
z.sbV(0,0)
z.sbZ(0)
u=z.d
if(!$.m.$2(u,0.1)){t=z.d
z.d=0.1
u=new D.M("deltaYaw",t,0.1,z,[P.u])
u.b=!0
z.ad(u)}u=z.e
if(!$.m.$2(u,0.21)){t=z.e
z.e=0.21
u=new D.M("deltaPitch",t,0.21,z,[P.u])
u.b=!0
z.ad(u)}u=z.f
if(!$.m.$2(u,0.32)){t=z.f
z.f=0.32
u=new D.M("deltaRoll",t,0.32,z,[P.u])
u.b=!0
z.ad(u)}w.saq(z)
z=new O.fB()
z.d=1
z.e=10
s=new V.bN(1,1,1)
z.b=s
u=[V.bN]
r=new D.M("objectColor",null,s,z,u)
r.b=!0
z.av(r)
s=new V.bN(0,0,0)
if(!J.W(z.c,s)){t=z.c
z.c=s
u=new D.M("fogColor",t,s,z,u)
u.b=!0
z.av(u)}u=z.d
if(!$.m.$2(u,3)){t=z.d
z.d=3
u=new D.M("fogStart",t,3,z,[P.u])
u.b=!0
z.av(u)}u=z.e
if(!$.m.$2(u,6)){t=z.e
z.e=6
u=new D.M("fogStop",t,6,z,[P.u])
u.b=!0
z.av(u)}w.sc0(z)
q=new M.fO()
z=O.dj(y)
q.d=z
z.bi(q.gcP(),q.gcQ())
q.e=null
q.f=null
q.r=null
q.x=null
p=new X.hy()
p.c=1.0471975511965976
p.d=0.1
p.e=2000
p.saq(null)
z=p.c
if(!$.m.$2(z,1.0471975511965976)){t=p.c
p.c=1.0471975511965976
z=new D.M("fov",t,1.0471975511965976,p,[P.u])
z.b=!0
p.al(z)}z=p.d
if(!$.m.$2(z,0.1)){t=p.d
p.d=0.1
z=new D.M("near",t,0.1,p,[P.u])
z.b=!0
p.al(z)}z=p.e
if(!$.m.$2(z,2000)){t=p.e
p.e=2000
z=new D.M("far",t,2000,p,[P.u])
z.b=!0
p.al(z)}z=q.a
if(z!==p){if(z!=null)z.gC().N(0,q.ga9())
t=q.a
q.a=p
p.gC().h(0,q.ga9())
z=new D.M("camera",t,q.a,q,[X.dg])
z.b=!0
q.ak(z)}o=new X.fV()
z=new V.bO(0,0,0,1)
o.a=z
o.b=!0
o.c=2000
o.d=!0
o.e=0
o.f=!1
z=V.dU(0,0,1,1)
o.r=z
z=q.b
if(z!==o){if(z!=null)z.gC().N(0,q.ga9())
t=q.b
q.b=o
o.gC().h(0,q.ga9())
z=new D.M("target",t,q.b,q,[X.e5])
z.b=!0
q.ak(z)}z=q.d
y=H.r(z,0)
H.w(w,y)
y=[y]
if(z.d2(H.b([w],y))){u=z.a
n=u.length
C.a.h(u,w)
z.cN(n,H.b([w],y))}z=q.a
m=V.au(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
y=new U.dk()
y.a=m
z.saq(y)
l=document.getElementById("tutorial1")
if(l==null)H.U(P.R("Failed to find an element with the identifier, tutorial1."))
z=E.ih(l,!0,!0,!0,!1)
y=z.d
if(y!==q){if(y!=null)y.gC().N(0,z.gbn())
z.d=q
q.gC().h(0,z.gbn())
z.cs()}}},1]]
setupProgram(dart,0,0)
J.D=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dz.prototype
return J.h6.prototype}if(typeof a=="string")return J.bU.prototype
if(a==null)return J.h7.prototype
if(typeof a=="boolean")return J.h5.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.a)return a
return J.cd(a)}
J.bI=function(a){if(typeof a=="string")return J.bU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.a)return a
return J.cd(a)}
J.cc=function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.a)return a
return J.cd(a)}
J.kA=function(a){if(typeof a=="number")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c3.prototype
return a}
J.eY=function(a){if(typeof a=="string")return J.bU.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c3.prototype
return a}
J.aV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.a)return a
return J.cd(a)}
J.W=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.D(a).p(a,b)}
J.f9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kA(a).a6(a,b)}
J.fa=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kL(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bI(a).m(a,b)}
J.fb=function(a,b,c,d){return J.aV(a).bJ(a,b,c,d)}
J.cg=function(a,b,c){return J.bI(a).dv(a,b,c)}
J.ch=function(a,b){return J.cc(a).u(a,b)}
J.fc=function(a,b){return J.cc(a).F(a,b)}
J.fd=function(a){return J.aV(a).gdn(a)}
J.aD=function(a){return J.D(a).gI(a)}
J.aE=function(a){return J.cc(a).gH(a)}
J.aF=function(a){return J.bI(a).gk(a)}
J.fe=function(a){return J.aV(a).gbc(a)}
J.ff=function(a){return J.aV(a).gek(a)}
J.d6=function(a){return J.cc(a).ec(a)}
J.fg=function(a,b,c){return J.eY(a).aj(a,b,c)}
J.fh=function(a){return J.eY(a).eo(a)}
J.X=function(a){return J.D(a).i(a)}
I.aB=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.bL.prototype
C.f=W.cl.prototype
C.x=W.aG.prototype
C.z=J.l.prototype
C.a=J.aH.prototype
C.e=J.dz.prototype
C.c=J.bT.prototype
C.b=J.bU.prototype
C.G=J.bA.prototype
C.K=H.hs.prototype
C.L=W.ht.prototype
C.q=J.hz.prototype
C.r=W.id.prototype
C.m=J.c3.prototype
C.t=W.bk.prototype
C.u=W.iS.prototype
C.v=new P.hx()
C.w=new P.iI()
C.d=new P.jF()
C.i=new P.bw(0)
C.y=new P.fZ("element",!0,!1,!1,!1)
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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

C.C=function(getTagFallback) {
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
C.D=function() {
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
C.E=function(hooks) {
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
C.F=function(hooks) {
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
C.H=H.b(I.aB(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.I=H.b(I.aB(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.J=H.b(I.aB([]),[P.f])
C.j=H.b(I.aB([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.k=H.b(I.aB(["bind","if","ref","repeat","syntax"]),[P.f])
C.l=H.b(I.aB(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.h=new P.iH(!1)
$.ad=0
$.b_=null
$.db=null
$.cU=!1
$.f_=null
$.eU=null
$.f6=null
$.ca=null
$.ce=null
$.d1=null
$.aT=null
$.bn=null
$.bo=null
$.cV=!1
$.K=C.d
$.al=null
$.cn=null
$.dw=null
$.dv=null
$.ds=null
$.dr=null
$.dq=null
$.dp=null
$.m=V.hm()
$.fE="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.fD="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.dO=null
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
I.$lazy(y,x,w)}})(["dn","$get$dn",function(){return H.eZ("_$dart_dartClosure")},"cr","$get$cr",function(){return H.eZ("_$dart_js")},"ed","$get$ed",function(){return H.ag(H.c2({
toString:function(){return"$receiver$"}}))},"ee","$get$ee",function(){return H.ag(H.c2({$method$:null,
toString:function(){return"$receiver$"}}))},"ef","$get$ef",function(){return H.ag(H.c2(null))},"eg","$get$eg",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ek","$get$ek",function(){return H.ag(H.c2(void 0))},"el","$get$el",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ei","$get$ei",function(){return H.ag(H.ej(null))},"eh","$get$eh",function(){return H.ag(function(){try{null.$method$}catch(z){return z.message}}())},"en","$get$en",function(){return H.ag(H.ej(void 0))},"em","$get$em",function(){return H.ag(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cP","$get$cP",function(){return P.iT()},"bp","$get$bp",function(){return[]},"eN","$get$eN",function(){return P.hO("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dl","$get$dl",function(){return{}},"eA","$get$eA",function(){return P.dE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)},"cQ","$get$cQ",function(){return P.dD(P.f,P.bz)},"et","$get$et",function(){return Z.a7(0)},"er","$get$er",function(){return Z.a7(511)},"an","$get$an",function(){return Z.a7(1)},"aO","$get$aO",function(){return Z.a7(2)},"aN","$get$aN",function(){return Z.a7(4)},"aP","$get$aP",function(){return Z.a7(8)},"aQ","$get$aQ",function(){return Z.a7(16)},"bi","$get$bi",function(){return Z.a7(32)},"bj","$get$bj",function(){return Z.a7(64)},"es","$get$es",function(){return Z.a7(96)},"aR","$get$aR",function(){return Z.a7(128)},"aM","$get$aM",function(){return Z.a7(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,opt:[D.G]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[W.a2]},{func:1,ret:-1,args:[P.C,[P.h,E.as]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[F.ae]},{func:1,ret:-1,args:[W.aK]},{func:1,ret:P.F,args:[D.G]},{func:1,ret:P.u},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.f,args:[P.C]},{func:1,ret:P.L,args:[W.v]},{func:1,args:[,]},{func:1,ret:W.v},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.L,args:[W.J,P.f,P.f,W.bG]},{func:1,ret:P.L,args:[W.af]},{func:1,ret:P.L,args:[P.f]},{func:1,ret:P.F,args:[,]},{func:1,ret:W.J,args:[W.v]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.L,args:[P.u,P.u]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.G]}]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:[P.ao,,],args:[,]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:P.F,args:[F.aL,P.u,P.u]},{func:1,ret:-1,args:[P.a],opt:[P.ac]},{func:1,ret:P.F,args:[W.a2]},{func:1,ret:P.L,args:[V.aq]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:P.F,args:[P.P]}]
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
if(x==y)H.kV(d||a)
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
Isolate.aB=a.aB
Isolate.d_=a.d_
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
if(typeof dartMainRunner==="function")dartMainRunner(F.f2,[])
else F.f2([])})})()
//# sourceMappingURL=main.dart.js.map
