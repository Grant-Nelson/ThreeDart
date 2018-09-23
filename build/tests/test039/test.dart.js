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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cV(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cW=function(){}
var dart=[["","",,H,{"^":"",lh:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
d1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cb:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cZ==null){H.kB()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.eq("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ct()]
if(v!=null)return v
v=H.kG(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$ct(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
n:{"^":"a;",
p:function(a,b){return a===b},
gM:function(a){return H.bj(a)},
i:["ds",function(a){return"Instance of '"+H.aT(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fO:{"^":"n;",
i:function(a){return String(a)},
gM:function(a){return a?519018:218159},
$isad:1},
dx:{"^":"n;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gM:function(a){return 0},
$isG:1},
cu:{"^":"n;",
gM:function(a){return 0},
i:["dt",function(a){return String(a)}]},
hq:{"^":"cu;"},
cL:{"^":"cu;"},
bF:{"^":"cu;",
i:function(a){var z=a[$.$get$dl()]
if(z==null)return this.dt(a)
return"JavaScript function for "+H.j(J.a1(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscn:1},
aQ:{"^":"n;$ti",
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.p(P.ab("add"))
a.push(b)},
F:function(a,b){var z
if(!!a.fixed$length)H.p(P.ab("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.b6(a))}},
u:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.R(z,y,H.j(a[y]))
return z.join(b)},
fw:function(a){return this.u(a,"")},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bg:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.a8(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.a8(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.y(a,0)])
return H.b(a.slice(b,c),[H.y(a,0)])},
gbR:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.fM())},
aB:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.cq(a,"[","]")},
gP:function(a){return new J.aq(a,a.length,0,[H.y(a,0)])},
gM:function(a){return H.bj(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.p(P.ab("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.bQ(b,"newLength",null))
if(b<0)throw H.d(P.a8(b,0,null,"newLength",null))
a.length=b},
R:function(a,b,c){H.V(b)
H.B(c,H.y(a,0))
if(!!a.immutable$list)H.p(P.ab("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b>=a.length||b<0)throw H.d(H.aJ(a,b))
a[b]=c},
$isi:1,
$isc:1,
n:{
fN:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.bQ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a8(a,0,4294967295,"length",null))
return J.du(new Array(a),b)},
du:function(a,b){return J.bd(H.b(a,[b]))},
bd:function(a){H.bC(a)
a.fixed$length=Array
return a}}},
lg:{"^":"aQ;$ti"},
aq:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bZ:{"^":"n;",
gfv:function(a){return a===0?1/a<0:a<0},
h7:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.ab(""+a+".toInt()"))},
bP:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.ab(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.ab(""+a+".round()"))},
dg:function(a,b){var z
if(b>20)throw H.d(P.a8(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfv(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM:function(a){return a&0x1FFFFFFF},
dm:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dv:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cu(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.cu(a,b)},
cu:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.ab("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aX:function(a,b){var z
if(a>0)z=this.eL(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eL:function(a,b){return b>31?0:a>>>b},
af:function(a,b){if(typeof b!=="number")throw H.d(H.aI(b))
return a<b},
$ist:1,
$isT:1},
dw:{"^":"bZ;",$isC:1},
dv:{"^":"bZ;"},
cs:{"^":"n;",
bG:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b<0)throw H.d(H.aJ(a,b))
if(b>=a.length)H.p(H.aJ(a,b))
return a.charCodeAt(b)},
aS:function(a,b){if(b>=a.length)throw H.d(H.aJ(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.O(b)
if(typeof b!=="string")throw H.d(P.bQ(b,null,null))
return a+b},
bh:function(a,b,c){H.V(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.c1(b,null,null))
if(b>c)throw H.d(P.c1(b,null,null))
if(c>a.length)throw H.d(P.c1(c,null,null))
return a.substring(b,c)},
c5:function(a,b){return this.bh(a,b,null)},
m:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fL:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.m(c,z)+a},
Y:function(a,b){return this.fL(a,b," ")},
ff:function(a,b,c){if(c>a.length)throw H.d(P.a8(c,0,a.length,null,null))
return H.f4(a,b,c)},
i:function(a){return a},
gM:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdK:1,
$ism:1}}],["","",,H,{"^":"",
fM:function(){return new P.hZ("No element")},
W:{"^":"iy;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.bG(this.a,b)},
$aser:function(){return[P.C]},
$asq:function(){return[P.C]},
$asi:function(){return[P.C]},
$asc:function(){return[P.C]}},
fy:{"^":"i;"},
dB:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.bO(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.b6(z))
w=this.c
if(typeof x!=="number")return H.z(x)
if(w>=x){this.d=null
return!1}this.d=y.v(z,w);++this.c
return!0}},
h4:{"^":"i;a,b,$ti",
gP:function(a){return new H.h5(J.b3(this.a),this.b,this.$ti)},
gk:function(a){return J.b4(this.a)},
v:function(a,b){return this.b.$1(J.d5(this.a,b))},
$asi:function(a,b){return[b]}},
h5:{"^":"cr;0a,b,c,$ti",
A:function(){var z=this.b
if(z.A()){this.a=this.c.$1(z.gI(z))
return!0}this.a=null
return!1},
gI:function(a){return this.a},
$ascr:function(a,b){return[b]}},
iP:{"^":"i;a,b,$ti",
gP:function(a){return new H.iQ(J.b3(this.a),this.b,this.$ti)}},
iQ:{"^":"cr;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gI(z)))return!0
return!1},
gI:function(a){var z=this.a
return z.gI(z)}},
bW:{"^":"a;$ti"},
er:{"^":"a;$ti"},
iy:{"^":"c_+er;"}}],["","",,H,{"^":"",
kw:function(a){return init.types[H.V(a)]},
kE:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isA},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a1(a)
if(typeof z!=="string")throw H.d(H.aI(a))
return z},
bj:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aT:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.I(a).$iscL){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.aS(w,0)===36)w=C.h.c5(w,1)
r=H.d_(H.bC(H.aK(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dO:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hA:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aI(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aX(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aI(w))}return H.dO(z)},
dP:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aI(x))
if(x<0)throw H.d(H.aI(x))
if(x>65535)return H.hA(a)}return H.dO(a)},
hz:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aX(z,10))>>>0,56320|z&1023)}throw H.d(P.a8(a,0,1114111,null,null))},
a4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hy:function(a){return a.b?H.a4(a).getUTCFullYear()+0:H.a4(a).getFullYear()+0},
hw:function(a){return a.b?H.a4(a).getUTCMonth()+1:H.a4(a).getMonth()+1},
hs:function(a){return a.b?H.a4(a).getUTCDate()+0:H.a4(a).getDate()+0},
ht:function(a){return a.b?H.a4(a).getUTCHours()+0:H.a4(a).getHours()+0},
hv:function(a){return a.b?H.a4(a).getUTCMinutes()+0:H.a4(a).getMinutes()+0},
hx:function(a){return a.b?H.a4(a).getUTCSeconds()+0:H.a4(a).getSeconds()+0},
hu:function(a){return a.b?H.a4(a).getUTCMilliseconds()+0:H.a4(a).getMilliseconds()+0},
z:function(a){throw H.d(H.aI(a))},
e:function(a,b){if(a==null)J.b4(a)
throw H.d(H.aJ(a,b))},
aJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,"index",null)
z=H.V(J.b4(a))
if(!(b<0)){if(typeof z!=="number")return H.z(z)
y=b>=z}else y=!0
if(y)return P.K(b,a,"index",null,z)
return P.c1(b,"index",null)},
ks:function(a,b,c){if(a>c)return new P.c0(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c0(a,c,!0,b,"end","Invalid value")
return new P.ap(!0,b,"end",null)},
aI:function(a){return new P.ap(!0,a,null,null)},
kn:function(a){if(typeof a!=="number")throw H.d(H.aI(a))
return a},
d:function(a){var z
if(a==null)a=new P.dJ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f6})
z.name=""}else z.toString=H.f6
return z},
f6:function(){return J.a1(this.dartException)},
p:function(a){throw H.d(a)},
x:function(a){throw H.d(P.b6(a))},
aM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aX(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cv(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dI(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e9()
u=$.$get$ea()
t=$.$get$eb()
s=$.$get$ec()
r=$.$get$eg()
q=$.$get$eh()
p=$.$get$ee()
$.$get$ed()
o=$.$get$ej()
n=$.$get$ei()
m=v.X(y)
if(m!=null)return z.$1(H.cv(H.O(y),m))
else{m=u.X(y)
if(m!=null){m.method="call"
return z.$1(H.cv(H.O(y),m))}else{m=t.X(y)
if(m==null){m=s.X(y)
if(m==null){m=r.X(y)
if(m==null){m=q.X(y)
if(m==null){m=p.X(y)
if(m==null){m=s.X(y)
if(m==null){m=o.X(y)
if(m==null){m=n.X(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dI(H.O(y),m))}}return z.$1(new H.ix(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dX()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ap(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dX()
return a},
b1:function(a){var z
if(a==null)return new H.eH(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eH(a)},
ku:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.R(0,a[y],a[x])}return b},
kD:function(a,b,c,d,e,f){H.l(a,"$iscn")
switch(H.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.o("Unsupported number of arguments for wrapped closure"))},
b_:function(a,b){var z
H.V(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kD)
a.$identity=z
return z},
fn:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.hD(z).r}else x=d
w=e?Object.create(new H.i_().constructor.prototype):Object.create(new H.cg(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aj
if(typeof u!=="number")return u.B()
$.aj=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.df(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kw,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.d9:H.ch
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.df(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fk:function(a,b,c,d){var z=H.ch
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
df:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fm(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fk(y,!w,z,b)
if(y===0){w=$.aj
if(typeof w!=="number")return w.B()
$.aj=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b5
if(v==null){v=H.bR("self")
$.b5=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aj
if(typeof w!=="number")return w.B()
$.aj=w+1
t+=w
w="return function("+t+"){return this."
v=$.b5
if(v==null){v=H.bR("self")
$.b5=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fl:function(a,b,c,d){var z,y
z=H.ch
y=H.d9
switch(b?-1:a){case 0:throw H.d(H.hM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fm:function(a,b){var z,y,x,w,v,u,t,s
z=$.b5
if(z==null){z=H.bR("self")
$.b5=z}y=$.d8
if(y==null){y=H.bR("receiver")
$.d8=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fl(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aj
if(typeof y!=="number")return y.B()
$.aj=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aj
if(typeof y!=="number")return y.B()
$.aj=y+1
return new Function(z+y+"}")()},
cV:function(a,b,c,d,e,f,g){var z,y
z=J.bd(H.bC(b))
H.V(c)
y=!!J.I(d).$isc?J.bd(d):d
return H.fn(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.an(a,"String"))},
kK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.an(a,"num"))},
eV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.an(a,"bool"))},
V:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.an(a,"int"))},
f2:function(a,b){throw H.d(H.an(a,H.O(b).substring(3)))},
kM:function(a,b){var z=J.bO(b)
throw H.d(H.fi(a,z.bh(b,3,z.gk(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.f2(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.kM(a,b)},
bC:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.d(H.an(a,"List"))},
kF:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.f2(a,b)},
eW:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.V(z)]
else return a.$S()}return},
bN:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eW(J.I(a))
if(z==null)return!1
y=H.eZ(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.cR)return a
$.cR=!0
try{if(H.bN(a,b))return a
z=H.bP(b)
y=H.an(a,z)
throw H.d(y)}finally{$.cR=!1}},
cX:function(a,b){if(a!=null&&!H.cU(a,b))H.p(H.an(a,H.bP(b)))
return a},
eQ:function(a){var z
if(a instanceof H.r){z=H.eW(J.I(a))
if(z!=null)return H.bP(z)
return"Closure"}return H.aT(a)},
kR:function(a){throw H.d(new P.fr(H.O(a)))},
eX:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aK:function(a){if(a==null)return
return a.$ti},
m5:function(a,b,c){return H.b2(a["$as"+H.j(c)],H.aK(b))},
bB:function(a,b,c,d){var z
H.O(c)
H.V(d)
z=H.b2(a["$as"+H.j(c)],H.aK(b))
return z==null?null:z[d]},
aD:function(a,b,c){var z
H.O(b)
H.V(c)
z=H.b2(a["$as"+H.j(b)],H.aK(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.V(b)
z=H.aK(a)
return z==null?null:z[b]},
bP:function(a){var z=H.aL(a,null)
return z},
aL:function(a,b){var z,y
H.w(b,"$isc",[P.m],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d_(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.V(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.j(b[y])}if('func' in a)return H.kd(a,b)
if('futureOr' in a)return"FutureOr<"+H.aL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kd:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.h.B(t,b[r])
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
for(z=H.kt(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.aL(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d_:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.m],"$asc")
if(a==null)return""
z=new P.bK("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aL(u,c)}v="<"+z.i(0)+">"
return v},
b2:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bA:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aK(a)
y=J.I(a)
if(y[b]==null)return!1
return H.eT(H.b2(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.O(b)
H.bC(c)
H.O(d)
if(a==null)return a
z=H.bA(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d_(c,0,null)
throw H.d(H.an(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eT:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ae(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ae(a[y],b,c[y],d))return!1
return!0},
m3:function(a,b,c){return a.apply(b,H.b2(J.I(b)["$as"+H.j(c)],H.aK(b)))},
f_:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.f_(z)}return!1},
cU:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.f_(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bN(a,b)}y=J.I(a).constructor
x=H.aK(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ae(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.cU(a,b))throw H.d(H.an(a,H.bP(b)))
return a},
ae:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ae(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.eZ(a,b,c,d)
if('func' in a)return c.builtin$cls==="cn"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ae("type" in a?a.type:null,b,x,d)
else if(H.ae(a,b,x,d))return!0
else{if(!('$is'+"ba" in y.prototype))return!1
w=y.prototype["$as"+"ba"]
v=H.b2(w,z?a.slice(1):null)
return H.ae(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bP(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eT(H.b2(r,z),b,u,d)},
eZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kJ(m,b,l,d)},
kJ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ae(c[w],d,a[w],b))return!1}return!0},
m4:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
kG:function(a){var z,y,x,w,v,u
z=H.O($.eY.$1(a))
y=$.c9[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cc[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.eS.$2(a,z))
if(z!=null){y=$.c9[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cc[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cd(x)
$.c9[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cc[z]=x
return x}if(v==="-"){u=H.cd(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f1(a,x)
if(v==="*")throw H.d(P.eq(z))
if(init.leafTags[z]===true){u=H.cd(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f1(a,x)},
f1:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d1(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cd:function(a){return J.d1(a,!1,null,!!a.$isA)},
kI:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cd(z)
else return J.d1(z,c,null,null)},
kB:function(){if(!0===$.cZ)return
$.cZ=!0
H.kC()},
kC:function(){var z,y,x,w,v,u,t,s
$.c9=Object.create(null)
$.cc=Object.create(null)
H.kx()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f3.$1(v)
if(u!=null){t=H.kI(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kx:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.aZ(C.A,H.aZ(C.F,H.aZ(C.n,H.aZ(C.n,H.aZ(C.E,H.aZ(C.B,H.aZ(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eY=new H.ky(v)
$.eS=new H.kz(u)
$.f3=new H.kA(t)},
aZ:function(a,b){return a(b)||b},
f4:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f5:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hC:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hD:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bd(z)
y=z[0]
x=z[1]
return new H.hC(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ij:{"^":"a;a,b,c,d,e,f",
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
n:{
am:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ij(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c3:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ef:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hn:{"^":"U;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dI:function(a,b){return new H.hn(a,b==null?null:b.method)}}},
fR:{"^":"U;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cv:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fR(a,y,z?null:b.receiver)}}},
ix:{"^":"U;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kS:{"^":"r:13;a",
$1:function(a){if(!!J.I(a).$isU)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eH:{"^":"a;a,0b",
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
gdj:function(){return this},
$iscn:1,
gdj:function(){return this}},
e1:{"^":"r;"},
i_:{"^":"e1;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cg:{"^":"e1;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cg))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gM:function(a){var z,y
z=this.c
if(z==null)y=H.bj(this.a)
else y=typeof z!=="object"?J.aN(z):H.bj(z)
return(y^H.bj(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aT(z)+"'")},
n:{
ch:function(a){return a.a},
d9:function(a){return a.c},
bR:function(a){var z,y,x,w,v
z=new H.cg("self","target","receiver","name")
y=J.bd(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ik:{"^":"U;a",
i:function(a){return this.a},
n:{
an:function(a,b){return new H.ik("TypeError: "+H.j(P.bV(a))+": type '"+H.eQ(a)+"' is not a subtype of type '"+b+"'")}}},
fh:{"^":"U;a",
i:function(a){return this.a},
n:{
fi:function(a,b){return new H.fh("CastError: "+H.j(P.bV(a))+": type '"+H.eQ(a)+"' is not a subtype of type '"+b+"'")}}},
hL:{"^":"U;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
hM:function(a){return new H.hL(a)}}},
aR:{"^":"h2;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gae:function(a){return new H.dA(this,[H.y(this,0)])},
cE:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.ck(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.ck(y,b)}else return this.ft(b)},
ft:function(a){var z=this.d
if(z==null)return!1
return this.bQ(this.bm(z,J.aN(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aU(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aU(w,b)
x=y==null?null:y.b
return x}else return this.fu(b)},
fu:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bm(z,J.aN(a)&0x3ffffff)
x=this.bQ(y,a)
if(x<0)return
return y[x].b},
R:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bp()
this.b=z}this.cc(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bp()
this.c=y}this.cc(y,b,c)}else{x=this.d
if(x==null){x=this.bp()
this.d=x}w=J.aN(b)&0x3ffffff
v=this.bm(x,w)
if(v==null)this.bv(x,w,[this.bq(b,c)])
else{u=this.bQ(v,b)
if(u>=0)v[u].b=c
else v.push(this.bq(b,c))}}},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.b6(this))
z=z.c}},
cc:function(a,b,c){var z
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
z=this.aU(a,b)
if(z==null)this.bv(a,b,this.bq(b,c))
else z.b=c},
e0:function(){this.r=this.r+1&67108863},
bq:function(a,b){var z,y
z=new H.fW(H.B(a,H.y(this,0)),H.B(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e0()
return z},
bQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.dD(this)},
aU:function(a,b){return a[b]},
bm:function(a,b){return a[b]},
bv:function(a,b,c){a[b]=c},
dV:function(a,b){delete a[b]},
ck:function(a,b){return this.aU(a,b)!=null},
bp:function(){var z=Object.create(null)
this.bv(z,"<non-identifier-key>",z)
this.dV(z,"<non-identifier-key>")
return z},
$isdz:1},
fW:{"^":"a;a,b,0c,0d"},
dA:{"^":"fy;a,$ti",
gk:function(a){return this.a.a},
gP:function(a){var z,y
z=this.a
y=new H.fX(z,z.r,this.$ti)
y.c=z.e
return y}},
fX:{"^":"a;a,b,0c,0d,$ti",
gI:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.b6(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
ky:{"^":"r:13;a",
$1:function(a){return this.a(a)}},
kz:{"^":"r:29;a",
$2:function(a,b){return this.a(a,b)}},
kA:{"^":"r:26;a",
$1:function(a){return this.a(H.O(a))}},
fP:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdK:1,
n:{
fQ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.fI("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kt:function(a){return J.du(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bw:function(a){return a},
aH:function(a,b,c){H.bC(b)
if(a>>>0!==a||a>=c)throw H.d(H.aJ(b,a))},
kc:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.ks(a,b,c))
return b},
hj:{"^":"n;",$islP:1,"%":"DataView;ArrayBufferView;cA|eB|eC|hi|eD|eE|aG"},
cA:{"^":"hj;",
gk:function(a){return a.length},
$isA:1,
$asA:I.cW},
hi:{"^":"eC;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
$asbW:function(){return[P.t]},
$asq:function(){return[P.t]},
$isi:1,
$asi:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aG:{"^":"eE;",
$asbW:function(){return[P.C]},
$asq:function(){return[P.C]},
$isi:1,
$asi:function(){return[P.C]},
$isc:1,
$asc:function(){return[P.C]}},
lp:{"^":"aG;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lq:{"^":"aG;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lr:{"^":"aG;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ls:{"^":"aG;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lt:{"^":"aG;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lu:{"^":"aG;",
gk:function(a){return a.length},
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hk:{"^":"aG;",
gk:function(a){return a.length},
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
bg:function(a,b,c){return new Uint8Array(a.subarray(b,H.kc(b,c,a.length)))},
"%":";Uint8Array"},
eB:{"^":"cA+q;"},
eC:{"^":"eB+bW;"},
eD:{"^":"cA+q;"},
eE:{"^":"eD+bW;"}}],["","",,P,{"^":"",
iS:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b_(new P.iU(z),1)).observe(y,{childList:true})
return new P.iT(z,y,x)}else if(self.setImmediate!=null)return P.kl()
return P.km()},
lT:[function(a){self.scheduleImmediate(H.b_(new P.iV(H.f(a,{func:1,ret:-1})),0))},"$1","kk",4,0,10],
lU:[function(a){self.setImmediate(H.b_(new P.iW(H.f(a,{func:1,ret:-1})),0))},"$1","kl",4,0,10],
lV:[function(a){P.cH(C.l,H.f(a,{func:1,ret:-1}))},"$1","km",4,0,10],
cH:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.f.T(a.a,1000)
return P.jR(z<0?0:z,b)},
e5:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.al]})
z=C.f.T(a.a,1000)
return P.jS(z<0?0:z,b)},
kg:function(a,b){if(H.bN(a,{func:1,args:[P.a,P.ai]}))return b.fU(a,null,P.a,P.ai)
if(H.bN(a,{func:1,args:[P.a]}))return H.f(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.bQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kf:function(){var z,y
for(;z=$.aY,z!=null;){$.by=null
y=z.b
$.aY=y
if(y==null)$.bx=null
z.a.$0()}},
m2:[function(){$.cS=!0
try{P.kf()}finally{$.by=null
$.cS=!1
if($.aY!=null)$.$get$cO().$1(P.eU())}},"$0","eU",0,0,2],
eP:function(a){var z=new P.ew(H.f(a,{func:1,ret:-1}))
if($.aY==null){$.bx=z
$.aY=z
if(!$.cS)$.$get$cO().$1(P.eU())}else{$.bx.b=z
$.bx=z}},
kj:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.aY
if(z==null){P.eP(a)
$.by=$.bx
return}y=new P.ew(a)
x=$.by
if(x==null){y.b=z
$.by=y
$.aY=y}else{y.b=x.b
x.b=y
$.by=y
if(y.b==null)$.bx=y}},
kN:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.L
if(C.j===y){P.c8(null,null,C.j,a)
return}y.toString
P.c8(null,null,y,H.f(y.bA(a),z))},
e3:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.L
if(y===C.j){y.toString
return P.cH(a,b)}return P.cH(a,H.f(y.bA(b),z))},
e4:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.al]}
H.f(b,z)
y=$.L
if(y===C.j){y.toString
return P.e5(a,b)}x=y.cB(b,P.al)
$.L.toString
return P.e5(a,H.f(x,z))},
c7:function(a,b,c,d,e){var z={}
z.a=d
P.kj(new P.kh(z,e))},
eN:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.L
if(y===c)return d.$0()
$.L=c
z=y
try{y=d.$0()
return y}finally{$.L=z}},
eO:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.L
if(y===c)return d.$1(e)
$.L=c
z=y
try{y=d.$1(e)
return y}finally{$.L=z}},
ki:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.L
if(y===c)return d.$2(e,f)
$.L=c
z=y
try{y=d.$2(e,f)
return y}finally{$.L=z}},
c8:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bA(d):c.fb(d,-1)
P.eP(d)},
iU:{"^":"r:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iT:{"^":"r:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iV:{"^":"r:1;a",
$0:function(){this.a.$0()}},
iW:{"^":"r:1;a",
$0:function(){this.a.$0()}},
eK:{"^":"a;a,0b,c",
dI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b_(new P.jU(this,b),0),a)
else throw H.d(P.ab("`setTimeout()` not found."))},
dJ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b_(new P.jT(this,a,Date.now(),b),0),a)
else throw H.d(P.ab("Periodic timer."))},
$isal:1,
n:{
jR:function(a,b){var z=new P.eK(!0,0)
z.dI(a,b)
return z},
jS:function(a,b){var z=new P.eK(!1,0)
z.dJ(a,b)
return z}}},
jU:{"^":"r:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jT:{"^":"r:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dv(w,x)}z.c=y
this.d.$1(z)}},
aX:{"^":"a;0a,b,c,d,e,$ti",
fD:function(a){if(this.c!==6)return!0
return this.b.b.bY(H.f(this.d,{func:1,ret:P.ad,args:[P.a]}),a.a,P.ad,P.a)},
fs:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bN(z,{func:1,args:[P.a,P.ai]}))return H.cX(w.h0(z,a.a,a.b,null,y,P.ai),x)
else return H.cX(w.bY(H.f(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aB:{"^":"a;ct:a<,b,0ez:c<,$ti",
df:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.L
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kg(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aB(0,$.L,[c])
w=b==null?1:3
this.cd(new P.aX(x,w,a,b,[z,c]))
return x},
h6:function(a,b){return this.df(a,null,b)},
cd:function(a){var z,y
z=this.a
if(z<=1){a.a=H.l(this.c,"$isaX")
this.c=a}else{if(z===2){y=H.l(this.c,"$isaB")
z=y.a
if(z<4){y.cd(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c8(null,null,z,H.f(new P.j9(this,a),{func:1,ret:-1}))}},
cp:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.l(this.c,"$isaX")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.l(this.c,"$isaB")
y=u.a
if(y<4){u.cp(a)
return}this.a=y
this.c=u.c}z.a=this.aW(a)
y=this.b
y.toString
P.c8(null,null,y,H.f(new P.je(z,this),{func:1,ret:-1}))}},
bs:function(){var z=H.l(this.c,"$isaX")
this.c=null
return this.aW(z)},
aW:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cg:function(a){var z,y,x,w
z=H.y(this,0)
H.cX(a,{futureOr:1,type:z})
y=this.$ti
x=H.bA(a,"$isba",y,"$asba")
if(x){z=H.bA(a,"$isaB",y,null)
if(z)P.ey(a,this)
else P.ja(a,this)}else{w=this.bs()
H.B(a,z)
this.a=4
this.c=a
P.bu(this,w)}},
bj:[function(a,b){var z
H.l(b,"$isai")
z=this.bs()
this.a=8
this.c=new P.a7(a,b)
P.bu(this,z)},function(a){return this.bj(a,null)},"hf","$2","$1","gdR",4,2,36],
$isba:1,
n:{
ja:function(a,b){var z,y,x
b.a=1
try{a.df(new P.jb(b),new P.jc(b),null)}catch(x){z=H.aM(x)
y=H.b1(x)
P.kN(new P.jd(b,z,y))}},
ey:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.l(a.c,"$isaB")
if(z>=4){y=b.bs()
b.a=a.a
b.c=a.c
P.bu(b,y)}else{y=H.l(b.c,"$isaX")
b.a=2
b.c=a
a.cp(y)}},
bu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.l(y.c,"$isa7")
y=y.b
u=v.a
t=v.b
y.toString
P.c7(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bu(z.a,b)}y=z.a
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
if(p){H.l(r,"$isa7")
y=y.b
u=r.a
t=r.b
y.toString
P.c7(null,null,y,u,t)
return}o=$.L
if(o==null?q!=null:o!==q)$.L=q
else o=null
y=b.c
if(y===8)new P.jh(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jg(x,b,r).$0()}else if((y&2)!==0)new P.jf(z,x,b).$0()
if(o!=null)$.L=o
y=x.b
if(!!J.I(y).$isba){if(y.a>=4){n=H.l(t.c,"$isaX")
t.c=null
b=t.aW(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ey(y,t)
return}}m=b.b
n=H.l(m.c,"$isaX")
m.c=null
b=m.aW(n)
y=x.a
u=x.b
if(!y){H.B(u,H.y(m,0))
m.a=4
m.c=u}else{H.l(u,"$isa7")
m.a=8
m.c=u}z.a=m
y=m}}}},
j9:{"^":"r:1;a,b",
$0:function(){P.bu(this.a,this.b)}},
je:{"^":"r:1;a,b",
$0:function(){P.bu(this.b,this.a.a)}},
jb:{"^":"r:14;a",
$1:function(a){var z=this.a
z.a=0
z.cg(a)}},
jc:{"^":"r:20;a",
$2:function(a,b){this.a.bj(a,H.l(b,"$isai"))},
$1:function(a){return this.$2(a,null)}},
jd:{"^":"r:1;a,b,c",
$0:function(){this.a.bj(this.b,this.c)}},
jh:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dc(H.f(w.d,{func:1}),null)}catch(v){y=H.aM(v)
x=H.b1(v)
if(this.d){w=H.l(this.a.a.c,"$isa7").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.l(this.a.a.c,"$isa7")
else u.b=new P.a7(y,x)
u.a=!0
return}if(!!J.I(z).$isba){if(z instanceof P.aB&&z.gct()>=4){if(z.gct()===8){w=this.b
w.b=H.l(z.gez(),"$isa7")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.h6(new P.ji(t),null)
w.a=!1}}},
ji:{"^":"r:21;a",
$1:function(a){return this.a}},
jg:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.B(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.bY(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aM(t)
y=H.b1(t)
x=this.a
x.b=new P.a7(z,y)
x.a=!0}}},
jf:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.l(this.a.a.c,"$isa7")
w=this.c
if(w.fD(z)&&w.e!=null){v=this.b
v.b=w.fs(z)
v.a=!1}}catch(u){y=H.aM(u)
x=H.b1(u)
w=H.l(this.a.a.c,"$isa7")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a7(y,x)
s.a=!0}}},
ew:{"^":"a;a,0b"},
cD:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aB(0,$.L,[P.C])
z.a=0
this.fB(new P.i2(z,this),!0,new P.i3(z,y),y.gdR())
return y}},
i2:{"^":"r;a,b",
$1:function(a){H.B(a,H.aD(this.b,"cD",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.aD(this.b,"cD",0)]}}},
i3:{"^":"r:1;a,b",
$0:function(){this.b.cg(this.a.a)}},
dZ:{"^":"a;$ti"},
i1:{"^":"a;"},
al:{"^":"a;"},
a7:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isU:1},
k0:{"^":"a;",$islS:1},
kh:{"^":"r:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dJ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
jD:{"^":"k0;",
h1:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.L){a.$0()
return}P.eN(null,null,this,a,-1)}catch(x){z=H.aM(x)
y=H.b1(x)
P.c7(null,null,this,z,H.l(y,"$isai"))}},
h2:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.j===$.L){a.$1(b)
return}P.eO(null,null,this,a,b,-1,c)}catch(x){z=H.aM(x)
y=H.b1(x)
P.c7(null,null,this,z,H.l(y,"$isai"))}},
fb:function(a,b){return new P.jF(this,H.f(a,{func:1,ret:b}),b)},
bA:function(a){return new P.jE(this,H.f(a,{func:1,ret:-1}))},
cB:function(a,b){return new P.jG(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
dc:function(a,b){H.f(a,{func:1,ret:b})
if($.L===C.j)return a.$0()
return P.eN(null,null,this,a,b)},
bY:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.L===C.j)return a.$1(b)
return P.eO(null,null,this,a,b,c,d)},
h0:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.L===C.j)return a.$2(b,c)
return P.ki(null,null,this,a,b,c,d,e,f)},
fU:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
jF:{"^":"r;a,b,c",
$0:function(){return this.a.dc(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jE:{"^":"r:2;a,b",
$0:function(){return this.a.h1(this.b)}},
jG:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.h2(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fZ:function(a,b,c){H.bC(a)
return H.w(H.ku(a,new H.aR(0,0,[b,c])),"$isdz",[b,c],"$asdz")},
fY:function(a,b){return new H.aR(0,0,[a,b])},
h_:function(a,b,c,d){return new P.jp(0,0,[d])},
fL:function(a,b,c){var z,y
if(P.cT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bz()
C.a.h(y,a)
try{P.ke(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.e_(b,H.kF(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
cq:function(a,b,c){var z,y,x
if(P.cT(a))return b+"..."+c
z=new P.bK(b)
y=$.$get$bz()
C.a.h(y,a)
try{x=z
x.a=P.e_(x.gaj(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaj()+c
y=z.gaj()
return y.charCodeAt(0)==0?y:y},
cT:function(a){var z,y
for(z=0;y=$.$get$bz(),z<y.length;++z)if(a===y[z])return!0
return!1},
ke:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gP(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.j(z.gI(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gI(z);++x
if(!z.A()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gI(z);++x
for(;z.A();t=s,s=r){r=z.gI(z);++x
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
dD:function(a){var z,y,x
z={}
if(P.cT(a))return"{...}"
y=new P.bK("")
try{C.a.h($.$get$bz(),a)
x=y
x.a=x.gaj()+"{"
z.a=!0
J.fa(a,new P.h3(z,y))
z=y
z.a=z.gaj()+"}"}finally{z=$.$get$bz()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaj()
return z.charCodeAt(0)==0?z:z},
jp:{"^":"jj;a,0b,0c,0d,0e,0f,r,$ti",
gP:function(a){return P.eA(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cQ()
this.b=z}return this.ce(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cQ()
this.c=y}return this.ce(y,b)}else return this.dK(0,b)},
dK:function(a,b){var z,y,x
H.B(b,H.y(this,0))
z=this.d
if(z==null){z=P.cQ()
this.d=z}y=this.ci(b)
x=z[y]
if(x==null)z[y]=[this.bi(b)]
else{if(this.cn(x,b)>=0)return!1
x.push(this.bi(b))}return!0},
F:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cq(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cq(this.c,b)
else return this.er(0,b)},
er:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dZ(z,b)
x=this.cn(y,b)
if(x<0)return!1
this.cv(y.splice(x,1)[0])
return!0},
ce:function(a,b){H.B(b,H.y(this,0))
if(H.l(a[b],"$iscP")!=null)return!1
a[b]=this.bi(b)
return!0},
cq:function(a,b){var z
if(a==null)return!1
z=H.l(a[b],"$iscP")
if(z==null)return!1
this.cv(z)
delete a[b]
return!0},
cf:function(){this.r=this.r+1&67108863},
bi:function(a){var z,y
z=new P.cP(H.B(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cf()
return z},
cv:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cf()},
ci:function(a){return J.aN(a)&0x3ffffff},
dZ:function(a,b){return a[this.ci(b)]},
cn:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
n:{
cQ:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cP:{"^":"a;a,0b,0c"},
jq:{"^":"a;a,b,0c,0d,$ti",
gI:function(a){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.b6(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.y(this,0))
this.c=z.b
return!0}}},
n:{
eA:function(a,b,c){var z=new P.jq(a,b,[c])
z.c=a.e
return z}}},
jj:{"^":"hN;"},
c_:{"^":"jr;",$isi:1,$isc:1},
q:{"^":"a;$ti",
gP:function(a){return new H.dB(a,this.gk(a),0,[H.bB(this,a,"q",0)])},
v:function(a,b){return this.j(a,b)},
h9:function(a,b){var z,y,x
z=H.b([],[H.bB(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.z(x)
if(!(y<x))break
C.a.R(z,y,this.j(a,y));++y}return z},
h8:function(a){return this.h9(a,!0)},
i:function(a){return P.cq(a,"[","]")}},
h2:{"^":"a6;"},
h3:{"^":"r:11;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
a6:{"^":"a;$ti",
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.bB(this,a,"a6",0),H.bB(this,a,"a6",1)]})
for(z=J.b3(this.gae(a));z.A();){y=z.gI(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b4(this.gae(a))},
i:function(a){return P.dD(a)},
$isa_:1},
hP:{"^":"a;$ti",
i:function(a){return P.cq(this,"{","}")},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.d6("index"))
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=P.eA(this,this.r,H.y(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
$isi:1},
hN:{"^":"hP;"},
jr:{"^":"a+q;"}}],["","",,P,{"^":"",ck:{"^":"a;$ti"},di:{"^":"i1;$ti"},fA:{"^":"ck;",
$asck:function(){return[P.m,[P.c,P.C]]}},iB:{"^":"fA;a"},iC:{"^":"di;",
fh:function(a,b,c){var z,y,x,w
z=a.length
P.dQ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k_(0,0,x)
if(w.dX(a,b,z)!==z)w.cw(C.h.bG(a,z-1),0)
return C.I.bg(x,0,w.b)},
fg:function(a){return this.fh(a,0,null)},
$asdi:function(){return[P.m,[P.c,P.C]]}},k_:{"^":"a;a,b,c",
cw:function(a,b){var z,y,x,w,v
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
dX:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.bG(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.aS(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cw(w,C.h.aS(a,u)))x=u}else if(w<=2047){v=this.b
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
fC:function(a){var z=J.I(a)
if(!!z.$isr)return z.i(a)
return"Instance of '"+H.aT(a)+"'"},
h0:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fN(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.R(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
dC:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=J.b3(a);x.A();)C.a.h(y,H.B(x.gI(x),c))
if(b)return y
return H.w(J.bd(y),"$isc",z,"$asc")},
cE:function(a,b,c){var z,y
z=P.C
H.w(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.w(a,"$isaQ",[z],"$asaQ")
y=a.length
c=P.dQ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.af()
z=c<y}else z=!0
return H.dP(z?C.a.bg(a,b,c):a)}return P.i4(a,b,c)},
i4:function(a,b,c){var z,y,x
H.w(a,"$isi",[P.C],"$asi")
z=J.b3(a)
for(y=0;y<b;++y)if(!z.A())throw H.d(P.a8(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gI(z))
return H.dP(x)},
hE:function(a,b,c){return new H.fP(a,H.fQ(a,!1,!0,!1))},
jZ:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.C],"$asc")
if(c===C.q){z=$.$get$eM().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fg(H.B(b,H.aD(c,"ck",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hz(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fC(a)},
o:function(a){return new P.ex(a)},
d3:function(a){H.kL(a)},
ad:{"^":"a;"},
"+bool":0,
aE:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aE))return!1
return this.a===b.a&&this.b===b.b},
gM:function(a){var z=this.a
return(z^C.f.aX(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fs(H.hy(this))
y=P.bD(H.hw(this))
x=P.bD(H.hs(this))
w=P.bD(H.ht(this))
v=P.bD(H.hv(this))
u=P.bD(H.hx(this))
t=P.ft(H.hu(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
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
bD:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"T;"},
"+double":0,
b8:{"^":"a;a",
af:function(a,b){return C.f.af(this.a,H.l(b,"$isb8").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.b8))return!1
return this.a===b.a},
gM:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fx()
y=this.a
if(y<0)return"-"+new P.b8(0-y).i(0)
x=z.$1(C.f.T(y,6e7)%60)
w=z.$1(C.f.T(y,1e6)%60)
v=new P.fw().$1(y%1e6)
return""+C.f.T(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
cm:function(a,b,c,d,e,f){return new P.b8(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fw:{"^":"r:12;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fx:{"^":"r:12;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
U:{"^":"a;"},
dJ:{"^":"U;",
i:function(a){return"Throw of null."}},
ap:{"^":"U;a,b,c,d",
gbl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbk:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbl()+y+x
if(!this.a)return w
v=this.gbk()
u=P.bV(this.b)
return w+v+": "+H.j(u)},
n:{
fc:function(a){return new P.ap(!1,null,null,a)},
bQ:function(a,b,c){return new P.ap(!0,a,b,c)},
d6:function(a){return new P.ap(!1,null,a,"Must not be null")}}},
c0:{"^":"ap;e,f,a,b,c,d",
gbl:function(){return"RangeError"},
gbk:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
c1:function(a,b,c){return new P.c0(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.c0(b,c,!0,a,d,"Invalid value")},
dQ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.z(a)
if(0<=a){if(typeof c!=="number")return H.z(c)
z=a>c}else z=!0
if(z)throw H.d(P.a8(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.z(c)
z=b>c}else z=!0
if(z)throw H.d(P.a8(b,a,c,"end",f))
return b}return c}}},
fK:{"^":"ap;e,k:f>,a,b,c,d",
gbl:function(){return"RangeError"},
gbk:function(){if(J.f7(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
K:function(a,b,c,d,e){var z=H.V(e!=null?e:J.b4(b))
return new P.fK(b,z,!0,a,c,"Index out of range")}}},
iz:{"^":"U;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
ab:function(a){return new P.iz(a)}}},
iw:{"^":"U;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eq:function(a){return new P.iw(a)}}},
hZ:{"^":"U;a",
i:function(a){return"Bad state: "+this.a}},
fo:{"^":"U;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.bV(z))+"."},
n:{
b6:function(a){return new P.fo(a)}}},
ho:{"^":"a;",
i:function(a){return"Out of Memory"},
$isU:1},
dX:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isU:1},
fr:{"^":"U;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ex:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fI:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.bh(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"T;"},
"+int":0,
i:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gP(this)
for(y=0;z.A();)++y
return y},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.d6("index"))
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=this.gP(this),y=0;z.A();){x=z.gI(z)
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
i:function(a){return P.fL(this,"(",")")}},
cr:{"^":"a;$ti"},
c:{"^":"a;$ti",$isi:1},
"+List":0,
a_:{"^":"a;$ti"},
G:{"^":"a;",
gM:function(a){return P.a.prototype.gM.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
T:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gM:function(a){return H.bj(this)},
i:function(a){return"Instance of '"+H.aT(this)+"'"},
toString:function(){return this.i(this)}},
ai:{"^":"a;"},
m:{"^":"a;",$isdK:1},
"+String":0,
bK:{"^":"a;aj:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
e_:function(a,b,c){var z=J.b3(b)
if(!z.A())return a
if(c.length===0){do a+=H.j(z.gI(z))
while(z.A())}else{a+=H.j(z.gI(z))
for(;z.A();)a=a+c+H.j(z.gI(z))}return a}}}}],["","",,W,{"^":"",
cj:function(a,b){var z=document.createElement("canvas")
return z},
fz:function(a){H.l(a,"$isa3")
return"wheel"},
c4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ez:function(a,b,c,d){var z,y
z=W.c4(W.c4(W.c4(W.c4(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eR:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.L
if(z===C.j)return a
return z.cB(a,b)},
bc:{"^":"X;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kT:{"^":"n;0k:length=","%":"AccessibleNodeList"},
kU:{"^":"bc;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kV:{"^":"bc;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fg:{"^":"n;","%":";Blob"},
ci:{"^":"bc;",
be:function(a,b,c){if(c!=null)return a.getContext(b,P.ko(c,null))
return a.getContext(b)},
dk:function(a,b){return this.be(a,b,null)},
$isci:1,
"%":"HTMLCanvasElement"},
de:{"^":"n;",$isde:1,"%":"CanvasRenderingContext2D"},
l0:{"^":"J;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l2:{"^":"fq;0k:length=","%":"CSSPerspective"},
b7:{"^":"n;",$isb7:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l3:{"^":"j_;0k:length=",
dl:function(a,b){var z=a.getPropertyValue(this.dO(a,b))
return z==null?"":z},
dO:function(a,b){var z,y
z=$.$get$dj()
y=z[b]
if(typeof y==="string")return y
y=this.eM(a,b)
z[b]=y
return y},
eM:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fu()+b
if(z in a)return z
return b},
gbB:function(a){return a.bottom},
ga4:function(a){return a.height},
gav:function(a){return a.left},
gaK:function(a){return a.right},
gaN:function(a){return a.top},
ga6:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fp:{"^":"a;",
gav:function(a){return this.dl(a,"left")}},
dk:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fq:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
l4:{"^":"dk;0k:length=","%":"CSSTransformValue"},
l5:{"^":"dk;0k:length=","%":"CSSUnparsedValue"},
l6:{"^":"n;0k:length=","%":"DataTransferItemList"},
l7:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
l8:{"^":"j1;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a5,P.T]]},
$asq:function(){return[[P.a5,P.T]]},
$isi:1,
$asi:function(){return[[P.a5,P.T]]},
$isc:1,
$asc:function(){return[[P.a5,P.T]]},
$asv:function(){return[[P.a5,P.T]]},
"%":"ClientRectList|DOMRectList"},
fv:{"^":"n;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.ga6(a))+" x "+H.j(this.ga4(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.bA(b,"$isa5",[P.T],"$asa5")
if(!z)return!1
z=J.ca(b)
return a.left===z.gav(b)&&a.top===z.gaN(b)&&this.ga6(a)===z.ga6(b)&&this.ga4(a)===z.ga4(b)},
gM:function(a){return W.ez(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga6(a)&0x1FFFFFFF,this.ga4(a)&0x1FFFFFFF)},
gbB:function(a){return a.bottom},
ga4:function(a){return a.height},
gav:function(a){return a.left},
gaK:function(a){return a.right},
gaN:function(a){return a.top},
ga6:function(a){return a.width},
$isa5:1,
$asa5:function(){return[P.T]},
"%":";DOMRectReadOnly"},
l9:{"^":"j3;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
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
la:{"^":"n;0k:length=","%":"DOMTokenList"},
iZ:{"^":"c_;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.l(z[b],"$isX")},
h:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var z=this.h8(this)
return new J.aq(z,z.length,0,[H.y(z,0)])},
$asq:function(){return[W.X]},
$asi:function(){return[W.X]},
$asc:function(){return[W.X]}},
X:{"^":"J;",
gcC:function(a){return new W.iZ(a,a.children)},
gcD:function(a){return P.hB(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.T)},
i:function(a){return a.localName},
$isX:1,
"%":";Element"},
a2:{"^":"n;",$isa2:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a3:{"^":"n;",
cz:["dr",function(a,b,c,d){H.f(c,{func:1,args:[W.a2]})
if(c!=null)this.dL(a,b,c,!1)}],
dL:function(a,b,c,d){return a.addEventListener(b,H.b_(H.f(c,{func:1,args:[W.a2]}),1),!1)},
$isa3:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eF|eG|eI|eJ"},
b9:{"^":"fg;",$isb9:1,"%":"File"},
lb:{"^":"j8;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b9]},
$asq:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asv:function(){return[W.b9]},
"%":"FileList"},
lc:{"^":"a3;0k:length=","%":"FileWriter"},
ld:{"^":"bc;0k:length=","%":"HTMLFormElement"},
bb:{"^":"n;",$isbb:1,"%":"Gamepad"},
le:{"^":"n;0k:length=","%":"History"},
lf:{"^":"jl;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
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
bX:{"^":"n;0cF:data=",$isbX:1,"%":"ImageData"},
dt:{"^":"bc;",$isdt:1,"%":"HTMLImageElement"},
be:{"^":"cI;",$isbe:1,"%":"KeyboardEvent"},
lj:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
lk:{"^":"n;0k:length=","%":"MediaList"},
ll:{"^":"a3;",
cz:function(a,b,c,d){H.f(c,{func:1,args:[W.a2]})
if(b==="message")a.start()
this.dr(a,b,c,!1)},
"%":"MessagePort"},
lm:{"^":"js;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gae:function(a){var z=H.b([],[P.m])
this.H(a,new W.hf(z))
return z},
gk:function(a){return a.size},
$asa6:function(){return[P.m,null]},
$isa_:1,
$asa_:function(){return[P.m,null]},
"%":"MIDIInputMap"},
hf:{"^":"r:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ln:{"^":"jt;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gae:function(a){var z=H.b([],[P.m])
this.H(a,new W.hg(z))
return z},
gk:function(a){return a.size},
$asa6:function(){return[P.m,null]},
$isa_:1,
$asa_:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
hg:{"^":"r:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bf:{"^":"n;",$isbf:1,"%":"MimeType"},
lo:{"^":"jv;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bf]},
$asq:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asv:function(){return[W.bf]},
"%":"MimeTypeArray"},
ah:{"^":"cI;",$isah:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iY:{"^":"c_;a",
gP:function(a){var z=this.a.childNodes
return new W.ds(z,z.length,-1,[H.bB(C.J,z,"v",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asq:function(){return[W.J]},
$asi:function(){return[W.J]},
$asc:function(){return[W.J]}},
J:{"^":"a3;",
i:function(a){var z=a.nodeValue
return z==null?this.ds(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hl:{"^":"jx;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
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
bi:{"^":"n;0k:length=",$isbi:1,"%":"Plugin"},
lx:{"^":"jB;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bi]},
$asq:function(){return[W.bi]},
$isi:1,
$asi:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asv:function(){return[W.bi]},
"%":"PluginArray"},
lz:{"^":"jH;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gae:function(a){var z=H.b([],[P.m])
this.H(a,new W.hK(z))
return z},
gk:function(a){return a.size},
$asa6:function(){return[P.m,null]},
$isa_:1,
$asa_:function(){return[P.m,null]},
"%":"RTCStatsReport"},
hK:{"^":"r:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lB:{"^":"bc;0k:length=","%":"HTMLSelectElement"},
bk:{"^":"a3;",$isbk:1,"%":"SourceBuffer"},
lC:{"^":"eG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bk]},
$asq:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asv:function(){return[W.bk]},
"%":"SourceBufferList"},
bl:{"^":"n;",$isbl:1,"%":"SpeechGrammar"},
lD:{"^":"jJ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bl]},
$asq:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asv:function(){return[W.bl]},
"%":"SpeechGrammarList"},
bm:{"^":"n;0k:length=",$isbm:1,"%":"SpeechRecognitionResult"},
lF:{"^":"jM;",
j:function(a,b){return a.getItem(H.O(b))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gae:function(a){var z=H.b([],[P.m])
this.H(a,new W.i0(z))
return z},
gk:function(a){return a.length},
$asa6:function(){return[P.m,P.m]},
$isa_:1,
$asa_:function(){return[P.m,P.m]},
"%":"Storage"},
i0:{"^":"r:22;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bn:{"^":"n;",$isbn:1,"%":"CSSStyleSheet|StyleSheet"},
bo:{"^":"a3;",$isbo:1,"%":"TextTrack"},
bp:{"^":"a3;",$isbp:1,"%":"TextTrackCue|VTTCue"},
lJ:{"^":"jQ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bp]},
$asq:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asv:function(){return[W.bp]},
"%":"TextTrackCueList"},
lK:{"^":"eJ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bo]},
$asq:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asv:function(){return[W.bo]},
"%":"TextTrackList"},
lL:{"^":"n;0k:length=","%":"TimeRanges"},
bq:{"^":"n;",$isbq:1,"%":"Touch"},
aU:{"^":"cI;",$isaU:1,"%":"TouchEvent"},
lM:{"^":"jW;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bq]},
$asq:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asv:function(){return[W.bq]},
"%":"TouchList"},
lN:{"^":"n;0k:length=","%":"TrackDefaultList"},
cI:{"^":"a2;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lQ:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
lR:{"^":"a3;0k:length=","%":"VideoTrackList"},
bt:{"^":"ah;",
gfl:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.ab("deltaY is not supported"))},
gfk:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.ab("deltaX is not supported"))},
$isbt:1,
"%":"WheelEvent"},
iR:{"^":"a3;",
ev:function(a,b){return a.requestAnimationFrame(H.b_(H.f(b,{func:1,ret:-1,args:[P.T]}),1))},
dW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lW:{"^":"k2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b7]},
$asq:function(){return[W.b7]},
$isi:1,
$asi:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asv:function(){return[W.b7]},
"%":"CSSRuleList"},
lX:{"^":"fv;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.bA(b,"$isa5",[P.T],"$asa5")
if(!z)return!1
z=J.ca(b)
return a.left===z.gav(b)&&a.top===z.gaN(b)&&a.width===z.ga6(b)&&a.height===z.ga4(b)},
gM:function(a){return W.ez(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga4:function(a){return a.height},
ga6:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lZ:{"^":"k4;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bb]},
$asq:function(){return[W.bb]},
$isi:1,
$asi:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asv:function(){return[W.bb]},
"%":"GamepadList"},
m_:{"^":"k6;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
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
m0:{"^":"k8;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bm]},
$asq:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asv:function(){return[W.bm]},
"%":"SpeechRecognitionResultList"},
m1:{"^":"ka;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bn]},
$asq:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asv:function(){return[W.bn]},
"%":"StyleSheetList"},
j4:{"^":"cD;a,b,c,$ti",
fB:function(a,b,c,d){var z=H.y(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.S(this.a,this.b,a,!1,z)}},
lY:{"^":"j4;a,b,c,$ti"},
j5:{"^":"dZ;a,b,c,d,e,$ti",
eN:function(){var z=this.d
if(z!=null&&this.a<=0)J.f9(this.b,this.c,z,!1)},
n:{
S:function(a,b,c,d,e){var z=c==null?null:W.eR(new W.j6(c),W.a2)
z=new W.j5(0,a,b,z,!1,[e])
z.eN()
return z}}},
j6:{"^":"r:7;a",
$1:function(a){return this.a.$1(H.l(a,"$isa2"))}},
v:{"^":"a;$ti",
gP:function(a){return new W.ds(a,this.gk(a),-1,[H.bB(this,a,"v",0)])}},
ds:{"^":"a;a,b,c,0d,$ti",
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f8(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gI:function(a){return this.d}},
j_:{"^":"n+fp;"},
j0:{"^":"n+q;"},
j1:{"^":"j0+v;"},
j2:{"^":"n+q;"},
j3:{"^":"j2+v;"},
j7:{"^":"n+q;"},
j8:{"^":"j7+v;"},
jk:{"^":"n+q;"},
jl:{"^":"jk+v;"},
js:{"^":"n+a6;"},
jt:{"^":"n+a6;"},
ju:{"^":"n+q;"},
jv:{"^":"ju+v;"},
jw:{"^":"n+q;"},
jx:{"^":"jw+v;"},
jA:{"^":"n+q;"},
jB:{"^":"jA+v;"},
jH:{"^":"n+a6;"},
eF:{"^":"a3+q;"},
eG:{"^":"eF+v;"},
jI:{"^":"n+q;"},
jJ:{"^":"jI+v;"},
jM:{"^":"n+a6;"},
jP:{"^":"n+q;"},
jQ:{"^":"jP+v;"},
eI:{"^":"a3+q;"},
eJ:{"^":"eI+v;"},
jV:{"^":"n+q;"},
jW:{"^":"jV+v;"},
k1:{"^":"n+q;"},
k2:{"^":"k1+v;"},
k3:{"^":"n+q;"},
k4:{"^":"k3+v;"},
k5:{"^":"n+q;"},
k6:{"^":"k5+v;"},
k7:{"^":"n+q;"},
k8:{"^":"k7+v;"},
k9:{"^":"n+q;"},
ka:{"^":"k9+v;"}}],["","",,P,{"^":"",
kr:function(a){var z,y
z=J.I(a)
if(!!z.$isbX){y=z.gcF(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eL(a.data,a.height,a.width)},
kq:function(a){if(a instanceof P.eL)return{data:a.a,height:a.b,width:a.c}
return a},
aC:function(a){var z,y,x,w,v
if(a==null)return
z=P.fY(P.m,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.O(y[w])
z.R(0,v,a[v])}return z},
ko:function(a,b){var z={}
a.H(0,new P.kp(z))
return z},
dr:function(){var z=$.dq
if(z==null){z=J.ce(window.navigator.userAgent,"Opera",0)
$.dq=z}return z},
fu:function(){var z,y
z=$.dm
if(z!=null)return z
y=$.dn
if(y==null){y=J.ce(window.navigator.userAgent,"Firefox",0)
$.dn=y}if(y)z="-moz-"
else{y=$.dp
if(y==null){y=!P.dr()&&J.ce(window.navigator.userAgent,"Trident/",0)
$.dp=y}if(y)z="-ms-"
else z=P.dr()?"-o-":"-webkit-"}$.dm=z
return z},
eL:{"^":"a;cF:a>,b,c",$isbX:1},
kp:{"^":"r:11;a",
$2:function(a,b){this.a[a]=b}},
fF:{"^":"c_;a,b",
gbn:function(){var z,y,x
z=this.b
y=H.aD(z,"q",0)
x=W.X
return new H.h4(new H.iP(z,H.f(new P.fG(),{func:1,ret:P.ad,args:[y]}),[y]),H.f(new P.fH(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b4(this.gbn().a)},
j:function(a,b){var z=this.gbn()
return z.b.$1(J.d5(z.a,b))},
gP:function(a){var z=P.dC(this.gbn(),!1,W.X)
return new J.aq(z,z.length,0,[H.y(z,0)])},
$asq:function(){return[W.X]},
$asi:function(){return[W.X]},
$asc:function(){return[W.X]}},
fG:{"^":"r:24;",
$1:function(a){return!!J.I(H.l(a,"$isJ")).$isX}},
fH:{"^":"r:25;",
$1:function(a){return H.h(H.l(a,"$isJ"),"$isX")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jC:{"^":"a;$ti",
gaK:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.B(z+this.c,H.y(this,0))},
gbB:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.B(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bA(b,"$isa5",[P.T],"$asa5")
if(!z)return!1
z=this.a
y=J.ca(b)
x=y.gav(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaN(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.y(this,0)
if(H.B(z+this.c,w)===y.gaK(b)){if(typeof x!=="number")return x.B()
z=H.B(x+this.d,w)===y.gbB(b)}else z=!1}else z=!1}else z=!1
return z},
gM:function(a){var z,y,x,w,v
z=this.a
y=J.aN(z)
x=this.b
w=J.aN(x)
if(typeof z!=="number")return z.B()
v=H.y(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.B(x+this.d,v)
return P.jm(P.c5(P.c5(P.c5(P.c5(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a5:{"^":"jC;av:a>,aN:b>,a6:c>,a4:d>,$ti",n:{
hB:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.af()
if(c<0)z=-c*0
else z=c
H.B(z,e)
if(typeof d!=="number")return d.af()
if(d<0)y=-d*0
else y=d
return new P.a5(a,b,z,H.B(y,e),[e])}}}}],["","",,P,{"^":"",bG:{"^":"n;",$isbG:1,"%":"SVGLength"},li:{"^":"jo;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bG]},
$isi:1,
$asi:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asv:function(){return[P.bG]},
"%":"SVGLengthList"},bJ:{"^":"n;",$isbJ:1,"%":"SVGNumber"},lv:{"^":"jz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bJ]},
$isi:1,
$asi:function(){return[P.bJ]},
$isc:1,
$asc:function(){return[P.bJ]},
$asv:function(){return[P.bJ]},
"%":"SVGNumberList"},ly:{"^":"n;0k:length=","%":"SVGPointList"},lG:{"^":"jO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$asv:function(){return[P.m]},
"%":"SVGStringList"},lH:{"^":"X;",
gcC:function(a){return new P.fF(a,new W.iY(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bL:{"^":"n;",$isbL:1,"%":"SVGTransform"},lO:{"^":"jY;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bL]},
$isi:1,
$asi:function(){return[P.bL]},
$isc:1,
$asc:function(){return[P.bL]},
$asv:function(){return[P.bL]},
"%":"SVGTransformList"},jn:{"^":"n+q;"},jo:{"^":"jn+v;"},jy:{"^":"n+q;"},jz:{"^":"jy+v;"},jN:{"^":"n+q;"},jO:{"^":"jN+v;"},jX:{"^":"n+q;"},jY:{"^":"jX+v;"}}],["","",,P,{"^":"",kW:{"^":"n;0k:length=","%":"AudioBuffer"},kX:{"^":"iX;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gae:function(a){var z=H.b([],[P.m])
this.H(a,new P.fe(z))
return z},
gk:function(a){return a.size},
$asa6:function(){return[P.m,null]},
$isa_:1,
$asa_:function(){return[P.m,null]},
"%":"AudioParamMap"},fe:{"^":"r:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},kY:{"^":"a3;0k:length=","%":"AudioTrackList"},ff:{"^":"a3;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lw:{"^":"ff;0k:length=","%":"OfflineAudioContext"},iX:{"^":"n+a6;"}}],["","",,P,{"^":"",cC:{"^":"n;",
h4:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isbX)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kq(g))
return}if(!!z.$isdt)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.fc("Incorrect number or type of arguments"))},
h3:function(a,b,c,d,e,f,g){return this.h4(a,b,c,d,e,f,g,null,null,null)},
$iscC:1,
"%":"WebGLRenderingContext"},iu:{"^":"n;",$isiu:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lE:{"^":"jL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aC(a.item(b))},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[[P.a_,,,]]},
$isi:1,
$asi:function(){return[[P.a_,,,]]},
$isc:1,
$asc:function(){return[[P.a_,,,]]},
$asv:function(){return[[P.a_,,,]]},
"%":"SQLResultSetRowList"},jK:{"^":"n+q;"},jL:{"^":"jK+v;"}}],["","",,O,{"^":"",aO:{"^":"a;0a,0b,0c,0d,$ti",
c9:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
c2:function(a,b,c){var z=H.aD(this,"aO",0)
H.f(b,{func:1,ret:P.ad,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.C,[P.i,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
bf:function(a,b){return this.c2(a,null,b)},
el:function(a){var z
H.w(a,"$isi",[H.aD(this,"aO",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
e1:function(a,b){var z
H.w(b,"$isi",[H.aD(this,"aO",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gP:function(a){var z=this.a
return new J.aq(z,z.length,0,[H.y(z,0)])},
v:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aD(this,"aO",0)
H.B(b,z)
z=[z]
if(this.el(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.e1(x,H.b([b],z))}},
$isi:1,
n:{
cl:function(a){var z=new O.aO([a])
z.c9(a)
return z}}},cy:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.af()
this.b=z}return z},
dD:function(a){var z=this.b
if(!(z==null))z.G(a)},
ag:function(){return this.dD(null)},
gL:function(a){var z=this.a
if(z.length>0)return C.a.gbR(z)
else return V.cz()},
d8:function(a){var z=this.a
if(a==null)C.a.h(z,V.cz())
else C.a.h(z,a)
this.ag()},
bV:function(){var z=this.a
if(z.length>0){z.pop()
this.ag()}}}}],["","",,E,{"^":"",cf:{"^":"a;"},aF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0S:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sc3:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.f(this.gd5(),{func:1,ret:-1,args:[D.u]})
C.a.F(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.f(this.gd5(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}w=new D.M("shape",z,this.c,this,[F.dV])
w.b=!0
this.a0(w)}},
saG:function(a){var z,y,x,w
if(!J.N(this.r,a)){z=this.r
if(z!=null){y=z.gw()
y.toString
x=H.f(this.gd4(),{func:1,ret:-1,args:[D.u]})
C.a.F(y.a,x)}if(a!=null){y=a.gw()
y.toString
x=H.f(this.gd4(),{func:1,ret:-1,args:[D.u]})
C.a.h(y.a,x)}this.r=a
w=new D.M("mover",z,a,this,[U.bI])
w.b=!0
this.a0(w)}},
bd:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.c
z.sdh(z.a+z.d*b.y)
z.sd6(0,z.b+z.e*b.y)
z.sda(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.ar(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.m(0,V.ar(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.m(0,V.ar(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.a5(0)}u=z.x}else u=null
if(!J.N(u,this.x)){t=this.x
this.x=u
s=new D.M("matrix",t,u,this,[V.ak])
s.b=!0
this.a0(s)}for(z=this.y.a,z=new J.aq(z,z.length,0,[H.y(z,0)]);z.A();)z.d.bd(0,b)},
ax:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gL(z))
else C.a.h(z.a,y.m(0,z.gL(z)))
z.ag()
a.d9(this.f)
z=a.dy
x=(z&&C.a).gbR(z)
if(x!=null&&this.d!=null)x.fX(a,this)
for(z=this.y.a,z=new J.aq(z,z.length,0,[H.y(z,0)]);z.A();)z.d.ax(a)
a.d7()
a.dx.bV()},
a0:function(a){var z=this.z
if(!(z==null))z.G(a)},
N:function(){return this.a0(null)},
fK:[function(a){H.l(a,"$isu")
this.e=null
this.a0(a)},function(){return this.fK(null)},"hM","$1","$0","gd5",0,2,0],
fJ:[function(a){this.a0(H.l(a,"$isu"))},function(){return this.fJ(null)},"hL","$1","$0","gd4",0,2,0],
fH:[function(a){this.a0(H.l(a,"$isu"))},function(){return this.fH(null)},"hJ","$1","$0","gd3",0,2,0],
hI:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aF],"$asi")
for(z=b.length,y=this.gd3(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.aP()
t.a=H.b([],w)
t.c=0
u.sS(t)}t=u.gS()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.N()},"$2","gfG",8,0,5],
hK:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aF],"$asi")
for(z=b.length,y=this.gd3(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.aP()
t.a=H.b([],w)
t.c=0
u.sS(t)}t=u.gS()
t.toString
H.f(y,x)
C.a.F(t.a,y)}}this.N()},"$2","gfI",8,0,5],
$isas:1},hF:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dz:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.aE(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cy()
y=[V.ak]
z.a=H.b([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.u]}
v=H.f(new E.hH(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cy()
z.a=H.b([],y)
v=z.gw()
v.toString
x=H.f(new E.hI(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cy()
z.a=H.b([],y)
y=z.gw()
y.toString
w=H.f(new E.hJ(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.b([],[O.cF])
this.dy=z
C.a.h(z,null)
this.fr=new H.aR(0,0,[P.m,A.dU])},
gfT:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gL(z)
y=this.db
y=z.m(0,y.gL(y))
this.z=y
z=y}return z},
d9:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbR(z):a;(z&&C.a).h(z,y)},
d7:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hG:function(a,b){var z=new E.hF(a,b)
z.dz(a,b)
return z}}},hH:{"^":"r:8;a",
$1:function(a){var z
H.l(a,"$isu")
z=this.a
z.z=null
z.ch=null}},hI:{"^":"r:8;a",
$1:function(a){var z
H.l(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hJ:{"^":"r:8;a",
$1:function(a){var z
H.l(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},ic:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0S:x@,0y,0z,0Q,0ch",
dF:[function(a){var z
H.l(a,"$isu")
z=this.x
if(!(z==null))z.G(a)
this.fZ()},function(){return this.dF(null)},"dE","$1","$0","gca",0,2,0],
gfq:function(){var z,y,x
z=Date.now()
y=C.f.T(P.cm(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.aE(z,!1)
return x/y},
cr:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.z(z)
x=C.i.bP(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.m()
w=C.i.bP(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.e3(C.l,this.gfY())},
fZ:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.ie(this),{func:1,ret:-1,args:[P.T]})
C.t.dW(z)
C.t.ev(z,W.eR(y,P.T))}},"$0","gfY",0,0,2],
fW:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cr()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aE(w,!1)
x.y=P.cm(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.ax(this.e)}}catch(v){z=H.aM(v)
y=H.b1(v)
P.d3("Error: "+H.j(z))
P.d3("Stack: "+H.j(y))
throw H.d(z)}},
n:{
id:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$isci)return E.e2(a,!0,!0,!0,!1)
y=W.cj(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcC(a).h(0,y)
w=E.e2(y,!0,!0,!0,!1)
w.a=a
return w},
e2:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ic()
y=P.fZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.k.be(a,"webgl",y)
x=H.l(x==null?C.k.be(a,"experimental-webgl",y):x,"$iscC")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hG(x,a)
w=new T.i7(x)
w.b=H.V(x.getParameter(3379))
w.c=H.V(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iA(a)
v=new X.fT()
v.c=new X.bg(!1,!1,!1)
v.d=P.h_(null,null,null,P.C)
w.b=v
v=new X.hh(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.h1(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ii(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.dZ,P.a]])
w.z=v
u=document
t=W.ah
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.S(u,"contextmenu",H.f(w.ge8(),s),!1,t))
v=w.z
r=W.a2
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.S(a,"focus",H.f(w.geb(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.S(a,"blur",H.f(w.ge5(),q),!1,r))
v=w.z
p=W.be
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.S(u,"keyup",H.f(w.ged(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.S(u,"keydown",H.f(w.gec(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.S(a,"mousedown",H.f(w.geg(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.S(a,"mouseup",H.f(w.gei(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.S(a,"mousemove",H.f(w.geh(),s),!1,t))
p=w.z
o=W.bt;(p&&C.a).h(p,W.S(a,H.O(W.fz(a)),H.f(w.gej(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.S(u,"mousemove",H.f(w.ge9(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.S(u,"mouseup",H.f(w.gea(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.S(u,"pointerlockchange",H.f(w.gek(),q),!1,r))
r=w.z
q=W.aU
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.S(a,"touchstart",H.f(w.geq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.S(a,"touchend",H.f(w.geo(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.S(a,"touchmove",H.f(w.gep(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.aE(Date.now(),!1)
z.ch=0
z.cr()
return z}}},ie:{"^":"r:27;a",
$1:function(a){var z
H.kK(a)
z=this.a
if(z.z){z.z=!1
z.fW()}}}}],["","",,Z,{"^":"",ev:{"^":"a;a,b",n:{
cN:function(a,b,c){var z
H.w(c,"$isc",[P.C],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bw(c)),35044)
a.bindBuffer(b,null)
return new Z.ev(b,z)}}},da:{"^":"cf;a,b,c,d,e",
aa:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aM(y)
x=P.o('Failed to bind buffer attribute "'+J.a1(this.a)+'": '+H.j(z))
throw H.d(x)}},
i:function(a){return"["+J.a1(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},iO:{"^":"a;a",$iskZ:1},db:{"^":"a;a,0b,c,d",
au:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aa:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aa(a)},
aP:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ax:function(a){var z,y,x,w,v
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
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a1(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(y,", ")+"\nAttrs:   "+C.a.u(u,", ")},
$islI:1},bY:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aT(this.c)+"'")+"]"}},aV:{"^":"a;a",
gc4:function(a){var z,y
z=this.a
y=(z&$.$get$ay().a)!==0?3:0
if((z&$.$get$ax().a)!==0)y+=3
if((z&$.$get$aw().a)!==0)y+=3
if((z&$.$get$az().a)!==0)y+=2
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$br().a)!==0)y+=3
if((z&$.$get$bs().a)!==0)y+=4
if((z&$.$get$aW().a)!==0)++y
return(z&$.$get$av().a)!==0?y+4:y},
fa:function(a){var z,y,x
z=$.$get$ay()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$br()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bs()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$av()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eu()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.m])
y=this.a
if((y&$.$get$ay().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$az().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aA().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$br().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bs().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$av().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.u(z,"|")},
n:{
ac:function(a){return new Z.aV(a)}}}}],["","",,D,{"^":"",fj:{"^":"a;"},aP:{"^":"a;0a,0b,0c",
G:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.H(y,new D.fD(z))
return x!==0},
cG:function(){return this.G(null)},
h_:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.G(y)}}},
a5:function(a){return this.h_(a,!0,!1)},
n:{
af:function(){var z=new D.aP()
z.a=H.b([],[{func:1,ret:-1,args:[D.u]}])
z.c=0
return z}}},fD:{"^":"r:28;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"a;a,0b"},co:{"^":"u;c,d,a,0b,$ti"},cp:{"^":"u;c,d,a,0b,$ti"},M:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dc:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"l_<"}},dy:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dy))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},fS:{"^":"u;c,a,0b"},fT:{"^":"a;0a,0b,0c,0d",
fQ:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.fS(a,this)
y.b=!0
return z.G(y)},
fM:function(a){this.c=a.b
this.d.F(0,a.a)
return!1}},h1:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aT:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aE(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.m()
v=b.b
u=this.ch
if(typeof v!=="number")return v.m()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gbF()
s=new X.dH(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bU:function(a,b){this.r=a.a
return!1},
aI:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dn()
if(typeof z!=="number")return z.di()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.aT(a,b))
return!0},
aH:function(a,b){return!1},
fR:function(a){return!1},
ef:function(a,b,c){return}},bg:{"^":"a;a,b,c",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bg))return!1
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
return z+(this.c?"Shift+":"")}},dH:{"^":"dN;x,y,z,Q,ch,c,d,e,a,0b"},hh:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
e_:function(a,b,c){var z,y,x
z=new P.aE(Date.now(),!1)
y=this.a.gbF()
x=new X.dH(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bU:function(a,b){this.f=a.a
return!1},
aI:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dn()
if(typeof z!=="number")return z.di()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.e_(a,b,!0))
return!0},
aH:function(a,b){return!1},
fS:function(a,b){return!1}},dN:{"^":"u;"},ih:{"^":"dN;x,y,z,Q,ch,c,d,e,a,0b"},ii:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aT:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.R],"$asc")
z=new P.aE(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gbF()
w=new X.ih(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fP:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.G(this.aT(a,!0))
return!0},
fN:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.G(this.aT(a,!0))
return!0},
fO:function(a){H.w(a,"$isc",[V.R],"$asc")
return!1}},iA:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbF:function(){var z=this.a
return V.dS(0,0,(z&&C.k).gcD(z).c,C.k.gcD(z).d)},
cl:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dy(z,new X.bg(y,a.altKey,a.shiftKey))},
an:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bg(y,a.altKey,a.shiftKey)},
bw:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bg(y,a.altKey,a.shiftKey)},
a9:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.V()
v=z.top
if(typeof x!=="number")return x.V()
return new V.R(y-w,x-v)},
aA:function(a){return new V.bM(a.movementX,a.movementY)},
br:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.i.a1(u.pageX)
C.i.a1(u.pageY)
s=z.left
C.i.a1(u.pageX)
C.a.h(y,new V.R(t-s,C.i.a1(u.pageY)-z.top))}return y},
a7:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dc(z,new X.bg(y,a.altKey,a.shiftKey))},
bo:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.V()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.V()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
hp:[function(a){this.f=!0},"$1","geb",4,0,7],
hj:[function(a){this.f=!1},"$1","ge5",4,0,7],
hm:[function(a){H.l(a,"$isah")
if(this.f&&this.bo(a))a.preventDefault()},"$1","ge8",4,0,3],
hr:[function(a){var z
H.l(a,"$isbe")
if(!this.f)return
z=this.cl(a)
if(this.b.fQ(z))a.preventDefault()},"$1","ged",4,0,15],
hq:[function(a){var z
H.l(a,"$isbe")
if(!this.f)return
z=this.cl(a)
this.b.fM(z)},"$1","gec",4,0,15],
ht:[function(a){var z,y,x,w
H.l(a,"$isah")
z=this.a
z.focus()
this.f=!0
this.an(a)
if(this.x){y=this.a7(a)
x=this.aA(a)
if(this.d.bU(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a7(a)
w=this.a9(a)
if(this.c.bU(y,w))a.preventDefault()},"$1","geg",4,0,3],
hv:[function(a){var z,y,x
H.l(a,"$isah")
this.an(a)
z=this.a7(a)
if(this.x){y=this.aA(a)
if(this.d.aI(z,y))a.preventDefault()
return}if(this.r)return
x=this.a9(a)
if(this.c.aI(z,x))a.preventDefault()},"$1","gei",4,0,3],
ho:[function(a){var z,y,x
H.l(a,"$isah")
if(!this.bo(a)){this.an(a)
z=this.a7(a)
if(this.x){y=this.aA(a)
if(this.d.aI(z,y))a.preventDefault()
return}if(this.r)return
x=this.a9(a)
if(this.c.aI(z,x))a.preventDefault()}},"$1","gea",4,0,3],
hu:[function(a){var z,y,x
H.l(a,"$isah")
this.an(a)
z=this.a7(a)
if(this.x){y=this.aA(a)
if(this.d.aH(z,y))a.preventDefault()
return}if(this.r)return
x=this.a9(a)
if(this.c.aH(z,x))a.preventDefault()},"$1","geh",4,0,3],
hn:[function(a){var z,y,x
H.l(a,"$isah")
if(!this.bo(a)){this.an(a)
z=this.a7(a)
if(this.x){y=this.aA(a)
if(this.d.aH(z,y))a.preventDefault()
return}if(this.r)return
x=this.a9(a)
if(this.c.aH(z,x))a.preventDefault()}},"$1","ge9",4,0,3],
hw:[function(a){var z,y
H.l(a,"$isbt")
this.an(a)
z=new V.bM((a&&C.r).gfk(a),C.r.gfl(a)).D(0,180)
if(this.x){if(this.d.fR(z))a.preventDefault()
return}if(this.r)return
y=this.a9(a)
if(this.c.fS(z,y))a.preventDefault()},"$1","gej",4,0,33],
hx:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a7(this.y)
v=this.a9(this.y)
this.d.ef(w,v,x)}},"$1","gek",4,0,7],
hC:[function(a){var z
H.l(a,"$isaU")
this.a.focus()
this.f=!0
this.bw(a)
z=this.br(a)
if(this.e.fP(z))a.preventDefault()},"$1","geq",4,0,9],
hA:[function(a){var z
H.l(a,"$isaU")
this.bw(a)
z=this.br(a)
if(this.e.fN(z))a.preventDefault()},"$1","geo",4,0,9],
hB:[function(a){var z
H.l(a,"$isaU")
this.bw(a)
z=this.br(a)
if(this.e.fO(z))a.preventDefault()},"$1","gep",4,0,9]}}],["","",,D,{"^":"",bU:{"^":"a;0a,0b,0c,0d",
ah:[function(a){var z
H.l(a,"$isu")
z=this.d
if(!(z==null))z.G(a)},function(){return this.ah(null)},"hc","$1","$0","gdG",0,2,0],
$isQ:1,
$isas:1},Q:{"^":"a;",$isas:1},fU:{"^":"aO;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
ah:function(a){var z=this.Q
if(!(z==null))z.G(a)},
ee:[function(a){var z
H.l(a,"$isu")
z=this.ch
if(!(z==null))z.G(a)},function(){return this.ee(null)},"hs","$1","$0","gco",0,2,0],
hy:[function(a){var z,y,x
H.w(a,"$isi",[D.Q],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.dS(x))return!1}return!0},"$1","gem",4,0,31],
hg:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Q
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gco(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.l(b[u],"$isQ")
if(t instanceof D.bU)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.ah(z)},"$2","ge2",8,0,16],
hz:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Q
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gco(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.l(b[u],"$isQ")
if(t instanceof D.bU)C.a.F(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.F(s.a,x)}z=new D.cp(a,b,this,[z])
z.b=!0
this.ah(z)},"$2","gen",8,0,16],
dS:function(a){var z=C.a.aB(this.e,a)
return z},
$asi:function(){return[D.Q]},
$asaO:function(){return[D.Q]}},hr:{"^":"a;",$isQ:1,$isas:1},hY:{"^":"a;",$isQ:1,$isas:1},i9:{"^":"a;",$isQ:1,$isas:1},ia:{"^":"a;",$isQ:1,$isas:1},ib:{"^":"a;",$isQ:1,$isas:1}}],["","",,V,{"^":"",
l1:[function(a,b){if(typeof b!=="number")return b.V()
if(typeof a!=="number")return H.z(a)
return Math.abs(b-a)<=1e-9},"$2","he",8,0,30],
d4:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dm(a-b,z)
return(a<0?a+z:a)+b},
D:function(a,b,c){if(a==null)return C.h.Y("null",c)
return C.h.Y(C.i.dg($.k.$2(a,0)?0:a,b),c+b+1)},
b0:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.t],"$asc")
z=H.b([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.D(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.R(z,u,C.h.Y(z[u],x))}return z},
d2:function(a,b){return C.i.h7(Math.pow(b,C.y.bP(Math.log(H.kn(a))/Math.log(b))))},
Z:{"^":"a;a,b,c",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
bS:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bS))return!1
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
dF:{"^":"a;a,b,c,d,e,f,r,x,y",
Z:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dF))return!1
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
y=V.b0(H.b([this.a,this.d,this.r],z),3,0)
x=V.b0(H.b([this.b,this.e,this.x],z),3,0)
w=V.b0(H.b([this.c,this.f,this.y],z),3,0)
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
d1:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.k.$2(a2,0))return V.cz()
a3=1/a2
a4=-w
a5=-i
return V.ar((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.ar(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
bZ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.at(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
p:function(a,b){var z
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
i:function(a){return this.C()},
d0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.b0(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b0(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b0(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b0(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
C:function(){return this.d0("",3,0)},
t:function(a){return this.d0(a,3,0)},
n:{
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cz:function(){return V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dG:function(a,b,c){var z,y,x,w,v
z=c.D(0,Math.sqrt(c.J(c)))
y=b.aC(z)
x=y.D(0,Math.sqrt(y.J(y)))
w=z.aC(x)
v=new V.H(a.a,a.b,a.c)
return V.ar(x.a,w.a,z.a,x.ay(0).J(v),x.b,w.b,z.b,w.ay(0).J(v),x.c,w.c,z.c,z.ay(0).J(v),0,0,0,1)}}},
R:{"^":"a;a,b",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
at:{"^":"a;a,b,c",
V:function(a,b){return new V.at(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}},
dM:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dM))return!1
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
dR:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dR))return!1
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
n:{
dS:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dR(a,b,c,d)}}},
bM:{"^":"a;a,b",
fz:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return Math.sqrt(z*z+y*y)},"$0","gk",1,0,17],
D:function(a,b){var z,y
if($.k.$2(b,0))return new V.bM(0,0)
z=this.a
if(typeof z!=="number")return z.D()
y=this.b
if(typeof y!=="number")return y.D()
return new V.bM(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bM))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}},
H:{"^":"a;a,b,c",
fz:[function(a){return Math.sqrt(this.J(this))},"$0","gk",1,0,17],
J:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bS:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.H(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aC:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
ay:function(a){return new V.H(-this.a,-this.b,-this.c)},
D:function(a,b){if($.k.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
d2:function(){if(!$.k.$2(0,this.a))return!1
if(!$.k.$2(0,this.b))return!1
if(!$.k.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
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
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dg:{"^":"bI;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.af()
this.b=z}return z},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dg))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")},
n:{
dh:function(a){var z=new U.dg()
z.a=a
return z}}},bI:{"^":"fj;"},dT:{"^":"bI;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.af()
this.y=z}return z},
al:function(a){var z=this.y
if(!(z==null))z.G(a)},
sdh:function(a){var z,y
a=V.d4(a,0,6.283185307179586)
z=this.a
if(!$.k.$2(z,a)){y=this.a
this.a=a
z=new D.M("yaw",y,a,this,[P.t])
z.b=!0
this.al(z)}},
sd6:function(a,b){var z,y
b=V.d4(b,0,6.283185307179586)
z=this.b
if(!$.k.$2(z,b)){y=this.b
this.b=b
z=new D.M("pitch",y,b,this,[P.t])
z.b=!0
this.al(z)}},
sda:function(a){var z,y
a=V.d4(a,0,6.283185307179586)
z=this.c
if(!$.k.$2(z,a)){y=this.c
this.c=a
z=new D.M("roll",y,a,this,[P.t])
z.b=!0
this.al(z)}},
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dT))return!1
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
i:function(a){return"Rotater: ["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"], ["+V.D(this.d,3,0)+", "+V.D(this.e,3,0)+", "+V.D(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fB:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ai:[function(a){var z
H.l(a,"$isu")
z=this.x
if(!(z==null))z.G(a)},function(){return this.ai(null)},"hd","$1","$0","ga3",0,2,0],
hk:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga3(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.sS(s)}s=t.gS()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","ge6",8,0,5],
hl:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aF
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga3(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.aP()
s.a=H.b([],v)
s.c=0
t.sS(s)}s=t.gS()
s.toString
H.f(x,w)
C.a.F(s.a,x)}}z=new D.cp(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","ge7",8,0,5],
sdd:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.ga3(),{func:1,ret:-1,args:[D.u]})
C.a.F(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.ga3(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.M("technique",x,this.c,this,[O.cF])
z.b=!0
this.ai(z)}},
gw:function(){var z=this.x
if(z==null){z=D.af()
this.x=z}return z},
ax:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.d9(this.c)
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
u=C.i.a1(v.a*x)
if(typeof w!=="number")return H.z(w)
t=C.i.a1(v.b*w)
s=C.i.a1(v.c*x)
a.c=s
v=C.i.a1(v.d*w)
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
s.d8(V.ar(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dL
if(y==null){y=V.dG(new V.at(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.dL=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.m(0,m)}a.db.d8(m)
z=this.c
if(z!=null)z.bd(0,a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.y(z,0)]);z.A();)z.d.bd(0,a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.y(z,0)]);z.A();)z.d.ax(a)
this.a.toString
a.cy.bV()
a.db.bV()
this.b.toString
a.d7()},
$islA:1}}],["","",,A,{"^":"",d7:{"^":"a;a,b,c"},fd:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fm:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},h8:{"^":"dU;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0as,0ad,0at,0b_,0cH,0cI,0b0,0b1,0cJ,0cK,0b2,0b3,0cL,0cM,0b4,0cN,0cO,0b5,0cP,0cQ,0b6,0b7,0b8,0cR,0cS,0b9,0ba,0cT,0cU,0bb,0cV,0bJ,0cW,0bK,0cX,0bL,0cY,0bM,0cZ,0bN,0d_,0bO,a,b,0c,0d,0e,0f,0r",
dw:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bK("")
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
a2.eP(z)
a2.eW(z)
a2.eQ(z)
a2.f3(z)
a2.f4(z)
a2.eY(z)
a2.f8(z)
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
z=new P.bK("")
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
v.eT(z)
v.eO(z)
v.eR(z)
v.eU(z)
v.f1(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.f_(z)
v.f0(z)}v.eX(z)
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
r=z.a+="   return litClr*("+C.a.u(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.eS(z)
v.eZ(z)
v.f2(z)
v.f5(z)
v.f6(z)
v.f7(z)
v.eV(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.u(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.cm(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cm(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.eV(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.p(P.o("Failed to link shader: "+H.j(m)))}this.eI()
this.eK()
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a2.fr)this.fy=H.h(this.r.l(0,"invViewMat"),"$isau")
if(y)this.db=H.h(this.r.l(0,"objMat"),"$isau")
if(w)this.dx=H.h(this.r.l(0,"viewObjMat"),"$isau")
this.fr=H.h(this.r.l(0,"projViewObjMat"),"$isau")
if(a2.x2)this.go=H.h(this.r.l(0,"txt2DMat"),"$iscK")
if(a2.y1)this.id=H.h(this.r.l(0,"txtCubeMat"),"$isau")
if(a2.y2)this.k1=H.h(this.r.l(0,"colorMat"),"$isau")
this.k3=H.b([],[A.au])
y=a2.as
if(y>0){this.k2=H.l(this.r.l(0,"bendMatCount"),"$isF")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(k,"$isau"))}}y=a2.a
if(y!==C.b){this.k4=H.h(this.r.l(0,"emissionClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.r1=H.h(this.r.l(0,"emissionTxt"),"$isa9")
this.rx=H.h(this.r.l(0,"nullEmissionTxt"),"$isF")
break
case C.d:this.r2=H.h(this.r.l(0,"emissionTxt"),"$isaa")
this.rx=H.h(this.r.l(0,"nullEmissionTxt"),"$isF")
break}}y=a2.b
if(y!==C.b){this.ry=H.h(this.r.l(0,"ambientClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.x1=H.h(this.r.l(0,"ambientTxt"),"$isa9")
this.y1=H.h(this.r.l(0,"nullAmbientTxt"),"$isF")
break
case C.d:this.x2=H.h(this.r.l(0,"ambientTxt"),"$isaa")
this.y1=H.h(this.r.l(0,"nullAmbientTxt"),"$isF")
break}}y=a2.c
if(y!==C.b){this.y2=H.h(this.r.l(0,"diffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.as=H.h(this.r.l(0,"diffuseTxt"),"$isa9")
this.at=H.h(this.r.l(0,"nullDiffuseTxt"),"$isF")
break
case C.d:this.ad=H.h(this.r.l(0,"diffuseTxt"),"$isaa")
this.at=H.h(this.r.l(0,"nullDiffuseTxt"),"$isF")
break}}y=a2.d
if(y!==C.b){this.b_=H.h(this.r.l(0,"invDiffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cH=H.h(this.r.l(0,"invDiffuseTxt"),"$isa9")
this.b0=H.h(this.r.l(0,"nullInvDiffuseTxt"),"$isF")
break
case C.d:this.cI=H.h(this.r.l(0,"invDiffuseTxt"),"$isaa")
this.b0=H.h(this.r.l(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a2.e
if(y!==C.b){this.b3=H.h(this.r.l(0,"shininess"),"$isP")
this.b1=H.h(this.r.l(0,"specularClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cJ=H.h(this.r.l(0,"specularTxt"),"$isa9")
this.b2=H.h(this.r.l(0,"nullSpecularTxt"),"$isF")
break
case C.d:this.cK=H.h(this.r.l(0,"specularTxt"),"$isaa")
this.b2=H.h(this.r.l(0,"nullSpecularTxt"),"$isF")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.c:this.cL=H.h(this.r.l(0,"bumpTxt"),"$isa9")
this.b4=H.h(this.r.l(0,"nullBumpTxt"),"$isF")
break
case C.d:this.cM=H.h(this.r.l(0,"bumpTxt"),"$isaa")
this.b4=H.h(this.r.l(0,"nullBumpTxt"),"$isF")
break}if(a2.dy){this.cN=H.h(this.r.l(0,"envSampler"),"$isaa")
this.cO=H.h(this.r.l(0,"nullEnvTxt"),"$isF")
y=a2.r
if(y!==C.b){this.b5=H.h(this.r.l(0,"reflectClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cP=H.h(this.r.l(0,"reflectTxt"),"$isa9")
this.b6=H.h(this.r.l(0,"nullReflectTxt"),"$isF")
break
case C.d:this.cQ=H.h(this.r.l(0,"reflectTxt"),"$isaa")
this.b6=H.h(this.r.l(0,"nullReflectTxt"),"$isF")
break}}y=a2.x
if(y!==C.b){this.b7=H.h(this.r.l(0,"refraction"),"$isP")
this.b8=H.h(this.r.l(0,"refractClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cR=H.h(this.r.l(0,"refractTxt"),"$isa9")
this.b9=H.h(this.r.l(0,"nullRefractTxt"),"$isF")
break
case C.d:this.cS=H.h(this.r.l(0,"refractTxt"),"$isaa")
this.b9=H.h(this.r.l(0,"nullRefractTxt"),"$isF")
break}}}y=a2.y
if(y!==C.b){this.ba=H.h(this.r.l(0,"alpha"),"$isP")
switch(y){case C.b:break
case C.e:break
case C.c:this.cT=H.h(this.r.l(0,"alphaTxt"),"$isa9")
this.bb=H.h(this.r.l(0,"nullAlphaTxt"),"$isF")
break
case C.d:this.cU=H.h(this.r.l(0,"alphaTxt"),"$isaa")
this.bb=H.h(this.r.l(0,"nullAlphaTxt"),"$isF")
break}}this.bJ=H.b([],[A.ek])
this.bK=H.b([],[A.el])
this.bL=H.b([],[A.em])
this.bM=H.b([],[A.en])
this.bN=H.b([],[A.eo])
this.bO=H.b([],[A.ep])
if(a2.k2){y=a2.z
if(y>0){this.cV=H.l(this.r.l(0,"dirLightCount"),"$isF")
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
x=this.bJ;(x&&C.a).h(x,new A.ek(l,k,j))}}y=a2.Q
if(y>0){this.cW=H.l(this.r.l(0,"pntLightCount"),"$isF")
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
H.h(h,"$isP")
x=this.r
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isP")
x=this.r
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isP")
x=this.bK;(x&&C.a).h(x,new A.el(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.cX=H.l(this.r.l(0,"spotLightCount"),"$isF")
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
H.h(g,"$isP")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isP")
x=this.r
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isP")
x=this.r
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isP")
x=this.r
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isP")
x=this.bL;(x&&C.a).h(x,new A.em(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.cY=H.l(this.r.l(0,"txtDirLightCount"),"$isF")
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
H.h(e,"$isa9")
x=this.bM;(x&&C.a).h(x,new A.en(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.cZ=H.l(this.r.l(0,"txtPntLightCount"),"$isF")
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
H.h(i,"$iscK")
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
H.h(f,"$isP")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isP")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isP")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isaa")
x=this.bN;(x&&C.a).h(x,new A.eo(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.d_=H.l(this.r.l(0,"txtSpotLightCount"),"$isF")
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
H.h(d,"$isP")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isP")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isP")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isP")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isP")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a1,"$isa9")
x=this.bO;(x&&C.a).h(x,new A.ep(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a_:function(a,b,c){if(c==null||!c.gU(c))b.a.uniform1i(b.d,1)
else{a.dq(c)
b.a.uniform1i(b.d,0)}},
W:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
h7:function(a,b){var z,y
z=a.ad
y=new A.h8(b,z)
y.dB(b,z)
y.dw(a,b)
return y}}},hb:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,as,ad,at",
eP:function(a){var z,y,x
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
eW:function(a){var z
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
eQ:function(a){var z
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
f3:function(a){var z,y
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
f4:function(a){var z,y
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
eY:function(a){var z
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
f8:function(a){var z
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
if(b===C.e)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.c5(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
eT:function(a){var z,y
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
eO:function(a){var z,y
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
eR:function(a){var z,y
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
eU:function(a){var z,y
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
f1:function(a){var z,y
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
eX:function(a){var z,y
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
f_:function(a){var z,y
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
f0:function(a){var z,y
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
eS:function(a){var z,y
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
eZ:function(a){var z,y
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
f2:function(a){var z,y
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
f5:function(a){var z,y,x
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
f6:function(a){var z,y,x
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
f7:function(a){var z,y,x
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
eV:function(a){var z
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
i:function(a){return this.ad}},ek:{"^":"a;a,b,c"},en:{"^":"a;a,b,c,d,e,f,r,x"},el:{"^":"a;a,b,c,d,e,f,r"},eo:{"^":"a;a,b,c,d,e,f,r,x,y,z"},em:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ep:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dU:{"^":"cf;",
dB:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cm:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eV(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.o("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
eI:function(){var z,y,x,w,v,u
z=H.b([],[A.d7])
y=this.a
x=H.V(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d7(y,v.name,u))}this.f=new A.fd(z)},
eK:function(){var z,y,x,w,v,u
z=H.b([],[A.a0])
y=this.a
x=H.V(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fj(v.type,v.size,v.name,u))}this.r=new A.it(z)},
ak:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.F(z,y,b,c)
else return A.cJ(z,y,b,a,c)},
dT:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.a9(z,y,b,c)
else return A.cJ(z,y,b,a,c)},
dU:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aa(z,y,b,c)
else return A.cJ(z,y,b,a,c)},
aY:function(a,b){return new P.ex(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fj:function(a,b,c,d){switch(a){case 5120:return this.ak(b,c,d)
case 5121:return this.ak(b,c,d)
case 5122:return this.ak(b,c,d)
case 5123:return this.ak(b,c,d)
case 5124:return this.ak(b,c,d)
case 5125:return this.ak(b,c,d)
case 5126:return new A.P(this.a,this.e,c,d)
case 35664:return new A.io(this.a,this.e,c,d)
case 35665:return new A.E(this.a,this.e,c,d)
case 35666:return new A.ir(this.a,this.e,c,d)
case 35667:return new A.ip(this.a,this.e,c,d)
case 35668:return new A.iq(this.a,this.e,c,d)
case 35669:return new A.is(this.a,this.e,c,d)
case 35674:return new A.iv(this.a,this.e,c,d)
case 35675:return new A.cK(this.a,this.e,c,d)
case 35676:return new A.au(this.a,this.e,c,d)
case 35678:return this.dT(b,c,d)
case 35680:return this.dU(b,c,d)
case 35670:throw H.d(this.aY("BOOL",c))
case 35671:throw H.d(this.aY("BOOL_VEC2",c))
case 35672:throw H.d(this.aY("BOOL_VEC3",c))
case 35673:throw H.d(this.aY("BOOL_VEC4",c))
default:throw H.d(P.o("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},bT:{"^":"a;a,b",
i:function(a){return this.b}},a0:{"^":"a;"},it:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
l:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.C()},
fp:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
C:function(){return this.fp("\n")}},F:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},ip:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iq:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},is:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},im:{"^":"a0;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
cJ:function(a,b,c,d,e){var z=new A.im(a,b,c,e)
z.f=d
z.e=P.h0(d,0,!1,P.C)
return z}}},P:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},io:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},E:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},ir:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iv:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cK:{"^":"a0;a,b,c,d",
a2:function(a){var z=new Float32Array(H.bw(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},au:{"^":"a0;a,b,c,d",
a2:function(a){var z=new Float32Array(H.bw(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},a9:{"^":"a0;a,b,c,d",
dq:function(a){var z,y,x
z=a==null||!a.gU(a)
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},aa:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
c6:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bv:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.c6(y)
k=F.c6(z.b)
j=F.kQ(d,e,new F.kb(z,F.c6(z.c),F.c6(z.d),k,l,c),b)
if(j!=null)a.bT(j)},
kQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ao,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.dW()
y=H.b([],[F.ao])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cM(null,null,new V.bS(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bH(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cM(null,null,new V.bS(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bH(d))}}z.d.f9(a+1,b+1,y)
return z},
kb:{"^":"r:32;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bS(z.b,b).bS(z.d.bS(z.c,b),c)
z=new V.at(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.N()}a.sh5(y.D(0,Math.sqrt(y.J(y))))
z=1-b
x=1-c
x=new V.dM(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.N()}}},
ag:{"^":"a;0a,0b,0c,0d,0e",
ac:function(){if(!this.gaD()){C.a.F(this.a.a.d.b,this)
this.a.a.N()}this.bt()
this.bu()
this.eu()},
eF:function(a){this.a=a
C.a.h(a.d.b,this)},
eG:function(a){this.b=a
C.a.h(a.d.c,this)},
eH:function(a){this.c=a
C.a.h(a.d.d,this)},
bt:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
bu:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
eu:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gaD:function(){return this.a==null||this.b==null||this.c==null},
dN:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.d2())return
return v.D(0,Math.sqrt(v.J(v)))},
dQ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.V(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.D(0,Math.sqrt(z.J(z)))
z=w.V(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.aC(z.D(0,Math.sqrt(z.J(z))))
return z.D(0,Math.sqrt(z.J(z)))},
bE:function(){if(this.d!=null)return!0
var z=this.dN()
if(z==null){z=this.dQ()
if(z==null)return!1}this.d=z
this.a.a.N()
return!0},
dM:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.d2())return
return v.D(0,Math.sqrt(v.J(v)))},
dP:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.k.$2(n,0)){z=r.V(0,u)
z=new V.H(z.a,z.b,z.c)
m=z.D(0,Math.sqrt(z.J(z)))
if(o.a-p.a<0)m=m.ay(0)}else{l=(z-q.b)/n
z=r.V(0,u)
z=new V.at(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).V(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.D(0,Math.sqrt(z.J(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.ay(0)}z=this.d
if(z!=null){k=z.D(0,Math.sqrt(z.J(z)))
z=k.aC(m)
z=z.D(0,Math.sqrt(z.J(z))).aC(k)
m=z.D(0,Math.sqrt(z.J(z)))}return m},
bC:function(){if(this.e!=null)return!0
var z=this.dM()
if(z==null){z=this.dP()
if(z==null)return!1}this.e=z
this.a.a.N()
return!0},
gfe:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
t:function(a){var z,y
if(this.gaD())return a+"disposed"
z=a+C.h.Y(J.a1(this.a.e),0)+", "+C.h.Y(J.a1(this.b.e),0)+", "+C.h.Y(J.a1(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
C:function(){return this.t("")},
n:{
bE:function(a,b,c){var z,y,x
z=new F.ag()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.eF(a)
z.eG(b)
z.eH(c)
C.a.h(z.a.a.d.b,z)
z.a.a.N()
return z}}},
fE:{"^":"a;"},
hX:{"^":"fE;",
aF:function(a,b,c){var z,y
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
cw:{"^":"a;0a,0b",
ac:function(){if(!this.gaD()){C.a.F(this.a.a.c.b,this)
this.a.a.N()}this.bt()
this.bu()},
bt:function(){var z=this.a
if(z!=null){C.a.F(z.c.b,this)
this.a=null}},
bu:function(){var z=this.b
if(z!=null){C.a.F(z.c.c,this)
this.b=null}},
gaD:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
t:function(a){if(this.gaD())return a+"disposed"
return a+C.h.Y(J.a1(this.a.e),0)+", "+C.h.Y(J.a1(this.b.e),0)},
C:function(){return this.t("")}},
fV:{"^":"a;"},
il:{"^":"fV;",
aF:function(a,b,c){var z,y
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
cB:{"^":"a;0a",
ac:function(){var z=this.a
if(z!=null){C.a.F(z.a.b.b,this)
this.a.a.N()}this.es()},
es:function(){var z=this.a
if(z!=null){C.a.F(z.b.b,this)
this.a=null}},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
t:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.Y(J.a1(z.e),0)},
C:function(){return this.t("")}},
dV:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.af()
this.e=z}return z},
bT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.q()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fi())}this.a.q()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cB()
if(r.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.G(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cw()
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
if(!(t==null))t.G(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.q()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.q()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.q()
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
F.bE(p,o,l)}z=this.e
if(!(z==null))z.a5(0)},
ao:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.ao()||!1
if(!this.a.ao())y=!1
z=this.e
if(!(z==null))z.a5(0)
return y},
dY:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ao],"$asc")
H.w(e,"$isc",[P.C],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.aF(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fE:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ao],x=[P.C];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.dY(a,v,y,u,t))b.bT(u)}this.a.q()
this.c.bW()
this.d.bW()
this.b.fV()
this.c.bX(new F.il())
this.d.bX(new F.hX())
z=this.e
if(!(z==null))z.a5(0)},
fc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ay()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$br().a)!==0)++w
if((x&$.$get$bs().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$av().a)!==0)++w
v=b.gc4(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.da])
for(r=0,q=0;q<w;++q){p=b.fa(q)
o=p.gc4(p)
C.a.R(s,q,new Z.da(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].fA(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.R(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bw(t)),35044)
y.bindBuffer(34962,null)
i=new Z.db(new Z.ev(34962,j),s,b)
i.b=H.b([],[Z.bY])
if(this.b.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)}f=Z.cN(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bY(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)}f=Z.cN(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bY(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.b([],[x])
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
C.a.h(h,g.e)}f=Z.cN(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bY(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.t("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.t("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.t("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.t("   "))}return C.a.u(z,"\n")},
a0:function(a){var z=this.e
if(!(z==null))z.G(a)},
N:function(){return this.a0(null)},
n:{
dW:function(){var z,y
z=new F.dV()
y=new F.iD(z)
y.b=!1
y.c=H.b([],[F.ao])
z.a=y
y=new F.hS(z)
y.b=H.b([],[F.cB])
z.b=y
y=new F.hR(z)
y.b=H.b([],[F.cw])
z.c=y
y=new F.hQ(z)
y.b=H.b([],[F.ag])
z.d=y
z.e=null
return z}}},
hQ:{"^":"a;a,0b",
f9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ao],"$asc")
z=H.b([],[F.ag])
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
C.a.h(z,F.bE(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bE(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bE(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bE(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
bX:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aF(0,v,t)){v.ac()
break}}}}},
bW:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.gfe(x)
if(y)x.ac()}},
ao:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bE())x=!1
return x},
bD:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bC())x=!1
return x},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}},
hR:{"^":"a;a,0b",
gk:function(a){return this.b.length},
bX:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aF(0,v,t)){v.ac()
break}}}}},
bW:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.ac()}},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].t(a+(""+x+". ")))}return C.a.u(z,"\n")},
C:function(){return this.t("")}},
hS:{"^":"a;a,0b",
gk:function(a){return this.b.length},
fV:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ac()}},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}},
ao:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bH:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cM(this.cx,x,u,z,y,w,v,a,t)},
fi:function(){return this.bH(null)},
sh5:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.N()}},
fA:function(a){var z,y
z=J.I(a)
if(z.p(a,$.$get$ay())){z=this.f
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$ax())){z=this.r
y=[P.t]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$aw())){z=this.x
y=[P.t]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$az())){z=this.y
y=[P.t]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.p(a,$.$get$aA())){z=this.z
y=[P.t]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$br())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bs())){z=this.Q
y=[P.t]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.p(a,$.$get$aW()))return H.b([this.ch],[P.t])
else if(z.p(a,$.$get$av())){z=this.cx
y=[P.t]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.t])},
bE:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.H(0,new F.iN(z))
z=z.a
this.r=z.D(0,Math.sqrt(z.J(z)))
z=this.a
if(z!=null){z.N()
z=this.a.e
if(!(z==null))z.a5(0)}return!0},
bC:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.H(0,new F.iM(z))
z=z.a
this.x=z.D(0,Math.sqrt(z.J(z)))
z=this.a
if(z!=null){z.N()
z=this.a.e
if(!(z==null))z.a5(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.C()},
t:function(a){var z,y,x
z=H.b([],[P.m])
C.a.h(z,C.h.Y(J.a1(this.e),0))
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
x=C.a.u(z,", ")
return a+"{"+x+"}"},
C:function(){return this.t("")},
n:{
cM:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ao()
y=new F.iL(z)
y.b=H.b([],[F.cB])
z.b=y
y=new F.iH(z)
x=[F.cw]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iE(z)
x=[F.ag]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$es()
z.e=0
y=$.$get$ay()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ax().a)!==0?e:null
z.x=(x&$.$get$aw().a)!==0?b:null
z.y=(x&$.$get$az().a)!==0?f:null
z.z=(x&$.$get$aA().a)!==0?g:null
z.Q=(x&$.$get$et().a)!==0?c:null
z.ch=(x&$.$get$aW().a)!==0?i:0
z.cx=(x&$.$get$av().a)!==0?a:null
return z}}},
iN:{"^":"r:6;a",
$1:function(a){var z,y
H.l(a,"$isag")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
iM:{"^":"r:6;a",
$1:function(a){var z,y
H.l(a,"$isag")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
iD:{"^":"a;a,0b,0c",
q:function(){var z,y,x,w
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
this.a.N()
return!0},
gk:function(a){return this.c.length},
ao:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bE()
return!0},
bD:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bC()
return!0},
fd:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.D(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
this.q()
z=H.b([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}},
iE:{"^":"a;a,0b,0c,0d",
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
H:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ag]})
C.a.H(this.b,b)
C.a.H(this.c,new F.iF(this,b))
C.a.H(this.d,new F.iG(this,b))},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}},
iF:{"^":"r:6;a,b",
$1:function(a){H.l(a,"$isag")
if(!J.N(a.a,this.a))this.b.$1(a)}},
iG:{"^":"r:6;a,b",
$1:function(a){var z
H.l(a,"$isag")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
iH:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}},
iJ:{"^":"a;"},
iI:{"^":"iJ;",
aF:function(a,b,c){return J.N(b.f,c.f)}},
iK:{"^":"a;"},
hm:{"^":"iK;",
bT:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.ao],"$asc")
z=new V.H(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.H(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.D(0,Math.sqrt(z.J(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){t=a[x]
s=z.D(0,Math.sqrt(u))
if(!J.N(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.G(null)}}}return}},
iL:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.C()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
C:function(){return this.t("")}}}],["","",,O,{"^":"",h6:{"^":"cF;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.af()
this.dy=z}return z},
O:[function(a){var z
H.l(a,"$isu")
z=this.dy
if(!(z==null))z.G(a)},function(){return this.O(null)},"dH","$1","$0","gaR",0,2,0],
ex:[function(a){H.l(a,"$isu")
this.a=null
this.O(a)},function(){return this.ex(null)},"hD","$1","$0","gew",0,2,0],
hh:[function(a,b){var z=V.ak
z=new D.co(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.O(z)},"$2","ge3",8,0,18],
hi:[function(a,b){var z=V.ak
z=new D.cp(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.O(z)},"$2","ge4",8,0,18],
cj:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a6=new Z.aV(a6.a|z.a)}if(b){z=$.$get$aw()
a6=new Z.aV(a6.a|z.a)}if(a){z=$.$get$az()
a6=new Z.aV(a6.a|z.a)}if(a0){z=$.$get$aA()
a6=new Z.aV(a6.a|z.a)}if(a2){z=$.$get$av()
a6=new Z.aV(a6.a|z.a)}return new A.hb(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
K:function(a,b){H.w(a,"$isc",[T.cG],"$asc")
if(b!=null)if(!C.a.aB(a,b)){b.a=a.length
C.a.h(a,b)}},
bd:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aq(z,z.length,0,[H.y(z,0)]);z.A();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.bZ(x)}}},
fX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cj()
y=a.fr.j(0,z.ad)
if(y==null){y=A.h7(z,a.a)
x=y.b
if(x.length===0)H.p(P.o("May not cache a shader with no name."))
if(a.fr.cE(0,x))H.p(P.o('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.R(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.at
z=b.e
if(!(z instanceof Z.db)){b.e=null
z=null}if(z==null||!z.d.p(0,v)){z=w.r1
if(z)b.d.ao()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bD()
t.a.bD()
t=t.e
if(!(t==null))t.a5(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.fd()
s=s.e
if(!(s==null))s.a5(0)}q=b.d.fc(new Z.iO(a.a),v)
q.au($.$get$ay()).e=this.a.y.c
if(z)q.au($.$get$ax()).e=this.a.Q.c
if(u)q.au($.$get$aw()).e=this.a.z.c
if(w.rx)q.au($.$get$az()).e=this.a.ch.c
if(t)q.au($.$get$aA()).e=this.a.cx.c
if(w.x1)q.au($.$get$av()).e=this.a.cy.c
b.e=q}z=T.cG
p=H.b([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fn()
if(w.fx){u=this.a
t=a.dx
t=t.gL(t)
u=u.db
u.toString
u.a2(t.Z(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gL(t)
s=a.dx
s=t.m(0,s.gL(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a2(t.Z(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gfT()
s=a.dx
s=t.m(0,s.gL(s))
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
H.l(s,"$isak")
t=t.k3
if(n>=t.length)return H.e(t,n)
t=t[n]
m=new Float32Array(H.bw(H.w(s.Z(0,!0),"$isc",u,"$asc")))
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
case C.c:this.K(p,this.f.d)
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
case C.d:this.K(p,this.f.e)
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
case C.c:this.K(p,this.r.d)
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
case C.d:this.K(p,this.r.e)
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
case C.c:this.K(p,this.x.d)
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
case C.d:this.K(p,this.x.e)
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
u=u.b_
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.y.d)
u=this.a
t=this.y.d
u.a_(u.cH,u.b0,t)
t=this.a
u=this.y.f
t=t.b_
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.y.e)
u=this.a
t=this.y.e
u.W(u.cI,u.b0,t)
t=this.a
u=this.y.f
t=t.b_
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.b1
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.b3
t.a.uniform1f(t.d,r)
break
case C.c:this.K(p,this.z.d)
u=this.a
t=this.z.d
u.a_(u.cJ,u.b2,t)
t=this.a
u=this.z.f
t=t.b1
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b3
u.a.uniform1f(u.d,r)
break
case C.d:this.K(p,this.z.e)
u=this.a
t=this.z.e
u.W(u.cK,u.b2,t)
t=this.a
u=this.z.f
t=t.b1
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b3
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.cV
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bJ
if(k>=s.length)return H.e(s,k)
h=s[k]
s=l.bZ(i.a)
r=s.a
g=s.b
f=s.c
f=s.D(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.cW
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bK
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaJ(i)
r=h.b
g=s.gc_(s)
f=s.gc0(s)
s=s.gc1(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aO(i.gaJ(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gab(i)
f=h.d
g=s.gbc()
r=s.gaQ()
s=s.gaZ()
f.a.uniform3f(f.d,g,r,s)
s=i.gbx()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gby()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbz()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.cX
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bL
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaJ(i)
r=h.b
g=s.gc_(s)
f=s.gc0(s)
s=s.gc1(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbI(i).hH()
f=h.c
g=s.gap(s)
r=s.gaq(s)
s=s.gar()
f.a.uniform3f(f.d,g,r,s)
s=l.aO(i.gaJ(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gab(i)
r=h.e
g=s.gbc()
f=s.gaQ()
s=s.gaZ()
r.a.uniform3f(r.d,g,f,s)
s=i.ghF()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghE()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbx()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gby()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbz()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.cY
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
r=this.a.bM
if(k>=r.length)return H.e(r,k)
h=r[k]
r=i.gaL()
H.w(p,"$isc",s,"$asc")
if(!C.a.aB(p,r)){r.saV(p.length)
C.a.h(p,r)}r=i.gbI(i)
g=h.d
f=r.gap(r)
e=r.gaq(r)
r=r.gar()
g.a.uniform3f(g.d,f,e,r)
r=i.ghb()
e=h.b
f=r.gap(r)
g=r.gaq(r)
r=r.gar()
e.a.uniform3f(e.d,f,g,r)
r=i.gaK(i)
g=h.c
f=r.gap(r)
e=r.gaq(r)
r=r.gar()
g.a.uniform3f(g.d,f,e,r)
r=l.bZ(i.gbI(i))
e=r.a
f=r.b
g=r.c
g=r.D(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gab(i)
f=h.f
e=g.gbc()
r=g.gaQ()
g=g.gaZ()
f.a.uniform3f(f.d,e,r,g)
g=i.gaL()
r=g.gU(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gU(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaV())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.cZ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
g=this.a.bN
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gaL()
H.w(p,"$isc",r,"$asc")
if(!C.a.aB(p,g)){g.saV(p.length)
C.a.h(p,g)}d=l.m(0,i.gL(i))
g=i.gL(i).aO(new V.at(0,0,0))
f=h.b
e=g.gc_(g)
c=g.gc0(g)
g=g.gc1(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aO(new V.at(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.d1(0)
c=h.d
m=new Float32Array(H.bw(H.w(new V.dF(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).Z(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gab(i)
g=h.e
e=c.gbc()
f=c.gaQ()
c=c.gaZ()
g.a.uniform3f(g.d,e,f,c)
c=i.gaL()
g=c.gU(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gU(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.ghG(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbx()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gby()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbz()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.d_
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bO
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaL()
H.w(p,"$isc",z,"$asc")
if(!C.a.aB(p,s)){s.saV(p.length)
C.a.h(p,s)}s=i.gaJ(i)
r=h.b
g=s.gc_(s)
f=s.gc0(s)
s=s.gc1(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbI(i)
f=h.c
g=s.gap(s)
r=s.gaq(s)
s=s.gar()
f.a.uniform3f(f.d,g,r,s)
s=i.ghb()
r=h.d
g=s.gap(s)
f=s.gaq(s)
s=s.gar()
r.a.uniform3f(r.d,g,f,s)
s=i.gaK(i)
f=h.e
g=s.gap(s)
r=s.gaq(s)
s=s.gar()
f.a.uniform3f(f.d,g,r,s)
s=l.aO(i.gaJ(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaL()
r=s.gU(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gU(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaV())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gab(i)
r=h.y
g=s.gbc()
f=s.gaQ()
s=s.gaZ()
r.a.uniform3f(r.d,g,f,s)
s=i.ghN()
f=h.z
f.a.uniform1f(f.d,s)
s=i.ghO()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbx()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gby()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbz()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.e:break
case C.c:this.K(p,this.Q.d)
z=this.a
u=this.Q.d
z.a_(z.cL,z.b4,u)
break
case C.d:this.K(p,this.Q.e)
z=this.a
u=this.Q.e
z.W(z.cM,z.b4,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gL(u).d1(0)
a.Q=u}z=z.fy
z.toString
z.a2(u.Z(0,!0))}if(w.dy){this.K(p,this.ch)
z=this.a
u=this.ch
z.W(z.cN,z.cO,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.b5
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.K(p,this.cx.d)
z=this.a
u=this.cx.d
z.a_(z.cP,z.b6,u)
u=this.a
z=this.cx.f
u=u.b5
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.K(p,this.cx.e)
z=this.a
u=this.cx.e
z.W(z.cQ,z.b6,u)
u=this.a
z=this.cx.f
u=u.b5
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.b8
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.b7
u.a.uniform1f(u.d,s)
break
case C.c:this.K(p,this.cy.d)
z=this.a
u=this.cy.d
z.a_(z.cR,z.b9,u)
u=this.a
z=this.cy.f
u=u.b8
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b7
z.a.uniform1f(z.d,s)
break
case C.d:this.K(p,this.cy.e)
z=this.a
u=this.cy.e
z.W(z.cS,z.b9,u)
u=this.a
z=this.cy.f
u=u.b8
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b7
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.ba
z.a.uniform1f(z.d,t)
break
case C.c:this.K(p,this.db.d)
z=this.a
t=this.db.d
z.a_(z.cT,z.bb,t)
t=this.a
z=this.db.f
t=t.ba
t.a.uniform1f(t.d,z)
break
case C.d:this.K(p,this.db.e)
z=this.a
t=this.db.e
z.W(z.cU,z.bb,t)
t=this.a
z=this.db.f
t=t.ba
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(z.d==null){t=z.c
z.d=t
if(!(t==null))t.aa(a)}}z=b.e
z.aa(a)
z.ax(a)
z.aP(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
u=z.d
if(u!=null){u.aP(a)
z.d=null}}z=this.a
z.toString
a.a.useProgram(null)
z.f.fm()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cj().ad}},h9:{"^":"cx;0f,a,b,0c,0d,0e",
eA:function(a){var z,y
z=this.f
if(!$.k.$2(z,a)){y=this.f
this.f=a
z=new D.M(this.b,y,a,this,[P.t])
z.b=!0
this.a.O(z)}},
am:function(){this.c7()
this.eA(1)}},cx:{"^":"a;",
O:[function(a){this.a.O(H.l(a,"$isu"))},function(){return this.O(null)},"dH","$1","$0","gaR",0,2,0],
am:["c7",function(){}],
eD:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gaR(),{func:1,ret:-1,args:[D.u]})
C.a.F(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.gaR(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.M(this.b+".texture2D",x,this.d,this,[T.c2])
z.b=!0
this.a.O(z)}},
eE:function(a){},
sde:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.am()
this.c=C.c
this.eE(null)
z=this.a
z.a=null
z.O(null)}this.eD(a)}},ha:{"^":"cx;a,b,0c,0d,0e"},aS:{"^":"cx;0f,a,b,0c,0d,0e",
cs:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.M(this.b+".color",z,a,this,[V.Z])
y.b=!0
this.a.O(y)}},
am:["c8",function(){this.c7()
this.cs(new V.Z(1,1,1))}],
sab:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.am()
z=this.a
z.a=null
z.O(null)}this.cs(b)}},hc:{"^":"aS;0ch,0f,a,b,0c,0d,0e",
eB:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.O(z)}},
am:function(){this.c8()
this.eB(1)}},hd:{"^":"aS;0ch,0f,a,b,0c,0d,0e",
eC:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.O(z)}},
am:function(){this.c8()
this.eC(100)}},cF:{"^":"a;"}}],["","",,T,{"^":"",cG:{"^":"cf;"},c2:{"^":"cG;"},i5:{"^":"c2;0a,0b,0c,0d,0e,0f",
gU:function(a){var z=this.d
z=z==null?null:z.gU(z)
if(z==null){z=this.c
z=z==null?null:z.gU(z)}return z==null?!1:z},
gw:function(){var z=this.f
if(z==null){z=D.af()
this.f=z}return z},
aa:function(a){var z
if(this.d==null){z=this.c
this.d=z
if(!(z==null))z.aa(a)}},
aP:function(a){var z=this.d
if(z!=null){z.aP(a)
this.d=null}}},i6:{"^":"c2;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gU:function(a){return this.d},
aa:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
aP:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,null)}}},i7:{"^":"a;a,0b,0c,0d,0e",
fC:function(a,b,c,d,e){var z,y,x,w
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
w=new T.i6()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a2
W.S(x,"load",H.f(new T.i8(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
aw:function(a){return this.fC(a,!1,!1,!1,!1)},
ey:function(a,b,c){var z,y,x,w
b=V.d2(b,2)
z=V.d2(a.width,2)
y=V.d2(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cj(null,null)
x.width=z
x.height=y
w=H.l(C.k.dk(x,"2d"),"$isde")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kr(w.getImageData(0,0,x.width,x.height))}}},i8:{"^":"r:19;a,b,c,d,e,f,r",
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
z=z.y
if(!(z==null))z.cG()}++x.e}}}],["","",,V,{"^":"",fb:{"^":"a;",
aE:function(a,b){return!0},
i:function(a){return"all"},
$isbH:1},bH:{"^":"a;"},dE:{"^":"a;",
aE:["du",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aE(0,b))return!0
return!1}],
i:["c6",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbH:1},bh:{"^":"dE;0a",
aE:function(a,b){return!this.du(0,b)},
i:function(a){return"!["+this.c6(0)+"]"}},hO:{"^":"a;0a",
dA:function(a){var z,y
if(a.a.length<=0)throw H.d(P.o("May not create a SetMatcher with zero characters."))
z=new H.aR(0,0,[P.C,P.ad])
for(y=new H.dB(a,a.gk(a),0,[H.aD(a,"q",0)]);y.A();)z.R(0,y.d,!0)
this.a=z},
aE:function(a,b){return this.a.cE(0,b)},
i:function(a){var z=this.a
return P.cE(new H.dA(z,[H.y(z,0)]),0,null)},
$isbH:1,
n:{
Y:function(a){var z=new V.hO()
z.dA(a)
return z}}},dY:{"^":"a;a,b,0c,0d",
gfF:function(a){return this.b},
u:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.e8(this.a.E(0,b))
w.a=H.b([],[V.bH])
w.c=!1
C.a.h(this.c,w)
return w},
fo:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aE(0,a))return w}return},
i:function(a){return this.b}},e6:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.f5(this.b,"\n","\\n")
y=H.f5(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},e7:{"^":"a;a,b,0c",
i:function(a){return this.b}},ig:{"^":"a;0a,0b,0c",
E:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dY(this,b)
z.c=H.b([],[V.e8])
this.a.R(0,b,z)}return z},
aM:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.e7(this,a)
y=P.m
z.c=new H.aR(0,0,[y,y])
this.b.R(0,a,z)}return z},
ha:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.e6])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.aS(a,t)
r=y.fo(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cE(w,0,null)
throw H.d(P.o("Untokenizable string [state: "+y.gfF(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cE(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.e6(o==null?p.b:o,q,t)}++t}}}},e8:{"^":"dE;b,0c,0a",
i:function(a){return this.b.b+": "+this.c6(0)}}}],["","",,X,{"^":"",dd:{"^":"a;",$isas:1},fJ:{"^":"e0;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.af()
this.x=z}return z}},hp:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.af()
this.e=z}return z},
az:[function(a){var z
H.l(a,"$isu")
z=this.e
if(!(z==null))z.G(a)},function(){return this.az(null)},"he","$1","$0","gcb",0,2,0],
saG:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
if(z!=null){z=z.gw()
z.toString
y=H.f(this.gcb(),{func:1,ret:-1,args:[D.u]})
C.a.F(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.gcb(),{func:1,ret:-1,args:[D.u]})
C.a.h(z.a,y)}z=new D.M("mover",x,this.a,this,[U.bI])
z.b=!0
this.az(z)}},
$isas:1,
$isdd:1},e0:{"^":"a;"}}],["","",,V,{"^":"",
kO:function(a){P.e4(C.w,new V.kP(a))},
kP:{"^":"r:34;a",
$1:function(a){H.l(a,"$isal")
P.d3(C.i.dg(this.a.gfq(),2)+" fps")}},
hT:{"^":"a;0a,0b",
dC:function(a,b){var z,y,x,w,v,u,t
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
t=W.a2
W.S(z,"scroll",H.f(new V.hW(x),{func:1,ret:-1,args:[t]}),!1,t)},
cA:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.m],"$asc")
this.eJ()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ha(C.a.fw(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.f4(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jZ(C.H,s,C.q,!1)
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
eJ:function(){var z,y,x,w
if(this.b!=null)return
z=new V.ig()
y=P.m
z.a=new H.aR(0,0,[y,V.dY])
z.b=new H.aR(0,0,[y,V.e7])
z.c=z.E(0,"Start")
y=z.E(0,"Start").u(0,"Bold")
x=V.Y(new H.W("*"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Bold").u(0,"Bold")
x=new V.bh()
w=[V.bH]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Y(new H.W("*"))
C.a.h(x.a,y)
y=z.E(0,"Bold").u(0,"BoldEnd")
x=V.Y(new H.W("*"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Start").u(0,"Italic")
x=V.Y(new H.W("_"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Italic").u(0,"Italic")
x=new V.bh()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Y(new H.W("_"))
C.a.h(x.a,y)
y=z.E(0,"Italic").u(0,"ItalicEnd")
x=V.Y(new H.W("_"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Start").u(0,"Code")
x=V.Y(new H.W("`"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Code").u(0,"Code")
x=new V.bh()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Y(new H.W("`"))
C.a.h(x.a,y)
y=z.E(0,"Code").u(0,"CodeEnd")
x=V.Y(new H.W("`"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Start").u(0,"LinkHead")
x=V.Y(new H.W("["))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"LinkHead").u(0,"LinkTail")
x=V.Y(new H.W("|"))
C.a.h(y.a,x)
x=z.E(0,"LinkHead").u(0,"LinkEnd")
y=V.Y(new H.W("]"))
C.a.h(x.a,y)
x.c=!0
x=z.E(0,"LinkHead").u(0,"LinkHead")
y=new V.bh()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Y(new H.W("|]"))
C.a.h(y.a,x)
x=z.E(0,"LinkTail").u(0,"LinkEnd")
y=V.Y(new H.W("]"))
C.a.h(x.a,y)
x.c=!0
x=z.E(0,"LinkTail").u(0,"LinkTail")
y=new V.bh()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Y(new H.W("|]"))
C.a.h(y.a,x)
C.a.h(z.E(0,"Start").u(0,"Other").a,new V.fb())
x=z.E(0,"Other").u(0,"Other")
y=new V.bh()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Y(new H.W("*_`["))
C.a.h(y.a,x)
x=z.E(0,"BoldEnd")
x.d=x.a.aM("Bold")
x=z.E(0,"ItalicEnd")
x.d=x.a.aM("Italic")
x=z.E(0,"CodeEnd")
x.d=x.a.aM("Code")
x=z.E(0,"LinkEnd")
x.d=x.a.aM("Link")
x=z.E(0,"Other")
x.d=x.a.aM("Other")
this.b=z},
n:{
hU:function(a,b){var z=new V.hT()
z.dC(a,!0)
return z}}},
hW:{"^":"r:19;a",
$1:function(a){P.e3(C.l,new V.hV(this.a))}},
hV:{"^":"r:1;a",
$0:function(){var z,y,x
z=C.i.a1(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,N,{"^":"",
f0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=V.hU("Test 039",!0)
y=W.cj(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.m]
z.cA(H.b(["Test of an animated texture on a square."],x))
z.cA(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
v=E.id(w,!0,!0,!0,!1)
u=new E.aF()
u.a=""
u.b=!0
z=E.aF
x=O.cl(z)
u.y=x
x.bf(u.gfG(),u.gfI())
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
u.sc3(0,null)
u.saG(null)
t=F.dW()
F.bv(t,null,null,1,1,1,0,0,1)
F.bv(t,null,null,1,1,0,1,0,3)
F.bv(t,null,null,1,1,0,0,1,2)
F.bv(t,null,null,1,1,-1,0,0,0)
F.bv(t,null,null,1,1,0,-1,0,0)
F.bv(t,null,null,1,1,0,0,-1,3)
t.ao()
t.fE(new F.iI(),new F.hm())
u.sc3(0,t)
x=new U.dT()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sdh(0)
x.sd6(0,0)
x.sda(0)
s=x.d
if(!$.k.$2(s,0.1)){r=x.d
x.d=0.1
s=new D.M("deltaYaw",r,0.1,x,[P.t])
s.b=!0
x.al(s)}s=x.e
if(!$.k.$2(s,0.21)){r=x.e
x.e=0.21
s=new D.M("deltaPitch",r,0.21,x,[P.t])
s.b=!0
x.al(s)}s=x.f
if(!$.k.$2(s,0.32)){r=x.f
x.f=0.32
s=new D.M("deltaRoll",r,0.32,x,[P.t])
s.b=!0
x.al(s)}u.saG(x)
x=T.c2
s=P.dC([v.f.aw("../resources/diceColor/posx.png"),v.f.aw("../resources/diceColor/posz.png"),v.f.aw("../resources/diceColor/negx.png"),v.f.aw("../resources/diceColor/negy.png"),v.f.aw("../resources/diceColor/posy.png"),v.f.aw("../resources/diceColor/negz.png")],!0,x)
q=new T.i5()
q.a=0
q.b=0
q.e=H.w(s,"$isc",[x],"$asc")
P.e4(P.cm(0,0,0,500,0,0),new N.kH(q))
p=new O.h6()
x=O.cl(V.ak)
p.e=x
x.bf(p.ge3(),p.ge4())
x=new O.aS(p,"emission")
x.c=C.b
x.f=new V.Z(0,0,0)
p.f=x
x=new O.aS(p,"ambient")
x.c=C.b
x.f=new V.Z(0,0,0)
p.r=x
x=new O.aS(p,"diffuse")
x.c=C.b
x.f=new V.Z(0,0,0)
p.x=x
x=new O.aS(p,"invDiffuse")
x.c=C.b
x.f=new V.Z(0,0,0)
p.y=x
x=new O.hd(p,"specular")
x.c=C.b
x.f=new V.Z(0,0,0)
x.ch=100
p.z=x
x=new O.ha(p,"bump")
x.c=C.b
p.Q=x
p.ch=null
x=new O.aS(p,"reflect")
x.c=C.b
x.f=new V.Z(0,0,0)
p.cx=x
x=new O.hc(p,"refract")
x.c=C.b
x.f=new V.Z(0,0,0)
x.ch=1
p.cy=x
x=new O.h9(p,"alpha")
x.c=C.b
x.f=1
p.db=x
x=new D.fU()
x.c9(D.Q)
x.e=H.b([],[D.bU])
x.f=H.b([],[D.hr])
x.r=H.b([],[D.hY])
x.x=H.b([],[D.i9])
x.y=H.b([],[D.ia])
x.z=H.b([],[D.ib])
x.Q=null
x.ch=null
x.c2(x.ge2(),x.gem(),x.gen())
p.dx=x
s=x.Q
if(s==null){s=D.af()
x.Q=s
x=s}else x=s
s={func:1,ret:-1,args:[D.u]}
o=H.f(p.gew(),s)
C.a.h(x.a,o)
o=p.dx
x=o.ch
if(x==null){x=D.af()
o.ch=x}o=H.f(p.gaR(),s)
C.a.h(x.a,o)
p.dy=null
o=p.dx
x=U.dh(V.dG(new V.at(0,0,0),new V.H(0,1,0),new V.H(1,-1,-3)))
n=new V.Z(1,1,1)
m=new D.bU()
m.c=new V.Z(1,1,1)
m.a=new V.H(0,0,1)
r=m.b
m.b=x
x=x.gw()
x.toString
l=H.f(m.gdG(),s)
C.a.h(x.a,l)
x=new D.M("mover",r,m.b,m,[U.bI])
x.b=!0
m.ah(x)
if(!m.c.p(0,n)){r=m.c
m.c=n
x=new D.M("color",r,n,m,[V.Z])
x.b=!0
m.ah(x)}o.h(0,m)
x=p.r
x.sab(0,new V.Z(0.2,0.2,0.2))
x=p.x
x.sab(0,new V.Z(0.8,0.8,0.8))
p.r.sde(q)
p.x.sde(q)
x=new M.fB()
z=O.cl(z)
x.d=z
z.bf(x.ge6(),x.ge7())
x.e=null
x.f=null
x.r=null
x.x=null
k=new X.hp()
k.b=1.0471975511965976
k.c=0.1
k.d=2000
k.saG(null)
z=k.b
if(!$.k.$2(z,1.0471975511965976)){r=k.b
k.b=1.0471975511965976
z=new D.M("fov",r,1.0471975511965976,k,[P.t])
z.b=!0
k.az(z)}z=k.c
if(!$.k.$2(z,0.1)){r=k.c
k.c=0.1
z=new D.M("near",r,0.1,k,[P.t])
z.b=!0
k.az(z)}z=k.d
if(!$.k.$2(z,2000)){r=k.d
k.d=2000
z=new D.M("far",r,2000,k,[P.t])
z.b=!0
k.az(z)}z=x.a
if(z!==k){if(z!=null){z=z.gw()
z.toString
o=H.f(x.ga3(),s)
C.a.F(z.a,o)}r=x.a
x.a=k
z=k.gw()
z.toString
o=H.f(x.ga3(),s)
C.a.h(z.a,o)
z=new D.M("camera",r,x.a,x,[X.dd])
z.b=!0
x.ai(z)}j=new X.fJ()
z=new V.bS(0,0,0,1)
j.a=z
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
z=V.dS(0,0,1,1)
j.r=z
z=x.b
if(z!==j){if(z!=null){z=z.gw()
z.toString
o=H.f(x.ga3(),s)
C.a.F(z.a,o)}r=x.b
x.b=j
z=j.gw()
z.toString
o=H.f(x.ga3(),s)
C.a.h(z.a,o)
z=new D.M("target",r,x.b,x,[X.e0])
z.b=!0
x.ai(z)}x.sdd(null)
x.sdd(p)
x.d.h(0,u)
x.a.saG(U.dh(V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
z=v.d
if(z!==x){if(z!=null){z=z.gw()
z.toString
o=H.f(v.gca(),s)
C.a.F(z.a,o)}v.d=x
z=x.gw()
z.toString
s=H.f(v.gca(),s)
C.a.h(z.a,s)
v.dE()}V.kO(v)},
kH:{"^":"r:35;a",
$1:function(a){var z,y,x,w
H.l(a,"$isal")
z=this.a
y=z.b
x=z.e
w=x.length
y=(y+1)%w
if(y<w){z.b=y
z.c=x[y]
z=z.f
if(!(z==null))z.cG()}return}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dw.prototype
return J.dv.prototype}if(typeof a=="string")return J.cs.prototype
if(a==null)return J.dx.prototype
if(typeof a=="boolean")return J.fO.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.cb(a)}
J.bO=function(a){if(typeof a=="string")return J.cs.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.cb(a)}
J.cY=function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.cb(a)}
J.kv=function(a){if(typeof a=="number")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cL.prototype
return a}
J.ca=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.cb(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).p(a,b)}
J.f7=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kv(a).af(a,b)}
J.f8=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kE(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bO(a).j(a,b)}
J.f9=function(a,b,c,d){return J.ca(a).cz(a,b,c,d)}
J.ce=function(a,b,c){return J.bO(a).ff(a,b,c)}
J.d5=function(a,b){return J.cY(a).v(a,b)}
J.fa=function(a,b){return J.cY(a).H(a,b)}
J.aN=function(a){return J.I(a).gM(a)}
J.b3=function(a){return J.cY(a).gP(a)}
J.b4=function(a){return J.bO(a).gk(a)}
J.a1=function(a){return J.I(a).i(a)}
I.d0=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.ci.prototype
C.x=J.n.prototype
C.a=J.aQ.prototype
C.y=J.dv.prototype
C.f=J.dw.prototype
C.z=J.dx.prototype
C.i=J.bZ.prototype
C.h=J.cs.prototype
C.G=J.bF.prototype
C.I=H.hk.prototype
C.J=W.hl.prototype
C.p=J.hq.prototype
C.K=P.cC.prototype
C.m=J.cL.prototype
C.r=W.bt.prototype
C.t=W.iR.prototype
C.u=new P.ho()
C.v=new P.iC()
C.j=new P.jD()
C.b=new A.bT(0,"ColorSourceType.None")
C.e=new A.bT(1,"ColorSourceType.Solid")
C.c=new A.bT(2,"ColorSourceType.Texture2D")
C.d=new A.bT(3,"ColorSourceType.TextureCube")
C.l=new P.b8(0)
C.w=new P.b8(5e6)
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
C.H=H.b(I.d0([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.q=new P.iB(!1)
$.aj=0
$.b5=null
$.d8=null
$.cR=!1
$.eY=null
$.eS=null
$.f3=null
$.c9=null
$.cc=null
$.cZ=null
$.aY=null
$.bx=null
$.by=null
$.cS=!1
$.L=C.j
$.dq=null
$.dp=null
$.dn=null
$.dm=null
$.k=V.he()
$.dL=null
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
I.$lazy(y,x,w)}})(["dl","$get$dl",function(){return H.eX("_$dart_dartClosure")},"ct","$get$ct",function(){return H.eX("_$dart_js")},"e9","$get$e9",function(){return H.am(H.c3({
toString:function(){return"$receiver$"}}))},"ea","$get$ea",function(){return H.am(H.c3({$method$:null,
toString:function(){return"$receiver$"}}))},"eb","$get$eb",function(){return H.am(H.c3(null))},"ec","$get$ec",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eg","$get$eg",function(){return H.am(H.c3(void 0))},"eh","$get$eh",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ee","$get$ee",function(){return H.am(H.ef(null))},"ed","$get$ed",function(){return H.am(function(){try{null.$method$}catch(z){return z.message}}())},"ej","$get$ej",function(){return H.am(H.ef(void 0))},"ei","$get$ei",function(){return H.am(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cO","$get$cO",function(){return P.iS()},"bz","$get$bz",function(){return[]},"eM","$get$eM",function(){return P.hE("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dj","$get$dj",function(){return{}},"eu","$get$eu",function(){return Z.ac(0)},"es","$get$es",function(){return Z.ac(511)},"ay","$get$ay",function(){return Z.ac(1)},"ax","$get$ax",function(){return Z.ac(2)},"aw","$get$aw",function(){return Z.ac(4)},"az","$get$az",function(){return Z.ac(8)},"aA","$get$aA",function(){return Z.ac(16)},"br","$get$br",function(){return Z.ac(32)},"bs","$get$bs",function(){return Z.ac(64)},"et","$get$et",function(){return Z.ac(96)},"aW","$get$aW",function(){return Z.ac(128)},"av","$get$av",function(){return Z.ac(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[P.C,[P.i,E.aF]]},{func:1,ret:P.G,args:[F.ag]},{func:1,ret:-1,args:[W.a2]},{func:1,ret:P.G,args:[D.u]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.m,args:[P.C]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[P.C,[P.i,D.Q]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.C,[P.i,V.ak]]},{func:1,ret:P.G,args:[W.a2]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:[P.aB,,],args:[,]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ad,args:[W.J]},{func:1,ret:W.X,args:[W.J]},{func:1,args:[P.m]},{func:1,ret:P.G,args:[P.T]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,args:[,P.m]},{func:1,ret:P.ad,args:[P.t,P.t]},{func:1,ret:P.ad,args:[[P.i,D.Q]]},{func:1,ret:P.G,args:[F.ao,P.t,P.t]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:P.G,args:[P.al]},{func:1,ret:-1,args:[P.al]},{func:1,ret:-1,args:[P.a],opt:[P.ai]}]
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
if(x==y)H.kR(d||a)
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
Isolate.d0=a.d0
Isolate.cW=a.cW
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
if(typeof dartMainRunner==="function")dartMainRunner(N.f0,[])
else N.f0([])})})()
//# sourceMappingURL=test.dart.js.map
