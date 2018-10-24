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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d3(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d4=function(){}
var dart=[["","",,H,{"^":"",lu:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
da:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ck:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d7==null){H.kP()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.ey("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cC()]
if(v!=null)return v
v=H.kU(a)
if(v!=null)return v
if(typeof a=="function")return C.I
y=Object.getPrototypeOf(a)
if(y==null)return C.r
if(y===Object.prototype)return C.r
if(typeof w=="function"){Object.defineProperty(w,$.$get$cC(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
n:{"^":"a;",
q:function(a,b){return a===b},
gS:function(a){return H.bp(a)},
i:["dV",function(a){return"Instance of '"+H.aX(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h2:{"^":"n;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isa3:1},
dH:{"^":"n;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isH:1},
cD:{"^":"n;",
gS:function(a){return 0},
i:["dW",function(a){return String(a)}]},
hD:{"^":"cD;"},
cV:{"^":"cD;"},
bP:{"^":"cD;",
i:function(a){var z=a[$.$get$ds()]
if(z==null)return this.dW(a)
return"JavaScript function for "+H.i(J.a4(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscy:1},
aT:{"^":"n;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.q(P.ac("add"))
a.push(b)},
O:function(a,b){var z
if(!!a.fixed$length)H.q(P.ac("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
bO:function(a,b){var z,y
H.x(b,"$isc",[H.z(a,0)],"$asc")
if(!!a.fixed$length)H.q(P.ac("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.w)(b),++y)a.push(b[y])},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.ba(a))}},
w:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.X(z,y,H.i(a[y]))
return z.join(b)},
fZ:function(a){return this.w(a,"")},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bu:function(a,b,c){var z=a.length
if(b>z)throw H.f(P.ag(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.ag(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.z(a,0)])
return H.b(a.slice(b,c),[H.z(a,0)])},
gc9:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.h0())},
aE:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.cz(a,"[","]")},
gV:function(a){return new J.ak(a,a.length,0,[H.z(a,0)])},
gS:function(a){return H.bp(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.q(P.ac("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.bZ(b,"newLength",null))
if(b<0)throw H.f(P.ag(b,0,null,"newLength",null))
a.length=b},
X:function(a,b,c){H.X(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.q(P.ac("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aP(a,b))
if(b>=a.length||b<0)throw H.f(H.aP(a,b))
a[b]=c},
$isc:1,
$ise:1,
p:{
h1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.bZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ag(a,0,4294967295,"length",null))
return J.dE(new Array(a),b)},
dE:function(a,b){return J.bi(H.b(a,[b]))},
bi:function(a){H.bJ(a)
a.fixed$length=Array
return a}}},
lt:{"^":"aT;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.w(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c6:{"^":"n;",
hw:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.f(P.ac(""+a+".toInt()"))},
c6:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.ac(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ac(""+a+".round()"))},
dK:function(a,b){var z,y
if(b>20)throw H.f(P.ag(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
l:function(a,b){if(typeof b!=="number")throw H.f(H.aJ(b))
return a*b},
dQ:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cV(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cV(a,b)},
cV:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.ac("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
b7:function(a,b){var z
if(a>0)z=this.fa(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fa:function(a,b){return b>31?0:a>>>b},
a8:function(a,b){if(typeof b!=="number")throw H.f(H.aJ(b))
return a<b},
$isv:1,
$isV:1},
dG:{"^":"c6;",$isA:1},
dF:{"^":"c6;"},
cB:{"^":"n;",
bX:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aP(a,b))
if(b<0)throw H.f(H.aP(a,b))
if(b>=a.length)H.q(H.aP(a,b))
return a.charCodeAt(b)},
b4:function(a,b){if(b>=a.length)throw H.f(H.aP(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.R(b)
if(typeof b!=="string")throw H.f(P.bZ(b,null,null))
return a+b},
bv:function(a,b,c){H.X(c)
if(c==null)c=a.length
if(b<0)throw H.f(P.ca(b,null,null))
if(b>c)throw H.f(P.ca(b,null,null))
if(c>a.length)throw H.f(P.ca(c,null,null))
return a.substring(b,c)},
cp:function(a,b){return this.bv(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.x)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hb:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a6:function(a,b){return this.hb(a,b," ")},
fL:function(a,b,c){if(c>a.length)throw H.f(P.ag(c,0,a.length,null,null))
return H.fd(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdU:1,
$ism:1}}],["","",,H,{"^":"",
h0:function(){return new P.id("No element")},
Y:{"^":"iN;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.i.bX(this.a,b)},
$asez:function(){return[P.A]},
$asr:function(){return[P.A]},
$asc:function(){return[P.A]},
$ase:function(){return[P.A]}},
fN:{"^":"c;"},
dM:{"^":"a;a,b,c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bX(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.f(P.ba(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.C(z,w);++this.c
return!0}},
hj:{"^":"c;a,b,$ti",
gV:function(a){return new H.hk(J.bK(this.a),this.b,this.$ti)},
gk:function(a){return J.b8(this.a)},
C:function(a,b){return this.b.$1(J.dd(this.a,b))},
$asc:function(a,b){return[b]}},
hk:{"^":"cA;0a,b,c,$ti",
B:function(){var z=this.b
if(z.B()){this.a=this.c.$1(z.gL(z))
return!0}this.a=null
return!1},
gL:function(a){return this.a},
$ascA:function(a,b){return[b]}},
j2:{"^":"c;a,b,$ti",
gV:function(a){return new H.j3(J.bK(this.a),this.b,this.$ti)}},
j3:{"^":"cA;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gL(z)))return!0
return!1},
gL:function(a){var z=this.a
return z.gL(z)}},
c3:{"^":"a;$ti"},
ez:{"^":"a;$ti"},
iN:{"^":"c7+ez;"}}],["","",,H,{"^":"",
kK:function(a){return init.types[H.X(a)]},
kS:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isB},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a4(a)
if(typeof z!=="string")throw H.f(H.aJ(a))
return z},
bp:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aX:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.A||!!J.I(a).$iscV){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.b4(w,0)===36)w=C.i.cp(w,1)
r=H.d8(H.bJ(H.aQ(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dX:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hN:function(a){var z,y,x,w
z=H.b([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.aJ(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b7(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.aJ(w))}return H.dX(z)},
dY:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.aJ(x))
if(x<0)throw H.f(H.aJ(x))
if(x>65535)return H.hN(a)}return H.dX(a)},
hM:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b7(z,10))>>>0,56320|z&1023)}throw H.f(P.ag(a,0,1114111,null,null))},
a7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hL:function(a){return a.b?H.a7(a).getUTCFullYear()+0:H.a7(a).getFullYear()+0},
hJ:function(a){return a.b?H.a7(a).getUTCMonth()+1:H.a7(a).getMonth()+1},
hF:function(a){return a.b?H.a7(a).getUTCDate()+0:H.a7(a).getDate()+0},
hG:function(a){return a.b?H.a7(a).getUTCHours()+0:H.a7(a).getHours()+0},
hI:function(a){return a.b?H.a7(a).getUTCMinutes()+0:H.a7(a).getMinutes()+0},
hK:function(a){return a.b?H.a7(a).getUTCSeconds()+0:H.a7(a).getSeconds()+0},
hH:function(a){return a.b?H.a7(a).getUTCMilliseconds()+0:H.a7(a).getMilliseconds()+0},
o:function(a){throw H.f(H.aJ(a))},
h:function(a,b){if(a==null)J.b8(a)
throw H.f(H.aP(a,b))},
aP:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,"index",null)
z=H.X(J.b8(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.ca(b,"index",null)},
kG:function(a,b,c){if(a>c)return new P.c9(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c9(a,c,!0,b,"end","Invalid value")
return new P.az(!0,b,"end",null)},
aJ:function(a){return new P.az(!0,a,null,null)},
kB:function(a){if(typeof a!=="number")throw H.f(H.aJ(a))
return a},
f:function(a){var z
if(a==null)a=new P.dT()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ff})
z.name=""}else z.toString=H.ff
return z},
ff:function(){return J.a4(this.dartException)},
q:function(a){throw H.f(a)},
w:function(a){throw H.f(P.ba(a))},
aL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b7(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cE(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dS(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eh()
u=$.$get$ei()
t=$.$get$ej()
s=$.$get$ek()
r=$.$get$eo()
q=$.$get$ep()
p=$.$get$em()
$.$get$el()
o=$.$get$er()
n=$.$get$eq()
m=v.a5(y)
if(m!=null)return z.$1(H.cE(H.R(y),m))
else{m=u.a5(y)
if(m!=null){m.method="call"
return z.$1(H.cE(H.R(y),m))}else{m=t.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=r.a5(y)
if(m==null){m=q.a5(y)
if(m==null){m=p.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=o.a5(y)
if(m==null){m=n.a5(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dS(H.R(y),m))}}return z.$1(new H.iM(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e3()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.az(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e3()
return a},
b6:function(a){var z
if(a==null)return new H.eQ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eQ(a)},
kI:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.X(0,a[y],a[x])}return b},
kR:function(a,b,c,d,e,f){H.j(a,"$iscy")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.p("Unsupported number of arguments for wrapped closure"))},
b4:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kR)
a.$identity=z
return z},
fx:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$ise){z.$reflectionInfo=d
x=H.hQ(z).r}else x=d
w=e?Object.create(new H.ie().constructor.prototype):Object.create(new H.cp(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aq
if(typeof u!=="number")return u.D()
$.aq=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dm(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kK,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dh:H.cq
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
fu:function(a,b,c,d){var z=H.cq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dm:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fw(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fu(y,!w,z,b)
if(y===0){w=$.aq
if(typeof w!=="number")return w.D()
$.aq=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b9
if(v==null){v=H.c_("self")
$.b9=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aq
if(typeof w!=="number")return w.D()
$.aq=w+1
t+=w
w="return function("+t+"){return this."
v=$.b9
if(v==null){v=H.c_("self")
$.b9=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fv:function(a,b,c,d){var z,y
z=H.cq
y=H.dh
switch(b?-1:a){case 0:throw H.f(H.hZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fw:function(a,b){var z,y,x,w,v,u,t,s
z=$.b9
if(z==null){z=H.c_("self")
$.b9=z}y=$.dg
if(y==null){y=H.c_("receiver")
$.dg=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fv(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.aq
if(typeof y!=="number")return y.D()
$.aq=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.aq
if(typeof y!=="number")return y.D()
$.aq=y+1
return new Function(z+y+"}")()},
d3:function(a,b,c,d,e,f,g){var z,y
z=J.bi(H.bJ(b))
H.X(c)
y=!!J.I(d).$ise?J.bi(d):d
return H.fx(a,z,c,y,!!e,f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aw(a,"String"))},
kX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aw(a,"num"))},
f3:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aw(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aw(a,"int"))},
fb:function(a,b){throw H.f(H.aw(a,H.R(b).substring(3)))},
kZ:function(a,b){var z=J.bX(b)
throw H.f(H.ft(a,z.bv(b,3,z.gk(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.fb(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.kZ(a,b)},
bJ:function(a){if(a==null)return a
if(!!J.I(a).$ise)return a
throw H.f(H.aw(a,"List"))},
kT:function(a,b){if(a==null)return a
if(!!J.I(a).$ise)return a
if(J.I(a)[b])return a
H.fb(a,b)},
f4:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
bW:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f4(J.I(a))
if(z==null)return!1
y=H.f7(z,null,b,null)
return y},
k:function(a,b){var z,y
if(a==null)return a
if($.d_)return a
$.d_=!0
try{if(H.bW(a,b))return a
z=H.bY(b)
y=H.aw(a,z)
throw H.f(y)}finally{$.d_=!1}},
d5:function(a,b){if(a!=null&&!H.d2(a,b))H.q(H.aw(a,H.bY(b)))
return a},
eZ:function(a){var z
if(a instanceof H.t){z=H.f4(J.I(a))
if(z!=null)return H.bY(z)
return"Closure"}return H.aX(a)},
l3:function(a){throw H.f(new P.fF(H.R(a)))},
f5:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aQ:function(a){if(a==null)return
return a.$ti},
mh:function(a,b,c){return H.b7(a["$as"+H.i(c)],H.aQ(b))},
bI:function(a,b,c,d){var z
H.R(c)
H.X(d)
z=H.b7(a["$as"+H.i(c)],H.aQ(b))
return z==null?null:z[d]},
ay:function(a,b,c){var z
H.R(b)
H.X(c)
z=H.b7(a["$as"+H.i(b)],H.aQ(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.X(b)
z=H.aQ(a)
return z==null?null:z[b]},
bY:function(a){var z=H.aR(a,null)
return z},
aR:function(a,b){var z,y
H.x(b,"$ise",[P.m],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d8(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.i(b[y])}if('func' in a)return H.kr(a,b)
if('futureOr' in a)return"FutureOr<"+H.aR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.x(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aR(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aR(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aR(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aR(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kH(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.aR(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d8:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$ise",[P.m],"$ase")
if(a==null)return""
z=new P.bT("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aR(u,c)}v="<"+z.i(0)+">"
return v},
b7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bG:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aQ(a)
y=J.I(a)
if(y[b]==null)return!1
return H.f1(H.b7(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.R(b)
H.bJ(c)
H.R(d)
if(a==null)return a
z=H.bG(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d8(c,0,null)
throw H.f(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f1:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aj(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aj(a[y],b,c[y],d))return!1
return!0},
mf:function(a,b,c){return a.apply(b,H.b7(J.I(b)["$as"+H.i(c)],H.aQ(b)))},
f8:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="H"||a===-1||a===-2||H.f8(z)}return!1},
d2:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="H"||b===-1||b===-2||H.f8(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d2(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bW(a,b)}y=J.I(a).constructor
x=H.aQ(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aj(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.d2(a,b))throw H.f(H.aw(a,H.bY(b)))
return a},
aj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aj(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.f7(a,b,c,d)
if('func' in a)return c.builtin$cls==="cy"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aj("type" in a?a.type:null,b,x,d)
else if(H.aj(a,b,x,d))return!0
else{if(!('$is'+"bf" in y.prototype))return!1
w=y.prototype["$as"+"bf"]
v=H.b7(w,z?a.slice(1):null)
return H.aj(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bY(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f1(H.b7(r,z),b,u,d)},
f7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aj(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aj(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aj(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aj(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kW(m,b,l,d)},
kW:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aj(c[w],d,a[w],b))return!1}return!0},
mg:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
kU:function(a){var z,y,x,w,v,u
z=H.R($.f6.$1(a))
y=$.cj[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cl[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.f0.$2(a,z))
if(z!=null){y=$.cj[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cl[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cm(x)
$.cj[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cl[z]=x
return x}if(v==="-"){u=H.cm(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fa(a,x)
if(v==="*")throw H.f(P.ey(z))
if(init.leafTags[z]===true){u=H.cm(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fa(a,x)},
fa:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.da(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cm:function(a){return J.da(a,!1,null,!!a.$isB)},
kV:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cm(z)
else return J.da(z,c,null,null)},
kP:function(){if(!0===$.d7)return
$.d7=!0
H.kQ()},
kQ:function(){var z,y,x,w,v,u,t,s
$.cj=Object.create(null)
$.cl=Object.create(null)
H.kL()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fc.$1(v)
if(u!=null){t=H.kV(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kL:function(){var z,y,x,w,v,u,t
z=C.F()
z=H.b3(C.C,H.b3(C.H,H.b3(C.p,H.b3(C.p,H.b3(C.G,H.b3(C.D,H.b3(C.E(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f6=new H.kM(v)
$.f0=new H.kN(u)
$.fc=new H.kO(t)},
b3:function(a,b){return a(b)||b},
fd:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fe:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hP:{"^":"a;a,b,c,d,e,f,r,0x",p:{
hQ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bi(z)
y=z[0]
x=z[1]
return new H.hP(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iA:{"^":"a;a,b,c,d,e,f",
a5:function(a){var z,y,x
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
av:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cc:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
en:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hA:{"^":"W;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
dS:function(a,b){return new H.hA(a,b==null?null:b.method)}}},
h5:{"^":"W;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
p:{
cE:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h5(a,y,z?null:b.receiver)}}},
iM:{"^":"W;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l4:{"^":"t:16;a",
$1:function(a){if(!!J.I(a).$isW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eQ:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isao:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.aX(this).trim()+"'"},
gdN:function(){return this},
$iscy:1,
gdN:function(){return this}},
e7:{"^":"t;"},
ie:{"^":"e7;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cp:{"^":"e7;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cp))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bp(this.a)
else y=typeof z!=="object"?J.aS(z):H.bp(z)
return(y^H.bp(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.aX(z)+"'")},
p:{
cq:function(a){return a.a},
dh:function(a){return a.c},
c_:function(a){var z,y,x,w,v
z=new H.cp("self","target","receiver","name")
y=J.bi(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iB:{"^":"W;a",
i:function(a){return this.a},
p:{
aw:function(a,b){return new H.iB("TypeError: "+H.i(P.c2(a))+": type '"+H.eZ(a)+"' is not a subtype of type '"+b+"'")}}},
fs:{"^":"W;a",
i:function(a){return this.a},
p:{
ft:function(a,b){return new H.fs("CastError: "+H.i(P.c2(a))+": type '"+H.eZ(a)+"' is not a subtype of type '"+b+"'")}}},
hY:{"^":"W;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
p:{
hZ:function(a){return new H.hY(a)}}},
aU:{"^":"hh;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gat:function(a){return new H.dL(this,[H.z(this,0)])},
d4:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cI(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cI(y,b)}else return this.fX(b)},
fX:function(a){var z=this.d
if(z==null)return!1
return this.c7(this.bC(z,J.aS(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b5(w,b)
x=y==null?null:y.b
return x}else return this.fY(b)},
fY:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bC(z,J.aS(a)&0x3ffffff)
x=this.c7(y,a)
if(x<0)return
return y[x].b},
X:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bI()
this.b=z}this.cA(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bI()
this.c=y}this.cA(y,b,c)}else{x=this.d
if(x==null){x=this.bI()
this.d=x}w=J.aS(b)&0x3ffffff
v=this.bC(x,w)
if(v==null)this.bM(x,w,[this.bJ(b,c)])
else{u=this.c7(v,b)
if(u>=0)v[u].b=c
else v.push(this.bJ(b,c))}}},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.ba(this))
z=z.c}},
cA:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.b5(a,b)
if(z==null)this.bM(a,b,this.bJ(b,c))
else z.b=c},
ep:function(){this.r=this.r+1&67108863},
bJ:function(a,b){var z,y
z=new H.h9(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ep()
return z},
c7:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.dO(this)},
b5:function(a,b){return a[b]},
bC:function(a,b){return a[b]},
bM:function(a,b,c){a[b]=c},
ej:function(a,b){delete a[b]},
cI:function(a,b){return this.b5(a,b)!=null},
bI:function(){var z=Object.create(null)
this.bM(z,"<non-identifier-key>",z)
this.ej(z,"<non-identifier-key>")
return z},
$isdK:1},
h9:{"^":"a;a,b,0c,0d"},
dL:{"^":"fN;a,$ti",
gk:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.ha(z,z.r,this.$ti)
y.c=z.e
return y}},
ha:{"^":"a;a,b,0c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.ba(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kM:{"^":"t:16;a",
$1:function(a){return this.a(a)}},
kN:{"^":"t:26;a",
$2:function(a,b){return this.a(a,b)}},
kO:{"^":"t:27;a",
$1:function(a){return this.a(H.R(a))}},
h3:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdU:1,
p:{
h4:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(new P.fW("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kH:function(a){return J.dE(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bC:function(a){return a},
aO:function(a,b,c){H.bJ(b)
if(a>>>0!==a||a>=c)throw H.f(H.aP(b,a))},
kq:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.kG(a,b,c))
return b},
hx:{"^":"n;",$ism0:1,"%":"DataView;ArrayBufferView;cJ|eK|eL|hw|eM|eN|aN"},
cJ:{"^":"hx;",
gk:function(a){return a.length},
$isB:1,
$asB:I.d4},
hw:{"^":"eL;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
$asc3:function(){return[P.v]},
$asr:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
$ise:1,
$ase:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aN:{"^":"eN;",
$asc3:function(){return[P.A]},
$asr:function(){return[P.A]},
$isc:1,
$asc:function(){return[P.A]},
$ise:1,
$ase:function(){return[P.A]}},
lC:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lD:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lE:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lF:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lG:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lH:{"^":"aN;",
gk:function(a){return a.length},
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hy:{"^":"aN;",
gk:function(a){return a.length},
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
bu:function(a,b,c){return new Uint8Array(a.subarray(b,H.kq(b,c,a.length)))},
"%":";Uint8Array"},
eK:{"^":"cJ+r;"},
eL:{"^":"eK+c3;"},
eM:{"^":"cJ+r;"},
eN:{"^":"eM+c3;"}}],["","",,P,{"^":"",
j5:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ky()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b4(new P.j7(z),1)).observe(y,{childList:true})
return new P.j6(z,y,x)}else if(self.setImmediate!=null)return P.kz()
return P.kA()},
m4:[function(a){self.scheduleImmediate(H.b4(new P.j8(H.k(a,{func:1,ret:-1})),0))},"$1","ky",4,0,12],
m5:[function(a){self.setImmediate(H.b4(new P.j9(H.k(a,{func:1,ret:-1})),0))},"$1","kz",4,0,12],
m6:[function(a){P.cR(C.l,H.k(a,{func:1,ret:-1}))},"$1","kA",4,0,12],
cR:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.f.Z(a.a,1000)
return P.k4(z<0?0:z,b)},
ec:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.aY]})
z=C.f.Z(a.a,1000)
return P.k5(z<0?0:z,b)},
ku:function(a,b){if(H.bW(a,{func:1,args:[P.a,P.ao]}))return b.hk(a,null,P.a,P.ao)
if(H.bW(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.f(P.bZ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kt:function(){var z,y
for(;z=$.b2,z!=null;){$.bE=null
y=z.b
$.b2=y
if(y==null)$.bD=null
z.a.$0()}},
me:[function(){$.d0=!0
try{P.kt()}finally{$.bE=null
$.d0=!1
if($.b2!=null)$.$get$cX().$1(P.f2())}},"$0","f2",0,0,3],
eY:function(a){var z=new P.eF(H.k(a,{func:1,ret:-1}))
if($.b2==null){$.bD=z
$.b2=z
if(!$.d0)$.$get$cX().$1(P.f2())}else{$.bD.b=z
$.bD=z}},
kx:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.b2
if(z==null){P.eY(a)
$.bE=$.bD
return}y=new P.eF(a)
x=$.bE
if(x==null){y.b=z
$.bE=y
$.b2=y}else{y.b=x.b
x.b=y
$.bE=y
if(y.b==null)$.bD=y}},
l_:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.N
if(C.j===y){P.ci(null,null,C.j,a)
return}y.toString
P.ci(null,null,y,H.k(y.bS(a),z))},
eb:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.N
if(y===C.j){y.toString
return P.cR(a,b)}return P.cR(a,H.k(y.bS(b),z))},
ix:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aY]}
H.k(b,z)
y=$.N
if(y===C.j){y.toString
return P.ec(a,b)}x=y.d0(b,P.aY)
$.N.toString
return P.ec(a,H.k(x,z))},
ch:function(a,b,c,d,e){var z={}
z.a=d
P.kx(new P.kv(z,e))},
eW:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
eX:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kw:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
ci:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bS(d):c.fJ(d,-1)
P.eY(d)},
j7:{"^":"t:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j6:{"^":"t:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j8:{"^":"t:2;a",
$0:function(){this.a.$0()}},
j9:{"^":"t:2;a",
$0:function(){this.a.$0()}},
eT:{"^":"a;a,0b,c",
e6:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b4(new P.k7(this,b),0),a)
else throw H.f(P.ac("`setTimeout()` not found."))},
e7:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b4(new P.k6(this,a,Date.now(),b),0),a)
else throw H.f(P.ac("Periodic timer."))},
$isaY:1,
p:{
k4:function(a,b){var z=new P.eT(!0,0)
z.e6(a,b)
return z},
k5:function(a,b){var z=new P.eT(!1,0)
z.e7(a,b)
return z}}},
k7:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k6:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dZ(w,x)}z.c=y
this.d.$1(z)}},
b1:{"^":"a;0a,b,c,d,e,$ti",
h4:function(a){if(this.c!==6)return!0
return this.b.b.ci(H.k(this.d,{func:1,ret:P.a3,args:[P.a]}),a.a,P.a3,P.a)},
fW:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bW(z,{func:1,args:[P.a,P.ao]}))return H.d5(w.hq(z,a.a,a.b,null,y,P.ao),x)
else return H.d5(w.ci(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aI:{"^":"a;cU:a<,b,0f1:c<,$ti",
dJ:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.j){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ku(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aI(0,$.N,[c])
w=b==null?1:3
this.cB(new P.b1(x,w,a,b,[z,c]))
return x},
hv:function(a,b){return this.dJ(a,null,b)},
cB:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isb1")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaI")
z=y.a
if(z<4){y.cB(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ci(null,null,z,H.k(new P.jn(this,a),{func:1,ret:-1}))}},
cP:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isb1")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaI")
y=u.a
if(y<4){u.cP(a)
return}this.a=y
this.c=u.c}z.a=this.b6(a)
y=this.b
y.toString
P.ci(null,null,y,H.k(new P.js(z,this),{func:1,ret:-1}))}},
bL:function(){var z=H.j(this.c,"$isb1")
this.c=null
return this.b6(z)},
b6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cF:function(a){var z,y,x,w
z=H.z(this,0)
H.d5(a,{futureOr:1,type:z})
y=this.$ti
x=H.bG(a,"$isbf",y,"$asbf")
if(x){z=H.bG(a,"$isaI",y,null)
if(z)P.eH(a,this)
else P.jo(a,this)}else{w=this.bL()
H.C(a,z)
this.a=4
this.c=a
P.bA(this,w)}},
by:[function(a,b){var z
H.j(b,"$isao")
z=this.bL()
this.a=8
this.c=new P.ad(a,b)
P.bA(this,z)},function(a){return this.by(a,null)},"hB","$2","$1","gef",4,2,30],
$isbf:1,
p:{
jo:function(a,b){var z,y,x
b.a=1
try{a.dJ(new P.jp(b),new P.jq(b),null)}catch(x){z=H.aL(x)
y=H.b6(x)
P.l_(new P.jr(b,z,y))}},
eH:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaI")
if(z>=4){y=b.bL()
b.a=a.a
b.c=a.c
P.bA(b,y)}else{y=H.j(b.c,"$isb1")
b.a=2
b.c=a
a.cP(y)}},
bA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isad")
y=y.b
u=v.a
t=v.b
y.toString
P.ch(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bA(z.a,b)}y=z.a
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
if(p){H.j(r,"$isad")
y=y.b
u=r.a
t=r.b
y.toString
P.ch(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.jv(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ju(x,b,r).$0()}else if((y&2)!==0)new P.jt(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.I(y).$isbf){if(y.a>=4){n=H.j(t.c,"$isb1")
t.c=null
b=t.b6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eH(y,t)
return}}m=b.b
n=H.j(m.c,"$isb1")
m.c=null
b=m.b6(n)
y=x.a
u=x.b
if(!y){H.C(u,H.z(m,0))
m.a=4
m.c=u}else{H.j(u,"$isad")
m.a=8
m.c=u}z.a=m
y=m}}}},
jn:{"^":"t:2;a,b",
$0:function(){P.bA(this.a,this.b)}},
js:{"^":"t:2;a,b",
$0:function(){P.bA(this.b,this.a.a)}},
jp:{"^":"t:15;a",
$1:function(a){var z=this.a
z.a=0
z.cF(a)}},
jq:{"^":"t:34;a",
$2:function(a,b){this.a.by(a,H.j(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
jr:{"^":"t:2;a,b,c",
$0:function(){this.a.by(this.b,this.c)}},
jv:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dH(H.k(w.d,{func:1}),null)}catch(v){y=H.aL(v)
x=H.b6(v)
if(this.d){w=H.j(this.a.a.c,"$isad").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isad")
else u.b=new P.ad(y,x)
u.a=!0
return}if(!!J.I(z).$isbf){if(z instanceof P.aI&&z.gcU()>=4){if(z.gcU()===8){w=this.b
w.b=H.j(z.gf1(),"$isad")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hv(new P.jw(t),null)
w.a=!1}}},
jw:{"^":"t:36;a",
$1:function(a){return this.a}},
ju:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.ci(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aL(t)
y=H.b6(t)
x=this.a
x.b=new P.ad(z,y)
x.a=!0}}},
jt:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isad")
w=this.c
if(w.h4(z)&&w.e!=null){v=this.b
v.b=w.fW(z)
v.a=!1}}catch(u){y=H.aL(u)
x=H.b6(u)
w=H.j(this.a.a.c,"$isad")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ad(y,x)
s.a=!0}}},
eF:{"^":"a;a,0b"},
cO:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aI(0,$.N,[P.A])
z.a=0
this.h1(new P.ii(z,this),!0,new P.ij(z,y),y.gef())
return y}},
ii:{"^":"t;a,b",
$1:function(a){H.C(a,H.ay(this.b,"cO",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.ay(this.b,"cO",0)]}}},
ij:{"^":"t:2;a,b",
$0:function(){this.b.cF(this.a.a)}},
e5:{"^":"a;$ti"},
ih:{"^":"a;"},
aY:{"^":"a;"},
ad:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isW:1},
ke:{"^":"a;",$ism3:1},
kv:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dT()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.i(0)
throw x}},
jR:{"^":"ke;",
hr:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.j===$.N){a.$0()
return}P.eW(null,null,this,a,-1)}catch(x){z=H.aL(x)
y=H.b6(x)
P.ch(null,null,this,z,H.j(y,"$isao"))}},
hs:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.N){a.$1(b)
return}P.eX(null,null,this,a,b,-1,c)}catch(x){z=H.aL(x)
y=H.b6(x)
P.ch(null,null,this,z,H.j(y,"$isao"))}},
fJ:function(a,b){return new P.jT(this,H.k(a,{func:1,ret:b}),b)},
bS:function(a){return new P.jS(this,H.k(a,{func:1,ret:-1}))},
d0:function(a,b){return new P.jU(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
dH:function(a,b){H.k(a,{func:1,ret:b})
if($.N===C.j)return a.$0()
return P.eW(null,null,this,a,b)},
ci:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.N===C.j)return a.$1(b)
return P.eX(null,null,this,a,b,c,d)},
hq:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.N===C.j)return a.$2(b,c)
return P.kw(null,null,this,a,b,c,d,e,f)},
hk:function(a,b,c,d){return H.k(a,{func:1,ret:b,args:[c,d]})}},
jT:{"^":"t;a,b,c",
$0:function(){return this.a.dH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jS:{"^":"t:3;a,b",
$0:function(){return this.a.hr(this.b)}},
jU:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.hs(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hc:function(a,b,c){H.bJ(a)
return H.x(H.kI(a,new H.aU(0,0,[b,c])),"$isdK",[b,c],"$asdK")},
hb:function(a,b){return new H.aU(0,0,[a,b])},
hd:function(a,b,c,d){return new P.jD(0,0,[d])},
h_:function(a,b,c){var z,y
if(P.d1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bF()
C.a.h(y,a)
try{P.ks(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.e6(b,H.kT(z,"$isc"),", ")+c
return y.charCodeAt(0)==0?y:y},
cz:function(a,b,c){var z,y,x
if(P.d1(a))return b+"..."+c
z=new P.bT(b)
y=$.$get$bF()
C.a.h(y,a)
try{x=z
x.a=P.e6(x.gay(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gay()+c
y=z.gay()
return y.charCodeAt(0)==0?y:y},
d1:function(a){var z,y
for(z=0;y=$.$get$bF(),z<y.length;++z)if(a===y[z])return!0
return!1},
ks:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.i(z.gL(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gL(z);++x
if(!z.B()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL(z);++x
for(;z.B();t=s,s=r){r=z.gL(z);++x
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
dO:function(a){var z,y,x
z={}
if(P.d1(a))return"{...}"
y=new P.bT("")
try{C.a.h($.$get$bF(),a)
x=y
x.a=x.gay()+"{"
z.a=!0
J.fk(a,new P.hi(z,y))
z=y
z.a=z.gay()+"}"}finally{z=$.$get$bF()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gay()
return z.charCodeAt(0)==0?z:z},
jD:{"^":"jx;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){return P.eJ(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cZ()
this.b=z}return this.cD(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cZ()
this.c=y}return this.cD(y,b)}else return this.e9(0,b)},
e9:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.cZ()
this.d=z}y=this.cG(b)
x=z[y]
if(x==null)z[y]=[this.bx(b)]
else{if(this.cL(x,b)>=0)return!1
x.push(this.bx(b))}return!0},
O:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cQ(this.c,b)
else return this.eX(0,b)},
eX:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.em(z,b)
x=this.cL(y,b)
if(x<0)return!1
this.cW(y.splice(x,1)[0])
return!0},
cD:function(a,b){H.C(b,H.z(this,0))
if(H.j(a[b],"$iscY")!=null)return!1
a[b]=this.bx(b)
return!0},
cQ:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$iscY")
if(z==null)return!1
this.cW(z)
delete a[b]
return!0},
cE:function(){this.r=this.r+1&67108863},
bx:function(a){var z,y
z=new P.cY(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cE()
return z},
cW:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cE()},
cG:function(a){return J.aS(a)&0x3ffffff},
em:function(a,b){return a[this.cG(b)]},
cL:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
p:{
cZ:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cY:{"^":"a;a,0b,0c"},
jE:{"^":"a;a,b,0c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.ba(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}},
p:{
eJ:function(a,b,c){var z=new P.jE(a,b,[c])
z.c=a.e
return z}}},
jx:{"^":"i_;"},
c7:{"^":"jF;",$isc:1,$ise:1},
r:{"^":"a;$ti",
gV:function(a){return new H.dM(a,this.gk(a),0,[H.bI(this,a,"r",0)])},
C:function(a,b){return this.j(a,b)},
hy:function(a,b){var z,y,x
z=H.b([],[H.bI(this,a,"r",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.X(z,y,this.j(a,y));++y}return z},
hx:function(a){return this.hy(a,!0)},
i:function(a){return P.cz(a,"[","]")}},
hh:{"^":"a9;"},
hi:{"^":"t:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
a9:{"^":"a;$ti",
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bI(this,a,"a9",0),H.bI(this,a,"a9",1)]})
for(z=J.bK(this.gat(a));z.B();){y=z.gL(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b8(this.gat(a))},
i:function(a){return P.dO(a)},
$isa1:1},
i1:{"^":"a;$ti",
i:function(a){return P.cz(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.de("index"))
if(b<0)H.q(P.ag(b,0,null,"index",null))
for(z=P.eJ(this,this.r,H.z(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.f(P.M(b,this,"index",null,y))},
$isc:1},
i_:{"^":"i1;"},
jF:{"^":"a+r;"}}],["","",,P,{"^":"",cu:{"^":"a;$ti"},dp:{"^":"ih;$ti"},fP:{"^":"cu;",
$ascu:function(){return[P.m,[P.e,P.A]]}},iT:{"^":"fP;a"},iU:{"^":"dp;",
fN:function(a,b,c){var z,y,x,w
z=a.length
P.dZ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kd(0,0,x)
if(w.el(a,b,z)!==z)w.cX(C.i.bX(a,z-1),0)
return C.K.bu(x,0,w.b)},
fM:function(a){return this.fN(a,0,null)},
$asdp:function(){return[P.m,[P.e,P.A]]}},kd:{"^":"a;a,b,c",
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
el:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.bX(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.b4(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cX(w,C.i.b4(a,u)))x=u}else if(w<=2047){v=this.b
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
fR:function(a){var z=J.I(a)
if(!!z.$ist)return z.i(a)
return"Instance of '"+H.aX(a)+"'"},
he:function(a,b,c,d){var z,y
H.C(b,d)
z=J.h1(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.X(z,y,b)
return H.x(z,"$ise",[d],"$ase")},
hf:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gV(a);x.B();)C.a.h(y,H.C(x.gL(x),c))
if(b)return y
return H.x(J.bi(y),"$ise",z,"$ase")},
cP:function(a,b,c){var z,y
z=P.A
H.x(a,"$isc",[z],"$asc")
if(a.constructor===Array){H.x(a,"$isaT",[z],"$asaT")
y=a.length
c=P.dZ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a8()
z=c<y}else z=!0
return H.dY(z?C.a.bu(a,b,c):a)}return P.ik(a,b,c)},
ik:function(a,b,c){var z,y,x
H.x(a,"$isc",[P.A],"$asc")
z=J.bK(a)
for(y=0;y<b;++y)if(!z.B())throw H.f(P.ag(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gL(z))
return H.dY(x)},
hR:function(a,b,c){return new H.h3(a,H.h4(a,!1,!0,!1))},
kc:function(a,b,c,d){var z,y,x,w,v,u
H.x(a,"$ise",[P.A],"$ase")
if(c===C.u){z=$.$get$eV().b
z=z.test(b)}else z=!1
if(z)return b
y=C.y.fM(H.C(b,H.ay(c,"cu",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hM(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fR(a)},
p:function(a){return new P.eG(a)},
dc:function(a){H.kY(a)},
a3:{"^":"a;"},
"+bool":0,
al:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.f.b7(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fG(H.hL(this))
y=P.bL(H.hJ(this))
x=P.bL(H.hF(this))
w=P.bL(H.hG(this))
v=P.bL(H.hI(this))
u=P.bL(H.hK(this))
t=P.fH(H.hH(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fG:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bL:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"V;"},
"+double":0,
bc:{"^":"a;a",
a8:function(a,b){return C.f.a8(this.a,H.j(b,"$isbc").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bc))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fM()
y=this.a
if(y<0)return"-"+new P.bc(0-y).i(0)
x=z.$1(C.f.Z(y,6e7)%60)
w=z.$1(C.f.Z(y,1e6)%60)
v=new P.fL().$1(y%1e6)
return""+C.f.Z(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
p:{
dy:function(a,b,c,d,e,f){return new P.bc(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fL:{"^":"t:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fM:{"^":"t:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
W:{"^":"a;"},
dT:{"^":"W;",
i:function(a){return"Throw of null."}},
az:{"^":"W;a,b,c,d",
gbA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbz:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gbA()+y+x
if(!this.a)return w
v=this.gbz()
u=P.c2(this.b)
return w+v+": "+H.i(u)},
p:{
fn:function(a){return new P.az(!1,null,null,a)},
bZ:function(a,b,c){return new P.az(!0,a,b,c)},
de:function(a){return new P.az(!1,null,a,"Must not be null")}}},
c9:{"^":"az;e,f,a,b,c,d",
gbA:function(){return"RangeError"},
gbz:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
p:{
ca:function(a,b,c){return new P.c9(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c9(b,c,!0,a,d,"Invalid value")},
dZ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.f(P.ag(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.f(P.ag(b,a,c,"end",f))
return b}return c}}},
fZ:{"^":"az;e,k:f>,a,b,c,d",
gbA:function(){return"RangeError"},
gbz:function(){if(J.fg(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
p:{
M:function(a,b,c,d,e){var z=H.X(e!=null?e:J.b8(b))
return new P.fZ(b,z,!0,a,c,"Index out of range")}}},
iO:{"^":"W;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
ac:function(a){return new P.iO(a)}}},
iL:{"^":"W;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
ey:function(a){return new P.iL(a)}}},
id:{"^":"W;a",
i:function(a){return"Bad state: "+this.a}},
fA:{"^":"W;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.c2(z))+"."},
p:{
ba:function(a){return new P.fA(a)}}},
hB:{"^":"a;",
i:function(a){return"Out of Memory"},
$isW:1},
e3:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isW:1},
fF:{"^":"W;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eG:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fW:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bv(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"V;"},
"+int":0,
c:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gV(this)
for(y=0;z.B();)++y
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.de("index"))
if(b<0)H.q(P.ag(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.B();){x=z.gL(z)
if(b===y)return x;++y}throw H.f(P.M(b,this,"index",null,y))},
i:function(a){return P.h_(this,"(",")")}},
cA:{"^":"a;$ti"},
e:{"^":"a;$ti",$isc:1},
"+List":0,
a1:{"^":"a;$ti"},
H:{"^":"a;",
gS:function(a){return P.a.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
V:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gS:function(a){return H.bp(this)},
i:function(a){return"Instance of '"+H.aX(this)+"'"},
toString:function(){return this.i(this)}},
ao:{"^":"a;"},
m:{"^":"a;",$isdU:1},
"+String":0,
bT:{"^":"a;ay:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
e6:function(a,b,c){var z=J.bK(b)
if(!z.B())return a
if(c.length===0){do a+=H.i(z.gL(z))
while(z.B())}else{a+=H.i(z.gL(z))
for(;z.B();)a=a+c+H.i(z.gL(z))}return a}}}}],["","",,W,{"^":"",
ct:function(a,b){var z=document.createElement("canvas")
return z},
fO:function(a){H.j(a,"$isa6")
return"wheel"},
dD:function(a,b,c){var z=document.createElement("img")
z.src=b
return z},
ce:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eI:function(a,b,c,d){var z,y
z=W.ce(W.ce(W.ce(W.ce(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f_:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.j)return a
return z.d0(a,b)},
bh:{"^":"Z;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l6:{"^":"n;0k:length=","%":"AccessibleNodeList"},
l7:{"^":"bh;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l8:{"^":"bh;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fr:{"^":"n;","%":";Blob"},
cs:{"^":"bh;",
bs:function(a,b,c){if(c!=null)return a.getContext(b,P.kC(c,null))
return a.getContext(b)},
dO:function(a,b){return this.bs(a,b,null)},
$iscs:1,
"%":"HTMLCanvasElement"},
dk:{"^":"n;",$isdk:1,"%":"CanvasRenderingContext2D"},
le:{"^":"J;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lg:{"^":"fE;0k:length=","%":"CSSPerspective"},
bb:{"^":"n;",$isbb:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
fC:{"^":"jd;0k:length=",
dP:function(a,b){var z=a.getPropertyValue(this.cC(a,b))
return z==null?"":z},
cC:function(a,b){var z,y
z=$.$get$dq()
y=z[b]
if(typeof y==="string")return y
y=this.fb(a,b)
z[b]=y
return y},
fb:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fI()+b
if(z in a)return z
return b},
f2:function(a,b,c,d){a.setProperty(b,c,d)},
gbT:function(a){return a.bottom},
gak:function(a){return a.height},
gaF:function(a){return a.left},
gaW:function(a){return a.right},
gb0:function(a){return a.top},
gal:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fD:{"^":"a;",
gaF:function(a){return this.dP(a,"left")}},
dr:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fE:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lh:{"^":"dr;0k:length=","%":"CSSTransformValue"},
li:{"^":"dr;0k:length=","%":"CSSUnparsedValue"},
lj:{"^":"n;0k:length=","%":"DataTransferItemList"},
lk:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
ll:{"^":"jf;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a8,P.V]]},
$asr:function(){return[[P.a8,P.V]]},
$isc:1,
$asc:function(){return[[P.a8,P.V]]},
$ise:1,
$ase:function(){return[[P.a8,P.V]]},
$asy:function(){return[[P.a8,P.V]]},
"%":"ClientRectList|DOMRectList"},
fK:{"^":"n;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gal(a))+" x "+H.i(this.gak(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bG(b,"$isa8",[P.V],"$asa8")
if(!z)return!1
z=J.bH(b)
return a.left===z.gaF(b)&&a.top===z.gb0(b)&&this.gal(a)===z.gal(b)&&this.gak(a)===z.gak(b)},
gS:function(a){return W.eI(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gal(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gbT:function(a){return a.bottom},
gak:function(a){return a.height},
gaF:function(a){return a.left},
gaW:function(a){return a.right},
gb0:function(a){return a.top},
gal:function(a){return a.width},
$isa8:1,
$asa8:function(){return[P.V]},
"%":";DOMRectReadOnly"},
lm:{"^":"jh;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.m]},
$asr:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]},
$asy:function(){return[P.m]},
"%":"DOMStringList"},
ln:{"^":"n;0k:length=","%":"DOMTokenList"},
jc:{"^":"c7;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.j(z[b],"$isZ")},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var z=this.hx(this)
return new J.ak(z,z.length,0,[H.z(z,0)])},
$asr:function(){return[W.Z]},
$asc:function(){return[W.Z]},
$ase:function(){return[W.Z]}},
Z:{"^":"J;",
gd2:function(a){return new W.jc(a,a.children)},
gd3:function(a){return P.hO(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.V)},
i:function(a){return a.localName},
$isZ:1,
"%":";Element"},
a0:{"^":"n;",$isa0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"n;",
cY:["dU",function(a,b,c,d){H.k(c,{func:1,args:[W.a0]})
if(c!=null)this.ea(a,b,c,!1)}],
ea:function(a,b,c,d){return a.addEventListener(b,H.b4(H.k(c,{func:1,args:[W.a0]}),1),!1)},
$isa6:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eO|eP|eR|eS"},
be:{"^":"fr;",$isbe:1,"%":"File"},
lo:{"^":"jm;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.be]},
$asr:function(){return[W.be]},
$isc:1,
$asc:function(){return[W.be]},
$ise:1,
$ase:function(){return[W.be]},
$asy:function(){return[W.be]},
"%":"FileList"},
lp:{"^":"a6;0k:length=","%":"FileWriter"},
lq:{"^":"bh;0k:length=","%":"HTMLFormElement"},
bg:{"^":"n;",$isbg:1,"%":"Gamepad"},
lr:{"^":"n;0k:length=","%":"History"},
ls:{"^":"jz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$asr:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c4:{"^":"n;0d5:data=",$isc4:1,"%":"ImageData"},
dC:{"^":"bh;",$isdC:1,"%":"HTMLImageElement"},
bj:{"^":"cS;",$isbj:1,"%":"KeyboardEvent"},
lw:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
lx:{"^":"n;0k:length=","%":"MediaList"},
ly:{"^":"a6;",
cY:function(a,b,c,d){H.k(c,{func:1,args:[W.a0]})
if(b==="message")a.start()
this.dU(a,b,c,!1)},
"%":"MessagePort"},
lz:{"^":"jG;",
j:function(a,b){return P.aK(a.get(H.R(b)))},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gat:function(a){var z=H.b([],[P.m])
this.J(a,new W.ht(z))
return z},
gk:function(a){return a.size},
$asa9:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"MIDIInputMap"},
ht:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lA:{"^":"jH;",
j:function(a,b){return P.aK(a.get(H.R(b)))},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gat:function(a){var z=H.b([],[P.m])
this.J(a,new W.hu(z))
return z},
gk:function(a){return a.size},
$asa9:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
hu:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bk:{"^":"n;",$isbk:1,"%":"MimeType"},
lB:{"^":"jJ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bk]},
$asr:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$asy:function(){return[W.bk]},
"%":"MimeTypeArray"},
am:{"^":"cS;",$isam:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jb:{"^":"c7;a",
gV:function(a){var z=this.a.childNodes
return new W.dA(z,z.length,-1,[H.bI(C.L,z,"y",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asr:function(){return[W.J]},
$asc:function(){return[W.J]},
$ase:function(){return[W.J]}},
J:{"^":"a6;",
hm:function(a,b){var z,y
try{z=a.parentNode
J.fi(z,b,a)}catch(y){H.aL(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.dV(a):z},
eY:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hz:{"^":"jL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$asr:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bn:{"^":"n;0k:length=",$isbn:1,"%":"Plugin"},
lK:{"^":"jP;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bn]},
$asr:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$asy:function(){return[W.bn]},
"%":"PluginArray"},
lM:{"^":"jV;",
j:function(a,b){return P.aK(a.get(H.R(b)))},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gat:function(a){var z=H.b([],[P.m])
this.J(a,new W.hX(z))
return z},
gk:function(a){return a.size},
$asa9:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"RTCStatsReport"},
hX:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lN:{"^":"bh;0k:length=","%":"HTMLSelectElement"},
bq:{"^":"a6;",$isbq:1,"%":"SourceBuffer"},
lO:{"^":"eP;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bq]},
$asr:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$asy:function(){return[W.bq]},
"%":"SourceBufferList"},
br:{"^":"n;",$isbr:1,"%":"SpeechGrammar"},
lP:{"^":"jX;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$asr:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asy:function(){return[W.br]},
"%":"SpeechGrammarList"},
bs:{"^":"n;0k:length=",$isbs:1,"%":"SpeechRecognitionResult"},
lR:{"^":"k_;",
j:function(a,b){return a.getItem(H.R(b))},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gat:function(a){var z=H.b([],[P.m])
this.J(a,new W.ig(z))
return z},
gk:function(a){return a.length},
$asa9:function(){return[P.m,P.m]},
$isa1:1,
$asa1:function(){return[P.m,P.m]},
"%":"Storage"},
ig:{"^":"t:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bt:{"^":"n;",$isbt:1,"%":"CSSStyleSheet|StyleSheet"},
bu:{"^":"a6;",$isbu:1,"%":"TextTrack"},
bv:{"^":"a6;",$isbv:1,"%":"TextTrackCue|VTTCue"},
lV:{"^":"k3;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bv]},
$asr:function(){return[W.bv]},
$isc:1,
$asc:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"TextTrackCueList"},
lW:{"^":"eS;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bu]},
$asr:function(){return[W.bu]},
$isc:1,
$asc:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$asy:function(){return[W.bu]},
"%":"TextTrackList"},
lX:{"^":"n;0k:length=","%":"TimeRanges"},
bw:{"^":"n;",$isbw:1,"%":"Touch"},
aZ:{"^":"cS;",$isaZ:1,"%":"TouchEvent"},
lY:{"^":"k9;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bw]},
$asr:function(){return[W.bw]},
$isc:1,
$asc:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"TouchList"},
lZ:{"^":"n;0k:length=","%":"TrackDefaultList"},
cS:{"^":"a0;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m1:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
m2:{"^":"a6;0k:length=","%":"VideoTrackList"},
bz:{"^":"am;",
gfR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ac("deltaY is not supported"))},
gfQ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ac("deltaX is not supported"))},
$isbz:1,
"%":"WheelEvent"},
j4:{"^":"a6;",
eZ:function(a,b){return a.requestAnimationFrame(H.b4(H.k(b,{func:1,ret:-1,args:[P.V]}),1))},
ek:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
m7:{"^":"kg;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bb]},
$asr:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$ise:1,
$ase:function(){return[W.bb]},
$asy:function(){return[W.bb]},
"%":"CSSRuleList"},
m8:{"^":"fK;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bG(b,"$isa8",[P.V],"$asa8")
if(!z)return!1
z=J.bH(b)
return a.left===z.gaF(b)&&a.top===z.gb0(b)&&a.width===z.gal(b)&&a.height===z.gak(b)},
gS:function(a){return W.eI(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gal:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ma:{"^":"ki;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bg]},
$asr:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$asy:function(){return[W.bg]},
"%":"GamepadList"},
mb:{"^":"kk;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.J]},
$asr:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$asy:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mc:{"^":"km;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bs]},
$asr:function(){return[W.bs]},
$isc:1,
$asc:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asy:function(){return[W.bs]},
"%":"SpeechRecognitionResultList"},
md:{"^":"ko;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bt]},
$asr:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$asy:function(){return[W.bt]},
"%":"StyleSheetList"},
ji:{"^":"cO;a,b,c,$ti",
h1:function(a,b,c,d){var z=H.z(this,0)
H.k(a,{func:1,ret:-1,args:[z]})
H.k(c,{func:1,ret:-1})
return W.T(this.a,this.b,a,!1,z)}},
m9:{"^":"ji;a,b,c,$ti"},
jj:{"^":"e5;a,b,c,d,e,$ti",
ff:function(){var z=this.d
if(z!=null&&this.a<=0)J.fj(this.b,this.c,z,!1)},
p:{
T:function(a,b,c,d,e){var z=c==null?null:W.f_(new W.jk(c),W.a0)
z=new W.jj(0,a,b,z,!1,[e])
z.ff()
return z}}},
jk:{"^":"t:7;a",
$1:function(a){return this.a.$1(H.j(a,"$isa0"))}},
y:{"^":"a;$ti",
gV:function(a){return new W.dA(a,this.gk(a),-1,[H.bI(this,a,"y",0)])}},
dA:{"^":"a;a,b,c,0d,$ti",
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fh(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gL:function(a){return this.d}},
jd:{"^":"n+fD;"},
je:{"^":"n+r;"},
jf:{"^":"je+y;"},
jg:{"^":"n+r;"},
jh:{"^":"jg+y;"},
jl:{"^":"n+r;"},
jm:{"^":"jl+y;"},
jy:{"^":"n+r;"},
jz:{"^":"jy+y;"},
jG:{"^":"n+a9;"},
jH:{"^":"n+a9;"},
jI:{"^":"n+r;"},
jJ:{"^":"jI+y;"},
jK:{"^":"n+r;"},
jL:{"^":"jK+y;"},
jO:{"^":"n+r;"},
jP:{"^":"jO+y;"},
jV:{"^":"n+a9;"},
eO:{"^":"a6+r;"},
eP:{"^":"eO+y;"},
jW:{"^":"n+r;"},
jX:{"^":"jW+y;"},
k_:{"^":"n+a9;"},
k2:{"^":"n+r;"},
k3:{"^":"k2+y;"},
eR:{"^":"a6+r;"},
eS:{"^":"eR+y;"},
k8:{"^":"n+r;"},
k9:{"^":"k8+y;"},
kf:{"^":"n+r;"},
kg:{"^":"kf+y;"},
kh:{"^":"n+r;"},
ki:{"^":"kh+y;"},
kj:{"^":"n+r;"},
kk:{"^":"kj+y;"},
kl:{"^":"n+r;"},
km:{"^":"kl+y;"},
kn:{"^":"n+r;"},
ko:{"^":"kn+y;"}}],["","",,P,{"^":"",
kF:function(a){var z,y
z=J.I(a)
if(!!z.$isc4){y=z.gd5(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eU(a.data,a.height,a.width)},
kE:function(a){if(a instanceof P.eU)return{data:a.a,height:a.b,width:a.c}
return a},
aK:function(a){var z,y,x,w,v
if(a==null)return
z=P.hb(P.m,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w){v=H.R(y[w])
z.X(0,v,a[v])}return z},
kC:function(a,b){var z={}
a.J(0,new P.kD(z))
return z},
dx:function(){var z=$.dw
if(z==null){z=J.cn(window.navigator.userAgent,"Opera",0)
$.dw=z}return z},
fI:function(){var z,y
z=$.dt
if(z!=null)return z
y=$.du
if(y==null){y=J.cn(window.navigator.userAgent,"Firefox",0)
$.du=y}if(y)z="-moz-"
else{y=$.dv
if(y==null){y=!P.dx()&&J.cn(window.navigator.userAgent,"Trident/",0)
$.dv=y}if(y)z="-ms-"
else z=P.dx()?"-o-":"-webkit-"}$.dt=z
return z},
eU:{"^":"a;d5:a>,b,c",$isc4:1},
kD:{"^":"t:13;a",
$2:function(a,b){this.a[a]=b}},
fT:{"^":"c7;a,b",
gbD:function(){var z,y,x
z=this.b
y=H.ay(z,"r",0)
x=W.Z
return new H.hj(new H.j2(z,H.k(new P.fU(),{func:1,ret:P.a3,args:[y]}),[y]),H.k(new P.fV(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b8(this.gbD().a)},
j:function(a,b){var z=this.gbD()
return z.b.$1(J.dd(z.a,b))},
gV:function(a){var z=P.hf(this.gbD(),!1,W.Z)
return new J.ak(z,z.length,0,[H.z(z,0)])},
$asr:function(){return[W.Z]},
$asc:function(){return[W.Z]},
$ase:function(){return[W.Z]}},
fU:{"^":"t:24;",
$1:function(a){return!!J.I(H.j(a,"$isJ")).$isZ}},
fV:{"^":"t:25;",
$1:function(a){return H.d(H.j(a,"$isJ"),"$isZ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jQ:{"^":"a;$ti",
gaW:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.C(z+this.c,H.z(this,0))},
gbT:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bG(b,"$isa8",[P.V],"$asa8")
if(!z)return!1
z=this.a
y=J.bH(b)
x=y.gaF(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb0(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gaW(b)){if(typeof x!=="number")return x.D()
z=H.C(x+this.d,w)===y.gbT(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.aS(z)
x=this.b
w=J.aS(x)
if(typeof z!=="number")return z.D()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.C(x+this.d,v)
return P.jA(P.cf(P.cf(P.cf(P.cf(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a8:{"^":"jQ;aF:a>,b0:b>,al:c>,ak:d>,$ti",p:{
hO:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a8()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.a8()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",bQ:{"^":"n;",$isbQ:1,"%":"SVGLength"},lv:{"^":"jC;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asr:function(){return[P.bQ]},
$isc:1,
$asc:function(){return[P.bQ]},
$ise:1,
$ase:function(){return[P.bQ]},
$asy:function(){return[P.bQ]},
"%":"SVGLengthList"},bS:{"^":"n;",$isbS:1,"%":"SVGNumber"},lI:{"^":"jN;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asr:function(){return[P.bS]},
$isc:1,
$asc:function(){return[P.bS]},
$ise:1,
$ase:function(){return[P.bS]},
$asy:function(){return[P.bS]},
"%":"SVGNumberList"},lL:{"^":"n;0k:length=","%":"SVGPointList"},lS:{"^":"k1;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asr:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]},
$asy:function(){return[P.m]},
"%":"SVGStringList"},lT:{"^":"Z;",
gd2:function(a){return new P.fT(a,new W.jb(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bV:{"^":"n;",$isbV:1,"%":"SVGTransform"},m_:{"^":"kb;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asr:function(){return[P.bV]},
$isc:1,
$asc:function(){return[P.bV]},
$ise:1,
$ase:function(){return[P.bV]},
$asy:function(){return[P.bV]},
"%":"SVGTransformList"},jB:{"^":"n+r;"},jC:{"^":"jB+y;"},jM:{"^":"n+r;"},jN:{"^":"jM+y;"},k0:{"^":"n+r;"},k1:{"^":"k0+y;"},ka:{"^":"n+r;"},kb:{"^":"ka+y;"}}],["","",,P,{"^":"",l9:{"^":"n;0k:length=","%":"AudioBuffer"},la:{"^":"ja;",
j:function(a,b){return P.aK(a.get(H.R(b)))},
J:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gat:function(a){var z=H.b([],[P.m])
this.J(a,new P.fp(z))
return z},
gk:function(a){return a.size},
$asa9:function(){return[P.m,null]},
$isa1:1,
$asa1:function(){return[P.m,null]},
"%":"AudioParamMap"},fp:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lb:{"^":"a6;0k:length=","%":"AudioTrackList"},fq:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lJ:{"^":"fq;0k:length=","%":"OfflineAudioContext"},ja:{"^":"n+a9;"}}],["","",,P,{"^":"",cL:{"^":"n;",
ht:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc4)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kE(g))
return}if(!!z.$isdC)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.fn("Incorrect number or type of arguments"))},
dI:function(a,b,c,d,e,f,g){return this.ht(a,b,c,d,e,f,g,null,null,null)},
$iscL:1,
"%":"WebGLRenderingContext"},il:{"^":"n;",$isil:1,"%":"WebGLTexture"},iJ:{"^":"n;",$isiJ:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lQ:{"^":"jZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return P.aK(a.item(b))},
C:function(a,b){return this.j(a,b)},
$asr:function(){return[[P.a1,,,]]},
$isc:1,
$asc:function(){return[[P.a1,,,]]},
$ise:1,
$ase:function(){return[[P.a1,,,]]},
$asy:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},jY:{"^":"n+r;"},jZ:{"^":"jY+y;"}}],["","",,O,{"^":"",ae:{"^":"a;0a,0b,0c,0d,$ti",
b3:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cn:function(a,b,c){var z=H.ay(this,"ae",0)
H.k(b,{func:1,ret:P.a3,args:[[P.c,z]]})
z={func:1,ret:-1,args:[P.A,[P.c,z]]}
H.k(a,z)
H.k(c,z)
this.b=b
this.c=a
this.d=c},
aJ:function(a,b){return this.cn(a,null,b)},
cO:function(a){var z
H.x(a,"$isc",[H.ay(this,"ae",0)],"$asc")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ct:function(a,b){var z
H.x(b,"$isc",[H.ay(this,"ae",0)],"$asc")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.z(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ay(this,"ae",0)
H.C(b,z)
z=[z]
if(this.cO(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ct(x,H.b([b],z))}},
bO:function(a,b){var z,y
H.x(b,"$isc",[H.ay(this,"ae",0)],"$asc")
if(this.cO(b)){z=this.a
y=z.length
C.a.bO(z,b)
this.ct(y,b)}},
$isc:1,
p:{
cv:function(a){var z=new O.ae([a])
z.b3(a)
return z}}},cH:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gn:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
e3:function(a){var z=this.b
if(!(z==null))z.v(a)},
aw:function(){return this.e3(null)},
gR:function(a){var z=this.a
if(z.length>0)return C.a.gc9(z)
else return V.aW()},
bq:function(a){var z=this.a
if(a==null)C.a.h(z,V.aW())
else C.a.h(z,a)
this.aw()},
au:function(){var z=this.a
if(z.length>0){z.pop()
this.aw()}}}}],["","",,E,{"^":"",co:{"^":"a;"},aA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Y:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbt:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gn().O(0,this.gdF())
y=this.c
if(y!=null)y.gn().h(0,this.gdF())
x=new D.G("shape",z,this.c,this,[F.e1])
x.b=!0
this.aG(x)}},
a7:function(a,b){var z
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.B();)z.d.a7(0,b)},
a2:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gR(z))
z.aw()
a.cg(this.f)
z=a.dy
y=(z&&C.a).gc9(z)
if(y!=null&&this.d!=null)y.dG(a,this)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.B();)z.d.a2(a)
a.cf()
a.dx.au()},
gn:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
aG:function(a){var z=this.z
if(!(z==null))z.v(a)},
a_:function(){return this.aG(null)},
ha:[function(a){H.j(a,"$isu")
this.e=null
this.aG(a)},function(){return this.ha(null)},"ih","$1","$0","gdF",0,2,0],
h8:[function(a){this.aG(H.j(a,"$isu"))},function(){return this.h8(null)},"ie","$1","$0","gdE",0,2,0],
ic:[function(a,b){var z,y,x,w,v,u,t,s
H.x(b,"$isc",[E.aA],"$asc")
for(z=b.length,y=this.gdE(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.bM()
t.d=0
u.sY(t)}t=u.gY()
t.toString
H.k(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a_()},"$2","gh7",8,0,8],
ig:[function(a,b){var z,y,x,w,v
H.x(b,"$isc",[E.aA],"$asc")
for(z=b.length,y=this.gdE(),x=0;x<b.length;b.length===z||(0,H.w)(b),++x){w=b[x]
if(w!=null){if(w.gY()==null){v=new D.bM()
v.d=0
w.sY(v)}w.gY().O(0,y)}}this.a_()},"$2","gh9",8,0,8],
$isat:1,
p:{
dz:function(a,b,c,d,e,f){var z,y
z=new E.aA()
z.a=d
z.b=!0
y=O.cv(E.aA)
z.y=y
y.aJ(z.gh7(),z.gh9())
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
return z}}},hS:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e0:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.al(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cH()
y=[V.aB]
z.a=H.b([],y)
z.gn().h(0,new E.hU(this))
this.cy=z
z=new O.cH()
z.a=H.b([],y)
z.gn().h(0,new E.hV(this))
this.db=z
z=new O.cH()
z.a=H.b([],y)
z.gn().h(0,new E.hW(this))
this.dx=z
z=H.b([],[O.bU])
this.dy=z
C.a.h(z,null)
this.fr=new H.aU(0,0,[P.m,A.cM])},
ghj:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gR(z)
y=this.db
y=z.l(0,y.gR(y))
this.z=y
z=y}return z},
cg:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc9(z):a;(z&&C.a).h(z,y)},
cf:function(){var z=this.dy
if(z.length>1)z.pop()},
d_:function(a){var z=a.b
if(z.length===0)throw H.f(P.p("May not cache a shader with no name."))
if(this.fr.d4(0,z))throw H.f(P.p('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.X(0,z,a)},
p:{
hT:function(a,b){var z=new E.hS(a,b)
z.e0(a,b)
return z}}},hU:{"^":"t:9;a",
$1:function(a){var z
H.j(a,"$isu")
z=this.a
z.z=null
z.ch=null}},hV:{"^":"t:9;a",
$1:function(a){var z
H.j(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hW:{"^":"t:9;a",
$1:function(a){var z
H.j(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},iu:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Y:x@,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
e5:[function(a){var z
H.j(a,"$isu")
z=this.x
if(!(z==null))z.v(a)
this.ho()},function(){return this.e5(null)},"e4","$1","$0","gcu",0,2,0],
gfV:function(){var z,y,x
z=Date.now()
y=C.f.Z(P.dy(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.al(z,!1)
return x/y},
cR:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.o(z)
x=C.h.c6(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.h.c6(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eb(C.l,this.ghn())},
ho:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.iw(this),{func:1,ret:-1,args:[P.V]})
C.w.ek(z)
C.w.eZ(z,W.f_(y,P.V))}},"$0","ghn",0,0,3],
hl:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cR()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.dy(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aw()
w=x.db
C.a.sk(w.a,0)
w.aw()
w=x.dx
C.a.sk(w.a,0)
w.aw()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a2(this.e)}}catch(v){z=H.aL(v)
y=H.b6(v)
P.dc("Error: "+H.i(z))
P.dc("Stack: "+H.i(y))
throw H.f(z)}},
p:{
iv:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscs)return E.ea(a,!0,!0,!0,!1)
y=W.ct(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd2(a).h(0,y)
w=E.ea(y,!0,!0,!0,!1)
w.a=a
return w},
ea:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iu()
y=P.hc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.k.bs(a,"webgl",y)
x=H.j(x==null?C.k.bs(a,"experimental-webgl",y):x,"$iscL")
if(x==null)H.q(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hT(x,a)
w=new T.io(x)
w.b=H.X(x.getParameter(3379))
w.c=H.X(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iP(a)
v=new X.h6()
v.c=new X.as(!1,!1,!1)
v.d=P.hd(null,null,null,P.A)
w.b=v
v=new X.hv(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hg(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iz(w)
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
t=W.am
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.T(u,"contextmenu",H.k(w.geC(),s),!1,t))
v=w.z
r=W.a0
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.T(a,"focus",H.k(w.geF(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.T(a,"blur",H.k(w.gez(),q),!1,r))
v=w.z
p=W.bj
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.T(u,"keyup",H.k(w.geH(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.T(u,"keydown",H.k(w.geG(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.T(a,"mousedown",H.k(w.geK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mouseup",H.k(w.geM(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mousemove",H.k(w.geL(),s),!1,t))
p=w.z
o=W.bz;(p&&C.a).h(p,W.T(a,H.R(W.fO(a)),H.k(w.geN(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.T(u,"mousemove",H.k(w.geD(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.T(u,"mouseup",H.k(w.geE(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.T(u,"pointerlockchange",H.k(w.geO(),q),!1,r))
r=w.z
q=W.aZ
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.T(a,"touchstart",H.k(w.geW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchend",H.k(w.geU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchmove",H.k(w.geV(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.al(Date.now(),!1)
z.cy=0
z.cR()
return z}}},iw:{"^":"t:28;a",
$1:function(a){var z
H.kX(a)
z=this.a
if(z.ch){z.ch=!1
z.hl()}}}}],["","",,Z,{"^":"",eD:{"^":"a;a,b",p:{
cW:function(a,b,c){var z
H.x(c,"$ise",[P.A],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bC(c)),35044)
a.bindBuffer(b,null)
return new Z.eD(b,z)}}},di:{"^":"co;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aL(y)
x=P.p('Failed to bind buffer attribute "'+J.a4(this.a)+'": '+H.i(z))
throw H.f(x)}},
i:function(a){return"["+J.a4(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},eE:{"^":"a;a",$islc:1},cr:{"^":"a;a,0b,c,d",
as:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
b2:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a2:function(a){var z,y,x,w,v
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a4(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(y,", ")+"\nAttrs:   "+C.a.w(u,", ")},
$islU:1},c5:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aX(this.c)+"'")+"]"}},b_:{"^":"a;a",
gco:function(a){var z,y
z=this.a
y=(z&$.$get$ap().a)!==0?3:0
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=2
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$bx().a)!==0)y+=3
if((z&$.$get$by().a)!==0)y+=4
if((z&$.$get$b0().a)!==0)++y
return(z&$.$get$aD().a)!==0?y+4:y},
fI:function(a){var z,y,x
z=$.$get$ap()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bx()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$by()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eC()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.m])
y=this.a
if((y&$.$get$ap().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aH().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bx().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$by().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.w(z,"|")},
p:{
ai:function(a){return new Z.b_(a)}}}}],["","",,D,{"^":"",dl:{"^":"a;"},bM:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.u]}
H.k(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
O:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.u]})
z=this.a
z=z==null?null:C.a.aE(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).O(z,b)||!1}else y=!1
return y},
v:function(a){var z,y,x,w
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
return!0}if(!x)C.a.J(y,new D.fS(z))
return!0},
d8:function(){return this.v(null)},
hp:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.v(y)}}},
av:function(a){return this.hp(a,!0,!1)},
p:{
D:function(){var z=new D.bM()
z.d=0
return z}}},fS:{"^":"t:29;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"a;a,0b"},bN:{"^":"u;c,d,a,0b,$ti"},bO:{"^":"u;c,d,a,0b,$ti"},G:{"^":"u;c,d,e,a,0b,$ti",
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
p:{"^":"ld<"}},dI:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dI))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},dJ:{"^":"u;c,a,0b"},h6:{"^":"a;0a,0b,0c,0d",
hg:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dJ(a,this)
y.b=!0
return z.v(y)},
hc:function(a){var z,y
this.c=a.b
this.d.O(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dJ(a,this)
y.b=!0
return z.v(y)}},dN:{"^":"c8;x,y,c,d,e,a,0b"},hg:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ap:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaD()
s=new X.bl(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
ce:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.ap(a,b))
return!0},
aT:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dR()
if(typeof z!=="number")return z.dM()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.ap(a,b))
return!0},
aS:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.ap(a,b))
return!0},
hh:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cI(new V.P(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.v(w)
return!0},
eJ:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.dN(c,a,this.a.gaD(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.O(0,0)}},as:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.as))return!1
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
return z+(this.c?"Shift+":"")}},bl:{"^":"c8;x,y,z,Q,ch,c,d,e,a,0b"},hv:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bB:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaD()
x=new X.bl(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
ce:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bB(a,b,!0))
return!0},
aT:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dR()
if(typeof z!=="number")return z.dM()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bB(a,b,!0))
return!0},
aS:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bB(a,b,!1))
return!0},
hi:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaD()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cI(new V.P(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.v(x)
return!0},
gd7:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gbr:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gdD:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cI:{"^":"c8;x,c,d,e,a,0b"},c8:{"^":"u;"},ef:{"^":"c8;x,y,z,Q,ch,c,d,e,a,0b"},iz:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ap:function(a,b){var z,y,x,w
H.x(a,"$ise",[V.O],"$ase")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaD()
w=new X.ef(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hf:function(a){var z
H.x(a,"$ise",[V.O],"$ase")
z=this.b
if(z==null)return!1
z.v(this.ap(a,!0))
return!0},
hd:function(a){var z
H.x(a,"$ise",[V.O],"$ase")
z=this.c
if(z==null)return!1
z.v(this.ap(a,!0))
return!0},
he:function(a){var z
H.x(a,"$ise",[V.O],"$ase")
z=this.d
if(z==null)return!1
z.v(this.ap(a,!1))
return!0}},iP:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaD:function(){var z=this.a
return V.e0(0,0,(z&&C.k).gd3(z).c,C.k.gd3(z).d)},
cJ:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dI(z,new X.as(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
bN:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
aq:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.O(y-w,x-v)},
aM:function(a){return new V.P(a.movementX,a.movementY)},
bK:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
t=C.h.ag(u.pageX)
C.h.ag(u.pageY)
s=z.left
C.h.ag(u.pageX)
C.a.h(y,new V.O(t-s,C.h.ag(u.pageY)-z.top))}return y},
an:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dj(z,new X.as(y,a.altKey,a.shiftKey))},
bE:function(a){var z,y,x,w,v,u
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
hP:[function(a){this.f=!0},"$1","geF",4,0,7],
hJ:[function(a){this.f=!1},"$1","gez",4,0,7],
hM:[function(a){H.j(a,"$isam")
if(this.f&&this.bE(a))a.preventDefault()},"$1","geC",4,0,4],
hR:[function(a){var z
H.j(a,"$isbj")
if(!this.f)return
z=this.cJ(a)
if(this.b.hg(z))a.preventDefault()},"$1","geH",4,0,17],
hQ:[function(a){var z
H.j(a,"$isbj")
if(!this.f)return
z=this.cJ(a)
if(this.b.hc(z))a.preventDefault()},"$1","geG",4,0,17],
hT:[function(a){var z,y,x,w
H.j(a,"$isam")
z=this.a
z.focus()
this.f=!0
this.aC(a)
if(this.x){y=this.an(a)
x=this.aM(a)
if(this.d.ce(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.an(a)
w=this.aq(a)
if(this.c.ce(y,w))a.preventDefault()},"$1","geK",4,0,4],
hV:[function(a){var z,y,x
H.j(a,"$isam")
this.aC(a)
z=this.an(a)
if(this.x){y=this.aM(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aT(z,x))a.preventDefault()},"$1","geM",4,0,4],
hO:[function(a){var z,y,x
H.j(a,"$isam")
if(!this.bE(a)){this.aC(a)
z=this.an(a)
if(this.x){y=this.aM(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aT(z,x))a.preventDefault()}},"$1","geE",4,0,4],
hU:[function(a){var z,y,x
H.j(a,"$isam")
this.aC(a)
z=this.an(a)
if(this.x){y=this.aM(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aS(z,x))a.preventDefault()},"$1","geL",4,0,4],
hN:[function(a){var z,y,x
H.j(a,"$isam")
if(!this.bE(a)){this.aC(a)
z=this.an(a)
if(this.x){y=this.aM(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.aq(a)
if(this.c.aS(z,x))a.preventDefault()}},"$1","geD",4,0,4],
hW:[function(a){var z,y
H.j(a,"$isbz")
this.aC(a)
z=new V.P((a&&C.v).gfQ(a),C.v.gfR(a)).t(0,180)
if(this.x){if(this.d.hh(z))a.preventDefault()
return}if(this.r)return
y=this.aq(a)
if(this.c.hi(z,y))a.preventDefault()},"$1","geN",4,0,31],
hX:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.an(this.y)
v=this.aq(this.y)
this.d.eJ(w,v,x)}},"$1","geO",4,0,7],
i4:[function(a){var z
H.j(a,"$isaZ")
this.a.focus()
this.f=!0
this.bN(a)
z=this.bK(a)
if(this.e.hf(z))a.preventDefault()},"$1","geW",4,0,10],
i2:[function(a){var z
H.j(a,"$isaZ")
this.bN(a)
z=this.bK(a)
if(this.e.hd(z))a.preventDefault()},"$1","geU",4,0,10],
i3:[function(a){var z
H.j(a,"$isaZ")
this.bN(a)
z=this.bK(a)
if(this.e.he(z))a.preventDefault()},"$1","geV",4,0,10]}}],["","",,D,{"^":"",fJ:{"^":"a;",$isU:1,$isat:1},U:{"^":"a;",$isat:1},h7:{"^":"ae;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gn:function(){var z=this.Q
if(z==null){z=D.D()
this.Q=z}return z},
cv:function(a){var z=this.Q
if(!(z==null))z.v(a)},
eI:[function(a){var z=this.ch
if(!(z==null))z.v(a)},function(){return this.eI(null)},"hS","$1","$0","gcN",0,2,0],
hY:[function(a){var z,y,x
H.x(a,"$isc",[D.U],"$asc")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.w)(a),++y){x=a[y]
if(x==null||this.eg(x))return!1}return!0},"$1","geP",4,0,33],
hG:[function(a,b){var z,y,x,w,v
z=D.U
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcN(),w=0;w<b.length;b.length===y||(0,H.w)(b),++w){v=H.j(b[w],"$isU")
v.gn().h(0,x)}z=new D.bN(a,b,this,[z])
z.b=!0
this.cv(z)},"$2","gew",8,0,18],
i_:[function(a,b){var z,y,x,w,v
z=D.U
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcN(),w=0;w<b.length;b.length===y||(0,H.w)(b),++w){v=H.j(b[w],"$isU")
v.gn().O(0,x)}z=new D.bO(a,b,this,[z])
z.b=!0
this.cv(z)},"$2","geR",8,0,18],
eg:function(a){var z=C.a.aE(this.e,a)
return z},
$asc:function(){return[D.U]},
$asae:function(){return[D.U]}},hE:{"^":"a;",$isU:1,$isat:1},ic:{"^":"a;",$isU:1,$isat:1},ir:{"^":"a;",$isU:1,$isat:1},is:{"^":"a;",$isU:1,$isat:1},it:{"^":"a;",$isU:1,$isat:1}}],["","",,V,{"^":"",
lf:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","hs",8,0,32],
l5:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.dQ(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.i.a6("null",c)
return C.i.a6(C.h.dK($.l.$2(a,0)?0:a,b),c+b+1)},
b5:function(a,b,c){var z,y,x,w,v,u
H.x(a,"$ise",[P.v],"$ase")
z=H.b([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.w)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.X(z,u,C.i.a6(z[u],x))}return z},
db:function(a,b){return C.h.hw(Math.pow(b,C.B.c6(Math.log(H.kB(a))/Math.log(b))))},
a5:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
aM:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aM))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
dR:{"^":"a;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dR))return!1
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
z=[P.v]
y=V.b5(H.b([this.a,this.d,this.r],z),3,0)
x=V.b5(H.b([this.b,this.e,this.x],z),3,0)
w=V.b5(H.b([this.c,this.f,this.y],z),3,0)
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
aB:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
c8:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.l.$2(a2,0))return V.aW()
a3=1/a2
a4=-w
a5=-i
return V.ar((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.o(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
if(typeof s!=="number")return H.o(s)
r=a7.b
if(typeof r!=="number")return H.o(r)
q=a7.f
if(typeof q!=="number")return H.o(q)
p=a7.z
if(typeof p!=="number")return H.o(p)
o=a7.cy
if(typeof o!=="number")return H.o(o)
n=a7.c
if(typeof n!=="number")return H.o(n)
m=a7.r
if(typeof m!=="number")return H.o(m)
l=a7.Q
if(typeof l!=="number")return H.o(l)
k=a7.db
if(typeof k!=="number")return H.o(k)
j=a7.d
if(typeof j!=="number")return H.o(j)
i=a7.x
if(typeof i!=="number")return H.o(i)
h=a7.ch
if(typeof h!=="number")return H.o(h)
g=a7.dx
if(typeof g!=="number")return H.o(g)
f=this.e
if(typeof f!=="number")return f.l()
e=this.f
if(typeof e!=="number")return e.l()
d=this.r
if(typeof d!=="number")return d.l()
c=this.x
if(typeof c!=="number")return c.l()
b=this.y
if(typeof b!=="number")return b.l()
a=this.z
if(typeof a!=="number")return a.l()
a0=this.Q
if(typeof a0!=="number")return a0.l()
a1=this.ch
if(typeof a1!=="number")return a1.l()
a2=this.cx
if(typeof a2!=="number")return a2.l()
a3=this.cy
if(typeof a3!=="number")return a3.l()
a4=this.db
if(typeof a4!=="number")return a4.l()
a5=this.dx
if(typeof a5!=="number")return a5.l()
return V.ar(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
dL:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.a
y=a.gac(a)
if(typeof z!=="number")return z.l()
y=C.h.l(z,y)
z=this.b
x=a.gad(a)
if(typeof z!=="number")return z.l()
x=C.h.l(z,x)
z=this.c
w=a.gae()
if(typeof z!=="number")return z.l()
w=C.h.l(z,w)
z=this.e
v=a.gac(a)
if(typeof z!=="number")return z.l()
v=C.h.l(z,v)
z=this.f
u=a.gad(a)
if(typeof z!=="number")return z.l()
u=C.h.l(z,u)
z=this.r
t=a.gae()
if(typeof z!=="number")return z.l()
t=C.h.l(z,t)
z=this.y
s=a.gac(a)
if(typeof z!=="number")return z.l()
s=C.h.l(z,s)
z=this.z
r=a.gad(a)
if(typeof z!=="number")return z.l()
r=C.h.l(z,r)
z=this.Q
q=a.gae()
if(typeof z!=="number")return z.l()
return new V.K(y+x+w,v+u+t,s+r+C.h.l(z,q))},
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
t=this.d
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.an(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aB))return!1
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
i:function(a){return this.F()},
dz:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b5(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b5(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b5(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b5(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
u:function(a){return this.dz(a,3,0)},
F:function(){return this.dz("",3,0)},
p:{
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aW:function(){return V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}},
O:{"^":"a;a,b",
E:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
an:{"^":"a;a,b,c",
E:function(a,b){return new V.an(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bo:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bo))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
e_:{"^":"a;a,b,c,d",
ga1:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e_))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"},
p:{
e0:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e_(a,b,c,d)}}},
P:{"^":"a;a,b",
h_:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,19],
A:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
return z*y+x*w},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.P(z*b,y*b)},
t:function(a,b){var z,y
if($.l.$2(b,0))return new V.P(0,0)
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.P(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
K:{"^":"a;a,b,c",
h_:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,19],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ca:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.K(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aQ:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.K(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.K(-this.a,-this.b,-this.c)},
t:function(a,b){if($.l.$2(b,0))return new V.K(0,0,0)
return new V.K(this.a/b,this.b/b,this.c/b)},
dB:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fy:{"^":"dl;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bw:function(a){var z=V.l5(a,this.c,this.b)
return z},
gn:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.v(a)},
scj:function(a,b){},
scb:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bw(z)}z=new D.G("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.I(z)}},
scd:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bw(z)}z=new D.G("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.I(z)}},
sa0:function(a,b){var z,y
b=this.bw(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.v])
z.b=!0
this.I(z)}},
scc:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.G("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.I(z)}},
sK:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.G("velocity",x,a,this,[P.v])
z.b=!0
this.I(z)}},
sbZ:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.v])
z.b=!0
this.I(z)}},
a7:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa0(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sK(y)}},
p:{
cw:function(){var z=new U.fy()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dn:{"^":"aa;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aH:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dn))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}},dB:{"^":"ae;0e,0f,0r,0a,0b,0c,0d",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
I:[function(a){var z
H.j(a,"$isu")
z=this.e
if(!(z==null))z.v(a)},function(){return this.I(null)},"aa","$1","$0","gaB",0,2,0],
hF:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.aa
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){s=t.gn()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.I(z)},"$2","gev",8,0,20],
hZ:[function(a,b){var z,y,x,w,v
z=U.aa
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gaB(),w=0;w<b.length;b.length===y||(0,H.w)(b),++w){v=b[w]
if(v!=null)v.gn().O(0,x)}z=new D.bO(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geQ",8,0,20],
aH:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a8()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ak(z,z.length,0,[H.z(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.aH(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aW():x
z=this.e
if(!(z==null))z.av(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.S(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asc:function(){return[U.aa]},
$asae:function(){return[U.aa]},
$isaa:1},aa:{"^":"dl;"},iQ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
I:[function(a){var z
H.j(a,"$isu")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.I(null)},"aa","$1","$0","gaB",0,2,0],
aN:function(a){if(this.a!=null)return!1
this.a=a
a.c.gd7().h(0,this.gbF())
this.a.c.gdD().h(0,this.gbG())
this.a.c.gbr().h(0,this.gbH())
return!0},
eq:[function(a){H.j(a,"$isu")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbF",4,0,1],
er:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isu"),"$isbl")
if(!this.y)return
if(this.x){z=a.d.E(0,a.y)
z=new V.P(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.E(0,a.y)
z=new V.P(y.a,y.b).l(0,2).t(0,z.ga1())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sK(z*10*x)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=new V.P(x.a,x.b).l(0,2).t(0,z.ga1())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
this.b.sK(0)
y=y.E(0,a.z)
this.Q=new V.P(y.a,y.b).l(0,2).t(0,z.ga1())}this.aa()},"$1","gbG",4,0,1],
es:[function(a){var z,y,x
H.j(a,"$isu")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sK(y*10*x)
this.aa()}},"$1","gbH",4,0,1],
aH:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a8()
if(z<y){this.ch=y
x=b.y
this.b.a7(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ar(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaa:1},iR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gn:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
I:[function(a){var z
H.j(a,"$isu")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.I(null)},"aa","$1","$0","gaB",0,2,0],
aN:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gd7().h(0,this.gbF())
this.a.c.gdD().h(0,this.gbG())
this.a.c.gbr().h(0,this.gbH())
z=this.a.d
y=z.f
if(y==null){y=D.D()
z.f=y
z=y}else z=y
z.h(0,this.gen())
z=this.a.d
y=z.d
if(y==null){y=D.D()
z.d=y
z=y}else z=y
z.h(0,this.geo())
z=this.a.e
y=z.b
if(y==null){y=D.D()
z.b=y
z=y}else z=y
z.h(0,this.gfe())
z=this.a.e
y=z.d
if(y==null){y=D.D()
z.d=y
z=y}else z=y
z.h(0,this.gfd())
z=this.a.e
y=z.c
if(y==null){y=D.D()
z.c=y
z=y}else z=y
z.h(0,this.gfc())
return!0},
ah:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.P(z,y)},
eq:[function(a){a=H.d(H.j(a,"$isu"),"$isbl")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbF",4,0,1],
er:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isu"),"$isbl")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.P(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ah(new V.P(y.a,y.b).l(0,2).t(0,z.ga1()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ah(new V.P(x.a,x.b).l(0,2).t(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa0(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.E(0,a.z)
this.dx=this.ah(new V.P(y.a,y.b).l(0,2).t(0,z.ga1()))}this.aa()},"$1","gbG",4,0,1],
es:[function(a){var z,y,x
H.j(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sK(-y*10*z)
this.aa()}},"$1","gbH",4,0,1],
hC:[function(a){if(H.d(H.j(a,"$isu"),"$isdN").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gen",4,0,1],
hD:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isu"),"$isbl")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ah(new V.P(x.a,x.b).l(0,2).t(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa0(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.E(0,a.z)
this.dx=this.ah(new V.P(y.a,y.b).l(0,2).t(0,z.ga1()))
this.aa()},"$1","geo",4,0,1],
i8:[function(a){H.j(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfe",4,0,1],
i7:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isu"),"$isef")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.P(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ah(new V.P(y.a,y.b).l(0,2).t(0,z.ga1()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sK(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sK(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ah(new V.P(x.a,x.b).l(0,2).t(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa0(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.E(0,a.z)
this.dx=this.ah(new V.P(y.a,y.b).l(0,2).t(0,z.ga1()))}this.aa()},"$1","gfd",4,0,1],
i6:[function(a){var z,y,x
H.j(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sK(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sK(-y*10*z)
this.aa()}},"$1","gfc",4,0,1],
aH:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a8()
if(z<y){this.dy=y
x=b.y
this.c.a7(0,x)
this.b.a7(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ar(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.ar(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaa:1},iS:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gn:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.v(a)},
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=this.geu()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
hE:[function(a){var z,y,x,w
H.j(a,"$isu")
if(!J.S(this.b,this.a.b.c))return
H.d(a,"$iscI")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.G("zoom",z,w,this,[P.v])
z.b=!0
this.I(z)}},"$1","geu",4,0,1],
aH:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ar(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isaa:1}}],["","",,M,{"^":"",fz:{"^":"ae;0e,0f,0a,0b,0c,0d",
gn:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
T:[function(a){var z
H.j(a,"$isu")
z=this.f
if(!(z==null))z.v(a)},function(){return this.T(null)},"cw","$1","$0","gN",0,2,0],
i0:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.au
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){s=t.gn()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geS",8,0,21],
i1:[function(a,b){var z,y,x,w,v
z=M.au
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gN(),w=0;w<b.length;b.length===y||(0,H.w)(b),++w){v=b[w]
if(v!=null)v.gn().O(0,x)}z=new D.bO(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geT",8,0,21],
a2:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.B();){y=z.d
if(!(y==null))y.a2(a)}this.e=!1},
$asc:function(){return[M.au]},
$asae:function(){return[M.au]},
$isau:1},fB:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
T:[function(a){var z
H.j(a,"$isu")
z=this.f
if(!(z==null))z.v(a)},function(){return this.T(null)},"cw","$1","$0","gN",0,2,0],
saP:function(a){var z,y
if(a==null)a=new X.fY()
z=this.a
if(z!==a){if(z!=null)z.gn().O(0,this.gN())
y=this.a
this.a=a
a.gn().h(0,this.gN())
z=new D.G("camera",y,this.a,this,[X.c0])
z.b=!0
this.T(z)}},
saX:function(a,b){var z,y
if(b==null)b=X.cx(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gn().O(0,this.gN())
y=this.b
this.b=b
b.gn().h(0,this.gN())
z=new D.G("target",y,this.b,this,[X.cQ])
z.b=!0
this.T(z)}},
saY:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gn().O(0,this.gN())
y=this.c
this.c=a
if(a!=null)a.gn().h(0,this.gN())
z=new D.G("technique",y,this.c,this,[O.bU])
z.b=!0
this.T(z)}},
a2:function(a){a.cg(this.c)
this.b.W(a)
this.a.W(a)
this.d.a7(0,a)
this.d.a2(a)
this.a.b2(a)
this.b.toString
a.cf()},
$isau:1},fQ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
T:[function(a){var z
H.j(a,"$isu")
z=this.x
if(!(z==null))z.v(a)},function(){return this.T(null)},"cw","$1","$0","gN",0,2,0],
hK:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aA
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.bM()
s.d=0
t.sY(s)}s=t.gY()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geA",8,0,8],
hL:[function(a,b){var z,y,x,w,v,u
z=E.aA
H.x(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gN(),w=0;w<b.length;b.length===y||(0,H.w)(b),++w){v=b[w]
if(v!=null){if(v.gY()==null){u=new D.bM()
u.d=0
v.sY(u)}v.gY().O(0,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geB",8,0,8],
saP:function(a){var z,y
if(a==null)a=X.dV(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gn().O(0,this.gN())
y=this.a
this.a=a
a.gn().h(0,this.gN())
z=new D.G("camera",y,this.a,this,[X.c0])
z.b=!0
this.T(z)}},
saX:function(a,b){var z,y
if(b==null)b=X.cx(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gn().O(0,this.gN())
y=this.b
this.b=b
b.gn().h(0,this.gN())
z=new D.G("target",y,this.b,this,[X.cQ])
z.b=!0
this.T(z)}},
saY:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gn().O(0,this.gN())
y=this.c
this.c=a
if(a!=null)a.gn().h(0,this.gN())
z=new D.G("technique",y,this.c,this,[O.bU])
z.b=!0
this.T(z)}},
gn:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a2:function(a){var z
a.cg(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.a7(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.B();)z.d.a7(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.B();)z.d.a2(a)
this.a.toString
a.cy.au()
a.db.au()
this.b.toString
a.cf()},
$isau:1},au:{"^":"a;"}}],["","",,A,{"^":"",df:{"^":"a;a,b,c"},fo:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d6:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dQ:{"^":"cM;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aj,0af,0bb,0d9,0bc,0bd,0da,0dc,0be,0bf,0dd,0de,0bg,0bh,0df,0dg,0bi,0dh,0di,0bj,0dj,0dk,0bk,0bl,0bm,0dl,0dm,0bn,0bo,0dn,0dq,0bp,0dr,0c0,0ds,0c1,0dt,0c2,0du,0c3,0dv,0c4,0dw,0c5,a,b,0c,0d,0e,0f,0r,0x,0y",
e_:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bT("")
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
a1.fh(z)
a1.fo(z)
a1.fi(z)
a1.fz(z)
a1.fA(z)
a1.fq(z)
a1.fE(z)
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
z=new P.bT("")
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
v.fl(z)
v.fg(z)
v.fj(z)
v.fm(z)
v.fv(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.ft(z)
v.fu(z)}v.fp(z)
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
v.fk(z)
v.fs(z)
v.fw(z)
v.fB(z)
v.fC(z)
v.fD(z)
v.fn(z)}r=z.a+="// === Main ===\n"
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
this.dA(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.d(this.y.m(0,"invViewMat"),"$isax")
if(y)this.dy=H.d(this.y.m(0,"objMat"),"$isax")
if(w)this.fr=H.d(this.y.m(0,"viewObjMat"),"$isax")
this.fy=H.d(this.y.m(0,"projViewObjMat"),"$isax")
if(a1.x2)this.k1=H.d(this.y.m(0,"txt2DMat"),"$iscU")
if(a1.y1)this.k2=H.d(this.y.m(0,"txtCubeMat"),"$isax")
if(a1.y2)this.k3=H.d(this.y.m(0,"colorMat"),"$isax")
this.r1=H.b([],[A.ax])
y=a1.aj
if(y>0){this.k4=H.j(this.y.m(0,"bendMatCount"),"$isF")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.q(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isax"))}}y=a1.a
if(y!==C.b){this.r2=H.d(this.y.m(0,"emissionClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.rx=H.d(this.y.m(0,"emissionTxt"),"$isah")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isF")
break
case C.d:this.ry=H.d(this.y.m(0,"emissionTxt"),"$isab")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isF")
break}}y=a1.b
if(y!==C.b){this.x2=H.d(this.y.m(0,"ambientClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.y1=H.d(this.y.m(0,"ambientTxt"),"$isah")
this.aj=H.d(this.y.m(0,"nullAmbientTxt"),"$isF")
break
case C.d:this.y2=H.d(this.y.m(0,"ambientTxt"),"$isab")
this.aj=H.d(this.y.m(0,"nullAmbientTxt"),"$isF")
break}}y=a1.c
if(y!==C.b){this.af=H.d(this.y.m(0,"diffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.bb=H.d(this.y.m(0,"diffuseTxt"),"$isah")
this.bc=H.d(this.y.m(0,"nullDiffuseTxt"),"$isF")
break
case C.d:this.d9=H.d(this.y.m(0,"diffuseTxt"),"$isab")
this.bc=H.d(this.y.m(0,"nullDiffuseTxt"),"$isF")
break}}y=a1.d
if(y!==C.b){this.bd=H.d(this.y.m(0,"invDiffuseClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.da=H.d(this.y.m(0,"invDiffuseTxt"),"$isah")
this.be=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isF")
break
case C.d:this.dc=H.d(this.y.m(0,"invDiffuseTxt"),"$isab")
this.be=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a1.e
if(y!==C.b){this.bh=H.d(this.y.m(0,"shininess"),"$isQ")
this.bf=H.d(this.y.m(0,"specularClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.dd=H.d(this.y.m(0,"specularTxt"),"$isah")
this.bg=H.d(this.y.m(0,"nullSpecularTxt"),"$isF")
break
case C.d:this.de=H.d(this.y.m(0,"specularTxt"),"$isab")
this.bg=H.d(this.y.m(0,"nullSpecularTxt"),"$isF")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.c:this.df=H.d(this.y.m(0,"bumpTxt"),"$isah")
this.bi=H.d(this.y.m(0,"nullBumpTxt"),"$isF")
break
case C.d:this.dg=H.d(this.y.m(0,"bumpTxt"),"$isab")
this.bi=H.d(this.y.m(0,"nullBumpTxt"),"$isF")
break}if(a1.dy){this.dh=H.d(this.y.m(0,"envSampler"),"$isab")
this.di=H.d(this.y.m(0,"nullEnvTxt"),"$isF")
y=a1.r
if(y!==C.b){this.bj=H.d(this.y.m(0,"reflectClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.dj=H.d(this.y.m(0,"reflectTxt"),"$isah")
this.bk=H.d(this.y.m(0,"nullReflectTxt"),"$isF")
break
case C.d:this.dk=H.d(this.y.m(0,"reflectTxt"),"$isab")
this.bk=H.d(this.y.m(0,"nullReflectTxt"),"$isF")
break}}y=a1.x
if(y!==C.b){this.bl=H.d(this.y.m(0,"refraction"),"$isQ")
this.bm=H.d(this.y.m(0,"refractClr"),"$isE")
switch(y){case C.b:break
case C.e:break
case C.c:this.dl=H.d(this.y.m(0,"refractTxt"),"$isah")
this.bn=H.d(this.y.m(0,"nullRefractTxt"),"$isF")
break
case C.d:this.dm=H.d(this.y.m(0,"refractTxt"),"$isab")
this.bn=H.d(this.y.m(0,"nullRefractTxt"),"$isF")
break}}}y=a1.y
if(y!==C.b){this.bo=H.d(this.y.m(0,"alpha"),"$isQ")
switch(y){case C.b:break
case C.e:break
case C.c:this.dn=H.d(this.y.m(0,"alphaTxt"),"$isah")
this.bp=H.d(this.y.m(0,"nullAlphaTxt"),"$isF")
break
case C.d:this.dq=H.d(this.y.m(0,"alphaTxt"),"$isab")
this.bp=H.d(this.y.m(0,"nullAlphaTxt"),"$isF")
break}}this.c0=H.b([],[A.es])
this.c1=H.b([],[A.et])
this.c2=H.b([],[A.eu])
this.c3=H.b([],[A.ev])
this.c4=H.b([],[A.ew])
this.c5=H.b([],[A.ex])
if(a1.k2){y=a1.z
if(y>0){this.dr=H.j(this.y.m(0,"dirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.c0;(x&&C.a).h(x,new A.es(m,l,k))}}y=a1.Q
if(y>0){this.ds=H.j(this.y.m(0,"pntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isQ")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isQ")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isQ")
x=this.c1;(x&&C.a).h(x,new A.et(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dt=H.j(this.y.m(0,"spotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isQ")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isQ")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isQ")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isQ")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isQ")
x=this.c2;(x&&C.a).h(x,new A.eu(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.du=H.j(this.y.m(0,"txtDirLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isF")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isah")
x=this.c3;(x&&C.a).h(x,new A.ev(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dv=H.j(this.y.m(0,"txtPntLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$iscU")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isF")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isQ")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isQ")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isQ")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isab")
x=this.c4;(x&&C.a).h(x,new A.ew(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dw=H.j(this.y.m(0,"txtSpotLightCount"),"$isF")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isE")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isF")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isE")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isQ")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isQ")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isQ")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isQ")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isQ")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isah")
x=this.c5;(x&&C.a).h(x,new A.ex(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ab:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dS(c)
b.a.uniform1i(b.d,0)}},
a4:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
hm:function(a,b){var z,y
z=a.af
y=new A.dQ(b,z)
y.cs(b,z)
y.e_(a,b)
return y}}},hp:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aj,af,bb",
fh:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aj+"];\n"
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
fo:function(a){var z
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
fi:function(a){var z
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
fz:function(a){var z,y
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
fA:function(a){var z,y
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
fq:function(a){var z
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
fE:function(a){var z
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
ao:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cp(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fl:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ao(a,z,"emission")
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
fg:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ao(a,z,"ambient")
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
fj:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ao(a,z,"diffuse")
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
fm:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ao(a,z,"invDiffuse")
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
fv:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ao(a,z,"specular")
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
fp:function(a){var z,y
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
ft:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ao(a,z,"reflect")
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
fu:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ao(a,z,"refract")
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
fk:function(a){var z,y
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
fs:function(a){var z,y
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
fw:function(a){var z,y
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
fB:function(a){var z,y,x
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
fC:function(a){var z,y,x
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
fD:function(a){var z,y,x
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
fn:function(a){var z
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
i:function(a){return this.af}},es:{"^":"a;a,b,c"},ev:{"^":"a;a,b,c,d,e,f,r,x"},et:{"^":"a;a,b,c,d,e,f,r"},ew:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eu:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ex:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cM:{"^":"co;",
cs:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dA:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.cK(b,35633)
this.f=this.cK(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.f3(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.q(P.p("Failed to link shader: "+H.i(x)))}this.f7()
this.f9()},
W:function(a){a.a.useProgram(this.r)
this.x.fS()},
cK:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f3(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.f(P.p("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
f7:function(){var z,y,x,w,v,u
z=H.b([],[A.df])
y=this.a
x=H.X(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.df(y,v.name,u))}this.x=new A.fo(z)},
f9:function(){var z,y,x,w,v,u
z=H.b([],[A.a2])
y=this.a
x=H.X(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.fP(v.type,v.size,v.name,u))}this.y=new A.iI(z)},
az:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.F(z,y,b,c)
else return A.cT(z,y,b,a,c)},
eh:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ah(z,y,b,c)
else return A.cT(z,y,b,a,c)},
ei:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ab(z,y,b,c)
else return A.cT(z,y,b,a,c)},
b8:function(a,b){return new P.eG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fP:function(a,b,c,d){switch(a){case 5120:return this.az(b,c,d)
case 5121:return this.az(b,c,d)
case 5122:return this.az(b,c,d)
case 5123:return this.az(b,c,d)
case 5124:return this.az(b,c,d)
case 5125:return this.az(b,c,d)
case 5126:return new A.Q(this.a,this.r,c,d)
case 35664:return new A.iD(this.a,this.r,c,d)
case 35665:return new A.E(this.a,this.r,c,d)
case 35666:return new A.iG(this.a,this.r,c,d)
case 35667:return new A.iE(this.a,this.r,c,d)
case 35668:return new A.iF(this.a,this.r,c,d)
case 35669:return new A.iH(this.a,this.r,c,d)
case 35674:return new A.iK(this.a,this.r,c,d)
case 35675:return new A.cU(this.a,this.r,c,d)
case 35676:return new A.ax(this.a,this.r,c,d)
case 35678:return this.eh(b,c,d)
case 35680:return this.ei(b,c,d)
case 35670:throw H.f(this.b8("BOOL",c))
case 35671:throw H.f(this.b8("BOOL_VEC2",c))
case 35672:throw H.f(this.b8("BOOL_VEC3",c))
case 35673:throw H.f(this.b8("BOOL_VEC4",c))
default:throw H.f(P.p("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},c1:{"^":"a;a,b",
i:function(a){return this.b}},e2:{"^":"cM;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},a2:{"^":"a;"},iI:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.f(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
fU:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.fU("\n")}},F:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},iE:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},iF:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},iH:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},iC:{"^":"a2;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.i(this.c)},
p:{
cT:function(a,b,c,d,e){var z=new A.iC(a,b,c,e)
z.f=d
z.e=P.he(d,0,!1,P.A)
return z}}},Q:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},iD:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},E:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},iG:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},iK:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},cU:{"^":"a2;a,b,c,d",
a9:function(a){var z=new Float32Array(H.bC(H.x(a,"$ise",[P.v],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},ax:{"^":"a2;a,b,c,d",
a9:function(a){var z=new Float32Array(H.bC(H.x(a,"$ise",[P.v],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},ah:{"^":"a2;a,b,c,d",
dS:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ab:{"^":"a2;a,b,c,d",
dT:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
cg:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bB:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.K(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.K(t+h,s+f,r+g)
z.b=q
p=new V.K(t-h,s-f,r-g)
z.c=p
o=new V.K(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cg(y)
k=F.cg(z.b)
j=F.l2(d,e,new F.kp(z,F.cg(z.c),F.cg(z.d),k,l,c),b)
if(j!=null)a.h5(j)},
l2:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.aC,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.cN()
y=H.b([],[F.aC])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cd(null,null,new V.aM(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bY(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cd(null,null,new V.aM(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bY(d))}}z.d.fG(a+1,b+1,y)
return z},
kp:{"^":"t:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ca(z.b,b).ca(z.d.ca(z.c,b),c)
z=new V.an(y.a,y.b,y.c)
if(!J.S(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a_()}a.shu(y.t(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
x=new V.bo(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.S(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a_()}}},
af:{"^":"a;0a,0b,0c,0d,0e",
gc_:function(){return this.a==null||this.b==null||this.c==null},
ec:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.K(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dB())return
return v.t(0,Math.sqrt(v.A(v)))},
ee:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.E(0,y)
z=new V.K(z.a,z.b,z.c)
v=z.t(0,Math.sqrt(z.A(z)))
z=w.E(0,y)
z=new V.K(z.a,z.b,z.c)
z=v.aQ(z.t(0,Math.sqrt(z.A(z))))
return z.t(0,Math.sqrt(z.A(z)))},
bW:function(){if(this.d!=null)return!0
var z=this.ec()
if(z==null){z=this.ee()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
eb:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.K(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dB())return
return v.t(0,Math.sqrt(v.A(v)))},
ed:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.K(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.E(0,u)
z=new V.an(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).E(0,x)
z=new V.K(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.t(0,Math.sqrt(z.A(z)))
z=k.aQ(m)
z=z.t(0,Math.sqrt(z.A(z))).aQ(k)
m=z.t(0,Math.sqrt(z.A(z)))}return m},
bU:function(){if(this.e!=null)return!0
var z=this.eb()
if(z==null){z=this.ed()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){var z,y
if(this.gc_())return a+"disposed"
z=a+C.i.a6(J.a4(this.a.e),0)+", "+C.i.a6(J.a4(this.b.e),0)+", "+C.i.a6(J.a4(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.u("")},
p:{
bd:function(a,b,c){var z,y,x
z=new F.af()
y=a.a
if(y==null)H.q(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.p("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a_()
return z}}},
cF:{"^":"a;0a,0b",
gc_:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){if(this.gc_())return a+"disposed"
return a+C.i.a6(J.a4(this.a.e),0)+", "+C.i.a6(J.a4(this.b.e),0)},
F:function(){return this.u("")},
p:{
h8:function(a,b){var z,y,x
z=new F.cF()
y=a.a
if(y==null)H.q(P.p("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.p("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a_()
return z}}},
cK:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.a6(J.a4(z.e),0)},
F:function(){return this.u("")}},
e1:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
h5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.U()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){v=z[w]
this.a.h(0,v.fO())}this.a.U()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cK()
if(r.a==null)H.q(P.p("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.U()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.h8(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.U()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bd(p,o,m)}z=this.e
if(!(z==null))z.av(0)},
ar:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ar()||!1
if(!this.a.ar())y=!1
z=this.e
if(!(z==null))z.av(0)
return y},
d1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ap()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$bx().a)!==0)++w
if((x&$.$get$by().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
v=b.gco(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.di])
for(r=0,q=0;q<w;++q){p=b.fI(q)
o=p.gco(p)
C.a.X(s,q,new Z.di(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].h0(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.X(t,l,m[k]);++l}}r+=o}H.x(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bC(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cr(new Z.eD(34962,j),s,b)
i.b=H.b([],[Z.c5])
if(this.b.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)}f=Z.cW(y,34963,H.x(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c5(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.U()
C.a.h(h,g.e)}f=Z.cW(y,34963,H.x(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c5(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.U()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.U()
C.a.h(h,g.e)}f=Z.cW(y,34963,H.x(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c5(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.w(z,"\n")},
aG:function(a){var z=this.e
if(!(z==null))z.v(a)},
a_:function(){return this.aG(null)},
p:{
cN:function(){var z,y
z=new F.e1()
y=new F.iV(z)
y.b=!1
y.c=H.b([],[F.aC])
z.a=y
y=new F.i4(z)
y.b=H.b([],[F.cK])
z.b=y
y=new F.i3(z)
y.b=H.b([],[F.cF])
z.c=y
y=new F.i2(z)
y.b=H.b([],[F.af])
z.d=y
z.e=null
return z}}},
i2:{"^":"a;a,0b",
fF:function(a){var z,y,x,w,v
H.x(a,"$ise",[F.aC],"$ase")
z=H.b([],[F.af])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bd(y,w,v))}return z},
fG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(c,"$ise",[F.aC],"$ase")
z=H.b([],[F.af])
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
C.a.h(z,F.bd(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bd(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bd(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bd(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
ar:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bW())x=!1
return x},
bV:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bU())x=!1
return x},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].u(a))
return C.a.w(z,"\n")},
F:function(){return this.u("")}},
i3:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].u(a+(""+x+". ")))}return C.a.w(z,"\n")},
F:function(){return this.u("")}},
i4:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].u(a))
return C.a.w(z,"\n")},
F:function(){return this.u("")}},
aC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bY:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cd(this.cx,x,u,z,y,w,v,a,t)},
fO:function(){return this.bY(null)},
shu:function(a){var z
if(!J.S(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
h0:function(a){var z,y
z=J.I(a)
if(z.q(a,$.$get$ap())){z=this.f
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aF())){z=this.r
y=[P.v]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aE())){z=this.x
y=[P.v]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aG())){z=this.y
y=[P.v]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.q(a,$.$get$aH())){z=this.z
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bx())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$by())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$b0()))return H.b([this.ch],[P.v])
else if(z.q(a,$.$get$aD())){z=this.cx
y=[P.v]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.v])},
bW:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.K(0,0,0)
this.d.J(0,new F.j1(z))
z=z.a
this.r=z.t(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
bU:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.K(0,0,0)
this.d.J(0,new F.j0(z))
z=z.a
this.x=z.t(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.av(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
u:function(a){var z,y,x
z=H.b([],[P.m])
C.a.h(z,C.i.a6(J.a4(this.e),0))
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
C.a.h(z,V.L(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.w(z,", ")
return a+"{"+x+"}"},
F:function(){return this.u("")},
p:{
cd:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aC()
y=new F.j_(z)
y.b=H.b([],[F.cK])
z.b=y
y=new F.iZ(z)
x=[F.cF]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iW(z)
x=[F.af]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eA()
z.e=0
y=$.$get$ap()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aF().a)!==0?e:null
z.x=(x&$.$get$aE().a)!==0?b:null
z.y=(x&$.$get$aG().a)!==0?f:null
z.z=(x&$.$get$aH().a)!==0?g:null
z.Q=(x&$.$get$eB().a)!==0?c:null
z.ch=(x&$.$get$b0().a)!==0?i:0
z.cx=(x&$.$get$aD().a)!==0?a:null
return z}}},
j1:{"^":"t:5;a",
$1:function(a){var z,y
H.j(a,"$isaf")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
j0:{"^":"t:5;a",
$1:function(a){var z,y
H.j(a,"$isaf")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iV:{"^":"a;a,0b,0c",
U:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.f(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a_()
return!0},
fH:function(a,b,c,d,e,f,g,h,i){var z=F.cd(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b9:function(a,b,c,d,e,f){return this.fH(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
ar:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bW()
return!0},
bV:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bU()
return!0},
fK:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.t(0,Math.sqrt(u*u+t*t+s*s))
if(!J.S(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
this.U()
z=H.b([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].u(a))
return C.a.w(z,"\n")},
F:function(){return this.u("")}},
iW:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){H.k(b,{func:1,ret:-1,args:[F.af]})
C.a.J(this.b,b)
C.a.J(this.c,new F.iX(this,b))
C.a.J(this.d,new F.iY(this,b))},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].u(a))
return C.a.w(z,"\n")},
F:function(){return this.u("")}},
iX:{"^":"t:5;a,b",
$1:function(a){H.j(a,"$isaf")
if(!J.S(a.a,this.a))this.b.$1(a)}},
iY:{"^":"t:5;a,b",
$1:function(a){var z
H.j(a,"$isaf")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
iZ:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].u(a))
return C.a.w(z,"\n")},
F:function(){return this.u("")}},
j_:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
u:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].u(a))
return C.a.w(z,"\n")},
F:function(){return this.u("")}}}],["","",,O,{"^":"",hl:{"^":"bU;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gn:function(){var z=this.dy
if(z==null){z=D.D()
this.dy=z}return z},
P:[function(a){var z
H.j(a,"$isu")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.P(null)},"cz","$1","$0","gax",0,2,0],
f0:[function(a){H.j(a,"$isu")
this.a=null
this.P(a)},function(){return this.f0(null)},"i5","$1","$0","gf_",0,2,0],
hH:[function(a,b){var z=V.aB
z=new D.bN(a,H.x(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.P(z)},"$2","gex",8,0,22],
hI:[function(a,b){var z=V.aB
z=new D.bO(a,H.x(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.P(z)},"$2","gey",8,0,22],
cH:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.Z(z.e.length+3,4)*4
x=C.f.Z(z.f.length+3,4)*4
w=C.f.Z(z.r.length+3,4)*4
v=C.f.Z(z.x.length+3,4)*4
u=C.f.Z(z.y.length+3,4)*4
t=C.f.Z(z.z.length+3,4)*4
s=C.f.Z(this.e.a.length+3,4)*4
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
a6=$.$get$ap()
if(c){z=$.$get$aF()
a6=new Z.b_(a6.a|z.a)}if(b){z=$.$get$aE()
a6=new Z.b_(a6.a|z.a)}if(a){z=$.$get$aG()
a6=new Z.b_(a6.a|z.a)}if(a0){z=$.$get$aH()
a6=new Z.b_(a6.a|z.a)}if(a2){z=$.$get$aD()
a6=new Z.b_(a6.a|z.a)}return new A.hp(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
M:function(a,b){H.x(a,"$ise",[T.cb],"$ase")
if(b!=null)if(!C.a.aE(a,b)){b.a=a.length
C.a.h(a,b)}},
a7:function(a,b){var z
for(z=this.dx.a,z=new J.ak(z,z.length,0,[H.z(z,0)]);z.B();)C.o.a7(z.d,b)},
dG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cH()
y=H.j(a.fr.j(0,z.af),"$isdQ")
if(y==null){y=A.hm(z,a.a)
a.d_(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bb
z=b.e
if(!(z instanceof Z.cr)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.ar()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.bV()
u.a.bV()
u=u.e
if(!(u==null))u.av(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.fK()
t=t.e
if(!(t==null))t.av(0)}r=b.d.d1(new Z.eE(a.a),w)
r.as($.$get$ap()).e=this.a.Q.c
if(z)r.as($.$get$aF()).e=this.a.cx.c
if(v)r.as($.$get$aE()).e=this.a.ch.c
if(x.rx)r.as($.$get$aG()).e=this.a.cy.c
if(u)r.as($.$get$aH()).e=this.a.db.c
if(x.x1)r.as($.$get$aD()).e=this.a.dx.c
b.e=r}z=T.cb
q=H.b([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.gR(u)
v=v.dy
v.toString
v.a9(u.a3(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gR(u)
t=a.dx
t=u.l(0,t.gR(t))
a.cx=t
u=t}v=v.fr
v.toString
v.a9(u.a3(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghj()
t=a.dx
t=u.l(0,t.gR(t))
a.ch=t
u=t}v=v.fy
v.toString
v.a9(u.a3(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.a9(u.a3(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.a9(u.a3(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.a9(C.o.a3(u,!0))}if(x.aj>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.j(t,"$isaB")
u=u.r1
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.bC(H.x(t.a3(0,!0),"$ise",v,"$ase")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.e:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.M(q,this.f.d)
v=this.a
u=this.f.d
v.ab(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.f.e)
v=this.a
u=this.f.e
v.a4(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.e:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.M(q,this.r.d)
v=this.a
u=this.r.d
v.ab(v.y1,v.aj,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.r.e)
v=this.a
u=this.r.e
v.a4(v.y2,v.aj,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.e:v=this.a
u=this.x.f
v=v.af
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.M(q,this.x.d)
v=this.a
u=this.x.d
v.ab(v.bb,v.bc,u)
u=this.a
v=this.x.f
u=u.af
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.x.e)
v=this.a
u=this.x.e
v.a4(v.d9,v.bc,u)
u=this.a
v=this.x.f
u=u.af
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.bd
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.M(q,this.y.d)
v=this.a
u=this.y.d
v.ab(v.da,v.be,u)
u=this.a
v=this.y.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.y.e)
v=this.a
u=this.y.e
v.a4(v.dc,v.be,u)
u=this.a
v=this.y.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
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
case C.c:this.M(q,this.z.d)
v=this.a
u=this.z.d
v.ab(v.dd,v.bg,u)
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
case C.d:this.M(q,this.z.e)
v=this.a
u=this.z.e
v.a4(v.de,v.bg,u)
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
v=this.a.dr
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c0
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.dL(j.gba(j))
s=t.a
h=t.b
g=t.c
g=t.t(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.gai(j)
h=i.c
s=g.gaV()
t=g.gaI()
g=g.gaO()
h.a.uniform3f(h.d,s,t,g);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c1
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaU(j)
s=i.b
h=t.gck(t)
g=t.gcl(t)
t=t.gcm(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b1(j.gaU(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gai(j)
g=i.d
h=t.gaV()
s=t.gaI()
t=t.gaO()
g.a.uniform3f(g.d,h,s,t)
t=j.gbP()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbQ()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbR()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c2
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaU(j)
s=i.b
h=t.gck(t)
g=t.gcl(t)
t=t.gcm(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gba(j).ib()
g=i.c
h=t.gac(t)
s=t.gad(t)
t=t.gae()
g.a.uniform3f(g.d,h,s,t)
t=m.b1(j.gaU(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gai(j)
s=i.e
h=t.gaV()
g=t.gaI()
t=t.gaO()
s.a.uniform3f(s.d,h,g,t)
t=j.gia()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gi9()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbR()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
s=this.a.c3
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gaZ()
H.x(q,"$ise",t,"$ase")
if(!C.a.aE(q,s)){s.saK(q.length)
C.a.h(q,s)}s=j.gba(j)
h=i.d
g=s.gac(s)
f=s.gad(s)
s=s.gae()
h.a.uniform3f(h.d,g,f,s)
s=j.gbr()
f=i.b
g=s.gac(s)
h=s.gad(s)
s=s.gae()
f.a.uniform3f(f.d,g,h,s)
s=j.gaW(j)
h=i.c
g=s.gac(s)
f=s.gad(s)
s=s.gae()
h.a.uniform3f(h.d,g,f,s)
s=m.dL(j.gba(j))
f=s.a
g=s.b
h=s.c
h=s.t(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gai(j)
g=i.f
f=h.gaV()
s=h.gaI()
h=h.gaO()
g.a.uniform3f(g.d,f,s,h)
h=j.gaZ()
s=h.gdC(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcM()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaK())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
h=this.a.c4
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gaZ()
H.x(q,"$ise",s,"$ase")
if(!C.a.aE(q,h)){h.saK(q.length)
C.a.h(q,h)}e=m.l(0,j.gR(j))
h=j.gR(j).b1(new V.an(0,0,0))
g=i.b
f=h.gck(h)
d=h.gcl(h)
h=h.gcm(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b1(new V.an(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.c8(0)
d=i.d
n=new Float32Array(H.bC(H.x(new V.dR(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a3(0,!0),"$ise",t,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gai(j)
h=i.e
f=d.gaV()
g=d.gaI()
d=d.gaO()
h.a.uniform3f(h.d,f,g,d)
d=j.gaZ()
h=d.gdC(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcM()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaK())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbP()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbQ()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbR()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dw
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c5
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaZ()
H.x(q,"$ise",z,"$ase")
if(!C.a.aE(q,t)){t.saK(q.length)
C.a.h(q,t)}t=j.gaU(j)
s=i.b
h=t.gck(t)
g=t.gcl(t)
t=t.gcm(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gba(j)
g=i.c
h=t.gac(t)
s=t.gad(t)
t=t.gae()
g.a.uniform3f(g.d,h,s,t)
t=j.gbr()
s=i.d
h=t.gac(t)
g=t.gad(t)
t=t.gae()
s.a.uniform3f(s.d,h,g,t)
t=j.gaW(j)
g=i.e
h=t.gac(t)
s=t.gad(t)
t=t.gae()
g.a.uniform3f(g.d,h,s,t)
t=m.b1(j.gaU(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaZ()
s=t.gdC(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcM()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaK())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gai(j)
s=i.y
h=t.gaV()
g=t.gaI()
t=t.gaO()
s.a.uniform3f(s.d,h,g,t)
t=j.gii()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gij()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbR()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.c:this.M(q,this.Q.d)
z=this.a
v=this.Q.d
z.ab(z.df,z.bi,v)
break
case C.d:this.M(q,this.Q.e)
z=this.a
v=this.Q.e
z.a4(z.dg,z.bi,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gR(v).c8(0)
a.Q=v}z=z.id
z.toString
z.a9(v.a3(0,!0))}if(x.dy){this.M(q,this.ch)
z=this.a
v=this.ch
z.a4(z.dh,z.di,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bj
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.M(q,this.cx.d)
z=this.a
v=this.cx.d
z.ab(z.dj,z.bk,v)
v=this.a
z=this.cx.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.M(q,this.cx.e)
z=this.a
v=this.cx.e
z.a4(z.dk,z.bk,v)
v=this.a
z=this.cx.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
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
case C.c:this.M(q,this.cy.d)
z=this.a
v=this.cy.d
z.ab(z.dl,z.bn,v)
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
case C.d:this.M(q,this.cy.e)
z=this.a
v=this.cy.e
z.a4(z.dm,z.bn,v)
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
case C.e:z=this.a
u=this.db.f
z=z.bo
z.a.uniform1f(z.d,u)
break
case C.c:this.M(q,this.db.d)
z=this.a
u=this.db.d
z.ab(z.dn,z.bp,u)
u=this.a
z=this.db.f
u=u.bo
u.a.uniform1f(u.d,z)
break
case C.d:this.M(q,this.db.e)
z=this.a
u=this.db.e
z.a4(z.dq,z.bp,u)
u=this.a
z=this.db.f
u=u.bo
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o){z=q[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.W(a)
z.a2(a)
z.b2(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.d6()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cH().af}},hn:{"^":"cG;0f,a,b,0c,0d,0e"},cG:{"^":"a;",
P:[function(a){this.a.P(H.j(a,"$isu"))},function(){return this.P(null)},"cz","$1","$0","gax",0,2,0],
aL:["dY",function(){}],
f5:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gn().O(0,this.gax())
y=this.d
this.d=a
if(a!=null)a.gn().h(0,this.gax())
z=new D.G(this.b+".texture2D",y,this.d,this,[T.e8])
z.b=!0
this.a.P(z)}},
f6:function(a){}},ho:{"^":"cG;a,b,0c,0d,0e"},aV:{"^":"cG;0f,a,b,0c,0d,0e",
cT:function(a){var z,y
if(!J.S(this.f,a)){z=this.f
this.f=a
y=new D.G(this.b+".color",z,a,this,[V.a5])
y.b=!0
this.a.P(y)}},
aL:["cr",function(){this.dY()
this.cT(new V.a5(1,1,1))}],
sai:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aL()
z=this.a
z.a=null
z.P(null)}this.cT(b)}},hq:{"^":"aV;0ch,0f,a,b,0c,0d,0e",
f3:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.P(z)}},
aL:function(){this.cr()
this.f3(1)}},hr:{"^":"aV;0ch,0f,a,b,0c,0d,0e",
f4:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.P(z)}},
aL:function(){this.cr()
this.f4(100)}},i9:{"^":"bU;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
P:[function(a){var z
H.j(a,"$isu")
z=this.e
if(!(z==null))z.v(a)},function(){return this.P(null)},"cz","$1","$0","gax",0,2,0],
dG:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.j(a.fr.j(0,"Skybox"),"$ise2")
if(z==null){y=a.a
z=new A.e2(y,"Skybox")
z.cs(y,"Skybox")
z.dA(0,$.ib,$.ia)
z.z=z.x.j(0,"posAttr")
z.Q=H.d(z.y.j(0,"fov"),"$isQ")
z.ch=H.d(z.y.j(0,"ratio"),"$isQ")
z.cx=H.d(z.y.j(0,"boxClr"),"$isE")
z.cy=H.d(z.y.j(0,"boxTxt"),"$isab")
z.db=H.d(z.y.j(0,"viewMat"),"$isax")
a.d_(z)}this.a=z}if(b.e==null){y=b.d.d1(new Z.eE(a.a),$.$get$ap())
y.as($.$get$ap()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.W(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.dT(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gR(x).c8(0)
w=w.db
w.toString
w.a9(x.a3(0,!0))
y=b.e
if(y instanceof Z.cr){y.W(a)
y.a2(a)
y.b2(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.d6()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bU:{"^":"a;"}}],["","",,T,{"^":"",cb:{"^":"co;"},e8:{"^":"cb;"},im:{"^":"e8;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gn:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z}},e9:{"^":"cb;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z}},io:{"^":"a;a,0b,0c,0d,0e",
h3:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.dD(null,a,null)
w=new T.im()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a0
W.T(x,"load",H.k(new T.iq(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
h2:function(a){return this.h3(a,!1,!1,!1,!1)},
aA:function(a,b,c,d,e,f){var z,y
z=W.dD(null,c,null);++this.d
y=W.a0
W.T(z,"load",H.k(new T.ip(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
cS:function(a,b,c){var z,y,x,w
b=V.db(b,2)
z=V.db(a.width,2)
y=V.db(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.ct(null,null)
x.width=z
x.height=y
w=H.j(C.k.dO(x,"2d"),"$isdk")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kF(w.getImageData(0,0,x.width,x.height))}}},iq:{"^":"t:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.cS(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.t.dI(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.d8()}++x.e}},ip:{"^":"t:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.cS(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.t.dI(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.d8()}++z.e}}}],["","",,V,{"^":"",fm:{"^":"a;",
aR:function(a,b){return!0},
i:function(a){return"all"},
$isbR:1},bR:{"^":"a;"},dP:{"^":"a;",
aR:["dX",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)if(z[x].aR(0,b))return!0
return!1}],
i:["cq",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbR:1},bm:{"^":"dP;0a",
aR:function(a,b){return!this.dX(0,b)},
i:function(a){return"!["+this.cq(0)+"]"}},i0:{"^":"a;0a",
e1:function(a){var z,y
if(a.a.length<=0)throw H.f(P.p("May not create a SetMatcher with zero characters."))
z=new H.aU(0,0,[P.A,P.a3])
for(y=new H.dM(a,a.gk(a),0,[H.ay(a,"r",0)]);y.B();)z.X(0,y.d,!0)
this.a=z},
aR:function(a,b){return this.a.d4(0,b)},
i:function(a){var z=this.a
return P.cP(new H.dL(z,[H.z(z,0)]),0,null)},
$isbR:1,
p:{
a_:function(a){var z=new V.i0()
z.e1(a)
return z}}},e4:{"^":"a;a,b,0c,0d",
gh6:function(a){return this.b},
w:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eg(this.a.G(0,b))
w.a=H.b([],[V.bR])
w.c=!1
C.a.h(this.c,w)
return w},
fT:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.aR(0,a))return w}return},
i:function(a){return this.b}},ed:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fe(this.b,"\n","\\n")
y=H.fe(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ee:{"^":"a;a,b,0c",
i:function(a){return this.b}},iy:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.e4(this,b)
z.c=H.b([],[V.eg])
this.a.X(0,b,z)}return z},
b_:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ee(this,a)
y=P.m
z.c=new H.aU(0,0,[y,y])
this.b.X(0,a,z)}return z},
hz:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.ed])
y=this.c
x=[P.A]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.b4(a,t)
r=y.fT(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cP(w,0,null)
throw H.f(P.p("Untokenizable string [state: "+y.gh6(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cP(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ed(o==null?p.b:o,q,t)}++t}}}},eg:{"^":"dP;b,0c,0a",
i:function(a){return this.b.b+": "+this.cq(0)}}}],["","",,X,{"^":"",c0:{"^":"a;",$isat:1},fX:{"^":"cQ;0a,0b,0c,0d,0e,0f,0r,0x",
gn:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
am:function(a){var z=this.x
if(!(z==null))z.v(a)},
W:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.h.ag(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.h.ag(w.b*x)
t=C.h.ag(w.c*y)
a.c=t
w=C.h.ag(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
p:{
cx:function(a,b,c,d,e,f,g){var z,y
z=new X.fX()
y=new V.aM(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.e0(0,0,1,1)
z.r=y
return z}}},fY:{"^":"a;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
W:function(a){var z
a.cy.bq(V.aW())
z=V.aW()
a.db.bq(z)},
b2:function(a){a.cy.au()
a.db.au()},
$isat:1,
$isc0:1},hC:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
am:[function(a){var z
H.j(a,"$isu")
z=this.f
if(!(z==null))z.v(a)},function(){return this.am(null)},"hA","$1","$0","ge8",0,2,0],
W:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.ar(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bq(s)
z=$.dW
if(z==null){z=new V.K(0,0,-1)
r=z.t(0,Math.sqrt(z.A(z)))
z=new V.K(0,1,0).aQ(r)
q=z.t(0,Math.sqrt(z.A(z)))
p=r.aQ(q)
o=new V.K(0,0,0)
z=V.ar(q.a,p.a,r.a,q.H(0).A(o),q.b,p.b,r.b,p.H(0).A(o),q.c,p.c,r.c,r.H(0).A(o),0,0,0,1)
$.dW=z
n=z}else n=z
z=this.b
if(z!=null){m=z.aH(0,a,this)
if(m!=null)n=m.l(0,n)}a.db.bq(n)},
b2:function(a){a.cy.au()
a.db.au()},
$isat:1,
$isc0:1,
p:{
dV:function(a,b,c,d,e){var z,y,x
z=new X.hC()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gn().h(0,z.ge8())
x=new D.G("mover",y,z.b,z,[U.aa])
x.b=!0
z.am(x)}x=z.c
if(!$.l.$2(x,b)){y=z.c
z.c=b
x=new D.G("fov",y,b,z,[P.v])
x.b=!0
z.am(x)}x=z.d
if(!$.l.$2(x,d)){y=z.d
z.d=d
x=new D.G("near",y,d,z,[P.v])
x.b=!0
z.am(x)}x=z.e
if(!$.l.$2(x,a)){y=z.e
z.e=a
x=new D.G("far",y,a,z,[P.v])
x.b=!0
z.am(x)}return z}}},cQ:{"^":"a;"}}],["","",,V,{"^":"",
l0:function(a){P.ix(C.z,new V.l1(a))},
l1:{"^":"t:37;a",
$1:function(a){H.j(a,"$isaY")
P.dc(C.h.dK(this.a.gfV(),2)+" fps")}},
i5:{"^":"a;0a,0b",
e2:function(a,b){var z,y,x,w,v,u,t
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
t=W.a0
W.T(z,"scroll",H.k(new V.i8(x),{func:1,ret:-1,args:[t]}),!1,t)},
cZ:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.x(a,"$ise",[P.m],"$ase")
this.f8()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hz(C.a.fZ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
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
if(H.fd(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kc(C.J,s,C.u,!1)
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
f8:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iy()
y=P.m
z.a=new H.aU(0,0,[y,V.e4])
z.b=new H.aU(0,0,[y,V.ee])
z.c=z.G(0,"Start")
y=z.G(0,"Start").w(0,"Bold")
x=V.a_(new H.Y("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Bold").w(0,"Bold")
x=new V.bm()
w=[V.bR]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a_(new H.Y("*"))
C.a.h(x.a,y)
y=z.G(0,"Bold").w(0,"BoldEnd")
x=V.a_(new H.Y("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"Italic")
x=V.a_(new H.Y("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Italic").w(0,"Italic")
x=new V.bm()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a_(new H.Y("_"))
C.a.h(x.a,y)
y=z.G(0,"Italic").w(0,"ItalicEnd")
x=V.a_(new H.Y("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"Code")
x=V.a_(new H.Y("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Code").w(0,"Code")
x=new V.bm()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a_(new H.Y("`"))
C.a.h(x.a,y)
y=z.G(0,"Code").w(0,"CodeEnd")
x=V.a_(new H.Y("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"LinkHead")
x=V.a_(new H.Y("["))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"LinkHead").w(0,"LinkTail")
x=V.a_(new H.Y("|"))
C.a.h(y.a,x)
x=z.G(0,"LinkHead").w(0,"LinkEnd")
y=V.a_(new H.Y("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkHead").w(0,"LinkHead")
y=new V.bm()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a_(new H.Y("|]"))
C.a.h(y.a,x)
x=z.G(0,"LinkTail").w(0,"LinkEnd")
y=V.a_(new H.Y("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkTail").w(0,"LinkTail")
y=new V.bm()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a_(new H.Y("|]"))
C.a.h(y.a,x)
C.a.h(z.G(0,"Start").w(0,"Other").a,new V.fm())
x=z.G(0,"Other").w(0,"Other")
y=new V.bm()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a_(new H.Y("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.b_("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.b_("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.b_("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.b_("Link")
x=z.G(0,"Other")
x.d=x.a.b_("Other")
this.b=z},
p:{
i6:function(a,b){var z=new V.i5()
z.e2(a,!0)
return z}}},
i8:{"^":"t:11;a",
$1:function(a){P.eb(C.l,new V.i7(this.a))}},
i7:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.h.ag(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
f9:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.i6("Test 034",!0)
y=W.ct(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.m]
z.cZ(H.b(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."],x))
z.cZ(H.b(["\xab[Back to Tests|../]"],x))
x=document
y=x.getElementById("testCanvas")
z=y.style
z.width="100%"
z.height="100%"
z.margin="-4px"
w=x.createElement("div")
z=w.style
z.border="2px solid"
z.padding="10px"
C.n.f2(z,(z&&C.n).cC(z,"resize"),"both","")
z.overflow="auto"
J.fl(y,w)
w.appendChild(y)
v=x.getElementById("testCanvas")
if(v==null)H.q(P.p("Failed to find an element with the identifier, testCanvas."))
u=E.iv(v,!0,!0,!0,!1)
t=new U.dB()
t.b3(U.aa)
t.aJ(t.gev(),t.geQ())
t.e=null
t.f=V.aW()
t.r=0
z=u.r
x=new U.iR()
s=U.cw()
s.scj(0,!0)
s.scb(6.283185307179586)
s.scd(0)
s.sa0(0,0)
s.scc(100)
s.sK(0)
s.sbZ(0.5)
x.b=s
r=x.gaB()
s.gn().h(0,r)
s=U.cw()
s.scj(0,!0)
s.scb(6.283185307179586)
s.scd(0)
s.sa0(0,0)
s.scc(100)
s.sK(0)
s.sbZ(0.5)
x.c=s
s.gn().h(0,r)
x.d=null
x.e=!1
x.f=!1
x.r=!1
x.x=2.5
x.y=2.5
x.z=2
x.Q=4
x.cx=!1
x.ch=!1
x.cy=0
x.db=0
x.dx=null
x.dy=0
x.fr=null
x.fx=null
q=new X.as(!1,!1,!1)
p=x.d
x.d=q
s=[X.as]
r=new D.G("modifiers",p,q,x,s)
r.b=!0
x.I(r)
r=x.f
if(r!==!1){x.f=!1
r=new D.G("invertX",r,!1,x,[P.a3])
r.b=!0
x.I(r)}r=x.r
if(r!==!1){x.r=!1
r=new D.G("invertY",r,!1,x,[P.a3])
r.b=!0
x.I(r)}x.aN(z)
t.h(0,x)
z=u.r
x=new U.iQ()
r=U.cw()
r.scj(0,!0)
r.scb(6.283185307179586)
r.scd(0)
r.sa0(0,0)
r.scc(100)
r.sK(0)
r.sbZ(0.2)
x.b=r
r.gn().h(0,x.gaB())
x.c=null
x.d=!1
x.e=2.5
x.f=2
x.r=4
x.y=!1
x.x=!1
x.z=0
x.Q=null
x.ch=0
x.cx=null
x.cy=null
q=new X.as(!0,!1,!1)
p=x.c
x.c=q
r=new D.G("modifiers",p,q,x,s)
r.b=!0
x.I(r)
x.aN(z)
t.h(0,x)
z=u.r
x=new U.iS()
x.c=0.01
x.d=0
x.e=0
q=new X.as(!1,!1,!1)
x.b=q
s=new D.G("modifiers",null,q,x,s)
s.b=!0
x.I(s)
x.aN(z)
t.h(0,x)
o=V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
z=new U.dn()
z.a=o
t.h(0,z)
n=X.dV(2000,1.0471975511965976,t,0.1,null)
m=new O.hl()
z=O.cv(V.aB)
m.e=z
z.aJ(m.gex(),m.gey())
z=new O.aV(m,"emission")
z.c=C.b
z.f=new V.a5(0,0,0)
m.f=z
z=new O.aV(m,"ambient")
z.c=C.b
z.f=new V.a5(0,0,0)
m.r=z
z=new O.aV(m,"diffuse")
z.c=C.b
z.f=new V.a5(0,0,0)
m.x=z
z=new O.aV(m,"invDiffuse")
z.c=C.b
z.f=new V.a5(0,0,0)
m.y=z
z=new O.hr(m,"specular")
z.c=C.b
z.f=new V.a5(0,0,0)
z.ch=100
m.z=z
z=new O.ho(m,"bump")
z.c=C.b
m.Q=z
m.ch=null
z=new O.aV(m,"reflect")
z.c=C.b
z.f=new V.a5(0,0,0)
m.cx=z
z=new O.hq(m,"refract")
z.c=C.b
z.f=new V.a5(0,0,0)
z.ch=1
m.cy=z
z=new O.hn(m,"alpha")
z.c=C.b
z.f=1
m.db=z
z=new D.h7()
z.b3(D.U)
z.e=H.b([],[D.fJ])
z.f=H.b([],[D.hE])
z.r=H.b([],[D.ic])
z.x=H.b([],[D.ir])
z.y=H.b([],[D.is])
z.z=H.b([],[D.it])
z.Q=null
z.ch=null
z.cn(z.gew(),z.geP(),z.geR())
m.dx=z
x=z.Q
if(x==null){x=D.D()
z.Q=x
z=x}else z=x
z.h(0,m.gf_())
z=m.dx
x=z.ch
if(x==null){x=D.D()
z.ch=x
z=x}else z=x
z.h(0,m.gax())
m.dy=null
z=m.r
z.sai(0,new V.a5(0.3,0.3,0.3))
z=m.x
z.sai(0,new V.a5(0.8,0.8,0.8))
z=m.x
x=u.f.h2("../resources/Test.png")
s=z.c
if(s!==C.c){if(s===C.b)z.aL()
z.c=C.c
z.f6(null)
s=z.a
s.a=null
s.P(null)}z.f5(x)
l=X.cx(!0,!0,!1,null,2000,null,0)
if(l.b){l.b=!1
z=new D.G("clearColor",!0,!1,l,[P.a3])
z.b=!0
l.am(z)}k=E.dz(null,!0,null,"",null,null)
j=F.cN()
F.bB(j,null,null,1,1,1,0,0,1)
F.bB(j,null,null,1,1,0,1,0,3)
F.bB(j,null,null,1,1,0,0,1,2)
F.bB(j,null,null,1,1,-1,0,0,0)
F.bB(j,null,null,1,1,0,-1,0,0)
F.bB(j,null,null,1,1,0,0,-1,3)
j.ar()
k.sbt(0,j)
i=new M.fQ()
z=O.cv(E.aA)
i.d=z
z.aJ(i.geA(),i.geB())
i.e=null
i.f=null
i.r=null
i.x=null
i.saP(null)
i.saX(0,null)
i.saY(null)
i.d.h(0,k)
i.saY(m)
i.saX(0,l)
i.saP(n)
z=u.f
x=z.a
h=x.createTexture()
x.bindTexture(34067,h)
x.texParameteri(34067,10242,10497)
x.texParameteri(34067,10243,10497)
x.texParameteri(34067,10241,9729)
x.texParameteri(34067,10240,9729)
x.bindTexture(34067,null)
g=new T.e9()
g.a=0
g.b=h
g.c=!1
g.d=0
z.aA(g,h,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aA(g,h,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aA(g,h,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aA(g,h,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aA(g,h,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aA(g,h,"../resources/maskonaive/negz.jpg",34074,!1,!1)
f=new M.fB()
f.saP(null)
f.saX(0,null)
f.saY(null)
z=E.dz(null,!0,null,"",null,null)
j=F.cN()
x=j.a
s=new V.K(-1,-1,1)
s=s.t(0,Math.sqrt(s.A(s)))
e=x.b9(new V.bo(1,2,4,6),new V.aM(1,0,0,1),new V.an(-1,-1,0),new V.O(0,1),s,null)
x=j.a
s=new V.K(1,-1,1)
s=s.t(0,Math.sqrt(s.A(s)))
d=x.b9(new V.bo(0,3,4,6),new V.aM(0,0,1,1),new V.an(1,-1,0),new V.O(1,1),s,null)
x=j.a
s=new V.K(1,1,1)
s=s.t(0,Math.sqrt(s.A(s)))
c=x.b9(new V.bo(0,2,5,6),new V.aM(0,1,0,1),new V.an(1,1,0),new V.O(1,0),s,null)
x=j.a
s=new V.K(-1,1,1)
s=s.t(0,Math.sqrt(s.A(s)))
b=x.b9(new V.bo(0,2,4,7),new V.aM(1,1,0,1),new V.an(-1,1,0),new V.O(0,0),s,null)
j.d.fF(H.b([e,d,c,b],[F.aC]))
j.ar()
z.sbt(0,j)
f.d=z
f.e=null
z=new O.i9()
z.b=1.0471975511965976
p=z.c
z.c=g
g.gn().h(0,z.gax())
x=new D.G("boxTexture",p,z.c,z,[T.e9])
x.b=!0
z.P(x)
a=new V.a5(1,1,1)
if(!J.S(z.d,a)){p=z.d
z.d=a
x=new D.G("boxColor",p,a,z,[V.a5])
x.b=!0
z.P(x)}z.e=null
f.saY(z)
f.saX(0,l)
f.saP(n)
z=M.au
x=H.b([f,i],[z])
s=new M.fz()
s.b3(z)
s.e=!1
s.f=null
s.aJ(s.geS(),s.geT())
s.bO(0,x)
z=u.d
if(z!==s){if(z!=null)z.gn().O(0,u.gcu())
u.d=s
s.gn().h(0,u.gcu())
u.e4()}V.l0(u)}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.dF.prototype}if(typeof a=="string")return J.cB.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.h2.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.bX=function(a){if(typeof a=="string")return J.cB.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.d6=function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.kJ=function(a){if(typeof a=="number")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cV.prototype
return a}
J.bH=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).q(a,b)}
J.fg=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kJ(a).a8(a,b)}
J.fh=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kS(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bX(a).j(a,b)}
J.fi=function(a,b,c){return J.bH(a).eY(a,b,c)}
J.fj=function(a,b,c,d){return J.bH(a).cY(a,b,c,d)}
J.cn=function(a,b,c){return J.bX(a).fL(a,b,c)}
J.dd=function(a,b){return J.d6(a).C(a,b)}
J.fk=function(a,b){return J.d6(a).J(a,b)}
J.aS=function(a){return J.I(a).gS(a)}
J.bK=function(a){return J.d6(a).gV(a)}
J.b8=function(a){return J.bX(a).gk(a)}
J.fl=function(a,b){return J.bH(a).hm(a,b)}
J.a4=function(a){return J.I(a).i(a)}
I.d9=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cs.prototype
C.n=W.fC.prototype
C.A=J.n.prototype
C.a=J.aT.prototype
C.B=J.dF.prototype
C.f=J.dG.prototype
C.o=J.dH.prototype
C.h=J.c6.prototype
C.i=J.cB.prototype
C.I=J.bP.prototype
C.K=H.hy.prototype
C.L=W.hz.prototype
C.r=J.hD.prototype
C.t=P.cL.prototype
C.m=J.cV.prototype
C.v=W.bz.prototype
C.w=W.j4.prototype
C.x=new P.hB()
C.y=new P.iU()
C.j=new P.jR()
C.b=new A.c1(0,"ColorSourceType.None")
C.e=new A.c1(1,"ColorSourceType.Solid")
C.c=new A.c1(2,"ColorSourceType.Texture2D")
C.d=new A.c1(3,"ColorSourceType.TextureCube")
C.l=new P.bc(0)
C.z=new P.bc(5e6)
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.E=function(getTagFallback) {
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
C.F=function() {
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
C.G=function(hooks) {
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
C.H=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.J=H.b(I.d9([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.u=new P.iT(!1)
$.aq=0
$.b9=null
$.dg=null
$.d_=!1
$.f6=null
$.f0=null
$.fc=null
$.cj=null
$.cl=null
$.d7=null
$.b2=null
$.bD=null
$.bE=null
$.d0=!1
$.N=C.j
$.dw=null
$.dv=null
$.du=null
$.dt=null
$.l=V.hs()
$.ib="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ia="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
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
I.$lazy(y,x,w)}})(["ds","$get$ds",function(){return H.f5("_$dart_dartClosure")},"cC","$get$cC",function(){return H.f5("_$dart_js")},"eh","$get$eh",function(){return H.av(H.cc({
toString:function(){return"$receiver$"}}))},"ei","$get$ei",function(){return H.av(H.cc({$method$:null,
toString:function(){return"$receiver$"}}))},"ej","$get$ej",function(){return H.av(H.cc(null))},"ek","$get$ek",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eo","$get$eo",function(){return H.av(H.cc(void 0))},"ep","$get$ep",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"em","$get$em",function(){return H.av(H.en(null))},"el","$get$el",function(){return H.av(function(){try{null.$method$}catch(z){return z.message}}())},"er","$get$er",function(){return H.av(H.en(void 0))},"eq","$get$eq",function(){return H.av(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cX","$get$cX",function(){return P.j5()},"bF","$get$bF",function(){return[]},"eV","$get$eV",function(){return P.hR("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dq","$get$dq",function(){return{}},"eC","$get$eC",function(){return Z.ai(0)},"eA","$get$eA",function(){return Z.ai(511)},"ap","$get$ap",function(){return Z.ai(1)},"aF","$get$aF",function(){return Z.ai(2)},"aE","$get$aE",function(){return Z.ai(4)},"aG","$get$aG",function(){return Z.ai(8)},"aH","$get$aH",function(){return Z.ai(16)},"bx","$get$bx",function(){return Z.ai(32)},"by","$get$by",function(){return Z.ai(64)},"eB","$get$eB",function(){return Z.ai(96)},"b0","$get$b0",function(){return Z.ai(128)},"aD","$get$aD",function(){return Z.ai(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.am]},{func:1,ret:P.H,args:[F.af]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[W.a0]},{func:1,ret:-1,args:[P.A,[P.c,E.aA]]},{func:1,ret:P.H,args:[D.u]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:P.H,args:[W.a0]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.m,args:[P.A]},{func:1,ret:P.H,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:-1,args:[P.A,[P.c,D.U]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.A,[P.c,U.aa]]},{func:1,ret:-1,args:[P.A,[P.c,M.au]]},{func:1,ret:-1,args:[P.A,[P.c,V.aB]]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.a3,args:[W.J]},{func:1,ret:W.Z,args:[W.J]},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,ret:P.H,args:[P.V]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:-1,args:[P.a],opt:[P.ao]},{func:1,ret:-1,args:[W.bz]},{func:1,ret:P.a3,args:[P.v,P.v]},{func:1,ret:P.a3,args:[[P.c,D.U]]},{func:1,ret:P.H,args:[,],opt:[,]},{func:1,ret:P.H,args:[F.aC,P.v,P.v]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.H,args:[P.aY]},{func:1,ret:-1,args:[P.m,P.m]}]
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
if(x==y)H.l3(d||a)
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
Isolate.d9=a.d9
Isolate.d4=a.d4
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
if(typeof dartMainRunner==="function")dartMainRunner(M.f9,[])
else M.f9([])})})()
//# sourceMappingURL=test.dart.js.map
