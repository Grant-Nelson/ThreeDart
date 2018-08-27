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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isn)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cS"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cS(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cT=function(){}
var dart=[["","",,H,{"^":"",lE:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
cZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ce:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cW==null){H.ku()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.ej("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cu()]
if(v!=null)return v
v=H.kz(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cu(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
n:{"^":"a;",
t:function(a,b){return a===b},
gM:function(a){return H.bl(a)},
i:["df",function(a){return"Instance of '"+H.aU(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fH:{"^":"n;",
i:function(a){return String(a)},
gM:function(a){return a?519018:218159},
$isad:1},
ds:{"^":"n;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gM:function(a){return 0},
$isF:1},
cv:{"^":"n;",
gM:function(a){return 0},
i:["dg",function(a){return String(a)}]},
hl:{"^":"cv;"},
c9:{"^":"cv;"},
bK:{"^":"cv;",
i:function(a){var z=a[$.$get$dh()]
if(z==null)return this.dg(a)
return"JavaScript function for "+H.j(J.af(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscp:1},
aR:{"^":"n;$ti",
h:function(a,b){H.A(b,H.x(a,0))
if(!!a.fixed$length)H.p(P.aj("add"))
a.push(b)},
O:function(a,b){var z
if(!!a.fixed$length)H.p(P.aj("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
H:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.b8(a))}},
w:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.R(z,y,H.j(a[y]))
return z.join(b)},
fh:function(a){return this.w(a,"")},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
be:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.a9(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.a9(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.x(a,0)])
return H.b(a.slice(b,c),[H.x(a,0)])},
gbM:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.fF())},
aY:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
i:function(a){return P.cs(a,"[","]")},
gP:function(a){return new J.aq(a,a.length,0,[H.x(a,0)])},
gM:function(a){return H.bl(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.aj("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.bV(b,"newLength",null))
if(b<0)throw H.d(P.a9(b,0,null,"newLength",null))
a.length=b},
R:function(a,b,c){H.X(b)
H.A(c,H.x(a,0))
if(!!a.immutable$list)H.p(P.aj("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aK(a,b))
if(b>=a.length||b<0)throw H.d(H.aK(a,b))
a[b]=c},
$isi:1,
$isc:1,
q:{
fG:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.bV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a9(a,0,4294967295,"length",null))
return J.dq(new Array(a),b)},
dq:function(a,b){return J.be(H.b(a,[b]))},
be:function(a){H.bE(a)
a.fixed$length=Array
return a}}},
lD:{"^":"aR;$ti"},
aq:{"^":"a;a,b,c,0d,$ti",
gJ:function(a){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bJ:{"^":"n;",
gfg:function(a){return a===0?1/a<0:a<0},
cQ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.aj(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.aj(""+a+".round()"))},
d4:function(a,b){var z
if(b>20)throw H.d(P.a9(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfg(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.d(H.aJ(b))
return a*b},
dc:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dj:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ck(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.ck(a,b)},
ck:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.aj("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aT:function(a,b){var z
if(a>0)z=this.ex(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ex:function(a,b){return b>31?0:a>>>b},
af:function(a,b){if(typeof b!=="number")throw H.d(H.aJ(b))
return a<b},
$ist:1,
$isN:1},
dr:{"^":"bJ;",$isC:1},
fI:{"^":"bJ;"},
c3:{"^":"n;",
bD:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aK(a,b))
if(b<0)throw H.d(H.aK(a,b))
if(b>=a.length)H.p(H.aK(a,b))
return a.charCodeAt(b)},
aO:function(a,b){if(b>=a.length)throw H.d(H.aK(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.O(b)
if(typeof b!=="string")throw H.d(P.bV(b,null,null))
return a+b},
bf:function(a,b,c){H.X(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.c7(b,null,null))
if(b>c)throw H.d(P.c7(b,null,null))
if(c>a.length)throw H.d(P.c7(c,null,null))
return a.substring(b,c)},
bY:function(a,b){return this.bf(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fv:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ad:function(a,b){return this.fv(a,b," ")},
f2:function(a,b,c){if(c>a.length)throw H.d(P.a9(c,0,a.length,null,null))
return H.eY(a,b,c)},
i:function(a){return a},
gM:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdE:1,
$isk:1}}],["","",,H,{"^":"",
fF:function(){return new P.hU("No element")},
Y:{"^":"it;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.i.bD(this.a,b)},
$asek:function(){return[P.C]},
$asq:function(){return[P.C]},
$asi:function(){return[P.C]},
$asc:function(){return[P.C]}},
fq:{"^":"i;"},
dx:{"^":"a;a,b,c,0d,$ti",
gJ:function(a){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bS(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.b8(z))
w=this.c
if(typeof x!=="number")return H.y(x)
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
h_:{"^":"i;a,b,$ti",
gP:function(a){return new H.h0(J.bF(this.a),this.b,this.$ti)},
gl:function(a){return J.b6(this.a)},
A:function(a,b){return this.b.$1(J.d2(this.a,b))},
$asi:function(a,b){return[b]}},
h0:{"^":"ct;0a,b,c,$ti",
B:function(){var z=this.b
if(z.B()){this.a=this.c.$1(z.gJ(z))
return!0}this.a=null
return!1},
gJ:function(a){return this.a},
$asct:function(a,b){return[b]}},
iK:{"^":"i;a,b,$ti",
gP:function(a){return new H.iL(J.bF(this.a),this.b,this.$ti)}},
iL:{"^":"ct;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gJ(z)))return!0
return!1},
gJ:function(a){var z=this.a
return z.gJ(z)}},
c1:{"^":"a;$ti"},
ek:{"^":"a;$ti"},
it:{"^":"c4+ek;"}}],["","",,H,{"^":"",
kp:function(a){return init.types[H.X(a)]},
kx:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isB},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.af(a)
if(typeof z!=="string")throw H.d(H.aJ(a))
return z},
bl:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aU:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.J(a).$isc9){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.aO(w,0)===36)w=C.i.bY(w,1)
r=H.cX(H.bE(H.aL(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dI:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hv:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aJ(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aT(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aJ(w))}return H.dI(z)},
dJ:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aJ(x))
if(x<0)throw H.d(H.aJ(x))
if(x>65535)return H.hv(a)}return H.dI(a)},
hu:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aT(z,10))>>>0,56320|z&1023)}throw H.d(P.a9(a,0,1114111,null,null))},
a4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ht:function(a){return a.b?H.a4(a).getUTCFullYear()+0:H.a4(a).getFullYear()+0},
hr:function(a){return a.b?H.a4(a).getUTCMonth()+1:H.a4(a).getMonth()+1},
hn:function(a){return a.b?H.a4(a).getUTCDate()+0:H.a4(a).getDate()+0},
ho:function(a){return a.b?H.a4(a).getUTCHours()+0:H.a4(a).getHours()+0},
hq:function(a){return a.b?H.a4(a).getUTCMinutes()+0:H.a4(a).getMinutes()+0},
hs:function(a){return a.b?H.a4(a).getUTCSeconds()+0:H.a4(a).getSeconds()+0},
hp:function(a){return a.b?H.a4(a).getUTCMilliseconds()+0:H.a4(a).getMilliseconds()+0},
y:function(a){throw H.d(H.aJ(a))},
h:function(a,b){if(a==null)J.b6(a)
throw H.d(H.aK(a,b))},
aK:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.X(J.b6(a))
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.K(b,a,"index",null,z)
return P.c7(b,"index",null)},
kk:function(a,b,c){if(a>c)return new P.c6(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c6(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
aJ:function(a){return new P.aE(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.dD()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f_})
z.name=""}else z.toString=H.f_
return z},
f_:function(){return J.af(this.dartException)},
p:function(a){throw H.d(a)},
z:function(a){throw H.d(P.b8(a))},
aN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aT(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cw(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dC(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e2()
u=$.$get$e3()
t=$.$get$e4()
s=$.$get$e5()
r=$.$get$e9()
q=$.$get$ea()
p=$.$get$e7()
$.$get$e6()
o=$.$get$ec()
n=$.$get$eb()
m=v.W(y)
if(m!=null)return z.$1(H.cw(H.O(y),m))
else{m=u.W(y)
if(m!=null){m.method="call"
return z.$1(H.cw(H.O(y),m))}else{m=t.W(y)
if(m==null){m=s.W(y)
if(m==null){m=r.W(y)
if(m==null){m=q.W(y)
if(m==null){m=p.W(y)
if(m==null){m=s.W(y)
if(m==null){m=o.W(y)
if(m==null){m=n.W(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dC(H.O(y),m))}}return z.$1(new H.is(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dR()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dR()
return a},
b4:function(a){var z
if(a==null)return new H.eB(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eB(a)},
km:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.R(0,a[y],a[x])}return b},
kw:function(a,b,c,d,e,f){H.l(a,"$iscp")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.o("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kw)
a.$identity=z
return z},
ff:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isc){z.$reflectionInfo=d
x=H.hy(z).r}else x=d
w=e?Object.create(new H.hV().constructor.prototype):Object.create(new H.cj(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ak
if(typeof u!=="number")return u.E()
$.ak=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dc(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kp,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.d6:H.ck
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dc(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fc:function(a,b,c,d){var z=H.ck
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dc:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fe(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fc(y,!w,z,b)
if(y===0){w=$.ak
if(typeof w!=="number")return w.E()
$.ak=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b7
if(v==null){v=H.bW("self")
$.b7=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ak
if(typeof w!=="number")return w.E()
$.ak=w+1
t+=w
w="return function("+t+"){return this."
v=$.b7
if(v==null){v=H.bW("self")
$.b7=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fd:function(a,b,c,d){var z,y
z=H.ck
y=H.d6
switch(b?-1:a){case 0:throw H.d(H.hH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fe:function(a,b){var z,y,x,w,v,u,t,s
z=$.b7
if(z==null){z=H.bW("self")
$.b7=z}y=$.d5
if(y==null){y=H.bW("receiver")
$.d5=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fd(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ak
if(typeof y!=="number")return y.E()
$.ak=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ak
if(typeof y!=="number")return y.E()
$.ak=y+1
return new Function(z+y+"}")()},
cS:function(a,b,c,d,e,f,g){var z,y
z=J.be(H.bE(b))
H.X(c)
y=!!J.J(d).$isc?J.be(d):d
return H.ff(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ao(a,"String"))},
kC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ao(a,"num"))},
eO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ao(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ao(a,"int"))},
eW:function(a,b){throw H.d(H.ao(a,H.O(b).substring(3)))},
kE:function(a,b){var z=J.bS(b)
throw H.d(H.fa(a,z.bf(b,3,z.gl(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.eW(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.kE(a,b)},
bE:function(a){if(a==null)return a
if(!!J.J(a).$isc)return a
throw H.d(H.ao(a,"List"))},
ky:function(a,b){if(a==null)return a
if(!!J.J(a).$isc)return a
if(J.J(a)[b])return a
H.eW(a,b)},
eP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
bR:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eP(J.J(a))
if(z==null)return!1
y=H.eS(z,null,b,null)
return y},
e:function(a,b){var z,y
if(a==null)return a
if($.cO)return a
$.cO=!0
try{if(H.bR(a,b))return a
z=H.bU(b)
y=H.ao(a,z)
throw H.d(y)}finally{$.cO=!1}},
cU:function(a,b){if(a!=null&&!H.cR(a,b))H.p(H.ao(a,H.bU(b)))
return a},
eJ:function(a){var z
if(a instanceof H.r){z=H.eP(J.J(a))
if(z!=null)return H.bU(z)
return"Closure"}return H.aU(a)},
kJ:function(a){throw H.d(new P.fi(H.O(a)))},
eQ:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aL:function(a){if(a==null)return
return a.$ti},
mA:function(a,b,c){return H.b5(a["$as"+H.j(c)],H.aL(b))},
bD:function(a,b,c,d){var z
H.O(c)
H.X(d)
z=H.b5(a["$as"+H.j(c)],H.aL(b))
return z==null?null:z[d]},
aD:function(a,b,c){var z
H.O(b)
H.X(c)
z=H.b5(a["$as"+H.j(b)],H.aL(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.X(b)
z=H.aL(a)
return z==null?null:z[b]},
bU:function(a){var z=H.aM(a,null)
return z},
aM:function(a,b){var z,y
H.v(b,"$isc",[P.k],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cX(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.j(b[y])}if('func' in a)return H.k6(a,b)
if('futureOr' in a)return"FutureOr<"+H.aM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.v(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.E(t,b[r])
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
for(z=H.kl(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.aM(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cX:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isc",[P.k],"$asc")
if(a==null)return""
z=new P.bP("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aM(u,c)}v="<"+z.i(0)+">"
return v},
b5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b1:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aL(a)
y=J.J(a)
if(y[b]==null)return!1
return H.eM(H.b5(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.O(b)
H.bE(c)
H.O(d)
if(a==null)return a
z=H.b1(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cX(c,0,null)
throw H.d(H.ao(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eM:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ae(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ae(a[y],b,c[y],d))return!1
return!0},
my:function(a,b,c){return a.apply(b,H.b5(J.J(b)["$as"+H.j(c)],H.aL(b)))},
eT:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.eT(z)}return!1},
cR:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.eT(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cR(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bR(a,b)}y=J.J(a).constructor
x=H.aL(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ae(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.cR(a,b))throw H.d(H.ao(a,H.bU(b)))
return a},
ae:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ae(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.eS(a,b,c,d)
if('func' in a)return c.builtin$cls==="cp"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ae("type" in a?a.type:null,b,x,d)
else if(H.ae(a,b,x,d))return!0
else{if(!('$is'+"bb" in y.prototype))return!1
w=y.prototype["$as"+"bb"]
v=H.b5(w,z?a.slice(1):null)
return H.ae(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bU(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eM(H.b5(r,z),b,u,d)},
eS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ae(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ae(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ae(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ae(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kB(m,b,l,d)},
kB:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ae(c[w],d,a[w],b))return!1}return!0},
mz:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
kz:function(a){var z,y,x,w,v,u
z=H.O($.eR.$1(a))
y=$.cd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cf[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.eL.$2(a,z))
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
return u.i}if(v==="+")return H.eV(a,x)
if(v==="*")throw H.d(P.ej(z))
if(init.leafTags[z]===true){u=H.cg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eV(a,x)},
eV:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cg:function(a){return J.cZ(a,!1,null,!!a.$isB)},
kA:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cg(z)
else return J.cZ(z,c,null,null)},
ku:function(){if(!0===$.cW)return
$.cW=!0
H.kv()},
kv:function(){var z,y,x,w,v,u,t,s
$.cd=Object.create(null)
$.cf=Object.create(null)
H.kq()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eX.$1(v)
if(u!=null){t=H.kA(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kq:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.b0(C.z,H.b0(C.E,H.b0(C.n,H.b0(C.n,H.b0(C.D,H.b0(C.A,H.b0(C.B(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eR=new H.kr(v)
$.eL=new H.ks(u)
$.eX=new H.kt(t)},
b0:function(a,b){return a(b)||b},
eY:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
eZ:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hx:{"^":"a;a,b,c,d,e,f,r,0x",q:{
hy:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.be(z)
y=z[0]
x=z[1]
return new H.hx(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
id:{"^":"a;a,b,c,d,e,f",
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
q:{
an:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.id(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e8:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hi:{"^":"V;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dC:function(a,b){return new H.hi(a,b==null?null:b.method)}}},
fL:{"^":"V;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
cw:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fL(a,y,z?null:b.receiver)}}},
is:{"^":"V;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kM:{"^":"r:13;a",
$1:function(a){if(!!J.J(a).$isV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eB:{"^":"a;a,0b",
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
i:function(a){return"Closure '"+H.aU(this).trim()+"'"},
gd8:function(){return this},
$iscp:1,
gd8:function(){return this}},
dW:{"^":"r;"},
hV:{"^":"dW;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cj:{"^":"dW;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gM:function(a){var z,y
z=this.c
if(z==null)y=H.bl(this.a)
else y=typeof z!=="object"?J.ap(z):H.bl(z)
return(y^H.bl(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aU(z)+"'")},
q:{
ck:function(a){return a.a},
d6:function(a){return a.c},
bW:function(a){var z,y,x,w,v
z=new H.cj("self","target","receiver","name")
y=J.be(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ie:{"^":"V;a",
i:function(a){return this.a},
q:{
ao:function(a,b){return new H.ie("TypeError: "+H.j(P.c_(a))+": type '"+H.eJ(a)+"' is not a subtype of type '"+b+"'")}}},
f9:{"^":"V;a",
i:function(a){return this.a},
q:{
fa:function(a,b){return new H.f9("CastError: "+H.j(P.c_(a))+": type '"+H.eJ(a)+"' is not a subtype of type '"+b+"'")}}},
hG:{"^":"V;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
hH:function(a){return new H.hG(a)}}},
aS:{"^":"fY;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gac:function(a){return new H.dw(this,[H.x(this,0)])},
cq:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.c9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.c9(y,b)}else return this.fe(b)},
fe:function(a){var z=this.d
if(z==null)return!1
return this.bL(this.bl(z,J.ap(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aQ(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aQ(w,b)
x=y==null?null:y.b
return x}else return this.ff(b)},
ff:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bl(z,J.ap(a)&0x3ffffff)
x=this.bL(y,a)
if(x<0)return
return y[x].b},
R:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bn()
this.b=z}this.c2(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bn()
this.c=y}this.c2(y,b,c)}else{x=this.d
if(x==null){x=this.bn()
this.d=x}w=J.ap(b)&0x3ffffff
v=this.bl(x,w)
if(v==null)this.bs(x,w,[this.bo(b,c)])
else{u=this.bL(v,b)
if(u>=0)v[u].b=c
else v.push(this.bo(b,c))}}},
H:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.b8(this))
z=z.c}},
c2:function(a,b,c){var z
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
z=this.aQ(a,b)
if(z==null)this.bs(a,b,this.bo(b,c))
else z.b=c},
dR:function(){this.r=this.r+1&67108863},
bo:function(a,b){var z,y
z=new H.fQ(H.A(a,H.x(this,0)),H.A(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dR()
return z},
bL:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
i:function(a){return P.dy(this)},
aQ:function(a,b){return a[b]},
bl:function(a,b){return a[b]},
bs:function(a,b,c){a[b]=c},
dL:function(a,b){delete a[b]},
c9:function(a,b){return this.aQ(a,b)!=null},
bn:function(){var z=Object.create(null)
this.bs(z,"<non-identifier-key>",z)
this.dL(z,"<non-identifier-key>")
return z},
$isdv:1},
fQ:{"^":"a;a,b,0c,0d"},
dw:{"^":"fq;a,$ti",
gl:function(a){return this.a.a},
gP:function(a){var z,y
z=this.a
y=new H.fR(z,z.r,this.$ti)
y.c=z.e
return y}},
fR:{"^":"a;a,b,0c,0d,$ti",
gJ:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.b8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kr:{"^":"r:13;a",
$1:function(a){return this.a(a)}},
ks:{"^":"r:29;a",
$2:function(a,b){return this.a(a,b)}},
kt:{"^":"r:19;a",
$1:function(a){return this.a(H.O(a))}},
fJ:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdE:1,
q:{
fK:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.fA("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kl:function(a){return J.dq(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bz:function(a){return a},
aI:function(a,b,c){H.bE(b)
if(a>>>0!==a||a>=c)throw H.d(H.aK(b,a))},
k5:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.kk(a,b,c))
return b},
he:{"^":"n;","%":"DataView;ArrayBufferView;cA|ev|ew|hd|ex|ey|aH"},
cA:{"^":"he;",
gl:function(a){return a.length},
$isB:1,
$asB:I.cT},
hd:{"^":"ew;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
$asc1:function(){return[P.t]},
$asq:function(){return[P.t]},
$isi:1,
$asi:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aH:{"^":"ey;",
$asc1:function(){return[P.C]},
$asq:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$isc:1,
$asc:function(){return[P.C]}},
lO:{"^":"aH;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lP:{"^":"aH;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lQ:{"^":"aH;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lR:{"^":"aH;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lS:{"^":"aH;",
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lT:{"^":"aH;",
gl:function(a){return a.length},
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hf:{"^":"aH;",
gl:function(a){return a.length},
j:function(a,b){H.aI(b,a,a.length)
return a[b]},
be:function(a,b,c){return new Uint8Array(a.subarray(b,H.k5(b,c,a.length)))},
"%":";Uint8Array"},
ev:{"^":"cA+q;"},
ew:{"^":"ev+c1;"},
ex:{"^":"cA+q;"},
ey:{"^":"ex+c1;"}}],["","",,P,{"^":"",
iN:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kd()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b2(new P.iP(z),1)).observe(y,{childList:true})
return new P.iO(z,y,x)}else if(self.setImmediate!=null)return P.ke()
return P.kf()},
mn:[function(a){self.scheduleImmediate(H.b2(new P.iQ(H.e(a,{func:1,ret:-1})),0))},"$1","kd",4,0,10],
mo:[function(a){self.setImmediate(H.b2(new P.iR(H.e(a,{func:1,ret:-1})),0))},"$1","ke",4,0,10],
mp:[function(a){P.cF(C.m,H.e(a,{func:1,ret:-1}))},"$1","kf",4,0,10],
cF:function(a,b){var z
H.e(b,{func:1,ret:-1})
z=C.f.T(a.a,1000)
return P.jL(z<0?0:z,b)},
dZ:function(a,b){var z
H.e(b,{func:1,ret:-1,args:[P.aV]})
z=C.f.T(a.a,1000)
return P.jM(z<0?0:z,b)},
k9:function(a,b){if(H.bR(a,{func:1,args:[P.a,P.ai]}))return b.fG(a,null,P.a,P.ai)
if(H.bR(a,{func:1,args:[P.a]}))return H.e(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.bV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k8:function(){var z,y
for(;z=$.b_,z!=null;){$.bB=null
y=z.b
$.b_=y
if(y==null)$.bA=null
z.a.$0()}},
mx:[function(){$.cP=!0
try{P.k8()}finally{$.bB=null
$.cP=!1
if($.b_!=null)$.$get$cL().$1(P.eN())}},"$0","eN",0,0,2],
eI:function(a){var z=new P.ep(H.e(a,{func:1,ret:-1}))
if($.b_==null){$.bA=z
$.b_=z
if(!$.cP)$.$get$cL().$1(P.eN())}else{$.bA.b=z
$.bA=z}},
kc:function(a){var z,y,x
H.e(a,{func:1,ret:-1})
z=$.b_
if(z==null){P.eI(a)
$.bB=$.bA
return}y=new P.ep(a)
x=$.bB
if(x==null){y.b=z
$.bB=y
$.b_=y}else{y.b=x.b
x.b=y
$.bB=y
if(y.b==null)$.bA=y}},
kF:function(a){var z,y
z={func:1,ret:-1}
H.e(a,z)
y=$.L
if(C.j===y){P.cc(null,null,C.j,a)
return}y.toString
P.cc(null,null,y,H.e(y.bx(a),z))},
i8:function(a,b){var z,y
z={func:1,ret:-1}
H.e(b,z)
y=$.L
if(y===C.j){y.toString
return P.cF(a,b)}return P.cF(a,H.e(y.bx(b),z))},
i9:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aV]}
H.e(b,z)
y=$.L
if(y===C.j){y.toString
return P.dZ(a,b)}x=y.co(b,P.aV)
$.L.toString
return P.dZ(a,H.e(x,z))},
cb:function(a,b,c,d,e){var z={}
z.a=d
P.kc(new P.ka(z,e))},
eG:function(a,b,c,d,e){var z,y
H.e(d,{func:1,ret:e})
y=$.L
if(y===c)return d.$0()
$.L=c
z=y
try{y=d.$0()
return y}finally{$.L=z}},
eH:function(a,b,c,d,e,f,g){var z,y
H.e(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.L
if(y===c)return d.$1(e)
$.L=c
z=y
try{y=d.$1(e)
return y}finally{$.L=z}},
kb:function(a,b,c,d,e,f,g,h,i){var z,y
H.e(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.L
if(y===c)return d.$2(e,f)
$.L=c
z=y
try{y=d.$2(e,f)
return y}finally{$.L=z}},
cc:function(a,b,c,d){var z
H.e(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bx(d):c.eZ(d,-1)
P.eI(d)},
iP:{"^":"r:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iO:{"^":"r:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.e(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iQ:{"^":"r:1;a",
$0:function(){this.a.$0()}},
iR:{"^":"r:1;a",
$0:function(){this.a.$0()}},
eE:{"^":"a;a,0b,c",
dw:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b2(new P.jO(this,b),0),a)
else throw H.d(P.aj("`setTimeout()` not found."))},
dz:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b2(new P.jN(this,a,Date.now(),b),0),a)
else throw H.d(P.aj("Periodic timer."))},
$isaV:1,
q:{
jL:function(a,b){var z=new P.eE(!0,0)
z.dw(a,b)
return z},
jM:function(a,b){var z=new P.eE(!1,0)
z.dz(a,b)
return z}}},
jO:{"^":"r:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jN:{"^":"r:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dj(w,x)}z.c=y
this.d.$1(z)}},
aZ:{"^":"a;0a,b,c,d,e,$ti",
fl:function(a){if(this.c!==6)return!0
return this.b.b.bR(H.e(this.d,{func:1,ret:P.ad,args:[P.a]}),a.a,P.ad,P.a)},
fd:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.bR(z,{func:1,args:[P.a,P.ai]}))return H.cU(w.fM(z,a.a,a.b,null,y,P.ai),x)
else return H.cU(w.bR(H.e(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aB:{"^":"a;cj:a<,b,0eo:c<,$ti",
d3:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.L
if(y!==C.j){y.toString
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k9(b,y)}H.e(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aB(0,$.L,[c])
w=b==null?1:3
this.c3(new P.aZ(x,w,a,b,[z,c]))
return x},
fP:function(a,b){return this.d3(a,null,b)},
c3:function(a){var z,y
z=this.a
if(z<=1){a.a=H.l(this.c,"$isaZ")
this.c=a}else{if(z===2){y=H.l(this.c,"$isaB")
z=y.a
if(z<4){y.c3(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cc(null,null,z,H.e(new P.j4(this,a),{func:1,ret:-1}))}},
ce:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.l(this.c,"$isaZ")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.l(this.c,"$isaB")
y=u.a
if(y<4){u.ce(a)
return}this.a=y
this.c=u.c}z.a=this.aS(a)
y=this.b
y.toString
P.cc(null,null,y,H.e(new P.j9(z,this),{func:1,ret:-1}))}},
bq:function(){var z=H.l(this.c,"$isaZ")
this.c=null
return this.aS(z)},
aS:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
c6:function(a){var z,y,x,w
z=H.x(this,0)
H.cU(a,{futureOr:1,type:z})
y=this.$ti
x=H.b1(a,"$isbb",y,"$asbb")
if(x){z=H.b1(a,"$isaB",y,null)
if(z)P.er(a,this)
else P.j5(a,this)}else{w=this.bq()
H.A(a,z)
this.a=4
this.c=a
P.bx(this,w)}},
bi:[function(a,b){var z
H.l(b,"$isai")
z=this.bq()
this.a=8
this.c=new P.a8(a,b)
P.bx(this,z)},function(a){return this.bi(a,null)},"fY","$2","$1","gdH",4,2,20],
$isbb:1,
q:{
j5:function(a,b){var z,y,x
b.a=1
try{a.d3(new P.j6(b),new P.j7(b),null)}catch(x){z=H.aN(x)
y=H.b4(x)
P.kF(new P.j8(b,z,y))}},
er:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.l(a.c,"$isaB")
if(z>=4){y=b.bq()
b.a=a.a
b.c=a.c
P.bx(b,y)}else{y=H.l(b.c,"$isaZ")
b.a=2
b.c=a
a.ce(y)}},
bx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.l(y.c,"$isa8")
y=y.b
u=v.a
t=v.b
y.toString
P.cb(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bx(z.a,b)}y=z.a
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
if(p){H.l(r,"$isa8")
y=y.b
u=r.a
t=r.b
y.toString
P.cb(null,null,y,u,t)
return}o=$.L
if(o==null?q!=null:o!==q)$.L=q
else o=null
y=b.c
if(y===8)new P.jc(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jb(x,b,r).$0()}else if((y&2)!==0)new P.ja(z,x,b).$0()
if(o!=null)$.L=o
y=x.b
if(!!J.J(y).$isbb){if(y.a>=4){n=H.l(t.c,"$isaZ")
t.c=null
b=t.aS(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.er(y,t)
return}}m=b.b
n=H.l(m.c,"$isaZ")
m.c=null
b=m.aS(n)
y=x.a
u=x.b
if(!y){H.A(u,H.x(m,0))
m.a=4
m.c=u}else{H.l(u,"$isa8")
m.a=8
m.c=u}z.a=m
y=m}}}},
j4:{"^":"r:1;a,b",
$0:function(){P.bx(this.a,this.b)}},
j9:{"^":"r:1;a,b",
$0:function(){P.bx(this.b,this.a.a)}},
j6:{"^":"r:14;a",
$1:function(a){var z=this.a
z.a=0
z.c6(a)}},
j7:{"^":"r:21;a",
$2:function(a,b){this.a.bi(a,H.l(b,"$isai"))},
$1:function(a){return this.$2(a,null)}},
j8:{"^":"r:1;a,b,c",
$0:function(){this.a.bi(this.b,this.c)}},
jc:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.d1(H.e(w.d,{func:1}),null)}catch(v){y=H.aN(v)
x=H.b4(v)
if(this.d){w=H.l(this.a.a.c,"$isa8").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.l(this.a.a.c,"$isa8")
else u.b=new P.a8(y,x)
u.a=!0
return}if(!!J.J(z).$isbb){if(z instanceof P.aB&&z.gcj()>=4){if(z.gcj()===8){w=this.b
w.b=H.l(z.geo(),"$isa8")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fP(new P.jd(t),null)
w.a=!1}}},
jd:{"^":"r:22;a",
$1:function(a){return this.a}},
jb:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.A(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.bR(H.e(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aN(t)
y=H.b4(t)
x=this.a
x.b=new P.a8(z,y)
x.a=!0}}},
ja:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.l(this.a.a.c,"$isa8")
w=this.c
if(w.fl(z)&&w.e!=null){v=this.b
v.b=w.fd(z)
v.a=!1}}catch(u){y=H.aN(u)
x=H.b4(u)
w=H.l(this.a.a.c,"$isa8")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a8(y,x)
s.a=!0}}},
ep:{"^":"a;a,0b"},
cC:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aB(0,$.L,[P.C])
z.a=0
this.fk(new P.hY(z,this),!0,new P.hZ(z,y),y.gdH())
return y}},
hY:{"^":"r;a,b",
$1:function(a){H.A(a,H.aD(this.b,"cC",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.aD(this.b,"cC",0)]}}},
hZ:{"^":"r:1;a,b",
$0:function(){this.b.c6(this.a.a)}},
dT:{"^":"a;$ti"},
hX:{"^":"a;"},
aV:{"^":"a;"},
a8:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isV:1},
jV:{"^":"a;",$ismm:1},
ka:{"^":"r:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dD()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
jx:{"^":"jV;",
fN:function(a){var z,y,x
H.e(a,{func:1,ret:-1})
try{if(C.j===$.L){a.$0()
return}P.eG(null,null,this,a,-1)}catch(x){z=H.aN(x)
y=H.b4(x)
P.cb(null,null,this,z,H.l(y,"$isai"))}},
fO:function(a,b,c){var z,y,x
H.e(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.L){a.$1(b)
return}P.eH(null,null,this,a,b,-1,c)}catch(x){z=H.aN(x)
y=H.b4(x)
P.cb(null,null,this,z,H.l(y,"$isai"))}},
eZ:function(a,b){return new P.jz(this,H.e(a,{func:1,ret:b}),b)},
bx:function(a){return new P.jy(this,H.e(a,{func:1,ret:-1}))},
co:function(a,b){return new P.jA(this,H.e(a,{func:1,ret:-1,args:[b]}),b)},
d1:function(a,b){H.e(a,{func:1,ret:b})
if($.L===C.j)return a.$0()
return P.eG(null,null,this,a,b)},
bR:function(a,b,c,d){H.e(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.L===C.j)return a.$1(b)
return P.eH(null,null,this,a,b,c,d)},
fM:function(a,b,c,d,e,f){H.e(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.L===C.j)return a.$2(b,c)
return P.kb(null,null,this,a,b,c,d,e,f)},
fG:function(a,b,c,d){return H.e(a,{func:1,ret:b,args:[c,d]})}},
jz:{"^":"r;a,b,c",
$0:function(){return this.a.d1(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jy:{"^":"r:2;a,b",
$0:function(){return this.a.fN(this.b)}},
jA:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.fO(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fT:function(a,b,c){H.bE(a)
return H.v(H.km(a,new H.aS(0,0,[b,c])),"$isdv",[b,c],"$asdv")},
fS:function(a,b){return new H.aS(0,0,[a,b])},
fU:function(a,b,c,d){return new P.jj(0,0,[d])},
fE:function(a,b,c){var z,y
if(P.cQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bC()
C.a.h(y,a)
try{P.k7(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.dU(b,H.ky(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cs:function(a,b,c){var z,y,x
if(P.cQ(a))return b+"..."+c
z=new P.bP(b)
y=$.$get$bC()
C.a.h(y,a)
try{x=z
x.a=P.dU(x.gaj(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaj()+c
y=z.gaj()
return y.charCodeAt(0)==0?y:y},
cQ:function(a){var z,y
for(z=0;y=$.$get$bC(),z<y.length;++z)if(a===y[z])return!0
return!1},
k7:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gP(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.j(z.gJ(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gJ(z);++x
if(!z.B()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ(z);++x
for(;z.B();t=s,s=r){r=z.gJ(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dy:function(a){var z,y,x
z={}
if(P.cQ(a))return"{...}"
y=new P.bP("")
try{C.a.h($.$get$bC(),a)
x=y
x.a=x.gaj()+"{"
z.a=!0
J.f3(a,new P.fZ(z,y))
z=y
z.a=z.gaj()+"}"}finally{z=$.$get$bC()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaj()
return z.charCodeAt(0)==0?z:z},
jj:{"^":"je;a,0b,0c,0d,0e,0f,r,$ti",
gP:function(a){return P.eu(this,this.r,H.x(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cN()
this.b=z}return this.c4(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cN()
this.c=y}return this.c4(y,b)}else return this.dA(0,b)},
dA:function(a,b){var z,y,x
H.A(b,H.x(this,0))
z=this.d
if(z==null){z=P.cN()
this.d=z}y=this.c7(b)
x=z[y]
if(x==null)z[y]=[this.bh(b)]
else{if(this.cc(x,b)>=0)return!1
x.push(this.bh(b))}return!0},
O:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cf(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cf(this.c,b)
else return this.eh(0,b)},
eh:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dP(z,b)
x=this.cc(y,b)
if(x<0)return!1
this.cl(y.splice(x,1)[0])
return!0},
c4:function(a,b){H.A(b,H.x(this,0))
if(H.l(a[b],"$iscM")!=null)return!1
a[b]=this.bh(b)
return!0},
cf:function(a,b){var z
if(a==null)return!1
z=H.l(a[b],"$iscM")
if(z==null)return!1
this.cl(z)
delete a[b]
return!0},
c5:function(){this.r=this.r+1&67108863},
bh:function(a){var z,y
z=new P.cM(H.A(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.c5()
return z},
cl:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.c5()},
c7:function(a){return J.ap(a)&0x3ffffff},
dP:function(a,b){return a[this.c7(b)]},
cc:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
q:{
cN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cM:{"^":"a;a,0b,0c"},
jk:{"^":"a;a,b,0c,0d,$ti",
gJ:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.b8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.x(this,0))
this.c=z.b
return!0}}},
q:{
eu:function(a,b,c){var z=new P.jk(a,b,[c])
z.c=a.e
return z}}},
je:{"^":"hI;"},
c4:{"^":"jl;",$isi:1,$isc:1},
q:{"^":"a;$ti",
gP:function(a){return new H.dx(a,this.gl(a),0,[H.bD(this,a,"q",0)])},
A:function(a,b){return this.j(a,b)},
fR:function(a,b){var z,y,x
z=H.b([],[H.bD(this,a,"q",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.y(x)
if(!(y<x))break
C.a.R(z,y,this.j(a,y));++y}return z},
fQ:function(a){return this.fR(a,!0)},
i:function(a){return P.cs(a,"[","]")}},
fY:{"^":"a7;"},
fZ:{"^":"r:11;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
a7:{"^":"a;$ti",
H:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[H.bD(this,a,"a7",0),H.bD(this,a,"a7",1)]})
for(z=J.bF(this.gac(a));z.B();){y=z.gJ(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.b6(this.gac(a))},
i:function(a){return P.dy(a)},
$isa1:1},
hK:{"^":"a;$ti",
i:function(a){return P.cs(this,"{","}")},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.d3("index"))
if(b<0)H.p(P.a9(b,0,null,"index",null))
for(z=P.eu(this,this.r,H.x(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
$isi:1},
hI:{"^":"hK;"},
jl:{"^":"a+q;"}}],["","",,P,{"^":"",cm:{"^":"a;$ti"},df:{"^":"hX;$ti"},fs:{"^":"cm;",
$ascm:function(){return[P.k,[P.c,P.C]]}},iw:{"^":"fs;a"},ix:{"^":"df;",
f4:function(a,b,c){var z,y,x,w
z=a.length
P.dK(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jU(0,0,x)
if(w.dN(a,b,z)!==z)w.cm(C.i.bD(a,z-1),0)
return C.H.be(x,0,w.b)},
f3:function(a){return this.f4(a,0,null)},
$asdf:function(){return[P.k,[P.c,P.C]]}},jU:{"^":"a;a,b,c",
cm:function(a,b){var z,y,x,w,v
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
dN:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.bD(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aO(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cm(w,C.i.aO(a,u)))x=u}else if(w<=2047){v=this.b
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
fu:function(a){var z=J.J(a)
if(!!z.$isr)return z.i(a)
return"Instance of '"+H.aU(a)+"'"},
fV:function(a,b,c,d){var z,y
H.A(b,d)
z=J.fG(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.R(z,y,b)
return H.v(z,"$isc",[d],"$asc")},
fW:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gP(a);x.B();)C.a.h(y,H.A(x.gJ(x),c))
if(b)return y
return H.v(J.be(y),"$isc",z,"$asc")},
cD:function(a,b,c){var z,y
z=P.C
H.v(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.v(a,"$isaR",[z],"$asaR")
y=a.length
c=P.dK(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.af()
z=c<y}else z=!0
return H.dJ(z?C.a.be(a,b,c):a)}return P.i_(a,b,c)},
i_:function(a,b,c){var z,y,x
H.v(a,"$isi",[P.C],"$asi")
z=J.bF(a)
for(y=0;y<b;++y)if(!z.B())throw H.d(P.a9(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gJ(z))
return H.dJ(x)},
hz:function(a,b,c){return new H.fJ(a,H.fK(a,!1,!0,!1))},
jT:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isc",[P.C],"$asc")
if(c===C.q){z=$.$get$eF().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.f3(H.A(b,H.aD(c,"cm",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hu(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c_:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fu(a)},
o:function(a){return new P.eq(a)},
d_:function(a){H.kD(a)},
ad:{"^":"a;"},
"+bool":0,
aF:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aF))return!1
return this.a===b.a&&this.b===b.b},
gM:function(a){var z=this.a
return(z^C.f.aT(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fj(H.ht(this))
y=P.bH(H.hr(this))
x=P.bH(H.hn(this))
w=P.bH(H.ho(this))
v=P.bH(H.hq(this))
u=P.bH(H.hs(this))
t=P.fk(H.hp(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fj:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fk:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bH:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"N;"},
"+double":0,
aP:{"^":"a;a",
k:function(a,b){return new P.aP(C.f.X(this.a*b))},
af:function(a,b){return C.f.af(this.a,H.l(b,"$isaP").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a},
gM:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fp()
y=this.a
if(y<0)return"-"+new P.aP(0-y).i(0)
x=z.$1(C.f.T(y,6e7)%60)
w=z.$1(C.f.T(y,1e6)%60)
v=new P.fo().$1(y%1e6)
return""+C.f.T(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
dn:function(a,b,c,d,e,f){return new P.aP(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fo:{"^":"r:12;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fp:{"^":"r:12;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
V:{"^":"a;"},
dD:{"^":"V;",
i:function(a){return"Throw of null."}},
aE:{"^":"V;a,b,c,d",
gbk:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbj:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbk()+y+x
if(!this.a)return w
v=this.gbj()
u=P.c_(this.b)
return w+v+": "+H.j(u)},
q:{
bV:function(a,b,c){return new P.aE(!0,a,b,c)},
d3:function(a){return new P.aE(!1,null,a,"Must not be null")}}},
c6:{"^":"aE;e,f,a,b,c,d",
gbk:function(){return"RangeError"},
gbj:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
c7:function(a,b,c){return new P.c6(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
dK:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.y(a)
if(0<=a){if(typeof c!=="number")return H.y(c)
z=a>c}else z=!0
if(z)throw H.d(P.a9(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.y(c)
z=b>c}else z=!0
if(z)throw H.d(P.a9(b,a,c,"end",f))
return b}return c}}},
fD:{"^":"aE;e,l:f>,a,b,c,d",
gbk:function(){return"RangeError"},
gbj:function(){if(J.f0(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
K:function(a,b,c,d,e){var z=H.X(e!=null?e:J.b6(b))
return new P.fD(b,z,!0,a,c,"Index out of range")}}},
iu:{"^":"V;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
aj:function(a){return new P.iu(a)}}},
ir:{"^":"V;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
ej:function(a){return new P.ir(a)}}},
hU:{"^":"V;a",
i:function(a){return"Bad state: "+this.a}},
fg:{"^":"V;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c_(z))+"."},
q:{
b8:function(a){return new P.fg(a)}}},
hj:{"^":"a;",
i:function(a){return"Out of Memory"},
$isV:1},
dR:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isV:1},
fi:{"^":"V;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eq:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fA:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bf(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"N;"},
"+int":0,
i:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gP(this)
for(y=0;z.B();)++y
return y},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.d3("index"))
if(b<0)H.p(P.a9(b,0,null,"index",null))
for(z=this.gP(this),y=0;z.B();){x=z.gJ(z)
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
i:function(a){return P.fE(this,"(",")")}},
ct:{"^":"a;$ti"},
c:{"^":"a;$ti",$isi:1},
"+List":0,
a1:{"^":"a;$ti"},
F:{"^":"a;",
gM:function(a){return P.a.prototype.gM.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
N:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gM:function(a){return H.bl(this)},
i:function(a){return"Instance of '"+H.aU(this)+"'"},
toString:function(){return this.i(this)}},
ai:{"^":"a;"},
k:{"^":"a;",$isdE:1},
"+String":0,
bP:{"^":"a;aj:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
dU:function(a,b,c){var z=J.bF(b)
if(!z.B())return a
if(c.length===0){do a+=H.j(z.gJ(z))
while(z.B())}else{a+=H.j(z.gJ(z))
for(;z.B();)a=a+c+H.j(z.gJ(z))}return a}}}}],["","",,W,{"^":"",
db:function(a,b){var z=document.createElement("canvas")
return z},
fr:function(a){H.l(a,"$isa0")
return"wheel"},
ca:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
et:function(a,b,c,d){var z,y
z=W.ca(W.ca(W.ca(W.ca(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eK:function(a,b){var z
H.e(a,{func:1,ret:-1,args:[b]})
z=$.L
if(z===C.j)return a
return z.co(a,b)},
bI:{"^":"Z;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kN:{"^":"cB;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kO:{"^":"n;0l:length=","%":"AccessibleNodeList"},
kP:{"^":"bI;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kQ:{"^":"bI;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
f8:{"^":"n;","%":";Blob"},
cl:{"^":"bI;",
bU:function(a,b,c){var z=a.getContext(b,P.kg(c,null))
return z},
$iscl:1,
"%":"HTMLCanvasElement"},
kW:{"^":"I;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kY:{"^":"bY;0l:length=","%":"CSSPerspective"},
kZ:{"^":"co;0n:x=,0p:y=","%":"CSSPositionValue"},
l_:{"^":"bY;0n:x=,0p:y=","%":"CSSRotation"},
b9:{"^":"n;",$isb9:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l0:{"^":"bY;0n:x=,0p:y=","%":"CSSScale"},
l1:{"^":"iV;0l:length=",
da:function(a,b){var z=a.getPropertyValue(this.dE(a,b))
return z==null?"":z},
dE:function(a,b){var z,y
z=$.$get$dg()
y=z[b]
if(typeof y==="string")return y
y=this.ey(a,b)
z[b]=y
return y},
ey:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fl()+b
if(z in a)return z
return b},
gby:function(a){return a.bottom},
ga5:function(a){return a.height},
gau:function(a){return a.left},
gaI:function(a){return a.right},
gaL:function(a){return a.top},
ga6:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fh:{"^":"a;",
gau:function(a){return this.da(a,"left")}},
co:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
bY:{"^":"n;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
l2:{"^":"co;0l:length=","%":"CSSTransformValue"},
l3:{"^":"bY;0n:x=,0p:y=","%":"CSSTranslation"},
l4:{"^":"co;0l:length=","%":"CSSUnparsedValue"},
l5:{"^":"n;0l:length=","%":"DataTransferItemList"},
l6:{"^":"n;0n:x=,0p:y=","%":"DeviceAcceleration"},
l7:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
l8:{"^":"fm;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fm:{"^":"n;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
l9:{"^":"iX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a5,P.N]]},
$asq:function(){return[[P.a5,P.N]]},
$isi:1,
$asi:function(){return[[P.a5,P.N]]},
$isc:1,
$asc:function(){return[[P.a5,P.N]]},
$asu:function(){return[[P.a5,P.N]]},
"%":"ClientRectList|DOMRectList"},
fn:{"^":"n;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.ga6(a))+" x "+H.j(this.ga5(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.b1(b,"$isa5",[P.N],"$asa5")
if(!z)return!1
z=J.bT(b)
return a.left===z.gau(b)&&a.top===z.gaL(b)&&this.ga6(a)===z.ga6(b)&&this.ga5(a)===z.ga5(b)},
gM:function(a){return W.et(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga6(a)&0x1FFFFFFF,this.ga5(a)&0x1FFFFFFF)},
gby:function(a){return a.bottom},
ga5:function(a){return a.height},
gau:function(a){return a.left},
gaI:function(a){return a.right},
gaL:function(a){return a.top},
ga6:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa5:1,
$asa5:function(){return[P.N]},
"%":";DOMRectReadOnly"},
la:{"^":"iZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.k]},
$asq:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asu:function(){return[P.k]},
"%":"DOMStringList"},
lb:{"^":"n;0l:length=","%":"DOMTokenList"},
iU:{"^":"c4;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.l(z[b],"$isZ")},
h:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var z=this.fQ(this)
return new J.aq(z,z.length,0,[H.x(z,0)])},
$asq:function(){return[W.Z]},
$asi:function(){return[W.Z]},
$asc:function(){return[W.Z]}},
Z:{"^":"I;",
gcp:function(a){return new W.iU(a,a.children)},
gaX:function(a){return P.hw(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.N)},
i:function(a){return a.localName},
$isZ:1,
"%":";Element"},
a6:{"^":"n;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a0:{"^":"n;",
cn:["de",function(a,b,c,d){H.e(c,{func:1,args:[W.a6]})
if(c!=null)this.dB(a,b,c,!1)}],
dB:function(a,b,c,d){return a.addEventListener(b,H.b2(H.e(c,{func:1,args:[W.a6]}),1),!1)},
$isa0:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ez|eA|eC|eD"},
ba:{"^":"f8;",$isba:1,"%":"File"},
lu:{"^":"j3;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.ba]},
$asq:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asu:function(){return[W.ba]},
"%":"FileList"},
lv:{"^":"a0;0l:length=","%":"FileWriter"},
ly:{"^":"bI;0l:length=","%":"HTMLFormElement"},
bc:{"^":"n;",$isbc:1,"%":"Gamepad"},
lz:{"^":"cB;0n:x=,0p:y=","%":"Gyroscope"},
lA:{"^":"n;0l:length=","%":"History"},
lB:{"^":"jg;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asu:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bf:{"^":"cG;",$isbf:1,"%":"KeyboardEvent"},
lG:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
lH:{"^":"cB;0n:x=,0p:y=","%":"Magnetometer"},
lJ:{"^":"n;0l:length=","%":"MediaList"},
lK:{"^":"a0;",
cn:function(a,b,c,d){H.e(c,{func:1,args:[W.a6]})
if(b==="message")a.start()
this.de(a,b,c,!1)},
"%":"MessagePort"},
lL:{"^":"jm;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gac:function(a){var z=H.b([],[P.k])
this.H(a,new W.ha(z))
return z},
gl:function(a){return a.size},
$asa7:function(){return[P.k,null]},
$isa1:1,
$asa1:function(){return[P.k,null]},
"%":"MIDIInputMap"},
ha:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lM:{"^":"jn;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gac:function(a){var z=H.b([],[P.k])
this.H(a,new W.hb(z))
return z},
gl:function(a){return a.size},
$asa7:function(){return[P.k,null]},
$isa1:1,
$asa1:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
hb:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bg:{"^":"n;",$isbg:1,"%":"MimeType"},
lN:{"^":"jp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bg]},
$asq:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asu:function(){return[W.bg]},
"%":"MimeTypeArray"},
am:{"^":"cG;",$isam:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iT:{"^":"c4;a",
gP:function(a){var z=this.a.childNodes
return new W.dp(z,z.length,-1,[H.bD(C.I,z,"u",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asq:function(){return[W.I]},
$asi:function(){return[W.I]},
$asc:function(){return[W.I]}},
I:{"^":"a0;",
i:function(a){var z=a.nodeValue
return z==null?this.df(a):z},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hg:{"^":"jr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asu:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
bj:{"^":"n;0l:length=",$isbj:1,"%":"Plugin"},
lX:{"^":"jv;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bj]},
$asq:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asu:function(){return[W.bj]},
"%":"PluginArray"},
m1:{"^":"jB;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gac:function(a){var z=H.b([],[P.k])
this.H(a,new W.hF(z))
return z},
gl:function(a){return a.size},
$asa7:function(){return[P.k,null]},
$isa1:1,
$asa1:function(){return[P.k,null]},
"%":"RTCStatsReport"},
hF:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m3:{"^":"bI;0l:length=","%":"HTMLSelectElement"},
cB:{"^":"a0;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bm:{"^":"a0;",$isbm:1,"%":"SourceBuffer"},
m4:{"^":"eA;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bm]},
$asq:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asu:function(){return[W.bm]},
"%":"SourceBufferList"},
bn:{"^":"n;",$isbn:1,"%":"SpeechGrammar"},
m5:{"^":"jD;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bn]},
$asq:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asu:function(){return[W.bn]},
"%":"SpeechGrammarList"},
bo:{"^":"n;0l:length=",$isbo:1,"%":"SpeechRecognitionResult"},
m7:{"^":"jG;",
j:function(a,b){return a.getItem(H.O(b))},
H:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gac:function(a){var z=H.b([],[P.k])
this.H(a,new W.hW(z))
return z},
gl:function(a){return a.length},
$asa7:function(){return[P.k,P.k]},
$isa1:1,
$asa1:function(){return[P.k,P.k]},
"%":"Storage"},
hW:{"^":"r:23;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bp:{"^":"n;",$isbp:1,"%":"CSSStyleSheet|StyleSheet"},
bq:{"^":"a0;",$isbq:1,"%":"TextTrack"},
br:{"^":"a0;",$isbr:1,"%":"TextTrackCue|VTTCue"},
mc:{"^":"jK;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$asq:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asu:function(){return[W.br]},
"%":"TextTrackCueList"},
md:{"^":"eD;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bq]},
$asq:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asu:function(){return[W.bq]},
"%":"TextTrackList"},
me:{"^":"n;0l:length=","%":"TimeRanges"},
bs:{"^":"n;",$isbs:1,"%":"Touch"},
aW:{"^":"cG;",$isaW:1,"%":"TouchEvent"},
mf:{"^":"jQ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bs]},
$asq:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$isc:1,
$asc:function(){return[W.bs]},
$asu:function(){return[W.bs]},
"%":"TouchList"},
mg:{"^":"n;0l:length=","%":"TrackDefaultList"},
cG:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mi:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
mk:{"^":"n;0n:x=","%":"VRStageBoundsPoint"},
ml:{"^":"a0;0l:length=","%":"VideoTrackList"},
bw:{"^":"am;",
gf7:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.aj("deltaY is not supported"))},
gf6:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.aj("deltaX is not supported"))},
$isbw:1,
"%":"WheelEvent"},
iM:{"^":"a0;",
el:function(a,b){return a.requestAnimationFrame(H.b2(H.e(b,{func:1,ret:-1,args:[P.N]}),1))},
dM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mq:{"^":"jX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.b9]},
$asq:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asu:function(){return[W.b9]},
"%":"CSSRuleList"},
mr:{"^":"fn;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.b1(b,"$isa5",[P.N],"$asa5")
if(!z)return!1
z=J.bT(b)
return a.left===z.gau(b)&&a.top===z.gaL(b)&&a.width===z.ga6(b)&&a.height===z.ga5(b)},
gM:function(a){return W.et(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga5:function(a){return a.height},
ga6:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mt:{"^":"jZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bc]},
$asq:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asu:function(){return[W.bc]},
"%":"GamepadList"},
mu:{"^":"k0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.I]},
$asq:function(){return[W.I]},
$isi:1,
$asi:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asu:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mv:{"^":"k2;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bo]},
$asq:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asu:function(){return[W.bo]},
"%":"SpeechRecognitionResultList"},
mw:{"^":"k4;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bp]},
$asq:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asu:function(){return[W.bp]},
"%":"StyleSheetList"},
j_:{"^":"cC;a,b,c,$ti",
fk:function(a,b,c,d){var z=H.x(this,0)
H.e(a,{func:1,ret:-1,args:[z]})
H.e(c,{func:1,ret:-1})
return W.W(this.a,this.b,a,!1,z)}},
ms:{"^":"j_;a,b,c,$ti"},
j0:{"^":"dT;a,b,c,d,e,$ti",
ez:function(){var z=this.d
if(z!=null&&this.a<=0)J.f2(this.b,this.c,z,!1)},
q:{
W:function(a,b,c,d,e){var z=c==null?null:W.eK(new W.j1(c),W.a6)
z=new W.j0(0,a,b,z,!1,[e])
z.ez()
return z}}},
j1:{"^":"r:4;a",
$1:function(a){return this.a.$1(H.l(a,"$isa6"))}},
u:{"^":"a;$ti",
gP:function(a){return new W.dp(a,this.gl(a),-1,[H.bD(this,a,"u",0)])}},
dp:{"^":"a;a,b,c,0d,$ti",
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f1(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gJ:function(a){return this.d}},
iV:{"^":"n+fh;"},
iW:{"^":"n+q;"},
iX:{"^":"iW+u;"},
iY:{"^":"n+q;"},
iZ:{"^":"iY+u;"},
j2:{"^":"n+q;"},
j3:{"^":"j2+u;"},
jf:{"^":"n+q;"},
jg:{"^":"jf+u;"},
jm:{"^":"n+a7;"},
jn:{"^":"n+a7;"},
jo:{"^":"n+q;"},
jp:{"^":"jo+u;"},
jq:{"^":"n+q;"},
jr:{"^":"jq+u;"},
ju:{"^":"n+q;"},
jv:{"^":"ju+u;"},
jB:{"^":"n+a7;"},
ez:{"^":"a0+q;"},
eA:{"^":"ez+u;"},
jC:{"^":"n+q;"},
jD:{"^":"jC+u;"},
jG:{"^":"n+a7;"},
jJ:{"^":"n+q;"},
jK:{"^":"jJ+u;"},
eC:{"^":"a0+q;"},
eD:{"^":"eC+u;"},
jP:{"^":"n+q;"},
jQ:{"^":"jP+u;"},
jW:{"^":"n+q;"},
jX:{"^":"jW+u;"},
jY:{"^":"n+q;"},
jZ:{"^":"jY+u;"},
k_:{"^":"n+q;"},
k0:{"^":"k_+u;"},
k1:{"^":"n+q;"},
k2:{"^":"k1+u;"},
k3:{"^":"n+q;"},
k4:{"^":"k3+u;"}}],["","",,P,{"^":"",
aC:function(a){var z,y,x,w,v
if(a==null)return
z=P.fS(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.O(y[w])
z.R(0,v,a[v])}return z},
kg:function(a,b){var z={}
a.H(0,new P.kh(z))
return z},
dm:function(){var z=$.dl
if(z==null){z=J.ch(window.navigator.userAgent,"Opera",0)
$.dl=z}return z},
fl:function(){var z,y
z=$.di
if(z!=null)return z
y=$.dj
if(y==null){y=J.ch(window.navigator.userAgent,"Firefox",0)
$.dj=y}if(y)z="-moz-"
else{y=$.dk
if(y==null){y=!P.dm()&&J.ch(window.navigator.userAgent,"Trident/",0)
$.dk=y}if(y)z="-ms-"
else z=P.dm()?"-o-":"-webkit-"}$.di=z
return z},
kh:{"^":"r:11;a",
$2:function(a,b){this.a[a]=b}},
fx:{"^":"c4;a,b",
gbm:function(){var z,y,x
z=this.b
y=H.aD(z,"q",0)
x=W.Z
return new H.h_(new H.iK(z,H.e(new P.fy(),{func:1,ret:P.ad,args:[y]}),[y]),H.e(new P.fz(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b6(this.gbm().a)},
j:function(a,b){var z=this.gbm()
return z.b.$1(J.d2(z.a,b))},
gP:function(a){var z=P.fW(this.gbm(),!1,W.Z)
return new J.aq(z,z.length,0,[H.x(z,0)])},
$asq:function(){return[W.Z]},
$asi:function(){return[W.Z]},
$asc:function(){return[W.Z]}},
fy:{"^":"r:24;",
$1:function(a){return!!J.J(H.l(a,"$isI")).$isZ}},
fz:{"^":"r:25;",
$1:function(a){return H.f(H.l(a,"$isI"),"$isZ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
by:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
es:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bk:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
t:function(a,b){var z,y,x
if(b==null)return!1
z=H.b1(b,"$isbk",[P.N],null)
if(!z)return!1
z=this.a
y=J.bT(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gM:function(a){var z,y
z=J.ap(this.a)
y=J.ap(this.b)
return P.es(P.by(P.by(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.x(this,0)
z=H.A(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bk(z,H.A(x*b,y),this.$ti)}},
jw:{"^":"a;$ti",
gaI:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.A(z+this.c,H.x(this,0))},
gby:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.A(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b1(b,"$isa5",[P.N],"$asa5")
if(!z)return!1
z=this.a
y=J.bT(b)
x=y.gau(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaL(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.x(this,0)
if(H.A(z+this.c,w)===y.gaI(b)){if(typeof x!=="number")return x.E()
z=H.A(x+this.d,w)===y.gby(b)}else z=!1}else z=!1}else z=!1
return z},
gM:function(a){var z,y,x,w,v
z=this.a
y=J.ap(z)
x=this.b
w=J.ap(x)
if(typeof z!=="number")return z.E()
v=H.x(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.A(x+this.d,v)
return P.es(P.by(P.by(P.by(P.by(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cr:function(a,b){var z,y
H.v(b,"$isbk",[P.N],"$asbk")
z=b.a
y=this.a
if(typeof z!=="number")return z.d9()
if(typeof y!=="number")return H.y(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.d9()
if(typeof y!=="number")return H.y(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a5:{"^":"jw;au:a>,aL:b>,a6:c>,a5:d>,$ti",q:{
hw:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.af()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.af()
if(d<0)y=-d*0
else y=d
return new P.a5(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",lc:{"^":"M;0n:x=,0p:y=","%":"SVGFEBlendElement"},ld:{"^":"M;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},le:{"^":"M;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},lf:{"^":"M;0n:x=,0p:y=","%":"SVGFECompositeElement"},lg:{"^":"M;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},lh:{"^":"M;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},li:{"^":"M;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},lj:{"^":"M;0n:x=,0p:y=","%":"SVGFEFloodElement"},lk:{"^":"M;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},ll:{"^":"M;0n:x=,0p:y=","%":"SVGFEImageElement"},lm:{"^":"M;0n:x=,0p:y=","%":"SVGFEMergeElement"},ln:{"^":"M;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},lo:{"^":"M;0n:x=,0p:y=","%":"SVGFEOffsetElement"},lp:{"^":"M;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lq:{"^":"M;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lr:{"^":"M;0n:x=,0p:y=","%":"SVGFESpotLightElement"},ls:{"^":"M;0n:x=,0p:y=","%":"SVGFETileElement"},lt:{"^":"M;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lw:{"^":"M;0n:x=,0p:y=","%":"SVGFilterElement"},lx:{"^":"bd;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fC:{"^":"bd;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bd:{"^":"M;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lC:{"^":"bd;0n:x=,0p:y=","%":"SVGImageElement"},bL:{"^":"n;",$isbL:1,"%":"SVGLength"},lF:{"^":"ji;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bL]},
$isi:1,
$asi:function(){return[P.bL]},
$isc:1,
$asc:function(){return[P.bL]},
$asu:function(){return[P.bL]},
"%":"SVGLengthList"},lI:{"^":"M;0n:x=,0p:y=","%":"SVGMaskElement"},bO:{"^":"n;",$isbO:1,"%":"SVGNumber"},lU:{"^":"jt;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bO]},
$isi:1,
$asi:function(){return[P.bO]},
$isc:1,
$asc:function(){return[P.bO]},
$asu:function(){return[P.bO]},
"%":"SVGNumberList"},lW:{"^":"M;0n:x=,0p:y=","%":"SVGPatternElement"},lY:{"^":"n;0n:x=,0p:y=","%":"SVGPoint"},lZ:{"^":"n;0l:length=","%":"SVGPointList"},m_:{"^":"n;0n:x=,0p:y=","%":"SVGRect"},m0:{"^":"fC;0n:x=,0p:y=","%":"SVGRectElement"},m8:{"^":"jI;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asq:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asu:function(){return[P.k]},
"%":"SVGStringList"},M:{"^":"Z;",
gcp:function(a){return new P.fx(a,new W.iT(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m9:{"^":"bd;0n:x=,0p:y=","%":"SVGSVGElement"},i0:{"^":"bd;","%":"SVGTextPathElement;SVGTextContentElement"},mb:{"^":"i0;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bQ:{"^":"n;",$isbQ:1,"%":"SVGTransform"},mh:{"^":"jS;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bQ]},
$isi:1,
$asi:function(){return[P.bQ]},
$isc:1,
$asc:function(){return[P.bQ]},
$asu:function(){return[P.bQ]},
"%":"SVGTransformList"},mj:{"^":"bd;0n:x=,0p:y=","%":"SVGUseElement"},jh:{"^":"n+q;"},ji:{"^":"jh+u;"},js:{"^":"n+q;"},jt:{"^":"js+u;"},jH:{"^":"n+q;"},jI:{"^":"jH+u;"},jR:{"^":"n+q;"},jS:{"^":"jR+u;"}}],["","",,P,{"^":"",kR:{"^":"n;0l:length=","%":"AudioBuffer"},kS:{"^":"iS;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.e(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gac:function(a){var z=H.b([],[P.k])
this.H(a,new P.f6(z))
return z},
gl:function(a){return a.size},
$asa7:function(){return[P.k,null]},
$isa1:1,
$asa1:function(){return[P.k,null]},
"%":"AudioParamMap"},f6:{"^":"r:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},kT:{"^":"a0;0l:length=","%":"AudioTrackList"},f7:{"^":"a0;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lV:{"^":"f7;0l:length=","%":"OfflineAudioContext"},iS:{"^":"n+a7;"}}],["","",,P,{"^":"",dN:{"^":"n;",$isdN:1,"%":"WebGLRenderingContext"},ip:{"^":"n;",$isip:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",m6:{"^":"jF;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aC(a.item(b))},
A:function(a,b){return this.j(a,b)},
$asq:function(){return[[P.a1,,,]]},
$isi:1,
$asi:function(){return[[P.a1,,,]]},
$isc:1,
$asc:function(){return[[P.a1,,,]]},
$asu:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},jE:{"^":"n+q;"},jF:{"^":"jE+u;"}}],["","",,O,{"^":"",aO:{"^":"a;0a,0b,0c,0d,$ti",
c_:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
bV:function(a,b,c){var z=H.aD(this,"aO",0)
H.e(b,{func:1,ret:P.ad,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.C,[P.i,z]]}
H.e(a,z)
H.e(c,z)
this.b=b
this.c=a
this.d=c},
bd:function(a,b){return this.bV(a,null,b)},
eb:function(a){var z
H.v(a,"$isi",[H.aD(this,"aO",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dS:function(a,b){var z
H.v(b,"$isi",[H.aD(this,"aO",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var z=this.a
return new J.aq(z,z.length,0,[H.x(z,0)])},
A:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aD(this,"aO",0)
H.A(b,z)
z=[z]
if(this.eb(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dS(x,H.b([b],z))}},
$isi:1,
q:{
cn:function(a){var z=new O.aO([a])
z.c_(a)
return z}}},cy:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.al()
this.b=z}return z},
dr:function(a){var z=this.b
if(!(z==null))z.L(a)},
ag:function(){return this.dr(null)},
gN:function(a){var z=this.a
if(z.length>0)return C.a.gbM(z)
else return V.cz()},
cZ:function(a){var z=this.a
if(a==null)C.a.h(z,V.cz())
else C.a.h(z,a)
this.ag()},
bO:function(){var z=this.a
if(z.length>0){z.pop()
this.ag()}}}}],["","",,E,{"^":"",ci:{"^":"a;"},aG:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0S:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbW:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gD()
y.toString
x=H.e(this.gcW(),{func:1,ret:-1,args:[D.w]})
C.a.O(y.a,x)}y=this.c
if(y!=null){y=y.gD()
y.toString
x=H.e(this.gcW(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}w=new D.P("shape",z,this.c,this,[F.dQ])
w.b=!0
this.a1(w)}},
saE:function(a){var z,y,x,w
if(!J.Q(this.r,a)){z=this.r
if(z!=null){y=z.gD()
y.toString
x=H.e(this.gcV(),{func:1,ret:-1,args:[D.w]})
C.a.O(y.a,x)}if(a!=null){y=a.gD()
y.toString
x=H.e(this.gcV(),{func:1,ret:-1,args:[D.w]})
C.a.h(y.a,x)}this.r=a
w=new D.P("mover",z,a,this,[U.bN])
w.b=!0
this.a1(w)}},
bc:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.c
z.sd6(z.a+z.d*b.y)
z.scX(0,z.b+z.e*b.y)
z.sd0(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.ar(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.k(0,V.ar(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.k(0,V.ar(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.ae(0)}u=z.x}else u=null
if(!J.Q(u,this.x)){t=this.x
this.x=u
s=new D.P("matrix",t,u,this,[V.ah])
s.b=!0
this.a1(s)}for(z=this.y.a,z=new J.aq(z,z.length,0,[H.x(z,0)]);z.B();)z.d.bc(0,b)},
av:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gN(z))
else C.a.h(z.a,y.k(0,z.gN(z)))
z.ag()
a.d_(this.f)
z=a.dy
x=(z&&C.a).gbM(z)
if(x!=null&&this.d!=null)x.fJ(a,this)
for(z=this.y.a,z=new J.aq(z,z.length,0,[H.x(z,0)]);z.B();)z.d.av(a)
a.cY()
a.dx.bO()},
a1:function(a){var z=this.z
if(!(z==null))z.L(a)},
U:function(){return this.a1(null)},
fu:[function(a){H.l(a,"$isw")
this.e=null
this.a1(a)},function(){return this.fu(null)},"ht","$1","$0","gcW",0,2,0],
ft:[function(a){this.a1(H.l(a,"$isw"))},function(){return this.ft(null)},"hs","$1","$0","gcV",0,2,0],
fq:[function(a){this.a1(H.l(a,"$isw"))},function(){return this.fq(null)},"hq","$1","$0","gcU",0,2,0],
hp:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aG],"$asi")
for(z=b.length,y=this.gcU(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.aQ()
t.a=H.b([],w)
t.c=0
u.sS(t)}t=u.gS()
t.toString
H.e(y,x)
C.a.h(t.a,y)}}this.U()},"$2","gfp",8,0,6],
hr:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isi",[E.aG],"$asi")
for(z=b.length,y=this.gcU(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.aQ()
t.a=H.b([],w)
t.c=0
u.sS(t)}t=u.gS()
t.toString
H.e(y,x)
C.a.O(t.a,y)}}this.U()},"$2","gfs",8,0,6],
$isas:1},hA:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dl:function(a,b){var z,y,x,w,v
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
z=new O.cy()
y=[V.ah]
z.a=H.b([],y)
x=z.gD()
x.toString
w={func:1,ret:-1,args:[D.w]}
v=H.e(new E.hC(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cy()
z.a=H.b([],y)
v=z.gD()
v.toString
x=H.e(new E.hD(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cy()
z.a=H.b([],y)
y=z.gD()
y.toString
w=H.e(new E.hE(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.b([],[O.cE])
this.dy=z
C.a.h(z,null)
this.fr=new H.aS(0,0,[P.k,A.dP])},
gfF:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gN(z)
y=this.db
y=z.k(0,y.gN(y))
this.z=y
z=y}return z},
d_:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbM(z):a;(z&&C.a).h(z,y)},
cY:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
hB:function(a,b){var z=new E.hA(a,b)
z.dl(a,b)
return z}}},hC:{"^":"r:8;a",
$1:function(a){var z
H.l(a,"$isw")
z=this.a
z.z=null
z.ch=null}},hD:{"^":"r:8;a",
$1:function(a){var z
H.l(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hE:{"^":"r:8;a",
$1:function(a){var z
H.l(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},i5:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0S:x@,0y,0z,0Q,0ch",
dt:[function(a){var z
H.l(a,"$isw")
z=this.x
if(!(z==null))z.L(a)
this.fK()},function(){return this.dt(null)},"ds","$1","$0","gc0",0,2,0],
gfc:function(){var z,y,x
z=Date.now()
y=C.f.T(P.dn(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aF(z,!1)
return x/y},
cg:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.y(z)
x=C.e.cQ(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.e.cQ(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
fK:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.e(new E.i7(this),{func:1,ret:-1,args:[P.N]})
C.t.dM(z)
C.t.el(z,W.eK(y,P.N))}},
fI:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cg()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aF(w,!1)
x.y=P.dn(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ag()
w=x.db
C.a.sl(w.a,0)
w.ag()
w=x.dx
C.a.sl(w.a,0)
w.ag()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.av(this.e)}}catch(v){z=H.aN(v)
y=H.b4(v)
P.d_("Error: "+H.j(z))
P.d_("Stack: "+H.j(y))
throw H.d(z)}},
q:{
i6:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscl)return E.dY(a,!0,!0,!0,!1)
y=W.db(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcp(a).h(0,y)
w=E.dY(y,!0,!0,!0,!1)
w.a=a
return w},
dY:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.i5()
y=P.fT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.k.bU(a,"webgl",y)
x=H.l(x==null?C.k.bU(a,"experimental-webgl",y):x,"$isdN")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hB(x,a)
w=new T.i1(x)
w.b=H.X(x.getParameter(3379))
w.c=H.X(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iv(a)
v=new X.fN()
v.c=new X.bh(!1,!1,!1)
v.d=P.fU(null,null,null,P.C)
w.b=v
v=new X.hc(w)
v.f=0
v.r=new V.S(0,0)
v.x=new V.S(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fX(w)
v.r=0
v.x=new V.S(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ic(w)
v.e=0
v.f=new V.S(0,0)
v.r=new V.S(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.dT,P.a]])
w.z=v
u=document
t=W.am
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.W(u,"contextmenu",H.e(w.gdZ(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.e(w.ge1(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.e(w.gdW(),q),!1,r))
v=w.z
p=W.bf
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.e(w.ge3(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.e(w.ge2(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.e(w.ge6(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.e(w.ge8(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.e(w.ge7(),s),!1,t))
p=w.z
o=W.bw;(p&&C.a).h(p,W.W(a,H.O(W.fr(a)),H.e(w.ge9(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.e(w.ge_(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.e(w.ge0(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.e(w.gea(),q),!1,r))
r=w.z
q=W.aW
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.e(w.geg(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.e(w.gee(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.e(w.gef(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aF(Date.now(),!1)
z.ch=0
z.cg()
return z}}},i7:{"^":"r:27;a",
$1:function(a){var z
H.kC(a)
z=this.a
if(z.z){z.z=!1
z.fI()}}}}],["","",,Z,{"^":"",eo:{"^":"a;a,b",q:{
cK:function(a,b,c){var z
H.v(c,"$isc",[P.C],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bz(c)),35044)
a.bindBuffer(b,null)
return new Z.eo(b,z)}}},d7:{"^":"ci;a,b,c,d,e",
aV:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aN(y)
x=P.o('Failed to bind buffer attribute "'+J.af(this.a)+'": '+H.j(z))
throw H.d(x)}},
i:function(a){return"["+J.af(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},iJ:{"^":"a;a",$iskU:1},d8:{"^":"a;a,0b,c,d",
at:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aV:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aV(a)},
d5:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
av:function(a){var z,y,x,w,v
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
z=[P.k]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.af(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(y,", ")+"\nAttrs:   "+C.a.w(u,", ")},
$isma:1},c2:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aU(this.c)+"'")+"]"}},aX:{"^":"a;a",
gbX:function(a){var z,y
z=this.a
y=(z&$.$get$ay().a)!==0?3:0
if((z&$.$get$ax().a)!==0)y+=3
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$az().a)!==0)y+=2
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$bu().a)!==0)y+=3
if((z&$.$get$bv().a)!==0)y+=4
if((z&$.$get$aY().a)!==0)++y
return(z&$.$get$av().a)!==0?y+4:y},
eY:function(a){var z,y,x
z=$.$get$ay()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bv()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$av()
if((y&z.a)!==0)if(x===a)return z
return $.$get$en()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aX))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.k])
y=this.a
if((y&$.$get$ay().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$az().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aA().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bv().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$av().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.w(z,"|")},
q:{
ac:function(a){return new Z.aX(a)}}}}],["","",,D,{"^":"",fb:{"^":"a;"},aQ:{"^":"a;0a,0b,0c",
L:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.H(y,new D.fv(z))
return x!==0},
fL:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.L(y)}}},
ae:function(a){return this.fL(a,!0,!1)},
q:{
al:function(){var z=new D.aQ()
z.a=H.b([],[{func:1,ret:-1,args:[D.w]}])
z.c=0
return z}}},fv:{"^":"r:28;a",
$1:function(a){var z
H.e(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"a;a,0b"},cq:{"^":"w;c,d,a,0b,$ti"},cr:{"^":"w;c,d,a,0b,$ti"},P:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",d9:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"kV<"}},dt:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},fM:{"^":"w;c,a,0b"},fN:{"^":"a;0a,0b,0c,0d",
fC:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.fM(a,this)
y.b=!0
return z.L(y)},
fw:function(a){this.c=a.b
this.d.O(0,a.a)
return!1}},fX:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aP:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aF(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.S(y.a+x*w,y.b+v*u)
u=this.a.gbC()
s=new X.dB(a,new V.S(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bN:function(a,b){this.r=a.a
return!1},
aG:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dd()
if(typeof z!=="number")return z.d7()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.L(this.aP(a,b))
return!0},
aF:function(a,b){return!1},
fD:function(a){return!1},
e5:function(a,b,c){return}},bh:{"^":"a;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bh))return!1
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
return z+(this.c?"Shift+":"")}},dB:{"^":"dH;x,y,z,Q,ch,c,d,e,a,0b"},hc:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
dQ:function(a,b,c){var z,y,x
z=new P.aF(Date.now(),!1)
y=this.a.gbC()
x=new X.dB(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bN:function(a,b){this.f=a.a
return!1},
aG:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dd()
if(typeof z!=="number")return z.d7()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.L(this.dQ(a,b,!0))
return!0},
aF:function(a,b){return!1},
fE:function(a,b){return!1}},dH:{"^":"w;"},ib:{"^":"dH;x,y,z,Q,ch,c,d,e,a,0b"},ic:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aP:function(a,b){var z,y,x,w
H.v(a,"$isc",[V.S],"$asc")
z=new P.aF(Date.now(),!1)
y=a.length>0?a[0]:new V.S(0,0)
x=this.a.gbC()
w=new X.ib(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fB:function(a){var z
H.v(a,"$isc",[V.S],"$asc")
z=this.b
if(z==null)return!1
z.L(this.aP(a,!0))
return!0},
fz:function(a){var z
H.v(a,"$isc",[V.S],"$asc")
z=this.c
if(z==null)return!1
z.L(this.aP(a,!0))
return!0},
fA:function(a){H.v(a,"$isc",[V.S],"$asc")
return!1}},iv:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbC:function(){var z=this.a
return V.dM(0,0,(z&&C.k).gaX(z).c,C.k.gaX(z).d)},
ca:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dt(z,new X.bh(y,a.altKey,a.shiftKey))},
am:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bh(y,a.altKey,a.shiftKey)},
bt:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bh(y,a.altKey,a.shiftKey)},
a9:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Z()
v=z.top
if(typeof x!=="number")return x.Z()
return new V.S(y-w,x-v)},
ay:function(a){return new V.bt(a.movementX,a.movementY)},
bp:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.S])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.e.X(u.pageX)
C.e.X(u.pageY)
s=z.left
C.e.X(u.pageX)
C.a.h(y,new V.S(t-s,C.e.X(u.pageY)-z.top))}return y},
a7:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.d9(z,new X.bh(y,a.altKey,a.shiftKey))},
h7:[function(a){this.f=!0},"$1","ge1",4,0,4],
h1:[function(a){this.f=!1},"$1","gdW",4,0,4],
h4:[function(a){if(this.f)a.preventDefault()},"$1","gdZ",4,0,4],
h9:[function(a){var z
H.l(a,"$isbf")
if(!this.f)return
z=this.ca(a)
if(this.b.fC(z))a.preventDefault()},"$1","ge3",4,0,15],
h8:[function(a){var z
H.l(a,"$isbf")
if(!this.f)return
z=this.ca(a)
this.b.fw(z)},"$1","ge2",4,0,15],
hb:[function(a){var z,y,x,w
H.l(a,"$isam")
z=this.a
z.focus()
this.f=!0
this.am(a)
if(this.x){y=this.a7(a)
x=this.ay(a)
if(this.d.bN(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a7(a)
w=this.a9(a)
if(this.c.bN(y,w))a.preventDefault()},"$1","ge6",4,0,3],
hd:[function(a){var z,y,x
H.l(a,"$isam")
this.am(a)
z=this.a7(a)
if(this.x){y=this.ay(a)
if(this.d.aG(z,y))a.preventDefault()
return}if(this.r)return
x=this.a9(a)
if(this.c.aG(z,x))a.preventDefault()},"$1","ge8",4,0,3],
h6:[function(a){var z,y,x,w
H.l(a,"$isam")
z=this.a
if(!(z&&C.k).gaX(z).cr(0,new P.bk(a.clientX,a.clientY,[P.N]))){this.am(a)
y=this.a7(a)
if(this.x){x=this.ay(a)
if(this.d.aG(y,x))a.preventDefault()
return}if(this.r)return
w=this.a9(a)
if(this.c.aG(y,w))a.preventDefault()}},"$1","ge0",4,0,3],
hc:[function(a){var z,y,x
H.l(a,"$isam")
this.am(a)
z=this.a7(a)
if(this.x){y=this.ay(a)
if(this.d.aF(z,y))a.preventDefault()
return}if(this.r)return
x=this.a9(a)
if(this.c.aF(z,x))a.preventDefault()},"$1","ge7",4,0,3],
h5:[function(a){var z,y,x,w
H.l(a,"$isam")
z=this.a
if(!(z&&C.k).gaX(z).cr(0,new P.bk(a.clientX,a.clientY,[P.N]))){this.am(a)
y=this.a7(a)
if(this.x){x=this.ay(a)
if(this.d.aF(y,x))a.preventDefault()
return}if(this.r)return
w=this.a9(a)
if(this.c.aF(y,w))a.preventDefault()}},"$1","ge_",4,0,3],
he:[function(a){var z,y
H.l(a,"$isbw")
this.am(a)
z=new V.bt((a&&C.r).gf6(a),C.r.gf7(a)).C(0,180)
if(this.x){if(this.d.fD(z))a.preventDefault()
return}if(this.r)return
y=this.a9(a)
if(this.c.fE(z,y))a.preventDefault()},"$1","ge9",4,0,36],
hf:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a7(this.y)
v=this.a9(this.y)
this.d.e5(w,v,x)}},"$1","gea",4,0,4],
hk:[function(a){var z
H.l(a,"$isaW")
this.a.focus()
this.f=!0
this.bt(a)
z=this.bp(a)
if(this.e.fB(z))a.preventDefault()},"$1","geg",4,0,9],
hi:[function(a){var z
H.l(a,"$isaW")
this.bt(a)
z=this.bp(a)
if(this.e.fz(z))a.preventDefault()},"$1","gee",4,0,9],
hj:[function(a){var z
H.l(a,"$isaW")
this.bt(a)
z=this.bp(a)
if(this.e.fA(z))a.preventDefault()},"$1","gef",4,0,9]}}],["","",,D,{"^":"",bZ:{"^":"a;0a,0b,0c,0d",
ah:[function(a){var z
H.l(a,"$isw")
z=this.d
if(!(z==null))z.L(a)},function(){return this.ah(null)},"fU","$1","$0","gdu",0,2,0],
$isT:1,
$isas:1},T:{"^":"a;",$isas:1},fO:{"^":"aO;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
ah:function(a){var z=this.Q
if(!(z==null))z.L(a)},
e4:[function(a){var z
H.l(a,"$isw")
z=this.ch
if(!(z==null))z.L(a)},function(){return this.e4(null)},"ha","$1","$0","gcd",0,2,0],
hg:[function(a){var z,y,x
H.v(a,"$isi",[D.T],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.dI(x))return!1}return!0},"$1","gec",4,0,31],
fZ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.T
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gcd(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.l(b[u],"$isT")
if(t instanceof D.bZ)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aQ()
s.a=H.b([],v)
s.c=0
t.d=s}H.e(x,w)
C.a.h(s.a,x)}z=new D.cq(a,b,this,[z])
z.b=!0
this.ah(z)},"$2","gdT",8,0,16],
hh:[function(a,b){var z,y,x,w,v,u,t,s
z=D.T
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gcd(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.l(b[u],"$isT")
if(t instanceof D.bZ)C.a.O(this.e,t)
s=t.d
if(s==null){s=new D.aQ()
s.a=H.b([],v)
s.c=0
t.d=s}H.e(x,w)
C.a.O(s.a,x)}z=new D.cr(a,b,this,[z])
z.b=!0
this.ah(z)},"$2","ged",8,0,16],
dI:function(a){var z=C.a.aY(this.e,a)
return z},
$asi:function(){return[D.T]},
$asaO:function(){return[D.T]}},hm:{"^":"a;",$isT:1,$isas:1},hT:{"^":"a;",$isT:1,$isas:1},i2:{"^":"a;",$isT:1,$isas:1},i3:{"^":"a;",$isT:1,$isas:1},i4:{"^":"a;",$isT:1,$isas:1}}],["","",,V,{"^":"",
kX:[function(a,b){if(typeof b!=="number")return b.Z()
if(typeof a!=="number")return H.y(a)
return Math.abs(b-a)<=1e-9},"$2","h9",8,0,30],
d0:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.dc(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.i.ad("null",c)
return C.i.ad(C.e.d4($.m.$2(a,0)?0:a,b),c+b+1)},
b3:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isc",[P.t],"$asc")
z=H.b([],[P.k])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.G(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.R(z,u,C.i.ad(z[u],x))}return z},
U:{"^":"a;a,b,c",
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
return new V.U(z,y,x)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
bG:{"^":"a;a,b,c,d",
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
return new V.bG(z,y,x,w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bG))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
c5:{"^":"a;a,b,c,d,e,f,r,x,y",
Y:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.l(a5,"$isc5")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.e.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.e.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.e.k(t,s)
q=a5.b
p=C.e.k(z,q)
o=a5.e
n=C.e.k(w,o)
m=a5.x
l=C.e.k(t,m)
k=a5.c
z=C.e.k(z,k)
j=a5.f
w=C.e.k(w,j)
i=a5.y
t=C.e.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.e.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.e.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.e.k(d,s)
b=C.e.k(h,q)
a=C.e.k(f,o)
a0=C.e.k(d,m)
h=C.e.k(h,k)
f=C.e.k(f,j)
d=C.e.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.e.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.e.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.c5(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.k(a3,s),C.e.k(a1,q)+C.e.k(a2,o)+C.e.k(a3,m),C.e.k(a1,k)+C.e.k(a2,j)+C.e.k(a3,i))},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c5))return!1
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
z=[P.t]
y=V.b3(H.b([this.a,this.d,this.r],z),3,0)
x=V.b3(H.b([this.b,this.e,this.x],z),3,0)
w=V.b3(H.b([this.c,this.f,this.y],z),3,0)
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
Y:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
cS:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.y(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.y(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.y(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.y(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.y(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.y(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.y(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.y(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.cz()
a3=1/a2
a4=-w
a5=-i
return V.ar((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.l(a7,"$isah")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.y(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.y(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.y(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.y(s)
r=a7.b
if(typeof r!=="number")return H.y(r)
q=a7.f
if(typeof q!=="number")return H.y(q)
p=a7.z
if(typeof p!=="number")return H.y(p)
o=a7.cy
if(typeof o!=="number")return H.y(o)
n=a7.c
if(typeof n!=="number")return H.y(n)
m=a7.r
if(typeof m!=="number")return H.y(m)
l=a7.Q
if(typeof l!=="number")return H.y(l)
k=a7.db
if(typeof k!=="number")return H.y(k)
j=a7.d
if(typeof j!=="number")return H.y(j)
i=a7.x
if(typeof i!=="number")return H.y(i)
h=a7.ch
if(typeof h!=="number")return H.y(h)
g=a7.dx
if(typeof g!=="number")return H.y(g)
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
return V.ar(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
bS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.y(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.y(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.y(l)
return new V.a3(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
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
i:function(a){return this.I()},
cR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.b3(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b3(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b3(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b3(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
I:function(){return this.cR("",3,0)},
v:function(a){return this.cR(a,3,0)},
q:{
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cz:function(){return V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dA:function(a,b,c){var z,y,x,w,v
z=c.C(0,Math.sqrt(c.G(c)))
y=b.aa(z)
x=y.C(0,Math.sqrt(y.G(y)))
w=z.aa(x)
v=new V.H(a.a,a.b,a.c)
return V.ar(x.a,w.a,z.a,x.aw(0).G(v),x.b,w.b,z.b,w.aw(0).G(v),x.c,w.c,z.c,z.aw(0).G(v),0,0,0,1)}}},
S:{"^":"a;n:a>,p:b>",
k:function(a,b){return new V.S(this.a*b,this.b*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
a3:{"^":"a;n:a>,p:b>,c",
E:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
Z:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
dL:{"^":"a;n:a>,p:b>,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"},
q:{
dM:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)}}},
bt:{"^":"a;a,b",
fi:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return Math.sqrt(z*z+y*y)},"$0","gl",1,0,17],
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.bt(z*b,y*b)},
C:function(a,b){var z,y
if($.m.$2(b,0))return new V.bt(0,0)
z=this.a
if(typeof z!=="number")return z.C()
y=this.b
if(typeof y!=="number")return y.C()
return new V.bt(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bt))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
H:{"^":"a;a,b,c",
fi:[function(a){return Math.sqrt(this.G(this))},"$0","gl",1,0,17],
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aa:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
aw:function(a){return new V.H(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
C:function(a,b){if($.m.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
cT:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dd:{"^":"bN;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.al()
this.b=z}return z},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dd))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
q:{
de:function(a){var z=new U.dd()
z.a=a
return z}}},bN:{"^":"fb;"},dO:{"^":"bN;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gD:function(){var z=this.y
if(z==null){z=D.al()
this.y=z}return z},
al:function(a){var z=this.y
if(!(z==null))z.L(a)},
sd6:function(a){var z,y
a=V.d0(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.P("yaw",y,a,this,[P.t])
z.b=!0
this.al(z)}},
scX:function(a,b){var z,y
b=V.d0(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.P("pitch",y,b,this,[P.t])
z.b=!0
this.al(z)}},
sd0:function(a){var z,y
a=V.d0(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.P("roll",y,a,this,[P.t])
z.b=!0
this.al(z)}},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dO))return!1
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
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"}}}],["","",,M,{"^":"",ft:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ai:[function(a){var z
H.l(a,"$isw")
z=this.x
if(!(z==null))z.L(a)},function(){return this.ai(null)},"fV","$1","$0","ga3",0,2,0],
h2:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aG
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga3(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.aQ()
s.a=H.b([],v)
s.c=0
t.sS(s)}s=t.gS()
s.toString
H.e(x,w)
C.a.h(s.a,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","gdX",8,0,6],
h3:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aG
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga3(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.aQ()
s.a=H.b([],v)
s.c=0
t.sS(s)}s=t.gS()
s.toString
H.e(x,w)
C.a.O(s.a,x)}}z=new D.cr(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","gdY",8,0,6],
sd2:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gD()
z.toString
y=H.e(this.ga3(),{func:1,ret:-1,args:[D.w]})
C.a.O(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gD()
z.toString
y=H.e(this.ga3(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.P("technique",x,this.c,this,[O.cE])
z.b=!0
this.ai(z)}},
gD:function(){var z=this.x
if(z==null){z=D.al()
this.x=z}return z},
av:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.d_(this.c)
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
if(typeof x!=="number")return H.y(x)
u=C.f.X(v.a*x)
if(typeof w!=="number")return H.y(w)
t=C.f.X(v.b*w)
s=C.f.X(v.c*x)
a.c=s
v=C.f.X(v.d*w)
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
s.cZ(V.ar(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dF
if(y==null){y=V.dA(new V.a3(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.dF=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.k(0,m)}a.db.cZ(m)
z=this.c
if(z!=null)z.bc(0,a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.x(z,0)]);z.B();)z.d.bc(0,a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.x(z,0)]);z.B();)z.d.av(a)
this.a.toString
a.cy.bO()
a.db.bO()
this.b.toString
a.cY()},
$ism2:1}}],["","",,A,{"^":"",d4:{"^":"a;a,b,c"},f5:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
f9:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
f8:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},h3:{"^":"dP;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ar,0ab,0as,0aZ,0cu,0cv,0b_,0b0,0cw,0cz,0b1,0b2,0cA,0cB,0b3,0cC,0cD,0b4,0cE,0cF,0b5,0b6,0b7,0cG,0cH,0b8,0b9,0cI,0cJ,0ba,0cK,0bF,0cL,0bG,0cM,0bH,0cN,0bI,0cO,0bJ,0cP,0bK,a,b,0c,0d,0e,0f,0r",
dk:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bP("")
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
a2.eB(z)
a2.eI(z)
a2.eC(z)
a2.eQ(z)
a2.eR(z)
a2.eK(z)
a2.eV(z)
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
z=new P.bP("")
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
v.eF(z)
v.eA(z)
v.eD(z)
v.eG(z)
v.eO(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.eM(z)
v.eN(z)}v.eJ(z)
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
p=H.b([],[P.k])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.w(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.eE(z)
v.eL(z)
v.eP(z)
v.eS(z)
v.eT(z)
v.eU(z)
v.eH(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.k])
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
this.c=this.cb(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cb(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.eO(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.p(P.o("Failed to link shader: "+H.j(m)))}this.eu()
this.ew()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.f(this.r.m(0,"invViewMat"),"$isat")
if(y)this.db=H.f(this.r.m(0,"objMat"),"$isat")
if(w)this.dx=H.f(this.r.m(0,"viewObjMat"),"$isat")
this.fr=H.f(this.r.m(0,"projViewObjMat"),"$isat")
if(a2.x2)this.go=H.f(this.r.m(0,"txt2DMat"),"$iscI")
if(a2.y1)this.id=H.f(this.r.m(0,"txtCubeMat"),"$isat")
if(a2.y2)this.k1=H.f(this.r.m(0,"colorMat"),"$isat")
this.k3=H.b([],[A.at])
y=a2.ar
if(y>0){this.k2=H.l(this.r.m(0,"bendMatCount"),"$isE")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(k,"$isat"))}}y=a2.a
if(y!==C.b){this.k4=H.f(this.r.m(0,"emissionClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.r1=H.f(this.r.m(0,"emissionTxt"),"$isaa")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.d:this.r2=H.f(this.r.m(0,"emissionTxt"),"$isab")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a2.b
if(y!==C.b){this.ry=H.f(this.r.m(0,"ambientClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.x1=H.f(this.r.m(0,"ambientTxt"),"$isaa")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.d:this.x2=H.f(this.r.m(0,"ambientTxt"),"$isab")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a2.c
if(y!==C.b){this.y2=H.f(this.r.m(0,"diffuseClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.ar=H.f(this.r.m(0,"diffuseTxt"),"$isaa")
this.as=H.f(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.d:this.ab=H.f(this.r.m(0,"diffuseTxt"),"$isab")
this.as=H.f(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a2.d
if(y!==C.b){this.aZ=H.f(this.r.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cu=H.f(this.r.m(0,"invDiffuseTxt"),"$isaa")
this.b_=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.d:this.cv=H.f(this.r.m(0,"invDiffuseTxt"),"$isab")
this.b_=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a2.e
if(y!==C.b){this.b2=H.f(this.r.m(0,"shininess"),"$isR")
this.b0=H.f(this.r.m(0,"specularClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cw=H.f(this.r.m(0,"specularTxt"),"$isaa")
this.b1=H.f(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.d:this.cz=H.f(this.r.m(0,"specularTxt"),"$isab")
this.b1=H.f(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a2.f){case C.b:break
case C.h:break
case C.c:this.cA=H.f(this.r.m(0,"bumpTxt"),"$isaa")
this.b3=H.f(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.d:this.cB=H.f(this.r.m(0,"bumpTxt"),"$isab")
this.b3=H.f(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a2.dy){this.cC=H.f(this.r.m(0,"envSampler"),"$isab")
this.cD=H.f(this.r.m(0,"nullEnvTxt"),"$isE")
y=a2.r
if(y!==C.b){this.b4=H.f(this.r.m(0,"reflectClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cE=H.f(this.r.m(0,"reflectTxt"),"$isaa")
this.b5=H.f(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.d:this.cF=H.f(this.r.m(0,"reflectTxt"),"$isab")
this.b5=H.f(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a2.x
if(y!==C.b){this.b6=H.f(this.r.m(0,"refraction"),"$isR")
this.b7=H.f(this.r.m(0,"refractClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cG=H.f(this.r.m(0,"refractTxt"),"$isaa")
this.b8=H.f(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.d:this.cH=H.f(this.r.m(0,"refractTxt"),"$isab")
this.b8=H.f(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a2.y
if(y!==C.b){this.b9=H.f(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.h:break
case C.c:this.cI=H.f(this.r.m(0,"alphaTxt"),"$isaa")
this.ba=H.f(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.d:this.cJ=H.f(this.r.m(0,"alphaTxt"),"$isab")
this.ba=H.f(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.bF=H.b([],[A.ed])
this.bG=H.b([],[A.ee])
this.bH=H.b([],[A.ef])
this.bI=H.b([],[A.eg])
this.bJ=H.b([],[A.eh])
this.bK=H.b([],[A.ei])
if(a2.k2){y=a2.z
if(y>0){this.cK=H.l(this.r.m(0,"dirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.bF;(x&&C.a).h(x,new A.ed(l,k,j))}}y=a2.Q
if(y>0){this.cL=H.l(this.r.m(0,"pntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.r
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isD")
x=this.r
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isR")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isR")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isR")
x=this.bG;(x&&C.a).h(x,new A.ee(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.cM=H.l(this.r.m(0,"spotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isD")
x=this.r
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isD")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isR")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isR")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isR")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isR")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isR")
x=this.bH;(x&&C.a).h(x,new A.ef(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.cN=H.l(this.r.m(0,"txtDirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isD")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isD")
x=this.r
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isD")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isE")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isaa")
x=this.bI;(x&&C.a).h(x,new A.eg(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.cO=H.l(this.r.m(0,"txtPntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$iscI")
x=this.r
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isD")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isE")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isR")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isR")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isR")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isab")
x=this.bJ;(x&&C.a).h(x,new A.eh(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.cP=H.l(this.r.m(0,"txtSpotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isD")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isD")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isD")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isD")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isD")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isE")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isD")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isR")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isR")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isR")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isR")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a1,"$isaa")
x=this.bK;(x&&C.a).h(x,new A.ei(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a0:function(a,b,c){b.a.uniform1i(b.d,1)},
V:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
h2:function(a,b){var z,y
z=a.ab
y=new A.h3(b,z)
y.dn(b,z)
y.dk(a,b)
return y}}},h6:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ar,ab,as",
eB:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ar+"];\n"
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
eI:function(a){var z
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
eC:function(a){var z
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
eQ:function(a){var z,y
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
eR:function(a){var z,y
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
eK:function(a){var z
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
eV:function(a){var z
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
a8:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.bY(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
eF:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.a8(a,z,"emission")
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
eA:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.a8(a,z,"ambient")
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
eD:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.a8(a,z,"diffuse")
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
eG:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.a8(a,z,"invDiffuse")
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
eO:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.a8(a,z,"specular")
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
eJ:function(a){var z,y
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
eM:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.a8(a,z,"reflect")
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
eN:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.a8(a,z,"refract")
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
eE:function(a){var z,y
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
eL:function(a){var z,y
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
eP:function(a){var z,y
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
eS:function(a){var z,y,x
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
eT:function(a){var z,y,x
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
eU:function(a){var z,y,x
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
eH:function(a){var z
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
i:function(a){return this.ab}},ed:{"^":"a;a,b,c"},eg:{"^":"a;a,b,c,d,e,f,r,x"},ee:{"^":"a;a,b,c,d,e,f,r"},eh:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ef:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ei:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dP:{"^":"ci;",
dn:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cb:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eO(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.o("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
eu:function(){var z,y,x,w,v,u
z=H.b([],[A.d4])
y=this.a
x=H.X(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d4(y,v.name,u))}this.f=new A.f5(z)},
ew:function(){var z,y,x,w,v,u
z=H.b([],[A.a2])
y=this.a
x=H.X(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.f5(v.type,v.size,v.name,u))}this.r=new A.io(z)},
ak:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.cH(z,y,b,a,c)},
dJ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aa(z,y,b,c)
else return A.cH(z,y,b,a,c)},
dK:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ab(z,y,b,c)
else return A.cH(z,y,b,a,c)},
aU:function(a,b){return new P.eq(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
f5:function(a,b,c,d){switch(a){case 5120:return this.ak(b,c,d)
case 5121:return this.ak(b,c,d)
case 5122:return this.ak(b,c,d)
case 5123:return this.ak(b,c,d)
case 5124:return this.ak(b,c,d)
case 5125:return this.ak(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.ii(this.a,this.e,c,d)
case 35665:return new A.D(this.a,this.e,c,d)
case 35666:return new A.il(this.a,this.e,c,d)
case 35667:return new A.ij(this.a,this.e,c,d)
case 35668:return new A.ik(this.a,this.e,c,d)
case 35669:return new A.im(this.a,this.e,c,d)
case 35674:return new A.iq(this.a,this.e,c,d)
case 35675:return new A.cI(this.a,this.e,c,d)
case 35676:return new A.at(this.a,this.e,c,d)
case 35678:return this.dJ(b,c,d)
case 35680:return this.dK(b,c,d)
case 35670:throw H.d(this.aU("BOOL",c))
case 35671:throw H.d(this.aU("BOOL_VEC2",c))
case 35672:throw H.d(this.aU("BOOL_VEC3",c))
case 35673:throw H.d(this.aU("BOOL_VEC4",c))
default:throw H.d(P.o("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},bX:{"^":"a;a,b",
i:function(a){return this.b}},a2:{"^":"a;"},io:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.I()},
fb:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
I:function(){return this.fb("\n")}},E:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},ij:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},ik:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},im:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},ih:{"^":"a2;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
cH:function(a,b,c,d,e){var z=new A.ih(a,b,c,e)
z.f=d
z.e=P.fV(d,0,!1,P.C)
return z}}},R:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},ii:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},D:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},il:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iq:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cI:{"^":"a2;a,b,c,d",
a2:function(a){var z=new Float32Array(H.bz(H.v(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},at:{"^":"a2;a,b,c,d",
a2:function(a){var z=new Float32Array(H.bz(H.v(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},aa:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ab:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
kK:function(a,b,c,d){return F.ki(c,a,d,b,new F.kL())},
ki:function(a,b,c,d,e){var z=F.kI(a,b,new F.kj(H.e(e,{func:1,ret:V.a3,args:[P.t]}),d,b,c),null)
if(z==null)return
z.an()
z.fn(new F.iD(),new F.hh())
return z},
kI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.e(c,{func:1,ret:-1,args:[F.au,P.t,P.t]})
if(a<1)return
if(b<1)return
z=new F.dQ()
y=new F.iy(z)
y.b=!1
x=[F.au]
y.c=H.b([],x)
z.a=y
y=new F.hN(z)
y.b=H.b([],[F.dG])
z.b=y
y=new F.hM(z)
y.b=H.b([],[F.du])
z.c=y
y=new F.hL(z)
y.b=H.b([],[F.ag])
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cJ(null,null,new V.bG(x,0,0,1),null,null,new V.S(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.cs(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cJ(null,null,new V.bG(o,n,m,1),null,null,new V.S(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.cs(d))}}z.d.eW(a+1,b+1,w)
return z},
kL:{"^":"r:32;",
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)}},
kj:{"^":"r:33;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.d1(y.$1(z),x)
x=J.d1(y.$1(z+3.141592653589793/this.c),x).Z(0,w)
x=new V.H(x.a,x.b,x.c)
v=x.C(0,Math.sqrt(x.G(x)))
u=new V.H(1,0,0)
y=v.aa(!v.t(0,u)?new V.H(0,0,1):u)
t=y.C(0,Math.sqrt(y.G(y)))
y=t.aa(v)
u=y.C(0,Math.sqrt(y.G(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
x=w.E(0,new V.a3(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.Q(a.f,x)){a.f=x
y=a.a
if(y!=null)y.U()}}},
ag:{"^":"a;0a,0b,0c,0d,0e",
az:function(){if(!this.gct()){C.a.O(this.a.a.d.b,this)
this.a.a.U()}this.ei()
this.ej()
this.ek()},
eq:function(a){this.a=a
C.a.h(a.d.b,this)},
er:function(a){this.b=a
C.a.h(a.d.c,this)},
es:function(a){this.c=a
C.a.h(a.d.d,this)},
ei:function(){var z=this.a
if(z!=null){C.a.O(z.d.b,this)
this.a=null}},
ej:function(){var z=this.b
if(z!=null){C.a.O(z.d.c,this)
this.b=null}},
ek:function(){var z=this.c
if(z!=null){C.a.O(z.d.d,this)
this.c=null}},
gct:function(){return this.a==null||this.b==null||this.c==null},
dD:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.cT())return
return v.C(0,Math.sqrt(v.G(v)))},
dG:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.Z(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.C(0,Math.sqrt(z.G(z)))
z=w.Z(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.aa(z.C(0,Math.sqrt(z.G(z))))
return z.C(0,Math.sqrt(z.G(z)))},
bB:function(){if(this.d!=null)return!0
var z=this.dD()
if(z==null){z=this.dG()
if(z==null)return!1}this.d=z
this.a.a.U()
return!0},
dC:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.cT())return
return v.C(0,Math.sqrt(v.G(v)))},
dF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.Z(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.aw(0)}else{l=(z-q.b)/n
z=r.Z(0,u).k(0,l).E(0,u).Z(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.G(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.aw(0)}z=this.d
if(z!=null){k=z.C(0,Math.sqrt(z.G(z)))
z=k.aa(m)
z=z.C(0,Math.sqrt(z.G(z))).aa(k)
m=z.C(0,Math.sqrt(z.G(z)))}return m},
bz:function(){if(this.e!=null)return!0
var z=this.dC()
if(z==null){z=this.dF()
if(z==null)return!1}this.e=z
this.a.a.U()
return!0},
gf1:function(a){if(J.Q(this.a,this.b))return!0
if(J.Q(this.b,this.c))return!0
if(J.Q(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var z,y
if(this.gct())return a+"disposed"
z=a+C.i.ad(J.af(this.a.e),0)+", "+C.i.ad(J.af(this.b.e),0)+", "+C.i.ad(J.af(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
I:function(){return this.v("")},
q:{
c0:function(a,b,c){var z,y,x
z=new F.ag()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.eq(a)
z.er(b)
z.es(c)
C.a.h(z.a.a.d.b,z)
z.a.a.U()
return z}}},
fw:{"^":"a;"},
hS:{"^":"fw;",
aD:function(a,b,c){var z,y
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
du:{"^":"a;"},
fP:{"^":"a;"},
ig:{"^":"fP;",
aD:function(a,b,c){var z,y
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
dG:{"^":"a;"},
dQ:{"^":"a;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.al()
this.e=z}return z},
an:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.an()||!1
if(!this.a.an())y=!1
z=this.e
if(!(z==null))z.ae(0)
return y},
dO:function(a,b,c,d,e){var z,y,x
H.v(d,"$isc",[F.au],"$asc")
H.v(e,"$isc",[P.C],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.aD(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fn:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.au],x=[P.C];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.dO(a,v,y,u,t))b.fm(u)}this.a.u()
this.c.bP()
this.d.bP()
this.b.fH()
this.c.bQ(new F.ig())
this.d.bQ(new F.hS())
z=this.e
if(!(z==null))z.ae(0)},
f_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ay()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$bv().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$av().a)!==0)++w
v=b.gbX(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.d7])
for(r=0,q=0;q<w;++q){p=b.eY(q)
o=p.gbX(p)
C.a.R(s,q,new Z.d7(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].fj(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.R(t,l,m[k]);++l}}r+=o}H.v(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bz(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d8(new Z.eo(34962,j),s,b)
i.b=H.b([],[Z.c2])
if(this.b.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)}f=Z.cK(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c2(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)}f=Z.cK(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c2(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.u()
C.a.h(h,g.e)}f=Z.cK(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c2(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.w(z,"\n")},
a1:function(a){var z=this.e
if(!(z==null))z.L(a)},
U:function(){return this.a1(null)}},
hL:{"^":"a;a,0b",
eW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isc",[F.au],"$asc")
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
C.a.h(z,F.c0(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c0(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.c0(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.c0(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
bQ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aD(0,v,t)){v.az()
break}}}}},
bP:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gf1(x)
if(y)x.az()}},
an:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bB())x=!1
return x},
bA:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bz())x=!1
return x},
i:function(a){return this.I()},
v:function(a){var z,y,x,w
z=H.b([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
I:function(){return this.v("")}},
hM:{"^":"a;a,0b",
gl:function(a){return this.b.length},
bQ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aD(0,v,t)){v.az()
break}}}}},
bP:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.Q(x.a,x.b)
if(y)x.az()}},
i:function(a){return this.I()},
v:function(a){var z,y,x,w
z=H.b([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.w(z,"\n")},
I:function(){return this.v("")}},
hN:{"^":"a;a,0b",
gl:function(a){return this.b.length},
fH:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.az()}},
i:function(a){return this.I()},
v:function(a){var z,y,x,w
z=H.b([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
I:function(){return this.v("")}},
au:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cs:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cJ(this.cx,x,u,z,y,w,v,a,t)},
fj:function(a){var z,y
z=J.J(a)
if(z.t(a,$.$get$ay())){z=this.f
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$ax())){z=this.r
y=[P.t]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aw())){z=this.x
y=[P.t]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$az())){z=this.y
y=[P.t]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.t(a,$.$get$aA())){z=this.z
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bu())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bv())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$aY()))return H.b([this.ch],[P.t])
else if(z.t(a,$.$get$av())){z=H.b([-1,-1,-1,-1],[P.t])
return z}else return H.b([],[P.t])},
bB:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.H(0,new F.iI(z))
z=z.a
this.r=z.C(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
bz:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.H(0,new F.iH(z))
z=z.a
this.x=z.C(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ae(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var z,y,x
z=H.b([],[P.k])
C.a.h(z,C.i.ad(J.af(this.e),0))
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
C.a.h(z,"-")
x=C.a.w(z,", ")
return a+"{"+x+"}"},
I:function(){return this.v("")},
q:{
cJ:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.au()
y=new F.iG(z)
y.b=H.b([],[F.dG])
z.b=y
y=new F.iC(z)
x=[F.du]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iz(z)
x=[F.ag]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$el()
z.e=0
y=$.$get$ay()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ax().a)!==0?e:null
z.x=(x&$.$get$aw().a)!==0?b:null
z.y=(x&$.$get$az().a)!==0?f:null
z.z=(x&$.$get$aA().a)!==0?g:null
z.Q=(x&$.$get$em().a)!==0?c:null
z.ch=(x&$.$get$aY().a)!==0?i:0
z.cx=(x&$.$get$av().a)!==0?a:null
return z}}},
iI:{"^":"r:7;a",
$1:function(a){var z,y
H.l(a,"$isag")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
iH:{"^":"r:7;a",
$1:function(a){var z,y
H.l(a,"$isag")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
iy:{"^":"a;a,0b,0c",
u:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.U()
return!0},
gl:function(a){return this.c.length},
an:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bB()
return!0},
bA:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bz()
return!0},
f0:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.C(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.L(null)}}}}return!0},
i:function(a){return this.I()},
v:function(a){var z,y,x,w
this.u()
z=H.b([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
I:function(){return this.v("")}},
iz:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
H:function(a,b){H.e(b,{func:1,ret:-1,args:[F.ag]})
C.a.H(this.b,b)
C.a.H(this.c,new F.iA(this,b))
C.a.H(this.d,new F.iB(this,b))},
i:function(a){return this.I()},
v:function(a){var z,y,x,w
z=H.b([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
I:function(){return this.v("")}},
iA:{"^":"r:7;a,b",
$1:function(a){H.l(a,"$isag")
if(!J.Q(a.a,this.a))this.b.$1(a)}},
iB:{"^":"r:7;a,b",
$1:function(a){var z
H.l(a,"$isag")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},
iC:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.I()},
v:function(a){var z,y,x,w
z=H.b([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
I:function(){return this.v("")}},
iE:{"^":"a;"},
iD:{"^":"iE;",
aD:function(a,b,c){return J.Q(b.f,c.f)}},
iF:{"^":"a;"},
hh:{"^":"iF;",
fm:function(a){var z,y,x,w,v,u,t,s
H.v(a,"$isc",[F.au],"$asc")
z=new V.H(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.H(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.C(0,Math.sqrt(z.G(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.C(0,Math.sqrt(u))
if(!J.Q(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.L(null)}}}return}},
iG:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.I()},
v:function(a){var z,y,x,w
z=H.b([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
I:function(){return this.v("")}}}],["","",,O,{"^":"",h1:{"^":"cE;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gD:function(){var z=this.dy
if(z==null){z=D.al()
this.dy=z}return z},
a_:[function(a){var z
H.l(a,"$isw")
z=this.dy
if(!(z==null))z.L(a)},function(){return this.a_(null)},"fW","$1","$0","gdv",0,2,0],
en:[function(a){H.l(a,"$isw")
this.a=null
this.a_(a)},function(){return this.en(null)},"hl","$1","$0","gem",0,2,0],
h_:[function(a,b){var z=V.ah
z=new D.cq(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a_(z)},"$2","gdU",8,0,18],
h0:[function(a,b){var z=V.ah
z=new D.cr(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a_(z)},"$2","gdV",8,0,18],
c8:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.T(z.e.length+3,4)*4
x=C.f.T(z.f.length+3,4)*4
w=C.f.T(z.r.length+3,4)*4
v=C.f.T(z.x.length+3,4)*4
u=C.f.T(z.y.length+3,4)*4
t=C.f.T(z.z.length+3,4)*4
s=C.f.T(this.e.a.length+3,4)*4
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
a6=$.$get$ay()
if(c){z=$.$get$ax()
a6=new Z.aX(a6.a|z.a)}if(b){z=$.$get$aw()
a6=new Z.aX(a6.a|z.a)}if(a){z=$.$get$az()
a6=new Z.aX(a6.a|z.a)}if(a0){z=$.$get$aA()
a6=new Z.aX(a6.a|z.a)}if(a2){z=$.$get$av()
a6=new Z.aX(a6.a|z.a)}return new A.h6(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
K:function(a,b){H.v(a,"$isc",[T.dX],"$asc")},
bc:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aq(z,z.length,0,[H.x(z,0)]);z.B();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.bS(x)}}},
fJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.c8()
y=a.fr.j(0,z.ab)
if(y==null){y=A.h2(z,a.a)
x=y.b
if(x.length===0)H.p(P.o("May not cache a shader with no name."))
if(a.fr.cq(0,x))H.p(P.o('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.R(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.as
z=b.e
if(!(z instanceof Z.d8)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.an()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bA()
t.a.bA()
t=t.e
if(!(t==null))t.ae(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.f0()
s=s.e
if(!(s==null))s.ae(0)}q=b.d.f_(new Z.iJ(a.a),v)
q.at($.$get$ay()).e=this.a.y.c
if(z)q.at($.$get$ax()).e=this.a.Q.c
if(u)q.at($.$get$aw()).e=this.a.z.c
if(w.rx)q.at($.$get$az()).e=this.a.ch.c
if(t)q.at($.$get$aA()).e=this.a.cx.c
if(w.x1)q.at($.$get$av()).e=this.a.cy.c
b.e=q}z=T.dX
p=H.b([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.f9()
if(w.fx){u=this.a
t=a.dx
t=t.gN(t)
u=u.db
u.toString
u.a2(t.Y(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gN(t)
s=a.dx
s=t.k(0,s.gN(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a2(t.Y(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gfF()
s=a.dx
s=t.k(0,s.gN(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a2(t.Y(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a2(t.Y(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a2(t.Y(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a2(C.y.Y(t,!0))}if(w.ar>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.h(s,n)
s=s[n]
t.toString
H.l(s,"$isah")
t=t.k3
if(n>=t.length)return H.h(t,n)
t=t[n]
m=new Float32Array(H.bz(H.v(s.Y(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.h:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.f.d)
u=this.a
t=this.f.d
u.a0(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.f.e)
u=this.a
t=this.f.e
u.V(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.h:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.r.d)
u=this.a
t=this.r.d
u.a0(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.r.e)
u=this.a
t=this.r.e
u.V(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.h:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.x.d)
u=this.a
t=this.x.d
u.a0(u.ar,u.as,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.x.e)
u=this.a
t=this.x.e
u.V(u.ab,u.as,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.h:u=this.a
t=this.y.f
u=u.aZ
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.y.d)
u=this.a
t=this.y.d
u.a0(u.cu,u.b_,t)
t=this.a
u=this.y.f
t=t.aZ
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.y.e)
u=this.a
t=this.y.e
u.V(u.cv,u.b_,t)
t=this.a
u=this.y.f
t=t.aZ
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.h:u=this.a
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
case C.c:this.K(p,this.z.d)
u=this.a
t=this.z.d
u.a0(u.cw,u.b1,t)
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
case C.d:this.K(p,this.z.e)
u=this.a
t=this.z.e
u.V(u.cz,u.b1,t)
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
u=this.a.cK
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bF
if(k>=s.length)return H.h(s,k)
h=s[k]
s=l.bS(i.a)
r=s.a
g=s.b
f=s.c
f=s.C(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.cL
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bG
if(k>=s.length)return H.h(s,k)
h=s[k]
s=i.gaH(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gbT(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aM(i.gaH(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga4(i)
f=h.d
g=s.gbb()
r=s.gaN()
s=s.gaW()
f.a.uniform3f(f.d,g,r,s)
s=i.gbu()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbv()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbw()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.cM
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bH
if(k>=s.length)return H.h(s,k)
h=s[k]
s=i.gaH(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gbT(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbE(i).ho()
f=h.c
g=s.gao(s)
r=s.gap(s)
s=s.gaq()
f.a.uniform3f(f.d,g,r,s)
s=l.aM(i.gaH(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga4(i)
r=h.e
g=s.gbb()
f=s.gaN()
s=s.gaW()
r.a.uniform3f(r.d,g,f,s)
s=i.ghn()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghm()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbu()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbv()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbw()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.cN
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
r=this.a.bI
if(k>=r.length)return H.h(r,k)
h=r[k]
r=i.gaJ()
H.v(p,"$isc",s,"$asc")
if(!C.a.aY(p,r)){r.saA(0,p.length)
C.a.h(p,r)}r=i.gbE(i)
g=h.d
f=r.gao(r)
e=r.gap(r)
r=r.gaq()
g.a.uniform3f(g.d,f,e,r)
r=i.gfT()
e=h.b
f=r.gao(r)
g=r.gap(r)
r=r.gaq()
e.a.uniform3f(e.d,f,g,r)
r=i.gaI(i)
g=h.c
f=r.gao(r)
e=r.gap(r)
r=r.gaq()
g.a.uniform3f(g.d,f,e,r)
r=l.bS(i.gbE(i))
e=r.a
f=r.b
g=r.c
g=r.C(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga4(i)
f=h.f
e=g.gbb()
r=g.gaN()
g=g.gaW()
f.a.uniform3f(f.d,e,r,g)
g=i.gaJ()
r=g.gaB(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gaB(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaA(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.cO
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
g=this.a.bJ
if(k>=g.length)return H.h(g,k)
h=g[k]
g=i.gaJ()
H.v(p,"$isc",r,"$asc")
if(!C.a.aY(p,g)){g.saA(0,p.length)
C.a.h(p,g)}d=l.k(0,i.gN(i))
g=i.gN(i).aM(new V.a3(0,0,0))
f=h.b
e=g.gn(g)
c=g.gp(g)
g=g.gbT(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aM(new V.a3(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.cS(0)
c=h.d
m=new Float32Array(H.bz(H.v(new V.c5(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).Y(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga4(i)
g=h.e
e=c.gbb()
f=c.gaN()
c=c.gaW()
g.a.uniform3f(g.d,e,f,c)
c=i.gaJ()
g=c.gaB(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gaB(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaA(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbu()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbv()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbw()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.cP
u.a.uniform1i(u.d,o)
u=a.db
l=u.gN(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bK
if(k>=s.length)return H.h(s,k)
h=s[k]
s=i.gaJ()
H.v(p,"$isc",z,"$asc")
if(!C.a.aY(p,s)){s.saA(0,p.length)
C.a.h(p,s)}s=i.gaH(i)
r=h.b
g=s.gn(s)
f=s.gp(s)
s=s.gbT(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbE(i)
f=h.c
g=s.gao(s)
r=s.gap(s)
s=s.gaq()
f.a.uniform3f(f.d,g,r,s)
s=i.gfT()
r=h.d
g=s.gao(s)
f=s.gap(s)
s=s.gaq()
r.a.uniform3f(r.d,g,f,s)
s=i.gaI(i)
f=h.e
g=s.gao(s)
r=s.gap(s)
s=s.gaq()
f.a.uniform3f(f.d,g,r,s)
s=l.aM(i.gaH(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaJ()
r=s.gaB(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gaB(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaA(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga4(i)
r=h.y
g=s.gbb()
f=s.gaN()
s=s.gaW()
r.a.uniform3f(r.d,g,f,s)
s=i.ghu()
f=h.z
f.a.uniform1f(f.d,s)
s=i.ghv()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbu()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbv()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbw()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.h:break
case C.c:this.K(p,this.Q.d)
z=this.a
u=this.Q.d
z.a0(z.cA,z.b3,u)
break
case C.d:this.K(p,this.Q.e)
z=this.a
u=this.Q.e
z.V(z.cB,z.b3,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gN(u).cS(0)
a.Q=u}z=z.fy
z.toString
z.a2(u.Y(0,!0))}if(w.dy){this.K(p,this.ch)
z=this.a
u=this.ch
z.V(z.cC,z.cD,u)
switch(w.r){case C.b:break
case C.h:z=this.a
u=this.cx.f
z=z.b4
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.K(p,this.cx.d)
z=this.a
u=this.cx.d
z.a0(z.cE,z.b5,u)
u=this.a
z=this.cx.f
u=u.b4
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.K(p,this.cx.e)
z=this.a
u=this.cx.e
z.V(z.cF,z.b5,u)
u=this.a
z=this.cx.f
u=u.b4
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.h:z=this.a
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
case C.c:this.K(p,this.cy.d)
z=this.a
u=this.cy.d
z.a0(z.cG,z.b8,u)
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
case C.d:this.K(p,this.cy.e)
z=this.a
u=this.cy.e
z.V(z.cH,z.b8,u)
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
case C.h:z=this.a
t=this.db.f
z=z.b9
z.a.uniform1f(z.d,t)
break
case C.c:this.K(p,this.db.d)
z=this.a
t=this.db.d
z.a0(z.cI,z.ba,t)
t=this.a
z=this.db.f
t=t.b9
t.a.uniform1f(t.d,z)
break
case C.d:this.K(p,this.db.e)
z=this.a
t=this.db.e
z.V(z.cJ,z.ba,t)
t=this.a
z=this.db.f
t=t.b9
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].aV(a)
z=b.e
z.aV(a)
z.av(a)
z.d5(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].d5(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.f8()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.c8().ab}},h4:{"^":"cx;0f,a,b,0c,0d,0e"},cx:{"^":"a;",
aR:["di",function(){}]},h5:{"^":"cx;a,b,0c,0d,0e"},aT:{"^":"cx;0f,a,b,0c,0d,0e",
ci:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.P(this.b+".color",z,a,this,[V.U])
y.b=!0
this.a.a_(y)}},
aR:["bg",function(){this.di()
this.ci(new V.U(1,1,1))}],
sa4:function(a,b){var z
if(this.c===C.b){this.c=C.h
this.aR()
z=this.a
z.a=null
z.a_(null)}this.ci(b)}},h7:{"^":"aT;0ch,0f,a,b,0c,0d,0e",
ep:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.P(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.a_(z)}},
aR:function(){this.bg()
this.ep(1)}},h8:{"^":"aT;0ch,0f,a,b,0c,0d,0e",
br:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.P(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.a_(z)}},
aR:function(){this.bg()
this.br(100)}},cE:{"^":"a;"}}],["","",,T,{"^":"",dX:{"^":"ci;"},i1:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",f4:{"^":"a;",
aC:function(a,b){return!0},
i:function(a){return"all"},
$isbM:1},bM:{"^":"a;"},dz:{"^":"a;",
aC:["dh",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].aC(0,b))return!0
return!1}],
i:["bZ",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbM:1},bi:{"^":"dz;0a",
aC:function(a,b){return!this.dh(0,b)},
i:function(a){return"!["+this.bZ(0)+"]"}},hJ:{"^":"a;0a",
dm:function(a){var z,y
if(a.a.length<=0)throw H.d(P.o("May not create a SetMatcher with zero characters."))
z=new H.aS(0,0,[P.C,P.ad])
for(y=new H.dx(a,a.gl(a),0,[H.aD(a,"q",0)]);y.B();)z.R(0,y.d,!0)
this.a=z},
aC:function(a,b){return this.a.cq(0,b)},
i:function(a){var z=this.a
return P.cD(new H.dw(z,[H.x(z,0)]),0,null)},
$isbM:1,
q:{
a_:function(a){var z=new V.hJ()
z.dm(a)
return z}}},dS:{"^":"a;a,b,0c,0d",
gfo:function(a){return this.b},
w:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.e1(this.a.F(0,b))
w.a=H.b([],[V.bM])
w.c=!1
C.a.h(this.c,w)
return w},
fa:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.aC(0,a))return w}return},
i:function(a){return this.b}},e_:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.eZ(this.b,"\n","\\n")
y=H.eZ(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},e0:{"^":"a;a,b,0c",
i:function(a){return this.b}},ia:{"^":"a;0a,0b,0c",
F:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dS(this,b)
z.c=H.b([],[V.e1])
this.a.R(0,b,z)}return z},
aK:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.e0(this,a)
y=P.k
z.c=new H.aS(0,0,[y,y])
this.b.R(0,a,z)}return z},
fS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.e_])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aO(a,t)
r=y.fa(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cD(w,0,null)
throw H.d(P.o("Untokenizable string [state: "+y.gfo(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cD(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.e_(o==null?p.b:o,q,t)}++t}}}},e1:{"^":"dz;b,0c,0a",
i:function(a){return this.b.b+": "+this.bZ(0)}}}],["","",,X,{"^":"",da:{"^":"a;",$isas:1},fB:{"^":"dV;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.al()
this.x=z}return z}},hk:{"^":"a;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.al()
this.e=z}return z},
ax:[function(a){var z
H.l(a,"$isw")
z=this.e
if(!(z==null))z.L(a)},function(){return this.ax(null)},"fX","$1","$0","gc1",0,2,0],
saE:function(a){var z,y,x
if(!J.Q(this.a,a)){z=this.a
if(z!=null){z=z.gD()
z.toString
y=H.e(this.gc1(),{func:1,ret:-1,args:[D.w]})
C.a.O(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gD()
z.toString
y=H.e(this.gc1(),{func:1,ret:-1,args:[D.w]})
C.a.h(z.a,y)}z=new D.P("mover",x,this.a,this,[U.bN])
z.b=!0
this.ax(z)}},
$isas:1,
$isda:1},dV:{"^":"a;"}}],["","",,V,{"^":"",
kG:function(a){P.i9(C.w,new V.kH(a))},
kH:{"^":"r:34;a",
$1:function(a){H.l(a,"$isaV")
P.d_(C.e.d4(this.a.gfc(),2)+" fps")}},
hO:{"^":"a;0a,0b",
dq:function(a,b){var z,y,x,w,v,u,t
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
t=W.a6
W.W(z,"scroll",H.e(new V.hR(x),{func:1,ret:-1,args:[t]}),!1,t)},
eX:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isc",[P.k],"$asc")
this.ev()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.fS(C.a.fh(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.eY(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jT(C.G,s,C.q,!1)
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
ev:function(){var z,y,x,w
if(this.b!=null)return
z=new V.ia()
y=P.k
z.a=new H.aS(0,0,[y,V.dS])
z.b=new H.aS(0,0,[y,V.e0])
z.c=z.F(0,"Start")
y=z.F(0,"Start").w(0,"Bold")
x=V.a_(new H.Y("*"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Bold").w(0,"Bold")
x=new V.bi()
w=[V.bM]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a_(new H.Y("*"))
C.a.h(x.a,y)
y=z.F(0,"Bold").w(0,"BoldEnd")
x=V.a_(new H.Y("*"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Start").w(0,"Italic")
x=V.a_(new H.Y("_"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Italic").w(0,"Italic")
x=new V.bi()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a_(new H.Y("_"))
C.a.h(x.a,y)
y=z.F(0,"Italic").w(0,"ItalicEnd")
x=V.a_(new H.Y("_"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Start").w(0,"Code")
x=V.a_(new H.Y("`"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Code").w(0,"Code")
x=new V.bi()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a_(new H.Y("`"))
C.a.h(x.a,y)
y=z.F(0,"Code").w(0,"CodeEnd")
x=V.a_(new H.Y("`"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Start").w(0,"LinkHead")
x=V.a_(new H.Y("["))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"LinkHead").w(0,"LinkTail")
x=V.a_(new H.Y("|"))
C.a.h(y.a,x)
x=z.F(0,"LinkHead").w(0,"LinkEnd")
y=V.a_(new H.Y("]"))
C.a.h(x.a,y)
x.c=!0
x=z.F(0,"LinkHead").w(0,"LinkHead")
y=new V.bi()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a_(new H.Y("|]"))
C.a.h(y.a,x)
x=z.F(0,"LinkTail").w(0,"LinkEnd")
y=V.a_(new H.Y("]"))
C.a.h(x.a,y)
x.c=!0
x=z.F(0,"LinkTail").w(0,"LinkTail")
y=new V.bi()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a_(new H.Y("|]"))
C.a.h(y.a,x)
C.a.h(z.F(0,"Start").w(0,"Other").a,new V.f4())
x=z.F(0,"Other").w(0,"Other")
y=new V.bi()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a_(new H.Y("*_`["))
C.a.h(y.a,x)
x=z.F(0,"BoldEnd")
x.d=x.a.aK("Bold")
x=z.F(0,"ItalicEnd")
x.d=x.a.aK("Italic")
x=z.F(0,"CodeEnd")
x.d=x.a.aK("Code")
x=z.F(0,"LinkEnd")
x.d=x.a.aK("Link")
x=z.F(0,"Other")
x.d=x.a.aK("Other")
this.b=z},
q:{
hP:function(a,b){var z=new V.hO()
z.dq(a,!0)
return z}}},
hR:{"^":"r:35;a",
$1:function(a){P.i8(C.m,new V.hQ(this.a))}},
hQ:{"^":"r:1;a",
$0:function(){var z,y,x
z=C.e.X(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,X,{"^":"",
eU:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=V.hP("Test 003",!0)
y=W.db(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.eX(H.b(["A test of the Material Light Shader with a solid color directional lighting."],[P.k]))
x=new E.aG()
x.a=""
x.b=!0
z=E.aG
w=O.cn(z)
x.y=w
w.bd(x.gfp(),x.gfs())
x.z=null
x.Q=null
x.ch=null
x.cx=null
x.cy=null
x.db=null
x.dx=null
x.dy=null
x.fr=null
x.fx=null
x.sbW(0,null)
x.saE(null)
x.sbW(0,F.kK(30,1,15,0.5))
w=new U.dO()
w.a=0
w.b=0
w.c=0
w.d=0
w.e=0
w.f=0
w.r=0
w.sd6(0)
w.scX(0,0)
w.sd0(0)
v=w.d
if(!$.m.$2(v,0.1)){u=w.d
w.d=0.1
v=new D.P("deltaYaw",u,0.1,w,[P.t])
v.b=!0
w.al(v)}v=w.e
if(!$.m.$2(v,0.21)){u=w.e
w.e=0.21
v=new D.P("deltaPitch",u,0.21,w,[P.t])
v.b=!0
w.al(v)}v=w.f
if(!$.m.$2(v,0.32)){u=w.f
w.f=0.32
v=new D.P("deltaRoll",u,0.32,w,[P.t])
v.b=!0
w.al(v)}x.saE(w)
t=new O.h1()
w=O.cn(V.ah)
t.e=w
w.bd(t.gdU(),t.gdV())
w=new O.aT(t,"emission")
w.c=C.b
w.f=new V.U(0,0,0)
t.f=w
w=new O.aT(t,"ambient")
w.c=C.b
w.f=new V.U(0,0,0)
t.r=w
w=new O.aT(t,"diffuse")
w.c=C.b
w.f=new V.U(0,0,0)
t.x=w
w=new O.aT(t,"invDiffuse")
w.c=C.b
w.f=new V.U(0,0,0)
t.y=w
w=new O.h8(t,"specular")
w.c=C.b
w.f=new V.U(0,0,0)
w.ch=100
t.z=w
w=new O.h5(t,"bump")
w.c=C.b
t.Q=w
t.ch=null
w=new O.aT(t,"reflect")
w.c=C.b
w.f=new V.U(0,0,0)
t.cx=w
w=new O.h7(t,"refract")
w.c=C.b
w.f=new V.U(0,0,0)
w.ch=1
t.cy=w
w=new O.h4(t,"alpha")
w.c=C.b
w.f=1
t.db=w
w=new D.fO()
w.c_(D.T)
w.e=H.b([],[D.bZ])
w.f=H.b([],[D.hm])
w.r=H.b([],[D.hT])
w.x=H.b([],[D.i2])
w.y=H.b([],[D.i3])
w.z=H.b([],[D.i4])
w.Q=null
w.ch=null
w.bV(w.gdT(),w.gec(),w.ged())
t.dx=w
v=w.Q
if(v==null){v=D.al()
w.Q=v
w=v}else w=v
v={func:1,ret:-1,args:[D.w]}
s=H.e(t.gem(),v)
C.a.h(w.a,s)
s=t.dx
w=s.ch
if(w==null){w=D.al()
s.ch=w}s=H.e(t.gdv(),v)
C.a.h(w.a,s)
t.dy=null
s=t.dx
w=U.de(V.dA(new V.a3(0,0,0),new V.H(0,1,0),new V.H(1,1,-3)))
r=new V.U(1,1,1)
q=new D.bZ()
q.c=new V.U(1,1,1)
q.a=new V.H(0,0,1)
u=q.b
q.b=w
w=w.gD()
w.toString
p=H.e(q.gdu(),v)
C.a.h(w.a,p)
w=new D.P("mover",u,q.b,q,[U.bN])
w.b=!0
q.ah(w)
if(!q.c.t(0,r)){u=q.c
q.c=r
w=new D.P("color",u,r,q,[V.U])
w.b=!0
q.ah(w)}s.h(0,q)
w=t.r
w.sa4(0,new V.U(0,0,1))
w=t.x
w.sa4(0,new V.U(0,1,0))
w=t.z
w.sa4(0,new V.U(1,0,0))
w=t.z
if(w.c===C.b){w.c=C.h
w.bg()
w.br(100)
s=w.a
s.a=null
s.a_(null)}w.br(10)
o=new M.ft()
z=O.cn(z)
o.d=z
z.bd(o.gdX(),o.gdY())
o.e=null
o.f=null
o.r=null
o.x=null
n=new X.hk()
n.b=1.0471975511965976
n.c=0.1
n.d=2000
n.saE(null)
z=n.b
if(!$.m.$2(z,1.0471975511965976)){u=n.b
n.b=1.0471975511965976
z=new D.P("fov",u,1.0471975511965976,n,[P.t])
z.b=!0
n.ax(z)}z=n.c
if(!$.m.$2(z,0.1)){u=n.c
n.c=0.1
z=new D.P("near",u,0.1,n,[P.t])
z.b=!0
n.ax(z)}z=n.d
if(!$.m.$2(z,2000)){u=n.d
n.d=2000
z=new D.P("far",u,2000,n,[P.t])
z.b=!0
n.ax(z)}z=o.a
if(z!==n){if(z!=null){z=z.gD()
z.toString
w=H.e(o.ga3(),v)
C.a.O(z.a,w)}u=o.a
o.a=n
z=n.gD()
z.toString
w=H.e(o.ga3(),v)
C.a.h(z.a,w)
z=new D.P("camera",u,o.a,o,[X.da])
z.b=!0
o.ai(z)}m=new X.fB()
z=new V.bG(0,0,0,1)
m.a=z
m.b=!0
m.c=2000
m.d=!0
m.e=0
m.f=!1
z=V.dM(0,0,1,1)
m.r=z
z=o.b
if(z!==m){if(z!=null){z=z.gD()
z.toString
w=H.e(o.ga3(),v)
C.a.O(z.a,w)}u=o.b
o.b=m
z=m.gD()
z.toString
w=H.e(o.ga3(),v)
C.a.h(z.a,w)
z=new D.P("target",u,o.b,o,[X.dV])
z.b=!0
o.ai(z)}o.sd2(null)
o.sd2(t)
o.d.h(0,x)
o.a.saE(U.de(V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=document.getElementById("testCanvas")
if(l==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
k=E.i6(l,!0,!0,!0,!1)
z=k.d
if(z!==o){if(z!=null){z=z.gD()
z.toString
w=H.e(k.gc0(),v)
C.a.O(z.a,w)}k.d=o
z=o.gD()
z.toString
v=H.e(k.gc0(),v)
C.a.h(z.a,v)
k.ds()}V.kG(k)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dr.prototype
return J.fI.prototype}if(typeof a=="string")return J.c3.prototype
if(a==null)return J.ds.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.bS=function(a){if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.cV=function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.kn=function(a){if(typeof a=="number")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c9.prototype
return a}
J.ko=function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c9.prototype
return a}
J.bT=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.a)return a
return J.ce(a)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).t(a,b)}
J.f0=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kn(a).af(a,b)}
J.d1=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ko(a).k(a,b)}
J.f1=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kx(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bS(a).j(a,b)}
J.f2=function(a,b,c,d){return J.bT(a).cn(a,b,c,d)}
J.ch=function(a,b,c){return J.bS(a).f2(a,b,c)}
J.d2=function(a,b){return J.cV(a).A(a,b)}
J.f3=function(a,b){return J.cV(a).H(a,b)}
J.ap=function(a){return J.J(a).gM(a)}
J.bF=function(a){return J.cV(a).gP(a)}
J.b6=function(a){return J.bS(a).gl(a)}
J.af=function(a){return J.J(a).i(a)}
I.cY=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cl.prototype
C.x=J.n.prototype
C.a=J.aR.prototype
C.f=J.dr.prototype
C.y=J.ds.prototype
C.e=J.bJ.prototype
C.i=J.c3.prototype
C.F=J.bK.prototype
C.H=H.hf.prototype
C.I=W.hg.prototype
C.p=J.hl.prototype
C.l=J.c9.prototype
C.r=W.bw.prototype
C.t=W.iM.prototype
C.u=new P.hj()
C.v=new P.ix()
C.j=new P.jx()
C.b=new A.bX(0,"ColorSourceType.None")
C.h=new A.bX(1,"ColorSourceType.Solid")
C.c=new A.bX(2,"ColorSourceType.Texture2D")
C.d=new A.bX(3,"ColorSourceType.TextureCube")
C.m=new P.aP(0)
C.w=new P.aP(5e6)
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
C.G=H.b(I.cY([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.q=new P.iw(!1)
$.ak=0
$.b7=null
$.d5=null
$.cO=!1
$.eR=null
$.eL=null
$.eX=null
$.cd=null
$.cf=null
$.cW=null
$.b_=null
$.bA=null
$.bB=null
$.cP=!1
$.L=C.j
$.dl=null
$.dk=null
$.dj=null
$.di=null
$.m=V.h9()
$.dF=null
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
I.$lazy(y,x,w)}})(["dh","$get$dh",function(){return H.eQ("_$dart_dartClosure")},"cu","$get$cu",function(){return H.eQ("_$dart_js")},"e2","$get$e2",function(){return H.an(H.c8({
toString:function(){return"$receiver$"}}))},"e3","$get$e3",function(){return H.an(H.c8({$method$:null,
toString:function(){return"$receiver$"}}))},"e4","$get$e4",function(){return H.an(H.c8(null))},"e5","$get$e5",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e9","$get$e9",function(){return H.an(H.c8(void 0))},"ea","$get$ea",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e7","$get$e7",function(){return H.an(H.e8(null))},"e6","$get$e6",function(){return H.an(function(){try{null.$method$}catch(z){return z.message}}())},"ec","$get$ec",function(){return H.an(H.e8(void 0))},"eb","$get$eb",function(){return H.an(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cL","$get$cL",function(){return P.iN()},"bC","$get$bC",function(){return[]},"eF","$get$eF",function(){return P.hz("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dg","$get$dg",function(){return{}},"en","$get$en",function(){return Z.ac(0)},"el","$get$el",function(){return Z.ac(511)},"ay","$get$ay",function(){return Z.ac(1)},"ax","$get$ax",function(){return Z.ac(2)},"aw","$get$aw",function(){return Z.ac(4)},"az","$get$az",function(){return Z.ac(8)},"aA","$get$aA",function(){return Z.ac(16)},"bu","$get$bu",function(){return Z.ac(32)},"bv","$get$bv",function(){return Z.ac(64)},"em","$get$em",function(){return Z.ac(96)},"aY","$get$aY",function(){return Z.ac(128)},"av","$get$av",function(){return Z.ac(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.am]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[P.C,[P.i,E.aG]]},{func:1,ret:P.F,args:[F.ag]},{func:1,ret:P.F,args:[D.w]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.k,args:[P.C]},{func:1,args:[,]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.C,[P.i,D.T]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.C,[P.i,V.ah]]},{func:1,args:[P.k]},{func:1,ret:-1,args:[P.a],opt:[P.ai]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:[P.aB,,],args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.ad,args:[W.I]},{func:1,ret:W.Z,args:[W.I]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[P.N]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,args:[,P.k]},{func:1,ret:P.ad,args:[P.t,P.t]},{func:1,ret:P.ad,args:[[P.i,D.T]]},{func:1,ret:V.a3,args:[P.t]},{func:1,ret:P.F,args:[F.au,P.t,P.t]},{func:1,ret:P.F,args:[P.aV]},{func:1,ret:P.F,args:[W.a6]},{func:1,ret:-1,args:[W.bw]}]
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
if(x==y)H.kJ(d||a)
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
Isolate.cY=a.cY
Isolate.cT=a.cT
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
if(typeof dartMainRunner==="function")dartMainRunner(X.eU,[])
else X.eU([])})})()
//# sourceMappingURL=test.dart.js.map
