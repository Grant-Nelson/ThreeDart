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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d8"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d8"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d8(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d9=function(){}
var dart=[["","",,H,{"^":"",lS:{"^":"a;a"}}],["","",,J,{"^":"",
E:function(a){return void 0},
de:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cn:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dc==null){H.la()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.eP("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cD()]
if(v!=null)return v
v=H.lf(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cD(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
l:{"^":"a;",
q:function(a,b){return a===b},
gR:function(a){return H.bk(a)},
i:["cP",function(a){return"Instance of '"+H.aT(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hq:{"^":"l;",
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$isL:1},
hr:{"^":"l;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0},
$isF:1},
cE:{"^":"l;",
gR:function(a){return 0},
i:["cR",function(a){return String(a)}]},
hW:{"^":"cE;"},
cd:{"^":"cE;"},
bH:{"^":"cE;",
i:function(a){var z=a[$.$get$dB()]
if(z==null)return this.cR(a)
return"JavaScript function for "+H.f(J.a_(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbG:1},
aR:{"^":"l;$ti",
h:function(a,b){H.A(b,H.w(a,0))
if(!!a.fixed$length)H.V(P.ab("add"))
a.push(b)},
S:function(a,b){var z
if(!!a.fixed$length)H.V(P.ab("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.w(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.aD(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.N(z,y,H.f(a[y]))
return z.join(b)},
ey:function(a){return this.l(a,"")},
er:function(a,b,c){var z,y,x
H.k(b,{func:1,ret:P.L,args:[H.w(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.c(P.aD(a))}throw H.c(H.cB())},
eq:function(a,b){return this.er(a,b,null)},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
aY:function(a,b,c){var z=a.length
if(b>z)throw H.c(P.a8(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a8(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.w(a,0)])
return H.b(a.slice(b,c),[H.w(a,0)])},
gaS:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.cB())},
cc:function(a,b){var z,y
H.k(b,{func:1,ret:P.L,args:[H.w(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.aD(a))}return!1},
P:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
i:function(a){return P.cA(a,"[","]")},
gO:function(a){return new J.ar(a,a.length,0,[H.w(a,0)])},
gR:function(a){return H.bk(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.V(P.ab("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.bS(b,"newLength",null))
if(b<0)throw H.c(P.a8(b,0,null,"newLength",null))
a.length=b},
N:function(a,b,c){H.Y(b)
H.A(c,H.w(a,0))
if(!!a.immutable$list)H.V(P.ab("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aI(a,b))
if(b>=a.length||b<0)throw H.c(H.aI(a,b))
a[b]=c},
$ish:1,
$isd:1,
p:{
hp:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.bS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a8(a,0,4294967295,"length",null))
return J.dR(new Array(a),b)},
dR:function(a,b){return J.bf(H.b(a,[b]))},
bf:function(a){H.bQ(a)
a.fixed$length=Array
return a}}},
lR:{"^":"aR;$ti"},
ar:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c0:{"^":"l;",
f7:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(P.ab(""+a+".toInt()"))},
bt:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.ab(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.ab(""+a+".round()"))},
cA:function(a,b){var z,y
if(b>20)throw H.c(P.a8(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){return a&0x1FFFFFFF},
cI:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cU:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c6(a,b)},
ar:function(a,b){return(a|0)===a?a/b|0:this.c6(a,b)},
c6:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.ab("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
aP:function(a,b){var z
if(a>0)z=this.e1(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
e1:function(a,b){return b>31?0:a>>>b},
a0:function(a,b){if(typeof b!=="number")throw H.c(H.aH(b))
return a<b},
$isv:1,
$isU:1},
dT:{"^":"c0;",$isC:1},
dS:{"^":"c0;"},
c1:{"^":"l;",
bp:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aI(a,b))
if(b<0)throw H.c(H.aI(a,b))
if(b>=a.length)H.V(H.aI(a,b))
return a.charCodeAt(b)},
al:function(a,b){if(b>=a.length)throw H.c(H.aI(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.D(b)
if(typeof b!=="string")throw H.c(P.bS(b,null,null))
return a+b},
cN:function(a,b,c){var z
if(c>a.length)throw H.c(P.a8(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aX:function(a,b){return this.cN(a,b,0)},
aA:function(a,b,c){H.Y(c)
if(c==null)c=a.length
if(b<0)throw H.c(P.c8(b,null,null))
if(b>c)throw H.c(P.c8(b,null,null))
if(c>a.length)throw H.c(P.c8(c,null,null))
return a.substring(b,c)},
aZ:function(a,b){return this.aA(a,b,null)},
fa:function(a){return a.toLowerCase()},
n:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
eK:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.n(c,z)+a},
a_:function(a,b){return this.eK(a,b," ")},
ee:function(a,b,c){if(c>a.length)throw H.c(P.a8(c,0,a.length,null,null))
return H.fy(a,b,c)},
i:function(a){return a},
gR:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ise9:1,
$ise:1}}],["","",,H,{"^":"",
cB:function(){return new P.cO("No element")},
ho:function(){return new P.cO("Too many elements")},
o:{"^":"j_;a",
gk:function(a){return this.a.length},
m:function(a,b){return C.b.bp(this.a,b)},
$aseQ:function(){return[P.C]},
$asq:function(){return[P.C]},
$ash:function(){return[P.C]},
$asd:function(){return[P.C]}},
dI:{"^":"h;"},
c3:{"^":"dI;$ti",
gO:function(a){return new H.cH(this,this.gk(this),0,[H.ae(this,"c3",0)])},
bE:function(a,b){return this.cQ(0,H.k(b,{func:1,ret:P.L,args:[H.ae(this,"c3",0)]}))}},
cH:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.bP(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.aD(z))
w=this.c
if(typeof x!=="number")return H.r(x)
if(w>=x){this.d=null
return!1}this.d=y.B(z,w);++this.c
return!0}},
hD:{"^":"h;a,b,$ti",
gO:function(a){return new H.hE(J.aN(this.a),this.b,this.$ti)},
gk:function(a){return J.aO(this.a)},
B:function(a,b){return this.b.$1(J.cr(this.a,b))},
$ash:function(a,b){return[b]}},
hE:{"^":"cC;0a,b,c,$ti",
w:function(){var z=this.b
if(z.w()){this.a=this.c.$1(z.gI(z))
return!0}this.a=null
return!1},
gI:function(a){return this.a},
$ascC:function(a,b){return[b]}},
hF:{"^":"c3;a,b,$ti",
gk:function(a){return J.aO(this.a)},
B:function(a,b){return this.b.$1(J.cr(this.a,b))},
$asc3:function(a,b){return[b]},
$ash:function(a,b){return[b]}},
d_:{"^":"h;a,b,$ti",
gO:function(a){return new H.jg(J.aN(this.a),this.b,this.$ti)}},
jg:{"^":"cC;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gI(z)))return!0
return!1},
gI:function(a){var z=this.a
return z.gI(z)}},
bY:{"^":"a;$ti"},
eQ:{"^":"a;$ti"},
j_:{"^":"c2+eQ;"}}],["","",,H,{"^":"",
l3:function(a){return init.types[H.Y(a)]},
ld:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.E(a).$isB},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a_(a)
if(typeof z!=="string")throw H.c(H.aH(a))
return z},
bk:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aT:function(a){var z,y,x,w,v,u,t,s,r
z=J.E(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.E(a).$iscd){v=C.t(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.al(w,0)===36)w=C.b.aZ(w,1)
r=H.dd(H.bQ(H.aJ(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ec:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
i4:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.c(H.aH(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aP(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.c(H.aH(w))}return H.ec(z)},
ed:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.c(H.aH(x))
if(x<0)throw H.c(H.aH(x))
if(x>65535)return H.i4(a)}return H.ec(a)},
cM:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aP(z,10))>>>0,56320|z&1023)}throw H.c(P.a8(a,0,1114111,null,null))},
a5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i3:function(a){return a.b?H.a5(a).getUTCFullYear()+0:H.a5(a).getFullYear()+0},
i1:function(a){return a.b?H.a5(a).getUTCMonth()+1:H.a5(a).getMonth()+1},
hY:function(a){return a.b?H.a5(a).getUTCDate()+0:H.a5(a).getDate()+0},
hZ:function(a){return a.b?H.a5(a).getUTCHours()+0:H.a5(a).getHours()+0},
i0:function(a){return a.b?H.a5(a).getUTCMinutes()+0:H.a5(a).getMinutes()+0},
i2:function(a){return a.b?H.a5(a).getUTCSeconds()+0:H.a5(a).getSeconds()+0},
i_:function(a){return a.b?H.a5(a).getUTCMilliseconds()+0:H.a5(a).getMilliseconds()+0},
r:function(a){throw H.c(H.aH(a))},
i:function(a,b){if(a==null)J.aO(a)
throw H.c(H.aI(a,b))},
aI:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,"index",null)
z=H.Y(J.aO(a))
if(!(b<0)){if(typeof z!=="number")return H.r(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.c8(b,"index",null)},
l_:function(a,b,c){if(a>c)return new P.c7(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c7(a,c,!0,b,"end","Invalid value")
return new P.al(!0,b,"end",null)},
aH:function(a){return new P.al(!0,a,null,null)},
kV:function(a){if(typeof a!=="number")throw H.c(H.aH(a))
return a},
c:function(a){var z
if(a==null)a=new P.e8()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fz})
z.name=""}else z.toString=H.fz
return z},
fz:function(){return J.a_(this.dartException)},
V:function(a){throw H.c(a)},
x:function(a){throw H.c(P.aD(a))},
a9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lr(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aP(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cF(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e7(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eB()
u=$.$get$eC()
t=$.$get$eD()
s=$.$get$eE()
r=$.$get$eI()
q=$.$get$eJ()
p=$.$get$eG()
$.$get$eF()
o=$.$get$eL()
n=$.$get$eK()
m=v.Z(y)
if(m!=null)return z.$1(H.cF(H.D(y),m))
else{m=u.Z(y)
if(m!=null){m.method="call"
return z.$1(H.cF(H.D(y),m))}else{m=t.Z(y)
if(m==null){m=s.Z(y)
if(m==null){m=r.Z(y)
if(m==null){m=q.Z(y)
if(m==null){m=p.Z(y)
if(m==null){m=s.Z(y)
if(m==null){m=o.Z(y)
if(m==null){m=n.Z(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e7(H.D(y),m))}}return z.$1(new H.iZ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.el()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.al(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.el()
return a},
b4:function(a){var z
if(a==null)return new H.f8(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f8(a)},
l1:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.N(0,a[y],a[x])}return b},
lc:function(a,b,c,d,e,f){H.j(a,"$isbG")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.S("Unsupported number of arguments for wrapped closure"))},
b1:function(a,b){var z
H.Y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lc)
a.$identity=z
return z},
fT:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.E(d).$isd){z.$reflectionInfo=d
x=H.i8(z).r}else x=d
w=e?Object.create(new H.iv().constructor.prototype):Object.create(new H.ct(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.am
if(typeof u!=="number")return u.C()
$.am=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dw(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.l3,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dp:H.cu
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dw(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fQ:function(a,b,c,d){var z=H.cu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dw:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fS(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fQ(y,!w,z,b)
if(y===0){w=$.am
if(typeof w!=="number")return w.C()
$.am=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b7
if(v==null){v=H.bU("self")
$.b7=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.am
if(typeof w!=="number")return w.C()
$.am=w+1
t+=w
w="return function("+t+"){return this."
v=$.b7
if(v==null){v=H.bU("self")
$.b7=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
fR:function(a,b,c,d){var z,y
z=H.cu
y=H.dp
switch(b?-1:a){case 0:throw H.c(H.ii("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fS:function(a,b){var z,y,x,w,v,u,t,s
z=$.b7
if(z==null){z=H.bU("self")
$.b7=z}y=$.dn
if(y==null){y=H.bU("receiver")
$.dn=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fR(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.am
if(typeof y!=="number")return y.C()
$.am=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.am
if(typeof y!=="number")return y.C()
$.am=y+1
return new Function(z+y+"}")()},
d8:function(a,b,c,d,e,f,g){var z,y
z=J.bf(H.bQ(b))
H.Y(c)
y=!!J.E(d).$isd?J.bf(d):d
return H.fT(a,z,c,y,!!e,f,g)},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aq(a,"String"))},
lj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aq(a,"num"))},
d6:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aq(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aq(a,"int"))},
fw:function(a,b){throw H.c(H.aq(a,H.D(b).substring(3)))},
ll:function(a,b){var z=J.bP(b)
throw H.c(H.fP(a,z.aA(b,3,z.gk(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.E(a)[b])return a
H.fw(a,b)},
Z:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.E(a)[b]
else z=!0
if(z)return a
H.ll(a,b)},
bQ:function(a){if(a==null)return a
if(!!J.E(a).$isd)return a
throw H.c(H.aq(a,"List"))},
le:function(a,b){if(a==null)return a
if(!!J.E(a).$isd)return a
if(J.E(a)[b])return a
H.fw(a,b)},
fp:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Y(z)]
else return a.$S()}return},
bO:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fp(J.E(a))
if(z==null)return!1
y=H.fs(z,null,b,null)
return y},
k:function(a,b){var z,y
if(a==null)return a
if($.d3)return a
$.d3=!0
try{if(H.bO(a,b))return a
z=H.bR(b)
y=H.aq(a,z)
throw H.c(y)}finally{$.d3=!1}},
da:function(a,b){if(a!=null&&!H.d7(a,b))H.V(H.aq(a,H.bR(b)))
return a},
fk:function(a){var z
if(a instanceof H.n){z=H.fp(J.E(a))
if(z!=null)return H.bR(z)
return"Closure"}return H.aT(a)},
lq:function(a){throw H.c(new P.fY(H.D(a)))},
fq:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aJ:function(a){if(a==null)return
return a.$ti},
mN:function(a,b,c){return H.b5(a["$as"+H.f(c)],H.aJ(b))},
bC:function(a,b,c,d){var z
H.D(c)
H.Y(d)
z=H.b5(a["$as"+H.f(c)],H.aJ(b))
return z==null?null:z[d]},
ae:function(a,b,c){var z
H.D(b)
H.Y(c)
z=H.b5(a["$as"+H.f(b)],H.aJ(a))
return z==null?null:z[c]},
w:function(a,b){var z
H.Y(b)
z=H.aJ(a)
return z==null?null:z[b]},
bR:function(a){var z=H.aL(a,null)
return z},
aL:function(a,b){var z,y
H.z(b,"$isd",[P.e],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dd(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.f(b[y])}if('func' in a)return H.kL(a,b)
if('futureOr' in a)return"FutureOr<"+H.aL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.z(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.b.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aL(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aL(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aL(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l0(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.D(z[l])
n=n+m+H.aL(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dd:function(a,b,c){var z,y,x,w,v,u
H.z(c,"$isd",[P.e],"$asd")
if(a==null)return""
z=new P.c9("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aL(u,c)}v="<"+z.i(0)+">"
return v},
b5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bB:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aJ(a)
y=J.E(a)
if(y[b]==null)return!1
return H.fn(H.b5(y[d],z),null,c,null)},
z:function(a,b,c,d){var z,y
H.D(b)
H.bQ(c)
H.D(d)
if(a==null)return a
z=H.bB(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dd(c,0,null)
throw H.c(H.aq(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fn:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.af(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.af(a[y],b,c[y],d))return!1
return!0},
mL:function(a,b,c){return a.apply(b,H.b5(J.E(b)["$as"+H.f(c)],H.aJ(b)))},
ft:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.ft(z)}return!1},
d7:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.ft(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d7(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bO(a,b)}y=J.E(a).constructor
x=H.aJ(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.af(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.d7(a,b))throw H.c(H.aq(a,H.bR(b)))
return a},
af:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.af(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.fs(a,b,c,d)
if('func' in a)return c.builtin$cls==="bG"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.af("type" in a?a.type:null,b,x,d)
else if(H.af(a,b,x,d))return!0
else{if(!('$is'+"bd" in y.prototype))return!1
w=y.prototype["$as"+"bd"]
v=H.b5(w,z?a.slice(1):null)
return H.af(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bR(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fn(H.b5(r,z),b,u,d)},
fs:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.af(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.af(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.af(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.af(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.li(m,b,l,d)},
li:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.af(c[w],d,a[w],b))return!1}return!0},
mM:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
lf:function(a){var z,y,x,w,v,u
z=H.D($.fr.$1(a))
y=$.cl[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.co[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.D($.fm.$2(a,z))
if(z!=null){y=$.cl[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.co[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cp(x)
$.cl[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.co[z]=x
return x}if(v==="-"){u=H.cp(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fv(a,x)
if(v==="*")throw H.c(P.eP(z))
if(init.leafTags[z]===true){u=H.cp(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fv(a,x)},
fv:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.de(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cp:function(a){return J.de(a,!1,null,!!a.$isB)},
lh:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cp(z)
else return J.de(z,c,null,null)},
la:function(){if(!0===$.dc)return
$.dc=!0
H.lb()},
lb:function(){var z,y,x,w,v,u,t,s
$.cl=Object.create(null)
$.co=Object.create(null)
H.l6()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fx.$1(v)
if(u!=null){t=H.lh(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
l6:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.b0(C.G,H.b0(C.L,H.b0(C.r,H.b0(C.r,H.b0(C.K,H.b0(C.H,H.b0(C.I(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fr=new H.l7(v)
$.fm=new H.l8(u)
$.fx=new H.l9(t)},
b0:function(a,b){return a(b)||b},
fy:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dh:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i7:{"^":"a;a,b,c,d,e,f,r,0x",p:{
i8:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bf(z)
y=z[0]
x=z[1]
return new H.i7(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iL:{"^":"a;a,b,c,d,e,f",
Z:function(a){var z,y,x
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
ap:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cb:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eH:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hT:{"^":"W;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
e7:function(a,b){return new H.hT(a,b==null?null:b.method)}}},
hu:{"^":"W;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
p:{
cF:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hu(a,y,z?null:b.receiver)}}},
iZ:{"^":"W;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lr:{"^":"n:16;a",
$1:function(a){if(!!J.E(a).$isW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f8:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isak:1},
n:{"^":"a;",
i:function(a){return"Closure '"+H.aT(this).trim()+"'"},
gcE:function(){return this},
$isbG:1,
gcE:function(){return this}},
er:{"^":"n;"},
iv:{"^":"er;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
ct:{"^":"er;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ct))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gR:function(a){var z,y
z=this.c
if(z==null)y=H.bk(this.a)
else y=typeof z!=="object"?J.aM(z):H.bk(z)
return(y^H.bk(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.aT(z)+"'")},
p:{
cu:function(a){return a.a},
dp:function(a){return a.c},
bU:function(a){var z,y,x,w,v
z=new H.ct("self","target","receiver","name")
y=J.bf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iM:{"^":"W;a",
i:function(a){return this.a},
p:{
aq:function(a,b){return new H.iM("TypeError: "+H.f(P.bX(a))+": type '"+H.fk(a)+"' is not a subtype of type '"+b+"'")}}},
fO:{"^":"W;a",
i:function(a){return this.a},
p:{
fP:function(a,b){return new H.fO("CastError: "+H.f(P.bX(a))+": type '"+H.fk(a)+"' is not a subtype of type '"+b+"'")}}},
ih:{"^":"W;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
p:{
ii:function(a){return new H.ih(a)}}},
aS:{"^":"e0;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gV:function(a){return new H.dX(this,[H.w(this,0)])},
cg:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bW(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bW(y,b)}else return this.ew(b)},
ew:function(a){var z=this.d
if(z==null)return!1
return this.bu(this.b7(z,J.aM(a)&0x3ffffff),a)>=0},
m:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aN(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aN(w,b)
x=y==null?null:y.b
return x}else return this.ex(b)},
ex:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.b7(z,J.aM(a)&0x3ffffff)
x=this.bu(y,a)
if(x<0)return
return y[x].b},
N:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.w(this,0))
H.A(c,H.w(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bd()
this.b=z}this.bP(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bd()
this.c=y}this.bP(y,b,c)}else{x=this.d
if(x==null){x=this.bd()
this.d=x}w=J.aM(b)&0x3ffffff
v=this.b7(x,w)
if(v==null)this.bh(x,w,[this.be(b,c)])
else{u=this.bu(v,b)
if(u>=0)v[u].b=c
else v.push(this.be(b,c))}}},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.aD(this))
z=z.c}},
bP:function(a,b,c){var z
H.A(b,H.w(this,0))
H.A(c,H.w(this,1))
z=this.aN(a,b)
if(z==null)this.bh(a,b,this.be(b,c))
else z.b=c},
dr:function(){this.r=this.r+1&67108863},
be:function(a,b){var z,y
z=new H.hw(H.A(a,H.w(this,0)),H.A(b,H.w(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dr()
return z},
bu:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
i:function(a){return P.e1(this)},
aN:function(a,b){return a[b]},
b7:function(a,b){return a[b]},
bh:function(a,b,c){a[b]=c},
dk:function(a,b){delete a[b]},
bW:function(a,b){return this.aN(a,b)!=null},
bd:function(){var z=Object.create(null)
this.bh(z,"<non-identifier-key>",z)
this.dk(z,"<non-identifier-key>")
return z},
$isdW:1},
hw:{"^":"a;a,b,0c,0d"},
dX:{"^":"dI;a,$ti",
gk:function(a){return this.a.a},
gO:function(a){var z,y
z=this.a
y=new H.hx(z,z.r,this.$ti)
y.c=z.e
return y}},
hx:{"^":"a;a,b,0c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aD(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
l7:{"^":"n:16;a",
$1:function(a){return this.a(a)}},
l8:{"^":"n:33;a",
$2:function(a,b){return this.a(a,b)}},
l9:{"^":"n:40;a",
$1:function(a){return this.a(H.D(a))}},
hs:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise9:1,
p:{
ht:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(new P.hg("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
l0:function(a){return J.dR(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
ci:function(a){return a},
aG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aI(b,a))},
kK:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.c(H.l_(a,b,c))
return b},
hL:{"^":"l;",$ismt:1,"%":"DataView;ArrayBufferView;cK|f2|f3|hK|f4|f5|aF"},
cK:{"^":"hL;",
gk:function(a){return a.length},
$isB:1,
$asB:I.d9},
hK:{"^":"f3;",
m:function(a,b){H.aG(b,a,a.length)
return a[b]},
$asbY:function(){return[P.v]},
$asq:function(){return[P.v]},
$ish:1,
$ash:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aF:{"^":"f5;",
$asbY:function(){return[P.C]},
$asq:function(){return[P.C]},
$ish:1,
$ash:function(){return[P.C]},
$isd:1,
$asd:function(){return[P.C]}},
m_:{"^":"aF;",
m:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m0:{"^":"aF;",
m:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int32Array"},
m1:{"^":"aF;",
m:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m2:{"^":"aF;",
m:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m3:{"^":"aF;",
m:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m4:{"^":"aF;",
gk:function(a){return a.length},
m:function(a,b){H.aG(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hM:{"^":"aF;",
gk:function(a){return a.length},
m:function(a,b){H.aG(b,a,a.length)
return a[b]},
aY:function(a,b,c){return new Uint8Array(a.subarray(b,H.kK(b,c,a.length)))},
"%":";Uint8Array"},
f2:{"^":"cK+q;"},
f3:{"^":"f2+bY;"},
f4:{"^":"cK+q;"},
f5:{"^":"f4+bY;"}}],["","",,P,{"^":"",
ji:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kS()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b1(new P.jk(z),1)).observe(y,{childList:true})
return new P.jj(z,y,x)}else if(self.setImmediate!=null)return P.kT()
return P.kU()},
my:[function(a){self.scheduleImmediate(H.b1(new P.jl(H.k(a,{func:1,ret:-1})),0))},"$1","kS",4,0,11],
mz:[function(a){self.setImmediate(H.b1(new P.jm(H.k(a,{func:1,ret:-1})),0))},"$1","kT",4,0,11],
mA:[function(a){P.cU(C.l,H.k(a,{func:1,ret:-1}))},"$1","kU",4,0,11],
cU:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.e.ar(a.a,1000)
return P.ko(z<0?0:z,b)},
ew:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.aU]})
z=C.e.ar(a.a,1000)
return P.kp(z<0?0:z,b)},
kO:function(a,b){if(H.bO(a,{func:1,args:[P.a,P.ak]}))return b.eT(a,null,P.a,P.ak)
if(H.bO(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.c(P.bS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kN:function(){var z,y
for(;z=$.b_,z!=null;){$.bz=null
y=z.b
$.b_=y
if(y==null)$.by=null
z.a.$0()}},
mK:[function(){$.d4=!0
try{P.kN()}finally{$.bz=null
$.d4=!1
if($.b_!=null)$.$get$d0().$1(P.fo())}},"$0","fo",0,0,3],
fj:function(a){var z=new P.eV(H.k(a,{func:1,ret:-1}))
if($.b_==null){$.by=z
$.b_=z
if(!$.d4)$.$get$d0().$1(P.fo())}else{$.by.b=z
$.by=z}},
kR:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.b_
if(z==null){P.fj(a)
$.bz=$.by
return}y=new P.eV(a)
x=$.bz
if(x==null){y.b=z
$.bz=y
$.b_=y}else{y.b=x.b
x.b=y
$.bz=y
if(y.b==null)$.by=y}},
lm:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.J
if(C.d===y){P.ck(null,null,C.d,a)
return}y.toString
P.ck(null,null,y,H.k(y.bk(a),z))},
ev:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.J
if(y===C.d){y.toString
return P.cU(a,b)}return P.cU(a,H.k(y.bk(b),z))},
iI:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aU]}
H.k(b,z)
y=$.J
if(y===C.d){y.toString
return P.ew(a,b)}x=y.cd(b,P.aU)
$.J.toString
return P.ew(a,H.k(x,z))},
cj:function(a,b,c,d,e){var z={}
z.a=d
P.kR(new P.kP(z,e))},
fh:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
fi:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kQ:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
ck:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bk(d):c.eb(d,-1)
P.fj(d)},
jk:{"^":"n:24;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jj:{"^":"n:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jl:{"^":"n:2;a",
$0:function(){this.a.$0()}},
jm:{"^":"n:2;a",
$0:function(){this.a.$0()}},
fc:{"^":"a;a,0b,c",
d5:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b1(new P.kr(this,b),0),a)
else throw H.c(P.ab("`setTimeout()` not found."))},
d6:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b1(new P.kq(this,a,Date.now(),b),0),a)
else throw H.c(P.ab("Periodic timer."))},
$isaU:1,
p:{
ko:function(a,b){var z=new P.fc(!0,0)
z.d5(a,b)
return z},
kp:function(a,b){var z=new P.fc(!1,0)
z.d6(a,b)
return z}}},
kr:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kq:{"^":"n:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.cU(w,x)}z.c=y
this.d.$1(z)}},
aZ:{"^":"a;0a,b,c,d,e,$ti",
eC:function(a){if(this.c!==6)return!0
return this.b.b.bD(H.k(this.d,{func:1,ret:P.L,args:[P.a]}),a.a,P.L,P.a)},
ev:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.w(this,1)}
w=this.b.b
if(H.bO(z,{func:1,args:[P.a,P.ak]}))return H.da(w.f_(z,a.a,a.b,null,y,P.ak),x)
else return H.da(w.bD(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aA:{"^":"a;c5:a<,b,0dW:c<,$ti",
cz:function(a,b,c){var z,y,x,w
z=H.w(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.d){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kO(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aA(0,$.J,[c])
w=b==null?1:3
this.bQ(new P.aZ(x,w,a,b,[z,c]))
return x},
f6:function(a,b){return this.cz(a,null,b)},
bQ:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isaZ")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaA")
z=y.a
if(z<4){y.bQ(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ck(null,null,z,H.k(new P.jB(this,a),{func:1,ret:-1}))}},
c0:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isaZ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaA")
y=u.a
if(y<4){u.c0(a)
return}this.a=y
this.c=u.c}z.a=this.aO(a)
y=this.b
y.toString
P.ck(null,null,y,H.k(new P.jG(z,this),{func:1,ret:-1}))}},
bg:function(){var z=H.j(this.c,"$isaZ")
this.c=null
return this.aO(z)},
aO:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bU:function(a){var z,y,x,w
z=H.w(this,0)
H.da(a,{futureOr:1,type:z})
y=this.$ti
x=H.bB(a,"$isbd",y,"$asbd")
if(x){z=H.bB(a,"$isaA",y,null)
if(z)P.eY(a,this)
else P.jC(a,this)}else{w=this.bg()
H.A(a,z)
this.a=4
this.c=a
P.bw(this,w)}},
b2:[function(a,b){var z
H.j(b,"$isak")
z=this.bg()
this.a=8
this.c=new P.aa(a,b)
P.bw(this,z)},function(a){return this.b2(a,null)},"fe","$2","$1","gdf",4,2,31],
$isbd:1,
p:{
jC:function(a,b){var z,y,x
b.a=1
try{a.cz(new P.jD(b),new P.jE(b),null)}catch(x){z=H.a9(x)
y=H.b4(x)
P.lm(new P.jF(b,z,y))}},
eY:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaA")
if(z>=4){y=b.bg()
b.a=a.a
b.c=a.c
P.bw(b,y)}else{y=H.j(b.c,"$isaZ")
b.a=2
b.c=a
a.c0(y)}},
bw:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isaa")
y=y.b
u=v.a
t=v.b
y.toString
P.cj(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bw(z.a,b)}y=z.a
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
if(p){H.j(r,"$isaa")
y=y.b
u=r.a
t=r.b
y.toString
P.cj(null,null,y,u,t)
return}o=$.J
if(o==null?q!=null:o!==q)$.J=q
else o=null
y=b.c
if(y===8)new P.jJ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jI(x,b,r).$0()}else if((y&2)!==0)new P.jH(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.E(y).$isbd){if(y.a>=4){n=H.j(t.c,"$isaZ")
t.c=null
b=t.aO(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eY(y,t)
return}}m=b.b
n=H.j(m.c,"$isaZ")
m.c=null
b=m.aO(n)
y=x.a
u=x.b
if(!y){H.A(u,H.w(m,0))
m.a=4
m.c=u}else{H.j(u,"$isaa")
m.a=8
m.c=u}z.a=m
y=m}}}},
jB:{"^":"n:2;a,b",
$0:function(){P.bw(this.a,this.b)}},
jG:{"^":"n:2;a,b",
$0:function(){P.bw(this.b,this.a.a)}},
jD:{"^":"n:24;a",
$1:function(a){var z=this.a
z.a=0
z.bU(a)}},
jE:{"^":"n:39;a",
$2:function(a,b){this.a.b2(a,H.j(b,"$isak"))},
$1:function(a){return this.$2(a,null)}},
jF:{"^":"n:2;a,b,c",
$0:function(){this.a.b2(this.b,this.c)}},
jJ:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cu(H.k(w.d,{func:1}),null)}catch(v){y=H.a9(v)
x=H.b4(v)
if(this.d){w=H.j(this.a.a.c,"$isaa").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isaa")
else u.b=new P.aa(y,x)
u.a=!0
return}if(!!J.E(z).$isbd){if(z instanceof P.aA&&z.gc5()>=4){if(z.gc5()===8){w=this.b
w.b=H.j(z.gdW(),"$isaa")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.f6(new P.jK(t),null)
w.a=!1}}},
jK:{"^":"n:36;a",
$1:function(a){return this.a}},
jI:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.w(x,0)
v=H.A(this.c,w)
u=H.w(x,1)
this.a.b=x.b.b.bD(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a9(t)
y=H.b4(t)
x=this.a
x.b=new P.aa(z,y)
x.a=!0}}},
jH:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isaa")
w=this.c
if(w.eC(z)&&w.e!=null){v=this.b
v.b=w.ev(z)
v.a=!1}}catch(u){y=H.a9(u)
x=H.b4(u)
w=H.j(this.a.a.c,"$isaa")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aa(y,x)
s.a=!0}}},
eV:{"^":"a;a,0b"},
cP:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aA(0,$.J,[P.C])
z.a=0
this.eB(new P.iy(z,this),!0,new P.iz(z,y),y.gdf())
return y}},
iy:{"^":"n;a,b",
$1:function(a){H.A(a,H.ae(this.b,"cP",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.ae(this.b,"cP",0)]}}},
iz:{"^":"n:2;a,b",
$0:function(){this.b.bU(this.a.a)}},
eo:{"^":"a;$ti"},
ix:{"^":"a;"},
aU:{"^":"a;"},
aa:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isW:1},
ky:{"^":"a;",$ismx:1},
kP:{"^":"n:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e8()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.i(0)
throw x}},
k3:{"^":"ky;",
f0:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.d===$.J){a.$0()
return}P.fh(null,null,this,a,-1)}catch(x){z=H.a9(x)
y=H.b4(x)
P.cj(null,null,this,z,H.j(y,"$isak"))}},
f1:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.d===$.J){a.$1(b)
return}P.fi(null,null,this,a,b,-1,c)}catch(x){z=H.a9(x)
y=H.b4(x)
P.cj(null,null,this,z,H.j(y,"$isak"))}},
eb:function(a,b){return new P.k5(this,H.k(a,{func:1,ret:b}),b)},
bk:function(a){return new P.k4(this,H.k(a,{func:1,ret:-1}))},
cd:function(a,b){return new P.k6(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
cu:function(a,b){H.k(a,{func:1,ret:b})
if($.J===C.d)return a.$0()
return P.fh(null,null,this,a,b)},
bD:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.J===C.d)return a.$1(b)
return P.fi(null,null,this,a,b,c,d)},
f_:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.J===C.d)return a.$2(b,c)
return P.kQ(null,null,this,a,b,c,d,e,f)},
eT:function(a,b,c,d){return H.k(a,{func:1,ret:b,args:[c,d]})}},
k5:{"^":"n;a,b,c",
$0:function(){return this.a.cu(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k4:{"^":"n:3;a,b",
$0:function(){return this.a.f0(this.b)}},
k6:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.f1(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hy:function(a,b,c){H.bQ(a)
return H.z(H.l1(a,new H.aS(0,0,[b,c])),"$isdW",[b,c],"$asdW")},
dY:function(a,b){return new H.aS(0,0,[a,b])},
bJ:function(a,b,c,d){return new P.jR(0,0,[d])},
hn:function(a,b,c){var z,y
if(P.d5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bA()
C.a.h(y,a)
try{P.kM(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.ep(b,H.le(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.d5(a))return b+"..."+c
z=new P.c9(b)
y=$.$get$bA()
C.a.h(y,a)
try{x=z
x.a=P.ep(x.gam(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gam()+c
y=z.gam()
return y.charCodeAt(0)==0?y:y},
d5:function(a){var z,y
for(z=0;y=$.$get$bA(),z<y.length;++z)if(a===y[z])return!0
return!1},
kM:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gO(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.f(z.gI(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gI(z);++x
if(!z.w()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gI(z);++x
for(;z.w();t=s,s=r){r=z.gI(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dZ:function(a,b){var z,y
z=P.bJ(null,null,null,b)
for(y=J.aN(a);y.w();)z.h(0,H.A(y.gI(y),b))
return z},
e1:function(a){var z,y,x
z={}
if(P.d5(a))return"{...}"
y=new P.c9("")
try{C.a.h($.$get$bA(),a)
x=y
x.a=x.gam()+"{"
z.a=!0
J.fD(a,new P.hC(z,y))
z=y
z.a=z.gam()+"}"}finally{z=$.$get$bA()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gam()
return z.charCodeAt(0)==0?z:z},
jR:{"^":"jL;a,0b,0c,0d,0e,0f,r,$ti",
gO:function(a){var z=new P.f1(this,this.r,this.$ti)
z.c=this.e
return z},
gk:function(a){return this.a},
P:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.j(z[b],"$iscg")!=null}else{y=this.dg(b)
return y}},
dg:function(a){var z=this.d
if(z==null)return!1
return this.b5(this.c_(z,a),a)>=0},
h:function(a,b){var z,y
H.A(b,H.w(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d2()
this.b=z}return this.bS(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d2()
this.c=y}return this.bS(y,b)}else return this.d7(0,b)},
d7:function(a,b){var z,y,x
H.A(b,H.w(this,0))
z=this.d
if(z==null){z=P.d2()
this.d=z}y=this.bV(b)
x=z[y]
if(x==null)z[y]=[this.b1(b)]
else{if(this.b5(x,b)>=0)return!1
x.push(this.b1(b))}return!0},
S:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.c1(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c1(this.c,b)
else return this.dT(0,b)},
dT:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.c_(z,b)
x=this.b5(y,b)
if(x<0)return!1
this.c7(y.splice(x,1)[0])
return!0},
bS:function(a,b){H.A(b,H.w(this,0))
if(H.j(a[b],"$iscg")!=null)return!1
a[b]=this.b1(b)
return!0},
c1:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$iscg")
if(z==null)return!1
this.c7(z)
delete a[b]
return!0},
bT:function(){this.r=this.r+1&67108863},
b1:function(a){var z,y
z=new P.cg(H.A(a,H.w(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bT()
return z},
c7:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bT()},
bV:function(a){return J.aM(a)&0x3ffffff},
c_:function(a,b){return a[this.bV(b)]},
b5:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
p:{
d2:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cg:{"^":"a;a,0b,0c"},
f1:{"^":"a;a,b,0c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.aD(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.w(this,0))
this.c=z.b
return!0}}}},
jL:{"^":"ij;"},
c2:{"^":"jS;",$ish:1,$isd:1},
q:{"^":"a;$ti",
gO:function(a){return new H.cH(a,this.gk(a),0,[H.bC(this,a,"q",0)])},
B:function(a,b){return this.m(a,b)},
f9:function(a,b){var z,y,x
z=H.b([],[H.bC(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.r(x)
if(!(y<x))break
C.a.N(z,y,this.m(a,y));++y}return z},
f8:function(a){return this.f9(a,!0)},
i:function(a){return P.cA(a,"[","]")}},
e0:{"^":"a3;"},
hC:{"^":"n:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
a3:{"^":"a;$ti",
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bC(this,a,"a3",0),H.bC(this,a,"a3",1)]})
for(z=J.aN(this.gV(a));z.w();){y=z.gI(z)
b.$2(y,this.m(a,y))}},
gk:function(a){return J.aO(this.gV(a))},
i:function(a){return P.e1(a)},
$isX:1},
il:{"^":"a;$ti",
a7:function(a,b){var z
for(z=J.aN(H.z(b,"$ish",this.$ti,"$ash"));z.w();)this.h(0,z.gI(z))},
i:function(a){return P.cA(this,"{","}")},
B:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.dk("index"))
if(b<0)H.V(P.a8(b,0,null,"index",null))
for(z=new P.f1(this,this.r,this.$ti),z.c=this.e,y=0;z.w();){x=z.d
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
$ish:1},
ij:{"^":"il;"},
jS:{"^":"a+q;"}}],["","",,P,{"^":"",cx:{"^":"a;$ti"},bW:{"^":"ix;$ti"},h8:{"^":"cx;",
$ascx:function(){return[P.e,[P.d,P.C]]}},hl:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hk:{"^":"bW;a",
dh:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.i(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.c9("")
if(w>b)v.a+=C.b.aA(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fH(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbW:function(){return[P.e,P.e]}},j5:{"^":"h8;a"},j6:{"^":"bW;",
eg:function(a,b,c){var z,y,x,w
z=a.length
P.ee(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kw(0,0,x)
if(w.dm(a,b,z)!==z)w.c8(C.b.bp(a,z-1),0)
return C.Q.aY(x,0,w.b)},
ef:function(a){return this.eg(a,0,null)},
$asbW:function(){return[P.e,[P.d,P.C]]}},kw:{"^":"a;a,b,c",
c8:function(a,b){var z,y,x,w,v
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
dm:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.bp(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.al(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.c8(w,C.b.al(a,u)))x=u}else if(w<=2047){v=this.b
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
ha:function(a){var z=J.E(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.aT(a)+"'"},
hz:function(a,b,c,d){var z,y
H.A(b,d)
z=J.hp(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.N(z,y,b)
return H.z(z,"$isd",[d],"$asd")},
hA:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gO(a);x.w();)C.a.h(y,H.A(x.gI(x),c))
if(b)return y
return H.z(J.bf(y),"$isd",z,"$asd")},
cQ:function(a,b,c){var z,y
z=P.C
H.z(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.z(a,"$isaR",[z],"$asaR")
y=a.length
c=P.ee(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a0()
z=c<y}else z=!0
return H.ed(z?C.a.aY(a,b,c):a)}return P.iA(a,b,c)},
iA:function(a,b,c){var z,y,x
H.z(a,"$ish",[P.C],"$ash")
z=J.aN(a)
for(y=0;y<b;++y)if(!z.w())throw H.c(P.a8(b,0,y,null,null))
x=[]
for(;z.w();)x.push(z.gI(z))
return H.ed(x)},
i9:function(a,b,c){return new H.hs(a,H.ht(a,!1,!0,!1))},
ff:function(a,b,c,d){var z,y,x,w,v,u
H.z(a,"$isd",[P.C],"$asd")
if(c===C.p){z=$.$get$fe().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.ef(H.A(b,H.ae(c,"cx",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cM(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ha(a)},
S:function(a){return new P.eX(a)},
dg:function(a){H.lk(a)},
L:{"^":"a;"},
"+bool":0,
ag:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ag))return!1
return this.a===b.a&&this.b===b.b},
gR:function(a){var z=this.a
return(z^C.e.aP(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.h_(H.i3(this))
y=P.bD(H.i1(this))
x=P.bD(H.hY(this))
w=P.bD(H.hZ(this))
v=P.bD(H.i0(this))
u=P.bD(H.i2(this))
t=P.h0(H.i_(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
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
bD:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"U;"},
"+double":0,
ba:{"^":"a;a",
a0:function(a,b){return C.e.a0(this.a,H.j(b,"$isba").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ba))return!1
return this.a===b.a},
gR:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.h4()
y=this.a
if(y<0)return"-"+new P.ba(0-y).i(0)
x=z.$1(C.e.ar(y,6e7)%60)
w=z.$1(C.e.ar(y,1e6)%60)
v=new P.h3().$1(y%1e6)
return""+C.e.ar(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
p:{
dH:function(a,b,c,d,e,f){return new P.ba(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h3:{"^":"n:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h4:{"^":"n:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
W:{"^":"a;"},
e8:{"^":"W;",
i:function(a){return"Throw of null."}},
al:{"^":"W;a,b,c,d",
gb4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb3:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gb4()+y+x
if(!this.a)return w
v=this.gb3()
u=P.bX(this.b)
return w+v+": "+H.f(u)},
p:{
fJ:function(a){return new P.al(!1,null,null,a)},
bS:function(a,b,c){return new P.al(!0,a,b,c)},
dk:function(a){return new P.al(!1,null,a,"Must not be null")}}},
c7:{"^":"al;e,f,a,b,c,d",
gb4:function(){return"RangeError"},
gb3:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
p:{
c8:function(a,b,c){return new P.c7(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.c7(b,c,!0,a,d,"Invalid value")},
ee:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
z=a>c}else z=!0
if(z)throw H.c(P.a8(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
z=b>c}else z=!0
if(z)throw H.c(P.a8(b,a,c,"end",f))
return b}return c}}},
hm:{"^":"al;e,k:f>,a,b,c,d",
gb4:function(){return"RangeError"},
gb3:function(){if(J.fA(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
p:{
H:function(a,b,c,d,e){var z=H.Y(e!=null?e:J.aO(b))
return new P.hm(b,z,!0,a,c,"Index out of range")}}},
j0:{"^":"W;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
ab:function(a){return new P.j0(a)}}},
iY:{"^":"W;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
eP:function(a){return new P.iY(a)}}},
cO:{"^":"W;a",
i:function(a){return"Bad state: "+this.a},
p:{
en:function(a){return new P.cO(a)}}},
fV:{"^":"W;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bX(z))+"."},
p:{
aD:function(a){return new P.fV(a)}}},
hU:{"^":"a;",
i:function(a){return"Out of Memory"},
$isW:1},
el:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isW:1},
fY:{"^":"W;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eX:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hg:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.b.aA(x,0,75)+"..."
return y+"\n"+x}},
bG:{"^":"a;"},
C:{"^":"U;"},
"+int":0,
h:{"^":"a;$ti",
bE:["cQ",function(a,b){var z=H.ae(this,"h",0)
return new H.d_(this,H.k(b,{func:1,ret:P.L,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gO(this)
for(y=0;z.w();)++y
return y},
gai:function(a){var z,y
z=this.gO(this)
if(!z.w())throw H.c(H.cB())
y=z.gI(z)
if(z.w())throw H.c(H.ho())
return y},
B:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.dk("index"))
if(b<0)H.V(P.a8(b,0,null,"index",null))
for(z=this.gO(this),y=0;z.w();){x=z.gI(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
i:function(a){return P.hn(this,"(",")")}},
cC:{"^":"a;$ti"},
d:{"^":"a;$ti",$ish:1},
"+List":0,
X:{"^":"a;$ti"},
F:{"^":"a;",
gR:function(a){return P.a.prototype.gR.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
U:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gR:function(a){return H.bk(this)},
i:function(a){return"Instance of '"+H.aT(this)+"'"},
toString:function(){return this.i(this)}},
ak:{"^":"a;"},
e:{"^":"a;",$ise9:1},
"+String":0,
c9:{"^":"a;am:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
ep:function(a,b,c){var z=J.aN(b)
if(!z.w())return a
if(c.length===0){do a+=H.f(z.gI(z))
while(z.w())}else{a+=H.f(z.gI(z))
for(;z.w();)a=a+c+H.f(z.gI(z))}return a}}}}],["","",,W,{"^":"",
dj:function(a){var z=document.createElement("a")
return z},
cw:function(a,b){var z=document.createElement("canvas")
return z},
h5:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).a2(z,a,b,c)
y.toString
z=W.y
z=new H.d_(new W.ad(y),H.k(new W.h6(),{func:1,ret:P.L,args:[z]}),[z])
return H.j(z.gai(z),"$isN")},
h7:function(a){H.j(a,"$isa2")
return"wheel"},
bb:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fG(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a9(x)}return z},
ce:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f0:function(a,b,c,d){var z,y
z=W.ce(W.ce(W.ce(W.ce(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fl:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.d)return a
return z.cd(a,b)},
a7:{"^":"N;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lt:{"^":"l;0k:length=","%":"AccessibleNodeList"},
lu:{"^":"a7;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lv:{"^":"a7;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dm:{"^":"a7;",$isdm:1,"%":"HTMLBaseElement"},
fN:{"^":"l;","%":";Blob"},
bT:{"^":"a7;",$isbT:1,"%":"HTMLBodyElement"},
cv:{"^":"a7;",
aU:function(a,b,c){if(c!=null)return a.getContext(b,P.kW(c,null))
return a.getContext(b)},
cG:function(a,b){return this.aU(a,b,null)},
$iscv:1,
"%":"HTMLCanvasElement"},
du:{"^":"l;",$isdu:1,"%":"CanvasRenderingContext2D"},
lB:{"^":"y;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lD:{"^":"fX;0k:length=","%":"CSSPerspective"},
b9:{"^":"l;",$isb9:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lE:{"^":"jq;0k:length=",
cH:function(a,b){var z=a.getPropertyValue(this.dc(a,b))
return z==null?"":z},
dc:function(a,b){var z,y
z=$.$get$dz()
y=z[b]
if(typeof y==="string")return y
y=this.e2(a,b)
z[b]=y
return y},
e2:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h1()+b
if(z in a)return z
return b},
gbl:function(a){return a.bottom},
ga8:function(a){return a.height},
gav:function(a){return a.left},
gbC:function(a){return a.right},
gaL:function(a){return a.top},
gaa:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fW:{"^":"a;",
gav:function(a){return this.cH(a,"left")}},
dA:{"^":"l;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fX:{"^":"l;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lF:{"^":"dA;0k:length=","%":"CSSTransformValue"},
lG:{"^":"dA;0k:length=","%":"CSSUnparsedValue"},
lH:{"^":"l;0k:length=","%":"DataTransferItemList"},
aQ:{"^":"a7;",$isaQ:1,"%":"HTMLDivElement"},
lI:{"^":"l;",
i:function(a){return String(a)},
"%":"DOMException"},
lJ:{"^":"js;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a6,P.U]]},
$asq:function(){return[[P.a6,P.U]]},
$ish:1,
$ash:function(){return[[P.a6,P.U]]},
$isd:1,
$asd:function(){return[[P.a6,P.U]]},
$asu:function(){return[[P.a6,P.U]]},
"%":"ClientRectList|DOMRectList"},
h2:{"^":"l;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaa(a))+" x "+H.f(this.ga8(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bB(b,"$isa6",[P.U],"$asa6")
if(!z)return!1
z=J.b3(b)
return a.left===z.gav(b)&&a.top===z.gaL(b)&&this.gaa(a)===z.gaa(b)&&this.ga8(a)===z.ga8(b)},
gR:function(a){return W.f0(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaa(a)&0x1FFFFFFF,this.ga8(a)&0x1FFFFFFF)},
gbl:function(a){return a.bottom},
ga8:function(a){return a.height},
gav:function(a){return a.left},
gbC:function(a){return a.right},
gaL:function(a){return a.top},
gaa:function(a){return a.width},
$isa6:1,
$asa6:function(){return[P.U]},
"%":";DOMRectReadOnly"},
lK:{"^":"ju;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.e]},
$asq:function(){return[P.e]},
$ish:1,
$ash:function(){return[P.e]},
$isd:1,
$asd:function(){return[P.e]},
$asu:function(){return[P.e]},
"%":"DOMStringList"},
lL:{"^":"l;0k:length=","%":"DOMTokenList"},
jp:{"^":"c2;bZ:a<,b",
gk:function(a){return this.b.length},
m:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.j(z[b],"$isN")},
h:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var z=this.f8(this)
return new J.ar(z,z.length,0,[H.w(z,0)])},
$asq:function(){return[W.N]},
$ash:function(){return[W.N]},
$asd:function(){return[W.N]}},
N:{"^":"y;0f2:tagName=",
gea:function(a){return new W.jv(a)},
gce:function(a){return new W.jp(a,a.children)},
gcf:function(a){return P.i6(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.U)},
i:function(a){return a.localName},
a2:["b_",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dK
if(z==null){z=H.b([],[W.ao])
y=new W.e5(z)
C.a.h(z,W.eZ(null))
C.a.h(z,W.f9())
$.dK=y
d=y}else d=z
z=$.dJ
if(z==null){z=new W.fg(d)
$.dJ=z
c=z}else{z.a=d
c=z}}if($.as==null){z=document
y=z.implementation.createHTMLDocument("")
$.as=y
$.cz=y.createRange()
y=$.as
y.toString
y=y.createElement("base")
H.j(y,"$isdm")
y.href=z.baseURI
$.as.head.appendChild(y)}z=$.as
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.j(y,"$isbT")}z=$.as
if(!!this.$isbT)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.as.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.P(C.O,a.tagName)){$.cz.selectNodeContents(x)
w=$.cz.createContextualFragment(b)}else{x.innerHTML=b
w=$.as.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.as.body
if(x==null?z!=null:x!==z)J.di(x)
c.bG(w)
document.adoptNode(w)
return w},function(a,b,c){return this.a2(a,b,c,null)},"ei",null,null,"gfH",5,5,null],
cM:function(a,b,c,d){a.textContent=null
a.appendChild(this.a2(a,b,c,d))},
cL:function(a,b){return this.cM(a,b,null,null)},
$isN:1,
"%":";Element"},
h6:{"^":"n:15;",
$1:function(a){return!!J.E(H.j(a,"$isy")).$isN}},
a1:{"^":"l;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a2:{"^":"l;",
ca:["cO",function(a,b,c,d){H.k(c,{func:1,args:[W.a1]})
if(c!=null)this.d8(a,b,c,!1)}],
d8:function(a,b,c,d){return a.addEventListener(b,H.b1(H.k(c,{func:1,args:[W.a1]}),1),!1)},
$isa2:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;f6|f7|fa|fb"},
bc:{"^":"fN;",$isbc:1,"%":"File"},
lM:{"^":"jA;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bc]},
$asq:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asu:function(){return[W.bc]},
"%":"FileList"},
lN:{"^":"a2;0k:length=","%":"FileWriter"},
lO:{"^":"a7;0k:length=","%":"HTMLFormElement"},
be:{"^":"l;",$isbe:1,"%":"Gamepad"},
lP:{"^":"l;0k:length=","%":"History"},
lQ:{"^":"jN;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.y]},
$asq:function(){return[W.y]},
$ish:1,
$ash:function(){return[W.y]},
$isd:1,
$asd:function(){return[W.y]},
$asu:function(){return[W.y]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bZ:{"^":"l;0ci:data=",$isbZ:1,"%":"ImageData"},
dO:{"^":"a7;",$isdO:1,"%":"HTMLImageElement"},
bg:{"^":"cV;",$isbg:1,"%":"KeyboardEvent"},
lU:{"^":"l;",
i:function(a){return String(a)},
"%":"Location"},
lV:{"^":"l;0k:length=","%":"MediaList"},
lW:{"^":"a2;",
ca:function(a,b,c,d){H.k(c,{func:1,args:[W.a1]})
if(b==="message")a.start()
this.cO(a,b,c,!1)},
"%":"MessagePort"},
lX:{"^":"jT;",
m:function(a,b){return P.aB(a.get(H.D(b)))},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aB(y.value[1]))}},
gV:function(a){var z=H.b([],[P.e])
this.J(a,new W.hH(z))
return z},
gk:function(a){return a.size},
$asa3:function(){return[P.e,null]},
$isX:1,
$asX:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hH:{"^":"n:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lY:{"^":"jU;",
m:function(a,b){return P.aB(a.get(H.D(b)))},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aB(y.value[1]))}},
gV:function(a){var z=H.b([],[P.e])
this.J(a,new W.hI(z))
return z},
gk:function(a){return a.size},
$asa3:function(){return[P.e,null]},
$isX:1,
$asX:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hI:{"^":"n:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bh:{"^":"l;",$isbh:1,"%":"MimeType"},
lZ:{"^":"jW;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bh]},
$asq:function(){return[W.bh]},
$ish:1,
$ash:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asu:function(){return[W.bh]},
"%":"MimeTypeArray"},
ai:{"^":"cV;",$isai:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ad:{"^":"c2;a",
gai:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.en("No elements"))
if(y>1)throw H.c(P.en("More than one element"))
return z.firstChild},
a7:function(a,b){var z,y,x,w
H.z(b,"$ish",[W.y],"$ash")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gO:function(a){var z=this.a.childNodes
return new W.dL(z,z.length,-1,[H.bC(C.R,z,"u",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asq:function(){return[W.y]},
$ash:function(){return[W.y]},
$asd:function(){return[W.y]}},
y:{"^":"a2;0bB:previousSibling=",
eU:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.cP(a):z},
$isy:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
m5:{"^":"l;",
eS:[function(a){return a.previousNode()},"$0","gbB",1,0,17],
"%":"NodeIterator"},
hN:{"^":"jY;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.y]},
$asq:function(){return[W.y]},
$ish:1,
$ash:function(){return[W.y]},
$isd:1,
$asd:function(){return[W.y]},
$asu:function(){return[W.y]},
"%":"NodeList|RadioNodeList"},
bj:{"^":"l;0k:length=",$isbj:1,"%":"Plugin"},
m9:{"^":"k1;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bj]},
$asq:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asu:function(){return[W.bj]},
"%":"PluginArray"},
mb:{"^":"k7;",
m:function(a,b){return P.aB(a.get(H.D(b)))},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aB(y.value[1]))}},
gV:function(a){var z=H.b([],[P.e])
this.J(a,new W.ig(z))
return z},
gk:function(a){return a.size},
$asa3:function(){return[P.e,null]},
$isX:1,
$asX:function(){return[P.e,null]},
"%":"RTCStatsReport"},
ig:{"^":"n:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
md:{"^":"a7;0k:length=","%":"HTMLSelectElement"},
bl:{"^":"a2;",$isbl:1,"%":"SourceBuffer"},
me:{"^":"f7;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bl]},
$asq:function(){return[W.bl]},
$ish:1,
$ash:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$asu:function(){return[W.bl]},
"%":"SourceBufferList"},
bm:{"^":"l;",$isbm:1,"%":"SpeechGrammar"},
mf:{"^":"kd;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bm]},
$asq:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asu:function(){return[W.bm]},
"%":"SpeechGrammarList"},
bn:{"^":"l;0k:length=",$isbn:1,"%":"SpeechRecognitionResult"},
mh:{"^":"kg;",
m:function(a,b){return a.getItem(H.D(b))},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gV:function(a){var z=H.b([],[P.e])
this.J(a,new W.iw(z))
return z},
gk:function(a){return a.length},
$asa3:function(){return[P.e,P.e]},
$isX:1,
$asX:function(){return[P.e,P.e]},
"%":"Storage"},
iw:{"^":"n:35;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bo:{"^":"l;",$isbo:1,"%":"CSSStyleSheet|StyleSheet"},
iB:{"^":"a7;",
a2:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
z=W.h5("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ad(y).a7(0,new W.ad(z))
return y},
"%":"HTMLTableElement"},
mj:{"^":"a7;",
a2:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.a2(z.createElement("table"),b,c,d)
z.toString
z=new W.ad(z)
x=z.gai(z)
x.toString
z=new W.ad(x)
w=z.gai(z)
y.toString
w.toString
new W.ad(y).a7(0,new W.ad(w))
return y},
"%":"HTMLTableRowElement"},
mk:{"^":"a7;",
a2:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.a2(z.createElement("table"),b,c,d)
z.toString
z=new W.ad(z)
x=z.gai(z)
y.toString
x.toString
new W.ad(y).a7(0,new W.ad(x))
return y},
"%":"HTMLTableSectionElement"},
es:{"^":"a7;",$ises:1,"%":"HTMLTemplateElement"},
bp:{"^":"a2;",$isbp:1,"%":"TextTrack"},
bq:{"^":"a2;",$isbq:1,"%":"TextTrackCue|VTTCue"},
mm:{"^":"kn;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bq]},
$asq:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asu:function(){return[W.bq]},
"%":"TextTrackCueList"},
mn:{"^":"fb;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bp]},
$asq:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asu:function(){return[W.bp]},
"%":"TextTrackList"},
mo:{"^":"l;0k:length=","%":"TimeRanges"},
br:{"^":"l;",$isbr:1,"%":"Touch"},
aV:{"^":"cV;",$isaV:1,"%":"TouchEvent"},
mp:{"^":"kt;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$asq:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asu:function(){return[W.br]},
"%":"TouchList"},
mq:{"^":"l;0k:length=","%":"TrackDefaultList"},
ms:{"^":"l;",
eS:[function(a){return a.previousNode()},"$0","gbB",1,0,17],
"%":"TreeWalker"},
cV:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mv:{"^":"l;",
i:function(a){return String(a)},
"%":"URL"},
mw:{"^":"a2;0k:length=","%":"VideoTrackList"},
bv:{"^":"ai;",
gel:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.ab("deltaY is not supported"))},
gek:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.ab("deltaX is not supported"))},
$isbv:1,
"%":"WheelEvent"},
jh:{"^":"a2;",
dU:function(a,b){return a.requestAnimationFrame(H.b1(H.k(b,{func:1,ret:-1,args:[P.U]}),1))},
dl:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
eW:{"^":"y;",$iseW:1,"%":"Attr"},
mB:{"^":"kA;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.b9]},
$asq:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$asu:function(){return[W.b9]},
"%":"CSSRuleList"},
mC:{"^":"h2;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bB(b,"$isa6",[P.U],"$asa6")
if(!z)return!1
z=J.b3(b)
return a.left===z.gav(b)&&a.top===z.gaL(b)&&a.width===z.gaa(b)&&a.height===z.ga8(b)},
gR:function(a){return W.f0(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga8:function(a){return a.height},
gaa:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mE:{"^":"kC;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.be]},
$asq:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asu:function(){return[W.be]},
"%":"GamepadList"},
mH:{"^":"kE;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.y]},
$asq:function(){return[W.y]},
$ish:1,
$ash:function(){return[W.y]},
$isd:1,
$asd:function(){return[W.y]},
$asu:function(){return[W.y]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mI:{"^":"kG;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bn]},
$asq:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asu:function(){return[W.bn]},
"%":"SpeechRecognitionResultList"},
mJ:{"^":"kI;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bo]},
$asq:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$asu:function(){return[W.bo]},
"%":"StyleSheetList"},
jn:{"^":"e0;bZ:a<",
J:function(a,b){var z,y,x,w,v
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gV(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gV:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.j(z[w],"$iseW")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asa3:function(){return[P.e,P.e]},
$asX:function(){return[P.e,P.e]}},
jv:{"^":"jn;a",
m:function(a,b){return this.a.getAttribute(H.D(b))},
gk:function(a){return this.gV(this).length}},
jw:{"^":"cP;a,b,c,$ti",
eB:function(a,b,c,d){var z=H.w(this,0)
H.k(a,{func:1,ret:-1,args:[z]})
H.k(c,{func:1,ret:-1})
return W.T(this.a,this.b,a,!1,z)}},
mD:{"^":"jw;a,b,c,$ti"},
jx:{"^":"eo;a,b,c,d,e,$ti",
e6:function(){var z=this.d
if(z!=null&&this.a<=0)J.fC(this.b,this.c,z,!1)},
p:{
T:function(a,b,c,d,e){var z=c==null?null:W.fl(new W.jy(c),W.a1)
z=new W.jx(0,a,b,z,!1,[e])
z.e6()
return z}}},
jy:{"^":"n:6;a",
$1:function(a){return this.a.$1(H.j(a,"$isa1"))}},
bN:{"^":"a;a",
d2:function(a){var z,y
z=$.$get$d1()
if(z.a===0){for(y=0;y<262;++y)z.N(0,C.N[y],W.l4())
for(y=0;y<12;++y)z.N(0,C.n[y],W.l5())}},
as:function(a){return $.$get$f_().P(0,W.bb(a))},
ae:function(a,b,c){var z,y,x
z=W.bb(a)
y=$.$get$d1()
x=y.m(0,H.f(z)+"::"+b)
if(x==null)x=y.m(0,"*::"+b)
if(x==null)return!1
return H.d6(x.$4(a,b,c,this))},
$isao:1,
p:{
eZ:function(a){var z,y
z=W.dj(null)
y=window.location
z=new W.bN(new W.k8(z,y))
z.d2(a)
return z},
mF:[function(a,b,c,d){H.j(a,"$isN")
H.D(b)
H.D(c)
H.j(d,"$isbN")
return!0},"$4","l4",16,0,18],
mG:[function(a,b,c,d){var z,y,x,w,v
H.j(a,"$isN")
H.D(b)
H.D(c)
z=H.j(d,"$isbN").a
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
return z},"$4","l5",16,0,18]}},
u:{"^":"a;$ti",
gO:function(a){return new W.dL(a,this.gk(a),-1,[H.bC(this,a,"u",0)])}},
e5:{"^":"a;a",
as:function(a){return C.a.cc(this.a,new W.hP(a))},
ae:function(a,b,c){return C.a.cc(this.a,new W.hO(a,b,c))},
$isao:1},
hP:{"^":"n:19;a",
$1:function(a){return H.j(a,"$isao").as(this.a)}},
hO:{"^":"n:19;a,b,c",
$1:function(a){return H.j(a,"$isao").ae(this.a,this.b,this.c)}},
k9:{"^":"a;",
d3:function(a,b,c,d){var z,y,x
this.a.a7(0,c)
z=b.bE(0,new W.ka())
y=b.bE(0,new W.kb())
this.b.a7(0,z)
x=this.c
x.a7(0,C.P)
x.a7(0,y)},
as:function(a){return this.a.P(0,W.bb(a))},
ae:["cT",function(a,b,c){var z,y
z=W.bb(a)
y=this.c
if(y.P(0,H.f(z)+"::"+b))return this.d.e8(c)
else if(y.P(0,"*::"+b))return this.d.e8(c)
else{y=this.b
if(y.P(0,H.f(z)+"::"+b))return!0
else if(y.P(0,"*::"+b))return!0
else if(y.P(0,H.f(z)+"::*"))return!0
else if(y.P(0,"*::*"))return!0}return!1}],
$isao:1},
ka:{"^":"n:20;",
$1:function(a){return!C.a.P(C.n,H.D(a))}},
kb:{"^":"n:20;",
$1:function(a){return C.a.P(C.n,H.D(a))}},
kk:{"^":"k9;e,a,b,c,d",
ae:function(a,b,c){if(this.cT(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1},
p:{
f9:function(){var z,y,x,w,v
z=P.e
y=P.dZ(C.m,z)
x=H.w(C.m,0)
w=H.k(new W.kl(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.kk(y,P.bJ(null,null,null,z),P.bJ(null,null,null,z),P.bJ(null,null,null,z),null)
y.d3(null,new H.hF(C.m,w,[x,z]),v,null)
return y}}},
kl:{"^":"n:32;",
$1:function(a){return"TEMPLATE::"+H.f(H.D(a))}},
kj:{"^":"a;",
as:function(a){var z=J.E(a)
if(!!z.$iseh)return!1
z=!!z.$iscR
if(z&&W.bb(a)==="foreignObject")return!1
if(z)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.b.aX(b,"on"))return!1
return this.as(a)},
$isao:1},
dL:{"^":"a;a,b,c,0d,$ti",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fB(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gI:function(a){return this.d}},
ao:{"^":"a;"},
k8:{"^":"a;a,b",$ismu:1},
fg:{"^":"a;a",
bG:function(a){new W.kx(this).$2(a,null)},
aD:function(a,b){if(b==null)J.di(a)
else b.removeChild(a)},
dY:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fE(a)
x=y.gbZ().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a9(t)}v="element unprintable"
try{v=J.a_(a)}catch(t){H.a9(t)}try{u=W.bb(a)
this.dX(H.j(a,"$isN"),b,z,v,u,H.j(y,"$isX"),H.D(x))}catch(t){if(H.a9(t) instanceof P.al)throw t
else{this.aD(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dX:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aD(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.as(a)){this.aD(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.ae(a,"is",g)){this.aD(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gV(f)
y=H.b(z.slice(0),[H.w(z,0)])
for(x=f.gV(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.i(y,x)
w=y[x]
if(!this.a.ae(a,J.fI(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.f(e)+" "+w+'="'+H.f(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.E(a).$ises)this.bG(a.content)},
$ism6:1},
kx:{"^":"n:41;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dY(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aD(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fF(z)}catch(w){H.a9(w)
v=H.j(z,"$isy")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.j(y,"$isy")}}},
jq:{"^":"l+fW;"},
jr:{"^":"l+q;"},
js:{"^":"jr+u;"},
jt:{"^":"l+q;"},
ju:{"^":"jt+u;"},
jz:{"^":"l+q;"},
jA:{"^":"jz+u;"},
jM:{"^":"l+q;"},
jN:{"^":"jM+u;"},
jT:{"^":"l+a3;"},
jU:{"^":"l+a3;"},
jV:{"^":"l+q;"},
jW:{"^":"jV+u;"},
jX:{"^":"l+q;"},
jY:{"^":"jX+u;"},
k0:{"^":"l+q;"},
k1:{"^":"k0+u;"},
k7:{"^":"l+a3;"},
f6:{"^":"a2+q;"},
f7:{"^":"f6+u;"},
kc:{"^":"l+q;"},
kd:{"^":"kc+u;"},
kg:{"^":"l+a3;"},
km:{"^":"l+q;"},
kn:{"^":"km+u;"},
fa:{"^":"a2+q;"},
fb:{"^":"fa+u;"},
ks:{"^":"l+q;"},
kt:{"^":"ks+u;"},
kz:{"^":"l+q;"},
kA:{"^":"kz+u;"},
kB:{"^":"l+q;"},
kC:{"^":"kB+u;"},
kD:{"^":"l+q;"},
kE:{"^":"kD+u;"},
kF:{"^":"l+q;"},
kG:{"^":"kF+u;"},
kH:{"^":"l+q;"},
kI:{"^":"kH+u;"}}],["","",,P,{"^":"",
kZ:function(a){var z,y
z=J.E(a)
if(!!z.$isbZ){y=z.gci(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fd(a.data,a.height,a.width)},
kY:function(a){if(a instanceof P.fd)return{data:a.a,height:a.b,width:a.c}
return a},
aB:function(a){var z,y,x,w,v
if(a==null)return
z=P.dY(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.D(y[w])
z.N(0,v,a[v])}return z},
kW:function(a,b){var z={}
a.J(0,new P.kX(z))
return z},
dG:function(){var z=$.dF
if(z==null){z=J.cq(window.navigator.userAgent,"Opera",0)
$.dF=z}return z},
h1:function(){var z,y
z=$.dC
if(z!=null)return z
y=$.dD
if(y==null){y=J.cq(window.navigator.userAgent,"Firefox",0)
$.dD=y}if(y)z="-moz-"
else{y=$.dE
if(y==null){y=!P.dG()&&J.cq(window.navigator.userAgent,"Trident/",0)
$.dE=y}if(y)z="-ms-"
else z=P.dG()?"-o-":"-webkit-"}$.dC=z
return z},
fd:{"^":"a;ci:a>,b,c",$isbZ:1},
kX:{"^":"n:13;a",
$2:function(a,b){this.a[a]=b}},
hd:{"^":"c2;a,b",
gb8:function(){var z,y,x
z=this.b
y=H.ae(z,"q",0)
x=W.N
return new H.hD(new H.d_(z,H.k(new P.he(),{func:1,ret:P.L,args:[y]}),[y]),H.k(new P.hf(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aO(this.gb8().a)},
m:function(a,b){var z=this.gb8()
return z.b.$1(J.cr(z.a,b))},
gO:function(a){var z=P.hA(this.gb8(),!1,W.N)
return new J.ar(z,z.length,0,[H.w(z,0)])},
$asq:function(){return[W.N]},
$ash:function(){return[W.N]},
$asd:function(){return[W.N]}},
he:{"^":"n:15;",
$1:function(a){return!!J.E(H.j(a,"$isy")).$isN}},
hf:{"^":"n:30;",
$1:function(a){return H.Z(H.j(a,"$isy"),"$isN")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k2:{"^":"a;$ti",
gbC:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.A(z+this.c,H.w(this,0))},
gbl:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.A(z+this.d,H.w(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bB(b,"$isa6",[P.U],"$asa6")
if(!z)return!1
z=this.a
y=J.b3(b)
x=y.gav(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaL(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.w(this,0)
if(H.A(z+this.c,w)===y.gbC(b)){if(typeof x!=="number")return x.C()
z=H.A(x+this.d,w)===y.gbl(b)}else z=!1}else z=!1}else z=!1
return z},
gR:function(a){var z,y,x,w,v
z=this.a
y=J.aM(z)
x=this.b
w=J.aM(x)
if(typeof z!=="number")return z.C()
v=H.w(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.A(x+this.d,v)
return P.jO(P.cf(P.cf(P.cf(P.cf(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a6:{"^":"k2;av:a>,aL:b>,aa:c>,a8:d>,$ti",p:{
i6:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a0()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.a0()
if(d<0)y=-d*0
else y=d
return new P.a6(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bI:{"^":"l;",$isbI:1,"%":"SVGLength"},lT:{"^":"jQ;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bI]},
$ish:1,
$ash:function(){return[P.bI]},
$isd:1,
$asd:function(){return[P.bI]},
$asu:function(){return[P.bI]},
"%":"SVGLengthList"},bL:{"^":"l;",$isbL:1,"%":"SVGNumber"},m7:{"^":"k_;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bL]},
$ish:1,
$ash:function(){return[P.bL]},
$isd:1,
$asd:function(){return[P.bL]},
$asu:function(){return[P.bL]},
"%":"SVGNumberList"},ma:{"^":"l;0k:length=","%":"SVGPointList"},eh:{"^":"cR;",$iseh:1,"%":"SVGScriptElement"},mi:{"^":"ki;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.m(a,b)},
$asq:function(){return[P.e]},
$ish:1,
$ash:function(){return[P.e]},
$isd:1,
$asd:function(){return[P.e]},
$asu:function(){return[P.e]},
"%":"SVGStringList"},cR:{"^":"N;",
gce:function(a){return new P.hd(a,new W.ad(a))},
a2:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.ao])
C.a.h(z,W.eZ(null))
C.a.h(z,W.f9())
C.a.h(z,new W.kj())
c=new W.fg(new W.e5(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).ei(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ad(w)
u=z.gai(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscR:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bM:{"^":"l;",$isbM:1,"%":"SVGTransform"},mr:{"^":"kv;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bM]},
$ish:1,
$ash:function(){return[P.bM]},
$isd:1,
$asd:function(){return[P.bM]},
$asu:function(){return[P.bM]},
"%":"SVGTransformList"},jP:{"^":"l+q;"},jQ:{"^":"jP+u;"},jZ:{"^":"l+q;"},k_:{"^":"jZ+u;"},kh:{"^":"l+q;"},ki:{"^":"kh+u;"},ku:{"^":"l+q;"},kv:{"^":"ku+u;"}}],["","",,P,{"^":"",lw:{"^":"l;0k:length=","%":"AudioBuffer"},lx:{"^":"jo;",
m:function(a,b){return P.aB(a.get(H.D(b)))},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aB(y.value[1]))}},
gV:function(a){var z=H.b([],[P.e])
this.J(a,new P.fL(z))
return z},
gk:function(a){return a.size},
$asa3:function(){return[P.e,null]},
$isX:1,
$asX:function(){return[P.e,null]},
"%":"AudioParamMap"},fL:{"^":"n:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},ly:{"^":"a2;0k:length=","%":"AudioTrackList"},fM:{"^":"a2;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m8:{"^":"fM;0k:length=","%":"OfflineAudioContext"},jo:{"^":"l+a3;"}}],["","",,P,{"^":"",cN:{"^":"l;",
f4:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.E(g)
if(!!z.$isbZ)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kY(g))
return}if(!!z.$isdO)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.fJ("Incorrect number or type of arguments"))},
f3:function(a,b,c,d,e,f,g){return this.f4(a,b,c,d,e,f,g,null,null,null)},
$iscN:1,
"%":"WebGLRenderingContext"},iC:{"^":"l;",$isiC:1,"%":"WebGLTexture"},iW:{"^":"l;",$isiW:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mg:{"^":"kf;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.aB(a.item(b))},
B:function(a,b){return this.m(a,b)},
$asq:function(){return[[P.X,,,]]},
$ish:1,
$ash:function(){return[[P.X,,,]]},
$isd:1,
$asd:function(){return[[P.X,,,]]},
$asu:function(){return[[P.X,,,]]},
"%":"SQLResultSetRowList"},ke:{"^":"l+q;"},kf:{"^":"ke+u;"}}],["","",,O,{"^":"",aP:{"^":"a;0a,0b,0c,0d,$ti",
bK:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cK:function(a,b,c){var z={func:1,ret:-1,args:[P.C,[P.h,H.ae(this,"aP",0)]]}
H.k(a,z)
H.k(c,z)
this.b=b
this.c=a
this.d=c},
aV:function(a,b){return this.cK(a,null,b)},
dO:function(a){H.z(a,"$ish",[H.ae(this,"aP",0)],"$ash")
return!0},
cZ:function(a,b){var z
H.z(b,"$ish",[H.ae(this,"aP",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gO:function(a){var z=this.a
return new J.ar(z,z.length,0,[H.w(z,0)])},
B:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ae(this,"aP",0)
H.A(b,z)
z=[z]
if(this.dO(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cZ(x,H.b([b],z))}},
$ish:1,
p:{
dx:function(a){var z=new O.aP([a])
z.bK(a)
return z}}},cI:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
d_:function(a){var z=this.b
if(!(z==null))z.v(a)},
aj:function(){return this.d_(null)},
gaf:function(a){var z=this.a
if(z.length>0)return C.a.gaS(z)
else return V.bK()},
cs:function(a){var z=this.a
if(a==null)C.a.h(z,V.bK())
else C.a.h(z,a)
this.aj()},
bA:function(){var z=this.a
if(z.length>0){z.pop()
this.aj()}}}}],["","",,E,{"^":"",cs:{"^":"a;"},aE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0U:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbH:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().S(0,this.gcp())
y=this.c
if(y!=null)y.gt().h(0,this.gcp())
x=new D.K("shape",z,this.c,this,[F.ej])
x.b=!0
this.a3(x)}},
saH:function(a){var z,y
if(!J.Q(this.r,a)){z=this.r
if(z!=null)z.gt().S(0,this.gco())
if(a!=null)a.gt().h(0,this.gco())
this.r=a
y=new D.K("mover",z,a,this,[U.a4])
y.b=!0
this.a3(y)}},
ay:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.az(0,b,this):null
if(!J.Q(y,this.x)){x=this.x
this.x=y
w=new D.K("matrix",x,y,this,[V.c4])
w.b=!0
this.a3(w)}for(z=this.y.a,z=new J.ar(z,z.length,0,[H.w(z,0)]);z.w();)z.d.ay(0,b)},
ax:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaf(z))
else C.a.h(z.a,y.n(0,z.gaf(z)))
z.aj()
a.ct(this.f)
z=a.dy
x=(z&&C.a).gaS(z)
if(x!=null&&this.d!=null)x.eW(a,this)
for(z=this.y.a,z=new J.ar(z,z.length,0,[H.w(z,0)]);z.w();)z.d.ax(a)
a.cr()
a.dx.bA()},
gt:function(){var z=this.z
if(z==null){z=D.G()
this.z=z}return z},
a3:function(a){var z=this.z
if(!(z==null))z.v(a)},
W:function(){return this.a3(null)},
eJ:[function(a){H.j(a,"$ist")
this.e=null
this.a3(a)},function(){return this.eJ(null)},"fM","$1","$0","gcp",0,2,1],
eI:[function(a){this.a3(H.j(a,"$ist"))},function(){return this.eI(null)},"fL","$1","$0","gco",0,2,1],
eG:[function(a){this.a3(H.j(a,"$ist"))},function(){return this.eG(null)},"fJ","$1","$0","gcn",0,2,1],
fI:[function(a,b){var z,y,x,w,v,u,t,s
H.z(b,"$ish",[E.aE],"$ash")
for(z=b.length,y=this.gcn(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gU()==null){t=new D.bE()
t.d=0
u.sU(t)}t=u.gU()
t.toString
H.k(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.W()},"$2","geF",8,0,7],
fK:[function(a,b){var z,y,x,w,v
H.z(b,"$ish",[E.aE],"$ash")
for(z=b.length,y=this.gcn(),x=0;x<b.length;b.length===z||(0,H.x)(b),++x){w=b[x]
if(w!=null){if(w.gU()==null){v=new D.bE()
v.d=0
w.sU(v)}w.gU().S(0,y)}}this.W()},"$2","geH",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$ise4:1},ia:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
cV:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ag(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cI()
y=[V.c4]
z.a=H.b([],y)
z.gt().h(0,new E.ic(this))
this.cy=z
z=new O.cI()
z.a=H.b([],y)
z.gt().h(0,new E.id(this))
this.db=z
z=new O.cI()
z.a=H.b([],y)
z.gt().h(0,new E.ie(this))
this.dx=z
z=H.b([],[O.cS])
this.dy=z
C.a.h(z,null)
this.fr=new H.aS(0,0,[P.e,A.ei])},
ct:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaS(z):a;(z&&C.a).h(z,y)},
cr:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
ib:function(a,b){var z=new E.ia(a,b)
z.cV(a,b)
return z}}},ic:{"^":"n:8;a",
$1:function(a){var z
H.j(a,"$ist")
z=this.a
z.z=null
z.ch=null}},id:{"^":"n:8;a",
$1:function(a){var z
H.j(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ie:{"^":"n:8;a",
$1:function(a){var z
H.j(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},iF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0U:x@,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
d1:[function(a){var z
H.j(a,"$ist")
z=this.x
if(!(z==null))z.v(a)
this.eY()},function(){return this.d1(null)},"d0","$1","$0","gbL",0,2,1],
geu:function(){var z,y,x
z=Date.now()
y=C.e.ar(P.dH(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ag(z,!1)
return x/y},
c2:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.r(z)
x=C.c.bt(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.n()
w=C.c.bt(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ev(C.l,this.geX())}},
eY:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.iH(this),{func:1,ret:-1,args:[P.U]})
C.y.dl(z)
C.y.dU(z,W.fl(y,P.U))}},"$0","geX",0,0,3],
eV:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.c2()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ag(w,!1)
x.y=P.dH(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aj()
w=x.db
C.a.sk(w.a,0)
w.aj()
w=x.dx
C.a.sk(w.a,0)
w.aj()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ax(this.e)}x=this.z
if(!(x==null))x.v(null)}catch(v){z=H.a9(v)
y=H.b4(v)
P.dg("Error: "+H.f(z))
P.dg("Stack: "+H.f(y))
throw H.c(z)}},
p:{
iG:function(a,b,c,d,e){var z,y,x,w
z=J.E(a)
if(!!z.$iscv)return E.eu(a,!0,!0,!0,!1)
y=W.cw(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gce(a).h(0,y)
w=E.eu(y,!0,!0,!0,!1)
w.a=a
return w},
eu:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iF()
y=P.hy(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.e,null)
x=C.i.aU(a,"webgl",y)
x=H.j(x==null?C.i.aU(a,"experimental-webgl",y):x,"$iscN")
if(x==null)H.V(P.S("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ib(x,a)
w=new T.iD(x)
w.b=H.Y(x.getParameter(3379))
w.c=H.Y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.j1(a)
v=new X.hv()
v.c=new X.an(!1,!1,!1)
v.d=P.bJ(null,null,null,P.C)
w.b=v
v=new X.hJ(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hB(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iK(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.eo,P.a]])
w.z=v
u=document
t=W.ai
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.T(u,"contextmenu",H.k(w.gdC(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.T(a,"focus",H.k(w.gdF(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.T(a,"blur",H.k(w.gdz(),q),!1,r))
v=w.z
p=W.bg
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.T(u,"keyup",H.k(w.gdH(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.T(u,"keydown",H.k(w.gdG(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.T(a,"mousedown",H.k(w.gdJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mouseup",H.k(w.gdL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mousemove",H.k(w.gdK(),s),!1,t))
p=w.z
o=W.bv;(p&&C.a).h(p,W.T(a,H.D(W.h7(a)),H.k(w.gdM(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.T(u,"mousemove",H.k(w.gdD(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.T(u,"mouseup",H.k(w.gdE(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.T(u,"pointerlockchange",H.k(w.gdN(),q),!1,r))
r=w.z
q=W.aV
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.T(a,"touchstart",H.k(w.gdS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchend",H.k(w.gdQ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchmove",H.k(w.gdR(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ag(Date.now(),!1)
z.cy=0
z.c2()
return z}}},iH:{"^":"n:26;a",
$1:function(a){var z
H.lj(a)
z=this.a
if(z.ch){z.ch=!1
z.eV()}}}}],["","",,Z,{"^":"",eU:{"^":"a;a,b",p:{
cZ:function(a,b,c){var z
H.z(c,"$isd",[P.C],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.ci(c)),35044)
a.bindBuffer(b,null)
return new Z.eU(b,z)}}},dq:{"^":"cs;a,b,c,d,e",
bj:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.a9(y)
x=P.S('Failed to bind buffer attribute "'+J.a_(this.a)+'": '+H.f(z))
throw H.c(x)}},
i:function(a){return"["+J.a_(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},jf:{"^":"a;a",$islz:1},dr:{"^":"a;a,0b,c,d",
aG:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bj:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bj(a)},
fb:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ax:function(a){var z,y,x,w,v
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
z=[P.e]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a_(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$isml:1},c_:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aT(this.c)+"'")+"]"}},bs:{"^":"a;a",
gbI:function(a){var z,y
z=this.a
y=(z&$.$get$ax().a)!==0?3:0
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$av().a)!==0)y+=3
if((z&$.$get$ay().a)!==0)y+=2
if((z&$.$get$az().a)!==0)y+=3
if((z&$.$get$bt().a)!==0)y+=3
if((z&$.$get$bu().a)!==0)y+=4
if((z&$.$get$aY().a)!==0)++y
return(z&$.$get$aX().a)!==0?y+4:y},
e9:function(a){var z,y,x
z=$.$get$ax()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$av()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bt()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eT()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bs))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.e])
y=this.a
if((y&$.$get$ax().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$av().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$az().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bt().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
p:{
ac:function(a){return new Z.bs(a)}}}}],["","",,D,{"^":"",dv:{"^":"a;"},bE:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.t]}
H.k(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
S:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.t]})
z=this.a
z=z==null?null:C.a.P(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).S(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.P(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).S(z,b)||y}return y},
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.J(y,new D.hb(z))
y=this.b
if(!(y==null))C.a.J(y,new D.hc(z))
z=this.b
if(!(z==null))C.a.sk(z,0)
return!0},
en:function(){return this.v(null)},
eZ:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.v(y)}}},
ah:function(a){return this.eZ(a,!0,!1)},
p:{
G:function(){var z=new D.bE()
z.d=0
return z}}},hb:{"^":"n:25;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},hc:{"^":"n:25;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"a;a,0b"},dP:{"^":"t;c,d,a,0b,$ti"},dQ:{"^":"t;c,d,a,0b,$ti"},K:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",ds:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ds))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)},
p:{"^":"lA<"}},dU:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dU))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},dV:{"^":"t;c,a,0b"},hv:{"^":"a;0a,0b,0c,0d",
eP:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dV(a,this)
y.b=!0
return z.v(y)},
eL:function(a){var z,y
this.c=a.b
this.d.S(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dV(a,this)
y.b=!0
return z.v(y)}},e_:{"^":"c6;x,y,c,d,e,a,0b"},hB:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ac:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ag(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.n()
v=b.b
u=this.ch
if(typeof v!=="number")return v.n()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gau()
s=new X.bi(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bz:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.ac(a,b))
return!0},
aJ:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.cJ()
if(typeof z!=="number")return z.cD()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.ac(a,b))
return!0},
aI:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.ac(a,b))
return!0},
eQ:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gau()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.n()
t=a.b
s=this.cy
if(typeof t!=="number")return t.n()
w=new X.cJ(new V.O(v*u,t*s),y,x,new P.ag(w,!1),this)
w.b=!0
z.v(w)
return!0},
dI:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ag(Date.now(),!1)
y=this.f
x=new X.e_(c,a,this.a.gau(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.R(0,0)}},an:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.an))return!1
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
return z+(this.c?"Shift+":"")}},bi:{"^":"c6;x,y,z,Q,ch,c,d,e,a,0b"},hJ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
b6:function(a,b,c){var z,y,x
z=new P.ag(Date.now(),!1)
y=this.a.gau()
x=new X.bi(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bz:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.b6(a,b,!0))
return!0},
aJ:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.cJ()
if(typeof z!=="number")return z.cD()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.b6(a,b,!0))
return!0},
aI:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.b6(a,b,!1))
return!0},
eR:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gau()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.n()
u=a.b
t=this.ch
if(typeof u!=="number")return u.n()
x=new X.cJ(new V.O(w*v,u*t),y,b,new P.ag(x,!1),this)
x.b=!0
z.v(x)
return!0},
gcj:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
gcC:function(){var z=this.c
if(z==null){z=D.G()
this.c=z}return z},
gcm:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z}},cJ:{"^":"c6;x,c,d,e,a,0b"},c6:{"^":"t;"},ez:{"^":"c6;x,y,z,Q,ch,c,d,e,a,0b"},iK:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ac:function(a,b){var z,y,x,w
H.z(a,"$isd",[V.R],"$asd")
z=new P.ag(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gau()
w=new X.ez(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
eO:function(a){var z
H.z(a,"$isd",[V.R],"$asd")
z=this.b
if(z==null)return!1
z.v(this.ac(a,!0))
return!0},
eM:function(a){var z
H.z(a,"$isd",[V.R],"$asd")
z=this.c
if(z==null)return!1
z.v(this.ac(a,!0))
return!0},
eN:function(a){var z
H.z(a,"$isd",[V.R],"$asd")
z=this.d
if(z==null)return!1
z.v(this.ac(a,!1))
return!0}},j1:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gau:function(){var z=this.a
return V.eg(0,0,(z&&C.i).gcf(z).c,C.i.gcf(z).d)},
bX:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dU(z,new X.an(y,a.altKey,a.shiftKey))},
aq:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.an(y,a.altKey,a.shiftKey)},
bi:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.an(y,a.altKey,a.shiftKey)},
ad:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=z.top
if(typeof x!=="number")return x.F()
return new V.R(y-w,x-v)},
aC:function(a){return new V.O(a.movementX,a.movementY)},
bf:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.c.a4(u.pageX)
C.c.a4(u.pageY)
s=z.left
C.c.a4(u.pageX)
C.a.h(y,new V.R(t-s,C.c.a4(u.pageY)-z.top))}return y},
ab:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ds(z,new X.an(y,a.altKey,a.shiftKey))},
b9:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.F()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
fp:[function(a){this.f=!0},"$1","gdF",4,0,6],
fj:[function(a){this.f=!1},"$1","gdz",4,0,6],
fm:[function(a){H.j(a,"$isai")
if(this.f&&this.b9(a))a.preventDefault()},"$1","gdC",4,0,4],
fs:[function(a){var z
H.j(a,"$isbg")
if(!this.f)return
z=this.bX(a)
if(this.b.eP(z))a.preventDefault()},"$1","gdH",4,0,23],
fq:[function(a){var z
H.j(a,"$isbg")
if(!this.f)return
z=this.bX(a)
if(this.b.eL(z))a.preventDefault()},"$1","gdG",4,0,23],
ft:[function(a){var z,y,x,w
H.j(a,"$isai")
z=this.a
z.focus()
this.f=!0
this.aq(a)
if(this.x){y=this.ab(a)
x=this.aC(a)
if(this.d.bz(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ab(a)
w=this.ad(a)
if(this.c.bz(y,w))a.preventDefault()},"$1","gdJ",4,0,4],
fv:[function(a){var z,y,x
H.j(a,"$isai")
this.aq(a)
z=this.ab(a)
if(this.x){y=this.aC(a)
if(this.d.aJ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aJ(z,x))a.preventDefault()},"$1","gdL",4,0,4],
fo:[function(a){var z,y,x
H.j(a,"$isai")
if(!this.b9(a)){this.aq(a)
z=this.ab(a)
if(this.x){y=this.aC(a)
if(this.d.aJ(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aJ(z,x))a.preventDefault()}},"$1","gdE",4,0,4],
fu:[function(a){var z,y,x
H.j(a,"$isai")
this.aq(a)
z=this.ab(a)
if(this.x){y=this.aC(a)
if(this.d.aI(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aI(z,x))a.preventDefault()},"$1","gdK",4,0,4],
fn:[function(a){var z,y,x
H.j(a,"$isai")
if(!this.b9(a)){this.aq(a)
z=this.ab(a)
if(this.x){y=this.aC(a)
if(this.d.aI(z,y))a.preventDefault()
return}if(this.r)return
x=this.ad(a)
if(this.c.aI(z,x))a.preventDefault()}},"$1","gdD",4,0,4],
fw:[function(a){var z,y
H.j(a,"$isbv")
this.aq(a)
z=new V.O((a&&C.x).gek(a),C.x.gel(a)).A(0,180)
if(this.x){if(this.d.eQ(z))a.preventDefault()
return}if(this.r)return
y=this.ad(a)
if(this.c.eR(z,y))a.preventDefault()},"$1","gdM",4,0,29],
fz:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ab(this.y)
v=this.ad(this.y)
this.d.dI(w,v,x)}},"$1","gdN",4,0,6],
fD:[function(a){var z
H.j(a,"$isaV")
this.a.focus()
this.f=!0
this.bi(a)
z=this.bf(a)
if(this.e.eO(z))a.preventDefault()},"$1","gdS",4,0,10],
fB:[function(a){var z
H.j(a,"$isaV")
this.bi(a)
z=this.bf(a)
if(this.e.eM(z))a.preventDefault()},"$1","gdQ",4,0,10],
fC:[function(a){var z
H.j(a,"$isaV")
this.bi(a)
z=this.bf(a)
if(this.e.eN(z))a.preventDefault()},"$1","gdR",4,0,10]}}],["","",,V,{"^":"",
lC:[function(a,b){if(typeof b!=="number")return b.F()
if(typeof a!=="number")return H.r(a)
return Math.abs(b-a)<=1e-9},"$2","hG",8,0,27],
ls:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.cI(a-b,z)
return(a<0?a+z:a)+b},
M:function(a,b,c){if(a==null)return C.b.a_("null",c)
return C.b.a_(C.c.cA($.m.$2(a,0)?0:a,b),c+b+1)},
b2:function(a,b,c){var z,y,x,w,v,u
H.z(a,"$isd",[P.v],"$asd")
z=H.b([],[P.e])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.M(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.N(z,u,C.b.a_(z[u],x))}return z},
df:function(a,b){return C.c.f7(Math.pow(b,C.F.bt(Math.log(H.kV(a))/Math.log(b))))},
b8:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b8))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
e3:{"^":"a;a,b,c,d,e,f,r,x,y",
aK:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e3))return!1
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
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.v]
y=V.b2(H.b([this.a,this.d,this.r],z),3,0)
x=V.b2(H.b([this.b,this.e,this.x],z),3,0)
w=V.b2(H.b([this.c,this.f,this.y],z),3,0)
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
return s+(z+w[2]+"]")}},
c4:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aK:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
n:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.r(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.r(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.n()
if(typeof u!=="number")return H.r(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.n()
if(typeof s!=="number")return H.r(s)
r=a7.b
if(typeof r!=="number")return H.r(r)
q=a7.f
if(typeof q!=="number")return H.r(q)
p=a7.z
if(typeof p!=="number")return H.r(p)
o=a7.cy
if(typeof o!=="number")return H.r(o)
n=a7.c
if(typeof n!=="number")return H.r(n)
m=a7.r
if(typeof m!=="number")return H.r(m)
l=a7.Q
if(typeof l!=="number")return H.r(l)
k=a7.db
if(typeof k!=="number")return H.r(k)
j=a7.d
if(typeof j!=="number")return H.r(j)
i=a7.x
if(typeof i!=="number")return H.r(i)
h=a7.ch
if(typeof h!=="number")return H.r(h)
g=a7.dx
if(typeof g!=="number")return H.r(g)
f=this.e
if(typeof f!=="number")return f.n()
e=this.f
if(typeof e!=="number")return e.n()
d=this.r
if(typeof d!=="number")return d.n()
c=this.x
if(typeof c!=="number")return c.n()
b=this.y
if(typeof b!=="number")return b.n()
a=this.z
if(typeof a!=="number")return a.n()
a0=this.Q
if(typeof a0!=="number")return a0.n()
a1=this.ch
if(typeof a1!=="number")return a1.n()
a2=this.cx
if(typeof a2!=="number")return a2.n()
a3=this.cy
if(typeof a3!=="number")return a3.n()
a4=this.db
if(typeof a4!=="number")return a4.n()
a5=this.dx
if(typeof a5!=="number")return a5.n()
return V.au(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c4))return!1
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
i:function(a){return this.G()},
ck:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b2(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b2(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b2(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b2(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
u:function(a){return this.ck(a,3,0)},
G:function(){return this.ck("",3,0)},
p:{
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bK:function(){return V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
R:{"^":"a;a,b",
F:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
c5:{"^":"a;a,b,c",
F:function(a,b){return new V.c5(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c5))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}},
eb:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eb))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}},
ef:{"^":"a;a,b,c,d",
gY:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ef))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"},
p:{
eg:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ef(a,b,c,d)}}},
O:{"^":"a;a,b",
ez:[function(a){return Math.sqrt(this.D(this))},"$0","gk",1,0,22],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.r(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.r(w)
return z*y+x*w},
n:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return new V.O(z*b,y*b)},
A:function(a,b){var z,y
if($.m.$2(b,0))return new V.O(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.O(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}},
P:{"^":"a;a,b,c",
ez:[function(a){return Math.sqrt(this.D(this))},"$0","gk",1,0,22],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bv:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.P(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aF:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.P(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.P(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.P(-this.a,-this.b,-this.c)},
A:function(a,b){if($.m.$2(b,0))return new V.P(0,0,0)
return new V.P(this.a/b,this.b/b,this.c/b)},
cl:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fU:{"^":"dv;0a,0b,0c,0d,0e,0f,0r,0x,0y",
b0:function(a){var z=V.ls(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
L:function(a){var z=this.y
if(!(z==null))z.v(a)},
sbF:function(a,b){},
sbw:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.b0(z)}z=new D.K("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.L(z)}},
sby:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.b0(z)}z=new D.K("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.L(z)}},
sX:function(a,b){var z,y
b=this.b0(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.K("location",y,b,this,[P.v])
z.b=!0
this.L(z)}},
sbx:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.K("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.L(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.K("velocity",x,a,this,[P.v])
z.b=!0
this.L(z)}},
sbr:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.K("dampening",y,a,this,[P.v])
z.b=!0
this.L(z)}},
ay:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sX(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
p:{
cy:function(){var z=new U.fU()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dy:{"^":"a4;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
az:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dy))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}},dN:{"^":"aP;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
L:[function(a){var z
H.j(a,"$ist")
z=this.e
if(!(z==null))z.v(a)},function(){return this.L(null)},"a1","$1","$0","gap",0,2,1],
fi:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a4
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.dP(a,b,this,[z])
z.b=!0
this.L(z)},"$2","gdw",8,0,21],
fA:[function(a,b){var z,y,x,w,v
z=U.a4
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gap(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gt().S(0,x)}z=new D.dQ(a,b,this,[z])
z.b=!0
this.L(z)},"$2","gdP",8,0,21],
az:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a0()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ar(z,z.length,0,[H.w(z,0)]),x=null;z.w();){y=z.d
if(y!=null){w=y.az(0,b,c)
if(w!=null)x=x==null?w:w.n(0,x)}}this.f=x==null?V.bK():x
z=this.e
if(!(z==null))z.ah(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dN))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.Q(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a4]},
$asaP:function(){return[U.a4]},
$isa4:1},a4:{"^":"dv;"},j2:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.G()
this.cy=z}return z},
L:[function(a){var z
H.j(a,"$ist")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.L(null)},"a1","$1","$0","gap",0,2,1],
aE:function(a){if(this.a!=null)return!1
this.a=a
a.c.gcj().h(0,this.gba())
this.a.c.gcm().h(0,this.gbb())
this.a.c.gcC().h(0,this.gbc())
return!0},
ds:[function(a){H.j(a,"$ist")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gba",4,0,0],
dt:[function(a){var z,y,x,w,v,u,t
a=H.Z(H.j(a,"$ist"),"$isbi")
if(!this.y)return
if(this.x){z=a.d.F(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.F(0,a.y)
z=new V.O(y.a,y.b).n(0,2).A(0,z.gY())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.n()
x=this.e
if(typeof x!=="number")return H.r(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=new V.O(x.a,x.b).n(0,2).A(0,z.gY())
x=this.b
v=w.a
if(typeof v!=="number")return v.K()
u=this.e
if(typeof u!=="number")return H.r(u)
t=this.z
if(typeof t!=="number")return H.r(t)
x.sX(0,-v*u+t)
this.b.sM(0)
y=y.F(0,a.z)
this.Q=new V.O(y.a,y.b).n(0,2).A(0,z.gY())}this.a1()},"$1","gbb",4,0,0],
du:[function(a){var z,y,x
H.j(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.n()
x=this.e
if(typeof x!=="number")return H.r(x)
z.sM(y*10*x)
this.a1()}},"$1","gbc",4,0,0],
az:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a0()
if(z<y){this.ch=y
x=b.y
this.b.ay(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.au(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa4:1},j3:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.G()
this.fx=z}return z},
L:[function(a){var z
H.j(a,"$ist")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.L(null)},"a1","$1","$0","gap",0,2,1],
aE:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gcj().h(0,this.gba())
this.a.c.gcm().h(0,this.gbb())
this.a.c.gcC().h(0,this.gbc())
z=this.a.d
y=z.f
if(y==null){y=D.G()
z.f=y
z=y}else z=y
z.h(0,this.gdn())
z=this.a.d
y=z.d
if(y==null){y=D.G()
z.d=y
z=y}else z=y
z.h(0,this.gdq())
z=this.a.e
y=z.b
if(y==null){y=D.G()
z.b=y
z=y}else z=y
z.h(0,this.ge5())
z=this.a.e
y=z.d
if(y==null){y=D.G()
z.d=y
z=y}else z=y
z.h(0,this.ge4())
z=this.a.e
y=z.c
if(y==null){y=D.G()
z.c=y
z=y}else z=y
z.h(0,this.ge3())
return!0},
a6:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.O(z,y)},
ds:[function(a){a=H.Z(H.j(a,"$ist"),"$isbi")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gba",4,0,0],
dt:[function(a){var z,y,x,w,v,u,t
a=H.Z(H.j(a,"$ist"),"$isbi")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.a6(new V.O(y.a,y.b).n(0,2).A(0,z.gY()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.a6(new V.O(x.a,x.b).n(0,2).A(0,z.gY()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sX(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.F(0,a.z)
this.dx=this.a6(new V.O(y.a,y.b).n(0,2).A(0,z.gY()))}this.a1()},"$1","gbb",4,0,0],
du:[function(a){var z,y,x
H.j(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sM(-y*10*z)
this.a1()}},"$1","gbc",4,0,0],
ff:[function(a){if(H.Z(H.j(a,"$ist"),"$ise_").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gdn",4,0,0],
fg:[function(a){var z,y,x,w,v,u,t
a=H.Z(H.j(a,"$ist"),"$isbi")
if(!J.Q(this.d,a.x.b))return
z=a.c
y=a.d
x=y.F(0,a.y)
w=this.a6(new V.O(x.a,x.b).n(0,2).A(0,z.gY()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sX(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.F(0,a.z)
this.dx=this.a6(new V.O(y.a,y.b).n(0,2).A(0,z.gY()))
this.a1()},"$1","gdq",4,0,0],
fG:[function(a){H.j(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ge5",4,0,0],
fF:[function(a){var z,y,x,w,v,u,t
a=H.Z(H.j(a,"$ist"),"$isez")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.r(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.a6(new V.O(y.a,y.b).n(0,2).A(0,z.gY()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.r(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.r(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.a6(new V.O(x.a,x.b).n(0,2).A(0,z.gY()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.r(u)
t=this.cy
if(typeof t!=="number")return H.r(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.r(v)
x=this.db
if(typeof x!=="number")return H.r(x)
t.sX(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.F(0,a.z)
this.dx=this.a6(new V.O(y.a,y.b).n(0,2).A(0,z.gY()))}this.a1()},"$1","ge4",4,0,0],
fE:[function(a){var z,y,x
H.j(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.r(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.r(z)
x.sM(-y*10*z)
this.a1()}},"$1","ge3",4,0,0],
az:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a0()
if(z<y){this.dy=y
x=b.y
this.c.ay(0,x)
this.b.ay(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.au(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.n(0,V.au(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa4:1},j4:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
L:function(a){var z=this.r
if(!(z==null))z.v(a)},
aE:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.G()
z.e=y
z=y}else z=y
y=this.gdv()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.G()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
fh:[function(a){var z,y,x,w
H.j(a,"$ist")
if(!J.Q(this.b,this.a.b.c))return
H.Z(a,"$iscJ")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.n()
w=z+y*x
if(z!==w){this.d=w
z=new D.K("zoom",z,w,this,[P.v])
z.b=!0
this.L(z)}},"$1","gdv",4,0,0],
az:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.au(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa4:1}}],["","",,M,{"^":"",h9:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ak:[function(a){var z
H.j(a,"$ist")
z=this.x
if(!(z==null))z.v(a)},function(){return this.ak(null)},"fc","$1","$0","ga5",0,2,1],
fk:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aE
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga5(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gU()==null){s=new D.bE()
s.d=0
t.sU(s)}s=t.gU()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.dP(a,b,this,[z])
z.b=!0
this.ak(z)},"$2","gdA",8,0,7],
fl:[function(a,b){var z,y,x,w,v,u
z=E.aE
H.z(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga5(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null){if(v.gU()==null){u=new D.bE()
u.d=0
v.sU(u)}v.gU().S(0,x)}}z=new D.dQ(a,b,this,[z])
z.b=!0
this.ak(z)},"$2","gdB",8,0,7],
scv:function(a,b){var z,y
if(b==null)b=X.dM(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().S(0,this.ga5())
y=this.b
this.b=b
b.gt().h(0,this.ga5())
z=new D.K("target",y,this.b,this,[X.eq])
z.b=!0
this.ak(z)}},
scw:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().S(0,this.ga5())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga5())
z=new D.K("technique",y,this.c,this,[O.cS])
z.b=!0
this.ak(z)}},
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
ax:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.ct(this.c)
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
if(typeof x!=="number")return H.r(x)
u=C.c.a4(v.a*x)
if(typeof w!=="number")return H.r(w)
t=C.c.a4(v.b*w)
s=C.c.a4(v.c*x)
a.c=s
v=C.c.a4(v.d*w)
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
a.cy.cs(n)
y=$.ea
if(y==null){y=new V.P(0,0,-1)
m=y.A(0,Math.sqrt(y.D(y)))
y=new V.P(0,1,0).aF(m)
l=y.A(0,Math.sqrt(y.D(y)))
k=m.aF(l)
j=new V.P(0,0,0)
y=V.au(l.a,k.a,m.a,l.K(0).D(j),l.b,k.b,m.b,k.K(0).D(j),l.c,k.c,m.c,m.K(0).D(j),0,0,0,1)
$.ea=y
i=y}else i=y
z=z.b
if(z!=null){h=z.a
if(h!=null)i=h.n(0,i)}a.db.cs(i)
for(z=this.d.a,z=new J.ar(z,z.length,0,[H.w(z,0)]);z.w();)z.d.ay(0,a)
for(z=this.d.a,z=new J.ar(z,z.length,0,[H.w(z,0)]);z.w();)z.d.ax(a)
this.a.toString
a.cy.bA()
a.db.bA()
this.b.toString
a.cr()},
$ismc:1}}],["","",,A,{"^":"",dl:{"^":"a;a,b,c"},fK:{"^":"a;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
eo:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
em:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hR:{"^":"ei;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,a,b,0c,0d,0e,0f,0r,0x,0y"},hS:{"^":"a;a,b,c,d,e,f",
i:function(a){return this.e},
p:{
e6:function(a){var z,y,x,w,v,u,t
z=a!==C.f
y=a===C.j
x=a===C.h
w="Normal_"+C.e.i(a.a)
v=$.$get$ax()
u=$.$get$aw()
u=v.a|u.a
t=new Z.bs(u)
if(z)t=new Z.bs(u|$.$get$av().a)
if(y)t=new Z.bs(t.a|$.$get$ay().a)
return new A.hS(a,z,y,x,w,x?new Z.bs(t.a|$.$get$az().a):t)}}},ei:{"^":"cs;",
cX:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bY:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.d6(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.c(P.S("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
dZ:function(){var z,y,x,w,v,u
z=H.b([],[A.dl])
y=this.a
x=H.Y(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dl(y,v.name,u))}this.x=new A.fK(z)},
e0:function(){var z,y,x,w,v,u
z=H.b([],[A.a0])
y=this.a
x=H.Y(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.r(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.ej(v.type,v.size,v.name,u))}this.y=new A.iV(z)},
an:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.cW(z,y,b,c)
else return A.cX(z,y,b,a,c)},
di:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.eN(z,y,b,c)
else return A.cX(z,y,b,a,c)},
dj:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.eO(z,y,b,c)
else return A.cX(z,y,b,a,c)},
aQ:function(a,b){return new P.eX(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
ej:function(a,b,c,d){switch(a){case 5120:return this.an(b,c,d)
case 5121:return this.an(b,c,d)
case 5122:return this.an(b,c,d)
case 5123:return this.an(b,c,d)
case 5124:return this.an(b,c,d)
case 5125:return this.an(b,c,d)
case 5126:return new A.iN(this.a,this.r,c,d)
case 35664:return new A.iP(this.a,this.r,c,d)
case 35665:return new A.iR(this.a,this.r,c,d)
case 35666:return new A.iT(this.a,this.r,c,d)
case 35667:return new A.iQ(this.a,this.r,c,d)
case 35668:return new A.iS(this.a,this.r,c,d)
case 35669:return new A.iU(this.a,this.r,c,d)
case 35674:return new A.iX(this.a,this.r,c,d)
case 35675:return new A.eM(this.a,this.r,c,d)
case 35676:return new A.cc(this.a,this.r,c,d)
case 35678:return this.di(b,c,d)
case 35680:return this.dj(b,c,d)
case 35670:throw H.c(this.aQ("BOOL",c))
case 35671:throw H.c(this.aQ("BOOL_VEC2",c))
case 35672:throw H.c(this.aQ("BOOL_VEC3",c))
case 35673:throw H.c(this.aQ("BOOL_VEC4",c))
default:throw H.c(P.S("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},bV:{"^":"a;a,b",
i:function(a){return this.b}},a0:{"^":"a;"},iV:{"^":"a;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
a9:function(a,b){var z=this.m(0,b)
if(z==null)throw H.c(P.S("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.G()},
es:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.es("\n")}},cW:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},iQ:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},iS:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},iU:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},iO:{"^":"a0;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.f(this.c)},
p:{
cX:function(a,b,c,d,e){var z=new A.iO(a,b,c,e)
z.f=d
z.e=P.hz(d,0,!1,P.C)
return z}}},iN:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},iP:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},iR:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},iT:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},iX:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},eM:{"^":"a0;a,b,c,d",
i:function(a){return"UniformMat3: "+H.f(this.c)}},cc:{"^":"a0;a,b,c,d",
aW:function(a){var z=new Float32Array(H.ci(H.z(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},eN:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},eO:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
ch:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bx:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.P(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.P(t+h,s+f,r+g)
z.b=q
p=new V.P(t-h,s-f,r-g)
z.c=p
o=new V.P(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.ch(y)
k=F.ch(z.b)
j=F.lp(d,e,new F.kJ(z,F.ch(z.c),F.ch(z.d),k,l,c),b)
if(j!=null)a.eD(j)},
lp:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.aW,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.ek()
y=H.b([],[F.aW])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cY(null,null,new V.b8(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bq(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cY(null,null,new V.b8(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bq(d))}}z.d.e7(a+1,b+1,y)
return z},
kJ:{"^":"n:34;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bv(z.b,b).bv(z.d.bv(z.c,b),c)
z=new V.c5(y.a,y.b,y.c)
if(!J.Q(a.f,z)){a.f=z
z=a.a
if(z!=null)z.W()}a.sf5(y.A(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
x=new V.eb(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.Q(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.W()}}},
ah:{"^":"a;0a,0b,0c,0d,0e",
gbs:function(){return this.a==null||this.b==null||this.c==null},
da:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.P(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.cl())return
return v.A(0,Math.sqrt(v.D(v)))},
de:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.F(0,y)
z=new V.P(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.D(z)))
z=w.F(0,y)
z=new V.P(z.a,z.b,z.c)
z=v.aF(z.A(0,Math.sqrt(z.D(z))))
return z.A(0,Math.sqrt(z.D(z)))},
bo:function(){if(this.d!=null)return!0
var z=this.da()
if(z==null){z=this.de()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
d9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.P(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.cl())return
return v.A(0,Math.sqrt(v.D(v)))},
dd:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.F(0,u)
z=new V.P(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.K(0)}else{l=(z-q.b)/n
z=r.F(0,u)
z=new V.c5(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).F(0,x)
z=new V.P(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.K(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.D(z)))
z=k.aF(m)
z=z.A(0,Math.sqrt(z.D(z))).aF(k)
m=z.A(0,Math.sqrt(z.D(z)))}return m},
bm:function(){if(this.e!=null)return!0
var z=this.d9()
if(z==null){z=this.dd()
if(z==null)return!1}this.e=z
this.a.a.W()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var z,y
if(this.gbs())return a+"disposed"
z=a+C.b.a_(J.a_(this.a.e),0)+", "+C.b.a_(J.a_(this.b.e),0)+", "+C.b.a_(J.a_(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
G:function(){return this.u("")},
p:{
bF:function(a,b,c){var z,y,x
z=new F.ah()
y=a.a
if(y==null)H.V(P.S("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.V(P.S("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
cG:{"^":"a;0a,0b",
gbs:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){if(this.gbs())return a+"disposed"
return a+C.b.a_(J.a_(this.a.e),0)+", "+C.b.a_(J.a_(this.b.e),0)},
G:function(){return this.u("")}},
cL:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a_(J.a_(z.e),0)},
G:function(){return this.u("")}},
ej:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
eD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.T()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.eh())}this.a.T()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.T()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cL()
if(r.a==null)H.V(P.S("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.T()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.T()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cG()
s=p.a
if(s==null)H.V(P.S("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.V(P.S("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.T()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.T()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.T()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bF(p,o,l)}z=this.e
if(!(z==null))z.ah(0)},
at:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.at()||!1
if(!this.a.at())y=!1
z=this.e
if(!(z==null))z.ah(0)
return y},
ec:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$ax().a)!==0?1:0
if((y&$.$get$aw().a)!==0)++x
if((y&$.$get$av().a)!==0)++x
if((y&$.$get$ay().a)!==0)++x
if((y&$.$get$az().a)!==0)++x
if((y&$.$get$bt().a)!==0)++x
if((y&$.$get$bu().a)!==0)++x
if((y&$.$get$aY().a)!==0)++x
if((y&$.$get$aX().a)!==0)++x
w=b.gbI(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.v
t=H.b(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.b(y,[Z.dq])
for(r=0,q=0;q<x;++q){p=b.e9(q)
o=p.gbI(p)
C.a.N(s,q,new Z.dq(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].eA(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.N(t,l,m[k]);++l}}r+=o}H.z(t,"$isd",[u],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.ci(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dr(new Z.eU(34962,j),s,b)
i.b=H.b([],[Z.c_])
if(this.b.b.length!==0){u=P.C
h=H.b([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.T()
C.a.h(h,g.e)}f=Z.cZ(y,34963,H.z(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.c_(0,h.length,f))}if(this.c.b.length!==0){u=P.C
h=H.b([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.T()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.T()
C.a.h(h,g.e)}f=Z.cZ(y,34963,H.z(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.c_(1,h.length,f))}if(this.d.b.length!==0){u=P.C
h=H.b([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.T()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.T()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.T()
C.a.h(h,g.e)}f=Z.cZ(y,34963,H.z(h,"$isd",[u],"$asd"))
C.a.h(i.b,new Z.c_(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.e])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.l(z,"\n")},
a3:function(a){var z=this.e
if(!(z==null))z.v(a)},
W:function(){return this.a3(null)},
p:{
ek:function(){var z,y
z=new F.ej()
y=new F.j7(z)
y.b=!1
y.c=H.b([],[F.aW])
z.a=y
y=new F.ip(z)
y.b=H.b([],[F.cL])
z.b=y
y=new F.io(z)
y.b=H.b([],[F.cG])
z.c=y
y=new F.im(z)
y.b=H.b([],[F.ah])
z.d=y
z.e=null
return z}}},
im:{"^":"a;a,0b",
e7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.z(c,"$isd",[F.aW],"$asd")
z=H.b([],[F.ah])
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
C.a.h(z,F.bF(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bF(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bF(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bF(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
at:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bo())x=!1
return x},
bn:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bm())x=!1
return x},
i:function(a){return this.G()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
G:function(){return this.u("")}},
io:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].u(a+(""+x+". ")))}return C.a.l(z,"\n")},
G:function(){return this.u("")}},
ip:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
G:function(){return this.u("")}},
aW:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bq:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cY(this.cx,x,u,z,y,w,v,a,t)},
eh:function(){return this.bq(null)},
sf5:function(a){var z
if(!J.Q(this.z,a)){this.z=a
z=this.a
if(z!=null)z.W()}},
eA:function(a){var z,y
z=J.E(a)
if(z.q(a,$.$get$ax())){z=this.f
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aw())){z=this.r
y=[P.v]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$av())){z=this.x
y=[P.v]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$ay())){z=this.y
y=[P.v]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.q(a,$.$get$az())){z=this.z
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bt())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bu())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$aY()))return H.b([this.ch],[P.v])
else if(z.q(a,$.$get$aX())){z=this.cx
y=[P.v]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.v])},
bo:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.P(0,0,0)
this.d.J(0,new F.je(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.ah(0)}return!0},
bm:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.P(0,0,0)
this.d.J(0,new F.jd(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.ah(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var z,y,x
z=H.b([],[P.e])
C.a.h(z,C.b.a_(J.a_(this.e),0))
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
x=C.a.l(z,", ")
return a+"{"+x+"}"},
G:function(){return this.u("")},
p:{
cY:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aW()
y=new F.jc(z)
y.b=H.b([],[F.cL])
z.b=y
y=new F.jb(z)
x=[F.cG]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.j8(z)
x=[F.ah]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eR()
z.e=0
y=$.$get$ax()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aw().a)!==0?e:null
z.x=(x&$.$get$av().a)!==0?b:null
z.y=(x&$.$get$ay().a)!==0?f:null
z.z=(x&$.$get$az().a)!==0?g:null
z.Q=(x&$.$get$eS().a)!==0?c:null
z.ch=(x&$.$get$aY().a)!==0?i:0
z.cx=(x&$.$get$aX().a)!==0?a:null
return z}}},
je:{"^":"n:9;a",
$1:function(a){var z,y
H.j(a,"$isah")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
jd:{"^":"n:9;a",
$1:function(a){var z,y
H.j(a,"$isah")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
j7:{"^":"a;a,0b,0c",
T:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.c(P.S("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.W()
return!0},
gk:function(a){return this.c.length},
at:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bo()
return!0},
bn:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bm()
return!0},
ed:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.G()},
u:function(a){var z,y,x,w
this.T()
z=H.b([],[P.e])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
G:function(){return this.u("")}},
j8:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){H.k(b,{func:1,ret:-1,args:[F.ah]})
C.a.J(this.b,b)
C.a.J(this.c,new F.j9(this,b))
C.a.J(this.d,new F.ja(this,b))},
i:function(a){return this.G()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
G:function(){return this.u("")}},
j9:{"^":"n:9;a,b",
$1:function(a){H.j(a,"$isah")
if(!J.Q(a.a,this.a))this.b.$1(a)}},
ja:{"^":"n:9;a,b",
$1:function(a){var z
H.j(a,"$isah")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},
jb:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.G()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
G:function(){return this.u("")}},
jc:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
u:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
G:function(){return this.u("")}}}],["","",,O,{"^":"",hQ:{"^":"cS;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
bN:[function(a){var z
H.j(a,"$ist")
z=this.r
if(!(z==null))z.v(a)},function(){return this.bN(null)},"d4","$1","$0","gbM",0,2,1],
c3:function(a){},
c4:function(a){var z,y
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gt().S(0,this.gbM())
y=this.f
this.f=a
if(a!=null)a.gt().h(0,this.gbM())
z=new D.K("bumpyTextureCube",y,this.f,this,[T.et])
z.b=!0
this.bN(z)}},
bR:function(a,b){H.z(a,"$isd",[T.cT],"$asd")
if(b!=null)if(!C.a.P(a,b)){b.a=a.length
C.a.h(a,b)}},
eW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
if(z==null){y=A.e6(this.d)
z=y.e
x=a.fr.m(0,z)
if(x==null){w=a.a
x=new A.hR(w,z)
x.cX(w,z)
x.z=y
v=y.c
u=v?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
t=y.d
u=(t?u+"uniform mat4 txtCubeMat;\n":u)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
s=y.b
if(s)u+="attribute vec3 binmAttr;\n"
if(v)u+="attribute vec2 txt2DAttr;\n"
u=(t?u+"attribute vec3 txtCubeAttr;\n":u)+"\nvarying vec3 normalVec;\n"
if(s)u+="varying vec3 binormalVec;\n"
if(v)u+="varying vec2 txt2D;\n"
u=(t?u+"varying vec3 txtCube;\n":u)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(s)u+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(v)u+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
u=(t?u+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":u)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
r=u.charCodeAt(0)==0?u:u
u=s?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(v)u+="varying vec2 txt2D;\n"
u=(t?u+"varying vec3 txtCube;\n":u)+"\n"
s=y.a
switch(s){case C.f:break
case C.k:break
case C.j:u+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.h:u+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}u+="\nvec3 normal()\n{\n"
if(s===C.f||s===C.k)u+="   return normalize(normalVec);\n"
else{u+="   if(nullBumpTxt > 0) return normalVec;\n"
u=(s===C.j?u+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":u+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}u+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
x.c=r
x.d=u.charCodeAt(0)==0?u:u
x.e=x.bY(r,35633)
x.f=x.bY(x.d,35632)
u=w.createProgram()
x.r=u
w.attachShader(u,x.e)
w.attachShader(x.r,x.f)
w.linkProgram(x.r)
if(!H.d6(w.getProgramParameter(x.r,35714))){q=w.getProgramInfoLog(x.r)
w.deleteProgram(x.r)
H.V(P.S("Failed to link shader: "+H.f(q)))}x.dZ()
x.e0()
x.Q=x.x.m(0,"posAttr")
x.cx=x.x.m(0,"normAttr")
x.ch=x.x.m(0,"binmAttr")
x.cy=x.x.m(0,"txt2DAttr")
x.db=x.x.m(0,"txtCubeAttr")
x.dx=H.Z(x.y.a9(0,"viewObjMat"),"$iscc")
x.dy=H.Z(x.y.a9(0,"projViewObjMat"),"$iscc")
if(v)x.fr=H.Z(x.y.a9(0,"txt2DMat"),"$iseM")
if(t)x.fx=H.Z(x.y.a9(0,"txtCubeMat"),"$iscc")
switch(s){case C.f:break
case C.k:break
case C.j:x.fy=H.Z(x.y.a9(0,"bumpTxt"),"$iseN")
x.id=H.Z(x.y.a9(0,"nullBumpTxt"),"$iscW")
break
case C.h:x.go=H.Z(x.y.a9(0,"bumpTxt"),"$iseO")
x.id=H.Z(x.y.a9(0,"nullBumpTxt"),"$iscW")
break}if(z.length===0)H.V(P.S("May not cache a shader with no name."))
if(a.fr.cg(0,z))H.V(P.S('Shader cache already contains a shader by the name "'+z+'".'))
a.fr.N(0,z,x)}this.a=x
b.e=null
z=x}y=z.z
p=y.f
z=b.e
if(!(z instanceof Z.dr)){b.e=null
z=null}if(z==null||!z.d.q(0,p)){b.d.at()
z=y.b
if(z){v=b.d
u=v.e
if(!(u==null))++u.d
v.d.bn()
v.a.bn()
v=v.e
if(!(v==null))v.ah(0)}v=y.d
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.a.ed()
u=u.e
if(!(u==null))u.ah(0)}o=b.d.ec(new Z.jf(a.a),p)
o.aG($.$get$ax()).e=this.a.Q.c
o.aG($.$get$aw()).e=this.a.cx.c
if(z)o.aG($.$get$av()).e=this.a.ch.c
if(y.c)o.aG($.$get$ay()).e=this.a.cy.c
if(v)o.aG($.$get$az()).e=this.a.db.c
b.e=o}n=H.b([],[T.cT])
z=this.a
a.a.useProgram(z.r)
z.x.eo()
z=this.a
v=a.cx
if(v==null){v=a.db
v=v.gaf(v)
u=a.dx
u=v.n(0,u.gaf(u))
a.cx=u
v=u}z=z.dx
z.toString
z.aW(v.aK(0,!0))
v=this.a
z=a.ch
if(z==null){z=a.z
if(z==null){z=a.cy
z=z.gaf(z)
u=a.db
u=z.n(0,u.gaf(u))
a.z=u
z=u}u=a.dx
u=z.n(0,u.gaf(u))
a.ch=u
z=u}v=v.dy
v.toString
v.aW(z.aK(0,!0))
if(y.c){z=this.a
v=this.b
z=z.fr
z.toString
m=new Float32Array(H.ci(H.z(v.aK(0,!0),"$isd",[P.v],"$asd")))
z.a.uniformMatrix3fv(z.d,!1,m)}if(y.d){z=this.a
v=this.c
z=z.fx
z.toString
z.aW(v.aK(0,!0))}switch(y.a){case C.f:break
case C.k:break
case C.j:this.bR(n,this.e)
z=this.a.id
z.a.uniform1i(z.d,1)
break
case C.h:this.bR(n,this.f)
z=this.a
v=this.f
u=z.go
z=z.id
t=v!=null
if(!t||v.d<6)z.a.uniform1i(z.d,1)
else{u.toString
if(!t||v.d<6)u.a.uniform1i(u.d,0)
else{v=v.a
u.a.uniform1i(u.d,v)}z.a.uniform1i(z.d,0)}break}for(l=0;l<n.length;++l){z=n[l]
if(!z.c&&z.d>=6){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,z.b)}}z=b.e
z.bj(a)
z.ax(a)
z.fb(a)
for(l=0;l<n.length;++l){z=n[l]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.em()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return A.e6(this.d).e}},cS:{"^":"a;"}}],["","",,T,{"^":"",cT:{"^":"cs;"},et:{"^":"cT;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z}},iD:{"^":"a;a,0b,0c,0d,0e",
ao:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a1
W.T(z,"load",H.k(new T.iE(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dV:function(a,b,c){var z,y,x,w
b=V.df(b,2)
z=V.df(a.width,2)
y=V.df(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cw(null,null)
x.width=z
x.height=y
w=H.j(C.i.cG(x,"2d"),"$isdu")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kZ(w.getImageData(0,0,x.width,x.height))}}},iE:{"^":"n:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dV(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.S.f3(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.en()}++z.e}}}],["","",,V,{"^":"",b6:{"^":"a;",
aw:function(a,b){return!0},
i:function(a){return"all"},
$isat:1},at:{"^":"a;"},e2:{"^":"a;",
aw:["cS",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aw(0,b))return!0
return!1}],
i:["bJ",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isat:1},aj:{"^":"e2;0a",
aw:function(a,b){return!this.cS(0,b)},
i:function(a){return"!["+this.bJ(0)+"]"}},i5:{"^":"a;0a,0b",
aw:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.cM(this.a)
y=H.cM(this.b)
return z+".."+y},
$isat:1,
p:{
I:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.c(P.S("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.al(a,0)
y=C.b.al(b,0)
x=new V.i5()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},ik:{"^":"a;0a",
cW:function(a){var z,y
if(a.a.length<=0)throw H.c(P.S("May not create a SetMatcher with zero characters."))
z=new H.aS(0,0,[P.C,P.L])
for(y=new H.cH(a,a.gk(a),0,[H.ae(a,"q",0)]);y.w();)z.N(0,y.d,!0)
this.a=z},
aw:function(a,b){return this.a.cg(0,b)},
i:function(a){var z=this.a
return P.cQ(new H.dX(z,[H.w(z,0)]),0,null)},
$isat:1,
p:{
p:function(a){var z=new V.ik()
z.cW(a)
return z}}},em:{"^":"a;a,b,0c,0d",
geE:function(a){return this.b},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eA(this.a.j(0,b))
w.a=H.b([],[V.at])
w.c=!1
C.a.h(this.c,w)
return w},
ep:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aw(0,a))return w}return},
i:function(a){return this.b}},ex:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dh(this.b,"\n","\\n")
y=H.dh(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ey:{"^":"a;a,b,0c",
ag:function(a,b,c){var z,y,x
H.z(c,"$isd",[P.e],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.x)(c),++y){x=c[y]
this.c.N(0,x,b)}},
i:function(a){return this.b}},iJ:{"^":"a;0a,0b,0c",
j:function(a,b){var z=this.a.m(0,b)
if(z==null){z=new V.em(this,b)
z.c=H.b([],[V.eA])
this.a.N(0,b,z)}return z},
H:function(a){var z,y
z=this.b.m(0,a)
if(z==null){z=new V.ey(this,a)
y=P.e
z.c=new H.aS(0,0,[y,y])
this.b.N(0,a,z)}return z},
cB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.ex])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.al(a,t)
r=y.ep(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cQ(w,0,null)
throw H.c(P.S("Untokenizable string [state: "+y.geE(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cQ(w,0,null)
p=y.d
o=p.c.m(0,q)
u=new V.ex(o==null?p.b:o,q,t)}++t}}},
p:{
ca:function(){var z,y
z=new V.iJ()
y=P.e
z.a=new H.aS(0,0,[y,V.em])
z.b=new H.aS(0,0,[y,V.ey])
return z}}},eA:{"^":"e2;b,0c,0a",
i:function(a){return this.b.b+": "+this.bJ(0)}}}],["","",,X,{"^":"",dt:{"^":"a;",$ise4:1},hh:{"^":"eq;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
p:{
dM:function(a,b,c,d,e,f,g){var z,y
z=new X.hh()
y=new V.b8(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.eg(0,0,1,1)
z.r=y
return z}}},hV:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.G()
this.f=z}return z},
aB:[function(a){var z
H.j(a,"$ist")
z=this.f
if(!(z==null))z.v(a)},function(){return this.aB(null)},"fd","$1","$0","gbO",0,2,1],
saH:function(a){var z,y
if(!J.Q(this.b,a)){z=this.b
if(z!=null)z.gt().S(0,this.gbO())
y=this.b
this.b=a
if(a!=null)a.gt().h(0,this.gbO())
z=new D.K("mover",y,this.b,this,[U.a4])
z.b=!0
this.aB(z)}},
$ise4:1,
$isdt:1},eq:{"^":"a;"}}],["","",,V,{"^":"",
ln:function(a){P.iI(C.C,new V.lo(a))},
aC:{"^":"a;",
aM:function(a){this.b=new P.hk(C.D)
this.c=null
this.d=H.b([],[[P.d,W.aQ]])},
E:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.aQ]))
y=a.split("\n")
for(z=y.length,x=[W.aQ],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.D(u)
s=this.b.dh(u,0,u.length)
r=s==null?u:s
C.B.cL(t,H.dh(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaS(this.d),t)}},
cq:function(a,b){var z,y,x,w
H.z(b,"$isd",[P.e],"$asd")
this.d=H.b([],[[P.d,W.aQ]])
z=C.a.l(b,"\n")
y=this.c
if(y==null){y=this.aR()
this.c=y}for(y=y.cB(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)this.aT(y[w])}},
lo:{"^":"n:37;a",
$1:function(a){H.j(a,"$isaU")
P.dg(C.c.cA(this.a.geu(),2)+" fps")}},
fZ:{"^":"aC;a,0b,0c,0d",
aT:function(a){switch(a.a){case"Class":this.E(a.b,"#551")
break
case"Comment":this.E(a.b,"#777")
break
case"Id":this.E(a.b,"#111")
break
case"Num":this.E(a.b,"#191")
break
case"Reserved":this.E(a.b,"#119")
break
case"String":this.E(a.b,"#171")
break
case"Symbol":this.E(a.b,"#616")
break
case"Type":this.E(a.b,"#B11")
break
case"Whitespace":this.E(a.b,"#111")
break}},
aR:function(){var z,y,x,w
z=V.ca()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.p(new H.o("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.p(new H.o("_"))
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
x=V.p(new H.o("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.p(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.p(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"OpenDoubleStr")
y=V.p(new H.o('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.p(new H.o('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.p(new H.o("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.p(new H.o('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b6())
x=z.j(0,"Start").l(0,"OpenSingleStr")
y=V.p(new H.o("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.p(new H.o("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.p(new H.o("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.p(new H.o("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b6())
x=z.j(0,"Start").l(0,"Slash")
y=V.p(new H.o("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.p(new H.o("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").l(0,"EndComment")
y=V.p(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.aj()
w=[V.at]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.p(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"MLComment")
x=V.p(new H.o("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").l(0,"MLCStar")
y=V.p(new H.o("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"MLComment")
x=new V.aj()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.p(new H.o("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"EndComment")
x=V.p(new H.o("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Whitespace")
y=V.p(new H.o(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").l(0,"Whitespace")
x=V.p(new H.o(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.H("Num")
x=z.j(0,"Float")
x.d=x.a.H("Num")
x=z.j(0,"Sym")
x.d=x.a.H("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.H("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.H("String")
x=z.j(0,"EndComment")
x.d=x.a.H("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.H("Whitespace")
x=z.j(0,"Id")
y=x.a.H("Id")
x.d=y
x=[P.e]
y.ag(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.ag(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.ag(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hi:{"^":"aC;a,0b,0c,0d",
aT:function(a){switch(a.a){case"Builtin":this.E(a.b,"#411")
break
case"Comment":this.E(a.b,"#777")
break
case"Id":this.E(a.b,"#111")
break
case"Num":this.E(a.b,"#191")
break
case"Preprocess":this.E(a.b,"#737")
break
case"Reserved":this.E(a.b,"#119")
break
case"Symbol":this.E(a.b,"#611")
break
case"Type":this.E(a.b,"#171")
break
case"Whitespace":this.E(a.b,"#111")
break}},
aR:function(){var z,y,x,w
z=V.ca()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.p(new H.o("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.p(new H.o("_"))
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
x=V.p(new H.o("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.p(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.p(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Slash")
y=V.p(new H.o("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.p(new H.o("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").l(0,"Sym").a,new V.b6())
x=z.j(0,"Comment").l(0,"EndComment")
y=V.p(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.aj()
w=[V.at]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.p(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Preprocess")
x=V.p(new H.o("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"Preprocess")
y=new V.aj()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.p(new H.o("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"EndPreprocess")
y=V.p(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Whitespace")
x=V.p(new H.o(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").l(0,"Whitespace")
y=V.p(new H.o(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.H("Num")
y=z.j(0,"Float")
y.d=y.a.H("Num")
y=z.j(0,"Sym")
y.d=y.a.H("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.H("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.H("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.H("Whitespace")
y=z.j(0,"Id")
x=y.a.H("Id")
y.d=x
y=[P.e]
x.ag(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.ag(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.ag(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
hj:{"^":"aC;a,0b,0c,0d",
aT:function(a){switch(a.a){case"Attr":this.E(a.b,"#911")
this.E("=","#111")
break
case"Id":this.E(a.b,"#111")
break
case"Other":this.E(a.b,"#111")
break
case"Reserved":this.E(a.b,"#119")
break
case"String":this.E(a.b,"#171")
break
case"Symbol":this.E(a.b,"#616")
break}},
aR:function(){var z,y,x
z=V.ca()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.p(new H.o("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.p(new H.o("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").l(0,"Attr")
x=V.p(new H.o("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Sym")
x=V.p(new H.o("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").l(0,"Sym")
y=V.p(new H.o("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"OpenStr")
x=V.p(new H.o('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").l(0,"CloseStr")
y=V.p(new H.o('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").l(0,"EscStr")
x=V.p(new H.o("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").l(0,"OpenStr")
y=V.p(new H.o('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.b6())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.b6())
y=z.j(0,"Other").l(0,"Other")
x=new V.aj()
x.a=H.b([],[V.at])
C.a.h(y.a,x)
y=V.p(new H.o('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.H("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.H("String")
y=z.j(0,"Id")
x=y.a.H("Id")
y.d=x
x.ag(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
x=z.j(0,"Attr")
x.d=x.a.H("Attr")
x=z.j(0,"Other")
x.d=x.a.H("Other")
return z}},
hX:{"^":"aC;a,0b,0c,0d",
cq:function(a,b){H.z(b,"$isd",[P.e],"$asd")
this.d=H.b([],[[P.d,W.aQ]])
this.E(C.a.l(b,"\n"),"#111")},
aT:function(a){},
aR:function(){return}},
iq:{"^":"a;0a,0b",
cY:function(a,b){var z,y,x,w,v,u,t
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
W.T(z,"scroll",H.k(new V.it(x),{func:1,ret:-1,args:[t]}),!1,t)},
cb:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.z(a,"$isd",[P.e],"$asd")
this.e_()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.cB(C.a.ey(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.ff(C.u,s,C.p,!1)
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
cF:function(a){var z,y,x,w
z=new V.fZ("dart")
z.aM("dart")
y=new V.hi("glsl")
y.aM("glsl")
x=new V.hj("html")
x.aM("html")
w=C.a.eq(H.b([z,y,x],[V.aC]),new V.iu(a))
if(w!=null)return w
z=new V.hX("plain")
z.aM("plain")
return z},
c9:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.z(a2,"$isd",[P.e],"$asd")
z=H.b([],[P.C])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.db(w).aX(w,"+")){C.a.N(a2,x,C.b.aZ(w,1))
C.a.h(z,1)
y=!0}else if(C.b.aX(w,"-")){C.a.N(a2,x,C.b.aZ(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.cF(a0)
v.cq(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.ff(C.u,a,C.p,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dj(null)
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
if(x>=z.length)return H.i(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.x)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.x)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gO(w);b.w();)h.appendChild(b.gI(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
e_:function(){var z,y,x,w
if(this.b!=null)return
z=V.ca()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.p(new H.o("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.aj()
w=[V.at]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.p(new H.o("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").l(0,"BoldEnd")
x=V.p(new H.o("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Italic")
x=V.p(new H.o("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").l(0,"Italic")
x=new V.aj()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.p(new H.o("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").l(0,"ItalicEnd")
x=V.p(new H.o("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Code")
x=V.p(new H.o("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").l(0,"Code")
x=new V.aj()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.p(new H.o("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").l(0,"CodeEnd")
x=V.p(new H.o("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"LinkHead")
x=V.p(new H.o("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").l(0,"LinkTail")
x=V.p(new H.o("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").l(0,"LinkEnd")
y=V.p(new H.o("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").l(0,"LinkHead")
y=new V.aj()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.p(new H.o("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").l(0,"LinkEnd")
y=V.p(new H.o("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").l(0,"LinkTail")
y=new V.aj()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.p(new H.o("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.b6())
x=z.j(0,"Other").l(0,"Other")
y=new V.aj()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.p(new H.o("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.H("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.H("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.H("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.H("Link")
x=z.j(0,"Other")
x.d=x.a.H("Other")
this.b=z},
p:{
ir:function(a,b){var z=new V.iq()
z.cY(a,!0)
return z}}},
it:{"^":"n:12;a",
$1:function(a){P.ev(C.l,new V.is(this.a))}},
is:{"^":"n:2;a",
$0:function(){var z,y,x
z=C.c.a4(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}},
iu:{"^":"n:38;a",
$1:function(a){return H.j(a,"$isaC").a===this.a}}}],["","",,D,{"^":"",
fu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=V.ir("Test 030",!0)
y=W.cw(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.e]
z.cb(H.b(["A test of the Normal shader for dynamically rendering normal maps."],x))
z.cb(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.V(P.S("Failed to find an element with the identifier, testCanvas."))
v=E.iG(w,!0,!0,!0,!1)
u=new E.aE()
u.a=""
u.b=!0
x=E.aE
t=O.dx(x)
u.y=t
t.aV(u.geF(),u.geH())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.sbH(0,null)
u.saH(null)
s=F.ek()
F.bx(s,null,null,1,1,1,0,0,1)
F.bx(s,null,null,1,1,0,1,0,3)
F.bx(s,null,null,1,1,0,0,1,2)
F.bx(s,null,null,1,1,-1,0,0,0)
F.bx(s,null,null,1,1,0,-1,0,0)
F.bx(s,null,null,1,1,0,0,-1,3)
s.at()
u.sbH(0,s)
t=new U.dN()
t.bK(U.a4)
t.aV(t.gdw(),t.gdP())
t.e=null
t.f=V.bK()
t.r=0
r=v.r
q=new U.j3()
p=U.cy()
p.sbF(0,!0)
p.sbw(6.283185307179586)
p.sby(0)
p.sX(0,0)
p.sbx(100)
p.sM(0)
p.sbr(0.5)
q.b=p
o=q.gap()
p.gt().h(0,o)
p=U.cy()
p.sbF(0,!0)
p.sbw(6.283185307179586)
p.sby(0)
p.sX(0,0)
p.sbx(100)
p.sM(0)
p.sbr(0.5)
q.c=p
p.gt().h(0,o)
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
n=new X.an(!1,!1,!1)
m=q.d
q.d=n
p=[X.an]
o=new D.K("modifiers",m,n,q,p)
o.b=!0
q.L(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.K("invertX",o,!1,q,[P.L])
o.b=!0
q.L(o)}o=q.r
if(o!==!1){q.r=!1
o=new D.K("invertY",o,!1,q,[P.L])
o.b=!0
q.L(o)}q.aE(r)
t.h(0,q)
r=v.r
q=new U.j2()
o=U.cy()
o.sbF(0,!0)
o.sbw(6.283185307179586)
o.sby(0)
o.sX(0,0)
o.sbx(100)
o.sM(0)
o.sbr(0.2)
q.b=o
o.gt().h(0,q.gap())
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
n=new X.an(!0,!1,!1)
m=q.c
q.c=n
o=new D.K("modifiers",m,n,q,p)
o.b=!0
q.L(o)
q.aE(r)
t.h(0,q)
r=v.r
q=new U.j4()
q.c=0.01
q.d=0
q.e=0
n=new X.an(!1,!1,!1)
q.b=n
p=new D.K("modifiers",null,n,q,p)
p.b=!0
q.L(p)
q.aE(r)
t.h(0,q)
u.saH(t)
l=new O.hQ()
l.b=new V.e3(1,0,0,0,1,0,0,0,1)
l.c=V.bK()
l.d=C.f
l.c3(null)
l.c4(null)
l.d4()
l.r=null
t=v.f
r=t.a
k=r.createTexture()
r.bindTexture(34067,k)
r.texParameteri(34067,10242,10497)
r.texParameteri(34067,10243,10497)
r.texParameteri(34067,10241,9729)
r.texParameteri(34067,10240,9729)
r.bindTexture(34067,null)
j=new T.et()
j.a=0
j.b=k
j.c=!1
j.d=0
t.ao(j,k,"../resources/diceBumpMap/posx.png",34069,!1,!1)
t.ao(j,k,"../resources/diceBumpMap/negx.png",34070,!1,!1)
t.ao(j,k,"../resources/diceBumpMap/posy.png",34071,!1,!1)
t.ao(j,k,"../resources/diceBumpMap/negy.png",34072,!1,!1)
t.ao(j,k,"../resources/diceBumpMap/posz.png",34073,!1,!1)
t.ao(j,k,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(l.d!==C.h){l.d=C.h
l.c3(null)
l.a=null}l.c4(j)
i=X.dM(!0,!0,!1,null,2000,null,0)
h=new V.b8(0.5,0.5,1,1)
if(!i.a.q(0,h)){m=i.a
i.a=h
t=new D.K("color",m,h,i,[V.b8])
t.b=!0
r=i.x
if(!(r==null))r.v(t)}g=new M.h9()
x=O.dx(x)
g.d=x
x.aV(g.gdA(),g.gdB())
g.e=null
g.f=null
g.r=null
g.x=null
f=new X.hV()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saH(null)
x=f.c
if(!$.m.$2(x,1.0471975511965976)){m=f.c
f.c=1.0471975511965976
x=new D.K("fov",m,1.0471975511965976,f,[P.v])
x.b=!0
f.aB(x)}x=f.d
if(!$.m.$2(x,0.1)){m=f.d
f.d=0.1
x=new D.K("near",m,0.1,f,[P.v])
x.b=!0
f.aB(x)}x=f.e
if(!$.m.$2(x,2000)){m=f.e
f.e=2000
x=new D.K("far",m,2000,f,[P.v])
x.b=!0
f.aB(x)}x=g.a
if(x!==f){if(x!=null)x.gt().S(0,g.ga5())
m=g.a
g.a=f
f.gt().h(0,g.ga5())
x=new D.K("camera",m,g.a,g,[X.dt])
x.b=!0
g.ak(x)}g.scv(0,null)
g.scw(null)
g.scw(l)
g.scv(0,i)
g.d.h(0,u)
x=g.a
e=V.au(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
t=new U.dy()
t.a=e
x.saH(t)
x=v.d
if(x!==g){if(x!=null)x.gt().S(0,v.gbL())
v.d=g
g.gt().h(0,v.gbL())
v.d0()}x=v.z
if(x==null){x=D.G()
v.z=x}t={func:1,ret:-1,args:[D.t]}
r=H.k(new D.lg(z,l),t)
q=x.b
if(q==null){t=H.b([],[t])
x.b=t
x=t}else x=q
C.a.h(x,r)
V.ln(v)},
lg:{"^":"n:8;a,b",
$1:function(a){var z,y,x,w
H.j(a,"$ist")
z=this.a
y=this.b
x=y.a
w=[P.e]
z.c9("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.c9("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.E=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dT.prototype
return J.dS.prototype}if(typeof a=="string")return J.c1.prototype
if(a==null)return J.hr.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.bP=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.cm=function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.l2=function(a){if(typeof a=="number")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cd.prototype
return a}
J.db=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cd.prototype
return a}
J.b3=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cn(a)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.E(a).q(a,b)}
J.fA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l2(a).a0(a,b)}
J.fB=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ld(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bP(a).m(a,b)}
J.fC=function(a,b,c,d){return J.b3(a).ca(a,b,c,d)}
J.cq=function(a,b,c){return J.bP(a).ee(a,b,c)}
J.cr=function(a,b){return J.cm(a).B(a,b)}
J.fD=function(a,b){return J.cm(a).J(a,b)}
J.fE=function(a){return J.b3(a).gea(a)}
J.aM=function(a){return J.E(a).gR(a)}
J.aN=function(a){return J.cm(a).gO(a)}
J.aO=function(a){return J.bP(a).gk(a)}
J.fF=function(a){return J.b3(a).gbB(a)}
J.fG=function(a){return J.b3(a).gf2(a)}
J.di=function(a){return J.cm(a).eU(a)}
J.fH=function(a,b,c){return J.db(a).aA(a,b,c)}
J.fI=function(a){return J.db(a).fa(a)}
J.a_=function(a){return J.E(a).i(a)}
I.aK=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.bT.prototype
C.i=W.cv.prototype
C.B=W.aQ.prototype
C.E=J.l.prototype
C.a=J.aR.prototype
C.F=J.dS.prototype
C.e=J.dT.prototype
C.c=J.c0.prototype
C.b=J.c1.prototype
C.M=J.bH.prototype
C.Q=H.hM.prototype
C.R=W.hN.prototype
C.v=J.hW.prototype
C.S=P.cN.prototype
C.w=W.iB.prototype
C.o=J.cd.prototype
C.x=W.bv.prototype
C.y=W.jh.prototype
C.z=new P.hU()
C.A=new P.j6()
C.d=new P.k3()
C.f=new A.bV(0,"ColorSourceType.None")
C.k=new A.bV(1,"ColorSourceType.Solid")
C.j=new A.bV(2,"ColorSourceType.Texture2D")
C.h=new A.bV(3,"ColorSourceType.TextureCube")
C.l=new P.ba(0)
C.C=new P.ba(5e6)
C.D=new P.hl("element",!0,!1,!1,!1)
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.I=function(getTagFallback) {
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
C.J=function() {
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
C.K=function(hooks) {
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
C.L=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.N=H.b(I.aK(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.O=H.b(I.aK(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.P=H.b(I.aK([]),[P.e])
C.u=H.b(I.aK([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.m=H.b(I.aK(["bind","if","ref","repeat","syntax"]),[P.e])
C.n=H.b(I.aK(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.p=new P.j5(!1)
$.am=0
$.b7=null
$.dn=null
$.d3=!1
$.fr=null
$.fm=null
$.fx=null
$.cl=null
$.co=null
$.dc=null
$.b_=null
$.by=null
$.bz=null
$.d4=!1
$.J=C.d
$.as=null
$.cz=null
$.dK=null
$.dJ=null
$.dF=null
$.dE=null
$.dD=null
$.dC=null
$.m=V.hG()
$.ea=null
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
I.$lazy(y,x,w)}})(["dB","$get$dB",function(){return H.fq("_$dart_dartClosure")},"cD","$get$cD",function(){return H.fq("_$dart_js")},"eB","$get$eB",function(){return H.ap(H.cb({
toString:function(){return"$receiver$"}}))},"eC","$get$eC",function(){return H.ap(H.cb({$method$:null,
toString:function(){return"$receiver$"}}))},"eD","$get$eD",function(){return H.ap(H.cb(null))},"eE","$get$eE",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eI","$get$eI",function(){return H.ap(H.cb(void 0))},"eJ","$get$eJ",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eG","$get$eG",function(){return H.ap(H.eH(null))},"eF","$get$eF",function(){return H.ap(function(){try{null.$method$}catch(z){return z.message}}())},"eL","$get$eL",function(){return H.ap(H.eH(void 0))},"eK","$get$eK",function(){return H.ap(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d0","$get$d0",function(){return P.ji()},"bA","$get$bA",function(){return[]},"fe","$get$fe",function(){return P.i9("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dz","$get$dz",function(){return{}},"f_","$get$f_",function(){return P.dZ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"d1","$get$d1",function(){return P.dY(P.e,P.bG)},"eT","$get$eT",function(){return Z.ac(0)},"eR","$get$eR",function(){return Z.ac(511)},"ax","$get$ax",function(){return Z.ac(1)},"aw","$get$aw",function(){return Z.ac(2)},"av","$get$av",function(){return Z.ac(4)},"ay","$get$ay",function(){return Z.ac(8)},"az","$get$az",function(){return Z.ac(16)},"bt","$get$bt",function(){return Z.ac(32)},"bu","$get$bu",function(){return Z.ac(64)},"eS","$get$eS",function(){return Z.ac(96)},"aY","$get$aY",function(){return Z.ac(128)},"aX","$get$aX",function(){return Z.ac(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,args:[D.t]},{func:1,ret:-1,opt:[D.t]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.ai]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[P.C,[P.h,E.aE]]},{func:1,ret:P.F,args:[D.t]},{func:1,ret:P.F,args:[F.ah]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[W.a1]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.e,args:[P.C]},{func:1,ret:P.L,args:[W.y]},{func:1,args:[,]},{func:1,ret:W.y},{func:1,ret:P.L,args:[W.N,P.e,P.e,W.bN]},{func:1,ret:P.L,args:[W.ao]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:-1,args:[P.C,[P.h,U.a4]]},{func:1,ret:P.v},{func:1,ret:-1,args:[W.bg]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.F,args:[P.U]},{func:1,ret:P.L,args:[P.v,P.v]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:W.N,args:[W.y]},{func:1,ret:-1,args:[P.a],opt:[P.ak]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,P.e]},{func:1,ret:P.F,args:[F.aW,P.v,P.v]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:P.F,args:[P.aU]},{func:1,ret:P.L,args:[V.aC]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,args:[P.e]},{func:1,ret:-1,args:[W.y,W.y]}]
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
if(x==y)H.lq(d||a)
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
Isolate.aK=a.aK
Isolate.d9=a.d9
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
if(typeof dartMainRunner==="function")dartMainRunner(D.fu,[])
else D.fu([])})})()
//# sourceMappingURL=test.dart.js.map
