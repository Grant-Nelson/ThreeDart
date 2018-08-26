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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ism)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d5(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d6=function(){}
var dart=[["","",,H,{"^":"",lK:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
db:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
co:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d9==null){H.kv()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.i(P.er("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cG()]
if(v!=null)return v
v=H.kA(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.q
if(y===Object.prototype)return C.q
if(typeof w=="function"){Object.defineProperty(w,$.$get$cG(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
m:{"^":"a;",
u:function(a,b){return a===b},
gS:function(a){return H.bn(a)},
j:["dV",function(a){return"Instance of '"+H.aV(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fS:{"^":"m;",
j:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isa9:1},
dI:{"^":"m;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gS:function(a){return 0},
$isD:1},
cH:{"^":"m;",
gS:function(a){return 0},
j:["dW",function(a){return String(a)}]},
hs:{"^":"cH;"},
ci:{"^":"cH;"},
bR:{"^":"cH;",
j:function(a){var z=a[$.$get$dt()]
if(z==null)return this.dW(a)
return"JavaScript function for "+H.j(J.am(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscB:1},
bP:{"^":"m;$ti",
h:function(a,b){H.C(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.ad("add"))
a.push(b)},
N:function(a,b){var z
if(!!a.fixed$length)H.r(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
bM:function(a,b){var z,y
H.w(b,"$ise",[H.y(a,0)],"$ase")
if(!!a.fixed$length)H.r(P.ad("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
F:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.i(P.aR(a))}},
Z:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a9(z,y,H.j(a[y]))
return z.join(b)},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
gc8:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.i(H.fQ())},
aR:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
j:function(a){return P.cE(a,"[","]")},
gX:function(a){return new J.an(a,a.length,0,[H.y(a,0)])},
gS:function(a){return H.bn(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.c2(b,"newLength",null))
if(b<0)throw H.i(P.bo(b,0,null,"newLength",null))
a.length=b},
a9:function(a,b,c){H.a_(b)
H.C(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(H.bY(a,b))
if(b>=a.length||b<0)throw H.i(H.bY(a,b))
a[b]=c},
$ise:1,
$isd:1,
t:{
fR:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.c2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.bo(a,0,4294967295,"length",null))
return J.dF(new Array(a),b)},
dF:function(a,b){return J.bf(H.f(a,[b]))},
bf:function(a){H.bJ(a)
a.fixed$length=Array
return a}}},
lJ:{"^":"bP;$ti"},
an:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.i(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bQ:{"^":"m;",
gfX:function(a){return a===0?1/a<0:a<0},
hr:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.i(P.ad(""+a+".toInt()"))},
c5:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.i(P.ad(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.ad(""+a+".round()"))},
dK:function(a,b){var z
if(b>20)throw H.i(P.bo(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfX(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
i:function(a,b){if(typeof b!=="number")throw H.i(H.bX(b))
return a*b},
dQ:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cU(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.cU(a,b)},
cU:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.i(P.ad("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
cS:function(a,b){var z
if(a>0)z=this.fb(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fb:function(a,b){return b>31?0:a>>>b},
ae:function(a,b){if(typeof b!=="number")throw H.i(H.bX(b))
return a<b},
$isv:1,
$isT:1},
dH:{"^":"bQ;",$isL:1},
dG:{"^":"bQ;"},
cd:{"^":"m;",
ed:function(a,b){if(b>=a.length)throw H.i(H.bY(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.U(b)
if(typeof b!=="string")throw H.i(P.c2(b,null,null))
return a+b},
cq:function(a,b,c){H.a_(c)
if(c==null)c=a.length
if(b>c)throw H.i(P.cP(b,null,null))
if(c>a.length)throw H.i(P.cP(c,null,null))
return a.substring(b,c)},
cp:function(a,b){return this.cq(a,b,null)},
i:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
h9:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.i(c,z)+a},
at:function(a,b){return this.h9(a,b," ")},
fN:function(a,b,c){if(c>a.length)throw H.i(P.bo(c,0,a.length,null,null))
return H.kN(a,b,c)},
j:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ishq:1,
$iso:1}}],["","",,H,{"^":"",
fQ:function(){return new P.hV("No element")},
fC:{"^":"e;"},
h2:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.c_(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.i(P.aR(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.D(z,w);++this.c
return!0}},
h7:{"^":"e;a,b,$ti",
gX:function(a){return new H.h8(J.c1(this.a),this.b,this.$ti)},
gl:function(a){return J.b7(this.a)},
D:function(a,b){return this.b.$1(J.de(this.a,b))},
$ase:function(a,b){return[b]}},
h8:{"^":"cF;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascF:function(a,b){return[b]}},
iM:{"^":"e;a,b,$ti",
gX:function(a){return new H.iN(J.c1(this.a),this.b,this.$ti)}},
iN:{"^":"cF;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
ca:{"^":"a;$ti"}}],["","",,H,{"^":"",
kq:function(a){return init.types[H.a_(a)]},
ky:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.am(a)
if(typeof z!=="string")throw H.i(H.bX(a))
return z},
bn:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aV:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.w||!!J.I(a).$isci){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.j.ed(w,0)===36)w=C.j.cp(w,1)
r=H.da(H.bJ(H.aO(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hA:function(a){return a.b?H.a6(a).getUTCFullYear()+0:H.a6(a).getFullYear()+0},
hy:function(a){return a.b?H.a6(a).getUTCMonth()+1:H.a6(a).getMonth()+1},
hu:function(a){return a.b?H.a6(a).getUTCDate()+0:H.a6(a).getDate()+0},
hv:function(a){return a.b?H.a6(a).getUTCHours()+0:H.a6(a).getHours()+0},
hx:function(a){return a.b?H.a6(a).getUTCMinutes()+0:H.a6(a).getMinutes()+0},
hz:function(a){return a.b?H.a6(a).getUTCSeconds()+0:H.a6(a).getSeconds()+0},
hw:function(a){return a.b?H.a6(a).getUTCMilliseconds()+0:H.a6(a).getMilliseconds()+0},
p:function(a){throw H.i(H.bX(a))},
k:function(a,b){if(a==null)J.b7(a)
throw H.i(H.bY(a,b))},
bY:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.a_(J.b7(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.cP(b,"index",null)},
bX:function(a){return new P.aI(!0,a,null,null)},
kf:function(a){if(typeof a!=="number")throw H.i(H.bX(a))
return a},
i:function(a){var z
if(a==null)a=new P.dU()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f4})
z.name=""}else z.toString=H.f4
return z},
f4:function(){return J.am(this.dartException)},
r:function(a){throw H.i(a)},
z:function(a){throw H.i(P.aR(a))},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.cS(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cJ(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dT(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ea()
u=$.$get$eb()
t=$.$get$ec()
s=$.$get$ed()
r=$.$get$eh()
q=$.$get$ei()
p=$.$get$ef()
$.$get$ee()
o=$.$get$ek()
n=$.$get$ej()
m=v.ab(y)
if(m!=null)return z.$1(H.cJ(H.U(y),m))
else{m=u.ab(y)
if(m!=null){m.method="call"
return z.$1(H.cJ(H.U(y),m))}else{m=t.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=r.ab(y)
if(m==null){m=q.ab(y)
if(m==null){m=p.ab(y)
if(m==null){m=s.ab(y)
if(m==null){m=o.ab(y)
if(m==null){m=n.ab(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dT(H.U(y),m))}}return z.$1(new H.iv(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e2()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e2()
return a},
b5:function(a){var z
if(a==null)return new H.eI(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eI(a)},
kn:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a9(0,a[y],a[x])}return b},
kx:function(a,b,c,d,e,f){H.h(a,"$iscB")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.q("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var z
H.a_(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kx)
a.$identity=z
return z},
fk:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isd){z.$reflectionInfo=d
x=H.hC(z).r}else x=d
w=e?Object.create(new H.hW().constructor.prototype):Object.create(new H.cu(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ar
if(typeof u!=="number")return u.G()
$.ar=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dn(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kq,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.di:H.cv
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.i("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dn(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fh:function(a,b,c,d){var z=H.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dn:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fj(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fh(y,!w,z,b)
if(y===0){w=$.ar
if(typeof w!=="number")return w.G()
$.ar=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b8
if(v==null){v=H.c3("self")
$.b8=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ar
if(typeof w!=="number")return w.G()
$.ar=w+1
t+=w
w="return function("+t+"){return this."
v=$.b8
if(v==null){v=H.c3("self")
$.b8=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fi:function(a,b,c,d){var z,y
z=H.cv
y=H.di
switch(b?-1:a){case 0:throw H.i(H.hK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fj:function(a,b){var z,y,x,w,v,u,t,s
z=$.b8
if(z==null){z=H.c3("self")
$.b8=z}y=$.dh
if(y==null){y=H.c3("receiver")
$.dh=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fi(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ar
if(typeof y!=="number")return y.G()
$.ar=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ar
if(typeof y!=="number")return y.G()
$.ar=y+1
return new Function(z+y+"}")()},
d5:function(a,b,c,d,e,f,g){var z,y
z=J.bf(H.bJ(b))
H.a_(c)
y=!!J.I(d).$isd?J.bf(d):d
return H.fk(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.az(a,"String"))},
kE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.az(a,"num"))},
eV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.az(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.az(a,"int"))},
f2:function(a,b){throw H.i(H.az(a,H.U(b).substring(3)))},
kG:function(a,b){var z=J.c_(b)
throw H.i(H.fg(a,z.cq(b,3,z.gl(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.f2(a,b)},
c:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.kG(a,b)},
bJ:function(a){if(a==null)return a
if(!!J.I(a).$isd)return a
throw H.i(H.az(a,"List"))},
kz:function(a,b){if(a==null)return a
if(!!J.I(a).$isd)return a
if(J.I(a)[b])return a
H.f2(a,b)},
eW:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a_(z)]
else return a.$S()}return},
bZ:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eW(J.I(a))
if(z==null)return!1
y=H.eZ(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d1)return a
$.d1=!0
try{if(H.bZ(a,b))return a
z=H.c0(b)
y=H.az(a,z)
throw H.i(y)}finally{$.d1=!1}},
d7:function(a,b){if(a!=null&&!H.d4(a,b))H.r(H.az(a,H.c0(b)))
return a},
eQ:function(a){var z
if(a instanceof H.t){z=H.eW(J.I(a))
if(z!=null)return H.c0(z)
return"Closure"}return H.aV(a)},
kP:function(a){throw H.i(new P.fr(H.U(a)))},
eX:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aO:function(a){if(a==null)return
return a.$ti},
mH:function(a,b,c){return H.b6(a["$as"+H.j(c)],H.aO(b))},
b4:function(a,b,c,d){var z
H.U(c)
H.a_(d)
z=H.b6(a["$as"+H.j(c)],H.aO(b))
return z==null?null:z[d]},
aN:function(a,b,c){var z
H.U(b)
H.a_(c)
z=H.b6(a["$as"+H.j(b)],H.aO(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.a_(b)
z=H.aO(a)
return z==null?null:z[b]},
c0:function(a){var z=H.aP(a,null)
return z},
aP:function(a,b){var z,y
H.w(b,"$isd",[P.o],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.da(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.j(b[y])}if('func' in a)return H.k5(a,b)
if('futureOr' in a)return"FutureOr<"+H.aP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.j.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aP(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aP(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aP(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aP(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.km(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.U(z[l])
n=n+m+H.aP(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
da:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.o],"$asd")
if(a==null)return""
z=new P.bU("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aP(u,c)}v="<"+z.j(0)+">"
return v},
b6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b1:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aO(a)
y=J.I(a)
if(y[b]==null)return!1
return H.eT(H.b6(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.U(b)
H.bJ(c)
H.U(d)
if(a==null)return a
z=H.b1(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.da(c,0,null)
throw H.i(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eT:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.al(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.al(a[y],b,c[y],d))return!1
return!0},
mF:function(a,b,c){return a.apply(b,H.b6(J.I(b)["$as"+H.j(c)],H.aO(b)))},
f_:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="D"||a===-1||a===-2||H.f_(z)}return!1},
d4:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="D"||b===-1||b===-2||H.f_(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d4(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bZ(a,b)}y=J.I(a).constructor
x=H.aO(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.al(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.d4(a,b))throw H.i(H.az(a,H.c0(b)))
return a},
al:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.al(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.eZ(a,b,c,d)
if('func' in a)return c.builtin$cls==="cB"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.al("type" in a?a.type:null,b,x,d)
else if(H.al(a,b,x,d))return!0
else{if(!('$is'+"bc" in y.prototype))return!1
w=y.prototype["$as"+"bc"]
v=H.b6(w,z?a.slice(1):null)
return H.al(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c0(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eT(H.b6(r,z),b,u,d)},
eZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kD(m,b,l,d)},
kD:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.al(c[w],d,a[w],b))return!1}return!0},
mG:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
kA:function(a){var z,y,x,w,v,u
z=H.U($.eY.$1(a))
y=$.cn[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cp[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.eS.$2(a,z))
if(z!=null){y=$.cn[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cp[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cq(x)
$.cn[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cp[z]=x
return x}if(v==="-"){u=H.cq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f1(a,x)
if(v==="*")throw H.i(P.er(z))
if(init.leafTags[z]===true){u=H.cq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f1(a,x)},
f1:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.db(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cq:function(a){return J.db(a,!1,null,!!a.$isA)},
kC:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cq(z)
else return J.db(z,c,null,null)},
kv:function(){if(!0===$.d9)return
$.d9=!0
H.kw()},
kw:function(){var z,y,x,w,v,u,t,s
$.cn=Object.create(null)
$.cp=Object.create(null)
H.kr()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f3.$1(v)
if(u!=null){t=H.kC(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kr:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.b0(C.z,H.b0(C.E,H.b0(C.o,H.b0(C.o,H.b0(C.D,H.b0(C.A,H.b0(C.B(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eY=new H.ks(v)
$.eS=new H.kt(u)
$.f3=new H.ku(t)},
b0:function(a,b){return a(b)||b},
kN:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hB:{"^":"a;a,b,c,d,e,f,r,0x",t:{
hC:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bf(z)
y=z[0]
x=z[1]
return new H.hB(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ih:{"^":"a;a,b,c,d,e,f",
ab:function(a){var z,y,x
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
t:{
ay:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ch:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eg:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ho:{"^":"a0;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dT:function(a,b){return new H.ho(a,b==null?null:b.method)}}},
fT:{"^":"a0;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
cJ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fT(a,y,z?null:b.receiver)}}},
iv:{"^":"a0;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kS:{"^":"t:14;a",
$1:function(a){if(!!J.I(a).$isa0)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eI:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isap:1},
t:{"^":"a;",
j:function(a){return"Closure '"+H.aV(this).trim()+"'"},
gdM:function(){return this},
$iscB:1,
gdM:function(){return this}},
e5:{"^":"t;"},
hW:{"^":"e5;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cu:{"^":"e5;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cu))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bn(this.a)
else y=typeof z!=="object"?J.aH(z):H.bn(z)
return(y^H.bn(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aV(z)+"'")},
t:{
cv:function(a){return a.a},
di:function(a){return a.c},
c3:function(a){var z,y,x,w,v
z=new H.cu("self","target","receiver","name")
y=J.bf(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ii:{"^":"a0;a",
j:function(a){return this.a},
t:{
az:function(a,b){return new H.ii("TypeError: "+H.j(P.c9(a))+": type '"+H.eQ(a)+"' is not a subtype of type '"+b+"'")}}},
ff:{"^":"a0;a",
j:function(a){return this.a},
t:{
fg:function(a,b){return new H.ff("CastError: "+H.j(P.c9(a))+": type '"+H.eQ(a)+"' is not a subtype of type '"+b+"'")}}},
hJ:{"^":"a0;a",
j:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
hK:function(a){return new H.hJ(a)}}},
cI:{"^":"h5;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gas:function(a){return new H.fY(this,[H.y(this,0)])},
fO:function(a,b){var z=this.b
if(z==null)return!1
return this.eg(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b3(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b3(w,b)
x=y==null?null:y.b
return x}else return this.fW(b)},
fW:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cH(z,J.aH(a)&0x3ffffff)
x=this.dz(y,a)
if(x<0)return
return y[x].b},
a9:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bF()
this.b=z}this.cu(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bF()
this.c=y}this.cu(y,b,c)}else{x=this.d
if(x==null){x=this.bF()
this.d=x}w=J.aH(b)&0x3ffffff
v=this.cH(x,w)
if(v==null)this.bK(x,w,[this.bG(b,c)])
else{u=this.dz(v,b)
if(u>=0)v[u].b=c
else v.push(this.bG(b,c))}}},
F:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.i(P.aR(this))
z=z.c}},
cu:function(a,b,c){var z
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
z=this.b3(a,b)
if(z==null)this.bK(a,b,this.bG(b,c))
else z.b=c},
ep:function(){this.r=this.r+1&67108863},
bG:function(a,b){var z,y
z=new H.fX(H.C(a,H.y(this,0)),H.C(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ep()
return z},
dz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
j:function(a){return P.dP(this)},
b3:function(a,b){return a[b]},
cH:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
ej:function(a,b){delete a[b]},
eg:function(a,b){return this.b3(a,b)!=null},
bF:function(){var z=Object.create(null)
this.bK(z,"<non-identifier-key>",z)
this.ej(z,"<non-identifier-key>")
return z},
$isdM:1},
fX:{"^":"a;a,b,0c,0d"},
fY:{"^":"fC;a,$ti",
gl:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.fZ(z,z.r,this.$ti)
y.c=z.e
return y}},
fZ:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.aR(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
ks:{"^":"t:14;a",
$1:function(a){return this.a(a)}},
kt:{"^":"t:25;a",
$2:function(a,b){return this.a(a,b)}},
ku:{"^":"t:26;a",
$1:function(a){return this.a(H.U(a))}}}],["","",,H,{"^":"",
km:function(a){return J.dF(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bE:function(a){return a},
aM:function(a,b,c){H.bJ(b)
if(a>>>0!==a||a>=c)throw H.i(H.bY(b,a))},
hl:{"^":"m;",$ismo:1,"%":"DataView;ArrayBufferView;cO|eC|eD|hk|eE|eF|aK"},
cO:{"^":"hl;",
gl:function(a){return a.length},
$isA:1,
$asA:I.d6},
hk:{"^":"eD;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
$asca:function(){return[P.v]},
$asu:function(){return[P.v]},
$ise:1,
$ase:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aK:{"^":"eF;",
$asca:function(){return[P.L]},
$asu:function(){return[P.L]},
$ise:1,
$ase:function(){return[P.L]},
$isd:1,
$asd:function(){return[P.L]}},
lU:{"^":"aK;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lV:{"^":"aK;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lW:{"^":"aK;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lX:{"^":"aK;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lY:{"^":"aK;",
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lZ:{"^":"aK;",
gl:function(a){return a.length},
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m_:{"^":"aK;",
gl:function(a){return a.length},
k:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eC:{"^":"cO+u;"},
eD:{"^":"eC+ca;"},
eE:{"^":"cO+u;"},
eF:{"^":"eE+ca;"}}],["","",,P,{"^":"",
iP:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kc()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b2(new P.iR(z),1)).observe(y,{childList:true})
return new P.iQ(z,y,x)}else if(self.setImmediate!=null)return P.kd()
return P.ke()},
mu:[function(a){self.scheduleImmediate(H.b2(new P.iS(H.b(a,{func:1,ret:-1})),0))},"$1","kc",4,0,9],
mv:[function(a){self.setImmediate(H.b2(new P.iT(H.b(a,{func:1,ret:-1})),0))},"$1","kd",4,0,9],
mw:[function(a){H.b(a,{func:1,ret:-1})
P.jN(0,a)},"$1","ke",4,0,9],
e8:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aW]})
z=C.f.a2(a.a,1000)
return P.jO(z<0?0:z,b)},
k8:function(a,b){if(H.bZ(a,{func:1,args:[P.a,P.ap]}))return b.hi(a,null,P.a,P.ap)
if(H.bZ(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.i(P.c2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k7:function(){var z,y
for(;z=$.b_,z!=null;){$.bG=null
y=z.b
$.b_=y
if(y==null)$.bF=null
z.a.$0()}},
mE:[function(){$.d2=!0
try{P.k7()}finally{$.bG=null
$.d2=!1
if($.b_!=null)$.$get$cZ().$1(P.eU())}},"$0","eU",0,0,3],
eP:function(a){var z=new P.ew(H.b(a,{func:1,ret:-1}))
if($.b_==null){$.bF=z
$.b_=z
if(!$.d2)$.$get$cZ().$1(P.eU())}else{$.bF.b=z
$.bF=z}},
kb:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b_
if(z==null){P.eP(a)
$.bG=$.bF
return}y=new P.ew(a)
x=$.bG
if(x==null){y.b=z
$.bG=y
$.b_=y}else{y.b=x.b
x.b=y
$.bG=y
if(y.b==null)$.bF=y}},
kH:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.P
if(C.i===y){P.cm(null,null,C.i,a)
return}y.toString
P.cm(null,null,y,H.b(y.cY(a),z))},
ie:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aW]}
H.b(b,z)
y=$.P
if(y===C.i){y.toString
return P.e8(a,b)}x=y.cZ(b,P.aW)
$.P.toString
return P.e8(a,H.b(x,z))},
cl:function(a,b,c,d,e){var z={}
z.a=d
P.kb(new P.k9(z,e))},
eN:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
eO:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
ka:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cm:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.cY(d):c.fK(d,-1)
P.eP(d)},
iR:{"^":"t:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iQ:{"^":"t:36;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iS:{"^":"t:2;a",
$0:function(){this.a.$0()}},
iT:{"^":"t:2;a",
$0:function(){this.a.$0()}},
eL:{"^":"a;a,0b,c",
e4:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b2(new P.jQ(this,b),0),a)
else throw H.i(P.ad("`setTimeout()` not found."))},
e5:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b2(new P.jP(this,a,Date.now(),b),0),a)
else throw H.i(P.ad("Periodic timer."))},
$isaW:1,
t:{
jN:function(a,b){var z=new P.eL(!0,0)
z.e4(a,b)
return z},
jO:function(a,b){var z=new P.eL(!1,0)
z.e5(a,b)
return z}}},
jQ:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jP:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dY(w,x)}z.c=y
this.d.$1(z)}},
aZ:{"^":"a;0a,b,c,d,e,$ti",
h2:function(a){if(this.c!==6)return!0
return this.b.b.cj(H.b(this.d,{func:1,ret:P.a9,args:[P.a]}),a.a,P.a9,P.a)},
fV:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bZ(z,{func:1,args:[P.a,P.ap]}))return H.d7(w.hn(z,a.a,a.b,null,y,P.ap),x)
else return H.d7(w.cj(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aF:{"^":"a;cT:a<,b,0f3:c<,$ti",
dJ:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k8(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aF(0,$.P,[c])
w=b==null?1:3
this.cv(new P.aZ(x,w,a,b,[z,c]))
return x},
hq:function(a,b){return this.dJ(a,null,b)},
cv:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaZ")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaF")
z=y.a
if(z<4){y.cv(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cm(null,null,z,H.b(new P.j6(this,a),{func:1,ret:-1}))}},
cM:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaZ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaF")
y=u.a
if(y<4){u.cM(a)
return}this.a=y
this.c=u.c}z.a=this.b6(a)
y=this.b
y.toString
P.cm(null,null,y,H.b(new P.jb(z,this),{func:1,ret:-1}))}},
bI:function(){var z=H.h(this.c,"$isaZ")
this.c=null
return this.b6(z)},
b6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cB:function(a){var z,y,x,w
z=H.y(this,0)
H.d7(a,{futureOr:1,type:z})
y=this.$ti
x=H.b1(a,"$isbc",y,"$asbc")
if(x){z=H.b1(a,"$isaF",y,null)
if(z)P.ey(a,this)
else P.j7(a,this)}else{w=this.bI()
H.C(a,z)
this.a=4
this.c=a
P.bC(this,w)}},
by:[function(a,b){var z
H.h(b,"$isap")
z=this.bI()
this.a=8
this.c=new P.af(a,b)
P.bC(this,z)},function(a){return this.by(a,null)},"hw","$2","$1","gee",4,2,35],
$isbc:1,
t:{
j7:function(a,b){var z,y,x
b.a=1
try{a.dJ(new P.j8(b),new P.j9(b),null)}catch(x){z=H.aQ(x)
y=H.b5(x)
P.kH(new P.ja(b,z,y))}},
ey:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaF")
if(z>=4){y=b.bI()
b.a=a.a
b.c=a.c
P.bC(b,y)}else{y=H.h(b.c,"$isaZ")
b.a=2
b.c=a
a.cM(y)}},
bC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isaf")
y=y.b
u=v.a
t=v.b
y.toString
P.cl(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bC(z.a,b)}y=z.a
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
if(p){H.h(r,"$isaf")
y=y.b
u=r.a
t=r.b
y.toString
P.cl(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.je(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jd(x,b,r).$0()}else if((y&2)!==0)new P.jc(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.I(y).$isbc){if(y.a>=4){n=H.h(t.c,"$isaZ")
t.c=null
b=t.b6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ey(y,t)
return}}m=b.b
n=H.h(m.c,"$isaZ")
m.c=null
b=m.b6(n)
y=x.a
u=x.b
if(!y){H.C(u,H.y(m,0))
m.a=4
m.c=u}else{H.h(u,"$isaf")
m.a=8
m.c=u}z.a=m
y=m}}}},
j6:{"^":"t:2;a,b",
$0:function(){P.bC(this.a,this.b)}},
jb:{"^":"t:2;a,b",
$0:function(){P.bC(this.b,this.a.a)}},
j8:{"^":"t:15;a",
$1:function(a){var z=this.a
z.a=0
z.cB(a)}},
j9:{"^":"t:28;a",
$2:function(a,b){this.a.by(a,H.h(b,"$isap"))},
$1:function(a){return this.$2(a,null)}},
ja:{"^":"t:2;a,b,c",
$0:function(){this.a.by(this.b,this.c)}},
je:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dG(H.b(w.d,{func:1}),null)}catch(v){y=H.aQ(v)
x=H.b5(v)
if(this.d){w=H.h(this.a.a.c,"$isaf").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isaf")
else u.b=new P.af(y,x)
u.a=!0
return}if(!!J.I(z).$isbc){if(z instanceof P.aF&&z.gcT()>=4){if(z.gcT()===8){w=this.b
w.b=H.h(z.gf3(),"$isaf")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hq(new P.jf(t),null)
w.a=!1}}},
jf:{"^":"t:30;a",
$1:function(a){return this.a}},
jd:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.C(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cj(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aQ(t)
y=H.b5(t)
x=this.a
x.b=new P.af(z,y)
x.a=!0}}},
jc:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isaf")
w=this.c
if(w.h2(z)&&w.e!=null){v=this.b
v.b=w.fV(z)
v.a=!1}}catch(u){y=H.aQ(u)
x=H.b5(u)
w=H.h(this.a.a.c,"$isaf")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.af(y,x)
s.a=!0}}},
ew:{"^":"a;a,0b"},
cT:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aF(0,$.P,[P.L])
z.a=0
this.h_(new P.hY(z,this),!0,new P.hZ(z,y),y.gee())
return y}},
hY:{"^":"t;a,b",
$1:function(a){H.C(a,H.aN(this.b,"cT",0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.aN(this.b,"cT",0)]}}},
hZ:{"^":"t:2;a,b",
$0:function(){this.b.cB(this.a.a)}},
e3:{"^":"a;$ti"},
aW:{"^":"a;"},
af:{"^":"a;a,b",
j:function(a){return H.j(this.a)},
$isa0:1},
jV:{"^":"a;",$ismt:1},
k9:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dU()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.i(z)
x=H.i(z)
x.stack=y.j(0)
throw x}},
jz:{"^":"jV;",
ho:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.P){a.$0()
return}P.eN(null,null,this,a,-1)}catch(x){z=H.aQ(x)
y=H.b5(x)
P.cl(null,null,this,z,H.h(y,"$isap"))}},
hp:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.i===$.P){a.$1(b)
return}P.eO(null,null,this,a,b,-1,c)}catch(x){z=H.aQ(x)
y=H.b5(x)
P.cl(null,null,this,z,H.h(y,"$isap"))}},
fK:function(a,b){return new P.jB(this,H.b(a,{func:1,ret:b}),b)},
cY:function(a){return new P.jA(this,H.b(a,{func:1,ret:-1}))},
cZ:function(a,b){return new P.jC(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dG:function(a,b){H.b(a,{func:1,ret:b})
if($.P===C.i)return a.$0()
return P.eN(null,null,this,a,b)},
cj:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.P===C.i)return a.$1(b)
return P.eO(null,null,this,a,b,c,d)},
hn:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.P===C.i)return a.$2(b,c)
return P.ka(null,null,this,a,b,c,d,e,f)},
hi:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jB:{"^":"t;a,b,c",
$0:function(){return this.a.dG(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jA:{"^":"t:3;a,b",
$0:function(){return this.a.ho(this.b)}},
jC:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.hp(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h0:function(a,b,c){H.bJ(a)
return H.w(H.kn(a,new H.cI(0,0,[b,c])),"$isdM",[b,c],"$asdM")},
h_:function(a,b){return new H.cI(0,0,[a,b])},
h1:function(a,b,c,d){return new P.jl(0,0,[d])},
fP:function(a,b,c){var z,y
if(P.d3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bH()
C.a.h(y,a)
try{P.k6(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.e4(b,H.kz(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cE:function(a,b,c){var z,y,x
if(P.d3(a))return b+"..."+c
z=new P.bU(b)
y=$.$get$bH()
C.a.h(y,a)
try{x=z
x.a=P.e4(x.gay(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gay()+c
y=z.gay()
return y.charCodeAt(0)==0?y:y},
d3:function(a){var z,y
for(z=0;y=$.$get$bH(),z<y.length;++z)if(a===y[z])return!0
return!1},
k6:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.j(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.E();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dP:function(a){var z,y,x
z={}
if(P.d3(a))return"{...}"
y=new P.bU("")
try{C.a.h($.$get$bH(),a)
x=y
x.a=x.gay()+"{"
z.a=!0
J.f8(a,new P.h6(z,y))
z=y
z.a=z.gay()+"}"}finally{z=$.$get$bH()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gay()
return z.charCodeAt(0)==0?z:z},
jl:{"^":"jg;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){return P.eB(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d0()
this.b=z}return this.cz(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d0()
this.c=y}return this.cz(y,b)}else return this.e7(0,b)},
e7:function(a,b){var z,y,x
H.C(b,H.y(this,0))
z=this.d
if(z==null){z=P.d0()
this.d=z}y=this.cC(b)
x=z[y]
if(x==null)z[y]=[this.bx(b)]
else{if(this.cG(x,b)>=0)return!1
x.push(this.bx(b))}return!0},
N:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cN(this.c,b)
else return this.eX(0,b)},
eX:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.em(z,b)
x=this.cG(y,b)
if(x<0)return!1
this.cV(y.splice(x,1)[0])
return!0},
cz:function(a,b){H.C(b,H.y(this,0))
if(H.h(a[b],"$isd_")!=null)return!1
a[b]=this.bx(b)
return!0},
cN:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isd_")
if(z==null)return!1
this.cV(z)
delete a[b]
return!0},
cA:function(){this.r=this.r+1&67108863},
bx:function(a){var z,y
z=new P.d_(H.C(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cA()
return z},
cV:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cA()},
cC:function(a){return J.aH(a)&0x3ffffff},
em:function(a,b){return a[this.cC(b)]},
cG:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
t:{
d0:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d_:{"^":"a;a,0b,0c"},
jm:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.aR(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.y(this,0))
this.c=z.b
return!0}}},
t:{
eB:function(a,b,c){var z=new P.jm(a,b,[c])
z.c=a.e
return z}}},
jg:{"^":"hL;"},
cK:{"^":"jn;",$ise:1,$isd:1},
u:{"^":"a;$ti",
gX:function(a){return new H.h2(a,this.gl(a),0,[H.b4(this,a,"u",0)])},
D:function(a,b){return this.k(a,b)},
F:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.b4(this,a,"u",0)]})
z=this.gl(a)
if(typeof z!=="number")return H.p(z)
y=0
for(;y<z;++y){b.$1(this.k(a,y))
if(z!==this.gl(a))throw H.i(P.aR(a))}},
ht:function(a,b){var z,y,x
z=H.f([],[H.b4(this,a,"u",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.a9(z,y,this.k(a,y));++y}return z},
hs:function(a){return this.ht(a,!0)},
j:function(a){return P.cE(a,"[","]")}},
h5:{"^":"aa;"},
h6:{"^":"t:20;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
aa:{"^":"a;$ti",
F:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.b4(this,a,"aa",0),H.b4(this,a,"aa",1)]})
for(z=J.c1(this.gas(a));z.E();){y=z.gO(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.b7(this.gas(a))},
j:function(a){return P.dP(a)},
$isa3:1},
hM:{"^":"a;$ti",
j:function(a){return P.cE(this,"{","}")},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.df("index"))
if(b<0)H.r(P.bo(b,0,null,"index",null))
for(z=P.eB(this,this.r,H.y(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.i(P.N(b,this,"index",null,y))},
$ise:1},
hL:{"^":"hM;"},
jn:{"^":"a+u;"}}],["","",,P,{"^":"",
fF:function(a){var z=J.I(a)
if(!!z.$ist)return z.j(a)
return"Instance of '"+H.aV(a)+"'"},
h3:function(a,b,c,d){var z,y
H.C(b,d)
z=J.fR(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a9(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
dN:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gX(a);x.E();)C.a.h(y,H.C(x.gO(x),c))
if(b)return y
return H.w(J.bf(y),"$isd",z,"$asd")},
c9:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.am(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fF(a)},
q:function(a){return new P.ex(a)},
dc:function(a){H.kF(a)},
a9:{"^":"a;"},
"+bool":0,
ao:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.f.cS(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fs(H.hA(this))
y=P.bL(H.hy(this))
x=P.bL(H.hu(this))
w=P.bL(H.hv(this))
v=P.bL(H.hx(this))
u=P.bL(H.hz(this))
t=P.ft(H.hw(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fs:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ft:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bL:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"T;"},
"+double":0,
ba:{"^":"a;a",
i:function(a,b){return new P.ba(C.f.U(this.a*b))},
ae:function(a,b){return C.f.ae(this.a,H.h(b,"$isba").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ba))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.fB()
y=this.a
if(y<0)return"-"+new P.ba(0-y).j(0)
x=z.$1(C.f.a2(y,6e7)%60)
w=z.$1(C.f.a2(y,1e6)%60)
v=new P.fA().$1(y%1e6)
return""+C.f.a2(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
dA:function(a,b,c,d,e,f){return new P.ba(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fA:{"^":"t:22;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fB:{"^":"t:22;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a0:{"^":"a;"},
dU:{"^":"a0;",
j:function(a){return"Throw of null."}},
aI:{"^":"a0;a,b,c,d",
gbA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbz:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbA()+y+x
if(!this.a)return w
v=this.gbz()
u=P.c9(this.b)
return w+v+": "+H.j(u)},
t:{
f9:function(a){return new P.aI(!1,null,null,a)},
c2:function(a,b,c){return new P.aI(!0,a,b,c)},
df:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
dY:{"^":"aI;e,f,a,b,c,d",
gbA:function(){return"RangeError"},
gbz:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
cP:function(a,b,c){return new P.dY(null,null,!0,a,b,"Value not in range")},
bo:function(a,b,c,d,e){return new P.dY(b,c,!0,a,d,"Invalid value")}}},
fO:{"^":"aI;e,l:f>,a,b,c,d",
gbA:function(){return"RangeError"},
gbz:function(){if(J.f5(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
N:function(a,b,c,d,e){var z=H.a_(e!=null?e:J.b7(b))
return new P.fO(b,z,!0,a,c,"Index out of range")}}},
iw:{"^":"a0;a",
j:function(a){return"Unsupported operation: "+this.a},
t:{
ad:function(a){return new P.iw(a)}}},
iu:{"^":"a0;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
er:function(a){return new P.iu(a)}}},
hV:{"^":"a0;a",
j:function(a){return"Bad state: "+this.a}},
fn:{"^":"a0;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c9(z))+"."},
t:{
aR:function(a){return new P.fn(a)}}},
hp:{"^":"a;",
j:function(a){return"Out of Memory"},
$isa0:1},
e2:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isa0:1},
fr:{"^":"a0;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ex:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
L:{"^":"T;"},
"+int":0,
e:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gX(this)
for(y=0;z.E();)++y
return y},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.i(P.df("index"))
if(b<0)H.r(P.bo(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.E();){x=z.gO(z)
if(b===y)return x;++y}throw H.i(P.N(b,this,"index",null,y))},
j:function(a){return P.fP(this,"(",")")}},
cF:{"^":"a;$ti"},
d:{"^":"a;$ti",$ise:1},
"+List":0,
a3:{"^":"a;$ti"},
D:{"^":"a;",
gS:function(a){return P.a.prototype.gS.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
T:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gS:function(a){return H.bn(this)},
j:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.j(this)}},
ap:{"^":"a;"},
o:{"^":"a;",$ishq:1},
"+String":0,
bU:{"^":"a;ay:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
e4:function(a,b,c){var z=J.c1(b)
if(!z.E())return a
if(c.length===0){do a+=H.j(z.gO(z))
while(z.E())}else{a+=H.j(z.gO(z))
for(;z.E();)a=a+c+H.j(z.gO(z))}return a}}}}],["","",,W,{"^":"",
cx:function(a,b){var z=document.createElement("canvas")
return z},
fD:function(a){H.h(a,"$isa2")
return"wheel"},
cD:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
ck:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eA:function(a,b,c,d){var z,y
z=W.ck(W.ck(W.ck(W.ck(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eR:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.i)return a
return z.cZ(a,b)},
aT:{"^":"V;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kU:{"^":"cS;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kV:{"^":"m;0l:length=","%":"AccessibleNodeList"},
kW:{"^":"aT;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kX:{"^":"aT;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
fe:{"^":"m;","%":";Blob"},
cw:{"^":"aT;",
br:function(a,b,c){if(c!=null)return a.getContext(b,P.kg(c,null))
return a.getContext(b)},
dO:function(a,b){return this.br(a,b,null)},
$iscw:1,
"%":"HTMLCanvasElement"},
dl:{"^":"m;",$isdl:1,"%":"CanvasRenderingContext2D"},
l2:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l4:{"^":"c7;0l:length=","%":"CSSPerspective"},
l5:{"^":"cA;0n:x=,0p:y=","%":"CSSPositionValue"},
l6:{"^":"c7;0n:x=,0p:y=","%":"CSSRotation"},
b9:{"^":"m;",$isb9:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l7:{"^":"c7;0n:x=,0p:y=","%":"CSSScale"},
fp:{"^":"iX;0l:length=",
dP:function(a,b){var z=a.getPropertyValue(this.cw(a,b))
return z==null?"":z},
cw:function(a,b){var z,y
z=$.$get$ds()
y=z[b]
if(typeof y==="string")return y
y=this.fc(a,b)
z[b]=y
return y},
fc:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fu()+b
if(z in a)return z
return b},
f4:function(a,b,c,d){a.setProperty(b,c,d)},
gbR:function(a){return a.bottom},
gah:function(a){return a.height},
gaJ:function(a){return a.left},
gaX:function(a){return a.right},
gb_:function(a){return a.top},
gai:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fq:{"^":"a;",
gaJ:function(a){return this.dP(a,"left")}},
cA:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c7:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
l8:{"^":"cA;0l:length=","%":"CSSTransformValue"},
l9:{"^":"c7;0n:x=,0p:y=","%":"CSSTranslation"},
la:{"^":"cA;0l:length=","%":"CSSUnparsedValue"},
lb:{"^":"m;0l:length=","%":"DataTransferItemList"},
lc:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
ld:{"^":"m;",
j:function(a){return String(a)},
"%":"DOMException"},
le:{"^":"fy;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fy:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
lf:{"^":"iZ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a7,P.T]]},
$asu:function(){return[[P.a7,P.T]]},
$ise:1,
$ase:function(){return[[P.a7,P.T]]},
$isd:1,
$asd:function(){return[[P.a7,P.T]]},
$asx:function(){return[[P.a7,P.T]]},
"%":"ClientRectList|DOMRectList"},
fz:{"^":"m;",
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gai(a))+" x "+H.j(this.gah(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b1(b,"$isa7",[P.T],"$asa7")
if(!z)return!1
z=J.bI(b)
return a.left===z.gaJ(b)&&a.top===z.gb_(b)&&this.gai(a)===z.gai(b)&&this.gah(a)===z.gah(b)},
gS:function(a){return W.eA(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF,this.gah(a)&0x1FFFFFFF)},
gbR:function(a){return a.bottom},
gah:function(a){return a.height},
gaJ:function(a){return a.left},
gaX:function(a){return a.right},
gb_:function(a){return a.top},
gai:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa7:1,
$asa7:function(){return[P.T]},
"%":";DOMRectReadOnly"},
lg:{"^":"j0;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.o]},
$asu:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"DOMStringList"},
lh:{"^":"m;0l:length=","%":"DOMTokenList"},
iW:{"^":"cK;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return H.h(z[b],"$isV")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.hs(this)
return new J.an(z,z.length,0,[H.y(z,0)])},
$asu:function(){return[W.V]},
$ase:function(){return[W.V]},
$asd:function(){return[W.V]}},
V:{"^":"J;",
gbW:function(a){return new W.iW(a,a.children)},
gba:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ae()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ae()
if(w<0)w=-w*0
return new P.a7(z,y,x,w,[P.T])},
j:function(a){return a.localName},
$isV:1,
"%":";Element"},
a1:{"^":"m;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a2:{"^":"m;",
cX:["dU",function(a,b,c,d){H.b(c,{func:1,args:[W.a1]})
if(c!=null)this.e8(a,b,c,!1)}],
e8:function(a,b,c,d){return a.addEventListener(b,H.b2(H.b(c,{func:1,args:[W.a1]}),1),!1)},
$isa2:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eG|eH|eJ|eK"},
bb:{"^":"fe;",$isbb:1,"%":"File"},
lA:{"^":"j5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bb]},
$asu:function(){return[W.bb]},
$ise:1,
$ase:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asx:function(){return[W.bb]},
"%":"FileList"},
lB:{"^":"a2;0l:length=","%":"FileWriter"},
lE:{"^":"aT;0l:length=","%":"HTMLFormElement"},
bd:{"^":"m;",$isbd:1,"%":"Gamepad"},
lF:{"^":"cS;0n:x=,0p:y=","%":"Gyroscope"},
lG:{"^":"m;0l:length=","%":"History"},
lH:{"^":"ji;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$asu:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cb:{"^":"m;0d4:data=",$iscb:1,"%":"ImageData"},
cC:{"^":"aT;",$iscC:1,"%":"HTMLImageElement"},
bg:{"^":"cV;",$isbg:1,"%":"KeyboardEvent"},
lM:{"^":"m;",
j:function(a){return String(a)},
"%":"Location"},
lN:{"^":"cS;0n:x=,0p:y=","%":"Magnetometer"},
lP:{"^":"m;0l:length=","%":"MediaList"},
lQ:{"^":"a2;",
cX:function(a,b,c,d){H.b(c,{func:1,args:[W.a1]})
if(b==="message")a.start()
this.dU(a,b,c,!1)},
"%":"MessagePort"},
lR:{"^":"jo;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
F:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gas:function(a){var z=H.f([],[P.o])
this.F(a,new W.hh(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hh:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lS:{"^":"jp;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
F:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gas:function(a){var z=H.f([],[P.o])
this.F(a,new W.hi(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hi:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bi:{"^":"m;",$isbi:1,"%":"MimeType"},
lT:{"^":"jr;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bi]},
$asu:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asx:function(){return[W.bi]},
"%":"MimeTypeArray"},
a5:{"^":"cV;",$isa5:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iV:{"^":"cK;a",
gX:function(a){var z=this.a.childNodes
return new W.dC(z,z.length,-1,[H.b4(C.G,z,"x",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
$asu:function(){return[W.J]},
$ase:function(){return[W.J]},
$asd:function(){return[W.J]}},
J:{"^":"a2;",
j:function(a){var z=a.nodeValue
return z==null?this.dV(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hm:{"^":"jt;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$asu:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bk:{"^":"m;0l:length=",$isbk:1,"%":"Plugin"},
m3:{"^":"jx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$asu:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asx:function(){return[W.bk]},
"%":"PluginArray"},
m8:{"^":"jD;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
F:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gas:function(a){var z=H.f([],[P.o])
this.F(a,new W.hI(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"RTCStatsReport"},
hI:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m9:{"^":"aT;0l:length=","%":"HTMLSelectElement"},
cS:{"^":"a2;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bp:{"^":"a2;",$isbp:1,"%":"SourceBuffer"},
ma:{"^":"eH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bp]},
$asu:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asx:function(){return[W.bp]},
"%":"SourceBufferList"},
bq:{"^":"m;",$isbq:1,"%":"SpeechGrammar"},
mb:{"^":"jF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bq]},
$asu:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asx:function(){return[W.bq]},
"%":"SpeechGrammarList"},
br:{"^":"m;0l:length=",$isbr:1,"%":"SpeechRecognitionResult"},
md:{"^":"jI;",
k:function(a,b){return a.getItem(H.U(b))},
F:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gas:function(a){var z=H.f([],[P.o])
this.F(a,new W.hX(z))
return z},
gl:function(a){return a.length},
$asaa:function(){return[P.o,P.o]},
$isa3:1,
$asa3:function(){return[P.o,P.o]},
"%":"Storage"},
hX:{"^":"t:41;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bs:{"^":"m;",$isbs:1,"%":"CSSStyleSheet|StyleSheet"},
bt:{"^":"aT;",$isbt:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bv:{"^":"a2;",$isbv:1,"%":"TextTrack"},
bw:{"^":"a2;",$isbw:1,"%":"TextTrackCue|VTTCue"},
mi:{"^":"jM;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bw]},
$asu:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asx:function(){return[W.bw]},
"%":"TextTrackCueList"},
mj:{"^":"eK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bv]},
$asu:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asx:function(){return[W.bv]},
"%":"TextTrackList"},
mk:{"^":"m;0l:length=","%":"TimeRanges"},
by:{"^":"m;",$isby:1,"%":"Touch"},
aX:{"^":"cV;",$isaX:1,"%":"TouchEvent"},
ml:{"^":"jS;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.by]},
$asu:function(){return[W.by]},
$ise:1,
$ase:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$asx:function(){return[W.by]},
"%":"TouchList"},
mm:{"^":"m;0l:length=","%":"TrackDefaultList"},
cV:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mp:{"^":"m;",
j:function(a){return String(a)},
"%":"URL"},
mr:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
ms:{"^":"a2;0l:length=","%":"VideoTrackList"},
bB:{"^":"a5;",
gfR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.ad("deltaY is not supported"))},
gfQ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.ad("deltaX is not supported"))},
$isbB:1,
"%":"WheelEvent"},
iO:{"^":"a2;",
f0:function(a,b){return a.requestAnimationFrame(H.b2(H.b(b,{func:1,ret:-1,args:[P.T]}),1))},
ek:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mx:{"^":"jX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b9]},
$asu:function(){return[W.b9]},
$ise:1,
$ase:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$asx:function(){return[W.b9]},
"%":"CSSRuleList"},
my:{"^":"fz;",
j:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b1(b,"$isa7",[P.T],"$asa7")
if(!z)return!1
z=J.bI(b)
return a.left===z.gaJ(b)&&a.top===z.gb_(b)&&a.width===z.gai(b)&&a.height===z.gah(b)},
gS:function(a){return W.eA(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gah:function(a){return a.height},
gai:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mA:{"^":"jZ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bd]},
$asu:function(){return[W.bd]},
$ise:1,
$ase:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asx:function(){return[W.bd]},
"%":"GamepadList"},
mB:{"^":"k0;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$asu:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mC:{"^":"k2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.br]},
$asu:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asx:function(){return[W.br]},
"%":"SpeechRecognitionResultList"},
mD:{"^":"k4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bs]},
$asu:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asx:function(){return[W.bs]},
"%":"StyleSheetList"},
j1:{"^":"cT;a,b,c,$ti",
h_:function(a,b,c,d){var z=H.y(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.W(this.a,this.b,a,!1,z)}},
mz:{"^":"j1;a,b,c,$ti"},
j2:{"^":"e3;a,b,c,d,e,$ti",
fg:function(){var z=this.d
if(z!=null&&this.a<=0)J.f7(this.b,this.c,z,!1)},
t:{
W:function(a,b,c,d,e){var z=c==null?null:W.eR(new W.j3(c),W.a1)
z=new W.j2(0,a,b,z,!1,[e])
z.fg()
return z}}},
j3:{"^":"t:4;a",
$1:function(a){return this.a.$1(H.h(a,"$isa1"))}},
x:{"^":"a;$ti",
gX:function(a){return new W.dC(a,this.gl(a),-1,[H.b4(this,a,"x",0)])}},
dC:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f6(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
iX:{"^":"m+fq;"},
iY:{"^":"m+u;"},
iZ:{"^":"iY+x;"},
j_:{"^":"m+u;"},
j0:{"^":"j_+x;"},
j4:{"^":"m+u;"},
j5:{"^":"j4+x;"},
jh:{"^":"m+u;"},
ji:{"^":"jh+x;"},
jo:{"^":"m+aa;"},
jp:{"^":"m+aa;"},
jq:{"^":"m+u;"},
jr:{"^":"jq+x;"},
js:{"^":"m+u;"},
jt:{"^":"js+x;"},
jw:{"^":"m+u;"},
jx:{"^":"jw+x;"},
jD:{"^":"m+aa;"},
eG:{"^":"a2+u;"},
eH:{"^":"eG+x;"},
jE:{"^":"m+u;"},
jF:{"^":"jE+x;"},
jI:{"^":"m+aa;"},
jL:{"^":"m+u;"},
jM:{"^":"jL+x;"},
eJ:{"^":"a2+u;"},
eK:{"^":"eJ+x;"},
jR:{"^":"m+u;"},
jS:{"^":"jR+x;"},
jW:{"^":"m+u;"},
jX:{"^":"jW+x;"},
jY:{"^":"m+u;"},
jZ:{"^":"jY+x;"},
k_:{"^":"m+u;"},
k0:{"^":"k_+x;"},
k1:{"^":"m+u;"},
k2:{"^":"k1+x;"},
k3:{"^":"m+u;"},
k4:{"^":"k3+x;"}}],["","",,P,{"^":"",
kj:function(a){var z,y
z=J.I(a)
if(!!z.$iscb){y=z.gd4(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eM(a.data,a.height,a.width)},
ki:function(a){if(a instanceof P.eM)return{data:a.a,height:a.b,width:a.c}
return a},
aG:function(a){var z,y,x,w,v
if(a==null)return
z=P.h_(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.U(y[w])
z.a9(0,v,a[v])}return z},
kg:function(a,b){var z={}
a.F(0,new P.kh(z))
return z},
dy:function(){var z=$.dx
if(z==null){z=J.cr(window.navigator.userAgent,"Opera",0)
$.dx=z}return z},
fu:function(){var z,y
z=$.du
if(z!=null)return z
y=$.dv
if(y==null){y=J.cr(window.navigator.userAgent,"Firefox",0)
$.dv=y}if(y)z="-moz-"
else{y=$.dw
if(y==null){y=!P.dy()&&J.cr(window.navigator.userAgent,"Trident/",0)
$.dw=y}if(y)z="-ms-"
else z=P.dy()?"-o-":"-webkit-"}$.du=z
return z},
eM:{"^":"a;d4:a>,b,c",$iscb:1},
kh:{"^":"t:20;a",
$2:function(a,b){this.a[a]=b}},
fI:{"^":"cK;a,b",
gb4:function(){var z,y,x
z=this.b
y=H.aN(z,"u",0)
x=W.V
return new H.h7(new H.iM(z,H.b(new P.fJ(),{func:1,ret:P.a9,args:[y]}),[y]),H.b(new P.fK(),{func:1,ret:x,args:[y]}),[y,x])},
F:function(a,b){H.b(b,{func:1,ret:-1,args:[W.V]})
C.a.F(P.dN(this.gb4(),!1,W.V),b)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b7(this.gb4().a)},
k:function(a,b){var z=this.gb4()
return z.b.$1(J.de(z.a,b))},
gX:function(a){var z=P.dN(this.gb4(),!1,W.V)
return new J.an(z,z.length,0,[H.y(z,0)])},
$asu:function(){return[W.V]},
$ase:function(){return[W.V]},
$asd:function(){return[W.V]}},
fJ:{"^":"t:23;",
$1:function(a){return!!J.I(H.h(a,"$isJ")).$isV}},
fK:{"^":"t:24;",
$1:function(a){return H.c(H.h(a,"$isJ"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ez:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bl:{"^":"a;n:a>,p:b>,$ti",
j:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b1(b,"$isbl",[P.T],null)
if(!z)return!1
z=this.a
y=J.bI(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.aH(this.a)
y=J.aH(this.b)
return P.ez(P.bD(P.bD(0,z),y))},
i:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.i()
y=H.y(this,0)
z=H.C(z*b,y)
x=this.b
if(typeof x!=="number")return x.i()
return new P.bl(z,H.C(x*b,y),this.$ti)}},
jy:{"^":"a;$ti",
gaX:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.C(z+this.c,H.y(this,0))},
gbR:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.C(z+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b1(b,"$isa7",[P.T],"$asa7")
if(!z)return!1
z=this.a
y=J.bI(b)
x=y.gaJ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb_(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.y(this,0)
if(H.C(z+this.c,w)===y.gaX(b)){if(typeof x!=="number")return x.G()
z=H.C(x+this.d,w)===y.gbR(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.aH(z)
x=this.b
w=J.aH(x)
if(typeof z!=="number")return z.G()
v=H.y(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.C(x+this.d,v)
return P.ez(P.bD(P.bD(P.bD(P.bD(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d2:function(a,b){var z,y
H.w(b,"$isbl",[P.T],"$asbl")
z=b.a
y=this.a
if(typeof z!=="number")return z.dN()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dN()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a7:{"^":"jy;aJ:a>,b_:b>,ai:c>,ah:d>,$ti"}}],["","",,P,{"^":"",li:{"^":"R;0n:x=,0p:y=","%":"SVGFEBlendElement"},lj:{"^":"R;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},lk:{"^":"R;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},ll:{"^":"R;0n:x=,0p:y=","%":"SVGFECompositeElement"},lm:{"^":"R;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},ln:{"^":"R;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},lo:{"^":"R;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},lp:{"^":"R;0n:x=,0p:y=","%":"SVGFEFloodElement"},lq:{"^":"R;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},lr:{"^":"R;0n:x=,0p:y=","%":"SVGFEImageElement"},ls:{"^":"R;0n:x=,0p:y=","%":"SVGFEMergeElement"},lt:{"^":"R;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},lu:{"^":"R;0n:x=,0p:y=","%":"SVGFEOffsetElement"},lv:{"^":"R;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lw:{"^":"R;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lx:{"^":"R;0n:x=,0p:y=","%":"SVGFESpotLightElement"},ly:{"^":"R;0n:x=,0p:y=","%":"SVGFETileElement"},lz:{"^":"R;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lC:{"^":"R;0n:x=,0p:y=","%":"SVGFilterElement"},lD:{"^":"be;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fM:{"^":"be;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},be:{"^":"R;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lI:{"^":"be;0n:x=,0p:y=","%":"SVGImageElement"},bS:{"^":"m;",$isbS:1,"%":"SVGLength"},lL:{"^":"jk;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$asu:function(){return[P.bS]},
$ise:1,
$ase:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
$asx:function(){return[P.bS]},
"%":"SVGLengthList"},lO:{"^":"R;0n:x=,0p:y=","%":"SVGMaskElement"},bT:{"^":"m;",$isbT:1,"%":"SVGNumber"},m0:{"^":"jv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$asu:function(){return[P.bT]},
$ise:1,
$ase:function(){return[P.bT]},
$isd:1,
$asd:function(){return[P.bT]},
$asx:function(){return[P.bT]},
"%":"SVGNumberList"},m2:{"^":"R;0n:x=,0p:y=","%":"SVGPatternElement"},m4:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},m5:{"^":"m;0l:length=","%":"SVGPointList"},m6:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},m7:{"^":"fM;0n:x=,0p:y=","%":"SVGRectElement"},me:{"^":"jK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$asu:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"SVGStringList"},R:{"^":"V;",
gbW:function(a){return new P.fI(a,new W.iV(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mf:{"^":"be;0n:x=,0p:y=","%":"SVGSVGElement"},i_:{"^":"be;","%":"SVGTextPathElement;SVGTextContentElement"},mh:{"^":"i_;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bV:{"^":"m;",$isbV:1,"%":"SVGTransform"},mn:{"^":"jU;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$asu:function(){return[P.bV]},
$ise:1,
$ase:function(){return[P.bV]},
$isd:1,
$asd:function(){return[P.bV]},
$asx:function(){return[P.bV]},
"%":"SVGTransformList"},mq:{"^":"be;0n:x=,0p:y=","%":"SVGUseElement"},jj:{"^":"m+u;"},jk:{"^":"jj+x;"},ju:{"^":"m+u;"},jv:{"^":"ju+x;"},jJ:{"^":"m+u;"},jK:{"^":"jJ+x;"},jT:{"^":"m+u;"},jU:{"^":"jT+x;"}}],["","",,P,{"^":"",kY:{"^":"m;0l:length=","%":"AudioBuffer"},kZ:{"^":"iU;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
F:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gas:function(a){var z=H.f([],[P.o])
this.F(a,new P.fb(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.o,null]},
$isa3:1,
$asa3:function(){return[P.o,null]},
"%":"AudioParamMap"},fb:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},l_:{"^":"a2;0l:length=","%":"AudioTrackList"},fd:{"^":"a2;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},m1:{"^":"fd;0l:length=","%":"OfflineAudioContext"},iU:{"^":"m+aa;"}}],["","",,P,{"^":"",cR:{"^":"m;",
dI:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.I(g)
if(!!y.$iscb&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.ki(g))
return}if(!!y.$iscC&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.i(P.f9("Incorrect number or type of arguments"))},
dH:function(a,b,c,d,e,f,g){return this.dI(a,b,c,d,e,f,g,null,null,null)},
$iscR:1,
"%":"WebGLRenderingContext"},i0:{"^":"m;",$isi0:1,"%":"WebGLTexture"},is:{"^":"m;",$isis:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mc:{"^":"jH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.N(b,a,null,null,null))
return P.aG(a.item(b))},
D:function(a,b){return this.k(a,b)},
$asu:function(){return[[P.a3,,,]]},
$ise:1,
$ase:function(){return[[P.a3,,,]]},
$isd:1,
$asd:function(){return[[P.a3,,,]]},
$asx:function(){return[[P.a3,,,]]},
"%":"SQLResultSetRowList"},jG:{"^":"m+u;"},jH:{"^":"jG+x;"}}],["","",,O,{"^":"",ag:{"^":"a;0a,0b,0c,0d,$ti",
b2:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cn:function(a,b,c){var z=H.aN(this,"ag",0)
H.b(b,{func:1,ret:P.a9,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.L,[P.e,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aN:function(a,b){return this.cn(a,null,b)},
cL:function(a){var z
H.w(a,"$ise",[H.aN(this,"ag",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cr:function(a,b){var z
H.w(b,"$ise",[H.aN(this,"ag",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.an(z,z.length,0,[H.y(z,0)])},
D:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aN(this,"ag",0)
H.C(b,z)
z=[z]
if(this.cL(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cr(x,H.f([b],z))}},
bM:function(a,b){var z,y
H.w(b,"$ise",[H.aN(this,"ag",0)],"$ase")
if(this.cL(b)){z=this.a
y=z.length
C.a.bM(z,b)
this.cr(y,b)}},
$ise:1,
t:{
cy:function(a){var z=new O.ag([a])
z.b2(a)
return z}}},cM:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gq:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
e0:function(a){var z=this.b
if(!(z==null))z.w(a)},
aw:function(){return this.e0(null)},
gT:function(a){var z=this.a
if(z.length>0)return C.a.gc8(z)
else return V.aJ()},
bo:function(a){var z=this.a
if(a==null)C.a.h(z,V.aJ())
else C.a.h(z,a)
this.aw()},
au:function(){var z=this.a
if(z.length>0){z.pop()
this.aw()}}}}],["","",,E,{"^":"",ct:{"^":"a;"},aA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbs:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gq()
y.toString
x=H.b(this.gdE(),{func:1,ret:-1,args:[D.l]})
C.a.N(y.a,x)}y=this.c
if(y!=null){y=y.gq()
y.toString
x=H.b(this.gdE(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.e_])
w.b=!0
this.aK(w)}},
a4:function(a,b){var z
for(z=this.y.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();)z.d.a4(0,b)},
a3:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gT(z))
z.aw()
a.ce(this.f)
z=a.dy
y=(z&&C.a).gc8(z)
if(y!=null&&this.d!=null)y.ci(a,this)
for(z=this.y.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();)z.d.a3(a)
a.cd()
a.dx.au()},
gq:function(){var z=this.z
if(z==null){z=D.B()
this.z=z}return z},
aK:function(a){var z=this.z
if(!(z==null))z.w(a)},
a7:function(){return this.aK(null)},
h8:[function(a){H.h(a,"$isl")
this.e=null
this.aK(a)},function(){return this.h8(null)},"ia","$1","$0","gdE",0,2,0],
h6:[function(a){this.aK(H.h(a,"$isl"))},function(){return this.h6(null)},"i8","$1","$0","gdD",0,2,0],
i7:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.aA],"$ase")
for(z=b.length,y=this.gdD(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.aS()
t.a=H.f([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a7()},"$2","gh5",8,0,7],
i9:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.aA],"$ase")
for(z=b.length,y=this.gdD(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.aS()
t.a=H.f([],w)
t.c=0
u.sa0(t)}t=u.ga0()
t.toString
H.b(y,x)
C.a.N(t.a,y)}}this.a7()},"$2","gh7",8,0,7],
$isaw:1,
t:{
dB:function(a,b,c,d,e,f){var z,y
z=new E.aA()
z.a=d
z.b=!0
y=O.cy(E.aA)
z.y=y
y.aN(z.gh5(),z.gh7())
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
z.sbs(0,e)
return z}}},hD:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e_:function(a,b){var z,y,x,w,v
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
z=new O.cM()
y=[V.at]
z.a=H.f([],y)
x=z.gq()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hF(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cM()
z.a=H.f([],y)
v=z.gq()
v.toString
x=H.b(new E.hG(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cM()
z.a=H.f([],y)
y=z.gq()
y.toString
w=H.b(new E.hH(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.bu])
this.dy=z
C.a.h(z,null)
this.fr=new H.cI(0,0,[P.o,A.cf])},
ghh:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gT(z)
y=this.db
y=z.i(0,y.gT(y))
this.z=y
z=y}return z},
gdF:function(){var z,y
z=this.ch
if(z==null){z=this.ghh()
y=this.dx
y=z.i(0,y.gT(y))
this.ch=y
z=y}return z},
ce:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc8(z):a;(z&&C.a).h(z,y)},
cd:function(){var z=this.dy
if(z.length>1)z.pop()},
bN:function(a){var z=a.b
if(z.length===0)throw H.i(P.q("May not cache a shader with no name."))
if(this.fr.fO(0,z))throw H.i(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a9(0,z,a)},
t:{
hE:function(a,b){var z=new E.hD(a,b)
z.e_(a,b)
return z}}},hF:{"^":"t:10;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hG:{"^":"t:10;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hH:{"^":"t:10;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},ib:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch",
gq:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
e2:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.w(a)
this.hl()},function(){return this.e2(null)},"e1","$1","$0","gcs",0,2,0],
gfU:function(){var z,y,x
z=Date.now()
y=C.f.a2(P.dA(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ao(z,!1)
return x/y},
cO:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.i()
if(typeof z!=="number")return H.p(z)
x=C.e.c5(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.i()
w=C.e.c5(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hl:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.id(this),{func:1,ret:-1,args:[P.T]})
C.t.ek(z)
C.t.f0(z,W.eR(y,P.T))}},
hk:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cO()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.dA(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.a3(this.e)}}catch(v){z=H.aQ(v)
y=H.b5(v)
P.dc("Error: "+H.j(z))
P.dc("Stack: "+H.j(y))
throw H.i(z)}},
t:{
ic:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscw)return E.e7(a,!0,!0,!0,!1)
y=W.cx(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbW(a).h(0,y)
w=E.e7(y,!0,!0,!0,!1)
w.a=a
return w},
e7:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ib()
y=P.h0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.br(a,"webgl",y)
x=H.h(x==null?C.k.br(a,"experimental-webgl",y):x,"$iscR")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hE(x,a)
w=new T.i5(x)
w.b=H.a_(x.getParameter(3379))
w.c=H.a_(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ix(a)
v=new X.fU()
v.c=new X.av(!1,!1,!1)
v.d=P.h1(null,null,null,P.L)
w.b=v
v=new X.hj(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.h4(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ig(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.e3,P.a]])
w.z=v
u=document
t=W.a5
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.W(u,"contextmenu",H.b(w.geC(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.b(w.geF(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.b(w.gez(),q),!1,r))
v=w.z
p=W.bg
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.b(w.geH(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.b(w.geG(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.b(w.geK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.b(w.geM(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.b(w.geL(),s),!1,t))
p=w.z
o=W.bB;(p&&C.a).h(p,W.W(a,H.U(W.fD(a)),H.b(w.geN(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.b(w.geD(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.b(w.geE(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.b(w.geO(),q),!1,r))
r=w.z
q=W.aX
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.b(w.geW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.b(w.geU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.b(w.geV(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ao(Date.now(),!1)
z.ch=0
z.cO()
return z}}},id:{"^":"t:27;a",
$1:function(a){var z
H.kE(a)
z=this.a
if(z.z){z.z=!1
z.hk()}}}}],["","",,Z,{"^":"",ev:{"^":"a;a,b",t:{
cY:function(a,b,c){var z
H.w(c,"$isd",[P.L],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bE(c)),35044)
a.bindBuffer(b,null)
return new Z.ev(b,z)}}},dj:{"^":"ct;a,b,c,d,e",
R:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aQ(y)
x=P.q('Failed to bind buffer attribute "'+J.am(this.a)+'": '+H.j(z))
throw H.i(x)}},
j:function(a){return"["+J.am(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},cX:{"^":"a;a",$isl0:1},c4:{"^":"a;a,0b,c,d",
ad:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
R:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].R(a)},
a8:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a3:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.k(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].j(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.am(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.Z(y,", ")+"\nAttrs:   "+C.a.Z(u,", ")},
$ismg:1},cc:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aV(this.c)+"'")+"]"}},aL:{"^":"a;a",
gco:function(a){var z,y
z=this.a
y=(z&$.$get$ae().a)!==0?3:0
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aq().a)!==0)y+=2
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$bz().a)!==0)y+=3
if((z&$.$get$bA().a)!==0)y+=4
if((z&$.$get$aY().a)!==0)++y
return(z&$.$get$aB().a)!==0?y+4:y},
fJ:function(a){var z,y,x
z=$.$get$ae()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aq()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bz()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eu()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aL))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.f([],[P.o])
y=this.a
if((y&$.$get$ae().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aq().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aE().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bz().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bA().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.Z(z,"|")},
t:{
ak:function(a){return new Z.aL(a)}}}}],["","",,D,{"^":"",dm:{"^":"a;"},aS:{"^":"a;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.F(y,new D.fG(z))
return x!==0},
d7:function(){return this.w(null)},
hm:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
av:function(a){return this.hm(a,!0,!1)},
t:{
B:function(){var z=new D.aS()
z.a=H.f([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fG:{"^":"t:42;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bN:{"^":"l;c,d,a,0b,$ti"},bO:{"^":"l;c,d,a,0b,$ti"},H:{"^":"l;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dk:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dk))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)},
t:{"^":"l1<"}},dJ:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.j(this.a)}},dK:{"^":"l;c,a,0b"},fU:{"^":"a;0a,0b,0c,0d",
he:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dK(a,this)
y.b=!0
return z.w(y)},
ha:function(a){var z,y
this.c=a.b
this.d.N(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dK(a,this)
y.b=!0
return z.w(y)}},dO:{"^":"ce;x,y,c,d,e,a,0b"},h4:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
an:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.i()
v=b.b
u=this.ch
if(typeof v!=="number")return v.i()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaD()
s=new X.bj(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cc:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.an(a,b))
return!0},
aV:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dR()
if(typeof z!=="number")return z.dL()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.an(a,b))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.an(a,b))
return!0},
hf:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.i()
t=a.b
s=this.cy
if(typeof t!=="number")return t.i()
w=new X.cN(new V.Q(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.w(w)
return!0},
eJ:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.dO(c,a,this.a.gaD(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.O(0,0)}},av:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.av))return!1
if(this.a!==b.a)return!1
z=this.b
y=b.b
if(z==null?y!=null:z!==y)return!1
z=this.c
y=b.c
if(z==null?y!=null:z!==y)return!1
return!0},
j:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bj:{"^":"ce;x,y,z,Q,ch,c,d,e,a,0b"},hj:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bB:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaD()
x=new X.bj(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cc:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bB(a,b,!0))
return!0},
aV:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dR()
if(typeof z!=="number")return z.dL()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bB(a,b,!0))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bB(a,b,!1))
return!0},
hg:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.i()
u=a.b
t=this.ch
if(typeof u!=="number")return u.i()
x=new X.cN(new V.Q(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.w(x)
return!0},
gd6:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
gbq:function(){var z=this.c
if(z==null){z=D.B()
this.c=z}return z},
gdC:function(){var z=this.d
if(z==null){z=D.B()
this.d=z}return z}},cN:{"^":"ce;x,c,d,e,a,0b"},ce:{"^":"l;"},e9:{"^":"ce;x,y,z,Q,ch,c,d,e,a,0b"},ig:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
an:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.O],"$asd")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaD()
w=new X.e9(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hd:function(a){var z
H.w(a,"$isd",[V.O],"$asd")
z=this.b
if(z==null)return!1
z.w(this.an(a,!0))
return!0},
hb:function(a){var z
H.w(a,"$isd",[V.O],"$asd")
z=this.c
if(z==null)return!1
z.w(this.an(a,!0))
return!0},
hc:function(a){var z
H.w(a,"$isd",[V.O],"$asd")
z=this.d
if(z==null)return!1
z.w(this.an(a,!1))
return!0}},ix:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaD:function(){var z=this.a
return V.cQ(0,0,(z&&C.k).gba(z).c,C.k.gba(z).d)},
cE:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dJ(z,new X.av(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.av(y,a.altKey,a.shiftKey)},
bL:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.av(y,a.altKey,a.shiftKey)},
ao:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=z.top
if(typeof x!=="number")return x.H()
return new V.O(y-w,x-v)},
aO:function(a){return new V.Q(a.movementX,a.movementY)},
bH:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.e.U(u.pageX)
C.e.U(u.pageY)
s=z.left
C.e.U(u.pageX)
C.a.h(y,new V.O(t-s,C.e.U(u.pageY)-z.top))}return y},
al:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dk(z,new X.av(y,a.altKey,a.shiftKey))},
hK:[function(a){this.f=!0},"$1","geF",4,0,4],
hE:[function(a){this.f=!1},"$1","gez",4,0,4],
hH:[function(a){if(this.f)a.preventDefault()},"$1","geC",4,0,4],
hM:[function(a){var z
H.h(a,"$isbg")
if(!this.f)return
z=this.cE(a)
if(this.b.he(z))a.preventDefault()},"$1","geH",4,0,17],
hL:[function(a){var z
H.h(a,"$isbg")
if(!this.f)return
z=this.cE(a)
if(this.b.ha(z))a.preventDefault()},"$1","geG",4,0,17],
hO:[function(a){var z,y,x,w
H.h(a,"$isa5")
z=this.a
z.focus()
this.f=!0
this.aC(a)
if(this.x){y=this.al(a)
x=this.aO(a)
if(this.d.cc(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.al(a)
w=this.ao(a)
if(this.c.cc(y,w))a.preventDefault()},"$1","geK",4,0,5],
hQ:[function(a){var z,y,x
H.h(a,"$isa5")
this.aC(a)
z=this.al(a)
if(this.x){y=this.aO(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aV(z,x))a.preventDefault()},"$1","geM",4,0,5],
hJ:[function(a){var z,y,x,w
H.h(a,"$isa5")
z=this.a
if(!(z&&C.k).gba(z).d2(0,new P.bl(a.clientX,a.clientY,[P.T]))){this.aC(a)
y=this.al(a)
if(this.x){x=this.aO(a)
if(this.d.aV(y,x))a.preventDefault()
return}if(this.r)return
w=this.ao(a)
if(this.c.aV(y,w))a.preventDefault()}},"$1","geE",4,0,5],
hP:[function(a){var z,y,x
H.h(a,"$isa5")
this.aC(a)
z=this.al(a)
if(this.x){y=this.aO(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","geL",4,0,5],
hI:[function(a){var z,y,x,w
H.h(a,"$isa5")
z=this.a
if(!(z&&C.k).gba(z).d2(0,new P.bl(a.clientX,a.clientY,[P.T]))){this.aC(a)
y=this.al(a)
if(this.x){x=this.aO(a)
if(this.d.aU(y,x))a.preventDefault()
return}if(this.r)return
w=this.ao(a)
if(this.c.aU(y,w))a.preventDefault()}},"$1","geD",4,0,5],
hR:[function(a){var z,y
H.h(a,"$isbB")
this.aC(a)
z=new V.Q((a&&C.r).gfQ(a),C.r.gfR(a)).v(0,180)
if(this.x){if(this.d.hf(z))a.preventDefault()
return}if(this.r)return
y=this.ao(a)
if(this.c.hg(z,y))a.preventDefault()},"$1","geN",4,0,29],
hS:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.al(this.y)
v=this.ao(this.y)
this.d.eJ(w,v,x)}},"$1","geO",4,0,4],
i_:[function(a){var z
H.h(a,"$isaX")
this.a.focus()
this.f=!0
this.bL(a)
z=this.bH(a)
if(this.e.hd(z))a.preventDefault()},"$1","geW",4,0,11],
hY:[function(a){var z
H.h(a,"$isaX")
this.bL(a)
z=this.bH(a)
if(this.e.hb(z))a.preventDefault()},"$1","geU",4,0,11],
hZ:[function(a){var z
H.h(a,"$isaX")
this.bL(a)
z=this.bH(a)
if(this.e.hc(z))a.preventDefault()},"$1","geV",4,0,11]}}],["","",,D,{"^":"",c8:{"^":"a;0a,0b,0c,0d",
gq:function(){var z=this.d
if(z==null){z=D.B()
this.d=z}return z},
ax:[function(a){var z
H.h(a,"$isl")
z=this.d
if(!(z==null))z.w(a)},function(){return this.ax(null)},"hu","$1","$0","ge3",0,2,0],
$isY:1,
$isaw:1},Y:{"^":"a;",$isaw:1},fV:{"^":"ag;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gq:function(){var z=this.Q
if(z==null){z=D.B()
this.Q=z}return z},
ax:function(a){var z=this.Q
if(!(z==null))z.w(a)},
eI:[function(a){var z
H.h(a,"$isl")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.eI(null)},"hN","$1","$0","gcK",0,2,0],
hT:[function(a){var z,y,x
H.w(a,"$ise",[D.Y],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.ef(x))return!1}return!0},"$1","geP",4,0,31],
hB:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Y
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcK(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isY")
if(t instanceof D.c8)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aS()
s.a=H.f([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bN(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","gew",8,0,18],
hV:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Y
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcK(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isY")
if(t instanceof D.c8)C.a.N(this.e,t)
s=t.d
if(s==null){s=new D.aS()
s.a=H.f([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.N(s.a,x)}z=new D.bO(a,b,this,[z])
z.b=!0
this.ax(z)},"$2","geR",8,0,18],
ef:function(a){var z=C.a.aR(this.e,a)
return z},
$ase:function(){return[D.Y]},
$asag:function(){return[D.Y]}},ht:{"^":"a;",$isY:1,$isaw:1},hU:{"^":"a;",$isY:1,$isaw:1},i8:{"^":"a;",$isY:1,$isaw:1},i9:{"^":"a;",$isY:1,$isaw:1},ia:{"^":"a;",$isY:1,$isaw:1}}],["","",,V,{"^":"",
l3:[function(a,b){if(typeof b!=="number")return b.H()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hg",8,0,32],
kT:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.dQ(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.j.at("null",c)
return C.j.at(C.e.dK($.n.$2(a,0)?0:a,b),c+b+1)},
b3:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isd",[P.v],"$asd")
z=H.f([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.a9(z,u,C.j.at(z[u],x))}return z},
bK:function(a,b){return C.e.hr(Math.pow(b,C.x.c5(Math.log(H.kf(a))/Math.log(b))))},
X:{"^":"a;a,b,c",
i:function(a,b){var z,y,x
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
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
as:{"^":"a;a,b,c,d",
i:function(a,b){var z,y,x,w
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
return new V.as(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
bh:{"^":"a;a,b,c,d,e,f,r,x,y",
Y:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
i:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a5,"$isbh")
z=this.a
y=a5.a
if(typeof z!=="number")return z.i()
x=C.e.i(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.i()
u=C.e.i(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.i()
r=C.e.i(t,s)
q=a5.b
p=C.e.i(z,q)
o=a5.e
n=C.e.i(w,o)
m=a5.x
l=C.e.i(t,m)
k=a5.c
z=C.e.i(z,k)
j=a5.f
w=C.e.i(w,j)
i=a5.y
t=C.e.i(t,i)
h=this.d
if(typeof h!=="number")return h.i()
g=C.e.i(h,y)
f=this.e
if(typeof f!=="number")return f.i()
e=C.e.i(f,v)
d=this.f
if(typeof d!=="number")return d.i()
c=C.e.i(d,s)
b=C.e.i(h,q)
a=C.e.i(f,o)
a0=C.e.i(d,m)
h=C.e.i(h,k)
f=C.e.i(f,j)
d=C.e.i(d,i)
a1=this.r
if(typeof a1!=="number")return a1.i()
y=C.e.i(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.i()
v=C.e.i(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.i()
return new V.bh(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.i(a3,s),C.e.i(a1,q)+C.e.i(a2,o)+C.e.i(a3,m),C.e.i(a1,k)+C.e.i(a2,j)+C.e.i(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bh))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
return!0},
j:function(a){var z,y,x,w,v,u,t,s
z=[P.v]
y=V.b3(H.f([this.a,this.d,this.r],z),3,0)
x=V.b3(H.f([this.b,this.e,this.x],z),3,0)
w=V.b3(H.f([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.k(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.k(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.k(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.k(y,1)
s=" "+y[1]+", "
if(1>=u)return H.k(x,1)
s=s+x[1]+", "
if(1>=t)return H.k(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.k(y,2)
z=" "+y[2]+", "
if(2>=u)return H.k(x,2)
z=z+x[2]+", "
if(2>=t)return H.k(w,2)
return s+(z+w[2]+"]")}},
at:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
Y:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
c7:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.i()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.i()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.i()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.i()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.i()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.aJ()
a3=1/a2
a4=-w
a5=-i
return V.au((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
i:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isat")
z=this.a
y=a7.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.i()
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
if(typeof f!=="number")return f.i()
e=this.f
if(typeof e!=="number")return e.i()
d=this.r
if(typeof d!=="number")return d.i()
c=this.x
if(typeof c!=="number")return c.i()
b=this.y
if(typeof b!=="number")return b.i()
a=this.z
if(typeof a!=="number")return a.i()
a0=this.Q
if(typeof a0!=="number")return a0.i()
a1=this.ch
if(typeof a1!=="number")return a1.i()
a2=this.cx
if(typeof a2!=="number")return a2.i()
a3=this.cy
if(typeof a3!=="number")return a3.i()
a4=this.db
if(typeof a4!=="number")return a4.i()
a5=this.dx
if(typeof a5!=="number")return a5.i()
return V.au(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ck:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
t=this.e
if(typeof t!=="number")return t.i()
s=this.f
if(typeof s!=="number")return s.i()
r=this.r
if(typeof r!=="number")return r.i()
q=this.y
if(typeof q!=="number")return q.i()
p=this.z
if(typeof p!=="number")return p.i()
o=this.Q
if(typeof o!=="number")return o.i()
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
t=this.d
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.i()
r=this.f
if(typeof r!=="number")return r.i()
q=this.r
if(typeof q!=="number")return q.i()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.i()
n=this.z
if(typeof n!=="number")return n.i()
m=this.Q
if(typeof m!=="number")return m.i()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.Z(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
z=b.z
if(!$.n.$2(z,this.z))return!1
z=b.Q
if(!$.n.$2(z,this.Q))return!1
z=b.ch
if(!$.n.$2(z,this.ch))return!1
z=b.cx
if(!$.n.$2(z,this.cx))return!1
z=b.cy
if(!$.n.$2(z,this.cy))return!1
z=b.db
if(!$.n.$2(z,this.db))return!1
z=b.dx
if(!$.n.$2(z,this.dx))return!1
return!0},
j:function(a){return this.L()},
dv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b3(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b3(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b3(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b3(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.k(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.k(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.k(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.k(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.k(y,1)
q=q+y[1]+", "
if(1>=t)return H.k(x,1)
q=q+x[1]+", "
if(1>=s)return H.k(w,1)
q=q+w[1]+", "
if(1>=r)return H.k(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.k(y,2)
u=u+y[2]+", "
if(2>=t)return H.k(x,2)
u=u+x[2]+", "
if(2>=s)return H.k(w,2)
u=u+w[2]+", "
if(2>=r)return H.k(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.k(y,3)
q=q+y[3]+", "
if(3>=t)return H.k(x,3)
q=q+x[3]+", "
if(3>=s)return H.k(w,3)
q=q+w[3]+", "
if(3>=r)return H.k(v,3)
return u+(q+v[3]+"]")},
C:function(a){return this.dv(a,3,0)},
L:function(){return this.dv("",3,0)},
t:{
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aJ:function(){return V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dS:function(a,b,c,d){return V.au(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
dR:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.B(c)))
y=b.aq(z)
x=y.v(0,Math.sqrt(y.B(y)))
w=z.aq(x)
v=new V.G(a.a,a.b,a.c)
return V.au(x.a,w.a,z.a,x.I(0).B(v),x.b,w.b,z.b,w.I(0).B(v),x.c,w.c,z.c,z.I(0).B(v),0,0,0,1)}}},
O:{"^":"a;n:a>,p:b>",
H:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
i:function(a,b){return new V.O(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
Z:{"^":"a;n:a>,p:b>,c",
G:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bm:{"^":"a;n:a>,p:b>,c,d",
i:function(a,b){return new V.bm(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bm))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
dZ:{"^":"a;n:a>,p:b>,c,d",
ga6:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dZ))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
t:{
cQ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dZ(a,b,c,d)}}},
Q:{"^":"a;a,b",
fY:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,16],
B:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
i:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.i()
y=this.b
if(typeof y!=="number")return y.i()
return new V.Q(z*b,y*b)},
v:function(a,b){var z,y
if($.n.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.Q(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
fY:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,16],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aq:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a){return new V.G(-this.a,-this.b,-this.c)},
i:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.n.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dA:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fl:{"^":"dm;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bw:function(a){var z=V.kT(a,this.c,this.b)
return z},
gq:function(){var z=this.y
if(z==null){z=D.B()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.w(a)},
scl:function(a,b){},
sc9:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bw(z)}z=new D.H("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.K(z)}},
scb:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bw(z)}z=new D.H("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.K(z)}},
sa5:function(a,b){var z,y
b=this.bw(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.v])
z.b=!0
this.K(z)}},
sca:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.K(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.v])
z.b=!0
this.K(z)}},
sbX:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.v])
z.b=!0
this.K(z)}},
a4:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa5(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
t:{
cz:function(){var z=new U.fl()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dp:{"^":"ab;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
aM:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dp))return!1
return J.M(this.a,b.a)},
j:function(a){return"Constant: "+this.a.C("          ")},
t:{
dq:function(a){var z=new U.dp()
z.a=a
return z}}},dE:{"^":"ag;0e,0f,0r,0a,0b,0c,0d",
gq:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
K:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.K(null)},"ac","$1","$0","gaB",0,2,0],
hA:[function(a,b){var z,y,x,w,v,u,t
z=U.ab
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.K(z)},"$2","gev",8,0,19],
hU:[function(a,b){var z,y,x,w,v,u,t
z=U.ab
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.N(t.a,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geQ",8,0,19],
aM:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ae()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.an(z,z.length,0,[H.y(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aM(0,b,c)
if(w!=null)x=x==null?w:w.i(0,x)}}this.f=x==null?V.aJ():x
z=this.e
if(!(z==null))z.av(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dE))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.M(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ase:function(){return[U.ab]},
$asag:function(){return[U.ab]},
$isab:1},ab:{"^":"dm;"},iy:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gq:function(){var z=this.cy
if(z==null){z=D.B()
this.cy=z}return z},
K:[function(a){var z
H.h(a,"$isl")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.K(null)},"ac","$1","$0","gaB",0,2,0],
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd6()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbC(),y)
C.a.h(z.a,x)
x=this.a.c.gdC()
x.toString
z=H.b(this.gbD(),y)
C.a.h(x.a,z)
z=this.a.c.gbq()
z.toString
y=H.b(this.gbE(),y)
C.a.h(z.a,y)
return!0},
eq:[function(a){H.h(a,"$isl")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbC",4,0,1],
er:[function(a){var z,y,x,w,v,u,t
a=H.c(H.h(a,"$isl"),"$isbj")
if(!this.y)return
if(this.x){z=a.d.H(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.H(0,a.y)
z=new V.Q(y.a,y.b).i(0,2).v(0,z.ga6())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.i()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=new V.Q(x.a,x.b).i(0,2).v(0,z.ga6())
x=this.b
v=w.a
if(typeof v!=="number")return v.I()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa5(0,-v*u+t)
this.b.sM(0)
y=y.H(0,a.z)
this.Q=new V.Q(y.a,y.b).i(0,2).v(0,z.ga6())}this.ac()},"$1","gbD",4,0,1],
es:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.i()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sM(y*10*x)
this.ac()}},"$1","gbE",4,0,1],
aM:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ae()
if(z<y){this.ch=y
x=b.y
this.b.a4(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.au(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isab:1},iz:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gq:function(){var z=this.fx
if(z==null){z=D.B()
this.fx=z}return z},
K:[function(a){var z
H.h(a,"$isl")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.K(null)},"ac","$1","$0","gaB",0,2,0],
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd6()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbC(),y)
C.a.h(z.a,x)
x=this.a.c.gdC()
x.toString
z=H.b(this.gbD(),y)
C.a.h(x.a,z)
z=this.a.c.gbq()
z.toString
x=H.b(this.gbE(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.B()
x.f=z}x=H.b(this.gen(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.B()
x.d=z}x=H.b(this.geo(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.B()
x.b=z}x=H.b(this.gff(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.B()
x.d=z}x=H.b(this.gfe(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.B()
x.c=z}y=H.b(this.gfd(),y)
C.a.h(z.a,y)
return!0},
af:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.I()
z=-z}if(this.r){if(typeof y!=="number")return y.I()
y=-y}return new V.Q(z,y)},
eq:[function(a){a=H.c(H.h(a,"$isl"),"$isbj")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbC",4,0,1],
er:[function(a){var z,y,x,w,v,u,t
a=H.c(H.h(a,"$isl"),"$isbj")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.af(new V.Q(y.a,y.b).i(0,2).v(0,z.ga6()))
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
x=y.H(0,a.y)
w=this.af(new V.Q(x.a,x.b).i(0,2).v(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa5(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa5(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.H(0,a.z)
this.dx=this.af(new V.Q(y.a,y.b).i(0,2).v(0,z.ga6()))}this.ac()},"$1","gbD",4,0,1],
es:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
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
this.ac()}},"$1","gbE",4,0,1],
hx:[function(a){if(H.c(H.h(a,"$isl"),"$isdO").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gen",4,0,1],
hy:[function(a){var z,y,x,w,v,u,t
a=H.c(H.h(a,"$isl"),"$isbj")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.H(0,a.y)
w=this.af(new V.Q(x.a,x.b).i(0,2).v(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa5(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa5(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.H(0,a.z)
this.dx=this.af(new V.Q(y.a,y.b).i(0,2).v(0,z.ga6()))
this.ac()},"$1","geo",4,0,1],
i3:[function(a){H.h(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gff",4,0,1],
i2:[function(a){var z,y,x,w,v,u,t
a=H.c(H.h(a,"$isl"),"$ise9")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.af(new V.Q(y.a,y.b).i(0,2).v(0,z.ga6()))
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
x=y.H(0,a.y)
w=this.af(new V.Q(x.a,x.b).i(0,2).v(0,z.ga6()))
x=this.c
v=w.a
if(typeof v!=="number")return v.I()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa5(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.I()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa5(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.H(0,a.z)
this.dx=this.af(new V.Q(y.a,y.b).i(0,2).v(0,z.ga6()))}this.ac()},"$1","gfe",4,0,1],
i1:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
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
this.ac()}},"$1","gfd",4,0,1],
aM:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ae()
if(z<y){this.dy=y
x=b.y
this.c.a4(0,x)
this.b.a4(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.au(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.i(0,V.au(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isab:1},iA:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gq:function(){var z=this.r
if(z==null){z=D.B()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.w(a)},
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.B()
z.e=y
z=y}else z=y
y=H.b(this.geu(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.B()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hz:[function(a){var z,y,x,w
H.h(a,"$isl")
if(!J.M(this.b,this.a.b.c))return
H.c(a,"$iscN")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.i()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.v])
z.b=!0
this.K(z)}},"$1","geu",4,0,1],
aM:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.dS(x,x,x,1)}return this.f},
$isab:1}}],["","",,M,{"^":"",fm:{"^":"ag;0e,0f,0a,0b,0c,0d",
gq:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
V:[function(a){var z
H.h(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.V(null)},"ct","$1","$0","gP",0,2,0],
hW:[function(a,b){var z,y,x,w,v,u,t
z=M.ax
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geS",8,0,21],
hX:[function(a,b){var z,y,x,w,v,u,t
z=M.ax
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.N(t.a,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geT",8,0,21],
a3:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
if(!(y==null))y.a3(a)}this.e=!1},
$ase:function(){return[M.ax]},
$asag:function(){return[M.ax]},
$isax:1},fo:{"^":"a;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
V:[function(a){var z
H.h(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.V(null)},"ct","$1","$0","gP",0,2,0],
saQ:function(a){var z,y,x
if(a==null)a=new X.fN()
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.H("camera",x,this.a,this,[X.c5])
z.b=!0
this.V(z)}},
saY:function(a,b){var z,y,x
if(b==null)b=X.dD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.H("target",x,this.b,this,[X.cg])
z.b=!0
this.V(z)}},
saL:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.bu])
z.b=!0
this.V(z)}},
a3:function(a){var z
a.ce(this.c)
this.b.R(a)
this.a.R(a)
z=this.c
if(z!=null)z.a4(0,a)
this.d.a4(0,a)
this.d.a3(a)
this.a.a8(a)
this.b.a8(a)
a.cd()},
$isax:1,
t:{
dr:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.fo()
z.saQ(a)
z.saY(0,b)
z.saL(c)
y=E.dB(null,!0,null,"",null,null)
x=F.e0()
w=x.a
v=new V.G(-1,-1,1)
v=v.v(0,Math.sqrt(v.B(v)))
u=w.b8(new V.bm(1,2,4,6),new V.as(1,0,0,1),new V.Z(-1,-1,0),new V.O(0,1),v,null)
w=x.a
v=new V.G(1,-1,1)
v=v.v(0,Math.sqrt(v.B(v)))
t=w.b8(new V.bm(0,3,4,6),new V.as(0,0,1,1),new V.Z(1,-1,0),new V.O(1,1),v,null)
w=x.a
v=new V.G(1,1,1)
v=v.v(0,Math.sqrt(v.B(v)))
s=w.b8(new V.bm(0,2,5,6),new V.as(0,1,0,1),new V.Z(1,1,0),new V.O(1,0),v,null)
w=x.a
v=new V.G(-1,1,1)
v=v.v(0,Math.sqrt(v.B(v)))
r=w.b8(new V.bm(0,2,4,7),new V.as(1,1,0,1),new V.Z(-1,1,0),new V.O(0,0),v,null)
x.d.fG(H.f([u,t,s,r],[F.aj]))
x.ap()
y.sbs(0,x)
z.d=y
z.e=null
return z}}},fE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
V:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.w(a)},function(){return this.V(null)},"ct","$1","$0","gP",0,2,0],
hF:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aA
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.aS()
s.a=H.f([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geA",8,0,7],
hG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aA
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.aS()
s.a=H.f([],v)
s.c=0
t.sa0(s)}s=t.ga0()
s.toString
H.b(x,w)
C.a.N(s.a,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geB",8,0,7],
saQ:function(a){var z,y,x
if(a==null)a=X.dV(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.H("camera",x,this.a,this,[X.c5])
z.b=!0
this.V(z)}},
saY:function(a,b){var z,y,x
if(b==null)b=X.dD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.H("target",x,this.b,this,[X.cg])
z.b=!0
this.V(z)}},
saL:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.bu])
z.b=!0
this.V(z)}},
gq:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
a3:function(a){var z
a.ce(this.c)
this.b.R(a)
this.a.R(a)
z=this.c
if(z!=null)z.a4(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();)z.d.a4(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();)z.d.a3(a)
this.a.toString
a.cy.au()
a.db.au()
this.b.a8(a)
a.cd()},
$isax:1},ax:{"^":"a;"}}],["","",,A,{"^":"",dg:{"^":"a;a,b,c"},fa:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
bZ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dz:{"^":"cf;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,a,b,0c,0d,0e,0f,0r",
a1:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dS(c)
b.a.uniform1i(b.d,0)}}},dQ:{"^":"cf;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aH,0ar,0aI,0bb,0d8,0d9,0bc,0bd,0da,0dc,0be,0bf,0dd,0de,0bg,0df,0dg,0bh,0dh,0di,0bi,0bj,0bk,0dj,0dk,0bl,0bm,0dl,0dm,0bn,0dn,0c_,0dq,0c0,0dr,0c1,0ds,0c2,0dt,0c3,0du,0c4,a,b,0c,0d,0e,0f,0r",
dZ:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bU("")
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
a1.fi(z)
a1.fp(z)
a1.fj(z)
a1.fA(z)
a1.fB(z)
a1.fs(z)
a1.fF(z)
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
v=this.x
z=new P.bU("")
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
v.fm(z)
v.fh(z)
v.fk(z)
v.fn(z)
v.fw(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fu(z)
v.fv(z)}v.fq(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
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
case C.h:r+="   return alpha;\n"
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
p=H.f([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.Z(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fl(z)
v.ft(z)
v.fz(z)
v.fC(z)
v.fD(z)
v.fE(z)
v.fo(z)}r=z.a+="// === Main ===\n"
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
o=H.f([],[P.o])
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
n="vec4("+C.a.Z(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c6(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a1.fr)this.fy=H.c(this.r.m(0,"invViewMat"),"$isai")
if(y)this.db=H.c(this.r.m(0,"objMat"),"$isai")
if(w)this.dx=H.c(this.r.m(0,"viewObjMat"),"$isai")
this.fr=H.c(this.r.m(0,"projViewObjMat"),"$isai")
if(a1.x2)this.go=H.c(this.r.m(0,"txt2DMat"),"$isbW")
if(a1.y1)this.id=H.c(this.r.m(0,"txtCubeMat"),"$isai")
if(a1.y2)this.k1=H.c(this.r.m(0,"colorMat"),"$isai")
this.k3=H.f([],[A.ai])
y=a1.aH
if(y>0){this.k2=H.h(this.r.m(0,"bendMatCount"),"$isE")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.c(l,"$isai"))}}y=a1.a
if(y!==C.b){this.k4=H.c(this.r.m(0,"emissionClr"),"$isF")
switch(y){case C.b:break
case C.h:break
case C.c:this.r1=H.c(this.r.m(0,"emissionTxt"),"$isa8")
this.rx=H.c(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.d:this.r2=H.c(this.r.m(0,"emissionTxt"),"$isac")
this.rx=H.c(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a1.b
if(y!==C.b){this.ry=H.c(this.r.m(0,"ambientClr"),"$isF")
switch(y){case C.b:break
case C.h:break
case C.c:this.x1=H.c(this.r.m(0,"ambientTxt"),"$isa8")
this.y1=H.c(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.d:this.x2=H.c(this.r.m(0,"ambientTxt"),"$isac")
this.y1=H.c(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a1.c
if(y!==C.b){this.y2=H.c(this.r.m(0,"diffuseClr"),"$isF")
switch(y){case C.b:break
case C.h:break
case C.c:this.aH=H.c(this.r.m(0,"diffuseTxt"),"$isa8")
this.aI=H.c(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.d:this.ar=H.c(this.r.m(0,"diffuseTxt"),"$isac")
this.aI=H.c(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a1.d
if(y!==C.b){this.bb=H.c(this.r.m(0,"invDiffuseClr"),"$isF")
switch(y){case C.b:break
case C.h:break
case C.c:this.d8=H.c(this.r.m(0,"invDiffuseTxt"),"$isa8")
this.bc=H.c(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.d:this.d9=H.c(this.r.m(0,"invDiffuseTxt"),"$isac")
this.bc=H.c(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a1.e
if(y!==C.b){this.bf=H.c(this.r.m(0,"shininess"),"$isS")
this.bd=H.c(this.r.m(0,"specularClr"),"$isF")
switch(y){case C.b:break
case C.h:break
case C.c:this.da=H.c(this.r.m(0,"specularTxt"),"$isa8")
this.be=H.c(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.d:this.dc=H.c(this.r.m(0,"specularTxt"),"$isac")
this.be=H.c(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a1.f){case C.b:break
case C.h:break
case C.c:this.dd=H.c(this.r.m(0,"bumpTxt"),"$isa8")
this.bg=H.c(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.d:this.de=H.c(this.r.m(0,"bumpTxt"),"$isac")
this.bg=H.c(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a1.dy){this.df=H.c(this.r.m(0,"envSampler"),"$isac")
this.dg=H.c(this.r.m(0,"nullEnvTxt"),"$isE")
y=a1.r
if(y!==C.b){this.bh=H.c(this.r.m(0,"reflectClr"),"$isF")
switch(y){case C.b:break
case C.h:break
case C.c:this.dh=H.c(this.r.m(0,"reflectTxt"),"$isa8")
this.bi=H.c(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.d:this.di=H.c(this.r.m(0,"reflectTxt"),"$isac")
this.bi=H.c(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a1.x
if(y!==C.b){this.bj=H.c(this.r.m(0,"refraction"),"$isS")
this.bk=H.c(this.r.m(0,"refractClr"),"$isF")
switch(y){case C.b:break
case C.h:break
case C.c:this.dj=H.c(this.r.m(0,"refractTxt"),"$isa8")
this.bl=H.c(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.d:this.dk=H.c(this.r.m(0,"refractTxt"),"$isac")
this.bl=H.c(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a1.y
if(y!==C.b){this.bm=H.c(this.r.m(0,"alpha"),"$isS")
switch(y){case C.b:break
case C.h:break
case C.c:this.dl=H.c(this.r.m(0,"alphaTxt"),"$isa8")
this.bn=H.c(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.d:this.dm=H.c(this.r.m(0,"alphaTxt"),"$isac")
this.bn=H.c(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.c_=H.f([],[A.el])
this.c0=H.f([],[A.em])
this.c1=H.f([],[A.en])
this.c2=H.f([],[A.eo])
this.c3=H.f([],[A.ep])
this.c4=H.f([],[A.eq])
if(a1.k2){y=a1.z
if(y>0){this.dn=H.h(this.r.m(0,"dirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isF")
x=this.r
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isF")
x=this.c_;(x&&C.a).h(x,new A.el(m,l,k))}}y=a1.Q
if(y>0){this.dq=H.h(this.r.m(0,"pntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isF")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isF")
x=this.r
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isF")
x=this.r
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isS")
x=this.r
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isS")
x=this.r
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isS")
x=this.c0;(x&&C.a).h(x,new A.em(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dr=H.h(this.r.m(0,"spotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isF")
x=this.r
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isF")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isF")
x=this.r
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isF")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isS")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isS")
x=this.r
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isS")
x=this.r
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isS")
x=this.r
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isS")
x=this.c1;(x&&C.a).h(x,new A.en(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ds=H.h(this.r.m(0,"txtDirLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isF")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isF")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isF")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isF")
x=this.r
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isF")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isE")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isa8")
x=this.c2;(x&&C.a).h(x,new A.eo(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dt=H.h(this.r.m(0,"txtPntLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isF")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isF")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isbW")
x=this.r
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isF")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isE")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isS")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isS")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isS")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isac")
x=this.c3;(x&&C.a).h(x,new A.ep(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.du=H.h(this.r.m(0,"txtSpotLightCount"),"$isE")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isF")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isF")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isF")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isF")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isF")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isE")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isF")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isS")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isS")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(c,"$isS")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(b,"$isS")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a,"$isS")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a0,"$isa8")
x=this.c4;(x&&C.a).h(x,new A.eq(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
a1:function(a,b,c){b.a.uniform1i(b.d,1)},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
ha:function(a,b){var z,y
z=a.ar
y=new A.dQ(b,z)
y.bu(b,z)
y.dZ(a,b)
return y}}},hd:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aH,ar,aI",
fi:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aH+"];\n"
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
fp:function(a){var z
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
fj:function(a){var z
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
fA:function(a){var z,y
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
fB:function(a){var z,y
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
fs:function(a){var z
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
fF:function(a){var z
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
am:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.j.cp(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fm:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.am(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   return emissionClr;\n"
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
fh:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.am(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   return ambientClr;\n"
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
fk:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.am(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
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
fn:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.am(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
fw:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.am(a,z,"specular")
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
case C.h:z=y+"   specularColor = specularClr;\n"
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
fq:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.h:break
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
case C.h:z+="   return normalize(normalVec);\n"
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
fu:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.am(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
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
fv:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.am(a,z,"refract")
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
case C.h:z=y+"   vec3 scalar = refractClr;\n"
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
fl:function(a){var z,y
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
ft:function(a){var z,y
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
fz:function(a){var z,y
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
fC:function(a){var z,y,x
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
fD:function(a){var z,y,x
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
fE:function(a){var z,y,x
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
fo:function(a){var z
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
j:function(a){return this.ar}},el:{"^":"a;a,b,c"},eo:{"^":"a;a,b,c,d,e,f,r,x"},em:{"^":"a;a,b,c,d,e,f,r"},ep:{"^":"a;a,b,c,d,e,f,r,x,y,z"},en:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eq:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cf:{"^":"ct;",
bu:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
c6:function(a,b,c){var z,y,x
this.c=this.cF(b,35633)
this.d=this.cF(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.eV(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f9()
this.fa()},
R:function(a){a.a.useProgram(this.e)
this.f.fS()},
cF:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eV(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.i(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f9:function(){var z,y,x,w,v,u
z=H.f([],[A.dg])
y=this.a
x=H.a_(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dg(y,v.name,u))}this.f=new A.fa(z)},
fa:function(){var z,y,x,w,v,u
z=H.f([],[A.a4])
y=this.a
x=H.a_(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fP(v.type,v.size,v.name,u))}this.r=new A.ir(z)},
az:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.cW(z,y,b,a,c)},
eh:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a8(z,y,b,c)
else return A.cW(z,y,b,a,c)},
ei:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ac(z,y,b,c)
else return A.cW(z,y,b,a,c)},
b7:function(a,b){return new P.ex(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fP:function(a,b,c,d){switch(a){case 5120:return this.az(b,c,d)
case 5121:return this.az(b,c,d)
case 5122:return this.az(b,c,d)
case 5123:return this.az(b,c,d)
case 5124:return this.az(b,c,d)
case 5125:return this.az(b,c,d)
case 5126:return new A.S(this.a,this.e,c,d)
case 35664:return new A.il(this.a,this.e,c,d)
case 35665:return new A.F(this.a,this.e,c,d)
case 35666:return new A.ip(this.a,this.e,c,d)
case 35667:return new A.im(this.a,this.e,c,d)
case 35668:return new A.io(this.a,this.e,c,d)
case 35669:return new A.iq(this.a,this.e,c,d)
case 35674:return new A.it(this.a,this.e,c,d)
case 35675:return new A.bW(this.a,this.e,c,d)
case 35676:return new A.ai(this.a,this.e,c,d)
case 35678:return this.eh(b,c,d)
case 35680:return this.ei(b,c,d)
case 35670:throw H.i(this.b7("BOOL",c))
case 35671:throw H.i(this.b7("BOOL_VEC2",c))
case 35672:throw H.i(this.b7("BOOL_VEC3",c))
case 35673:throw H.i(this.b7("BOOL_VEC4",c))
default:throw H.i(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c6:{"^":"a;a,b",
j:function(a){return this.b}},e1:{"^":"cf;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a4:{"^":"a;"},ir:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.i(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.L()},
fT:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].j(0)+a
return x},
L:function(){return this.fT("\n")}},E:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform1i: "+H.j(this.c)}},im:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform2i: "+H.j(this.c)}},io:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform3i: "+H.j(this.c)}},iq:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform4i: "+H.j(this.c)}},ik:{"^":"a4;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
cW:function(a,b,c,d,e){var z=new A.ik(a,b,c,e)
z.f=d
z.e=P.h3(d,0,!1,P.L)
return z}}},S:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform1f: "+H.j(this.c)}},il:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform2f: "+H.j(this.c)}},F:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform3f: "+H.j(this.c)}},ip:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform4f: "+H.j(this.c)}},it:{"^":"a4;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.j(this.c)}},bW:{"^":"a4;a,b,c,d",
a_:function(a){var z=new Float32Array(H.bE(H.w(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.j(this.c)}},ai:{"^":"a4;a,b,c,d",
a_:function(a){var z=new Float32Array(H.bE(H.w(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.j(this.c)}},a8:{"^":"a4;a,b,c,d",
dS:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSampler2D: "+H.j(this.c)}},ac:{"^":"a4;a,b,c,d",
dT:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
kQ:function(a,b,c,d){return F.kk(c,a,d,b,new F.kR())},
kk:function(a,b,c,d,e){var z=F.kO(a,b,new F.kl(H.b(e,{func:1,ret:V.Z,args:[P.v]}),d,b,c),null)
if(z==null)return
z.ap()
z.h4(new F.iG(),new F.hn())
return z},
kO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aj,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.e0()
y=H.f([],[F.aj])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cj(null,null,new V.as(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.d3(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cj(null,null,new V.as(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.d3(d))}}z.d.fH(a+1,b+1,y)
return z},
kR:{"^":"t:33;",
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)}},
kl:{"^":"t:34;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dd(y.$1(z),x)
x=J.dd(y.$1(z+3.141592653589793/this.c),x).H(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.B(x)))
u=new V.G(1,0,0)
y=v.aq(!v.u(0,u)?new V.G(0,0,1):u)
t=y.v(0,Math.sqrt(y.B(y)))
y=t.aq(v)
u=y.v(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.i(0,y*x)
x=t.i(0,r*x)
x=w.G(0,new V.Z(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.M(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a7()}}},
ah:{"^":"a;0a,0b,0c,0d,0e",
aS:function(){if(!this.gd5()){C.a.N(this.a.a.d.b,this)
this.a.a.a7()}this.eY()
this.eZ()
this.f_()},
f6:function(a){this.a=a
C.a.h(a.d.b,this)},
f7:function(a){this.b=a
C.a.h(a.d.c,this)},
f8:function(a){this.c=a
C.a.h(a.d.d,this)},
eY:function(){var z=this.a
if(z!=null){C.a.N(z.d.b,this)
this.a=null}},
eZ:function(){var z=this.b
if(z!=null){C.a.N(z.d.c,this)
this.b=null}},
f_:function(){var z=this.c
if(z!=null){C.a.N(z.d.d,this)
this.c=null}},
gd5:function(){return this.a==null||this.b==null||this.c==null},
ea:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.dA())return
return v.v(0,Math.sqrt(v.B(v)))},
ec:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.H(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.B(z)))
z=w.H(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aq(z.v(0,Math.sqrt(z.B(z))))
return z.v(0,Math.sqrt(z.B(z)))},
bV:function(){if(this.d!=null)return!0
var z=this.ea()
if(z==null){z=this.ec()
if(z==null)return!1}this.d=z
this.a.a.a7()
return!0},
e9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.dA())return
return v.v(0,Math.sqrt(v.B(v)))},
eb:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.H(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.I(0)}else{l=(z-q.b)/n
z=r.H(0,u).i(0,l).G(0,u).H(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.I(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.B(z)))
z=k.aq(m)
z=z.v(0,Math.sqrt(z.B(z))).aq(k)
m=z.v(0,Math.sqrt(z.B(z)))}return m},
bT:function(){if(this.e!=null)return!0
var z=this.e9()
if(z==null){z=this.eb()
if(z==null)return!1}this.e=z
this.a.a.a7()
return!0},
gfM:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.L()},
C:function(a){var z,y
if(this.gd5())return a+"disposed"
z=a+C.j.at(J.am(this.a.e),0)+", "+C.j.at(J.am(this.b.e),0)+", "+C.j.at(J.am(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
L:function(){return this.C("")},
t:{
bM:function(a,b,c){var z,y,x
z=new F.ah()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.f6(a)
z.f7(b)
z.f8(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a7()
return z}}},
fH:{"^":"a;"},
hQ:{"^":"fH;",
aT:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dL:{"^":"a;"},
fW:{"^":"a;"},
ij:{"^":"fW;",
aT:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dX:{"^":"a;"},
e_:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
ap:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ap()||!1
if(!this.a.ap())y=!1
z=this.e
if(!(z==null))z.av(0)
return y},
el:function(a,b,c,d,e){var z,y,x
H.w(d,"$isd",[F.aj],"$asd")
H.w(e,"$isd",[P.L],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.k(y,z)
x=y[z]
if(a.aT(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
h4:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.aj],x=[P.L];y>=0;--y){w=this.a.c
if(y>=w.length)return H.k(w,y)
v=w[y]
u=H.f([],z)
t=H.f([],x)
if(this.el(a,v,y,u,t))b.h3(u)}this.a.A()
this.c.cf()
this.d.cf()
this.b.hj()
this.c.cg(new F.ij())
this.d.cg(new F.hQ())
z=this.e
if(!(z==null))z.av(0)},
bS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ae()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aq().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$bz().a)!==0)++w
if((x&$.$get$bA().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
v=b.gco(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.dj])
for(r=0,q=0;q<w;++q){p=b.fJ(q)
o=p.gco(p)
C.a.a9(s,q,new Z.dj(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].fZ(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a9(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bE(t)),35044)
y.bindBuffer(34962,null)
i=new Z.c4(new Z.ev(34962,j),s,b)
i.b=H.f([],[Z.cc])
if(this.b.b.length!==0){x=P.L
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.cY(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cc(0,h.length,f))}if(this.c.b.length!==0){x=P.L
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.cY(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cc(1,h.length,f))}if(this.d.b.length!==0){x=P.L
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.cY(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cc(4,h.length,f))}return i},
j:function(a){var z=H.f([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.Z(z,"\n")},
aK:function(a){var z=this.e
if(!(z==null))z.w(a)},
a7:function(){return this.aK(null)},
t:{
e0:function(){var z,y
z=new F.e_()
y=new F.iB(z)
y.b=!1
y.c=H.f([],[F.aj])
z.a=y
y=new F.hP(z)
y.b=H.f([],[F.dX])
z.b=y
y=new F.hO(z)
y.b=H.f([],[F.dL])
z.c=y
y=new F.hN(z)
y.b=H.f([],[F.ah])
z.d=y
z.e=null
return z}}},
hN:{"^":"a;a,0b",
fG:function(a){var z,y,x,w,v
H.w(a,"$isd",[F.aj],"$asd")
z=H.f([],[F.ah])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bM(y,w,v))}return z},
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isd",[F.aj],"$asd")
z=H.f([],[F.ah])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.k(c,x)
r=c[x];++x
if(x>=s)return H.k(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.k(c,p)
o=c[p]
if(y<0||y>=s)return H.k(c,y)
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
cg:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.k(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aT(0,v,t)){v.aS()
break}}}}},
cf:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.k(y,z)
x=y[z]
y=x.gfM(x)
if(y)x.aS()}},
ap:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bV())x=!1
return x},
bU:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bT())x=!1
return x},
j:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.Z(z,"\n")},
L:function(){return this.C("")}},
hO:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cg:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.k(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aT(0,v,t)){v.aS()
break}}}}},
cf:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.k(y,z)
x=y[z]
y=J.M(x.a,x.b)
if(y)x.aS()}},
j:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.Z(z,"\n")},
L:function(){return this.C("")}},
hP:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hj:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.k(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aS()}},
j:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.Z(z,"\n")},
L:function(){return this.C("")}},
aj:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
d3:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cj(this.cx,x,u,z,y,w,v,a,t)},
fZ:function(a){var z,y
z=J.I(a)
if(z.u(a,$.$get$ae())){z=this.f
y=[P.v]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aD())){z=this.r
y=[P.v]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aC())){z=this.x
y=[P.v]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aq())){z=this.y
y=[P.v]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.u(a,$.$get$aE())){z=this.z
y=[P.v]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bz())){z=this.Q
y=[P.v]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bA())){z=this.Q
y=[P.v]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$aY()))return H.f([this.ch],[P.v])
else if(z.u(a,$.$get$aB())){z=this.cx
y=[P.v]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.v])},
bV:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.F(0,new F.iL(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a7()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
bT:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.F(0,new F.iK(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a7()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.L()},
C:function(a){var z,y,x
z=H.f([],[P.o])
C.a.h(z,C.j.at(J.am(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.x
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.y
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.z
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.Z(z,", ")
return a+"{"+x+"}"},
L:function(){return this.C("")},
t:{
cj:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aj()
y=new F.iJ(z)
y.b=H.f([],[F.dX])
z.b=y
y=new F.iF(z)
x=[F.dL]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.iC(z)
x=[F.ah]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$es()
z.e=0
y=$.$get$ae()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aD().a)!==0?e:null
z.x=(x&$.$get$aC().a)!==0?b:null
z.y=(x&$.$get$aq().a)!==0?f:null
z.z=(x&$.$get$aE().a)!==0?g:null
z.Q=(x&$.$get$et().a)!==0?c:null
z.ch=(x&$.$get$aY().a)!==0?i:0
z.cx=(x&$.$get$aB().a)!==0?a:null
return z}}},
iL:{"^":"t:8;a",
$1:function(a){var z,y
H.h(a,"$isah")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
iK:{"^":"t:8;a",
$1:function(a){var z,y
H.h(a,"$isah")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
iB:{"^":"a;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.k(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.i(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a7()
return!0},
fI:function(a,b,c,d,e,f,g,h,i){var z=F.cj(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b8:function(a,b,c,d,e,f){return this.fI(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ap:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bV()
return!0},
bU:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bT()
return!0},
fL:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
j:function(a){return this.L()},
C:function(a){var z,y,x,w
this.A()
z=H.f([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.Z(z,"\n")},
L:function(){return this.C("")}},
iC:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.k(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.k(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
F:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ah]})
C.a.F(this.b,b)
C.a.F(this.c,new F.iD(this,b))
C.a.F(this.d,new F.iE(this,b))},
j:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.Z(z,"\n")},
L:function(){return this.C("")}},
iD:{"^":"t:8;a,b",
$1:function(a){H.h(a,"$isah")
if(!J.M(a.a,this.a))this.b.$1(a)}},
iE:{"^":"t:8;a,b",
$1:function(a){var z
H.h(a,"$isah")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
iF:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.k(z,x)
return z[x]}else{if(b<0)return H.k(z,b)
return z[b]}},
j:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.Z(z,"\n")},
L:function(){return this.C("")}},
iH:{"^":"a;"},
iG:{"^":"iH;",
aT:function(a,b,c){return J.M(b.f,c.f)}},
iI:{"^":"a;"},
hn:{"^":"iI;",
h3:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isd",[F.aj],"$asd")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.B(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.v(0,Math.sqrt(u))
if(!J.M(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.w(null)}}}return}},
iJ:{"^":"a;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.L()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.Z(z,"\n")},
L:function(){return this.C("")}}}],["","",,O,{"^":"",fv:{"^":"bu;0a,0b,0c,0d,0e,0f,0r",
gq:function(){var z=this.r
if(z==null){z=D.B()
this.r=z}return z},
W:function(a){var z=this.r
if(!(z==null))z.w(a)},
aj:function(){return this.W(null)},
sd1:function(a){var z=this.b
if(z==null?a!=null:z!==a){this.b=a
this.aj()}},
sd0:function(a){var z=this.c
if(z==null?a!=null:z!==a){this.c=a
this.aj()}},
sd_:function(a){var z=a==null?V.aJ():a
this.f=z
if(!z.u(0,a)){this.f=a
this.aj()}},
a4:function(a,b){},
J:function(a,b){H.w(a,"$isd",[T.bx],"$asd")
if(b!=null)if(!C.a.aR(a,b)){b.a=a.length
C.a.h(a,b)}},
ci:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.h(a.fr.k(0,"Distort"),"$isdz")
if(z==null){y=a.a
z=new A.dz(y,"Distort")
z.bu(y,"Distort")
z.c6(0,$.fx,$.fw)
z.x=z.f.k(0,"posAttr")
z.y=z.f.k(0,"txt2DAttr")
z.z=H.c(z.r.m(0,"projViewObjMat"),"$isai")
z.Q=H.c(z.r.m(0,"colorTxt2DMat"),"$isbW")
z.ch=H.c(z.r.m(0,"bumpTxt2DMat"),"$isbW")
z.cx=H.c(z.r.m(0,"colorTxt"),"$isa8")
z.cy=H.c(z.r.m(0,"bumpTxt"),"$isa8")
z.db=H.c(z.r.m(0,"nullColorTxt"),"$isE")
z.dx=H.c(z.r.m(0,"nullBumpTxt"),"$isE")
z.dy=H.c(z.r.m(0,"bumpMat"),"$isai")
a.bN(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$ae()
v=$.$get$aq()
v=y.bS(new Z.cX(x),new Z.aL(w.a|v.a))
v.ad($.$get$ae()).e=this.a.x.c
v.ad($.$get$aq()).e=this.a.y.c
b.e=v}u=H.f([],[T.bx])
this.J(u,this.b)
this.J(u,this.c)
for(t=0;t<u.length;++t){y=u[t]
if(!y.c&&y.d){y.c=!0
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,y.b)}}y=this.a
y.R(a)
x=this.b
y.a1(y.cx,y.db,x)
x=this.c
y.a1(y.cy,y.dx,x)
x=a.gdF()
w=y.z
w.toString
w.a_(x.Y(0,!0))
x=this.d
w=y.Q
w.toString
w.a_(x.Y(0,!0))
x=this.e
w=y.ch
w.toString
w.a_(x.Y(0,!0))
x=this.f
y=y.dy
y.toString
y.a_(x.Y(0,!0))
y=b.e
if(y instanceof Z.c4){y.R(a)
y.a3(a)
y.a8(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.bZ()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},h9:{"^":"bu;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gq:function(){var z=this.dy
if(z==null){z=D.B()
this.dy=z}return z},
W:[function(a){var z
H.h(a,"$isl")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.W(null)},"aj","$1","$0","gbv",0,2,0],
f2:[function(a){H.h(a,"$isl")
this.a=null
this.W(a)},function(){return this.f2(null)},"i0","$1","$0","gf1",0,2,0],
hC:[function(a,b){var z=V.at
z=new D.bN(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.W(z)},"$2","gex",8,0,13],
hD:[function(a,b){var z=V.at
z=new D.bO(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.W(z)},"$2","gey",8,0,13],
cD:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a2(z.e.length+3,4)*4
x=C.f.a2(z.f.length+3,4)*4
w=C.f.a2(z.r.length+3,4)*4
v=C.f.a2(z.x.length+3,4)*4
u=C.f.a2(z.y.length+3,4)*4
t=C.f.a2(z.z.length+3,4)*4
s=C.f.a2(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.f.j(q.a)+C.f.j(p.a)+C.f.j(o.a)+C.f.j(n.a)+C.f.j(m.a)+C.f.j(l.a)+C.f.j(k.a)+C.f.j(j.a)+C.f.j(i.a)+"_"
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
a6=$.$get$ae()
if(c){z=$.$get$aD()
a6=new Z.aL(a6.a|z.a)}if(b){z=$.$get$aC()
a6=new Z.aL(a6.a|z.a)}if(a){z=$.$get$aq()
a6=new Z.aL(a6.a|z.a)}if(a0){z=$.$get$aE()
a6=new Z.aL(a6.a|z.a)}if(a2){z=$.$get$aB()
a6=new Z.aL(a6.a|z.a)}return new A.hd(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
J:function(a,b){H.w(a,"$isd",[T.bx],"$asd")},
a4:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ck(x)}}},
ci:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cD()
y=H.h(a.fr.k(0,z.ar),"$isdQ")
if(y==null){y=A.ha(z,a.a)
a.bN(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aI
z=b.e
if(!(z instanceof Z.c4)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ap()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bU()
u.a.bU()
u=u.e
if(!(u==null))u.av(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fL()
t=t.e
if(!(t==null))t.av(0)}r=b.d.bS(new Z.cX(a.a),w)
r.ad($.$get$ae()).e=this.a.y.c
if(z)r.ad($.$get$aD()).e=this.a.Q.c
if(v)r.ad($.$get$aC()).e=this.a.z.c
if(x.rx)r.ad($.$get$aq()).e=this.a.ch.c
if(u)r.ad($.$get$aE()).e=this.a.cx.c
if(x.x1)r.ad($.$get$aB()).e=this.a.cy.c
b.e=r}z=T.bx
q=H.f([],[z])
this.a.R(a)
if(x.fx){v=this.a
u=a.dx
u=u.gT(u)
v=v.db
v.toString
v.a_(u.Y(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gT(u)
t=a.dx
t=u.i(0,t.gT(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a_(u.Y(0,!0))}v=this.a
u=a.gdF()
v=v.fr
v.toString
v.a_(u.Y(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a_(u.Y(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a_(u.Y(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a_(C.y.Y(u,!0))}if(x.aH>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.k(t,o)
t=t[o]
u.toString
H.h(t,"$isat")
u=u.k3
if(o>=u.length)return H.k(u,o)
u=u[o]
n=new Float32Array(H.bE(H.w(t.Y(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.h:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.J(q,this.f.d)
v=this.a
u=this.f.d
v.a1(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.J(q,this.f.e)
v=this.a
u=this.f.e
v.aa(v.r2,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.h:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.J(q,this.r.d)
v=this.a
u=this.r.d
v.a1(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.J(q,this.r.e)
v=this.a
u=this.r.e
v.aa(v.x2,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.h:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.J(q,this.x.d)
v=this.a
u=this.x.d
v.a1(v.aH,v.aI,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.J(q,this.x.e)
v=this.a
u=this.x.e
v.aa(v.ar,v.aI,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.h:v=this.a
u=this.y.f
v=v.bb
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.J(q,this.y.d)
v=this.a
u=this.y.d
v.a1(v.d8,v.bc,u)
u=this.a
v=this.y.f
u=u.bb
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.J(q,this.y.e)
v=this.a
u=this.y.e
v.aa(v.d9,v.bc,u)
u=this.a
v=this.y.f
u=u.bb
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.h:v=this.a
u=this.z.f
v=v.bd
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bf
u.a.uniform1f(u.d,s)
break
case C.c:this.J(q,this.z.d)
v=this.a
u=this.z.d
v.a1(v.da,v.be,u)
u=this.a
v=this.z.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bf
v.a.uniform1f(v.d,s)
break
case C.d:this.J(q,this.z.e)
v=this.a
u=this.z.e
v.aa(v.dc,v.be,u)
u=this.a
v=this.z.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bf
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dn
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c_
if(l>=t.length)return H.k(t,l)
i=t[l]
t=m.ck(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dq
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c0
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gaW(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcm(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b0(j.gaW(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gag(j)
g=i.d
h=t.gbp()
s=t.gb1()
t=t.gb9()
g.a.uniform3f(g.d,h,s,t)
t=j.gbO()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbP()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbQ()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dr
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c1
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gaW(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcm(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbY(j).i6()
g=i.c
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=m.b0(j.gaW(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gag(j)
s=i.e
h=t.gbp()
g=t.gb1()
t=t.gb9()
s.a.uniform3f(s.d,h,g,t)
t=j.gi5()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gi4()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbO()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.c2
if(l>=s.length)return H.k(s,l)
i=s[l]
s=j.gaZ()
H.w(q,"$isd",t,"$asd")
if(!C.a.aR(q,s)){s.sdw(0,q.length)
C.a.h(q,s)}s=j.gbY(j)
h=i.d
g=s.gaE(s)
f=s.gaF(s)
s=s.gaG()
h.a.uniform3f(h.d,g,f,s)
s=j.gbq()
f=i.b
g=s.gaE(s)
h=s.gaF(s)
s=s.gaG()
f.a.uniform3f(f.d,g,h,s)
s=j.gaX(j)
h=i.c
g=s.gaE(s)
f=s.gaF(s)
s=s.gaG()
h.a.uniform3f(h.d,g,f,s)
s=m.ck(j.gbY(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gag(j)
g=i.f
f=h.gbp()
s=h.gb1()
h=h.gb9()
g.a.uniform3f(g.d,f,s,h)
h=j.gaZ()
s=h.gdB(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcJ()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gcI())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.c3
if(l>=h.length)return H.k(h,l)
i=h[l]
h=j.gaZ()
H.w(q,"$isd",s,"$asd")
if(!C.a.aR(q,h)){h.sdw(0,q.length)
C.a.h(q,h)}e=m.i(0,j.gT(j))
h=j.gT(j).b0(new V.Z(0,0,0))
g=i.b
f=h.gn(h)
d=h.gp(h)
h=h.gcm(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b0(new V.Z(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.c7(0)
d=i.d
n=new Float32Array(H.bE(H.w(new V.bh(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).Y(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gag(j)
h=i.e
f=d.gbp()
g=d.gb1()
d=d.gb9()
h.a.uniform3f(h.d,f,g,d)
d=j.gaZ()
h=d.gdB(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcJ()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gcI())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbO()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbP()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbQ()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c4
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gaZ()
H.w(q,"$isd",z,"$asd")
if(!C.a.aR(q,t)){t.sdw(0,q.length)
C.a.h(q,t)}t=j.gaW(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcm(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbY(j)
g=i.c
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=j.gbq()
s=i.d
h=t.gaE(t)
g=t.gaF(t)
t=t.gaG()
s.a.uniform3f(s.d,h,g,t)
t=j.gaX(j)
g=i.e
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=m.b0(j.gaW(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaZ()
s=t.gdB(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcJ()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gcI())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gag(j)
s=i.y
h=t.gbp()
g=t.gb1()
t=t.gb9()
s.a.uniform3f(s.d,h,g,t)
t=j.gib()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gic()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbO()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.h:break
case C.c:this.J(q,this.Q.d)
z=this.a
v=this.Q.d
z.a1(z.dd,z.bg,v)
break
case C.d:this.J(q,this.Q.e)
z=this.a
v=this.Q.e
z.aa(z.de,z.bg,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gT(v).c7(0)
a.Q=v}z=z.fy
z.toString
z.a_(v.Y(0,!0))}if(x.dy){this.J(q,this.ch)
z=this.a
v=this.ch
z.aa(z.df,z.dg,v)
switch(x.r){case C.b:break
case C.h:z=this.a
v=this.cx.f
z=z.bh
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.J(q,this.cx.d)
z=this.a
v=this.cx.d
z.a1(z.dh,z.bi,v)
v=this.a
z=this.cx.f
v=v.bh
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.J(q,this.cx.e)
z=this.a
v=this.cx.e
z.aa(z.di,z.bi,v)
v=this.a
z=this.cx.f
v=v.bh
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.h:z=this.a
v=this.cy.f
z=z.bk
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bj
v.a.uniform1f(v.d,t)
break
case C.c:this.J(q,this.cy.d)
z=this.a
v=this.cy.d
z.a1(z.dj,z.bl,v)
v=this.a
z=this.cy.f
v=v.bk
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bj
z.a.uniform1f(z.d,t)
break
case C.d:this.J(q,this.cy.e)
z=this.a
v=this.cy.e
z.aa(z.dk,z.bl,v)
v=this.a
z=this.cy.f
v=v.bk
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bj
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.h:z=this.a
u=this.db.f
z=z.bm
z.a.uniform1f(z.d,u)
break
case C.c:this.J(q,this.db.d)
z=this.a
u=this.db.d
z.a1(z.dl,z.bn,u)
u=this.a
z=this.db.f
u=u.bm
u.a.uniform1f(u.d,z)
break
case C.d:this.J(q,this.db.e)
z=this.a
u=this.db.e
z.aa(z.dm,z.bn,u)
u=this.a
z=this.db.f
u=u.bm
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].R(a)
z=b.e
z.R(a)
z.a3(a)
z.a8(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].a8(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.bZ()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cD().ar}},hb:{"^":"cL;0f,a,b,0c,0d,0e"},cL:{"^":"a;",
b5:["dX",function(){}]},hc:{"^":"cL;a,b,0c,0d,0e"},aU:{"^":"cL;0f,a,b,0c,0d,0e",
cQ:function(a){var z,y
if(!J.M(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.X])
y.b=!0
this.a.W(y)}},
b5:["bt",function(){this.dX()
this.cQ(new V.X(1,1,1))}],
sag:function(a,b){var z
if(this.c===C.b){this.c=C.h
this.b5()
z=this.a
z.a=null
z.W(null)}this.cQ(b)}},he:{"^":"aU;0ch,0f,a,b,0c,0d,0e",
f5:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.W(z)}},
b5:function(){this.bt()
this.f5(1)}},hf:{"^":"aU;0ch,0f,a,b,0c,0d,0e",
bJ:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.W(z)}},
b5:function(){this.bt()
this.bJ(100)}},hR:{"^":"bu;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
W:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.W(null)},"aj","$1","$0","gbv",0,2,0],
a4:function(a,b){},
ci:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.k(0,"Skybox"),"$ise1")
if(z==null){y=a.a
z=new A.e1(y,"Skybox")
z.bu(y,"Skybox")
z.c6(0,$.hT,$.hS)
z.x=z.f.k(0,"posAttr")
z.y=H.c(z.r.k(0,"fov"),"$isS")
z.z=H.c(z.r.k(0,"ratio"),"$isS")
z.Q=H.c(z.r.k(0,"boxClr"),"$isF")
z.ch=H.c(z.r.k(0,"boxTxt"),"$isac")
z.cx=H.c(z.r.k(0,"viewMat"),"$isai")
a.bN(z)}this.a=z}if(b.e==null){y=b.d.bS(new Z.cX(a.a),$.$get$ae())
y.ad($.$get$ae()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.R(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.dT(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gT(x).c7(0)
w=w.cx
w.toString
w.a_(x.Y(0,!0))
y=b.e
if(y instanceof Z.c4){y.R(a)
y.a3(a)
y.a8(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.bZ()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bu:{"^":"a;"}}],["","",,T,{"^":"",bx:{"^":"ct;"},i1:{"^":"bx;0b,0c,0d,0e,0f,0r,0x,0y,a",
cR:function(){if(!this.d){this.d=!0
this.y.d7()}},
t:{
cU:function(a,b){var z=new T.i1(a)
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
z.y=D.B()
return z}}},e6:{"^":"bx;0b,0c,0d,0e,a"},i5:{"^":"a;a,0b,0c,0d,0e",
h1:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.cD(null,a,null)
w=T.cU(0,y)
z=W.a1
W.W(x,"load",H.b(new T.i7(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
h0:function(a){return this.h1(a,!1,!1,!1,!1)},
aA:function(a,b,c,d,e,f){var z,y
z=W.cD(null,c,null);++this.d
y=W.a1
W.W(z,"load",H.b(new T.i6(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
cP:function(a,b,c){var z,y,x,w
b=V.bK(b,2)
z=V.bK(a.width,2)
y=V.bK(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cx(null,null)
x.width=z
x.height=y
w=H.h(C.k.dO(x,"2d"),"$isdl")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kj(w.getImageData(0,0,x.width,x.height))}}},i7:{"^":"t:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.cP(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.l.dH(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
z.cR();++x.e}},i6:{"^":"t:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.cP(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.l.dH(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.d7();++z.e}}}],["","",,X,{"^":"",fc:{"^":"cg;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gq:function(){var z=this.db
if(z==null){z=D.B()
this.db=z}return z},
ak:function(a){var z=this.db
if(!(z==null))z.w(a)},
R:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f==null){z=a.a
y=this.y
x=this.a
w=this.b
v=H.a_(z.getParameter(3379))
u=V.bK(x,2)
t=V.bK(w,2)
v=V.bK(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.l.dI(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.cU(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
r.cR()
y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=this.y
x=y.b
this.r=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.x=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.f=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.r,0)
z.framebufferRenderbuffer(36160,36096,36161,this.x)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.f)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.cy
y=z.c
a.c=C.f.U(y*this.a)
x=z.d
a.d=C.f.U(x*this.b)
w=this.c
if(typeof w!=="number")return H.p(w)
q=C.f.U(z.a*w)
p=this.d
if(typeof p!=="number")return H.p(p)
o=C.f.U(z.b*p)
n=C.f.U(y*w)
m=C.f.U(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.ch)
if(this.Q){z=a.a
y=this.z
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
a8:function(a){a.a.bindFramebuffer(36160,null)}},c5:{"^":"a;",$isaw:1},fL:{"^":"cg;0a,0b,0c,0d,0e,0f,0r,0x",
gq:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
R:function(a){var z,y,x,w,v,u,t
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.f.U(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.f.U(w.b*x)
t=C.f.U(w.c*y)
a.c=t
w=C.f.U(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
a8:function(a){},
t:{
dD:function(a,b,c,d,e,f,g){var z,y
z=new X.fL()
y=new V.as(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.cQ(0,0,1,1)
z.r=y
return z}}},fN:{"^":"a;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
R:function(a){var z
a.cy.bo(V.aJ())
z=V.aJ()
a.db.bo(z)},
a8:function(a){a.cy.au()
a.db.au()},
$isaw:1,
$isc5:1},hr:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
ak:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.ak(null)},"hv","$1","$0","ge6",0,2,0],
R:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bo(V.au(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.dW
if(z==null){z=V.dR(new V.Z(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.dW=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aM(0,a,this)
if(q!=null)r=q.i(0,r)}a.db.bo(r)},
a8:function(a){a.cy.au()
a.db.au()},
$isaw:1,
$isc5:1,
t:{
dV:function(a,b,c,d){var z,y,x,w
z=new X.hr()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gq()
x.toString
w=H.b(z.ge6(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.H("mover",y,z.a,z,[U.ab])
x.b=!0
z.ak(x)}x=z.b
if(!$.n.$2(x,b)){y=z.b
z.b=b
x=new D.H("fov",y,b,z,[P.v])
x.b=!0
z.ak(x)}x=z.c
if(!$.n.$2(x,d)){y=z.c
z.c=d
x=new D.H("near",y,d,z,[P.v])
x.b=!0
z.ak(x)}x=z.d
if(!$.n.$2(x,a)){y=z.d
z.d=a
x=new D.H("far",y,a,z,[P.v])
x.b=!0
z.ak(x)}return z}}},cg:{"^":"a;"}}],["","",,B,{"^":"",
kI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.n.f4(x,(x&&C.n).cw(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a1
W.W(z,"scroll",H.b(new B.kJ(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
kK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isd",[P.o],"$asd")
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
u=W.cx(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.h(v.insertCell(-1),"$isbt")
x=c.length>0
s=x?4:3
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.h(q.insertCell(-1),"$isbt").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;p<1;++p){o=z.createElement("div")
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.h(q.insertCell(-1),"$isbt")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.h(q.insertCell(-1),"$isbt")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.h(q.insertCell(-1),"$isbt").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.kI(a,y,!1,"../resources/SnowTop.png")},
kL:function(a){P.ie(C.v,new B.kM(a))},
kJ:{"^":"t:12;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.j(-0.05*C.e.U(this.b.scrollTop))+"px"
z.top=y}},
kM:{"^":"t:37;a",
$1:function(a){H.h(a,"$isaW")
P.dc(C.e.dK(this.a.gfU(),2)+" fps")}},
i2:{"^":"a;0a,b",
cW:function(a,b,c){var z,y
z=W.cD(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=W.a5
W.W(z,"click",H.b(new B.i4(this,z,b),{func:1,ret:-1,args:[y]}),!1,y)
J.cs(this.a).h(0,z)
J.cs(this.a).h(0,document.createElement("br"))
if(c)z.click()},
h:function(a,b){return this.cW(a,b,!1)}},
i4:{"^":"t:38;a,b,c",
$1:function(a){var z,y
H.h(a,"$isa5")
z=this.a
y=J.cs(z.a)
y.F(y,new B.i3())
y=this.b.style
y.border="solid 2px black"
z.b.$1(this.c)}},
i3:{"^":"t:39;",
$1:function(a){var z
H.h(a,"$isV")
if(!!J.I(a).$iscC){z=a.style
z.border="solid 2px white"}}}}],["","",,X,{"^":"",
f0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
B.kK("Test 029",H.f(["bumpMaps"],[P.o]),"Test of bump distort pass. It renders the scene to a back buffer then paints that back buffer texture to the front buffer with a distortion.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.r(P.q("Failed to find an element with the identifier, threeDart."))
x=E.ic(y,!0,!0,!0,!1)
w=new U.dE()
v=U.ab
w.b2(v)
w.aN(w.gev(),w.geQ())
w.e=null
w.f=V.aJ()
w.r=0
u=x.r
t=new U.iz()
s=U.cz()
s.scl(0,!0)
s.sc9(6.283185307179586)
s.scb(0)
s.sa5(0,0)
s.sca(100)
s.sM(0)
s.sbX(0.5)
t.b=s
s=s.gq()
s.toString
r={func:1,ret:-1,args:[D.l]}
q=H.b(t.gaB(),r)
C.a.h(s.a,q)
s=U.cz()
s.scl(0,!0)
s.sc9(6.283185307179586)
s.scb(0)
s.sa5(0,0)
s.sca(100)
s.sM(0)
s.sbX(0.5)
t.c=s
C.a.h(s.gq().a,q)
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
p=new X.av(!1,!1,!1)
o=t.d
t.d=p
s=[X.av]
q=new D.H("modifiers",o,p,t,s)
q.b=!0
t.K(q)
q=t.f
if(q!==!1){t.f=!1
q=new D.H("invertX",q,!1,t,[P.a9])
q.b=!0
t.K(q)}q=t.r
if(q!==!1){t.r=!1
q=new D.H("invertY",q,!1,t,[P.a9])
q.b=!0
t.K(q)}t.aP(u)
w.h(0,t)
u=x.r
t=new U.iy()
q=U.cz()
q.scl(0,!0)
q.sc9(6.283185307179586)
q.scb(0)
q.sa5(0,0)
q.sca(100)
q.sM(0)
q.sbX(0.2)
t.b=q
q=q.gq()
q.toString
n=H.b(t.gaB(),r)
C.a.h(q.a,n)
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
p=new X.av(!0,!1,!1)
o=t.c
t.c=p
q=new D.H("modifiers",o,p,t,s)
q.b=!0
t.K(q)
t.aP(u)
w.h(0,t)
u=x.r
t=new U.iA()
t.c=0.01
t.d=0
t.e=0
p=new X.av(!1,!1,!1)
t.b=p
s=new D.H("modifiers",null,p,t,s)
s.b=!0
t.K(s)
t.aP(u)
w.h(0,t)
w.h(0,U.dq(V.au(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=X.dV(2000,1.0471975511965976,w,0.1)
l=new X.fc()
l.a=800
l.b=600
l.c=800
l.d=600
l.e=!0
l.y=T.cU(0,null)
l.z=new V.as(0,0,0,1)
l.Q=!0
l.ch=2000
l.cx=!0
l.cy=V.cQ(0,0,1,1)
l.Q=!1
u=new D.H("clearColor",!0,!1,l,[P.a9])
u.b=!0
l.ak(u)
k=E.dB(null,!0,null,"",null,null)
k.sbs(0,F.kQ(30,1,15,0.5))
j=new O.h9()
u=O.cy(V.at)
j.e=u
u.aN(j.gex(),j.gey())
u=new O.aU(j,"emission")
u.c=C.b
u.f=new V.X(0,0,0)
j.f=u
u=new O.aU(j,"ambient")
u.c=C.b
u.f=new V.X(0,0,0)
j.r=u
u=new O.aU(j,"diffuse")
u.c=C.b
u.f=new V.X(0,0,0)
j.x=u
u=new O.aU(j,"invDiffuse")
u.c=C.b
u.f=new V.X(0,0,0)
j.y=u
u=new O.hf(j,"specular")
u.c=C.b
u.f=new V.X(0,0,0)
u.ch=100
j.z=u
u=new O.hc(j,"bump")
u.c=C.b
j.Q=u
j.ch=null
u=new O.aU(j,"reflect")
u.c=C.b
u.f=new V.X(0,0,0)
j.cx=u
u=new O.he(j,"refract")
u.c=C.b
u.f=new V.X(0,0,0)
u.ch=1
j.cy=u
u=new O.hb(j,"alpha")
u.c=C.b
u.f=1
j.db=u
u=new D.fV()
u.b2(D.Y)
u.e=H.f([],[D.c8])
u.f=H.f([],[D.ht])
u.r=H.f([],[D.hU])
u.x=H.f([],[D.i8])
u.y=H.f([],[D.i9])
u.z=H.f([],[D.ia])
u.Q=null
u.ch=null
u.cn(u.gew(),u.geP(),u.geR())
j.dx=u
t=u.Q
if(t==null){t=D.B()
u.Q=t
u=t}else u=t
t=H.b(j.gf1(),r)
C.a.h(u.a,t)
t=j.dx
u=t.ch
if(u==null){u=D.B()
t.ch=u}t=H.b(j.gbv(),r)
C.a.h(u.a,t)
j.dy=null
t=j.dx
u=U.dq(V.dR(new V.Z(0,0,0),new V.G(0,1,0),new V.G(0,-1,-1)))
i=new V.X(1,1,1)
s=new D.c8()
s.c=new V.X(1,1,1)
s.a=new V.G(0,0,1)
o=s.b
s.b=u
u=u.gq()
u.toString
q=H.b(s.ge3(),r)
C.a.h(u.a,q)
v=new D.H("mover",o,s.b,s,[v])
v.b=!0
s.ax(v)
if(!s.c.u(0,i)){o=s.c
s.c=i
v=new D.H("color",o,i,s,[V.X])
v.b=!0
s.ax(v)}t.h(0,s)
v=j.r
v.sag(0,new V.X(0,0,1))
v=j.x
v.sag(0,new V.X(0,1,0))
v=j.z
v.sag(0,new V.X(1,0,0))
v=j.z
if(v.c===C.b){v.c=C.h
v.bt()
v.bJ(100)
u=v.a
u.a=null
u.W(null)}v.bJ(10)
v=x.f
u=v.a
h=u.createTexture()
u.bindTexture(34067,h)
u.texParameteri(34067,10242,10497)
u.texParameteri(34067,10243,10497)
u.texParameteri(34067,10241,9729)
u.texParameteri(34067,10240,9729)
u.bindTexture(34067,null)
g=new T.e6(0)
g.b=h
g.c=!1
g.d=0
g.e=D.B()
v.aA(g,h,"../resources/maskonaive/posx.jpg",34069,!1,!1)
v.aA(g,h,"../resources/maskonaive/negx.jpg",34070,!1,!1)
v.aA(g,h,"../resources/maskonaive/posy.jpg",34071,!1,!1)
v.aA(g,h,"../resources/maskonaive/negy.jpg",34072,!1,!1)
v.aA(g,h,"../resources/maskonaive/posz.jpg",34073,!1,!1)
v.aA(g,h,"../resources/maskonaive/negz.jpg",34074,!1,!1)
f=M.dr(null,null,null)
v=new O.hR()
v.b=1.0471975511965976
o=v.c
v.c=g
u=g.e
t=H.b(v.gbv(),r)
C.a.h(u.a,t)
u=new D.H("boxTexture",o,v.c,v,[T.e6])
u.b=!0
v.W(u)
i=new V.X(1,1,1)
if(!J.M(v.d,i)){o=v.d
v.d=i
u=new D.H("boxColor",o,i,v,[V.X])
u.b=!0
v.W(u)}v.e=null
f.saL(v)
f.saY(0,l)
f.saQ(m)
e=new M.fE()
v=O.cy(E.aA)
e.d=v
v.aN(e.geA(),e.geB())
e.e=null
e.f=null
e.r=null
e.x=null
e.saQ(null)
e.saY(0,null)
e.saL(null)
e.saQ(m)
e.saL(j)
e.saY(0,l)
e.d.h(0,k)
d=new O.fv()
d.sd1(null)
d.sd0(null)
c=new V.bh(1,0,0,0,1,0,0,0,1)
if(!J.M(d.d,c)){d.d=c
d.aj()}c=new V.bh(1,0,0,0,1,0,0,0,1)
if(!J.M(d.e,c)){d.e=c
d.aj()}d.sd_(null)
d.sd1(l.y)
d.sd_(V.dS(0.05,0.05,0.05,1))
b=M.dr(null,null,null)
b.saL(d)
v=M.ax
u=H.f([f,e,b],[v])
t=new M.fm()
t.b2(v)
t.e=!1
t.f=null
t.aN(t.geS(),t.geT())
t.bM(0,u)
v=x.d
if(v!==t){if(v!=null){v=v.gq()
v.toString
u=H.b(x.gcs(),r)
C.a.N(v.a,u)}x.d=t
v=t.gq()
v.toString
r=H.b(x.gcs(),r)
C.a.h(v.a,r)
x.e1()}v=new B.i2(new X.kB(d,x))
v.a=z.getElementById("bumpMaps")
v.cW(0,"../resources/BumpMap1.png",!0)
v.h(0,"../resources/BumpMap2.png")
v.h(0,"../resources/BumpMap3.png")
v.h(0,"../resources/BumpMap4.png")
v.h(0,"../resources/BumpMap5.png")
v.h(0,"../resources/ScrewBumpMap.png")
v.h(0,"../resources/CtrlPnlBumpMap.png")
B.kL(x)},
kB:{"^":"t:40;a,b",
$1:function(a){this.a.sd0(this.b.f.h0(a))}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dH.prototype
return J.dG.prototype}if(typeof a=="string")return J.cd.prototype
if(a==null)return J.dI.prototype
if(typeof a=="boolean")return J.fS.prototype
if(a.constructor==Array)return J.bP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.c_=function(a){if(typeof a=="string")return J.cd.prototype
if(a==null)return a
if(a.constructor==Array)return J.bP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.d8=function(a){if(a==null)return a
if(a.constructor==Array)return J.bP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.ko=function(a){if(typeof a=="number")return J.bQ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ci.prototype
return a}
J.kp=function(a){if(typeof a=="number")return J.bQ.prototype
if(typeof a=="string")return J.cd.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ci.prototype
return a}
J.bI=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).u(a,b)}
J.f5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ko(a).ae(a,b)}
J.dd=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kp(a).i(a,b)}
J.f6=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ky(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c_(a).k(a,b)}
J.f7=function(a,b,c,d){return J.bI(a).cX(a,b,c,d)}
J.cr=function(a,b,c){return J.c_(a).fN(a,b,c)}
J.de=function(a,b){return J.d8(a).D(a,b)}
J.f8=function(a,b){return J.d8(a).F(a,b)}
J.cs=function(a){return J.bI(a).gbW(a)}
J.aH=function(a){return J.I(a).gS(a)}
J.c1=function(a){return J.d8(a).gX(a)}
J.b7=function(a){return J.c_(a).gl(a)}
J.am=function(a){return J.I(a).j(a)}
var $=I.p
C.k=W.cw.prototype
C.n=W.fp.prototype
C.w=J.m.prototype
C.a=J.bP.prototype
C.x=J.dG.prototype
C.f=J.dH.prototype
C.y=J.dI.prototype
C.e=J.bQ.prototype
C.j=J.cd.prototype
C.F=J.bR.prototype
C.G=W.hm.prototype
C.q=J.hs.prototype
C.l=P.cR.prototype
C.m=J.ci.prototype
C.r=W.bB.prototype
C.t=W.iO.prototype
C.u=new P.hp()
C.i=new P.jz()
C.b=new A.c6(0,"ColorSourceType.None")
C.h=new A.c6(1,"ColorSourceType.Solid")
C.c=new A.c6(2,"ColorSourceType.Texture2D")
C.d=new A.c6(3,"ColorSourceType.TextureCube")
C.v=new P.ba(5e6)
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
C.o=function(hooks) { return hooks; }

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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
$.ar=0
$.b8=null
$.dh=null
$.d1=!1
$.eY=null
$.eS=null
$.f3=null
$.cn=null
$.cp=null
$.d9=null
$.b_=null
$.bF=null
$.bG=null
$.d2=!1
$.P=C.i
$.dx=null
$.dw=null
$.dv=null
$.du=null
$.n=V.hg()
$.fx="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.fw="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.hT="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.hS="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.dW=null
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
I.$lazy(y,x,w)}})(["dt","$get$dt",function(){return H.eX("_$dart_dartClosure")},"cG","$get$cG",function(){return H.eX("_$dart_js")},"ea","$get$ea",function(){return H.ay(H.ch({
toString:function(){return"$receiver$"}}))},"eb","$get$eb",function(){return H.ay(H.ch({$method$:null,
toString:function(){return"$receiver$"}}))},"ec","$get$ec",function(){return H.ay(H.ch(null))},"ed","$get$ed",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eh","$get$eh",function(){return H.ay(H.ch(void 0))},"ei","$get$ei",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ef","$get$ef",function(){return H.ay(H.eg(null))},"ee","$get$ee",function(){return H.ay(function(){try{null.$method$}catch(z){return z.message}}())},"ek","$get$ek",function(){return H.ay(H.eg(void 0))},"ej","$get$ej",function(){return H.ay(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cZ","$get$cZ",function(){return P.iP()},"bH","$get$bH",function(){return[]},"ds","$get$ds",function(){return{}},"eu","$get$eu",function(){return Z.ak(0)},"es","$get$es",function(){return Z.ak(511)},"ae","$get$ae",function(){return Z.ak(1)},"aD","$get$aD",function(){return Z.ak(2)},"aC","$get$aC",function(){return Z.ak(4)},"aq","$get$aq",function(){return Z.ak(8)},"aE","$get$aE",function(){return Z.ak(16)},"bz","$get$bz",function(){return Z.ak(32)},"bA","$get$bA",function(){return Z.ak(64)},"et","$get$et",function(){return Z.ak(96)},"aY","$get$aY",function(){return Z.ak(128)},"aB","$get$aB",function(){return Z.ak(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.L,[P.e,E.aA]]},{func:1,ret:P.D,args:[F.ah]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[D.l]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:P.D,args:[W.a1]},{func:1,ret:-1,args:[P.L,[P.e,V.at]]},{func:1,args:[,]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.v},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[P.L,[P.e,D.Y]]},{func:1,ret:-1,args:[P.L,[P.e,U.ab]]},{func:1,ret:P.D,args:[,,]},{func:1,ret:-1,args:[P.L,[P.e,M.ax]]},{func:1,ret:P.o,args:[P.L]},{func:1,ret:P.a9,args:[W.J]},{func:1,ret:W.V,args:[W.J]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.D,args:[P.T]},{func:1,ret:P.D,args:[,],opt:[,]},{func:1,ret:-1,args:[W.bB]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.a9,args:[[P.e,D.Y]]},{func:1,ret:P.a9,args:[P.v,P.v]},{func:1,ret:V.Z,args:[P.v]},{func:1,ret:P.D,args:[F.aj,P.v,P.v]},{func:1,ret:-1,args:[P.a],opt:[P.ap]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[P.aW]},{func:1,ret:P.D,args:[W.a5]},{func:1,ret:P.D,args:[W.V]},{func:1,ret:P.D,args:[P.o]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.l]}]}]
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
if(x==y)H.kP(d||a)
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
Isolate.d6=a.d6
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
if(typeof dartMainRunner==="function")dartMainRunner(X.f0,[])
else X.f0([])})})()
//# sourceMappingURL=test.dart.js.map
