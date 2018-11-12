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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.db"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.db"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.db(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dc=function(){}
var dart=[["","",,H,{"^":"",m3:{"^":"a;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
dh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ct:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.df==null){H.ll()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.eP("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cJ()]
if(v!=null)return v
v=H.lq(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cJ(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
n:{"^":"a;",
t:function(a,b){return a===b},
gS:function(a){return H.bu(a)},
i:["dL",function(a){return"Instance of '"+H.b5(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hp:{"^":"n;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isQ:1},
dR:{"^":"n;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isJ:1},
cK:{"^":"n;",
gS:function(a){return 0},
i:["dN",function(a){return String(a)}]},
i3:{"^":"cK;"},
c_:{"^":"cK;"},
bT:{"^":"cK;",
i:function(a){var z=a[$.$get$dE()]
if(z==null)return this.dN(a)
return"JavaScript function for "+H.h(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbQ:1},
b2:{"^":"n;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.t(P.ag("add"))
a.push(b)},
hk:function(a,b){if(!!a.fixed$length)H.t(P.ag("removeAt"))
if(b<0||b>=a.length)throw H.d(P.bY(b,null,null))
return a.splice(b,1)[0]},
K:function(a,b){var z
if(!!a.fixed$length)H.t(P.ag("remove"))
for(z=0;z<a.length;++z)if(J.T(a[z],b)){a.splice(z,1)
return!0}return!1},
H:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aL(a))}},
m:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.O(z,y,H.h(a[y]))
return z.join(b)},
fW:function(a){return this.m(a,"")},
fQ:function(a,b,c){var z,y,x
H.k(b,{func:1,ret:P.Q,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.d(P.aL(a))}throw H.d(H.cf())},
fP:function(a,b){return this.fQ(a,b,null)},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
br:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.a9(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.a9(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.z(a,0)])
return H.b(a.slice(b,c),[H.z(a,0)])},
gfO:function(a){if(a.length>0)return a[0]
throw H.d(H.cf())},
gbl:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cf())},
cL:function(a,b){var z,y
H.k(b,{func:1,ret:P.Q,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aL(a))}return!1},
N:function(a,b){var z
for(z=0;z<a.length;++z)if(J.T(a[z],b))return!0
return!1},
i:function(a){return P.cH(a,"[","]")},
gP:function(a){return new J.aw(a,a.length,0,[H.z(a,0)])},
gS:function(a){return H.bu(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.t(P.ag("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.c5(b,"newLength",null))
if(b<0)throw H.d(P.a9(b,0,null,"newLength",null))
a.length=b},
O:function(a,b,c){H.a1(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.t(P.ag("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aS(a,b))
if(b>=a.length||b<0)throw H.d(H.aS(a,b))
a[b]=c},
$isf:1,
$isc:1,
q:{
ho:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.c5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a9(a,0,4294967295,"length",null))
return J.dP(new Array(a),b)},
dP:function(a,b){return J.bp(H.b(a,[b]))},
bp:function(a){H.c3(a)
a.fixed$length=Array
return a}}},
m2:{"^":"b2;$ti"},
aw:{"^":"a;a,b,c,0d,$ti",
gG:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bR:{"^":"n;",
dd:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.ag(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.ag(""+a+".round()"))},
dv:function(a,b){var z,y
if(b>20)throw H.d(P.a9(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.d(H.aR(b))
return a*b},
dF:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cF(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.cF(a,b)},
cF:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.ag("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
b1:function(a,b){var z
if(a>0)z=this.f4(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f4:function(a,b){return b>31?0:a>>>b},
al:function(a,b){if(typeof b!=="number")throw H.d(H.aR(b))
return a<b},
$isv:1,
$isX:1},
dQ:{"^":"bR;",$isE:1},
hq:{"^":"bR;"},
bS:{"^":"n;",
bS:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aS(a,b))
if(b<0)throw H.d(H.aS(a,b))
if(b>=a.length)H.t(H.aS(a,b))
return a.charCodeAt(b)},
aq:function(a,b){if(b>=a.length)throw H.d(H.aS(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.G(b)
if(typeof b!=="string")throw H.d(P.c5(b,null,null))
return a+b},
dJ:function(a,b,c){var z
if(c>a.length)throw H.d(P.a9(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bq:function(a,b){return this.dJ(a,b,0)},
aF:function(a,b,c){H.a1(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.bY(b,null,null))
if(b>c)throw H.d(P.bY(b,null,null))
if(c>a.length)throw H.d(P.bY(c,null,null))
return a.substring(b,c)},
aW:function(a,b){return this.aF(a,b,null)},
hy:function(a){return a.toLowerCase()},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
h8:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ai:function(a,b){return this.h8(a,b," ")},
fE:function(a,b,c){if(c>a.length)throw H.d(P.a9(c,0,a.length,null,null))
return H.fx(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$ise5:1,
$ise:1}}],["","",,H,{"^":"",
cf:function(){return new P.cS("No element")},
hn:function(){return new P.cS("Too many elements")},
p:{"^":"jb;a",
gn:function(a){return this.a.length},
j:function(a,b){return C.i.bS(this.a,b)},
$aseQ:function(){return[P.E]},
$asu:function(){return[P.E]},
$asf:function(){return[P.E]},
$asc:function(){return[P.E]}},
dL:{"^":"f;"},
ch:{"^":"dL;$ti",
gP:function(a){return new H.cM(this,this.gn(this),0,[H.aj(this,"ch",0)])},
c7:function(a,b){return this.dM(0,H.k(b,{func:1,ret:P.Q,args:[H.aj(this,"ch",0)]}))}},
cM:{"^":"a;a,b,c,0d,$ti",
gG:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.c2(z)
x=y.gn(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.aL(z))
w=this.c
if(typeof x!=="number")return H.B(x)
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
hF:{"^":"f;a,b,$ti",
gP:function(a){return new H.hG(J.aX(this.a),this.b,this.$ti)},
gn:function(a){return J.aY(this.a)},
A:function(a,b){return this.b.$1(J.cx(this.a,b))},
$asf:function(a,b){return[b]}},
hG:{"^":"cI;0a,b,c,$ti",
w:function(){var z=this.b
if(z.w()){this.a=this.c.$1(z.gG(z))
return!0}this.a=null
return!1},
gG:function(a){return this.a},
$ascI:function(a,b){return[b]}},
hH:{"^":"ch;a,b,$ti",
gn:function(a){return J.aY(this.a)},
A:function(a,b){return this.b.$1(J.cx(this.a,b))},
$asch:function(a,b){return[b]},
$asf:function(a,b){return[b]}},
d2:{"^":"f;a,b,$ti",
gP:function(a){return new H.js(J.aX(this.a),this.b,this.$ti)}},
js:{"^":"cI;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gG(z)))return!0
return!1},
gG:function(a){var z=this.a
return z.gG(z)}},
cd:{"^":"a;$ti"},
eQ:{"^":"a;$ti"},
jb:{"^":"cg+eQ;"}}],["","",,H,{"^":"",
le:function(a){return init.types[H.a1(a)]},
lo:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isD},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.d(H.aR(a))
return z},
bu:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b5:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.L(a).$isc_){v=C.t(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.aq(w,0)===36)w=C.i.aW(w,1)
r=H.dg(H.c3(H.aT(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e9:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
id:function(a){var z,y,x,w
z=H.b([],[P.E])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aR(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.b1(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aR(w))}return H.e9(z)},
ea:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aR(x))
if(x<0)throw H.d(H.aR(x))
if(x>65535)return H.id(a)}return H.e9(a)},
cR:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.b1(z,10))>>>0,56320|z&1023)}throw H.d(P.a9(a,0,1114111,null,null))},
a6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ic:function(a){return a.b?H.a6(a).getUTCFullYear()+0:H.a6(a).getFullYear()+0},
ia:function(a){return a.b?H.a6(a).getUTCMonth()+1:H.a6(a).getMonth()+1},
i6:function(a){return a.b?H.a6(a).getUTCDate()+0:H.a6(a).getDate()+0},
i7:function(a){return a.b?H.a6(a).getUTCHours()+0:H.a6(a).getHours()+0},
i9:function(a){return a.b?H.a6(a).getUTCMinutes()+0:H.a6(a).getMinutes()+0},
ib:function(a){return a.b?H.a6(a).getUTCSeconds()+0:H.a6(a).getSeconds()+0},
i8:function(a){return a.b?H.a6(a).getUTCMilliseconds()+0:H.a6(a).getMilliseconds()+0},
B:function(a){throw H.d(H.aR(a))},
i:function(a,b){if(a==null)J.aY(a)
throw H.d(H.aS(a,b))},
aS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.av(!0,b,"index",null)
z=H.a1(J.aY(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.bY(b,"index",null)},
l9:function(a,b,c){if(a>c)return new P.cj(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cj(a,c,!0,b,"end","Invalid value")
return new P.av(!0,b,"end",null)},
aR:function(a){return new P.av(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.e4()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fy})
z.name=""}else z.toString=H.fy
return z},
fy:function(){return J.ab(this.dartException)},
t:function(a){throw H.d(a)},
x:function(a){throw H.d(P.aL(a))},
aa:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lE(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.b1(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cL(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e3(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ey()
u=$.$get$ez()
t=$.$get$eA()
s=$.$get$eB()
r=$.$get$eF()
q=$.$get$eG()
p=$.$get$eD()
$.$get$eC()
o=$.$get$eI()
n=$.$get$eH()
m=v.Z(y)
if(m!=null)return z.$1(H.cL(H.G(y),m))
else{m=u.Z(y)
if(m!=null){m.method="call"
return z.$1(H.cL(H.G(y),m))}else{m=t.Z(y)
if(m==null){m=s.Z(y)
if(m==null){m=r.Z(y)
if(m==null){m=q.Z(y)
if(m==null){m=p.Z(y)
if(m==null){m=s.Z(y)
if(m==null){m=o.Z(y)
if(m==null){m=n.Z(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e3(H.G(y),m))}}return z.$1(new H.ja(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ej()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.av(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ej()
return a},
bg:function(a){var z
if(a==null)return new H.f8(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f8(a)},
lb:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.O(0,a[y],a[x])}return b},
ln:function(a,b,c,d,e,f){H.l(a,"$isbQ")
switch(H.a1(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.q("Unsupported number of arguments for wrapped closure"))},
bd:function(a,b){var z
H.a1(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ln)
a.$identity=z
return z},
fS:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isc){z.$reflectionInfo=d
x=H.ii(z).r}else x=d
w=e?Object.create(new H.iG().constructor.prototype):Object.create(new H.cz(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ar
if(typeof u!=="number")return u.F()
$.ar=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dz(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.le,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dt:H.cA
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dz(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fP:function(a,b,c,d){var z=H.cA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dz:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fR(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fP(y,!w,z,b)
if(y===0){w=$.ar
if(typeof w!=="number")return w.F()
$.ar=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bj
if(v==null){v=H.c7("self")
$.bj=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ar
if(typeof w!=="number")return w.F()
$.ar=w+1
t+=w
w="return function("+t+"){return this."
v=$.bj
if(v==null){v=H.c7("self")
$.bj=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
fQ:function(a,b,c,d){var z,y
z=H.cA
y=H.dt
switch(b?-1:a){case 0:throw H.d(H.is("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fR:function(a,b){var z,y,x,w,v,u,t,s
z=$.bj
if(z==null){z=H.c7("self")
$.bj=z}y=$.ds
if(y==null){y=H.c7("receiver")
$.ds=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fQ(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.ar
if(typeof y!=="number")return y.F()
$.ar=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.ar
if(typeof y!=="number")return y.F()
$.ar=y+1
return new Function(z+y+"}")()},
db:function(a,b,c,d,e,f,g){var z,y
z=J.bp(H.c3(b))
H.a1(c)
y=!!J.L(d).$isc?J.bp(d):d
return H.fS(a,z,c,y,!!e,f,g)},
G:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.au(a,"String"))},
lu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.au(a,"num"))},
d9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.au(a,"bool"))},
a1:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.au(a,"int"))},
fv:function(a,b){throw H.d(H.au(a,H.G(b).substring(3)))},
lw:function(a,b){var z=J.c2(b)
throw H.d(H.fN(a,z.aF(b,3,z.gn(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.fv(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.lw(a,b)},
c3:function(a){if(a==null)return a
if(!!J.L(a).$isc)return a
throw H.d(H.au(a,"List"))},
lp:function(a,b){if(a==null)return a
if(!!J.L(a).$isc)return a
if(J.L(a)[b])return a
H.fv(a,b)},
fo:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a1(z)]
else return a.$S()}return},
c1:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fo(J.L(a))
if(z==null)return!1
y=H.fr(z,null,b,null)
return y},
k:function(a,b){var z,y
if(a==null)return a
if($.d6)return a
$.d6=!0
try{if(H.c1(a,b))return a
z=H.c4(b)
y=H.au(a,z)
throw H.d(y)}finally{$.d6=!1}},
dd:function(a,b){if(a!=null&&!H.da(a,b))H.t(H.au(a,H.c4(b)))
return a},
fj:function(a){var z
if(a instanceof H.o){z=H.fo(J.L(a))
if(z!=null)return H.c4(z)
return"Closure"}return H.b5(a)},
lB:function(a){throw H.d(new P.fW(H.G(a)))},
fp:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aT:function(a){if(a==null)return
return a.$ti},
mY:function(a,b,c){return H.bh(a["$as"+H.h(c)],H.aT(b))},
bN:function(a,b,c,d){var z
H.G(c)
H.a1(d)
z=H.bh(a["$as"+H.h(c)],H.aT(b))
return z==null?null:z[d]},
aj:function(a,b,c){var z
H.G(b)
H.a1(c)
z=H.bh(a["$as"+H.h(b)],H.aT(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.a1(b)
z=H.aT(a)
return z==null?null:z[b]},
c4:function(a){var z=H.aV(a,null)
return z},
aV:function(a,b){var z,y
H.w(b,"$isc",[P.e],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dg(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a1(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.h(b[y])}if('func' in a)return H.kW(a,b)
if('futureOr' in a)return"FutureOr<"+H.aV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.e]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aV(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aV(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aV(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aV(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.la(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.G(z[l])
n=n+m+H.aV(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dg:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.e],"$asc")
if(a==null)return""
z=new P.by("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aV(u,c)}v="<"+z.i(0)+">"
return v},
bh:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bM:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aT(a)
y=J.L(a)
if(y[b]==null)return!1
return H.fm(H.bh(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.G(b)
H.c3(c)
H.G(d)
if(a==null)return a
z=H.bM(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dg(c,0,null)
throw H.d(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fm:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
mW:function(a,b,c){return a.apply(b,H.bh(J.L(b)["$as"+H.h(c)],H.aT(b)))},
fs:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="J"||a===-1||a===-2||H.fs(z)}return!1},
da:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="J"||b===-1||b===-2||H.fs(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.da(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c1(a,b)}y=J.L(a).constructor
x=H.aT(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.da(a,b))throw H.d(H.au(a,H.c4(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.fr(a,b,c,d)
if('func' in a)return c.builtin$cls==="bQ"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bn" in y.prototype))return!1
w=y.prototype["$as"+"bn"]
v=H.bh(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c4(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fm(H.bh(r,z),b,u,d)},
fr:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ak(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ak(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ak(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ak(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lt(m,b,l,d)},
lt:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
mX:function(a,b,c){Object.defineProperty(a,H.G(b),{value:c,enumerable:false,writable:true,configurable:true})},
lq:function(a){var z,y,x,w,v,u
z=H.G($.fq.$1(a))
y=$.cr[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cu[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.G($.fl.$2(a,z))
if(z!=null){y=$.cr[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cu[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cv(x)
$.cr[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cu[z]=x
return x}if(v==="-"){u=H.cv(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fu(a,x)
if(v==="*")throw H.d(P.eP(z))
if(init.leafTags[z]===true){u=H.cv(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fu(a,x)},
fu:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dh(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cv:function(a){return J.dh(a,!1,null,!!a.$isD)},
ls:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cv(z)
else return J.dh(z,c,null,null)},
ll:function(){if(!0===$.df)return
$.df=!0
H.lm()},
lm:function(){var z,y,x,w,v,u,t,s
$.cr=Object.create(null)
$.cu=Object.create(null)
H.lh()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fw.$1(v)
if(u!=null){t=H.ls(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lh:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.bc(C.G,H.bc(C.L,H.bc(C.r,H.bc(C.r,H.bc(C.K,H.bc(C.H,H.bc(C.I(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fq=new H.li(v)
$.fl=new H.lj(u)
$.fw=new H.lk(t)},
bc:function(a,b){return a(b)||b},
fx:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dj:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ih:{"^":"a;a,b,c,d,e,f,r,0x",q:{
ii:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bp(z)
y=z[0]
x=z[1]
return new H.ih(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iY:{"^":"a;a,b,c,d,e,f",
Z:function(a){var z,y,x
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
at:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.e])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cl:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eE:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i0:{"^":"Z;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
e3:function(a,b){return new H.i0(a,b==null?null:b.method)}}},
ht:{"^":"Z;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
q:{
cL:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ht(a,y,z?null:b.receiver)}}},
ja:{"^":"Z;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lE:{"^":"o:13;a",
$1:function(a){if(!!J.L(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f8:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaq:1},
o:{"^":"a;",
i:function(a){return"Closure '"+H.b5(this).trim()+"'"},
gdC:function(){return this},
$isbQ:1,
gdC:function(){return this}},
ep:{"^":"o;"},
iG:{"^":"ep;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cz:{"^":"ep;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cz))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bu(this.a)
else y=typeof z!=="object"?J.aW(z):H.bu(z)
return(y^H.bu(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.b5(z)+"'")},
q:{
cA:function(a){return a.a},
dt:function(a){return a.c},
c7:function(a){var z,y,x,w,v
z=new H.cz("self","target","receiver","name")
y=J.bp(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iZ:{"^":"Z;a",
i:function(a){return this.a},
q:{
au:function(a,b){return new H.iZ("TypeError: "+H.h(P.cb(a))+": type '"+H.fj(a)+"' is not a subtype of type '"+b+"'")}}},
fM:{"^":"Z;a",
i:function(a){return this.a},
q:{
fN:function(a,b){return new H.fM("CastError: "+H.h(P.cb(a))+": type '"+H.fj(a)+"' is not a subtype of type '"+b+"'")}}},
ir:{"^":"Z;a",
i:function(a){return"RuntimeError: "+H.h(this.a)},
q:{
is:function(a){return new H.ir(a)}}},
b3:{"^":"dY;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gV:function(a){return new H.dV(this,[H.z(this,0)])},
cP:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cs(y,b)}else return this.fU(b)},
fU:function(a){var z=this.d
if(z==null)return!1
return this.c_(this.bz(z,J.aW(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aZ(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aZ(w,b)
x=y==null?null:y.b
return x}else return this.fV(b)},
fV:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bz(z,J.aW(a)&0x3ffffff)
x=this.c_(y,a)
if(x<0)return
return y[x].b},
O:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bC()
this.b=z}this.cl(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bC()
this.c=y}this.cl(y,b,c)}else{x=this.d
if(x==null){x=this.bC()
this.d=x}w=J.aW(b)&0x3ffffff
v=this.bz(x,w)
if(v==null)this.bH(x,w,[this.bD(b,c)])
else{u=this.c_(v,b)
if(u>=0)v[u].b=c
else v.push(this.bD(b,c))}}},
H:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aL(this))
z=z.c}},
cl:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.aZ(a,b)
if(z==null)this.bH(a,b,this.bD(b,c))
else z.b=c},
em:function(){this.r=this.r+1&67108863},
bD:function(a,b){var z,y
z=new H.hy(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.em()
return z},
c_:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
i:function(a){return P.dZ(this)},
aZ:function(a,b){return a[b]},
bz:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
ei:function(a,b){delete a[b]},
cs:function(a,b){return this.aZ(a,b)!=null},
bC:function(){var z=Object.create(null)
this.bH(z,"<non-identifier-key>",z)
this.ei(z,"<non-identifier-key>")
return z},
$isdU:1},
hy:{"^":"a;a,b,0c,0d"},
dV:{"^":"dL;a,$ti",
gn:function(a){return this.a.a},
gP:function(a){var z,y
z=this.a
y=new H.hz(z,z.r,this.$ti)
y.c=z.e
return y}},
hz:{"^":"a;a,b,0c,0d,$ti",
gG:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aL(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
li:{"^":"o:13;a",
$1:function(a){return this.a(a)}},
lj:{"^":"o:27;a",
$2:function(a,b){return this.a(a,b)}},
lk:{"^":"o:30;a",
$1:function(a){return this.a(H.G(a))}},
hr:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise5:1,
q:{
hs:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.hf("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
la:function(a){return J.dP(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bI:function(a){return a},
aQ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aS(b,a))},
kV:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.l9(a,b,c))
return b},
hV:{"^":"n;","%":"DataView;ArrayBufferView;cQ|f2|f3|hU|f4|f5|aO"},
cQ:{"^":"hV;",
gn:function(a){return a.length},
$isD:1,
$asD:I.dc},
hU:{"^":"f3;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
$ascd:function(){return[P.v]},
$asu:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aO:{"^":"f5;",
$ascd:function(){return[P.E]},
$asu:function(){return[P.E]},
$isf:1,
$asf:function(){return[P.E]},
$isc:1,
$asc:function(){return[P.E]}},
mb:{"^":"aO;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mc:{"^":"aO;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
md:{"^":"aO;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
me:{"^":"aO;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mf:{"^":"aO;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mg:{"^":"aO;",
gn:function(a){return a.length},
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hW:{"^":"aO;",
gn:function(a){return a.length},
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
br:function(a,b,c){return new Uint8Array(a.subarray(b,H.kV(b,c,a.length)))},
"%":";Uint8Array"},
f2:{"^":"cQ+u;"},
f3:{"^":"f2+cd;"},
f4:{"^":"cQ+u;"},
f5:{"^":"f4+cd;"}}],["","",,P,{"^":"",
ju:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.l2()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bd(new P.jw(z),1)).observe(y,{childList:true})
return new P.jv(z,y,x)}else if(self.setImmediate!=null)return P.l3()
return P.l4()},
mJ:[function(a){self.scheduleImmediate(H.bd(new P.jx(H.k(a,{func:1,ret:-1})),0))},"$1","l2",4,0,9],
mK:[function(a){self.setImmediate(H.bd(new P.jy(H.k(a,{func:1,ret:-1})),0))},"$1","l3",4,0,9],
mL:[function(a){P.cX(C.l,H.k(a,{func:1,ret:-1}))},"$1","l4",4,0,9],
cX:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.h.U(a.a,1000)
return P.kA(z<0?0:z,b)},
eu:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.b6]})
z=C.h.U(a.a,1000)
return P.kB(z<0?0:z,b)},
kZ:function(a,b){if(H.c1(a,{func:1,args:[P.a,P.aq]}))return b.hi(a,null,P.a,P.aq)
if(H.c1(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.c5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kY:function(){var z,y
for(;z=$.bb,z!=null;){$.bK=null
y=z.b
$.bb=y
if(y==null)$.bJ=null
z.a.$0()}},
mV:[function(){$.d7=!0
try{P.kY()}finally{$.bK=null
$.d7=!1
if($.bb!=null)$.$get$d3().$1(P.fn())}},"$0","fn",0,0,2],
fi:function(a){var z=new P.eV(H.k(a,{func:1,ret:-1}))
if($.bb==null){$.bJ=z
$.bb=z
if(!$.d7)$.$get$d3().$1(P.fn())}else{$.bJ.b=z
$.bJ=z}},
l1:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.bb
if(z==null){P.fi(a)
$.bK=$.bJ
return}y=new P.eV(a)
x=$.bK
if(x==null){y.b=z
$.bK=y
$.bb=y}else{y.b=x.b
x.b=y
$.bK=y
if(y.b==null)$.bJ=y}},
lx:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.P
if(C.j===y){P.cq(null,null,C.j,a)
return}y.toString
P.cq(null,null,y,H.k(y.bM(a),z))},
et:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.P
if(y===C.j){y.toString
return P.cX(a,b)}return P.cX(a,H.k(y.bM(b),z))},
iU:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b6]}
H.k(b,z)
y=$.P
if(y===C.j){y.toString
return P.eu(a,b)}x=y.cM(b,P.b6)
$.P.toString
return P.eu(a,H.k(x,z))},
cp:function(a,b,c,d,e){var z={}
z.a=d
P.l1(new P.l_(z,e))},
fg:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
fh:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
l0:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cq:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bM(d):c.fA(d,-1)
P.fi(d)},
jw:{"^":"o:17;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jv:{"^":"o:25;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jx:{"^":"o:1;a",
$0:function(){this.a.$0()}},
jy:{"^":"o:1;a",
$0:function(){this.a.$0()}},
fc:{"^":"a;a,0b,c",
e4:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bd(new P.kD(this,b),0),a)
else throw H.d(P.ag("`setTimeout()` not found."))},
e5:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bd(new P.kC(this,a,Date.now(),b),0),a)
else throw H.d(P.ag("Periodic timer."))},
$isb6:1,
q:{
kA:function(a,b){var z=new P.fc(!0,0)
z.e4(a,b)
return z},
kB:function(a,b){var z=new P.fc(!1,0)
z.e5(a,b)
return z}}},
kD:{"^":"o:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kC:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.dR(w,x)}z.c=y
this.d.$1(z)}},
ba:{"^":"a;0a,b,c,d,e,$ti",
h_:function(a){if(this.c!==6)return!0
return this.b.b.c5(H.k(this.d,{func:1,ret:P.Q,args:[P.a]}),a.a,P.Q,P.a)},
fT:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.c1(z,{func:1,args:[P.a,P.aq]}))return H.dd(w.hr(z,a.a,a.b,null,y,P.aq),x)
else return H.dd(w.c5(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aI:{"^":"a;cE:a<,b,0eV:c<,$ti",
du:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kZ(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aI(0,$.P,[c])
w=b==null?1:3
this.cm(new P.ba(x,w,a,b,[z,c]))
return x},
hv:function(a,b){return this.du(a,null,b)},
cm:function(a){var z,y
z=this.a
if(z<=1){a.a=H.l(this.c,"$isba")
this.c=a}else{if(z===2){y=H.l(this.c,"$isaI")
z=y.a
if(z<4){y.cm(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cq(null,null,z,H.k(new P.jN(this,a),{func:1,ret:-1}))}},
cA:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.l(this.c,"$isba")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.l(this.c,"$isaI")
y=u.a
if(y<4){u.cA(a)
return}this.a=y
this.c=u.c}z.a=this.b0(a)
y=this.b
y.toString
P.cq(null,null,y,H.k(new P.jS(z,this),{func:1,ret:-1}))}},
bF:function(){var z=H.l(this.c,"$isba")
this.c=null
return this.b0(z)},
b0:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cp:function(a){var z,y,x,w
z=H.z(this,0)
H.dd(a,{futureOr:1,type:z})
y=this.$ti
x=H.bM(a,"$isbn",y,"$asbn")
if(x){z=H.bM(a,"$isaI",y,null)
if(z)P.eY(a,this)
else P.jO(a,this)}else{w=this.bF()
H.C(a,z)
this.a=4
this.c=a
P.bH(this,w)}},
bv:[function(a,b){var z
H.l(b,"$isaq")
z=this.bF()
this.a=8
this.c=new P.ac(a,b)
P.bH(this,z)},function(a){return this.bv(a,null)},"hE","$2","$1","ged",4,2,39],
$isbn:1,
q:{
jO:function(a,b){var z,y,x
b.a=1
try{a.du(new P.jP(b),new P.jQ(b),null)}catch(x){z=H.aa(x)
y=H.bg(x)
P.lx(new P.jR(b,z,y))}},
eY:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.l(a.c,"$isaI")
if(z>=4){y=b.bF()
b.a=a.a
b.c=a.c
P.bH(b,y)}else{y=H.l(b.c,"$isba")
b.a=2
b.c=a
a.cA(y)}},
bH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.l(y.c,"$isac")
y=y.b
u=v.a
t=v.b
y.toString
P.cp(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bH(z.a,b)}y=z.a
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
if(p){H.l(r,"$isac")
y=y.b
u=r.a
t=r.b
y.toString
P.cp(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jV(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jU(x,b,r).$0()}else if((y&2)!==0)new P.jT(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.L(y).$isbn){if(y.a>=4){n=H.l(t.c,"$isba")
t.c=null
b=t.b0(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eY(y,t)
return}}m=b.b
n=H.l(m.c,"$isba")
m.c=null
b=m.b0(n)
y=x.a
u=x.b
if(!y){H.C(u,H.z(m,0))
m.a=4
m.c=u}else{H.l(u,"$isac")
m.a=8
m.c=u}z.a=m
y=m}}}},
jN:{"^":"o:1;a,b",
$0:function(){P.bH(this.a,this.b)}},
jS:{"^":"o:1;a,b",
$0:function(){P.bH(this.b,this.a.a)}},
jP:{"^":"o:17;a",
$1:function(a){var z=this.a
z.a=0
z.cp(a)}},
jQ:{"^":"o:31;a",
$2:function(a,b){this.a.bv(a,H.l(b,"$isaq"))},
$1:function(a){return this.$2(a,null)}},
jR:{"^":"o:1;a,b,c",
$0:function(){this.a.bv(this.b,this.c)}},
jV:{"^":"o:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ds(H.k(w.d,{func:1}),null)}catch(v){y=H.aa(v)
x=H.bg(v)
if(this.d){w=H.l(this.a.a.c,"$isac").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.l(this.a.a.c,"$isac")
else u.b=new P.ac(y,x)
u.a=!0
return}if(!!J.L(z).$isbn){if(z instanceof P.aI&&z.gcE()>=4){if(z.gcE()===8){w=this.b
w.b=H.l(z.geV(),"$isac")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hv(new P.jW(t),null)
w.a=!1}}},
jW:{"^":"o:33;a",
$1:function(a){return this.a}},
jU:{"^":"o:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.c5(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aa(t)
y=H.bg(t)
x=this.a
x.b=new P.ac(z,y)
x.a=!0}}},
jT:{"^":"o:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.l(this.a.a.c,"$isac")
w=this.c
if(w.h_(z)&&w.e!=null){v=this.b
v.b=w.fT(z)
v.a=!1}}catch(u){y=H.aa(u)
x=H.bg(u)
w=H.l(this.a.a.c,"$isac")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ac(y,x)
s.a=!0}}},
eV:{"^":"a;a,0b"},
cT:{"^":"a;$ti",
gn:function(a){var z,y
z={}
y=new P.aI(0,$.P,[P.E])
z.a=0
this.fZ(new P.iJ(z,this),!0,new P.iK(z,y),y.ged())
return y}},
iJ:{"^":"o;a,b",
$1:function(a){H.C(a,H.aj(this.b,"cT",0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.aj(this.b,"cT",0)]}}},
iK:{"^":"o:1;a,b",
$0:function(){this.b.cp(this.a.a)}},
em:{"^":"a;$ti"},
iI:{"^":"a;"},
b6:{"^":"a;"},
ac:{"^":"a;a,b",
i:function(a){return H.h(this.a)},
$isZ:1},
kK:{"^":"a;",$ismI:1},
l_:{"^":"o:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e4()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
kf:{"^":"kK;",
hs:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.fg(null,null,this,a,-1)}catch(x){z=H.aa(x)
y=H.bg(x)
P.cp(null,null,this,z,H.l(y,"$isaq"))}},
ht:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.fh(null,null,this,a,b,-1,c)}catch(x){z=H.aa(x)
y=H.bg(x)
P.cp(null,null,this,z,H.l(y,"$isaq"))}},
fA:function(a,b){return new P.kh(this,H.k(a,{func:1,ret:b}),b)},
bM:function(a){return new P.kg(this,H.k(a,{func:1,ret:-1}))},
cM:function(a,b){return new P.ki(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
ds:function(a,b){H.k(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.fg(null,null,this,a,b)},
c5:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.P===C.j)return a.$1(b)
return P.fh(null,null,this,a,b,c,d)},
hr:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.P===C.j)return a.$2(b,c)
return P.l0(null,null,this,a,b,c,d,e,f)},
hi:function(a,b,c,d){return H.k(a,{func:1,ret:b,args:[c,d]})}},
kh:{"^":"o;a,b,c",
$0:function(){return this.a.ds(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kg:{"^":"o:2;a,b",
$0:function(){return this.a.hs(this.b)}},
ki:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.ht(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hA:function(a,b,c){H.c3(a)
return H.w(H.lb(a,new H.b3(0,0,[b,c])),"$isdU",[b,c],"$asdU")},
dW:function(a,b){return new H.b3(0,0,[a,b])},
bV:function(a,b,c,d){return new P.k2(0,0,[d])},
hm:function(a,b,c){var z,y
if(P.d8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bL()
C.a.h(y,a)
try{P.kX(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.en(b,H.lp(z,"$isf"),", ")+c
return y.charCodeAt(0)==0?y:y},
cH:function(a,b,c){var z,y,x
if(P.d8(a))return b+"..."+c
z=new P.by(b)
y=$.$get$bL()
C.a.h(y,a)
try{x=z
x.a=P.en(x.gar(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gar()+c
y=z.gar()
return y.charCodeAt(0)==0?y:y},
d8:function(a){var z,y
for(z=0;y=$.$get$bL(),z<y.length;++z)if(a===y[z])return!0
return!1},
kX:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gP(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.h(z.gG(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gG(z);++x
if(!z.w()){if(x<=4){C.a.h(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gG(z);++x
for(;z.w();t=s,s=r){r=z.gG(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dX:function(a,b){var z,y
z=P.bV(null,null,null,b)
for(y=J.aX(a);y.w();)z.h(0,H.C(y.gG(y),b))
return z},
dZ:function(a){var z,y,x
z={}
if(P.d8(a))return"{...}"
y=new P.by("")
try{C.a.h($.$get$bL(),a)
x=y
x.a=x.gar()+"{"
z.a=!0
J.fC(a,new P.hE(z,y))
z=y
z.a=z.gar()+"}"}finally{z=$.$get$bL()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gar()
return z.charCodeAt(0)==0?z:z},
k2:{"^":"jX;a,0b,0c,0d,0e,0f,r,$ti",
gP:function(a){var z=new P.f1(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
N:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.l(z[b],"$isco")!=null}else{y=this.ee(b)
return y}},
ee:function(a){var z=this.d
if(z==null)return!1
return this.by(this.cw(z,a),a)>=0},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d5()
this.b=z}return this.cn(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d5()
this.c=y}return this.cn(y,b)}else return this.e6(0,b)},
e6:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.d5()
this.d=z}y=this.cq(b)
x=z[y]
if(x==null)z[y]=[this.bu(b)]
else{if(this.by(x,b)>=0)return!1
x.push(this.bu(b))}return!0},
K:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cB(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cB(this.c,b)
else return this.eO(0,b)},
eO:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cw(z,b)
x=this.by(y,b)
if(x<0)return!1
this.cG(y.splice(x,1)[0])
return!0},
cn:function(a,b){H.C(b,H.z(this,0))
if(H.l(a[b],"$isco")!=null)return!1
a[b]=this.bu(b)
return!0},
cB:function(a,b){var z
if(a==null)return!1
z=H.l(a[b],"$isco")
if(z==null)return!1
this.cG(z)
delete a[b]
return!0},
co:function(){this.r=this.r+1&67108863},
bu:function(a){var z,y
z=new P.co(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.co()
return z},
cG:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.co()},
cq:function(a){return J.aW(a)&0x3ffffff},
cw:function(a,b){return a[this.cq(b)]},
by:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
q:{
d5:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
co:{"^":"a;a,0b,0c"},
f1:{"^":"a;a,b,0c,0d,$ti",
gG:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aL(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}}},
jX:{"^":"it;"},
cg:{"^":"k3;",$isf:1,$isc:1},
u:{"^":"a;$ti",
gP:function(a){return new H.cM(a,this.gn(a),0,[H.bN(this,a,"u",0)])},
A:function(a,b){return this.j(a,b)},
hx:function(a,b){var z,y,x
z=H.b([],[H.bN(this,a,"u",0)])
C.a.sn(z,this.gn(a))
y=0
while(!0){x=this.gn(a)
if(typeof x!=="number")return H.B(x)
if(!(y<x))break
C.a.O(z,y,this.j(a,y));++y}return z},
hw:function(a){return this.hx(a,!0)},
i:function(a){return P.cH(a,"[","]")}},
dY:{"^":"a4;"},
hE:{"^":"o:19;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
a4:{"^":"a;$ti",
H:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bN(this,a,"a4",0),H.bN(this,a,"a4",1)]})
for(z=J.aX(this.gV(a));z.w();){y=z.gG(z)
b.$2(y,this.j(a,y))}},
gn:function(a){return J.aY(this.gV(a))},
i:function(a){return P.dZ(a)},
$isa_:1},
iv:{"^":"a;$ti",
a8:function(a,b){var z
for(z=J.aX(H.w(b,"$isf",this.$ti,"$asf"));z.w();)this.h(0,z.gG(z))},
i:function(a){return P.cH(this,"{","}")},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.dp("index"))
if(b<0)H.t(P.a9(b,0,null,"index",null))
for(z=new P.f1(this,this.r,this.$ti),z.c=this.e,y=0;z.w();){x=z.d
if(b===y)return x;++y}throw H.d(P.N(b,this,"index",null,y))},
$isf:1},
it:{"^":"iv;"},
k3:{"^":"a+u;"}}],["","",,P,{"^":"",cC:{"^":"a;$ti"},c9:{"^":"iI;$ti"},h6:{"^":"cC;",
$ascC:function(){return[P.e,[P.c,P.E]]}},hk:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hj:{"^":"c9;a",
ef:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.i(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.by("")
if(w>b)v.a+=C.i.aF(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fG(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asc9:function(){return[P.e,P.e]}},je:{"^":"h6;a"},jf:{"^":"c9;",
fG:function(a,b,c){var z,y,x,w
z=a.length
P.eb(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kI(0,0,x)
if(w.ek(a,b,z)!==z)w.cH(C.i.bS(a,z-1),0)
return C.Q.br(x,0,w.b)},
fF:function(a){return this.fG(a,0,null)},
$asc9:function(){return[P.e,[P.c,P.E]]}},kI:{"^":"a;a,b,c",
cH:function(a,b){var z,y,x,w,v
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
ek:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.bS(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aq(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cH(w,C.i.aq(a,u)))x=u}else if(w<=2047){v=this.b
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
h8:function(a){var z=J.L(a)
if(!!z.$iso)return z.i(a)
return"Instance of '"+H.b5(a)+"'"},
hB:function(a,b,c,d){var z,y
H.C(b,d)
z=J.ho(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.O(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
hC:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gP(a);x.w();)C.a.h(y,H.C(x.gG(x),c))
if(b)return y
return H.w(J.bp(y),"$isc",z,"$asc")},
cU:function(a,b,c){var z,y
z=P.E
H.w(a,"$isf",[z],"$asf")
if(a.constructor===Array){H.w(a,"$isb2",[z],"$asb2")
y=a.length
c=P.eb(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.al()
z=c<y}else z=!0
return H.ea(z?C.a.br(a,b,c):a)}return P.iL(a,b,c)},
iL:function(a,b,c){var z,y,x
H.w(a,"$isf",[P.E],"$asf")
z=J.aX(a)
for(y=0;y<b;++y)if(!z.w())throw H.d(P.a9(b,0,y,null,null))
x=[]
for(;z.w();)x.push(z.gG(z))
return H.ea(x)},
ij:function(a,b,c){return new H.hr(a,H.hs(a,!1,!0,!1))},
fe:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.E],"$asc")
if(c===C.p){z=$.$get$fd().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.fF(H.C(b,H.aj(c,"cC",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cR(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cb:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.h8(a)},
q:function(a){return new P.eX(a)},
di:function(a){H.lv(a)},
Q:{"^":"a;"},
"+bool":0,
aM:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aM))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.h.b1(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fY(H.ic(this))
y=P.bP(H.ia(this))
x=P.bP(H.i6(this))
w=P.bP(H.i7(this))
v=P.bP(H.i9(this))
u=P.bP(H.ib(this))
t=P.fZ(H.i8(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fY:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bP:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"X;"},
"+double":0,
b0:{"^":"a;a",
k:function(a,b){return new P.b0(C.h.a_(this.a*b))},
al:function(a,b){return C.h.al(this.a,H.l(b,"$isb0").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.b0))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.h2()
y=this.a
if(y<0)return"-"+new P.b0(0-y).i(0)
x=z.$1(C.h.U(y,6e7)%60)
w=z.$1(C.h.U(y,1e6)%60)
v=new P.h1().$1(y%1e6)
return""+C.h.U(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
q:{
dK:function(a,b,c,d,e,f){return new P.b0(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h1:{"^":"o:23;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h2:{"^":"o:23;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
e4:{"^":"Z;",
i:function(a){return"Throw of null."}},
av:{"^":"Z;a,b,c,d",
gbx:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbw:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.h(z)
w=this.gbx()+y+x
if(!this.a)return w
v=this.gbw()
u=P.cb(this.b)
return w+v+": "+H.h(u)},
q:{
c5:function(a,b,c){return new P.av(!0,a,b,c)},
dp:function(a){return new P.av(!1,null,a,"Must not be null")}}},
cj:{"^":"av;e,f,a,b,c,d",
gbx:function(){return"RangeError"},
gbw:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
q:{
bY:function(a,b,c){return new P.cj(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
eb:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.B(a)
if(0<=a){if(typeof c!=="number")return H.B(c)
z=a>c}else z=!0
if(z)throw H.d(P.a9(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.B(c)
z=b>c}else z=!0
if(z)throw H.d(P.a9(b,a,c,"end",f))
return b}return c}}},
hl:{"^":"av;e,n:f>,a,b,c,d",
gbx:function(){return"RangeError"},
gbw:function(){if(J.fz(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.h(z)},
q:{
N:function(a,b,c,d,e){var z=H.a1(e!=null?e:J.aY(b))
return new P.hl(b,z,!0,a,c,"Index out of range")}}},
jc:{"^":"Z;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ag:function(a){return new P.jc(a)}}},
j9:{"^":"Z;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
eP:function(a){return new P.j9(a)}}},
cS:{"^":"Z;a",
i:function(a){return"Bad state: "+this.a},
q:{
el:function(a){return new P.cS(a)}}},
fT:{"^":"Z;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.cb(z))+"."},
q:{
aL:function(a){return new P.fT(a)}}},
i1:{"^":"a;",
i:function(a){return"Out of Memory"},
$isZ:1},
ej:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isZ:1},
fW:{"^":"Z;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eX:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hf:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.aF(x,0,75)+"..."
return y+"\n"+x}},
bQ:{"^":"a;"},
E:{"^":"X;"},
"+int":0,
f:{"^":"a;$ti",
c7:["dM",function(a,b){var z=H.aj(this,"f",0)
return new H.d2(this,H.k(b,{func:1,ret:P.Q,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.gP(this)
for(y=0;z.w();)++y
return y},
gam:function(a){var z,y
z=this.gP(this)
if(!z.w())throw H.d(H.cf())
y=z.gG(z)
if(z.w())throw H.d(H.hn())
return y},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.dp("index"))
if(b<0)H.t(P.a9(b,0,null,"index",null))
for(z=this.gP(this),y=0;z.w();){x=z.gG(z)
if(b===y)return x;++y}throw H.d(P.N(b,this,"index",null,y))},
i:function(a){return P.hm(this,"(",")")}},
cI:{"^":"a;$ti"},
c:{"^":"a;$ti",$isf:1},
"+List":0,
a_:{"^":"a;$ti"},
J:{"^":"a;",
gS:function(a){return P.a.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
X:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gS:function(a){return H.bu(this)},
i:function(a){return"Instance of '"+H.b5(this)+"'"},
toString:function(){return this.i(this)}},
aq:{"^":"a;"},
e:{"^":"a;",$ise5:1},
"+String":0,
by:{"^":"a;ar:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
en:function(a,b,c){var z=J.aX(b)
if(!z.w())return a
if(c.length===0){do a+=H.h(z.gG(z))
while(z.w())}else{a+=H.h(z.gG(z))
for(;z.w();)a=a+c+H.h(z.gG(z))}return a}}}}],["","",,W,{"^":"",
dn:function(a){var z=document.createElement("a")
return z},
dy:function(a,b){var z=document.createElement("canvas")
return z},
h3:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).a3(z,a,b,c)
y.toString
z=W.A
z=new H.d2(new W.ai(y),H.k(new W.h4(),{func:1,ret:P.Q,args:[z]}),[z])
return H.l(z.gam(z),"$isR")},
h5:function(a){H.l(a,"$isa3")
return"wheel"},
bl:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fF(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aa(x)}return z},
cm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f0:function(a,b,c,d){var z,y
z=W.cm(W.cm(W.cm(W.cm(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fk:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.cM(a,b)},
ad:{"^":"R;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lF:{"^":"n;0n:length=","%":"AccessibleNodeList"},
lG:{"^":"ad;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lH:{"^":"ad;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dr:{"^":"ad;",$isdr:1,"%":"HTMLBaseElement"},
fL:{"^":"n;","%":";Blob"},
c6:{"^":"ad;",$isc6:1,"%":"HTMLBodyElement"},
cB:{"^":"ad;",
cb:function(a,b,c){var z=a.getContext(b,P.l5(c,null))
return z},
$iscB:1,
"%":"HTMLCanvasElement"},
lN:{"^":"A;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lP:{"^":"fV;0n:length=","%":"CSSPerspective"},
bk:{"^":"n;",$isbk:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lQ:{"^":"jC;0n:length=",
dE:function(a,b){var z=a.getPropertyValue(this.ea(a,b))
return z==null?"":z},
ea:function(a,b){var z,y
z=$.$get$dC()
y=z[b]
if(typeof y==="string")return y
y=this.f5(a,b)
z[b]=y
return y},
f5:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h_()+b
if(z in a)return z
return b},
gbN:function(a){return a.bottom},
gab:function(a){return a.height},
gaB:function(a){return a.left},
gaR:function(a){return a.right},
gaT:function(a){return a.top},
gac:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fU:{"^":"a;",
gaB:function(a){return this.dE(a,"left")}},
dD:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fV:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lR:{"^":"dD;0n:length=","%":"CSSTransformValue"},
lS:{"^":"dD;0n:length=","%":"CSSUnparsedValue"},
lT:{"^":"n;0n:length=","%":"DataTransferItemList"},
b_:{"^":"ad;",$isb_:1,"%":"HTMLDivElement"},
lU:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
lV:{"^":"jE;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.a7,P.X]]},
$asu:function(){return[[P.a7,P.X]]},
$isf:1,
$asf:function(){return[[P.a7,P.X]]},
$isc:1,
$asc:function(){return[[P.a7,P.X]]},
$asy:function(){return[[P.a7,P.X]]},
"%":"ClientRectList|DOMRectList"},
h0:{"^":"n;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gac(a))+" x "+H.h(this.gab(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bM(b,"$isa7",[P.X],"$asa7")
if(!z)return!1
z=J.bf(b)
return a.left===z.gaB(b)&&a.top===z.gaT(b)&&this.gac(a)===z.gac(b)&&this.gab(a)===z.gab(b)},
gS:function(a){return W.f0(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gac(a)&0x1FFFFFFF,this.gab(a)&0x1FFFFFFF)},
gbN:function(a){return a.bottom},
gab:function(a){return a.height},
gaB:function(a){return a.left},
gaR:function(a){return a.right},
gaT:function(a){return a.top},
gac:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.X]},
"%":";DOMRectReadOnly"},
lW:{"^":"jG;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.e]},
$asu:function(){return[P.e]},
$isf:1,
$asf:function(){return[P.e]},
$isc:1,
$asc:function(){return[P.e]},
$asy:function(){return[P.e]},
"%":"DOMStringList"},
lX:{"^":"n;0n:length=","%":"DOMTokenList"},
jB:{"^":"cg;cv:a<,b",
gn:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.l(z[b],"$isR")},
h:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var z=this.hw(this)
return new J.aw(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.R]},
$asf:function(){return[W.R]},
$asc:function(){return[W.R]}},
R:{"^":"A;0hu:tagName=",
gfz:function(a){return new W.jH(a)},
gcN:function(a){return new W.jB(a,a.children)},
gcO:function(a){return P.ig(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
i:function(a){return a.localName},
a3:["bs",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dN
if(z==null){z=H.b([],[W.as])
y=new W.e2(z)
C.a.h(z,W.eZ(null))
C.a.h(z,W.f9())
$.dN=y
d=y}else d=z
z=$.dM
if(z==null){z=new W.ff(d)
$.dM=z
c=z}else{z.a=d
c=z}}if($.ax==null){z=document
y=z.implementation.createHTMLDocument("")
$.ax=y
$.cE=y.createRange()
y=$.ax
y.toString
y=y.createElement("base")
H.l(y,"$isdr")
y.href=z.baseURI
$.ax.head.appendChild(y)}z=$.ax
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.l(y,"$isc6")}z=$.ax
if(!!this.$isc6)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.ax.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.N(C.O,a.tagName)){$.cE.selectNodeContents(x)
w=$.cE.createContextualFragment(b)}else{x.innerHTML=b
w=$.ax.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.ax.body
if(x==null?z!=null:x!==z)J.dm(x)
c.cc(w)
document.adoptNode(w)
return w},function(a,b,c){return this.a3(a,b,c,null)},"fH",null,null,"gi3",5,5,null],
dI:function(a,b,c,d){a.textContent=null
a.appendChild(this.a3(a,b,c,d))},
dH:function(a,b){return this.dI(a,b,null,null)},
$isR:1,
"%":";Element"},
h4:{"^":"o:12;",
$1:function(a){return!!J.L(H.l(a,"$isA")).$isR}},
a8:{"^":"n;",$isa8:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a3:{"^":"n;",
cJ:["dK",function(a,b,c,d){H.k(c,{func:1,args:[W.a8]})
if(c!=null)this.e7(a,b,c,!1)}],
e7:function(a,b,c,d){return a.addEventListener(b,H.bd(H.k(c,{func:1,args:[W.a8]}),1),!1)},
$isa3:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;f6|f7|fa|fb"},
bm:{"^":"fL;",$isbm:1,"%":"File"},
lY:{"^":"jM;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bm]},
$asu:function(){return[W.bm]},
$isf:1,
$asf:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asy:function(){return[W.bm]},
"%":"FileList"},
lZ:{"^":"a3;0n:length=","%":"FileWriter"},
m_:{"^":"ad;0n:length=","%":"HTMLFormElement"},
bo:{"^":"n;",$isbo:1,"%":"Gamepad"},
m0:{"^":"n;0n:length=","%":"History"},
m1:{"^":"jZ;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.A]},
$asu:function(){return[W.A]},
$isf:1,
$asf:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$asy:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bq:{"^":"cY;",$isbq:1,"%":"KeyboardEvent"},
m5:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
m6:{"^":"n;0n:length=","%":"MediaList"},
m7:{"^":"a3;",
cJ:function(a,b,c,d){H.k(c,{func:1,args:[W.a8]})
if(b==="message")a.start()
this.dK(a,b,c,!1)},
"%":"MessagePort"},
m8:{"^":"k4;",
j:function(a,b){return P.aJ(a.get(H.G(b)))},
H:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gV:function(a){var z=H.b([],[P.e])
this.H(a,new W.hR(z))
return z},
gn:function(a){return a.size},
$asa4:function(){return[P.e,null]},
$isa_:1,
$asa_:function(){return[P.e,null]},
"%":"MIDIInputMap"},
hR:{"^":"o:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m9:{"^":"k5;",
j:function(a,b){return P.aJ(a.get(H.G(b)))},
H:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gV:function(a){var z=H.b([],[P.e])
this.H(a,new W.hS(z))
return z},
gn:function(a){return a.size},
$asa4:function(){return[P.e,null]},
$isa_:1,
$asa_:function(){return[P.e,null]},
"%":"MIDIOutputMap"},
hS:{"^":"o:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
br:{"^":"n;",$isbr:1,"%":"MimeType"},
ma:{"^":"k7;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.br]},
$asu:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asy:function(){return[W.br]},
"%":"MimeTypeArray"},
ao:{"^":"cY;",$isao:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ai:{"^":"cg;a",
gam:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.el("No elements"))
if(y>1)throw H.d(P.el("More than one element"))
return z.firstChild},
a8:function(a,b){var z,y,x,w
H.w(b,"$isf",[W.A],"$asf")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gP:function(a){var z=this.a.childNodes
return new W.dO(z,z.length,-1,[H.bN(C.R,z,"y",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$asu:function(){return[W.A]},
$asf:function(){return[W.A]},
$asc:function(){return[W.A]}},
A:{"^":"a3;0c2:previousSibling=",
hj:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.dL(a):z},
$isA:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
mh:{"^":"n;",
hg:[function(a){return a.previousNode()},"$0","gc2",1,0,16],
"%":"NodeIterator"},
hX:{"^":"k9;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.A]},
$asu:function(){return[W.A]},
$isf:1,
$asf:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$asy:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
bt:{"^":"n;0n:length=",$isbt:1,"%":"Plugin"},
ml:{"^":"kd;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bt]},
$asu:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$asy:function(){return[W.bt]},
"%":"PluginArray"},
mn:{"^":"kj;",
j:function(a,b){return P.aJ(a.get(H.G(b)))},
H:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gV:function(a){var z=H.b([],[P.e])
this.H(a,new W.iq(z))
return z},
gn:function(a){return a.size},
$asa4:function(){return[P.e,null]},
$isa_:1,
$asa_:function(){return[P.e,null]},
"%":"RTCStatsReport"},
iq:{"^":"o:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mp:{"^":"ad;0n:length=","%":"HTMLSelectElement"},
bv:{"^":"a3;",$isbv:1,"%":"SourceBuffer"},
mq:{"^":"f7;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bv]},
$asu:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$isc:1,
$asc:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"SourceBufferList"},
bw:{"^":"n;",$isbw:1,"%":"SpeechGrammar"},
mr:{"^":"kp;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bw]},
$asu:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$isc:1,
$asc:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"SpeechGrammarList"},
bx:{"^":"n;0n:length=",$isbx:1,"%":"SpeechRecognitionResult"},
mt:{"^":"ks;",
j:function(a,b){return a.getItem(H.G(b))},
H:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gV:function(a){var z=H.b([],[P.e])
this.H(a,new W.iH(z))
return z},
gn:function(a){return a.length},
$asa4:function(){return[P.e,P.e]},
$isa_:1,
$asa_:function(){return[P.e,P.e]},
"%":"Storage"},
iH:{"^":"o:26;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bz:{"^":"n;",$isbz:1,"%":"CSSStyleSheet|StyleSheet"},
iM:{"^":"ad;",
a3:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
z=W.h3("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ai(y).a8(0,new W.ai(z))
return y},
"%":"HTMLTableElement"},
mv:{"^":"ad;",
a3:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.a3(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gam(z)
x.toString
z=new W.ai(x)
w=z.gam(z)
y.toString
w.toString
new W.ai(y).a8(0,new W.ai(w))
return y},
"%":"HTMLTableRowElement"},
mw:{"^":"ad;",
a3:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.a3(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gam(z)
y.toString
x.toString
new W.ai(y).a8(0,new W.ai(x))
return y},
"%":"HTMLTableSectionElement"},
eq:{"^":"ad;",$iseq:1,"%":"HTMLTemplateElement"},
bA:{"^":"a3;",$isbA:1,"%":"TextTrack"},
bB:{"^":"a3;",$isbB:1,"%":"TextTrackCue|VTTCue"},
my:{"^":"kz;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bB]},
$asu:function(){return[W.bB]},
$isf:1,
$asf:function(){return[W.bB]},
$isc:1,
$asc:function(){return[W.bB]},
$asy:function(){return[W.bB]},
"%":"TextTrackCueList"},
mz:{"^":"fb;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bA]},
$asu:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$isc:1,
$asc:function(){return[W.bA]},
$asy:function(){return[W.bA]},
"%":"TextTrackList"},
mA:{"^":"n;0n:length=","%":"TimeRanges"},
bC:{"^":"n;",$isbC:1,"%":"Touch"},
b7:{"^":"cY;",$isb7:1,"%":"TouchEvent"},
mB:{"^":"kF;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bC]},
$asu:function(){return[W.bC]},
$isf:1,
$asf:function(){return[W.bC]},
$isc:1,
$asc:function(){return[W.bC]},
$asy:function(){return[W.bC]},
"%":"TouchList"},
mC:{"^":"n;0n:length=","%":"TrackDefaultList"},
mE:{"^":"n;",
hg:[function(a){return a.previousNode()},"$0","gc2",1,0,16],
"%":"TreeWalker"},
cY:{"^":"a8;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mG:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
mH:{"^":"a3;0n:length=","%":"VideoTrackList"},
bG:{"^":"ao;",
gfK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.ag("deltaY is not supported"))},
gfJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.ag("deltaX is not supported"))},
$isbG:1,
"%":"WheelEvent"},
jt:{"^":"a3;",
eS:function(a,b){return a.requestAnimationFrame(H.bd(H.k(b,{func:1,ret:-1,args:[P.X]}),1))},
ej:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
eW:{"^":"A;",$iseW:1,"%":"Attr"},
mM:{"^":"kM;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bk]},
$asu:function(){return[W.bk]},
$isf:1,
$asf:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asy:function(){return[W.bk]},
"%":"CSSRuleList"},
mN:{"^":"h0;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bM(b,"$isa7",[P.X],"$asa7")
if(!z)return!1
z=J.bf(b)
return a.left===z.gaB(b)&&a.top===z.gaT(b)&&a.width===z.gac(b)&&a.height===z.gab(b)},
gS:function(a){return W.f0(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gab:function(a){return a.height},
gac:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mP:{"^":"kO;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bo]},
$asu:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asy:function(){return[W.bo]},
"%":"GamepadList"},
mS:{"^":"kQ;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.A]},
$asu:function(){return[W.A]},
$isf:1,
$asf:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$asy:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mT:{"^":"kS;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$asu:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$isc:1,
$asc:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"SpeechRecognitionResultList"},
mU:{"^":"kU;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bz]},
$asu:function(){return[W.bz]},
$isf:1,
$asf:function(){return[W.bz]},
$isc:1,
$asc:function(){return[W.bz]},
$asy:function(){return[W.bz]},
"%":"StyleSheetList"},
jz:{"^":"dY;cv:a<",
H:function(a,b){var z,y,x,w,v
H.k(b,{func:1,ret:-1,args:[P.e,P.e]})
for(z=this.gV(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gV:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.e])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.l(z[w],"$iseW")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asa4:function(){return[P.e,P.e]},
$asa_:function(){return[P.e,P.e]}},
jH:{"^":"jz;a",
j:function(a,b){return this.a.getAttribute(H.G(b))},
gn:function(a){return this.gV(this).length}},
jI:{"^":"cT;a,b,c,$ti",
fZ:function(a,b,c,d){var z=H.z(this,0)
H.k(a,{func:1,ret:-1,args:[z]})
H.k(c,{func:1,ret:-1})
return W.a0(this.a,this.b,a,!1,z)}},
mO:{"^":"jI;a,b,c,$ti"},
jJ:{"^":"em;a,b,c,d,e,$ti",
f6:function(){var z=this.d
if(z!=null&&this.a<=0)J.fB(this.b,this.c,z,!1)},
q:{
a0:function(a,b,c,d,e){var z=c==null?null:W.fk(new W.jK(c),W.a8)
z=new W.jJ(0,a,b,z,!1,[e])
z.f6()
return z}}},
jK:{"^":"o:6;a",
$1:function(a){return this.a.$1(H.l(a,"$isa8"))}},
c0:{"^":"a;a",
e_:function(a){var z,y
z=$.$get$d4()
if(z.a===0){for(y=0;y<262;++y)z.O(0,C.N[y],W.lf())
for(y=0;y<12;++y)z.O(0,C.n[y],W.lg())}},
av:function(a){return $.$get$f_().N(0,W.bl(a))},
ag:function(a,b,c){var z,y,x
z=W.bl(a)
y=$.$get$d4()
x=y.j(0,H.h(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.d9(x.$4(a,b,c,this))},
$isas:1,
q:{
eZ:function(a){var z,y
z=W.dn(null)
y=window.location
z=new W.c0(new W.kk(z,y))
z.e_(a)
return z},
mQ:[function(a,b,c,d){H.l(a,"$isR")
H.G(b)
H.G(c)
H.l(d,"$isc0")
return!0},"$4","lf",16,0,24],
mR:[function(a,b,c,d){var z,y,x,w,v
H.l(a,"$isR")
H.G(b)
H.G(c)
z=H.l(d,"$isc0").a
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
return z},"$4","lg",16,0,24]}},
y:{"^":"a;$ti",
gP:function(a){return new W.dO(a,this.gn(a),-1,[H.bN(this,a,"y",0)])}},
e2:{"^":"a;a",
av:function(a){return C.a.cL(this.a,new W.hZ(a))},
ag:function(a,b,c){return C.a.cL(this.a,new W.hY(a,b,c))},
$isas:1},
hZ:{"^":"o:14;a",
$1:function(a){return H.l(a,"$isas").av(this.a)}},
hY:{"^":"o:14;a,b,c",
$1:function(a){return H.l(a,"$isas").ag(this.a,this.b,this.c)}},
kl:{"^":"a;",
e2:function(a,b,c,d){var z,y,x
this.a.a8(0,c)
z=b.c7(0,new W.km())
y=b.c7(0,new W.kn())
this.b.a8(0,z)
x=this.c
x.a8(0,C.P)
x.a8(0,y)},
av:function(a){return this.a.N(0,W.bl(a))},
ag:["dQ",function(a,b,c){var z,y
z=W.bl(a)
y=this.c
if(y.N(0,H.h(z)+"::"+b))return this.d.fv(c)
else if(y.N(0,"*::"+b))return this.d.fv(c)
else{y=this.b
if(y.N(0,H.h(z)+"::"+b))return!0
else if(y.N(0,"*::"+b))return!0
else if(y.N(0,H.h(z)+"::*"))return!0
else if(y.N(0,"*::*"))return!0}return!1}],
$isas:1},
km:{"^":"o:15;",
$1:function(a){return!C.a.N(C.n,H.G(a))}},
kn:{"^":"o:15;",
$1:function(a){return C.a.N(C.n,H.G(a))}},
kw:{"^":"kl;e,a,b,c,d",
ag:function(a,b,c){if(this.dQ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.N(0,b)
return!1},
q:{
f9:function(){var z,y,x,w,v
z=P.e
y=P.dX(C.m,z)
x=H.z(C.m,0)
w=H.k(new W.kx(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.kw(y,P.bV(null,null,null,z),P.bV(null,null,null,z),P.bV(null,null,null,z),null)
y.e2(null,new H.hH(C.m,w,[x,z]),v,null)
return y}}},
kx:{"^":"o:28;",
$1:function(a){return"TEMPLATE::"+H.h(H.G(a))}},
kv:{"^":"a;",
av:function(a){var z=J.L(a)
if(!!z.$iseg)return!1
z=!!z.$iscV
if(z&&W.bl(a)==="foreignObject")return!1
if(z)return!0
return!1},
ag:function(a,b,c){if(b==="is"||C.i.bq(b,"on"))return!1
return this.av(a)},
$isas:1},
dO:{"^":"a;a,b,c,0d,$ti",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fA(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gG:function(a){return this.d}},
as:{"^":"a;"},
kk:{"^":"a;a,b",$ismF:1},
ff:{"^":"a;a",
cc:function(a){new W.kJ(this).$2(a,null)},
aI:function(a,b){if(b==null)J.dm(a)
else b.removeChild(a)},
eX:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fD(a)
x=y.gcv().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aa(t)}v="element unprintable"
try{v=J.ab(a)}catch(t){H.aa(t)}try{u=W.bl(a)
this.eW(H.l(a,"$isR"),b,z,v,u,H.l(y,"$isa_"),H.G(x))}catch(t){if(H.aa(t) instanceof P.av)throw t
else{this.aI(a,b)
window
s="Removing corrupted element "+H.h(v)
if(typeof console!="undefined")window.console.warn(s)}}},
eW:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aI(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.av(a)){this.aI(a,b)
window
z="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.ag(a,"is",g)){this.aI(a,b)
window
z="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gV(f)
y=H.b(z.slice(0),[H.z(z,0)])
for(x=f.gV(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.i(y,x)
w=y[x]
if(!this.a.ag(a,J.fH(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.h(e)+" "+w+'="'+H.h(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$iseq)this.cc(a.content)},
$ismi:1},
kJ:{"^":"o:29;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.eX(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aI(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fE(z)}catch(w){H.aa(w)
v=H.l(z,"$isA")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.l(y,"$isA")}}},
jC:{"^":"n+fU;"},
jD:{"^":"n+u;"},
jE:{"^":"jD+y;"},
jF:{"^":"n+u;"},
jG:{"^":"jF+y;"},
jL:{"^":"n+u;"},
jM:{"^":"jL+y;"},
jY:{"^":"n+u;"},
jZ:{"^":"jY+y;"},
k4:{"^":"n+a4;"},
k5:{"^":"n+a4;"},
k6:{"^":"n+u;"},
k7:{"^":"k6+y;"},
k8:{"^":"n+u;"},
k9:{"^":"k8+y;"},
kc:{"^":"n+u;"},
kd:{"^":"kc+y;"},
kj:{"^":"n+a4;"},
f6:{"^":"a3+u;"},
f7:{"^":"f6+y;"},
ko:{"^":"n+u;"},
kp:{"^":"ko+y;"},
ks:{"^":"n+a4;"},
ky:{"^":"n+u;"},
kz:{"^":"ky+y;"},
fa:{"^":"a3+u;"},
fb:{"^":"fa+y;"},
kE:{"^":"n+u;"},
kF:{"^":"kE+y;"},
kL:{"^":"n+u;"},
kM:{"^":"kL+y;"},
kN:{"^":"n+u;"},
kO:{"^":"kN+y;"},
kP:{"^":"n+u;"},
kQ:{"^":"kP+y;"},
kR:{"^":"n+u;"},
kS:{"^":"kR+y;"},
kT:{"^":"n+u;"},
kU:{"^":"kT+y;"}}],["","",,P,{"^":"",
aJ:function(a){var z,y,x,w,v
if(a==null)return
z=P.dW(P.e,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.G(y[w])
z.O(0,v,a[v])}return z},
l5:function(a,b){var z={}
a.H(0,new P.l6(z))
return z},
dJ:function(){var z=$.dI
if(z==null){z=J.cw(window.navigator.userAgent,"Opera",0)
$.dI=z}return z},
h_:function(){var z,y
z=$.dF
if(z!=null)return z
y=$.dG
if(y==null){y=J.cw(window.navigator.userAgent,"Firefox",0)
$.dG=y}if(y)z="-moz-"
else{y=$.dH
if(y==null){y=!P.dJ()&&J.cw(window.navigator.userAgent,"Trident/",0)
$.dH=y}if(y)z="-ms-"
else z=P.dJ()?"-o-":"-webkit-"}$.dF=z
return z},
l6:{"^":"o:19;a",
$2:function(a,b){this.a[a]=b}},
hc:{"^":"cg;a,b",
gbA:function(){var z,y,x
z=this.b
y=H.aj(z,"u",0)
x=W.R
return new H.hF(new H.d2(z,H.k(new P.hd(),{func:1,ret:P.Q,args:[y]}),[y]),H.k(new P.he(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aY(this.gbA().a)},
j:function(a,b){var z=this.gbA()
return z.b.$1(J.cx(z.a,b))},
gP:function(a){var z=P.hC(this.gbA(),!1,W.R)
return new J.aw(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.R]},
$asf:function(){return[W.R]},
$asc:function(){return[W.R]}},
hd:{"^":"o:12;",
$1:function(a){return!!J.L(H.l(a,"$isA")).$isR}},
he:{"^":"o:43;",
$1:function(a){return H.j(H.l(a,"$isA"),"$isR")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ke:{"^":"a;$ti",
gaR:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.C(z+this.c,H.z(this,0))},
gbN:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bM(b,"$isa7",[P.X],"$asa7")
if(!z)return!1
z=this.a
y=J.bf(b)
x=y.gaB(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaT(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gaR(b)){if(typeof x!=="number")return x.F()
z=H.C(x+this.d,w)===y.gbN(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.aW(z)
x=this.b
w=J.aW(x)
if(typeof z!=="number")return z.F()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.C(x+this.d,v)
return P.k_(P.cn(P.cn(P.cn(P.cn(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"ke;aB:a>,aT:b>,ac:c>,ab:d>,$ti",q:{
ig:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.al()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.al()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",bU:{"^":"n;",$isbU:1,"%":"SVGLength"},m4:{"^":"k1;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bU]},
$isf:1,
$asf:function(){return[P.bU]},
$isc:1,
$asc:function(){return[P.bU]},
$asy:function(){return[P.bU]},
"%":"SVGLengthList"},bX:{"^":"n;",$isbX:1,"%":"SVGNumber"},mj:{"^":"kb;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bX]},
$isf:1,
$asf:function(){return[P.bX]},
$isc:1,
$asc:function(){return[P.bX]},
$asy:function(){return[P.bX]},
"%":"SVGNumberList"},mm:{"^":"n;0n:length=","%":"SVGPointList"},eg:{"^":"cV;",$iseg:1,"%":"SVGScriptElement"},mu:{"^":"ku;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asu:function(){return[P.e]},
$isf:1,
$asf:function(){return[P.e]},
$isc:1,
$asc:function(){return[P.e]},
$asy:function(){return[P.e]},
"%":"SVGStringList"},cV:{"^":"R;",
gcN:function(a){return new P.hc(a,new W.ai(a))},
a3:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.as])
C.a.h(z,W.eZ(null))
C.a.h(z,W.f9())
C.a.h(z,new W.kv())
c=new W.ff(new W.e2(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).fH(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ai(w)
u=z.gam(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscV:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bZ:{"^":"n;",$isbZ:1,"%":"SVGTransform"},mD:{"^":"kH;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bZ]},
$isf:1,
$asf:function(){return[P.bZ]},
$isc:1,
$asc:function(){return[P.bZ]},
$asy:function(){return[P.bZ]},
"%":"SVGTransformList"},k0:{"^":"n+u;"},k1:{"^":"k0+y;"},ka:{"^":"n+u;"},kb:{"^":"ka+y;"},kt:{"^":"n+u;"},ku:{"^":"kt+y;"},kG:{"^":"n+u;"},kH:{"^":"kG+y;"}}],["","",,P,{"^":"",lI:{"^":"n;0n:length=","%":"AudioBuffer"},lJ:{"^":"jA;",
j:function(a,b){return P.aJ(a.get(H.G(b)))},
H:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.e,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gV:function(a){var z=H.b([],[P.e])
this.H(a,new P.fJ(z))
return z},
gn:function(a){return a.size},
$asa4:function(){return[P.e,null]},
$isa_:1,
$asa_:function(){return[P.e,null]},
"%":"AudioParamMap"},fJ:{"^":"o:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},lK:{"^":"a3;0n:length=","%":"AudioTrackList"},fK:{"^":"a3;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mk:{"^":"fK;0n:length=","%":"OfflineAudioContext"},jA:{"^":"n+a4;"}}],["","",,P,{"^":"",ee:{"^":"n;",$isee:1,"%":"WebGLRenderingContext"},j7:{"^":"n;",$isj7:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ms:{"^":"kr;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return P.aJ(a.item(b))},
A:function(a,b){return this.j(a,b)},
$asu:function(){return[[P.a_,,,]]},
$isf:1,
$asf:function(){return[[P.a_,,,]]},
$isc:1,
$asc:function(){return[[P.a_,,,]]},
$asy:function(){return[[P.a_,,,]]},
"%":"SQLResultSetRowList"},kq:{"^":"n+u;"},kr:{"^":"kq+y;"}}],["","",,O,{"^":"",aZ:{"^":"a;0a,0b,0c,0d,$ti",
ci:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cd:function(a,b,c){var z=H.aj(this,"aZ",0)
H.k(b,{func:1,ret:P.Q,args:[[P.f,z]]})
z={func:1,ret:-1,args:[P.E,[P.f,z]]}
H.k(a,z)
H.k(c,z)
this.b=b
this.c=a
this.d=c},
bp:function(a,b){return this.cd(a,null,b)},
eI:function(a){var z
H.w(a,"$isf",[H.aj(this,"aZ",0)],"$asf")
z=this.b
if(z!=null)return z.$1(a)
return!0},
en:function(a,b){var z
H.w(b,"$isf",[H.aj(this,"aZ",0)],"$asf")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gP:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.z(z,0)])},
A:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aj(this,"aZ",0)
H.C(b,z)
z=[z]
if(this.eI(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.en(x,H.b([b],z))}},
$isf:1,
q:{
cD:function(a){var z=new O.aZ([a])
z.ci(a)
return z}}},cO:{"^":"a;0a,0b",
gn:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.al()
this.b=z}return z},
dX:function(a){var z=this.b
if(!(z==null))z.L(a)},
an:function(){return this.dX(null)},
gR:function(a){var z=this.a
if(z.length>0)return C.a.gbl(z)
else return V.cP()},
dn:function(a){var z=this.a
if(a==null)C.a.h(z,V.cP())
else C.a.h(z,a)
this.an()},
c1:function(){var z=this.a
if(z.length>0){z.pop()
this.an()}}}}],["","",,E,{"^":"",cy:{"^":"a;"},aN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0T:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sce:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gD().K(0,this.gdj())
y=this.c
if(y!=null)y.gD().h(0,this.gdj())
x=new D.S("shape",z,this.c,this,[F.ei])
x.b=!0
this.a5(x)}},
saN:function(a){var z,y
if(!J.T(this.r,a)){z=this.r
if(z!=null)z.gD().K(0,this.gdi())
if(a!=null)a.gD().h(0,this.gdi())
this.r=a
y=new D.S("mover",z,a,this,[U.bW])
y.b=!0
this.a5(y)}},
bo:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.d
z.sdA(z.a+z.d*b.y)
z.sdl(0,z.b+z.e*b.y)
z.sdr(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.az(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.k(0,V.az(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.k(0,V.az(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.ak(0)}u=z.x}else u=null
if(!J.T(u,this.x)){t=this.x
this.x=u
s=new D.S("matrix",t,u,this,[V.an])
s.b=!0
this.a5(s)}for(z=this.y.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.w();)z.d.bo(0,b)},
aD:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gR(z))
else C.a.h(z.a,y.k(0,z.gR(z)))
z.an()
a.dq(this.f)
z=a.dy
x=(z&&C.a).gbl(z)
if(x!=null&&this.d!=null)x.hn(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.w();)z.d.aD(a)
a.dm()
a.dx.c1()},
a5:function(a){var z=this.z
if(!(z==null))z.L(a)},
X:function(){return this.a5(null)},
h7:[function(a){H.l(a,"$isF")
this.e=null
this.a5(a)},function(){return this.h7(null)},"ia","$1","$0","gdj",0,2,0],
h6:[function(a){this.a5(H.l(a,"$isF"))},function(){return this.h6(null)},"i9","$1","$0","gdi",0,2,0],
h4:[function(a){this.a5(H.l(a,"$isF"))},function(){return this.h4(null)},"i7","$1","$0","gdh",0,2,0],
i6:[function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isf",[E.aN],"$asf")
for(z=b.length,y=this.gdh(),x={func:1,ret:-1,args:[D.F]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gT()==null){t=new D.b1()
t.d=0
u.sT(t)}t=u.gT()
t.toString
H.k(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.X()},"$2","gh3",8,0,7],
i8:[function(a,b){var z,y,x,w,v
H.w(b,"$isf",[E.aN],"$asf")
for(z=b.length,y=this.gdh(),x=0;x<b.length;b.length===z||(0,H.x)(b),++x){w=b[x]
if(w!=null){if(w.gT()==null){v=new D.b1()
v.d=0
w.sT(v)}w.gT().K(0,y)}}this.X()},"$2","gh5",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaA:1},ik:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dT:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aM(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cO()
y=[V.an]
z.a=H.b([],y)
z.gD().h(0,new E.im(this))
this.cy=z
z=new O.cO()
z.a=H.b([],y)
z.gD().h(0,new E.io(this))
this.db=z
z=new O.cO()
z.a=H.b([],y)
z.gD().h(0,new E.ip(this))
this.dx=z
z=H.b([],[O.cW])
this.dy=z
C.a.h(z,null)
this.fr=new H.b3(0,0,[P.e,A.eh])},
ghh:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gR(z)
y=this.db
y=z.k(0,y.gR(y))
this.z=y
z=y}return z},
dq:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbl(z):a;(z&&C.a).h(z,y)},
dm:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
il:function(a,b){var z=new E.ik(a,b)
z.dT(a,b)
return z}}},im:{"^":"o:8;a",
$1:function(a){var z
H.l(a,"$isF")
z=this.a
z.z=null
z.ch=null}},io:{"^":"o:8;a",
$1:function(a){var z
H.l(a,"$isF")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ip:{"^":"o:8;a",
$1:function(a){var z
H.l(a,"$isF")
z=this.a
z.ch=null
z.cx=null}},iR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0T:x@,0y,0z,0Q,0ch,0cx,0cy",
dZ:[function(a){var z
H.l(a,"$isF")
z=this.x
if(!(z==null))z.L(a)
this.hp()},function(){return this.dZ(null)},"dY","$1","$0","gcj",0,2,0],
gfS:function(){var z,y,x
z=Date.now()
y=C.h.U(P.dK(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aM(z,!1)
return x/y},
cC:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.B(z)
x=C.c.dd(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.c.dd(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.et(C.l,this.gho())}},
hp:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.iT(this),{func:1,ret:-1,args:[P.X]})
C.y.ej(z)
C.y.eS(z,W.fk(y,P.X))}},"$0","gho",0,0,2],
hm:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cC()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aM(w,!1)
x.y=P.dK(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.an()
w=x.db
C.a.sn(w.a,0)
w.an()
w=x.dx
C.a.sn(w.a,0)
w.an()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aD(this.e)}x=this.z
if(!(x==null))x.L(null)}catch(v){z=H.aa(v)
y=H.bg(v)
P.di("Error: "+H.h(z))
P.di("Stack: "+H.h(y))
throw H.d(z)}},
q:{
iS:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscB)return E.es(a,!0,!0,!0,!1)
y=W.dy(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcN(a).h(0,y)
w=E.es(y,!0,!0,!0,!1)
w.a=a
return w},
es:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iR()
y=P.hA(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.e,null)
x=C.k.cb(a,"webgl",y)
x=H.l(x==null?C.k.cb(a,"experimental-webgl",y):x,"$isee")
if(x==null)H.t(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.il(x,a)
w=new T.iN(x)
w.b=H.a1(x.getParameter(3379))
w.c=H.a1(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jd(a)
v=new X.hv()
v.c=new X.bs(!1,!1,!1)
v.d=P.bV(null,null,null,P.E)
w.b=v
v=new X.hT(w)
v.f=0
v.r=new V.V(0,0)
v.x=new V.V(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hD(w)
v.r=0
v.x=new V.V(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iX(w)
v.e=0
v.f=new V.V(0,0)
v.r=new V.V(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.em,P.a]])
w.z=v
u=document
t=W.ao
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a0(u,"contextmenu",H.k(w.gev(),s),!1,t))
v=w.z
r=W.a8
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.k(w.gey(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.k(w.ger(),q),!1,r))
v=w.z
p=W.bq
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.k(w.geA(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.k(w.gez(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.k(w.geD(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.k(w.geF(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.k(w.geE(),s),!1,t))
p=w.z
o=W.bG;(p&&C.a).h(p,W.a0(a,H.G(W.h5(a)),H.k(w.geG(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.k(w.gew(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.k(w.gex(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.k(w.geH(),q),!1,r))
r=w.z
q=W.b7
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.k(w.geN(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.k(w.geL(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.k(w.geM(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aM(Date.now(),!1)
z.cy=0
z.cC()
return z}}},iT:{"^":"o:32;a",
$1:function(a){var z
H.lu(a)
z=this.a
if(z.ch){z.ch=!1
z.hm()}}}}],["","",,Z,{"^":"",eU:{"^":"a;a,b",q:{
d1:function(a,b,c){var z
H.w(c,"$isc",[P.E],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bI(c)),35044)
a.bindBuffer(b,null)
return new Z.eU(b,z)}}},du:{"^":"cy;a,b,c,d,e",
b3:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aa(y)
x=P.q('Failed to bind buffer attribute "'+J.ab(this.a)+'": '+H.h(z))
throw H.d(x)}},
i:function(a){return"["+J.ab(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}},jr:{"^":"a;a",$islL:1},dv:{"^":"a;a,0b,c,d",
aA:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b3:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b3(a)},
dz:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aD:function(a){var z,y,x,w,v
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
z=[P.e]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(y,", ")+"\nAttrs:   "+C.a.m(u,", ")},
$ismx:1},ce:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b5(this.c)+"'")+"]"}},b8:{"^":"a;a",
gcf:function(a){var z,y
z=this.a
y=(z&$.$get$aF().a)!==0?3:0
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=2
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$bE().a)!==0)y+=3
if((z&$.$get$bF().a)!==0)y+=4
if((z&$.$get$b9().a)!==0)++y
return(z&$.$get$aC().a)!==0?y+4:y},
fw:function(a){var z,y,x
z=$.$get$aF()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b9()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eT()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b8))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.e])
y=this.a
if((y&$.$get$aF().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aH().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bE().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bF().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b9().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.m(z,"|")},
q:{
ah:function(a){return new Z.b8(a)}}}}],["","",,D,{"^":"",fO:{"^":"a;"},b1:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.F]}
H.k(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.F]})
z=this.a
z=z==null?null:C.a.N(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).K(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.N(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).K(z,b)||y}return y},
L:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.F(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.H(y,new D.h9(z))
y=this.b
if(!(y==null))C.a.H(y,new D.ha(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
hq:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.L(y)}}},
ak:function(a){return this.hq(a,!0,!1)},
q:{
al:function(){var z=new D.b1()
z.d=0
return z}}},h9:{"^":"o:18;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.F]})
z=this.a.a
z.b
a.$1(z)}},ha:{"^":"o:18;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.F]})
z=this.a.a
z.b
a.$1(z)}},F:{"^":"a;a,0b"},cF:{"^":"F;c,d,a,0b,$ti"},cG:{"^":"F;c,d,a,0b,$ti"},S:{"^":"F;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}}],["","",,X,{"^":"",dw:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)},
q:{"^":"lM<"}},dS:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}},hu:{"^":"F;c,a,0b"},hv:{"^":"a;0a,0b,0c,0d",
hd:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.hu(a,this)
y.b=!0
return z.L(y)},
h9:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}},hD:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aY:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aM(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.V(y.a+x*w,y.b+v*u)
u=this.a.gbR()
s=new X.e1(a,new V.V(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c0:function(a,b){this.r=a.a
return!1},
aP:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dG()
if(typeof z!=="number")return z.dB()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.L(this.aY(a,b))
return!0},
aO:function(a,b){return!1},
he:function(a){return!1},
eC:function(a,b,c){return}},bs:{"^":"a;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bs))return!1
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
return z+(this.c?"Shift+":"")}},e1:{"^":"e8;x,y,z,Q,ch,c,d,e,a,0b"},hT:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
el:function(a,b,c){var z,y,x
z=new P.aM(Date.now(),!1)
y=this.a.gbR()
x=new X.e1(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c0:function(a,b){this.f=a.a
return!1},
aP:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dG()
if(typeof z!=="number")return z.dB()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.L(this.el(a,b,!0))
return!0},
aO:function(a,b){return!1},
hf:function(a,b){return!1}},e8:{"^":"F;"},iW:{"^":"e8;x,y,z,Q,ch,c,d,e,a,0b"},iX:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aY:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.V],"$asc")
z=new P.aM(Date.now(),!1)
y=a.length>0?a[0]:new V.V(0,0)
x=this.a.gbR()
w=new X.iW(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hc:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.b
if(z==null)return!1
z.L(this.aY(a,!0))
return!0},
ha:function(a){var z
H.w(a,"$isc",[V.V],"$asc")
z=this.c
if(z==null)return!1
z.L(this.aY(a,!0))
return!0},
hb:function(a){H.w(a,"$isc",[V.V],"$asc")
return!1}},jd:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbR:function(){var z=this.a
return V.ed(0,0,(z&&C.k).gcO(z).c,C.k.gcO(z).d)},
ct:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dS(z,new X.bs(y,a.altKey,a.shiftKey))},
au:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bs(y,a.altKey,a.shiftKey)},
bI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bs(y,a.altKey,a.shiftKey)},
af:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.W()
v=z.top
if(typeof x!=="number")return x.W()
return new V.V(y-w,x-v)},
aH:function(a){return new V.bD(a.movementX,a.movementY)},
bE:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.V])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.c.a_(u.pageX)
C.c.a_(u.pageY)
s=z.left
C.c.a_(u.pageX)
C.a.h(y,new V.V(t-s,C.c.a_(u.pageY)-z.top))}return y},
ad:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dw(z,new X.bs(y,a.altKey,a.shiftKey))},
bB:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.W()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.W()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
hO:[function(a){this.f=!0},"$1","gey",4,0,6],
hI:[function(a){this.f=!1},"$1","ger",4,0,6],
hL:[function(a){H.l(a,"$isao")
if(this.f&&this.bB(a))a.preventDefault()},"$1","gev",4,0,3],
hQ:[function(a){var z
H.l(a,"$isbq")
if(!this.f)return
z=this.ct(a)
if(this.b.hd(z))a.preventDefault()},"$1","geA",4,0,11],
hP:[function(a){var z
H.l(a,"$isbq")
if(!this.f)return
z=this.ct(a)
this.b.h9(z)},"$1","gez",4,0,11],
hS:[function(a){var z,y,x,w
H.l(a,"$isao")
z=this.a
z.focus()
this.f=!0
this.au(a)
if(this.x){y=this.ad(a)
x=this.aH(a)
if(this.d.c0(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ad(a)
w=this.af(a)
if(this.c.c0(y,w))a.preventDefault()},"$1","geD",4,0,3],
hU:[function(a){var z,y,x
H.l(a,"$isao")
this.au(a)
z=this.ad(a)
if(this.x){y=this.aH(a)
if(this.d.aP(z,y))a.preventDefault()
return}if(this.r)return
x=this.af(a)
if(this.c.aP(z,x))a.preventDefault()},"$1","geF",4,0,3],
hN:[function(a){var z,y,x
H.l(a,"$isao")
if(!this.bB(a)){this.au(a)
z=this.ad(a)
if(this.x){y=this.aH(a)
if(this.d.aP(z,y))a.preventDefault()
return}if(this.r)return
x=this.af(a)
if(this.c.aP(z,x))a.preventDefault()}},"$1","gex",4,0,3],
hT:[function(a){var z,y,x
H.l(a,"$isao")
this.au(a)
z=this.ad(a)
if(this.x){y=this.aH(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.af(a)
if(this.c.aO(z,x))a.preventDefault()},"$1","geE",4,0,3],
hM:[function(a){var z,y,x
H.l(a,"$isao")
if(!this.bB(a)){this.au(a)
z=this.ad(a)
if(this.x){y=this.aH(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.af(a)
if(this.c.aO(z,x))a.preventDefault()}},"$1","gew",4,0,3],
hV:[function(a){var z,y
H.l(a,"$isbG")
this.au(a)
z=new V.bD((a&&C.x).gfJ(a),C.x.gfK(a)).B(0,180)
if(this.x){if(this.d.he(z))a.preventDefault()
return}if(this.r)return
y=this.af(a)
if(this.c.hf(z,y))a.preventDefault()},"$1","geG",4,0,35],
hW:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ad(this.y)
v=this.af(this.y)
this.d.eC(w,v,x)}},"$1","geH",4,0,6],
i0:[function(a){var z
H.l(a,"$isb7")
this.a.focus()
this.f=!0
this.bI(a)
z=this.bE(a)
if(this.e.hc(z))a.preventDefault()},"$1","geN",4,0,10],
hZ:[function(a){var z
H.l(a,"$isb7")
this.bI(a)
z=this.bE(a)
if(this.e.ha(z))a.preventDefault()},"$1","geL",4,0,10],
i_:[function(a){var z
H.l(a,"$isb7")
this.bI(a)
z=this.bE(a)
if(this.e.hb(z))a.preventDefault()},"$1","geM",4,0,10]}}],["","",,D,{"^":"",ca:{"^":"a;0a,0b,0c,0d",
ao:[function(a){var z
H.l(a,"$isF")
z=this.d
if(!(z==null))z.L(a)},function(){return this.ao(null)},"hA","$1","$0","ge1",0,2,0],
$isW:1,
$isaA:1},W:{"^":"a;",$isaA:1},hw:{"^":"aZ;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
ao:function(a){var z=this.Q
if(!(z==null))z.L(a)},
eB:[function(a){var z
H.l(a,"$isF")
z=this.ch
if(!(z==null))z.L(a)},function(){return this.eB(null)},"hR","$1","$0","gcz",0,2,0],
hX:[function(a){var z,y,x
H.w(a,"$isf",[D.W],"$asf")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.e0(x))return!1}return!0},"$1","geJ",4,0,36],
hF:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.W
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcz(),w={func:1,ret:-1,args:[D.F]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.l(b[u],"$isW")
if(t instanceof D.ca)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b1()
s.d=0
t.d=s}H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cF(a,b,this,[z])
z.b=!0
this.ao(z)},"$2","geo",8,0,20],
hY:[function(a,b){var z,y,x,w,v,u
z=D.W
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.gcz(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=H.l(b[w],"$isW")
if(v instanceof D.ca)C.a.K(this.e,v)
u=v.d
if(u==null){u=new D.b1()
u.d=0
v.d=u}u.K(0,x)}z=new D.cG(a,b,this,[z])
z.b=!0
this.ao(z)},"$2","geK",8,0,20],
e0:function(a){var z=C.a.N(this.e,a)
return z},
$asf:function(){return[D.W]},
$asaZ:function(){return[D.W]}},i5:{"^":"a;",$isW:1,$isaA:1},iF:{"^":"a;",$isW:1,$isaA:1},iO:{"^":"a;",$isW:1,$isaA:1},iP:{"^":"a;",$isW:1,$isaA:1},iQ:{"^":"a;",$isW:1,$isaA:1}}],["","",,V,{"^":"",
lO:[function(a,b){if(typeof b!=="number")return b.W()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","hQ",8,0,34],
dk:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.dF(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.i.ai("null",c)
return C.i.ai(C.c.dv($.m.$2(a,0)?0:a,b),c+b+1)},
be:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.v],"$asc")
z=H.b([],[P.e])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.O(z,u,C.i.ai(z[u],x))}return z},
Y:{"^":"a;a,b,c",
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
return new V.Y(z,y,x)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bO:{"^":"a;a,b,c,d",
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
return new V.bO(z,y,x,w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
ci:{"^":"a;a,b,c,d,e,f,r,x,y",
a0:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.l(a5,"$isci")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.c.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.c.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.c.k(t,s)
q=a5.b
p=C.c.k(z,q)
o=a5.e
n=C.c.k(w,o)
m=a5.x
l=C.c.k(t,m)
k=a5.c
z=C.c.k(z,k)
j=a5.f
w=C.c.k(w,j)
i=a5.y
t=C.c.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.c.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.c.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.c.k(d,s)
b=C.c.k(h,q)
a=C.c.k(f,o)
a0=C.c.k(d,m)
h=C.c.k(h,k)
f=C.c.k(f,j)
d=C.c.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.c.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.c.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.ci(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.k(a3,s),C.c.k(a1,q)+C.c.k(a2,o)+C.c.k(a3,m),C.c.k(a1,k)+C.c.k(a2,j)+C.c.k(a3,i))},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ci))return!1
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
z=[P.v]
y=V.be(H.b([this.a,this.d,this.r],z),3,0)
x=V.be(H.b([this.b,this.e,this.x],z),3,0)
w=V.be(H.b([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.i(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.i(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.i(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.i(y,1)
s=" "+y[1]+", "
if(1>=u)return H.i(x,1)
s=s+x[1]+", "
if(1>=t)return H.i(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.i(y,2)
z=" "+y[2]+", "
if(2>=u)return H.i(x,2)
z=z+x[2]+", "
if(2>=t)return H.i(w,2)
return s+(z+w[2]+"]")}},
an:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a0:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
df:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.B(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.B(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.B(u)
t=this.c
if(typeof t!=="number")return t.k()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.B(r)
q=this.d
if(typeof q!=="number")return q.k()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.B(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.B(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.B(g)
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.B(d)
c=this.ch
if(typeof c!=="number")return c.k()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.cP()
a3=1/a2
a4=-w
a5=-i
return V.az((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.l(a7,"$isan")
z=this.a
y=a7.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.B(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.B(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.k()
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
return V.az(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.M(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.B(t)
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return H.B(p)
o=this.y
if(typeof o!=="number")return o.k()
n=this.z
if(typeof n!=="number")return n.k()
m=this.Q
if(typeof m!=="number")return m.k()
l=this.ch
if(typeof l!=="number")return H.B(l)
return new V.a5(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
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
i:function(a){return this.J()},
de:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.be(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.be(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.be(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.be(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
J:function(){return this.de("",3,0)},
v:function(a){return this.de(a,3,0)},
q:{
az:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cP:function(){return V.az(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
e0:function(a,b,c){var z,y,x,w,v
z=c.B(0,Math.sqrt(c.I(c)))
y=b.ah(z)
x=y.B(0,Math.sqrt(y.I(y)))
w=z.ah(x)
v=new V.M(a.a,a.b,a.c)
return V.az(x.a,w.a,z.a,x.aE(0).I(v),x.b,w.b,z.b,w.aE(0).I(v),x.c,w.c,z.c,z.aE(0).I(v),0,0,0,1)}}},
V:{"^":"a;a,b",
k:function(a,b){return new V.V(this.a*b,this.b*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
a5:{"^":"a;a,b,c",
F:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
W:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
ec:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ec))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
q:{
ed:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ec(a,b,c,d)}}},
bD:{"^":"a;a,b",
fX:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return Math.sqrt(z*z+y*y)},"$0","gn",1,0,21],
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.bD(z*b,y*b)},
B:function(a,b){var z,y
if($.m.$2(b,0))return new V.bD(0,0)
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.bD(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bD))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
M:{"^":"a;a,b,c",
fX:[function(a){return Math.sqrt(this.I(this))},"$0","gn",1,0,21],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ah:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.M(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
aE:function(a){return new V.M(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if($.m.$2(b,0))return new V.M(0,0,0)
return new V.M(this.a/b,this.b/b,this.c/b)},
dg:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dA:{"^":"bW;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.al()
this.b=z}return z},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dA))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
q:{
dB:function(a){var z=new U.dA()
z.a=a
return z}}},bW:{"^":"fO;"},ef:{"^":"bW;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gD:function(){var z=this.y
if(z==null){z=D.al()
this.y=z}return z},
at:function(a){var z=this.y
if(!(z==null))z.L(a)},
sdA:function(a){var z,y
a=V.dk(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.S("yaw",y,a,this,[P.v])
z.b=!0
this.at(z)}},
sdl:function(a,b){var z,y
b=V.dk(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.S("pitch",y,b,this,[P.v])
z.b=!0
this.at(z)}},
sdr:function(a){var z,y
a=V.dk(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.S("roll",y,a,this,[P.v])
z.b=!0
this.at(z)}},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ef))return!1
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
i:function(a){return"Rotater: ["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"], ["+V.K(this.d,3,0)+", "+V.K(this.e,3,0)+", "+V.K(this.f,3,0)+"]"}}}],["","",,M,{"^":"",h7:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ap:[function(a){var z
H.l(a,"$isF")
z=this.x
if(!(z==null))z.L(a)},function(){return this.ap(null)},"hB","$1","$0","ga7",0,2,0],
hJ:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aN
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.ga7(),w={func:1,ret:-1,args:[D.F]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gT()==null){s=new D.b1()
s.d=0
t.sT(s)}s=t.gT()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cF(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","ges",8,0,7],
hK:[function(a,b){var z,y,x,w,v,u
z=E.aN
H.w(b,"$isf",[z],"$asf")
for(y=b.length,x=this.ga7(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null){if(v.gT()==null){u=new D.b1()
u.d=0
v.sT(u)}v.gT().K(0,x)}}z=new D.cG(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","geu",8,0,7],
sdt:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gD().K(0,this.ga7())
y=this.c
this.c=a
if(a!=null)a.gD().h(0,this.ga7())
z=new D.S("technique",y,this.c,this,[O.cW])
z.b=!0
this.ap(z)}},
gD:function(){var z=this.x
if(z==null){z=D.al()
this.x=z}return z},
aD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dq(this.c)
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
u=C.c.a_(v.a*x)
if(typeof w!=="number")return H.B(w)
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
s=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.az(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dn(n)
y=$.e6
if(y==null){y=V.e0(new V.a5(0,0,0),new V.M(0,1,0),new V.M(0,0,-1))
$.e6=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.k(0,m)}a.db.dn(m)
z=this.c
if(z!=null)z.bo(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.w();)z.d.bo(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.w();)z.d.aD(a)
this.a.toString
a.cy.c1()
a.db.c1()
this.b.toString
a.dm()},
$ismo:1}}],["","",,A,{"^":"",dq:{"^":"a;a,b,c"},fI:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fM:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fL:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hK:{"^":"eh;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aa,0a4,0b6,0cS,0b7,0b8,0cT,0cU,0b9,0ba,0cV,0cW,0bb,0bc,0cX,0cY,0bd,0cZ,0d_,0be,0d0,0d1,0bf,0bg,0bh,0d2,0d3,0bi,0bj,0d4,0d5,0bk,0d6,0bU,0d7,0bV,0d8,0bW,0d9,0bX,0da,0bY,0dc,0bZ,a,b,0c,0d,0e,0f,0r,0x,0y",
dS:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.by("")
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
a2.f8(z)
a2.ff(z)
a2.f9(z)
a2.fn(z)
a2.fo(z)
a2.fh(z)
a2.ft(z)
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
z=new P.by("")
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
x.fc(z)
x.f7(z)
x.fa(z)
x.fd(z)
x.fl(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.fj(z)
x.fk(z)}x.fg(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
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
p=H.b([],[P.e])
if(x.b!==C.b)C.a.h(p,"ambient()")
if(x.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.m(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.fb(z)
x.fi(z)
x.fm(z)
x.fp(z)
x.fq(z)
x.fs(z)
x.fe(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.e])
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
n="vec4("+C.a.m(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.cu(s,35633)
this.f=this.cu(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.d9(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.t(P.q("Failed to link shader: "+H.h(m)))}this.f1()
this.f3()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.j(this.y.p(0,"invViewMat"),"$isaB")
if(y)this.dy=H.j(this.y.p(0,"objMat"),"$isaB")
if(w)this.fr=H.j(this.y.p(0,"viewObjMat"),"$isaB")
this.fy=H.j(this.y.p(0,"projViewObjMat"),"$isaB")
if(a2.x2)this.k1=H.j(this.y.p(0,"txt2DMat"),"$isd_")
if(a2.y1)this.k2=H.j(this.y.p(0,"txtCubeMat"),"$isaB")
if(a2.y2)this.k3=H.j(this.y.p(0,"colorMat"),"$isaB")
this.r1=H.b([],[A.aB])
y=a2.aa
if(y>0){this.k4=H.l(this.y.p(0,"bendMatCount"),"$isI")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.t(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaB"))}}y=a2.a
if(y!==C.b){this.r2=H.j(this.y.p(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.rx=H.j(this.y.p(0,"emissionTxt"),"$isae")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$isI")
break
case C.e:this.ry=H.j(this.y.p(0,"emissionTxt"),"$isaf")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$isI")
break}}y=a2.b
if(y!==C.b){this.x2=H.j(this.y.p(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.y1=H.j(this.y.p(0,"ambientTxt"),"$isae")
this.aa=H.j(this.y.p(0,"nullAmbientTxt"),"$isI")
break
case C.e:this.y2=H.j(this.y.p(0,"ambientTxt"),"$isaf")
this.aa=H.j(this.y.p(0,"nullAmbientTxt"),"$isI")
break}}y=a2.c
if(y!==C.b){this.a4=H.j(this.y.p(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.b6=H.j(this.y.p(0,"diffuseTxt"),"$isae")
this.b7=H.j(this.y.p(0,"nullDiffuseTxt"),"$isI")
break
case C.e:this.cS=H.j(this.y.p(0,"diffuseTxt"),"$isaf")
this.b7=H.j(this.y.p(0,"nullDiffuseTxt"),"$isI")
break}}y=a2.d
if(y!==C.b){this.b8=H.j(this.y.p(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.cT=H.j(this.y.p(0,"invDiffuseTxt"),"$isae")
this.b9=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$isI")
break
case C.e:this.cU=H.j(this.y.p(0,"invDiffuseTxt"),"$isaf")
this.b9=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$isI")
break}}y=a2.e
if(y!==C.b){this.bc=H.j(this.y.p(0,"shininess"),"$isU")
this.ba=H.j(this.y.p(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.cV=H.j(this.y.p(0,"specularTxt"),"$isae")
this.bb=H.j(this.y.p(0,"nullSpecularTxt"),"$isI")
break
case C.e:this.cW=H.j(this.y.p(0,"specularTxt"),"$isaf")
this.bb=H.j(this.y.p(0,"nullSpecularTxt"),"$isI")
break}}switch(a2.f){case C.b:break
case C.f:break
case C.d:this.cX=H.j(this.y.p(0,"bumpTxt"),"$isae")
this.bd=H.j(this.y.p(0,"nullBumpTxt"),"$isI")
break
case C.e:this.cY=H.j(this.y.p(0,"bumpTxt"),"$isaf")
this.bd=H.j(this.y.p(0,"nullBumpTxt"),"$isI")
break}if(a2.dy){this.cZ=H.j(this.y.p(0,"envSampler"),"$isaf")
this.d_=H.j(this.y.p(0,"nullEnvTxt"),"$isI")
y=a2.r
if(y!==C.b){this.be=H.j(this.y.p(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.d0=H.j(this.y.p(0,"reflectTxt"),"$isae")
this.bf=H.j(this.y.p(0,"nullReflectTxt"),"$isI")
break
case C.e:this.d1=H.j(this.y.p(0,"reflectTxt"),"$isaf")
this.bf=H.j(this.y.p(0,"nullReflectTxt"),"$isI")
break}}y=a2.x
if(y!==C.b){this.bg=H.j(this.y.p(0,"refraction"),"$isU")
this.bh=H.j(this.y.p(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.d:this.d2=H.j(this.y.p(0,"refractTxt"),"$isae")
this.bi=H.j(this.y.p(0,"nullRefractTxt"),"$isI")
break
case C.e:this.d3=H.j(this.y.p(0,"refractTxt"),"$isaf")
this.bi=H.j(this.y.p(0,"nullRefractTxt"),"$isI")
break}}}y=a2.y
if(y!==C.b){this.bj=H.j(this.y.p(0,"alpha"),"$isU")
switch(y){case C.b:break
case C.f:break
case C.d:this.d4=H.j(this.y.p(0,"alphaTxt"),"$isae")
this.bk=H.j(this.y.p(0,"nullAlphaTxt"),"$isI")
break
case C.e:this.d5=H.j(this.y.p(0,"alphaTxt"),"$isaf")
this.bk=H.j(this.y.p(0,"nullAlphaTxt"),"$isI")
break}}this.bU=H.b([],[A.eJ])
this.bV=H.b([],[A.eK])
this.bW=H.b([],[A.eL])
this.bX=H.b([],[A.eM])
this.bY=H.b([],[A.eN])
this.bZ=H.b([],[A.eO])
if(a2.k2){y=a2.z
if(y>0){this.d6=H.l(this.y.p(0,"dirLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isH")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isH")
x=this.bU;(x&&C.a).h(x,new A.eJ(l,k,j))}}y=a2.Q
if(y>0){this.d7=H.l(this.y.p(0,"pntLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isH")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isH")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isH")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isU")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isU")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isU")
x=this.bV;(x&&C.a).h(x,new A.eK(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.d8=H.l(this.y.p(0,"spotLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isH")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isH")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isH")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isH")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isU")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isU")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isU")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isU")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isU")
x=this.bW;(x&&C.a).h(x,new A.eL(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.d9=H.l(this.y.p(0,"txtDirLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isH")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isH")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isH")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isH")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isH")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isI")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isae")
x=this.bX;(x&&C.a).h(x,new A.eM(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.da=H.l(this.y.p(0,"txtPntLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isH")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isH")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isd_")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isH")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isI")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isU")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isU")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isU")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isaf")
x=this.bY;(x&&C.a).h(x,new A.eN(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dc=H.l(this.y.p(0,"txtSpotLightCount"),"$isI")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isH")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isH")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isH")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isH")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isH")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isI")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isH")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isU")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isU")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isU")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isU")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isU")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.t(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isae")
x=this.bZ;(x&&C.a).h(x,new A.eO(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a2:function(a,b,c){b.a.uniform1i(b.d,1)},
Y:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
hJ:function(a,b){var z,y
z=a.a4
y=new A.hK(b,z)
y.dV(b,z)
y.dS(a,b)
return y}}},hN:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aa,a4,b6",
f8:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aa+"];\n"
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
ff:function(a){var z
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
f9:function(a){var z
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
fn:function(a){var z,y
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
fo:function(a){var z,y
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
fh:function(a){var z
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
ft:function(a){var z
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
ae:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.aW(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fc:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ae(a,z,"emission")
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
f7:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ae(a,z,"ambient")
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
fa:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ae(a,z,"diffuse")
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
fd:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ae(a,z,"invDiffuse")
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
fl:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ae(a,z,"specular")
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
fg:function(a){var z,y
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
fj:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ae(a,z,"reflect")
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
fk:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ae(a,z,"refract")
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
fb:function(a){var z,y
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
fi:function(a){var z,y
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
fm:function(a){var z,y
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
fp:function(a){var z,y,x
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
fq:function(a){var z,y,x
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
fs:function(a){var z,y,x
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
fe:function(a){var z
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
i:function(a){return this.a4}},eJ:{"^":"a;a,b,c"},eM:{"^":"a;a,b,c,d,e,f,r,x"},eK:{"^":"a;a,b,c,d,e,f,r"},eN:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eL:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eO:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eh:{"^":"cy;",
dV:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cu:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.d9(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.q("Error compiling shader '"+H.h(y)+"': "+H.h(x)))}return y},
f1:function(){var z,y,x,w,v,u
z=H.b([],[A.dq])
y=this.a
x=H.a1(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dq(y,v.name,u))}this.x=new A.fI(z)},
f3:function(){var z,y,x,w,v,u
z=H.b([],[A.a2])
y=this.a
x=H.a1(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.fI(v.type,v.size,v.name,u))}this.y=new A.j6(z)},
as:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.I(z,y,b,c)
else return A.cZ(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ae(z,y,b,c)
else return A.cZ(z,y,b,a,c)},
eh:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.af(z,y,b,c)
else return A.cZ(z,y,b,a,c)},
b2:function(a,b){return new P.eX(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
fI:function(a,b,c,d){switch(a){case 5120:return this.as(b,c,d)
case 5121:return this.as(b,c,d)
case 5122:return this.as(b,c,d)
case 5123:return this.as(b,c,d)
case 5124:return this.as(b,c,d)
case 5125:return this.as(b,c,d)
case 5126:return new A.U(this.a,this.r,c,d)
case 35664:return new A.j1(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.j4(this.a,this.r,c,d)
case 35667:return new A.j2(this.a,this.r,c,d)
case 35668:return new A.j3(this.a,this.r,c,d)
case 35669:return new A.j5(this.a,this.r,c,d)
case 35674:return new A.j8(this.a,this.r,c,d)
case 35675:return new A.d_(this.a,this.r,c,d)
case 35676:return new A.aB(this.a,this.r,c,d)
case 35678:return this.eg(b,c,d)
case 35680:return this.eh(b,c,d)
case 35670:throw H.d(this.b2("BOOL",c))
case 35671:throw H.d(this.b2("BOOL_VEC2",c))
case 35672:throw H.d(this.b2("BOOL_VEC3",c))
case 35673:throw H.d(this.b2("BOOL_VEC4",c))
default:throw H.d(P.q("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}},c8:{"^":"a;a,b",
i:function(a){return this.b}},a2:{"^":"a;"},j6:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
p:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
fR:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.fR("\n")}},I:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.h(this.c)}},j2:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.h(this.c)}},j3:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.h(this.c)}},j5:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.h(this.c)}},j0:{"^":"a2;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.h(this.c)},
q:{
cZ:function(a,b,c,d,e){var z=new A.j0(a,b,c,e)
z.f=d
z.e=P.hB(d,0,!1,P.E)
return z}}},U:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.h(this.c)}},j1:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.h(this.c)}},H:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.h(this.c)}},j4:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.h(this.c)}},j8:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}},d_:{"^":"a2;a,b,c,d",
a6:function(a){var z=new Float32Array(H.bI(H.w(a,"$isc",[P.v],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.h(this.c)}},aB:{"^":"a2;a,b,c,d",
a6:function(a){var z=new Float32Array(H.bI(H.w(a,"$isc",[P.v],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.h(this.c)}},ae:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.h(this.c)}},af:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}}],["","",,F,{"^":"",
lC:function(a,b,c,d){return F.l7(c,a,d,b,new F.lD())},
l7:function(a,b,c,d,e){var z=F.lA(a,b,new F.l8(H.k(e,{func:1,ret:V.a5,args:[P.v]}),d,b,c),null)
if(z==null)return
z.aw()
z.h1(new F.jl(),new F.i_())
return z},
lA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.aP,P.v,P.v]})
if(a<1)return
if(b<1)return
z=new F.ei()
y=new F.jg(z)
y.b=!1
x=[F.aP]
y.c=H.b([],x)
z.a=y
y=new F.iy(z)
y.b=H.b([],[F.e7])
z.b=y
y=new F.ix(z)
y.b=H.b([],[F.dT])
z.c=y
y=new F.iw(z)
y.b=H.b([],[F.am])
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.d0(null,null,new V.bO(x,0,0,1),null,null,new V.V(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.cQ(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.d0(null,null,new V.bO(o,n,m,1),null,null,new V.V(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.cQ(d))}}z.d.fu(a+1,b+1,w)
return z},
lD:{"^":"o:37;",
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)}},
l8:{"^":"o:38;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dl(y.$1(z),x)
x=J.dl(y.$1(z+3.141592653589793/this.c),x).W(0,w)
x=new V.M(x.a,x.b,x.c)
v=x.B(0,Math.sqrt(x.I(x)))
u=new V.M(1,0,0)
y=v.ah(!v.t(0,u)?new V.M(0,0,1):u)
t=y.B(0,Math.sqrt(y.I(y)))
y=t.ah(v)
u=y.B(0,Math.sqrt(y.I(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
x=w.F(0,new V.a5(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.T(a.f,x)){a.f=x
y=a.a
if(y!=null)y.X()}}},
am:{"^":"a;0a,0b,0c,0d,0e",
aJ:function(){if(!this.gcR()){C.a.K(this.a.a.d.b,this)
this.a.a.X()}this.eP()
this.eQ()
this.eR()},
eZ:function(a){this.a=a
C.a.h(a.d.b,this)},
f_:function(a){this.b=a
C.a.h(a.d.c,this)},
f0:function(a){this.c=a
C.a.h(a.d.d,this)},
eP:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
eQ:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
eR:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gcR:function(){return this.a==null||this.b==null||this.c==null},
e9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.M(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dg())return
return v.B(0,Math.sqrt(v.I(v)))},
ec:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.W(0,y)
z=new V.M(z.a,z.b,z.c)
v=z.B(0,Math.sqrt(z.I(z)))
z=w.W(0,y)
z=new V.M(z.a,z.b,z.c)
z=v.ah(z.B(0,Math.sqrt(z.I(z))))
return z.B(0,Math.sqrt(z.I(z)))},
bQ:function(){if(this.d!=null)return!0
var z=this.e9()
if(z==null){z=this.ec()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
e8:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.M(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dg())return
return v.B(0,Math.sqrt(v.I(v)))},
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
if($.m.$2(n,0)){z=r.W(0,u)
z=new V.M(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.aE(0)}else{l=(z-q.b)/n
z=r.W(0,u).k(0,l).F(0,u).W(0,x)
z=new V.M(z.a,z.b,z.c)
m=z.B(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.aE(0)}z=this.d
if(z!=null){k=z.B(0,Math.sqrt(z.I(z)))
z=k.ah(m)
z=z.B(0,Math.sqrt(z.I(z))).ah(k)
m=z.B(0,Math.sqrt(z.I(z)))}return m},
bO:function(){if(this.e!=null)return!0
var z=this.e8()
if(z==null){z=this.eb()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
gfD:function(a){if(J.T(this.a,this.b))return!0
if(J.T(this.b,this.c))return!0
if(J.T(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
v:function(a){var z,y
if(this.gcR())return a+"disposed"
z=a+C.i.ai(J.ab(this.a.e),0)+", "+C.i.ai(J.ab(this.b.e),0)+", "+C.i.ai(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.v("")},
q:{
cc:function(a,b,c){var z,y,x
z=new F.am()
y=a.a
if(y==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.q("May not create a face with vertices attached to different shapes."))
z.eZ(a)
z.f_(b)
z.f0(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
hb:{"^":"a;"},
iE:{"^":"hb;",
aM:function(a,b,c){var z,y
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
dT:{"^":"a;"},
hx:{"^":"a;"},
j_:{"^":"hx;",
aM:function(a,b,c){var z,y
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
e7:{"^":"a;"},
ei:{"^":"a;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.al()
this.e=z}return z},
aw:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aw()||!1
if(!this.a.aw())y=!1
z=this.e
if(!(z==null))z.ak(0)
return y},
h1:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.b(z.slice(0),[H.z(z,0)])
for(z=[F.aP];y.length!==0;){x=C.a.gfO(y)
C.a.hk(y,0)
if(x!=null){w=H.b([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.x)(y),++u){t=y[u]
if(t!=null&&a.aM(0,x,t)){C.a.h(w,t)
C.a.K(y,t)}}if(w.length>1)b.h0(w)}}this.a.u()
this.c.c3()
this.d.c3()
this.b.hl()
this.c.c4(new F.j_())
this.d.c4(new F.iE())
z=this.e
if(!(z==null))z.ak(0)},
fB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aF()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$bE().a)!==0)++w
if((x&$.$get$bF().a)!==0)++w
if((x&$.$get$b9().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
v=b.gcf(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.du])
for(r=0,q=0;q<w;++q){p=b.fw(q)
o=p.gcf(p)
C.a.O(s,q,new Z.du(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].fY(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.O(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bI(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dv(new Z.eU(34962,j),s,b)
i.b=H.b([],[Z.ce])
if(this.b.b.length!==0){x=P.E
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)}f=Z.d1(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ce(0,h.length,f))}if(this.c.b.length!==0){x=P.E
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)}f=Z.d1(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ce(1,h.length,f))}if(this.d.b.length!==0){x=P.E
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.u()
C.a.h(h,g.e)}f=Z.d1(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.ce(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.e])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.m(z,"\n")},
a5:function(a){var z=this.e
if(!(z==null))z.L(a)},
X:function(){return this.a5(null)}},
iw:{"^":"a;a,0b",
fu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.aP],"$asc")
z=H.b([],[F.am])
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
C.a.h(z,F.cc(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.cc(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.cc(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.cc(q,n,r))}u=!u}w=!w}return z},
gn:function(a){return this.b.length},
c4:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aM(0,v,t)){v.aJ()
break}}}}},
c3:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gfD(x)
if(y)x.aJ()}},
aw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bQ())x=!1
return x},
bP:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bO())x=!1
return x},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.m(z,"\n")},
J:function(){return this.v("")}},
ix:{"^":"a;a,0b",
gn:function(a){return this.b.length},
c4:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aM(0,v,t)){v.aJ()
break}}}}},
c3:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.T(x.a,x.b)
if(y)x.aJ()}},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.b([],[P.e])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.m(z,"\n")},
J:function(){return this.v("")}},
iy:{"^":"a;a,0b",
gn:function(a){return this.b.length},
hl:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aJ()}},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.m(z,"\n")},
J:function(){return this.v("")}},
aP:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cQ:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.d0(this.cx,x,u,z,y,w,v,a,t)},
fY:function(a){var z,y
z=J.L(a)
if(z.t(a,$.$get$aF())){z=this.f
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aE())){z=this.r
y=[P.v]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aD())){z=this.x
y=[P.v]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aG())){z=this.y
y=[P.v]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.t(a,$.$get$aH())){z=this.z
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bE())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bF())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$b9()))return H.b([this.ch],[P.v])
else if(z.t(a,$.$get$aC())){z=H.b([-1,-1,-1,-1],[P.v])
return z}else return H.b([],[P.v])},
bQ:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.M(0,0,0)
this.d.H(0,new F.jq(z))
z=z.a
this.r=z.B(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ak(0)}return!0},
bO:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.M(0,0,0)
this.d.H(0,new F.jp(z))
z=z.a
this.x=z.B(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.ak(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
v:function(a){var z,y,x
z=H.b([],[P.e])
C.a.h(z,C.i.ai(J.ab(this.e),0))
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
C.a.h(z,"-")
x=C.a.m(z,", ")
return a+"{"+x+"}"},
J:function(){return this.v("")},
q:{
d0:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aP()
y=new F.jo(z)
y.b=H.b([],[F.e7])
z.b=y
y=new F.jk(z)
x=[F.dT]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.jh(z)
x=[F.am]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eR()
z.e=0
y=$.$get$aF()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aE().a)!==0?e:null
z.x=(x&$.$get$aD().a)!==0?b:null
z.y=(x&$.$get$aG().a)!==0?f:null
z.z=(x&$.$get$aH().a)!==0?g:null
z.Q=(x&$.$get$eS().a)!==0?c:null
z.ch=(x&$.$get$b9().a)!==0?i:0
z.cx=(x&$.$get$aC().a)!==0?a:null
return z}}},
jq:{"^":"o:4;a",
$1:function(a){var z,y
H.l(a,"$isam")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
jp:{"^":"o:4;a",
$1:function(a){var z,y
H.l(a,"$isam")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
jg:{"^":"a;a,0b,0c",
u:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.X()
return!0},
gn:function(a){return this.c.length},
aw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bQ()
return!0},
bP:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bO()
return!0},
fC:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.B(0,Math.sqrt(u*u+t*t+s*s))
if(!J.T(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.L(null)}}}}return!0},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
this.u()
z=H.b([],[P.e])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.m(z,"\n")},
J:function(){return this.v("")}},
jh:{"^":"a;a,0b,0c,0d",
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
H:function(a,b){H.k(b,{func:1,ret:-1,args:[F.am]})
C.a.H(this.b,b)
C.a.H(this.c,new F.ji(this,b))
C.a.H(this.d,new F.jj(this,b))},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.m(z,"\n")},
J:function(){return this.v("")}},
ji:{"^":"o:4;a,b",
$1:function(a){H.l(a,"$isam")
if(!J.T(a.a,this.a))this.b.$1(a)}},
jj:{"^":"o:4;a,b",
$1:function(a){var z
H.l(a,"$isam")
z=this.a
if(!J.T(a.a,z)&&!J.T(a.b,z))this.b.$1(a)}},
jk:{"^":"a;a,0b,0c",
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.m(z,"\n")},
J:function(){return this.v("")}},
jm:{"^":"a;"},
jl:{"^":"jm;",
aM:function(a,b,c){return J.T(b.f,c.f)}},
jn:{"^":"a;"},
i_:{"^":"jn;",
h0:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.aP],"$asc")
z=new V.M(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.M(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.B(0,Math.sqrt(z.I(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){t=a[x]
s=z.B(0,Math.sqrt(u))
if(!J.T(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.L(null)}}}return}},
jo:{"^":"a;a,0b",
gn:function(a){return this.b.length},
i:function(a){return this.J()},
v:function(a){var z,y,x,w
z=H.b([],[P.e])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.m(z,"\n")},
J:function(){return this.v("")}}}],["","",,O,{"^":"",hI:{"^":"cW;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gD:function(){var z=this.dy
if(z==null){z=D.al()
this.dy=z}return z},
a1:[function(a){var z
H.l(a,"$isF")
z=this.dy
if(!(z==null))z.L(a)},function(){return this.a1(null)},"hC","$1","$0","ge3",0,2,0],
eU:[function(a){H.l(a,"$isF")
this.a=null
this.a1(a)},function(){return this.eU(null)},"i1","$1","$0","geT",0,2,0],
hG:[function(a,b){var z=V.an
z=new D.cF(a,H.w(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.a1(z)},"$2","gep",8,0,22],
hH:[function(a,b){var z=V.an
z=new D.cG(a,H.w(b,"$isf",[z],"$asf"),this,[z])
z.b=!0
this.a1(z)},"$2","geq",8,0,22],
cr:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.U(z.e.length+3,4)*4
x=C.h.U(z.f.length+3,4)*4
w=C.h.U(z.r.length+3,4)*4
v=C.h.U(z.x.length+3,4)*4
u=C.h.U(z.y.length+3,4)*4
t=C.h.U(z.z.length+3,4)*4
s=C.h.U(this.e.a.length+3,4)*4
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
a6=$.$get$aF()
if(c){z=$.$get$aE()
a6=new Z.b8(a6.a|z.a)}if(b){z=$.$get$aD()
a6=new Z.b8(a6.a|z.a)}if(a){z=$.$get$aG()
a6=new Z.b8(a6.a|z.a)}if(a0){z=$.$get$aH()
a6=new Z.b8(a6.a|z.a)}if(a2){z=$.$get$aC()
a6=new Z.b8(a6.a|z.a)}return new A.hN(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
M:function(a,b){H.w(a,"$isc",[T.er],"$asc")},
bo:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.w();){y=z.d
x=new V.M(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.c6(x)}}},
hn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cr()
y=a.fr.j(0,z.a4)
if(y==null){y=A.hJ(z,a.a)
x=y.b
if(x.length===0)H.t(P.q("May not cache a shader with no name."))
if(a.fr.cP(0,x))H.t(P.q('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.O(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.b6
z=b.e
if(!(z instanceof Z.dv)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.aw()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.bP()
t.a.bP()
t=t.e
if(!(t==null))t.ak(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.fC()
s=s.e
if(!(s==null))s.ak(0)}q=b.d.fB(new Z.jr(a.a),v)
q.aA($.$get$aF()).e=this.a.Q.c
if(z)q.aA($.$get$aE()).e=this.a.cx.c
if(u)q.aA($.$get$aD()).e=this.a.ch.c
if(w.rx)q.aA($.$get$aG()).e=this.a.cy.c
if(t)q.aA($.$get$aH()).e=this.a.db.c
if(w.x1)q.aA($.$get$aC()).e=this.a.dx.c
b.e=q}z=T.er
p=H.b([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.fM()
if(w.fx){u=this.a
t=a.dx
t=t.gR(t)
u=u.dy
u.toString
u.a6(t.a0(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gR(t)
s=a.dx
s=t.k(0,s.gR(s))
a.cx=s
t=s}u=u.fr
u.toString
u.a6(t.a0(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghh()
s=a.dx
s=t.k(0,s.gR(s))
a.ch=s
t=s}u=u.fy
u.toString
u.a6(t.a0(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.a6(t.a0(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.a6(t.a0(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.a6(C.F.a0(t,!0))}if(w.aa>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.v],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.i(s,n)
s=s[n]
t.toString
H.l(s,"$isan")
t=t.r1
if(n>=t.length)return H.i(t,n)
t=t[n]
m=new Float32Array(H.bI(H.w(s.a0(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.f:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.M(p,this.f.d)
u=this.a
t=this.f.d
u.a2(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.M(p,this.f.e)
u=this.a
t=this.f.e
u.Y(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.f:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.M(p,this.r.d)
u=this.a
t=this.r.d
u.a2(u.y1,u.aa,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.M(p,this.r.e)
u=this.a
t=this.r.e
u.Y(u.y2,u.aa,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.f:u=this.a
t=this.x.f
u=u.a4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.M(p,this.x.d)
u=this.a
t=this.x.d
u.a2(u.b6,u.b7,t)
t=this.a
u=this.x.f
t=t.a4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.M(p,this.x.e)
u=this.a
t=this.x.e
u.Y(u.cS,u.b7,t)
t=this.a
u=this.x.f
t=t.a4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.f:u=this.a
t=this.y.f
u=u.b8
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.M(p,this.y.d)
u=this.a
t=this.y.d
u.a2(u.cT,u.b9,t)
t=this.a
u=this.y.f
t=t.b8
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.M(p,this.y.e)
u=this.a
t=this.y.e
u.Y(u.cU,u.b9,t)
t=this.a
u=this.y.f
t=t.b8
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.f:u=this.a
t=this.z.f
u=u.ba
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bc
t.a.uniform1f(t.d,r)
break
case C.d:this.M(p,this.z.d)
u=this.a
t=this.z.d
u.a2(u.cV,u.bb,t)
t=this.a
u=this.z.f
t=t.ba
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bc
u.a.uniform1f(u.d,r)
break
case C.e:this.M(p,this.z.e)
u=this.a
t=this.z.e
u.Y(u.cW,u.bb,t)
t=this.a
u=this.z.f
t=t.ba
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bc
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.d6
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bU
if(k>=s.length)return H.i(s,k)
h=s[k]
s=l.c6(i.a)
r=s.a
g=s.b
f=s.c
f=s.B(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.d7
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bV
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaQ(i)
r=h.b
g=s.gc8(s)
f=s.gc9(s)
s=s.gca(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aU(i.gaQ(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga9(i)
f=h.d
g=s.gbn()
r=s.gaV()
s=s.gb4()
f.a.uniform3f(f.d,g,r,s)
s=i.gbJ()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbK()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbL()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.d8
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bW
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaQ(i)
r=h.b
g=s.gc8(s)
f=s.gc9(s)
s=s.gca(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbT(i).i5()
f=h.c
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=l.aU(i.gaQ(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga9(i)
r=h.e
g=s.gbn()
f=s.gaV()
s=s.gb4()
r.a.uniform3f(r.d,g,f,s)
s=i.gi4()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gi2()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbJ()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbK()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbL()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.d9
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
r=this.a.bX
if(k>=r.length)return H.i(r,k)
h=r[k]
r=i.gaS()
H.w(p,"$isc",s,"$asc")
if(!C.a.N(p,r)){r.saK(0,p.length)
C.a.h(p,r)}r=i.gbT(i)
g=h.d
f=r.gax(r)
e=r.gay(r)
r=r.gaz()
g.a.uniform3f(g.d,f,e,r)
r=i.ghz()
e=h.b
f=r.gax(r)
g=r.gay(r)
r=r.gaz()
e.a.uniform3f(e.d,f,g,r)
r=i.gaR(i)
g=h.c
f=r.gax(r)
e=r.gay(r)
r=r.gaz()
g.a.uniform3f(g.d,f,e,r)
r=l.c6(i.gbT(i))
e=r.a
f=r.b
g=r.c
g=r.B(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga9(i)
f=h.f
e=g.gbn()
r=g.gaV()
g=g.gb4()
f.a.uniform3f(f.d,e,r,g)
g=i.gaS()
r=g.gaL(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gaL(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaK(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.da
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.y,t=u.length,s=[P.v],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
g=this.a.bY
if(k>=g.length)return H.i(g,k)
h=g[k]
g=i.gaS()
H.w(p,"$isc",r,"$asc")
if(!C.a.N(p,g)){g.saK(0,p.length)
C.a.h(p,g)}d=l.k(0,i.gR(i))
g=i.gR(i).aU(new V.a5(0,0,0))
f=h.b
e=g.gc8(g)
c=g.gc9(g)
g=g.gca(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aU(new V.a5(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.df(0)
c=h.d
m=new Float32Array(H.bI(H.w(new V.ci(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a0(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga9(i)
g=h.e
e=c.gbn()
f=c.gaV()
c=c.gb4()
g.a.uniform3f(g.d,e,f,c)
c=i.gaS()
g=c.gaL(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gaL(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaK(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbJ()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbK()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbL()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dc
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.x)(u),++j){i=u[j]
s=this.a.bZ
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaS()
H.w(p,"$isc",z,"$asc")
if(!C.a.N(p,s)){s.saK(0,p.length)
C.a.h(p,s)}s=i.gaQ(i)
r=h.b
g=s.gc8(s)
f=s.gc9(s)
s=s.gca(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbT(i)
f=h.c
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=i.ghz()
r=h.d
g=s.gax(s)
f=s.gay(s)
s=s.gaz()
r.a.uniform3f(r.d,g,f,s)
s=i.gaR(i)
f=h.e
g=s.gax(s)
r=s.gay(s)
s=s.gaz()
f.a.uniform3f(f.d,g,r,s)
s=l.aU(i.gaQ(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaS()
r=s.gaL(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gaL(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaK(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga9(i)
r=h.y
g=s.gbn()
f=s.gaV()
s=s.gb4()
r.a.uniform3f(r.d,g,f,s)
s=i.gib()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gic()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbJ()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbK()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbL()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.f:break
case C.d:this.M(p,this.Q.d)
z=this.a
u=this.Q.d
z.a2(z.cX,z.bd,u)
break
case C.e:this.M(p,this.Q.e)
z=this.a
u=this.Q.e
z.Y(z.cY,z.bd,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gR(u).df(0)
a.Q=u}z=z.id
z.toString
z.a6(u.a0(0,!0))}if(w.dy){this.M(p,this.ch)
z=this.a
u=this.ch
z.Y(z.cZ,z.d_,u)
switch(w.r){case C.b:break
case C.f:z=this.a
u=this.cx.f
z=z.be
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.d:this.M(p,this.cx.d)
z=this.a
u=this.cx.d
z.a2(z.d0,z.bf,u)
u=this.a
z=this.cx.f
u=u.be
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.e:this.M(p,this.cx.e)
z=this.a
u=this.cx.e
z.Y(z.d1,z.bf,u)
u=this.a
z=this.cx.f
u=u.be
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.f:z=this.a
u=this.cy.f
z=z.bh
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bg
u.a.uniform1f(u.d,s)
break
case C.d:this.M(p,this.cy.d)
z=this.a
u=this.cy.d
z.a2(z.d2,z.bi,u)
u=this.a
z=this.cy.f
u=u.bh
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bg
z.a.uniform1f(z.d,s)
break
case C.e:this.M(p,this.cy.e)
z=this.a
u=this.cy.e
z.Y(z.d3,z.bi,u)
u=this.a
z=this.cy.f
u=u.bh
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bg
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.f:z=this.a
t=this.db.f
z=z.bj
z.a.uniform1f(z.d,t)
break
case C.d:this.M(p,this.db.d)
z=this.a
t=this.db.d
z.a2(z.d4,z.bk,t)
t=this.a
z=this.db.f
t=t.bj
t.a.uniform1f(t.d,z)
break
case C.e:this.M(p,this.db.e)
z=this.a
t=this.db.e
z.Y(z.d5,z.bk,t)
t=this.a
z=this.db.f
t=t.bj
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].b3(a)
z=b.e
z.b3(a)
z.aD(a)
z.dz(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].dz(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.fL()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cr().a4}},hL:{"^":"cN;0f,a,b,0c,0d,0e"},cN:{"^":"a;",
b_:["dP",function(){}]},hM:{"^":"cN;a,b,0c,0d,0e"},b4:{"^":"cN;0f,a,b,0c,0d,0e",
cD:function(a){var z,y
if(!J.T(this.f,a)){z=this.f
this.f=a
y=new D.S(this.b+".color",z,a,this,[V.Y])
y.b=!0
this.a.a1(y)}},
b_:["bt",function(){this.dP()
this.cD(new V.Y(1,1,1))}],
sa9:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.b_()
z=this.a
z.a=null
z.a1(null)}this.cD(b)}},hO:{"^":"b4;0ch,0f,a,b,0c,0d,0e",
eY:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.a1(z)}},
b_:function(){this.bt()
this.eY(1)}},hP:{"^":"b4;0ch,0f,a,b,0c,0d,0e",
bG:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.a1(z)}},
b_:function(){this.bt()
this.bG(100)}},cW:{"^":"a;"}}],["","",,T,{"^":"",er:{"^":"cy;"},iN:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",bi:{"^":"a;",
aC:function(a,b){return!0},
i:function(a){return"all"},
$isay:1},ay:{"^":"a;"},e_:{"^":"a;",
aC:["dO",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aC(0,b))return!0
return!1}],
i:["cg",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isay:1},ap:{"^":"e_;0a",
aC:function(a,b){return!this.dO(0,b)},
i:function(a){return"!["+this.cg(0)+"]"}},ie:{"^":"a;0a,0b",
aC:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.cR(this.a)
y=H.cR(this.b)
return z+".."+y},
$isay:1,
q:{
O:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.d(P.q("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.aq(a,0)
y=C.i.aq(b,0)
x=new V.ie()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iu:{"^":"a;0a",
dU:function(a){var z,y
if(a.a.length<=0)throw H.d(P.q("May not create a SetMatcher with zero characters."))
z=new H.b3(0,0,[P.E,P.Q])
for(y=new H.cM(a,a.gn(a),0,[H.aj(a,"u",0)]);y.w();)z.O(0,y.d,!0)
this.a=z},
aC:function(a,b){return this.a.cP(0,b)},
i:function(a){var z=this.a
return P.cU(new H.dV(z,[H.z(z,0)]),0,null)},
$isay:1,
q:{
r:function(a){var z=new V.iu()
z.dU(a)
return z}}},ek:{"^":"a;a,b,0c,0d",
gh2:function(a){return this.b},
m:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ex(this.a.l(0,b))
w.a=H.b([],[V.ay])
w.c=!1
C.a.h(this.c,w)
return w},
fN:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aC(0,a))return w}return},
i:function(a){return this.b}},ev:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dj(this.b,"\n","\\n")
y=H.dj(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ew:{"^":"a;a,b,0c",
aj:function(a,b,c){var z,y,x
H.w(c,"$isc",[P.e],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.x)(c),++y){x=c[y]
this.c.O(0,x,b)}},
i:function(a){return this.b}},iV:{"^":"a;0a,0b,0c",
l:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ek(this,b)
z.c=H.b([],[V.ex])
this.a.O(0,b,z)}return z},
E:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ew(this,a)
y=P.e
z.c=new H.b3(0,0,[y,y])
this.b.O(0,a,z)}return z},
dw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.ev])
y=this.c
x=[P.E]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aq(a,t)
r=y.fN(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cU(w,0,null)
throw H.d(P.q("Untokenizable string [state: "+y.gh2(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cU(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ev(o==null?p.b:o,q,t)}++t}}},
q:{
ck:function(){var z,y
z=new V.iV()
y=P.e
z.a=new H.b3(0,0,[y,V.ek])
z.b=new H.b3(0,0,[y,V.ew])
return z}}},ex:{"^":"e_;b,0c,0a",
i:function(a){return this.b.b+": "+this.cg(0)}}}],["","",,X,{"^":"",dx:{"^":"a;",$isaA:1},hg:{"^":"eo;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.al()
this.x=z}return z}},i2:{"^":"a;0a,0b,0c,0d,0e,0f",
gD:function(){var z=this.f
if(z==null){z=D.al()
this.f=z}return z},
aG:[function(a){var z
H.l(a,"$isF")
z=this.f
if(!(z==null))z.L(a)},function(){return this.aG(null)},"hD","$1","$0","gck",0,2,0],
saN:function(a){var z,y
if(!J.T(this.b,a)){z=this.b
if(z!=null)z.gD().K(0,this.gck())
y=this.b
this.b=a
if(a!=null)a.gD().h(0,this.gck())
z=new D.S("mover",y,this.b,this,[U.bW])
z.b=!0
this.aG(z)}},
$isaA:1,
$isdx:1},eo:{"^":"a;"}}],["","",,V,{"^":"",
ly:function(a){P.iU(C.C,new V.lz(a))},
aK:{"^":"a;",
aX:function(a){this.b=new P.hj(C.D)
this.c=null
this.d=H.b([],[[P.c,W.b_]])},
C:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.b_]))
y=a.split("\n")
for(z=y.length,x=[W.b_],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.G(u)
s=this.b.ef(u,0,u.length)
r=s==null?u:s
C.B.dH(t,H.dj(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbl(this.d),t)}},
dk:function(a,b){var z,y,x,w
H.w(b,"$isc",[P.e],"$asc")
this.d=H.b([],[[P.c,W.b_]])
z=C.a.m(b,"\n")
y=this.c
if(y==null){y=this.b5()
this.c=y}for(y=y.dw(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)this.bm(y[w])}},
lz:{"^":"o:40;a",
$1:function(a){H.l(a,"$isb6")
P.di(C.c.dv(this.a.gfS(),2)+" fps")}},
fX:{"^":"aK;a,0b,0c,0d",
bm:function(a){switch(a.a){case"Class":this.C(a.b,"#551")
break
case"Comment":this.C(a.b,"#777")
break
case"Id":this.C(a.b,"#111")
break
case"Num":this.C(a.b,"#191")
break
case"Reserved":this.C(a.b,"#119")
break
case"String":this.C(a.b,"#171")
break
case"Symbol":this.C(a.b,"#616")
break
case"Type":this.C(a.b,"#B11")
break
case"Whitespace":this.C(a.b,"#111")
break}},
b5:function(){var z,y,x,w
z=V.ck()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Id")
x=V.r(new H.p("_"))
C.a.h(y.a,x)
x=V.O("a","z")
C.a.h(y.a,x)
x=V.O("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").m(0,"Id")
y=V.r(new H.p("_"))
C.a.h(x.a,y)
y=V.O("0","9")
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Int")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").m(0,"Int")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").m(0,"FloatDot")
x=V.r(new H.p("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").m(0,"Float")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").m(0,"Float")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Sym")
y=V.r(new H.p("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").m(0,"Sym")
x=V.r(new H.p("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"OpenDoubleStr")
y=V.r(new H.p('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
x=V.r(new H.p('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenDoubleStr").m(0,"EscDoubleStr")
y=V.r(new H.p("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscDoubleStr").m(0,"OpenDoubleStr")
x=V.r(new H.p('"'))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bi())
x=z.l(0,"Start").m(0,"OpenSingleStr")
y=V.r(new H.p("'"))
C.a.h(x.a,y)
y=z.l(0,"OpenSingleStr").m(0,"CloseSingleStr")
x=V.r(new H.p("'"))
C.a.h(y.a,x)
x=z.l(0,"OpenSingleStr").m(0,"EscSingleStr")
y=V.r(new H.p("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscSingleStr").m(0,"OpenSingleStr")
x=V.r(new H.p("'"))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bi())
x=z.l(0,"Start").m(0,"Slash")
y=V.r(new H.p("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").m(0,"Comment")
x=V.r(new H.p("/"))
C.a.h(y.a,x)
x=z.l(0,"Comment").m(0,"EndComment")
y=V.r(new H.p("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").m(0,"Comment")
x=new V.ap()
w=[V.ay]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.r(new H.p("\n"))
C.a.h(x.a,y)
y=z.l(0,"Slash").m(0,"MLComment")
x=V.r(new H.p("*"))
C.a.h(y.a,x)
x=z.l(0,"MLComment").m(0,"MLCStar")
y=V.r(new H.p("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").m(0,"MLComment")
x=new V.ap()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.r(new H.p("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").m(0,"EndComment")
x=V.r(new H.p("/"))
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Whitespace")
y=V.r(new H.p(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Whitespace").m(0,"Whitespace")
x=V.r(new H.p(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Int")
x.d=x.a.E("Num")
x=z.l(0,"Float")
x.d=x.a.E("Num")
x=z.l(0,"Sym")
x.d=x.a.E("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.E("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.E("String")
x=z.l(0,"EndComment")
x.d=x.a.E("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.E("Whitespace")
x=z.l(0,"Id")
y=x.a.E("Id")
x.d=y
x=[P.e]
y.aj(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aj(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aj(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hh:{"^":"aK;a,0b,0c,0d",
bm:function(a){switch(a.a){case"Builtin":this.C(a.b,"#411")
break
case"Comment":this.C(a.b,"#777")
break
case"Id":this.C(a.b,"#111")
break
case"Num":this.C(a.b,"#191")
break
case"Preprocess":this.C(a.b,"#737")
break
case"Reserved":this.C(a.b,"#119")
break
case"Symbol":this.C(a.b,"#611")
break
case"Type":this.C(a.b,"#171")
break
case"Whitespace":this.C(a.b,"#111")
break}},
b5:function(){var z,y,x,w
z=V.ck()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Id")
x=V.r(new H.p("_"))
C.a.h(y.a,x)
x=V.O("a","z")
C.a.h(y.a,x)
x=V.O("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").m(0,"Id")
y=V.r(new H.p("_"))
C.a.h(x.a,y)
y=V.O("0","9")
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Int")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").m(0,"Int")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").m(0,"FloatDot")
x=V.r(new H.p("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").m(0,"Float")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").m(0,"Float")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Sym")
y=V.r(new H.p("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").m(0,"Sym")
x=V.r(new H.p("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").m(0,"Slash")
y=V.r(new H.p("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").m(0,"Comment")
x=V.r(new H.p("/"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Slash").m(0,"Sym").a,new V.bi())
x=z.l(0,"Comment").m(0,"EndComment")
y=V.r(new H.p("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").m(0,"Comment")
x=new V.ap()
w=[V.ay]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.r(new H.p("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Preprocess")
x=V.r(new H.p("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").m(0,"Preprocess")
y=new V.ap()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.r(new H.p("\n"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").m(0,"EndPreprocess")
y=V.r(new H.p("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"Whitespace")
x=V.r(new H.p(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Whitespace").m(0,"Whitespace")
y=V.r(new H.p(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Int")
y.d=y.a.E("Num")
y=z.l(0,"Float")
y.d=y.a.E("Num")
y=z.l(0,"Sym")
y.d=y.a.E("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.E("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.E("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.E("Whitespace")
y=z.l(0,"Id")
x=y.a.E("Id")
y.d=x
y=[P.e]
x.aj(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aj(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aj(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
hi:{"^":"aK;a,0b,0c,0d",
bm:function(a){switch(a.a){case"Attr":this.C(a.b,"#911")
this.C("=","#111")
break
case"Id":this.C(a.b,"#111")
break
case"Other":this.C(a.b,"#111")
break
case"Reserved":this.C(a.b,"#119")
break
case"String":this.C(a.b,"#171")
break
case"Symbol":this.C(a.b,"#616")
break}},
b5:function(){var z,y,x
z=V.ck()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Id")
x=V.r(new H.p("_"))
C.a.h(y.a,x)
x=V.O("a","z")
C.a.h(y.a,x)
x=V.O("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").m(0,"Id")
y=V.r(new H.p("_"))
C.a.h(x.a,y)
y=V.O("0","9")
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Id").m(0,"Attr")
x=V.r(new H.p("="))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"Sym")
x=V.r(new H.p("</\\-!>="))
C.a.h(y.a,x)
x=z.l(0,"Sym").m(0,"Sym")
y=V.r(new H.p("</\\-!>="))
C.a.h(x.a,y)
y=z.l(0,"Start").m(0,"OpenStr")
x=V.r(new H.p('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenStr").m(0,"CloseStr")
y=V.r(new H.p('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenStr").m(0,"EscStr")
x=V.r(new H.p("\\"))
C.a.h(y.a,x)
x=z.l(0,"EscStr").m(0,"OpenStr")
y=V.r(new H.p('"'))
C.a.h(x.a,y)
C.a.h(z.l(0,"OpenStr").m(0,"OpenStr").a,new V.bi())
C.a.h(z.l(0,"Start").m(0,"Other").a,new V.bi())
y=z.l(0,"Other").m(0,"Other")
x=new V.ap()
x.a=H.b([],[V.ay])
C.a.h(y.a,x)
y=V.r(new H.p('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.E("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.E("String")
y=z.l(0,"Id")
x=y.a.E("Id")
y.d=x
x.aj(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
x=z.l(0,"Attr")
x.d=x.a.E("Attr")
x=z.l(0,"Other")
x.d=x.a.E("Other")
return z}},
i4:{"^":"aK;a,0b,0c,0d",
dk:function(a,b){H.w(b,"$isc",[P.e],"$asc")
this.d=H.b([],[[P.c,W.b_]])
this.C(C.a.m(b,"\n"),"#111")},
bm:function(a){},
b5:function(){return}},
iz:{"^":"a;0a,0b",
dW:function(a,b){var z,y,x,w,v,u,t
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
t=W.a8
W.a0(z,"scroll",H.k(new V.iC(x),{func:1,ret:-1,args:[t]}),!1,t)},
cK:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isc",[P.e],"$asc")
this.f2()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.dw(C.a.fW(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fx(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.fe(C.u,s,C.p,!1)
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
dD:function(a){var z,y,x,w
z=new V.fX("dart")
z.aX("dart")
y=new V.hh("glsl")
y.aX("glsl")
x=new V.hi("html")
x.aX("html")
w=C.a.fP(H.b([z,y,x],[V.aK]),new V.iD(a))
if(w!=null)return w
z=new V.i4("plain")
z.aX("plain")
return z},
cI:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a2,"$isc",[P.e],"$asc")
z=H.b([],[P.E])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.de(w).bq(w,"+")){C.a.O(a2,x,C.i.aW(w,1))
C.a.h(z,1)
y=!0}else if(C.i.bq(w,"-")){C.a.O(a2,x,C.i.aW(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.dD(a0)
v.dk(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.fe(C.u,a,C.p,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dn(null)
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
if(x>=z.length)return H.i(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.x)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.x)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gP(w);b.w();)h.appendChild(b.gG(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
f2:function(){var z,y,x,w
if(this.b!=null)return
z=V.ck()
z.c=z.l(0,"Start")
y=z.l(0,"Start").m(0,"Bold")
x=V.r(new H.p("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").m(0,"Bold")
x=new V.ap()
w=[V.ay]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.r(new H.p("*"))
C.a.h(x.a,y)
y=z.l(0,"Bold").m(0,"BoldEnd")
x=V.r(new H.p("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"Italic")
x=V.r(new H.p("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Italic").m(0,"Italic")
x=new V.ap()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.r(new H.p("_"))
C.a.h(x.a,y)
y=z.l(0,"Italic").m(0,"ItalicEnd")
x=V.r(new H.p("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"Code")
x=V.r(new H.p("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Code").m(0,"Code")
x=new V.ap()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.r(new H.p("`"))
C.a.h(x.a,y)
y=z.l(0,"Code").m(0,"CodeEnd")
x=V.r(new H.p("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").m(0,"LinkHead")
x=V.r(new H.p("["))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"LinkHead").m(0,"LinkTail")
x=V.r(new H.p("|"))
C.a.h(y.a,x)
x=z.l(0,"LinkHead").m(0,"LinkEnd")
y=V.r(new H.p("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkHead").m(0,"LinkHead")
y=new V.ap()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.r(new H.p("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").m(0,"LinkEnd")
y=V.r(new H.p("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").m(0,"LinkTail")
y=new V.ap()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.r(new H.p("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").m(0,"Other").a,new V.bi())
x=z.l(0,"Other").m(0,"Other")
y=new V.ap()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.r(new H.p("*_`["))
C.a.h(y.a,x)
x=z.l(0,"BoldEnd")
x.d=x.a.E("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.E("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.E("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.E("Link")
x=z.l(0,"Other")
x.d=x.a.E("Other")
this.b=z},
q:{
iA:function(a,b){var z=new V.iz()
z.dW(a,!0)
return z}}},
iC:{"^":"o:41;a",
$1:function(a){P.et(C.l,new V.iB(this.a))}},
iB:{"^":"o:1;a",
$0:function(){var z,y,x
z=C.c.a_(document.documentElement.scrollTop)
y=this.a.style
x=H.h(-0.01*z)+"px"
y.top=x}},
iD:{"^":"o:42;a",
$1:function(a){return H.l(a,"$isaK").a===this.a}}}],["","",,X,{"^":"",
ft:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=V.iA("Test 003",!0)
y=W.dy(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.e]
z.cK(H.b(["A test of the Material Light Shader with a solid color directional lighting."],x))
z.cK(H.b(["\xab[Back to Tests|../]"],x))
w=new E.aN()
w.a=""
w.b=!0
x=E.aN
v=O.cD(x)
w.y=v
v.bp(w.gh3(),w.gh5())
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
w.sce(0,null)
w.saN(null)
w.sce(0,F.lC(30,1,15,0.5))
v=new U.ef()
v.a=0
v.b=0
v.c=0
v.d=0
v.e=0
v.f=0
v.r=0
v.sdA(0)
v.sdl(0,0)
v.sdr(0)
u=v.d
if(!$.m.$2(u,0.1)){t=v.d
v.d=0.1
u=new D.S("deltaYaw",t,0.1,v,[P.v])
u.b=!0
v.at(u)}u=v.e
if(!$.m.$2(u,0.21)){t=v.e
v.e=0.21
u=new D.S("deltaPitch",t,0.21,v,[P.v])
u.b=!0
v.at(u)}u=v.f
if(!$.m.$2(u,0.32)){t=v.f
v.f=0.32
u=new D.S("deltaRoll",t,0.32,v,[P.v])
u.b=!0
v.at(u)}w.saN(v)
s=new O.hI()
v=O.cD(V.an)
s.e=v
v.bp(s.gep(),s.geq())
v=new O.b4(s,"emission")
v.c=C.b
v.f=new V.Y(0,0,0)
s.f=v
v=new O.b4(s,"ambient")
v.c=C.b
v.f=new V.Y(0,0,0)
s.r=v
v=new O.b4(s,"diffuse")
v.c=C.b
v.f=new V.Y(0,0,0)
s.x=v
v=new O.b4(s,"invDiffuse")
v.c=C.b
v.f=new V.Y(0,0,0)
s.y=v
v=new O.hP(s,"specular")
v.c=C.b
v.f=new V.Y(0,0,0)
v.ch=100
s.z=v
v=new O.hM(s,"bump")
v.c=C.b
s.Q=v
s.ch=null
v=new O.b4(s,"reflect")
v.c=C.b
v.f=new V.Y(0,0,0)
s.cx=v
v=new O.hO(s,"refract")
v.c=C.b
v.f=new V.Y(0,0,0)
v.ch=1
s.cy=v
v=new O.hL(s,"alpha")
v.c=C.b
v.f=1
s.db=v
v=new D.hw()
v.ci(D.W)
v.e=H.b([],[D.ca])
v.f=H.b([],[D.i5])
v.r=H.b([],[D.iF])
v.x=H.b([],[D.iO])
v.y=H.b([],[D.iP])
v.z=H.b([],[D.iQ])
v.Q=null
v.ch=null
v.cd(v.geo(),v.geJ(),v.geK())
s.dx=v
u=v.Q
if(u==null){u=D.al()
v.Q=u
v=u}else v=u
v.h(0,s.geT())
v=s.dx
u=v.ch
if(u==null){u=D.al()
v.ch=u
v=u}else v=u
v.h(0,s.ge3())
s.dy=null
v=s.dx
u=U.dB(V.e0(new V.a5(0,0,0),new V.M(0,1,0),new V.M(1,1,-3)))
r=new V.Y(1,1,1)
q=new D.ca()
q.c=new V.Y(1,1,1)
q.a=new V.M(0,0,1)
t=q.b
q.b=u
u.gD().h(0,q.ge1())
u=new D.S("mover",t,q.b,q,[U.bW])
u.b=!0
q.ao(u)
if(!q.c.t(0,r)){t=q.c
q.c=r
u=new D.S("color",t,r,q,[V.Y])
u.b=!0
q.ao(u)}v.h(0,q)
v=s.r
v.sa9(0,new V.Y(0,0,1))
v=s.x
v.sa9(0,new V.Y(0,1,0))
v=s.z
v.sa9(0,new V.Y(1,0,0))
v=s.z
if(v.c===C.b){v.c=C.f
v.bt()
v.bG(100)
u=v.a
u.a=null
u.a1(null)}v.bG(10)
p=new M.h7()
x=O.cD(x)
p.d=x
x.bp(p.ges(),p.geu())
p.e=null
p.f=null
p.r=null
p.x=null
o=new X.i2()
o.c=1.0471975511965976
o.d=0.1
o.e=2000
o.saN(null)
x=o.c
if(!$.m.$2(x,1.0471975511965976)){t=o.c
o.c=1.0471975511965976
x=new D.S("fov",t,1.0471975511965976,o,[P.v])
x.b=!0
o.aG(x)}x=o.d
if(!$.m.$2(x,0.1)){t=o.d
o.d=0.1
x=new D.S("near",t,0.1,o,[P.v])
x.b=!0
o.aG(x)}x=o.e
if(!$.m.$2(x,2000)){t=o.e
o.e=2000
x=new D.S("far",t,2000,o,[P.v])
x.b=!0
o.aG(x)}x=p.a
if(x!==o){if(x!=null)x.gD().K(0,p.ga7())
t=p.a
p.a=o
o.gD().h(0,p.ga7())
x=new D.S("camera",t,p.a,p,[X.dx])
x.b=!0
p.ap(x)}n=new X.hg()
x=new V.bO(0,0,0,1)
n.a=x
n.b=!0
n.c=2000
n.d=!0
n.e=0
n.f=!1
x=V.ed(0,0,1,1)
n.r=x
x=p.b
if(x!==n){if(x!=null)x.gD().K(0,p.ga7())
t=p.b
p.b=n
n.gD().h(0,p.ga7())
x=new D.S("target",t,p.b,p,[X.eo])
x.b=!0
p.ap(x)}p.sdt(null)
p.sdt(s)
p.d.h(0,w)
p.a.saN(U.dB(V.az(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=document.getElementById("testCanvas")
if(m==null)H.t(P.q("Failed to find an element with the identifier, testCanvas."))
l=E.iS(m,!0,!0,!0,!1)
x=l.d
if(x!==p){if(x!=null)x.gD().K(0,l.gcj())
l.d=p
p.gD().h(0,l.gcj())
l.dY()}x=l.z
if(x==null){x=D.al()
l.z=x}v={func:1,ret:-1,args:[D.F]}
u=H.k(new X.lr(z,s),v)
q=x.b
if(q==null){v=H.b([],[v])
x.b=v
x=v}else x=q
C.a.h(x,u)
V.ly(l)},
lr:{"^":"o:8;a,b",
$1:function(a){var z,y,x,w
H.l(a,"$isF")
z=this.a
y=this.b
x=y.a
w=[P.e]
z.cI("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.cI("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dQ.prototype
return J.hq.prototype}if(typeof a=="string")return J.bS.prototype
if(a==null)return J.dR.prototype
if(typeof a=="boolean")return J.hp.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bT.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.c2=function(a){if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bT.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.cs=function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bT.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.lc=function(a){if(typeof a=="number")return J.bR.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c_.prototype
return a}
J.ld=function(a){if(typeof a=="number")return J.bR.prototype
if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c_.prototype
return a}
J.de=function(a){if(typeof a=="string")return J.bS.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c_.prototype
return a}
J.bf=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bT.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.T=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).t(a,b)}
J.fz=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lc(a).al(a,b)}
J.dl=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ld(a).k(a,b)}
J.fA=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lo(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c2(a).j(a,b)}
J.fB=function(a,b,c,d){return J.bf(a).cJ(a,b,c,d)}
J.cw=function(a,b,c){return J.c2(a).fE(a,b,c)}
J.cx=function(a,b){return J.cs(a).A(a,b)}
J.fC=function(a,b){return J.cs(a).H(a,b)}
J.fD=function(a){return J.bf(a).gfz(a)}
J.aW=function(a){return J.L(a).gS(a)}
J.aX=function(a){return J.cs(a).gP(a)}
J.aY=function(a){return J.c2(a).gn(a)}
J.fE=function(a){return J.bf(a).gc2(a)}
J.fF=function(a){return J.bf(a).ghu(a)}
J.dm=function(a){return J.cs(a).hj(a)}
J.fG=function(a,b,c){return J.de(a).aF(a,b,c)}
J.fH=function(a){return J.de(a).hy(a)}
J.ab=function(a){return J.L(a).i(a)}
I.aU=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.c6.prototype
C.k=W.cB.prototype
C.B=W.b_.prototype
C.E=J.n.prototype
C.a=J.b2.prototype
C.h=J.dQ.prototype
C.F=J.dR.prototype
C.c=J.bR.prototype
C.i=J.bS.prototype
C.M=J.bT.prototype
C.Q=H.hW.prototype
C.R=W.hX.prototype
C.v=J.i3.prototype
C.w=W.iM.prototype
C.o=J.c_.prototype
C.x=W.bG.prototype
C.y=W.jt.prototype
C.z=new P.i1()
C.A=new P.jf()
C.j=new P.kf()
C.b=new A.c8(0,"ColorSourceType.None")
C.f=new A.c8(1,"ColorSourceType.Solid")
C.d=new A.c8(2,"ColorSourceType.Texture2D")
C.e=new A.c8(3,"ColorSourceType.TextureCube")
C.l=new P.b0(0)
C.C=new P.b0(5e6)
C.D=new P.hk("element",!0,!1,!1,!1)
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.I=function(getTagFallback) {
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
C.J=function() {
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
C.K=function(hooks) {
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
C.L=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.N=H.b(I.aU(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.O=H.b(I.aU(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.P=H.b(I.aU([]),[P.e])
C.u=H.b(I.aU([0,0,65498,45055,65535,34815,65534,18431]),[P.E])
C.m=H.b(I.aU(["bind","if","ref","repeat","syntax"]),[P.e])
C.n=H.b(I.aU(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.p=new P.je(!1)
$.ar=0
$.bj=null
$.ds=null
$.d6=!1
$.fq=null
$.fl=null
$.fw=null
$.cr=null
$.cu=null
$.df=null
$.bb=null
$.bJ=null
$.bK=null
$.d7=!1
$.P=C.j
$.ax=null
$.cE=null
$.dN=null
$.dM=null
$.dI=null
$.dH=null
$.dG=null
$.dF=null
$.m=V.hQ()
$.e6=null
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
I.$lazy(y,x,w)}})(["dE","$get$dE",function(){return H.fp("_$dart_dartClosure")},"cJ","$get$cJ",function(){return H.fp("_$dart_js")},"ey","$get$ey",function(){return H.at(H.cl({
toString:function(){return"$receiver$"}}))},"ez","$get$ez",function(){return H.at(H.cl({$method$:null,
toString:function(){return"$receiver$"}}))},"eA","$get$eA",function(){return H.at(H.cl(null))},"eB","$get$eB",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eF","$get$eF",function(){return H.at(H.cl(void 0))},"eG","$get$eG",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eD","$get$eD",function(){return H.at(H.eE(null))},"eC","$get$eC",function(){return H.at(function(){try{null.$method$}catch(z){return z.message}}())},"eI","$get$eI",function(){return H.at(H.eE(void 0))},"eH","$get$eH",function(){return H.at(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d3","$get$d3",function(){return P.ju()},"bL","$get$bL",function(){return[]},"fd","$get$fd",function(){return P.ij("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dC","$get$dC",function(){return{}},"f_","$get$f_",function(){return P.dX(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)},"d4","$get$d4",function(){return P.dW(P.e,P.bQ)},"eT","$get$eT",function(){return Z.ah(0)},"eR","$get$eR",function(){return Z.ah(511)},"aF","$get$aF",function(){return Z.ah(1)},"aE","$get$aE",function(){return Z.ah(2)},"aD","$get$aD",function(){return Z.ah(4)},"aG","$get$aG",function(){return Z.ah(8)},"aH","$get$aH",function(){return Z.ah(16)},"bE","$get$bE",function(){return Z.ah(32)},"bF","$get$bF",function(){return Z.ah(64)},"eS","$get$eS",function(){return Z.ah(96)},"b9","$get$b9",function(){return Z.ah(128)},"aC","$get$aC",function(){return Z.ah(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.F]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.ao]},{func:1,ret:P.J,args:[F.am]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[P.E,[P.f,E.aN]]},{func:1,ret:P.J,args:[D.F]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:P.Q,args:[W.A]},{func:1,args:[,]},{func:1,ret:P.Q,args:[W.as]},{func:1,ret:P.Q,args:[P.e]},{func:1,ret:W.A},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.F]}]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.E,[P.f,D.W]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.E,[P.f,V.an]]},{func:1,ret:P.e,args:[P.E]},{func:1,ret:P.Q,args:[W.R,P.e,P.e,W.c0]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,args:[,P.e]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,args:[P.e]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:P.J,args:[P.X]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.Q,args:[P.v,P.v]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:P.Q,args:[[P.f,D.W]]},{func:1,ret:V.a5,args:[P.v]},{func:1,ret:P.J,args:[F.aP,P.v,P.v]},{func:1,ret:-1,args:[P.a],opt:[P.aq]},{func:1,ret:P.J,args:[P.b6]},{func:1,ret:P.J,args:[W.a8]},{func:1,ret:P.Q,args:[V.aK]},{func:1,ret:W.R,args:[W.A]}]
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
if(x==y)H.lB(d||a)
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
Isolate.aU=a.aU
Isolate.dc=a.dc
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
if(typeof dartMainRunner==="function")dartMainRunner(X.ft,[])
else X.ft([])})})()
//# sourceMappingURL=test.dart.js.map
