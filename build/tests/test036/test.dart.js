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
var dart=[["","",,H,{"^":"",lw:{"^":"a;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
d9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cr:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d6==null){H.kO()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.eA("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cG()]
if(v!=null)return v
v=H.kT(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cG(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
q:{"^":"a;",
q:function(a,b){return a===b},
gT:function(a){return H.br(a)},
i:["dU",function(a){return"Instance of '"+H.b_(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h_:{"^":"q;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isa2:1},
dH:{"^":"q;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isI:1},
cH:{"^":"q;",
gT:function(a){return 0},
i:["dV",function(a){return String(a)}]},
hB:{"^":"cH;"},
cj:{"^":"cH;"},
bR:{"^":"cH;",
i:function(a){var z=a[$.$get$dt()]
if(z==null)return this.dV(a)
return"JavaScript function for "+H.i(J.am(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscD:1},
aX:{"^":"q;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.o(P.aa("add"))
a.push(b)},
ht:function(a,b){if(!!a.fixed$length)H.o(P.aa("removeAt"))
if(b<0||b>=a.length)throw H.f(P.bV(b,null,null))
return a.splice(b,1)[0]},
H:function(a,b){var z
if(!!a.fixed$length)H.o(P.aa("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
bR:function(a,b){var z,y
H.v(b,"$isc",[H.z(a,0)],"$asc")
if(!!a.fixed$length)H.o(P.aa("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.bf(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.Y(z,y,H.i(a[y]))
return z.join(b)},
h6:function(a){return this.B(a,"")},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bu:function(a,b,c){var z=a.length
if(b>z)throw H.f(P.ai(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.ai(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.z(a,0)])
return H.b(a.slice(b,c),[H.z(a,0)])},
gh0:function(a){if(a.length>0)return a[0]
throw H.f(H.dD())},
gcb:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.dD())},
aE:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
i:function(a){return P.cE(a,"[","]")},
gW:function(a){return new J.an(a,a.length,0,[H.z(a,0)])},
gT:function(a){return H.br(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.o(P.aa("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.c1(b,"newLength",null))
if(b<0)throw H.f(P.ai(b,0,null,"newLength",null))
a.length=b},
Y:function(a,b,c){H.V(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.o(P.aa("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aR(a,b))
if(b>=a.length||b<0)throw H.f(H.aR(a,b))
a[b]=c},
$isc:1,
$isd:1,
n:{
fZ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.c1(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ai(a,0,4294967295,"length",null))
return J.dE(new Array(a),b)},
dE:function(a,b){return J.bk(H.b(a,[b]))},
bk:function(a){H.bJ(a)
a.fixed$length=Array
return a}}},
lv:{"^":"aX;$ti"},
an:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bQ:{"^":"q;",
hE:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.f(P.aa(""+a+".toInt()"))},
c8:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.aa(""+a+".floor()"))},
R:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.aa(""+a+".round()"))},
dN:function(a,b){var z,y
if(b>20)throw H.f(P.ai(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.f(H.aK(b))
return a*b},
dR:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cV(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.cV(a,b)},
cV:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.aa("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
b7:function(a,b){var z
if(a>0)z=this.fh(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fh:function(a,b){return b>31?0:a>>>b},
a9:function(a,b){if(typeof b!=="number")throw H.f(H.aK(b))
return a<b},
$isw:1,
$isW:1},
dG:{"^":"bQ;",$isA:1},
dF:{"^":"bQ;"},
ca:{"^":"q;",
c_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aR(a,b))
if(b<0)throw H.f(H.aR(a,b))
if(b>=a.length)H.o(H.aR(a,b))
return a.charCodeAt(b)},
b3:function(a,b){if(b>=a.length)throw H.f(H.aR(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.R(b)
if(typeof b!=="string")throw H.f(P.c1(b,null,null))
return a+b},
bv:function(a,b,c){H.V(c)
if(c==null)c=a.length
if(b<0)throw H.f(P.bV(b,null,null))
if(b>c)throw H.f(P.bV(b,null,null))
if(c>a.length)throw H.f(P.bV(c,null,null))
return a.substring(b,c)},
cw:function(a,b){return this.bv(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hj:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
au:function(a,b){return this.hj(a,b," ")},
fT:function(a,b,c){if(c>a.length)throw H.f(P.ai(c,0,a.length,null,null))
return H.fe(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdV:1,
$ism:1}}],["","",,H,{"^":"",
dD:function(){return new P.i9("No element")},
a_:{"^":"iJ;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.c_(this.a,b)},
$aseB:function(){return[P.A]},
$asr:function(){return[P.A]},
$asc:function(){return[P.A]},
$asd:function(){return[P.A]}},
fK:{"^":"c;"},
dN:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.c_(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.f(P.bf(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.D(z,w);++this.c
return!0}},
hg:{"^":"c;a,b,$ti",
gW:function(a){return new H.hh(J.bK(this.a),this.b,this.$ti)},
gl:function(a){return J.bd(this.a)},
D:function(a,b){return this.b.$1(J.dd(this.a,b))},
$asc:function(a,b){return[b]}},
hh:{"^":"cF;0a,b,c,$ti",
C:function(){var z=this.b
if(z.C()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$ascF:function(a,b){return[b]}},
j1:{"^":"c;a,b,$ti",
gW:function(a){return new H.j2(J.bK(this.a),this.b,this.$ti)}},
j2:{"^":"cF;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
c8:{"^":"a;$ti"},
eB:{"^":"a;$ti"},
iJ:{"^":"cb+eB;"}}],["","",,H,{"^":"",
kJ:function(a){return init.types[H.V(a)]},
kR:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isD},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.am(a)
if(typeof z!=="string")throw H.f(H.aK(a))
return z},
br:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b_:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.L(a).$iscj){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.b3(w,0)===36)w=C.i.cw(w,1)
r=H.d7(H.bJ(H.aS(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dZ:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hL:function(a){var z,y,x,w
z=H.b([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.aK(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.b7(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.aK(w))}return H.dZ(z)},
e_:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.aK(x))
if(x<0)throw H.f(H.aK(x))
if(x>65535)return H.hL(a)}return H.dZ(a)},
hK:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.b7(z,10))>>>0,56320|z&1023)}throw H.f(P.ai(a,0,1114111,null,null))},
a7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hJ:function(a){return a.b?H.a7(a).getUTCFullYear()+0:H.a7(a).getFullYear()+0},
hH:function(a){return a.b?H.a7(a).getUTCMonth()+1:H.a7(a).getMonth()+1},
hD:function(a){return a.b?H.a7(a).getUTCDate()+0:H.a7(a).getDate()+0},
hE:function(a){return a.b?H.a7(a).getUTCHours()+0:H.a7(a).getHours()+0},
hG:function(a){return a.b?H.a7(a).getUTCMinutes()+0:H.a7(a).getMinutes()+0},
hI:function(a){return a.b?H.a7(a).getUTCSeconds()+0:H.a7(a).getSeconds()+0},
hF:function(a){return a.b?H.a7(a).getUTCMilliseconds()+0:H.a7(a).getMilliseconds()+0},
p:function(a){throw H.f(H.aK(a))},
h:function(a,b){if(a==null)J.bd(a)
throw H.f(H.aR(a,b))},
aR:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
z=H.V(J.bd(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.bV(b,"index",null)},
kE:function(a,b,c){if(a>c)return new P.ce(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ce(a,c,!0,b,"end","Invalid value")
return new P.aM(!0,b,"end",null)},
aK:function(a){return new P.aM(!0,a,null,null)},
kz:function(a){if(typeof a!=="number")throw H.f(H.aK(a))
return a},
f:function(a){var z
if(a==null)a=new P.dU()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fg})
z.name=""}else z.toString=H.fg
return z},
fg:function(){return J.am(this.dartException)},
o:function(a){throw H.f(a)},
x:function(a){throw H.f(P.bf(a))},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.b7(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cI(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dT(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ei()
u=$.$get$ej()
t=$.$get$ek()
s=$.$get$el()
r=$.$get$ep()
q=$.$get$eq()
p=$.$get$en()
$.$get$em()
o=$.$get$es()
n=$.$get$er()
m=v.a8(y)
if(m!=null)return z.$1(H.cI(H.R(y),m))
else{m=u.a8(y)
if(m!=null){m.method="call"
return z.$1(H.cI(H.R(y),m))}else{m=t.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=r.a8(y)
if(m==null){m=q.a8(y)
if(m==null){m=p.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=o.a8(y)
if(m==null){m=n.a8(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dT(H.R(y),m))}}return z.$1(new H.iI(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e3()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aM(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e3()
return a},
bb:function(a){var z
if(a==null)return new H.eS(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eS(a)},
kG:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.Y(0,a[y],a[x])}return b},
kQ:function(a,b,c,d,e,f){H.j(a,"$iscD")
switch(H.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.n("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var z
H.V(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kQ)
a.$identity=z
return z},
fw:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isd){z.$reflectionInfo=d
x=H.hO(z).r}else x=d
w=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.cw(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.av
if(typeof u!=="number")return u.F()
$.av=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dm(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kJ,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dh:H.cx
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.f("Error in reflectionInfo.")
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
ft:function(a,b,c,d){var z=H.cx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dm:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fv(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ft(y,!w,z,b)
if(y===0){w=$.av
if(typeof w!=="number")return w.F()
$.av=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.be
if(v==null){v=H.c2("self")
$.be=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.av
if(typeof w!=="number")return w.F()
$.av=w+1
t+=w
w="return function("+t+"){return this."
v=$.be
if(v==null){v=H.c2("self")
$.be=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fu:function(a,b,c,d){var z,y
z=H.cx
y=H.dh
switch(b?-1:a){case 0:throw H.f(H.hX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fv:function(a,b){var z,y,x,w,v,u,t,s
z=$.be
if(z==null){z=H.c2("self")
$.be=z}y=$.dg
if(y==null){y=H.c2("receiver")
$.dg=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fu(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.av
if(typeof y!=="number")return y.F()
$.av=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.av
if(typeof y!=="number")return y.F()
$.av=y+1
return new Function(z+y+"}")()},
d2:function(a,b,c,d,e,f,g){var z,y
z=J.bk(H.bJ(b))
H.V(c)
y=!!J.L(d).$isd?J.bk(d):d
return H.fw(a,z,c,y,!!e,f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aB(a,"String"))},
kW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aB(a,"num"))},
f4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aB(a,"bool"))},
V:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aB(a,"int"))},
fc:function(a,b){throw H.f(H.aB(a,H.R(b).substring(3)))},
kY:function(a,b){var z=J.c_(b)
throw H.f(H.fs(a,z.bv(b,3,z.gl(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.fc(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.kY(a,b)},
bJ:function(a){if(a==null)return a
if(!!J.L(a).$isd)return a
throw H.f(H.aB(a,"List"))},
kS:function(a,b){if(a==null)return a
if(!!J.L(a).$isd)return a
if(J.L(a)[b])return a
H.fc(a,b)},
f5:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.V(z)]
else return a.$S()}return},
bZ:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f5(J.L(a))
if(z==null)return!1
y=H.f8(z,null,b,null)
return y},
k:function(a,b){var z,y
if(a==null)return a
if($.cZ)return a
$.cZ=!0
try{if(H.bZ(a,b))return a
z=H.c0(b)
y=H.aB(a,z)
throw H.f(y)}finally{$.cZ=!1}},
d4:function(a,b){if(a!=null&&!H.d1(a,b))H.o(H.aB(a,H.c0(b)))
return a},
f_:function(a){var z
if(a instanceof H.t){z=H.f5(J.L(a))
if(z!=null)return H.c0(z)
return"Closure"}return H.b_(a)},
l2:function(a){throw H.f(new P.fD(H.R(a)))},
f6:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aS:function(a){if(a==null)return
return a.$ti},
mj:function(a,b,c){return H.bc(a["$as"+H.i(c)],H.aS(b))},
bI:function(a,b,c,d){var z
H.R(c)
H.V(d)
z=H.bc(a["$as"+H.i(c)],H.aS(b))
return z==null?null:z[d]},
au:function(a,b,c){var z
H.R(b)
H.V(c)
z=H.bc(a["$as"+H.i(b)],H.aS(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.V(b)
z=H.aS(a)
return z==null?null:z[b]},
c0:function(a){var z=H.aT(a,null)
return z},
aT:function(a,b){var z,y
H.v(b,"$isd",[P.m],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d7(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.V(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.i(b[y])}if('func' in a)return H.kp(a,b)
if('futureOr' in a)return"FutureOr<"+H.aT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.v(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aT(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aT(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aT(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aT(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kF(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.aT(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d7:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isd",[P.m],"$asd")
if(a==null)return""
z=new P.bW("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aT(u,c)}v="<"+z.i(0)+">"
return v},
bc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bH:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aS(a)
y=J.L(a)
if(y[b]==null)return!1
return H.f2(H.bc(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.R(b)
H.bJ(c)
H.R(d)
if(a==null)return a
z=H.bH(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d7(c,0,null)
throw H.f(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f2:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.al(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.al(a[y],b,c[y],d))return!1
return!0},
mh:function(a,b,c){return a.apply(b,H.bc(J.L(b)["$as"+H.i(c)],H.aS(b)))},
f9:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.f9(z)}return!1},
d1:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.f9(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d1(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bZ(a,b)}y=J.L(a).constructor
x=H.aS(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.al(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.d1(a,b))throw H.f(H.aB(a,H.c0(b)))
return a},
al:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.al(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.f8(a,b,c,d)
if('func' in a)return c.builtin$cls==="cD"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.al("type" in a?a.type:null,b,x,d)
else if(H.al(a,b,x,d))return!0
else{if(!('$is'+"bi" in y.prototype))return!1
w=y.prototype["$as"+"bi"]
v=H.bc(w,z?a.slice(1):null)
return H.al(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c0(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f2(H.bc(r,z),b,u,d)},
f8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.al(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.al(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.al(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.al(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kV(m,b,l,d)},
kV:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.al(c[w],d,a[w],b))return!1}return!0},
mi:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
kT:function(a){var z,y,x,w,v,u
z=H.R($.f7.$1(a))
y=$.cp[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cs[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.f1.$2(a,z))
if(z!=null){y=$.cp[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cs[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ct(x)
$.cp[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cs[z]=x
return x}if(v==="-"){u=H.ct(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fb(a,x)
if(v==="*")throw H.f(P.eA(z))
if(init.leafTags[z]===true){u=H.ct(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fb(a,x)},
fb:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d9(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ct:function(a){return J.d9(a,!1,null,!!a.$isD)},
kU:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ct(z)
else return J.d9(z,c,null,null)},
kO:function(){if(!0===$.d6)return
$.d6=!0
H.kP()},
kP:function(){var z,y,x,w,v,u,t,s
$.cp=Object.create(null)
$.cs=Object.create(null)
H.kK()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fd.$1(v)
if(u!=null){t=H.kU(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kK:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b8(C.A,H.b8(C.F,H.b8(C.n,H.b8(C.n,H.b8(C.E,H.b8(C.B,H.b8(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f7=new H.kL(v)
$.f1=new H.kM(u)
$.fd=new H.kN(t)},
b8:function(a,b){return a(b)||b},
fe:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ff:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hN:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bk(z)
y=z[0]
x=z[1]
return new H.hN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ix:{"^":"a;a,b,c,d,e,f",
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
n:{
aA:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ix(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ci:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eo:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hy:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dT:function(a,b){return new H.hy(a,b==null?null:b.method)}}},
h2:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
n:{
cI:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h2(a,y,z?null:b.receiver)}}},
iI:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l5:{"^":"t:13;a",
$1:function(a){if(!!J.L(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eS:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaq:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.b_(this).trim()+"'"},
gdP:function(){return this},
$iscD:1,
gdP:function(){return this}},
e7:{"^":"t;"},
ia:{"^":"e7;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cw:{"^":"e7;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cw))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.br(this.a)
else y=typeof z!=="object"?J.aV(z):H.br(z)
return(y^H.br(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.b_(z)+"'")},
n:{
cx:function(a){return a.a},
dh:function(a){return a.c},
c2:function(a){var z,y,x,w,v
z=new H.cw("self","target","receiver","name")
y=J.bk(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iy:{"^":"Y;a",
i:function(a){return this.a},
n:{
aB:function(a,b){return new H.iy("TypeError: "+H.i(P.c7(a))+": type '"+H.f_(a)+"' is not a subtype of type '"+b+"'")}}},
fr:{"^":"Y;a",
i:function(a){return this.a},
n:{
fs:function(a,b){return new H.fr("CastError: "+H.i(P.c7(a))+": type '"+H.f_(a)+"' is not a subtype of type '"+b+"'")}}},
hW:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
n:{
hX:function(a){return new H.hW(a)}}},
aY:{"^":"he;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gat:function(a){return new H.dM(this,[H.z(this,0)])},
d6:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cL(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cL(y,b)}else return this.h4(b)},
h4:function(a){var z=this.d
if(z==null)return!1
return this.ca(this.bD(z,J.aV(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b4(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b4(w,b)
x=y==null?null:y.b
return x}else return this.h5(b)},
h5:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bD(z,J.aV(a)&0x3ffffff)
x=this.ca(y,a)
if(x<0)return
return y[x].b},
Y:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bJ()
this.b=z}this.cE(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bJ()
this.c=y}this.cE(y,b,c)}else{x=this.d
if(x==null){x=this.bJ()
this.d=x}w=J.aV(b)&0x3ffffff
v=this.bD(x,w)
if(v==null)this.bP(x,w,[this.bK(b,c)])
else{u=this.ca(v,b)
if(u>=0)v[u].b=c
else v.push(this.bK(b,c))}}},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.bf(this))
z=z.c}},
cE:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.b4(a,b)
if(z==null)this.bP(a,b,this.bK(b,c))
else z.b=c},
eu:function(){this.r=this.r+1&67108863},
bK:function(a,b){var z,y
z=new H.h6(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eu()
return z},
ca:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
i:function(a){return P.dP(this)},
b4:function(a,b){return a[b]},
bD:function(a,b){return a[b]},
bP:function(a,b,c){a[b]=c},
el:function(a,b){delete a[b]},
cL:function(a,b){return this.b4(a,b)!=null},
bJ:function(){var z=Object.create(null)
this.bP(z,"<non-identifier-key>",z)
this.el(z,"<non-identifier-key>")
return z},
$isdL:1},
h6:{"^":"a;a,b,0c,0d"},
dM:{"^":"fK;a,$ti",
gl:function(a){return this.a.a},
gW:function(a){var z,y
z=this.a
y=new H.h7(z,z.r,this.$ti)
y.c=z.e
return y}},
h7:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.bf(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kL:{"^":"t:13;a",
$1:function(a){return this.a(a)}},
kM:{"^":"t:33;a",
$2:function(a,b){return this.a(a,b)}},
kN:{"^":"t:26;a",
$1:function(a){return this.a(H.R(a))}},
h0:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdV:1,
n:{
h1:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(new P.fU("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kF:function(a){return J.dE(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b6:function(a){return a},
aQ:function(a,b,c){H.bJ(b)
if(a>>>0!==a||a>=c)throw H.f(H.aR(b,a))},
ko:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.kE(a,b,c))
return b},
hu:{"^":"q;",$ism2:1,"%":"DataView;ArrayBufferView;cM|eM|eN|ht|eO|eP|aO"},
cM:{"^":"hu;",
gl:function(a){return a.length},
$isD:1,
$asD:I.d3},
ht:{"^":"eN;",
k:function(a,b){H.aQ(b,a,a.length)
return a[b]},
$asc8:function(){return[P.w]},
$asr:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aO:{"^":"eP;",
$asc8:function(){return[P.A]},
$asr:function(){return[P.A]},
$isc:1,
$asc:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]}},
lE:{"^":"aO;",
k:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lF:{"^":"aO;",
k:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lG:{"^":"aO;",
k:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lH:{"^":"aO;",
k:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lI:{"^":"aO;",
k:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lJ:{"^":"aO;",
gl:function(a){return a.length},
k:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hv:{"^":"aO;",
gl:function(a){return a.length},
k:function(a,b){H.aQ(b,a,a.length)
return a[b]},
bu:function(a,b,c){return new Uint8Array(a.subarray(b,H.ko(b,c,a.length)))},
"%":";Uint8Array"},
eM:{"^":"cM+r;"},
eN:{"^":"eM+c8;"},
eO:{"^":"cM+r;"},
eP:{"^":"eO+c8;"}}],["","",,P,{"^":"",
j4:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kw()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b9(new P.j6(z),1)).observe(y,{childList:true})
return new P.j5(z,y,x)}else if(self.setImmediate!=null)return P.kx()
return P.ky()},
m6:[function(a){self.scheduleImmediate(H.b9(new P.j7(H.k(a,{func:1,ret:-1})),0))},"$1","kw",4,0,9],
m7:[function(a){self.setImmediate(H.b9(new P.j8(H.k(a,{func:1,ret:-1})),0))},"$1","kx",4,0,9],
m8:[function(a){P.cR(C.l,H.k(a,{func:1,ret:-1}))},"$1","ky",4,0,9],
cR:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.h.X(a.a,1000)
return P.k3(z<0?0:z,b)},
ed:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.b1]})
z=C.h.X(a.a,1000)
return P.k4(z<0?0:z,b)},
ks:function(a,b){if(H.bZ(a,{func:1,args:[P.a,P.aq]}))return b.hs(a,null,P.a,P.aq)
if(H.bZ(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.f(P.c1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kr:function(){var z,y
for(;z=$.b7,z!=null;){$.bF=null
y=z.b
$.b7=y
if(y==null)$.bE=null
z.a.$0()}},
mg:[function(){$.d_=!0
try{P.kr()}finally{$.bF=null
$.d_=!1
if($.b7!=null)$.$get$cW().$1(P.f3())}},"$0","f3",0,0,3],
eZ:function(a){var z=new P.eH(H.k(a,{func:1,ret:-1}))
if($.b7==null){$.bE=z
$.b7=z
if(!$.d_)$.$get$cW().$1(P.f3())}else{$.bE.b=z
$.bE=z}},
kv:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.b7
if(z==null){P.eZ(a)
$.bF=$.bE
return}y=new P.eH(a)
x=$.bF
if(x==null){y.b=z
$.bF=y
$.b7=y}else{y.b=x.b
x.b=y
$.bF=y
if(y.b==null)$.bE=y}},
kZ:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.P
if(C.j===y){P.co(null,null,C.j,a)
return}y.toString
P.co(null,null,y,H.k(y.bV(a),z))},
ec:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.P
if(y===C.j){y.toString
return P.cR(a,b)}return P.cR(a,H.k(y.bV(b),z))},
iu:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b1]}
H.k(b,z)
y=$.P
if(y===C.j){y.toString
return P.ed(a,b)}x=y.d0(b,P.b1)
$.P.toString
return P.ed(a,H.k(x,z))},
cn:function(a,b,c,d,e){var z={}
z.a=d
P.kv(new P.kt(z,e))},
eX:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
eY:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
ku:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
co:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bV(d):c.fQ(d,-1)
P.eZ(d)},
j6:{"^":"t:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j5:{"^":"t:39;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j7:{"^":"t:2;a",
$0:function(){this.a.$0()}},
j8:{"^":"t:2;a",
$0:function(){this.a.$0()}},
eV:{"^":"a;a,0b,c",
e7:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b9(new P.k6(this,b),0),a)
else throw H.f(P.aa("`setTimeout()` not found."))},
e8:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b9(new P.k5(this,a,Date.now(),b),0),a)
else throw H.f(P.aa("Periodic timer."))},
$isb1:1,
n:{
k3:function(a,b){var z=new P.eV(!0,0)
z.e7(a,b)
return z},
k4:function(a,b){var z=new P.eV(!1,0)
z.e8(a,b)
return z}}},
k6:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k5:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.dY(w,x)}z.c=y
this.d.$1(z)}},
b5:{"^":"a;0a,b,c,d,e,$ti",
ha:function(a){if(this.c!==6)return!0
return this.b.b.cm(H.k(this.d,{func:1,ret:P.a2,args:[P.a]}),a.a,P.a2,P.a)},
h3:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bZ(z,{func:1,args:[P.a,P.aq]}))return H.d4(w.hz(z,a.a,a.b,null,y,P.aq),x)
else return H.d4(w.cm(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aJ:{"^":"a;cU:a<,b,0f9:c<,$ti",
dM:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ks(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aJ(0,$.P,[c])
w=b==null?1:3
this.cF(new P.b5(x,w,a,b,[z,c]))
return x},
hD:function(a,b){return this.dM(a,null,b)},
cF:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isb5")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaJ")
z=y.a
if(z<4){y.cF(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.co(null,null,z,H.k(new P.jm(this,a),{func:1,ret:-1}))}},
cQ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isb5")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaJ")
y=u.a
if(y<4){u.cQ(a)
return}this.a=y
this.c=u.c}z.a=this.b6(a)
y=this.b
y.toString
P.co(null,null,y,H.k(new P.jr(z,this),{func:1,ret:-1}))}},
bN:function(){var z=H.j(this.c,"$isb5")
this.c=null
return this.b6(z)},
b6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cI:function(a){var z,y,x,w
z=H.z(this,0)
H.d4(a,{futureOr:1,type:z})
y=this.$ti
x=H.bH(a,"$isbi",y,"$asbi")
if(x){z=H.bH(a,"$isaJ",y,null)
if(z)P.eJ(a,this)
else P.jn(a,this)}else{w=this.bN()
H.C(a,z)
this.a=4
this.c=a
P.bD(this,w)}},
bz:[function(a,b){var z
H.j(b,"$isaq")
z=this.bN()
this.a=8
this.c=new P.af(a,b)
P.bD(this,z)},function(a){return this.bz(a,null)},"hK","$2","$1","geh",4,2,32],
$isbi:1,
n:{
jn:function(a,b){var z,y,x
b.a=1
try{a.dM(new P.jo(b),new P.jp(b),null)}catch(x){z=H.aU(x)
y=H.bb(x)
P.kZ(new P.jq(b,z,y))}},
eJ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaJ")
if(z>=4){y=b.bN()
b.a=a.a
b.c=a.c
P.bD(b,y)}else{y=H.j(b.c,"$isb5")
b.a=2
b.c=a
a.cQ(y)}},
bD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isaf")
y=y.b
u=v.a
t=v.b
y.toString
P.cn(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bD(z.a,b)}y=z.a
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
if(p){H.j(r,"$isaf")
y=y.b
u=r.a
t=r.b
y.toString
P.cn(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.ju(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jt(x,b,r).$0()}else if((y&2)!==0)new P.js(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.L(y).$isbi){if(y.a>=4){n=H.j(t.c,"$isb5")
t.c=null
b=t.b6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eJ(y,t)
return}}m=b.b
n=H.j(m.c,"$isb5")
m.c=null
b=m.b6(n)
y=x.a
u=x.b
if(!y){H.C(u,H.z(m,0))
m.a=4
m.c=u}else{H.j(u,"$isaf")
m.a=8
m.c=u}z.a=m
y=m}}}},
jm:{"^":"t:2;a,b",
$0:function(){P.bD(this.a,this.b)}},
jr:{"^":"t:2;a,b",
$0:function(){P.bD(this.b,this.a.a)}},
jo:{"^":"t:12;a",
$1:function(a){var z=this.a
z.a=0
z.cI(a)}},
jp:{"^":"t:27;a",
$2:function(a,b){this.a.bz(a,H.j(b,"$isaq"))},
$1:function(a){return this.$2(a,null)}},
jq:{"^":"t:2;a,b,c",
$0:function(){this.a.bz(this.b,this.c)}},
ju:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dL(H.k(w.d,{func:1}),null)}catch(v){y=H.aU(v)
x=H.bb(v)
if(this.d){w=H.j(this.a.a.c,"$isaf").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isaf")
else u.b=new P.af(y,x)
u.a=!0
return}if(!!J.L(z).$isbi){if(z instanceof P.aJ&&z.gcU()>=4){if(z.gcU()===8){w=this.b
w.b=H.j(z.gf9(),"$isaf")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hD(new P.jv(t),null)
w.a=!1}}},
jv:{"^":"t:28;a",
$1:function(a){return this.a}},
jt:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cm(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aU(t)
y=H.bb(t)
x=this.a
x.b=new P.af(z,y)
x.a=!0}}},
js:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isaf")
w=this.c
if(w.ha(z)&&w.e!=null){v=this.b
v.b=w.h3(z)
v.a=!1}}catch(u){y=H.aU(u)
x=H.bb(u)
w=H.j(this.a.a.c,"$isaf")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.af(y,x)
s.a=!0}}},
eH:{"^":"a;a,0b"},
cP:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aJ(0,$.P,[P.A])
z.a=0
this.h9(new P.id(z,this),!0,new P.ie(z,y),y.geh())
return y}},
id:{"^":"t;a,b",
$1:function(a){H.C(a,H.au(this.b,"cP",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.au(this.b,"cP",0)]}}},
ie:{"^":"t:2;a,b",
$0:function(){this.b.cI(this.a.a)}},
e5:{"^":"a;$ti"},
ic:{"^":"a;"},
b1:{"^":"a;"},
af:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isY:1},
kd:{"^":"a;",$ism5:1},
kt:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dU()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.i(0)
throw x}},
jQ:{"^":"kd;",
hA:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.eX(null,null,this,a,-1)}catch(x){z=H.aU(x)
y=H.bb(x)
P.cn(null,null,this,z,H.j(y,"$isaq"))}},
hB:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.eY(null,null,this,a,b,-1,c)}catch(x){z=H.aU(x)
y=H.bb(x)
P.cn(null,null,this,z,H.j(y,"$isaq"))}},
fQ:function(a,b){return new P.jS(this,H.k(a,{func:1,ret:b}),b)},
bV:function(a){return new P.jR(this,H.k(a,{func:1,ret:-1}))},
d0:function(a,b){return new P.jT(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
dL:function(a,b){H.k(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.eX(null,null,this,a,b)},
cm:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.P===C.j)return a.$1(b)
return P.eY(null,null,this,a,b,c,d)},
hz:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.P===C.j)return a.$2(b,c)
return P.ku(null,null,this,a,b,c,d,e,f)},
hs:function(a,b,c,d){return H.k(a,{func:1,ret:b,args:[c,d]})}},
jS:{"^":"t;a,b,c",
$0:function(){return this.a.dL(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jR:{"^":"t:3;a,b",
$0:function(){return this.a.hA(this.b)}},
jT:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.hB(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h9:function(a,b,c){H.bJ(a)
return H.v(H.kG(a,new H.aY(0,0,[b,c])),"$isdL",[b,c],"$asdL")},
h8:function(a,b){return new H.aY(0,0,[a,b])},
ha:function(a,b,c,d){return new P.jC(0,0,[d])},
fY:function(a,b,c){var z,y
if(P.d0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bG()
C.a.h(y,a)
try{P.kq(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.e6(b,H.kS(z,"$isc"),", ")+c
return y.charCodeAt(0)==0?y:y},
cE:function(a,b,c){var z,y,x
if(P.d0(a))return b+"..."+c
z=new P.bW(b)
y=$.$get$bG()
C.a.h(y,a)
try{x=z
x.a=P.e6(x.gaz(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaz()+c
y=z.gaz()
return y.charCodeAt(0)==0?y:y},
d0:function(a){var z,y
for(z=0;y=$.$get$bG(),z<y.length;++z)if(a===y[z])return!0
return!1},
kq:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gW(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.i(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.C()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.C();t=s,s=r){r=z.gN(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dP:function(a){var z,y,x
z={}
if(P.d0(a))return"{...}"
y=new P.bW("")
try{C.a.h($.$get$bG(),a)
x=y
x.a=x.gaz()+"{"
z.a=!0
J.fk(a,new P.hf(z,y))
z=y
z.a=z.gaz()+"}"}finally{z=$.$get$bG()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaz()
return z.charCodeAt(0)==0?z:z},
jC:{"^":"jw;a,0b,0c,0d,0e,0f,r,$ti",
gW:function(a){return P.eL(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cY()
this.b=z}return this.cG(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cY()
this.c=y}return this.cG(y,b)}else return this.ea(0,b)},
ea:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.cY()
this.d=z}y=this.cJ(b)
x=z[y]
if(x==null)z[y]=[this.by(b)]
else{if(this.cO(x,b)>=0)return!1
x.push(this.by(b))}return!0},
H:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cR(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cR(this.c,b)
else return this.f2(0,b)},
f2:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eo(z,b)
x=this.cO(y,b)
if(x<0)return!1
this.cW(y.splice(x,1)[0])
return!0},
cG:function(a,b){H.C(b,H.z(this,0))
if(H.j(a[b],"$iscX")!=null)return!1
a[b]=this.by(b)
return!0},
cR:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$iscX")
if(z==null)return!1
this.cW(z)
delete a[b]
return!0},
cH:function(){this.r=this.r+1&67108863},
by:function(a){var z,y
z=new P.cX(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cH()
return z},
cW:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cH()},
cJ:function(a){return J.aV(a)&0x3ffffff},
eo:function(a,b){return a[this.cJ(b)]},
cO:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
n:{
cY:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cX:{"^":"a;a,0b,0c"},
jD:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.bf(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
eL:function(a,b,c){var z=new P.jD(a,b,[c])
z.c=a.e
return z}}},
jw:{"^":"hY;"},
cb:{"^":"jE;",$isc:1,$isd:1},
r:{"^":"a;$ti",
gW:function(a){return new H.dN(a,this.gl(a),0,[H.bI(this,a,"r",0)])},
D:function(a,b){return this.k(a,b)},
hG:function(a,b){var z,y,x
z=H.b([],[H.bI(this,a,"r",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.Y(z,y,this.k(a,y));++y}return z},
hF:function(a){return this.hG(a,!0)},
i:function(a){return P.cE(a,"[","]")}},
he:{"^":"ad;"},
hf:{"^":"t:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
ad:{"^":"a;$ti",
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bI(this,a,"ad",0),H.bI(this,a,"ad",1)]})
for(z=J.bK(this.gat(a));z.C();){y=z.gN(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.bd(this.gat(a))},
i:function(a){return P.dP(a)},
$isa4:1},
i_:{"^":"a;$ti",
i:function(a){return P.cE(this,"{","}")},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.de("index"))
if(b<0)H.o(P.ai(b,0,null,"index",null))
for(z=P.eL(this,this.r,H.z(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.f(P.N(b,this,"index",null,y))},
$isc:1},
hY:{"^":"i_;"},
jE:{"^":"a+r;"}}],["","",,P,{"^":"",cA:{"^":"a;$ti"},dq:{"^":"ic;$ti"},fM:{"^":"cA;",
$ascA:function(){return[P.m,[P.d,P.A]]}},iP:{"^":"fM;a"},iQ:{"^":"dq;",
fV:function(a,b,c){var z,y,x,w
z=a.length
P.e0(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kc(0,0,x)
if(w.en(a,b,z)!==z)w.cX(C.i.c_(a,z-1),0)
return C.I.bu(x,0,w.b)},
fU:function(a){return this.fV(a,0,null)},
$asdq:function(){return[P.m,[P.d,P.A]]}},kc:{"^":"a;a,b,c",
cX:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.h(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.h(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.h(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.h(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.h(z,y)
z[y]=128|a&63
return!1}},
en:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.c_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.b3(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cX(w,C.i.b3(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.h(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.h(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.h(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.h(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fO:function(a){var z=J.L(a)
if(!!z.$ist)return z.i(a)
return"Instance of '"+H.b_(a)+"'"},
hb:function(a,b,c,d){var z,y
H.C(b,d)
z=J.fZ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.Y(z,y,b)
return H.v(z,"$isd",[d],"$asd")},
hc:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gW(a);x.C();)C.a.h(y,H.C(x.gN(x),c))
if(b)return y
return H.v(J.bk(y),"$isd",z,"$asd")},
cQ:function(a,b,c){var z,y
z=P.A
H.v(a,"$isc",[z],"$asc")
if(a.constructor===Array){H.v(a,"$isaX",[z],"$asaX")
y=a.length
c=P.e0(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a9()
z=c<y}else z=!0
return H.e_(z?C.a.bu(a,b,c):a)}return P.ig(a,b,c)},
ig:function(a,b,c){var z,y,x
H.v(a,"$isc",[P.A],"$asc")
z=J.bK(a)
for(y=0;y<b;++y)if(!z.C())throw H.f(P.ai(b,0,y,null,null))
x=[]
for(;z.C();)x.push(z.gN(z))
return H.e_(x)},
hP:function(a,b,c){return new H.h0(a,H.h1(a,!1,!0,!1))},
kb:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isd",[P.A],"$asd")
if(c===C.q){z=$.$get$eW().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fU(H.C(b,H.au(c,"cA",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hK(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c7:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.am(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fO(a)},
n:function(a){return new P.eI(a)},
db:function(a){H.kX(a)},
a2:{"^":"a;"},
"+bool":0,
ao:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.h.b7(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fE(H.hJ(this))
y=P.bL(H.hH(this))
x=P.bL(H.hD(this))
w=P.bL(H.hE(this))
v=P.bL(H.hG(this))
u=P.bL(H.hI(this))
t=P.fF(H.hF(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fE:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bL:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"W;"},
"+double":0,
aW:{"^":"a;a",
j:function(a,b){return new P.aW(C.h.R(this.a*b))},
a9:function(a,b){return C.h.a9(this.a,H.j(b,"$isaW").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aW))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fJ()
y=this.a
if(y<0)return"-"+new P.aW(0-y).i(0)
x=z.$1(C.h.X(y,6e7)%60)
w=z.$1(C.h.X(y,1e6)%60)
v=new P.fI().$1(y%1e6)
return""+C.h.X(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
n:{
dz:function(a,b,c,d,e,f){return new P.aW(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fI:{"^":"t:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fJ:{"^":"t:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"a;"},
dU:{"^":"Y;",
i:function(a){return"Throw of null."}},
aM:{"^":"Y;a,b,c,d",
gbB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbA:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gbB()+y+x
if(!this.a)return w
v=this.gbA()
u=P.c7(this.b)
return w+v+": "+H.i(u)},
n:{
c1:function(a,b,c){return new P.aM(!0,a,b,c)},
de:function(a){return new P.aM(!1,null,a,"Must not be null")}}},
ce:{"^":"aM;e,f,a,b,c,d",
gbB:function(){return"RangeError"},
gbA:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
n:{
bV:function(a,b,c){return new P.ce(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
e0:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.f(P.ai(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.f(P.ai(b,a,c,"end",f))
return b}return c}}},
fX:{"^":"aM;e,l:f>,a,b,c,d",
gbB:function(){return"RangeError"},
gbA:function(){if(J.fh(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
n:{
N:function(a,b,c,d,e){var z=H.V(e!=null?e:J.bd(b))
return new P.fX(b,z,!0,a,c,"Index out of range")}}},
iK:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
aa:function(a){return new P.iK(a)}}},
iH:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eA:function(a){return new P.iH(a)}}},
i9:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a}},
fz:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.c7(z))+"."},
n:{
bf:function(a){return new P.fz(a)}}},
hz:{"^":"a;",
i:function(a){return"Out of Memory"},
$isY:1},
e3:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isY:1},
fD:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eI:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fU:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bv(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"W;"},
"+int":0,
c:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gW(this)
for(y=0;z.C();)++y
return y},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.de("index"))
if(b<0)H.o(P.ai(b,0,null,"index",null))
for(z=this.gW(this),y=0;z.C();){x=z.gN(z)
if(b===y)return x;++y}throw H.f(P.N(b,this,"index",null,y))},
i:function(a){return P.fY(this,"(",")")}},
cF:{"^":"a;$ti"},
d:{"^":"a;$ti",$isc:1},
"+List":0,
a4:{"^":"a;$ti"},
I:{"^":"a;",
gT:function(a){return P.a.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gT:function(a){return H.br(this)},
i:function(a){return"Instance of '"+H.b_(this)+"'"},
toString:function(){return this.i(this)}},
aq:{"^":"a;"},
m:{"^":"a;",$isdV:1},
"+String":0,
bW:{"^":"a;az:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
e6:function(a,b,c){var z=J.bK(b)
if(!z.C())return a
if(c.length===0){do a+=H.i(z.gN(z))
while(z.C())}else{a+=H.i(z.gN(z))
for(;z.C();)a=a+c+H.i(z.gN(z))}return a}}}}],["","",,W,{"^":"",
dk:function(a,b){var z=document.createElement("canvas")
return z},
fL:function(a){H.j(a,"$isa6")
return"wheel"},
cl:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eK:function(a,b,c,d){var z,y
z=W.cl(W.cl(W.cl(W.cl(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f0:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.d0(a,b)},
bN:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l7:{"^":"q;0l:length=","%":"AccessibleNodeList"},
l8:{"^":"bN;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l9:{"^":"bN;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fq:{"^":"q;","%":";Blob"},
cz:{"^":"bN;",
cs:function(a,b,c){var z=a.getContext(b,P.kA(c,null))
return z},
$iscz:1,
"%":"HTMLCanvasElement"},
lf:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lh:{"^":"fC;0l:length=","%":"CSSPerspective"},
bg:{"^":"q;",$isbg:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
li:{"^":"jc;0l:length=",
dQ:function(a,b){var z=a.getPropertyValue(this.ee(a,b))
return z==null?"":z},
ee:function(a,b){var z,y
z=$.$get$dr()
y=z[b]
if(typeof y==="string")return y
y=this.fi(a,b)
z[b]=y
return y},
fi:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fG()+b
if(z in a)return z
return b},
gbW:function(a){return a.bottom},
ga1:function(a){return a.height},
gaI:function(a){return a.left},
gaV:function(a){return a.right},
gaZ:function(a){return a.top},
ga6:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fB:{"^":"a;",
gaI:function(a){return this.dQ(a,"left")}},
ds:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fC:{"^":"q;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lj:{"^":"ds;0l:length=","%":"CSSTransformValue"},
lk:{"^":"ds;0l:length=","%":"CSSUnparsedValue"},
ll:{"^":"q;0l:length=","%":"DataTransferItemList"},
lm:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
ln:{"^":"je;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.a8,P.W]]},
$asr:function(){return[[P.a8,P.W]]},
$isc:1,
$asc:function(){return[[P.a8,P.W]]},
$isd:1,
$asd:function(){return[[P.a8,P.W]]},
$asy:function(){return[[P.a8,P.W]]},
"%":"ClientRectList|DOMRectList"},
fH:{"^":"q;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.ga6(a))+" x "+H.i(this.ga1(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isa8",[P.W],"$asa8")
if(!z)return!1
z=J.cq(b)
return a.left===z.gaI(b)&&a.top===z.gaZ(b)&&this.ga6(a)===z.ga6(b)&&this.ga1(a)===z.ga1(b)},
gT:function(a){return W.eK(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga6(a)&0x1FFFFFFF,this.ga1(a)&0x1FFFFFFF)},
gbW:function(a){return a.bottom},
ga1:function(a){return a.height},
gaI:function(a){return a.left},
gaV:function(a){return a.right},
gaZ:function(a){return a.top},
ga6:function(a){return a.width},
$isa8:1,
$asa8:function(){return[P.W]},
"%":";DOMRectReadOnly"},
lo:{"^":"jg;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.m]},
$asr:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$asy:function(){return[P.m]},
"%":"DOMStringList"},
lp:{"^":"q;0l:length=","%":"DOMTokenList"},
jb:{"^":"cb;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.j(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gW:function(a){var z=this.hF(this)
return new J.an(z,z.length,0,[H.z(z,0)])},
$asr:function(){return[W.a0]},
$asc:function(){return[W.a0]},
$asd:function(){return[W.a0]}},
a0:{"^":"J;",
gd3:function(a){return new W.jb(a,a.children)},
gd4:function(a){return P.hM(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
ac:{"^":"q;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"q;",
cY:["dT",function(a,b,c,d){H.k(c,{func:1,args:[W.ac]})
if(c!=null)this.eb(a,b,c,!1)}],
eb:function(a,b,c,d){return a.addEventListener(b,H.b9(H.k(c,{func:1,args:[W.ac]}),1),!1)},
$isa6:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eQ|eR|eT|eU"},
bh:{"^":"fq;",$isbh:1,"%":"File"},
lq:{"^":"jl;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bh]},
$asr:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asy:function(){return[W.bh]},
"%":"FileList"},
lr:{"^":"a6;0l:length=","%":"FileWriter"},
ls:{"^":"bN;0l:length=","%":"HTMLFormElement"},
bj:{"^":"q;",$isbj:1,"%":"Gamepad"},
lt:{"^":"q;0l:length=","%":"History"},
lu:{"^":"jy;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.J]},
$asr:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bl:{"^":"cS;",$isbl:1,"%":"KeyboardEvent"},
ly:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
lz:{"^":"q;0l:length=","%":"MediaList"},
lA:{"^":"a6;",
cY:function(a,b,c,d){H.k(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.dT(a,b,c,!1)},
"%":"MessagePort"},
lB:{"^":"jF;",
k:function(a,b){return P.aL(a.get(H.R(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gat:function(a){var z=H.b([],[P.m])
this.K(a,new W.hq(z))
return z},
gl:function(a){return a.size},
$asad:function(){return[P.m,null]},
$isa4:1,
$asa4:function(){return[P.m,null]},
"%":"MIDIInputMap"},
hq:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lC:{"^":"jG;",
k:function(a,b){return P.aL(a.get(H.R(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gat:function(a){var z=H.b([],[P.m])
this.K(a,new W.hr(z))
return z},
gl:function(a){return a.size},
$asad:function(){return[P.m,null]},
$isa4:1,
$asa4:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
hr:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bm:{"^":"q;",$isbm:1,"%":"MimeType"},
lD:{"^":"jI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bm]},
$asr:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asy:function(){return[W.bm]},
"%":"MimeTypeArray"},
ap:{"^":"cS;",$isap:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ja:{"^":"cb;a",
gW:function(a){var z=this.a.childNodes
return new W.dB(z,z.length,-1,[H.bI(C.J,z,"y",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asr:function(){return[W.J]},
$asc:function(){return[W.J]},
$asd:function(){return[W.J]}},
J:{"^":"a6;",
i:function(a){var z=a.nodeValue
return z==null?this.dU(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hw:{"^":"jK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.J]},
$asr:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bp:{"^":"q;0l:length=",$isbp:1,"%":"Plugin"},
lM:{"^":"jO;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bp]},
$asr:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asy:function(){return[W.bp]},
"%":"PluginArray"},
lO:{"^":"jU;",
k:function(a,b){return P.aL(a.get(H.R(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gat:function(a){var z=H.b([],[P.m])
this.K(a,new W.hV(z))
return z},
gl:function(a){return a.size},
$asad:function(){return[P.m,null]},
$isa4:1,
$asa4:function(){return[P.m,null]},
"%":"RTCStatsReport"},
hV:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lP:{"^":"bN;0l:length=","%":"HTMLSelectElement"},
bs:{"^":"a6;",$isbs:1,"%":"SourceBuffer"},
lQ:{"^":"eR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bs]},
$asr:function(){return[W.bs]},
$isc:1,
$asc:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asy:function(){return[W.bs]},
"%":"SourceBufferList"},
bt:{"^":"q;",$isbt:1,"%":"SpeechGrammar"},
lR:{"^":"jW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bt]},
$asr:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asy:function(){return[W.bt]},
"%":"SpeechGrammarList"},
bu:{"^":"q;0l:length=",$isbu:1,"%":"SpeechRecognitionResult"},
lT:{"^":"jZ;",
k:function(a,b){return a.getItem(H.R(b))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gat:function(a){var z=H.b([],[P.m])
this.K(a,new W.ib(z))
return z},
gl:function(a){return a.length},
$asad:function(){return[P.m,P.m]},
$isa4:1,
$asa4:function(){return[P.m,P.m]},
"%":"Storage"},
ib:{"^":"t:23;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bv:{"^":"q;",$isbv:1,"%":"CSSStyleSheet|StyleSheet"},
bw:{"^":"a6;",$isbw:1,"%":"TextTrack"},
bx:{"^":"a6;",$isbx:1,"%":"TextTrackCue|VTTCue"},
lX:{"^":"k2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$asr:function(){return[W.bx]},
$isc:1,
$asc:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"TextTrackCueList"},
lY:{"^":"eU;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bw]},
$asr:function(){return[W.bw]},
$isc:1,
$asc:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"TextTrackList"},
lZ:{"^":"q;0l:length=","%":"TimeRanges"},
by:{"^":"q;",$isby:1,"%":"Touch"},
b2:{"^":"cS;",$isb2:1,"%":"TouchEvent"},
m_:{"^":"k8;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.by]},
$asr:function(){return[W.by]},
$isc:1,
$asc:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$asy:function(){return[W.by]},
"%":"TouchList"},
m0:{"^":"q;0l:length=","%":"TrackDefaultList"},
cS:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m3:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
m4:{"^":"a6;0l:length=","%":"VideoTrackList"},
bC:{"^":"ap;",
gfY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.aa("deltaY is not supported"))},
gfX:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.aa("deltaX is not supported"))},
$isbC:1,
"%":"WheelEvent"},
j3:{"^":"a6;",
f6:function(a,b){return a.requestAnimationFrame(H.b9(H.k(b,{func:1,ret:-1,args:[P.W]}),1))},
em:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
m9:{"^":"kf;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bg]},
$asr:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asy:function(){return[W.bg]},
"%":"CSSRuleList"},
ma:{"^":"fH;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isa8",[P.W],"$asa8")
if(!z)return!1
z=J.cq(b)
return a.left===z.gaI(b)&&a.top===z.gaZ(b)&&a.width===z.ga6(b)&&a.height===z.ga1(b)},
gT:function(a){return W.eK(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga1:function(a){return a.height},
ga6:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mc:{"^":"kh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bj]},
$asr:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asy:function(){return[W.bj]},
"%":"GamepadList"},
md:{"^":"kj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.J]},
$asr:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
me:{"^":"kl;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bu]},
$asr:function(){return[W.bu]},
$isc:1,
$asc:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asy:function(){return[W.bu]},
"%":"SpeechRecognitionResultList"},
mf:{"^":"kn;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bv]},
$asr:function(){return[W.bv]},
$isc:1,
$asc:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"StyleSheetList"},
jh:{"^":"cP;a,b,c,$ti",
h9:function(a,b,c,d){var z=H.z(this,0)
H.k(a,{func:1,ret:-1,args:[z]})
H.k(c,{func:1,ret:-1})
return W.Z(this.a,this.b,a,!1,z)}},
mb:{"^":"jh;a,b,c,$ti"},
ji:{"^":"e5;a,b,c,d,e,$ti",
fm:function(){var z=this.d
if(z!=null&&this.a<=0)J.fj(this.b,this.c,z,!1)},
n:{
Z:function(a,b,c,d,e){var z=c==null?null:W.f0(new W.jj(c),W.ac)
z=new W.ji(0,a,b,z,!1,[e])
z.fm()
return z}}},
jj:{"^":"t:5;a",
$1:function(a){return this.a.$1(H.j(a,"$isac"))}},
y:{"^":"a;$ti",
gW:function(a){return new W.dB(a,this.gl(a),-1,[H.bI(this,a,"y",0)])}},
dB:{"^":"a;a,b,c,0d,$ti",
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fi(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
jc:{"^":"q+fB;"},
jd:{"^":"q+r;"},
je:{"^":"jd+y;"},
jf:{"^":"q+r;"},
jg:{"^":"jf+y;"},
jk:{"^":"q+r;"},
jl:{"^":"jk+y;"},
jx:{"^":"q+r;"},
jy:{"^":"jx+y;"},
jF:{"^":"q+ad;"},
jG:{"^":"q+ad;"},
jH:{"^":"q+r;"},
jI:{"^":"jH+y;"},
jJ:{"^":"q+r;"},
jK:{"^":"jJ+y;"},
jN:{"^":"q+r;"},
jO:{"^":"jN+y;"},
jU:{"^":"q+ad;"},
eQ:{"^":"a6+r;"},
eR:{"^":"eQ+y;"},
jV:{"^":"q+r;"},
jW:{"^":"jV+y;"},
jZ:{"^":"q+ad;"},
k1:{"^":"q+r;"},
k2:{"^":"k1+y;"},
eT:{"^":"a6+r;"},
eU:{"^":"eT+y;"},
k7:{"^":"q+r;"},
k8:{"^":"k7+y;"},
ke:{"^":"q+r;"},
kf:{"^":"ke+y;"},
kg:{"^":"q+r;"},
kh:{"^":"kg+y;"},
ki:{"^":"q+r;"},
kj:{"^":"ki+y;"},
kk:{"^":"q+r;"},
kl:{"^":"kk+y;"},
km:{"^":"q+r;"},
kn:{"^":"km+y;"}}],["","",,P,{"^":"",
aL:function(a){var z,y,x,w,v
if(a==null)return
z=P.h8(P.m,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.R(y[w])
z.Y(0,v,a[v])}return z},
kA:function(a,b){var z={}
a.K(0,new P.kB(z))
return z},
dy:function(){var z=$.dx
if(z==null){z=J.cu(window.navigator.userAgent,"Opera",0)
$.dx=z}return z},
fG:function(){var z,y
z=$.du
if(z!=null)return z
y=$.dv
if(y==null){y=J.cu(window.navigator.userAgent,"Firefox",0)
$.dv=y}if(y)z="-moz-"
else{y=$.dw
if(y==null){y=!P.dy()&&J.cu(window.navigator.userAgent,"Trident/",0)
$.dw=y}if(y)z="-ms-"
else z=P.dy()?"-o-":"-webkit-"}$.du=z
return z},
kB:{"^":"t:14;a",
$2:function(a,b){this.a[a]=b}},
fR:{"^":"cb;a,b",
gbE:function(){var z,y,x
z=this.b
y=H.au(z,"r",0)
x=W.a0
return new H.hg(new H.j1(z,H.k(new P.fS(),{func:1,ret:P.a2,args:[y]}),[y]),H.k(new P.fT(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bd(this.gbE().a)},
k:function(a,b){var z=this.gbE()
return z.b.$1(J.dd(z.a,b))},
gW:function(a){var z=P.hc(this.gbE(),!1,W.a0)
return new J.an(z,z.length,0,[H.z(z,0)])},
$asr:function(){return[W.a0]},
$asc:function(){return[W.a0]},
$asd:function(){return[W.a0]}},
fS:{"^":"t:24;",
$1:function(a){return!!J.L(H.j(a,"$isJ")).$isa0}},
fT:{"^":"t:25;",
$1:function(a){return H.e(H.j(a,"$isJ"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jP:{"^":"a;$ti",
gaV:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.C(z+this.c,H.z(this,0))},
gbW:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bH(b,"$isa8",[P.W],"$asa8")
if(!z)return!1
z=this.a
y=J.cq(b)
x=y.gaI(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaZ(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gaV(b)){if(typeof x!=="number")return x.F()
z=H.C(x+this.d,w)===y.gbW(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.aV(z)
x=this.b
w=J.aV(x)
if(typeof z!=="number")return z.F()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.C(x+this.d,v)
return P.jz(P.cm(P.cm(P.cm(P.cm(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a8:{"^":"jP;aI:a>,aZ:b>,a6:c>,a1:d>,$ti",n:{
hM:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a9()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.a9()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",bS:{"^":"q;",$isbS:1,"%":"SVGLength"},lx:{"^":"jB;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$asr:function(){return[P.bS]},
$isc:1,
$asc:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
$asy:function(){return[P.bS]},
"%":"SVGLengthList"},bU:{"^":"q;",$isbU:1,"%":"SVGNumber"},lK:{"^":"jM;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$asr:function(){return[P.bU]},
$isc:1,
$asc:function(){return[P.bU]},
$isd:1,
$asd:function(){return[P.bU]},
$asy:function(){return[P.bU]},
"%":"SVGNumberList"},lN:{"^":"q;0l:length=","%":"SVGPointList"},lU:{"^":"k0;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$asr:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$asy:function(){return[P.m]},
"%":"SVGStringList"},lV:{"^":"a0;",
gd3:function(a){return new P.fR(a,new W.ja(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bY:{"^":"q;",$isbY:1,"%":"SVGTransform"},m1:{"^":"ka;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$asr:function(){return[P.bY]},
$isc:1,
$asc:function(){return[P.bY]},
$isd:1,
$asd:function(){return[P.bY]},
$asy:function(){return[P.bY]},
"%":"SVGTransformList"},jA:{"^":"q+r;"},jB:{"^":"jA+y;"},jL:{"^":"q+r;"},jM:{"^":"jL+y;"},k_:{"^":"q+r;"},k0:{"^":"k_+y;"},k9:{"^":"q+r;"},ka:{"^":"k9+y;"}}],["","",,P,{"^":"",la:{"^":"q;0l:length=","%":"AudioBuffer"},lb:{"^":"j9;",
k:function(a,b){return P.aL(a.get(H.R(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gat:function(a){var z=H.b([],[P.m])
this.K(a,new P.fn(z))
return z},
gl:function(a){return a.size},
$asad:function(){return[P.m,null]},
$isa4:1,
$asa4:function(){return[P.m,null]},
"%":"AudioParamMap"},fn:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lc:{"^":"a6;0l:length=","%":"AudioTrackList"},fp:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lL:{"^":"fp;0l:length=","%":"OfflineAudioContext"},j9:{"^":"q+ad;"}}],["","",,P,{"^":"",cN:{"^":"q;",
hC:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
$iscN:1,
"%":"WebGLRenderingContext"},iF:{"^":"q;",$isiF:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lS:{"^":"jY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.N(b,a,null,null,null))
return P.aL(a.item(b))},
D:function(a,b){return this.k(a,b)},
$asr:function(){return[[P.a4,,,]]},
$isc:1,
$asc:function(){return[[P.a4,,,]]},
$isd:1,
$asd:function(){return[[P.a4,,,]]},
$asy:function(){return[[P.a4,,,]]},
"%":"SQLResultSetRowList"},jX:{"^":"q+r;"},jY:{"^":"jX+y;"}}],["","",,O,{"^":"",ab:{"^":"a;0a,0b,0c,0d,$ti",
b1:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
ct:function(a,b,c){var z=H.au(this,"ab",0)
H.k(b,{func:1,ret:P.a2,args:[[P.c,z]]})
z={func:1,ret:-1,args:[P.A,[P.c,z]]}
H.k(a,z)
H.k(c,z)
this.b=b
this.c=a
this.d=c},
aw:function(a,b){return this.ct(a,null,b)},
bL:function(a){var z
H.v(a,"$isc",[H.au(this,"ab",0)],"$asc")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cB:function(a,b){var z
H.v(b,"$isc",[H.au(this,"ab",0)],"$asc")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gW:function(a){var z=this.a
return new J.an(z,z.length,0,[H.z(z,0)])},
D:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.au(this,"ab",0)
H.C(b,z)
z=[z]
if(this.bL(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cB(x,H.b([b],z))}},
bR:function(a,b){var z,y
H.v(b,"$isc",[H.au(this,"ab",0)],"$asc")
if(this.bL(b)){z=this.a
y=z.length
C.a.bR(z,b)
this.cB(y,b)}},
$isc:1,
n:{
c4:function(a){var z=new O.ab([a])
z.b1(a)
return z}}},cK:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
e3:function(a){var z=this.b
if(!(z==null))z.u(a)},
ax:function(){return this.e3(null)},
gU:function(a){var z=this.a
if(z.length>0)return C.a.gcb(z)
else return V.aN()},
bq:function(a){var z=this.a
if(a==null)C.a.h(z,V.aN())
else C.a.h(z,a)
this.ax()},
aT:function(){var z=this.a
if(z.length>0){z.pop()
this.ax()}}}}],["","",,E,{"^":"",cv:{"^":"a;"},aC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Z:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbt:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gp().H(0,this.gdJ())
y=this.c
if(y!=null)y.gp().h(0,this.gdJ())
x=new D.B("shape",z,this.c,this,[F.e1])
x.b=!0
this.aJ(x)}},
af:function(a,b){var z
for(z=this.y.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.C();)z.d.af(0,b)},
a4:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gU(z))
z.ax()
a.cj(this.f)
z=a.dy
y=(z&&C.a).gcb(z)
if(y!=null&&this.d!=null)y.dK(a,this)
for(z=this.y.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.C();)z.d.a4(a)
a.ci()
a.dx.aT()},
gp:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
aJ:function(a){var z=this.z
if(!(z==null))z.u(a)},
a0:function(){return this.aJ(null)},
hi:[function(a){H.j(a,"$isu")
this.e=null
this.aJ(a)},function(){return this.hi(null)},"it","$1","$0","gdJ",0,2,0],
hg:[function(a){this.aJ(H.j(a,"$isu"))},function(){return this.hg(null)},"ir","$1","$0","gdI",0,2,0],
iq:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isc",[E.aC],"$asc")
for(z=b.length,y=this.gdI(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gZ()==null){t=new D.aD()
t.d=0
u.sZ(t)}t=u.gZ()
t.toString
H.k(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a0()},"$2","ghf",8,0,7],
is:[function(a,b){var z,y,x,w,v
H.v(b,"$isc",[E.aC],"$asc")
for(z=b.length,y=this.gdI(),x=0;x<b.length;b.length===z||(0,H.x)(b),++x){w=b[x]
if(w!=null){if(w.gZ()==null){v=new D.aD()
v.d=0
w.sZ(v)}w.gZ().H(0,y)}}this.a0()},"$2","ghh",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isay:1,
n:{
dA:function(a,b,c,d,e,f){var z,y
z=new E.aC()
z.a=d
z.b=!0
y=O.c4(E.aC)
z.y=y
y.aw(z.ghf(),z.ghh())
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
z.sbt(0,e)
return z}}},hQ:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e_:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ao(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cK()
y=[V.ah]
z.a=H.b([],y)
z.gp().h(0,new E.hS(this))
this.cy=z
z=new O.cK()
z.a=H.b([],y)
z.gp().h(0,new E.hT(this))
this.db=z
z=new O.cK()
z.a=H.b([],y)
z.gp().h(0,new E.hU(this))
this.dx=z
z=H.b([],[O.bX])
this.dy=z
C.a.h(z,null)
this.fr=new H.aY(0,0,[P.m,A.cO])},
ghr:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gU(z)
y=this.db
y=z.j(0,y.gU(y))
this.z=y
z=y}return z},
cj:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcb(z):a;(z&&C.a).h(z,y)},
ci:function(){var z=this.dy
if(z.length>1)z.pop()},
d_:function(a){var z=a.b
if(z.length===0)throw H.f(P.n("May not cache a shader with no name."))
if(this.fr.d6(0,z))throw H.f(P.n('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.Y(0,z,a)},
n:{
hR:function(a,b){var z=new E.hQ(a,b)
z.e_(a,b)
return z}}},hS:{"^":"t:10;a",
$1:function(a){var z
H.j(a,"$isu")
z=this.a
z.z=null
z.ch=null}},hT:{"^":"t:10;a",
$1:function(a){var z
H.j(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hU:{"^":"t:10;a",
$1:function(a){var z
H.j(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},ir:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Z:x@,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
e5:[function(a){var z
H.j(a,"$isu")
z=this.x
if(!(z==null))z.u(a)
this.hx()},function(){return this.e5(null)},"e4","$1","$0","gcC",0,2,0],
gh2:function(){var z,y,x
z=Date.now()
y=C.h.X(P.dz(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ao(z,!1)
return x/y},
cS:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.p(z)
x=C.c.c8(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.c.c8(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ec(C.l,this.ghw())}},
hx:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.it(this),{func:1,ret:-1,args:[P.W]})
C.t.em(z)
C.t.f6(z,W.f0(y,P.W))}},"$0","ghw",0,0,3],
hv:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cS()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.dz(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ax()
w=x.db
C.a.sl(w.a,0)
w.ax()
w=x.dx
C.a.sl(w.a,0)
w.ax()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a4(this.e)}}catch(v){z=H.aU(v)
y=H.bb(v)
P.db("Error: "+H.i(z))
P.db("Stack: "+H.i(y))
throw H.f(z)}},
n:{
is:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscz)return E.eb(a,!0,!0,!0,!1)
y=W.dk(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd3(a).h(0,y)
w=E.eb(y,!0,!0,!0,!1)
w.a=a
return w},
eb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ir()
y=P.h9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.k.cs(a,"webgl",y)
x=H.j(x==null?C.k.cs(a,"experimental-webgl",y):x,"$iscN")
if(x==null)H.o(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hR(x,a)
w=new T.im(x)
w.b=H.V(x.getParameter(3379))
w.c=H.V(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iL(a)
v=new X.h3()
v.c=new X.ax(!1,!1,!1)
v.d=P.ha(null,null,null,P.A)
w.b=v
v=new X.hs(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hd(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iw(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.e5,P.a]])
w.z=v
u=document
t=W.ap
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Z(u,"contextmenu",H.k(w.geG(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Z(a,"focus",H.k(w.geL(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Z(a,"blur",H.k(w.geD(),q),!1,r))
v=w.z
p=W.bl
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Z(u,"keyup",H.k(w.geN(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Z(u,"keydown",H.k(w.geM(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousedown",H.k(w.geQ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mouseup",H.k(w.geS(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Z(a,"mousemove",H.k(w.geR(),s),!1,t))
p=w.z
o=W.bC;(p&&C.a).h(p,W.Z(a,H.R(W.fL(a)),H.k(w.geT(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Z(u,"mousemove",H.k(w.geH(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Z(u,"mouseup",H.k(w.geI(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Z(u,"pointerlockchange",H.k(w.geU(),q),!1,r))
r=w.z
q=W.b2
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Z(a,"touchstart",H.k(w.gf1(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchend",H.k(w.gf_(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Z(a,"touchmove",H.k(w.gf0(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ao(Date.now(),!1)
z.cy=0
z.cS()
return z}}},it:{"^":"t:40;a",
$1:function(a){var z
H.kW(a)
z=this.a
if(z.ch){z.ch=!1
z.hv()}}}}],["","",,Z,{"^":"",eF:{"^":"a;a,b",n:{
cV:function(a,b,c){var z
H.v(c,"$isd",[P.A],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.b6(c)),35044)
a.bindBuffer(b,null)
return new Z.eF(b,z)}}},di:{"^":"cv;a,b,c,d,e",
a_:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aU(y)
x=P.n('Failed to bind buffer attribute "'+J.am(this.a)+'": '+H.i(z))
throw H.f(x)}},
i:function(a){return"["+J.am(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},eG:{"^":"a;a",$isld:1},cy:{"^":"a;a,0b,c,d",
as:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a_:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a_(a)},
aK:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a4:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.h(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.m]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.am(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$islW:1},c9:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b_(this.c)+"'")+"]"}},b3:{"^":"a;a",
gcu:function(a){var z,y
z=this.a
y=(z&$.$get$at().a)!==0?3:0
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=2
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$bA().a)!==0)y+=3
if((z&$.$get$bB().a)!==0)y+=4
if((z&$.$get$b4().a)!==0)++y
return(z&$.$get$aE().a)!==0?y+4:y},
fP:function(a){var z,y,x
z=$.$get$at()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eE()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b3))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.m])
y=this.a
if((y&$.$get$at().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aI().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bA().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bB().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b4().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
n:{
ak:function(a){return new Z.b3(a)}}}}],["","",,D,{"^":"",dl:{"^":"a;"},aD:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.u]}
H.k(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
H:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.u]})
z=this.a
z=z==null?null:C.a.aE(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).H(z,b)||!1}else y=!1
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
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.fP(z))
return!0},
dd:function(){return this.u(null)},
hy:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.u(y)}}},
av:function(a){return this.hy(a,!0,!1)},
n:{
E:function(){var z=new D.aD()
z.d=0
return z}}},fP:{"^":"t:29;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"a;a,0b"},bO:{"^":"u;c,d,a,0b,$ti"},bP:{"^":"u;c,d,a,0b,$ti"},B:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",dj:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dj))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)},
n:{"^":"le<"}},dI:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dI))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},dJ:{"^":"u;c,a,0b"},h3:{"^":"a;0a,0b,0c,0d",
ho:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dJ(a,this)
y.b=!0
return z.u(y)},
hk:function(a){var z,y
this.c=a.b
this.d.H(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dJ(a,this)
y.b=!0
return z.u(y)}},dO:{"^":"cd;x,y,c,d,e,a,0b"},hd:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ao:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaD()
s=new X.bn(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cg:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.u(this.ao(a,b))
return!0},
aS:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dS()
if(typeof z!=="number")return z.dO()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.ao(a,b))
return!0},
aR:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.ao(a,b))
return!0},
hp:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.cL(new V.Q(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.u(w)
return!0},
eP:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.dO(c,a,this.a.gaD(),b,z,this)
x.b=!0
y.u(x)
this.y=z
this.x=new V.O(0,0)}},ax:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ax))return!1
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
return z+(this.c?"Shift+":"")}},bn:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},hs:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bC:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaD()
x=new X.bn(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cg:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.u(this.bC(a,b,!0))
return!0},
aS:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dS()
if(typeof z!=="number")return z.dO()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.bC(a,b,!0))
return!0},
aR:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.bC(a,b,!1))
return!0},
hq:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.cL(new V.Q(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.u(x)
return!0},
gdc:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
gbs:function(){var z=this.c
if(z==null){z=D.E()
this.c=z}return z},
gdH:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z}},cL:{"^":"cd;x,c,d,e,a,0b"},cd:{"^":"u;"},eg:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},iw:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ao:function(a,b){var z,y,x,w
H.v(a,"$isd",[V.O],"$asd")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaD()
w=new X.eg(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hn:function(a){var z
H.v(a,"$isd",[V.O],"$asd")
z=this.b
if(z==null)return!1
z.u(this.ao(a,!0))
return!0},
hl:function(a){var z
H.v(a,"$isd",[V.O],"$asd")
z=this.c
if(z==null)return!1
z.u(this.ao(a,!0))
return!0},
hm:function(a){var z
H.v(a,"$isd",[V.O],"$asd")
z=this.d
if(z==null)return!1
z.u(this.ao(a,!1))
return!0}},iL:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaD:function(){var z=this.a
return V.aP(0,0,(z&&C.k).gd4(z).c,C.k.gd4(z).d)},
cM:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dI(z,new X.ax(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
bQ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
ap:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.O(y-w,x-v)},
aM:function(a){return new V.Q(a.movementX,a.movementY)},
bM:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.c.R(u.pageX)
C.c.R(u.pageY)
s=z.left
C.c.R(u.pageX)
C.a.h(y,new V.O(t-s,C.c.R(u.pageY)-z.top))}return y},
am:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dj(z,new X.ax(y,a.altKey,a.shiftKey))},
bF:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.E()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
i_:[function(a){this.f=!0},"$1","geL",4,0,5],
hS:[function(a){this.f=!1},"$1","geD",4,0,5],
hV:[function(a){H.j(a,"$isap")
if(this.f&&this.bF(a))a.preventDefault()},"$1","geG",4,0,4],
i1:[function(a){var z
H.j(a,"$isbl")
if(!this.f)return
z=this.cM(a)
if(this.b.ho(z))a.preventDefault()},"$1","geN",4,0,16],
i0:[function(a){var z
H.j(a,"$isbl")
if(!this.f)return
z=this.cM(a)
if(this.b.hk(z))a.preventDefault()},"$1","geM",4,0,16],
i3:[function(a){var z,y,x,w
H.j(a,"$isap")
z=this.a
z.focus()
this.f=!0
this.aC(a)
if(this.x){y=this.am(a)
x=this.aM(a)
if(this.d.cg(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.am(a)
w=this.ap(a)
if(this.c.cg(y,w))a.preventDefault()},"$1","geQ",4,0,4],
i5:[function(a){var z,y,x
H.j(a,"$isap")
this.aC(a)
z=this.am(a)
if(this.x){y=this.aM(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aS(z,x))a.preventDefault()},"$1","geS",4,0,4],
hX:[function(a){var z,y,x
H.j(a,"$isap")
if(!this.bF(a)){this.aC(a)
z=this.am(a)
if(this.x){y=this.aM(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aS(z,x))a.preventDefault()}},"$1","geI",4,0,4],
i4:[function(a){var z,y,x
H.j(a,"$isap")
this.aC(a)
z=this.am(a)
if(this.x){y=this.aM(a)
if(this.d.aR(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aR(z,x))a.preventDefault()},"$1","geR",4,0,4],
hW:[function(a){var z,y,x
H.j(a,"$isap")
if(!this.bF(a)){this.aC(a)
z=this.am(a)
if(this.x){y=this.aM(a)
if(this.d.aR(z,y))a.preventDefault()
return}if(this.r)return
x=this.ap(a)
if(this.c.aR(z,x))a.preventDefault()}},"$1","geH",4,0,4],
i6:[function(a){var z,y
H.j(a,"$isbC")
this.aC(a)
z=new V.Q((a&&C.r).gfX(a),C.r.gfY(a)).t(0,180)
if(this.x){if(this.d.hp(z))a.preventDefault()
return}if(this.r)return
y=this.ap(a)
if(this.c.hq(z,y))a.preventDefault()},"$1","geT",4,0,30],
i7:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.am(this.y)
v=this.ap(this.y)
this.d.eP(w,v,x)}},"$1","geU",4,0,5],
ih:[function(a){var z
H.j(a,"$isb2")
this.a.focus()
this.f=!0
this.bQ(a)
z=this.bM(a)
if(this.e.hn(z))a.preventDefault()},"$1","gf1",4,0,11],
ie:[function(a){var z
H.j(a,"$isb2")
this.bQ(a)
z=this.bM(a)
if(this.e.hl(z))a.preventDefault()},"$1","gf_",4,0,11],
ig:[function(a){var z
H.j(a,"$isb2")
this.bQ(a)
z=this.bM(a)
if(this.e.hm(z))a.preventDefault()},"$1","gf0",4,0,11]}}],["","",,D,{"^":"",c6:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
ay:[function(a){var z
H.j(a,"$isu")
z=this.d
if(!(z==null))z.u(a)},function(){return this.ay(null)},"hI","$1","$0","ge6",0,2,0],
$isT:1,
$isay:1},T:{"^":"a;",$isay:1},h4:{"^":"ab;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gp:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
ay:function(a){var z=this.Q
if(!(z==null))z.u(a)},
eO:[function(a){var z
H.j(a,"$isu")
z=this.ch
if(!(z==null))z.u(a)},function(){return this.eO(null)},"i2","$1","$0","gcP",0,2,0],
i8:[function(a){var z,y,x
H.v(a,"$isc",[D.T],"$asc")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ei(x))return!1}return!0},"$1","geV",4,0,36],
hP:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.T
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcP(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.j(b[u],"$isT")
if(t instanceof D.c6)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aD()
s.d=0
t.d=s}H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.bO(a,b,this,[z])
z.b=!0
this.ay(z)},"$2","geA",8,0,15],
ia:[function(a,b){var z,y,x,w,v,u
z=D.T
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcP(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=H.j(b[w],"$isT")
if(v instanceof D.c6)C.a.H(this.e,v)
u=v.d
if(u==null){u=new D.aD()
u.d=0
v.d=u}u.H(0,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.ay(z)},"$2","geX",8,0,15],
ei:function(a){var z=C.a.aE(this.e,a)
return z},
$asc:function(){return[D.T]},
$asab:function(){return[D.T]}},hC:{"^":"a;",$isT:1,$isay:1},i8:{"^":"a;",$isT:1,$isay:1},io:{"^":"a;",$isT:1,$isay:1},ip:{"^":"a;",$isT:1,$isay:1},iq:{"^":"a;",$isT:1,$isay:1}}],["","",,V,{"^":"",
lg:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hp",8,0,31],
l6:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.dR(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.i.au("null",c)
return C.i.au(C.c.dN($.l.$2(a,0)?0:a,b),c+b+1)},
ba:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isd",[P.w],"$asd")
z=H.b([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.Y(z,u,C.i.au(z[u],x))}return z},
da:function(a,b){return C.c.hE(Math.pow(b,C.y.c8(Math.log(H.kz(a))/Math.log(b))))},
X:{"^":"a;a,b,c",
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
return new V.X(z,y,x)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
a3:{"^":"a;a,b,c,d",
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
return new V.a3(z,y,x,w)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
cc:{"^":"a;a,b,c,d,e,f,r,x,y",
a5:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.j(a5,"$iscc")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.c.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.c.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.c.j(t,s)
q=a5.b
p=C.c.j(z,q)
o=a5.e
n=C.c.j(w,o)
m=a5.x
l=C.c.j(t,m)
k=a5.c
z=C.c.j(z,k)
j=a5.f
w=C.c.j(w,j)
i=a5.y
t=C.c.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.c.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.c.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.c.j(d,s)
b=C.c.j(h,q)
a=C.c.j(f,o)
a0=C.c.j(d,m)
h=C.c.j(h,k)
f=C.c.j(f,j)
d=C.c.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.c.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.c.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.cc(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.j(a3,s),C.c.j(a1,q)+C.c.j(a2,o)+C.c.j(a3,m),C.c.j(a1,k)+C.c.j(a2,j)+C.c.j(a3,i))},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cc))return!1
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
y=V.ba(H.b([this.a,this.d,this.r],z),3,0)
x=V.ba(H.b([this.b,this.e,this.x],z),3,0)
w=V.ba(H.b([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.h(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.h(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.h(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.h(y,1)
s=" "+y[1]+", "
if(1>=u)return H.h(x,1)
s=s+x[1]+", "
if(1>=t)return H.h(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.h(y,2)
z=" "+y[2]+", "
if(2>=u)return H.h(x,2)
z=z+x[2]+", "
if(2>=t)return H.h(w,2)
return s+(z+w[2]+"]")}},
ah:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a5:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
dF:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.l.$2(a2,0))return V.aN()
a3=1/a2
a4=-w
a5=-i
return V.aw((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.j(a7,"$isah")
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
return V.aw(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cn:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.U(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
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
i:function(a){return this.L()},
dD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.ba(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.ba(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.ba(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.ba(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.h(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.h(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.h(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.h(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.h(y,1)
q=q+y[1]+", "
if(1>=t)return H.h(x,1)
q=q+x[1]+", "
if(1>=s)return H.h(w,1)
q=q+w[1]+", "
if(1>=r)return H.h(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.h(y,2)
u=u+y[2]+", "
if(2>=t)return H.h(x,2)
u=u+x[2]+", "
if(2>=s)return H.h(w,2)
u=u+w[2]+", "
if(2>=r)return H.h(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.h(y,3)
q=q+y[3]+", "
if(3>=t)return H.h(x,3)
q=q+x[3]+", "
if(3>=s)return H.h(w,3)
q=q+w[3]+", "
if(3>=r)return H.h(v,3)
return u+(q+v[3]+"]")},
A:function(a){return this.dD(a,3,0)},
L:function(){return this.dD("",3,0)},
n:{
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aN:function(){return V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dS:function(a,b,c){var z,y,x,w,v
z=c.t(0,Math.sqrt(c.v(c)))
y=b.ar(z)
x=y.t(0,Math.sqrt(y.v(y)))
w=z.ar(x)
v=new V.G(a.a,a.b,a.c)
return V.aw(x.a,w.a,z.a,x.I(0).v(v),x.b,w.b,z.b,w.I(0).v(v),x.c,w.c,z.c,z.I(0).v(v),0,0,0,1)}}},
O:{"^":"a;a,b",
E:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.O(this.a*b,this.b*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
U:{"^":"a;a,b,c",
F:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
E:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bq:{"^":"a;a,b,c,d",
j:function(a,b){return new V.bq(this.a*b,this.b*b,this.c*b,this.d*b)},
q:function(a,b){var z
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
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
cf:{"^":"a;a,b,c,d",
ga3:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cf))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
n:{
aP:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cf(a,b,c,d)}}},
Q:{"^":"a;a,b",
h7:[function(a){return Math.sqrt(this.v(this))},"$0","gl",1,0,18],
v:function(a){var z,y,x,w
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
return new V.Q(z*b,y*b)},
t:function(a,b){var z,y
if($.l.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.Q(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
h7:[function(a){return Math.sqrt(this.v(this))},"$0","gl",1,0,18],
v:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ar:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a){return new V.G(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if($.l.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dG:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fx:{"^":"dl;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bx:function(a){var z=V.l6(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.u(a)},
sco:function(a,b){},
scd:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bx(z)}z=new D.B("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.J(z)}},
scf:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bx(z)}z=new D.B("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.J(z)}},
sa2:function(a,b){var z,y
b=this.bx(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.w])
z.b=!0
this.J(z)}},
sce:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.J(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.w])
z.b=!0
this.J(z)}},
sc0:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.w])
z.b=!0
this.J(z)}},
af:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
n:{
cB:function(){var z=new U.fx()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dn:{"^":"ae;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
aL:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dn))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
n:{
dp:function(a){var z=new U.dn()
z.a=a
return z}}},dC:{"^":"ab;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
J:[function(a){var z
H.j(a,"$isu")
z=this.e
if(!(z==null))z.u(a)},function(){return this.J(null)},"ab","$1","$0","gaB",0,2,0],
hO:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ae
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.J(z)},"$2","gez",8,0,19],
i9:[function(a,b){var z,y,x,w,v
z=U.ae
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gaB(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gp().H(0,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.J(z)},"$2","geW",8,0,19],
aL:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.an(z,z.length,0,[H.z(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.aL(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.aN():x
z=this.e
if(!(z==null))z.av(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.M(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asc:function(){return[U.ae]},
$asab:function(){return[U.ae]},
$isae:1},ae:{"^":"dl;"},iM:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
J:[function(a){var z
H.j(a,"$isu")
z=this.cy
if(!(z==null))z.u(a)},function(){return this.J(null)},"ab","$1","$0","gaB",0,2,0],
aN:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdc().h(0,this.gbG())
this.a.c.gdH().h(0,this.gbH())
this.a.c.gbs().h(0,this.gbI())
return!0},
ev:[function(a){H.j(a,"$isu")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbG",4,0,1],
ew:[function(a){var z,y,x,w,v,u,t
a=H.e(H.j(a,"$isu"),"$isbn")
if(!this.y)return
if(this.x){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.v(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.E(0,a.y)
z=new V.Q(y.a,y.b).j(0,2).t(0,z.ga3())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=new V.Q(x.a,x.b).j(0,2).t(0,z.ga3())
x=this.b
v=w.a
if(typeof v!=="number")return v.I()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
this.b.sM(0)
y=y.E(0,a.z)
this.Q=new V.Q(y.a,y.b).j(0,2).t(0,z.ga3())}this.ab()},"$1","gbH",4,0,1],
ex:[function(a){var z,y,x
H.j(a,"$isu")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.v(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sM(y*10*x)
this.ab()}},"$1","gbI",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.ch=y
x=b.y
this.b.af(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aw(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isae:1},iN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
J:[function(a){var z
H.j(a,"$isu")
z=this.fx
if(!(z==null))z.u(a)},function(){return this.J(null)},"ab","$1","$0","gaB",0,2,0],
aN:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdc().h(0,this.gbG())
this.a.c.gdH().h(0,this.gbH())
this.a.c.gbs().h(0,this.gbI())
z=this.a.d
y=z.f
if(y==null){y=D.E()
z.f=y
z=y}else z=y
z.h(0,this.ger())
z=this.a.d
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.ges())
z=this.a.e
y=z.b
if(y==null){y=D.E()
z.b=y
z=y}else z=y
z.h(0,this.gfl())
z=this.a.e
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.gfk())
z=this.a.e
y=z.c
if(y==null){y=D.E()
z.c=y
z=y}else z=y
z.h(0,this.gfj())
return!0},
ai:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.I()
z=-z}if(this.r){if(typeof y!=="number")return y.I()
y=-y}return new V.Q(z,y)},
ev:[function(a){a=H.e(H.j(a,"$isu"),"$isbn")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbG",4,0,1],
ew:[function(a){var z,y,x,w,v,u,t
a=H.e(H.j(a,"$isu"),"$isbn")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.v(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ai(new V.Q(y.a,y.b).j(0,2).t(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.I()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.I()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ai(new V.Q(x.a,x.b).j(0,2).t(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.E(0,a.z)
this.dx=this.ai(new V.Q(y.a,y.b).j(0,2).t(0,z.ga3()))}this.ab()},"$1","gbH",4,0,1],
ex:[function(a){var z,y,x
H.j(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.v(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.I()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.I()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sM(-y*10*z)
this.ab()}},"$1","gbI",4,0,1],
hL:[function(a){if(H.e(H.j(a,"$isu"),"$isdO").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ger",4,0,1],
hM:[function(a){var z,y,x,w,v,u,t
a=H.e(H.j(a,"$isu"),"$isbn")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ai(new V.Q(x.a,x.b).j(0,2).t(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.E(0,a.z)
this.dx=this.ai(new V.Q(y.a,y.b).j(0,2).t(0,z.ga3()))
this.ab()},"$1","ges",4,0,1],
il:[function(a){H.j(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfl",4,0,1],
ik:[function(a){var z,y,x,w,v,u,t
a=H.e(H.j(a,"$isu"),"$iseg")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.v(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ai(new V.Q(y.a,y.b).j(0,2).t(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.I()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.I()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ai(new V.Q(x.a,x.b).j(0,2).t(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.E(0,a.z)
this.dx=this.ai(new V.Q(y.a,y.b).j(0,2).t(0,z.ga3()))}this.ab()},"$1","gfk",4,0,1],
ij:[function(a){var z,y,x
H.j(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.v(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.I()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.I()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sM(-y*10*z)
this.ab()}},"$1","gfj",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.dy=y
x=b.y
this.c.af(0,x)
this.b.af(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aw(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.aw(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isae:1},iO:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.E()
this.r=z}return z},
J:function(a){var z=this.r
if(!(z==null))z.u(a)},
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.E()
z.e=y
z=y}else z=y
y=this.gey()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.E()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
hN:[function(a){var z,y,x,w
H.j(a,"$isu")
if(!J.M(this.b,this.a.b.c))return
H.e(a,"$iscL")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.B("zoom",z,w,this,[P.w])
z.b=!0
this.J(z)}},"$1","gey",4,0,1],
aL:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aw(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isae:1}}],["","",,M,{"^":"",fy:{"^":"ab;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
V:[function(a){var z
H.j(a,"$isu")
z=this.f
if(!(z==null))z.u(a)},function(){return this.V(null)},"cD","$1","$0","gS",0,2,0],
ib:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.az
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geY",8,0,20],
ic:[function(a,b){var z,y,x,w,v
z=M.az
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gS(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gp().H(0,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geZ",8,0,20],
a4:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.C();){y=z.d
if(!(y==null))y.a4(a)}this.e=!1},
$asc:function(){return[M.az]},
$asab:function(){return[M.az]},
$isaz:1},fA:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
V:[function(a){var z
H.j(a,"$isu")
z=this.f
if(!(z==null))z.u(a)},function(){return this.V(null)},"cD","$1","$0","gS",0,2,0],
saW:function(a,b){var z,y
if(b==null)b=X.cC(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().H(0,this.gS())
y=this.b
this.b=b
b.gp().h(0,this.gS())
z=new D.B("target",y,this.b,this,[X.cg])
z.b=!0
this.V(z)}},
saX:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().H(0,this.gS())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gS())
z=new D.B("technique",y,this.c,this,[O.bX])
z.b=!0
this.V(z)}},
a4:function(a){var z,y
a.cj(this.c)
this.b.a_(a)
z=this.a
z.toString
a.cy.bq(V.aN())
y=V.aN()
z.a
a.db.bq(y)
this.d.af(0,a)
this.d.a4(a)
this.a.toString
a.cy.aT()
a.db.aT()
this.b.toString
a.ci()},
$isaz:1},fN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
V:[function(a){var z
H.j(a,"$isu")
z=this.x
if(!(z==null))z.u(a)},function(){return this.V(null)},"cD","$1","$0","gS",0,2,0],
hT:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aC
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gS(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gZ()==null){s=new D.aD()
s.d=0
t.sZ(s)}s=t.gZ()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geE",8,0,7],
hU:[function(a,b){var z,y,x,w,v,u
z=E.aC
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gS(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null){if(v.gZ()==null){u=new D.aD()
u.d=0
v.sZ(u)}v.gZ().H(0,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geF",8,0,7],
sd2:function(a){var z,y
if(a==null)a=X.dW(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gp().H(0,this.gS())
y=this.a
this.a=a
a.gp().h(0,this.gS())
z=new D.B("camera",y,this.a,this,[X.c3])
z.b=!0
this.V(z)}},
saW:function(a,b){var z,y
if(b==null)b=X.cC(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().H(0,this.gS())
y=this.b
this.b=b
b.gp().h(0,this.gS())
z=new D.B("target",y,this.b,this,[X.cg])
z.b=!0
this.V(z)}},
saX:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().H(0,this.gS())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gS())
z=new D.B("technique",y,this.c,this,[O.bX])
z.b=!0
this.V(z)}},
gp:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
a4:function(a){var z,y,x,w,v,u,t,s,r,q,p
a.cj(this.c)
this.b.a_(a)
z=this.a
y=a.c
x=a.d
w=z.c
v=z.d
u=z.e
t=u-v
s=1/Math.tan(w*0.5)
r=V.aw(-s/(y/x),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0)
z.a
a.cy.bq(r)
y=$.dX
if(y==null){y=V.dS(new V.U(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.dX=y
q=y}else q=y
y=z.b
if(y!=null){p=y.aL(0,a,z)
if(p!=null)q=p.j(0,q)}a.db.bq(q)
z=this.c
if(z!=null)z.af(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.C();)z.d.af(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.C();)z.d.a4(a)
this.a.toString
a.cy.aT()
a.db.aT()
this.b.aK(a)
a.ci()},
$isaz:1},az:{"^":"a;"}}],["","",,A,{"^":"",df:{"^":"a;a,b,c"},fm:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fZ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d9:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dR:{"^":"cO;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ak,0ad,0bb,0de,0bc,0bd,0df,0dg,0be,0bf,0dh,0di,0bg,0bh,0dj,0dk,0bi,0dl,0dm,0bj,0dn,0dq,0bk,0bl,0bm,0dr,0ds,0bn,0bo,0dt,0du,0bp,0dv,0c2,0dw,0c3,0dz,0c4,0dA,0c5,0dB,0c6,0dC,0c7,a,b,0c,0d,0e,0f,0r,0x,0y",
dZ:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bW("")
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
a1.fo(z)
a1.fw(z)
a1.fp(z)
a1.fG(z)
a1.fH(z)
a1.fA(z)
a1.fL(z)
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
z=new P.bW("")
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
v.ft(z)
v.fn(z)
v.fq(z)
v.fu(z)
v.fE(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fC(z)
v.fD(z)}v.fz(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
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
case C.d:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.b([],[P.m])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fs(z)
v.fB(z)
v.fF(z)
v.fI(z)
v.fJ(z)
v.fK(z)
v.fv(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.m])
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
this.dE(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a1.fr)this.id=H.e(this.y.m(0,"invViewMat"),"$isar")
if(y)this.dy=H.e(this.y.m(0,"objMat"),"$isar")
if(w)this.fr=H.e(this.y.m(0,"viewObjMat"),"$isar")
this.fy=H.e(this.y.m(0,"projViewObjMat"),"$isar")
if(a1.x2)this.k1=H.e(this.y.m(0,"txt2DMat"),"$iscU")
if(a1.y1)this.k2=H.e(this.y.m(0,"txtCubeMat"),"$isar")
if(a1.y2)this.k3=H.e(this.y.m(0,"colorMat"),"$isar")
this.r1=H.b([],[A.ar])
y=a1.ak
if(y>0){this.k4=H.j(this.y.m(0,"bendMatCount"),"$isF")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.o(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(l,"$isar"))}}y=a1.a
if(y!==C.b){this.r2=H.e(this.y.m(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.rx=H.e(this.y.m(0,"emissionTxt"),"$isa9")
this.x1=H.e(this.y.m(0,"nullEmissionTxt"),"$isF")
break
case C.e:this.ry=H.e(this.y.m(0,"emissionTxt"),"$isaj")
this.x1=H.e(this.y.m(0,"nullEmissionTxt"),"$isF")
break}}y=a1.b
if(y!==C.b){this.x2=H.e(this.y.m(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.y1=H.e(this.y.m(0,"ambientTxt"),"$isa9")
this.ak=H.e(this.y.m(0,"nullAmbientTxt"),"$isF")
break
case C.e:this.y2=H.e(this.y.m(0,"ambientTxt"),"$isaj")
this.ak=H.e(this.y.m(0,"nullAmbientTxt"),"$isF")
break}}y=a1.c
if(y!==C.b){this.ad=H.e(this.y.m(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.bb=H.e(this.y.m(0,"diffuseTxt"),"$isa9")
this.bc=H.e(this.y.m(0,"nullDiffuseTxt"),"$isF")
break
case C.e:this.de=H.e(this.y.m(0,"diffuseTxt"),"$isaj")
this.bc=H.e(this.y.m(0,"nullDiffuseTxt"),"$isF")
break}}y=a1.d
if(y!==C.b){this.bd=H.e(this.y.m(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.df=H.e(this.y.m(0,"invDiffuseTxt"),"$isa9")
this.be=H.e(this.y.m(0,"nullInvDiffuseTxt"),"$isF")
break
case C.e:this.dg=H.e(this.y.m(0,"invDiffuseTxt"),"$isaj")
this.be=H.e(this.y.m(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a1.e
if(y!==C.b){this.bh=H.e(this.y.m(0,"shininess"),"$isS")
this.bf=H.e(this.y.m(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dh=H.e(this.y.m(0,"specularTxt"),"$isa9")
this.bg=H.e(this.y.m(0,"nullSpecularTxt"),"$isF")
break
case C.e:this.di=H.e(this.y.m(0,"specularTxt"),"$isaj")
this.bg=H.e(this.y.m(0,"nullSpecularTxt"),"$isF")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.d:this.dj=H.e(this.y.m(0,"bumpTxt"),"$isa9")
this.bi=H.e(this.y.m(0,"nullBumpTxt"),"$isF")
break
case C.e:this.dk=H.e(this.y.m(0,"bumpTxt"),"$isaj")
this.bi=H.e(this.y.m(0,"nullBumpTxt"),"$isF")
break}if(a1.dy){this.dl=H.e(this.y.m(0,"envSampler"),"$isaj")
this.dm=H.e(this.y.m(0,"nullEnvTxt"),"$isF")
y=a1.r
if(y!==C.b){this.bj=H.e(this.y.m(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dn=H.e(this.y.m(0,"reflectTxt"),"$isa9")
this.bk=H.e(this.y.m(0,"nullReflectTxt"),"$isF")
break
case C.e:this.dq=H.e(this.y.m(0,"reflectTxt"),"$isaj")
this.bk=H.e(this.y.m(0,"nullReflectTxt"),"$isF")
break}}y=a1.x
if(y!==C.b){this.bl=H.e(this.y.m(0,"refraction"),"$isS")
this.bm=H.e(this.y.m(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.dr=H.e(this.y.m(0,"refractTxt"),"$isa9")
this.bn=H.e(this.y.m(0,"nullRefractTxt"),"$isF")
break
case C.e:this.ds=H.e(this.y.m(0,"refractTxt"),"$isaj")
this.bn=H.e(this.y.m(0,"nullRefractTxt"),"$isF")
break}}}y=a1.y
if(y!==C.b){this.bo=H.e(this.y.m(0,"alpha"),"$isS")
switch(y){case C.b:break
case C.f:break
case C.d:this.dt=H.e(this.y.m(0,"alphaTxt"),"$isa9")
this.bp=H.e(this.y.m(0,"nullAlphaTxt"),"$isF")
break
case C.e:this.du=H.e(this.y.m(0,"alphaTxt"),"$isaj")
this.bp=H.e(this.y.m(0,"nullAlphaTxt"),"$isF")
break}}this.c2=H.b([],[A.eu])
this.c3=H.b([],[A.ev])
this.c4=H.b([],[A.ew])
this.c5=H.b([],[A.ex])
this.c6=H.b([],[A.ey])
this.c7=H.b([],[A.ez])
if(a1.k2){y=a1.z
if(y>0){this.dv=H.j(this.y.m(0,"dirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.c2;(x&&C.a).h(x,new A.eu(m,l,k))}}y=a1.Q
if(y>0){this.dw=H.j(this.y.m(0,"pntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.y
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isH")
x=this.y
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isS")
x=this.y
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isS")
x=this.y
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isS")
x=this.c3;(x&&C.a).h(x,new A.ev(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dz=H.j(this.y.m(0,"spotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isH")
x=this.y
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isH")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isS")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isS")
x=this.y
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isS")
x=this.y
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isS")
x=this.y
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isS")
x=this.c4;(x&&C.a).h(x,new A.ew(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dA=H.j(this.y.m(0,"txtDirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isH")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isH")
x=this.y
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isH")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isF")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isa9")
x=this.c5;(x&&C.a).h(x,new A.ex(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dB=H.j(this.y.m(0,"txtPntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$iscU")
x=this.y
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isH")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isF")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isS")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isS")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isS")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isaj")
x=this.c6;(x&&C.a).h(x,new A.ey(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dC=H.j(this.y.m(0,"txtSpotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isH")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isH")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isH")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isH")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isH")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isF")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isH")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isS")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isS")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isS")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isS")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isS")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isa9")
x=this.c7;(x&&C.a).h(x,new A.ez(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ac:function(a,b,c){b.a.uniform1i(b.d,1)},
a7:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
hj:function(a,b){var z,y
z=a.ad
y=new A.dR(b,z)
y.cA(b,z)
y.dZ(a,b)
return y}}},hm:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ak,ad,bb",
fo:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ak+"];\n"
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
fw:function(a){var z
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
fp:function(a){var z
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
fG:function(a){var z,y
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
fH:function(a){var z,y
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
fA:function(a){var z
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
fL:function(a){var z
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
an:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cw(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
ft:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.an(a,z,"emission")
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
case C.d:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fn:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.an(a,z,"ambient")
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
case C.d:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
fq:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.an(a,z,"diffuse")
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
case C.d:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
fu:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.an(a,z,"invDiffuse")
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
case C.d:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
fE:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.an(a,z,"specular")
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
case C.d:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
fz:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
case C.d:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.e:z+="uniform samplerCube bumpTxt;\n"
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
case C.d:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.e:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
fC:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.an(a,z,"reflect")
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
case C.d:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fD:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.an(a,z,"refract")
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
case C.d:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
fs:function(a){var z,y
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
fB:function(a){var z,y
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
fF:function(a){var z,y
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
fI:function(a){var z,y,x
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
fJ:function(a){var z,y,x
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
fK:function(a){var z,y,x
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
fv:function(a){var z
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
i:function(a){return this.ad}},eu:{"^":"a;a,b,c"},ex:{"^":"a;a,b,c,d,e,f,r,x"},ev:{"^":"a;a,b,c,d,e,f,r"},ey:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ew:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ez:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cO:{"^":"cv;",
cA:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dE:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.cN(b,35633)
this.f=this.cN(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.f4(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.o(P.n("Failed to link shader: "+H.i(x)))}this.fe()
this.fg()},
a_:function(a){a.a.useProgram(this.r)
this.x.fZ()},
cN:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f4(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.f(P.n("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
fe:function(){var z,y,x,w,v,u
z=H.b([],[A.df])
y=this.a
x=H.V(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.df(y,v.name,u))}this.x=new A.fm(z)},
fg:function(){var z,y,x,w,v,u
z=H.b([],[A.a5])
y=this.a
x=H.V(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.fW(v.type,v.size,v.name,u))}this.y=new A.iE(z)},
aA:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.F(z,y,b,c)
else return A.cT(z,y,b,a,c)},
ej:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a9(z,y,b,c)
else return A.cT(z,y,b,a,c)},
ek:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aj(z,y,b,c)
else return A.cT(z,y,b,a,c)},
b8:function(a,b){return new P.eI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fW:function(a,b,c,d){switch(a){case 5120:return this.aA(b,c,d)
case 5121:return this.aA(b,c,d)
case 5122:return this.aA(b,c,d)
case 5123:return this.aA(b,c,d)
case 5124:return this.aA(b,c,d)
case 5125:return this.aA(b,c,d)
case 5126:return new A.S(this.a,this.r,c,d)
case 35664:return new A.bz(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.et(this.a,this.r,c,d)
case 35667:return new A.iB(this.a,this.r,c,d)
case 35668:return new A.iC(this.a,this.r,c,d)
case 35669:return new A.iD(this.a,this.r,c,d)
case 35674:return new A.iG(this.a,this.r,c,d)
case 35675:return new A.cU(this.a,this.r,c,d)
case 35676:return new A.ar(this.a,this.r,c,d)
case 35678:return this.ej(b,c,d)
case 35680:return this.ek(b,c,d)
case 35670:throw H.f(this.b8("BOOL",c))
case 35671:throw H.f(this.b8("BOOL_VEC2",c))
case 35672:throw H.f(this.b8("BOOL_VEC3",c))
case 35673:throw H.f(this.b8("BOOL_VEC4",c))
default:throw H.f(P.n("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},c5:{"^":"a;a,b",
i:function(a){return this.b}},ea:{"^":"cO;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
e2:function(a,b){var z,y,x,w,v
this.dE(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.il(a))
this.z=this.x.k(0,"posAttr")
this.Q=H.e(this.y.m(0,"txtCount"),"$isF")
this.ch=H.e(this.y.m(0,"backClr"),"$iset")
this.cx=H.b([],[A.a9])
this.cy=H.b([],[A.ar])
z=[A.bz]
this.db=H.b([],z)
this.dx=H.b([],z)
this.dy=H.b([],z)
this.fr=H.b([],z)
this.fx=H.b([],[A.F])
for(y=0;y<a;++y){z=this.cx
x=this.y
w="txt"+y
v=x.k(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isa9"))
z=this.cy
x=this.y
w="clrMat"+y
v=x.k(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isar"))
z=this.db
x=this.y
w="srcLoc"+y
v=x.k(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isbz"))
z=this.dx
x=this.y
w="srcSize"+y
v=x.k(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isbz"))
z=this.dy
x=this.y
w="destLoc"+y
v=x.k(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isbz"))
z=this.fr
x=this.y
w="destSize"+y
v=x.k(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isbz"))
z=this.fx
x=this.y
w="flip"+y
v=x.k(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isF"))}},
n:{
il:function(a){var z,y
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
ij:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.ea(b,z)
y.cA(b,z)
y.e2(a,b)
return y}}},a5:{"^":"a;"},iE:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.f(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
h1:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.h1("\n")}},F:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},iB:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},iC:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},iD:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},iA:{"^":"a5;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.i(this.c)},
n:{
cT:function(a,b,c,d,e){var z=new A.iA(a,b,c,e)
z.f=d
z.e=P.hb(d,0,!1,P.A)
return z}}},S:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},bz:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},H:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},et:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},iG:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},cU:{"^":"a5;a,b,c,d",
ag:function(a){var z=new Float32Array(H.b6(H.v(a,"$isd",[P.w],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},ar:{"^":"a5;a,b,c,d",
ag:function(a){var z=new Float32Array(H.b6(H.v(a,"$isd",[P.w],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},a9:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},aj:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
l3:function(a,b,c,d){return F.kC(c,a,d,b,new F.l4())},
kC:function(a,b,c,d,e){var z=F.l1(a,b,new F.kD(H.k(e,{func:1,ret:V.U,args:[P.w]}),d,b,c),null)
if(z==null)return
z.aq()
z.hc(new F.iW(),new F.hx())
return z},
l1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.as,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.e2()
y=H.b([],[F.as])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ck(null,null,new V.a3(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.d7(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ck(null,null,new V.a3(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.d7(d))}}z.d.fN(a+1,b+1,y)
return z},
l4:{"^":"t:34;",
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}},
kD:{"^":"t:35;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dc(y.$1(z),x)
x=J.dc(y.$1(z+3.141592653589793/this.c),x).E(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.t(0,Math.sqrt(x.v(x)))
u=new V.G(1,0,0)
y=v.ar(!v.q(0,u)?new V.G(0,0,1):u)
t=y.t(0,Math.sqrt(y.v(y)))
y=t.ar(v)
u=y.t(0,Math.sqrt(y.v(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
x=w.F(0,new V.U(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.M(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a0()}}},
ag:{"^":"a;0a,0b,0c,0d,0e",
aO:function(){if(!this.gda()){C.a.H(this.a.a.d.b,this)
this.a.a.a0()}this.f3()
this.f4()
this.f5()},
fb:function(a){this.a=a
C.a.h(a.d.b,this)},
fc:function(a){this.b=a
C.a.h(a.d.c,this)},
fd:function(a){this.c=a
C.a.h(a.d.d,this)},
f3:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
f4:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
f5:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gda:function(){return this.a==null||this.b==null||this.c==null},
ed:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dG())return
return v.t(0,Math.sqrt(v.v(v)))},
eg:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.E(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.t(0,Math.sqrt(z.v(z)))
z=w.E(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.ar(z.t(0,Math.sqrt(z.v(z))))
return z.t(0,Math.sqrt(z.v(z)))},
bZ:function(){if(this.d!=null)return!0
var z=this.ed()
if(z==null){z=this.eg()
if(z==null)return!1}this.d=z
this.a.a.a0()
return!0},
ec:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dG())return
return v.t(0,Math.sqrt(v.v(v)))},
ef:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.E(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.v(z)))
if(o.a-p.a<0)m=m.I(0)}else{l=(z-q.b)/n
z=r.E(0,u).j(0,l).F(0,u).E(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.v(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.I(0)}z=this.d
if(z!=null){k=z.t(0,Math.sqrt(z.v(z)))
z=k.ar(m)
z=z.t(0,Math.sqrt(z.v(z))).ar(k)
m=z.t(0,Math.sqrt(z.v(z)))}return m},
bX:function(){if(this.e!=null)return!0
var z=this.ec()
if(z==null){z=this.ef()
if(z==null)return!1}this.e=z
this.a.a.a0()
return!0},
gfS:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z,y
if(this.gda())return a+"disposed"
z=a+C.i.au(J.am(this.a.e),0)+", "+C.i.au(J.am(this.b.e),0)+", "+C.i.au(J.am(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
L:function(){return this.A("")},
n:{
bM:function(a,b,c){var z,y,x
z=new F.ag()
y=a.a
if(y==null)H.o(P.n("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.o(P.n("May not create a face with vertices attached to different shapes."))
z.fb(a)
z.fc(b)
z.fd(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a0()
return z}}},
fQ:{"^":"a;"},
i7:{"^":"fQ;",
aQ:function(a,b,c){var z,y
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
dK:{"^":"a;"},
h5:{"^":"a;"},
iz:{"^":"h5;",
aQ:function(a,b,c){var z,y
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
dY:{"^":"a;"},
e1:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
aq:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aq()||!1
if(!this.a.aq())y=!1
z=this.e
if(!(z==null))z.av(0)
return y},
hc:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.b(z.slice(0),[H.z(z,0)])
for(z=[F.as];y.length!==0;){x=C.a.gh0(y)
C.a.ht(y,0)
if(x!=null){w=H.b([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.x)(y),++u){t=y[u]
if(t!=null&&a.aQ(0,x,t)){C.a.h(w,t)
C.a.H(y,t)}}if(w.length>1)b.hb(w)}}this.a.w()
this.c.ck()
this.d.ck()
this.b.hu()
this.c.cl(new F.iz())
this.d.cl(new F.i7())
z=this.e
if(!(z==null))z.av(0)},
d1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$at()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$bA().a)!==0)++w
if((x&$.$get$bB().a)!==0)++w
if((x&$.$get$b4().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
v=b.gcu(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.di])
for(r=0,q=0;q<w;++q){p=b.fP(q)
o=p.gcu(p)
C.a.Y(s,q,new Z.di(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].h8(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.Y(t,l,m[k]);++l}}r+=o}H.v(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.b6(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cy(new Z.eF(34962,j),s,b)
i.b=H.b([],[Z.c9])
if(this.b.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.cV(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c9(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.cV(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c9(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.cV(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c9(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.B(z,"\n")},
aJ:function(a){var z=this.e
if(!(z==null))z.u(a)},
a0:function(){return this.aJ(null)},
n:{
e2:function(){var z,y
z=new F.e1()
y=new F.iR(z)
y.b=!1
y.c=H.b([],[F.as])
z.a=y
y=new F.i2(z)
y.b=H.b([],[F.dY])
z.b=y
y=new F.i1(z)
y.b=H.b([],[F.dK])
z.c=y
y=new F.i0(z)
y.b=H.b([],[F.ag])
z.d=y
z.e=null
return z}}},
i0:{"^":"a;a,0b",
fM:function(a){var z,y,x,w,v
H.v(a,"$isd",[F.as],"$asd")
z=H.b([],[F.ag])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bM(y,w,v))}return z},
fN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isd",[F.as],"$asd")
z=H.b([],[F.ag])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.h(c,x)
r=c[x];++x
if(x>=s)return H.h(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.h(c,p)
o=c[p]
if(y<0||y>=s)return H.h(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bM(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bM(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bM(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bM(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cl:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aQ(0,v,t)){v.aO()
break}}}}},
ck:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gfS(x)
if(y)x.aO()}},
aq:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bZ())x=!1
return x},
bY:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bX())x=!1
return x},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
L:function(){return this.A("")}},
i1:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cl:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aQ(0,v,t)){v.aO()
break}}}}},
ck:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.M(x.a,x.b)
if(y)x.aO()}},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.b([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.B(z,"\n")},
L:function(){return this.A("")}},
i2:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hu:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aO()}},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
L:function(){return this.A("")}},
as:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
d7:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ck(this.cx,x,u,z,y,w,v,a,t)},
she:function(a){var z
a=a.t(0,Math.sqrt(a.v(a)))
if(!J.M(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a0()}},
h8:function(a){var z,y
z=J.L(a)
if(z.q(a,$.$get$at())){z=this.f
y=[P.w]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aG())){z=this.r
y=[P.w]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aF())){z=this.x
y=[P.w]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aH())){z=this.y
y=[P.w]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.q(a,$.$get$aI())){z=this.z
y=[P.w]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bA())){z=this.Q
y=[P.w]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bB())){z=this.Q
y=[P.w]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$b4()))return H.b([this.ch],[P.w])
else if(z.q(a,$.$get$aE())){z=this.cx
y=[P.w]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.w])},
bZ:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.G(0,0,0)
this.d.K(0,new F.j0(z))
z=z.a
this.r=z.t(0,Math.sqrt(z.v(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
bX:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.G(0,0,0)
this.d.K(0,new F.j_(z))
z=z.a
this.x=z.t(0,Math.sqrt(z.v(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z,y,x
z=H.b([],[P.m])
C.a.h(z,C.i.au(J.am(this.e),0))
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
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.B(z,", ")
return a+"{"+x+"}"},
L:function(){return this.A("")},
n:{
ck:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.as()
y=new F.iZ(z)
y.b=H.b([],[F.dY])
z.b=y
y=new F.iV(z)
x=[F.dK]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iS(z)
x=[F.ag]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eC()
z.e=0
y=$.$get$at()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aG().a)!==0?e:null
z.x=(x&$.$get$aF().a)!==0?b:null
z.y=(x&$.$get$aH().a)!==0?f:null
z.z=(x&$.$get$aI().a)!==0?g:null
z.Q=(x&$.$get$eD().a)!==0?c:null
z.ch=(x&$.$get$b4().a)!==0?i:0
z.cx=(x&$.$get$aE().a)!==0?a:null
return z}}},
j0:{"^":"t:8;a",
$1:function(a){var z,y
H.j(a,"$isag")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
j_:{"^":"t:8;a",
$1:function(a){var z,y
H.j(a,"$isag")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
iR:{"^":"a;a,0b,0c",
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.f(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a0()
return!0},
fO:function(a,b,c,d,e,f,g,h,i){var z=F.ck(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b9:function(a,b,c,d,e,f){return this.fO(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
aq:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bZ()
return!0},
bY:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bX()
return!0},
fR:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.t(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.u(null)}}}}return!0},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
this.w()
z=H.b([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
L:function(){return this.A("")}},
iS:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.h(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.h(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
K:function(a,b){H.k(b,{func:1,ret:-1,args:[F.ag]})
C.a.K(this.b,b)
C.a.K(this.c,new F.iT(this,b))
C.a.K(this.d,new F.iU(this,b))},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
L:function(){return this.A("")}},
iT:{"^":"t:8;a,b",
$1:function(a){H.j(a,"$isag")
if(!J.M(a.a,this.a))this.b.$1(a)}},
iU:{"^":"t:8;a,b",
$1:function(a){var z
H.j(a,"$isag")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
iV:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
L:function(){return this.A("")}},
iX:{"^":"a;"},
iW:{"^":"iX;",
aQ:function(a,b,c){return J.M(b.f,c.f)}},
iY:{"^":"a;"},
hx:{"^":"iY;",
hb:function(a){var z,y,x,w
H.v(a,"$isd",[F.as],"$asd")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.t(0,Math.sqrt(z.v(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x)a[x].she(z)
return}},
iZ:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
L:function(){return this.A("")}}}],["","",,O,{"^":"",hi:{"^":"bX;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0ah:dy@",
gp:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
O:[function(a){var z
H.j(a,"$isu")
z=this.dy
if(!(z==null))z.u(a)},function(){return this.O(null)},"b2","$1","$0","gal",0,2,0],
f8:[function(a){H.j(a,"$isu")
this.a=null
this.O(a)},function(){return this.f8(null)},"ii","$1","$0","gf7",0,2,0],
hQ:[function(a,b){var z=V.ah
z=new D.bO(a,H.v(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.O(z)},"$2","geB",8,0,21],
hR:[function(a,b){var z=V.ah
z=new D.bP(a,H.v(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.O(z)},"$2","geC",8,0,21],
cK:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.X(z.e.length+3,4)*4
x=C.h.X(z.f.length+3,4)*4
w=C.h.X(z.r.length+3,4)*4
v=C.h.X(z.x.length+3,4)*4
u=C.h.X(z.y.length+3,4)*4
t=C.h.X(z.z.length+3,4)*4
s=C.h.X(this.e.a.length+3,4)*4
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
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$at()
if(c){z=$.$get$aG()
a6=new Z.b3(a6.a|z.a)}if(b){z=$.$get$aF()
a6=new Z.b3(a6.a|z.a)}if(a){z=$.$get$aH()
a6=new Z.b3(a6.a|z.a)}if(a0){z=$.$get$aI()
a6=new Z.b3(a6.a|z.a)}if(a2){z=$.$get$aE()
a6=new Z.b3(a6.a|z.a)}return new A.hm(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
P:function(a,b){H.v(a,"$isd",[T.ch],"$asd")},
af:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.an(z,z.length,0,[H.z(z,0)]);z.C();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cn(x)}}},
dK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cK()
y=H.j(a.fr.k(0,z.ad),"$isdR")
if(y==null){y=A.hj(z,a.a)
a.d_(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bb
z=b.e
if(!(z instanceof Z.cy)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.aq()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.bY()
u.a.bY()
u=u.e
if(!(u==null))u.av(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.fR()
t=t.e
if(!(t==null))t.av(0)}r=b.d.d1(new Z.eG(a.a),w)
r.as($.$get$at()).e=this.a.Q.c
if(z)r.as($.$get$aG()).e=this.a.cx.c
if(v)r.as($.$get$aF()).e=this.a.ch.c
if(x.rx)r.as($.$get$aH()).e=this.a.cy.c
if(u)r.as($.$get$aI()).e=this.a.db.c
if(x.x1)r.as($.$get$aE()).e=this.a.dx.c
b.e=r}z=T.ch
q=H.b([],[z])
this.a.a_(a)
if(x.fx){v=this.a
u=a.dx
u=u.gU(u)
v=v.dy
v.toString
v.ag(u.a5(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gU(u)
t=a.dx
t=u.j(0,t.gU(t))
a.cx=t
u=t}v=v.fr
v.toString
v.ag(u.a5(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghr()
t=a.dx
t=u.j(0,t.gU(t))
a.ch=t
u=t}v=v.fy
v.toString
v.ag(u.a5(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ag(u.a5(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ag(u.a5(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ag(C.z.a5(u,!0))}if(x.ak>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.j(t,"$isah")
u=u.r1
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.b6(H.v(t.a5(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.f.d)
v=this.a
u=this.f.d
v.ac(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.P(q,this.f.e)
v=this.a
u=this.f.e
v.a7(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.f:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.r.d)
v=this.a
u=this.r.d
v.ac(v.y1,v.ak,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.P(q,this.r.e)
v=this.a
u=this.r.e
v.a7(v.y2,v.ak,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.f:v=this.a
u=this.x.f
v=v.ad
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.x.d)
v=this.a
u=this.x.d
v.ac(v.bb,v.bc,u)
u=this.a
v=this.x.f
u=u.ad
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.P(q,this.x.e)
v=this.a
u=this.x.e
v.a7(v.de,v.bc,u)
u=this.a
v=this.x.f
u=u.ad
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.f:v=this.a
u=this.y.f
v=v.bd
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.y.d)
v=this.a
u=this.y.d
v.ac(v.df,v.be,u)
u=this.a
v=this.y.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.P(q,this.y.e)
v=this.a
u=this.y.e
v.a7(v.dg,v.be,u)
u=this.a
v=this.y.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
u=this.z.f
v=v.bf
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bh
u.a.uniform1f(u.d,s)
break
case C.d:this.P(q,this.z.d)
v=this.a
u=this.z.d
v.ac(v.dh,v.bg,u)
u=this.a
v=this.z.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bh
v.a.uniform1f(v.d,s)
break
case C.e:this.P(q,this.z.e)
v=this.a
u=this.z.e
v.a7(v.di,v.bg,u)
u=this.a
v=this.z.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bh
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c2
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.cn(j.a)
s=t.a
h=t.b
g=t.c
g=t.t(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dw
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c3
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaU(j)
s=i.b
h=t.gcp(t)
g=t.gcq(t)
t=t.gcr(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b_(j.gaU(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gaj(j)
g=i.d
h=t.gbr()
s=t.gb0()
t=t.gba()
g.a.uniform3f(g.d,h,s,t)
t=j.gbS()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbT()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbU()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dz
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c4
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaU(j)
s=i.b
h=t.gcp(t)
g=t.gcq(t)
t=t.gcr(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc1(j).ip()
g=i.c
h=t.gaF(t)
s=t.gaG(t)
t=t.gaH()
g.a.uniform3f(g.d,h,s,t)
t=m.b_(j.gaU(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaj(j)
s=i.e
h=t.gbr()
g=t.gb0()
t=t.gba()
s.a.uniform3f(s.d,h,g,t)
t=j.gio()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gim()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbS()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbT()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dA
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.c5
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gae()
H.v(q,"$isd",t,"$asd")
if(!C.a.aE(q,s)){s.sc9(0,q.length)
C.a.h(q,s)}s=j.gc1(j)
h=i.d
g=s.gaF(s)
f=s.gaG(s)
s=s.gaH()
h.a.uniform3f(h.d,g,f,s)
s=j.gbs()
f=i.b
g=s.gaF(s)
h=s.gaG(s)
s=s.gaH()
f.a.uniform3f(f.d,g,h,s)
s=j.gaV(j)
h=i.c
g=s.gaF(s)
f=s.gaG(s)
s=s.gaH()
h.a.uniform3f(h.d,g,f,s)
s=m.cn(j.gc1(j))
f=s.a
g=s.b
h=s.c
h=s.t(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gaj(j)
g=i.f
f=h.gbr()
s=h.gb0()
h=h.gba()
g.a.uniform3f(g.d,f,s,h)
h=j.gae()
s=h.gcc(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.geq()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gep())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dB
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.c6
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gae()
H.v(q,"$isd",s,"$asd")
if(!C.a.aE(q,h)){h.sc9(0,q.length)
C.a.h(q,h)}e=m.j(0,j.gU(j))
h=j.gU(j).b_(new V.U(0,0,0))
g=i.b
f=h.gcp(h)
d=h.gcq(h)
h=h.gcr(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b_(new V.U(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.dF(0)
d=i.d
n=new Float32Array(H.b6(H.v(new V.cc(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a5(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gaj(j)
h=i.e
f=d.gbr()
g=d.gb0()
d=d.gba()
h.a.uniform3f(h.d,f,g,d)
d=j.gae()
h=d.gcc(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcc(d)
f=h.a
h=h.d
if(!g)f.uniform1i(h,0)
else f.uniform1i(h,d.gc9(d))
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbS()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbT()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbU()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dC
v.a.uniform1i(v.d,p)
v=a.db
m=v.gU(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c7
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gae()
H.v(q,"$isd",z,"$asd")
if(!C.a.aE(q,t)){t.sc9(0,q.length)
C.a.h(q,t)}t=j.gaU(j)
s=i.b
h=t.gcp(t)
g=t.gcq(t)
t=t.gcr(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc1(j)
g=i.c
h=t.gaF(t)
s=t.gaG(t)
t=t.gaH()
g.a.uniform3f(g.d,h,s,t)
t=j.gbs()
s=i.d
h=t.gaF(t)
g=t.gaG(t)
t=t.gaH()
s.a.uniform3f(s.d,h,g,t)
t=j.gaV(j)
g=i.e
h=t.gaF(t)
s=t.gaG(t)
t=t.gaH()
g.a.uniform3f(g.d,h,s,t)
t=m.b_(j.gaU(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gae()
s=t.gcc(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.geq()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gep())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gaj(j)
s=i.y
h=t.gbr()
g=t.gb0()
t=t.gba()
s.a.uniform3f(s.d,h,g,t)
t=j.giu()
g=i.z
g.a.uniform1f(g.d,t)
t=j.giv()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbS()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbT()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.d:this.P(q,this.Q.d)
z=this.a
v=this.Q.d
z.ac(z.dj,z.bi,v)
break
case C.e:this.P(q,this.Q.e)
z=this.a
v=this.Q.e
z.a7(z.dk,z.bi,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gU(v).dF(0)
a.Q=v}z=z.id
z.toString
z.ag(v.a5(0,!0))}if(x.dy){this.P(q,this.ch)
z=this.a
v=this.ch
z.a7(z.dl,z.dm,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bj
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.P(q,this.cx.d)
z=this.a
v=this.cx.d
z.ac(z.dn,z.bk,v)
v=this.a
z=this.cx.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.e:this.P(q,this.cx.e)
z=this.a
v=this.cx.e
z.a7(z.dq,z.bk,v)
v=this.a
z=this.cx.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
v=this.cy.f
z=z.bm
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bl
v.a.uniform1f(v.d,t)
break
case C.d:this.P(q,this.cy.d)
z=this.a
v=this.cy.d
z.ac(z.dr,z.bn,v)
v=this.a
z=this.cy.f
v=v.bm
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bl
z.a.uniform1f(z.d,t)
break
case C.e:this.P(q,this.cy.e)
z=this.a
v=this.cy.e
z.a7(z.ds,z.bn,v)
v=this.a
z=this.cy.f
v=v.bm
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bl
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.f:z=this.a
u=this.db.f
z=z.bo
z.a.uniform1f(z.d,u)
break
case C.d:this.P(q,this.db.d)
z=this.a
u=this.db.d
z.ac(z.dt,z.bp,u)
u=this.a
z=this.db.f
u=u.bo
u.a.uniform1f(u.d,z)
break
case C.e:this.P(q,this.db.e)
z=this.a
u=this.db.e
z.a7(z.du,z.bp,u)
u=this.a
z=this.db.f
u=u.bo
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a_(a)
z=b.e
z.a_(a)
z.a4(a)
z.aK(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].aK(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.d9()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cK().ad}},hk:{"^":"cJ;0f,a,b,0c,0d,0e"},cJ:{"^":"a;",
b5:["dX",function(){}]},hl:{"^":"cJ;a,b,0c,0d,0e"},aZ:{"^":"cJ;0f,a,b,0c,0d,0e",
cT:function(a){var z,y
if(!J.M(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.X])
y.b=!0
this.a.O(y)}},
b5:["bw",function(){this.dX()
this.cT(new V.X(1,1,1))}],
saj:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.b5()
z=this.a
z.a=null
z.O(null)}this.cT(b)}},hn:{"^":"aZ;0ch,0f,a,b,0c,0d,0e",
fa:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.O(z)}},
b5:function(){this.bw()
this.fa(1)}},ho:{"^":"aZ;0ch,0f,a,b,0c,0d,0e",
bO:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.O(z)}},
b5:function(){this.bw()
this.bO(100)}},bX:{"^":"a;"},ii:{"^":"bX;0a,0b,0c,0d,0ah:e@",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
O:[function(a){var z
H.j(a,"$isu")
z=this.e
if(!(z==null))z.u(a)},function(){return this.O(null)},"b2","$1","$0","gal",0,2,0],
hY:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isc",[O.b0],"$asc")
for(z=b.length,y=this.gal(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gah()==null){t=new D.aD()
t.d=0
u.sah(t)}t=u.gah()
t.toString
H.k(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.b2()},"$2","geJ",8,0,22],
hZ:[function(a,b){var z,y,x,w,v
H.v(b,"$isc",[O.b0],"$asc")
for(z=b.length,y=this.gal(),x=0;x<b.length;b.length===z||(0,H.x)(b),++x){w=b[x]
if(w!=null){if(w.gah()==null){v=new D.aD()
v.d=0
w.sah(v)}w.gah().H(0,y)}}this.b2()},"$2","geK",8,0,22],
dK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.h.X(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.j(a.fr.k(0,y),"$isea")
if(x==null){x=A.ij(z,a.a)
a.d_(x)}this.b=x
y=x}if(b.e==null){y=b.d.d1(new Z.eG(a.a),$.$get$at())
w=y.as($.$get$at())
v=this.b
w.e=v.z.c
b.e=y
y=v}y.a_(a)
y=T.ch
u=H.b([],[y])
for(w=[P.w],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.v(u,"$isd",y,"$asd")
if(v!=null)if(!C.a.aE(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.cx
if(t>=v.length)return H.h(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)o.uniform1i(v,0)
else o.uniform1i(v,q.a)
v=this.b
q=r.b
v=v.cy
if(t>=v.length)return H.h(v,t)
v=v[t]
n=new Float32Array(H.b6(H.v((q==null?new V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q).a5(0,!0),"$isd",w,"$asd")))
v.a.uniformMatrix4fv(v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null)m=V.aP(0,0,1,1)
q=v.db
if(t>=q.length)return H.h(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.h(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null)m=V.aP(0,0,1,1)
q=v.dy
if(t>=q.length)return H.h(q,t)
q=q[t]
q.a.uniform2f(q.d,m.a,m.b)
v=v.fr
if(t>=v.length)return H.h(v,t)
v=v[t]
v.a.uniform2f(v.d,m.c,m.d)
v=this.b
q=r.e
v=v.fx
if(t>=v.length)return H.h(v,t)
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
for(s=0;s<u.length;++s){y=u[s]
if(!y.c&&y.d){y.c=!0
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,y.b)}}y=b.e
if(y instanceof Z.cy){y.a_(a)
y.a4(a)
y.aK(a)}else b.e=null
y=this.b
y.toString
a.a.useProgram(null)
y.x.d9()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},b0:{"^":"a;0a,0b,0c,0d,0e,0ah:f@",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
O:[function(a){var z
H.j(a,"$isu")
z=this.f
if(!(z==null))z.u(a)},function(){return this.O(null)},"b2","$1","$0","gal",0,2,0],
sae:function(a){var z,y
z=this.a
if(z==null?a!=null:z!==a){if(z!=null)z.gp().H(0,this.gal())
y=this.a
this.a=a
if(a!=null)a.gp().h(0,this.gal())
z=new D.B("texture",y,this.a,this,[T.e8])
z.b=!0
this.O(z)}},
sd5:function(a){var z,y
a=V.aN()
if(!J.M(this.b,a)){z=this.b
this.b=a
y=new D.B("colorMatrix",z,a,this,[V.ah])
y.b=!0
this.O(y)}},
scv:function(a,b){var z,y
b=V.aP(0,0,1,1)
if(!J.M(this.c,b)){z=this.c
this.c=b
y=new D.B("source",z,b,this,[V.cf])
y.b=!0
this.O(y)}},
sd8:function(a,b){var z,y
if(b==null)b=V.aP(0,0,1,1)
if(!J.M(this.d,b)){z=this.d
this.d=b
y=new D.B("destination",z,b,this,[V.cf])
y.b=!0
this.O(y)}},
n:{
ik:function(a,b,c,d,e){var z,y
z=new O.b0()
z.sae(e)
z.sd5(a)
z.scv(0,d)
z.sd8(0,b)
if(z.e!==!1){z.e=!1
y=new D.B("flip",!0,!1,z,[P.a2])
y.b=!0
z.O(y)}z.f=null
return z}}}}],["","",,T,{"^":"",ch:{"^":"cv;"},e8:{"^":"ch;"},ih:{"^":"e8;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gp:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
n:{
e9:function(a,b){var z=new T.ih()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},im:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",fl:{"^":"a;",
aP:function(a,b){return!0},
i:function(a){return"all"},
$isbT:1},bT:{"^":"a;"},dQ:{"^":"a;",
aP:["dW",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aP(0,b))return!0
return!1}],
i:["cz",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbT:1},bo:{"^":"dQ;0a",
aP:function(a,b){return!this.dW(0,b)},
i:function(a){return"!["+this.cz(0)+"]"}},hZ:{"^":"a;0a",
e0:function(a){var z,y
if(a.a.length<=0)throw H.f(P.n("May not create a SetMatcher with zero characters."))
z=new H.aY(0,0,[P.A,P.a2])
for(y=new H.dN(a,a.gl(a),0,[H.au(a,"r",0)]);y.C();)z.Y(0,y.d,!0)
this.a=z},
aP:function(a,b){return this.a.d6(0,b)},
i:function(a){var z=this.a
return P.cQ(new H.dM(z,[H.z(z,0)]),0,null)},
$isbT:1,
n:{
a1:function(a){var z=new V.hZ()
z.e0(a)
return z}}},e4:{"^":"a;a,b,0c,0d",
ghd:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eh(this.a.G(0,b))
w.a=H.b([],[V.bT])
w.c=!1
C.a.h(this.c,w)
return w},
h_:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aP(0,a))return w}return},
i:function(a){return this.b}},ee:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.ff(this.b,"\n","\\n")
y=H.ff(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ef:{"^":"a;a,b,0c",
i:function(a){return this.b}},iv:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.e4(this,b)
z.c=H.b([],[V.eh])
this.a.Y(0,b,z)}return z},
aY:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.ef(this,a)
y=P.m
z.c=new H.aY(0,0,[y,y])
this.b.Y(0,a,z)}return z},
hH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.ee])
y=this.c
x=[P.A]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.b3(a,t)
r=y.h_(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cQ(w,0,null)
throw H.f(P.n("Untokenizable string [state: "+y.ghd(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cQ(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.ee(o==null?p.b:o,q,t)}++t}}}},eh:{"^":"dQ;b,0c,0a",
i:function(a){return this.b.b+": "+this.cz(0)}}}],["","",,X,{"^":"",fo:{"^":"cg;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gp:function(){var z=this.fr
if(z==null){z=D.E()
this.fr=z}return z},
aa:function(a){var z=this.fr
if(!(z==null))z.u(a)},
sa6:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.B("width",z,b,this,[P.A])
z.b=!0
this.aa(z)}},
sa1:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.B("height",z,b,this,[P.A])
z.b=!0
this.aa(z)}},
a_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
if(this.f){z=a.a.drawingBufferWidth
y=this.r
if(typeof z!=="number")return z.j()
this.sa6(0,C.h.R(z*y))
y=a.a.drawingBufferHeight
z=this.x
if(typeof y!=="number")return y.j()
this.sa1(0,C.h.R(y*z))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.V(z.getParameter(3379))
u=V.da(x,2)
t=V.da(w,2)
v=V.da(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.K.hC(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.e9(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
x=r.y
if(!(x==null))x.dd()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.dd()
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
a.c=C.c.R(y*this.a)
x=z.d
a.d=C.c.R(x*this.b)
w=this.c
q=C.c.R(z.a*w)
p=this.d
o=C.c.R(z.b*p)
n=C.c.R(y*w)
m=C.c.R(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.db)
z=a.a
y=this.cx
z.clearColor(y.a,y.b,y.c,y.d)
a.a.clear(16640)},
aK:function(a){a.a.bindFramebuffer(36160,null)}},c3:{"^":"a;",$isay:1},fV:{"^":"cg;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
a_:function(a){var z,y,x,w,v,u,t
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.c.R(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.c.R(w.b*x)
t=C.c.R(w.c*y)
a.c=t
w=C.c.R(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
aK:function(a){},
n:{
cC:function(a,b,c,d,e,f,g){var z,y
z=new X.fV()
if(d==null)y=new V.a3(0,0,0,1)
else y=d
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.aP(0,0,1,1)
z.r=y
return z}}},fW:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
$isay:1,
$isc3:1},hA:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
aa:[function(a){var z
H.j(a,"$isu")
z=this.f
if(!(z==null))z.u(a)},function(){return this.aa(null)},"hJ","$1","$0","ge9",0,2,0],
$isay:1,
$isc3:1,
n:{
dW:function(a,b,c,d,e){var z,y,x
z=new X.hA()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gp().h(0,z.ge9())
x=new D.B("mover",y,z.b,z,[U.ae])
x.b=!0
z.aa(x)}x=z.c
if(!$.l.$2(x,b)){y=z.c
z.c=b
x=new D.B("fov",y,b,z,[P.w])
x.b=!0
z.aa(x)}x=z.d
if(!$.l.$2(x,d)){y=z.d
z.d=d
x=new D.B("near",y,d,z,[P.w])
x.b=!0
z.aa(x)}x=z.e
if(!$.l.$2(x,a)){y=z.e
z.e=a
x=new D.B("far",y,a,z,[P.w])
x.b=!0
z.aa(x)}return z}}},cg:{"^":"a;"}}],["","",,V,{"^":"",
l_:function(a){P.iu(C.w,new V.l0(a))},
l0:{"^":"t:37;a",
$1:function(a){H.j(a,"$isb1")
P.db(C.c.dN(this.a.gh2(),2)+" fps")}},
i3:{"^":"a;0a,0b",
e1:function(a,b){var z,y,x,w,v,u,t
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
t=W.ac
W.Z(z,"scroll",H.k(new V.i6(x),{func:1,ret:-1,args:[t]}),!1,t)},
cZ:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isd",[P.m],"$asd")
this.ff()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hH(C.a.h6(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fe(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kb(C.H,s,C.q,!1)
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
ff:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iv()
y=P.m
z.a=new H.aY(0,0,[y,V.e4])
z.b=new H.aY(0,0,[y,V.ef])
z.c=z.G(0,"Start")
y=z.G(0,"Start").B(0,"Bold")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Bold").B(0,"Bold")
x=new V.bo()
w=[V.bT]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("*"))
C.a.h(x.a,y)
y=z.G(0,"Bold").B(0,"BoldEnd")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").B(0,"Italic")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Italic").B(0,"Italic")
x=new V.bo()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("_"))
C.a.h(x.a,y)
y=z.G(0,"Italic").B(0,"ItalicEnd")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").B(0,"Code")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Code").B(0,"Code")
x=new V.bo()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("`"))
C.a.h(x.a,y)
y=z.G(0,"Code").B(0,"CodeEnd")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").B(0,"LinkHead")
x=V.a1(new H.a_("["))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"LinkHead").B(0,"LinkTail")
x=V.a1(new H.a_("|"))
C.a.h(y.a,x)
x=z.G(0,"LinkHead").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkHead").B(0,"LinkHead")
y=new V.bo()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
x=z.G(0,"LinkTail").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkTail").B(0,"LinkTail")
y=new V.bo()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
C.a.h(z.G(0,"Start").B(0,"Other").a,new V.fl())
x=z.G(0,"Other").B(0,"Other")
y=new V.bo()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.aY("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.aY("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.aY("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.aY("Link")
x=z.G(0,"Other")
x.d=x.a.aY("Other")
this.b=z},
n:{
i4:function(a,b){var z=new V.i3()
z.e1(a,!0)
return z}}},
i6:{"^":"t:38;a",
$1:function(a){P.ec(C.l,new V.i5(this.a))}},
i5:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.c.R(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}}}],["","",,S,{"^":"",
fa:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=V.i4("Test 036",!0)
y=W.dk(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.m]
z.cZ(H.b(["Test of the texture layout cover technique."],x))
z.cZ(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.o(P.n("Failed to find an element with the identifier, testCanvas."))
v=E.is(w,!0,!0,!0,!1)
u=new U.dC()
z=U.ae
u.b1(z)
u.aw(u.gez(),u.geW())
u.e=null
u.f=V.aN()
u.r=0
x=v.r
t=new U.iN()
s=U.cB()
s.sco(0,!0)
s.scd(6.283185307179586)
s.scf(0)
s.sa2(0,0)
s.sce(100)
s.sM(0)
s.sc0(0.5)
t.b=s
r=t.gaB()
s.gp().h(0,r)
s=U.cB()
s.sco(0,!0)
s.scd(6.283185307179586)
s.scf(0)
s.sa2(0,0)
s.sce(100)
s.sM(0)
s.sc0(0.5)
t.c=s
s.gp().h(0,r)
t.d=null
t.e=!1
t.f=!1
t.r=!1
t.x=2.5
t.y=2.5
t.z=2
t.Q=4
t.cx=!1
t.ch=!1
t.cy=0
t.db=0
t.dx=null
t.dy=0
t.fr=null
t.fx=null
q=new X.ax(!1,!1,!1)
p=t.d
t.d=q
s=[X.ax]
r=new D.B("modifiers",p,q,t,s)
r.b=!0
t.J(r)
r=t.f
if(r!==!1){t.f=!1
r=new D.B("invertX",r,!1,t,[P.a2])
r.b=!0
t.J(r)}r=t.r
if(r!==!1){t.r=!1
r=new D.B("invertY",r,!1,t,[P.a2])
r.b=!0
t.J(r)}t.aN(x)
u.h(0,t)
x=v.r
t=new U.iM()
r=U.cB()
r.sco(0,!0)
r.scd(6.283185307179586)
r.scf(0)
r.sa2(0,0)
r.sce(100)
r.sM(0)
r.sc0(0.2)
t.b=r
r.gp().h(0,t.gaB())
t.c=null
t.d=!1
t.e=2.5
t.f=2
t.r=4
t.y=!1
t.x=!1
t.z=0
t.Q=null
t.ch=0
t.cx=null
t.cy=null
q=new X.ax(!0,!1,!1)
p=t.c
t.c=q
r=new D.B("modifiers",p,q,t,s)
r.b=!0
t.J(r)
t.aN(x)
u.h(0,t)
x=v.r
t=new U.iO()
t.c=0.01
t.d=0
t.e=0
q=new X.ax(!1,!1,!1)
t.b=q
s=new D.B("modifiers",null,q,t,s)
s.b=!0
t.J(s)
t.aN(x)
u.h(0,t)
u.h(0,U.dp(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=X.dW(2000,1.0471975511965976,u,0.1,null)
n=new X.fo()
n.a=512
n.b=512
n.c=512
n.d=512
n.e=!0
n.f=!0
n.r=1
n.x=1
n.ch=T.e9(0,null)
n.cx=new V.a3(0,0,0,1)
n.cy=!0
n.db=2000
n.dx=!0
n.dy=V.aP(0,0,1,1)
n.sa6(0,800)
n.sa1(0,600)
x=new V.a3(0,0,0,0)
if(!n.cx.q(0,x)){p=n.cx
n.cx=x
x=new D.B("color",p,x,n,[V.a3])
x.b=!0
n.aa(x)}m=E.dA(null,!0,null,"",null,null)
m.sbt(0,F.l3(30,1,15,0.5))
l=new O.hi()
x=O.c4(V.ah)
l.e=x
x.aw(l.geB(),l.geC())
x=new O.aZ(l,"emission")
x.c=C.b
x.f=new V.X(0,0,0)
l.f=x
x=new O.aZ(l,"ambient")
x.c=C.b
x.f=new V.X(0,0,0)
l.r=x
x=new O.aZ(l,"diffuse")
x.c=C.b
x.f=new V.X(0,0,0)
l.x=x
x=new O.aZ(l,"invDiffuse")
x.c=C.b
x.f=new V.X(0,0,0)
l.y=x
x=new O.ho(l,"specular")
x.c=C.b
x.f=new V.X(0,0,0)
x.ch=100
l.z=x
x=new O.hl(l,"bump")
x.c=C.b
l.Q=x
l.ch=null
x=new O.aZ(l,"reflect")
x.c=C.b
x.f=new V.X(0,0,0)
l.cx=x
x=new O.hn(l,"refract")
x.c=C.b
x.f=new V.X(0,0,0)
x.ch=1
l.cy=x
x=new O.hk(l,"alpha")
x.c=C.b
x.f=1
l.db=x
x=new D.h4()
x.b1(D.T)
x.e=H.b([],[D.c6])
x.f=H.b([],[D.hC])
x.r=H.b([],[D.i8])
x.x=H.b([],[D.io])
x.y=H.b([],[D.ip])
x.z=H.b([],[D.iq])
x.Q=null
x.ch=null
x.ct(x.geA(),x.geV(),x.geX())
l.dx=x
t=x.Q
if(t==null){t=D.E()
x.Q=t
x=t}else x=t
x.h(0,l.gf7())
x=l.dx
t=x.ch
if(t==null){t=D.E()
x.ch=t
x=t}else x=t
x.h(0,l.gal())
l.dy=null
x=l.dx
t=U.dp(V.dS(new V.U(0,0,0),new V.G(0,1,0),new V.G(0,-1,-1)))
k=new V.X(1,1,1)
s=new D.c6()
s.c=new V.X(1,1,1)
s.a=new V.G(0,0,1)
p=s.b
s.b=t
t.gp().h(0,s.ge6())
z=new D.B("mover",p,s.b,s,[z])
z.b=!0
s.ay(z)
if(!s.c.q(0,k)){p=s.c
s.c=k
z=new D.B("color",p,k,s,[V.X])
z.b=!0
s.ay(z)}x.h(0,s)
z=l.r
z.saj(0,new V.X(0,0,1))
z=l.x
z.saj(0,new V.X(0,1,0))
z=l.z
z.saj(0,new V.X(1,0,0))
z=l.z
if(z.c===C.b){z.c=C.f
z.bw()
z.bO(100)
x=z.a
x.a=null
x.O(null)}z.bO(10)
j=new M.fN()
z=O.c4(E.aC)
j.d=z
z.aw(j.geE(),j.geF())
j.e=null
j.f=null
j.r=null
j.x=null
j.sd2(null)
j.saW(0,null)
j.saX(null)
j.sd2(o)
j.saX(l)
j.saW(0,n)
j.d.h(0,m)
i=new V.a3(0,0,0,1)
h=new O.ii()
h.a=i
z=new D.B("backColor",null,i,h,[V.a3])
z.b=!0
h.O(z)
h.b=null
z=O.c4(O.b0)
h.c=z
z.aw(h.geJ(),h.geK())
h.d=0
h.e=null
for(z=[P.a2],g=0;g<3;++g){f=g*0.3333333333333333
for(e=0;e<3;++e){x=h.c
t=n.ch
s=V.aP(f,e*0.3333333333333333,0.3333333333333333,0.3333333333333333)
r=new O.b0()
r.sae(t)
r.sd5(null)
r.scv(0,null)
r.sd8(0,s)
if(r.e!==!1){r.e=!1
t=new D.B("flip",!0,!1,r,z)
t.b=!0
s=r.f
if(!(s==null))s.u(t)}r.f=null
x.toString
t=H.au(x,"ab",0)
H.C(r,t)
s=[t]
if(x.bL(H.b([r],s))){d=x.a
c=d.length
C.a.h(d,r)
t=H.v(H.b([r],s),"$isc",[t],"$asc")
x=x.c
if(x!=null)x.$2(c,t)}}}z=h.c
x=O.ik(null,null,!1,null,null)
x.sae(n.ch)
z.h(0,x)
b=X.cC(!0,!0,!1,new V.a3(0,0,0,1),2000,null,0)
a=new M.fA()
a0=new X.fW()
p=a.a
a.a=a0
a0.gp().h(0,a.gS())
z=new D.B("camera",p,a.a,a,[X.c3])
z.b=!0
a.V(z)
a.saW(0,null)
a.saX(null)
z=E.dA(null,!0,null,"",null,null)
a1=F.e2()
x=a1.a
t=new V.G(-1,-1,1)
t=t.t(0,Math.sqrt(t.v(t)))
a2=x.b9(new V.bq(1,2,4,6),new V.a3(1,0,0,1),new V.U(-1,-1,0),new V.O(0,1),t,null)
x=a1.a
t=new V.G(1,-1,1)
t=t.t(0,Math.sqrt(t.v(t)))
a3=x.b9(new V.bq(0,3,4,6),new V.a3(0,0,1,1),new V.U(1,-1,0),new V.O(1,1),t,null)
x=a1.a
t=new V.G(1,1,1)
t=t.t(0,Math.sqrt(t.v(t)))
a4=x.b9(new V.bq(0,2,5,6),new V.a3(0,1,0,1),new V.U(1,1,0),new V.O(1,0),t,null)
x=a1.a
t=new V.G(-1,1,1)
t=t.t(0,Math.sqrt(t.v(t)))
a5=x.b9(new V.bq(0,2,4,7),new V.a3(1,1,0,1),new V.U(-1,1,0),new V.O(0,0),t,null)
a1.d.fM(H.b([a2,a3,a4,a5],[F.as]))
a1.aq()
z.sbt(0,a1)
a.d=z
a.e=null
a.saX(h)
a.saW(0,b)
z=M.az
x=H.b([j,a],[z])
t=new M.fy()
t.b1(z)
t.e=!1
t.f=null
t.aw(t.geY(),t.geZ())
t.bR(0,x)
z=v.d
if(z!==t){if(z!=null)z.gp().H(0,v.gcC())
v.d=t
t.gp().h(0,v.gcC())
v.e4()}V.l_(v)}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.dF.prototype}if(typeof a=="string")return J.ca.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.h_.prototype
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cr(a)}
J.c_=function(a){if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cr(a)}
J.d5=function(a){if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cr(a)}
J.kH=function(a){if(typeof a=="number")return J.bQ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cj.prototype
return a}
J.kI=function(a){if(typeof a=="number")return J.bQ.prototype
if(typeof a=="string")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cj.prototype
return a}
J.cq=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cr(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).q(a,b)}
J.fh=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kH(a).a9(a,b)}
J.dc=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kI(a).j(a,b)}
J.fi=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kR(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c_(a).k(a,b)}
J.fj=function(a,b,c,d){return J.cq(a).cY(a,b,c,d)}
J.cu=function(a,b,c){return J.c_(a).fT(a,b,c)}
J.dd=function(a,b){return J.d5(a).D(a,b)}
J.fk=function(a,b){return J.d5(a).K(a,b)}
J.aV=function(a){return J.L(a).gT(a)}
J.bK=function(a){return J.d5(a).gW(a)}
J.bd=function(a){return J.c_(a).gl(a)}
J.am=function(a){return J.L(a).i(a)}
I.d8=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cz.prototype
C.x=J.q.prototype
C.a=J.aX.prototype
C.y=J.dF.prototype
C.h=J.dG.prototype
C.z=J.dH.prototype
C.c=J.bQ.prototype
C.i=J.ca.prototype
C.G=J.bR.prototype
C.I=H.hv.prototype
C.J=W.hw.prototype
C.p=J.hB.prototype
C.K=P.cN.prototype
C.m=J.cj.prototype
C.r=W.bC.prototype
C.t=W.j3.prototype
C.u=new P.hz()
C.v=new P.iQ()
C.j=new P.jQ()
C.b=new A.c5(0,"ColorSourceType.None")
C.f=new A.c5(1,"ColorSourceType.Solid")
C.d=new A.c5(2,"ColorSourceType.Texture2D")
C.e=new A.c5(3,"ColorSourceType.TextureCube")
C.l=new P.aW(0)
C.w=new P.aW(5e6)
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
C.n=function(hooks) { return hooks; }

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
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=H.b(I.d8([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.q=new P.iP(!1)
$.av=0
$.be=null
$.dg=null
$.cZ=!1
$.f7=null
$.f1=null
$.fd=null
$.cp=null
$.cs=null
$.d6=null
$.b7=null
$.bE=null
$.bF=null
$.d_=!1
$.P=C.j
$.dx=null
$.dw=null
$.dv=null
$.du=null
$.l=V.hp()
$.dX=null
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
I.$lazy(y,x,w)}})(["dt","$get$dt",function(){return H.f6("_$dart_dartClosure")},"cG","$get$cG",function(){return H.f6("_$dart_js")},"ei","$get$ei",function(){return H.aA(H.ci({
toString:function(){return"$receiver$"}}))},"ej","$get$ej",function(){return H.aA(H.ci({$method$:null,
toString:function(){return"$receiver$"}}))},"ek","$get$ek",function(){return H.aA(H.ci(null))},"el","$get$el",function(){return H.aA(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ep","$get$ep",function(){return H.aA(H.ci(void 0))},"eq","$get$eq",function(){return H.aA(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"en","$get$en",function(){return H.aA(H.eo(null))},"em","$get$em",function(){return H.aA(function(){try{null.$method$}catch(z){return z.message}}())},"es","$get$es",function(){return H.aA(H.eo(void 0))},"er","$get$er",function(){return H.aA(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cW","$get$cW",function(){return P.j4()},"bG","$get$bG",function(){return[]},"eW","$get$eW",function(){return P.hP("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dr","$get$dr",function(){return{}},"eE","$get$eE",function(){return Z.ak(0)},"eC","$get$eC",function(){return Z.ak(511)},"at","$get$at",function(){return Z.ak(1)},"aG","$get$aG",function(){return Z.ak(2)},"aF","$get$aF",function(){return Z.ak(4)},"aH","$get$aH",function(){return Z.ak(8)},"aI","$get$aI",function(){return Z.ak(16)},"bA","$get$bA",function(){return Z.ak(32)},"bB","$get$bB",function(){return Z.ak(64)},"eD","$get$eD",function(){return Z.ak(96)},"b4","$get$b4",function(){return Z.ak(128)},"aE","$get$aE",function(){return Z.ak(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.ap]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[P.A,[P.c,E.aC]]},{func:1,ret:P.I,args:[F.ag]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[D.u]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.A,[P.c,D.T]]},{func:1,ret:-1,args:[W.bl]},{func:1,ret:P.m,args:[P.A]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.A,[P.c,U.ae]]},{func:1,ret:-1,args:[P.A,[P.c,M.az]]},{func:1,ret:-1,args:[P.A,[P.c,V.ah]]},{func:1,ret:-1,args:[P.A,[P.c,O.b0]]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.a2,args:[W.J]},{func:1,ret:W.a0,args:[W.J]},{func:1,args:[P.m]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.a2,args:[P.w,P.w]},{func:1,ret:-1,args:[P.a],opt:[P.aq]},{func:1,args:[,P.m]},{func:1,ret:V.U,args:[P.w]},{func:1,ret:P.I,args:[F.as,P.w,P.w]},{func:1,ret:P.a2,args:[[P.c,D.T]]},{func:1,ret:P.I,args:[P.b1]},{func:1,ret:P.I,args:[W.ac]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[P.W]}]
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
if(x==y)H.l2(d||a)
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
Isolate.d8=a.d8
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
if(typeof dartMainRunner==="function")dartMainRunner(S.fa,[])
else S.fa([])})})()
//# sourceMappingURL=test.dart.js.map
