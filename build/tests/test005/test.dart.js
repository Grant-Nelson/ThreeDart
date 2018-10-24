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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.di"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.di"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.di(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dj=function(){}
var dart=[["","",,H,{"^":"",me:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cu:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dm==null){H.ly()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.eY("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cM()]
if(v!=null)return v
v=H.lD(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cM(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
n:{"^":"a;",
t:function(a,b){return a===b},
gS:function(a){return H.bu(a)},
i:["dV",function(a){return"Instance of '"+H.b4(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
hA:{"^":"n;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isQ:1},
e_:{"^":"n;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isL:1},
cN:{"^":"n;",
gS:function(a){return 0},
i:["dX",function(a){return String(a)}]},
id:{"^":"cN;"},
cl:{"^":"cN;"},
bR:{"^":"cN;",
i:function(a){var z=a[$.$get$dL()]
if(z==null)return this.dX(a)
return"JavaScript function for "+H.i(J.a1(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbQ:1},
b1:{"^":"n;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.p(P.ag("add"))
a.push(b)},
E:function(a,b){var z
if(!!a.fixed$length)H.p(P.ag("remove"))
for(z=0;z<a.length;++z)if(J.T(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aM(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.O(z,y,H.i(a[y]))
return z.join(b)},
hb:function(a){return this.l(a,"")},
h4:function(a,b,c){var z,y,x
H.k(b,{func:1,ret:P.Q,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.d(P.aM(a))}throw H.d(H.cK())},
h3:function(a,b){return this.h4(a,b,null)},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bt:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.aa(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.aa(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.z(a,0)])
return H.b(a.slice(b,c),[H.z(a,0)])},
gbl:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cK())},
cW:function(a,b){var z,y
H.k(b,{func:1,ret:P.Q,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aM(a))}return!1},
L:function(a,b){var z
for(z=0;z<a.length;++z)if(J.T(a[z],b))return!0
return!1},
i:function(a){return P.cJ(a,"[","]")},
gP:function(a){return new J.aw(a,a.length,0,[H.z(a,0)])},
gS:function(a){return H.bu(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.ag("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.c2(b,"newLength",null))
if(b<0)throw H.d(P.aa(b,0,null,"newLength",null))
a.length=b},
O:function(a,b,c){H.a0(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.p(P.ag("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aS(a,b))
if(b>=a.length||b<0)throw H.d(H.aS(a,b))
a[b]=c},
$ish:1,
$isc:1,
q:{
hz:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.c2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.aa(a,0,4294967295,"length",null))
return J.dX(new Array(a),b)},
dX:function(a,b){return J.bp(H.b(a,[b]))},
bp:function(a){H.c0(a)
a.fixed$length=Array
return a}}},
md:{"^":"b1;$ti"},
aw:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.w(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cd:{"^":"n;",
gha:function(a){return a===0?1/a<0:a<0},
hO:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.ag(""+a+".toInt()"))},
c5:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.ag(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.ag(""+a+".round()"))},
dG:function(a,b){var z
if(b>20)throw H.d(P.aa(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gha(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
dO:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cQ(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cQ(a,b)},
cQ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.ag("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
b2:function(a,b){var z
if(a>0)z=this.fi(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fi:function(a,b){return b>31?0:a>>>b},
al:function(a,b){if(typeof b!=="number")throw H.d(H.aR(b))
return a<b},
$isx:1,
$isY:1},
dZ:{"^":"cd;",$isE:1},
dY:{"^":"cd;"},
ce:{"^":"n;",
bX:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aS(a,b))
if(b<0)throw H.d(H.aS(a,b))
if(b>=a.length)H.p(H.aS(a,b))
return a.charCodeAt(b)},
aq:function(a,b){if(b>=a.length)throw H.d(H.aS(a,b))
return a.charCodeAt(b)},
C:function(a,b){H.H(b)
if(typeof b!=="string")throw H.d(P.c2(b,null,null))
return a+b},
dT:function(a,b,c){var z
if(c>a.length)throw H.d(P.aa(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bs:function(a,b){return this.dT(a,b,0)},
aG:function(a,b,c){H.a0(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.ci(b,null,null))
if(b>c)throw H.d(P.ci(b,null,null))
if(c>a.length)throw H.d(P.ci(c,null,null))
return a.substring(b,c)},
aW:function(a,b){return this.aG(a,b,null)},
hR:function(a){return a.toLowerCase()},
p:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ho:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.p(c,z)+a},
a0:function(a,b){return this.ho(a,b," ")},
fS:function(a,b,c){if(c>a.length)throw H.d(P.aa(c,0,a.length,null,null))
return H.fH(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isee:1,
$isf:1}}],["","",,H,{"^":"",
cK:function(){return new P.cY("No element")},
hy:function(){return new P.cY("Too many elements")},
r:{"^":"jn;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.h.bX(this.a,b)},
$aseZ:function(){return[P.E]},
$asu:function(){return[P.E]},
$ash:function(){return[P.E]},
$asc:function(){return[P.E]}},
dS:{"^":"h;"},
cg:{"^":"dS;$ti",
gP:function(a){return new H.cQ(this,this.gm(this),0,[H.aj(this,"cg",0)])},
cj:function(a,b){return this.dW(0,H.k(b,{func:1,ret:P.Q,args:[H.aj(this,"cg",0)]}))}},
cQ:{"^":"a;a,b,c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.c_(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.aM(z))
w=this.c
if(typeof x!=="number")return H.B(x)
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
hP:{"^":"h;a,b,$ti",
gP:function(a){return new H.hQ(J.aX(this.a),this.b,this.$ti)},
gm:function(a){return J.aY(this.a)},
A:function(a,b){return this.b.$1(J.cy(this.a,b))},
$ash:function(a,b){return[b]}},
hQ:{"^":"cL;0a,b,c,$ti",
w:function(){var z=this.b
if(z.w()){this.a=this.c.$1(z.gI(z))
return!0}this.a=null
return!1},
gI:function(a){return this.a},
$ascL:function(a,b){return[b]}},
hR:{"^":"cg;a,b,$ti",
gm:function(a){return J.aY(this.a)},
A:function(a,b){return this.b.$1(J.cy(this.a,b))},
$ascg:function(a,b){return[b]},
$ash:function(a,b){return[b]}},
d9:{"^":"h;a,b,$ti",
gP:function(a){return new H.jE(J.aX(this.a),this.b,this.$ti)}},
jE:{"^":"cL;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gI(z)))return!0
return!1},
gI:function(a){var z=this.a
return z.gI(z)}},
ca:{"^":"a;$ti"},
eZ:{"^":"a;$ti"},
jn:{"^":"cf+eZ;"}}],["","",,H,{"^":"",
lr:function(a){return init.types[H.a0(a)]},
lB:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isD},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a1(a)
if(typeof z!=="string")throw H.d(H.aR(a))
return z},
bu:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b4:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.E||!!J.J(a).$iscl){v=C.t(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.aq(w,0)===36)w=C.h.aW(w,1)
r=H.dn(H.c0(H.aT(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
ei:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ip:function(a){var z,y,x,w
z=H.b([],[P.E])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aR(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b2(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aR(w))}return H.ei(z)},
ej:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aR(x))
if(x<0)throw H.d(H.aR(x))
if(x>65535)return H.ip(a)}return H.ei(a)},
cW:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b2(z,10))>>>0,56320|z&1023)}throw H.d(P.aa(a,0,1114111,null,null))},
a7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
io:function(a){return a.b?H.a7(a).getUTCFullYear()+0:H.a7(a).getFullYear()+0},
il:function(a){return a.b?H.a7(a).getUTCMonth()+1:H.a7(a).getMonth()+1},
ih:function(a){return a.b?H.a7(a).getUTCDate()+0:H.a7(a).getDate()+0},
ii:function(a){return a.b?H.a7(a).getUTCHours()+0:H.a7(a).getHours()+0},
ik:function(a){return a.b?H.a7(a).getUTCMinutes()+0:H.a7(a).getMinutes()+0},
im:function(a){return a.b?H.a7(a).getUTCSeconds()+0:H.a7(a).getSeconds()+0},
ij:function(a){return a.b?H.a7(a).getUTCMilliseconds()+0:H.a7(a).getMilliseconds()+0},
B:function(a){throw H.d(H.aR(a))},
e:function(a,b){if(a==null)J.aY(a)
throw H.d(H.aS(a,b))},
aS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,"index",null)
z=H.a0(J.aY(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.N(b,a,"index",null,z)
return P.ci(b,"index",null)},
ln:function(a,b,c){if(a>c)return new P.ch(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ch(a,c,!0,b,"end","Invalid value")
return new P.ap(!0,b,"end",null)},
aR:function(a){return new P.ap(!0,a,null,null)},
li:function(a){if(typeof a!=="number")throw H.d(H.aR(a))
return a},
d:function(a){var z
if(a==null)a=new P.ed()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fI})
z.name=""}else z.toString=H.fI
return z},
fI:function(){return J.a1(this.dartException)},
p:function(a){throw H.d(a)},
w:function(a){throw H.d(P.aM(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lP(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b2(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cO(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ec(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eH()
u=$.$get$eI()
t=$.$get$eJ()
s=$.$get$eK()
r=$.$get$eO()
q=$.$get$eP()
p=$.$get$eM()
$.$get$eL()
o=$.$get$eR()
n=$.$get$eQ()
m=v.a_(y)
if(m!=null)return z.$1(H.cO(H.H(y),m))
else{m=u.a_(y)
if(m!=null){m.method="call"
return z.$1(H.cO(H.H(y),m))}else{m=t.a_(y)
if(m==null){m=s.a_(y)
if(m==null){m=r.a_(y)
if(m==null){m=q.a_(y)
if(m==null){m=p.a_(y)
if(m==null){m=s.a_(y)
if(m==null){m=o.a_(y)
if(m==null){m=n.a_(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ec(H.H(y),m))}}return z.$1(new H.jm(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.es()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ap(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.es()
return a},
bf:function(a){var z
if(a==null)return new H.fh(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fh(a)},
lp:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.O(0,a[y],a[x])}return b},
lA:function(a,b,c,d,e,f){H.l(a,"$isbQ")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.o("Unsupported number of arguments for wrapped closure"))},
bc:function(a,b){var z
H.a0(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lA)
a.$identity=z
return z},
h2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isc){z.$reflectionInfo=d
x=H.it(z).r}else x=d
w=e?Object.create(new H.iQ().constructor.prototype):Object.create(new H.cA(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aq
if(typeof u!=="number")return u.C()
$.aq=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dG(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.lr,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dA:H.cB
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dG(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
h_:function(a,b,c,d){var z=H.cB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dG:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h1(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h_(y,!w,z,b)
if(y===0){w=$.aq
if(typeof w!=="number")return w.C()
$.aq=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bi
if(v==null){v=H.c4("self")
$.bi=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aq
if(typeof w!=="number")return w.C()
$.aq=w+1
t+=w
w="return function("+t+"){return this."
v=$.bi
if(v==null){v=H.c4("self")
$.bi=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
h0:function(a,b,c,d){var z,y
z=H.cB
y=H.dA
switch(b?-1:a){case 0:throw H.d(H.iC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h1:function(a,b){var z,y,x,w,v,u,t,s
z=$.bi
if(z==null){z=H.c4("self")
$.bi=z}y=$.dz
if(y==null){y=H.c4("receiver")
$.dz=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h0(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.aq
if(typeof y!=="number")return y.C()
$.aq=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.aq
if(typeof y!=="number")return y.C()
$.aq=y+1
return new Function(z+y+"}")()},
di:function(a,b,c,d,e,f,g){var z,y
z=J.bp(H.c0(b))
H.a0(c)
y=!!J.J(d).$isc?J.bp(d):d
return H.h2(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.au(a,"String"))},
lH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.au(a,"num"))},
dg:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.au(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.au(a,"int"))},
fF:function(a,b){throw H.d(H.au(a,H.H(b).substring(3)))},
lJ:function(a,b){var z=J.c_(b)
throw H.d(H.fY(a,z.aG(b,3,z.gm(b))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fF(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.lJ(a,b)},
c0:function(a){if(a==null)return a
if(!!J.J(a).$isc)return a
throw H.d(H.au(a,"List"))},
lC:function(a,b){if(a==null)return a
if(!!J.J(a).$isc)return a
if(J.J(a)[b])return a
H.fF(a,b)},
fy:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a0(z)]
else return a.$S()}return},
bZ:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fy(J.J(a))
if(z==null)return!1
y=H.fB(z,null,b,null)
return y},
k:function(a,b){var z,y
if(a==null)return a
if($.dd)return a
$.dd=!0
try{if(H.bZ(a,b))return a
z=H.c1(b)
y=H.au(a,z)
throw H.d(y)}finally{$.dd=!1}},
dk:function(a,b){if(a!=null&&!H.dh(a,b))H.p(H.au(a,H.c1(b)))
return a},
ft:function(a){var z
if(a instanceof H.q){z=H.fy(J.J(a))
if(z!=null)return H.c1(z)
return"Closure"}return H.b4(a)},
lO:function(a){throw H.d(new P.h6(H.H(a)))},
fz:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aT:function(a){if(a==null)return
return a.$ti},
n9:function(a,b,c){return H.bg(a["$as"+H.i(c)],H.aT(b))},
bN:function(a,b,c,d){var z
H.H(c)
H.a0(d)
z=H.bg(a["$as"+H.i(c)],H.aT(b))
return z==null?null:z[d]},
aj:function(a,b,c){var z
H.H(b)
H.a0(c)
z=H.bg(a["$as"+H.i(b)],H.aT(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.a0(b)
z=H.aT(a)
return z==null?null:z[b]},
c1:function(a){var z=H.aV(a,null)
return z},
aV:function(a,b){var z,y
H.v(b,"$isc",[P.f],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dn(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.i(b[y])}if('func' in a)return H.l8(a,b)
if('futureOr' in a)return"FutureOr<"+H.aV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.v(b,"$isc",z,"$asc")
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
for(z=H.lo(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.aV(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dn:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isc",[P.f],"$asc")
if(a==null)return""
z=new P.by("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aV(u,c)}v="<"+z.i(0)+">"
return v},
bg:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bM:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aT(a)
y=J.J(a)
if(y[b]==null)return!1
return H.fw(H.bg(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.H(b)
H.c0(c)
H.H(d)
if(a==null)return a
z=H.bM(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dn(c,0,null)
throw H.d(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fw:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
n7:function(a,b,c){return a.apply(b,H.bg(J.J(b)["$as"+H.i(c)],H.aT(b)))},
fC:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="L"||a===-1||a===-2||H.fC(z)}return!1},
dh:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="L"||b===-1||b===-2||H.fC(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dh(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bZ(a,b)}y=J.J(a).constructor
x=H.aT(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.dh(a,b))throw H.d(H.au(a,H.c1(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="L")return!0
if('func' in c)return H.fB(a,b,c,d)
if('func' in a)return c.builtin$cls==="bQ"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bn" in y.prototype))return!1
w=y.prototype["$as"+"bn"]
v=H.bg(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c1(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fw(H.bg(r,z),b,u,d)},
fB:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.lG(m,b,l,d)},
lG:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
n8:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
lD:function(a){var z,y,x,w,v,u
z=H.H($.fA.$1(a))
y=$.cs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.fv.$2(a,z))
if(z!=null){y=$.cs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cw(x)
$.cs[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cv[z]=x
return x}if(v==="-"){u=H.cw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fE(a,x)
if(v==="*")throw H.d(P.eY(z))
if(init.leafTags[z]===true){u=H.cw(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fE(a,x)},
fE:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dp(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cw:function(a){return J.dp(a,!1,null,!!a.$isD)},
lF:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cw(z)
else return J.dp(z,c,null,null)},
ly:function(){if(!0===$.dm)return
$.dm=!0
H.lz()},
lz:function(){var z,y,x,w,v,u,t,s
$.cs=Object.create(null)
$.cv=Object.create(null)
H.lu()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fG.$1(v)
if(u!=null){t=H.lF(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lu:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.bb(C.H,H.bb(C.M,H.bb(C.r,H.bb(C.r,H.bb(C.L,H.bb(C.I,H.bb(C.J(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fA=new H.lv(v)
$.fv=new H.lw(u)
$.fG=new H.lx(t)},
bb:function(a,b){return a(b)||b},
fH:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ds:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
is:{"^":"a;a,b,c,d,e,f,r,0x",q:{
it:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bp(z)
y=z[0]
x=z[1]
return new H.is(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j9:{"^":"a;a,b,c,d,e,f",
a_:function(a){var z,y,x
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
if(z==null)z=H.b([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ck:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eN:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ia:{"^":"Z;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
ec:function(a,b){return new H.ia(a,b==null?null:b.method)}}},
hD:{"^":"Z;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
q:{
cO:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hD(a,y,z?null:b.receiver)}}},
jm:{"^":"Z;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lP:{"^":"q:13;a",
$1:function(a){if(!!J.J(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fh:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isao:1},
q:{"^":"a;",
i:function(a){return"Closure '"+H.b4(this).trim()+"'"},
gdK:function(){return this},
$isbQ:1,
gdK:function(){return this}},
ey:{"^":"q;"},
iQ:{"^":"ey;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cA:{"^":"ey;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bu(this.a)
else y=typeof z!=="object"?J.aW(z):H.bu(z)
return(y^H.bu(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.b4(z)+"'")},
q:{
cB:function(a){return a.a},
dA:function(a){return a.c},
c4:function(a){var z,y,x,w,v
z=new H.cA("self","target","receiver","name")
y=J.bp(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ja:{"^":"Z;a",
i:function(a){return this.a},
q:{
au:function(a,b){return new H.ja("TypeError: "+H.i(P.c9(a))+": type '"+H.ft(a)+"' is not a subtype of type '"+b+"'")}}},
fX:{"^":"Z;a",
i:function(a){return this.a},
q:{
fY:function(a,b){return new H.fX("CastError: "+H.i(P.c9(a))+": type '"+H.ft(a)+"' is not a subtype of type '"+b+"'")}}},
iB:{"^":"Z;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
q:{
iC:function(a){return new H.iB(a)}}},
b2:{"^":"e5;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gX:function(a){return new H.e2(this,[H.z(this,0)])},
d_:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cF(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cF(y,b)}else return this.h8(b)},
h8:function(a){var z=this.d
if(z==null)return!1
return this.c6(this.bB(z,J.aW(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b_(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b_(w,b)
x=y==null?null:y.b
return x}else return this.h9(b)},
h9:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bB(z,J.aW(a)&0x3ffffff)
x=this.c6(y,a)
if(x<0)return
return y[x].b},
O:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bE()
this.b=z}this.cw(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bE()
this.c=y}this.cw(y,b,c)}else{x=this.d
if(x==null){x=this.bE()
this.d=x}w=J.aW(b)&0x3ffffff
v=this.bB(x,w)
if(v==null)this.bL(x,w,[this.bF(b,c)])
else{u=this.c6(v,b)
if(u>=0)v[u].b=c
else v.push(this.bF(b,c))}}},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aM(this))
z=z.c}},
cw:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.b_(a,b)
if(z==null)this.bL(a,b,this.bF(b,c))
else z.b=c},
ey:function(){this.r=this.r+1&67108863},
bF:function(a,b){var z,y
z=new H.hI(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ey()
return z},
c6:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
i:function(a){return P.e6(this)},
b_:function(a,b){return a[b]},
bB:function(a,b){return a[b]},
bL:function(a,b,c){a[b]=c},
er:function(a,b){delete a[b]},
cF:function(a,b){return this.b_(a,b)!=null},
bE:function(){var z=Object.create(null)
this.bL(z,"<non-identifier-key>",z)
this.er(z,"<non-identifier-key>")
return z},
$ise1:1},
hI:{"^":"a;a,b,0c,0d"},
e2:{"^":"dS;a,$ti",
gm:function(a){return this.a.a},
gP:function(a){var z,y
z=this.a
y=new H.hJ(z,z.r,this.$ti)
y.c=z.e
return y}},
hJ:{"^":"a;a,b,0c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aM(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lv:{"^":"q:13;a",
$1:function(a){return this.a(a)}},
lw:{"^":"q:28;a",
$2:function(a,b){return this.a(a,b)}},
lx:{"^":"q:31;a",
$1:function(a){return this.a(H.H(a))}},
hB:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isee:1,
q:{
hC:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(new P.hq("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lo:function(a){return J.dX(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bI:function(a){return a},
aQ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aS(b,a))},
l7:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.ln(a,b,c))
return b},
i4:{"^":"n;",$ismQ:1,"%":"DataView;ArrayBufferView;cU|fb|fc|i3|fd|fe|aP"},
cU:{"^":"i4;",
gm:function(a){return a.length},
$isD:1,
$asD:I.dj},
i3:{"^":"fc;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
$asca:function(){return[P.x]},
$asu:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]},
$isc:1,
$asc:function(){return[P.x]},
"%":"Float32Array|Float64Array"},
aP:{"^":"fe;",
$asca:function(){return[P.E]},
$asu:function(){return[P.E]},
$ish:1,
$ash:function(){return[P.E]},
$isc:1,
$asc:function(){return[P.E]}},
mm:{"^":"aP;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mn:{"^":"aP;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mo:{"^":"aP;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mp:{"^":"aP;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mq:{"^":"aP;",
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mr:{"^":"aP;",
gm:function(a){return a.length},
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
i5:{"^":"aP;",
gm:function(a){return a.length},
j:function(a,b){H.aQ(b,a,a.length)
return a[b]},
bt:function(a,b,c){return new Uint8Array(a.subarray(b,H.l7(b,c,a.length)))},
"%":";Uint8Array"},
fb:{"^":"cU+u;"},
fc:{"^":"fb+ca;"},
fd:{"^":"cU+u;"},
fe:{"^":"fd+ca;"}}],["","",,P,{"^":"",
jG:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lf()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bc(new P.jI(z),1)).observe(y,{childList:true})
return new P.jH(z,y,x)}else if(self.setImmediate!=null)return P.lg()
return P.lh()},
mV:[function(a){self.scheduleImmediate(H.bc(new P.jJ(H.k(a,{func:1,ret:-1})),0))},"$1","lf",4,0,9],
mW:[function(a){self.setImmediate(H.bc(new P.jK(H.k(a,{func:1,ret:-1})),0))},"$1","lg",4,0,9],
mX:[function(a){P.d3(C.l,H.k(a,{func:1,ret:-1}))},"$1","lh",4,0,9],
d3:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.f.W(a.a,1000)
return P.kM(z<0?0:z,b)},
eD:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.b5]})
z=C.f.W(a.a,1000)
return P.kN(z<0?0:z,b)},
lb:function(a,b){if(H.bZ(a,{func:1,args:[P.a,P.ao]}))return b.hy(a,null,P.a,P.ao)
if(H.bZ(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.c2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
la:function(){var z,y
for(;z=$.ba,z!=null;){$.bK=null
y=z.b
$.ba=y
if(y==null)$.bJ=null
z.a.$0()}},
n6:[function(){$.de=!0
try{P.la()}finally{$.bK=null
$.de=!1
if($.ba!=null)$.$get$da().$1(P.fx())}},"$0","fx",0,0,2],
fs:function(a){var z=new P.f3(H.k(a,{func:1,ret:-1}))
if($.ba==null){$.bJ=z
$.ba=z
if(!$.de)$.$get$da().$1(P.fx())}else{$.bJ.b=z
$.bJ=z}},
le:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.ba
if(z==null){P.fs(a)
$.bK=$.bJ
return}y=new P.f3(a)
x=$.bK
if(x==null){y.b=z
$.bK=y
$.ba=y}else{y.b=x.b
x.b=y
$.bK=y
if(y.b==null)$.bJ=y}},
lK:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.P
if(C.j===y){P.cr(null,null,C.j,a)
return}y.toString
P.cr(null,null,y,H.k(y.bR(a),z))},
eC:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.P
if(y===C.j){y.toString
return P.d3(a,b)}return P.d3(a,H.k(y.bR(b),z))},
j5:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b5]}
H.k(b,z)
y=$.P
if(y===C.j){y.toString
return P.eD(a,b)}x=y.cX(b,P.b5)
$.P.toString
return P.eD(a,H.k(x,z))},
cq:function(a,b,c,d,e){var z={}
z.a=d
P.le(new P.lc(z,e))},
fq:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
fr:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
ld:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cr:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bR(d):c.fO(d,-1)
P.fs(d)},
jI:{"^":"q:17;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jH:{"^":"q:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jJ:{"^":"q:1;a",
$0:function(){this.a.$0()}},
jK:{"^":"q:1;a",
$0:function(){this.a.$0()}},
fl:{"^":"a;a,0b,c",
ed:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bc(new P.kP(this,b),0),a)
else throw H.d(P.ag("`setTimeout()` not found."))},
ee:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bc(new P.kO(this,a,Date.now(),b),0),a)
else throw H.d(P.ag("Periodic timer."))},
$isb5:1,
q:{
kM:function(a,b){var z=new P.fl(!0,0)
z.ed(a,b)
return z},
kN:function(a,b){var z=new P.fl(!1,0)
z.ee(a,b)
return z}}},
kP:{"^":"q:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kO:{"^":"q:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.e_(w,x)}z.c=y
this.d.$1(z)}},
b9:{"^":"a;0a,b,c,d,e,$ti",
hg:function(a){if(this.c!==6)return!0
return this.b.b.cg(H.k(this.d,{func:1,ret:P.Q,args:[P.a]}),a.a,P.Q,P.a)},
h7:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bZ(z,{func:1,args:[P.a,P.ao]}))return H.dk(w.hG(z,a.a,a.b,null,y,P.ao),x)
else return H.dk(w.cg(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aJ:{"^":"a;cP:a<,b,0f5:c<,$ti",
dF:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.j){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lb(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aJ(0,$.P,[c])
w=b==null?1:3
this.cz(new P.b9(x,w,a,b,[z,c]))
return x},
hN:function(a,b){return this.dF(a,null,b)},
cz:function(a){var z,y
z=this.a
if(z<=1){a.a=H.l(this.c,"$isb9")
this.c=a}else{if(z===2){y=H.l(this.c,"$isaJ")
z=y.a
if(z<4){y.cz(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cr(null,null,z,H.k(new P.jZ(this,a),{func:1,ret:-1}))}},
cL:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.l(this.c,"$isb9")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.l(this.c,"$isaJ")
y=u.a
if(y<4){u.cL(a)
return}this.a=y
this.c=u.c}z.a=this.b1(a)
y=this.b
y.toString
P.cr(null,null,y,H.k(new P.k3(z,this),{func:1,ret:-1}))}},
bH:function(){var z=H.l(this.c,"$isb9")
this.c=null
return this.b1(z)},
b1:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cC:function(a){var z,y,x,w
z=H.z(this,0)
H.dk(a,{futureOr:1,type:z})
y=this.$ti
x=H.bM(a,"$isbn",y,"$asbn")
if(x){z=H.bM(a,"$isaJ",y,null)
if(z)P.f6(a,this)
else P.k_(a,this)}else{w=this.bH()
H.C(a,z)
this.a=4
this.c=a
P.bG(this,w)}},
bx:[function(a,b){var z
H.l(b,"$isao")
z=this.bH()
this.a=8
this.c=new P.ac(a,b)
P.bG(this,z)},function(a){return this.bx(a,null)},"hX","$2","$1","gem",4,2,39],
$isbn:1,
q:{
k_:function(a,b){var z,y,x
b.a=1
try{a.dF(new P.k0(b),new P.k1(b),null)}catch(x){z=H.ab(x)
y=H.bf(x)
P.lK(new P.k2(b,z,y))}},
f6:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.l(a.c,"$isaJ")
if(z>=4){y=b.bH()
b.a=a.a
b.c=a.c
P.bG(b,y)}else{y=H.l(b.c,"$isb9")
b.a=2
b.c=a
a.cL(y)}},
bG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.l(y.c,"$isac")
y=y.b
u=v.a
t=v.b
y.toString
P.cq(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bG(z.a,b)}y=z.a
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
P.cq(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.k6(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.k5(x,b,r).$0()}else if((y&2)!==0)new P.k4(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.J(y).$isbn){if(y.a>=4){n=H.l(t.c,"$isb9")
t.c=null
b=t.b1(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f6(y,t)
return}}m=b.b
n=H.l(m.c,"$isb9")
m.c=null
b=m.b1(n)
y=x.a
u=x.b
if(!y){H.C(u,H.z(m,0))
m.a=4
m.c=u}else{H.l(u,"$isac")
m.a=8
m.c=u}z.a=m
y=m}}}},
jZ:{"^":"q:1;a,b",
$0:function(){P.bG(this.a,this.b)}},
k3:{"^":"q:1;a,b",
$0:function(){P.bG(this.b,this.a.a)}},
k0:{"^":"q:17;a",
$1:function(a){var z=this.a
z.a=0
z.cC(a)}},
k1:{"^":"q:32;a",
$2:function(a,b){this.a.bx(a,H.l(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
k2:{"^":"q:1;a,b,c",
$0:function(){this.a.bx(this.b,this.c)}},
k6:{"^":"q:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dD(H.k(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bf(v)
if(this.d){w=H.l(this.a.a.c,"$isac").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.l(this.a.a.c,"$isac")
else u.b=new P.ac(y,x)
u.a=!0
return}if(!!J.J(z).$isbn){if(z instanceof P.aJ&&z.gcP()>=4){if(z.gcP()===8){w=this.b
w.b=H.l(z.gf5(),"$isac")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hN(new P.k7(t),null)
w.a=!1}}},
k7:{"^":"q:34;a",
$1:function(a){return this.a}},
k5:{"^":"q:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cg(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bf(t)
x=this.a
x.b=new P.ac(z,y)
x.a=!0}}},
k4:{"^":"q:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.l(this.a.a.c,"$isac")
w=this.c
if(w.hg(z)&&w.e!=null){v=this.b
v.b=w.h7(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bf(u)
w=H.l(this.a.a.c,"$isac")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ac(y,x)
s.a=!0}}},
f3:{"^":"a;a,0b"},
cZ:{"^":"a;$ti",
gm:function(a){var z,y
z={}
y=new P.aJ(0,$.P,[P.E])
z.a=0
this.he(new P.iT(z,this),!0,new P.iU(z,y),y.gem())
return y}},
iT:{"^":"q;a,b",
$1:function(a){H.C(a,H.aj(this.b,"cZ",0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.aj(this.b,"cZ",0)]}}},
iU:{"^":"q:1;a,b",
$0:function(){this.b.cC(this.a.a)}},
ev:{"^":"a;$ti"},
iS:{"^":"a;"},
b5:{"^":"a;"},
ac:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isZ:1},
kW:{"^":"a;",$ismU:1},
lc:{"^":"q:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ed()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
kr:{"^":"kW;",
hH:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.j===$.P){a.$0()
return}P.fq(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bf(x)
P.cq(null,null,this,z,H.l(y,"$isao"))}},
hI:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.P){a.$1(b)
return}P.fr(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bf(x)
P.cq(null,null,this,z,H.l(y,"$isao"))}},
fO:function(a,b){return new P.kt(this,H.k(a,{func:1,ret:b}),b)},
bR:function(a){return new P.ks(this,H.k(a,{func:1,ret:-1}))},
cX:function(a,b){return new P.ku(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
dD:function(a,b){H.k(a,{func:1,ret:b})
if($.P===C.j)return a.$0()
return P.fq(null,null,this,a,b)},
cg:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.P===C.j)return a.$1(b)
return P.fr(null,null,this,a,b,c,d)},
hG:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.P===C.j)return a.$2(b,c)
return P.ld(null,null,this,a,b,c,d,e,f)},
hy:function(a,b,c,d){return H.k(a,{func:1,ret:b,args:[c,d]})}},
kt:{"^":"q;a,b,c",
$0:function(){return this.a.dD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ks:{"^":"q:2;a,b",
$0:function(){return this.a.hH(this.b)}},
ku:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.hI(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hK:function(a,b,c){H.c0(a)
return H.v(H.lp(a,new H.b2(0,0,[b,c])),"$ise1",[b,c],"$ase1")},
e3:function(a,b){return new H.b2(0,0,[a,b])},
bT:function(a,b,c,d){return new P.ke(0,0,[d])},
hx:function(a,b,c){var z,y
if(P.df(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bL()
C.a.h(y,a)
try{P.l9(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.ew(b,H.lC(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cJ:function(a,b,c){var z,y,x
if(P.df(a))return b+"..."+c
z=new P.by(b)
y=$.$get$bL()
C.a.h(y,a)
try{x=z
x.a=P.ew(x.gar(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gar()+c
y=z.gar()
return y.charCodeAt(0)==0?y:y},
df:function(a){var z,y
for(z=0;y=$.$get$bL(),z<y.length;++z)if(a===y[z])return!0
return!1},
l9:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gP(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.i(z.gI(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gI(z);++x
if(!z.w()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gI(z);++x
for(;z.w();t=s,s=r){r=z.gI(z);++x
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
e4:function(a,b){var z,y
z=P.bT(null,null,null,b)
for(y=J.aX(a);y.w();)z.h(0,H.C(y.gI(y),b))
return z},
e6:function(a){var z,y,x
z={}
if(P.df(a))return"{...}"
y=new P.by("")
try{C.a.h($.$get$bL(),a)
x=y
x.a=x.gar()+"{"
z.a=!0
J.fM(a,new P.hO(z,y))
z=y
z.a=z.gar()+"}"}finally{z=$.$get$bL()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gar()
return z.charCodeAt(0)==0?z:z},
ke:{"^":"k8;a,0b,0c,0d,0e,0f,r,$ti",
gP:function(a){var z=new P.fa(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
L:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.l(z[b],"$isco")!=null}else{y=this.en(b)
return y}},
en:function(a){var z=this.d
if(z==null)return!1
return this.bA(this.cJ(z,a),a)>=0},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dc()
this.b=z}return this.cA(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dc()
this.c=y}return this.cA(y,b)}else return this.ef(0,b)},
ef:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.dc()
this.d=z}y=this.cD(b)
x=z[y]
if(x==null)z[y]=[this.bw(b)]
else{if(this.bA(x,b)>=0)return!1
x.push(this.bw(b))}return!0},
E:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cM(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cM(this.c,b)
else return this.eZ(0,b)},
eZ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.cJ(z,b)
x=this.bA(y,b)
if(x<0)return!1
this.cR(y.splice(x,1)[0])
return!0},
cA:function(a,b){H.C(b,H.z(this,0))
if(H.l(a[b],"$isco")!=null)return!1
a[b]=this.bw(b)
return!0},
cM:function(a,b){var z
if(a==null)return!1
z=H.l(a[b],"$isco")
if(z==null)return!1
this.cR(z)
delete a[b]
return!0},
cB:function(){this.r=this.r+1&67108863},
bw:function(a){var z,y
z=new P.co(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cB()
return z},
cR:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cB()},
cD:function(a){return J.aW(a)&0x3ffffff},
cJ:function(a,b){return a[this.cD(b)]},
bA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
q:{
dc:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
co:{"^":"a;a,0b,0c"},
fa:{"^":"a;a,b,0c,0d,$ti",
gI:function(a){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aM(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}}},
k8:{"^":"iD;"},
cf:{"^":"kf;",$ish:1,$isc:1},
u:{"^":"a;$ti",
gP:function(a){return new H.cQ(a,this.gm(a),0,[H.bN(this,a,"u",0)])},
A:function(a,b){return this.j(a,b)},
hQ:function(a,b){var z,y,x
z=H.b([],[H.bN(this,a,"u",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.B(x)
if(!(y<x))break
C.a.O(z,y,this.j(a,y));++y}return z},
hP:function(a){return this.hQ(a,!0)},
i:function(a){return P.cJ(a,"[","]")}},
e5:{"^":"a6;"},
hO:{"^":"q:19;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
a6:{"^":"a;$ti",
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bN(this,a,"a6",0),H.bN(this,a,"a6",1)]})
for(z=J.aX(this.gX(a));z.w();){y=z.gI(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.aY(this.gX(a))},
i:function(a){return P.e6(a)},
$isa_:1},
iF:{"^":"a;$ti",
a9:function(a,b){var z
for(z=J.aX(H.v(b,"$ish",this.$ti,"$ash"));z.w();)this.h(0,z.gI(z))},
i:function(a){return P.cJ(this,"{","}")},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.dw("index"))
if(b<0)H.p(P.aa(b,0,null,"index",null))
for(z=new P.fa(this,this.r,this.$ti),z.c=this.e,y=0;z.w();){x=z.d
if(b===y)return x;++y}throw H.d(P.N(b,this,"index",null,y))},
$ish:1},
iD:{"^":"iF;"},
kf:{"^":"a+u;"}}],["","",,P,{"^":"",cE:{"^":"a;$ti"},c7:{"^":"iS;$ti"},hh:{"^":"cE;",
$ascE:function(){return[P.f,[P.c,P.E]]}},hv:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hu:{"^":"c7;a",
eo:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.e(a,w)
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
if(w>b)v.a+=C.h.aG(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fQ(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asc7:function(){return[P.f,P.f]}},jq:{"^":"hh;a"},jr:{"^":"c7;",
fU:function(a,b,c){var z,y,x,w
z=a.length
P.ek(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kU(0,0,x)
if(w.eu(a,b,z)!==z)w.cS(C.h.bX(a,z-1),0)
return C.R.bt(x,0,w.b)},
fT:function(a){return this.fU(a,0,null)},
$asc7:function(){return[P.f,[P.c,P.E]]}},kU:{"^":"a;a,b,c",
cS:function(a,b){var z,y,x,w,v
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
eu:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.bX(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.aq(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cS(w,C.h.aq(a,u)))x=u}else if(w<=2047){v=this.b
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
hj:function(a){var z=J.J(a)
if(!!z.$isq)return z.i(a)
return"Instance of '"+H.b4(a)+"'"},
hL:function(a,b,c,d){var z,y
H.C(b,d)
z=J.hz(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.O(z,y,b)
return H.v(z,"$isc",[d],"$asc")},
hM:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gP(a);x.w();)C.a.h(y,H.C(x.gI(x),c))
if(b)return y
return H.v(J.bp(y),"$isc",z,"$asc")},
d_:function(a,b,c){var z,y
z=P.E
H.v(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.v(a,"$isb1",[z],"$asb1")
y=a.length
c=P.ek(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.al()
z=c<y}else z=!0
return H.ej(z?C.a.bt(a,b,c):a)}return P.iV(a,b,c)},
iV:function(a,b,c){var z,y,x
H.v(a,"$ish",[P.E],"$ash")
z=J.aX(a)
for(y=0;y<b;++y)if(!z.w())throw H.d(P.aa(b,0,y,null,null))
x=[]
for(;z.w();)x.push(z.gI(z))
return H.ej(x)},
iu:function(a,b,c){return new H.hB(a,H.hC(a,!1,!0,!1))},
fo:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isc",[P.E],"$asc")
if(c===C.p){z=$.$get$fn().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.fT(H.C(b,H.aj(c,"cE",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cW(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c9:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hj(a)},
o:function(a){return new P.f5(a)},
dr:function(a){H.lI(a)},
Q:{"^":"a;"},
"+bool":0,
aN:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aN))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.f.b2(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.h8(H.io(this))
y=P.bO(H.il(this))
x=P.bO(H.ih(this))
w=P.bO(H.ii(this))
v=P.bO(H.ik(this))
u=P.bO(H.im(this))
t=P.h9(H.ij(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
h8:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h9:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bO:function(a){if(a>=10)return""+a
return"0"+a}}},
x:{"^":"Y;"},
"+double":0,
bk:{"^":"a;a",
al:function(a,b){return C.f.al(this.a,H.l(b,"$isbk").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.bk))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hd()
y=this.a
if(y<0)return"-"+new P.bk(0-y).i(0)
x=z.$1(C.f.W(y,6e7)%60)
w=z.$1(C.f.W(y,1e6)%60)
v=new P.hc().$1(y%1e6)
return""+C.f.W(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
q:{
dR:function(a,b,c,d,e,f){return new P.bk(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hc:{"^":"q:24;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hd:{"^":"q:24;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
ed:{"^":"Z;",
i:function(a){return"Throw of null."}},
ap:{"^":"Z;a,b,c,d",
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gbz()+y+x
if(!this.a)return w
v=this.gby()
u=P.c9(this.b)
return w+v+": "+H.i(u)},
q:{
fS:function(a){return new P.ap(!1,null,null,a)},
c2:function(a,b,c){return new P.ap(!0,a,b,c)},
dw:function(a){return new P.ap(!1,null,a,"Must not be null")}}},
ch:{"^":"ap;e,f,a,b,c,d",
gbz:function(){return"RangeError"},
gby:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
q:{
ci:function(a,b,c){return new P.ch(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.ch(b,c,!0,a,d,"Invalid value")},
ek:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.B(a)
if(0<=a){if(typeof c!=="number")return H.B(c)
z=a>c}else z=!0
if(z)throw H.d(P.aa(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.B(c)
z=b>c}else z=!0
if(z)throw H.d(P.aa(b,a,c,"end",f))
return b}return c}}},
hw:{"^":"ap;e,m:f>,a,b,c,d",
gbz:function(){return"RangeError"},
gby:function(){if(J.fJ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
q:{
N:function(a,b,c,d,e){var z=H.a0(e!=null?e:J.aY(b))
return new P.hw(b,z,!0,a,c,"Index out of range")}}},
jo:{"^":"Z;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ag:function(a){return new P.jo(a)}}},
jl:{"^":"Z;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
eY:function(a){return new P.jl(a)}}},
cY:{"^":"Z;a",
i:function(a){return"Bad state: "+this.a},
q:{
eu:function(a){return new P.cY(a)}}},
h3:{"^":"Z;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.c9(z))+"."},
q:{
aM:function(a){return new P.h3(a)}}},
ib:{"^":"a;",
i:function(a){return"Out of Memory"},
$isZ:1},
es:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isZ:1},
h6:{"^":"Z;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f5:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hq:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.aG(x,0,75)+"..."
return y+"\n"+x}},
bQ:{"^":"a;"},
E:{"^":"Y;"},
"+int":0,
h:{"^":"a;$ti",
cj:["dW",function(a,b){var z=H.aj(this,"h",0)
return new H.d9(this,H.k(b,{func:1,ret:P.Q,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gP(this)
for(y=0;z.w();)++y
return y},
gam:function(a){var z,y
z=this.gP(this)
if(!z.w())throw H.d(H.cK())
y=z.gI(z)
if(z.w())throw H.d(H.hy())
return y},
A:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.dw("index"))
if(b<0)H.p(P.aa(b,0,null,"index",null))
for(z=this.gP(this),y=0;z.w();){x=z.gI(z)
if(b===y)return x;++y}throw H.d(P.N(b,this,"index",null,y))},
i:function(a){return P.hx(this,"(",")")}},
cL:{"^":"a;$ti"},
c:{"^":"a;$ti",$ish:1},
"+List":0,
a_:{"^":"a;$ti"},
L:{"^":"a;",
gS:function(a){return P.a.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
Y:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gS:function(a){return H.bu(this)},
i:function(a){return"Instance of '"+H.b4(this)+"'"},
toString:function(){return this.i(this)}},
ao:{"^":"a;"},
f:{"^":"a;",$isee:1},
"+String":0,
by:{"^":"a;ar:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
ew:function(a,b,c){var z=J.aX(b)
if(!z.w())return a
if(c.length===0){do a+=H.i(z.gI(z))
while(z.w())}else{a+=H.i(z.gI(z))
for(;z.w();)a=a+c+H.i(z.gI(z))}return a}}}}],["","",,W,{"^":"",
dv:function(a){var z=document.createElement("a")
return z},
cD:function(a,b){var z=document.createElement("canvas")
return z},
he:function(a,b,c){var z,y
z=document.body
y=(z&&C.q).a3(z,a,b,c)
y.toString
z=W.A
z=new H.d9(new W.ai(y),H.k(new W.hf(),{func:1,ret:P.Q,args:[z]}),[z])
return H.l(z.gam(z),"$isR")},
hg:function(a){H.l(a,"$isa5")
return"wheel"},
bl:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fP(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
cm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f9:function(a,b,c,d){var z,y
z=W.cm(W.cm(W.cm(W.cm(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fu:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.j)return a
return z.cX(a,b)},
a9:{"^":"R;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lQ:{"^":"n;0m:length=","%":"AccessibleNodeList"},
lR:{"^":"a9;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
lS:{"^":"a9;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dy:{"^":"a9;",$isdy:1,"%":"HTMLBaseElement"},
fW:{"^":"n;","%":";Blob"},
c3:{"^":"a9;",$isc3:1,"%":"HTMLBodyElement"},
cC:{"^":"a9;",
bq:function(a,b,c){if(c!=null)return a.getContext(b,P.lj(c,null))
return a.getContext(b)},
dM:function(a,b){return this.bq(a,b,null)},
$iscC:1,
"%":"HTMLCanvasElement"},
dF:{"^":"n;",$isdF:1,"%":"CanvasRenderingContext2D"},
lY:{"^":"A;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
m_:{"^":"h5;0m:length=","%":"CSSPerspective"},
bj:{"^":"n;",$isbj:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
m0:{"^":"jO;0m:length=",
dN:function(a,b){var z=a.getPropertyValue(this.ej(a,b))
return z==null?"":z},
ej:function(a,b){var z,y
z=$.$get$dJ()
y=z[b]
if(typeof y==="string")return y
y=this.fj(a,b)
z[b]=y
return y},
fj:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ha()+b
if(z in a)return z
return b},
gbS:function(a){return a.bottom},
gab:function(a){return a.height},
gaC:function(a){return a.left},
gaR:function(a){return a.right},
gaT:function(a){return a.top},
gad:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h4:{"^":"a;",
gaC:function(a){return this.dN(a,"left")}},
dK:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
h5:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
m1:{"^":"dK;0m:length=","%":"CSSTransformValue"},
m2:{"^":"dK;0m:length=","%":"CSSUnparsedValue"},
m3:{"^":"n;0m:length=","%":"DataTransferItemList"},
b_:{"^":"a9;",$isb_:1,"%":"HTMLDivElement"},
m4:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
m5:{"^":"jQ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.a8,P.Y]]},
$asu:function(){return[[P.a8,P.Y]]},
$ish:1,
$ash:function(){return[[P.a8,P.Y]]},
$isc:1,
$asc:function(){return[[P.a8,P.Y]]},
$asy:function(){return[[P.a8,P.Y]]},
"%":"ClientRectList|DOMRectList"},
hb:{"^":"n;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gad(a))+" x "+H.i(this.gab(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bM(b,"$isa8",[P.Y],"$asa8")
if(!z)return!1
z=J.be(b)
return a.left===z.gaC(b)&&a.top===z.gaT(b)&&this.gad(a)===z.gad(b)&&this.gab(a)===z.gab(b)},
gS:function(a){return W.f9(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gad(a)&0x1FFFFFFF,this.gab(a)&0x1FFFFFFF)},
gbS:function(a){return a.bottom},
gab:function(a){return a.height},
gaC:function(a){return a.left},
gaR:function(a){return a.right},
gaT:function(a){return a.top},
gad:function(a){return a.width},
$isa8:1,
$asa8:function(){return[P.Y]},
"%":";DOMRectReadOnly"},
m6:{"^":"jS;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.f]},
$asu:function(){return[P.f]},
$ish:1,
$ash:function(){return[P.f]},
$isc:1,
$asc:function(){return[P.f]},
$asy:function(){return[P.f]},
"%":"DOMStringList"},
m7:{"^":"n;0m:length=","%":"DOMTokenList"},
jN:{"^":"cf;cI:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.l(z[b],"$isR")},
h:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var z=this.hP(this)
return new J.aw(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.R]},
$ash:function(){return[W.R]},
$asc:function(){return[W.R]}},
R:{"^":"A;0hJ:tagName=",
gfN:function(a){return new W.jT(a)},
gcY:function(a){return new W.jN(a,a.children)},
gcZ:function(a){return P.ir(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.Y)},
i:function(a){return a.localName},
a3:["bu",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dU
if(z==null){z=H.b([],[W.as])
y=new W.eb(z)
C.a.h(z,W.f7(null))
C.a.h(z,W.fi())
$.dU=y
d=y}else d=z
z=$.dT
if(z==null){z=new W.fp(d)
$.dT=z
c=z}else{z.a=d
c=z}}if($.ax==null){z=document
y=z.implementation.createHTMLDocument("")
$.ax=y
$.cG=y.createRange()
y=$.ax
y.toString
y=y.createElement("base")
H.l(y,"$isdy")
y.href=z.baseURI
$.ax.head.appendChild(y)}z=$.ax
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.l(y,"$isc3")}z=$.ax
if(!!this.$isc3)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.ax.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.L(C.P,a.tagName)){$.cG.selectNodeContents(x)
w=$.cG.createContextualFragment(b)}else{x.innerHTML=b
w=$.ax.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.ax.body
if(x==null?z!=null:x!==z)J.du(x)
c.cn(w)
document.adoptNode(w)
return w},function(a,b,c){return this.a3(a,b,c,null)},"fW",null,null,"gip",5,5,null],
dR:function(a,b,c,d){a.textContent=null
a.appendChild(this.a3(a,b,c,d))},
dQ:function(a,b){return this.dR(a,b,null,null)},
$isR:1,
"%":";Element"},
hf:{"^":"q:12;",
$1:function(a){return!!J.J(H.l(a,"$isA")).$isR}},
a4:{"^":"n;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a5:{"^":"n;",
cU:["dU",function(a,b,c,d){H.k(c,{func:1,args:[W.a4]})
if(c!=null)this.eg(a,b,c,!1)}],
eg:function(a,b,c,d){return a.addEventListener(b,H.bc(H.k(c,{func:1,args:[W.a4]}),1),!1)},
$isa5:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ff|fg|fj|fk"},
bm:{"^":"fW;",$isbm:1,"%":"File"},
m8:{"^":"jY;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bm]},
$asu:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asy:function(){return[W.bm]},
"%":"FileList"},
m9:{"^":"a5;0m:length=","%":"FileWriter"},
ma:{"^":"a9;0m:length=","%":"HTMLFormElement"},
bo:{"^":"n;",$isbo:1,"%":"Gamepad"},
mb:{"^":"n;0m:length=","%":"History"},
mc:{"^":"ka;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.A]},
$asu:function(){return[W.A]},
$ish:1,
$ash:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$asy:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cb:{"^":"n;0d0:data=",$iscb:1,"%":"ImageData"},
dW:{"^":"a9;",$isdW:1,"%":"HTMLImageElement"},
bq:{"^":"d4;",$isbq:1,"%":"KeyboardEvent"},
mg:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
mh:{"^":"n;0m:length=","%":"MediaList"},
mi:{"^":"a5;",
cU:function(a,b,c,d){H.k(c,{func:1,args:[W.a4]})
if(b==="message")a.start()
this.dU(a,b,c,!1)},
"%":"MessagePort"},
mj:{"^":"kg;",
j:function(a,b){return P.aK(a.get(H.H(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gX:function(a){var z=H.b([],[P.f])
this.K(a,new W.i0(z))
return z},
gm:function(a){return a.size},
$asa6:function(){return[P.f,null]},
$isa_:1,
$asa_:function(){return[P.f,null]},
"%":"MIDIInputMap"},
i0:{"^":"q:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mk:{"^":"kh;",
j:function(a,b){return P.aK(a.get(H.H(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gX:function(a){var z=H.b([],[P.f])
this.K(a,new W.i1(z))
return z},
gm:function(a){return a.size},
$asa6:function(){return[P.f,null]},
$isa_:1,
$asa_:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
i1:{"^":"q:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
br:{"^":"n;",$isbr:1,"%":"MimeType"},
ml:{"^":"kj;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.br]},
$asu:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asy:function(){return[W.br]},
"%":"MimeTypeArray"},
am:{"^":"d4;",$isam:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ai:{"^":"cf;a",
gam:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.eu("No elements"))
if(y>1)throw H.d(P.eu("More than one element"))
return z.firstChild},
a9:function(a,b){var z,y,x,w
H.v(b,"$ish",[W.A],"$ash")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
gP:function(a){var z=this.a.childNodes
return new W.dV(z,z.length,-1,[H.bN(C.S,z,"y",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asu:function(){return[W.A]},
$ash:function(){return[W.A]},
$asc:function(){return[W.A]}},
A:{"^":"a5;0cd:previousSibling=",
hz:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
i:function(a){var z=a.nodeValue
return z==null?this.dV(a):z},
$isA:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
ms:{"^":"n;",
hw:[function(a){return a.previousNode()},"$0","gcd",1,0,16],
"%":"NodeIterator"},
i6:{"^":"kl;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.A]},
$asu:function(){return[W.A]},
$ish:1,
$ash:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$asy:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
bt:{"^":"n;0m:length=",$isbt:1,"%":"Plugin"},
mw:{"^":"kp;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bt]},
$asu:function(){return[W.bt]},
$ish:1,
$ash:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$asy:function(){return[W.bt]},
"%":"PluginArray"},
my:{"^":"kv;",
j:function(a,b){return P.aK(a.get(H.H(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gX:function(a){var z=H.b([],[P.f])
this.K(a,new W.iA(z))
return z},
gm:function(a){return a.size},
$asa6:function(){return[P.f,null]},
$isa_:1,
$asa_:function(){return[P.f,null]},
"%":"RTCStatsReport"},
iA:{"^":"q:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mA:{"^":"a9;0m:length=","%":"HTMLSelectElement"},
bv:{"^":"a5;",$isbv:1,"%":"SourceBuffer"},
mB:{"^":"fg;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bv]},
$asu:function(){return[W.bv]},
$ish:1,
$ash:function(){return[W.bv]},
$isc:1,
$asc:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"SourceBufferList"},
bw:{"^":"n;",$isbw:1,"%":"SpeechGrammar"},
mC:{"^":"kB;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bw]},
$asu:function(){return[W.bw]},
$ish:1,
$ash:function(){return[W.bw]},
$isc:1,
$asc:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"SpeechGrammarList"},
bx:{"^":"n;0m:length=",$isbx:1,"%":"SpeechRecognitionResult"},
mE:{"^":"kE;",
j:function(a,b){return a.getItem(H.H(b))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gX:function(a){var z=H.b([],[P.f])
this.K(a,new W.iR(z))
return z},
gm:function(a){return a.length},
$asa6:function(){return[P.f,P.f]},
$isa_:1,
$asa_:function(){return[P.f,P.f]},
"%":"Storage"},
iR:{"^":"q:27;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bz:{"^":"n;",$isbz:1,"%":"CSSStyleSheet|StyleSheet"},
iW:{"^":"a9;",
a3:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
z=W.he("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ai(y).a9(0,new W.ai(z))
return y},
"%":"HTMLTableElement"},
mG:{"^":"a9;",
a3:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
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
new W.ai(y).a9(0,new W.ai(w))
return y},
"%":"HTMLTableRowElement"},
mH:{"^":"a9;",
a3:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.w.a3(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gam(z)
y.toString
x.toString
new W.ai(y).a9(0,new W.ai(x))
return y},
"%":"HTMLTableSectionElement"},
ez:{"^":"a9;",$isez:1,"%":"HTMLTemplateElement"},
bA:{"^":"a5;",$isbA:1,"%":"TextTrack"},
bB:{"^":"a5;",$isbB:1,"%":"TextTrackCue|VTTCue"},
mJ:{"^":"kL;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bB]},
$asu:function(){return[W.bB]},
$ish:1,
$ash:function(){return[W.bB]},
$isc:1,
$asc:function(){return[W.bB]},
$asy:function(){return[W.bB]},
"%":"TextTrackCueList"},
mK:{"^":"fk;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bA]},
$asu:function(){return[W.bA]},
$ish:1,
$ash:function(){return[W.bA]},
$isc:1,
$asc:function(){return[W.bA]},
$asy:function(){return[W.bA]},
"%":"TextTrackList"},
mL:{"^":"n;0m:length=","%":"TimeRanges"},
bC:{"^":"n;",$isbC:1,"%":"Touch"},
b6:{"^":"d4;",$isb6:1,"%":"TouchEvent"},
mM:{"^":"kR;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bC]},
$asu:function(){return[W.bC]},
$ish:1,
$ash:function(){return[W.bC]},
$isc:1,
$asc:function(){return[W.bC]},
$asy:function(){return[W.bC]},
"%":"TouchList"},
mN:{"^":"n;0m:length=","%":"TrackDefaultList"},
mP:{"^":"n;",
hw:[function(a){return a.previousNode()},"$0","gcd",1,0,16],
"%":"TreeWalker"},
d4:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mS:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
mT:{"^":"a5;0m:length=","%":"VideoTrackList"},
bF:{"^":"am;",
gfZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.ag("deltaY is not supported"))},
gfY:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.ag("deltaX is not supported"))},
$isbF:1,
"%":"WheelEvent"},
jF:{"^":"a5;",
f1:function(a,b){return a.requestAnimationFrame(H.bc(H.k(b,{func:1,ret:-1,args:[P.Y]}),1))},
es:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
f4:{"^":"A;",$isf4:1,"%":"Attr"},
mY:{"^":"kY;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bj]},
$asu:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asy:function(){return[W.bj]},
"%":"CSSRuleList"},
mZ:{"^":"hb;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bM(b,"$isa8",[P.Y],"$asa8")
if(!z)return!1
z=J.be(b)
return a.left===z.gaC(b)&&a.top===z.gaT(b)&&a.width===z.gad(b)&&a.height===z.gab(b)},
gS:function(a){return W.f9(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gab:function(a){return a.height},
gad:function(a){return a.width},
"%":"ClientRect|DOMRect"},
n0:{"^":"l_;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bo]},
$asu:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asy:function(){return[W.bo]},
"%":"GamepadList"},
n3:{"^":"l1;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.A]},
$asu:function(){return[W.A]},
$ish:1,
$ash:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$asy:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
n4:{"^":"l3;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$asu:function(){return[W.bx]},
$ish:1,
$ash:function(){return[W.bx]},
$isc:1,
$asc:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"SpeechRecognitionResultList"},
n5:{"^":"l5;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bz]},
$asu:function(){return[W.bz]},
$ish:1,
$ash:function(){return[W.bz]},
$isc:1,
$asc:function(){return[W.bz]},
$asy:function(){return[W.bz]},
"%":"StyleSheetList"},
jL:{"^":"e5;cI:a<",
K:function(a,b){var z,y,x,w,v
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=this.gX(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.w)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gX:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.f])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.e(z,w)
v=H.l(z[w],"$isf4")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asa6:function(){return[P.f,P.f]},
$asa_:function(){return[P.f,P.f]}},
jT:{"^":"jL;a",
j:function(a,b){return this.a.getAttribute(H.H(b))},
gm:function(a){return this.gX(this).length}},
jU:{"^":"cZ;a,b,c,$ti",
he:function(a,b,c,d){var z=H.z(this,0)
H.k(a,{func:1,ret:-1,args:[z]})
H.k(c,{func:1,ret:-1})
return W.X(this.a,this.b,a,!1,z)}},
n_:{"^":"jU;a,b,c,$ti"},
jV:{"^":"ev;a,b,c,d,e,$ti",
fk:function(){var z=this.d
if(z!=null&&this.a<=0)J.fL(this.b,this.c,z,!1)},
q:{
X:function(a,b,c,d,e){var z=c==null?null:W.fu(new W.jW(c),W.a4)
z=new W.jV(0,a,b,z,!1,[e])
z.fk()
return z}}},
jW:{"^":"q:6;a",
$1:function(a){return this.a.$1(H.l(a,"$isa4"))}},
bY:{"^":"a;a",
e8:function(a){var z,y
z=$.$get$db()
if(z.a===0){for(y=0;y<262;++y)z.O(0,C.O[y],W.ls())
for(y=0;y<12;++y)z.O(0,C.n[y],W.lt())}},
aw:function(a){return $.$get$f8().L(0,W.bl(a))},
ah:function(a,b,c){var z,y,x
z=W.bl(a)
y=$.$get$db()
x=y.j(0,H.i(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dg(x.$4(a,b,c,this))},
$isas:1,
q:{
f7:function(a){var z,y
z=W.dv(null)
y=window.location
z=new W.bY(new W.kw(z,y))
z.e8(a)
return z},
n1:[function(a,b,c,d){H.l(a,"$isR")
H.H(b)
H.H(c)
H.l(d,"$isbY")
return!0},"$4","ls",16,0,25],
n2:[function(a,b,c,d){var z,y,x,w,v
H.l(a,"$isR")
H.H(b)
H.H(c)
z=H.l(d,"$isbY").a
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
return z},"$4","lt",16,0,25]}},
y:{"^":"a;$ti",
gP:function(a){return new W.dV(a,this.gm(a),-1,[H.bN(this,a,"y",0)])}},
eb:{"^":"a;a",
aw:function(a){return C.a.cW(this.a,new W.i8(a))},
ah:function(a,b,c){return C.a.cW(this.a,new W.i7(a,b,c))},
$isas:1},
i8:{"^":"q:14;a",
$1:function(a){return H.l(a,"$isas").aw(this.a)}},
i7:{"^":"q:14;a,b,c",
$1:function(a){return H.l(a,"$isas").ah(this.a,this.b,this.c)}},
kx:{"^":"a;",
eb:function(a,b,c,d){var z,y,x
this.a.a9(0,c)
z=b.cj(0,new W.ky())
y=b.cj(0,new W.kz())
this.b.a9(0,z)
x=this.c
x.a9(0,C.Q)
x.a9(0,y)},
aw:function(a){return this.a.L(0,W.bl(a))},
ah:["dZ",function(a,b,c){var z,y
z=W.bl(a)
y=this.c
if(y.L(0,H.i(z)+"::"+b))return this.d.fL(c)
else if(y.L(0,"*::"+b))return this.d.fL(c)
else{y=this.b
if(y.L(0,H.i(z)+"::"+b))return!0
else if(y.L(0,"*::"+b))return!0
else if(y.L(0,H.i(z)+"::*"))return!0
else if(y.L(0,"*::*"))return!0}return!1}],
$isas:1},
ky:{"^":"q:15;",
$1:function(a){return!C.a.L(C.n,H.H(a))}},
kz:{"^":"q:15;",
$1:function(a){return C.a.L(C.n,H.H(a))}},
kI:{"^":"kx;e,a,b,c,d",
ah:function(a,b,c){if(this.dZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.L(0,b)
return!1},
q:{
fi:function(){var z,y,x,w,v
z=P.f
y=P.e4(C.m,z)
x=H.z(C.m,0)
w=H.k(new W.kJ(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.kI(y,P.bT(null,null,null,z),P.bT(null,null,null,z),P.bT(null,null,null,z),null)
y.eb(null,new H.hR(C.m,w,[x,z]),v,null)
return y}}},
kJ:{"^":"q:29;",
$1:function(a){return"TEMPLATE::"+H.i(H.H(a))}},
kH:{"^":"a;",
aw:function(a){var z=J.J(a)
if(!!z.$iseo)return!1
z=!!z.$isd0
if(z&&W.bl(a)==="foreignObject")return!1
if(z)return!0
return!1},
ah:function(a,b,c){if(b==="is"||C.h.bs(b,"on"))return!1
return this.aw(a)},
$isas:1},
dV:{"^":"a;a,b,c,0d,$ti",
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fK(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gI:function(a){return this.d}},
as:{"^":"a;"},
kw:{"^":"a;a,b",$ismR:1},
fp:{"^":"a;a",
cn:function(a){new W.kV(this).$2(a,null)},
aJ:function(a,b){if(b==null)J.du(a)
else b.removeChild(a)},
f7:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fN(a)
x=y.gcI().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ab(t)}v="element unprintable"
try{v=J.a1(a)}catch(t){H.ab(t)}try{u=W.bl(a)
this.f6(H.l(a,"$isR"),b,z,v,u,H.l(y,"$isa_"),H.H(x))}catch(t){if(H.ab(t) instanceof P.ap)throw t
else{this.aJ(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
f6:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aJ(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aw(a)){this.aJ(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.ah(a,"is",g)){this.aJ(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gX(f)
y=H.b(z.slice(0),[H.z(z,0)])
for(x=f.gX(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.e(y,x)
w=y[x]
if(!this.a.ah(a,J.fR(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.i(e)+" "+w+'="'+H.i(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.J(a).$isez)this.cn(a.content)},
$ismt:1},
kV:{"^":"q:30;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.f7(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aJ(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fO(z)}catch(w){H.ab(w)
v=H.l(z,"$isA")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.l(y,"$isA")}}},
jO:{"^":"n+h4;"},
jP:{"^":"n+u;"},
jQ:{"^":"jP+y;"},
jR:{"^":"n+u;"},
jS:{"^":"jR+y;"},
jX:{"^":"n+u;"},
jY:{"^":"jX+y;"},
k9:{"^":"n+u;"},
ka:{"^":"k9+y;"},
kg:{"^":"n+a6;"},
kh:{"^":"n+a6;"},
ki:{"^":"n+u;"},
kj:{"^":"ki+y;"},
kk:{"^":"n+u;"},
kl:{"^":"kk+y;"},
ko:{"^":"n+u;"},
kp:{"^":"ko+y;"},
kv:{"^":"n+a6;"},
ff:{"^":"a5+u;"},
fg:{"^":"ff+y;"},
kA:{"^":"n+u;"},
kB:{"^":"kA+y;"},
kE:{"^":"n+a6;"},
kK:{"^":"n+u;"},
kL:{"^":"kK+y;"},
fj:{"^":"a5+u;"},
fk:{"^":"fj+y;"},
kQ:{"^":"n+u;"},
kR:{"^":"kQ+y;"},
kX:{"^":"n+u;"},
kY:{"^":"kX+y;"},
kZ:{"^":"n+u;"},
l_:{"^":"kZ+y;"},
l0:{"^":"n+u;"},
l1:{"^":"l0+y;"},
l2:{"^":"n+u;"},
l3:{"^":"l2+y;"},
l4:{"^":"n+u;"},
l5:{"^":"l4+y;"}}],["","",,P,{"^":"",
lm:function(a){var z,y
z=J.J(a)
if(!!z.$iscb){y=z.gd0(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fm(a.data,a.height,a.width)},
ll:function(a){if(a instanceof P.fm)return{data:a.a,height:a.b,width:a.c}
return a},
aK:function(a){var z,y,x,w,v
if(a==null)return
z=P.e3(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w){v=H.H(y[w])
z.O(0,v,a[v])}return z},
lj:function(a,b){var z={}
a.K(0,new P.lk(z))
return z},
dQ:function(){var z=$.dP
if(z==null){z=J.cx(window.navigator.userAgent,"Opera",0)
$.dP=z}return z},
ha:function(){var z,y
z=$.dM
if(z!=null)return z
y=$.dN
if(y==null){y=J.cx(window.navigator.userAgent,"Firefox",0)
$.dN=y}if(y)z="-moz-"
else{y=$.dO
if(y==null){y=!P.dQ()&&J.cx(window.navigator.userAgent,"Trident/",0)
$.dO=y}if(y)z="-ms-"
else z=P.dQ()?"-o-":"-webkit-"}$.dM=z
return z},
fm:{"^":"a;d0:a>,b,c",$iscb:1},
lk:{"^":"q:19;a",
$2:function(a,b){this.a[a]=b}},
hn:{"^":"cf;a,b",
gbC:function(){var z,y,x
z=this.b
y=H.aj(z,"u",0)
x=W.R
return new H.hP(new H.d9(z,H.k(new P.ho(),{func:1,ret:P.Q,args:[y]}),[y]),H.k(new P.hp(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aY(this.gbC().a)},
j:function(a,b){var z=this.gbC()
return z.b.$1(J.cy(z.a,b))},
gP:function(a){var z=P.hM(this.gbC(),!1,W.R)
return new J.aw(z,z.length,0,[H.z(z,0)])},
$asu:function(){return[W.R]},
$ash:function(){return[W.R]},
$asc:function(){return[W.R]}},
ho:{"^":"q:12;",
$1:function(a){return!!J.J(H.l(a,"$isA")).$isR}},
hp:{"^":"q:42;",
$1:function(a){return H.j(H.l(a,"$isA"),"$isR")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kq:{"^":"a;$ti",
gaR:function(a){var z=this.a
if(typeof z!=="number")return z.C()
return H.C(z+this.c,H.z(this,0))},
gbS:function(a){var z=this.b
if(typeof z!=="number")return z.C()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bM(b,"$isa8",[P.Y],"$asa8")
if(!z)return!1
z=this.a
y=J.be(b)
x=y.gaC(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaT(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.C()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gaR(b)){if(typeof x!=="number")return x.C()
z=H.C(x+this.d,w)===y.gbS(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.aW(z)
x=this.b
w=J.aW(x)
if(typeof z!=="number")return z.C()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.C()
v=H.C(x+this.d,v)
return P.kb(P.cn(P.cn(P.cn(P.cn(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a8:{"^":"kq;aC:a>,aT:b>,ad:c>,ab:d>,$ti",q:{
ir:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.al()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.al()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",bS:{"^":"n;",$isbS:1,"%":"SVGLength"},mf:{"^":"kd;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bS]},
$ish:1,
$ash:function(){return[P.bS]},
$isc:1,
$asc:function(){return[P.bS]},
$asy:function(){return[P.bS]},
"%":"SVGLengthList"},bV:{"^":"n;",$isbV:1,"%":"SVGNumber"},mu:{"^":"kn;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bV]},
$ish:1,
$ash:function(){return[P.bV]},
$isc:1,
$asc:function(){return[P.bV]},
$asy:function(){return[P.bV]},
"%":"SVGNumberList"},mx:{"^":"n;0m:length=","%":"SVGPointList"},eo:{"^":"d0;",$iseo:1,"%":"SVGScriptElement"},mF:{"^":"kG;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asu:function(){return[P.f]},
$ish:1,
$ash:function(){return[P.f]},
$isc:1,
$asc:function(){return[P.f]},
$asy:function(){return[P.f]},
"%":"SVGStringList"},d0:{"^":"R;",
gcY:function(a){return new P.hn(a,new W.ai(a))},
a3:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.as])
C.a.h(z,W.f7(null))
C.a.h(z,W.fi())
C.a.h(z,new W.kH())
c=new W.fp(new W.eb(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.q).fW(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ai(w)
u=z.gam(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isd0:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bW:{"^":"n;",$isbW:1,"%":"SVGTransform"},mO:{"^":"kT;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$asu:function(){return[P.bW]},
$ish:1,
$ash:function(){return[P.bW]},
$isc:1,
$asc:function(){return[P.bW]},
$asy:function(){return[P.bW]},
"%":"SVGTransformList"},kc:{"^":"n+u;"},kd:{"^":"kc+y;"},km:{"^":"n+u;"},kn:{"^":"km+y;"},kF:{"^":"n+u;"},kG:{"^":"kF+y;"},kS:{"^":"n+u;"},kT:{"^":"kS+y;"}}],["","",,P,{"^":"",lT:{"^":"n;0m:length=","%":"AudioBuffer"},lU:{"^":"jM;",
j:function(a,b){return P.aK(a.get(H.H(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aK(y.value[1]))}},
gX:function(a){var z=H.b([],[P.f])
this.K(a,new P.fU(z))
return z},
gm:function(a){return a.size},
$asa6:function(){return[P.f,null]},
$isa_:1,
$asa_:function(){return[P.f,null]},
"%":"AudioParamMap"},fU:{"^":"q:5;a",
$2:function(a,b){return C.a.h(this.a,a)}},lV:{"^":"a5;0m:length=","%":"AudioTrackList"},fV:{"^":"a5;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mv:{"^":"fV;0m:length=","%":"OfflineAudioContext"},jM:{"^":"n+a6;"}}],["","",,P,{"^":"",cX:{"^":"n;",
hL:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$iscb)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ll(g))
return}if(!!z.$isdW)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.fS("Incorrect number or type of arguments"))},
hK:function(a,b,c,d,e,f,g){return this.hL(a,b,c,d,e,f,g,null,null,null)},
$iscX:1,
"%":"WebGLRenderingContext"},jj:{"^":"n;",$isjj:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mD:{"^":"kD;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.N(b,a,null,null,null))
return P.aK(a.item(b))},
A:function(a,b){return this.j(a,b)},
$asu:function(){return[[P.a_,,,]]},
$ish:1,
$ash:function(){return[[P.a_,,,]]},
$isc:1,
$asc:function(){return[[P.a_,,,]]},
$asy:function(){return[[P.a_,,,]]},
"%":"SQLResultSetRowList"},kC:{"^":"n+u;"},kD:{"^":"kC+y;"}}],["","",,O,{"^":"",aZ:{"^":"a;0a,0b,0c,0d,$ti",
ct:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
co:function(a,b,c){var z=H.aj(this,"aZ",0)
H.k(b,{func:1,ret:P.Q,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.E,[P.h,z]]}
H.k(a,z)
H.k(c,z)
this.b=b
this.c=a
this.d=c},
br:function(a,b){return this.co(a,null,b)},
eT:function(a){var z
H.v(a,"$ish",[H.aj(this,"aZ",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ez:function(a,b){var z
H.v(b,"$ish",[H.aj(this,"aZ",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.z(z,0)])},
A:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aj(this,"aZ",0)
H.C(b,z)
z=[z]
if(this.eT(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ez(x,H.b([b],z))}},
$ish:1,
q:{
cF:function(a){var z=new O.aZ([a])
z.ct(a)
return z}}},cS:{"^":"a;0a,0b",
gm:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.ad()
this.b=z}return z},
e5:function(a){var z=this.b
if(!(z==null))z.J(a)},
an:function(){return this.e5(null)},
gR:function(a){var z=this.a
if(z.length>0)return C.a.gbl(z)
else return V.cT()},
dA:function(a){var z=this.a
if(a==null)C.a.h(z,V.cT())
else C.a.h(z,a)
this.an()},
cc:function(){var z=this.a
if(z.length>0){z.pop()
this.an()}}}}],["","",,E,{"^":"",cz:{"^":"a;"},aO:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0V:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scp:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().E(0,this.gdu())
y=this.c
if(y!=null)y.gB().h(0,this.gdu())
x=new D.S("shape",z,this.c,this,[F.eq])
x.b=!0
this.a5(x)}},
saN:function(a){var z,y
if(!J.T(this.r,a)){z=this.r
if(z!=null)z.gB().E(0,this.gdt())
if(a!=null)a.gB().h(0,this.gdt())
this.r=a
y=new D.S("mover",z,a,this,[U.bU])
y.b=!0
this.a5(y)}},
bp:function(a,b){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=b.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.d
z.sdI(z.a+z.d*b.y)
z.sdw(0,z.b+z.e*b.y)
z.sdC(z.c+z.f*b.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.az(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.p(0,V.az(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.p(0,V.az(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.ac(0)}u=z.x}else u=null
if(!J.T(u,this.x)){t=this.x
this.x=u
s=new D.S("matrix",t,u,this,[V.ar])
s.b=!0
this.a5(s)}for(z=this.y.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.w();)z.d.bp(0,b)},
aE:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gR(z))
else C.a.h(z.a,y.p(0,z.gR(z)))
z.an()
a.dB(this.f)
z=a.dy
x=(z&&C.a).gbl(z)
if(x!=null&&this.d!=null)x.hC(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.w();)z.d.aE(a)
a.dz()
a.dx.cc()},
a5:function(a){var z=this.z
if(!(z==null))z.J(a)},
U:function(){return this.a5(null)},
hn:[function(a){H.l(a,"$isF")
this.e=null
this.a5(a)},function(){return this.hn(null)},"ix","$1","$0","gdu",0,2,0],
hm:[function(a){this.a5(H.l(a,"$isF"))},function(){return this.hm(null)},"iw","$1","$0","gdt",0,2,0],
hk:[function(a){this.a5(H.l(a,"$isF"))},function(){return this.hk(null)},"iu","$1","$0","gds",0,2,0],
it:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$ish",[E.aO],"$ash")
for(z=b.length,y=this.gds(),x={func:1,ret:-1,args:[D.F]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gV()==null){t=new D.b0()
t.d=0
u.sV(t)}t=u.gV()
t.toString
H.k(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.U()},"$2","ghj",8,0,7],
iv:[function(a,b){var z,y,x,w,v
H.v(b,"$ish",[E.aO],"$ash")
for(z=b.length,y=this.gds(),x=0;x<b.length;b.length===z||(0,H.w)(b),++x){w=b[x]
if(w!=null){if(w.gV()==null){v=new D.b0()
v.d=0
w.sV(v)}w.gV().E(0,y)}}this.U()},"$2","ghl",8,0,7],
$isaA:1},iv:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e1:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aN(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cS()
y=[V.ar]
z.a=H.b([],y)
z.gB().h(0,new E.ix(this))
this.cy=z
z=new O.cS()
z.a=H.b([],y)
z.gB().h(0,new E.iy(this))
this.db=z
z=new O.cS()
z.a=H.b([],y)
z.gB().h(0,new E.iz(this))
this.dx=z
z=H.b([],[O.d1])
this.dy=z
C.a.h(z,null)
this.fr=new H.b2(0,0,[P.f,A.ep])},
ghx:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gR(z)
y=this.db
y=z.p(0,y.gR(y))
this.z=y
z=y}return z},
dB:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbl(z):a;(z&&C.a).h(z,y)},
dz:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
iw:function(a,b){var z=new E.iv(a,b)
z.e1(a,b)
return z}}},ix:{"^":"q:8;a",
$1:function(a){var z
H.l(a,"$isF")
z=this.a
z.z=null
z.ch=null}},iy:{"^":"q:8;a",
$1:function(a){var z
H.l(a,"$isF")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iz:{"^":"q:8;a",
$1:function(a){var z
H.l(a,"$isF")
z=this.a
z.ch=null
z.cx=null}},j2:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0V:x@,0y,0z,0Q,0ch,0cx,0cy",
e7:[function(a){var z
H.l(a,"$isF")
z=this.x
if(!(z==null))z.J(a)
this.hE()},function(){return this.e7(null)},"e6","$1","$0","gcu",0,2,0],
gh6:function(){var z,y,x
z=Date.now()
y=C.f.W(P.dR(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aN(z,!1)
return x/y},
cN:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return H.B(z)
x=C.i.c5(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.p()
w=C.i.c5(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eC(C.l,this.ghD())},
hE:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.j4(this),{func:1,ret:-1,args:[P.Y]})
C.y.es(z)
C.y.f1(z,W.fu(y,P.Y))}},"$0","ghD",0,0,2],
hB:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cN()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aN(w,!1)
x.y=P.dR(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.an()
w=x.db
C.a.sm(w.a,0)
w.an()
w=x.dx
C.a.sm(w.a,0)
w.an()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aE(this.e)}x=this.z
if(!(x==null))x.J(null)}catch(v){z=H.ab(v)
y=H.bf(v)
P.dr("Error: "+H.i(z))
P.dr("Stack: "+H.i(y))
throw H.d(z)}},
q:{
j3:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscC)return E.eB(a,!0,!0,!0,!1)
y=W.cD(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcY(a).h(0,y)
w=E.eB(y,!0,!0,!0,!1)
w.a=a
return w},
eB:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.j2()
y=P.hK(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
x=C.k.bq(a,"webgl",y)
x=H.l(x==null?C.k.bq(a,"experimental-webgl",y):x,"$iscX")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iw(x,a)
w=new T.iY(x)
w.b=H.a0(x.getParameter(3379))
w.c=H.a0(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jp(a)
v=new X.hF()
v.c=new X.bs(!1,!1,!1)
v.d=P.bT(null,null,null,P.E)
w.b=v
v=new X.i2(w)
v.f=0
v.r=new V.W(0,0)
v.x=new V.W(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hN(w)
v.r=0
v.x=new V.W(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.j8(w)
v.e=0
v.f=new V.W(0,0)
v.r=new V.W(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.ev,P.a]])
w.z=v
u=document
t=W.am
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.X(u,"contextmenu",H.k(w.geG(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.X(a,"focus",H.k(w.geJ(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.X(a,"blur",H.k(w.geD(),q),!1,r))
v=w.z
p=W.bq
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.X(u,"keyup",H.k(w.geL(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.X(u,"keydown",H.k(w.geK(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.X(a,"mousedown",H.k(w.geO(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mouseup",H.k(w.geQ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.X(a,"mousemove",H.k(w.geP(),s),!1,t))
p=w.z
o=W.bF;(p&&C.a).h(p,W.X(a,H.H(W.hg(a)),H.k(w.geR(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.X(u,"mousemove",H.k(w.geH(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.X(u,"mouseup",H.k(w.geI(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.X(u,"pointerlockchange",H.k(w.geS(),q),!1,r))
r=w.z
q=W.b6
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.X(a,"touchstart",H.k(w.geY(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchend",H.k(w.geW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.X(a,"touchmove",H.k(w.geX(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aN(Date.now(),!1)
z.cy=0
z.cN()
return z}}},j4:{"^":"q:33;a",
$1:function(a){var z
H.lH(a)
z=this.a
if(z.ch){z.ch=!1
z.hB()}}}}],["","",,Z,{"^":"",f2:{"^":"a;a,b",q:{
d8:function(a,b,c){var z
H.v(c,"$isc",[P.E],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bI(c)),35044)
a.bindBuffer(b,null)
return new Z.f2(b,z)}}},dB:{"^":"cz;a,b,c,d,e",
bQ:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.o('Failed to bind buffer attribute "'+J.a1(this.a)+'": '+H.i(z))
throw H.d(x)}},
i:function(a){return"["+J.a1(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},jD:{"^":"a;a",$islW:1},dC:{"^":"a;a,0b,c,d",
aB:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bQ:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bQ(a)},
hS:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aE:function(a){var z,y,x,w,v
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
z=[P.f]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a1(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$ismI:1},cc:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b4(this.c)+"'")+"]"}},b7:{"^":"a;a",
gcq:function(a){var z,y
z=this.a
y=(z&$.$get$aG().a)!==0?3:0
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=2
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$bD().a)!==0)y+=3
if((z&$.$get$bE().a)!==0)y+=4
if((z&$.$get$b8().a)!==0)++y
return(z&$.$get$aD().a)!==0?y+4:y},
fM:function(a){var z,y,x
z=$.$get$aG()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b8()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f1()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b7))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.f])
y=this.a
if((y&$.$get$aG().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aI().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bD().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bE().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b8().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
q:{
ah:function(a){return new Z.b7(a)}}}}],["","",,D,{"^":"",fZ:{"^":"a;"},b0:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.F]}
H.k(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
E:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.F]})
z=this.a
z=z==null?null:C.a.L(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).E(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.L(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).E(z,b)||y}return y},
J:function(a){var z,y,x,w
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
return!0}if(!x)C.a.K(y,new D.hk(z))
y=this.b
if(!(y==null))C.a.K(y,new D.hl(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
h0:function(){return this.J(null)},
hF:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.J(y)}}},
ac:function(a){return this.hF(a,!0,!1)},
q:{
ad:function(){var z=new D.b0()
z.d=0
return z}}},hk:{"^":"q:18;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.F]})
z=this.a.a
z.b
a.$1(z)}},hl:{"^":"q:18;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.F]})
z=this.a.a
z.b
a.$1(z)}},F:{"^":"a;a,0b"},cH:{"^":"F;c,d,a,0b,$ti"},cI:{"^":"F;c,d,a,0b,$ti"},S:{"^":"F;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",dD:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dD))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)},
q:{"^":"lX<"}},e0:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e0))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},hE:{"^":"F;c,a,0b"},hF:{"^":"a;0a,0b,0c,0d",
ht:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.hE(a,this)
y.b=!0
return z.J(y)},
hp:function(a){this.c=a.b
this.d.E(0,a.a)
return!1}},hN:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aZ:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aN(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.p()
v=b.b
u=this.ch
if(typeof v!=="number")return v.p()
t=new V.W(y.a+x*w,y.b+v*u)
u=this.a.gbW()
s=new X.ea(a,new V.W(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cb:function(a,b){this.r=a.a
return!1},
aP:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dJ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.aZ(a,b))
return!0},
aO:function(a,b){return!1},
hu:function(a){return!1},
eN:function(a,b,c){return}},bs:{"^":"a;a,b,c",
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
return z+(this.c?"Shift+":"")}},ea:{"^":"eh;x,y,z,Q,ch,c,d,e,a,0b"},i2:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
ew:function(a,b,c){var z,y,x
z=new P.aN(Date.now(),!1)
y=this.a.gbW()
x=new X.ea(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cb:function(a,b){this.f=a.a
return!1},
aP:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dJ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.ew(a,b,!0))
return!0},
aO:function(a,b){return!1},
hv:function(a,b){return!1}},eh:{"^":"F;"},j7:{"^":"eh;x,y,z,Q,ch,c,d,e,a,0b"},j8:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aZ:function(a,b){var z,y,x,w
H.v(a,"$isc",[V.W],"$asc")
z=new P.aN(Date.now(),!1)
y=a.length>0?a[0]:new V.W(0,0)
x=this.a.gbW()
w=new X.j7(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hs:function(a){var z
H.v(a,"$isc",[V.W],"$asc")
z=this.b
if(z==null)return!1
z.J(this.aZ(a,!0))
return!0},
hq:function(a){var z
H.v(a,"$isc",[V.W],"$asc")
z=this.c
if(z==null)return!1
z.J(this.aZ(a,!0))
return!0},
hr:function(a){H.v(a,"$isc",[V.W],"$asc")
return!1}},jp:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbW:function(){var z=this.a
return V.em(0,0,(z&&C.k).gcZ(z).c,C.k.gcZ(z).d)},
cG:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e0(z,new X.bs(y,a.altKey,a.shiftKey))},
av:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bs(y,a.altKey,a.shiftKey)},
bM:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bs(y,a.altKey,a.shiftKey)},
ag:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Y()
v=z.top
if(typeof x!=="number")return x.Y()
return new V.W(y-w,x-v)},
aI:function(a){return new V.bX(a.movementX,a.movementY)},
bG:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.W])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
t=C.i.a6(u.pageX)
C.i.a6(u.pageY)
s=z.left
C.i.a6(u.pageX)
C.a.h(y,new V.W(t-s,C.i.a6(u.pageY)-z.top))}return y},
ae:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dD(z,new X.bs(y,a.altKey,a.shiftKey))},
bD:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Y()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.Y()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
i6:[function(a){this.f=!0},"$1","geJ",4,0,6],
i0:[function(a){this.f=!1},"$1","geD",4,0,6],
i3:[function(a){H.l(a,"$isam")
if(this.f&&this.bD(a))a.preventDefault()},"$1","geG",4,0,3],
i8:[function(a){var z
H.l(a,"$isbq")
if(!this.f)return
z=this.cG(a)
if(this.b.ht(z))a.preventDefault()},"$1","geL",4,0,11],
i7:[function(a){var z
H.l(a,"$isbq")
if(!this.f)return
z=this.cG(a)
this.b.hp(z)},"$1","geK",4,0,11],
ia:[function(a){var z,y,x,w
H.l(a,"$isam")
z=this.a
z.focus()
this.f=!0
this.av(a)
if(this.x){y=this.ae(a)
x=this.aI(a)
if(this.d.cb(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ae(a)
w=this.ag(a)
if(this.c.cb(y,w))a.preventDefault()},"$1","geO",4,0,3],
ic:[function(a){var z,y,x
H.l(a,"$isam")
this.av(a)
z=this.ae(a)
if(this.x){y=this.aI(a)
if(this.d.aP(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aP(z,x))a.preventDefault()},"$1","geQ",4,0,3],
i5:[function(a){var z,y,x
H.l(a,"$isam")
if(!this.bD(a)){this.av(a)
z=this.ae(a)
if(this.x){y=this.aI(a)
if(this.d.aP(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aP(z,x))a.preventDefault()}},"$1","geI",4,0,3],
ib:[function(a){var z,y,x
H.l(a,"$isam")
this.av(a)
z=this.ae(a)
if(this.x){y=this.aI(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aO(z,x))a.preventDefault()},"$1","geP",4,0,3],
i4:[function(a){var z,y,x
H.l(a,"$isam")
if(!this.bD(a)){this.av(a)
z=this.ae(a)
if(this.x){y=this.aI(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aO(z,x))a.preventDefault()}},"$1","geH",4,0,3],
ie:[function(a){var z,y
H.l(a,"$isbF")
this.av(a)
z=new V.bX((a&&C.x).gfY(a),C.x.gfZ(a)).H(0,180)
if(this.x){if(this.d.hu(z))a.preventDefault()
return}if(this.r)return
y=this.ag(a)
if(this.c.hv(z,y))a.preventDefault()},"$1","geR",4,0,36],
ig:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ae(this.y)
v=this.ag(this.y)
this.d.eN(w,v,x)}},"$1","geS",4,0,6],
il:[function(a){var z
H.l(a,"$isb6")
this.a.focus()
this.f=!0
this.bM(a)
z=this.bG(a)
if(this.e.hs(z))a.preventDefault()},"$1","geY",4,0,10],
ij:[function(a){var z
H.l(a,"$isb6")
this.bM(a)
z=this.bG(a)
if(this.e.hq(z))a.preventDefault()},"$1","geW",4,0,10],
ik:[function(a){var z
H.l(a,"$isb6")
this.bM(a)
z=this.bG(a)
if(this.e.hr(z))a.preventDefault()},"$1","geX",4,0,10]}}],["","",,D,{"^":"",c8:{"^":"a;0a,0b,0c,0d",
ao:[function(a){var z
H.l(a,"$isF")
z=this.d
if(!(z==null))z.J(a)},function(){return this.ao(null)},"hU","$1","$0","gea",0,2,0],
$isV:1,
$isaA:1},V:{"^":"a;",$isaA:1},hG:{"^":"aZ;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
ao:function(a){var z=this.Q
if(!(z==null))z.J(a)},
eM:[function(a){var z
H.l(a,"$isF")
z=this.ch
if(!(z==null))z.J(a)},function(){return this.eM(null)},"i9","$1","$0","gcK",0,2,0],
ih:[function(a){var z,y,x
H.v(a,"$ish",[D.V],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.w)(a),++y){x=a[y]
if(x==null||this.e9(x))return!1}return!0},"$1","geU",4,0,37],
hY:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.V
H.v(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcK(),w={func:1,ret:-1,args:[D.F]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=H.l(b[u],"$isV")
if(t instanceof D.c8)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b0()
s.d=0
t.d=s}H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.cH(a,b,this,[z])
z.b=!0
this.ao(z)},"$2","geA",8,0,20],
ii:[function(a,b){var z,y,x,w,v,u
z=D.V
H.v(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcK(),w=0;w<b.length;b.length===y||(0,H.w)(b),++w){v=H.l(b[w],"$isV")
if(v instanceof D.c8)C.a.E(this.e,v)
u=v.d
if(u==null){u=new D.b0()
u.d=0
v.d=u}u.E(0,x)}z=new D.cI(a,b,this,[z])
z.b=!0
this.ao(z)},"$2","geV",8,0,20],
e9:function(a){var z=C.a.L(this.e,a)
return z},
$ash:function(){return[D.V]},
$asaZ:function(){return[D.V]}},ig:{"^":"a;",$isV:1,$isaA:1},iP:{"^":"a;",$isV:1,$isaA:1},j_:{"^":"a;",$isV:1,$isaA:1},j0:{"^":"a;",$isV:1,$isaA:1},j1:{"^":"a;",$isV:1,$isaA:1}}],["","",,V,{"^":"",
lZ:[function(a,b){if(typeof b!=="number")return b.Y()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","i_",8,0,35],
dt:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dO(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.h.a0("null",c)
return C.h.a0(C.i.dG($.m.$2(a,0)?0:a,b),c+b+1)},
bd:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isc",[P.x],"$asc")
z=H.b([],[P.f])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.w)(a),++w){v=V.G(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.O(z,u,C.h.a0(z[u],x))}return z},
dq:function(a,b){return C.i.hO(Math.pow(b,C.F.c5(Math.log(H.li(a))/Math.log(b))))},
a2:{"^":"a;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
c5:{"^":"a;a,b,c,d",
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
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
e8:{"^":"a;a,b,c,d,e,f,r,x,y",
a1:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.x])
return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e8))return!1
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
z=[P.x]
y=V.bd(H.b([this.a,this.d,this.r],z),3,0)
x=V.bd(H.b([this.b,this.e,this.x],z),3,0)
w=V.bd(H.b([this.c,this.f,this.y],z),3,0)
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
ar:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a1:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return z},
dq:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.B(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.B(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.B(u)
t=this.c
if(typeof t!=="number")return t.p()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.B(r)
q=this.d
if(typeof q!=="number")return q.p()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.p()
if(typeof k!=="number")return H.B(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.p()
if(typeof i!=="number")return H.B(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.B(g)
f=this.Q
if(typeof f!=="number")return f.p()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.B(d)
c=this.ch
if(typeof c!=="number")return c.p()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.cT()
a3=1/a2
a4=-w
a5=-i
return V.az((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
p:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.B(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.p()
if(typeof u!=="number")return H.B(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.p()
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
if(typeof f!=="number")return f.p()
e=this.f
if(typeof e!=="number")return e.p()
d=this.r
if(typeof d!=="number")return d.p()
c=this.x
if(typeof c!=="number")return c.p()
b=this.y
if(typeof b!=="number")return b.p()
a=this.z
if(typeof a!=="number")return a.p()
a0=this.Q
if(typeof a0!=="number")return a0.p()
a1=this.ch
if(typeof a1!=="number")return a1.p()
a2=this.cx
if(typeof a2!=="number")return a2.p()
a3=this.cy
if(typeof a3!=="number")return a3.p()
a4=this.db
if(typeof a4!=="number")return a4.p()
a5=this.dx
if(typeof a5!=="number")return a5.p()
return V.az(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ci:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
v=this.c
u=a.c
if(typeof v!=="number")return v.p()
t=this.e
if(typeof t!=="number")return t.p()
s=this.f
if(typeof s!=="number")return s.p()
r=this.r
if(typeof r!=="number")return r.p()
q=this.y
if(typeof q!=="number")return q.p()
p=this.z
if(typeof p!=="number")return p.p()
o=this.Q
if(typeof o!=="number")return o.p()
return new V.M(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
v=this.c
u=a.c
if(typeof v!=="number")return v.p()
t=this.d
if(typeof t!=="number")return H.B(t)
s=this.e
if(typeof s!=="number")return s.p()
r=this.f
if(typeof r!=="number")return r.p()
q=this.r
if(typeof q!=="number")return q.p()
p=this.x
if(typeof p!=="number")return H.B(p)
o=this.y
if(typeof o!=="number")return o.p()
n=this.z
if(typeof n!=="number")return n.p()
m=this.Q
if(typeof m!=="number")return m.p()
l=this.ch
if(typeof l!=="number")return H.B(l)
return new V.aB(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ar))return!1
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
i:function(a){return this.F()},
dn:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.x]
y=V.bd(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bd(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bd(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bd(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
F:function(){return this.dn("",3,0)},
v:function(a){return this.dn(a,3,0)},
q:{
az:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ar(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cT:function(){return V.az(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
e9:function(a,b,c){var z,y,x,w,v
z=c.H(0,Math.sqrt(c.M(c)))
y=b.aK(z)
x=y.H(0,Math.sqrt(y.M(y)))
w=z.aK(x)
v=new V.M(a.a,a.b,a.c)
return V.az(x.a,w.a,z.a,x.aF(0).M(v),x.b,w.b,z.b,w.aF(0).M(v),x.c,w.c,z.c,z.aF(0).M(v),0,0,0,1)}}},
W:{"^":"a;a,b",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
aB:{"^":"a;a,b,c",
Y:function(a,b){return new V.aB(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aB))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
eg:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eg))return!1
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
el:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.el))return!1
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
em:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.el(a,b,c,d)}}},
bX:{"^":"a;a,b",
hc:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return Math.sqrt(z*z+y*y)},"$0","gm",1,0,21],
H:function(a,b){var z,y
if($.m.$2(b,0))return new V.bX(0,0)
z=this.a
if(typeof z!=="number")return z.H()
y=this.b
if(typeof y!=="number")return y.H()
return new V.bX(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bX))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
M:{"^":"a;a,b,c",
hc:[function(a){return Math.sqrt(this.M(this))},"$0","gm",1,0,21],
M:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c7:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.M(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aK:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.M(z*y-x*w,x*v-u*y,u*w-z*v)},
C:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
aF:function(a){return new V.M(-this.a,-this.b,-this.c)},
H:function(a,b){if($.m.$2(b,0))return new V.M(0,0,0)
return new V.M(this.a/b,this.b/b,this.c/b)},
dr:function(){if(!$.m.$2(0,this.a))return!1
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
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}}],["","",,U,{"^":"",dH:{"^":"bU;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.ad()
this.b=z}return z},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
q:{
dI:function(a){var z=new U.dH()
z.a=a
return z}}},bU:{"^":"fZ;"},en:{"^":"bU;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.ad()
this.y=z}return z},
at:function(a){var z=this.y
if(!(z==null))z.J(a)},
sdI:function(a){var z,y
a=V.dt(a,0,6.283185307179586)
z=this.a
if(!$.m.$2(z,a)){y=this.a
this.a=a
z=new D.S("yaw",y,a,this,[P.x])
z.b=!0
this.at(z)}},
sdw:function(a,b){var z,y
b=V.dt(b,0,6.283185307179586)
z=this.b
if(!$.m.$2(z,b)){y=this.b
this.b=b
z=new D.S("pitch",y,b,this,[P.x])
z.b=!0
this.at(z)}},
sdC:function(a){var z,y
a=V.dt(a,0,6.283185307179586)
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
z=new D.S("roll",y,a,this,[P.x])
z.b=!0
this.at(z)}},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.en))return!1
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
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"}}}],["","",,M,{"^":"",hi:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ap:[function(a){var z
H.l(a,"$isF")
z=this.x
if(!(z==null))z.J(a)},function(){return this.ap(null)},"hV","$1","$0","ga8",0,2,0],
i1:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aO
H.v(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga8(),w={func:1,ret:-1,args:[D.F]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.gV()==null){s=new D.b0()
s.d=0
t.sV(s)}s=t.gV()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.cH(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","geE",8,0,7],
i2:[function(a,b){var z,y,x,w,v,u
z=E.aO
H.v(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga8(),w=0;w<b.length;b.length===y||(0,H.w)(b),++w){v=b[w]
if(v!=null){if(v.gV()==null){u=new D.b0()
u.d=0
v.sV(u)}v.gV().E(0,x)}}z=new D.cI(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","geF",8,0,7],
sdE:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().E(0,this.ga8())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.ga8())
z=new D.S("technique",y,this.c,this,[O.d1])
z.b=!0
this.ap(z)}},
gB:function(){var z=this.x
if(z==null){z=D.ad()
this.x=z}return z},
aE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dB(this.c)
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
u=C.i.a6(v.a*x)
if(typeof w!=="number")return H.B(w)
t=C.i.a6(v.b*w)
s=C.i.a6(v.c*x)
a.c=s
v=C.i.a6(v.d*w)
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
a.cy.dA(n)
y=$.ef
if(y==null){y=V.e9(new V.aB(0,0,0),new V.M(0,1,0),new V.M(0,0,-1))
$.ef=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.p(0,m)}a.db.dA(m)
z=this.c
if(z!=null)z.bp(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.w();)z.d.bp(0,a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.w();)z.d.aE(a)
this.a.toString
a.cy.cc()
a.db.cc()
this.b.toString
a.dz()},
$ismz:1}}],["","",,A,{"^":"",dx:{"^":"a;a,b,c"},fT:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
h1:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
h_:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},hU:{"^":"ep;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aa,0a4,0b6,0d1,0b7,0b8,0d2,0d3,0b9,0ba,0d4,0d5,0bb,0bc,0d6,0d7,0bd,0d8,0d9,0be,0da,0dc,0bf,0bg,0bh,0dd,0de,0bi,0bj,0df,0dg,0bk,0dh,0c_,0di,0c0,0dj,0c1,0dk,0c2,0dl,0c3,0dm,0c4,a,b,0c,0d,0e,0f,0r,0x,0y",
e0:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.fm(z)
a2.fu(z)
a2.fn(z)
a2.fE(z)
a2.fF(z)
a2.fw(z)
a2.fJ(z)
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
x.fq(z)
x.fl(z)
x.fo(z)
x.fs(z)
x.fC(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.fA(z)
x.fB(z)}x.fv(z)
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
p=H.b([],[P.f])
if(x.b!==C.b)C.a.h(p,"ambient()")
if(x.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.l(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.fp(z)
x.fz(z)
x.fD(z)
x.fG(z)
x.fH(z)
x.fI(z)
x.ft(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.f])
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
n="vec4("+C.a.l(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.cH(s,35633)
this.f=this.cH(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.dg(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.p(P.o("Failed to link shader: "+H.i(m)))}this.ff()
this.fh()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.j(this.y.n(0,"invViewMat"),"$isaC")
if(y)this.dy=H.j(this.y.n(0,"objMat"),"$isaC")
if(w)this.fr=H.j(this.y.n(0,"viewObjMat"),"$isaC")
this.fy=H.j(this.y.n(0,"projViewObjMat"),"$isaC")
if(a2.x2)this.k1=H.j(this.y.n(0,"txt2DMat"),"$isd6")
if(a2.y1)this.k2=H.j(this.y.n(0,"txtCubeMat"),"$isaC")
if(a2.y2)this.k3=H.j(this.y.n(0,"colorMat"),"$isaC")
this.r1=H.b([],[A.aC])
y=a2.aa
if(y>0){this.k4=H.l(this.y.n(0,"bendMatCount"),"$isK")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaC"))}}y=a2.a
if(y!==C.b){this.r2=H.j(this.y.n(0,"emissionClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.c:this.rx=H.j(this.y.n(0,"emissionTxt"),"$isae")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$isK")
break
case C.d:this.ry=H.j(this.y.n(0,"emissionTxt"),"$isaf")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$isK")
break}}y=a2.b
if(y!==C.b){this.x2=H.j(this.y.n(0,"ambientClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.c:this.y1=H.j(this.y.n(0,"ambientTxt"),"$isae")
this.aa=H.j(this.y.n(0,"nullAmbientTxt"),"$isK")
break
case C.d:this.y2=H.j(this.y.n(0,"ambientTxt"),"$isaf")
this.aa=H.j(this.y.n(0,"nullAmbientTxt"),"$isK")
break}}y=a2.c
if(y!==C.b){this.a4=H.j(this.y.n(0,"diffuseClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.c:this.b6=H.j(this.y.n(0,"diffuseTxt"),"$isae")
this.b7=H.j(this.y.n(0,"nullDiffuseTxt"),"$isK")
break
case C.d:this.d1=H.j(this.y.n(0,"diffuseTxt"),"$isaf")
this.b7=H.j(this.y.n(0,"nullDiffuseTxt"),"$isK")
break}}y=a2.d
if(y!==C.b){this.b8=H.j(this.y.n(0,"invDiffuseClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.c:this.d2=H.j(this.y.n(0,"invDiffuseTxt"),"$isae")
this.b9=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$isK")
break
case C.d:this.d3=H.j(this.y.n(0,"invDiffuseTxt"),"$isaf")
this.b9=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$isK")
break}}y=a2.e
if(y!==C.b){this.bc=H.j(this.y.n(0,"shininess"),"$isU")
this.ba=H.j(this.y.n(0,"specularClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.c:this.d4=H.j(this.y.n(0,"specularTxt"),"$isae")
this.bb=H.j(this.y.n(0,"nullSpecularTxt"),"$isK")
break
case C.d:this.d5=H.j(this.y.n(0,"specularTxt"),"$isaf")
this.bb=H.j(this.y.n(0,"nullSpecularTxt"),"$isK")
break}}switch(a2.f){case C.b:break
case C.e:break
case C.c:this.d6=H.j(this.y.n(0,"bumpTxt"),"$isae")
this.bd=H.j(this.y.n(0,"nullBumpTxt"),"$isK")
break
case C.d:this.d7=H.j(this.y.n(0,"bumpTxt"),"$isaf")
this.bd=H.j(this.y.n(0,"nullBumpTxt"),"$isK")
break}if(a2.dy){this.d8=H.j(this.y.n(0,"envSampler"),"$isaf")
this.d9=H.j(this.y.n(0,"nullEnvTxt"),"$isK")
y=a2.r
if(y!==C.b){this.be=H.j(this.y.n(0,"reflectClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.c:this.da=H.j(this.y.n(0,"reflectTxt"),"$isae")
this.bf=H.j(this.y.n(0,"nullReflectTxt"),"$isK")
break
case C.d:this.dc=H.j(this.y.n(0,"reflectTxt"),"$isaf")
this.bf=H.j(this.y.n(0,"nullReflectTxt"),"$isK")
break}}y=a2.x
if(y!==C.b){this.bg=H.j(this.y.n(0,"refraction"),"$isU")
this.bh=H.j(this.y.n(0,"refractClr"),"$isI")
switch(y){case C.b:break
case C.e:break
case C.c:this.dd=H.j(this.y.n(0,"refractTxt"),"$isae")
this.bi=H.j(this.y.n(0,"nullRefractTxt"),"$isK")
break
case C.d:this.de=H.j(this.y.n(0,"refractTxt"),"$isaf")
this.bi=H.j(this.y.n(0,"nullRefractTxt"),"$isK")
break}}}y=a2.y
if(y!==C.b){this.bj=H.j(this.y.n(0,"alpha"),"$isU")
switch(y){case C.b:break
case C.e:break
case C.c:this.df=H.j(this.y.n(0,"alphaTxt"),"$isae")
this.bk=H.j(this.y.n(0,"nullAlphaTxt"),"$isK")
break
case C.d:this.dg=H.j(this.y.n(0,"alphaTxt"),"$isaf")
this.bk=H.j(this.y.n(0,"nullAlphaTxt"),"$isK")
break}}this.c_=H.b([],[A.eS])
this.c0=H.b([],[A.eT])
this.c1=H.b([],[A.eU])
this.c2=H.b([],[A.eV])
this.c3=H.b([],[A.eW])
this.c4=H.b([],[A.eX])
if(a2.k2){y=a2.z
if(y>0){this.dh=H.l(this.y.n(0,"dirLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.c_;(x&&C.a).h(x,new A.eS(l,k,j))}}y=a2.Q
if(y>0){this.di=H.l(this.y.n(0,"pntLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isU")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isU")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isU")
x=this.c0;(x&&C.a).h(x,new A.eT(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dj=H.l(this.y.n(0,"spotLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isI")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isU")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isU")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isU")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isU")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isU")
x=this.c1;(x&&C.a).h(x,new A.eU(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dk=H.l(this.y.n(0,"txtDirLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isI")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isI")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isK")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isae")
x=this.c2;(x&&C.a).h(x,new A.eV(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dl=H.l(this.y.n(0,"txtPntLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isd6")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isI")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isK")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isU")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isU")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isU")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isaf")
x=this.c3;(x&&C.a).h(x,new A.eW(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dm=H.l(this.y.n(0,"txtSpotLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isI")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isI")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isK")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isI")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isU")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isU")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isU")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isU")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isU")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isae")
x=this.c4;(x&&C.a).h(x,new A.eX(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a2:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dS(c)
b.a.uniform1i(b.d,0)}},
Z:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
hT:function(a,b){var z,y
z=a.a4
y=new A.hU(b,z)
y.e3(b,z)
y.e0(a,b)
return y}}},hX:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aa,a4,b6",
fm:function(a){var z,y,x
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
fu:function(a){var z
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
fn:function(a){var z
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
fE:function(a){var z,y
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
fF:function(a){var z,y
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
fw:function(a){var z
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
fJ:function(a){var z
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
af:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.aW(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fq:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.af(a,z,"emission")
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
fl:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.af(a,z,"ambient")
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
fo:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.af(a,z,"diffuse")
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
fs:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.af(a,z,"invDiffuse")
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
fC:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.af(a,z,"specular")
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
fv:function(a){var z,y
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
fA:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.af(a,z,"reflect")
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
fB:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.af(a,z,"refract")
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
fp:function(a){var z,y
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
fz:function(a){var z,y
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
fD:function(a){var z,y
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
fG:function(a){var z,y,x
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
fH:function(a){var z,y,x
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
fI:function(a){var z,y,x
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
ft:function(a){var z
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
i:function(a){return this.a4}},eS:{"^":"a;a,b,c"},eV:{"^":"a;a,b,c,d,e,f,r,x"},eT:{"^":"a;a,b,c,d,e,f,r"},eW:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eU:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eX:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ep:{"^":"cz;",
e3:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cH:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dg(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.o("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
ff:function(){var z,y,x,w,v,u
z=H.b([],[A.dx])
y=this.a
x=H.a0(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dx(y,v.name,u))}this.x=new A.fT(z)},
fh:function(){var z,y,x,w,v,u
z=H.b([],[A.a3])
y=this.a
x=H.a0(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.fX(v.type,v.size,v.name,u))}this.y=new A.ji(z)},
as:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.K(z,y,b,c)
else return A.d5(z,y,b,a,c)},
ep:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ae(z,y,b,c)
else return A.d5(z,y,b,a,c)},
eq:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.af(z,y,b,c)
else return A.d5(z,y,b,a,c)},
b3:function(a,b){return new P.f5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fX:function(a,b,c,d){switch(a){case 5120:return this.as(b,c,d)
case 5121:return this.as(b,c,d)
case 5122:return this.as(b,c,d)
case 5123:return this.as(b,c,d)
case 5124:return this.as(b,c,d)
case 5125:return this.as(b,c,d)
case 5126:return new A.U(this.a,this.r,c,d)
case 35664:return new A.jd(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.jg(this.a,this.r,c,d)
case 35667:return new A.je(this.a,this.r,c,d)
case 35668:return new A.jf(this.a,this.r,c,d)
case 35669:return new A.jh(this.a,this.r,c,d)
case 35674:return new A.jk(this.a,this.r,c,d)
case 35675:return new A.d6(this.a,this.r,c,d)
case 35676:return new A.aC(this.a,this.r,c,d)
case 35678:return this.ep(b,c,d)
case 35680:return this.eq(b,c,d)
case 35670:throw H.d(this.b3("BOOL",c))
case 35671:throw H.d(this.b3("BOOL_VEC2",c))
case 35672:throw H.d(this.b3("BOOL_VEC3",c))
case 35673:throw H.d(this.b3("BOOL_VEC4",c))
default:throw H.d(P.o("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},c6:{"^":"a;a,b",
i:function(a){return this.b}},a3:{"^":"a;"},ji:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
h5:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.h5("\n")}},K:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},je:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},jf:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},jh:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},jc:{"^":"a3;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.i(this.c)},
q:{
d5:function(a,b,c,d,e){var z=new A.jc(a,b,c,e)
z.f=d
z.e=P.hL(d,0,!1,P.E)
return z}}},U:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},jd:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},I:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},jg:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},jk:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},d6:{"^":"a3;a,b,c,d",
a7:function(a){var z=new Float32Array(H.bI(H.v(a,"$isc",[P.x],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aC:{"^":"a3;a,b,c,d",
a7:function(a){var z=new Float32Array(H.bI(H.v(a,"$isc",[P.x],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},ae:{"^":"a3;a,b,c,d",
dS:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},af:{"^":"a3;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
cp:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bH:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.M(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.M(t+h,s+f,r+g)
z.b=q
p=new V.M(t-h,s-f,r-g)
z.c=p
o=new V.M(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cp(y)
k=F.cp(z.b)
j=F.lN(d,e,new F.l6(z,F.cp(z.c),F.cp(z.d),k,l,c),b)
if(j!=null)a.ca(j)},
lN:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.av,P.x,P.x]})
if(a<1)return
if(b<1)return
z=F.er()
y=H.b([],[F.av])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.d7(null,null,new V.c5(u,0,0,1),null,null,new V.W(w,1),null,null,0)
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
t=F.d7(null,null,new V.c5(o,n,m,1),null,null,new V.W(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bY(d))}}z.d.fK(a+1,b+1,y)
return z},
l6:{"^":"q:38;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.c7(z.b,b).c7(z.d.c7(z.c,b),c)
z=new V.aB(y.a,y.b,y.c)
if(!J.T(a.f,z)){a.f=z
z=a.a
if(z!=null)z.U()}a.shM(y.H(0,Math.sqrt(y.M(y))))
z=1-b
x=1-c
x=new V.eg(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.T(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.U()}}},
al:{"^":"a;0a,0b,0c,0d,0e",
aj:function(){if(!this.gaL()){C.a.E(this.a.a.d.b,this)
this.a.a.U()}this.bI()
this.bJ()
this.f0()},
fc:function(a){this.a=a
C.a.h(a.d.b,this)},
fd:function(a){this.b=a
C.a.h(a.d.c,this)},
fe:function(a){this.c=a
C.a.h(a.d.d,this)},
bI:function(){var z=this.a
if(z!=null){C.a.E(z.d.b,this)
this.a=null}},
bJ:function(){var z=this.b
if(z!=null){C.a.E(z.d.c,this)
this.b=null}},
f0:function(){var z=this.c
if(z!=null){C.a.E(z.d.d,this)
this.c=null}},
gaL:function(){return this.a==null||this.b==null||this.c==null},
ei:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.M(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dr())return
return v.H(0,Math.sqrt(v.M(v)))},
el:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.Y(0,y)
z=new V.M(z.a,z.b,z.c)
v=z.H(0,Math.sqrt(z.M(z)))
z=w.Y(0,y)
z=new V.M(z.a,z.b,z.c)
z=v.aK(z.H(0,Math.sqrt(z.M(z))))
return z.H(0,Math.sqrt(z.M(z)))},
bV:function(){if(this.d!=null)return!0
var z=this.ei()
if(z==null){z=this.el()
if(z==null)return!1}this.d=z
this.a.a.U()
return!0},
eh:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.M(0,0,0)
if(y!=null)v=v.C(0,y)
if(x!=null)v=v.C(0,x)
if(w!=null)v=v.C(0,w)
if(v.dr())return
return v.H(0,Math.sqrt(v.M(v)))},
ek:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.Y(0,u)
z=new V.M(z.a,z.b,z.c)
m=z.H(0,Math.sqrt(z.M(z)))
if(o.a-p.a<0)m=m.aF(0)}else{l=(z-q.b)/n
z=r.Y(0,u)
z=new V.aB(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).Y(0,x)
z=new V.M(z.a,z.b,z.c)
m=z.H(0,Math.sqrt(z.M(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.aF(0)}z=this.d
if(z!=null){k=z.H(0,Math.sqrt(z.M(z)))
z=k.aK(m)
z=z.H(0,Math.sqrt(z.M(z))).aK(k)
m=z.H(0,Math.sqrt(z.M(z)))}return m},
bT:function(){if(this.e!=null)return!0
var z=this.eh()
if(z==null){z=this.ek()
if(z==null)return!1}this.e=z
this.a.a.U()
return!0},
gfR:function(a){if(J.T(this.a,this.b))return!0
if(J.T(this.b,this.c))return!0
if(J.T(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y
if(this.gaL())return a+"disposed"
z=a+C.h.a0(J.a1(this.a.e),0)+", "+C.h.a0(J.a1(this.b.e),0)+", "+C.h.a0(J.a1(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.v("")},
q:{
bP:function(a,b,c){var z,y,x
z=new F.al()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.fc(a)
z.fd(b)
z.fe(c)
C.a.h(z.a.a.d.b,z)
z.a.a.U()
return z}}},
hm:{"^":"a;"},
iO:{"^":"hm;",
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
cP:{"^":"a;0a,0b",
aj:function(){if(!this.gaL()){C.a.E(this.a.a.c.b,this)
this.a.a.U()}this.bI()
this.bJ()},
bI:function(){var z=this.a
if(z!=null){C.a.E(z.c.b,this)
this.a=null}},
bJ:function(){var z=this.b
if(z!=null){C.a.E(z.c.c,this)
this.b=null}},
gaL:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){if(this.gaL())return a+"disposed"
return a+C.h.a0(J.a1(this.a.e),0)+", "+C.h.a0(J.a1(this.b.e),0)},
F:function(){return this.v("")}},
hH:{"^":"a;"},
jb:{"^":"hH;",
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
cV:{"^":"a;0a",
aj:function(){var z=this.a
if(z!=null){C.a.E(z.a.b.b,this)
this.a.a.U()}this.f_()},
f_:function(){var z=this.a
if(z!=null){C.a.E(z.b.b,this)
this.a=null}},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a0(J.a1(z.e),0)},
F:function(){return this.v("")}},
eq:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.ad()
this.e=z}return z},
ca:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.u()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){v=z[w]
this.a.h(0,v.fV())}this.a.u()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){u=z[w]
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
s=new F.cV()
if(r.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.J(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){q=z[w]
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
t=new F.cP()
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
if(!(t==null))t.J(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){m=z[w]
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
F.bP(p,o,l)}z=this.e
if(!(z==null))z.ac(0)},
ax:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ax()||!1
if(!this.a.ax())y=!1
z=this.e
if(!(z==null))z.ac(0)
return y},
ev:function(a,b,c,d,e){var z,y,x
H.v(d,"$isc",[F.av],"$asc")
H.v(e,"$isc",[P.E],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.aM(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hh:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.av],x=[P.E];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.ev(a,v,y,u,t))b.ca(u)}this.a.u()
this.c.ce()
this.d.ce()
this.b.hA()
this.c.cf(new F.jb())
this.d.cf(new F.iO())
z=this.e
if(!(z==null))z.ac(0)},
fP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aG()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$bD().a)!==0)++w
if((x&$.$get$bE().a)!==0)++w
if((x&$.$get$b8().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
v=b.gcq(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.x
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dB])
for(r=0,q=0;q<w;++q){p=b.fM(q)
o=p.gcq(p)
C.a.O(s,q,new Z.dB(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hd(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.O(t,l,m[k]);++l}}r+=o}H.v(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bI(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dC(new Z.f2(34962,j),s,b)
i.b=H.b([],[Z.cc])
if(this.b.b.length!==0){x=P.E
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)}f=Z.d8(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cc(0,h.length,f))}if(this.c.b.length!==0){x=P.E
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)}f=Z.d8(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cc(1,h.length,f))}if(this.d.b.length!==0){x=P.E
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
C.a.h(h,g.e)}f=Z.d8(y,34963,H.v(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cc(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.l(z,"\n")},
a5:function(a){var z=this.e
if(!(z==null))z.J(a)},
U:function(){return this.a5(null)},
q:{
er:function(){var z,y
z=new F.eq()
y=new F.js(z)
y.b=!1
y.c=H.b([],[F.av])
z.a=y
y=new F.iI(z)
y.b=H.b([],[F.cV])
z.b=y
y=new F.iH(z)
y.b=H.b([],[F.cP])
z.c=y
y=new F.iG(z)
y.b=H.b([],[F.al])
z.d=y
z.e=null
return z}}},
iG:{"^":"a;a,0b",
fK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isc",[F.av],"$asc")
z=H.b([],[F.al])
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
C.a.h(z,F.bP(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bP(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bP(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bP(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cf:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.aM(0,v,t)){v.aj()
break}}}}},
ce:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.gfR(x)
if(y)x.aj()}},
ax:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bV())x=!1
return x},
bU:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bT())x=!1
return x},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
F:function(){return this.v("")}},
iH:{"^":"a;a,0b",
gm:function(a){return this.b.length},
cf:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.aM(0,v,t)){v.aj()
break}}}}},
ce:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.T(x.a,x.b)
if(y)x.aj()}},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.f])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.l(z,"\n")},
F:function(){return this.v("")}},
iI:{"^":"a;a,0b",
gm:function(a){return this.b.length},
hA:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aj()}},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
F:function(){return this.v("")}},
av:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bY:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.d7(this.cx,x,u,z,y,w,v,a,t)},
fV:function(){return this.bY(null)},
shM:function(a){var z
if(!J.T(this.z,a)){this.z=a
z=this.a
if(z!=null)z.U()}},
hd:function(a){var z,y
z=J.J(a)
if(z.t(a,$.$get$aG())){z=this.f
y=[P.x]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aF())){z=this.r
y=[P.x]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aE())){z=this.x
y=[P.x]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aH())){z=this.y
y=[P.x]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.t(a,$.$get$aI())){z=this.z
y=[P.x]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bD())){z=this.Q
y=[P.x]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bE())){z=this.Q
y=[P.x]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$b8()))return H.b([this.ch],[P.x])
else if(z.t(a,$.$get$aD())){z=this.cx
y=[P.x]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.x])},
bV:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.M(0,0,0)
this.d.K(0,new F.jC(z))
z=z.a
this.r=z.H(0,Math.sqrt(z.M(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
bT:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.M(0,0,0)
this.d.K(0,new F.jB(z))
z=z.a
this.x=z.H(0,Math.sqrt(z.M(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.ac(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y,x
z=H.b([],[P.f])
C.a.h(z,C.h.a0(J.a1(this.e),0))
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
x=C.a.l(z,", ")
return a+"{"+x+"}"},
F:function(){return this.v("")},
q:{
d7:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.av()
y=new F.jA(z)
y.b=H.b([],[F.cV])
z.b=y
y=new F.jw(z)
x=[F.cP]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.jt(z)
x=[F.al]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$f_()
z.e=0
y=$.$get$aG()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aF().a)!==0?e:null
z.x=(x&$.$get$aE().a)!==0?b:null
z.y=(x&$.$get$aH().a)!==0?f:null
z.z=(x&$.$get$aI().a)!==0?g:null
z.Q=(x&$.$get$f0().a)!==0?c:null
z.ch=(x&$.$get$b8().a)!==0?i:0
z.cx=(x&$.$get$aD().a)!==0?a:null
return z}}},
jC:{"^":"q:4;a",
$1:function(a){var z,y
H.l(a,"$isal")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
jB:{"^":"q:4;a",
$1:function(a){var z,y
H.l(a,"$isal")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.C(0,z)}}},
js:{"^":"a;a,0b,0c",
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
this.a.U()
return!0},
gm:function(a){return this.c.length},
ax:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bV()
return!0},
bU:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bT()
return!0},
fQ:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.H(0,Math.sqrt(u*u+t*t+s*s))
if(!J.T(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
this.u()
z=H.b([],[P.f])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
F:function(){return this.v("")}},
jt:{"^":"a;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
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
K:function(a,b){H.k(b,{func:1,ret:-1,args:[F.al]})
C.a.K(this.b,b)
C.a.K(this.c,new F.ju(this,b))
C.a.K(this.d,new F.jv(this,b))},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
F:function(){return this.v("")}},
ju:{"^":"q:4;a,b",
$1:function(a){H.l(a,"$isal")
if(!J.T(a.a,this.a))this.b.$1(a)}},
jv:{"^":"q:4;a,b",
$1:function(a){var z
H.l(a,"$isal")
z=this.a
if(!J.T(a.a,z)&&!J.T(a.b,z))this.b.$1(a)}},
jw:{"^":"a;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
F:function(){return this.v("")}},
jy:{"^":"a;"},
jx:{"^":"jy;",
aM:function(a,b,c){return J.T(b.f,c.f)}},
jz:{"^":"a;"},
i9:{"^":"jz;",
ca:function(a){var z,y,x,w,v,u,t,s
H.v(a,"$isc",[F.av],"$asc")
z=new V.M(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.M(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.H(0,Math.sqrt(z.M(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){t=a[x]
s=z.H(0,Math.sqrt(u))
if(!J.T(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.J(null)}}}return}},
jA:{"^":"a;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.l(z,"\n")},
F:function(){return this.v("")}}}],["","",,O,{"^":"",hS:{"^":"d1;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gB:function(){var z=this.dy
if(z==null){z=D.ad()
this.dy=z}return z},
T:[function(a){var z
H.l(a,"$isF")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.T(null)},"ec","$1","$0","gaY",0,2,0],
f3:[function(a){H.l(a,"$isF")
this.a=null
this.T(a)},function(){return this.f3(null)},"im","$1","$0","gf2",0,2,0],
hZ:[function(a,b){var z=V.ar
z=new D.cH(a,H.v(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.T(z)},"$2","geB",8,0,22],
i_:[function(a,b){var z=V.ar
z=new D.cI(a,H.v(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.T(z)},"$2","geC",8,0,22],
cE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.W(z.e.length+3,4)*4
x=C.f.W(z.f.length+3,4)*4
w=C.f.W(z.r.length+3,4)*4
v=C.f.W(z.x.length+3,4)*4
u=C.f.W(z.y.length+3,4)*4
t=C.f.W(z.z.length+3,4)*4
s=C.f.W(this.e.a.length+3,4)*4
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
a6=$.$get$aG()
if(c){z=$.$get$aF()
a6=new Z.b7(a6.a|z.a)}if(b){z=$.$get$aE()
a6=new Z.b7(a6.a|z.a)}if(a){z=$.$get$aH()
a6=new Z.b7(a6.a|z.a)}if(a0){z=$.$get$aI()
a6=new Z.b7(a6.a|z.a)}if(a2){z=$.$get$aD()
a6=new Z.b7(a6.a|z.a)}return new A.hX(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
N:function(a,b){H.v(a,"$isc",[T.d2],"$asc")
if(b!=null)if(!C.a.L(a,b)){b.a=a.length
C.a.h(a,b)}},
bp:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.z(z,0)]);z.w();){y=z.d
x=new V.M(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ci(x)}}},
hC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cE()
y=a.fr.j(0,z.a4)
if(y==null){y=A.hT(z,a.a)
x=y.b
if(x.length===0)H.p(P.o("May not cache a shader with no name."))
if(a.fr.d_(0,x))H.p(P.o('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.O(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.b6
z=b.e
if(!(z instanceof Z.dC)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.ax()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.bU()
t.a.bU()
t=t.e
if(!(t==null))t.ac(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.fQ()
s=s.e
if(!(s==null))s.ac(0)}q=b.d.fP(new Z.jD(a.a),v)
q.aB($.$get$aG()).e=this.a.Q.c
if(z)q.aB($.$get$aF()).e=this.a.cx.c
if(u)q.aB($.$get$aE()).e=this.a.ch.c
if(w.rx)q.aB($.$get$aH()).e=this.a.cy.c
if(t)q.aB($.$get$aI()).e=this.a.db.c
if(w.x1)q.aB($.$get$aD()).e=this.a.dx.c
b.e=q}z=T.d2
p=H.b([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.h1()
if(w.fx){u=this.a
t=a.dx
t=t.gR(t)
u=u.dy
u.toString
u.a7(t.a1(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gR(t)
s=a.dx
s=t.p(0,s.gR(s))
a.cx=s
t=s}u=u.fr
u.toString
u.a7(t.a1(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghx()
s=a.dx
s=t.p(0,s.gR(s))
a.ch=s
t=s}u=u.fy
u.toString
u.a7(t.a1(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.a7(t.a1(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.a7(t.a1(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.a7(C.G.a1(t,!0))}if(w.aa>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.x],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.e(s,n)
s=s[n]
t.toString
H.l(s,"$isar")
t=t.r1
if(n>=t.length)return H.e(t,n)
t=t[n]
m=new Float32Array(H.bI(H.v(s.a1(0,!0),"$isc",u,"$asc")))
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
case C.c:this.N(p,this.f.d)
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
case C.d:this.N(p,this.f.e)
u=this.a
t=this.f.e
u.Z(u.ry,u.x1,t)
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
case C.c:this.N(p,this.r.d)
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
case C.d:this.N(p,this.r.e)
u=this.a
t=this.r.e
u.Z(u.y2,u.aa,t)
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
u=u.a4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.N(p,this.x.d)
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
case C.d:this.N(p,this.x.e)
u=this.a
t=this.x.e
u.Z(u.d1,u.b7,t)
t=this.a
u=this.x.f
t=t.a4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.e:u=this.a
t=this.y.f
u=u.b8
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.N(p,this.y.d)
u=this.a
t=this.y.d
u.a2(u.d2,u.b9,t)
t=this.a
u=this.y.f
t=t.b8
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.N(p,this.y.e)
u=this.a
t=this.y.e
u.Z(u.d3,u.b9,t)
t=this.a
u=this.y.f
t=t.b8
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.e:u=this.a
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
case C.c:this.N(p,this.z.d)
u=this.a
t=this.z.d
u.a2(u.d4,u.bb,t)
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
case C.d:this.N(p,this.z.e)
u=this.a
t=this.z.e
u.Z(u.d5,u.bb,t)
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
u=this.a.dh
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
s=this.a.c_
if(k>=s.length)return H.e(s,k)
h=s[k]
s=l.ci(i.a)
r=s.a
g=s.b
f=s.c
f=s.H(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.di
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
s=this.a.c0
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaQ(i)
r=h.b
g=s.gck(s)
f=s.gcl(s)
s=s.gcm(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aU(i.gaQ(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gai(i)
f=h.d
g=s.gbn()
r=s.gaV()
s=s.gb4()
f.a.uniform3f(f.d,g,r,s)
s=i.gbN()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbO()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbP()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dj
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
s=this.a.c1
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaQ(i)
r=h.b
g=s.gck(s)
f=s.gcl(s)
s=s.gcm(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbZ(i).is()
f=h.c
g=s.gay(s)
r=s.gaz(s)
s=s.gaA()
f.a.uniform3f(f.d,g,r,s)
s=l.aU(i.gaQ(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gai(i)
r=h.e
g=s.gbn()
f=s.gaV()
s=s.gb4()
r.a.uniform3f(r.d,g,f,s)
s=i.giq()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gio()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbN()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbO()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbP()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dk
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
r=this.a.c2
if(k>=r.length)return H.e(r,k)
h=r[k]
r=i.gaS()
H.v(p,"$isc",s,"$asc")
if(!C.a.L(p,r)){r.sb0(p.length)
C.a.h(p,r)}r=i.gbZ(i)
g=h.d
f=r.gay(r)
e=r.gaz(r)
r=r.gaA()
g.a.uniform3f(g.d,f,e,r)
r=i.ghT()
e=h.b
f=r.gay(r)
g=r.gaz(r)
r=r.gaA()
e.a.uniform3f(e.d,f,g,r)
r=i.gaR(i)
g=h.c
f=r.gay(r)
e=r.gaz(r)
r=r.gaA()
g.a.uniform3f(g.d,f,e,r)
r=l.ci(i.gbZ(i))
e=r.a
f=r.b
g=r.c
g=r.H(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gai(i)
f=h.f
e=g.gbn()
r=g.gaV()
g=g.gb4()
f.a.uniform3f(f.d,e,r,g)
g=i.gaS()
r=g.gc9(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gex()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb0())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dl
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.y,t=u.length,s=[P.x],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
g=this.a.c3
if(k>=g.length)return H.e(g,k)
h=g[k]
g=i.gaS()
H.v(p,"$isc",r,"$asc")
if(!C.a.L(p,g)){g.sb0(p.length)
C.a.h(p,g)}d=l.p(0,i.gR(i))
g=i.gR(i).aU(new V.aB(0,0,0))
f=h.b
e=g.gck(g)
c=g.gcl(g)
g=g.gcm(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aU(new V.aB(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dq(0)
c=h.d
m=new Float32Array(H.bI(H.v(new V.e8(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a1(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gai(i)
g=h.e
e=c.gbn()
f=c.gaV()
c=c.gb4()
g.a.uniform3f(g.d,e,f,c)
c=i.gaS()
g=c.gc9(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gc9(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gir(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbN()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbO()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbP()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dm
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.w)(u),++j){i=u[j]
s=this.a.c4
if(k>=s.length)return H.e(s,k)
h=s[k]
s=i.gaS()
H.v(p,"$isc",z,"$asc")
if(!C.a.L(p,s)){s.sb0(p.length)
C.a.h(p,s)}s=i.gaQ(i)
r=h.b
g=s.gck(s)
f=s.gcl(s)
s=s.gcm(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbZ(i)
f=h.c
g=s.gay(s)
r=s.gaz(s)
s=s.gaA()
f.a.uniform3f(f.d,g,r,s)
s=i.ghT()
r=h.d
g=s.gay(s)
f=s.gaz(s)
s=s.gaA()
r.a.uniform3f(r.d,g,f,s)
s=i.gaR(i)
f=h.e
g=s.gay(s)
r=s.gaz(s)
s=s.gaA()
f.a.uniform3f(f.d,g,r,s)
s=l.aU(i.gaQ(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaS()
r=s.gc9(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gex()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb0())
s=h.x
s.a.uniform1i(s.d,0)}s=i.gai(i)
r=h.y
g=s.gbn()
f=s.gaV()
s=s.gb4()
r.a.uniform3f(r.d,g,f,s)
s=i.giy()
f=h.z
f.a.uniform1f(f.d,s)
s=i.giz()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbN()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbO()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbP()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.e:break
case C.c:this.N(p,this.Q.d)
z=this.a
u=this.Q.d
z.a2(z.d6,z.bd,u)
break
case C.d:this.N(p,this.Q.e)
z=this.a
u=this.Q.e
z.Z(z.d7,z.bd,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gR(u).dq(0)
a.Q=u}z=z.id
z.toString
z.a7(u.a1(0,!0))}if(w.dy){this.N(p,this.ch)
z=this.a
u=this.ch
z.Z(z.d8,z.d9,u)
switch(w.r){case C.b:break
case C.e:z=this.a
u=this.cx.f
z=z.be
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.N(p,this.cx.d)
z=this.a
u=this.cx.d
z.a2(z.da,z.bf,u)
u=this.a
z=this.cx.f
u=u.be
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.N(p,this.cx.e)
z=this.a
u=this.cx.e
z.Z(z.dc,z.bf,u)
u=this.a
z=this.cx.f
u=u.be
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.e:z=this.a
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
case C.c:this.N(p,this.cy.d)
z=this.a
u=this.cy.d
z.a2(z.dd,z.bi,u)
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
case C.d:this.N(p,this.cy.e)
z=this.a
u=this.cy.e
z.Z(z.de,z.bi,u)
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
case C.e:z=this.a
t=this.db.f
z=z.bj
z.a.uniform1f(z.d,t)
break
case C.c:this.N(p,this.db.d)
z=this.a
t=this.db.d
z.a2(z.df,z.bk,t)
t=this.a
z=this.db.f
t=t.bj
t.a.uniform1f(t.d,z)
break
case C.d:this.N(p,this.db.e)
z=this.a
t=this.db.e
z.Z(z.dg,z.bk,t)
t=this.a
z=this.db.f
t=t.bj
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.bQ(a)
z.aE(a)
z.hS(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.h_()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cE().a4}},hV:{"^":"cR;0f,a,b,0c,0d,0e",
f8:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.S(this.b,y,a,this,[P.x])
z.b=!0
this.a.T(z)}},
au:function(){this.cs()
this.f8(1)}},cR:{"^":"a;",
T:[function(a){this.a.T(H.l(a,"$isF"))},function(){return this.T(null)},"ec","$1","$0","gaY",0,2,0],
au:["cs",function(){}],
fa:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gB().E(0,this.gaY())
y=this.d
this.d=a
if(a!=null)a.gB().h(0,this.gaY())
z=new D.S(this.b+".texture2D",y,this.d,this,[T.eA])
z.b=!0
this.a.T(z)}},
fb:function(a){},
sbo:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.au()
this.c=C.c
this.fb(null)
z=this.a
z.a=null
z.T(null)}this.fa(a)}},hW:{"^":"cR;a,b,0c,0d,0e"},b3:{"^":"cR;0f,a,b,0c,0d,0e",
cO:function(a){var z,y
if(!J.T(this.f,a)){z=this.f
this.f=a
y=new D.S(this.b+".color",z,a,this,[V.a2])
y.b=!0
this.a.T(y)}},
au:["bv",function(){this.cs()
this.cO(new V.a2(1,1,1))}],
sai:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.au()
z=this.a
z.a=null
z.T(null)}this.cO(b)}},hY:{"^":"b3;0ch,0f,a,b,0c,0d,0e",
f9:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".refraction",y,a,this,[P.x])
z.b=!0
this.a.T(z)}},
au:function(){this.bv()
this.f9(1)}},hZ:{"^":"b3;0ch,0f,a,b,0c,0d,0e",
bK:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.S(this.b+".shininess",y,a,this,[P.x])
z.b=!0
this.a.T(z)}},
au:function(){this.bv()
this.bK(100)}},d1:{"^":"a;"}}],["","",,T,{"^":"",d2:{"^":"cz;"},eA:{"^":"d2;"},iX:{"^":"eA;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.ad()
this.y=z}return z}},iY:{"^":"a;a,0b,0c,0d,0e",
hf:function(a,b,c,d,e){var z,y,x,w
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
w=new T.iX()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a4
W.X(x,"load",H.k(new T.iZ(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
c8:function(a){return this.hf(a,!1,!1,!1,!1)},
f4:function(a,b,c){var z,y,x,w
b=V.dq(b,2)
z=V.dq(a.width,2)
y=V.dq(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cD(null,null)
x.width=z
x.height=y
w=H.l(C.k.dM(x,"2d"),"$isdF")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.lm(w.getImageData(0,0,x.width,x.height))}}},iZ:{"^":"q:23;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.f4(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.T.hK(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.h0()}++x.e}}}],["","",,V,{"^":"",bh:{"^":"a;",
aD:function(a,b){return!0},
i:function(a){return"all"},
$isay:1},ay:{"^":"a;"},e7:{"^":"a;",
aD:["dY",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)if(z[x].aD(0,b))return!0
return!1}],
i:["cr",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isay:1},an:{"^":"e7;0a",
aD:function(a,b){return!this.dY(0,b)},
i:function(a){return"!["+this.cr(0)+"]"}},iq:{"^":"a;0a,0b",
aD:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.cW(this.a)
y=H.cW(this.b)
return z+".."+y},
$isay:1,
q:{
O:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.d(P.o("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.h.aq(a,0)
y=C.h.aq(b,0)
x=new V.iq()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iE:{"^":"a;0a",
e2:function(a){var z,y
if(a.a.length<=0)throw H.d(P.o("May not create a SetMatcher with zero characters."))
z=new H.b2(0,0,[P.E,P.Q])
for(y=new H.cQ(a,a.gm(a),0,[H.aj(a,"u",0)]);y.w();)z.O(0,y.d,!0)
this.a=z},
aD:function(a,b){return this.a.d_(0,b)},
i:function(a){var z=this.a
return P.d_(new H.e2(z,[H.z(z,0)]),0,null)},
$isay:1,
q:{
t:function(a){var z=new V.iE()
z.e2(a)
return z}}},et:{"^":"a;a,b,0c,0d",
ghi:function(a){return this.b},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eG(this.a.k(0,b))
w.a=H.b([],[V.ay])
w.c=!1
C.a.h(this.c,w)
return w},
h2:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.aD(0,a))return w}return},
i:function(a){return this.b}},eE:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.ds(this.b,"\n","\\n")
y=H.ds(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eF:{"^":"a;a,b,0c",
ak:function(a,b,c){var z,y,x
H.v(c,"$isc",[P.f],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.w)(c),++y){x=c[y]
this.c.O(0,x,b)}},
i:function(a){return this.b}},j6:{"^":"a;0a,0b,0c",
k:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.et(this,b)
z.c=H.b([],[V.eG])
this.a.O(0,b,z)}return z},
G:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eF(this,a)
y=P.f
z.c=new H.b2(0,0,[y,y])
this.b.O(0,a,z)}return z},
dH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.eE])
y=this.c
x=[P.E]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.aq(a,t)
r=y.h2(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d_(w,0,null)
throw H.d(P.o("Untokenizable string [state: "+y.ghi(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d_(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eE(o==null?p.b:o,q,t)}++t}}},
q:{
cj:function(){var z,y
z=new V.j6()
y=P.f
z.a=new H.b2(0,0,[y,V.et])
z.b=new H.b2(0,0,[y,V.eF])
return z}}},eG:{"^":"e7;b,0c,0a",
i:function(a){return this.b.b+": "+this.cr(0)}}}],["","",,X,{"^":"",dE:{"^":"a;",$isaA:1},hr:{"^":"ex;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.ad()
this.x=z}return z}},ic:{"^":"a;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.ad()
this.f=z}return z},
aH:[function(a){var z
H.l(a,"$isF")
z=this.f
if(!(z==null))z.J(a)},function(){return this.aH(null)},"hW","$1","$0","gcv",0,2,0],
saN:function(a){var z,y
if(!J.T(this.b,a)){z=this.b
if(z!=null)z.gB().E(0,this.gcv())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gcv())
z=new D.S("mover",y,this.b,this,[U.bU])
z.b=!0
this.aH(z)}},
$isaA:1,
$isdE:1},ex:{"^":"a;"}}],["","",,V,{"^":"",
lL:function(a){P.j5(C.C,new V.lM(a))},
aL:{"^":"a;",
aX:function(a){this.b=new P.hu(C.D)
this.c=null
this.d=H.b([],[[P.c,W.b_]])},
D:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.b_]))
y=a.split("\n")
for(z=y.length,x=[W.b_],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.H(u)
s=this.b.eo(u,0,u.length)
r=s==null?u:s
C.B.dQ(t,H.ds(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbl(this.d),t)}},
dv:function(a,b){var z,y,x,w
H.v(b,"$isc",[P.f],"$asc")
this.d=H.b([],[[P.c,W.b_]])
z=C.a.l(b,"\n")
y=this.c
if(y==null){y=this.b5()
this.c=y}for(y=y.dH(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)this.bm(y[w])}},
lM:{"^":"q:40;a",
$1:function(a){H.l(a,"$isb5")
P.dr(C.i.dG(this.a.gh6(),2)+" fps")}},
h7:{"^":"aL;a,0b,0c,0d",
bm:function(a){switch(a.a){case"Class":this.D(a.b,"#551")
break
case"Comment":this.D(a.b,"#777")
break
case"Id":this.D(a.b,"#111")
break
case"Num":this.D(a.b,"#191")
break
case"Reserved":this.D(a.b,"#119")
break
case"String":this.D(a.b,"#171")
break
case"Symbol":this.D(a.b,"#616")
break
case"Type":this.D(a.b,"#B11")
break
case"Whitespace":this.D(a.b,"#111")
break}},
b5:function(){var z,y,x,w
z=V.cj()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.t(new H.r("_"))
C.a.h(y.a,x)
x=V.O("a","z")
C.a.h(y.a,x)
x=V.O("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.t(new H.r("_"))
C.a.h(x.a,y)
y=V.O("0","9")
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.t(new H.r("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.t(new H.r("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.t(new H.r("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"OpenDoubleStr")
y=V.t(new H.r('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.t(new H.r('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.t(new H.r("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.t(new H.r('"'))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bh())
x=z.k(0,"Start").l(0,"OpenSingleStr")
y=V.t(new H.r("'"))
C.a.h(x.a,y)
y=z.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.t(new H.r("'"))
C.a.h(y.a,x)
x=z.k(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.t(new H.r("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.t(new H.r("'"))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bh())
x=z.k(0,"Start").l(0,"Slash")
y=V.t(new H.r("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.t(new H.r("/"))
C.a.h(y.a,x)
x=z.k(0,"Comment").l(0,"EndComment")
y=V.t(new H.r("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.an()
w=[V.ay]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.r("\n"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"MLComment")
x=V.t(new H.r("*"))
C.a.h(y.a,x)
x=z.k(0,"MLComment").l(0,"MLCStar")
y=V.t(new H.r("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"MLComment")
x=new V.an()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.r("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"EndComment")
x=V.t(new H.r("/"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Whitespace")
y=V.t(new H.r(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Whitespace").l(0,"Whitespace")
x=V.t(new H.r(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Int")
x.d=x.a.G("Num")
x=z.k(0,"Float")
x.d=x.a.G("Num")
x=z.k(0,"Sym")
x.d=x.a.G("Symbol")
x=z.k(0,"CloseDoubleStr")
x.d=x.a.G("String")
x=z.k(0,"CloseSingleStr")
x.d=x.a.G("String")
x=z.k(0,"EndComment")
x.d=x.a.G("Comment")
x=z.k(0,"Whitespace")
x.d=x.a.G("Whitespace")
x=z.k(0,"Id")
y=x.a.G("Id")
x.d=y
x=[P.f]
y.ak(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.ak(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.ak(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hs:{"^":"aL;a,0b,0c,0d",
bm:function(a){switch(a.a){case"Builtin":this.D(a.b,"#411")
break
case"Comment":this.D(a.b,"#777")
break
case"Id":this.D(a.b,"#111")
break
case"Num":this.D(a.b,"#191")
break
case"Preprocess":this.D(a.b,"#737")
break
case"Reserved":this.D(a.b,"#119")
break
case"Symbol":this.D(a.b,"#611")
break
case"Type":this.D(a.b,"#171")
break
case"Whitespace":this.D(a.b,"#111")
break}},
b5:function(){var z,y,x,w
z=V.cj()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.t(new H.r("_"))
C.a.h(y.a,x)
x=V.O("a","z")
C.a.h(y.a,x)
x=V.O("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.t(new H.r("_"))
C.a.h(x.a,y)
y=V.O("0","9")
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.t(new H.r("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.t(new H.r("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.t(new H.r("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Slash")
y=V.t(new H.r("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.t(new H.r("/"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Slash").l(0,"Sym").a,new V.bh())
x=z.k(0,"Comment").l(0,"EndComment")
y=V.t(new H.r("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.an()
w=[V.ay]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.r("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Preprocess")
x=V.t(new H.r("#"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"Preprocess")
y=new V.an()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.r("\n"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"EndPreprocess")
y=V.t(new H.r("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Whitespace")
x=V.t(new H.r(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Whitespace").l(0,"Whitespace")
y=V.t(new H.r(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Int")
y.d=y.a.G("Num")
y=z.k(0,"Float")
y.d=y.a.G("Num")
y=z.k(0,"Sym")
y.d=y.a.G("Symbol")
y=z.k(0,"EndComment")
y.d=y.a.G("Comment")
y=z.k(0,"EndPreprocess")
y.d=y.a.G("Preprocess")
y=z.k(0,"Whitespace")
y.d=y.a.G("Whitespace")
y=z.k(0,"Id")
x=y.a.G("Id")
y.d=x
y=[P.f]
x.ak(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.ak(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.ak(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
ht:{"^":"aL;a,0b,0c,0d",
bm:function(a){switch(a.a){case"Attr":this.D(a.b,"#911")
this.D("=","#111")
break
case"Id":this.D(a.b,"#111")
break
case"Other":this.D(a.b,"#111")
break
case"Reserved":this.D(a.b,"#119")
break
case"String":this.D(a.b,"#171")
break
case"Symbol":this.D(a.b,"#616")
break}},
b5:function(){var z,y,x
z=V.cj()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.t(new H.r("_"))
C.a.h(y.a,x)
x=V.O("a","z")
C.a.h(y.a,x)
x=V.O("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.t(new H.r("_"))
C.a.h(x.a,y)
y=V.O("0","9")
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Id").l(0,"Attr")
x=V.t(new H.r("="))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Sym")
x=V.t(new H.r("</\\-!>="))
C.a.h(y.a,x)
x=z.k(0,"Sym").l(0,"Sym")
y=V.t(new H.r("</\\-!>="))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"OpenStr")
x=V.t(new H.r('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenStr").l(0,"CloseStr")
y=V.t(new H.r('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenStr").l(0,"EscStr")
x=V.t(new H.r("\\"))
C.a.h(y.a,x)
x=z.k(0,"EscStr").l(0,"OpenStr")
y=V.t(new H.r('"'))
C.a.h(x.a,y)
C.a.h(z.k(0,"OpenStr").l(0,"OpenStr").a,new V.bh())
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bh())
y=z.k(0,"Other").l(0,"Other")
x=new V.an()
x.a=H.b([],[V.ay])
C.a.h(y.a,x)
y=V.t(new H.r('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Sym")
y.d=y.a.G("Symbol")
y=z.k(0,"CloseStr")
y.d=y.a.G("String")
y=z.k(0,"Id")
x=y.a.G("Id")
y.d=x
x.ak(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
x=z.k(0,"Attr")
x.d=x.a.G("Attr")
x=z.k(0,"Other")
x.d=x.a.G("Other")
return z}},
ie:{"^":"aL;a,0b,0c,0d",
dv:function(a,b){H.v(b,"$isc",[P.f],"$asc")
this.d=H.b([],[[P.c,W.b_]])
this.D(C.a.l(b,"\n"),"#111")},
bm:function(a){},
b5:function(){return}},
iJ:{"^":"a;0a,0b",
e4:function(a,b){var z,y,x,w,v,u,t
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
W.X(z,"scroll",H.k(new V.iM(x),{func:1,ret:-1,args:[t]}),!1,t)},
cV:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isc",[P.f],"$asc")
this.fg()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.dH(C.a.hb(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
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
if(H.fH(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.fo(C.u,s,C.p,!1)
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
dL:function(a){var z,y,x,w
z=new V.h7("dart")
z.aX("dart")
y=new V.hs("glsl")
y.aX("glsl")
x=new V.ht("html")
x.aX("html")
w=C.a.h3(H.b([z,y,x],[V.aL]),new V.iN(a))
if(w!=null)return w
z=new V.ie("plain")
z.aX("plain")
return z},
cT:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a2,"$isc",[P.f],"$asc")
z=H.b([],[P.E])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dl(w).bs(w,"+")){C.a.O(a2,x,C.h.aW(w,1))
C.a.h(z,1)
y=!0}else if(C.h.bs(w,"-")){C.a.O(a2,x,C.h.aW(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.dL(a0)
v.dv(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.fo(C.u,a,C.p,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dv(null)
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
if(x>=z.length)return H.e(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.w)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.w)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gP(w);b.w();)h.appendChild(b.gI(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
fg:function(){var z,y,x,w
if(this.b!=null)return
z=V.cj()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Bold")
x=V.t(new H.r("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Bold").l(0,"Bold")
x=new V.an()
w=[V.ay]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.r("*"))
C.a.h(x.a,y)
y=z.k(0,"Bold").l(0,"BoldEnd")
x=V.t(new H.r("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Italic")
x=V.t(new H.r("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Italic").l(0,"Italic")
x=new V.an()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.r("_"))
C.a.h(x.a,y)
y=z.k(0,"Italic").l(0,"ItalicEnd")
x=V.t(new H.r("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Code")
x=V.t(new H.r("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Code").l(0,"Code")
x=new V.an()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.t(new H.r("`"))
C.a.h(x.a,y)
y=z.k(0,"Code").l(0,"CodeEnd")
x=V.t(new H.r("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"LinkHead")
x=V.t(new H.r("["))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"LinkHead").l(0,"LinkTail")
x=V.t(new H.r("|"))
C.a.h(y.a,x)
x=z.k(0,"LinkHead").l(0,"LinkEnd")
y=V.t(new H.r("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkHead").l(0,"LinkHead")
y=new V.an()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.r("|]"))
C.a.h(y.a,x)
x=z.k(0,"LinkTail").l(0,"LinkEnd")
y=V.t(new H.r("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkTail").l(0,"LinkTail")
y=new V.an()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.r("|]"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bh())
x=z.k(0,"Other").l(0,"Other")
y=new V.an()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.t(new H.r("*_`["))
C.a.h(y.a,x)
x=z.k(0,"BoldEnd")
x.d=x.a.G("Bold")
x=z.k(0,"ItalicEnd")
x.d=x.a.G("Italic")
x=z.k(0,"CodeEnd")
x.d=x.a.G("Code")
x=z.k(0,"LinkEnd")
x.d=x.a.G("Link")
x=z.k(0,"Other")
x.d=x.a.G("Other")
this.b=z},
q:{
iK:function(a,b){var z=new V.iJ()
z.e4(a,!0)
return z}}},
iM:{"^":"q:23;a",
$1:function(a){P.eC(C.l,new V.iL(this.a))}},
iL:{"^":"q:1;a",
$0:function(){var z,y,x
z=C.i.a6(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
iN:{"^":"q:41;a",
$1:function(a){return H.l(a,"$isaL").a===this.a}}}],["","",,F,{"^":"",
fD:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=V.iK("Test 005",!0)
y=W.cD(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.f]
z.cV(H.b(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."],x))
z.cV(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
v=E.j3(w,!0,!0,!0,!1)
u=new E.aO()
u.a=""
u.b=!0
x=E.aO
t=O.cF(x)
u.y=t
t.br(u.ghj(),u.ghl())
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
u.scp(0,null)
u.saN(null)
s=F.er()
F.bH(s,null,null,1,1,1,0,0,1)
F.bH(s,null,null,1,1,0,1,0,3)
F.bH(s,null,null,1,1,0,0,1,2)
F.bH(s,null,null,1,1,-1,0,0,0)
F.bH(s,null,null,1,1,0,-1,0,0)
F.bH(s,null,null,1,1,0,0,-1,3)
s.ax()
s.hh(new F.jx(),new F.i9())
u.scp(0,s)
t=new U.en()
t.a=0
t.b=0
t.c=0
t.d=0
t.e=0
t.f=0
t.r=0
t.sdI(0)
t.sdw(0,0)
t.sdC(0)
r=t.d
if(!$.m.$2(r,0.1)){q=t.d
t.d=0.1
r=new D.S("deltaYaw",q,0.1,t,[P.x])
r.b=!0
t.at(r)}r=t.e
if(!$.m.$2(r,0.21)){q=t.e
t.e=0.21
r=new D.S("deltaPitch",q,0.21,t,[P.x])
r.b=!0
t.at(r)}r=t.f
if(!$.m.$2(r,0.32)){q=t.f
t.f=0.32
r=new D.S("deltaRoll",q,0.32,t,[P.x])
r.b=!0
t.at(r)}u.saN(t)
p=v.f.c8("../resources/CtrlPnlColor.png")
o=new O.hS()
t=O.cF(V.ar)
o.e=t
t.br(o.geB(),o.geC())
t=new O.b3(o,"emission")
t.c=C.b
t.f=new V.a2(0,0,0)
o.f=t
t=new O.b3(o,"ambient")
t.c=C.b
t.f=new V.a2(0,0,0)
o.r=t
t=new O.b3(o,"diffuse")
t.c=C.b
t.f=new V.a2(0,0,0)
o.x=t
t=new O.b3(o,"invDiffuse")
t.c=C.b
t.f=new V.a2(0,0,0)
o.y=t
t=new O.hZ(o,"specular")
t.c=C.b
t.f=new V.a2(0,0,0)
t.ch=100
o.z=t
t=new O.hW(o,"bump")
t.c=C.b
o.Q=t
o.ch=null
t=new O.b3(o,"reflect")
t.c=C.b
t.f=new V.a2(0,0,0)
o.cx=t
t=new O.hY(o,"refract")
t.c=C.b
t.f=new V.a2(0,0,0)
t.ch=1
o.cy=t
t=new O.hV(o,"alpha")
t.c=C.b
t.f=1
o.db=t
t=new D.hG()
t.ct(D.V)
t.e=H.b([],[D.c8])
t.f=H.b([],[D.ig])
t.r=H.b([],[D.iP])
t.x=H.b([],[D.j_])
t.y=H.b([],[D.j0])
t.z=H.b([],[D.j1])
t.Q=null
t.ch=null
t.co(t.geA(),t.geU(),t.geV())
o.dx=t
r=t.Q
if(r==null){r=D.ad()
t.Q=r
t=r}else t=r
t.h(0,o.gf2())
t=o.dx
r=t.ch
if(r==null){r=D.ad()
t.ch=r
t=r}else t=r
t.h(0,o.gaY())
o.dy=null
t=o.dx
r=U.dI(V.e9(new V.aB(0,0,0),new V.M(0,1,0),new V.M(1,-1,-3)))
n=new V.a2(1,1,1)
m=new D.c8()
m.c=new V.a2(1,1,1)
m.a=new V.M(0,0,1)
q=m.b
m.b=r
r.gB().h(0,m.gea())
r=new D.S("mover",q,m.b,m,[U.bU])
r.b=!0
m.ao(r)
if(!m.c.t(0,n)){q=m.c
m.c=n
r=new D.S("color",q,n,m,[V.a2])
r.b=!0
m.ao(r)}t.h(0,m)
o.f.sbo(v.f.c8("../resources/CtrlPnlEmission.png"))
t=o.r
t.sai(0,new V.a2(0.2,0.2,0.2))
t=o.x
t.sai(0,new V.a2(0.8,0.8,0.8))
o.r.sbo(p)
o.x.sbo(p)
o.z.sbo(v.f.c8("../resources/CtrlPnlSpecular.png"))
t=o.z
if(t.c===C.b){t.c=C.e
t.bv()
t.bK(100)
r=t.a
r.a=null
r.T(null)}t.bK(10)
t=new M.hi()
x=O.cF(x)
t.d=x
x.br(t.geE(),t.geF())
t.e=null
t.f=null
t.r=null
t.x=null
l=new X.ic()
l.c=1.0471975511965976
l.d=0.1
l.e=2000
l.saN(null)
x=l.c
if(!$.m.$2(x,1.0471975511965976)){q=l.c
l.c=1.0471975511965976
x=new D.S("fov",q,1.0471975511965976,l,[P.x])
x.b=!0
l.aH(x)}x=l.d
if(!$.m.$2(x,0.1)){q=l.d
l.d=0.1
x=new D.S("near",q,0.1,l,[P.x])
x.b=!0
l.aH(x)}x=l.e
if(!$.m.$2(x,2000)){q=l.e
l.e=2000
x=new D.S("far",q,2000,l,[P.x])
x.b=!0
l.aH(x)}x=t.a
if(x!==l){if(x!=null)x.gB().E(0,t.ga8())
q=t.a
t.a=l
l.gB().h(0,t.ga8())
x=new D.S("camera",q,t.a,t,[X.dE])
x.b=!0
t.ap(x)}k=new X.hr()
x=new V.c5(0,0,0,1)
k.a=x
k.b=!0
k.c=2000
k.d=!0
k.e=0
k.f=!1
x=V.em(0,0,1,1)
k.r=x
x=t.b
if(x!==k){if(x!=null)x.gB().E(0,t.ga8())
q=t.b
t.b=k
k.gB().h(0,t.ga8())
x=new D.S("target",q,t.b,t,[X.ex])
x.b=!0
t.ap(x)}t.sdE(null)
t.sdE(o)
t.d.h(0,u)
t.a.saN(U.dI(V.az(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
x=v.d
if(x!==t){if(x!=null)x.gB().E(0,v.gcu())
v.d=t
t.gB().h(0,v.gcu())
v.e6()}x=v.z
if(x==null){x=D.ad()
v.z=x}t={func:1,ret:-1,args:[D.F]}
r=H.k(new F.lE(z,o),t)
m=x.b
if(m==null){t=H.b([],[t])
x.b=t
x=t}else x=m
C.a.h(x,r)
V.lL(v)},
lE:{"^":"q:8;a,b",
$1:function(a){var z,y,x,w
H.l(a,"$isF")
z=this.a
y=this.b
x=y.a
w=[P.f]
z.cT("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.cT("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dZ.prototype
return J.dY.prototype}if(typeof a=="string")return J.ce.prototype
if(a==null)return J.e_.prototype
if(typeof a=="boolean")return J.hA.prototype
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.c_=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.ct=function(a){if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.lq=function(a){if(typeof a=="number")return J.cd.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cl.prototype
return a}
J.dl=function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cl.prototype
return a}
J.be=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cu(a)}
J.T=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).t(a,b)}
J.fJ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lq(a).al(a,b)}
J.fK=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lB(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c_(a).j(a,b)}
J.fL=function(a,b,c,d){return J.be(a).cU(a,b,c,d)}
J.cx=function(a,b,c){return J.c_(a).fS(a,b,c)}
J.cy=function(a,b){return J.ct(a).A(a,b)}
J.fM=function(a,b){return J.ct(a).K(a,b)}
J.fN=function(a){return J.be(a).gfN(a)}
J.aW=function(a){return J.J(a).gS(a)}
J.aX=function(a){return J.ct(a).gP(a)}
J.aY=function(a){return J.c_(a).gm(a)}
J.fO=function(a){return J.be(a).gcd(a)}
J.fP=function(a){return J.be(a).ghJ(a)}
J.du=function(a){return J.ct(a).hz(a)}
J.fQ=function(a,b,c){return J.dl(a).aG(a,b,c)}
J.fR=function(a){return J.dl(a).hR(a)}
J.a1=function(a){return J.J(a).i(a)}
I.aU=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.c3.prototype
C.k=W.cC.prototype
C.B=W.b_.prototype
C.E=J.n.prototype
C.a=J.b1.prototype
C.F=J.dY.prototype
C.f=J.dZ.prototype
C.G=J.e_.prototype
C.i=J.cd.prototype
C.h=J.ce.prototype
C.N=J.bR.prototype
C.R=H.i5.prototype
C.S=W.i6.prototype
C.v=J.id.prototype
C.T=P.cX.prototype
C.w=W.iW.prototype
C.o=J.cl.prototype
C.x=W.bF.prototype
C.y=W.jF.prototype
C.z=new P.ib()
C.A=new P.jr()
C.j=new P.kr()
C.b=new A.c6(0,"ColorSourceType.None")
C.e=new A.c6(1,"ColorSourceType.Solid")
C.c=new A.c6(2,"ColorSourceType.Texture2D")
C.d=new A.c6(3,"ColorSourceType.TextureCube")
C.l=new P.bk(0)
C.C=new P.bk(5e6)
C.D=new P.hv("element",!0,!1,!1,!1)
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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

C.J=function(getTagFallback) {
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
C.K=function() {
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
C.L=function(hooks) {
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
C.M=function(hooks) {
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
C.O=H.b(I.aU(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.P=H.b(I.aU(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.Q=H.b(I.aU([]),[P.f])
C.u=H.b(I.aU([0,0,65498,45055,65535,34815,65534,18431]),[P.E])
C.m=H.b(I.aU(["bind","if","ref","repeat","syntax"]),[P.f])
C.n=H.b(I.aU(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.p=new P.jq(!1)
$.aq=0
$.bi=null
$.dz=null
$.dd=!1
$.fA=null
$.fv=null
$.fG=null
$.cs=null
$.cv=null
$.dm=null
$.ba=null
$.bJ=null
$.bK=null
$.de=!1
$.P=C.j
$.ax=null
$.cG=null
$.dU=null
$.dT=null
$.dP=null
$.dO=null
$.dN=null
$.dM=null
$.m=V.i_()
$.ef=null
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
I.$lazy(y,x,w)}})(["dL","$get$dL",function(){return H.fz("_$dart_dartClosure")},"cM","$get$cM",function(){return H.fz("_$dart_js")},"eH","$get$eH",function(){return H.at(H.ck({
toString:function(){return"$receiver$"}}))},"eI","$get$eI",function(){return H.at(H.ck({$method$:null,
toString:function(){return"$receiver$"}}))},"eJ","$get$eJ",function(){return H.at(H.ck(null))},"eK","$get$eK",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eO","$get$eO",function(){return H.at(H.ck(void 0))},"eP","$get$eP",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eM","$get$eM",function(){return H.at(H.eN(null))},"eL","$get$eL",function(){return H.at(function(){try{null.$method$}catch(z){return z.message}}())},"eR","$get$eR",function(){return H.at(H.eN(void 0))},"eQ","$get$eQ",function(){return H.at(function(){try{(void 0).$method$}catch(z){return z.message}}())},"da","$get$da",function(){return P.jG()},"bL","$get$bL",function(){return[]},"fn","$get$fn",function(){return P.iu("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dJ","$get$dJ",function(){return{}},"f8","$get$f8",function(){return P.e4(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)},"db","$get$db",function(){return P.e3(P.f,P.bQ)},"f1","$get$f1",function(){return Z.ah(0)},"f_","$get$f_",function(){return Z.ah(511)},"aG","$get$aG",function(){return Z.ah(1)},"aF","$get$aF",function(){return Z.ah(2)},"aE","$get$aE",function(){return Z.ah(4)},"aH","$get$aH",function(){return Z.ah(8)},"aI","$get$aI",function(){return Z.ah(16)},"bD","$get$bD",function(){return Z.ah(32)},"bE","$get$bE",function(){return Z.ah(64)},"f0","$get$f0",function(){return Z.ah(96)},"b8","$get$b8",function(){return Z.ah(128)},"aD","$get$aD",function(){return Z.ah(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.F]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.am]},{func:1,ret:P.L,args:[F.al]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[P.E,[P.h,E.aO]]},{func:1,ret:P.L,args:[D.F]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:P.Q,args:[W.A]},{func:1,args:[,]},{func:1,ret:P.Q,args:[W.as]},{func:1,ret:P.Q,args:[P.f]},{func:1,ret:W.A},{func:1,ret:P.L,args:[,]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.F]}]},{func:1,ret:P.L,args:[,,]},{func:1,ret:-1,args:[P.E,[P.h,D.V]]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.E,[P.h,V.ar]]},{func:1,ret:P.L,args:[W.a4]},{func:1,ret:P.f,args:[P.E]},{func:1,ret:P.Q,args:[W.R,P.f,P.f,W.bY]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,P.f]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,args:[P.f]},{func:1,ret:P.L,args:[,],opt:[,]},{func:1,ret:P.L,args:[P.Y]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.Q,args:[P.x,P.x]},{func:1,ret:-1,args:[W.bF]},{func:1,ret:P.Q,args:[[P.h,D.V]]},{func:1,ret:P.L,args:[F.av,P.x,P.x]},{func:1,ret:-1,args:[P.a],opt:[P.ao]},{func:1,ret:P.L,args:[P.b5]},{func:1,ret:P.Q,args:[V.aL]},{func:1,ret:W.R,args:[W.A]}]
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
if(x==y)H.lO(d||a)
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
Isolate.dj=a.dj
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
if(typeof dartMainRunner==="function")dartMainRunner(F.fD,[])
else F.fD([])})})()
//# sourceMappingURL=test.dart.js.map
