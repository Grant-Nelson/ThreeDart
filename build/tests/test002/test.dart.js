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
b6.$isd=b5
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isq)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var d=supportsDirectProtoAccess&&b2!="d"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="u"){processStatics(init.statics[b2]=b3.u,b4)
delete b3.u}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dn(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dq=function(){}
var dart=[["","",,H,{"^":"",p_:{"^":"d;a"}}],["","",,J,{"^":"",
O:function(a){return void 0},
dv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cA:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dt==null){H.mR()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c1("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cR()]
if(v!=null)return v
v=H.mX(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.$get$cR(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
q:{"^":"d;",
D:function(a,b){return a===b},
gU:function(a){return H.bD(a)},
i:["ds",function(a){return"Instance of '"+H.b7(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
ih:{"^":"q;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isQ:1},
ea:{"^":"q;",
D:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isD:1},
cS:{"^":"q;",
gU:function(a){return 0},
i:["dt",function(a){return String(a)}]},
iS:{"^":"cS;"},
c2:{"^":"cS;"},
bX:{"^":"cS;",
i:function(a){var z=a[$.$get$dU()]
if(z==null)return this.dt(a)
return"JavaScript function for "+H.k(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscO:1},
b3:{"^":"q;$ti",
h:function(a,b){H.x(b,H.v(a,0))
if(!!a.fixed$length)H.H(P.y("add"))
a.push(b)},
fJ:function(a,b){if(!!a.fixed$length)H.H(P.y("removeAt"))
if(b<0||b>=a.length)throw H.a(P.c_(b,null,null))
return a.splice(b,1)[0]},
M:function(a,b){var z
if(!!a.fixed$length)H.H(P.y("remove"))
for(z=0;z<a.length;++z)if(J.E(a[z],b)){a.splice(z,1)
return!0}return!1},
v:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b_(a))}},
a3:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.k(z,y,H.k(a[y]))
return z.join(b)},
fi:function(a,b,c,d){var z,y,x
H.x(b,d)
H.c(c,{func:1,ret:d,args:[d,H.v(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b_(a))}return y},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bi:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a3(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a3(c,b,a.length,"end",null))
if(b===c)return H.j([],[H.v(a,0)])
return H.j(a.slice(b,c),[H.v(a,0)])},
gav:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.ie())},
at:function(a,b,c,d){var z
H.x(d,H.v(a,0))
if(!!a.immutable$list)H.H(P.y("fill range"))
P.aK(b,c,a.length,null,null,null)
for(z=b;z.I(0,c);z=z.t(0,1))a[z]=d},
i:function(a){return P.cP(a,"[","]")},
ga2:function(a){return new J.aH(a,a.length,0,[H.v(a,0)])},
gU:function(a){return H.bD(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.H(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ca(b,"newLength",null))
if(b<0)throw H.a(P.a3(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b>=a.length||b<0)throw H.a(H.aE(a,b))
return a[b]},
k:function(a,b,c){H.B(b)
H.x(c,H.v(a,0))
if(!!a.immutable$list)H.H(P.y("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b>=a.length||b<0)throw H.a(H.aE(a,b))
a[b]=c},
$isl:1,
$ish:1,
u:{
ig:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.ca(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a3(a,0,4294967295,"length",null))
return J.e8(new Array(a),b)},
e8:function(a,b){return J.bx(H.j(a,[b]))},
bx:function(a){H.bR(a)
a.fixed$length=Array
return a},
oY:[function(a,b){return J.fY(H.fP(a,"$isak"),H.fP(b,"$isak"))},"$2","mo",8,0,54]}},
oZ:{"^":"b3;$ti"},
aH:{"^":"d;a,b,c,0d,$ti",
gR:function(a){return this.d},
L:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.I(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bV:{"^":"q;",
aF:function(a,b){var z
H.fO(b)
if(typeof b!=="number")throw H.a(H.a8(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gba(b)
if(this.gba(a)===z)return 0
if(this.gba(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gba:function(a){return a===0?1/a<0:a<0},
b9:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.y(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.y(""+a+".round()"))},
de:function(a,b){var z
if(b>20)throw H.a(P.a3(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gba(a))return"-"+z
return z},
aY:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a3(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.H(P.y("Unexpected toString result: "+z))
x=J.ar(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.m("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
m:function(a,b){if(typeof b!=="number")throw H.a(H.a8(b))
return a*b},
b_:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
du:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cB(a,b)},
ar:function(a,b){return(a|0)===a?a/b|0:this.cB(a,b)},
cB:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.y("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aD:function(a,b){var z
if(a>0)z=this.cz(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eK:function(a,b){if(b<0)throw H.a(H.a8(b))
return this.cz(a,b)},
cz:function(a,b){return b>31?0:a>>>b},
I:function(a,b){if(typeof b!=="number")throw H.a(H.a8(b))
return a<b},
a7:function(a,b){if(typeof b!=="number")throw H.a(H.a8(b))
return a>b},
$isak:1,
$asak:function(){return[P.V]},
$isr:1,
$isV:1},
e9:{"^":"bV;",$ism:1},
ii:{"^":"bV;"},
bW:{"^":"q;",
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aE(a,b))
if(b<0)throw H.a(H.aE(a,b))
if(b>=a.length)H.H(H.aE(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.a(H.aE(a,b))
return a.charCodeAt(b)},
t:function(a,b){H.M(b)
if(typeof b!=="string")throw H.a(P.ca(b,null,null))
return a+b},
aL:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.H(H.a8(b))
c=P.aK(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.H(H.a8(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aa:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.H(H.a8(c))
if(typeof c!=="number")return c.I()
if(c<0||c>a.length)throw H.a(P.a3(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a9:function(a,b){return this.aa(a,b,0)},
C:function(a,b,c){H.B(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.H(H.a8(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.I()
if(b<0)throw H.a(P.c_(b,null,null))
if(b>c)throw H.a(P.c_(b,null,null))
if(c>a.length)throw H.a(P.c_(c,null,null))
return a.substring(b,c)},
aO:function(a,b){return this.C(a,b,null)},
m:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fA:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.m(c,z)+a},
ad:function(a,b){return this.fA(a,b," ")},
cV:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a3(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
cU:function(a,b){return this.cV(a,b,0)},
f6:function(a,b,c){if(c>a.length)throw H.a(P.a3(c,0,a.length,null,null))
return H.o0(a,b,c)},
aF:function(a,b){var z
H.M(b)
if(typeof b!=="string")throw H.a(H.a8(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isak:1,
$asak:function(){return[P.i]},
$isel:1,
$isi:1}}],["","",,H,{"^":"",
cB:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
ie:function(){return new P.js("No element")},
jr:function(a,b,c){var z
H.w(a,"$ish",[c],"$ash")
H.c(b,{func:1,ret:P.m,args:[c,c]})
z=J.an(a)
if(typeof z!=="number")return z.H()
H.c0(a,0,z-1,b,c)},
c0:function(a,b,c,d,e){H.w(a,"$ish",[e],"$ash")
H.c(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.jq(a,b,c,d,e)
else H.jp(a,b,c,d,e)},
jq:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$ish",[e],"$ash")
H.c(d,{func:1,ret:P.m,args:[e,e]})
for(z=b+1,y=J.ar(a);z<=c;++z){x=y.j(a,z)
w=z
while(!0){if(!(w>b&&J.ax(d.$2(y.j(a,w-1),x),0)))break
v=w-1
y.k(a,w,y.j(a,v))
w=v}y.k(a,w,x)}},
jp:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$ish",[a2],"$ash")
H.c(a1,{func:1,ret:P.m,args:[a2,a2]})
z=C.c.ar(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.ar(b+a0,2)
v=w-z
u=w+z
t=J.ar(a)
s=t.j(a,y)
r=t.j(a,v)
q=t.j(a,w)
p=t.j(a,u)
o=t.j(a,x)
if(J.ax(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.ax(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.ax(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.ax(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ax(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.ax(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.ax(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.ax(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.ax(a1.$2(p,o),0)){n=o
o=p
p=n}t.k(a,y,s)
t.k(a,w,q)
t.k(a,x,o)
t.k(a,v,t.j(a,b))
t.k(a,u,t.j(a,a0))
m=b+1
l=a0-1
if(J.E(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.j(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.I()
if(i<0){if(k!==m){t.k(a,k,t.j(a,m))
t.k(a,m,j)}++m}else for(;!0;){i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.a7()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.k(a,k,t.j(a,m))
g=m+1
t.k(a,m,t.j(a,l))
t.k(a,l,j)
l=h
m=g
break}else{t.k(a,k,t.j(a,l))
t.k(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.j(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.I()
if(e<0){if(k!==m){t.k(a,k,t.j(a,m))
t.k(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.a7()
if(d>0)for(;!0;){i=a1.$2(t.j(a,l),p)
if(typeof i!=="number")return i.a7()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.I()
h=l-1
if(i<0){t.k(a,k,t.j(a,m))
g=m+1
t.k(a,m,t.j(a,l))
t.k(a,l,j)
m=g}else{t.k(a,k,t.j(a,l))
t.k(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.k(a,b,t.j(a,c))
t.k(a,c,r)
c=l+1
t.k(a,a0,t.j(a,c))
t.k(a,c,p)
H.c0(a,b,m-2,a1,a2)
H.c0(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.E(a1.$2(t.j(a,m),r),0);)++m
for(;J.E(a1.$2(t.j(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.j(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.k(a,k,t.j(a,m))
t.k(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.j(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.I()
h=l-1
if(i<0){t.k(a,k,t.j(a,m))
g=m+1
t.k(a,m,t.j(a,l))
t.k(a,l,j)
m=g}else{t.k(a,k,t.j(a,l))
t.k(a,l,j)}l=h
break}}H.c0(a,m,l,a1,a2)}else H.c0(a,m,l,a1,a2)},
hf:{"^":"jZ;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.Z(this.a,b)},
$ascp:function(){return[P.m]},
$asu:function(){return[P.m]},
$asl:function(){return[P.m]},
$ash:function(){return[P.m]}},
hv:{"^":"l;"},
ix:{"^":"d;a,b,c,0d,$ti",
gR:function(a){return this.d},
L:function(){var z,y,x,w
z=this.a
y=J.ar(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b_(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.K(z,w);++this.c
return!0}},
iF:{"^":"l;a,b,$ti",
ga2:function(a){return new H.iG(J.bs(this.a),this.b,this.$ti)},
gl:function(a){return J.an(this.a)},
K:function(a,b){return this.b.$1(J.cG(this.a,b))},
$asl:function(a,b){return[b]}},
iG:{"^":"cQ;0a,b,c,$ti",
L:function(){var z=this.b
if(z.L()){this.a=this.c.$1(z.gR(z))
return!0}this.a=null
return!1},
gR:function(a){return this.a},
$ascQ:function(a,b){return[b]}},
kv:{"^":"l;a,b,$ti",
ga2:function(a){return new H.kw(J.bs(this.a),this.b,this.$ti)}},
kw:{"^":"cQ;a,b,$ti",
L:function(){var z,y
for(z=this.a,y=this.b;z.L();)if(y.$1(z.gR(z)))return!0
return!1},
gR:function(a){var z=this.a
return z.gR(z)}},
ce:{"^":"d;$ti"},
cp:{"^":"d;$ti",
k:function(a,b,c){H.B(b)
H.x(c,H.aF(this,"cp",0))
throw H.a(P.y("Cannot modify an unmodifiable list"))},
at:function(a,b,c,d){H.x(d,H.aF(this,"cp",0))
throw H.a(P.y("Cannot modify an unmodifiable list"))}},
jZ:{"^":"cg+cp;"}}],["","",,H,{"^":"",
hj:function(){throw H.a(P.y("Cannot modify unmodifiable Map"))},
mK:function(a){return init.types[H.B(a)]},
fI:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isF},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.a(H.a8(a))
return z},
bD:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
j0:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.M(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a3(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.J(w,u)|32)>x)return}return parseInt(a,b)},
b7:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.C||!!J.O(a).$isc2){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.J(w,0)===36)w=C.b.aO(w,1)
r=H.du(H.bR(H.aW(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iT:function(){if(!!self.location)return self.location.href
return},
en:function(a){var z,y,x,w,v
H.bR(a)
z=J.an(a)
if(typeof z!=="number")return z.dm()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
j1:function(a){var z,y,x,w
z=H.j([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.I)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a8(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.c.aD(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a8(w))}return H.en(z)},
eo:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a8(x))
if(x<0)throw H.a(H.a8(x))
if(x>65535)return H.j1(a)}return H.en(a)},
j2:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.dm()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cj:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.aD(z,10))>>>0,56320|z&1023)}}throw H.a(P.a3(a,0,1114111,null,null))},
aj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j_:function(a){return a.b?H.aj(a).getUTCFullYear()+0:H.aj(a).getFullYear()+0},
iY:function(a){return a.b?H.aj(a).getUTCMonth()+1:H.aj(a).getMonth()+1},
iU:function(a){return a.b?H.aj(a).getUTCDate()+0:H.aj(a).getDate()+0},
iV:function(a){return a.b?H.aj(a).getUTCHours()+0:H.aj(a).getHours()+0},
iX:function(a){return a.b?H.aj(a).getUTCMinutes()+0:H.aj(a).getMinutes()+0},
iZ:function(a){return a.b?H.aj(a).getUTCSeconds()+0:H.aj(a).getSeconds()+0},
iW:function(a){return a.b?H.aj(a).getUTCMilliseconds()+0:H.aj(a).getMilliseconds()+0},
n:function(a){throw H.a(H.a8(a))},
e:function(a,b){if(a==null)J.an(a)
throw H.a(H.aE(a,b))},
aE:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.B(J.an(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.c_(b,"index",null)},
mF:function(a,b,c){if(a>c)return new P.ck(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ck(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
a8:function(a){return new P.aG(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.ek()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fS})
z.name=""}else z.toString=H.fS
return z},
fS:function(){return J.ab(this.dartException)},
H:function(a){throw H.a(a)},
I:function(a){throw H.a(P.b_(a))},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.o4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aD(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cT(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ej(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eE()
u=$.$get$eF()
t=$.$get$eG()
s=$.$get$eH()
r=$.$get$eL()
q=$.$get$eM()
p=$.$get$eJ()
$.$get$eI()
o=$.$get$eO()
n=$.$get$eN()
m=v.ac(y)
if(m!=null)return z.$1(H.cT(H.M(y),m))
else{m=u.ac(y)
if(m!=null){m.method="call"
return z.$1(H.cT(H.M(y),m))}else{m=t.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=r.ac(y)
if(m==null){m=q.ac(y)
if(m==null){m=p.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=o.ac(y)
if(m==null){m=n.ac(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ej(H.M(y),m))}}return z.$1(new H.jY(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ev()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ev()
return a},
bq:function(a){var z
if(a==null)return new H.fc(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fc(a)},
mJ:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.k(0,a[y],a[x])}return b},
mT:function(a,b,c,d,e,f){H.f(a,"$iscO")
switch(H.B(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.T("Unsupported number of arguments for wrapped closure"))},
bp:function(a,b){var z
H.B(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mT)
a.$identity=z
return z},
he:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.O(d).$ish){z.$reflectionInfo=d
x=H.j8(z).r}else x=d
w=e?Object.create(new H.jt().constructor.prototype):Object.create(new H.cI(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ay
if(typeof u!=="number")return u.t()
$.ay=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dP(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mK,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dI:H.cJ
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dP(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hb:function(a,b,c,d){var z=H.cJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dP:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hd(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hb(y,!w,z,b)
if(y===0){w=$.ay
if(typeof w!=="number")return w.t()
$.ay=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bt
if(v==null){v=H.cb("self")
$.bt=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ay
if(typeof w!=="number")return w.t()
$.ay=w+1
t+=w
w="return function("+t+"){return this."
v=$.bt
if(v==null){v=H.cb("self")
$.bt=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
hc:function(a,b,c,d){var z,y
z=H.cJ
y=H.dI
switch(b?-1:a){case 0:throw H.a(H.ji("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hd:function(a,b){var z,y,x,w,v,u,t,s
z=$.bt
if(z==null){z=H.cb("self")
$.bt=z}y=$.dH
if(y==null){y=H.cb("receiver")
$.dH=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hc(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.ay
if(typeof y!=="number")return y.t()
$.ay=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.ay
if(typeof y!=="number")return y.t()
$.ay=y+1
return new Function(z+y+"}")()},
dn:function(a,b,c,d,e,f,g){var z,y
z=J.bx(H.bR(b))
H.B(c)
y=!!J.O(d).$ish?J.bx(d):d
return H.he(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aw(a,"String"))},
mH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"double"))},
fO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aw(a,"num"))},
fy:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aw(a,"bool"))},
B:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aw(a,"int"))},
dx:function(a,b){throw H.a(H.aw(a,H.M(b).substring(3)))},
nS:function(a,b){var z=J.ar(b)
throw H.a(H.h8(a,z.C(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.dx(a,b)},
ag:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.nS(a,b)},
fP:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.O(a)[b])return a
H.dx(a,b)},
bR:function(a){if(a==null)return a
if(!!J.O(a).$ish)return a
throw H.a(H.aw(a,"List"))},
fM:function(a,b){if(a==null)return a
if(!!J.O(a).$ish)return a
if(J.O(a)[b])return a
H.dx(a,b)},
fB:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.B(z)]
else return a.$S()}return},
c3:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fB(J.O(a))
if(z==null)return!1
y=H.fH(z,null,b,null)
return y},
c:function(a,b){var z,y
if(a==null)return a
if($.dj)return a
$.dj=!0
try{if(H.c3(a,b))return a
z=H.c6(b)
y=H.aw(a,z)
throw H.a(y)}finally{$.dj=!1}},
dr:function(a,b){if(a!=null&&!H.dm(a,b))H.H(H.aw(a,H.c6(b)))
return a},
ft:function(a){var z
if(a instanceof H.b){z=H.fB(J.O(a))
if(z!=null)return H.c6(z)
return"Closure"}return H.b7(a)},
o1:function(a){throw H.a(new P.hn(H.M(a)))},
fE:function(a){return init.getIsolateTag(a)},
j:function(a,b){a.$ti=b
return a},
aW:function(a){if(a==null)return
return a.$ti},
q5:function(a,b,c){return H.br(a["$as"+H.k(c)],H.aW(b))},
aV:function(a,b,c,d){var z
H.M(c)
H.B(d)
z=H.br(a["$as"+H.k(c)],H.aW(b))
return z==null?null:z[d]},
aF:function(a,b,c){var z
H.M(b)
H.B(c)
z=H.br(a["$as"+H.k(b)],H.aW(a))
return z==null?null:z[c]},
v:function(a,b){var z
H.B(b)
z=H.aW(a)
return z==null?null:z[b]},
c6:function(a){var z=H.aX(a,null)
return z},
aX:function(a,b){var z,y
H.w(b,"$ish",[P.i],"$ash")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.du(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.B(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.k(b[y])}if('func' in a)return H.mn(a,b)
if('futureOr' in a)return"FutureOr<"+H.aX("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$ish",z,"$ash")
if("bounds" in a){y=a.bounds
if(b==null){b=H.j([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.t(t,b[r])
q=y[u]
if(q!=null&&q!==P.d)t+=" extends "+H.aX(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aX(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aX(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aX(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mI(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.aX(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
du:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$ish",[P.i],"$ash")
if(a==null)return""
z=new P.aB("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aX(u,c)}v="<"+z.i(0)+">"
return v},
br:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bo:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aW(a)
y=J.O(a)
if(y[b]==null)return!1
return H.fw(H.br(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.M(b)
H.bR(c)
H.M(d)
if(a==null)return a
z=H.bo(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.du(c,0,null)
throw H.a(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fw:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.as(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.as(a[y],b,c[y],d))return!1
return!0},
q3:function(a,b,c){return a.apply(b,H.br(J.O(b)["$as"+H.k(c)],H.aW(b)))},
fJ:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="d"||a.builtin$cls==="D"||a===-1||a===-2||H.fJ(z)}return!1},
dm:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="d"||b.builtin$cls==="D"||b===-1||b===-2||H.fJ(b)
return z}z=b==null||b===-1||b.builtin$cls==="d"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dm(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c3(a,b)}y=J.O(a).constructor
x=H.aW(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.as(y,null,b,null)
return z},
x:function(a,b){if(a!=null&&!H.dm(a,b))throw H.a(H.aw(a,H.c6(b)))
return a},
as:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="d"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="d"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.as(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.fH(a,b,c,d)
if('func' in a)return c.builtin$cls==="cO"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.as("type" in a?a.type:null,b,x,d)
else if(H.as(a,b,x,d))return!0
else{if(!('$is'+"bv" in y.prototype))return!1
w=y.prototype["$as"+"bv"]
v=H.br(w,z?a.slice(1):null)
return H.as(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c6(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fw(H.br(r,z),b,u,d)},
fH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.nQ(m,b,l,d)},
nQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.as(c[w],d,a[w],b))return!1}return!0},
q4:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
mX:function(a){var z,y,x,w,v,u
z=H.M($.fF.$1(a))
y=$.cy[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.fv.$2(a,z))
if(z!=null){y=$.cy[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cC[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cD(x)
$.cy[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cC[z]=x
return x}if(v==="-"){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fQ(a,x)
if(v==="*")throw H.a(P.c1(z))
if(init.leafTags[z]===true){u=H.cD(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fQ(a,x)},
fQ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dv(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cD:function(a){return J.dv(a,!1,null,!!a.$isF)},
nP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cD(z)
else return J.dv(z,c,null,null)},
mR:function(){if(!0===$.dt)return
$.dt=!0
H.mS()},
mS:function(){var z,y,x,w,v,u,t,s
$.cy=Object.create(null)
$.cC=Object.create(null)
H.mN()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fR.$1(v)
if(u!=null){t=H.nP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mN:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.bn(C.E,H.bn(C.J,H.bn(C.o,H.bn(C.o,H.bn(C.I,H.bn(C.F,H.bn(C.G(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fF=new H.mO(v)
$.fv=new H.mP(u)
$.fR=new H.mQ(t)},
bn:function(a,b){return a(b)||b},
o0:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hi:{"^":"d;$ti",
i:function(a){return P.cU(this)},
k:function(a,b,c){H.x(b,H.v(this,0))
H.x(c,H.v(this,1))
return H.hj()},
$isK:1},
hk:{"^":"hi;a,b,c,$ti",
gl:function(a){return this.a},
bK:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bK(0,b))return
return this.co(b)},
co:function(a){return this.b[H.M(a)]},
v:function(a,b){var z,y,x,w,v
z=H.v(this,1)
H.c(b,{func:1,ret:-1,args:[H.v(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.co(v),z))}}},
j7:{"^":"d;a,b,c,d,e,f,r,0x",u:{
j8:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bx(z)
y=z[0]
x=z[1]
return new H.j7(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jH:{"^":"d;a,b,c,d,e,f",
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
u:{
aC:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.j([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eK:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iP:{"^":"a7;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
u:{
ej:function(a,b){return new H.iP(a,b==null?null:b.method)}}},
il:{"^":"a7;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
u:{
cT:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.il(a,y,z?null:b.receiver)}}},
jY:{"^":"a7;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
o4:{"^":"b:25;a",
$1:function(a){if(!!J.O(a).$isa7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fc:{"^":"d;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isav:1},
b:{"^":"d;",
i:function(a){return"Closure '"+H.b7(this).trim()+"'"},
gdk:function(){return this},
$iscO:1,
gdk:function(){return this}},
eA:{"^":"b;"},
jt:{"^":"eA;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cI:{"^":"eA;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cI))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bD(this.a)
else y=typeof z!=="object"?J.aY(z):H.bD(z)
return(y^H.bD(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.b7(z)+"'")},
u:{
cJ:function(a){return a.a},
dI:function(a){return a.c},
cb:function(a){var z,y,x,w,v
z=new H.cI("self","target","receiver","name")
y=J.bx(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jI:{"^":"a7;a",
i:function(a){return this.a},
u:{
aw:function(a,b){return new H.jI("TypeError: "+H.k(P.cd(a))+": type '"+H.ft(a)+"' is not a subtype of type '"+b+"'")}}},
h7:{"^":"a7;a",
i:function(a){return this.a},
u:{
h8:function(a,b){return new H.h7("CastError: "+H.k(P.cd(a))+": type '"+H.ft(a)+"' is not a subtype of type '"+b+"'")}}},
jh:{"^":"a7;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
u:{
ji:function(a){return new H.jh(a)}}},
bY:{"^":"iC;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gau:function(a){return new H.iq(this,[H.v(this,0)])},
bK:function(a,b){var z=this.b
if(z==null)return!1
return this.dR(z,b)},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b1(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b1(w,b)
x=y==null?null:y.b
return x}else return this.fm(b)},
fm:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cq(z,this.cW(a))
x=this.cX(y,a)
if(x<0)return
return y[x].b},
k:function(a,b,c){var z,y
H.x(b,H.v(this,0))
H.x(c,H.v(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bs()
this.b=z}this.cc(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bs()
this.c=y}this.cc(y,b,c)}else this.fn(b,c)},
fn:function(a,b){var z,y,x,w
H.x(a,H.v(this,0))
H.x(b,H.v(this,1))
z=this.d
if(z==null){z=this.bs()
this.d=z}y=this.cW(a)
x=this.cq(z,y)
if(x==null)this.by(z,y,[this.bt(a,b)])
else{w=this.cX(x,a)
if(w>=0)x[w].b=b
else x.push(this.bt(a,b))}},
v:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b_(this))
z=z.c}},
cc:function(a,b,c){var z
H.x(b,H.v(this,0))
H.x(c,H.v(this,1))
z=this.b1(a,b)
if(z==null)this.by(a,b,this.bt(b,c))
else z.b=c},
e5:function(){this.r=this.r+1&67108863},
bt:function(a,b){var z,y
z=new H.ip(H.x(a,H.v(this,0)),H.x(b,H.v(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e5()
return z},
cW:function(a){return J.aY(a)&0x3ffffff},
cX:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].a,b))return y
return-1},
i:function(a){return P.cU(this)},
b1:function(a,b){return a[b]},
cq:function(a,b){return a[b]},
by:function(a,b,c){a[b]=c},
dU:function(a,b){delete a[b]},
dR:function(a,b){return this.b1(a,b)!=null},
bs:function(){var z=Object.create(null)
this.by(z,"<non-identifier-key>",z)
this.dU(z,"<non-identifier-key>")
return z},
$isee:1},
ip:{"^":"d;a,b,0c,0d"},
iq:{"^":"hv;a,$ti",
gl:function(a){return this.a.a},
ga2:function(a){var z,y
z=this.a
y=new H.ir(z,z.r,this.$ti)
y.c=z.e
return y}},
ir:{"^":"d;a,b,0c,0d,$ti",
gR:function(a){return this.d},
L:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b_(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mO:{"^":"b:25;a",
$1:function(a){return this.a(a)}},
mP:{"^":"b:45;a",
$2:function(a,b){return this.a(a,b)}},
mQ:{"^":"b:50;a",
$1:function(a){return this.a(H.M(a))}},
ij:{"^":"d;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isel:1,
$isj9:1,
u:{
ik:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a1("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mI:function(a){return J.e8(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
ct:function(a){return a},
iL:function(a){return new Int8Array(a)},
aD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aE(b,a))},
mh:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mF(a,b,c))
return b},
ei:{"^":"q;",$isei:1,"%":"ArrayBuffer"},
cY:{"^":"q;",$iscY:1,"%":"DataView;ArrayBufferView;cX|f6|f7|iM|f8|f9|aT"},
cX:{"^":"cY;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dq},
iM:{"^":"f7;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
k:function(a,b,c){H.B(b)
H.mH(c)
H.aD(b,a,a.length)
a[b]=c},
$asce:function(){return[P.r]},
$asu:function(){return[P.r]},
$isl:1,
$asl:function(){return[P.r]},
$ish:1,
$ash:function(){return[P.r]},
"%":"Float32Array|Float64Array"},
aT:{"^":"f9;",
k:function(a,b,c){H.B(b)
H.B(c)
H.aD(b,a,a.length)
a[b]=c},
$asce:function(){return[P.m]},
$asu:function(){return[P.m]},
$isl:1,
$asl:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]}},
pa:{"^":"aT;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int16Array"},
pb:{"^":"aT;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int32Array"},
pc:{"^":"aT;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Int8Array"},
pd:{"^":"aT;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
pe:{"^":"aT;",
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
pf:{"^":"aT;",
gl:function(a){return a.length},
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
cZ:{"^":"aT;",
gl:function(a){return a.length},
j:function(a,b){H.aD(b,a,a.length)
return a[b]},
bi:function(a,b,c){return new Uint8Array(a.subarray(b,H.mh(b,c,a.length)))},
$iscZ:1,
$isS:1,
"%":";Uint8Array"},
f6:{"^":"cX+u;"},
f7:{"^":"f6+ce;"},
f8:{"^":"cX+u;"},
f9:{"^":"f8+ce;"}}],["","",,P,{"^":"",
ky:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mv()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bp(new P.kA(z),1)).observe(y,{childList:true})
return new P.kz(z,y,x)}else if(self.setImmediate!=null)return P.mw()
return P.mx()},
pT:[function(a){self.scheduleImmediate(H.bp(new P.kB(H.c(a,{func:1,ret:-1})),0))},"$1","mv",4,0,15],
pU:[function(a){self.setImmediate(H.bp(new P.kC(H.c(a,{func:1,ret:-1})),0))},"$1","mw",4,0,15],
pV:[function(a){H.c(a,{func:1,ret:-1})
P.lB(0,a)},"$1","mx",4,0,15],
eC:function(a,b){var z
H.c(b,{func:1,ret:-1,args:[P.be]})
z=C.c.ar(a.a,1000)
return P.lC(z<0?0:z,b)},
mr:function(a,b){if(H.c3(a,{func:1,args:[P.d,P.av]}))return b.fI(a,null,P.d,P.av)
if(H.c3(a,{func:1,args:[P.d]}))return H.c(a,{func:1,ret:null,args:[P.d]})
throw H.a(P.ca(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mq:function(){var z,y
for(;z=$.bm,z!=null;){$.bP=null
y=z.b
$.bm=y
if(y==null)$.bO=null
z.a.$0()}},
q2:[function(){$.dk=!0
try{P.mq()}finally{$.bP=null
$.dk=!1
if($.bm!=null)$.$get$dd().$1(P.fx())}},"$0","fx",0,0,8],
fs:function(a){var z=new P.f_(H.c(a,{func:1,ret:-1}))
if($.bm==null){$.bO=z
$.bm=z
if(!$.dk)$.$get$dd().$1(P.fx())}else{$.bO.b=z
$.bO=z}},
mu:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
z=$.bm
if(z==null){P.fs(a)
$.bP=$.bO
return}y=new P.f_(a)
x=$.bP
if(x==null){y.b=z
$.bP=y
$.bm=y}else{y.b=x.b
x.b=y
$.bP=y
if(y.b==null)$.bO=y}},
nT:function(a){var z,y
z={func:1,ret:-1}
H.c(a,z)
y=$.Y
if(C.d===y){P.cv(null,null,C.d,a)
return}y.toString
P.cv(null,null,y,H.c(y.cH(a),z))},
jF:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.be]}
H.c(b,z)
y=$.Y
if(y===C.d){y.toString
return P.eC(a,b)}x=y.cI(b,P.be)
$.Y.toString
return P.eC(a,H.c(x,z))},
cu:function(a,b,c,d,e){var z={}
z.a=d
P.mu(new P.ms(z,e))},
fo:function(a,b,c,d,e){var z,y
H.c(d,{func:1,ret:e})
y=$.Y
if(y===c)return d.$0()
$.Y=c
z=y
try{y=d.$0()
return y}finally{$.Y=z}},
fp:function(a,b,c,d,e,f,g){var z,y
H.c(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.Y
if(y===c)return d.$1(e)
$.Y=c
z=y
try{y=d.$1(e)
return y}finally{$.Y=z}},
mt:function(a,b,c,d,e,f,g,h,i){var z,y
H.c(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.Y
if(y===c)return d.$2(e,f)
$.Y=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Y=z}},
cv:function(a,b,c,d){var z
H.c(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.cH(d):c.f0(d,-1)
P.fs(d)},
kA:{"^":"b:23;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kz:{"^":"b:44;a,b,c",
$1:function(a){var z,y
this.a.a=H.c(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kB:{"^":"b:0;a",
$0:function(){this.a.$0()}},
kC:{"^":"b:0;a",
$0:function(){this.a.$0()}},
ff:{"^":"d;a,0b,c",
dD:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bp(new P.lE(this,b),0),a)
else throw H.a(P.y("`setTimeout()` not found."))},
dE:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bp(new P.lD(this,a,Date.now(),b),0),a)
else throw H.a(P.y("Periodic timer."))},
$isbe:1,
u:{
lB:function(a,b){var z=new P.ff(!0,0)
z.dD(a,b)
return z},
lC:function(a,b){var z=new P.ff(!1,0)
z.dE(a,b)
return z}}},
lE:{"^":"b:8;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lD:{"^":"b:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.du(w,x)}z.c=y
this.d.$1(z)}},
bl:{"^":"d;0a,b,c,d,e,$ti",
fq:function(a){if(this.c!==6)return!0
return this.b.b.bZ(H.c(this.d,{func:1,ret:P.Q,args:[P.d]}),a.a,P.Q,P.d)},
fl:function(a){var z,y,x,w
z=this.e
y=P.d
x={futureOr:1,type:H.v(this,1)}
w=this.b.b
if(H.c3(z,{func:1,args:[P.d,P.av]}))return H.dr(w.fP(z,a.a,a.b,null,y,P.av),x)
else return H.dr(w.bZ(H.c(z,{func:1,args:[P.d]}),a.a,null,y),x)}},
aO:{"^":"d;cA:a<,b,0eD:c<,$ti",
dd:function(a,b,c){var z,y,x,w
z=H.v(this,0)
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Y
if(y!==C.d){y.toString
H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mr(b,y)}H.c(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aO(0,$.Y,[c])
w=b==null?1:3
this.cd(new P.bl(x,w,a,b,[z,c]))
return x},
fS:function(a,b){return this.dd(a,null,b)},
cd:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbl")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaO")
z=y.a
if(z<4){y.cd(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cv(null,null,z,H.c(new P.kR(this,a),{func:1,ret:-1}))}},
ct:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbl")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaO")
y=u.a
if(y<4){u.ct(a)
return}this.a=y
this.c=u.c}z.a=this.b3(a)
y=this.b
y.toString
P.cv(null,null,y,H.c(new P.kW(z,this),{func:1,ret:-1}))}},
bv:function(){var z=H.f(this.c,"$isbl")
this.c=null
return this.b3(z)},
b3:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ck:function(a){var z,y,x,w
z=H.v(this,0)
H.dr(a,{futureOr:1,type:z})
y=this.$ti
x=H.bo(a,"$isbv",y,"$asbv")
if(x){z=H.bo(a,"$isaO",y,null)
if(z)P.f2(a,this)
else P.kS(a,this)}else{w=this.bv()
H.x(a,z)
this.a=4
this.c=a
P.bJ(this,w)}},
bl:[function(a,b){var z
H.f(b,"$isav")
z=this.bv()
this.a=8
this.c=new P.ao(a,b)
P.bJ(this,z)},function(a){return this.bl(a,null)},"h1","$2","$1","gdQ",4,2,55],
$isbv:1,
u:{
kS:function(a,b){var z,y,x
b.a=1
try{a.dd(new P.kT(b),new P.kU(b),null)}catch(x){z=H.au(x)
y=H.bq(x)
P.nT(new P.kV(b,z,y))}},
f2:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaO")
if(z>=4){y=b.bv()
b.a=a.a
b.c=a.c
P.bJ(b,y)}else{y=H.f(b.c,"$isbl")
b.a=2
b.c=a
a.ct(y)}},
bJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isao")
y=y.b
u=v.a
t=v.b
y.toString
P.cu(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bJ(z.a,b)}y=z.a
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
if(p){H.f(r,"$isao")
y=y.b
u=r.a
t=r.b
y.toString
P.cu(null,null,y,u,t)
return}o=$.Y
if(o==null?q!=null:o!==q)$.Y=q
else o=null
y=b.c
if(y===8)new P.kZ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kY(x,b,r).$0()}else if((y&2)!==0)new P.kX(z,x,b).$0()
if(o!=null)$.Y=o
y=x.b
if(!!J.O(y).$isbv){if(y.a>=4){n=H.f(t.c,"$isbl")
t.c=null
b=t.b3(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f2(y,t)
return}}m=b.b
n=H.f(m.c,"$isbl")
m.c=null
b=m.b3(n)
y=x.a
u=x.b
if(!y){H.x(u,H.v(m,0))
m.a=4
m.c=u}else{H.f(u,"$isao")
m.a=8
m.c=u}z.a=m
y=m}}}},
kR:{"^":"b:0;a,b",
$0:function(){P.bJ(this.a,this.b)}},
kW:{"^":"b:0;a,b",
$0:function(){P.bJ(this.b,this.a.a)}},
kT:{"^":"b:23;a",
$1:function(a){var z=this.a
z.a=0
z.ck(a)}},
kU:{"^":"b:52;a",
$2:function(a,b){this.a.bl(a,H.f(b,"$isav"))},
$1:function(a){return this.$2(a,null)}},
kV:{"^":"b:0;a,b,c",
$0:function(){this.a.bl(this.b,this.c)}},
kZ:{"^":"b:8;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.da(H.c(w.d,{func:1}),null)}catch(v){y=H.au(v)
x=H.bq(v)
if(this.d){w=H.f(this.a.a.c,"$isao").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isao")
else u.b=new P.ao(y,x)
u.a=!0
return}if(!!J.O(z).$isbv){if(z instanceof P.aO&&z.gcA()>=4){if(z.gcA()===8){w=this.b
w.b=H.f(z.geD(),"$isao")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fS(new P.l_(t),null)
w.a=!1}}},
l_:{"^":"b:56;a",
$1:function(a){return this.a}},
kY:{"^":"b:8;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.v(x,0)
v=H.x(this.c,w)
u=H.v(x,1)
this.a.b=x.b.b.bZ(H.c(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.au(t)
y=H.bq(t)
x=this.a
x.b=new P.ao(z,y)
x.a=!0}}},
kX:{"^":"b:8;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isao")
w=this.c
if(w.fq(z)&&w.e!=null){v=this.b
v.b=w.fl(z)
v.a=!1}}catch(u){y=H.au(u)
x=H.bq(u)
w=H.f(this.a.a.c,"$isao")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ao(y,x)
s.a=!0}}},
f_:{"^":"d;a,0b"},
d3:{"^":"d;$ti",
gl:function(a){var z,y
z={}
y=new P.aO(0,$.Y,[P.m])
z.a=0
this.fp(new P.jw(z,this),!0,new P.jx(z,y),y.gdQ())
return y}},
jw:{"^":"b;a,b",
$1:function(a){H.x(a,H.aF(this.b,"d3",0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.aF(this.b,"d3",0)]}}},
jx:{"^":"b:0;a,b",
$0:function(){this.b.ck(this.a.a)}},
ew:{"^":"d;$ti"},
jv:{"^":"d;"},
be:{"^":"d;"},
ao:{"^":"d;a,b",
i:function(a){return H.k(this.a)},
$isa7:1},
m5:{"^":"d;",$ispS:1},
ms:{"^":"b:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ek()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lj:{"^":"m5;",
fQ:function(a){var z,y,x
H.c(a,{func:1,ret:-1})
try{if(C.d===$.Y){a.$0()
return}P.fo(null,null,this,a,-1)}catch(x){z=H.au(x)
y=H.bq(x)
P.cu(null,null,this,z,H.f(y,"$isav"))}},
fR:function(a,b,c){var z,y,x
H.c(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.d===$.Y){a.$1(b)
return}P.fp(null,null,this,a,b,-1,c)}catch(x){z=H.au(x)
y=H.bq(x)
P.cu(null,null,this,z,H.f(y,"$isav"))}},
f0:function(a,b){return new P.ll(this,H.c(a,{func:1,ret:b}),b)},
cH:function(a){return new P.lk(this,H.c(a,{func:1,ret:-1}))},
cI:function(a,b){return new P.lm(this,H.c(a,{func:1,ret:-1,args:[b]}),b)},
da:function(a,b){H.c(a,{func:1,ret:b})
if($.Y===C.d)return a.$0()
return P.fo(null,null,this,a,b)},
bZ:function(a,b,c,d){H.c(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.Y===C.d)return a.$1(b)
return P.fp(null,null,this,a,b,c,d)},
fP:function(a,b,c,d,e,f){H.c(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.Y===C.d)return a.$2(b,c)
return P.mt(null,null,this,a,b,c,d,e,f)},
fI:function(a,b,c,d){return H.c(a,{func:1,ret:b,args:[c,d]})}},
ll:{"^":"b;a,b,c",
$0:function(){return this.a.da(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lk:{"^":"b:8;a,b",
$0:function(){return this.a.fQ(this.b)}},
lm:{"^":"b;a,b,c",
$1:function(a){var z=this.c
return this.a.fR(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
is:function(a,b,c,d,e){return new H.bY(0,0,[d,e])},
it:function(a,b,c){H.bR(a)
return H.w(H.mJ(a,new H.bY(0,0,[b,c])),"$isee",[b,c],"$asee")},
ef:function(a,b){return new H.bY(0,0,[a,b])},
iw:function(a,b,c,d){return new P.l5(0,0,[d])},
id:function(a,b,c){var z,y
if(P.dl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bQ()
C.a.h(y,a)
try{P.mp(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.ex(b,H.fM(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cP:function(a,b,c){var z,y,x
if(P.dl(a))return b+"..."+c
z=new P.aB(b)
y=$.$get$bQ()
C.a.h(y,a)
try{x=z
x.a=P.ex(x.gaz(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaz()+c
y=z.gaz()
return y.charCodeAt(0)==0?y:y},
dl:function(a){var z,y
for(z=0;y=$.$get$bQ(),z<y.length;++z)if(a===y[z])return!0
return!1},
mp:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga2(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.L())return
w=H.k(z.gR(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.L()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gR(z);++x
if(!z.L()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR(z);++x
for(;z.L();t=s,s=r){r=z.gR(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
iu:function(a,b,c){var z=P.is(null,null,null,b,c)
a.v(0,new P.iv(z,b,c))
return z},
cU:function(a){var z,y,x
z={}
if(P.dl(a))return"{...}"
y=new P.aB("")
try{C.a.h($.$get$bQ(),a)
x=y
x.a=x.gaz()+"{"
z.a=!0
J.dB(a,new P.iD(z,y))
z=y
z.a=z.gaz()+"}"}finally{z=$.$get$bQ()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaz()
return z.charCodeAt(0)==0?z:z},
l5:{"^":"l0;a,0b,0c,0d,0e,0f,r,$ti",
ga2:function(a){return P.f5(this,this.r,H.v(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.x(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.df()
this.b=z}return this.ci(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.df()
this.c=y}return this.ci(y,b)}else return this.dG(0,b)},
dG:function(a,b){var z,y,x
H.x(b,H.v(this,0))
z=this.d
if(z==null){z=P.df()
this.d=z}y=this.cl(b)
x=z[y]
if(x==null)z[y]=[this.bk(b)]
else{if(this.cp(x,b)>=0)return!1
x.push(this.bk(b))}return!0},
M:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cu(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cu(this.c,b)
else return this.ex(0,b)},
ex:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e1(z,b)
x=this.cp(y,b)
if(x<0)return!1
this.cC(y.splice(x,1)[0])
return!0},
ci:function(a,b){H.x(b,H.v(this,0))
if(H.f(a[b],"$isde")!=null)return!1
a[b]=this.bk(b)
return!0},
cu:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isde")
if(z==null)return!1
this.cC(z)
delete a[b]
return!0},
cj:function(){this.r=this.r+1&67108863},
bk:function(a){var z,y
z=new P.de(H.x(a,H.v(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cj()
return z},
cC:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cj()},
cl:function(a){return J.aY(a)&0x3ffffff},
e1:function(a,b){return a[this.cl(b)]},
cp:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].a,b))return y
return-1},
u:{
df:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
de:{"^":"d;a,0b,0c"},
l6:{"^":"d;a,b,0c,0d,$ti",
gR:function(a){return this.d},
L:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b_(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.x(z.a,H.v(this,0))
this.c=z.b
return!0}}},
u:{
f5:function(a,b,c){var z=new P.l6(a,b,[c])
z.c=a.e
return z}}},
l0:{"^":"jj;"},
iv:{"^":"b:12;a,b,c",
$2:function(a,b){this.a.k(0,H.x(a,this.b),H.x(b,this.c))}},
cg:{"^":"l7;",$isl:1,$ish:1},
u:{"^":"d;$ti",
ga2:function(a){return new H.ix(a,this.gl(a),0,[H.aV(this,a,"u",0)])},
K:function(a,b){return this.j(a,b)},
fT:function(a,b){var z,y,x
z=H.j([],[H.aV(this,a,"u",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.k(z,y,this.j(a,y));++y}return z},
c0:function(a){return this.fT(a,!0)},
at:function(a,b,c,d){var z
H.x(d,H.aV(this,a,"u",0))
P.aK(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.k(a,z,d)},
i:function(a){return P.cP(a,"[","]")}},
iC:{"^":"al;"},
iD:{"^":"b:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
al:{"^":"d;$ti",
v:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[H.aV(this,a,"al",0),H.aV(this,a,"al",1)]})
for(z=J.bs(this.gau(a));z.L();){y=z.gR(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.an(this.gau(a))},
i:function(a){return P.cU(a)},
$isK:1},
lJ:{"^":"d;$ti",
k:function(a,b,c){H.x(b,H.v(this,0))
H.x(c,H.v(this,1))
throw H.a(P.y("Cannot modify unmodifiable map"))}},
iE:{"^":"d;$ti",
j:function(a,b){return J.dA(this.a,b)},
k:function(a,b,c){J.cE(this.a,H.x(b,H.v(this,0)),H.x(c,H.v(this,1)))},
v:function(a,b){J.dB(this.a,H.c(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gl:function(a){return J.an(this.a)},
i:function(a){return J.ab(this.a)},
$isK:1},
eQ:{"^":"lK;a,$ti"},
jk:{"^":"d;$ti",
i:function(a){return P.cP(this,"{","}")},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dC("index"))
if(b<0)H.H(P.a3(b,0,null,"index",null))
for(z=P.f5(this,this.r,H.v(this,0)),y=0;z.L();){x=z.d
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
$isl:1},
jj:{"^":"jk;"},
l7:{"^":"d+u;"},
lK:{"^":"iE+lJ;$ti"}}],["","",,P,{"^":"",h4:{"^":"bS;a",
fs:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aK(c,d,b.length,null,null,null)
z=$.$get$f0()
if(typeof d!=="number")return H.n(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.J(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cB(C.b.J(b,s))
o=H.cB(C.b.J(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aB("")
l=w.a+=C.b.C(b,x,y)
w.a=l+H.cj(r)
x=s
continue}}throw H.a(P.a1("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.C(b,x,d)
k=l.length
if(v>=0)P.dF(b,u,d,v,t,k)
else{j=C.c.b_(k-1,4)+1
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aL(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dF(b,u,d,v,t,i)
else{j=C.c.b_(i,4)
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aL(b,d,d,j===2?"==":"=")}return b},
$asbS:function(){return[[P.h,P.m],P.i]},
u:{
dF:function(a,b,c,d,e,f){if(C.c.b_(f,4)!==0)throw H.a(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a1("Invalid base64 padding, more than two '=' characters",a,b))}}},h5:{"^":"bu;a",
$asbu:function(){return[[P.h,P.m],P.i]}},bS:{"^":"d;$ti"},bu:{"^":"jv;$ti"},hx:{"^":"bS;",
$asbS:function(){return[P.i,[P.h,P.m]]}},kb:{"^":"hx;a",
gfd:function(){return C.A}},ki:{"^":"bu;",
aS:function(a,b,c){var z,y,x,w
z=a.length
P.aK(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m4(0,0,x)
if(w.e_(a,b,z)!==z)w.cD(J.fX(a,z-1),0)
return C.P.bi(x,0,w.b)},
bL:function(a){return this.aS(a,0,null)},
$asbu:function(){return[P.i,[P.h,P.m]]}},m4:{"^":"d;a,b,c",
cD:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.e(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.e(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.e(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.e(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.e(z,y)
z[y]=128|a&63
return!1}},
e_:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.J(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cD(w,C.b.J(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.e(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.e(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.e(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.e(z,v)
z[v]=128|w&63}}return x}},kc:{"^":"bu;a",
aS:function(a,b,c){var z,y,x,w,v
H.w(a,"$ish",[P.m],"$ash")
z=P.kd(!1,a,b,c)
if(z!=null)return z
y=J.an(a)
P.aK(b,c,y,null,null,null)
x=new P.aB("")
w=new P.m1(!1,x,!0,0,0,0)
w.aS(a,b,y)
w.fh(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
bL:function(a){return this.aS(a,0,null)},
$asbu:function(){return[[P.h,P.m],P.i]},
u:{
kd:function(a,b,c,d){H.w(b,"$ish",[P.m],"$ash")
if(b instanceof Uint8Array)return P.ke(!1,b,c,d)
return},
ke:function(a,b,c,d){var z,y,x
z=$.$get$eU()
if(z==null)return
y=0===c
if(y&&!0)return P.d9(z,b)
x=b.length
d=P.aK(c,d,x,null,null,null)
if(y&&d===x)return P.d9(z,b)
return P.d9(z,b.subarray(c,d))},
d9:function(a,b){if(P.kg(b))return
return P.kh(a,b)},
kh:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.au(y)}return},
kg:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kf:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.au(y)}return}}},m1:{"^":"d;a,b,c,d,e,f",
fh:function(a,b,c){var z
H.w(b,"$ish",[P.m],"$ash")
if(this.e>0){z=P.a1("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$ish",[P.m],"$ash")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m3(c)
v=new P.m2(this,b,c,a)
$label0$0:for(u=J.ar(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.be()
if((r&192)!==128){q=P.a1("Bad UTF-8 encoding 0x"+C.c.aY(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.q,q)
if(z<=C.q[q]){q=P.a1("Overlong encoding of 0x"+C.c.aY(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a1("Character outside valid Unicode range: 0x"+C.c.aY(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cj(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.a7()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.I()
if(r<0){m=P.a1("Negative UTF-8 code unit: -0x"+C.c.aY(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a1("Bad UTF-8 encoding 0x"+C.c.aY(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m3:{"^":"b:43;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$ish",[P.m],"$ash")
z=this.a
for(y=J.ar(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.be()
if((w&127)!==w)return x-b}return z-b}},m2:{"^":"b:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ey(this.d,a,b)}}}],["","",,P,{"^":"",
c5:function(a,b,c){var z
H.c(b,{func:1,ret:P.m,args:[P.i]})
z=H.j0(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a1(a,null,null))},
hz:function(a){var z=J.O(a)
if(!!z.$isb)return z.i(a)
return"Instance of '"+H.b7(a)+"'"},
iy:function(a,b,c,d){var z,y
H.x(b,d)
z=J.ig(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.k(z,y,b)
return H.w(z,"$ish",[d],"$ash")},
iz:function(a,b,c){var z,y,x
z=[c]
y=H.j([],z)
for(x=a.ga2(a);x.L();)C.a.h(y,H.x(x.gR(x),c))
if(b)return y
return H.w(J.bx(y),"$ish",z,"$ash")},
ey:function(a,b,c){var z,y
z=P.m
H.w(a,"$isl",[z],"$asl")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb3",[z],"$asb3")
y=a.length
c=P.aK(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.I()
z=c<y}else z=!0
return H.eo(z?C.a.bi(a,b,c):a)}if(!!J.O(a).$iscZ)return H.j2(a,b,P.aK(b,c,a.length,null,null,null))
return P.jy(a,b,c)},
jy:function(a,b,c){var z,y,x,w
H.w(a,"$isl",[P.m],"$asl")
if(b<0)throw H.a(P.a3(b,0,J.an(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a3(c,b,J.an(a),null,null))
y=J.bs(a)
for(x=0;x<b;++x)if(!y.L())throw H.a(P.a3(b,0,x,null,null))
w=[]
if(z)for(;y.L();)w.push(y.gR(y))
else for(x=b;x<c;++x){if(!y.L())throw H.a(P.a3(c,b,x,null,null))
w.push(y.gR(y))}return H.eo(w)},
ja:function(a,b,c){return new H.ij(a,H.ik(a,!1,!0,!1))},
d8:function(){var z=H.iT()
if(z!=null)return P.k3(z,0,null)
throw H.a(P.y("'Uri.base' is not supported"))},
cd:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hz(a)},
T:function(a){return new P.f1(a)},
iA:function(a,b,c,d){var z,y
H.c(b,{func:1,ret:d,args:[P.m]})
z=H.j([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.k(z,y,b.$1(y))
return z},
dw:function(a){H.nR(a)},
k3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.J(a,b+4)^58)*3|C.b.J(a,b)^100|C.b.J(a,b+1)^97|C.b.J(a,b+2)^116|C.b.J(a,b+3)^97)>>>0
if(y===0)return P.eR(b>0||c<c?C.b.C(a,b,c):a,5,null).gdh()
else if(y===32)return P.eR(C.b.C(a,z,c),0,null).gdh()}x=new Array(8)
x.fixed$length=Array
w=H.j(x,[P.m])
C.a.k(w,0,0)
x=b-1
C.a.k(w,1,x)
C.a.k(w,2,x)
C.a.k(w,7,x)
C.a.k(w,3,b)
C.a.k(w,4,b)
C.a.k(w,5,c)
C.a.k(w,6,c)
if(P.fq(a,b,c,0,w)>=14)C.a.k(w,7,c)
v=w[1]
if(typeof v!=="number")return v.c4()
if(v>=b)if(P.fq(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.t()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.I()
if(typeof r!=="number")return H.n(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.aa(a,"..",s)))n=r>s+2&&C.b.aa(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aa(a,"file",b)){if(u<=b){if(!C.b.aa(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.C(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aL(a,s,r,"/");++r;++q;++c}else{a=C.b.C(a,b,s)+"/"+C.b.C(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aa(a,"http",b)){if(x&&t+3===s&&C.b.aa(a,"80",t+1))if(b===0&&!0){a=C.b.aL(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.C(a,b,t)+C.b.C(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.aa(a,"https",b)){if(x&&t+4===s&&C.b.aa(a,"443",t+1))if(b===0&&!0){a=C.b.aL(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.C(a,b,t)+C.b.C(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.C(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lo(a,v,u,t,s,r,q,o)}return P.lL(a,b,c,v,u,t,s,r,q,o)},
eT:function(a,b){var z=P.i
return C.a.fi(H.j(a.split("&"),[z]),P.ef(z,z),new P.k6(b),[P.K,P.i,P.i])},
k1:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k2(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c5(C.b.C(a,v,w),null,null)
if(typeof s!=="number")return s.a7()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c5(C.b.C(a,v,c),null,null)
if(typeof s!=="number")return s.a7()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
eS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k4(a)
y=new P.k5(z,a)
if(a.length<2)z.$1("address is too short")
x=H.j([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Z(a,w)
if(s===58){if(w===b){++w
if(C.b.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gav(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k1(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.c.aD(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
mi:function(){var z,y,x,w,v
z=P.iA(22,new P.mk(),!0,P.S)
y=new P.mj(z)
x=new P.ml()
w=new P.mm()
v=H.f(y.$2(0,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isS")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isS")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isS"),"]",5)
v=H.f(y.$2(9,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isS"),"az",21)
v=H.f(y.$2(21,245),"$isS")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fq:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$ish",[P.m],"$ash")
z=$.$get$fr()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.J(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.k(e,v>>>5,y)}return d},
Q:{"^":"d;"},
"+bool":0,
ah:{"^":"d;a,b",
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.ah))return!1
return this.a===b.a&&this.b===b.b},
aF:function(a,b){return C.c.aF(this.a,H.f(b,"$isah").a)},
gU:function(a){var z=this.a
return(z^C.c.aD(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ho(H.j_(this))
y=P.bT(H.iY(this))
x=P.bT(H.iU(this))
w=P.bT(H.iV(this))
v=P.bT(H.iX(this))
u=P.bT(H.iZ(this))
t=P.hp(H.iW(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isak:1,
$asak:function(){return[P.ah]},
u:{
ho:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hp:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bT:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"V;"},
"+double":0,
aI:{"^":"d;a",
m:function(a,b){return new P.aI(C.c.ae(this.a*b))},
I:function(a,b){return C.c.I(this.a,H.f(b,"$isaI").a)},
a7:function(a,b){return C.c.a7(this.a,H.f(b,"$isaI").a)},
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.aI))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
aF:function(a,b){return C.c.aF(this.a,H.f(b,"$isaI").a)},
i:function(a){var z,y,x,w,v
z=new P.hu()
y=this.a
if(y<0)return"-"+new P.aI(0-y).i(0)
x=z.$1(C.c.ar(y,6e7)%60)
w=z.$1(C.c.ar(y,1e6)%60)
v=new P.ht().$1(y%1e6)
return""+C.c.ar(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
$isak:1,
$asak:function(){return[P.aI]},
u:{
e_:function(a,b,c,d,e,f){return new P.aI(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ht:{"^":"b:22;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hu:{"^":"b:22;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a7:{"^":"d;"},
ek:{"^":"a7;",
i:function(a){return"Throw of null."}},
aG:{"^":"a7;a,b,c,d",
gbn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbm:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbn()+y+x
if(!this.a)return w
v=this.gbm()
u=P.cd(this.b)
return w+v+": "+H.k(u)},
u:{
c9:function(a){return new P.aG(!1,null,null,a)},
ca:function(a,b,c){return new P.aG(!0,a,b,c)},
dC:function(a){return new P.aG(!1,null,a,"Must not be null")}}},
ck:{"^":"aG;e,f,a,b,c,d",
gbn:function(){return"RangeError"},
gbm:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
u:{
c_:function(a,b,c){return new P.ck(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.ck(b,c,!0,a,d,"Invalid value")},
aK:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.a(P.a3(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.a(P.a3(b,a,c,"end",f))
return b}return c}}},
hI:{"^":"aG;e,l:f>,a,b,c,d",
gbn:function(){return"RangeError"},
gbm:function(){if(J.fT(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
u:{
U:function(a,b,c,d,e){var z=H.B(e!=null?e:J.an(b))
return new P.hI(b,z,!0,a,c,"Index out of range")}}},
k_:{"^":"a7;a",
i:function(a){return"Unsupported operation: "+this.a},
u:{
y:function(a){return new P.k_(a)}}},
jX:{"^":"a7;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
u:{
c1:function(a){return new P.jX(a)}}},
js:{"^":"a7;a",
i:function(a){return"Bad state: "+this.a}},
hh:{"^":"a7;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cd(z))+"."},
u:{
b_:function(a){return new P.hh(a)}}},
iQ:{"^":"d;",
i:function(a){return"Out of Memory"},
$isa7:1},
ev:{"^":"d;",
i:function(a){return"Stack Overflow"},
$isa7:1},
hn:{"^":"a7;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f1:{"^":"d;a",
i:function(a){return"Exception: "+this.a}},
hF:{"^":"d;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.C(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.J(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.Z(w,s)
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
m=""}l=C.b.C(w,o,p)
return y+n+l+m+"\n"+C.b.m(" ",x-o+n.length)+"^\n"},
u:{
a1:function(a,b,c){return new P.hF(a,b,c)}}},
m:{"^":"V;"},
"+int":0,
l:{"^":"d;$ti",
gl:function(a){var z,y
z=this.ga2(this)
for(y=0;z.L();)++y
return y},
K:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dC("index"))
if(b<0)H.H(P.a3(b,0,null,"index",null))
for(z=this.ga2(this),y=0;z.L();){x=z.gR(z)
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
i:function(a){return P.id(this,"(",")")}},
cQ:{"^":"d;$ti"},
h:{"^":"d;$ti",$isl:1},
"+List":0,
K:{"^":"d;$ti"},
D:{"^":"d;",
gU:function(a){return P.d.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
V:{"^":"d;",$isak:1,
$asak:function(){return[P.V]}},
"+num":0,
d:{"^":";",
D:function(a,b){return this===b},
gU:function(a){return H.bD(this)},
i:function(a){return"Instance of '"+H.b7(this)+"'"},
toString:function(){return this.i(this)}},
av:{"^":"d;"},
i:{"^":"d;",$isak:1,
$asak:function(){return[P.i]},
$isel:1},
"+String":0,
aB:{"^":"d;az:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispD:1,
u:{
ex:function(a,b,c){var z=J.bs(b)
if(!z.L())return a
if(c.length===0){do a+=H.k(z.gR(z))
while(z.L())}else{a+=H.k(z.gR(z))
for(;z.L();)a=a+c+H.k(z.gR(z))}return a}}},
k6:{"^":"b:41;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isK",[z,z],"$asK")
H.M(b)
y=J.ar(b).cU(b,"=")
if(y===-1){if(b!=="")J.cE(a,P.dh(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.C(b,0,y)
w=C.b.aO(b,y+1)
z=this.a
J.cE(a,P.dh(x,0,x.length,z,!0),P.dh(w,0,w.length,z,!0))}return a}},
k2:{"^":"b:40;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv4 address, "+a,this.a,b))}},
k4:{"^":"b:39;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k5:{"^":"b:38;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c5(C.b.C(this.b,a,b),null,16)
if(typeof z!=="number")return z.I()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cr:{"^":"d;bf:a<,b,c,d,d5:e>,f,r,0x,0y,0z,0Q,0ch",
gdi:function(){return this.b},
gbO:function(a){var z=this.c
if(z==null)return""
if(C.b.a9(z,"["))return C.b.C(z,1,z.length-1)
return z},
gbb:function(a){var z=this.d
if(z==null)return P.fg(this.a)
return z},
gbV:function(a){var z=this.f
return z==null?"":z},
gcP:function(){var z=this.r
return z==null?"":z},
bX:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isK",[P.i,null],"$asK")
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
if(x&&!C.b.a9(d,"/"))d="/"+d
g=P.dg(g,0,0,h)
return new P.cr(i,j,c,f,d,g,this.r)},
d9:function(a,b){return this.bX(a,null,null,null,null,null,null,b,null,null)},
gbc:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.eQ(P.eT(z==null?"":z,C.f),[y,y])
this.Q=y
z=y}return z},
gcQ:function(){return this.c!=null},
gcT:function(){return this.f!=null},
gcR:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.k(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.k(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.k(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
D:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.O(b)
if(!!z.$isd7){y=this.a
x=b.gbf()
if(y==null?x==null:y===x)if(this.c!=null===b.gcQ()){y=this.b
x=b.gdi()
if(y==null?x==null:y===x){y=this.gbO(this)
x=z.gbO(b)
if(y==null?x==null:y===x){y=this.gbb(this)
x=z.gbb(b)
if(y==null?x==null:y===x)if(this.e===z.gd5(b)){y=this.f
x=y==null
if(!x===b.gcT()){if(x)y=""
if(y===z.gbV(b)){z=this.r
y=z==null
if(!y===b.gcR()){if(y)z=""
z=z===b.gcP()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gU:function(a){var z=this.z
if(z==null){z=C.b.gU(this.i(0))
this.z=z}return z},
$isd7:1,
u:{
di:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$ish",[P.m],"$ash")
if(c===C.f){z=$.$get$fl().b
if(typeof b!=="string")H.H(H.a8(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.aF(c,"bS",0))
y=c.gfd().bL(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cj(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lL:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lW(a,b,d)
else{if(d===b)P.bL(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lX(a,z,e-1):""
x=P.lQ(a,e,f,!1)
if(typeof f!=="number")return f.t()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.lT(P.c5(C.b.C(a,w,g),new P.lM(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lR(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.I()
t=h<i?P.dg(a,h+1,i,null):null
return new P.cr(j,y,x,v,u,t,i<c?P.lP(a,i+1,c):null)},
fg:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bL:function(a,b,c){throw H.a(P.a1(c,a,b))},
lT:function(a,b){if(a!=null&&a===P.fg(b))return
return a},
lQ:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.H()
z=c-1
if(C.b.Z(a,z)!==93)P.bL(a,b,"Missing end `]` to match `[` in host")
P.eS(a,b+1,z)
return C.b.C(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.b.Z(a,y)===58){P.eS(a,b,c)
return"["+a+"]"}return P.lZ(a,b,c)},
lZ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Z(a,z)
if(v===37){u=P.fn(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aB("")
s=C.b.C(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.C(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.r,t)
t=(C.r[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aB("")
if(y<z){x.a+=C.b.C(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.i,t)
t=(C.i[t]&1<<(v&15))!==0}else t=!1
if(t)P.bL(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aB("")
s=C.b.C(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fh(v)
z+=q
y=z}}}}if(x==null)return C.b.C(a,b,c)
if(y<c){s=C.b.C(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lW:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fj(C.b.J(a,b)))P.bL(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.J(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.k,w)
w=(C.k[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bL(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.C(a,b,c)
return P.lN(y?a.toLowerCase():a)},
lN:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lX:function(a,b,c){return P.bM(a,b,c,C.M)},
lR:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bM(a,b,c,C.t):C.D.hD(d,new P.lS(),P.i).a3(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a9(w,"/"))w="/"+w
return P.lY(w,e,f)},
lY:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a9(a,"/"))return P.m_(a,!z||c)
return P.m0(a)},
dg:function(a,b,c,d){var z,y
z={}
H.w(d,"$isK",[P.i,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.c9("Both query and queryParameters specified"))
return P.bM(a,b,c,C.j)}if(d==null)return
y=new P.aB("")
z.a=""
d.v(0,new P.lU(new P.lV(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lP:function(a,b,c){return P.bM(a,b,c,C.j)},
fn:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Z(a,b+1)
x=C.b.Z(a,z)
w=H.cB(y)
v=H.cB(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.c.aD(u,4)
if(z>=8)return H.e(C.l,z)
z=(C.l[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cj(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.C(a,b,b+3).toUpperCase()
return},
fh:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.j(z,[P.m])
C.a.k(y,0,37)
C.a.k(y,1,C.b.J("0123456789ABCDEF",a>>>4))
C.a.k(y,2,C.b.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.j(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.c.eK(a,6*w)&63|x
C.a.k(y,v,37)
C.a.k(y,v+1,C.b.J("0123456789ABCDEF",u>>>4))
C.a.k(y,v+2,C.b.J("0123456789ABCDEF",u&15))
v+=3}}return P.ey(y,0,null)},
bM:function(a,b,c,d){var z=P.fm(a,b,c,H.w(d,"$ish",[P.m],"$ash"),!1)
return z==null?C.b.C(a,b,c):z},
fm:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$ish",[P.m],"$ash")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.I()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.b.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fn(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.i,u)
u=(C.i[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bL(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fh(v)}}if(w==null)w=new P.aB("")
w.a+=C.b.C(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.I()
if(x<c)w.a+=C.b.C(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fk:function(a){if(C.b.a9(a,"."))return!0
return C.b.cU(a,"/.")!==-1},
m0:function(a){var z,y,x,w,v,u,t
if(!P.fk(a))return a
z=H.j([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.E(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.a3(z,"/")},
m_:function(a,b){var z,y,x,w,v,u
if(!P.fk(a))return!b?P.fi(a):a
z=H.j([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gav(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gav(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.k(z,0,P.fi(z[0]))}return C.a.a3(z,"/")},
fi:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fj(J.fU(a,0)))for(y=1;y<z;++y){x=C.b.J(a,y)
if(x===58)return C.b.C(a,0,y)+"%3A"+C.b.aO(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.k,w)
w=(C.k[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lO:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.J(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c9("Invalid URL encoding"))}}return z},
dh:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.ds(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.J(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.f!==d)v=!1
else v=!0
if(v)return y.C(a,b,c)
else u=new H.hf(y.C(a,b,c))}else{u=H.j([],[P.m])
for(x=b;x<c;++x){w=y.J(a,x)
if(w>127)throw H.a(P.c9("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c9("Truncated URI"))
C.a.h(u,P.lO(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$ish",[P.m],"$ash")
return new P.kc(!1).bL(u)},
fj:function(a){var z=a|32
return 97<=z&&z<=122}}},
lM:{"^":"b:36;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.t()
throw H.a(P.a1("Invalid port",this.a,z+1))}},
lS:{"^":"b:47;",
$1:function(a){return P.di(C.N,a,C.f,!1)}},
lV:{"^":"b:26;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.di(C.l,a,C.f,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.di(C.l,b,C.f,!0))}}},
lU:{"^":"b:34;a",
$2:function(a,b){var z,y
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(z=J.bs(H.fM(b,"$isl")),y=this.a;z.L();)y.$2(a,H.M(z.gR(z)))}},
k0:{"^":"d;a,b,c",
gdh:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.cV(y,"?",z)
w=y.length
if(x>=0){v=P.bM(y,x+1,w,C.j)
w=x}else v=null
z=new P.kH(this,"data",null,null,null,P.bM(y,z,w,C.t),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
u:{
eR:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.j([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.J(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a1("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a1("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.J(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gav(z)
if(v!==44||x!==t+7||!C.b.aa(a,"base64",t+1))throw H.a(P.a1("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.x.fs(0,a,s,y)
else{r=P.fm(a,s,y,C.j,!0)
if(r!=null)a=C.b.aL(a,s,y,r)}return new P.k0(a,z,c)}}},
mk:{"^":"b:33;",
$1:function(a){return new Uint8Array(96)}},
mj:{"^":"b:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.fZ(z,0,96,b)
return z}},
ml:{"^":"b;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.J(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
mm:{"^":"b;",
$3:function(a,b,c){var z,y,x
for(z=C.b.J(b,0),y=C.b.J(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
lo:{"^":"d;a,b,c,d,e,f,r,x,0y",
gcQ:function(){return this.c>0},
gcS:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.t()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gcT:function(){var z=this.f
if(typeof z!=="number")return z.I()
return z<this.r},
gcR:function(){return this.r<this.a.length},
gcr:function(){return this.b===4&&C.b.a9(this.a,"http")},
gcs:function(){return this.b===5&&C.b.a9(this.a,"https")},
gbf:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcr()){this.x="http"
z="http"}else if(this.gcs()){this.x="https"
z="https"}else if(z===4&&C.b.a9(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a9(this.a,"package")){this.x="package"
z="package"}else{z=C.b.C(this.a,0,z)
this.x=z}return z},
gdi:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.C(this.a,y,z-1):""},
gbO:function(a){var z=this.c
return z>0?C.b.C(this.a,z,this.d):""},
gbb:function(a){var z
if(this.gcS()){z=this.d
if(typeof z!=="number")return z.t()
return P.c5(C.b.C(this.a,z+1,this.e),null,null)}if(this.gcr())return 80
if(this.gcs())return 443
return 0},
gd5:function(a){return C.b.C(this.a,this.e,this.f)},
gbV:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.I()
return z<y?C.b.C(this.a,z+1,y):""},
gcP:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aO(y,z+1):""},
gbc:function(){var z=this.f
if(typeof z!=="number")return z.I()
if(z>=this.r)return C.O
z=P.i
return new P.eQ(P.eT(this.gbV(this),C.f),[z,z])},
bX:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isK",[P.i,null],"$asK")
i=this.gbf()
z=i==="file"
y=this.c
j=y>0?C.b.C(this.a,this.b+3,y):""
f=this.gcS()?this.gbb(this):null
y=this.c
if(y>0)c=C.b.C(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.C(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a9(d,"/"))d="/"+d
g=P.dg(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aO(y,x+1)
return new P.cr(i,j,c,f,d,g,b)},
d9:function(a,b){return this.bX(a,null,null,null,null,null,null,b,null,null)},
gU:function(a){var z=this.y
if(z==null){z=C.b.gU(this.a)
this.y=z}return z},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.O(b)
if(!!z.$isd7)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isd7:1},
kH:{"^":"cr;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dO:function(a,b){var z=document.createElement("canvas")
return z},
hw:function(a){H.f(a,"$isa9")
return"wheel"},
e5:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ise4")
try{J.h0(z,a)}catch(x){H.au(x)}return z},
cq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f4:function(a,b,c,d){var z,y
z=W.cq(W.cq(W.cq(W.cq(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fu:function(a,b){var z
H.c(a,{func:1,ret:-1,args:[b]})
z=$.Y
if(z===C.d)return a
return z.cI(a,b)},
ad:{"^":"a5;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
o6:{"^":"d2;0w:x=,0B:y=","%":"Accelerometer|LinearAccelerationSensor"},
o7:{"^":"q;0l:length=","%":"AccessibleNodeList"},
o8:{"^":"ad;0a4:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
o9:{"^":"ad;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cH:{"^":"q;",$iscH:1,"%":";Blob"},
of:{"^":"ad;0a4:type}","%":"HTMLButtonElement"},
cK:{"^":"ad;",
c5:function(a,b,c){var z=a.getContext(b,P.my(c,null))
return z},
$iscK:1,
"%":"HTMLCanvasElement"},
oh:{"^":"N;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oj:{"^":"cc;0l:length=","%":"CSSPerspective"},
ok:{"^":"cN;0w:x=,0B:y=","%":"CSSPositionValue"},
ol:{"^":"cc;0w:x=,0B:y=","%":"CSSRotation"},
b0:{"^":"q;",$isb0:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
om:{"^":"cc;0w:x=,0B:y=","%":"CSSScale"},
hl:{"^":"kG;0l:length=",
dl:function(a,b){var z=a.getPropertyValue(this.cf(a,b))
return z==null?"":z},
cf:function(a,b){var z,y
z=$.$get$dT()
y=z[b]
if(typeof y==="string")return y
y=this.eL(a,b)
z[b]=y
return y},
eL:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hq()+b
if(z in a)return z
return b},
eE:function(a,b,c,d){a.setProperty(b,c,d)},
gbF:function(a){return a.bottom},
gak:function(a){return a.height},
gaG:function(a){return a.left},
gbY:function(a){return a.right},
gaZ:function(a){return a.top},
gan:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hm:{"^":"d;",
gaG:function(a){return this.dl(a,"left")}},
cN:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cc:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
on:{"^":"cN;0l:length=","%":"CSSTransformValue"},
oo:{"^":"cc;0w:x=,0B:y=","%":"CSSTranslation"},
op:{"^":"cN;0l:length=","%":"CSSUnparsedValue"},
oq:{"^":"q;0l:length=","%":"DataTransferItemList"},
or:{"^":"q;0w:x=,0B:y=","%":"DeviceAcceleration"},
os:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
ot:{"^":"hr;",
gw:function(a){return a.x},
gB:function(a){return a.y},
"%":"DOMPoint"},
hr:{"^":"q;",
gw:function(a){return a.x},
gB:function(a){return a.y},
"%":";DOMPointReadOnly"},
ou:{"^":"kJ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.w(c,"$isaa",[P.V],"$asaa")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.aa,P.V]]},
$asu:function(){return[[P.aa,P.V]]},
$isl:1,
$asl:function(){return[[P.aa,P.V]]},
$ish:1,
$ash:function(){return[[P.aa,P.V]]},
$asz:function(){return[[P.aa,P.V]]},
"%":"ClientRectList|DOMRectList"},
hs:{"^":"q;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gan(a))+" x "+H.k(this.gak(a))},
D:function(a,b){var z
if(b==null)return!1
z=H.bo(b,"$isaa",[P.V],"$asaa")
if(!z)return!1
z=J.aQ(b)
return a.left===z.gaG(b)&&a.top===z.gaZ(b)&&this.gan(a)===z.gan(b)&&this.gak(a)===z.gak(b)},
gU:function(a){return W.f4(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gan(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gbF:function(a){return a.bottom},
gak:function(a){return a.height},
gaG:function(a){return a.left},
gbY:function(a){return a.right},
gaZ:function(a){return a.top},
gan:function(a){return a.width},
gw:function(a){return a.x},
gB:function(a){return a.y},
$isaa:1,
$asaa:function(){return[P.V]},
"%":";DOMRectReadOnly"},
ov:{"^":"kL;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.M(c)
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asu:function(){return[P.i]},
$isl:1,
$asl:function(){return[P.i]},
$ish:1,
$ash:function(){return[P.i]},
$asz:function(){return[P.i]},
"%":"DOMStringList"},
ow:{"^":"q;0l:length=","%":"DOMTokenList"},
kF:{"^":"cg;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.f(z[b],"$isa5")},
k:function(a,b,c){var z
H.B(b)
H.f(c,"$isa5")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga2:function(a){var z=this.c0(this)
return new J.aH(z,z.length,0,[H.v(z,0)])},
at:function(a,b,c,d){throw H.a(P.c1(null))},
$asu:function(){return[W.a5]},
$asl:function(){return[W.a5]},
$ash:function(){return[W.a5]}},
a5:{"^":"N;",
gbJ:function(a){return new W.kF(a,a.children)},
gb7:function(a){return P.j6(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.V)},
i:function(a){return a.localName},
$isa5:1,
"%":";Element"},
ox:{"^":"ad;0a4:type}","%":"HTMLEmbedElement"},
ac:{"^":"q;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a9:{"^":"q;",
cE:["dr",function(a,b,c,d){H.c(c,{func:1,args:[W.ac]})
if(c!=null)this.dH(a,b,c,!1)}],
dH:function(a,b,c,d){return a.addEventListener(b,H.bp(H.c(c,{func:1,args:[W.ac]}),1),!1)},
$isa9:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fa|fb|fd|fe"},
aS:{"^":"cH;",$isaS:1,"%":"File"},
e0:{"^":"kQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isaS")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aS]},
$asu:function(){return[W.aS]},
$isl:1,
$asl:function(){return[W.aS]},
$ish:1,
$ash:function(){return[W.aS]},
$ise0:1,
$asz:function(){return[W.aS]},
"%":"FileList"},
oQ:{"^":"a9;0l:length=","%":"FileWriter"},
oT:{"^":"ad;0l:length=","%":"HTMLFormElement"},
b2:{"^":"q;",$isb2:1,"%":"Gamepad"},
oU:{"^":"d2;0w:x=,0B:y=","%":"Gyroscope"},
oV:{"^":"q;0l:length=","%":"History"},
oW:{"^":"l2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isN")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.N]},
$asu:function(){return[W.N]},
$isl:1,
$asl:function(){return[W.N]},
$ish:1,
$ash:function(){return[W.N]},
$asz:function(){return[W.N]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
e3:{"^":"q;",$ise3:1,"%":"ImageData"},
e4:{"^":"ad;0a4:type}",$ise4:1,"%":"HTMLInputElement"},
by:{"^":"d5;",$isby:1,"%":"KeyboardEvent"},
p1:{"^":"ad;0a4:type}","%":"HTMLLinkElement"},
p2:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
p3:{"^":"d2;0w:x=,0B:y=","%":"Magnetometer"},
p5:{"^":"q;0l:length=","%":"MediaList"},
p6:{"^":"a9;",
cE:function(a,b,c,d){H.c(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.dr(a,b,c,!1)},
"%":"MessagePort"},
p7:{"^":"l8;",
j:function(a,b){return P.aP(a.get(H.M(b)))},
v:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gau:function(a){var z=H.j([],[P.i])
this.v(a,new W.iI(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asal:function(){return[P.i,null]},
$isK:1,
$asK:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iI:{"^":"b:13;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p8:{"^":"l9;",
j:function(a,b){return P.aP(a.get(H.M(b)))},
v:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gau:function(a){var z=H.j([],[P.i])
this.v(a,new W.iJ(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asal:function(){return[P.i,null]},
$isK:1,
$asK:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iJ:{"^":"b:13;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b5:{"^":"q;",$isb5:1,"%":"MimeType"},
p9:{"^":"lb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb5")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b5]},
$asu:function(){return[W.b5]},
$isl:1,
$asl:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$asz:function(){return[W.b5]},
"%":"MimeTypeArray"},
aA:{"^":"d5;",$isaA:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kE:{"^":"cg;a",
k:function(a,b,c){var z,y
H.B(b)
H.f(c,"$isN")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
ga2:function(a){var z=this.a.childNodes
return new W.e1(z,z.length,-1,[H.aV(C.Q,z,"z",0)])},
at:function(a,b,c,d){throw H.a(P.y("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asu:function(){return[W.N]},
$asl:function(){return[W.N]},
$ash:function(){return[W.N]}},
N:{"^":"a9;",
fM:function(a,b){var z,y
try{z=a.parentNode
J.fV(z,b,a)}catch(y){H.au(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ds(a):z},
eA:function(a,b,c){return a.replaceChild(b,c)},
$isN:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iN:{"^":"ld;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isN")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.N]},
$asu:function(){return[W.N]},
$isl:1,
$asl:function(){return[W.N]},
$ish:1,
$ash:function(){return[W.N]},
$asz:function(){return[W.N]},
"%":"NodeList|RadioNodeList"},
ph:{"^":"ad;0a4:type}","%":"HTMLOListElement"},
pi:{"^":"ad;0a4:type}","%":"HTMLObjectElement"},
b6:{"^":"q;0l:length=",$isb6:1,"%":"Plugin"},
pm:{"^":"lh;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb6")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$asu:function(){return[W.b6]},
$isl:1,
$asl:function(){return[W.b6]},
$ish:1,
$ash:function(){return[W.b6]},
$asz:function(){return[W.b6]},
"%":"PluginArray"},
pr:{"^":"q;0a4:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
ps:{"^":"ln;",
j:function(a,b){return P.aP(a.get(H.M(b)))},
v:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gau:function(a){var z=H.j([],[P.i])
this.v(a,new W.jg(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asal:function(){return[P.i,null]},
$isK:1,
$asK:function(){return[P.i,null]},
"%":"RTCStatsReport"},
jg:{"^":"b:13;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pu:{"^":"ad;0a4:type}","%":"HTMLScriptElement"},
pw:{"^":"ad;0l:length=","%":"HTMLSelectElement"},
d2:{"^":"a9;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
b8:{"^":"a9;",$isb8:1,"%":"SourceBuffer"},
px:{"^":"fb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb8")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asu:function(){return[W.b8]},
$isl:1,
$asl:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$asz:function(){return[W.b8]},
"%":"SourceBufferList"},
py:{"^":"ad;0a4:type}","%":"HTMLSourceElement"},
b9:{"^":"q;",$isb9:1,"%":"SpeechGrammar"},
pz:{"^":"lq;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb9")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$asu:function(){return[W.b9]},
$isl:1,
$asl:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$asz:function(){return[W.b9]},
"%":"SpeechGrammarList"},
ba:{"^":"q;0l:length=",$isba:1,"%":"SpeechRecognitionResult"},
pB:{"^":"lt;",
j:function(a,b){return a.getItem(H.M(b))},
k:function(a,b,c){a.setItem(b,H.M(c))},
v:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gau:function(a){var z=H.j([],[P.i])
this.v(a,new W.ju(z))
return z},
gl:function(a){return a.length},
$asal:function(){return[P.i,P.i]},
$isK:1,
$asK:function(){return[P.i,P.i]},
"%":"Storage"},
ju:{"^":"b:26;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pE:{"^":"ad;0a4:type}","%":"HTMLStyleElement"},
bb:{"^":"q;",$isbb:1,"%":"CSSStyleSheet|StyleSheet"},
bE:{"^":"ad;",$isbE:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bc:{"^":"a9;",$isbc:1,"%":"TextTrack"},
bd:{"^":"a9;",$isbd:1,"%":"TextTrackCue|VTTCue"},
pI:{"^":"lA;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbd")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asu:function(){return[W.bd]},
$isl:1,
$asl:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$asz:function(){return[W.bd]},
"%":"TextTrackCueList"},
pJ:{"^":"fe;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbc")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asu:function(){return[W.bc]},
$isl:1,
$asl:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$asz:function(){return[W.bc]},
"%":"TextTrackList"},
pK:{"^":"q;0l:length=","%":"TimeRanges"},
bf:{"^":"q;",$isbf:1,"%":"Touch"},
bg:{"^":"d5;",$isbg:1,"%":"TouchEvent"},
pL:{"^":"lG;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbf")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asu:function(){return[W.bf]},
$isl:1,
$asl:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$asz:function(){return[W.bf]},
"%":"TouchList"},
pM:{"^":"q;0l:length=","%":"TrackDefaultList"},
d5:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pO:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
pQ:{"^":"q;0w:x=","%":"VRStageBoundsPoint"},
pR:{"^":"a9;0l:length=","%":"VideoTrackList"},
bI:{"^":"aA;",
gfa:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.y("deltaY is not supported"))},
gf9:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.y("deltaX is not supported"))},
$isbI:1,
"%":"WheelEvent"},
kx:{"^":"a9;",
eC:function(a,b){return a.requestAnimationFrame(H.bp(H.c(b,{func:1,ret:-1,args:[P.V]}),1))},
dV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
pW:{"^":"m7;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb0")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b0]},
$asu:function(){return[W.b0]},
$isl:1,
$asl:function(){return[W.b0]},
$ish:1,
$ash:function(){return[W.b0]},
$asz:function(){return[W.b0]},
"%":"CSSRuleList"},
pX:{"^":"hs;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
D:function(a,b){var z
if(b==null)return!1
z=H.bo(b,"$isaa",[P.V],"$asaa")
if(!z)return!1
z=J.aQ(b)
return a.left===z.gaG(b)&&a.top===z.gaZ(b)&&a.width===z.gan(b)&&a.height===z.gak(b)},
gU:function(a){return W.f4(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gan:function(a){return a.width},
gw:function(a){return a.x},
gB:function(a){return a.y},
"%":"ClientRect|DOMRect"},
pZ:{"^":"m9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb2")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b2]},
$asu:function(){return[W.b2]},
$isl:1,
$asl:function(){return[W.b2]},
$ish:1,
$ash:function(){return[W.b2]},
$asz:function(){return[W.b2]},
"%":"GamepadList"},
q_:{"^":"mb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isN")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.N]},
$asu:function(){return[W.N]},
$isl:1,
$asl:function(){return[W.N]},
$ish:1,
$ash:function(){return[W.N]},
$asz:function(){return[W.N]},
"%":"MozNamedAttrMap|NamedNodeMap"},
q0:{"^":"md;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isba")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asu:function(){return[W.ba]},
$isl:1,
$asl:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$asz:function(){return[W.ba]},
"%":"SpeechRecognitionResultList"},
q1:{"^":"mf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbb")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asu:function(){return[W.bb]},
$isl:1,
$asl:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$asz:function(){return[W.bb]},
"%":"StyleSheetList"},
kM:{"^":"d3;a,b,c,$ti",
fp:function(a,b,c,d){var z=H.v(this,0)
H.c(a,{func:1,ret:-1,args:[z]})
H.c(c,{func:1,ret:-1})
return W.a4(this.a,this.b,a,!1,z)}},
pY:{"^":"kM;a,b,c,$ti"},
kN:{"^":"ew;a,b,c,d,e,$ti",
eQ:function(){var z=this.d
if(z!=null&&this.a<=0)J.fW(this.b,this.c,z,!1)},
u:{
a4:function(a,b,c,d,e){var z=c==null?null:W.fu(new W.kO(c),W.ac)
z=new W.kN(0,a,b,z,!1,[e])
z.eQ()
return z}}},
kO:{"^":"b:11;a",
$1:function(a){return this.a.$1(H.f(a,"$isac"))}},
z:{"^":"d;$ti",
ga2:function(a){return new W.e1(a,this.gl(a),-1,[H.aV(this,a,"z",0)])},
at:function(a,b,c,d){H.x(d,H.aV(this,a,"z",0))
throw H.a(P.y("Cannot modify an immutable List."))}},
e1:{"^":"d;a,b,c,0d,$ti",
L:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dA(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gR:function(a){return this.d}},
kG:{"^":"q+hm;"},
kI:{"^":"q+u;"},
kJ:{"^":"kI+z;"},
kK:{"^":"q+u;"},
kL:{"^":"kK+z;"},
kP:{"^":"q+u;"},
kQ:{"^":"kP+z;"},
l1:{"^":"q+u;"},
l2:{"^":"l1+z;"},
l8:{"^":"q+al;"},
l9:{"^":"q+al;"},
la:{"^":"q+u;"},
lb:{"^":"la+z;"},
lc:{"^":"q+u;"},
ld:{"^":"lc+z;"},
lg:{"^":"q+u;"},
lh:{"^":"lg+z;"},
ln:{"^":"q+al;"},
fa:{"^":"a9+u;"},
fb:{"^":"fa+z;"},
lp:{"^":"q+u;"},
lq:{"^":"lp+z;"},
lt:{"^":"q+al;"},
lz:{"^":"q+u;"},
lA:{"^":"lz+z;"},
fd:{"^":"a9+u;"},
fe:{"^":"fd+z;"},
lF:{"^":"q+u;"},
lG:{"^":"lF+z;"},
m6:{"^":"q+u;"},
m7:{"^":"m6+z;"},
m8:{"^":"q+u;"},
m9:{"^":"m8+z;"},
ma:{"^":"q+u;"},
mb:{"^":"ma+z;"},
mc:{"^":"q+u;"},
md:{"^":"mc+z;"},
me:{"^":"q+u;"},
mf:{"^":"me+z;"}}],["","",,P,{"^":"",
aP:function(a){var z,y,x,w,v
if(a==null)return
z=P.ef(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w){v=H.M(y[w])
z.k(0,v,a[v])}return z},
my:function(a,b){var z={}
a.v(0,new P.mz(z))
return z},
dZ:function(){var z=$.dY
if(z==null){z=J.cF(window.navigator.userAgent,"Opera",0)
$.dY=z}return z},
hq:function(){var z,y
z=$.dV
if(z!=null)return z
y=$.dW
if(y==null){y=J.cF(window.navigator.userAgent,"Firefox",0)
$.dW=y}if(y)z="-moz-"
else{y=$.dX
if(y==null){y=!P.dZ()&&J.cF(window.navigator.userAgent,"Trident/",0)
$.dX=y}if(y)z="-ms-"
else z=P.dZ()?"-o-":"-webkit-"}$.dV=z
return z},
lw:{"^":"d;",
cM:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
c2:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.O(a)
if(!!y.$isah)return new Date(a.a)
if(!!y.$isj9)throw H.a(P.c1("structured clone of RegExp"))
if(!!y.$isaS)return a
if(!!y.$iscH)return a
if(!!y.$ise0)return a
if(!!y.$ise3)return a
if(!!y.$isei||!!y.$iscY)return a
if(!!y.$isK){x=this.cM(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.k(w,x,v)
y.v(a,new P.ly(z,this))
return z.a}if(!!y.$ish){x=this.cM(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.f7(a,x)}throw H.a(P.c1("structured clone of other type"))},
f7:function(a,b){var z,y,x,w
z=J.ar(a)
y=z.gl(a)
x=new Array(y)
C.a.k(this.b,b,x)
if(typeof y!=="number")return H.n(y)
w=0
for(;w<y;++w)C.a.k(x,w,this.c2(z.j(a,w)))
return x}},
ly:{"^":"b:12;a,b",
$2:function(a,b){this.a.a[a]=this.b.c2(b)}},
mz:{"^":"b:12;a",
$2:function(a,b){this.a[a]=b}},
lx:{"^":"lw;a,b"},
hC:{"^":"cg;a,b",
gb2:function(){var z,y,x
z=this.b
y=H.aF(z,"u",0)
x=W.a5
return new H.iF(new H.kv(z,H.c(new P.hD(),{func:1,ret:P.Q,args:[y]}),[y]),H.c(new P.hE(),{func:1,ret:x,args:[y]}),[y,x])},
k:function(a,b,c){var z
H.B(b)
H.f(c,"$isa5")
z=this.gb2()
J.h_(z.b.$1(J.cG(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
at:function(a,b,c,d){throw H.a(P.y("Cannot fillRange on filtered list"))},
gl:function(a){return J.an(this.gb2().a)},
j:function(a,b){var z=this.gb2()
return z.b.$1(J.cG(z.a,b))},
ga2:function(a){var z=P.iz(this.gb2(),!1,W.a5)
return new J.aH(z,z.length,0,[H.v(z,0)])},
$asu:function(){return[W.a5]},
$asl:function(){return[W.a5]},
$ash:function(){return[W.a5]}},
hD:{"^":"b:29;",
$1:function(a){return!!J.O(H.f(a,"$isN")).$isa5}},
hE:{"^":"b:28;",
$1:function(a){return H.ag(H.f(a,"$isN"),"$isa5")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bC:{"^":"d;w:a>,B:b>,$ti",
i:function(a){return"Point("+H.k(this.a)+", "+H.k(this.b)+")"},
D:function(a,b){var z,y,x
if(b==null)return!1
z=H.bo(b,"$isbC",[P.V],null)
if(!z)return!1
z=this.a
y=J.aQ(b)
x=y.gw(b)
if(z==null?x==null:z===x){z=this.b
y=y.gB(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gU:function(a){var z,y
z=J.aY(this.a)
y=J.aY(this.b)
return P.f3(P.bK(P.bK(0,z),y))},
m:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.m()
y=H.v(this,0)
z=H.x(z*b,y)
x=this.b
if(typeof x!=="number")return x.m()
return new P.bC(z,H.x(x*b,y),this.$ti)}},
li:{"^":"d;$ti",
gbY:function(a){var z=this.a
if(typeof z!=="number")return z.t()
return H.x(z+this.c,H.v(this,0))},
gbF:function(a){var z=this.b
if(typeof z!=="number")return z.t()
return H.x(z+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
D:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bo(b,"$isaa",[P.V],"$asaa")
if(!z)return!1
z=this.a
y=J.aQ(b)
x=y.gaG(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaZ(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.t()
w=H.v(this,0)
if(H.x(z+this.c,w)===y.gbY(b)){if(typeof x!=="number")return x.t()
z=H.x(x+this.d,w)===y.gbF(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.aY(z)
x=this.b
w=J.aY(x)
if(typeof z!=="number")return z.t()
v=H.v(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.t()
v=H.x(x+this.d,v)
return P.f3(P.bK(P.bK(P.bK(P.bK(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cK:function(a,b){var z,y
H.w(b,"$isbC",[P.V],"$asbC")
z=b.a
y=this.a
if(typeof z!=="number")return z.c4()
if(typeof y!=="number")return H.n(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.c4()
if(typeof y!=="number")return H.n(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
aa:{"^":"li;aG:a>,aZ:b>,an:c>,ak:d>,$ti",u:{
j6:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.I()
if(c<0)z=-c*0
else z=c
H.x(z,e)
if(typeof d!=="number")return d.I()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.x(y,e),[e])}}}}],["","",,P,{"^":"",oy:{"^":"X;0w:x=,0B:y=","%":"SVGFEBlendElement"},oz:{"^":"X;0w:x=,0B:y=","%":"SVGFEColorMatrixElement"},oA:{"^":"X;0w:x=,0B:y=","%":"SVGFEComponentTransferElement"},oB:{"^":"X;0w:x=,0B:y=","%":"SVGFECompositeElement"},oC:{"^":"X;0w:x=,0B:y=","%":"SVGFEConvolveMatrixElement"},oD:{"^":"X;0w:x=,0B:y=","%":"SVGFEDiffuseLightingElement"},oE:{"^":"X;0w:x=,0B:y=","%":"SVGFEDisplacementMapElement"},oF:{"^":"X;0w:x=,0B:y=","%":"SVGFEFloodElement"},oG:{"^":"X;0w:x=,0B:y=","%":"SVGFEGaussianBlurElement"},oH:{"^":"X;0w:x=,0B:y=","%":"SVGFEImageElement"},oI:{"^":"X;0w:x=,0B:y=","%":"SVGFEMergeElement"},oJ:{"^":"X;0w:x=,0B:y=","%":"SVGFEMorphologyElement"},oK:{"^":"X;0w:x=,0B:y=","%":"SVGFEOffsetElement"},oL:{"^":"X;0w:x=,0B:y=","%":"SVGFEPointLightElement"},oM:{"^":"X;0w:x=,0B:y=","%":"SVGFESpecularLightingElement"},oN:{"^":"X;0w:x=,0B:y=","%":"SVGFESpotLightElement"},oO:{"^":"X;0w:x=,0B:y=","%":"SVGFETileElement"},oP:{"^":"X;0w:x=,0B:y=","%":"SVGFETurbulenceElement"},oR:{"^":"X;0w:x=,0B:y=","%":"SVGFilterElement"},oS:{"^":"bw;0w:x=,0B:y=","%":"SVGForeignObjectElement"},hH:{"^":"bw;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bw:{"^":"X;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},oX:{"^":"bw;0w:x=,0B:y=","%":"SVGImageElement"},bz:{"^":"q;",$isbz:1,"%":"SVGLength"},p0:{"^":"l4;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.f(c,"$isbz")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bz]},
$isl:1,
$asl:function(){return[P.bz]},
$ish:1,
$ash:function(){return[P.bz]},
$asz:function(){return[P.bz]},
"%":"SVGLengthList"},p4:{"^":"X;0w:x=,0B:y=","%":"SVGMaskElement"},bB:{"^":"q;",$isbB:1,"%":"SVGNumber"},pg:{"^":"lf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.f(c,"$isbB")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bB]},
$isl:1,
$asl:function(){return[P.bB]},
$ish:1,
$ash:function(){return[P.bB]},
$asz:function(){return[P.bB]},
"%":"SVGNumberList"},pl:{"^":"X;0w:x=,0B:y=","%":"SVGPatternElement"},pn:{"^":"q;0w:x=,0B:y=","%":"SVGPoint"},po:{"^":"q;0l:length=","%":"SVGPointList"},pp:{"^":"q;0w:x=,0B:y=","%":"SVGRect"},pq:{"^":"hH;0w:x=,0B:y=","%":"SVGRectElement"},pv:{"^":"X;0a4:type}","%":"SVGScriptElement"},pC:{"^":"lv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.M(c)
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asu:function(){return[P.i]},
$isl:1,
$asl:function(){return[P.i]},
$ish:1,
$ash:function(){return[P.i]},
$asz:function(){return[P.i]},
"%":"SVGStringList"},pF:{"^":"X;0a4:type}","%":"SVGStyleElement"},X:{"^":"a5;",
gbJ:function(a){return new P.hC(a,new W.kE(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},pG:{"^":"bw;0w:x=,0B:y=","%":"SVGSVGElement"},jA:{"^":"bw;","%":"SVGTextPathElement;SVGTextContentElement"},pH:{"^":"jA;0w:x=,0B:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bF:{"^":"q;",$isbF:1,"%":"SVGTransform"},pN:{"^":"lI;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.f(c,"$isbF")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bF]},
$isl:1,
$asl:function(){return[P.bF]},
$ish:1,
$ash:function(){return[P.bF]},
$asz:function(){return[P.bF]},
"%":"SVGTransformList"},pP:{"^":"bw;0w:x=,0B:y=","%":"SVGUseElement"},l3:{"^":"q+u;"},l4:{"^":"l3+z;"},le:{"^":"q+u;"},lf:{"^":"le+z;"},lu:{"^":"q+u;"},lv:{"^":"lu+z;"},lH:{"^":"q+u;"},lI:{"^":"lH+z;"}}],["","",,P,{"^":"",S:{"^":"d;",$isl:1,
$asl:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]}}}],["","",,P,{"^":"",oa:{"^":"q;0l:length=","%":"AudioBuffer"},dE:{"^":"a9;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},ob:{"^":"kD;",
j:function(a,b){return P.aP(a.get(H.M(b)))},
v:function(a,b){var z,y
H.c(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aP(y.value[1]))}},
gau:function(a){var z=H.j([],[P.i])
this.v(a,new P.h2(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asal:function(){return[P.i,null]},
$isK:1,
$asK:function(){return[P.i,null]},
"%":"AudioParamMap"},h2:{"^":"b:13;a",
$2:function(a,b){return C.a.h(this.a,a)}},h3:{"^":"dE;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},oc:{"^":"a9;0l:length=","%":"AudioTrackList"},h6:{"^":"a9;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},od:{"^":"dE;0a4:type}","%":"BiquadFilterNode"},pj:{"^":"h6;0l:length=","%":"OfflineAudioContext"},pk:{"^":"h3;0a4:type}","%":"Oscillator|OscillatorNode"},kD:{"^":"q+al;"}}],["","",,P,{"^":"",et:{"^":"q;",$iset:1,"%":"WebGLRenderingContext"},jS:{"^":"q;",$isjS:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",pA:{"^":"ls;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return P.aP(a.item(b))},
k:function(a,b,c){H.B(b)
H.f(c,"$isK")
throw H.a(P.y("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$asu:function(){return[[P.K,,,]]},
$isl:1,
$asl:function(){return[[P.K,,,]]},
$ish:1,
$ash:function(){return[[P.K,,,]]},
$asz:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},lr:{"^":"q+u;"},ls:{"^":"lr+z;"}}],["","",,O,{"^":"",aZ:{"^":"d;0a,0b,0c,0d,$ti",
c8:function(a){this.a=H.j([],[a])
this.b=null
this.c=null
this.d=null},
dq:function(a,b,c){var z={func:1,ret:-1,args:[P.m,[P.l,H.aF(this,"aZ",0)]]}
H.c(a,z)
H.c(c,z)
this.b=b
this.c=a
this.d=c},
bg:function(a,b){return this.dq(a,null,b)},
er:function(a){H.w(a,"$isl",[H.aF(this,"aZ",0)],"$asl")
return!0},
dz:function(a,b){var z
H.w(b,"$isl",[H.aF(this,"aZ",0)],"$asl")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga2:function(a){var z=this.a
return new J.aH(z,z.length,0,[H.v(z,0)])},
K:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aF(this,"aZ",0)
H.x(b,z)
z=[z]
if(this.er(H.j([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dz(x,H.j([b],z))}},
$isl:1,
u:{
dQ:function(a){var z=new O.aZ([a])
z.c8(a)
return z}}},cV:{"^":"d;0a,0b",
gl:function(a){return this.a.length},
gF:function(){var z=this.b
if(z==null){z=D.W()
this.b=z}return z},
dA:function(a){var z=this.b
if(!(z==null))z.G(a)},
aw:function(){return this.dA(null)},
gal:function(a){var z=this.a
if(z.length>0)return C.a.gav(z)
else return V.ch()},
d7:function(a){var z=this.a
if(a==null)C.a.h(z,V.ch())
else C.a.h(z,a)
this.aw()},
bU:function(){var z=this.a
if(z.length>0){z.pop()
this.aw()}}}}],["","",,E,{"^":"",dG:{"^":"d;"},aR:{"^":"d;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sc6:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gF()
y.toString
x=H.c(this.gd3(),{func:1,ret:-1,args:[D.t]})
C.a.M(y.a,x)}y=this.c
if(y!=null){y=y.gF()
y.toString
x=H.c(this.gd3(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.C("shape",z,this.c,this,[F.a6])
w.b=!0
this.ah(w)}},
saU:function(a){var z,y,x,w
if(!J.E(this.r,a)){z=this.r
if(z!=null){y=z.gF()
y.toString
x=H.c(this.gd2(),{func:1,ret:-1,args:[D.t]})
C.a.M(y.a,x)}if(a!=null){y=a.gF()
y.toString
x=H.c(this.gd2(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.C("mover",z,a,this,[U.ai])
w.b=!0
this.ah(w)}},
aM:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aN(0,b,this):null
if(!J.E(y,this.x)){x=this.x
this.x=y
w=new D.C("matrix",x,y,this,[V.bZ])
w.b=!0
this.ah(w)}for(z=this.y.a,z=new J.aH(z,z.length,0,[H.v(z,0)]);z.L();)z.d.aM(0,b)},
aK:function(a){var z,y,x,w,v,u
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gal(z))
else C.a.h(z.a,y.m(0,z.gal(z)))
z.aw()
a.d8(this.f)
z=a.dy
x=(z&&C.a).gav(z)
if(x!=null&&this.d!=null){if(x.a==null){w=a.fr.j(0,"Inspection")
if(w==null){z=a.a
w=new A.hK(z,"Inspection")
w.dw(z,"Inspection")
y=$.i4
v=$.hW
w.c=w.cn(y,35633)
w.d=w.cn(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.fy(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.H(P.T("Failed to link shader: "+H.k(u)))}w.eH()
w.eI()
w.x=w.f.j(0,"posAttr")
w.y=w.f.j(0,"normAttr")
w.z=w.f.j(0,"clrAttr")
w.Q=w.f.j(0,"binmAttr")
w.ch=H.ag(w.r.j(0,"lightVec"),"$iscn")
w.cx=H.ag(w.r.j(0,"ambientClr"),"$iscn")
w.cy=H.ag(w.r.j(0,"diffuseClr"),"$iscn")
w.db=H.ag(w.r.j(0,"weightScalar"),"$iseP")
w.dx=H.ag(w.r.j(0,"viewMat"),"$isco")
w.dy=H.ag(w.r.j(0,"viewObjMatrix"),"$isco")
w.fr=H.ag(w.r.j(0,"projViewObjMatrix"),"$isco")
if(a.fr.bK(0,"Inspection"))H.H(P.T('Shader cache already contains a shader by the name "Inspection".'))
a.fr.k(0,"Inspection",w)}x.a=w}if(this.e==null){this.d.ab()
z=this.d
y=z.e
if(!(y==null))++y.c
z.d.bH()
z.a.bH()
z=z.e
if(!(z==null))z.am(0)
z=this.d
y=z.e
if(!(y==null))++y.c
z.a.f2()
z=z.e
if(!(z==null))z.am(0)
z=new Z.dL()
z.a=new H.bY(0,0,[P.i,Z.dK])
this.e=z}z=x.a
a.a.useProgram(z.e)
z.f.fc()
y=x.r2
v=z.db
v.a.uniform1f(v.d,y)
y=x.b
v=z.ch
v.a.uniform3f(v.d,y.a,y.b,y.c)
y=a.db
y=y.gal(y)
v=z.dx
v.toString
v.bh(y.c1(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gal(y)
v=a.dx
v=y.m(0,v.gal(v))
a.cx=v
y=v}v=z.dy
v.toString
v.bh(y.c1(0,!0))
y=a.ch
if(y==null){y=a.z
if(y==null){y=a.cy
y=y.gal(y)
v=a.db
v=y.m(0,v.gal(v))
a.z=v
y=v}v=a.dx
v=y.m(0,v.gal(v))
a.ch=v
y=v}z=z.fr
z.toString
z.bh(y.c1(0,!0))
z=this.e
if(z instanceof Z.dL){a.a.blendFunc(1,1)
y=this.c
v=a.a
if(y==null){v.disable(2929)
a.a.enable(3042)
if(x.k3)x.cv(a,z,this.d,"Axis",H.c(x.gce(),{func:1,ret:F.a6,args:[F.cl]}),x.z,x.y)
if(x.k4)x.cv(a,z,this.d,"AABB",H.c(x.gcb(),{func:1,ret:F.a6,args:[F.cl]}),x.z,x.y)
a.a.enable(2929)
a.a.disable(3042)}else{v.enable(2929)
a.a.disable(3042)
if(x.cx)x.a_(a,z,this.c,"vertices",x.geT(),x.f,x.e)
if(x.fr)x.a_(a,z,this.c,"faceCenters",x.gdX(),x.f,x.e)
if(x.Q)x.a_(a,z,this.c,"shapeFill",x.geJ(),x.d,x.c)
if(x.id)x.a_(a,z,this.c,"colorFill",x.gdP(),x.x,x.r)
if(x.k1)x.a_(a,z,this.c,"txt2DColor",x.geR(),x.x,x.r)
if(x.k2)x.a_(a,z,this.c,"weight",x.geU(),x.x,x.r)
if(x.r1)x.a_(a,z,this.c,"bend1",x.gdL(),x.x,x.r)
a.a.disable(2929)
a.a.enable(3042)
if(x.ch)x.a_(a,z,this.c,"wireFrame",x.geV(),x.f,x.e)
if(x.cy)x.a_(a,z,this.c,"normals",x.gea(),x.f,x.e)
if(x.db)x.a_(a,z,this.c,"binormals",x.gdM(),x.f,x.e)
if(x.dx)x.a_(a,z,this.c,"tangentals",x.geM(),x.f,x.e)
if(x.dy)x.a_(a,z,this.c,"textureCube",x.geS(),x.f,x.e)
if(x.fx)x.a_(a,z,this.c,"faceNormals",x.gdY(),x.f,x.e)
if(x.fy)x.a_(a,z,this.c,"faceBinormals",x.gdW(),x.x,x.r)
if(x.go)x.a_(a,z,this.c,"faceTangentals",x.gdZ(),x.x,x.r)
if(x.k3)x.a_(a,z,this.c,"Axis",x.gce(),x.z,x.y)
if(x.k4)x.a_(a,z,this.c,"AABB",x.gcb(),x.z,x.y)
a.a.enable(2929)
a.a.disable(3042)}}else this.e=null
z=x.a
z.toString
a.a.useProgram(null)
z.f.fb()}for(z=this.y.a,z=new J.aH(z,z.length,0,[H.v(z,0)]);z.L();)z.d.aK(a)
a.d6()
a.dx.bU()},
gF:function(){var z=this.z
if(z==null){z=D.W()
this.z=z}return z},
ah:function(a){var z=this.z
if(!(z==null))z.G(a)},
S:function(){return this.ah(null)},
fz:[function(a){H.f(a,"$ist")
this.e=null
this.ah(a)},function(){return this.fz(null)},"hI","$1","$0","gd3",0,2,6],
fw:[function(a){this.ah(H.f(a,"$ist"))},function(){return this.fw(null)},"hH","$1","$0","gd2",0,2,6],
fu:[function(a){this.ah(H.f(a,"$ist"))},function(){return this.fu(null)},"hF","$1","$0","gd1",0,2,6],
hE:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isl",[E.aR],"$asl")
for(z=b.length,y=this.gd1(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.I)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.bU()
t.a=H.j([],w)
t.c=0
u.sa5(t)}t=u.ga5()
t.toString
H.c(y,x)
C.a.h(t.a,y)}}this.S()},"$2","gft",8,0,14],
hG:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isl",[E.aR],"$asl")
for(z=b.length,y=this.gd1(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.I)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.bU()
t.a=H.j([],w)
t.c=0
u.sa5(t)}t=u.ga5()
t.toString
H.c(y,x)
C.a.M(t.a,y)}}this.S()},"$2","gfv",8,0,14],
$iseh:1},jb:{"^":"d;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dv:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ah(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cV()
y=[V.bZ]
z.a=H.j([],y)
x=z.gF()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.c(new E.jd(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cV()
z.a=H.j([],y)
v=z.gF()
v.toString
x=H.c(new E.je(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cV()
z.a=H.j([],y)
y=z.gF()
y.toString
w=H.c(new E.jf(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.j([],[O.d4])
this.dy=z
C.a.h(z,null)
this.fr=new H.bY(0,0,[P.i,A.eu])},
d8:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gav(z):a;(z&&C.a).h(z,y)},
d6:function(){var z=this.dy
if(z.length>1)z.pop()},
u:{
jc:function(a,b){var z=new E.jb(a,b)
z.dv(a,b)
return z}}},jd:{"^":"b:19;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.ch=null}},je:{"^":"b:19;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jf:{"^":"b:19;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},jC:{"^":"d;0a,0b,0c,0d,0e,0f,0r,0a5:x@,0y,0z,0Q,0ch",
gF:function(){var z=this.x
if(z==null){z=D.W()
this.x=z}return z},
dC:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.G(a)
this.fN()},function(){return this.dC(null)},"dB","$1","$0","gc9",0,2,6],
gfk:function(){var z,y,x
z=Date.now()
y=C.c.ar(P.e_(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ah(z,!1)
return x/y},
cw:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.n(z)
x=C.e.b9(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.m()
w=C.e.b9(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
fN:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.c(new E.jE(this),{func:1,ret:-1,args:[P.V]})
C.w.dV(z)
C.w.eC(z,W.fu(y,P.V))}},
fL:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cw()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ah(w,!1)
x.y=P.e_(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aw()
w=x.db
C.a.sl(w.a,0)
w.aw()
w=x.dx
C.a.sl(w.a,0)
w.aw()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aK(this.e)}}catch(v){z=H.au(v)
y=H.bq(v)
P.dw("Error: "+H.k(z))
P.dw("Stack: "+H.k(y))
throw H.a(z)}},
u:{
jD:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$iscK)return E.eB(a,!0,!0,!0,!1)
y=W.dO(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbJ(a).h(0,y)
w=E.eB(y,!0,!0,!0,!1)
w.a=a
return w},
eB:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jC()
y=P.it(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.h.c5(a,"webgl",y)
x=H.f(x==null?C.h.c5(a,"experimental-webgl",y):x,"$iset")
if(x==null)H.H(P.T("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jc(x,a)
w=new T.jB(x)
w.b=H.B(x.getParameter(3379))
w.c=H.B(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k7(a)
v=new X.im()
v.c=new X.az(!1,!1,!1)
v.d=P.iw(null,null,null,P.m)
w.b=v
v=new X.iK(w)
v.f=0
v.r=new V.L(0,0)
v.x=new V.L(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iB(w)
v.r=0
v.x=new V.L(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jG(w)
v.e=0
v.f=new V.L(0,0)
v.r=new V.L(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.j([],[[P.ew,P.d]])
w.z=v
u=document
t=W.aA
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a4(u,"contextmenu",H.c(w.gef(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a4(a,"focus",H.c(w.gei(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a4(a,"blur",H.c(w.gec(),q),!1,r))
v=w.z
p=W.by
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a4(u,"keyup",H.c(w.gek(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a4(u,"keydown",H.c(w.gej(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousedown",H.c(w.gem(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mouseup",H.c(w.geo(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a4(a,"mousemove",H.c(w.gen(),s),!1,t))
p=w.z
o=W.bI;(p&&C.a).h(p,W.a4(a,H.M(W.hw(a)),H.c(w.gep(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a4(u,"mousemove",H.c(w.geg(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a4(u,"mouseup",H.c(w.geh(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a4(u,"pointerlockchange",H.c(w.geq(),q),!1,r))
r=w.z
q=W.bg
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a4(a,"touchstart",H.c(w.gew(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchend",H.c(w.geu(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a4(a,"touchmove",H.c(w.gev(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ah(Date.now(),!1)
z.ch=0
z.cw()
return z}}},jE:{"^":"b:31;a",
$1:function(a){var z
H.fO(a)
z=this.a
if(z.z){z.z=!1
z.fL()}}}}],["","",,Z,{"^":"",eZ:{"^":"d;a,b",u:{
dc:function(a,b,c){var z
H.w(c,"$ish",[P.m],"$ash")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.ct(c)),35044)
a.bindBuffer(b,null)
return new Z.eZ(b,z)}}},dJ:{"^":"dG;a,b,c,d,e",
bE:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.au(y)
x=P.T('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},ku:{"^":"d;a",$isoe:1},dK:{"^":"d;a,0b,c,d",
b8:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bE:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bE(a)},
fU:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aK:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
d4:function(a){this.bE(a)
this.aK(a)
this.fU(a)},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.j([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.I)(x),++v)C.a.h(y,x[v].i(0))
u=H.j([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.a3(y,", ")+"\nAttrs:   "+C.a.a3(u,", ")},
$isjz:1},dL:{"^":"d;0a",$isjz:1},cf:{"^":"d;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b7(this.c)+"'")+"]"}},db:{"^":"d;a",
gc7:function(a){var z,y
z=this.a
y=(z&$.$get$aN().a)!==0?3:0
if((z&$.$get$aM().a)!==0)y+=3
if((z&$.$get$aL().a)!==0)y+=3
if((z&$.$get$bi().a)!==0)y+=2
if((z&$.$get$bj().a)!==0)y+=3
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=4
if((z&$.$get$bk().a)!==0)++y
return(z&$.$get$bh().a)!==0?y+4:y},
f_:function(a){var z,y,x
z=$.$get$aN()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bi()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bk()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bh()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eY()},
D:function(a,b){if(b==null)return!1
if(!(b instanceof Z.db))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.j([],[P.i])
y=this.a
if((y&$.$get$aN().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$bi().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$bj().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bk().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$bh().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.a3(z,"|")},
u:{
aq:function(a){return new Z.db(a)}}}}],["","",,D,{"^":"",cL:{"^":"d;"},bU:{"^":"d;0a,0b,0c",
G:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.v(y,new D.hA(z))
return x!==0},
fO:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.G(y)}}},
am:function(a){return this.fO(a,!0,!1)},
u:{
W:function(){var z=new D.bU()
z.a=H.j([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hA:{"^":"b:32;a",
$1:function(a){var z
H.c(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"d;a,0b"},e6:{"^":"t;c,d,a,0b,$ti"},e7:{"^":"t;c,d,a,0b,$ti"},C:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dM:{"^":"d;a,b",
D:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.D(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
u:{"^":"og<"}},eb:{"^":"d;a,b",
D:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eb))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.D(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},ec:{"^":"t;c,a,0b"},im:{"^":"d;0a,0b,0c,0d",
fF:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ec(a,this)
y.b=!0
return z.G(y)},
fB:function(a){var z,y
this.c=a.b
this.d.M(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ec(a,this)
y.b=!0
return z.G(y)}},eg:{"^":"ci;x,y,c,d,e,a,0b"},iB:{"^":"d;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ap:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ah(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.m()
v=b.b
u=this.ch
if(typeof v!=="number")return v.m()
t=y.t(0,new V.L(x*w,v*u))
u=this.a.gaE()
s=new X.bA(a,new V.L(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bT:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.G(this.ap(a,b))
return!0},
aW:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dn()
if(typeof z!=="number")return z.be()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.ap(a,b))
return!0},
aV:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.ap(a,b))
return!0},
fG:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaE()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.m()
t=a.b
s=this.cy
if(typeof t!=="number")return t.m()
w=new X.cW(new V.a_(v*u,t*s),y,x,new P.ah(w,!1),this)
w.b=!0
z.G(w)
return!0},
el:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ah(Date.now(),!1)
y=this.f
x=new X.eg(c,a,this.a.gaE(),b,z,this)
x.b=!0
y.G(x)
this.y=z
this.x=new V.L(0,0)}},az:{"^":"d;a,b,c",
D:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.az))return!1
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
return z+(this.c?"Shift+":"")}},bA:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},iK:{"^":"d;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bo:function(a,b,c){var z,y,x
z=new P.ah(Date.now(),!1)
y=this.a.gaE()
x=new X.bA(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bT:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.G(this.bo(a,b,!0))
return!0},
aW:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dn()
if(typeof z!=="number")return z.be()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.bo(a,b,!0))
return!0},
aV:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.bo(a,b,!1))
return!0},
fH:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaE()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.m()
u=a.b
t=this.ch
if(typeof u!=="number")return u.m()
x=new X.cW(new V.a_(w*v,u*t),y,b,new P.ah(x,!1),this)
x.b=!0
z.G(x)
return!0},
gcL:function(){var z=this.b
if(z==null){z=D.W()
this.b=z}return z},
gdf:function(){var z=this.c
if(z==null){z=D.W()
this.c=z}return z},
gd0:function(){var z=this.d
if(z==null){z=D.W()
this.d=z}return z}},cW:{"^":"ci;x,c,d,e,a,0b"},ci:{"^":"t;"},eD:{"^":"ci;x,y,z,Q,ch,c,d,e,a,0b"},jG:{"^":"d;a,0b,0c,0d,0e,0f,0r,0x,0y",
ap:function(a,b){var z,y,x,w
H.w(a,"$ish",[V.L],"$ash")
z=new P.ah(Date.now(),!1)
y=a.length>0?a[0]:new V.L(0,0)
x=this.a.gaE()
w=new X.eD(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fE:function(a){var z
H.w(a,"$ish",[V.L],"$ash")
z=this.b
if(z==null)return!1
z.G(this.ap(a,!0))
return!0},
fC:function(a){var z
H.w(a,"$ish",[V.L],"$ash")
z=this.c
if(z==null)return!1
z.G(this.ap(a,!0))
return!0},
fD:function(a){var z
H.w(a,"$ish",[V.L],"$ash")
z=this.d
if(z==null)return!1
z.G(this.ap(a,!1))
return!0}},k7:{"^":"d;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaE:function(){var z=this.a
return V.er(0,0,(z&&C.h).gb7(z).c,C.h.gb7(z).d)},
cm:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eb(z,new X.az(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
bz:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
aq:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=z.top
if(typeof x!=="number")return x.H()
return new V.L(y-w,x-v)},
aQ:function(a){return new V.a_(a.movementX,a.movementY)},
bu:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.j([],[V.L])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.I)(x),++v){u=x[v]
t=C.e.ae(u.pageX)
C.e.ae(u.pageY)
s=z.left
C.e.ae(u.pageX)
C.a.h(y,new V.L(t-s,C.e.ae(u.pageY)-z.top))}return y},
ao:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dM(z,new X.az(y,a.altKey,a.shiftKey))},
hh:[function(a){this.f=!0},"$1","gei",4,0,11],
hb:[function(a){this.f=!1},"$1","gec",4,0,11],
he:[function(a){if(this.f)a.preventDefault()},"$1","gef",4,0,11],
hj:[function(a){var z
H.f(a,"$isby")
if(!this.f)return
z=this.cm(a)
if(this.b.fF(z))a.preventDefault()},"$1","gek",4,0,27],
hi:[function(a){var z
H.f(a,"$isby")
if(!this.f)return
z=this.cm(a)
if(this.b.fB(z))a.preventDefault()},"$1","gej",4,0,27],
hk:[function(a){var z,y,x,w
H.f(a,"$isaA")
z=this.a
z.focus()
this.f=!0
this.aC(a)
if(this.x){y=this.ao(a)
x=this.aQ(a)
if(this.d.bT(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ao(a)
w=this.aq(a)
if(this.c.bT(y,w))a.preventDefault()},"$1","gem",4,0,10],
hm:[function(a){var z,y,x
H.f(a,"$isaA")
this.aC(a)
z=this.ao(a)
if(this.x){y=this.aQ(a)
if(this.d.aW(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aW(z,x))a.preventDefault()},"$1","geo",4,0,10],
hg:[function(a){var z,y,x,w
H.f(a,"$isaA")
z=this.a
if(!(z&&C.h).gb7(z).cK(0,new P.bC(a.clientX,a.clientY,[P.V]))){this.aC(a)
y=this.ao(a)
if(this.x){x=this.aQ(a)
if(this.d.aW(y,x))a.preventDefault()
return}if(this.r)return
w=this.aq(a)
if(this.c.aW(y,w))a.preventDefault()}},"$1","geh",4,0,10],
hl:[function(a){var z,y,x
H.f(a,"$isaA")
this.aC(a)
z=this.ao(a)
if(this.x){y=this.aQ(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aV(z,x))a.preventDefault()},"$1","gen",4,0,10],
hf:[function(a){var z,y,x,w
H.f(a,"$isaA")
z=this.a
if(!(z&&C.h).gb7(z).cK(0,new P.bC(a.clientX,a.clientY,[P.V]))){this.aC(a)
y=this.ao(a)
if(this.x){x=this.aQ(a)
if(this.d.aV(y,x))a.preventDefault()
return}if(this.r)return
w=this.aq(a)
if(this.c.aV(y,w))a.preventDefault()}},"$1","geg",4,0,10],
hn:[function(a){var z,y
H.f(a,"$isbI")
this.aC(a)
z=new V.a_((a&&C.v).gf9(a),C.v.gfa(a)).p(0,180)
if(this.x){if(this.d.fG(z))a.preventDefault()
return}if(this.r)return
y=this.aq(a)
if(this.c.fH(z,y))a.preventDefault()},"$1","gep",4,0,35],
ho:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ao(this.y)
v=this.aq(this.y)
this.d.el(w,v,x)}},"$1","geq",4,0,11],
hs:[function(a){var z
H.f(a,"$isbg")
this.a.focus()
this.f=!0
this.bz(a)
z=this.bu(a)
if(this.e.fE(z))a.preventDefault()},"$1","gew",4,0,18],
hq:[function(a){var z
H.f(a,"$isbg")
this.bz(a)
z=this.bu(a)
if(this.e.fC(z))a.preventDefault()},"$1","geu",4,0,18],
hr:[function(a){var z
H.f(a,"$isbg")
this.bz(a)
z=this.bu(a)
if(this.e.fD(z))a.preventDefault()},"$1","gev",4,0,18]}}],["","",,V,{"^":"",
oi:[function(a,b){if(typeof b!=="number")return b.H()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","iH",8,0,37],
o5:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.b_(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.e.de($.p.$2(a,0)?0:a,b),c+b+1)},
cz:function(a,b,c){var z,y,x,w,v
H.w(a,"$ish",[P.r],"$ash")
z=H.j([],[P.i])
for(y=0,x=0;x<4;++x){w=V.G(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.e(z,v)
C.a.k(z,v,C.b.ad(z[v],y))}return z},
a2:{"^":"d;a,b,c",
t:function(a,b){var z,y,x
z=this.a+b.a
y=this.b+b.b
x=this.c+b.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.a2(z,y,x)},
m:function(a,b){var z,y,x
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
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"},
u:{
dR:function(a,b,c){var z,y,x,w,v,u,t,s
a*=6
z=C.e.b9(a)
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
return new V.a2(u,t,s)
case 1:if(w<0)u=0
else u=w>1?1:w
if(b<0)t=0
else t=b>1?1:b
if(x<0)s=0
else s=x>1?1:x
return new V.a2(u,t,s)
case 2:if(x<0)u=0
else u=x>1?1:x
if(b<0)t=0
else t=b>1?1:b
if(v<0)s=0
else s=v>1?1:v
return new V.a2(u,t,s)
case 3:if(x<0)u=0
else u=x>1?1:x
if(w<0)t=0
else t=w>1?1:w
if(b<0)s=0
else s=b>1?1:b
return new V.a2(u,t,s)
case 4:if(v<0)u=0
else u=v>1?1:v
if(x<0)t=0
else t=x>1?1:x
if(b<0)s=0
else s=b>1?1:b
return new V.a2(u,t,s)
default:if(b<0)u=0
else u=b>1?1:b
if(x<0)t=0
else t=x>1?1:x
if(w<0)s=0
else s=w>1?1:w
return new V.a2(u,t,s)}}}},
P:{"^":"d;a,b,c,d",
c0:function(a){return H.j([this.a,this.b,this.c,this.d],[P.r])},
m:function(a,b){var z,y,x,w
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
return new V.P(z,y,x,w)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
bZ:{"^":"d;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
c1:function(a,b){var z=H.j([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
m:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isbZ")
z=this.a
y=a7.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.n(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.m()
if(typeof s!=="number")return H.n(s)
r=a7.b
if(typeof r!=="number")return H.n(r)
q=a7.f
if(typeof q!=="number")return H.n(q)
p=a7.z
if(typeof p!=="number")return H.n(p)
o=a7.cy
if(typeof o!=="number")return H.n(o)
n=a7.c
if(typeof n!=="number")return H.n(n)
m=a7.r
if(typeof m!=="number")return H.n(m)
l=a7.Q
if(typeof l!=="number")return H.n(l)
k=a7.db
if(typeof k!=="number")return H.n(k)
j=a7.d
if(typeof j!=="number")return H.n(j)
i=a7.x
if(typeof i!=="number")return H.n(i)
h=a7.ch
if(typeof h!=="number")return H.n(h)
g=a7.dx
if(typeof g!=="number")return H.n(g)
f=this.e
if(typeof f!=="number")return f.m()
e=this.f
if(typeof e!=="number")return e.m()
d=this.r
if(typeof d!=="number")return d.m()
c=this.x
if(typeof c!=="number")return c.m()
b=this.y
if(typeof b!=="number")return b.m()
a=this.z
if(typeof a!=="number")return a.m()
a0=this.Q
if(typeof a0!=="number")return a0.m()
a1=this.ch
if(typeof a1!=="number")return a1.m()
a2=this.cx
if(typeof a2!=="number")return a2.m()
a3=this.cy
if(typeof a3!=="number")return a3.m()
a4=this.db
if(typeof a4!=="number")return a4.m()
a5=this.dx
if(typeof a5!=="number")return a5.m()
return V.aJ(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bZ))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
z=b.e
if(!$.p.$2(z,this.e))return!1
z=b.f
if(!$.p.$2(z,this.f))return!1
z=b.r
if(!$.p.$2(z,this.r))return!1
z=b.x
if(!$.p.$2(z,this.x))return!1
z=b.y
if(!$.p.$2(z,this.y))return!1
z=b.z
if(!$.p.$2(z,this.z))return!1
z=b.Q
if(!$.p.$2(z,this.Q))return!1
z=b.ch
if(!$.p.$2(z,this.ch))return!1
z=b.cx
if(!$.p.$2(z,this.cx))return!1
z=b.cy
if(!$.p.$2(z,this.cy))return!1
z=b.db
if(!$.p.$2(z,this.db))return!1
z=b.dx
if(!$.p.$2(z,this.dx))return!1
return!0},
i:function(a){return this.O()},
cO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.cz(H.j([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cz(H.j([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cz(H.j([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cz(H.j([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.e(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.e(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.e(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.e(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.e(y,1)
q=q+y[1]+", "
if(1>=t)return H.e(x,1)
q=q+x[1]+", "
if(1>=s)return H.e(w,1)
q=q+w[1]+", "
if(1>=r)return H.e(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.e(y,2)
u=u+y[2]+", "
if(2>=t)return H.e(x,2)
u=u+x[2]+", "
if(2>=s)return H.e(w,2)
u=u+w[2]+", "
if(2>=r)return H.e(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.e(y,3)
q=q+y[3]+", "
if(3>=t)return H.e(x,3)
q=q+x[3]+", "
if(3>=s)return H.e(w,3)
q=q+w[3]+", "
if(3>=r)return H.e(v,3)
return u+(q+v[3]+"]")},
E:function(a){return this.cO(a,3,0)},
O:function(){return this.cO("",3,0)},
u:{
aJ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ch:function(){return V.aJ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
L:{"^":"d;w:a>,B:b>",
t:function(a,b){return new V.L(this.a+b.a,this.b+b.b)},
H:function(a,b){return new V.L(this.a-b.a,this.b-b.b)},
m:function(a,b){return new V.L(this.a*b,this.b*b)},
p:function(a,b){if($.p.$2(b,0))return new V.L(0,0)
return new V.L(this.a/b,this.b/b)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
R:{"^":"d;w:a>,B:b>,c",
t:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.n(w)
return new V.R(this.a+z,this.b+y,x+w)},
H:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.H()
if(typeof w!=="number")return H.n(w)
return new V.R(this.a-z,this.b-y,x-w)},
m:function(a,b){var z=this.c
if(typeof z!=="number")return z.m()
return new V.R(this.a*b,this.b*b,z*b)},
p:function(a,b){var z
if($.p.$2(b,0))return new V.R(0,0,0)
z=this.c
if(typeof z!=="number")return z.p()
return new V.R(this.a/b,this.b/b,z/b)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
am:{"^":"d;w:a>,B:b>,c,d",
m:function(a,b){return new V.am(this.a*b,this.b*b,this.c*b,this.d*b)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
eq:{"^":"d;w:a>,B:b>,c,d",
ga8:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eq))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"},
u:{
er:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eq(a,b,c,d)}}},
d1:{"^":"d;w:a>,B:b>,c,d,e,f",
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d1))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
z=b.e
if(!$.p.$2(z,this.e))return!1
z=b.f
if(!$.p.$2(z,this.f))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"},
u:{
es:function(a,b,c,d,e,f){return new V.d1(a,b,c,d,e,f)}}},
a_:{"^":"d;a,b",
cZ:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,20],
A:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
m:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return new V.a_(z*b,y*b)},
p:function(a,b){var z,y
if($.p.$2(b,0))return new V.a_(0,0)
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.a_(z/b,y/b)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
o:{"^":"d;a,b,c",
cZ:[function(a){return Math.sqrt(this.A(this))},"$0","gl",1,0,20],
A:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.n(y)
return this.a*a.a+this.b*a.b+z*y},
bP:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.H()
if(typeof x!=="number")return H.n(x)
return new V.o(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
ag:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.n(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.m()
v=a.a
u=this.a
return new V.o(z*y-x*w,x*v-u*y,u*w-z*v)},
t:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.n(w)
return new V.o(this.a+z,this.b+y,x+w)},
N:function(a){var z=this.c
if(typeof z!=="number")return z.N()
return new V.o(-this.a,-this.b,-z)},
m:function(a,b){var z=this.c
if(typeof z!=="number")return z.m()
return new V.o(this.a*b,this.b*b,z*b)},
p:function(a,b){var z
if($.p.$2(b,0))return new V.o(0,0,0)
z=this.c
if(typeof z!=="number")return z.p()
return new V.o(this.a/b,this.b/b,z/b)},
cY:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.o))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
bG:{"^":"d;a,b,c,d",
cZ:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gl",1,0,20],
m:function(a,b){return new V.bG(this.a*b,this.b*b,this.c*b,this.d*b)},
p:function(a,b){if($.p.$2(b,0))return new V.bG(0,0,0,0)
return new V.bG(this.a/b,this.b/b,this.c/b,this.d/b)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bG))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}}}],["","",,U,{"^":"",hg:{"^":"cL;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bj:function(a){var z=V.o5(a,this.c,this.b)
return z},
gF:function(){var z=this.y
if(z==null){z=D.W()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.G(a)},
sc3:function(a,b){},
sbQ:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bj(z)}z=new D.C("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.T(z)}},
sbS:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bj(z)}z=new D.C("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.T(z)}},
sV:function(a,b){var z,y
b=this.bj(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.C("location",y,b,this,[P.r])
z.b=!0
this.T(z)}},
sbR:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.C("maximumVelocity",y,a,this,[P.r])
z.b=!0
this.T(z)}},
sW:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.C("velocity",x,a,this,[P.r])
z.b=!0
this.T(z)}},
sbN:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.C("dampening",y,a,this,[P.r])
z.b=!0
this.T(z)}},
aM:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sV(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sW(y)}},
u:{
cM:function(){var z=new U.hg()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dS:{"^":"ai;0a,0b",
gF:function(){var z=this.b
if(z==null){z=D.W()
this.b=z}return z},
aN:function(a,b,c){return this.a},
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dS))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}},e2:{"^":"aZ;0e,0f,0r,0a,0b,0c,0d",
gF:function(){var z=this.e
if(z==null){z=D.W()
this.e=z}return z},
T:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.G(a)},function(){return this.T(null)},"af","$1","$0","gaB",0,2,6],
ha:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.w(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.I)(b),++v){u=b[v]
if(u!=null){t=u.gF()
t.toString
H.c(x,w)
C.a.h(t.a,x)}}z=new D.e6(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geb",8,0,24],
hp:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.w(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.I)(b),++v){u=b[v]
if(u!=null){t=u.gF()
t.toString
H.c(x,w)
C.a.M(t.a,x)}}z=new D.e7(a,b,this,[z])
z.b=!0
this.T(z)},"$2","ges",8,0,24],
aN:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.I()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aH(z,z.length,0,[H.v(z,0)]),x=null;z.L();){y=z.d
if(y!=null){w=y.aN(0,b,c)
if(w!=null)x=x==null?w:w.m(0,x)}}this.f=x==null?V.ch():x
z=this.e
if(!(z==null))z.am(0)}return this.f},
D:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e2))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.E(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asl:function(){return[U.ai]},
$asaZ:function(){return[U.ai]},
$isai:1},ai:{"^":"cL;"},k8:{"^":"d;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gF:function(){var z=this.cy
if(z==null){z=D.W()
this.cy=z}return z},
T:[function(a){var z
H.f(a,"$ist")
z=this.cy
if(!(z==null))z.G(a)},function(){return this.T(null)},"af","$1","$0","gaB",0,2,6],
aR:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcL()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.c(this.gbp(),y)
C.a.h(z.a,x)
x=this.a.c.gd0()
x.toString
z=H.c(this.gbq(),y)
C.a.h(x.a,z)
z=this.a.c.gdf()
z.toString
y=H.c(this.gbr(),y)
C.a.h(z.a,y)
return!0},
e6:[function(a){H.f(a,"$ist")
if(!J.E(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbp",4,0,5],
e7:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.f(a,"$ist"),"$isbA")
if(!this.y)return
if(this.x){z=a.d.H(0,a.y)
z=new V.a_(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.H(0,a.y)
z=new V.a_(y.a,y.b).m(0,2).p(0,z.ga8())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.m()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sW(z*10*x)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=new V.a_(x.a,x.b).m(0,2).p(0,z.ga8())
x=this.b
v=w.a
if(typeof v!=="number")return v.N()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sV(0,-v*u+t)
this.b.sW(0)
y=y.H(0,a.z)
this.Q=new V.a_(y.a,y.b).m(0,2).p(0,z.ga8())}this.af()},"$1","gbq",4,0,5],
e8:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.m()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sW(y*10*x)
this.af()}},"$1","gbr",4,0,5],
aN:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.I()
if(z<y){this.ch=y
x=b.y
this.b.aM(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aJ(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isai:1},k9:{"^":"d;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gF:function(){var z=this.fx
if(z==null){z=D.W()
this.fx=z}return z},
T:[function(a){var z
H.f(a,"$ist")
z=this.fx
if(!(z==null))z.G(a)},function(){return this.T(null)},"af","$1","$0","gaB",0,2,6],
aR:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcL()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.c(this.gbp(),y)
C.a.h(z.a,x)
x=this.a.c.gd0()
x.toString
z=H.c(this.gbq(),y)
C.a.h(x.a,z)
z=this.a.c.gdf()
z.toString
x=H.c(this.gbr(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.W()
x.f=z}x=H.c(this.ge2(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.W()
x.d=z}x=H.c(this.ge3(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.W()
x.b=z}x=H.c(this.geP(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.W()
x.d=z}x=H.c(this.geO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.W()
x.c=z}y=H.c(this.geN(),y)
C.a.h(z.a,y)
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a_(z,y)},
e6:[function(a){a=H.ag(H.f(a,"$ist"),"$isbA")
if(!J.E(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbp",4,0,5],
e7:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.f(a,"$ist"),"$isbA")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.a_(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.aj(new V.a_(y.a,y.b).m(0,2).p(0,z.ga8()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.aj(new V.a_(x.a,x.b).m(0,2).p(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sV(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sV(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.H(0,a.z)
this.dx=this.aj(new V.a_(y.a,y.b).m(0,2).p(0,z.ga8()))}this.af()},"$1","gbq",4,0,5],
e8:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sW(-y*10*z)
this.af()}},"$1","gbr",4,0,5],
h6:[function(a){if(H.ag(H.f(a,"$ist"),"$iseg").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ge2",4,0,5],
h7:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.f(a,"$ist"),"$isbA")
if(!J.E(this.d,a.x.b))return
z=a.c
y=a.d
x=y.H(0,a.y)
w=this.aj(new V.a_(x.a,x.b).m(0,2).p(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sV(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sV(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.H(0,a.z)
this.dx=this.aj(new V.a_(y.a,y.b).m(0,2).p(0,z.ga8()))
this.af()},"$1","ge3",4,0,5],
hx:[function(a){H.f(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geP",4,0,5],
hw:[function(a){var z,y,x,w,v,u,t
a=H.ag(H.f(a,"$ist"),"$iseD")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.a_(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.aj(new V.a_(y.a,y.b).m(0,2).p(0,z.ga8()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.aj(new V.a_(x.a,x.b).m(0,2).p(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sV(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sV(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.H(0,a.z)
this.dx=this.aj(new V.a_(y.a,y.b).m(0,2).p(0,z.ga8()))}this.af()},"$1","geO",4,0,5],
hv:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sW(-y*10*z)
this.af()}},"$1","geN",4,0,5],
aN:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.I()
if(z<y){this.dy=y
x=b.y
this.c.aM(0,x)
this.b.aM(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aJ(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.m(0,V.aJ(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isai:1},ka:{"^":"d;0a,0b,0c,0d,0e,0f,0r",
gF:function(){var z=this.r
if(z==null){z=D.W()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.G(a)},
aR:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.W()
z.e=y
z=y}else z=y
y=H.c(this.ge9(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.W()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
h8:[function(a){var z,y,x,w
H.f(a,"$ist")
if(!J.E(this.b,this.a.b.c))return
H.ag(a,"$iscW")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.m()
w=z+y*x
if(z!==w){this.d=w
z=new D.C("zoom",z,w,this,[P.r])
z.b=!0
this.T(z)}},"$1","ge9",4,0,5],
aN:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aJ(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isai:1}}],["","",,M,{"^":"",hy:{"^":"d;0a,0b,0c,0d,0e,0f,0r,0x",
ax:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.G(a)},function(){return this.ax(null)},"fV","$1","$0","gai",0,2,6],
hc:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aR
H.w(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.I)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.bU()
s.a=H.j([],v)
s.c=0
t.sa5(s)}s=t.ga5()
s.toString
H.c(x,w)
C.a.h(s.a,x)}}z=new D.e6(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","ged",8,0,14],
hd:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aR
H.w(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gai(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.I)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.bU()
s.a=H.j([],v)
s.c=0
t.sa5(s)}s=t.ga5()
s.toString
H.c(x,w)
C.a.M(s.a,x)}}z=new D.e7(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gee",8,0,14],
sdc:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gF()
z.toString
y=H.c(this.gai(),{func:1,ret:-1,args:[D.t]})
C.a.M(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gF()
z.toString
y=H.c(this.gai(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.C("technique",x,this.c,this,[O.d4])
z.b=!0
this.ax(z)}},
gF:function(){var z=this.x
if(z==null){z=D.W()
this.x=z}return z},
aK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.d8(this.c)
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
if(typeof x!=="number")return H.n(x)
u=C.c.ae(v.a*x)
if(typeof w!=="number")return H.n(w)
t=C.c.ae(v.b*w)
s=C.c.ae(v.c*x)
a.c=s
v=C.c.ae(v.d*w)
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
s.d7(V.aJ(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.em
if(y==null){y=new V.o(0,0,-1)
m=y.p(0,Math.sqrt(y.A(y)))
y=new V.o(0,1,0).ag(m)
l=y.p(0,Math.sqrt(y.A(y)))
k=m.ag(l)
j=new V.o(0,0,0)
y=V.aJ(l.a,k.a,m.a,l.N(0).A(j),l.b,k.b,m.b,k.N(0).A(j),l.c,k.c,m.c,m.N(0).A(j),0,0,0,1)
$.em=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.m(0,i)}a.db.d7(i)
for(z=this.d.a,z=new J.aH(z,z.length,0,[H.v(z,0)]);z.L();)z.d.aM(0,a)
for(z=this.d.a,z=new J.aH(z,z.length,0,[H.v(z,0)]);z.L();)z.d.aK(a)
this.a.toString
a.cy.bU()
a.db.bU()
this.b.toString
a.d6()},
$ispt:1}}],["","",,A,{"^":"",dD:{"^":"d;a,b,c"},h1:{"^":"d;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fc:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fb:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hK:{"^":"eu;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,a,b,0c,0d,0e,0f,0r"},eu:{"^":"dG;",
dw:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cn:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fy(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.T("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
eH:function(){var z,y,x,w,v,u
z=H.j([],[A.dD])
y=this.a
x=H.B(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dD(y,v.name,u))}this.f=new A.h1(z)},
eI:function(){var z,y,x,w,v,u
z=H.j([],[A.ae])
y=this.a
x=H.B(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.f8(v.type,v.size,v.name,u))}this.r=new A.jR(z)},
aA:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.jK(z,y,b,c)
else return A.d6(z,y,b,a,c)},
dS:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.jV(z,y,b,c)
else return A.d6(z,y,b,a,c)},
dT:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.jW(z,y,b,c)
else return A.d6(z,y,b,a,c)},
b4:function(a,b){return new P.f1(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
f8:function(a,b,c,d){switch(a){case 5120:return this.aA(b,c,d)
case 5121:return this.aA(b,c,d)
case 5122:return this.aA(b,c,d)
case 5123:return this.aA(b,c,d)
case 5124:return this.aA(b,c,d)
case 5125:return this.aA(b,c,d)
case 5126:return new A.eP(this.a,this.e,c,d)
case 35664:return new A.jM(this.a,this.e,c,d)
case 35665:return new A.cn(this.a,this.e,c,d)
case 35666:return new A.jP(this.a,this.e,c,d)
case 35667:return new A.jN(this.a,this.e,c,d)
case 35668:return new A.jO(this.a,this.e,c,d)
case 35669:return new A.jQ(this.a,this.e,c,d)
case 35674:return new A.jT(this.a,this.e,c,d)
case 35675:return new A.jU(this.a,this.e,c,d)
case 35676:return new A.co(this.a,this.e,c,d)
case 35678:return this.dS(b,c,d)
case 35680:return this.dT(b,c,d)
case 35670:throw H.a(this.b4("BOOL",c))
case 35671:throw H.a(this.b4("BOOL_VEC2",c))
case 35672:throw H.a(this.b4("BOOL_VEC3",c))
case 35673:throw H.a(this.b4("BOOL_VEC4",c))
default:throw H.a(P.T("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},ae:{"^":"d;"},jR:{"^":"d;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.O()},
fj:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.I)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.fj("\n")}},jK:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},jN:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},jO:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},jQ:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},jL:{"^":"ae;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
u:{
d6:function(a,b,c,d,e){var z=new A.jL(a,b,c,e)
z.f=d
z.e=P.iy(d,0,!1,P.m)
return z}}},eP:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},jM:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},cn:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},jP:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},jT:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},jU:{"^":"ae;a,b,c,d",
i:function(a){return"UniformMat3: "+H.k(this.c)}},co:{"^":"ae;a,b,c,d",
bh:function(a){var z=new Float32Array(H.ct(H.w(a,"$ish",[P.r],"$ash")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},jV:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},jW:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cw:function(a,b,c,d){var z
H.c(c,{func:1,ret:-1,args:[F.A,P.r,P.r]})
z=F.a0()
F.bN(z,b,c,d,a,1,0,0,1)
F.bN(z,b,c,d,a,0,1,0,3)
F.bN(z,b,c,d,a,0,0,1,2)
F.bN(z,b,c,d,a,-1,0,0,0)
F.bN(z,b,c,d,a,0,-1,0,0)
F.bN(z,b,c,d,a,0,0,-1,3)
z.ab()
return z},
cs:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.a7()
return(y>0?z+4:z)*2},
bN:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.c(c,{func:1,ret:-1,args:[F.A,P.r,P.r]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.o(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.o(t+h,s+f,r+g)
z.b=q
p=new V.o(t-h,s-f,r-g)
z.c=p
o=new V.o(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cs(y)
k=F.cs(z.b)
j=F.c7(d,e,new F.mg(z,F.cs(z.c),F.cs(z.d),k,l,c),b)
if(j!=null)a.aI(j)},
cx:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.c(d,{func:1,ret:P.r,args:[P.r]})
if(d==null)d=new F.mG()
if(e<3)return
z=F.a0()
y=b?-1:1
x=-6.283185307179586/e
w=H.j([],[F.A])
v=z.a
u=new V.o(0,0,y)
u=u.p(0,Math.sqrt(u.A(u)))
C.a.h(w,v.eY(new V.am(a,-1,-1,-1),new V.P(1,1,1,1),new V.R(0,0,c),new V.o(0,0,y),new V.L(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.n(p)
o=new V.o(r,q,y).p(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.ap(new V.am(a,-1,-1,-1),null,new V.P(n,l,m,1),new V.R(r*p,q*p,c),new V.o(0,0,y),new V.L(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.cF(w)
return z},
dp:function(a,b,c,d,e,f){return F.fz(!0,c,d,new F.mA(a,f),e)},
fz:function(a,b,c,d,e){var z
H.c(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
z=F.c7(c,e,new F.mC(d),null)
if(z==null)return
z.ab()
z.b6()
if(b)z.aI(F.cx(3,!1,1,new F.mD(d),e))
z.aI(F.cx(1,!0,-1,new F.mE(d),e))
return z},
fL:function(a,b){var z=F.c7(a,b,new F.mW(),null)
z.d.bd()
z.ab()
z.b6()
return z},
fK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.a0()
y=Math.sqrt(5)/2+0.5
x=F.af(z,new V.o(-1,y,0))
w=F.af(z,new V.o(1,y,0))
v=-y
u=F.af(z,new V.o(-1,v,0))
t=F.af(z,new V.o(1,v,0))
s=F.af(z,new V.o(0,-1,v))
r=F.af(z,new V.o(0,1,v))
q=F.af(z,new V.o(0,-1,y))
p=F.af(z,new V.o(0,1,y))
o=F.af(z,new V.o(y,0,1))
n=F.af(z,new V.o(y,0,-1))
m=F.af(z,new V.o(v,0,1))
l=F.af(z,new V.o(v,0,-1))
F.Z(z,x,l,r,a)
F.Z(z,x,r,w,a)
F.Z(z,x,w,p,a)
F.Z(z,x,p,m,a)
F.Z(z,x,m,l,a)
F.Z(z,w,r,n,a)
F.Z(z,r,l,s,a)
F.Z(z,l,m,u,a)
F.Z(z,m,p,q,a)
F.Z(z,p,w,o,a)
F.Z(z,t,n,s,a)
F.Z(z,t,s,u,a)
F.Z(z,t,u,q,a)
F.Z(z,t,q,o,a)
F.Z(z,t,o,n,a)
F.Z(z,s,n,r,a)
F.Z(z,u,s,l,a)
F.Z(z,q,u,m,a)
F.Z(z,o,q,p,a)
F.Z(z,n,o,w,a)
z.d_(new F.da(),new F.kn())
return z},
af:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.A(b)))
z=b.a
y=b.b
x=b.c
w=F.ap(null,null,null,new V.R(z,y,x),b,null,null,null,0)
v=a.fe(w,new F.da())
if(v!=null)return v
u=z*0.5+0.5
t=y*0.5+0.5
if(typeof x!=="number")return x.m()
s=x*0.5+0.5
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
w.sa1(0,new V.P(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sc_(new V.L(q,p<0?-p:p))
a.a.h(0,w)
return w},
Z:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.a0(0,b,d,c)
else{z=F.af(a,b.r.t(0,c.r).m(0,0.5))
y=F.af(a,c.r.t(0,d.r).m(0,0.5))
x=F.af(a,d.r.t(0,b.r).m(0,0.5))
w=e-1
F.Z(a,b,z,x,w)
F.Z(a,z,c,y,w)
F.Z(a,y,x,z,w)
F.Z(a,x,y,d,w)}},
dy:function(a,b,c){var z,y
z={}
z.a=b
if(H.c(b,{func:1,ret:P.r,args:[P.r,P.r]})==null)z.a=new F.nZ()
y=F.cw(a,null,new F.o_(z),c)
y.b6()
return y},
o2:function(a,b,c,d){return F.fA(c,a,d,b,new F.o3())},
mU:function(a,b,c,d,e,f){return F.fA(d,a,e,b,new F.mV(f,c))},
fA:function(a,b,c,d,e){var z=F.c7(a,b,new F.mB(H.c(e,{func:1,ret:V.R,args:[P.r]}),d,b,c),null)
if(z==null)return
z.ab()
z.b6()
return z},
fG:function(a,b,c){var z={}
z.a=b
if(H.c(b,{func:1,ret:P.r,args:[P.r,P.r]})==null)z.a=new F.mL()
return F.c7(c,a,new F.mM(z),null)},
c7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.c(c,{func:1,ret:-1,args:[F.A,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.a0()
y=H.j([],[F.A])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ap(null,null,new V.P(u,0,0,1),null,null,new V.L(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bM(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ap(null,null,new V.P(o,n,m,1),null,null,new V.L(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bM(d))}}z.d.eX(a+1,b+1,y)
return z},
mg:{"^":"b:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bP(z.b,b).bP(z.d.bP(z.c,b),c)
a.sV(0,new V.R(y.a,y.b,y.c))
a.saX(y.p(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
a.sbD(new V.am(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mG:{"^":"b:17;",
$1:function(a){return 1}},
mA:{"^":"b:9;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mC:{"^":"b:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.n(v)
y=-y*v
u=x*v
a.sV(0,new V.R(y,u,w))
u=new V.o(y,u,w)
a.saX(u.p(0,Math.sqrt(u.A(u))))
a.sbD(new V.am(1-c,2+c,-1,-1))}},
mD:{"^":"b:17;a",
$1:function(a){return this.a.$2(a,1)}},
mE:{"^":"b:17;a",
$1:function(a){return this.a.$2(1-a,0)}},
mW:{"^":"b:7;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.o(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.p(0,Math.sqrt(w.A(w)))
a.sV(0,new V.R(x.a,x.b,x.c))}},
nZ:{"^":"b:9;",
$2:function(a,b){return 0}},
o_:{"^":"b:7;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.n(z)
y=a.f
x=new V.o(y.a,y.b,y.c)
z=x.p(0,Math.sqrt(x.A(x))).m(0,1+z)
a.sV(0,new V.R(z.a,z.b,z.c))}},
o3:{"^":"b:21;",
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)}},
mV:{"^":"b:21;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.R(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mB:{"^":"b:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dz(y.$1(z),x)
x=J.dz(y.$1(z+3.141592653589793/this.c),x).H(0,w)
x=new V.o(x.a,x.b,x.c)
v=x.p(0,Math.sqrt(x.A(x)))
u=new V.o(1,0,0)
y=v.ag(!v.D(0,u)?new V.o(0,0,1):u)
t=y.p(0,Math.sqrt(y.A(y)))
y=t.ag(v)
u=y.p(0,Math.sqrt(y.A(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.m(0,y*x)
x=t.m(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.H()
if(typeof q!=="number")return H.n(q)
a.sV(0,w.t(0,new V.R(y.a-x.a,y.b-x.b,r-q)))}},
mL:{"^":"b:9;",
$2:function(a,b){return 0}},
mM:{"^":"b:7;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sV(0,new V.R(z,y,this.a.a.$2(b,c)))
x=new V.o(z,y,1)
a.saX(x.p(0,Math.sqrt(x.A(x))))
x=1-b
w=1-c
a.sbD(new V.am(b*c,2+x*c,4+b*w,6+x*w))}},
J:{"^":"d;0a,0b,0c,0d,0e",
as:function(){if(!this.gaT()){C.a.M(this.a.a.d.b,this)
this.a.a.S()}this.bw()
this.bx()
this.ez()},
bA:function(a){this.a=a
C.a.h(a.d.b,this)},
bB:function(a){this.b=a
C.a.h(a.d.c,this)},
eG:function(a){this.c=a
C.a.h(a.d.d,this)},
bw:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
bx:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
ez:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gaT:function(){return this.a==null||this.b==null||this.c==null},
dJ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.o(0,0,0)
if(y!=null)v=v.t(0,y)
if(x!=null)v=v.t(0,x)
if(w!=null)v=v.t(0,w)
if(v.cY())return
return v.p(0,Math.sqrt(v.A(v)))},
dO:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.H(0,y)
z=new V.o(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.A(z)))
z=w.H(0,y)
z=new V.o(z.a,z.b,z.c)
z=v.ag(z.p(0,Math.sqrt(z.A(z))))
return z.p(0,Math.sqrt(z.A(z)))},
bI:function(){if(this.d!=null)return!0
var z=this.dJ()
if(z==null){z=this.dO()
if(z==null)return!1}this.d=z
this.a.a.S()
return!0},
dI:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.o(0,0,0)
if(y!=null)v=v.t(0,y)
if(x!=null)v=v.t(0,x)
if(w!=null)v=v.t(0,w)
if(v.cY())return
return v.p(0,Math.sqrt(v.A(v)))},
dN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.H(0,u)
z=new V.o(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.H(0,u).m(0,l).t(0,u).H(0,x)
z=new V.o(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.A(z)))
z=k.ag(m)
z=z.p(0,Math.sqrt(z.A(z))).ag(k)
m=z.p(0,Math.sqrt(z.A(z)))}return m},
bG:function(){if(this.e!=null)return!0
var z=this.dI()
if(z==null){z=this.dN()
if(z==null)return!1}this.e=z
this.a.a.S()
return!0},
ay:function(a,b){var z=b.a
if(z==null)throw H.a(P.T("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.T("May not replace a face's vertex with a vertex attached to a different shape."))},
gf5:function(a){if(J.E(this.a,this.b))return!0
if(J.E(this.b,this.c))return!0
if(J.E(this.c,this.a))return!0
return!1},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var z,y
if(this.gaT())return a+"disposed"
z=a+C.b.ad(J.ab(this.a.e),0)+", "+C.b.ad(J.ab(this.b.e),0)+", "+C.b.ad(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.E("")},
u:{
b1:function(a,b,c){var z,y,x
z=new F.J()
y=a.a
if(y==null)H.H(P.T("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.H(P.T("May not create a face with vertices attached to different shapes."))
z.bA(a)
z.bB(b)
z.eG(c)
C.a.h(z.a.a.d.b,z)
z.a.a.S()
return z}}},
hB:{"^":"d;"},
jo:{"^":"hB;",
aH:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.q()
z=z.e
y=c.c
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
b4:{"^":"d;0a,0b",
as:function(){if(!this.gaT()){C.a.M(this.a.a.c.b,this)
this.a.a.S()}this.bw()
this.bx()},
bA:function(a){this.a=a
C.a.h(a.c.b,this)},
bB:function(a){this.b=a
C.a.h(a.c.c,this)},
bw:function(){var z=this.a
if(z!=null){C.a.M(z.c.b,this)
this.a=null}},
bx:function(){var z=this.b
if(z!=null){C.a.M(z.c.c,this)
this.b=null}},
gaT:function(){return this.a==null||this.b==null},
ay:function(a,b){var z=b.a
if(z==null)throw H.a(P.T("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.T("May not replace a line's vertex with a vertex attached to a different shape."))},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){if(this.gaT())return a+"disposed"
return a+C.b.ad(J.ab(this.a.e),0)+", "+C.b.ad(J.ab(this.b.e),0)},
O:function(){return this.E("")},
u:{
ed:function(a,b){var z,y,x
z=new F.b4()
if(a==null)H.H(P.T("May not create a line with a null start vertex."))
if(b==null)H.H(P.T("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.H(P.T("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.H(P.T("May not create a line with vertices attached to different shapes."))
z.bA(a)
z.bB(b)
C.a.h(z.a.a.c.b,z)
z.a.a.S()
return z}}},
io:{"^":"d;"},
jJ:{"^":"io;",
aH:function(a,b,c){var z,y
z=b.a
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.q()
z=z.e
y=c.b
y.a.a.q()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.q()
z=z.e
y=c.a
y.a.a.q()
y=y.e
return z==null?y==null:z===y}else return!1}}},
d_:{"^":"d;0a",
as:function(){var z=this.a
if(z!=null){C.a.M(z.a.b.b,this)
this.a.a.S()}this.ey()},
eF:function(a){this.a=a
C.a.h(a.b.b,this)},
ey:function(){var z=this.a
if(z!=null){C.a.M(z.b.b,this)
this.a=null}},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ad(J.ab(z.e),0)},
O:function(){return this.E("")},
u:{
d0:function(a){var z=new F.d_()
if(a.a==null)H.H(P.T("May not create a point with a vertex which is not attached to a shape."))
z.eF(a)
C.a.h(z.a.a.b.b,z)
z.a.a.S()
return z}}},
a6:{"^":"d;0a,0b,0c,0d,0e",
gF:function(){var z=this.e
if(z==null){z=D.W()
this.e=z}return z},
aI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.c
a.a.q()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.I)(z),++w){v=z[w]
this.a.h(0,v.X())}this.a.q()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.I)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.d0(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.I)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.t()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.ed(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.I)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.t()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.t()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.b1(p,o,m)}z=this.e
if(!(z==null))z.am(0)},
ab:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ab()||!1
if(!this.a.ab())y=!1
z=this.e
if(!(z==null))z.am(0)
return y},
f4:function(a){var z,y,x,w,v,u,t,s,r
z=this.cJ()
y=new V.o(z.d,z.e,z.f)
x=Math.sqrt(y.A(y))
if(x<=0)x=1
a=new F.j3()
a.a=1/x
a.b=new V.R(z.a,z.b,z.c)
for(w=this.a.c.length-1;w>=0;--w){y=this.a.c
if(w>=y.length)return H.e(y,w)
v=y[w]
y=a.b
u=v.f
t=y.a-u.a
s=y.b-u.b
y=y.c
u=u.c
if(typeof y!=="number")return y.H()
if(typeof u!=="number")return H.n(u)
r=y-u
u=Math.sqrt(t*t+s*s+r*r)*a.a
if(v.ch!==u){v.ch=u
y=v.a
if(y!=null){y=y.e
if(!(y==null))y.G(null)}}}},
f3:function(){return this.f4(null)},
cJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.c
y=z.length
if(y<=0)return V.es(0,0,0,0,0,0)
z=z[0].f
x=V.es(z.a,z.b,z.c,0,0,0)
for(w=y-1,z=this.a;w>=1;--w){v=z.c
if(w>=v.length)return H.e(v,w)
v=v[w].f
u=v.a
t=v.b
v=v.c
s=x.d
r=x.a
if(u<r)s+=r-u
else{if(u>r+s)s=u-r
u=r}q=x.e
p=x.b
if(t<p)q+=p-t
else{if(t>p+q)q=t-p
t=p}o=x.f
n=x.c
if(typeof v!=="number")return v.I()
if(typeof n!=="number")return H.n(n)
if(v<n){o+=n-v
m=v}else{if(v>n+o)o=v-n
m=n}x=new V.d1(u,t,m,s,q,o)}return x},
ff:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.e(x,y)
w=x[y]
if(b.aH(0,a,w))return w}return},
fe:function(a,b){return this.ff(a,b,0)},
e0:function(a,b,c,d,e){var z,y,x
H.w(d,"$ish",[F.A],"$ash")
H.w(e,"$ish",[P.m],"$ash")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.aH(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
eB:function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$ish",[P.m],"$ash")
H.jr(b,J.mo(),H.v(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.e(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.e(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.j(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.H(P.T("May not replace a face's vertex when the point has been disposed."))
if(J.E(v,w)){x.ay(w,a)
v=x.a
if(v!=null){C.a.M(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.E(x.b,w)){x.ay(w,a)
v=x.b
if(v!=null){C.a.M(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.E(x.c,w)){x.ay(w,a)
v=x.c
if(v!=null){C.a.M(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.G(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.j(0,0)
v=x.a
if(v==null||x.b==null)H.H(P.T("May not replace a line's vertex when the point has been disposed."))
if(J.E(v,w)){x.ay(w,a)
v=x.a
if(v!=null){C.a.M(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.E(x.b,w)){x.ay(w,a)
v=x.b
if(v!=null){C.a.M(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.G(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.H(P.T("May not replace a point's vertex when the point has been disposed."))
if(J.E(v,w)){if(a.a==null)H.H(P.T("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.M(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.G(null)}}x=this.a
v=x.c
if(y>=v.length)return H.e(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.H(P.T("May not remove a vertex without first making it empty."))
t.a=null
C.a.fJ(v,y)
v=x.a.e
if(!(v==null))v.G(null)
x.b=!0}},
d_:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.A],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.j([],z)
t=H.j([],x)
if(this.e0(a,v,y,u,t)){s=b.aI(u)
if(s!=null){this.eB(s,t)
y-=t.length}}}this.a.q()
this.c.bd()
this.d.bd()
this.b.fK()
this.c.bW(new F.jJ())
this.d.bW(new F.jo())
z=this.e
if(!(z==null))z.am(0)},
eZ:function(a){this.d_(new F.da(),new F.iO())},
b6:function(){return this.eZ(null)},
f1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aN().a)!==0?1:0
if((y&$.$get$aM().a)!==0)++x
if((y&$.$get$aL().a)!==0)++x
if((y&$.$get$bi().a)!==0)++x
if((y&$.$get$bj().a)!==0)++x
if((y&$.$get$aU().a)!==0)++x
if((y&$.$get$bH().a)!==0)++x
if((y&$.$get$bk().a)!==0)++x
if((y&$.$get$bh().a)!==0)++x
w=b.gc7(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.r
t=H.j(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.j(y,[Z.dJ])
for(r=0,q=0;q<x;++q){p=b.f_(q)
o=p.gc7(p)
C.a.k(s,q,new Z.dJ(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].fo(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.k(t,l,m[k]);++l}}r+=o}H.w(t,"$ish",[u],"$ash")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.ct(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dK(new Z.eZ(34962,j),s,b)
i.b=H.j([],[Z.cf])
if(this.b.b.length!==0){u=P.m
h=H.j([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)}f=Z.dc(y,34963,H.w(h,"$ish",[u],"$ash"))
C.a.h(i.b,new Z.cf(0,h.length,f))}if(this.c.b.length!==0){u=P.m
h=H.j([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)}f=Z.dc(y,34963,H.w(h,"$ish",[u],"$ash"))
C.a.h(i.b,new Z.cf(1,h.length,f))}if(this.d.b.length!==0){u=P.m
h=H.j([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.q()
C.a.h(h,g.e)}f=Z.dc(y,34963,H.w(h,"$ish",[u],"$ash"))
C.a.h(i.b,new Z.cf(4,h.length,f))}return i},
i:function(a){var z=H.j([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.E("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.E("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.E("   "))}return C.a.a3(z,"\n")},
ah:function(a){var z=this.e
if(!(z==null))z.G(a)},
S:function(){return this.ah(null)},
$iscl:1,
u:{
a0:function(){var z,y
z=new F.a6()
y=new F.kj(z)
y.b=!1
y.c=H.j([],[F.A])
z.a=y
y=new F.jn(z)
y.b=H.j([],[F.d_])
z.b=y
y=new F.jm(z)
y.b=H.j([],[F.b4])
z.c=y
y=new F.jl(z)
y.b=H.j([],[F.J])
z.d=y
z.e=null
return z}}},
cl:{"^":"cL;"},
jl:{"^":"d;a,0b",
a0:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.b1(b,c,d)},
cF:function(a){var z,y,x,w,v,u
H.w(a,"$ish",[F.A],"$ash")
z=H.j([],[F.J])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.e(a,v)
v=a[v]
if(w>=u)return H.e(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.b1(x,v,u))}}return z},
eX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$ish",[F.A],"$ash")
z=H.j([],[F.J])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.e(c,x)
r=c[x];++x
if(x>=s)return H.e(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.e(c,p)
o=c[p]
if(y<0||y>=s)return H.e(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.b1(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b1(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b1(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.b1(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
bW:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aH(0,v,t)){v.as()
break}}}}},
bd:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.gf5(x)
if(y)x.as()}},
ab:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.I)(z),++w)if(!z[w].bI())x=!1
return x},
bH:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.I)(z),++w)if(!z[w].bG())x=!1
return x},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.j([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].E(a))
return C.a.a3(z,"\n")},
O:function(){return this.E("")}},
jm:{"^":"d;a,0b",
n:function(a,b,c){this.a.a.h(0,b)
this.a.a.h(0,c)
return F.ed(b,c)},
gl:function(a){return this.b.length},
bW:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aH(0,v,t)){v.as()
break}}}}},
bd:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.E(x.a,x.b)
if(y)x.as()}},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.j([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].E(a+(""+x+". ")))}return C.a.a3(z,"\n")},
O:function(){return this.E("")}},
jn:{"^":"d;a,0b",
gl:function(a){return this.b.length},
fK:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.as()}},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.j([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].E(a))
return C.a.a3(z,"\n")},
O:function(){return this.E("")}},
A:{"^":"d;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bM:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ap(this.cx,x,u,z,y,w,v,a,t)},
X:function(){return this.bM(null)},
sV:function(a,b){var z
if(!J.E(this.f,b)){this.f=b
z=this.a
if(z!=null)z.S()}},
saJ:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.E(this.r,a)){this.r=a
z=this.a
if(z!=null)z.S()}},
sP:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.E(this.x,a)){this.x=a
z=this.a
if(z!=null)z.S()}},
sc_:function(a){var z
if(!J.E(this.y,a)){this.y=a
z=this.a
if(z!=null)z.S()}},
saX:function(a){var z
if(!J.E(this.z,a)){this.z=a
z=this.a
if(z!=null)z.S()}},
sa1:function(a,b){var z
if(!J.E(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.S()}},
sdj:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.S()}},
sbD:function(a){var z
if(!J.E(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.S()}},
fo:function(a){var z,y
z=J.O(a)
if(z.D(a,$.$get$aN())){z=this.f
y=[P.r]
if(z==null)return H.j([0,0,0],y)
else return H.j([z.a,z.b,z.c],y)}else if(z.D(a,$.$get$aM())){z=this.r
y=[P.r]
if(z==null)return H.j([0,1,0],y)
else return H.j([z.a,z.b,z.c],y)}else if(z.D(a,$.$get$aL())){z=this.x
y=[P.r]
if(z==null)return H.j([0,0,1],y)
else return H.j([z.a,z.b,z.c],y)}else if(z.D(a,$.$get$bi())){z=this.y
y=[P.r]
if(z==null)return H.j([0,0],y)
else return H.j([z.a,z.b],y)}else if(z.D(a,$.$get$bj())){z=this.z
y=[P.r]
if(z==null)return H.j([0,0,0],y)
else return H.j([z.a,z.b,z.c],y)}else if(z.D(a,$.$get$aU())){z=this.Q
y=[P.r]
if(z==null)return H.j([1,1,1],y)
else return H.j([z.a,z.b,z.c],y)}else if(z.D(a,$.$get$bH())){z=this.Q
if(z==null)return H.j([1,1,1,1],[P.r])
else return z.c0(0)}else if(z.D(a,$.$get$bk()))return H.j([this.ch],[P.r])
else if(z.D(a,$.$get$bh())){z=this.cx
y=[P.r]
if(z==null)return H.j([-1,-1,-1,-1],y)
else return H.j([z.a,z.b,z.c,z.d],y)}else return H.j([],[P.r])},
bI:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.o(0,0,0)
this.d.v(0,new F.kt(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.am(0)}return!0},
bG:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.o(0,0,0)
this.d.v(0,new F.ks(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.am(0)}return!0},
cN:function(a){var z,y,x,w,v
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.b
x.a.a.q()
x=x.e
a.a.a.q()
v=a.e
if(x==null?v==null:x===v)return w}return},
fg:function(a){var z=this.cN(a)
if(z!=null)return z
return a.cN(this)},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var z,y,x
z=H.j([],[P.i])
C.a.h(z,C.b.ad(J.ab(this.e),0))
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
C.a.h(z,V.G(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.a3(z,", ")
return a+"{"+x+"}"},
O:function(){return this.E("")},
u:{
ap:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.A()
y=new F.kr(z)
y.b=H.j([],[F.d_])
z.b=y
y=new F.ko(z)
x=[F.b4]
y.b=H.j([],x)
y.c=H.j([],x)
z.c=y
y=new F.kk(z)
x=[F.J]
y.b=H.j([],x)
y.c=H.j([],x)
y.d=H.j([],x)
z.d=y
h=$.$get$eW()
z.e=0
y=$.$get$aN()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aM().a)!==0?e:null
z.x=(x&$.$get$aL().a)!==0?b:null
z.y=(x&$.$get$bi().a)!==0?f:null
z.z=(x&$.$get$bj().a)!==0?g:null
z.Q=(x&$.$get$eX().a)!==0?c:null
z.ch=(x&$.$get$bk().a)!==0?i:0
z.cx=(x&$.$get$bh().a)!==0?a:null
return z}}},
kt:{"^":"b:3;a",
$1:function(a){var z,y
H.f(a,"$isJ")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.t(0,z)}}},
ks:{"^":"b:3;a",
$1:function(a){var z,y
H.f(a,"$isJ")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.t(0,z)}}},
kj:{"^":"d;a,0b,0c",
q:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.T("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.S()
return!0},
cG:function(a,b,c,d,e,f,g,h,i){var z=F.ap(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
eY:function(a,b,c,d,e,f){return this.cG(a,null,b,c,d,e,f,null,0)},
b5:function(a,b,c,d,e,f){return this.cG(a,null,b,c,null,d,e,f,0)},
bC:function(a,b,c){var z=F.ap(null,null,null,new V.R(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gl:function(a){return this.c.length},
ab:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x)z[x].bI()
return!0},
bH:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x)z[x].bG()
return!0},
f2:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.I)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.m()
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.E(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
this.q()
z=H.j([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].E(a))
return C.a.a3(z,"\n")},
O:function(){return this.E("")}},
kk:{"^":"d;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.e(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.e(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.e(z,b)
return z[b]},
v:function(a,b){H.c(b,{func:1,ret:-1,args:[F.J]})
C.a.v(this.b,b)
C.a.v(this.c,new F.kl(this,b))
C.a.v(this.d,new F.km(this,b))},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.j([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].E(a))
return C.a.a3(z,"\n")},
O:function(){return this.E("")}},
kl:{"^":"b:3;a,b",
$1:function(a){H.f(a,"$isJ")
if(!J.E(a.a,this.a))this.b.$1(a)}},
km:{"^":"b:3;a,b",
$1:function(a){var z
H.f(a,"$isJ")
z=this.a
if(!J.E(a.a,z)&&!J.E(a.b,z))this.b.$1(a)}},
ko:{"^":"d;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.j([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].E(a))
return C.a.a3(z,"\n")},
O:function(){return this.E("")}},
kp:{"^":"d;"},
da:{"^":"kp;",
aH:function(a,b,c){return J.E(b.f,c.f)}},
kq:{"^":"d;"},
j3:{"^":"kq;0a,0b"},
eV:{"^":"d;"},
kn:{"^":"eV;",
aI:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
H.w(a1,"$ish",[F.A],"$ash")
for(z=a1.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a1[m]
k=l.f
if(k!=null){if(x==null)x=k
else{j=x.a
i=k.a
h=x.b
g=k.b
f=x.c
e=k.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.n(e)
x=new V.R(j+i,h+g,f+e)}++y}d=l.r
if(d!=null)if(w==null)w=d
else{j=w.a
i=d.a
h=w.b
g=d.b
f=w.c
e=d.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.n(e)
w=new V.o(j+i,h+g,f+e)}c=l.x
if(c!=null)if(v==null)v=c
else{j=v.a
i=c.a
h=v.b
g=c.b
f=v.c
e=c.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.n(e)
v=new V.o(j+i,h+g,f+e)}b=l.y
if(b!=null){r=r==null?b:new V.L(r.a+b.a,r.b+b.b);++s}a=l.z
if(a!=null){if(p==null)p=a
else{j=p.a
i=a.a
h=p.b
g=a.b
f=p.c
e=a.c
if(typeof f!=="number")return f.t()
if(typeof e!=="number")return H.n(e)
p=new V.o(j+i,h+g,f+e)}++q}j=l.Q
if(j!=null){i=j.a
h=j.b
g=j.c
j=j.d
if(t==null){j=[i,h,g,j]
t=new V.bG(j[0],j[1],j[2],j[3])}else{j=[i,h,g,j]
i=j[0]
h=j[1]
g=j[2]
j=j[3]
t=new V.bG(t.a+i,t.b+h,t.c+g,t.d+j)}++u}j=l.ch
if(typeof j!=="number")return H.n(j)
n+=j;++o}a0=F.ap(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)a0.sV(0,null)
else a0.sV(0,x.p(0,y))
if(w==null)a0.saJ(null)
else a0.saJ(w.p(0,Math.sqrt(w.A(w))))
if(v==null)a0.sP(null)
else a0.sP(v.p(0,Math.sqrt(v.A(v))))
if(s<=0||r==null)a0.sc_(null)
else a0.sc_(r.p(0,s))
if(q<=0||p==null)a0.saX(null)
else a0.saX(p.p(0,q))
if(u<=0||t==null)a0.sa1(0,null)
else{z=t.p(0,u)
z=[z.a,z.b,z.c,z.d]
j=z[0]
i=z[1]
h=z[2]
z=z[3]
if(j<0)j=0
else if(j>1)j=1
if(i<0)i=0
else if(i>1)i=1
if(h<0)h=0
else if(h>1)h=1
if(z<0)z=0
else if(z>1)z=1
a0.sa1(0,new V.P(j,i,h,z))}if(o<=0)a0.sdj(0,0)
else a0.sdj(0,n/o)
return a0}},
iO:{"^":"eV;",
aI:function(a){var z,y,x,w,v,u,t
H.w(a,"$ish",[F.A],"$ash")
z=new V.o(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.t()
if(typeof w!=="number")return H.n(w)
z=new V.o(z.a+v,z.b+u,t+w)}}z=z.p(0,Math.sqrt(z.A(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.I)(a),++x)a[x].saJ(z)
return}},
kr:{"^":"d;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.O()},
E:function(a){var z,y,x,w
z=H.j([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.I)(y),++w)C.a.h(z,y[w].E(a))
return C.a.a3(z,"\n")},
O:function(){return this.E("")}}}],["","",,O,{"^":"",hJ:{"^":"d4;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gF:function(){var z=this.rx
if(z==null){z=D.W()
this.rx=z}return z},
Y:function(a){var z=this.rx
if(!(z==null))z.G(a)},
sa6:function(a){var z,y
z=this.r2
if(!$.p.$2(z,a)){y=this.r2
this.r2=a
z=new D.C("vectorScale",y,a,this,[P.r])
z.b=!0
this.Y(z)}},
a_:function(a,b,c,d,e,f,g){var z,y,x
H.c(e,{func:1,ret:F.a6,args:[F.a6]})
z=b.a.j(0,d)
if(z==null){z=this.cg(a,e.$1(c))
b.a.k(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.d4(a)},
cv:function(a,b,c,d,e,f,g){var z,y,x
H.c(e,{func:1,ret:F.a6,args:[F.cl]})
z=b.a.j(0,d)
if(z==null){z=this.cg(a,e.$1(c))
b.a.k(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.d4(a)},
cg:function(a,b){var z,y,x,w
H.f(b,"$isa6")
z=a.a
y=$.$get$aN()
x=$.$get$aM()
w=b.f1(new Z.ku(z),new Z.db(y.a|x.a|$.$get$aL().a|$.$get$aU().a))
w.b8($.$get$aN()).e=this.a.x.c
w.b8($.$get$aM()).e=this.a.y.c
w.b8($.$get$aU()).e=this.a.z.c
w.b8($.$get$aL()).e=this.a.Q.c
return w},
ht:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.c(new O.hZ(z,new V.P(1,1,1,1)),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.c(new O.i_(z),{func:1,ret:-1,args:[F.J]})
C.a.v(x.b,y)
return z},"$1","geJ",4,0,2],
eW:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.a0()
z.a=new V.P(0,0.7,1,1)
x=a.a
x.toString
z=H.c(new O.ia(z,y),{func:1,ret:-1,args:[F.A]})
C.a.v(x.c,z)
z=new O.i9(y)
x=a.c
x.toString
w=H.c(new O.ib(y,z),{func:1,ret:-1,args:[F.b4]})
C.a.v(x.b,w)
w=a.d
w.toString
z=H.c(new O.ic(y,z),{func:1,ret:-1,args:[F.J]})
C.a.v(w.b,z)
return y},function(a){return this.eW(a,null)},"hC","$2$color","$1","geV",4,3,46],
hA:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.c(new O.i5(new V.P(1,1,1,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","geT",4,0,2],
h9:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.c(new O.hY(new V.P(1,1,0.3,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","gea",4,0,2],
h_:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.c(new O.hP(new V.P(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","gdM",4,0,2],
hu:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.c(new O.i0(new V.P(1,0.3,1,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","geM",4,0,2],
hz:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.c(new O.i3(new V.P(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","geS",4,0,2],
h3:[function(a){var z,y,x
z=F.a0()
y=a.d
y.toString
x=H.c(new O.hT(new V.P(1,1,0.3,1),z),{func:1,ret:-1,args:[F.J]})
C.a.v(y.b,x)
return z},"$1","gdX",4,0,2],
h4:[function(a){var z,y,x
z=F.a0()
y=a.d
y.toString
x=H.c(new O.hU(new V.P(1,1,0.3,1),z),{func:1,ret:-1,args:[F.J]})
C.a.v(y.b,x)
return z},"$1","gdY",4,0,2],
h2:[function(a){var z,y,x
z=F.a0()
y=a.d
y.toString
x=H.c(new O.hS(new V.P(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.J]})
C.a.v(y.b,x)
return z},"$1","gdW",4,0,2],
h5:[function(a){var z,y,x
z=F.a0()
y=a.d
y.toString
x=H.c(new O.hV(new V.P(1,0.3,1,1),z),{func:1,ret:-1,args:[F.J]})
C.a.v(y.b,x)
return z},"$1","gdZ",4,0,2],
h0:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.c(new O.hQ(z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.c(new O.hR(z),{func:1,ret:-1,args:[F.J]})
C.a.v(x.b,y)
return z},"$1","gdP",4,0,2],
hy:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.c(new O.i1(z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.c(new O.i2(z),{func:1,ret:-1,args:[F.J]})
C.a.v(x.b,y)
return z},"$1","geR",4,0,2],
hB:[function(a){var z,y,x,w,v,u,t
z={}
y=F.a0()
x=a.a
w=x.c
if(w.length<1)return y
v=w[0].ch
z.a=v
z.b=v
x.toString
x={func:1,ret:-1,args:[F.A]}
C.a.v(w,H.c(new O.i6(z),x))
w=z.b
u=z.a
if(typeof w!=="number")return w.H()
if(typeof u!=="number")return H.n(u)
t=w-u
z.c=t
if(t<=0)z.c=1
w=a.a
w.toString
x=H.c(new O.i7(z,y),x)
C.a.v(w.c,x)
x=a.d
x.toString
w=H.c(new O.i8(y),{func:1,ret:-1,args:[F.J]})
C.a.v(x.b,w)
return y},"$1","geU",4,0,2],
e4:function(a){var z,y,x
z={}
z.a=0
y=a.a
y.toString
x=H.c(new O.hX(z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return C.e.b9((z.a+1.5)*0.5)},
b0:function(a,b){var z
if(a<0)return new V.a2(0,0,0)
else{z=Math.floor((a+0.5)*0.5)
return V.dR(z/b,a-z*2,1)}},
fZ:[function(a){var z,y,x,w
z=this.e4(a)
y=F.a0()
x=a.a
x.toString
w=H.c(new O.hN(this,z,y),{func:1,ret:-1,args:[F.A]})
C.a.v(x.c,w)
w=a.d
w.toString
x=H.c(new O.hO(y),{func:1,ret:-1,args:[F.J]})
C.a.v(w.b,x)
return y},"$1","gdL",4,0,2],
fY:[function(a){return this.dK(a)},"$1","gce",4,0,2],
dK:function(a){var z,y
z=F.a0()
y=new O.hM(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z},
fX:[function(a){return this.dF(a)},"$1","gcb",4,0,2],
dF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.cJ()
y=F.a0()
x=new O.hL(y)
w=z.a
v=z.b
u=z.c
t=x.$3(w,v,u)
s=w+z.d
r=x.$3(s,v,u)
q=v+z.e
p=x.$3(s,q,u)
o=x.$3(w,q,u)
if(typeof u!=="number")return u.t()
u+=z.f
n=x.$3(w,v,u)
m=x.$3(s,v,u)
l=x.$3(s,q,u)
k=x.$3(w,q,u)
y.c.n(0,t,r)
y.c.n(0,r,p)
y.c.n(0,p,o)
y.c.n(0,o,t)
y.c.n(0,n,m)
y.c.n(0,m,l)
y.c.n(0,l,k)
y.c.n(0,k,n)
y.c.n(0,t,n)
y.c.n(0,r,m)
y.c.n(0,p,l)
y.c.n(0,o,k)
return y}},hZ:{"^":"b:4;a,b",
$1:function(a){var z,y
H.f(a,"$isA")
z=this.a.a
y=a.X()
y.sa1(0,this.b)
y.sP(new V.o(0,0,0))
z.h(0,y)}},i_:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isJ")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},ia:{"^":"b:4;a,b",
$1:function(a){var z,y
H.f(a,"$isA")
z=this.b.a
y=a.X()
y.sa1(0,this.a.a)
y.sP(new V.o(0,0,0))
z.h(0,y)}},i9:{"^":"b:48;a",
$2:function(a,b){if(a.fg(b)==null)this.a.c.n(0,a,b)}},ib:{"^":"b:49;a,b",
$1:function(a){var z,y,x,w
H.f(a,"$isb4")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
z=z.a
x=a.b
x.a.a.q()
x=x.e
z=z.c
if(x>>>0!==x||x>=z.length)return H.e(z,x)
this.b.$2(w,z[x])}},ic:{"^":"b:3;a,b",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isJ")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
z=z.a
y=a.c
y.a.a.q()
y=y.e
z=z.c
if(y>>>0!==y||y>=z.length)return H.e(z,y)
u=z[y]
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},i5:{"^":"b:4;a,b",
$1:function(a){var z,y
z=H.f(a,"$isA").X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.d0(z)}},hY:{"^":"b:4;a,b",
$1:function(a){var z,y,x
z=H.f(a,"$isA").X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},hP:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=a.X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i0:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=a.X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(a.x.ag(a.r).N(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i3:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=a.X()
z.sa1(0,this.a)
z.sP(new V.o(0,0,0))
y=z.X()
y.sP(a.z)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},hT:{"^":"b:3;a,b",
$1:function(a){var z,y
H.f(a,"$isJ")
z=F.ap(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.d0(z)}},hU:{"^":"b:3;a,b",
$1:function(a){var z,y,x
H.f(a,"$isJ")
z=F.ap(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.X()
y.sP(a.d)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},hS:{"^":"b:3;a,b",
$1:function(a){var z,y,x
H.f(a,"$isJ")
z=F.ap(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.X()
y.sP(a.e)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},hV:{"^":"b:3;a,b",
$1:function(a){var z,y,x
H.f(a,"$isJ")
z=F.ap(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.X()
y.sP(a.e.ag(a.d).N(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},hQ:{"^":"b:4;a",
$1:function(a){var z,y
H.f(a,"$isA")
z=this.a.a
y=a.X()
y.sP(new V.o(0,0,0))
z.h(0,y)}},hR:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isJ")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},i1:{"^":"b:4;a",
$1:function(a){var z,y,x,w,v,u,t
H.f(a,"$isA")
z=a.y
y=this.a.a
x=a.X()
w=z.a
v=z.b
if(w<0)w=0
else if(w>1)w=1
u=v<0
if(u)t=0
else t=v>1?1:v
if(u)v=0
else if(v>1)v=1
x.sa1(0,new V.P(w,t,v,1))
x.sP(new V.o(0,0,0))
y.h(0,x)}},i2:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isJ")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},i6:{"^":"b:4;a",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=this.a
y=z.a
x=a.ch
if(typeof y!=="number")return y.a7()
if(typeof x!=="number")return H.n(x)
if(y>x)z.a=x
y=z.b
if(typeof y!=="number")return y.I()
if(y<x)z.b=x}},i7:{"^":"b:4;a,b",
$1:function(a){var z,y,x,w
H.f(a,"$isA")
z=a.ch
y=this.a
x=y.a
if(typeof z!=="number")return z.H()
if(typeof x!=="number")return H.n(x)
w=V.dR((z-x)/y.c*5/6,1,1)
y=this.b.a
x=a.X()
x.sP(new V.o(0,0,0))
x.sa1(0,new V.P(w.a,w.b,w.c,1))
y.h(0,x)}},i8:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isJ")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},hX:{"^":"b:4;a",
$1:function(a){var z,y,x
z=H.f(a,"$isA").cx
if(z==null)z=new V.am(0,0,0,0)
y=this.a
x=Math.max(y.a,z.a)
y.a=x
x=Math.max(x,z.b)
y.a=x
x=Math.max(x,z.c)
y.a=x
y.a=Math.max(x,z.d)}},hN:{"^":"b:4;a,b,c",
$1:function(a){var z,y,x,w
H.f(a,"$isA")
z=a.cx
if(z==null)z=new V.am(0,0,0,0)
y=this.a
x=this.b
w=new V.a2(0,0,0).t(0,y.b0(z.a,x)).t(0,y.b0(z.b,x)).t(0,y.b0(z.c,x)).t(0,y.b0(z.d,x))
x=this.c.a
y=a.X()
y.sP(new V.o(0,0,0))
y.sa1(0,new V.P(w.a,w.b,w.c,1))
x.h(0,y)}},hO:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$isJ")
z=this.a
y=z.a
x=a.a
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
w=y[x]
x=z.a
y=a.b
y.a.a.q()
y=y.e
x=x.c
if(y>>>0!==y||y>=x.length)return H.e(x,y)
v=x[y]
y=z.a
x=a.c
x.a.a.q()
x=x.e
y=y.c
if(x>>>0!==x||x>=y.length)return H.e(y,x)
u=y[x]
z.d.a0(0,w,v,u)}},hM:{"^":"b;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.P(z,y,x,1)
z=this.a
v=z.a.bC(0,0,0)
v.sP(new V.o(0,0,0))
v.saJ(new V.o(1,0,0))
v.sa1(0,w)
u=z.a.bC(a,b,c)
u.sP(new V.o(0,0,0))
u.saJ(new V.o(1,0,0))
u.sa1(0,w)
z.c.n(0,v,u)}},hL:{"^":"b;a",
$3:function(a,b,c){var z=this.a.a.bC(a,b,c)
z.sP(new V.o(0,0,0))
z.saJ(new V.o(a,b,c))
return z}},d4:{"^":"d;"}}],["","",,T,{"^":"",jB:{"^":"d;a,0b,0c,0d,0e"}}],["","",,X,{"^":"",dN:{"^":"d;",$iseh:1},hG:{"^":"ez;0a,0b,0c,0d,0e,0f,0r,0x",
gF:function(){var z=this.x
if(z==null){z=D.W()
this.x=z}return z}},iR:{"^":"d;0a,0b,0c,0d,0e",
gF:function(){var z=this.e
if(z==null){z=D.W()
this.e=z}return z},
aP:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.G(a)},function(){return this.aP(null)},"fW","$1","$0","gca",0,2,6],
saU:function(a){var z,y,x
if(!J.E(this.a,a)){z=this.a
if(z!=null){z=z.gF()
z.toString
y=H.c(this.gca(),{func:1,ret:-1,args:[D.t]})
C.a.M(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gF()
z.toString
y=H.c(this.gca(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.C("mover",x,this.a,this,[U.ai])
z.b=!0
this.aP(z)}},
$iseh:1,
$isdN:1},ez:{"^":"d;"}}],["","",,B,{"^":"",
nU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=document
y=z.body
x=y.style
x.backgroundColor="#FFFFFF"
x.margin="40px"
x.padding="0"
w=z.createElement("div")
x=w.style
x.position="fixed"
x.width="100%"
x.height="100%"
x.left="0px"
x.top="0px"
x.zIndex="-1"
v="url('"+d+"')"
x.backgroundImage=v
x.backgroundRepeat="no-repeat"
y.appendChild(w)
u=z.createElement("div")
x=u.style
x.position="relative"
x.textAlign="center"
y.appendChild(u)
t=z.createElement("div")
x=t.style
x.textAlign="center"
x.marginLeft="auto"
x.marginRight="auto"
x.marginTop="40px"
x.marginBottom="40px"
x.padding="40px"
x.background="rgba(255,255,255,0.8)"
C.n.eE(x,(x&&C.n).cf(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
u.appendChild(t)
if(a.length!==0)z.title=a
s=z.createElement("div")
t.appendChild(s)
s.appendChild(b)
r=z.createElement("div")
x=r.style
x.display="block"
x.clear="both"
s.appendChild(r)
x=W.ac
W.a4(z,"scroll",H.c(new B.nV(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
nW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$ish",[P.i],"$ash")
z=document
y=z.createElement("div")
x=y.style
x.textAlign="center"
x.marginLeft="auto"
x.marginRight="auto"
w=z.createElement("table")
w.id="shellTable"
x=w.style
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
y.appendChild(w)
v=w.insertRow(-1)
u=W.dO(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.f(v.insertCell(-1),"$isbE")
x=c.length>0
s=x?6:5
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.f(q.insertCell(-1),"$isbE").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;p<3;++p){o=z.createElement("div")
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.f(q.insertCell(-1),"$isbE")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.f(q.insertCell(-1),"$isbE")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.f(q.insertCell(-1),"$isbE").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.nU(a,y,!1,"../resources/SnowTop.png")},
nX:function(a){P.jF(C.B,new B.nY(a))},
h9:{"^":"d;0a",
a0:function(a,b,c,d){var z,y,x,w,v
H.c(c,{func:1,ret:-1,args:[P.Q]})
if(this.a==null)return
c.$1(d)
z=document
y=z.createElement("label")
x=y.style
x.whiteSpace="nowrap"
J.c8(this.a).h(0,y)
w=W.e5("checkbox")
w.checked=d
x=W.ac
W.a4(w,"change",H.c(new B.ha(c,w),{func:1,ret:-1,args:[x]}),!1,x)
y.appendChild(w)
v=z.createElement("span")
v.textContent=b
y.appendChild(v)
J.c8(this.a).h(0,z.createElement("br"))},
n:function(a,b,c){return this.a0(a,b,c,!1)}},
ha:{"^":"b:16;a,b",
$1:function(a){this.a.$1(this.b.checked)}},
j4:{"^":"d;a,0b",
a0:function(a,b,c,d){var z,y,x,w,v,u,t
H.c(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.d8().gbc().j(0,z)==null)if(d){c.$0()
this.dg(b)
y=!0}else y=!1
else if(P.d8().gbc().j(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.c8(this.b).h(0,w)
u=W.e5("radio")
u.checked=y
u.name=z
z=W.ac
W.a4(u,"change",H.c(new B.j5(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.c8(this.b).h(0,x.createElement("br"))},
n:function(a,b,c){return this.a0(a,b,c,!1)},
dg:function(a){var z,y,x,w,v
z=P.d8()
y=P.i
x=P.iu(z.gbc(),y,y)
x.k(0,this.a,a)
w=z.d9(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lx([],[]).c2(""),"",v)},
u:{
ep:function(a){var z,y
z=new B.j4(a)
y=document.getElementById(a)
z.b=y
if(y==null)H.H("Failed to find "+z.i(0)+"._elemId for RadioGroup")
return z}}},
j5:{"^":"b:16;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.dg(this.c)
this.d.$0()}}},
nV:{"^":"b:16;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.k(-0.05*C.e.ae(this.b.scrollTop))+"px"
z.top=y}},
nY:{"^":"b:51;a",
$1:function(a){H.f(a,"$isbe")
P.dw(C.e.de(this.a.gfk(),2)+" fps")}}}],["","",,Z,{"^":"",
fN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
B.nW("Test 002",H.j(["controls","shapes","scalars"],[P.i]),"The inspection test is used to check that shapes are built correctly and for checking the data privided by the shapes. Also it is useful for testing out new generated shape configurations. For loaded shape testing see test032.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.H(P.T("Failed to find an element with the identifier, threeDart."))
x=E.jD(y,!0,!0,!0,!1)
w=new E.aR()
w.a=""
w.b=!0
v=E.aR
u=O.dQ(v)
w.y=u
u.bg(w.gft(),w.gfv())
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
w.sc6(0,null)
w.saU(null)
u=new U.e2()
u.c8(U.ai)
u.bg(u.geb(),u.ges())
u.e=null
u.f=V.ch()
u.r=0
t=x.r
s=new U.k9()
r=U.cM()
r.sc3(0,!0)
r.sbQ(6.283185307179586)
r.sbS(0)
r.sV(0,0)
r.sbR(100)
r.sW(0)
r.sbN(0.5)
s.b=r
r=r.gF()
r.toString
q={func:1,ret:-1,args:[D.t]}
p=H.c(s.gaB(),q)
C.a.h(r.a,p)
r=U.cM()
r.sc3(0,!0)
r.sbQ(6.283185307179586)
r.sbS(0)
r.sV(0,0)
r.sbR(100)
r.sW(0)
r.sbN(0.5)
s.c=r
C.a.h(r.gF().a,p)
s.d=null
s.e=!1
s.f=!1
s.r=!1
s.x=2.5
s.y=2.5
s.z=2
s.Q=4
s.cx=!1
s.ch=!1
s.cy=0
s.db=0
s.dx=null
s.dy=0
s.fr=null
s.fx=null
o=new X.az(!1,!1,!1)
n=s.d
s.d=o
r=[X.az]
p=new D.C("modifiers",n,o,s,r)
p.b=!0
s.T(p)
p=s.f
if(p!==!1){s.f=!1
p=new D.C("invertX",p,!1,s,[P.Q])
p.b=!0
s.T(p)}p=s.r
if(p!==!0){s.r=!0
p=new D.C("invertY",p,!0,s,[P.Q])
p.b=!0
s.T(p)}s.aR(t)
u.h(0,s)
t=x.r
s=new U.k8()
p=U.cM()
p.sc3(0,!0)
p.sbQ(6.283185307179586)
p.sbS(0)
p.sV(0,0)
p.sbR(100)
p.sW(0)
p.sbN(0.2)
s.b=p
p=p.gF()
p.toString
m=H.c(s.gaB(),q)
C.a.h(p.a,m)
s.c=null
s.d=!1
s.e=2.5
s.f=2
s.r=4
s.y=!1
s.x=!1
s.z=0
s.Q=null
s.ch=0
s.cx=null
s.cy=null
o=new X.az(!0,!1,!1)
n=s.c
s.c=o
p=new D.C("modifiers",n,o,s,r)
p.b=!0
s.T(p)
s.aR(t)
u.h(0,s)
t=x.r
s=new U.ka()
s.c=0.01
s.d=0
s.e=0
o=new X.az(!1,!1,!1)
s.b=o
r=new D.C("modifiers",null,o,s,r)
r.b=!0
s.T(r)
s.aR(t)
u.h(0,s)
w.saU(u)
l=new O.hJ()
l.b=new V.o(0,0,-1)
l.c=new V.a2(0.2,0.3,0.4)
l.d=new V.a2(0.1,0.2,0.3)
l.e=new V.a2(0.7,0.7,0.7)
l.f=new V.a2(0.3,0.3,0.3)
l.r=new V.a2(0.5,0.5,0.5)
l.x=new V.a2(0.5,0.5,0.5)
l.y=new V.a2(1,1,1)
l.z=new V.a2(0.8,0.8,0.8)
l.Q=!1
l.ch=!1
l.cx=!1
l.cy=!1
l.db=!1
l.dx=!1
l.dy=!1
l.fr=!1
l.fx=!1
l.fy=!1
l.go=!1
l.id=!1
l.k1=!1
l.k2=!1
l.k3=!1
l.k4=!1
l.r1=!1
l.r2=1
l.sa6(0.4)
u=new M.hy()
v=O.dQ(v)
u.d=v
v.bg(u.ged(),u.gee())
u.e=null
u.f=null
u.r=null
u.x=null
k=new X.iR()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.saU(null)
v=k.b
if(!$.p.$2(v,1.0471975511965976)){n=k.b
k.b=1.0471975511965976
v=new D.C("fov",n,1.0471975511965976,k,[P.r])
v.b=!0
k.aP(v)}v=k.c
if(!$.p.$2(v,0.1)){n=k.c
k.c=0.1
v=new D.C("near",n,0.1,k,[P.r])
v.b=!0
k.aP(v)}v=k.d
if(!$.p.$2(v,2000)){n=k.d
k.d=2000
v=new D.C("far",n,2000,k,[P.r])
v.b=!0
k.aP(v)}v=u.a
if(v!==k){if(v!=null){v=v.gF()
v.toString
t=H.c(u.gai(),q)
C.a.M(v.a,t)}n=u.a
u.a=k
v=k.gF()
v.toString
t=H.c(u.gai(),q)
C.a.h(v.a,t)
v=new D.C("camera",n,u.a,u,[X.dN])
v.b=!0
u.ax(v)}j=new X.hG()
v=new V.P(0,0,0,1)
j.a=v
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
v=V.er(0,0,1,1)
j.r=v
v=u.b
if(v!==j){if(v!=null){v=v.gF()
v.toString
t=H.c(u.gai(),q)
C.a.M(v.a,t)}n=u.b
u.b=j
v=j.gF()
v.toString
t=H.c(u.gai(),q)
C.a.h(v.a,t)
v=new D.C("target",n,u.b,u,[X.ez])
v.b=!0
u.ax(v)}u.sdc(null)
u.sdc(l)
u.d.h(0,w)
v=u.a
i=V.aJ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
t=new U.dS()
t.a=i
v.saU(t)
v=x.d
if(v!==u){if(v!=null){v=v.gF()
v.toString
t=H.c(x.gc9(),q)
C.a.M(v.a,t)}x.d=u
v=u.gF()
v.toString
q=H.c(x.gc9(),q)
C.a.h(v.a,q)
x.dB()}v=new B.h9()
z=z.getElementById("controls")
v.a=z
if(z==null)H.H("Failed to find controls for CheckGroup")
v.a0(0,"Filled",new Z.n1(l),!0)
v.a0(0,"Wire Frame",new Z.n2(l),!0)
v.n(0,"Vertices",new Z.n3(l))
v.n(0,"Normals",new Z.ne(l))
v.n(0,"Binormals",new Z.np(l))
v.n(0,"Tangentals",new Z.nA(l))
v.n(0,"Face Centers",new Z.nJ(l))
v.n(0,"Face Normals",new Z.nK(l))
v.n(0,"Face Binormals",new Z.nL(l))
v.n(0,"Face Tangentals",new Z.nM(l))
v.n(0,"Colors",new Z.nN(l))
v.n(0,"Textures2D",new Z.n4(l))
v.n(0,"TexturesCube",new Z.n5(l))
v.n(0,"Weight",new Z.n6(l))
v.n(0,"Bend",new Z.n7(l))
v.a0(0,"Axis",new Z.n8(l),!0)
v.n(0,"AABB",new Z.n9(l))
z=new Z.nO(w)
v=B.ep("shapes")
v.a0(0,"Square",new Z.na(z),!0)
v.n(0,"Cube",new Z.nb(z))
v.n(0,"Cuboid",new Z.nc(z))
v.n(0,"Cuboid+",new Z.nd(z))
v.n(0,"Disk",new Z.nf(z))
v.n(0,"Disk+",new Z.ng(z))
v.n(0,"Cylinder",new Z.nh(z))
v.n(0,"Cylinder+",new Z.ni(z))
v.n(0,"Cone",new Z.nj(z))
v.n(0,"Cylindrical",new Z.nk(z))
v.n(0,"LatLonSphere",new Z.nl(z))
v.n(0,"LatLonSphere+",new Z.nm(z))
v.n(0,"IsoSphere",new Z.nn(z))
v.n(0,"IsoSphere+",new Z.no(z))
v.n(0,"Sphere",new Z.nq(z))
v.n(0,"Sphere+",new Z.nr(z))
v.n(0,"Spherical",new Z.ns(z))
v.n(0,"Toroid",new Z.nt(z))
v.n(0,"Knot",new Z.nu(z))
v.n(0,"Grid",new Z.nv(z))
v.n(0,"Grid+",new Z.nw(z))
z=B.ep("scalars")
z.n(0,"0.01",new Z.nx(l))
z.n(0,"0.02",new Z.ny(l))
z.n(0,"0.04",new Z.nz(l))
z.n(0,"0.06",new Z.nB(l))
z.n(0,"0.08",new Z.nC(l))
z.n(0,"0.1",new Z.nD(l))
z.n(0,"0.2",new Z.nE(l))
z.a0(0,"0.4",new Z.nF(l),!0)
z.n(0,"0.6",new Z.nG(l))
z.n(0,"0.8",new Z.nH(l))
z.n(0,"1.0",new Z.nI(l))
B.nX(x)},
n1:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.Q!==a){z.Q=a
y=new D.C("showFilled",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
n2:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.ch!==a){z.ch=a
y=new D.C("showWireFrame",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
n3:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cx!==a){z.cx=a
y=new D.C("showVertices",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
ne:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cy!==a){z.cy=a
y=new D.C("showNormals",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
np:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.db!==a){z.db=a
y=new D.C("showBinormals",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
nA:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dx!==a){z.dx=a
y=new D.C("showTangentals",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
nJ:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fr!==a){z.fr=a
y=new D.C("showFaceCenters",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
nK:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fx!==a){z.fx=a
y=new D.C("showFaceNormals",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
nL:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fy!==a){z.fy=a
y=new D.C("showFaceBinormals",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
nM:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.go!==a){z.go=a
y=new D.C("showFaceTangentals",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
nN:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.id!==a){z.id=a
y=new D.C("showColorFill",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
n4:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k1!==a){z.k1=a
y=new D.C("showTxt2DColor",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
n5:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dy!==a){z.dy=a
y=new D.C("showTxtCube",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
n6:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k2!==a){z.k2=a
y=new D.C("showWeight",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
n7:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.r1!==a){z.r1=a
y=new D.C("showBend",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
n8:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k3!==a){z.k3=a
y=new D.C("showAxis",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
n9:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k4!==a){z.k4=a
y=new D.C("showAABB",!a,a,z,[P.Q])
y.b=!0
z.Y(y)}}},
nO:{"^":"b:53;a",
$1:function(a){a.f3()
this.a.sc6(0,a)}},
na:{"^":"b:0;a",
$0:function(){var z,y,x,w,v,u,t
z=F.a0()
y=z.a
x=new V.o(-1,-1,1)
x=x.p(0,Math.sqrt(x.A(x)))
w=y.b5(new V.am(1,2,4,6),new V.P(1,0,0,1),new V.R(-1,-1,0),new V.L(0,1),x,null)
y=z.a
x=new V.o(1,-1,1)
x=x.p(0,Math.sqrt(x.A(x)))
v=y.b5(new V.am(0,3,4,6),new V.P(0,0,1,1),new V.R(1,-1,0),new V.L(1,1),x,null)
y=z.a
x=new V.o(1,1,1)
x=x.p(0,Math.sqrt(x.A(x)))
u=y.b5(new V.am(0,2,5,6),new V.P(0,1,0,1),new V.R(1,1,0),new V.L(1,0),x,null)
y=z.a
x=new V.o(-1,1,1)
x=x.p(0,Math.sqrt(x.A(x)))
t=y.b5(new V.am(0,2,4,7),new V.P(1,1,0,1),new V.R(-1,1,0),new V.L(0,0),x,null)
z.d.cF(H.j([w,v,u,t],[F.A]))
z.ab()
this.a.$1(z)}},
nb:{"^":"b:0;a",
$0:function(){this.a.$1(F.cw(1,null,null,1))}},
nc:{"^":"b:0;a",
$0:function(){this.a.$1(F.cw(8,null,null,8))}},
nd:{"^":"b:0;a",
$0:function(){this.a.$1(F.cw(15,null,new Z.n0(),15))}},
n0:{"^":"b:7;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.o(x.a,x.b,x.c)
w=x.p(0,Math.sqrt(x.A(x)))
x=a.f
y=w.m(0,z*0.1+y*0.1)
a.sV(0,x.t(0,new V.R(y.a,y.b,y.c)))}},
nf:{"^":"b:0;a",
$0:function(){this.a.$1(F.cx(-1,!1,0,null,8))}},
ng:{"^":"b:0;a",
$0:function(){this.a.$1(F.cx(-1,!1,0,null,30))}},
nh:{"^":"b:0;a",
$0:function(){this.a.$1(F.dp(1,!0,!0,1,8,1))}},
ni:{"^":"b:0;a",
$0:function(){this.a.$1(F.dp(1,!0,!0,8,16,1))}},
nj:{"^":"b:0;a",
$0:function(){this.a.$1(F.dp(1,!0,!1,1,12,0))}},
nk:{"^":"b:0;a",
$0:function(){this.a.$1(F.fz(!0,!0,25,new Z.n_(),50))}},
n_:{"^":"b:9;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
nl:{"^":"b:0;a",
$0:function(){this.a.$1(F.fL(10,20))}},
nm:{"^":"b:0;a",
$0:function(){this.a.$1(F.fL(20,40))}},
nn:{"^":"b:0;a",
$0:function(){this.a.$1(F.fK(2))}},
no:{"^":"b:0;a",
$0:function(){this.a.$1(F.fK(3))}},
nq:{"^":"b:0;a",
$0:function(){this.a.$1(F.dy(6,null,6))}},
nr:{"^":"b:0;a",
$0:function(){this.a.$1(F.dy(10,null,10))}},
ns:{"^":"b:0;a",
$0:function(){this.a.$1(F.dy(10,new Z.mZ(),10))}},
mZ:{"^":"b:9;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
nt:{"^":"b:0;a",
$0:function(){this.a.$1(F.o2(30,1,15,0.5))}},
nu:{"^":"b:0;a",
$0:function(){this.a.$1(F.mU(120,1,2,12,0.3,3))}},
nv:{"^":"b:0;a",
$0:function(){this.a.$1(F.fG(4,null,4))}},
nw:{"^":"b:0;a",
$0:function(){this.a.$1(F.fG(16,new Z.mY(),16))}},
mY:{"^":"b:9;",
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3}},
nx:{"^":"b:0;a",
$0:function(){this.a.sa6(0.01)}},
ny:{"^":"b:0;a",
$0:function(){this.a.sa6(0.02)}},
nz:{"^":"b:0;a",
$0:function(){this.a.sa6(0.04)}},
nB:{"^":"b:0;a",
$0:function(){this.a.sa6(0.06)}},
nC:{"^":"b:0;a",
$0:function(){this.a.sa6(0.08)}},
nD:{"^":"b:0;a",
$0:function(){this.a.sa6(0.1)}},
nE:{"^":"b:0;a",
$0:function(){this.a.sa6(0.2)}},
nF:{"^":"b:0;a",
$0:function(){this.a.sa6(0.4)}},
nG:{"^":"b:0;a",
$0:function(){this.a.sa6(0.6)}},
nH:{"^":"b:0;a",
$0:function(){this.a.sa6(0.8)}},
nI:{"^":"b:0;a",
$0:function(){this.a.sa6(1)}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e9.prototype
return J.ii.prototype}if(typeof a=="string")return J.bW.prototype
if(a==null)return J.ea.prototype
if(typeof a=="boolean")return J.ih.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bX.prototype
return a}if(a instanceof P.d)return a
return J.cA(a)}
J.ar=function(a){if(typeof a=="string")return J.bW.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bX.prototype
return a}if(a instanceof P.d)return a
return J.cA(a)}
J.c4=function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bX.prototype
return a}if(a instanceof P.d)return a
return J.cA(a)}
J.fC=function(a){if(typeof a=="number")return J.bV.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.c2.prototype
return a}
J.fD=function(a){if(typeof a=="number")return J.bV.prototype
if(typeof a=="string")return J.bW.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.c2.prototype
return a}
J.ds=function(a){if(typeof a=="string")return J.bW.prototype
if(a==null)return a
if(!(a instanceof P.d))return J.c2.prototype
return a}
J.aQ=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bX.prototype
return a}if(a instanceof P.d)return a
return J.cA(a)}
J.E=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).D(a,b)}
J.ax=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.fC(a).a7(a,b)}
J.fT=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.fC(a).I(a,b)}
J.dz=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.fD(a).m(a,b)}
J.dA=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fI(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ar(a).j(a,b)}
J.cE=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fI(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c4(a).k(a,b,c)}
J.fU=function(a,b){return J.ds(a).J(a,b)}
J.fV=function(a,b,c){return J.aQ(a).eA(a,b,c)}
J.fW=function(a,b,c,d){return J.aQ(a).cE(a,b,c,d)}
J.fX=function(a,b){return J.ds(a).Z(a,b)}
J.fY=function(a,b){return J.fD(a).aF(a,b)}
J.cF=function(a,b,c){return J.ar(a).f6(a,b,c)}
J.cG=function(a,b){return J.c4(a).K(a,b)}
J.fZ=function(a,b,c,d){return J.c4(a).at(a,b,c,d)}
J.dB=function(a,b){return J.c4(a).v(a,b)}
J.c8=function(a){return J.aQ(a).gbJ(a)}
J.aY=function(a){return J.O(a).gU(a)}
J.bs=function(a){return J.c4(a).ga2(a)}
J.an=function(a){return J.ar(a).gl(a)}
J.h_=function(a,b){return J.aQ(a).fM(a,b)}
J.h0=function(a,b){return J.aQ(a).sa4(a,b)}
J.ab=function(a){return J.O(a).i(a)}
I.at=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.h=W.cK.prototype
C.n=W.hl.prototype
C.C=J.q.prototype
C.a=J.b3.prototype
C.c=J.e9.prototype
C.D=J.ea.prototype
C.e=J.bV.prototype
C.b=J.bW.prototype
C.K=J.bX.prototype
C.P=H.cZ.prototype
C.Q=W.iN.prototype
C.u=J.iS.prototype
C.m=J.c2.prototype
C.v=W.bI.prototype
C.w=W.kx.prototype
C.y=new P.h5(!1)
C.x=new P.h4(C.y)
C.z=new P.iQ()
C.A=new P.ki()
C.d=new P.lj()
C.B=new P.aI(5e6)
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.q=H.j(I.at([127,2047,65535,1114111]),[P.m])
C.i=H.j(I.at([0,0,32776,33792,1,10240,0,0]),[P.m])
C.j=H.j(I.at([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.k=H.j(I.at([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.M=H.j(I.at([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.l=H.j(I.at([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.r=H.j(I.at([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.N=H.j(I.at([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.t=H.j(I.at([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.L=H.j(I.at([]),[P.i])
C.O=new H.hk(0,{},C.L,[P.i,P.i])
C.f=new P.kb(!1)
$.ay=0
$.bt=null
$.dH=null
$.dj=!1
$.fF=null
$.fv=null
$.fR=null
$.cy=null
$.cC=null
$.dt=null
$.bm=null
$.bO=null
$.bP=null
$.dk=!1
$.Y=C.d
$.dY=null
$.dX=null
$.dW=null
$.dV=null
$.p=V.iH()
$.i4="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec3 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec3 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.hW="precision mediump float;                                   \n                                                           \nuniform vec3 ambientClr;                                   \nuniform vec3 diffuseClr;                                   \n                                                           \nvarying vec3 normal;                                       \nvarying vec3 color;                                        \nvarying vec3 litVec;                                       \n                                                           \nvoid main()                                                \n{                                                          \n   vec3 norm = normalize(normal);                          \n   float scalar = dot(norm, litVec);                       \n   vec3 diffuse = diffuseClr*max(scalar, 0.0);             \n   gl_FragColor = vec4(color*(ambientClr + diffuse), 1.0); \n}                                                          \n"
$.em=null
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
I.$lazy(y,x,w)}})(["dU","$get$dU",function(){return H.fE("_$dart_dartClosure")},"cR","$get$cR",function(){return H.fE("_$dart_js")},"eE","$get$eE",function(){return H.aC(H.cm({
toString:function(){return"$receiver$"}}))},"eF","$get$eF",function(){return H.aC(H.cm({$method$:null,
toString:function(){return"$receiver$"}}))},"eG","$get$eG",function(){return H.aC(H.cm(null))},"eH","$get$eH",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eL","$get$eL",function(){return H.aC(H.cm(void 0))},"eM","$get$eM",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eJ","$get$eJ",function(){return H.aC(H.eK(null))},"eI","$get$eI",function(){return H.aC(function(){try{null.$method$}catch(z){return z.message}}())},"eO","$get$eO",function(){return H.aC(H.eK(void 0))},"eN","$get$eN",function(){return H.aC(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dd","$get$dd",function(){return P.ky()},"bQ","$get$bQ",function(){return[]},"eU","$get$eU",function(){return P.kf()},"f0","$get$f0",function(){return H.iL(H.ct(H.j([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fl","$get$fl",function(){return P.ja("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fr","$get$fr",function(){return P.mi()},"dT","$get$dT",function(){return{}},"eY","$get$eY",function(){return Z.aq(0)},"eW","$get$eW",function(){return Z.aq(511)},"aN","$get$aN",function(){return Z.aq(1)},"aM","$get$aM",function(){return Z.aq(2)},"aL","$get$aL",function(){return Z.aq(4)},"bi","$get$bi",function(){return Z.aq(8)},"bj","$get$bj",function(){return Z.aq(16)},"aU","$get$aU",function(){return Z.aq(32)},"bH","$get$bH",function(){return Z.aq(64)},"eX","$get$eX",function(){return Z.aq(96)},"bk","$get$bk",function(){return Z.aq(128)},"bh","$get$bh",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.D},{func:1,ret:P.D,args:[P.Q]},{func:1,ret:F.a6,args:[F.a6]},{func:1,ret:P.D,args:[F.J]},{func:1,ret:P.D,args:[F.A]},{func:1,ret:-1,args:[D.t]},{func:1,ret:-1,opt:[D.t]},{func:1,ret:P.D,args:[F.A,P.r,P.r]},{func:1,ret:-1},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.D,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.m,[P.l,E.aR]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[W.ac]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:P.D,args:[D.t]},{func:1,ret:P.r},{func:1,ret:V.R,args:[P.r]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.m,[P.l,U.ai]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.by]},{func:1,ret:W.a5,args:[W.N]},{func:1,ret:P.Q,args:[W.N]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.D,args:[P.V]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.S,args:[P.m]},{func:1,ret:P.D,args:[P.i,,]},{func:1,ret:-1,args:[W.bI]},{func:1,ret:P.D,args:[P.i]},{func:1,ret:P.Q,args:[P.r,P.r]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:[P.K,P.i,P.i],args:[[P.K,P.i,P.i],P.i]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[[P.h,P.m],P.m]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,args:[,P.i]},{func:1,ret:F.a6,args:[F.a6],named:{color:V.P}},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1,args:[F.A,F.A]},{func:1,ret:P.D,args:[F.b4]},{func:1,args:[P.i]},{func:1,ret:P.D,args:[P.be]},{func:1,ret:P.D,args:[,],opt:[,]},{func:1,ret:-1,args:[F.a6]},{func:1,ret:P.m,args:[,,]},{func:1,ret:-1,args:[P.d],opt:[P.av]},{func:1,ret:[P.aO,,],args:[,]}]
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
if(x==y)H.o1(d||a)
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
Isolate.at=a.at
Isolate.dq=a.dq
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
if(typeof dartMainRunner==="function")dartMainRunner(Z.fN,[])
else Z.fN([])})})()
//# sourceMappingURL=test.dart.js.map
