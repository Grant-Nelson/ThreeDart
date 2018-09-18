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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isk)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="l"){processStatics(init.statics[b2]=b3.l,b4)
delete b3.l}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cx(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cy=function(){}
var dart=[["","",,H,{"^":"",kG:{"^":"a;a"}}],["","",,J,{"^":"",
D:function(a){return void 0},
cE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bY:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cB==null){H.jZ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.dW("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$c8()]
if(v!=null)return v
v=H.k3(a)
if(v!=null)return v
if(typeof a=="function")return C.A
y=Object.getPrototypeOf(a)
if(y==null)return C.l
if(y===Object.prototype)return C.l
if(typeof w=="function"){Object.defineProperty(w,$.$get$c8(),{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
k:{"^":"a;",
n:function(a,b){return a===b},
gG:function(a){return H.b5(a)},
i:["bW",function(a){return"Instance of '"+H.aC(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fm:{"^":"k;",
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$isal:1},
fo:{"^":"k;",
n:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$isz:1},
c9:{"^":"k;",
gG:function(a){return 0},
i:["bX",function(a){return String(a)}]},
fS:{"^":"c9;"},
bQ:{"^":"c9;"},
bv:{"^":"c9;",
i:function(a){var z=a[$.$get$d_()]
if(z==null)return this.bX(a)
return"JavaScript function for "+H.f(J.a5(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc5:1},
aA:{"^":"k;$ti",
h:function(a,b){H.v(b,H.t(a,0))
if(!!a.fixed$length)H.X(P.a9("add"))
a.push(b)},
H:function(a,b){var z
if(!!a.fixed$length)H.X(P.a9("remove"))
for(z=0;z<a.length;++z)if(J.I(a[z],b)){a.splice(z,1)
return!0}return!1},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(P.aU(a))}},
t:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.K(z,y,H.f(a[y]))
return z.join(b)},
dq:function(a){return this.t(a,"")},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
au:function(a,b,c){var z=a.length
if(b>z)throw H.b(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.b(P.a2(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.t(a,0)])
return H.e(a.slice(b,c),[H.t(a,0)])},
gaQ:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.b(H.fk())},
i:function(a){return P.c6(a,"[","]")},
gJ:function(a){return new J.ae(a,a.length,0,[H.t(a,0)])},
gG:function(a){return H.b5(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.X(P.a9("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.bE(b,"newLength",null))
if(b<0)throw H.b(P.a2(b,0,null,"newLength",null))
a.length=b},
K:function(a,b,c){H.O(b)
H.v(c,H.t(a,0))
if(!!a.immutable$list)H.X(P.a9("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.at(a,b))
if(b>=a.length||b<0)throw H.b(H.at(a,b))
a[b]=c},
$ish:1,
$isc:1,
l:{
fl:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.bE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a2(a,0,4294967295,"length",null))
return J.da(new Array(a),b)},
da:function(a,b){return J.b_(H.e(a,[b]))},
b_:function(a){H.bn(a)
a.fixed$length=Array
return a}}},
kF:{"^":"aA;$ti"},
ae:{"^":"a;a,b,c,0d,$ti",
gC:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bu:{"^":"k;",
gdm:function(a){return a===0?1/a<0:a<0},
bw:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.b(P.a9(""+a+".floor()"))},
P:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.a9(""+a+".round()"))},
bL:function(a,b){var z
if(b>20)throw H.b(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gdm(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){return a&0x1FFFFFFF},
m:function(a,b){if(typeof b!=="number")throw H.b(H.as(b))
return a*b},
bR:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
bZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bj(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.bj(a,b)},
bj:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(P.a9("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
ap:function(a,b){var z
if(a>0)z=this.cX(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
cX:function(a,b){return b>31?0:a>>>b},
X:function(a,b){if(typeof b!=="number")throw H.b(H.as(b))
return a<b},
$isq:1,
$isK:1},
db:{"^":"bu;",$isx:1},
fn:{"^":"bu;"},
bK:{"^":"k;",
aO:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.at(a,b))
if(b<0)throw H.b(H.at(a,b))
if(b>=a.length)H.X(H.at(a,b))
return a.charCodeAt(b)},
am:function(a,b){if(b>=a.length)throw H.b(H.at(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.G(b)
if(typeof b!=="string")throw H.b(P.bE(b,null,null))
return a+b},
av:function(a,b,c){H.O(c)
if(c==null)c=a.length
if(b<0)throw H.b(P.bO(b,null,null))
if(b>c)throw H.b(P.bO(b,null,null))
if(c>a.length)throw H.b(P.bO(c,null,null))
return a.substring(b,c)},
bU:function(a,b){return this.av(a,b,null)},
m:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.p)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
dF:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.m(c,z)+a},
a0:function(a,b){return this.dF(a,b," ")},
d6:function(a,b,c){if(c>a.length)throw H.b(P.a2(c,0,a.length,null,null))
return H.eA(a,b,c)},
i:function(a){return a},
gG:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
$isdm:1,
$isj:1}}],["","",,H,{"^":"",
fk:function(){return new P.hp("No element")},
P:{"^":"hW;a",
gj:function(a){return this.a.length},
k:function(a,b){return C.b.aO(this.a,b)},
$asdX:function(){return[P.x]},
$asn:function(){return[P.x]},
$ash:function(){return[P.x]},
$asc:function(){return[P.x]}},
f6:{"^":"h;"},
dg:{"^":"a;a,b,c,0d,$ti",
gC:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.bC(z)
x=y.gj(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.b(P.aU(z))
w=this.c
if(typeof x!=="number")return H.B(x)
if(w>=x){this.d=null
return!1}this.d=y.v(z,w);++this.c
return!0}},
fE:{"^":"h;a,b,$ti",
gJ:function(a){return new H.fF(J.bo(this.a),this.b,this.$ti)},
gj:function(a){return J.aS(this.a)},
v:function(a,b){return this.b.$1(J.cI(this.a,b))},
$ash:function(a,b){return[b]}},
fF:{"^":"c7;0a,b,c,$ti",
w:function(){var z=this.b
if(z.w()){this.a=this.c.$1(z.gC(z))
return!0}this.a=null
return!1},
gC:function(a){return this.a},
$asc7:function(a,b){return[b]}},
ib:{"^":"h;a,b,$ti",
gJ:function(a){return new H.ic(J.bo(this.a),this.b,this.$ti)}},
ic:{"^":"c7;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gC(z)))return!0
return!1},
gC:function(a){var z=this.a
return z.gC(z)}},
bI:{"^":"a;$ti"},
dX:{"^":"a;$ti"},
hW:{"^":"bL+dX;"}}],["","",,H,{"^":"",
jU:function(a){return init.types[H.O(a)]},
k1:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.D(a).$isu},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a5(a)
if(typeof z!=="string")throw H.b(H.as(a))
return z},
b5:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aC:function(a){var z,y,x,w,v,u,t,s,r
z=J.D(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.t||!!J.D(a).$isbQ){v=C.k(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.am(w,0)===36)w=C.b.bU(w,1)
r=H.cC(H.bn(H.au(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dq:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
h1:function(a){var z,y,x,w
z=H.e([],[P.x])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.b(H.as(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.ap(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.b(H.as(w))}return H.dq(z)},
dr:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.b(H.as(x))
if(x<0)throw H.b(H.as(x))
if(x>65535)return H.h1(a)}return H.dq(a)},
h0:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.ap(z,10))>>>0,56320|z&1023)}throw H.b(P.a2(a,0,1114111,null,null))},
V:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
h_:function(a){return a.b?H.V(a).getUTCFullYear()+0:H.V(a).getFullYear()+0},
fY:function(a){return a.b?H.V(a).getUTCMonth()+1:H.V(a).getMonth()+1},
fU:function(a){return a.b?H.V(a).getUTCDate()+0:H.V(a).getDate()+0},
fV:function(a){return a.b?H.V(a).getUTCHours()+0:H.V(a).getHours()+0},
fX:function(a){return a.b?H.V(a).getUTCMinutes()+0:H.V(a).getMinutes()+0},
fZ:function(a){return a.b?H.V(a).getUTCSeconds()+0:H.V(a).getSeconds()+0},
fW:function(a){return a.b?H.V(a).getUTCMilliseconds()+0:H.V(a).getMilliseconds()+0},
B:function(a){throw H.b(H.as(a))},
i:function(a,b){if(a==null)J.aS(a)
throw H.b(H.at(a,b))},
at:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,"index",null)
z=H.O(J.aS(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.E(b,a,"index",null,z)
return P.bO(b,"index",null)},
jP:function(a,b,c){if(a>c)return new P.bN(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bN(a,c,!0,b,"end","Invalid value")
return new P.ao(!0,b,"end",null)},
as:function(a){return new P.ao(!0,a,null,null)},
b:function(a){var z
if(a==null)a=new P.dl()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eC})
z.name=""}else z.toString=H.eC
return z},
eC:function(){return J.a5(this.dartException)},
X:function(a){throw H.b(a)},
y:function(a){throw H.b(P.aU(a))},
aw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.ap(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ca(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dk(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$dL()
u=$.$get$dM()
t=$.$get$dN()
s=$.$get$dO()
r=$.$get$dS()
q=$.$get$dT()
p=$.$get$dQ()
$.$get$dP()
o=$.$get$dV()
n=$.$get$dU()
m=v.O(y)
if(m!=null)return z.$1(H.ca(H.G(y),m))
else{m=u.O(y)
if(m!=null){m.method="call"
return z.$1(H.ca(H.G(y),m))}else{m=t.O(y)
if(m==null){m=s.O(y)
if(m==null){m=r.O(y)
if(m==null){m=q.O(y)
if(m==null){m=p.O(y)
if(m==null){m=s.O(y)
if(m==null){m=o.O(y)
if(m==null){m=n.O(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dk(H.G(y),m))}}return z.$1(new H.hV(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dz()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ao(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dz()
return a},
aP:function(a){var z
if(a==null)return new H.ed(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ed(a)},
jR:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.K(0,a[y],a[x])}return b},
k0:function(a,b,c,d,e,f){H.m(a,"$isc5")
switch(H.O(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.Z("Unsupported number of arguments for wrapped closure"))},
aO:function(a,b){var z
H.O(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k0)
a.$identity=z
return z},
eS:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.D(d).$isc){z.$reflectionInfo=d
x=H.h4(z).r}else x=d
w=e?Object.create(new H.hq().constructor.prototype):Object.create(new H.c1(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aa
if(typeof u!=="number")return u.E()
$.aa=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.cT(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.jU,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.cN:H.c2
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cT(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
eP:function(a,b,c,d){var z=H.c2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
cT:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.eR(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.eP(y,!w,z,b)
if(y===0){w=$.aa
if(typeof w!=="number")return w.E()
$.aa=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aT
if(v==null){v=H.bF("self")
$.aT=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aa
if(typeof w!=="number")return w.E()
$.aa=w+1
t+=w
w="return function("+t+"){return this."
v=$.aT
if(v==null){v=H.bF("self")
$.aT=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
eQ:function(a,b,c,d){var z,y
z=H.c2
y=H.cN
switch(b?-1:a){case 0:throw H.b(H.hd("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
eR:function(a,b){var z,y,x,w,v,u,t,s
z=$.aT
if(z==null){z=H.bF("self")
$.aT=z}y=$.cM
if(y==null){y=H.bF("receiver")
$.cM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.eQ(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.aa
if(typeof y!=="number")return y.E()
$.aa=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.aa
if(typeof y!=="number")return y.E()
$.aa=y+1
return new Function(z+y+"}")()},
cx:function(a,b,c,d,e,f,g){var z,y
z=J.b_(H.bn(b))
H.O(c)
y=!!J.D(d).$isc?J.b_(d):d
return H.eS(a,z,c,y,!!e,f,g)},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.ad(a,"String"))},
k6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.ad(a,"num"))},
eq:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.ad(a,"bool"))},
O:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.ad(a,"int"))},
ey:function(a,b){throw H.b(H.ad(a,H.G(b).substring(3)))},
k8:function(a,b){var z=J.bC(b)
throw H.b(H.eN(a,z.av(b,3,z.gj(b))))},
m:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.D(a)[b])return a
H.ey(a,b)},
aQ:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.D(a)[b]
else z=!0
if(z)return a
H.k8(a,b)},
bn:function(a){if(a==null)return a
if(!!J.D(a).$isc)return a
throw H.b(H.ad(a,"List"))},
k2:function(a,b){if(a==null)return a
if(!!J.D(a).$isc)return a
if(J.D(a)[b])return a
H.ey(a,b)},
er:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.O(z)]
else return a.$S()}return},
bB:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.er(J.D(a))
if(z==null)return!1
y=H.eu(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.ct)return a
$.ct=!0
try{if(H.bB(a,b))return a
z=H.bD(b)
y=H.ad(a,z)
throw H.b(y)}finally{$.ct=!1}},
cz:function(a,b){if(a!=null&&!H.cw(a,b))H.X(H.ad(a,H.bD(b)))
return a},
el:function(a){var z
if(a instanceof H.o){z=H.er(J.D(a))
if(z!=null)return H.bD(z)
return"Closure"}return H.aC(a)},
kd:function(a){throw H.b(new P.eW(H.G(a)))},
es:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
au:function(a){if(a==null)return
return a.$ti},
lt:function(a,b,c){return H.aR(a["$as"+H.f(c)],H.au(b))},
bm:function(a,b,c,d){var z
H.G(c)
H.O(d)
z=H.aR(a["$as"+H.f(c)],H.au(b))
return z==null?null:z[d]},
an:function(a,b,c){var z
H.G(b)
H.O(c)
z=H.aR(a["$as"+H.f(b)],H.au(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.O(b)
z=H.au(a)
return z==null?null:z[b]},
bD:function(a){var z=H.av(a,null)
return z},
av:function(a,b){var z,y
H.w(b,"$isc",[P.j],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cC(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.O(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.f(b[y])}if('func' in a)return H.jB(a,b)
if('futureOr' in a)return"FutureOr<"+H.av("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.b.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.av(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.av(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.av(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.av(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jQ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.G(z[l])
n=n+m+H.av(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cC:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.j],"$asc")
if(a==null)return""
z=new P.ce("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.av(u,c)}v="<"+z.i(0)+">"
return v},
aR:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bl:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.au(a)
y=J.D(a)
if(y[b]==null)return!1
return H.eo(H.aR(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.G(b)
H.bn(c)
H.G(d)
if(a==null)return a
z=H.bl(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cC(c,0,null)
throw H.b(H.ad(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eo:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a4(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a4(a[y],b,c[y],d))return!1
return!0},
lr:function(a,b,c){return a.apply(b,H.aR(J.D(b)["$as"+H.f(c)],H.au(b)))},
ev:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="z"||a===-1||a===-2||H.ev(z)}return!1},
cw:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="z"||b===-1||b===-2||H.ev(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bB(a,b)}y=J.D(a).constructor
x=H.au(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.a4(y,null,b,null)
return z},
v:function(a,b){if(a!=null&&!H.cw(a,b))throw H.b(H.ad(a,H.bD(b)))
return a},
a4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a4(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.eu(a,b,c,d)
if('func' in a)return c.builtin$cls==="c5"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a4("type" in a?a.type:null,b,x,d)
else if(H.a4(a,b,x,d))return!0
else{if(!('$is'+"aY" in y.prototype))return!1
w=y.prototype["$as"+"aY"]
v=H.aR(w,z?a.slice(1):null)
return H.a4(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bD(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eo(H.aR(r,z),b,u,d)},
eu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a4(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a4(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a4(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a4(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.k5(m,b,l,d)},
k5:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a4(c[w],d,a[w],b))return!1}return!0},
ls:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
k3:function(a){var z,y,x,w,v,u
z=H.G($.et.$1(a))
y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bZ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.G($.en.$2(a,z))
if(z!=null){y=$.bV[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bZ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c_(x)
$.bV[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bZ[z]=x
return x}if(v==="-"){u=H.c_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ex(a,x)
if(v==="*")throw H.b(P.dW(z))
if(init.leafTags[z]===true){u=H.c_(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ex(a,x)},
ex:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cE(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c_:function(a){return J.cE(a,!1,null,!!a.$isu)},
k4:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c_(z)
else return J.cE(z,c,null,null)},
jZ:function(){if(!0===$.cB)return
$.cB=!0
H.k_()},
k_:function(){var z,y,x,w,v,u,t,s
$.bV=Object.create(null)
$.bZ=Object.create(null)
H.jV()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ez.$1(v)
if(u!=null){t=H.k4(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jV:function(){var z,y,x,w,v,u,t
z=C.x()
z=H.aN(C.u,H.aN(C.z,H.aN(C.j,H.aN(C.j,H.aN(C.y,H.aN(C.v,H.aN(C.w(C.k),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.et=new H.jW(v)
$.en=new H.jX(u)
$.ez=new H.jY(t)},
aN:function(a,b){return a(b)||b},
eA:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
eB:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
h3:{"^":"a;a,b,c,d,e,f,r,0x",l:{
h4:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.b_(z)
y=z[0]
x=z[1]
return new H.h3(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
hE:{"^":"a;a,b,c,d,e,f",
O:function(a){var z,y,x
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
l:{
ac:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bP:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
dR:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
fP:{"^":"L;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+z+"' on null"},
l:{
dk:function(a,b){return new H.fP(a,b==null?null:b.method)}}},
fr:{"^":"L;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
l:{
ca:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fr(a,y,z?null:b.receiver)}}},
hV:{"^":"L;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kg:{"^":"o:13;a",
$1:function(a){if(!!J.D(a).$isL)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ed:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa8:1},
o:{"^":"a;",
i:function(a){return"Closure '"+H.aC(this).trim()+"'"},
gbP:function(){return this},
$isc5:1,
gbP:function(){return this}},
dE:{"^":"o;"},
hq:{"^":"dE;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
c1:{"^":"dE;a,b,c,d",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c1))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var z,y
z=this.c
if(z==null)y=H.b5(this.a)
else y=typeof z!=="object"?J.ax(z):H.b5(z)
return(y^H.b5(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.aC(z)+"'")},
l:{
c2:function(a){return a.a},
cN:function(a){return a.c},
bF:function(a){var z,y,x,w,v
z=new H.c1("self","target","receiver","name")
y=J.b_(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
hF:{"^":"L;a",
i:function(a){return this.a},
l:{
ad:function(a,b){return new H.hF("TypeError: "+H.f(P.bG(a))+": type '"+H.el(a)+"' is not a subtype of type '"+b+"'")}}},
eM:{"^":"L;a",
i:function(a){return this.a},
l:{
eN:function(a,b){return new H.eM("CastError: "+H.f(P.bG(a))+": type '"+H.el(a)+"' is not a subtype of type '"+b+"'")}}},
hc:{"^":"L;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
l:{
hd:function(a){return new H.hc(a)}}},
aB:{"^":"fC;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
ga_:function(a){return new H.df(this,[H.t(this,0)])},
bq:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.b9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.b9(y,b)}else return this.dk(b)},
dk:function(a){var z=this.d
if(z==null)return!1
return this.aP(this.aA(z,J.ax(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.an(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.an(w,b)
x=y==null?null:y.b
return x}else return this.dl(b)},
dl:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aA(z,J.ax(a)&0x3ffffff)
x=this.aP(y,a)
if(x<0)return
return y[x].b},
K:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.t(this,0))
H.v(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aD()
this.b=z}this.b3(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aD()
this.c=y}this.b3(y,b,c)}else{x=this.d
if(x==null){x=this.aD()
this.d=x}w=J.ax(b)&0x3ffffff
v=this.aA(x,w)
if(v==null)this.aH(x,w,[this.aE(b,c)])
else{u=this.aP(v,b)
if(u>=0)v[u].b=c
else v.push(this.aE(b,c))}}},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(P.aU(this))
z=z.c}},
b3:function(a,b,c){var z
H.v(b,H.t(this,0))
H.v(c,H.t(this,1))
z=this.an(a,b)
if(z==null)this.aH(a,b,this.aE(b,c))
else z.b=c},
cn:function(){this.r=this.r+1&67108863},
aE:function(a,b){var z,y
z=new H.fu(H.v(a,H.t(this,0)),H.v(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cn()
return z},
aP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
i:function(a){return P.dh(this)},
an:function(a,b){return a[b]},
aA:function(a,b){return a[b]},
aH:function(a,b,c){a[b]=c},
ci:function(a,b){delete a[b]},
b9:function(a,b){return this.an(a,b)!=null},
aD:function(){var z=Object.create(null)
this.aH(z,"<non-identifier-key>",z)
this.ci(z,"<non-identifier-key>")
return z},
$isde:1},
fu:{"^":"a;a,b,0c,0d"},
df:{"^":"f6;a,$ti",
gj:function(a){return this.a.a},
gJ:function(a){var z,y
z=this.a
y=new H.fv(z,z.r,this.$ti)
y.c=z.e
return y}},
fv:{"^":"a;a,b,0c,0d,$ti",
gC:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aU(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jW:{"^":"o:13;a",
$1:function(a){return this.a(a)}},
jX:{"^":"o:25;a",
$2:function(a,b){return this.a(a,b)}},
jY:{"^":"o:24;a",
$1:function(a){return this.a(H.G(a))}},
fp:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdm:1,
l:{
fq:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(new P.fg("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
jQ:function(a){return J.da(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
k7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cs:function(a){return a},
ar:function(a,b,c){H.bn(b)
if(a>>>0!==a||a>=c)throw H.b(H.at(b,a))},
jA:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.b(H.jP(a,b,c))
return b},
fL:{"^":"k;","%":"DataView;ArrayBufferView;cc|e7|e8|fK|e9|ea|ap"},
cc:{"^":"fL;",
gj:function(a){return a.length},
$isu:1,
$asu:I.cy},
fK:{"^":"e8;",
k:function(a,b){H.ar(b,a,a.length)
return a[b]},
$asbI:function(){return[P.q]},
$asn:function(){return[P.q]},
$ish:1,
$ash:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
"%":"Float32Array|Float64Array"},
ap:{"^":"ea;",
$asbI:function(){return[P.x]},
$asn:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]},
$isc:1,
$asc:function(){return[P.x]}},
kO:{"^":"ap;",
k:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kP:{"^":"ap;",
k:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kQ:{"^":"ap;",
k:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"Int8Array"},
kR:{"^":"ap;",
k:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
kS:{"^":"ap;",
k:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kT:{"^":"ap;",
gj:function(a){return a.length},
k:function(a,b){H.ar(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
fM:{"^":"ap;",
gj:function(a){return a.length},
k:function(a,b){H.ar(b,a,a.length)
return a[b]},
au:function(a,b,c){return new Uint8Array(a.subarray(b,H.jA(b,c,a.length)))},
"%":";Uint8Array"},
e7:{"^":"cc+n;"},
e8:{"^":"e7+bI;"},
e9:{"^":"cc+n;"},
ea:{"^":"e9+bI;"}}],["","",,P,{"^":"",
ie:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jI()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aO(new P.ih(z),1)).observe(y,{childList:true})
return new P.ig(z,y,x)}else if(self.setImmediate!=null)return P.jJ()
return P.jK()},
lg:[function(a){self.scheduleImmediate(H.aO(new P.ii(H.d(a,{func:1,ret:-1})),0))},"$1","jI",4,0,10],
lh:[function(a){self.setImmediate(H.aO(new P.ij(H.d(a,{func:1,ret:-1})),0))},"$1","jJ",4,0,10],
li:[function(a){P.ch(C.h,H.d(a,{func:1,ret:-1}))},"$1","jK",4,0,10],
ch:function(a,b){var z
H.d(b,{func:1,ret:-1})
z=C.e.a6(a.a,1000)
return P.jf(z<0?0:z,b)},
dH:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.aD]})
z=C.e.a6(a.a,1000)
return P.jg(z<0?0:z,b)},
jE:function(a,b){if(H.bB(a,{func:1,args:[P.a,P.a8]}))return b.dN(a,null,P.a,P.a8)
if(H.bB(a,{func:1,args:[P.a]}))return H.d(a,{func:1,ret:null,args:[P.a]})
throw H.b(P.bE(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jD:function(){var z,y
for(;z=$.aM,z!=null;){$.bj=null
y=z.b
$.aM=y
if(y==null)$.bi=null
z.a.$0()}},
lq:[function(){$.cu=!0
try{P.jD()}finally{$.bj=null
$.cu=!1
if($.aM!=null)$.$get$cp().$1(P.ep())}},"$0","ep",0,0,2],
ek:function(a){var z=new P.e2(H.d(a,{func:1,ret:-1}))
if($.aM==null){$.bi=z
$.aM=z
if(!$.cu)$.$get$cp().$1(P.ep())}else{$.bi.b=z
$.bi=z}},
jH:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.aM
if(z==null){P.ek(a)
$.bj=$.bi
return}y=new P.e2(a)
x=$.bj
if(x==null){y.b=z
$.bj=y
$.aM=y}else{y.b=x.b
x.b=y
$.bj=y
if(y.b==null)$.bi=y}},
k9:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.F
if(C.d===y){P.bU(null,null,C.d,a)
return}y.toString
P.bU(null,null,y,H.d(y.aK(a),z))},
dG:function(a,b){var z,y
z={func:1,ret:-1}
H.d(b,z)
y=$.F
if(y===C.d){y.toString
return P.ch(a,b)}return P.ch(a,H.d(y.aK(b),z))},
hA:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aD]}
H.d(b,z)
y=$.F
if(y===C.d){y.toString
return P.dH(a,b)}x=y.bn(b,P.aD)
$.F.toString
return P.dH(a,H.d(x,z))},
bT:function(a,b,c,d,e){var z={}
z.a=d
P.jH(new P.jF(z,e))},
ei:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
ej:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
jG:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
bU:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.aK(d):c.d2(d,-1)
P.ek(d)},
ih:{"^":"o:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ig:{"^":"o:34;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ii:{"^":"o:0;a",
$0:function(){this.a.$0()}},
ij:{"^":"o:0;a",
$0:function(){this.a.$0()}},
eg:{"^":"a;a,0b,c",
c7:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aO(new P.ji(this,b),0),a)
else throw H.b(P.a9("`setTimeout()` not found."))},
c8:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aO(new P.jh(this,a,Date.now(),b),0),a)
else throw H.b(P.a9("Periodic timer."))},
$isaD:1,
l:{
jf:function(a,b){var z=new P.eg(!0,0)
z.c7(a,b)
return z},
jg:function(a,b){var z=new P.eg(!1,0)
z.c8(a,b)
return z}}},
ji:{"^":"o:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jh:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.bZ(w,x)}z.c=y
this.d.$1(z)}},
aL:{"^":"a;0a,b,c,d,e,$ti",
du:function(a){if(this.c!==6)return!0
return this.b.b.aW(H.d(this.d,{func:1,ret:P.al,args:[P.a]}),a.a,P.al,P.a)},
dj:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.bB(z,{func:1,args:[P.a,P.a8]}))return H.cz(w.dT(z,a.a,a.b,null,y,P.a8),x)
else return H.cz(w.aW(H.d(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ak:{"^":"a;bi:a<,b,0cQ:c<,$ti",
bJ:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.d){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jE(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.ak(0,$.F,[c])
w=b==null?1:3
this.b4(new P.aL(x,w,a,b,[z,c]))
return x},
dW:function(a,b){return this.bJ(a,null,b)},
b4:function(a){var z,y
z=this.a
if(z<=1){a.a=H.m(this.c,"$isaL")
this.c=a}else{if(z===2){y=H.m(this.c,"$isak")
z=y.a
if(z<4){y.b4(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bU(null,null,z,H.d(new P.iy(this,a),{func:1,ret:-1}))}},
bf:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.m(this.c,"$isaL")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.m(this.c,"$isak")
y=u.a
if(y<4){u.bf(a)
return}this.a=y
this.c=u.c}z.a=this.ao(a)
y=this.b
y.toString
P.bU(null,null,y,H.d(new P.iD(z,this),{func:1,ret:-1}))}},
aG:function(){var z=H.m(this.c,"$isaL")
this.c=null
return this.ao(z)},
ao:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
b7:function(a){var z,y,x,w
z=H.t(this,0)
H.cz(a,{futureOr:1,type:z})
y=this.$ti
x=H.bl(a,"$isaY",y,"$asaY")
if(x){z=H.bl(a,"$isak",y,null)
if(z)P.e4(a,this)
else P.iz(a,this)}else{w=this.aG()
H.v(a,z)
this.a=4
this.c=a
P.bh(this,w)}},
ax:[function(a,b){var z
H.m(b,"$isa8")
z=this.aG()
this.a=8
this.c=new P.a0(a,b)
P.bh(this,z)},function(a){return this.ax(a,null)},"e2","$2","$1","gce",4,2,18],
$isaY:1,
l:{
iz:function(a,b){var z,y,x
b.a=1
try{a.bJ(new P.iA(b),new P.iB(b),null)}catch(x){z=H.aw(x)
y=H.aP(x)
P.k9(new P.iC(b,z,y))}},
e4:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.m(a.c,"$isak")
if(z>=4){y=b.aG()
b.a=a.a
b.c=a.c
P.bh(b,y)}else{y=H.m(b.c,"$isaL")
b.a=2
b.c=a
a.bf(y)}},
bh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.m(y.c,"$isa0")
y=y.b
u=v.a
t=v.b
y.toString
P.bT(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bh(z.a,b)}y=z.a
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
if(p){H.m(r,"$isa0")
y=y.b
u=r.a
t=r.b
y.toString
P.bT(null,null,y,u,t)
return}o=$.F
if(o==null?q!=null:o!==q)$.F=q
else o=null
y=b.c
if(y===8)new P.iG(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iF(x,b,r).$0()}else if((y&2)!==0)new P.iE(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.D(y).$isaY){if(y.a>=4){n=H.m(t.c,"$isaL")
t.c=null
b=t.ao(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.e4(y,t)
return}}m=b.b
n=H.m(m.c,"$isaL")
m.c=null
b=m.ao(n)
y=x.a
u=x.b
if(!y){H.v(u,H.t(m,0))
m.a=4
m.c=u}else{H.m(u,"$isa0")
m.a=8
m.c=u}z.a=m
y=m}}}},
iy:{"^":"o:0;a,b",
$0:function(){P.bh(this.a,this.b)}},
iD:{"^":"o:0;a,b",
$0:function(){P.bh(this.b,this.a.a)}},
iA:{"^":"o:14;a",
$1:function(a){var z=this.a
z.a=0
z.b7(a)}},
iB:{"^":"o:19;a",
$2:function(a,b){this.a.ax(a,H.m(b,"$isa8"))},
$1:function(a){return this.$2(a,null)}},
iC:{"^":"o:0;a,b,c",
$0:function(){this.a.ax(this.b,this.c)}},
iG:{"^":"o:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.bH(H.d(w.d,{func:1}),null)}catch(v){y=H.aw(v)
x=H.aP(v)
if(this.d){w=H.m(this.a.a.c,"$isa0").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.m(this.a.a.c,"$isa0")
else u.b=new P.a0(y,x)
u.a=!0
return}if(!!J.D(z).$isaY){if(z instanceof P.ak&&z.gbi()>=4){if(z.gbi()===8){w=this.b
w.b=H.m(z.gcQ(),"$isa0")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.dW(new P.iH(t),null)
w.a=!1}}},
iH:{"^":"o:20;a",
$1:function(a){return this.a}},
iF:{"^":"o:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.v(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.aW(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aw(t)
y=H.aP(t)
x=this.a
x.b=new P.a0(z,y)
x.a=!0}}},
iE:{"^":"o:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.m(this.a.a.c,"$isa0")
w=this.c
if(w.du(z)&&w.e!=null){v=this.b
v.b=w.dj(z)
v.a=!1}}catch(u){y=H.aw(u)
x=H.aP(u)
w=H.m(this.a.a.c,"$isa0")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a0(y,x)
s.a=!0}}},
e2:{"^":"a;a,0b"},
cd:{"^":"a;$ti",
gj:function(a){var z,y
z={}
y=new P.ak(0,$.F,[P.x])
z.a=0
this.dt(new P.ht(z,this),!0,new P.hu(z,y),y.gce())
return y}},
ht:{"^":"o;a,b",
$1:function(a){H.v(a,H.an(this.b,"cd",0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.an(this.b,"cd",0)]}}},
hu:{"^":"o:0;a,b",
$0:function(){this.b.b7(this.a.a)}},
dB:{"^":"a;$ti"},
hs:{"^":"a;"},
aD:{"^":"a;"},
a0:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isL:1},
jp:{"^":"a;",$islf:1},
jF:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dl()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=y.i(0)
throw x}},
j1:{"^":"jp;",
dU:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.d===$.F){a.$0()
return}P.ei(null,null,this,a,-1)}catch(x){z=H.aw(x)
y=H.aP(x)
P.bT(null,null,this,z,H.m(y,"$isa8"))}},
dV:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.d===$.F){a.$1(b)
return}P.ej(null,null,this,a,b,-1,c)}catch(x){z=H.aw(x)
y=H.aP(x)
P.bT(null,null,this,z,H.m(y,"$isa8"))}},
d2:function(a,b){return new P.j3(this,H.d(a,{func:1,ret:b}),b)},
aK:function(a){return new P.j2(this,H.d(a,{func:1,ret:-1}))},
bn:function(a,b){return new P.j4(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
bH:function(a,b){H.d(a,{func:1,ret:b})
if($.F===C.d)return a.$0()
return P.ei(null,null,this,a,b)},
aW:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.F===C.d)return a.$1(b)
return P.ej(null,null,this,a,b,c,d)},
dT:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.F===C.d)return a.$2(b,c)
return P.jG(null,null,this,a,b,c,d,e,f)},
dN:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
j3:{"^":"o;a,b,c",
$0:function(){return this.a.bH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
j2:{"^":"o:2;a,b",
$0:function(){return this.a.dU(this.b)}},
j4:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.dV(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fx:function(a,b,c){H.bn(a)
return H.w(H.jR(a,new H.aB(0,0,[b,c])),"$isde",[b,c],"$asde")},
fw:function(a,b){return new H.aB(0,0,[a,b])},
fy:function(a,b,c,d){return new P.iO(0,0,[d])},
fj:function(a,b,c){var z,y
if(P.cv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bk()
C.a.h(y,a)
try{P.jC(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dC(b,H.k2(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
c6:function(a,b,c){var z,y,x
if(P.cv(a))return b+"..."+c
z=new P.ce(b)
y=$.$get$bk()
C.a.h(y,a)
try{x=z
x.a=P.dC(x.ga3(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.ga3()+c
y=z.ga3()
return y.charCodeAt(0)==0?y:y},
cv:function(a){var z,y
for(z=0;y=$.$get$bk(),z<y.length;++z)if(a===y[z])return!0
return!1},
jC:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gJ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.f(z.gC(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gC(z);++x
if(!z.w()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gC(z);++x
for(;z.w();t=s,s=r){r=z.gC(z);++x
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
dh:function(a){var z,y,x
z={}
if(P.cv(a))return"{...}"
y=new P.ce("")
try{C.a.h($.$get$bk(),a)
x=y
x.a=x.ga3()+"{"
z.a=!0
J.eG(a,new P.fD(z,y))
z=y
z.a=z.ga3()+"}"}finally{z=$.$get$bk()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.ga3()
return z.charCodeAt(0)==0?z:z},
iO:{"^":"iI;a,0b,0c,0d,0e,0f,r,$ti",
gJ:function(a){return P.e6(this,this.r,H.t(this,0))},
gj:function(a){return this.a},
h:function(a,b){var z,y
H.v(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cr()
this.b=z}return this.b5(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cr()
this.c=y}return this.b5(y,b)}else return this.c9(0,b)},
c9:function(a,b){var z,y,x
H.v(b,H.t(this,0))
z=this.d
if(z==null){z=P.cr()
this.d=z}y=this.b8(b)
x=z[y]
if(x==null)z[y]=[this.aw(b)]
else{if(this.bc(x,b)>=0)return!1
x.push(this.aw(b))}return!0},
H:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bg(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bg(this.c,b)
else return this.cL(0,b)},
cL:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cm(z,b)
x=this.bc(y,b)
if(x<0)return!1
this.bk(y.splice(x,1)[0])
return!0},
b5:function(a,b){H.v(b,H.t(this,0))
if(H.m(a[b],"$iscq")!=null)return!1
a[b]=this.aw(b)
return!0},
bg:function(a,b){var z
if(a==null)return!1
z=H.m(a[b],"$iscq")
if(z==null)return!1
this.bk(z)
delete a[b]
return!0},
b6:function(){this.r=this.r+1&67108863},
aw:function(a){var z,y
z=new P.cq(H.v(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.b6()
return z},
bk:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.b6()},
b8:function(a){return J.ax(a)&0x3ffffff},
cm:function(a,b){return a[this.b8(b)]},
bc:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
l:{
cr:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cq:{"^":"a;a,0b,0c"},
iP:{"^":"a;a,b,0c,0d,$ti",
gC:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.b(P.aU(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.v(z.a,H.t(this,0))
this.c=z.b
return!0}}},
l:{
e6:function(a,b,c){var z=new P.iP(a,b,[c])
z.c=a.e
return z}}},
iI:{"^":"he;"},
bL:{"^":"iQ;",$ish:1,$isc:1},
n:{"^":"a;$ti",
gJ:function(a){return new H.dg(a,this.gj(a),0,[H.bm(this,a,"n",0)])},
v:function(a,b){return this.k(a,b)},
dY:function(a,b){var z,y,x
z=H.e([],[H.bm(this,a,"n",0)])
C.a.sj(z,this.gj(a))
y=0
while(!0){x=this.gj(a)
if(typeof x!=="number")return H.B(x)
if(!(y<x))break
C.a.K(z,y,this.k(a,y));++y}return z},
dX:function(a){return this.dY(a,!0)},
i:function(a){return P.c6(a,"[","]")}},
fC:{"^":"a_;"},
fD:{"^":"o:11;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
a_:{"^":"a;$ti",
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.bm(this,a,"a_",0),H.bm(this,a,"a_",1)]})
for(z=J.bo(this.ga_(a));z.w();){y=z.gC(z)
b.$2(y,this.k(a,y))}},
gj:function(a){return J.aS(this.ga_(a))},
i:function(a){return P.dh(a)},
$isS:1},
hg:{"^":"a;$ti",
i:function(a){return P.c6(this,"{","}")},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.cJ("index"))
if(b<0)H.X(P.a2(b,0,null,"index",null))
for(z=P.e6(this,this.r,H.t(this,0)),y=0;z.w();){x=z.d
if(b===y)return x;++y}throw H.b(P.E(b,this,"index",null,y))},
$ish:1},
he:{"^":"hg;"},
iQ:{"^":"a+n;"}}],["","",,P,{"^":"",c4:{"^":"a;$ti"},cX:{"^":"hs;$ti"},f8:{"^":"c4;",
$asc4:function(){return[P.j,[P.c,P.x]]}},hZ:{"^":"f8;a"},i_:{"^":"cX;",
d8:function(a,b,c){var z,y,x,w
z=a.length
P.ds(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jo(0,0,x)
if(w.ck(a,b,z)!==z)w.bl(C.b.aO(a,z-1),0)
return C.C.au(x,0,w.b)},
d7:function(a){return this.d8(a,0,null)},
$ascX:function(){return[P.j,[P.c,P.x]]}},jo:{"^":"a;a,b,c",
bl:function(a,b){var z,y,x,w,v
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
ck:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.aO(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.am(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bl(w,C.b.am(a,u)))x=u}else if(w<=2047){v=this.b
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
fa:function(a){var z=J.D(a)
if(!!z.$iso)return z.i(a)
return"Instance of '"+H.aC(a)+"'"},
fz:function(a,b,c,d){var z,y
H.v(b,d)
z=J.fl(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.K(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
fA:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gJ(a);x.w();)C.a.h(y,H.v(x.gC(x),c))
if(b)return y
return H.w(J.b_(y),"$isc",z,"$asc")},
cf:function(a,b,c){var z,y
z=P.x
H.w(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.w(a,"$isaA",[z],"$asaA")
y=a.length
c=P.ds(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.X()
z=c<y}else z=!0
return H.dr(z?C.a.au(a,b,c):a)}return P.hv(a,b,c)},
hv:function(a,b,c){var z,y,x
H.w(a,"$ish",[P.x],"$ash")
z=J.bo(a)
for(y=0;y<b;++y)if(!z.w())throw H.b(P.a2(b,0,y,null,null))
x=[]
for(;z.w();)x.push(z.gC(z))
return H.dr(x)},
h5:function(a,b,c){return new H.fp(a,H.fq(a,!1,!0,!1))},
jn:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.x],"$asc")
if(c===C.m){z=$.$get$eh().b
z=z.test(b)}else z=!1
if(z)return b
y=C.q.d7(H.v(b,H.an(c,"c4",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.h0(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fa(a)},
Z:function(a){return new P.e3(a)},
cF:function(a){H.k7(a)},
al:{"^":"a;"},
"+bool":0,
aW:{"^":"a;a,b",
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.aW))return!1
return this.a===b.a&&this.b===b.b},
gG:function(a){var z=this.a
return(z^C.e.ap(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.eX(H.h_(this))
y=P.br(H.fY(this))
x=P.br(H.fU(this))
w=P.br(H.fV(this))
v=P.br(H.fX(this))
u=P.br(H.fZ(this))
t=P.eY(H.fW(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
l:{
eX:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
eY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
br:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"K;"},
"+double":0,
az:{"^":"a;a",
m:function(a,b){return new P.az(C.e.P(this.a*b))},
X:function(a,b){return C.e.X(this.a,H.m(b,"$isaz").a)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a},
gG:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.f5()
y=this.a
if(y<0)return"-"+new P.az(0-y).i(0)
x=z.$1(C.e.a6(y,6e7)%60)
w=z.$1(C.e.a6(y,1e6)%60)
v=new P.f4().$1(y%1e6)
return""+C.e.a6(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
l:{
d5:function(a,b,c,d,e,f){return new P.az(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
f4:{"^":"o:12;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
f5:{"^":"o:12;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
L:{"^":"a;"},
dl:{"^":"L;",
i:function(a){return"Throw of null."}},
ao:{"^":"L;a,b,c,d",
gaz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gay:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gaz()+y+x
if(!this.a)return w
v=this.gay()
u=P.bG(this.b)
return w+v+": "+H.f(u)},
l:{
bE:function(a,b,c){return new P.ao(!0,a,b,c)},
cJ:function(a){return new P.ao(!1,null,a,"Must not be null")}}},
bN:{"^":"ao;e,f,a,b,c,d",
gaz:function(){return"RangeError"},
gay:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
l:{
bO:function(a,b,c){return new P.bN(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.bN(b,c,!0,a,d,"Invalid value")},
ds:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.B(a)
if(0<=a){if(typeof c!=="number")return H.B(c)
z=a>c}else z=!0
if(z)throw H.b(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.B(c)
z=b>c}else z=!0
if(z)throw H.b(P.a2(b,a,c,"end",f))
return b}return c}}},
fi:{"^":"ao;e,j:f>,a,b,c,d",
gaz:function(){return"RangeError"},
gay:function(){if(J.eD(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
l:{
E:function(a,b,c,d,e){var z=H.O(e!=null?e:J.aS(b))
return new P.fi(b,z,!0,a,c,"Index out of range")}}},
hX:{"^":"L;a",
i:function(a){return"Unsupported operation: "+this.a},
l:{
a9:function(a){return new P.hX(a)}}},
hU:{"^":"L;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
l:{
dW:function(a){return new P.hU(a)}}},
hp:{"^":"L;a",
i:function(a){return"Bad state: "+this.a}},
eT:{"^":"L;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bG(z))+"."},
l:{
aU:function(a){return new P.eT(a)}}},
fQ:{"^":"a;",
i:function(a){return"Out of Memory"},
$isL:1},
dz:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isL:1},
eW:{"^":"L;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
e3:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fg:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.b.av(x,0,75)+"..."
return y+"\n"+x}},
x:{"^":"K;"},
"+int":0,
h:{"^":"a;$ti",
gj:function(a){var z,y
z=this.gJ(this)
for(y=0;z.w();)++y
return y},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.cJ("index"))
if(b<0)H.X(P.a2(b,0,null,"index",null))
for(z=this.gJ(this),y=0;z.w();){x=z.gC(z)
if(b===y)return x;++y}throw H.b(P.E(b,this,"index",null,y))},
i:function(a){return P.fj(this,"(",")")}},
c7:{"^":"a;$ti"},
c:{"^":"a;$ti",$ish:1},
"+List":0,
S:{"^":"a;$ti"},
z:{"^":"a;",
gG:function(a){return P.a.prototype.gG.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
K:{"^":"a;"},
"+num":0,
a:{"^":";",
n:function(a,b){return this===b},
gG:function(a){return H.b5(this)},
i:function(a){return"Instance of '"+H.aC(this)+"'"},
toString:function(){return this.i(this)}},
a8:{"^":"a;"},
j:{"^":"a;",$isdm:1},
"+String":0,
ce:{"^":"a;a3:a<",
gj:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
l:{
dC:function(a,b,c){var z=J.bo(b)
if(!z.w())return a
if(c.length===0){do a+=H.f(z.gC(z))
while(z.w())}else{a+=H.f(z.gC(z))
for(;z.w();)a=a+c+H.f(z.gC(z))}return a}}}}],["","",,W,{"^":"",
cS:function(a,b){var z=document.createElement("canvas")
return z},
f7:function(a){H.m(a,"$isU")
return"wheel"},
bR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
e5:function(a,b,c,d){var z,y
z=W.bR(W.bR(W.bR(W.bR(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
em:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.d)return a
return z.bn(a,b)},
bt:{"^":"Q;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kh:{"^":"k;0j:length=","%":"AccessibleNodeList"},
ki:{"^":"bt;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kj:{"^":"bt;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
eL:{"^":"k;","%":";Blob"},
c3:{"^":"bt;",
aX:function(a,b,c){var z=a.getContext(b,P.jL(c,null))
return z},
$isc3:1,
"%":"HTMLCanvasElement"},
kp:{"^":"C;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kr:{"^":"eV;0j:length=","%":"CSSPerspective"},
aV:{"^":"k;",$isaV:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ks:{"^":"io;0j:length=",
bQ:function(a,b){var z=a.getPropertyValue(this.cc(a,b))
return z==null?"":z},
cc:function(a,b){var z,y
z=$.$get$cY()
y=z[b]
if(typeof y==="string")return y
y=this.cY(a,b)
z[b]=y
return y},
cY:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.f2()+b
if(z in a)return z
return b},
gaL:function(a){return a.bottom},
gV:function(a){return a.height},
ga7:function(a){return a.left},
gaV:function(a){return a.right},
gak:function(a){return a.top},
gW:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
eU:{"^":"a;",
ga7:function(a){return this.bQ(a,"left")}},
cZ:{"^":"k;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
eV:{"^":"k;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kt:{"^":"cZ;0j:length=","%":"CSSTransformValue"},
ku:{"^":"cZ;0j:length=","%":"CSSUnparsedValue"},
kv:{"^":"k;0j:length=","%":"DataTransferItemList"},
kw:{"^":"k;",
i:function(a){return String(a)},
"%":"DOMException"},
kx:{"^":"iq;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[[P.W,P.K]]},
$asn:function(){return[[P.W,P.K]]},
$ish:1,
$ash:function(){return[[P.W,P.K]]},
$isc:1,
$asc:function(){return[[P.W,P.K]]},
$asp:function(){return[[P.W,P.K]]},
"%":"ClientRectList|DOMRectList"},
f3:{"^":"k;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gW(a))+" x "+H.f(this.gV(a))},
n:function(a,b){var z
if(b==null)return!1
z=H.bl(b,"$isW",[P.K],"$asW")
if(!z)return!1
z=J.bX(b)
return a.left===z.ga7(b)&&a.top===z.gak(b)&&this.gW(a)===z.gW(b)&&this.gV(a)===z.gV(b)},
gG:function(a){return W.e5(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gW(a)&0x1FFFFFFF,this.gV(a)&0x1FFFFFFF)},
gaL:function(a){return a.bottom},
gV:function(a){return a.height},
ga7:function(a){return a.left},
gaV:function(a){return a.right},
gak:function(a){return a.top},
gW:function(a){return a.width},
$isW:1,
$asW:function(){return[P.K]},
"%":";DOMRectReadOnly"},
ky:{"^":"is;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.j]},
$asn:function(){return[P.j]},
$ish:1,
$ash:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asp:function(){return[P.j]},
"%":"DOMStringList"},
kz:{"^":"k;0j:length=","%":"DOMTokenList"},
im:{"^":"bL;a,b",
gj:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.m(z[b],"$isQ")},
h:function(a,b){this.a.appendChild(b)
return b},
gJ:function(a){var z=this.dX(this)
return new J.ae(z,z.length,0,[H.t(z,0)])},
$asn:function(){return[W.Q]},
$ash:function(){return[W.Q]},
$asc:function(){return[W.Q]}},
Q:{"^":"C;",
gbo:function(a){return new W.im(a,a.children)},
gbp:function(a){return P.h2(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.K)},
i:function(a){return a.localName},
$isQ:1,
"%":";Element"},
Y:{"^":"k;",$isY:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
U:{"^":"k;",
bm:["bV",function(a,b,c,d){H.d(c,{func:1,args:[W.Y]})
if(c!=null)this.ca(a,b,c,!1)}],
ca:function(a,b,c,d){return a.addEventListener(b,H.aO(H.d(c,{func:1,args:[W.Y]}),1),!1)},
$isU:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eb|ec|ee|ef"},
aX:{"^":"eL;",$isaX:1,"%":"File"},
kA:{"^":"ix;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aX]},
$asn:function(){return[W.aX]},
$ish:1,
$ash:function(){return[W.aX]},
$isc:1,
$asc:function(){return[W.aX]},
$asp:function(){return[W.aX]},
"%":"FileList"},
kB:{"^":"U;0j:length=","%":"FileWriter"},
kC:{"^":"bt;0j:length=","%":"HTMLFormElement"},
aZ:{"^":"k;",$isaZ:1,"%":"Gamepad"},
kD:{"^":"k;0j:length=","%":"History"},
kE:{"^":"iK;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.C]},
$asn:function(){return[W.C]},
$ish:1,
$ash:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asp:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
b0:{"^":"ci;",$isb0:1,"%":"KeyboardEvent"},
kI:{"^":"k;",
i:function(a){return String(a)},
"%":"Location"},
kJ:{"^":"k;0j:length=","%":"MediaList"},
kK:{"^":"U;",
bm:function(a,b,c,d){H.d(c,{func:1,args:[W.Y]})
if(b==="message")a.start()
this.bV(a,b,c,!1)},
"%":"MessagePort"},
kL:{"^":"iR;",
k:function(a,b){return P.am(a.get(H.G(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.am(y.value[1]))}},
ga_:function(a){var z=H.e([],[P.j])
this.D(a,new W.fH(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.j,null]},
$isS:1,
$asS:function(){return[P.j,null]},
"%":"MIDIInputMap"},
fH:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
kM:{"^":"iS;",
k:function(a,b){return P.am(a.get(H.G(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.am(y.value[1]))}},
ga_:function(a){var z=H.e([],[P.j])
this.D(a,new W.fI(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.j,null]},
$isS:1,
$asS:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
fI:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b1:{"^":"k;",$isb1:1,"%":"MimeType"},
kN:{"^":"iU;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b1]},
$asn:function(){return[W.b1]},
$ish:1,
$ash:function(){return[W.b1]},
$isc:1,
$asc:function(){return[W.b1]},
$asp:function(){return[W.b1]},
"%":"MimeTypeArray"},
a7:{"^":"ci;",$isa7:1,"%":"PointerEvent;DragEvent|MouseEvent"},
il:{"^":"bL;a",
gJ:function(a){var z=this.a.childNodes
return new W.d6(z,z.length,-1,[H.bm(C.D,z,"p",0)])},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asn:function(){return[W.C]},
$ash:function(){return[W.C]},
$asc:function(){return[W.C]}},
C:{"^":"U;",
i:function(a){var z=a.nodeValue
return z==null?this.bW(a):z},
$isC:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
fN:{"^":"iW;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.C]},
$asn:function(){return[W.C]},
$ish:1,
$ash:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asp:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
b4:{"^":"k;0j:length=",$isb4:1,"%":"Plugin"},
kW:{"^":"j_;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b4]},
$asn:function(){return[W.b4]},
$ish:1,
$ash:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asp:function(){return[W.b4]},
"%":"PluginArray"},
kY:{"^":"j5;",
k:function(a,b){return P.am(a.get(H.G(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.am(y.value[1]))}},
ga_:function(a){var z=H.e([],[P.j])
this.D(a,new W.hb(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.j,null]},
$isS:1,
$asS:function(){return[P.j,null]},
"%":"RTCStatsReport"},
hb:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
l_:{"^":"bt;0j:length=","%":"HTMLSelectElement"},
b6:{"^":"U;",$isb6:1,"%":"SourceBuffer"},
l0:{"^":"ec;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b6]},
$asn:function(){return[W.b6]},
$ish:1,
$ash:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asp:function(){return[W.b6]},
"%":"SourceBufferList"},
b7:{"^":"k;",$isb7:1,"%":"SpeechGrammar"},
l1:{"^":"j7;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b7]},
$asn:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asp:function(){return[W.b7]},
"%":"SpeechGrammarList"},
b8:{"^":"k;0j:length=",$isb8:1,"%":"SpeechRecognitionResult"},
l3:{"^":"ja;",
k:function(a,b){return a.getItem(H.G(b))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
ga_:function(a){var z=H.e([],[P.j])
this.D(a,new W.hr(z))
return z},
gj:function(a){return a.length},
$asa_:function(){return[P.j,P.j]},
$isS:1,
$asS:function(){return[P.j,P.j]},
"%":"Storage"},
hr:{"^":"o:21;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"k;",$isb9:1,"%":"CSSStyleSheet|StyleSheet"},
ba:{"^":"U;",$isba:1,"%":"TextTrack"},
bb:{"^":"U;",$isbb:1,"%":"TextTrackCue|VTTCue"},
l7:{"^":"je;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.bb]},
$asn:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asp:function(){return[W.bb]},
"%":"TextTrackCueList"},
l8:{"^":"ef;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.ba]},
$asn:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asp:function(){return[W.ba]},
"%":"TextTrackList"},
l9:{"^":"k;0j:length=","%":"TimeRanges"},
bc:{"^":"k;",$isbc:1,"%":"Touch"},
aE:{"^":"ci;",$isaE:1,"%":"TouchEvent"},
la:{"^":"jk;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.bc]},
$asn:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asp:function(){return[W.bc]},
"%":"TouchList"},
lb:{"^":"k;0j:length=","%":"TrackDefaultList"},
ci:{"^":"Y;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ld:{"^":"k;",
i:function(a){return String(a)},
"%":"URL"},
le:{"^":"U;0j:length=","%":"VideoTrackList"},
bg:{"^":"a7;",
gdc:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.a9("deltaY is not supported"))},
gda:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.a9("deltaX is not supported"))},
$isbg:1,
"%":"WheelEvent"},
id:{"^":"U;",
cP:function(a,b){return a.requestAnimationFrame(H.aO(H.d(b,{func:1,ret:-1,args:[P.K]}),1))},
cj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lj:{"^":"jr;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aV]},
$asn:function(){return[W.aV]},
$ish:1,
$ash:function(){return[W.aV]},
$isc:1,
$asc:function(){return[W.aV]},
$asp:function(){return[W.aV]},
"%":"CSSRuleList"},
lk:{"^":"f3;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
n:function(a,b){var z
if(b==null)return!1
z=H.bl(b,"$isW",[P.K],"$asW")
if(!z)return!1
z=J.bX(b)
return a.left===z.ga7(b)&&a.top===z.gak(b)&&a.width===z.gW(b)&&a.height===z.gV(b)},
gG:function(a){return W.e5(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gV:function(a){return a.height},
gW:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lm:{"^":"jt;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aZ]},
$asn:function(){return[W.aZ]},
$ish:1,
$ash:function(){return[W.aZ]},
$isc:1,
$asc:function(){return[W.aZ]},
$asp:function(){return[W.aZ]},
"%":"GamepadList"},
ln:{"^":"jv;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.C]},
$asn:function(){return[W.C]},
$ish:1,
$ash:function(){return[W.C]},
$isc:1,
$asc:function(){return[W.C]},
$asp:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lo:{"^":"jx;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b8]},
$asn:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asp:function(){return[W.b8]},
"%":"SpeechRecognitionResultList"},
lp:{"^":"jz;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.b9]},
$asn:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asp:function(){return[W.b9]},
"%":"StyleSheetList"},
it:{"^":"cd;a,b,c,$ti",
dt:function(a,b,c,d){var z=H.t(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.N(this.a,this.b,a,!1,z)}},
ll:{"^":"it;a,b,c,$ti"},
iu:{"^":"dB;a,b,c,d,e,$ti",
cZ:function(){var z=this.d
if(z!=null&&this.a<=0)J.eF(this.b,this.c,z,!1)},
l:{
N:function(a,b,c,d,e){var z=c==null?null:W.em(new W.iv(c),W.Y)
z=new W.iu(0,a,b,z,!1,[e])
z.cZ()
return z}}},
iv:{"^":"o:4;a",
$1:function(a){return this.a.$1(H.m(a,"$isY"))}},
p:{"^":"a;$ti",
gJ:function(a){return new W.d6(a,this.gj(a),-1,[H.bm(this,a,"p",0)])}},
d6:{"^":"a;a,b,c,0d,$ti",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.eE(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gC:function(a){return this.d}},
io:{"^":"k+eU;"},
ip:{"^":"k+n;"},
iq:{"^":"ip+p;"},
ir:{"^":"k+n;"},
is:{"^":"ir+p;"},
iw:{"^":"k+n;"},
ix:{"^":"iw+p;"},
iJ:{"^":"k+n;"},
iK:{"^":"iJ+p;"},
iR:{"^":"k+a_;"},
iS:{"^":"k+a_;"},
iT:{"^":"k+n;"},
iU:{"^":"iT+p;"},
iV:{"^":"k+n;"},
iW:{"^":"iV+p;"},
iZ:{"^":"k+n;"},
j_:{"^":"iZ+p;"},
j5:{"^":"k+a_;"},
eb:{"^":"U+n;"},
ec:{"^":"eb+p;"},
j6:{"^":"k+n;"},
j7:{"^":"j6+p;"},
ja:{"^":"k+a_;"},
jd:{"^":"k+n;"},
je:{"^":"jd+p;"},
ee:{"^":"U+n;"},
ef:{"^":"ee+p;"},
jj:{"^":"k+n;"},
jk:{"^":"jj+p;"},
jq:{"^":"k+n;"},
jr:{"^":"jq+p;"},
js:{"^":"k+n;"},
jt:{"^":"js+p;"},
ju:{"^":"k+n;"},
jv:{"^":"ju+p;"},
jw:{"^":"k+n;"},
jx:{"^":"jw+p;"},
jy:{"^":"k+n;"},
jz:{"^":"jy+p;"}}],["","",,P,{"^":"",
am:function(a){var z,y,x,w,v
if(a==null)return
z=P.fw(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.G(y[w])
z.K(0,v,a[v])}return z},
jL:function(a,b){var z={}
a.D(0,new P.jM(z))
return z},
d4:function(){var z=$.d3
if(z==null){z=J.c0(window.navigator.userAgent,"Opera",0)
$.d3=z}return z},
f2:function(){var z,y
z=$.d0
if(z!=null)return z
y=$.d1
if(y==null){y=J.c0(window.navigator.userAgent,"Firefox",0)
$.d1=y}if(y)z="-moz-"
else{y=$.d2
if(y==null){y=!P.d4()&&J.c0(window.navigator.userAgent,"Trident/",0)
$.d2=y}if(y)z="-ms-"
else z=P.d4()?"-o-":"-webkit-"}$.d0=z
return z},
jM:{"^":"o:11;a",
$2:function(a,b){this.a[a]=b}},
fd:{"^":"bL;a,b",
gaB:function(){var z,y,x
z=this.b
y=H.an(z,"n",0)
x=W.Q
return new H.fE(new H.ib(z,H.d(new P.fe(),{func:1,ret:P.al,args:[y]}),[y]),H.d(new P.ff(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aS(this.gaB().a)},
k:function(a,b){var z=this.gaB()
return z.b.$1(J.cI(z.a,b))},
gJ:function(a){var z=P.fA(this.gaB(),!1,W.Q)
return new J.ae(z,z.length,0,[H.t(z,0)])},
$asn:function(){return[W.Q]},
$ash:function(){return[W.Q]},
$asc:function(){return[W.Q]}},
fe:{"^":"o:22;",
$1:function(a){return!!J.D(H.m(a,"$isC")).$isQ}},
ff:{"^":"o:23;",
$1:function(a){return H.aQ(H.m(a,"$isC"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j0:{"^":"a;$ti",
gaV:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.v(z+this.c,H.t(this,0))},
gaL:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.v(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
n:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bl(b,"$isW",[P.K],"$asW")
if(!z)return!1
z=this.a
y=J.bX(b)
x=y.ga7(b)
if(z==null?x==null:z===x){x=this.b
w=y.gak(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.t(this,0)
if(H.v(z+this.c,w)===y.gaV(b)){if(typeof x!=="number")return x.E()
z=H.v(x+this.d,w)===y.gaL(b)}else z=!1}else z=!1}else z=!1
return z},
gG:function(a){var z,y,x,w,v
z=this.a
y=J.ax(z)
x=this.b
w=J.ax(x)
if(typeof z!=="number")return z.E()
v=H.t(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.v(x+this.d,v)
return P.iL(P.bS(P.bS(P.bS(P.bS(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
W:{"^":"j0;a7:a>,ak:b>,W:c>,V:d>,$ti",l:{
h2:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.X()
if(c<0)z=-c*0
else z=c
H.v(z,e)
if(typeof d!=="number")return d.X()
if(d<0)y=-d*0
else y=d
return new P.W(a,b,z,H.v(y,e),[e])}}}}],["","",,P,{"^":"",bw:{"^":"k;",$isbw:1,"%":"SVGLength"},kH:{"^":"iN;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.k(a,b)},
$asn:function(){return[P.bw]},
$ish:1,
$ash:function(){return[P.bw]},
$isc:1,
$asc:function(){return[P.bw]},
$asp:function(){return[P.bw]},
"%":"SVGLengthList"},bz:{"^":"k;",$isbz:1,"%":"SVGNumber"},kU:{"^":"iY;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.k(a,b)},
$asn:function(){return[P.bz]},
$ish:1,
$ash:function(){return[P.bz]},
$isc:1,
$asc:function(){return[P.bz]},
$asp:function(){return[P.bz]},
"%":"SVGNumberList"},kX:{"^":"k;0j:length=","%":"SVGPointList"},l4:{"^":"jc;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.k(a,b)},
$asn:function(){return[P.j]},
$ish:1,
$ash:function(){return[P.j]},
$isc:1,
$asc:function(){return[P.j]},
$asp:function(){return[P.j]},
"%":"SVGStringList"},l5:{"^":"Q;",
gbo:function(a){return new P.fd(a,new W.il(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bA:{"^":"k;",$isbA:1,"%":"SVGTransform"},lc:{"^":"jm;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.k(a,b)},
$asn:function(){return[P.bA]},
$ish:1,
$ash:function(){return[P.bA]},
$isc:1,
$asc:function(){return[P.bA]},
$asp:function(){return[P.bA]},
"%":"SVGTransformList"},iM:{"^":"k+n;"},iN:{"^":"iM+p;"},iX:{"^":"k+n;"},iY:{"^":"iX+p;"},jb:{"^":"k+n;"},jc:{"^":"jb+p;"},jl:{"^":"k+n;"},jm:{"^":"jl+p;"}}],["","",,P,{"^":"",kk:{"^":"k;0j:length=","%":"AudioBuffer"},kl:{"^":"ik;",
k:function(a,b){return P.am(a.get(H.G(b)))},
D:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.am(y.value[1]))}},
ga_:function(a){var z=H.e([],[P.j])
this.D(a,new P.eJ(z))
return z},
gj:function(a){return a.size},
$asa_:function(){return[P.j,null]},
$isS:1,
$asS:function(){return[P.j,null]},
"%":"AudioParamMap"},eJ:{"^":"o:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},km:{"^":"U;0j:length=","%":"AudioTrackList"},eK:{"^":"U;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},kV:{"^":"eK;0j:length=","%":"OfflineAudioContext"},ik:{"^":"k+a_;"}}],["","",,P,{"^":"",dv:{"^":"k;",$isdv:1,"%":"WebGLRenderingContext"},hP:{"^":"k;",$ishP:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",l2:{"^":"j9;",
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.E(b,a,null,null,null))
return P.am(a.item(b))},
v:function(a,b){return this.k(a,b)},
$asn:function(){return[[P.S,,,]]},
$ish:1,
$ash:function(){return[[P.S,,,]]},
$isc:1,
$asc:function(){return[[P.S,,,]]},
$asp:function(){return[[P.S,,,]]},
"%":"SQLResultSetRowList"},j8:{"^":"k+n;"},j9:{"^":"j8+p;"}}],["","",,O,{"^":"",ay:{"^":"a;0a,0b,0c,0d,$ti",
b0:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
bT:function(a,b,c){var z={func:1,ret:-1,args:[P.x,[P.h,H.an(this,"ay",0)]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
at:function(a,b){return this.bT(a,null,b)},
cG:function(a){H.w(a,"$ish",[H.an(this,"ay",0)],"$ash")
return!0},
c3:function(a,b){var z
H.w(b,"$ish",[H.an(this,"ay",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gj:function(a){return this.a.length},
gJ:function(a){var z=this.a
return new J.ae(z,z.length,0,[H.t(z,0)])},
v:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.an(this,"ay",0)
H.v(b,z)
z=[z]
if(this.cG(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.c3(x,H.e([b],z))}},
$ish:1,
l:{
cU:function(a){var z=new O.ay([a])
z.b0(a)
return z}}},cb:{"^":"a;0a,0b",
gj:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.a6()
this.b=z}return z},
c4:function(a){var z=this.b
if(!(z==null))z.M(a)},
a1:function(){return this.c4(null)},
gaf:function(a){var z=this.a
if(z.length>0)return C.a.gaQ(z)
else return V.bM()},
bE:function(a){var z=this.a
if(a==null)C.a.h(z,V.bM())
else C.a.h(z,a)
this.a1()},
aS:function(){var z=this.a
if(z.length>0){z.pop()
this.a1()}}}}],["","",,E,{"^":"",cL:{"^":"a;"},af:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0L:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
bM:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ar(0,b,this):null
if(!J.I(y,this.x)){x=this.x
this.x=y
w=new D.H("matrix",x,y,this,[V.by])
w.b=!0
this.S(w)}for(z=this.y.a,z=new J.ae(z,z.length,0,[H.t(z,0)]);z.w();)z.d.bM(0,b)},
a8:function(a){var z,y,x,w,v,u,t,s
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaf(z))
else C.a.h(z.a,y.m(0,z.gaf(z)))
z.a1()
a.bF(this.f)
z=a.dy
x=(z&&C.a).gaQ(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.k(0,"Depth")
if(w==null){z=a.a
w=new A.f_(z,"Depth")
w.c1(z,"Depth")
y=$.f1
v=$.f0
w.c=w.bb(y,35633)
w.d=w.bb(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.eq(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.X(P.Z("Failed to link shader: "+H.f(u)))}w.cU()
w.cW()
w.x=w.f.k(0,"posAttr")
w.y=H.aQ(w.r.k(0,"objClr"),"$iscl")
w.z=H.aQ(w.r.k(0,"fogClr"),"$iscl")
w.Q=H.aQ(w.r.k(0,"fogStart"),"$iscj")
w.ch=H.aQ(w.r.k(0,"fogStop"),"$iscj")
w.cx=H.aQ(w.r.k(0,"viewObjMat"),"$iscm")
w.cy=H.aQ(w.r.k(0,"projMat"),"$iscm")
if(a.fr.bq(0,"Depth"))H.X(P.Z('Shader cache already contains a shader by the name "Depth".'))
a.fr.K(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.cP)){this.e=null
y=null}if(y==null){z=this.d.d3(new Z.ia(a.a),$.$get$aj())
y=z.df($.$get$aj())
v=x.a
y.e=v.x.c
this.e=z
z=v}a.a.useProgram(z.e)
z.f.de()
y=x.b
v=z.y
v.toString
t=y.a
s=y.b
y=y.c
v.a.uniform3f(v.d,t,s,y)
y=x.c
s=z.z
s.toString
t=y.a
v=y.b
y=y.c
s.a.uniform3f(s.d,t,v,y)
y=x.d
v=z.Q
v.a.uniform1f(v.d,y)
y=x.e
v=z.ch
v.a.uniform1f(v.d,y)
y=a.cy
y=y.gaf(y)
v=z.cy
v.toString
v.aY(y.bK(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gaf(y)
v=a.dx
v=y.m(0,v.gaf(v))
a.cx=v
y=v}z=z.cx
z.toString
z.aY(y.bK(0,!0))
y=this.e
y.aJ(a)
y.a8(a)
y.e_(a)
y=x.a
y.toString
a.a.useProgram(null)
y.f.dd()}for(z=this.y.a,z=new J.ae(z,z.length,0,[H.t(z,0)]);z.w();)z.d.a8(a)
a.bD()
a.dx.aS()},
gu:function(){var z=this.z
if(z==null){z=D.a6()
this.z=z}return z},
S:function(a){var z=this.z
if(!(z==null))z.M(a)},
R:function(){return this.S(null)},
dE:[function(a){H.m(a,"$isr")
this.e=null
this.S(a)},function(){return this.dE(null)},"er","$1","$0","gbB",0,2,1],
dD:[function(a){this.S(H.m(a,"$isr"))},function(){return this.dD(null)},"eq","$1","$0","gbA",0,2,1],
dB:[function(a){this.S(H.m(a,"$isr"))},function(){return this.dB(null)},"eo","$1","$0","gbz",0,2,1],
en:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ish",[E.af],"$ash")
for(z=b.length,y=this.gbz(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gL()==null){t=new D.bs()
t.a=H.e([],w)
t.c=0
u.sL(t)}t=u.gL()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.R()},"$2","gdA",8,0,5],
ep:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ish",[E.af],"$ash")
for(z=b.length,y=this.gbz(),x={func:1,ret:-1,args:[D.r]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gL()==null){t=new D.bs()
t.a=H.e([],w)
t.c=0
u.sL(t)}t=u.gL()
t.toString
H.d(y,x)
C.a.H(t.a,y)}}this.R()},"$2","gdC",8,0,5],
$isdj:1,
l:{
ag:function(a,b,c,d,e,f){var z,y,x,w,v,u
z=new E.af()
z.a=d
z.b=!0
y=O.cU(E.af)
z.y=y
y.at(z.gdA(),z.gdC())
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
if(y!=null){x=y.gu()
x.toString
w=H.d(z.gbB(),{func:1,ret:-1,args:[D.r]})
C.a.H(x.a,w)}x=z.c
if(x!=null){x=x.gu()
x.toString
w=H.d(z.gbB(),{func:1,ret:-1,args:[D.r]})
C.a.h(x.a,w)}v=new D.H("shape",y,z.c,z,[F.dy])
v.b=!0
z.S(v)}if(!J.I(z.r,c)){u=z.r
if(u!=null){y=u.gu()
y.toString
x=H.d(z.gbA(),{func:1,ret:-1,args:[D.r]})
C.a.H(y.a,x)}y=c.gu()
y.toString
x=H.d(z.gbA(),{func:1,ret:-1,args:[D.r]})
C.a.h(y.a,x)
z.r=c
v=new D.H("mover",u,c,z,[U.a1])
v.b=!0
z.S(v)}return z}}},h6:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
c_:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aW(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cb()
y=[V.by]
z.a=H.e([],y)
x=z.gu()
x.toString
w={func:1,ret:-1,args:[D.r]}
v=H.d(new E.h8(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cb()
z.a=H.e([],y)
v=z.gu()
v.toString
x=H.d(new E.h9(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cb()
z.a=H.e([],y)
y=z.gu()
y.toString
w=H.d(new E.ha(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.cg])
this.dy=z
C.a.h(z,null)
this.fr=new H.aB(0,0,[P.j,A.dx])},
bF:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaQ(z):a;(z&&C.a).h(z,y)},
bD:function(){var z=this.dy
if(z.length>1)z.pop()},
l:{
h7:function(a,b){var z=new E.h6(a,b)
z.c_(a,b)
return z}}},h8:{"^":"o:7;a",
$1:function(a){var z
H.m(a,"$isr")
z=this.a
z.z=null
z.ch=null}},h9:{"^":"o:7;a",
$1:function(a){var z
H.m(a,"$isr")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ha:{"^":"o:7;a",
$1:function(a){var z
H.m(a,"$isr")
z=this.a
z.ch=null
z.cx=null}},hx:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0L:x@,0y,0z,0Q,0ch",
gu:function(){var z=this.x
if(z==null){z=D.a6()
this.x=z}return z},
c6:[function(a){var z
H.m(a,"$isr")
z=this.x
if(!(z==null))z.M(a)
this.dR()},function(){return this.c6(null)},"c5","$1","$0","gb1",0,2,1],
gdi:function(){var z,y,x
z=Date.now()
y=C.e.a6(P.d5(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aW(z,!1)
return x/y},
bh:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.B(z)
x=C.c.bw(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.m()
w=C.c.bw(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.dG(C.h,this.gdQ())},
dR:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.hz(this),{func:1,ret:-1,args:[P.K]})
C.o.cj(z)
C.o.cP(z,W.em(y,P.K))}},"$0","gdQ",0,0,2],
dP:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.bh()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aW(w,!1)
x.y=P.d5(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sj(w.a,0)
w.a1()
w=x.db
C.a.sj(w.a,0)
w.a1()
w=x.dx
C.a.sj(w.a,0)
w.a1()
w=x.dy;(w&&C.a).sj(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a8(this.e)}}catch(v){z=H.aw(v)
y=H.aP(v)
P.cF("Error: "+H.f(z))
P.cF("Stack: "+H.f(y))
throw H.b(z)}},
l:{
hy:function(a,b,c,d,e){var z,y,x,w
z=J.D(a)
if(!!z.$isc3)return E.dF(a,!0,!0,!0,!1)
y=W.cS(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbo(a).h(0,y)
w=E.dF(y,!0,!0,!0,!1)
w.a=a
return w},
dF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hx()
y=P.fx(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.f.aX(a,"webgl",y)
x=H.m(x==null?C.f.aX(a,"experimental-webgl",y):x,"$isdv")
if(x==null)H.X(P.Z("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.h7(x,a)
w=new T.hw(x)
w.b=H.O(x.getParameter(3379))
w.c=H.O(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.hY(a)
v=new X.fs()
v.c=new X.b2(!1,!1,!1)
v.d=P.fy(null,null,null,P.x)
w.b=v
v=new X.fJ(w)
v.f=0
v.r=new V.M(0,0)
v.x=new V.M(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fB(w)
v.r=0
v.x=new V.M(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.hD(w)
v.e=0
v.f=new V.M(0,0)
v.r=new V.M(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.dB,P.a]])
w.z=v
u=document
t=W.a7
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.N(u,"contextmenu",H.d(w.gcs(),s),!1,t))
v=w.z
r=W.Y
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.N(a,"focus",H.d(w.gcv(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.N(a,"blur",H.d(w.gcp(),q),!1,r))
v=w.z
p=W.b0
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.N(u,"keyup",H.d(w.gcz(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.N(u,"keydown",H.d(w.gcw(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.N(a,"mousedown",H.d(w.gcB(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.N(a,"mouseup",H.d(w.gcD(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.N(a,"mousemove",H.d(w.gcC(),s),!1,t))
p=w.z
o=W.bg;(p&&C.a).h(p,W.N(a,H.G(W.f7(a)),H.d(w.gcE(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.N(u,"mousemove",H.d(w.gct(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.N(u,"mouseup",H.d(w.gcu(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.N(u,"pointerlockchange",H.d(w.gcF(),q),!1,r))
r=w.z
q=W.aE
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.N(a,"touchstart",H.d(w.gcK(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.N(a,"touchend",H.d(w.gcI(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.N(a,"touchmove",H.d(w.gcJ(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aW(Date.now(),!1)
z.ch=0
z.bh()
return z}}},hz:{"^":"o:26;a",
$1:function(a){var z
H.k6(a)
z=this.a
if(z.z){z.z=!1
z.dP()}}}}],["","",,Z,{"^":"",e1:{"^":"a;a,b",l:{
co:function(a,b,c){var z
H.w(c,"$isc",[P.x],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cs(c)),35044)
a.bindBuffer(b,null)
return new Z.e1(b,z)}}},cO:{"^":"cL;a,b,c,d,e",
aJ:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aw(y)
x=P.Z('Failed to bind buffer attribute "'+J.a5(this.a)+'": '+H.f(z))
throw H.b(x)}},
i:function(a){return"["+J.a5(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},ia:{"^":"a;a",$iskn:1},cP:{"^":"a;a,0b,c,d",
df:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aJ:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aJ(a)},
e_:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a8:function(a){var z,y,x,w,v
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
z=[P.j]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a5(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.t(y,", ")+"\nAttrs:   "+C.a.t(u,", ")},
$isl6:1},bJ:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aC(this.c)+"'")+"]"}},dY:{"^":"a;a",
gaZ:function(a){var z,y
z=this.a
y=(z&$.$get$aj().a)!==0?3:0
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aI().a)!==0)y+=2
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$be().a)!==0)y+=3
if((z&$.$get$bf().a)!==0)y+=4
if((z&$.$get$aK().a)!==0)++y
return(z&$.$get$aF().a)!==0?y+4:y},
d1:function(a){var z,y,x
z=$.$get$aj()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$be()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bf()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0)if(x===a)return z
return $.$get$e0()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dY))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.j])
y=this.a
if((y&$.$get$aj().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$be().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bf().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aK().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.t(z,"|")},
l:{
a3:function(a){return new Z.dY(a)}}}}],["","",,D,{"^":"",eO:{"^":"a;"},bs:{"^":"a;0a,0b,0c",
M:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.r(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.D(y,new D.fb(z))
return x!==0},
dS:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.M(y)}}},
ai:function(a){return this.dS(a,!0,!1)},
l:{
a6:function(){var z=new D.bs()
z.a=H.e([],[{func:1,ret:-1,args:[D.r]}])
z.c=0
return z}}},fb:{"^":"o:27;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.r]})
z=this.a.a
z.b
a.$1(z)}},r:{"^":"a;a,0b"},d8:{"^":"r;c,d,a,0b,$ti"},d9:{"^":"r;c,d,a,0b,$ti"},H:{"^":"r;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",cQ:{"^":"a;a,b",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cQ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)},
l:{"^":"ko<"}},dc:{"^":"a;a,b",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},fs:{"^":"a;0a,0b,0c,0d",
dK:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
dG:function(a){this.c=a.b
this.d.H(0,a.a)
return!1}},fB:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aR:function(a,b){this.r=a.a
return!1},
ah:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.bS()
if(typeof z!=="number")return z.bO()
this.r=(z&~y)>>>0
return!1},
ag:function(a,b){return!1},
dL:function(a){return!1},
cA:function(a,b,c){return}},b2:{"^":"a;a,b,c",
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b2))return!1
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
return z+(this.c?"Shift+":"")}},fJ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
aR:function(a,b){this.f=a.a
return!1},
ah:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.bS()
if(typeof z!=="number")return z.bO()
this.f=(z&~y)>>>0
return!1},
ag:function(a,b){return!1},
dM:function(a,b){return!1}},fT:{"^":"r;"},hC:{"^":"fT;x,y,z,Q,ch,c,d,e,a,0b"},hD:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bd:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.M],"$asc")
z=new P.aW(Date.now(),!1)
y=a.length>0?a[0]:new V.M(0,0)
x=this.a.gd4()
w=new X.hC(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
dJ:function(a){var z
H.w(a,"$isc",[V.M],"$asc")
z=this.b
if(z==null)return!1
z.M(this.bd(a,!0))
return!0},
dH:function(a){var z
H.w(a,"$isc",[V.M],"$asc")
z=this.c
if(z==null)return!1
z.M(this.bd(a,!0))
return!0},
dI:function(a){H.w(a,"$isc",[V.M],"$asc")
return!1}},hY:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gd4:function(){var z=this.a
return V.du(0,0,(z&&C.f).gbp(z).c,C.f.gbp(z).d)},
ba:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dc(z,new X.b2(y,a.altKey,a.shiftKey))},
a5:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b2(y,a.altKey,a.shiftKey)},
aI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b2(y,a.altKey,a.shiftKey)},
Z:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.T()
v=z.top
if(typeof x!=="number")return x.T()
return new V.M(y-w,x-v)},
aa:function(a){return new V.bd(a.movementX,a.movementY)},
aF:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.M])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.c.P(u.pageX)
C.c.P(u.pageY)
s=z.left
C.c.P(u.pageX)
C.a.h(y,new V.M(t-s,C.c.P(u.pageY)-z.top))}return y},
Y:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.cQ(z,new X.b2(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.T()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.T()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
eb:[function(a){this.f=!0},"$1","gcv",4,0,4],
e4:[function(a){this.f=!1},"$1","gcp",4,0,4],
e8:[function(a){H.m(a,"$isa7")
if(this.f&&this.aC(a))a.preventDefault()},"$1","gcs",4,0,3],
ed:[function(a){var z
H.m(a,"$isb0")
if(!this.f)return
z=this.ba(a)
this.b.dK(z)},"$1","gcz",4,0,15],
ec:[function(a){var z
H.m(a,"$isb0")
if(!this.f)return
z=this.ba(a)
this.b.dG(z)},"$1","gcw",4,0,15],
ee:[function(a){var z,y,x,w
H.m(a,"$isa7")
z=this.a
z.focus()
this.f=!0
this.a5(a)
if(this.x){y=this.Y(a)
x=this.aa(a)
if(this.d.aR(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.Y(a)
w=this.Z(a)
if(this.c.aR(y,w))a.preventDefault()},"$1","gcB",4,0,3],
eg:[function(a){var z,y,x
H.m(a,"$isa7")
this.a5(a)
z=this.Y(a)
if(this.x){y=this.aa(a)
if(this.d.ah(z,y))a.preventDefault()
return}if(this.r)return
x=this.Z(a)
if(this.c.ah(z,x))a.preventDefault()},"$1","gcD",4,0,3],
ea:[function(a){var z,y,x
H.m(a,"$isa7")
if(!this.aC(a)){this.a5(a)
z=this.Y(a)
if(this.x){y=this.aa(a)
if(this.d.ah(z,y))a.preventDefault()
return}if(this.r)return
x=this.Z(a)
if(this.c.ah(z,x))a.preventDefault()}},"$1","gcu",4,0,3],
ef:[function(a){var z,y,x
H.m(a,"$isa7")
this.a5(a)
z=this.Y(a)
if(this.x){y=this.aa(a)
if(this.d.ag(z,y))a.preventDefault()
return}if(this.r)return
x=this.Z(a)
if(this.c.ag(z,x))a.preventDefault()},"$1","gcC",4,0,3],
e9:[function(a){var z,y,x
H.m(a,"$isa7")
if(!this.aC(a)){this.a5(a)
z=this.Y(a)
if(this.x){y=this.aa(a)
if(this.d.ag(z,y))a.preventDefault()
return}if(this.r)return
x=this.Z(a)
if(this.c.ag(z,x))a.preventDefault()}},"$1","gct",4,0,3],
eh:[function(a){var z,y
H.m(a,"$isbg")
this.a5(a)
z=new V.bd((a&&C.n).gda(a),C.n.gdc(a)).F(0,180)
if(this.x){if(this.d.dL(z))a.preventDefault()
return}if(this.r)return
y=this.Z(a)
if(this.c.dM(z,y))a.preventDefault()},"$1","gcE",4,0,29],
ei:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.Y(this.y)
v=this.Z(this.y)
this.d.cA(w,v,x)}},"$1","gcF",4,0,4],
em:[function(a){var z
H.m(a,"$isaE")
this.a.focus()
this.f=!0
this.aI(a)
z=this.aF(a)
if(this.e.dJ(z))a.preventDefault()},"$1","gcK",4,0,8],
ek:[function(a){var z
H.m(a,"$isaE")
this.aI(a)
z=this.aF(a)
if(this.e.dH(z))a.preventDefault()},"$1","gcI",4,0,8],
el:[function(a){var z
H.m(a,"$isaE")
this.aI(a)
z=this.aF(a)
if(this.e.dI(z))a.preventDefault()},"$1","gcJ",4,0,8]}}],["","",,V,{"^":"",
kq:[function(a,b){if(typeof b!=="number")return b.T()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","fG",8,0,28],
cG:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.bR(a-b,z)
return(a<0?a+z:a)+b},
A:function(a,b,c){if(a==null)return C.b.a0("null",c)
return C.b.a0(C.c.bL($.l.$2(a,0)?0:a,b),c+b+1)},
bW:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.q],"$asc")
z=H.e([],[P.j])
for(y=0,x=0;x<4;++x){w=V.A(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.i(z,v)
C.a.K(z,v,C.b.a0(z[v],y))}return z},
bp:{"^":"a;a,b,c",
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
return new V.bp(z,y,x)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bp))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}},
bq:{"^":"a;a,b,c,d",
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
return new V.bq(z,y,x,w)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bq))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}},
by:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
bK:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
m:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.m(a7,"$isby")
z=this.a
y=a7.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.B(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.B(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.m()
if(typeof s!=="number")return H.B(s)
r=a7.b
if(typeof r!=="number")return H.B(r)
q=a7.f
if(typeof q!=="number")return H.B(q)
p=a7.z
if(typeof p!=="number")return H.B(p)
o=a7.cy
if(typeof o!=="number")return H.B(o)
n=a7.c
if(typeof n!=="number")return H.B(n)
m=a7.r
if(typeof m!=="number")return H.B(m)
l=a7.Q
if(typeof l!=="number")return H.B(l)
k=a7.db
if(typeof k!=="number")return H.B(k)
j=a7.d
if(typeof j!=="number")return H.B(j)
i=a7.x
if(typeof i!=="number")return H.B(i)
h=a7.ch
if(typeof h!=="number")return H.B(h)
g=a7.dx
if(typeof g!=="number")return H.B(g)
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
return V.ah(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.by))return!1
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
i:function(a){return this.B()},
bx:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bW(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bW(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bW(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bW(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
q:function(a){return this.bx(a,3,0)},
B:function(){return this.bx("",3,0)},
l:{
ah:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.by(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bM:function(){return V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
M:{"^":"a;a,b",
m:function(a,b){return new V.M(this.a*b,this.b*b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}},
aq:{"^":"a;a,b,c",
T:function(a,b){return new V.aq(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){return new V.aq(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}},
dt:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dt))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"},
l:{
du:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dt(a,b,c,d)}}},
bd:{"^":"a;a,b",
dr:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return Math.sqrt(z*z+y*y)},"$0","gj",1,0,16],
m:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return new V.bd(z*b,y*b)},
F:function(a,b){var z,y
if($.l.$2(b,0))return new V.bd(0,0)
z=this.a
if(typeof z!=="number")return z.F()
y=this.b
if(typeof y!=="number")return y.F()
return new V.bd(z/b,y/b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bd))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}},
J:{"^":"a;a,b,c",
dr:[function(a){return Math.sqrt(this.I(this))},"$0","gj",1,0,16],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ab:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.J(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
as:function(a){return new V.J(-this.a,-this.b,-this.c)},
m:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
F:function(a,b){if($.l.$2(b,0))return new V.J(0,0,0)
return new V.J(this.a/b,this.b/b,this.c/b)},
dn:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}}],["","",,U,{"^":"",cV:{"^":"a1;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.a6()
this.b=z}return z},
ar:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cV))return!1
return J.I(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")},
l:{
cW:function(a){var z=new U.cV()
z.a=a
return z}}},d7:{"^":"ay;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.a6()
this.e=z}return z},
N:[function(a){var z
H.m(a,"$isr")
z=this.e
if(!(z==null))z.M(a)},function(){return this.N(null)},"e0","$1","$0","gb2",0,2,1],
e3:[function(a,b){var z,y,x,w,v,u,t
z=U.a1
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gb2(),w={func:1,ret:-1,args:[D.r]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.d8(a,b,this,[z])
z.b=!0
this.N(z)},"$2","gco",8,0,17],
ej:[function(a,b){var z,y,x,w,v,u,t
z=U.a1
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gb2(),w={func:1,ret:-1,args:[D.r]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gu()
t.toString
H.d(x,w)
C.a.H(t.a,x)}}z=new D.d9(a,b,this,[z])
z.b=!0
this.N(z)},"$2","gcH",8,0,17],
ar:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.X()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ae(z,z.length,0,[H.t(z,0)]),x=null;z.w();){y=z.d
if(y!=null){w=y.ar(0,b,c)
if(w!=null)x=x==null?w:w.m(0,x)}}this.f=x==null?V.bM():x
z=this.e
if(!(z==null))z.ai(0)}return this.f},
n:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d7))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.I(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a1]},
$asay:function(){return[U.a1]},
$isa1:1},a1:{"^":"eO;"},dw:{"^":"a1;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gu:function(){var z=this.y
if(z==null){z=D.a6()
this.y=z}return z},
N:function(a){var z=this.y
if(!(z==null))z.M(a)},
sbN:function(a){var z,y
a=V.cG(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.H("yaw",y,a,this,[P.q])
z.b=!0
this.N(z)}},
sbC:function(a,b){var z,y
b=V.cG(b,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,b)){y=this.b
this.b=b
z=new D.H("pitch",y,b,this,[P.q])
z.b=!0
this.N(z)}},
sbG:function(a){var z,y
a=V.cG(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.H("roll",y,a,this,[P.q])
z.b=!0
this.N(z)}},
sbu:function(a){var z,y
z=this.d
if(!$.l.$2(z,a)){y=this.d
this.d=a
z=new D.H("deltaYaw",y,a,this,[P.q])
z.b=!0
this.N(z)}},
sbs:function(a){var z,y
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=new D.H("deltaPitch",y,a,this,[P.q])
z.b=!0
this.N(z)}},
sbt:function(a){var z,y
z=this.f
if(!$.l.$2(z,a)){y=this.f
this.f=a
z=new D.H("deltaRoll",y,a,this,[P.q])
z.b=!0
this.N(z)}},
ar:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.c
this.sbN(this.a+this.d*b.y)
this.sbC(0,this.b+this.e*b.y)
this.sbG(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
z=V.ah(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1)
y=this.b
x=Math.cos(y)
w=Math.sin(y)
z=z.m(0,V.ah(x,0,-w,0,0,1,0,0,w,0,x,0,0,0,0,1))
y=this.a
x=Math.cos(y)
w=Math.sin(y)
this.x=z.m(0,V.ah(1,0,0,0,0,x,-w,0,0,w,x,0,0,0,0,1))
z=this.y
if(!(z==null))z.ai(0)}return this.x},
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dw))return!1
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
i:function(a){return"Rotater: ["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"], ["+V.A(this.d,3,0)+", "+V.A(this.e,3,0)+", "+V.A(this.f,3,0)+"]"}}}],["","",,M,{"^":"",f9:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
a2:[function(a){var z
H.m(a,"$isr")
z=this.x
if(!(z==null))z.M(a)},function(){return this.a2(null)},"e1","$1","$0","gU",0,2,1],
e6:[function(a,b){var z,y,x,w,v,u,t,s
z=E.af
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gL()==null){s=new D.bs()
s.a=H.e([],v)
s.c=0
t.sL(s)}s=t.gL()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.d8(a,b,this,[z])
z.b=!0
this.a2(z)},"$2","gcq",8,0,5],
e7:[function(a,b){var z,y,x,w,v,u,t,s
z=E.af
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.r]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gL()==null){s=new D.bs()
s.a=H.e([],v)
s.c=0
t.sL(s)}s=t.gL()
s.toString
H.d(x,w)
C.a.H(s.a,x)}}z=new D.d9(a,b,this,[z])
z.b=!0
this.a2(z)},"$2","gcr",8,0,5],
sbI:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gu()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.r]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gu()
z.toString
y=H.d(this.gU(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.cg])
z.b=!0
this.a2(z)}},
gu:function(){var z=this.x
if(z==null){z=D.a6()
this.x=z}return z},
a8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.bF(this.c)
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
if(typeof x!=="number")return H.B(x)
u=C.c.P(v.a*x)
if(typeof w!=="number")return H.B(w)
t=C.c.P(v.b*w)
s=C.c.P(v.c*x)
a.c=s
v=C.c.P(v.d*w)
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
s.bE(V.ah(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dn
if(y==null){y=new V.J(0,0,-1)
m=y.F(0,Math.sqrt(y.I(y)))
y=new V.J(0,1,0).ab(m)
l=y.F(0,Math.sqrt(y.I(y)))
k=m.ab(l)
j=new V.J(0,0,0)
y=V.ah(l.a,k.a,m.a,l.as(0).I(j),l.b,k.b,m.b,k.as(0).I(j),l.c,k.c,m.c,m.as(0).I(j),0,0,0,1)
$.dn=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.m(0,i)}a.db.bE(i)
for(z=this.d.a,z=new J.ae(z,z.length,0,[H.t(z,0)]);z.w();)z.d.bM(0,a)
for(z=this.d.a,z=new J.ae(z,z.length,0,[H.t(z,0)]);z.w();)z.d.a8(a)
this.a.toString
a.cy.aS()
a.db.aS()
this.b.toString
a.bD()},
$iskZ:1}}],["","",,A,{"^":"",cK:{"^":"a;a,b,c"},eI:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
de:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dd:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},f_:{"^":"dx;0x,0y,0z,0Q,0ch,0cx,0cy,a,b,0c,0d,0e,0f,0r"},dx:{"^":"cL;",
c1:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
bb:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eq(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.b(P.Z("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
cU:function(){var z,y,x,w,v,u
z=H.e([],[A.cK])
y=this.a
x=H.O(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.cK(y,v.name,u))}this.f=new A.eI(z)},
cW:function(){var z,y,x,w,v,u
z=H.e([],[A.T])
y=this.a
x=H.O(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.d9(v.type,v.size,v.name,u))}this.r=new A.hO(z)},
a4:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hH(z,y,b,c)
else return A.ck(z,y,b,a,c)},
cf:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hS(z,y,b,c)
else return A.ck(z,y,b,a,c)},
cg:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.hT(z,y,b,c)
else return A.ck(z,y,b,a,c)},
aq:function(a,b){return new P.e3(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
d9:function(a,b,c,d){switch(a){case 5120:return this.a4(b,c,d)
case 5121:return this.a4(b,c,d)
case 5122:return this.a4(b,c,d)
case 5123:return this.a4(b,c,d)
case 5124:return this.a4(b,c,d)
case 5125:return this.a4(b,c,d)
case 5126:return new A.cj(this.a,this.e,c,d)
case 35664:return new A.hJ(this.a,this.e,c,d)
case 35665:return new A.cl(this.a,this.e,c,d)
case 35666:return new A.hM(this.a,this.e,c,d)
case 35667:return new A.hK(this.a,this.e,c,d)
case 35668:return new A.hL(this.a,this.e,c,d)
case 35669:return new A.hN(this.a,this.e,c,d)
case 35674:return new A.hQ(this.a,this.e,c,d)
case 35675:return new A.hR(this.a,this.e,c,d)
case 35676:return new A.cm(this.a,this.e,c,d)
case 35678:return this.cf(b,c,d)
case 35680:return this.cg(b,c,d)
case 35670:throw H.b(this.aq("BOOL",c))
case 35671:throw H.b(this.aq("BOOL_VEC2",c))
case 35672:throw H.b(this.aq("BOOL_VEC3",c))
case 35673:throw H.b(this.aq("BOOL_VEC4",c))
default:throw H.b(P.Z("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},T:{"^":"a;"},hO:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.B()},
dh:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
B:function(){return this.dh("\n")}},hH:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},hK:{"^":"T;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},hL:{"^":"T;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},hN:{"^":"T;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},hI:{"^":"T;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.f(this.c)},
l:{
ck:function(a,b,c,d,e){var z=new A.hI(a,b,c,e)
z.f=d
z.e=P.fz(d,0,!1,P.x)
return z}}},cj:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},hJ:{"^":"T;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},cl:{"^":"T;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},hM:{"^":"T;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},hQ:{"^":"T;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},hR:{"^":"T;a,b,c,d",
i:function(a){return"UniformMat3: "+H.f(this.c)}},cm:{"^":"T;a,b,c,d",
aY:function(a){var z=new Float32Array(H.cs(H.w(a,"$isc",[P.q],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},hS:{"^":"T;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},hT:{"^":"T;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
ke:function(a,b,c,d){return F.jN(c,a,d,b,new F.kf())},
jN:function(a,b,c,d,e){var z,y
z=F.kc(a,b,new F.jO(H.d(e,{func:1,ret:V.aq,args:[P.q]}),d,b,c),null)
if(z==null)return
y=z.e
if(!(y==null))++y.c
z.d.aN()
z.a.aN()
y=z.e
if(!(y==null))y.ai(0)
z.dw(new F.i5(),new F.fO())
return z},
kc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
if(a<1)return
if(b<1)return
z=new F.dy()
y=new F.i0(z)
y.b=!1
x=[F.ai]
y.c=H.e([],x)
z.a=y
y=new F.hj(z)
y.b=H.e([],[F.dp])
z.b=y
y=new F.hi(z)
y.b=H.e([],[F.dd])
z.c=y
y=new F.hh(z)
y.b=H.e([],[F.ab])
z.d=y
z.e=null
w=H.e([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cn(null,null,new V.bq(x,0,0,1),null,null,new V.M(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.br(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cn(null,null,new V.bq(o,n,m,1),null,null,new V.M(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.br(d))}}z.d.d_(a+1,b+1,w)
return z},
kf:{"^":"o:30;",
$1:function(a){return new V.aq(Math.cos(a),Math.sin(a),0)}},
jO:{"^":"o:31;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.cH(y.$1(z),x)
x=J.cH(y.$1(z+3.141592653589793/this.c),x).T(0,w)
x=new V.J(x.a,x.b,x.c)
v=x.F(0,Math.sqrt(x.I(x)))
u=new V.J(1,0,0)
y=v.ab(!v.n(0,u)?new V.J(0,0,1):u)
t=y.F(0,Math.sqrt(y.I(y)))
y=t.ab(v)
u=y.F(0,Math.sqrt(y.I(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.m(0,y*x)
x=t.m(0,r*x)
x=new V.aq(w.a+(y.a-x.a),w.b+(y.b-x.b),w.c+(y.c-x.c))
if(!J.I(a.f,x)){a.f=x
y=a.a
if(y!=null)y.R()}}},
ab:{"^":"a;0a,0b,0c,0d,0e",
ac:function(){if(!this.gbv()){C.a.H(this.a.a.d.b,this)
this.a.a.R()}this.cM()
this.cN()
this.cO()},
cR:function(a){this.a=a
C.a.h(a.d.b,this)},
cS:function(a){this.b=a
C.a.h(a.d.c,this)},
cT:function(a){this.c=a
C.a.h(a.d.d,this)},
cM:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
cN:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
cO:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gbv:function(){return this.a==null||this.b==null||this.c==null},
cb:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.J(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.dn())return
return v.F(0,Math.sqrt(v.I(v)))},
cd:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.T(0,y)
z=new V.J(z.a,z.b,z.c)
v=z.F(0,Math.sqrt(z.I(z)))
z=w.T(0,y)
z=new V.J(z.a,z.b,z.c)
z=v.ab(z.F(0,Math.sqrt(z.I(z))))
return z.F(0,Math.sqrt(z.I(z)))},
aM:function(){if(this.d!=null)return!0
var z=this.cb()
if(z==null){z=this.cd()
if(z==null)return!1}this.d=z
this.a.a.R()
return!0},
gd5:function(a){if(J.I(this.a,this.b))return!0
if(J.I(this.b,this.c))return!0
if(J.I(this.c,this.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var z,y
if(this.gbv())return a+"disposed"
z=a+C.b.a0(J.a5(this.a.e),0)+", "+C.b.a0(J.a5(this.b.e),0)+", "+C.b.a0(J.a5(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
B:function(){return this.q("")},
l:{
bH:function(a,b,c){var z,y,x
z=new F.ab()
y=a.a
if(y==null)H.X(P.Z("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.X(P.Z("May not create a face with vertices attached to different shapes."))
z.cR(a)
z.cS(b)
z.cT(c)
C.a.h(z.a.a.d.b,z)
z.a.a.R()
return z}}},
fc:{"^":"a;"},
ho:{"^":"fc;",
ae:function(a,b,c){var z,y
z=b.a
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.p()
z=z.e
y=c.c
y.a.a.p()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.p()
z=z.e
y=c.c
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.p()
z=z.e
y=c.c
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dd:{"^":"a;"},
ft:{"^":"a;"},
hG:{"^":"ft;",
ae:function(a,b,c){var z,y
z=b.a
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dp:{"^":"a;"},
dy:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.a6()
this.e=z}return z},
cl:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ai],"$asc")
H.w(e,"$isc",[P.x],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.ae(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
dw:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ai],x=[P.x];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.cl(a,v,y,u,t))b.dv(u)}this.a.p()
this.c.aT()
this.d.aT()
this.b.dO()
this.c.aU(new F.hG())
this.d.aU(new F.ho())
z=this.e
if(!(z==null))z.ai(0)},
d3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aj()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$be().a)!==0)++w
if((x&$.$get$bf().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
v=b.gaZ(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.cO])
for(r=0,q=0;q<w;++q){p=b.d1(q)
o=p.gaZ(p)
C.a.K(s,q,new Z.cO(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].ds(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.K(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cs(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cP(new Z.e1(34962,j),s,b)
i.b=H.e([],[Z.bJ])
if(this.b.b.length!==0){x=P.x
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)}f=Z.co(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bJ(0,h.length,f))}if(this.c.b.length!==0){x=P.x
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.p()
C.a.h(h,g.e)}f=Z.co(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bJ(1,h.length,f))}if(this.d.b.length!==0){x=P.x
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.p()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.p()
C.a.h(h,g.e)}f=Z.co(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bJ(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.q("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.q("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.q("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.q("   "))}return C.a.t(z,"\n")},
S:function(a){var z=this.e
if(!(z==null))z.M(a)},
R:function(){return this.S(null)}},
hh:{"^":"a;a,0b",
d_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ai],"$asc")
z=H.e([],[F.ab])
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
C.a.h(z,F.bH(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bH(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bH(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bH(q,n,r))}u=!u}w=!w}return z},
gj:function(a){return this.b.length},
aU:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.ae(0,v,t)){v.ac()
break}}}}},
aT:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gd5(x)
if(y)x.ac()}},
aN:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].aM())x=!1
return x},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}},
hi:{"^":"a;a,0b",
gj:function(a){return this.b.length},
aU:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.ae(0,v,t)){v.ac()
break}}}}},
aT:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.I(x.a,x.b)
if(y)x.ac()}},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].q(a+(""+x+". ")))}return C.a.t(z,"\n")},
B:function(){return this.q("")}},
hj:{"^":"a;a,0b",
gj:function(a){return this.b.length},
dO:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ac()}},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}},
ai:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
br:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cn(this.cx,x,u,z,y,w,v,a,t)},
ds:function(a){var z,y
z=J.D(a)
if(z.n(a,$.$get$aj())){z=this.f
y=[P.q]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$aH())){z=this.r
y=[P.q]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$aG())){z=H.e([0,0,1],[P.q])
return z}else if(z.n(a,$.$get$aI())){z=this.y
y=[P.q]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.n(a,$.$get$aJ())){z=H.e([0,0,0],[P.q])
return z}else if(z.n(a,$.$get$be())){z=this.Q
y=[P.q]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.n(a,$.$get$bf())){z=this.Q
y=[P.q]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.n(a,$.$get$aK()))return H.e([this.ch],[P.q])
else if(z.n(a,$.$get$aF())){z=H.e([-1,-1,-1,-1],[P.q])
return z}else return H.e([],[P.q])},
aM:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.J(0,0,0)
this.d.D(0,new F.i9(z))
z=z.a
this.r=z.F(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.R()
z=this.a.e
if(!(z==null))z.ai(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var z,y,x
z=H.e([],[P.j])
C.a.h(z,C.b.a0(J.a5(this.e),0))
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
C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,V.A(this.ch,3,0))
C.a.h(z,"-")
x=C.a.t(z,", ")
return a+"{"+x+"}"},
B:function(){return this.q("")},
l:{
cn:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ai()
y=new F.i8(z)
y.b=H.e([],[F.dp])
z.b=y
y=new F.i4(z)
x=[F.dd]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.i1(z)
x=[F.ab]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$dZ()
z.e=0
y=$.$get$aj()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aH().a)!==0?e:null
z.x=(x&$.$get$aG().a)!==0?b:null
z.y=(x&$.$get$aI().a)!==0?f:null
z.z=(x&$.$get$aJ().a)!==0?g:null
z.Q=(x&$.$get$e_().a)!==0?c:null
z.ch=(x&$.$get$aK().a)!==0?i:0
z.cx=(x&$.$get$aF().a)!==0?a:null
return z}}},
i9:{"^":"o:9;a",
$1:function(a){var z,y
H.m(a,"$isab")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
i0:{"^":"a;a,0b,0c",
p:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.b(P.Z("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.R()
return!0},
gj:function(a){return this.c.length},
aN:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].aM()
return!0},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
this.p()
z=H.e([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}},
i1:{"^":"a;a,0b,0c,0d",
gj:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.i(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.i(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
D:function(a,b){H.d(b,{func:1,ret:-1,args:[F.ab]})
C.a.D(this.b,b)
C.a.D(this.c,new F.i2(this,b))
C.a.D(this.d,new F.i3(this,b))},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}},
i2:{"^":"o:9;a,b",
$1:function(a){H.m(a,"$isab")
if(!J.I(a.a,this.a))this.b.$1(a)}},
i3:{"^":"o:9;a,b",
$1:function(a){var z
H.m(a,"$isab")
z=this.a
if(!J.I(a.a,z)&&!J.I(a.b,z))this.b.$1(a)}},
i4:{"^":"a;a,0b,0c",
gj:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}},
i6:{"^":"a;"},
i5:{"^":"i6;",
ae:function(a,b,c){return J.I(b.f,c.f)}},
i7:{"^":"a;"},
fO:{"^":"i7;",
dv:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.ai],"$asc")
z=new V.J(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.J(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.F(0,Math.sqrt(z.I(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){t=a[x]
s=z.F(0,Math.sqrt(u))
if(!J.I(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.M(null)}}}return}},
i8:{"^":"a;a,0b",
gj:function(a){return this.b.length},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.e([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].q(a))
return C.a.t(z,"\n")},
B:function(){return this.q("")}}}],["","",,O,{"^":"",eZ:{"^":"cg;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.a6()
this.f=z}return z},
al:function(a){var z=this.f
if(!(z==null))z.M(a)}},cg:{"^":"a;"}}],["","",,T,{"^":"",hw:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",eH:{"^":"a;",
ad:function(a,b){return!0},
i:function(a){return"all"},
$isbx:1},bx:{"^":"a;"},di:{"^":"a;",
ad:["bY",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].ad(0,b))return!0
return!1}],
i:["b_",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbx:1},b3:{"^":"di;0a",
ad:function(a,b){return!this.bY(0,b)},
i:function(a){return"!["+this.b_(0)+"]"}},hf:{"^":"a;0a",
c0:function(a){var z,y
if(a.a.length<=0)throw H.b(P.Z("May not create a SetMatcher with zero characters."))
z=new H.aB(0,0,[P.x,P.al])
for(y=new H.dg(a,a.gj(a),0,[H.an(a,"n",0)]);y.w();)z.K(0,y.d,!0)
this.a=z},
ad:function(a,b){return this.a.bq(0,b)},
i:function(a){var z=this.a
return P.cf(new H.df(z,[H.t(z,0)]),0,null)},
$isbx:1,
l:{
R:function(a){var z=new V.hf()
z.c0(a)
return z}}},dA:{"^":"a;a,b,0c,0d",
gdz:function(a){return this.b},
t:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dK(this.a.A(0,b))
w.a=H.e([],[V.bx])
w.c=!1
C.a.h(this.c,w)
return w},
dg:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.ad(0,a))return w}return},
i:function(a){return this.b}},dI:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.eB(this.b,"\n","\\n")
y=H.eB(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dJ:{"^":"a;a,b,0c",
i:function(a){return this.b}},hB:{"^":"a;0a,0b,0c",
A:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dA(this,b)
z.c=H.e([],[V.dK])
this.a.K(0,b,z)}return z},
aj:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.dJ(this,a)
y=P.j
z.c=new H.aB(0,0,[y,y])
this.b.K(0,a,z)}return z},
dZ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.dI])
y=this.c
x=[P.x]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.am(a,t)
r=y.dg(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cf(w,0,null)
throw H.b(P.Z("Untokenizable string [state: "+y.gdz(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cf(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.dI(o==null?p.b:o,q,t)}++t}}}},dK:{"^":"di;b,0c,0a",
i:function(a){return this.b.b+": "+this.b_(0)}}}],["","",,X,{"^":"",cR:{"^":"a;",$isdj:1},fh:{"^":"dD;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.a6()
this.x=z}return z}},fR:{"^":"a;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.a6()
this.e=z}return z},
a9:[function(a){var z
H.m(a,"$isr")
z=this.e
if(!(z==null))z.M(a)},function(){return this.a9(null)},"e5","$1","$0","gbe",0,2,1],
sby:function(a){var z,y,x
if(!J.I(this.a,a)){z=this.a
if(z!=null){z=z.gu()
z.toString
y=H.d(this.gbe(),{func:1,ret:-1,args:[D.r]})
C.a.H(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gu()
z.toString
y=H.d(this.gbe(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,y)}z=new D.H("mover",x,this.a,this,[U.a1])
z.b=!0
this.a9(z)}},
$isdj:1,
$iscR:1},dD:{"^":"a;"}}],["","",,V,{"^":"",
ka:function(a){P.hA(C.r,new V.kb(a))},
kb:{"^":"o:32;a",
$1:function(a){H.m(a,"$isaD")
P.cF(C.c.bL(this.a.gdi(),2)+" fps")}},
hk:{"^":"a;0a,0b",
c2:function(a,b){var z,y,x,w,v,u,t
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
t=W.Y
W.N(z,"scroll",H.d(new V.hn(x),{func:1,ret:-1,args:[t]}),!1,t)},
d0:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.j],"$asc")
this.cV()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.dZ(C.a.dq(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.eA(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jn(C.B,s,C.m,!1)
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
cV:function(){var z,y,x,w
if(this.b!=null)return
z=new V.hB()
y=P.j
z.a=new H.aB(0,0,[y,V.dA])
z.b=new H.aB(0,0,[y,V.dJ])
z.c=z.A(0,"Start")
y=z.A(0,"Start").t(0,"Bold")
x=V.R(new H.P("*"))
C.a.h(y.a,x)
y.c=!0
y=z.A(0,"Bold").t(0,"Bold")
x=new V.b3()
w=[V.bx]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.R(new H.P("*"))
C.a.h(x.a,y)
y=z.A(0,"Bold").t(0,"BoldEnd")
x=V.R(new H.P("*"))
C.a.h(y.a,x)
y.c=!0
y=z.A(0,"Start").t(0,"Italic")
x=V.R(new H.P("_"))
C.a.h(y.a,x)
y.c=!0
y=z.A(0,"Italic").t(0,"Italic")
x=new V.b3()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.R(new H.P("_"))
C.a.h(x.a,y)
y=z.A(0,"Italic").t(0,"ItalicEnd")
x=V.R(new H.P("_"))
C.a.h(y.a,x)
y.c=!0
y=z.A(0,"Start").t(0,"Code")
x=V.R(new H.P("`"))
C.a.h(y.a,x)
y.c=!0
y=z.A(0,"Code").t(0,"Code")
x=new V.b3()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.R(new H.P("`"))
C.a.h(x.a,y)
y=z.A(0,"Code").t(0,"CodeEnd")
x=V.R(new H.P("`"))
C.a.h(y.a,x)
y.c=!0
y=z.A(0,"Start").t(0,"LinkHead")
x=V.R(new H.P("["))
C.a.h(y.a,x)
y.c=!0
y=z.A(0,"LinkHead").t(0,"LinkTail")
x=V.R(new H.P("|"))
C.a.h(y.a,x)
x=z.A(0,"LinkHead").t(0,"LinkEnd")
y=V.R(new H.P("]"))
C.a.h(x.a,y)
x.c=!0
x=z.A(0,"LinkHead").t(0,"LinkHead")
y=new V.b3()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.R(new H.P("|]"))
C.a.h(y.a,x)
x=z.A(0,"LinkTail").t(0,"LinkEnd")
y=V.R(new H.P("]"))
C.a.h(x.a,y)
x.c=!0
x=z.A(0,"LinkTail").t(0,"LinkTail")
y=new V.b3()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.R(new H.P("|]"))
C.a.h(y.a,x)
C.a.h(z.A(0,"Start").t(0,"Other").a,new V.eH())
x=z.A(0,"Other").t(0,"Other")
y=new V.b3()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.R(new H.P("*_`["))
C.a.h(y.a,x)
x=z.A(0,"BoldEnd")
x.d=x.a.aj("Bold")
x=z.A(0,"ItalicEnd")
x.d=x.a.aj("Italic")
x=z.A(0,"CodeEnd")
x.d=x.a.aj("Code")
x=z.A(0,"LinkEnd")
x.d=x.a.aj("Link")
x=z.A(0,"Other")
x.d=x.a.aj("Other")
this.b=z},
l:{
hl:function(a,b){var z=new V.hk()
z.c2(a,!0)
return z}}},
hn:{"^":"o:33;a",
$1:function(a){P.dG(C.h,new V.hm(this.a))}},
hm:{"^":"o:0;a",
$0:function(){var z,y,x
z=C.c.P(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}}}],["","",,R,{"^":"",
ew:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=V.hl("Test 004",!0)
y=W.cS(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.d0(H.e(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],[P.j]))
x=new U.dw()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sbN(0)
x.sbC(0,0)
x.sbG(0)
x.sbu(0.1)
x.sbs(0.21)
x.sbt(0.32)
x.sbu(0.51)
x.sbs(0.71)
x.sbt(0.92)
w=new U.d7()
w.b0(U.a1)
w.at(w.gco(),w.gcH())
w.e=null
w.f=V.bM()
w.r=0
w.h(0,U.cW(V.ah(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
w.h(0,x)
v=F.ke(30,2,15,0.2)
u=E.ag(null,!0,w,"",v,null)
t=E.ag(null,!0,w,"",v,null)
t.y.h(0,u)
s=E.ag(null,!0,w,"",v,null)
s.y.h(0,t)
r=E.ag(null,!0,w,"",v,null)
r.y.h(0,s)
q=E.ag(null,!0,w,"",v,null)
q.y.h(0,r)
p=E.ag(null,!0,w,"",v,null)
p.y.h(0,q)
o=E.ag(null,!0,w,"",v,null)
o.y.h(0,p)
n=E.ag(null,!0,w,"",v,null)
n.y.h(0,o)
m=E.ag(null,!0,w,"",v,null)
m.y.h(0,n)
l=new M.f9()
z=O.cU(E.af)
l.d=z
z.at(l.gcq(),l.gcr())
l.e=null
l.f=null
l.r=null
l.x=null
k=new X.fR()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.sby(null)
z=k.b
if(!$.l.$2(z,1.0471975511965976)){j=k.b
k.b=1.0471975511965976
z=new D.H("fov",j,1.0471975511965976,k,[P.q])
z.b=!0
k.a9(z)}z=k.c
if(!$.l.$2(z,0.1)){j=k.c
k.c=0.1
z=new D.H("near",j,0.1,k,[P.q])
z.b=!0
k.a9(z)}z=k.d
if(!$.l.$2(z,2000)){j=k.d
k.d=2000
z=new D.H("far",j,2000,k,[P.q])
z.b=!0
k.a9(z)}z=l.a
if(z!==k){if(z!=null){z=z.gu()
z.toString
i=H.d(l.gU(),{func:1,ret:-1,args:[D.r]})
C.a.H(z.a,i)}j=l.a
l.a=k
z=k.gu()
z.toString
i=H.d(l.gU(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,i)
z=new D.H("camera",j,l.a,l,[X.cR])
z.b=!0
l.a2(z)}h=new X.fh()
z=new V.bq(0,0,0,1)
h.a=z
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
z=V.du(0,0,1,1)
h.r=z
z=l.b
if(z!==h){if(z!=null){z=z.gu()
z.toString
i=H.d(l.gU(),{func:1,ret:-1,args:[D.r]})
C.a.H(z.a,i)}j=l.b
l.b=h
z=h.gu()
z.toString
i=H.d(l.gU(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,i)
z=new D.H("target",j,l.b,l,[X.dD])
z.b=!0
l.a2(z)}l.sbI(null)
z=new O.eZ()
z.d=1
z.e=10
g=new V.bp(1,1,1)
z.b=g
i=[V.bp]
f=new D.H("objectColor",null,g,z,i)
f.b=!0
z.al(f)
g=new V.bp(0,0,0)
if(!J.I(z.c,g)){j=z.c
z.c=g
i=new D.H("fogColor",j,g,z,i)
i.b=!0
z.al(i)}i=z.d
if(!$.l.$2(i,3)){j=z.d
z.d=3
i=new D.H("fogStart",j,3,z,[P.q])
i.b=!0
z.al(i)}i=z.e
if(!$.l.$2(i,6)){j=z.e
z.e=6
i=new D.H("fogStop",j,6,z,[P.q])
i.b=!0
z.al(i)}l.sbI(z)
l.d.h(0,m)
l.a.sby(U.cW(V.ah(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=document.getElementById("testCanvas")
if(e==null)H.X(P.Z("Failed to find an element with the identifier, testCanvas."))
d=E.hy(e,!0,!0,!0,!1)
z=d.d
if(z!==l){if(z!=null){z=z.gu()
z.toString
i=H.d(d.gb1(),{func:1,ret:-1,args:[D.r]})
C.a.H(z.a,i)}d.d=l
z=l.gu()
z.toString
i=H.d(d.gb1(),{func:1,ret:-1,args:[D.r]})
C.a.h(z.a,i)
d.c5()}V.ka(d)}},1]]
setupProgram(dart,0,0)
J.D=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.db.prototype
return J.fn.prototype}if(typeof a=="string")return J.bK.prototype
if(a==null)return J.fo.prototype
if(typeof a=="boolean")return J.fm.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.a)return a
return J.bY(a)}
J.bC=function(a){if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.a)return a
return J.bY(a)}
J.cA=function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.a)return a
return J.bY(a)}
J.jS=function(a){if(typeof a=="number")return J.bu.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bQ.prototype
return a}
J.jT=function(a){if(typeof a=="number")return J.bu.prototype
if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bQ.prototype
return a}
J.bX=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.a)return a
return J.bY(a)}
J.I=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.D(a).n(a,b)}
J.eD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jS(a).X(a,b)}
J.cH=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jT(a).m(a,b)}
J.eE=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k1(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bC(a).k(a,b)}
J.eF=function(a,b,c,d){return J.bX(a).bm(a,b,c,d)}
J.c0=function(a,b,c){return J.bC(a).d6(a,b,c)}
J.cI=function(a,b){return J.cA(a).v(a,b)}
J.eG=function(a,b){return J.cA(a).D(a,b)}
J.ax=function(a){return J.D(a).gG(a)}
J.bo=function(a){return J.cA(a).gJ(a)}
J.aS=function(a){return J.bC(a).gj(a)}
J.a5=function(a){return J.D(a).i(a)}
I.cD=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.f=W.c3.prototype
C.t=J.k.prototype
C.a=J.aA.prototype
C.e=J.db.prototype
C.c=J.bu.prototype
C.b=J.bK.prototype
C.A=J.bv.prototype
C.C=H.fM.prototype
C.D=W.fN.prototype
C.l=J.fS.prototype
C.i=J.bQ.prototype
C.n=W.bg.prototype
C.o=W.id.prototype
C.p=new P.fQ()
C.q=new P.i_()
C.d=new P.j1()
C.h=new P.az(0)
C.r=new P.az(5e6)
C.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.v=function(hooks) {
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
C.j=function(hooks) { return hooks; }

C.w=function(getTagFallback) {
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
C.x=function() {
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
C.y=function(hooks) {
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
C.z=function(hooks) {
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
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=H.e(I.cD([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.m=new P.hZ(!1)
$.aa=0
$.aT=null
$.cM=null
$.ct=!1
$.et=null
$.en=null
$.ez=null
$.bV=null
$.bZ=null
$.cB=null
$.aM=null
$.bi=null
$.bj=null
$.cu=!1
$.F=C.d
$.d3=null
$.d2=null
$.d1=null
$.d0=null
$.l=V.fG()
$.f1="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.f0="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.dn=null
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
I.$lazy(y,x,w)}})(["d_","$get$d_",function(){return H.es("_$dart_dartClosure")},"c8","$get$c8",function(){return H.es("_$dart_js")},"dL","$get$dL",function(){return H.ac(H.bP({
toString:function(){return"$receiver$"}}))},"dM","$get$dM",function(){return H.ac(H.bP({$method$:null,
toString:function(){return"$receiver$"}}))},"dN","$get$dN",function(){return H.ac(H.bP(null))},"dO","$get$dO",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dS","$get$dS",function(){return H.ac(H.bP(void 0))},"dT","$get$dT",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dQ","$get$dQ",function(){return H.ac(H.dR(null))},"dP","$get$dP",function(){return H.ac(function(){try{null.$method$}catch(z){return z.message}}())},"dV","$get$dV",function(){return H.ac(H.dR(void 0))},"dU","$get$dU",function(){return H.ac(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cp","$get$cp",function(){return P.ie()},"bk","$get$bk",function(){return[]},"eh","$get$eh",function(){return P.h5("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"cY","$get$cY",function(){return{}},"e0","$get$e0",function(){return Z.a3(0)},"dZ","$get$dZ",function(){return Z.a3(511)},"aj","$get$aj",function(){return Z.a3(1)},"aH","$get$aH",function(){return Z.a3(2)},"aG","$get$aG",function(){return Z.a3(4)},"aI","$get$aI",function(){return Z.a3(8)},"aJ","$get$aJ",function(){return Z.a3(16)},"be","$get$be",function(){return Z.a3(32)},"bf","$get$bf",function(){return Z.a3(64)},"e_","$get$e_",function(){return Z.a3(96)},"aK","$get$aK",function(){return Z.a3(128)},"aF","$get$aF",function(){return Z.a3(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1,opt:[D.r]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[W.Y]},{func:1,ret:-1,args:[P.x,[P.h,E.af]]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:P.z,args:[D.r]},{func:1,ret:-1,args:[W.aE]},{func:1,ret:P.z,args:[F.ab]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.j,args:[P.x]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.x,[P.h,U.a1]]},{func:1,ret:-1,args:[P.a],opt:[P.a8]},{func:1,ret:P.z,args:[,],opt:[,]},{func:1,ret:[P.ak,,],args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.al,args:[W.C]},{func:1,ret:W.Q,args:[W.C]},{func:1,args:[P.j]},{func:1,args:[,P.j]},{func:1,ret:P.z,args:[P.K]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.r]}]},{func:1,ret:P.al,args:[P.q,P.q]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:V.aq,args:[P.q]},{func:1,ret:P.z,args:[F.ai,P.q,P.q]},{func:1,ret:P.z,args:[P.aD]},{func:1,ret:P.z,args:[W.Y]},{func:1,ret:P.z,args:[{func:1,ret:-1}]}]
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
if(x==y)H.kd(d||a)
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
Isolate.cD=a.cD
Isolate.cy=a.cy
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
if(typeof dartMainRunner==="function")dartMainRunner(R.ew,[])
else R.ew([])})})()
//# sourceMappingURL=test.dart.js.map
