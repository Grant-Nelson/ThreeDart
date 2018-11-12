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
if(z.e===x)throw H.d(P.er("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
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
i:["du",function(a){return"Instance of '"+H.aT(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fO:{"^":"n;",
i:function(a){return String(a)},
gM:function(a){return a?519018:218159},
$isad:1},
dy:{"^":"n;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gM:function(a){return 0},
$isG:1},
cu:{"^":"n;",
gM:function(a){return 0},
i:["dv",function(a){return String(a)}]},
hq:{"^":"cu;"},
cL:{"^":"cu;"},
bF:{"^":"cu;",
i:function(a){var z=a[$.$get$dl()]
if(z==null)return this.dv(a)
return"JavaScript function for "+H.i(J.a1(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscn:1},
aQ:{"^":"n;$ti",
h:function(a,b){H.A(b,H.x(a,0))
if(!!a.fixed$length)H.o(P.a7("add"))
a.push(b)},
fW:function(a,b){if(!!a.fixed$length)H.o(P.a7("removeAt"))
if(b<0||b>=a.length)throw H.d(P.bK(b,null,null))
return a.splice(b,1)[0]},
C:function(a,b){var z
if(!!a.fixed$length)H.o(P.a7("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
H:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.b6(a))}},
u:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.R(z,y,H.i(a[y]))
return z.join(b)},
fz:function(a){return this.u(a,"")},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bh:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.a9(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.a9(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.x(a,0)])
return H.b(a.slice(b,c),[H.x(a,0)])},
gfq:function(a){if(a.length>0)return a[0]
throw H.d(H.du())},
gbS:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.du())},
aq:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.cq(a,"[","]")},
gP:function(a){return new J.ap(a,a.length,0,[H.x(a,0)])},
gM:function(a){return H.bj(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.o(P.a7("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.bR(b,"newLength",null))
if(b<0)throw H.d(P.a9(b,0,null,"newLength",null))
a.length=b},
R:function(a,b,c){H.V(b)
H.A(c,H.x(a,0))
if(!!a.immutable$list)H.o(P.a7("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b>=a.length||b<0)throw H.d(H.aJ(a,b))
a[b]=c},
$ish:1,
$isc:1,
n:{
fN:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.bR(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a9(a,0,4294967295,"length",null))
return J.dv(new Array(a),b)},
dv:function(a,b){return J.bd(H.b(a,[b]))},
bd:function(a){H.bC(a)
a.fixed$length=Array
return a}}},
lg:{"^":"aQ;$ti"},
ap:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.v(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c_:{"^":"n;",
h9:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.a7(""+a+".toInt()"))},
bQ:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.a7(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.a7(""+a+".round()"))},
di:function(a,b){var z,y
if(b>20)throw H.d(P.a9(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM:function(a){return a&0x1FFFFFFF},
dq:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dz:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cv(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.cv(a,b)},
cv:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.a7("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aW:function(a,b){var z
if(a>0)z=this.eM(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eM:function(a,b){return b>31?0:a>>>b},
ag:function(a,b){if(typeof b!=="number")throw H.d(H.aI(b))
return a<b},
$ist:1,
$isT:1},
dx:{"^":"c_;",$isB:1},
dw:{"^":"c_;"},
cs:{"^":"n;",
bH:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aJ(a,b))
if(b<0)throw H.d(H.aJ(a,b))
if(b>=a.length)H.o(H.aJ(a,b))
return a.charCodeAt(b)},
aR:function(a,b){if(b>=a.length)throw H.d(H.aJ(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.O(b)
if(typeof b!=="string")throw H.d(P.bR(b,null,null))
return a+b},
bi:function(a,b,c){H.V(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.bK(b,null,null))
if(b>c)throw H.d(P.bK(b,null,null))
if(c>a.length)throw H.d(P.bK(c,null,null))
return a.substring(b,c)},
c6:function(a,b){return this.bi(a,b,null)},
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
fg:function(a,b,c){if(c>a.length)throw H.d(P.a9(c,0,a.length,null,null))
return H.f5(a,b,c)},
i:function(a){return a},
gM:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdL:1,
$ism:1}}],["","",,H,{"^":"",
du:function(){return new P.hZ("No element")},
W:{"^":"iy;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.bH(this.a,b)},
$ases:function(){return[P.B]},
$asq:function(){return[P.B]},
$ash:function(){return[P.B]},
$asc:function(){return[P.B]}},
fz:{"^":"h;"},
dC:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.bP(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.b6(z))
w=this.c
if(typeof x!=="number")return H.y(x)
if(w>=x){this.d=null
return!1}this.d=y.v(z,w);++this.c
return!0}},
h4:{"^":"h;a,b,$ti",
gP:function(a){return new H.h5(J.b3(this.a),this.b,this.$ti)},
gk:function(a){return J.b4(this.a)},
v:function(a,b){return this.b.$1(J.d5(this.a,b))},
$ash:function(a,b){return[b]}},
h5:{"^":"cr;0a,b,c,$ti",
A:function(){var z=this.b
if(z.A()){this.a=this.c.$1(z.gI(z))
return!0}this.a=null
return!1},
gI:function(a){return this.a},
$ascr:function(a,b){return[b]}},
iP:{"^":"h;a,b,$ti",
gP:function(a){return new H.iQ(J.b3(this.a),this.b,this.$ti)}},
iQ:{"^":"cr;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gI(z)))return!0
return!1},
gI:function(a){var z=this.a
return z.gI(z)}},
bX:{"^":"a;$ti"},
es:{"^":"a;$ti"},
iy:{"^":"c0+es;"}}],["","",,H,{"^":"",
kw:function(a){return init.types[H.V(a)]},
kE:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isz},
i:function(a){var z
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
if(w.length>1&&C.h.aR(w,0)===36)w=C.h.c6(w,1)
r=H.d_(H.bC(H.aK(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dP:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hA:function(a){var z,y,x,w
z=H.b([],[P.B])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.v)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aI(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aW(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aI(w))}return H.dP(z)},
dQ:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aI(x))
if(x<0)throw H.d(H.aI(x))
if(x>65535)return H.hA(a)}return H.dP(a)},
hz:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aW(z,10))>>>0,56320|z&1023)}throw H.d(P.a9(a,0,1114111,null,null))},
a4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hy:function(a){return a.b?H.a4(a).getUTCFullYear()+0:H.a4(a).getFullYear()+0},
hw:function(a){return a.b?H.a4(a).getUTCMonth()+1:H.a4(a).getMonth()+1},
hs:function(a){return a.b?H.a4(a).getUTCDate()+0:H.a4(a).getDate()+0},
ht:function(a){return a.b?H.a4(a).getUTCHours()+0:H.a4(a).getHours()+0},
hv:function(a){return a.b?H.a4(a).getUTCMinutes()+0:H.a4(a).getMinutes()+0},
hx:function(a){return a.b?H.a4(a).getUTCSeconds()+0:H.a4(a).getSeconds()+0},
hu:function(a){return a.b?H.a4(a).getUTCMilliseconds()+0:H.a4(a).getMilliseconds()+0},
y:function(a){throw H.d(H.aI(a))},
e:function(a,b){if(a==null)J.b4(a)
throw H.d(H.aJ(a,b))},
aJ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,"index",null)
z=H.V(J.b4(a))
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.K(b,a,"index",null,z)
return P.bK(b,"index",null)},
ks:function(a,b,c){if(a>c)return new P.c1(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c1(a,c,!0,b,"end","Invalid value")
return new P.ao(!0,b,"end",null)},
aI:function(a){return new P.ao(!0,a,null,null)},
kn:function(a){if(typeof a!=="number")throw H.d(H.aI(a))
return a},
d:function(a){var z
if(a==null)a=new P.dK()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f7})
z.name=""}else z.toString=H.f7
return z},
f7:function(){return J.a1(this.dartException)},
o:function(a){throw H.d(a)},
v:function(a){throw H.d(P.b6(a))},
aM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aW(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cv(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dJ(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ea()
u=$.$get$eb()
t=$.$get$ec()
s=$.$get$ed()
r=$.$get$eh()
q=$.$get$ei()
p=$.$get$ef()
$.$get$ee()
o=$.$get$ek()
n=$.$get$ej()
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
if(l)return z.$1(H.dJ(H.O(y),m))}}return z.$1(new H.ix(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dY()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ao(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dY()
return a},
b1:function(a){var z
if(a==null)return new H.eI(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eI(a)},
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
case 4:return a.$4(c,d,e,f)}throw H.d(P.p("Unsupported number of arguments for wrapped closure"))},
b_:function(a,b){var z
H.V(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kD)
a.$identity=z
return z},
fo:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
fl:function(a,b,c,d){var z=H.ch
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
df:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fn(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fl(y,!w,z,b)
if(y===0){w=$.aj
if(typeof w!=="number")return w.B()
$.aj=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b5
if(v==null){v=H.bS("self")
$.b5=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aj
if(typeof w!=="number")return w.B()
$.aj=w+1
t+=w
w="return function("+t+"){return this."
v=$.b5
if(v==null){v=H.bS("self")
$.b5=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fm:function(a,b,c,d){var z,y
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
fn:function(a,b){var z,y,x,w,v,u,t,s
z=$.b5
if(z==null){z=H.bS("self")
$.b5=z}y=$.d8
if(y==null){y=H.bS("receiver")
$.d8=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fm(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.aj
if(typeof y!=="number")return y.B()
$.aj=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.aj
if(typeof y!=="number")return y.B()
$.aj=y+1
return new Function(z+y+"}")()},
cV:function(a,b,c,d,e,f,g){var z,y
z=J.bd(H.bC(b))
H.V(c)
y=!!J.I(d).$isc?J.bd(d):d
return H.fo(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.an(a,"String"))},
kK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.an(a,"num"))},
eW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.an(a,"bool"))},
V:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.an(a,"int"))},
f3:function(a,b){throw H.d(H.an(a,H.O(b).substring(3)))},
kM:function(a,b){var z=J.bP(b)
throw H.d(H.fj(a,z.bi(b,3,z.gk(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.f3(a,b)},
f:function(a,b){var z
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
H.f3(a,b)},
eX:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.V(z)]
else return a.$S()}return},
bO:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eX(J.I(a))
if(z==null)return!1
y=H.f_(z,null,b,null)
return y},
j:function(a,b){var z,y
if(a==null)return a
if($.cR)return a
$.cR=!0
try{if(H.bO(a,b))return a
z=H.bQ(b)
y=H.an(a,z)
throw H.d(y)}finally{$.cR=!1}},
cX:function(a,b){if(a!=null&&!H.cU(a,b))H.o(H.an(a,H.bQ(b)))
return a},
eR:function(a){var z
if(a instanceof H.r){z=H.eX(J.I(a))
if(z!=null)return H.bQ(z)
return"Closure"}return H.aT(a)},
kR:function(a){throw H.d(new P.fs(H.O(a)))},
eY:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aK:function(a){if(a==null)return
return a.$ti},
m5:function(a,b,c){return H.b2(a["$as"+H.i(c)],H.aK(b))},
bB:function(a,b,c,d){var z
H.O(c)
H.V(d)
z=H.b2(a["$as"+H.i(c)],H.aK(b))
return z==null?null:z[d]},
aD:function(a,b,c){var z
H.O(b)
H.V(c)
z=H.b2(a["$as"+H.i(b)],H.aK(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.V(b)
z=H.aK(a)
return z==null?null:z[b]},
bQ:function(a){var z=H.aL(a,null)
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
return H.i(b[y])}if('func' in a)return H.kd(a,b)
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
n=n+m+H.aL(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d_:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.m],"$asc")
if(a==null)return""
z=new P.bL("")
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
return H.eU(H.b2(y[d],z),null,c,null)},
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
eU:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ae(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ae(a[y],b,c[y],d))return!1
return!0},
m3:function(a,b,c){return a.apply(b,H.b2(J.I(b)["$as"+H.i(c)],H.aK(b)))},
f0:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.f0(z)}return!1},
cU:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.f0(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bO(a,b)}y=J.I(a).constructor
x=H.aK(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ae(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.cU(a,b))throw H.d(H.an(a,H.bQ(b)))
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
if('func' in c)return H.f_(a,b,c,d)
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
if(t!==y){s=H.bQ(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eU(H.b2(r,z),b,u,d)},
f_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
z=H.O($.eZ.$1(a))
y=$.c9[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cc[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.eT.$2(a,z))
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
return u.i}if(v==="+")return H.f2(a,x)
if(v==="*")throw H.d(P.er(z))
if(init.leafTags[z]===true){u=H.cd(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f2(a,x)},
f2:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d1(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cd:function(a){return J.d1(a,!1,null,!!a.$isz)},
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
u=$.f4.$1(v)
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
$.eZ=new H.ky(v)
$.eT=new H.kz(u)
$.f4=new H.kA(t)},
aZ:function(a,b){return a(b)||b},
f5:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f6:function(a,b,c){var z,y,x
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
eg:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hn:{"^":"U;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dJ:function(a,b){return new H.hn(a,b==null?null:b.method)}}},
fR:{"^":"U;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
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
eI:{"^":"a;a,0b",
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
gdl:function(){return this},
$iscn:1,
gdl:function(){return this}},
e2:{"^":"r;"},
i_:{"^":"e2;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cg:{"^":"e2;a,b,c,d",
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
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.aT(z)+"'")},
n:{
ch:function(a){return a.a},
d9:function(a){return a.c},
bS:function(a){var z,y,x,w,v
z=new H.cg("self","target","receiver","name")
y=J.bd(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ik:{"^":"U;a",
i:function(a){return this.a},
n:{
an:function(a,b){return new H.ik("TypeError: "+H.i(P.bW(a))+": type '"+H.eR(a)+"' is not a subtype of type '"+b+"'")}}},
fi:{"^":"U;a",
i:function(a){return this.a},
n:{
fj:function(a,b){return new H.fi("CastError: "+H.i(P.bW(a))+": type '"+H.eR(a)+"' is not a subtype of type '"+b+"'")}}},
hL:{"^":"U;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
n:{
hM:function(a){return new H.hL(a)}}},
aR:{"^":"h2;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gaf:function(a){return new H.dB(this,[H.x(this,0)])},
cF:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cl(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cl(y,b)}else return this.fv(b)},
fv:function(a){var z=this.d
if(z==null)return!1
return this.bR(this.bn(z,J.aN(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aT(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aT(w,b)
x=y==null?null:y.b
return x}else return this.fw(b)},
fw:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bn(z,J.aN(a)&0x3ffffff)
x=this.bR(y,a)
if(x<0)return
return y[x].b},
R:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bq()
this.b=z}this.cd(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bq()
this.c=y}this.cd(y,b,c)}else{x=this.d
if(x==null){x=this.bq()
this.d=x}w=J.aN(b)&0x3ffffff
v=this.bn(x,w)
if(v==null)this.bw(x,w,[this.br(b,c)])
else{u=this.bR(v,b)
if(u>=0)v[u].b=c
else v.push(this.br(b,c))}}},
H:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.b6(this))
z=z.c}},
cd:function(a,b,c){var z
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
z=this.aT(a,b)
if(z==null)this.bw(a,b,this.br(b,c))
else z.b=c},
e1:function(){this.r=this.r+1&67108863},
br:function(a,b){var z,y
z=new H.fW(H.A(a,H.x(this,0)),H.A(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e1()
return z},
bR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.dE(this)},
aT:function(a,b){return a[b]},
bn:function(a,b){return a[b]},
bw:function(a,b,c){a[b]=c},
dX:function(a,b){delete a[b]},
cl:function(a,b){return this.aT(a,b)!=null},
bq:function(){var z=Object.create(null)
this.bw(z,"<non-identifier-key>",z)
this.dX(z,"<non-identifier-key>")
return z},
$isdA:1},
fW:{"^":"a;a,b,0c,0d"},
dB:{"^":"fz;a,$ti",
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
$isdL:1,
n:{
fQ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.fJ("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kt:function(a){return J.dv(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
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
hj:{"^":"n;",$islP:1,"%":"DataView;ArrayBufferView;cA|eC|eD|hi|eE|eF|aG"},
cA:{"^":"hj;",
gk:function(a){return a.length},
$isz:1,
$asz:I.cW},
hi:{"^":"eD;",
j:function(a,b){H.aH(b,a,a.length)
return a[b]},
$asbX:function(){return[P.t]},
$asq:function(){return[P.t]},
$ish:1,
$ash:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
"%":"Float32Array|Float64Array"},
aG:{"^":"eF;",
$asbX:function(){return[P.B]},
$asq:function(){return[P.B]},
$ish:1,
$ash:function(){return[P.B]},
$isc:1,
$asc:function(){return[P.B]}},
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
bh:function(a,b,c){return new Uint8Array(a.subarray(b,H.kc(b,c,a.length)))},
"%":";Uint8Array"},
eC:{"^":"cA+q;"},
eD:{"^":"eC+bX;"},
eE:{"^":"cA+q;"},
eF:{"^":"eE+bX;"}}],["","",,P,{"^":"",
iS:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b_(new P.iU(z),1)).observe(y,{childList:true})
return new P.iT(z,y,x)}else if(self.setImmediate!=null)return P.kl()
return P.km()},
lT:[function(a){self.scheduleImmediate(H.b_(new P.iV(H.j(a,{func:1,ret:-1})),0))},"$1","kk",4,0,10],
lU:[function(a){self.setImmediate(H.b_(new P.iW(H.j(a,{func:1,ret:-1})),0))},"$1","kl",4,0,10],
lV:[function(a){P.cH(C.l,H.j(a,{func:1,ret:-1}))},"$1","km",4,0,10],
cH:function(a,b){var z
H.j(b,{func:1,ret:-1})
z=C.f.T(a.a,1000)
return P.jR(z<0?0:z,b)},
e6:function(a,b){var z
H.j(b,{func:1,ret:-1,args:[P.al]})
z=C.f.T(a.a,1000)
return P.jS(z<0?0:z,b)},
kg:function(a,b){if(H.bO(a,{func:1,args:[P.a,P.ai]}))return b.fV(a,null,P.a,P.ai)
if(H.bO(a,{func:1,args:[P.a]}))return H.j(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.bR(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kf:function(){var z,y
for(;z=$.aY,z!=null;){$.by=null
y=z.b
$.aY=y
if(y==null)$.bx=null
z.a.$0()}},
m2:[function(){$.cS=!0
try{P.kf()}finally{$.by=null
$.cS=!1
if($.aY!=null)$.$get$cO().$1(P.eV())}},"$0","eV",0,0,2],
eQ:function(a){var z=new P.ex(H.j(a,{func:1,ret:-1}))
if($.aY==null){$.bx=z
$.aY=z
if(!$.cS)$.$get$cO().$1(P.eV())}else{$.bx.b=z
$.bx=z}},
kj:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.aY
if(z==null){P.eQ(a)
$.by=$.bx
return}y=new P.ex(a)
x=$.by
if(x==null){y.b=z
$.by=y
$.aY=y}else{y.b=x.b
x.b=y
$.by=y
if(y.b==null)$.bx=y}},
kN:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.L
if(C.j===y){P.c8(null,null,C.j,a)
return}y.toString
P.c8(null,null,y,H.j(y.bB(a),z))},
e4:function(a,b){var z,y
z={func:1,ret:-1}
H.j(b,z)
y=$.L
if(y===C.j){y.toString
return P.cH(a,b)}return P.cH(a,H.j(y.bB(b),z))},
e5:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.al]}
H.j(b,z)
y=$.L
if(y===C.j){y.toString
return P.e6(a,b)}x=y.cC(b,P.al)
$.L.toString
return P.e6(a,H.j(x,z))},
c7:function(a,b,c,d,e){var z={}
z.a=d
P.kj(new P.kh(z,e))},
eO:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.L
if(y===c)return d.$0()
$.L=c
z=y
try{y=d.$0()
return y}finally{$.L=z}},
eP:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.L
if(y===c)return d.$1(e)
$.L=c
z=y
try{y=d.$1(e)
return y}finally{$.L=z}},
ki:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.L
if(y===c)return d.$2(e,f)
$.L=c
z=y
try{y=d.$2(e,f)
return y}finally{$.L=z}},
c8:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bB(d):c.fc(d,-1)
P.eQ(d)},
iU:{"^":"r:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iT:{"^":"r:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iV:{"^":"r:1;a",
$0:function(){this.a.$0()}},
iW:{"^":"r:1;a",
$0:function(){this.a.$0()}},
eL:{"^":"a;a,0b,c",
dK:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b_(new P.jU(this,b),0),a)
else throw H.d(P.a7("`setTimeout()` not found."))},
dL:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b_(new P.jT(this,a,Date.now(),b),0),a)
else throw H.d(P.a7("Periodic timer."))},
$isal:1,
n:{
jR:function(a,b){var z=new P.eL(!0,0)
z.dK(a,b)
return z},
jS:function(a,b){var z=new P.eL(!1,0)
z.dL(a,b)
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
if(w>(y+1)*x)y=C.f.dz(w,x)}z.c=y
this.d.$1(z)}},
aX:{"^":"a;0a,b,c,d,e,$ti",
fE:function(a){if(this.c!==6)return!0
return this.b.b.bZ(H.j(this.d,{func:1,ret:P.ad,args:[P.a]}),a.a,P.ad,P.a)},
fu:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.bO(z,{func:1,args:[P.a,P.ai]}))return H.cX(w.h2(z,a.a,a.b,null,y,P.ai),x)
else return H.cX(w.bZ(H.j(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aB:{"^":"a;cu:a<,b,0eA:c<,$ti",
dh:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.L
if(y!==C.j){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kg(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aB(0,$.L,[c])
w=b==null?1:3
this.ce(new P.aX(x,w,a,b,[z,c]))
return x},
h8:function(a,b){return this.dh(a,null,b)},
ce:function(a){var z,y
z=this.a
if(z<=1){a.a=H.l(this.c,"$isaX")
this.c=a}else{if(z===2){y=H.l(this.c,"$isaB")
z=y.a
if(z<4){y.ce(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c8(null,null,z,H.j(new P.j9(this,a),{func:1,ret:-1}))}},
cq:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.l(this.c,"$isaX")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.l(this.c,"$isaB")
y=u.a
if(y<4){u.cq(a)
return}this.a=y
this.c=u.c}z.a=this.aV(a)
y=this.b
y.toString
P.c8(null,null,y,H.j(new P.je(z,this),{func:1,ret:-1}))}},
bt:function(){var z=H.l(this.c,"$isaX")
this.c=null
return this.aV(z)},
aV:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ci:function(a){var z,y,x,w
z=H.x(this,0)
H.cX(a,{futureOr:1,type:z})
y=this.$ti
x=H.bA(a,"$isba",y,"$asba")
if(x){z=H.bA(a,"$isaB",y,null)
if(z)P.ez(a,this)
else P.ja(a,this)}else{w=this.bt()
H.A(a,z)
this.a=4
this.c=a
P.bu(this,w)}},
bk:[function(a,b){var z
H.l(b,"$isai")
z=this.bt()
this.a=8
this.c=new P.a8(a,b)
P.bu(this,z)},function(a){return this.bk(a,null)},"hh","$2","$1","gdT",4,2,36],
$isba:1,
n:{
ja:function(a,b){var z,y,x
b.a=1
try{a.dh(new P.jb(b),new P.jc(b),null)}catch(x){z=H.aM(x)
y=H.b1(x)
P.kN(new P.jd(b,z,y))}},
ez:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.l(a.c,"$isaB")
if(z>=4){y=b.bt()
b.a=a.a
b.c=a.c
P.bu(b,y)}else{y=H.l(b.c,"$isaX")
b.a=2
b.c=a
a.cq(y)}},
bu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.l(y.c,"$isa8")
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
if(p){H.l(r,"$isa8")
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
b=t.aV(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ez(y,t)
return}}m=b.b
n=H.l(m.c,"$isaX")
m.c=null
b=m.aV(n)
y=x.a
u=x.b
if(!y){H.A(u,H.x(m,0))
m.a=4
m.c=u}else{H.l(u,"$isa8")
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
z.ci(a)}},
jc:{"^":"r:20;a",
$2:function(a,b){this.a.bk(a,H.l(b,"$isai"))},
$1:function(a){return this.$2(a,null)}},
jd:{"^":"r:1;a,b,c",
$0:function(){this.a.bk(this.b,this.c)}},
jh:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.de(H.j(w.d,{func:1}),null)}catch(v){y=H.aM(v)
x=H.b1(v)
if(this.d){w=H.l(this.a.a.c,"$isa8").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.l(this.a.a.c,"$isa8")
else u.b=new P.a8(y,x)
u.a=!0
return}if(!!J.I(z).$isba){if(z instanceof P.aB&&z.gcu()>=4){if(z.gcu()===8){w=this.b
w.b=H.l(z.geA(),"$isa8")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.h8(new P.ji(t),null)
w.a=!1}}},
ji:{"^":"r:21;a",
$1:function(a){return this.a}},
jg:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.A(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.bZ(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aM(t)
y=H.b1(t)
x=this.a
x.b=new P.a8(z,y)
x.a=!0}}},
jf:{"^":"r:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.l(this.a.a.c,"$isa8")
w=this.c
if(w.fE(z)&&w.e!=null){v=this.b
v.b=w.fu(z)
v.a=!1}}catch(u){y=H.aM(u)
x=H.b1(u)
w=H.l(this.a.a.c,"$isa8")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a8(y,x)
s.a=!0}}},
ex:{"^":"a;a,0b"},
cD:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aB(0,$.L,[P.B])
z.a=0
this.fC(new P.i2(z,this),!0,new P.i3(z,y),y.gdT())
return y}},
i2:{"^":"r;a,b",
$1:function(a){H.A(a,H.aD(this.b,"cD",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.aD(this.b,"cD",0)]}}},
i3:{"^":"r:1;a,b",
$0:function(){this.b.ci(this.a.a)}},
e_:{"^":"a;$ti"},
i1:{"^":"a;"},
al:{"^":"a;"},
a8:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isU:1},
k0:{"^":"a;",$islS:1},
kh:{"^":"r:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dK()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
jD:{"^":"k0;",
h3:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.j===$.L){a.$0()
return}P.eO(null,null,this,a,-1)}catch(x){z=H.aM(x)
y=H.b1(x)
P.c7(null,null,this,z,H.l(y,"$isai"))}},
h4:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.L){a.$1(b)
return}P.eP(null,null,this,a,b,-1,c)}catch(x){z=H.aM(x)
y=H.b1(x)
P.c7(null,null,this,z,H.l(y,"$isai"))}},
fc:function(a,b){return new P.jF(this,H.j(a,{func:1,ret:b}),b)},
bB:function(a){return new P.jE(this,H.j(a,{func:1,ret:-1}))},
cC:function(a,b){return new P.jG(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
de:function(a,b){H.j(a,{func:1,ret:b})
if($.L===C.j)return a.$0()
return P.eO(null,null,this,a,b)},
bZ:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.L===C.j)return a.$1(b)
return P.eP(null,null,this,a,b,c,d)},
h2:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.L===C.j)return a.$2(b,c)
return P.ki(null,null,this,a,b,c,d,e,f)},
fV:function(a,b,c,d){return H.j(a,{func:1,ret:b,args:[c,d]})}},
jF:{"^":"r;a,b,c",
$0:function(){return this.a.de(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jE:{"^":"r:2;a,b",
$0:function(){return this.a.h3(this.b)}},
jG:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.h4(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fZ:function(a,b,c){H.bC(a)
return H.w(H.ku(a,new H.aR(0,0,[b,c])),"$isdA",[b,c],"$asdA")},
fY:function(a,b){return new H.aR(0,0,[a,b])},
h_:function(a,b,c,d){return new P.jp(0,0,[d])},
fM:function(a,b,c){var z,y
if(P.cT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bz()
C.a.h(y,a)
try{P.ke(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.e0(b,H.kF(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cq:function(a,b,c){var z,y,x
if(P.cT(a))return b+"..."+c
z=new P.bL(b)
y=$.$get$bz()
C.a.h(y,a)
try{x=z
x.a=P.e0(x.gak(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gak()+c
y=z.gak()
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
w=H.i(z.gI(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gI(z);++x
if(!z.A()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gI(z);++x
for(;z.A();t=s,s=r){r=z.gI(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dE:function(a){var z,y,x
z={}
if(P.cT(a))return"{...}"
y=new P.bL("")
try{C.a.h($.$get$bz(),a)
x=y
x.a=x.gak()+"{"
z.a=!0
J.fb(a,new P.h3(z,y))
z=y
z.a=z.gak()+"}"}finally{z=$.$get$bz()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gak()
return z.charCodeAt(0)==0?z:z},
jp:{"^":"jj;a,0b,0c,0d,0e,0f,r,$ti",
gP:function(a){return P.eB(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cQ()
this.b=z}return this.cf(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cQ()
this.c=y}return this.cf(y,b)}else return this.dM(0,b)},
dM:function(a,b){var z,y,x
H.A(b,H.x(this,0))
z=this.d
if(z==null){z=P.cQ()
this.d=z}y=this.cj(b)
x=z[y]
if(x==null)z[y]=[this.bj(b)]
else{if(this.co(x,b)>=0)return!1
x.push(this.bj(b))}return!0},
C:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cr(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cr(this.c,b)
else return this.es(0,b)},
es:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e_(z,b)
x=this.co(y,b)
if(x<0)return!1
this.cw(y.splice(x,1)[0])
return!0},
cf:function(a,b){H.A(b,H.x(this,0))
if(H.l(a[b],"$iscP")!=null)return!1
a[b]=this.bj(b)
return!0},
cr:function(a,b){var z
if(a==null)return!1
z=H.l(a[b],"$iscP")
if(z==null)return!1
this.cw(z)
delete a[b]
return!0},
cg:function(){this.r=this.r+1&67108863},
bj:function(a){var z,y
z=new P.cP(H.A(a,H.x(this,0)))
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
cj:function(a){return J.aN(a)&0x3ffffff},
e_:function(a,b){return a[this.cj(b)]},
co:function(a,b){var z,y
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
return!1}else{this.d=H.A(z.a,H.x(this,0))
this.c=z.b
return!0}}},
n:{
eB:function(a,b,c){var z=new P.jq(a,b,[c])
z.c=a.e
return z}}},
jj:{"^":"hN;"},
c0:{"^":"jr;",$ish:1,$isc:1},
q:{"^":"a;$ti",
gP:function(a){return new H.dC(a,this.gk(a),0,[H.bB(this,a,"q",0)])},
v:function(a,b){return this.j(a,b)},
hb:function(a,b){var z,y,x
z=H.b([],[H.bB(this,a,"q",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.y(x)
if(!(y<x))break
C.a.R(z,y,this.j(a,y));++y}return z},
ha:function(a){return this.hb(a,!0)},
i:function(a){return P.cq(a,"[","]")}},
h2:{"^":"a6;"},
h3:{"^":"r:11;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
a6:{"^":"a;$ti",
H:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.bB(this,a,"a6",0),H.bB(this,a,"a6",1)]})
for(z=J.b3(this.gaf(a));z.A();){y=z.gI(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b4(this.gaf(a))},
i:function(a){return P.dE(a)},
$isa_:1},
hP:{"^":"a;$ti",
i:function(a){return P.cq(this,"{","}")},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.d6("index"))
if(b<0)H.o(P.a9(b,0,null,"index",null))
for(z=P.eB(this,this.r,H.x(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
$ish:1},
hN:{"^":"hP;"},
jr:{"^":"a+q;"}}],["","",,P,{"^":"",ck:{"^":"a;$ti"},di:{"^":"i1;$ti"},fB:{"^":"ck;",
$asck:function(){return[P.m,[P.c,P.B]]}},iB:{"^":"fB;a"},iC:{"^":"di;",
fi:function(a,b,c){var z,y,x,w
z=a.length
P.dR(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k_(0,0,x)
if(w.dZ(a,b,z)!==z)w.cz(C.h.bH(a,z-1),0)
return C.I.bh(x,0,w.b)},
fh:function(a){return this.fi(a,0,null)},
$asdi:function(){return[P.m,[P.c,P.B]]}},k_:{"^":"a;a,b,c",
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
dZ:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.bH(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.aR(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cz(w,C.h.aR(a,u)))x=u}else if(w<=2047){v=this.b
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
fD:function(a){var z=J.I(a)
if(!!z.$isr)return z.i(a)
return"Instance of '"+H.aT(a)+"'"},
h0:function(a,b,c,d){var z,y
H.A(b,d)
z=J.fN(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.R(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
dD:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=J.b3(a);x.A();)C.a.h(y,H.A(x.gI(x),c))
if(b)return y
return H.w(J.bd(y),"$isc",z,"$asc")},
cE:function(a,b,c){var z,y
z=P.B
H.w(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.w(a,"$isaQ",[z],"$asaQ")
y=a.length
c=P.dR(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.ag()
z=c<y}else z=!0
return H.dQ(z?C.a.bh(a,b,c):a)}return P.i4(a,b,c)},
i4:function(a,b,c){var z,y,x
H.w(a,"$ish",[P.B],"$ash")
z=J.b3(a)
for(y=0;y<b;++y)if(!z.A())throw H.d(P.a9(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gI(z))
return H.dQ(x)},
hE:function(a,b,c){return new H.fP(a,H.fQ(a,!1,!0,!1))},
jZ:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.B],"$asc")
if(c===C.q){z=$.$get$eN().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fh(H.A(b,H.aD(c,"ck",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hz(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fD(a)},
p:function(a){return new P.ey(a)},
d3:function(a){H.kL(a)},
ad:{"^":"a;"},
"+bool":0,
aE:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aE))return!1
return this.a===b.a&&this.b===b.b},
gM:function(a){var z=this.a
return(z^C.f.aW(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ft(H.hy(this))
y=P.bD(H.hw(this))
x=P.bD(H.hs(this))
w=P.bD(H.ht(this))
v=P.bD(H.hv(this))
u=P.bD(H.hx(this))
t=P.fu(H.hu(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
ft:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fu:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bD:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"T;"},
"+double":0,
b8:{"^":"a;a",
ag:function(a,b){return C.f.ag(this.a,H.l(b,"$isb8").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.b8))return!1
return this.a===b.a},
gM:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fy()
y=this.a
if(y<0)return"-"+new P.b8(0-y).i(0)
x=z.$1(C.f.T(y,6e7)%60)
w=z.$1(C.f.T(y,1e6)%60)
v=new P.fx().$1(y%1e6)
return""+C.f.T(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
n:{
cm:function(a,b,c,d,e,f){return new P.b8(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fx:{"^":"r:12;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fy:{"^":"r:12;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
U:{"^":"a;"},
dK:{"^":"U;",
i:function(a){return"Throw of null."}},
ao:{"^":"U;a,b,c,d",
gbm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbl:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gbm()+y+x
if(!this.a)return w
v=this.gbl()
u=P.bW(this.b)
return w+v+": "+H.i(u)},
n:{
fd:function(a){return new P.ao(!1,null,null,a)},
bR:function(a,b,c){return new P.ao(!0,a,b,c)},
d6:function(a){return new P.ao(!1,null,a,"Must not be null")}}},
c1:{"^":"ao;e,f,a,b,c,d",
gbm:function(){return"RangeError"},
gbl:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
n:{
bK:function(a,b,c){return new P.c1(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.c1(b,c,!0,a,d,"Invalid value")},
dR:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.y(a)
if(0<=a){if(typeof c!=="number")return H.y(c)
z=a>c}else z=!0
if(z)throw H.d(P.a9(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.y(c)
z=b>c}else z=!0
if(z)throw H.d(P.a9(b,a,c,"end",f))
return b}return c}}},
fL:{"^":"ao;e,k:f>,a,b,c,d",
gbm:function(){return"RangeError"},
gbl:function(){if(J.f8(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
n:{
K:function(a,b,c,d,e){var z=H.V(e!=null?e:J.b4(b))
return new P.fL(b,z,!0,a,c,"Index out of range")}}},
iz:{"^":"U;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
a7:function(a){return new P.iz(a)}}},
iw:{"^":"U;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
er:function(a){return new P.iw(a)}}},
hZ:{"^":"U;a",
i:function(a){return"Bad state: "+this.a}},
fp:{"^":"U;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.bW(z))+"."},
n:{
b6:function(a){return new P.fp(a)}}},
ho:{"^":"a;",
i:function(a){return"Out of Memory"},
$isU:1},
dY:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isU:1},
fs:{"^":"U;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ey:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fJ:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.bi(x,0,75)+"..."
return y+"\n"+x}},
B:{"^":"T;"},
"+int":0,
h:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gP(this)
for(y=0;z.A();)++y
return y},
v:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.d6("index"))
if(b<0)H.o(P.a9(b,0,null,"index",null))
for(z=this.gP(this),y=0;z.A();){x=z.gI(z)
if(b===y)return x;++y}throw H.d(P.K(b,this,"index",null,y))},
i:function(a){return P.fM(this,"(",")")}},
cr:{"^":"a;$ti"},
c:{"^":"a;$ti",$ish:1},
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
m:{"^":"a;",$isdL:1},
"+String":0,
bL:{"^":"a;ak:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
e0:function(a,b,c){var z=J.b3(b)
if(!z.A())return a
if(c.length===0){do a+=H.i(z.gI(z))
while(z.A())}else{a+=H.i(z.gI(z))
for(;z.A();)a=a+c+H.i(z.gI(z))}return a}}}}],["","",,W,{"^":"",
cj:function(a,b){var z=document.createElement("canvas")
return z},
fA:function(a){H.l(a,"$isa3")
return"wheel"},
c4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eA:function(a,b,c,d){var z,y
z=W.c4(W.c4(W.c4(W.c4(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eS:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.L
if(z===C.j)return a
return z.cC(a,b)},
bc:{"^":"X;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kT:{"^":"n;0k:length=","%":"AccessibleNodeList"},
kU:{"^":"bc;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kV:{"^":"bc;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fh:{"^":"n;","%":";Blob"},
ci:{"^":"bc;",
bf:function(a,b,c){if(c!=null)return a.getContext(b,P.ko(c,null))
return a.getContext(b)},
dm:function(a,b){return this.bf(a,b,null)},
$isci:1,
"%":"HTMLCanvasElement"},
de:{"^":"n;",$isde:1,"%":"CanvasRenderingContext2D"},
l0:{"^":"J;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l2:{"^":"fr;0k:length=","%":"CSSPerspective"},
b7:{"^":"n;",$isb7:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
l3:{"^":"j_;0k:length=",
dn:function(a,b){var z=a.getPropertyValue(this.dQ(a,b))
return z==null?"":z},
dQ:function(a,b){var z,y
z=$.$get$dj()
y=z[b]
if(typeof y==="string")return y
y=this.eN(a,b)
z[b]=y
return y},
eN:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fv()+b
if(z in a)return z
return b},
gbC:function(a){return a.bottom},
ga6:function(a){return a.height},
gav:function(a){return a.left},
gaJ:function(a){return a.right},
gaM:function(a){return a.top},
ga8:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fq:{"^":"a;",
gav:function(a){return this.dn(a,"left")}},
dk:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fr:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
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
$isz:1,
$asz:function(){return[[P.a5,P.T]]},
$asq:function(){return[[P.a5,P.T]]},
$ish:1,
$ash:function(){return[[P.a5,P.T]]},
$isc:1,
$asc:function(){return[[P.a5,P.T]]},
$asu:function(){return[[P.a5,P.T]]},
"%":"ClientRectList|DOMRectList"},
fw:{"^":"n;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.ga8(a))+" x "+H.i(this.ga6(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.bA(b,"$isa5",[P.T],"$asa5")
if(!z)return!1
z=J.ca(b)
return a.left===z.gav(b)&&a.top===z.gaM(b)&&this.ga8(a)===z.ga8(b)&&this.ga6(a)===z.ga6(b)},
gM:function(a){return W.eA(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.ga8(a)&0x1FFFFFFF,this.ga6(a)&0x1FFFFFFF)},
gbC:function(a){return a.bottom},
ga6:function(a){return a.height},
gav:function(a){return a.left},
gaJ:function(a){return a.right},
gaM:function(a){return a.top},
ga8:function(a){return a.width},
$isa5:1,
$asa5:function(){return[P.T]},
"%":";DOMRectReadOnly"},
l9:{"^":"j3;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[P.m]},
$asq:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$asu:function(){return[P.m]},
"%":"DOMStringList"},
la:{"^":"n;0k:length=","%":"DOMTokenList"},
iZ:{"^":"c0;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.l(z[b],"$isX")},
h:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var z=this.ha(this)
return new J.ap(z,z.length,0,[H.x(z,0)])},
$asq:function(){return[W.X]},
$ash:function(){return[W.X]},
$asc:function(){return[W.X]}},
X:{"^":"J;",
gcD:function(a){return new W.iZ(a,a.children)},
gcE:function(a){return P.hB(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.T)},
i:function(a){return a.localName},
$isX:1,
"%":";Element"},
a2:{"^":"n;",$isa2:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a3:{"^":"n;",
cA:["dt",function(a,b,c,d){H.j(c,{func:1,args:[W.a2]})
if(c!=null)this.dN(a,b,c,!1)}],
dN:function(a,b,c,d){return a.addEventListener(b,H.b_(H.j(c,{func:1,args:[W.a2]}),1),!1)},
$isa3:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eG|eH|eJ|eK"},
b9:{"^":"fh;",$isb9:1,"%":"File"},
lb:{"^":"j8;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.b9]},
$asq:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asu:function(){return[W.b9]},
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
$isz:1,
$asz:function(){return[W.J]},
$asq:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asu:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bY:{"^":"n;0cG:data=",$isbY:1,"%":"ImageData"},
dt:{"^":"bc;",$isdt:1,"%":"HTMLImageElement"},
be:{"^":"cI;",$isbe:1,"%":"KeyboardEvent"},
lj:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
lk:{"^":"n;0k:length=","%":"MediaList"},
ll:{"^":"a3;",
cA:function(a,b,c,d){H.j(c,{func:1,args:[W.a2]})
if(b==="message")a.start()
this.dt(a,b,c,!1)},
"%":"MessagePort"},
lm:{"^":"js;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gaf:function(a){var z=H.b([],[P.m])
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
H.j(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gaf:function(a){var z=H.b([],[P.m])
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
$isz:1,
$asz:function(){return[W.bf]},
$asq:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$asu:function(){return[W.bf]},
"%":"MimeTypeArray"},
ah:{"^":"cI;",$isah:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iY:{"^":"c0;a",
gP:function(a){var z=this.a.childNodes
return new W.ds(z,z.length,-1,[H.bB(C.J,z,"u",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asq:function(){return[W.J]},
$ash:function(){return[W.J]},
$asc:function(){return[W.J]}},
J:{"^":"a3;",
i:function(a){var z=a.nodeValue
return z==null?this.du(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hl:{"^":"jx;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.J]},
$asq:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asu:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bi:{"^":"n;0k:length=",$isbi:1,"%":"Plugin"},
lx:{"^":"jB;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bi]},
$asq:function(){return[W.bi]},
$ish:1,
$ash:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asu:function(){return[W.bi]},
"%":"PluginArray"},
lz:{"^":"jH;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gaf:function(a){var z=H.b([],[P.m])
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
lC:{"^":"eH;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bk]},
$asq:function(){return[W.bk]},
$ish:1,
$ash:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asu:function(){return[W.bk]},
"%":"SourceBufferList"},
bl:{"^":"n;",$isbl:1,"%":"SpeechGrammar"},
lD:{"^":"jJ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bl]},
$asq:function(){return[W.bl]},
$ish:1,
$ash:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asu:function(){return[W.bl]},
"%":"SpeechGrammarList"},
bm:{"^":"n;0k:length=",$isbm:1,"%":"SpeechRecognitionResult"},
lF:{"^":"jM;",
j:function(a,b){return a.getItem(H.O(b))},
H:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaf:function(a){var z=H.b([],[P.m])
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
$isz:1,
$asz:function(){return[W.bp]},
$asq:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asu:function(){return[W.bp]},
"%":"TextTrackCueList"},
lK:{"^":"eK;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bo]},
$asq:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asu:function(){return[W.bo]},
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
$isz:1,
$asz:function(){return[W.bq]},
$asq:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asu:function(){return[W.bq]},
"%":"TouchList"},
lN:{"^":"n;0k:length=","%":"TrackDefaultList"},
cI:{"^":"a2;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lQ:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
lR:{"^":"a3;0k:length=","%":"VideoTrackList"},
bt:{"^":"ah;",
gfm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.a7("deltaY is not supported"))},
gfl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.a7("deltaX is not supported"))},
$isbt:1,
"%":"WheelEvent"},
iR:{"^":"a3;",
ew:function(a,b){return a.requestAnimationFrame(H.b_(H.j(b,{func:1,ret:-1,args:[P.T]}),1))},
dY:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
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
$isz:1,
$asz:function(){return[W.b7]},
$asq:function(){return[W.b7]},
$ish:1,
$ash:function(){return[W.b7]},
$isc:1,
$asc:function(){return[W.b7]},
$asu:function(){return[W.b7]},
"%":"CSSRuleList"},
lX:{"^":"fw;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.bA(b,"$isa5",[P.T],"$asa5")
if(!z)return!1
z=J.ca(b)
return a.left===z.gav(b)&&a.top===z.gaM(b)&&a.width===z.ga8(b)&&a.height===z.ga6(b)},
gM:function(a){return W.eA(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
ga6:function(a){return a.height},
ga8:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lZ:{"^":"k4;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bb]},
$asq:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asu:function(){return[W.bb]},
"%":"GamepadList"},
m_:{"^":"k6;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.J]},
$asq:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asu:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
m0:{"^":"k8;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bm]},
$asq:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asu:function(){return[W.bm]},
"%":"SpeechRecognitionResultList"},
m1:{"^":"ka;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.bn]},
$asq:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asu:function(){return[W.bn]},
"%":"StyleSheetList"},
j4:{"^":"cD;a,b,c,$ti",
fC:function(a,b,c,d){var z=H.x(this,0)
H.j(a,{func:1,ret:-1,args:[z]})
H.j(c,{func:1,ret:-1})
return W.S(this.a,this.b,a,!1,z)}},
lY:{"^":"j4;a,b,c,$ti"},
j5:{"^":"e_;a,b,c,d,e,$ti",
eO:function(){var z=this.d
if(z!=null&&this.a<=0)J.fa(this.b,this.c,z,!1)},
n:{
S:function(a,b,c,d,e){var z=c==null?null:W.eS(new W.j6(c),W.a2)
z=new W.j5(0,a,b,z,!1,[e])
z.eO()
return z}}},
j6:{"^":"r:7;a",
$1:function(a){return this.a.$1(H.l(a,"$isa2"))}},
u:{"^":"a;$ti",
gP:function(a){return new W.ds(a,this.gk(a),-1,[H.bB(this,a,"u",0)])}},
ds:{"^":"a;a,b,c,0d,$ti",
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f9(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gI:function(a){return this.d}},
j_:{"^":"n+fq;"},
j0:{"^":"n+q;"},
j1:{"^":"j0+u;"},
j2:{"^":"n+q;"},
j3:{"^":"j2+u;"},
j7:{"^":"n+q;"},
j8:{"^":"j7+u;"},
jk:{"^":"n+q;"},
jl:{"^":"jk+u;"},
js:{"^":"n+a6;"},
jt:{"^":"n+a6;"},
ju:{"^":"n+q;"},
jv:{"^":"ju+u;"},
jw:{"^":"n+q;"},
jx:{"^":"jw+u;"},
jA:{"^":"n+q;"},
jB:{"^":"jA+u;"},
jH:{"^":"n+a6;"},
eG:{"^":"a3+q;"},
eH:{"^":"eG+u;"},
jI:{"^":"n+q;"},
jJ:{"^":"jI+u;"},
jM:{"^":"n+a6;"},
jP:{"^":"n+q;"},
jQ:{"^":"jP+u;"},
eJ:{"^":"a3+q;"},
eK:{"^":"eJ+u;"},
jV:{"^":"n+q;"},
jW:{"^":"jV+u;"},
k1:{"^":"n+q;"},
k2:{"^":"k1+u;"},
k3:{"^":"n+q;"},
k4:{"^":"k3+u;"},
k5:{"^":"n+q;"},
k6:{"^":"k5+u;"},
k7:{"^":"n+q;"},
k8:{"^":"k7+u;"},
k9:{"^":"n+q;"},
ka:{"^":"k9+u;"}}],["","",,P,{"^":"",
kr:function(a){var z,y
z=J.I(a)
if(!!z.$isbY){y=z.gcG(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eM(a.data,a.height,a.width)},
kq:function(a){if(a instanceof P.eM)return{data:a.a,height:a.b,width:a.c}
return a},
aC:function(a){var z,y,x,w,v
if(a==null)return
z=P.fY(P.m,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w){v=H.O(y[w])
z.R(0,v,a[v])}return z},
ko:function(a,b){var z={}
a.H(0,new P.kp(z))
return z},
dr:function(){var z=$.dq
if(z==null){z=J.ce(window.navigator.userAgent,"Opera",0)
$.dq=z}return z},
fv:function(){var z,y
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
eM:{"^":"a;cG:a>,b,c",$isbY:1},
kp:{"^":"r:11;a",
$2:function(a,b){this.a[a]=b}},
fG:{"^":"c0;a,b",
gbo:function(){var z,y,x
z=this.b
y=H.aD(z,"q",0)
x=W.X
return new H.h4(new H.iP(z,H.j(new P.fH(),{func:1,ret:P.ad,args:[y]}),[y]),H.j(new P.fI(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b4(this.gbo().a)},
j:function(a,b){var z=this.gbo()
return z.b.$1(J.d5(z.a,b))},
gP:function(a){var z=P.dD(this.gbo(),!1,W.X)
return new J.ap(z,z.length,0,[H.x(z,0)])},
$asq:function(){return[W.X]},
$ash:function(){return[W.X]},
$asc:function(){return[W.X]}},
fH:{"^":"r:24;",
$1:function(a){return!!J.I(H.l(a,"$isJ")).$isX}},
fI:{"^":"r:25;",
$1:function(a){return H.f(H.l(a,"$isJ"),"$isX")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jC:{"^":"a;$ti",
gaJ:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.A(z+this.c,H.x(this,0))},
gbC:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.A(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bA(b,"$isa5",[P.T],"$asa5")
if(!z)return!1
z=this.a
y=J.ca(b)
x=y.gav(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaM(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.x(this,0)
if(H.A(z+this.c,w)===y.gaJ(b)){if(typeof x!=="number")return x.B()
z=H.A(x+this.d,w)===y.gbC(b)}else z=!1}else z=!1}else z=!1
return z},
gM:function(a){var z,y,x,w,v
z=this.a
y=J.aN(z)
x=this.b
w=J.aN(x)
if(typeof z!=="number")return z.B()
v=H.x(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.A(x+this.d,v)
return P.jm(P.c5(P.c5(P.c5(P.c5(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a5:{"^":"jC;av:a>,aM:b>,a8:c>,a6:d>,$ti",n:{
hB:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ag()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.ag()
if(d<0)y=-d*0
else y=d
return new P.a5(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bG:{"^":"n;",$isbG:1,"%":"SVGLength"},li:{"^":"jo;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bG]},
$ish:1,
$ash:function(){return[P.bG]},
$isc:1,
$asc:function(){return[P.bG]},
$asu:function(){return[P.bG]},
"%":"SVGLengthList"},bJ:{"^":"n;",$isbJ:1,"%":"SVGNumber"},lv:{"^":"jz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bJ]},
$ish:1,
$ash:function(){return[P.bJ]},
$isc:1,
$asc:function(){return[P.bJ]},
$asu:function(){return[P.bJ]},
"%":"SVGNumberList"},ly:{"^":"n;0k:length=","%":"SVGPointList"},lG:{"^":"jO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$asu:function(){return[P.m]},
"%":"SVGStringList"},lH:{"^":"X;",
gcD:function(a){return new P.fG(a,new W.iY(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bM:{"^":"n;",$isbM:1,"%":"SVGTransform"},lO:{"^":"jY;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[P.bM]},
$ish:1,
$ash:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asu:function(){return[P.bM]},
"%":"SVGTransformList"},jn:{"^":"n+q;"},jo:{"^":"jn+u;"},jy:{"^":"n+q;"},jz:{"^":"jy+u;"},jN:{"^":"n+q;"},jO:{"^":"jN+u;"},jX:{"^":"n+q;"},jY:{"^":"jX+u;"}}],["","",,P,{"^":"",kW:{"^":"n;0k:length=","%":"AudioBuffer"},kX:{"^":"iX;",
j:function(a,b){return P.aC(a.get(H.O(b)))},
H:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aC(y.value[1]))}},
gaf:function(a){var z=H.b([],[P.m])
this.H(a,new P.ff(z))
return z},
gk:function(a){return a.size},
$asa6:function(){return[P.m,null]},
$isa_:1,
$asa_:function(){return[P.m,null]},
"%":"AudioParamMap"},ff:{"^":"r:4;a",
$2:function(a,b){return C.a.h(this.a,a)}},kY:{"^":"a3;0k:length=","%":"AudioTrackList"},fg:{"^":"a3;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lw:{"^":"fg;0k:length=","%":"OfflineAudioContext"},iX:{"^":"n+a6;"}}],["","",,P,{"^":"",cC:{"^":"n;",
h6:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isbY)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kq(g))
return}if(!!z.$isdt)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.fd("Incorrect number or type of arguments"))},
h5:function(a,b,c,d,e,f,g){return this.h6(a,b,c,d,e,f,g,null,null,null)},
$iscC:1,
"%":"WebGLRenderingContext"},iu:{"^":"n;",$isiu:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lE:{"^":"jL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aC(a.item(b))},
v:function(a,b){return this.j(a,b)},
$asq:function(){return[[P.a_,,,]]},
$ish:1,
$ash:function(){return[[P.a_,,,]]},
$isc:1,
$asc:function(){return[[P.a_,,,]]},
$asu:function(){return[[P.a_,,,]]},
"%":"SQLResultSetRowList"},jK:{"^":"n+q;"},jL:{"^":"jK+u;"}}],["","",,O,{"^":"",aO:{"^":"a;0a,0b,0c,0d,$ti",
ca:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
c3:function(a,b,c){var z=H.aD(this,"aO",0)
H.j(b,{func:1,ret:P.ad,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.B,[P.h,z]]}
H.j(a,z)
H.j(c,z)
this.b=b
this.c=a
this.d=c},
bg:function(a,b){return this.c3(a,null,b)},
em:function(a){var z
H.w(a,"$ish",[H.aD(this,"aO",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
e2:function(a,b){var z
H.w(b,"$ish",[H.aD(this,"aO",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gP:function(a){var z=this.a
return new J.ap(z,z.length,0,[H.x(z,0)])},
v:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aD(this,"aO",0)
H.A(b,z)
z=[z]
if(this.em(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.e2(x,H.b([b],z))}},
$ish:1,
n:{
cl:function(a){var z=new O.aO([a])
z.ca(a)
return z}}},cy:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.af()
this.b=z}return z},
dF:function(a){var z=this.b
if(!(z==null))z.G(a)},
ah:function(){return this.dF(null)},
gL:function(a){var z=this.a
if(z.length>0)return C.a.gbS(z)
else return V.cz()},
da:function(a){var z=this.a
if(a==null)C.a.h(z,V.cz())
else C.a.h(z,a)
this.ah()},
bW:function(){var z=this.a
if(z.length>0){z.pop()
this.ah()}}}}],["","",,E,{"^":"",cf:{"^":"a;"},aF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0S:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sc4:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gw().C(0,this.gd7())
y=this.c
if(y!=null)y.gw().h(0,this.gd7())
x=new D.M("shape",z,this.c,this,[F.dW])
x.b=!0
this.a1(x)}},
saF:function(a){var z,y
if(!J.N(this.r,a)){z=this.r
if(z!=null)z.gw().C(0,this.gd6())
if(a!=null)a.gw().h(0,this.gd6())
this.r=a
y=new D.M("mover",z,a,this,[U.bI])
y.b=!0
this.a1(y)}},
be:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.d
z.sdj(z.a+z.d*b.y)
z.sd8(0,z.b+z.e*b.y)
z.sdd(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.aq(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.m(0,V.aq(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.m(0,V.aq(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.a7(0)}u=z.x}else u=null
if(!J.N(u,this.x)){t=this.x
this.x=u
s=new D.M("matrix",t,u,this,[V.ak])
s.b=!0
this.a1(s)}for(z=this.y.a,z=new J.ap(z,z.length,0,[H.x(z,0)]);z.A();)z.d.be(0,b)},
ax:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gL(z))
else C.a.h(z.a,y.m(0,z.gL(z)))
z.ah()
a.dc(this.f)
z=a.dy
x=(z&&C.a).gbS(z)
if(x!=null&&this.d!=null)x.fZ(a,this)
for(z=this.y.a,z=new J.ap(z,z.length,0,[H.x(z,0)]);z.A();)z.d.ax(a)
a.d9()
a.dx.bW()},
a1:function(a){var z=this.z
if(!(z==null))z.G(a)},
N:function(){return this.a1(null)},
fL:[function(a){H.l(a,"$isD")
this.e=null
this.a1(a)},function(){return this.fL(null)},"hO","$1","$0","gd7",0,2,0],
fK:[function(a){this.a1(H.l(a,"$isD"))},function(){return this.fK(null)},"hN","$1","$0","gd6",0,2,0],
fI:[function(a){this.a1(H.l(a,"$isD"))},function(){return this.fI(null)},"hL","$1","$0","gd5",0,2,0],
hK:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$ish",[E.aF],"$ash")
for(z=b.length,y=this.gd5(),x={func:1,ret:-1,args:[D.D]},w=[x],v=0;v<b.length;b.length===z||(0,H.v)(b),++v){u=b[v]
if(u!=null){if(u.gS()==null){t=new D.aP()
t.d=0
u.sS(t)}t=u.gS()
t.toString
H.j(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.N()},"$2","gfH",8,0,5],
hM:[function(a,b){var z,y,x,w,v
H.w(b,"$ish",[E.aF],"$ash")
for(z=b.length,y=this.gd5(),x=0;x<b.length;b.length===z||(0,H.v)(b),++x){w=b[x]
if(w!=null){if(w.gS()==null){v=new D.aP()
v.d=0
w.sS(v)}w.gS().C(0,y)}}this.N()},"$2","gfJ",8,0,5],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isar:1},hF:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dB:function(a,b){var z,y
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
z.gw().h(0,new E.hH(this))
this.cy=z
z=new O.cy()
z.a=H.b([],y)
z.gw().h(0,new E.hI(this))
this.db=z
z=new O.cy()
z.a=H.b([],y)
z.gw().h(0,new E.hJ(this))
this.dx=z
z=H.b([],[O.cF])
this.dy=z
C.a.h(z,null)
this.fr=new H.aR(0,0,[P.m,A.dV])},
gfU:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gL(z)
y=this.db
y=z.m(0,y.gL(y))
this.z=y
z=y}return z},
dc:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbS(z):a;(z&&C.a).h(z,y)},
d9:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hG:function(a,b){var z=new E.hF(a,b)
z.dB(a,b)
return z}}},hH:{"^":"r:8;a",
$1:function(a){var z
H.l(a,"$isD")
z=this.a
z.z=null
z.ch=null}},hI:{"^":"r:8;a",
$1:function(a){var z
H.l(a,"$isD")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hJ:{"^":"r:8;a",
$1:function(a){var z
H.l(a,"$isD")
z=this.a
z.ch=null
z.cx=null}},ic:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0S:x@,0y,0z,0Q,0ch,0cx,0cy",
dH:[function(a){var z
H.l(a,"$isD")
z=this.x
if(!(z==null))z.G(a)
this.h0()},function(){return this.dH(null)},"dG","$1","$0","gcb",0,2,0],
gft:function(){var z,y,x
z=Date.now()
y=C.f.T(P.cm(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aE(z,!1)
return x/y},
cs:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.m()
if(typeof z!=="number")return H.y(z)
x=C.i.bQ(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.m()
w=C.i.bQ(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.e4(C.l,this.gh_())}},
h0:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.j(new E.ie(this),{func:1,ret:-1,args:[P.T]})
C.t.dY(z)
C.t.ew(z,W.eS(y,P.T))}},"$0","gh_",0,0,2],
fY:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cs()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aE(w,!1)
x.y=P.cm(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.ah()
w=x.db
C.a.sk(w.a,0)
w.ah()
w=x.dx
C.a.sk(w.a,0)
w.ah()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ax(this.e)}}catch(v){z=H.aM(v)
y=H.b1(v)
P.d3("Error: "+H.i(z))
P.d3("Stack: "+H.i(y))
throw H.d(z)}},
n:{
id:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$isci)return E.e3(a,!0,!0,!0,!1)
y=W.cj(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcD(a).h(0,y)
w=E.e3(y,!0,!0,!0,!1)
w.a=a
return w},
e3:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ic()
y=P.fZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.k.bf(a,"webgl",y)
x=H.l(x==null?C.k.bf(a,"experimental-webgl",y):x,"$iscC")
if(x==null)H.o(P.p("Failed to get the rendering context for WebGL."))
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
v.d=P.h_(null,null,null,P.B)
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
v=H.b([],[[P.e_,P.a]])
w.z=v
u=document
t=W.ah
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.S(u,"contextmenu",H.j(w.ge9(),s),!1,t))
v=w.z
r=W.a2
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.S(a,"focus",H.j(w.gec(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.S(a,"blur",H.j(w.ge6(),q),!1,r))
v=w.z
p=W.be
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.S(u,"keyup",H.j(w.gee(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.S(u,"keydown",H.j(w.ged(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.S(a,"mousedown",H.j(w.geh(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.S(a,"mouseup",H.j(w.gej(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.S(a,"mousemove",H.j(w.gei(),s),!1,t))
p=w.z
o=W.bt;(p&&C.a).h(p,W.S(a,H.O(W.fA(a)),H.j(w.gek(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.S(u,"mousemove",H.j(w.gea(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.S(u,"mouseup",H.j(w.geb(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.S(u,"pointerlockchange",H.j(w.gel(),q),!1,r))
r=w.z
q=W.aU
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.S(a,"touchstart",H.j(w.ger(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.S(a,"touchend",H.j(w.gep(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.S(a,"touchmove",H.j(w.geq(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aE(Date.now(),!1)
z.cy=0
z.cs()
return z}}},ie:{"^":"r:27;a",
$1:function(a){var z
H.kK(a)
z=this.a
if(z.ch){z.ch=!1
z.fY()}}}}],["","",,Z,{"^":"",ew:{"^":"a;a,b",n:{
cN:function(a,b,c){var z
H.w(c,"$isc",[P.B],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bw(c)),35044)
a.bindBuffer(b,null)
return new Z.ew(b,z)}}},da:{"^":"cf;a,b,c,d,e",
ac:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aM(y)
x=P.p('Failed to bind buffer attribute "'+J.a1(this.a)+'": '+H.i(z))
throw H.d(x)}},
i:function(a){return"["+J.a1(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},iO:{"^":"a;a",$iskZ:1},db:{"^":"a;a,0b,c,d",
au:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
ac:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].ac(a)},
aO:function(a){var z,y,x
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a1(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(y,", ")+"\nAttrs:   "+C.a.u(u,", ")},
$islI:1},bZ:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aT(this.c)+"'")+"]"}},aV:{"^":"a;a",
gc5:function(a){var z,y
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
fb:function(a){var z,y,x
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
return $.$get$ev()},
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
ac:function(a){return new Z.aV(a)}}}}],["","",,D,{"^":"",fk:{"^":"a;"},aP:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.D]}
H.j(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
C:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[D.D]})
z=this.a
z=z==null?null:C.a.aq(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).C(z,b)||!1}else y=!1
return y},
G:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.D(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.H(y,new D.fE(z))
return!0},
cH:function(){return this.G(null)},
h1:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.G(y)}}},
a7:function(a){return this.h1(a,!0,!1)},
n:{
af:function(){var z=new D.aP()
z.d=0
return z}}},fE:{"^":"r:28;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.D]})
z=this.a.a
z.b
a.$1(z)}},D:{"^":"a;a,0b"},co:{"^":"D;c,d,a,0b,$ti"},cp:{"^":"D;c,d,a,0b,$ti"},M:{"^":"D;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",dc:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)},
n:{"^":"l_<"}},dz:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dz))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},fS:{"^":"D;c,a,0b"},fT:{"^":"a;0a,0b,0c,0d",
fR:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.fS(a,this)
y.b=!0
return z.G(y)},
fN:function(a){this.c=a.b
this.d.C(0,a.a)
return!1}},h1:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aS:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aE(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.m()
v=b.b
u=this.ch
if(typeof v!=="number")return v.m()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gbG()
s=new X.dI(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
bV:function(a,b){this.r=a.a
return!1},
aH:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dr()
if(typeof z!=="number")return z.dk()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.aS(a,b))
return!0},
aG:function(a,b){return!1},
fS:function(a){return!1},
eg:function(a,b,c){return}},bg:{"^":"a;a,b,c",
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
return z+(this.c?"Shift+":"")}},dI:{"^":"dO;x,y,z,Q,ch,c,d,e,a,0b"},hh:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
e0:function(a,b,c){var z,y,x
z=new P.aE(Date.now(),!1)
y=this.a.gbG()
x=new X.dI(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
bV:function(a,b){this.f=a.a
return!1},
aH:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dr()
if(typeof z!=="number")return z.dk()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.G(this.e0(a,b,!0))
return!0},
aG:function(a,b){return!1},
fT:function(a,b){return!1}},dO:{"^":"D;"},ih:{"^":"dO;x,y,z,Q,ch,c,d,e,a,0b"},ii:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aS:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.R],"$asc")
z=new P.aE(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gbG()
w=new X.ih(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
fQ:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.G(this.aS(a,!0))
return!0},
fO:function(a){var z
H.w(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.G(this.aS(a,!0))
return!0},
fP:function(a){H.w(a,"$isc",[V.R],"$asc")
return!1}},iA:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbG:function(){var z=this.a
return V.dT(0,0,(z&&C.k).gcE(z).c,C.k.gcE(z).d)},
cm:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dz(z,new X.bg(y,a.altKey,a.shiftKey))},
ao:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bg(y,a.altKey,a.shiftKey)},
bx:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bg(y,a.altKey,a.shiftKey)},
ab:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.V()
v=z.top
if(typeof x!=="number")return x.V()
return new V.R(y-w,x-v)},
aA:function(a){return new V.bN(a.movementX,a.movementY)},
bs:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v){u=x[v]
t=C.i.a2(u.pageX)
C.i.a2(u.pageY)
s=z.left
C.i.a2(u.pageX)
C.a.h(y,new V.R(t-s,C.i.a2(u.pageY)-z.top))}return y},
a9:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dc(z,new X.bg(y,a.altKey,a.shiftKey))},
bp:function(a){var z,y,x,w,v,u
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
hr:[function(a){this.f=!0},"$1","gec",4,0,7],
hl:[function(a){this.f=!1},"$1","ge6",4,0,7],
ho:[function(a){H.l(a,"$isah")
if(this.f&&this.bp(a))a.preventDefault()},"$1","ge9",4,0,3],
ht:[function(a){var z
H.l(a,"$isbe")
if(!this.f)return
z=this.cm(a)
if(this.b.fR(z))a.preventDefault()},"$1","gee",4,0,15],
hs:[function(a){var z
H.l(a,"$isbe")
if(!this.f)return
z=this.cm(a)
this.b.fN(z)},"$1","ged",4,0,15],
hv:[function(a){var z,y,x,w
H.l(a,"$isah")
z=this.a
z.focus()
this.f=!0
this.ao(a)
if(this.x){y=this.a9(a)
x=this.aA(a)
if(this.d.bV(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a9(a)
w=this.ab(a)
if(this.c.bV(y,w))a.preventDefault()},"$1","geh",4,0,3],
hx:[function(a){var z,y,x
H.l(a,"$isah")
this.ao(a)
z=this.a9(a)
if(this.x){y=this.aA(a)
if(this.d.aH(z,y))a.preventDefault()
return}if(this.r)return
x=this.ab(a)
if(this.c.aH(z,x))a.preventDefault()},"$1","gej",4,0,3],
hq:[function(a){var z,y,x
H.l(a,"$isah")
if(!this.bp(a)){this.ao(a)
z=this.a9(a)
if(this.x){y=this.aA(a)
if(this.d.aH(z,y))a.preventDefault()
return}if(this.r)return
x=this.ab(a)
if(this.c.aH(z,x))a.preventDefault()}},"$1","geb",4,0,3],
hw:[function(a){var z,y,x
H.l(a,"$isah")
this.ao(a)
z=this.a9(a)
if(this.x){y=this.aA(a)
if(this.d.aG(z,y))a.preventDefault()
return}if(this.r)return
x=this.ab(a)
if(this.c.aG(z,x))a.preventDefault()},"$1","gei",4,0,3],
hp:[function(a){var z,y,x
H.l(a,"$isah")
if(!this.bp(a)){this.ao(a)
z=this.a9(a)
if(this.x){y=this.aA(a)
if(this.d.aG(z,y))a.preventDefault()
return}if(this.r)return
x=this.ab(a)
if(this.c.aG(z,x))a.preventDefault()}},"$1","gea",4,0,3],
hy:[function(a){var z,y
H.l(a,"$isbt")
this.ao(a)
z=new V.bN((a&&C.r).gfl(a),C.r.gfm(a)).E(0,180)
if(this.x){if(this.d.fS(z))a.preventDefault()
return}if(this.r)return
y=this.ab(a)
if(this.c.fT(z,y))a.preventDefault()},"$1","gek",4,0,33],
hz:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.a9(this.y)
v=this.ab(this.y)
this.d.eg(w,v,x)}},"$1","gel",4,0,7],
hE:[function(a){var z
H.l(a,"$isaU")
this.a.focus()
this.f=!0
this.bx(a)
z=this.bs(a)
if(this.e.fQ(z))a.preventDefault()},"$1","ger",4,0,9],
hC:[function(a){var z
H.l(a,"$isaU")
this.bx(a)
z=this.bs(a)
if(this.e.fO(z))a.preventDefault()},"$1","gep",4,0,9],
hD:[function(a){var z
H.l(a,"$isaU")
this.bx(a)
z=this.bs(a)
if(this.e.fP(z))a.preventDefault()},"$1","geq",4,0,9]}}],["","",,D,{"^":"",bV:{"^":"a;0a,0b,0c,0d",
ai:[function(a){var z
H.l(a,"$isD")
z=this.d
if(!(z==null))z.G(a)},function(){return this.ai(null)},"he","$1","$0","gdI",0,2,0],
$isQ:1,
$isar:1},Q:{"^":"a;",$isar:1},fU:{"^":"aO;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
ai:function(a){var z=this.Q
if(!(z==null))z.G(a)},
ef:[function(a){var z
H.l(a,"$isD")
z=this.ch
if(!(z==null))z.G(a)},function(){return this.ef(null)},"hu","$1","$0","gcp",0,2,0],
hA:[function(a){var z,y,x
H.w(a,"$ish",[D.Q],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.v)(a),++y){x=a[y]
if(x==null||this.dU(x))return!1}return!0},"$1","gen",4,0,31],
hi:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.Q
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcp(),w={func:1,ret:-1,args:[D.D]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=H.l(b[u],"$isQ")
if(t instanceof D.bV)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.d=0
t.d=s}H.j(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","ge3",8,0,16],
hB:[function(a,b){var z,y,x,w,v,u
z=D.Q
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcp(),w=0;w<b.length;b.length===y||(0,H.v)(b),++w){v=H.l(b[w],"$isQ")
if(v instanceof D.bV)C.a.C(this.e,v)
u=v.d
if(u==null){u=new D.aP()
u.d=0
v.d=u}u.C(0,x)}z=new D.cp(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","geo",8,0,16],
dU:function(a){var z=C.a.aq(this.e,a)
return z},
$ash:function(){return[D.Q]},
$asaO:function(){return[D.Q]}},hr:{"^":"a;",$isQ:1,$isar:1},hY:{"^":"a;",$isQ:1,$isar:1},i9:{"^":"a;",$isQ:1,$isar:1},ia:{"^":"a;",$isQ:1,$isar:1},ib:{"^":"a;",$isQ:1,$isar:1}}],["","",,V,{"^":"",
l1:[function(a,b){if(typeof b!=="number")return b.V()
if(typeof a!=="number")return H.y(a)
return Math.abs(b-a)<=1e-9},"$2","he",8,0,30],
d4:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dq(a-b,z)
return(a<0?a+z:a)+b},
C:function(a,b,c){if(a==null)return C.h.Y("null",c)
return C.h.Y(C.i.di($.k.$2(a,0)?0:a,b),c+b+1)},
b0:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.t],"$asc")
z=H.b([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.v)(a),++w){v=V.C(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.R(z,u,C.h.Y(z[u],x))}return z},
d2:function(a,b){return C.i.h9(Math.pow(b,C.y.bQ(Math.log(H.kn(a))/Math.log(b))))},
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
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}},
bT:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bT))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"}},
dG:{"^":"a;a,b,c,d,e,f,r,x,y",
Z:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dG))return!1
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
d3:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.y(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.y(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.y(u)
t=this.c
if(typeof t!=="number")return t.m()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.y(r)
q=this.d
if(typeof q!=="number")return q.m()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.m()
if(typeof k!=="number")return H.y(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.m()
if(typeof i!=="number")return H.y(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.y(g)
f=this.Q
if(typeof f!=="number")return f.m()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.y(d)
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
return V.aq((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
m:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.m()
if(typeof y!=="number")return H.y(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.m()
if(typeof w!=="number")return H.y(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.m()
if(typeof u!=="number")return H.y(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.m()
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
return V.aq(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
if(typeof t!=="number")return H.y(t)
s=this.e
if(typeof s!=="number")return s.m()
r=this.f
if(typeof r!=="number")return r.m()
q=this.r
if(typeof q!=="number")return q.m()
p=this.x
if(typeof p!=="number")return H.y(p)
o=this.y
if(typeof o!=="number")return o.m()
n=this.z
if(typeof n!=="number")return n.m()
m=this.Q
if(typeof m!=="number")return m.m()
l=this.ch
if(typeof l!=="number")return H.y(l)
return new V.as(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
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
i:function(a){return this.D()},
d2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
D:function(){return this.d2("",3,0)},
t:function(a){return this.d2(a,3,0)},
n:{
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cz:function(){return V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dH:function(a,b,c){var z,y,x,w,v
z=c.E(0,Math.sqrt(c.J(c)))
y=b.aB(z)
x=y.E(0,Math.sqrt(y.J(y)))
w=z.aB(x)
v=new V.H(a.a,a.b,a.c)
return V.aq(x.a,w.a,z.a,x.ay(0).J(v),x.b,w.b,z.b,w.ay(0).J(v),x.c,w.c,z.c,z.ay(0).J(v),0,0,0,1)}}},
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
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}},
as:{"^":"a;a,b,c",
V:function(a,b){return new V.as(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}},
dN:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dN))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"}},
dS:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dS))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+", "+V.C(this.d,3,0)+"]"},
n:{
dT:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dS(a,b,c,d)}}},
bN:{"^":"a;a,b",
fA:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.m()
y=this.b
if(typeof y!=="number")return y.m()
return Math.sqrt(z*z+y*y)},"$0","gk",1,0,17],
E:function(a,b){var z,y
if($.k.$2(b,0))return new V.bN(0,0)
z=this.a
if(typeof z!=="number")return z.E()
y=this.b
if(typeof y!=="number")return y.E()
return new V.bN(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bN))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}},
H:{"^":"a;a,b,c",
fA:[function(a){return Math.sqrt(this.J(this))},"$0","gk",1,0,17],
J:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bT:function(a,b){var z,y,x
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
B:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
ay:function(a){return new V.H(-this.a,-this.b,-this.c)},
E:function(a,b){if($.k.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
d4:function(){if(!$.k.$2(0,this.a))return!1
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
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dg:{"^":"bI;0a,0b",
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
return z}}},bI:{"^":"fk;"},dU:{"^":"bI;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.af()
this.y=z}return z},
am:function(a){var z=this.y
if(!(z==null))z.G(a)},
sdj:function(a){var z,y
a=V.d4(a,0,6.283185307179586)
z=this.a
if(!$.k.$2(z,a)){y=this.a
this.a=a
z=new D.M("yaw",y,a,this,[P.t])
z.b=!0
this.am(z)}},
sd8:function(a,b){var z,y
b=V.d4(b,0,6.283185307179586)
z=this.b
if(!$.k.$2(z,b)){y=this.b
this.b=b
z=new D.M("pitch",y,b,this,[P.t])
z.b=!0
this.am(z)}},
sdd:function(a){var z,y
a=V.d4(a,0,6.283185307179586)
z=this.c
if(!$.k.$2(z,a)){y=this.c
this.c=a
z=new D.M("roll",y,a,this,[P.t])
z.b=!0
this.am(z)}},
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dU))return!1
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
i:function(a){return"Rotater: ["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"], ["+V.C(this.d,3,0)+", "+V.C(this.e,3,0)+", "+V.C(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
aj:[function(a){var z
H.l(a,"$isD")
z=this.x
if(!(z==null))z.G(a)},function(){return this.aj(null)},"hf","$1","$0","ga4",0,2,0],
hm:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aF
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga4(),w={func:1,ret:-1,args:[D.D]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=b[u]
if(t!=null){if(t.gS()==null){s=new D.aP()
s.d=0
t.sS(s)}s=t.gS()
s.toString
H.j(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.aj(z)},"$2","ge7",8,0,5],
hn:[function(a,b){var z,y,x,w,v,u
z=E.aF
H.w(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga4(),w=0;w<b.length;b.length===y||(0,H.v)(b),++w){v=b[w]
if(v!=null){if(v.gS()==null){u=new D.aP()
u.d=0
v.sS(u)}v.gS().C(0,x)}}z=new D.cp(a,b,this,[z])
z.b=!0
this.aj(z)},"$2","ge8",8,0,5],
sdf:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gw().C(0,this.ga4())
y=this.c
this.c=a
if(a!=null)a.gw().h(0,this.ga4())
z=new D.M("technique",y,this.c,this,[O.cF])
z.b=!0
this.aj(z)}},
gw:function(){var z=this.x
if(z==null){z=D.af()
this.x=z}return z},
ax:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dc(this.c)
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
u=C.i.a2(v.a*x)
if(typeof w!=="number")return H.y(w)
t=C.i.a2(v.b*w)
s=C.i.a2(v.c*x)
a.c=s
v=C.i.a2(v.d*w)
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
n=V.aq(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.da(n)
y=$.dM
if(y==null){y=V.dH(new V.as(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.dM=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.m(0,m)}a.db.da(m)
z=this.c
if(z!=null)z.be(0,a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.x(z,0)]);z.A();)z.d.be(0,a)
for(z=this.d.a,z=new J.ap(z,z.length,0,[H.x(z,0)]);z.A();)z.d.ax(a)
this.a.toString
a.cy.bW()
a.db.bW()
this.b.toString
a.d9()},
$islA:1}}],["","",,A,{"^":"",d7:{"^":"a;a,b,c"},fe:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fo:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},h8:{"^":"dV;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0a5,0a0,0aZ,0cI,0b_,0b0,0cJ,0cK,0b1,0b2,0cL,0cM,0b3,0b4,0cN,0cO,0b5,0cP,0cQ,0b6,0cR,0cS,0b7,0b8,0b9,0cT,0cU,0ba,0bb,0cV,0cW,0bc,0cX,0bK,0cY,0bL,0cZ,0bM,0d_,0bN,0d0,0bO,0d1,0bP,a,b,0c,0d,0e,0f,0r,0x,0y",
dA:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.bL("")
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
a2.eQ(z)
a2.eX(z)
a2.eR(z)
a2.f4(z)
a2.f5(z)
a2.eZ(z)
a2.f9(z)
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
s=x.charCodeAt(0)==0?x:x
x=this.z
z=new P.bL("")
z.a="precision mediump float;\n"
z.a="precision mediump float;\n\n"
v=x.r1
if(v){z.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
u="precision mediump float;\n\nvarying vec3 normalVec;\n"}else u="precision mediump float;\n\n"
if(x.r2){u+="varying vec3 binormalVec;\n"
z.a=u}if(x.rx){u+="varying vec2 txt2D;\n"
z.a=u}if(x.ry){u+="varying vec3 txtCube;\n"
z.a=u}if(x.k3){u+="varying vec3 objPos;\n"
z.a=u}if(x.k4){u+="varying vec3 viewPos;\n"
z.a=u}u+="\n"
z.a=u
t=x.y2
if(t){u+="uniform mat4 colorMat;\n"
z.a=u}if(x.fr){u+="uniform mat4 invViewMat;\n"
z.a=u}z.a=u+"\n"
x.eU(z)
x.eP(z)
x.eS(z)
x.eV(z)
x.f2(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.f0(z)
x.f1(z)}x.eY(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
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
q=x.k2
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
if(x.b!==C.b)C.a.h(p,"ambient()")
if(x.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.u(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.eT(z)
x.f_(z)
x.f3(z)
x.f6(z)
x.f7(z)
x.f8(z)
x.eW(z)}r=z.a+="// === Main ===\n"
r+="\n"
z.a=r
r+="void main()\n"
z.a=r
r+="{\n"
z.a=r
r+="   float alpha = alphaValue();\n"
z.a=r
if(v){v=r+"   vec3 norm = normal();\n"
z.a=v}else v=r
if(u)z.a=v+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
o=H.b([],[P.m])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.b)z.a+="   setDiffuseColor();\n"
if(x.d!==C.b)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.b)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.b)C.a.h(o,"emission()")
if(x.r!==C.b)C.a.h(o,"reflect(refl)")
if(x.x!==C.b)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.u(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.cn(s,35633)
this.f=this.cn(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.eW(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.o(P.p("Failed to link shader: "+H.i(m)))}this.eJ()
this.eL()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.f(this.y.l(0,"invViewMat"),"$isat")
if(y)this.dy=H.f(this.y.l(0,"objMat"),"$isat")
if(w)this.fr=H.f(this.y.l(0,"viewObjMat"),"$isat")
this.fy=H.f(this.y.l(0,"projViewObjMat"),"$isat")
if(a2.x2)this.k1=H.f(this.y.l(0,"txt2DMat"),"$iscK")
if(a2.y1)this.k2=H.f(this.y.l(0,"txtCubeMat"),"$isat")
if(a2.y2)this.k3=H.f(this.y.l(0,"colorMat"),"$isat")
this.r1=H.b([],[A.at])
y=a2.a5
if(y>0){this.k4=H.l(this.y.l(0,"bendMatCount"),"$isF")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.o(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(k,"$isat"))}}y=a2.a
if(y!==C.b){this.r2=H.f(this.y.l(0,"emissionClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.rx=H.f(this.y.l(0,"emissionTxt"),"$isaa")
this.x1=H.f(this.y.l(0,"nullEmissionTxt"),"$isF")
break
case C.d:this.ry=H.f(this.y.l(0,"emissionTxt"),"$isab")
this.x1=H.f(this.y.l(0,"nullEmissionTxt"),"$isF")
break}}y=a2.b
if(y!==C.b){this.x2=H.f(this.y.l(0,"ambientClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.y1=H.f(this.y.l(0,"ambientTxt"),"$isaa")
this.a5=H.f(this.y.l(0,"nullAmbientTxt"),"$isF")
break
case C.d:this.y2=H.f(this.y.l(0,"ambientTxt"),"$isab")
this.a5=H.f(this.y.l(0,"nullAmbientTxt"),"$isF")
break}}y=a2.c
if(y!==C.b){this.a0=H.f(this.y.l(0,"diffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.aZ=H.f(this.y.l(0,"diffuseTxt"),"$isaa")
this.b_=H.f(this.y.l(0,"nullDiffuseTxt"),"$isF")
break
case C.d:this.cI=H.f(this.y.l(0,"diffuseTxt"),"$isab")
this.b_=H.f(this.y.l(0,"nullDiffuseTxt"),"$isF")
break}}y=a2.d
if(y!==C.b){this.b0=H.f(this.y.l(0,"invDiffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cJ=H.f(this.y.l(0,"invDiffuseTxt"),"$isaa")
this.b1=H.f(this.y.l(0,"nullInvDiffuseTxt"),"$isF")
break
case C.d:this.cK=H.f(this.y.l(0,"invDiffuseTxt"),"$isab")
this.b1=H.f(this.y.l(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a2.e
if(y!==C.b){this.b4=H.f(this.y.l(0,"shininess"),"$isP")
this.b2=H.f(this.y.l(0,"specularClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cL=H.f(this.y.l(0,"specularTxt"),"$isaa")
this.b3=H.f(this.y.l(0,"nullSpecularTxt"),"$isF")
break
case C.d:this.cM=H.f(this.y.l(0,"specularTxt"),"$isab")
this.b3=H.f(this.y.l(0,"nullSpecularTxt"),"$isF")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.c:this.cN=H.f(this.y.l(0,"bumpTxt"),"$isaa")
this.b5=H.f(this.y.l(0,"nullBumpTxt"),"$isF")
break
case C.d:this.cO=H.f(this.y.l(0,"bumpTxt"),"$isab")
this.b5=H.f(this.y.l(0,"nullBumpTxt"),"$isF")
break}if(a2.dy){this.cP=H.f(this.y.l(0,"envSampler"),"$isab")
this.cQ=H.f(this.y.l(0,"nullEnvTxt"),"$isF")
y=a2.r
if(y!==C.b){this.b6=H.f(this.y.l(0,"reflectClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cR=H.f(this.y.l(0,"reflectTxt"),"$isaa")
this.b7=H.f(this.y.l(0,"nullReflectTxt"),"$isF")
break
case C.d:this.cS=H.f(this.y.l(0,"reflectTxt"),"$isab")
this.b7=H.f(this.y.l(0,"nullReflectTxt"),"$isF")
break}}y=a2.x
if(y!==C.b){this.b8=H.f(this.y.l(0,"refraction"),"$isP")
this.b9=H.f(this.y.l(0,"refractClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.cT=H.f(this.y.l(0,"refractTxt"),"$isaa")
this.ba=H.f(this.y.l(0,"nullRefractTxt"),"$isF")
break
case C.d:this.cU=H.f(this.y.l(0,"refractTxt"),"$isab")
this.ba=H.f(this.y.l(0,"nullRefractTxt"),"$isF")
break}}}y=a2.y
if(y!==C.b){this.bb=H.f(this.y.l(0,"alpha"),"$isP")
switch(y){case C.b:break
case C.e:break
case C.c:this.cV=H.f(this.y.l(0,"alphaTxt"),"$isaa")
this.bc=H.f(this.y.l(0,"nullAlphaTxt"),"$isF")
break
case C.d:this.cW=H.f(this.y.l(0,"alphaTxt"),"$isab")
this.bc=H.f(this.y.l(0,"nullAlphaTxt"),"$isF")
break}}this.bK=H.b([],[A.el])
this.bL=H.b([],[A.em])
this.bM=H.b([],[A.en])
this.bN=H.b([],[A.eo])
this.bO=H.b([],[A.ep])
this.bP=H.b([],[A.eq])
if(a2.k2){y=a2.z
if(y>0){this.cX=H.l(this.y.l(0,"dirLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.bK;(x&&C.a).h(x,new A.el(l,k,j))}}y=a2.Q
if(y>0){this.cY=H.l(this.y.l(0,"pntLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isP")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isP")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isP")
x=this.bL;(x&&C.a).h(x,new A.em(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.cZ=H.l(this.y.l(0,"spotLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isE")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isP")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isP")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isP")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isP")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isP")
x=this.bM;(x&&C.a).h(x,new A.en(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.d_=H.l(this.y.l(0,"txtDirLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isE")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isE")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isF")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isaa")
x=this.bN;(x&&C.a).h(x,new A.eo(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.d0=H.l(this.y.l(0,"txtPntLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$iscK")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isE")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isF")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isP")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isP")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isP")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isab")
x=this.bO;(x&&C.a).h(x,new A.ep(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.d1=H.l(this.y.l(0,"txtSpotLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isE")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isE")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isF")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isE")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isP")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isP")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isP")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isP")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isP")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.o(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a1,"$isaa")
x=this.bP;(x&&C.a).h(x,new A.eq(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a_:function(a,b,c){if(c==null||!c.gU(c))b.a.uniform1i(b.d,1)
else{a.ds(c)
b.a.uniform1i(b.d,0)}},
W:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
h7:function(a,b){var z,y
z=a.a0
y=new A.h8(b,z)
y.dD(b,z)
y.dA(a,b)
return y}}},hb:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,a5,a0,aZ",
eQ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.a5+"];\n"
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
eX:function(a){var z
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
eR:function(a){var z
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
f4:function(a){var z,y
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
f5:function(a){var z,y
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
eZ:function(a){var z
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
f9:function(a){var z
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
aa:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.c6(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
eU:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aa(a,z,"emission")
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
eP:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aa(a,z,"ambient")
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
eS:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aa(a,z,"diffuse")
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
eV:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aa(a,z,"invDiffuse")
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
f2:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aa(a,z,"specular")
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
eY:function(a){var z,y
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
f0:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aa(a,z,"reflect")
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
f1:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aa(a,z,"refract")
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
eT:function(a){var z,y
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
f_:function(a){var z,y
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
f3:function(a){var z,y
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
f6:function(a){var z,y,x
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
f7:function(a){var z,y,x
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
f8:function(a){var z,y,x
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
eW:function(a){var z
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
i:function(a){return this.a0}},el:{"^":"a;a,b,c"},eo:{"^":"a;a,b,c,d,e,f,r,x"},em:{"^":"a;a,b,c,d,e,f,r"},ep:{"^":"a;a,b,c,d,e,f,r,x,y,z"},en:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eq:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dV:{"^":"cf;",
dD:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cn:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eW(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.p("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
eJ:function(){var z,y,x,w,v,u
z=H.b([],[A.d7])
y=this.a
x=H.V(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.d7(y,v.name,u))}this.x=new A.fe(z)},
eL:function(){var z,y,x,w,v,u
z=H.b([],[A.a0])
y=this.a
x=H.V(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.fk(v.type,v.size,v.name,u))}this.y=new A.it(z)},
al:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.F(z,y,b,c)
else return A.cJ(z,y,b,a,c)},
dV:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aa(z,y,b,c)
else return A.cJ(z,y,b,a,c)},
dW:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ab(z,y,b,c)
else return A.cJ(z,y,b,a,c)},
aX:function(a,b){return new P.ey(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fk:function(a,b,c,d){switch(a){case 5120:return this.al(b,c,d)
case 5121:return this.al(b,c,d)
case 5122:return this.al(b,c,d)
case 5123:return this.al(b,c,d)
case 5124:return this.al(b,c,d)
case 5125:return this.al(b,c,d)
case 5126:return new A.P(this.a,this.r,c,d)
case 35664:return new A.io(this.a,this.r,c,d)
case 35665:return new A.E(this.a,this.r,c,d)
case 35666:return new A.ir(this.a,this.r,c,d)
case 35667:return new A.ip(this.a,this.r,c,d)
case 35668:return new A.iq(this.a,this.r,c,d)
case 35669:return new A.is(this.a,this.r,c,d)
case 35674:return new A.iv(this.a,this.r,c,d)
case 35675:return new A.cK(this.a,this.r,c,d)
case 35676:return new A.at(this.a,this.r,c,d)
case 35678:return this.dV(b,c,d)
case 35680:return this.dW(b,c,d)
case 35670:throw H.d(this.aX("BOOL",c))
case 35671:throw H.d(this.aX("BOOL_VEC2",c))
case 35672:throw H.d(this.aX("BOOL_VEC3",c))
case 35673:throw H.d(this.aX("BOOL_VEC4",c))
default:throw H.d(P.p("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},bU:{"^":"a;a,b",
i:function(a){return this.b}},a0:{"^":"a;"},it:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
l:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.D()},
fs:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.v)(z),++w)x+=z[w].i(0)+a
return x},
D:function(){return this.fs("\n")}},F:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},ip:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},iq:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},is:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},im:{"^":"a0;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.i(this.c)},
n:{
cJ:function(a,b,c,d,e){var z=new A.im(a,b,c,e)
z.f=d
z.e=P.h0(d,0,!1,P.B)
return z}}},P:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},io:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},E:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},ir:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},iv:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},cK:{"^":"a0;a,b,c,d",
a3:function(a){var z=new Float32Array(H.bw(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},at:{"^":"a0;a,b,c,d",
a3:function(a){var z=new Float32Array(H.bw(H.w(a,"$isc",[P.t],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},aa:{"^":"a0;a,b,c,d",
ds:function(a){var z,y,x
z=a==null||!a.gU(a)
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ab:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
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
if(j!=null)a.bU(j)},
kQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,{func:1,ret:-1,args:[F.au,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.dX()
y=H.b([],[F.au])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cM(null,null,new V.bT(u,0,0,1),null,null,new V.R(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bI(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cM(null,null,new V.bT(o,n,m,1),null,null,new V.R(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bI(d))}}z.d.fa(a+1,b+1,y)
return z},
kb:{"^":"r:32;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bT(z.b,b).bT(z.d.bT(z.c,b),c)
z=new V.as(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.N()}a.sh7(y.E(0,Math.sqrt(y.J(y))))
z=1-b
x=1-c
x=new V.dN(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.N()}}},
ag:{"^":"a;0a,0b,0c,0d,0e",
ae:function(){if(!this.gaC()){C.a.C(this.a.a.d.b,this)
this.a.a.N()}this.bu()
this.bv()
this.ev()},
eG:function(a){this.a=a
C.a.h(a.d.b,this)},
eH:function(a){this.b=a
C.a.h(a.d.c,this)},
eI:function(a){this.c=a
C.a.h(a.d.d,this)},
bu:function(){var z=this.a
if(z!=null){C.a.C(z.d.b,this)
this.a=null}},
bv:function(){var z=this.b
if(z!=null){C.a.C(z.d.c,this)
this.b=null}},
ev:function(){var z=this.c
if(z!=null){C.a.C(z.d.d,this)
this.c=null}},
gaC:function(){return this.a==null||this.b==null||this.c==null},
dP:function(){var z,y,x,w,v
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
if(v.d4())return
return v.E(0,Math.sqrt(v.J(v)))},
dS:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.V(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.E(0,Math.sqrt(z.J(z)))
z=w.V(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.aB(z.E(0,Math.sqrt(z.J(z))))
return z.E(0,Math.sqrt(z.J(z)))},
bF:function(){if(this.d!=null)return!0
var z=this.dP()
if(z==null){z=this.dS()
if(z==null)return!1}this.d=z
this.a.a.N()
return!0},
dO:function(){var z,y,x,w,v
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
if(v.d4())return
return v.E(0,Math.sqrt(v.J(v)))},
dR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
m=z.E(0,Math.sqrt(z.J(z)))
if(o.a-p.a<0)m=m.ay(0)}else{l=(z-q.b)/n
z=r.V(0,u)
z=new V.as(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).V(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.J(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.ay(0)}z=this.d
if(z!=null){k=z.E(0,Math.sqrt(z.J(z)))
z=k.aB(m)
z=z.E(0,Math.sqrt(z.J(z))).aB(k)
m=z.E(0,Math.sqrt(z.J(z)))}return m},
bD:function(){if(this.e!=null)return!0
var z=this.dO()
if(z==null){z=this.dR()
if(z==null)return!1}this.e=z
this.a.a.N()
return!0},
gff:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
t:function(a){var z,y
if(this.gaC())return a+"disposed"
z=a+C.h.Y(J.a1(this.a.e),0)+", "+C.h.Y(J.a1(this.b.e),0)+", "+C.h.Y(J.a1(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
D:function(){return this.t("")},
n:{
bE:function(a,b,c){var z,y,x
z=new F.ag()
y=a.a
if(y==null)H.o(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.o(P.p("May not create a face with vertices attached to different shapes."))
z.eG(a)
z.eH(b)
z.eI(c)
C.a.h(z.a.a.d.b,z)
z.a.a.N()
return z}}},
fF:{"^":"a;"},
hX:{"^":"fF;",
aE:function(a,b,c){var z,y
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
ae:function(){if(!this.gaC()){C.a.C(this.a.a.c.b,this)
this.a.a.N()}this.bu()
this.bv()},
bu:function(){var z=this.a
if(z!=null){C.a.C(z.c.b,this)
this.a=null}},
bv:function(){var z=this.b
if(z!=null){C.a.C(z.c.c,this)
this.b=null}},
gaC:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
t:function(a){if(this.gaC())return a+"disposed"
return a+C.h.Y(J.a1(this.a.e),0)+", "+C.h.Y(J.a1(this.b.e),0)},
D:function(){return this.t("")}},
fV:{"^":"a;"},
il:{"^":"fV;",
aE:function(a,b,c){var z,y
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
ae:function(){var z=this.a
if(z!=null){C.a.C(z.a.b.b,this)
this.a.a.N()}this.eu()},
eu:function(){var z=this.a
if(z!=null){C.a.C(z.b.b,this)
this.a=null}},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
t:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.Y(J.a1(z.e),0)},
D:function(){return this.t("")}},
dW:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.af()
this.e=z}return z},
bU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.q()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){v=z[w]
this.a.h(0,v.fj())}this.a.q()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){u=z[w]
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
if(r.a==null)H.o(P.p("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.G(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){q=z[w]
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
if(s==null)H.o(P.p("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.o(P.p("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.G(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){m=z[w]
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
if(!(z==null))z.a7(0)},
ap:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ap()||!1
if(!this.a.ap())y=!1
z=this.e
if(!(z==null))z.a7(0)
return y},
fF:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.b(z.slice(0),[H.x(z,0)])
for(z=[F.au];y.length!==0;){x=C.a.gfq(y)
C.a.fW(y,0)
if(x!=null){w=H.b([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.v)(y),++u){t=y[u]
if(t!=null&&a.aE(0,x,t)){C.a.h(w,t)
C.a.C(y,t)}}if(w.length>1)b.bU(w)}}this.a.q()
this.c.bX()
this.d.bX()
this.b.fX()
this.c.bY(new F.il())
this.d.bY(new F.hX())
z=this.e
if(!(z==null))z.a7(0)},
fd:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
v=b.gc5(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.da])
for(r=0,q=0;q<w;++q){p=b.fb(q)
o=p.gc5(p)
C.a.R(s,q,new Z.da(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].fB(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.R(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bw(t)),35044)
y.bindBuffer(34962,null)
i=new Z.db(new Z.ew(34962,j),s,b)
i.b=H.b([],[Z.bZ])
if(this.b.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)}f=Z.cN(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bZ(0,h.length,f))}if(this.c.b.length!==0){x=P.B
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.q()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.q()
C.a.h(h,g.e)}f=Z.cN(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bZ(1,h.length,f))}if(this.d.b.length!==0){x=P.B
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
C.a.h(i.b,new Z.bZ(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.t("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.t("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.t("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.t("   "))}return C.a.u(z,"\n")},
a1:function(a){var z=this.e
if(!(z==null))z.G(a)},
N:function(){return this.a1(null)},
n:{
dX:function(){var z,y
z=new F.dW()
y=new F.iD(z)
y.b=!1
y.c=H.b([],[F.au])
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
fa:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.au],"$asc")
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
bY:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aE(0,v,t)){v.ae()
break}}}}},
bX:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.gff(x)
if(y)x.ae()}},
ap:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.v)(z),++w)if(!z[w].bF())x=!1
return x},
bE:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.v)(z),++w)if(!z[w].bD())x=!1
return x},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
D:function(){return this.t("")}},
hR:{"^":"a;a,0b",
gk:function(a){return this.b.length},
bY:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aE(0,v,t)){v.ae()
break}}}}},
bX:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.ae()}},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].t(a+(""+x+". ")))}return C.a.u(z,"\n")},
D:function(){return this.t("")}},
hS:{"^":"a;a,0b",
gk:function(a){return this.b.length},
fX:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.ae()}},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
D:function(){return this.t("")}},
au:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bI:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cM(this.cx,x,u,z,y,w,v,a,t)},
fj:function(){return this.bI(null)},
sh7:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.N()}},
fB:function(a){var z,y
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
bF:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.H(0,0,0)
this.d.H(0,new F.iN(z))
z=z.a
this.r=z.E(0,Math.sqrt(z.J(z)))
z=this.a
if(z!=null){z.N()
z=this.a.e
if(!(z==null))z.a7(0)}return!0},
bD:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.H(0,0,0)
this.d.H(0,new F.iM(z))
z=z.a
this.x=z.E(0,Math.sqrt(z.J(z)))
z=this.a
if(z!=null){z.N()
z=this.a.e
if(!(z==null))z.a7(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
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
C.a.h(z,V.C(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.u(z,", ")
return a+"{"+x+"}"},
D:function(){return this.t("")},
n:{
cM:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.au()
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
h=$.$get$et()
z.e=0
y=$.$get$ay()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ax().a)!==0?e:null
z.x=(x&$.$get$aw().a)!==0?b:null
z.y=(x&$.$get$az().a)!==0?f:null
z.z=(x&$.$get$aA().a)!==0?g:null
z.Q=(x&$.$get$eu().a)!==0?c:null
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
throw H.d(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.N()
return!0},
gk:function(a){return this.c.length},
ap:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)z[x].bF()
return!0},
bE:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)z[x].bD()
return!0},
fe:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.E(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.G(null)}}}}return!0},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
this.q()
z=H.b([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
D:function(){return this.t("")}},
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
H:function(a,b){H.j(b,{func:1,ret:-1,args:[F.ag]})
C.a.H(this.b,b)
C.a.H(this.c,new F.iF(this,b))
C.a.H(this.d,new F.iG(this,b))},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
D:function(){return this.t("")}},
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
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
D:function(){return this.t("")}},
iJ:{"^":"a;"},
iI:{"^":"iJ;",
aE:function(a,b,c){return J.N(b.f,c.f)}},
iK:{"^":"a;"},
hm:{"^":"iK;",
bU:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.au],"$asc")
z=new V.H(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.H(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.E(0,Math.sqrt(z.J(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.v)(a),++x){t=a[x]
s=z.E(0,Math.sqrt(u))
if(!J.N(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.G(null)}}}return}},
iL:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.D()},
t:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
D:function(){return this.t("")}}}],["","",,O,{"^":"",h6:{"^":"cF;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.af()
this.dy=z}return z},
O:[function(a){var z
H.l(a,"$isD")
z=this.dy
if(!(z==null))z.G(a)},function(){return this.O(null)},"dJ","$1","$0","gaQ",0,2,0],
ey:[function(a){H.l(a,"$isD")
this.a=null
this.O(a)},function(){return this.ey(null)},"hF","$1","$0","gex",0,2,0],
hj:[function(a,b){var z=V.ak
z=new D.co(a,H.w(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.O(z)},"$2","ge4",8,0,18],
hk:[function(a,b){var z=V.ak
z=new D.cp(a,H.w(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.O(z)},"$2","ge5",8,0,18],
ck:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
if(b!=null)if(!C.a.aq(a,b)){b.a=a.length
C.a.h(a,b)}},
be:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ap(z,z.length,0,[H.x(z,0)]);z.A();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.c_(x)}}},
fZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.ck()
y=a.fr.j(0,z.a0)
if(y==null){y=A.h7(z,a.a)
x=y.b
if(x.length===0)H.o(P.p("May not cache a shader with no name."))
if(a.fr.cF(0,x))H.o(P.p('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.R(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.aZ
z=b.e
if(!(z instanceof Z.db)){b.e=null
z=null}if(z==null||!z.d.p(0,v)){z=w.r1
if(z)b.d.ap()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.bE()
t.a.bE()
t=t.e
if(!(t==null))t.a7(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.fe()
s=s.e
if(!(s==null))s.a7(0)}q=b.d.fd(new Z.iO(a.a),v)
q.au($.$get$ay()).e=this.a.Q.c
if(z)q.au($.$get$ax()).e=this.a.cx.c
if(u)q.au($.$get$aw()).e=this.a.ch.c
if(w.rx)q.au($.$get$az()).e=this.a.cy.c
if(t)q.au($.$get$aA()).e=this.a.db.c
if(w.x1)q.au($.$get$av()).e=this.a.dx.c
b.e=q}z=T.cG
p=H.b([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.fo()
if(w.fx){u=this.a
t=a.dx
t=t.gL(t)
u=u.dy
u.toString
u.a3(t.Z(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gL(t)
s=a.dx
s=t.m(0,s.gL(s))
a.cx=s
t=s}u=u.fr
u.toString
u.a3(t.Z(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gfU()
s=a.dx
s=t.m(0,s.gL(s))
a.ch=s
t=s}u=u.fy
u.toString
u.a3(t.Z(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.a3(t.Z(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.a3(t.Z(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.a3(C.z.Z(t,!0))}if(w.a5>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.t],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.e(s,n)
s=s[n]
t.toString
H.l(s,"$isak")
t=t.r1
if(n>=t.length)return H.e(t,n)
t=t[n]
m=new Float32Array(H.bw(H.w(s.Z(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.e:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.f.d)
u=this.a
t=this.f.d
u.a_(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.f.e)
u=this.a
t=this.f.e
u.W(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.e:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.r.d)
u=this.a
t=this.r.d
u.a_(u.y1,u.a5,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.r.e)
u=this.a
t=this.r.e
u.W(u.y2,u.a5,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.e:u=this.a
t=this.x.f
u=u.a0
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.x.d)
u=this.a
t=this.x.d
u.a_(u.aZ,u.b_,t)
t=this.a
u=this.x.f
t=t.a0
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.x.e)
u=this.a
t=this.x.e
u.W(u.cI,u.b_,t)
t=this.a
u=this.x.f
t=t.a0
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.e:u=this.a
t=this.y.f
u=u.b0
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.K(p,this.y.d)
u=this.a
t=this.y.d
u.a_(u.cJ,u.b1,t)
t=this.a
u=this.y.f
t=t.b0
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.K(p,this.y.e)
u=this.a
t=this.y.e
u.W(u.cK,u.b1,t)
t=this.a
u=this.y.f
t=t.b0
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
t=this.z.f
u=u.b2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.b4
t.a.uniform1f(t.d,r)
break
case C.c:this.K(p,this.z.d)
u=this.a
t=this.z.d
u.a_(u.cL,u.b3,t)
t=this.a
u=this.z.f
t=t.b2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b4
u.a.uniform1f(u.d,r)
break
case C.d:this.K(p,this.z.e)
u=this.a
t=this.z.e
u.W(u.cM,u.b3,t)
t=this.a
u=this.z.f
t=t.b2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b4
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.cX
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.v)(u),++j){i=u[j]
s=this.a.bK
if(k>=s.length)return H.e(s,k)
h=s[k]
s=l.c_(i.a)
r=s.a
g=s.b
f=s.c
f=s.E(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.cY
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.v)(u),++j){i=u[j]
s=this.a.bL
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaI(i)
r=h.b
g=s.gc0(s)
f=s.gc1(s)
s=s.gc2(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aN(i.gaI(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gad(i)
f=h.d
g=s.gbd()
r=s.gaP()
s=s.gaY()
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
u=this.a.cZ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.v)(u),++j){i=u[j]
s=this.a.bM
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaI(i)
r=h.b
g=s.gc0(s)
f=s.gc1(s)
s=s.gc2(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbJ(i).hJ()
f=h.c
g=s.gar(s)
r=s.gas(s)
s=s.gat()
f.a.uniform3f(f.d,g,r,s)
s=l.aN(i.gaI(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gad(i)
r=h.e
g=s.gbd()
f=s.gaP()
s=s.gaY()
r.a.uniform3f(r.d,g,f,s)
s=i.ghH()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghG()
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
u=this.a.d_
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.v)(u),++j){i=u[j]
r=this.a.bN
if(k>=r.length)return H.e(r,k)
h=r[k]
r=i.gaK()
H.w(p,"$isc",s,"$asc")
if(!C.a.aq(p,r)){r.saU(p.length)
C.a.h(p,r)}r=i.gbJ(i)
g=h.d
f=r.gar(r)
e=r.gas(r)
r=r.gat()
g.a.uniform3f(g.d,f,e,r)
r=i.ghd()
e=h.b
f=r.gar(r)
g=r.gas(r)
r=r.gat()
e.a.uniform3f(e.d,f,g,r)
r=i.gaJ(i)
g=h.c
f=r.gar(r)
e=r.gas(r)
r=r.gat()
g.a.uniform3f(g.d,f,e,r)
r=l.c_(i.gbJ(i))
e=r.a
f=r.b
g=r.c
g=r.E(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gad(i)
f=h.f
e=g.gbd()
r=g.gaP()
g=g.gaY()
f.a.uniform3f(f.d,e,r,g)
g=i.gaK()
r=g.gU(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gU(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaU())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.d0
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.y,t=u.length,s=[P.t],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.v)(u),++j){i=u[j]
g=this.a.bO
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gaK()
H.w(p,"$isc",r,"$asc")
if(!C.a.aq(p,g)){g.saU(p.length)
C.a.h(p,g)}d=l.m(0,i.gL(i))
g=i.gL(i).aN(new V.as(0,0,0))
f=h.b
e=g.gc0(g)
c=g.gc1(g)
g=g.gc2(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aN(new V.as(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.d3(0)
c=h.d
m=new Float32Array(H.bw(H.w(new V.dG(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).Z(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gad(i)
g=h.e
e=c.gbd()
f=c.gaP()
c=c.gaY()
g.a.uniform3f(g.d,e,f,c)
c=i.gaK()
g=c.gU(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gU(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.ghI(c))
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
u=this.a.d1
u.a.uniform1i(u.d,o)
u=a.db
l=u.gL(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.v)(u),++j){i=u[j]
s=this.a.bP
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaK()
H.w(p,"$isc",z,"$asc")
if(!C.a.aq(p,s)){s.saU(p.length)
C.a.h(p,s)}s=i.gaI(i)
r=h.b
g=s.gc0(s)
f=s.gc1(s)
s=s.gc2(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbJ(i)
f=h.c
g=s.gar(s)
r=s.gas(s)
s=s.gat()
f.a.uniform3f(f.d,g,r,s)
s=i.ghd()
r=h.d
g=s.gar(s)
f=s.gas(s)
s=s.gat()
r.a.uniform3f(r.d,g,f,s)
s=i.gaJ(i)
f=h.e
g=s.gar(s)
r=s.gas(s)
s=s.gat()
f.a.uniform3f(f.d,g,r,s)
s=l.aN(i.gaI(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaK()
r=s.gU(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gU(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaU())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gad(i)
r=h.y
g=s.gbd()
f=s.gaP()
s=s.gaY()
r.a.uniform3f(r.d,g,f,s)
s=i.ghP()
f=h.z
f.a.uniform1f(f.d,s)
s=i.ghQ()
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
case C.c:this.K(p,this.Q.d)
z=this.a
u=this.Q.d
z.a_(z.cN,z.b5,u)
break
case C.d:this.K(p,this.Q.e)
z=this.a
u=this.Q.e
z.W(z.cO,z.b5,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gL(u).d3(0)
a.Q=u}z=z.id
z.toString
z.a3(u.Z(0,!0))}if(w.dy){this.K(p,this.ch)
z=this.a
u=this.ch
z.W(z.cP,z.cQ,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.b6
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.K(p,this.cx.d)
z=this.a
u=this.cx.d
z.a_(z.cR,z.b7,u)
u=this.a
z=this.cx.f
u=u.b6
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.K(p,this.cx.e)
z=this.a
u=this.cx.e
z.W(z.cS,z.b7,u)
u=this.a
z=this.cx.f
u=u.b6
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
u=this.cy.f
z=z.b9
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.b8
u.a.uniform1f(u.d,s)
break
case C.c:this.K(p,this.cy.d)
z=this.a
u=this.cy.d
z.a_(z.cT,z.ba,u)
u=this.a
z=this.cy.f
u=u.b9
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b8
z.a.uniform1f(z.d,s)
break
case C.d:this.K(p,this.cy.e)
z=this.a
u=this.cy.e
z.W(z.cU,z.ba,u)
u=this.a
z=this.cy.f
u=u.b9
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.b8
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.e:z=this.a
t=this.db.f
z=z.bb
z.a.uniform1f(z.d,t)
break
case C.c:this.K(p,this.db.d)
z=this.a
t=this.db.d
z.a_(z.cV,z.bc,t)
t=this.a
z=this.db.f
t=t.bb
t.a.uniform1f(t.d,z)
break
case C.d:this.K(p,this.db.e)
z=this.a
t=this.db.e
z.W(z.cW,z.bc,t)
t=this.a
z=this.db.f
t=t.bb
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(z.d==null){t=z.c
z.d=t
if(!(t==null))t.ac(a)}}z=b.e
z.ac(a)
z.ax(a)
z.aO(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
u=z.d
if(u!=null){u.aO(a)
z.d=null}}z=this.a
z.toString
a.a.useProgram(null)
z.x.fn()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.ck().a0}},h9:{"^":"cx;0f,a,b,0c,0d,0e",
eB:function(a){var z,y
z=this.f
if(!$.k.$2(z,a)){y=this.f
this.f=a
z=new D.M(this.b,y,a,this,[P.t])
z.b=!0
this.a.O(z)}},
an:function(){this.c8()
this.eB(1)}},cx:{"^":"a;",
O:[function(a){this.a.O(H.l(a,"$isD"))},function(){return this.O(null)},"dJ","$1","$0","gaQ",0,2,0],
an:["c8",function(){}],
eE:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gw().C(0,this.gaQ())
y=this.d
this.d=a
if(a!=null)a.gw().h(0,this.gaQ())
z=new D.M(this.b+".texture2D",y,this.d,this,[T.c2])
z.b=!0
this.a.O(z)}},
eF:function(a){},
sdg:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.an()
this.c=C.c
this.eF(null)
z=this.a
z.a=null
z.O(null)}this.eE(a)}},ha:{"^":"cx;a,b,0c,0d,0e"},aS:{"^":"cx;0f,a,b,0c,0d,0e",
ct:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.M(this.b+".color",z,a,this,[V.Z])
y.b=!0
this.a.O(y)}},
an:["c9",function(){this.c8()
this.ct(new V.Z(1,1,1))}],
sad:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.an()
z=this.a
z.a=null
z.O(null)}this.ct(b)}},hc:{"^":"aS;0ch,0f,a,b,0c,0d,0e",
eC:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.O(z)}},
an:function(){this.c9()
this.eC(1)}},hd:{"^":"aS;0ch,0f,a,b,0c,0d,0e",
eD:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.O(z)}},
an:function(){this.c9()
this.eD(100)}},cF:{"^":"a;"}}],["","",,T,{"^":"",cG:{"^":"cf;"},c2:{"^":"cG;"},i5:{"^":"c2;0a,0b,0c,0d,0e,0f",
gU:function(a){var z=this.d
z=z==null?null:z.gU(z)
if(z==null){z=this.c
z=z==null?null:z.gU(z)}return z==null?!1:z},
gw:function(){var z=this.f
if(z==null){z=D.af()
this.f=z}return z},
ac:function(a){var z
if(this.d==null){z=this.c
this.d=z
if(!(z==null))z.ac(a)}},
aO:function(a){var z=this.d
if(z!=null){z.aO(a)
this.d=null}}},i6:{"^":"c2;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gU:function(a){return this.d},
ac:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
aO:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,null)}}},i7:{"^":"a;a,0b,0c,0d,0e",
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
W.S(x,"load",H.j(new T.i8(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
aw:function(a){return this.fD(a,!1,!1,!1,!1)},
ez:function(a,b,c){var z,y,x,w
b=V.d2(b,2)
z=V.d2(a.width,2)
y=V.d2(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cj(null,null)
x.width=z
x.height=y
w=H.l(C.k.dm(x,"2d"),"$isde")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kr(w.getImageData(0,0,x.width,x.height))}}},i8:{"^":"r:19;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.ez(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.K.h5(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.cH()}++x.e}}}],["","",,V,{"^":"",fc:{"^":"a;",
aD:function(a,b){return!0},
i:function(a){return"all"},
$isbH:1},bH:{"^":"a;"},dF:{"^":"a;",
aD:["dw",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)if(z[x].aD(0,b))return!0
return!1}],
i:["c7",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.v)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbH:1},bh:{"^":"dF;0a",
aD:function(a,b){return!this.dw(0,b)},
i:function(a){return"!["+this.c7(0)+"]"}},hO:{"^":"a;0a",
dC:function(a){var z,y
if(a.a.length<=0)throw H.d(P.p("May not create a SetMatcher with zero characters."))
z=new H.aR(0,0,[P.B,P.ad])
for(y=new H.dC(a,a.gk(a),0,[H.aD(a,"q",0)]);y.A();)z.R(0,y.d,!0)
this.a=z},
aD:function(a,b){return this.a.cF(0,b)},
i:function(a){var z=this.a
return P.cE(new H.dB(z,[H.x(z,0)]),0,null)},
$isbH:1,
n:{
Y:function(a){var z=new V.hO()
z.dC(a)
return z}}},dZ:{"^":"a;a,b,0c,0d",
gfG:function(a){return this.b},
u:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.e9(this.a.F(0,b))
w.a=H.b([],[V.bH])
w.c=!1
C.a.h(this.c,w)
return w},
fp:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
if(w.aD(0,a))return w}return},
i:function(a){return this.b}},e7:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.f6(this.b,"\n","\\n")
y=H.f6(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},e8:{"^":"a;a,b,0c",
i:function(a){return this.b}},ig:{"^":"a;0a,0b,0c",
F:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dZ(this,b)
z.c=H.b([],[V.e9])
this.a.R(0,b,z)}return z},
aL:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.e8(this,a)
y=P.m
z.c=new H.aR(0,0,[y,y])
this.b.R(0,a,z)}return z},
hc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.e7])
y=this.c
x=[P.B]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.aR(a,t)
r=y.fp(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cE(w,0,null)
throw H.d(P.p("Untokenizable string [state: "+y.gfG(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cE(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.e7(o==null?p.b:o,q,t)}++t}}}},e9:{"^":"dF;b,0c,0a",
i:function(a){return this.b.b+": "+this.c7(0)}}}],["","",,X,{"^":"",dd:{"^":"a;",$isar:1},fK:{"^":"e1;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.af()
this.x=z}return z}},hp:{"^":"a;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.af()
this.f=z}return z},
az:[function(a){var z
H.l(a,"$isD")
z=this.f
if(!(z==null))z.G(a)},function(){return this.az(null)},"hg","$1","$0","gcc",0,2,0],
saF:function(a){var z,y
if(!J.N(this.b,a)){z=this.b
if(z!=null)z.gw().C(0,this.gcc())
y=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gcc())
z=new D.M("mover",y,this.b,this,[U.bI])
z.b=!0
this.az(z)}},
$isar:1,
$isdd:1},e1:{"^":"a;"}}],["","",,V,{"^":"",
kO:function(a){P.e5(C.w,new V.kP(a))},
kP:{"^":"r:34;a",
$1:function(a){H.l(a,"$isal")
P.d3(C.i.di(this.a.gft(),2)+" fps")}},
hT:{"^":"a;0a,0b",
dE:function(a,b){var z,y,x,w,v,u,t
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
W.S(z,"scroll",H.j(new V.hW(x),{func:1,ret:-1,args:[t]}),!1,t)},
cB:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.m],"$asc")
this.eK()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hc(C.a.fz(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v){u=x[v]
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
if(H.f5(s,"|",0)){r=s.split("|")
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
eK:function(){var z,y,x,w
if(this.b!=null)return
z=new V.ig()
y=P.m
z.a=new H.aR(0,0,[y,V.dZ])
z.b=new H.aR(0,0,[y,V.e8])
z.c=z.F(0,"Start")
y=z.F(0,"Start").u(0,"Bold")
x=V.Y(new H.W("*"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Bold").u(0,"Bold")
x=new V.bh()
w=[V.bH]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Y(new H.W("*"))
C.a.h(x.a,y)
y=z.F(0,"Bold").u(0,"BoldEnd")
x=V.Y(new H.W("*"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Start").u(0,"Italic")
x=V.Y(new H.W("_"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Italic").u(0,"Italic")
x=new V.bh()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Y(new H.W("_"))
C.a.h(x.a,y)
y=z.F(0,"Italic").u(0,"ItalicEnd")
x=V.Y(new H.W("_"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Start").u(0,"Code")
x=V.Y(new H.W("`"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Code").u(0,"Code")
x=new V.bh()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.Y(new H.W("`"))
C.a.h(x.a,y)
y=z.F(0,"Code").u(0,"CodeEnd")
x=V.Y(new H.W("`"))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"Start").u(0,"LinkHead")
x=V.Y(new H.W("["))
C.a.h(y.a,x)
y.c=!0
y=z.F(0,"LinkHead").u(0,"LinkTail")
x=V.Y(new H.W("|"))
C.a.h(y.a,x)
x=z.F(0,"LinkHead").u(0,"LinkEnd")
y=V.Y(new H.W("]"))
C.a.h(x.a,y)
x.c=!0
x=z.F(0,"LinkHead").u(0,"LinkHead")
y=new V.bh()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Y(new H.W("|]"))
C.a.h(y.a,x)
x=z.F(0,"LinkTail").u(0,"LinkEnd")
y=V.Y(new H.W("]"))
C.a.h(x.a,y)
x.c=!0
x=z.F(0,"LinkTail").u(0,"LinkTail")
y=new V.bh()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Y(new H.W("|]"))
C.a.h(y.a,x)
C.a.h(z.F(0,"Start").u(0,"Other").a,new V.fc())
x=z.F(0,"Other").u(0,"Other")
y=new V.bh()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.Y(new H.W("*_`["))
C.a.h(y.a,x)
x=z.F(0,"BoldEnd")
x.d=x.a.aL("Bold")
x=z.F(0,"ItalicEnd")
x.d=x.a.aL("Italic")
x=z.F(0,"CodeEnd")
x.d=x.a.aL("Code")
x=z.F(0,"LinkEnd")
x.d=x.a.aL("Link")
x=z.F(0,"Other")
x.d=x.a.aL("Other")
this.b=z},
n:{
hU:function(a,b){var z=new V.hT()
z.dE(a,!0)
return z}}},
hW:{"^":"r:19;a",
$1:function(a){P.e4(C.l,new V.hV(this.a))}},
hV:{"^":"r:1;a",
$0:function(){var z,y,x
z=C.i.a2(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}}}],["","",,N,{"^":"",
f1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=V.hU("Test 039",!0)
y=W.cj(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.m]
z.cB(H.b(["Test of an animated texture on a square."],x))
z.cB(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.o(P.p("Failed to find an element with the identifier, testCanvas."))
v=E.id(w,!0,!0,!0,!1)
u=new E.aF()
u.a=""
u.b=!0
z=E.aF
x=O.cl(z)
u.y=x
x.bg(u.gfH(),u.gfJ())
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
u.sc4(0,null)
u.saF(null)
t=F.dX()
F.bv(t,null,null,1,1,1,0,0,1)
F.bv(t,null,null,1,1,0,1,0,3)
F.bv(t,null,null,1,1,0,0,1,2)
F.bv(t,null,null,1,1,-1,0,0,0)
F.bv(t,null,null,1,1,0,-1,0,0)
F.bv(t,null,null,1,1,0,0,-1,3)
t.ap()
t.fF(new F.iI(),new F.hm())
u.sc4(0,t)
x=new U.dU()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sdj(0)
x.sd8(0,0)
x.sdd(0)
s=x.d
if(!$.k.$2(s,0.1)){r=x.d
x.d=0.1
s=new D.M("deltaYaw",r,0.1,x,[P.t])
s.b=!0
x.am(s)}s=x.e
if(!$.k.$2(s,0.21)){r=x.e
x.e=0.21
s=new D.M("deltaPitch",r,0.21,x,[P.t])
s.b=!0
x.am(s)}s=x.f
if(!$.k.$2(s,0.32)){r=x.f
x.f=0.32
s=new D.M("deltaRoll",r,0.32,x,[P.t])
s.b=!0
x.am(s)}u.saF(x)
x=T.c2
s=P.dD([v.f.aw("../resources/diceColor/posx.png"),v.f.aw("../resources/diceColor/posz.png"),v.f.aw("../resources/diceColor/negx.png"),v.f.aw("../resources/diceColor/negy.png"),v.f.aw("../resources/diceColor/posy.png"),v.f.aw("../resources/diceColor/negz.png")],!0,x)
q=new T.i5()
q.a=0
q.b=0
q.e=H.w(s,"$isc",[x],"$asc")
P.e5(P.cm(0,0,0,500,0,0),new N.kH(q))
p=new O.h6()
x=O.cl(V.ak)
p.e=x
x.bg(p.ge4(),p.ge5())
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
x.ca(D.Q)
x.e=H.b([],[D.bV])
x.f=H.b([],[D.hr])
x.r=H.b([],[D.hY])
x.x=H.b([],[D.i9])
x.y=H.b([],[D.ia])
x.z=H.b([],[D.ib])
x.Q=null
x.ch=null
x.c3(x.ge3(),x.gen(),x.geo())
p.dx=x
s=x.Q
if(s==null){s=D.af()
x.Q=s
x=s}else x=s
x.h(0,p.gex())
x=p.dx
s=x.ch
if(s==null){s=D.af()
x.ch=s
x=s}else x=s
x.h(0,p.gaQ())
p.dy=null
x=p.dx
s=U.dh(V.dH(new V.as(0,0,0),new V.H(0,1,0),new V.H(1,-1,-3)))
o=new V.Z(1,1,1)
n=new D.bV()
n.c=new V.Z(1,1,1)
n.a=new V.H(0,0,1)
r=n.b
n.b=s
s.gw().h(0,n.gdI())
s=new D.M("mover",r,n.b,n,[U.bI])
s.b=!0
n.ai(s)
if(!n.c.p(0,o)){r=n.c
n.c=o
s=new D.M("color",r,o,n,[V.Z])
s.b=!0
n.ai(s)}x.h(0,n)
x=p.r
x.sad(0,new V.Z(0.2,0.2,0.2))
x=p.x
x.sad(0,new V.Z(0.8,0.8,0.8))
p.r.sdg(q)
p.x.sdg(q)
x=new M.fC()
z=O.cl(z)
x.d=z
z.bg(x.ge7(),x.ge8())
x.e=null
x.f=null
x.r=null
x.x=null
m=new X.hp()
m.c=1.0471975511965976
m.d=0.1
m.e=2000
m.saF(null)
z=m.c
if(!$.k.$2(z,1.0471975511965976)){r=m.c
m.c=1.0471975511965976
z=new D.M("fov",r,1.0471975511965976,m,[P.t])
z.b=!0
m.az(z)}z=m.d
if(!$.k.$2(z,0.1)){r=m.d
m.d=0.1
z=new D.M("near",r,0.1,m,[P.t])
z.b=!0
m.az(z)}z=m.e
if(!$.k.$2(z,2000)){r=m.e
m.e=2000
z=new D.M("far",r,2000,m,[P.t])
z.b=!0
m.az(z)}z=x.a
if(z!==m){if(z!=null)z.gw().C(0,x.ga4())
r=x.a
x.a=m
m.gw().h(0,x.ga4())
z=new D.M("camera",r,x.a,x,[X.dd])
z.b=!0
x.aj(z)}l=new X.fK()
z=new V.bT(0,0,0,1)
l.a=z
l.b=!0
l.c=2000
l.d=!0
l.e=0
l.f=!1
z=V.dT(0,0,1,1)
l.r=z
z=x.b
if(z!==l){if(z!=null)z.gw().C(0,x.ga4())
r=x.b
x.b=l
l.gw().h(0,x.ga4())
z=new D.M("target",r,x.b,x,[X.e1])
z.b=!0
x.aj(z)}x.sdf(null)
x.sdf(p)
x.d.h(0,u)
x.a.saF(U.dh(V.aq(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
z=v.d
if(z!==x){if(z!=null)z.gw().C(0,v.gcb())
v.d=x
x.gw().h(0,v.gcb())
v.dG()}V.kO(v)},
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
if(!(z==null))z.cH()}return}}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dx.prototype
return J.dw.prototype}if(typeof a=="string")return J.cs.prototype
if(a==null)return J.dy.prototype
if(typeof a=="boolean")return J.fO.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.cb(a)}
J.bP=function(a){if(typeof a=="string")return J.cs.prototype
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
J.kv=function(a){if(typeof a=="number")return J.c_.prototype
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
J.f8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kv(a).ag(a,b)}
J.f9=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kE(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bP(a).j(a,b)}
J.fa=function(a,b,c,d){return J.ca(a).cA(a,b,c,d)}
J.ce=function(a,b,c){return J.bP(a).fg(a,b,c)}
J.d5=function(a,b){return J.cY(a).v(a,b)}
J.fb=function(a,b){return J.cY(a).H(a,b)}
J.aN=function(a){return J.I(a).gM(a)}
J.b3=function(a){return J.cY(a).gP(a)}
J.b4=function(a){return J.bP(a).gk(a)}
J.a1=function(a){return J.I(a).i(a)}
I.d0=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.ci.prototype
C.x=J.n.prototype
C.a=J.aQ.prototype
C.y=J.dw.prototype
C.f=J.dx.prototype
C.z=J.dy.prototype
C.i=J.c_.prototype
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
C.b=new A.bU(0,"ColorSourceType.None")
C.e=new A.bU(1,"ColorSourceType.Solid")
C.c=new A.bU(2,"ColorSourceType.Texture2D")
C.d=new A.bU(3,"ColorSourceType.TextureCube")
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
C.H=H.b(I.d0([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.q=new P.iB(!1)
$.aj=0
$.b5=null
$.d8=null
$.cR=!1
$.eZ=null
$.eT=null
$.f4=null
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
$.dM=null
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
I.$lazy(y,x,w)}})(["dl","$get$dl",function(){return H.eY("_$dart_dartClosure")},"ct","$get$ct",function(){return H.eY("_$dart_js")},"ea","$get$ea",function(){return H.am(H.c3({
toString:function(){return"$receiver$"}}))},"eb","$get$eb",function(){return H.am(H.c3({$method$:null,
toString:function(){return"$receiver$"}}))},"ec","$get$ec",function(){return H.am(H.c3(null))},"ed","$get$ed",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eh","$get$eh",function(){return H.am(H.c3(void 0))},"ei","$get$ei",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ef","$get$ef",function(){return H.am(H.eg(null))},"ee","$get$ee",function(){return H.am(function(){try{null.$method$}catch(z){return z.message}}())},"ek","$get$ek",function(){return H.am(H.eg(void 0))},"ej","$get$ej",function(){return H.am(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cO","$get$cO",function(){return P.iS()},"bz","$get$bz",function(){return[]},"eN","$get$eN",function(){return P.hE("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dj","$get$dj",function(){return{}},"ev","$get$ev",function(){return Z.ac(0)},"et","$get$et",function(){return Z.ac(511)},"ay","$get$ay",function(){return Z.ac(1)},"ax","$get$ax",function(){return Z.ac(2)},"aw","$get$aw",function(){return Z.ac(4)},"az","$get$az",function(){return Z.ac(8)},"aA","$get$aA",function(){return Z.ac(16)},"br","$get$br",function(){return Z.ac(32)},"bs","$get$bs",function(){return Z.ac(64)},"eu","$get$eu",function(){return Z.ac(96)},"aW","$get$aW",function(){return Z.ac(128)},"av","$get$av",function(){return Z.ac(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.D]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[P.B,[P.h,E.aF]]},{func:1,ret:P.G,args:[F.ag]},{func:1,ret:-1,args:[W.a2]},{func:1,ret:P.G,args:[D.D]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.m,args:[P.B]},{func:1,args:[,]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[P.B,[P.h,D.Q]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.B,[P.h,V.ak]]},{func:1,ret:P.G,args:[W.a2]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:[P.aB,,],args:[,]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.ad,args:[W.J]},{func:1,ret:W.X,args:[W.J]},{func:1,args:[P.m]},{func:1,ret:P.G,args:[P.T]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,args:[,P.m]},{func:1,ret:P.ad,args:[P.t,P.t]},{func:1,ret:P.ad,args:[[P.h,D.Q]]},{func:1,ret:P.G,args:[F.au,P.t,P.t]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:P.G,args:[P.al]},{func:1,ret:-1,args:[P.al]},{func:1,ret:-1,args:[P.a],opt:[P.ai]}]
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
if(typeof dartMainRunner==="function")dartMainRunner(N.f1,[])
else N.f1([])})})()
//# sourceMappingURL=test.dart.js.map
