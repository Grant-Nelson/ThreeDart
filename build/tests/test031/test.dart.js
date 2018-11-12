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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.de"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.de"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.de(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.df=function(){}
var dart=[["","",,H,{"^":"",m2:{"^":"a;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cz:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.di==null){H.ll()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eS("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cQ()]
if(v!=null)return v
v=H.lq(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cQ(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
p:{"^":"a;",
q:function(a,b){return a===b},
gY:function(a){return H.bv(a)},
i:["ea",function(a){return"Instance of '"+H.b4(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ho:{"^":"p;",
i:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isa5:1},
dW:{"^":"p;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gY:function(a){return 0},
$isJ:1},
cR:{"^":"p;",
gY:function(a){return 0},
i:["eb",function(a){return String(a)}]},
i2:{"^":"cR;"},
cq:{"^":"cR;"},
bY:{"^":"cR;",
i:function(a){var z=a[$.$get$dF()]
if(z==null)return this.eb(a)
return"JavaScript function for "+H.j(J.a8(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscN:1},
b_:{"^":"p;$ti",
h:function(a,b){H.G(b,H.z(a,0))
if(!!a.fixed$length)H.o(P.ag("add"))
a.push(b)},
hH:function(a,b){if(!!a.fixed$length)H.o(P.ag("removeAt"))
if(b<0||b>=a.length)throw H.h(P.c2(b,null,null))
return a.splice(b,1)[0]},
C:function(a,b){var z
if(!!a.fixed$length)H.o(P.ag("remove"))
for(z=0;z<a.length;++z)if(J.H(a[z],b)){a.splice(z,1)
return!0}return!1},
c1:function(a,b){var z,y
H.u(b,"$ise",[H.z(a,0)],"$ase")
if(!!a.fixed$length)H.o(P.ag("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
N:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bj(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a4(z,y,H.j(a[y]))
return z.join(b)},
hi:function(a){return this.B(a,"")},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
bF:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.an(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.an(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
ghc:function(a){if(a.length>0)return a[0]
throw H.h(H.dS())},
gco:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.dS())},
ao:function(a,b){var z
for(z=0;z<a.length;++z)if(J.H(a[z],b))return!0
return!1},
i:function(a){return P.cO(a,"[","]")},
ga0:function(a){return new J.ar(a,a.length,0,[H.z(a,0)])},
gY:function(a){return H.bv(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.o(P.ag("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.c9(b,"newLength",null))
if(b<0)throw H.h(P.an(b,0,null,"newLength",null))
a.length=b},
a4:function(a,b,c){H.X(b)
H.G(c,H.z(a,0))
if(!!a.immutable$list)H.o(P.ag("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aU(a,b))
if(b>=a.length||b<0)throw H.h(H.aU(a,b))
a[b]=c},
$ise:1,
$isd:1,
n:{
hn:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c9(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.an(a,0,4294967295,"length",null))
return J.dT(new Array(a),b)},
dT:function(a,b){return J.bq(H.c(a,[b]))},
bq:function(a){H.bR(a)
a.fixed$length=Array
return a}}},
m1:{"^":"b_;$ti"},
ar:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bX:{"^":"p;",
hT:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ag(""+a+".toInt()"))},
cl:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ag(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ag(""+a+".round()"))},
e_:function(a,b){var z,y
if(b>20)throw H.h(P.an(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.h(H.aO(b))
return a*b},
e6:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ee:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d8(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.d8(a,b)},
d8:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ag("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
bi:function(a,b){var z
if(a>0)z=this.fu(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fu:function(a,b){return b>31?0:a>>>b},
al:function(a,b){if(typeof b!=="number")throw H.h(H.aO(b))
return a<b},
$isw:1,
$isY:1},
dV:{"^":"bX;",$isB:1},
dU:{"^":"bX;"},
cj:{"^":"p;",
ca:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aU(a,b))
if(b<0)throw H.h(H.aU(a,b))
if(b>=a.length)H.o(H.aU(a,b))
return a.charCodeAt(b)},
be:function(a,b){if(b>=a.length)throw H.h(H.aU(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.R(b)
if(typeof b!=="string")throw H.h(P.c9(b,null,null))
return a+b},
bG:function(a,b,c){H.X(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.c2(b,null,null))
if(b>c)throw H.h(P.c2(b,null,null))
if(c>a.length)throw H.h(P.c2(c,null,null))
return a.substring(b,c)},
cH:function(a,b){return this.bG(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hx:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ah:function(a,b){return this.hx(a,b," ")},
h3:function(a,b,c){if(c>a.length)throw H.h(P.an(c,0,a.length,null,null))
return H.fy(a,b,c)},
i:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isec:1,
$isn:1}}],["","",,H,{"^":"",
dS:function(){return new P.iG("No element")},
a2:{"^":"je;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.i.ca(this.a,b)},
$aseT:function(){return[P.B]},
$asr:function(){return[P.B]},
$ase:function(){return[P.B]},
$asd:function(){return[P.B]}},
h8:{"^":"e;"},
e0:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.c7(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bj(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
hG:{"^":"e;a,b,$ti",
ga0:function(a){return new H.hH(J.bT(this.a),this.b,this.$ti)},
gl:function(a){return J.bg(this.a)},
F:function(a,b){return this.b.$1(J.dp(this.a,b))},
$ase:function(a,b){return[b]}},
hH:{"^":"cP;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascP:function(a,b){return[b]}},
jw:{"^":"e;a,b,$ti",
ga0:function(a){return new H.jx(J.bT(this.a),this.b,this.$ti)}},
jx:{"^":"cP;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cg:{"^":"a;$ti"},
eT:{"^":"a;$ti"},
je:{"^":"ck+eT;"}}],["","",,H,{"^":"",
lg:function(a){return init.types[H.X(a)]},
lo:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isD},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a8(a)
if(typeof z!=="string")throw H.h(H.aO(a))
return z},
bv:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b4:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.K(a).$iscq){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.be(w,0)===36)w=C.i.cH(w,1)
r=H.dj(H.bR(H.aV(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ef:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ic:function(a){var z,y,x,w
z=H.c([],[P.B])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aO(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bi(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aO(w))}return H.ef(z)},
eg:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aO(x))
if(x<0)throw H.h(H.aO(x))
if(x>65535)return H.ic(a)}return H.ef(a)},
ib:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bi(z,10))>>>0,56320|z&1023)}throw H.h(P.an(a,0,1114111,null,null))},
ad:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ia:function(a){return a.b?H.ad(a).getUTCFullYear()+0:H.ad(a).getFullYear()+0},
i8:function(a){return a.b?H.ad(a).getUTCMonth()+1:H.ad(a).getMonth()+1},
i4:function(a){return a.b?H.ad(a).getUTCDate()+0:H.ad(a).getDate()+0},
i5:function(a){return a.b?H.ad(a).getUTCHours()+0:H.ad(a).getHours()+0},
i7:function(a){return a.b?H.ad(a).getUTCMinutes()+0:H.ad(a).getMinutes()+0},
i9:function(a){return a.b?H.ad(a).getUTCSeconds()+0:H.ad(a).getSeconds()+0},
i6:function(a){return a.b?H.ad(a).getUTCMilliseconds()+0:H.ad(a).getMilliseconds()+0},
q:function(a){throw H.h(H.aO(a))},
f:function(a,b){if(a==null)J.bg(a)
throw H.h(H.aU(a,b))},
aU:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.X(J.bg(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.c2(b,"index",null)},
lb:function(a,b,c){if(a>c)return new P.cm(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cm(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
aO:function(a){return new P.aH(!0,a,null,null)},
l4:function(a){if(typeof a!=="number")throw H.h(H.aO(a))
return a},
h:function(a){var z
if(a==null)a=new P.eb()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fB})
z.name=""}else z.toString=H.fB
return z},
fB:function(){return J.a8(this.dartException)},
o:function(a){throw H.h(a)},
x:function(a){throw H.h(P.bj(a))},
aX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bi(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cS(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ea(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eA()
u=$.$get$eB()
t=$.$get$eC()
s=$.$get$eD()
r=$.$get$eH()
q=$.$get$eI()
p=$.$get$eF()
$.$get$eE()
o=$.$get$eK()
n=$.$get$eJ()
m=v.ag(y)
if(m!=null)return z.$1(H.cS(H.R(y),m))
else{m=u.ag(y)
if(m!=null){m.method="call"
return z.$1(H.cS(H.R(y),m))}else{m=t.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=r.ag(y)
if(m==null){m=q.ag(y)
if(m==null){m=p.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=o.ag(y)
if(m==null){m=n.ag(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ea(H.R(y),m))}}return z.$1(new H.jd(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ek()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ek()
return a},
be:function(a){var z
if(a==null)return new H.fa(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fa(a)},
ld:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a4(0,a[y],a[x])}return b},
ln:function(a,b,c,d,e,f){H.i(a,"$iscN")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.m("Unsupported number of arguments for wrapped closure"))},
bc:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ln)
a.$identity=z
return z},
fS:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isd){z.$reflectionInfo=d
x=H.ig(z).r}else x=d
w=e?Object.create(new H.iH().constructor.prototype):Object.create(new H.cE(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.D()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dz(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lg,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.du:H.cF
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dz(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fP:function(a,b,c,d){var z=H.cF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dz:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fR(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fP(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.D()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bh
if(v==null){v=H.ca("self")
$.bh=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.D()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bh
if(v==null){v=H.ca("self")
$.bh=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fQ:function(a,b,c,d){var z,y
z=H.cF
y=H.du
switch(b?-1:a){case 0:throw H.h(H.iq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fR:function(a,b){var z,y,x,w,v,u,t,s
z=$.bh
if(z==null){z=H.ca("self")
$.bh=z}y=$.dt
if(y==null){y=H.ca("receiver")
$.dt=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fQ(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.az
if(typeof y!=="number")return y.D()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.D()
$.az=y+1
return new Function(z+y+"}")()},
de:function(a,b,c,d,e,f,g){var z,y
z=J.bq(H.bR(b))
H.X(c)
y=!!J.K(d).$isd?J.bq(d):d
return H.fS(a,z,c,y,!!e,f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aF(a,"String"))},
lt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aF(a,"num"))},
fo:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aF(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aF(a,"int"))},
fw:function(a,b){throw H.h(H.aF(a,H.R(b).substring(3)))},
lv:function(a,b){var z=J.c7(b)
throw H.h(H.fO(a,z.bG(b,3,z.gl(b))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.fw(a,b)},
b:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.lv(a,b)},
bR:function(a){if(a==null)return a
if(!!J.K(a).$isd)return a
throw H.h(H.aF(a,"List"))},
lp:function(a,b){if(a==null)return a
if(!!J.K(a).$isd)return a
if(J.K(a)[b])return a
H.fw(a,b)},
fp:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
c6:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fp(J.K(a))
if(z==null)return!1
y=H.fs(z,null,b,null)
return y},
k:function(a,b){var z,y
if(a==null)return a
if($.da)return a
$.da=!0
try{if(H.c6(a,b))return a
z=H.c8(b)
y=H.aF(a,z)
throw H.h(y)}finally{$.da=!1}},
dg:function(a,b){if(a!=null&&!H.dd(a,b))H.o(H.aF(a,H.c8(b)))
return a},
fj:function(a){var z
if(a instanceof H.t){z=H.fp(J.K(a))
if(z!=null)return H.c8(z)
return"Closure"}return H.b4(a)},
lz:function(a){throw H.h(new P.fZ(H.R(a)))},
fq:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aV:function(a){if(a==null)return
return a.$ti},
mQ:function(a,b,c){return H.bf(a["$as"+H.j(c)],H.aV(b))},
bQ:function(a,b,c,d){var z
H.R(c)
H.X(d)
z=H.bf(a["$as"+H.j(c)],H.aV(b))
return z==null?null:z[d]},
aG:function(a,b,c){var z
H.R(b)
H.X(c)
z=H.bf(a["$as"+H.j(b)],H.aV(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.X(b)
z=H.aV(a)
return z==null?null:z[b]},
c8:function(a){var z=H.aW(a,null)
return z},
aW:function(a,b){var z,y
H.u(b,"$isd",[P.n],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dj(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.kV(a,b)
if('futureOr' in a)return"FutureOr<"+H.aW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
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
t=C.i.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aW(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aW(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aW(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aW(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lc(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.aW(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dj:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isd",[P.n],"$asd")
if(a==null)return""
z=new P.c3("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aW(u,c)}v="<"+z.i(0)+">"
return v},
bf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bP:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aV(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fm(H.bf(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.R(b)
H.bR(c)
H.R(d)
if(a==null)return a
z=H.bP(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dj(c,0,null)
throw H.h(H.aF(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fm:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
mO:function(a,b,c){return a.apply(b,H.bf(J.K(b)["$as"+H.j(c)],H.aV(b)))},
ft:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="J"||a===-1||a===-2||H.ft(z)}return!1},
dd:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="J"||b===-1||b===-2||H.ft(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dd(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c6(a,b)}y=J.K(a).constructor
x=H.aV(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aq(y,null,b,null)
return z},
G:function(a,b){if(a!=null&&!H.dd(a,b))throw H.h(H.aF(a,H.c8(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.fs(a,b,c,d)
if('func' in a)return c.builtin$cls==="cN"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bn" in y.prototype))return!1
w=y.prototype["$as"+"bn"]
v=H.bf(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c8(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fm(H.bf(r,z),b,u,d)},
fs:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aq(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aq(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aq(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ls(m,b,l,d)},
ls:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
mP:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
lq:function(a){var z,y,x,w,v,u
z=H.R($.fr.$1(a))
y=$.cx[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.fl.$2(a,z))
if(z!=null){y=$.cx[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cA[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cB(x)
$.cx[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cA[z]=x
return x}if(v==="-"){u=H.cB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fv(a,x)
if(v==="*")throw H.h(P.eS(z))
if(init.leafTags[z]===true){u=H.cB(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fv(a,x)},
fv:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dl(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cB:function(a){return J.dl(a,!1,null,!!a.$isD)},
lr:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cB(z)
else return J.dl(z,c,null,null)},
ll:function(){if(!0===$.di)return
$.di=!0
H.lm()},
lm:function(){var z,y,x,w,v,u,t,s
$.cx=Object.create(null)
$.cA=Object.create(null)
H.lh()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fx.$1(v)
if(u!=null){t=H.lr(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lh:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.bb(C.B,H.bb(C.G,H.bb(C.n,H.bb(C.n,H.bb(C.F,H.bb(C.C,H.bb(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fr=new H.li(v)
$.fl=new H.lj(u)
$.fx=new H.lk(t)},
bb:function(a,b){return a(b)||b},
fy:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fz:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ie:{"^":"a;a,b,c,d,e,f,r,0x",n:{
ig:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bq(z)
y=z[0]
x=z[1]
return new H.ie(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j2:{"^":"a;a,b,c,d,e,f",
ag:function(a){var z,y,x
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
aE:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j2(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cp:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eG:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i_:{"^":"Z;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
ea:function(a,b){return new H.i_(a,b==null?null:b.method)}}},
hr:{"^":"Z;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cS:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hr(a,y,z?null:b.receiver)}}},
jd:{"^":"Z;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lC:{"^":"t:13;a",
$1:function(a){if(!!J.K(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fa:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isau:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.b4(this).trim()+"'"},
ge3:function(){return this},
$iscN:1,
ge3:function(){return this}},
eo:{"^":"t;"},
iH:{"^":"eo;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cE:{"^":"eo;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cE))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.bv(this.a)
else y=typeof z!=="object"?J.aY(z):H.bv(z)
return(y^H.bv(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.b4(z)+"'")},
n:{
cF:function(a){return a.a},
du:function(a){return a.c},
ca:function(a){var z,y,x,w,v
z=new H.cE("self","target","receiver","name")
y=J.bq(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j3:{"^":"Z;a",
i:function(a){return this.a},
n:{
aF:function(a,b){return new H.j3("TypeError: "+H.j(P.cf(a))+": type '"+H.fj(a)+"' is not a subtype of type '"+b+"'")}}},
fN:{"^":"Z;a",
i:function(a){return this.a},
n:{
fO:function(a,b){return new H.fN("CastError: "+H.j(P.cf(a))+": type '"+H.fj(a)+"' is not a subtype of type '"+b+"'")}}},
ip:{"^":"Z;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
iq:function(a){return new H.ip(a)}}},
b0:{"^":"hE;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaz:function(a){return new H.e_(this,[H.z(this,0)])},
dk:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cT(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cT(y,b)}else return this.hg(b)},
hg:function(a){var z=this.d
if(z==null)return!1
return this.cm(this.bO(z,J.aY(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bf(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bf(w,b)
x=y==null?null:y.b
return x}else return this.hh(b)},
hh:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bO(z,J.aY(a)&0x3ffffff)
x=this.cm(y,a)
if(x<0)return
return y[x].b},
a4:function(a,b,c){var z,y,x,w,v,u
H.G(b,H.z(this,0))
H.G(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bR()
this.b=z}this.cM(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bR()
this.c=y}this.cM(y,b,c)}else{x=this.d
if(x==null){x=this.bR()
this.d=x}w=J.aY(b)&0x3ffffff
v=this.bO(x,w)
if(v==null)this.bY(x,w,[this.bS(b,c)])
else{u=this.cm(v,b)
if(u>=0)v[u].b=c
else v.push(this.bS(b,c))}}},
N:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bj(this))
z=z.c}},
cM:function(a,b,c){var z
H.G(b,H.z(this,0))
H.G(c,H.z(this,1))
z=this.bf(a,b)
if(z==null)this.bY(a,b,this.bS(b,c))
else z.b=c},
eJ:function(){this.r=this.r+1&67108863},
bS:function(a,b){var z,y
z=new H.hw(H.G(a,H.z(this,0)),H.G(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eJ()
return z},
cm:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].a,b))return y
return-1},
i:function(a){return P.e2(this)},
bf:function(a,b){return a[b]},
bO:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
eD:function(a,b){delete a[b]},
cT:function(a,b){return this.bf(a,b)!=null},
bR:function(){var z=Object.create(null)
this.bY(z,"<non-identifier-key>",z)
this.eD(z,"<non-identifier-key>")
return z},
$isdZ:1},
hw:{"^":"a;a,b,0c,0d"},
e_:{"^":"h8;a,$ti",
gl:function(a){return this.a.a},
ga0:function(a){var z,y
z=this.a
y=new H.hx(z,z.r,this.$ti)
y.c=z.e
return y}},
hx:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bj(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
li:{"^":"t:13;a",
$1:function(a){return this.a(a)}},
lj:{"^":"t:35;a",
$2:function(a,b){return this.a(a,b)}},
lk:{"^":"t:28;a",
$1:function(a){return this.a(H.R(a))}},
hp:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isec:1,
n:{
hq:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.hi("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lc:function(a){return J.dT(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b9:function(a){return a},
aT:function(a,b,c){H.bR(b)
if(a>>>0!==a||a>=c)throw H.h(H.aU(b,a))},
kU:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.lb(a,b,c))
return b},
hU:{"^":"p;",$ismz:1,"%":"DataView;ArrayBufferView;cX|f4|f5|hT|f6|f7|aQ"},
cX:{"^":"hU;",
gl:function(a){return a.length},
$isD:1,
$asD:I.df},
hT:{"^":"f5;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
$ascg:function(){return[P.w]},
$asr:function(){return[P.w]},
$ise:1,
$ase:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aQ:{"^":"f7;",
$ascg:function(){return[P.B]},
$asr:function(){return[P.B]},
$ise:1,
$ase:function(){return[P.B]},
$isd:1,
$asd:function(){return[P.B]}},
ma:{"^":"aQ;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mb:{"^":"aQ;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mc:{"^":"aQ;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int8Array"},
md:{"^":"aQ;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
me:{"^":"aQ;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mf:{"^":"aQ;",
gl:function(a){return a.length},
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hV:{"^":"aQ;",
gl:function(a){return a.length},
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
bF:function(a,b,c){return new Uint8Array(a.subarray(b,H.kU(b,c,a.length)))},
"%":";Uint8Array"},
f4:{"^":"cX+r;"},
f5:{"^":"f4+cg;"},
f6:{"^":"cX+r;"},
f7:{"^":"f6+cg;"}}],["","",,P,{"^":"",
jz:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.l1()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bc(new P.jB(z),1)).observe(y,{childList:true})
return new P.jA(z,y,x)}else if(self.setImmediate!=null)return P.l2()
return P.l3()},
mD:[function(a){self.scheduleImmediate(H.bc(new P.jC(H.k(a,{func:1,ret:-1})),0))},"$1","l1",4,0,9],
mE:[function(a){self.setImmediate(H.bc(new P.jD(H.k(a,{func:1,ret:-1})),0))},"$1","l2",4,0,9],
mF:[function(a){P.d3(C.l,H.k(a,{func:1,ret:-1}))},"$1","l3",4,0,9],
d3:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.h.a2(a.a,1000)
return P.ky(z<0?0:z,b)},
ev:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.b5]})
z=C.h.a2(a.a,1000)
return P.kz(z<0?0:z,b)},
kY:function(a,b){if(H.c6(a,{func:1,args:[P.a,P.au]}))return b.hG(a,null,P.a,P.au)
if(H.c6(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c9(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kX:function(){var z,y
for(;z=$.ba,z!=null;){$.bN=null
y=z.b
$.ba=y
if(y==null)$.bM=null
z.a.$0()}},
mN:[function(){$.db=!0
try{P.kX()}finally{$.bN=null
$.db=!1
if($.ba!=null)$.$get$d7().$1(P.fn())}},"$0","fn",0,0,3],
fi:function(a){var z=new P.f_(H.k(a,{func:1,ret:-1}))
if($.ba==null){$.bM=z
$.ba=z
if(!$.db)$.$get$d7().$1(P.fn())}else{$.bM.b=z
$.bM=z}},
l0:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.ba
if(z==null){P.fi(a)
$.bN=$.bM
return}y=new P.f_(a)
x=$.bN
if(x==null){y.b=z
$.bN=y
$.ba=y}else{y.b=x.b
x.b=y
$.bN=y
if(y.b==null)$.bM=y}},
lw:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.P
if(C.j===y){P.cw(null,null,C.j,a)
return}y.toString
P.cw(null,null,y,H.k(y.c6(a),z))},
eu:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.P
if(y===C.j){y.toString
return P.d3(a,b)}return P.d3(a,H.k(y.c6(b),z))},
j_:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b5]}
H.k(b,z)
y=$.P
if(y===C.j){y.toString
return P.ev(a,b)}x=y.de(b,P.b5)
$.P.toString
return P.ev(a,H.k(x,z))},
cv:function(a,b,c,d,e){var z={}
z.a=d
P.l0(new P.kZ(z,e))},
fg:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
fh:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.G(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
l_:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.G(e,h)
H.G(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cw:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c6(d):c.h1(d,-1)
P.fi(d)},
jB:{"^":"t:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jA:{"^":"t:39;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jC:{"^":"t:2;a",
$0:function(){this.a.$0()}},
jD:{"^":"t:2;a",
$0:function(){this.a.$0()}},
fd:{"^":"a;a,0b,c",
ep:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bc(new P.kB(this,b),0),a)
else throw H.h(P.ag("`setTimeout()` not found."))},
eq:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bc(new P.kA(this,a,Date.now(),b),0),a)
else throw H.h(P.ag("Periodic timer."))},
$isb5:1,
n:{
ky:function(a,b){var z=new P.fd(!0,0)
z.ep(a,b)
return z},
kz:function(a,b){var z=new P.fd(!1,0)
z.eq(a,b)
return z}}},
kB:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kA:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.ee(w,x)}z.c=y
this.d.$1(z)}},
b8:{"^":"a;0a,b,c,d,e,$ti",
ho:function(a){if(this.c!==6)return!0
return this.b.b.cz(H.k(this.d,{func:1,ret:P.a5,args:[P.a]}),a.a,P.a5,P.a)},
hf:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c6(z,{func:1,args:[P.a,P.au]}))return H.dg(w.hN(z,a.a,a.b,null,y,P.au),x)
else return H.dg(w.cz(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aN:{"^":"a;d7:a<,b,0fn:c<,$ti",
dZ:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kY(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aN(0,$.P,[c])
w=b==null?1:3
this.cN(new P.b8(x,w,a,b,[z,c]))
return x},
hS:function(a,b){return this.dZ(a,null,b)},
cN:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isb8")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaN")
z=y.a
if(z<4){y.cN(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cw(null,null,z,H.k(new P.jR(this,a),{func:1,ret:-1}))}},
d1:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isb8")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaN")
y=u.a
if(y<4){u.d1(a)
return}this.a=y
this.c=u.c}z.a=this.bh(a)
y=this.b
y.toString
P.cw(null,null,y,H.k(new P.jW(z,this),{func:1,ret:-1}))}},
bU:function(){var z=H.i(this.c,"$isb8")
this.c=null
return this.bh(z)},
bh:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cQ:function(a){var z,y,x,w
z=H.z(this,0)
H.dg(a,{futureOr:1,type:z})
y=this.$ti
x=H.bP(a,"$isbn",y,"$asbn")
if(x){z=H.bP(a,"$isaN",y,null)
if(z)P.f1(a,this)
else P.jS(a,this)}else{w=this.bU()
H.G(a,z)
this.a=4
this.c=a
P.bK(this,w)}},
bK:[function(a,b){var z
H.i(b,"$isau")
z=this.bU()
this.a=8
this.c=new P.ak(a,b)
P.bK(this,z)},function(a){return this.bK(a,null)},"i0","$2","$1","gez",4,2,34],
$isbn:1,
n:{
jS:function(a,b){var z,y,x
b.a=1
try{a.dZ(new P.jT(b),new P.jU(b),null)}catch(x){z=H.aX(x)
y=H.be(x)
P.lw(new P.jV(b,z,y))}},
f1:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaN")
if(z>=4){y=b.bU()
b.a=a.a
b.c=a.c
P.bK(b,y)}else{y=H.i(b.c,"$isb8")
b.a=2
b.c=a
a.d1(y)}},
bK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isak")
y=y.b
u=v.a
t=v.b
y.toString
P.cv(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bK(z.a,b)}y=z.a
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
if(p){H.i(r,"$isak")
y=y.b
u=r.a
t=r.b
y.toString
P.cv(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jZ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jY(x,b,r).$0()}else if((y&2)!==0)new P.jX(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.K(y).$isbn){if(y.a>=4){n=H.i(t.c,"$isb8")
t.c=null
b=t.bh(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f1(y,t)
return}}m=b.b
n=H.i(m.c,"$isb8")
m.c=null
b=m.bh(n)
y=x.a
u=x.b
if(!y){H.G(u,H.z(m,0))
m.a=4
m.c=u}else{H.i(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
jR:{"^":"t:2;a,b",
$0:function(){P.bK(this.a,this.b)}},
jW:{"^":"t:2;a,b",
$0:function(){P.bK(this.b,this.a.a)}},
jT:{"^":"t:12;a",
$1:function(a){var z=this.a
z.a=0
z.cQ(a)}},
jU:{"^":"t:29;a",
$2:function(a,b){this.a.bK(a,H.i(b,"$isau"))},
$1:function(a){return this.$2(a,null)}},
jV:{"^":"t:2;a,b,c",
$0:function(){this.a.bK(this.b,this.c)}},
jZ:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dX(H.k(w.d,{func:1}),null)}catch(v){y=H.aX(v)
x=H.be(v)
if(this.d){w=H.i(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.K(z).$isbn){if(z instanceof P.aN&&z.gd7()>=4){if(z.gd7()===8){w=this.b
w.b=H.i(z.gfn(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hS(new P.k_(t),null)
w.a=!1}}},
k_:{"^":"t:30;a",
$1:function(a){return this.a}},
jY:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.G(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cz(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aX(t)
y=H.be(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
jX:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isak")
w=this.c
if(w.ho(z)&&w.e!=null){v=this.b
v.b=w.hf(z)
v.a=!1}}catch(u){y=H.aX(u)
x=H.be(u)
w=H.i(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
f_:{"^":"a;a,0b"},
d0:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aN(0,$.P,[P.B])
z.a=0
this.hl(new P.iK(z,this),!0,new P.iL(z,y),y.gez())
return y}},
iK:{"^":"t;a,b",
$1:function(a){H.G(a,H.aG(this.b,"d0",0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.aG(this.b,"d0",0)]}}},
iL:{"^":"t:2;a,b",
$0:function(){this.b.cQ(this.a.a)}},
em:{"^":"a;$ti"},
iJ:{"^":"a;"},
b5:{"^":"a;"},
ak:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isZ:1},
kI:{"^":"a;",$ismC:1},
kZ:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eb()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
kk:{"^":"kI;",
hO:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.fg(null,null,this,a,-1)}catch(x){z=H.aX(x)
y=H.be(x)
P.cv(null,null,this,z,H.i(y,"$isau"))}},
hP:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.G(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.fh(null,null,this,a,b,-1,c)}catch(x){z=H.aX(x)
y=H.be(x)
P.cv(null,null,this,z,H.i(y,"$isau"))}},
h1:function(a,b){return new P.km(this,H.k(a,{func:1,ret:b}),b)},
c6:function(a){return new P.kl(this,H.k(a,{func:1,ret:-1}))},
de:function(a,b){return new P.kn(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
dX:function(a,b){H.k(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.fg(null,null,this,a,b)},
cz:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.G(b,d)
if($.P===C.j)return a.$1(b)
return P.fh(null,null,this,a,b,c,d)},
hN:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.G(b,e)
H.G(c,f)
if($.P===C.j)return a.$2(b,c)
return P.l_(null,null,this,a,b,c,d,e,f)},
hG:function(a,b,c,d){return H.k(a,{func:1,ret:b,args:[c,d]})}},
km:{"^":"t;a,b,c",
$0:function(){return this.a.dX(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kl:{"^":"t:3;a,b",
$0:function(){return this.a.hO(this.b)}},
kn:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.hP(this.b,H.G(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hz:function(a,b,c){H.bR(a)
return H.u(H.ld(a,new H.b0(0,0,[b,c])),"$isdZ",[b,c],"$asdZ")},
hy:function(a,b){return new H.b0(0,0,[a,b])},
hA:function(a,b,c,d){return new P.k6(0,0,[d])},
hm:function(a,b,c){var z,y
if(P.dc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bO()
C.a.h(y,a)
try{P.kW(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.en(b,H.lp(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cO:function(a,b,c){var z,y,x
if(P.dc(a))return b+"..."+c
z=new P.c3(b)
y=$.$get$bO()
C.a.h(y,a)
try{x=z
x.a=P.en(x.gaG(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaG()+c
y=z.gaG()
return y.charCodeAt(0)==0?y:y},
dc:function(a){var z,y
for(z=0;y=$.$get$bO(),z<y.length;++z)if(a===y[z])return!0
return!1},
kW:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga0(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.j(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.E();t=s,s=r){r=z.gO(z);++x
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
e2:function(a){var z,y,x
z={}
if(P.dc(a))return"{...}"
y=new P.c3("")
try{C.a.h($.$get$bO(),a)
x=y
x.a=x.gaG()+"{"
z.a=!0
J.fF(a,new P.hF(z,y))
z=y
z.a=z.gaG()+"}"}finally{z=$.$get$bO()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaG()
return z.charCodeAt(0)==0?z:z},
k6:{"^":"k0;a,0b,0c,0d,0e,0f,r,$ti",
ga0:function(a){return P.f3(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.G(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d9()
this.b=z}return this.cO(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d9()
this.c=y}return this.cO(y,b)}else return this.er(0,b)},
er:function(a,b){var z,y,x
H.G(b,H.z(this,0))
z=this.d
if(z==null){z=P.d9()
this.d=z}y=this.cR(b)
x=z[y]
if(x==null)z[y]=[this.bJ(b)]
else{if(this.cW(x,b)>=0)return!1
x.push(this.bJ(b))}return!0},
C:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d2(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d2(this.c,b)
else return this.fg(0,b)},
fg:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eG(z,b)
x=this.cW(y,b)
if(x<0)return!1
this.d9(y.splice(x,1)[0])
return!0},
cO:function(a,b){H.G(b,H.z(this,0))
if(H.i(a[b],"$isd8")!=null)return!1
a[b]=this.bJ(b)
return!0},
d2:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isd8")
if(z==null)return!1
this.d9(z)
delete a[b]
return!0},
cP:function(){this.r=this.r+1&67108863},
bJ:function(a){var z,y
z=new P.d8(H.G(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cP()
return z},
d9:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cP()},
cR:function(a){return J.aY(a)&0x3ffffff},
eG:function(a,b){return a[this.cR(b)]},
cW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.H(a[y].a,b))return y
return-1},
n:{
d9:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d8:{"^":"a;a,0b,0c"},
k7:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bj(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.G(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
f3:function(a,b,c){var z=new P.k7(a,b,[c])
z.c=a.e
return z}}},
k0:{"^":"ir;"},
ck:{"^":"k8;",$ise:1,$isd:1},
r:{"^":"a;$ti",
ga0:function(a){return new H.e0(a,this.gl(a),0,[H.bQ(this,a,"r",0)])},
F:function(a,b){return this.j(a,b)},
hV:function(a,b){var z,y,x
z=H.c([],[H.bQ(this,a,"r",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.a4(z,y,this.j(a,y));++y}return z},
hU:function(a){return this.hV(a,!0)},
i:function(a){return P.cO(a,"[","]")}},
hE:{"^":"ah;"},
hF:{"^":"t:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ah:{"^":"a;$ti",
N:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bQ(this,a,"ah",0),H.bQ(this,a,"ah",1)]})
for(z=J.bT(this.gaz(a));z.E();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.bg(this.gaz(a))},
i:function(a){return P.e2(a)},
$isa6:1},
it:{"^":"a;$ti",
i:function(a){return P.cO(this,"{","}")},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dq("index"))
if(b<0)H.o(P.an(b,0,null,"index",null))
for(z=P.f3(this,this.r,H.z(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.h(P.N(b,this,"index",null,y))},
$ise:1},
ir:{"^":"it;"},
k8:{"^":"a+r;"}}],["","",,P,{"^":"",cI:{"^":"a;$ti"},dC:{"^":"iJ;$ti"},ha:{"^":"cI;",
$ascI:function(){return[P.n,[P.d,P.B]]}},jj:{"^":"ha;a"},jk:{"^":"dC;",
h5:function(a,b,c){var z,y,x,w
z=a.length
P.eh(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kH(0,0,x)
if(w.eF(a,b,z)!==z)w.da(C.i.ca(a,z-1),0)
return C.J.bF(x,0,w.b)},
h4:function(a){return this.h5(a,0,null)},
$asdC:function(){return[P.n,[P.d,P.B]]}},kH:{"^":"a;a,b,c",
da:function(a,b){var z,y,x,w,v
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
eF:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.ca(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.be(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.da(w,C.i.be(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hc:function(a){var z=J.K(a)
if(!!z.$ist)return z.i(a)
return"Instance of '"+H.b4(a)+"'"},
hB:function(a,b,c,d){var z,y
H.G(b,d)
z=J.hn(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a4(z,y,b)
return H.u(z,"$isd",[d],"$asd")},
hC:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga0(a);x.E();)C.a.h(y,H.G(x.gO(x),c))
if(b)return y
return H.u(J.bq(y),"$isd",z,"$asd")},
d1:function(a,b,c){var z,y
z=P.B
H.u(a,"$ise",[z],"$ase")
if(a.constructor===Array){H.u(a,"$isb_",[z],"$asb_")
y=a.length
c=P.eh(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.al()
z=c<y}else z=!0
return H.eg(z?C.a.bF(a,b,c):a)}return P.iM(a,b,c)},
iM:function(a,b,c){var z,y,x
H.u(a,"$ise",[P.B],"$ase")
z=J.bT(a)
for(y=0;y<b;++y)if(!z.E())throw H.h(P.an(b,0,y,null,null))
x=[]
for(;z.E();)x.push(z.gO(z))
return H.eg(x)},
ih:function(a,b,c){return new H.hp(a,H.hq(a,!1,!0,!1))},
kG:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$isd",[P.B],"$asd")
if(c===C.r){z=$.$get$ff().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.h4(H.G(b,H.aG(c,"cI",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ib(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hc(a)},
m:function(a){return new P.f0(a)},
dm:function(a){H.lu(a)},
a5:{"^":"a;"},
"+bool":0,
as:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.as))return!1
return this.a===b.a&&this.b===b.b},
gY:function(a){var z=this.a
return(z^C.h.bi(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.h_(H.ia(this))
y=P.bU(H.i8(this))
x=P.bU(H.i4(this))
w=P.bU(H.i5(this))
v=P.bU(H.i7(this))
u=P.bU(H.i9(this))
t=P.h0(H.i6(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
h_:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bU:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"Y;"},
"+double":0,
aZ:{"^":"a;a",
k:function(a,b){return new P.aZ(C.h.U(this.a*b))},
al:function(a,b){return C.h.al(this.a,H.i(b,"$isaZ").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aZ))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.h7()
y=this.a
if(y<0)return"-"+new P.aZ(0-y).i(0)
x=z.$1(C.h.a2(y,6e7)%60)
w=z.$1(C.h.a2(y,1e6)%60)
v=new P.h6().$1(y%1e6)
return""+C.h.a2(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
dM:function(a,b,c,d,e,f){return new P.aZ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h6:{"^":"t:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h7:{"^":"t:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
eb:{"^":"Z;",
i:function(a){return"Throw of null."}},
aH:{"^":"Z;a,b,c,d",
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbM()+y+x
if(!this.a)return w
v=this.gbL()
u=P.cf(this.b)
return w+v+": "+H.j(u)},
n:{
fH:function(a){return new P.aH(!1,null,null,a)},
c9:function(a,b,c){return new P.aH(!0,a,b,c)},
dq:function(a){return new P.aH(!1,null,a,"Must not be null")}}},
cm:{"^":"aH;e,f,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
c2:function(a,b,c){return new P.cm(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.cm(b,c,!0,a,d,"Invalid value")},
eh:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.h(P.an(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.h(P.an(b,a,c,"end",f))
return b}return c}}},
hl:{"^":"aH;e,l:f>,a,b,c,d",
gbM:function(){return"RangeError"},
gbL:function(){if(J.fC(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
N:function(a,b,c,d,e){var z=H.X(e!=null?e:J.bg(b))
return new P.hl(b,z,!0,a,c,"Index out of range")}}},
jf:{"^":"Z;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
ag:function(a){return new P.jf(a)}}},
jc:{"^":"Z;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eS:function(a){return new P.jc(a)}}},
iG:{"^":"Z;a",
i:function(a){return"Bad state: "+this.a}},
fV:{"^":"Z;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cf(z))+"."},
n:{
bj:function(a){return new P.fV(a)}}},
i0:{"^":"a;",
i:function(a){return"Out of Memory"},
$isZ:1},
ek:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isZ:1},
fZ:{"^":"Z;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f0:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hi:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bG(x,0,75)+"..."
return y+"\n"+x}},
B:{"^":"Y;"},
"+int":0,
e:{"^":"a;$ti",
gl:function(a){var z,y
z=this.ga0(this)
for(y=0;z.E();)++y
return y},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dq("index"))
if(b<0)H.o(P.an(b,0,null,"index",null))
for(z=this.ga0(this),y=0;z.E();){x=z.gO(z)
if(b===y)return x;++y}throw H.h(P.N(b,this,"index",null,y))},
i:function(a){return P.hm(this,"(",")")}},
cP:{"^":"a;$ti"},
d:{"^":"a;$ti",$ise:1},
"+List":0,
a6:{"^":"a;$ti"},
J:{"^":"a;",
gY:function(a){return P.a.prototype.gY.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Y:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gY:function(a){return H.bv(this)},
i:function(a){return"Instance of '"+H.b4(this)+"'"},
toString:function(){return this.i(this)}},
au:{"^":"a;"},
n:{"^":"a;",$isec:1},
"+String":0,
c3:{"^":"a;aG:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
en:function(a,b,c){var z=J.bT(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gO(z))
while(z.E())}else{a+=H.j(z.gO(z))
for(;z.E();)a=a+c+H.j(z.gO(z))}return a}}}}],["","",,W,{"^":"",
cH:function(a,b){var z=document.createElement("canvas")
return z},
h9:function(a){H.i(a,"$isab")
return"wheel"},
cs:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f2:function(a,b,c,d){var z,y
z=W.cs(W.cs(W.cs(W.cs(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fk:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.de(a,b)},
bp:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lE:{"^":"p;0l:length=","%":"AccessibleNodeList"},
lF:{"^":"bp;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lG:{"^":"bp;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fM:{"^":"p;","%":";Blob"},
cG:{"^":"bp;",
bE:function(a,b,c){if(c!=null)return a.getContext(b,P.l5(c,null))
return a.getContext(b)},
e4:function(a,b){return this.bE(a,b,null)},
$iscG:1,
"%":"HTMLCanvasElement"},
dx:{"^":"p;",$isdx:1,"%":"CanvasRenderingContext2D"},
lM:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lO:{"^":"fY;0l:length=","%":"CSSPerspective"},
bk:{"^":"p;",$isbk:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lP:{"^":"jH;0l:length=",
e5:function(a,b){var z=a.getPropertyValue(this.ew(a,b))
return z==null?"":z},
ew:function(a,b){var z,y
z=$.$get$dD()
y=z[b]
if(typeof y==="string")return y
y=this.fv(a,b)
z[b]=y
return y},
fv:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h1()+b
if(z in a)return z
return b},
gc7:function(a){return a.bottom},
gac:function(a){return a.height},
gaP:function(a){return a.left},
gb5:function(a){return a.right},
gb8:function(a){return a.top},
gad:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fX:{"^":"a;",
gaP:function(a){return this.e5(a,"left")}},
dE:{"^":"p;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fY:{"^":"p;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lQ:{"^":"dE;0l:length=","%":"CSSTransformValue"},
lR:{"^":"dE;0l:length=","%":"CSSUnparsedValue"},
lS:{"^":"p;0l:length=","%":"DataTransferItemList"},
lT:{"^":"p;",
i:function(a){return String(a)},
"%":"DOMException"},
lU:{"^":"jJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.ae,P.Y]]},
$asr:function(){return[[P.ae,P.Y]]},
$ise:1,
$ase:function(){return[[P.ae,P.Y]]},
$isd:1,
$asd:function(){return[[P.ae,P.Y]]},
$asy:function(){return[[P.ae,P.Y]]},
"%":"ClientRectList|DOMRectList"},
h5:{"^":"p;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gad(a))+" x "+H.j(this.gac(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bP(b,"$isae",[P.Y],"$asae")
if(!z)return!1
z=J.cy(b)
return a.left===z.gaP(b)&&a.top===z.gb8(b)&&this.gad(a)===z.gad(b)&&this.gac(a)===z.gac(b)},
gY:function(a){return W.f2(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gad(a)&0x1FFFFFFF,this.gac(a)&0x1FFFFFFF)},
gc7:function(a){return a.bottom},
gac:function(a){return a.height},
gaP:function(a){return a.left},
gb5:function(a){return a.right},
gb8:function(a){return a.top},
gad:function(a){return a.width},
$isae:1,
$asae:function(){return[P.Y]},
"%":";DOMRectReadOnly"},
lV:{"^":"jL;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.n]},
$asr:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$asy:function(){return[P.n]},
"%":"DOMStringList"},
lW:{"^":"p;0l:length=","%":"DOMTokenList"},
jG:{"^":"ck;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.i(z[b],"$isa3")},
h:function(a,b){this.a.appendChild(b)
return b},
ga0:function(a){var z=this.hU(this)
return new J.ar(z,z.length,0,[H.z(z,0)])},
$asr:function(){return[W.a3]},
$ase:function(){return[W.a3]},
$asd:function(){return[W.a3]}},
a3:{"^":"L;",
gdh:function(a){return new W.jG(a,a.children)},
gdi:function(a){return P.id(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Y)},
i:function(a){return a.localName},
$isa3:1,
"%":";Element"},
aa:{"^":"p;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ab:{"^":"p;",
dc:["e9",function(a,b,c,d){H.k(c,{func:1,args:[W.aa]})
if(c!=null)this.es(a,b,c,!1)}],
es:function(a,b,c,d){return a.addEventListener(b,H.bc(H.k(c,{func:1,args:[W.aa]}),1),!1)},
$isab:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;f8|f9|fb|fc"},
bm:{"^":"fM;",$isbm:1,"%":"File"},
lX:{"^":"jQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bm]},
$asr:function(){return[W.bm]},
$ise:1,
$ase:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asy:function(){return[W.bm]},
"%":"FileList"},
lY:{"^":"ab;0l:length=","%":"FileWriter"},
lZ:{"^":"bp;0l:length=","%":"HTMLFormElement"},
bo:{"^":"p;",$isbo:1,"%":"Gamepad"},
m_:{"^":"p;0l:length=","%":"History"},
m0:{"^":"k2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.L]},
$asr:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ch:{"^":"p;0dm:data=",$isch:1,"%":"ImageData"},
dR:{"^":"bp;",$isdR:1,"%":"HTMLImageElement"},
br:{"^":"d4;",$isbr:1,"%":"KeyboardEvent"},
m4:{"^":"p;",
i:function(a){return String(a)},
"%":"Location"},
m5:{"^":"p;0l:length=","%":"MediaList"},
m6:{"^":"ab;",
dc:function(a,b,c,d){H.k(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.e9(a,b,c,!1)},
"%":"MessagePort"},
m7:{"^":"k9;",
j:function(a,b){return P.aP(a.get(H.R(b)))},
N:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gaz:function(a){var z=H.c([],[P.n])
this.N(a,new W.hQ(z))
return z},
gl:function(a){return a.size},
$asah:function(){return[P.n,null]},
$isa6:1,
$asa6:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hQ:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m8:{"^":"ka;",
j:function(a,b){return P.aP(a.get(H.R(b)))},
N:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gaz:function(a){var z=H.c([],[P.n])
this.N(a,new W.hR(z))
return z},
gl:function(a){return a.size},
$asah:function(){return[P.n,null]},
$isa6:1,
$asa6:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hR:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bs:{"^":"p;",$isbs:1,"%":"MimeType"},
m9:{"^":"kc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bs]},
$asr:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asy:function(){return[W.bs]},
"%":"MimeTypeArray"},
at:{"^":"d4;",$isat:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jF:{"^":"ck;a",
ga0:function(a){var z=this.a.childNodes
return new W.dO(z,z.length,-1,[H.bQ(C.K,z,"y",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asr:function(){return[W.L]},
$ase:function(){return[W.L]},
$asd:function(){return[W.L]}},
L:{"^":"ab;",
i:function(a){var z=a.nodeValue
return z==null?this.ea(a):z},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hW:{"^":"ke;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.L]},
$asr:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
bu:{"^":"p;0l:length=",$isbu:1,"%":"Plugin"},
mi:{"^":"ki;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bu]},
$asr:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asy:function(){return[W.bu]},
"%":"PluginArray"},
mk:{"^":"ko;",
j:function(a,b){return P.aP(a.get(H.R(b)))},
N:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gaz:function(a){var z=H.c([],[P.n])
this.N(a,new W.io(z))
return z},
gl:function(a){return a.size},
$asah:function(){return[P.n,null]},
$isa6:1,
$asa6:function(){return[P.n,null]},
"%":"RTCStatsReport"},
io:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ml:{"^":"bp;0l:length=","%":"HTMLSelectElement"},
bx:{"^":"ab;",$isbx:1,"%":"SourceBuffer"},
mm:{"^":"f9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$asr:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"SourceBufferList"},
by:{"^":"p;",$isby:1,"%":"SpeechGrammar"},
mn:{"^":"kq;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.by]},
$asr:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$asy:function(){return[W.by]},
"%":"SpeechGrammarList"},
bz:{"^":"p;0l:length=",$isbz:1,"%":"SpeechRecognitionResult"},
mp:{"^":"kt;",
j:function(a,b){return a.getItem(H.R(b))},
N:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaz:function(a){var z=H.c([],[P.n])
this.N(a,new W.iI(z))
return z},
gl:function(a){return a.length},
$asah:function(){return[P.n,P.n]},
$isa6:1,
$asa6:function(){return[P.n,P.n]},
"%":"Storage"},
iI:{"^":"t:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bA:{"^":"p;",$isbA:1,"%":"CSSStyleSheet|StyleSheet"},
bB:{"^":"ab;",$isbB:1,"%":"TextTrack"},
bC:{"^":"ab;",$isbC:1,"%":"TextTrackCue|VTTCue"},
mt:{"^":"kx;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bC]},
$asr:function(){return[W.bC]},
$ise:1,
$ase:function(){return[W.bC]},
$isd:1,
$asd:function(){return[W.bC]},
$asy:function(){return[W.bC]},
"%":"TextTrackCueList"},
mu:{"^":"fc;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bB]},
$asr:function(){return[W.bB]},
$ise:1,
$ase:function(){return[W.bB]},
$isd:1,
$asd:function(){return[W.bB]},
$asy:function(){return[W.bB]},
"%":"TextTrackList"},
mv:{"^":"p;0l:length=","%":"TimeRanges"},
bE:{"^":"p;",$isbE:1,"%":"Touch"},
b6:{"^":"d4;",$isb6:1,"%":"TouchEvent"},
mw:{"^":"kD;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bE]},
$asr:function(){return[W.bE]},
$ise:1,
$ase:function(){return[W.bE]},
$isd:1,
$asd:function(){return[W.bE]},
$asy:function(){return[W.bE]},
"%":"TouchList"},
mx:{"^":"p;0l:length=","%":"TrackDefaultList"},
d4:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mA:{"^":"p;",
i:function(a){return String(a)},
"%":"URL"},
mB:{"^":"ab;0l:length=","%":"VideoTrackList"},
bJ:{"^":"at;",
gh9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ag("deltaY is not supported"))},
gh8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ag("deltaX is not supported"))},
$isbJ:1,
"%":"WheelEvent"},
jy:{"^":"ab;",
fj:function(a,b){return a.requestAnimationFrame(H.bc(H.k(b,{func:1,ret:-1,args:[P.Y]}),1))},
eE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mG:{"^":"kK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bk]},
$asr:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asy:function(){return[W.bk]},
"%":"CSSRuleList"},
mH:{"^":"h5;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bP(b,"$isae",[P.Y],"$asae")
if(!z)return!1
z=J.cy(b)
return a.left===z.gaP(b)&&a.top===z.gb8(b)&&a.width===z.gad(b)&&a.height===z.gac(b)},
gY:function(a){return W.f2(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gac:function(a){return a.height},
gad:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mJ:{"^":"kM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bo]},
$asr:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asy:function(){return[W.bo]},
"%":"GamepadList"},
mK:{"^":"kO;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.L]},
$asr:function(){return[W.L]},
$ise:1,
$ase:function(){return[W.L]},
$isd:1,
$asd:function(){return[W.L]},
$asy:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mL:{"^":"kQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bz]},
$asr:function(){return[W.bz]},
$ise:1,
$ase:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$asy:function(){return[W.bz]},
"%":"SpeechRecognitionResultList"},
mM:{"^":"kS;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bA]},
$asr:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$asy:function(){return[W.bA]},
"%":"StyleSheetList"},
jM:{"^":"d0;a,b,c,$ti",
hl:function(a,b,c,d){var z=H.z(this,0)
H.k(a,{func:1,ret:-1,args:[z]})
H.k(c,{func:1,ret:-1})
return W.W(this.a,this.b,a,!1,z)}},
mI:{"^":"jM;a,b,c,$ti"},
jN:{"^":"em;a,b,c,d,e,$ti",
fB:function(){var z=this.d
if(z!=null&&this.a<=0)J.fE(this.b,this.c,z,!1)},
n:{
W:function(a,b,c,d,e){var z=c==null?null:W.fk(new W.jO(c),W.aa)
z=new W.jN(0,a,b,z,!1,[e])
z.fB()
return z}}},
jO:{"^":"t:5;a",
$1:function(a){return this.a.$1(H.i(a,"$isaa"))}},
y:{"^":"a;$ti",
ga0:function(a){return new W.dO(a,this.gl(a),-1,[H.bQ(this,a,"y",0)])}},
dO:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fD(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
jH:{"^":"p+fX;"},
jI:{"^":"p+r;"},
jJ:{"^":"jI+y;"},
jK:{"^":"p+r;"},
jL:{"^":"jK+y;"},
jP:{"^":"p+r;"},
jQ:{"^":"jP+y;"},
k1:{"^":"p+r;"},
k2:{"^":"k1+y;"},
k9:{"^":"p+ah;"},
ka:{"^":"p+ah;"},
kb:{"^":"p+r;"},
kc:{"^":"kb+y;"},
kd:{"^":"p+r;"},
ke:{"^":"kd+y;"},
kh:{"^":"p+r;"},
ki:{"^":"kh+y;"},
ko:{"^":"p+ah;"},
f8:{"^":"ab+r;"},
f9:{"^":"f8+y;"},
kp:{"^":"p+r;"},
kq:{"^":"kp+y;"},
kt:{"^":"p+ah;"},
kw:{"^":"p+r;"},
kx:{"^":"kw+y;"},
fb:{"^":"ab+r;"},
fc:{"^":"fb+y;"},
kC:{"^":"p+r;"},
kD:{"^":"kC+y;"},
kJ:{"^":"p+r;"},
kK:{"^":"kJ+y;"},
kL:{"^":"p+r;"},
kM:{"^":"kL+y;"},
kN:{"^":"p+r;"},
kO:{"^":"kN+y;"},
kP:{"^":"p+r;"},
kQ:{"^":"kP+y;"},
kR:{"^":"p+r;"},
kS:{"^":"kR+y;"}}],["","",,P,{"^":"",
l8:function(a){var z,y
z=J.K(a)
if(!!z.$isch){y=z.gdm(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fe(a.data,a.height,a.width)},
l7:function(a){if(a instanceof P.fe)return{data:a.a,height:a.b,width:a.c}
return a},
aP:function(a){var z,y,x,w,v
if(a==null)return
z=P.hy(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.R(y[w])
z.a4(0,v,a[v])}return z},
l5:function(a,b){var z={}
a.N(0,new P.l6(z))
return z},
dK:function(){var z=$.dJ
if(z==null){z=J.cC(window.navigator.userAgent,"Opera",0)
$.dJ=z}return z},
h1:function(){var z,y
z=$.dG
if(z!=null)return z
y=$.dH
if(y==null){y=J.cC(window.navigator.userAgent,"Firefox",0)
$.dH=y}if(y)z="-moz-"
else{y=$.dI
if(y==null){y=!P.dK()&&J.cC(window.navigator.userAgent,"Trident/",0)
$.dI=y}if(y)z="-ms-"
else z=P.dK()?"-o-":"-webkit-"}$.dG=z
return z},
fe:{"^":"a;dm:a>,b,c",$isch:1},
l6:{"^":"t:14;a",
$2:function(a,b){this.a[a]=b}},
hf:{"^":"ck;a,b",
gbP:function(){var z,y,x
z=this.b
y=H.aG(z,"r",0)
x=W.a3
return new H.hG(new H.jw(z,H.k(new P.hg(),{func:1,ret:P.a5,args:[y]}),[y]),H.k(new P.hh(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bg(this.gbP().a)},
j:function(a,b){var z=this.gbP()
return z.b.$1(J.dp(z.a,b))},
ga0:function(a){var z=P.hC(this.gbP(),!1,W.a3)
return new J.ar(z,z.length,0,[H.z(z,0)])},
$asr:function(){return[W.a3]},
$ase:function(){return[W.a3]},
$asd:function(){return[W.a3]}},
hg:{"^":"t:26;",
$1:function(a){return!!J.K(H.i(a,"$isL")).$isa3}},
hh:{"^":"t:27;",
$1:function(a){return H.b(H.i(a,"$isL"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ct:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kj:{"^":"a;$ti",
gb5:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.G(z+this.c,H.z(this,0))},
gc7:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.G(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bP(b,"$isae",[P.Y],"$asae")
if(!z)return!1
z=this.a
y=J.cy(b)
x=y.gaP(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb8(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.z(this,0)
if(H.G(z+this.c,w)===y.gb5(b)){if(typeof x!=="number")return x.D()
z=H.G(x+this.d,w)===y.gc7(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.aY(z)
x=this.b
w=J.aY(x)
if(typeof z!=="number")return z.D()
v=H.z(this,0)
z=H.G(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.G(x+this.d,v)
return P.k3(P.ct(P.ct(P.ct(P.ct(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ae:{"^":"kj;aP:a>,b8:b>,ad:c>,ac:d>,$ti",n:{
id:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.al()
if(c<0)z=-c*0
else z=c
H.G(z,e)
if(typeof d!=="number")return d.al()
if(d<0)y=-d*0
else y=d
return new P.ae(a,b,z,H.G(y,e),[e])}}}}],["","",,P,{"^":"",bZ:{"^":"p;",$isbZ:1,"%":"SVGLength"},m3:{"^":"k5;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asr:function(){return[P.bZ]},
$ise:1,
$ase:function(){return[P.bZ]},
$isd:1,
$asd:function(){return[P.bZ]},
$asy:function(){return[P.bZ]},
"%":"SVGLengthList"},c1:{"^":"p;",$isc1:1,"%":"SVGNumber"},mg:{"^":"kg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asr:function(){return[P.c1]},
$ise:1,
$ase:function(){return[P.c1]},
$isd:1,
$asd:function(){return[P.c1]},
$asy:function(){return[P.c1]},
"%":"SVGNumberList"},mj:{"^":"p;0l:length=","%":"SVGPointList"},mq:{"^":"kv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asr:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$asy:function(){return[P.n]},
"%":"SVGStringList"},mr:{"^":"a3;",
gdh:function(a){return new P.hf(a,new W.jF(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},c4:{"^":"p;",$isc4:1,"%":"SVGTransform"},my:{"^":"kF;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asr:function(){return[P.c4]},
$ise:1,
$ase:function(){return[P.c4]},
$isd:1,
$asd:function(){return[P.c4]},
$asy:function(){return[P.c4]},
"%":"SVGTransformList"},k4:{"^":"p+r;"},k5:{"^":"k4+y;"},kf:{"^":"p+r;"},kg:{"^":"kf+y;"},ku:{"^":"p+r;"},kv:{"^":"ku+y;"},kE:{"^":"p+r;"},kF:{"^":"kE+y;"}}],["","",,P,{"^":"",lH:{"^":"p;0l:length=","%":"AudioBuffer"},lI:{"^":"jE;",
j:function(a,b){return P.aP(a.get(H.R(b)))},
N:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gaz:function(a){var z=H.c([],[P.n])
this.N(a,new P.fJ(z))
return z},
gl:function(a){return a.size},
$asah:function(){return[P.n,null]},
$isa6:1,
$asa6:function(){return[P.n,null]},
"%":"AudioParamMap"},fJ:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lJ:{"^":"ab;0l:length=","%":"AudioTrackList"},fL:{"^":"ab;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mh:{"^":"fL;0l:length=","%":"OfflineAudioContext"},jE:{"^":"p+ah;"}}],["","",,P,{"^":"",cZ:{"^":"p;",
dY:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.K(g)
if(!!y.$isch&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.l7(g))
return}if(!!y.$isdR&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fH("Incorrect number or type of arguments"))},
hQ:function(a,b,c,d,e,f,g){return this.dY(a,b,c,d,e,f,g,null,null,null)},
$iscZ:1,
"%":"WebGLRenderingContext"},iN:{"^":"p;",$isiN:1,"%":"WebGLTexture"},ja:{"^":"p;",$isja:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mo:{"^":"ks;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.N(b,a,null,null,null))
return P.aP(a.item(b))},
F:function(a,b){return this.j(a,b)},
$asr:function(){return[[P.a6,,,]]},
$ise:1,
$ase:function(){return[[P.a6,,,]]},
$isd:1,
$asd:function(){return[[P.a6,,,]]},
$asy:function(){return[[P.a6,,,]]},
"%":"SQLResultSetRowList"},kr:{"^":"p+r;"},ks:{"^":"kr+y;"}}],["","",,O,{"^":"",al:{"^":"a;0a,0b,0c,0d,$ti",
bc:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cE:function(a,b,c){var z=H.aG(this,"al",0)
H.k(b,{func:1,ret:P.a5,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.B,[P.e,z]]}
H.k(a,z)
H.k(c,z)
this.b=b
this.c=a
this.d=c},
aC:function(a,b){return this.cE(a,null,b)},
d0:function(a){var z
H.u(a,"$ise",[H.aG(this,"al",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cZ:function(a,b){var z
H.u(b,"$ise",[H.aG(this,"al",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga0:function(a){var z=this.a
return new J.ar(z,z.length,0,[H.z(z,0)])},
F:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aG(this,"al",0)
H.G(b,z)
z=[z]
if(this.d0(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cZ(x,H.c([b],z))}},
c1:function(a,b){var z,y
H.u(b,"$ise",[H.aG(this,"al",0)],"$ase")
if(this.d0(b)){z=this.a
y=z.length
C.a.c1(z,b)
this.cZ(y,b)}},
$ise:1,
n:{
cc:function(a){var z=new O.al([a])
z.bc(a)
return z}}},cV:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
ek:function(a){var z=this.b
if(!(z==null))z.u(a)},
aD:function(){return this.ek(null)},
gT:function(a){var z=this.a
if(z.length>0)return C.a.gco(z)
else return V.aA()},
bC:function(a){var z=this.a
if(a==null)C.a.h(z,V.aA())
else C.a.h(z,a)
this.aD()},
aA:function(){var z=this.a
if(z.length>0){z.pop()
this.aD()}}}}],["","",,E,{"^":"",cD:{"^":"a;"},aI:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbb:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gp().C(0,this.gdW())
y=this.c
if(y!=null)y.gp().h(0,this.gdW())
x=new D.A("shape",z,this.c,this,[F.ei])
x.b=!0
this.ak(x)}},
sb0:function(a){var z,y
if(!J.H(this.r,a)){z=this.r
if(z!=null)z.gp().C(0,this.gdV())
if(a!=null)a.gp().h(0,this.gdV())
this.r=a
y=new D.A("mover",z,a,this,[U.ac])
y.b=!0
this.ak(y)}},
a7:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aQ(0,b,this):null
if(!J.H(y,this.x)){x=this.x
this.x=y
w=new D.A("matrix",x,y,this,[V.ai])
w.b=!0
this.ak(w)}for(z=this.y.a,z=new J.ar(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a7(0,b)},
a3:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gT(z))
else C.a.h(z.a,y.k(0,z.gT(z)))
z.aD()
a.cu(this.f)
z=a.dy
x=(z&&C.a).gco(z)
if(x!=null&&this.d!=null)x.b4(a,this)
for(z=this.y.a,z=new J.ar(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a3(a)
a.cs()
a.dx.aA()},
gp:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
ak:function(a){var z=this.z
if(!(z==null))z.u(a)},
W:function(){return this.ak(null)},
hw:[function(a){H.i(a,"$isv")
this.e=null
this.ak(a)},function(){return this.hw(null)},"iN","$1","$0","gdW",0,2,0],
hv:[function(a){this.ak(H.i(a,"$isv"))},function(){return this.hv(null)},"iM","$1","$0","gdV",0,2,0],
ht:[function(a){this.ak(H.i(a,"$isv"))},function(){return this.ht(null)},"iK","$1","$0","gdU",0,2,0],
iJ:[function(a,b){var z,y,x,w,v,u,t,s
H.u(b,"$ise",[E.aI],"$ase")
for(z=b.length,y=this.gdU(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.aJ()
t.d=0
u.sa5(t)}t=u.ga5()
t.toString
H.k(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.W()},"$2","ghs",8,0,7],
iL:[function(a,b){var z,y,x,w,v
H.u(b,"$ise",[E.aI],"$ase")
for(z=b.length,y=this.gdU(),x=0;x<b.length;b.length===z||(0,H.x)(b),++x){w=b[x]
if(w!=null){if(w.ga5()==null){v=new D.aJ()
v.d=0
w.sa5(v)}w.ga5().C(0,y)}}this.W()},"$2","ghu",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaC:1,
n:{
cL:function(a,b,c,d,e,f){var z,y
z=new E.aI()
z.a=d
z.b=!0
y=O.cc(E.aI)
z.y=y
y.aC(z.ghs(),z.ghu())
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
z.sbb(0,e)
z.sb0(c)
return z}}},ii:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eg:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.as(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cV()
y=[V.ai]
z.a=H.c([],y)
z.gp().h(0,new E.ik(this))
this.cy=z
z=new O.cV()
z.a=H.c([],y)
z.gp().h(0,new E.il(this))
this.db=z
z=new O.cV()
z.a=H.c([],y)
z.gp().h(0,new E.im(this))
this.dx=z
z=H.c([],[O.aS])
this.dy=z
C.a.h(z,null)
this.fr=new H.b0(0,0,[P.n,A.bw])},
ghF:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gT(z)
y=this.db
y=z.k(0,y.gT(y))
this.z=y
z=y}return z},
gct:function(){var z,y
z=this.ch
if(z==null){z=this.ghF()
y=this.dx
y=z.k(0,y.gT(y))
this.ch=y
z=y}return z},
ge0:function(){var z,y
z=this.cx
if(z==null){z=this.db
z=z.gT(z)
y=this.dx
y=z.k(0,y.gT(y))
this.cx=y
z=y}return z},
cu:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gco(z):a;(z&&C.a).h(z,y)},
cs:function(){var z=this.dy
if(z.length>1)z.pop()},
aT:function(a){var z=a.b
if(z.length===0)throw H.h(P.m("May not cache a shader with no name."))
if(this.fr.dk(0,z))throw H.h(P.m('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a4(0,z,a)},
n:{
ij:function(a,b){var z=new E.ii(a,b)
z.eg(a,b)
return z}}},ik:{"^":"t:10;a",
$1:function(a){var z
H.i(a,"$isv")
z=this.a
z.z=null
z.ch=null}},il:{"^":"t:10;a",
$1:function(a){var z
H.i(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},im:{"^":"t:10;a",
$1:function(a){var z
H.i(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},iX:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a5:x@,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
em:[function(a){var z
H.i(a,"$isv")
z=this.x
if(!(z==null))z.u(a)
this.hL()},function(){return this.em(null)},"el","$1","$0","gcJ",0,2,0],
ghe:function(){var z,y,x
z=Date.now()
y=C.h.a2(P.dM(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.as(z,!1)
return x/y},
d3:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.q(z)
x=C.c.cl(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.c.cl(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eu(C.l,this.ghK())}},
hL:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.iZ(this),{func:1,ret:-1,args:[P.Y]})
C.u.eE(z)
C.u.fj(z,W.fk(y,P.Y))}},"$0","ghK",0,0,3],
hJ:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.d3()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.as(w,!1)
x.y=P.dM(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aD()
w=x.db
C.a.sl(w.a,0)
w.aD()
w=x.dx
C.a.sl(w.a,0)
w.aD()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a3(this.e)}}catch(v){z=H.aX(v)
y=H.be(v)
P.dm("Error: "+H.j(z))
P.dm("Stack: "+H.j(y))
throw H.h(z)}},
n:{
iY:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscG)return E.et(a,!0,!0,!0,!1)
y=W.cH(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdh(a).h(0,y)
w=E.et(y,!0,!0,!0,!1)
w.a=a
return w},
et:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iX()
y=P.hz(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.bE(a,"webgl",y)
x=H.i(x==null?C.k.bE(a,"experimental-webgl",y):x,"$iscZ")
if(x==null)H.o(P.m("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ij(x,a)
w=new T.iS(x)
w.b=H.X(x.getParameter(3379))
w.c=H.X(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jg(a)
v=new X.hs()
v.c=new X.aB(!1,!1,!1)
v.d=P.hA(null,null,null,P.B)
w.b=v
v=new X.hS(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hD(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.j1(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.em,P.a]])
w.z=v
u=document
t=W.at
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.W(u,"contextmenu",H.k(w.geU(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.k(w.geZ(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.k(w.geR(),q),!1,r))
v=w.z
p=W.br
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.k(w.gf0(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.k(w.gf_(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.k(w.gf3(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.k(w.gf5(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.k(w.gf4(),s),!1,t))
p=w.z
o=W.bJ;(p&&C.a).h(p,W.W(a,H.R(W.h9(a)),H.k(w.gf6(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.k(w.geV(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.k(w.geW(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.k(w.gf7(),q),!1,r))
r=w.z
q=W.b6
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.k(w.gff(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.k(w.gfd(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.k(w.gfe(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.as(Date.now(),!1)
z.cy=0
z.d3()
return z}}},iZ:{"^":"t:40;a",
$1:function(a){var z
H.lt(a)
z=this.a
if(z.ch){z.ch=!1
z.hJ()}}}}],["","",,Z,{"^":"",eZ:{"^":"a;a,b",n:{
d6:function(a,b,c){var z
H.u(c,"$isd",[P.B],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b9(c)),35044)
a.bindBuffer(b,null)
return new Z.eZ(b,z)}}},dv:{"^":"cD;a,b,c,d,e",
H:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aX(y)
x=P.m('Failed to bind buffer attribute "'+J.a8(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.a8(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},c5:{"^":"a;a",$islK:1},bi:{"^":"a;a,0b,c,d",
a_:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
H:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].H(a)},
a1:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a3:function(a){var z,y,x,w,v
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
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a8(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$isms:1},ci:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b4(this.c)+"'")+"]"}},ao:{"^":"a;a",
gcG:function(a){var z,y
z=this.a
y=(z&$.$get$a1().a)!==0?3:0
if((z&$.$get$ax().a)!==0)y+=3
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$aj().a)!==0)y+=2
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=4
if((z&$.$get$b7().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
h0:function(a){var z,y,x
z=$.$get$a1()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b7()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eY()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ao))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$a1().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aj().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$ay().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b7().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
n:{
ap:function(a){return new Z.ao(a)}}}}],["","",,D,{"^":"",dy:{"^":"a;"},aJ:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.v]}
H.k(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.v]})
z=this.a
z=z==null?null:C.a.ao(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).C(z,b)||!1}else y=!1
return y},
u:function(a){var z,y,x,w
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
return!0}if(!x)C.a.N(y,new D.hd(z))
return!0},
cd:function(){return this.u(null)},
hM:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.u(y)}}},
ar:function(a){return this.hM(a,!0,!1)},
n:{
C:function(){var z=new D.aJ()
z.d=0
return z}}},hd:{"^":"t:31;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"a;a,0b"},bV:{"^":"v;c,d,a,0b,$ti"},bW:{"^":"v;c,d,a,0b,$ti"},A:{"^":"v;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dw:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"lL<"}},dX:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dX))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dY:{"^":"v;c,a,0b"},hs:{"^":"a;0a,0b,0c,0d",
hC:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dY(a,this)
y.b=!0
return z.u(y)},
hy:function(a){var z,y
this.c=a.b
this.d.C(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dY(a,this)
y.b=!0
return z.u(y)}},e1:{"^":"cl;x,y,c,d,e,a,0b"},hD:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
av:function(a,b){var z,y,x,w,v,u,t,s
z=new P.as(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaL()
s=new X.c0(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cr:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.u(this.av(a,b))
return!0},
b2:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.e7()
if(typeof z!=="number")return z.e2()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.av(a,b))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.av(a,b))
return!0},
hD:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.cW(new V.U(v*u,t*s),y,x,new P.as(w,!1),this)
w.b=!0
z.u(w)
return!0},
f2:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.as(Date.now(),!1)
y=this.f
x=new X.e1(c,a,this.a.gaL(),b,z,this)
x.b=!0
y.u(x)
this.y=z
this.x=new V.O(0,0)}},aB:{"^":"a;a,b,c",
q:function(a,b){var z,y
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
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},c0:{"^":"cl;x,y,z,Q,ch,c,d,e,a,0b"},hS:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bN:function(a,b,c){var z,y,x
z=new P.as(Date.now(),!1)
y=this.a.gaL()
x=new X.c0(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cr:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.u(this.bN(a,b,!0))
return!0},
b2:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.e7()
if(typeof z!=="number")return z.e2()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.bN(a,b,!0))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.bN(a,b,!1))
return!0},
hE:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaL()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.cW(new V.U(w*v,u*t),y,b,new P.as(x,!1),this)
x.b=!0
z.u(x)
return!0}},cW:{"^":"cl;x,c,d,e,a,0b"},cl:{"^":"v;"},ey:{"^":"cl;x,y,z,Q,ch,c,d,e,a,0b"},j1:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
av:function(a,b){var z,y,x,w
H.u(a,"$isd",[V.O],"$asd")
z=new P.as(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaL()
w=new X.ey(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hB:function(a){var z
H.u(a,"$isd",[V.O],"$asd")
z=this.b
if(z==null)return!1
z.u(this.av(a,!0))
return!0},
hz:function(a){var z
H.u(a,"$isd",[V.O],"$asd")
z=this.c
if(z==null)return!1
z.u(this.av(a,!0))
return!0},
hA:function(a){var z
H.u(a,"$isd",[V.O],"$asd")
z=this.d
if(z==null)return!1
z.u(this.av(a,!1))
return!0}},jg:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaL:function(){var z=this.a
return V.aR(0,0,(z&&C.k).gdi(z).c,C.k.gdi(z).d)},
cU:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dX(z,new X.aB(y,a.altKey,a.shiftKey))},
aJ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
bZ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
aw:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.O(y-w,x-v)},
aS:function(a){return new V.U(a.movementX,a.movementY)},
bT:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.c.U(u.pageX)
C.c.U(u.pageY)
s=z.left
C.c.U(u.pageX)
C.a.h(y,new V.O(t-s,C.c.U(u.pageY)-z.top))}return y},
at:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dw(z,new X.aB(y,a.altKey,a.shiftKey))},
bQ:function(a){var z,y,x,w,v,u
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
ik:[function(a){this.f=!0},"$1","geZ",4,0,5],
ia:[function(a){this.f=!1},"$1","geR",4,0,5],
ie:[function(a){H.i(a,"$isat")
if(this.f&&this.bQ(a))a.preventDefault()},"$1","geU",4,0,4],
im:[function(a){var z
H.i(a,"$isbr")
if(!this.f)return
z=this.cU(a)
if(this.b.hC(z))a.preventDefault()},"$1","gf0",4,0,16],
il:[function(a){var z
H.i(a,"$isbr")
if(!this.f)return
z=this.cU(a)
if(this.b.hy(z))a.preventDefault()},"$1","gf_",4,0,16],
ip:[function(a){var z,y,x,w
H.i(a,"$isat")
z=this.a
z.focus()
this.f=!0
this.aJ(a)
if(this.x){y=this.at(a)
x=this.aS(a)
if(this.d.cr(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.at(a)
w=this.aw(a)
if(this.c.cr(y,w))a.preventDefault()},"$1","gf3",4,0,4],
ir:[function(a){var z,y,x
H.i(a,"$isat")
this.aJ(a)
z=this.at(a)
if(this.x){y=this.aS(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gf5",4,0,4],
ih:[function(a){var z,y,x
H.i(a,"$isat")
if(!this.bQ(a)){this.aJ(a)
z=this.at(a)
if(this.x){y=this.aS(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b2(z,x))a.preventDefault()}},"$1","geW",4,0,4],
iq:[function(a){var z,y,x
H.i(a,"$isat")
this.aJ(a)
z=this.at(a)
if(this.x){y=this.aS(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b1(z,x))a.preventDefault()},"$1","gf4",4,0,4],
ig:[function(a){var z,y,x
H.i(a,"$isat")
if(!this.bQ(a)){this.aJ(a)
z=this.at(a)
if(this.x){y=this.aS(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.b1(z,x))a.preventDefault()}},"$1","geV",4,0,4],
is:[function(a){var z,y
H.i(a,"$isbJ")
this.aJ(a)
z=new V.U((a&&C.t).gh8(a),C.t.gh9(a)).v(0,180)
if(this.x){if(this.d.hD(z))a.preventDefault()
return}if(this.r)return
y=this.aw(a)
if(this.c.hE(z,y))a.preventDefault()},"$1","gf6",4,0,32],
it:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.at(this.y)
v=this.aw(this.y)
this.d.f2(w,v,x)}},"$1","gf7",4,0,5],
iB:[function(a){var z
H.i(a,"$isb6")
this.a.focus()
this.f=!0
this.bZ(a)
z=this.bT(a)
if(this.e.hB(z))a.preventDefault()},"$1","gff",4,0,11],
iz:[function(a){var z
H.i(a,"$isb6")
this.bZ(a)
z=this.bT(a)
if(this.e.hz(z))a.preventDefault()},"$1","gfd",4,0,11],
iA:[function(a){var z
H.i(a,"$isb6")
this.bZ(a)
z=this.bT(a)
if(this.e.hA(z))a.preventDefault()},"$1","gfe",4,0,11]}}],["","",,D,{"^":"",ce:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z},
aE:[function(a){var z
H.i(a,"$isv")
z=this.d
if(!(z==null))z.u(a)},function(){return this.aE(null)},"hY","$1","$0","gen",0,2,0],
$isV:1,
$isaC:1},V:{"^":"a;",$isaC:1},ht:{"^":"al;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gp:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
aE:function(a){var z=this.Q
if(!(z==null))z.u(a)},
f1:[function(a){var z
H.i(a,"$isv")
z=this.ch
if(!(z==null))z.u(a)},function(){return this.f1(null)},"io","$1","$0","gd_",0,2,0],
iu:[function(a){var z,y,x
H.u(a,"$ise",[D.V],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.eA(x))return!1}return!0},"$1","gf8",4,0,37],
i7:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.V
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gd_(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.i(b[u],"$isV")
if(t instanceof D.ce)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aJ()
s.d=0
t.d=s}H.k(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.bV(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","geO",8,0,15],
iw:[function(a,b){var z,y,x,w,v,u
z=D.V
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gd_(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=H.i(b[w],"$isV")
if(v instanceof D.ce)C.a.C(this.e,v)
u=v.d
if(u==null){u=new D.aJ()
u.d=0
v.d=u}u.C(0,x)}z=new D.bW(a,b,this,[z])
z.b=!0
this.aE(z)},"$2","gfa",8,0,15],
eA:function(a){var z=C.a.ao(this.e,a)
return z},
$ase:function(){return[D.V]},
$asal:function(){return[D.V]}},i3:{"^":"a;",$isV:1,$isaC:1},iF:{"^":"a;",$isV:1,$isaC:1},iU:{"^":"a;",$isV:1,$isaC:1},iV:{"^":"a;",$isV:1,$isaC:1},iW:{"^":"a;",$isV:1,$isaC:1}}],["","",,V,{"^":"",
lN:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","hP",8,0,33],
lD:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.e6(a-b,z)
return(a<0?a+z:a)+b},
M:function(a,b,c){if(a==null)return C.i.ah("null",c)
return C.i.ah(C.c.e_($.l.$2(a,0)?0:a,b),c+b+1)},
bd:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$isd",[P.w],"$asd")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.M(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.a4(z,u,C.i.ah(z[u],x))}return z},
bS:function(a,b){return C.c.hT(Math.pow(b,C.z.cl(Math.log(H.l4(a))/Math.log(b))))},
S:{"^":"a;a,b,c",
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
return new V.S(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
a9:{"^":"a;a,b,c,d",
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
return new V.a9(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
b2:{"^":"a;a,b,c,d,e,f,r,x,y",
P:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.i(a5,"$isb2")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.c.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.c.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.c.k(t,s)
q=a5.b
p=C.c.k(z,q)
o=a5.e
n=C.c.k(w,o)
m=a5.x
l=C.c.k(t,m)
k=a5.c
z=C.c.k(z,k)
j=a5.f
w=C.c.k(w,j)
i=a5.y
t=C.c.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.c.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.c.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.c.k(d,s)
b=C.c.k(h,q)
a=C.c.k(f,o)
a0=C.c.k(d,m)
h=C.c.k(h,k)
f=C.c.k(f,j)
d=C.c.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.c.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.c.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.b2(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.k(a3,s),C.c.k(a1,q)+C.c.k(a2,o)+C.c.k(a3,m),C.c.k(a1,k)+C.c.k(a2,j)+C.c.k(a3,i))},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b2))return!1
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
z=[P.w]
y=V.bd(H.c([this.a,this.d,this.r],z),3,0)
x=V.bd(H.c([this.b,this.e,this.x],z),3,0)
w=V.bd(H.c([this.c,this.f,this.y],z),3,0)
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
ai:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
P:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cn:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.l.$2(a2,0))return V.aA()
a3=1/a2
a4=-w
a5=-i
return V.aK((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.i(a7,"$isai")
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
return V.aK(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cA:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.F(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.T(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
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
i:function(a){return this.J()},
dM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.bd(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bd(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bd(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bd(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
w:function(a){return this.dM(a,3,0)},
J:function(){return this.dM("",3,0)},
n:{
aK:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aA:function(){return V.aK(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
e7:function(a,b,c){return V.aK(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
e6:function(a,b,c,d){return V.aK(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
e5:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.A(c)))
y=b.ax(z)
x=y.v(0,Math.sqrt(y.A(y)))
w=z.ax(x)
v=new V.F(a.a,a.b,a.c)
return V.aK(x.a,w.a,z.a,x.M(0).A(v),x.b,w.b,z.b,w.M(0).A(v),x.c,w.c,z.c,z.M(0).A(v),0,0,0,1)}}},
O:{"^":"a;a,b",
L:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.O(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
T:{"^":"a;a,b,c",
D:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
b3:{"^":"a;a,b,c,d",
k:function(a,b){return new V.b3(this.a*b,this.b*b,this.c*b,this.d*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
cn:{"^":"a;a,b,c,d",
gaq:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cn))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"},
n:{
aR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cn(a,b,c,d)}}},
U:{"^":"a;a,b",
hj:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,18],
A:function(a){var z,y,x,w
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
return new V.U(z*b,y*b)},
v:function(a,b){var z,y
if($.l.$2(b,0))return new V.U(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.U(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
F:{"^":"a;a,b,c",
hj:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,18],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cp:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.F(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
ax:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.F(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.F(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.l.$2(b,0))return new V.F(0,0,0)
return new V.F(this.a/b,this.b/b,this.c/b)},
dO:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fT:{"^":"dy;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bI:function(a){var z=V.lD(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.u(a)},
se1:function(a,b){},
sdR:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bI(z)}z=new D.A("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.R(z)}},
sdT:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bI(z)}z=new D.A("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.R(z)}},
sa9:function(a,b){var z,y
b=this.bI(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.A("location",y,b,this,[P.w])
z.b=!0
this.R(z)}},
sdS:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.A("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.R(z)}},
sX:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.A("velocity",x,a,this,[P.w])
z.b=!0
this.R(z)}},
sdl:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.A("dampening",y,a,this,[P.w])
z.b=!0
this.R(z)}},
a7:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa9(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sX(y)}},
n:{
dA:function(){var z=new U.fT()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dB:{"^":"ac;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
aQ:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
n:{
cJ:function(a){var z=new U.dB()
z.a=a
return z}}},dP:{"^":"al;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
R:[function(a){var z
H.i(a,"$isv")
z=this.e
if(!(z==null))z.u(a)},function(){return this.R(null)},"aF","$1","$0","gbd",0,2,0],
hZ:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ac
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gbd(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bV(a,b,this,[z])
z.b=!0
this.R(z)},"$2","geo",8,0,19],
iv:[function(a,b){var z,y,x,w,v
z=U.ac
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gbd(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gp().C(0,x)}z=new D.bW(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gf9",8,0,19],
aQ:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.al()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ar(z,z.length,0,[H.z(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aQ(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.aA():x
z=this.e
if(!(z==null))z.ar(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dP))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.H(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ase:function(){return[U.ac]},
$asal:function(){return[U.ac]},
$isac:1,
n:{
dQ:function(a){var z=new U.dP()
z.bc(U.ac)
z.aC(z.geo(),z.gf9())
z.e=null
z.f=V.aA()
z.r=0
return z}}},ac:{"^":"dy;"},jh:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
R:[function(a){var z
H.i(a,"$isv")
z=this.fx
if(!(z==null))z.u(a)},function(){return this.R(null)},"aF","$1","$0","gbd",0,2,0],
c2:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.C()
z.b=y
z=y}else z=y
z.h(0,this.geK())
z=this.a.c
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.geL())
z=this.a.c
y=z.c
if(y==null){y=D.C()
z.c=y
z=y}else z=y
z.h(0,this.geM())
z=this.a.d
y=z.f
if(y==null){y=D.C()
z.f=y
z=y}else z=y
z.h(0,this.geH())
z=this.a.d
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.geI())
z=this.a.e
y=z.b
if(y==null){y=D.C()
z.b=y
z=y}else z=y
z.h(0,this.gfA())
z=this.a.e
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.gfz())
z=this.a.e
y=z.c
if(y==null){y=D.C()
z.c=y
z=y}else z=y
z.h(0,this.gfw())
return!0},
am:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.U(z,y)},
i3:[function(a){a=H.b(H.i(a,"$isv"),"$isc0")
if(!J.H(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geK",4,0,1],
i4:[function(a){var z,y,x,w,v,u,t
a=H.b(H.i(a,"$isv"),"$isc0")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.U(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.am(new V.U(y.a,y.b).k(0,2).v(0,z.gaq()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.am(new V.U(x.a,x.b).k(0,2).v(0,z.gaq()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa9(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.L(0,a.z)
this.dx=this.am(new V.U(y.a,y.b).k(0,2).v(0,z.gaq()))}this.aF()},"$1","geL",4,0,1],
i5:[function(a){var z,y,x
H.i(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sX(-y*10*z)
this.aF()}},"$1","geM",4,0,1],
i1:[function(a){if(H.b(H.i(a,"$isv"),"$ise1").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geH",4,0,1],
i2:[function(a){var z,y,x,w,v,u,t
a=H.b(H.i(a,"$isv"),"$isc0")
if(!J.H(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.am(new V.U(x.a,x.b).k(0,2).v(0,z.gaq()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa9(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.L(0,a.z)
this.dx=this.am(new V.U(y.a,y.b).k(0,2).v(0,z.gaq()))
this.aF()},"$1","geI",4,0,1],
iF:[function(a){H.i(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfA",4,0,1],
iE:[function(a){var z,y,x,w,v,u,t
a=H.b(H.i(a,"$isv"),"$isey")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.U(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.am(new V.U(y.a,y.b).k(0,2).v(0,z.gaq()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.am(new V.U(x.a,x.b).k(0,2).v(0,z.gaq()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa9(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.L(0,a.z)
this.dx=this.am(new V.U(y.a,y.b).k(0,2).v(0,z.gaq()))}this.aF()},"$1","gfz",4,0,1],
iD:[function(a){var z,y,x
H.i(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sX(-y*10*z)
this.aF()}},"$1","gfw",4,0,1],
aQ:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.al()
if(z<y){this.dy=y
x=b.y
this.c.a7(0,x)
this.b.a7(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aK(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aK(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isac:1,
n:{
eU:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.jh()
y=U.dA()
y.se1(0,!0)
y.sdR(6.283185307179586)
y.sdT(0)
y.sa9(0,0)
y.sdS(100)
y.sX(0)
y.sdl(0.5)
z.b=y
x=z.gbd()
y.gp().h(0,x)
y=U.dA()
y.se1(0,!0)
y.sdR(6.283185307179586)
y.sdT(0)
y.sa9(0,0)
y.sdS(100)
y.sX(0)
y.sdl(0.5)
z.c=y
y.gp().h(0,x)
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
w=new X.aB(b,!1,!1)
v=z.d
z.d=w
y=new D.A("modifiers",v,w,z,[X.aB])
y.b=!0
z.R(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.A("invertX",y,!1,z,[P.a5])
y.b=!0
z.R(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.A("invertY",y,!1,z,[P.a5])
y.b=!0
z.R(y)}z.c2(c)
return z}}},ji:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.u(a)},
c2:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.C()
z.e=y
z=y}else z=y
y=this.geN()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
i6:[function(a){var z,y,x,w
H.i(a,"$isv")
if(!J.H(this.b,this.a.b.c))return
H.b(a,"$iscW")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.A("zoom",z,w,this,[P.w])
z.b=!0
this.R(z)}},"$1","geN",4,0,1],
aQ:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.e6(x,x,x,1)}return this.f},
$isac:1,
n:{
eV:function(a,b,c,d,e){var z,y,x
z=new U.ji()
z.c=0.01
z.d=0
z.e=0
y=new X.aB(b,!1,!1)
z.b=y
x=new D.A("modifiers",null,y,z,[X.aB])
x.b=!0
z.R(x)
z.c2(c)
return z}}}}],["","",,M,{"^":"",fU:{"^":"al;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
Z:[function(a){var z
H.i(a,"$isv")
z=this.f
if(!(z==null))z.u(a)},function(){return this.Z(null)},"cK","$1","$0","gS",0,2,0],
ix:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aD
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bV(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gfb",8,0,20],
iy:[function(a,b){var z,y,x,w,v
z=M.aD
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gp().C(0,x)}z=new D.bW(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","gfc",8,0,20],
a3:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ar(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
if(!(y==null))y.a3(a)}this.e=!1},
$ase:function(){return[M.aD]},
$asal:function(){return[M.aD]},
$isaD:1},fW:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
Z:[function(a){var z
H.i(a,"$isv")
z=this.f
if(!(z==null))z.u(a)},function(){return this.Z(null)},"cK","$1","$0","gS",0,2,0],
saV:function(a){var z,y
if(a==null)a=new X.hk()
z=this.a
if(z!==a){if(z!=null)z.gp().C(0,this.gS())
y=this.a
this.a=a
a.gp().h(0,this.gS())
z=new D.A("camera",y,this.a,this,[X.cb])
z.b=!0
this.Z(z)}},
saB:function(a,b){var z,y
if(b==null)b=X.cM(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().C(0,this.gS())
y=this.b
this.b=b
b.gp().h(0,this.gS())
z=new D.A("target",y,this.b,this,[X.co])
z.b=!0
this.Z(z)}},
sas:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().C(0,this.gS())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gS())
z=new D.A("technique",y,this.c,this,[O.aS])
z.b=!0
this.Z(z)}},
a3:function(a){var z
a.cu(this.c)
this.b.H(a)
this.a.H(a)
z=this.c
if(z!=null)z.a7(0,a)
this.d.a7(0,a)
this.d.a3(a)
this.a.a1(a)
this.b.a1(a)
a.cs()},
$isaD:1,
n:{
cK:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.fW()
z.saV(a)
z.saB(0,b)
z.sas(c)
y=E.cL(null,!0,null,"",null,null)
x=F.d_()
w=x.a
v=new V.F(-1,-1,1)
v=v.v(0,Math.sqrt(v.A(v)))
u=w.bk(new V.b3(1,2,4,6),new V.a9(1,0,0,1),new V.T(-1,-1,0),new V.O(0,1),v,null)
w=x.a
v=new V.F(1,-1,1)
v=v.v(0,Math.sqrt(v.A(v)))
t=w.bk(new V.b3(0,3,4,6),new V.a9(0,0,1,1),new V.T(1,-1,0),new V.O(1,1),v,null)
w=x.a
v=new V.F(1,1,1)
v=v.v(0,Math.sqrt(v.A(v)))
s=w.bk(new V.b3(0,2,5,6),new V.a9(0,1,0,1),new V.T(1,1,0),new V.O(1,0),v,null)
w=x.a
v=new V.F(-1,1,1)
v=v.v(0,Math.sqrt(v.A(v)))
r=w.bk(new V.b3(0,2,4,7),new V.a9(1,1,0,1),new V.T(-1,1,0),new V.O(0,0),v,null)
x.d.fY(H.c([u,t,s,r],[F.av]))
x.ai()
y.sbb(0,x)
z.d=y
z.e=null
return z}}},hb:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
Z:[function(a){var z
H.i(a,"$isv")
z=this.x
if(!(z==null))z.u(a)},function(){return this.Z(null)},"cK","$1","$0","gS",0,2,0],
ib:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aI
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.aJ()
s.d=0
t.sa5(s)}s=t.ga5()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bV(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","geS",8,0,7],
ic:[function(a,b){var z,y,x,w,v,u
z=E.aI
H.u(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gS(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null){if(v.ga5()==null){u=new D.aJ()
u.d=0
v.sa5(u)}v.ga5().C(0,x)}}z=new D.bW(a,b,this,[z])
z.b=!0
this.Z(z)},"$2","geT",8,0,7],
saV:function(a){var z,y
if(a==null)a=X.ed(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gp().C(0,this.gS())
y=this.a
this.a=a
a.gp().h(0,this.gS())
z=new D.A("camera",y,this.a,this,[X.cb])
z.b=!0
this.Z(z)}},
saB:function(a,b){var z,y
if(b==null)b=X.cM(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().C(0,this.gS())
y=this.b
this.b=b
b.gp().h(0,this.gS())
z=new D.A("target",y,this.b,this,[X.co])
z.b=!0
this.Z(z)}},
sas:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().C(0,this.gS())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gS())
z=new D.A("technique",y,this.c,this,[O.aS])
z.b=!0
this.Z(z)}},
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a3:function(a){var z
a.cu(this.c)
this.b.H(a)
this.a.H(a)
z=this.c
if(z!=null)z.a7(0,a)
for(z=this.d.a,z=new J.ar(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a7(0,a)
for(z=this.d.a,z=new J.ar(z,z.length,0,[H.z(z,0)]);z.E();)z.d.a3(a)
this.a.toString
a.cy.aA()
a.db.aA()
this.b.a1(a)
a.cs()},
$isaD:1,
n:{
dN:function(a,b,c,d){var z,y
z=new M.hb()
y=O.cc(E.aI)
z.d=y
y.aC(z.geS(),z.geT())
z.e=null
z.f=null
z.r=null
z.x=null
z.saV(a)
z.saB(0,c)
z.sas(d)
return z}}},aD:{"^":"a;"}}],["","",,A,{"^":"",dr:{"^":"a;a,b,c"},fI:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ha:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
aW:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dL:{"^":"bw;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
a8:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.e8(c)
b.a.uniform1i(b.d,0)}}},e4:{"^":"bw;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ap,0aj,0bn,0dn,0bo,0bp,0dq,0dr,0bq,0br,0ds,0dt,0bs,0bt,0du,0dv,0bu,0dw,0dz,0bv,0dA,0dB,0bw,0bx,0by,0dC,0dD,0bz,0bA,0dE,0dF,0bB,0dG,0ce,0dH,0cf,0dI,0cg,0dJ,0ci,0dK,0cj,0dL,0ck,a,b,0c,0d,0e,0f,0r,0x,0y",
ef:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.c3("")
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
a1.fD(z)
a1.fK(z)
a1.fE(z)
a1.fS(z)
a1.fT(z)
a1.fM(z)
a1.fX(z)
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
z=new P.c3("")
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
v.fH(z)
v.fC(z)
v.fF(z)
v.fI(z)
v.fQ(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fO(z)
v.fP(z)}v.fL(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.n])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fG(z)
v.fN(z)
v.fR(z)
v.fU(z)
v.fV(z)
v.fW(z)
v.fJ(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.n])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(v.c!==C.b)z.a+="   setDiffuseColor();\n"
if(v.d!==C.b)z.a+="   setInvDiffuseColor();\n"
if(v.e!==C.b)z.a+="   setSpecularColor();\n"
if(v.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(v.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(v.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(v.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(v.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(v.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(v.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(v.a!==C.b)C.a.h(o,"emission()")
if(v.r!==C.b)C.a.h(o,"reflect(refl)")
if(v.x!==C.b)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.B(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.aY(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.b(this.y.m(0,"invViewMat"),"$isa_")
if(y)this.dy=H.b(this.y.m(0,"objMat"),"$isa_")
if(w)this.fr=H.b(this.y.m(0,"viewObjMat"),"$isa_")
this.fy=H.b(this.y.m(0,"projViewObjMat"),"$isa_")
if(a1.x2)this.k1=H.b(this.y.m(0,"txt2DMat"),"$isbG")
if(a1.y1)this.k2=H.b(this.y.m(0,"txtCubeMat"),"$isa_")
if(a1.y2)this.k3=H.b(this.y.m(0,"colorMat"),"$isa_")
this.r1=H.c([],[A.a_])
y=a1.ap
if(y>0){this.k4=H.i(this.y.m(0,"bendMatCount"),"$isE")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.o(P.m("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.b(l,"$isa_"))}}y=a1.a
if(y!==C.b){this.r2=H.b(this.y.m(0,"emissionClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.rx=H.b(this.y.m(0,"emissionTxt"),"$isa0")
this.x1=H.b(this.y.m(0,"nullEmissionTxt"),"$isE")
break
case C.d:this.ry=H.b(this.y.m(0,"emissionTxt"),"$isaf")
this.x1=H.b(this.y.m(0,"nullEmissionTxt"),"$isE")
break}}y=a1.b
if(y!==C.b){this.x2=H.b(this.y.m(0,"ambientClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.y1=H.b(this.y.m(0,"ambientTxt"),"$isa0")
this.ap=H.b(this.y.m(0,"nullAmbientTxt"),"$isE")
break
case C.d:this.y2=H.b(this.y.m(0,"ambientTxt"),"$isaf")
this.ap=H.b(this.y.m(0,"nullAmbientTxt"),"$isE")
break}}y=a1.c
if(y!==C.b){this.aj=H.b(this.y.m(0,"diffuseClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.bn=H.b(this.y.m(0,"diffuseTxt"),"$isa0")
this.bo=H.b(this.y.m(0,"nullDiffuseTxt"),"$isE")
break
case C.d:this.dn=H.b(this.y.m(0,"diffuseTxt"),"$isaf")
this.bo=H.b(this.y.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a1.d
if(y!==C.b){this.bp=H.b(this.y.m(0,"invDiffuseClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dq=H.b(this.y.m(0,"invDiffuseTxt"),"$isa0")
this.bq=H.b(this.y.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.d:this.dr=H.b(this.y.m(0,"invDiffuseTxt"),"$isaf")
this.bq=H.b(this.y.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a1.e
if(y!==C.b){this.bt=H.b(this.y.m(0,"shininess"),"$isQ")
this.br=H.b(this.y.m(0,"specularClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.ds=H.b(this.y.m(0,"specularTxt"),"$isa0")
this.bs=H.b(this.y.m(0,"nullSpecularTxt"),"$isE")
break
case C.d:this.dt=H.b(this.y.m(0,"specularTxt"),"$isaf")
this.bs=H.b(this.y.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.e:this.du=H.b(this.y.m(0,"bumpTxt"),"$isa0")
this.bu=H.b(this.y.m(0,"nullBumpTxt"),"$isE")
break
case C.d:this.dv=H.b(this.y.m(0,"bumpTxt"),"$isaf")
this.bu=H.b(this.y.m(0,"nullBumpTxt"),"$isE")
break}if(a1.dy){this.dw=H.b(this.y.m(0,"envSampler"),"$isaf")
this.dz=H.b(this.y.m(0,"nullEnvTxt"),"$isE")
y=a1.r
if(y!==C.b){this.bv=H.b(this.y.m(0,"reflectClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dA=H.b(this.y.m(0,"reflectTxt"),"$isa0")
this.bw=H.b(this.y.m(0,"nullReflectTxt"),"$isE")
break
case C.d:this.dB=H.b(this.y.m(0,"reflectTxt"),"$isaf")
this.bw=H.b(this.y.m(0,"nullReflectTxt"),"$isE")
break}}y=a1.x
if(y!==C.b){this.bx=H.b(this.y.m(0,"refraction"),"$isQ")
this.by=H.b(this.y.m(0,"refractClr"),"$isI")
switch(y){case C.b:break
case C.f:break
case C.e:this.dC=H.b(this.y.m(0,"refractTxt"),"$isa0")
this.bz=H.b(this.y.m(0,"nullRefractTxt"),"$isE")
break
case C.d:this.dD=H.b(this.y.m(0,"refractTxt"),"$isaf")
this.bz=H.b(this.y.m(0,"nullRefractTxt"),"$isE")
break}}}y=a1.y
if(y!==C.b){this.bA=H.b(this.y.m(0,"alpha"),"$isQ")
switch(y){case C.b:break
case C.f:break
case C.e:this.dE=H.b(this.y.m(0,"alphaTxt"),"$isa0")
this.bB=H.b(this.y.m(0,"nullAlphaTxt"),"$isE")
break
case C.d:this.dF=H.b(this.y.m(0,"alphaTxt"),"$isaf")
this.bB=H.b(this.y.m(0,"nullAlphaTxt"),"$isE")
break}}this.ce=H.c([],[A.eM])
this.cf=H.c([],[A.eN])
this.cg=H.c([],[A.eO])
this.ci=H.c([],[A.eP])
this.cj=H.c([],[A.eQ])
this.ck=H.c([],[A.eR])
if(a1.k2){y=a1.z
if(y>0){this.dG=H.i(this.y.m(0,"dirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.ce;(x&&C.a).h(x,new A.eM(m,l,k))}}y=a1.Q
if(y>0){this.dH=H.i(this.y.m(0,"pntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isQ")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isQ")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isQ")
x=this.cf;(x&&C.a).h(x,new A.eN(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dI=H.i(this.y.m(0,"spotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isQ")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isQ")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isQ")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isQ")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isQ")
x=this.cg;(x&&C.a).h(x,new A.eO(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dJ=H.i(this.y.m(0,"txtDirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isI")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isE")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isa0")
x=this.ci;(x&&C.a).h(x,new A.eP(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dK=H.i(this.y.m(0,"txtPntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isbG")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isE")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isQ")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isQ")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isQ")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isaf")
x=this.cj;(x&&C.a).h(x,new A.eQ(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dL=H.i(this.y.m(0,"txtSpotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(l,"$isI")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(k,"$isI")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(j,"$isI")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(i,"$isI")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(h,"$isI")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(g,"$isE")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(f,"$isI")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(e,"$isQ")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(d,"$isQ")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(c,"$isQ")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(b,"$isQ")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a,"$isQ")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."))
H.b(a0,"$isa0")
x=this.ck;(x&&C.a).h(x,new A.eR(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a8:function(a,b,c){b.a.uniform1i(b.d,1)},
af:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
hJ:function(a,b){var z,y
z=a.aj
y=new A.e4(b,z)
y.aR(b,z)
y.ef(a,b)
return y}}},hM:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ap,aj,bn",
fD:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ap+"];\n"
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
fK:function(a){var z
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
fE:function(a){var z
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
fS:function(a){var z,y
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
fT:function(a){var z,y
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
fM:function(a){var z
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
fX:function(a){var z
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
au:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cH(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fH:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.au(a,z,"emission")
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
fC:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.au(a,z,"ambient")
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
fF:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.au(a,z,"diffuse")
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fI:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.au(a,z,"invDiffuse")
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fQ:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.au(a,z,"specular")
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fL:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
case C.e:z+="uniform sampler2D bumpTxt;\n"
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
fO:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.au(a,z,"reflect")
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fP:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.au(a,z,"refract")
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fG:function(a){var z,y
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
fN:function(a){var z,y
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
fR:function(a){var z,y
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
fU:function(a){var z,y,x
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
fV:function(a){var z,y,x
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
fW:function(a){var z,y,x
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
fJ:function(a){var z
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
i:function(a){return this.aj}},eM:{"^":"a;a,b,c"},eP:{"^":"a;a,b,c,d,e,f,r,x"},eN:{"^":"a;a,b,c,d,e,f,r"},eQ:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eO:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eR:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},e8:{"^":"bw;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,a,b,0c,0d,0e,0f,0r,0x,0y"},hZ:{"^":"a;a,b,c,d,e,f",
i:function(a){return this.e},
n:{
e9:function(a){var z,y,x,w,v,u,t
z=a!==C.b
y=a===C.e
x=a===C.d
w="Normal_"+C.h.i(a.a)
v=$.$get$a1()
u=$.$get$ax()
u=v.a|u.a
t=new Z.ao(u)
if(z)t=new Z.ao(u|$.$get$aw().a)
if(y)t=new Z.ao(t.a|$.$get$aj().a)
return new A.hZ(a,z,y,x,w,x?new Z.ao(t.a|$.$get$ay().a):t)}}},bw:{"^":"cD;",
aR:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
aY:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.cV(b,35633)
this.f=this.cV(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.fo(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.o(P.m("Failed to link shader: "+H.j(x)))}this.fq()
this.ft()},
H:function(a){a.a.useProgram(this.r)
this.x.ha()},
cV:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fo(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.m("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
fq:function(){var z,y,x,w,v,u
z=H.c([],[A.dr])
y=this.a
x=H.X(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dr(y,v.name,u))}this.x=new A.fI(z)},
ft:function(){var z,y,x,w,v,u
z=H.c([],[A.a7])
y=this.a
x=H.X(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.h7(v.type,v.size,v.name,u))}this.y=new A.j9(z)},
aH:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.E(z,y,b,c)
else return A.d5(z,y,b,a,c)},
eB:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a0(z,y,b,c)
else return A.d5(z,y,b,a,c)},
eC:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.af(z,y,b,c)
else return A.d5(z,y,b,a,c)},
bj:function(a,b){return new P.f0(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
h7:function(a,b,c,d){switch(a){case 5120:return this.aH(b,c,d)
case 5121:return this.aH(b,c,d)
case 5122:return this.aH(b,c,d)
case 5123:return this.aH(b,c,d)
case 5124:return this.aH(b,c,d)
case 5125:return this.aH(b,c,d)
case 5126:return new A.Q(this.a,this.r,c,d)
case 35664:return new A.bF(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.eL(this.a,this.r,c,d)
case 35667:return new A.j6(this.a,this.r,c,d)
case 35668:return new A.j7(this.a,this.r,c,d)
case 35669:return new A.j8(this.a,this.r,c,d)
case 35674:return new A.jb(this.a,this.r,c,d)
case 35675:return new A.bG(this.a,this.r,c,d)
case 35676:return new A.a_(this.a,this.r,c,d)
case 35678:return this.eB(b,c,d)
case 35680:return this.eC(b,c,d)
case 35670:throw H.h(this.bj("BOOL",c))
case 35671:throw H.h(this.bj("BOOL_VEC2",c))
case 35672:throw H.h(this.bj("BOOL_VEC3",c))
case 35673:throw H.h(this.bj("BOOL_VEC4",c))
default:throw H.h(P.m("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},cd:{"^":"a;a,b",
i:function(a){return this.b}},ej:{"^":"bw;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},er:{"^":"bw;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
ej:function(a,b){var z,y,x,w,v
this.aY(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.iR(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.b(this.y.m(0,"txtCount"),"$isE")
this.ch=H.b(this.y.m(0,"backClr"),"$iseL")
this.cx=H.c([],[A.a0])
this.cy=H.c([],[A.a_])
z=[A.bF]
this.db=H.c([],z)
this.dx=H.c([],z)
this.dy=H.c([],z)
this.fr=H.c([],z)
this.fx=H.c([],[A.E])
for(y=0;y<a;++y){z=this.cx
x=this.y
w="txt"+y
v=x.j(0,w)
if(v==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa0"))
z=this.cy
x=this.y
w="clrMat"+y
v=x.j(0,w)
if(v==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isa_"))
z=this.db
x=this.y
w="srcLoc"+y
v=x.j(0,w)
if(v==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.dx
x=this.y
w="srcSize"+y
v=x.j(0,w)
if(v==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.dy
x=this.y
w="destLoc"+y
v=x.j(0,w)
if(v==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.fr
x=this.y
w="destSize"+y
v=x.j(0,w)
if(v==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isbF"))
z=this.fx
x=this.y
w="flip"+y
v=x.j(0,w)
if(v==null)H.o(P.m("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.b(v,"$isE"))}},
n:{
iR:function(a){var z,y
for(z=0,y="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";z<a;++z)y=y+("uniform sampler2D txt"+z+";\n")+("uniform mat4 clrMat"+z+";\n")+("uniform vec2 srcLoc"+z+";\n")+("uniform vec2 srcSize"+z+";\n")+("uniform vec2 destLoc"+z+";\n")+("uniform vec2 destSize"+z+";\n")+("uniform int flip"+z+";\n")
y+"\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
y+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(z=0;z<a;++z)y=y+("   if(txtCount <= "+z+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+z+", clrMat"+z+", srcLoc"+z+", srcSize"+z+", destLoc"+z+", destSize"+z+", flip"+z+");\n")
y+"   return clrAccum;\n"
y+"   return clrAccum;\n}\n"
y+"   return clrAccum;\n}\n\n"
y+"   return clrAccum;\n}\n\nvoid main()\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
y+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return y.charCodeAt(0)==0?y:y},
iQ:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.er(b,z)
y.aR(b,z)
y.ej(a,b)
return y}}},a7:{"^":"a;"},j9:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
hd:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.hd("\n")}},E:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},j6:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},j7:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},j8:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},j5:{"^":"a7;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
d5:function(a,b,c,d,e){var z=new A.j5(a,b,c,e)
z.f=d
z.e=P.hB(d,0,!1,P.B)
return z}}},Q:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},bF:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},I:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},eL:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},jb:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},bG:{"^":"a7;a,b,c,d",
V:function(a){var z=new Float32Array(H.b9(H.u(a,"$isd",[P.w],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},a_:{"^":"a7;a,b,c,d",
V:function(a){var z=new Float32Array(H.b9(H.u(a,"$isd",[P.w],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},a0:{"^":"a7;a,b,c,d",
e8:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},af:{"^":"a7;a,b,c,d",
cF:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cu:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bL:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.F(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.F(t+h,s+f,r+g)
z.b=q
p=new V.F(t-h,s-f,r-g)
z.c=p
o=new V.F(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cu(y)
k=F.cu(z.b)
j=F.fA(d,e,new F.kT(z,F.cu(z.c),F.cu(z.d),k,l,c),b)
if(j!=null)a.cq(j)},
lA:function(a,b,c,d){return F.l9(c,a,d,b,new F.lB())},
l9:function(a,b,c,d,e){var z=F.fA(a,b,new F.la(H.k(e,{func:1,ret:V.T,args:[P.w]}),d,b,c),null)
if(z==null)return
z.ai()
z.hp(new F.jq(),new F.hY())
return z},
fA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.av,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.d_()
y=H.c([],[F.av])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cr(null,null,new V.a9(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cb(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cr(null,null,new V.a9(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cb(d))}}z.d.fZ(a+1,b+1,y)
return z},
kT:{"^":"t:21;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cp(z.b,b).cp(z.d.cp(z.c,b),c)
a.sa9(0,new V.T(y.a,y.b,y.c))
a.shR(y.v(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
x=new V.b3(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.H(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.W()}}},
lB:{"^":"t:36;",
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}},
la:{"^":"t:21;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dn(y.$1(z),x)
x=J.dn(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.F(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.A(x)))
u=new V.F(1,0,0)
y=v.ax(!v.q(0,u)?new V.F(0,0,1):u)
t=y.v(0,Math.sqrt(y.A(y)))
y=t.ax(v)
u=y.v(0,Math.sqrt(y.A(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa9(0,w.D(0,new V.T(y.a-x.a,y.b-x.b,y.c-x.c)))}},
am:{"^":"a;0a,0b,0c,0d,0e",
ay:function(){if(!this.gaX()){C.a.C(this.a.a.d.b,this)
this.a.a.W()}this.bV()
this.bW()
this.fi()},
c_:function(a){this.a=a
C.a.h(a.d.b,this)},
c0:function(a){this.b=a
C.a.h(a.d.c,this)},
fp:function(a){this.c=a
C.a.h(a.d.d,this)},
bV:function(){var z=this.a
if(z!=null){C.a.C(z.d.b,this)
this.a=null}},
bW:function(){var z=this.b
if(z!=null){C.a.C(z.d.c,this)
this.b=null}},
fi:function(){var z=this.c
if(z!=null){C.a.C(z.d.d,this)
this.c=null}},
gaX:function(){return this.a==null||this.b==null||this.c==null},
ev:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.F(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dO())return
return v.v(0,Math.sqrt(v.A(v)))},
ey:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.F(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.A(z)))
z=w.L(0,y)
z=new V.F(z.a,z.b,z.c)
z=v.ax(z.v(0,Math.sqrt(z.A(z))))
return z.v(0,Math.sqrt(z.A(z)))},
c9:function(){if(this.d!=null)return!0
var z=this.ev()
if(z==null){z=this.ey()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
eu:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.F(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dO())return
return v.v(0,Math.sqrt(v.A(v)))},
ex:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.L(0,u)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.L(0,u).k(0,l).D(0,u).L(0,x)
z=new V.F(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.A(z)))
z=k.ax(m)
z=z.v(0,Math.sqrt(z.A(z))).ax(k)
m=z.v(0,Math.sqrt(z.A(z)))}return m},
c8:function(){if(this.e!=null)return!0
var z=this.eu()
if(z==null){z=this.ex()
if(z==null)return!1}this.e=z
this.a.a.W()
return!0},
gh2:function(a){if(J.H(this.a,this.b))return!0
if(J.H(this.b,this.c))return!0
if(J.H(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y
if(this.gaX())return a+"disposed"
z=a+C.i.ah(J.a8(this.a.e),0)+", "+C.i.ah(J.a8(this.b.e),0)+", "+C.i.ah(J.a8(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.w("")},
n:{
bl:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.o(P.m("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.o(P.m("May not create a face with vertices attached to different shapes."))
z.c_(a)
z.c0(b)
z.fp(c)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
he:{"^":"a;"},
iB:{"^":"he;",
b_:function(a,b,c){var z,y
z=b.a
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
cT:{"^":"a;0a,0b",
ay:function(){if(!this.gaX()){C.a.C(this.a.a.c.b,this)
this.a.a.W()}this.bV()
this.bW()},
c_:function(a){this.a=a
C.a.h(a.c.b,this)},
c0:function(a){this.b=a
C.a.h(a.c.c,this)},
bV:function(){var z=this.a
if(z!=null){C.a.C(z.c.b,this)
this.a=null}},
bW:function(){var z=this.b
if(z!=null){C.a.C(z.c.c,this)
this.b=null}},
gaX:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){if(this.gaX())return a+"disposed"
return a+C.i.ah(J.a8(this.a.e),0)+", "+C.i.ah(J.a8(this.b.e),0)},
J:function(){return this.w("")},
n:{
hu:function(a,b){var z,y,x
z=new F.cT()
y=a.a
if(y==null)H.o(P.m("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.o(P.m("May not create a line with vertices attached to different shapes."))
z.c_(a)
z.c0(b)
C.a.h(z.a.a.c.b,z)
z.a.a.W()
return z}}},
hv:{"^":"a;"},
j4:{"^":"hv;",
b_:function(a,b,c){var z,y
z=b.a
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=y.e
return z==null?y==null:z===y}else return!1}}},
cY:{"^":"a;0a",
ay:function(){var z=this.a
if(z!=null){C.a.C(z.a.b.b,this)
this.a.a.W()}this.fh()},
fh:function(){var z=this.a
if(z!=null){C.a.C(z.b.b,this)
this.a=null}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ah(J.a8(z.e),0)},
J:function(){return this.w("")}},
ei:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
cq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.t()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.h6())}this.a.t()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cY()
if(r.a==null)H.o(P.m("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.u(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.hu(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.t()
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
F.bl(p,o,m)}z=this.e
if(!(z==null))z.ar(0)},
ai:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ai()||!1
if(!this.a.ai())y=!1
z=this.e
if(!(z==null))z.ar(0)
return y},
aK:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aK()||!1
if(!this.a.aK())y=!1
z=this.e
if(!(z==null))z.ar(0)
return y},
bm:function(){var z=this.e
if(!(z==null))++z.d
this.a.bm()
z=this.e
if(!(z==null))z.ar(0)
return!0},
hp:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.z(z,0)])
for(z=[F.av];y.length!==0;){x=C.a.ghc(y)
C.a.hH(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.x)(y),++u){t=y[u]
if(t!=null&&a.b_(0,x,t)){C.a.h(w,t)
C.a.C(y,t)}}if(w.length>1)b.cq(w)}}this.a.t()
this.c.cv()
this.d.cv()
this.b.hI()
this.c.cw(new F.j4())
this.d.cw(new F.iB())
z=this.e
if(!(z==null))z.ar(0)},
aU:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$a1()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$aj().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$bH().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$b7().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gcG(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dv])
for(r=0,q=0;q<w;++q){p=b.h0(q)
o=p.gcG(p)
C.a.a4(s,q,new Z.dv(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].hk(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a4(t,l,m[k]);++l}}r+=o}H.u(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b9(t)),35044)
y.bindBuffer(34962,null)
i=new Z.bi(new Z.eZ(34962,j),s,b)
i.b=H.c([],[Z.ci])
if(this.b.b.length!==0){x=P.B
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.ci(0,h.length,f))}if(this.c.b.length!==0){x=P.B
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.ci(1,h.length,f))}if(this.d.b.length!==0){x=P.B
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.t()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.ci(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.B(z,"\n")},
ak:function(a){var z=this.e
if(!(z==null))z.u(a)},
W:function(){return this.ak(null)},
n:{
d_:function(){var z,y
z=new F.ei()
y=new F.jl(z)
y.b=!1
y.c=H.c([],[F.av])
z.a=y
y=new F.iw(z)
y.b=H.c([],[F.cY])
z.b=y
y=new F.iv(z)
y.b=H.c([],[F.cT])
z.c=y
y=new F.iu(z)
y.b=H.c([],[F.am])
z.d=y
z.e=null
return z}}},
iu:{"^":"a;a,0b",
fY:function(a){var z,y,x,w,v
H.u(a,"$isd",[F.av],"$asd")
z=H.c([],[F.am])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bl(y,w,v))}return z},
fZ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$isd",[F.av],"$asd")
z=H.c([],[F.am])
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
C.a.h(z,F.bl(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bl(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bl(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bl(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cw:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b_(0,v,t)){v.ay()
break}}}}},
cv:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gh2(x)
if(y)x.ay()}},
ai:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c9())x=!1
return x},
aK:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c8())x=!1
return x},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
iv:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cw:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b_(0,v,t)){v.ay()
break}}}}},
cv:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.H(x.a,x.b)
if(y)x.ay()}},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.B(z,"\n")},
J:function(){return this.w("")}},
iw:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hI:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ay()}},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
av:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cb:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cr(this.cx,x,u,z,y,w,v,a,t)},
h6:function(){return this.cb(null)},
sa9:function(a,b){var z
if(!J.H(this.f,b)){this.f=b
z=this.a
if(z!=null)z.W()}},
shr:function(a){var z
a=a.v(0,Math.sqrt(a.A(a)))
if(!J.H(this.r,a)){this.r=a
z=this.a
if(z!=null)z.W()}},
shR:function(a){var z
if(!J.H(this.z,a)){this.z=a
z=this.a
if(z!=null)z.W()}},
hk:function(a){var z,y
z=J.K(a)
if(z.q(a,$.$get$a1())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ax())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aw())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aj())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.q(a,$.$get$ay())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bH())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bI())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$b7()))return H.c([this.ch],[P.w])
else if(z.q(a,$.$get$aM())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
c9:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.F(0,0,0)
this.d.N(0,new F.jv(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.ar(0)}return!0},
c8:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.F(0,0,0)
this.d.N(0,new F.ju(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.ar(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.i.ah(J.a8(this.e),0))
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
C.a.h(z,V.M(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.B(z,", ")
return a+"{"+x+"}"},
J:function(){return this.w("")},
n:{
cr:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.av()
y=new F.jt(z)
y.b=H.c([],[F.cY])
z.b=y
y=new F.jp(z)
x=[F.cT]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.jm(z)
x=[F.am]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eW()
z.e=0
y=$.$get$a1()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ax().a)!==0?e:null
z.x=(x&$.$get$aw().a)!==0?b:null
z.y=(x&$.$get$aj().a)!==0?f:null
z.z=(x&$.$get$ay().a)!==0?g:null
z.Q=(x&$.$get$eX().a)!==0?c:null
z.ch=(x&$.$get$b7().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
jv:{"^":"t:8;a",
$1:function(a){var z,y
H.i(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
ju:{"^":"t:8;a",
$1:function(a){var z,y
H.i(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
jl:{"^":"a;a,0b,0c",
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.m("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.W()
return!0},
h_:function(a,b,c,d,e,f,g,h,i){var z=F.cr(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bk:function(a,b,c,d,e,f){return this.h_(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ai:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c9()
return!0},
aK:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c8()
return!0},
bm:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.H(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.u(null)}}}}return!0},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
this.t()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
jm:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
N:function(a,b){H.k(b,{func:1,ret:-1,args:[F.am]})
C.a.N(this.b,b)
C.a.N(this.c,new F.jn(this,b))
C.a.N(this.d,new F.jo(this,b))},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
jn:{"^":"t:8;a,b",
$1:function(a){H.i(a,"$isam")
if(!J.H(a.a,this.a))this.b.$1(a)}},
jo:{"^":"t:8;a,b",
$1:function(a){var z
H.i(a,"$isam")
z=this.a
if(!J.H(a.a,z)&&!J.H(a.b,z))this.b.$1(a)}},
jp:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}},
jr:{"^":"a;"},
jq:{"^":"jr;",
b_:function(a,b,c){return J.H(b.f,c.f)}},
js:{"^":"a;"},
hY:{"^":"js;",
cq:function(a){var z,y,x,w
H.u(a,"$isd",[F.av],"$asd")
z=new V.F(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.F(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.A(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x)a[x].shr(z)
return}},
jt:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].w(a))
return C.a.B(z,"\n")},
J:function(){return this.w("")}}}],["","",,O,{"^":"",h2:{"^":"aS;0a,0b,0c,0d,0e,0f,0aa:r@",
gp:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
G:function(a){var z=this.r
if(!(z==null))z.u(a)},
a6:function(){return this.G(null)},
sdj:function(a){var z=this.b
if(z==null?a!=null:z!==a){this.b=a
this.a6()}},
sdg:function(a){var z=this.c
if(z==null?a!=null:z!==a){this.c=a
this.a6()}},
sdf:function(a){var z=a==null?V.aA():a
this.f=z
if(!z.q(0,a)){this.f=a
this.a6()}},
a7:function(a,b){},
I:function(a,b){H.u(a,"$isd",[T.aL],"$asd")
if(b!=null)if(!C.a.ao(a,b)){b.a=a.length
C.a.h(a,b)}},
b4:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.i(a.fr.j(0,"Distort"),"$isdL")
if(z==null){y=a.a
z=new A.dL(y,"Distort")
z.aR(y,"Distort")
z.aY(0,$.h4,$.h3)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"txt2DAttr")
z.ch=H.b(z.y.m(0,"projViewObjMat"),"$isa_")
z.cx=H.b(z.y.m(0,"colorTxt2DMat"),"$isbG")
z.cy=H.b(z.y.m(0,"bumpTxt2DMat"),"$isbG")
z.db=H.b(z.y.m(0,"colorTxt"),"$isa0")
z.dx=H.b(z.y.m(0,"bumpTxt"),"$isa0")
z.dy=H.b(z.y.m(0,"nullColorTxt"),"$isE")
z.fr=H.b(z.y.m(0,"nullBumpTxt"),"$isE")
z.fx=H.b(z.y.m(0,"bumpMat"),"$isa_")
a.aT(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$a1()
v=$.$get$aj()
v=y.aU(new Z.c5(x),new Z.ao(w.a|v.a))
v.a_($.$get$a1()).e=this.a.z.c
v.a_($.$get$aj()).e=this.a.Q.c
b.e=v}u=H.c([],[T.aL])
this.I(u,this.b)
this.I(u,this.c)
for(t=0;t<u.length;++t)u[t].H(a)
y=this.a
y.H(a)
x=this.b
y.a8(y.db,y.dy,x)
x=this.c
y.a8(y.dx,y.fr,x)
x=a.gct()
w=y.ch
w.toString
w.V(x.P(0,!0))
x=this.d
w=y.cx
w.toString
w.V(x.P(0,!0))
x=this.e
w=y.cy
w.toString
w.V(x.P(0,!0))
x=this.f
y=y.fx
y.toString
y.V(x.P(0,!0))
y=b.e
if(y instanceof Z.bi){y.H(a)
y.a3(a)
y.a1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.aW()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},hI:{"^":"aS;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0aa:dy@",
gp:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
G:[function(a){var z
H.i(a,"$isv")
z=this.dy
if(!(z==null))z.u(a)},function(){return this.G(null)},"a6","$1","$0","gab",0,2,0],
fl:[function(a){H.i(a,"$isv")
this.a=null
this.G(a)},function(){return this.fl(null)},"iC","$1","$0","gfk",0,2,0],
i8:[function(a,b){var z=V.ai
z=new D.bV(a,H.u(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.G(z)},"$2","geP",8,0,22],
i9:[function(a,b){var z=V.ai
z=new D.bW(a,H.u(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.G(z)},"$2","geQ",8,0,22],
cS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.a2(z.e.length+3,4)*4
x=C.h.a2(z.f.length+3,4)*4
w=C.h.a2(z.r.length+3,4)*4
v=C.h.a2(z.x.length+3,4)*4
u=C.h.a2(z.y.length+3,4)*4
t=C.h.a2(z.z.length+3,4)*4
s=C.h.a2(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+"_"
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
a=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a0=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$a1()
if(c){z=$.$get$ax()
a6=new Z.ao(a6.a|z.a)}if(b){z=$.$get$aw()
a6=new Z.ao(a6.a|z.a)}if(a){z=$.$get$aj()
a6=new Z.ao(a6.a|z.a)}if(a0){z=$.$get$ay()
a6=new Z.ao(a6.a|z.a)}if(a2){z=$.$get$aM()
a6=new Z.ao(a6.a|z.a)}return new A.hM(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
I:function(a,b){H.u(a,"$isd",[T.aL],"$asd")},
a7:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ar(z,z.length,0,[H.z(z,0)]);z.E();){y=z.d
x=new V.F(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cA(x)}}},
b4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cS()
y=H.i(a.fr.j(0,z.aj),"$ise4")
if(y==null){y=A.hJ(z,a.a)
a.aT(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bn
z=b.e
if(!(z instanceof Z.bi)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.ai()
v=x.r2
if(v)b.d.aK()
u=x.ry
if(u)b.d.bm()
t=b.d.aU(new Z.c5(a.a),w)
t.a_($.$get$a1()).e=this.a.Q.c
if(z)t.a_($.$get$ax()).e=this.a.cx.c
if(v)t.a_($.$get$aw()).e=this.a.ch.c
if(x.rx)t.a_($.$get$aj()).e=this.a.cy.c
if(u)t.a_($.$get$ay()).e=this.a.db.c
if(x.x1)t.a_($.$get$aM()).e=this.a.dx.c
b.e=t}z=T.aL
s=H.c([],[z])
this.a.H(a)
if(x.fx){v=this.a
u=a.dx
u=u.gT(u)
v=v.dy
v.toString
v.V(u.P(0,!0))}if(x.fy){v=this.a
u=a.ge0()
v=v.fr
v.toString
v.V(u.P(0,!0))}v=this.a
u=a.gct()
v=v.fy
v.toString
v.V(u.P(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.V(u.P(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.V(u.P(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.V(C.A.P(u,!0))}if(x.ap>0){r=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,r)
for(v=[P.w],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.f(p,q)
p=p[q]
u.toString
H.i(p,"$isai")
u=u.r1
if(q>=u.length)return H.f(u,q)
u=u[q]
o=new Float32Array(H.b9(H.u(p.P(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,o)}}switch(x.a){case C.b:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.I(s,this.f.d)
v=this.a
u=this.f.d
v.a8(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.I(s,this.f.e)
v=this.a
u=this.f.e
v.af(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.f:v=this.a
u=this.r.f
v=v.x2
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.I(s,this.r.d)
v=this.a
u=this.r.d
v.a8(v.y1,v.ap,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.I(s,this.r.e)
v=this.a
u=this.r.e
v.af(v.y2,v.ap,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.c){case C.b:break
case C.f:v=this.a
u=this.x.f
v=v.aj
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.I(s,this.x.d)
v=this.a
u=this.x.d
v.a8(v.bn,v.bo,u)
u=this.a
v=this.x.f
u=u.aj
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.I(s,this.x.e)
v=this.a
u=this.x.e
v.af(v.dn,v.bo,u)
u=this.a
v=this.x.f
u=u.aj
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.d){case C.b:break
case C.f:v=this.a
u=this.y.f
v=v.bp
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
break
case C.e:this.I(s,this.y.d)
v=this.a
u=this.y.d
v.a8(v.dq,v.bq,u)
u=this.a
v=this.y.f
u=u.bp
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break
case C.d:this.I(s,this.y.e)
v=this.a
u=this.y.e
v.af(v.dr,v.bq,u)
u=this.a
v=this.y.f
u=u.bp
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
u=this.z.f
v=v.br
v.toString
p=u.a
n=u.b
u=u.c
v.a.uniform3f(v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bt
u.a.uniform1f(u.d,n)
break
case C.e:this.I(s,this.z.d)
v=this.a
u=this.z.d
v.a8(v.ds,v.bs,u)
u=this.a
v=this.z.f
u=u.br
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bt
v.a.uniform1f(v.d,n)
break
case C.d:this.I(s,this.z.e)
v=this.a
u=this.z.e
v.af(v.dt,v.bs,u)
u=this.a
v=this.z.f
u=u.br
u.toString
p=v.a
n=v.b
v=v.c
u.a.uniform3f(u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bt
v.a.uniform1f(v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.dG
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.ce
if(l>=p.length)return H.f(p,l)
i=p[l]
p=m.cA(j.a)
n=p.a
h=p.b
g=p.c
g=p.v(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.dH
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.cf
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gb3(j)
n=i.b
h=p.gcB(p)
g=p.gcC(p)
p=p.gcD(p)
n.a.uniform3f(n.d,h,g,p)
p=m.b9(j.gb3(j))
g=i.c
g.a.uniform3f(g.d,p.a,p.b,p.c)
p=j.gan(j)
g=i.d
h=p.gbD()
n=p.gba()
p=p.gbl()
g.a.uniform3f(g.d,h,n,p)
p=j.gc3()
n=i.e
n.a.uniform1f(n.d,p)
p=j.gc4()
n=i.f
n.a.uniform1f(n.d,p)
p=j.gc5()
n=i.r
n.a.uniform1f(n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.dI
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.cg
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gb3(j)
n=i.b
h=p.gcB(p)
g=p.gcC(p)
p=p.gcD(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gcc(j).iI()
g=i.c
h=p.gaM(p)
n=p.gaN(p)
p=p.gaO()
g.a.uniform3f(g.d,h,n,p)
p=m.b9(j.gb3(j))
n=i.d
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gan(j)
n=i.e
h=p.gbD()
g=p.gba()
p=p.gbl()
n.a.uniform3f(n.d,h,g,p)
p=j.giH()
g=i.f
g.a.uniform1f(g.d,p)
p=j.giG()
g=i.r
g.a.uniform1f(g.d,p)
p=j.gc3()
g=i.x
g.a.uniform1f(g.d,p)
p=j.gc4()
g=i.y
g.a.uniform1f(g.d,p)
p=j.gc5()
g=i.z
g.a.uniform1f(g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.dJ
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
n=this.a.ci
if(l>=n.length)return H.f(n,l)
i=n[l]
n=j.gb6()
H.u(s,"$isd",p,"$asd")
if(!C.a.ao(s,n)){n.sdN(0,s.length)
C.a.h(s,n)}n=j.gcc(j)
h=i.d
g=n.gaM(n)
f=n.gaN(n)
n=n.gaO()
h.a.uniform3f(h.d,g,f,n)
n=j.ghX()
f=i.b
g=n.gaM(n)
h=n.gaN(n)
n=n.gaO()
f.a.uniform3f(f.d,g,h,n)
n=j.gb5(j)
h=i.c
g=n.gaM(n)
f=n.gaN(n)
n=n.gaO()
h.a.uniform3f(h.d,g,f,n)
n=m.cA(j.gcc(j))
f=n.a
g=n.b
h=n.c
h=n.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gan(j)
g=i.f
f=h.gbD()
n=h.gba()
h=h.gbl()
g.a.uniform3f(g.d,f,n,h)
h=j.gb6()
n=h.gdQ(h)
if(!n){n=i.x
n.a.uniform1i(n.d,1)}else{n=i.r
g=h.gcY()
f=n.a
n=n.d
if(!g)f.uniform1i(n,0)
else f.uniform1i(n,h.gcX())
n=i.x
n.a.uniform1i(n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.dK
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.y,u=v.length,p=[P.w],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.cj
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gb6()
H.u(s,"$isd",n,"$asd")
if(!C.a.ao(s,h)){h.sdN(0,s.length)
C.a.h(s,h)}e=m.k(0,j.gT(j))
h=j.gT(j).b9(new V.T(0,0,0))
g=i.b
f=h.gcB(h)
d=h.gcC(h)
h=h.gcD(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b9(new V.T(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cn(0)
d=i.d
o=new Float32Array(H.b9(H.u(new V.b2(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).P(0,!0),"$isd",p,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,o)
d=j.gan(j)
h=i.e
f=d.gbD()
g=d.gba()
d=d.gbl()
h.a.uniform3f(h.d,f,g,d)
d=j.gb6()
h=d.gdQ(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcY()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gcX())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gc3()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gc4()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gc5()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.dL
v.a.uniform1i(v.d,r)
v=a.db
m=v.gT(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
p=this.a.ck
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gb6()
H.u(s,"$isd",z,"$asd")
if(!C.a.ao(s,p)){p.sdN(0,s.length)
C.a.h(s,p)}p=j.gb3(j)
n=i.b
h=p.gcB(p)
g=p.gcC(p)
p=p.gcD(p)
n.a.uniform3f(n.d,h,g,p)
p=j.gcc(j)
g=i.c
h=p.gaM(p)
n=p.gaN(p)
p=p.gaO()
g.a.uniform3f(g.d,h,n,p)
p=j.ghX()
n=i.d
h=p.gaM(p)
g=p.gaN(p)
p=p.gaO()
n.a.uniform3f(n.d,h,g,p)
p=j.gb5(j)
g=i.e
h=p.gaM(p)
n=p.gaN(p)
p=p.gaO()
g.a.uniform3f(g.d,h,n,p)
p=m.b9(j.gb3(j))
n=i.f
n.a.uniform3f(n.d,p.a,p.b,p.c)
p=j.gb6()
n=p.gdQ(p)
if(!n){p=i.x
p.a.uniform1i(p.d,1)}else{n=i.r
h=p.gcY()
g=n.a
n=n.d
if(!h)g.uniform1i(n,0)
else g.uniform1i(n,p.gcX())
p=i.x
p.a.uniform1i(p.d,0)}p=j.gan(j)
n=i.y
h=p.gbD()
g=p.gba()
p=p.gbl()
n.a.uniform3f(n.d,h,g,p)
p=j.giO()
g=i.z
g.a.uniform1f(g.d,p)
p=j.giP()
g=i.Q
g.a.uniform1f(g.d,p)
p=j.gc3()
g=i.ch
g.a.uniform1f(g.d,p)
p=j.gc4()
g=i.cx
g.a.uniform1f(g.d,p)
p=j.gc5()
g=i.cy
g.a.uniform1f(g.d,p);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.e:this.I(s,this.Q.d)
z=this.a
v=this.Q.d
z.a8(z.du,z.bu,v)
break
case C.d:this.I(s,this.Q.e)
z=this.a
v=this.Q.e
z.af(z.dv,z.bu,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gT(v).cn(0)
a.Q=v}z=z.id
z.toString
z.V(v.P(0,!0))}if(x.dy){this.I(s,this.ch)
z=this.a
v=this.ch
z.af(z.dw,z.dz,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bv
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
break
case C.e:this.I(s,this.cx.d)
z=this.a
v=this.cx.d
z.a8(z.dA,z.bw,v)
v=this.a
z=this.cx.f
v=v.bv
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break
case C.d:this.I(s,this.cx.e)
z=this.a
v=this.cx.e
z.af(z.dB,z.bw,v)
v=this.a
z=this.cx.f
v=v.bv
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
v=this.cy.f
z=z.by
z.toString
u=v.a
p=v.b
v=v.c
z.a.uniform3f(z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bx
v.a.uniform1f(v.d,p)
break
case C.e:this.I(s,this.cy.d)
z=this.a
v=this.cy.d
z.a8(z.dC,z.bz,v)
v=this.a
z=this.cy.f
v=v.by
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bx
z.a.uniform1f(z.d,p)
break
case C.d:this.I(s,this.cy.e)
z=this.a
v=this.cy.e
z.af(z.dD,z.bz,v)
v=this.a
z=this.cy.f
v=v.by
v.toString
u=z.a
p=z.b
z=z.c
v.a.uniform3f(v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bx
z.a.uniform1f(z.d,p)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.f:z=this.a
u=this.db.f
z=z.bA
z.a.uniform1f(z.d,u)
break
case C.e:this.I(s,this.db.d)
z=this.a
u=this.db.d
z.a8(z.dE,z.bB,u)
u=this.a
z=this.db.f
u=u.bA
u.a.uniform1f(u.d,z)
break
case C.d:this.I(s,this.db.e)
z=this.a
u=this.db.e
z.af(z.dF,z.bB,u)
u=this.a
z=this.db.f
u=u.bA
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(q=0;q<s.length;++q)s[q].H(a)
z=b.e
z.H(a)
z.a3(a)
z.a1(a)
if(v)a.a.disable(3042)
for(q=0;q<s.length;++q)s[q].a1(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.aW()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cS().aj}},hK:{"^":"cU;0f,a,b,0c,0d,0e"},cU:{"^":"a;",
bg:["ed",function(){}]},hL:{"^":"cU;a,b,0c,0d,0e"},b1:{"^":"cU;0f,a,b,0c,0d,0e",
d6:function(a){var z,y
if(!J.H(this.f,a)){z=this.f
this.f=a
y=new D.A(this.b+".color",z,a,this,[V.S])
y.b=!0
this.a.G(y)}},
bg:["bH",function(){this.ed()
this.d6(new V.S(1,1,1))}],
san:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.bg()
z=this.a
z.a=null
z.G(null)}this.d6(b)}},hN:{"^":"b1;0ch,0f,a,b,0c,0d,0e",
fo:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.G(z)}},
bg:function(){this.bH()
this.fo(1)}},hO:{"^":"b1;0ch,0f,a,b,0c,0d,0e",
bX:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.A(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.G(z)}},
bg:function(){this.bH()
this.bX(100)}},hX:{"^":"aS;0a,0b,0c,0d,0e,0f,0aa:r@",
gp:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
G:[function(a){var z
H.i(a,"$isv")
z=this.r
if(!(z==null))z.u(a)},function(){return this.G(null)},"a6","$1","$0","gab",0,2,0],
d4:function(a){},
d5:function(a){var z,y
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gp().C(0,this.gab())
y=this.f
this.f=a
if(a!=null)a.gp().h(0,this.gab())
z=new D.A("bumpyTextureCube",y,this.f,this,[T.d2])
z.b=!0
this.G(z)}},
I:function(a,b){H.u(a,"$isd",[T.aL],"$asd")
if(b!=null)if(!C.a.ao(a,b)){b.a=a.length
C.a.h(a,b)}},
a7:function(a,b){},
b4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
if(z==null){y=A.e9(this.d)
z=y.e
x=H.i(a.fr.j(0,z),"$ise8")
if(x==null){w=a.a
x=new A.e8(w,z)
x.aR(w,z)
x.z=y
z=y.c
v=z?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
u=y.d
v=(u?v+"uniform mat4 txtCubeMat;\n":v)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
t=y.b
if(t)v+="attribute vec3 binmAttr;\n"
if(z)v+="attribute vec2 txt2DAttr;\n"
v=(u?v+"attribute vec3 txtCubeAttr;\n":v)+"\nvarying vec3 normalVec;\n"
if(t)v+="varying vec3 binormalVec;\n"
if(z)v+="varying vec2 txt2D;\n"
v=(u?v+"varying vec3 txtCube;\n":v)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(t)v+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(z)v+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
v=(u?v+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":v)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
t=t?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(z)t+="varying vec2 txt2D;\n"
t=(u?t+"varying vec3 txtCube;\n":t)+"\n"
s=y.a
switch(s){case C.b:break
case C.f:break
case C.e:t+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.d:t+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}t+="\nvec3 normal()\n{\n"
if(s===C.b||s===C.f)t+="   return normalize(normalVec);\n"
else{t+="   if(nullBumpTxt > 0) return normalVec;\n"
t=(s===C.e?t+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":t+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}t+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
x.aY(0,v.charCodeAt(0)==0?v:v,t.charCodeAt(0)==0?t:t)
x.Q=x.x.j(0,"posAttr")
x.cx=x.x.j(0,"normAttr")
x.ch=x.x.j(0,"binmAttr")
x.cy=x.x.j(0,"txt2DAttr")
x.db=x.x.j(0,"txtCubeAttr")
x.dx=H.b(x.y.m(0,"viewObjMat"),"$isa_")
x.dy=H.b(x.y.m(0,"projViewObjMat"),"$isa_")
if(z)x.fr=H.b(x.y.m(0,"txt2DMat"),"$isbG")
if(u)x.fx=H.b(x.y.m(0,"txtCubeMat"),"$isa_")
switch(s){case C.b:break
case C.f:break
case C.e:x.fy=H.b(x.y.m(0,"bumpTxt"),"$isa0")
x.id=H.b(x.y.m(0,"nullBumpTxt"),"$isE")
break
case C.d:x.go=H.b(x.y.m(0,"bumpTxt"),"$isaf")
x.id=H.b(x.y.m(0,"nullBumpTxt"),"$isE")
break}a.aT(x)}this.a=x
b.e=null
z=x}y=z.z
r=y.f
z=b.e
if(!(z instanceof Z.bi)){b.e=null
z=null}if(z==null||!z.d.q(0,r)){b.d.ai()
z=y.b
if(z)b.d.aK()
v=y.d
if(v)b.d.bm()
q=b.d.aU(new Z.c5(a.a),r)
q.a_($.$get$a1()).e=this.a.Q.c
q.a_($.$get$ax()).e=this.a.cx.c
if(z)q.a_($.$get$aw()).e=this.a.ch.c
if(y.c)q.a_($.$get$aj()).e=this.a.cy.c
if(v)q.a_($.$get$ay()).e=this.a.db.c
b.e=q}p=H.c([],[T.aL])
this.a.H(a)
z=this.a
v=a.ge0()
z=z.dx
z.toString
z.V(v.P(0,!0))
v=this.a
z=a.gct()
v=v.dy
v.toString
v.V(z.P(0,!0))
if(y.c){z=this.a
v=this.b
z=z.fr
z.toString
z.V(v.P(0,!0))}if(y.d){z=this.a
v=this.c
z=z.fx
z.toString
z.V(v.P(0,!0))}switch(y.a){case C.b:break
case C.f:break
case C.e:this.I(p,this.e)
z=this.a.id
z.a.uniform1i(z.d,1)
break
case C.d:this.I(p,this.f)
z=this.a
v=this.f
u=z.go
z=z.id
if(v==null||v.d<6)z.a.uniform1i(z.d,1)
else{u.cF(v)
z.a.uniform1i(z.d,0)}break}for(o=0;o<p.length;++o)p[o].H(a)
z=b.e
z.H(a)
z.a3(a)
z.a1(a)
for(o=0;o<p.length;++o){z=p[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.aW()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return A.e9(this.d).e}},iC:{"^":"aS;0a,0b,0c,0d,0aa:e@",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
G:[function(a){var z
H.i(a,"$isv")
z=this.e
if(!(z==null))z.u(a)},function(){return this.G(null)},"a6","$1","$0","gab",0,2,0],
a7:function(a,b){},
b4:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.i(a.fr.j(0,"Skybox"),"$isej")
if(z==null){y=a.a
z=new A.ej(y,"Skybox")
z.aR(y,"Skybox")
z.aY(0,$.iE,$.iD)
z.z=z.x.j(0,"posAttr")
z.Q=H.b(z.y.j(0,"fov"),"$isQ")
z.ch=H.b(z.y.j(0,"ratio"),"$isQ")
z.cx=H.b(z.y.j(0,"boxClr"),"$isI")
z.cy=H.b(z.y.j(0,"boxTxt"),"$isaf")
z.db=H.b(z.y.j(0,"viewMat"),"$isa_")
a.aT(z)}this.a=z}if(b.e==null){y=b.d.aU(new Z.c5(a.a),$.$get$a1())
y.a_($.$get$a1()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.H(a)}y=a.d
x=a.c
w=this.a
w.H(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.cF(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gT(x).cn(0)
w=w.db
w.toString
w.V(x.P(0,!0))
y=b.e
if(y instanceof Z.bi){y.H(a)
y.a3(a)
y.a1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.aW()
y=this.c
if(y!=null)y.a1(a)}},aS:{"^":"a;"},iP:{"^":"aS;0a,0b,0c,0d,0aa:e@",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
G:[function(a){var z
H.i(a,"$isv")
z=this.e
if(!(z==null))z.u(a)},function(){return this.G(null)},"a6","$1","$0","gab",0,2,0],
ii:[function(a,b){var z,y,x,w,v,u,t,s
H.u(b,"$ise",[O.bD],"$ase")
for(z=b.length,y=this.gab(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gaa()==null){t=new D.aJ()
t.d=0
u.saa(t)}t=u.gaa()
t.toString
H.k(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a6()},"$2","geX",8,0,23],
ij:[function(a,b){var z,y,x,w,v
H.u(b,"$ise",[O.bD],"$ase")
for(z=b.length,y=this.gab(),x=0;x<b.length;b.length===z||(0,H.x)(b),++x){w=b[x]
if(w!=null){if(w.gaa()==null){v=new D.aJ()
v.d=0
w.saa(v)}w.gaa().C(0,y)}}this.a6()},"$2","geY",8,0,23],
a7:function(a,b){},
b4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.h.a2(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.i(a.fr.j(0,y),"$iser")
if(x==null){x=A.iQ(z,a.a)
a.aT(x)}this.b=x
y=x}if(b.e==null){y=b.d.aU(new Z.c5(a.a),$.$get$a1())
w=y.a_($.$get$a1())
v=this.b
w.e=v.z.c
b.e=y
y=v}y.H(a)
y=T.aL
u=H.c([],[y])
for(w=[P.w],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.u(u,"$isd",y,"$asd")
if(v!=null)if(!C.a.ao(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.cx
if(t>=v.length)return H.f(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)o.uniform1i(v,0)
else o.uniform1i(v,q.a)
v=this.b
q=r.b
v=v.cy
if(t>=v.length)return H.f(v,t)
v=v[t]
n=new Float32Array(H.b9(H.u((q==null?new V.ai(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).P(0,!0),"$isd",w,"$asd")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aR(0,0,1,1)
q=v.db
if(t>=q.length)return H.f(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.f(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null)m=V.aR(0,0,1,1)
q=v.dy
if(t>=q.length)return H.f(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.fr
if(t>=v.length)return H.f(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
q=r.e
v=v.fx
if(t>=v.length)return H.f(v,t)
v=v[t]
q=q?1:0
v.a.uniform1i(v.d,q);++t}}y=this.b.Q
y.a.uniform1i(y.d,t)
y=this.b
w=this.a
y=y.ch
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
y.a.uniform4f(y.d,v,q,p,w)
for(s=0;s<u.length;++s)u[s].H(a)
y=b.e
if(y instanceof Z.bi){y.H(a)
y.a3(a)
y.a1(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.x.aW()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},bD:{"^":"a;0a,0b,0c,0d,0e,0aa:f@",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
G:[function(a){var z
H.i(a,"$isv")
z=this.f
if(!(z==null))z.u(a)},function(){return this.G(null)},"a6","$1","$0","gab",0,2,0],
n:{
es:function(a,b,c,d,e){var z,y,x,w,v
z=new O.bD()
y=z.a
z.a=e
e.gp().h(0,z.gab())
x=new D.A("texture",y,z.a,z,[T.ep])
x.b=!0
z.G(x)
w=V.aA()
if(!J.H(z.b,w)){y=z.b
z.b=w
x=new D.A("colorMatrix",y,w,z,[V.ai])
x.b=!0
z.G(x)}v=V.aR(0,0,1,1)
if(!J.H(z.c,v)){y=z.c
z.c=v
x=new D.A("source",y,v,z,[V.cn])
x.b=!0
z.G(x)}if(!J.H(z.d,b)){y=z.d
z.d=b
x=new D.A("destination",y,b,z,[V.cn])
x.b=!0
z.G(x)}if(z.e!==c){z.e=c
x=new D.A("flip",!c,c,z,[P.a5])
x.b=!0
z.G(x)}z.f=null
return z}}}}],["","",,T,{"^":"",aL:{"^":"cD;"},ep:{"^":"aL;"},iO:{"^":"ep;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gp:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
H:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
n:{
eq:function(a,b){var z=new T.iO()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},d2:{"^":"aL;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
H:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
a1:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},iS:{"^":"a;a,0b,0c,0d,0e",
dP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
t.bindTexture(34067,s)
t.texParameteri(34067,10242,10497)
t.texParameteri(34067,10243,10497)
t.texParameteri(34067,10241,9729)
t.texParameteri(34067,10240,9729)
t.bindTexture(34067,null)
r=new T.d2()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aI(r,s,z,34069,!1,!1)
this.aI(r,s,w,34070,!1,!1)
this.aI(r,s,y,34071,!1,!1)
this.aI(r,s,v,34072,!1,!1)
this.aI(r,s,x,34073,!1,!1)
this.aI(r,s,u,34074,!1,!1)
return r},
hm:function(a){return this.dP(a,".png",!1,"")},
hn:function(a,b){return this.dP(a,b,!1,"")},
aI:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.aa
W.W(z,"load",H.k(new T.iT(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fm:function(a,b,c){var z,y,x,w
b=V.bS(b,2)
z=V.bS(a.width,2)
y=V.bS(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cH(null,null)
x.width=z
x.height=y
w=H.i(C.k.e4(x,"2d"),"$isdx")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.l8(w.getImageData(0,0,x.width,x.height))}}},iT:{"^":"t:24;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fm(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.hQ(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.cd()}++z.e}}}],["","",,V,{"^":"",fG:{"^":"a;",
aZ:function(a,b){return!0},
i:function(a){return"all"},
$isc_:1},c_:{"^":"a;"},e3:{"^":"a;",
aZ:["ec",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aZ(0,b))return!0
return!1}],
i:["cI",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc_:1},bt:{"^":"e3;0a",
aZ:function(a,b){return!this.ec(0,b)},
i:function(a){return"!["+this.cI(0)+"]"}},is:{"^":"a;0a",
eh:function(a){var z,y
if(a.a.length<=0)throw H.h(P.m("May not create a SetMatcher with zero characters."))
z=new H.b0(0,0,[P.B,P.a5])
for(y=new H.e0(a,a.gl(a),0,[H.aG(a,"r",0)]);y.E();)z.a4(0,y.d,!0)
this.a=z},
aZ:function(a,b){return this.a.dk(0,b)},
i:function(a){var z=this.a
return P.d1(new H.e_(z,[H.z(z,0)]),0,null)},
$isc_:1,
n:{
a4:function(a){var z=new V.is()
z.eh(a)
return z}}},el:{"^":"a;a,b,0c,0d",
ghq:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ez(this.a.K(0,b))
w.a=H.c([],[V.c_])
w.c=!1
C.a.h(this.c,w)
return w},
hb:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aZ(0,a))return w}return},
i:function(a){return this.b}},ew:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fz(this.b,"\n","\\n")
y=H.fz(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ex:{"^":"a;a,b,0c",
i:function(a){return this.b}},j0:{"^":"a;0a,0b,0c",
K:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.el(this,b)
z.c=H.c([],[V.ez])
this.a.a4(0,b,z)}return z},
b7:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ex(this,a)
y=P.n
z.c=new H.b0(0,0,[y,y])
this.b.a4(0,a,z)}return z},
hW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ew])
y=this.c
x=[P.B]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.be(a,t)
r=y.hb(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d1(w,0,null)
throw H.h(P.m("Untokenizable string [state: "+y.ghq(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d1(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ew(o==null?p.b:o,q,t)}++t}}}},ez:{"^":"e3;b,0c,0a",
i:function(a){return this.b.b+": "+this.cI(0)}}}],["","",,X,{"^":"",fK:{"^":"co;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gp:function(){var z=this.fr
if(z==null){z=D.C()
this.fr=z}return z},
ae:function(a){var z=this.fr
if(!(z==null))z.u(a)},
sad:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.A("width",z,b,this,[P.B])
z.b=!0
this.ae(z)}},
sac:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.A("height",z,b,this,[P.B])
z.b=!0
this.ae(z)}},
H:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f){z=a.a.drawingBufferWidth
y=this.r
if(typeof z!=="number")return z.k()
this.sad(0,C.h.U(z*y))
y=a.a.drawingBufferHeight
z=this.x
if(typeof y!=="number")return y.k()
this.sac(0,C.h.U(y*z))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.X(z.getParameter(3379))
u=V.bS(x,2)
t=V.bS(w,2)
v=V.bS(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.q.dY(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.eq(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
x=r.y
if(!(x==null))x.cd()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.cd()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.Q=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.z,0)
z.framebufferRenderbuffer(36160,36096,36161,this.Q)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.y)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.dy
y=z.c
a.c=C.c.U(y*this.a)
x=z.d
a.d=C.c.U(x*this.b)
w=this.c
q=C.c.U(z.a*w)
p=this.d
o=C.c.U(z.b*p)
n=C.c.U(y*w)
m=C.c.U(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.db)
if(this.cy){z=a.a
y=this.cx
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
a1:function(a){a.a.bindFramebuffer(36160,null)},
n:{
ds:function(a,b,c,d,e,f){var z=new X.fK()
z.a=512
z.b=512
z.c=512
z.d=512
z.e=!0
z.f=!0
z.r=d
z.x=e
z.ch=T.eq(0,null)
z.cx=new V.a9(0,0,0,1)
z.cy=!0
z.db=2000
z.dx=!0
z.dy=V.aR(0,0,1,1)
z.sad(0,a)
z.sac(0,b)
return z}}},cb:{"^":"a;",$isaC:1},hj:{"^":"co;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
H:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.q(y)
v=C.c.U(w.a*y)
if(typeof x!=="number")return H.q(x)
u=C.c.U(w.b*x)
t=C.c.U(w.c*y)
a.c=t
w=C.c.U(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
a1:function(a){},
n:{
cM:function(a,b,c,d,e,f,g){var z,y
z=new X.hj()
y=new V.a9(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aR(0,0,1,1)
z.r=y
return z}}},hk:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
H:function(a){var z
a.cy.bC(V.aA())
z=V.aA()
a.db.bC(z)},
a1:function(a){a.cy.aA()
a.db.aA()},
$isaC:1,
$iscb:1},i1:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
ae:[function(a){var z
H.i(a,"$isv")
z=this.f
if(!(z==null))z.u(a)},function(){return this.ae(null)},"i_","$1","$0","gcL",0,2,0],
sb0:function(a){var z,y
if(!J.H(this.b,a)){z=this.b
if(z!=null)z.gp().C(0,this.gcL())
y=this.b
this.b=a
if(a!=null)a.gp().h(0,this.gcL())
z=new D.A("mover",y,this.b,this,[U.ac])
z.b=!0
this.ae(z)}},
H:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aK(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bC(s)
z=$.ee
if(z==null){z=V.e5(new V.T(0,0,0),new V.F(0,1,0),new V.F(0,0,-1))
$.ee=z
r=z}else r=z
z=this.b
if(z!=null){q=z.aQ(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bC(r)},
a1:function(a){a.cy.aA()
a.db.aA()},
$isaC:1,
$iscb:1,
n:{
ed:function(a,b,c,d,e){var z,y,x
z=new X.i1()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
z.sb0(c)
y=z.c
if(!$.l.$2(y,b)){x=z.c
z.c=b
y=new D.A("fov",x,b,z,[P.w])
y.b=!0
z.ae(y)}y=z.d
if(!$.l.$2(y,d)){x=z.d
z.d=d
y=new D.A("near",x,d,z,[P.w])
y.b=!0
z.ae(y)}y=z.e
if(!$.l.$2(y,a)){x=z.e
z.e=a
y=new D.A("far",x,a,z,[P.w])
y.b=!0
z.ae(y)}return z}}},co:{"^":"a;"}}],["","",,V,{"^":"",
lx:function(a){P.j_(C.x,new V.ly(a))},
ly:{"^":"t:38;a",
$1:function(a){H.i(a,"$isb5")
P.dm(C.c.e_(this.a.ghe(),2)+" fps")}},
ix:{"^":"a;0a,0b",
ei:function(a,b){var z,y,x,w,v,u,t
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
t=W.aa
W.W(z,"scroll",H.k(new V.iA(x),{func:1,ret:-1,args:[t]}),!1,t)},
dd:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$isd",[P.n],"$asd")
this.fs()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hW(C.a.hi(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fy(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kG(C.I,s,C.r,!1)
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
fs:function(){var z,y,x,w
if(this.b!=null)return
z=new V.j0()
y=P.n
z.a=new H.b0(0,0,[y,V.el])
z.b=new H.b0(0,0,[y,V.ex])
z.c=z.K(0,"Start")
y=z.K(0,"Start").B(0,"Bold")
x=V.a4(new H.a2("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Bold").B(0,"Bold")
x=new V.bt()
w=[V.c_]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a4(new H.a2("*"))
C.a.h(x.a,y)
y=z.K(0,"Bold").B(0,"BoldEnd")
x=V.a4(new H.a2("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").B(0,"Italic")
x=V.a4(new H.a2("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Italic").B(0,"Italic")
x=new V.bt()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a4(new H.a2("_"))
C.a.h(x.a,y)
y=z.K(0,"Italic").B(0,"ItalicEnd")
x=V.a4(new H.a2("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").B(0,"Code")
x=V.a4(new H.a2("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Code").B(0,"Code")
x=new V.bt()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a4(new H.a2("`"))
C.a.h(x.a,y)
y=z.K(0,"Code").B(0,"CodeEnd")
x=V.a4(new H.a2("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").B(0,"LinkHead")
x=V.a4(new H.a2("["))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"LinkHead").B(0,"LinkTail")
x=V.a4(new H.a2("|"))
C.a.h(y.a,x)
x=z.K(0,"LinkHead").B(0,"LinkEnd")
y=V.a4(new H.a2("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkHead").B(0,"LinkHead")
y=new V.bt()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a4(new H.a2("|]"))
C.a.h(y.a,x)
x=z.K(0,"LinkTail").B(0,"LinkEnd")
y=V.a4(new H.a2("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkTail").B(0,"LinkTail")
y=new V.bt()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a4(new H.a2("|]"))
C.a.h(y.a,x)
C.a.h(z.K(0,"Start").B(0,"Other").a,new V.fG())
x=z.K(0,"Other").B(0,"Other")
y=new V.bt()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a4(new H.a2("*_`["))
C.a.h(y.a,x)
x=z.K(0,"BoldEnd")
x.d=x.a.b7("Bold")
x=z.K(0,"ItalicEnd")
x.d=x.a.b7("Italic")
x=z.K(0,"CodeEnd")
x.d=x.a.b7("Code")
x=z.K(0,"LinkEnd")
x.d=x.a.b7("Link")
x=z.K(0,"Other")
x.d=x.a.b7("Other")
this.b=z},
n:{
iy:function(a,b){var z=new V.ix()
z.ei(a,!0)
return z}}},
iA:{"^":"t:24;a",
$1:function(a){P.eu(C.l,new V.iz(this.a))}},
iz:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.c.U(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,S,{"^":"",
fu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.iy("Test 031",!0)
y=W.cH(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.n]
z.dd(H.c(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],x))
z.dd(H.c(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.o(P.m("Failed to find an element with the identifier, testCanvas."))
v=E.iY(w,!0,!0,!0,!1)
u=E.cL(null,!0,null,"",null,null)
t=F.d_()
F.bL(t,null,null,1,1,1,0,0,1)
F.bL(t,null,null,1,1,0,1,0,3)
F.bL(t,null,null,1,1,0,0,1,2)
F.bL(t,null,null,1,1,-1,0,0,0)
F.bL(t,null,null,1,1,0,-1,0,0)
F.bL(t,null,null,1,1,0,0,-1,3)
t.ai()
u.sbb(0,t)
z=U.dQ(null)
z.h(0,U.eU(!1,!1,v.r,!1,!1,!1,null,!1))
z.h(0,U.eV(!1,!1,v.r,null,!1))
u.sb0(z)
s=new O.hX()
s.b=new V.b2(1,0,0,0,1,0,0,0,1)
s.c=V.aA()
s.d=C.b
s.d4(null)
s.d5(null)
s.a6()
s.r=null
z=v.f.hm("../resources/diceBumpMap")
if(s.d!==C.d){s.d=C.d
s.d4(null)
s.a=null}s.d5(z)
r=X.ds(800,600,!0,1,1,!0)
z=new V.a9(0.5,0.5,1,1)
if(!r.cx.q(0,z)){q=r.cx
r.cx=z
z=new D.A("color",q,z,r,[V.a9])
z.b=!0
r.ae(z)}p=M.dN(null,null,null,null)
p.sas(s)
p.saB(0,r)
p.d.h(0,u)
p.a.sb0(U.cJ(V.e7(0,0,5)))
o=U.dQ(null)
o.h(0,U.eU(!1,!0,v.r,!1,!1,!1,null,!1))
o.h(0,U.eV(!1,!0,v.r,null,!1))
o.h(0,U.cJ(V.e7(0,0,5)))
n=X.ed(2000,1.0471975511965976,o,0.1,null)
m=X.ds(800,600,!0,1,1,!0)
if(m.cy){m.cy=!1
z=new D.A("clearColor",!0,!1,m,[P.a5])
z.b=!0
m.ae(z)}l=E.cL(null,!0,null,"",null,null)
l.sbb(0,F.lA(30,1,15,0.5))
k=new O.hI()
z=O.cc(V.ai)
k.e=z
z.aC(k.geP(),k.geQ())
z=new O.b1(k,"emission")
z.c=C.b
z.f=new V.S(0,0,0)
k.f=z
z=new O.b1(k,"ambient")
z.c=C.b
z.f=new V.S(0,0,0)
k.r=z
z=new O.b1(k,"diffuse")
z.c=C.b
z.f=new V.S(0,0,0)
k.x=z
z=new O.b1(k,"invDiffuse")
z.c=C.b
z.f=new V.S(0,0,0)
k.y=z
z=new O.hO(k,"specular")
z.c=C.b
z.f=new V.S(0,0,0)
z.ch=100
k.z=z
z=new O.hL(k,"bump")
z.c=C.b
k.Q=z
k.ch=null
z=new O.b1(k,"reflect")
z.c=C.b
z.f=new V.S(0,0,0)
k.cx=z
z=new O.hN(k,"refract")
z.c=C.b
z.f=new V.S(0,0,0)
z.ch=1
k.cy=z
z=new O.hK(k,"alpha")
z.c=C.b
z.f=1
k.db=z
z=new D.ht()
z.bc(D.V)
z.e=H.c([],[D.ce])
z.f=H.c([],[D.i3])
z.r=H.c([],[D.iF])
z.x=H.c([],[D.iU])
z.y=H.c([],[D.iV])
z.z=H.c([],[D.iW])
z.Q=null
z.ch=null
z.cE(z.geO(),z.gf8(),z.gfa())
k.dx=z
x=z.Q
if(x==null){x=D.C()
z.Q=x
z=x}else z=x
z.h(0,k.gfk())
z=k.dx
x=z.ch
if(x==null){x=D.C()
z.ch=x
z=x}else z=x
z.h(0,k.gab())
k.dy=null
z=k.dx
x=U.cJ(V.e5(new V.T(0,0,0),new V.F(0,1,0),new V.F(0,-1,-1)))
j=new V.S(1,1,1)
i=new D.ce()
i.c=new V.S(1,1,1)
i.a=new V.F(0,0,1)
q=i.b
i.b=x
x.gp().h(0,i.gen())
x=new D.A("mover",q,i.b,i,[U.ac])
x.b=!0
i.aE(x)
if(!i.c.q(0,j)){q=i.c
i.c=j
x=new D.A("color",q,j,i,[V.S])
x.b=!0
i.aE(x)}z.h(0,i)
z=k.r
z.san(0,new V.S(0,0,1))
z=k.x
z.san(0,new V.S(0,1,0))
z=k.z
z.san(0,new V.S(1,0,0))
z=k.z
if(z.c===C.b){z.c=C.f
z.bH()
z.bX(100)
x=z.a
x.a=null
x.G(null)}z.bX(10)
z=v.f.hn("../resources/maskonaive",".jpg")
h=M.cK(null,null,null)
x=new O.iC()
x.b=1.0471975511965976
q=x.c
x.c=z
z.gp().h(0,x.gab())
z=new D.A("boxTexture",q,x.c,x,[T.d2])
z.b=!0
x.G(z)
j=new V.S(1,1,1)
if(!J.H(x.d,j)){q=x.d
x.d=j
z=new D.A("boxColor",q,j,x,[V.S])
z.b=!0
x.G(z)}x.e=null
h.sas(x)
h.saB(0,m)
h.saV(n)
g=M.dN(null,null,null,null)
g.saV(n)
g.sas(k)
g.saB(0,m)
g.d.h(0,l)
f=new O.h2()
f.sdj(null)
f.sdg(null)
e=new V.b2(1,0,0,0,1,0,0,0,1)
if(!J.H(f.d,e)){f.d=e
f.a6()}e=new V.b2(1,0,0,0,1,0,0,0,1)
if(!J.H(f.e,e)){f.e=e
f.a6()}f.sdf(null)
f.sdj(m.ch)
f.sdg(r.ch)
f.sdf(V.e6(0.05,0.05,0.05,1))
d=M.cK(null,null,null)
d.sas(f)
c=new O.iP()
b=new V.a9(0,0,0,0)
c.a=b
z=new D.A("backColor",null,b,c,[V.a9])
z.b=!0
c.G(z)
c.b=null
z=O.cc(O.bD)
c.c=z
z.aC(c.geX(),c.geY())
c.d=0
c.e=null
z=c.c
x=r.ch
z.h(0,O.es(null,V.aR(0,0.8,0.2,0.2),!0,null,x))
x=c.c
z=m.ch
x.h(0,O.es(null,V.aR(0,0.6,0.2,0.2),!1,null,z))
a=M.cK(null,null,null)
a.saB(0,X.cM(!1,!0,!1,null,2000,null,0))
a.sas(c)
z=M.aD
x=H.c([h,g,p,d,a],[z])
i=new M.fU()
i.bc(z)
i.e=!1
i.f=null
i.aC(i.gfb(),i.gfc())
i.c1(0,x)
z=v.d
if(z!==i){if(z!=null)z.gp().C(0,v.gcJ())
v.d=i
i.gp().h(0,v.gcJ())
v.el()}V.lx(v)}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dV.prototype
return J.dU.prototype}if(typeof a=="string")return J.cj.prototype
if(a==null)return J.dW.prototype
if(typeof a=="boolean")return J.ho.prototype
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.c7=function(a){if(typeof a=="string")return J.cj.prototype
if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.dh=function(a){if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.le=function(a){if(typeof a=="number")return J.bX.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cq.prototype
return a}
J.lf=function(a){if(typeof a=="number")return J.bX.prototype
if(typeof a=="string")return J.cj.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cq.prototype
return a}
J.cy=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cz(a)}
J.H=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).q(a,b)}
J.fC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.le(a).al(a,b)}
J.dn=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lf(a).k(a,b)}
J.fD=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lo(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c7(a).j(a,b)}
J.fE=function(a,b,c,d){return J.cy(a).dc(a,b,c,d)}
J.cC=function(a,b,c){return J.c7(a).h3(a,b,c)}
J.dp=function(a,b){return J.dh(a).F(a,b)}
J.fF=function(a,b){return J.dh(a).N(a,b)}
J.aY=function(a){return J.K(a).gY(a)}
J.bT=function(a){return J.dh(a).ga0(a)}
J.bg=function(a){return J.c7(a).gl(a)}
J.a8=function(a){return J.K(a).i(a)}
I.dk=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cG.prototype
C.y=J.p.prototype
C.a=J.b_.prototype
C.z=J.dU.prototype
C.h=J.dV.prototype
C.A=J.dW.prototype
C.c=J.bX.prototype
C.i=J.cj.prototype
C.H=J.bY.prototype
C.J=H.hV.prototype
C.K=W.hW.prototype
C.p=J.i2.prototype
C.q=P.cZ.prototype
C.m=J.cq.prototype
C.t=W.bJ.prototype
C.u=W.jy.prototype
C.v=new P.i0()
C.w=new P.jk()
C.j=new P.kk()
C.b=new A.cd(0,"ColorSourceType.None")
C.f=new A.cd(1,"ColorSourceType.Solid")
C.e=new A.cd(2,"ColorSourceType.Texture2D")
C.d=new A.cd(3,"ColorSourceType.TextureCube")
C.l=new P.aZ(0)
C.x=new P.aZ(5e6)
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.D=function(getTagFallback) {
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
C.E=function() {
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
C.F=function(hooks) {
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
C.G=function(hooks) {
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
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=H.c(I.dk([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.r=new P.jj(!1)
$.az=0
$.bh=null
$.dt=null
$.da=!1
$.fr=null
$.fl=null
$.fx=null
$.cx=null
$.cA=null
$.di=null
$.ba=null
$.bM=null
$.bN=null
$.db=!1
$.P=C.j
$.dJ=null
$.dI=null
$.dH=null
$.dG=null
$.l=V.hP()
$.h4="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.h3="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.iE="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.iD="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ee=null
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
I.$lazy(y,x,w)}})(["dF","$get$dF",function(){return H.fq("_$dart_dartClosure")},"cQ","$get$cQ",function(){return H.fq("_$dart_js")},"eA","$get$eA",function(){return H.aE(H.cp({
toString:function(){return"$receiver$"}}))},"eB","$get$eB",function(){return H.aE(H.cp({$method$:null,
toString:function(){return"$receiver$"}}))},"eC","$get$eC",function(){return H.aE(H.cp(null))},"eD","$get$eD",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eH","$get$eH",function(){return H.aE(H.cp(void 0))},"eI","$get$eI",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eF","$get$eF",function(){return H.aE(H.eG(null))},"eE","$get$eE",function(){return H.aE(function(){try{null.$method$}catch(z){return z.message}}())},"eK","$get$eK",function(){return H.aE(H.eG(void 0))},"eJ","$get$eJ",function(){return H.aE(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d7","$get$d7",function(){return P.jz()},"bO","$get$bO",function(){return[]},"ff","$get$ff",function(){return P.ih("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dD","$get$dD",function(){return{}},"eY","$get$eY",function(){return Z.ap(0)},"eW","$get$eW",function(){return Z.ap(511)},"a1","$get$a1",function(){return Z.ap(1)},"ax","$get$ax",function(){return Z.ap(2)},"aw","$get$aw",function(){return Z.ap(4)},"aj","$get$aj",function(){return Z.ap(8)},"ay","$get$ay",function(){return Z.ap(16)},"bH","$get$bH",function(){return Z.ap(32)},"bI","$get$bI",function(){return Z.ap(64)},"eX","$get$eX",function(){return Z.ap(96)},"b7","$get$b7",function(){return Z.ap(128)},"aM","$get$aM",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.at]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.B,[P.e,E.aI]]},{func:1,ret:P.J,args:[F.am]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[D.v]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.J,args:[,]},{func:1,args:[,]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.B,[P.e,D.V]]},{func:1,ret:-1,args:[W.br]},{func:1,ret:P.n,args:[P.B]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.B,[P.e,U.ac]]},{func:1,ret:-1,args:[P.B,[P.e,M.aD]]},{func:1,ret:P.J,args:[F.av,P.w,P.w]},{func:1,ret:-1,args:[P.B,[P.e,V.ai]]},{func:1,ret:-1,args:[P.B,[P.e,O.bD]]},{func:1,ret:P.J,args:[W.aa]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.a5,args:[W.L]},{func:1,ret:W.a3,args:[W.L]},{func:1,args:[P.n]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.bJ]},{func:1,ret:P.a5,args:[P.w,P.w]},{func:1,ret:-1,args:[P.a],opt:[P.au]},{func:1,args:[,P.n]},{func:1,ret:V.T,args:[P.w]},{func:1,ret:P.a5,args:[[P.e,D.V]]},{func:1,ret:P.J,args:[P.b5]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[P.Y]}]
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
if(x==y)H.lz(d||a)
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
Isolate.dk=a.dk
Isolate.df=a.df
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
if(typeof dartMainRunner==="function")dartMainRunner(S.fu,[])
else S.fu([])})})()
//# sourceMappingURL=test.dart.js.map
