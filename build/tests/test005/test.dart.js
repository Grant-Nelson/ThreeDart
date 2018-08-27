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
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
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
var dart=[["","",,H,{"^":"",lO:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
d5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ce:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d2==null){H.kG()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.es("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cw()]
if(v!=null)return v
v=H.kL(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cw(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
l:{"^":"a;",
t:function(a,b){return a===b},
gN:function(a){return H.bl(a)},
i:["dr",function(a){return"Instance of '"+H.aT(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fS:{"^":"l;",
i:function(a){return String(a)},
gN:function(a){return a?519018:218159},
$isae:1},
dB:{"^":"l;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gN:function(a){return 0},
$isG:1},
cx:{"^":"l;",
gN:function(a){return 0},
i:["ds",function(a){return String(a)}]},
hv:{"^":"cx;"},
cP:{"^":"cx;"},
bI:{"^":"cx;",
i:function(a){var z=a[$.$get$dp()]
if(z==null)return this.ds(a)
return"JavaScript function for "+H.j(J.a3(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscq:1},
aQ:{"^":"l;$ti",
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.p(P.ac("add"))
a.push(b)},
H:function(a,b){var z
if(!!a.fixed$length)H.p(P.ac("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.b7(a))}},
w:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.T(z,y,H.j(a[y]))
return z.join(b)},
fz:function(a){return this.w(a,"")},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bg:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.a9(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.a9(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.y(a,0)])
return H.b(a.slice(b,c),[H.y(a,0)])},
gbT:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.fQ())},
aA:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.ct(a,"[","]")},
gR:function(a){return new J.ar(a,a.length,0,[H.y(a,0)])},
gN:function(a){return H.bl(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.ac("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.bV(b,"newLength",null))
if(b<0)throw H.d(P.a9(b,0,null,"newLength",null))
a.length=b},
T:function(a,b,c){H.W(b)
H.B(c,H.y(a,0))
if(!!a.immutable$list)H.p(P.ac("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aK(a,b))
if(b>=a.length||b<0)throw H.d(H.aK(a,b))
a[b]=c},
$isi:1,
$isc:1,
q:{
fR:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.bV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a9(a,0,4294967295,"length",null))
return J.dy(new Array(a),b)},
dy:function(a,b){return J.bf(H.b(a,[b]))},
bf:function(a){H.bE(a)
a.fixed$length=Array
return a}}},
lN:{"^":"aQ;$ti"},
ar:{"^":"a;a,b,c,0d,$ti",
gK:function(a){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c4:{"^":"l;",
gfw:function(a){return a===0?1/a<0:a<0},
h7:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.ac(""+a+".toInt()"))},
bR:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.ac(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.ac(""+a+".round()"))},
de:function(a,b){var z
if(b>20)throw H.d(P.a9(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfw(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gN:function(a){return a&0x1FFFFFFF},
dl:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
du:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cv(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.cv(a,b)},
cv:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.ac("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aV:function(a,b){var z
if(a>0)z=this.eK(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eK:function(a,b){return b>31?0:a>>>b},
af:function(a,b){if(typeof b!=="number")throw H.d(H.aJ(b))
return a<b},
$ist:1,
$isP:1},
dA:{"^":"c4;",$isC:1},
dz:{"^":"c4;"},
cv:{"^":"l;",
bI:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aK(a,b))
if(b<0)throw H.d(H.aK(a,b))
if(b>=a.length)H.p(H.aK(a,b))
return a.charCodeAt(b)},
aQ:function(a,b){if(b>=a.length)throw H.d(H.aK(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.Q(b)
if(typeof b!=="string")throw H.d(P.bV(b,null,null))
return a+b},
bh:function(a,b,c){H.W(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.c7(b,null,null))
if(b>c)throw H.d(P.c7(b,null,null))
if(c>a.length)throw H.d(P.c7(c,null,null))
return a.substring(b,c)},
c7:function(a,b){return this.bh(a,b,null)},
m:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fM:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.m(c,z)+a},
Y:function(a,b){return this.fM(a,b," ")},
ff:function(a,b,c){if(c>a.length)throw H.d(P.a9(c,0,a.length,null,null))
return H.f7(a,b,c)},
i:function(a){return a},
gN:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdN:1,
$ism:1}}],["","",,H,{"^":"",
fQ:function(){return new P.i3("No element")},
X:{"^":"iE;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.bI(this.a,b)},
$aset:function(){return[P.C]},
$asq:function(){return[P.C]},
$asi:function(){return[P.C]},
$asc:function(){return[P.C]}},
fB:{"^":"i;"},
dF:{"^":"a;a,b,c,0d,$ti",
gK:function(a){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bS(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.b7(z))
w=this.c
if(typeof x!=="number")return H.z(x)
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
h9:{"^":"i;a,b,$ti",
gR:function(a){return new H.ha(J.bF(this.a),this.b,this.$ti)},
gk:function(a){return J.b5(this.a)},
A:function(a,b){return this.b.$1(J.d9(this.a,b))},
$asi:function(a,b){return[b]}},
ha:{"^":"cu;0a,b,c,$ti",
B:function(){var z=this.b
if(z.B()){this.a=this.c.$1(z.gK(z))
return!0}this.a=null
return!1},
gK:function(a){return this.a},
$ascu:function(a,b){return[b]}},
iV:{"^":"i;a,b,$ti",
gR:function(a){return new H.iW(J.bF(this.a),this.b,this.$ti)}},
iW:{"^":"cu;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gK(z)))return!0
return!1},
gK:function(a){var z=this.a
return z.gK(z)}},
c1:{"^":"a;$ti"},
et:{"^":"a;$ti"},
iE:{"^":"c5+et;"}}],["","",,H,{"^":"",
kB:function(a){return init.types[H.W(a)]},
kJ:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a3(a)
if(typeof z!=="string")throw H.d(H.aJ(a))
return z},
bl:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aT:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.I(a).$iscP){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.aQ(w,0)===36)w=C.h.c7(w,1)
r=H.d3(H.bE(H.aL(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dR:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hF:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aJ(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aV(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aJ(w))}return H.dR(z)},
dS:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aJ(x))
if(x<0)throw H.d(H.aJ(x))
if(x>65535)return H.hF(a)}return H.dR(a)},
hE:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aV(z,10))>>>0,56320|z&1023)}throw H.d(P.a9(a,0,1114111,null,null))},
a5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hD:function(a){return a.b?H.a5(a).getUTCFullYear()+0:H.a5(a).getFullYear()+0},
hB:function(a){return a.b?H.a5(a).getUTCMonth()+1:H.a5(a).getMonth()+1},
hx:function(a){return a.b?H.a5(a).getUTCDate()+0:H.a5(a).getDate()+0},
hy:function(a){return a.b?H.a5(a).getUTCHours()+0:H.a5(a).getHours()+0},
hA:function(a){return a.b?H.a5(a).getUTCMinutes()+0:H.a5(a).getMinutes()+0},
hC:function(a){return a.b?H.a5(a).getUTCSeconds()+0:H.a5(a).getSeconds()+0},
hz:function(a){return a.b?H.a5(a).getUTCMilliseconds()+0:H.a5(a).getMilliseconds()+0},
z:function(a){throw H.d(H.aJ(a))},
e:function(a,b){if(a==null)J.b5(a)
throw H.d(H.aK(a,b))},
aK:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aq(!0,b,"index",null)
z=H.W(J.b5(a))
if(!(b<0)){if(typeof z!=="number")return H.z(z)
y=b>=z}else y=!0
if(y)return P.K(b,a,"index",null,z)
return P.c7(b,"index",null)},
kx:function(a,b,c){if(a>c)return new P.c6(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c6(a,c,!0,b,"end","Invalid value")
return new P.aq(!0,b,"end",null)},
aJ:function(a){return new P.aq(!0,a,null,null)},
ks:function(a){if(typeof a!=="number")throw H.d(H.aJ(a))
return a},
d:function(a){var z
if(a==null)a=new P.dM()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f9})
z.name=""}else z.toString=H.f9
return z},
f9:function(){return J.a3(this.dartException)},
p:function(a){throw H.d(a)},
x:function(a){throw H.d(P.b7(a))},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aV(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cy(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dL(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eb()
u=$.$get$ec()
t=$.$get$ed()
s=$.$get$ee()
r=$.$get$ei()
q=$.$get$ej()
p=$.$get$eg()
$.$get$ef()
o=$.$get$el()
n=$.$get$ek()
m=v.X(y)
if(m!=null)return z.$1(H.cy(H.Q(y),m))
else{m=u.X(y)
if(m!=null){m.method="call"
return z.$1(H.cy(H.Q(y),m))}else{m=t.X(y)
if(m==null){m=s.X(y)
if(m==null){m=r.X(y)
if(m==null){m=q.X(y)
if(m==null){m=p.X(y)
if(m==null){m=s.X(y)
if(m==null){m=o.X(y)
if(m==null){m=n.X(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dL(H.Q(y),m))}}return z.$1(new H.iD(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e_()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aq(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e_()
return a},
b3:function(a){var z
if(a==null)return new H.eK(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eK(a)},
kz:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.T(0,a[y],a[x])}return b},
kI:function(a,b,c,d,e,f){H.n(a,"$iscq")
switch(H.W(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.o("Unsupported number of arguments for wrapped closure"))},
b1:function(a,b){var z
H.W(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kI)
a.$identity=z
return z},
fq:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.hI(z).r}else x=d
w=e?Object.create(new H.i4().constructor.prototype):Object.create(new H.cj(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aj
if(typeof u!=="number")return u.C()
$.aj=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dj(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kB,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dd:H.ck
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dj(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fn:function(a,b,c,d){var z=H.ck
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dj:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fp(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fn(y,!w,z,b)
if(y===0){w=$.aj
if(typeof w!=="number")return w.C()
$.aj=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b6
if(v==null){v=H.bW("self")
$.b6=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aj
if(typeof w!=="number")return w.C()
$.aj=w+1
t+=w
w="return function("+t+"){return this."
v=$.b6
if(v==null){v=H.bW("self")
$.b6=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fo:function(a,b,c,d){var z,y
z=H.ck
y=H.dd
switch(b?-1:a){case 0:throw H.d(H.hR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fp:function(a,b){var z,y,x,w,v,u,t,s
z=$.b6
if(z==null){z=H.bW("self")
$.b6=z}y=$.dc
if(y==null){y=H.bW("receiver")
$.dc=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fo(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aj
if(typeof y!=="number")return y.C()
$.aj=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aj
if(typeof y!=="number")return y.C()
$.aj=y+1
return new Function(z+y+"}")()},
cZ:function(a,b,c,d,e,f,g){var z,y
z=J.bf(H.bE(b))
H.W(c)
y=!!J.I(d).$isc?J.bf(d):d
return H.fq(a,z,c,y,!!e,f,g)},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.an(a,"String"))},
kO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.an(a,"num"))},
eY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.an(a,"bool"))},
W:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.an(a,"int"))},
f5:function(a,b){throw H.d(H.an(a,H.Q(b).substring(3)))},
kQ:function(a,b){var z=J.bS(b)
throw H.d(H.fl(a,z.bh(b,3,z.gk(b))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.f5(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.kQ(a,b)},
bE:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.d(H.an(a,"List"))},
kK:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.f5(a,b)},
eZ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.W(z)]
else return a.$S()}return},
bR:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eZ(J.I(a))
if(z==null)return!1
y=H.f1(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.cV)return a
$.cV=!0
try{if(H.bR(a,b))return a
z=H.bU(b)
y=H.an(a,z)
throw H.d(y)}finally{$.cV=!1}},
d0:function(a,b){if(a!=null&&!H.cY(a,b))H.p(H.an(a,H.bU(b)))
return a},
eT:function(a){var z
if(a instanceof H.r){z=H.eZ(J.I(a))
if(z!=null)return H.bU(z)
return"Closure"}return H.aT(a)},
kV:function(a){throw H.d(new P.ft(H.Q(a)))},
f_:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aL:function(a){if(a==null)return
return a.$ti},
mL:function(a,b,c){return H.b4(a["$as"+H.j(c)],H.aL(b))},
bD:function(a,b,c,d){var z
H.Q(c)
H.W(d)
z=H.b4(a["$as"+H.j(c)],H.aL(b))
return z==null?null:z[d]},
aE:function(a,b,c){var z
H.Q(b)
H.W(c)
z=H.b4(a["$as"+H.j(b)],H.aL(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.W(b)
z=H.aL(a)
return z==null?null:z[b]},
bU:function(a){var z=H.aM(a,null)
return z},
aM:function(a,b){var z,y
H.w(b,"$isc",[P.m],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d3(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.W(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.j(b[y])}if('func' in a)return H.ki(a,b)
if('futureOr' in a)return"FutureOr<"+H.aM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ki:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.h.C(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aM(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aM(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aM(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aM(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.ky(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.Q(z[l])
n=n+m+H.aM(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d3:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.m],"$asc")
if(a==null)return""
z=new P.bO("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aM(u,c)}v="<"+z.i(0)+">"
return v},
b4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b0:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aL(a)
y=J.I(a)
if(y[b]==null)return!1
return H.eW(H.b4(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.Q(b)
H.bE(c)
H.Q(d)
if(a==null)return a
z=H.b0(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d3(c,0,null)
throw H.d(H.an(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eW:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.af(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.af(a[y],b,c[y],d))return!1
return!0},
mJ:function(a,b,c){return a.apply(b,H.b4(J.I(b)["$as"+H.j(c)],H.aL(b)))},
f2:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.f2(z)}return!1},
cY:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.f2(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cY(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bR(a,b)}y=J.I(a).constructor
x=H.aL(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.af(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.cY(a,b))throw H.d(H.an(a,H.bU(b)))
return a},
af:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.af(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.f1(a,b,c,d)
if('func' in a)return c.builtin$cls==="cq"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.af("type" in a?a.type:null,b,x,d)
else if(H.af(a,b,x,d))return!0
else{if(!('$is'+"bb" in y.prototype))return!1
w=y.prototype["$as"+"bb"]
v=H.b4(w,z?a.slice(1):null)
return H.af(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bU(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eW(H.b4(r,z),b,u,d)},
f1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kN(m,b,l,d)},
kN:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.af(c[w],d,a[w],b))return!1}return!0},
mK:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
kL:function(a){var z,y,x,w,v,u
z=H.Q($.f0.$1(a))
y=$.cd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cf[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.Q($.eV.$2(a,z))
if(z!=null){y=$.cd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cf[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cg(x)
$.cd[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cf[z]=x
return x}if(v==="-"){u=H.cg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f4(a,x)
if(v==="*")throw H.d(P.es(z))
if(init.leafTags[z]===true){u=H.cg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f4(a,x)},
f4:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d5(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cg:function(a){return J.d5(a,!1,null,!!a.$isA)},
kM:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cg(z)
else return J.d5(z,c,null,null)},
kG:function(){if(!0===$.d2)return
$.d2=!0
H.kH()},
kH:function(){var z,y,x,w,v,u,t,s
$.cd=Object.create(null)
$.cf=Object.create(null)
H.kC()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f6.$1(v)
if(u!=null){t=H.kM(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kC:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b_(C.A,H.b_(C.F,H.b_(C.n,H.b_(C.n,H.b_(C.E,H.b_(C.B,H.b_(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f0=new H.kD(v)
$.eV=new H.kE(u)
$.f6=new H.kF(t)},
b_:function(a,b){return a(b)||b},
f7:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f8:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hH:{"^":"a;a,b,c,d,e,f,r,0x",q:{
hI:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bf(z)
y=z[0]
x=z[1]
return new H.hH(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iq:{"^":"a;a,b,c,d,e,f",
X:function(a){var z,y,x
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
q:{
am:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eh:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hs:{"^":"V;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dL:function(a,b){return new H.hs(a,b==null?null:b.method)}}},
fV:{"^":"V;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
cy:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fV(a,y,z?null:b.receiver)}}},
iD:{"^":"V;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kW:{"^":"r:17;a",
$1:function(a){if(!!J.I(a).$isV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eK:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isai:1},
r:{"^":"a;",
i:function(a){return"Closure '"+H.aT(this).trim()+"'"},
gdh:function(){return this},
$iscq:1,
gdh:function(){return this}},
e4:{"^":"r;"},
i4:{"^":"e4;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cj:{"^":"e4;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gN:function(a){var z,y
z=this.c
if(z==null)y=H.bl(this.a)
else y=typeof z!=="object"?J.ap(z):H.bl(z)
return(y^H.bl(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aT(z)+"'")},
q:{
ck:function(a){return a.a},
dd:function(a){return a.c},
bW:function(a){var z,y,x,w,v
z=new H.cj("self","target","receiver","name")
y=J.bf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ir:{"^":"V;a",
i:function(a){return this.a},
q:{
an:function(a,b){return new H.ir("TypeError: "+H.j(P.c0(a))+": type '"+H.eT(a)+"' is not a subtype of type '"+b+"'")}}},
fk:{"^":"V;a",
i:function(a){return this.a},
q:{
fl:function(a,b){return new H.fk("CastError: "+H.j(P.c0(a))+": type '"+H.eT(a)+"' is not a subtype of type '"+b+"'")}}},
hQ:{"^":"V;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
hR:function(a){return new H.hQ(a)}}},
aR:{"^":"h7;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gae:function(a){return new H.dE(this,[H.y(this,0)])},
cD:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cl(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cl(y,b)}else return this.fu(b)},
fu:function(a){var z=this.d
if(z==null)return!1
return this.bS(this.bn(z,J.ap(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aS(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aS(w,b)
x=y==null?null:y.b
return x}else return this.fv(b)},
fv:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bn(z,J.ap(a)&0x3ffffff)
x=this.bS(y,a)
if(x<0)return
return y[x].b},
T:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bp()
this.b=z}this.cd(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bp()
this.c=y}this.cd(y,b,c)}else{x=this.d
if(x==null){x=this.bp()
this.d=x}w=J.ap(b)&0x3ffffff
v=this.bn(x,w)
if(v==null)this.bw(x,w,[this.bq(b,c)])
else{u=this.bS(v,b)
if(u>=0)v[u].b=c
else v.push(this.bq(b,c))}}},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.b7(this))
z=z.c}},
cd:function(a,b,c){var z
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
z=this.aS(a,b)
if(z==null)this.bw(a,b,this.bq(b,c))
else z.b=c},
e0:function(){this.r=this.r+1&67108863},
bq:function(a,b){var z,y
z=new H.h_(H.B(a,H.y(this,0)),H.B(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e0()
return z},
bS:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.dG(this)},
aS:function(a,b){return a[b]},
bn:function(a,b){return a[b]},
bw:function(a,b,c){a[b]=c},
dU:function(a,b){delete a[b]},
cl:function(a,b){return this.aS(a,b)!=null},
bp:function(){var z=Object.create(null)
this.bw(z,"<non-identifier-key>",z)
this.dU(z,"<non-identifier-key>")
return z},
$isdD:1},
h_:{"^":"a;a,b,0c,0d"},
dE:{"^":"fB;a,$ti",
gk:function(a){return this.a.a},
gR:function(a){var z,y
z=this.a
y=new H.h0(z,z.r,this.$ti)
y.c=z.e
return y}},
h0:{"^":"a;a,b,0c,0d,$ti",
gK:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kD:{"^":"r:17;a",
$1:function(a){return this.a(a)}},
kE:{"^":"r:34;a",
$2:function(a,b){return this.a(a,b)}},
kF:{"^":"r:32;a",
$1:function(a){return this.a(H.Q(a))}},
fT:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdN:1,
q:{
fU:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.fL("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
ky:function(a){return J.dy(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bz:function(a){return a},
aI:function(a,b,c){H.bE(b)
if(a>>>0!==a||a>=c)throw H.d(H.aK(b,a))},
kh:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.kx(a,b,c))
return b},
ho:{"^":"l;",$isms:1,"%":"DataView;ArrayBufferView;cD|eE|eF|hn|eG|eH|aH"},
cD:{"^":"ho;",
gk:function(a){return a.length},
$isA:1,
$asA:I.d_},
hn:{"^":"eF;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
$asc1:function(){return[P.t]},
$asq:function(){return[P.t]},
$isi:1,
$asi:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aH:{"^":"eH;",
$asc1:function(){return[P.C]},
$asq:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$isc:1,
$asc:function(){return[P.C]}},
lY:{"^":"aH;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lZ:{"^":"aH;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int32Array"},
m_:{"^":"aH;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m0:{"^":"aH;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m1:{"^":"aH;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m2:{"^":"aH;",
gk:function(a){return a.length},
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hp:{"^":"aH;",
gk:function(a){return a.length},
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
bg:function(a,b,c){return new Uint8Array(a.subarray(b,H.kh(b,c,a.length)))},
"%":";Uint8Array"},
eE:{"^":"cD+q;"},
eF:{"^":"eE+c1;"},
eG:{"^":"cD+q;"},
eH:{"^":"eG+c1;"}}],["","",,P,{"^":"",
iY:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kp()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b1(new P.j_(z),1)).observe(y,{childList:true})
return new P.iZ(z,y,x)}else if(self.setImmediate!=null)return P.kq()
return P.kr()},
my:[function(a){self.scheduleImmediate(H.b1(new P.j0(H.f(a,{func:1,ret:-1})),0))},"$1","kp",4,0,8],
mz:[function(a){self.setImmediate(H.b1(new P.j1(H.f(a,{func:1,ret:-1})),0))},"$1","kq",4,0,8],
mA:[function(a){P.cL(C.m,H.f(a,{func:1,ret:-1}))},"$1","kr",4,0,8],
cL:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.f.V(a.a,1000)
return P.jW(z<0?0:z,b)},
e7:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.aU]})
z=C.f.V(a.a,1000)
return P.jX(z<0?0:z,b)},
kl:function(a,b){if(H.bR(a,{func:1,args:[P.a,P.ai]}))return b.fV(a,null,P.a,P.ai)
if(H.bR(a,{func:1,args:[P.a]}))return H.f(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.bV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kk:function(){var z,y
for(;z=$.aZ,z!=null;){$.bB=null
y=z.b
$.aZ=y
if(y==null)$.bA=null
z.a.$0()}},
mI:[function(){$.cW=!0
try{P.kk()}finally{$.bB=null
$.cW=!1
if($.aZ!=null)$.$get$cS().$1(P.eX())}},"$0","eX",0,0,2],
eS:function(a){var z=new P.ey(H.f(a,{func:1,ret:-1}))
if($.aZ==null){$.bA=z
$.aZ=z
if(!$.cW)$.$get$cS().$1(P.eX())}else{$.bA.b=z
$.bA=z}},
ko:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.aZ
if(z==null){P.eS(a)
$.bB=$.bA
return}y=new P.ey(a)
x=$.bB
if(x==null){y.b=z
$.bB=y
$.aZ=y}else{y.b=x.b
x.b=y
$.bB=y
if(y.b==null)$.bA=y}},
kR:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.L
if(C.i===y){P.cc(null,null,C.i,a)
return}y.toString
P.cc(null,null,y,H.f(y.bC(a),z))},
ik:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.L
if(y===C.i){y.toString
return P.cL(a,b)}return P.cL(a,H.f(y.bC(b),z))},
il:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aU]}
H.f(b,z)
y=$.L
if(y===C.i){y.toString
return P.e7(a,b)}x=y.cB(b,P.aU)
$.L.toString
return P.e7(a,H.f(x,z))},
cb:function(a,b,c,d,e){var z={}
z.a=d
P.ko(new P.km(z,e))},
eQ:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.L
if(y===c)return d.$0()
$.L=c
z=y
try{y=d.$0()
return y}finally{$.L=z}},
eR:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.L
if(y===c)return d.$1(e)
$.L=c
z=y
try{y=d.$1(e)
return y}finally{$.L=z}},
kn:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.L
if(y===c)return d.$2(e,f)
$.L=c
z=y
try{y=d.$2(e,f)
return y}finally{$.L=z}},
cc:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.bC(d):c.fb(d,-1)
P.eS(d)},
j_:{"^":"r:11;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iZ:{"^":"r:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j0:{"^":"r:1;a",
$0:function(){this.a.$0()}},
j1:{"^":"r:1;a",
$0:function(){this.a.$0()}},
eN:{"^":"a;a,0b,c",
dH:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b1(new P.jZ(this,b),0),a)
else throw H.d(P.ac("`setTimeout()` not found."))},
dI:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b1(new P.jY(this,a,Date.now(),b),0),a)
else throw H.d(P.ac("Periodic timer."))},
$isaU:1,
q:{
jW:function(a,b){var z=new P.eN(!0,0)
z.dH(a,b)
return z},
jX:function(a,b){var z=new P.eN(!1,0)
z.dI(a,b)
return z}}},
jZ:{"^":"r:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jY:{"^":"r:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.du(w,x)}z.c=y
this.d.$1(z)}},
aY:{"^":"a;0a,b,c,d,e,$ti",
fE:function(a){if(this.c!==6)return!0
return this.b.b.c1(H.f(this.d,{func:1,ret:P.ae,args:[P.a]}),a.a,P.ae,P.a)},
ft:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bR(z,{func:1,args:[P.a,P.ai]}))return H.d0(w.h0(z,a.a,a.b,null,y,P.ai),x)
else return H.d0(w.c1(H.f(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aC:{"^":"a;cu:a<,b,0ez:c<,$ti",
dd:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.L
if(y!==C.i){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kl(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aC(0,$.L,[c])
w=b==null?1:3
this.ce(new P.aY(x,w,a,b,[z,c]))
return x},
h6:function(a,b){return this.dd(a,null,b)},
ce:function(a){var z,y
z=this.a
if(z<=1){a.a=H.n(this.c,"$isaY")
this.c=a}else{if(z===2){y=H.n(this.c,"$isaC")
z=y.a
if(z<4){y.ce(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cc(null,null,z,H.f(new P.jf(this,a),{func:1,ret:-1}))}},
cq:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.n(this.c,"$isaY")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.n(this.c,"$isaC")
y=u.a
if(y<4){u.cq(a)
return}this.a=y
this.c=u.c}z.a=this.aU(a)
y=this.b
y.toString
P.cc(null,null,y,H.f(new P.jk(z,this),{func:1,ret:-1}))}},
bs:function(){var z=H.n(this.c,"$isaY")
this.c=null
return this.aU(z)},
aU:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ci:function(a){var z,y,x,w
z=H.y(this,0)
H.d0(a,{futureOr:1,type:z})
y=this.$ti
x=H.b0(a,"$isbb",y,"$asbb")
if(x){z=H.b0(a,"$isaC",y,null)
if(z)P.eA(a,this)
else P.jg(a,this)}else{w=this.bs()
H.B(a,z)
this.a=4
this.c=a
P.bw(this,w)}},
bk:[function(a,b){var z
H.n(b,"$isai")
z=this.bs()
this.a=8
this.c=new P.a8(a,b)
P.bw(this,z)},function(a){return this.bk(a,null)},"hg","$2","$1","gdQ",4,2,30],
$isbb:1,
q:{
jg:function(a,b){var z,y,x
b.a=1
try{a.dd(new P.jh(b),new P.ji(b),null)}catch(x){z=H.aN(x)
y=H.b3(x)
P.kR(new P.jj(b,z,y))}},
eA:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.n(a.c,"$isaC")
if(z>=4){y=b.bs()
b.a=a.a
b.c=a.c
P.bw(b,y)}else{y=H.n(b.c,"$isaY")
b.a=2
b.c=a
a.cq(y)}},
bw:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.n(y.c,"$isa8")
y=y.b
u=v.a
t=v.b
y.toString
P.cb(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.n(r,"$isa8")
y=y.b
u=r.a
t=r.b
y.toString
P.cb(null,null,y,u,t)
return}o=$.L
if(o==null?q!=null:o!==q)$.L=q
else o=null
y=b.c
if(y===8)new P.jn(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jm(x,b,r).$0()}else if((y&2)!==0)new P.jl(z,x,b).$0()
if(o!=null)$.L=o
y=x.b
if(!!J.I(y).$isbb){if(y.a>=4){n=H.n(t.c,"$isaY")
t.c=null
b=t.aU(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eA(y,t)
return}}m=b.b
n=H.n(m.c,"$isaY")
m.c=null
b=m.aU(n)
y=x.a
u=x.b
if(!y){H.B(u,H.y(m,0))
m.a=4
m.c=u}else{H.n(u,"$isa8")
m.a=8
m.c=u}z.a=m
y=m}}}},
jf:{"^":"r:1;a,b",
$0:function(){P.bw(this.a,this.b)}},
jk:{"^":"r:1;a,b",
$0:function(){P.bw(this.b,this.a.a)}},
jh:{"^":"r:11;a",
$1:function(a){var z=this.a
z.a=0
z.ci(a)}},
ji:{"^":"r:28;a",
$2:function(a,b){this.a.bk(a,H.n(b,"$isai"))},
$1:function(a){return this.$2(a,null)}},
jj:{"^":"r:1;a,b,c",
$0:function(){this.a.bk(this.b,this.c)}},
jn:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.da(H.f(w.d,{func:1}),null)}catch(v){y=H.aN(v)
x=H.b3(v)
if(this.d){w=H.n(this.a.a.c,"$isa8").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.n(this.a.a.c,"$isa8")
else u.b=new P.a8(y,x)
u.a=!0
return}if(!!J.I(z).$isbb){if(z instanceof P.aC&&z.gcu()>=4){if(z.gcu()===8){w=this.b
w.b=H.n(z.gez(),"$isa8")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.h6(new P.jo(t),null)
w.a=!1}}},
jo:{"^":"r:27;a",
$1:function(a){return this.a}},
jm:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.B(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.c1(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aN(t)
y=H.b3(t)
x=this.a
x.b=new P.a8(z,y)
x.a=!0}}},
jl:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.n(this.a.a.c,"$isa8")
w=this.c
if(w.fE(z)&&w.e!=null){v=this.b
v.b=w.ft(z)
v.a=!1}}catch(u){y=H.aN(u)
x=H.b3(u)
w=H.n(this.a.a.c,"$isa8")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a8(y,x)
s.a=!0}}},
ey:{"^":"a;a,0b"},
cH:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aC(0,$.L,[P.C])
z.a=0
this.fC(new P.i7(z,this),!0,new P.i8(z,y),y.gdQ())
return y}},
i7:{"^":"r;a,b",
$1:function(a){H.B(a,H.aE(this.b,"cH",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.aE(this.b,"cH",0)]}}},
i8:{"^":"r:1;a,b",
$0:function(){this.b.ci(this.a.a)}},
e1:{"^":"a;$ti"},
i6:{"^":"a;"},
aU:{"^":"a;"},
a8:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isV:1},
k5:{"^":"a;",$ismx:1},
km:{"^":"r:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dM()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
jI:{"^":"k5;",
h1:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.i===$.L){a.$0()
return}P.eQ(null,null,this,a,-1)}catch(x){z=H.aN(x)
y=H.b3(x)
P.cb(null,null,this,z,H.n(y,"$isai"))}},
h2:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.i===$.L){a.$1(b)
return}P.eR(null,null,this,a,b,-1,c)}catch(x){z=H.aN(x)
y=H.b3(x)
P.cb(null,null,this,z,H.n(y,"$isai"))}},
fb:function(a,b){return new P.jK(this,H.f(a,{func:1,ret:b}),b)},
bC:function(a){return new P.jJ(this,H.f(a,{func:1,ret:-1}))},
cB:function(a,b){return new P.jL(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
da:function(a,b){H.f(a,{func:1,ret:b})
if($.L===C.i)return a.$0()
return P.eQ(null,null,this,a,b)},
c1:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.L===C.i)return a.$1(b)
return P.eR(null,null,this,a,b,c,d)},
h0:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.L===C.i)return a.$2(b,c)
return P.kn(null,null,this,a,b,c,d,e,f)},
fV:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
jK:{"^":"r;a,b,c",
$0:function(){return this.a.da(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jJ:{"^":"r:2;a,b",
$0:function(){return this.a.h1(this.b)}},
jL:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.h2(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h2:function(a,b,c){H.bE(a)
return H.w(H.kz(a,new H.aR(0,0,[b,c])),"$isdD",[b,c],"$asdD")},
h1:function(a,b){return new H.aR(0,0,[a,b])},
h3:function(a,b,c,d){return new P.ju(0,0,[d])},
fP:function(a,b,c){var z,y
if(P.cX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bC()
C.a.h(y,a)
try{P.kj(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.e2(b,H.kK(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
ct:function(a,b,c){var z,y,x
if(P.cX(a))return b+"..."+c
z=new P.bO(b)
y=$.$get$bC()
C.a.h(y,a)
try{x=z
x.a=P.e2(x.gaj(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaj()+c
y=z.gaj()
return y.charCodeAt(0)==0?y:y},
cX:function(a){var z,y
for(z=0;y=$.$get$bC(),z<y.length;++z)if(a===y[z])return!0
return!1},
kj:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gR(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.j(z.gK(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gK(z);++x
if(!z.B()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gK(z);++x
for(;z.B();t=s,s=r){r=z.gK(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dG:function(a){var z,y,x
z={}
if(P.cX(a))return"{...}"
y=new P.bO("")
try{C.a.h($.$get$bC(),a)
x=y
x.a=x.gaj()+"{"
z.a=!0
J.fd(a,new P.h8(z,y))
z=y
z.a=z.gaj()+"}"}finally{z=$.$get$bC()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaj()
return z.charCodeAt(0)==0?z:z},
ju:{"^":"jp;a,0b,0c,0d,0e,0f,r,$ti",
gR:function(a){return P.eD(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cU()
this.b=z}return this.cf(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cU()
this.c=y}return this.cf(y,b)}else return this.dJ(0,b)},
dJ:function(a,b){var z,y,x
H.B(b,H.y(this,0))
z=this.d
if(z==null){z=P.cU()
this.d=z}y=this.cj(b)
x=z[y]
if(x==null)z[y]=[this.bj(b)]
else{if(this.co(x,b)>=0)return!1
x.push(this.bj(b))}return!0},
H:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cr(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cr(this.c,b)
else return this.er(0,b)},
er:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dY(z,b)
x=this.co(y,b)
if(x<0)return!1
this.cw(y.splice(x,1)[0])
return!0},
cf:function(a,b){H.B(b,H.y(this,0))
if(H.n(a[b],"$iscT")!=null)return!1
a[b]=this.bj(b)
return!0},
cr:function(a,b){var z
if(a==null)return!1
z=H.n(a[b],"$iscT")
if(z==null)return!1
this.cw(z)
delete a[b]
return!0},
cg:function(){this.r=this.r+1&67108863},
bj:function(a){var z,y
z=new P.cT(H.B(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cg()
return z},
cw:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cg()},
cj:function(a){return J.ap(a)&0x3ffffff},
dY:function(a,b){return a[this.cj(b)]},
co:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
q:{
cU:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cT:{"^":"a;a,0b,0c"},
jv:{"^":"a;a,b,0c,0d,$ti",
gK:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.y(this,0))
this.c=z.b
return!0}}},
q:{
eD:function(a,b,c){var z=new P.jv(a,b,[c])
z.c=a.e
return z}}},
jp:{"^":"hS;"},
c5:{"^":"jw;",$isi:1,$isc:1},
q:{"^":"a;$ti",
gR:function(a){return new H.dF(a,this.gk(a),0,[H.bD(this,a,"q",0)])},
A:function(a,b){return this.j(a,b)},
h9:function(a,b){var z,y,x
z=H.b([],[H.bD(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.z(x)
if(!(y<x))break
C.a.T(z,y,this.j(a,y));++y}return z},
h8:function(a){return this.h9(a,!0)},
i:function(a){return P.ct(a,"[","]")}},
h7:{"^":"a7;"},
h8:{"^":"r:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
a7:{"^":"a;$ti",
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.bD(this,a,"a7",0),H.bD(this,a,"a7",1)]})
for(z=J.bF(this.gae(a));z.B();){y=z.gK(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b5(this.gae(a))},
i:function(a){return P.dG(a)},
$isa1:1},
hU:{"^":"a;$ti",
i:function(a){return P.ct(this,"{","}")},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.da("index"))
if(b<0)H.p(P.a9(b,0,null,"index",null))
for(z=P.eD(this,this.r,H.y(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
$isi:1},
hS:{"^":"hU;"},
jw:{"^":"a+q;"}}],["","",,P,{"^":"",cn:{"^":"a;$ti"},dm:{"^":"i6;$ti"},fD:{"^":"cn;",
$ascn:function(){return[P.m,[P.c,P.C]]}},iH:{"^":"fD;a"},iI:{"^":"dm;",
fh:function(a,b,c){var z,y,x,w
z=a.length
P.dT(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k4(0,0,x)
if(w.dW(a,b,z)!==z)w.cz(C.h.bI(a,z-1),0)
return C.I.bg(x,0,w.b)},
fg:function(a){return this.fh(a,0,null)},
$asdm:function(){return[P.m,[P.c,P.C]]}},k4:{"^":"a;a,b,c",
cz:function(a,b){var z,y,x,w,v
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
dW:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.bI(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.aQ(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cz(w,C.h.aQ(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fF:function(a){var z=J.I(a)
if(!!z.$isr)return z.i(a)
return"Instance of '"+H.aT(a)+"'"},
h4:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fR(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.T(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
h5:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gR(a);x.B();)C.a.h(y,H.B(x.gK(x),c))
if(b)return y
return H.w(J.bf(y),"$isc",z,"$asc")},
cI:function(a,b,c){var z,y
z=P.C
H.w(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.w(a,"$isaQ",[z],"$asaQ")
y=a.length
c=P.dT(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.af()
z=c<y}else z=!0
return H.dS(z?C.a.bg(a,b,c):a)}return P.i9(a,b,c)},
i9:function(a,b,c){var z,y,x
H.w(a,"$isi",[P.C],"$asi")
z=J.bF(a)
for(y=0;y<b;++y)if(!z.B())throw H.d(P.a9(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gK(z))
return H.dS(x)},
hJ:function(a,b,c){return new H.fT(a,H.fU(a,!1,!0,!1))},
k3:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.C],"$asc")
if(c===C.q){z=$.$get$eP().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fg(H.B(b,H.aE(c,"cn",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hE(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c0:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fF(a)},
o:function(a){return new P.ez(a)},
d7:function(a){H.kP(a)},
ae:{"^":"a;"},
"+bool":0,
aF:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a&&this.b===b.b},
gN:function(a){var z=this.a
return(z^C.f.aV(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fu(H.hD(this))
y=P.bG(H.hB(this))
x=P.bG(H.hx(this))
w=P.bG(H.hy(this))
v=P.bG(H.hA(this))
u=P.bG(H.hC(this))
t=P.fv(H.hz(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fu:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bG:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"P;"},
"+double":0,
b9:{"^":"a;a",
af:function(a,b){return C.f.af(this.a,H.n(b,"$isb9").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.b9))return!1
return this.a===b.a},
gN:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fA()
y=this.a
if(y<0)return"-"+new P.b9(0-y).i(0)
x=z.$1(C.f.V(y,6e7)%60)
w=z.$1(C.f.V(y,1e6)%60)
v=new P.fz().$1(y%1e6)
return""+C.f.V(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
dv:function(a,b,c,d,e,f){return new P.b9(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fz:{"^":"r:19;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fA:{"^":"r:19;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
V:{"^":"a;"},
dM:{"^":"V;",
i:function(a){return"Throw of null."}},
aq:{"^":"V;a,b,c,d",
gbm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbl:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbm()+y+x
if(!this.a)return w
v=this.gbl()
u=P.c0(this.b)
return w+v+": "+H.j(u)},
q:{
ff:function(a){return new P.aq(!1,null,null,a)},
bV:function(a,b,c){return new P.aq(!0,a,b,c)},
da:function(a){return new P.aq(!1,null,a,"Must not be null")}}},
c6:{"^":"aq;e,f,a,b,c,d",
gbm:function(){return"RangeError"},
gbl:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
c7:function(a,b,c){return new P.c6(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
dT:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.z(a)
if(0<=a){if(typeof c!=="number")return H.z(c)
z=a>c}else z=!0
if(z)throw H.d(P.a9(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.z(c)
z=b>c}else z=!0
if(z)throw H.d(P.a9(b,a,c,"end",f))
return b}return c}}},
fO:{"^":"aq;e,k:f>,a,b,c,d",
gbm:function(){return"RangeError"},
gbl:function(){if(J.fa(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
K:function(a,b,c,d,e){var z=H.W(e!=null?e:J.b5(b))
return new P.fO(b,z,!0,a,c,"Index out of range")}}},
iF:{"^":"V;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ac:function(a){return new P.iF(a)}}},
iC:{"^":"V;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
es:function(a){return new P.iC(a)}}},
i3:{"^":"V;a",
i:function(a){return"Bad state: "+this.a}},
fr:{"^":"V;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c0(z))+"."},
q:{
b7:function(a){return new P.fr(a)}}},
ht:{"^":"a;",
i:function(a){return"Out of Memory"},
$isV:1},
e_:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isV:1},
ft:{"^":"V;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ez:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fL:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.bh(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"P;"},
"+int":0,
i:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gR(this)
for(y=0;z.B();)++y
return y},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.da("index"))
if(b<0)H.p(P.a9(b,0,null,"index",null))
for(z=this.gR(this),y=0;z.B();){x=z.gK(z)
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
i:function(a){return P.fP(this,"(",")")}},
cu:{"^":"a;$ti"},
c:{"^":"a;$ti",$isi:1},
"+List":0,
a1:{"^":"a;$ti"},
G:{"^":"a;",
gN:function(a){return P.a.prototype.gN.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
P:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gN:function(a){return H.bl(this)},
i:function(a){return"Instance of '"+H.aT(this)+"'"},
toString:function(){return this.i(this)}},
ai:{"^":"a;"},
m:{"^":"a;",$isdN:1},
"+String":0,
bO:{"^":"a;aj:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
e2:function(a,b,c){var z=J.bF(b)
if(!z.B())return a
if(c.length===0){do a+=H.j(z.gK(z))
while(z.B())}else{a+=H.j(z.gK(z))
for(;z.B();)a=a+c+H.j(z.gK(z))}return a}}}}],["","",,W,{"^":"",
cm:function(a,b){var z=document.createElement("canvas")
return z},
fC:function(a){H.n(a,"$isa0")
return"wheel"},
c9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eC:function(a,b,c,d){var z,y
z=W.c9(W.c9(W.c9(W.c9(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eU:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.L
if(z===C.i)return a
return z.cB(a,b)},
be:{"^":"Y;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kX:{"^":"cG;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kY:{"^":"l;0k:length=","%":"AccessibleNodeList"},
kZ:{"^":"be;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l_:{"^":"be;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fj:{"^":"l;","%":";Blob"},
cl:{"^":"be;",
be:function(a,b,c){if(c!=null)return a.getContext(b,P.kt(c,null))
return a.getContext(b)},
dj:function(a,b){return this.be(a,b,null)},
$iscl:1,
"%":"HTMLCanvasElement"},
di:{"^":"l;",$isdi:1,"%":"CanvasRenderingContext2D"},
l5:{"^":"J;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l7:{"^":"bZ;0k:length=","%":"CSSPerspective"},
l8:{"^":"cp;0n:x=,0p:y=","%":"CSSPositionValue"},
l9:{"^":"bZ;0n:x=,0p:y=","%":"CSSRotation"},
b8:{"^":"l;",$isb8:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
la:{"^":"bZ;0n:x=,0p:y=","%":"CSSScale"},
lb:{"^":"j5;0k:length=",
dk:function(a,b){var z=a.getPropertyValue(this.dN(a,b))
return z==null?"":z},
dN:function(a,b){var z,y
z=$.$get$dn()
y=z[b]
if(typeof y==="string")return y
y=this.eL(a,b)
z[b]=y
return y},
eL:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fw()+b
if(z in a)return z
return b},
gbD:function(a){return a.bottom},
ga5:function(a){return a.height},
gav:function(a){return a.left},
gaJ:function(a){return a.right},
gaM:function(a){return a.top},
ga7:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fs:{"^":"a;",
gav:function(a){return this.dk(a,"left")}},
cp:{"^":"l;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bZ:{"^":"l;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lc:{"^":"cp;0k:length=","%":"CSSTransformValue"},
ld:{"^":"bZ;0n:x=,0p:y=","%":"CSSTranslation"},
le:{"^":"cp;0k:length=","%":"CSSUnparsedValue"},
lf:{"^":"l;0k:length=","%":"DataTransferItemList"},
lg:{"^":"l;0n:x=,0p:y=","%":"DeviceAcceleration"},
lh:{"^":"l;",
i:function(a){return String(a)},
"%":"DOMException"},
li:{"^":"fx;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fx:{"^":"l;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
lj:{"^":"j7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a6,P.P]]},
$asq:function(){return[[P.a6,P.P]]},
$isi:1,
$asi:function(){return[[P.a6,P.P]]},
$isc:1,
$asc:function(){return[[P.a6,P.P]]},
$asv:function(){return[[P.a6,P.P]]},
"%":"ClientRectList|DOMRectList"},
fy:{"^":"l;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.ga7(a))+" x "+H.j(this.ga5(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.b0(b,"$isa6",[P.P],"$asa6")
if(!z)return!1
z=J.bT(b)
return a.left===z.gav(b)&&a.top===z.gaM(b)&&this.ga7(a)===z.ga7(b)&&this.ga5(a)===z.ga5(b)},
gN:function(a){return W.eC(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga7(a)&0x1FFFFFFF,this.ga5(a)&0x1FFFFFFF)},
gbD:function(a){return a.bottom},
ga5:function(a){return a.height},
gav:function(a){return a.left},
gaJ:function(a){return a.right},
gaM:function(a){return a.top},
ga7:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa6:1,
$asa6:function(){return[P.P]},
"%":";DOMRectReadOnly"},
lk:{"^":"j9;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.m]},
$asq:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$asv:function(){return[P.m]},
"%":"DOMStringList"},
ll:{"^":"l;0k:length=","%":"DOMTokenList"},
j4:{"^":"c5;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.n(z[b],"$isY")},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var z=this.h8(this)
return new J.ar(z,z.length,0,[H.y(z,0)])},
$asq:function(){return[W.Y]},
$asi:function(){return[W.Y]},
$asc:function(){return[W.Y]}},
Y:{"^":"J;",
gcC:function(a){return new W.j4(a,a.children)},
gaY:function(a){return P.hG(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.P)},
i:function(a){return a.localName},
$isY:1,
"%":";Element"},
a4:{"^":"l;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a0:{"^":"l;",
cA:["dq",function(a,b,c,d){H.f(c,{func:1,args:[W.a4]})
if(c!=null)this.dK(a,b,c,!1)}],
dK:function(a,b,c,d){return a.addEventListener(b,H.b1(H.f(c,{func:1,args:[W.a4]}),1),!1)},
$isa0:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eI|eJ|eL|eM"},
ba:{"^":"fj;",$isba:1,"%":"File"},
lE:{"^":"je;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.ba]},
$asq:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asv:function(){return[W.ba]},
"%":"FileList"},
lF:{"^":"a0;0k:length=","%":"FileWriter"},
lI:{"^":"be;0k:length=","%":"HTMLFormElement"},
bc:{"^":"l;",$isbc:1,"%":"Gamepad"},
lJ:{"^":"cG;0n:x=,0p:y=","%":"Gyroscope"},
lK:{"^":"l;0k:length=","%":"History"},
lL:{"^":"jr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$asq:function(){return[W.J]},
$isi:1,
$asi:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asv:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c2:{"^":"l;0cF:data=",$isc2:1,"%":"ImageData"},
dx:{"^":"be;",$isdx:1,"%":"HTMLImageElement"},
bg:{"^":"cM;",$isbg:1,"%":"KeyboardEvent"},
lQ:{"^":"l;",
i:function(a){return String(a)},
"%":"Location"},
lR:{"^":"cG;0n:x=,0p:y=","%":"Magnetometer"},
lT:{"^":"l;0k:length=","%":"MediaList"},
lU:{"^":"a0;",
cA:function(a,b,c,d){H.f(c,{func:1,args:[W.a4]})
if(b==="message")a.start()
this.dq(a,b,c,!1)},
"%":"MessagePort"},
lV:{"^":"jx;",
j:function(a,b){return P.aD(a.get(H.Q(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aD(y.value[1]))}},
gae:function(a){var z=H.b([],[P.m])
this.J(a,new W.hk(z))
return z},
gk:function(a){return a.size},
$asa7:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"MIDIInputMap"},
hk:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lW:{"^":"jy;",
j:function(a,b){return P.aD(a.get(H.Q(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aD(y.value[1]))}},
gae:function(a){var z=H.b([],[P.m])
this.J(a,new W.hl(z))
return z},
gk:function(a){return a.size},
$asa7:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
hl:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bh:{"^":"l;",$isbh:1,"%":"MimeType"},
lX:{"^":"jA;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bh]},
$asq:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asv:function(){return[W.bh]},
"%":"MimeTypeArray"},
al:{"^":"cM;",$isal:1,"%":"PointerEvent;DragEvent|MouseEvent"},
j3:{"^":"c5;a",
gR:function(a){var z=this.a.childNodes
return new W.dw(z,z.length,-1,[H.bD(C.J,z,"v",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asq:function(){return[W.J]},
$asi:function(){return[W.J]},
$asc:function(){return[W.J]}},
J:{"^":"a0;",
i:function(a){var z=a.nodeValue
return z==null?this.dr(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hq:{"^":"jC;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$asq:function(){return[W.J]},
$isi:1,
$asi:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asv:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bk:{"^":"l;0k:length=",$isbk:1,"%":"Plugin"},
m6:{"^":"jG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$asq:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asv:function(){return[W.bk]},
"%":"PluginArray"},
mb:{"^":"jM;",
j:function(a,b){return P.aD(a.get(H.Q(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aD(y.value[1]))}},
gae:function(a){var z=H.b([],[P.m])
this.J(a,new W.hP(z))
return z},
gk:function(a){return a.size},
$asa7:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"RTCStatsReport"},
hP:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
md:{"^":"be;0k:length=","%":"HTMLSelectElement"},
cG:{"^":"a0;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bm:{"^":"a0;",$isbm:1,"%":"SourceBuffer"},
me:{"^":"eJ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bm]},
$asq:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asv:function(){return[W.bm]},
"%":"SourceBufferList"},
bn:{"^":"l;",$isbn:1,"%":"SpeechGrammar"},
mf:{"^":"jO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bn]},
$asq:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asv:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"l;0k:length=",$isbo:1,"%":"SpeechRecognitionResult"},
mh:{"^":"jR;",
j:function(a,b){return a.getItem(H.Q(b))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gae:function(a){var z=H.b([],[P.m])
this.J(a,new W.i5(z))
return z},
gk:function(a){return a.length},
$asa7:function(){return[P.m,P.m]},
$isa1:1,
$asa1:function(){return[P.m,P.m]},
"%":"Storage"},
i5:{"^":"r:25;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bp:{"^":"l;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
bq:{"^":"a0;",$isbq:1,"%":"TextTrack"},
br:{"^":"a0;",$isbr:1,"%":"TextTrackCue|VTTCue"},
mm:{"^":"jV;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.br]},
$asq:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asv:function(){return[W.br]},
"%":"TextTrackCueList"},
mn:{"^":"eM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bq]},
$asq:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asv:function(){return[W.bq]},
"%":"TextTrackList"},
mo:{"^":"l;0k:length=","%":"TimeRanges"},
bs:{"^":"l;",$isbs:1,"%":"Touch"},
aV:{"^":"cM;",$isaV:1,"%":"TouchEvent"},
mp:{"^":"k0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bs]},
$asq:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$isc:1,
$asc:function(){return[W.bs]},
$asv:function(){return[W.bs]},
"%":"TouchList"},
mq:{"^":"l;0k:length=","%":"TrackDefaultList"},
cM:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mt:{"^":"l;",
i:function(a){return String(a)},
"%":"URL"},
mv:{"^":"l;0n:x=","%":"VRStageBoundsPoint"},
mw:{"^":"a0;0k:length=","%":"VideoTrackList"},
bv:{"^":"al;",
gfl:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.ac("deltaY is not supported"))},
gfk:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.ac("deltaX is not supported"))},
$isbv:1,
"%":"WheelEvent"},
iX:{"^":"a0;",
ev:function(a,b){return a.requestAnimationFrame(H.b1(H.f(b,{func:1,ret:-1,args:[P.P]}),1))},
dV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mB:{"^":"k7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b8]},
$asq:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asv:function(){return[W.b8]},
"%":"CSSRuleList"},
mC:{"^":"fy;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.b0(b,"$isa6",[P.P],"$asa6")
if(!z)return!1
z=J.bT(b)
return a.left===z.gav(b)&&a.top===z.gaM(b)&&a.width===z.ga7(b)&&a.height===z.ga5(b)},
gN:function(a){return W.eC(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga5:function(a){return a.height},
ga7:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mE:{"^":"k9;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bc]},
$asq:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asv:function(){return[W.bc]},
"%":"GamepadList"},
mF:{"^":"kb;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$asq:function(){return[W.J]},
$isi:1,
$asi:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asv:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mG:{"^":"kd;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bo]},
$asq:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asv:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
mH:{"^":"kf;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bp]},
$asq:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asv:function(){return[W.bp]},
"%":"StyleSheetList"},
ja:{"^":"cH;a,b,c,$ti",
fC:function(a,b,c,d){var z=H.y(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.U(this.a,this.b,a,!1,z)}},
mD:{"^":"ja;a,b,c,$ti"},
jb:{"^":"e1;a,b,c,d,e,$ti",
eM:function(){var z=this.d
if(z!=null&&this.a<=0)J.fc(this.b,this.c,z,!1)},
q:{
U:function(a,b,c,d,e){var z=c==null?null:W.eU(new W.jc(c),W.a4)
z=new W.jb(0,a,b,z,!1,[e])
z.eM()
return z}}},
jc:{"^":"r:3;a",
$1:function(a){return this.a.$1(H.n(a,"$isa4"))}},
v:{"^":"a;$ti",
gR:function(a){return new W.dw(a,this.gk(a),-1,[H.bD(this,a,"v",0)])}},
dw:{"^":"a;a,b,c,0d,$ti",
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fb(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gK:function(a){return this.d}},
j5:{"^":"l+fs;"},
j6:{"^":"l+q;"},
j7:{"^":"j6+v;"},
j8:{"^":"l+q;"},
j9:{"^":"j8+v;"},
jd:{"^":"l+q;"},
je:{"^":"jd+v;"},
jq:{"^":"l+q;"},
jr:{"^":"jq+v;"},
jx:{"^":"l+a7;"},
jy:{"^":"l+a7;"},
jz:{"^":"l+q;"},
jA:{"^":"jz+v;"},
jB:{"^":"l+q;"},
jC:{"^":"jB+v;"},
jF:{"^":"l+q;"},
jG:{"^":"jF+v;"},
jM:{"^":"l+a7;"},
eI:{"^":"a0+q;"},
eJ:{"^":"eI+v;"},
jN:{"^":"l+q;"},
jO:{"^":"jN+v;"},
jR:{"^":"l+a7;"},
jU:{"^":"l+q;"},
jV:{"^":"jU+v;"},
eL:{"^":"a0+q;"},
eM:{"^":"eL+v;"},
k_:{"^":"l+q;"},
k0:{"^":"k_+v;"},
k6:{"^":"l+q;"},
k7:{"^":"k6+v;"},
k8:{"^":"l+q;"},
k9:{"^":"k8+v;"},
ka:{"^":"l+q;"},
kb:{"^":"ka+v;"},
kc:{"^":"l+q;"},
kd:{"^":"kc+v;"},
ke:{"^":"l+q;"},
kf:{"^":"ke+v;"}}],["","",,P,{"^":"",
kw:function(a){var z,y
z=J.I(a)
if(!!z.$isc2){y=z.gcF(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eO(a.data,a.height,a.width)},
kv:function(a){if(a instanceof P.eO)return{data:a.a,height:a.b,width:a.c}
return a},
aD:function(a){var z,y,x,w,v
if(a==null)return
z=P.h1(P.m,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.Q(y[w])
z.T(0,v,a[v])}return z},
kt:function(a,b){var z={}
a.J(0,new P.ku(z))
return z},
du:function(){var z=$.dt
if(z==null){z=J.ch(window.navigator.userAgent,"Opera",0)
$.dt=z}return z},
fw:function(){var z,y
z=$.dq
if(z!=null)return z
y=$.dr
if(y==null){y=J.ch(window.navigator.userAgent,"Firefox",0)
$.dr=y}if(y)z="-moz-"
else{y=$.ds
if(y==null){y=!P.du()&&J.ch(window.navigator.userAgent,"Trident/",0)
$.ds=y}if(y)z="-ms-"
else z=P.du()?"-o-":"-webkit-"}$.dq=z
return z},
eO:{"^":"a;cF:a>,b,c",$isc2:1},
ku:{"^":"r:16;a",
$2:function(a,b){this.a[a]=b}},
fI:{"^":"c5;a,b",
gbo:function(){var z,y,x
z=this.b
y=H.aE(z,"q",0)
x=W.Y
return new H.h9(new H.iV(z,H.f(new P.fJ(),{func:1,ret:P.ae,args:[y]}),[y]),H.f(new P.fK(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b5(this.gbo().a)},
j:function(a,b){var z=this.gbo()
return z.b.$1(J.d9(z.a,b))},
gR:function(a){var z=P.h5(this.gbo(),!1,W.Y)
return new J.ar(z,z.length,0,[H.y(z,0)])},
$asq:function(){return[W.Y]},
$asi:function(){return[W.Y]},
$asc:function(){return[W.Y]}},
fJ:{"^":"r:22;",
$1:function(a){return!!J.I(H.n(a,"$isJ")).$isY}},
fK:{"^":"r:35;",
$1:function(a){return H.h(H.n(a,"$isJ"),"$isY")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bN:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
t:function(a,b){var z,y,x
if(b==null)return!1
z=H.b0(b,"$isbN",[P.P],null)
if(!z)return!1
z=this.a
y=J.bT(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gN:function(a){var z,y
z=J.ap(this.a)
y=J.ap(this.b)
return P.eB(P.bx(P.bx(0,z),y))}},
jH:{"^":"a;$ti",
gaJ:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.B(z+this.c,H.y(this,0))},
gbD:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.B(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b0(b,"$isa6",[P.P],"$asa6")
if(!z)return!1
z=this.a
y=J.bT(b)
x=y.gav(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaM(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.y(this,0)
if(H.B(z+this.c,w)===y.gaJ(b)){if(typeof x!=="number")return x.C()
z=H.B(x+this.d,w)===y.gbD(b)}else z=!1}else z=!1}else z=!1
return z},
gN:function(a){var z,y,x,w,v
z=this.a
y=J.ap(z)
x=this.b
w=J.ap(x)
if(typeof z!=="number")return z.C()
v=H.y(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.B(x+this.d,v)
return P.eB(P.bx(P.bx(P.bx(P.bx(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cE:function(a,b){var z,y
H.w(b,"$isbN",[P.P],"$asbN")
z=b.a
y=this.a
if(typeof z!=="number")return z.di()
if(typeof y!=="number")return H.z(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.di()
if(typeof y!=="number")return H.z(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a6:{"^":"jH;av:a>,aM:b>,a7:c>,a5:d>,$ti",q:{
hG:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.af()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.af()
if(d<0)y=-d*0
else y=d
return new P.a6(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",lm:{"^":"O;0n:x=,0p:y=","%":"SVGFEBlendElement"},ln:{"^":"O;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},lo:{"^":"O;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},lp:{"^":"O;0n:x=,0p:y=","%":"SVGFECompositeElement"},lq:{"^":"O;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},lr:{"^":"O;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},ls:{"^":"O;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},lt:{"^":"O;0n:x=,0p:y=","%":"SVGFEFloodElement"},lu:{"^":"O;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},lv:{"^":"O;0n:x=,0p:y=","%":"SVGFEImageElement"},lw:{"^":"O;0n:x=,0p:y=","%":"SVGFEMergeElement"},lx:{"^":"O;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},ly:{"^":"O;0n:x=,0p:y=","%":"SVGFEOffsetElement"},lz:{"^":"O;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lA:{"^":"O;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lB:{"^":"O;0n:x=,0p:y=","%":"SVGFESpotLightElement"},lC:{"^":"O;0n:x=,0p:y=","%":"SVGFETileElement"},lD:{"^":"O;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lG:{"^":"O;0n:x=,0p:y=","%":"SVGFilterElement"},lH:{"^":"bd;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fN:{"^":"bd;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bd:{"^":"O;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lM:{"^":"bd;0n:x=,0p:y=","%":"SVGImageElement"},bJ:{"^":"l;",$isbJ:1,"%":"SVGLength"},lP:{"^":"jt;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bJ]},
$isi:1,
$asi:function(){return[P.bJ]},
$isc:1,
$asc:function(){return[P.bJ]},
$asv:function(){return[P.bJ]},
"%":"SVGLengthList"},lS:{"^":"O;0n:x=,0p:y=","%":"SVGMaskElement"},bM:{"^":"l;",$isbM:1,"%":"SVGNumber"},m3:{"^":"jE;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bM]},
$isi:1,
$asi:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asv:function(){return[P.bM]},
"%":"SVGNumberList"},m5:{"^":"O;0n:x=,0p:y=","%":"SVGPatternElement"},m7:{"^":"l;0n:x=,0p:y=","%":"SVGPoint"},m8:{"^":"l;0k:length=","%":"SVGPointList"},m9:{"^":"l;0n:x=,0p:y=","%":"SVGRect"},ma:{"^":"fN;0n:x=,0p:y=","%":"SVGRectElement"},mi:{"^":"jT;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asq:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$asv:function(){return[P.m]},
"%":"SVGStringList"},O:{"^":"Y;",
gcC:function(a){return new P.fI(a,new W.j3(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mj:{"^":"bd;0n:x=,0p:y=","%":"SVGSVGElement"},ia:{"^":"bd;","%":"SVGTextPathElement;SVGTextContentElement"},ml:{"^":"ia;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bP:{"^":"l;",$isbP:1,"%":"SVGTransform"},mr:{"^":"k2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bP]},
$isi:1,
$asi:function(){return[P.bP]},
$isc:1,
$asc:function(){return[P.bP]},
$asv:function(){return[P.bP]},
"%":"SVGTransformList"},mu:{"^":"bd;0n:x=,0p:y=","%":"SVGUseElement"},js:{"^":"l+q;"},jt:{"^":"js+v;"},jD:{"^":"l+q;"},jE:{"^":"jD+v;"},jS:{"^":"l+q;"},jT:{"^":"jS+v;"},k1:{"^":"l+q;"},k2:{"^":"k1+v;"}}],["","",,P,{"^":"",l0:{"^":"l;0k:length=","%":"AudioBuffer"},l1:{"^":"j2;",
j:function(a,b){return P.aD(a.get(H.Q(b)))},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aD(y.value[1]))}},
gae:function(a){var z=H.b([],[P.m])
this.J(a,new P.fh(z))
return z},
gk:function(a){return a.size},
$asa7:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"AudioParamMap"},fh:{"^":"r:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},l2:{"^":"a0;0k:length=","%":"AudioTrackList"},fi:{"^":"a0;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m4:{"^":"fi;0k:length=","%":"OfflineAudioContext"},j2:{"^":"l+a7;"}}],["","",,P,{"^":"",cF:{"^":"l;",
h4:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc2)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kv(g))
return}if(!!z.$isdx)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.ff("Incorrect number or type of arguments"))},
h3:function(a,b,c,d,e,f,g){return this.h4(a,b,c,d,e,f,g,null,null,null)},
$iscF:1,
"%":"WebGLRenderingContext"},iA:{"^":"l;",$isiA:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mg:{"^":"jQ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aD(a.item(b))},
A:function(a,b){return this.j(a,b)},
$asq:function(){return[[P.a1,,,]]},
$isi:1,
$asi:function(){return[[P.a1,,,]]},
$isc:1,
$asc:function(){return[[P.a1,,,]]},
$asv:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},jP:{"^":"l+q;"},jQ:{"^":"jP+v;"}}],["","",,O,{"^":"",aO:{"^":"a;0a,0b,0c,0d,$ti",
ca:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
c4:function(a,b,c){var z=H.aE(this,"aO",0)
H.f(b,{func:1,ret:P.ae,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.C,[P.i,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bf:function(a,b){return this.c4(a,null,b)},
el:function(a){var z
H.w(a,"$isi",[H.aE(this,"aO",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
e1:function(a,b){var z
H.w(b,"$isi",[H.aE(this,"aO",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gR:function(a){var z=this.a
return new J.ar(z,z.length,0,[H.y(z,0)])},
A:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aE(this,"aO",0)
H.B(b,z)
z=[z]
if(this.el(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.e1(x,H.b([b],z))}},
$isi:1,
q:{
co:function(a){var z=new O.aO([a])
z.ca(a)
return z}}},cB:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.ag()
this.b=z}return z},
dC:function(a){var z=this.b
if(!(z==null))z.I(a)},
ag:function(){return this.dC(null)},
gO:function(a){var z=this.a
if(z.length>0)return C.a.gbT(z)
else return V.cC()},
d7:function(a){var z=this.a
if(a==null)C.a.h(z,V.cC())
else C.a.h(z,a)
this.ag()},
bZ:function(){var z=this.a
if(z.length>0){z.pop()
this.ag()}}}}],["","",,E,{"^":"",ci:{"^":"a;"},aG:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0U:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sc5:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gD()
y.toString
x=H.f(this.gd4(),{func:1,ret:-1,args:[D.u]})
C.a.H(y.a,x)}y=this.c
if(y!=null){y=y.gD()
y.toString
x=H.f(this.gd4(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.M("shape",z,this.c,this,[F.dY])
w.b=!0
this.a0(w)}},
saF:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gD()
y.toString
x=H.f(this.gd3(),{func:1,ret:-1,args:[D.u]})
C.a.H(y.a,x)}if(a!=null){y=a.gD()
y.toString
x=H.f(this.gd3(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.M("mover",z,a,this,[U.bL])
w.b=!0
this.a0(w)}},
bd:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.c
z.sdf(z.a+z.d*b.y)
z.sd5(0,z.b+z.e*b.y)
z.sd9(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.as(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.m(0,V.as(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.m(0,V.as(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.a6(0)}u=z.x}else u=null
if(!J.N(u,this.x)){t=this.x
this.x=u
s=new D.M("matrix",t,u,this,[V.ak])
s.b=!0
this.a0(s)}for(z=this.y.a,z=new J.ar(z,z.length,0,[H.y(z,0)]);z.B();)z.d.bd(0,b)},
aw:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gO(z))
else C.a.h(z.a,y.m(0,z.gO(z)))
z.ag()
a.d8(this.f)
z=a.dy
x=(z&&C.a).gbT(z)
if(x!=null&&this.d!=null)x.fY(a,this)
for(z=this.y.a,z=new J.ar(z,z.length,0,[H.y(z,0)]);z.B();)z.d.aw(a)
a.d6()
a.dx.bZ()},
a0:function(a){var z=this.z
if(!(z==null))z.I(a)},
S:function(){return this.a0(null)},
fL:[function(a){H.n(a,"$isu")
this.e=null
this.a0(a)},function(){return this.fL(null)},"hN","$1","$0","gd4",0,2,0],
fK:[function(a){this.a0(H.n(a,"$isu"))},function(){return this.fK(null)},"hM","$1","$0","gd3",0,2,0],
fI:[function(a){this.a0(H.n(a,"$isu"))},function(){return this.fI(null)},"hK","$1","$0","gd2",0,2,0],
hJ:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aG],"$asi")
for(z=b.length,y=this.gd2(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gU()==null){t=new D.aP()
t.a=H.b([],w)
t.c=0
u.sU(t)}t=u.gU()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.S()},"$2","gfH",8,0,7],
hL:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aG],"$asi")
for(z=b.length,y=this.gd2(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gU()==null){t=new D.aP()
t.a=H.b([],w)
t.c=0
u.sU(t)}t=u.gU()
t.toString
H.f(y,x)
C.a.H(t.a,y)}}this.S()},"$2","gfJ",8,0,7],
$isat:1},hK:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dw:function(a,b){var z,y,x,w,v
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
z=new O.cB()
y=[V.ak]
z.a=H.b([],y)
x=z.gD()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.f(new E.hM(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cB()
z.a=H.b([],y)
v=z.gD()
v.toString
x=H.f(new E.hN(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cB()
z.a=H.b([],y)
y=z.gD()
y.toString
w=H.f(new E.hO(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.b([],[O.cJ])
this.dy=z
C.a.h(z,null)
this.fr=new H.aR(0,0,[P.m,A.dX])},
gfU:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gO(z)
y=this.db
y=z.m(0,y.gO(y))
this.z=y
z=y}return z},
d8:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbT(z):a;(z&&C.a).h(z,y)},
d6:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
hL:function(a,b){var z=new E.hK(a,b)
z.dw(a,b)
return z}}},hM:{"^":"r:10;a",
$1:function(a){var z
H.n(a,"$isu")
z=this.a
z.z=null
z.ch=null}},hN:{"^":"r:10;a",
$1:function(a){var z
H.n(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hO:{"^":"r:10;a",
$1:function(a){var z
H.n(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},ih:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0U:x@,0y,0z,0Q,0ch",
dE:[function(a){var z
H.n(a,"$isu")
z=this.x
if(!(z==null))z.I(a)
this.fZ()},function(){return this.dE(null)},"dD","$1","$0","gcb",0,2,0],
gfs:function(){var z,y,x
z=Date.now()
y=C.f.V(P.dv(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aF(z,!1)
return x/y},
cs:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.z(z)
x=C.j.bR(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.m()
w=C.j.bR(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
fZ:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.ij(this),{func:1,ret:-1,args:[P.P]})
C.t.dV(z)
C.t.ev(z,W.eU(y,P.P))}},
fX:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cs()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aF(w,!1)
x.y=P.dv(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.ag()
w=x.db
C.a.sk(w.a,0)
w.ag()
w=x.dx
C.a.sk(w.a,0)
w.ag()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aw(this.e)}}catch(v){z=H.aN(v)
y=H.b3(v)
P.d7("Error: "+H.j(z))
P.d7("Stack: "+H.j(y))
throw H.d(z)}},
q:{
ii:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscl)return E.e6(a,!0,!0,!0,!1)
y=W.cm(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcC(a).h(0,y)
w=E.e6(y,!0,!0,!0,!1)
w.a=a
return w},
e6:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ih()
y=P.h2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.k.be(a,"webgl",y)
x=H.n(x==null?C.k.be(a,"experimental-webgl",y):x,"$iscF")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hL(x,a)
w=new T.ib(x)
w.b=H.W(x.getParameter(3379))
w.c=H.W(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iG(a)
v=new X.fX()
v.c=new X.bi(!1,!1,!1)
v.d=P.h3(null,null,null,P.C)
w.b=v
v=new X.hm(w)
v.f=0
v.r=new V.T(0,0)
v.x=new V.T(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.h6(w)
v.r=0
v.x=new V.T(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ip(w)
v.e=0
v.f=new V.T(0,0)
v.r=new V.T(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.e1,P.a]])
w.z=v
u=document
t=W.al
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.U(u,"contextmenu",H.f(w.ge8(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.U(a,"focus",H.f(w.geb(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.U(a,"blur",H.f(w.ge5(),q),!1,r))
v=w.z
p=W.bg
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.U(u,"keyup",H.f(w.ged(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.U(u,"keydown",H.f(w.gec(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.U(a,"mousedown",H.f(w.geg(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mouseup",H.f(w.gei(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mousemove",H.f(w.geh(),s),!1,t))
p=w.z
o=W.bv;(p&&C.a).h(p,W.U(a,H.Q(W.fC(a)),H.f(w.gej(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.U(u,"mousemove",H.f(w.ge9(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.U(u,"mouseup",H.f(w.gea(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.U(u,"pointerlockchange",H.f(w.gek(),q),!1,r))
r=w.z
q=W.aV
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.U(a,"touchstart",H.f(w.geq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchend",H.f(w.geo(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchmove",H.f(w.gep(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aF(Date.now(),!1)
z.ch=0
z.cs()
return z}}},ij:{"^":"r:20;a",
$1:function(a){var z
H.kO(a)
z=this.a
if(z.z){z.z=!1
z.fX()}}}}],["","",,Z,{"^":"",ex:{"^":"a;a,b",q:{
cR:function(a,b,c){var z
H.w(c,"$isc",[P.C],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bz(c)),35044)
a.bindBuffer(b,null)
return new Z.ex(b,z)}}},de:{"^":"ci;a,b,c,d,e",
bB:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aN(y)
x=P.o('Failed to bind buffer attribute "'+J.a3(this.a)+'": '+H.j(z))
throw H.d(x)}},
i:function(a){return"["+J.a3(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},iU:{"^":"a;a",$isl3:1},df:{"^":"a;a,0b,c,d",
au:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bB:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bB(a)},
hb:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aw:function(a){var z,y,x,w,v
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
z=[P.m]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a3(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(y,", ")+"\nAttrs:   "+C.a.w(u,", ")},
$ismk:1},c3:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aT(this.c)+"'")+"]"}},aW:{"^":"a;a",
gc6:function(a){var z,y
z=this.a
y=(z&$.$get$az().a)!==0?3:0
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$ax().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=2
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$bt().a)!==0)y+=3
if((z&$.$get$bu().a)!==0)y+=4
if((z&$.$get$aX().a)!==0)++y
return(z&$.$get$aw().a)!==0?y+4:y},
fa:function(a){var z,y,x
z=$.$get$az()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bt()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ew()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aW))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.m])
y=this.a
if((y&$.$get$az().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aB().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bt().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.w(z,"|")},
q:{
ad:function(a){return new Z.aW(a)}}}}],["","",,D,{"^":"",fm:{"^":"a;"},aP:{"^":"a;0a,0b,0c",
I:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fG(z))
return x!==0},
fn:function(){return this.I(null)},
h_:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.I(y)}}},
a6:function(a){return this.h_(a,!0,!1)},
q:{
ag:function(){var z=new D.aP()
z.a=H.b([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},fG:{"^":"r:21;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"a;a,0b"},cr:{"^":"u;c,d,a,0b,$ti"},cs:{"^":"u;c,d,a,0b,$ti"},M:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dg:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dg))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"l4<"}},dC:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},fW:{"^":"u;c,a,0b"},fX:{"^":"a;0a,0b,0c,0d",
fR:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.fW(a,this)
y.b=!0
return z.I(y)},
fN:function(a){this.c=a.b
this.d.H(0,a.a)
return!1}},h6:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aR:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aF(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.m()
v=b.b
u=this.ch
if(typeof v!=="number")return v.m()
t=new V.T(y.a+x*w,y.b+v*u)
u=this.a.gbH()
s=new X.dK(a,new V.T(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bY:function(a,b){this.r=a.a
return!1},
aH:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dm()
if(typeof z!=="number")return z.dg()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.aR(a,b))
return!0},
aG:function(a,b){return!1},
fS:function(a){return!1},
ef:function(a,b,c){return}},bi:{"^":"a;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bi))return!1
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
return z+(this.c?"Shift+":"")}},dK:{"^":"dQ;x,y,z,Q,ch,c,d,e,a,0b"},hm:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
dZ:function(a,b,c){var z,y,x
z=new P.aF(Date.now(),!1)
y=this.a.gbH()
x=new X.dK(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bY:function(a,b){this.f=a.a
return!1},
aH:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dm()
if(typeof z!=="number")return z.dg()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.dZ(a,b,!0))
return!0},
aG:function(a,b){return!1},
fT:function(a,b){return!1}},dQ:{"^":"u;"},io:{"^":"dQ;x,y,z,Q,ch,c,d,e,a,0b"},ip:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aR:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.T],"$asc")
z=new P.aF(Date.now(),!1)
y=a.length>0?a[0]:new V.T(0,0)
x=this.a.gbH()
w=new X.io(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fQ:function(a){var z
H.w(a,"$isc",[V.T],"$asc")
z=this.b
if(z==null)return!1
z.I(this.aR(a,!0))
return!0},
fO:function(a){var z
H.w(a,"$isc",[V.T],"$asc")
z=this.c
if(z==null)return!1
z.I(this.aR(a,!0))
return!0},
fP:function(a){H.w(a,"$isc",[V.T],"$asc")
return!1}},iG:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbH:function(){var z=this.a
return V.dV(0,0,(z&&C.k).gaY(z).c,C.k.gaY(z).d)},
cm:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dC(z,new X.bi(y,a.altKey,a.shiftKey))},
an:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bi(y,a.altKey,a.shiftKey)},
bx:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bi(y,a.altKey,a.shiftKey)},
aa:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a3()
v=z.top
if(typeof x!=="number")return x.a3()
return new V.T(y-w,x-v)},
az:function(a){return new V.bQ(a.movementX,a.movementY)},
br:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.j.a1(u.pageX)
C.j.a1(u.pageY)
s=z.left
C.j.a1(u.pageX)
C.a.h(y,new V.T(t-s,C.j.a1(u.pageY)-z.top))}return y},
a8:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dg(z,new X.bi(y,a.altKey,a.shiftKey))},
hq:[function(a){this.f=!0},"$1","geb",4,0,3],
hk:[function(a){this.f=!1},"$1","ge5",4,0,3],
hn:[function(a){if(this.f)a.preventDefault()},"$1","ge8",4,0,3],
hs:[function(a){var z
H.n(a,"$isbg")
if(!this.f)return
z=this.cm(a)
if(this.b.fR(z))a.preventDefault()},"$1","ged",4,0,18],
hr:[function(a){var z
H.n(a,"$isbg")
if(!this.f)return
z=this.cm(a)
this.b.fN(z)},"$1","gec",4,0,18],
hu:[function(a){var z,y,x,w
H.n(a,"$isal")
z=this.a
z.focus()
this.f=!0
this.an(a)
if(this.x){y=this.a8(a)
x=this.az(a)
if(this.d.bY(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a8(a)
w=this.aa(a)
if(this.c.bY(y,w))a.preventDefault()},"$1","geg",4,0,4],
hw:[function(a){var z,y,x
H.n(a,"$isal")
this.an(a)
z=this.a8(a)
if(this.x){y=this.az(a)
if(this.d.aH(z,y))a.preventDefault()
return}if(this.r)return
x=this.aa(a)
if(this.c.aH(z,x))a.preventDefault()},"$1","gei",4,0,4],
hp:[function(a){var z,y,x,w
H.n(a,"$isal")
z=this.a
if(!(z&&C.k).gaY(z).cE(0,new P.bN(a.clientX,a.clientY,[P.P]))){this.an(a)
y=this.a8(a)
if(this.x){x=this.az(a)
if(this.d.aH(y,x))a.preventDefault()
return}if(this.r)return
w=this.aa(a)
if(this.c.aH(y,w))a.preventDefault()}},"$1","gea",4,0,4],
hv:[function(a){var z,y,x
H.n(a,"$isal")
this.an(a)
z=this.a8(a)
if(this.x){y=this.az(a)
if(this.d.aG(z,y))a.preventDefault()
return}if(this.r)return
x=this.aa(a)
if(this.c.aG(z,x))a.preventDefault()},"$1","geh",4,0,4],
ho:[function(a){var z,y,x,w
H.n(a,"$isal")
z=this.a
if(!(z&&C.k).gaY(z).cE(0,new P.bN(a.clientX,a.clientY,[P.P]))){this.an(a)
y=this.a8(a)
if(this.x){x=this.az(a)
if(this.d.aG(y,x))a.preventDefault()
return}if(this.r)return
w=this.aa(a)
if(this.c.aG(y,w))a.preventDefault()}},"$1","ge9",4,0,4],
hx:[function(a){var z,y
H.n(a,"$isbv")
this.an(a)
z=new V.bQ((a&&C.r).gfk(a),C.r.gfl(a)).F(0,180)
if(this.x){if(this.d.fS(z))a.preventDefault()
return}if(this.r)return
y=this.aa(a)
if(this.c.fT(z,y))a.preventDefault()},"$1","gej",4,0,24],
hy:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a8(this.y)
v=this.aa(this.y)
this.d.ef(w,v,x)}},"$1","gek",4,0,3],
hD:[function(a){var z
H.n(a,"$isaV")
this.a.focus()
this.f=!0
this.bx(a)
z=this.br(a)
if(this.e.fQ(z))a.preventDefault()},"$1","geq",4,0,9],
hB:[function(a){var z
H.n(a,"$isaV")
this.bx(a)
z=this.br(a)
if(this.e.fO(z))a.preventDefault()},"$1","geo",4,0,9],
hC:[function(a){var z
H.n(a,"$isaV")
this.bx(a)
z=this.br(a)
if(this.e.fP(z))a.preventDefault()},"$1","gep",4,0,9]}}],["","",,D,{"^":"",c_:{"^":"a;0a,0b,0c,0d",
ah:[function(a){var z
H.n(a,"$isu")
z=this.d
if(!(z==null))z.I(a)},function(){return this.ah(null)},"hd","$1","$0","gdF",0,2,0],
$isS:1,
$isat:1},S:{"^":"a;",$isat:1},fY:{"^":"aO;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
ah:function(a){var z=this.Q
if(!(z==null))z.I(a)},
ee:[function(a){var z
H.n(a,"$isu")
z=this.ch
if(!(z==null))z.I(a)},function(){return this.ee(null)},"ht","$1","$0","gcp",0,2,0],
hz:[function(a){var z,y,x
H.w(a,"$isi",[D.S],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.dR(x))return!1}return!0},"$1","gem",4,0,26],
hh:[function(a,b){var z,y,x,w,v,u,t,s
z=D.S
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gcp(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.n(b[u],"$isS")
if(t instanceof D.c_)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.cr(a,b,this,[z])
z.b=!0
this.ah(z)},"$2","ge2",8,0,15],
hA:[function(a,b){var z,y,x,w,v,u,t,s
z=D.S
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gcp(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.n(b[u],"$isS")
if(t instanceof D.c_)C.a.H(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.H(s.a,x)}z=new D.cs(a,b,this,[z])
z.b=!0
this.ah(z)},"$2","gen",8,0,15],
dR:function(a){var z=C.a.aA(this.e,a)
return z},
$asi:function(){return[D.S]},
$asaO:function(){return[D.S]}},hw:{"^":"a;",$isS:1,$isat:1},i2:{"^":"a;",$isS:1,$isat:1},id:{"^":"a;",$isS:1,$isat:1},ie:{"^":"a;",$isS:1,$isat:1},ig:{"^":"a;",$isS:1,$isat:1}}],["","",,V,{"^":"",
l6:[function(a,b){if(typeof b!=="number")return b.a3()
if(typeof a!=="number")return H.z(a)
return Math.abs(b-a)<=1e-9},"$2","hj",8,0,23],
d8:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dl(a-b,z)
return(a<0?a+z:a)+b},
D:function(a,b,c){if(a==null)return C.h.Y("null",c)
return C.h.Y(C.j.de($.k.$2(a,0)?0:a,b),c+b+1)},
b2:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.t],"$asc")
z=H.b([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.D(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.T(z,u,C.h.Y(z[u],x))}return z},
d6:function(a,b){return C.j.h7(Math.pow(b,C.y.bR(Math.log(H.ks(a))/Math.log(b))))},
a_:{"^":"a;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
bX:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bX))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
dI:{"^":"a;a,b,c,d,e,f,r,x,y",
Z:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dI))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
z=b.e
if(!$.k.$2(z,this.e))return!1
z=b.f
if(!$.k.$2(z,this.f))return!1
z=b.r
if(!$.k.$2(z,this.r))return!1
z=b.x
if(!$.k.$2(z,this.x))return!1
z=b.y
if(!$.k.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.b2(H.b([this.a,this.d,this.r],z),3,0)
x=V.b2(H.b([this.b,this.e,this.x],z),3,0)
w=V.b2(H.b([this.c,this.f,this.y],z),3,0)
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
ak:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
Z:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
d0:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.z(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.z(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.z(u)
t=this.c
if(typeof t!=="number")return t.m()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.z(r)
q=this.d
if(typeof q!=="number")return q.m()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.m()
if(typeof k!=="number")return H.z(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.m()
if(typeof i!=="number")return H.z(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.z(g)
f=this.Q
if(typeof f!=="number")return f.m()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.z(d)
c=this.ch
if(typeof c!=="number")return c.m()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.k.$2(a2,0))return V.cC()
a3=1/a2
a4=-w
a5=-i
return V.as((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
m:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.z(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.z(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.z(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.m()
if(typeof s!=="number")return H.z(s)
r=a7.b
if(typeof r!=="number")return H.z(r)
q=a7.f
if(typeof q!=="number")return H.z(q)
p=a7.z
if(typeof p!=="number")return H.z(p)
o=a7.cy
if(typeof o!=="number")return H.z(o)
n=a7.c
if(typeof n!=="number")return H.z(n)
m=a7.r
if(typeof m!=="number")return H.z(m)
l=a7.Q
if(typeof l!=="number")return H.z(l)
k=a7.db
if(typeof k!=="number")return H.z(k)
j=a7.d
if(typeof j!=="number")return H.z(j)
i=a7.x
if(typeof i!=="number")return H.z(i)
h=a7.ch
if(typeof h!=="number")return H.z(h)
g=a7.dx
if(typeof g!=="number")return H.z(g)
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
return V.as(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.m()
x=this.b
w=a.b
if(typeof x!=="number")return x.m()
v=this.c
u=a.c
if(typeof v!=="number")return v.m()
t=this.e
if(typeof t!=="number")return t.m()
s=this.f
if(typeof s!=="number")return s.m()
r=this.r
if(typeof r!=="number")return r.m()
q=this.y
if(typeof q!=="number")return q.m()
p=this.z
if(typeof p!=="number")return p.m()
o=this.Q
if(typeof o!=="number")return o.m()
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.m()
x=this.b
w=a.b
if(typeof x!=="number")return x.m()
v=this.c
u=a.c
if(typeof v!=="number")return v.m()
t=this.d
if(typeof t!=="number")return H.z(t)
s=this.e
if(typeof s!=="number")return s.m()
r=this.f
if(typeof r!=="number")return r.m()
q=this.r
if(typeof q!=="number")return q.m()
p=this.x
if(typeof p!=="number")return H.z(p)
o=this.y
if(typeof o!=="number")return o.m()
n=this.z
if(typeof n!=="number")return n.m()
m=this.Q
if(typeof m!=="number")return m.m()
l=this.ch
if(typeof l!=="number")return H.z(l)
return new V.au(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
z=b.e
if(!$.k.$2(z,this.e))return!1
z=b.f
if(!$.k.$2(z,this.f))return!1
z=b.r
if(!$.k.$2(z,this.r))return!1
z=b.x
if(!$.k.$2(z,this.x))return!1
z=b.y
if(!$.k.$2(z,this.y))return!1
z=b.z
if(!$.k.$2(z,this.z))return!1
z=b.Q
if(!$.k.$2(z,this.Q))return!1
z=b.ch
if(!$.k.$2(z,this.ch))return!1
z=b.cx
if(!$.k.$2(z,this.cx))return!1
z=b.cy
if(!$.k.$2(z,this.cy))return!1
z=b.db
if(!$.k.$2(z,this.db))return!1
z=b.dx
if(!$.k.$2(z,this.dx))return!1
return!0},
i:function(a){return this.E()},
d_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.b2(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b2(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b2(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b2(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
E:function(){return this.d_("",3,0)},
v:function(a){return this.d_(a,3,0)},
q:{
as:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cC:function(){return V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dJ:function(a,b,c){var z,y,x,w,v
z=c.F(0,Math.sqrt(c.L(c)))
y=b.aB(z)
x=y.F(0,Math.sqrt(y.L(y)))
w=z.aB(x)
v=new V.H(a.a,a.b,a.c)
return V.as(x.a,w.a,z.a,x.ax(0).L(v),x.b,w.b,z.b,w.ax(0).L(v),x.c,w.c,z.c,z.ax(0).L(v),0,0,0,1)}}},
T:{"^":"a;n:a>,p:b>",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
au:{"^":"a;n:a>,p:b>,c",
a3:function(a,b){return new V.au(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
dP:{"^":"a;n:a>,p:b>,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dP))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"}},
dU:{"^":"a;n:a>,p:b>,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dU))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+", "+V.D(this.d,3,0)+"]"},
q:{
dV:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dU(a,b,c,d)}}},
bQ:{"^":"a;a,b",
fA:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return Math.sqrt(z*z+y*y)},"$0","gk",1,0,14],
F:function(a,b){var z,y
if($.k.$2(b,0))return new V.bQ(0,0)
z=this.a
if(typeof z!=="number")return z.F()
y=this.b
if(typeof y!=="number")return y.F()
return new V.bQ(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bQ))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
H:{"^":"a;a,b,c",
fA:[function(a){return Math.sqrt(this.L(this))},"$0","gk",1,0,14],
L:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bU:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.H(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aB:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
ax:function(a){return new V.H(-this.a,-this.b,-this.c)},
F:function(a,b){if($.k.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
d1:function(){if(!$.k.$2(0,this.a))return!1
if(!$.k.$2(0,this.b))return!1
if(!$.k.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dk:{"^":"bL;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.ag()
this.b=z}return z},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dk))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
q:{
dl:function(a){var z=new U.dk()
z.a=a
return z}}},bL:{"^":"fm;"},dW:{"^":"bL;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gD:function(){var z=this.y
if(z==null){z=D.ag()
this.y=z}return z},
al:function(a){var z=this.y
if(!(z==null))z.I(a)},
sdf:function(a){var z,y
a=V.d8(a,0,6.283185307179586)
z=this.a
if(!$.k.$2(z,a)){y=this.a
this.a=a
z=new D.M("yaw",y,a,this,[P.t])
z.b=!0
this.al(z)}},
sd5:function(a,b){var z,y
b=V.d8(b,0,6.283185307179586)
z=this.b
if(!$.k.$2(z,b)){y=this.b
this.b=b
z=new D.M("pitch",y,b,this,[P.t])
z.b=!0
this.al(z)}},
sd9:function(a){var z,y
a=V.d8(a,0,6.283185307179586)
z=this.c
if(!$.k.$2(z,a)){y=this.c
this.c=a
z=new D.M("roll",y,a,this,[P.t])
z.b=!0
this.al(z)}},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dW))return!1
z=this.a
y=b.a
if(!$.k.$2(z,y))return!1
z=this.b
y=b.b
if(!$.k.$2(z,y))return!1
z=this.c
y=b.c
if(!$.k.$2(z,y))return!1
z=this.d
y=b.d
if(!$.k.$2(z,y))return!1
z=this.e
y=b.e
if(!$.k.$2(z,y))return!1
z=this.f
y=b.f
if(!$.k.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"], ["+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ai:[function(a){var z
H.n(a,"$isu")
z=this.x
if(!(z==null))z.I(a)},function(){return this.ai(null)},"he","$1","$0","ga4",0,2,0],
hl:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aG
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga4(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gU()==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.sU(s)}s=t.gU()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.cr(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","ge6",8,0,7],
hm:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aG
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga4(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gU()==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.sU(s)}s=t.gU()
s.toString
H.f(x,w)
C.a.H(s.a,x)}}z=new D.cs(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","ge7",8,0,7],
sdc:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gD()
z.toString
y=H.f(this.ga4(),{func:1,ret:-1,args:[D.u]})
C.a.H(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gD()
z.toString
y=H.f(this.ga4(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.M("technique",x,this.c,this,[O.cJ])
z.b=!0
this.ai(z)}},
gD:function(){var z=this.x
if(z==null){z=D.ag()
this.x=z}return z},
aw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof x!=="number")return H.z(x)
u=C.f.a1(v.a*x)
if(typeof w!=="number")return H.z(w)
t=C.f.a1(v.b*w)
s=C.f.a1(v.c*x)
a.c=s
v=C.f.a1(v.d*w)
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
s.d7(V.as(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dO
if(y==null){y=V.dJ(new V.au(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.dO=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.m(0,m)}a.db.d7(m)
z=this.c
if(z!=null)z.bd(0,a)
for(z=this.d.a,z=new J.ar(z,z.length,0,[H.y(z,0)]);z.B();)z.d.bd(0,a)
for(z=this.d.a,z=new J.ar(z,z.length,0,[H.y(z,0)]);z.B();)z.d.aw(a)
this.a.toString
a.cy.bZ()
a.db.bZ()
this.b.toString
a.d6()},
$ismc:1}}],["","",,A,{"^":"",db:{"^":"a;a,b,c"},fg:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fo:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fm:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hd:{"^":"dX;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0as,0ad,0at,0aZ,0cG,0cH,0b_,0b0,0cI,0cJ,0b1,0b2,0cK,0cL,0b3,0cM,0cN,0b4,0cO,0cP,0b5,0b6,0b7,0cQ,0cR,0b8,0b9,0cS,0cT,0ba,0cU,0bL,0cV,0bM,0cW,0bN,0cX,0bO,0cY,0bP,0cZ,0bQ,a,b,0c,0d,0e,0f,0r",
dv:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bO("")
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
a2.eO(z)
a2.eV(z)
a2.eP(z)
a2.f2(z)
a2.f3(z)
a2.eX(z)
a2.f7(z)
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
z=new P.bO("")
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
v.eS(z)
v.eN(z)
v.eQ(z)
v.eT(z)
v.f0(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.eZ(z)
v.f_(z)}v.eW(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.e){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.c){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.d){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.b:r+="   return 1.0;\n"
z.a=r
break
case C.e:r+="   return alpha;\n"
z.a=r
break
case C.c:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.b([],[P.m])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.w(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.eR(z)
v.eY(z)
v.f1(z)
v.f4(z)
v.f5(z)
v.f6(z)
v.eU(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.w(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cn(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cn(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.eY(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.p(P.o("Failed to link shader: "+H.j(m)))}this.eH()
this.eJ()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.h(this.r.l(0,"invViewMat"),"$isav")
if(y)this.db=H.h(this.r.l(0,"objMat"),"$isav")
if(w)this.dx=H.h(this.r.l(0,"viewObjMat"),"$isav")
this.fr=H.h(this.r.l(0,"projViewObjMat"),"$isav")
if(a2.x2)this.go=H.h(this.r.l(0,"txt2DMat"),"$iscO")
if(a2.y1)this.id=H.h(this.r.l(0,"txtCubeMat"),"$isav")
if(a2.y2)this.k1=H.h(this.r.l(0,"colorMat"),"$isav")
this.k3=H.b([],[A.av])
y=a2.as
if(y>0){this.k2=H.n(this.r.l(0,"bendMatCount"),"$isF")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(k,"$isav"))}}y=a2.a
if(y!==C.b){this.k4=H.h(this.r.l(0,"emissionClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.r1=H.h(this.r.l(0,"emissionTxt"),"$isaa")
this.rx=H.h(this.r.l(0,"nullEmissionTxt"),"$isF")
break
case C.d:this.r2=H.h(this.r.l(0,"emissionTxt"),"$isab")
this.rx=H.h(this.r.l(0,"nullEmissionTxt"),"$isF")
break}}y=a2.b
if(y!==C.b){this.ry=H.h(this.r.l(0,"ambientClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.x1=H.h(this.r.l(0,"ambientTxt"),"$isaa")
this.y1=H.h(this.r.l(0,"nullAmbientTxt"),"$isF")
break
case C.d:this.x2=H.h(this.r.l(0,"ambientTxt"),"$isab")
this.y1=H.h(this.r.l(0,"nullAmbientTxt"),"$isF")
break}}y=a2.c
if(y!==C.b){this.y2=H.h(this.r.l(0,"diffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.as=H.h(this.r.l(0,"diffuseTxt"),"$isaa")
this.at=H.h(this.r.l(0,"nullDiffuseTxt"),"$isF")
break
case C.d:this.ad=H.h(this.r.l(0,"diffuseTxt"),"$isab")
this.at=H.h(this.r.l(0,"nullDiffuseTxt"),"$isF")
break}}y=a2.d
if(y!==C.b){this.aZ=H.h(this.r.l(0,"invDiffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cG=H.h(this.r.l(0,"invDiffuseTxt"),"$isaa")
this.b_=H.h(this.r.l(0,"nullInvDiffuseTxt"),"$isF")
break
case C.d:this.cH=H.h(this.r.l(0,"invDiffuseTxt"),"$isab")
this.b_=H.h(this.r.l(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a2.e
if(y!==C.b){this.b2=H.h(this.r.l(0,"shininess"),"$isR")
this.b0=H.h(this.r.l(0,"specularClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cI=H.h(this.r.l(0,"specularTxt"),"$isaa")
this.b1=H.h(this.r.l(0,"nullSpecularTxt"),"$isF")
break
case C.d:this.cJ=H.h(this.r.l(0,"specularTxt"),"$isab")
this.b1=H.h(this.r.l(0,"nullSpecularTxt"),"$isF")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.c:this.cK=H.h(this.r.l(0,"bumpTxt"),"$isaa")
this.b3=H.h(this.r.l(0,"nullBumpTxt"),"$isF")
break
case C.d:this.cL=H.h(this.r.l(0,"bumpTxt"),"$isab")
this.b3=H.h(this.r.l(0,"nullBumpTxt"),"$isF")
break}if(a2.dy){this.cM=H.h(this.r.l(0,"envSampler"),"$isab")
this.cN=H.h(this.r.l(0,"nullEnvTxt"),"$isF")
y=a2.r
if(y!==C.b){this.b4=H.h(this.r.l(0,"reflectClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cO=H.h(this.r.l(0,"reflectTxt"),"$isaa")
this.b5=H.h(this.r.l(0,"nullReflectTxt"),"$isF")
break
case C.d:this.cP=H.h(this.r.l(0,"reflectTxt"),"$isab")
this.b5=H.h(this.r.l(0,"nullReflectTxt"),"$isF")
break}}y=a2.x
if(y!==C.b){this.b6=H.h(this.r.l(0,"refraction"),"$isR")
this.b7=H.h(this.r.l(0,"refractClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cQ=H.h(this.r.l(0,"refractTxt"),"$isaa")
this.b8=H.h(this.r.l(0,"nullRefractTxt"),"$isF")
break
case C.d:this.cR=H.h(this.r.l(0,"refractTxt"),"$isab")
this.b8=H.h(this.r.l(0,"nullRefractTxt"),"$isF")
break}}}y=a2.y
if(y!==C.b){this.b9=H.h(this.r.l(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.e:break
case C.c:this.cS=H.h(this.r.l(0,"alphaTxt"),"$isaa")
this.ba=H.h(this.r.l(0,"nullAlphaTxt"),"$isF")
break
case C.d:this.cT=H.h(this.r.l(0,"alphaTxt"),"$isab")
this.ba=H.h(this.r.l(0,"nullAlphaTxt"),"$isF")
break}}this.bL=H.b([],[A.em])
this.bM=H.b([],[A.en])
this.bN=H.b([],[A.eo])
this.bO=H.b([],[A.ep])
this.bP=H.b([],[A.eq])
this.bQ=H.b([],[A.er])
if(a2.k2){y=a2.z
if(y>0){this.cU=H.n(this.r.l(0,"dirLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.bL;(x&&C.a).h(x,new A.em(l,k,j))}}y=a2.Q
if(y>0){this.cV=H.n(this.r.l(0,"pntLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isE")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isR")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isR")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isR")
x=this.bM;(x&&C.a).h(x,new A.en(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.cW=H.n(this.r.l(0,"spotLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isE")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isE")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isR")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isR")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isR")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isR")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isR")
x=this.bN;(x&&C.a).h(x,new A.eo(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.cX=H.n(this.r.l(0,"txtDirLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isE")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isE")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isE")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isF")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isaa")
x=this.bO;(x&&C.a).h(x,new A.ep(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.cY=H.n(this.r.l(0,"txtPntLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$iscO")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isE")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isF")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isR")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isR")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isR")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isab")
x=this.bP;(x&&C.a).h(x,new A.eq(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.cZ=H.n(this.r.l(0,"txtSpotLightCount"),"$isF")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isE")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isE")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isE")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isE")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isE")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isF")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isE")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isR")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isR")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isR")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isR")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a1,"$isaa")
x=this.bQ;(x&&C.a).h(x,new A.er(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a_:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dn(c)
b.a.uniform1i(b.d,0)}},
W:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
hc:function(a,b){var z,y
z=a.ad
y=new A.hd(b,z)
y.dA(b,z)
y.dv(a,b)
return y}}},hg:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,as,ad,at",
eO:function(a){var z,y,x
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
eV:function(a){var z
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
eP:function(a){var z
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
f2:function(a){var z,y
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
f3:function(a){var z,y
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
eX:function(a){var z
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
f7:function(a){var z
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
a9:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.c7(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
eS:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.a9(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   return emissionClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
eN:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.a9(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   return ambientClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
eQ:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.a9(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
eT:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.a9(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
f0:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.a9(a,z,"specular")
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
case C.e:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
eW:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.e:break
case C.c:z+="uniform sampler2D bumpTxt;\n"
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
case C.e:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.c:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
eZ:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.a9(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.e:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
f_:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.a9(a,z,"refract")
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
case C.e:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.c:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
eR:function(a){var z,y
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
eY:function(a){var z,y
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
f1:function(a){var z,y
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
f4:function(a){var z,y,x
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
f5:function(a){var z,y,x
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
f6:function(a){var z,y,x
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
eU:function(a){var z
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
i:function(a){return this.ad}},em:{"^":"a;a,b,c"},ep:{"^":"a;a,b,c,d,e,f,r,x"},en:{"^":"a;a,b,c,d,e,f,r"},eq:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eo:{"^":"a;a,b,c,d,e,f,r,x,y,z"},er:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dX:{"^":"ci;",
dA:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cn:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eY(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.o("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
eH:function(){var z,y,x,w,v,u
z=H.b([],[A.db])
y=this.a
x=H.W(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.db(y,v.name,u))}this.f=new A.fg(z)},
eJ:function(){var z,y,x,w,v,u
z=H.b([],[A.a2])
y=this.a
x=H.W(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fj(v.type,v.size,v.name,u))}this.r=new A.iz(z)},
ak:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.F(z,y,b,c)
else return A.cN(z,y,b,a,c)},
dS:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aa(z,y,b,c)
else return A.cN(z,y,b,a,c)},
dT:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ab(z,y,b,c)
else return A.cN(z,y,b,a,c)},
aW:function(a,b){return new P.ez(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fj:function(a,b,c,d){switch(a){case 5120:return this.ak(b,c,d)
case 5121:return this.ak(b,c,d)
case 5122:return this.ak(b,c,d)
case 5123:return this.ak(b,c,d)
case 5124:return this.ak(b,c,d)
case 5125:return this.ak(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.iu(this.a,this.e,c,d)
case 35665:return new A.E(this.a,this.e,c,d)
case 35666:return new A.ix(this.a,this.e,c,d)
case 35667:return new A.iv(this.a,this.e,c,d)
case 35668:return new A.iw(this.a,this.e,c,d)
case 35669:return new A.iy(this.a,this.e,c,d)
case 35674:return new A.iB(this.a,this.e,c,d)
case 35675:return new A.cO(this.a,this.e,c,d)
case 35676:return new A.av(this.a,this.e,c,d)
case 35678:return this.dS(b,c,d)
case 35680:return this.dT(b,c,d)
case 35670:throw H.d(this.aW("BOOL",c))
case 35671:throw H.d(this.aW("BOOL_VEC2",c))
case 35672:throw H.d(this.aW("BOOL_VEC3",c))
case 35673:throw H.d(this.aW("BOOL_VEC4",c))
default:throw H.d(P.o("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},bY:{"^":"a;a,b",
i:function(a){return this.b}},a2:{"^":"a;"},iz:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
l:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.E()},
fq:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
E:function(){return this.fq("\n")}},F:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iv:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iw:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iy:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},it:{"^":"a2;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
cN:function(a,b,c,d,e){var z=new A.it(a,b,c,e)
z.f=d
z.e=P.h4(d,0,!1,P.C)
return z}}},R:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iu:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},E:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},ix:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iB:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cO:{"^":"a2;a,b,c,d",
a2:function(a){var z=new Float32Array(H.bz(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},av:{"^":"a2;a,b,c,d",
a2:function(a){var z=new Float32Array(H.bz(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},aa:{"^":"a2;a,b,c,d",
dn:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ab:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
ca:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
by:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.H(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.H(t+h,s+f,r+g)
z.b=q
p=new V.H(t-h,s-f,r-g)
z.c=p
o=new V.H(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.ca(y)
k=F.ca(z.b)
j=F.kU(d,e,new F.kg(z,F.ca(z.c),F.ca(z.d),k,l,c),b)
if(j!=null)a.bX(j)},
kU:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ao,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.dZ()
y=H.b([],[F.ao])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cQ(null,null,new V.bX(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bJ(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cQ(null,null,new V.bX(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bJ(d))}}z.d.f8(a+1,b+1,y)
return z},
kg:{"^":"r:29;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bU(z.b,b).bU(z.d.bU(z.c,b),c)
z=new V.au(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.S()}a.sh5(y.F(0,Math.sqrt(y.L(y))))
z=1-b
x=1-c
x=new V.dP(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.S()}}},
ah:{"^":"a;0a,0b,0c,0d,0e",
ac:function(){if(!this.gaC()){C.a.H(this.a.a.d.b,this)
this.a.a.S()}this.bt()
this.bu()
this.eu()},
eE:function(a){this.a=a
C.a.h(a.d.b,this)},
eF:function(a){this.b=a
C.a.h(a.d.c,this)},
eG:function(a){this.c=a
C.a.h(a.d.d,this)},
bt:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
bu:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
eu:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gaC:function(){return this.a==null||this.b==null||this.c==null},
dM:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.d1())return
return v.F(0,Math.sqrt(v.L(v)))},
dP:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.a3(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.F(0,Math.sqrt(z.L(z)))
z=w.a3(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.aB(z.F(0,Math.sqrt(z.L(z))))
return z.F(0,Math.sqrt(z.L(z)))},
bG:function(){if(this.d!=null)return!0
var z=this.dM()
if(z==null){z=this.dP()
if(z==null)return!1}this.d=z
this.a.a.S()
return!0},
dL:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.d1())return
return v.F(0,Math.sqrt(v.L(v)))},
dO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.k.$2(n,0)){z=r.a3(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.F(0,Math.sqrt(z.L(z)))
if(o.a-p.a<0)m=m.ax(0)}else{l=(z-q.b)/n
z=r.a3(0,u)
z=new V.au(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).a3(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.F(0,Math.sqrt(z.L(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.ax(0)}z=this.d
if(z!=null){k=z.F(0,Math.sqrt(z.L(z)))
z=k.aB(m)
z=z.F(0,Math.sqrt(z.L(z))).aB(k)
m=z.F(0,Math.sqrt(z.L(z)))}return m},
bE:function(){if(this.e!=null)return!0
var z=this.dL()
if(z==null){z=this.dO()
if(z==null)return!1}this.e=z
this.a.a.S()
return!0},
gfe:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){var z,y
if(this.gaC())return a+"disposed"
z=a+C.h.Y(J.a3(this.a.e),0)+", "+C.h.Y(J.a3(this.b.e),0)+", "+C.h.Y(J.a3(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
E:function(){return this.v("")},
q:{
bH:function(a,b,c){var z,y,x
z=new F.ah()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.eE(a)
z.eF(b)
z.eG(c)
C.a.h(z.a.a.d.b,z)
z.a.a.S()
return z}}},
fH:{"^":"a;"},
i1:{"^":"fH;",
aE:function(a,b,c){var z,y
z=b.a
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
cz:{"^":"a;0a,0b",
ac:function(){if(!this.gaC()){C.a.H(this.a.a.c.b,this)
this.a.a.S()}this.bt()
this.bu()},
bt:function(){var z=this.a
if(z!=null){C.a.H(z.c.b,this)
this.a=null}},
bu:function(){var z=this.b
if(z!=null){C.a.H(z.c.c,this)
this.b=null}},
gaC:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){if(this.gaC())return a+"disposed"
return a+C.h.Y(J.a3(this.a.e),0)+", "+C.h.Y(J.a3(this.b.e),0)},
E:function(){return this.v("")}},
fZ:{"^":"a;"},
is:{"^":"fZ;",
aE:function(a,b,c){var z,y
z=b.a
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
return z==null?y==null:z===y}else return!1}}},
cE:{"^":"a;0a",
ac:function(){var z=this.a
if(z!=null){C.a.H(z.a.b.b,this)
this.a.a.S()}this.es()},
es:function(){var z=this.a
if(z!=null){C.a.H(z.b.b,this)
this.a=null}},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.Y(J.a3(z.e),0)},
E:function(){return this.v("")}},
dY:{"^":"a;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.ag()
this.e=z}return z},
bX:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.u()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fi())}this.a.u()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cE()
if(r.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.I(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.u()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cz()
s=p.a
if(s==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.o("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.I(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.u()
t=t.e
if(typeof t!=="number")return t.C()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.u()
s=s.e
if(typeof s!=="number")return s.C()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bH(p,o,l)}z=this.e
if(!(z==null))z.a6(0)},
ao:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ao()||!1
if(!this.a.ao())y=!1
z=this.e
if(!(z==null))z.a6(0)
return y},
dX:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ao],"$asc")
H.w(e,"$isc",[P.C],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.aE(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fF:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ao],x=[P.C];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.dX(a,v,y,u,t))b.bX(u)}this.a.u()
this.c.c_()
this.d.c_()
this.b.fW()
this.c.c0(new F.is())
this.d.c0(new F.i1())
z=this.e
if(!(z==null))z.a6(0)},
fc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$az()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$bt().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
v=b.gc6(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.de])
for(r=0,q=0;q<w;++q){p=b.fa(q)
o=p.gc6(p)
C.a.T(s,q,new Z.de(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].fB(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.T(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bz(t)),35044)
y.bindBuffer(34962,null)
i=new Z.df(new Z.ex(34962,j),s,b)
i.b=H.b([],[Z.c3])
if(this.b.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)}f=Z.cR(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c3(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)}f=Z.cR(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c3(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.u()
C.a.h(h,g.e)}f=Z.cR(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c3(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.w(z,"\n")},
a0:function(a){var z=this.e
if(!(z==null))z.I(a)},
S:function(){return this.a0(null)},
q:{
dZ:function(){var z,y
z=new F.dY()
y=new F.iJ(z)
y.b=!1
y.c=H.b([],[F.ao])
z.a=y
y=new F.hX(z)
y.b=H.b([],[F.cE])
z.b=y
y=new F.hW(z)
y.b=H.b([],[F.cz])
z.c=y
y=new F.hV(z)
y.b=H.b([],[F.ah])
z.d=y
z.e=null
return z}}},
hV:{"^":"a;a,0b",
f8:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ao],"$asc")
z=H.b([],[F.ah])
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
gk:function(a){return this.b.length},
c0:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aE(0,v,t)){v.ac()
break}}}}},
c_:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.gfe(x)
if(y)x.ac()}},
ao:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bG())x=!1
return x},
bF:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bE())x=!1
return x},
i:function(a){return this.E()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
E:function(){return this.v("")}},
hW:{"^":"a;a,0b",
gk:function(a){return this.b.length},
c0:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aE(0,v,t)){v.ac()
break}}}}},
c_:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.ac()}},
i:function(a){return this.E()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.w(z,"\n")},
E:function(){return this.v("")}},
hX:{"^":"a;a,0b",
gk:function(a){return this.b.length},
fW:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ac()}},
i:function(a){return this.E()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
E:function(){return this.v("")}},
ao:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bJ:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cQ(this.cx,x,u,z,y,w,v,a,t)},
fi:function(){return this.bJ(null)},
sh5:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.S()}},
fB:function(a){var z,y
z=J.I(a)
if(z.t(a,$.$get$az())){z=this.f
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$ay())){z=this.r
y=[P.t]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$ax())){z=this.x
y=[P.t]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aA())){z=this.y
y=[P.t]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.t(a,$.$get$aB())){z=this.z
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bt())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bu())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$aX()))return H.b([this.ch],[P.t])
else if(z.t(a,$.$get$aw())){z=this.cx
y=[P.t]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.t])},
bG:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.J(0,new F.iT(z))
z=z.a
this.r=z.F(0,Math.sqrt(z.L(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.a6(0)}return!0},
bE:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.J(0,new F.iS(z))
z=z.a
this.x=z.F(0,Math.sqrt(z.L(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.a6(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
v:function(a){var z,y,x
z=H.b([],[P.m])
C.a.h(z,C.h.Y(J.a3(this.e),0))
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
C.a.h(z,V.D(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.w(z,", ")
return a+"{"+x+"}"},
E:function(){return this.v("")},
q:{
cQ:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ao()
y=new F.iR(z)
y.b=H.b([],[F.cE])
z.b=y
y=new F.iN(z)
x=[F.cz]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iK(z)
x=[F.ah]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eu()
z.e=0
y=$.$get$az()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ay().a)!==0?e:null
z.x=(x&$.$get$ax().a)!==0?b:null
z.y=(x&$.$get$aA().a)!==0?f:null
z.z=(x&$.$get$aB().a)!==0?g:null
z.Q=(x&$.$get$ev().a)!==0?c:null
z.ch=(x&$.$get$aX().a)!==0?i:0
z.cx=(x&$.$get$aw().a)!==0?a:null
return z}}},
iT:{"^":"r:5;a",
$1:function(a){var z,y
H.n(a,"$isah")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
iS:{"^":"r:5;a",
$1:function(a){var z,y
H.n(a,"$isah")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
iJ:{"^":"a;a,0b,0c",
u:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.S()
return!0},
gk:function(a){return this.c.length},
ao:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bG()
return!0},
bF:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bE()
return!0},
fd:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.F(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.I(null)}}}}return!0},
i:function(a){return this.E()},
v:function(a){var z,y,x,w
this.u()
z=H.b([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
E:function(){return this.v("")}},
iK:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
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
J:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ah]})
C.a.J(this.b,b)
C.a.J(this.c,new F.iL(this,b))
C.a.J(this.d,new F.iM(this,b))},
i:function(a){return this.E()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
E:function(){return this.v("")}},
iL:{"^":"r:5;a,b",
$1:function(a){H.n(a,"$isah")
if(!J.N(a.a,this.a))this.b.$1(a)}},
iM:{"^":"r:5;a,b",
$1:function(a){var z
H.n(a,"$isah")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
iN:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.E()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
E:function(){return this.v("")}},
iP:{"^":"a;"},
iO:{"^":"iP;",
aE:function(a,b,c){return J.N(b.f,c.f)}},
iQ:{"^":"a;"},
hr:{"^":"iQ;",
bX:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.ao],"$asc")
z=new V.H(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.H(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.F(0,Math.sqrt(z.L(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){t=a[x]
s=z.F(0,Math.sqrt(u))
if(!J.N(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.I(null)}}}return}},
iR:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.E()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
E:function(){return this.v("")}}}],["","",,O,{"^":"",hb:{"^":"cJ;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gD:function(){var z=this.dy
if(z==null){z=D.ag()
this.dy=z}return z},
P:[function(a){var z
H.n(a,"$isu")
z=this.dy
if(!(z==null))z.I(a)},function(){return this.P(null)},"dG","$1","$0","gaP",0,2,0],
ex:[function(a){H.n(a,"$isu")
this.a=null
this.P(a)},function(){return this.ex(null)},"hE","$1","$0","gew",0,2,0],
hi:[function(a,b){var z=V.ak
z=new D.cr(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.P(z)},"$2","ge3",8,0,12],
hj:[function(a,b){var z=V.ak
z=new D.cs(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.P(z)},"$2","ge4",8,0,12],
ck:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.V(z.e.length+3,4)*4
x=C.f.V(z.f.length+3,4)*4
w=C.f.V(z.r.length+3,4)*4
v=C.f.V(z.x.length+3,4)*4
u=C.f.V(z.y.length+3,4)*4
t=C.f.V(z.z.length+3,4)*4
s=C.f.V(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.f.i(q.a)+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+"_"
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
a=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a0=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$az()
if(c){z=$.$get$ay()
a6=new Z.aW(a6.a|z.a)}if(b){z=$.$get$ax()
a6=new Z.aW(a6.a|z.a)}if(a){z=$.$get$aA()
a6=new Z.aW(a6.a|z.a)}if(a0){z=$.$get$aB()
a6=new Z.aW(a6.a|z.a)}if(a2){z=$.$get$aw()
a6=new Z.aW(a6.a|z.a)}return new A.hg(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
M:function(a,b){H.w(a,"$isc",[T.cK],"$asc")
if(b!=null)if(!C.a.aA(a,b)){b.a=a.length
C.a.h(a,b)}},
bd:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ar(z,z.length,0,[H.y(z,0)]);z.B();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.c2(x)}}},
fY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.ck()
y=a.fr.j(0,z.ad)
if(y==null){y=A.hc(z,a.a)
x=y.b
if(x.length===0)H.p(P.o("May not cache a shader with no name."))
if(a.fr.cD(0,x))H.p(P.o('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.T(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.at
z=b.e
if(!(z instanceof Z.df)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.ao()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bF()
t.a.bF()
t=t.e
if(!(t==null))t.a6(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.fd()
s=s.e
if(!(s==null))s.a6(0)}q=b.d.fc(new Z.iU(a.a),v)
q.au($.$get$az()).e=this.a.y.c
if(z)q.au($.$get$ay()).e=this.a.Q.c
if(u)q.au($.$get$ax()).e=this.a.z.c
if(w.rx)q.au($.$get$aA()).e=this.a.ch.c
if(t)q.au($.$get$aB()).e=this.a.cx.c
if(w.x1)q.au($.$get$aw()).e=this.a.cy.c
b.e=q}z=T.cK
p=H.b([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fo()
if(w.fx){u=this.a
t=a.dx
t=t.gO(t)
u=u.db
u.toString
u.a2(t.Z(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gO(t)
s=a.dx
s=t.m(0,s.gO(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a2(t.Z(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gfU()
s=a.dx
s=t.m(0,s.gO(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a2(t.Z(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a2(t.Z(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a2(t.Z(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a2(C.z.Z(t,!0))}if(w.as>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.e(s,n)
s=s[n]
t.toString
H.n(s,"$isak")
t=t.k3
if(n>=t.length)return H.e(t,n)
t=t[n]
m=new Float32Array(H.bz(H.w(s.Z(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.e:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.f.d)
u=this.a
t=this.f.d
u.a_(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.f.e)
u=this.a
t=this.f.e
u.W(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.e:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.r.d)
u=this.a
t=this.r.d
u.a_(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.r.e)
u=this.a
t=this.r.e
u.W(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.e:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.x.d)
u=this.a
t=this.x.d
u.a_(u.as,u.at,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.x.e)
u=this.a
t=this.x.e
u.W(u.ad,u.at,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.e:u=this.a
t=this.y.f
u=u.aZ
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.M(p,this.y.d)
u=this.a
t=this.y.d
u.a_(u.cG,u.b_,t)
t=this.a
u=this.y.f
t=t.aZ
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.M(p,this.y.e)
u=this.a
t=this.y.e
u.W(u.cH,u.b_,t)
t=this.a
u=this.y.f
t=t.aZ
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.b0
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.b2
t.a.uniform1f(t.d,r)
break
case C.c:this.M(p,this.z.d)
u=this.a
t=this.z.d
u.a_(u.cI,u.b1,t)
t=this.a
u=this.z.f
t=t.b0
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b2
u.a.uniform1f(u.d,r)
break
case C.d:this.M(p,this.z.e)
u=this.a
t=this.z.e
u.W(u.cJ,u.b1,t)
t=this.a
u=this.z.f
t=t.b0
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b2
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.cU
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bL
if(k>=s.length)return H.e(s,k)
h=s[k]
s=l.c2(i.a)
r=s.a
g=s.b
f=s.c
f=s.F(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.cV
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bM
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaI(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gc3(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aN(i.gaI(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gab(i)
f=h.d
g=s.gbb()
r=s.gaO()
s=s.gaX()
f.a.uniform3f(f.d,g,r,s)
s=i.gby()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbz()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbA()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.cW
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bN
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaI(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gc3(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbK(i).hI()
f=h.c
g=s.gap(s)
r=s.gaq(s)
s=s.gar()
f.a.uniform3f(f.d,g,r,s)
s=l.aN(i.gaI(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gab(i)
r=h.e
g=s.gbb()
f=s.gaO()
s=s.gaX()
r.a.uniform3f(r.d,g,f,s)
s=i.ghG()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghF()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gby()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbz()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbA()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.cX
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
r=this.a.bO
if(k>=r.length)return H.e(r,k)
h=r[k]
r=i.gaK()
H.w(p,"$isc",s,"$asc")
if(!C.a.aA(p,r)){r.saT(p.length)
C.a.h(p,r)}r=i.gbK(i)
g=h.d
f=r.gap(r)
e=r.gaq(r)
r=r.gar()
g.a.uniform3f(g.d,f,e,r)
r=i.ghc()
e=h.b
f=r.gap(r)
g=r.gaq(r)
r=r.gar()
e.a.uniform3f(e.d,f,g,r)
r=i.gaJ(i)
g=h.c
f=r.gap(r)
e=r.gaq(r)
r=r.gar()
g.a.uniform3f(g.d,f,e,r)
r=l.c2(i.gbK(i))
e=r.a
f=r.b
g=r.c
g=r.F(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gab(i)
f=h.f
e=g.gbb()
r=g.gaO()
g=g.gaX()
f.a.uniform3f(f.d,e,r,g)
g=i.gaK()
r=g.gbW(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.ge_()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaT())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.cY
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
g=this.a.bP
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gaK()
H.w(p,"$isc",r,"$asc")
if(!C.a.aA(p,g)){g.saT(p.length)
C.a.h(p,g)}d=l.m(0,i.gO(i))
g=i.gO(i).aN(new V.au(0,0,0))
f=h.b
e=g.gn(g)
c=g.gp(g)
g=g.gc3(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aN(new V.au(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.d0(0)
c=h.d
m=new Float32Array(H.bz(H.w(new V.dI(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).Z(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gab(i)
g=h.e
e=c.gbb()
f=c.gaO()
c=c.gaX()
g.a.uniform3f(g.d,e,f,c)
c=i.gaK()
g=c.gbW(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gbW(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.ghH(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gby()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbz()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbA()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.cZ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gO(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bQ
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaK()
H.w(p,"$isc",z,"$asc")
if(!C.a.aA(p,s)){s.saT(p.length)
C.a.h(p,s)}s=i.gaI(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gc3(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbK(i)
f=h.c
g=s.gap(s)
r=s.gaq(s)
s=s.gar()
f.a.uniform3f(f.d,g,r,s)
s=i.ghc()
r=h.d
g=s.gap(s)
f=s.gaq(s)
s=s.gar()
r.a.uniform3f(r.d,g,f,s)
s=i.gaJ(i)
f=h.e
g=s.gap(s)
r=s.gaq(s)
s=s.gar()
f.a.uniform3f(f.d,g,r,s)
s=l.aN(i.gaI(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaK()
r=s.gbW(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.ge_()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaT())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gab(i)
r=h.y
g=s.gbb()
f=s.gaO()
s=s.gaX()
r.a.uniform3f(r.d,g,f,s)
s=i.ghO()
f=h.z
f.a.uniform1f(f.d,s)
s=i.ghP()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gby()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbz()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbA()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.e:break
case C.c:this.M(p,this.Q.d)
z=this.a
u=this.Q.d
z.a_(z.cK,z.b3,u)
break
case C.d:this.M(p,this.Q.e)
z=this.a
u=this.Q.e
z.W(z.cL,z.b3,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gO(u).d0(0)
a.Q=u}z=z.fy
z.toString
z.a2(u.Z(0,!0))}if(w.dy){this.M(p,this.ch)
z=this.a
u=this.ch
z.W(z.cM,z.cN,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.b4
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.M(p,this.cx.d)
z=this.a
u=this.cx.d
z.a_(z.cO,z.b5,u)
u=this.a
z=this.cx.f
u=u.b4
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.M(p,this.cx.e)
z=this.a
u=this.cx.e
z.W(z.cP,z.b5,u)
u=this.a
z=this.cx.f
u=u.b4
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.b7
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.b6
u.a.uniform1f(u.d,s)
break
case C.c:this.M(p,this.cy.d)
z=this.a
u=this.cy.d
z.a_(z.cQ,z.b8,u)
u=this.a
z=this.cy.f
u=u.b7
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b6
z.a.uniform1f(z.d,s)
break
case C.d:this.M(p,this.cy.e)
z=this.a
u=this.cy.e
z.W(z.cR,z.b8,u)
u=this.a
z=this.cy.f
u=u.b7
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b6
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.b9
z.a.uniform1f(z.d,t)
break
case C.c:this.M(p,this.db.d)
z=this.a
t=this.db.d
z.a_(z.cS,z.ba,t)
t=this.a
z=this.db.f
t=t.b9
t.a.uniform1f(t.d,z)
break
case C.d:this.M(p,this.db.e)
z=this.a
t=this.db.e
z.W(z.cT,z.ba,t)
t=this.a
z=this.db.f
t=t.b9
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.bB(a)
z.aw(a)
z.hb(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.fm()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.ck().ad}},he:{"^":"cA;0f,a,b,0c,0d,0e",
eA:function(a){var z,y
z=this.f
if(!$.k.$2(z,a)){y=this.f
this.f=a
z=new D.M(this.b,y,a,this,[P.t])
z.b=!0
this.a.P(z)}},
am:function(){this.c9()
this.eA(1)}},cA:{"^":"a;",
P:[function(a){this.a.P(H.n(a,"$isu"))},function(){return this.P(null)},"dG","$1","$0","gaP",0,2,0],
am:["c9",function(){}],
eC:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.f(this.gaP(),{func:1,ret:-1,args:[D.u]})
C.a.H(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.f(this.gaP(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.M(this.b+".texture2D",x,this.d,this,[T.e5])
z.b=!0
this.a.P(z)}},
eD:function(a){},
sbc:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.am()
this.c=C.c
this.eD(null)
z=this.a
z.a=null
z.P(null)}this.eC(a)}},hf:{"^":"cA;a,b,0c,0d,0e"},aS:{"^":"cA;0f,a,b,0c,0d,0e",
ct:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.M(this.b+".color",z,a,this,[V.a_])
y.b=!0
this.a.P(y)}},
am:["bi",function(){this.c9()
this.ct(new V.a_(1,1,1))}],
sab:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.am()
z=this.a
z.a=null
z.P(null)}this.ct(b)}},hh:{"^":"aS;0ch,0f,a,b,0c,0d,0e",
eB:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.P(z)}},
am:function(){this.bi()
this.eB(1)}},hi:{"^":"aS;0ch,0f,a,b,0c,0d,0e",
bv:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.P(z)}},
am:function(){this.bi()
this.bv(100)}},cJ:{"^":"a;"}}],["","",,T,{"^":"",cK:{"^":"ci;"},e5:{"^":"cK;0b,0c,0d,0e,0f,0r,0x,0y,a"},ib:{"^":"a;a,0b,0c,0d,0e",
fD:function(a,b,c,d,e){var z,y,x,w
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
w=new T.e5(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.ag()
z=W.a4
W.U(x,"load",H.f(new T.ic(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
bV:function(a){return this.fD(a,!1,!1,!1,!1)},
ey:function(a,b,c){var z,y,x,w
b=V.d6(b,2)
z=V.d6(a.width,2)
y=V.d6(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cm(null,null)
x.width=z
x.height=y
w=H.n(C.k.dj(x,"2d"),"$isdi")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kw(w.getImageData(0,0,x.width,x.height))}}},ic:{"^":"r:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.ey(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.K.h3(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.fn()}++x.e}}}],["","",,V,{"^":"",fe:{"^":"a;",
aD:function(a,b){return!0},
i:function(a){return"all"},
$isbK:1},bK:{"^":"a;"},dH:{"^":"a;",
aD:["dt",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aD(0,b))return!0
return!1}],
i:["c8",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbK:1},bj:{"^":"dH;0a",
aD:function(a,b){return!this.dt(0,b)},
i:function(a){return"!["+this.c8(0)+"]"}},hT:{"^":"a;0a",
dz:function(a){var z,y
if(a.a.length<=0)throw H.d(P.o("May not create a SetMatcher with zero characters."))
z=new H.aR(0,0,[P.C,P.ae])
for(y=new H.dF(a,a.gk(a),0,[H.aE(a,"q",0)]);y.B();)z.T(0,y.d,!0)
this.a=z},
aD:function(a,b){return this.a.cD(0,b)},
i:function(a){var z=this.a
return P.cI(new H.dE(z,[H.y(z,0)]),0,null)},
$isbK:1,
q:{
Z:function(a){var z=new V.hT()
z.dz(a)
return z}}},e0:{"^":"a;a,b,0c,0d",
gfG:function(a){return this.b},
w:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ea(this.a.G(0,b))
w.a=H.b([],[V.bK])
w.c=!1
C.a.h(this.c,w)
return w},
fp:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aD(0,a))return w}return},
i:function(a){return this.b}},e8:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.f8(this.b,"\n","\\n")
y=H.f8(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},e9:{"^":"a;a,b,0c",
i:function(a){return this.b}},im:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.e0(this,b)
z.c=H.b([],[V.ea])
this.a.T(0,b,z)}return z},
aL:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.e9(this,a)
y=P.m
z.c=new H.aR(0,0,[y,y])
this.b.T(0,a,z)}return z},
ha:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.e8])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.aQ(a,t)
r=y.fp(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cI(w,0,null)
throw H.d(P.o("Untokenizable string [state: "+y.gfG(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cI(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.e8(o==null?p.b:o,q,t)}++t}}}},ea:{"^":"dH;b,0c,0a",
i:function(a){return this.b.b+": "+this.c8(0)}}}],["","",,X,{"^":"",dh:{"^":"a;",$isat:1},fM:{"^":"e3;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.ag()
this.x=z}return z}},hu:{"^":"a;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.ag()
this.e=z}return z},
ay:[function(a){var z
H.n(a,"$isu")
z=this.e
if(!(z==null))z.I(a)},function(){return this.ay(null)},"hf","$1","$0","gcc",0,2,0],
saF:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
if(z!=null){z=z.gD()
z.toString
y=H.f(this.gcc(),{func:1,ret:-1,args:[D.u]})
C.a.H(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gD()
z.toString
y=H.f(this.gcc(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.M("mover",x,this.a,this,[U.bL])
z.b=!0
this.ay(z)}},
$isat:1,
$isdh:1},e3:{"^":"a;"}}],["","",,V,{"^":"",
kS:function(a){P.il(C.w,new V.kT(a))},
kT:{"^":"r:33;a",
$1:function(a){H.n(a,"$isaU")
P.d7(C.j.de(this.a.gfs(),2)+" fps")}},
hY:{"^":"a;0a,0b",
dB:function(a,b){var z,y,x,w,v,u,t
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
t=W.a4
W.U(z,"scroll",H.f(new V.i0(x),{func:1,ret:-1,args:[t]}),!1,t)},
f9:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.m],"$asc")
this.eI()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ha(C.a.fz(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.k3(C.H,s,C.q,!1)
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
eI:function(){var z,y,x,w
if(this.b!=null)return
z=new V.im()
y=P.m
z.a=new H.aR(0,0,[y,V.e0])
z.b=new H.aR(0,0,[y,V.e9])
z.c=z.G(0,"Start")
y=z.G(0,"Start").w(0,"Bold")
x=V.Z(new H.X("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Bold").w(0,"Bold")
x=new V.bj()
w=[V.bK]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Z(new H.X("*"))
C.a.h(x.a,y)
y=z.G(0,"Bold").w(0,"BoldEnd")
x=V.Z(new H.X("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"Italic")
x=V.Z(new H.X("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Italic").w(0,"Italic")
x=new V.bj()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Z(new H.X("_"))
C.a.h(x.a,y)
y=z.G(0,"Italic").w(0,"ItalicEnd")
x=V.Z(new H.X("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"Code")
x=V.Z(new H.X("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Code").w(0,"Code")
x=new V.bj()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Z(new H.X("`"))
C.a.h(x.a,y)
y=z.G(0,"Code").w(0,"CodeEnd")
x=V.Z(new H.X("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"LinkHead")
x=V.Z(new H.X("["))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"LinkHead").w(0,"LinkTail")
x=V.Z(new H.X("|"))
C.a.h(y.a,x)
x=z.G(0,"LinkHead").w(0,"LinkEnd")
y=V.Z(new H.X("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkHead").w(0,"LinkHead")
y=new V.bj()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Z(new H.X("|]"))
C.a.h(y.a,x)
x=z.G(0,"LinkTail").w(0,"LinkEnd")
y=V.Z(new H.X("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkTail").w(0,"LinkTail")
y=new V.bj()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Z(new H.X("|]"))
C.a.h(y.a,x)
C.a.h(z.G(0,"Start").w(0,"Other").a,new V.fe())
x=z.G(0,"Other").w(0,"Other")
y=new V.bj()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Z(new H.X("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.aL("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.aL("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.aL("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.aL("Link")
x=z.G(0,"Other")
x.d=x.a.aL("Other")
this.b=z},
q:{
hZ:function(a,b){var z=new V.hY()
z.dB(a,!0)
return z}}},
i0:{"^":"r:13;a",
$1:function(a){P.ik(C.m,new V.i_(this.a))}},
i_:{"^":"r:1;a",
$0:function(){var z,y,x
z=C.j.a1(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,F,{"^":"",
f3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=V.hZ("Test 005",!0)
y=W.cm(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.f9(H.b(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."],[P.m]))
x=document.getElementById("testCanvas")
if(x==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
w=E.ii(x,!0,!0,!0,!1)
v=new E.aG()
v.a=""
v.b=!0
z=E.aG
u=O.co(z)
v.y=u
u.bf(v.gfH(),v.gfJ())
v.z=null
v.Q=null
v.ch=null
v.cx=null
v.cy=null
v.db=null
v.dx=null
v.dy=null
v.fr=null
v.fx=null
v.sc5(0,null)
v.saF(null)
t=F.dZ()
F.by(t,null,null,1,1,1,0,0,1)
F.by(t,null,null,1,1,0,1,0,3)
F.by(t,null,null,1,1,0,0,1,2)
F.by(t,null,null,1,1,-1,0,0,0)
F.by(t,null,null,1,1,0,-1,0,0)
F.by(t,null,null,1,1,0,0,-1,3)
t.ao()
t.fF(new F.iO(),new F.hr())
v.sc5(0,t)
u=new U.dW()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.sdf(0)
u.sd5(0,0)
u.sd9(0)
s=u.d
if(!$.k.$2(s,0.1)){r=u.d
u.d=0.1
s=new D.M("deltaYaw",r,0.1,u,[P.t])
s.b=!0
u.al(s)}s=u.e
if(!$.k.$2(s,0.21)){r=u.e
u.e=0.21
s=new D.M("deltaPitch",r,0.21,u,[P.t])
s.b=!0
u.al(s)}s=u.f
if(!$.k.$2(s,0.32)){r=u.f
u.f=0.32
s=new D.M("deltaRoll",r,0.32,u,[P.t])
s.b=!0
u.al(s)}v.saF(u)
q=w.f.bV("../resources/CtrlPnlColor.png")
p=new O.hb()
u=O.co(V.ak)
p.e=u
u.bf(p.ge3(),p.ge4())
u=new O.aS(p,"emission")
u.c=C.b
u.f=new V.a_(0,0,0)
p.f=u
u=new O.aS(p,"ambient")
u.c=C.b
u.f=new V.a_(0,0,0)
p.r=u
u=new O.aS(p,"diffuse")
u.c=C.b
u.f=new V.a_(0,0,0)
p.x=u
u=new O.aS(p,"invDiffuse")
u.c=C.b
u.f=new V.a_(0,0,0)
p.y=u
u=new O.hi(p,"specular")
u.c=C.b
u.f=new V.a_(0,0,0)
u.ch=100
p.z=u
u=new O.hf(p,"bump")
u.c=C.b
p.Q=u
p.ch=null
u=new O.aS(p,"reflect")
u.c=C.b
u.f=new V.a_(0,0,0)
p.cx=u
u=new O.hh(p,"refract")
u.c=C.b
u.f=new V.a_(0,0,0)
u.ch=1
p.cy=u
u=new O.he(p,"alpha")
u.c=C.b
u.f=1
p.db=u
u=new D.fY()
u.ca(D.S)
u.e=H.b([],[D.c_])
u.f=H.b([],[D.hw])
u.r=H.b([],[D.i2])
u.x=H.b([],[D.id])
u.y=H.b([],[D.ie])
u.z=H.b([],[D.ig])
u.Q=null
u.ch=null
u.c4(u.ge2(),u.gem(),u.gen())
p.dx=u
s=u.Q
if(s==null){s=D.ag()
u.Q=s
u=s}else u=s
s={func:1,ret:-1,args:[D.u]}
o=H.f(p.gew(),s)
C.a.h(u.a,o)
o=p.dx
u=o.ch
if(u==null){u=D.ag()
o.ch=u}o=H.f(p.gaP(),s)
C.a.h(u.a,o)
p.dy=null
o=p.dx
u=U.dl(V.dJ(new V.au(0,0,0),new V.H(0,1,0),new V.H(1,-1,-3)))
n=new V.a_(1,1,1)
m=new D.c_()
m.c=new V.a_(1,1,1)
m.a=new V.H(0,0,1)
r=m.b
m.b=u
u=u.gD()
u.toString
l=H.f(m.gdF(),s)
C.a.h(u.a,l)
u=new D.M("mover",r,m.b,m,[U.bL])
u.b=!0
m.ah(u)
if(!m.c.t(0,n)){r=m.c
m.c=n
u=new D.M("color",r,n,m,[V.a_])
u.b=!0
m.ah(u)}o.h(0,m)
p.f.sbc(w.f.bV("../resources/CtrlPnlEmission.png"))
u=p.r
u.sab(0,new V.a_(0.2,0.2,0.2))
u=p.x
u.sab(0,new V.a_(0.8,0.8,0.8))
p.r.sbc(q)
p.x.sbc(q)
p.z.sbc(w.f.bV("../resources/CtrlPnlSpecular.png"))
u=p.z
if(u.c===C.b){u.c=C.e
u.bi()
u.bv(100)
o=u.a
o.a=null
o.P(null)}u.bv(10)
u=new M.fE()
z=O.co(z)
u.d=z
z.bf(u.ge6(),u.ge7())
u.e=null
u.f=null
u.r=null
u.x=null
k=new X.hu()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.saF(null)
z=k.b
if(!$.k.$2(z,1.0471975511965976)){r=k.b
k.b=1.0471975511965976
z=new D.M("fov",r,1.0471975511965976,k,[P.t])
z.b=!0
k.ay(z)}z=k.c
if(!$.k.$2(z,0.1)){r=k.c
k.c=0.1
z=new D.M("near",r,0.1,k,[P.t])
z.b=!0
k.ay(z)}z=k.d
if(!$.k.$2(z,2000)){r=k.d
k.d=2000
z=new D.M("far",r,2000,k,[P.t])
z.b=!0
k.ay(z)}z=u.a
if(z!==k){if(z!=null){z=z.gD()
z.toString
o=H.f(u.ga4(),s)
C.a.H(z.a,o)}r=u.a
u.a=k
z=k.gD()
z.toString
o=H.f(u.ga4(),s)
C.a.h(z.a,o)
z=new D.M("camera",r,u.a,u,[X.dh])
z.b=!0
u.ai(z)}j=new X.fM()
z=new V.bX(0,0,0,1)
j.a=z
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
z=V.dV(0,0,1,1)
j.r=z
z=u.b
if(z!==j){if(z!=null){z=z.gD()
z.toString
o=H.f(u.ga4(),s)
C.a.H(z.a,o)}r=u.b
u.b=j
z=j.gD()
z.toString
o=H.f(u.ga4(),s)
C.a.h(z.a,o)
z=new D.M("target",r,u.b,u,[X.e3])
z.b=!0
u.ai(z)}u.sdc(null)
u.sdc(p)
u.d.h(0,v)
u.a.saF(U.dl(V.as(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
z=w.d
if(z!==u){if(z!=null){z=z.gD()
z.toString
o=H.f(w.gcb(),s)
C.a.H(z.a,o)}w.d=u
z=u.gD()
z.toString
s=H.f(w.gcb(),s)
C.a.h(z.a,s)
w.dD()}V.kS(w)}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dA.prototype
return J.dz.prototype}if(typeof a=="string")return J.cv.prototype
if(a==null)return J.dB.prototype
if(typeof a=="boolean")return J.fS.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.bS=function(a){if(typeof a=="string")return J.cv.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.d1=function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.kA=function(a){if(typeof a=="number")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cP.prototype
return a}
J.bT=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).t(a,b)}
J.fa=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kA(a).af(a,b)}
J.fb=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kJ(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bS(a).j(a,b)}
J.fc=function(a,b,c,d){return J.bT(a).cA(a,b,c,d)}
J.ch=function(a,b,c){return J.bS(a).ff(a,b,c)}
J.d9=function(a,b){return J.d1(a).A(a,b)}
J.fd=function(a,b){return J.d1(a).J(a,b)}
J.ap=function(a){return J.I(a).gN(a)}
J.bF=function(a){return J.d1(a).gR(a)}
J.b5=function(a){return J.bS(a).gk(a)}
J.a3=function(a){return J.I(a).i(a)}
I.d4=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cl.prototype
C.x=J.l.prototype
C.a=J.aQ.prototype
C.y=J.dz.prototype
C.f=J.dA.prototype
C.z=J.dB.prototype
C.j=J.c4.prototype
C.h=J.cv.prototype
C.G=J.bI.prototype
C.I=H.hp.prototype
C.J=W.hq.prototype
C.p=J.hv.prototype
C.K=P.cF.prototype
C.l=J.cP.prototype
C.r=W.bv.prototype
C.t=W.iX.prototype
C.u=new P.ht()
C.v=new P.iI()
C.i=new P.jI()
C.b=new A.bY(0,"ColorSourceType.None")
C.e=new A.bY(1,"ColorSourceType.Solid")
C.c=new A.bY(2,"ColorSourceType.Texture2D")
C.d=new A.bY(3,"ColorSourceType.TextureCube")
C.m=new P.b9(0)
C.w=new P.b9(5e6)
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
C.H=H.b(I.d4([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.q=new P.iH(!1)
$.aj=0
$.b6=null
$.dc=null
$.cV=!1
$.f0=null
$.eV=null
$.f6=null
$.cd=null
$.cf=null
$.d2=null
$.aZ=null
$.bA=null
$.bB=null
$.cW=!1
$.L=C.i
$.dt=null
$.ds=null
$.dr=null
$.dq=null
$.k=V.hj()
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
I.$lazy(y,x,w)}})(["dp","$get$dp",function(){return H.f_("_$dart_dartClosure")},"cw","$get$cw",function(){return H.f_("_$dart_js")},"eb","$get$eb",function(){return H.am(H.c8({
toString:function(){return"$receiver$"}}))},"ec","$get$ec",function(){return H.am(H.c8({$method$:null,
toString:function(){return"$receiver$"}}))},"ed","$get$ed",function(){return H.am(H.c8(null))},"ee","$get$ee",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ei","$get$ei",function(){return H.am(H.c8(void 0))},"ej","$get$ej",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eg","$get$eg",function(){return H.am(H.eh(null))},"ef","$get$ef",function(){return H.am(function(){try{null.$method$}catch(z){return z.message}}())},"el","$get$el",function(){return H.am(H.eh(void 0))},"ek","$get$ek",function(){return H.am(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cS","$get$cS",function(){return P.iY()},"bC","$get$bC",function(){return[]},"eP","$get$eP",function(){return P.hJ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dn","$get$dn",function(){return{}},"ew","$get$ew",function(){return Z.ad(0)},"eu","$get$eu",function(){return Z.ad(511)},"az","$get$az",function(){return Z.ad(1)},"ay","$get$ay",function(){return Z.ad(2)},"ax","$get$ax",function(){return Z.ad(4)},"aA","$get$aA",function(){return Z.ad(8)},"aB","$get$aB",function(){return Z.ad(16)},"bt","$get$bt",function(){return Z.ad(32)},"bu","$get$bu",function(){return Z.ad(64)},"ev","$get$ev",function(){return Z.ad(96)},"aX","$get$aX",function(){return Z.ad(128)},"aw","$get$aw",function(){return Z.ad(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[W.al]},{func:1,ret:P.G,args:[F.ah]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[P.C,[P.i,E.aG]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:P.G,args:[D.u]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[P.C,[P.i,V.ak]]},{func:1,ret:P.G,args:[W.a4]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.C,[P.i,D.S]]},{func:1,ret:P.G,args:[,,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:P.m,args:[P.C]},{func:1,ret:P.G,args:[P.P]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.ae,args:[W.J]},{func:1,ret:P.ae,args:[P.t,P.t]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.ae,args:[[P.i,D.S]]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:P.G,args:[F.ao,P.t,P.t]},{func:1,ret:-1,args:[P.a],opt:[P.ai]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,args:[P.m]},{func:1,ret:P.G,args:[P.aU]},{func:1,args:[,P.m]},{func:1,ret:W.Y,args:[W.J]}]
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
Isolate.d4=a.d4
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
if(typeof dartMainRunner==="function")dartMainRunner(F.f3,[])
else F.f3([])})})()
//# sourceMappingURL=test.dart.js.map
