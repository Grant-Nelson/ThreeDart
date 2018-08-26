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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d2(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d3=function(){}
var dart=[["","",,H,{"^":"",lR:{"^":"a;a"}}],["","",,J,{"^":"",
F:function(a){return void 0},
d7:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ch:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d5==null){H.kL()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(P.eq("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cw()]
if(v!=null)return v
v=H.kQ(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cw(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
k:{"^":"a;",
t:function(a,b){return a===b},
gK:function(a){return H.bc(a)},
i:["cl",function(a){return"Instance of '"+H.aL(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h9:{"^":"k;",
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$isM:1},
hb:{"^":"k;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0},
$isG:1},
cx:{"^":"k;",
gK:function(a){return 0},
i:["cn",function(a){return String(a)}]},
hD:{"^":"cx;"},
c8:{"^":"cx;"},
bC:{"^":"cx;",
i:function(a){var z=a[$.$get$dr()]
if(z==null)return this.cn(a)
return"JavaScript function for "+H.e(J.Y(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbB:1},
aJ:{"^":"k;$ti",
h:function(a,b){H.x(b,H.r(a,0))
if(!!a.fixed$length)H.V(P.aj("add"))
a.push(b)},
V:function(a,b){var z
if(!!a.fixed$length)H.V(P.aj("remove"))
for(z=0;z<a.length;++z)if(J.X(a[z],b)){a.splice(z,1)
return!0}return!1},
H:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.c(P.at(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.I(z,y,H.e(a[y]))
return z.join(b)},
dT:function(a){return this.l(a,"")},
dN:function(a,b,c){var z,y,x
H.h(b,{func:1,ret:P.M,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.c(P.at(a))}throw H.c(H.cu())},
dM:function(a,b){return this.dN(a,b,null)},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
aK:function(a,b,c){var z=a.length
if(b>z)throw H.c(P.a4(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a4(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gaF:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.c(H.cu())},
bL:function(a,b){var z,y
H.h(b,{func:1,ret:P.M,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.c(P.at(a))}return!1},
N:function(a,b){var z
for(z=0;z<a.length;++z)if(J.X(a[z],b))return!0
return!1},
i:function(a){return P.ct(a,"[","]")},
gJ:function(a){return new J.am(a,a.length,0,[H.r(a,0)])},
gK:function(a){return H.bc(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.V(P.aj("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.bN(b,"newLength",null))
if(b<0)throw H.c(P.a4(b,0,null,"newLength",null))
a.length=b},
I:function(a,b,c){H.Q(b)
H.x(c,H.r(a,0))
if(!!a.immutable$list)H.V(P.aj("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aA(a,b))
if(b>=a.length||b<0)throw H.c(H.aA(a,b))
a[b]=c},
$isi:1,
$isd:1,
n:{
h8:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.bN(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a4(a,0,4294967295,"length",null))
return J.dB(new Array(a),b)},
dB:function(a,b){return J.b7(H.b(a,[b]))},
b7:function(a){H.bv(a)
a.fixed$length=Array
return a}}},
lQ:{"^":"aJ;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gF:function(a){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.A(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bY:{"^":"k;",
b5:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.c.gaE(b)
if(this.gaE(a)===z)return 0
if(this.gaE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaE:function(a){return a===0?1/a<0:a<0},
bQ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.c(P.aj(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.aj(""+a+".round()"))},
dw:function(a,b,c){if(C.c.b5(b,c)>0)throw H.c(H.az(b))
if(this.b5(a,b)<0)return b
if(this.b5(a,c)>0)return c
return a},
er:function(a,b){var z
if(b>20)throw H.c(P.a4(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaE(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){return a&0x1FFFFFFF},
cd:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
b_:function(a,b){return(a|0)===a?a/b|0:this.dk(a,b)},
dk:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(P.aj("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
aA:function(a,b){var z
if(a>0)z=this.di(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
di:function(a,b){return b>31?0:a>>>b},
a7:function(a,b){if(typeof b!=="number")throw H.c(H.az(b))
return a<b},
$isu:1,
$isN:1},
dC:{"^":"bY;",$isD:1},
ha:{"^":"bY;"},
bZ:{"^":"k;",
b4:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aA(a,b))
if(b<0)throw H.c(H.aA(a,b))
if(b>=a.length)H.V(H.aA(a,b))
return a.charCodeAt(b)},
ab:function(a,b){if(b>=a.length)throw H.c(H.aA(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.C(b)
if(typeof b!=="string")throw H.c(P.bN(b,null,null))
return a+b},
cj:function(a,b,c){var z
if(c>a.length)throw H.c(P.a4(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aJ:function(a,b){return this.cj(a,b,0)},
al:function(a,b,c){H.Q(c)
if(c==null)c=a.length
if(b<0)throw H.c(P.c4(b,null,null))
if(b>c)throw H.c(P.c4(b,null,null))
if(c>a.length)throw H.c(P.c4(c,null,null))
return a.substring(b,c)},
aL:function(a,b){return this.al(a,b,null)},
eq:function(a){return a.toLowerCase()},
A:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
e5:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.A(c,z)+a},
Y:function(a,b){return this.e5(a,b," ")},
dA:function(a,b,c){if(c>a.length)throw H.c(P.a4(c,0,a.length,null,null))
return H.fa(a,b,c)},
i:function(a){return a},
gK:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdQ:1,
$isf:1}}],["","",,H,{"^":"",
cu:function(){return new P.cH("No element")},
h7:function(){return new P.cH("Too many elements")},
n:{"^":"iI;a",
gk:function(a){return this.a.length},
m:function(a,b){return C.b.b4(this.a,b)},
$aser:function(){return[P.D]},
$asq:function(){return[P.D]},
$asi:function(){return[P.D]},
$asd:function(){return[P.D]}},
dx:{"^":"i;"},
c0:{"^":"dx;$ti",
gJ:function(a){return new H.cA(this,this.gk(this),0,[H.aC(this,"c0",0)])},
bg:function(a,b){return this.cm(0,H.h(b,{func:1,ret:P.M,args:[H.aC(this,"c0",0)]}))}},
cA:{"^":"a;a,b,c,0d,$ti",
gF:function(a){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.bL(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.c(P.at(z))
w=this.c
if(typeof x!=="number")return H.E(x)
if(w>=x){this.d=null
return!1}this.d=y.w(z,w);++this.c
return!0}},
hn:{"^":"i;a,b,$ti",
gJ:function(a){return new H.ho(J.aG(this.a),this.b,this.$ti)},
gk:function(a){return J.aH(this.a)},
w:function(a,b){return this.b.$1(J.cl(this.a,b))},
$asi:function(a,b){return[b]}},
ho:{"^":"cv;0a,b,c,$ti",
v:function(){var z=this.b
if(z.v()){this.a=this.c.$1(z.gF(z))
return!0}this.a=null
return!1},
gF:function(a){return this.a},
$ascv:function(a,b){return[b]}},
hp:{"^":"c0;a,b,$ti",
gk:function(a){return J.aH(this.a)},
w:function(a,b){return this.b.$1(J.cl(this.a,b))},
$asc0:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
cS:{"^":"i;a,b,$ti",
gJ:function(a){return new H.iV(J.aG(this.a),this.b,this.$ti)}},
iV:{"^":"cv;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gF(z)))return!0
return!1},
gF:function(a){var z=this.a
return z.gF(z)}},
bW:{"^":"a;$ti"},
er:{"^":"a;$ti"},
iI:{"^":"c_+er;"}}],["","",,H,{"^":"",
kE:function(a){return init.types[H.Q(a)]},
kO:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.F(a).$isy},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.Y(a)
if(typeof z!=="string")throw H.c(H.az(a))
return z},
bc:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aL:function(a){var z,y,x,w,v,u,t,s,r
z=J.F(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.F(a).$isc8){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.ab(w,0)===36)w=C.b.aL(w,1)
r=H.d6(H.bv(H.aD(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dT:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hN:function(a){var z,y,x,w
z=H.b([],[P.D])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.c(H.az(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.c.aA(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.c(H.az(w))}return H.dT(z)},
dU:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.c(H.az(x))
if(x<0)throw H.c(H.az(x))
if(x>65535)return H.hN(a)}return H.dT(a)},
cF:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.aA(z,10))>>>0,56320|z&1023)}throw H.c(P.a4(a,0,1114111,null,null))},
a1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hM:function(a){return a.b?H.a1(a).getUTCFullYear()+0:H.a1(a).getFullYear()+0},
hK:function(a){return a.b?H.a1(a).getUTCMonth()+1:H.a1(a).getMonth()+1},
hG:function(a){return a.b?H.a1(a).getUTCDate()+0:H.a1(a).getDate()+0},
hH:function(a){return a.b?H.a1(a).getUTCHours()+0:H.a1(a).getHours()+0},
hJ:function(a){return a.b?H.a1(a).getUTCMinutes()+0:H.a1(a).getMinutes()+0},
hL:function(a){return a.b?H.a1(a).getUTCSeconds()+0:H.a1(a).getSeconds()+0},
hI:function(a){return a.b?H.a1(a).getUTCMilliseconds()+0:H.a1(a).getMilliseconds()+0},
E:function(a){throw H.c(H.az(a))},
j:function(a,b){if(a==null)J.aH(a)
throw H.c(H.aA(a,b))},
aA:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,"index",null)
z=H.Q(J.aH(a))
if(!(b<0)){if(typeof z!=="number")return H.E(z)
y=b>=z}else y=!0
if(y)return P.H(b,a,"index",null,z)
return P.c4(b,"index",null)},
kA:function(a,b,c){if(a>c)return new P.c3(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c3(a,c,!0,b,"end","Invalid value")
return new P.al(!0,b,"end",null)},
az:function(a){return new P.al(!0,a,null,null)},
c:function(a){var z
if(a==null)a=new P.dP()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fb})
z.name=""}else z.toString=H.fb
return z},
fb:function(){return J.Y(this.dartException)},
V:function(a){throw H.c(a)},
A:function(a){throw H.c(P.at(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aA(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cy(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dO(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ef()
u=$.$get$eg()
t=$.$get$eh()
s=$.$get$ei()
r=$.$get$em()
q=$.$get$en()
p=$.$get$ek()
$.$get$ej()
o=$.$get$ep()
n=$.$get$eo()
m=v.W(y)
if(m!=null)return z.$1(H.cy(H.C(y),m))
else{m=u.W(y)
if(m!=null){m.method="call"
return z.$1(H.cy(H.C(y),m))}else{m=t.W(y)
if(m==null){m=s.W(y)
if(m==null){m=r.W(y)
if(m==null){m=q.W(y)
if(m==null){m=p.W(y)
if(m==null){m=s.W(y)
if(m==null){m=o.W(y)
if(m==null){m=n.W(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dO(H.C(y),m))}}return z.$1(new H.iH(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e3()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.al(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e3()
return a},
aY:function(a){var z
if(a==null)return new H.eM(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eM(a)},
kC:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.I(0,a[y],a[x])}return b},
kN:function(a,b,c,d,e,f){H.l(a,"$isbB")
switch(H.Q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.S("Unsupported number of arguments for wrapped closure"))},
bt:function(a,b){var z
H.Q(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kN)
a.$identity=z
return z},
fv:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.F(d).$isd){z.$reflectionInfo=d
x=H.hR(z).r}else x=d
w=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.cn(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ad
if(typeof u!=="number")return u.G()
$.ad=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dm(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kE,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dg:H.co
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dm(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fs:function(a,b,c,d){var z=H.co
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dm:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fu(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fs(y,!w,z,b)
if(y===0){w=$.ad
if(typeof w!=="number")return w.G()
$.ad=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b0
if(v==null){v=H.bP("self")
$.b0=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ad
if(typeof w!=="number")return w.G()
$.ad=w+1
t+=w
w="return function("+t+"){return this."
v=$.b0
if(v==null){v=H.bP("self")
$.b0=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
ft:function(a,b,c,d){var z,y
z=H.co
y=H.dg
switch(b?-1:a){case 0:throw H.c(H.i_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fu:function(a,b){var z,y,x,w,v,u,t,s
z=$.b0
if(z==null){z=H.bP("self")
$.b0=z}y=$.df
if(y==null){y=H.bP("receiver")
$.df=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ft(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.ad
if(typeof y!=="number")return y.G()
$.ad=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.ad
if(typeof y!=="number")return y.G()
$.ad=y+1
return new Function(z+y+"}")()},
d2:function(a,b,c,d,e,f,g){var z,y
z=J.b7(H.bv(b))
H.Q(c)
y=!!J.F(d).$isd?J.b7(d):d
return H.fv(a,z,c,y,!!e,f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ai(a,"String"))},
kT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ai(a,"num"))},
d0:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ai(a,"bool"))},
Q:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ai(a,"int"))},
f8:function(a,b){throw H.c(H.ai(a,H.C(b).substring(3)))},
kV:function(a,b){var z=J.bL(b)
throw H.c(H.fq(a,z.al(b,3,z.gk(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.F(a)[b])return a
H.f8(a,b)},
aZ:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.F(a)[b]
else z=!0
if(z)return a
H.kV(a,b)},
bv:function(a){if(a==null)return a
if(!!J.F(a).$isd)return a
throw H.c(H.ai(a,"List"))},
kP:function(a,b){if(a==null)return a
if(!!J.F(a).$isd)return a
if(J.F(a)[b])return a
H.f8(a,b)},
f_:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Q(z)]
else return a.$S()}return},
bK:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f_(J.F(a))
if(z==null)return!1
y=H.f3(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.cY)return a
$.cY=!0
try{if(H.bK(a,b))return a
z=H.bM(b)
y=H.ai(a,z)
throw H.c(y)}finally{$.cY=!1}},
d4:function(a,b){if(a!=null&&!H.d1(a,b))H.V(H.ai(a,H.bM(b)))
return a},
eV:function(a){var z
if(a instanceof H.p){z=H.f_(J.F(a))
if(z!=null)return H.bM(z)
return"Closure"}return H.aL(a)},
kY:function(a){throw H.c(new P.fz(H.C(a)))},
f1:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aD:function(a){if(a==null)return
return a.$ti},
mV:function(a,b,c){return H.b_(a["$as"+H.e(c)],H.aD(b))},
bu:function(a,b,c,d){var z
H.C(c)
H.Q(d)
z=H.b_(a["$as"+H.e(c)],H.aD(b))
return z==null?null:z[d]},
aC:function(a,b,c){var z
H.C(b)
H.Q(c)
z=H.b_(a["$as"+H.e(b)],H.aD(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.Q(b)
z=H.aD(a)
return z==null?null:z[b]},
bM:function(a){var z=H.aF(a,null)
return z},
aF:function(a,b){var z,y
H.z(b,"$isd",[P.f],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d6(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Q(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.e(b[y])}if('func' in a)return H.ko(a,b)
if('futureOr' in a)return"FutureOr<"+H.aF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ko:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.b.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aF(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aF(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aF(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aF(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kB(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.aF(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d6:function(a,b,c){var z,y,x,w,v,u
H.z(c,"$isd",[P.f],"$asd")
if(a==null)return""
z=new P.c5("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aF(u,c)}v="<"+z.i(0)+">"
return v},
b_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aX:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aD(a)
y=J.F(a)
if(y[b]==null)return!1
return H.eY(H.b_(y[d],z),null,c,null)},
z:function(a,b,c,d){var z,y
H.C(b)
H.bv(c)
H.C(d)
if(a==null)return a
z=H.aX(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d6(c,0,null)
throw H.c(H.ai(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eY:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aa(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aa(a[y],b,c[y],d))return!1
return!0},
mT:function(a,b,c){return a.apply(b,H.b_(J.F(b)["$as"+H.e(c)],H.aD(b)))},
f4:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.f4(z)}return!1},
d1:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.f4(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d1(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bK(a,b)}y=J.F(a).constructor
x=H.aD(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aa(y,null,b,null)
return z},
x:function(a,b){if(a!=null&&!H.d1(a,b))throw H.c(H.ai(a,H.bM(b)))
return a},
aa:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aa(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.f3(a,b,c,d)
if('func' in a)return c.builtin$cls==="bB"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aa("type" in a?a.type:null,b,x,d)
else if(H.aa(a,b,x,d))return!0
else{if(!('$is'+"b4" in y.prototype))return!1
w=y.prototype["$as"+"b4"]
v=H.b_(w,z?a.slice(1):null)
return H.aa(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bM(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eY(H.b_(r,z),b,u,d)},
f3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aa(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aa(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aa(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aa(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kS(m,b,l,d)},
kS:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aa(c[w],d,a[w],b))return!1}return!0},
mU:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
kQ:function(a){var z,y,x,w,v,u
z=H.C($.f2.$1(a))
y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ci[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.eX.$2(a,z))
if(z!=null){y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ci[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cj(x)
$.ce[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ci[z]=x
return x}if(v==="-"){u=H.cj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f6(a,x)
if(v==="*")throw H.c(P.eq(z))
if(init.leafTags[z]===true){u=H.cj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f6(a,x)},
f6:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d7(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cj:function(a){return J.d7(a,!1,null,!!a.$isy)},
kR:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cj(z)
else return J.d7(z,c,null,null)},
kL:function(){if(!0===$.d5)return
$.d5=!0
H.kM()},
kM:function(){var z,y,x,w,v,u,t,s
$.ce=Object.create(null)
$.ci=Object.create(null)
H.kH()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f9.$1(v)
if(u!=null){t=H.kR(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kH:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.aW(C.z,H.aW(C.E,H.aW(C.n,H.aW(C.n,H.aW(C.D,H.aW(C.A,H.aW(C.B(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f2=new H.kI(v)
$.eX=new H.kJ(u)
$.f9=new H.kK(t)},
aW:function(a,b){return a(b)||b},
fa:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
d8:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hQ:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hR:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.b7(z)
y=z[0]
x=z[1]
return new H.hQ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ir:{"^":"a;a,b,c,d,e,f",
W:function(a){var z,y,x
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
ah:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ir(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
el:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hA:{"^":"R;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dO:function(a,b){return new H.hA(a,b==null?null:b.method)}}},
he:{"^":"R;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
n:{
cy:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.he(a,y,z?null:b.receiver)}}},
iH:{"^":"R;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kZ:{"^":"p:14;a",
$1:function(a){if(!!J.F(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eM:{"^":"a;a,0b",
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
i:function(a){return"Closure '"+H.aL(this).trim()+"'"},
gc9:function(){return this},
$isbB:1,
gc9:function(){return this}},
e9:{"^":"p;"},
ia:{"^":"e9;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cn:{"^":"e9;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gK:function(a){var z,y
z=this.c
if(z==null)y=H.bc(this.a)
else y=typeof z!=="object"?J.ak(z):H.bc(z)
return(y^H.bc(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aL(z)+"'")},
n:{
co:function(a){return a.a},
dg:function(a){return a.c},
bP:function(a){var z,y,x,w,v
z=new H.cn("self","target","receiver","name")
y=J.b7(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
is:{"^":"R;a",
i:function(a){return this.a},
n:{
ai:function(a,b){return new H.is("TypeError: "+H.e(P.bV(a))+": type '"+H.eV(a)+"' is not a subtype of type '"+b+"'")}}},
fp:{"^":"R;a",
i:function(a){return this.a},
n:{
fq:function(a,b){return new H.fp("CastError: "+H.e(P.bV(a))+": type '"+H.eV(a)+"' is not a subtype of type '"+b+"'")}}},
hZ:{"^":"R;a",
i:function(a){return"RuntimeError: "+H.e(this.a)},
n:{
i_:function(a){return new H.hZ(a)}}},
aK:{"^":"dI;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gT:function(a){return new H.dF(this,[H.r(this,0)])},
bO:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.bx(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.bx(y,b)}else return this.dQ(b)},
dQ:function(a){var z=this.d
if(z==null)return!1
return this.b9(this.aS(z,J.ak(a)&0x3ffffff),a)>=0},
m:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ay(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ay(w,b)
x=y==null?null:y.b
return x}else return this.dR(b)},
dR:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aS(z,J.ak(a)&0x3ffffff)
x=this.b9(y,a)
if(x<0)return
return y[x].b},
I:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aU()
this.b=z}this.bq(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aU()
this.c=y}this.bq(y,b,c)}else{x=this.d
if(x==null){x=this.aU()
this.d=x}w=J.ak(b)&0x3ffffff
v=this.aS(x,w)
if(v==null)this.aY(x,w,[this.aV(b,c)])
else{u=this.b9(v,b)
if(u>=0)v[u].b=c
else v.push(this.aV(b,c))}}},
H:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(P.at(this))
z=z.c}},
bq:function(a,b,c){var z
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
z=this.ay(a,b)
if(z==null)this.aY(a,b,this.aV(b,c))
else z.b=c},
cP:function(){this.r=this.r+1&67108863},
aV:function(a,b){var z,y
z=new H.hg(H.x(a,H.r(this,0)),H.x(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.cP()
return z},
b9:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.X(a[y].a,b))return y
return-1},
i:function(a){return P.dJ(this)},
ay:function(a,b){return a[b]},
aS:function(a,b){return a[b]},
aY:function(a,b,c){a[b]=c},
cM:function(a,b){delete a[b]},
bx:function(a,b){return this.ay(a,b)!=null},
aU:function(){var z=Object.create(null)
this.aY(z,"<non-identifier-key>",z)
this.cM(z,"<non-identifier-key>")
return z},
$isdE:1},
hg:{"^":"a;a,b,0c,0d"},
dF:{"^":"dx;a,$ti",
gk:function(a){return this.a.a},
gJ:function(a){var z,y
z=this.a
y=new H.hh(z,z.r,this.$ti)
y.c=z.e
return y}},
hh:{"^":"a;a,b,0c,0d,$ti",
gF:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.at(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kI:{"^":"p:14;a",
$1:function(a){return this.a(a)}},
kJ:{"^":"p:33;a",
$2:function(a,b){return this.a(a,b)}},
kK:{"^":"p:22;a",
$1:function(a){return this.a(H.C(a))}},
hc:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdQ:1,
n:{
hd:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.c(new P.fX("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kB:function(a){return J.dB(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cX:function(a){return a},
ay:function(a,b,c){H.bv(b)
if(a>>>0!==a||a>=c)throw H.c(H.aA(b,a))},
kn:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.c(H.kA(a,b,c))
return b},
hv:{"^":"k;","%":"DataView;ArrayBufferView;cC|eG|eH|hu|eI|eJ|ax"},
cC:{"^":"hv;",
gk:function(a){return a.length},
$isy:1,
$asy:I.d3},
hu:{"^":"eH;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
$asbW:function(){return[P.u]},
$asq:function(){return[P.u]},
$isi:1,
$asi:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
ax:{"^":"eJ;",
$asbW:function(){return[P.D]},
$asq:function(){return[P.D]},
$isi:1,
$asi:function(){return[P.D]},
$isd:1,
$asd:function(){return[P.D]}},
m0:{"^":"ax;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m1:{"^":"ax;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Int32Array"},
m2:{"^":"ax;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m3:{"^":"ax;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m4:{"^":"ax;",
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m5:{"^":"ax;",
gk:function(a){return a.length},
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hw:{"^":"ax;",
gk:function(a){return a.length},
m:function(a,b){H.ay(b,a,a.length)
return a[b]},
aK:function(a,b,c){return new Uint8Array(a.subarray(b,H.kn(b,c,a.length)))},
"%":";Uint8Array"},
eG:{"^":"cC+q;"},
eH:{"^":"eG+bW;"},
eI:{"^":"cC+q;"},
eJ:{"^":"eI+bW;"}}],["","",,P,{"^":"",
iX:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kv()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bt(new P.iZ(z),1)).observe(y,{childList:true})
return new P.iY(z,y,x)}else if(self.setImmediate!=null)return P.kw()
return P.kx()},
mG:[function(a){self.scheduleImmediate(H.bt(new P.j_(H.h(a,{func:1,ret:-1})),0))},"$1","kv",4,0,10],
mH:[function(a){self.setImmediate(H.bt(new P.j0(H.h(a,{func:1,ret:-1})),0))},"$1","kw",4,0,10],
mI:[function(a){H.h(a,{func:1,ret:-1})
P.k3(0,a)},"$1","kx",4,0,10],
kr:function(a,b){if(H.bK(a,{func:1,args:[P.a,P.ac]}))return b.ee(a,null,P.a,P.ac)
if(H.bK(a,{func:1,args:[P.a]}))return H.h(a,{func:1,ret:null,args:[P.a]})
throw H.c(P.bN(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kq:function(){var z,y
for(;z=$.aV,z!=null;){$.br=null
y=z.b
$.aV=y
if(y==null)$.bq=null
z.a.$0()}},
mS:[function(){$.cZ=!0
try{P.kq()}finally{$.br=null
$.cZ=!1
if($.aV!=null)$.$get$cT().$1(P.eZ())}},"$0","eZ",0,0,2],
eU:function(a){var z=new P.ex(H.h(a,{func:1,ret:-1}))
if($.aV==null){$.bq=z
$.aV=z
if(!$.cZ)$.$get$cT().$1(P.eZ())}else{$.bq.b=z
$.bq=z}},
ku:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.aV
if(z==null){P.eU(a)
$.br=$.bq
return}y=new P.ex(a)
x=$.br
if(x==null){y.b=z
$.br=y
$.aV=y}else{y.b=x.b
x.b=y
$.br=y
if(y.b==null)$.bq=y}},
kW:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.L
if(C.d===y){P.cd(null,null,C.d,a)
return}y.toString
P.cd(null,null,y,H.h(y.bM(a),z))},
cc:function(a,b,c,d,e){var z={}
z.a=d
P.ku(new P.ks(z,e))},
eS:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.L
if(y===c)return d.$0()
$.L=c
z=y
try{y=d.$0()
return y}finally{$.L=z}},
eT:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.L
if(y===c)return d.$1(e)
$.L=c
z=y
try{y=d.$1(e)
return y}finally{$.L=z}},
kt:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.L
if(y===c)return d.$2(e,f)
$.L=c
z=y
try{y=d.$2(e,f)
return y}finally{$.L=z}},
cd:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bM(d):c.dt(d,-1)
P.eU(d)},
iZ:{"^":"p:16;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iY:{"^":"p:30;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j_:{"^":"p:0;a",
$0:function(){this.a.$0()}},
j0:{"^":"p:0;a",
$0:function(){this.a.$0()}},
k2:{"^":"a;a,0b,c",
cB:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bt(new P.k4(this,b),0),a)
else throw H.c(P.aj("`setTimeout()` not found."))},
n:{
k3:function(a,b){var z=new P.k2(!0,0)
z.cB(a,b)
return z}}},
k4:{"^":"p:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
aU:{"^":"a;0a,b,c,d,e,$ti",
dX:function(a){if(this.c!==6)return!0
return this.b.b.bf(H.h(this.d,{func:1,ret:P.M,args:[P.a]}),a.a,P.M,P.a)},
dP:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bK(z,{func:1,args:[P.a,P.ac]}))return H.d4(w.ej(z,a.a,a.b,null,y,P.ac),x)
else return H.d4(w.bf(H.h(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aq:{"^":"a;bG:a<,b,0dc:c<,$ti",
c3:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.L
if(y!==C.d){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kr(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aq(0,$.L,[c])
w=b==null?1:3
this.br(new P.aU(x,w,a,b,[z,c]))
return x},
en:function(a,b){return this.c3(a,null,b)},
br:function(a){var z,y
z=this.a
if(z<=1){a.a=H.l(this.c,"$isaU")
this.c=a}else{if(z===2){y=H.l(this.c,"$isaq")
z=y.a
if(z<4){y.br(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cd(null,null,z,H.h(new P.jf(this,a),{func:1,ret:-1}))}},
bD:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.l(this.c,"$isaU")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.l(this.c,"$isaq")
y=u.a
if(y<4){u.bD(a)
return}this.a=y
this.c=u.c}z.a=this.az(a)
y=this.b
y.toString
P.cd(null,null,y,H.h(new P.jk(z,this),{func:1,ret:-1}))}},
aX:function(){var z=H.l(this.c,"$isaU")
this.c=null
return this.az(z)},
az:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bv:function(a){var z,y,x,w
z=H.r(this,0)
H.d4(a,{futureOr:1,type:z})
y=this.$ti
x=H.aX(a,"$isb4",y,"$asb4")
if(x){z=H.aX(a,"$isaq",y,null)
if(z)P.eA(a,this)
else P.jg(a,this)}else{w=this.aX()
H.x(a,z)
this.a=4
this.c=a
P.bn(this,w)}},
aO:[function(a,b){var z
H.l(b,"$isac")
z=this.aX()
this.a=8
this.c=new P.a6(a,b)
P.bn(this,z)},function(a){return this.aO(a,null)},"ew","$2","$1","gcH",4,2,23],
$isb4:1,
n:{
jg:function(a,b){var z,y,x
b.a=1
try{a.c3(new P.jh(b),new P.ji(b),null)}catch(x){z=H.a5(x)
y=H.aY(x)
P.kW(new P.jj(b,z,y))}},
eA:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.l(a.c,"$isaq")
if(z>=4){y=b.aX()
b.a=a.a
b.c=a.c
P.bn(b,y)}else{y=H.l(b.c,"$isaU")
b.a=2
b.c=a
a.bD(y)}},
bn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.l(y.c,"$isa6")
y=y.b
u=v.a
t=v.b
y.toString
P.cc(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bn(z.a,b)}y=z.a
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
if(p){H.l(r,"$isa6")
y=y.b
u=r.a
t=r.b
y.toString
P.cc(null,null,y,u,t)
return}o=$.L
if(o==null?q!=null:o!==q)$.L=q
else o=null
y=b.c
if(y===8)new P.jn(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jm(x,b,r).$0()}else if((y&2)!==0)new P.jl(z,x,b).$0()
if(o!=null)$.L=o
y=x.b
if(!!J.F(y).$isb4){if(y.a>=4){n=H.l(t.c,"$isaU")
t.c=null
b=t.az(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eA(y,t)
return}}m=b.b
n=H.l(m.c,"$isaU")
m.c=null
b=m.az(n)
y=x.a
u=x.b
if(!y){H.x(u,H.r(m,0))
m.a=4
m.c=u}else{H.l(u,"$isa6")
m.a=8
m.c=u}z.a=m
y=m}}}},
jf:{"^":"p:0;a,b",
$0:function(){P.bn(this.a,this.b)}},
jk:{"^":"p:0;a,b",
$0:function(){P.bn(this.b,this.a.a)}},
jh:{"^":"p:16;a",
$1:function(a){var z=this.a
z.a=0
z.bv(a)}},
ji:{"^":"p:24;a",
$2:function(a,b){this.a.aO(a,H.l(b,"$isac"))},
$1:function(a){return this.$2(a,null)}},
jj:{"^":"p:0;a,b,c",
$0:function(){this.a.aO(this.b,this.c)}},
jn:{"^":"p:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.c1(H.h(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.aY(v)
if(this.d){w=H.l(this.a.a.c,"$isa6").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.l(this.a.a.c,"$isa6")
else u.b=new P.a6(y,x)
u.a=!0
return}if(!!J.F(z).$isb4){if(z instanceof P.aq&&z.gbG()>=4){if(z.gbG()===8){w=this.b
w.b=H.l(z.gdc(),"$isa6")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.en(new P.jo(t),null)
w.a=!1}}},
jo:{"^":"p:25;a",
$1:function(a){return this.a}},
jm:{"^":"p:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.x(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.bf(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.aY(t)
x=this.a
x.b=new P.a6(z,y)
x.a=!0}}},
jl:{"^":"p:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.l(this.a.a.c,"$isa6")
w=this.c
if(w.dX(z)&&w.e!=null){v=this.b
v.b=w.dP(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.aY(u)
w=H.l(this.a.a.c,"$isa6")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a6(y,x)
s.a=!0}}},
ex:{"^":"a;a,0b"},
cI:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aq(0,$.L,[P.D])
z.a=0
this.dW(new P.id(z,this),!0,new P.ie(z,y),y.gcH())
return y}},
id:{"^":"p;a,b",
$1:function(a){H.x(a,H.aC(this.b,"cI",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.aC(this.b,"cI",0)]}}},
ie:{"^":"p:0;a,b",
$0:function(){this.b.bv(this.a.a)}},
e6:{"^":"a;$ti"},
ic:{"^":"a;"},
a6:{"^":"a;a,b",
i:function(a){return H.e(this.a)},
$isR:1},
kb:{"^":"a;",$ismF:1},
ks:{"^":"p:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dP()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=y.i(0)
throw x}},
jI:{"^":"kb;",
ek:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.d===$.L){a.$0()
return}P.eS(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.aY(x)
P.cc(null,null,this,z,H.l(y,"$isac"))}},
el:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.d===$.L){a.$1(b)
return}P.eT(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.aY(x)
P.cc(null,null,this,z,H.l(y,"$isac"))}},
dt:function(a,b){return new P.jK(this,H.h(a,{func:1,ret:b}),b)},
bM:function(a){return new P.jJ(this,H.h(a,{func:1,ret:-1}))},
du:function(a,b){return new P.jL(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
c1:function(a,b){H.h(a,{func:1,ret:b})
if($.L===C.d)return a.$0()
return P.eS(null,null,this,a,b)},
bf:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.L===C.d)return a.$1(b)
return P.eT(null,null,this,a,b,c,d)},
ej:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.L===C.d)return a.$2(b,c)
return P.kt(null,null,this,a,b,c,d,e,f)},
ee:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
jK:{"^":"p;a,b,c",
$0:function(){return this.a.c1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jJ:{"^":"p:2;a,b",
$0:function(){return this.a.ek(this.b)}},
jL:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.el(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hi:function(a,b,c){H.bv(a)
return H.z(H.kC(a,new H.aK(0,0,[b,c])),"$isdE",[b,c],"$asdE")},
dG:function(a,b){return new H.aK(0,0,[a,b])},
bE:function(a,b,c,d){return new P.ju(0,0,[d])},
h6:function(a,b,c){var z,y
if(P.d_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bs()
C.a.h(y,a)
try{P.kp(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.e7(b,H.kP(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
ct:function(a,b,c){var z,y,x
if(P.d_(a))return b+"..."+c
z=new P.c5(b)
y=$.$get$bs()
C.a.h(y,a)
try{x=z
x.a=P.e7(x.gac(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gac()+c
y=z.gac()
return y.charCodeAt(0)==0?y:y},
d_:function(a){var z,y
for(z=0;y=$.$get$bs(),z<y.length;++z)if(a===y[z])return!0
return!1},
kp:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gJ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.e(z.gF(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gF(z);++x
if(!z.v()){if(x<=4){C.a.h(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gF(z);++x
for(;z.v();t=s,s=r){r=z.gF(z);++x
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
dH:function(a,b){var z,y
z=P.bE(null,null,null,b)
for(y=J.aG(a);y.v();)z.h(0,H.x(y.gF(y),b))
return z},
dJ:function(a){var z,y,x
z={}
if(P.d_(a))return"{...}"
y=new P.c5("")
try{C.a.h($.$get$bs(),a)
x=y
x.a=x.gac()+"{"
z.a=!0
J.ff(a,new P.hm(z,y))
z=y
z.a=z.gac()+"}"}finally{z=$.$get$bs()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gac()
return z.charCodeAt(0)==0?z:z},
ju:{"^":"jp;a,0b,0c,0d,0e,0f,r,$ti",
gJ:function(a){return P.eF(this,this.r,H.r(this,0))},
gk:function(a){return this.a},
N:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.l(z[b],"$isca")!=null}else{y=this.cI(b)
return y}},
cI:function(a){var z=this.d
if(z==null)return!1
return this.aR(this.bB(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cV()
this.b=z}return this.bt(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cV()
this.c=y}return this.bt(y,b)}else return this.cC(0,b)},
cC:function(a,b){var z,y,x
H.x(b,H.r(this,0))
z=this.d
if(z==null){z=P.cV()
this.d=z}y=this.bw(b)
x=z[y]
if(x==null)z[y]=[this.aN(b)]
else{if(this.aR(x,b)>=0)return!1
x.push(this.aN(b))}return!0},
V:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bE(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bE(this.c,b)
else return this.d9(0,b)},
d9:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.bB(z,b)
x=this.aR(y,b)
if(x<0)return!1
this.bH(y.splice(x,1)[0])
return!0},
bt:function(a,b){H.x(b,H.r(this,0))
if(H.l(a[b],"$isca")!=null)return!1
a[b]=this.aN(b)
return!0},
bE:function(a,b){var z
if(a==null)return!1
z=H.l(a[b],"$isca")
if(z==null)return!1
this.bH(z)
delete a[b]
return!0},
bu:function(){this.r=this.r+1&67108863},
aN:function(a){var z,y
z=new P.ca(H.x(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bu()
return z},
bH:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bu()},
bw:function(a){return J.ak(a)&0x3ffffff},
bB:function(a,b){return a[this.bw(b)]},
aR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.X(a[y].a,b))return y
return-1},
n:{
cV:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ca:{"^":"a;a,0b,0c"},
jv:{"^":"a;a,b,0c,0d,$ti",
gF:function(a){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.c(P.at(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.x(z.a,H.r(this,0))
this.c=z.b
return!0}}},
n:{
eF:function(a,b,c){var z=new P.jv(a,b,[c])
z.c=a.e
return z}}},
jp:{"^":"i0;"},
c_:{"^":"jw;",$isi:1,$isd:1},
q:{"^":"a;$ti",
gJ:function(a){return new H.cA(a,this.gk(a),0,[H.bu(this,a,"q",0)])},
w:function(a,b){return this.m(a,b)},
ep:function(a,b){var z,y,x
z=H.b([],[H.bu(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.E(x)
if(!(y<x))break
C.a.I(z,y,this.m(a,y));++y}return z},
eo:function(a){return this.ep(a,!0)},
i:function(a){return P.ct(a,"[","]")}},
dI:{"^":"a0;"},
hm:{"^":"p:11;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
a0:{"^":"a;$ti",
H:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.bu(this,a,"a0",0),H.bu(this,a,"a0",1)]})
for(z=J.aG(this.gT(a));z.v();){y=z.gF(z)
b.$2(y,this.m(a,y))}},
gk:function(a){return J.aH(this.gT(a))},
i:function(a){return P.dJ(a)},
$isT:1},
i2:{"^":"a;$ti",
a0:function(a,b){var z
for(z=J.aG(H.z(b,"$isi",this.$ti,"$asi"));z.v();)this.h(0,z.gF(z))},
i:function(a){return P.ct(this,"{","}")},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.db("index"))
if(b<0)H.V(P.a4(b,0,null,"index",null))
for(z=P.eF(this,this.r,H.r(this,0)),y=0;z.v();){x=z.d
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
$isi:1},
i0:{"^":"i2;"},
jw:{"^":"a+q;"}}],["","",,P,{"^":"",cq:{"^":"a;$ti"},bS:{"^":"ic;$ti"},fQ:{"^":"cq;",
$ascq:function(){return[P.f,[P.d,P.D]]}},h2:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},h1:{"^":"bS;a",
cJ:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.c5("")
if(w>b)v.a+=C.b.al(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fj(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbS:function(){return[P.f,P.f]}},iL:{"^":"fQ;a"},iM:{"^":"bS;",
dC:function(a,b,c){var z,y,x,w
z=a.length
P.dV(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k9(0,0,x)
if(w.cO(a,b,z)!==z)w.bI(C.b.b4(a,z-1),0)
return C.J.aK(x,0,w.b)},
dB:function(a){return this.dC(a,0,null)},
$asbS:function(){return[P.f,[P.d,P.D]]}},k9:{"^":"a;a,b,c",
bI:function(a,b){var z,y,x,w,v
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
cO:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.b4(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.ab(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bI(w,C.b.ab(a,u)))x=u}else if(w<=2047){v=this.b
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
fS:function(a){var z=J.F(a)
if(!!z.$isp)return z.i(a)
return"Instance of '"+H.aL(a)+"'"},
hj:function(a,b,c,d){var z,y
H.x(b,d)
z=J.h8(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.I(z,y,b)
return H.z(z,"$isd",[d],"$asd")},
hk:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gJ(a);x.v();)C.a.h(y,H.x(x.gF(x),c))
if(b)return y
return H.z(J.b7(y),"$isd",z,"$asd")},
cJ:function(a,b,c){var z,y
z=P.D
H.z(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.z(a,"$isaJ",[z],"$asaJ")
y=a.length
c=P.dV(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a7()
z=c<y}else z=!0
return H.dU(z?C.a.aK(a,b,c):a)}return P.ig(a,b,c)},
ig:function(a,b,c){var z,y,x
H.z(a,"$isi",[P.D],"$asi")
z=J.aG(a)
for(y=0;y<b;++y)if(!z.v())throw H.c(P.a4(b,0,y,null,null))
x=[]
for(;z.v();)x.push(z.gF(z))
return H.dU(x)},
hS:function(a,b,c){return new H.hc(a,H.hd(a,!1,!0,!1))},
cW:function(a,b,c,d){var z,y,x,w,v,u
H.z(a,"$isd",[P.D],"$asd")
if(c===C.h){z=$.$get$eQ().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.dB(H.x(b,H.aC(c,"cq",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.j(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cF(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.Y(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fS(a)},
S:function(a){return new P.ez(a)},
f7:function(a){H.kU(a)},
M:{"^":"a;"},
"+bool":0,
bx:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bx))return!1
return this.a===b.a&&this.b===b.b},
gK:function(a){var z=this.a
return(z^C.c.aA(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fB(H.hM(this))
y=P.by(H.hK(this))
x=P.by(H.hG(this))
w=P.by(H.hH(this))
v=P.by(H.hJ(this))
u=P.by(H.hL(this))
t=P.fC(H.hI(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fB:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
by:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"N;"},
"+double":0,
bU:{"^":"a;a",
a7:function(a,b){return C.c.a7(this.a,H.l(b,"$isbU").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bU))return!1
return this.a===b.a},
gK:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fM()
y=this.a
if(y<0)return"-"+new P.bU(0-y).i(0)
x=z.$1(C.c.b_(y,6e7)%60)
w=z.$1(C.c.b_(y,1e6)%60)
v=new P.fL().$1(y%1e6)
return""+C.c.b_(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
n:{
fK:function(a,b,c,d,e,f){return new P.bU(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fL:{"^":"p:12;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fM:{"^":"p:12;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"a;"},
dP:{"^":"R;",
i:function(a){return"Throw of null."}},
al:{"^":"R;a,b,c,d",
gaQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gaQ()+y+x
if(!this.a)return w
v=this.gaP()
u=P.bV(this.b)
return w+v+": "+H.e(u)},
n:{
bN:function(a,b,c){return new P.al(!0,a,b,c)},
db:function(a){return new P.al(!1,null,a,"Must not be null")}}},
c3:{"^":"al;e,f,a,b,c,d",
gaQ:function(){return"RangeError"},
gaP:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
n:{
c4:function(a,b,c){return new P.c3(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
dV:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.E(a)
if(0<=a){if(typeof c!=="number")return H.E(c)
z=a>c}else z=!0
if(z)throw H.c(P.a4(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.E(c)
z=b>c}else z=!0
if(z)throw H.c(P.a4(b,a,c,"end",f))
return b}return c}}},
h3:{"^":"al;e,k:f>,a,b,c,d",
gaQ:function(){return"RangeError"},
gaP:function(){if(J.fc(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.e(z)},
n:{
H:function(a,b,c,d,e){var z=H.Q(e!=null?e:J.aH(b))
return new P.h3(b,z,!0,a,c,"Index out of range")}}},
iJ:{"^":"R;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
aj:function(a){return new P.iJ(a)}}},
iG:{"^":"R;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eq:function(a){return new P.iG(a)}}},
cH:{"^":"R;a",
i:function(a){return"Bad state: "+this.a},
n:{
e5:function(a){return new P.cH(a)}}},
fx:{"^":"R;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bV(z))+"."},
n:{
at:function(a){return new P.fx(a)}}},
hB:{"^":"a;",
i:function(a){return"Out of Memory"},
$isR:1},
e3:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isR:1},
fz:{"^":"R;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ez:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fX:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.b.al(x,0,75)+"..."
return y+"\n"+x}},
bB:{"^":"a;"},
D:{"^":"N;"},
"+int":0,
i:{"^":"a;$ti",
bg:["cm",function(a,b){var z=H.aC(this,"i",0)
return new H.cS(this,H.h(b,{func:1,ret:P.M,args:[z]}),[z])}],
gk:function(a){var z,y
z=this.gJ(this)
for(y=0;z.v();)++y
return y},
ga8:function(a){var z,y
z=this.gJ(this)
if(!z.v())throw H.c(H.cu())
y=z.gF(z)
if(z.v())throw H.c(H.h7())
return y},
w:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.db("index"))
if(b<0)H.V(P.a4(b,0,null,"index",null))
for(z=this.gJ(this),y=0;z.v();){x=z.gF(z)
if(b===y)return x;++y}throw H.c(P.H(b,this,"index",null,y))},
i:function(a){return P.h6(this,"(",")")}},
cv:{"^":"a;$ti"},
d:{"^":"a;$ti",$isi:1},
"+List":0,
T:{"^":"a;$ti"},
G:{"^":"a;",
gK:function(a){return P.a.prototype.gK.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
N:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gK:function(a){return H.bc(this)},
i:function(a){return"Instance of '"+H.aL(this)+"'"},
toString:function(){return this.i(this)}},
ac:{"^":"a;"},
f:{"^":"a;",$isdQ:1},
"+String":0,
c5:{"^":"a;ac:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
e7:function(a,b,c){var z=J.aG(b)
if(!z.v())return a
if(c.length===0){do a+=H.e(z.gF(z))
while(z.v())}else{a+=H.e(z.gF(z))
for(;z.v();)a=a+c+H.e(z.gF(z))}return a}}}}],["","",,W,{"^":"",
cm:function(a){var z=document.createElement("a")
return z},
dl:function(a,b){var z=document.createElement("canvas")
return z},
fN:function(a,b,c){var z,y
z=document.body
y=(z&&C.m).Z(z,a,b,c)
y.toString
z=W.w
z=new H.cS(new W.a9(y),H.h(new W.fO(),{func:1,ret:P.M,args:[z]}),[z])
return H.l(z.ga8(z),"$isK")},
fP:function(a){H.l(a,"$isZ")
return"wheel"},
b2:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fi(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
c9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eE:function(a,b,c,d){var z,y
z=W.c9(W.c9(W.c9(W.c9(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eW:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.L
if(z===C.d)return a
return z.du(a,b)},
a7:{"^":"K;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l_:{"^":"cG;0p:x=,0q:y=","%":"Accelerometer|LinearAccelerationSensor"},
l0:{"^":"k;0k:length=","%":"AccessibleNodeList"},
l1:{"^":"a7;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l2:{"^":"a7;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dd:{"^":"a7;",$isdd:1,"%":"HTMLBaseElement"},
fo:{"^":"k;","%":";Blob"},
bO:{"^":"a7;",$isbO:1,"%":"HTMLBodyElement"},
cp:{"^":"a7;",
bh:function(a,b,c){var z=a.getContext(b,P.ky(c,null))
return z},
$iscp:1,
"%":"HTMLCanvasElement"},
l8:{"^":"w;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
la:{"^":"bT;0k:length=","%":"CSSPerspective"},
lb:{"^":"cr;0p:x=,0q:y=","%":"CSSPositionValue"},
lc:{"^":"bT;0p:x=,0q:y=","%":"CSSRotation"},
b1:{"^":"k;",$isb1:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ld:{"^":"bT;0p:x=,0q:y=","%":"CSSScale"},
le:{"^":"j4;0k:length=",
cc:function(a,b){var z=a.getPropertyValue(this.cF(a,b))
return z==null?"":z},
cF:function(a,b){var z,y
z=$.$get$dq()
y=z[b]
if(typeof y==="string")return y
y=this.dj(a,b)
z[b]=y
return y},
dj:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fH()+b
if(z in a)return z
return b},
gb1:function(a){return a.bottom},
ga1:function(a){return a.height},
gah:function(a){return a.left},
gbe:function(a){return a.right},
gav:function(a){return a.top},
ga2:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fy:{"^":"a;",
gah:function(a){return this.cc(a,"left")}},
cr:{"^":"k;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bT:{"^":"k;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lf:{"^":"cr;0k:length=","%":"CSSTransformValue"},
lg:{"^":"bT;0p:x=,0q:y=","%":"CSSTranslation"},
lh:{"^":"cr;0k:length=","%":"CSSUnparsedValue"},
li:{"^":"k;0k:length=","%":"DataTransferItemList"},
lj:{"^":"k;0p:x=,0q:y=","%":"DeviceAcceleration"},
aI:{"^":"a7;",$isaI:1,"%":"HTMLDivElement"},
lk:{"^":"k;",
i:function(a){return String(a)},
"%":"DOMException"},
ll:{"^":"fI;",
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":"DOMPoint"},
fI:{"^":"k;",
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":";DOMPointReadOnly"},
lm:{"^":"j6;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[[P.a2,P.N]]},
$asq:function(){return[[P.a2,P.N]]},
$isi:1,
$asi:function(){return[[P.a2,P.N]]},
$isd:1,
$asd:function(){return[[P.a2,P.N]]},
$ast:function(){return[[P.a2,P.N]]},
"%":"ClientRectList|DOMRectList"},
fJ:{"^":"k;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga2(a))+" x "+H.e(this.ga1(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.aX(b,"$isa2",[P.N],"$asa2")
if(!z)return!1
z=J.aB(b)
return a.left===z.gah(b)&&a.top===z.gav(b)&&this.ga2(a)===z.ga2(b)&&this.ga1(a)===z.ga1(b)},
gK:function(a){return W.eE(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga2(a)&0x1FFFFFFF,this.ga1(a)&0x1FFFFFFF)},
gb1:function(a){return a.bottom},
ga1:function(a){return a.height},
gah:function(a){return a.left},
gbe:function(a){return a.right},
gav:function(a){return a.top},
ga2:function(a){return a.width},
gp:function(a){return a.x},
gq:function(a){return a.y},
$isa2:1,
$asa2:function(){return[P.N]},
"%":";DOMRectReadOnly"},
ln:{"^":"j8;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[P.f]},
$asq:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isd:1,
$asd:function(){return[P.f]},
$ast:function(){return[P.f]},
"%":"DOMStringList"},
lo:{"^":"k;0k:length=","%":"DOMTokenList"},
j3:{"^":"c_;bA:a<,b",
gk:function(a){return this.b.length},
m:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return H.l(z[b],"$isK")},
h:function(a,b){this.a.appendChild(b)
return b},
gJ:function(a){var z=this.eo(this)
return new J.am(z,z.length,0,[H.r(z,0)])},
$asq:function(){return[W.K]},
$asi:function(){return[W.K]},
$asd:function(){return[W.K]}},
K:{"^":"w;0em:tagName=",
gds:function(a){return new W.j9(a)},
gbN:function(a){return new W.j3(a,a.children)},
gaC:function(a){return P.hP(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.N)},
i:function(a){return a.localName},
Z:["aM",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dz
if(z==null){z=H.b([],[W.ag])
y=new W.dN(z)
C.a.h(z,W.eB(null))
C.a.h(z,W.eN())
$.dz=y
d=y}else d=z
z=$.dy
if(z==null){z=new W.eR(d)
$.dy=z
c=z}else{z.a=d
c=z}}if($.an==null){z=document
y=z.implementation.createHTMLDocument("")
$.an=y
$.cs=y.createRange()
y=$.an
y.toString
y=y.createElement("base")
H.l(y,"$isdd")
y.href=z.baseURI
$.an.head.appendChild(y)}z=$.an
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.l(y,"$isbO")}z=$.an
if(!!this.$isbO)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.an.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.N(C.H,a.tagName)){$.cs.selectNodeContents(x)
w=$.cs.createContextualFragment(b)}else{x.innerHTML=b
w=$.an.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.an.body
if(x==null?z!=null:x!==z)J.da(x)
c.bi(w)
document.adoptNode(w)
return w},function(a,b,c){return this.Z(a,b,c,null)},"dE",null,null,"geO",5,5,null],
ci:function(a,b,c,d){a.textContent=null
a.appendChild(this.Z(a,b,c,d))},
cg:function(a,b){return this.ci(a,b,null,null)},
$isK:1,
"%":";Element"},
fO:{"^":"p:13;",
$1:function(a){return!!J.F(H.l(a,"$isw")).$isK}},
a3:{"^":"k;",$isa3:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
Z:{"^":"k;",
bK:["ck",function(a,b,c,d){H.h(c,{func:1,args:[W.a3]})
if(c!=null)this.cD(a,b,c,!1)}],
cD:function(a,b,c,d){return a.addEventListener(b,H.bt(H.h(c,{func:1,args:[W.a3]}),1),!1)},
$isZ:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eK|eL|eO|eP"},
b3:{"^":"fo;",$isb3:1,"%":"File"},
lH:{"^":"je;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.b3]},
$asq:function(){return[W.b3]},
$isi:1,
$asi:function(){return[W.b3]},
$isd:1,
$asd:function(){return[W.b3]},
$ast:function(){return[W.b3]},
"%":"FileList"},
lI:{"^":"Z;0k:length=","%":"FileWriter"},
lL:{"^":"a7;0k:length=","%":"HTMLFormElement"},
b5:{"^":"k;",$isb5:1,"%":"Gamepad"},
lM:{"^":"cG;0p:x=,0q:y=","%":"Gyroscope"},
lN:{"^":"k;0k:length=","%":"History"},
lO:{"^":"jr;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.w]},
$asq:function(){return[W.w]},
$isi:1,
$asi:function(){return[W.w]},
$isd:1,
$asd:function(){return[W.w]},
$ast:function(){return[W.w]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
b8:{"^":"cL;",$isb8:1,"%":"KeyboardEvent"},
lT:{"^":"k;",
i:function(a){return String(a)},
"%":"Location"},
lU:{"^":"cG;0p:x=,0q:y=","%":"Magnetometer"},
lW:{"^":"k;0k:length=","%":"MediaList"},
lX:{"^":"Z;",
bK:function(a,b,c,d){H.h(c,{func:1,args:[W.a3]})
if(b==="message")a.start()
this.ck(a,b,c,!1)},
"%":"MessagePort"},
lY:{"^":"jx;",
m:function(a,b){return P.ar(a.get(H.C(b)))},
H:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ar(y.value[1]))}},
gT:function(a){var z=H.b([],[P.f])
this.H(a,new W.hr(z))
return z},
gk:function(a){return a.size},
$asa0:function(){return[P.f,null]},
$isT:1,
$asT:function(){return[P.f,null]},
"%":"MIDIInputMap"},
hr:{"^":"p:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lZ:{"^":"jy;",
m:function(a,b){return P.ar(a.get(H.C(b)))},
H:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ar(y.value[1]))}},
gT:function(a){var z=H.b([],[P.f])
this.H(a,new W.hs(z))
return z},
gk:function(a){return a.size},
$asa0:function(){return[P.f,null]},
$isT:1,
$asT:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
hs:{"^":"p:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b9:{"^":"k;",$isb9:1,"%":"MimeType"},
m_:{"^":"jA;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.b9]},
$asq:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$ast:function(){return[W.b9]},
"%":"MimeTypeArray"},
af:{"^":"cL;",$isaf:1,"%":"PointerEvent;DragEvent|MouseEvent"},
a9:{"^":"c_;a",
ga8:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(P.e5("No elements"))
if(y>1)throw H.c(P.e5("More than one element"))
return z.firstChild},
a0:function(a,b){var z,y,x,w
H.z(b,"$isi",[W.w],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gJ:function(a){var z=this.a.childNodes
return new W.dA(z,z.length,-1,[H.bu(C.K,z,"t",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$asq:function(){return[W.w]},
$asi:function(){return[W.w]},
$asd:function(){return[W.w]}},
w:{"^":"Z;0bd:previousSibling=",
ef:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.cl(a):z},
$isw:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
m6:{"^":"k;",
ed:[function(a){return a.previousNode()},"$0","gbd",1,0,15],
"%":"NodeIterator"},
hx:{"^":"jC;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.w]},
$asq:function(){return[W.w]},
$isi:1,
$asi:function(){return[W.w]},
$isd:1,
$asd:function(){return[W.w]},
$ast:function(){return[W.w]},
"%":"NodeList|RadioNodeList"},
bb:{"^":"k;0k:length=",$isbb:1,"%":"Plugin"},
mb:{"^":"jG;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bb]},
$asq:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$ast:function(){return[W.bb]},
"%":"PluginArray"},
mg:{"^":"jM;",
m:function(a,b){return P.ar(a.get(H.C(b)))},
H:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ar(y.value[1]))}},
gT:function(a){var z=H.b([],[P.f])
this.H(a,new W.hY(z))
return z},
gk:function(a){return a.size},
$asa0:function(){return[P.f,null]},
$isT:1,
$asT:function(){return[P.f,null]},
"%":"RTCStatsReport"},
hY:{"^":"p:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mi:{"^":"a7;0k:length=","%":"HTMLSelectElement"},
cG:{"^":"Z;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bd:{"^":"Z;",$isbd:1,"%":"SourceBuffer"},
mj:{"^":"eL;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bd]},
$asq:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$ast:function(){return[W.bd]},
"%":"SourceBufferList"},
be:{"^":"k;",$isbe:1,"%":"SpeechGrammar"},
mk:{"^":"jS;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.be]},
$asq:function(){return[W.be]},
$isi:1,
$asi:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$ast:function(){return[W.be]},
"%":"SpeechGrammarList"},
bf:{"^":"k;0k:length=",$isbf:1,"%":"SpeechRecognitionResult"},
mm:{"^":"jV;",
m:function(a,b){return a.getItem(H.C(b))},
H:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gT:function(a){var z=H.b([],[P.f])
this.H(a,new W.ib(z))
return z},
gk:function(a){return a.length},
$asa0:function(){return[P.f,P.f]},
$isT:1,
$asT:function(){return[P.f,P.f]},
"%":"Storage"},
ib:{"^":"p:26;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bg:{"^":"k;",$isbg:1,"%":"CSSStyleSheet|StyleSheet"},
ih:{"^":"a7;",
Z:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
z=W.fN("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a9(y).a0(0,new W.a9(z))
return y},
"%":"HTMLTableElement"},
mp:{"^":"a7;",
Z:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.q.Z(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.ga8(z)
x.toString
z=new W.a9(x)
w=z.ga8(z)
y.toString
w.toString
new W.a9(y).a0(0,new W.a9(w))
return y},
"%":"HTMLTableRowElement"},
mq:{"^":"a7;",
Z:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.q.Z(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.ga8(z)
y.toString
x.toString
new W.a9(y).a0(0,new W.a9(x))
return y},
"%":"HTMLTableSectionElement"},
ea:{"^":"a7;",$isea:1,"%":"HTMLTemplateElement"},
bh:{"^":"Z;",$isbh:1,"%":"TextTrack"},
bi:{"^":"Z;",$isbi:1,"%":"TextTrackCue|VTTCue"},
mt:{"^":"k1;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bi]},
$asq:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$ast:function(){return[W.bi]},
"%":"TextTrackCueList"},
mu:{"^":"eP;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bh]},
$asq:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$ast:function(){return[W.bh]},
"%":"TextTrackList"},
mv:{"^":"k;0k:length=","%":"TimeRanges"},
bj:{"^":"k;",$isbj:1,"%":"Touch"},
aM:{"^":"cL;",$isaM:1,"%":"TouchEvent"},
mw:{"^":"k6;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bj]},
$asq:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$ast:function(){return[W.bj]},
"%":"TouchList"},
mx:{"^":"k;0k:length=","%":"TrackDefaultList"},
mz:{"^":"k;",
ed:[function(a){return a.previousNode()},"$0","gbd",1,0,15],
"%":"TreeWalker"},
cL:{"^":"a3;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mB:{"^":"k;",
i:function(a){return String(a)},
"%":"URL"},
mD:{"^":"k;0p:x=","%":"VRStageBoundsPoint"},
mE:{"^":"Z;0k:length=","%":"VideoTrackList"},
bm:{"^":"af;",
gdH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.aj("deltaY is not supported"))},
gdG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.aj("deltaX is not supported"))},
$isbm:1,
"%":"WheelEvent"},
iW:{"^":"Z;",
da:function(a,b){return a.requestAnimationFrame(H.bt(H.h(b,{func:1,ret:-1,args:[P.N]}),1))},
cN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ey:{"^":"w;",$isey:1,"%":"Attr"},
mJ:{"^":"kd;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.b1]},
$asq:function(){return[W.b1]},
$isi:1,
$asi:function(){return[W.b1]},
$isd:1,
$asd:function(){return[W.b1]},
$ast:function(){return[W.b1]},
"%":"CSSRuleList"},
mK:{"^":"fJ;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.aX(b,"$isa2",[P.N],"$asa2")
if(!z)return!1
z=J.aB(b)
return a.left===z.gah(b)&&a.top===z.gav(b)&&a.width===z.ga2(b)&&a.height===z.ga1(b)},
gK:function(a){return W.eE(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga1:function(a){return a.height},
ga2:function(a){return a.width},
gp:function(a){return a.x},
gq:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mM:{"^":"kf;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.b5]},
$asq:function(){return[W.b5]},
$isi:1,
$asi:function(){return[W.b5]},
$isd:1,
$asd:function(){return[W.b5]},
$ast:function(){return[W.b5]},
"%":"GamepadList"},
mP:{"^":"kh;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.w]},
$asq:function(){return[W.w]},
$isi:1,
$asi:function(){return[W.w]},
$isd:1,
$asd:function(){return[W.w]},
$ast:function(){return[W.w]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mQ:{"^":"kj;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bf]},
$asq:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$ast:function(){return[W.bf]},
"%":"SpeechRecognitionResultList"},
mR:{"^":"kl;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b>>>0!==b||b>=a.length)return H.j(a,b)
return a[b]},
$isy:1,
$asy:function(){return[W.bg]},
$asq:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$ast:function(){return[W.bg]},
"%":"StyleSheetList"},
j1:{"^":"dI;bA:a<",
H:function(a,b){var z,y,x,w,v
H.h(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=this.gT(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gT:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.f])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.l(z[w],"$isey")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asa0:function(){return[P.f,P.f]},
$asT:function(){return[P.f,P.f]}},
j9:{"^":"j1;a",
m:function(a,b){return this.a.getAttribute(H.C(b))},
gk:function(a){return this.gT(this).length}},
ja:{"^":"cI;a,b,c,$ti",
dW:function(a,b,c,d){var z=H.r(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.U(this.a,this.b,a,!1,z)}},
mL:{"^":"ja;a,b,c,$ti"},
jb:{"^":"e6;a,b,c,d,e,$ti",
dl:function(){var z=this.d
if(z!=null&&this.a<=0)J.fe(this.b,this.c,z,!1)},
n:{
U:function(a,b,c,d,e){var z=c==null?null:W.eW(new W.jc(c),W.a3)
z=new W.jb(0,a,b,z,!1,[e])
z.dl()
return z}}},
jc:{"^":"p:4;a",
$1:function(a){return this.a.$1(H.l(a,"$isa3"))}},
bJ:{"^":"a;a",
cz:function(a){var z,y
z=$.$get$cU()
if(z.a===0){for(y=0;y<262;++y)z.I(0,C.G[y],W.kF())
for(y=0;y<12;++y)z.I(0,C.k[y],W.kG())}},
ag:function(a){return $.$get$eC().N(0,W.b2(a))},
a5:function(a,b,c){var z,y,x
z=W.b2(a)
y=$.$get$cU()
x=y.m(0,H.e(z)+"::"+b)
if(x==null)x=y.m(0,"*::"+b)
if(x==null)return!1
return H.d0(x.$4(a,b,c,this))},
$isag:1,
n:{
eB:function(a){var z,y
z=W.cm(null)
y=window.location
z=new W.bJ(new W.jN(z,y))
z.cz(a)
return z},
mN:[function(a,b,c,d){H.l(a,"$isK")
H.C(b)
H.C(c)
H.l(d,"$isbJ")
return!0},"$4","kF",16,0,21],
mO:[function(a,b,c,d){var z,y,x,w,v
H.l(a,"$isK")
H.C(b)
H.C(c)
z=H.l(d,"$isbJ").a
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
return z},"$4","kG",16,0,21]}},
t:{"^":"a;$ti",
gJ:function(a){return new W.dA(a,this.gk(a),-1,[H.bu(this,a,"t",0)])}},
dN:{"^":"a;a",
ag:function(a){return C.a.bL(this.a,new W.hz(a))},
a5:function(a,b,c){return C.a.bL(this.a,new W.hy(a,b,c))},
$isag:1},
hz:{"^":"p:17;a",
$1:function(a){return H.l(a,"$isag").ag(this.a)}},
hy:{"^":"p:17;a,b,c",
$1:function(a){return H.l(a,"$isag").a5(this.a,this.b,this.c)}},
jO:{"^":"a;",
cA:function(a,b,c,d){var z,y,x
this.a.a0(0,c)
z=b.bg(0,new W.jP())
y=b.bg(0,new W.jQ())
this.b.a0(0,z)
x=this.c
x.a0(0,C.I)
x.a0(0,y)},
ag:function(a){return this.a.N(0,W.b2(a))},
a5:["cp",function(a,b,c){var z,y
z=W.b2(a)
y=this.c
if(y.N(0,H.e(z)+"::"+b))return this.d.dq(c)
else if(y.N(0,"*::"+b))return this.d.dq(c)
else{y=this.b
if(y.N(0,H.e(z)+"::"+b))return!0
else if(y.N(0,"*::"+b))return!0
else if(y.N(0,H.e(z)+"::*"))return!0
else if(y.N(0,"*::*"))return!0}return!1}],
$isag:1},
jP:{"^":"p:18;",
$1:function(a){return!C.a.N(C.k,H.C(a))}},
jQ:{"^":"p:18;",
$1:function(a){return C.a.N(C.k,H.C(a))}},
jZ:{"^":"jO;e,a,b,c,d",
a5:function(a,b,c){if(this.cp(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.N(0,b)
return!1},
n:{
eN:function(){var z,y,x,w,v
z=P.f
y=P.dH(C.j,z)
x=H.r(C.j,0)
w=H.h(new W.k_(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.jZ(y,P.bE(null,null,null,z),P.bE(null,null,null,z),P.bE(null,null,null,z),null)
y.cA(null,new H.hp(C.j,w,[x,z]),v,null)
return y}}},
k_:{"^":"p:27;",
$1:function(a){return"TEMPLATE::"+H.e(H.C(a))}},
jY:{"^":"a;",
ag:function(a){var z=J.F(a)
if(!!z.$ise_)return!1
z=!!z.$isJ
if(z&&W.b2(a)==="foreignObject")return!1
if(z)return!0
return!1},
a5:function(a,b,c){if(b==="is"||C.b.aJ(b,"on"))return!1
return this.ag(a)},
$isag:1},
dA:{"^":"a;a,b,c,0d,$ti",
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fd(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gF:function(a){return this.d}},
ag:{"^":"a;"},
jN:{"^":"a;a,b",$ismA:1},
eR:{"^":"a;a",
bi:function(a){new W.ka(this).$2(a,null)},
ap:function(a,b){if(b==null)J.da(a)
else b.removeChild(a)},
de:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fg(a)
x=y.gbA().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.Y(a)}catch(t){H.a5(t)}try{u=W.b2(a)
this.dd(H.l(a,"$isK"),b,z,v,u,H.l(y,"$isT"),H.C(x))}catch(t){if(H.a5(t) instanceof P.al)throw t
else{this.ap(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dd:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.ap(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ag(a)){this.ap(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a5(a,"is",g)){this.ap(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gT(f)
y=H.b(z.slice(0),[H.r(z,0)])
for(x=f.gT(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.j(y,x)
w=y[x]
if(!this.a.a5(a,J.fk(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.e(e)+" "+w+'="'+H.e(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.F(a).$isea)this.bi(a.content)},
$ism7:1},
ka:{"^":"p:28;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.de(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ap(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fh(z)}catch(w){H.a5(w)
v=H.l(z,"$isw")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.l(y,"$isw")}}},
j4:{"^":"k+fy;"},
j5:{"^":"k+q;"},
j6:{"^":"j5+t;"},
j7:{"^":"k+q;"},
j8:{"^":"j7+t;"},
jd:{"^":"k+q;"},
je:{"^":"jd+t;"},
jq:{"^":"k+q;"},
jr:{"^":"jq+t;"},
jx:{"^":"k+a0;"},
jy:{"^":"k+a0;"},
jz:{"^":"k+q;"},
jA:{"^":"jz+t;"},
jB:{"^":"k+q;"},
jC:{"^":"jB+t;"},
jF:{"^":"k+q;"},
jG:{"^":"jF+t;"},
jM:{"^":"k+a0;"},
eK:{"^":"Z+q;"},
eL:{"^":"eK+t;"},
jR:{"^":"k+q;"},
jS:{"^":"jR+t;"},
jV:{"^":"k+a0;"},
k0:{"^":"k+q;"},
k1:{"^":"k0+t;"},
eO:{"^":"Z+q;"},
eP:{"^":"eO+t;"},
k5:{"^":"k+q;"},
k6:{"^":"k5+t;"},
kc:{"^":"k+q;"},
kd:{"^":"kc+t;"},
ke:{"^":"k+q;"},
kf:{"^":"ke+t;"},
kg:{"^":"k+q;"},
kh:{"^":"kg+t;"},
ki:{"^":"k+q;"},
kj:{"^":"ki+t;"},
kk:{"^":"k+q;"},
kl:{"^":"kk+t;"}}],["","",,P,{"^":"",
ar:function(a){var z,y,x,w,v
if(a==null)return
z=P.dG(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=H.C(y[w])
z.I(0,v,a[v])}return z},
ky:function(a,b){var z={}
a.H(0,new P.kz(z))
return z},
dw:function(){var z=$.dv
if(z==null){z=J.ck(window.navigator.userAgent,"Opera",0)
$.dv=z}return z},
fH:function(){var z,y
z=$.ds
if(z!=null)return z
y=$.dt
if(y==null){y=J.ck(window.navigator.userAgent,"Firefox",0)
$.dt=y}if(y)z="-moz-"
else{y=$.du
if(y==null){y=!P.dw()&&J.ck(window.navigator.userAgent,"Trident/",0)
$.du=y}if(y)z="-ms-"
else z=P.dw()?"-o-":"-webkit-"}$.ds=z
return z},
kz:{"^":"p:11;a",
$2:function(a,b){this.a[a]=b}},
fU:{"^":"c_;a,b",
gaT:function(){var z,y,x
z=this.b
y=H.aC(z,"q",0)
x=W.K
return new H.hn(new H.cS(z,H.h(new P.fV(),{func:1,ret:P.M,args:[y]}),[y]),H.h(new P.fW(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aH(this.gaT().a)},
m:function(a,b){var z=this.gaT()
return z.b.$1(J.cl(z.a,b))},
gJ:function(a){var z=P.hk(this.gaT(),!1,W.K)
return new J.am(z,z.length,0,[H.r(z,0)])},
$asq:function(){return[W.K]},
$asi:function(){return[W.K]},
$asd:function(){return[W.K]}},
fV:{"^":"p:13;",
$1:function(a){return!!J.F(H.l(a,"$isw")).$isK}},
fW:{"^":"p:29;",
$1:function(a){return H.aZ(H.l(a,"$isw"),"$isK")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bG:{"^":"a;p:a>,q:b>,$ti",
i:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"},
t:function(a,b){var z,y,x
if(b==null)return!1
z=H.aX(b,"$isbG",[P.N],null)
if(!z)return!1
z=this.a
y=J.aB(b)
x=y.gp(b)
if(z==null?x==null:z===x){z=this.b
y=y.gq(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gK:function(a){var z,y
z=J.ak(this.a)
y=J.ak(this.b)
return P.eD(P.bo(P.bo(0,z),y))}},
jH:{"^":"a;$ti",
gbe:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.x(z+this.c,H.r(this,0))},
gb1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.x(z+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.e(this.a)+", "+H.e(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.aX(b,"$isa2",[P.N],"$asa2")
if(!z)return!1
z=this.a
y=J.aB(b)
x=y.gah(b)
if(z==null?x==null:z===x){x=this.b
w=y.gav(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.r(this,0)
if(H.x(z+this.c,w)===y.gbe(b)){if(typeof x!=="number")return x.G()
z=H.x(x+this.d,w)===y.gb1(b)}else z=!1}else z=!1}else z=!1
return z},
gK:function(a){var z,y,x,w,v
z=this.a
y=J.ak(z)
x=this.b
w=J.ak(x)
if(typeof z!=="number")return z.G()
v=H.r(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.x(x+this.d,v)
return P.eD(P.bo(P.bo(P.bo(P.bo(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
bP:function(a,b){var z,y
H.z(b,"$isbG",[P.N],"$asbG")
z=b.a
y=this.a
if(typeof z!=="number")return z.ca()
if(typeof y!=="number")return H.E(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.ca()
if(typeof y!=="number")return H.E(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a2:{"^":"jH;ah:a>,av:b>,a2:c>,a1:d>,$ti",n:{
hP:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a7()
if(c<0)z=-c*0
else z=c
H.x(z,e)
if(typeof d!=="number")return d.a7()
if(d<0)y=-d*0
else y=d
return new P.a2(a,b,z,H.x(y,e),[e])}}}}],["","",,P,{"^":"",lp:{"^":"J;0p:x=,0q:y=","%":"SVGFEBlendElement"},lq:{"^":"J;0p:x=,0q:y=","%":"SVGFEColorMatrixElement"},lr:{"^":"J;0p:x=,0q:y=","%":"SVGFEComponentTransferElement"},ls:{"^":"J;0p:x=,0q:y=","%":"SVGFECompositeElement"},lt:{"^":"J;0p:x=,0q:y=","%":"SVGFEConvolveMatrixElement"},lu:{"^":"J;0p:x=,0q:y=","%":"SVGFEDiffuseLightingElement"},lv:{"^":"J;0p:x=,0q:y=","%":"SVGFEDisplacementMapElement"},lw:{"^":"J;0p:x=,0q:y=","%":"SVGFEFloodElement"},lx:{"^":"J;0p:x=,0q:y=","%":"SVGFEGaussianBlurElement"},ly:{"^":"J;0p:x=,0q:y=","%":"SVGFEImageElement"},lz:{"^":"J;0p:x=,0q:y=","%":"SVGFEMergeElement"},lA:{"^":"J;0p:x=,0q:y=","%":"SVGFEMorphologyElement"},lB:{"^":"J;0p:x=,0q:y=","%":"SVGFEOffsetElement"},lC:{"^":"J;0p:x=,0q:y=","%":"SVGFEPointLightElement"},lD:{"^":"J;0p:x=,0q:y=","%":"SVGFESpecularLightingElement"},lE:{"^":"J;0p:x=,0q:y=","%":"SVGFESpotLightElement"},lF:{"^":"J;0p:x=,0q:y=","%":"SVGFETileElement"},lG:{"^":"J;0p:x=,0q:y=","%":"SVGFETurbulenceElement"},lJ:{"^":"J;0p:x=,0q:y=","%":"SVGFilterElement"},lK:{"^":"b6;0p:x=,0q:y=","%":"SVGForeignObjectElement"},h_:{"^":"b6;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},b6:{"^":"J;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lP:{"^":"b6;0p:x=,0q:y=","%":"SVGImageElement"},bD:{"^":"k;",$isbD:1,"%":"SVGLength"},lS:{"^":"jt;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bD]},
$isi:1,
$asi:function(){return[P.bD]},
$isd:1,
$asd:function(){return[P.bD]},
$ast:function(){return[P.bD]},
"%":"SVGLengthList"},lV:{"^":"J;0p:x=,0q:y=","%":"SVGMaskElement"},bF:{"^":"k;",$isbF:1,"%":"SVGNumber"},m8:{"^":"jE;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bF]},
$isi:1,
$asi:function(){return[P.bF]},
$isd:1,
$asd:function(){return[P.bF]},
$ast:function(){return[P.bF]},
"%":"SVGNumberList"},ma:{"^":"J;0p:x=,0q:y=","%":"SVGPatternElement"},mc:{"^":"k;0p:x=,0q:y=","%":"SVGPoint"},md:{"^":"k;0k:length=","%":"SVGPointList"},me:{"^":"k;0p:x=,0q:y=","%":"SVGRect"},mf:{"^":"h_;0p:x=,0q:y=","%":"SVGRectElement"},e_:{"^":"J;",$ise_:1,"%":"SVGScriptElement"},mn:{"^":"jX;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isd:1,
$asd:function(){return[P.f]},
$ast:function(){return[P.f]},
"%":"SVGStringList"},J:{"^":"K;",
gbN:function(a){return new P.fU(a,new W.a9(a))},
Z:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.ag])
C.a.h(z,W.eB(null))
C.a.h(z,W.eN())
C.a.h(z,new W.jY())
c=new W.eR(new W.dN(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.m).dE(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a9(w)
u=z.ga8(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isJ:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mo:{"^":"b6;0p:x=,0q:y=","%":"SVGSVGElement"},ii:{"^":"b6;","%":"SVGTextPathElement;SVGTextContentElement"},ms:{"^":"ii;0p:x=,0q:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bH:{"^":"k;",$isbH:1,"%":"SVGTransform"},my:{"^":"k8;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[P.bH]},
$isi:1,
$asi:function(){return[P.bH]},
$isd:1,
$asd:function(){return[P.bH]},
$ast:function(){return[P.bH]},
"%":"SVGTransformList"},mC:{"^":"b6;0p:x=,0q:y=","%":"SVGUseElement"},js:{"^":"k+q;"},jt:{"^":"js+t;"},jD:{"^":"k+q;"},jE:{"^":"jD+t;"},jW:{"^":"k+q;"},jX:{"^":"jW+t;"},k7:{"^":"k+q;"},k8:{"^":"k7+t;"}}],["","",,P,{"^":"",l3:{"^":"k;0k:length=","%":"AudioBuffer"},l4:{"^":"j2;",
m:function(a,b){return P.ar(a.get(H.C(b)))},
H:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.ar(y.value[1]))}},
gT:function(a){var z=H.b([],[P.f])
this.H(a,new P.fm(z))
return z},
gk:function(a){return a.size},
$asa0:function(){return[P.f,null]},
$isT:1,
$asT:function(){return[P.f,null]},
"%":"AudioParamMap"},fm:{"^":"p:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},l5:{"^":"Z;0k:length=","%":"AudioTrackList"},fn:{"^":"Z;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m9:{"^":"fn;0k:length=","%":"OfflineAudioContext"},j2:{"^":"k+a0;"}}],["","",,P,{"^":"",dY:{"^":"k;",$isdY:1,"%":"WebGLRenderingContext"},iB:{"^":"k;",$isiB:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ml:{"^":"jU;",
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.ar(a.item(b))},
w:function(a,b){return this.m(a,b)},
$asq:function(){return[[P.T,,,]]},
$isi:1,
$asi:function(){return[[P.T,,,]]},
$isd:1,
$asd:function(){return[[P.T,,,]]},
$ast:function(){return[[P.T,,,]]},
"%":"SQLResultSetRowList"},jT:{"^":"k+q;"},jU:{"^":"jT+t;"}}],["","",,O,{"^":"",fw:{"^":"a;0a,0b,0c,0d,$ti",
cf:function(a,b,c){var z={func:1,ret:-1,args:[P.D,[P.i,H.r(this,0)]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bj:function(a,b){return this.cf(a,null,b)},
d5:function(a){H.z(a,"$isi",this.$ti,"$asi")
return!0},
cQ:function(a,b){var z
H.z(b,"$isi",this.$ti,"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gJ:function(a){var z=this.a
return new J.am(z,z.length,0,[H.r(z,0)])},
w:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.j(z,b)
return z[b]},
$isi:1,
n:{
dn:function(a){var z=new O.fw([a])
z.a=H.b([],[a])
return z}}},cB:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gE:function(){var z=this.b
if(z==null){z=D.av()
this.b=z}return z},
cu:function(a){var z=this.b
if(!(z==null))z.O(a)},
a9:function(){return this.cu(null)},
gar:function(a){var z=this.a
if(z.length>0)return C.a.gaF(z)
else return V.dL()},
bZ:function(a){var z=this.a
if(a==null)C.a.h(z,V.dL())
else C.a.h(z,a)
this.a9()},
bc:function(){var z=this.a
if(z.length>0){z.pop()
this.a9()}}}}],["","",,E,{"^":"",de:{"^":"a;"},au:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0M:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
bs:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.v();){y=z.d
if(y.f==null)y.bs()}},
sbl:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gE()
y.toString
x=H.h(this.gbU(),{func:1,ret:-1,args:[D.v]})
C.a.V(y.a,x)}y=this.c
if(y!=null){y=y.gE()
y.toString
x=H.h(this.gbU(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)}w=new D.O("shape",z,this.c,this,[F.e1])
w.b=!0
this.U(w)}},
sc2:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gE()
z.toString
y=H.h(this.gbV(),{func:1,ret:-1,args:[D.v]})
C.a.V(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gE()
z.toString
y=H.h(this.gbV(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}this.bs()
w=new D.O("technique",x,this.f,this,[O.cK])
w.b=!0
this.U(w)}},
sas:function(a){var z,y,x,w
if(!J.X(this.r,a)){z=this.r
if(z!=null){y=z.gE()
y.toString
x=H.h(this.gbT(),{func:1,ret:-1,args:[D.v]})
C.a.V(y.a,x)}if(a!=null){y=a.gE()
y.toString
x=H.h(this.gbT(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,x)}this.r=a
w=new D.O("mover",z,a,this,[U.c2])
w.b=!0
this.U(w)}},
c6:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.c
z.sc7(z.a+z.d*b.y)
z.sbX(0,z.b+z.e*b.y)
z.sc0(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.aw(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.A(0,V.aw(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.A(0,V.aw(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.aH(0)}u=z.x}else u=null
if(!J.X(u,this.x)){t=this.x
this.x=u
s=new D.O("matrix",t,u,this,[V.c1])
s.b=!0
this.U(s)}for(z=this.y.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.v();)z.d.c6(0,b)},
aj:function(a){var z,y,x,w,v,u,t,s
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gar(z))
else C.a.h(z.a,y.A(0,z.gar(z)))
z.a9()
a.c_(this.f)
z=a.dy
x=(z&&C.a).gaF(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.m(0,"Depth")
if(w==null){z=a.a
w=new A.fE(z,"Depth")
w.cs(z,"Depth")
y=$.fG
v=$.fF
w.c=w.bz(y,35633)
w.d=w.bz(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.d0(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.V(P.S("Failed to link shader: "+H.e(u)))}w.df()
w.dh()
w.x=w.f.m(0,"posAttr")
w.y=H.aZ(w.r.m(0,"objClr"),"$iscO")
w.z=H.aZ(w.r.m(0,"fogClr"),"$iscO")
w.Q=H.aZ(w.r.m(0,"fogStart"),"$iscM")
w.ch=H.aZ(w.r.m(0,"fogStop"),"$iscM")
w.cx=H.aZ(w.r.m(0,"viewObjMat"),"$iscP")
w.cy=H.aZ(w.r.m(0,"projMat"),"$iscP")
if(a.fr.bO(0,"Depth"))H.V(P.S('Shader cache already contains a shader by the name "Depth".'))
a.fr.I(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.di)){this.e=null
y=null}if(y==null){z=this.d.dv(new Z.iU(a.a),$.$get$ap())
y=z.dK($.$get$ap())
v=x.a
y.e=v.x.c
this.e=z
z=v}a.a.useProgram(z.e)
z.f.dJ()
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
y=y.gar(y)
v=z.cy
v.toString
v.bk(y.c4(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gar(y)
v=a.dx
v=y.A(0,v.gar(v))
a.cx=v
y=v}z=z.cx
z.toString
z.bk(y.c4(0,!0))
y=this.e
y.b0(a)
y.aj(a)
y.es(a)
y=x.a
y.toString
a.a.useProgram(null)
y.f.dI()}for(z=this.y.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.v();)z.d.aj(a)
a.bY()
a.dx.bc()},
U:function(a){var z=this.z
if(!(z==null))z.O(a)},
X:function(){return this.U(null)},
e3:[function(a){H.l(a,"$isv")
this.e=null
this.U(a)},function(){return this.e3(null)},"eT","$1","$0","gbU",0,2,1],
e4:[function(a){this.U(H.l(a,"$isv"))},function(){return this.e4(null)},"eU","$1","$0","gbV",0,2,1],
e2:[function(a){this.U(H.l(a,"$isv"))},function(){return this.e2(null)},"eS","$1","$0","gbT",0,2,1],
e0:[function(a){this.U(H.l(a,"$isv"))},function(){return this.e0(null)},"eQ","$1","$0","gbS",0,2,1],
eP:[function(a,b){var z,y,x,w,v,u,t
H.z(b,"$isi",[E.au],"$asi")
for(z=b.length,y=this.gbS(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.gM()==null){t=new D.bz()
t.a=H.b([],w)
t.c=0
u.sM(t)}t=u.gM()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.X()},"$2","ge_",8,0,6],
eR:[function(a,b){var z,y,x,w,v,u,t
H.z(b,"$isi",[E.au],"$asi")
for(z=b.length,y=this.gbS(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.gM()==null){t=new D.bz()
t.a=H.b([],w)
t.c=0
u.sM(t)}t=u.gM()
t.toString
H.h(y,x)
C.a.V(t.a,y)}}this.X()},"$2","ge1",8,0,6],
$isdM:1},hT:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
cq:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.bx(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cB()
y=[V.c1]
z.a=H.b([],y)
x=z.gE()
x.toString
w={func:1,ret:-1,args:[D.v]}
v=H.h(new E.hV(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cB()
z.a=H.b([],y)
v=z.gE()
v.toString
x=H.h(new E.hW(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cB()
z.a=H.b([],y)
y=z.gE()
y.toString
w=H.h(new E.hX(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.b([],[O.cK])
this.dy=z
C.a.h(z,null)
this.fr=new H.aK(0,0,[P.f,A.e0])},
c_:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaF(z):a;(z&&C.a).h(z,y)},
bY:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hU:function(a,b){var z=new E.hT(a,b)
z.cq(a,b)
return z}}},hV:{"^":"p:7;a",
$1:function(a){var z
H.l(a,"$isv")
z=this.a
z.z=null
z.ch=null}},hW:{"^":"p:7;a",
$1:function(a){var z
H.l(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hX:{"^":"p:7;a",
$1:function(a){var z
H.l(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},ik:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0M:x@,0y,0z,0Q,0ch",
cw:[function(a){var z
H.l(a,"$isv")
z=this.x
if(!(z==null))z.O(a)
this.eh()},function(){return this.cw(null)},"cv","$1","$0","gbo",0,2,1],
bF:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.A()
if(typeof z!=="number")return H.E(z)
x=C.e.bQ(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.A()
w=C.e.bQ(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
eh:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.im(this),{func:1,ret:-1,args:[P.N]})
C.t.cN(z)
C.t.da(z,W.eW(y,P.N))}},
eg:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.bF()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.bx(w,!1)
x.y=P.fK(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.a9()
w=x.db
C.a.sk(w.a,0)
w.a9()
w=x.dx
C.a.sk(w.a,0)
w.a9()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aj(this.e)}}catch(v){z=H.a5(v)
y=H.aY(v)
P.f7("Error: "+H.e(z))
P.f7("Stack: "+H.e(y))
throw H.c(z)}},
n:{
il:function(a,b,c,d,e){var z,y,x,w
z=J.F(a)
if(!!z.$iscp)return E.eb(a,!0,!0,!0,!1)
y=W.dl(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbN(a).h(0,y)
w=E.eb(y,!0,!0,!0,!1)
w.a=a
return w},
eb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ik()
y=P.hi(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
x=C.f.bh(a,"webgl",y)
x=H.l(x==null?C.f.bh(a,"experimental-webgl",y):x,"$isdY")
if(x==null)H.V(P.S("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hU(x,a)
w=new T.ij(x)
w.b=H.Q(x.getParameter(3379))
w.c=H.Q(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iK(a)
v=new X.hf()
v.c=new X.ba(!1,!1,!1)
v.d=P.bE(null,null,null,P.D)
w.b=v
v=new X.ht(w)
v.f=0
v.r=new V.W(0,0)
v.x=new V.W(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hl(w)
v.r=0
v.x=new V.W(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iq(w)
v.e=0
v.f=new V.W(0,0)
v.r=new V.W(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.e6,P.a]])
w.z=v
u=document
t=W.af
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.U(u,"contextmenu",H.h(w.gcU(),s),!1,t))
v=w.z
r=W.a3
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.U(a,"focus",H.h(w.gcX(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.U(a,"blur",H.h(w.gcR(),q),!1,r))
v=w.z
p=W.b8
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.U(u,"keyup",H.h(w.gcZ(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.U(u,"keydown",H.h(w.gcY(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.U(a,"mousedown",H.h(w.gd0(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mouseup",H.h(w.gd2(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mousemove",H.h(w.gd1(),s),!1,t))
p=w.z
o=W.bm;(p&&C.a).h(p,W.U(a,H.C(W.fP(a)),H.h(w.gd3(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.U(u,"mousemove",H.h(w.gcV(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.U(u,"mouseup",H.h(w.gcW(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.U(u,"pointerlockchange",H.h(w.gd4(),q),!1,r))
r=w.z
q=W.aM
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.U(a,"touchstart",H.h(w.gd8(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchend",H.h(w.gd6(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchmove",H.h(w.gd7(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.bx(Date.now(),!1)
z.ch=0
z.bF()
return z}}},im:{"^":"p:38;a",
$1:function(a){var z
H.kT(a)
z=this.a
if(z.z){z.z=!1
z.eg()}}}}],["","",,Z,{"^":"",ew:{"^":"a;a,b",n:{
cR:function(a,b,c){var z
H.z(c,"$isd",[P.D],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cX(c)),35044)
a.bindBuffer(b,null)
return new Z.ew(b,z)}}},dh:{"^":"de;a,b,c,d,e",
b0:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.a5(y)
x=P.S('Failed to bind buffer attribute "'+J.Y(this.a)+'": '+H.e(z))
throw H.c(x)}},
i:function(a){return"["+J.Y(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.e(this.e)+"]"}},iU:{"^":"a;a",$isl6:1},di:{"^":"a;a,0b,c,d",
dK:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b0:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b0(a)},
es:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aj:function(a){var z,y,x,w,v
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.Y(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$ismr:1},bX:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aL(this.c)+"'")+"]"}},es:{"^":"a;a",
gbm:function(a){var z,y
z=this.a
y=(z&$.$get$ap().a)!==0?3:0
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bk().a)!==0)y+=3
if((z&$.$get$bl().a)!==0)y+=4
if((z&$.$get$aT().a)!==0)++y
return(z&$.$get$aO().a)!==0?y+4:y},
dr:function(a){var z,y,x
z=$.$get$ap()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bk()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bl()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ev()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.es))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.f])
y=this.a
if((y&$.$get$ap().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bk().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bl().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
n:{
a8:function(a){return new Z.es(a)}}}}],["","",,D,{"^":"",fr:{"^":"a;"},bz:{"^":"a;0a,0b,0c",
O:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.v(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.H(y,new D.fT(z))
return x!==0},
ei:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.O(y)}}},
aH:function(a){return this.ei(a,!0,!1)},
n:{
av:function(){var z=new D.bz()
z.a=H.b([],[{func:1,ret:-1,args:[D.v]}])
z.c=0
return z}}},fT:{"^":"p:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"a;a,0b"},h4:{"^":"v;c,d,a,0b,$ti"},h5:{"^":"v;c,d,a,0b,$ti"},O:{"^":"v;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}}],["","",,X,{"^":"",dj:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dj))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)},
n:{"^":"l7<"}},dD:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dD))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}},hf:{"^":"a;0a,0b,0c,0d",
ea:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
e6:function(a){this.c=a.b
this.d.V(0,a.a)
return!1}},hl:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
bb:function(a,b){this.r=a.a
return!1},
au:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ce()
if(typeof z!=="number")return z.c8()
this.r=(z&~y)>>>0
return!1},
at:function(a,b){return!1},
eb:function(a){return!1},
d_:function(a,b,c){return}},ba:{"^":"a;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ba))return!1
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
return z+(this.c?"Shift+":"")}},ht:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bb:function(a,b){this.f=a.a
return!1},
au:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ce()
if(typeof z!=="number")return z.c8()
this.f=(z&~y)>>>0
return!1},
at:function(a,b){return!1},
ec:function(a,b){return!1}},hF:{"^":"v;"},ip:{"^":"hF;x,y,z,Q,ch,c,d,e,a,0b"},iq:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bC:function(a,b){var z,y,x,w
H.z(a,"$isd",[V.W],"$asd")
z=new P.bx(Date.now(),!1)
y=a.length>0?a[0]:new V.W(0,0)
x=this.a.gdz()
w=new X.ip(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
e9:function(a){var z
H.z(a,"$isd",[V.W],"$asd")
z=this.b
if(z==null)return!1
z.O(this.bC(a,!0))
return!0},
e7:function(a){var z
H.z(a,"$isd",[V.W],"$asd")
z=this.c
if(z==null)return!1
z.O(this.bC(a,!0))
return!0},
e8:function(a){H.z(a,"$isd",[V.W],"$asd")
return!1}},iK:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gdz:function(){var z=this.a
return V.dX(0,0,(z&&C.f).gaC(z).c,C.f.gaC(z).d)},
by:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dD(z,new X.ba(y,a.altKey,a.shiftKey))},
af:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ba(y,a.altKey,a.shiftKey)},
aZ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ba(y,a.altKey,a.shiftKey)},
a4:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.ak()
v=z.top
if(typeof x!=="number")return x.ak()
return new V.W(y-w,x-v)},
ao:function(a){return new V.bI(a.movementX,a.movementY)},
aW:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.W])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.e.a_(u.pageX)
C.e.a_(u.pageY)
s=z.left
C.e.a_(u.pageX)
C.a.h(y,new V.W(t-s,C.e.a_(u.pageY)-z.top))}return y},
a3:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dj(z,new X.ba(y,a.altKey,a.shiftKey))},
eD:[function(a){this.f=!0},"$1","gcX",4,0,4],
ex:[function(a){this.f=!1},"$1","gcR",4,0,4],
eA:[function(a){if(this.f)a.preventDefault()},"$1","gcU",4,0,4],
eF:[function(a){var z
H.l(a,"$isb8")
if(!this.f)return
z=this.by(a)
this.b.ea(z)},"$1","gcZ",4,0,19],
eE:[function(a){var z
H.l(a,"$isb8")
if(!this.f)return
z=this.by(a)
this.b.e6(z)},"$1","gcY",4,0,19],
eG:[function(a){var z,y,x,w
H.l(a,"$isaf")
z=this.a
z.focus()
this.f=!0
this.af(a)
if(this.x){y=this.a3(a)
x=this.ao(a)
if(this.d.bb(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a3(a)
w=this.a4(a)
if(this.c.bb(y,w))a.preventDefault()},"$1","gd0",4,0,3],
eI:[function(a){var z,y,x
H.l(a,"$isaf")
this.af(a)
z=this.a3(a)
if(this.x){y=this.ao(a)
if(this.d.au(z,y))a.preventDefault()
return}if(this.r)return
x=this.a4(a)
if(this.c.au(z,x))a.preventDefault()},"$1","gd2",4,0,3],
eC:[function(a){var z,y,x,w
H.l(a,"$isaf")
z=this.a
if(!(z&&C.f).gaC(z).bP(0,new P.bG(a.clientX,a.clientY,[P.N]))){this.af(a)
y=this.a3(a)
if(this.x){x=this.ao(a)
if(this.d.au(y,x))a.preventDefault()
return}if(this.r)return
w=this.a4(a)
if(this.c.au(y,w))a.preventDefault()}},"$1","gcW",4,0,3],
eH:[function(a){var z,y,x
H.l(a,"$isaf")
this.af(a)
z=this.a3(a)
if(this.x){y=this.ao(a)
if(this.d.at(z,y))a.preventDefault()
return}if(this.r)return
x=this.a4(a)
if(this.c.at(z,x))a.preventDefault()},"$1","gd1",4,0,3],
eB:[function(a){var z,y,x,w
H.l(a,"$isaf")
z=this.a
if(!(z&&C.f).gaC(z).bP(0,new P.bG(a.clientX,a.clientY,[P.N]))){this.af(a)
y=this.a3(a)
if(this.x){x=this.ao(a)
if(this.d.at(y,x))a.preventDefault()
return}if(this.r)return
w=this.a4(a)
if(this.c.at(y,w))a.preventDefault()}},"$1","gcV",4,0,3],
eJ:[function(a){var z,y
H.l(a,"$isbm")
this.af(a)
z=new V.bI((a&&C.r).gdG(a),C.r.gdH(a)).P(0,180)
if(this.x){if(this.d.eb(z))a.preventDefault()
return}if(this.r)return
y=this.a4(a)
if(this.c.ec(z,y))a.preventDefault()},"$1","gd3",4,0,34],
eK:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a3(this.y)
v=this.a4(this.y)
this.d.d_(w,v,x)}},"$1","gd4",4,0,4],
eN:[function(a){var z
H.l(a,"$isaM")
this.a.focus()
this.f=!0
this.aZ(a)
z=this.aW(a)
if(this.e.e9(z))a.preventDefault()},"$1","gd8",4,0,8],
eL:[function(a){var z
H.l(a,"$isaM")
this.aZ(a)
z=this.aW(a)
if(this.e.e7(z))a.preventDefault()},"$1","gd6",4,0,8],
eM:[function(a){var z
H.l(a,"$isaM")
this.aZ(a)
z=this.aW(a)
if(this.e.e8(z))a.preventDefault()},"$1","gd7",4,0,8]}}],["","",,V,{"^":"",
l9:[function(a,b){if(typeof b!=="number")return b.ak()
if(typeof a!=="number")return H.E(a)
return Math.abs(b-a)<=1e-9},"$2","hq",8,0,31],
d9:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.cd(a-b,z)
return(a<0?a+z:a)+b},
B:function(a,b,c){if(a==null)return C.b.Y("null",c)
return C.b.Y(C.e.er($.m.$2(a,0)?0:a,b),c+b+1)},
cf:function(a,b,c){var z,y,x,w,v
H.z(a,"$isd",[P.u],"$asd")
z=H.b([],[P.f])
for(y=0,x=0;x<4;++x){w=V.B(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.j(z,v)
C.a.I(z,v,C.b.Y(z[v],y))}return z},
bQ:{"^":"a;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bQ))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}},
bR:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bR))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}},
c1:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
c4:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
A:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.A()
if(typeof y!=="number")return H.E(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.A()
if(typeof w!=="number")return H.E(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.A()
if(typeof u!=="number")return H.E(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.A()
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
if(typeof f!=="number")return f.A()
e=this.f
if(typeof e!=="number")return e.A()
d=this.r
if(typeof d!=="number")return d.A()
c=this.x
if(typeof c!=="number")return c.A()
b=this.y
if(typeof b!=="number")return b.A()
a=this.z
if(typeof a!=="number")return a.A()
a0=this.Q
if(typeof a0!=="number")return a0.A()
a1=this.ch
if(typeof a1!=="number")return a1.A()
a2=this.cx
if(typeof a2!=="number")return a2.A()
a3=this.cy
if(typeof a3!=="number")return a3.A()
a4=this.db
if(typeof a4!=="number")return a4.A()
a5=this.dx
if(typeof a5!=="number")return a5.A()
return V.aw(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c1))return!1
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
i:function(a){return this.C()},
bR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.cf(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cf(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cf(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cf(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
C:function(){return this.bR("",3,0)},
u:function(a){return this.bR(a,3,0)},
n:{
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.c1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dL:function(){return V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
W:{"^":"a;p:a>,q:b>",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}},
cE:{"^":"a;p:a>,q:b>,c",
ak:function(a,b){return new V.cE(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cE))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}},
dS:{"^":"a;p:a>,q:b>,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dS))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}},
dW:{"^":"a;p:a>,q:b>,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dW))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"},
n:{
dX:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dW(a,b,c,d)}}},
bI:{"^":"a;a,b",
dU:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return Math.sqrt(z*z+y*y)},"$0","gk",1,0,20],
P:function(a,b){var z,y
if($.m.$2(b,0))return new V.bI(0,0)
z=this.a
if(typeof z!=="number")return z.P()
y=this.b
if(typeof y!=="number")return y.P()
return new V.bI(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bI))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}},
P:{"^":"a;a,b,c",
dU:[function(a){return Math.sqrt(this.S(this))},"$0","gk",1,0,20],
S:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ba:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.P(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b7:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.P(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.P(this.a+b.a,this.b+b.b,this.c+b.c)},
aI:function(a){return new V.P(-this.a,-this.b,-this.c)},
P:function(a,b){if($.m.$2(b,0))return new V.P(0,0,0)
return new V.P(this.a/b,this.b/b,this.c/b)},
dS:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
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
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dp:{"^":"c2;0a,0b",
gE:function(){var z=this.b
if(z==null){z=D.av()
this.b=z}return z},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dp))return!1
return J.X(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}},c2:{"^":"fr;"},dZ:{"^":"c2;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gE:function(){var z=this.y
if(z==null){z=D.av()
this.y=z}return z},
ae:function(a){var z=this.y
if(!(z==null))z.O(a)},
sc7:function(a){var z,y
a=V.d9(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.O("yaw",y,a,this,[P.u])
z.b=!0
this.ae(z)}},
sbX:function(a,b){var z,y
b=V.d9(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.O("pitch",y,b,this,[P.u])
z.b=!0
this.ae(z)}},
sc0:function(a){var z,y
a=V.d9(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.O("roll",y,a,this,[P.u])
z.b=!0
this.ae(z)}},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dZ))return!1
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
i:function(a){return"Rotater: ["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"], ["+V.B(this.d,3,0)+", "+V.B(this.e,3,0)+", "+V.B(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
am:[function(a){var z
H.l(a,"$isv")
z=this.x
if(!(z==null))z.O(a)},function(){return this.am(null)},"eu","$1","$0","gaa",0,2,1],
ey:[function(a,b){var z,y,x,w,v,u,t,s
z=E.au
H.z(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaa(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.gM()==null){s=new D.bz()
s.a=H.b([],v)
s.c=0
t.sM(s)}s=t.gM()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.h4(a,b,this,[z])
z.b=!0
this.am(z)},"$2","gcS",8,0,6],
ez:[function(a,b){var z,y,x,w,v,u,t,s
z=E.au
H.z(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaa(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.gM()==null){s=new D.bz()
s.a=H.b([],v)
s.c=0
t.sM(s)}s=t.gM()
s.toString
H.h(x,w)
C.a.V(s.a,x)}}z=new D.h5(a,b,this,[z])
z.b=!0
this.am(z)},"$2","gcT",8,0,6],
gE:function(){var z=this.x
if(z==null){z=D.av()
this.x=z}return z},
aj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.c_(this.c)
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
u=C.c.a_(v.a*x)
if(typeof w!=="number")return H.E(w)
t=C.c.a_(v.b*w)
s=C.c.a_(v.c*x)
a.c=s
v=C.c.a_(v.d*w)
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
s.bZ(V.aw(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dR
if(y==null){y=new V.P(0,0,-1)
m=y.P(0,Math.sqrt(y.S(y)))
y=new V.P(0,1,0).b7(m)
l=y.P(0,Math.sqrt(y.S(y)))
k=m.b7(l)
j=new V.P(0,0,0)
y=V.aw(l.a,k.a,m.a,l.aI(0).S(j),l.b,k.b,m.b,k.aI(0).S(j),l.c,k.c,m.c,m.aI(0).S(j),0,0,0,1)
$.dR=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.A(0,i)}a.db.bZ(i)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.v();)z.d.c6(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.v();)z.d.aj(a)
this.a.toString
a.cy.bc()
a.db.bc()
this.b.toString
a.bY()},
$ismh:1}}],["","",,A,{"^":"",dc:{"^":"a;a,b,c"},fl:{"^":"a;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
dJ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dI:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},fE:{"^":"e0;0x,0y,0z,0Q,0ch,0cx,0cy,a,b,0c,0d,0e,0f,0r"},e0:{"^":"de;",
cs:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
bz:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.d0(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.c(P.S("Error compiling shader '"+H.e(y)+"': "+H.e(x)))}return y},
df:function(){var z,y,x,w,v,u
z=H.b([],[A.dc])
y=this.a
x=H.Q(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.E(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dc(y,v.name,u))}this.f=new A.fl(z)},
dh:function(){var z,y,x,w,v,u
z=H.b([],[A.a_])
y=this.a
x=H.Q(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.E(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.dF(v.type,v.size,v.name,u))}this.r=new A.iA(z)},
ad:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.it(z,y,b,c)
else return A.cN(z,y,b,a,c)},
cK:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.iE(z,y,b,c)
else return A.cN(z,y,b,a,c)},
cL:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.iF(z,y,b,c)
else return A.cN(z,y,b,a,c)},
aB:function(a,b){return new P.ez(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
dF:function(a,b,c,d){switch(a){case 5120:return this.ad(b,c,d)
case 5121:return this.ad(b,c,d)
case 5122:return this.ad(b,c,d)
case 5123:return this.ad(b,c,d)
case 5124:return this.ad(b,c,d)
case 5125:return this.ad(b,c,d)
case 5126:return new A.cM(this.a,this.e,c,d)
case 35664:return new A.iv(this.a,this.e,c,d)
case 35665:return new A.cO(this.a,this.e,c,d)
case 35666:return new A.iy(this.a,this.e,c,d)
case 35667:return new A.iw(this.a,this.e,c,d)
case 35668:return new A.ix(this.a,this.e,c,d)
case 35669:return new A.iz(this.a,this.e,c,d)
case 35674:return new A.iC(this.a,this.e,c,d)
case 35675:return new A.iD(this.a,this.e,c,d)
case 35676:return new A.cP(this.a,this.e,c,d)
case 35678:return this.cK(b,c,d)
case 35680:return this.cL(b,c,d)
case 35670:throw H.c(this.aB("BOOL",c))
case 35671:throw H.c(this.aB("BOOL_VEC2",c))
case 35672:throw H.c(this.aB("BOOL_VEC3",c))
case 35673:throw H.c(this.aB("BOOL_VEC4",c))
default:throw H.c(P.S("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}},a_:{"^":"a;"},iA:{"^":"a;a",
m:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.C()},
dO:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
C:function(){return this.dO("\n")}},it:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform1i: "+H.e(this.c)}},iw:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform2i: "+H.e(this.c)}},ix:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform3i: "+H.e(this.c)}},iz:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform4i: "+H.e(this.c)}},iu:{"^":"a_;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.e(this.c)},
n:{
cN:function(a,b,c,d,e){var z=new A.iu(a,b,c,e)
z.f=d
z.e=P.hj(d,0,!1,P.D)
return z}}},cM:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform1f: "+H.e(this.c)}},iv:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform2f: "+H.e(this.c)}},cO:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform3f: "+H.e(this.c)}},iy:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform4f: "+H.e(this.c)}},iC:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}},iD:{"^":"a_;a,b,c,d",
i:function(a){return"UniformMat3: "+H.e(this.c)}},cP:{"^":"a_;a,b,c,d",
bk:function(a){var z=new Float32Array(H.cX(H.z(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.e(this.c)}},iE:{"^":"a_;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.e(this.c)}},iF:{"^":"a_;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}}],["","",,F,{"^":"",
cb:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bp:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.cb(y)
k=F.cb(z.b)
j=F.kX(d,e,new F.km(z,F.cb(z.c),F.cb(z.d),k,l,c),b)
if(j!=null)a.dY(j)},
kX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.aN,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.e2()
y=H.b([],[F.aN])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cQ(null,null,new V.bR(u,0,0,1),null,null,new V.W(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.b6(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cQ(null,null,new V.bR(o,n,m,1),null,null,new V.W(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.b6(d))}}z.d.dm(a+1,b+1,y)
return z},
km:{"^":"p:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ba(z.b,b).ba(z.d.ba(z.c,b),c)
z=new V.cE(y.a,y.b,y.c)
if(!J.X(a.f,z)){a.f=z
z=a.a
if(z!=null)z.X()}z=y.P(0,Math.sqrt(y.S(y)))
if(!J.X(a.z,z)){a.z=z
z=a.a
if(z!=null)z.X()}z=1-b
x=1-c
x=new V.dS(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.X(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.X()}}},
ae:{"^":"a;0a,0b,0c,0d,0e",
gb8:function(){return this.a==null||this.b==null||this.c==null},
cE:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.P(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.dS())return
return v.P(0,Math.sqrt(v.S(v)))},
cG:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.ak(0,y)
z=new V.P(z.a,z.b,z.c)
v=z.P(0,Math.sqrt(z.S(z)))
z=w.ak(0,y)
z=new V.P(z.a,z.b,z.c)
z=v.b7(z.P(0,Math.sqrt(z.S(z))))
return z.P(0,Math.sqrt(z.S(z)))},
b2:function(){if(this.d!=null)return!0
var z=this.cE()
if(z==null){z=this.cG()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
u:function(a){var z,y
if(this.gb8())return a+"disposed"
z=a+C.b.Y(J.Y(this.a.e),0)+", "+C.b.Y(J.Y(this.b.e),0)+", "+C.b.Y(J.Y(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
C:function(){return this.u("")},
n:{
bA:function(a,b,c){var z,y,x
z=new F.ae()
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
z.a.a.X()
return z}}},
cz:{"^":"a;0a,0b",
gb8:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
u:function(a){if(this.gb8())return a+"disposed"
return a+C.b.Y(J.Y(this.a.e),0)+", "+C.b.Y(J.Y(this.b.e),0)},
C:function(){return this.u("")}},
cD:{"^":"a;0a",
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
u:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.Y(J.Y(z.e),0)},
C:function(){return this.u("")}},
e1:{"^":"a;0a,0b,0c,0d,0e",
gE:function(){var z=this.e
if(z==null){z=D.av()
this.e=z}return z},
dY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.L()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){v=z[w]
this.a.h(0,v.dD())}this.a.L()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.L()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cD()
if(r.a==null)H.V(P.S("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.O(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.L()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.L()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.j(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cz()
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
if(!(t==null))t.O(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.A)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.L()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.L()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.j(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.L()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bA(p,o,l)}z=this.e
if(!(z==null))z.aH(0)},
dv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ap()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bk().a)!==0)++w
if((x&$.$get$bl().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
v=b.gbm(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dh])
for(r=0,q=0;q<w;++q){p=b.dr(q)
o=p.gbm(p)
C.a.I(s,q,new Z.dh(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.j(y,n)
m=y[n].dV(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.I(t,l,m[k]);++l}}r+=o}H.z(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cX(t)),35044)
y.bindBuffer(34962,null)
i=new Z.di(new Z.ew(34962,j),s,b)
i.b=H.b([],[Z.bX])
if(this.b.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.L()
C.a.h(h,g.e)}f=Z.cR(y,34963,H.z(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.bX(0,h.length,f))}if(this.c.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.L()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.L()
C.a.h(h,g.e)}f=Z.cR(y,34963,H.z(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.bX(1,h.length,f))}if(this.d.b.length!==0){x=P.D
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.L()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.L()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].c
g.a.a.L()
C.a.h(h,g.e)}f=Z.cR(y,34963,H.z(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.bX(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.l(z,"\n")},
U:function(a){var z=this.e
if(!(z==null))z.O(a)},
X:function(){return this.U(null)},
n:{
e2:function(){var z,y
z=new F.e1()
y=new F.iN(z)
y.b=!1
y.c=H.b([],[F.aN])
z.a=y
y=new F.i5(z)
y.b=H.b([],[F.cD])
z.b=y
y=new F.i4(z)
y.b=H.b([],[F.cz])
z.c=y
y=new F.i3(z)
y.b=H.b([],[F.ae])
z.d=y
z.e=null
return z}}},
i3:{"^":"a;a,0b",
dm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.z(c,"$isd",[F.aN],"$asd")
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
C.a.h(z,F.bA(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bA(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bA(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bA(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
b3:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].b2())x=!1
return x},
i:function(a){return this.C()},
u:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
C:function(){return this.u("")}},
i4:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.C()},
u:function(a){var z,y,x,w
z=H.b([],[P.f])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.j(w,x)
C.a.h(z,w[x].u(a+(""+x+". ")))}return C.a.l(z,"\n")},
C:function(){return this.u("")}},
i5:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.C()},
u:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
C:function(){return this.u("")}},
aN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
b6:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cQ(this.cx,x,u,z,y,w,v,a,t)},
dD:function(){return this.b6(null)},
dV:function(a){var z,y
z=J.F(a)
if(z.t(a,$.$get$ap())){z=this.f
y=[P.u]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aQ())){z=this.r
y=[P.u]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aP())){z=H.b([0,0,1],[P.u])
return z}else if(z.t(a,$.$get$aR())){z=this.y
y=[P.u]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.t(a,$.$get$aS())){z=this.z
y=[P.u]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bk())){z=this.Q
y=[P.u]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bl())){z=this.Q
y=[P.u]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$aT()))return H.b([this.ch],[P.u])
else if(z.t(a,$.$get$aO())){z=this.cx
y=[P.u]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.u])},
b2:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.P(0,0,0)
this.d.H(0,new F.iT(z))
z=z.a
this.r=z.P(0,Math.sqrt(z.S(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.aH(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
u:function(a){var z,y,x
z=H.b([],[P.f])
C.a.h(z,C.b.Y(J.Y(this.e),0))
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
C.a.h(z,V.B(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.l(z,", ")
return a+"{"+x+"}"},
C:function(){return this.u("")},
n:{
cQ:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aN()
y=new F.iS(z)
y.b=H.b([],[F.cD])
z.b=y
y=new F.iR(z)
x=[F.cz]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iO(z)
x=[F.ae]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$et()
z.e=0
y=$.$get$ap()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aQ().a)!==0?e:null
z.x=(x&$.$get$aP().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$eu().a)!==0?c:null
z.ch=(x&$.$get$aT().a)!==0?i:0
z.cx=(x&$.$get$aO().a)!==0?a:null
return z}}},
iT:{"^":"p:9;a",
$1:function(a){var z,y
H.l(a,"$isae")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
iN:{"^":"a;a,0b,0c",
L:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.j(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.c(P.S("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.X()
return!0},
gk:function(a){return this.c.length},
b3:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].b2()
return!0},
i:function(a){return this.C()},
u:function(a){var z,y,x,w
this.L()
z=H.b([],[P.f])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
C:function(){return this.u("")}},
iO:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){H.h(b,{func:1,ret:-1,args:[F.ae]})
C.a.H(this.b,b)
C.a.H(this.c,new F.iP(this,b))
C.a.H(this.d,new F.iQ(this,b))},
i:function(a){return this.C()},
u:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
C:function(){return this.u("")}},
iP:{"^":"p:9;a,b",
$1:function(a){H.l(a,"$isae")
if(!J.X(a.a,this.a))this.b.$1(a)}},
iQ:{"^":"p:9;a,b",
$1:function(a){var z
H.l(a,"$isae")
z=this.a
if(!J.X(a.a,z)&&!J.X(a.b,z))this.b.$1(a)}},
iR:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.C()},
u:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
C:function(){return this.u("")}},
iS:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.C()},
u:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].u(a))
return C.a.l(z,"\n")},
C:function(){return this.u("")}}}],["","",,O,{"^":"",fD:{"^":"cK;0a,0b,0c,0d,0e,0f",
gE:function(){var z=this.f
if(z==null){z=D.av()
this.f=z}return z},
ax:function(a){var z=this.f
if(!(z==null))z.O(a)}},cK:{"^":"a;"}}],["","",,T,{"^":"",ij:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",bw:{"^":"a;",
ai:function(a,b){return!0},
i:function(a){return"all"},
$isao:1},ao:{"^":"a;"},dK:{"^":"a;",
ai:["co",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].ai(0,b))return!0
return!1}],
i:["bn",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isao:1},ab:{"^":"dK;0a",
ai:function(a,b){return!this.co(0,b)},
i:function(a){return"!["+this.bn(0)+"]"}},hO:{"^":"a;0a,0b",
ai:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.cF(this.a)
y=H.cF(this.b)
return z+".."+y},
$isao:1,
n:{
I:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.c(P.S("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.ab(a,0)
y=C.b.ab(b,0)
x=new V.hO()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},i1:{"^":"a;0a",
cr:function(a){var z,y
if(a.a.length<=0)throw H.c(P.S("May not create a SetMatcher with zero characters."))
z=new H.aK(0,0,[P.D,P.M])
for(y=new H.cA(a,a.gk(a),0,[H.aC(a,"q",0)]);y.v();)z.I(0,y.d,!0)
this.a=z},
ai:function(a,b){return this.a.bO(0,b)},
i:function(a){var z=this.a
return P.cJ(new H.dF(z,[H.r(z,0)]),0,null)},
$isao:1,
n:{
o:function(a){var z=new V.i1()
z.cr(a)
return z}}},e4:{"^":"a;a,b,0c,0d",
gdZ:function(a){return this.b},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ee(this.a.j(0,b))
w.a=H.b([],[V.ao])
w.c=!1
C.a.h(this.c,w)
return w},
dL:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.ai(0,a))return w}return},
i:function(a){return this.b}},ec:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.d8(this.b,"\n","\\n")
y=H.d8(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ed:{"^":"a;a,b,0c",
a6:function(a,b,c){var z,y,x
H.z(c,"$isd",[P.f],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.A)(c),++y){x=c[y]
this.c.I(0,x,b)}},
i:function(a){return this.b}},io:{"^":"a;0a,0b,0c",
j:function(a,b){var z=this.a.m(0,b)
if(z==null){z=new V.e4(this,b)
z.c=H.b([],[V.ee])
this.a.I(0,b,z)}return z},
D:function(a){var z,y
z=this.b.m(0,a)
if(z==null){z=new V.ed(this,a)
y=P.f
z.c=new H.aK(0,0,[y,y])
this.b.I(0,a,z)}return z},
c5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.ec])
y=this.c
x=[P.D]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.ab(a,t)
r=y.dL(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cJ(w,0,null)
throw H.c(P.S("Untokenizable string [state: "+y.gdZ(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cJ(w,0,null)
p=y.d
o=p.c.m(0,q)
u=new V.ec(o==null?p.b:o,q,t)}++t}}},
n:{
c6:function(){var z,y
z=new V.io()
y=P.f
z.a=new H.aK(0,0,[y,V.e4])
z.b=new H.aK(0,0,[y,V.ed])
return z}}},ee:{"^":"dK;b,0c,0a",
i:function(a){return this.b.b+": "+this.bn(0)}}}],["","",,X,{"^":"",dk:{"^":"a;",$isdM:1},fY:{"^":"e8;0a,0b,0c,0d,0e,0f,0r,0x",
gE:function(){var z=this.x
if(z==null){z=D.av()
this.x=z}return z}},hC:{"^":"a;0a,0b,0c,0d,0e",
gE:function(){var z=this.e
if(z==null){z=D.av()
this.e=z}return z},
an:[function(a){var z
H.l(a,"$isv")
z=this.e
if(!(z==null))z.O(a)},function(){return this.an(null)},"ev","$1","$0","gbp",0,2,1],
sas:function(a){var z,y,x
if(!J.X(this.a,a)){z=this.a
if(z!=null){z=z.gE()
z.toString
y=H.h(this.gbp(),{func:1,ret:-1,args:[D.v]})
C.a.V(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gE()
z.toString
y=H.h(this.gbp(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)}z=new D.O("mover",x,this.a,this,[U.c2])
z.b=!0
this.an(z)}},
$isdM:1,
$isdk:1},e8:{"^":"a;"}}],["","",,V,{"^":"",as:{"^":"a;",
aw:function(a){this.b=new P.h1(C.x)
this.c=null
this.d=H.b([],[[P.d,W.aI]])},
B:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.aI]))
y=a.split("\n")
for(z=y.length,x=[W.aI],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.C(u)
s=this.b.cJ(u,0,u.length)
r=s==null?u:s
C.w.cg(t,H.d8(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaF(this.d),t)}},
bW:function(a,b){var z,y,x,w
H.z(b,"$isd",[P.f],"$asd")
this.d=H.b([],[[P.d,W.aI]])
z=C.a.l(b,"\n")
y=this.c
if(y==null){y=this.aD()
this.c=y}for(y=y.c5(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)this.aG(y[w])}},fA:{"^":"as;a,0b,0c,0d",
aG:function(a){switch(a.a){case"Class":this.B(a.b,"#551")
break
case"Comment":this.B(a.b,"#777")
break
case"Id":this.B(a.b,"#111")
break
case"Num":this.B(a.b,"#191")
break
case"Reserved":this.B(a.b,"#119")
break
case"String":this.B(a.b,"#171")
break
case"Symbol":this.B(a.b,"#616")
break
case"Type":this.B(a.b,"#B11")
break
case"Whitespace":this.B(a.b,"#111")
break}},
aD:function(){var z,y,x,w
z=V.c6()
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
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bw())
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
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bw())
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
w=[V.ao]
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
x.d=x.a.D("Num")
x=z.j(0,"Float")
x.d=x.a.D("Num")
x=z.j(0,"Sym")
x.d=x.a.D("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.D("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.D("String")
x=z.j(0,"EndComment")
x.d=x.a.D("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.D("Whitespace")
x=z.j(0,"Id")
y=x.a.D("Id")
x.d=y
x=[P.f]
y.a6(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.a6(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.a6(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},fZ:{"^":"as;a,0b,0c,0d",
aG:function(a){switch(a.a){case"Builtin":this.B(a.b,"#411")
break
case"Comment":this.B(a.b,"#777")
break
case"Id":this.B(a.b,"#111")
break
case"Num":this.B(a.b,"#191")
break
case"Preprocess":this.B(a.b,"#737")
break
case"Reserved":this.B(a.b,"#119")
break
case"Symbol":this.B(a.b,"#611")
break
case"Type":this.B(a.b,"#171")
break
case"Whitespace":this.B(a.b,"#111")
break}},
aD:function(){var z,y,x,w
z=V.c6()
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
w=[V.ao]
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
y.d=y.a.D("Num")
y=z.j(0,"Float")
y.d=y.a.D("Num")
y=z.j(0,"Sym")
y.d=y.a.D("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.D("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.D("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.D("Whitespace")
y=z.j(0,"Id")
x=y.a.D("Id")
y.d=x
y=[P.f]
x.a6(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.a6(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.a6(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},h0:{"^":"as;a,0b,0c,0d",
aG:function(a){switch(a.a){case"Attr":this.B(a.b,"#911")
this.B("=","#111")
break
case"Id":this.B(a.b,"#111")
break
case"Other":this.B(a.b,"#111")
break
case"Reserved":this.B(a.b,"#119")
break
case"String":this.B(a.b,"#171")
break
case"Symbol":this.B(a.b,"#616")
break}},
aD:function(){var z,y,x
z=V.c6()
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
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.bw())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bw())
y=z.j(0,"Other").l(0,"Other")
x=new V.ab()
x.a=H.b([],[V.ao])
C.a.h(y.a,x)
y=V.o(new H.n('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.D("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.D("String")
y=z.j(0,"Id")
x=y.a.D("Id")
y.d=x
x.a6(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
x=z.j(0,"Attr")
x.d=x.a.D("Attr")
x=z.j(0,"Other")
x.d=x.a.D("Other")
return z}},hE:{"^":"as;a,0b,0c,0d",
bW:function(a,b){H.z(b,"$isd",[P.f],"$asd")
this.d=H.b([],[[P.d,W.aI]])
this.B(C.a.l(b,"\n"),"#111")},
aG:function(a){},
aD:function(){return}},i6:{"^":"a;0a,0b",
ct:function(a,b){var z,y,x,w,v,u,t
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
t=W.a3
W.U(z,"scroll",H.h(new V.i8(x,y),{func:1,ret:-1,args:[t]}),!1,t)},
dn:function(a,b,c){var z,y,x,w
a=H.Q(C.c.dw(a,0,4))
if(c.length===0)c=P.cW(C.i,b,C.h,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.cm(null)
w.href="#"+c
w.textContent=b
z.appendChild(w)
this.a.appendChild(z)},
aq:function(a,b){return this.dn(a,b,"")},
R:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.z(a,"$isd",[P.f],"$asd")
this.dg()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.c5(C.a.dT(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
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
if(H.fa(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.j(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cW(C.i,s,C.h,!1)
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
cb:function(a){var z,y,x,w
z=new V.fA("dart")
z.aw("dart")
y=new V.fZ("glsl")
y.aw("glsl")
x=new V.h0("html")
x.aw("html")
w=C.a.dM(H.b([z,y,x],[V.as]),new V.i9(a))
if(w!=null)return w
z=new V.hE("plain")
z.aw("plain")
return z},
bJ:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.z(a2,"$isd",[P.f],"$asd")
z=H.b([],[P.D])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(C.b.aJ(w,"+")){C.a.I(a2,x,C.b.aL(w,1))
C.a.h(z,1)
y=!0}else if(C.b.aJ(w,"-")){C.a.I(a2,x,C.b.aL(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.cb(a0)
v.bW(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cW(C.i,a,C.h,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.cm(null)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.A)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.A)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gJ(w);b.v();)h.appendChild(b.gF(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
dg:function(){var z,y,x,w
if(this.b!=null)return
z=V.c6()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.o(new H.n("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.ab()
w=[V.ao]
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
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bw())
x=z.j(0,"Other").l(0,"Other")
y=new V.ab()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.o(new H.n("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.D("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.D("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.D("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.D("Link")
x=z.j(0,"Other")
x.d=x.a.D("Other")
this.b=z},
n:{
i7:function(a,b){var z=new V.i6()
z.ct(a,!0)
return z}}},i8:{"^":"p:36;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.e(-0.05*C.e.a_(this.b.scrollTop))+"px"
z.top=y}},i9:{"^":"p:37;a",
$1:function(a){return H.l(a,"$isas").a===this.a}}}],["","",,F,{"^":"",
f5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=V.i7("Tutorial 1",!0)
y=[P.f]
z.R(H.b(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."],y))
x=W.dl(null,null)
x.className="pageCanvas"
x.id="tutorial1"
z.a.appendChild(x)
z.aq(0,"Getting Started")
z.R(H.b(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."],y))
z.bJ("index.html","html",0,H.b(["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script type="application/dart" src="main.dart"></script>','    <script src="packages/browser/dart.js"></script>',"  </body>","</html>"],y))
z.bJ("main.dart","dart",0,H.b(["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Math.dart' as Math;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotater()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"],y))
z.aq(4,"ThreeDart")
z.R(H.b(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."],y))
z.aq(4,"Scene")
z.R(H.b(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "],y))
z.R(H.b(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."],y))
z.R(H.b(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."],y))
z.aq(4,"Entity")
z.R(H.b(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."],y))
z.R(H.b(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, torois, and knot. ","The shape can be loaded from a file or created mathmatically or procedually."],y))
z.R(H.b(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotater` to cause it to rotate. Movers can be grouped ","to multiply matrices togrether thus compounding the movements."],y))
z.R(H.b(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearence of fog or merky water."],y))
z.aq(4,"Summary")
z.R(H.b(["Play around with the Rotater, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."],y))
z.R(H.b(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."],y))
w=new E.au()
w.a=""
w.b=!0
y=E.au
z=O.dn(y)
w.y=z
z.bj(w.ge_(),w.ge1())
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
w.sbl(0,null)
w.sc2(null)
w.sas(null)
v=F.e2()
F.bp(v,null,null,1,1,1,0,0,1)
F.bp(v,null,null,1,1,0,1,0,3)
F.bp(v,null,null,1,1,0,0,1,2)
F.bp(v,null,null,1,1,-1,0,0,0)
F.bp(v,null,null,1,1,0,-1,0,0)
F.bp(v,null,null,1,1,0,0,-1,3)
z=v.e
if(!(z==null))++z.c
v.d.b3()
v.a.b3()
z=v.e
if(!(z==null))z.aH(0)
w.sbl(0,v)
z=new U.dZ()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sc7(0)
z.sbX(0,0)
z.sc0(0)
u=z.d
if(!$.m.$2(u,0.1)){t=z.d
z.d=0.1
u=new D.O("deltaYaw",t,0.1,z,[P.u])
u.b=!0
z.ae(u)}u=z.e
if(!$.m.$2(u,0.21)){t=z.e
z.e=0.21
u=new D.O("deltaPitch",t,0.21,z,[P.u])
u.b=!0
z.ae(u)}u=z.f
if(!$.m.$2(u,0.32)){t=z.f
z.f=0.32
u=new D.O("deltaRoll",t,0.32,z,[P.u])
u.b=!0
z.ae(u)}w.sas(z)
z=new O.fD()
z.d=1
z.e=10
s=new V.bQ(1,1,1)
z.b=s
u=[V.bQ]
r=new D.O("objectColor",null,s,z,u)
r.b=!0
z.ax(r)
s=new V.bQ(0,0,0)
if(!J.X(z.c,s)){t=z.c
z.c=s
u=new D.O("fogColor",t,s,z,u)
u.b=!0
z.ax(u)}u=z.d
if(!$.m.$2(u,3)){t=z.d
z.d=3
u=new D.O("fogStart",t,3,z,[P.u])
u.b=!0
z.ax(u)}u=z.e
if(!$.m.$2(u,6)){t=z.e
z.e=6
u=new D.O("fogStop",t,6,z,[P.u])
u.b=!0
z.ax(u)}w.sc2(z)
q=new M.fR()
z=O.dn(y)
q.d=z
z.bj(q.gcS(),q.gcT())
q.e=null
q.f=null
q.r=null
q.x=null
p=new X.hC()
p.b=1.0471975511965976
p.c=0.1
p.d=2000
p.sas(null)
z=p.b
if(!$.m.$2(z,1.0471975511965976)){t=p.b
p.b=1.0471975511965976
z=new D.O("fov",t,1.0471975511965976,p,[P.u])
z.b=!0
p.an(z)}z=p.c
if(!$.m.$2(z,0.1)){t=p.c
p.c=0.1
z=new D.O("near",t,0.1,p,[P.u])
z.b=!0
p.an(z)}z=p.d
if(!$.m.$2(z,2000)){t=p.d
p.d=2000
z=new D.O("far",t,2000,p,[P.u])
z.b=!0
p.an(z)}z=q.a
if(z!==p){if(z!=null){z=z.gE()
z.toString
y=H.h(q.gaa(),{func:1,ret:-1,args:[D.v]})
C.a.V(z.a,y)}t=q.a
q.a=p
z=p.gE()
z.toString
y=H.h(q.gaa(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)
z=new D.O("camera",t,q.a,q,[X.dk])
z.b=!0
q.am(z)}o=new X.fY()
z=new V.bR(0,0,0,1)
o.a=z
o.b=!0
o.c=2000
o.d=!0
o.e=0
o.f=!1
z=V.dX(0,0,1,1)
o.r=z
z=q.b
if(z!==o){if(z!=null){z=z.gE()
z.toString
y=H.h(q.gaa(),{func:1,ret:-1,args:[D.v]})
C.a.V(z.a,y)}t=q.b
q.b=o
z=o.gE()
z.toString
y=H.h(q.gaa(),{func:1,ret:-1,args:[D.v]})
C.a.h(z.a,y)
z=new D.O("target",t,q.b,q,[X.e8])
z.b=!0
q.am(z)}z=q.d
y=H.r(z,0)
H.x(w,y)
y=[y]
if(z.d5(H.b([w],y))){u=z.a
n=u.length
C.a.h(u,w)
z.cQ(n,H.b([w],y))}z=q.a
m=V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
y=new U.dp()
y.a=m
z.sas(y)
l=document.getElementById("tutorial1")
if(l==null)H.V(P.S("Failed to find an element with the identifier, tutorial1."))
z=E.il(l,!0,!0,!0,!1)
y=z.d
if(y!==q){if(y!=null){y=y.gE()
y.toString
u=H.h(z.gbo(),{func:1,ret:-1,args:[D.v]})
C.a.V(y.a,u)}z.d=q
y=q.gE()
y.toString
u=H.h(z.gbo(),{func:1,ret:-1,args:[D.v]})
C.a.h(y.a,u)
z.cv()}}},1]]
setupProgram(dart,0,0)
J.F=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dC.prototype
return J.ha.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.hb.prototype
if(typeof a=="boolean")return J.h9.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.bL=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.cg=function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.kD=function(a){if(typeof a=="number")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c8.prototype
return a}
J.f0=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c8.prototype
return a}
J.aB=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bC.prototype
return a}if(a instanceof P.a)return a
return J.ch(a)}
J.X=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.F(a).t(a,b)}
J.fc=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kD(a).a7(a,b)}
J.fd=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kO(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bL(a).m(a,b)}
J.fe=function(a,b,c,d){return J.aB(a).bK(a,b,c,d)}
J.ck=function(a,b,c){return J.bL(a).dA(a,b,c)}
J.cl=function(a,b){return J.cg(a).w(a,b)}
J.ff=function(a,b){return J.cg(a).H(a,b)}
J.fg=function(a){return J.aB(a).gds(a)}
J.ak=function(a){return J.F(a).gK(a)}
J.aG=function(a){return J.cg(a).gJ(a)}
J.aH=function(a){return J.bL(a).gk(a)}
J.fh=function(a){return J.aB(a).gbd(a)}
J.fi=function(a){return J.aB(a).gem(a)}
J.da=function(a){return J.cg(a).ef(a)}
J.fj=function(a,b,c){return J.f0(a).al(a,b,c)}
J.fk=function(a){return J.f0(a).eq(a)}
J.Y=function(a){return J.F(a).i(a)}
I.aE=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.m=W.bO.prototype
C.f=W.cp.prototype
C.w=W.aI.prototype
C.y=J.k.prototype
C.a=J.aJ.prototype
C.c=J.dC.prototype
C.e=J.bY.prototype
C.b=J.bZ.prototype
C.F=J.bC.prototype
C.J=H.hw.prototype
C.K=W.hx.prototype
C.p=J.hD.prototype
C.q=W.ih.prototype
C.l=J.c8.prototype
C.r=W.bm.prototype
C.t=W.iW.prototype
C.u=new P.hB()
C.v=new P.iM()
C.d=new P.jI()
C.x=new P.h2("element",!0,!1,!1,!1)
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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

C.B=function(getTagFallback) {
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
C.C=function() {
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
C.D=function(hooks) {
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
C.E=function(hooks) {
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
C.G=H.b(I.aE(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.H=H.b(I.aE(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.I=H.b(I.aE([]),[P.f])
C.i=H.b(I.aE([0,0,65498,45055,65535,34815,65534,18431]),[P.D])
C.j=H.b(I.aE(["bind","if","ref","repeat","syntax"]),[P.f])
C.k=H.b(I.aE(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.h=new P.iL(!1)
$.ad=0
$.b0=null
$.df=null
$.cY=!1
$.f2=null
$.eX=null
$.f9=null
$.ce=null
$.ci=null
$.d5=null
$.aV=null
$.bq=null
$.br=null
$.cZ=!1
$.L=C.d
$.an=null
$.cs=null
$.dz=null
$.dy=null
$.dv=null
$.du=null
$.dt=null
$.ds=null
$.m=V.hq()
$.fG="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.fF="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.dR=null
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
I.$lazy(y,x,w)}})(["dr","$get$dr",function(){return H.f1("_$dart_dartClosure")},"cw","$get$cw",function(){return H.f1("_$dart_js")},"ef","$get$ef",function(){return H.ah(H.c7({
toString:function(){return"$receiver$"}}))},"eg","$get$eg",function(){return H.ah(H.c7({$method$:null,
toString:function(){return"$receiver$"}}))},"eh","$get$eh",function(){return H.ah(H.c7(null))},"ei","$get$ei",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"em","$get$em",function(){return H.ah(H.c7(void 0))},"en","$get$en",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ek","$get$ek",function(){return H.ah(H.el(null))},"ej","$get$ej",function(){return H.ah(function(){try{null.$method$}catch(z){return z.message}}())},"ep","$get$ep",function(){return H.ah(H.el(void 0))},"eo","$get$eo",function(){return H.ah(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cT","$get$cT",function(){return P.iX()},"bs","$get$bs",function(){return[]},"eQ","$get$eQ",function(){return P.hS("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dq","$get$dq",function(){return{}},"eC","$get$eC",function(){return P.dH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)},"cU","$get$cU",function(){return P.dG(P.f,P.bB)},"ev","$get$ev",function(){return Z.a8(0)},"et","$get$et",function(){return Z.a8(511)},"ap","$get$ap",function(){return Z.a8(1)},"aQ","$get$aQ",function(){return Z.a8(2)},"aP","$get$aP",function(){return Z.a8(4)},"aR","$get$aR",function(){return Z.a8(8)},"aS","$get$aS",function(){return Z.a8(16)},"bk","$get$bk",function(){return Z.a8(32)},"bl","$get$bl",function(){return Z.a8(64)},"eu","$get$eu",function(){return Z.a8(96)},"aT","$get$aT",function(){return Z.a8(128)},"aO","$get$aO",function(){return Z.a8(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.G},{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:-1,args:[W.a3]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.D,[P.i,E.au]]},{func:1,ret:P.G,args:[D.v]},{func:1,ret:-1,args:[W.aM]},{func:1,ret:P.G,args:[F.ae]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.f,args:[P.D]},{func:1,ret:P.M,args:[W.w]},{func:1,args:[,]},{func:1,ret:W.w},{func:1,ret:P.G,args:[,]},{func:1,ret:P.M,args:[W.ag]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.u},{func:1,ret:P.M,args:[W.K,P.f,P.f,W.bJ]},{func:1,args:[P.f]},{func:1,ret:-1,args:[P.a],opt:[P.ac]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:[P.aq,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,ret:W.K,args:[W.w]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.M,args:[P.u,P.u]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,args:[,P.f]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.G,args:[F.aN,P.u,P.u]},{func:1,ret:P.G,args:[W.a3]},{func:1,ret:P.M,args:[V.as]},{func:1,ret:P.G,args:[P.N]}]
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
if(x==y)H.kY(d||a)
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
Isolate.aE=a.aE
Isolate.d3=a.d3
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
if(typeof dartMainRunner==="function")dartMainRunner(F.f5,[])
else F.f5([])})})()
//# sourceMappingURL=main.dart.js.map
