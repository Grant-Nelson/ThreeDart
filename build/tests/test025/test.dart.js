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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isu)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.ds"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ds"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.ds(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dv=function(){}
var dart=[["","",,H,{"^":"",nz:{"^":"b;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
dA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cC:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dy==null){H.mI()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c6("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cV()]
if(v!=null)return v
v=H.mN(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cV(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
u:{"^":"b;",
t:function(a,b){return a===b},
gR:function(a){return H.bG(a)},
i:["eh",function(a){return"Instance of '"+H.bb(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hX:{"^":"u;",
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$isag:1},
ed:{"^":"u;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0},
$isG:1},
cW:{"^":"u;",
gR:function(a){return 0},
i:["ei",function(a){return String(a)}]},
iF:{"^":"cW;"},
c7:{"^":"cW;"},
c1:{"^":"cW;",
i:function(a){var z=a[$.$get$dZ()]
if(z==null)return this.ei(a)
return"JavaScript function for "+H.l(J.a9(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscR:1},
b7:{"^":"u;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.A("add"))
a.push(b)},
K:function(a,b){var z
if(!!a.fixed$length)H.r(P.A("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b2(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hB:function(a){return this.C(a,"")},
ht:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b2(a))}return y},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bB:function(a,b,c){if(b<0||b>a.length)throw H.a(P.Y(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.Y(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.y(a,0)])
return H.d(a.slice(b,c),[H.y(a,0)])},
gax:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hV())},
aw:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.A("fill range"))
P.aK(b,c,a.length,null,null,null)
for(z=b;z.M(0,c);z=z.B(0,1))a[z]=d},
aT:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cT(a,"[","]")},
gY:function(a){return new J.at(a,a.length,0,[H.y(a,0)])},
gR:function(a){return H.bG(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cd(b,"newLength",null))
if(b<0)throw H.a(P.Y(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b>=a.length||b<0)throw H.a(H.aD(a,b))
a[b]=c},
$isj:1,
$isc:1,
p:{
hW:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.Y(a,0,4294967295,"length",null))
return J.ea(new Array(a),b)},
ea:function(a,b){return J.bA(H.d(a,[b]))},
bA:function(a){H.bT(a)
a.fixed$length=Array
return a}}},
ny:{"^":"b7;$ti"},
at:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c_:{"^":"u;",
ghA:function(a){return a===0?1/a<0:a<0},
ie:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
ce:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
e4:function(a,b){var z
if(b>20)throw H.a(P.Y(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghA(a))return"-"+z
return z},
b2:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.Y(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.T(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.A("Unexpected toString result: "+z))
x=J.aE(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a*b},
b7:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
el:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d_(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.d_(a,b)},
d_:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aF:function(a,b){var z
if(a>0)z=this.cY(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fE:function(a,b){if(b<0)throw H.a(H.ad(b))
return this.cY(a,b)},
cY:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.a(H.ad(b))
return a<b},
$isp:1,
$isa_:1},
ec:{"^":"c_;",$ism:1},
eb:{"^":"c_;"},
c0:{"^":"u;",
T:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aD(a,b))
if(b<0)throw H.a(H.aD(a,b))
if(b>=a.length)H.r(H.aD(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aD(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.M(b)
if(typeof b!=="string")throw H.a(P.cd(b,null,null))
return a+b},
aM:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ad(b))
c=P.aK(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ad(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a6:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ad(c))
if(typeof c!=="number")return c.M()
if(c<0||c>a.length)throw H.a(P.Y(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.a6(a,b,0)},
q:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.a(P.cp(b,null,null))
if(b>c)throw H.a(P.cp(b,null,null))
if(c>a.length)throw H.a(P.cp(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.q(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hR:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
a9:function(a,b){return this.hR(a,b," ")},
dL:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.Y(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dK:function(a,b){return this.dL(a,b,0)},
hh:function(a,b,c){if(c>a.length)throw H.a(P.Y(c,0,a.length,null,null))
return H.h2(a,b,c)},
i:function(a){return a},
gR:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ises:1,
$isi:1}}],["","",,H,{"^":"",
cD:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hV:function(){return new P.ji("No element")},
a3:{"^":"jP;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.T(this.a,b)},
$asct:function(){return[P.m]},
$asx:function(){return[P.m]},
$asj:function(){return[P.m]},
$asc:function(){return[P.m]}},
hG:{"^":"j;"},
ei:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.aE(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b2(z))
w=this.c
if(typeof x!=="number")return H.q(x)
if(w>=x){this.d=null
return!1}this.d=y.H(z,w);++this.c
return!0}},
ij:{"^":"j;a,b,$ti",
gY:function(a){return new H.ik(J.bv(this.a),this.b,this.$ti)},
gl:function(a){return J.as(this.a)},
H:function(a,b){return this.b.$1(J.cI(this.a,b))},
$asj:function(a,b){return[b]}},
ik:{"^":"cU;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascU:function(a,b){return[b]}},
kj:{"^":"j;a,b,$ti",
gY:function(a){return new H.kk(J.bv(this.a),this.b,this.$ti)}},
kk:{"^":"cU;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
ch:{"^":"b;$ti"},
ct:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.ay(this,"ct",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){H.z(d,H.ay(this,"ct",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jP:{"^":"cl+ct;"}}],["","",,H,{"^":"",
hu:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mD:function(a){return init.types[H.D(a)]},
fW:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a9(a)
if(typeof z!=="string")throw H.a(H.ad(a))
return z},
bG:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iP:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.M(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.Y(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
bb:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.I(a).$isc7){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.ay(w,1)
r=H.dz(H.bT(H.b_(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iH:function(){if(!!self.location)return self.location.href
return},
eu:function(a){var z,y,x,w,v
H.bT(a)
z=J.as(a)
if(typeof z!=="number")return z.ee()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iQ:function(a){var z,y,x,w
z=H.d([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ad(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aF(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ad(w))}return H.eu(z)},
ev:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ad(x))
if(x<0)throw H.a(H.ad(x))
if(x>65535)return H.iQ(a)}return H.eu(a)},
iR:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ee()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cn:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aF(z,10))>>>0,56320|z&1023)}}throw H.a(P.Y(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iO:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
iM:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
iI:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
iJ:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
iL:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
iN:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
iK:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
q:function(a){throw H.a(H.ad(a))},
e:function(a,b){if(a==null)J.as(a)
throw H.a(H.aD(a,b))},
aD:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.D(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.q(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cp(b,"index",null)},
mx:function(a,b,c){if(a>c)return new P.co(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.co(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
ad:function(a){return new P.aF(!0,a,null,null)},
mm:function(a){if(typeof a!=="number")throw H.a(H.ad(a))
return a},
a:function(a){var z
if(a==null)a=new P.er()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h4})
z.name=""}else z.toString=H.h4
return z},
h4:function(){return J.a9(this.dartException)},
r:function(a){throw H.a(a)},
B:function(a){throw H.a(P.b2(a))},
ar:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.n6(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aF(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cX(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eq(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eP()
u=$.$get$eQ()
t=$.$get$eR()
s=$.$get$eS()
r=$.$get$eW()
q=$.$get$eX()
p=$.$get$eU()
$.$get$eT()
o=$.$get$eZ()
n=$.$get$eY()
m=v.a8(y)
if(m!=null)return z.$1(H.cX(H.M(y),m))
else{m=u.a8(y)
if(m!=null){m.method="call"
return z.$1(H.cX(H.M(y),m))}else{m=t.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=r.a8(y)
if(m==null){m=q.a8(y)
if(m==null){m=p.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=o.a8(y)
if(m==null){m=n.a8(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eq(H.M(y),m))}}return z.$1(new H.jO(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eA()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eA()
return a},
bt:function(a){var z
if(a==null)return new H.fs(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fs(a)},
mA:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mK:function(a,b,c,d,e,f){H.f(a,"$iscR")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mK)
a.$identity=z
return z},
hq:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.iW(z).r}else x=d
w=e?Object.create(new H.jj().constructor.prototype):Object.create(new H.cL(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.B()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dU(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mD,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dN:H.cM
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dU(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hn:function(a,b,c,d){var z=H.cM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dU:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hp(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hn(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.B()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.ce("self")
$.bw=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.B()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.ce("self")
$.bw=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
ho:function(a,b,c,d){var z,y
z=H.cM
y=H.dN
switch(b?-1:a){case 0:throw H.a(H.j5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hp:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.ce("self")
$.bw=z}y=$.dM
if(y==null){y=H.ce("receiver")
$.dM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ho(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.az
if(typeof y!=="number")return y.B()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.B()
$.az=y+1
return new Function(z+y+"}")()},
ds:function(a,b,c,d,e,f,g){var z,y
z=J.bA(H.bT(b))
H.D(c)
y=!!J.I(d).$isc?J.bA(d):d
return H.hq(a,z,c,y,!!e,f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ax(a,"String"))},
my:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"double"))},
mW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ax(a,"num"))},
fP:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ax(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ax(a,"int"))},
h0:function(a,b){throw H.a(H.ax(a,H.M(b).substring(3)))},
mY:function(a,b){var z=J.aE(b)
throw H.a(H.hm(a,z.q(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.h0(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.mY(a,b)},
bT:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.a(H.ax(a,"List"))},
fY:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.h0(a,b)},
fS:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
c9:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fS(J.I(a))
if(z==null)return!1
y=H.fV(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.dn)return a
$.dn=!0
try{if(H.c9(a,b))return a
z=H.cc(b)
y=H.ax(a,z)
throw H.a(y)}finally{$.dn=!1}},
dw:function(a,b){if(a!=null&&!H.dr(a,b))H.r(H.ax(a,H.cc(b)))
return a},
fK:function(a){var z
if(a instanceof H.n){z=H.fS(J.I(a))
if(z!=null)return H.cc(z)
return"Closure"}return H.bb(a)},
n4:function(a){throw H.a(new P.hy(H.M(a)))},
fT:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
b_:function(a){if(a==null)return
return a.$ti},
ow:function(a,b,c){return H.bu(a["$as"+H.l(c)],H.b_(b))},
aZ:function(a,b,c,d){var z
H.M(c)
H.D(d)
z=H.bu(a["$as"+H.l(c)],H.b_(b))
return z==null?null:z[d]},
ay:function(a,b,c){var z
H.M(b)
H.D(c)
z=H.bu(a["$as"+H.l(b)],H.b_(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b_(a)
return z==null?null:z[b]},
cc:function(a){var z=H.b0(a,null)
return z},
b0:function(a,b){var z,y
H.w(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dz(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.l(b[y])}if('func' in a)return H.mc(a,b)
if('futureOr' in a)return"FutureOr<"+H.b0("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b0(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b0(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b0(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b0(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mz(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.b0(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dz:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.am("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b0(u,c)}v="<"+z.i(0)+">"
return v},
bu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bS:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b_(a)
y=J.I(a)
if(y[b]==null)return!1
return H.fN(H.bu(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.M(b)
H.bT(c)
H.M(d)
if(a==null)return a
z=H.bS(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dz(c,0,null)
throw H.a(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fN:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
ou:function(a,b,c){return a.apply(b,H.bu(J.I(b)["$as"+H.l(c)],H.b_(b)))},
fX:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fX(z)}return!1},
dr:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fX(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dr(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c9(a,b)}y=J.I(a).constructor
x=H.b_(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aq(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dr(a,b))throw H.a(H.ax(a,H.cc(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fV(a,b,c,d)
if('func' in a)return c.builtin$cls==="cR"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bu(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cc(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fN(H.bu(r,z),b,u,d)},
fV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.mV(m,b,l,d)},
mV:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
ov:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
mN:function(a){var z,y,x,w,v,u
z=H.M($.fU.$1(a))
y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.fM.$2(a,z))
if(z!=null){y=$.cB[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cE[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cF(x)
$.cB[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cE[z]=x
return x}if(v==="-"){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h_(a,x)
if(v==="*")throw H.a(P.c6(z))
if(init.leafTags[z]===true){u=H.cF(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h_(a,x)},
h_:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dA(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cF:function(a){return J.dA(a,!1,null,!!a.$isF)},
mU:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cF(z)
else return J.dA(z,c,null,null)},
mI:function(){if(!0===$.dy)return
$.dy=!0
H.mJ()},
mJ:function(){var z,y,x,w,v,u,t,s
$.cB=Object.create(null)
$.cE=Object.create(null)
H.mE()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h1.$1(v)
if(u!=null){t=H.mU(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mE:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bq(C.J,H.bq(C.O,H.bq(C.u,H.bq(C.u,H.bq(C.N,H.bq(C.K,H.bq(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fU=new H.mF(v)
$.fM=new H.mG(u)
$.h1=new H.mH(t)},
bq:function(a,b){return a(b)||b},
h2:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h3:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ht:{"^":"b;$ti",
i:function(a){return P.cZ(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hu()},
$isH:1},
hv:{"^":"ht;a,b,c,$ti",
gl:function(a){return this.a},
bh:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bh(0,b))return
return this.cO(b)},
cO:function(a){return this.b[H.M(a)]},
I:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.cO(v),z))}}},
iV:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iW:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bA(z)
y=z[0]
x=z[1]
return new H.iV(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jA:{"^":"b;a,b,c,d,e,f",
a8:function(a){var z,y,x
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
aB:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eV:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iC:{"^":"a4;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
eq:function(a,b){return new H.iC(a,b==null?null:b.method)}}},
i_:{"^":"a4;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
cX:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i_(a,y,z?null:b.receiver)}}},
jO:{"^":"a4;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
n6:{"^":"n:21;a",
$1:function(a){if(!!J.I(a).$isa4)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fs:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaw:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.bb(this).trim()+"'"},
geb:function(){return this},
$iscR:1,
geb:function(){return this}},
eG:{"^":"n;"},
jj:{"^":"eG;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cL:{"^":"eG;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cL))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gR:function(a){var z,y
z=this.c
if(z==null)y=H.bG(this.a)
else y=typeof z!=="object"?J.bU(z):H.bG(z)
return(y^H.bG(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bb(z)+"'")},
p:{
cM:function(a){return a.a},
dN:function(a){return a.c},
ce:function(a){var z,y,x,w,v
z=new H.cL("self","target","receiver","name")
y=J.bA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jB:{"^":"a4;a",
i:function(a){return this.a},
p:{
ax:function(a,b){return new H.jB("TypeError: "+H.l(P.cg(a))+": type '"+H.fK(a)+"' is not a subtype of type '"+b+"'")}}},
hl:{"^":"a4;a",
i:function(a){return this.a},
p:{
hm:function(a,b){return new H.hl("CastError: "+H.l(P.cg(a))+": type '"+H.fK(a)+"' is not a subtype of type '"+b+"'")}}},
j4:{"^":"a4;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j5:function(a){return new H.j4(a)}}},
aV:{"^":"ig;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gal:function(a){return new H.i4(this,[H.y(this,0)])},
bh:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cL(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cL(y,b)}else return this.hx(b)},
hx:function(a){var z=this.d
if(z==null)return!1
return this.ci(this.bK(z,this.cg(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ba(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ba(w,b)
x=y==null?null:y.b
return x}else return this.hy(b)},
hy:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bK(z,this.cg(a))
x=this.ci(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bM()
this.b=z}this.cD(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bM()
this.c=y}this.cD(y,b,c)}else this.hz(b,c)},
hz:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.bM()
this.d=z}y=this.cg(a)
x=this.bK(z,y)
if(x==null)this.bU(z,y,[this.bN(a,b)])
else{w=this.ci(x,a)
if(w>=0)x[w].b=b
else x.push(this.bN(a,b))}},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b2(this))
z=z.c}},
cD:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.ba(a,b)
if(z==null)this.bU(a,b,this.bN(b,c))
else z.b=c},
eR:function(){this.r=this.r+1&67108863},
bN:function(a,b){var z,y
z=new H.i3(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eR()
return z},
cg:function(a){return J.bU(a)&0x3ffffff},
ci:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.cZ(this)},
ba:function(a,b){return a[b]},
bK:function(a,b){return a[b]},
bU:function(a,b,c){a[b]=c},
eK:function(a,b){delete a[b]},
cL:function(a,b){return this.ba(a,b)!=null},
bM:function(){var z=Object.create(null)
this.bU(z,"<non-identifier-key>",z)
this.eK(z,"<non-identifier-key>")
return z},
$iseg:1},
i3:{"^":"b;a,b,0c,0d"},
i4:{"^":"hG;a,$ti",
gl:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.i5(z,z.r,this.$ti)
y.c=z.e
return y}},
i5:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mF:{"^":"n:21;a",
$1:function(a){return this.a(a)}},
mG:{"^":"n:41;a",
$2:function(a,b){return this.a(a,b)}},
mH:{"^":"n:50;a",
$1:function(a){return this.a(H.M(a))}},
hY:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ises:1,
$isiX:1,
p:{
hZ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mz:function(a){return J.ea(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bo:function(a){return a},
iy:function(a){return new Int8Array(a)},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aD(b,a))},
m6:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mx(a,b,c))
return b},
ep:{"^":"u;",$isep:1,"%":"ArrayBuffer"},
d2:{"^":"u;",$isd2:1,$isjC:1,"%":"DataView;ArrayBufferView;d1|fm|fn|iz|fo|fp|aX"},
d1:{"^":"d2;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dv},
iz:{"^":"fn;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.my(c)
H.aC(b,a,a.length)
a[b]=c},
$asch:function(){return[P.p]},
$asx:function(){return[P.p]},
$isj:1,
$asj:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
"%":"Float32Array|Float64Array"},
aX:{"^":"fp;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aC(b,a,a.length)
a[b]=c},
$asch:function(){return[P.m]},
$asx:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
nI:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nJ:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nK:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nL:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
nM:{"^":"aX;",
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nN:{"^":"aX;",
gl:function(a){return a.length},
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d3:{"^":"aX;",
gl:function(a){return a.length},
j:function(a,b){H.aC(b,a,a.length)
return a[b]},
bB:function(a,b,c){return new Uint8Array(a.subarray(b,H.m6(b,c,a.length)))},
$isd3:1,
$isO:1,
"%":";Uint8Array"},
fm:{"^":"d1+x;"},
fn:{"^":"fm+ch;"},
fo:{"^":"d1+x;"},
fp:{"^":"fo+ch;"}}],["","",,P,{"^":"",
km:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mj()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.br(new P.ko(z),1)).observe(y,{childList:true})
return new P.kn(z,y,x)}else if(self.setImmediate!=null)return P.mk()
return P.ml()},
oj:[function(a){self.scheduleImmediate(H.br(new P.kp(H.h(a,{func:1,ret:-1})),0))},"$1","mj",4,0,11],
ok:[function(a){self.setImmediate(H.br(new P.kq(H.h(a,{func:1,ret:-1})),0))},"$1","mk",4,0,11],
ol:[function(a){P.db(C.q,H.h(a,{func:1,ret:-1}))},"$1","ml",4,0,11],
db:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.e.a1(a.a,1000)
return P.lq(z<0?0:z,b)},
eK:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bi]})
z=C.e.a1(a.a,1000)
return P.lr(z<0?0:z,b)},
mf:function(a,b){if(H.c9(a,{func:1,args:[P.b,P.aw]}))return b.i_(a,null,P.b,P.aw)
if(H.c9(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
me:function(){var z,y
for(;z=$.bp,z!=null;){$.bQ=null
y=z.b
$.bp=y
if(y==null)$.bP=null
z.a.$0()}},
ot:[function(){$.dp=!0
try{P.me()}finally{$.bQ=null
$.dp=!1
if($.bp!=null)$.$get$di().$1(P.fO())}},"$0","fO",0,0,3],
fJ:function(a){var z=new P.fg(H.h(a,{func:1,ret:-1}))
if($.bp==null){$.bP=z
$.bp=z
if(!$.dp)$.$get$di().$1(P.fO())}else{$.bP.b=z
$.bP=z}},
mi:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bp
if(z==null){P.fJ(a)
$.bQ=$.bP
return}y=new P.fg(a)
x=$.bQ
if(x==null){y.b=z
$.bQ=y
$.bp=y}else{y.b=x.b
x.b=y
$.bQ=y
if(y.b==null)$.bP=y}},
mZ:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.T
if(C.j===y){P.cA(null,null,C.j,a)
return}y.toString
P.cA(null,null,y,H.h(y.bX(a),z))},
eJ:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.db(a,b)}return P.db(a,H.h(y.bX(b),z))},
jx:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bi]}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.eK(a,b)}x=y.da(b,P.bi)
$.T.toString
return P.eK(a,H.h(x,z))},
cz:function(a,b,c,d,e){var z={}
z.a=d
P.mi(new P.mg(z,e))},
fF:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fG:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mh:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cA:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bX(d):c.hd(d,-1)
P.fJ(d)},
ko:{"^":"n:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kn:{"^":"n:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kp:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kq:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fv:{"^":"b;a,0b,c",
ex:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.br(new P.lt(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
ey:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.br(new P.ls(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbi:1,
p:{
lq:function(a,b){var z=new P.fv(!0,0)
z.ex(a,b)
return z},
lr:function(a,b){var z=new P.fv(!1,0)
z.ey(a,b)
return z}}},
lt:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ls:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.el(w,x)}z.c=y
this.d.$1(z)}},
bn:{"^":"b;0a,b,c,d,e,$ti",
hH:function(a){if(this.c!==6)return!0
return this.b.b.cs(H.h(this.d,{func:1,ret:P.ag,args:[P.b]}),a.a,P.ag,P.b)},
hw:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.c9(z,{func:1,args:[P.b,P.aw]}))return H.dw(w.i7(z,a.a,a.b,null,y,P.aw),x)
else return H.dw(w.cs(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;cZ:a<,b,0fu:c<,$ti",
e3:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mf(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.T,[c])
w=b==null?1:3
this.cE(new P.bn(x,w,a,b,[z,c]))
return x},
ic:function(a,b){return this.e3(a,null,b)},
cE:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbn")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaS")
z=y.a
if(z<4){y.cE(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cA(null,null,z,H.h(new P.kF(this,a),{func:1,ret:-1}))}},
cU:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbn")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaS")
y=u.a
if(y<4){u.cU(a)
return}this.a=y
this.c=u.c}z.a=this.bd(a)
y=this.b
y.toString
P.cA(null,null,y,H.h(new P.kK(z,this),{func:1,ret:-1}))}},
bQ:function(){var z=H.f(this.c,"$isbn")
this.c=null
return this.bd(z)},
bd:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cI:function(a){var z,y,x,w
z=H.y(this,0)
H.dw(a,{futureOr:1,type:z})
y=this.$ti
x=H.bS(a,"$isbz",y,"$asbz")
if(x){z=H.bS(a,"$isaS",y,null)
if(z)P.fj(a,this)
else P.kG(a,this)}else{w=this.bQ()
H.z(a,z)
this.a=4
this.c=a
P.bL(this,w)}},
bG:[function(a,b){var z
H.f(b,"$isaw")
z=this.bQ()
this.a=8
this.c=new P.ak(a,b)
P.bL(this,z)},function(a){return this.bG(a,null)},"iq","$2","$1","geG",4,2,48],
$isbz:1,
p:{
kG:function(a,b){var z,y,x
b.a=1
try{a.e3(new P.kH(b),new P.kI(b),null)}catch(x){z=H.ar(x)
y=H.bt(x)
P.mZ(new P.kJ(b,z,y))}},
fj:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaS")
if(z>=4){y=b.bQ()
b.a=a.a
b.c=a.c
P.bL(b,y)}else{y=H.f(b.c,"$isbn")
b.a=2
b.c=a
a.cU(y)}},
bL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isak")
y=y.b
u=v.a
t=v.b
y.toString
P.cz(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bL(z.a,b)}y=z.a
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
if(p){H.f(r,"$isak")
y=y.b
u=r.a
t=r.b
y.toString
P.cz(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kM(x,b,r).$0()}else if((y&2)!==0)new P.kL(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.I(y).$isbz){if(y.a>=4){n=H.f(t.c,"$isbn")
t.c=null
b=t.bd(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fj(y,t)
return}}m=b.b
n=H.f(m.c,"$isbn")
m.c=null
b=m.bd(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
kF:{"^":"n:0;a,b",
$0:function(){P.bL(this.a,this.b)}},
kK:{"^":"n:0;a,b",
$0:function(){P.bL(this.b,this.a.a)}},
kH:{"^":"n:15;a",
$1:function(a){var z=this.a
z.a=0
z.cI(a)}},
kI:{"^":"n:51;a",
$2:function(a,b){this.a.bG(a,H.f(b,"$isaw"))},
$1:function(a){return this.$2(a,null)}},
kJ:{"^":"n:0;a,b,c",
$0:function(){this.a.bG(this.b,this.c)}},
kN:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e1(H.h(w.d,{func:1}),null)}catch(v){y=H.ar(v)
x=H.bt(v)
if(this.d){w=H.f(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.I(z).$isbz){if(z instanceof P.aS&&z.gcZ()>=4){if(z.gcZ()===8){w=this.b
w.b=H.f(z.gfu(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ic(new P.kO(t),null)
w.a=!1}}},
kO:{"^":"n:47;a",
$1:function(a){return this.a}},
kM:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cs(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ar(t)
y=H.bt(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
kL:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isak")
w=this.c
if(w.hH(z)&&w.e!=null){v=this.b
v.b=w.hw(z)
v.a=!1}}catch(u){y=H.ar(u)
x=H.bt(u)
w=H.f(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
fg:{"^":"b;a,0b"},
d8:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aS(0,$.T,[P.m])
z.a=0
this.hE(new P.jm(z,this),!0,new P.jn(z,y),y.geG())
return y}},
jm:{"^":"n;a,b",
$1:function(a){H.z(a,H.ay(this.b,"d8",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ay(this.b,"d8",0)]}}},
jn:{"^":"n:0;a,b",
$0:function(){this.b.cI(this.a.a)}},
eC:{"^":"b;$ti"},
jl:{"^":"b;"},
bi:{"^":"b;"},
ak:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa4:1},
lV:{"^":"b;",$isoi:1},
mg:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.er()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l8:{"^":"lV;",
i8:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fF(null,null,this,a,-1)}catch(x){z=H.ar(x)
y=H.bt(x)
P.cz(null,null,this,z,H.f(y,"$isaw"))}},
i9:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fG(null,null,this,a,b,-1,c)}catch(x){z=H.ar(x)
y=H.bt(x)
P.cz(null,null,this,z,H.f(y,"$isaw"))}},
hd:function(a,b){return new P.la(this,H.h(a,{func:1,ret:b}),b)},
bX:function(a){return new P.l9(this,H.h(a,{func:1,ret:-1}))},
da:function(a,b){return new P.lb(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e1:function(a,b){H.h(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fF(null,null,this,a,b)},
cs:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fG(null,null,this,a,b,c,d)},
i7:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mh(null,null,this,a,b,c,d,e,f)},
i_:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
la:{"^":"n;a,b,c",
$0:function(){return this.a.e1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l9:{"^":"n:3;a,b",
$0:function(){return this.a.i8(this.b)}},
lb:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.i9(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i6:function(a,b,c,d,e){return new H.aV(0,0,[d,e])},
i7:function(a,b,c){H.bT(a)
return H.w(H.mA(a,new H.aV(0,0,[b,c])),"$iseg",[b,c],"$aseg")},
eh:function(a,b){return new H.aV(0,0,[a,b])},
ia:function(a,b,c,d){return new P.kV(0,0,[d])},
hU:function(a,b,c){var z,y
if(P.dq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bR()
C.a.h(y,a)
try{P.md(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eD(b,H.fY(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cT:function(a,b,c){var z,y,x
if(P.dq(a))return b+"..."+c
z=new P.am(b)
y=$.$get$bR()
C.a.h(y,a)
try{x=z
x.a=P.eD(x.gaC(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaC()+c
y=z.gaC()
return y.charCodeAt(0)==0?y:y},
dq:function(a){var z,y
for(z=0;y=$.$get$bR(),z<y.length;++z)if(a===y[z])return!0
return!1},
md:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.E();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
i8:function(a,b,c){var z=P.i6(null,null,null,b,c)
a.I(0,new P.i9(z,b,c))
return z},
cZ:function(a){var z,y,x
z={}
if(P.dq(a))return"{...}"
y=new P.am("")
try{C.a.h($.$get$bR(),a)
x=y
x.a=x.gaC()+"{"
z.a=!0
J.dG(a,new P.ih(z,y))
z=y
z.a=z.gaC()+"}"}finally{z=$.$get$bR()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaC()
return z.charCodeAt(0)==0?z:z},
kV:{"^":"kP;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.fl(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dk()
this.b=z}return this.cG(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dk()
this.c=y}return this.cG(y,b)}else return this.ez(0,b)},
ez:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dk()
this.d=z}y=this.cJ(b)
x=z[y]
if(x==null)z[y]=[this.bF(b)]
else{if(this.cP(x,b)>=0)return!1
x.push(this.bF(b))}return!0},
K:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cV(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cV(this.c,b)
else return this.fl(0,b)},
fl:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eO(z,b)
x=this.cP(y,b)
if(x<0)return!1
this.d0(y.splice(x,1)[0])
return!0},
cG:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdj")!=null)return!1
a[b]=this.bF(b)
return!0},
cV:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdj")
if(z==null)return!1
this.d0(z)
delete a[b]
return!0},
cH:function(){this.r=this.r+1&67108863},
bF:function(a){var z,y
z=new P.dj(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cH()
return z},
d0:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cH()},
cJ:function(a){return J.bU(a)&0x3ffffff},
eO:function(a,b){return a[this.cJ(b)]},
cP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
p:{
dk:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dj:{"^":"b;a,0b,0c"},
kW:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fl:function(a,b,c){var z=new P.kW(a,b,[c])
z.c=a.e
return z}}},
kP:{"^":"j6;"},
i9:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cl:{"^":"kX;",$isj:1,$isc:1},
x:{"^":"b;$ti",
gY:function(a){return new H.ei(a,this.gl(a),0,[H.aZ(this,a,"x",0)])},
H:function(a,b){return this.j(a,b)},
ih:function(a,b){var z,y,x
z=H.d([],[H.aZ(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.q(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
ig:function(a){return this.ih(a,!0)},
aw:function(a,b,c,d){var z
H.z(d,H.aZ(this,a,"x",0))
P.aK(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cT(a,"[","]")}},
ig:{"^":"ah;"},
ih:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ah:{"^":"b;$ti",
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aZ(this,a,"ah",0),H.aZ(this,a,"ah",1)]})
for(z=J.bv(this.gal(a));z.E();){y=z.gP(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.as(this.gal(a))},
i:function(a){return P.cZ(a)},
$isH:1},
ly:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
ii:{"^":"b;$ti",
j:function(a,b){return J.dF(this.a,b)},
m:function(a,b,c){J.cG(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
I:function(a,b){J.dG(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.as(this.a)},
i:function(a){return J.a9(this.a)},
$isH:1},
f5:{"^":"lz;a,$ti"},
j8:{"^":"b;$ti",
i:function(a){return P.cT(this,"{","}")},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dI("index"))
if(b<0)H.r(P.Y(b,0,null,"index",null))
for(z=P.fl(this,this.r,H.y(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isj:1},
j6:{"^":"j8;"},
kX:{"^":"b+x;"},
lz:{"^":"ii+ly;$ti"}}],["","",,P,{"^":"",hi:{"^":"bW;a",
hK:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aK(c,d,b.length,null,null,null)
z=$.$get$fh()
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
if(q<=d){p=H.cD(C.b.F(b,s))
o=H.cD(C.b.F(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.am("")
w.a+=C.b.q(b,x,y)
w.a+=H.cn(r)
x=s
continue}}throw H.a(P.V("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.q(b,x,d)
k=l.length
if(v>=0)P.dL(b,u,d,v,t,k)
else{j=C.e.b7(k-1,4)+1
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aM(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dL(b,u,d,v,t,i)
else{j=C.e.b7(i,4)
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aM(b,d,d,j===2?"==":"=")}return b},
$asbW:function(){return[[P.c,P.m],P.i]},
p:{
dL:function(a,b,c,d,e,f){if(C.e.b7(f,4)!==0)throw H.a(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hj:{"^":"bx;a",
$asbx:function(){return[[P.c,P.m],P.i]}},bW:{"^":"b;$ti"},bx:{"^":"jl;$ti"},hI:{"^":"bW;",
$asbW:function(){return[P.i,[P.c,P.m]]}},k_:{"^":"hI;a",
ghq:function(){return C.F}},k6:{"^":"bx;",
aU:function(a,b,c){var z,y,x,w
z=a.length
P.aK(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lU(0,0,x)
if(w.eM(a,b,z)!==z)w.d2(J.ha(a,z-1),0)
return C.V.bB(x,0,w.b)},
c2:function(a){return this.aU(a,0,null)},
$asbx:function(){return[P.i,[P.c,P.m]]}},lU:{"^":"b;a,b,c",
d2:function(a,b){var z,y,x,w,v
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
eM:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.T(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d2(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},k0:{"^":"bx;a",
aU:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.k1(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.aK(b,c,y,null,null,null)
x=new P.am("")
w=new P.lR(!1,x,!0,0,0,0)
w.aU(a,b,y)
w.hs(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
c2:function(a){return this.aU(a,0,null)},
$asbx:function(){return[[P.c,P.m],P.i]},
p:{
k1:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.k2(!1,b,c,d)
return},
k2:function(a,b,c,d){var z,y,x
z=$.$get$fb()
if(z==null)return
y=0===c
if(y&&!0)return P.dg(z,b)
x=b.length
d=P.aK(c,d,x,null,null,null)
if(y&&d===x)return P.dg(z,b)
return P.dg(z,b.subarray(c,d))},
dg:function(a,b){if(P.k4(b))return
return P.k5(a,b)},
k5:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ar(y)}return},
k4:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k3:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ar(y)}return}}},lR:{"^":"b;a,b,c,d,e,f",
hs:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.V("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lT(c)
v=new P.lS(this,b,c,a)
$label0$0:for(u=J.aE(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.by()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.e.b2(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.w,q)
if(z<=C.w[q]){q=P.V("Overlong encoding of 0x"+C.e.b2(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.e.b2(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cn(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cv()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.e.b2(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.e.b2(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lT:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.aE(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.by()
if((w&127)!==w)return x-b}return z-b}},lS:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c5(this.d,a,b)}}}],["","",,P,{"^":"",
cb:function(a,b,c){var z
H.h(b,{func:1,ret:P.m,args:[P.i]})
z=H.iP(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.V(a,null,null))},
hK:function(a){var z=J.I(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bb(a)+"'"},
ib:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hW(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
ic:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.gY(a);x.E();)C.a.h(y,H.z(x.gP(x),c))
if(b)return y
return H.w(J.bA(y),"$isc",z,"$asc")},
c5:function(a,b,c){var z,y
z=P.m
H.w(a,"$isj",[z],"$asj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb7",[z],"$asb7")
y=a.length
c=P.aK(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.M()
z=c<y}else z=!0
return H.ev(z?C.a.bB(a,b,c):a)}if(!!J.I(a).$isd3)return H.iR(a,b,P.aK(b,c,a.length,null,null,null))
return P.jo(a,b,c)},
jo:function(a,b,c){var z,y,x,w
H.w(a,"$isj",[P.m],"$asj")
if(b<0)throw H.a(P.Y(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.Y(c,b,J.as(a),null,null))
y=J.bv(a)
for(x=0;x<b;++x)if(!y.E())throw H.a(P.Y(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.E())throw H.a(P.Y(c,b,x,null,null))
w.push(y.gP(y))}return H.ev(w)},
iY:function(a,b,c){return new H.hY(a,H.hZ(a,!1,!0,!1))},
f7:function(){var z=H.iH()
if(z!=null)return P.jU(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hK(a)},
v:function(a){return new P.fi(a)},
id:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.m]})
z=H.d([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dC:function(a){H.mX(a)},
jU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.f6(b>0||c<c?C.b.q(a,b,c):a,5,null).ge5()
else if(y===32)return P.f6(C.b.q(a,z,c),0,null).ge5()}x=new Array(8)
x.fixed$length=Array
w=H.d(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fH(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ik()
if(v>=b)if(P.fH(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.q(r)
if(q<r)r=q
if(typeof s!=="number")return s.M()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.M()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.M()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a6(a,"..",s)))n=r>s+2&&C.b.a6(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a6(a,"file",b)){if(u<=b){if(!C.b.a6(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.q(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aM(a,s,r,"/");++r;++q;++c}else{a=C.b.q(a,b,s)+"/"+C.b.q(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a6(a,"http",b)){if(x&&t+3===s&&C.b.a6(a,"80",t+1))if(b===0&&!0){a=C.b.aM(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a6(a,"https",b)){if(x&&t+4===s&&C.b.a6(a,"443",t+1))if(b===0&&!0){a=C.b.aM(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.q(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.ld(a,v,u,t,s,r,q,o)}return P.lA(a,b,c,v,u,t,s,r,q,o)},
f9:function(a,b){var z=P.i
return C.a.ht(H.d(a.split("&"),[z]),P.eh(z,z),new P.jX(b),[P.H,P.i,P.i])},
jS:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jT(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.T(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cb(C.b.q(a,v,w),null,null)
if(typeof s!=="number")return s.cv()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cb(C.b.q(a,v,c),null,null)
if(typeof s!=="number")return s.cv()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
f8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jV(a)
y=new P.jW(z,a)
if(a.length<2)z.$1("address is too short")
x=H.d([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.T(a,w)
if(s===58){if(w===b){++w
if(C.b.T(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gax(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jS(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.e.aF(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
m7:function(){var z,y,x,w,v
z=P.id(22,new P.m9(),!0,P.O)
y=new P.m8(z)
x=new P.ma()
w=new P.mb()
v=H.f(y.$2(0,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isO")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isO")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isO"),"]",5)
v=H.f(y.$2(9,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isO"),"az",21)
v=H.f(y.$2(21,245),"$isO")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fH:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fI()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ag:{"^":"b;"},
"+bool":0,
aA:{"^":"b;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a&&this.b===b.b},
gR:function(a){var z=this.a
return(z^C.e.aF(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hz(H.iO(this))
y=P.bY(H.iM(this))
x=P.bY(H.iI(this))
w=P.bY(H.iJ(this))
v=P.bY(H.iL(this))
u=P.bY(H.iN(this))
t=P.hA(H.iK(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hz:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a}}},
p:{"^":"a_;"},
"+double":0,
b4:{"^":"b;a",
k:function(a,b){return new P.b4(C.e.aa(this.a*b))},
M:function(a,b){return C.e.M(this.a,H.f(b,"$isb4").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.b4))return!1
return this.a===b.a},
gR:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hF()
y=this.a
if(y<0)return"-"+new P.b4(0-y).i(0)
x=z.$1(C.e.a1(y,6e7)%60)
w=z.$1(C.e.a1(y,1e6)%60)
v=new P.hE().$1(y%1e6)
return""+C.e.a1(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e4:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hE:{"^":"n:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hF:{"^":"n:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a4:{"^":"b;"},
er:{"^":"a4;",
i:function(a){return"Throw of null."}},
aF:{"^":"a4;a,b,c,d",
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbI()+y+x
if(!this.a)return w
v=this.gbH()
u=P.cg(this.b)
return w+v+": "+H.l(u)},
p:{
bV:function(a){return new P.aF(!1,null,null,a)},
cd:function(a,b,c){return new P.aF(!0,a,b,c)},
dI:function(a){return new P.aF(!1,null,a,"Must not be null")}}},
co:{"^":"aF;e,f,a,b,c,d",
gbI:function(){return"RangeError"},
gbH:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cp:function(a,b,c){return new P.co(null,null,!0,a,b,"Value not in range")},
Y:function(a,b,c,d,e){return new P.co(b,c,!0,a,d,"Invalid value")},
aK:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.q(a)
if(0<=a){if(typeof c!=="number")return H.q(c)
z=a>c}else z=!0
if(z)throw H.a(P.Y(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
z=b>c}else z=!0
if(z)throw H.a(P.Y(b,a,c,"end",f))
return b}return c}}},
hS:{"^":"aF;e,l:f>,a,b,c,d",
gbI:function(){return"RangeError"},
gbH:function(){if(J.h6(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.D(e!=null?e:J.as(b))
return new P.hS(b,z,!0,a,c,"Index out of range")}}},
jQ:{"^":"a4;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jQ(a)}}},
jN:{"^":"a4;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c6:function(a){return new P.jN(a)}}},
ji:{"^":"a4;a",
i:function(a){return"Bad state: "+this.a}},
hs:{"^":"a4;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.cg(z))+"."},
p:{
b2:function(a){return new P.hs(a)}}},
iD:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa4:1},
eA:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa4:1},
hy:{"^":"a4;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fi:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hQ:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.q(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.F(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.T(w,s)
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
m=""}l=C.b.q(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
V:function(a,b,c){return new P.hQ(a,b,c)}}},
m:{"^":"a_;"},
"+int":0,
j:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gY(this)
for(y=0;z.E();)++y
return y},
H:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dI("index"))
if(b<0)H.r(P.Y(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.E();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hU(this,"(",")")}},
cU:{"^":"b;$ti"},
c:{"^":"b;$ti",$isj:1},
"+List":0,
H:{"^":"b;$ti"},
G:{"^":"b;",
gR:function(a){return P.b.prototype.gR.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a_:{"^":"b;"},
"+num":0,
b:{"^":";",
t:function(a,b){return this===b},
gR:function(a){return H.bG(this)},
i:function(a){return"Instance of '"+H.bb(this)+"'"},
toString:function(){return this.i(this)}},
aw:{"^":"b;"},
i:{"^":"b;",$ises:1},
"+String":0,
am:{"^":"b;aC:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$iso6:1,
p:{
eD:function(a,b,c){var z=J.bv(b)
if(!z.E())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.E())}else{a+=H.l(z.gP(z))
for(;z.E();)a=a+c+H.l(z.gP(z))}return a}}},
jX:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isH",[z,z],"$asH")
H.M(b)
y=J.aE(b).dK(b,"=")
if(y===-1){if(b!=="")J.cG(a,P.dm(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.q(b,0,y)
w=C.b.ay(b,y+1)
z=this.a
J.cG(a,P.dm(x,0,x.length,z,!0),P.dm(w,0,w.length,z,!0))}return a}},
jT:{"^":"n:42;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv4 address, "+a,this.a,b))}},
jV:{"^":"n:40;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jW:{"^":"n:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cb(C.b.q(this.b,a,b),null,16)
if(typeof z!=="number")return z.M()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cw:{"^":"b;bA:a<,b,c,d,dX:e>,f,r,0x,0y,0z,0Q,0ch",
ge6:function(){return this.b},
gcf:function(a){var z=this.c
if(z==null)return""
if(C.b.a5(z,"["))return C.b.q(z,1,z.length-1)
return z},
gbv:function(a){var z=this.d
if(z==null)return P.fx(this.a)
return z},
gcn:function(a){var z=this.f
return z==null?"":z},
gdF:function(){var z=this.r
return z==null?"":z},
cr:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
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
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
return new P.cw(i,j,c,f,d,g,this.r)},
e0:function(a,b){return this.cr(a,null,null,null,null,null,null,b,null,null)},
gco:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f5(P.f9(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdG:function(){return this.c!=null},
gdJ:function(){return this.f!=null},
gdH:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.l(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.l(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.l(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
t:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdf){y=this.a
x=b.gbA()
if(y==null?x==null:y===x)if(this.c!=null===b.gdG()){y=this.b
x=b.ge6()
if(y==null?x==null:y===x){y=this.gcf(this)
x=z.gcf(b)
if(y==null?x==null:y===x){y=this.gbv(this)
x=z.gbv(b)
if(y==null?x==null:y===x)if(this.e===z.gdX(b)){y=this.f
x=y==null
if(!x===b.gdJ()){if(x)y=""
if(y===z.gcn(b)){z=this.r
y=z==null
if(!y===b.gdH()){if(y)z=""
z=z===b.gdF()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gR:function(a){var z=this.z
if(z==null){z=C.b.gR(this.i(0))
this.z=z}return z},
$isdf:1,
p:{
cx:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.k){z=$.$get$fC().b
if(typeof b!=="string")H.r(H.ad(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.ay(c,"bW",0))
y=c.ghq().c2(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cn(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lA:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lL(a,b,d)
else{if(d===b)P.bM(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lM(a,z,e-1):""
x=P.lF(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.q(g)
v=w<g?P.lI(P.cb(C.b.q(a,w,g),new P.lB(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lG(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.M()
t=h<i?P.dl(a,h+1,i,null):null
return new P.cw(j,y,x,v,u,t,i<c?P.lE(a,i+1,c):null)},
fx:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bM:function(a,b,c){throw H.a(P.V(c,a,b))},
lI:function(a,b){if(a!=null&&a===P.fx(b))return
return a},
lF:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.T(a,b)===91){if(typeof c!=="number")return c.O()
z=c-1
if(C.b.T(a,z)!==93)P.bM(a,b,"Missing end `]` to match `[` in host")
P.f8(a,b+1,z)
return C.b.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
y=b
for(;y<c;++y)if(C.b.T(a,y)===58){P.f8(a,b,c)
return"["+a+"]"}return P.lO(a,b,c)},
lO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.q(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.T(a,z)
if(v===37){u=P.fE(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.am("")
s=C.b.q(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.q(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.am("")
if(y<z){x.a+=C.b.q(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bM(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.T(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.am("")
s=C.b.q(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fy(v)
z+=q
y=z}}}}if(x==null)return C.b.q(a,b,c)
if(y<c){s=C.b.q(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lL:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fA(C.b.F(a,b)))P.bM(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bM(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.q(a,b,c)
return P.lC(y?a.toLowerCase():a)},
lC:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lM:function(a,b,c){return P.bN(a,b,c,C.R)},
lG:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bN(a,b,c,C.y):C.t.j2(d,new P.lH(),P.i).C(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a5(w,"/"))w="/"+w
return P.lN(w,e,f)},
lN:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a5(a,"/"))return P.lP(a,!z||c)
return P.lQ(a)},
dl:function(a,b,c,d){var z,y
z={}
H.w(d,"$isH",[P.i,null],"$asH")
if(a!=null){if(d!=null)throw H.a(P.bV("Both query and queryParameters specified"))
return P.bN(a,b,c,C.n)}if(d==null)return
y=new P.am("")
z.a=""
d.I(0,new P.lJ(new P.lK(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lE:function(a,b,c){return P.bN(a,b,c,C.n)},
fE:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.T(a,b+1)
x=C.b.T(a,z)
w=H.cD(y)
v=H.cD(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aF(u,4)
if(z>=8)return H.e(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cn(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
fy:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.d(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.F("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.d(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.e.fE(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.c5(y,0,null)},
bN:function(a,b,c,d){var z=P.fD(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.q(a,b,c):z},
fD:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.M()
if(typeof c!=="number")return H.q(c)
if(!(y<c))break
c$0:{v=C.b.T(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fE(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bM(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.T(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fy(v)}}if(w==null)w=new P.am("")
w.a+=C.b.q(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.q(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.M()
if(x<c)w.a+=C.b.q(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fB:function(a){if(C.b.a5(a,"."))return!0
return C.b.dK(a,"/.")!==-1},
lQ:function(a){var z,y,x,w,v,u,t
if(!P.fB(a))return a
z=H.d([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.P(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.C(z,"/")},
lP:function(a,b){var z,y,x,w,v,u
if(!P.fB(a))return!b?P.fz(a):a
z=H.d([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gax(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gax(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.m(z,0,P.fz(z[0]))}return C.a.C(z,"/")},
fz:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fA(J.h7(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.q(a,0,y)+"%3A"+C.b.ay(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lD:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bV("Invalid URL encoding"))}}return z},
dm:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dx(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.F(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.q(a,b,c)
else u=new H.a3(y.q(a,b,c))}else{u=H.d([],[P.m])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.bV("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bV("Truncated URI"))
C.a.h(u,P.lD(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.k0(!1).c2(u)},
fA:function(a){var z=a|32
return 97<=z&&z<=122}}},
lB:{"^":"n:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.V("Invalid port",this.a,z+1))}},
lH:{"^":"n:38;",
$1:function(a){return P.cx(C.T,a,C.k,!1)}},
lK:{"^":"n:24;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cx(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cx(C.p,b,C.k,!0))}}},
lJ:{"^":"n:36;a",
$2:function(a,b){var z,y
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(z=J.bv(H.fY(b,"$isj")),y=this.a;z.E();)y.$2(a,H.M(z.gP(z)))}},
jR:{"^":"b;a,b,c",
ge5:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.dL(y,"?",z)
w=y.length
if(x>=0){v=P.bN(y,x+1,w,C.n)
w=x}else v=null
z=new P.kv(this,"data",null,null,null,P.bN(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f6:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.d([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gax(z)
if(v!==44||x!==t+7||!C.b.a6(a,"base64",t+1))throw H.a(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hK(0,a,s,y)
else{r=P.fD(a,s,y,C.n,!0)
if(r!=null)a=C.b.aM(a,s,y,r)}return new P.jR(a,z,c)}}},
m9:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
m8:{"^":"n:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.hb(z,0,96,b)
return z}},
ma:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
mb:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
ld:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdG:function(){return this.c>0},
gdI:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.q(y)
y=z+1<y
z=y}else z=!1
return z},
gdJ:function(){var z=this.f
if(typeof z!=="number")return z.M()
return z<this.r},
gdH:function(){return this.r<this.a.length},
gcR:function(){return this.b===4&&C.b.a5(this.a,"http")},
gcS:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbA:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcR()){this.x="http"
z="http"}else if(this.gcS()){this.x="https"
z="https"}else if(z===4&&C.b.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.b.q(this.a,0,z)
this.x=z}return z},
ge6:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.q(this.a,y,z-1):""},
gcf:function(a){var z=this.c
return z>0?C.b.q(this.a,z,this.d):""},
gbv:function(a){var z
if(this.gdI()){z=this.d
if(typeof z!=="number")return z.B()
return P.cb(C.b.q(this.a,z+1,this.e),null,null)}if(this.gcR())return 80
if(this.gcS())return 443
return 0},
gdX:function(a){return C.b.q(this.a,this.e,this.f)},
gcn:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.M()
return z<y?C.b.q(this.a,z+1,y):""},
gdF:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ay(y,z+1):""},
gco:function(){var z=this.f
if(typeof z!=="number")return z.M()
if(z>=this.r)return C.U
z=P.i
return new P.f5(P.f9(this.gcn(this),C.k),[z,z])},
cr:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isH",[P.i,null],"$asH")
i=this.gbA()
z=i==="file"
y=this.c
j=y>0?C.b.q(this.a,this.b+3,y):""
f=this.gdI()?this.gbv(this):null
y=this.c
if(y>0)c=C.b.q(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.q(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dl(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ay(y,x+1)
return new P.cw(i,j,c,f,d,g,b)},
e0:function(a,b){return this.cr(a,null,null,null,null,null,null,b,null,null)},
gR:function(a){var z=this.y
if(z==null){z=C.b.gR(this.a)
this.y=z}return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.I(b)
if(!!z.$isdf)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdf:1},
kv:{"^":"cw;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cO:function(a,b){var z=document.createElement("canvas")
return z},
hH:function(a){H.f(a,"$isab")
return"wheel"},
hT:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ise9")
try{J.hd(z,a)}catch(x){H.ar(x)}return z},
cu:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fk:function(a,b,c,d){var z,y
z=W.cu(W.cu(W.cu(W.cu(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fL:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.da(a,b)},
a6:{"^":"a1;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
n8:{"^":"u;0l:length=","%":"AccessibleNodeList"},
n9:{"^":"a6;0Z:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
na:{"^":"a6;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cK:{"^":"u;",$iscK:1,"%":";Blob"},
ng:{"^":"a6;0Z:type}","%":"HTMLButtonElement"},
cN:{"^":"a6;",
bz:function(a,b,c){if(c!=null)return a.getContext(b,P.mn(c,null))
return a.getContext(b)},
ec:function(a,b){return this.bz(a,b,null)},
$iscN:1,
"%":"HTMLCanvasElement"},
dS:{"^":"u;",$isdS:1,"%":"CanvasRenderingContext2D"},
ni:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nk:{"^":"hx;0l:length=","%":"CSSPerspective"},
b3:{"^":"u;",$isb3:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nl:{"^":"ku;0l:length=",
ed:function(a,b){var z=a.getPropertyValue(this.eD(a,b))
return z==null?"":z},
eD:function(a,b){var z,y
z=$.$get$dX()
y=z[b]
if(typeof y==="string")return y
y=this.fF(a,b)
z[b]=y
return y},
fF:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hB()+b
if(z in a)return z
return b},
gbY:function(a){return a.bottom},
gak:function(a){return a.height},
gaJ:function(a){return a.left},
gbx:function(a){return a.right},
gb4:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hw:{"^":"b;",
gaJ:function(a){return this.ed(a,"left")}},
dY:{"^":"u;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hx:{"^":"u;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nm:{"^":"dY;0l:length=","%":"CSSTransformValue"},
nn:{"^":"dY;0l:length=","%":"CSSUnparsedValue"},
no:{"^":"u;0l:length=","%":"DataTransferItemList"},
np:{"^":"u;",
i:function(a){return String(a)},
"%":"DOMException"},
nq:{"^":"kx;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isa7",[P.a_],"$asa7")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.a_]]},
$asx:function(){return[[P.a7,P.a_]]},
$isj:1,
$asj:function(){return[[P.a7,P.a_]]},
$isc:1,
$asc:function(){return[[P.a7,P.a_]]},
$asC:function(){return[[P.a7,P.a_]]},
"%":"ClientRectList|DOMRectList"},
hD:{"^":"u;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gao(a))+" x "+H.l(this.gak(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bS(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaJ(b)&&a.top===z.gb4(b)&&this.gao(a)===z.gao(b)&&this.gak(a)===z.gak(b)},
gR:function(a){return W.fk(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gbY:function(a){return a.bottom},
gak:function(a){return a.height},
gaJ:function(a){return a.left},
gbx:function(a){return a.right},
gb4:function(a){return a.top},
gao:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
nr:{"^":"kz;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.M(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"DOMStringList"},
ns:{"^":"u;0l:length=","%":"DOMTokenList"},
kt:{"^":"cl;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.f(z[b],"$isa1")},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa1")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var z=this.ig(this)
return new J.at(z,z.length,0,[H.y(z,0)])},
aw:function(a,b,c,d){throw H.a(P.c6(null))},
$asx:function(){return[W.a1]},
$asj:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
a1:{"^":"J;",
gc1:function(a){return new W.kt(a,a.children)},
gdc:function(a){return P.iU(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
i:function(a){return a.localName},
$isa1:1,
"%":";Element"},
nt:{"^":"a6;0Z:type}","%":"HTMLEmbedElement"},
aa:{"^":"u;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ab:{"^":"u;",
d4:["eg",function(a,b,c,d){H.h(c,{func:1,args:[W.aa]})
if(c!=null)this.eA(a,b,c,!1)}],
eA:function(a,b,c,d){return a.addEventListener(b,H.br(H.h(c,{func:1,args:[W.aa]}),1),!1)},
$isab:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fq|fr|ft|fu"},
aU:{"^":"cK;",$isaU:1,"%":"File"},
e5:{"^":"kE;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isaU")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aU]},
$asx:function(){return[W.aU]},
$isj:1,
$asj:function(){return[W.aU]},
$isc:1,
$asc:function(){return[W.aU]},
$ise5:1,
$asC:function(){return[W.aU]},
"%":"FileList"},
nu:{"^":"ab;0l:length=","%":"FileWriter"},
nv:{"^":"a6;0l:length=","%":"HTMLFormElement"},
b6:{"^":"u;",$isb6:1,"%":"Gamepad"},
nw:{"^":"u;0l:length=","%":"History"},
nx:{"^":"kR;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isj:1,
$asj:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bZ:{"^":"u;0de:data=",$isbZ:1,"%":"ImageData"},
e8:{"^":"a6;",$ise8:1,"%":"HTMLImageElement"},
e9:{"^":"a6;0Z:type}",$ise9:1,"%":"HTMLInputElement"},
bB:{"^":"dc;",$isbB:1,"%":"KeyboardEvent"},
nB:{"^":"a6;0Z:type}","%":"HTMLLinkElement"},
nC:{"^":"u;",
i:function(a){return String(a)},
"%":"Location"},
nD:{"^":"u;0l:length=","%":"MediaList"},
nE:{"^":"ab;",
d4:function(a,b,c,d){H.h(c,{func:1,args:[W.aa]})
if(b==="message")a.start()
this.eg(a,b,c,!1)},
"%":"MessagePort"},
nF:{"^":"kY;",
j:function(a,b){return P.aT(a.get(H.M(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.d([],[P.i])
this.I(a,new W.iv(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iv:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nG:{"^":"kZ;",
j:function(a,b){return P.aT(a.get(H.M(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.d([],[P.i])
this.I(a,new W.iw(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iw:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"u;",$isb9:1,"%":"MimeType"},
nH:{"^":"l0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb9")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$asx:function(){return[W.b9]},
$isj:1,
$asj:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asC:function(){return[W.b9]},
"%":"MimeTypeArray"},
av:{"^":"dc;",$isav:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ks:{"^":"cl;a",
m:function(a,b,c){var z,y
H.D(b)
H.f(c,"$isJ")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
gY:function(a){var z=this.a.childNodes
return new W.e6(z,z.length,-1,[H.aZ(C.W,z,"C",0)])},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asx:function(){return[W.J]},
$asj:function(){return[W.J]},
$asc:function(){return[W.J]}},
J:{"^":"ab;",
i3:function(a,b){var z,y
try{z=a.parentNode
J.h8(z,b,a)}catch(y){H.ar(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.eh(a):z},
fo:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iA:{"^":"l2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isj:1,
$asj:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
nP:{"^":"a6;0Z:type}","%":"HTMLOListElement"},
nQ:{"^":"a6;0Z:type}","%":"HTMLObjectElement"},
ba:{"^":"u;0l:length=",$isba:1,"%":"Plugin"},
nT:{"^":"l6;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isba")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asx:function(){return[W.ba]},
$isj:1,
$asj:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asC:function(){return[W.ba]},
"%":"PluginArray"},
nV:{"^":"u;0Z:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
nW:{"^":"lc;",
j:function(a,b){return P.aT(a.get(H.M(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.d([],[P.i])
this.I(a,new W.j3(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j3:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nY:{"^":"a6;0Z:type}","%":"HTMLScriptElement"},
o_:{"^":"a6;0l:length=","%":"HTMLSelectElement"},
bc:{"^":"ab;",$isbc:1,"%":"SourceBuffer"},
o0:{"^":"fr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$isj:1,
$asj:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asC:function(){return[W.bc]},
"%":"SourceBufferList"},
o1:{"^":"a6;0Z:type}","%":"HTMLSourceElement"},
bd:{"^":"u;",$isbd:1,"%":"SpeechGrammar"},
o2:{"^":"lf;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbd")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isj:1,
$asj:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asC:function(){return[W.bd]},
"%":"SpeechGrammarList"},
be:{"^":"u;0l:length=",$isbe:1,"%":"SpeechRecognitionResult"},
o4:{"^":"li;",
j:function(a,b){return a.getItem(H.M(b))},
m:function(a,b,c){a.setItem(b,H.M(c))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gal:function(a){var z=H.d([],[P.i])
this.I(a,new W.jk(z))
return z},
gl:function(a){return a.length},
$asah:function(){return[P.i,P.i]},
$isH:1,
$asH:function(){return[P.i,P.i]},
"%":"Storage"},
jk:{"^":"n:24;a",
$2:function(a,b){return C.a.h(this.a,a)}},
o7:{"^":"a6;0Z:type}","%":"HTMLStyleElement"},
bf:{"^":"u;",$isbf:1,"%":"CSSStyleSheet|StyleSheet"},
d9:{"^":"a6;",$isd9:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bg:{"^":"ab;",$isbg:1,"%":"TextTrack"},
bh:{"^":"ab;",$isbh:1,"%":"TextTrackCue|VTTCue"},
oa:{"^":"lp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isj:1,
$asj:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"TextTrackCueList"},
ob:{"^":"fu;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isj:1,
$asj:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"TextTrackList"},
oc:{"^":"u;0l:length=","%":"TimeRanges"},
bj:{"^":"u;",$isbj:1,"%":"Touch"},
bk:{"^":"dc;",$isbk:1,"%":"TouchEvent"},
od:{"^":"lv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbj")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bj]},
$asx:function(){return[W.bj]},
$isj:1,
$asj:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asC:function(){return[W.bj]},
"%":"TouchList"},
oe:{"^":"u;0l:length=","%":"TrackDefaultList"},
dc:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
og:{"^":"u;",
i:function(a){return String(a)},
"%":"URL"},
oh:{"^":"ab;0l:length=","%":"VideoTrackList"},
bK:{"^":"av;",
ghm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbK:1,
"%":"WheelEvent"},
kl:{"^":"ab;",
fp:function(a,b){return a.requestAnimationFrame(H.br(H.h(b,{func:1,ret:-1,args:[P.a_]}),1))},
eL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
om:{"^":"lX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb3")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b3]},
$asx:function(){return[W.b3]},
$isj:1,
$asj:function(){return[W.b3]},
$isc:1,
$asc:function(){return[W.b3]},
$asC:function(){return[W.b3]},
"%":"CSSRuleList"},
on:{"^":"hD;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bS(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=J.aY(b)
return a.left===z.gaJ(b)&&a.top===z.gb4(b)&&a.width===z.gao(b)&&a.height===z.gak(b)},
gR:function(a){return W.fk(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gao:function(a){return a.width},
"%":"ClientRect|DOMRect"},
op:{"^":"lZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb6")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b6]},
$asx:function(){return[W.b6]},
$isj:1,
$asj:function(){return[W.b6]},
$isc:1,
$asc:function(){return[W.b6]},
$asC:function(){return[W.b6]},
"%":"GamepadList"},
oq:{"^":"m0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isj:1,
$asj:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
or:{"^":"m2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isj:1,
$asj:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"SpeechRecognitionResultList"},
os:{"^":"m4;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isj:1,
$asj:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"StyleSheetList"},
kA:{"^":"d8;a,b,c,$ti",
hE:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.Z(this.a,this.b,a,!1,z)}},
oo:{"^":"kA;a,b,c,$ti"},
kB:{"^":"eC;a,b,c,d,e,$ti",
fJ:function(){var z=this.d
if(z!=null&&this.a<=0)J.h9(this.b,this.c,z,!1)},
p:{
Z:function(a,b,c,d,e){var z=c==null?null:W.fL(new W.kC(c),W.aa)
z=new W.kB(0,a,b,z,!1,[e])
z.fJ()
return z}}},
kC:{"^":"n:5;a",
$1:function(a){return this.a.$1(H.f(a,"$isaa"))}},
C:{"^":"b;$ti",
gY:function(a){return new W.e6(a,this.gl(a),-1,[H.aZ(this,a,"C",0)])},
aw:function(a,b,c,d){H.z(d,H.aZ(this,a,"C",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e6:{"^":"b;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dF(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
ku:{"^":"u+hw;"},
kw:{"^":"u+x;"},
kx:{"^":"kw+C;"},
ky:{"^":"u+x;"},
kz:{"^":"ky+C;"},
kD:{"^":"u+x;"},
kE:{"^":"kD+C;"},
kQ:{"^":"u+x;"},
kR:{"^":"kQ+C;"},
kY:{"^":"u+ah;"},
kZ:{"^":"u+ah;"},
l_:{"^":"u+x;"},
l0:{"^":"l_+C;"},
l1:{"^":"u+x;"},
l2:{"^":"l1+C;"},
l5:{"^":"u+x;"},
l6:{"^":"l5+C;"},
lc:{"^":"u+ah;"},
fq:{"^":"ab+x;"},
fr:{"^":"fq+C;"},
le:{"^":"u+x;"},
lf:{"^":"le+C;"},
li:{"^":"u+ah;"},
lo:{"^":"u+x;"},
lp:{"^":"lo+C;"},
ft:{"^":"ab+x;"},
fu:{"^":"ft+C;"},
lu:{"^":"u+x;"},
lv:{"^":"lu+C;"},
lW:{"^":"u+x;"},
lX:{"^":"lW+C;"},
lY:{"^":"u+x;"},
lZ:{"^":"lY+C;"},
m_:{"^":"u+x;"},
m0:{"^":"m_+C;"},
m1:{"^":"u+x;"},
m2:{"^":"m1+C;"},
m3:{"^":"u+x;"},
m4:{"^":"m3+C;"}}],["","",,P,{"^":"",
mq:function(a){var z,y
z=J.I(a)
if(!!z.$isbZ){y=z.gde(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fw(a.data,a.height,a.width)},
mp:function(a){if(a instanceof P.fw)return{data:a.a,height:a.b,width:a.c}
return a},
aT:function(a){var z,y,x,w,v
if(a==null)return
z=P.eh(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.M(y[w])
z.m(0,v,a[v])}return z},
mn:function(a,b){var z={}
a.I(0,new P.mo(z))
return z},
e3:function(){var z=$.e2
if(z==null){z=J.cH(window.navigator.userAgent,"Opera",0)
$.e2=z}return z},
hB:function(){var z,y
z=$.e_
if(z!=null)return z
y=$.e0
if(y==null){y=J.cH(window.navigator.userAgent,"Firefox",0)
$.e0=y}if(y)z="-moz-"
else{y=$.e1
if(y==null){y=!P.e3()&&J.cH(window.navigator.userAgent,"Trident/",0)
$.e1=y}if(y)z="-ms-"
else z=P.e3()?"-o-":"-webkit-"}$.e_=z
return z},
ll:{"^":"b;",
dD:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cu:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.I(a)
if(!!y.$isaA)return new Date(a.a)
if(!!y.$isiX)throw H.a(P.c6("structured clone of RegExp"))
if(!!y.$isaU)return a
if(!!y.$iscK)return a
if(!!y.$ise5)return a
if(!!y.$isbZ)return a
if(!!y.$isep||!!y.$isd2)return a
if(!!y.$isH){x=this.dD(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.I(a,new P.ln(z,this))
return z.a}if(!!y.$isc){x=this.dD(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.hj(a,x)}throw H.a(P.c6("structured clone of other type"))},
hj:function(a,b){var z,y,x,w
z=J.aE(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.q(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cu(z.j(a,w)))
return x}},
ln:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cu(b)}},
fw:{"^":"b;de:a>,b,c",$isbZ:1},
mo:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lm:{"^":"ll;a,b"},
hN:{"^":"cl;a,b",
gbb:function(){var z,y,x
z=this.b
y=H.ay(z,"x",0)
x=W.a1
return new H.ij(new H.kj(z,H.h(new P.hO(),{func:1,ret:P.ag,args:[y]}),[y]),H.h(new P.hP(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isa1")
z=this.gbb()
J.hc(z.b.$1(J.cI(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.as(this.gbb().a)},
j:function(a,b){var z=this.gbb()
return z.b.$1(J.cI(z.a,b))},
gY:function(a){var z=P.ic(this.gbb(),!1,W.a1)
return new J.at(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.a1]},
$asj:function(){return[W.a1]},
$asc:function(){return[W.a1]}},
hO:{"^":"n:29;",
$1:function(a){return!!J.I(H.f(a,"$isJ")).$isa1}},
hP:{"^":"n:27;",
$1:function(a){return H.k(H.f(a,"$isJ"),"$isa1")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l7:{"^":"b;$ti",
gbx:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.z(z+this.c,H.y(this,0))},
gbY:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bS(b,"$isa7",[P.a_],"$asa7")
if(!z)return!1
z=this.a
y=J.aY(b)
x=y.gaJ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb4(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gbx(b)){if(typeof x!=="number")return x.B()
z=H.z(x+this.d,w)===y.gbY(b)}else z=!1}else z=!1}else z=!1
return z},
gR:function(a){var z,y,x,w,v
z=this.a
y=J.bU(z)
x=this.b
w=J.bU(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.z(x+this.d,v)
return P.kS(P.cv(P.cv(P.cv(P.cv(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"l7;aJ:a>,b4:b>,ao:c>,ak:d>,$ti",p:{
iU:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.M()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.M()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",bC:{"^":"u;",$isbC:1,"%":"SVGLength"},nA:{"^":"kU;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbC")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bC]},
$isj:1,
$asj:function(){return[P.bC]},
$isc:1,
$asc:function(){return[P.bC]},
$asC:function(){return[P.bC]},
"%":"SVGLengthList"},bE:{"^":"u;",$isbE:1,"%":"SVGNumber"},nO:{"^":"l4;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbE")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bE]},
$isj:1,
$asj:function(){return[P.bE]},
$isc:1,
$asc:function(){return[P.bE]},
$asC:function(){return[P.bE]},
"%":"SVGNumberList"},nU:{"^":"u;0l:length=","%":"SVGPointList"},nZ:{"^":"eE;0Z:type}","%":"SVGScriptElement"},o5:{"^":"lk;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.M(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.i]},
$isj:1,
$asj:function(){return[P.i]},
$isc:1,
$asc:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"SVGStringList"},o8:{"^":"eE;0Z:type}","%":"SVGStyleElement"},eE:{"^":"a1;",
gc1:function(a){return new P.hN(a,new W.ks(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bH:{"^":"u;",$isbH:1,"%":"SVGTransform"},of:{"^":"lx;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbH")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bH]},
$isj:1,
$asj:function(){return[P.bH]},
$isc:1,
$asc:function(){return[P.bH]},
$asC:function(){return[P.bH]},
"%":"SVGTransformList"},kT:{"^":"u+x;"},kU:{"^":"kT+C;"},l3:{"^":"u+x;"},l4:{"^":"l3+C;"},lj:{"^":"u+x;"},lk:{"^":"lj+C;"},lw:{"^":"u+x;"},lx:{"^":"lw+C;"}}],["","",,P,{"^":"",O:{"^":"b;",$isj:1,
$asj:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjC:1}}],["","",,P,{"^":"",nb:{"^":"u;0l:length=","%":"AudioBuffer"},dK:{"^":"ab;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nc:{"^":"kr;",
j:function(a,b){return P.aT(a.get(H.M(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aT(y.value[1]))}},
gal:function(a){var z=H.d([],[P.i])
this.I(a,new P.hg(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asah:function(){return[P.i,null]},
$isH:1,
$asH:function(){return[P.i,null]},
"%":"AudioParamMap"},hg:{"^":"n:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},hh:{"^":"dK;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nd:{"^":"ab;0l:length=","%":"AudioTrackList"},hk:{"^":"ab;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ne:{"^":"dK;0Z:type}","%":"BiquadFilterNode"},nR:{"^":"hk;0l:length=","%":"OfflineAudioContext"},nS:{"^":"hh;0Z:type}","%":"Oscillator|OscillatorNode"},kr:{"^":"u+ah;"}}],["","",,P,{"^":"",d6:{"^":"u;",
ib:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isbZ)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mp(g))
return}if(!!z.$ise8)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bV("Incorrect number or type of arguments"))},
ia:function(a,b,c,d,e,f,g){return this.ib(a,b,c,d,e,f,g,null,null,null)},
$isd6:1,
"%":"WebGLRenderingContext"},jL:{"^":"u;",$isjL:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",o3:{"^":"lh;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aT(a.item(b))},
m:function(a,b,c){H.D(b)
H.f(c,"$isH")
throw H.a(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$asx:function(){return[[P.H,,,]]},
$isj:1,
$asj:function(){return[[P.H,,,]]},
$isc:1,
$asc:function(){return[[P.H,,,]]},
$asC:function(){return[[P.H,,,]]},
"%":"SQLResultSetRowList"},lg:{"^":"u+x;"},lh:{"^":"lg+C;"}}],["","",,O,{"^":"",aG:{"^":"b;0a,0b,0c,0d,$ti",
bD:function(a){this.a=H.d([],[a])
this.b=null
this.c=null
this.d=null},
cw:function(a,b,c){var z=H.ay(this,"aG",0)
H.h(b,{func:1,ret:P.ag,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.m,[P.j,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
b8:function(a,b){return this.cw(a,null,b)},
fe:function(a){var z
H.w(a,"$isj",[H.ay(this,"aG",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eV:function(a,b){var z
H.w(b,"$isj",[H.ay(this,"aG",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.at(z,z.length,0,[H.y(z,0)])},
H:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ay(this,"aG",0)
H.z(b,z)
z=[z]
if(this.fe(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eV(x,H.d([b],z))}},
$isj:1,
p:{
cP:function(a){var z=new O.aG([a])
z.bD(a)
return z}}},d0:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
er:function(a){var z=this.b
if(!(z==null))z.G(a)},
az:function(){return this.er(null)},
gU:function(a){var z=this.a
if(z.length>0)return C.a.gax(z)
else return V.c3()},
dZ:function(a){var z=this.a
if(a==null)C.a.h(z,V.c3())
else C.a.h(z,a)
this.az()},
cl:function(){var z=this.a
if(z.length>0){z.pop()
this.az()}}}}],["","",,E,{"^":"",cJ:{"^":"b;"},aH:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cF:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
if(y.f==null)y.cF()}},
sa4:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.h(this.gdV(),{func:1,ret:-1,args:[D.t]})
C.a.K(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.h(this.gdV(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.L("shape",z,this.c,this,[F.ez])
w.b=!0
this.a3(w)}},
sb1:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.h(this.gdW(),{func:1,ret:-1,args:[D.t]})
C.a.K(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gdW(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}this.cF()
w=new D.L("technique",x,this.f,this,[O.cq])
w.b=!0
this.a3(w)}},
saK:function(a){var z,y,x,w
if(!J.P(this.r,a)){z=this.r
if(z!=null){y=z.gw()
y.toString
x=H.h(this.gdU(),{func:1,ret:-1,args:[D.t]})
C.a.K(y.a,x)}if(a!=null){y=a.gw()
y.toString
x=H.h(this.gdU(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.L("mover",z,a,this,[U.ai])
w.b=!0
this.a3(w)}},
an:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aO(0,b,this):null
if(!J.P(y,this.x)){x=this.x
this.x=y
w=new D.L("matrix",x,y,this,[V.au])
w.b=!0
this.a3(w)}z=this.f
if(z!=null)z.an(0,b)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();)z.d.an(0,b)},
aL:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gU(z))
else C.a.h(z.a,y.k(0,z.gU(z)))
z.az()
a.e_(this.f)
z=a.dy
x=(z&&C.a).gax(z)
if(x!=null&&this.d!=null)x.i2(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();)z.d.aL(a)
a.dY()
a.dx.cl()},
gw:function(){var z=this.z
if(z==null){z=D.R()
this.z=z}return z},
a3:function(a){var z=this.z
if(!(z==null))z.G(a)},
V:function(){return this.a3(null)},
hP:[function(a){H.f(a,"$ist")
this.e=null
this.a3(a)},function(){return this.hP(null)},"j8","$1","$0","gdV",0,2,1],
hQ:[function(a){this.a3(H.f(a,"$ist"))},function(){return this.hQ(null)},"j9","$1","$0","gdW",0,2,1],
hO:[function(a){this.a3(H.f(a,"$ist"))},function(){return this.hO(null)},"j7","$1","$0","gdU",0,2,1],
hM:[function(a){this.a3(H.f(a,"$ist"))},function(){return this.hM(null)},"j5","$1","$0","gdT",0,2,1],
j4:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aH],"$asj")
for(z=b.length,y=this.gdT(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.a=H.d([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.V()},"$2","ghL",8,0,10],
j6:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isj",[E.aH],"$asj")
for(z=b.length,y=this.gdT(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b5()
t.a=H.d([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.h(y,x)
C.a.K(t.a,y)}}this.V()},"$2","ghN",8,0,10],
$isaJ:1,
p:{
cQ:function(a,b,c,d,e,f){var z,y
z=new E.aH()
z.a=d
z.b=!0
y=O.cP(E.aH)
z.y=y
y.b8(z.ghL(),z.ghN())
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
z.sa4(0,e)
z.sb1(f)
z.saK(c)
return z}}},iZ:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
en:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aA(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d0()
y=[V.au]
z.a=H.d([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.h(new E.j0(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d0()
z.a=H.d([],y)
v=z.gw()
v.toString
x=H.h(new E.j1(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d0()
z.a=H.d([],y)
y=z.gw()
y.toString
w=H.h(new E.j2(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.d([],[O.cq])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.i,A.ey])},
ghZ:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gU(z)
y=this.db
y=z.k(0,y.gU(y))
this.z=y
z=y}return z},
e_:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gax(z):a;(z&&C.a).h(z,y)},
dY:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
j_:function(a,b){var z=new E.iZ(a,b)
z.en(a,b)
return z}}},j0:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.ch=null}},j1:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j2:{"^":"n:13;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},ju:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
eu:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.G(a)
this.i5()},function(){return this.eu(null)},"es","$1","$0","gcB",0,2,1],
ghv:function(){var z,y,x
z=Date.now()
y=C.e.a1(P.e4(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aA(z,!1)
return x/y},
cW:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.q(z)
x=C.d.ce(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.ce(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eJ(C.q,this.gi4())},
i5:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jw(this),{func:1,ret:-1,args:[P.a_]})
C.B.eL(z)
C.B.fp(z,W.fL(y,P.a_))}},"$0","gi4",0,0,3],
i1:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cW()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aA(w,!1)
x.y=P.e4(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.az()
w=x.db
C.a.sl(w.a,0)
w.az()
w=x.dx
C.a.sl(w.a,0)
w.az()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aL(this.e)}}catch(v){z=H.ar(v)
y=H.bt(v)
P.dC("Error: "+H.l(z))
P.dC("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jv:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscN)return E.eI(a,!0,!0,!0,!1)
y=W.cO(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gc1(a).h(0,y)
w=E.eI(y,!0,!0,!0,!1)
w.a=a
return w},
eI:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ju()
y=P.i7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bz(a,"webgl",y)
x=H.f(x==null?C.l.bz(a,"experimental-webgl",y):x,"$isd6")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j_(x,a)
w=new T.jq(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jY(a)
v=new X.i0()
v.c=new X.aW(!1,!1,!1)
v.d=P.ia(null,null,null,P.m)
w.b=v
v=new X.ix(w)
v.f=0
v.r=new V.U(0,0)
v.x=new V.U(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ie(w)
v.r=0
v.x=new V.U(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jz(w)
v.e=0
v.f=new V.U(0,0)
v.r=new V.U(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.d([],[[P.eC,P.b]])
w.z=v
u=document
t=W.av
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Z(u,"contextmenu",H.h(w.gf1(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Z(a,"focus",H.h(w.gf4(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Z(a,"blur",H.h(w.geZ(),q),!1,r))
v=w.z
p=W.bB
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Z(u,"keyup",H.h(w.gf6(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Z(u,"keydown",H.h(w.gf5(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousedown",H.h(w.gf9(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mouseup",H.h(w.gfb(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousemove",H.h(w.gfa(),s),!1,t))
p=w.z
o=W.bK;(p&&C.a).h(p,W.Z(a,H.M(W.hH(a)),H.h(w.gfc(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Z(u,"mousemove",H.h(w.gf2(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Z(u,"mouseup",H.h(w.gf3(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Z(u,"pointerlockchange",H.h(w.gfd(),q),!1,r))
r=w.z
q=W.bk
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Z(a,"touchstart",H.h(w.gfk(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchend",H.h(w.gfi(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchmove",H.h(w.gfj(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aA(Date.now(),!1)
z.ch=0
z.cW()
return z}}},jw:{"^":"n:31;a",
$1:function(a){var z
H.mW(a)
z=this.a
if(z.z){z.z=!1
z.i1()}}}}],["","",,Z,{"^":"",ff:{"^":"b;a,b",p:{
dh:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bo(c)),35044)
a.bindBuffer(b,null)
return new Z.ff(b,z)}}},dO:{"^":"cJ;a,b,c,d,e",
aS:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ar(y)
x=P.v('Failed to bind buffer attribute "'+J.a9(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.a9(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},ki:{"^":"b;a",$isnf:1},dP:{"^":"b;a,0b,c,d",
aI:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aS:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aS(a)},
ij:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aL:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a9(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$iso9:1},ci:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bb(this.c)+"'")+"]"}},bl:{"^":"b;a",
gcz:function(a){var z,y
z=this.a
y=(z&$.$get$aP().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=2
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=4
if((z&$.$get$bm().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
hb:function(a){var z,y,x
z=$.$get$aP()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fe()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.i])
y=this.a
if((y&$.$get$aP().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aR().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
p:{
ap:function(a){return new Z.bl(a)}}}}],["","",,D,{"^":"",dT:{"^":"b;"},b5:{"^":"b;0a,0b,0c",
G:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.I(y,new D.hL(z))
return x!==0},
ho:function(){return this.G(null)},
i6:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.G(y)}}},
af:function(a){return this.i6(a,!0,!1)},
p:{
R:function(){var z=new D.b5()
z.a=H.d([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hL:{"^":"n:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},cj:{"^":"t;c,d,a,0b,$ti"},ck:{"^":"t;c,d,a,0b,$ti"},L:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dQ:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"nh<"}},ee:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ef:{"^":"t;c,a,0b"},i0:{"^":"b;0a,0b,0c,0d",
hW:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ef(a,this)
y.b=!0
return z.G(y)},
hS:function(a){var z,y
this.c=a.b
this.d.K(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ef(a,this)
y.b=!0
return z.G(y)}},ej:{"^":"d5;x,y,c,d,e,a,0b"},ie:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ar:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aA(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.U(y.a+x*w,y.b+v*u)
u=this.a.gbg()
s=new X.c4(a,new V.U(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
ck:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.G(this.ar(a,b))
return!0},
b0:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ef()
if(typeof z!=="number")return z.by()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.ar(a,b))
return!0},
b_:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.ar(a,b))
return!0},
hX:function(a){return!1},
f8:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aA(Date.now(),!1)
y=this.f
x=new X.ej(c,a,this.a.gbg(),b,z,this)
x.b=!0
y.G(x)
this.y=z
this.x=new V.U(0,0)}},aW:{"^":"b;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aW))return!1
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
return z+(this.c?"Shift+":"")}},c4:{"^":"d5;x,y,z,Q,ch,c,d,e,a,0b"},ix:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bJ:function(a,b,c){var z,y,x
z=new P.aA(Date.now(),!1)
y=this.a.gbg()
x=new X.c4(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
ck:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.G(this.bJ(a,b,!0))
return!0},
b0:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ef()
if(typeof z!=="number")return z.by()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.bJ(a,b,!0))
return!0},
b_:function(a,b){var z=this.d
if(z==null)return!1
z.G(this.bJ(a,b,!1))
return!0},
hY:function(a,b){return!1}},d5:{"^":"t;"},eN:{"^":"d5;x,y,z,Q,ch,c,d,e,a,0b"},jz:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ar:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.U],"$asc")
z=new P.aA(Date.now(),!1)
y=a.length>0?a[0]:new V.U(0,0)
x=this.a.gbg()
w=new X.eN(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hV:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.b
if(z==null)return!1
z.G(this.ar(a,!0))
return!0},
hT:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.c
if(z==null)return!1
z.G(this.ar(a,!0))
return!0},
hU:function(a){var z
H.w(a,"$isc",[V.U],"$asc")
z=this.d
if(z==null)return!1
z.G(this.ar(a,!1))
return!0}},jY:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbg:function(){var z=this.a
return V.ex(0,0,(z&&C.l).gdc(z).c,C.l.gdc(z).d)},
cM:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.aW(y,a.altKey,a.shiftKey))},
aE:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aW(y,a.altKey,a.shiftKey)},
bV:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aW(y,a.altKey,a.shiftKey)},
as:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.O()
v=z.top
if(typeof x!=="number")return x.O()
return new V.U(y-w,x-v)},
aQ:function(a){return new V.a5(a.movementX,a.movementY)},
bP:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.U])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.aa(u.pageX)
C.d.aa(u.pageY)
s=z.left
C.d.aa(u.pageX)
C.a.h(y,new V.U(t-s,C.d.aa(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dQ(z,new X.aW(y,a.altKey,a.shiftKey))},
bL:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.O()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.O()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iH:[function(a){this.f=!0},"$1","gf4",4,0,5],
iA:[function(a){this.f=!1},"$1","geZ",4,0,5],
iE:[function(a){H.f(a,"$isav")
if(this.f&&this.bL(a))a.preventDefault()},"$1","gf1",4,0,4],
iJ:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cM(a)
if(this.b.hW(z))a.preventDefault()},"$1","gf6",4,0,25],
iI:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cM(a)
if(this.b.hS(z))a.preventDefault()},"$1","gf5",4,0,25],
iL:[function(a){var z,y,x,w
H.f(a,"$isav")
z=this.a
z.focus()
this.f=!0
this.aE(a)
if(this.x){y=this.ap(a)
x=this.aQ(a)
if(this.d.ck(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.as(a)
if(this.c.ck(y,w))a.preventDefault()},"$1","gf9",4,0,4],
iN:[function(a){var z,y,x
H.f(a,"$isav")
this.aE(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.b0(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b0(z,x))a.preventDefault()},"$1","gfb",4,0,4],
iG:[function(a){var z,y,x
H.f(a,"$isav")
if(!this.bL(a)){this.aE(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.b0(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b0(z,x))a.preventDefault()}},"$1","gf3",4,0,4],
iM:[function(a){var z,y,x
H.f(a,"$isav")
this.aE(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.b_(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b_(z,x))a.preventDefault()},"$1","gfa",4,0,4],
iF:[function(a){var z,y,x
H.f(a,"$isav")
if(!this.bL(a)){this.aE(a)
z=this.ap(a)
if(this.x){y=this.aQ(a)
if(this.d.b_(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b_(z,x))a.preventDefault()}},"$1","gf2",4,0,4],
iO:[function(a){var z,y
H.f(a,"$isbK")
this.aE(a)
z=new V.a5((a&&C.A).ghl(a),C.A.ghm(a)).u(0,180)
if(this.x){if(this.d.hX(z))a.preventDefault()
return}if(this.r)return
y=this.as(a)
if(this.c.hY(z,y))a.preventDefault()},"$1","gfc",4,0,35],
iP:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.as(this.y)
this.d.f8(w,v,x)}},"$1","gfd",4,0,5],
iV:[function(a){var z
H.f(a,"$isbk")
this.a.focus()
this.f=!0
this.bV(a)
z=this.bP(a)
if(this.e.hV(z))a.preventDefault()},"$1","gfk",4,0,12],
iT:[function(a){var z
H.f(a,"$isbk")
this.bV(a)
z=this.bP(a)
if(this.e.hT(z))a.preventDefault()},"$1","gfi",4,0,12],
iU:[function(a){var z
H.f(a,"$isbk")
this.bV(a)
z=this.bP(a)
if(this.e.hU(z))a.preventDefault()},"$1","gfj",4,0,12]}}],["","",,D,{"^":"",hC:{"^":"b;",$isa2:1,$isaJ:1},a2:{"^":"b;",$isaJ:1},i1:{"^":"aG;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.R()
this.Q=z}return z},
a2:function(a){var z=this.Q
if(!(z==null))z.G(a)},
f7:[function(a){var z
H.f(a,"$ist")
z=this.ch
if(!(z==null))z.G(a)},function(){return this.f7(null)},"iK","$1","$0","gcT",0,2,1],
iQ:[function(a){var z,y,x
H.w(a,"$isj",[D.a2],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.eH(x))return!1}return!0},"$1","gff",4,0,37],
ix:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcT(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.cr)C.a.h(this.z,t)
s=t.db
if(s==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.db=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.a2(z)},"$2","geW",8,0,23],
iS:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gcT(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.cr)C.a.K(this.z,t)
s=t.db
if(s==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.db=s}H.h(x,w)
C.a.K(s.a,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.a2(z)},"$2","gfh",8,0,23],
eH:function(a){var z=C.a.aT(this.z,a)
return z},
$asj:function(){return[D.a2]},
$asaG:function(){return[D.a2]}},iG:{"^":"b;",$isa2:1,$isaJ:1},jh:{"^":"b;",$isa2:1,$isaJ:1},js:{"^":"b;",$isa2:1,$isaJ:1},jt:{"^":"b;",$isa2:1,$isaJ:1},cr:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gw:function(){var z=this.db
if(z==null){z=D.R()
this.db=z}return z},
a2:[function(a){var z
H.f(a,"$ist")
z=this.db
if(!(z==null))z.G(a)},function(){return this.a2(null)},"iB","$1","$0","gbO",0,2,1],
$isa2:1,
$isaJ:1}}],["","",,V,{"^":"",
nj:[function(a,b){if(typeof b!=="number")return b.O()
if(typeof a!=="number")return H.q(a)
return Math.abs(b-a)<=1e-9},"$2","iu",8,0,33],
n7:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.b7(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.a9("null",c)
return C.b.a9(C.d.e4($.o.$2(a,0)?0:a,b),c+b+1)},
bs:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.p],"$asc")
z=H.d([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.m(z,u,C.b.a9(z[u],x))}return z},
dB:function(a,b){return C.d.ie(Math.pow(b,C.I.ce(Math.log(H.mm(a))/Math.log(b))))},
a0:{"^":"b;a,b,c",
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
return new V.a0(z,y,x)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
b1:{"^":"b;a,b,c,d",
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
return new V.b1(z,y,x,w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
cm:{"^":"b;a,b,c,d,e,f,r,x,y",
ab:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscm")
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
return new V.cm(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cm))return!1
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
y=V.bs(H.d([this.a,this.d,this.r],z),3,0)
x=V.bs(H.d([this.b,this.e,this.x],z),3,0)
w=V.bs(H.d([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.e(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.e(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.e(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.e(y,1)
s=" "+y[1]+", "
if(1>=u)return H.e(x,1)
s=s+x[1]+", "
if(1>=t)return H.e(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.e(y,2)
z=" "+y[2]+", "
if(2>=u)return H.e(x,2)
z=z+x[2]+", "
if(2>=t)return H.e(w,2)
return s+(z+w[2]+"]")}},
au:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ab:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return z},
dM:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.c3()
a3=1/a2
a4=-w
a5=-i
return V.aI((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isau")
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
return V.aI(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
b5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.W(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
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
i:function(a){return this.J()},
dE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.p]
y=V.bs(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bs(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bs(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bs(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
J:function(){return this.dE("",3,0)},
A:function(a){return this.dE(a,3,0)},
p:{
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c3:function(){return V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eo:function(a,b,c){return V.aI(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
en:function(a,b,c,d){return V.aI(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
em:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aI(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
U:{"^":"b;a,b",
O:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.U(this.a*b,this.b*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
W:{"^":"b;a,b,c",
B:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
bF:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bF(this.a*b,this.b*b,this.c*b,this.d*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bF))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}},
ew:{"^":"b;a,b,c,d",
gam:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ew))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"},
p:{
ex:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ew(a,b,c,d)}}},
a5:{"^":"b;a,b",
hC:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,22],
D:function(a){var z,y,x,w
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
return new V.a5(z*b,y*b)},
u:function(a,b){var z,y
if($.o.$2(b,0))return new V.a5(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.a5(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
E:{"^":"b;a,b,c",
hC:[function(a){return Math.sqrt(this.D(this))},"$0","gl",1,0,22],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cj:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
at:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.E(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if($.o.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dN:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hr:{"^":"dT;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bE:function(a){var z=V.n7(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.R()
this.y=z}return z},
X:function(a){var z=this.y
if(!(z==null))z.G(a)},
se7:function(a,b){},
sdP:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bE(z)}z=new D.L("maximumLocation",y,this.b,this,[P.p])
z.b=!0
this.X(z)}},
sdR:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bE(z)}z=new D.L("minimumLocation",y,this.c,this,[P.p])
z.b=!0
this.X(z)}},
sa_:function(a,b){var z,y
b=this.bE(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.L("location",y,b,this,[P.p])
z.b=!0
this.X(z)}},
sdQ:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.L("maximumVelocity",y,a,this,[P.p])
z.b=!0
this.X(z)}},
sW:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.L("velocity",x,a,this,[P.p])
z.b=!0
this.X(z)}},
sdd:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.L("dampening",y,a,this,[P.p])
z.b=!0
this.X(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*b)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sW(y)}},
p:{
dV:function(){var z=new U.hr()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dW:{"^":"ai;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
aO:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dW))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
p:{
bX:function(a){var z=new U.dW()
z.a=a
return z}}},e7:{"^":"aG;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
X:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.G(a)},function(){return this.X(null)},"aA","$1","$0","gb9",0,2,1],
il:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gb9(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gev",8,0,20],
iR:[function(a,b){var z,y,x,w,v,u,t
z=U.ai
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gb9(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.B)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.h(x,w)
C.a.K(t.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gfg",8,0,20],
aO:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.at(z,z.length,0,[H.y(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aO(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c3():x
z=this.e
if(!(z==null))z.af(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e7))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.ai]},
$asaG:function(){return[U.ai]},
$isai:1,
p:{
cS:function(a){var z=new U.e7()
z.bD(U.ai)
z.b8(z.gev(),z.gfg())
z.e=null
z.f=V.c3()
z.r=0
return z}}},ai:{"^":"dT;"},jZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.R()
this.fx=z}return z},
X:[function(a){var z
H.f(a,"$ist")
z=this.fx
if(!(z==null))z.G(a)},function(){return this.X(null)},"aA","$1","$0","gb9",0,2,1],
hc:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.R()
z.b=y
z=y}else z=y
y={func:1,ret:-1,args:[D.t]}
x=H.h(this.geS(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.geT(),y)
C.a.h(z.a,x)
x=this.a.c
z=x.c
if(z==null){z=D.R()
x.c=z}x=H.h(this.geU(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.R()
x.f=z}x=H.h(this.geP(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.geQ(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.R()
x.b=z}x=H.h(this.gfI(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.R()
x.d=z}x=H.h(this.gfH(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.R()
x.c=z}y=H.h(this.gfG(),y)
C.a.h(z.a,y)
return!0},
ai:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a5(z,y)},
iu:[function(a){a=H.k(H.f(a,"$ist"),"$isc4")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geS",4,0,2],
iv:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$ist"),"$isc4")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.a5(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ai(new V.a5(y.a,y.b).k(0,2).u(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ai(new V.a5(x.a,x.b).k(0,2).u(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa_(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.O(0,a.z)
this.dx=this.ai(new V.a5(y.a,y.b).k(0,2).u(0,z.gam()))}this.aA()},"$1","geT",4,0,2],
iw:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sW(-y*10*z)
this.aA()}},"$1","geU",4,0,2],
is:[function(a){if(H.k(H.f(a,"$ist"),"$isej").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geP",4,0,2],
it:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$ist"),"$isc4")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ai(new V.a5(x.a,x.b).k(0,2).u(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa_(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.O(0,a.z)
this.dx=this.ai(new V.a5(y.a,y.b).k(0,2).u(0,z.gam()))
this.aA()},"$1","geQ",4,0,2],
iZ:[function(a){H.f(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfI",4,0,2],
iY:[function(a){var z,y,x,w,v,u,t
a=H.k(H.f(a,"$ist"),"$iseN")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.a5(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.q(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ai(new V.a5(y.a,y.b).k(0,2).u(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.q(x)
y.sW(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.q(y)
x.sW(-z*10*y)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ai(new V.a5(x.a,x.b).k(0,2).u(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.q(u)
t=this.cy
if(typeof t!=="number")return H.q(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.q(v)
x=this.db
if(typeof x!=="number")return H.q(x)
t.sa_(0,-u*v+x)
this.b.sW(0)
this.c.sW(0)
y=y.O(0,a.z)
this.dx=this.ai(new V.a5(y.a,y.b).k(0,2).u(0,z.gam()))}this.aA()},"$1","gfH",4,0,2],
iX:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.q(x)
z.sW(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.q(z)
x.sW(-y*10*z)
this.aA()}},"$1","gfG",4,0,2],
aO:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.M()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=V.em(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aI(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isai:1,
p:{
fa:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.jZ()
y=U.dV()
y.se7(0,!0)
y.sdP(6.283185307179586)
y.sdR(0)
y.sa_(0,0)
y.sdQ(100)
y.sW(0)
y.sdd(0.5)
z.b=y
y=y.gw()
y.toString
x=H.h(z.gb9(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)
y=U.dV()
y.se7(0,!0)
y.sdP(6.283185307179586)
y.sdR(0)
y.sa_(0,0)
y.sdQ(100)
y.sW(0)
y.sdd(0.5)
z.c=y
C.a.h(y.gw().a,x)
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
w=new X.aW(b,!1,!1)
v=z.d
z.d=w
y=new D.L("modifiers",v,w,z,[X.aW])
y.b=!0
z.X(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.L("invertX",y,!1,z,[P.ag])
y.b=!0
z.X(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.L("invertY",y,!1,z,[P.ag])
y.b=!0
z.X(y)}z.hc(c)
return z}}}}],["","",,M,{"^":"",hJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aB:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.G(a)},function(){return this.aB(null)},"im","$1","$0","gah",0,2,1],
iC:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aH
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gf_",8,0,10],
iD:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aH
H.w(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gah(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b5()
s.a=H.d([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.h(x,w)
C.a.K(s.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gf0",8,0,10],
sb1:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.h(this.gah(),{func:1,ret:-1,args:[D.t]})
C.a.K(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gah(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.L("technique",x,this.c,this,[O.cq])
z.b=!0
this.aB(z)}},
gw:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
aL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.e_(this.c)
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
u=C.d.aa(v.a*x)
if(typeof w!=="number")return H.q(w)
t=C.d.aa(v.b*w)
s=C.d.aa(v.c*x)
a.c=s
v=C.d.aa(v.d*w)
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
n=V.aI(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dZ(n)
y=$.et
if(y==null){y=new V.E(0,0,-1)
m=y.u(0,Math.sqrt(y.D(y)))
y=new V.E(0,1,0).at(m)
l=y.u(0,Math.sqrt(y.D(y)))
k=m.at(l)
j=new V.E(0,0,0)
y=V.aI(l.a,k.a,m.a,l.N(0).D(j),l.b,k.b,m.b,k.N(0).D(j),l.c,k.c,m.c,m.N(0).D(j),0,0,0,1)
$.et=y
i=y}else i=y
y=z.b
if(y!=null){h=y.aO(0,a,z)
if(h!=null)i=h.k(0,i)}a.db.dZ(i)
z=this.c
if(z!=null)z.an(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();)z.d.an(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();)z.d.aL(a)
this.a.toString
a.cy.cl()
a.db.cl()
this.b.toString
a.dY()},
$isnX:1}}],["","",,A,{"^":"",dJ:{"^":"b;a,b,c"},hf:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hp:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},il:{"^":"ey;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aG,0av,0aH,0bi,0df,0dg,0bj,0bk,0dh,0di,0bl,0bm,0dj,0dk,0bn,0dl,0dm,0bo,0dn,0dq,0bp,0bq,0br,0dr,0ds,0bs,0bt,0dt,0du,0bu,0dv,0c8,0dw,0c9,0dz,0ca,0dA,0cb,0dB,0cc,0dC,0cd,a,b,0c,0d,0e,0f,0r",
em:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.am("")
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
a2.fL(z)
a2.fS(z)
a2.fM(z)
a2.h_(z)
a2.h0(z)
a2.fU(z)
a2.h4(z)
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
v=this.x
z=new P.am("")
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
v.fP(z)
v.fK(z)
v.fN(z)
v.fQ(z)
v.fY(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fW(z)
v.fX(z)}v.fT(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
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
p=H.d([],[P.i])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fO(z)
v.fV(z)
v.fZ(z)
v.h1(z)
v.h2(z)
v.h3(z)
v.fR(z)}r=z.a+="// === Main ===\n"
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
o=H.d([],[P.i])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(v.c!==C.c)z.a+="   setDiffuseColor();\n"
if(v.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(v.e!==C.c)z.a+="   setSpecularColor();\n"
if(v.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(v.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(v.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(v.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(v.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(v.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(v.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(v.a!==C.c)C.a.h(o,"emission()")
if(v.r!==C.c)C.a.h(o,"reflect(refl)")
if(v.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.C(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cN(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cN(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fP(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.r(P.v("Failed to link shader: "+H.l(m)))}this.fB()
this.fD()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.k(this.r.n(0,"invViewMat"),"$isaL")
if(y)this.db=H.k(this.r.n(0,"objMat"),"$isaL")
if(w)this.dx=H.k(this.r.n(0,"viewObjMat"),"$isaL")
this.fr=H.k(this.r.n(0,"projViewObjMat"),"$isaL")
if(a2.x2)this.go=H.k(this.r.n(0,"txt2DMat"),"$isde")
if(a2.y1)this.id=H.k(this.r.n(0,"txtCubeMat"),"$isaL")
if(a2.y2)this.k1=H.k(this.r.n(0,"colorMat"),"$isaL")
this.k3=H.d([],[A.aL])
y=a2.aG
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isN")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaL"))}}y=a2.a
if(y!==C.c){this.k4=H.k(this.r.n(0,"emissionClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.k(this.r.n(0,"emissionTxt"),"$isan")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isN")
break
case C.h:this.r2=H.k(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.k(this.r.n(0,"nullEmissionTxt"),"$isN")
break}}y=a2.b
if(y!==C.c){this.ry=H.k(this.r.n(0,"ambientClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.k(this.r.n(0,"ambientTxt"),"$isan")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isN")
break
case C.h:this.x2=H.k(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.k(this.r.n(0,"nullAmbientTxt"),"$isN")
break}}y=a2.c
if(y!==C.c){this.y2=H.k(this.r.n(0,"diffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.aG=H.k(this.r.n(0,"diffuseTxt"),"$isan")
this.aH=H.k(this.r.n(0,"nullDiffuseTxt"),"$isN")
break
case C.h:this.av=H.k(this.r.n(0,"diffuseTxt"),"$isao")
this.aH=H.k(this.r.n(0,"nullDiffuseTxt"),"$isN")
break}}y=a2.d
if(y!==C.c){this.bi=H.k(this.r.n(0,"invDiffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.df=H.k(this.r.n(0,"invDiffuseTxt"),"$isan")
this.bj=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break
case C.h:this.dg=H.k(this.r.n(0,"invDiffuseTxt"),"$isao")
this.bj=H.k(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break}}y=a2.e
if(y!==C.c){this.bm=H.k(this.r.n(0,"shininess"),"$isX")
this.bk=H.k(this.r.n(0,"specularClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dh=H.k(this.r.n(0,"specularTxt"),"$isan")
this.bl=H.k(this.r.n(0,"nullSpecularTxt"),"$isN")
break
case C.h:this.di=H.k(this.r.n(0,"specularTxt"),"$isao")
this.bl=H.k(this.r.n(0,"nullSpecularTxt"),"$isN")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dj=H.k(this.r.n(0,"bumpTxt"),"$isan")
this.bn=H.k(this.r.n(0,"nullBumpTxt"),"$isN")
break
case C.h:this.dk=H.k(this.r.n(0,"bumpTxt"),"$isao")
this.bn=H.k(this.r.n(0,"nullBumpTxt"),"$isN")
break}if(a2.dy){this.dl=H.k(this.r.n(0,"envSampler"),"$isao")
this.dm=H.k(this.r.n(0,"nullEnvTxt"),"$isN")
y=a2.r
if(y!==C.c){this.bo=H.k(this.r.n(0,"reflectClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dn=H.k(this.r.n(0,"reflectTxt"),"$isan")
this.bp=H.k(this.r.n(0,"nullReflectTxt"),"$isN")
break
case C.h:this.dq=H.k(this.r.n(0,"reflectTxt"),"$isao")
this.bp=H.k(this.r.n(0,"nullReflectTxt"),"$isN")
break}}y=a2.x
if(y!==C.c){this.bq=H.k(this.r.n(0,"refraction"),"$isX")
this.br=H.k(this.r.n(0,"refractClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dr=H.k(this.r.n(0,"refractTxt"),"$isan")
this.bs=H.k(this.r.n(0,"nullRefractTxt"),"$isN")
break
case C.h:this.ds=H.k(this.r.n(0,"refractTxt"),"$isao")
this.bs=H.k(this.r.n(0,"nullRefractTxt"),"$isN")
break}}}y=a2.y
if(y!==C.c){this.bt=H.k(this.r.n(0,"alpha"),"$isX")
switch(y){case C.c:break
case C.i:break
case C.f:this.dt=H.k(this.r.n(0,"alphaTxt"),"$isan")
this.bu=H.k(this.r.n(0,"nullAlphaTxt"),"$isN")
break
case C.h:this.du=H.k(this.r.n(0,"alphaTxt"),"$isao")
this.bu=H.k(this.r.n(0,"nullAlphaTxt"),"$isN")
break}}this.c8=H.d([],[A.f_])
this.c9=H.d([],[A.f0])
this.ca=H.d([],[A.f1])
this.cb=H.d([],[A.f2])
this.cc=H.d([],[A.f3])
this.cd=H.d([],[A.f4])
if(a2.k2){y=a2.z
if(y>0){this.dv=H.f(this.r.n(0,"dirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.c8;(x&&C.a).h(x,new A.f_(l,k,j))}}y=a2.Q
if(y>0){this.dw=H.f(this.r.n(0,"pntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isX")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isX")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isX")
x=this.c9;(x&&C.a).h(x,new A.f0(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dz=H.f(this.r.n(0,"spotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isX")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isX")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isX")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isX")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isX")
x=this.ca;(x&&C.a).h(x,new A.f1(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dA=H.f(this.r.n(0,"txtDirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isK")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isN")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isan")
x=this.cb;(x&&C.a).h(x,new A.f2(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dB=H.f(this.r.n(0,"txtPntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isde")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isN")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isX")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isX")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isX")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isao")
x=this.cc;(x&&C.a).h(x,new A.f3(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dC=H.f(this.r.n(0,"txtSpotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isK")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isK")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isK")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isK")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isK")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isN")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isK")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isX")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isX")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isX")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isX")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isX")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isan")
x=this.cd;(x&&C.a).h(x,new A.f4(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ad:function(a,b,c){b.a.uniform1i(b.d,1)},
a7:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
im:function(a,b){var z,y
z=a.av
y=new A.il(b,z)
y.ep(b,z)
y.em(a,b)
return y}}},ir:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aG,av,aH",
fL:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aG+"];\n"
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
fS:function(a){var z
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
fM:function(a){var z
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
h_:function(a){var z,y
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
h0:function(a){var z,y
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
fU:function(a){var z
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
h4:function(a){var z
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
aq:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.ay(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fP:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aq(a,z,"emission")
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
fK:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aq(a,z,"ambient")
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
fN:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"diffuse")
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
fQ:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"invDiffuse")
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
fY:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aq(a,z,"specular")
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
fT:function(a){var z,y
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
fW:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aq(a,z,"reflect")
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
fX:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aq(a,z,"refract")
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
fO:function(a){var z,y
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
fV:function(a){var z,y
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
fZ:function(a){var z,y
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
h1:function(a){var z,y,x
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
h2:function(a){var z,y,x
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
h3:function(a){var z,y,x
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
fR:function(a){var z
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
i:function(a){return this.av}},f_:{"^":"b;a,b,c"},f2:{"^":"b;a,b,c,d,e,f,r,x"},f0:{"^":"b;a,b,c,d,e,f,r"},f3:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f1:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f4:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ey:{"^":"cJ;",
ep:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cN:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fP(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fB:function(){var z,y,x,w,v,u
z=H.d([],[A.dJ])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dJ(y,v.name,u))}this.f=new A.hf(z)},
fD:function(){var z,y,x,w,v,u
z=H.d([],[A.ac])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.q(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hk(v.type,v.size,v.name,u))}this.r=new A.jK(z)},
aD:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.N(z,y,b,c)
else return A.dd(z,y,b,a,c)},
eI:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.an(z,y,b,c)
else return A.dd(z,y,b,a,c)},
eJ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.dd(z,y,b,a,c)},
be:function(a,b){return new P.fi(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hk:function(a,b,c,d){switch(a){case 5120:return this.aD(b,c,d)
case 5121:return this.aD(b,c,d)
case 5122:return this.aD(b,c,d)
case 5123:return this.aD(b,c,d)
case 5124:return this.aD(b,c,d)
case 5125:return this.aD(b,c,d)
case 5126:return new A.X(this.a,this.e,c,d)
case 35664:return new A.jF(this.a,this.e,c,d)
case 35665:return new A.K(this.a,this.e,c,d)
case 35666:return new A.jI(this.a,this.e,c,d)
case 35667:return new A.jG(this.a,this.e,c,d)
case 35668:return new A.jH(this.a,this.e,c,d)
case 35669:return new A.jJ(this.a,this.e,c,d)
case 35674:return new A.jM(this.a,this.e,c,d)
case 35675:return new A.de(this.a,this.e,c,d)
case 35676:return new A.aL(this.a,this.e,c,d)
case 35678:return this.eI(b,c,d)
case 35680:return this.eJ(b,c,d)
case 35670:throw H.a(this.be("BOOL",c))
case 35671:throw H.a(this.be("BOOL_VEC2",c))
case 35672:throw H.a(this.be("BOOL_VEC3",c))
case 35673:throw H.a(this.be("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cf:{"^":"b;a,b",
i:function(a){return this.b}},ac:{"^":"b;"},jK:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
hu:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.hu("\n")}},N:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jG:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jH:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jJ:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jE:{"^":"ac;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dd:function(a,b,c,d,e){var z=new A.jE(a,b,c,e)
z.f=d
z.e=P.ib(d,0,!1,P.m)
return z}}},X:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jF:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},K:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jI:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jM:{"^":"ac;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},de:{"^":"ac;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.p],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aL:{"^":"ac;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bo(H.w(a,"$isc",[P.p],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},an:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ao:{"^":"ac;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dt:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.af,P.p,P.p]})
z=F.d7()
F.bO(z,b,c,d,a,1,0,0,1)
F.bO(z,b,c,d,a,0,1,0,3)
F.bO(z,b,c,d,a,0,0,1,2)
F.bO(z,b,c,d,a,-1,0,0,0)
F.bO(z,b,c,d,a,0,-1,0,0)
F.bO(z,b,c,d,a,0,0,-1,3)
z.aj()
return z},
cy:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bO:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.af,P.p,P.p]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.E(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.E(t+h,s+f,r+g)
z.b=q
p=new V.E(t-h,s-f,r-g)
z.c=p
o=new V.E(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cy(y)
k=F.cy(z.b)
j=F.dD(d,e,new F.m5(z,F.cy(z.c),F.cy(z.d),k,l,c),b)
if(j!=null)a.aZ(j)},
fR:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.h(d,{func:1,ret:P.p,args:[P.p]})
if(e<3)return
z=F.d7()
y=b?-1:1
x=-6.283185307179586/e
w=H.d([],[F.af])
v=z.a
u=new V.E(0,0,y)
u=u.u(0,Math.sqrt(u.D(u)))
C.a.h(w,v.h8(new V.bF(a,-1,-1,-1),new V.b1(1,1,1,1),new V.W(0,0,c),new V.E(0,0,y),new V.U(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.q(p)
o=new V.E(r,q,y).u(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c8(new V.bF(a,-1,-1,-1),null,new V.b1(n,l,m,1),new V.W(r*p,q*p,c),new V.E(0,0,y),new V.U(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.h6(w)
return z},
du:function(a,b,c,d,e,f){return F.ms(b,c,d,new F.mr(a,f),e)},
ms:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
z=F.dD(c,e,new F.mu(d),null)
if(z==null)return
z.aj()
z.bW()
if(b)z.aZ(F.fR(3,!1,1,new F.mv(d),e))
if(a)z.aZ(F.fR(1,!0,-1,new F.mw(d),e))
return z},
n1:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.n2()
y=F.dt(a,null,new F.n3(z),c)
y.bW()
return y},
h5:function(a,b,c,d){return F.fQ(c,a,d,b,new F.n5())},
mL:function(a,b,c,d,e,f){return F.fQ(d,a,e,b,new F.mM(f,c))},
fQ:function(a,b,c,d,e){var z=F.dD(a,b,new F.mt(H.h(e,{func:1,ret:V.W,args:[P.p]}),d,b,c),null)
if(z==null)return
z.aj()
z.bW()
return z},
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.af,P.p,P.p]})
if(a<1)return
if(b<1)return
z=F.d7()
y=H.d([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c8(null,null,new V.b1(u,0,0,1),null,null,new V.U(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c3(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c8(null,null,new V.b1(o,n,m,1),null,null,new V.U(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c3(d))}}z.d.h7(a+1,b+1,y)
return z},
m5:{"^":"n:9;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cj(z.b,b).cj(z.d.cj(z.c,b),c)
a.sa_(0,new V.W(y.a,y.b,y.c))
a.se2(y.u(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
a.sd9(new V.bF(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mr:{"^":"n:26;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mu:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.q(v)
y=-y*v
u=x*v
a.sa_(0,new V.W(y,u,w))
u=new V.E(y,u,w)
a.se2(u.u(0,Math.sqrt(u.D(u))))
a.sd9(new V.bF(1-c,2+c,-1,-1))}},
mv:{"^":"n:19;a",
$1:function(a){return this.a.$2(a,1)}},
mw:{"^":"n:19;a",
$1:function(a){return this.a.$2(1-a,0)}},
n2:{"^":"n:26;",
$2:function(a,b){return 0}},
n3:{"^":"n:9;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.q(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.u(0,Math.sqrt(x.D(x))).k(0,1+z)
a.sa_(0,new V.W(z.a,z.b,z.c))}},
n5:{"^":"n:17;",
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)}},
mM:{"^":"n:17;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.W(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mt:{"^":"n:9;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dE(y.$1(z),x)
x=J.dE(y.$1(z+3.141592653589793/this.c),x).O(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.D(x)))
u=new V.E(1,0,0)
y=v.at(!v.t(0,u)?new V.E(0,0,1):u)
t=y.u(0,Math.sqrt(y.D(y)))
y=t.at(v)
u=y.u(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa_(0,w.B(0,new V.W(y.a-x.a,y.b-x.b,y.c-x.c)))}},
al:{"^":"b;0a,0b,0c,0d,0e",
au:function(){if(!this.gaV()){C.a.K(this.a.a.d.b,this)
this.a.a.V()}this.bR()
this.bS()
this.fn()},
fw:function(a){this.a=a
C.a.h(a.d.b,this)},
fz:function(a){this.b=a
C.a.h(a.d.c,this)},
fA:function(a){this.c=a
C.a.h(a.d.d,this)},
bR:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
bS:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
fn:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
eC:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dN())return
return v.u(0,Math.sqrt(v.D(v)))},
eF:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.O(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.D(z)))
z=w.O(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.at(z.u(0,Math.sqrt(z.D(z))))
return z.u(0,Math.sqrt(z.D(z)))},
c0:function(){if(this.d!=null)return!0
var z=this.eC()
if(z==null){z=this.eF()
if(z==null)return!1}this.d=z
this.a.a.V()
return!0},
eB:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dN())return
return v.u(0,Math.sqrt(v.D(v)))},
eE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.O(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.O(0,u).k(0,l).B(0,u).O(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.D(z)))
z=k.at(m)
z=z.u(0,Math.sqrt(z.D(z))).at(k)
m=z.u(0,Math.sqrt(z.D(z)))}return m},
bZ:function(){if(this.e!=null)return!0
var z=this.eB()
if(z==null){z=this.eE()
if(z==null)return!1}this.e=z
this.a.a.V()
return!0},
aW:function(){var z,y
z=this.b
this.b=this.c
this.c=z
y=this.d
if(y!=null)this.d=y.N(0)
y=this.e
if(y!=null)this.e=y.N(0)
this.a.a.V()},
ghg:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z,y
if(this.gaV())return a+"disposed"
z=a+C.b.a9(J.a9(this.a.e),0)+", "+C.b.a9(J.a9(this.b.e),0)+", "+C.b.a9(J.a9(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.A("")},
p:{
by:function(a,b,c){var z,y,x
z=new F.al()
y=a.a
if(y==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.v("May not create a face with vertices attached to different shapes."))
z.fw(a)
z.fz(b)
z.fA(c)
C.a.h(z.a.a.d.b,z)
z.a.a.V()
return z}}},
hM:{"^":"b;"},
jg:{"^":"hM;",
aY:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.v()
z=z.e
y=c.c
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
cY:{"^":"b;0a,0b",
au:function(){if(!this.gaV()){C.a.K(this.a.a.c.b,this)
this.a.a.V()}this.bR()
this.bS()},
bR:function(){var z=this.a
if(z!=null){C.a.K(z.c.b,this)
this.a=null}},
bS:function(){var z=this.b
if(z!=null){C.a.K(z.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){if(this.gaV())return a+"disposed"
return a+C.b.a9(J.a9(this.a.e),0)+", "+C.b.a9(J.a9(this.b.e),0)},
J:function(){return this.A("")}},
i2:{"^":"b;"},
jD:{"^":"i2;",
aY:function(a,b,c){var z,y
z=b.a
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.v()
z=z.e
y=c.b
y.a.a.v()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.v()
z=z.e
y=c.a
y.a.a.v()
y=y.e
return z==null?y==null:z===y}else return!1}}},
d4:{"^":"b;0a",
au:function(){var z=this.a
if(z!=null){C.a.K(z.a.b.b,this)
this.a.a.V()}this.fm()},
fm:function(){var z=this.a
if(z!=null){C.a.K(z.b.b,this)
this.a=null}},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a9(J.a9(z.e),0)},
J:function(){return this.A("")}},
ez:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
aZ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.v()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hi())}this.a.v()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d4()
if(r.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.G(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cY()
s=p.a
if(s==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.v("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.G(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.by(p,o,l)}z=this.e
if(!(z==null))z.af(0)},
aj:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.aj()||!1
if(!this.a.aj())y=!1
z=this.e
if(!(z==null))z.af(0)
return y},
eN:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.af],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.aY(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hI:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.af],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.d([],z)
t=H.d([],x)
if(this.eN(a,v,y,u,t))b.aZ(u)}this.a.v()
this.c.cp()
this.d.cp()
this.b.i0()
this.c.cq(new F.jD())
this.d.cq(new F.jg())
z=this.e
if(!(z==null))z.af(0)},
ha:function(a){this.hI(new F.kc(),new F.iB())},
bW:function(){return this.ha(null)},
aW:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.c
this.d.aW()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.e(z,y)
x=z[y]
z=x.r
if(z!=null)x.sdS(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).u(0,Math.sqrt(w*w+v*v+z*z))
if(!J.P(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.G(null)}}}}z=this.e
if(!(z==null))z.af(0)},
he:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aP()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gcz(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.p
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dO])
for(r=0,q=0;q<w;++q){p=b.hb(q)
o=p.gcz(p)
C.a.m(s,q,new Z.dO(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hD(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bo(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dP(new Z.ff(34962,j),s,b)
i.b=H.d([],[Z.ci])
if(this.b.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ci(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ci(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.v()
C.a.h(h,g.e)}f=Z.dh(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ci(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.C(z,"\n")},
a3:function(a){var z=this.e
if(!(z==null))z.G(a)},
V:function(){return this.a3(null)},
p:{
d7:function(){var z,y
z=new F.ez()
y=new F.k7(z)
y.b=!1
y.c=H.d([],[F.af])
z.a=y
y=new F.jb(z)
y.b=H.d([],[F.d4])
z.b=y
y=new F.ja(z)
y.b=H.d([],[F.cY])
z.c=y
y=new F.j9(z)
y.b=H.d([],[F.al])
z.d=y
z.e=null
return z}}},
j9:{"^":"b;a,0b",
h6:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.af],"$asc")
z=H.d([],[F.al])
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
C.a.h(z,F.by(x,v,u))}}return z},
h7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.af],"$asc")
z=H.d([],[F.al])
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
gl:function(a){return this.b.length},
cq:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aY(0,v,t)){v.au()
break}}}}},
cp:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.ghg(x)
if(y)x.au()}},
aj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].c0())x=!1
return x},
c_:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].bZ())x=!1
return x},
aW:function(){var z,y,x
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].aW()},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
ja:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cq:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aY(0,v,t)){v.au()
break}}}}},
cp:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.au()}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.C(z,"\n")},
J:function(){return this.A("")}},
jb:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i0:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.au()}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c3:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c8(this.cx,x,u,z,y,w,v,a,t)},
hi:function(){return this.c3(null)},
sa_:function(a,b){var z
if(!J.P(this.f,b)){this.f=b
z=this.a
if(z!=null)z.V()}},
sdS:function(a){var z
a=a.u(0,Math.sqrt(a.D(a)))
if(!J.P(this.r,a)){this.r=a
z=this.a
if(z!=null)z.V()}},
se2:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.V()}},
sd9:function(a){var z
if(!J.P(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.V()}},
hD:function(a){var z,y
z=J.I(a)
if(z.t(a,$.$get$aP())){z=this.f
y=[P.p]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aO())){z=this.r
y=[P.p]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aN())){z=this.x
y=[P.p]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aQ())){z=this.y
y=[P.p]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(z.t(a,$.$get$aR())){z=this.z
y=[P.p]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bI())){z=this.Q
y=[P.p]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bJ())){z=this.Q
y=[P.p]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$bm()))return H.d([this.ch],[P.p])
else if(z.t(a,$.$get$aM())){z=this.cx
y=[P.p]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.p])},
c0:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.I(0,new F.kh(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.af(0)}return!0},
bZ:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.I(0,new F.kg(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.af(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
A:function(a){var z,y,x
z=H.d([],[P.i])
C.a.h(z,C.b.a9(J.a9(this.e),0))
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
C.a.h(z,V.Q(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.C(z,", ")
return a+"{"+x+"}"},
J:function(){return this.A("")},
p:{
c8:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.kf(z)
y.b=H.d([],[F.d4])
z.b=y
y=new F.kb(z)
x=[F.cY]
y.b=H.d([],x)
y.c=H.d([],x)
z.c=y
y=new F.k8(z)
x=[F.al]
y.b=H.d([],x)
y.c=H.d([],x)
y.d=H.d([],x)
z.d=y
h=$.$get$fc()
z.e=0
y=$.$get$aP()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aQ().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$fd().a)!==0?c:null
z.ch=(x&$.$get$bm().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
kh:{"^":"n:8;a",
$1:function(a){var z,y
H.f(a,"$isal")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
kg:{"^":"n:8;a",
$1:function(a){var z,y
H.f(a,"$isal")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
k7:{"^":"b;a,0b,0c",
v:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.V()
return!0},
h9:function(a,b,c,d,e,f,g,h,i){var z=F.c8(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
h8:function(a,b,c,d,e,f){return this.h9(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
aj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].c0()
return!0},
c_:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].bZ()
return!0},
hf:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
this.v()
z=H.d([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
k8:{"^":"b;a,0b,0c,0d",
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
I:function(a,b){H.h(b,{func:1,ret:-1,args:[F.al]})
C.a.I(this.b,b)
C.a.I(this.c,new F.k9(this,b))
C.a.I(this.d,new F.ka(this,b))},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
k9:{"^":"n:8;a,b",
$1:function(a){H.f(a,"$isal")
if(!J.P(a.a,this.a))this.b.$1(a)}},
ka:{"^":"n:8;a,b",
$1:function(a){var z
H.f(a,"$isal")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
kb:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}},
kd:{"^":"b;"},
kc:{"^":"kd;",
aY:function(a,b,c){return J.P(b.f,c.f)}},
ke:{"^":"b;"},
iB:{"^":"ke;",
aZ:function(a){var z,y,x,w
H.w(a,"$isc",[F.af],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.u(0,Math.sqrt(z.D(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].sdS(z)
return}},
kf:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
A:function(a){var z,y,x,w
z=H.d([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].A(a))
return C.a.C(z,"\n")},
J:function(){return this.A("")}}}],["","",,O,{"^":"",io:{"^":"cq;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.R()
this.dy=z}return z},
ac:[function(a){var z
H.f(a,"$ist")
z=this.dy
if(!(z==null))z.G(a)},function(){return this.ac(null)},"io","$1","$0","gew",0,2,1],
fs:[function(a){H.f(a,"$ist")
this.a=null
this.ac(a)},function(){return this.fs(null)},"iW","$1","$0","gfq",0,2,1],
iy:[function(a,b){var z=V.au
z=new D.cj(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.ac(z)},"$2","geX",8,0,16],
iz:[function(a,b){var z=V.au
z=new D.ck(a,H.w(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.ac(z)},"$2","geY",8,0,16],
cK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a1(z.e.length+3,4)*4
x=C.e.a1(z.f.length+3,4)*4
w=C.e.a1(z.r.length+3,4)*4
v=C.e.a1(z.x.length+3,4)*4
u=C.e.a1(z.y.length+3,4)*4
t=C.e.a1(z.z.length+3,4)*4
s=C.e.a1(this.e.a.length+3,4)*4
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
a6=$.$get$aP()
if(c){z=$.$get$aO()
a6=new Z.bl(a6.a|z.a)}if(b){z=$.$get$aN()
a6=new Z.bl(a6.a|z.a)}if(a){z=$.$get$aQ()
a6=new Z.bl(a6.a|z.a)}if(a0){z=$.$get$aR()
a6=new Z.bl(a6.a|z.a)}if(a2){z=$.$get$aM()
a6=new Z.bl(a6.a|z.a)}return new A.ir(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
S:function(a,b){H.w(a,"$isc",[T.da],"$asc")
if(b!=null)if(!C.a.aT(a,b)){b.a=a.length
C.a.h(a,b)}},
an:function(a,b){var z,y,x,w,v,u,t
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
y.a=new V.W(0,0,0)
y.b=new V.E(0,0,1)
y.c=new V.E(0,1,0)
y.d=new V.E(-1,0,0)
x=y.e
if(x!=null){w=x.aO(0,b,y)
if(w!=null){y.a=w.aN(y.a)
x=w.b5(y.b)
v=x.a
u=x.b
t=x.c
y.b=x.u(0,Math.sqrt(v*v+u*u+t*t))
t=w.b5(y.c)
u=t.a
v=t.b
x=t.c
y.c=t.u(0,Math.sqrt(u*u+v*v+x*x))
x=w.b5(y.d)
v=x.a
u=x.b
t=x.c
y.d=x.u(0,Math.sqrt(v*v+u*u+t*t))}}}},
i2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cK()
y=a.fr.j(0,z.av)
if(y==null){y=A.im(z,a.a)
x=y.b
if(x.length===0)H.r(P.v("May not cache a shader with no name."))
if(a.fr.bh(0,x))H.r(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aH
z=b.e
if(!(z instanceof Z.dP)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.aj()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.c_()
t.a.c_()
t=t.e
if(!(t==null))t.af(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hf()
s=s.e
if(!(s==null))s.af(0)}q=b.d.he(new Z.ki(a.a),v)
q.aI($.$get$aP()).e=this.a.y.c
if(z)q.aI($.$get$aO()).e=this.a.Q.c
if(u)q.aI($.$get$aN()).e=this.a.z.c
if(w.rx)q.aI($.$get$aQ()).e=this.a.ch.c
if(t)q.aI($.$get$aR()).e=this.a.cx.c
if(w.x1)q.aI($.$get$aM()).e=this.a.cy.c
b.e=q}z=T.da
p=H.d([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.hp()
if(w.fx){u=this.a
t=a.dx
t=t.gU(t)
u=u.db
u.toString
u.ag(t.ab(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gU(t)
s=a.dx
s=t.k(0,s.gU(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ag(t.ab(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghZ()
s=a.dx
s=t.k(0,s.gU(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ag(t.ab(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ag(t.ab(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ag(t.ab(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ag(C.t.ab(t,!0))}if(w.aG>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.p],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.e(s,n)
s=s[n]
t.toString
H.f(s,"$isau")
t=t.k3
if(n>=t.length)return H.e(t,n)
t=t[n]
m=new Float32Array(H.bo(H.w(s.ab(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.i:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.S(p,this.f.d)
u=this.a
t=this.f.d
u.ad(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.f.e)
u=this.a
t=this.f.e
u.a7(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.i:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.S(p,this.r.d)
u=this.a
t=this.r.d
u.ad(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.r.e)
u=this.a
t=this.r.e
u.a7(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.i:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.S(p,this.x.d)
u=this.a
t=this.x.d
u.ad(u.aG,u.aH,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.x.e)
u=this.a
t=this.x.e
u.a7(u.av,u.aH,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.i:u=this.a
t=this.y.f
u=u.bi
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.S(p,this.y.d)
u=this.a
t=this.y.d
u.ad(u.df,u.bj,t)
t=this.a
u=this.y.f
t=t.bi
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.S(p,this.y.e)
u=this.a
t=this.y.e
u.a7(u.dg,u.bj,t)
t=this.a
u=this.y.f
t=t.bi
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bk
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bm
t.a.uniform1f(t.d,r)
break
case C.f:this.S(p,this.z.d)
u=this.a
t=this.z.d
u.ad(u.dh,u.bl,t)
t=this.a
u=this.z.f
t=t.bk
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bm
u.a.uniform1f(u.d,r)
break
case C.h:this.S(p,this.z.e)
u=this.a
t=this.z.e
u.a7(u.di,u.bl,t)
t=this.a
u=this.z.f
t=t.bk
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bm
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dv
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.c8
if(k>=s.length)return H.e(s,k)
h=s[k]
s=l.b5(i.gc4(i))
r=s.a
g=s.b
f=s.c
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.gae(i)
g=h.c
r=f.gbw()
s=f.gb6()
f=f.gbf()
g.a.uniform3f(g.d,r,s,f);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dw
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.c9
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gcm(i)
r=h.b
g=s.ge8(s)
f=s.ge9(s)
s=s.gea(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aN(i.gcm(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gae(i)
f=h.d
g=s.gbw()
r=s.gb6()
s=s.gbf()
f.a.uniform3f(f.d,g,r,s)
s=i.gd6()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gd7()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gd8()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dz
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.ca
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gcm(i)
r=h.b
g=s.ge8(s)
f=s.ge9(s)
s=s.gea(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gc4(i).j3()
f=h.c
g=s.gc5(s)
r=s.gc6(s)
s=s.gc7()
f.a.uniform3f(f.d,g,r,s)
s=l.aN(i.gcm(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gae(i)
r=h.e
g=s.gbw()
f=s.gb6()
s=s.gbf()
r.a.uniform3f(r.d,g,f,s)
s=i.gj0()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gj_()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gd6()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gd7()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gd8()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dA
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.cb
if(k>=r.length)return H.e(r,k)
h=r[k]
r=i.gct()
H.w(p,"$isc",s,"$asc")
if(!C.a.aT(p,r)){r.scQ(p.length)
C.a.h(p,r)}r=i.gc4(i)
g=h.d
f=r.gc5(r)
e=r.gc6(r)
r=r.gc7()
g.a.uniform3f(g.d,f,e,r)
r=i.gja()
e=h.b
f=r.gc5(r)
g=r.gc6(r)
r=r.gc7()
e.a.uniform3f(e.d,f,g,r)
r=i.gbx(i)
g=h.c
f=r.gc5(r)
e=r.gc6(r)
r=r.gc7()
g.a.uniform3f(g.d,f,e,r)
r=l.b5(i.gc4(i))
e=r.a
f=r.b
g=r.c
g=r.u(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gae(i)
f=h.f
e=g.gbw()
r=g.gb6()
g=g.gbf()
f.a.uniform3f(f.d,e,r,g)
g=i.gct()
r=g.gdO(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gir()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gcQ())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dB
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.y,t=u.length,s=[P.p],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.cc
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gct()
H.w(p,"$isc",r,"$asc")
if(!C.a.aT(p,g)){g.scQ(p.length)
C.a.h(p,g)}d=l.k(0,i.gU(i))
g=i.gU(i).aN(new V.W(0,0,0))
f=h.b
e=g.ge8(g)
c=g.ge9(g)
g=g.gea(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aN(new V.W(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dM(0)
c=h.d
m=new Float32Array(H.bo(H.w(new V.cm(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ab(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gae(i)
g=h.e
e=c.gbw()
f=c.gb6()
c=c.gbf()
g.a.uniform3f(g.d,e,f,c)
c=i.gct()
g=c.gdO(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gdO(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gj1(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gd6()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gd7()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gd8()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dC
u.a.uniform1i(u.d,o)
u=a.db
l=u.gU(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cd
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.r
H.w(p,"$isc",z,"$asc")
if(s!=null)if(!C.a.aT(p,s)){s.a=p.length
C.a.h(p,s)}s=i.a
r=h.b
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.b
r=h.c
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.c
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.d
r=h.e
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=l.aN(i.a)
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.r
r=s!=null
if(!r||!s.d){s=h.x
s.a.uniform1i(s.d,1)}else{g=h.r
r=!r||!s.d
f=g.a
g=g.d
if(r)f.uniform1i(g,0)
else f.uniform1i(g,s.a)
s=h.x
s.a.uniform1i(s.d,0)}s=i.f
r=h.y
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.x
r=h.z
r.a.uniform1f(r.d,s)
s=i.y
r=h.Q
r.a.uniform1f(r.d,s)
s=i.ch
r=h.ch
r.a.uniform1f(r.d,s)
s=i.cx
r=h.cx
r.a.uniform1f(r.d,s)
s=i.cy
r=h.cy
r.a.uniform1f(r.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.S(p,this.Q.d)
z=this.a
u=this.Q.d
z.ad(z.dj,z.bn,u)
break
case C.h:this.S(p,this.Q.e)
z=this.a
u=this.Q.e
z.a7(z.dk,z.bn,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gU(u).dM(0)
a.Q=u}z=z.fy
z.toString
z.ag(u.ab(0,!0))}if(w.dy){this.S(p,this.ch)
z=this.a
u=this.ch
z.a7(z.dl,z.dm,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bo
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.S(p,this.cx.d)
z=this.a
u=this.cx.d
z.ad(z.dn,z.bp,u)
u=this.a
z=this.cx.f
u=u.bo
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.S(p,this.cx.e)
z=this.a
u=this.cx.e
z.a7(z.dq,z.bp,u)
u=this.a
z=this.cx.f
u=u.bo
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.br
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bq
u.a.uniform1f(u.d,s)
break
case C.f:this.S(p,this.cy.d)
z=this.a
u=this.cy.d
z.ad(z.dr,z.bs,u)
u=this.a
z=this.cy.f
u=u.br
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bq
z.a.uniform1f(z.d,s)
break
case C.h:this.S(p,this.cy.e)
z=this.a
u=this.cy.e
z.a7(z.ds,z.bs,u)
u=this.a
z=this.cy.f
u=u.br
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bq
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bt
z.a.uniform1f(z.d,t)
break
case C.f:this.S(p,this.db.d)
z=this.a
t=this.db.d
z.ad(z.dt,z.bu,t)
t=this.a
z=this.db.f
t=t.bt
t.a.uniform1f(t.d,z)
break
case C.h:this.S(p,this.db.e)
z=this.a
t=this.db.e
z.a7(z.du,z.bu,t)
t=this.a
z=this.db.f
t=t.bt
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].aS(a)
z=b.e
z.aS(a)
z.aL(a)
z.ij(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.hn()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cK().av},
p:{
el:function(){var z,y,x,w
z=new O.io()
y=O.cP(V.au)
z.e=y
y.b8(z.geX(),z.geY())
y=new O.b8(z,"emission")
y.c=C.c
y.f=new V.a0(0,0,0)
z.f=y
y=new O.b8(z,"ambient")
y.c=C.c
y.f=new V.a0(0,0,0)
z.r=y
y=new O.b8(z,"diffuse")
y.c=C.c
y.f=new V.a0(0,0,0)
z.x=y
y=new O.b8(z,"invDiffuse")
y.c=C.c
y.f=new V.a0(0,0,0)
z.y=y
y=new O.it(z,"specular")
y.c=C.c
y.f=new V.a0(0,0,0)
y.ch=100
z.z=y
y=new O.iq(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.b8(z,"reflect")
y.c=C.c
y.f=new V.a0(0,0,0)
z.cx=y
y=new O.is(z,"refract")
y.c=C.c
y.f=new V.a0(0,0,0)
y.ch=1
z.cy=y
y=new O.ip(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.i1()
y.bD(D.a2)
y.e=H.d([],[D.hC])
y.f=H.d([],[D.iG])
y.r=H.d([],[D.jh])
y.x=H.d([],[D.js])
y.y=H.d([],[D.jt])
y.z=H.d([],[D.cr])
y.Q=null
y.ch=null
y.cw(y.geW(),y.gff(),y.gfh())
z.dx=y
x=y.Q
if(x==null){x=D.R()
y.Q=x
y=x}else y=x
x={func:1,ret:-1,args:[D.t]}
w=H.h(z.gfq(),x)
C.a.h(y.a,w)
w=z.dx
y=w.ch
if(y==null){y=D.R()
w.ch=y}x=H.h(z.gew(),x)
C.a.h(y.a,x)
z.dy=null
return z}}},ip:{"^":"d_;0f,a,b,0c,0d,0e"},d_:{"^":"b;",
bc:["ek",function(){}]},iq:{"^":"d_;a,b,0c,0d,0e"},b8:{"^":"d_;0f,a,b,0c,0d,0e",
cX:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.L(this.b+".color",z,a,this,[V.a0])
y.b=!0
this.a.ac(y)}},
bc:["bC",function(){this.ek()
this.cX(new V.a0(1,1,1))}],
sae:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bc()
z=this.a
z.a=null
z.ac(null)}this.cX(b)}},is:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
fv:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.L(this.b+".refraction",y,a,this,[P.p])
z.b=!0
this.a.ac(z)}},
bc:function(){this.bC()
this.fv(1)}},it:{"^":"b8;0ch,0f,a,b,0c,0d,0e",
bT:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.L(this.b+".shininess",y,a,this,[P.p])
z.b=!0
this.a.ac(z)}},
bc:function(){this.bC()
this.bT(100)}},cq:{"^":"b;"}}],["","",,T,{"^":"",da:{"^":"cJ;"},eH:{"^":"da;"},jp:{"^":"eH;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.R()
this.y=z}return z},
aS:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}}},jq:{"^":"b;a,0b,0c,0d,0e",
hG:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.jp()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.aa
W.Z(x,"load",H.h(new T.jr(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hF:function(a){return this.hG(a,!1,!1,!1,!1)},
ft:function(a,b,c){var z,y,x,w
b=V.dB(b,2)
z=V.dB(a.width,2)
y=V.dB(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cO(null,null)
x.width=z
x.height=y
w=H.f(C.l.ec(x,"2d"),"$isdS")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mq(w.getImageData(0,0,x.width,x.height))}}},jr:{"^":"n:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.ft(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.ia(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.ho()}++x.e}}}],["","",,V,{"^":"",he:{"^":"b;",
aX:function(a,b){return!0},
i:function(a){return"all"},
$isc2:1},c2:{"^":"b;"},ek:{"^":"b;",
aX:["ej",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].aX(0,b))return!0
return!1}],
i:["cA",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc2:1},bD:{"^":"ek;0a",
aX:function(a,b){return!this.ej(0,b)},
i:function(a){return"!["+this.cA(0)+"]"}},j7:{"^":"b;0a",
eo:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.m,P.ag])
for(y=new H.ei(a,a.gl(a),0,[H.ay(a,"x",0)]);y.E();)z.m(0,y.d,!0)
this.a=z},
aX:function(a,b){return this.a.bh(0,b)},
i:function(a){var z=this.a
return P.c5(z.gal(z),0,null)},
$isc2:1,
p:{
a8:function(a){var z=new V.j7()
z.eo(a)
return z}}},eB:{"^":"b;a,b,0c,0d",
ghJ:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eO(this.a.L(0,b))
w.a=H.d([],[V.c2])
w.c=!1
C.a.h(this.c,w)
return w},
hr:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.aX(0,a))return w}return},
i:function(a){return this.b}},eL:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h3(this.b,"\n","\\n")
y=H.h3(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eM:{"^":"b;a,b,0c",
i:function(a){return this.b}},jy:{"^":"b;0a,0b,0c",
L:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eB(this,b)
z.c=H.d([],[V.eO])
this.a.m(0,b,z)}return z},
b3:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eM(this,a)
y=P.i
z.c=new H.aV(0,0,[y,y])
this.b.m(0,a,z)}return z},
ii:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eL])
y=this.c
x=[P.m]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.hr(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c5(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghJ(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c5(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eL(o==null?p.b:o,q,t)}++t}}}},eO:{"^":"ek;b,0c,0a",
i:function(a){return this.b.b+": "+this.cA(0)}}}],["","",,X,{"^":"",dR:{"^":"b;",$isaJ:1},hR:{"^":"eF;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z}},iE:{"^":"b;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.R()
this.f=z}return z},
aP:[function(a){var z
H.f(a,"$ist")
z=this.f
if(!(z==null))z.G(a)},function(){return this.aP(null)},"ip","$1","$0","gcC",0,2,1],
saK:function(a){var z,y,x
if(!J.P(this.b,a)){z=this.b
if(z!=null){z=z.gw()
z.toString
y=H.h(this.gcC(),{func:1,ret:-1,args:[D.t]})
C.a.K(z.a,y)}x=this.b
this.b=a
if(a!=null){z=a.gw()
z.toString
y=H.h(this.gcC(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.L("mover",x,this.b,this,[U.ai])
z.b=!0
this.aP(z)}},
$isaJ:1,
$isdR:1},eF:{"^":"b;"}}],["","",,V,{"^":"",
n_:function(a){P.jx(C.G,new V.n0(a))},
n0:{"^":"n:49;a",
$1:function(a){H.f(a,"$isbi")
P.dC(C.d.e4(this.a.ghv(),2)+" fps")}},
iS:{"^":"b;a,b,0c",
d3:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.f7().gco().j(0,H.l(z))
if(y==null)if(d){c.$0()
this.d1(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dH(this.c).h(0,v)
t=W.hT("radio")
t.checked=x
t.name=z
z=W.aa
W.Z(t,"change",H.h(new V.iT(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.dH(this.c).h(0,w.createElement("br"))},
aR:function(a,b,c){return this.d3(a,b,c,!1)},
d1:function(a){var z,y,x,w,v
z=P.f7()
y=P.i
x=P.i8(z.gco(),y,y)
x.m(0,this.a,a)
w=z.e0(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.lm([],[]).cu(""),"",v)}},
iT:{"^":"n:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.d1(this.d)}}},
jc:{"^":"b;0a,0b",
eq:function(a,b){var z,y,x,w,v,u,t
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
W.Z(z,"scroll",H.h(new V.jf(x),{func:1,ret:-1,args:[t]}),!1,t)},
d5:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.i],"$asc")
this.fC()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ii(C.a.hB(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.h2(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cx(C.S,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.l(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
h5:function(a){var z,y,x,w,v,u,t
H.w(a,"$isc",[P.i],"$asc")
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
x=H.f(w.insertCell(-1),"$isd9").style
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
t=H.f(w.insertCell(-1),"$isd9")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fC:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jy()
y=P.i
z.a=new H.aV(0,0,[y,V.eB])
z.b=new H.aV(0,0,[y,V.eM])
z.c=z.L(0,"Start")
y=z.L(0,"Start").C(0,"Bold")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").C(0,"Bold")
x=new V.bD()
w=[V.c2]
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").C(0,"BoldEnd")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").C(0,"Italic")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").C(0,"Italic")
x=new V.bD()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").C(0,"ItalicEnd")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").C(0,"Code")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").C(0,"Code")
x=new V.bD()
x.a=H.d([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").C(0,"CodeEnd")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").C(0,"LinkHead")
x=V.a8(new H.a3("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").C(0,"LinkTail")
x=V.a8(new H.a3("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").C(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").C(0,"LinkHead")
y=new V.bD()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").C(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").C(0,"LinkTail")
y=new V.bD()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").C(0,"Other").a,new V.he())
x=z.L(0,"Other").C(0,"Other")
y=new V.bD()
y.a=H.d([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.b3("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.b3("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.b3("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.b3("Link")
x=z.L(0,"Other")
x.d=x.a.b3("Other")
this.b=z},
p:{
jd:function(a,b){var z=new V.jc()
z.eq(a,!0)
return z}}},
jf:{"^":"n:14;a",
$1:function(a){P.eJ(C.q,new V.je(this.a))}},
je:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.d.aa(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}}}],["","",,L,{"^":"",
fZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.jd("Test 025",!0)
y=W.cO(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.d5(H.d(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],x))
z.h5(H.d(["shapes"],x))
z.d5(H.d(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.jv(w,!0,!0,!0,!1)
u=U.cS(null)
u.h(0,U.bX(V.eo(0,0,-2.5)))
u.h(0,U.fa(!1,!0,v.r,!1,!1,!1,null,!1))
t=new V.a0(1,1,1)
z=v.f.hF("../resources/Test.png")
s=new D.cr()
s.z=0.6
s.Q=1
s.f=new V.a0(1,1,1)
s.z=1.0471975511965976
s.ch=1
s.cx=0
s.cy=0
s.a=new V.W(0,0,0)
s.b=new V.E(0,0,1)
s.c=new V.E(0,1,0)
s.d=new V.E(-1,0,0)
r=s.e
s.e=u
q=u.gw()
q.toString
p=H.h(s.gbO(),{func:1,ret:-1,args:[D.t]})
C.a.h(q.a,p)
q=new D.L("mover",r,s.e,s,[U.ai])
q.b=!0
s.a2(q)
if(!s.f.t(0,t)){r=s.f
s.f=t
q=new D.L("color",r,t,s,[V.a0])
q.b=!0
s.a2(q)}q=s.r
if(q!==z){if(q!=null){q=q.gw()
q.toString
p=H.h(s.gbO(),{func:1,ret:-1,args:[D.t]})
C.a.K(q.a,p)}r=s.r
s.r=z
z=z.gw()
z.toString
q=H.h(s.gbO(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,q)
z=new D.L("texture",r,s.r,s,[T.eH])
z.b=!0
s.a2(z)}z=s.z
if(!$.o.$2(z,0.5)){r=s.z
s.z=0.5
z=1/(Math.sqrt(2)*Math.tan(s.z))
s.x=z
s.y=z*s.Q
z=new D.L("fov",r,s.z,s,[P.p])
z.b=!0
s.a2(z)}z=s.Q
if(!$.o.$2(z,1)){r=s.Q
s.Q=1
z=s.x
if(typeof z!=="number")return z.k()
s.y=z
z=new D.L("ratio",r,1,s,[P.p])
z.b=!0
s.a2(z)}z=s.ch
if(!$.o.$2(z,0.5)){r=s.ch
s.ch=0.5
z=new D.L("attenuation0",r,0.5,s,[P.p])
z.b=!0
s.a2(z)}z=s.cx
if(!$.o.$2(z,0.05)){r=s.cx
s.cx=0.05
z=new D.L("attenuation1",r,0.05,s,[P.p])
z.b=!0
s.a2(z)}z=s.cy
if(!$.o.$2(z,0.05)){r=s.cy
s.cy=0.05
z=new D.L("attenuation2",r,0.05,s,[P.p])
z.b=!0
s.a2(z)}o=O.el()
o.dx.h(0,s)
z=o.r
z.sae(0,new V.a0(0.05,0.05,0.05))
z=o.x
z.sae(0,new V.a0(0.7,0.7,0.7))
z=o.z
z.sae(0,new V.a0(0.3,0.3,0.3))
z=o.z
if(z.c===C.c){z.c=C.i
z.bC()
z.bT(100)
q=z.a
q.a=null
q.ac(null)}z.bT(100)
n=E.cQ(null,!0,null,"",null,null)
n.sa4(0,F.h5(30,1,15,0.5))
m=E.cQ(null,!0,null,"",null,null)
m.saK(U.bX(V.en(3,3,3,1)))
z=F.dt(1,null,null,1)
z.aW()
m.sa4(0,z)
l=U.cS(null)
l.h(0,U.fa(!1,!1,v.r,!1,!1,!1,null,!1))
l.h(0,U.bX(V.em(3.141592653589793)))
l.h(0,U.bX(V.eo(0,0,5)))
k=E.cQ(null,!0,null,"",null,null)
z=U.cS(null)
z.h(0,U.bX(V.en(0.1,0.1,0.1,1)))
z.h(0,u)
k.saK(z)
k.sa4(0,F.du(0,!1,!0,1,40,1))
z=O.el()
z.f.sae(0,new V.a0(1,1,1))
k.sb1(z)
z=new M.hJ()
q=O.cP(E.aH)
z.d=q
q.b8(z.gf_(),z.gf0())
z.e=null
z.f=null
z.r=null
z.x=null
j=new X.iE()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saK(null)
q=j.c
if(!$.o.$2(q,1.0471975511965976)){r=j.c
j.c=1.0471975511965976
q=new D.L("fov",r,1.0471975511965976,j,[P.p])
q.b=!0
j.aP(q)}q=j.d
if(!$.o.$2(q,0.1)){r=j.d
j.d=0.1
q=new D.L("near",r,0.1,j,[P.p])
q.b=!0
j.aP(q)}q=j.e
if(!$.o.$2(q,2000)){r=j.e
j.e=2000
q=new D.L("far",r,2000,j,[P.p])
q.b=!0
j.aP(q)}q=z.a
if(q!==j){if(q!=null){q=q.gw()
q.toString
p=H.h(z.gah(),{func:1,ret:-1,args:[D.t]})
C.a.K(q.a,p)}r=z.a
z.a=j
q=j.gw()
q.toString
p=H.h(z.gah(),{func:1,ret:-1,args:[D.t]})
C.a.h(q.a,p)
q=new D.L("camera",r,z.a,z,[X.dR])
q.b=!0
z.aB(q)}i=new X.hR()
q=new V.b1(0,0,0,1)
i.a=q
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
q=V.ex(0,0,1,1)
i.r=q
q=z.b
if(q!==i){if(q!=null){q=q.gw()
q.toString
p=H.h(z.gah(),{func:1,ret:-1,args:[D.t]})
C.a.K(q.a,p)}r=z.b
z.b=i
q=i.gw()
q.toString
p=H.h(z.gah(),{func:1,ret:-1,args:[D.t]})
C.a.h(q.a,p)
q=new D.L("target",r,z.b,z,[X.eF])
q.b=!0
z.aB(q)}z.sb1(null)
z.sb1(o)
z.d.h(0,n)
z.d.h(0,m)
z.d.h(0,k)
z.a.saK(l)
q=v.d
if(q!==z){if(q!=null){q=q.gw()
q.toString
p=H.h(v.gcB(),{func:1,ret:-1,args:[D.t]})
C.a.K(q.a,p)}v.d=z
z=z.gw()
z.toString
q=H.h(v.gcB(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,q)
v.es()}z=new V.iS("shapes",!0)
x=x.getElementById("shapes")
z.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
z.aR(0,"Cube",new L.mO(n))
z.aR(0,"Cylinder",new L.mP(n))
z.aR(0,"Cone",new L.mQ(n))
z.aR(0,"Sphere",new L.mR(n))
z.d3(0,"Toroid",new L.mS(n),!0)
z.aR(0,"Knot",new L.mT(n))
V.n_(v)},
mO:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.dt(1,null,null,1))}},
mP:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.du(1,!0,!0,1,40,1))}},
mQ:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.du(1,!0,!1,1,40,0))}},
mR:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.n1(6,null,6))}},
mS:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.h5(30,1,15,0.5))}},
mT:{"^":"n:0;a",
$0:function(){this.a.sa4(0,F.mL(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ec.prototype
return J.eb.prototype}if(typeof a=="string")return J.c0.prototype
if(a==null)return J.ed.prototype
if(typeof a=="boolean")return J.hX.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.aE=function(a){if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.ca=function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.mB=function(a){if(typeof a=="number")return J.c_.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.mC=function(a){if(typeof a=="number")return J.c_.prototype
if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.dx=function(a){if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c7.prototype
return a}
J.aY=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c1.prototype
return a}if(a instanceof P.b)return a
return J.cC(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).t(a,b)}
J.h6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mB(a).M(a,b)}
J.dE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mC(a).k(a,b)}
J.dF=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fW(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).j(a,b)}
J.cG=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fW(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ca(a).m(a,b,c)}
J.h7=function(a,b){return J.dx(a).F(a,b)}
J.h8=function(a,b,c){return J.aY(a).fo(a,b,c)}
J.h9=function(a,b,c,d){return J.aY(a).d4(a,b,c,d)}
J.ha=function(a,b){return J.dx(a).T(a,b)}
J.cH=function(a,b,c){return J.aE(a).hh(a,b,c)}
J.cI=function(a,b){return J.ca(a).H(a,b)}
J.hb=function(a,b,c,d){return J.ca(a).aw(a,b,c,d)}
J.dG=function(a,b){return J.ca(a).I(a,b)}
J.dH=function(a){return J.aY(a).gc1(a)}
J.bU=function(a){return J.I(a).gR(a)}
J.bv=function(a){return J.ca(a).gY(a)}
J.as=function(a){return J.aE(a).gl(a)}
J.hc=function(a,b){return J.aY(a).i3(a,b)}
J.hd=function(a,b){return J.aY(a).sZ(a,b)}
J.a9=function(a){return J.I(a).i(a)}
I.aj=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cN.prototype
C.H=J.u.prototype
C.a=J.b7.prototype
C.I=J.eb.prototype
C.e=J.ec.prototype
C.t=J.ed.prototype
C.d=J.c_.prototype
C.b=J.c0.prototype
C.P=J.c1.prototype
C.V=H.d3.prototype
C.W=W.iA.prototype
C.z=J.iF.prototype
C.X=P.d6.prototype
C.r=J.c7.prototype
C.A=W.bK.prototype
C.B=W.kl.prototype
C.D=new P.hj(!1)
C.C=new P.hi(C.D)
C.E=new P.iD()
C.F=new P.k6()
C.j=new P.l8()
C.c=new A.cf(0,"ColorSourceType.None")
C.i=new A.cf(1,"ColorSourceType.Solid")
C.f=new A.cf(2,"ColorSourceType.Texture2D")
C.h=new A.cf(3,"ColorSourceType.TextureCube")
C.q=new P.b4(0)
C.G=new P.b4(5e6)
C.J=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.K=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.L=function(getTagFallback) {
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
C.M=function() {
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
C.N=function(hooks) {
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
C.O=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=H.d(I.aj([127,2047,65535,1114111]),[P.m])
C.m=H.d(I.aj([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.d(I.aj([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.d(I.aj([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.d(I.aj([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.d(I.aj([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.d(I.aj([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.d(I.aj([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.d(I.aj([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.d(I.aj([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.d(I.aj([]),[P.i])
C.U=new H.hv(0,{},C.Q,[P.i,P.i])
C.k=new P.k_(!1)
$.az=0
$.bw=null
$.dM=null
$.dn=!1
$.fU=null
$.fM=null
$.h1=null
$.cB=null
$.cE=null
$.dy=null
$.bp=null
$.bP=null
$.bQ=null
$.dp=!1
$.T=C.j
$.e2=null
$.e1=null
$.e0=null
$.e_=null
$.o=V.iu()
$.et=null
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
I.$lazy(y,x,w)}})(["dZ","$get$dZ",function(){return H.fT("_$dart_dartClosure")},"cV","$get$cV",function(){return H.fT("_$dart_js")},"eP","$get$eP",function(){return H.aB(H.cs({
toString:function(){return"$receiver$"}}))},"eQ","$get$eQ",function(){return H.aB(H.cs({$method$:null,
toString:function(){return"$receiver$"}}))},"eR","$get$eR",function(){return H.aB(H.cs(null))},"eS","$get$eS",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.aB(H.cs(void 0))},"eX","$get$eX",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eU","$get$eU",function(){return H.aB(H.eV(null))},"eT","$get$eT",function(){return H.aB(function(){try{null.$method$}catch(z){return z.message}}())},"eZ","$get$eZ",function(){return H.aB(H.eV(void 0))},"eY","$get$eY",function(){return H.aB(function(){try{(void 0).$method$}catch(z){return z.message}}())},"di","$get$di",function(){return P.km()},"bR","$get$bR",function(){return[]},"fb","$get$fb",function(){return P.k3()},"fh","$get$fh",function(){return H.iy(H.bo(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fC","$get$fC",function(){return P.iY("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fI","$get$fI",function(){return P.m7()},"dX","$get$dX",function(){return{}},"fe","$get$fe",function(){return Z.ap(0)},"fc","$get$fc",function(){return Z.ap(511)},"aP","$get$aP",function(){return Z.ap(1)},"aO","$get$aO",function(){return Z.ap(2)},"aN","$get$aN",function(){return Z.ap(4)},"aQ","$get$aQ",function(){return Z.ap(8)},"aR","$get$aR",function(){return Z.ap(16)},"bI","$get$bI",function(){return Z.ap(32)},"bJ","$get$bJ",function(){return Z.ap(64)},"fd","$get$fd",function(){return Z.ap(96)},"bm","$get$bm",function(){return Z.ap(128)},"aM","$get$aM",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:-1},{func:1,ret:-1,args:[W.av]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.G,args:[F.al]},{func:1,ret:P.G,args:[F.af,P.p,P.p]},{func:1,ret:-1,args:[P.m,[P.j,E.aH]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.G,args:[D.t]},{func:1,ret:P.G,args:[W.aa]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,V.au]]},{func:1,ret:V.W,args:[P.p]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:-1,args:[P.m,[P.j,U.ai]]},{func:1,args:[,]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.m,[P.j,D.a2]]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:W.a1,args:[W.J]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ag,args:[W.J]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.G,args:[P.a_]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.ag,args:[P.p,P.p]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.ag,args:[[P.j,D.a2]]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:[P.H,P.i,P.i],args:[[P.H,P.i,P.i],P.i]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aw]},{func:1,ret:P.G,args:[P.bi]},{func:1,args:[P.i]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.n4(d||a)
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
Isolate.aj=a.aj
Isolate.dv=a.dv
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
if(typeof dartMainRunner==="function")dartMainRunner(L.fZ,[])
else L.fZ([])})})()
//# sourceMappingURL=test.dart.js.map
