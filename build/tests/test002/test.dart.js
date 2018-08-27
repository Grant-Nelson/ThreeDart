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
var d=supportsDirectProtoAccess&&b2!="b"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.du"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.du"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.du(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dw=function(){}
var dart=[["","",,H,{"^":"",pf:{"^":"b;a"}}],["","",,J,{"^":"",
P:function(a){return void 0},
dB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cG:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dz==null){H.n9()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c5("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cX()]
if(v!=null)return v
v=H.nf(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.$get$cX(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
q:{"^":"b;",
D:function(a,b){return a===b},
gW:function(a){return H.bH(a)},
i:["dz",function(a){return"Instance of '"+H.ba(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
ix:{"^":"q;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isO:1},
eh:{"^":"q;",
D:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isD:1},
cY:{"^":"q;",
gW:function(a){return 0},
i:["dA",function(a){return String(a)}]},
j4:{"^":"cY;"},
c6:{"^":"cY;"},
c_:{"^":"cY;",
i:function(a){var z=a[$.$get$e0()]
if(z==null)return this.dA(a)
return"JavaScript function for "+H.k(J.ad(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscU:1},
b6:{"^":"q;$ti",
h:function(a,b){H.x(b,H.w(a,0))
if(!!a.fixed$length)H.I(P.y("add"))
a.push(b)},
fY:function(a,b){if(!!a.fixed$length)H.I(P.y("removeAt"))
if(b<0||b>=a.length)throw H.a(P.c2(b,null,null))
return a.splice(b,1)[0]},
N:function(a,b){var z
if(!!a.fixed$length)H.I(P.y("remove"))
for(z=0;z<a.length;++z)if(J.E(a[z],b)){a.splice(z,1)
return!0}return!1},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.w(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b2(a))}},
G:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.k(z,y,H.k(a[y]))
return z.join(b)},
fD:function(a){return this.G(a,"")},
fu:function(a,b,c,d){var z,y,x
H.x(b,d)
H.d(c,{func:1,ret:d,args:[d,H.w(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b2(a))}return y},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bn:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a4(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a4(c,b,a.length,"end",null))
if(b===c)return H.i([],[H.w(a,0)])
return H.i(a.slice(b,c),[H.w(a,0)])},
gaw:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.iv())},
av:function(a,b,c,d){var z
H.x(d,H.w(a,0))
if(!!a.immutable$list)H.I(P.y("fill range"))
P.aN(b,c,a.length,null,null,null)
for(z=b;z.K(0,c);z=z.t(0,1))a[z]=d},
i:function(a){return P.cV(a,"[","]")},
ga4:function(a){return new J.aK(a,a.length,0,[H.w(a,0)])},
gW:function(a){return H.bH(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.I(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cf(b,"newLength",null))
if(b<0)throw H.a(P.a4(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aI(a,b))
if(b>=a.length||b<0)throw H.a(H.aI(a,b))
return a[b]},
k:function(a,b,c){H.B(b)
H.x(c,H.w(a,0))
if(!!a.immutable$list)H.I(P.y("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aI(a,b))
if(b>=a.length||b<0)throw H.a(H.aI(a,b))
a[b]=c},
$ism:1,
$ish:1,
u:{
iw:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cf(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a4(a,0,4294967295,"length",null))
return J.ef(new Array(a),b)},
ef:function(a,b){return J.bA(H.i(a,[b]))},
bA:function(a){H.bU(a)
a.fixed$length=Array
return a},
pd:[function(a,b){return J.hd(H.h2(a,"$isam"),H.h2(b,"$isam"))},"$2","mH",8,0,54]}},
pe:{"^":"b6;$ti"},
aK:{"^":"b;a,b,c,0d,$ti",
gT:function(a){return this.d},
L:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.H(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bY:{"^":"q;",
aH:function(a,b){var z
H.h1(b)
if(typeof b!=="number")throw H.a(H.aa(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbf(b)
if(this.gbf(a)===z)return 0
if(this.gbf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbf:function(a){return a===0?1/a<0:a<0},
be:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.y(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.y(""+a+".round()"))},
dk:function(a,b){var z
if(b>20)throw H.a(P.a4(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbf(a))return"-"+z
return z},
b0:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a4(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a0(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.I(P.y("Unexpected toString result: "+z))
x=J.au(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.m("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
m:function(a,b){if(typeof b!=="number")throw H.a(H.aa(b))
return a*b},
b3:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dC:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cJ(a,b)},
al:function(a,b){return(a|0)===a?a/b|0:this.cJ(a,b)},
cJ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.y("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aF:function(a,b){var z
if(a>0)z=this.cH(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eS:function(a,b){if(b<0)throw H.a(H.aa(b))
return this.cH(a,b)},
cH:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.a(H.aa(b))
return a<b},
a8:function(a,b){if(typeof b!=="number")throw H.a(H.aa(b))
return a>b},
$isam:1,
$asam:function(){return[P.W]},
$isr:1,
$isW:1},
eg:{"^":"bY;",$isl:1},
iy:{"^":"bY;"},
bZ:{"^":"q;",
a0:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aI(a,b))
if(b<0)throw H.a(H.aI(a,b))
if(b>=a.length)H.I(H.aI(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.a(H.aI(a,b))
return a.charCodeAt(b)},
t:function(a,b){H.N(b)
if(typeof b!=="string")throw H.a(P.cf(b,null,null))
return a+b},
aO:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.I(H.aa(b))
c=P.aN(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.I(H.aa(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ab:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.I(H.aa(c))
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aa:function(a,b){return this.ab(a,b,0)},
A:function(a,b,c){H.B(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.I(H.aa(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.a(P.c2(b,null,null))
if(b>c)throw H.a(P.c2(b,null,null))
if(c>a.length)throw H.a(P.c2(c,null,null))
return a.substring(b,c)},
ax:function(a,b){return this.A(a,b,null)},
m:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fO:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.m(c,z)+a},
ae:function(a,b){return this.fO(a,b," ")},
fP:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.m(c,z)},
d3:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
d2:function(a,b){return this.d3(a,b,0)},
fg:function(a,b,c){if(c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
return H.h5(a,b,c)},
aH:function(a,b){var z
H.N(b)
if(typeof b!=="string")throw H.a(H.aa(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isam:1,
$asam:function(){return[P.j]},
$isev:1,
$isj:1}}],["","",,H,{"^":"",
cH:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
iv:function(){return new P.jK("No element")},
jJ:function(a,b,c){var z
H.v(a,"$ish",[c],"$ash")
H.d(b,{func:1,ret:P.l,args:[c,c]})
z=J.aq(a)
if(typeof z!=="number")return z.I()
H.c3(a,0,z-1,b,c)},
c3:function(a,b,c,d,e){H.v(a,"$ish",[e],"$ash")
H.d(d,{func:1,ret:P.l,args:[e,e]})
if(c-b<=32)H.jI(a,b,c,d,e)
else H.jH(a,b,c,d,e)},
jI:function(a,b,c,d,e){var z,y,x,w,v
H.v(a,"$ish",[e],"$ash")
H.d(d,{func:1,ret:P.l,args:[e,e]})
for(z=b+1,y=J.au(a);z<=c;++z){x=y.j(a,z)
w=z
while(!0){if(!(w>b&&J.aA(d.$2(y.j(a,w-1),x),0)))break
v=w-1
y.k(a,w,y.j(a,v))
w=v}y.k(a,w,x)}},
jH:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.v(a,"$ish",[a2],"$ash")
H.d(a1,{func:1,ret:P.l,args:[a2,a2]})
z=C.c.al(a0-b+1,6)
y=b+z
x=a0-z
w=C.c.al(b+a0,2)
v=w-z
u=w+z
t=J.au(a)
s=t.j(a,y)
r=t.j(a,v)
q=t.j(a,w)
p=t.j(a,u)
o=t.j(a,x)
if(J.aA(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aA(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aA(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aA(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aA(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aA(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aA(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aA(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aA(a1.$2(p,o),0)){n=o
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
if(typeof i!=="number")return i.K()
if(i<0){if(k!==m){t.k(a,k,t.j(a,m))
t.k(a,m,j)}++m}else for(;!0;){i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.a8()
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
if(typeof e!=="number")return e.K()
if(e<0){if(k!==m){t.k(a,k,t.j(a,m))
t.k(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.a8()
if(d>0)for(;!0;){i=a1.$2(t.j(a,l),p)
if(typeof i!=="number")return i.a8()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.K()
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
H.c3(a,b,m-2,a1,a2)
H.c3(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.E(a1.$2(t.j(a,m),r),0);)++m
for(;J.E(a1.$2(t.j(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.j(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.k(a,k,t.j(a,m))
t.k(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.j(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.j(a,l),r)
if(typeof i!=="number")return i.K()
h=l-1
if(i<0){t.k(a,k,t.j(a,m))
g=m+1
t.k(a,m,t.j(a,l))
t.k(a,l,j)
m=g}else{t.k(a,k,t.j(a,l))
t.k(a,l,j)}l=h
break}}H.c3(a,m,l,a1,a2)}else H.c3(a,m,l,a1,a2)},
a7:{"^":"ki;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a0(this.a,b)},
$ascu:function(){return[P.l]},
$asu:function(){return[P.l]},
$asm:function(){return[P.l]},
$ash:function(){return[P.l]}},
hK:{"^":"m;"},
eo:{"^":"b;a,b,c,0d,$ti",
gT:function(a){return this.d},
L:function(){var z,y,x,w
z=this.a
y=J.au(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b2(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.M(z,w);++this.c
return!0}},
iS:{"^":"m;a,b,$ti",
ga4:function(a){return new H.iT(J.bv(this.a),this.b,this.$ti)},
gl:function(a){return J.aq(this.a)},
M:function(a,b){return this.b.$1(J.cM(this.a,b))},
$asm:function(a,b){return[b]}},
iT:{"^":"cW;0a,b,c,$ti",
L:function(){var z=this.b
if(z.L()){this.a=this.c.$1(z.gT(z))
return!0}this.a=null
return!1},
gT:function(a){return this.a},
$ascW:function(a,b){return[b]}},
kP:{"^":"m;a,b,$ti",
ga4:function(a){return new H.kQ(J.bv(this.a),this.b,this.$ti)}},
kQ:{"^":"cW;a,b,$ti",
L:function(){var z,y
for(z=this.a,y=this.b;z.L();)if(y.$1(z.gT(z)))return!0
return!1},
gT:function(a){var z=this.a
return z.gT(z)}},
cj:{"^":"b;$ti"},
cu:{"^":"b;$ti",
k:function(a,b,c){H.B(b)
H.x(c,H.az(this,"cu",0))
throw H.a(P.y("Cannot modify an unmodifiable list"))},
av:function(a,b,c,d){H.x(d,H.az(this,"cu",0))
throw H.a(P.y("Cannot modify an unmodifiable list"))}},
ki:{"^":"cl+cu;"}}],["","",,H,{"^":"",
hz:function(){throw H.a(P.y("Cannot modify unmodifiable Map"))},
n2:function(a){return init.types[H.B(a)]},
fW:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.P(a).$isF},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ad(a)
if(typeof z!=="string")throw H.a(H.aa(a))
return z},
bH:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jd:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.N(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a4(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.J(w,u)|32)>x)return}return parseInt(a,b)},
ba:function(a){var z,y,x,w,v,u,t,s,r
z=J.P(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.C||!!J.P(a).$isc6){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.J(w,0)===36)w=C.b.ax(w,1)
r=H.dA(H.bU(H.aZ(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
j5:function(){if(!!self.location)return self.location.href
return},
ex:function(a){var z,y,x,w,v
H.bU(a)
z=J.aq(a)
if(typeof z!=="number")return z.dt()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
je:function(a){var z,y,x,w
z=H.i([],[P.l])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.H)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.aa(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.c.aF(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.aa(w))}return H.ex(z)},
ey:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.aa(x))
if(x<0)throw H.a(H.aa(x))
if(x>65535)return H.je(a)}return H.ex(a)},
jf:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.dt()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
co:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.aF(z,10))>>>0,56320|z&1023)}}throw H.a(P.a4(a,0,1114111,null,null))},
al:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jc:function(a){return a.b?H.al(a).getUTCFullYear()+0:H.al(a).getFullYear()+0},
ja:function(a){return a.b?H.al(a).getUTCMonth()+1:H.al(a).getMonth()+1},
j6:function(a){return a.b?H.al(a).getUTCDate()+0:H.al(a).getDate()+0},
j7:function(a){return a.b?H.al(a).getUTCHours()+0:H.al(a).getHours()+0},
j9:function(a){return a.b?H.al(a).getUTCMinutes()+0:H.al(a).getMinutes()+0},
jb:function(a){return a.b?H.al(a).getUTCSeconds()+0:H.al(a).getSeconds()+0},
j8:function(a){return a.b?H.al(a).getUTCMilliseconds()+0:H.al(a).getMilliseconds()+0},
n:function(a){throw H.a(H.aa(a))},
e:function(a,b){if(a==null)J.aq(a)
throw H.a(H.aI(a,b))},
aI:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.B(J.aq(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.c2(b,"index",null)},
mY:function(a,b,c){if(a>c)return new P.cp(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cp(a,c,!0,b,"end","Invalid value")
return new P.aJ(!0,b,"end",null)},
aa:function(a){return new P.aJ(!0,a,null,null)},
a:function(a){var z
if(a==null)a=new P.eu()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h7})
z.name=""}else z.toString=H.h7
return z},
h7:function(){return J.ad(this.dartException)},
I:function(a){throw H.a(a)},
H:function(a){throw H.a(P.b2(a))},
aw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.oj(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.aF(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cZ(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.et(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eR()
u=$.$get$eS()
t=$.$get$eT()
s=$.$get$eU()
r=$.$get$eY()
q=$.$get$eZ()
p=$.$get$eW()
$.$get$eV()
o=$.$get$f0()
n=$.$get$f_()
m=v.ad(y)
if(m!=null)return z.$1(H.cZ(H.N(y),m))
else{m=u.ad(y)
if(m!=null){m.method="call"
return z.$1(H.cZ(H.N(y),m))}else{m=t.ad(y)
if(m==null){m=s.ad(y)
if(m==null){m=r.ad(y)
if(m==null){m=q.ad(y)
if(m==null){m=p.ad(y)
if(m==null){m=s.ad(y)
if(m==null){m=o.ad(y)
if(m==null){m=n.ad(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.et(H.N(y),m))}}return z.$1(new H.kh(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eF()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eF()
return a},
bt:function(a){var z
if(a==null)return new H.fp(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fp(a)},
n1:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.k(0,a[y],a[x])}return b},
nb:function(a,b,c,d,e,f){H.f(a,"$iscU")
switch(H.B(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.T("Unsupported number of arguments for wrapped closure"))},
bs:function(a,b){var z
H.B(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nb)
a.$identity=z
return z},
hv:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.P(d).$ish){z.$reflectionInfo=d
x=H.jl(z).r}else x=d
w=e?Object.create(new H.jL().constructor.prototype):Object.create(new H.cO(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aB
if(typeof u!=="number")return u.t()
$.aB=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dW(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.n2,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dO:H.cP
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dW(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hs:function(a,b,c,d){var z=H.cP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dW:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hu(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hs(y,!w,z,b)
if(y===0){w=$.aB
if(typeof w!=="number")return w.t()
$.aB=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.cg("self")
$.bw=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aB
if(typeof w!=="number")return w.t()
$.aB=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.cg("self")
$.bw=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
ht:function(a,b,c,d){var z,y
z=H.cP
y=H.dO
switch(b?-1:a){case 0:throw H.a(H.jv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hu:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.cg("self")
$.bw=z}y=$.dN
if(y==null){y=H.cg("receiver")
$.dN=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ht(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aB
if(typeof y!=="number")return y.t()
$.aB=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aB
if(typeof y!=="number")return y.t()
$.aB=y+1
return new Function(z+y+"}")()},
du:function(a,b,c,d,e,f,g){var z,y
z=J.bA(H.bU(b))
H.B(c)
y=!!J.P(d).$ish?J.bA(d):d
return H.hv(a,z,c,y,!!e,f,g)},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ay(a,"String"))},
n_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"double"))},
h1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"num"))},
fM:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ay(a,"bool"))},
B:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ay(a,"int"))},
dD:function(a,b){throw H.a(H.ay(a,H.N(b).substring(3)))},
oa:function(a,b){var z=J.au(b)
throw H.a(H.hp(a,z.A(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.dD(a,b)},
ai:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else z=!0
if(z)return a
H.oa(a,b)},
h2:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.P(a)[b])return a
H.dD(a,b)},
bU:function(a){if(a==null)return a
if(!!J.P(a).$ish)return a
throw H.a(H.ay(a,"List"))},
h_:function(a,b){if(a==null)return a
if(!!J.P(a).$ish)return a
if(J.P(a)[b])return a
H.dD(a,b)},
fP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.B(z)]
else return a.$S()}return},
c8:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fP(J.P(a))
if(z==null)return!1
y=H.fV(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.dq)return a
$.dq=!0
try{if(H.c8(a,b))return a
z=H.cb(b)
y=H.ay(a,z)
throw H.a(y)}finally{$.dq=!1}},
dx:function(a,b){if(a!=null&&!H.dt(a,b))H.I(H.ay(a,H.cb(b)))
return a},
fH:function(a){var z
if(a instanceof H.c){z=H.fP(J.P(a))
if(z!=null)return H.cb(z)
return"Closure"}return H.ba(a)},
og:function(a){throw H.a(new P.hC(H.N(a)))},
fS:function(a){return init.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
aZ:function(a){if(a==null)return
return a.$ti},
ql:function(a,b,c){return H.bu(a["$as"+H.k(c)],H.aZ(b))},
aY:function(a,b,c,d){var z
H.N(c)
H.B(d)
z=H.bu(a["$as"+H.k(c)],H.aZ(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.N(b)
H.B(c)
z=H.bu(a["$as"+H.k(b)],H.aZ(a))
return z==null?null:z[c]},
w:function(a,b){var z
H.B(b)
z=H.aZ(a)
return z==null?null:z[b]},
cb:function(a){var z=H.b_(a,null)
return z},
b_:function(a,b){var z,y
H.v(b,"$ish",[P.j],"$ash")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dA(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.B(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.k(b[y])}if('func' in a)return H.mG(a,b)
if('futureOr' in a)return"FutureOr<"+H.b_("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.v(b,"$ish",z,"$ash")
if("bounds" in a){y=a.bounds
if(b==null){b=H.i([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.t(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b_(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b_(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b_(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b_(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.n0(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.N(z[l])
n=n+m+H.b_(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dA:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$ish",[P.j],"$ash")
if(a==null)return""
z=new P.aF("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b_(u,c)}v="<"+z.i(0)+">"
return v},
bu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
br:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aZ(a)
y=J.P(a)
if(y[b]==null)return!1
return H.fK(H.bu(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.N(b)
H.bU(c)
H.N(d)
if(a==null)return a
z=H.br(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dA(c,0,null)
throw H.a(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fK:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.av(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.av(a[y],b,c[y],d))return!1
return!0},
qj:function(a,b,c){return a.apply(b,H.bu(J.P(b)["$as"+H.k(c)],H.aZ(b)))},
fX:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="D"||a===-1||a===-2||H.fX(z)}return!1},
dt:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="D"||b===-1||b===-2||H.fX(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dt(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c8(a,b)}y=J.P(a).constructor
x=H.aZ(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.av(y,null,b,null)
return z},
x:function(a,b){if(a!=null&&!H.dt(a,b))throw H.a(H.ay(a,H.cb(b)))
return a},
av:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.av(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.fV(a,b,c,d)
if('func' in a)return c.builtin$cls==="cU"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.av("type" in a?a.type:null,b,x,d)
else if(H.av(a,b,x,d))return!0
else{if(!('$is'+"by" in y.prototype))return!1
w=y.prototype["$as"+"by"]
v=H.bu(w,z?a.slice(1):null)
return H.av(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cb(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fK(H.bu(r,z),b,u,d)},
fV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.av(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.av(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.av(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.av(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.o8(m,b,l,d)},
o8:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.av(c[w],d,a[w],b))return!1}return!0},
qk:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
nf:function(a){var z,y,x,w,v,u
z=H.N($.fT.$1(a))
y=$.cE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.N($.fJ.$2(a,z))
if(z!=null){y=$.cE[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cJ(x)
$.cE[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cI[z]=x
return x}if(v==="-"){u=H.cJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h3(a,x)
if(v==="*")throw H.a(P.c5(z))
if(init.leafTags[z]===true){u=H.cJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h3(a,x)},
h3:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dB(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cJ:function(a){return J.dB(a,!1,null,!!a.$isF)},
o7:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cJ(z)
else return J.dB(z,c,null,null)},
n9:function(){if(!0===$.dz)return
$.dz=!0
H.na()},
na:function(){var z,y,x,w,v,u,t,s
$.cE=Object.create(null)
$.cI=Object.create(null)
H.n5()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h4.$1(v)
if(u!=null){t=H.o7(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
n5:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.bq(C.E,H.bq(C.J,H.bq(C.o,H.bq(C.o,H.bq(C.I,H.bq(C.F,H.bq(C.G(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fT=new H.n6(v)
$.fJ=new H.n7(u)
$.h4=new H.n8(t)},
bq:function(a,b){return a(b)||b},
h5:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h6:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hy:{"^":"b;$ti",
i:function(a){return P.d_(this)},
k:function(a,b,c){H.x(b,H.w(this,0))
H.x(c,H.w(this,1))
return H.hz()},
$isK:1},
hA:{"^":"hy;a,b,c,$ti",
gl:function(a){return this.a},
bc:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bc(0,b))return
return this.cz(b)},
cz:function(a){return this.b[H.N(a)]},
v:function(a,b){var z,y,x,w,v
z=H.w(this,1)
H.d(b,{func:1,ret:-1,args:[H.w(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.cz(v),z))}}},
jk:{"^":"b;a,b,c,d,e,f,r,0x",u:{
jl:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bA(z)
y=z[0]
x=z[1]
return new H.jk(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
k0:{"^":"b;a,b,c,d,e,f",
ad:function(a){var z,y,x
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
aG:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.i([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.k0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cr:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eX:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
j1:{"^":"a8;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
u:{
et:function(a,b){return new H.j1(a,b==null?null:b.method)}}},
iB:{"^":"a8;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
u:{
cZ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iB(a,y,z?null:b.receiver)}}},
kh:{"^":"a8;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
oj:{"^":"c:25;a",
$1:function(a){if(!!J.P(a).$isa8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fp:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isax:1},
c:{"^":"b;",
i:function(a){return"Closure '"+H.ba(this).trim()+"'"},
gdr:function(){return this},
$iscU:1,
gdr:function(){return this}},
eK:{"^":"c;"},
jL:{"^":"eK;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cO:{"^":"eK;a,b,c,d",
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cO))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bH(this.a)
else y=typeof z!=="object"?J.b0(z):H.bH(z)
return(y^H.bH(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.ba(z)+"'")},
u:{
cP:function(a){return a.a},
dO:function(a){return a.c},
cg:function(a){var z,y,x,w,v
z=new H.cO("self","target","receiver","name")
y=J.bA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
k1:{"^":"a8;a",
i:function(a){return this.a},
u:{
ay:function(a,b){return new H.k1("TypeError: "+H.k(P.ci(a))+": type '"+H.fH(a)+"' is not a subtype of type '"+b+"'")}}},
ho:{"^":"a8;a",
i:function(a){return this.a},
u:{
hp:function(a,b){return new H.ho("CastError: "+H.k(P.ci(a))+": type '"+H.fH(a)+"' is not a subtype of type '"+b+"'")}}},
ju:{"^":"a8;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
u:{
jv:function(a){return new H.ju(a)}}},
aL:{"^":"iP;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gan:function(a){return new H.iF(this,[H.w(this,0)])},
bc:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cu(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cu(y,b)}else return this.fA(b)},
fA:function(a){var z=this.d
if(z==null)return!1
return this.bW(this.bu(z,this.bV(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b5(w,b)
x=y==null?null:y.b
return x}else return this.fB(b)},
fB:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bu(z,this.bV(a))
x=this.bW(y,a)
if(x<0)return
return y[x].b},
k:function(a,b,c){var z,y
H.x(b,H.w(this,0))
H.x(c,H.w(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.by()
this.b=z}this.cm(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.by()
this.c=y}this.cm(y,b,c)}else this.fC(b,c)},
fC:function(a,b){var z,y,x,w
H.x(a,H.w(this,0))
H.x(b,H.w(this,1))
z=this.d
if(z==null){z=this.by()
this.d=z}y=this.bV(a)
x=this.bu(z,y)
if(x==null)this.bE(z,y,[this.bz(a,b)])
else{w=this.bW(x,a)
if(w>=0)x[w].b=b
else x.push(this.bz(a,b))}},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b2(this))
z=z.c}},
cm:function(a,b,c){var z
H.x(b,H.w(this,0))
H.x(c,H.w(this,1))
z=this.b5(a,b)
if(z==null)this.bE(a,b,this.bz(b,c))
else z.b=c},
ed:function(){this.r=this.r+1&67108863},
bz:function(a,b){var z,y
z=new H.iE(H.x(a,H.w(this,0)),H.x(b,H.w(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ed()
return z},
bV:function(a){return J.b0(a)&0x3ffffff},
bW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].a,b))return y
return-1},
i:function(a){return P.d_(this)},
b5:function(a,b){return a[b]},
bu:function(a,b){return a[b]},
bE:function(a,b,c){a[b]=c},
e1:function(a,b){delete a[b]},
cu:function(a,b){return this.b5(a,b)!=null},
by:function(){var z=Object.create(null)
this.bE(z,"<non-identifier-key>",z)
this.e1(z,"<non-identifier-key>")
return z},
$isel:1},
iE:{"^":"b;a,b,0c,0d"},
iF:{"^":"hK;a,$ti",
gl:function(a){return this.a.a},
ga4:function(a){var z,y
z=this.a
y=new H.iG(z,z.r,this.$ti)
y.c=z.e
return y}},
iG:{"^":"b;a,b,0c,0d,$ti",
gT:function(a){return this.d},
L:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
n6:{"^":"c:25;a",
$1:function(a){return this.a(a)}},
n7:{"^":"c:45;a",
$2:function(a,b){return this.a(a,b)}},
n8:{"^":"c:50;a",
$1:function(a){return this.a(H.N(a))}},
iz:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isev:1,
$isjm:1,
u:{
iA:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a1("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
n0:function(a){return J.ef(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
o9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cz:function(a){return a},
iY:function(a){return new Int8Array(a)},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aI(b,a))},
mA:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mY(a,b,c))
return b},
es:{"^":"q;",$ises:1,"%":"ArrayBuffer"},
d3:{"^":"q;",$isd3:1,"%":"DataView;ArrayBufferView;d2|fj|fk|iZ|fl|fm|aW"},
d2:{"^":"d3;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dw},
iZ:{"^":"fk;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
k:function(a,b,c){H.B(b)
H.n_(c)
H.aH(b,a,a.length)
a[b]=c},
$ascj:function(){return[P.r]},
$asu:function(){return[P.r]},
$ism:1,
$asm:function(){return[P.r]},
$ish:1,
$ash:function(){return[P.r]},
"%":"Float32Array|Float64Array"},
aW:{"^":"fm;",
k:function(a,b,c){H.B(b)
H.B(c)
H.aH(b,a,a.length)
a[b]=c},
$ascj:function(){return[P.l]},
$asu:function(){return[P.l]},
$ism:1,
$asm:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]}},
pq:{"^":"aW;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int16Array"},
pr:{"^":"aW;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ps:{"^":"aW;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int8Array"},
pt:{"^":"aW;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
pu:{"^":"aW;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
pv:{"^":"aW;",
gl:function(a){return a.length},
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d4:{"^":"aW;",
gl:function(a){return a.length},
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
bn:function(a,b,c){return new Uint8Array(a.subarray(b,H.mA(b,c,a.length)))},
$isd4:1,
$isS:1,
"%":";Uint8Array"},
fj:{"^":"d2+u;"},
fk:{"^":"fj+cj;"},
fl:{"^":"d2+u;"},
fm:{"^":"fl+cj;"}}],["","",,P,{"^":"",
kS:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mO()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bs(new P.kU(z),1)).observe(y,{childList:true})
return new P.kT(z,y,x)}else if(self.setImmediate!=null)return P.mP()
return P.mQ()},
q8:[function(a){self.scheduleImmediate(H.bs(new P.kV(H.d(a,{func:1,ret:-1})),0))},"$1","mO",4,0,15],
q9:[function(a){self.setImmediate(H.bs(new P.kW(H.d(a,{func:1,ret:-1})),0))},"$1","mP",4,0,15],
qa:[function(a){P.dc(C.n,H.d(a,{func:1,ret:-1}))},"$1","mQ",4,0,15],
dc:function(a,b){var z
H.d(b,{func:1,ret:-1})
z=C.c.al(a.a,1000)
return P.lU(z<0?0:z,b)},
eM:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.bh]})
z=C.c.al(a.a,1000)
return P.lV(z<0?0:z,b)},
mK:function(a,b){if(H.c8(a,{func:1,args:[P.b,P.ax]}))return b.fX(a,null,P.b,P.ax)
if(H.c8(a,{func:1,args:[P.b]}))return H.d(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cf(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mJ:function(){var z,y
for(;z=$.bp,z!=null;){$.bS=null
y=z.b
$.bp=y
if(y==null)$.bR=null
z.a.$0()}},
qi:[function(){$.dr=!0
try{P.mJ()}finally{$.bS=null
$.dr=!1
if($.bp!=null)$.$get$dk().$1(P.fL())}},"$0","fL",0,0,8],
fG:function(a){var z=new P.fc(H.d(a,{func:1,ret:-1}))
if($.bp==null){$.bR=z
$.bp=z
if(!$.dr)$.$get$dk().$1(P.fL())}else{$.bR.b=z
$.bR=z}},
mN:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.bp
if(z==null){P.fG(a)
$.bS=$.bR
return}y=new P.fc(a)
x=$.bS
if(x==null){y.b=z
$.bS=y
$.bp=y}else{y.b=x.b
x.b=y
$.bS=y
if(y.b==null)$.bR=y}},
ob:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.V
if(C.d===y){P.cB(null,null,C.d,a)
return}y.toString
P.cB(null,null,y,H.d(y.bL(a),z))},
jX:function(a,b){var z,y
z={func:1,ret:-1}
H.d(b,z)
y=$.V
if(y===C.d){y.toString
return P.dc(a,b)}return P.dc(a,H.d(y.bL(b),z))},
jY:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bh]}
H.d(b,z)
y=$.V
if(y===C.d){y.toString
return P.eM(a,b)}x=y.cR(b,P.bh)
$.V.toString
return P.eM(a,H.d(x,z))},
cA:function(a,b,c,d,e){var z={}
z.a=d
P.mN(new P.mL(z,e))},
fC:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.V
if(y===c)return d.$0()
$.V=c
z=y
try{y=d.$0()
return y}finally{$.V=z}},
fD:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.V
if(y===c)return d.$1(e)
$.V=c
z=y
try{y=d.$1(e)
return y}finally{$.V=z}},
mM:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.V
if(y===c)return d.$2(e,f)
$.V=c
z=y
try{y=d.$2(e,f)
return y}finally{$.V=z}},
cB:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.d!==c
if(z)d=!(!z||!1)?c.bL(d):c.fa(d,-1)
P.fG(d)},
kU:{"^":"c:23;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kT:{"^":"c:44;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kV:{"^":"c:0;a",
$0:function(){this.a.$0()}},
kW:{"^":"c:0;a",
$0:function(){this.a.$0()}},
ft:{"^":"b;a,0b,c",
dL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bs(new P.lX(this,b),0),a)
else throw H.a(P.y("`setTimeout()` not found."))},
dM:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bs(new P.lW(this,a,Date.now(),b),0),a)
else throw H.a(P.y("Periodic timer."))},
$isbh:1,
u:{
lU:function(a,b){var z=new P.ft(!0,0)
z.dL(a,b)
return z},
lV:function(a,b){var z=new P.ft(!1,0)
z.dM(a,b)
return z}}},
lX:{"^":"c:8;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lW:{"^":"c:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.c.dC(w,x)}z.c=y
this.d.$1(z)}},
bo:{"^":"b;0a,b,c,d,e,$ti",
fG:function(a){if(this.c!==6)return!0
return this.b.b.c7(H.d(this.d,{func:1,ret:P.O,args:[P.b]}),a.a,P.O,P.b)},
fz:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.w(this,1)}
w=this.b.b
if(H.c8(z,{func:1,args:[P.b,P.ax]}))return H.dx(w.h3(z,a.a,a.b,null,y,P.ax),x)
else return H.dx(w.c7(H.d(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aR:{"^":"b;cI:a<,b,0eL:c<,$ti",
dj:function(a,b,c){var z,y,x,w
z=H.w(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.V
if(y!==C.d){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mK(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aR(0,$.V,[c])
w=b==null?1:3
this.cn(new P.bo(x,w,a,b,[z,c]))
return x},
h6:function(a,b){return this.dj(a,null,b)},
cn:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbo")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaR")
z=y.a
if(z<4){y.cn(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cB(null,null,z,H.d(new P.la(this,a),{func:1,ret:-1}))}},
cD:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbo")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaR")
y=u.a
if(y<4){u.cD(a)
return}this.a=y
this.c=u.c}z.a=this.b7(a)
y=this.b
y.toString
P.cB(null,null,y,H.d(new P.lf(z,this),{func:1,ret:-1}))}},
bB:function(){var z=H.f(this.c,"$isbo")
this.c=null
return this.b7(z)},
b7:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cs:function(a){var z,y,x,w
z=H.w(this,0)
H.dx(a,{futureOr:1,type:z})
y=this.$ti
x=H.br(a,"$isby",y,"$asby")
if(x){z=H.br(a,"$isaR",y,null)
if(z)P.ff(a,this)
else P.lb(a,this)}else{w=this.bB()
H.x(a,z)
this.a=4
this.c=a
P.bM(this,w)}},
bq:[function(a,b){var z
H.f(b,"$isax")
z=this.bB()
this.a=8
this.c=new P.ar(a,b)
P.bM(this,z)},function(a){return this.bq(a,null)},"hh","$2","$1","gdZ",4,2,55],
$isby:1,
u:{
lb:function(a,b){var z,y,x
b.a=1
try{a.dj(new P.lc(b),new P.ld(b),null)}catch(x){z=H.aw(x)
y=H.bt(x)
P.ob(new P.le(b,z,y))}},
ff:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaR")
if(z>=4){y=b.bB()
b.a=a.a
b.c=a.c
P.bM(b,y)}else{y=H.f(b.c,"$isbo")
b.a=2
b.c=a
a.cD(y)}},
bM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isar")
y=y.b
u=v.a
t=v.b
y.toString
P.cA(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bM(z.a,b)}y=z.a
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
if(p){H.f(r,"$isar")
y=y.b
u=r.a
t=r.b
y.toString
P.cA(null,null,y,u,t)
return}o=$.V
if(o==null?q!=null:o!==q)$.V=q
else o=null
y=b.c
if(y===8)new P.li(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lh(x,b,r).$0()}else if((y&2)!==0)new P.lg(z,x,b).$0()
if(o!=null)$.V=o
y=x.b
if(!!J.P(y).$isby){if(y.a>=4){n=H.f(t.c,"$isbo")
t.c=null
b=t.b7(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ff(y,t)
return}}m=b.b
n=H.f(m.c,"$isbo")
m.c=null
b=m.b7(n)
y=x.a
u=x.b
if(!y){H.x(u,H.w(m,0))
m.a=4
m.c=u}else{H.f(u,"$isar")
m.a=8
m.c=u}z.a=m
y=m}}}},
la:{"^":"c:0;a,b",
$0:function(){P.bM(this.a,this.b)}},
lf:{"^":"c:0;a,b",
$0:function(){P.bM(this.b,this.a.a)}},
lc:{"^":"c:23;a",
$1:function(a){var z=this.a
z.a=0
z.cs(a)}},
ld:{"^":"c:52;a",
$2:function(a,b){this.a.bq(a,H.f(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
le:{"^":"c:0;a,b,c",
$0:function(){this.a.bq(this.b,this.c)}},
li:{"^":"c:8;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dh(H.d(w.d,{func:1}),null)}catch(v){y=H.aw(v)
x=H.bt(v)
if(this.d){w=H.f(this.a.a.c,"$isar").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isar")
else u.b=new P.ar(y,x)
u.a=!0
return}if(!!J.P(z).$isby){if(z instanceof P.aR&&z.gcI()>=4){if(z.gcI()===8){w=this.b
w.b=H.f(z.geL(),"$isar")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.h6(new P.lj(t),null)
w.a=!1}}},
lj:{"^":"c:56;a",
$1:function(a){return this.a}},
lh:{"^":"c:8;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.w(x,0)
v=H.x(this.c,w)
u=H.w(x,1)
this.a.b=x.b.b.c7(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aw(t)
y=H.bt(t)
x=this.a
x.b=new P.ar(z,y)
x.a=!0}}},
lg:{"^":"c:8;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isar")
w=this.c
if(w.fG(z)&&w.e!=null){v=this.b
v.b=w.fz(z)
v.a=!1}}catch(u){y=H.aw(u)
x=H.bt(u)
w=H.f(this.a.a.c,"$isar")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ar(y,x)
s.a=!0}}},
fc:{"^":"b;a,0b"},
d9:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aR(0,$.V,[P.l])
z.a=0
this.fF(new P.jO(z,this),!0,new P.jP(z,y),y.gdZ())
return y}},
jO:{"^":"c;a,b",
$1:function(a){H.x(a,H.az(this.b,"d9",0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.az(this.b,"d9",0)]}}},
jP:{"^":"c:0;a,b",
$0:function(){this.b.cs(this.a.a)}},
eH:{"^":"b;$ti"},
jN:{"^":"b;"},
bh:{"^":"b;"},
ar:{"^":"b;a,b",
i:function(a){return H.k(this.a)},
$isa8:1},
mo:{"^":"b;",$isq7:1},
mL:{"^":"c:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eu()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
lD:{"^":"mo;",
h4:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.d===$.V){a.$0()
return}P.fC(null,null,this,a,-1)}catch(x){z=H.aw(x)
y=H.bt(x)
P.cA(null,null,this,z,H.f(y,"$isax"))}},
h5:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.d===$.V){a.$1(b)
return}P.fD(null,null,this,a,b,-1,c)}catch(x){z=H.aw(x)
y=H.bt(x)
P.cA(null,null,this,z,H.f(y,"$isax"))}},
fa:function(a,b){return new P.lF(this,H.d(a,{func:1,ret:b}),b)},
bL:function(a){return new P.lE(this,H.d(a,{func:1,ret:-1}))},
cR:function(a,b){return new P.lG(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
dh:function(a,b){H.d(a,{func:1,ret:b})
if($.V===C.d)return a.$0()
return P.fC(null,null,this,a,b)},
c7:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.V===C.d)return a.$1(b)
return P.fD(null,null,this,a,b,c,d)},
h3:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.V===C.d)return a.$2(b,c)
return P.mM(null,null,this,a,b,c,d,e,f)},
fX:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
lF:{"^":"c;a,b,c",
$0:function(){return this.a.dh(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lE:{"^":"c:8;a,b",
$0:function(){return this.a.h4(this.b)}},
lG:{"^":"c;a,b,c",
$1:function(a){var z=this.c
return this.a.h5(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iH:function(a,b,c,d,e){return new H.aL(0,0,[d,e])},
iI:function(a,b,c){H.bU(a)
return H.v(H.n1(a,new H.aL(0,0,[b,c])),"$isel",[b,c],"$asel")},
em:function(a,b){return new H.aL(0,0,[a,b])},
iK:function(a,b,c,d){return new P.lp(0,0,[d])},
iu:function(a,b,c){var z,y
if(P.ds(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bT()
C.a.h(y,a)
try{P.mI(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eI(b,H.h_(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
cV:function(a,b,c){var z,y,x
if(P.ds(a))return b+"..."+c
z=new P.aF(b)
y=$.$get$bT()
C.a.h(y,a)
try{x=z
x.a=P.eI(x.gaB(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaB()+c
y=z.gaB()
return y.charCodeAt(0)==0?y:y},
ds:function(a){var z,y
for(z=0;y=$.$get$bT(),z<y.length;++z)if(a===y[z])return!0
return!1},
mI:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga4(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.L())return
w=H.k(z.gT(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.L()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gT(z);++x
if(!z.L()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gT(z);++x
for(;z.L();t=s,s=r){r=z.gT(z);++x
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
en:function(a,b,c){var z=P.iH(null,null,null,b,c)
a.v(0,new P.iJ(z,b,c))
return z},
d_:function(a){var z,y,x
z={}
if(P.ds(a))return"{...}"
y=new P.aF("")
try{C.a.h($.$get$bT(),a)
x=y
x.a=x.gaB()+"{"
z.a=!0
J.dH(a,new P.iQ(z,y))
z=y
z.a=z.gaB()+"}"}finally{z=$.$get$bT()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaB()
return z.charCodeAt(0)==0?z:z},
lp:{"^":"lk;a,0b,0c,0d,0e,0f,r,$ti",
ga4:function(a){return P.fi(this,this.r,H.w(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.x(b,H.w(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dm()
this.b=z}return this.cq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dm()
this.c=y}return this.cq(y,b)}else return this.dO(0,b)},
dO:function(a,b){var z,y,x
H.x(b,H.w(this,0))
z=this.d
if(z==null){z=P.dm()
this.d=z}y=this.ct(b)
x=z[y]
if(x==null)z[y]=[this.bp(b)]
else{if(this.cA(x,b)>=0)return!1
x.push(this.bp(b))}return!0},
N:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cE(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cE(this.c,b)
else return this.eF(0,b)},
eF:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e9(z,b)
x=this.cA(y,b)
if(x<0)return!1
this.cK(y.splice(x,1)[0])
return!0},
cq:function(a,b){H.x(b,H.w(this,0))
if(H.f(a[b],"$isdl")!=null)return!1
a[b]=this.bp(b)
return!0},
cE:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdl")
if(z==null)return!1
this.cK(z)
delete a[b]
return!0},
cr:function(){this.r=this.r+1&67108863},
bp:function(a){var z,y
z=new P.dl(H.x(a,H.w(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cr()
return z},
cK:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cr()},
ct:function(a){return J.b0(a)&0x3ffffff},
e9:function(a,b){return a[this.ct(b)]},
cA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].a,b))return y
return-1},
u:{
dm:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dl:{"^":"b;a,0b,0c"},
lq:{"^":"b;a,b,0c,0d,$ti",
gT:function(a){return this.d},
L:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.x(z.a,H.w(this,0))
this.c=z.b
return!0}}},
u:{
fi:function(a,b,c){var z=new P.lq(a,b,[c])
z.c=a.e
return z}}},
lk:{"^":"jw;"},
iJ:{"^":"c:12;a,b,c",
$2:function(a,b){this.a.k(0,H.x(a,this.b),H.x(b,this.c))}},
cl:{"^":"lr;",$ism:1,$ish:1},
u:{"^":"b;$ti",
ga4:function(a){return new H.eo(a,this.gl(a),0,[H.aY(this,a,"u",0)])},
M:function(a,b){return this.j(a,b)},
h7:function(a,b){var z,y,x
z=H.i([],[H.aY(this,a,"u",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.k(z,y,this.j(a,y));++y}return z},
c9:function(a){return this.h7(a,!0)},
av:function(a,b,c,d){var z
H.x(d,H.aY(this,a,"u",0))
P.aN(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.k(a,z,d)},
i:function(a){return P.cV(a,"[","]")}},
iP:{"^":"an;"},
iQ:{"^":"c:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
an:{"^":"b;$ti",
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.aY(this,a,"an",0),H.aY(this,a,"an",1)]})
for(z=J.bv(this.gan(a));z.L();){y=z.gT(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.aq(this.gan(a))},
i:function(a){return P.d_(a)},
$isK:1},
m1:{"^":"b;$ti",
k:function(a,b,c){H.x(b,H.w(this,0))
H.x(c,H.w(this,1))
throw H.a(P.y("Cannot modify unmodifiable map"))}},
iR:{"^":"b;$ti",
j:function(a,b){return J.dG(this.a,b)},
k:function(a,b,c){J.cK(this.a,H.x(b,H.w(this,0)),H.x(c,H.w(this,1)))},
v:function(a,b){J.dH(this.a,H.d(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]}))},
gl:function(a){return J.aq(this.a)},
i:function(a){return J.ad(this.a)},
$isK:1},
f2:{"^":"m2;a,$ti"},
jy:{"^":"b;$ti",
i:function(a){return P.cV(this,"{","}")},
M:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dI("index"))
if(b<0)H.I(P.a4(b,0,null,"index",null))
for(z=P.fi(this,this.r,H.w(this,0)),y=0;z.L();){x=z.d
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
$ism:1},
jw:{"^":"jy;"},
lr:{"^":"b+u;"},
m2:{"^":"iR+m1;$ti"}}],["","",,P,{"^":"",hl:{"^":"bV;a",
fI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aN(c,d,b.length,null,null,null)
z=$.$get$fd()
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
if(q<=d){p=H.cH(C.b.J(b,s))
o=H.cH(C.b.J(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aF("")
l=w.a+=C.b.A(b,x,y)
w.a=l+H.co(r)
x=s
continue}}throw H.a(P.a1("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.A(b,x,d)
k=l.length
if(v>=0)P.dL(b,u,d,v,t,k)
else{j=C.c.b3(k-1,4)+1
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aO(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dL(b,u,d,v,t,i)
else{j=C.c.b3(i,4)
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aO(b,d,d,j===2?"==":"=")}return b},
$asbV:function(){return[[P.h,P.l],P.j]},
u:{
dL:function(a,b,c,d,e,f){if(C.c.b3(f,4)!==0)throw H.a(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a1("Invalid base64 padding, more than two '=' characters",a,b))}}},hm:{"^":"bx;a",
$asbx:function(){return[[P.h,P.l],P.j]}},bV:{"^":"b;$ti"},bx:{"^":"jN;$ti"},hM:{"^":"bV;",
$asbV:function(){return[P.j,[P.h,P.l]]}},kv:{"^":"hM;a",
gfn:function(){return C.A}},kC:{"^":"bx;",
aU:function(a,b,c){var z,y,x,w
z=a.length
P.aN(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mn(0,0,x)
if(w.e7(a,b,z)!==z)w.cN(J.hc(a,z-1),0)
return C.Q.bn(x,0,w.b)},
bR:function(a){return this.aU(a,0,null)},
$asbx:function(){return[P.j,[P.h,P.l]]}},mn:{"^":"b;a,b,c",
cN:function(a,b){var z,y,x,w,v
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
e7:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.J(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cN(w,C.b.J(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kw:{"^":"bx;a",
aU:function(a,b,c){var z,y,x,w,v
H.v(a,"$ish",[P.l],"$ash")
z=P.kx(!1,a,b,c)
if(z!=null)return z
y=J.aq(a)
P.aN(b,c,y,null,null,null)
x=new P.aF("")
w=new P.mk(!1,x,!0,0,0,0)
w.aU(a,b,y)
w.ft(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
bR:function(a){return this.aU(a,0,null)},
$asbx:function(){return[[P.h,P.l],P.j]},
u:{
kx:function(a,b,c,d){H.v(b,"$ish",[P.l],"$ash")
if(b instanceof Uint8Array)return P.ky(!1,b,c,d)
return},
ky:function(a,b,c,d){var z,y,x
z=$.$get$f6()
if(z==null)return
y=0===c
if(y&&!0)return P.dg(z,b)
x=b.length
d=P.aN(c,d,x,null,null,null)
if(y&&d===x)return P.dg(z,b)
return P.dg(z,b.subarray(c,d))},
dg:function(a,b){if(P.kA(b))return
return P.kB(a,b)},
kB:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aw(y)}return},
kA:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kz:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aw(y)}return}}},mk:{"^":"b;a,b,c,d,e,f",
ft:function(a,b,c){var z
H.v(b,"$ish",[P.l],"$ash")
if(this.e>0){z=P.a1("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$ish",[P.l],"$ash")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mm(c)
v=new P.ml(this,b,c,a)
$label0$0:for(u=J.au(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bj()
if((r&192)!==128){q=P.a1("Bad UTF-8 encoding 0x"+C.c.b0(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.q,q)
if(z<=C.q[q]){q=P.a1("Overlong encoding of 0x"+C.c.b0(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a1("Character outside valid Unicode range: 0x"+C.c.b0(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.co(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.a8()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.K()
if(r<0){m=P.a1("Negative UTF-8 code unit: -0x"+C.c.b0(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a1("Bad UTF-8 encoding 0x"+C.c.b0(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mm:{"^":"c:43;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$ish",[P.l],"$ash")
z=this.a
for(y=J.au(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bj()
if((w&127)!==w)return x-b}return z-b}},ml:{"^":"c:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c4(this.d,a,b)}}}],["","",,P,{"^":"",
ca:function(a,b,c){var z
H.d(b,{func:1,ret:P.l,args:[P.j]})
z=H.jd(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a1(a,null,null))},
hO:function(a){var z=J.P(a)
if(!!z.$isc)return z.i(a)
return"Instance of '"+H.ba(a)+"'"},
iL:function(a,b,c,d){var z,y
H.x(b,d)
z=J.iw(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.k(z,y,b)
return H.v(z,"$ish",[d],"$ash")},
iM:function(a,b,c){var z,y,x
z=[c]
y=H.i([],z)
for(x=a.ga4(a);x.L();)C.a.h(y,H.x(x.gT(x),c))
if(b)return y
return H.v(J.bA(y),"$ish",z,"$ash")},
c4:function(a,b,c){var z,y
z=P.l
H.v(a,"$ism",[z],"$asm")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isb6",[z],"$asb6")
y=a.length
c=P.aN(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.K()
z=c<y}else z=!0
return H.ey(z?C.a.bn(a,b,c):a)}if(!!J.P(a).$isd4)return H.jf(a,b,P.aN(b,c,a.length,null,null,null))
return P.jQ(a,b,c)},
jQ:function(a,b,c){var z,y,x,w
H.v(a,"$ism",[P.l],"$asm")
if(b<0)throw H.a(P.a4(b,0,J.aq(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a4(c,b,J.aq(a),null,null))
y=J.bv(a)
for(x=0;x<b;++x)if(!y.L())throw H.a(P.a4(b,0,x,null,null))
w=[]
if(z)for(;y.L();)w.push(y.gT(y))
else for(x=b;x<c;++x){if(!y.L())throw H.a(P.a4(c,b,x,null,null))
w.push(y.gT(y))}return H.ey(w)},
jn:function(a,b,c){return new H.iz(a,H.iA(a,!1,!0,!1))},
c7:function(){var z=H.j5()
if(z!=null)return P.kn(z,0,null)
throw H.a(P.y("'Uri.base' is not supported"))},
ci:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ad(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hO(a)},
T:function(a){return new P.fe(a)},
iN:function(a,b,c,d){var z,y
H.d(b,{func:1,ret:d,args:[P.l]})
z=H.i([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.k(z,y,b.$1(y))
return z},
dC:function(a){H.o9(a)},
kn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.J(a,b+4)^58)*3|C.b.J(a,b)^100|C.b.J(a,b+1)^97|C.b.J(a,b+2)^116|C.b.J(a,b+3)^97)>>>0
if(y===0)return P.f3(b>0||c<c?C.b.A(a,b,c):a,5,null).gdm()
else if(y===32)return P.f3(C.b.A(a,z,c),0,null).gdm()}x=new Array(8)
x.fixed$length=Array
w=H.i(x,[P.l])
C.a.k(w,0,0)
x=b-1
C.a.k(w,1,x)
C.a.k(w,2,x)
C.a.k(w,7,x)
C.a.k(w,3,b)
C.a.k(w,4,b)
C.a.k(w,5,c)
C.a.k(w,6,c)
if(P.fE(a,b,c,0,w)>=14)C.a.k(w,7,c)
v=w[1]
if(typeof v!=="number")return v.cc()
if(v>=b)if(P.fE(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.t()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.K()
if(typeof r!=="number")return H.n(r)
if(q<r)r=q
if(typeof s!=="number")return s.K()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.K()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.K()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ab(a,"..",s)))n=r>s+2&&C.b.ab(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ab(a,"file",b)){if(u<=b){if(!C.b.ab(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.A(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aO(a,s,r,"/");++r;++q;++c}else{a=C.b.A(a,b,s)+"/"+C.b.A(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ab(a,"http",b)){if(x&&t+3===s&&C.b.ab(a,"80",t+1))if(b===0&&!0){a=C.b.aO(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.A(a,b,t)+C.b.A(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ab(a,"https",b)){if(x&&t+4===s&&C.b.ab(a,"443",t+1))if(b===0&&!0){a=C.b.aO(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.A(a,b,t)+C.b.A(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.A(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lI(a,v,u,t,s,r,q,o)}return P.m3(a,b,c,v,u,t,s,r,q,o)},
f5:function(a,b){var z=P.j
return C.a.fu(H.i(a.split("&"),[z]),P.em(z,z),new P.kq(b),[P.K,P.j,P.j])},
kl:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.km(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a0(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ca(C.b.A(a,v,w),null,null)
if(typeof s!=="number")return s.a8()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ca(C.b.A(a,v,c),null,null)
if(typeof s!=="number")return s.a8()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
f4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.ko(a)
y=new P.kp(z,a)
if(a.length<2)z.$1("address is too short")
x=H.i([],[P.l])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a0(a,w)
if(s===58){if(w===b){++w
if(C.b.a0(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaw(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kl(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.c.aF(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
mB:function(){var z,y,x,w,v
z=P.iN(22,new P.mD(),!0,P.S)
y=new P.mC(z)
x=new P.mE()
w=new P.mF()
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
fE:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$ish",[P.l],"$ash")
z=$.$get$fF()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.J(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.k(e,v>>>5,y)}return d},
O:{"^":"b;"},
"+bool":0,
aj:{"^":"b;a,b",
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.aj))return!1
return this.a===b.a&&this.b===b.b},
aH:function(a,b){return C.c.aH(this.a,H.f(b,"$isaj").a)},
gW:function(a){var z=this.a
return(z^C.c.aF(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hD(H.jc(this))
y=P.bW(H.ja(this))
x=P.bW(H.j6(this))
w=P.bW(H.j7(this))
v=P.bW(H.j9(this))
u=P.bW(H.jb(this))
t=P.hE(H.j8(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isam:1,
$asam:function(){return[P.aj]},
u:{
hD:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bW:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"W;"},
"+double":0,
aC:{"^":"b;a",
m:function(a,b){return new P.aC(C.c.af(this.a*b))},
K:function(a,b){return C.c.K(this.a,H.f(b,"$isaC").a)},
a8:function(a,b){return C.c.a8(this.a,H.f(b,"$isaC").a)},
D:function(a,b){if(b==null)return!1
if(!(b instanceof P.aC))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
aH:function(a,b){return C.c.aH(this.a,H.f(b,"$isaC").a)},
i:function(a){var z,y,x,w,v
z=new P.hJ()
y=this.a
if(y<0)return"-"+new P.aC(0-y).i(0)
x=z.$1(C.c.al(y,6e7)%60)
w=z.$1(C.c.al(y,1e6)%60)
v=new P.hI().$1(y%1e6)
return""+C.c.al(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
$isam:1,
$asam:function(){return[P.aC]},
u:{
e6:function(a,b,c,d,e,f){return new P.aC(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hI:{"^":"c:22;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hJ:{"^":"c:22;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a8:{"^":"b;"},
eu:{"^":"a8;",
i:function(a){return"Throw of null."}},
aJ:{"^":"a8;a,b,c,d",
gbs:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbr:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbs()+y+x
if(!this.a)return w
v=this.gbr()
u=P.ci(this.b)
return w+v+": "+H.k(u)},
u:{
ce:function(a){return new P.aJ(!1,null,null,a)},
cf:function(a,b,c){return new P.aJ(!0,a,b,c)},
dI:function(a){return new P.aJ(!1,null,a,"Must not be null")}}},
cp:{"^":"aJ;e,f,a,b,c,d",
gbs:function(){return"RangeError"},
gbr:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
u:{
c2:function(a,b,c){return new P.cp(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.cp(b,c,!0,a,d,"Invalid value")},
aN:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.a(P.a4(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.a(P.a4(b,a,c,"end",f))
return b}return c}}},
hX:{"^":"aJ;e,l:f>,a,b,c,d",
gbs:function(){return"RangeError"},
gbr:function(){if(J.h8(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
u:{
U:function(a,b,c,d,e){var z=H.B(e!=null?e:J.aq(b))
return new P.hX(b,z,!0,a,c,"Index out of range")}}},
kj:{"^":"a8;a",
i:function(a){return"Unsupported operation: "+this.a},
u:{
y:function(a){return new P.kj(a)}}},
kg:{"^":"a8;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
u:{
c5:function(a){return new P.kg(a)}}},
jK:{"^":"a8;a",
i:function(a){return"Bad state: "+this.a}},
hx:{"^":"a8;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.ci(z))+"."},
u:{
b2:function(a){return new P.hx(a)}}},
j2:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa8:1},
eF:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa8:1},
hC:{"^":"a8;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fe:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hU:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.A(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.J(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a0(w,s)
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
m=""}l=C.b.A(w,o,p)
return y+n+l+m+"\n"+C.b.m(" ",x-o+n.length)+"^\n"},
u:{
a1:function(a,b,c){return new P.hU(a,b,c)}}},
l:{"^":"W;"},
"+int":0,
m:{"^":"b;$ti",
gl:function(a){var z,y
z=this.ga4(this)
for(y=0;z.L();)++y
return y},
M:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dI("index"))
if(b<0)H.I(P.a4(b,0,null,"index",null))
for(z=this.ga4(this),y=0;z.L();){x=z.gT(z)
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
i:function(a){return P.iu(this,"(",")")}},
cW:{"^":"b;$ti"},
h:{"^":"b;$ti",$ism:1},
"+List":0,
K:{"^":"b;$ti"},
D:{"^":"b;",
gW:function(a){return P.b.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"b;",$isam:1,
$asam:function(){return[P.W]}},
"+num":0,
b:{"^":";",
D:function(a,b){return this===b},
gW:function(a){return H.bH(this)},
i:function(a){return"Instance of '"+H.ba(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"b;"},
j:{"^":"b;",$isam:1,
$asam:function(){return[P.j]},
$isev:1},
"+String":0,
aF:{"^":"b;aB:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispT:1,
u:{
eI:function(a,b,c){var z=J.bv(b)
if(!z.L())return a
if(c.length===0){do a+=H.k(z.gT(z))
while(z.L())}else{a+=H.k(z.gT(z))
for(;z.L();)a=a+c+H.k(z.gT(z))}return a}}},
kq:{"^":"c:41;a",
$2:function(a,b){var z,y,x,w
z=P.j
H.v(a,"$isK",[z,z],"$asK")
H.N(b)
y=J.au(b).d2(b,"=")
if(y===-1){if(b!=="")J.cK(a,P.dp(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.A(b,0,y)
w=C.b.ax(b,y+1)
z=this.a
J.cK(a,P.dp(x,0,x.length,z,!0),P.dp(w,0,w.length,z,!0))}return a}},
km:{"^":"c:40;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv4 address, "+a,this.a,b))}},
ko:{"^":"c:39;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kp:{"^":"c:38;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ca(C.b.A(this.b,a,b),null,16)
if(typeof z!=="number")return z.K()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cw:{"^":"b;bk:a<,b,c,d,dd:e>,f,r,0x,0y,0z,0Q,0ch",
gdn:function(){return this.b},
gbU:function(a){var z=this.c
if(z==null)return""
if(C.b.aa(z,"["))return C.b.A(z,1,z.length-1)
return z},
gbg:function(a){var z=this.d
if(z==null)return P.fu(this.a)
return z},
gc2:function(a){var z=this.f
return z==null?"":z},
gcY:function(){var z=this.r
return z==null?"":z},
c5:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isK",[P.j,null],"$asK")
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
if(x&&!C.b.aa(d,"/"))d="/"+d
g=P.dn(g,0,0,h)
return new P.cw(i,j,c,f,d,g,this.r)},
c4:function(a,b){return this.c5(a,null,null,null,null,null,null,b,null,null)},
gaM:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.j
y=new P.f2(P.f5(z==null?"":z,C.f),[y,y])
this.Q=y
z=y}return z},
gcZ:function(){return this.c!=null},
gd1:function(){return this.f!=null},
gd_:function(){return this.r!=null},
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
z=J.P(b)
if(!!z.$isdf){y=this.a
x=b.gbk()
if(y==null?x==null:y===x)if(this.c!=null===b.gcZ()){y=this.b
x=b.gdn()
if(y==null?x==null:y===x){y=this.gbU(this)
x=z.gbU(b)
if(y==null?x==null:y===x){y=this.gbg(this)
x=z.gbg(b)
if(y==null?x==null:y===x)if(this.e===z.gdd(b)){y=this.f
x=y==null
if(!x===b.gd1()){if(x)y=""
if(y===z.gc2(b)){z=this.r
y=z==null
if(!y===b.gd_()){if(y)z=""
z=z===b.gcY()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gW:function(a){var z=this.z
if(z==null){z=C.b.gW(this.i(0))
this.z=z}return z},
$isdf:1,
u:{
cx:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$ish",[P.l],"$ash")
if(c===C.f){z=$.$get$fz().b
if(typeof b!=="string")H.I(H.aa(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.az(c,"bV",0))
y=c.gfn().bR(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.co(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
m3:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.me(a,b,d)
else{if(d===b)P.bO(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mf(a,z,e-1):""
x=P.m8(a,e,f,!1)
if(typeof f!=="number")return f.t()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.mb(P.ca(C.b.A(a,w,g),new P.m4(a,f),null),j):null}else{y=""
x=null
v=null}u=P.m9(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.K()
t=h<i?P.dn(a,h+1,i,null):null
return new P.cw(j,y,x,v,u,t,i<c?P.m7(a,i+1,c):null)},
fu:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bO:function(a,b,c){throw H.a(P.a1(c,a,b))},
mb:function(a,b){if(a!=null&&a===P.fu(b))return
return a},
m8:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.I()
z=c-1
if(C.b.a0(a,z)!==93)P.bO(a,b,"Missing end `]` to match `[` in host")
P.f4(a,b+1,z)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.b.a0(a,y)===58){P.f4(a,b,c)
return"["+a+"]"}return P.mh(a,b,c)},
mh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a0(a,z)
if(v===37){u=P.fB(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aF("")
s=C.b.A(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.A(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.r,t)
t=(C.r[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aF("")
if(y<z){x.a+=C.b.A(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.i,t)
t=(C.i[t]&1<<(v&15))!==0}else t=!1
if(t)P.bO(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a0(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aF("")
s=C.b.A(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fv(v)
z+=q
y=z}}}}if(x==null)return C.b.A(a,b,c)
if(y<c){s=C.b.A(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
me:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fx(C.b.J(a,b)))P.bO(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.J(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.k,w)
w=(C.k[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bO(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.A(a,b,c)
return P.m5(y?a.toLowerCase():a)},
m5:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mf:function(a,b,c){return P.bP(a,b,c,C.M)},
m9:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bP(a,b,c,C.t):C.D.hT(d,new P.ma(),P.j).G(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.aa(w,"/"))w="/"+w
return P.mg(w,e,f)},
mg:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.aa(a,"/"))return P.mi(a,!z||c)
return P.mj(a)},
dn:function(a,b,c,d){var z,y
z={}
H.v(d,"$isK",[P.j,null],"$asK")
if(a!=null){if(d!=null)throw H.a(P.ce("Both query and queryParameters specified"))
return P.bP(a,b,c,C.j)}if(d==null)return
y=new P.aF("")
z.a=""
d.v(0,new P.mc(new P.md(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
m7:function(a,b,c){return P.bP(a,b,c,C.j)},
fB:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a0(a,b+1)
x=C.b.a0(a,z)
w=H.cH(y)
v=H.cH(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.c.aF(u,4)
if(z>=8)return H.e(C.l,z)
z=(C.l[z]&1<<(u&15))!==0}else z=!1
if(z)return H.co(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
fv:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.i(z,[P.l])
C.a.k(y,0,37)
C.a.k(y,1,C.b.J("0123456789ABCDEF",a>>>4))
C.a.k(y,2,C.b.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.i(z,[P.l])
for(v=0;--w,w>=0;x=128){u=C.c.eS(a,6*w)&63|x
C.a.k(y,v,37)
C.a.k(y,v+1,C.b.J("0123456789ABCDEF",u>>>4))
C.a.k(y,v+2,C.b.J("0123456789ABCDEF",u&15))
v+=3}}return P.c4(y,0,null)},
bP:function(a,b,c,d){var z=P.fA(a,b,c,H.v(d,"$ish",[P.l],"$ash"),!1)
return z==null?C.b.A(a,b,c):z},
fA:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$ish",[P.l],"$ash")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.K()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.b.a0(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fB(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.i,u)
u=(C.i[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bO(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a0(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fv(v)}}if(w==null)w=new P.aF("")
w.a+=C.b.A(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.K()
if(x<c)w.a+=C.b.A(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fy:function(a){if(C.b.aa(a,"."))return!0
return C.b.d2(a,"/.")!==-1},
mj:function(a){var z,y,x,w,v,u,t
if(!P.fy(a))return a
z=H.i([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.E(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.G(z,"/")},
mi:function(a,b){var z,y,x,w,v,u
if(!P.fy(a))return!b?P.fw(a):a
z=H.i([],[P.j])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaw(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaw(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.k(z,0,P.fw(z[0]))}return C.a.G(z,"/")},
fw:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fx(J.h9(a,0)))for(y=1;y<z;++y){x=C.b.J(a,y)
if(x===58)return C.b.A(a,0,y)+"%3A"+C.b.ax(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.k,w)
w=(C.k[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m6:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.J(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.ce("Invalid URL encoding"))}}return z},
dp:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dy(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.J(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.f!==d)v=!1
else v=!0
if(v)return y.A(a,b,c)
else u=new H.a7(y.A(a,b,c))}else{u=H.i([],[P.l])
for(x=b;x<c;++x){w=y.J(a,x)
if(w>127)throw H.a(P.ce("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.ce("Truncated URI"))
C.a.h(u,P.m6(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$ish",[P.l],"$ash")
return new P.kw(!1).bR(u)},
fx:function(a){var z=a|32
return 97<=z&&z<=122}}},
m4:{"^":"c:36;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.t()
throw H.a(P.a1("Invalid port",this.a,z+1))}},
ma:{"^":"c:47;",
$1:function(a){return P.cx(C.O,a,C.f,!1)}},
md:{"^":"c:26;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cx(C.l,a,C.f,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cx(C.l,b,C.f,!0))}}},
mc:{"^":"c:34;a",
$2:function(a,b){var z,y
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(z=J.bv(H.h_(b,"$ism")),y=this.a;z.L();)y.$2(a,H.N(z.gT(z)))}},
kk:{"^":"b;a,b,c",
gdm:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.d3(y,"?",z)
w=y.length
if(x>=0){v=P.bP(y,x+1,w,C.j)
w=x}else v=null
z=new P.l0(this,"data",null,null,null,P.bP(y,z,w,C.t),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
u:{
f3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.i([b-1],[P.l])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.J(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a1("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a1("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.J(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaw(z)
if(v!==44||x!==t+7||!C.b.ab(a,"base64",t+1))throw H.a(P.a1("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.x.fI(0,a,s,y)
else{r=P.fA(a,s,y,C.j,!0)
if(r!=null)a=C.b.aO(a,s,y,r)}return new P.kk(a,z,c)}}},
mD:{"^":"c:33;",
$1:function(a){return new Uint8Array(96)}},
mC:{"^":"c:30;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.he(z,0,96,b)
return z}},
mE:{"^":"c;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.J(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
mF:{"^":"c;",
$3:function(a,b,c){var z,y,x
for(z=C.b.J(b,0),y=C.b.J(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
lI:{"^":"b;a,b,c,d,e,f,r,x,0y",
gcZ:function(){return this.c>0},
gd0:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.t()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gd1:function(){var z=this.f
if(typeof z!=="number")return z.K()
return z<this.r},
gd_:function(){return this.r<this.a.length},
gcB:function(){return this.b===4&&C.b.aa(this.a,"http")},
gcC:function(){return this.b===5&&C.b.aa(this.a,"https")},
gbk:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcB()){this.x="http"
z="http"}else if(this.gcC()){this.x="https"
z="https"}else if(z===4&&C.b.aa(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.aa(this.a,"package")){this.x="package"
z="package"}else{z=C.b.A(this.a,0,z)
this.x=z}return z},
gdn:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.A(this.a,y,z-1):""},
gbU:function(a){var z=this.c
return z>0?C.b.A(this.a,z,this.d):""},
gbg:function(a){var z
if(this.gd0()){z=this.d
if(typeof z!=="number")return z.t()
return P.ca(C.b.A(this.a,z+1,this.e),null,null)}if(this.gcB())return 80
if(this.gcC())return 443
return 0},
gdd:function(a){return C.b.A(this.a,this.e,this.f)},
gc2:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.K()
return z<y?C.b.A(this.a,z+1,y):""},
gcY:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ax(y,z+1):""},
gaM:function(){var z=this.f
if(typeof z!=="number")return z.K()
if(z>=this.r)return C.P
z=P.j
return new P.f2(P.f5(this.gc2(this),C.f),[z,z])},
c5:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isK",[P.j,null],"$asK")
i=this.gbk()
z=i==="file"
y=this.c
j=y>0?C.b.A(this.a,this.b+3,y):""
f=this.gd0()?this.gbg(this):null
y=this.c
if(y>0)c=C.b.A(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.A(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.aa(d,"/"))d="/"+d
g=P.dn(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ax(y,x+1)
return new P.cw(i,j,c,f,d,g,b)},
c4:function(a,b){return this.c5(a,null,null,null,null,null,null,b,null,null)},
gW:function(a){var z=this.y
if(z==null){z=C.b.gW(this.a)
this.y=z}return z},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.P(b)
if(!!z.$isdf)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdf:1},
l0:{"^":"cw;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dU:function(a,b){var z=document.createElement("canvas")
return z},
hL:function(a){H.f(a,"$isa9")
return"wheel"},
ec:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$iseb")
try{J.hg(z,a)}catch(x){H.aw(x)}return z},
cv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fh:function(a,b,c,d){var z,y
z=W.cv(W.cv(W.cv(W.cv(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fI:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.V
if(z===C.d)return a
return z.cR(a,b)},
af:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ol:{"^":"d8;0w:x=,0C:y=","%":"Accelerometer|LinearAccelerationSensor"},
om:{"^":"q;0l:length=","%":"AccessibleNodeList"},
on:{"^":"af;0a5:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
oo:{"^":"af;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cN:{"^":"q;",$iscN:1,"%":";Blob"},
ou:{"^":"af;0a5:type}","%":"HTMLButtonElement"},
cQ:{"^":"af;",
cd:function(a,b,c){var z=a.getContext(b,P.mR(c,null))
return z},
$iscQ:1,
"%":"HTMLCanvasElement"},
ow:{"^":"L;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oy:{"^":"ch;0l:length=","%":"CSSPerspective"},
oz:{"^":"cT;0w:x=,0C:y=","%":"CSSPositionValue"},
oA:{"^":"ch;0w:x=,0C:y=","%":"CSSRotation"},
b3:{"^":"q;",$isb3:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oB:{"^":"ch;0w:x=,0C:y=","%":"CSSScale"},
oC:{"^":"l_;0l:length=",
ds:function(a,b){var z=a.getPropertyValue(this.dV(a,b))
return z==null?"":z},
dV:function(a,b){var z,y
z=$.$get$e_()
y=z[b]
if(typeof y==="string")return y
y=this.eT(a,b)
z[b]=y
return y},
eT:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hF()+b
if(z in a)return z
return b},
gbM:function(a){return a.bottom},
gam:function(a){return a.height},
gaI:function(a){return a.left},
gc6:function(a){return a.right},
gb2:function(a){return a.top},
gaq:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hB:{"^":"b;",
gaI:function(a){return this.ds(a,"left")}},
cT:{"^":"q;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ch:{"^":"q;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
oD:{"^":"cT;0l:length=","%":"CSSTransformValue"},
oE:{"^":"ch;0w:x=,0C:y=","%":"CSSTranslation"},
oF:{"^":"cT;0l:length=","%":"CSSUnparsedValue"},
oG:{"^":"q;0l:length=","%":"DataTransferItemList"},
oH:{"^":"q;0w:x=,0C:y=","%":"DeviceAcceleration"},
oI:{"^":"q;",
i:function(a){return String(a)},
"%":"DOMException"},
oJ:{"^":"hG;",
gw:function(a){return a.x},
gC:function(a){return a.y},
"%":"DOMPoint"},
hG:{"^":"q;",
gw:function(a){return a.x},
gC:function(a){return a.y},
"%":";DOMPointReadOnly"},
oK:{"^":"l2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.v(c,"$isab",[P.W],"$asab")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.ab,P.W]]},
$asu:function(){return[[P.ab,P.W]]},
$ism:1,
$asm:function(){return[[P.ab,P.W]]},
$ish:1,
$ash:function(){return[[P.ab,P.W]]},
$asz:function(){return[[P.ab,P.W]]},
"%":"ClientRectList|DOMRectList"},
hH:{"^":"q;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaq(a))+" x "+H.k(this.gam(a))},
D:function(a,b){var z
if(b==null)return!1
z=H.br(b,"$isab",[P.W],"$asab")
if(!z)return!1
z=J.aT(b)
return a.left===z.gaI(b)&&a.top===z.gb2(b)&&this.gaq(a)===z.gaq(b)&&this.gam(a)===z.gam(b)},
gW:function(a){return W.fh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaq(a)&0x1FFFFFFF,this.gam(a)&0x1FFFFFFF)},
gbM:function(a){return a.bottom},
gam:function(a){return a.height},
gaI:function(a){return a.left},
gc6:function(a){return a.right},
gb2:function(a){return a.top},
gaq:function(a){return a.width},
gw:function(a){return a.x},
gC:function(a){return a.y},
$isab:1,
$asab:function(){return[P.W]},
"%":";DOMRectReadOnly"},
oL:{"^":"l4;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.N(c)
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.j]},
$asu:function(){return[P.j]},
$ism:1,
$asm:function(){return[P.j]},
$ish:1,
$ash:function(){return[P.j]},
$asz:function(){return[P.j]},
"%":"DOMStringList"},
oM:{"^":"q;0l:length=","%":"DOMTokenList"},
kZ:{"^":"cl;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.f(z[b],"$isa3")},
k:function(a,b,c){var z
H.B(b)
H.f(c,"$isa3")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga4:function(a){var z=this.c9(this)
return new J.aK(z,z.length,0,[H.w(z,0)])},
av:function(a,b,c,d){throw H.a(P.c5(null))},
$asu:function(){return[W.a3]},
$asm:function(){return[W.a3]},
$ash:function(){return[W.a3]}},
a3:{"^":"L;",
gbQ:function(a){return new W.kZ(a,a.children)},
gbb:function(a){return P.jj(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa3:1,
"%":";Element"},
oN:{"^":"af;0a5:type}","%":"HTMLEmbedElement"},
ae:{"^":"q;",$isae:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a9:{"^":"q;",
cO:["dw",function(a,b,c,d){H.d(c,{func:1,args:[W.ae]})
if(c!=null)this.dP(a,b,c,!1)}],
dP:function(a,b,c,d){return a.addEventListener(b,H.bs(H.d(c,{func:1,args:[W.ae]}),1),!1)},
$isa9:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fn|fo|fr|fs"},
aV:{"^":"cN;",$isaV:1,"%":"File"},
e7:{"^":"l9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isaV")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aV]},
$asu:function(){return[W.aV]},
$ism:1,
$asm:function(){return[W.aV]},
$ish:1,
$ash:function(){return[W.aV]},
$ise7:1,
$asz:function(){return[W.aV]},
"%":"FileList"},
p5:{"^":"a9;0l:length=","%":"FileWriter"},
p8:{"^":"af;0l:length=","%":"HTMLFormElement"},
b5:{"^":"q;",$isb5:1,"%":"Gamepad"},
p9:{"^":"d8;0w:x=,0C:y=","%":"Gyroscope"},
pa:{"^":"q;0l:length=","%":"History"},
pb:{"^":"lm;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asu:function(){return[W.L]},
$ism:1,
$asm:function(){return[W.L]},
$ish:1,
$ash:function(){return[W.L]},
$asz:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ea:{"^":"q;",$isea:1,"%":"ImageData"},
eb:{"^":"af;0a5:type}",$iseb:1,$isdV:1,"%":"HTMLInputElement"},
dV:{"^":"b;",$isa3:1,$isa9:1,$isL:1},
bB:{"^":"dd;",$isbB:1,"%":"KeyboardEvent"},
ph:{"^":"af;0a5:type}","%":"HTMLLinkElement"},
pi:{"^":"q;",
i:function(a){return String(a)},
"%":"Location"},
pj:{"^":"d8;0w:x=,0C:y=","%":"Magnetometer"},
pl:{"^":"q;0l:length=","%":"MediaList"},
pm:{"^":"a9;",
cO:function(a,b,c,d){H.d(c,{func:1,args:[W.ae]})
if(b==="message")a.start()
this.dw(a,b,c,!1)},
"%":"MessagePort"},
pn:{"^":"ls;",
j:function(a,b){return P.aS(a.get(H.N(b)))},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gan:function(a){var z=H.i([],[P.j])
this.v(a,new W.iV(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asan:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIInputMap"},
iV:{"^":"c:13;a",
$2:function(a,b){return C.a.h(this.a,a)}},
po:{"^":"lt;",
j:function(a,b){return P.aS(a.get(H.N(b)))},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gan:function(a){var z=H.i([],[P.j])
this.v(a,new W.iW(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asan:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"MIDIOutputMap"},
iW:{"^":"c:13;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b8:{"^":"q;",$isb8:1,"%":"MimeType"},
pp:{"^":"lv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb8")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b8]},
$asu:function(){return[W.b8]},
$ism:1,
$asm:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$asz:function(){return[W.b8]},
"%":"MimeTypeArray"},
aE:{"^":"dd;",$isaE:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kY:{"^":"cl;a",
k:function(a,b,c){var z,y
H.B(b)
H.f(c,"$isL")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
ga4:function(a){var z=this.a.childNodes
return new W.e8(z,z.length,-1,[H.aY(C.R,z,"z",0)])},
av:function(a,b,c,d){throw H.a(P.y("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asu:function(){return[W.L]},
$asm:function(){return[W.L]},
$ash:function(){return[W.L]}},
L:{"^":"a9;",
h0:function(a,b){var z,y
try{z=a.parentNode
J.ha(z,b,a)}catch(y){H.aw(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.dz(a):z},
eI:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
j_:{"^":"lx;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asu:function(){return[W.L]},
$ism:1,
$asm:function(){return[W.L]},
$ish:1,
$ash:function(){return[W.L]},
$asz:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
px:{"^":"af;0a5:type}","%":"HTMLOListElement"},
py:{"^":"af;0a5:type}","%":"HTMLObjectElement"},
b9:{"^":"q;0l:length=",$isb9:1,"%":"Plugin"},
pC:{"^":"lB;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb9")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b9]},
$asu:function(){return[W.b9]},
$ism:1,
$asm:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$asz:function(){return[W.b9]},
"%":"PluginArray"},
pH:{"^":"q;0a5:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
pI:{"^":"lH;",
j:function(a,b){return P.aS(a.get(H.N(b)))},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gan:function(a){var z=H.i([],[P.j])
this.v(a,new W.jt(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asan:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"RTCStatsReport"},
jt:{"^":"c:13;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pK:{"^":"af;0a5:type}","%":"HTMLScriptElement"},
pM:{"^":"af;0l:length=","%":"HTMLSelectElement"},
d8:{"^":"a9;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bb:{"^":"a9;",$isbb:1,"%":"SourceBuffer"},
pN:{"^":"fo;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbb")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asu:function(){return[W.bb]},
$ism:1,
$asm:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$asz:function(){return[W.bb]},
"%":"SourceBufferList"},
pO:{"^":"af;0a5:type}","%":"HTMLSourceElement"},
bc:{"^":"q;",$isbc:1,"%":"SpeechGrammar"},
pP:{"^":"lK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbc")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bc]},
$asu:function(){return[W.bc]},
$ism:1,
$asm:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$asz:function(){return[W.bc]},
"%":"SpeechGrammarList"},
bd:{"^":"q;0l:length=",$isbd:1,"%":"SpeechRecognitionResult"},
pR:{"^":"lN;",
j:function(a,b){return a.getItem(H.N(b))},
k:function(a,b,c){a.setItem(b,H.N(c))},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gan:function(a){var z=H.i([],[P.j])
this.v(a,new W.jM(z))
return z},
gl:function(a){return a.length},
$asan:function(){return[P.j,P.j]},
$isK:1,
$asK:function(){return[P.j,P.j]},
"%":"Storage"},
jM:{"^":"c:26;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pU:{"^":"af;0a5:type}","%":"HTMLStyleElement"},
be:{"^":"q;",$isbe:1,"%":"CSSStyleSheet|StyleSheet"},
da:{"^":"af;",$isda:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bf:{"^":"a9;",$isbf:1,"%":"TextTrack"},
bg:{"^":"a9;",$isbg:1,"%":"TextTrackCue|VTTCue"},
pY:{"^":"lT;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbg")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asu:function(){return[W.bg]},
$ism:1,
$asm:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$asz:function(){return[W.bg]},
"%":"TextTrackCueList"},
pZ:{"^":"fs;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbf")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asu:function(){return[W.bf]},
$ism:1,
$asm:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$asz:function(){return[W.bf]},
"%":"TextTrackList"},
q_:{"^":"q;0l:length=","%":"TimeRanges"},
bi:{"^":"q;",$isbi:1,"%":"Touch"},
bj:{"^":"dd;",$isbj:1,"%":"TouchEvent"},
q0:{"^":"lZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbi")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asu:function(){return[W.bi]},
$ism:1,
$asm:function(){return[W.bi]},
$ish:1,
$ash:function(){return[W.bi]},
$asz:function(){return[W.bi]},
"%":"TouchList"},
q1:{"^":"q;0l:length=","%":"TrackDefaultList"},
dd:{"^":"ae;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
q3:{"^":"q;",
i:function(a){return String(a)},
"%":"URL"},
q5:{"^":"q;0w:x=","%":"VRStageBoundsPoint"},
q6:{"^":"a9;0l:length=","%":"VideoTrackList"},
bL:{"^":"aE;",
gfk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.y("deltaY is not supported"))},
gfj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.y("deltaX is not supported"))},
$isbL:1,
"%":"WheelEvent"},
kR:{"^":"a9;",
eK:function(a,b){return a.requestAnimationFrame(H.bs(H.d(b,{func:1,ret:-1,args:[P.W]}),1))},
e2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
qb:{"^":"mq;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb3")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b3]},
$asu:function(){return[W.b3]},
$ism:1,
$asm:function(){return[W.b3]},
$ish:1,
$ash:function(){return[W.b3]},
$asz:function(){return[W.b3]},
"%":"CSSRuleList"},
qc:{"^":"hH;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
D:function(a,b){var z
if(b==null)return!1
z=H.br(b,"$isab",[P.W],"$asab")
if(!z)return!1
z=J.aT(b)
return a.left===z.gaI(b)&&a.top===z.gb2(b)&&a.width===z.gaq(b)&&a.height===z.gam(b)},
gW:function(a){return W.fh(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gam:function(a){return a.height},
gaq:function(a){return a.width},
gw:function(a){return a.x},
gC:function(a){return a.y},
"%":"ClientRect|DOMRect"},
qe:{"^":"ms;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isb5")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b5]},
$asu:function(){return[W.b5]},
$ism:1,
$asm:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$asz:function(){return[W.b5]},
"%":"GamepadList"},
qf:{"^":"mu;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isL")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.L]},
$asu:function(){return[W.L]},
$ism:1,
$asm:function(){return[W.L]},
$ish:1,
$ash:function(){return[W.L]},
$asz:function(){return[W.L]},
"%":"MozNamedAttrMap|NamedNodeMap"},
qg:{"^":"mw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbd")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asu:function(){return[W.bd]},
$ism:1,
$asm:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$asz:function(){return[W.bd]},
"%":"SpeechRecognitionResultList"},
qh:{"^":"my;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.B(b)
H.f(c,"$isbe")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asu:function(){return[W.be]},
$ism:1,
$asm:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$asz:function(){return[W.be]},
"%":"StyleSheetList"},
l5:{"^":"d9;a,b,c,$ti",
fF:function(a,b,c,d){var z=H.w(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.a5(this.a,this.b,a,!1,z)}},
qd:{"^":"l5;a,b,c,$ti"},
l6:{"^":"eH;a,b,c,d,e,$ti",
eY:function(){var z=this.d
if(z!=null&&this.a<=0)J.hb(this.b,this.c,z,!1)},
u:{
a5:function(a,b,c,d,e){var z=c==null?null:W.fI(new W.l7(c),W.ae)
z=new W.l6(0,a,b,z,!1,[e])
z.eY()
return z}}},
l7:{"^":"c:11;a",
$1:function(a){return this.a.$1(H.f(a,"$isae"))}},
z:{"^":"b;$ti",
ga4:function(a){return new W.e8(a,this.gl(a),-1,[H.aY(this,a,"z",0)])},
av:function(a,b,c,d){H.x(d,H.aY(this,a,"z",0))
throw H.a(P.y("Cannot modify an immutable List."))}},
e8:{"^":"b;a,b,c,0d,$ti",
L:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dG(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gT:function(a){return this.d}},
l_:{"^":"q+hB;"},
l1:{"^":"q+u;"},
l2:{"^":"l1+z;"},
l3:{"^":"q+u;"},
l4:{"^":"l3+z;"},
l8:{"^":"q+u;"},
l9:{"^":"l8+z;"},
ll:{"^":"q+u;"},
lm:{"^":"ll+z;"},
ls:{"^":"q+an;"},
lt:{"^":"q+an;"},
lu:{"^":"q+u;"},
lv:{"^":"lu+z;"},
lw:{"^":"q+u;"},
lx:{"^":"lw+z;"},
lA:{"^":"q+u;"},
lB:{"^":"lA+z;"},
lH:{"^":"q+an;"},
fn:{"^":"a9+u;"},
fo:{"^":"fn+z;"},
lJ:{"^":"q+u;"},
lK:{"^":"lJ+z;"},
lN:{"^":"q+an;"},
lS:{"^":"q+u;"},
lT:{"^":"lS+z;"},
fr:{"^":"a9+u;"},
fs:{"^":"fr+z;"},
lY:{"^":"q+u;"},
lZ:{"^":"lY+z;"},
mp:{"^":"q+u;"},
mq:{"^":"mp+z;"},
mr:{"^":"q+u;"},
ms:{"^":"mr+z;"},
mt:{"^":"q+u;"},
mu:{"^":"mt+z;"},
mv:{"^":"q+u;"},
mw:{"^":"mv+z;"},
mx:{"^":"q+u;"},
my:{"^":"mx+z;"}}],["","",,P,{"^":"",
aS:function(a){var z,y,x,w,v
if(a==null)return
z=P.em(P.j,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=H.N(y[w])
z.k(0,v,a[v])}return z},
mR:function(a,b){var z={}
a.v(0,new P.mS(z))
return z},
e5:function(){var z=$.e4
if(z==null){z=J.cL(window.navigator.userAgent,"Opera",0)
$.e4=z}return z},
hF:function(){var z,y
z=$.e1
if(z!=null)return z
y=$.e2
if(y==null){y=J.cL(window.navigator.userAgent,"Firefox",0)
$.e2=y}if(y)z="-moz-"
else{y=$.e3
if(y==null){y=!P.e5()&&J.cL(window.navigator.userAgent,"Trident/",0)
$.e3=y}if(y)z="-ms-"
else z=P.e5()?"-o-":"-webkit-"}$.e1=z
return z},
lQ:{"^":"b;",
cV:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
bi:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.P(a)
if(!!y.$isaj)return new Date(a.a)
if(!!y.$isjm)throw H.a(P.c5("structured clone of RegExp"))
if(!!y.$isaV)return a
if(!!y.$iscN)return a
if(!!y.$ise7)return a
if(!!y.$isea)return a
if(!!y.$ises||!!y.$isd3)return a
if(!!y.$isK){x=this.cV(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.k(w,x,v)
y.v(a,new P.lR(z,this))
return z.a}if(!!y.$ish){x=this.cV(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.fh(a,x)}throw H.a(P.c5("structured clone of other type"))},
fh:function(a,b){var z,y,x,w
z=J.au(a)
y=z.gl(a)
x=new Array(y)
C.a.k(this.b,b,x)
if(typeof y!=="number")return H.n(y)
w=0
for(;w<y;++w)C.a.k(x,w,this.bi(z.j(a,w)))
return x}},
lR:{"^":"c:12;a,b",
$2:function(a,b){this.a.a[a]=this.b.bi(b)}},
mS:{"^":"c:12;a",
$2:function(a,b){this.a[a]=b}},
fq:{"^":"lQ;a,b"},
hR:{"^":"cl;a,b",
gb6:function(){var z,y,x
z=this.b
y=H.az(z,"u",0)
x=W.a3
return new H.iS(new H.kP(z,H.d(new P.hS(),{func:1,ret:P.O,args:[y]}),[y]),H.d(new P.hT(),{func:1,ret:x,args:[y]}),[y,x])},
k:function(a,b,c){var z
H.B(b)
H.f(c,"$isa3")
z=this.gb6()
J.hf(z.b.$1(J.cM(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
av:function(a,b,c,d){throw H.a(P.y("Cannot fillRange on filtered list"))},
gl:function(a){return J.aq(this.gb6().a)},
j:function(a,b){var z=this.gb6()
return z.b.$1(J.cM(z.a,b))},
ga4:function(a){var z=P.iM(this.gb6(),!1,W.a3)
return new J.aK(z,z.length,0,[H.w(z,0)])},
$asu:function(){return[W.a3]},
$asm:function(){return[W.a3]},
$ash:function(){return[W.a3]}},
hS:{"^":"c:29;",
$1:function(a){return!!J.P(H.f(a,"$isL")).$isa3}},
hT:{"^":"c:28;",
$1:function(a){return H.ai(H.f(a,"$isL"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fg:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bG:{"^":"b;w:a>,C:b>,$ti",
i:function(a){return"Point("+H.k(this.a)+", "+H.k(this.b)+")"},
D:function(a,b){var z,y,x
if(b==null)return!1
z=H.br(b,"$isbG",[P.W],null)
if(!z)return!1
z=this.a
y=J.aT(b)
x=y.gw(b)
if(z==null?x==null:z===x){z=this.b
y=y.gC(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gW:function(a){var z,y
z=J.b0(this.a)
y=J.b0(this.b)
return P.fg(P.bN(P.bN(0,z),y))},
m:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.m()
y=H.w(this,0)
z=H.x(z*b,y)
x=this.b
if(typeof x!=="number")return x.m()
return new P.bG(z,H.x(x*b,y),this.$ti)}},
lC:{"^":"b;$ti",
gc6:function(a){var z=this.a
if(typeof z!=="number")return z.t()
return H.x(z+this.c,H.w(this,0))},
gbM:function(a){var z=this.b
if(typeof z!=="number")return z.t()
return H.x(z+this.d,H.w(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
D:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.br(b,"$isab",[P.W],"$asab")
if(!z)return!1
z=this.a
y=J.aT(b)
x=y.gaI(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb2(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.t()
w=H.w(this,0)
if(H.x(z+this.c,w)===y.gc6(b)){if(typeof x!=="number")return x.t()
z=H.x(x+this.d,w)===y.gbM(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.b0(z)
x=this.b
w=J.b0(x)
if(typeof z!=="number")return z.t()
v=H.w(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.t()
v=H.x(x+this.d,v)
return P.fg(P.bN(P.bN(P.bN(P.bN(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cT:function(a,b){var z,y
H.v(b,"$isbG",[P.W],"$asbG")
z=b.a
y=this.a
if(typeof z!=="number")return z.cc()
if(typeof y!=="number")return H.n(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cc()
if(typeof y!=="number")return H.n(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
ab:{"^":"lC;aI:a>,b2:b>,aq:c>,am:d>,$ti",u:{
jj:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.K()
if(c<0)z=-c*0
else z=c
H.x(z,e)
if(typeof d!=="number")return d.K()
if(d<0)y=-d*0
else y=d
return new P.ab(a,b,z,H.x(y,e),[e])}}}}],["","",,P,{"^":"",oO:{"^":"Y;0w:x=,0C:y=","%":"SVGFEBlendElement"},oP:{"^":"Y;0w:x=,0C:y=","%":"SVGFEColorMatrixElement"},oQ:{"^":"Y;0w:x=,0C:y=","%":"SVGFEComponentTransferElement"},oR:{"^":"Y;0w:x=,0C:y=","%":"SVGFECompositeElement"},oS:{"^":"Y;0w:x=,0C:y=","%":"SVGFEConvolveMatrixElement"},oT:{"^":"Y;0w:x=,0C:y=","%":"SVGFEDiffuseLightingElement"},oU:{"^":"Y;0w:x=,0C:y=","%":"SVGFEDisplacementMapElement"},oV:{"^":"Y;0w:x=,0C:y=","%":"SVGFEFloodElement"},oW:{"^":"Y;0w:x=,0C:y=","%":"SVGFEGaussianBlurElement"},oX:{"^":"Y;0w:x=,0C:y=","%":"SVGFEImageElement"},oY:{"^":"Y;0w:x=,0C:y=","%":"SVGFEMergeElement"},oZ:{"^":"Y;0w:x=,0C:y=","%":"SVGFEMorphologyElement"},p_:{"^":"Y;0w:x=,0C:y=","%":"SVGFEOffsetElement"},p0:{"^":"Y;0w:x=,0C:y=","%":"SVGFEPointLightElement"},p1:{"^":"Y;0w:x=,0C:y=","%":"SVGFESpecularLightingElement"},p2:{"^":"Y;0w:x=,0C:y=","%":"SVGFESpotLightElement"},p3:{"^":"Y;0w:x=,0C:y=","%":"SVGFETileElement"},p4:{"^":"Y;0w:x=,0C:y=","%":"SVGFETurbulenceElement"},p6:{"^":"Y;0w:x=,0C:y=","%":"SVGFilterElement"},p7:{"^":"bz;0w:x=,0C:y=","%":"SVGForeignObjectElement"},hW:{"^":"bz;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bz:{"^":"Y;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},pc:{"^":"bz;0w:x=,0C:y=","%":"SVGImageElement"},bC:{"^":"q;",$isbC:1,"%":"SVGLength"},pg:{"^":"lo;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.f(c,"$isbC")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bC]},
$ism:1,
$asm:function(){return[P.bC]},
$ish:1,
$ash:function(){return[P.bC]},
$asz:function(){return[P.bC]},
"%":"SVGLengthList"},pk:{"^":"Y;0w:x=,0C:y=","%":"SVGMaskElement"},bF:{"^":"q;",$isbF:1,"%":"SVGNumber"},pw:{"^":"lz;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.f(c,"$isbF")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bF]},
$ism:1,
$asm:function(){return[P.bF]},
$ish:1,
$ash:function(){return[P.bF]},
$asz:function(){return[P.bF]},
"%":"SVGNumberList"},pB:{"^":"Y;0w:x=,0C:y=","%":"SVGPatternElement"},pD:{"^":"q;0w:x=,0C:y=","%":"SVGPoint"},pE:{"^":"q;0l:length=","%":"SVGPointList"},pF:{"^":"q;0w:x=,0C:y=","%":"SVGRect"},pG:{"^":"hW;0w:x=,0C:y=","%":"SVGRectElement"},pL:{"^":"Y;0a5:type}","%":"SVGScriptElement"},pS:{"^":"lP;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.N(c)
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$asu:function(){return[P.j]},
$ism:1,
$asm:function(){return[P.j]},
$ish:1,
$ash:function(){return[P.j]},
$asz:function(){return[P.j]},
"%":"SVGStringList"},pV:{"^":"Y;0a5:type}","%":"SVGStyleElement"},Y:{"^":"a3;",
gbQ:function(a){return new P.hR(a,new W.kY(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},pW:{"^":"bz;0w:x=,0C:y=","%":"SVGSVGElement"},jS:{"^":"bz;","%":"SVGTextPathElement;SVGTextContentElement"},pX:{"^":"jS;0w:x=,0C:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bI:{"^":"q;",$isbI:1,"%":"SVGTransform"},q2:{"^":"m0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.B(b)
H.f(c,"$isbI")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bI]},
$ism:1,
$asm:function(){return[P.bI]},
$ish:1,
$ash:function(){return[P.bI]},
$asz:function(){return[P.bI]},
"%":"SVGTransformList"},q4:{"^":"bz;0w:x=,0C:y=","%":"SVGUseElement"},ln:{"^":"q+u;"},lo:{"^":"ln+z;"},ly:{"^":"q+u;"},lz:{"^":"ly+z;"},lO:{"^":"q+u;"},lP:{"^":"lO+z;"},m_:{"^":"q+u;"},m0:{"^":"m_+z;"}}],["","",,P,{"^":"",S:{"^":"b;",$ism:1,
$asm:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]}}}],["","",,P,{"^":"",op:{"^":"q;0l:length=","%":"AudioBuffer"},dK:{"^":"a9;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},oq:{"^":"kX;",
j:function(a,b){return P.aS(a.get(H.N(b)))},
v:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.j,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aS(y.value[1]))}},
gan:function(a){var z=H.i([],[P.j])
this.v(a,new P.hj(z))
return z},
gl:function(a){return a.size},
k:function(a,b,c){throw H.a(P.y("Not supported"))},
$asan:function(){return[P.j,null]},
$isK:1,
$asK:function(){return[P.j,null]},
"%":"AudioParamMap"},hj:{"^":"c:13;a",
$2:function(a,b){return C.a.h(this.a,a)}},hk:{"^":"dK;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},or:{"^":"a9;0l:length=","%":"AudioTrackList"},hn:{"^":"a9;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},os:{"^":"dK;0a5:type}","%":"BiquadFilterNode"},pz:{"^":"hn;0l:length=","%":"OfflineAudioContext"},pA:{"^":"hk;0a5:type}","%":"Oscillator|OscillatorNode"},kX:{"^":"q+an;"}}],["","",,P,{"^":"",eD:{"^":"q;",$iseD:1,"%":"WebGLRenderingContext"},kb:{"^":"q;",$iskb:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",pQ:{"^":"lM;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return P.aS(a.item(b))},
k:function(a,b,c){H.B(b)
H.f(c,"$isK")
throw H.a(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$asu:function(){return[[P.K,,,]]},
$ism:1,
$asm:function(){return[[P.K,,,]]},
$ish:1,
$ash:function(){return[[P.K,,,]]},
$asz:function(){return[[P.K,,,]]},
"%":"SQLResultSetRowList"},lL:{"^":"q+u;"},lM:{"^":"lL+z;"}}],["","",,O,{"^":"",b1:{"^":"b;0a,0b,0c,0d,$ti",
ci:function(a){this.a=H.i([],[a])
this.b=null
this.c=null
this.d=null},
dv:function(a,b,c){var z={func:1,ret:-1,args:[P.l,[P.m,H.az(this,"b1",0)]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
bl:function(a,b){return this.dv(a,null,b)},
eA:function(a){H.v(a,"$ism",[H.az(this,"b1",0)],"$asm")
return!0},
dH:function(a,b){var z
H.v(b,"$ism",[H.az(this,"b1",0)],"$asm")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
ga4:function(a){var z=this.a
return new J.aK(z,z.length,0,[H.w(z,0)])},
M:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"b1",0)
H.x(b,z)
z=[z]
if(this.eA(H.i([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dH(x,H.i([b],z))}},
$ism:1,
u:{
dX:function(a){var z=new O.b1([a])
z.ci(a)
return z}}},d0:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gF:function(){var z=this.b
if(z==null){z=D.X()
this.b=z}return z},
dI:function(a){var z=this.b
if(!(z==null))z.H(a)},
ay:function(){return this.dI(null)},
gao:function(a){var z=this.a
if(z.length>0)return C.a.gaw(z)
else return V.cm()},
df:function(a){var z=this.a
if(a==null)C.a.h(z,V.cm())
else C.a.h(z,a)
this.ay()},
c1:function(){var z=this.a
if(z.length>0){z.pop()
this.ay()}}}}],["","",,E,{"^":"",dM:{"^":"b;"},aU:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a6:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sce:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gF()
y.toString
x=H.d(this.gda(),{func:1,ret:-1,args:[D.t]})
C.a.N(y.a,x)}y=this.c
if(y!=null){y=y.gF()
y.toString
x=H.d(this.gda(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.C("shape",z,this.c,this,[F.a6])
w.b=!0
this.ai(w)}},
saX:function(a){var z,y,x,w
if(!J.E(this.r,a)){z=this.r
if(z!=null){y=z.gF()
y.toString
x=H.d(this.gd9(),{func:1,ret:-1,args:[D.t]})
C.a.N(y.a,x)}if(a!=null){y=a.gF()
y.toString
x=H.d(this.gd9(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.C("mover",z,a,this,[U.ak])
w.b=!0
this.ai(w)}},
aP:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aQ(0,b,this):null
if(!J.E(y,this.x)){x=this.x
this.x=y
w=new D.C("matrix",x,y,this,[V.c1])
w.b=!0
this.ai(w)}for(z=this.y.a,z=new J.aK(z,z.length,0,[H.w(z,0)]);z.L();)z.d.aP(0,b)},
aN:function(a){var z,y,x,w,v,u
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gao(z))
else C.a.h(z.a,y.m(0,z.gao(z)))
z.ay()
a.dg(this.f)
z=a.dy
x=(z&&C.a).gaw(z)
if(x!=null&&this.d!=null){if(x.a==null){w=a.fr.j(0,"Inspection")
if(w==null){z=a.a
w=new A.hZ(z,"Inspection")
w.dF(z,"Inspection")
y=$.ik
v=$.ia
w.c=w.cw(y,35633)
w.d=w.cw(v,35632)
v=z.createProgram()
w.e=v
z.attachShader(v,w.c)
z.attachShader(w.e,w.d)
z.linkProgram(w.e)
if(!H.fM(z.getProgramParameter(w.e,35714))){u=z.getProgramInfoLog(w.e)
z.deleteProgram(w.e)
H.I(P.T("Failed to link shader: "+H.k(u)))}w.eO()
w.eQ()
w.x=w.f.j(0,"posAttr")
w.y=w.f.j(0,"normAttr")
w.z=w.f.j(0,"clrAttr")
w.Q=w.f.j(0,"binmAttr")
w.ch=H.ai(w.r.j(0,"lightVec"),"$iscs")
w.cx=H.ai(w.r.j(0,"ambientClr"),"$iscs")
w.cy=H.ai(w.r.j(0,"diffuseClr"),"$iscs")
w.db=H.ai(w.r.j(0,"weightScalar"),"$isf1")
w.dx=H.ai(w.r.j(0,"viewMat"),"$isct")
w.dy=H.ai(w.r.j(0,"viewObjMatrix"),"$isct")
w.fr=H.ai(w.r.j(0,"projViewObjMatrix"),"$isct")
if(a.fr.bc(0,"Inspection"))H.I(P.T('Shader cache already contains a shader by the name "Inspection".'))
a.fr.k(0,"Inspection",w)}x.a=w}if(this.e==null){this.d.ac()
z=this.d
y=z.e
if(!(y==null))++y.c
z.d.bO()
z.a.bO()
z=z.e
if(!(z==null))z.ap(0)
z=this.d
y=z.e
if(!(y==null))++y.c
z.a.fc()
z=z.e
if(!(z==null))z.ap(0)
z=new Z.dR()
z.a=new H.aL(0,0,[P.j,Z.dQ])
this.e=z}z=x.a
a.a.useProgram(z.e)
z.f.fm()
y=x.r2
v=z.db
v.a.uniform1f(v.d,y)
y=x.b
v=z.ch
v.a.uniform3f(v.d,y.a,y.b,y.c)
y=a.db
y=y.gao(y)
v=z.dx
v.toString
v.bm(y.ca(0,!0))
y=a.cx
if(y==null){y=a.db
y=y.gao(y)
v=a.dx
v=y.m(0,v.gao(v))
a.cx=v
y=v}v=z.dy
v.toString
v.bm(y.ca(0,!0))
y=a.ch
if(y==null){y=a.z
if(y==null){y=a.cy
y=y.gao(y)
v=a.db
v=y.m(0,v.gao(v))
a.z=v
y=v}v=a.dx
v=y.m(0,v.gao(v))
a.ch=v
y=v}z=z.fr
z.toString
z.bm(y.ca(0,!0))
z=this.e
if(z instanceof Z.dR){a.a.blendFunc(1,1)
y=this.c
v=a.a
if(y==null){v.disable(2929)
a.a.enable(3042)
if(x.k3)x.cF(a,z,this.d,"Axis",H.d(x.gco(),{func:1,ret:F.a6,args:[F.cq]}),x.z,x.y)
if(x.k4)x.cF(a,z,this.d,"AABB",H.d(x.gcl(),{func:1,ret:F.a6,args:[F.cq]}),x.z,x.y)
a.a.enable(2929)
a.a.disable(3042)}else{v.enable(2929)
a.a.disable(3042)
if(x.cx)x.a1(a,z,this.c,"vertices",x.gf0(),x.f,x.e)
if(x.fr)x.a1(a,z,this.c,"faceCenters",x.ge4(),x.f,x.e)
if(x.Q)x.a1(a,z,this.c,"shapeFill",x.geR(),x.d,x.c)
if(x.id)x.a1(a,z,this.c,"colorFill",x.gdY(),x.x,x.r)
if(x.k1)x.a1(a,z,this.c,"txt2DColor",x.geZ(),x.x,x.r)
if(x.k2)x.a1(a,z,this.c,"weight",x.gf1(),x.x,x.r)
if(x.r1)x.a1(a,z,this.c,"bend1",x.gdT(),x.x,x.r)
a.a.disable(2929)
a.a.enable(3042)
if(x.ch)x.a1(a,z,this.c,"wireFrame",x.gf2(),x.f,x.e)
if(x.cy)x.a1(a,z,this.c,"normals",x.gei(),x.f,x.e)
if(x.db)x.a1(a,z,this.c,"binormals",x.gdU(),x.f,x.e)
if(x.dx)x.a1(a,z,this.c,"tangentals",x.geU(),x.f,x.e)
if(x.dy)x.a1(a,z,this.c,"textureCube",x.gf_(),x.f,x.e)
if(x.fx)x.a1(a,z,this.c,"faceNormals",x.ge5(),x.f,x.e)
if(x.fy)x.a1(a,z,this.c,"faceBinormals",x.ge3(),x.x,x.r)
if(x.go)x.a1(a,z,this.c,"faceTangentals",x.ge6(),x.x,x.r)
if(x.k3)x.a1(a,z,this.c,"Axis",x.gco(),x.z,x.y)
if(x.k4)x.a1(a,z,this.c,"AABB",x.gcl(),x.z,x.y)
a.a.enable(2929)
a.a.disable(3042)}}else this.e=null
z=x.a
z.toString
a.a.useProgram(null)
z.f.fl()}for(z=this.y.a,z=new J.aK(z,z.length,0,[H.w(z,0)]);z.L();)z.d.aN(a)
a.de()
a.dx.c1()},
gF:function(){var z=this.z
if(z==null){z=D.X()
this.z=z}return z},
ai:function(a){var z=this.z
if(!(z==null))z.H(a)},
U:function(){return this.ai(null)},
fN:[function(a){H.f(a,"$ist")
this.e=null
this.ai(a)},function(){return this.fN(null)},"hY","$1","$0","gda",0,2,6],
fM:[function(a){this.ai(H.f(a,"$ist"))},function(){return this.fM(null)},"hX","$1","$0","gd9",0,2,6],
fK:[function(a){this.ai(H.f(a,"$ist"))},function(){return this.fK(null)},"hV","$1","$0","gd8",0,2,6],
hU:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$ism",[E.aU],"$asm")
for(z=b.length,y=this.gd8(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.H)(b),++v){u=b[v]
if(u!=null){if(u.ga6()==null){t=new D.bX()
t.a=H.i([],w)
t.c=0
u.sa6(t)}t=u.ga6()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.U()},"$2","gfJ",8,0,14],
hW:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$ism",[E.aU],"$asm")
for(z=b.length,y=this.gd8(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.H)(b),++v){u=b[v]
if(u!=null){if(u.ga6()==null){t=new D.bX()
t.a=H.i([],w)
t.c=0
u.sa6(t)}t=u.ga6()
t.toString
H.d(y,x)
C.a.N(t.a,y)}}this.U()},"$2","gfL",8,0,14],
$iser:1},jo:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dD:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aj(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d0()
y=[V.c1]
z.a=H.i([],y)
x=z.gF()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.d(new E.jq(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d0()
z.a=H.i([],y)
v=z.gF()
v.toString
x=H.d(new E.jr(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d0()
z.a=H.i([],y)
y=z.gF()
y.toString
w=H.d(new E.js(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.i([],[O.db])
this.dy=z
C.a.h(z,null)
this.fr=new H.aL(0,0,[P.j,A.eE])},
dg:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaw(z):a;(z&&C.a).h(z,y)},
de:function(){var z=this.dy
if(z.length>1)z.pop()},
u:{
jp:function(a,b){var z=new E.jo(a,b)
z.dD(a,b)
return z}}},jq:{"^":"c:19;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.ch=null}},jr:{"^":"c:19;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},js:{"^":"c:19;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},jU:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a6:x@,0y,0z,0Q,0ch",
gF:function(){var z=this.x
if(z==null){z=D.X()
this.x=z}return z},
dK:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.H(a)
this.h1()},function(){return this.dK(null)},"dJ","$1","$0","gcj",0,2,6],
gfw:function(){var z,y,x
z=Date.now()
y=C.c.al(P.e6(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aj(z,!1)
return x/y},
cG:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.n(z)
x=C.e.be(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.m()
w=C.e.be(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
h1:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.jW(this),{func:1,ret:-1,args:[P.W]})
C.w.e2(z)
C.w.eK(z,W.fI(y,P.W))}},
h_:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cG()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aj(w,!1)
x.y=P.e6(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ay()
w=x.db
C.a.sl(w.a,0)
w.ay()
w=x.dx
C.a.sl(w.a,0)
w.ay()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aN(this.e)}}catch(v){z=H.aw(v)
y=H.bt(v)
P.dC("Error: "+H.k(z))
P.dC("Stack: "+H.k(y))
throw H.a(z)}},
u:{
jV:function(a,b,c,d,e){var z,y,x,w
z=J.P(a)
if(!!z.$iscQ)return E.eL(a,!0,!0,!0,!1)
y=W.dU(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbQ(a).h(0,y)
w=E.eL(y,!0,!0,!0,!1)
w.a=a
return w},
eL:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jU()
y=P.iI(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.h.cd(a,"webgl",y)
x=H.f(x==null?C.h.cd(a,"experimental-webgl",y):x,"$iseD")
if(x==null)H.I(P.T("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jp(x,a)
w=new T.jT(x)
w.b=H.B(x.getParameter(3379))
w.c=H.B(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kr(a)
v=new X.iC()
v.c=new X.aD(!1,!1,!1)
v.d=P.iK(null,null,null,P.l)
w.b=v
v=new X.iX(w)
v.f=0
v.r=new V.M(0,0)
v.x=new V.M(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iO(w)
v.r=0
v.x=new V.M(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.k_(w)
v.e=0
v.f=new V.M(0,0)
v.r=new V.M(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.i([],[[P.eH,P.b]])
w.z=v
u=document
t=W.aE
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a5(u,"contextmenu",H.d(w.gen(),s),!1,t))
v=w.z
r=W.ae
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a5(a,"focus",H.d(w.geq(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a5(a,"blur",H.d(w.gek(),q),!1,r))
v=w.z
p=W.bB
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a5(u,"keyup",H.d(w.ges(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a5(u,"keydown",H.d(w.ger(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a5(a,"mousedown",H.d(w.gev(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a5(a,"mouseup",H.d(w.gex(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a5(a,"mousemove",H.d(w.gew(),s),!1,t))
p=w.z
o=W.bL;(p&&C.a).h(p,W.a5(a,H.N(W.hL(a)),H.d(w.gey(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a5(u,"mousemove",H.d(w.geo(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a5(u,"mouseup",H.d(w.gep(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a5(u,"pointerlockchange",H.d(w.gez(),q),!1,r))
r=w.z
q=W.bj
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a5(a,"touchstart",H.d(w.geE(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a5(a,"touchend",H.d(w.geC(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a5(a,"touchmove",H.d(w.geD(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aj(Date.now(),!1)
z.ch=0
z.cG()
return z}}},jW:{"^":"c:31;a",
$1:function(a){var z
H.h1(a)
z=this.a
if(z.z){z.z=!1
z.h_()}}}}],["","",,Z,{"^":"",fb:{"^":"b;a,b",u:{
dj:function(a,b,c){var z
H.v(c,"$ish",[P.l],"$ash")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.cz(c)),35044)
a.bindBuffer(b,null)
return new Z.fb(b,z)}}},dP:{"^":"dM;a,b,c,d,e",
bK:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aw(y)
x=P.T('Failed to bind buffer attribute "'+J.ad(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.ad(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},kO:{"^":"b;a",$isot:1},dQ:{"^":"b;a,0b,c,d",
bd:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bK:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bK(a)},
h9:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aN:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
dc:function(a){this.bK(a)
this.aN(a)
this.h9(a)},
i:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.i([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.H)(x),++v)C.a.h(y,x[v].i(0))
u=H.i([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ad(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.G(y,", ")+"\nAttrs:   "+C.a.G(u,", ")},
$isjR:1},dR:{"^":"b;0a",$isjR:1},ck:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ba(this.c)+"'")+"]"}},di:{"^":"b;a",
gcf:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$bl().a)!==0)y+=2
if((z&$.$get$bm().a)!==0)y+=3
if((z&$.$get$aX().a)!==0)y+=3
if((z&$.$get$bK().a)!==0)y+=4
if((z&$.$get$bn().a)!==0)++y
return(z&$.$get$bk().a)!==0?y+4:y},
f9:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bl()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bk()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fa()},
D:function(a,b){if(b==null)return!1
if(!(b instanceof Z.di))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.i([],[P.j])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$bl().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$bm().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bK().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$bk().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.G(z,"|")},
u:{
at:function(a){return new Z.di(a)}}}}],["","",,D,{"^":"",cR:{"^":"b;"},bX:{"^":"b;0a,0b,0c",
H:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.v(y,new D.hP(z))
return x!==0},
h2:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.H(y)}}},
ap:function(a){return this.h2(a,!0,!1)},
u:{
X:function(){var z=new D.bX()
z.a=H.i([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hP:{"^":"c:32;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},ed:{"^":"t;c,d,a,0b,$ti"},ee:{"^":"t;c,d,a,0b,$ti"},C:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dS:{"^":"b;a,b",
D:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.D(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
u:{"^":"ov<"}},ei:{"^":"b;a,b",
D:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ei))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.D(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},ej:{"^":"t;c,a,0b"},iC:{"^":"b;0a,0b,0c,0d",
fU:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ej(a,this)
y.b=!0
return z.H(y)},
fQ:function(a){var z,y
this.c=a.b
this.d.N(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ej(a,this)
y.b=!0
return z.H(y)}},ep:{"^":"cn;x,y,c,d,e,a,0b"},iO:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
as:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aj(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.m()
v=b.b
u=this.ch
if(typeof v!=="number")return v.m()
t=y.t(0,new V.M(x*w,v*u))
u=this.a.gaG()
s=new X.bD(a,new V.M(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c0:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.H(this.as(a,b))
return!0},
aZ:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.du()
if(typeof z!=="number")return z.bj()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.as(a,b))
return!0},
aY:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.as(a,b))
return!0},
fV:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaG()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.m()
t=a.b
s=this.cy
if(typeof t!=="number")return t.m()
w=new X.d1(new V.a_(v*u,t*s),y,x,new P.aj(w,!1),this)
w.b=!0
z.H(w)
return!0},
eu:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aj(Date.now(),!1)
y=this.f
x=new X.ep(c,a,this.a.gaG(),b,z,this)
x.b=!0
y.H(x)
this.y=z
this.x=new V.M(0,0)}},aD:{"^":"b;a,b,c",
D:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aD))return!1
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
return z+(this.c?"Shift+":"")}},bD:{"^":"cn;x,y,z,Q,ch,c,d,e,a,0b"},iX:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bt:function(a,b,c){var z,y,x
z=new P.aj(Date.now(),!1)
y=this.a.gaG()
x=new X.bD(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c0:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.H(this.bt(a,b,!0))
return!0},
aZ:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.du()
if(typeof z!=="number")return z.bj()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.H(this.bt(a,b,!0))
return!0},
aY:function(a,b){var z=this.d
if(z==null)return!1
z.H(this.bt(a,b,!1))
return!0},
fW:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaG()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.m()
u=a.b
t=this.ch
if(typeof u!=="number")return u.m()
x=new X.d1(new V.a_(w*v,u*t),y,b,new P.aj(x,!1),this)
x.b=!0
z.H(x)
return!0},
gcU:function(){var z=this.b
if(z==null){z=D.X()
this.b=z}return z},
gdl:function(){var z=this.c
if(z==null){z=D.X()
this.c=z}return z},
gd7:function(){var z=this.d
if(z==null){z=D.X()
this.d=z}return z}},d1:{"^":"cn;x,c,d,e,a,0b"},cn:{"^":"t;"},eP:{"^":"cn;x,y,z,Q,ch,c,d,e,a,0b"},k_:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
as:function(a,b){var z,y,x,w
H.v(a,"$ish",[V.M],"$ash")
z=new P.aj(Date.now(),!1)
y=a.length>0?a[0]:new V.M(0,0)
x=this.a.gaG()
w=new X.eP(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fT:function(a){var z
H.v(a,"$ish",[V.M],"$ash")
z=this.b
if(z==null)return!1
z.H(this.as(a,!0))
return!0},
fR:function(a){var z
H.v(a,"$ish",[V.M],"$ash")
z=this.c
if(z==null)return!1
z.H(this.as(a,!0))
return!0},
fS:function(a){var z
H.v(a,"$ish",[V.M],"$ash")
z=this.d
if(z==null)return!1
z.H(this.as(a,!1))
return!0}},kr:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaG:function(){var z=this.a
return V.eB(0,0,(z&&C.h).gbb(z).c,C.h.gbb(z).d)},
cv:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ei(z,new X.aD(y,a.altKey,a.shiftKey))},
aE:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
bF:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
at:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.M(y-w,x-v)},
aS:function(a){return new V.a_(a.movementX,a.movementY)},
bA:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.i([],[V.M])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.H)(x),++v){u=x[v]
t=C.e.af(u.pageX)
C.e.af(u.pageY)
s=z.left
C.e.af(u.pageX)
C.a.h(y,new V.M(t-s,C.e.af(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dS(z,new X.aD(y,a.altKey,a.shiftKey))},
hx:[function(a){this.f=!0},"$1","geq",4,0,11],
hr:[function(a){this.f=!1},"$1","gek",4,0,11],
hu:[function(a){if(this.f)a.preventDefault()},"$1","gen",4,0,11],
hz:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cv(a)
if(this.b.fU(z))a.preventDefault()},"$1","ges",4,0,27],
hy:[function(a){var z
H.f(a,"$isbB")
if(!this.f)return
z=this.cv(a)
if(this.b.fQ(z))a.preventDefault()},"$1","ger",4,0,27],
hA:[function(a){var z,y,x,w
H.f(a,"$isaE")
z=this.a
z.focus()
this.f=!0
this.aE(a)
if(this.x){y=this.ar(a)
x=this.aS(a)
if(this.d.c0(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.at(a)
if(this.c.c0(y,w))a.preventDefault()},"$1","gev",4,0,10],
hC:[function(a){var z,y,x
H.f(a,"$isaE")
this.aE(a)
z=this.ar(a)
if(this.x){y=this.aS(a)
if(this.d.aZ(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.aZ(z,x))a.preventDefault()},"$1","gex",4,0,10],
hw:[function(a){var z,y,x,w
H.f(a,"$isaE")
z=this.a
if(!(z&&C.h).gbb(z).cT(0,new P.bG(a.clientX,a.clientY,[P.W]))){this.aE(a)
y=this.ar(a)
if(this.x){x=this.aS(a)
if(this.d.aZ(y,x))a.preventDefault()
return}if(this.r)return
w=this.at(a)
if(this.c.aZ(y,w))a.preventDefault()}},"$1","gep",4,0,10],
hB:[function(a){var z,y,x
H.f(a,"$isaE")
this.aE(a)
z=this.ar(a)
if(this.x){y=this.aS(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.aY(z,x))a.preventDefault()},"$1","gew",4,0,10],
hv:[function(a){var z,y,x,w
H.f(a,"$isaE")
z=this.a
if(!(z&&C.h).gbb(z).cT(0,new P.bG(a.clientX,a.clientY,[P.W]))){this.aE(a)
y=this.ar(a)
if(this.x){x=this.aS(a)
if(this.d.aY(y,x))a.preventDefault()
return}if(this.r)return
w=this.at(a)
if(this.c.aY(y,w))a.preventDefault()}},"$1","geo",4,0,10],
hD:[function(a){var z,y
H.f(a,"$isbL")
this.aE(a)
z=new V.a_((a&&C.v).gfj(a),C.v.gfk(a)).p(0,180)
if(this.x){if(this.d.fV(z))a.preventDefault()
return}if(this.r)return
y=this.at(a)
if(this.c.fW(z,y))a.preventDefault()},"$1","gey",4,0,35],
hE:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.at(this.y)
this.d.eu(w,v,x)}},"$1","gez",4,0,11],
hI:[function(a){var z
H.f(a,"$isbj")
this.a.focus()
this.f=!0
this.bF(a)
z=this.bA(a)
if(this.e.fT(z))a.preventDefault()},"$1","geE",4,0,18],
hG:[function(a){var z
H.f(a,"$isbj")
this.bF(a)
z=this.bA(a)
if(this.e.fR(z))a.preventDefault()},"$1","geC",4,0,18],
hH:[function(a){var z
H.f(a,"$isbj")
this.bF(a)
z=this.bA(a)
if(this.e.fS(z))a.preventDefault()},"$1","geD",4,0,18]}}],["","",,V,{"^":"",
ox:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","iU",8,0,37],
ok:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.b3(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.b.ae("null",c)
return C.b.ae(C.e.dk($.p.$2(a,0)?0:a,b),c+b+1)},
cF:function(a,b,c){var z,y,x,w,v
H.v(a,"$ish",[P.r],"$ash")
z=H.i([],[P.j])
for(y=0,x=0;x<4;++x){w=V.G(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.e(z,v)
C.a.k(z,v,C.b.ae(z[v],y))}return z},
a2:{"^":"b;a,b,c",
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
dY:function(a,b,c){var z,y,x,w,v,u,t,s
a*=6
z=C.e.be(a)
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
Q:{"^":"b;a,b,c,d",
c9:function(a){return H.i([this.a,this.b,this.c,this.d],[P.r])},
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
return new V.Q(z,y,x,w)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
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
c1:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ca:function(a,b){var z=H.i([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
m:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isc1")
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
return V.aM(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c1))return!1
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
i:function(a){return this.P()},
cX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.cF(H.i([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cF(H.i([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cF(H.i([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cF(H.i([this.d,this.x,this.ch,this.dx],z),b,c)
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
E:function(a){return this.cX(a,3,0)},
P:function(){return this.cX("",3,0)},
u:{
aM:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.c1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cm:function(){return V.aM(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
M:{"^":"b;w:a>,C:b>",
t:function(a,b){return new V.M(this.a+b.a,this.b+b.b)},
I:function(a,b){return new V.M(this.a-b.a,this.b-b.b)},
m:function(a,b){return new V.M(this.a*b,this.b*b)},
p:function(a,b){if($.p.$2(b,0))return new V.M(0,0)
return new V.M(this.a/b,this.b/b)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
R:{"^":"b;w:a>,C:b>,c",
t:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.n(w)
return new V.R(this.a+z,this.b+y,x+w)},
I:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.I()
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
ao:{"^":"b;w:a>,C:b>,c,d",
m:function(a,b){return new V.ao(this.a*b,this.b*b,this.c*b,this.d*b)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
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
eA:{"^":"b;w:a>,C:b>,c,d",
ga9:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eA))return!1
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
eB:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eA(a,b,c,d)}}},
d7:{"^":"b;w:a>,C:b>,c,d,e,f",
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d7))return!1
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
eC:function(a,b,c,d,e,f){return new V.d7(a,b,c,d,e,f)}}},
a_:{"^":"b;a,b",
d5:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,20],
B:function(a){var z,y,x,w
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
o:{"^":"b;a,b,c",
d5:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,20],
B:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.n(y)
return this.a*a.a+this.b*a.b+z*y},
bX:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.I()
if(typeof x!=="number")return H.n(x)
return new V.o(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
ah:function(a){var z,y,x,w,v,u
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
O:function(a){var z=this.c
if(typeof z!=="number")return z.O()
return new V.o(-this.a,-this.b,-z)},
m:function(a,b){var z=this.c
if(typeof z!=="number")return z.m()
return new V.o(this.a*b,this.b*b,z*b)},
p:function(a,b){var z
if($.p.$2(b,0))return new V.o(0,0,0)
z=this.c
if(typeof z!=="number")return z.p()
return new V.o(this.a/b,this.b/b,z/b)},
d4:function(){if(!$.p.$2(0,this.a))return!1
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
bJ:{"^":"b;a,b,c,d",
d5:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gl",1,0,20],
m:function(a,b){return new V.bJ(this.a*b,this.b*b,this.c*b,this.d*b)},
p:function(a,b){if($.p.$2(b,0))return new V.bJ(0,0,0,0)
return new V.bJ(this.a/b,this.b/b,this.c/b,this.d/b)},
D:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bJ))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}}}],["","",,U,{"^":"",hw:{"^":"cR;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bo:function(a){var z=V.ok(a,this.c,this.b)
return z},
gF:function(){var z=this.y
if(z==null){z=D.X()
this.y=z}return z},
V:function(a){var z=this.y
if(!(z==null))z.H(a)},
scb:function(a,b){},
sbY:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bo(z)}z=new D.C("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.V(z)}},
sc_:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bo(z)}z=new D.C("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.V(z)}},
sX:function(a,b){var z,y
b=this.bo(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.C("location",y,b,this,[P.r])
z.b=!0
this.V(z)}},
sbZ:function(a){var z,y,x
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
this.V(z)}},
sY:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.C("velocity",x,a,this,[P.r])
z.b=!0
this.V(z)}},
sbT:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.C("dampening",y,a,this,[P.r])
z.b=!0
this.V(z)}},
aP:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sX(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sY(y)}},
u:{
cS:function(){var z=new U.hw()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dZ:{"^":"ak;0a,0b",
gF:function(){var z=this.b
if(z==null){z=D.X()
this.b=z}return z},
aQ:function(a,b,c){return this.a},
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dZ))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}},e9:{"^":"b1;0e,0f,0r,0a,0b,0c,0d",
gF:function(){var z=this.e
if(z==null){z=D.X()
this.e=z}return z},
V:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.H(a)},function(){return this.V(null)},"ag","$1","$0","gaD",0,2,6],
hq:[function(a,b){var z,y,x,w,v,u,t
z=U.ak
H.v(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.H)(b),++v){u=b[v]
if(u!=null){t=u.gF()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.ed(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gej",8,0,24],
hF:[function(a,b){var z,y,x,w,v,u,t
z=U.ak
H.v(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gaD(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.H)(b),++v){u=b[v]
if(u!=null){t=u.gF()
t.toString
H.d(x,w)
C.a.N(t.a,x)}}z=new D.ee(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geB",8,0,24],
aQ:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.aK(z,z.length,0,[H.w(z,0)]),x=null;z.L();){y=z.d
if(y!=null){w=y.aQ(0,b,c)
if(w!=null)x=x==null?w:w.m(0,x)}}this.f=x==null?V.cm():x
z=this.e
if(!(z==null))z.ap(0)}return this.f},
D:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e9))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.E(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asm:function(){return[U.ak]},
$asb1:function(){return[U.ak]},
$isak:1},ak:{"^":"cR;"},ks:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gF:function(){var z=this.cy
if(z==null){z=D.X()
this.cy=z}return z},
V:[function(a){var z
H.f(a,"$ist")
z=this.cy
if(!(z==null))z.H(a)},function(){return this.V(null)},"ag","$1","$0","gaD",0,2,6],
aT:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcU()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.d(this.gbv(),y)
C.a.h(z.a,x)
x=this.a.c.gd7()
x.toString
z=H.d(this.gbw(),y)
C.a.h(x.a,z)
z=this.a.c.gdl()
z.toString
y=H.d(this.gbx(),y)
C.a.h(z.a,y)
return!0},
ee:[function(a){H.f(a,"$ist")
if(!J.E(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbv",4,0,5],
ef:[function(a){var z,y,x,w,v,u,t
a=H.ai(H.f(a,"$ist"),"$isbD")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.a_(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.a_(y.a,y.b).m(0,2).p(0,z.ga9())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.m()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sY(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.a_(x.a,x.b).m(0,2).p(0,z.ga9())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sX(0,-v*u+t)
this.b.sY(0)
y=y.I(0,a.z)
this.Q=new V.a_(y.a,y.b).m(0,2).p(0,z.ga9())}this.ag()},"$1","gbw",4,0,5],
eg:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.m()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sY(y*10*x)
this.ag()}},"$1","gbx",4,0,5],
aQ:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.ch=y
x=b.y
this.b.aP(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aM(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isak:1},kt:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gF:function(){var z=this.fx
if(z==null){z=D.X()
this.fx=z}return z},
V:[function(a){var z
H.f(a,"$ist")
z=this.fx
if(!(z==null))z.H(a)},function(){return this.V(null)},"ag","$1","$0","gaD",0,2,6],
aT:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcU()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.d(this.gbv(),y)
C.a.h(z.a,x)
x=this.a.c.gd7()
x.toString
z=H.d(this.gbw(),y)
C.a.h(x.a,z)
z=this.a.c.gdl()
z.toString
x=H.d(this.gbx(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.X()
x.f=z}x=H.d(this.gea(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.X()
x.d=z}x=H.d(this.geb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.X()
x.b=z}x=H.d(this.geX(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.X()
x.d=z}x=H.d(this.geW(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.X()
x.c=z}y=H.d(this.geV(),y)
C.a.h(z.a,y)
return!0},
ak:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.a_(z,y)},
ee:[function(a){a=H.ai(H.f(a,"$ist"),"$isbD")
if(!J.E(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbv",4,0,5],
ef:[function(a){var z,y,x,w,v,u,t
a=H.ai(H.f(a,"$ist"),"$isbD")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.a_(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ak(new V.a_(y.a,y.b).m(0,2).p(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ak(new V.a_(x.a,x.b).m(0,2).p(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sX(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.I(0,a.z)
this.dx=this.ak(new V.a_(y.a,y.b).m(0,2).p(0,z.ga9()))}this.ag()},"$1","gbw",4,0,5],
eg:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sY(-y*10*z)
this.ag()}},"$1","gbx",4,0,5],
hm:[function(a){if(H.ai(H.f(a,"$ist"),"$isep").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gea",4,0,5],
hn:[function(a){var z,y,x,w,v,u,t
a=H.ai(H.f(a,"$ist"),"$isbD")
if(!J.E(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ak(new V.a_(x.a,x.b).m(0,2).p(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sX(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.I(0,a.z)
this.dx=this.ak(new V.a_(y.a,y.b).m(0,2).p(0,z.ga9()))
this.ag()},"$1","geb",4,0,5],
hN:[function(a){H.f(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geX",4,0,5],
hM:[function(a){var z,y,x,w,v,u,t
a=H.ai(H.f(a,"$ist"),"$iseP")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.a_(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ak(new V.a_(y.a,y.b).m(0,2).p(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ak(new V.a_(x.a,x.b).m(0,2).p(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sX(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sX(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.I(0,a.z)
this.dx=this.ak(new V.a_(y.a,y.b).m(0,2).p(0,z.ga9()))}this.ag()},"$1","geW",4,0,5],
hL:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sY(-y*10*z)
this.ag()}},"$1","geV",4,0,5],
aQ:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.dy=y
x=b.y
this.c.aP(0,x)
this.b.aP(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aM(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.m(0,V.aM(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isak:1},ku:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gF:function(){var z=this.r
if(z==null){z=D.X()
this.r=z}return z},
V:function(a){var z=this.r
if(!(z==null))z.H(a)},
aT:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.X()
z.e=y
z=y}else z=y
y=H.d(this.geh(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.X()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
ho:[function(a){var z,y,x,w
H.f(a,"$ist")
if(!J.E(this.b,this.a.b.c))return
H.ai(a,"$isd1")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.m()
w=z+y*x
if(z!==w){this.d=w
z=new D.C("zoom",z,w,this,[P.r])
z.b=!0
this.V(z)}},"$1","geh",4,0,5],
aQ:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aM(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isak:1}}],["","",,M,{"^":"",hN:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
az:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.H(a)},function(){return this.az(null)},"ha","$1","$0","gaj",0,2,6],
hs:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aU
H.v(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.H)(b),++u){t=b[u]
if(t!=null){if(t.ga6()==null){s=new D.bX()
s.a=H.i([],v)
s.c=0
t.sa6(s)}s=t.ga6()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.ed(a,b,this,[z])
z.b=!0
this.az(z)},"$2","gel",8,0,14],
ht:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aU
H.v(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.H)(b),++u){t=b[u]
if(t!=null){if(t.ga6()==null){s=new D.bX()
s.a=H.i([],v)
s.c=0
t.sa6(s)}s=t.ga6()
s.toString
H.d(x,w)
C.a.N(s.a,x)}}z=new D.ee(a,b,this,[z])
z.b=!0
this.az(z)},"$2","gem",8,0,14],
sdi:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gF()
z.toString
y=H.d(this.gaj(),{func:1,ret:-1,args:[D.t]})
C.a.N(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gF()
z.toString
y=H.d(this.gaj(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.C("technique",x,this.c,this,[O.db])
z.b=!0
this.az(z)}},
gF:function(){var z=this.x
if(z==null){z=D.X()
this.x=z}return z},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
a.dg(this.c)
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
u=C.c.af(v.a*x)
if(typeof w!=="number")return H.n(w)
t=C.c.af(v.b*w)
s=C.c.af(v.c*x)
a.c=s
v=C.c.af(v.d*w)
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
s.df(V.aM(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.ew
if(y==null){y=new V.o(0,0,-1)
m=y.p(0,Math.sqrt(y.B(y)))
y=new V.o(0,1,0).ah(m)
l=y.p(0,Math.sqrt(y.B(y)))
k=m.ah(l)
j=new V.o(0,0,0)
y=V.aM(l.a,k.a,m.a,l.O(0).B(j),l.b,k.b,m.b,k.O(0).B(j),l.c,k.c,m.c,m.O(0).B(j),0,0,0,1)
$.ew=y
i=y}else i=y
z=z.a
if(z!=null){h=z.a
if(h!=null)i=h.m(0,i)}a.db.df(i)
for(z=this.d.a,z=new J.aK(z,z.length,0,[H.w(z,0)]);z.L();)z.d.aP(0,a)
for(z=this.d.a,z=new J.aK(z,z.length,0,[H.w(z,0)]);z.L();)z.d.aN(a)
this.a.toString
a.cy.c1()
a.db.c1()
this.b.toString
a.de()},
$ispJ:1}}],["","",,A,{"^":"",dJ:{"^":"b;a,b,c"},hi:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fm:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fl:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hZ:{"^":"eE;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,a,b,0c,0d,0e,0f,0r"},eE:{"^":"dM;",
dF:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cw:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fM(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.T("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
eO:function(){var z,y,x,w,v,u
z=H.i([],[A.dJ])
y=this.a
x=H.B(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dJ(y,v.name,u))}this.f=new A.hi(z)},
eQ:function(){var z,y,x,w,v,u
z=H.i([],[A.ag])
y=this.a
x=H.B(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fi(v.type,v.size,v.name,u))}this.r=new A.ka(z)},
aC:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.k3(z,y,b,c)
else return A.de(z,y,b,a,c)},
e_:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ke(z,y,b,c)
else return A.de(z,y,b,a,c)},
e0:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.kf(z,y,b,c)
else return A.de(z,y,b,a,c)},
b8:function(a,b){return new P.fe(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
fi:function(a,b,c,d){switch(a){case 5120:return this.aC(b,c,d)
case 5121:return this.aC(b,c,d)
case 5122:return this.aC(b,c,d)
case 5123:return this.aC(b,c,d)
case 5124:return this.aC(b,c,d)
case 5125:return this.aC(b,c,d)
case 5126:return new A.f1(this.a,this.e,c,d)
case 35664:return new A.k5(this.a,this.e,c,d)
case 35665:return new A.cs(this.a,this.e,c,d)
case 35666:return new A.k8(this.a,this.e,c,d)
case 35667:return new A.k6(this.a,this.e,c,d)
case 35668:return new A.k7(this.a,this.e,c,d)
case 35669:return new A.k9(this.a,this.e,c,d)
case 35674:return new A.kc(this.a,this.e,c,d)
case 35675:return new A.kd(this.a,this.e,c,d)
case 35676:return new A.ct(this.a,this.e,c,d)
case 35678:return this.e_(b,c,d)
case 35680:return this.e0(b,c,d)
case 35670:throw H.a(this.b8("BOOL",c))
case 35671:throw H.a(this.b8("BOOL_VEC2",c))
case 35672:throw H.a(this.b8("BOOL_VEC3",c))
case 35673:throw H.a(this.b8("BOOL_VEC4",c))
default:throw H.a(P.T("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},ag:{"^":"b;"},ka:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.P()},
fv:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.H)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.fv("\n")}},k3:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},k6:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},k7:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},k9:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},k4:{"^":"ag;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
u:{
de:function(a,b,c,d,e){var z=new A.k4(a,b,c,e)
z.f=d
z.e=P.iL(d,0,!1,P.l)
return z}}},f1:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},k5:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},cs:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},k8:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},kc:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},kd:{"^":"ag;a,b,c,d",
i:function(a){return"UniformMat3: "+H.k(this.c)}},ct:{"^":"ag;a,b,c,d",
bm:function(a){var z=new Float32Array(H.cz(H.v(a,"$ish",[P.r],"$ash")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},ke:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},kf:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cC:function(a,b,c,d){var z
H.d(c,{func:1,ret:-1,args:[F.A,P.r,P.r]})
z=F.a0()
F.bQ(z,b,c,d,a,1,0,0,1)
F.bQ(z,b,c,d,a,0,1,0,3)
F.bQ(z,b,c,d,a,0,0,1,2)
F.bQ(z,b,c,d,a,-1,0,0,0)
F.bQ(z,b,c,d,a,0,-1,0,0)
F.bQ(z,b,c,d,a,0,0,-1,3)
z.ac()
return z},
cy:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.a8()
return(y>0?z+4:z)*2},
bQ:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.d(c,{func:1,ret:-1,args:[F.A,P.r,P.r]})
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
z.d=y}l=F.cy(y)
k=F.cy(z.b)
j=F.cc(d,e,new F.mz(z,F.cy(z.c),F.cy(z.d),k,l,c),b)
if(j!=null)a.aK(j)},
cD:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.d(d,{func:1,ret:P.r,args:[P.r]})
if(d==null)d=new F.mZ()
if(e<3)return
z=F.a0()
y=b?-1:1
x=-6.283185307179586/e
w=H.i([],[F.A])
v=z.a
u=new V.o(0,0,y)
u=u.p(0,Math.sqrt(u.B(u)))
C.a.h(w,v.f6(new V.ao(a,-1,-1,-1),new V.Q(1,1,1,1),new V.R(0,0,c),new V.o(0,0,y),new V.M(0.5,0.5),u))
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
k=F.as(new V.ao(a,-1,-1,-1),null,new V.Q(n,l,m,1),new V.R(r*p,q*p,c),new V.o(0,0,y),new V.M(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.cP(w)
return z},
dv:function(a,b,c,d,e,f){return F.fN(!0,c,d,new F.mT(a,f),e)},
fN:function(a,b,c,d,e){var z
H.d(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
z=F.cc(c,e,new F.mV(d),null)
if(z==null)return
z.ac()
z.ba()
if(b)z.aK(F.cD(3,!1,1,new F.mW(d),e))
z.aK(F.cD(1,!0,-1,new F.mX(d),e))
return z},
fZ:function(a,b){var z=F.cc(a,b,new F.ne(),null)
z.d.bh()
z.ac()
z.ba()
return z},
fY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.a0()
y=Math.sqrt(5)/2+0.5
x=F.ah(z,new V.o(-1,y,0))
w=F.ah(z,new V.o(1,y,0))
v=-y
u=F.ah(z,new V.o(-1,v,0))
t=F.ah(z,new V.o(1,v,0))
s=F.ah(z,new V.o(0,-1,v))
r=F.ah(z,new V.o(0,1,v))
q=F.ah(z,new V.o(0,-1,y))
p=F.ah(z,new V.o(0,1,y))
o=F.ah(z,new V.o(y,0,1))
n=F.ah(z,new V.o(y,0,-1))
m=F.ah(z,new V.o(v,0,1))
l=F.ah(z,new V.o(v,0,-1))
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
z.d6(new F.dh(),new F.kH())
return z},
ah:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.B(b)))
z=b.a
y=b.b
x=b.c
w=F.as(null,null,null,new V.R(z,y,x),b,null,null,null,0)
v=a.fo(w,new F.dh())
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
w.sa3(0,new V.Q(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sc8(new V.M(q,p<0?-p:p))
a.a.h(0,w)
return w},
Z:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.a2(0,b,d,c)
else{z=F.ah(a,b.r.t(0,c.r).m(0,0.5))
y=F.ah(a,c.r.t(0,d.r).m(0,0.5))
x=F.ah(a,d.r.t(0,b.r).m(0,0.5))
w=e-1
F.Z(a,b,z,x,w)
F.Z(a,z,c,y,w)
F.Z(a,y,x,z,w)
F.Z(a,x,y,d,w)}},
dE:function(a,b,c){var z,y
z={}
z.a=b
if(H.d(b,{func:1,ret:P.r,args:[P.r,P.r]})==null)z.a=new F.oe()
y=F.cC(a,null,new F.of(z),c)
y.ba()
return y},
oh:function(a,b,c,d){return F.fO(c,a,d,b,new F.oi())},
nc:function(a,b,c,d,e,f){return F.fO(d,a,e,b,new F.nd(f,c))},
fO:function(a,b,c,d,e){var z=F.cc(a,b,new F.mU(H.d(e,{func:1,ret:V.R,args:[P.r]}),d,b,c),null)
if(z==null)return
z.ac()
z.ba()
return z},
fU:function(a,b,c){var z={}
z.a=b
if(H.d(b,{func:1,ret:P.r,args:[P.r,P.r]})==null)z.a=new F.n3()
return F.cc(c,a,new F.n4(z),null)},
cc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.A,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.a0()
y=H.i([],[F.A])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.as(null,null,new V.Q(u,0,0,1),null,null,new V.M(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bS(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.as(null,null,new V.Q(o,n,m,1),null,null,new V.M(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bS(d))}}z.d.f5(a+1,b+1,y)
return z},
mz:{"^":"c:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bX(z.b,b).bX(z.d.bX(z.c,b),c)
a.sX(0,new V.R(y.a,y.b,y.c))
a.sb_(y.p(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
a.sbJ(new V.ao(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mZ:{"^":"c:17;",
$1:function(a){return 1}},
mT:{"^":"c:9;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mV:{"^":"c:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.n(v)
y=-y*v
u=x*v
a.sX(0,new V.R(y,u,w))
u=new V.o(y,u,w)
a.sb_(u.p(0,Math.sqrt(u.B(u))))
a.sbJ(new V.ao(1-c,2+c,-1,-1))}},
mW:{"^":"c:17;a",
$1:function(a){return this.a.$2(a,1)}},
mX:{"^":"c:17;a",
$1:function(a){return this.a.$2(1-a,0)}},
ne:{"^":"c:7;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.o(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.p(0,Math.sqrt(w.B(w)))
a.sX(0,new V.R(x.a,x.b,x.c))}},
oe:{"^":"c:9;",
$2:function(a,b){return 0}},
of:{"^":"c:7;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.n(z)
y=a.f
x=new V.o(y.a,y.b,y.c)
z=x.p(0,Math.sqrt(x.B(x))).m(0,1+z)
a.sX(0,new V.R(z.a,z.b,z.c))}},
oi:{"^":"c:21;",
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)}},
nd:{"^":"c:21;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.R(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mU:{"^":"c:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dF(y.$1(z),x)
x=J.dF(y.$1(z+3.141592653589793/this.c),x).I(0,w)
x=new V.o(x.a,x.b,x.c)
v=x.p(0,Math.sqrt(x.B(x)))
u=new V.o(1,0,0)
y=v.ah(!v.D(0,u)?new V.o(0,0,1):u)
t=y.p(0,Math.sqrt(y.B(y)))
y=t.ah(v)
u=y.p(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.m(0,y*x)
x=t.m(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.I()
if(typeof q!=="number")return H.n(q)
a.sX(0,w.t(0,new V.R(y.a-x.a,y.b-x.b,r-q)))}},
n3:{"^":"c:9;",
$2:function(a,b){return 0}},
n4:{"^":"c:7;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sX(0,new V.R(z,y,this.a.a.$2(b,c)))
x=new V.o(z,y,1)
a.sb_(x.p(0,Math.sqrt(x.B(x))))
x=1-b
w=1-c
a.sbJ(new V.ao(b*c,2+x*c,4+b*w,6+x*w))}},
J:{"^":"b;0a,0b,0c,0d,0e",
au:function(){if(!this.gaV()){C.a.N(this.a.a.d.b,this)
this.a.a.U()}this.bC()
this.bD()
this.eH()},
bG:function(a){this.a=a
C.a.h(a.d.b,this)},
bH:function(a){this.b=a
C.a.h(a.d.c,this)},
eN:function(a){this.c=a
C.a.h(a.d.d,this)},
bC:function(){var z=this.a
if(z!=null){C.a.N(z.d.b,this)
this.a=null}},
bD:function(){var z=this.b
if(z!=null){C.a.N(z.d.c,this)
this.b=null}},
eH:function(){var z=this.c
if(z!=null){C.a.N(z.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
dR:function(){var z,y,x,w,v
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
if(v.d4())return
return v.p(0,Math.sqrt(v.B(v)))},
dX:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.o(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.B(z)))
z=w.I(0,y)
z=new V.o(z.a,z.b,z.c)
z=v.ah(z.p(0,Math.sqrt(z.B(z))))
return z.p(0,Math.sqrt(z.B(z)))},
bP:function(){if(this.d!=null)return!0
var z=this.dR()
if(z==null){z=this.dX()
if(z==null)return!1}this.d=z
this.a.a.U()
return!0},
dQ:function(){var z,y,x,w,v
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
if(v.d4())return
return v.p(0,Math.sqrt(v.B(v)))},
dW:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.I(0,u)
z=new V.o(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.I(0,u).m(0,l).t(0,u).I(0,x)
z=new V.o(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.B(z)))
z=k.ah(m)
z=z.p(0,Math.sqrt(z.B(z))).ah(k)
m=z.p(0,Math.sqrt(z.B(z)))}return m},
bN:function(){if(this.e!=null)return!0
var z=this.dQ()
if(z==null){z=this.dW()
if(z==null)return!1}this.e=z
this.a.a.U()
return!0},
aA:function(a,b){var z=b.a
if(z==null)throw H.a(P.T("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.T("May not replace a face's vertex with a vertex attached to a different shape."))},
gff:function(a){if(J.E(this.a,this.b))return!0
if(J.E(this.b,this.c))return!0
if(J.E(this.c,this.a))return!0
return!1},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var z,y
if(this.gaV())return a+"disposed"
z=a+C.b.ae(J.ad(this.a.e),0)+", "+C.b.ae(J.ad(this.b.e),0)+", "+C.b.ae(J.ad(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.E("")},
u:{
b4:function(a,b,c){var z,y,x
z=new F.J()
y=a.a
if(y==null)H.I(P.T("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.I(P.T("May not create a face with vertices attached to different shapes."))
z.bG(a)
z.bH(b)
z.eN(c)
C.a.h(z.a.a.d.b,z)
z.a.a.U()
return z}}},
hQ:{"^":"b;"},
jG:{"^":"hQ;",
aJ:function(a,b,c){var z,y
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
b7:{"^":"b;0a,0b",
au:function(){if(!this.gaV()){C.a.N(this.a.a.c.b,this)
this.a.a.U()}this.bC()
this.bD()},
bG:function(a){this.a=a
C.a.h(a.c.b,this)},
bH:function(a){this.b=a
C.a.h(a.c.c,this)},
bC:function(){var z=this.a
if(z!=null){C.a.N(z.c.b,this)
this.a=null}},
bD:function(){var z=this.b
if(z!=null){C.a.N(z.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
aA:function(a,b){var z=b.a
if(z==null)throw H.a(P.T("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.T("May not replace a line's vertex with a vertex attached to a different shape."))},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){if(this.gaV())return a+"disposed"
return a+C.b.ae(J.ad(this.a.e),0)+", "+C.b.ae(J.ad(this.b.e),0)},
P:function(){return this.E("")},
u:{
ek:function(a,b){var z,y,x
z=new F.b7()
if(a==null)H.I(P.T("May not create a line with a null start vertex."))
if(b==null)H.I(P.T("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.I(P.T("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.I(P.T("May not create a line with vertices attached to different shapes."))
z.bG(a)
z.bH(b)
C.a.h(z.a.a.c.b,z)
z.a.a.U()
return z}}},
iD:{"^":"b;"},
k2:{"^":"iD;",
aJ:function(a,b,c){var z,y
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
d5:{"^":"b;0a",
au:function(){var z=this.a
if(z!=null){C.a.N(z.a.b.b,this)
this.a.a.U()}this.eG()},
eM:function(a){this.a=a
C.a.h(a.b.b,this)},
eG:function(){var z=this.a
if(z!=null){C.a.N(z.b.b,this)
this.a=null}},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ae(J.ad(z.e),0)},
P:function(){return this.E("")},
u:{
d6:function(a){var z=new F.d5()
if(a.a==null)H.I(P.T("May not create a point with a vertex which is not attached to a shape."))
z.eM(a)
C.a.h(z.a.a.b.b,z)
z.a.a.U()
return z}}},
a6:{"^":"b;0a,0b,0c,0d,0e",
gF:function(){var z=this.e
if(z==null){z=D.X()
this.e=z}return z},
aK:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.c
a.a.q()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.H)(z),++w){v=z[w]
this.a.h(0,v.Z())}this.a.q()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.H)(z),++w){u=z[w]
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
F.d6(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.H)(z),++w){q=z[w]
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
F.ek(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.H)(z),++w){n=z[w]
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
F.b4(p,o,m)}z=this.e
if(!(z==null))z.ap(0)},
ac:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ac()||!1
if(!this.a.ac())y=!1
z=this.e
if(!(z==null))z.ap(0)
return y},
fe:function(a){var z,y,x,w,v,u,t,s,r
z=this.cS()
y=new V.o(z.d,z.e,z.f)
x=Math.sqrt(y.B(y))
if(x<=0)x=1
a=new F.jg()
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
if(typeof y!=="number")return y.I()
if(typeof u!=="number")return H.n(u)
r=y-u
u=Math.sqrt(t*t+s*s+r*r)*a.a
if(v.ch!==u){v.ch=u
y=v.a
if(y!=null){y=y.e
if(!(y==null))y.H(null)}}}},
fd:function(){return this.fe(null)},
cS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.c
y=z.length
if(y<=0)return V.eC(0,0,0,0,0,0)
z=z[0].f
x=V.eC(z.a,z.b,z.c,0,0,0)
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
if(typeof v!=="number")return v.K()
if(typeof n!=="number")return H.n(n)
if(v<n){o+=n-v
m=v}else{if(v>n+o)o=v-n
m=n}x=new V.d7(u,t,m,s,q,o)}return x},
fp:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.e(x,y)
w=x[y]
if(b.aJ(0,a,w))return w}return},
fo:function(a,b){return this.fp(a,b,0)},
e8:function(a,b,c,d,e){var z,y,x
H.v(d,"$ish",[F.A],"$ash")
H.v(e,"$ish",[P.l],"$ash")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.aJ(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
eJ:function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$ish",[P.l],"$ash")
H.jJ(b,J.mH(),H.w(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.e(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.e(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.j(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.I(P.T("May not replace a face's vertex when the point has been disposed."))
if(J.E(v,w)){x.aA(w,a)
v=x.a
if(v!=null){C.a.N(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.E(x.b,w)){x.aA(w,a)
v=x.b
if(v!=null){C.a.N(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.E(x.c,w)){x.aA(w,a)
v=x.c
if(v!=null){C.a.N(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.H(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.j(0,0)
v=x.a
if(v==null||x.b==null)H.I(P.T("May not replace a line's vertex when the point has been disposed."))
if(J.E(v,w)){x.aA(w,a)
v=x.a
if(v!=null){C.a.N(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.E(x.b,w)){x.aA(w,a)
v=x.b
if(v!=null){C.a.N(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.H(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.I(P.T("May not replace a point's vertex when the point has been disposed."))
if(J.E(v,w)){if(a.a==null)H.I(P.T("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.N(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.H(null)}}x=this.a
v=x.c
if(y>=v.length)return H.e(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.I(P.T("May not remove a vertex without first making it empty."))
t.a=null
C.a.fY(v,y)
v=x.a.e
if(!(v==null))v.H(null)
x.b=!0}},
d6:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.A],x=[P.l];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.i([],z)
t=H.i([],x)
if(this.e8(a,v,y,u,t)){s=b.aK(u)
if(s!=null){this.eJ(s,t)
y-=t.length}}}this.a.q()
this.c.bh()
this.d.bh()
this.b.fZ()
this.c.c3(new F.k2())
this.d.c3(new F.jG())
z=this.e
if(!(z==null))z.ap(0)},
f8:function(a){this.d6(new F.dh(),new F.j0())},
ba:function(){return this.f8(null)},
fb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aQ().a)!==0?1:0
if((y&$.$get$aP().a)!==0)++x
if((y&$.$get$aO().a)!==0)++x
if((y&$.$get$bl().a)!==0)++x
if((y&$.$get$bm().a)!==0)++x
if((y&$.$get$aX().a)!==0)++x
if((y&$.$get$bK().a)!==0)++x
if((y&$.$get$bn().a)!==0)++x
if((y&$.$get$bk().a)!==0)++x
w=b.gcf(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.r
t=H.i(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.i(y,[Z.dP])
for(r=0,q=0;q<x;++q){p=b.f9(q)
o=p.gcf(p)
C.a.k(s,q,new Z.dP(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].fE(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.k(t,l,m[k]);++l}}r+=o}H.v(t,"$ish",[u],"$ash")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.cz(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dQ(new Z.fb(34962,j),s,b)
i.b=H.i([],[Z.ck])
if(this.b.b.length!==0){u=P.l
h=H.i([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)}f=Z.dj(y,34963,H.v(h,"$ish",[u],"$ash"))
C.a.h(i.b,new Z.ck(0,h.length,f))}if(this.c.b.length!==0){u=P.l
h=H.i([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)}f=Z.dj(y,34963,H.v(h,"$ish",[u],"$ash"))
C.a.h(i.b,new Z.ck(1,h.length,f))}if(this.d.b.length!==0){u=P.l
h=H.i([],[u])
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
C.a.h(h,g.e)}f=Z.dj(y,34963,H.v(h,"$ish",[u],"$ash"))
C.a.h(i.b,new Z.ck(4,h.length,f))}return i},
i:function(a){var z=H.i([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.E("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.E("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.E("   "))}return C.a.G(z,"\n")},
ai:function(a){var z=this.e
if(!(z==null))z.H(a)},
U:function(){return this.ai(null)},
$iscq:1,
u:{
a0:function(){var z,y
z=new F.a6()
y=new F.kD(z)
y.b=!1
y.c=H.i([],[F.A])
z.a=y
y=new F.jB(z)
y.b=H.i([],[F.d5])
z.b=y
y=new F.jA(z)
y.b=H.i([],[F.b7])
z.c=y
y=new F.jz(z)
y.b=H.i([],[F.J])
z.d=y
z.e=null
return z}}},
cq:{"^":"cR;"},
jz:{"^":"b;a,0b",
a2:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.b4(b,c,d)},
cP:function(a){var z,y,x,w,v,u
H.v(a,"$ish",[F.A],"$ash")
z=H.i([],[F.J])
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
C.a.h(z,F.b4(x,v,u))}}return z},
f5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$ish",[F.A],"$ash")
z=H.i([],[F.J])
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
C.a.h(z,F.b4(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b4(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.b4(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.b4(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
c3:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aJ(0,v,t)){v.au()
break}}}}},
bh:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.gff(x)
if(y)x.au()}},
ac:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.H)(z),++w)if(!z[w].bP())x=!1
return x},
bO:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.H)(z),++w)if(!z[w].bN())x=!1
return x},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}},
jA:{"^":"b;a,0b",
n:function(a,b,c){this.a.a.h(0,b)
this.a.a.h(0,c)
return F.ek(b,c)},
gl:function(a){return this.b.length},
c3:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aJ(0,v,t)){v.au()
break}}}}},
bh:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.E(x.a,x.b)
if(y)x.au()}},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.i([],[P.j])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].E(a+(""+x+". ")))}return C.a.G(z,"\n")},
P:function(){return this.E("")}},
jB:{"^":"b;a,0b",
gl:function(a){return this.b.length},
fZ:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.au()}},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}},
A:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bS:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.as(this.cx,x,u,z,y,w,v,a,t)},
Z:function(){return this.bS(null)},
sX:function(a,b){var z
if(!J.E(this.f,b)){this.f=b
z=this.a
if(z!=null)z.U()}},
saL:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.E(this.r,a)){this.r=a
z=this.a
if(z!=null)z.U()}},
sS:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.E(this.x,a)){this.x=a
z=this.a
if(z!=null)z.U()}},
sc8:function(a){var z
if(!J.E(this.y,a)){this.y=a
z=this.a
if(z!=null)z.U()}},
sb_:function(a){var z
if(!J.E(this.z,a)){this.z=a
z=this.a
if(z!=null)z.U()}},
sa3:function(a,b){var z
if(!J.E(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.U()}},
sdq:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.U()}},
sbJ:function(a){var z
if(!J.E(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.U()}},
fE:function(a){var z,y
z=J.P(a)
if(z.D(a,$.$get$aQ())){z=this.f
y=[P.r]
if(z==null)return H.i([0,0,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.D(a,$.$get$aP())){z=this.r
y=[P.r]
if(z==null)return H.i([0,1,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.D(a,$.$get$aO())){z=this.x
y=[P.r]
if(z==null)return H.i([0,0,1],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.D(a,$.$get$bl())){z=this.y
y=[P.r]
if(z==null)return H.i([0,0],y)
else return H.i([z.a,z.b],y)}else if(z.D(a,$.$get$bm())){z=this.z
y=[P.r]
if(z==null)return H.i([0,0,0],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.D(a,$.$get$aX())){z=this.Q
y=[P.r]
if(z==null)return H.i([1,1,1],y)
else return H.i([z.a,z.b,z.c],y)}else if(z.D(a,$.$get$bK())){z=this.Q
if(z==null)return H.i([1,1,1,1],[P.r])
else return z.c9(0)}else if(z.D(a,$.$get$bn()))return H.i([this.ch],[P.r])
else if(z.D(a,$.$get$bk())){z=this.cx
y=[P.r]
if(z==null)return H.i([-1,-1,-1,-1],y)
else return H.i([z.a,z.b,z.c,z.d],y)}else return H.i([],[P.r])},
bP:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.o(0,0,0)
this.d.v(0,new F.kN(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ap(0)}return!0},
bN:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.o(0,0,0)
this.d.v(0,new F.kM(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ap(0)}return!0},
cW:function(a){var z,y,x,w,v
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
fs:function(a){var z=this.cW(a)
if(z!=null)return z
return a.cW(this)},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var z,y,x
z=H.i([],[P.j])
C.a.h(z,C.b.ae(J.ad(this.e),0))
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
x=C.a.G(z,", ")
return a+"{"+x+"}"},
P:function(){return this.E("")},
u:{
as:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.A()
y=new F.kL(z)
y.b=H.i([],[F.d5])
z.b=y
y=new F.kI(z)
x=[F.b7]
y.b=H.i([],x)
y.c=H.i([],x)
z.c=y
y=new F.kE(z)
x=[F.J]
y.b=H.i([],x)
y.c=H.i([],x)
y.d=H.i([],x)
z.d=y
h=$.$get$f8()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$bl().a)!==0?f:null
z.z=(x&$.$get$bm().a)!==0?g:null
z.Q=(x&$.$get$f9().a)!==0?c:null
z.ch=(x&$.$get$bn().a)!==0?i:0
z.cx=(x&$.$get$bk().a)!==0?a:null
return z}}},
kN:{"^":"c:3;a",
$1:function(a){var z,y
H.f(a,"$isJ")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.t(0,z)}}},
kM:{"^":"c:3;a",
$1:function(a){var z,y
H.f(a,"$isJ")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.t(0,z)}}},
kD:{"^":"b;a,0b,0c",
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
this.a.U()
return!0},
cQ:function(a,b,c,d,e,f,g,h,i){var z=F.as(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
f6:function(a,b,c,d,e,f){return this.cQ(a,null,b,c,d,e,f,null,0)},
b9:function(a,b,c,d,e,f){return this.cQ(a,null,b,c,null,d,e,f,0)},
bI:function(a,b,c){var z=F.as(null,null,null,new V.R(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gl:function(a){return this.c.length},
ac:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x)z[x].bP()
return!0},
bO:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x)z[x].bN()
return!0},
fc:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.m()
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.E(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.H(null)}}}}return!0},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
this.q()
z=H.i([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}},
kE:{"^":"b;a,0b,0c,0d",
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
v:function(a,b){H.d(b,{func:1,ret:-1,args:[F.J]})
C.a.v(this.b,b)
C.a.v(this.c,new F.kF(this,b))
C.a.v(this.d,new F.kG(this,b))},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}},
kF:{"^":"c:3;a,b",
$1:function(a){H.f(a,"$isJ")
if(!J.E(a.a,this.a))this.b.$1(a)}},
kG:{"^":"c:3;a,b",
$1:function(a){var z
H.f(a,"$isJ")
z=this.a
if(!J.E(a.a,z)&&!J.E(a.b,z))this.b.$1(a)}},
kI:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.h(z,y[w].E(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}},
kJ:{"^":"b;"},
dh:{"^":"kJ;",
aJ:function(a,b,c){return J.E(b.f,c.f)}},
kK:{"^":"b;"},
jg:{"^":"kK;0a,0b"},
f7:{"^":"b;"},
kH:{"^":"f7;",
aK:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
H.v(a1,"$ish",[F.A],"$ash")
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
if(b!=null){r=r==null?b:new V.M(r.a+b.a,r.b+b.b);++s}a=l.z
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
t=new V.bJ(j[0],j[1],j[2],j[3])}else{j=[i,h,g,j]
i=j[0]
h=j[1]
g=j[2]
j=j[3]
t=new V.bJ(t.a+i,t.b+h,t.c+g,t.d+j)}++u}j=l.ch
if(typeof j!=="number")return H.n(j)
n+=j;++o}a0=F.as(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)a0.sX(0,null)
else a0.sX(0,x.p(0,y))
if(w==null)a0.saL(null)
else a0.saL(w.p(0,Math.sqrt(w.B(w))))
if(v==null)a0.sS(null)
else a0.sS(v.p(0,Math.sqrt(v.B(v))))
if(s<=0||r==null)a0.sc8(null)
else a0.sc8(r.p(0,s))
if(q<=0||p==null)a0.sb_(null)
else a0.sb_(p.p(0,q))
if(u<=0||t==null)a0.sa3(0,null)
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
a0.sa3(0,new V.Q(j,i,h,z))}if(o<=0)a0.sdq(0,0)
else a0.sdq(0,n/o)
return a0}},
j0:{"^":"f7;",
aK:function(a){var z,y,x,w,v,u,t
H.v(a,"$ish",[F.A],"$ash")
z=new V.o(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.t()
if(typeof w!=="number")return H.n(w)
z=new V.o(z.a+v,z.b+u,t+w)}}z=z.p(0,Math.sqrt(z.B(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.H)(a),++x)a[x].saL(z)
return}},
kL:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.P()},
E:function(a){var z,y,x,w
z=H.i([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.h(z,y[w].E(a))
return C.a.G(z,"\n")},
P:function(){return this.E("")}}}],["","",,O,{"^":"",hY:{"^":"db;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gF:function(){var z=this.rx
if(z==null){z=D.X()
this.rx=z}return z},
a_:function(a){var z=this.rx
if(!(z==null))z.H(a)},
sa7:function(a){var z,y
z=this.r2
if(!$.p.$2(z,a)){y=this.r2
this.r2=a
z=new D.C("vectorScale",y,a,this,[P.r])
z.b=!0
this.a_(z)}},
a1:function(a,b,c,d,e,f,g){var z,y,x
H.d(e,{func:1,ret:F.a6,args:[F.a6]})
z=b.a.j(0,d)
if(z==null){z=this.cp(a,e.$1(c))
b.a.k(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.dc(a)},
cF:function(a,b,c,d,e,f,g){var z,y,x
H.d(e,{func:1,ret:F.a6,args:[F.cq]})
z=b.a.j(0,d)
if(z==null){z=this.cp(a,e.$1(c))
b.a.k(0,d,z)}y=this.a
x=y.cx
x.a.uniform3f(x.d,f.a,f.b,f.c)
y=y.cy
y.a.uniform3f(y.d,g.a,g.b,g.c)
z.dc(a)},
cp:function(a,b){var z,y,x,w
H.f(b,"$isa6")
z=a.a
y=$.$get$aQ()
x=$.$get$aP()
w=b.fb(new Z.kO(z),new Z.di(y.a|x.a|$.$get$aO().a|$.$get$aX().a))
w.bd($.$get$aQ()).e=this.a.x.c
w.bd($.$get$aP()).e=this.a.y.c
w.bd($.$get$aX()).e=this.a.z.c
w.bd($.$get$aO()).e=this.a.Q.c
return w},
hJ:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.d(new O.id(z,new V.Q(1,1,1,1)),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.d(new O.ie(z),{func:1,ret:-1,args:[F.J]})
C.a.v(x.b,y)
return z},"$1","geR",4,0,2],
f3:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.a0()
z.a=new V.Q(0,0.7,1,1)
x=a.a
x.toString
z=H.d(new O.ir(z,y),{func:1,ret:-1,args:[F.A]})
C.a.v(x.c,z)
z=new O.iq(y)
x=a.c
x.toString
w=H.d(new O.is(y,z),{func:1,ret:-1,args:[F.b7]})
C.a.v(x.b,w)
w=a.d
w.toString
z=H.d(new O.it(y,z),{func:1,ret:-1,args:[F.J]})
C.a.v(w.b,z)
return y},function(a){return this.f3(a,null)},"hS","$2$color","$1","gf2",4,3,46],
hQ:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.d(new O.il(new V.Q(1,1,1,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","gf0",4,0,2],
hp:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.d(new O.ic(new V.Q(1,1,0.3,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","gei",4,0,2],
hf:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.d(new O.i3(new V.Q(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","gdU",4,0,2],
hK:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.d(new O.ig(new V.Q(1,0.3,1,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","geU",4,0,2],
hP:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.d(new O.ij(new V.Q(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return z},"$1","gf_",4,0,2],
hj:[function(a){var z,y,x
z=F.a0()
y=a.d
y.toString
x=H.d(new O.i7(new V.Q(1,1,0.3,1),z),{func:1,ret:-1,args:[F.J]})
C.a.v(y.b,x)
return z},"$1","ge4",4,0,2],
hk:[function(a){var z,y,x
z=F.a0()
y=a.d
y.toString
x=H.d(new O.i8(new V.Q(1,1,0.3,1),z),{func:1,ret:-1,args:[F.J]})
C.a.v(y.b,x)
return z},"$1","ge5",4,0,2],
hi:[function(a){var z,y,x
z=F.a0()
y=a.d
y.toString
x=H.d(new O.i6(new V.Q(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.J]})
C.a.v(y.b,x)
return z},"$1","ge3",4,0,2],
hl:[function(a){var z,y,x
z=F.a0()
y=a.d
y.toString
x=H.d(new O.i9(new V.Q(1,0.3,1,1),z),{func:1,ret:-1,args:[F.J]})
C.a.v(y.b,x)
return z},"$1","ge6",4,0,2],
hg:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.d(new O.i4(z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.d(new O.i5(z),{func:1,ret:-1,args:[F.J]})
C.a.v(x.b,y)
return z},"$1","gdY",4,0,2],
hO:[function(a){var z,y,x
z=F.a0()
y=a.a
y.toString
x=H.d(new O.ih(z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
x=a.d
x.toString
y=H.d(new O.ii(z),{func:1,ret:-1,args:[F.J]})
C.a.v(x.b,y)
return z},"$1","geZ",4,0,2],
hR:[function(a){var z,y,x,w,v,u,t
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
C.a.v(w,H.d(new O.im(z),x))
w=z.b
u=z.a
if(typeof w!=="number")return w.I()
if(typeof u!=="number")return H.n(u)
t=w-u
z.c=t
if(t<=0)z.c=1
w=a.a
w.toString
x=H.d(new O.io(z,y),x)
C.a.v(w.c,x)
x=a.d
x.toString
w=H.d(new O.ip(y),{func:1,ret:-1,args:[F.J]})
C.a.v(x.b,w)
return y},"$1","gf1",4,0,2],
ec:function(a){var z,y,x
z={}
z.a=0
y=a.a
y.toString
x=H.d(new O.ib(z),{func:1,ret:-1,args:[F.A]})
C.a.v(y.c,x)
return C.e.be((z.a+1.5)*0.5)},
b4:function(a,b){var z
if(a<0)return new V.a2(0,0,0)
else{z=Math.floor((a+0.5)*0.5)
return V.dY(z/b,a-z*2,1)}},
he:[function(a){var z,y,x,w
z=this.ec(a)
y=F.a0()
x=a.a
x.toString
w=H.d(new O.i1(this,z,y),{func:1,ret:-1,args:[F.A]})
C.a.v(x.c,w)
w=a.d
w.toString
x=H.d(new O.i2(y),{func:1,ret:-1,args:[F.J]})
C.a.v(w.b,x)
return y},"$1","gdT",4,0,2],
hd:[function(a){return this.dS(a)},"$1","gco",4,0,2],
dS:function(a){var z,y
z=F.a0()
y=new O.i0(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z},
hc:[function(a){return this.dN(a)},"$1","gcl",4,0,2],
dN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=a.cS()
y=F.a0()
x=new O.i_(y)
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
return y}},id:{"^":"c:4;a,b",
$1:function(a){var z,y
H.f(a,"$isA")
z=this.a.a
y=a.Z()
y.sa3(0,this.b)
y.sS(new V.o(0,0,0))
z.h(0,y)}},ie:{"^":"c:3;a",
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
z.d.a2(0,w,v,u)}},ir:{"^":"c:4;a,b",
$1:function(a){var z,y
H.f(a,"$isA")
z=this.b.a
y=a.Z()
y.sa3(0,this.a.a)
y.sS(new V.o(0,0,0))
z.h(0,y)}},iq:{"^":"c:48;a",
$2:function(a,b){if(a.fs(b)==null)this.a.c.n(0,a,b)}},is:{"^":"c:49;a,b",
$1:function(a){var z,y,x,w
H.f(a,"$isb7")
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
this.b.$2(w,z[x])}},it:{"^":"c:3;a,b",
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
y.$2(u,w)}},il:{"^":"c:4;a,b",
$1:function(a){var z,y
z=H.f(a,"$isA").Z()
z.sa3(0,this.a)
z.sS(new V.o(0,0,0))
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.d6(z)}},ic:{"^":"c:4;a,b",
$1:function(a){var z,y,x
z=H.f(a,"$isA").Z()
z.sa3(0,this.a)
z.sS(new V.o(0,0,0))
y=z.Z()
y.sS(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i3:{"^":"c:4;a,b",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=a.Z()
z.sa3(0,this.a)
z.sS(new V.o(0,0,0))
y=z.Z()
y.sS(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},ig:{"^":"c:4;a,b",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=a.Z()
z.sa3(0,this.a)
z.sS(new V.o(0,0,0))
y=z.Z()
y.sS(a.x.ah(a.r).O(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},ij:{"^":"c:4;a,b",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=a.Z()
z.sa3(0,this.a)
z.sS(new V.o(0,0,0))
y=z.Z()
y.sS(a.z)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i7:{"^":"c:3;a,b",
$1:function(a){var z,y
H.f(a,"$isJ")
z=F.as(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.d6(z)}},i8:{"^":"c:3;a,b",
$1:function(a){var z,y,x
H.f(a,"$isJ")
z=F.as(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.Z()
y.sS(a.d)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i6:{"^":"c:3;a,b",
$1:function(a){var z,y,x
H.f(a,"$isJ")
z=F.as(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.Z()
y.sS(a.e)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i9:{"^":"c:3;a,b",
$1:function(a){var z,y,x
H.f(a,"$isJ")
z=F.as(null,new V.o(0,0,0),this.a,a.a.f.t(0,a.b.f).t(0,a.c.f).p(0,3),a.d,null,null,null,0)
y=z.Z()
y.sS(a.e.ah(a.d).O(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.n(0,z,y)}},i4:{"^":"c:4;a",
$1:function(a){var z,y
H.f(a,"$isA")
z=this.a.a
y=a.Z()
y.sS(new V.o(0,0,0))
z.h(0,y)}},i5:{"^":"c:3;a",
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
z.d.a2(0,w,v,u)}},ih:{"^":"c:4;a",
$1:function(a){var z,y,x,w,v,u,t
H.f(a,"$isA")
z=a.y
y=this.a.a
x=a.Z()
w=z.a
v=z.b
if(w<0)w=0
else if(w>1)w=1
u=v<0
if(u)t=0
else t=v>1?1:v
if(u)v=0
else if(v>1)v=1
x.sa3(0,new V.Q(w,t,v,1))
x.sS(new V.o(0,0,0))
y.h(0,x)}},ii:{"^":"c:3;a",
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
z.d.a2(0,w,v,u)}},im:{"^":"c:4;a",
$1:function(a){var z,y,x
H.f(a,"$isA")
z=this.a
y=z.a
x=a.ch
if(typeof y!=="number")return y.a8()
if(typeof x!=="number")return H.n(x)
if(y>x)z.a=x
y=z.b
if(typeof y!=="number")return y.K()
if(y<x)z.b=x}},io:{"^":"c:4;a,b",
$1:function(a){var z,y,x,w
H.f(a,"$isA")
z=a.ch
y=this.a
x=y.a
if(typeof z!=="number")return z.I()
if(typeof x!=="number")return H.n(x)
w=V.dY((z-x)/y.c*5/6,1,1)
y=this.b.a
x=a.Z()
x.sS(new V.o(0,0,0))
x.sa3(0,new V.Q(w.a,w.b,w.c,1))
y.h(0,x)}},ip:{"^":"c:3;a",
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
z.d.a2(0,w,v,u)}},ib:{"^":"c:4;a",
$1:function(a){var z,y,x
z=H.f(a,"$isA").cx
if(z==null)z=new V.ao(0,0,0,0)
y=this.a
x=Math.max(y.a,z.a)
y.a=x
x=Math.max(x,z.b)
y.a=x
x=Math.max(x,z.c)
y.a=x
y.a=Math.max(x,z.d)}},i1:{"^":"c:4;a,b,c",
$1:function(a){var z,y,x,w
H.f(a,"$isA")
z=a.cx
if(z==null)z=new V.ao(0,0,0,0)
y=this.a
x=this.b
w=new V.a2(0,0,0).t(0,y.b4(z.a,x)).t(0,y.b4(z.b,x)).t(0,y.b4(z.c,x)).t(0,y.b4(z.d,x))
x=this.c.a
y=a.Z()
y.sS(new V.o(0,0,0))
y.sa3(0,new V.Q(w.a,w.b,w.c,1))
x.h(0,y)}},i2:{"^":"c:3;a",
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
z.d.a2(0,w,v,u)}},i0:{"^":"c;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.Q(z,y,x,1)
z=this.a
v=z.a.bI(0,0,0)
v.sS(new V.o(0,0,0))
v.saL(new V.o(1,0,0))
v.sa3(0,w)
u=z.a.bI(a,b,c)
u.sS(new V.o(0,0,0))
u.saL(new V.o(1,0,0))
u.sa3(0,w)
z.c.n(0,v,u)}},i_:{"^":"c;a",
$3:function(a,b,c){var z=this.a.a.bI(a,b,c)
z.sS(new V.o(0,0,0))
z.saL(new V.o(a,b,c))
return z}},db:{"^":"b;"}}],["","",,T,{"^":"",jT:{"^":"b;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",hh:{"^":"b;",
aW:function(a,b){return!0},
i:function(a){return"all"},
$isc0:1},c0:{"^":"b;"},eq:{"^":"b;",
aW:["dB",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x)if(z[x].aW(0,b))return!0
return!1}],
i:["cg",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.H)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc0:1},bE:{"^":"eq;0a",
aW:function(a,b){return!this.dB(0,b)},
i:function(a){return"!["+this.cg(0)+"]"}},jx:{"^":"b;0a",
dE:function(a){var z,y
if(a.a.length<=0)throw H.a(P.T("May not create a SetMatcher with zero characters."))
z=new H.aL(0,0,[P.l,P.O])
for(y=new H.eo(a,a.gl(a),0,[H.az(a,"u",0)]);y.L();)z.k(0,y.d,!0)
this.a=z},
aW:function(a,b){return this.a.bc(0,b)},
i:function(a){var z=this.a
return P.c4(z.gan(z),0,null)},
$isc0:1,
u:{
ac:function(a){var z=new V.jx()
z.dE(a)
return z}}},eG:{"^":"b;a,b,0c,0d",
gfH:function(a){return this.b},
G:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eQ(this.a.R(0,b))
w.a=H.i([],[V.c0])
w.c=!1
C.a.h(this.c,w)
return w},
fq:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x){w=z[x]
if(w.aW(0,a))return w}return},
i:function(a){return this.b}},eN:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h6(this.b,"\n","\\n")
y=H.h6(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eO:{"^":"b;a,b,0c",
i:function(a){return this.b}},jZ:{"^":"b;0a,0b,0c",
R:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eG(this,b)
z.c=H.i([],[V.eQ])
this.a.k(0,b,z)}return z},
b1:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eO(this,a)
y=P.j
z.c=new H.aL(0,0,[y,y])
this.b.k(0,a,z)}return z},
h8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.i([],[V.eN])
y=this.c
x=[P.l]
w=H.i([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.J(a,t)
r=y.fq(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c4(w,0,null)
throw H.a(P.T("Untokenizable string [state: "+y.gfH(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.i([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c4(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eN(o==null?p.b:o,q,t)}++t}}}},eQ:{"^":"eq;b,0c,0a",
i:function(a){return this.b.b+": "+this.cg(0)}}}],["","",,X,{"^":"",dT:{"^":"b;",$iser:1},hV:{"^":"eJ;0a,0b,0c,0d,0e,0f,0r,0x",
gF:function(){var z=this.x
if(z==null){z=D.X()
this.x=z}return z}},j3:{"^":"b;0a,0b,0c,0d,0e",
gF:function(){var z=this.e
if(z==null){z=D.X()
this.e=z}return z},
aR:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.H(a)},function(){return this.aR(null)},"hb","$1","$0","gck",0,2,6],
saX:function(a){var z,y,x
if(!J.E(this.a,a)){z=this.a
if(z!=null){z=z.gF()
z.toString
y=H.d(this.gck(),{func:1,ret:-1,args:[D.t]})
C.a.N(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gF()
z.toString
y=H.d(this.gck(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.C("mover",x,this.a,this,[U.ak])
z.b=!0
this.aR(z)}},
$iser:1,
$isdT:1},eJ:{"^":"b;"}}],["","",,V,{"^":"",
oc:function(a){P.jY(C.B,new V.od(a))},
hq:{"^":"b;a,b,0c,0d",
a2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.d(c,{func:1,ret:-1,args:[P.O]})
if(this.c==null)return
z=this.d.length
y=P.c7().gaM().j(0,this.a)
if(y==null||y.length<=z){x=d
w=!0}else{if(z>=y.length)return H.e(y,z)
x=y[z]==="1"
w=!1}c.$1(x)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.cd(this.c).h(0,u)
s=W.ec("checkbox")
s.checked=x
t=W.ae
W.a5(s,"change",H.d(new V.hr(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
u.appendChild(s)
r=v.createElement("span")
r.textContent=b
u.appendChild(r)
J.cd(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(w)this.cM(z,x)},
n:function(a,b,c){return this.a2(a,b,c,!1)},
cM:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.c7().gaM().j(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.b.fP(y,a-x+1,"0")
w=a>0?C.b.A(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.b.ax(y,x)
v=P.c7()
x=P.j
u=P.en(v.gaM(),x,x)
u.k(0,z,w)
t=v.c4(0,u)
z=window.history
x=t.i(0)
z.toString
z.replaceState(new P.fq([],[]).bi(""),"",x)}},
hr:{"^":"c:16;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.cM(this.d,z.checked)}},
od:{"^":"c:51;a",
$1:function(a){H.f(a,"$isbh")
P.dC(C.e.dk(this.a.gfw(),2)+" fps")}},
jh:{"^":"b;a,b,0c",
a2:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.d(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.c7().gaM().j(0,H.k(z))
if(y==null)if(d){c.$0()
this.cL(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.cd(this.c).h(0,v)
t=W.ec("radio")
t.checked=x
t.name=z
z=W.ae
W.a5(t,"change",H.d(new V.ji(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.cd(this.c).h(0,w.createElement("br"))},
n:function(a,b,c){return this.a2(a,b,c,!1)},
cL:function(a){var z,y,x,w,v
z=P.c7()
y=P.j
x=P.en(z.gaM(),y,y)
x.k(0,this.a,a)
w=z.c4(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fq([],[]).bi(""),"",v)},
u:{
ez:function(a,b){var z,y
z=new V.jh(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.I("Failed to find "+a+" for RadioGroup")
return z}}},
ji:{"^":"c:16;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.cL(this.d)}}},
jC:{"^":"b;0a,0b",
dG:function(a,b){var z,y,x,w,v,u,t
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
W.a5(z,"scroll",H.d(new V.jF(x),{func:1,ret:-1,args:[t]}),!1,t)},
f7:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$ish",[P.j],"$ash")
this.eP()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.h8(C.a.fD(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.H)(x),++v){u=x[v]
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
if(H.h5(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cx(C.N,s,C.f,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.k(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
f4:function(a){var z,y,x,w,v,u,t
H.v(a,"$ish",[P.j],"$ash")
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
x=H.f(w.insertCell(-1),"$isda").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<3;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.f(w.insertCell(-1),"$isda")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
eP:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jZ()
y=P.j
z.a=new H.aL(0,0,[y,V.eG])
z.b=new H.aL(0,0,[y,V.eO])
z.c=z.R(0,"Start")
y=z.R(0,"Start").G(0,"Bold")
x=V.ac(new H.a7("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Bold").G(0,"Bold")
x=new V.bE()
w=[V.c0]
x.a=H.i([],w)
C.a.h(y.a,x)
y=V.ac(new H.a7("*"))
C.a.h(x.a,y)
y=z.R(0,"Bold").G(0,"BoldEnd")
x=V.ac(new H.a7("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").G(0,"Italic")
x=V.ac(new H.a7("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Italic").G(0,"Italic")
x=new V.bE()
x.a=H.i([],w)
C.a.h(y.a,x)
y=V.ac(new H.a7("_"))
C.a.h(x.a,y)
y=z.R(0,"Italic").G(0,"ItalicEnd")
x=V.ac(new H.a7("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").G(0,"Code")
x=V.ac(new H.a7("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Code").G(0,"Code")
x=new V.bE()
x.a=H.i([],w)
C.a.h(y.a,x)
y=V.ac(new H.a7("`"))
C.a.h(x.a,y)
y=z.R(0,"Code").G(0,"CodeEnd")
x=V.ac(new H.a7("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").G(0,"LinkHead")
x=V.ac(new H.a7("["))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"LinkHead").G(0,"LinkTail")
x=V.ac(new H.a7("|"))
C.a.h(y.a,x)
x=z.R(0,"LinkHead").G(0,"LinkEnd")
y=V.ac(new H.a7("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkHead").G(0,"LinkHead")
y=new V.bE()
y.a=H.i([],w)
C.a.h(x.a,y)
x=V.ac(new H.a7("|]"))
C.a.h(y.a,x)
x=z.R(0,"LinkTail").G(0,"LinkEnd")
y=V.ac(new H.a7("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkTail").G(0,"LinkTail")
y=new V.bE()
y.a=H.i([],w)
C.a.h(x.a,y)
x=V.ac(new H.a7("|]"))
C.a.h(y.a,x)
C.a.h(z.R(0,"Start").G(0,"Other").a,new V.hh())
x=z.R(0,"Other").G(0,"Other")
y=new V.bE()
y.a=H.i([],w)
C.a.h(x.a,y)
x=V.ac(new H.a7("*_`["))
C.a.h(y.a,x)
x=z.R(0,"BoldEnd")
x.d=x.a.b1("Bold")
x=z.R(0,"ItalicEnd")
x.d=x.a.b1("Italic")
x=z.R(0,"CodeEnd")
x.d=x.a.b1("Code")
x=z.R(0,"LinkEnd")
x.d=x.a.b1("Link")
x=z.R(0,"Other")
x.d=x.a.b1("Other")
this.b=z},
u:{
jD:function(a,b){var z=new V.jC()
z.dG(a,!0)
return z}}},
jF:{"^":"c:16;a",
$1:function(a){P.jX(C.n,new V.jE(this.a))}},
jE:{"^":"c:0;a",
$0:function(){var z,y,x
z=C.e.af(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,Z,{"^":"",
h0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=V.jD("Test 002",!0)
y=W.dU(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.j]
z.f7(H.i(["The inspection test is used to check that shapes are built correctly ","and for checking the data privided by the shapes. ","Also it is useful for testing out new generated shape configurations. ","For loaded shape testing see test032."],x))
z.f4(H.i(["controls","shapes","scalars"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.I(P.T("Failed to find an element with the identifier, testCanvas."))
v=E.jV(w,!0,!0,!0,!1)
u=new E.aU()
u.a=""
u.b=!0
t=E.aU
s=O.dX(t)
u.y=s
s.bl(u.gfJ(),u.gfL())
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
u.sce(0,null)
u.saX(null)
s=new U.e9()
s.ci(U.ak)
s.bl(s.gej(),s.geB())
s.e=null
s.f=V.cm()
s.r=0
r=v.r
q=new U.kt()
p=U.cS()
p.scb(0,!0)
p.sbY(6.283185307179586)
p.sc_(0)
p.sX(0,0)
p.sbZ(100)
p.sY(0)
p.sbT(0.5)
q.b=p
p=p.gF()
p.toString
o={func:1,ret:-1,args:[D.t]}
n=H.d(q.gaD(),o)
C.a.h(p.a,n)
p=U.cS()
p.scb(0,!0)
p.sbY(6.283185307179586)
p.sc_(0)
p.sX(0,0)
p.sbZ(100)
p.sY(0)
p.sbT(0.5)
q.c=p
C.a.h(p.gF().a,n)
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
m=new X.aD(!1,!1,!1)
l=q.d
q.d=m
p=[X.aD]
n=new D.C("modifiers",l,m,q,p)
n.b=!0
q.V(n)
n=q.f
if(n!==!1){q.f=!1
n=new D.C("invertX",n,!1,q,[P.O])
n.b=!0
q.V(n)}n=q.r
if(n!==!0){q.r=!0
n=new D.C("invertY",n,!0,q,[P.O])
n.b=!0
q.V(n)}q.aT(r)
s.h(0,q)
r=v.r
q=new U.ks()
n=U.cS()
n.scb(0,!0)
n.sbY(6.283185307179586)
n.sc_(0)
n.sX(0,0)
n.sbZ(100)
n.sY(0)
n.sbT(0.2)
q.b=n
n=n.gF()
n.toString
k=H.d(q.gaD(),o)
C.a.h(n.a,k)
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
m=new X.aD(!0,!1,!1)
l=q.c
q.c=m
n=new D.C("modifiers",l,m,q,p)
n.b=!0
q.V(n)
q.aT(r)
s.h(0,q)
r=v.r
q=new U.ku()
q.c=0.01
q.d=0
q.e=0
m=new X.aD(!1,!1,!1)
q.b=m
p=new D.C("modifiers",null,m,q,p)
p.b=!0
q.V(p)
q.aT(r)
s.h(0,q)
u.saX(s)
j=new O.hY()
j.b=new V.o(0,0,-1)
j.c=new V.a2(0.2,0.3,0.4)
j.d=new V.a2(0.1,0.2,0.3)
j.e=new V.a2(0.7,0.7,0.7)
j.f=new V.a2(0.3,0.3,0.3)
j.r=new V.a2(0.5,0.5,0.5)
j.x=new V.a2(0.5,0.5,0.5)
j.y=new V.a2(1,1,1)
j.z=new V.a2(0.8,0.8,0.8)
j.Q=!1
j.ch=!1
j.cx=!1
j.cy=!1
j.db=!1
j.dx=!1
j.dy=!1
j.fr=!1
j.fx=!1
j.fy=!1
j.go=!1
j.id=!1
j.k1=!1
j.k2=!1
j.k3=!1
j.k4=!1
j.r1=!1
j.r2=1
j.sa7(0.4)
s=new M.hN()
t=O.dX(t)
s.d=t
t.bl(s.gel(),s.gem())
s.e=null
s.f=null
s.r=null
s.x=null
i=new X.j3()
i.b=1.0471975511965976
i.c=0.1
i.d=2000
i.saX(null)
t=i.b
if(!$.p.$2(t,1.0471975511965976)){l=i.b
i.b=1.0471975511965976
t=new D.C("fov",l,1.0471975511965976,i,[P.r])
t.b=!0
i.aR(t)}t=i.c
if(!$.p.$2(t,0.1)){l=i.c
i.c=0.1
t=new D.C("near",l,0.1,i,[P.r])
t.b=!0
i.aR(t)}t=i.d
if(!$.p.$2(t,2000)){l=i.d
i.d=2000
t=new D.C("far",l,2000,i,[P.r])
t.b=!0
i.aR(t)}t=s.a
if(t!==i){if(t!=null){t=t.gF()
t.toString
r=H.d(s.gaj(),o)
C.a.N(t.a,r)}l=s.a
s.a=i
t=i.gF()
t.toString
r=H.d(s.gaj(),o)
C.a.h(t.a,r)
t=new D.C("camera",l,s.a,s,[X.dT])
t.b=!0
s.az(t)}h=new X.hV()
t=new V.Q(0,0,0,1)
h.a=t
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
t=V.eB(0,0,1,1)
h.r=t
t=s.b
if(t!==h){if(t!=null){t=t.gF()
t.toString
r=H.d(s.gaj(),o)
C.a.N(t.a,r)}l=s.b
s.b=h
t=h.gF()
t.toString
r=H.d(s.gaj(),o)
C.a.h(t.a,r)
t=new D.C("target",l,s.b,s,[X.eJ])
t.b=!0
s.az(t)}s.sdi(null)
s.sdi(j)
s.d.h(0,u)
t=s.a
g=V.aM(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
r=new U.dZ()
r.a=g
t.saX(r)
t=v.d
if(t!==s){if(t!=null){t=t.gF()
t.toString
r=H.d(v.gcj(),o)
C.a.N(t.a,r)}v.d=s
t=s.gF()
t.toString
o=H.d(v.gcj(),o)
C.a.h(t.a,o)
v.dJ()}t=new V.hq("controls",!0)
x=x.getElementById("controls")
t.c=x
if(x==null)H.I("Failed to find controls for CheckGroup")
t.d=H.i([],[W.dV])
t.a2(0,"Filled",new Z.nk(j),!0)
t.a2(0,"Wire Frame",new Z.nl(j),!0)
t.n(0,"Vertices",new Z.nm(j))
t.n(0,"Normals",new Z.nx(j))
t.n(0,"Binormals",new Z.nI(j))
t.n(0,"Tangentals",new Z.nT(j))
t.n(0,"Face Centers",new Z.o1(j))
t.n(0,"Face Normals",new Z.o2(j))
t.n(0,"Face Binormals",new Z.o3(j))
t.n(0,"Face Tangentals",new Z.o4(j))
t.n(0,"Colors",new Z.o5(j))
t.n(0,"Textures2D",new Z.nn(j))
t.n(0,"TexturesCube",new Z.no(j))
t.n(0,"Weight",new Z.np(j))
t.n(0,"Bend",new Z.nq(j))
t.a2(0,"Axis",new Z.nr(j),!0)
t.n(0,"AABB",new Z.ns(j))
x=new Z.o6(u)
t=V.ez("shapes",!0)
t.a2(0,"Square",new Z.nt(x),!0)
t.n(0,"Cube",new Z.nu(x))
t.n(0,"Cuboid",new Z.nv(x))
t.n(0,"Cuboid+",new Z.nw(x))
t.n(0,"Disk",new Z.ny(x))
t.n(0,"Disk+",new Z.nz(x))
t.n(0,"Cylinder",new Z.nA(x))
t.n(0,"Cylinder+",new Z.nB(x))
t.n(0,"Cone",new Z.nC(x))
t.n(0,"Cylindrical",new Z.nD(x))
t.n(0,"LatLonSphere",new Z.nE(x))
t.n(0,"LatLonSphere+",new Z.nF(x))
t.n(0,"IsoSphere",new Z.nG(x))
t.n(0,"IsoSphere+",new Z.nH(x))
t.n(0,"Sphere",new Z.nJ(x))
t.n(0,"Sphere+",new Z.nK(x))
t.n(0,"Spherical",new Z.nL(x))
t.n(0,"Toroid",new Z.nM(x))
t.n(0,"Knot",new Z.nN(x))
t.n(0,"Grid",new Z.nO(x))
t.n(0,"Grid+",new Z.nP(x))
x=V.ez("scalars",!0)
x.n(0,"0.01",new Z.nQ(j))
x.n(0,"0.02",new Z.nR(j))
x.n(0,"0.04",new Z.nS(j))
x.n(0,"0.06",new Z.nU(j))
x.n(0,"0.08",new Z.nV(j))
x.n(0,"0.1",new Z.nW(j))
x.n(0,"0.2",new Z.nX(j))
x.a2(0,"0.4",new Z.nY(j),!0)
x.n(0,"0.6",new Z.nZ(j))
x.n(0,"0.8",new Z.o_(j))
x.n(0,"1.0",new Z.o0(j))
V.oc(v)},
nk:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.Q!==a){z.Q=a
y=new D.C("showFilled",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
nl:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.ch!==a){z.ch=a
y=new D.C("showWireFrame",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
nm:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cx!==a){z.cx=a
y=new D.C("showVertices",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
nx:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cy!==a){z.cy=a
y=new D.C("showNormals",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
nI:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.db!==a){z.db=a
y=new D.C("showBinormals",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
nT:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dx!==a){z.dx=a
y=new D.C("showTangentals",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
o1:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fr!==a){z.fr=a
y=new D.C("showFaceCenters",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
o2:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fx!==a){z.fx=a
y=new D.C("showFaceNormals",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
o3:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fy!==a){z.fy=a
y=new D.C("showFaceBinormals",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
o4:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.go!==a){z.go=a
y=new D.C("showFaceTangentals",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
o5:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.id!==a){z.id=a
y=new D.C("showColorFill",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
nn:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k1!==a){z.k1=a
y=new D.C("showTxt2DColor",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
no:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dy!==a){z.dy=a
y=new D.C("showTxtCube",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
np:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k2!==a){z.k2=a
y=new D.C("showWeight",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
nq:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.r1!==a){z.r1=a
y=new D.C("showBend",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
nr:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k3!==a){z.k3=a
y=new D.C("showAxis",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
ns:{"^":"c:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k4!==a){z.k4=a
y=new D.C("showAABB",!a,a,z,[P.O])
y.b=!0
z.a_(y)}}},
o6:{"^":"c:53;a",
$1:function(a){a.fd()
this.a.sce(0,a)}},
nt:{"^":"c:0;a",
$0:function(){var z,y,x,w,v,u,t
z=F.a0()
y=z.a
x=new V.o(-1,-1,1)
x=x.p(0,Math.sqrt(x.B(x)))
w=y.b9(new V.ao(1,2,4,6),new V.Q(1,0,0,1),new V.R(-1,-1,0),new V.M(0,1),x,null)
y=z.a
x=new V.o(1,-1,1)
x=x.p(0,Math.sqrt(x.B(x)))
v=y.b9(new V.ao(0,3,4,6),new V.Q(0,0,1,1),new V.R(1,-1,0),new V.M(1,1),x,null)
y=z.a
x=new V.o(1,1,1)
x=x.p(0,Math.sqrt(x.B(x)))
u=y.b9(new V.ao(0,2,5,6),new V.Q(0,1,0,1),new V.R(1,1,0),new V.M(1,0),x,null)
y=z.a
x=new V.o(-1,1,1)
x=x.p(0,Math.sqrt(x.B(x)))
t=y.b9(new V.ao(0,2,4,7),new V.Q(1,1,0,1),new V.R(-1,1,0),new V.M(0,0),x,null)
z.d.cP(H.i([w,v,u,t],[F.A]))
z.ac()
this.a.$1(z)}},
nu:{"^":"c:0;a",
$0:function(){this.a.$1(F.cC(1,null,null,1))}},
nv:{"^":"c:0;a",
$0:function(){this.a.$1(F.cC(8,null,null,8))}},
nw:{"^":"c:0;a",
$0:function(){this.a.$1(F.cC(15,null,new Z.nj(),15))}},
nj:{"^":"c:7;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.o(x.a,x.b,x.c)
w=x.p(0,Math.sqrt(x.B(x)))
x=a.f
y=w.m(0,z*0.1+y*0.1)
a.sX(0,x.t(0,new V.R(y.a,y.b,y.c)))}},
ny:{"^":"c:0;a",
$0:function(){this.a.$1(F.cD(-1,!1,0,null,8))}},
nz:{"^":"c:0;a",
$0:function(){this.a.$1(F.cD(-1,!1,0,null,30))}},
nA:{"^":"c:0;a",
$0:function(){this.a.$1(F.dv(1,!0,!0,1,8,1))}},
nB:{"^":"c:0;a",
$0:function(){this.a.$1(F.dv(1,!0,!0,8,16,1))}},
nC:{"^":"c:0;a",
$0:function(){this.a.$1(F.dv(1,!0,!1,1,12,0))}},
nD:{"^":"c:0;a",
$0:function(){this.a.$1(F.fN(!0,!0,25,new Z.ni(),50))}},
ni:{"^":"c:9;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
nE:{"^":"c:0;a",
$0:function(){this.a.$1(F.fZ(10,20))}},
nF:{"^":"c:0;a",
$0:function(){this.a.$1(F.fZ(20,40))}},
nG:{"^":"c:0;a",
$0:function(){this.a.$1(F.fY(2))}},
nH:{"^":"c:0;a",
$0:function(){this.a.$1(F.fY(3))}},
nJ:{"^":"c:0;a",
$0:function(){this.a.$1(F.dE(6,null,6))}},
nK:{"^":"c:0;a",
$0:function(){this.a.$1(F.dE(10,null,10))}},
nL:{"^":"c:0;a",
$0:function(){this.a.$1(F.dE(10,new Z.nh(),10))}},
nh:{"^":"c:9;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
nM:{"^":"c:0;a",
$0:function(){this.a.$1(F.oh(30,1,15,0.5))}},
nN:{"^":"c:0;a",
$0:function(){this.a.$1(F.nc(120,1,2,12,0.3,3))}},
nO:{"^":"c:0;a",
$0:function(){this.a.$1(F.fU(4,null,4))}},
nP:{"^":"c:0;a",
$0:function(){this.a.$1(F.fU(16,new Z.ng(),16))}},
ng:{"^":"c:9;",
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3}},
nQ:{"^":"c:0;a",
$0:function(){this.a.sa7(0.01)}},
nR:{"^":"c:0;a",
$0:function(){this.a.sa7(0.02)}},
nS:{"^":"c:0;a",
$0:function(){this.a.sa7(0.04)}},
nU:{"^":"c:0;a",
$0:function(){this.a.sa7(0.06)}},
nV:{"^":"c:0;a",
$0:function(){this.a.sa7(0.08)}},
nW:{"^":"c:0;a",
$0:function(){this.a.sa7(0.1)}},
nX:{"^":"c:0;a",
$0:function(){this.a.sa7(0.2)}},
nY:{"^":"c:0;a",
$0:function(){this.a.sa7(0.4)}},
nZ:{"^":"c:0;a",
$0:function(){this.a.sa7(0.6)}},
o_:{"^":"c:0;a",
$0:function(){this.a.sa7(0.8)}},
o0:{"^":"c:0;a",
$0:function(){this.a.sa7(1)}}},1]]
setupProgram(dart,0,0)
J.P=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eg.prototype
return J.iy.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.eh.prototype
if(typeof a=="boolean")return J.ix.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.au=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.c9=function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.fQ=function(a){if(typeof a=="number")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.fR=function(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.dy=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c6.prototype
return a}
J.aT=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.E=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).D(a,b)}
J.aA=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.fQ(a).a8(a,b)}
J.h8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.fQ(a).K(a,b)}
J.dF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.fR(a).m(a,b)}
J.dG=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fW(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.au(a).j(a,b)}
J.cK=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fW(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c9(a).k(a,b,c)}
J.h9=function(a,b){return J.dy(a).J(a,b)}
J.ha=function(a,b,c){return J.aT(a).eI(a,b,c)}
J.hb=function(a,b,c,d){return J.aT(a).cO(a,b,c,d)}
J.hc=function(a,b){return J.dy(a).a0(a,b)}
J.hd=function(a,b){return J.fR(a).aH(a,b)}
J.cL=function(a,b,c){return J.au(a).fg(a,b,c)}
J.cM=function(a,b){return J.c9(a).M(a,b)}
J.he=function(a,b,c,d){return J.c9(a).av(a,b,c,d)}
J.dH=function(a,b){return J.c9(a).v(a,b)}
J.cd=function(a){return J.aT(a).gbQ(a)}
J.b0=function(a){return J.P(a).gW(a)}
J.bv=function(a){return J.c9(a).ga4(a)}
J.aq=function(a){return J.au(a).gl(a)}
J.hf=function(a,b){return J.aT(a).h0(a,b)}
J.hg=function(a,b){return J.aT(a).sa5(a,b)}
J.ad=function(a){return J.P(a).i(a)}
I.ap=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.h=W.cQ.prototype
C.C=J.q.prototype
C.a=J.b6.prototype
C.c=J.eg.prototype
C.D=J.eh.prototype
C.e=J.bY.prototype
C.b=J.bZ.prototype
C.K=J.c_.prototype
C.Q=H.d4.prototype
C.R=W.j_.prototype
C.u=J.j4.prototype
C.m=J.c6.prototype
C.v=W.bL.prototype
C.w=W.kR.prototype
C.y=new P.hm(!1)
C.x=new P.hl(C.y)
C.z=new P.j2()
C.A=new P.kC()
C.d=new P.lD()
C.n=new P.aC(0)
C.B=new P.aC(5e6)
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
C.q=H.i(I.ap([127,2047,65535,1114111]),[P.l])
C.i=H.i(I.ap([0,0,32776,33792,1,10240,0,0]),[P.l])
C.j=H.i(I.ap([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.k=H.i(I.ap([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.M=H.i(I.ap([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.N=H.i(I.ap([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.l=H.i(I.ap([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.r=H.i(I.ap([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.O=H.i(I.ap([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.t=H.i(I.ap([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.L=H.i(I.ap([]),[P.j])
C.P=new H.hA(0,{},C.L,[P.j,P.j])
C.f=new P.kv(!1)
$.aB=0
$.bw=null
$.dN=null
$.dq=!1
$.fT=null
$.fJ=null
$.h4=null
$.cE=null
$.cI=null
$.dz=null
$.bp=null
$.bR=null
$.bS=null
$.dr=!1
$.V=C.d
$.e4=null
$.e3=null
$.e2=null
$.e1=null
$.p=V.iU()
$.ik="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec3 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec3 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.ia="precision mediump float;                                   \n                                                           \nuniform vec3 ambientClr;                                   \nuniform vec3 diffuseClr;                                   \n                                                           \nvarying vec3 normal;                                       \nvarying vec3 color;                                        \nvarying vec3 litVec;                                       \n                                                           \nvoid main()                                                \n{                                                          \n   vec3 norm = normalize(normal);                          \n   float scalar = dot(norm, litVec);                       \n   vec3 diffuse = diffuseClr*max(scalar, 0.0);             \n   gl_FragColor = vec4(color*(ambientClr + diffuse), 1.0); \n}                                                          \n"
$.ew=null
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
I.$lazy(y,x,w)}})(["e0","$get$e0",function(){return H.fS("_$dart_dartClosure")},"cX","$get$cX",function(){return H.fS("_$dart_js")},"eR","$get$eR",function(){return H.aG(H.cr({
toString:function(){return"$receiver$"}}))},"eS","$get$eS",function(){return H.aG(H.cr({$method$:null,
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.aG(H.cr(null))},"eU","$get$eU",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eY","$get$eY",function(){return H.aG(H.cr(void 0))},"eZ","$get$eZ",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.aG(H.eX(null))},"eV","$get$eV",function(){return H.aG(function(){try{null.$method$}catch(z){return z.message}}())},"f0","$get$f0",function(){return H.aG(H.eX(void 0))},"f_","$get$f_",function(){return H.aG(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dk","$get$dk",function(){return P.kS()},"bT","$get$bT",function(){return[]},"f6","$get$f6",function(){return P.kz()},"fd","$get$fd",function(){return H.iY(H.cz(H.i([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))},"fz","$get$fz",function(){return P.jn("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fF","$get$fF",function(){return P.mB()},"e_","$get$e_",function(){return{}},"fa","$get$fa",function(){return Z.at(0)},"f8","$get$f8",function(){return Z.at(511)},"aQ","$get$aQ",function(){return Z.at(1)},"aP","$get$aP",function(){return Z.at(2)},"aO","$get$aO",function(){return Z.at(4)},"bl","$get$bl",function(){return Z.at(8)},"bm","$get$bm",function(){return Z.at(16)},"aX","$get$aX",function(){return Z.at(32)},"bK","$get$bK",function(){return Z.at(64)},"f9","$get$f9",function(){return Z.at(96)},"bn","$get$bn",function(){return Z.at(128)},"bk","$get$bk",function(){return Z.at(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.D},{func:1,ret:P.D,args:[P.O]},{func:1,ret:F.a6,args:[F.a6]},{func:1,ret:P.D,args:[F.J]},{func:1,ret:P.D,args:[F.A]},{func:1,ret:-1,args:[D.t]},{func:1,ret:-1,opt:[D.t]},{func:1,ret:P.D,args:[F.A,P.r,P.r]},{func:1,ret:-1},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[W.aE]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.D,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[P.l,[P.m,E.aU]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[W.ae]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:P.D,args:[D.t]},{func:1,ret:P.r},{func:1,ret:V.R,args:[P.r]},{func:1,ret:P.j,args:[P.l]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.l,[P.m,U.ak]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:W.a3,args:[W.L]},{func:1,ret:P.O,args:[W.L]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.D,args:[P.W]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.S,args:[P.l]},{func:1,ret:P.D,args:[P.j,,]},{func:1,ret:-1,args:[W.bL]},{func:1,ret:P.D,args:[P.j]},{func:1,ret:P.O,args:[P.r,P.r]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:-1,args:[P.j,P.l]},{func:1,ret:[P.K,P.j,P.j],args:[[P.K,P.j,P.j],P.j]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.l,args:[[P.h,P.l],P.l]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,args:[,P.j]},{func:1,ret:F.a6,args:[F.a6],named:{color:V.Q}},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[F.A,F.A]},{func:1,ret:P.D,args:[F.b7]},{func:1,args:[P.j]},{func:1,ret:P.D,args:[P.bh]},{func:1,ret:P.D,args:[,],opt:[,]},{func:1,ret:-1,args:[F.a6]},{func:1,ret:P.l,args:[,,]},{func:1,ret:-1,args:[P.b],opt:[P.ax]},{func:1,ret:[P.aR,,],args:[,]}]
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
if(x==y)H.og(d||a)
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
Isolate.ap=a.ap
Isolate.dw=a.dw
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
if(typeof dartMainRunner==="function")dartMainRunner(Z.h0,[])
else Z.h0([])})})()
//# sourceMappingURL=test.dart.js.map
